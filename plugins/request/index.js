import axios from "axios";
import React from "react";
import Setting from "../../setting";

const service = axios.create({
  baseURL: Setting.apiBaseURL,
  timeout: 100000, // 请求超时时间
  // option_server: "",
  headers: {
    "Content-Type": "application/json",
  },
});
/**
 * http request 拦截器
 */
service.interceptors.request.use(
  async (config) => {
    config.headers = {
      "Content-Type": "application/json",
      // authorization: "Bearer e15a6021-7a90-4a57-872e-dfc5f86191bd",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * http response 拦截器
 */
service.interceptors.response.use(
  (response) => {
    const code = response.status || response.data.status;
    switch (code) {
      case 200:
        return response.data || response;
      // [ 示例 ] code === 0 代表没有错误
      case 204:
        return response;
      case 400:
        return Promise.reject(response || { msg: "未知错误" });
      default:
        // 不是正确的 code
        // errorCreate(`${dataAxios.msg}: ${response.config.url}`);
        break;
    }
  },
  (error) => {
    console.log("error=>", error.response);
    if (error.request) {
    } else if (error.response) {
    }
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = error.response.data.message;
          break;
        case 401:
          error.message =
            error.response.data.message || "Oops, thers is something wrong";
          break;
        case 403:
          error.message = "拒绝访问(403)";
          break;
        case 404:
          error.message = "请求出错(404)";
          break;
        case 408:
          error.message = "请求超时(408)";
          break;
        case 500:
          error.message = "服务器错误(500)";
          break;
        case 501:
          error.message = "服务未实现(501)";
          break;
        case 502:
          error.message = "网络错误(502)";
          break;
        case 503:
          error.message = "服务不可用(503)";
          break;
        case 504:
          error.message = "网络超时(504)";
          break;
        case 505:
          error.message = "HTTP版本不受支持(505)";
          break;
        default:
          error.message = "连接出错";
      }
    } else {
      error.message = "连接服务器失败!!!!=>";
    }
    return Promise.reject(error);
  }
);

/**
 * 封装get方法
 * @param url  请求url
 * @param params  请求参数
 * @returns {Promise}
 */
export function get(url, params, config = {}) {
  console.log("paramsparamsparams", params);
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url,
      params: params, // get 请求时带的参数
      timeout: 10000,
      config,
      isAccount: config.isAccount || false,
      isAuth: config.isAuth || false,
    })
      .then((response) => {
        landing(url, params, response.data);
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data, config = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, config)
      .then(
        (response) => {
          if (response)
            //关闭进度条
            resolve(response.data || response);
        },
        (err) => {
          msag("eeeee", err);
          reject(err);
        }
      )
      .catch((e) => {
        msag("eeeee", e);
        reject(err);
      });
  });
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        msag(err);
        reject(err);
      }
    );
  });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}, config = {}) {
  console.log("put config", config);
  return new Promise((resolve, reject) => {
    axios.put(url, data, config).then(
      (response) => {
        resolve(response.data || response);
      },
      (err) => {
        msag(err);
        reject(err);
      }
    );
  });
}
/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function deleted(url, data = {}, config = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: "delete",
      url: url,
      data: data, // 请求参数放在请求体
      isAccount: config.isAccount || false,
      isAuth: config.isAuth || false,
    })
      .then((response) => {
        console.log("response delete===>", response);
        resolve(response.data || response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

//统一接口处理，返回数据
// export default function (fecth, url, param, config = {}) {
//   console.log("param123===>", param);
//   return new Promise((resolve, reject) => {
//     switch (fecth) {
//       case "get":
//         console.log("begin a get request,and url:", url);
//         get(url, param, config)
//           .then(function (response) {
//             resolve(response);
//           })
//           .catch(function (error) {
//             console.log("get request GET failed.", error);
//             reject(error);
//           });
//         break;
//       case "post":
//         post(url, param, config)
//           .then(function (response) {
//             console.log("gg", response);
//             resolve(response);
//           })
//           .catch(function (error) {
//             console.log("get request POST failed.", error.config.data);
//             reject(error);
//           });
//         break;
//       case "put":
//         put(url, param, config)
//           .then(function (response) {
//             resolve(response);
//           })
//           .catch(function (error) {
//             console.log("get request PUT failed.", error.config);
//             reject(error);
//           });
//         break;
//       case "delete":
//         deleted(url, param, config)
//           .then(function (response) {
//             console.log("delete response===>", response.status);
//             resolve(response.status);
//           })
//           .catch(function (error) {
//             console.log("get request delete failed.", error);
//             reject(error);
//           });
//         break;
//       default:
//         break;
//     }
//   });
// }

//失败提示
function msag(err) {
  if (err && err.response) {
    console.log("错误", err);
    switch (err.response.status) {
      case 400:
        // alert(err.response.data.error.details);
        break;
      case 401:
        alert("未授权，请登录");
        break;

      case 403:
        alert("拒绝访问");
        break;

      case 404:
        alert("请求地址出错");
        break;

      case 408:
        alert("请求超时");
        break;

      case 500:
        alert("服务器内部错误");
        break;

      case 501:
        alert("服务未实现");
        break;

      case 502:
        alert("网关错误");
        break;

      case 503:
        alert("服务不可用");
        break;

      case 504:
        alert("网关超时");
        break;

      case 505:
        alert("HTTP版本不受支持");
        break;
      default:
    }
  }
}

/**
 * 查看返回的数据
 * @param url
 * @param params
 * @param data
 */
function landing(url, params, data) {
  console.log("landing", url, params, data);
  if (data.code === -1) {
  }
}

export default service;
