import React from "react";
import {
  StyleContainer,
  StyleInput,
  StyleForm,
  StyleError,
  Button,
} from "./style";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useFormik } from "formik";
import user from "assets/images/user.png";
import authAPI from "services/authAPI";
import { useNavigate } from "react-router-dom";
import { useLoading } from "hooks/LoadingContext";

const Login = ({ setToken }: { setToken: (accessToken: string) => void }) => {
  const { setLoadingTrue, setLoadingFalse } = useLoading();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    onSubmit: async (values) => {
      setLoadingTrue();
      try {
        const { data } = await authAPI.login(values);
        setToken(data.accessToken);
        setLoadingFalse();
        navigate("/");
      } catch (error: any) {
        setLoadingFalse();
      }
    },
  });

  return (
    <StyleForm onSubmit={formik.handleSubmit}>
      <StyleContainer>
        <div>
          <img src={user} alt="logo user" width={150} height={150} />
          <h3>ADMIN</h3>
        </div>
        <StyleInput>
          <Input
            style={{ backgroundColor: "transparent !important" }}
            size="large"
            name="email"
            placeholder="Nhập emai của bạn"
            prefix={<UserOutlined />}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <StyleError>{formik?.errors?.email}</StyleError>
        </StyleInput>
        <StyleInput>
          <Input.Password
            size="large"
            name="password"
            placeholder="Nhập mật khẩu của bạn"
            prefix={<LockOutlined />}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <StyleError>{formik?.errors?.password}</StyleError>
        </StyleInput>
        <div>
          <Button type="submit">Đăng nhập</Button>
        </div>
      </StyleContainer>
    </StyleForm>
  );
};

export default Login;
