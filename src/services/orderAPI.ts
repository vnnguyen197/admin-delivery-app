
import axiosClient from "../utils/axios";

const orderAPI = {
  getOrder: () => {
    const url = `/admin/orders`;
    return axiosClient.get(url);
  },
};  

export default orderAPI;
