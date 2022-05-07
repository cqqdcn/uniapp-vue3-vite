"use strict";
var common_vendor = require("../../../../common/vendor.js");
var cityList = [
  {
    initial: "A",
    list: [
      {
        code: "1529",
        name: "\u963F\u62C9\u5584\u76DF",
        provinceCode: "15",
        province: "\u5185\u8499\u53E4\u81EA\u6CBB\u533A",
        lat: "38.858275883056955",
        lng: "105.73537746449358"
      },
      {
        code: "2103",
        name: "\u978D\u5C71",
        provinceCode: "21",
        province: "\u8FBD\u5B81\u7701",
        lat: "41.11505359694933",
        lng: "123.00137251399407"
      },
      {
        code: "3408",
        name: "\u5B89\u5E86",
        provinceCode: "34",
        province: "\u5B89\u5FBD\u7701",
        lat: "30.53095656804304",
        lng: "117.06360390491879"
      },
      {
        code: "4105",
        name: "\u5B89\u9633",
        provinceCode: "41",
        province: "\u6CB3\u5357\u7701",
        lat: "36.10594098401491",
        lng: "114.39950042177432"
      },
      {
        code: "5132",
        name: "\u963F\u575D\u85CF\u65CF\u7F8C\u65CF\u81EA\u6CBB\u5DDE",
        provinceCode: "51",
        province: "\u56DB\u5DDD\u7701",
        lat: "32.9082209186247",
        lng: "101.71360970816114"
      },
      {
        code: "5204",
        name: "\u5B89\u987A",
        provinceCode: "52",
        province: "\u8D35\u5DDE\u7701",
        lat: "26.25925237871499",
        lng: "105.95441712388904"
      },
      {
        code: "5425",
        name: "\u963F\u91CC\u5730\u533A",
        provinceCode: "54",
        province: "\u897F\u85CF\u81EA\u6CBB\u533A",
        lat: "32.50686601763335",
        lng: "80.11277692192645"
      },
      {
        code: "6109",
        name: "\u5B89\u5EB7",
        provinceCode: "61",
        province: "\u9655\u897F\u7701",
        lat: "32.69051277057377",
        lng: "109.03560108265746"
      },
      {
        code: "6529",
        name: "\u963F\u514B\u82CF\u5730\u533A",
        provinceCode: "65",
        province: "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",
        lat: "41.17502986007749",
        lng: "80.26694348473501"
      },
      {
        code: "6543",
        name: "\u963F\u52D2\u6CF0\u5730\u533A",
        provinceCode: "65",
        province: "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",
        lat: "47.85072787010195",
        lng: "88.14792620373527"
      }
    ]
  },
  {
    initial: "B",
    list: [
      {
        code: "1101",
        name: "\u5317\u4EAC",
        provinceCode: "11",
        province: "\u5317\u4EAC\u5E02",
        lat: "39.910924547299565",
        lng: "116.4133836971231"
      },
      {
        code: "1306",
        name: "\u4FDD\u5B9A",
        provinceCode: "13",
        province: "\u6CB3\u5317\u7701",
        lat: "38.87998776845534",
        lng: "115.47146383768579"
      },
      {
        code: "1502",
        name: "\u5305\u5934",
        provinceCode: "15",
        province: "\u5185\u8499\u53E4\u81EA\u6CBB\u533A",
        lat: "40.66292878826139",
        lng: "109.84654350721243"
      },
      {
        code: "1508",
        name: "\u5DF4\u5F66\u6DD6\u5C14",
        provinceCode: "15",
        province: "\u5185\u8499\u53E4\u81EA\u6CBB\u533A",
        lat: "40.7493594895728",
        lng: "107.39439808372491"
      },
      {
        code: "2105",
        name: "\u672C\u6EAA",
        provinceCode: "21",
        province: "\u8FBD\u5B81\u7701",
        lat: "41.49291646055291",
        lng: "123.69250712420832"
      },
      {
        code: "2206",
        name: "\u767D\u5C71",
        provinceCode: "22",
        province: "\u5409\u6797\u7701",
        lat: "41.93962720532889",
        lng: "126.42963008937573"
      },
      {
        code: "2208",
        name: "\u767D\u57CE",
        provinceCode: "22",
        province: "\u5409\u6797\u7701",
        lat: "45.62550435999602",
        lng: "122.8455906084976"
      },
      {
        code: "3403",
        name: "\u868C\u57E0",
        provinceCode: "34",
        province: "\u5B89\u5FBD\u7701",
        lat: "32.921523704350825",
        lng: "117.39551332813694"
      },
      {
        code: "3416",
        name: "\u4EB3\u5DDE",
        provinceCode: "34",
        province: "\u5B89\u5FBD\u7701",
        lat: "33.850642695788835",
        lng: "115.7844632112745"
      },
      {
        code: "3716",
        name: "\u6EE8\u5DDE",
        provinceCode: "37",
        province: "\u5C71\u4E1C\u7701",
        lat: "37.3881961960769",
        lng: "117.9774040171467"
      },
      {
        code: "4505",
        name: "\u5317\u6D77",
        provinceCode: "45",
        province: "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A",
        lat: "21.48683649576942",
        lng: "109.126533212566"
      },
      {
        code: "4510",
        name: "\u767E\u8272",
        provinceCode: "45",
        province: "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A",
        lat: "23.908185934295958",
        lng: "106.62458932565383"
      },
      {
        code: "5119",
        name: "\u5DF4\u4E2D",
        provinceCode: "51",
        province: "\u56DB\u5DDD\u7701",
        lat: "31.872888585956545",
        lng: "106.7515853031645"
      },
      {
        code: "5205",
        name: "\u6BD5\u8282",
        provinceCode: "52",
        province: "\u8D35\u5DDE\u7701",
        lat: "27.29021508342595",
        lng: "105.2985887950112"
      },
      {
        code: "5305",
        name: "\u4FDD\u5C71",
        provinceCode: "53",
        province: "\u4E91\u5357\u7701",
        lat: "25.139038793265964",
        lng: "99.17727328581788"
      },
      {
        code: "6103",
        name: "\u5B9D\u9E21",
        provinceCode: "61",
        province: "\u9655\u897F\u7701",
        lat: "34.36891564286998",
        lng: "107.2445753670404"
      },
      {
        code: "6204",
        name: "\u767D\u94F6",
        provinceCode: "62",
        province: "\u7518\u8083\u7701",
        lat: "36.55082533041454",
        lng: "104.1444508283435"
      },
      {
        code: "6527",
        name: "\u535A\u5C14\u5854\u62C9\u8499\u53E4\u81EA\u6CBB\u5DDE",
        provinceCode: "65",
        province: "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",
        lat: "44.9121964134647",
        lng: "82.07291475827434"
      },
      {
        code: "6528",
        name: "\u5DF4\u97F3\u90ED\u695E\u8499\u53E4\u81EA\u6CBB\u5DDE",
        provinceCode: "65",
        province: "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",
        lat: "41.7702873304504",
        lng: "86.1517138653326"
      }
    ]
  },
  {
    initial: "C",
    list: [
      {
        code: "1308",
        name: "\u627F\u5FB7",
        provinceCode: "13",
        province: "\u6CB3\u5317\u7701",
        lat: "40.95785601233803",
        lng: "117.96939750996681"
      },
      {
        code: "1309",
        name: "\u6CA7\u5DDE",
        provinceCode: "13",
        province: "\u6CB3\u5317\u7701",
        lat: "38.310215141107044",
        lng: "116.84558075595014"
      },
      {
        code: "1404",
        name: "\u957F\u6CBB",
        provinceCode: "14",
        province: "\u5C71\u897F\u7701",
        lat: "36.2012683721548",
        lng: "113.12255886984902"
      },
      {
        code: "1504",
        name: "\u8D64\u5CF0",
        provinceCode: "15",
        province: "\u5185\u8499\u53E4\u81EA\u6CBB\u533A",
        lat: "42.2616861034116",
        lng: "118.8955203975195"
      },
      {
        code: "2113",
        name: "\u671D\u9633",
        provinceCode: "21",
        province: "\u8FBD\u5B81\u7701",
        lat: "41.57982086475567",
        lng: "120.45749949793277"
      },
      {
        code: "2201",
        name: "\u957F\u6625",
        provinceCode: "22",
        province: "\u5409\u6797\u7701",
        lat: "43.82195350104314",
        lng: "125.3306020759069"
      },
      {
        code: "3204",
        name: "\u5E38\u5DDE",
        provinceCode: "32",
        province: "\u6C5F\u82CF\u7701",
        lat: "31.815795653327836",
        lng: "119.98148471327892"
      },
      {
        code: "3411",
        name: "\u6EC1\u5DDE",
        provinceCode: "34",
        province: "\u5B89\u5FBD\u7701",
        lat: "32.26127087204081",
        lng: "118.33940613596579"
      },
      {
        code: "3417",
        name: "\u6C60\u5DDE",
        provinceCode: "34",
        province: "\u5B89\u5FBD\u7701",
        lat: "30.670883790764535",
        lng: "117.49842096159624"
      },
      {
        code: "4301",
        name: "\u957F\u6C99",
        provinceCode: "43",
        province: "\u6E56\u5357\u7701",
        lat: "28.23488939994364",
        lng: "112.94547319535287"
      },
      {
        code: "4307",
        name: "\u5E38\u5FB7",
        provinceCode: "43",
        province: "\u6E56\u5357\u7701",
        lat: "29.037749999406877",
        lng: "111.70545217995837"
      },
      {
        code: "4310",
        name: "\u90F4\u5DDE",
        provinceCode: "43",
        province: "\u6E56\u5357\u7701",
        lat: "25.776683273601865",
        lng: "113.02146049909462"
      },
      {
        code: "4451",
        name: "\u6F6E\u5DDE",
        provinceCode: "44",
        province: "\u5E7F\u4E1C\u7701",
        lat: "23.662623192615886",
        lng: "116.62947017362819"
      },
      {
        code: "4514",
        name: "\u5D07\u5DE6",
        provinceCode: "45",
        province: "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A",
        lat: "22.383117234663302",
        lng: "107.3715202061015"
      },
      {
        code: "5101",
        name: "\u6210\u90FD",
        provinceCode: "51",
        province: "\u56DB\u5DDD\u7701",
        lat: "30.655821878416408",
        lng: "104.08153351042463"
      },
      {
        code: "5323",
        name: "\u695A\u96C4\u5F5D\u65CF\u81EA\u6CBB\u5DDE",
        provinceCode: "53",
        province: "\u4E91\u5357\u7701",
        lat: "25.051773565340376",
        lng: "101.53441248050268"
      },
      {
        code: "5403",
        name: "\u660C\u90FD",
        provinceCode: "54",
        province: "\u897F\u85CF\u81EA\u6CBB\u533A",
        lat: "31.14734654932703",
        lng: "97.17958359408598"
      },
      {
        code: "6523",
        name: "\u660C\u5409\u56DE\u65CF\u81EA\u6CBB\u5DDE",
        provinceCode: "65",
        province: "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",
        lat: "44.01685415991987",
        lng: "87.3150016244744"
      }
    ]
  },
  {
    initial: "D",
    list: [
      {
        code: "1402",
        name: "\u5927\u540C",
        provinceCode: "14",
        province: "\u5C71\u897F\u7701",
        lat: "40.0824687161612",
        lng: "113.30643625858623"
      },
      {
        code: "2102",
        name: "\u5927\u8FDE",
        provinceCode: "21",
        province: "\u8FBD\u5B81\u7701",
        lat: "38.9189536667856",
        lng: "121.62163148459285"
      },
      {
        code: "2106",
        name: "\u4E39\u4E1C",
        provinceCode: "21",
        province: "\u8FBD\u5B81\u7701",
        lat: "40.00640870559368",
        lng: "124.36154728159079"
      },
      {
        code: "2306",
        name: "\u5927\u5E86",
        provinceCode: "23",
        province: "\u9ED1\u9F99\u6C5F\u7701",
        lat: "46.59363317672175",
        lng: "125.10865763402039"
      },
      {
        code: "2327",
        name: "\u5927\u5174\u5B89\u5CAD\u5730\u533A",
        provinceCode: "23",
        province: "\u9ED1\u9F99\u6C5F\u7701",
        lat: "50.42002595502784",
        lng: "124.15292785448057"
      },
      {
        code: "3705",
        name: "\u4E1C\u8425",
        provinceCode: "37",
        province: "\u5C71\u4E1C\u7701",
        lat: "37.43964182632334",
        lng: "118.68138493513693"
      },
      {
        code: "3714",
        name: "\u5FB7\u5DDE",
        provinceCode: "37",
        province: "\u5C71\u4E1C\u7701",
        lat: "37.441308454576266",
        lng: "116.36555674397471"
      },
      {
        code: "4419",
        name: "\u4E1C\u839E",
        provinceCode: "44",
        province: "\u5E7F\u4E1C\u7701",
        lat: "23.02730841164339",
        lng: "113.75842045787648"
      },
      {
        code: "4604",
        name: "\u510B\u5DDE",
        provinceCode: "46",
        province: "\u6D77\u5357\u7701",
        lat: "19.64278758232148",
        lng: "109.1739880875565"
      },
      {
        code: "5106",
        name: "\u5FB7\u9633",
        provinceCode: "51",
        province: "\u56DB\u5DDD\u7701",
        lat: "31.133115003656755",
        lng: "104.40441936496448"
      },
      {
        code: "5117",
        name: "\u8FBE\u5DDE",
        provinceCode: "51",
        province: "\u56DB\u5DDD\u7701",
        lat: "31.214307723927455",
        lng: "107.47459385897544"
      },
      {
        code: "5329",
        name: "\u5927\u7406\u767D\u65CF\u81EA\u6CBB\u5DDE",
        provinceCode: "53",
        province: "\u4E91\u5357\u7701",
        lat: "25.59760490545194",
        lng: "100.23651930044413"
      },
      {
        code: "5331",
        name: "\u5FB7\u5B8F\u50A3\u65CF\u666F\u9887\u65CF\u81EA\u6CBB\u5DDE",
        provinceCode: "53",
        province: "\u4E91\u5357\u7701",
        lat: "24.438010702758117",
        lng: "98.59135935611411"
      },
      {
        code: "5334",
        name: "\u8FEA\u5E86\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        provinceCode: "53",
        province: "\u4E91\u5357\u7701",
        lat: "27.82518468364326",
        lng: "99.70952999013957"
      },
      {
        code: "6211",
        name: "\u5B9A\u897F",
        provinceCode: "62",
        province: "\u7518\u8083\u7701",
        lat: "35.586832926561875",
        lng: "104.63242008306302"
      }
    ]
  },
  {
    initial: "E",
    list: [
      {
        code: "1506",
        name: "\u9102\u5C14\u591A\u65AF",
        provinceCode: "15",
        province: "\u5185\u8499\u53E4\u81EA\u6CBB\u533A",
        lat: "39.61448231394889",
        lng: "109.78744317923602"
      },
      {
        code: "4207",
        name: "\u9102\u5DDE",
        provinceCode: "42",
        province: "\u6E56\u5317\u7701",
        lat: "30.39657217331699",
        lng: "114.90160738827099"
      },
      {
        code: "4228",
        name: "\u6069\u65BD\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
        provinceCode: "42",
        province: "\u6E56\u5317\u7701",
        lat: "30.277939575301094",
        lng: "109.49459261857503"
      }
    ]
  },
  {
    initial: "F",
    list: [
      {
        code: "2104",
        name: "\u629A\u987A",
        provinceCode: "21",
        province: "\u8FBD\u5B81\u7701",
        lat: "41.88596959305694",
        lng: "123.9643746156145"
      },
      {
        code: "2109",
        name: "\u961C\u65B0",
        provinceCode: "21",
        province: "\u8FBD\u5B81\u7701",
        lat: "42.02802190131842",
        lng: "121.67640799865809"
      },
      {
        code: "3412",
        name: "\u961C\u9633",
        provinceCode: "34",
        province: "\u5B89\u5FBD\u7701",
        lat: "32.89606099485221",
        lng: "115.82043612491321"
      },
      {
        code: "3501",
        name: "\u798F\u5DDE",
        provinceCode: "35",
        province: "\u798F\u5EFA\u7701",
        lat: "26.080429420698078",
        lng: "119.30346983854001"
      },
      {
        code: "3610",
        name: "\u629A\u5DDE",
        provinceCode: "36",
        province: "\u6C5F\u897F\u7701",
        lat: "27.954892253419565",
        lng: "116.36453876864373"
      },
      {
        code: "4406",
        name: "\u4F5B\u5C71",
        provinceCode: "44",
        province: "\u5E7F\u4E1C\u7701",
        lat: "23.02775875078891",
        lng: "113.12851219549718"
      },
      {
        code: "4506",
        name: "\u9632\u57CE\u6E2F",
        provinceCode: "45",
        province: "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A",
        lat: "21.6930052899694",
        lng: "108.360418838298"
      }
    ]
  },
  {
    initial: "G",
    list: [
      {
        code: "3607",
        name: "\u8D63\u5DDE",
        provinceCode: "36",
        province: "\u6C5F\u897F\u7701",
        lat: "25.835176103497655",
        lng: "114.9405033729825"
      },
      {
        code: "4401",
        name: "\u5E7F\u5DDE",
        provinceCode: "44",
        province: "\u5E7F\u4E1C\u7701",
        lat: "23.135336306695006",
        lng: "113.27143134445974"
      },
      {
        code: "4503",
        name: "\u6842\u6797",
        provinceCode: "45",
        province: "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A",
        lat: "25.242885724872647",
        lng: "110.20354537457943"
      },
      {
        code: "4508",
        name: "\u8D35\u6E2F",
        provinceCode: "45",
        province: "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A",
        lat: "23.117448382037534",
        lng: "109.60552031033306"
      },
      {
        code: "5108",
        name: "\u5E7F\u5143",
        provinceCode: "51",
        province: "\u56DB\u5DDD\u7701",
        lat: "32.44161630531542",
        lng: "105.85042318166482"
      },
      {
        code: "5116",
        name: "\u5E7F\u5B89",
        provinceCode: "51",
        province: "\u56DB\u5DDD\u7701",
        lat: "30.461746110678995",
        lng: "106.63955268233484"
      },
      {
        code: "5133",
        name: "\u7518\u5B5C\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        provinceCode: "51",
        province: "\u56DB\u5DDD\u7701",
        lat: "30.05527884351838",
        lng: "101.96854674579022"
      },
      {
        code: "5201",
        name: "\u8D35\u9633",
        provinceCode: "52",
        province: "\u8D35\u5DDE\u7701",
        lat: "26.653324822309752",
        lng: "106.63657676352776"
      },
      {
        code: "6230",
        name: "\u7518\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        provinceCode: "62",
        province: "\u7518\u8083\u7701",
        lat: "34.98913990996821",
        lng: "102.91758468825803"
      },
      {
        code: "6326",
        name: "\u679C\u6D1B\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        provinceCode: "63",
        province: "\u9752\u6D77\u7701",
        lat: "34.4771938664709",
        lng: "100.25159197879555"
      },
      {
        code: "6404",
        name: "\u56FA\u539F",
        provinceCode: "64",
        province: "\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A",
        lat: "36.02161725801098",
        lng: "106.24857742607188"
      }
    ]
  },
  {
    initial: "H",
    list: [
      {
        code: "1304",
        name: "\u90AF\u90F8",
        provinceCode: "13",
        province: "\u6CB3\u5317\u7701",
        lat: "36.631262731204046",
        lng: "114.5456282282352"
      },
      {
        code: "1311",
        name: "\u8861\u6C34",
        provinceCode: "13",
        province: "\u6CB3\u5317\u7701",
        lat: "37.745191408077424",
        lng: "115.6754061376161"
      },
      {
        code: "1501",
        name: "\u547C\u548C\u6D69\u7279",
        provinceCode: "15",
        province: "\u5185\u8499\u53E4\u81EA\u6CBB\u533A",
        lat: "40.84842299711348",
        lng: "111.75550856170946"
      },
      {
        code: "1507",
        name: "\u547C\u4F26\u8D1D\u5C14",
        provinceCode: "15",
        province: "\u5185\u8499\u53E4\u81EA\u6CBB\u533A",
        lat: "49.21844647556481",
        lng: "119.77237049946636"
      },
      {
        code: "2114",
        name: "\u846B\u82A6\u5C9B",
        provinceCode: "21",
        province: "\u8FBD\u5B81\u7701",
        lat: "40.71736443636189",
        lng: "120.8433983399283"
      },
      {
        code: "2301",
        name: "\u54C8\u5C14\u6EE8",
        provinceCode: "23",
        province: "\u9ED1\u9F99\u6C5F\u7701",
        lat: "45.808825827952184",
        lng: "126.54161509031663"
      },
      {
        code: "2304",
        name: "\u9E64\u5C97",
        provinceCode: "23",
        province: "\u9ED1\u9F99\u6C5F\u7701",
        lat: "47.35605615768509",
        lng: "130.3044328986694"
      },
      {
        code: "2311",
        name: "\u9ED1\u6CB3",
        provinceCode: "23",
        province: "\u9ED1\u9F99\u6C5F\u7701",
        lat: "50.25127231175015",
        lng: "127.53548988621854"
      },
      {
        code: "3208",
        name: "\u6DEE\u5B89",
        provinceCode: "32",
        province: "\u6C5F\u82CF\u7701",
        lat: "33.61629530103313",
        lng: "119.02148367070623"
      },
      {
        code: "3301",
        name: "\u676D\u5DDE",
        provinceCode: "33",
        province: "\u6D59\u6C5F\u7701",
        lat: "30.25308298169347",
        lng: "120.21551180372168"
      },
      {
        code: "3305",
        name: "\u6E56\u5DDE",
        provinceCode: "33",
        province: "\u6D59\u6C5F\u7701",
        lat: "30.898963937294184",
        lng: "120.09451660915789"
      },
      {
        code: "3401",
        name: "\u5408\u80A5",
        provinceCode: "34",
        province: "\u5B89\u5FBD\u7701",
        lat: "31.826577833686887",
        lng: "117.23344266497664"
      },
      {
        code: "3404",
        name: "\u6DEE\u5357",
        provinceCode: "34",
        province: "\u5B89\u5FBD\u7701",
        lat: "32.63184739905333",
        lng: "117.00638885071616"
      },
      {
        code: "3406",
        name: "\u6DEE\u5317",
        provinceCode: "34",
        province: "\u5B89\u5FBD\u7701",
        lat: "33.96165630027632",
        lng: "116.8045372670298"
      },
      {
        code: "3410",
        name: "\u9EC4\u5C71",
        provinceCode: "34",
        province: "\u5B89\u5FBD\u7701",
        lat: "29.721889786591692",
        lng: "118.34543725314781"
      },
      {
        code: "3717",
        name: "\u83CF\u6CFD",
        provinceCode: "37",
        province: "\u5C71\u4E1C\u7701",
        lat: "35.23940742476551",
        lng: "115.48754503343376"
      },
      {
        code: "4106",
        name: "\u9E64\u58C1",
        provinceCode: "41",
        province: "\u6CB3\u5357\u7701",
        lat: "35.7523574114",
        lng: "114.30359364247649"
      },
      {
        code: "4202",
        name: "\u9EC4\u77F3",
        provinceCode: "42",
        province: "\u6E56\u5317\u7701",
        lat: "30.205207848941598",
        lng: "115.04553290894361"
      },
      {
        code: "4211",
        name: "\u9EC4\u5188",
        provinceCode: "42",
        province: "\u6E56\u5317\u7701",
        lat: "30.4593588576181",
        lng: "114.87849048410779"
      },
      {
        code: "4304",
        name: "\u8861\u9633",
        provinceCode: "43",
        province: "\u6E56\u5357\u7701",
        lat: "26.899576139189122",
        lng: "112.57844721325992"
      },
      {
        code: "4312",
        name: "\u6000\u5316",
        provinceCode: "43",
        province: "\u6E56\u5357\u7701",
        lat: "27.575160902978517",
        lng: "110.00851426537254"
      },
      {
        code: "4413",
        name: "\u60E0\u5DDE",
        provinceCode: "44",
        province: "\u5E7F\u4E1C\u7701",
        lat: "23.116358854725593",
        lng: "114.4235580165817"
      },
      {
        code: "4416",
        name: "\u6CB3\u6E90",
        provinceCode: "44",
        province: "\u5E7F\u4E1C\u7701",
        lat: "23.749684370959752",
        lng: "114.70744627290641"
      },
      {
        code: "4511",
        name: "\u8D3A\u5DDE",
        provinceCode: "45",
        province: "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A",
        lat: "24.409450902865487",
        lng: "111.57352631416218"
      },
      {
        code: "4512",
        name: "\u6CB3\u6C60",
        provinceCode: "45",
        province: "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A",
        lat: "24.698911731272894",
        lng: "108.09149994498661"
      },
      {
        code: "4601",
        name: "\u6D77\u53E3",
        provinceCode: "46",
        province: "\u6D77\u5357\u7701",
        lat: "20.04404943925674",
        lng: "110.32552547126409"
      },
      {
        code: "5325",
        name: "\u7EA2\u6CB3\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u5DDE",
        provinceCode: "53",
        province: "\u4E91\u5357\u7701",
        lat: "23.37448873836479",
        lng: "102.42755057757"
      },
      {
        code: "6107",
        name: "\u6C49\u4E2D",
        provinceCode: "61",
        province: "\u9655\u897F\u7701",
        lat: "33.073799907833795",
        lng: "107.02943020926463"
      },
      {
        code: "6302",
        name: "\u6D77\u4E1C",
        provinceCode: "63",
        province: "\u9752\u6D77\u7701",
        lat: "36.508511080941304",
        lng: "102.1104440722824"
      },
      {
        code: "6322",
        name: "\u6D77\u5317\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        provinceCode: "63",
        province: "\u9752\u6D77\u7701",
        lat: "36.96066282412982",
        lng: "100.90743432145598"
      },
      {
        code: "6323",
        name: "\u9EC4\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        provinceCode: "63",
        province: "\u9752\u6D77\u7701",
        lat: "35.525804586515534",
        lng: "102.02242827807585"
      },
      {
        code: "6325",
        name: "\u6D77\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        provinceCode: "63",
        province: "\u9752\u6D77\u7701",
        lat: "36.2921024798988",
        lng: "100.62662114445924"
      },
      {
        code: "6328",
        name: "\u6D77\u897F\u8499\u53E4\u65CF\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        provinceCode: "63",
        province: "\u9752\u6D77\u7701",
        lat: "37.38275046252745",
        lng: "97.37629911601906"
      },
      {
        code: "6505",
        name: "\u54C8\u5BC6",
        provinceCode: "65",
        province: "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",
        lat: "42.82582436811265",
        lng: "93.52121554028504"
      },
      {
        code: "6532",
        name: "\u548C\u7530\u5730\u533A",
        provinceCode: "65",
        province: "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",
        lat: "37.12044646304192",
        lng: "79.9285070635119"
      }
    ]
  },
  {
    initial: "J",
    list: [
      {
        code: "1405",
        name: "\u664B\u57CE",
        provinceCode: "14",
        province: "\u5C71\u897F\u7701",
        lat: "35.49628458647257",
        lng: "112.85857823132879"
      },
      {
        code: "1407",
        name: "\u664B\u4E2D",
        provinceCode: "14",
        province: "\u5C71\u897F\u7701",
        lat: "37.69283940975972",
        lng: "112.75959475565928"
      },
      {
        code: "2107",
        name: "\u9526\u5DDE",
        provinceCode: "21",
        province: "\u8FBD\u5B81\u7701",
        lat: "41.10093149946208",
        lng: "121.13259630055518"
      },
      {
        code: "2202",
        name: "\u5409\u6797",
        provinceCode: "22",
        province: "\u5409\u6797\u7701",
        lat: "43.84356783457924",
        lng: "126.55563450495482"
      },
      {
        code: "2303",
        name: "\u9E21\u897F",
        provinceCode: "23",
        province: "\u9ED1\u9F99\u6C5F\u7701",
        lat: "45.300872317823895",
        lng: "130.97561865876668"
      },
      {
        code: "2308",
        name: "\u4F73\u6728\u65AF",
        provinceCode: "23",
        province: "\u9ED1\u9F99\u6C5F\u7701",
        lat: "46.80568999085779",
        lng: "130.327359092573"
      },
      {
        code: "3304",
        name: "\u5609\u5174",
        provinceCode: "33",
        province: "\u6D59\u6C5F\u7701",
        lat: "30.750974830920143",
        lng: "120.76355182586005"
      },
      {
        code: "3307",
        name: "\u91D1\u534E",
        provinceCode: "33",
        province: "\u6D59\u6C5F\u7701",
        lat: "29.084639385513697",
        lng: "119.65343619052916"
      },
      {
        code: "3602",
        name: "\u666F\u5FB7\u9547",
        provinceCode: "36",
        province: "\u6C5F\u897F\u7701",
        lat: "29.274247711040953",
        lng: "117.18457644638579"
      },
      {
        code: "3604",
        name: "\u4E5D\u6C5F",
        provinceCode: "36",
        province: "\u6C5F\u897F\u7701",
        lat: "29.711340559079343",
        lng: "116.00753491163063"
      },
      {
        code: "3608",
        name: "\u5409\u5B89",
        provinceCode: "36",
        province: "\u6C5F\u897F\u7701",
        lat: "27.119726826070448",
        lng: "115.00051072001253"
      },
      {
        code: "3701",
        name: "\u6D4E\u5357",
        provinceCode: "37",
        province: "\u5C71\u4E1C\u7701",
        lat: "36.65655420178723",
        lng: "117.12639941261048"
      },
      {
        code: "3708",
        name: "\u6D4E\u5B81",
        provinceCode: "37",
        province: "\u5C71\u4E1C\u7701",
        lat: "35.420177394529645",
        lng: "116.59361234853988"
      },
      {
        code: "4108",
        name: "\u7126\u4F5C",
        provinceCode: "41",
        province: "\u6CB3\u5357\u7701",
        lat: "35.22096325403899",
        lng: "113.24854783457334"
      },
      {
        code: "4208",
        name: "\u8346\u95E8",
        provinceCode: "42",
        province: "\u6E56\u5317\u7701",
        lat: "31.041732575569622",
        lng: "112.20639298023002"
      },
      {
        code: "4210",
        name: "\u8346\u5DDE",
        provinceCode: "42",
        province: "\u6E56\u5317\u7701",
        lat: "30.340842107742912",
        lng: "112.24552262926137"
      },
      {
        code: "4407",
        name: "\u6C5F\u95E8",
        provinceCode: "44",
        province: "\u5E7F\u4E1C\u7701",
        lat: "22.584603880965",
        lng: "113.08855619524043"
      },
      {
        code: "4452",
        name: "\u63ED\u9633",
        provinceCode: "44",
        province: "\u5E7F\u4E1C\u7701",
        lat: "23.555740488275585",
        lng: "116.37851218033846"
      },
      {
        code: "6202",
        name: "\u5609\u5CEA\u5173",
        provinceCode: "62",
        province: "\u7518\u8083\u7701",
        lat: "39.77796014739059",
        lng: "98.29620384300111"
      },
      {
        code: "6203",
        name: "\u91D1\u660C",
        provinceCode: "62",
        province: "\u7518\u8083\u7701",
        lat: "38.52582009209263",
        lng: "102.19460568669837"
      },
      {
        code: "6209",
        name: "\u9152\u6CC9",
        provinceCode: "62",
        province: "\u7518\u8083\u7701",
        lat: "39.73846908071564",
        lng: "98.50068521606795"
      }
    ]
  },
  {
    initial: "K",
    list: [
      {
        code: "4102",
        name: "\u5F00\u5C01",
        provinceCode: "41",
        province: "\u6CB3\u5357\u7701",
        lat: "34.80288581121172",
        lng: "114.31459258497121"
      },
      {
        code: "5301",
        name: "\u6606\u660E",
        provinceCode: "53",
        province: "\u4E91\u5357\u7701",
        lat: "24.873998150044006",
        lng: "102.85244836500482"
      },
      {
        code: "6502",
        name: "\u514B\u62C9\u739B\u4F9D",
        provinceCode: "65",
        province: "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",
        lat: "45.58567523781376",
        lng: "84.89590053887504"
      },
      {
        code: "6530",
        name: "\u514B\u5B5C\u52D2\u82CF\u67EF\u5C14\u514B\u5B5C\u81EA\u6CBB\u5DDE",
        provinceCode: "65",
        province: "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",
        lat: "39.72047120487073",
        lng: "76.17430867621205"
      },
      {
        code: "6531",
        name: "\u5580\u4EC0\u5730\u533A",
        provinceCode: "65",
        province: "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",
        lat: "39.47609674864479",
        lng: "75.99639055639747"
      }
    ]
  },
  {
    initial: "L",
    list: [
      {
        code: "1310",
        name: "\u5ECA\u574A",
        provinceCode: "13",
        province: "\u6CB3\u5317\u7701",
        lat: "39.54336666275853",
        lng: "116.69058173342549"
      },
      {
        code: "1410",
        name: "\u4E34\u6C7E",
        provinceCode: "14",
        province: "\u5C71\u897F\u7701",
        lat: "36.093741895419726",
        lng: "111.52553022403073"
      },
      {
        code: "1411",
        name: "\u5415\u6881",
        provinceCode: "14",
        province: "\u5C71\u897F\u7701",
        lat: "37.524497749577115",
        lng: "111.15044967529185"
      },
      {
        code: "2110",
        name: "\u8FBD\u9633",
        provinceCode: "21",
        province: "\u8FBD\u5B81\u7701",
        lat: "41.27416129045421",
        lng: "123.24336640651318"
      },
      {
        code: "2204",
        name: "\u8FBD\u6E90",
        provinceCode: "22",
        province: "\u5409\u6797\u7701",
        lat: "42.89405500574631",
        lng: "125.15042516688747"
      },
      {
        code: "3207",
        name: "\u8FDE\u4E91\u6E2F",
        provinceCode: "32",
        province: "\u6C5F\u82CF\u7701",
        lat: "34.60224952526725",
        lng: "119.22862133316607"
      },
      {
        code: "3311",
        name: "\u4E3D\u6C34",
        provinceCode: "33",
        province: "\u6D59\u6C5F\u7701",
        lat: "28.473278180563412",
        lng: "119.9295730584414"
      },
      {
        code: "3415",
        name: "\u516D\u5B89",
        provinceCode: "34",
        province: "\u5B89\u5FBD\u7701",
        lat: "31.741450815322555",
        lng: "116.52640966418569"
      },
      {
        code: "3508",
        name: "\u9F99\u5CA9",
        provinceCode: "35",
        province: "\u798F\u5EFA\u7701",
        lat: "25.081219844871676",
        lng: "117.02344756677536"
      },
      {
        code: "3713",
        name: "\u4E34\u6C82",
        provinceCode: "37",
        province: "\u5C71\u4E1C\u7701",
        lat: "35.11067124236514",
        lng: "118.36353300501388"
      },
      {
        code: "3715",
        name: "\u804A\u57CE",
        provinceCode: "37",
        province: "\u5C71\u4E1C\u7701",
        lat: "36.46275818769411",
        lng: "115.99158784830443"
      },
      {
        code: "4103",
        name: "\u6D1B\u9633",
        provinceCode: "41",
        province: "\u6CB3\u5357\u7701",
        lat: "34.62426277921943",
        lng: "112.4594212983115"
      },
      {
        code: "4111",
        name: "\u6F2F\u6CB3",
        provinceCode: "41",
        province: "\u6CB3\u5357\u7701",
        lat: "33.5877107071022",
        lng: "114.02342077764726"
      },
      {
        code: "4313",
        name: "\u5A04\u5E95",
        provinceCode: "43",
        province: "\u6E56\u5357\u7701",
        lat: "27.703208596991583",
        lng: "112.00150349288418"
      },
      {
        code: "4502",
        name: "\u67F3\u5DDE",
        provinceCode: "45",
        province: "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A",
        lat: "24.331961386852413",
        lng: "109.43442194634564"
      },
      {
        code: "4513",
        name: "\u6765\u5BBE",
        provinceCode: "45",
        province: "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A",
        lat: "23.75654676260728",
        lng: "109.22745819590091"
      },
      {
        code: "5105",
        name: "\u6CF8\u5DDE",
        provinceCode: "51",
        province: "\u56DB\u5DDD\u7701",
        lat: "28.87766830360723",
        lng: "105.4485240693266"
      },
      {
        code: "5111",
        name: "\u4E50\u5C71",
        provinceCode: "51",
        province: "\u56DB\u5DDD\u7701",
        lat: "29.55794071745811",
        lng: "103.7725376036347"
      },
      {
        code: "5134",
        name: "\u51C9\u5C71\u5F5D\u65CF\u81EA\u6CBB\u5DDE",
        provinceCode: "51",
        province: "\u56DB\u5DDD\u7701",
        lat: "27.88775230036972",
        lng: "102.2735026809702"
      },
      {
        code: "5202",
        name: "\u516D\u76D8\u6C34",
        provinceCode: "52",
        province: "\u8D35\u5DDE\u7701",
        lat: "26.598833108257494",
        lng: "104.8375546023468"
      },
      {
        code: "5307",
        name: "\u4E3D\u6C5F",
        provinceCode: "53",
        province: "\u4E91\u5357\u7701",
        lat: "26.860657438064884",
        lng: "100.23246452903453"
      },
      {
        code: "5309",
        name: "\u4E34\u6CA7",
        provinceCode: "53",
        province: "\u4E91\u5357\u7701",
        lat: "23.89046855627851",
        lng: "100.09544042014869"
      },
      {
        code: "5401",
        name: "\u62C9\u8428",
        provinceCode: "54",
        province: "\u897F\u85CF\u81EA\u6CBB\u533A",
        lat: "29.65004027476773",
        lng: "91.12082391546393"
      },
      {
        code: "5404",
        name: "\u6797\u829D",
        provinceCode: "54",
        province: "\u897F\u85CF\u81EA\u6CBB\u533A",
        lat: "29.654042176951524",
        lng: "94.36805828713257"
      },
      {
        code: "6201",
        name: "\u5170\u5DDE",
        provinceCode: "62",
        province: "\u7518\u8083\u7701",
        lat: "36.067234693545565",
        lng: "103.84052119633628"
      },
      {
        code: "6212",
        name: "\u9647\u5357",
        provinceCode: "62",
        province: "\u7518\u8083\u7701",
        lat: "33.40662022995126",
        lng: "104.92857497071192"
      },
      {
        code: "6229",
        name: "\u4E34\u590F\u56DE\u65CF\u81EA\u6CBB\u5DDE",
        provinceCode: "62",
        province: "\u7518\u8083\u7701",
        lat: "35.60989877268906",
        lng: "103.24954917760394"
      }
    ]
  },
  {
    initial: "M",
    list: [
      {
        code: "2310",
        name: "\u7261\u4E39\u6C5F",
        provinceCode: "23",
        province: "\u9ED1\u9F99\u6C5F\u7701",
        lat: "44.55624570898632",
        lng: "129.6395397783469"
      },
      {
        code: "3405",
        name: "\u9A6C\u978D\u5C71",
        provinceCode: "34",
        province: "\u5B89\u5FBD\u7701",
        lat: "31.676265597609103",
        lng: "118.5135795794315"
      },
      {
        code: "4409",
        name: "\u8302\u540D",
        provinceCode: "44",
        province: "\u5E7F\u4E1C\u7701",
        lat: "21.669064031332095",
        lng: "110.931542579969"
      },
      {
        code: "4414",
        name: "\u6885\u5DDE",
        provinceCode: "44",
        province: "\u5E7F\u4E1C\u7701",
        lat: "24.294177532206206",
        lng: "116.12953737612247"
      },
      {
        code: "5107",
        name: "\u7EF5\u9633",
        provinceCode: "51",
        province: "\u56DB\u5DDD\u7701",
        lat: "31.473663048745863",
        lng: "104.6855618607612"
      },
      {
        code: "5114",
        name: "\u7709\u5C71",
        provinceCode: "51",
        province: "\u56DB\u5DDD\u7701",
        lat: "30.082526119421058",
        lng: "103.85656331579456"
      }
    ]
  },
  {
    initial: "N",
    list: [
      {
        code: "3201",
        name: "\u5357\u4EAC",
        provinceCode: "32",
        province: "\u6C5F\u82CF\u7701",
        lat: "32.06465288561847",
        lng: "118.80242172124585"
      },
      {
        code: "3206",
        name: "\u5357\u901A",
        provinceCode: "32",
        province: "\u6C5F\u82CF\u7701",
        lat: "31.98654943120089",
        lng: "120.90159173866185"
      },
      {
        code: "3302",
        name: "\u5B81\u6CE2",
        provinceCode: "33",
        province: "\u6D59\u6C5F\u7701",
        lat: "29.866033045866054",
        lng: "121.62857249434141"
      },
      {
        code: "3507",
        name: "\u5357\u5E73",
        provinceCode: "35",
        province: "\u798F\u5EFA\u7701",
        lat: "26.647772874203266",
        lng: "118.1843695481426"
      },
      {
        code: "3509",
        name: "\u5B81\u5FB7",
        provinceCode: "35",
        province: "\u798F\u5EFA\u7701",
        lat: "26.672241711408567",
        lng: "119.55451074542829"
      },
      {
        code: "3601",
        name: "\u5357\u660C",
        provinceCode: "36",
        province: "\u6C5F\u897F\u7701",
        lat: "28.68945529506072",
        lng: "115.86458944231661"
      },
      {
        code: "4113",
        name: "\u5357\u9633",
        provinceCode: "41",
        province: "\u6CB3\u5357\u7701",
        lat: "32.99656220465144",
        lng: "112.53450131351325"
      },
      {
        code: "4501",
        name: "\u5357\u5B81",
        provinceCode: "45",
        province: "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A",
        lat: "22.822606601187154",
        lng: "108.37345082581861"
      },
      {
        code: "5110",
        name: "\u5185\u6C5F",
        provinceCode: "51",
        province: "\u56DB\u5DDD\u7701",
        lat: "29.58588653832045",
        lng: "105.06458802499718"
      },
      {
        code: "5113",
        name: "\u5357\u5145",
        provinceCode: "51",
        province: "\u56DB\u5DDD\u7701",
        lat: "30.843782508337036",
        lng: "106.11750261487227"
      },
      {
        code: "5333",
        name: "\u6012\u6C5F\u5088\u50F3\u65CF\u81EA\u6CBB\u5DDE",
        provinceCode: "53",
        province: "\u4E91\u5357\u7701",
        lat: "25.823707417657754",
        lng: "98.8632883813579"
      },
      {
        code: "5406",
        name: "\u90A3\u66F2",
        provinceCode: "54",
        province: "\u897F\u85CF\u81EA\u6CBB\u533A",
        lat: "31.482438388454657",
        lng: "92.0573384981749"
      }
    ]
  },
  {
    initial: "P",
    list: [
      {
        code: "2111",
        name: "\u76D8\u9526",
        provinceCode: "21",
        province: "\u8FBD\u5B81\u7701",
        lat: "41.12587528873715",
        lng: "122.07749009021381"
      },
      {
        code: "3503",
        name: "\u8386\u7530",
        provinceCode: "35",
        province: "\u798F\u5EFA\u7701",
        lat: "25.45986545592271",
        lng: "119.0145209781265"
      },
      {
        code: "3603",
        name: "\u840D\u4E61",
        provinceCode: "36",
        province: "\u6C5F\u897F\u7701",
        lat: "27.6283927093972",
        lng: "113.8614964337543"
      },
      {
        code: "4104",
        name: "\u5E73\u9876\u5C71",
        provinceCode: "41",
        province: "\u6CB3\u5357\u7701",
        lat: "33.772050748691015",
        lng: "113.19952856052156"
      },
      {
        code: "4109",
        name: "\u6FEE\u9633",
        provinceCode: "41",
        province: "\u6CB3\u5357\u7701",
        lat: "35.76759302890629",
        lng: "115.03559747034215"
      },
      {
        code: "5104",
        name: "\u6500\u679D\u82B1",
        provinceCode: "51",
        province: "\u56DB\u5DDD\u7701",
        lat: "26.58803317333301",
        lng: "101.72554117091441"
      },
      {
        code: "5308",
        name: "\u666E\u6D31",
        provinceCode: "53",
        province: "\u4E91\u5357\u7701",
        lat: "22.830979186010275",
        lng: "100.97256981472799"
      },
      {
        code: "6208",
        name: "\u5E73\u51C9",
        provinceCode: "62",
        province: "\u7518\u8083\u7701",
        lat: "35.549232050463516",
        lng: "106.67144234827796"
      }
    ]
  },
  {
    initial: "Q",
    list: [
      {
        code: "1303",
        name: "\u79E6\u7687\u5C9B",
        provinceCode: "13",
        province: "\u6CB3\u5317\u7701",
        lat: "39.941748102377936",
        lng: "119.60853063334328"
      },
      {
        code: "2302",
        name: "\u9F50\u9F50\u54C8\u5C14",
        provinceCode: "23",
        province: "\u9ED1\u9F99\u6C5F\u7701",
        lat: "47.3599771860153",
        lng: "123.92457086841536"
      },
      {
        code: "2309",
        name: "\u4E03\u53F0\u6CB3",
        provinceCode: "23",
        province: "\u9ED1\u9F99\u6C5F\u7701",
        lat: "45.77630032154785",
        lng: "131.01154459102744"
      },
      {
        code: "3308",
        name: "\u8862\u5DDE",
        provinceCode: "33",
        province: "\u6D59\u6C5F\u7701",
        lat: "28.975545802265025",
        lng: "118.86659674035565"
      },
      {
        code: "3505",
        name: "\u6CC9\u5DDE",
        provinceCode: "35",
        province: "\u798F\u5EFA\u7701",
        lat: "24.879952330498313",
        lng: "118.68244626680422"
      },
      {
        code: "3702",
        name: "\u9752\u5C9B",
        provinceCode: "37",
        province: "\u5C71\u4E1C\u7701",
        lat: "36.072227496663224",
        lng: "120.38945519114627"
      },
      {
        code: "4418",
        name: "\u6E05\u8FDC",
        provinceCode: "44",
        province: "\u5E7F\u4E1C\u7701",
        lat: "23.688230292088083",
        lng: "113.06246832527266"
      },
      {
        code: "4507",
        name: "\u94A6\u5DDE",
        provinceCode: "45",
        province: "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A",
        lat: "21.986593539484296",
        lng: "108.66058016842224"
      },
      {
        code: "5223",
        name: "\u9ED4\u897F\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
        provinceCode: "52",
        province: "\u8D35\u5DDE\u7701",
        lat: "27.014344747084042",
        lng: "106.03857397725803"
      },
      {
        code: "5226",
        name: "\u9ED4\u4E1C\u5357\u82D7\u65CF\u4F97\u65CF\u81EA\u6CBB\u5DDE",
        provinceCode: "52",
        province: "\u8D35\u5DDE\u7701",
        lat: "26.58970296982603",
        lng: "107.9894462407788"
      },
      {
        code: "5227",
        name: "\u9ED4\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
        provinceCode: "52",
        province: "\u8D35\u5DDE\u7701",
        lat: "26.260616196073833",
        lng: "107.5284027057371"
      },
      {
        code: "5303",
        name: "\u66F2\u9756",
        provinceCode: "53",
        province: "\u4E91\u5357\u7701",
        lat: "25.496406931543667",
        lng: "103.80243482794681"
      },
      {
        code: "6210",
        name: "\u5E86\u9633",
        provinceCode: "62",
        province: "\u7518\u8083\u7701",
        lat: "35.71521598356201",
        lng: "107.6493856959542"
      }
    ]
  },
  {
    initial: "R",
    list: [
      {
        code: "3711",
        name: "\u65E5\u7167",
        provinceCode: "37",
        province: "\u5C71\u4E1C\u7701",
        lat: "35.42283899843767",
        lng: "119.53341540456555"
      },
      {
        code: "5402",
        name: "\u65E5\u5580\u5219",
        provinceCode: "54",
        province: "\u897F\u85CF\u81EA\u6CBB\u533A",
        lat: "29.275657822511512",
        lng: "88.89370303482552"
      }
    ]
  },
  {
    initial: "S",
    list: [
      {
        code: "1301",
        name: "\u77F3\u5BB6\u5E84",
        provinceCode: "13",
        province: "\u6CB3\u5317\u7701",
        lat: "38.052097109846855",
        lng: "114.46902163264978"
      },
      {
        code: "1406",
        name: "\u6714\u5DDE",
        provinceCode: "14",
        province: "\u5C71\u897F\u7701",
        lat: "39.337108370541735",
        lng: "112.4393709396677"
      },
      {
        code: "2101",
        name: "\u6C88\u9633",
        provinceCode: "21",
        province: "\u8FBD\u5B81\u7701",
        lat: "41.68383006919066",
        lng: "123.47109664482264"
      },
      {
        code: "2203",
        name: "\u56DB\u5E73",
        provinceCode: "22",
        province: "\u5409\u6797\u7701",
        lat: "43.171993571561",
        lng: "124.35648155715893"
      },
      {
        code: "2207",
        name: "\u677E\u539F",
        provinceCode: "22",
        province: "\u5409\u6797\u7701",
        lat: "45.14740419341382",
        lng: "124.83148187569292"
      },
      {
        code: "2305",
        name: "\u53CC\u9E2D\u5C71",
        provinceCode: "23",
        province: "\u9ED1\u9F99\u6C5F\u7701",
        lat: "46.65318589588607",
        lng: "131.16534168078073"
      },
      {
        code: "2312",
        name: "\u7EE5\u5316",
        provinceCode: "23",
        province: "\u9ED1\u9F99\u6C5F\u7701",
        lat: "46.6600321798244",
        lng: "126.97535687530133"
      },
      {
        code: "3101",
        name: "\u4E0A\u6D77",
        provinceCode: "31",
        province: "\u4E0A\u6D77\u5E02",
        lat: "31.235929042252014",
        lng: "121.48053886017651"
      },
      {
        code: "3205",
        name: "\u82CF\u5DDE",
        provinceCode: "32",
        province: "\u6C5F\u82CF\u7701",
        lat: "31.303564074441766",
        lng: "120.59241222959322"
      },
      {
        code: "3213",
        name: "\u5BBF\u8FC1",
        provinceCode: "32",
        province: "\u6C5F\u82CF\u7701",
        lat: "33.96774971569008",
        lng: "118.28157403570837"
      },
      {
        code: "3306",
        name: "\u7ECD\u5174",
        provinceCode: "33",
        province: "\u6D59\u6C5F\u7701",
        lat: "30.0363693113069",
        lng: "120.58547847885335"
      },
      {
        code: "3413",
        name: "\u5BBF\u5DDE",
        provinceCode: "34",
        province: "\u5B89\u5FBD\u7701",
        lat: "33.65209532645213",
        lng: "116.97054394561262"
      },
      {
        code: "3504",
        name: "\u4E09\u660E",
        provinceCode: "35",
        province: "\u798F\u5EFA\u7701",
        lat: "26.269736515991838",
        lng: "117.64552116782143"
      },
      {
        code: "3611",
        name: "\u4E0A\u9976",
        provinceCode: "36",
        province: "\u6C5F\u897F\u7701",
        lat: "28.460625921851733",
        lng: "117.94945960312224"
      },
      {
        code: "4112",
        name: "\u4E09\u95E8\u5CE1",
        provinceCode: "41",
        province: "\u6CB3\u5357\u7701",
        lat: "34.778327249459984",
        lng: "111.2065332238741"
      },
      {
        code: "4114",
        name: "\u5546\u4E18",
        provinceCode: "41",
        province: "\u6CB3\u5357\u7701",
        lat: "34.4202016658586",
        lng: "115.66244933826238"
      },
      {
        code: "4203",
        name: "\u5341\u5830",
        provinceCode: "42",
        province: "\u6E56\u5317\u7701",
        lat: "32.63506185840116",
        lng: "110.80452956069568"
      },
      {
        code: "4213",
        name: "\u968F\u5DDE",
        provinceCode: "42",
        province: "\u6E56\u5317\u7701",
        lat: "31.6965167723283",
        lng: "113.38945001822157"
      },
      {
        code: "4305",
        name: "\u90B5\u9633",
        provinceCode: "43",
        province: "\u6E56\u5357\u7701",
        lat: "27.245270272808565",
        lng: "111.474432885931"
      },
      {
        code: "4402",
        name: "\u97F6\u5173",
        provinceCode: "44",
        province: "\u5E7F\u4E1C\u7701",
        lat: "24.815881278583017",
        lng: "113.60352734562261"
      },
      {
        code: "4403",
        name: "\u6DF1\u5733",
        provinceCode: "44",
        province: "\u5E7F\u4E1C\u7701",
        lat: "22.548456637984177",
        lng: "114.06455183658751"
      },
      {
        code: "4405",
        name: "\u6C55\u5934",
        provinceCode: "44",
        province: "\u5E7F\u4E1C\u7701",
        lat: "23.35909171772515",
        lng: "116.68852864054833"
      },
      {
        code: "4415",
        name: "\u6C55\u5C3E",
        provinceCode: "44",
        province: "\u5E7F\u4E1C\u7701",
        lat: "22.79126303654673",
        lng: "115.38155260365083"
      },
      {
        code: "4602",
        name: "\u4E09\u4E9A",
        provinceCode: "46",
        province: "\u6D77\u5357\u7701",
        lat: "18.258736291747855",
        lng: "109.51855670139908"
      },
      {
        code: "4603",
        name: "\u4E09\u6C99",
        provinceCode: "46",
        province: "\u6D77\u5357\u7701",
        lat: "30.316571904872184",
        lng: "112.26157741482734"
      },
      {
        code: "5109",
        name: "\u9042\u5B81",
        provinceCode: "51",
        province: "\u56DB\u5DDD\u7701",
        lat: "30.53909767110912",
        lng: "105.5994215306444"
      },
      {
        code: "5405",
        name: "\u5C71\u5357",
        provinceCode: "54",
        province: "\u897F\u85CF\u81EA\u6CBB\u533A",
        lat: "29.243026939249226",
        lng: "91.77867513851903"
      },
      {
        code: "6110",
        name: "\u5546\u6D1B",
        provinceCode: "61",
        province: "\u9655\u897F\u7701",
        lat: "33.87863385220776",
        lng: "109.92441788136406"
      },
      {
        code: "6402",
        name: "\u77F3\u5634\u5C71",
        provinceCode: "64",
        province: "\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A",
        lat: "38.98968283991508",
        lng: "106.3906004255049"
      }
    ]
  },
  {
    initial: "T",
    list: [
      {
        code: "1201",
        name: "\u5929\u6D25",
        provinceCode: "12",
        province: "\u5929\u6D25\u5E02",
        lat: "39.093667843403956",
        lng: "117.2095232146708"
      },
      {
        code: "1302",
        name: "\u5510\u5C71",
        provinceCode: "13",
        province: "\u6CB3\u5317\u7701",
        lat: "39.63658372414733",
        lng: "118.18645947203979"
      },
      {
        code: "1401",
        name: "\u592A\u539F",
        provinceCode: "14",
        province: "\u5C71\u897F\u7701",
        lat: "37.87698902884778",
        lng: "112.55639149167204"
      },
      {
        code: "1505",
        name: "\u901A\u8FBD",
        provinceCode: "15",
        province: "\u5185\u8499\u53E4\u81EA\u6CBB\u533A",
        lat: "43.657980083916655",
        lng: "122.25052178737633"
      },
      {
        code: "2112",
        name: "\u94C1\u5CAD",
        provinceCode: "21",
        province: "\u8FBD\u5B81\u7701",
        lat: "42.22994799718447",
        lng: "123.73236520917769"
      },
      {
        code: "2205",
        name: "\u901A\u5316",
        provinceCode: "22",
        province: "\u5409\u6797\u7701",
        lat: "41.733815801613424",
        lng: "125.94660627598029"
      },
      {
        code: "3212",
        name: "\u6CF0\u5DDE",
        provinceCode: "32",
        province: "\u6C5F\u82CF\u7701",
        lat: "32.4606750493083",
        lng: "119.9295663378548"
      },
      {
        code: "3310",
        name: "\u53F0\u5DDE",
        provinceCode: "33",
        province: "\u6D59\u6C5F\u7701",
        lat: "28.66219405599615",
        lng: "121.42743470427969"
      },
      {
        code: "3407",
        name: "\u94DC\u9675",
        provinceCode: "34",
        province: "\u5B89\u5FBD\u7701",
        lat: "30.95123323991339",
        lng: "117.81847679445747"
      },
      {
        code: "3709",
        name: "\u6CF0\u5B89",
        provinceCode: "37",
        province: "\u5C71\u4E1C\u7701",
        lat: "36.2058580448846",
        lng: "117.0944948347959"
      },
      {
        code: "5206",
        name: "\u94DC\u4EC1",
        provinceCode: "52",
        province: "\u8D35\u5DDE\u7701",
        lat: "27.73778645640524",
        lng: "109.19643889817665"
      },
      {
        code: "6102",
        name: "\u94DC\u5DDD",
        provinceCode: "61",
        province: "\u9655\u897F\u7701",
        lat: "34.902637080502906",
        lng: "108.95240424835922"
      },
      {
        code: "6205",
        name: "\u5929\u6C34",
        provinceCode: "62",
        province: "\u7518\u8083\u7701",
        lat: "34.58741188165064",
        lng: "105.73141674566955"
      },
      {
        code: "6504",
        name: "\u5410\u9C81\u756A",
        provinceCode: "65",
        province: "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",
        lat: "42.95698484877124",
        lng: "89.1972972460079"
      },
      {
        code: "6542",
        name: "\u5854\u57CE\u5730\u533A",
        provinceCode: "65",
        province: "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",
        lat: "46.750948254373434",
        lng: "82.9872355184064"
      }
    ]
  },
  {
    initial: "W",
    list: [
      {
        code: "1503",
        name: "\u4E4C\u6D77",
        provinceCode: "15",
        province: "\u5185\u8499\u53E4\u81EA\u6CBB\u533A",
        lat: "39.6620063648907",
        lng: "106.80039104999656"
      },
      {
        code: "1509",
        name: "\u4E4C\u5170\u5BDF\u5E03",
        provinceCode: "15",
        province: "\u5185\u8499\u53E4\u81EA\u6CBB\u533A",
        lat: "41.00074832767381",
        lng: "113.13946767446333"
      },
      {
        code: "3202",
        name: "\u65E0\u9521",
        provinceCode: "32",
        province: "\u6C5F\u82CF\u7701",
        lat: "31.498809732685714",
        lng: "120.31858328810601"
      },
      {
        code: "3303",
        name: "\u6E29\u5DDE",
        provinceCode: "33",
        province: "\u6D59\u6C5F\u7701",
        lat: "28.00108540447221",
        lng: "120.70647689035565"
      },
      {
        code: "3402",
        name: "\u829C\u6E56",
        provinceCode: "34",
        province: "\u5B89\u5FBD\u7701",
        lat: "31.358536655799266",
        lng: "118.43943137653523"
      },
      {
        code: "3707",
        name: "\u6F4D\u574A",
        provinceCode: "37",
        province: "\u5C71\u4E1C\u7701",
        lat: "36.71265155126753",
        lng: "119.16837791142822"
      },
      {
        code: "3710",
        name: "\u5A01\u6D77",
        provinceCode: "37",
        province: "\u5C71\u4E1C\u7701",
        lat: "37.5164305480148",
        lng: "122.12754097831325"
      },
      {
        code: "4201",
        name: "\u6B66\u6C49",
        provinceCode: "42",
        province: "\u6E56\u5317\u7701",
        lat: "30.598466736400987",
        lng: "114.31158155473231"
      },
      {
        code: "4504",
        name: "\u68A7\u5DDE",
        provinceCode: "45",
        province: "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A",
        lat: "23.48274528113516",
        lng: "111.28551681182014"
      },
      {
        code: "5326",
        name: "\u6587\u5C71\u58EE\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
        provinceCode: "53",
        province: "\u4E91\u5357\u7701",
        lat: "23.40599429361173",
        lng: "104.22256899109433"
      },
      {
        code: "6105",
        name: "\u6E2D\u5357",
        provinceCode: "61",
        province: "\u9655\u897F\u7701",
        lat: "34.50571551675255",
        lng: "109.51658960525897"
      },
      {
        code: "6206",
        name: "\u6B66\u5A01",
        provinceCode: "62",
        province: "\u7518\u8083\u7701",
        lat: "37.93437780815811",
        lng: "102.64455434036918"
      },
      {
        code: "6403",
        name: "\u5434\u5FE0",
        provinceCode: "64",
        province: "\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A",
        lat: "38.00371291345338",
        lng: "106.20537126663626"
      },
      {
        code: "6501",
        name: "\u4E4C\u9C81\u6728\u9F50",
        provinceCode: "65",
        province: "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",
        lat: "43.830763204290484",
        lng: "87.62443993536046"
      }
    ]
  },
  {
    initial: "X",
    list: [
      {
        code: "1305",
        name: "\u90A2\u53F0",
        provinceCode: "13",
        province: "\u6CB3\u5317\u7701",
        lat: "37.07716685005908",
        lng: "115.0316624430557"
      },
      {
        code: "1409",
        name: "\u5FFB\u5DDE",
        provinceCode: "14",
        province: "\u5C71\u897F\u7701",
        lat: "38.42238338517772",
        lng: "112.74062416023847"
      },
      {
        code: "1522",
        name: "\u5174\u5B89\u76DF",
        provinceCode: "15",
        province: "\u5185\u8499\u53E4\u81EA\u6CBB\u533A",
        lat: "46.08846371321896",
        lng: "122.04436452582519"
      },
      {
        code: "1525",
        name: "\u9521\u6797\u90ED\u52D2\u76DF",
        provinceCode: "15",
        province: "\u5185\u8499\u53E4\u81EA\u6CBB\u533A",
        lat: "43.93942266533856",
        lng: "116.05439144074573"
      },
      {
        code: "3203",
        name: "\u5F90\u5DDE",
        provinceCode: "32",
        province: "\u6C5F\u82CF\u7701",
        lat: "34.21266655011306",
        lng: "117.29057543439453"
      },
      {
        code: "3418",
        name: "\u5BA3\u57CE",
        provinceCode: "34",
        province: "\u5B89\u5FBD\u7701",
        lat: "30.94660154529291",
        lng: "118.76553424276743"
      },
      {
        code: "3502",
        name: "\u53A6\u95E8",
        provinceCode: "35",
        province: "\u798F\u5EFA\u7701",
        lat: "24.485406605176305",
        lng: "118.09643549976651"
      },
      {
        code: "3605",
        name: "\u65B0\u4F59",
        provinceCode: "36",
        province: "\u6C5F\u897F\u7701",
        lat: "27.823578697788587",
        lng: "114.9235346513963"
      },
      {
        code: "4107",
        name: "\u65B0\u4E61",
        provinceCode: "41",
        province: "\u6CB3\u5357\u7701",
        lat: "35.3096399303368",
        lng: "113.93360046733228"
      },
      {
        code: "4110",
        name: "\u8BB8\u660C",
        provinceCode: "41",
        province: "\u6CB3\u5357\u7701",
        lat: "34.04143161161871",
        lng: "113.85847553685502"
      },
      {
        code: "4115",
        name: "\u4FE1\u9633",
        provinceCode: "41",
        province: "\u6CB3\u5357\u7701",
        lat: "32.15301454753105",
        lng: "114.09748283304512"
      },
      {
        code: "4206",
        name: "\u8944\u9633",
        provinceCode: "42",
        province: "\u6E56\u5317\u7701",
        lat: "32.014796804669224",
        lng: "112.12853720100244"
      },
      {
        code: "4209",
        name: "\u5B5D\u611F",
        provinceCode: "42",
        province: "\u6E56\u5317\u7701",
        lat: "30.930689227018295",
        lng: "113.92251007733665"
      },
      {
        code: "4212",
        name: "\u54B8\u5B81",
        provinceCode: "42",
        province: "\u6E56\u5317\u7701",
        lat: "29.847055947646492",
        lng: "114.32851909026844"
      },
      {
        code: "4303",
        name: "\u6E58\u6F6D",
        provinceCode: "43",
        province: "\u6E56\u5357\u7701",
        lat: "27.835702227135585",
        lng: "112.95046418076468"
      },
      {
        code: "4331",
        name: "\u6E58\u897F\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
        provinceCode: "43",
        province: "\u6E56\u5357\u7701",
        lat: "28.317369104701186",
        lng: "109.74557664946683"
      },
      {
        code: "5002",
        name: "\u53BF",
        provinceCode: "50",
        province: "\u91CD\u5E86\u5E02",
        lat: "29.568996245338923",
        lng: "106.55843415537664"
      },
      {
        code: "5328",
        name: "\u897F\u53CC\u7248\u7EB3\u50A3\u65CF\u81EA\u6CBB\u5DDE",
        provinceCode: "53",
        province: "\u4E91\u5357\u7701",
        lat: "22.013601254764165",
        lng: "100.80344682455637"
      },
      {
        code: "6101",
        name: "\u897F\u5B89",
        provinceCode: "61",
        province: "\u9655\u897F\u7701",
        lat: "34.34726881662395",
        lng: "108.94646555063274"
      },
      {
        code: "6104",
        name: "\u54B8\u9633",
        provinceCode: "61",
        province: "\u9655\u897F\u7701",
        lat: "34.335476293368586",
        lng: "108.71542245143303"
      },
      {
        code: "6301",
        name: "\u897F\u5B81",
        provinceCode: "63",
        province: "\u9752\u6D77\u7701",
        lat: "36.62338469651661",
        lng: "101.78445017050855"
      }
    ]
  },
  {
    initial: "Y",
    list: [
      {
        code: "1403",
        name: "\u9633\u6CC9",
        provinceCode: "14",
        province: "\u5C71\u897F\u7701",
        lat: "37.862360847859385",
        lng: "113.58761666287546"
      },
      {
        code: "1408",
        name: "\u8FD0\u57CE",
        provinceCode: "14",
        province: "\u5C71\u897F\u7701",
        lat: "35.03270691290923",
        lng: "111.01338945447925"
      },
      {
        code: "2108",
        name: "\u8425\u53E3",
        provinceCode: "21",
        province: "\u8FBD\u5B81\u7701",
        lat: "40.67313683826707",
        lng: "122.24157466449694"
      },
      {
        code: "2224",
        name: "\u5EF6\u8FB9\u671D\u9C9C\u65CF\u81EA\u6CBB\u5DDE",
        provinceCode: "22",
        province: "\u5409\u6797\u7701",
        lat: "42.91574303372181",
        lng: "129.4773763202274"
      },
      {
        code: "2307",
        name: "\u4F0A\u6625",
        provinceCode: "23",
        province: "\u9ED1\u9F99\u6C5F\u7701",
        lat: "47.733318457230936",
        lng: "128.84754638019822"
      },
      {
        code: "3209",
        name: "\u76D0\u57CE",
        provinceCode: "32",
        province: "\u6C5F\u82CF\u7701",
        lat: "33.355100917626196",
        lng: "120.167544265761"
      },
      {
        code: "3210",
        name: "\u626C\u5DDE",
        provinceCode: "32",
        province: "\u6C5F\u82CF\u7701",
        lat: "32.40067693609037",
        lng: "119.41941890822997"
      },
      {
        code: "3606",
        name: "\u9E70\u6F6D",
        provinceCode: "36",
        province: "\u6C5F\u897F\u7701",
        lat: "28.265787063191418",
        lng: "117.0755754270272"
      },
      {
        code: "3609",
        name: "\u5B9C\u6625",
        provinceCode: "36",
        province: "\u6C5F\u897F\u7701",
        lat: "27.820856421848216",
        lng: "114.4235636759064"
      },
      {
        code: "3706",
        name: "\u70DF\u53F0",
        provinceCode: "37",
        province: "\u5C71\u4E1C\u7701",
        lat: "37.470038383730525",
        lng: "121.45441541730195"
      },
      {
        code: "4205",
        name: "\u5B9C\u660C",
        provinceCode: "42",
        province: "\u6E56\u5317\u7701",
        lat: "30.697446484492378",
        lng: "111.29254921035434"
      },
      {
        code: "4306",
        name: "\u5CB3\u9633",
        provinceCode: "43",
        province: "\u6E56\u5357\u7701",
        lat: "29.3631782939259",
        lng: "113.13548942422142"
      },
      {
        code: "4309",
        name: "\u76CA\u9633",
        provinceCode: "43",
        province: "\u6E56\u5357\u7701",
        lat: "28.559711178489888",
        lng: "112.36151595471031"
      },
      {
        code: "4311",
        name: "\u6C38\u5DDE",
        provinceCode: "43",
        province: "\u6E56\u5357\u7701",
        lat: "26.425864117900094",
        lng: "111.61945505792227"
      },
      {
        code: "4417",
        name: "\u9633\u6C5F",
        provinceCode: "44",
        province: "\u5E7F\u4E1C\u7701",
        lat: "21.864339726138933",
        lng: "111.98848929181268"
      },
      {
        code: "4453",
        name: "\u4E91\u6D6E",
        provinceCode: "44",
        province: "\u5E7F\u4E1C\u7701",
        lat: "22.920911970342857",
        lng: "112.05151269959146"
      },
      {
        code: "4509",
        name: "\u7389\u6797",
        provinceCode: "45",
        province: "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A",
        lat: "22.659830509953142",
        lng: "110.1884531233724"
      },
      {
        code: "5115",
        name: "\u5B9C\u5BBE",
        provinceCode: "51",
        province: "\u56DB\u5DDD\u7701",
        lat: "28.75800702855183",
        lng: "104.6494037048691"
      },
      {
        code: "5118",
        name: "\u96C5\u5B89",
        provinceCode: "51",
        province: "\u56DB\u5DDD\u7701",
        lat: "30.01679254570607",
        lng: "103.04954262360451"
      },
      {
        code: "5304",
        name: "\u7389\u6EAA",
        provinceCode: "53",
        province: "\u4E91\u5357\u7701",
        lat: "24.35771094244625",
        lng: "102.55356029311"
      },
      {
        code: "6106",
        name: "\u5EF6\u5B89",
        provinceCode: "61",
        province: "\u9655\u897F\u7701",
        lat: "36.59111103521779",
        lng: "109.49658191612687"
      },
      {
        code: "6108",
        name: "\u6986\u6797",
        provinceCode: "61",
        province: "\u9655\u897F\u7701",
        lat: "38.290883835484046",
        lng: "109.74161603381395"
      },
      {
        code: "6327",
        name: "\u7389\u6811\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        provinceCode: "63",
        province: "\u9752\u6D77\u7701",
        lat: "33.01097958514274",
        lng: "97.01318076277326"
      },
      {
        code: "6401",
        name: "\u94F6\u5DDD",
        provinceCode: "64",
        province: "\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A",
        lat: "38.492460055509596",
        lng: "106.23849358740017"
      },
      {
        code: "6540",
        name: "\u4F0A\u7281\u54C8\u8428\u514B\u81EA\u6CBB\u5DDE",
        provinceCode: "65",
        province: "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",
        lat: "43.92272313749215",
        lng: "81.3305377475322"
      }
    ]
  },
  {
    initial: "Z",
    list: [
      {
        code: "1307",
        name: "\u5F20\u5BB6\u53E3",
        provinceCode: "13",
        province: "\u6CB3\u5317\u7701",
        lat: "40.7732372026915",
        lng: "114.89257223145165"
      },
      {
        code: "3211",
        name: "\u9547\u6C5F",
        provinceCode: "32",
        province: "\u6C5F\u82CF\u7701",
        lat: "32.19471592052375",
        lng: "119.43048944567383"
      },
      {
        code: "3309",
        name: "\u821F\u5C71",
        provinceCode: "33",
        province: "\u6D59\u6C5F\u7701",
        lat: "29.99091168016034",
        lng: "122.21355631852045"
      },
      {
        code: "3506",
        name: "\u6F33\u5DDE",
        provinceCode: "35",
        province: "\u798F\u5EFA\u7701",
        lat: "24.51892979117087",
        lng: "117.65357645298785"
      },
      {
        code: "3703",
        name: "\u6DC4\u535A",
        provinceCode: "37",
        province: "\u5C71\u4E1C\u7701",
        lat: "36.81908568332188",
        lng: "118.06145253489896"
      },
      {
        code: "3704",
        name: "\u67A3\u5E84",
        provinceCode: "37",
        province: "\u5C71\u4E1C\u7701",
        lat: "34.815994048435115",
        lng: "117.33054194483897"
      },
      {
        code: "4101",
        name: "\u90D1\u5DDE",
        provinceCode: "41",
        province: "\u6CB3\u5357\u7701",
        lat: "34.75343885045448",
        lng: "113.63141920733915"
      },
      {
        code: "4116",
        name: "\u5468\u53E3",
        provinceCode: "41",
        province: "\u6CB3\u5357\u7701",
        lat: "33.6318288757022",
        lng: "114.70348251482332"
      },
      {
        code: "4117",
        name: "\u9A7B\u9A6C\u5E97",
        provinceCode: "41",
        province: "\u6CB3\u5357\u7701",
        lat: "33.01784241674367",
        lng: "114.02847078173271"
      },
      {
        code: "4302",
        name: "\u682A\u6D32",
        provinceCode: "43",
        province: "\u6E56\u5357\u7701",
        lat: "27.833567639016444",
        lng: "113.14047079776427"
      },
      {
        code: "4308",
        name: "\u5F20\u5BB6\u754C",
        provinceCode: "43",
        province: "\u6E56\u5357\u7701",
        lat: "29.122815562551878",
        lng: "110.48553254695402"
      },
      {
        code: "4404",
        name: "\u73E0\u6D77",
        provinceCode: "44",
        province: "\u5E7F\u4E1C\u7701",
        lat: "22.27656465424921",
        lng: "113.58255478654918"
      },
      {
        code: "4408",
        name: "\u6E5B\u6C5F",
        provinceCode: "44",
        province: "\u5E7F\u4E1C\u7701",
        lat: "21.276723439012073",
        lng: "110.36555441392824"
      },
      {
        code: "4412",
        name: "\u8087\u5E86",
        provinceCode: "44",
        province: "\u5E7F\u4E1C\u7701",
        lat: "23.052888771125616",
        lng: "112.47148894063035"
      },
      {
        code: "4420",
        name: "\u4E2D\u5C71",
        provinceCode: "44",
        province: "\u5E7F\u4E1C\u7701",
        lat: "22.5223146707905",
        lng: "113.39942236263188"
      },
      {
        code: "5001",
        name: "\u91CD\u5E86",
        provinceCode: "50",
        province: "\u91CD\u5E86\u5E02",
        lat: "29.568996245338923",
        lng: "106.55843415537664"
      },
      {
        code: "5103",
        name: "\u81EA\u8D21",
        provinceCode: "51",
        province: "\u56DB\u5DDD\u7701",
        lat: "29.345584921327575",
        lng: "104.78444884671711"
      },
      {
        code: "5120",
        name: "\u8D44\u9633",
        provinceCode: "51",
        province: "\u56DB\u5DDD\u7701",
        lat: "30.13495655925314",
        lng: "104.6344353416441"
      },
      {
        code: "5203",
        name: "\u9075\u4E49",
        provinceCode: "52",
        province: "\u8D35\u5DDE\u7701",
        lat: "27.731700878916666",
        lng: "106.93342774801829"
      },
      {
        code: "5306",
        name: "\u662D\u901A",
        provinceCode: "53",
        province: "\u4E91\u5357\u7701",
        lat: "27.34408386024681",
        lng: "103.72351177196889"
      },
      {
        code: "6207",
        name: "\u5F20\u6396",
        provinceCode: "62",
        province: "\u7518\u8083\u7701",
        lat: "38.932066007004934",
        lng: "100.45641147405634"
      },
      {
        code: "6405",
        name: "\u4E2D\u536B",
        provinceCode: "64",
        province: "\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A",
        lat: "37.50570141870293",
        lng: "105.20357090088713"
      }
    ]
  }
];
const _sfc_main = {
  data() {
    return {
      scrollview: "A",
      cityList: [],
      activeIndex: "A",
      touchmove: false
    };
  },
  watch: {
    activeIndex(value) {
      this.scrollview = value;
    }
  },
  methods: {
    initCityList() {
      this.cityList = cityList;
    },
    onTouchMove(index) {
      this.activeIndex = index;
      this.touchmove = true;
    },
    onTouchStop() {
      this.touchmove = false;
    }
  },
  mounted() {
    this.initCityList();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.cityList, (group, k0, i0) => {
      return {
        a: common_vendor.t(group.initial),
        b: common_vendor.f(group.list, (city, index, i1) => {
          return {
            a: common_vendor.t(city.name),
            b: index,
            c: common_vendor.o(($event) => _ctx.$emit("select", city))
          };
        }),
        c: group.initial,
        d: group.initial
      };
    }),
    b: $data.scrollview,
    c: common_vendor.f($data.cityList, (group, k0, i0) => {
      return {
        a: common_vendor.t(group.initial),
        b: group.initial,
        c: common_vendor.o(($event) => $options.onTouchMove(group.initial), group.initial),
        d: common_vendor.o((...args) => $options.onTouchStop && $options.onTouchStop(...args), group.initial),
        e: common_vendor.o((...args) => $options.onTouchStop && $options.onTouchStop(...args), group.initial)
      };
    }),
    d: $data.touchmove
  }, $data.touchmove ? {
    e: common_vendor.t($data.activeIndex)
  } : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-17a607e8"], ["__file", "E:/uniapp/naixuedecha/Honor/uni_modules/t-index-address/components/t-index-address/t-index-address.vue"]]);
wx.createComponent(Component);
