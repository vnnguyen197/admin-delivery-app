import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LayoutType } from "layouts";
import useToken from "hooks/useToken";
import Layout from "../layouts/index";

const PrivateRoute = ({ layout }: { layout: LayoutType }) => {
  const { token } = useToken();
  const LayoutTemplate = Layout(layout);

  if (token) {
    return (
      <LayoutTemplate>
        <Outlet />
      </LayoutTemplate>
    );
  } else
    return (
      <>
        <Navigate to="/login" replace={true} />
      </>
    );
};
export default PrivateRoute;
