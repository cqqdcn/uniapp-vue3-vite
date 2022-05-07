"use strict";
var common_vendor = require("../../common/vendor.js");
var stores_store = require("../../stores/store.js");
if (!Array) {
  const _easycom_t_index_address2 = common_vendor.resolveComponent("t-index-address");
  _easycom_t_index_address2();
}
const _easycom_t_index_address = () => "../../uni_modules/t-index-address/components/t-index-address/t-index-address.js";
if (!Math) {
  (Return + _easycom_t_index_address)();
}
const Return = () => "../../components/Return/Return.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const store = stores_store.useStore();
    const select = (data) => {
      store.city = data.province + "-" + data.name;
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(select)
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/uniapp/naixuedecha/Honor/pages/xingqing/city.vue"]]);
wx.createPage(MiniProgramPage);
