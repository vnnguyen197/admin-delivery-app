import React from "react";
import { Account, ContentBottom, Info, StyleImage } from "./style";
import user from "assets/images/user.png";
import {
  LogoutOutlined,
  PieChartTwoTone,
  UserOutlined,
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
        <Account onClick={() => navigate("/account-management")}>
          <UserOutlined /> Quản lý tài khoản
        </Account>
        <Account style={{ color: "red" }} onClick={logout}>
          <LogoutOutlined /> Đăng xuất
        </Account>
      </ContentBottom>
    </Info>
  );
};
