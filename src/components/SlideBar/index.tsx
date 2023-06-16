import React from "react";
import { Account, ContentBottom, Info, StyleImage } from "./style";
import user from "assets/images/user.png";
import {
  LogoutOutlined,
  PieChartTwoTone,
  UserOutlined,
  UsergroupDeleteOutlined,
  CreditCardOutlined,
  RotateRightOutlined,
  DropboxOutlined
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useLoading } from "hooks/LoadingContext";
import useToken from "hooks/useToken";

export const SlideBar = () => {
  const navigate = useNavigate();
  const { setLoadingTrue, setLoadingFalse } = useLoading();
  const { remove } = useToken();

  const logout = async () => {
    setLoadingTrue();
    const timer = setTimeout(() => {
      setLoadingFalse();
      remove();
      navigate("/login");
    }, 200);
    return () => clearTimeout(timer);
  };

  return (
    <Info>
      <StyleImage>
        <img src={user} alt="" width={75} height={75} />
      </StyleImage>
      <ContentBottom>
        <Account onClick={() => navigate("/")}>
          <PieChartTwoTone /> Dashboard
        </Account>
        <Account onClick={() => navigate("/user")}>
          <UserOutlined /> Quản lý người dùng
        </Account>
        <Account onClick={() => navigate("/shipper")}>
        <UsergroupDeleteOutlined /> Quản lý shipper
        </Account>
        <Account onClick={() => navigate("/")}>
        <DropboxOutlined /> Quản lý đơn hàng
        </Account>
        <Account onClick={() => navigate("/")}>
        <RotateRightOutlined /> Phê duyệt đơn hàng
        </Account>
          <Account onClick={() => navigate("/tag")}>
          <CreditCardOutlined /> Quản lý tag
        </Account>
        <Account style={{ color: "red" }} onClick={logout}>
          <LogoutOutlined /> Đăng xuất
        </Account>
      </ContentBottom>
    </Info>
  );
};
