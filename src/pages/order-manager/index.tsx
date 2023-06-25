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
import orderAPI from "services/orderAPI";
import empty from "assets/images/empty_result.svg";
import { StyleContentLeft } from "pages/tag/style";
import { SlideBar } from "components/SlideBar";
import { StyleContetnRight } from "pages/dashboard/style";

const OrderManager: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const items: any = [
    {
      key: "DONE",
      label: "Đơn đã được phê duyệt",
      children: (
        <StyleOrder>
          <StyleContentOrder onClick={showModal}>
            <StyleContentTitle>Đơn hàng của tôi</StyleContentTitle>
            <StyleContentDetails>mô tả: đẽ vỡ lắm</StyleContentDetails>
            <StyleContentSender>người gởi: Phong Lee</StyleContentSender>
          </StyleContentOrder>
        </StyleOrder>
      ),
      // ) : (
      //   <StyleEmptyOrder>
      //     <img src={empty} alt="empty order" width={400} height={400} />
      //     <StyleTitleEmpty>Không có đơn hàng hiển thị</StyleTitleEmpty>
      //   </StyleEmptyOrder>
      // ),
    },
    {
        key: "DONE",
        label: "Đơn đang giao",
        children: (
          <StyleOrder>
            <StyleContentOrder onClick={showModal}>
              <StyleContentTitle>Đơn hàng của tôi</StyleContentTitle>
              <StyleContentDetails>mô tả: đẽ vỡ lắm</StyleContentDetails>
              <StyleContentSender>người gởi: Phong Lee</StyleContentSender>
            </StyleContentOrder>
          </StyleOrder>
        ),
        // ) : (
        //   <StyleEmptyOrder>
        //     <img src={empty} alt="empty order" width={400} height={400} />
        //     <StyleTitleEmpty>Không có đơn hàng hiển thị</StyleTitleEmpty>
        //   </StyleEmptyOrder>
        // ),
      },
      {
        key: "DONE",
        label: "Đơn đã giao",
        children: (
          <StyleOrder>
            <StyleContentOrder onClick={showModal}>
              <StyleContentTitle>Đơn hàng của tôi</StyleContentTitle>
              <StyleContentDetails>mô tả: đẽ vỡ lắm</StyleContentDetails>
              <StyleContentSender>người gởi: Phong Lee</StyleContentSender>
            </StyleContentOrder>
          </StyleOrder>
        ),
        // ) : (
        //   <StyleEmptyOrder>
        //     <img src={empty} alt="empty order" width={400} height={400} />
        //     <StyleTitleEmpty>Không có đơn hàng hiển thị</StyleTitleEmpty>
        //   </StyleEmptyOrder>
        // ),
      },
      {
        key: "DONE",
        label: "Đơn đã hủy",
        children: (
          <StyleOrder>
            <StyleContentOrder onClick={showModal}>
              <StyleContentTitle>Đơn hàng của tôi</StyleContentTitle>
              <StyleContentDetails>mô tả: đẽ vỡ lắm</StyleContentDetails>
              <StyleContentSender>người gởi: Phong Lee</StyleContentSender>
            </StyleContentOrder>
          </StyleOrder>
        ),
        // ) : (
        //   <StyleEmptyOrder>
        //     <img src={empty} alt="empty order" width={400} height={400} />
        //     <StyleTitleEmpty>Không có đơn hàng hiển thị</StyleTitleEmpty>
        //   </StyleEmptyOrder>
        // ),
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
        {/* {isCheckError ? (
        <StyleErrorPopup>
          <Alert
            message="Không thể nhận đơn hàng"
            description="Bạn đang có đơn hàng ở trạng thái đang giao nên không thể nhận đơn hàng này được!"
            type="error"
            showIcon
            action={
              <Button size="small" onClick={() => setIsCheckError(false)}>
                Đóng
              </Button>
            }
          />
        </StyleErrorPopup>
      ) : null}
      {isCheckVerify ? (
        <StyleErrorPopup>
          <Alert
            message="Không thể nhận đơn hàng"
            description="Tài khoản của bạn chưa được xác thực nên không thể nhận đơn hàng này, vui lòng xác thực tài khoản"
            type="error"
            showIcon
            action={
              <Button size="small" onClick={() => setIsCheckVerify(false)}>
                Đóng
              </Button>
            }
          />
        </StyleErrorPopup>
      ) : null} */}
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
                <StyleDetailTitle>Gói hàng hôm nay của tôi</StyleDetailTitle>
              </StyleDetailSubTitle>
              <StyleDetailSubTitle>
                Khối lượng(gam):
                <StyleDetailTitle>1</StyleDetailTitle>
              </StyleDetailSubTitle>

              <StyleDetailSubTitle>
                Chi tiết gói hàng:
                <StyleDetailTitle>hàng dễ vỡ và có giá trị</StyleDetailTitle>
              </StyleDetailSubTitle>
              <StyleDetailSubTitle>
                Các loại tags
                <ul>1. vật phẩm</ul>
              </StyleDetailSubTitle>
            </StyleContentCenter>
            <StyleContentCenter>
              <StyleInfoUser>Thông tin người gởi</StyleInfoUser>
              <StyleDetailSubTitle>
                Họ và tên người gởi:
                <StyleDetailTitle>Người gởi</StyleDetailTitle>
              </StyleDetailSubTitle>
              <StyleDetailSubTitle>
                SĐT người gởi:
                <StyleDetailTitle>0345721486</StyleDetailTitle>
              </StyleDetailSubTitle>
              <StyleDetailSubTitle>
                Địa chỉ người gởi:
                <StyleDetailTitle>hải châu</StyleDetailTitle>
              </StyleDetailSubTitle>
            </StyleContentCenter>
            <StyleContentCenter>
              <StyleInfoUser>Thông tin người nhận</StyleInfoUser>
              <StyleDetailSubTitle>
                Họ và tên người nhận:
                <StyleDetailTitle>Người nhận</StyleDetailTitle>
              </StyleDetailSubTitle>
              <StyleDetailSubTitle>
                SĐT người nhận:
                <StyleDetailTitle>03465599185</StyleDetailTitle>
              </StyleDetailSubTitle>
              <StyleDetailSubTitle>
                Địa chỉ người nhận:
                <StyleDetailTitle>Liên chiểu</StyleDetailTitle>
              </StyleDetailSubTitle>
            </StyleContentCenter>
          </StyleModal>
        </Modal>
      </StyleContetnRight>
    </StyleContainer>
  );
};

export default OrderManager;
