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
        "http://som.hihonor.com/accountzuul/item/spuImage/image?url=marking/upload/2022-03-21/5b4ff501ab324a4395703b2e92454e01.jpg",
        "http://som.hihonor.com/accountzuul/item/spuImage/image?url=marking/upload/2022-03-17/f8fd45b405784d21909a2800201a4888.png",
        "http://som.hihonor.com/accountzuul/item/spuImage/image?url=marking/upload/2022-03-21/48619bf2d98d46a2abe11b5215afef62.jpg"
      ]
    });
    const current = common_vendor.ref(0);
    const changCur = (num) => {
      current.value = num;
    };
    const enterXiangq = () => {
      common_vendor.index.navigateTo({
        url: "/pages/xingqing/xingqing"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(changCur),
        b: common_vendor.o(enterXiangq),
        c: common_vendor.p({
          picList: common_vendor.unref(SwiperPic).picList,
          info: common_vendor.unref(SwiperPic).picList.length,
          current: current.value,
          mode: _ctx.default
        }),
        d: common_vendor.o(enterXiangq),
        e: common_vendor.p({
          ["show-day"]: false,
          hour: 18,
          minute: 23,
          second: 12,
          ["background-color"]: "#1a1a1a",
          color: "#ffffff",
          ["font-size"]: 13
        }),
        f: common_vendor.o((...args) => _ctx.scroll && _ctx.scroll(...args)),
        g: common_vendor.o(enterXiangq),
        h: common_vendor.o(enterXiangq),
        i: common_vendor.o(enterXiangq)
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-69362652"], ["__file", "E:/uniapp/naixuedecha/Honor/pages/index/component/Tuijan.vue"]]);
wx.createComponent(Component);
