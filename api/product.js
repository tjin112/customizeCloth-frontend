import request from "../plugins/request/index";

export function getAllProducts(data) {
  return request({
    url: "/api/products",
    method: "get",
    params: data,
  });
}
export function getProductById(id) {
  return request({
    url: `/api/products/getbyid/${id}`,
    method: "get",
  });
}

export function searchProducts(params) {
  return request({
    url: `/api/products/search/${params}`,
    method: "get",
  });
}
