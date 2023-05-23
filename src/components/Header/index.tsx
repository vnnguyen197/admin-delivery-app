import React, { useRef, useState } from "react";
import {
  StyleListHeader,
  HeaderProfile,
  ImageLogo,
  ListDetails,
  Span,
  StyleButton,
  StyleHeader,
  StyleMenuItems,
  StyleProfile,
} from "./styles";
import { Avatar } from "antd";
import logo from "assets/images/home.png";
import {
  UserOutlined,
  LogoutOutlined,
  EditOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import useToken from "hooks/useToken";
import shipper from "assets/images/shipper.jpg";
import user from "assets/images/user.png";
import { useLoading } from "hooks/LoadingContext";

const Header = () => {
  const ref = useRef(null);
  // useOnClickOutside(ref, () => setIsOpen(false));
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { setLoadingTrue, setLoadingFalse } = useLoading();
  const { remove } = useToken();

  const logout = async () => {
    setLoadingTrue();
    const timer = setTimeout(() => {
      setLoadingFalse();
      remove();
      navigate("/login");
      setIsOpen(false);
    }, 200);
    return () => clearTimeout(timer);
  };


  return (
    <StyleHeader>
      {/* <StyleMenuItems onClick={handleNavigateHome}>
        <ImageLogo src={logo} alt="logo" />
        <div style={{ color: "#fff", fontSize: "18px" }}>DELIVERY</div>
      </StyleMenuItems>
      <StyleProfile>
        <StyleListHeader>
          {profile?.role === "user" ? (
            <StyleButton onClick={handleNavigateOrder}>
              <EditOutlined />
              Lên đơn hàng
            </StyleButton>
          ) : null}
          <StyleButton onClick={handleNavigateStatus}>
            <SwapOutlined />
            Theo dõi đơn hàng
          </StyleButton>
          <Avatar
            onClick={() => setIsOpen(!isOpen)}
            src={
              profile?.role === "user"
                ? user
                : profile?.role === "shipper"
                ? shipper
                : null
            }
            size="large"
            icon={<UserOutlined />}
            style={{ color: "#fff", cursor: "pointer" }}
          />
        </StyleListHeader>
        {isOpen && (
          <ListDetails ref={ref}>
            <HeaderProfile onClick={handleNavigateProfile}>
              <Avatar src={profile?.role === "user" ? user : shipper} />
              <Span>{profile?.fullName}</Span>
            </HeaderProfile>
            <HeaderProfile
              onClick={logout}
              style={{ borderTop: "1px solid rgb(239, 239, 239)" }}
            >
              <LogoutOutlined style={{ fontSize: "26px", color: "#08c" }} />
              <Span style={{ color: "red" }}>Đăng xuất</Span>
            </HeaderProfile>
          </ListDetails>
        )}
      </StyleProfile> */}
    </StyleHeader>
  );
};

export default Header;
