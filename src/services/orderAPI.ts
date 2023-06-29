
import axiosClient from "../utils/axios";

const orderAPI = {
  getOrder: () => {
    const url = `/admin/orders`;
    return axiosClient.get(url);
  },
  updateOrder: (id: string, status: string) => {
    const url = `/admin/orders/${id}?status=${status}`;
    return axiosClient.patch(url);
  },
};  

export default orderAPI;
