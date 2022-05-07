"use strict";
var common_vendor = require("../../common/vendor.js");
var _imports_0 = "/static/ryqxlogo.png";
var _imports_1 = "/static/ic-seacher.png";
var _imports_2 = "/static/icon-info.png";
if (!Math) {
  (Tuijian + Qinxuan + Rongyao)();
}
const Tuijian = () => "./component/Tuijan.js";
const Qinxuan = () => "./component/Qinxuan.js";
const Rongyao = () => "./component/Rongyao.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const ScrollTit = common_vendor.ref(["\u63A8\u8350", "\u4EB2\u9009\u751F\u6001", "\u8363\u8000\u624B\u673A", "\u667A\u6167\u5C4F", "\u7535\u8111\u5E73\u677F", "\u667A\u80FD\u5BB6\u5C45"]);
    const ShowNum = common_vendor.ref(0);
    const ChangeIndex = (index) => {
      ShowNum.value = index;
    };
    const jumpSearch = () => {
      common_vendor.index.navigateTo({
        url: "/pages/indexSearch/indexSearch"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: _imports_0,
        b: _imports_1,
        c: common_vendor.o(jumpSearch),
        d: _imports_2,
        e: common_vendor.f(ScrollTit.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.n(index == ShowNum.value ? "scrollShow" : ""),
            c: common_vendor.o(($event) => ChangeIndex(index)),
            d: index
          };
        }),
        f: common_vendor.o((...args) => _ctx.scroll && _ctx.scroll(...args)),
        g: ShowNum.value == 0 ? true : false,
        h: ShowNum.value == 1 ? true : false,
        i: ShowNum.value == 2 ? true : false,
        j: ShowNum.value == 3 ? true : false,
        k: ShowNum.value == 4 ? true : false,
        l: ShowNum.value == 5 ? true : false
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-57280228"], ["__file", "E:/uniapp/naixuedecha/Honor/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
