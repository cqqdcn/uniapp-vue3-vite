"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    popShow: String,
    typeShow: String
  },
  setup(__props, { emit: emits }) {
    const props = __props;
    const hidePopub = () => {
      emits("changShow", false, popup.banbText, popup.colorNum);
    };
    const popup = common_vendor.reactive({
      popupColor: [{
        pic: "https://file05.c.hihonor.com/pimages/cnqx/product/6936520806829/428_428_E434BCFB5A18FDDD794107383F1CE9A7D46ADABF9D9EB0C0mp.png",
        text: "\u4EAE\u9ED1"
      }, {
        pic: "https://file05.c.hihonor.com/pimages/cnqx/product/6936520806850/428_428_DFAA119DB95B72DC3CBAD56A7FD5D0FD4A450EAAB2BF79B7mp.png",
        text: "\u6D41\u91D1"
      }, {
        pic: "https://file05.c.hihonor.com/pimages/cnqx/product/6936520806843/428_428_DB46CAE0711AAE4B3D749179A7F165540E36FC5E7FF8460Cmp.png",
        text: "\u74F7\u9752"
      }, {
        pic: "https://file05.c.hihonor.com/pimages/cnqx/product/6936520806867/428_428_85349EEBC8084F0DBC098E3B49B3107C69C26D208C72DC94mp.png",
        text: "\u71C3\u6A59\u8272"
      }, {
        pic: "https://file05.c.hihonor.com/pimages/cnqx/product/6936520806881/428_428_32B19DBA335049CCD76856DB9619EAABC8FBF95D393EE311mp.png",
        text: "\u91C9\u767D"
      }],
      banben: [
        "8+256GB",
        "12+256GB",
        "12+512GB"
      ],
      colorNum: 0,
      bigPic: "https://file05.c.hihonor.com/pimages/cnqx/product/6936520806829/428_428_E434BCFB5A18FDDD794107383F1CE9A7D46ADABF9D9EB0C0mp.png",
      banbNum: 0,
      banbText: "8+256GB"
    });
    const chooseColor = (index, pic) => {
      popup.colorNum = index;
      popup.bigPic = pic;
    };
    const chooseBanb = (index, text) => {
      popup.banbNum = index;
      popup.banbText = text;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: props.popShow
      }, props.popShow ? common_vendor.e({
        b: common_vendor.o(hidePopub),
        c: props.typeShow == "guigeShow" ? true : false
      }, (props.typeShow == "guigeShow" ? true : false) ? {
        d: common_vendor.o(hidePopub),
        e: common_vendor.unref(popup).bigPic,
        f: common_vendor.t(common_vendor.unref(popup).banbText),
        g: common_vendor.t(props.TypeShow),
        h: common_vendor.f(common_vendor.unref(popup).popupColor, (item, index, i0) => {
          return {
            a: item.pic,
            b: common_vendor.t(item.text),
            c: common_vendor.unref(popup).colorNum == index ? 1 : "",
            d: index,
            e: common_vendor.o(($event) => chooseColor(index, item.pic))
          };
        }),
        i: common_vendor.f(common_vendor.unref(popup).banben, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.unref(popup).banbNum == index ? 1 : "",
            c: index,
            d: common_vendor.o(($event) => chooseBanb(index, item))
          };
        }),
        j: common_vendor.o(hidePopub)
      } : {}, {
        k: props.typeShow == "cuxiao" ? true : false
      }, (props.typeShow == "cuxiao" ? true : false) ? {
        l: common_vendor.o(hidePopub)
      } : {}, {
        m: props.typeShow == "shuoming" ? true : false
      }, (props.typeShow == "shuoming" ? true : false) ? {
        n: common_vendor.o(hidePopub)
      } : {}) : {});
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2afb806a"], ["__file", "E:/uniapp/naixuedecha/Honor/pages/xingqing/xingqingMob.vue"]]);
wx.createComponent(Component);
