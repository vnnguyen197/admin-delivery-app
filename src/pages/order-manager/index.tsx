import React, { useEffect, useState } from "react";
import { Alert, Button, Modal, Tabs } from "antd";
import {
  StyleContainer,
  StyleDes,
  StyleInfo,
  StyleTitle,
  StyleContent,
  StyleContentOrder,
  StyleContentTitle,
  StyleContentDetails,
  StyleContentSender,
  StyleButton,
  StyleOrder,
  StyleErrorPopup,
  StyleTitleEmpty,
  StyleEmptyOrder,
  StyleDetailTitle,
  StyleDetailSubTitle,
  StyleInfoUser,
  StyleModal,
  StyleContentCenter,
} from "./style";
import { StyleContentLeft } from "pages/tag/style";
import { SlideBar } from "components/SlideBar";
import { StyleContetnRight } from "pages/dashboard/style";
import orderAPI from "services/orderAPI";
import empty from "assets/images/empty_result.svg";

const OrderManager: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [idOrder, setIdOrder] = useState("");

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getOrder = async () => {
    const data = await orderAPI.getOrder();
    setData(data?.data?.rows);
  };

  const showModal = (id: any) => {
    setIsModalOpen(true);
    setIdOrder(id);
  };

  useEffect(() => {
    getOrder();
  }, []);

  const filterNew = data?.filter((item: any) => item.status === "NEW");
  const filterShipping = data?.filter(
    (item: any) => item.status === "SHIPPING"
  );
  const filterDone = data?.filter((item: any) => item.status === "DONE");
  const filterCancel = data?.filter((item: any) => item.status === "CANCEL");
  const filterDetailOrder: any = data?.filter(
    (item: any) => item?.id === idOrder
  );

  const items: any = [
    {
      key: "NEW",
      label: `Đơn đã phê duyệt (${filterNew.length})`,
      children:
        filterNew.length !== 0 ? (
          filterNew?.map((item: any) => (
            <StyleOrder>
              <StyleContentOrder onClick={() => showModal(item?.id)}>
                <StyleContentTitle>{item?.name}</StyleContentTitle>
                <StyleContentDetails>
                  mô tả: {item?.description}
                </StyleContentDetails>
                <StyleContentSender>
                  người gởi: {item.senderName}
                </StyleContentSender>
              </StyleContentOrder>
            </StyleOrder>
          ))
        ) : (
          <StyleEmptyOrder>
            <img src={empty} alt="empty order" width={400} height={400} />
            <StyleTitleEmpty>Không có đơn hàng hiển thị</StyleTitleEmpty>
          </StyleEmptyOrder>
        ),
    },
    {
      key: "SHIPPING",
      label: `Đơn đang giao (${filterShipping.length})`,
      children:
        filterShipping.length !== 0 ? (
          filterShipping?.map((item: any) => (
            <StyleOrder>
              <StyleContentOrder onClick={() => showModal(item?.id)}>
                <StyleContentTitle>{item?.name}</StyleContentTitle>
                <StyleContentDetails>
                  mô tả: {item?.description}
                </StyleContentDetails>
                <StyleContentSender>
                  người gởi: {item.senderName}
                </StyleContentSender>
              </StyleContentOrder>
            </StyleOrder>
          ))
        ) : (
          <StyleEmptyOrder>
            <img src={empty} alt="empty order" width={400} height={400} />
            <StyleTitleEmpty>Không có đơn hàng hiển thị</StyleTitleEmpty>
          </StyleEmptyOrder>
        ),
    },
    {
      key: "DONE",
      label: `Đơn đã giao (${filterDone.length})`,
      children:
        filterDone.length !== 0 ? (
          filterDone?.map((item: any) => (
            <StyleOrder>
              <StyleContentOrder onClick={() => showModal(item?.id)}>
                <StyleContentTitle>{item?.name}</StyleContentTitle>
                <StyleContentDetails>
                  mô tả: {item?.description}
                </StyleContentDetails>
                <StyleContentSender>
                  người gởi: {item.senderName}
                </StyleContentSender>
              </StyleContentOrder>
            </StyleOrder>
          ))
        ) : (
          <StyleEmptyOrder>
            <img src={empty} alt="empty order" width={400} height={400} />
            <StyleTitleEmpty>Không có đơn hàng hiển thị</StyleTitleEmpty>
          </StyleEmptyOrder>
        ),
    },
    {
      key: "CANCEL",
      label: `Đơn đã hủy (${filterCancel.length})`,
      children:
        filterCancel.length !== 0 ? (
          filterCancel?.map((item: any) => (
            <StyleOrder>
              <StyleContentOrder onClick={() => showModal(item?.id)}>
                <StyleContentTitle>{item?.name}</StyleContentTitle>
                <StyleContentDetails>
                  mô tả: {item?.description}
                </StyleContentDetails>
                <StyleContentSender>
                  người gởi: {item.senderName}
                </StyleContentSender>
              </StyleContentOrder>
            </StyleOrder>
          ))
        ) : (
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
          <StyleTitle>Quản lý đơn hàng</StyleTitle>
          <StyleDes>
            Theo dõi giao hàng liên quan đến việc vận chuyển của đơn hàng
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

export default OrderManager;
