"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const returnNext = () => {
      const pages = getCurrentPages();
      if (pages && pages.length > 1) {
        common_vendor.index.navigateBack({
          delta: 1
        });
      } else {
        history.go(-1);
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(returnNext)
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e3ba9378"], ["__file", "E:/uniapp/naixuedecha/Honor/components/Return/Return.vue"]]);
wx.createComponent(Component);
