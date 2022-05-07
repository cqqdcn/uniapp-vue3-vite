"use strict";
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
require("../../api/axios.js");
require("../../api/status.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const returnSearch = () => {
      common_vendor.index.navigateTo({
        url: "/pages/indexSearch/indexSearch"
      });
    };
    const List = common_vendor.reactive({
      num: 0,
      classify: [
        {
          title: "\u7EFC\u5408",
          filterby: "all"
        },
        {
          title: "\u65B0\u54C1",
          filterby: "public"
        },
        {
          title: "\u8BC4\u4EF7",
          filterby: "hot"
        }
      ],
      proList: [],
      species: "all",
      page: 1,
      size: 6,
      moreText: "...\u52A0\u8F7D\u4E2D"
    });
    common_vendor.onMounted(() => {
      loadData();
    });
    const clickSwitch = (index, filterby) => {
      List.num = index;
      List.species = filterby;
      List.page = 1;
      List.proList = [];
      List.moreText = "...\u52A0\u8F7D\u4E2D";
      common_vendor.index.pageScrollTo({ scrollTop: 0, duration: 0 });
      loadData();
    };
    const loadData = async () => {
      const url = `api/profiles/goodslist/${List.species}/${List.page}/${List.size}`;
      const res = await api_api.UserService.login2(url);
      if (res.data.data.length > 0) {
        res.data.data.forEach((item) => {
          List.proList.push(item);
        });
      } else {
        List.moreText = "-\u5230\u5E95\u4E86-";
      }
    };
    common_vendor.onReachBottom(() => {
      List.page++;
      loadData();
    });
    common_vendor.onPullDownRefresh(() => {
      List.page = 1;
      List.proList = [];
      loadData();
      common_vendor.index.stopPullDownRefresh();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(returnSearch),
        b: common_vendor.f(common_vendor.unref(List).classify, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.o(($event) => clickSwitch(index, item.filterby)),
            c: common_vendor.n(common_vendor.unref(List).num == index ? "addOn" : ""),
            d: index
          };
        }),
        c: common_vendor.f(common_vendor.unref(List).proList, (item, index, i0) => {
          return {
            a: item.img,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: common_vendor.t(item.slogan),
            e: item.goods_id
          };
        }),
        d: common_vendor.t(common_vendor.unref(List).moreText)
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-00b5d514"], ["__file", "E:/uniapp/naixuedecha/Honor/pages/addShop/addShop.vue"]]);
wx.createPage(MiniProgramPage);
