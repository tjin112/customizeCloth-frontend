import request from "../plugins/request/index";

export function addToCartApi(data) {
  return request({
    url: "/api/cart",
    method: "post",
    data,
  });
}

export function getUserCartApi(userId) {
  return request({
    url: `/api/cart/find/${userId}`,
    method: "get",
  });
}
