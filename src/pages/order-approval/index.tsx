import React, { useState } from "react";
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
} from "./style";
import { Modal, Tabs } from "antd";
import { StyleContentLeft } from "pages/tag/style";
import { SlideBar } from "components/SlideBar";
import { StyleContetnRight } from "../dashboard/style";

export const OrderApproval = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal = (id: any) => {
    setIsModalOpen(true);
  };
  const items: any = [
    {
      key: "DONE",
      label: "Đơn chờ phê duyệt",
      children: (
        <StyleOrder>
          <StyleContentOrder onClick={showModal}>
            <StyleContentTitle>Gói hàng hôm nay của tôi</StyleContentTitle>
            <StyleContentDetails>
              mô tả: hàng dễ vỡ và có giá trị
            </StyleContentDetails>
            <StyleContentSender>người gởi: người gởi</StyleContentSender>
          </StyleContentOrder>
          <StyleButton>Phê duyệt đơn</StyleButton>
        </StyleOrder>
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
      ) : null} */}
        {/* {isCheckVerify ? (
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
