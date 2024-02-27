import request from "../plugins/request/index";

export function getCategory() {
  return request({
    url: "/api/category",
    method: "get",
  });
}

// export function searchProducts(params) {
//   return request({
//     url: `/api/products/search/${params}`,
//     method: "get",
//   });
// }
