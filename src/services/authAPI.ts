import axiosClient from "../utils/axios";

const authAPI = {
  login: (data: any) => {
    const url = `/admin/auth/login`;
    return axiosClient.post(url, data);
  },
};

export default authAPI;
