"use strict";
var common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_countdown2 = common_vendor.resolveComponent("uni-countdown");
  _easycom_uni_countdown2();
}
const _easycom_uni_countdown = () => "../../../uni_modules/uni-countdown/components/uni-countdown/uni-countdown.js";
if (!Math) {
  (Swiper + _easycom_uni_countdown)();
}
const Swiper = () => "../../../components/Swiper/Swiper.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const SwiperPic = common_vendor.reactive({
      picList: [
        "https://file05.c.hihonor.com/pimages/cnqx/pages/mobile/frontCategory/69200554904615500296.jpg",
        "https://file05.c.hihonor.com/pimages/cnqx/pages/mobile/frontCategory/37620075004617002673.jpg"
      ]
    });
    const current = common_vendor.ref(0);
    const changCur = (num) => {
      current.value = num;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(changCur),
        b: common_vendor.p({
          picList: common_vendor.unref(SwiperPic).picList,
          info: common_vendor.unref(SwiperPic).picList.length,
          current: current.value,
          mode: _ctx.default
        }),
        c: common_vendor.p({
          ["show-day"]: false,
          hour: 18,
          minute: 23,
          second: 12,
          ["background-color"]: "#1a1a1a",
          color: "#ffffff",
          ["font-size"]: 13
        }),
        d: common_vendor.o((...args) => _ctx.scroll && _ctx.scroll(...args))
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4e431759"], ["__file", "E:/uniapp/naixuedecha/Honor/pages/index/component/Rongyao.vue"]]);
wx.createComponent(Component);
