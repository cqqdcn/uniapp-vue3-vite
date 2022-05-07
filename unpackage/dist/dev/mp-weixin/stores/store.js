"use strict";
var common_vendor = require("../common/vendor.js");
const useStore = common_vendor.defineStore({
  id: "City",
  state: () => ({
    city: "\u8BF7\u9009\u62E9\u5730\u5740"
  }),
  getters: {
    double: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++;
    }
  }
});
exports.useStore = useStore;
