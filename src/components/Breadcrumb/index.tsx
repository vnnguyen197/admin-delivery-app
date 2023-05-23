import React from "react";
import { Breadcrumb } from "antd";

const Breadcrumbs: React.FC = () => (
  <Breadcrumb
    items={[
      {
        title: <a href="/">Trang chủ</a>,
      },
      {
        title: <a href="/account-management">Quản lý tài khoản</a>,
      },
    ]}
  />
);

export default Breadcrumbs;
