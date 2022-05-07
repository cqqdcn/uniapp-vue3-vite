"use strict";
var api_axios = require("./axios.js");
class UserService {
  static async login1(params) {
    return api_axios.request("/data.php?type=banner", params, "get");
  }
  static async login2(url, params) {
    return api_axios.request(url, params, "get");
  }
  static async login3(params) {
    return api_axios.request("/login", params, "post");
  }
}
exports.UserService = UserService;
