import React, { useEffect, useState } from "react";
import {
  StyleButton,
  StyleContainer,
  StyleContent,
  StyleContentCenter,
  StyleContentDetails,
  StyleContentOrder,
  StyleContentSender,
  StyleContentTitle,
  StyleDes,
  StyleDetailSubTitle,
  StyleDetailTitle,
  StyleInfo,
  StyleInfoUser,
  StyleModal,
  StyleOrder,
  StyleTitle,
  StyleAction,
  StyleEmptyOrder,
  StyleTitleEmpty,
} from "./style";
import { Modal, Tabs } from "antd";
import { StyleContentLeft } from "pages/tag/style";
import { SlideBar } from "components/SlideBar";
import { StyleContetnRight } from "../dashboard/style";
import orderAPI from "services/orderAPI";
import { useLoading } from "hooks/LoadingContext";
import empty from "assets/images/empty_result.svg";

export const OrderApproval = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [idOrder, setIdOrder] = useState("");

  const { setLoadingTrue, setLoadingFalse } = useLoading();

  const getOrder = async () => {
    const data = await orderAPI.getOrder();
    setData(data?.data?.rows);
  };

  const handleChangeStatus = async (id: any, status: any) => {
    setLoadingTrue();
    try {
      await orderAPI.updateOrder(id, status) ;
      getOrder();
      setLoadingFalse();
    } catch (error: any) {
      setLoadingFalse();
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal = (id: any) => {
    setIsModalOpen(true);
    setIdOrder(id);
  };

  useEffect(() => {
    getOrder();
  }, []);

  const filterApproval = data?.filter(
    (item: any) => item?.status === "WAITING"
  );
  const filterDetailOrder: any = data?.filter(
    (item: any) => item?.id === idOrder
  );

  const items: any = [
    {
      key: "WAITING",
      label: `Đơn chờ phê duyệt (${filterApproval.length})`,
      children: filterApproval.length !==0 ? filterApproval?.map((item: any) => (
        <StyleOrder>
          <StyleContentOrder onClick={() => showModal(item?.id)}>
            <StyleContentTitle>{item.name}</StyleContentTitle>
            <StyleContentDetails>mô tả: {item.description}</StyleContentDetails>
            <StyleContentSender>
              người gởi: {item.senderName}
            </StyleContentSender>
          </StyleContentOrder>
          <StyleAction>
            <StyleButton
              onClick={() =>
                handleChangeStatus(
                  item?.id,
                  item?.status === "WAITING" ? "NEW" : null
                )
              }
            >
              Phê duyệt đơn
            </StyleButton>
            <StyleButton
              style={{ background: "red" }}
              onClick={() =>
                handleChangeStatus(
                  item?.id,
                  item?.status === "WAITING" ? "CANCEL" : null
                )
              }
            >
              Từ chối đơn
            </StyleButton>
          </StyleAction>
        </StyleOrder>
      )) : (
        <StyleEmptyOrder>
          <img src={empty} alt="empty order" width={400} height={400} />
          <StyleTitleEmpty>Không có đơn hàng hiển thị</StyleTitleEmpty>
        </StyleEmptyOrder>
      ),
    },
  ];

  return (
    <StyleContainer>
      <StyleContentLeft>
        <SlideBar />
      </StyleContentLeft>
      <StyleContetnRight>
        <StyleInfo>
          <StyleTitle>Đơn chờ phê duyệt</StyleTitle>
          <StyleDes>
            Những đơn khách hàng tạo xong sẽ được hiển thị ở đây
          </StyleDes>
        </StyleInfo>
        <StyleContent>
          <Tabs size="large" items={items} />
        </StyleContent>
        <Modal
          centered
          title="CHI TIẾT GÓI HÀNG"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={700}
        >
          <StyleModal>
            <StyleInfoUser>Thông tin gói hàng</StyleInfoUser>
            <StyleContentCenter>
              <StyleDetailSubTitle>
                Tên gói hàng:
                <StyleDetailTitle>
                  {filterDetailOrder[0]?.name}
                </StyleDetailTitle>
              </StyleDetailSubTitle>
              <StyleDetailSubTitle>
                Khối lượng(gam):
                <StyleDetailTitle>
                  {filterDetailOrder[0]?.description}
                </StyleDetailTitle>
              </StyleDetailSubTitle>
              <StyleDetailSubTitle>
                Chi tiết gói hàng:
                <StyleDetailTitle>
                  {filterDetailOrder[0]?.productVolume}
                </StyleDetailTitle>
              </StyleDetailSubTitle>
              <StyleDetailSubTitle>
                Các loại tags
                <ul>
                  {filterDetailOrder?.tags?.map((item: any, index: number) => (
                    <StyleDetailTitle>
                      {index + 1}. {item?.name}
                    </StyleDetailTitle>
                  ))}
                </ul>
              </StyleDetailSubTitle>
            </StyleContentCenter>
            <StyleContentCenter>
              <StyleInfoUser>Thông tin người gởi</StyleInfoUser>
              <StyleDetailSubTitle>
                Họ và tên người gởi:
                <StyleDetailTitle>
                  {filterDetailOrder[0]?.senderName}
                </StyleDetailTitle>
              </StyleDetailSubTitle>
              <StyleDetailSubTitle>
                SĐT người gởi:
                <StyleDetailTitle>
                  {filterDetailOrder[0]?.senderPhone}
                </StyleDetailTitle>
              </StyleDetailSubTitle>
              <StyleDetailSubTitle>
                Địa chỉ người gởi:
                <StyleDetailTitle>
                  {filterDetailOrder[0]?.senderStreet}
                </StyleDetailTitle>
              </StyleDetailSubTitle>
            </StyleContentCenter>
            <StyleContentCenter>
              <StyleInfoUser>Thông tin người nhận</StyleInfoUser>
              <StyleDetailSubTitle>
                Họ và tên người nhận:
                <StyleDetailTitle>
                  {filterDetailOrder[0]?.receiverName}
                </StyleDetailTitle>
              </StyleDetailSubTitle>
              <StyleDetailSubTitle>
                SĐT người nhận:
                <StyleDetailTitle>
                  {filterDetailOrder[0]?.receiverPhone}
                </StyleDetailTitle>
              </StyleDetailSubTitle>
              <StyleDetailSubTitle>
                Địa chỉ người nhận:
                <StyleDetailTitle>
                  {filterDetailOrder[0]?.receiverStreet}
                </StyleDetailTitle>
              </StyleDetailSubTitle>
            </StyleContentCenter>
          </StyleModal>
        </Modal>
      </StyleContetnRight>
    </StyleContainer>
  );
};
