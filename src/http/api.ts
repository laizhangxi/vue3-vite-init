import serviceAxios from "./http";
 
 
export const getUserInfo = (params: object) => {
  return serviceAxios({
    url: "/api/website/queryMenuWebsite",
    method: "post",
    params,
  });
};

export const login = (data: object) => {
  return serviceAxios({
    url: "/Login/CheckLogin",
    method: "post",
    data,
  });
};