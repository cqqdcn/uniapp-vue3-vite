"use strict";
var common_vendor = require("../../../common/vendor.js");
if (!Math) {
  Swiper();
}
const Swiper = () => "../../../components/Swiper/Swiper.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const SwiperPic = common_vendor.reactive({
      picList: [
        "https://file05.c.hihonor.com/pimages/cnqx/pages/mobile/frontCategory/55902705794610720955.jpg",
        "https://file05.c.hihonor.com/pimages/cnqx/pages/mobile/frontCategory/66444076624617044466.jpg",
        "https://file05.c.hihonor.com/pimages/cnqx/pages/mobile/frontCategory/70294710244611749207.jpg"
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
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-11f2b428"], ["__file", "E:/uniapp/naixuedecha/Honor/pages/index/component/Qinxuan.vue"]]);
wx.createComponent(Component);
