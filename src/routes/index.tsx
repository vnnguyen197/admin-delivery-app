import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Information from "pages/account-management";
import useToken from "hooks/useToken";
import PrivateRoute from "./PrivateRoute";
import DefaultRoute from "./DefaultRoute";
import { LayoutType } from "layouts";
import Dashboard from "pages/dashboard";

export default function Routers() {
  const { setToken } = useToken();

  return (
    <Routes>
      <Route path="/" element={<PrivateRoute layout={LayoutType?.basic} />}>
        <Route path="/account-management" element={<Information />} />
        <Route path="/" element={<Dashboard />} />
        
      </Route>
      <Route path="/" element={<DefaultRoute layout={LayoutType.blank} />}>
        <Route path="/login" element={<Login setToken={setToken} />} />
      </Route>
    </Routes>
  );
}
