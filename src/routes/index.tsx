import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import useToken from "hooks/useToken";
import PrivateRoute from "./PrivateRoute";
import DefaultRoute from "./DefaultRoute";
import { LayoutType } from "layouts";
import Dashboard from "pages/dashboard";
import { ListTag } from "pages/tag";
import Shipper from "pages/shipper";
import { OrderApproval } from "pages/order-approval";
import OrderManager from "pages/order-manager";
import User from "pages/user";

export default function Routers() {
  const { setToken } = useToken();

  return (
    <Routes>
      <Route path="/" element={<PrivateRoute layout={LayoutType?.basic} />}>
        <Route path="/user" element={<User />} />
        <Route path="/shipper" element={<Shipper />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/tag" element={<ListTag />} />
        <Route path="/order-approval" element={<OrderApproval />} />
        <Route path="/order-manager" element={<OrderManager />} />
        
      </Route>
      <Route path="/" element={<DefaultRoute layout={LayoutType.blank} />}>
        <Route path="/login" element={<Login setToken={setToken} />} />
      </Route>
    </Routes>
  );
}
