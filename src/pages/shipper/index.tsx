import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import userAPI from "services/userAPI";
import { Input } from "antd";
import useDebounce from "hooks/useDebounce";
import { SlideBar } from "components/SlideBar";
import { StyleContainer, StyleContentLeft, StyleContetnRight, StyleTitle } from "./style";
import user from "assets/images/userAccount.png";

const { Search } = Input;

interface DataType {
  key: string;
  fullName: string;
  age: number;
  address: string;
  tags: string[];
  gender?: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "",
    dataIndex: "avatar",
    // colSpan: ,
    render: (imageUrl) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <img
          style={{ borderRadius: "50%" }} // Add margin-right for spacing
          width="50px"
          height="50px"
          src={imageUrl ? imageUrl : user}
          alt="Product"
        />
      </div>
    ),
  },
  {
    title: "Họ và Tên",
    dataIndex: "fullName",
    key: "fullName",
    sorter: (a, b) => a.fullName.localeCompare(b.fullName),
    sortOrder: null,
    // colSpan: 0,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Số điện thoại",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
  {
    title: "Địa chỉ",
    key: "address",
    dataIndex: "address",
  },
  {
    title: "Giới tính",
    key: "gender",
    dataIndex: "gender",
  },
  {
    title: "CCCD/CMND",
    key: "citizenId",
    dataIndex: "citizenId",
  },
  {
    title: "Nơi cấp",
    key: "citizenAdd",
    dataIndex: "citizenAdd",
  },
];

const Shipper: any = (props: any) => {
  const [data, setData] = useState([]);
  const [keySearch, setKeySearch] = useState("");

  const debouncedValue = useDebounce<string>(keySearch, 500);

  const getProfile = async () => {
    const { data } = await userAPI.getUser({
      search: keySearch,
      page: 1,
      limit: 10,
    });
    setData(data.rows);
  };

  const filltedShipper = data?.filter((item: any) => item?.role === "shipper");



  const handleSearch = (event: any) => {
    setKeySearch(event.target.value);
  };

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  const dataList: DataType[] = filltedShipper;

  const [sortOrder, setSortOrder] = useState<"ascend" | "descend" | null>(null);
  const [sortedColumn, setSortedColumn] = useState<string | null>(null);

  const handleChange = (pagination: any, filters: any, sorter: any) => {
    if (sorter.columnKey === sortedColumn) {
      // Clicking on the same column, toggle sort order
      setSortOrder((prevOrder) =>
        prevOrder === "ascend" ? "descend" : "ascend"
      );
    } else {
      // Clicking on a different column, set new sort column and order
      setSortedColumn(sorter.columnKey);
      setSortOrder("ascend");
    }
  };

  const sortedData: DataType[] = [...dataList].sort(
    (a: DataType, b: DataType) => {
      if (sortedColumn === "fullName") {
        return sortOrder === "ascend"
          ? a.fullName.localeCompare(b.fullName)
          : b.fullName.localeCompare(a.fullName);
      }
      return 0;
    }
  );

  return (
    <StyleContainer>
      <StyleContentLeft>
        <SlideBar />
      </StyleContentLeft>
      <StyleContetnRight>
        <StyleTitle>Quản lý Shipper</StyleTitle>
        <Search
          size="large"
          placeholder="Tìm kiếm: Họ và Tên, Số điện thoại"
          style={{ width: 400 }}
          value={keySearch}
          onChange={handleSearch}
        />
        <Table
          columns={columns}
          dataSource={sortedData}
          onChange={handleChange}
          pagination={false}
        />
      </StyleContetnRight>
    </StyleContainer>
  );
};

export default Shipper;
