import axiosClient from "../utils/axios";

export const tagAPI = {
  getTag: () => {
    const url = `/admin/tags`;
    return axiosClient.get(url);
  },
  createTag: (data: any) => {
    const url = `/admin/tags`;
    return axiosClient.post(url, data);
  },
  editTag: (data: any, id:string) => {
    const url = `/admin/tags/${id}`;
    return axiosClient.patch(url, data);
  },
  deleteTag: (id: string) =>{
    const url = `admin/tags/${id}`
    return axiosClient.delete(url)
  }
};
