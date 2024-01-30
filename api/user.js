import request from "../plugins/request/index";

export function loginApi(data) {
  return request({
    url: "/api/account/login",
    method: "post",
    data,
  });
}

export function signupApi(data) {
  return request({
    url: "/api/account/register",
    method: "post",
    data,
  });
}
