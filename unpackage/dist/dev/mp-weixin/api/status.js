"use strict";
const showMessage = (status) => {
  let message = "";
  switch (status) {
    case 400:
      message = "\u8BF7\u6C42\u9519\u8BEF(400)";
      break;
    case 401:
      message = "\u672A\u6388\u6743\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55(401)";
      break;
    case 403:
      message = "\u62D2\u7EDD\u8BBF\u95EE(403)";
      break;
    case 404:
      message = "\u8BF7\u6C42\u51FA\u9519(404)";
      break;
    case 408:
      message = "\u8BF7\u6C42\u8D85\u65F6(408)";
      break;
    case 500:
      message = "\u670D\u52A1\u5668\u9519\u8BEF(500)";
      break;
    case 501:
      message = "\u670D\u52A1\u672A\u5B9E\u73B0(501)";
      break;
    case 502:
      message = "\u7F51\u7EDC\u9519\u8BEF(502)";
      break;
    case 503:
      message = "\u670D\u52A1\u4E0D\u53EF\u7528(503)";
      break;
    case 504:
      message = "\u7F51\u7EDC\u8D85\u65F6(504)";
      break;
    case 505:
      message = "HTTP\u7248\u672C\u4E0D\u53D7\u652F\u6301(505)";
      break;
    default:
      message = `\u8FDE\u63A5\u51FA\u9519(${status})!`;
  }
  return `${message}\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u6216\u8054\u7CFB\u7BA1\u7406\u5458\uFF01`;
};
exports.showMessage = showMessage;
