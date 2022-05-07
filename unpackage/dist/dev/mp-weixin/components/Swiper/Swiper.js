"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_swiper_dot2 = common_vendor.resolveComponent("uni-swiper-dot");
  _easycom_uni_swiper_dot2();
}
const _easycom_uni_swiper_dot = () => "../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.js";
if (!Math) {
  _easycom_uni_swiper_dot();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    picList: Array,
    info: Number,
    current: Number,
    mode: String
  },
  emits: ["changCur"],
  setup(__props, { emit: Emits }) {
    const swiperDotIndex = common_vendor.ref(0);
    const dotsStyles = common_vendor.reactive({
      dotStyle: {
        backgroundColor: "rgba(0, 0, 0, .6)",
        selectedBackgroundColor: "rgba(255, 255, 255, .6)"
      }
    });
    const change = (e) => {
      Emits("changCur", e.detail.current);
    };
    console.log(Object);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.picList, (item, index, i0) => {
          return {
            a: item,
            b: index
          };
        }),
        b: common_vendor.o(change),
        c: swiperDotIndex.value,
        d: common_vendor.p({
          info: __props.info,
          current: __props.current,
          field: "content",
          mode: __props.mode,
          dotsStyles: common_vendor.unref(dotsStyles).dotStyle
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/uniapp/naixuedecha/Honor/components/Swiper/Swiper.vue"]]);
wx.createComponent(Component);
