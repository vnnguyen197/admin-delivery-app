import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { StyleContainer, StyleContentLeft, StyleContetnRight } from "./style";
import { SlideBar } from "components/SlideBar";
import userAPI from "services/userAPI";
import StatisticsAccounts from "./components/StatisticsAccounts";
import StatisticsOrders from "./components/StatisticsOrders";
import orderAPI from "services/orderAPI";

const Dashboard: React.FC = () => {
  const [keyItem, setKeyItem] = useState("1");
  const onChange = (key: any) => {
    setKeyItem(key);
  };

  const [dataList, setDataList] = useState([]);
  const [dataOrder, setDataOrder] = useState([]);

  const [count, setCount] = useState();
  const [countOrder, setCountOrder] = useState();

  const getProfile = async () => {
    const { data } = await userAPI.getUsers();
    setDataList(data.rows);
    setCount(data?.count);
  };

  const filltedUser = dataList?.filter((item: any) => item?.role === "user");
  const filltedShipper = dataList?.filter(
    (item: any) => item?.role === "shipper"
  );

  const emptyData: number[] = [filltedUser.length, filltedShipper.length];
  const emptyLabels: string[] = ["Số lượng User", "số lượng Shipper"];
  const emptyColors: string[] = ["#ff6384", "#36a2eb"];

  const getOrder = async () => {
    const { data } = await orderAPI.getOrder();
    setDataOrder(data.rows);
    setCountOrder(data?.count);
  };

  const filltedWaiting = dataOrder?.filter(
    (item: any) => item?.status === "WAITING"
  );

  const filltedShipping = dataOrder?.filter(
    (item: any) => item?.status === "SHIPPING"
  );

  const filltedDone = dataOrder?.filter((item: any) => item?.status === "DONE");

  const filltedCancel = dataOrder?.filter(
    (item: any) => item?.status === "CANCEL"
  );

  const filltedNew = dataOrder?.filter(
    (item: any) => item?.status === "NEW"
  );


  const emptyDataOrder: number[] = [
    filltedWaiting.length,
    filltedShipping.length,
    filltedDone.length,
    filltedCancel.length,
    filltedNew.length
  ];
  const emptyLabelsOrder: string[] = [
    "Đơn đang chờ phê duyệt",
    "Đơn đang giao",
    "Đơn đã giao",
    "Đơn đã hủy",
    "Đơn đã phê duyệt",
  ];
  const emptyColorsOrder: string[] = [
    "#fffba5",
    "#b7ffba",
    "#18a81e",
    "#ff0000",
    "#1677ff",
  ];

  useEffect(() => {
    getProfile();
    getOrder();
  }, []);

  const items: any = [
    {
      key: "1",
      label: `Thống kê số lượng tài khoản`,
      children: (
        <StatisticsAccounts
          data={emptyData}
          labels={emptyLabels}
          colors={emptyColors}
          count={count}
          filltedUser={filltedUser}
          filltedShipper={filltedShipper}
        />
      ),
    },
    {
      key: "2",
      label: `Thống kê số lượng đơn hàng`,
      children: (
        <StatisticsOrders
          data={emptyDataOrder}
          labels={emptyLabelsOrder}
          colors={emptyColorsOrder}
          countOrder={countOrder}
          filltedWaiting={filltedWaiting}
          filltedShipping={filltedShipping}
          filltedDone={filltedDone}
          filltedCancel={filltedCancel}
          filltedNew={filltedNew}
        />
      ),
    },
  ];

  return (
    <StyleContainer>
      <StyleContentLeft>
        <SlideBar />
      </StyleContentLeft>
      <StyleContetnRight>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </StyleContetnRight>
    </StyleContainer>
  );
};

export default Dashboard;
