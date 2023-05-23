import axiosClient from "../utils/axios";

const userAPI = {
  getUser: (params: any) => {
    console.log("👋  userAPI.params:", params);
    const url = `/admin/users/?page=${params.page}&limit=${params.limit}&search=${params.search}`;
    return axiosClient.get(url);
  },
  getUsers: () => {
    const url = `/admin/users`;
    return axiosClient.get(url);
  },
};

export default userAPI;
