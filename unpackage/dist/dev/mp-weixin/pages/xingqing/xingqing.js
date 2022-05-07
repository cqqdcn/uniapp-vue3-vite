"use strict";
var common_vendor = require("../../common/vendor.js");
var stores_store = require("../../stores/store.js");
if (!Array) {
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  _easycom_uni_goods_nav2();
}
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  (Swiper + Xingqing + _easycom_uni_goods_nav)();
}
const Swiper = () => "../../components/Swiper/Swiper.js";
const Xingqing = () => "./xingqingMob.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const SwiperPic = common_vendor.reactive({
      picList: [
        "https://file05.c.hihonor.com/pimages/cnqx/product/6936520806850/group/428_428_29A1DC7017BB44A596A35BAD4B8AB5625F70EBB8EC338889.jpg",
        "https://file05.c.hihonor.com/pimages/cnqx/product/6936520806850/group/428_428_75E1A66A950B1D7DDFACB0B6D2C729C54101AAA7BA654072.png",
        "https://file05.c.hihonor.com/pimages/cnqx/product/6936520806850/group/428_428_EB639E0DD73F247E822E8928CDF77413622C98D4ADEED4E3.png"
      ],
      xqpic: [
        "https://file05.c.hihonor.com/pimages/cnqx/detailImg/2022/04/15/870F5FFF5704A06B6BE52946EB9AC073DD9CD816AD88C82E.png",
        "https://file05.c.hihonor.com/pimages/cnqx/detailImg/2022/04/15/7FB11B87936370FAB30FE238790CC20296A9CB874D788785.jpg",
        "https://file05.c.hihonor.com/pimages/cnqx/detailImg/2022/04/15/D25974D7BE0D6957D225117D9AE4A9A062B52F1784EDA9FC.jpg",
        "https://file05.c.hihonor.com/pimages/cnqx/detailImg/2022/04/15/2AAAE3372CA9EDD370293E3FEB588028081A373FE4592896.jpg",
        "https://file05.c.hihonor.com/pimages/cnqx/detailImg/2022/04/15/E24318C1820053D299A09182A6A4866734AAB80BA34E308A.jpg",
        "https://file05.c.hihonor.com/pimages/cnqx/detailImg/2022/04/15/E47AD7CFA5A012125D56C02FF1939096C6C56DD9A862C4AB.jpg",
        "https://file05.c.hihonor.com/pimages/cnqx/detailImg/2022/04/15/71EB3C19789E3CBAD275EDE0380399386DB6E8EA836E1AF0.jpg",
        "https://file05.c.hihonor.com/pimages/cnqx/detailImg/2022/04/15/B725FEC7DFDBCE1CB3EDEC4FF766940D32AC6F1178891377.jpg",
        "https://file05.c.hihonor.com/pimages/cnqx/detailImg/2022/04/15/1136E7345DAB7D8BC0BF968C8943CDBFDA9C3B0BBC518C4D.jpg",
        "https://file05.c.hihonor.com/pimages/cnqx/detailImg/2022/04/15/7D73EBBE3B7872953CD438306AFB3ACAAABF19B3DAE426F0.jpg"
      ],
      options: [{
        icon: "chat",
        text: "\u5BA2\u670D"
      }, {
        icon: "cart",
        text: "\u8D2D\u7269\u8F66",
        info: 2
      }],
      maodian: [
        "\u5546\u54C1",
        "\u8BE6\u60C5"
      ],
      num: 0
    });
    const current = common_vendor.ref(0);
    const changCur = (num) => {
      current.value = num;
    };
    const ydHight = common_vendor.ref(false);
    const ggPhone = common_vendor.reactive({
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
      colorNum: 0,
      banbNum: 0,
      banbText: "8+256GB"
    });
    const y = common_vendor.ref(0);
    window.addEventListener("scroll", () => {
      y.value = document.documentElement.scrollTop;
      if (y.value < 20)
        return ydHight.value = false;
      ydHight.value = true;
    });
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
    const popShow = common_vendor.ref(false);
    const typeShow = common_vendor.ref(false);
    const toggle = (value) => {
      popShow.value = true;
      typeShow.value = value;
    };
    const changShow = (value, banbText, colorNum) => {
      popShow.value = value;
      ggPhone.banbText = banbText;
      ggPhone.colorNum = colorNum;
    };
    const addRessPage = () => {
      common_vendor.index.navigateTo({
        url: "/pages/xingqing/city"
      });
    };
    const whdd = (index) => {
      SwiperPic.num = index;
      if (index == 1) {
        document.querySelector("#whdd").scrollIntoView(true);
      } else {
        common_vendor.index.pageScrollTo({ scrollTop: 0, duration: 0 });
      }
    };
    const store = stores_store.useStore();
    common_vendor.onMounted(() => {
      common_vendor.index.pageScrollTo({ scrollTop: 0, duration: 0 });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(returnNext),
        b: common_vendor.f(common_vendor.unref(SwiperPic).maodian, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.unref(SwiperPic).num == index ? 1 : "",
            c: common_vendor.o(($event) => whdd(index))
          };
        }),
        c: ydHight.value ? 1 : "",
        d: common_vendor.o(changCur),
        e: common_vendor.p({
          picList: common_vendor.unref(SwiperPic).picList,
          info: common_vendor.unref(SwiperPic).picList.length,
          current: current.value
        }),
        f: common_vendor.t(common_vendor.unref(ggPhone).banbText),
        g: common_vendor.o(($event) => toggle("guigeShow")),
        h: common_vendor.f(common_vendor.unref(ggPhone).popupColor, (item, index, i0) => {
          return {
            a: common_vendor.unref(ggPhone).colorNum == index ? 1 : "",
            b: item.pic
          };
        }),
        i: common_vendor.o(($event) => toggle("guigeShow")),
        j: common_vendor.t(common_vendor.unref(store).city),
        k: common_vendor.o(addRessPage),
        l: common_vendor.o(($event) => toggle("cuxiao")),
        m: common_vendor.o(($event) => toggle("shuoming")),
        n: common_vendor.o(changShow),
        o: common_vendor.p({
          popShow: popShow.value,
          typeShow: typeShow.value
        }),
        p: common_vendor.f(common_vendor.unref(SwiperPic).xqpic, (item, index, i0) => {
          return {
            a: item,
            b: index
          };
        }),
        q: common_vendor.o(_ctx.onClick),
        r: common_vendor.o(_ctx.buttonClick),
        s: common_vendor.p({
          options: common_vendor.unref(SwiperPic).options,
          fill: true
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-440b4e34"], ["__file", "E:/uniapp/naixuedecha/Honor/pages/xingqing/xingqing.vue"]]);
wx.createPage(MiniProgramPage);
