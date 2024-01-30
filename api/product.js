import request from "../plugins/request/index";

export function getAllProducts() {
  return request({
    url: "/api/product",
    method: "get",
  });
}

export function searchProducts(params) {
  return request({
    url: `/api/product/search/${params}`,
    method: "get",
  });
}
