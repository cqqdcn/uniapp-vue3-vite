"use strict";
var common_vendor = require("../common/vendor.js");
var api_status = require("./status.js");
common_vendor.axios.defaults.timeout = 6e4;
common_vendor.axios.defaults.baseURL = "https://uniapp-interface.herokuapp.com";
common_vendor.axios.interceptors.request.use((config) => {
  common_vendor.index.showLoading({ title: "\u52A0\u8F7D\u4E2D..." });
  config.headers = {
    "Content-Type": "application/json;charset=UTF-8"
  };
  return config;
}, (error) => {
  return Promise.reject(error);
});
common_vendor.axios.interceptors.response.use((response) => {
  common_vendor.index.hideLoading({});
  return response;
}, (error) => {
  const { response } = error;
  if (response) {
    api_status.showMessage(response.status);
    return Promise.reject(response.data);
  }
});
function request(url = "", params = {}, type = "POST") {
  return new Promise((resolve, reject) => {
    let promise;
    if (type.toUpperCase() === "GET") {
      promise = common_vendor.axios({
        url,
        params
      });
    } else if (type.toUpperCase() === "POST") {
      promise = common_vendor.axios({
        method: "POST",
        url,
        data: params
      });
    }
    promise.then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}
exports.request = request;
