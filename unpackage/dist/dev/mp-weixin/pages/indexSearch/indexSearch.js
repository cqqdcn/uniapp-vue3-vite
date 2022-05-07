"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  (Return + _easycom_uni_search_bar)();
}
const Return = () => "../../components/Return/Return.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const searchValue = common_vendor.ref("\u8363\u8000Earbuds 3 Pro");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(_ctx.search),
        b: common_vendor.o(_ctx.blur),
        c: common_vendor.o(_ctx.focus),
        d: common_vendor.o(_ctx.input),
        e: common_vendor.o(_ctx.cancel),
        f: common_vendor.o(_ctx.clear),
        g: common_vendor.o(($event) => searchValue.value = $event),
        h: common_vendor.p({
          focus: true,
          modelValue: searchValue.value
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-64770ebc"], ["__file", "E:/uniapp/naixuedecha/Honor/pages/indexSearch/indexSearch.vue"]]);
wx.createPage(MiniProgramPage);
