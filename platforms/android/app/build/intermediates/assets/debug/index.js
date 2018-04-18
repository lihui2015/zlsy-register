// { "framework": "Vue"}

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by zwwill on 2017/8/27.
 */
var utilFunc = {
    initIconFont: function initIconFont() {
        var domModule = weex.requireModule('dom');
        domModule.addRule('fontFace', {
            'fontFamily': "iconfont",
            'src': "url('http://at.alicdn.com/t/font_623377_khnsonc0xw1jdcxr.ttf')"
        });
    },
    setBundleUrl: function setBundleUrl(url, jsFile) {
        var bundleUrl = url;
        var host = '';
        var path = '';
        var nativeBase = void 0;
        var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
        var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
        if (isAndroidAssets) {
            nativeBase = 'file://assets/dist';
        } else if (isiOSAssets) {
            // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
            // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
            nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
        } else {
            var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
            var matchFirstPath = /\/\/[^\/]+\/([^\s]+)\//.exec(bundleUrl);
            if (matches && matches.length >= 2) {
                host = matches[1];
            }
            if (matchFirstPath && matchFirstPath.length >= 2) {
                path = matchFirstPath[1];
            }
            nativeBase = 'http://' + host + '/';
        }
        var h5Base = './index.html?page=';
        // in Native
        var base = nativeBase;
        if (typeof navigator !== 'undefined' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko')) {
            // check if in weexpack project
            if (path === 'web' || path === 'dist') {
                base = h5Base + '/dist/';
            } else {
                base = h5Base + '';
            }
        } else {
            base = nativeBase + (!!path ? path + '/' : '');
        }

        var newUrl = base + jsFile;
        return newUrl;
    },
    getUrlSearch: function getUrlSearch(url, name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = url.slice(url.indexOf('?') + 1).match(reg);
        if (r != null) {
            try {
                return decodeURIComponent(r[2]);
            } catch (_e) {
                return null;
            }
        }
        return null;
    }
};

exports.default = utilFunc;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(23)
)

/* script */
__vue_exports__ = __webpack_require__(24)

/* template */
var __vue_template__ = __webpack_require__(25)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/components/Header2.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-75cce99a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_url_parse__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_url_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_url_parse__);
/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by Tw93 on 17/11/01
 */



const Utils = {
  UrlParser: __WEBPACK_IMPORTED_MODULE_0_url_parse___default.a,
  _typeof (obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },
  isPlainObject (obj) {
    return Utils._typeof(obj) === 'object';
  },
  isString (obj) {
    return typeof (obj) === 'string';
  },
  isNonEmptyArray (obj = []) {
    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
  },
  isObject (item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
  },
  isEmptyObject (obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  decodeIconFont (text) {
    // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
    const regExp = /&#x[a-z|0-9]{4,5};?/g;
    if (regExp.test(text)) {
      return text.replace(new RegExp(regExp, 'g'), function (iconText) {
        const replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
        return String.fromCharCode(replace);
      });
    } else {
      return text;
    }
  },
  mergeDeep (target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();
    if (Utils.isObject(target) && Utils.isObject(source)) {
      for (const key in source) {
        if (Utils.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, {
              [key]: {}
            });
          }
          Utils.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }
    return Utils.mergeDeep(target, ...sources);
  },
  appendProtocol (url) {
    if (/^\/\//.test(url)) {
      const {
        bundleUrl
      } = weex.config;
      return `http${/^https:/.test(bundleUrl) ? 's' : ''}:${url}`;
    }
    return url;
  },
  encodeURLParams (url) {
    const parsedUrl = new __WEBPACK_IMPORTED_MODULE_0_url_parse___default.a(url, true);
    return parsedUrl.toString();
  },
  goToH5Page (jumpUrl, animated = false, callback = null) {
    const Navigator = weex.requireModule('navigator');
    const jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
    const url = Utils.appendProtocol(jumpUrlObj.toString());
    Navigator.push({
      url: Utils.encodeURLParams(url),
      animated: animated.toString()
    }, callback);
  },
  env: {
    isTaobao () {
      const { appName } = weex.config.env;
      return /(tb|taobao|淘宝)/i.test(appName);
    },
    isTrip () {
      const { appName } = weex.config.env;
      return appName === 'LX';
    },
    isBoat () {
      const { appName } = weex.config.env;
      return appName === 'Boat' || appName === 'BoatPlayground';
    },
    isWeb () {
      const { platform } = weex.config.env;
      return typeof (window) === 'object' && platform.toLowerCase() === 'web';
    },
    isIOS () {
      const { platform } = weex.config.env;
      return platform.toLowerCase() === 'ios';
    },
    /**
     * 是否为 iPhone X
     * @returns {boolean}
     */
    isIPhoneX () {
      const { deviceHeight } = weex.config.env;
      if (Utils.env.isWeb()) {
        return typeof window !== undefined && window.screen && window.screen.width && window.screen.height && (parseInt(window.screen.width, 10) === 375) && (parseInt(window.screen.height, 10) === 812);
      }
      return Utils.env.isIOS() && deviceHeight === 2436;
    },
    isAndroid () {
      const { platform } = weex.config.env;
      return platform.toLowerCase() === 'android';
    },
    isAlipay () {
      const { appName } = weex.config.env;
      return appName === 'AP';
    },
    isTmall () {
      const { appName } = weex.config.env;
      return /(tm|tmall|天猫)/i.test(appName);
    },
    isAliWeex () {
      return Utils.env.isTmall() || Utils.env.isTrip() || Utils.env.isTaobao();
    },
    /**
     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
     * @returns {Number}
     */
    getPageHeight () {
      const { env } = weex.config;
      const navHeight = Utils.env.isWeb() ? 0 : (Utils.env.isIPhoneX() ? 176 : 132);
      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
    },
    /**
     * 获取weex屏幕真实的设置高度
     * @returns {Number}
     */
    getScreenHeight () {
      const { env } = weex.config;
      return env.deviceHeight / env.deviceWidth * 750;
    }
  },

  /**
   * 版本号比较
   * @memberOf Utils
   * @param currVer {string}
   * @param promoteVer {string}
   * @returns {boolean}
   * @example
   *
   * const { Utils } = require('@ali/wx-bridge');
   * const { compareVersion } = Utils;
   * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
   */
  compareVersion (currVer = '0.0.0', promoteVer = '0.0.0') {
    if (currVer === promoteVer) return true;
    const currVerArr = currVer.split('.');
    const promoteVerArr = promoteVer.split('.');
    const len = Math.max(currVerArr.length, promoteVerArr.length);
    for (let i = 0; i < len; i++) {
      const proVal = ~~promoteVerArr[i];
      const curVal = ~~currVerArr[i];
      if (proVal < curVal) {
        return true;
      } else if (proVal > curVal) {
        return false;
      }
    }
    return false;
  },
  /**
   * 分割数组
   * @param arr 被分割数组
   * @param size 分割数组的长度
   * @returns {Array}
   */
  arrayChunk (arr = [], size = 4) {
    let groups = [];
    if (arr && arr.length > 0) {
      groups = arr.map((e, i) => {
        return i % size === 0 ? arr.slice(i, i + size) : null;
      }).filter(e => {
        return e;
      });
    }
    return groups;
  },
  truncateString (str, len, hasDot = true) {
    let newLength = 0;
    let newStr = '';
    let singleChar = '';
    const chineseRegex = /[^\x00-\xff]/g;
    const strLength = str.replace(chineseRegex, '**').length;
    for (let i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();
      if (singleChar.match(chineseRegex) !== null) {
        newLength += 2;
      } else {
        newLength++;
      }
      if (newLength > len) {
        break;
      }
      newStr += singleChar;
    }

    if (hasDot && strLength > len) {
      newStr += '...';
    }
    return newStr;
  },
  animation: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param ref
     * @param transform 运动类型
     * @param status
     * @param callback 回调函数
     */
    pageTransitionAnimation (ref, transform, status, callback) {
      const animation = weex.requireModule('animation');
      animation.transition(ref, {
        styles: {
          transform: transform
        },
        duration: status ? 250 : 300, // ms
        timingFunction: status ? 'ease-in' : 'ease-out',
        delay: 0 // ms
      }, function () {
        callback && callback();
      });
    }
  },
  uiStyle: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param animationType 页面转场动画的类型 push，model
     * @param size 分割数组的长度
     * @returns {}
     */
    pageTransitionAnimationStyle (animationType) {
      if (animationType === 'push') {
        return {
          left: '750px',
          top: '0px',
          height: (weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750) + 'px'
        }
      } else if (animationType === 'model') {
        return {
          top: (weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750) + 'px',
          left: '0px',
          height: (weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750) + 'px'
        }
      }
      return {}
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Utils);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(53)
)

/* script */
__vue_exports__ = __webpack_require__(54)

/* template */
var __vue_template__ = __webpack_require__(55)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/components/tabBar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ad6c7dc0"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(26)
)

/* script */
__vue_exports__ = __webpack_require__(27)

/* template */
var __vue_template__ = __webpack_require__(28)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/components/refresh.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6a19682e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__index_vue___default.a; });



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__index_vue___default.a; });



/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isNative = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object';

var isFn = function isFn(fn) {
	return typeof fn === 'function';
};

var isPhone = function isPhone(str) {
	if (typeof str === 'number') {
		str = str.toString();
	} else if (typeof str !== 'string') {
		return false;
	}

	return (/^\+?[\d\-\#\*\.\(\)]+$/.test(str)
	);
};

var isEmail = function isEmail(str) {
	if (typeof str !== 'string') {
		return false;
	}

	return (/^(\w)+([\.\-\_]\w+)*@(\w)+(([\.\-\_]\w+)+)$/.test(str)
	);
};

module.exports = {
	isNative: isNative,
	isFn: isFn,
	isPhone: isPhone,
	isEmail: isEmail
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(29)
)

/* script */
__vue_exports__ = __webpack_require__(30)

/* template */
var __vue_template__ = __webpack_require__(31)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/components/YXSlider.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2cf83242"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(32)
)

/* script */
__vue_exports__ = __webpack_require__(33)

/* template */
var __vue_template__ = __webpack_require__(40)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/components/bookSearch.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7e69575a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(41)
)

/* script */
__vue_exports__ = __webpack_require__(42)

/* template */
var __vue_template__ = __webpack_require__(43)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/components/Block1.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-777bd746"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(44)
)

/* script */
__vue_exports__ = __webpack_require__(45)

/* template */
var __vue_template__ = __webpack_require__(52)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/components/Block2.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7789eec7"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(88)
)

/* script */
__vue_exports__ = __webpack_require__(89)

/* template */
var __vue_template__ = __webpack_require__(90)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/components/Block5.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-77b4354a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(119)
)

/* script */
__vue_exports__ = __webpack_require__(120)

/* template */
var __vue_template__ = __webpack_require__(121)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/views/login.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-318ba491"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global Vue */

/* weex initialized here, please do not move this line */
var router = __webpack_require__(15);
var App = __webpack_require__(205);

// import { sync } from 'vuex-router-sync'

// import * as filters from './filters'
// import mixins from './mixins'

// register global utility filters.
// Object.keys(filters).forEach(key => {
//     Vue.filter(key, filters[key])
// })

var stream = weex.requireModule('stream');
var modal = weex.requireModule('modal');

var mixins = {
    methods: {
        jump: function jump(to) {
            if (this.$router) {
                this.$router.push(to);
            }
        },
        isIpx: function isIpx() {
            return weex && (weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel === 'iPhone10,6');
        },
        testGET: function testGET(api, callback) {
            return stream.fetch({
                method: 'GET',
                type: 'json',
                // url: 'http://172.18.22.119:8081/web/' + api
                url: 'http://192.168.31.197:8081//web/' + api
            }, callback);
        },
        GET: function GET(api, token, callback) {
            var headerObj = {};
            if (token) {
                headerObj["access-token"] = token;
            }
            return new Promise(function (resolve, reject) {
                stream.fetch({
                    method: 'GET',
                    type: 'json',
                    headers: headerObj,
                    url: 'http://zl.senseitgroup.com/app/' + api
                }, function (response) {
                    if (response.status == 200) {
                        resolve(response.data);
                    } else {
                        reject(response);
                    }
                }, function () {});
            }).then(function (data) {
                callback(data);
            }).catch(function (res) {
                modal.toast({
                    message: '获取数据失败，请检查网络后从新尝试',
                    duration: 1
                });
            });
            // return stream.fetch({
            //     method: 'GET',
            //     type: 'json',
            //     headers:{
            //         "access-token": token
            //     },
            //     url: 'http://zl.senseitgroup.com/app/' + api
            // }, callback)
        },
        POST: function POST(api, token, data, callback) {
            var headerObj = {
                "Content-Type": "application/json"
            };
            if (token) {
                headerObj["access-token"] = token;
            }
            return new Promise(function (resolve, reject) {
                stream.fetch({
                    method: 'POST',
                    type: 'json',
                    headers: headerObj,
                    body: data,
                    url: 'http://zl.senseitgroup.com/app/' + api
                }, function (response) {
                    if (response.status == 200) {
                        resolve(response.data);
                    } else {
                        reject(response);
                    }
                }, function () {});
            }).then(function (data) {
                callback(data);
            }).catch(function (res) {
                modal.toast({
                    message: '获取数据失败，请检查网络后从新尝试',
                    duration: 1
                });
            });
        }
    }
};

var storage = weex.requireModule('storage');

function getToken() {
    return new Promise(function (resolve, reject) {
        storage.getItem('token', function (event) {
            var localToken = event.data;
            if (localToken == 'undefined') {
                reject('noToken');
            } else if (localToken != 'undefined') {
                resolve(localToken);
            }
        });
    });
}

function getBanner(localToken) {
    return new Promise(function (resolve, reject) {
        stream.fetch({
            method: 'GET',
            headers: {
                "access-token": localToken
            },
            url: 'http://zl.senseitgroup.com/app/checkToken',
            type: 'json'
        }, function (res) {
            if (res.status == 200) {
                resolve(res);
            } else {
                reject(res);
            }
        }, function () {});
    });
}

var p = new Promise(function (resolve, reject) {
    resolve(123);
});

router.beforeEach(function (to, from, next) {
    if (to.matched.some(function (record) {
        return record.meta.requiresAuth;
    })) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        p.then(getToken).then(getBanner).then(function (res) {
            var result = res.data;
            //console.log(result);
            if (result.code != 200) {
                next({
                    path: '/login',
                    query: { redirect: to.fullPath }
                });
                //reject(result)
            } else if (result.code == 200) {
                //resolve(result)
                next();
            }
        }).catch(function (str) {
            if (str == 'noToken') {
                next({
                    path: '/login',
                    query: { redirect: to.fullPath }
                });
            } else {
                modal.toast({
                    message: '获取数据失败，请检查网络后从新尝试',
                    duration: 1
                });
            }
        });
    } else {
        next(); // 确保一定要调用 next()
    }
});

// register global mixins.
Vue.mixin(mixins);

/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router: router }, App));
router.push('/');

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vueRouter = __webpack_require__(16);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _home = __webpack_require__(17);

var _home2 = _interopRequireDefault(_home);

var _openDoor = __webpack_require__(57);

var _openDoor2 = _interopRequireDefault(_openDoor);

var _sort = __webpack_require__(61);

var _sort2 = _interopRequireDefault(_sort);

var _list = __webpack_require__(65);

var _list2 = _interopRequireDefault(_list);

var _bookDetail = __webpack_require__(69);

var _bookDetail2 = _interopRequireDefault(_bookDetail);

var _activity = __webpack_require__(73);

var _activity2 = _interopRequireDefault(_activity);

var _online = __webpack_require__(81);

var _online2 = _interopRequireDefault(_online);

var _themeDetail = __webpack_require__(96);

var _themeDetail2 = _interopRequireDefault(_themeDetail);

var _offline = __webpack_require__(100);

var _offline2 = _interopRequireDefault(_offline);

var _signUp = __webpack_require__(104);

var _signUp2 = _interopRequireDefault(_signUp);

var _personal = __webpack_require__(108);

var _personal2 = _interopRequireDefault(_personal);

var _comment = __webpack_require__(115);

var _comment2 = _interopRequireDefault(_comment);

var _login = __webpack_require__(13);

var _login2 = _interopRequireDefault(_login);

var _register = __webpack_require__(122);

var _register2 = _interopRequireDefault(_register);

var _forgetPSW = __webpack_require__(130);

var _forgetPSW2 = _interopRequireDefault(_forgetPSW);

var _resetPSW = __webpack_require__(134);

var _resetPSW2 = _interopRequireDefault(_resetPSW);

var _empty = __webpack_require__(138);

var _empty2 = _interopRequireDefault(_empty);

var _postCreate = __webpack_require__(142);

var _postCreate2 = _interopRequireDefault(_postCreate);

var _default = __webpack_require__(176);

var _default2 = _interopRequireDefault(_default);

var _bookshelf = __webpack_require__(189);

var _bookshelf2 = _interopRequireDefault(_bookshelf);

var _mypost = __webpack_require__(193);

var _mypost2 = _interopRequireDefault(_mypost);

var _about = __webpack_require__(197);

var _about2 = _interopRequireDefault(_about);

var _web = __webpack_require__(201);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global Vue */
Vue.use(_vueRouter2.default);

module.exports = new _vueRouter2.default({
  routes: [{
    path: '/',
    name: 'home',
    component: _home2.default,
    // redirect: '/personal',
    meta: { requiresAuth: true }
  }, {
    path: '/home',
    name: 'home',
    component: _home2.default,
    meta: { requiresAuth: true }
  }, {
    path: '/sort',
    name: 'sort',
    component: _sort2.default,
    meta: { requiresAuth: true }
  }, {
    path: '/openDoor',
    name: 'openDoor',
    component: _openDoor2.default
  }, {
    path: '/list/:index/:name',
    name: 'list',
    component: _list2.default,
    meta: { requiresAuth: true }
  }, {
    path: '/bookDetail/:index/:name',
    name: 'bookDetail',
    component: _bookDetail2.default,
    meta: { requiresAuth: true }
  }, {
    path: '/comment/:index',
    name: 'comment',
    component: _comment2.default,
    meta: { requiresAuth: true }
  }, {
    path: '/activity',
    name: 'activity',
    component: _activity2.default,
    meta: { requiresAuth: true }
  }, {
    path: '/online/:index/:name',
    name: 'online',
    component: _online2.default,
    meta: { requiresAuth: true }
  }, {
    path: '/themeDetail/:index',
    name: 'themeDetail',
    component: _themeDetail2.default,
    meta: { requiresAuth: true }
  }, {
    path: '/postCreate/:index',
    name: 'postCreate',
    component: _postCreate2.default,
    meta: { requiresAuth: true }
  }, {
    path: '/offline',
    name: 'offline',
    component: _offline2.default
  }, {
    path: '/signUp',
    name: 'signUp',
    component: _signUp2.default
  }, {
    path: '/personal',
    name: 'personal',
    component: _personal2.default,
    meta: { requiresAuth: true }
  }, {
    path: '/bookshelf',
    name: 'bookshelf',
    component: _bookshelf2.default,
    meta: { requiresAuth: true }
  }, {
    path: '/mypost',
    name: 'mypost',
    component: _mypost2.default,
    meta: { requiresAuth: true }
  }, {
    path: '/about',
    name: 'about',
    component: _about2.default
  }, {
    path: '/web',
    name: 'web',
    component: _web2.default
  }, {
    path: '/login',
    name: 'login',
    component: _login2.default
  }, {
    path: '/register',
    name: 'register',
    component: _register2.default
  }, {
    path: '/forgetPSW',
    name: 'forgetPSW',
    component: _forgetPSW2.default
  }, {
    path: '/resetPSW',
    name: 'resetPSW',
    component: _forgetPSW2.default
  }, {
    path: '/_empty',
    name: 'empty',
    component: _empty2.default
  }]
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (process.env.NODE_ENV !== 'production') {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (process.env.NODE_ENV !== 'production') {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          process.env.NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(18)
)

/* script */
__vue_exports__ = __webpack_require__(19)

/* template */
var __vue_template__ = __webpack_require__(56)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/views/home.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6bfd1ee7"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "main-list": {
    "marginTop": "86",
    "width": "750",
    "marginBottom": "100",
    "backgroundColor": "#ffffff"
  },
  "ml-ipx": {
    "marginTop": "208",
    "marginBottom": "170"
  },
  "cell-tag": {
    "textAlign": "left",
    "backgroundColor": "#009FF0",
    "height": "70",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "tlt": {
    "color": "#ffffff",
    "fontSize": "34"
  },
  "colorWhite": {
    "color": "#ffffff",
    "fontSize": "48",
    "fontWeight": "600"
  },
  "tlt-box": {
    "marginTop": "1",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "box": {
    "flexDirection": "row",
    "flexWrap": "wrap",
    "paddingLeft": "10",
    "paddingRight": "10",
    "paddingTop": "20",
    "width": "750"
  },
  "i-book": {
    "width": "223",
    "paddingTop": "20",
    "paddingBottom": "20",
    "marginRight": "10",
    "marginLeft": "10"
  },
  "bk-img": {
    "height": "291",
    "width": "223",
    "backgroundColor": "#f4f4f4"
  },
  "bk-tlt": {
    "fontSize": "32",
    "color": "#333333",
    "width": "223",
    "marginTop": "16",
    "overflow": "hidden",
    "lines": 1,
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  },
  "bk-count": {
    "display": "block",
    "fontSize": "30",
    "width": "215",
    "marginTop": "8",
    "color": "#7f7f7f",
    "overflow": "hidden",
    "lines": 1,
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  },
  "open-text": {
    "backgroundColor": "#009ffc",
    "fontSize": "32",
    "width": "500",
    "marginLeft": "125",
    "height": "80",
    "lineHeight": "80",
    "textAlign": "center",
    "color": "#ffffff",
    "marginTop": "30"
  }
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _Header = __webpack_require__(1);

var _Header2 = _interopRequireDefault(_Header);

var _refresh = __webpack_require__(4);

var _refresh2 = _interopRequireDefault(_refresh);

var _YXSlider = __webpack_require__(8);

var _YXSlider2 = _interopRequireDefault(_YXSlider);

var _bookSearch = __webpack_require__(9);

var _bookSearch2 = _interopRequireDefault(_bookSearch);

var _Block = __webpack_require__(10);

var _Block2 = _interopRequireDefault(_Block);

var _Block3 = __webpack_require__(11);

var _Block4 = _interopRequireDefault(_Block3);

var _tabBar = __webpack_require__(3);

var _tabBar2 = _interopRequireDefault(_tabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
var navigator = weex.requireModule('navigator');
var storage = weex.requireModule('storage');
exports.default = {
    name: 'home',
    components: {
        'tab-bar': _tabBar2.default,
        'home-header': _Header2.default,
        'refresher': _refresh2.default,
        'yx-slider': _YXSlider2.default,
        'book-search': _bookSearch2.default,
        'block-1': _Block2.default,
        'block-2': _Block4.default
    },
    data: function data() {
        return {
            YXBanners: [],
            borrowRecords: [],
            books: [],
            showLoading: 'hide',
            token: '',
            isand: false,
            current_page: 1,
            total: 1,
            loadinging: false,
            hasNomare: false
        };
    },
    created: function created() {
        var _this = this;

        var _self = this;
        this.isand = _utils2.default.env.isAndroid();
        storage.getItem('token', function (event) {
            _self.token = event.data;

            //banner ajax
            _this.GET('banners/list', _self.token, function (data) {
                if (data.code == 200) {
                    var result = data.result;
                    _this.YXBanners = result;
                } else {
                    // modal.toast({
                    //     message: res.data.code + ":" + _self.token,
                    //     duration: 3
                    // })
                }
            });

            //借阅记录
            // this.testGET('api/home/borrowRecords.json', res => {
            //     let result = res.data.result;
            //     this.borrowRecords = result['borrowRecords'];
            // });

            //图书精选
            _self.getList();
            // this.GET('books/chosen/0', _self.token, res => {
            //     if(res.data.code == 200){
            //         let result = res.data.result;
            //         this.bookList = result;
            //         //this.borrowRecords = result;
            //     }else{
            //         // modal.toast({
            //         //     message: res.data.code + ":" + _self.token,
            //         //     duration: 3
            //         // })
            //     }
            // })
        });
    },

    methods: {
        getList: function getList() {
            var _this2 = this;

            var _self = this;
            // new Promise((resolve, reject) => {
            //     stream.fetch({
            //       method: 'GET',
            //       url: `${baseURL}/${path}.json`,
            //       type: 'json'
            //     }, (response) => {
            //       if (response.status == 200) {
            //         resolve(response.data)
            //       }
            //       else {
            //         reject(response)
            //       }
            //     }, () => {})
            // }).then(function(data){

            // }).catch(funciton(res){

            // })

            this.GET('books/chosen/0?page=' + this.current_page, this.token, function (data) {
                _this2.loadinging = false;
                //console.log('data----->'+data);
                if (data.code == 200) {
                    var result = data.result;
                    //console.log(_self.books)
                    for (var i = 0; i < result.data.length; i++) {
                        //console.log(result.data[i]);
                        _self.books.push(result.data[i]);
                    }
                    _self.total = _self.last_page;
                    if (result.last_page == result.current_page) {
                        //最后一页
                        _self.hasNomare = true;
                    } else if (result.last_page > result.current_page) {
                        //非最后一页
                        _self.current_page = result.current_page + 1;
                    }
                } else {
                    modal.toast({
                        message: data.code,
                        duration: 3
                    });
                }
            });
        },
        onloading: function onloading(event) {
            var _self = this;
            if (_self.hasNomare) {
                modal.toast({ message: '没有更多书籍', duration: 1 });
                return false;
            }
            modal.toast({ message: 'Loading', duration: 1 });
            this.loadinging = true;
            this.getList();
        },
        onTabTo: function onTabTo(_result) {
            var _key = _result.data.key || '';
            this.$router && this.$router.push('/' + _key);
        }
    }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var required = __webpack_require__(21)
  , qs = __webpack_require__(22)
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @api public
 */
function lolcation(loc) {
  loc = loc || global.location || {};

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new URL(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new URL(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @api private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @api private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} location Location defaults for relative paths.
 * @param {Boolean|Function} parser Parser for the query string.
 * @api public
 */
function URL(address, location, parser) {
  if (!(this instanceof URL)) {
    return new URL(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];
    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL}
 * @api public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String}
 * @api public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

URL.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
URL.extractProtocol = extractProtocol;
URL.location = lolcation;
URL.qs = qs;

module.exports = URL;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  //
  // Little nifty parsing hack, leverage the fact that RegExp.exec increments
  // the lastIndex property so we can continue executing this loop until we've
  // parsed all results.
  //
  for (;
    part = parser.exec(query);
    result[decode(part[1])] = decode(part[2])
  );

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [];

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (var key in obj) {
    if (has.call(obj, key)) {
      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "height": "86",
    "paddingTop": "0",
    "backgroundColor": "#009FF0",
    "flexWrap": "nowrap",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "alignItems": "center",
    "borderBottomWidth": "1",
    "borderBottomColor": "#009FF0"
  },
  "w-ipx": {
    "height": "154",
    "paddingTop": "84"
  },
  "tlt": {
    "flex": 1,
    "fontSize": "36",
    "paddingTop": "0",
    "color": "#ffffff",
    "textAlign": "center",
    "lineHeight": "80",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap"
  },
  "left": {
    "height": "80",
    "width": "120",
    "paddingTop": 0,
    "justifyContent": "center"
  },
  "right": {
    "height": "80",
    "width": "120",
    "paddingTop": 0,
    "justifyContent": "center"
  },
  "leftTxt": {
    "fontSize": "46",
    "textAlign": "center",
    "color": "#ffffff"
  },
  "rightTxt": {
    "fontSize": "30",
    "textAlign": "center",
    "color": "#ffffff"
  }
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: ['title', 'leftBtn', 'rightBtn'],
    data: function data() {
        return {};
    },

    methods: {
        goBack: function goBack() {
            this.$router.go(-1);
            // if(this.leftBtn.fun){
            //     this.leftBtn.fun();
            // }else{
            //     this.$router.go(-1)
            // }
        }
    }
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper']
  }, [_c('div', {
    staticClass: ["left"],
    on: {
      "click": _vm.goBack
    }
  }, [(_vm.leftBtn) ? _c('text', {
    staticClass: ["leftTxt", "iconfont"]
  }, [_vm._v("")]) : _vm._e()]), _c('text', {
    staticClass: ["tlt"]
  }, [_vm._v(_vm._s(_vm.title))]), _c('div', {
    staticClass: ["right"]
  }, [(_vm.rightBtn) ? _c('text', {
    staticClass: ["rightTxt"],
    on: {
      "click": _vm.rightBtn.fun
    }
  }, [_vm._v(_vm._s(_vm.rightBtn.name))]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {
  "u-refresh": {
    "height": "50",
    "width": "750",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "justifyContent": "center"
  },
  "loading-bg": {
    "position": "absolute",
    "left": "250",
    "marginTop": "40",
    "width": "250",
    "height": "10"
  },
  "l-txt-box": {
    "height": "16",
    "width": "200",
    "overflow": "hidden"
  },
  "l-txt": {
    "height": "30",
    "width": "30",
    "fontSize": "25",
    "position": "absolute",
    "top": "105",
    "left": "87",
    "color": "#666666"
  }
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
var modal = weex.requireModule('modal');
exports.default = {
    props: [],
    data: function data() {
        return {
            refreshing: false,
            loadingAR: [{ ref: 'lTxt1', p: [-77, -75], delay: 0 }, { ref: 'lTxt2', p: [-47, -81], delay: 50 }, { ref: 'lTxt3', p: [-15, -88], delay: 100 }, { ref: 'lTxt4', p: [12, -90], delay: 150 }, { ref: 'lTxt5', p: [-5, -49], delay: 200 }, { ref: 'lTxt6', p: [25, -55], delay: 250 }, { ref: 'lTxt7', p: [55, -61], delay: 300 }, { ref: 'lTxt8', p: [85, -61], delay: 350 }]
        };
    },

    methods: {
        loadingAni: function loadingAni() {
            for (var i = 0; i < this.loadingAR.length; i++) {
                this.shake(this.$refs[this.loadingAR[i].ref], this.loadingAR[i].p[0], this.loadingAR[i].p[1], 3, 1, 200, this.loadingAR[i].delay);
            }
        },
        loadingAniDown: function loadingAniDown() {
            // for(var i=0;i<this.loadingAR.length;i++){
            //     this.shake(this.$refs[this.loadingAR[i].ref],0,0,0,0,200);
            // }
            this.$emit('loadingDown', {
                status: 'loadingDown'
            });
        },
        shake: function shake(_ref, _x, _y, _k, _d, _duration, _delay) {
            animation.transition(_ref, {
                styles: {
                    transform: 'translate(' + (_x - 0) + 'px,' + (_y - _k * _d) + 'px)'
                },
                duration: _duration | 500, //ms
                timingFunction: 'ease-out',
                delay: _delay | 0 //ms
            }, function () {
                this.refreshing && this.shake(_ref, _x, _y, _k, -1 * _d);
            }.bind(this));
        },
        onrefresh: function onrefresh(event) {
            var _this = this;

            //                console.log('is refreshing')
            //                modal.toast({ message: 'refresh', duration: 1 })

            //this.loadingAni();
            this.refreshing = true;
            setTimeout(function () {
                _this.refreshing = false;
                _this.loadingAniDown();
            }, 100);
        },
        onpullingdown: function onpullingdown(event) {}
    }
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('refresh', {
    staticClass: ["u-refresh"],
    attrs: {
      "display": _vm.refreshing ? 'show' : 'hide'
    },
    on: {
      "refresh": _vm.onrefresh,
      "pullingdown": _vm.onpullingdown
    }
  }, [_c('text', {
    staticClass: ["loading-bg"]
  }), _c('div', {
    staticClass: ["l-txt-box"]
  }, [_c('text', {
    ref: "lTxt1",
    staticClass: ["l-txt", "l-txt-1"]
  }, [_vm._v("好")]), _c('text', {
    ref: "lTxt2",
    staticClass: ["l-txt", "l-txt-2"]
  }, [_vm._v("的")]), _c('text', {
    ref: "lTxt3",
    staticClass: ["l-txt", "l-txt-3"]
  }, [_vm._v("生")]), _c('text', {
    ref: "lTxt4",
    staticClass: ["l-txt", "l-txt-4"]
  }, [_vm._v("活")]), _c('text', {
    ref: "lTxt5",
    staticClass: ["l-txt", "l-txt-5"]
  }, [_vm._v("没")]), _c('text', {
    ref: "lTxt6",
    staticClass: ["l-txt", "l-txt-6"]
  }, [_vm._v("那")]), _c('text', {
    ref: "lTxt7",
    staticClass: ["l-txt", "l-txt-7"]
  }, [_vm._v("么")]), _c('text', {
    ref: "lTxt8",
    staticClass: ["l-txt", "l-txt-8"]
  }, [_vm._v("贵")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "image": {
    "width": "750",
    "height": "430"
  },
  "slider": {
    "width": "750",
    "height": "430"
  },
  "frame": {
    "width": "750",
    "height": "430",
    "position": "relative"
  },
  "indicator": {
    "width": "750",
    "height": "40",
    "itemColor": "#FFFFFF",
    "itemSelectedColor": "#b4282d",
    "itemSize": "12",
    "position": "absolute",
    "bottom": "10",
    "right": "0"
  },
  "text-box": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "backgroundColor": "rgba(0,0,0,0.3)"
  },
  "image-title": {
    "position": "absolute",
    "width": "750",
    "paddingRight": "20",
    "paddingLeft": "20",
    "textAlign": "center",
    "top": "200",
    "left": 0,
    "color": "#ffffff",
    "fontWeight": "bold",
    "fontSize": "38"
  }
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: ["imageList"],
    data: function data() {
        return {};
    },

    methods: {
        onchange: function onchange(event) {},
        jumpTo: function jumpTo(index) {
            var banner = this.imageList[index];
            if (banner.activity) {
                var id = banner.activity_id,
                    title = banner.activity.title;
                this.$router.push('/online/' + id + '/' + title);
            } else {
                return false;
            }
        }
    }
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('slider', {
    staticClass: ["slider"],
    attrs: {
      "autoPlay": "true",
      "interval": "5000",
      "infinite": "false"
    },
    on: {
      "change": _vm.onchange
    }
  }, [_vm._l((_vm.imageList), function(img, index) {
    return _c('div', {
      staticClass: ["frame"],
      on: {
        "click": function($event) {
          _vm.jumpTo(index)
        }
      }
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "resize": "cover",
        "src": img.src
      }
    }), _c('div', {
      staticClass: ["text-box"]
    }, [_c('text', {
      staticClass: ["image-title"]
    }, [_vm._v(_vm._s(img.title))])])])
  }), _c('indicator', {
    staticClass: ["indicator"]
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {
  "cell-tag": {
    "textAlign": "left",
    "backgroundColor": "#009FF0",
    "height": "70",
    "justifyContent": "center",
    "fontWeight": "600",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "bookSearch": {
    "marginTop": "20"
  },
  "tag-text": {
    "fontSize": "36",
    "color": "#ffffff",
    "fontWeight": "600"
  },
  "searchBox": {
    "paddingTop": "20",
    "paddingBottom": "20"
  }
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcSearchbar = __webpack_require__(34);

var _wxcSearchbar2 = _interopRequireDefault(_wxcSearchbar);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
exports.default = {
    components: { WxcSearchbar: _wxcSearchbar2.default },
    data: function data() {
        return {
            value: ''
        };
    },
    methods: {
        wxcSearchbarInputOnFocus: function wxcSearchbarInputOnFocus() {},
        wxcSearchbarInputOnBlur: function wxcSearchbarInputOnBlur() {},
        wxcSearchbarInputReturned: function wxcSearchbarInputReturned() {},
        wxcSearchbarCloseClicked: function wxcSearchbarCloseClicked() {},
        wxcSearchbarInputOnInput: function wxcSearchbarInputOnInput(e) {
            this.value = e.value;
        },
        wxcSearchbarCancelClicked: function wxcSearchbarCancelClicked() {},
        wxcSearchbarInputDisabledClicked: function wxcSearchbarInputDisabledClicked() {},
        wxcSearchbarDepChooseClicked: function wxcSearchbarDepChooseClicked() {}
    }
};

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__index_vue___default.a; });



/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(36)
)

/* script */
__vue_exports__ = __webpack_require__(37)

/* template */
var __vue_template__ = __webpack_require__(39)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/node_modules/weex-ui/packages/wxc-searchbar/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-481982bb"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-search-bar": {
    "paddingLeft": "20",
    "paddingRight": "20",
    "backgroundColor": "#ffffff",
    "width": "750",
    "height": "84",
    "flexDirection": "row"
  },
  "wxc-search-bar-yellow": {
    "backgroundColor": "#ffc900"
  },
  "search-bar-input": {
    "position": "absolute",
    "top": "10",
    "paddingTop": 0,
    "paddingBottom": 0,
    "paddingRight": "40",
    "paddingLeft": "60",
    "fontSize": "26",
    "width": "624",
    "height": "64",
    "lineHeight": "64",
    "backgroundColor": "#E5E5E5",
    "borderRadius": "6"
  },
  "search-bar-input-yellow": {
    "backgroundColor": "#fff6d6"
  },
  "search-bar-icon": {
    "position": "absolute",
    "width": "30",
    "height": "30",
    "left": "34",
    "top": "28"
  },
  "search-bar-close": {
    "position": "absolute",
    "width": "30",
    "height": "30",
    "right": "120",
    "top": "28"
  },
  "search-bar-button": {
    "width": "94",
    "height": "36",
    "fontSize": "30",
    "textAlign": "center",
    "backgroundColor": "#ffffff",
    "marginTop": "16",
    "marginRight": 0,
    "color": "#333333",
    "position": "absolute",
    "right": "8",
    "top": "9"
  },
  "search-bar-button-yellow": {
    "backgroundColor": "#FFC900"
  },
  "input-has-dep": {
    "paddingLeft": "240",
    "width": "710"
  },
  "bar-dep": {
    "width": "170",
    "paddingRight": "12",
    "paddingLeft": "12",
    "height": "42",
    "alignItems": "center",
    "flexDirection": "row",
    "position": "absolute",
    "left": "24",
    "top": "22",
    "borderRightStyle": "solid",
    "borderRightWidth": "1",
    "borderRightColor": "#C7C7C7"
  },
  "bar-dep-yellow": {
    "borderRightColor": "#C7C7C7"
  },
  "dep-text": {
    "flex": 1,
    "textAlign": "center",
    "fontSize": "26",
    "color": "#666666",
    "marginRight": "6",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "dep-arrow": {
    "width": "24",
    "height": "24"
  },
  "icon-has-dep": {
    "left": "214"
  },
  "disabled-input": {
    "width": "750",
    "height": "64",
    "position": "absolute",
    "left": 0,
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "has-dep-disabled": {
    "width": "550",
    "left": "200"
  }
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = __webpack_require__(38);

exports.default = {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    alwaysShowCancel: {
      type: Boolean,
      default: false
    },
    inputType: {
      type: String,
      default: 'text'
    },
    mod: {
      type: String,
      default: 'default'
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'gray'
    },
    barStyle: {
      type: Object,
      default: function _default() {}
    },
    defaultValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '搜索'
    },
    cancelLabel: {
      type: String,
      default: '取消 '
    },
    depName: {
      type: String,
      default: '杭州'
    }
  },
  computed: {
    needShowCancel: function needShowCancel() {
      return this.alwaysShowCancel || this.showCancel;
    }
  },
  data: function data() {
    return {
      inputIcon: _type.INPUT_ICON,
      closeIcon: _type.CLOSE_ICON,
      arrowIcon: _type.ARROW_ICON,
      showCancel: false,
      showClose: false,
      value: ''
    };
  },
  created: function created() {
    this.defaultValue && (this.value = this.defaultValue);
    if (this.disabled) {
      this.showCancel = false;
      this.showClose = false;
    }
  },

  methods: {
    onBlur: function onBlur() {
      var self = this;
      setTimeout(function () {
        self.showCancel = false;
        self.detectShowClose();
        self.$emit('wxcSearchbarInputOnBlur', { value: self.value });
      }, 10);
    },
    autoBlur: function autoBlur() {
      this.$refs['search-input'].blur();
    },
    onFocus: function onFocus() {
      if (this.isDisabled) {
        return;
      }
      this.showCancel = true;
      this.detectShowClose();
      this.$emit('wxcSearchbarInputOnFocus', { value: this.value });
    },
    closeClicked: function closeClicked() {
      this.value = '';
      this.showCancel && (this.showCancel = false);
      this.showClose && (this.showClose = false);
      this.$emit('wxcSearchbarCloseClicked', { value: this.value });
      this.$emit('wxcSearchbarInputOnInput', { value: this.value });
    },
    onInput: function onInput(e) {
      this.value = e.value;
      this.showCancel = true;
      this.detectShowClose();
      this.$emit('wxcSearchbarInputOnInput', { value: this.value });
    },
    onSubmit: function onSubmit(e) {
      this.onBlur();
      this.value = e.value;
      this.showCancel = true;
      this.detectShowClose();
      this.$emit('wxcSearchbarInputReturned', { value: this.value });
    },
    cancelClicked: function cancelClicked() {
      this.showCancel && (this.showCancel = false);
      this.showClose && (this.showClose = false);
      this.$emit('wxcSearchbarCancelClicked', { value: this.value });
    },
    detectShowClose: function detectShowClose() {
      this.showClose = this.value.length > 0 && this.showCancel;
    },
    depClicked: function depClicked() {
      this.$emit('wxcSearchbarDepChooseClicked', {});
    },
    inputDisabledClicked: function inputDisabledClicked() {
      this.$emit('wxcSearchbarInputDisabledClicked', {});
    },
    setValue: function setValue(value) {
      this.value = value;
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by Tw93 on 2016/10/31.
 */

const INPUT_ICON = "https://gw.alicdn.com/tfs/TB1FZB.pwMPMeJjy1XdXXasrXXa-30-30.png";
/* harmony export (immutable) */ __webpack_exports__["INPUT_ICON"] = INPUT_ICON;

const CLOSE_ICON = "https://gw.alicdn.com/tfs/TB1sZB.pwMPMeJjy1XdXXasrXXa-24-24.png";
/* harmony export (immutable) */ __webpack_exports__["CLOSE_ICON"] = CLOSE_ICON;

const ARROW_ICON = "https://gw.alicdn.com/tfs/TB1vZB.pwMPMeJjy1XdXXasrXXa-24-24.png";
/* harmony export (immutable) */ __webpack_exports__["ARROW_ICON"] = ARROW_ICON;




/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.mod === 'default') ? _c('div', {
    class: ['wxc-search-bar', 'wxc-search-bar-' + _vm.theme],
    style: _vm.barStyle
  }, [_c('input', {
    ref: "search-input",
    class: ['search-bar-input', 'search-bar-input-' + _vm.theme],
    style: {
      width: _vm.needShowCancel ? '624px' : '710px'
    },
    attrs: {
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "value": _vm.value,
      "type": _vm.inputType,
      "placeholder": _vm.placeholder
    },
    on: {
      "blur": _vm.onBlur,
      "focus": _vm.onFocus,
      "input": _vm.onInput,
      "return": _vm.onSubmit
    }
  }), (_vm.disabled) ? _c('div', {
    staticClass: ["disabled-input"],
    on: {
      "click": _vm.inputDisabledClicked
    }
  }) : _vm._e(), _c('image', {
    staticClass: ["search-bar-icon"],
    attrs: {
      "ariaHidden": true,
      "src": _vm.inputIcon
    }
  }), (_vm.showClose) ? _c('image', {
    staticClass: ["search-bar-close"],
    attrs: {
      "ariaHidden": true,
      "src": _vm.closeIcon
    },
    on: {
      "click": _vm.closeClicked
    }
  }) : _vm._e(), (_vm.needShowCancel) ? _c('text', {
    class: ['search-bar-button', 'search-bar-button-' + _vm.theme],
    on: {
      "click": _vm.cancelClicked
    }
  }, [_vm._v(_vm._s(_vm.cancelLabel))]) : _vm._e()]) : _vm._e(), (_vm.mod === 'hasDep') ? _c('div', {
    class: ['wxc-search-bar', 'wxc-search-bar-' + _vm.theme],
    style: _vm.barStyle
  }, [_c('input', {
    class: ['search-bar-input', 'input-has-dep', 'search-bar-input-' + _vm.theme],
    attrs: {
      "disabled": _vm.disabled,
      "autofocus": _vm.autofocus,
      "value": _vm.value,
      "type": _vm.inputType,
      "placeholder": _vm.placeholder
    },
    on: {
      "blur": _vm.onBlur,
      "focus": _vm.onFocus,
      "input": _vm.onInput,
      "return": _vm.onSubmit
    }
  }), (_vm.disabled) ? _c('div', {
    staticClass: ["disabled-input", "has-dep-disabled"],
    on: {
      "click": _vm.inputDisabledClicked
    }
  }) : _vm._e(), _c('div', {
    class: ['bar-dep', '.bar-dep-' + _vm.theme],
    on: {
      "click": _vm.depClicked
    }
  }, [_c('text', {
    staticClass: ["dep-text"]
  }, [_vm._v(_vm._s(_vm.depName))]), _c('image', {
    staticClass: ["dep-arrow"],
    attrs: {
      "src": _vm.arrowIcon,
      "ariaHidden": true
    }
  })]), _c('image', {
    staticClass: ["search-bar-icon", "icon-has-dep"],
    attrs: {
      "ariaHidden": true,
      "src": _vm.inputIcon
    }
  })]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["bookSearchBox"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["searchBox"]
  }, [_c('wxc-searchbar', {
    ref: "wxc-searchbar",
    on: {
      "wxcSearchbarCancelClicked": _vm.wxcSearchbarCancelClicked,
      "wxcSearchbarInputReturned": _vm.wxcSearchbarInputReturned,
      "wxcSearchbarInputOnInput": _vm.wxcSearchbarInputOnInput,
      "wxcSearchbarCloseClicked": _vm.wxcSearchbarCloseClicked,
      "wxcSearchbarInputOnFocus": _vm.wxcSearchbarInputOnFocus,
      "wxcSearchbarInputOnBlur": _vm.wxcSearchbarInputOnBlur
    }
  })], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["cell-tag", "bookSearch"]
  }, [_c('text', {
    staticClass: ["tag-text"]
  }, [_vm._v("馆藏查询")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont",
    "fontSize": "60",
    "textAlign": "center"
  },
  "cell-tag": {
    "backgroundColor": "#009FF0",
    "height": "70",
    "justifyContent": "center",
    "fontWeight": "600",
    "textAlign": "left",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "recordsTag": {
    "marginTop": "20"
  },
  "tag-text": {
    "fontSize": "36",
    "color": "#ffffff",
    "fontWeight": "600"
  },
  "borrow-records": {
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "paddingTop": "40",
    "justifyContent": "space-between",
    "alignItems": "flex-end",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "records-text": {
    "marginTop": "10",
    "fontSize": "30"
  },
  "records-box": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "justifyContent": "space-between",
    "width": "565"
  },
  "i-name": {
    "width": "120",
    "position": "relative",
    "color": "#333333",
    "fontSize": "32",
    "marginTop": "10",
    "textAlign": "center",
    "overflow": "hidden",
    "lines": 1,
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  },
  "i-image": {
    "width": "120",
    "height": "165"
  }
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
exports.default = {
    props: ["items"],
    data: function data() {
        return {};
    },

    methods: {}
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["borrow-records"]
  }, [_c('div', {
    staticClass: ["records-box"]
  }, _vm._l((_vm.items), function(i) {
    return _c('div', {
      staticClass: ["box-item"]
    }, [_c('image', {
      staticClass: ["i-image"],
      attrs: {
        "resize": "cover",
        "src": i.full_cover
      }
    }), _c('text', {
      staticClass: ["i-name"]
    }, [_vm._v(_vm._s(i.book_name))])])
  })), _vm._m(1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["cell-tag", "recordsTag"]
  }, [_c('text', {
    staticClass: ["tag-text"]
  }, [_vm._v("借阅记录")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["recordsMore"]
  }, [_c('text', {
    staticClass: ["iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["records-text", "recordsMore-text"]
  }, [_vm._v("查看更多")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "cell-tag": {
    "textAlign": "left",
    "backgroundColor": "#009FF0",
    "height": "70",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "tlt": {
    "color": "#ffffff",
    "fontSize": "34"
  },
  "colorWhite": {
    "color": "#ffffff",
    "fontSize": "48",
    "fontWeight": "600"
  },
  "wrapper": {
    "marginTop": "0",
    "paddingBottom": "20"
  },
  "tlt-box": {
    "marginTop": "1",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "box": {
    "flexDirection": "row",
    "flexWrap": "wrap",
    "paddingLeft": "10",
    "paddingRight": "10",
    "paddingTop": "20",
    "width": "750"
  },
  "i-book": {
    "width": "223",
    "paddingTop": "20",
    "paddingBottom": "20",
    "marginRight": "10",
    "marginLeft": "10"
  },
  "bk-img": {
    "height": "291",
    "width": "223",
    "backgroundColor": "#f4f4f4"
  },
  "bk-tlt": {
    "fontSize": "32",
    "color": "#333333",
    "width": "223",
    "marginTop": "16",
    "overflow": "hidden",
    "lines": 1,
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  },
  "bk-count": {
    "display": "block",
    "fontSize": "30",
    "width": "215",
    "marginTop": "8",
    "color": "#7f7f7f",
    "overflow": "hidden",
    "lines": 1,
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  }
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcIcon = __webpack_require__(46);

var _wxcIcon2 = _interopRequireDefault(_wxcIcon);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navigator = weex.requireModule('navigator'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: ["books"],
    components: { WxcIcon: _wxcIcon2.default },
    data: function data() {
        return {};
    },

    methods: {}
};

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__index_vue___default.a; });



/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(48)
)

/* script */
__vue_exports__ = __webpack_require__(49)

/* template */
var __vue_template__ = __webpack_require__(51)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/node_modules/weex-ui/packages/wxc-icon/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0675eb3f"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = {
  "icon-font": {
    "color": "#666666"
  }
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//

var _type = __webpack_require__(50);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dom = weex.requireModule('dom');

exports.default = {
  props: {
    name: {
      default: 'success',
      type: String
    },
    size: {
      default: 'small',
      type: String
    },
    iconStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      Icon: _type2.default
    };
  },
  beforeCreate: function beforeCreate() {
    dom.addRule('fontFace', {
      'fontFamily': "weexUiIconFont",
      'src': "url('//at.alicdn.com/t/font_520368_r89ekv69euahsemi.ttf')"
    });
  },

  computed: {
    mergeStyle: function mergeStyle() {
      var iconStyle = this.iconStyle,
          size = this.size;

      var fontSize = '48px';
      switch (size) {
        case 'xs':
          fontSize = '24px';
          break;
        case 'small':
          fontSize = '48px';
          break;
        case 'medium':
          fontSize = '72px';
          break;
        case 'big':
          fontSize = '128px';
          break;
        default:
          fontSize = '48px';
      }
      return _extends({
        fontFamily: 'weexUiIconFont',
        fontSize: fontSize
      }, iconStyle);
    }
  },
  methods: {
    itemClicked: function itemClicked(name) {
      this.$emit('wxcIconClicked', {
        name: name
      });
    }
  }
};

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
  less: '\ue6a5',
  'more_unfold': '\ue6a6',
  back: '\ue697',
  more: '\ue6a7',
  add: '\ue6b9',
  subtract: '\ue6fe',
  close: '\ue69a',
  cry: '\ue69c',
  delete: '\ue69d',
  help: '\ue6a3',
  refresh: '\ue6aa',
  search: '\ue6ac',
  success: '\ue6b1',
  warning: '\ue6b6',
  wrong: '\ue6b7',
  clock: '\ue6bb',
  scanning: '\ue6ec',
  filter: '\ue6f1',
  map: '\ue715',
  play: '\ue719'
});


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticClass: ["icon-font"],
    style: _vm.mergeStyle,
    on: {
      "click": function($event) {
        _vm.itemClicked(_vm.name)
      }
    }
  }, [_vm._v(_vm._s(_vm.Icon[_vm.name]))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["tlt-box", "cell-tag"]
  }, [_c('text', {
    staticClass: ["tlt"],
    on: {
      "click": function($event) {
        _vm.jump('/list/0/图书精选')
      }
    }
  }, [_vm._v("图书精选")]), _c('text', {
    staticClass: ["colorWhite", "iconfont"],
    on: {
      "click": function($event) {
        _vm.jump('/list/0/图书精选')
      }
    }
  }, [_vm._v("")])]), _c('div', {
    staticClass: ["box"]
  }, _vm._l((_vm.books), function(i) {
    return _c('div', {
      staticClass: ["i-book"]
    }, [_c('image', {
      staticClass: ["bk-img"],
      attrs: {
        "resize": "cover",
        "src": i.full_cover
      },
      on: {
        "click": function($event) {
          _vm.jump('/bookDetail/' + i.id + '/' + i.book_name)
        }
      }
    }), _c('text', {
      staticClass: ["bk-tlt"],
      on: {
        "click": function($event) {
          _vm.jump('/bookDetail/' + i.id + '/' + i.book_name)
        }
      }
    }, [_vm._v(_vm._s(i.book_name))]), _c('text', {
      staticClass: ["bk-count"]
    }, [_vm._v(_vm._s(i.read_count) + "人在阅读")])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "position": "fixed",
    "bottom": "0",
    "left": 0,
    "right": 0,
    "height": "100",
    "width": "750",
    "flexWrap": "nowrap",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "borderTopWidth": "1",
    "borderTopColor": "#d9d9d9",
    "backgroundColor": "#f0f0f0"
  },
  "huawei-wrapper": {
    "bottom": "0"
  },
  "w-ipx": {
    "height": "150"
  },
  "bar-item": {
    "flex": 1
  },
  "bar-txt": {
    "color": "#8d8d8d",
    "textAlign": "center",
    "fontSize": "28",
    "paddingTop": "3",
    "lineHeight": "30"
  },
  "bar-ic": {
    "color": "#8d8d8d",
    "textAlign": "center",
    "paddingTop": "14",
    "fontSize": "56",
    "lineHeight": "42"
  },
  "bar-active": {
    "color": "#009FF0"
  },
  "i-notice": {
    "position": "absolute",
    "top": "10",
    "right": "55",
    "height": "30",
    "width": "30",
    "borderRadius": 100,
    "fontSize": "26",
    "lineHeight": "30",
    "textAlign": "center",
    "color": "#ffffff",
    "backgroundColor": "#ff0000"
  },
  "notice-dot": {
    "position": "absolute",
    "top": "15",
    "right": "73",
    "height": "15",
    "width": "15",
    "borderRadius": 100,
    "backgroundColor": "#ff0000"
  }
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: ['router'],
    computed: {},
    data: function data() {
        return {
            pIndexKey: this.router,
            isand: false,
            isHuaWei: false
        };
    },
    created: function created() {
        this.isand = _utils2.default.env.isAndroid();
        var _self = this;
        weex.requireModule('close').getPhoneAppBar(function (map) {

            _self.isHuaWei = map.bar;
        });
    },

    methods: {
        isActive: function isActive(_c) {
            return this.pIndexKey === _c ? 'bar-active' : '';
        },
        tabTo: function tabTo(_key) {
            this.pIndexKey = _key;
            this.$router.push('/' + _key);
        }
    }
};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '', _vm.isand ? 'android-wrapper' : '', _vm.isHuaWei ? 'huawei-wrapper' : '']
  }, [_c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.tabTo('home')
      }
    }
  }, [(this.isActive('home')) ? _c('text', {
    staticClass: ["bar-ic", "iconfont", "icon-home", "bar-active"]
  }, [_vm._v("")]) : _c('text', {
    staticClass: ["bar-ic", "iconfont", "icon-home"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["bar-txt"],
    class: [this.isActive('home')]
  }, [_vm._v("首页")])]), _c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.tabTo('activity')
      }
    }
  }, [(this.pIndexKey == 'activity') ? _c('text', {
    staticClass: ["bar-ic", "iconfont", "icon-activity", "bar-active"]
  }, [_vm._v("")]) : _c('text', {
    staticClass: ["bar-ic", "iconfont", "icon-activity"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["bar-txt"],
    class: [this.pIndexKey == 'activity' ? 'bar-active' : '']
  }, [_vm._v("活动")])]), _c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.tabTo('personal')
      }
    }
  }, [(this.pIndexKey == 'personal') ? _c('text', {
    staticClass: ["bar-ic", "iconfont", "icon-person", "bar-active"]
  }, [_vm._v("")]) : _c('text', {
    staticClass: ["bar-ic", "iconfont", "icon-person"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["bar-txt"],
    class: [this.isActive('personal')]
  }, [_vm._v("我的")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('home-header', {
    attrs: {
      "title": "阅读活动"
    }
  }), _c('scroller', {
    class: ['main-list', _vm.isand ? 'android-main-list' : ''],
    attrs: {
      "offsetAccuracy": "300px",
      "loadmoreoffset": "200"
    },
    on: {
      "loadmore": _vm.onloading
    }
  }, [_c('div', {
    staticClass: ["cell-button"]
  }, [_c('yx-slider', {
    attrs: {
      "imageList": _vm.YXBanners
    }
  })], 1), _c('div', {
    staticClass: ["cell-button"]
  }, [_c('div', {
    staticClass: ["tlt-box", "cell-tag"]
  }, [_c('text', {
    staticClass: ["tlt"],
    on: {
      "click": function($event) {
        _vm.jump('/list/0/图书精选')
      }
    }
  }, [_vm._v("图书精选")]), _c('text', {
    staticClass: ["colorWhite", "iconfont"],
    on: {
      "click": function($event) {
        _vm.jump('/list/0/图书精选')
      }
    }
  }, [_vm._v("")])]), _c('div', {
    staticClass: ["box"]
  }, _vm._l((_vm.books), function(i) {
    return _c('div', {
      staticClass: ["i-book"]
    }, [_c('image', {
      staticClass: ["bk-img"],
      attrs: {
        "resize": "cover",
        "src": i.full_cover
      },
      on: {
        "click": function($event) {
          _vm.jump('/bookDetail/' + i.id + '/' + i.book_name)
        }
      }
    }), _c('text', {
      staticClass: ["bk-tlt"],
      on: {
        "click": function($event) {
          _vm.jump('/bookDetail/' + i.id + '/' + i.book_name)
        }
      }
    }, [_vm._v(_vm._s(i.book_name))]), _c('text', {
      staticClass: ["bk-count"]
    }, [_vm._v(_vm._s(i.read_count) + "人在阅读")])])
  }))])]), _c('tab-bar', {
    attrs: {
      "router": "home"
    },
    on: {
      "tabTo": _vm.onTabTo
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(58)
)

/* script */
__vue_exports__ = __webpack_require__(59)

/* template */
var __vue_template__ = __webpack_require__(60)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/views/openDoor.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ad1e12c0"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#ffffff"
  },
  "w-ipx": {
    "marginTop": "40",
    "marginBottom": "50"
  },
  "main-list": {
    "marginTop": "86",
    "marginBottom": "100",
    "backgroundColor": "#ffffff",
    "width": "750"
  },
  "android-main-list": {
    "marginBottom": "150"
  },
  "img-box": {
    "marginTop": "30",
    "marginLeft": "20",
    "marginRight": "20",
    "flexDirection": "row",
    "width": "750",
    "flexWrap": "wrap"
  },
  "img-item": {
    "width": "355",
    "paddingLeft": "10",
    "paddingRight": "10",
    "marginTop": "20",
    "borderWidth": "1",
    "borderColor": "#ffffff",
    "paddingTop": "20",
    "paddingBottom": "20"
  },
  "item-even": {
    "borderRightWidth": "1"
  },
  "item-odd": {
    "borderLeftWidth": "0"
  },
  "img": {
    "width": "335",
    "height": "426"
  },
  "show": {
    "opacity": 1
  },
  "hide": {
    "opacity": 0
  }
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _refresh = __webpack_require__(4);

var _refresh2 = _interopRequireDefault(_refresh);

var _Header = __webpack_require__(1);

var _Header2 = _interopRequireDefault(_Header);

var _tabBar = __webpack_require__(3);

var _tabBar2 = _interopRequireDefault(_tabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
var stream = weex.requireModule('stream');
exports.default = {
    components: {
        'tab-bar': _tabBar2.default,
        'refresher': _refresh2.default,
        'header2': _Header2.default
    },
    data: function data() {
        return {
            leftButton: {
                name: "<"
            },
            isand: false,
            imgList: ['http://zl.senseitgroup.com/images/book1.jpg', 'http://zl.senseitgroup.com/images/book2.jpg', 'http://zl.senseitgroup.com/images/book3.jpg', 'http://zl.senseitgroup.com/images/book4.jpg']
        };
    },
    created: function created() {
        this.isand = _utils2.default.env.isAndroid();
    },

    methods: {
        open: function open(index) {
            var data = {
                "MachID": "2010079",
                "DoorID": index + 1,
                "ReaderID": "1",
                "OptTime": 10000,
                "CheckStr": "demo"
            };

            new Promise(function (resolve, reject) {
                stream.fetch({
                    method: 'POST',
                    type: 'json',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data),
                    url: 'http://hardware.senseitgroup.com/OpenDoorDemo/'
                }, function (res) {
                    if (res.status == 200) {
                        resolve(res.data);
                    } else {
                        reject(res);
                    }
                }, function () {});
            }).then(function (data) {
                var msg = data.msg;
                if (msg == '开门成功') {
                    var num = data.params.DoorID;
                    modal.toast({
                        message: num + '号柜门已打开，请取走您的书籍',
                        duration: 1
                    });
                }
            }).catch(function () {
                modal.toast({
                    message: '请求数据出错，检查网络后请重试',
                    duration: 1
                });
            });

            // stream.fetch({
            //     method: 'POST',
            //     type: 'json',
            //     headers:{
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify(data),
            //     url: 'http://hardware.senseitgroup.com/OpenDoorDemo/'
            // }, res => {
            //     //console.log(res.data);
            //     var msg = res.data.msg;
            //     if(msg == '开门成功'){
            //         var num = res.data.params.DoorID;
            //         modal.toast({
            //             message: num + '号柜门已打开，请取走您的书籍',
            //             duration: 1
            //         })
            //     }

            // })
        }
    }
};

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('header2', {
    attrs: {
      "title": "鸟巢开柜",
      "leftBtn": _vm.leftButton
    }
  }), _c('scroller', {
    staticClass: ["main-list"],
    class: [_vm.isand ? 'android-main-list' : '']
  }, [_c('refresher'), _c('div', {
    staticClass: ["img-box"]
  }, _vm._l((_vm.imgList), function(img, index) {
    return _c('div', {
      staticClass: ["img-item"],
      class: [index % 2 == 0 ? 'item-even' : 'item-odd'],
      on: {
        "click": function($event) {
          _vm.open(index)
        }
      }
    }, [_c('image', {
      staticClass: ["img"],
      attrs: {
        "src": img,
        "resize": "contain"
      }
    })])
  }))], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(62)
)

/* script */
__vue_exports__ = __webpack_require__(63)

/* template */
var __vue_template__ = __webpack_require__(64)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/views/sort.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-27f4afb4"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#f4f4f4",
    "display": "flex",
    "flexWrap": "nowrap",
    "flexDirection": "row",
    "position": "absolute",
    "top": "0",
    "bottom": "0",
    "left": "0",
    "right": "0"
  },
  "w-ipx": {
    "marginTop": "40",
    "marginBottom": "50"
  },
  "class-list": {
    "width": "162",
    "marginTop": "86",
    "marginBottom": "100",
    "paddingTop": "20",
    "borderRightWidth": "1",
    "borderRightColor": "#d9d9d9",
    "backgroundColor": "#ffffff"
  },
  "class-txt": {
    "fontSize": "32",
    "marginTop": "22",
    "marginBottom": "26",
    "marginLeft": "10",
    "marginRight": "10",
    "textAlign": "center",
    "color": "#333333"
  },
  "active": {
    "color": "#009FF0",
    "borderLeftWidth": "2",
    "borderLeftColor": "#009FF0"
  },
  "main-list": {
    "flex": 1,
    "display": "flex",
    "flexDirection": "column",
    "flexWrap": "nowrap",
    "marginTop": "86",
    "marginBottom": "100",
    "backgroundColor": "#ffffff",
    "width": "588"
  },
  "ad-img": {
    "width": "532",
    "height": "194",
    "borderRadius": "6",
    "marginTop": "28",
    "marginBottom": "28",
    "marginLeft": "28",
    "marginRight": "28"
  },
  "sub-tlt": {
    "textAlign": "center",
    "fontSize": "34",
    "color": "#333333",
    "marginTop": "10",
    "marginBottom": "30"
  },
  "sub-box": {
    "paddingLeft": "26",
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "sub-i": {
    "width": "178",
    "height": "200",
    "alignItems": "center"
  },
  "i-img": {
    "width": "108",
    "marginLeft": "14",
    "marginRight": "14",
    "height": "108",
    "borderRadius": "108"
  },
  "i-name": {
    "fontSize": "32",
    "marginTop": "10",
    "textAlign": "center"
  }
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _refresh = __webpack_require__(4);

var _refresh2 = _interopRequireDefault(_refresh);

var _Header = __webpack_require__(1);

var _Header2 = _interopRequireDefault(_Header);

var _tabBar = __webpack_require__(3);

var _tabBar2 = _interopRequireDefault(_tabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
var storage = weex.requireModule('storage');
var modal = weex.requireModule('modal');
exports.default = {
    components: {
        'tab-bar': _tabBar2.default,
        'refresher': _refresh2.default,
        'header2': _Header2.default
    },
    data: function data() {
        return {
            token: '',
            subID: 0,
            classes: [],
            subclasses: [],
            subTitle: '',
            leftButton: {
                name: '<'
            }
        };
    },
    created: function created() {
        var _this = this;

        storage.getItem('token', function (event) {
            _this.token = event.data;
            _this.GET('books/categories/list/0', _this.token, function (res) {
                if (res.data.code == 200) {
                    var result = res.data.result;
                    _this.classes = result;
                    _this.subTitle = _this.classes[0].name;
                    _this.subID = _this.classes[0].id;
                    _this.getSubClass();
                } else {
                    modal.toast({
                        message: res.data.code + ":" + _self.token,
                        duration: 3
                    });
                }
            });
        });
    },

    methods: {
        isActive: function isActive(_str) {
            return _str == this.subTitle ? 'active' : '';
        },
        jumpWeb: function jumpWeb(_url) {
            var url = this.$getConfig().bundleUrl;
            navigator.push({
                url: _util2.default.setBundleUrl(url, 'page/webview.js?weburl=' + _url),
                animated: "true"
            });
        },
        tabClass: function tabClass(str, index) {
            this.subTitle = str;
            this.subID = index;
            this.getSubClass();
        },
        getSubClass: function getSubClass() {
            var _this2 = this;

            this.GET('books/categories/list/' + this.subID, this.token, function (res) {
                if (res.data.code == 200) {
                    var result = res.data.result;
                    _this2.subclasses = result;
                } else {
                    modal.toast({
                        message: res.data.code + ":" + _self.token,
                        duration: 3
                    });
                }
            });
        },
        onTabTo: function onTabTo(_result) {
            var _key = _result.data.key || '';
            this.$router && this.$router.push('/' + _key);
        }
    }
};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('header2', {
    attrs: {
      "title": "图书分类",
      "leftBtn": _vm.leftButton
    }
  }), _c('div', {
    staticClass: ["class-list"]
  }, [_c('scroller', _vm._l((_vm.classes), function(i, item) {
    return _c('text', {
      staticClass: ["class-txt"],
      class: [_vm.isActive(i.name)],
      on: {
        "click": function($event) {
          _vm.tabClass(i.name, i.id)
        }
      }
    }, [_vm._v(_vm._s(i.name))])
  }))]), _c('scroller', {
    staticClass: ["main-list"],
    attrs: {
      "offsetAccuracy": "300px"
    }
  }, [_c('refresher'), _c('image', {
    staticClass: ["ad-img"],
    attrs: {
      "resize": "cover",
      "src": "http://yanxuan.nosdn.127.net/3ebd7addcc0d101d116052a57cec2f16.png"
    }
  }), _c('text', {
    staticClass: ["sub-tlt"]
  }, [_vm._v(_vm._s(_vm.subTitle) + "分类")]), _c('div', {
    staticClass: ["sub-box"]
  }, _vm._l((_vm.subclasses), function(i) {
    return _c('div', {
      staticClass: ["sub-i"]
    }, [_c('image', {
      staticClass: ["i-img"],
      attrs: {
        "resize": "cover",
        "src": i.full_image_url
      },
      on: {
        "click": function($event) {
          _vm.jump('/list/' + i.id + '/' + i.name)
        }
      }
    }), _c('text', {
      staticClass: ["i-name"]
    }, [_vm._v(_vm._s(i.name))])])
  }))], 1), _c('tab-bar', {
    attrs: {
      "router": "sort"
    },
    on: {
      "tabTo": _vm.onTabTo
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(66)
)

/* script */
__vue_exports__ = __webpack_require__(67)

/* template */
var __vue_template__ = __webpack_require__(68)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/views/list.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4da639b4"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#ffffff"
  },
  "w-ipx": {
    "marginTop": "40",
    "marginBottom": "50"
  },
  "main-list": {
    "marginTop": "86",
    "marginBottom": "100",
    "backgroundColor": "#ffffff",
    "width": "750"
  },
  "book-list": {
    "paddingLeft": "20",
    "paddingRight": "20",
    "overflow": "hidden"
  },
  "sub-i": {
    "borderTopWidth": "1",
    "borderTopColor": "#666666",
    "paddingTop": "30",
    "paddingBottom": "30",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "marginTop": "-1"
  },
  "text-box": {
    "width": "461",
    "textAlign": "left"
  },
  "i-img": {
    "width": "199",
    "height": "293",
    "marginRight": "20",
    "marginLeft": "20"
  },
  "i-name": {
    "fontSize": "34",
    "color": "#101010",
    "textAlign": "left",
    "marginTop": "10"
  },
  "i-author": {
    "fontSize": "32",
    "color": "#787878",
    "textAlign": "left",
    "marginTop": "10"
  },
  "i-dec": {
    "fontSize": "32",
    "color": "#787878",
    "marginTop": "10"
  },
  "loading": {
    "width": 750,
    "display": "flex",
    "MsFlexAlign": "center",
    "WebkitAlignItems": "center",
    "WebkitBoxAlign": "center",
    "alignItems": "center"
  },
  "indicator-text": {
    "color": "#888888",
    "fontSize": "42",
    "textAlign": "center"
  },
  "indicator": {
    "marginTop": "16",
    "height": "40",
    "width": "40",
    "color": "#0000FF"
  },
  "show": {
    "opacity": 1
  },
  "hide": {
    "opacity": 0
  }
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _refresh = __webpack_require__(4);

var _refresh2 = _interopRequireDefault(_refresh);

var _Header = __webpack_require__(1);

var _Header2 = _interopRequireDefault(_Header);

var _tabBar = __webpack_require__(3);

var _tabBar2 = _interopRequireDefault(_tabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
var storage = weex.requireModule('storage');
var modal = weex.requireModule('modal');
exports.default = {
    components: {
        'tab-bar': _tabBar2.default,
        'refresher': _refresh2.default,
        'header2': _Header2.default
    },
    data: function data() {
        return {
            booklist: [],
            name: '',
            token: '',
            listID: 1,
            current_page: 1,
            total: 1,
            loadinging: false,
            hasNomare: false,
            leftButton: {
                name: "&#xe697;"
            },
            isand: false
        };
    },
    created: function created() {
        var _this = this;

        this.name = this.$route.params.name;
        this.isand = _utils2.default.env.isAndroid();
        storage.getItem('token', function (event) {
            _this.token = event.data;
            _this.listID = _this.$route.params.index;
            _this.getList();
        });
    },

    methods: {
        getList: function getList() {
            var _this2 = this;

            var _self = this;
            var url = '';
            if (this.listID == 0) {
                url = 'books/chosen/0?page=' + this.current_page;
            } else {
                url = 'books/categories/child/' + this.listID + '?page=' + this.current_page;
            }
            this.GET(url, this.token, function (data) {
                _this2.loadinging = false;
                if (data.code == 200) {
                    var result = data.result;
                    for (var i = 0; i < result.data.length; i++) {
                        _this2.booklist.push(result.data[i]);
                    }
                    _this2.total = _this2.last_page;
                    if (result.last_page == result.current_page) {
                        //最后一页
                        _self.hasNomare = true;
                    } else if (result.last_page > result.current_page) {
                        //非最后一页
                        _this2.current_page = result.current_page + 1;
                    }
                } else {
                    modal.toast({
                        message: data.code,
                        duration: 3
                    });
                }
            });
        },
        onloading: function onloading(event) {
            var _self = this;
            if (_self.hasNomare) {
                modal.toast({ message: '没有更多书籍', duration: 1 });
                return false;
            }
            modal.toast({ message: 'Loading', duration: 1 });
            this.loadinging = true;
            this.getList();
        },
        onTabTo: function onTabTo(_result) {
            var _key = _result.data.key || '';
            this.$router && this.$router.push('/' + _key);
        }
    }
};

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('header2', {
    attrs: {
      "title": _vm.name,
      "leftBtn": _vm.leftButton
    }
  }), _c('scroller', {
    staticClass: ["main-list"],
    class: [_vm.isand ? 'android-main-list' : ''],
    attrs: {
      "offsetAccuracy": "300px",
      "loadmoreoffset": "200"
    },
    on: {
      "loadmore": _vm.onloading
    }
  }, [_c('div', {
    staticClass: ["book-list"]
  }, _vm._l((_vm.booklist), function(i) {
    return _c('div', {
      staticClass: ["sub-i"]
    }, [_c('image', {
      staticClass: ["i-img"],
      attrs: {
        "resize": "cover",
        "src": i.full_cover
      },
      on: {
        "click": function($event) {
          _vm.jump('/bookDetail/' + i.id + '/' + i.book_name)
        }
      }
    }), _c('div', {
      staticClass: ["text-box"]
    }, [_c('text', {
      staticClass: ["i-name"],
      on: {
        "click": function($event) {
          _vm.jump('/bookDetail/' + i.id + '/' + i.book_name)
        }
      }
    }, [_vm._v(_vm._s(i.book_name))]), _c('text', {
      staticClass: ["i-author"]
    }, [_vm._v("作者：" + _vm._s(i.author))]), _c('text', {
      staticClass: ["i-dec"],
      on: {
        "click": function($event) {
          _vm.jump('/bookDetail/' + i.id + '/' + i.book_name)
        }
      }
    }, [_vm._v(_vm._s(i.description))])])])
  }))]), _c('tab-bar', {
    attrs: {
      "router": "list"
    },
    on: {
      "tabTo": _vm.onTabTo
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(70)
)

/* script */
__vue_exports__ = __webpack_require__(71)

/* template */
var __vue_template__ = __webpack_require__(72)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/views/bookDetail.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-55fa8d22"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#ffffff"
  },
  "w-ipx": {
    "marginTop": "40",
    "marginBottom": "50"
  },
  "main": {
    "display": "flex",
    "flexDirection": "column",
    "flexWrap": "nowrap",
    "marginTop": "86",
    "marginBottom": "100",
    "backgroundColor": "#ffffff",
    "width": "750"
  },
  "book-detail": {
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "paddingTop": "20",
    "paddingBottom": "20",
    "paddingLeft": "20"
  },
  "i-img": {
    "width": "234",
    "height": "310",
    "marginRight": "30"
  },
  "detail": {
    "flexDirection": "column"
  },
  "i-name": {
    "color": "#101010",
    "fontSize": "34",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap",
    "marginTop": "10"
  },
  "i-author": {
    "color": "#787878",
    "fontSize": "32",
    "marginTop": "10"
  },
  "i-count": {
    "color": "#787878",
    "fontSize": "32",
    "marginTop": "10"
  },
  "shareBox": {
    "flexDirection": "row",
    "color": "#101010",
    "fontSize": "34",
    "marginTop": "15",
    "alignItems": "center"
  },
  "i-collect": {
    "marginRight": "10",
    "fontSize": "38",
    "color": "#606060"
  },
  "i-collect-text": {
    "color": "#606060",
    "fontSize": "34"
  },
  "collected": {
    "color": "#009FF0"
  },
  "i-share": {
    "fontSize": "34"
  },
  "book-btn": {
    "alignItems": "center",
    "marginTop": "20"
  },
  "i-read": {
    "backgroundColor": "#009FF0",
    "fontSize": "34",
    "color": "#ffffff",
    "width": "700",
    "height": "80",
    "lineHeight": "80",
    "textAlign": "center",
    "borderRadius": "10"
  },
  "section-box": {
    "backgroundColor": "#f4f4f4"
  },
  "box-wrap": {
    "backgroundColor": "#ffffff",
    "marginBottom": "20"
  },
  "bt40": {
    "paddingBottom": "40"
  },
  "tagWrap": {
    "flexDirection": "row",
    "alignItems": "center",
    "backgroundColor": "#ffffff",
    "height": "94",
    "paddingLeft": "20",
    "paddingRight": "20",
    "borderBottomWidth": "1",
    "borderColor": "#ededed"
  },
  "icon-text": {
    "fontSize": "40",
    "color": "#333333",
    "marginRight": "10"
  },
  "tag-text": {
    "color": "#333333",
    "fontSize": "34"
  },
  "section": {
    "backgroundColor": "#ffffff",
    "paddingRight": "20"
  },
  "activity-box": {
    "width": "750",
    "height": "210",
    "flexDirection": "row",
    "paddingTop": "20",
    "paddingBottom": "0",
    "paddingLeft": "15",
    "paddingRight": "15"
  },
  "activity-item": {
    "position": "relative",
    "width": "345",
    "height": "180",
    "marginRight": "30"
  },
  "act-img": {
    "width": "345",
    "height": "180"
  },
  "act-titleBox": {
    "width": "345",
    "height": "180",
    "position": "absolute",
    "top": 0,
    "left": 0,
    "backgroundColor": "rgba(0,0,0,0.3)",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "act-title": {
    "width": "345",
    "paddingLeft": "20",
    "paddingRight": "20",
    "textAlign": "center",
    "color": "#ffffff",
    "fontSize": "32",
    "lines": 1
  },
  "desc-content": {
    "paddingTop": "30",
    "paddingBottom": "40",
    "paddingLeft": "20",
    "paddingRight": "20",
    "fontSize": "32",
    "color": "#6c6c6c",
    "lineHeight": "40"
  },
  "comment-header": {
    "width": "750",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "borderBottomWidth": "1",
    "borderColor": "#ededed",
    "backgroundColor": "#ffffff"
  },
  "comment-tag": {
    "color": "#333333",
    "fontSize": "34"
  },
  "comment-btn": {
    "borderRadius": "10",
    "borderWidth": "1",
    "borderColor": "#009ffc",
    "color": "#009ffc",
    "height": "54",
    "textAlign": "center",
    "lineHeight": "54",
    "fontSize": "34",
    "paddingLeft": "15",
    "paddingRight": "15"
  },
  "mb0": {
    "marginBottom": 0
  },
  "comment-item": {
    "borderBottomWidth": "1",
    "borderBottomColor": "#f0f0f0",
    "paddingTop": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "comment-content": {
    "color": "#606060",
    "fontSize": "32",
    "lineHeight": "40"
  },
  "comment-detail": {
    "paddingTop": "20",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "comment-author": {
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "alignItems": "center"
  },
  "comment-author-img": {
    "width": "43",
    "height": "43",
    "borderRadius": "43",
    "marginRight": "10"
  },
  "comment-author-name": {
    "color": "#8d8d8d",
    "fontSize": "30"
  },
  "star-bar": {
    "width": "160",
    "height": "32",
    "fontSize": 0,
    "lineHeight": 0
  },
  "star": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "height": "32",
    "width": "160",
    "overflow": "hidden"
  },
  "starImg": {
    "height": "32",
    "width": "160"
  },
  "star0": {
    "width": "0"
  },
  "star1": {
    "width": "32"
  },
  "star2": {
    "width": "64"
  },
  "star3": {
    "width": "96"
  },
  "star4": {
    "width": "128"
  },
  "star5": {
    "width": "160"
  },
  "loading": {
    "width": 750,
    "display": "flex",
    "MsFlexAlign": "center",
    "WebkitAlignItems": "center",
    "WebkitBoxAlign": "center",
    "alignItems": "center"
  },
  "indicator-text": {
    "color": "#888888",
    "fontSize": "42",
    "textAlign": "center"
  },
  "indicator": {
    "marginTop": "16",
    "height": "40",
    "width": "40",
    "color": "#0000FF"
  },
  "show": {
    "opacity": 1
  },
  "hide": {
    "opacity": 0
  }
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _refresh = __webpack_require__(4);

var _refresh2 = _interopRequireDefault(_refresh);

var _Header = __webpack_require__(1);

var _Header2 = _interopRequireDefault(_Header);

var _tabBar = __webpack_require__(3);

var _tabBar2 = _interopRequireDefault(_tabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
var storage = weex.requireModule('storage');
var modal = weex.requireModule('modal');
exports.default = {
  components: {
    'tab-bar': _tabBar2.default,
    'refresher': _refresh2.default,
    'header2': _Header2.default
  },
  data: function data() {
    return {
      detail: {},
      activities: [],
      leftButton: {
        name: "&#xe697;"
      },
      token: '',
      bookID: '',
      collectTag: 0,
      current_page: 1,
      comments: [],
      total: 1,
      loadinging: false,
      hasNomare: false,
      placeholder: 'Loading...',
      name: '',
      //pdfUrl:'/json/storage/pdf/xiyou.pdf',
      workerSrc: 'https://cdn.bootcss.com/pdf.js/1.9.456/pdf.worker.min.js',
      starbar: 'http://www.imbawin.com/images/iconpic-star-S-default.png',
      star: 'http://www.imbawin.com/images/iconpic-star-S.png',
      isand: false,
      read_counts: ''
    };
  },
  created: function created() {
    var _this = this;

    this.bookID = this.$route.params.index;
    this.name = this.$route.params.name;
    this.isand = _utils2.default.env.isAndroid();
    var _self = this;
    storage.getItem('token', function (event) {
      _this.token = event.data;
      // this.token = '8755a2c81a83b12e45691e87b2ac8540';
      _this.GET('books/detail/' + _this.bookID, _this.token, function (data) {
        if (data.code == 200) {
          var result = data.result;
          _this.detail = result;
          _this.collectTag = result.is_collect;
          _this.activities = result.activity;
          _this.read_counts = result.read_count;
        } else {
          modal.toast({
            message: data.code,
            duration: 3
          });
        }
      });
      _self.getComment();
    });
  },

  methods: {
    handleClick: function handleClick() {
      PDFPreview.open(this.pdfUrl);
    },
    collect: function collect(isCollected) {
      if (isCollected == 1) {
        return false;
      }
      var _self = this;
      var data = '';
      this.POST('books/collect/' + this.bookID, this.token, data, function (data) {
        if (data.code == 200) {
          _self.collectTag = 1;
          modal.toast({
            message: data.message,
            duration: 1
          });
        } else {
          modal.toast({
            message: data.message,
            duration: 3
          });
        }
      });
    },

    // onloadmore(){
    //   this.getComment();
    // },
    getComment: function getComment() {
      var _this2 = this;

      var _self = this;

      this.GET('books/comment/' + this.bookID + '?page=' + this.current_page, this.token, function (data) {
        _this2.loadinging = false;
        if (data.code == 200) {
          var result = data.result;
          if (result.data.length == 0) {
            _self.placeholder = "暂无评论";
          }
          for (var i = 0; i < result.data.length; i++) {
            _this2.comments.push(result.data[i]);
          }
          _this2.total = _this2.last_page;
          if (result.last_page = result.current_page) {
            //最后一页
            _self.hasNomare = true;
          } else if (result.last_page > result.current_page) {
            //非最后一页
            _this2.current_page = result.current_page + 1;
          }
        } else {
          modal.toast({
            message: data.code,
            duration: 3
          });
        }
      });
    },
    onloading: function onloading(event) {
      var _self = this;
      if (_self.hasNomare) {
        modal.toast({ message: '没有更多评论', duration: 1 });
        return false;
      }
      modal.toast({ message: 'Loading', duration: 1 });
      this.loadinging = true;
      this.getComment();
    },
    onTabTo: function onTabTo(_result) {
      var _key = _result.data.key || '';
      this.$router && this.$router.push('/' + _key);
    },
    readBook: function readBook() {
      var _self = this;
      //增加阅读次数
      this.POST('books/count/' + this.bookID, this.token, '', function (data) {
        if (data.code == 200) {
          _self.read_counts = _self.read_counts + 1;
        } else {}
      });
      //console.log(this.token,this.bookID);
      var id = this.bookID,
          tk = this.token;
      weex.requireModule('PDFModule').readPDF(id, tk);
    }
  }
};

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('header2', {
    attrs: {
      "title": _vm.name,
      "leftBtn": _vm.leftButton
    }
  }), _c('scroller', {
    staticClass: ["main"],
    class: [_vm.isand ? 'android-main' : ''],
    attrs: {
      "offsetAccuracy": "300px",
      "loadmoreoffset": "200"
    },
    on: {
      "loadmore": _vm.onloading
    }
  }, [_c('refresher'), _c('div', {
    staticClass: ["section-box"]
  }, [_c('div', {
    staticClass: ["box-wrap", "bt40"]
  }, [_c('div', {
    staticClass: ["book-detail"]
  }, [_c('image', {
    staticClass: ["i-img"],
    attrs: {
      "resize": "cover",
      "src": _vm.detail.full_cover
    }
  }), _c('div', {
    staticClass: ["detail"]
  }, [_c('text', {
    staticClass: ["i-name"]
  }, [_vm._v(_vm._s(_vm.detail.book_name))]), _c('div', {
    staticClass: ["star-box"]
  }, [_c('image', {
    staticClass: ["star-bar"],
    attrs: {
      "src": _vm.starbar
    }
  }), _c('div', {
    class: ['star', 'star' + _vm.detail.score]
  }, [_c('image', {
    staticClass: ["starImg"],
    attrs: {
      "src": _vm.star
    }
  })])]), _c('text', {
    staticClass: ["i-author"]
  }, [_vm._v("作者：" + _vm._s(_vm.detail.author))]), _c('text', {
    staticClass: ["i-count"]
  }, [_vm._v(_vm._s(_vm.read_counts) + "人阅读")]), _c('div', {
    staticClass: ["shareBox"],
    on: {
      "click": function($event) {
        _vm.collect(_vm.collectTag)
      }
    }
  }, [(_vm.collectTag == 1) ? _c('text', {
    ref: "collect",
    class: ['i-collect', 'iconfont', 'collected']
  }, [_vm._v("")]) : _c('text', {
    ref: "collect",
    class: ['i-collect', 'iconfont']
  }, [_vm._v("")]), _c('text', {
    class: ['i-collect-text', _vm.collectTag == 1 ? 'collected' : '']
  }, [_vm._v("收藏")])])])]), _c('div', {
    staticClass: ["book-btn"]
  }, [_c('text', {
    staticClass: ["i-read"],
    on: {
      "click": function($event) {
        _vm.readBook()
      }
    }
  }, [_vm._v("立即阅读")])])])]), (_vm.activities.length > 0) ? _c('div', {
    staticClass: ["relative-activity", "section-box"]
  }, [_c('div', {
    staticClass: ["box-wrap"]
  }, [_vm._m(0), _c('scroller', {
    staticClass: ["activity-box"],
    attrs: {
      "scrollDirection": "horizontal",
      "showScrollbar": "false"
    }
  }, _vm._l((_vm.detail.activity), function(act) {
    return _c('div', {
      staticClass: ["activity-item"],
      on: {
        "click": function($event) {
          _vm.jump('/online/' + act.id + '/' + act.title)
        }
      }
    }, [_c('image', {
      staticClass: ["act-img"],
      attrs: {
        "src": act.full_thumb,
        "resize": "cover"
      }
    }), _c('div', {
      staticClass: ["act-titleBox"]
    }, [_c('text', {
      staticClass: ["act-title"]
    }, [_vm._v(_vm._s(act.title))])])])
  }))])]) : _vm._e(), _c('div', {
    staticClass: ["book-desc", "section-box"]
  }, [_c('div', {
    staticClass: ["box-wrap"]
  }, [_vm._m(1), _c('text', {
    staticClass: ["desc-content"]
  }, [_vm._v(_vm._s(_vm.detail.description))])])]), _c('div', {
    staticClass: ["book-comment", "section-box"]
  }, [_c('div', {
    staticClass: ["box-wrap", "mb0"]
  }, [_c('div', {
    staticClass: ["comment-header", "section"]
  }, [_vm._m(2), _c('text', {
    staticClass: ["comment-btn"],
    on: {
      "click": function($event) {
        _vm.jump('/comment/' + _vm.bookID)
      }
    }
  }, [_vm._v("我要评论")])]), _vm._l((_vm.comments), function(item) {
    return _c('div', {
      staticClass: ["comment-item"]
    }, [_c('text', {
      staticClass: ["comment-content"]
    }, [_vm._v(_vm._s(item.content))]), _c('div', {
      staticClass: ["comment-detail"]
    }, [_c('div', {
      staticClass: ["comment-author"]
    }, [_c('image', {
      staticClass: ["comment-author-img"],
      attrs: {
        "src": item.reader.full_avatar
      }
    }), _c('text', {
      staticClass: ["comment-author-name"]
    }, [_vm._v(_vm._s(item.reader.name))])]), _c('div', {
      staticClass: ["star-box"]
    }, [_c('image', {
      staticClass: ["star-bar"],
      attrs: {
        "src": _vm.starbar
      }
    }), _c('div', {
      class: ['star', 'star' + item.score]
    }, [_c('image', {
      staticClass: ["starImg"],
      attrs: {
        "src": _vm.star
      }
    })])])])])
  })], 2)])], 1), _c('tab-bar', {
    attrs: {
      "router": "bookDetail"
    },
    on: {
      "tabTo": _vm.onTabTo
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["tagWrap"]
  }, [_c('text', {
    staticClass: ["activity-tag", "iconfont", "icon-text"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["activity-text", "tag-text"]
  }, [_vm._v("相关活动")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["tagWrap"]
  }, [_c('text', {
    staticClass: ["desc-tag", "iconfont", "icon-text"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["desc-text", "tag-text"]
  }, [_vm._v("书籍简介")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["tagWrap"]
  }, [_c('text', {
    staticClass: ["comment-tag", "iconfont", "icon-text"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["comment-text", "tag-text"]
  }, [_vm._v("读书评论")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(74)
)

/* script */
__vue_exports__ = __webpack_require__(75)

/* template */
var __vue_template__ = __webpack_require__(80)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/views/activity.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2e948d17"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#f4f4f4"
  },
  "w-ipx": {
    "marginTop": "40",
    "marginBottom": "50"
  },
  "main-list": {
    "marginTop": "86",
    "marginBottom": "100",
    "backgroundColor": "#f4f4f4"
  },
  "cell-button": {
    "backgroundColor": "#f4f4f4",
    "paddingBottom": "18"
  },
  "show": {
    "opacity": 1
  },
  "hide": {
    "opacity": 0
  }
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _Header = __webpack_require__(1);

var _Header2 = _interopRequireDefault(_Header);

var _refresh = __webpack_require__(4);

var _refresh2 = _interopRequireDefault(_refresh);

var _Block = __webpack_require__(76);

var _Block2 = _interopRequireDefault(_Block);

var _tabBar = __webpack_require__(3);

var _tabBar2 = _interopRequireDefault(_tabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
var storage = weex.requireModule('storage');
var modal = weex.requireModule('modal');
exports.default = {
    data: function data() {
        return {
            articles: [],
            token: '',
            listID: 1,
            current_page: 1,
            total: 1,
            loadinging: false,
            hasNomare: false,
            isand: false
        };
    },

    components: {
        'tab-bar': _tabBar2.default,
        'header2': _Header2.default,
        'refresher': _refresh2.default,
        'block-3': _Block2.default
    },
    created: function created() {
        var _this = this;

        this.isand = _utils2.default.env.isAndroid();
        storage.getItem('token', function (event) {
            _this.token = event.data;
            _this.getList();
        });
    },

    methods: {
        getList: function getList() {
            var _this2 = this;

            var _self = this;
            this.GET('activities/list?page=' + this.current_page, this.token, function (data) {
                _this2.loadinging = false;
                if (data.code == 200) {
                    var result = data.result;
                    for (var i = 0; i < result.data.length; i++) {
                        _this2.articles.push(result.data[i]);
                    }
                    _this2.total = _this2.last_page;
                    if (result.last_page = result.current_page) {
                        //最后一页
                        _self.hasNomare = true;
                    } else if (result.last_page > result.current_page) {
                        //非最后一页
                        _this2.current_page = result.current_page + 1;
                    }
                } else {
                    modal.toast({
                        message: data.code,
                        duration: 3
                    });
                }
            });
        },
        onloading: function onloading() {
            var _self = this;
            if (_self.hasNomare) {
                modal.toast({ message: '没有更多活动', duration: 1 });
                return false;
            }
            modal.toast({ message: 'Loading', duration: 1 });
            this.loadinging = true;
            this.getList();
        },
        onTabTo: function onTabTo(_result) {
            var _key = _result.data.key || '';
            this.$router && this.$router.push('/' + _key);
        }
    }
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(77)
)

/* script */
__vue_exports__ = __webpack_require__(78)

/* template */
var __vue_template__ = __webpack_require__(79)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/components/Block3.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-77980648"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#ffffff",
    "paddingTop": "15",
    "paddingBottom": "15"
  },
  "auther-box": {
    "height": "75",
    "paddingTop": "10",
    "paddingLeft": "25",
    "display": "flex",
    "flexWrap": "nowrap",
    "flexDirection": "row"
  },
  "auther-img": {
    "height": "58",
    "width": "58",
    "borderRadius": "58"
  },
  "auther-name": {
    "flex": 1,
    "fontSize": "30",
    "height": "58",
    "paddingLeft": "20",
    "paddingTop": "10"
  },
  "img-box": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "nowrap"
  },
  "main-img": {
    "flex": 1,
    "height": "380"
  },
  "tlt-box": {
    "height": "80",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "0",
    "paddingLeft": "20",
    "display": "flex",
    "flexWrap": "nowrap",
    "flexDirection": "row"
  },
  "tlt": {
    "fontSize": "34",
    "flex": 1,
    "overflow": "hidden",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "info": {
    "fontSize": "28",
    "paddingLeft": "20",
    "paddingRight": "20",
    "marginTop": "20",
    "overflow": "hidden",
    "lines": 1,
    "textOverflow": "ellipsis",
    "color": "#666666"
  }
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');

exports.default = {
    props: ["article", "url"],
    data: function data() {
        return {};
    },

    methods: {
        jumpWeb: function jumpWeb(_url) {
            if (!_url) _url = 'http://m.you.163.com/topic/v1/pub/XLymbwEO0J.html';
            var url = this.$getConfig().bundleUrl;
            navigator.push({
                url: _util2.default.setBundleUrl(url, 'page/webview.js?weburl=' + _url),
                animated: "true"
            });
        }
    }
};

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    on: {
      "click": function($event) {
        _vm.jump('/online/' + _vm.article.id + '/' + _vm.article.title)
      }
    }
  }, [_c('div', {
    staticClass: ["tlt-box"]
  }, [_c('text', {
    staticClass: ["tlt"]
  }, [_vm._v(_vm._s(_vm.article.title))])]), _c('div', {
    staticClass: ["img-box"]
  }, [_c('image', {
    staticClass: ["main-img"],
    attrs: {
      "resize": "cover",
      "src": _vm.article.full_thumb
    }
  })]), _c('text', {
    staticClass: ["info"]
  }, [_vm._v(_vm._s(_vm.article.activity_start_time) + "开始")]), _c('text', {
    staticClass: ["info"]
  }, [_vm._v(_vm._s(_vm.article.address))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('header2', {
    attrs: {
      "title": "活动"
    }
  }), _c('scroller', {
    staticClass: ["main-list"],
    class: [_vm.isand ? 'android-main-list' : ''],
    attrs: {
      "offsetAccuracy": "300px",
      "loadmoreoffset": "200"
    },
    on: {
      "loadmore": _vm.onloading
    }
  }, _vm._l((_vm.articles), function(ar) {
    return _c('div', {
      staticClass: ["cell-button"]
    }, [_c('block-3', {
      attrs: {
        "article": ar,
        "url": ""
      }
    })], 1)
  })), _c('tab-bar', {
    attrs: {
      "router": "activity"
    },
    on: {
      "tabTo": _vm.onTabTo
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(82)
)

/* script */
__vue_exports__ = __webpack_require__(83)

/* template */
var __vue_template__ = __webpack_require__(95)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/views/online.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-52cd0a5b"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#f4f4f4"
  },
  "w-ipx": {
    "marginTop": "40",
    "marginBottom": "50"
  },
  "main-list": {
    "marginTop": "86",
    "backgroundColor": "#f4f4f4",
    "marginBottom": "0"
  },
  "article-detail": {
    "backgroundColor": "#f4f4f4",
    "paddingBottom": "20"
  },
  "detail-content": {
    "backgroundColor": "#ffffff"
  },
  "article-box": {
    "backgroundColor": "#ffffff",
    "paddingTop": "40",
    "paddingBottom": "40",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "article": {
    "fontSize": "30",
    "color": "#666666"
  },
  "img-box": {
    "marginTop": "30",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "main-img": {
    "height": "380",
    "flex": 1
  },
  "cell-button": {
    "paddingBottom": "18"
  },
  "commen-item": {
    "backgroundColor": "#f4f4f4"
  },
  "selected": {
    "backgroundColor": "#f4f4f4",
    "paddingBottom": "18"
  },
  "show": {
    "opacity": 1
  },
  "hide": {
    "opacity": 0
  }
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcTag = __webpack_require__(5);

var _wxcTag2 = _interopRequireDefault(_wxcTag);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _Header = __webpack_require__(1);

var _Header2 = _interopRequireDefault(_Header);

var _refresh = __webpack_require__(4);

var _refresh2 = _interopRequireDefault(_refresh);

var _Block = __webpack_require__(12);

var _Block2 = _interopRequireDefault(_Block);

var _Block3 = __webpack_require__(91);

var _Block4 = _interopRequireDefault(_Block3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navigator = weex.requireModule('navigator'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var storage = weex.requireModule('storage');
var modal = weex.requireModule('modal');
exports.default = {
    data: function data() {
        var _self = this;
        return {
            name: '',
            leftBtn: {
                name: '<'
            },
            rightBtn: {
                name: '发帖',
                fun: function fun() {
                    _self.$router.push('/postCreate/' + _self.listID);
                }
            },
            article: [],
            selected: [],
            commens: [],
            token: '',
            listID: 1,
            current_page: 1,
            total: 1,
            loadinging: false,
            hasNomare: false
        };
    },

    components: {
        'header2': _Header2.default,
        'refresher': _refresh2.default,
        'block-5': _Block2.default,
        'block-4': _Block4.default,
        'WxcTag': _wxcTag2.default
    },
    created: function created() {
        var _this = this;

        this.name = this.$route.params.name;
        this.listID = this.$route.params.index;
        storage.getItem('token', function (event) {
            _this.token = event.data;
            _this.getSelectedList();
            _this.getCommenList();
            _this.getArticle();
        });
    },

    methods: {
        getArticle: function getArticle() {
            var _self = this;
            this.GET('activities/detail/' + _self.listID, _self.token, function (data) {
                if (data.code == 200) {
                    var result = data.result;
                    _self.article = result;
                    //_self.selected = result;
                } else {
                    modal.toast({
                        message: data.code,
                        duration: 3
                    });
                }
            });
        },
        getSelectedList: function getSelectedList() {
            var _self = this;
            this.GET('posts/chosen/' + _self.listID + '/2', _self.token, function (data) {
                if (data.code == 200) {
                    var result = data.result;
                    _self.selected = result;
                } else {
                    modal.toast({
                        message: data.code,
                        duration: 3
                    });
                }
            });
        },
        getCommenList: function getCommenList() {
            var _this2 = this;

            var _self = this;
            this.GET('posts/list/' + _self.listID + '/?page=' + this.current_page, this.token, function (data) {
                _this2.loadinging = false;
                if (data.code == 200) {
                    var result = data.result;
                    for (var i = 0; i < result.data.length; i++) {
                        _this2.commens.push(result.data[i]);
                    }
                    _this2.total = _this2.last_page;
                    if (result.last_page == result.current_page) {
                        //最后一页
                        _self.hasNomare = true;
                    } else if (result.last_page > result.current_page) {
                        //非最后一页
                        _this2.current_page = result.current_page + 1;
                    }
                } else {
                    modal.toast({
                        message: data.code,
                        duration: 3
                    });
                }
            });
        },
        onloading: function onloading() {
            var _self = this;
            if (_self.hasNomare) {
                modal.toast({ message: '没有更多帖子', duration: 1 });
                return false;
            }
            modal.toast({ message: 'Loading', duration: 1 });
            this.loadinging = true;
            this.getCommenList();
        }
    }
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(85)
)

/* script */
__vue_exports__ = __webpack_require__(86)

/* template */
var __vue_template__ = __webpack_require__(87)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/node_modules/weex-ui/packages/wxc-tag/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-77a299ea"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = {
  "tag-item": {
    "height": "24",
    "justifyContent": "center",
    "alignItems": "center",
    "paddingBottom": "2"
  },
  "tag-border": {
    "borderBottomLeftRadius": "4",
    "borderBottomRightRadius": "4",
    "borderTopLeftRadius": "4",
    "borderTopRightRadius": "4"
  },
  "tag-hollow": {
    "borderWidth": "1"
  },
  "tag-image": {
    "height": "24"
  },
  "tag-special": {
    "borderWidth": "1",
    "flexDirection": "row"
  },
  "left-image": {
    "width": "20",
    "height": "20"
  },
  "tag-left": {
    "width": "24",
    "height": "24",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "tag-text": {
    "fontSize": "20",
    "height": "22",
    "lineHeight": "22",
    "paddingLeft": "6",
    "paddingRight": "6"
  }
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    type: {
      type: String,
      default: 'solid'
    },
    value: {
      type: [String, Number],
      default: '测试测试'
    },
    tagColor: {
      type: String,
      default: '#ff5000'
    },
    fontColor: {
      type: String,
      default: '#333333'
    },
    specialIcon: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    }
  },
  computed: {
    showSolid: function showSolid() {
      var type = this.type,
          value = this.value;

      return type === 'solid' && value !== '';
    },
    showHollow: function showHollow() {
      var type = this.type,
          value = this.value;

      return type === 'hollow' && value !== '';
    },
    showSpecial: function showSpecial() {
      var type = this.type,
          value = this.value,
          specialIcon = this.specialIcon;

      return type === 'special' && value !== '' && specialIcon !== '';
    },
    showImage: function showImage() {
      var type = this.type,
          img = this.img;

      return type === 'image' && img !== '';
    },
    tagTextStyle: function tagTextStyle() {
      var tagColor = this.tagColor,
          showSolid = this.showSolid;

      return showSolid ? { backgroundColor: tagColor } : { borderColor: tagColor };
    }
  },
  data: function data() {
    return {
      imgWidth: 90
    };
  },
  methods: {
    onLoad: function onLoad(e) {
      if (e.success && e.size && e.size.naturalWidth > 0) {
        var width = e.size.naturalWidth;
        var height = e.size.naturalHeight;
        this.imgWidth = width * (24 / height);
      }
    }
  }
};

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.showSolid || _vm.showHollow) ? _c('div', {
    class: ['tag-item', 'tag-border', _vm.showHollow && 'tag-hollow'],
    style: _vm.tagTextStyle
  }, [_c('text', {
    staticClass: ["tag-text"],
    style: {
      color: _vm.fontColor
    }
  }, [_vm._v(_vm._s(_vm.value))])]) : _vm._e(), (_vm.showImage) ? _c('image', {
    staticClass: ["tag-image"],
    style: {
      width: _vm.imgWidth + 'px'
    },
    attrs: {
      "src": _vm.img,
      "ariaHidden": true
    },
    on: {
      "load": _vm.onLoad
    }
  }) : _vm._e(), (_vm.showSpecial) ? _c('div', {
    staticClass: ["tag-special", "tag-border"],
    style: {
      borderColor: _vm.tagColor
    },
    attrs: {
      "accessible": true,
      "ariaLabel": _vm.value
    }
  }, [_c('div', {
    staticClass: ["tag-left"],
    style: {
      backgroundColor: _vm.tagColor
    }
  }, [_c('image', {
    staticClass: ["left-image"],
    attrs: {
      "src": _vm.specialIcon
    }
  })]), _c('text', {
    staticClass: ["tag-text"],
    style: {
      color: _vm.fontColor
    }
  }, [_vm._v(_vm._s(_vm.value))])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont",
    "color": "#9d9d9d",
    "fontSize": "40"
  },
  "commen-cell": {
    "backgroundColor": "#ffffff",
    "paddingTop": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "auther-box": {
    "flexDirection": "row"
  },
  "auther-img": {
    "borderRadius": "10",
    "width": "60",
    "height": "60",
    "marginRight": "20"
  },
  "auther-detail": {
    "width": "400"
  },
  "auther-name": {
    "fontSize": "34",
    "lineHeight": "34",
    "color": "#666666"
  },
  "auther-time": {
    "fontSize": "28",
    "lineHeight": "32",
    "marginTop": "10",
    "color": "#888888"
  },
  "tlt-box": {
    "marginTop": "20",
    "paddingLeft": "10",
    "paddingRight": "10"
  },
  "tlt": {
    "fontSize": "36",
    "color": "#666666",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap",
    "width": "600"
  },
  "description-box": {
    "marginTop": "10",
    "paddingLeft": "10",
    "paddingRight": "10"
  },
  "description": {
    "color": "#888888",
    "fontSize": "32",
    "lineHeight": "48"
  },
  "img-box": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "marginTop": "20",
    "marginBottom": "10"
  },
  "main-img": {
    "width": "200",
    "height": "200",
    "marginRight": "10"
  },
  "wedge-box": {
    "flexDirection": "row",
    "justifyContent": "space-around",
    "alignItems": "center",
    "marginTop": "20"
  },
  "wedge": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "wedge-text": {
    "fontSize": "28",
    "color": "#9d9d9d",
    "marginLeft": "10"
  },
  "wedge-num": {
    "marginLeft": "10"
  },
  "icon-up": {
    "fontSize": "38"
  },
  "active": {
    "color": "#009FF0"
  }
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcTag = __webpack_require__(5);

var _wxcTag2 = _interopRequireDefault(_wxcTag);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
var storage = weex.requireModule('storage');
var modal = weex.requireModule('modal');
exports.default = {
    props: ["commen"],
    components: { WxcTag: _wxcTag2.default },
    data: function data() {
        return {
            token: '',
            isLike: ''
        };
    },
    created: function created() {
        this.isLike = this.commen.ups_count;
        if (!this.commen.description) {
            if (this.commen.content.length > 60) {
                this.commen.description = this.commen.content.substring(0, 60) + '...';
            } else {
                this.commen.description = this.commen.content;
            }
        }
    },

    methods: {
        like: function like(id) {
            var _this = this;

            var _self = this;
            if (this.isLike == 1) {
                return false;
            }
            storage.getItem('token', function (event) {
                _this.token = event.data;
                _this.POST('posts/up/' + id, _this.token, '', function (res) {
                    if (res.data.code == 200) {
                        _this.commen.up = Number(_this.commen.up) + 1;
                        _this.isLike = 1;
                        // if(this.isLike == 1){
                        //     this.isLike = 0;
                        // }else{
                        //     this.isLike = 1;
                        // }
                    } else {
                        modal.toast({
                            message: res.data.code + ":" + _self.token,
                            duration: 3
                        });
                    }
                });
            });
        }
    }
};

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["commen-cell"]
  }, [_c('div', {
    staticClass: ["auther-box"],
    on: {
      "click": function($event) {
        _vm.jump('/themeDetail/' + _vm.commen.id)
      }
    }
  }, [_c('image', {
    staticClass: ["auther-img"],
    attrs: {
      "resize": "cover",
      "src": _vm.commen.readers.full_avatar
    }
  }), _c('div', {
    staticClass: ["auther-detail"]
  }, [_c('text', {
    staticClass: ["auther-name"]
  }, [_vm._v(_vm._s(_vm.commen.readers.name))]), _c('text', {
    staticClass: ["auther-time"]
  }, [_vm._v(_vm._s(_vm.commen.created_at))])])]), _c('div', {
    staticClass: ["tlt-box"],
    on: {
      "click": function($event) {
        _vm.jump('/themeDetail/' + _vm.commen.id)
      }
    }
  }, [_c('text', {
    staticClass: ["tlt"]
  }, [_vm._v(_vm._s(_vm.commen.title))])]), _c('div', {
    staticClass: ["description-box"],
    on: {
      "click": function($event) {
        _vm.jump('/themeDetail/' + _vm.commen.id)
      }
    }
  }, [_c('text', {
    staticClass: ["description"]
  }, [_vm._v(_vm._s(_vm.commen.description))])]), _c('div', {
    staticClass: ["img-box"]
  }, _vm._l((_vm.commen.html_image), function(img) {
    return _c('image', {
      staticClass: ["main-img"],
      attrs: {
        "src": img,
        "resize": "cover"
      }
    })
  })), _c('div', {
    staticClass: ["wedge-box"]
  }, [_c('div', {
    staticClass: ["wedge-commen", "wedge"],
    on: {
      "click": function($event) {
        _vm.jump('/themeDetail/' + _vm.commen.id)
      }
    }
  }, [_c('text', {
    staticClass: ["iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["wedge-text"]
  }, [_vm._v("评论")]), _c('text', {
    staticClass: ["wedge-text", "wedge-num"]
  }, [_vm._v(_vm._s(_vm.commen.comments_count))])]), (_vm.isLike == 1) ? _c('div', {
    staticClass: ["wedge-like", "wedge"]
  }, [_c('text', {
    staticClass: ["iconfont", "icon-up", "active"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["wedge-text", "active"]
  }, [_vm._v(_vm._s(_vm.commen.up))])]) : _c('div', {
    staticClass: ["wedge-like", "wedge"],
    on: {
      "click": function($event) {
        _vm.like(_vm.commen.id)
      }
    }
  }, [_c('text', {
    staticClass: ["iconfont", "icon-up"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["wedge-text"]
  }, [_vm._v("赞")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(92)
)

/* script */
__vue_exports__ = __webpack_require__(93)

/* template */
var __vue_template__ = __webpack_require__(94)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/components/Block4.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-77a61dc9"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "selected-cell": {
    "backgroundColor": "#ffffff",
    "paddingTop": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "paddingRight": "20",
    "borderBottomWidth": "1",
    "borderColor": "#cccccc"
  },
  "title-box": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "tag": {
    "fontSize": "32",
    "marginRight": "20",
    "marginLeft": "20"
  },
  "title": {
    "fontSize": "34",
    "color": "#000000"
  }
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcTag = __webpack_require__(5);

var _wxcTag2 = _interopRequireDefault(_wxcTag);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
exports.default = {
    props: ["selecte"],
    components: { WxcTag: _wxcTag2.default },
    created: function created() {},

    methods: {}
};

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["selected-cell"],
    on: {
      "click": function($event) {
        _vm.jump('/themeDetail/' + _vm.selecte.id)
      }
    }
  }, [_c('div', {
    staticClass: ["title-box"]
  }, [_c('wxc-tag', {
    staticClass: ["tag"],
    attrs: {
      "type": "solid",
      "tagColor": "#009FF0",
      "fontColor": "#ffffff",
      "value": "置顶"
    }
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.selecte.title))])], 1), _c('div', {
    staticClass: ["description-box"]
  }, [_c('text', {
    staticClass: ["description"]
  }, [_vm._v(_vm._s(_vm.selecte.description))])]), _c('div', {
    staticClass: ["img-box"]
  }, _vm._l((_vm.selecte.html_image), function(img) {
    return _c('image', {
      staticClass: ["main-img"],
      attrs: {
        "src": img,
        "resize": "cover"
      }
    })
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('header2', {
    attrs: {
      "title": _vm.name,
      "leftBtn": _vm.leftBtn,
      "rightBtn": _vm.rightBtn
    }
  }), _c('scroller', {
    staticClass: ["main-list"],
    attrs: {
      "offsetAccuracy": "300px",
      "loadmoreoffset": "200"
    },
    on: {
      "loadmore": _vm.onloading
    }
  }, [_c('refresher'), _c('div', {
    staticClass: ["article-detail"]
  }, [_c('div', {
    staticClass: ["detail-content"]
  }, [_c('div', {
    staticClass: ["article-box"]
  }, [_c('text', {
    staticClass: ["article"]
  }, [_vm._v(_vm._s(_vm.article.html_content))])]), _c('div', {
    staticClass: ["img-box"]
  }, _vm._l((_vm.article.html_image), function(img) {
    return _c('image', {
      staticClass: ["main-img"],
      attrs: {
        "src": img,
        "resize": "cover"
      }
    })
  }))])]), (_vm.selected.length > 0) ? _c('div', {
    staticClass: ["selected"]
  }, _vm._l((_vm.selected), function(se) {
    return _c('div', {
      staticClass: ["selected-item"]
    }, [_c('block-4', {
      attrs: {
        "selecte": se
      }
    })], 1)
  })) : _vm._e(), _c('div', {
    staticClass: ["commen"]
  }, _vm._l((_vm.commens), function(co) {
    return _c('div', {
      staticClass: ["commen-item", "cell-button"]
    }, [_c('block-5', {
      attrs: {
        "commen": co
      }
    })], 1)
  }))], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(97)
)

/* script */
__vue_exports__ = __webpack_require__(98)

/* template */
var __vue_template__ = __webpack_require__(99)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/views/themeDetail.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5ca8f822"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#fefefe"
  },
  "w-ipx": {
    "marginTop": "40",
    "marginBottom": "50"
  },
  "main": {
    "marginBottom": "100",
    "width": "750"
  },
  "comment-form": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "bottom": "0",
    "width": "750",
    "height": "90",
    "backgroundColor": "#f0f0f0",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "more": {
    "fontSize": "50",
    "color": "#888888",
    "paddingLeft": "20"
  },
  "input": {
    "flex": 1,
    "height": "60",
    "paddingLeft": "10",
    "paddingRight": "10",
    "paddingTop": "10",
    "paddingBottom": "10",
    "fontSize": "32",
    "backgroundColor": "#ffffff",
    "marginLeft": "20"
  },
  "btn": {
    "fontSize": "34",
    "color": "#888888",
    "paddingLeft": "20",
    "paddingRight": "20",
    "textAlign": "center"
  },
  "contentBox": {
    "marginTop": "86",
    "backgroundColor": "#ffffff",
    "paddingTop": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "paddingRight": "20",
    "borderBottomWidth": "1",
    "borderColor": "#f0f0f0"
  },
  "auther-box": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "auther-img": {
    "borderRadius": "10",
    "width": "60",
    "height": "60",
    "marginRight": "20"
  },
  "auther-detail": {
    "width": "400"
  },
  "auther-name": {
    "fontSize": "34",
    "lineHeight": "34",
    "color": "#666666"
  },
  "auther-time": {
    "fontSize": "28",
    "lineHeight": "32",
    "marginTop": "10",
    "color": "#888888"
  },
  "tlt-box": {
    "marginTop": "20",
    "paddingLeft": "10",
    "paddingRight": "10"
  },
  "tlt": {
    "fontSize": "36",
    "color": "#666666",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap",
    "width": "600"
  },
  "description-box": {
    "marginTop": "20",
    "paddingLeft": "10",
    "paddingRight": "10"
  },
  "description": {
    "color": "#888888",
    "fontSize": "32",
    "lineHeight": "48"
  },
  "img-box": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "nowrap"
  },
  "main-img": {
    "flex": 1,
    "height": "380",
    "marginTop": "20"
  },
  "like-box": {
    "marginLeft": "20",
    "marginRight": "20",
    "borderBottomWidth": "1",
    "borderColor": "#f0f0f0",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": "20",
    "paddingBottom": "20",
    "fontSize": "32"
  },
  "like-wrap": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "like-name": {
    "color": "#888888",
    "fontSize": "32"
  },
  "like-text": {
    "color": "#009FF0",
    "marginLeft": "20",
    "fontSize": "32"
  },
  "comment-box": {
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "comment-item": {
    "flexDirection": "row",
    "borderBottomWidth": "1",
    "borderColor": "#f0f0f0",
    "paddingTop": "20",
    "paddingBottom": "20",
    "paddingLeft": "10",
    "paddingRight": "10"
  },
  "comment-author-img": {
    "width": "70",
    "height": "70",
    "borderRadius": "10",
    "marginRight": "30"
  },
  "comment-detail": {
    "width": "610"
  },
  "comment-author-name": {
    "fontSize": "34",
    "color": "#888888"
  },
  "comment-author-time": {
    "fontSize": "28",
    "color": "#acacac",
    "marginTop": "10"
  },
  "comment-content": {
    "marginTop": "20"
  },
  "comment-text": {
    "fontSize": "34",
    "color": "#888888"
  },
  "loading": {
    "width": "750",
    "display": "flex",
    "MsFlexAlign": "center",
    "WebkitAlignItems": "center",
    "WebkitBoxAlign": "center",
    "alignItems": "center"
  },
  "indicator-text": {
    "color": "#888888",
    "fontSize": "42",
    "textAlign": "center"
  },
  "indicator": {
    "marginTop": "16",
    "height": "40",
    "width": "40",
    "color": "#0000FF"
  },
  "show": {
    "opacity": 1
  },
  "hide": {
    "opacity": 0
  }
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _Header = __webpack_require__(1);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = weex.requireModule('storage'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
  name: 'themeDetail',
  components: {
    'header2': _Header2.default
  },
  data: function data() {
    return {
      postDetail: {},
      postID: '',
      token: '',
      leftBtn: {
        name: '<'
      },
      readersImg: '',
      readersName: '',
      readersTime: '',
      current_page: 1,
      comments: [],
      total: 1,
      loadinging: false,
      hasNomare: false,
      placeholder: '',
      ups: [],
      commentContent: '',
      isand: false
    };
  },
  created: function created() {
    var _this = this;

    this.isand = _utils2.default.env.isAndroid();
    this.postID = this.$route.params.index;
    storage.getItem('token', function (event) {
      _this.token = event.data;
      //获取帖子详情
      _this.GET('posts/detail/' + _this.postID, _this.token, function (data) {
        if (data.code == 200) {
          var result = data.result;
          _this.postDetail = result;
          _this.readersImg = result.readers.full_avatar;
          _this.readersName = result.readers.name;
          _this.readersTime = result.created_at;
          _this.ups = result.ups;
        } else {
          modal.toast({
            message: data.code,
            duration: 3
          });
        }
      });
      //增加阅读次数
      _this.POST('posts/view/' + _this.postID, _this.token, '', function (data) {
        if (data.code == 200) {} else {}
      });
      //获取评论详情
      _this.getComment();
    });
  },

  methods: {
    getComment: function getComment() {
      var _this2 = this;

      var _self = this;
      this.GET('posts/comments/' + this.postID + '?page=' + this.current_page, this.token, function (data) {
        _this2.loadinging = false;
        if (data.code == 200) {
          var result = data.result;
          if (result.data.length == 0) {
            //_self.placeholder = "暂无评论"
          }
          for (var i = 0; i < result.data.length; i++) {
            _this2.comments.push(result.data[i]);
          }
          _this2.total = _this2.last_page;
          if (result.last_page == result.current_page) {
            //最后一页
            _self.hasNomare = true;
          } else if (result.last_page > result.current_page) {
            //非最后一页
            _this2.current_page = result.current_page + 1;
          }
        } else {
          modal.toast({
            message: data.code,
            duration: 3
          });
        }
      });
    },
    onloading: function onloading(event) {
      var _self = this;
      if (_self.hasNomare) {
        modal.toast({ message: '没有更多评论', duration: 1 });
        return false;
      }
      modal.toast({ message: 'Loading', duration: 1 });
      this.loadinging = true;
      this.getComment();
    },
    oninput: function oninput(event) {
      this.commentContent = event.value;
    },
    focus: function focus() {
      this.$refs['input'].focus();
    },
    post: function post() {
      var _self = this;
      if (_self.commentContent.length == 0) {
        return false;
      }
      var data = JSON.stringify({ "content": _self.commentContent });
      _self.POST('posts/comment/' + _self.postID, _self.token, data, function (data) {
        if (data.code == 200) {
          modal.toast({
            message: "评论发表成功，请等待审核",
            duration: 3
          });
          _self.$router.push('/_empty');
        } else {
          modal.toast({
            message: data.message,
            duration: 3
          });
        }
      });
    }
  }
};

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('header2', {
    attrs: {
      "title": _vm.postDetail.title,
      "leftBtn": _vm.leftBtn
    }
  }), _c('scroller', {
    staticClass: ["main"],
    class: [_vm.isand ? 'android-main' : ''],
    attrs: {
      "offsetAccuracy": "300px",
      "loadmoreoffset": "200"
    },
    on: {
      "loadmore": _vm.onloading
    }
  }, [_c('refresher'), _c('div', {
    staticClass: ["contentBox"]
  }, [_c('div', {
    staticClass: ["auther-box"]
  }, [_c('image', {
    staticClass: ["auther-img"],
    attrs: {
      "resize": "cover",
      "src": _vm.readersImg
    }
  }), _c('div', {
    staticClass: ["auther-detail"]
  }, [_c('text', {
    staticClass: ["auther-name"]
  }, [_vm._v(_vm._s(_vm.readersName))]), _c('text', {
    staticClass: ["auther-time"]
  }, [_vm._v(_vm._s(_vm.readersTime))])])]), _c('div', {
    staticClass: ["tlt-box"]
  }, [_c('text', {
    staticClass: ["tlt"]
  }, [_vm._v(_vm._s(_vm.postDetail.title))])]), _c('div', {
    staticClass: ["description-box"]
  }, [_c('text', {
    staticClass: ["description"]
  }, [_vm._v(_vm._s(_vm.postDetail.html_content))])]), _c('div', {
    staticClass: ["image-box"]
  }, _vm._l((_vm.postDetail.html_image), function(img, i) {
    return _c('image', {
      staticClass: ["main-img"],
      attrs: {
        "src": img,
        "resize": "cover"
      }
    })
  }))]), (_vm.ups.length != 0) ? _c('div', {
    staticClass: ["like-box"]
  }, [_vm._l((_vm.postDetail.ups), function(up, i) {
    return _c('div', {
      staticClass: ["like-wrap"]
    }, [_c('text', {
      staticClass: ["like-name"]
    }, [_vm._v(_vm._s(up.name))]), (i != _vm.postDetail.ups.length - 1) ? _c('text', {
      staticClass: ["like-name"]
    }, [_vm._v("、")]) : _vm._e()])
  }), _c('text', {
    staticClass: ["like-text"]
  }, [_vm._v("点赞")])], 2) : _vm._e(), _c('div', {
    staticClass: ["comment-box"]
  }, _vm._l((_vm.comments), function(item) {
    return _c('div', {
      staticClass: ["comment-item"]
    }, [_c('image', {
      staticClass: ["comment-author-img"],
      attrs: {
        "src": item.reader.full_avatar
      }
    }), _c('div', {
      staticClass: ["comment-detail"]
    }, [_c('div', {
      staticClass: ["comment-author"]
    }, [_c('text', {
      staticClass: ["comment-author-name"]
    }, [_vm._v(_vm._s(item.reader.name))]), _c('text', {
      staticClass: ["comment-author-time"]
    }, [_vm._v(_vm._s(item.created_at))])]), _c('div', {
      staticClass: ["comment-content"]
    }, [_c('text', {
      staticClass: ["comment-text"]
    }, [_vm._v(_vm._s(item.content))])])])])
  }))], 1), _c('div', {
    staticClass: ["comment-form"],
    class: [_vm.isand ? 'android-comment-form' : '']
  }, [_c('input', {
    ref: "input",
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "",
      "value": "",
      "disabled": "false",
      "autofocus": "false"
    },
    on: {
      "input": _vm.oninput,
      "click": _vm.focus
    }
  }), _c('text', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.post()
      }
    }
  }, [_vm._v("提交")])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(101)
)

/* script */
__vue_exports__ = __webpack_require__(102)

/* template */
var __vue_template__ = __webpack_require__(103)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/views/offline.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2c54720b"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = {
  "image": {
    "width": "700",
    "height": "700"
  },
  "slider": {
    "marginTop": "25",
    "marginLeft": "25",
    "width": "700",
    "height": "700",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#41B883"
  },
  "frame": {
    "width": "700",
    "height": "700",
    "position": "relative"
  }
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'home',
  data: function data() {
    return {
      imageList: [{ src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg' }, { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg' }, { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg' }]
    };
  }
};

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('slider', {
    staticClass: ["slider"],
    attrs: {
      "interval": "3000",
      "autoPlay": "true"
    }
  }, _vm._l((_vm.imageList), function(img) {
    return _c('div', {
      staticClass: ["frame"]
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "resize": "cover",
        "src": img.src
      }
    })])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(105)
)

/* script */
__vue_exports__ = __webpack_require__(106)

/* template */
var __vue_template__ = __webpack_require__(107)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/views/signUp.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-15a7c6c0"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = {
  "image": {
    "width": "700",
    "height": "700"
  },
  "slider": {
    "marginTop": "25",
    "marginLeft": "25",
    "width": "700",
    "height": "700",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#41B883"
  },
  "frame": {
    "width": "700",
    "height": "700",
    "position": "relative"
  }
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'home',
  data: function data() {
    return {
      imageList: [{ src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg' }, { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg' }, { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg' }]
    };
  }
};

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('slider', {
    staticClass: ["slider"],
    attrs: {
      "interval": "3000",
      "autoPlay": "true"
    }
  }, _vm._l((_vm.imageList), function(img) {
    return _c('div', {
      staticClass: ["frame"]
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "resize": "cover",
        "src": img.src
      }
    })])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(109)
)

/* script */
__vue_exports__ = __webpack_require__(110)

/* template */
var __vue_template__ = __webpack_require__(114)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/views/personal.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-83d88070"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#ffffff"
  },
  "fbs": {
    "backgroundColor": "#ffffff"
  },
  "scroller": {
    "marginBottom": "100"
  },
  "ml-ipx": {
    "marginBottom": "140"
  },
  "cell-button": {
    "backgroundColor": "#f4f4f4"
  },
  "box-wrap": {
    "backgroundColor": "#ffffff",
    "marginBottom": "20"
  },
  "mt0": {
    "marginBottom": 0
  },
  "header": {
    "height": "246",
    "backgroundColor": "#009ffc"
  },
  "h-ipx": {
    "height": "420"
  },
  "bg2": {
    "top": "500"
  },
  "bg3": {
    "top": "1000"
  },
  "i-name": {
    "position": "absolute",
    "bottom": "70",
    "left": "30",
    "height": "50",
    "width": "300",
    "fontSize": "38",
    "color": "#ffffff"
  },
  "b-tlt": {
    "position": "absolute",
    "bottom": "70",
    "left": "190",
    "height": "40",
    "width": "350",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "alignItems": "center"
  },
  "tag-v8": {
    "fontSize": "34",
    "color": "#b29e75",
    "textAlign": "center"
  },
  "txt-tag": {
    "color": "#b29e75",
    "flex": 1,
    "height": "40",
    "fontSize": "28",
    "overflow": "hidden",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "aboutBox": {
    "position": "absolute",
    "top": "20",
    "right": "20",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-end",
    "width": "200"
  },
  "about-text": {
    "fontSize": "30",
    "color": "#ffffff",
    "paddingLeft": "6"
  },
  "about-icon": {
    "fontSize": "40",
    "color": "#ffffff"
  },
  "notice-dot": {
    "marginTop": "-20",
    "marginLeft": "10",
    "height": "15",
    "width": "15",
    "borderRadius": 100,
    "backgroundColor": "#ff0000"
  },
  "b-qrcode": {
    "position": "absolute",
    "bottom": "80",
    "right": "40",
    "height": "80",
    "width": "80",
    "borderRadius": "70",
    "textAlign": "center",
    "fontSize": "40",
    "paddingTop": "18",
    "color": "#ffffff",
    "backgroundColor": "rgba(255,255,255,0.3)"
  },
  "s-box": {
    "backgroundColor": "#ffffff"
  },
  "box-tlt": {
    "height": "94"
  },
  "box-txt": {
    "fontSize": "32",
    "color": "#333333"
  },
  "icon-box": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": "28",
    "paddingLeft": "20"
  },
  "item-icon": {
    "fontSize": "40",
    "color": "#333333",
    "marginRight": "10"
  },
  "box-books": {
    "flexDirection": "row",
    "flexWrap": "nowrap"
  },
  "box-book-item": {
    "width": "236",
    "paddingTop": "30",
    "paddingBottom": "30",
    "paddingLeft": "10",
    "paddingRight": "10"
  },
  "box-book-img": {
    "height": "291",
    "width": "223"
  },
  "box-book-text": {
    "fontSize": "30",
    "marginTop": "20",
    "color": "#6d6d6d",
    "lines": 1
  },
  "box-post": {
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "box-post-item": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "flexWrap": "nowrap",
    "paddingTop": "20",
    "paddingBottom": "20",
    "borderBottomWidth": "1",
    "borderColor": "#e0e0e0"
  },
  "box-post-text": {
    "fontSize": "30",
    "lines": 1,
    "paddingRight": "20",
    "color": "#6d6d6d"
  },
  "box-post-time": {
    "fontSize": "28",
    "color": "#808080"
  },
  "i-box-in": {
    "position": "absolute",
    "top": "34",
    "right": "30",
    "color": "#009ffc",
    "fontSize": "40"
  },
  "border-bottom": {
    "borderBottomWidth": "1",
    "borderBottomColor": "rgba(0,0,0,0.15)"
  },
  "i-c-orange": {
    "color": "#ff744d"
  },
  "i-c-yellow": {
    "color": "#f6a121"
  },
  "i-c-blue": {
    "color": "#689de5"
  }
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _Header = __webpack_require__(111);

var _Header2 = _interopRequireDefault(_Header);

var _tabBar = __webpack_require__(3);

var _tabBar2 = _interopRequireDefault(_tabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = weex.requireModule('storage'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            token: '',
            books: [],
            activity: [],
            posts: [],
            bookLimit: 3,
            actLimit: 3,
            postLimit: 10,
            profile: {},
            isand: false,
            currentVersion: '1.2.0',
            newVersion: '',
            isNew: false
        };
    },

    components: {
        'header5': _Header2.default,
        'tab-bar': _tabBar2.default
    },
    created: function created() {
        var _this = this;

        this.isand = _utils2.default.env.isAndroid();
        storage.getItem('token', function (event) {
            _this.token = event.data;
            _this.getProfile();
            _this.getBookList();
            //this.getActivityList()
            _this.getPostList();
            //this.getVersion()
        });
    },

    methods: {
        getProfile: function getProfile() {
            var _self = this;
            this.GET('profile/reader/', this.token, function (data) {
                if (data.code == 200) {
                    var result = data.result;
                    _self.profile = result;
                    //console.log(_self.profile);
                } else {
                    modal.toast({
                        message: data.code,
                        duration: 3
                    });
                }
            });
        },
        getBookList: function getBookList() {
            var _self = this;
            this.GET('profile/book/' + _self.bookLimit + '?page=1', this.token, function (data) {
                if (data.code == 200) {
                    var result = data.result;
                    _self.books = result;

                    //console.log(_self.books);
                } else {
                    modal.toast({
                        message: data.code,
                        duration: 3
                    });
                }
            });
        },
        getActivityList: function getActivityList() {
            var _self = this;
            this.GET('profile/activity/' + _self.actLimit + '?page=1', this.token, function (data) {
                if (data.code == 200) {
                    var result = data.result;
                    _self.activity = result;
                } else {
                    modal.toast({
                        message: data.code,
                        duration: 3
                    });
                }
            });
        },
        getPostList: function getPostList() {
            var _self = this;
            this.GET('profile/post/' + _self.postLimit + '?page=1', this.token, function (data) {
                if (data.code == 200) {
                    var result = data.result;
                    _self.posts = result;
                    for (var i = 0; i < result.length; i++) {
                        _self.posts[i].created_at = result[i].created_at.split(' ')[0];
                    }
                } else {
                    modal.toast({
                        message: data.code,
                        duration: 3
                    });
                }
            });
        },
        getVersion: function getVersion() {
            var _this2 = this;

            var _self = this;
            this.GET('version', '', function (data) {
                if (data.code == 200) {
                    var result = data.result;
                    _this2.newVersion = result.version;
                    _this2.compareV();
                } else {
                    modal.toast({
                        message: data.code,
                        duration: 3
                    });
                }
            });
        },
        compareV: function compareV() {
            var cu = this.currentVersion,
                ne = this.newVersion;
            if (ne > cu) {
                this.isNew = true;
            } else {
                this.isNew = false;
            }
            //console.log(this.isNew)
        }
    }
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(112)
)

/* template */
var __vue_template__ = __webpack_require__(113)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/components/Header4.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-75948b96"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "height": "0",
    "paddingTop": "44",
    "display": "flex",
    "backgroundColor": "#000000",
    "opacity": 0
  }
}

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('header5'), _c('scroller', {
    ref: "contentScroller",
    class: ['scroller', _vm.isIpx && _vm.isIpx() ? 'ml-ipx' : '', _vm.isand ? 'android-main-list' : ''],
    attrs: {
      "showScrollbar": "false"
    }
  }, [_c('div', {
    class: ['header', _vm.isIpx && _vm.isIpx() ? 'h-ipx' : '']
  }, [_c('text', {
    staticClass: ["i-name"]
  }, [_vm._v(_vm._s(_vm.profile.name))]), _c('div', {
    staticClass: ["aboutBox"],
    on: {
      "click": function($event) {
        _vm.jump('/about')
      }
    }
  }, [_c('text', {
    staticClass: ["about-icon", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["about-text"]
  }, [_vm._v("关于")]), (_vm.isNew) ? _c('text', {
    staticClass: ["notice-dot"]
  }) : _vm._e()])]), _c('div', {
    staticClass: ["fbs"]
  }, [_c('div', {
    staticClass: ["s-box", "cell-button"]
  }, [_c('div', {
    staticClass: ["box-wrap"]
  }, [_c('div', {
    staticClass: ["box-tlt", "border-bottom"],
    on: {
      "click": function($event) {
        _vm.jump('/bookshelf')
      }
    }
  }, [_vm._m(0), _c('text', {
    staticClass: ["i-box-in", "iconfont"]
  }, [_vm._v("")])]), _c('div', {
    staticClass: ["box-cont", "box-books"]
  }, _vm._l((_vm.books), function(book, i) {
    return _c('div', {
      staticClass: ["box-cont-item", "box-book-item"],
      on: {
        "click": function($event) {
          _vm.jump('/bookDetail/' + book.id + '/' + book.book_name)
        }
      }
    }, [_c('image', {
      staticClass: ["box-cont-img", "box-book-img"],
      attrs: {
        "src": book.book_cover,
        "resize": "cover"
      }
    }), _c('text', {
      staticClass: ["box-cont-text", "box-book-text"]
    }, [_vm._v(_vm._s(book.book_name))])])
  }))])]), _c('div', {
    staticClass: ["s-box", "cell-button"]
  }, [_c('div', {
    staticClass: ["box-wrap", "mt0"]
  }, [_c('div', {
    staticClass: ["box-tlt", "border-bottom"],
    on: {
      "click": function($event) {
        _vm.jump('/mypost')
      }
    }
  }, [_vm._m(1), _c('text', {
    staticClass: ["i-box-in", "iconfont"]
  }, [_vm._v("")])]), _c('div', {
    staticClass: ["box-cont", "box-post"]
  }, _vm._l((_vm.posts), function(post) {
    return _c('div', {
      staticClass: ["box-cont-item", "box-post-item"],
      on: {
        "click": function($event) {
          _vm.jump('/themeDetail/' + post.id)
        }
      }
    }, [_c('text', {
      staticClass: ["box-cont-text", "box-post-text"]
    }, [_vm._v(_vm._s(post.title))]), _c('text', {
      staticClass: ["box-post-time"]
    }, [_vm._v(_vm._s(post.created_at))])])
  }))])])])]), _c('tab-bar', {
    attrs: {
      "router": "personal"
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["icon-box"]
  }, [_c('text', {
    staticClass: ["item-icon", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["box-txt"]
  }, [_vm._v("我的书架")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["icon-box"]
  }, [_c('text', {
    staticClass: ["item-icon", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["box-txt"]
  }, [_vm._v("我的帖子")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(116)
)

/* script */
__vue_exports__ = __webpack_require__(117)

/* template */
var __vue_template__ = __webpack_require__(118)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/views/comment.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6b2bb487"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = {
  "commentBox": {
    "marginTop": "86",
    "borderBottomWidth": "1",
    "borderBottomColor": "#009FF0",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "starText": {
    "marginRight": "40",
    "fontSize": "32",
    "color": "#333333"
  },
  "starBox": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "star": {
    "fontSize": "60",
    "color": "#FFA500",
    "marginRight": "30",
    "lineHeight": "60"
  },
  "textarea": {
    "placeholderColor": "#d8d8d8",
    "fontSize": "34",
    "width": "700",
    "marginLeft": "20",
    "marginRight": "20",
    "paddingTop": "20",
    "paddingBottom": "20",
    "color": "#666666",
    "height": "430"
  }
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _Header = __webpack_require__(1);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
var storage = weex.requireModule('storage');
exports.default = {
  name: 'comment',
  components: {
    'header2': _Header2.default
  },
  data: function data() {
    var _self = this;
    return {
      leftBtn: {
        name: "&#xe69a;"
      },
      score: null,
      comment: '',
      bookID: '',
      token: '',
      rightBtn: {
        name: '发表',
        fun: function fun() {
          if (!_self.score) {
            modal.alert({
              message: '请评分',
              okTitle: '知道了'
            });
            return false;
          }
          if (!_self.comment.length) {
            modal.alert({
              message: '请填写评论内容',
              okTitle: '知道了'
            });
            return false;
          }
          var data = JSON.stringify({ "score": _self.score, "content": _self.comment });
          _self.POST('books/comment/' + _self.bookID, _self.token, data, function (data) {
            if (data.code == 200) {
              modal.toast({
                message: data.message + ",请等待审核",
                duration: 1
              });
              _self.$router.go(-1);
            } else {
              modal.toast({
                message: data.message,
                duration: 3
              });
            }
          });
        }
      },
      currentStar: ['☆', '☆', '☆', '☆', '☆'],
      stars: [['★', '☆', '☆', '☆', '☆'], ['★', '★', '☆', '☆', '☆'], ['★', '★', '★', '☆', '☆'], ['★', '★', '★', '★', '☆'], ['★', '★', '★', '★', '★']]
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.bookID = this.$route.params.index;
    storage.getItem('token', function (event) {
      _this.token = event.data;
    });
  },

  methods: {
    vote: function vote(index) {
      this.currentStar = this.stars[index];
      this.score = Number(index + 1);
    },
    oninput: function oninput(event) {
      this.comment = event.value;
    },
    focus: function focus() {
      this.$refs.textarea.focus();
    }
  }
};

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('header2', {
    attrs: {
      "title": "写评论",
      "leftBtn": _vm.leftBtn,
      "rightBtn": _vm.rightBtn
    }
  }), _c('div', {
    staticClass: ["commentBox"]
  }, [_c('text', {
    staticClass: ["starText"]
  }, [_vm._v("评分")]), _c('div', {
    staticClass: ["starBox"]
  }, _vm._l((_vm.currentStar), function(i, item) {
    return _c('text', {
      staticClass: ["star"],
      on: {
        "click": function($event) {
          _vm.vote(item)
        }
      }
    }, [_vm._v(_vm._s(i))])
  }))]), _c('div', {
    staticClass: ["textBox"]
  }, [_c('textarea', {
    ref: "textarea",
    staticClass: ["textarea"],
    attrs: {
      "placeholder": "写下你的评论吧~",
      "disabled": "false",
      "autofocus": "true"
    },
    on: {
      "input": _vm.oninput,
      "click": _vm.focus
    }
  })])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "width": "750",
    "height": "1345",
    "position": "absolute",
    "top": 0,
    "left": 0,
    "backgroundColor": "#f8f8f8"
  },
  "wrapper-login": {
    "marginTop": "50",
    "marginLeft": "30",
    "width": "690",
    "alignItems": "center"
  },
  "text": {
    "fontSize": "30",
    "color": "#666666"
  },
  "input-box": {
    "width": "690",
    "paddingLeft": "30",
    "paddingRight": "30",
    "marginTop": "40",
    "backgroundColor": "#ffffff",
    "borderColor": "#f0f0f0",
    "borderWidth": "1"
  },
  "input-style": {
    "width": "630",
    "fontSize": "34",
    "color": "#666666",
    "paddingTop": "40",
    "paddingBottom": "40"
  },
  "bt": {
    "borderTopWidth": "1",
    "borderBottomWidth": "0",
    "borderRightWidth": "0",
    "borderLeftWidth": "0",
    "borderColor": "#f0f0f0"
  },
  "login-btn": {
    "width": "690",
    "textAlign": "center",
    "fontSize": "34",
    "color": "#ffffff",
    "backgroundColor": "#009ffc",
    "height": "80",
    "lineHeight": "80",
    "marginTop": "80",
    "borderRadius": "2"
  },
  "box": {
    "width": "500",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-around",
    "marginTop": "40"
  },
  "btn": {
    "color": "#009FF0",
    "fontSize": "30"
  },
  "forget-psw": {
    "color": "#009FF0",
    "fontSize": "30"
  },
  "mt30": {
    "marginTop": "40"
  }
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var stream = weex.requireModule('stream');
var storage = weex.requireModule('storage');
exports.default = {
    data: function data() {
        return {
            phone: '',
            password: ''
        };
    },
    created: function created() {
        //weex.requireModule('PDFModule').readPDF("book id", "token");
    },

    methods: {
        signIn: function signIn() {
            var _self = this;
            var ph = this.phone,
                pw = this.password;
            if (!ph.length) {
                modal.toast({
                    message: "请输入手机号码",
                    duration: 1
                });
                return false;
            }
            if (!pw.length) {
                modal.toast({
                    message: "请输入密码",
                    duration: 1
                });
            }
            this.POST('login?phone=' + ph + '&password=' + pw, '', '', function (data) {
                if (data.code == 200) {
                    var result = data.result;
                    storage.setItem('token', result.api_token);
                    _self.$router.push('/home');
                } else {
                    modal.toast({
                        message: data.message,
                        duration: 3
                    });
                }
            });
            // stream.fetch({
            //     method: 'POST',
            //     type: 'json',
            //     url: 'http://zl.senseitgroup.com/app/login?phone='+ph+'&password='+pw
            //     //url: '/json/login?phone=17327486666&password=123456'
            // }, function(res){
            //     if(res.data.code == 200){
            //         let result = res.data.result;
            //         storage.setItem('token',result.api_token);
            //         _self.$router.push('/home');
            //     }else{
            //         modal.toast({
            //             message: res.data.message,
            //             duration: 3
            //         })
            //     }

            // })
        },
        jumpTo: function jumpTo(_url) {
            this.$router.push(_url);
        },
        focus: function focus() {
            this.$refs.tel.focus();
        }
    }
};

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('div', {
    staticClass: ["wrapper-login"]
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("登录账户")]), _c('div', {
    staticClass: ["input-box"]
  }, [_c('input', {
    ref: "tel",
    staticClass: ["input-style"],
    attrs: {
      "type": "tel",
      "autofocus": "true",
      "placeholder": "手机号",
      "value": (_vm.phone)
    },
    on: {
      "click": function($event) {
        _vm.focus()
      },
      "input": function($event) {
        _vm.phone = $event.target.attr.value
      }
    }
  }), _c('input', {
    staticClass: ["input-style", "bt"],
    attrs: {
      "type": "password",
      "placeholder": "密码",
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        _vm.password = $event.target.attr.value
      }
    }
  })]), _c('text', {
    staticClass: ["login-btn"],
    on: {
      "click": function($event) {
        _vm.signIn()
      }
    }
  }, [_vm._v("登录")]), _c('div', {
    staticClass: ["box"]
  }, [_c('text', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.jumpTo('/register')
      }
    }
  }, [_vm._v("注册")]), _c('text', {
    staticClass: ["forget-psw"],
    on: {
      "click": function($event) {
        _vm.jumpTo('/forgetPSW')
      }
    }
  }, [_vm._v("忘记密码？")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(123)
)

/* script */
__vue_exports__ = __webpack_require__(124)

/* template */
var __vue_template__ = __webpack_require__(129)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/views/register.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-67b4deab"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "width": "750",
    "height": "1345",
    "position": "absolute",
    "top": 0,
    "left": 0,
    "backgroundColor": "#f8f8f8"
  },
  "main-list": {
    "height": "1245"
  },
  "wrapper-login": {
    "marginTop": "50",
    "marginLeft": "30",
    "width": "690",
    "alignItems": "center",
    "paddingBottom": "100"
  },
  "text": {
    "fontSize": "30",
    "color": "#8d8d8d"
  },
  "input-box": {
    "width": "690",
    "paddingLeft": "30",
    "paddingRight": "30",
    "marginTop": "40",
    "backgroundColor": "#ffffff",
    "borderColor": "#f0f0f0",
    "borderWidth": "1"
  },
  "input-style": {
    "width": "630",
    "fontSize": "34",
    "color": "#666666",
    "paddingTop": "40",
    "paddingBottom": "40"
  },
  "bt": {
    "borderTopWidth": "1",
    "borderBottomWidth": "0",
    "borderRightWidth": "0",
    "borderLeftWidth": "0",
    "borderColor": "#f0f0f0"
  },
  "validate": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "validate-input": {
    "width": "460"
  },
  "validate-btn": {
    "borderLeftWidth": "1",
    "borderColor": "#f0f0f0",
    "paddingLeft": "20",
    "width": "170",
    "height": "60"
  },
  "v-btn": {
    "fontSize": "28",
    "color": "#009ffc",
    "lineHeight": "60",
    "textAlign": "center"
  },
  "login-btn": {
    "width": "690",
    "textAlign": "center",
    "fontSize": "34",
    "color": "#ffffff",
    "backgroundColor": "#009ffc",
    "height": "80",
    "lineHeight": "80",
    "marginTop": "80",
    "borderRadius": "2"
  },
  "box": {
    "width": "500",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "marginTop": "40"
  },
  "btn": {
    "color": "#009FF0",
    "fontSize": "30"
  },
  "info-box": {
    "marginTop": "50",
    "marginLeft": "20",
    "marginRight": "20",
    "backgroundColor": "#ffffff",
    "paddingTop": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "info-text": {
    "fontSize": "30",
    "color": "#8d8d8d"
  }
}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcCountdown = __webpack_require__(6);

var _wxcCountdown2 = _interopRequireDefault(_wxcCountdown);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var stream = weex.requireModule('stream');
var storage = weex.requireModule('storage');
exports.default = {
    data: function data() {
        return {
            number: '',
            name: '',
            phone: '',
            code: '',
            password: '',
            before: true,
            TIME: 1000
        };
    },

    components: { WxcCountdown: _wxcCountdown2.default },
    watch: {
        // before:function(val,oldVal){
        //     console.log('new: %s, old: %s', val, oldVal)
        // }
    },
    methods: {
        signIn: function signIn() {
            var _self = this;
            var nu = this.number,
                na = this.name,
                ph = this.phone,
                cd = this.code,
                pw = this.password;
            if (!nu.length) {
                modal.toast({
                    message: "请输入学号(工号)",
                    duration: 1
                });
                return false;
            }
            if (!na.length) {
                modal.toast({
                    message: "请输入姓名",
                    duration: 1
                });
                return false;
            }
            if (!ph.length || !this.checkPhone()) {
                modal.toast({
                    message: "请输入11位手机号码",
                    duration: 1
                });
                return false;
            }
            if (!cd.length || !/^\d{6}\b/.test(cd)) {
                modal.toast({
                    message: "请输入6位验证码",
                    duration: 1
                });
                return false;
            }
            if (!pw.length) {
                modal.toast({
                    message: "请输入密码",
                    duration: 1
                });
                return false;
            }

            var data = JSON.stringify({ "phone": ph, "code": cd, "password": pw, "accid": nu, "name": na });
            this.POST('register', '', data, function (data) {
                if (data.code == 200) {
                    //注册成功
                    var result = data.result;
                    modal.toast({
                        message: data.message + "，请登陆",
                        duration: 1
                    });
                    _self.$router.push('/login');
                } else if (data.code == 3001) {
                    //已经注册过
                    modal.toast({
                        message: data.message,
                        duration: 1
                    });
                } else {
                    modal.toast({
                        message: data.message,
                        duration: 1
                    });
                }
            });

            // stream.fetch({
            //     method: 'POST',
            //     type: 'json',
            //     headers:{
            //         "Content-Type":"application/json"
            //     },
            //     body:JSON.stringify({"phone":ph,"code":cd,"password":pw,"accid":nu,"name":na}),
            //     url: 'http://zl.senseitgroup.com/app/register'
            // }, function(res){
            //     if(res.data.code == 200){
            //         //注册成功
            //         let result = res.data.result;
            //         modal.toast({
            //             message: res.data.message+"，请登陆",
            //             duration: 1
            //         })
            //         _self.$router.push('/login');
            //     }else if(res.data.code == 3001){
            //         //已经注册过
            //         modal.toast({
            //             message: res.data.message,
            //             duration: 3
            //         })
            //     }else{
            //         modal.toast({
            //             message: res.data.message,
            //             duration: 3
            //         })
            //     }
            // })
        },
        validate: function validate() {
            var ph = this.phone;
            var _self = this;
            if (!ph.length) {
                modal.toast({
                    message: "请输入手机号码",
                    duration: 1
                });
                return false;
            }

            this.POST('sendCode?phone=' + ph, '', '', function (data) {
                if (data.code == 200) {
                    var result = data.result;
                    _self.before = false;
                    _self.TIME = new Date().getTime() + 60000;
                    // modal.toast({
                    //     message: data.message,
                    //     duration: 1
                    // })
                } else {
                    modal.toast({
                        message: data.message,
                        duration: 1
                    });
                }
            });

            // stream.fetch({
            //     method: 'POST',
            //     type: 'json',
            //     url: 'http://zl.senseitgroup.com/app/sendCode?phone='+ph
            // }, function(res){
            //     if(res.data.code == 200){
            //         let result = res.data.result;
            //         _self.before = false;
            //         _self.TIME=new Date().getTime() + 60000
            //         modal.toast({
            //             message: res.data.message,
            //             duration: 3
            //         })
            //     }else{
            //         modal.toast({
            //             message: res.data.message,
            //             duration: 3
            //         })
            //     }

            // })
        },
        onCompleted: function onCompleted() {
            this.before = true;
        },
        focus: function focus() {
            this.$refs.tel.focus();
        },
        jumpTo: function jumpTo(_url) {
            this.$router.push(_url);
        },
        checkPhone: function checkPhone() {
            var phone = this.phone;
            if (/^1[34578]\d{9}$/.test(phone)) {
                return true;
            } else {
                return false;
            }
        }
    }
};

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(126)
)

/* script */
__vue_exports__ = __webpack_require__(127)

/* template */
var __vue_template__ = __webpack_require__(128)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/node_modules/weex-ui/packages/wxc-countdown/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-76d077fe"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = {
  "time-dot-wrap": {
    "flexDirection": "row",
    "alignItems": "center"
  }
}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    // 时间戳
    time: {
      type: Number,
      default: 1501200000000
    },
    // 倒计时的间隔,单位为"毫秒"
    interval: {
      type: Number,
      default: 1000
    },
    tpl: {
      type: String,
      default: '{h}:{m}:{s}'
    },
    // 最外层包裹 style
    timeWrapStyle: Object,
    // 数字盒子 style
    timeBoxStyle: Object,
    // : 盒子Style
    dotBoxStyle: Object,
    // 数字文字 Style
    timeTextStyle: Object,
    // : 文字Style
    dotTextStyle: Object
  },
  data: function data() {
    return {
      NOW_DATE: new Date().getTime(),
      completed: false,
      tplIndexOfDays: -1,
      tplIndexOfHours: -1,
      tplIndexOfMinutes: -1,
      tplIndexOfSeconds: -1,
      TIME_WRAP_STYLE: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '12px',
        marginRight: '12px'
      },
      TIME_BOX_STYLE: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333',
        height: '30px',
        width: '30px'
      },
      DOT_BOX_STYLE: {
        width: '18px',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      TIME_TEXT_STYLE: {
        color: '#FFCC80',
        fontSize: '18px'
      },
      DOT_TEXT_STYLE: {
        color: '#333333',
        fontSize: '18px',
        fontWeight: 'bold'
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    setInterval(function () {
      _this.NOW_DATE = new Date().getTime();
    }, this.interval);

    this.tplIndexOfDays = this.tpl.indexOf('d');
    this.tplIndexOfHours = this.tpl.indexOf('h');
    this.tplIndexOfMinutes = this.tpl.indexOf('m');
    this.tplIndexOfSeconds = this.tpl.indexOf('s');
  },

  computed: {
    mrTimeWrapStyle: function mrTimeWrapStyle() {
      return _extends({}, this.TIME_WRAP_STYLE, this.timeWrapStyle);
    },
    mrTimeBoxStyle: function mrTimeBoxStyle() {
      return _extends({}, this.TIME_BOX_STYLE, this.timeBoxStyle);
    },
    mrDotBoxStyle: function mrDotBoxStyle() {
      return _extends({}, this.DOT_BOX_STYLE, this.dotBoxStyle);
    },
    mrTimeTextStyle: function mrTimeTextStyle() {
      return _extends({}, this.TIME_TEXT_STYLE, this.timeTextStyle);
    },
    mrDotTextStyle: function mrDotTextStyle() {
      return _extends({}, this.DOT_TEXT_STYLE, this.dotTextStyle);
    },
    countDownData: function countDownData() {
      var timeSpacing = this.time - this.NOW_DATE;

      // 倒计时结束了
      if (timeSpacing < 0) {
        if (this.completed === false) {
          this.$emit('wxcOnComplete');
        }
        this.completed = true;
        return {
          day: '00',
          hour: '00',
          minute: '00',
          second: '00'
        };
      }

      var day = 0;
      var hour = 0;
      var minute = 0;
      var second = 0;

      if (this.tplIndexOfDays !== -1) {
        day = Math.floor(timeSpacing / (24 * 60 * 60 * 1000));
        hour = Math.floor(timeSpacing % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
      } else {
        day = 0;
        hour = Math.floor(timeSpacing / (60 * 60 * 1000));
      }

      if (this.tplIndexOfHours !== -1) {
        hour = Math.floor((timeSpacing - day * 24 * 60 * 60 * 1000) / (60 * 60 * 1000));
        minute = Math.floor((timeSpacing - day * 24 * 60 * 60 * 1000) % (60 * 60 * 1000) / (60 * 1000));
      } else {
        hour = 0;
        minute = Math.floor((timeSpacing - day * 24 * 60 * 60 * 1000) / (60 * 1000));
      }

      if (this.tplIndexOfMinutes !== -1) {
        minute = Math.floor((timeSpacing - day * 24 * 60 * 60 * 1000 - hour * 60 * 60 * 1000) / (60 * 1000));
        second = Math.floor((timeSpacing - day * 24 * 60 * 60 * 1000 - hour * 60 * 60 * 1000) % (60 * 1000) / 1000);
      } else {
        minute = 0;
        second = Math.floor((timeSpacing - day * 24 * 60 * 60 * 1000 - hour * 60 * 60 * 1000) / 1000);
      }

      return {
        day: day < 10 ? '0' + day : '' + day,
        hour: hour < 10 ? '0' + hour : '' + hour,
        minute: minute < 10 ? '0' + minute : '' + minute,
        second: second < 10 ? '0' + second : '' + second
      };
    }
  },

  methods: {
    getDot: function getDot(prevTagIndex) {
      var nextTagIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

      if (nextTagIndex === -1) {
        return this.tpl.slice(prevTagIndex + 2);
      }
      return this.tpl.slice(prevTagIndex + 2, nextTagIndex - 1);
    }
  }
};

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    style: _vm.mrTimeWrapStyle
  }, [_c('div', {
    staticClass: ["time-dot-wrap"]
  }, [(_vm.tplIndexOfDays !== -1) ? _c('div', {
    style: _vm.mrTimeBoxStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": ((_vm.countDownData.day) + "天")
    }
  }, [_c('text', {
    style: _vm.mrTimeTextStyle
  }, [_vm._v(_vm._s(_vm.countDownData.day))])]) : _vm._e(), (_vm.tplIndexOfDays !== -1) ? _c('div', {
    style: _vm.mrDotBoxStyle,
    attrs: {
      "ariaHidden": true
    }
  }, [_c('text', {
    style: _vm.mrDotTextStyle
  }, [_vm._v(_vm._s(_vm.getDot(_vm.tplIndexOfDays, _vm.tplIndexOfHours)))])]) : _vm._e(), (_vm.tplIndexOfHours !== -1) ? _c('div', {
    style: _vm.mrTimeBoxStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": ((_vm.countDownData.hour) + "时")
    }
  }, [_c('text', {
    style: _vm.mrTimeTextStyle
  }, [_vm._v(_vm._s(_vm.countDownData.hour))])]) : _vm._e(), (_vm.tplIndexOfHours !== -1) ? _c('div', {
    style: _vm.mrDotBoxStyle,
    attrs: {
      "ariaHidden": true
    }
  }, [_c('text', {
    style: _vm.mrDotTextStyle
  }, [_vm._v(_vm._s(_vm.getDot(_vm.tplIndexOfHours, _vm.tplIndexOfMinutes)))])]) : _vm._e(), (_vm.tplIndexOfMinutes !== -1) ? _c('div', {
    style: _vm.mrTimeBoxStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": ((_vm.countDownData.minute) + "分")
    }
  }, [_c('text', {
    style: _vm.mrTimeTextStyle
  }, [_vm._v(_vm._s(_vm.countDownData.minute))])]) : _vm._e(), (_vm.tplIndexOfMinutes !== -1) ? _c('div', {
    style: _vm.mrDotBoxStyle,
    attrs: {
      "ariaHidden": true
    }
  }, [_c('text', {
    style: _vm.mrDotTextStyle
  }, [_vm._v(_vm._s(_vm.getDot(_vm.tplIndexOfMinutes, _vm.tplIndexOfSeconds)))])]) : _vm._e(), (_vm.tplIndexOfSeconds !== -1) ? _c('div', {
    style: _vm.mrTimeBoxStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": ((_vm.countDownData.second) + "秒")
    }
  }, [_c('text', {
    style: _vm.mrTimeTextStyle
  }, [_vm._v(_vm._s(_vm.countDownData.second))])]) : _vm._e(), (_vm.tplIndexOfSeconds !== -1) ? _c('div', {
    style: _vm.mrDotBoxStyle,
    attrs: {
      "ariaHidden": true
    }
  }, [_c('text', {
    style: _vm.mrDotTextStyle
  }, [_vm._v(_vm._s(_vm.getDot(_vm.tplIndexOfSeconds, -1)))])]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('scroller', {
    staticClass: ["main-list"]
  }, [_c('refresher'), _c('div', {
    staticClass: ["wrapper-login"]
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("注册账户")]), _c('div', {
    staticClass: ["input-box"]
  }, [_c('input', {
    ref: "number",
    staticClass: ["input-style"],
    attrs: {
      "type": "tel",
      "autofocus": "true",
      "placeholder": "学号(工号)",
      "value": (_vm.number)
    },
    on: {
      "input": function($event) {
        _vm.number = $event.target.attr.value
      }
    }
  }), _c('input', {
    ref: "name",
    staticClass: ["input-style", "bt"],
    attrs: {
      "type": "text",
      "placeholder": "姓名",
      "value": (_vm.name)
    },
    on: {
      "input": function($event) {
        _vm.name = $event.target.attr.value
      }
    }
  }), _c('input', {
    ref: "tel",
    staticClass: ["input-style", "bt"],
    attrs: {
      "type": "tel",
      "placeholder": "手机号",
      "value": (_vm.phone)
    },
    on: {
      "input": function($event) {
        _vm.phone = $event.target.attr.value
      }
    }
  }), _c('div', {
    staticClass: ["validate", "bt"]
  }, [_c('input', {
    staticClass: ["input-style", "validate-input"],
    attrs: {
      "type": "text",
      "placeholder": "验证码",
      "value": (_vm.code)
    },
    on: {
      "input": function($event) {
        _vm.code = $event.target.attr.value
      }
    }
  }), _c('div', {
    staticClass: ["validate-btn"]
  }, [(_vm.before) ? _c('text', {
    staticClass: ["v-btn"],
    on: {
      "click": function($event) {
        _vm.validate()
      }
    }
  }, [_vm._v("获取验证码")]) : _c('wxc-countdown', {
    style: {
      marginTop: '0px',
      justifyContent: 'center'
    },
    attrs: {
      "interval": 1000,
      "tpl": "{s}秒",
      "timeBoxStyle": {
        backgroundColor: '#ffffff',
        height: '60px'
      },
      "timeTextStyle": {
        fontSize: '28px',
        color: '#8d8d8d'
      },
      "dotTextStyle": {
        color: '#8d8d8d',
        fontSize: '28px',
        justifyContent: 'center'
      },
      "dotBoxStyle": {
        width: '48px',
        height: '60px'
      },
      "time": _vm.TIME
    },
    on: {
      "wxcOnComplete": _vm.onCompleted
    }
  })], 1)]), _c('input', {
    staticClass: ["input-style", "bt"],
    attrs: {
      "type": "password",
      "placeholder": "密码",
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        _vm.password = $event.target.attr.value
      }
    }
  })]), _c('text', {
    staticClass: ["login-btn"],
    on: {
      "click": function($event) {
        _vm.signIn()
      }
    }
  }, [_vm._v("注册")]), _c('div', {
    staticClass: ["box"]
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("已有账号，")]), _c('text', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.jumpTo('/login')
      }
    }
  }, [_vm._v("返回登陆")])]), _vm._m(0)])], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["info-box"]
  }, [_c('text', {
    staticClass: ["info-text"]
  }, [_vm._v("注册说明：请输入您的学号（工号）及姓名以验证您为浙江理工大学图书馆的用户。同时，依据国家相关法律网络实名制的要求需要验证您的手机号。\n            ")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(131)
)

/* script */
__vue_exports__ = __webpack_require__(132)

/* template */
var __vue_template__ = __webpack_require__(133)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/views/forgetPSW.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-f4e46062"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "width": "750",
    "height": "1345",
    "position": "absolute",
    "top": 0,
    "left": 0,
    "backgroundColor": "#f8f8f8"
  },
  "wrapper-login": {
    "marginTop": "50",
    "marginLeft": "30",
    "width": "690",
    "alignItems": "center"
  },
  "text": {
    "fontSize": "30",
    "color": "#666666"
  },
  "input-box": {
    "width": "690",
    "paddingLeft": "30",
    "paddingRight": "30",
    "marginTop": "40",
    "backgroundColor": "#ffffff",
    "borderColor": "#f0f0f0",
    "borderWidth": "1"
  },
  "input-style": {
    "width": "630",
    "fontSize": "34",
    "color": "#666666",
    "paddingTop": "40",
    "paddingBottom": "40"
  },
  "bt": {
    "borderTopWidth": "1",
    "borderBottomWidth": "0",
    "borderRightWidth": "0",
    "borderLeftWidth": "0",
    "borderColor": "#f0f0f0"
  },
  "validate": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "validate-input": {
    "width": "460"
  },
  "validate-btn": {
    "width": "170",
    "height": "60",
    "borderLeftWidth": "1",
    "borderColor": "#f0f0f0",
    "paddingLeft": "20"
  },
  "v-btn": {
    "fontSize": "28",
    "color": "#009ffc",
    "lineHeight": "60",
    "textAlign": "center"
  },
  "login-btn": {
    "width": "690",
    "textAlign": "center",
    "fontSize": "34",
    "color": "#ffffff",
    "backgroundColor": "#009ffc",
    "height": "80",
    "lineHeight": "80",
    "marginTop": "80",
    "borderRadius": "2"
  },
  "box": {
    "width": "500",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "marginTop": "40"
  },
  "btn": {
    "color": "#009FF0",
    "fontSize": "30"
  }
}

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcCountdown = __webpack_require__(6);

var _wxcCountdown2 = _interopRequireDefault(_wxcCountdown);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var stream = weex.requireModule('stream');
var storage = weex.requireModule('storage');
exports.default = {
    data: function data() {
        return {
            phone: '',
            code: '',
            password: '',
            password_confirmation: '',
            before: true,
            TIME: 1000
        };
    },

    components: { WxcCountdown: _wxcCountdown2.default },
    watch: {
        // before:function(val,oldVal){
        //     console.log('new: %s, old: %s', val, oldVal)
        // }
    },
    methods: {
        signIn: function signIn() {
            var _self = this;
            var ph = this.phone,
                cd = this.code,
                cpw = this.password_confirmation,
                pw = this.password;
            if (!ph.length) {
                modal.toast({
                    message: "请输入手机号码",
                    duration: 1
                });
                return false;
            }
            if (!cd.length) {
                modal.toast({
                    message: "请输入验证码",
                    duration: 1
                });
                return false;
            }
            if (!pw.length) {
                modal.toast({
                    message: "请输入密码",
                    duration: 1
                });
                return false;
            }
            if (!cpw.length) {
                modal.toast({
                    message: "请输入确认密码",
                    duration: 1
                });
                return false;
            }
            if (cpw != pw) {
                modal.toast({
                    message: "密码不一致",
                    duration: 1
                });
                return false;
            }

            // var data = JSON.stringify({"phone":ph,"code":cd,"password":pw,'password_confirmation':cpw});

            // this.POST('forgetPassword', '', data, data => {
            //     if(res.data.code == 200){
            //         //注册成功
            //         let result = res.data.result;
            //         modal.toast({
            //             message: res.data.message+"，请登陆",
            //             duration: 1
            //         })
            //         _self.$router.push('/login');
            //     }else{
            //         modal.toast({
            //             message: res.data.message,
            //             duration: 3
            //         })
            //     }
            // })

            stream.fetch({
                method: 'POST',
                type: 'json',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "phone": ph, "code": cd, "password": pw, 'password_confirmation': cpw }),
                url: 'http://zl.senseitgroup.com/app/forgetPassword'
            }, function (res) {
                if (res.data.code == 200) {
                    //注册成功
                    var result = res.data.result;
                    modal.toast({
                        message: res.data.message + "，请登陆",
                        duration: 1
                    });
                    _self.$router.push('/login');
                } else {
                    modal.toast({
                        message: res.data.message,
                        duration: 3
                    });
                }
            });
        },
        validate: function validate() {
            var ph = this.phone;
            var _self = this;
            if (!ph.length) {
                modal.toast({
                    message: "请输入手机号码",
                    duration: 1
                });
                return false;
            }

            this.POST('sendCode?phone=' + ph, '', '', function (data) {
                if (data.code == 200) {
                    var result = data.result;
                    _self.before = false;
                    _self.TIME = new Date().getTime() + 60000;
                } else {
                    modal.toast({
                        message: data.message,
                        duration: 1
                    });
                }
            });

            // stream.fetch({
            //     method: 'POST',
            //     type: 'json',
            //     url: 'http://zl.senseitgroup.com/app/sendCode?phone='+ph
            // }, function(res){
            //     if(res.data.code == 200){
            //         let result = res.data.result;
            //         _self.before = false;
            //         _self.TIME=new Date().getTime() + 60000
            //         modal.toast({
            //             message: res.data.message,
            //             duration: 3
            //         })
            //     }else{
            //         modal.toast({
            //             message: res.data.message,
            //             duration: 3
            //         })
            //     }

            // })
        },
        onCompleted: function onCompleted() {
            this.before = true;
        },
        focus: function focus() {
            this.$refs.tel.focus();
        },
        jumpTo: function jumpTo(_url) {
            this.$router.push(_url);
        }
    }
};

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('div', {
    staticClass: ["wrapper-login"]
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("忘记密码")]), _c('div', {
    staticClass: ["input-box"]
  }, [_c('input', {
    ref: "tel",
    staticClass: ["input-style"],
    attrs: {
      "type": "tel",
      "autofocus": "true",
      "placeholder": "手机号",
      "value": (_vm.phone)
    },
    on: {
      "click": _vm.focus,
      "input": function($event) {
        _vm.phone = $event.target.attr.value
      }
    }
  }), _c('div', {
    staticClass: ["validate", "bt"]
  }, [_c('input', {
    staticClass: ["input-style", "validate-input"],
    attrs: {
      "type": "text",
      "placeholder": "验证码",
      "value": (_vm.code)
    },
    on: {
      "input": function($event) {
        _vm.code = $event.target.attr.value
      }
    }
  }), _c('div', {
    staticClass: ["validate-btn"]
  }, [(_vm.before) ? _c('text', {
    staticClass: ["v-btn"],
    on: {
      "click": function($event) {
        _vm.validate()
      }
    }
  }, [_vm._v("获取验证码")]) : _c('wxc-countdown', {
    style: {
      marginTop: '0px',
      justifyContent: 'center'
    },
    attrs: {
      "interval": 1000,
      "tpl": "{s}秒",
      "timeBoxStyle": {
        backgroundColor: '#ffffff',
        height: '60px'
      },
      "timeTextStyle": {
        fontSize: '28px',
        color: '#8d8d8d'
      },
      "dotTextStyle": {
        color: '#8d8d8d',
        fontSize: '28px',
        justifyContent: 'center'
      },
      "dotBoxStyle": {
        width: '48px',
        height: '60px'
      },
      "time": _vm.TIME
    },
    on: {
      "wxcOnComplete": _vm.onCompleted
    }
  })], 1)]), _c('input', {
    staticClass: ["input-style", "bt"],
    attrs: {
      "type": "password",
      "placeholder": "密码",
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        _vm.password = $event.target.attr.value
      }
    }
  }), _c('input', {
    staticClass: ["input-style", "bt"],
    attrs: {
      "type": "password",
      "placeholder": "确认密码",
      "value": (_vm.password_confirmation)
    },
    on: {
      "input": function($event) {
        _vm.password_confirmation = $event.target.attr.value
      }
    }
  })]), _c('text', {
    staticClass: ["login-btn"],
    on: {
      "click": function($event) {
        _vm.signIn()
      }
    }
  }, [_vm._v("重置密码")]), _c('div', {
    staticClass: ["box"]
  }, [_c('text', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.jumpTo('/login')
      }
    }
  }, [_vm._v("返回登陆")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(135)
)

/* script */
__vue_exports__ = __webpack_require__(136)

/* template */
var __vue_template__ = __webpack_require__(137)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/views/resetPSW.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6161920d"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "width": "750",
    "height": "1245",
    "position": "fixed",
    "top": 0,
    "left": 0,
    "backgroundColor": "#ffffff"
  },
  "wrapper-login": {
    "marginTop": "50",
    "marginLeft": "125",
    "width": "500",
    "alignItems": "center"
  },
  "wrapper-step2": {
    "width": "750",
    "height": "1245",
    "position": "absolute",
    "top": 0,
    "left": 0
  },
  "text": {
    "fontSize": "36",
    "color": "#333333"
  },
  "input-style": {
    "width": "400",
    "height": "60",
    "fontSize": "34",
    "color": "#666666",
    "lineHeight": "60",
    "borderWidth": "1",
    "borderColor": "#cccccc",
    "paddingTop": "10",
    "paddingBottom": "10",
    "paddingLeft": "20",
    "paddingRight": "20",
    "marginTop": "40"
  },
  "validate": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "validate-input": {
    "width": "250"
  },
  "validate-btn": {
    "width": "150",
    "borderWidth": "1",
    "borderLeftWidth": "0",
    "borderColor": "#cccccc",
    "height": "60",
    "marginTop": "40"
  },
  "v-btn": {
    "fontSize": "28",
    "color": "#333333",
    "lineHeight": "60",
    "textAlign": "center"
  },
  "login-btn": {
    "width": "400",
    "textAlign": "center",
    "fontSize": "34",
    "color": "#ffffff",
    "backgroundColor": "#008000",
    "height": "60",
    "lineHeight": "60",
    "marginTop": "40",
    "borderRadius": "10"
  },
  "forget-psw": {
    "marginTop": "40",
    "color": "#666666",
    "fontSize": "32",
    "width": "400",
    "textAlign": "center"
  }
}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcCountdown = __webpack_require__(6);

var _wxcCountdown2 = _interopRequireDefault(_wxcCountdown);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var stream = weex.requireModule('stream');
var storage = weex.requireModule('storage');
exports.default = {
    data: function data() {
        return {
            phone: '',
            code: '',
            password: '',
            before: true,
            TIME: 1000,
            step1: true
        };
    },

    components: { WxcCountdown: _wxcCountdown2.default },
    watch: {
        // before:function(val,oldVal){
        //     console.log('new: %s, old: %s', val, oldVal)
        // }
    },
    methods: {
        signIn: function signIn() {
            var _self = this;
            var np = this.password,
                op = this.confirm_password;
            if (!np.length) {
                modal.toast({
                    message: "请输入新密码",
                    duration: 1
                });
                return false;
            }
            if (!op.length) {
                modal.toast({
                    message: "请输入确认密码",
                    duration: 1
                });
                return false;
            }
            stream.fetch({
                method: 'POST',
                type: 'json',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "password": np, "password_confirmation": op }),
                url: 'http://zl.senseitgroup.com/app/resetPassword'
            }, function (res) {
                if (res.data.code == 200) {
                    var result = res.data.result;
                    modal.toast({
                        message: res.data.message,
                        duration: 1
                    });
                    _self.$router.push('/login');
                } else {
                    modal.toast({
                        message: res.data.message,
                        duration: 3
                    });
                }
            });
        },
        validate: function validate() {
            var ph = this.phone;
            var _self = this;
            if (!ph.length) {
                modal.toast({
                    message: "请输入手机号码",
                    duration: 1
                });
                return false;
            }

            stream.fetch({
                method: 'POST',
                type: 'json',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "phone": ph }),
                url: 'http://zl.senseitgroup.com/app/sendCode'
            }, function (res) {
                if (res.data.code == 200) {
                    var result = res.data.result;
                    _self.before = false;
                    _self.TIME = new Date().getTime() + 60000;
                    modal.toast({
                        message: res.data.message,
                        duration: 3
                    });
                } else {
                    modal.toast({
                        message: res.data.message,
                        duration: 3
                    });
                }
            });
        },
        onCompleted: function onCompleted() {
            this.before = true;
        },
        focus: function focus() {
            this.$refs.tel.focus();
        },
        next: function next() {
            var _self = this;

            _self.step1 = false;

            var ph = this.phone,
                cd = this.code;
            if (!ph.length) {
                modal.toast({
                    message: "请输入手机号码",
                    duration: 1
                });
                return false;
            }
            if (!cd.length) {
                modal.toast({
                    message: "请输入验证码",
                    duration: 1
                });
                return false;
            }
            stream.fetch({
                method: 'POST',
                type: 'json',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "phone": ph, "code": cd }),
                url: 'http://zl.senseitgroup.com/app/resetPhoneValidate'
            }, function (res) {
                if (res.data.code == 200) {
                    var result = res.data.result;
                    _self.step1 = false;
                } else {
                    modal.toast({
                        message: res.data.message,
                        duration: 3
                    });
                }
            });
        }
    }
};

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [(_vm.step1) ? _c('div', {
    staticClass: ["wrapper-step1", "wrapper-login"]
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("忘记密码")]), _c('input', {
    ref: "tel",
    staticClass: ["input-style"],
    attrs: {
      "type": "tel",
      "autofocus": "true",
      "placeholder": "手机号",
      "value": (_vm.phone)
    },
    on: {
      "click": _vm.focus,
      "input": function($event) {
        _vm.phone = $event.target.attr.value
      }
    }
  }), _c('div', {
    staticClass: ["validate"]
  }, [_c('input', {
    staticClass: ["input-style", "validate-input"],
    attrs: {
      "type": "text",
      "placeholder": "验证码",
      "value": (_vm.code)
    },
    on: {
      "input": function($event) {
        _vm.code = $event.target.attr.value
      }
    }
  }), _c('div', {
    staticClass: ["validate-btn"]
  }, [(_vm.before) ? _c('text', {
    staticClass: ["v-btn"],
    on: {
      "click": function($event) {
        _vm.validate()
      }
    }
  }, [_vm._v("获取验证码")]) : _c('wxc-countdown', {
    style: {
      marginTop: '0px',
      justifyContent: 'center'
    },
    attrs: {
      "interval": 1000,
      "tpl": "{s}秒",
      "timeBoxStyle": {
        backgroundColor: '#ffffff',
        height: '60px'
      },
      "timeTextStyle": {
        fontSize: '28px',
        color: '#333333'
      },
      "dotTextStyle": {
        color: '#333333',
        fontSize: '28px',
        justifyContent: 'center'
      },
      "dotBoxStyle": {
        width: '48px',
        height: '60px'
      },
      "time": _vm.TIME
    },
    on: {
      "wxcOnComplete": _vm.onCompleted
    }
  })], 1)]), _c('text', {
    staticClass: ["login-btn"],
    on: {
      "click": function($event) {
        _vm.next()
      }
    }
  }, [_vm._v("下一步")])]) : _c('div', {
    staticClass: ["wrapper-step2", "wrapper-login"]
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("忘记密码")]), _c('input', {
    staticClass: ["input-style"],
    attrs: {
      "type": "password",
      "placeholder": "新密码",
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        _vm.password = $event.target.attr.value
      }
    }
  }), _c('input', {
    staticClass: ["input-style"],
    attrs: {
      "type": "password",
      "placeholder": "确认密码",
      "value": (_vm.confirm_password)
    },
    on: {
      "input": function($event) {
        _vm.confirm_password = $event.target.attr.value
      }
    }
  }), _c('text', {
    staticClass: ["login-btn"],
    on: {
      "click": function($event) {
        _vm.signIn()
      }
    }
  }, [_vm._v("重置密码")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(139)
)

/* script */
__vue_exports__ = __webpack_require__(140)

/* template */
var __vue_template__ = __webpack_require__(141)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/views/_empty.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-855c7254"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//

exports.default = {
    name: 'empty',
    created: function created() {
        this.goBack();
    },

    methods: {
        goBack: function goBack() {
            this.$router && this.$router.go(-1);
        }
    }
};

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div')
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(143)
)

/* script */
__vue_exports__ = __webpack_require__(144)

/* template */
var __vue_template__ = __webpack_require__(175)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/views/postCreate.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-cb64a578"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = {
  "commentBox": {
    "marginTop": "86",
    "borderBottomWidth": "1",
    "borderBottomColor": "#009FF0",
    "marginLeft": "20",
    "marginRight": "20"
  },
  "input": {
    "placeholderColor": "#d8d8d8",
    "fontSize": "36",
    "width": "710",
    "height": "80",
    "paddingTop": "20",
    "paddingBottom": "20"
  },
  "textarea": {
    "placeholderColor": "#d8d8d8",
    "fontSize": "34",
    "width": "700",
    "marginLeft": "20",
    "marginRight": "20",
    "paddingTop": "20",
    "paddingBottom": "20",
    "color": "#666666",
    "height": "430"
  }
}

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _Header = __webpack_require__(1);

var _Header2 = _interopRequireDefault(_Header);

var _uploagdImg = __webpack_require__(145);

var _uploagdImg2 = _interopRequireDefault(_uploagdImg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
//
//
//
//
//
//
//
//
//
//
//
//
//

var storage = weex.requireModule('storage');
exports.default = {
  name: 'postCreate',
  components: {
    'uploadImg': _uploagdImg2.default,
    'header2': _Header2.default
  },
  data: function data() {
    var _self = this;
    return {
      leftBtn: {
        name: "<"
      },
      title: '',
      post: '',
      postID: '',
      token: '',
      rightBtn: {
        name: '完成',
        fun: function fun() {
          if (_self.title.length == 0) {
            modal.alert({
              message: '请写帖子标题',
              okTitle: '知道了'
            });
            return false;
          }
          if (_self.post.length == 0) {
            modal.alert({
              message: '请填写帖子内容',
              okTitle: '知道了'
            });
            return false;
          }
          var data = JSON.stringify({ "title": _self.title, "content": _self.post });
          _self.POST('posts/create/' + _self.postID, _self.token, data, function (data) {
            if (data.code == 200) {
              modal.toast({
                message: data.message + ",请等待审核",
                duration: 1
              });
              _self.$router.go(-1);
            } else {
              modal.toast({
                message: data.message,
                duration: 3
              });
            }
          });
        }
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.postID = this.$route.params.index;
    storage.getItem('token', function (event) {
      _this.token = event.data;
    });
  },

  methods: {
    focus: function focus() {
      this.$refs['input'].focus();
    },
    oninput: function oninput(event) {
      this.post = event.value;
    },
    oninputTitle: function oninputTitle(event) {
      this.title = event.value;
    }
  }
};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(146)
)

/* script */
__vue_exports__ = __webpack_require__(147)

/* template */
var __vue_template__ = __webpack_require__(174)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/components/uploagdImg.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0395a225"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _natjs = __webpack_require__(148);

var _natjs2 = _interopRequireDefault(_natjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
//
//
//
//
//

// import GlobalApiConfig from "../api/config/GlobalAipConfig";
// import weexUtils from "../utils/WeexUtils";

var actionSheet = weex.requireModule('actionSheet');
var photo = weex.requireModule('photo');

var nat_camera = weex.requireModule('nat_camera');
var nat_network_transfer = weex.requireModule('nat_network_transfer');

//图片服务器地址
// const PIC_SERVICE_URL = GlobalApiConfig.PIC_SERVICE_URL;
// const PIC_SERVICE_DOMAIN = GlobalApiConfig.PIC_SERVICE_DOMAIN;
var PIC_SERVICE_URL = 'http://www.domain.com/app/file/upload';
var PIC_SERVICE_DOMAIN = 'http://www.imbawin.com/';

exports.default = {
    props: {
        //上传的提示图片
        uploadFileTipImage: {
            type: String,
            default: "http://www.imbawin.com/images/default.png"
        },
        //上传区域宽度
        width: {
            type: Number,
            default: 200
        },
        //上传区域高度
        height: {
            type: Number,
            default: 200
        },
        //是否自动上传
        autoUpload: {
            type: Boolean,
            default: true
        },
        //上传的文件类型
        accept: {
            type: String,
            default: "*"
        },
        //可以选择的最大文件数量
        selectedMaxNum: {
            type: Number,
            default: 1
        },
        type: {
            //上传类型用来区分在一个页面有多个文件上传的时候来区分具体回调操作
            type: String,
            default: "upload"
        },
        orderNumber: {
            type: Number,
            default: 0
        },
        //裁图比例
        proportion: function proportion() {
            return [1, 1];
        },
        // proportion: {
        //     type: Array,
        //     default: [1, 1]
        // },
        crop: {
            default: true
        },
        radius: { //圆角大小
            default: 0
        }
    },
    data: function data() {
        var width = this.width;
        var height = this.height;
        var uploadNativeStyle = {
            width: width + "px",
            height: height + "px"
        };
        return {
            uploadNativeStyle: uploadNativeStyle
        };
    },

    methods: {
        uploadTest: function uploadTest() {
            console.log(_natjs2.default.image.pick);
            _natjs2.default.image.pick({
                limit: 3,
                showCamera: false
            }, function (err, ret) {
                console.log(ret.paths);
            });
        },
        uploadByNative: function uploadByNative(filePath) {
            var _this = this;

            var self = this;
            console.log("上传filePath：" + filePath);
            nat_network_transfer.upload({
                url: PIC_SERVICE_URL,
                path: filePath
            }, function (result) {
                console.log("-result-> " + JSON.stringify(result));

                var _result = result,
                    data = _result.data,
                    ok = _result.ok,
                    progress = _result.progress;

                console.log(data);
                console.log(ok);
                if (progress) {
                    console.log("上传中!");
                    return;
                }
                if (!ok) {
                    console.log("上传失败!");
                    return;
                }
                if (data == null) {
                    console.log("上传无结果!");
                    return;
                }

                var resp = JSON.parse(data);
                var url = resp.url;

                var map = {};
                result = {
                    orderNumber: self.orderNumber,
                    url: PIC_SERVICE_DOMAIN + url
                };
                console.log("map->  " + JSON.stringify(map));
                self.$emit("uploadCallback", {
                    result: result,
                    type: _this.type,
                    callback: function callback() {
                        var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
                        var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

                        self.uploadNativeStyle = {
                            width: width + "px",
                            height: height + "px"
                        };
                    }
                });
            });
        },
        chooseImage: function chooseImage() {
            var _this2 = this;

            //在原生环境下先选择图片
            //http://natjs.com/#/reference/media/image
            var items = [];
            items[0] = { 'type': 0, 'message': '拍照' };
            items[1] = { 'type': 0, 'message': '从相册取' };
            items[2] = { 'type': 1, 'message': '取消' };

            var self = this;
            console.log(actionSheet);
            actionSheet.create({
                'items': items,
                'title': '提示',
                'message': '请选择'
            }, function (ret) {
                var result = ret.result;
                console.log("-图片选择或拍照结果-> " + JSON.stringify(ret));
                if (result !== 'success') {
                    console.log("图片选择或拍照失败");
                    return;
                }
                var _ret$data = ret.data,
                    value = _ret$data.value,
                    index = _ret$data.index;

                var proportion = {};
                if (self.proportion.length === 0) {
                    //表示不限制
                } else {
                    proportion.aspectX = self.proportion[0];
                    proportion.aspectY = self.proportion[1];
                }
                var aspectX = proportion.aspectX,
                    aspectY = proportion.aspectY;

                var flag = index === 0;
                photo.capture(flag, _this2.crop, { aspectX: aspectX, aspectY: aspectY }, function (data) {
                    console.log("local path-> " + data);
                    if (data === undefined || data === null) {
                        modal.toast({
                            message: '图片选择出现异常!',
                            duration: 3
                        });
                        //weexUtils.toast("图片选择出现异常!");
                        return;
                    }
                    self.uploadByNative(data);
                }, function (message) {
                    modal.toast({
                        message: message,
                        duration: 3
                    });
                    //weexUtils.toast(message);
                });
            });
        },
        uploadImage: function uploadImage(event) {
            this.chooseImage();
        }
    },
    beforeMount: function beforeMount() {
        console.log("this.rudius-> " + this.radius);
        if (this.radius > 0) {
            this.uploadNativeStyle.borderRadius = this.radius + "px";
        }
    }
};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Nat = {};

if (weex && weex.requireModule || typeof __weex_define__ === 'function') {
	var camera = __webpack_require__(149);
	var communication = __webpack_require__(150);
	var geolocation = __webpack_require__(151);
	var media = __webpack_require__(152);
	var modal = __webpack_require__(156);
	var recorder = __webpack_require__(157);
	var network = __webpack_require__(158);
	var sensor = __webpack_require__(161);
	var device = __webpack_require__(164);
	var Navigator = __webpack_require__(171);
	var alipay = __webpack_require__(172);
	var wechat = __webpack_require__(173);

	// camera
	if (camera) {
		Nat.camera = camera;
	}

	// communication
	if (communication) {
		Nat.call = communication.call;
		Nat.sms = communication.sms;
		Nat.mail = communication.mail;
	}

	// geolocation
	if (geolocation) {
		Nat.geolocation = geolocation;
	}

	// media
	if (media) {
		Nat.audio = media.audio;
		Nat.image = media.image;
		Nat.video = media.video;
	}

	// recorder
	if (recorder) {
		Nat.recorder = recorder;
	}

	// modal
	if (modal) {
		Nat.alert = modal.alert;
		Nat.confirm = modal.confirm;
		Nat.prompt = modal.prompt;
		Nat.toast = modal.toast;
		Nat.actionSheet = modal.actionSheet;
	}

	// network
	if (network) {
		Nat.fetch = network.stream.fetch;
		Nat.download = network.transfer.download;
		Nat.upload = network.transfer.upload;
		Nat.websocket = network.websocket;
	}

	// sensor
	if (sensor) {
		Nat.accelerometer = sensor.accelerometer;
		Nat.compass = sensor.compass;
	}

	// device
	if (device) {
		Nat.device = device.info;
		Nat.battery = device.battery;
		Nat.network = device.network;
		Nat.screen = device.screen;
		Nat.vibrate = device.vibration.vibrate;
		Nat.volume = device.volume;
	}

	// navigator
	if (Navigator) {
		Nat.navigator = Navigator;
	}

	// alipay
	if (alipay) {
		Nat.alipay = alipay;
	}

	// wechat
	if (wechat) {
		Nat.wechat = wechat;
	}
}

module.exports = Nat;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var camera = void 0;

if (weex && weex.requireModule) {
	camera = weex.requireModule('nat/camera');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		camera = __weex_require__('@weex-module/nat/camera');
	});
}

// launch

var launch = function launch(opts) {
	camera.launch();
};

// captureImage (snap)

var captureImage = function captureImage(opts, cb) {
	opts = opts || {};

	return new Promise(function (resolve, reject) {
		camera.captureImage({
			width: opts.width || null,
			height: opts.height || null
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// captureVideo (record)

var captureVideo = function captureVideo(opts, cb) {
	opts = opts || {};

	return new Promise(function (resolve, reject) {
		camera.captureVideo({
			width: opts.width || null,
			height: opts.height || null
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	launch: launch,
	captureImage: captureImage,
	captureVideo: captureVideo
};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(7);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var communication = void 0;

if (weex && weex.requireModule) {
	communication = weex.requireModule('nat/communication');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		communication = __weex_require__('@weex-module/nat/communication');
	});
}

// call

var call = function call(to, cb) {
	return new Promise(function (resolve, reject) {
		if (!to) {
			reject({
				code: 101040,
				message: 'CALL_MISSING_ARGUMENT'
			});
			return;
		} else if (!_utils2.default.isPhone(to)) {
			reject({
				code: 101050,
				message: 'CALL_INVALID_ARGUMENT',
				details: 'Invalid phone number: ' + to
			});
			return;
		}

		communication.call(to, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// sms

var sms = function sms(to, text, cb) {
	text = text || '';

	if (typeof text === 'function') {
		cb = text;
		text = '';
	}

	return new Promise(function (resolve, reject) {
		if (!to) {
			reject({
				code: 102040,
				message: 'SMS_MISSING_ARGUMENT'
			});
			return;
		}

		if (typeof to === 'string') {
			to = [to];
		}

		for (var i = 0; i < to.length; i++) {
			if (!_utils2.default.isPhone(to[i])) {
				reject({
					code: 102050,
					message: 'SMS_INVALID_ARGUMENT'
				});
				return;
			}
		}

		communication.sms(to, text, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// mail

var mail = function mail(to, opts, cb) {
	opts = opts || {};

	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		if (!to) {
			reject({
				code: 103040,
				message: 'MAIL_MISSING_ARGUMENT'
			});
			return;
		}

		if (typeof to === 'string') {
			to = [to];
		}

		for (var i = 0; i < to.length; i++) {
			if (!_utils2.default.isEmail(to[i])) {
				reject({
					code: 103050,
					message: 'MAIL_INVALID_ARGUMENT',
					details: 'Invalid emaill address: ' + to[i]
				});
				return;
			}
		}

		communication.mail(to, {
			subject: opts.subject || '',
			body: opts.body || '',
			attachments: opts.attachments || null
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

module.exports = {
	call: call,
	sms: sms,
	mail: mail
};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var geolocation = void 0;

if (weex && weex.requireModule) {
	geolocation = weex.requireModule('nat/geolocation');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		geolocation = __weex_require__('@weex-module/nat/geolocation');
	});
}

// get
var get = function get(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		geolocation.get(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// watch

var watch = function watch(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		geolocation.watch({
			maximumAge: opts.maximumAge || 0,
			timeout: opts.timeout || 10000,
			model: opts.model || 'highAccuracy'
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// clear watch

var clearWatch = function clearWatch(cb) {
	return new Promise(function (resolve, reject) {
		geolocation.clearWatch(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	get: get,
	watch: watch,
	clearWatch: clearWatch
};

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _audio = __webpack_require__(153);

var _audio2 = _interopRequireDefault(_audio);

var _image = __webpack_require__(154);

var _image2 = _interopRequireDefault(_image);

var _video = __webpack_require__(155);

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	audio: _audio2.default,
	image: _image2.default,
	video: _video2.default
};

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var audio = void 0;

if (weex && weex.requireModule) {
	audio = weex.requireModule('nat/media/audio');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		audio = __weex_require__('@weex-module/nat/media/audio');
	});
}

// play
var play = function play(path, cb) {
	return new Promise(function (resolve, reject) {
		if (!path) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			});
			return;
		}

		audio.play(path, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// pause

var pause = function pause(cb) {
	return new Promise(function (resolve, reject) {
		audio.pause(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// stop

var stop = function stop(cb) {
	return new Promise(function (resolve, reject) {
		audio.stop(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

module.exports = {
	play: play,
	pause: pause,
	stop: stop
};

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var image = void 0;

if (weex && weex.requireModule) {
	image = weex.requireModule('nat/media/image');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		image = __weex_require__('@weex-module/nat/media/image');
	});
}

// pick
var pick = function pick(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	opts.limit = opts.limit || 1;
	opts.quality = opts.quality && opts.quality < 100 ? parseInt(opts.quality) : 100;

	return new Promise(function (resolve, reject) {
		image.pick({
			limit: opts.limit,
			quality: opts.quality,
			width: opts.width || null,
			height: opts.height || null,
			showCamera: opts.showCamera || false
		}, function (ret) {
			if (ret === null) {
				return;
			}

			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// preview

var preview = function preview(files, opts, cb) {
	opts = opts || {};

	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		if (!files) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			});
			return;
		}

		if (typeof files === 'string') {
			files = [files];
		}

		// style
		if (['dots', 'label', 'none'].indexOf(opts.style) < 0) {
			opts.style = 'dots';
		}

		if (opts.style === 'dots') {
			if (files.length > 9) {
				opts.style = 'label';
			} else if (files.length === 1) {
				opts.style = 'none';
			}
		}

		image.preview(files, {
			current: opts.current,
			style: opts.style
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// info

var info = function info(path, cb) {
	return new Promise(function (resolve, reject) {
		if (!path) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			});
			return;
		}

		image.info(path, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// exif

var exif = function exif(path, cb) {
	return new Promise(function (resolve, reject) {
		if (!path) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			});
			return;
		}

		image.exif(path, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	pick: pick,
	preview: preview,
	info: info,
	exif: exif
};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var video = void 0;

if (weex && weex.requireModule) {
	video = weex.requireModule('nat/media/video');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		video = __weex_require__('@weex-module/nat/media/video');
	});
}

// play
var play = function play(path, cb) {
	return new Promise(function (resolve, reject) {
		if (!path) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			});
			return;
		}

		video.play(path, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// pause

var pause = function pause(cb) {
	return new Promise(function (resolve, reject) {
		video.pause(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// stop

var stop = function stop(cb) {
	return new Promise(function (resolve, reject) {
		video.stop(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

module.exports = {
	play: play,
	pause: pause,
	stop: stop
};

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = __webpack_require__(7);

var modal = void 0;

if (weex && weex.requireModule) {
	modal = weex.requireModule('nat/modal');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		modal = __weex_require__('@weex-module/nat/modal');
	});
}
// alert

var Alert = function Alert(opts, cb) {
	return new Promise(function (resolve, reject) {
		if (typeof opts === 'string') {
			opts = {
				message: opts
			};
		}

		opts = opts || {};

		if (_utils.isNative) {
			modal.alert({
				title: opts.title || '',
				message: opts.message || '',
				okButton: opts.okButton || 'OK'
			}, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve();
					if (typeof cb === 'function') cb(null);
				}
			});
		} else {
			window.alert(opts.message);
			resolve();
		}
	});
};

// confirm

var Confirm = function Confirm(opts, cb) {
	return new Promise(function (resolve, reject) {
		if (typeof opts === 'string') {
			opts = {
				message: opts
			};
		}

		opts = opts || {};

		if (_utils.isNative) {
			modal.confirm({
				title: opts.title || '',
				message: opts.message || '',
				okButton: opts.okButton || 'OK',
				cancelButton: opts.cancelButton || 'Cancel'
			}, function (ret) {
				if (typeof ret === 'undefined') {
					ret = {
						error: 'unknow error, please report to natjs team'
					};
				}

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		} else {
			var c = window.confirm(opts.message);
			resolve(c);
		}
	});
};

// prompt

var Prompt = function Prompt(opts, cb) {
	return new Promise(function (resolve, reject) {
		if (typeof opts === 'string') {
			opts = {
				message: opts
			};
		}

		opts = opts || {};

		if (_utils.isNative) {
			modal.prompt({
				title: opts.title || '',
				message: opts.message || '',
				text: opts.text || '',
				okButton: opts.okButton || 'OK',
				cancelButton: opts.cancelButton || 'Cancel'
			}, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		} else {
			var p = window.prompt(opts.message || '', opts.text || '');

			resolve({
				result: p && p.length,
				data: p
			});
		}
	});
};

// toast

var Toast = function Toast(opts, cb) {
	return new Promise(function (resolve, reject) {
		if (typeof opts === 'string') {
			opts = {
				message: opts
			};
		}

		opts = opts || {};

		// position
		if (['top', 'middle', 'bottom'].indexOf(opts.position) < 0) {
			opts.position = 'bottom';
		}

		if (_utils.isNative) {
			modal.toast({
				message: opts.message || '',
				duration: opts.duration || 3000,
				position: opts.position
			}, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve();
					if (typeof cb === 'function') cb(null);
				}
			});
		} else {
			window.alert(opts.message);
			resolve();
		}
	});
};

var actionSheet = {
	show: function show(opts, cb) {
		return new Promise(function (resolve, reject) {
			opts = opts || {};

			if (!Array.isArray(opts.options) || !opts.options.length) {
				reject({
					code: 145050,
					message: 'ACTIONSHEET_INVALID_ARGUMENT'
				});
				return;
			}

			var options = opts.options.map(function (item) {
				if (['string', 'number'].includes(typeof item === 'undefined' ? 'undefined' : _typeof(item))) {
					return {
						title: item
					};
				}
				return item;
			});

			if (_utils.isNative) {
				modal.showActionSheet({
					title: opts.title,
					options: options
				}, function (ret) {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				});
			} else {
				resolve();
			}
		});
	}
};

module.exports = {
	alert: Alert,
	confirm: Confirm,
	prompt: Prompt,
	toast: Toast,
	actionSheet: actionSheet
};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var recorder = void 0;

if (weex && weex.requireModule) {
	recorder = weex.requireModule('nat/recorder');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		recorder = __weex_require__('@weex-module/nat/recorder');
	});
}

// start
var start = function start(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		// channel
		if (['stereo', 'mono'].indexOf(opts.channel) < 0) {
			opts.channel = 'stereo';
		}

		// quality
		if (['low', 'standard', 'high'].indexOf(opts.quality) < 0) {
			opts.quality = 'standard';
		}

		recorder.start({
			channel: opts.channel,
			quality: opts.quality
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// pause

var pause = function pause(cb) {
	return new Promise(function (resolve, reject) {
		recorder.pause(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// stop

var stop = function stop(cb) {
	return new Promise(function (resolve, reject) {
		recorder.stop(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	start: start,
	pause: pause,
	stop: stop
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stream = __webpack_require__(159);

var _stream2 = _interopRequireDefault(_stream);

var _transfer = __webpack_require__(160);

var _transfer2 = _interopRequireDefault(_transfer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import websocket from './websocket'
// import info from './info'

module.exports = {
	stream: _stream2.default,
	transfer: _transfer2.default
	// websocket,
	// info
};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = __webpack_require__(7);

var stream = void 0;

if (weex && weex.requireModule) {
	stream = weex.requireModule('nat/stream');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		stream = __weex_require__('@weex-module/nat/stream');
	});
}

// fetch

var Fetch = function Fetch(url, opts, cb) {
	return new Promise(function (resolve, reject) {
		if (!url) {
			reject({
				code: 151040,
				message: 'FETCH_MISSING_ARGUMENT'
			});
			return;
		}

		if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object') {
			cb = opts;
			opts = url;
		} else if (typeof opts === 'function') {
			cb = opts;
			opts = {
				url: url
			};
		} else {
			opts = opts || {};
			opts.url = url;
		}

		// headers
		opts.headers = opts.headers || {};

		if (opts.headers['Content-Type'] && /application\/json/.test(opts.headers['Content-Type'])) {
			opts.type = 'json';
		}

		// method
		opts.method = opts.method ? opts.method.toUpperCase() : 'GET';

		if (['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'].indexOf(opts.method) < 0) {
			reject({
				code: 151050,
				message: 'FETCH_INVALID_ARGUMENT',
				details: 'Unsupported request method'
			});
			return;
		}

		// type
		opts.type = opts.type ? opts.type.toLowerCase() : 'json';

		if (['json', 'jsonp', 'text'].indexOf(opts.type) < 0) {
			reject({
				code: 151050,
				message: 'FETCH_INVALID_ARGUMENT',
				details: 'Unsupported request type'
			});
			return;
		}

		// body
		if (_typeof(opts.body) === 'object') {
			if (opts.type === 'json' && opts.method !== 'GET') {
				opts.body = JSON.stringify(opts.body);
			} else {
				reject({
					code: 151050,
					message: 'FETCH_INVALID_ARGUMENT',
					details: 'Request body must be a string'
				});
				return;
			}
		}

		opts = {
			method: opts.method,
			url: opts.url,
			headers: opts.headers,
			type: opts.type,
			body: opts.body
		};

		if (_utils.isNative) {
			stream.fetch(opts, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					if (ret.ok && typeof ret.data === 'string') {
						switch (opts.type) {
							case 'json':
								ret.data = JSON.parse(ret.data);
								break;

							case 'jsonp':
								{
									var matched = ret.data.match(/^\s*?.*\((.*)\)\s*?$/);
									if (matched) {
										ret.data = JSON.parse(matched[1]);
									}
									break;
								}
						}
					}
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		} else {
			var _url = opts.url;
			delete opts.url;

			var _res = {};

			window.fetch(_url, opts).then(function (res) {
				_res = res;

				if (res.ok) {
					if (res.status === 204) {
						return null;
					} else {
						if (opts.type === 'json') {
							return res.json();
						} else {
							return res.text();
						}
					}
				} else {
					throw new Error(res.statusText);
				}
			}).then(function (data) {
				if (opts.type === 'jsonp') {
					var matched = data.match(/^\s*?.*\((.*)\)\s*?$/);
					if (matched) {
						data = JSON.parse(matched[1]);
					}
				}

				resolve({
					data: data,
					headers: _res.headers,
					ok: _res.ok,
					redirected: _res.redirected,
					status: _res.status,
					statusText: _res.statusText
				});
			}).catch(function (e) {
				reject(e);
				if (typeof cb === 'function') cb(e, null);
			});
		}
	});
};

module.exports = {
	fetch: Fetch
};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var transfer = void 0;

if (weex && weex.requireModule) {
	transfer = weex.requireModule('nat/transfer');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		transfer = __weex_require__('@weex-module/nat/transfer');
	});
}

// download

var download = function download(url, opts, hooks, cb) {
	return new Promise(function (resolve, reject) {
		if (!url) {
			reject({
				code: 151040,
				message: 'DOWNLOAD_MISSING_ARGUMENT'
			});
			return;
		}

		if (typeof opts === 'function') {
			cb = opts;
		} else if ((typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) === 'object') {
			if (typeof hooks === 'function') {
				cb = hooks;
			}
			// todo
			if (typeof opts.onProgress === 'function') {
				hooks = opts;
			}
		}

		if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object') {
			opts = url;
		} else {
			opts = opts || {};
			opts.url = url;
		}

		// hooks
		hooks = hooks || {};

		transfer.download({
			url: opts.url,
			headers: opts.headers || {},
			target: opts.target
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else if (ret.progress) {
				if (typeof hooks.onProgress === 'function') {
					hooks.onProgress(ret.progress);
				}
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// upload

var upload = function upload(url, opts, hooks, cb) {
	return new Promise(function (resolve, reject) {
		if (!url) {
			reject({
				code: 151040,
				message: 'UPLOAD_MISSING_ARGUMENT'
			});
			return;
		}

		if (typeof opts === 'function') {
			cb = opts;
		} else if ((typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) === 'object') {
			if (typeof hooks === 'function') {
				cb = hooks;
			}
			// todo
			if (typeof opts.onProgress === 'function') {
				hooks = opts;
			}
		}

		if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object') {
			opts = url;
		} else {
			opts = opts || {};
			opts.url = url;
		}

		// hooks
		hooks = hooks || {};

		// path
		if (!opts.path) {
			reject({
				code: 151040,
				message: 'UPLOAD_MISSING_ARGUMENT'
			});
			return;
		}

		// method
		opts.method = opts.method ? opts.method.toUpperCase() : 'POST';

		if (['POST', 'PUT', 'PATCH'].indexOf(opts.method) < 0) {
			reject({
				code: 151050,
				message: 'UPLOAD_INVALID_ARGUMENT',
				details: 'Unsupported request method'
			});
			return;
		}

		transfer.upload({
			url: opts.url,
			method: opts.method,
			path: opts.path,
			name: opts.name,
			headers: opts.headers || {},
			formData: opts.formData || {},
			mimeType: opts.mimeType
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else if (ret.progress) {
				if (typeof hooks.onProgress === 'function') {
					hooks.onProgress(ret.progress);
				}
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	download: download,
	upload: upload
};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _accelerometer = __webpack_require__(162);

var _accelerometer2 = _interopRequireDefault(_accelerometer);

var _compass = __webpack_require__(163);

var _compass2 = _interopRequireDefault(_compass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	accelerometer: _accelerometer2.default,
	compass: _compass2.default
};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var accelerometer = void 0;

if (weex && weex.requireModule) {
	accelerometer = weex.requireModule('nat/sensor/accelerometer');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		accelerometer = __weex_require__('@weex-module/nat/sensor/accelerometer');
	});
}

// get
var get = function get(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		accelerometer.get(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// watch

var watch = function watch(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		accelerometer.watch({
			interval: opts.interval || 32
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// clear watch

var clearWatch = function clearWatch(cb) {
	return new Promise(function (resolve, reject) {
		accelerometer.clearWatch(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	get: get,
	watch: watch,
	clearWatch: clearWatch
};

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compass = void 0;

if (weex && weex.requireModule) {
	compass = weex.requireModule('nat/sensor/compass');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		compass = __weex_require__('@weex-module/nat/sensor/compass');
	});
}

// get
var get = function get(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		compass.get(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// watch

var watch = function watch(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		compass.watch({
			interval: opts.interval || 32
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// clear watch

var clearWatch = function clearWatch(cb) {
	return new Promise(function (resolve, reject) {
		compass.clearWatch(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	get: get,
	watch: watch,
	clearWatch: clearWatch
};

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _info = __webpack_require__(165);

var _info2 = _interopRequireDefault(_info);

var _battery = __webpack_require__(166);

var _battery2 = _interopRequireDefault(_battery);

var _network = __webpack_require__(167);

var _network2 = _interopRequireDefault(_network);

var _screen = __webpack_require__(168);

var _screen2 = _interopRequireDefault(_screen);

var _vibration = __webpack_require__(169);

var _vibration2 = _interopRequireDefault(_vibration);

var _volume = __webpack_require__(170);

var _volume2 = _interopRequireDefault(_volume);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	info: _info2.default,
	battery: _battery2.default,
	network: _network2.default,
	screen: _screen2.default,
	vibration: _vibration2.default,
	volume: _volume2.default
};

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var device = void 0;

if (weex && weex.requireModule) {
	device = weex.requireModule('nat/device/info');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		device = __weex_require__('@weex-module/nat/device/info');
	});
}

// info

var info = function info(cb) {
	return new Promise(function (resolve, reject) {
		device.info(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	info: info
};

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var battery = void 0;

if (weex && weex.requireModule) {
	battery = weex.requireModule('nat/device/battery');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		battery = __weex_require__('@weex-module/nat/device/battery');
	});
}

// status

var status = function status(cb) {
	return new Promise(function (resolve, reject) {
		battery.status(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	status: status
};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var network = void 0;

if (weex && weex.requireModule) {
	network = weex.requireModule('nat/device/network');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		network = __weex_require__('@weex-module/nat/device/network');
	});
}

// status

var status = function status(cb) {
	return new Promise(function (resolve, reject) {
		network.status(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	status: status
};

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var screen = void 0;

if (weex && weex.requireModule) {
	screen = weex.requireModule('nat/device/screen');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		screen = __weex_require__('@weex-module/nat/device/screen');
	});
}

// brightness

var brightness = {
	get: function get(cb) {
		return new Promise(function (resolve, reject) {
			screen.getBrightness(function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},

	set: function set(brightness, cb) {
		return new Promise(function (resolve, reject) {
			screen.setBrightness(brightness, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	}

	// orientation

};var orientation = {
	status: function status(cb) {
		return new Promise(function (resolve, reject) {
			screen.getOrientation(function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},

	lock: function lock(orientation, cb) {
		if (typeof orientation === 'function') {
			cb = orientation;
			orientation = {};
		}

		// orientation
		if (['portrait-primary', 'portrait-secondary', 'landscape-primary', 'landscape-secondary', 'portrait', // either portrait-primary or portrait-secondary.
		'landscape', // either landscape-primary or landscape-secondary.
		'any' // All orientations are supported (unlocked orientation)
		].indexOf(orientation) < 0) {
			orientation = 'any';
		}

		return new Promise(function (resolve, reject) {
			screen.lockOrientation(orientation, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},

	unlock: function unlock(cb) {
		return new Promise(function (resolve, reject) {
			screen.unlockOrientation(function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	}

	// info

};var info = function info(cb) {
	return new Promise(function (resolve, reject) {
		screen.info(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	brightness: brightness,
	orientation: orientation,
	info: info
};

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var vibration = void 0;

if (weex && weex.requireModule) {
	vibration = weex.requireModule('nat/device/vibration');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		vibration = __weex_require__('@weex-module/nat/device/vibration');
	});
}

// vibrate

var vibrate = function vibrate(time, cb) {
	if (typeof time === 'function') {
		cb = time;
		time = {};
	}

	return new Promise(function (resolve, reject) {
		vibration.vibrate(time || 500, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	vibrate: vibrate
};

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var volume = void 0;

if (weex && weex.requireModule) {
	volume = weex.requireModule('nat/device/volume');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		volume = __weex_require__('@weex-module/nat/device/volume');
	});
}

// get

var get = function get(cb) {
	return new Promise(function (resolve, reject) {
		volume.get(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// set

var set = function set(vol, cb) {
	return new Promise(function (resolve, reject) {
		volume.set(vol, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	get: get,
	set: set
};

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var navigator = void 0;

if (weex && weex.requireModule) {
	navigator = weex.requireModule('nat/navigator');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		navigator = __weex_require__('@weex-module/nat/navigator');
	});
}

// push

var push = function push(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'string') {
		opts = {
			url: opts
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.push(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// pop
var pop = function pop(opts, cb) {
	return new Promise(function (resolve, reject) {
		navigator.pop(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// popToRoot
var popToRoot = function popToRoot(opts, cb) {
	opts = opts || {
		animated: true
	};

	if (typeof opts === 'function') {
		cb = opts;
		opts = {
			animated: true
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.popToRoot(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// setTitle
var setTitle = function setTitle(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'string') {
		opts = {
			title: opts
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.setTitle(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// setColor
var setColor = function setColor(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'string') {
		opts = {
			color: opts
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.setColor(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// setBackgroundColor
var setBackgroundColor = function setBackgroundColor(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'string') {
		opts = {
			backgroundColor: opts
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.setBackgroundColor(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// setFontSize
var setFontSize = function setFontSize(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'string' || typeof opts === 'number') {
		opts = {
			fontSize: opts
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.setFontSize(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// init
var init = function init(opts, cb) {
	opts = opts || {};

	return new Promise(function (resolve, reject) {
		navigator.init(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// hide
var hide = function hide(cb) {
	return new Promise(function (resolve, reject) {
		navigator.hide(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// show
var show = function show(cb) {
	return new Promise(function (resolve, reject) {
		navigator.show(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	push: push,
	pop: pop,
	popToRoot: popToRoot,
	setTitle: setTitle,
	setColor: setColor,
	setBackgroundColor: setBackgroundColor,
	setFontSize: setFontSize,
	init: init,
	hide: hide,
	show: show
};

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alipay = void 0;

if (weex && weex.requireModule) {
	alipay = weex.requireModule('nat/alipay');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		alipay = __weex_require__('@weex-module/nat/alipay');
	});
}

// pay

var pay = function pay(params, cb) {
	return new Promise(function (resolve, reject) {
		if (!params) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT'
			});
			return;
		}

		params = params || {};

		if (!params.info) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT',
				details: '[params.info] is required'
			});
			return;
		}

		if (!params.scheme) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT',
				details: '[params.scheme] is required'
			});
			return;
		}

		alipay.pay(params, function (ret) {
			ret = ret || {};

			if (ret.error) {
				switch (ret.error.code) {
					case '8000':
						ret.error.msg = '正在处理中，支付结果未知';
						break;

					case '4000':
						ret.error.msg = '订单支付失败';
						break;

					case '5000':
						ret.error.msg = '重复请求';
						break;

					case '6001':
						ret.error.msg = '用户中途取消';
						break;

					case '6002':
						ret.error.msg = '网络连接出错';
						break;

					case '6004':
						ret.error.msg = '支付结果未知';
						break;
				}
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// auth

var auth = function auth(params, cb) {
	return new Promise(function (resolve, reject) {
		if (!params) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT'
			});
			return;
		}

		params = params || {};

		if (!params.info) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT',
				details: '[params.info] is required'
			});
			return;
		}

		if (!params.scheme) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT',
				details: '[params.scheme] is required'
			});
			return;
		}

		alipay.auth(params, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	pay: pay,
	auth: auth
};

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SHARE_TYPES = {
	'app': 1,
	'emotion': 2,
	'file': 3,
	'image': 4,
	'music': 5,
	'video': 6,
	'webpage': 7,
	'link': 7,
	'mini-program': 8
};

var SCENE_TYPES = {
	'session': 0,
	'timeline': 1,
	'favorite': 2
};

var __c = void 0;

var wechat = {
	get wechatModule() {
		if (__c) {
			return __c;
		} else if (weex && weex.requireModule) {
			__c = weex.requireModule('nat/wechat');
			return __c;
		}
	},

	// init
	init: function init(appId, cb) {
		var _this = this;

		return new Promise(function (resolve, reject) {
			if (!appId) {
				reject({
					code: 301040,
					message: 'MISSING_ARGUMENT',
					details: 'appId is required'
				});
				return;
			}

			_this.wechatModule.init(appId, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},


	// checkInstalled
	checkInstalled: function checkInstalled(cb) {
		var _this2 = this;

		return new Promise(function (resolve, reject) {
			_this2.wechatModule.checkInstalled(function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},


	/**
 	share
 		@params
 	- content
 		- title
 		- description (desc)
 		- type
 		- filePath
 		- thumbUrl
 		- dataUrl
 		- link
 	- scene
  */
	share: function share(params, cb) {
		var _this3 = this;

		return new Promise(function (resolve, reject) {
			if (!params) {
				reject({
					code: 301040,
					message: 'SHARE_MISSING_ARGUMENT'
				});
				return;
			}

			params = params || {};

			if (typeof params.scene === 'string') {
				params.scene = SCENE_TYPES[params.scene] || 0;
			} else {
				params.scene = params.scene || 0;
			}

			if (typeof params.content === 'string') {
				params.text = params.content;
				delete params.content;
			} else {
				var type = 0;
				params.content = params.content || {};

				if (!params.content.description && params.content.desc) {
					params.content.description = params.content.desc;
				}

				if (typeof params.content.type === 'string') {
					type = SHARE_TYPES[params.content.type];
					params.content.type = type;

					if (!type) {
						reject({
							code: 301041,
							message: 'SHARE_ARGUMENT_ERROR',
							details: 'unsupported share content type'
						});
						return;
					}
				}

				// app & file
				// filePath: local only
				if ([1, 3].includes(type) && !params.content.filePath) {
					reject({
						code: 301041,
						message: 'SHARE_ARGUMENT_ERROR',
						details: 'content.filePath is required'
					});
					return;
				}
				// emotion & image & music & video
				else if ([2, 4, 5, 6].includes(type) && !params.content.dataUrl) {
						reject({
							code: 301041,
							message: 'SHARE_ARGUMENT_ERROR',
							details: 'content.dataUrl is required'
						});
						return;
					}

				// add link (music & webpage)
				if ([5, 7].includes(type) && !params.content.link) {
					reject({
						code: 301041,
						message: 'SHARE_ARGUMENT_ERROR',
						details: 'content.link is required'
					});
					return;
				}
			}

			_this3.wechatModule.share(params, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					delete ret.status;
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},


	// pay
	pay: function pay(params, cb) {
		var _this4 = this;

		return new Promise(function (resolve, reject) {
			if (!params) {
				reject({
					code: 301040,
					message: 'PAY_MISSING_ARGUMENT'
				});
				return;
			}

			// if (!params.appid) {
			// 	reject({
			// 		code: 301040,
			// 		message: 'PAY_MISSING_ARGUMENT',
			// 		details: '[params.appid] is required'
			// 	})
			// 	return
			// }

			_this4.wechatModule.pay(params, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					delete ret.status;
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},


	// auth
	auth: function auth(params, cb) {
		var _this5 = this;

		return new Promise(function (resolve, reject) {
			if (!params) {
				reject({
					code: 301040,
					message: 'PAY_MISSING_ARGUMENT'
				});
				return;
			}

			params = params || {};

			if (!params.info) {
				reject({
					code: 301040,
					message: 'PAY_MISSING_ARGUMENT',
					details: '[params.info] is required'
				});
				return;
			}

			_this5.wechatModule.auth(params, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					delete ret.status;
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	}
};

module.exports = wechat;

/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('image', {
    style: _vm.uploadNativeStyle,
    attrs: {
      "src": _vm.uploadFileTipImage
    },
    on: {
      "click": _vm.uploadTest
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 175 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('header2', {
    attrs: {
      "title": "写话题",
      "leftBtn": _vm.leftBtn,
      "rightBtn": _vm.rightBtn
    }
  }), _c('div', {
    staticClass: ["commentBox"]
  }, [_c('textarea', {
    ref: "input",
    staticClass: ["input"],
    attrs: {
      "placeholder": "标题",
      "disabled": "false",
      "autofocus": "false"
    },
    on: {
      "input": _vm.oninputTitle,
      "click": _vm.focus
    }
  })]), _c('div', {
    staticClass: ["textBox"]
  }, [_c('textarea', {
    staticClass: ["textarea"],
    attrs: {
      "placeholder": "这一刻的想法...",
      "disabled": "false",
      "autofocus": "false"
    },
    on: {
      "input": _vm.oninput
    }
  })])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(177)
)

/* script */
__vue_exports__ = __webpack_require__(178)

/* template */
var __vue_template__ = __webpack_require__(188)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/views/default.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5882492e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 177 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "main-list": {
    "width": "750",
    "marginBottom": "290",
    "backgroundColor": "#ffffff"
  },
  "ml-ipx": {
    "marginTop": "208",
    "marginBottom": "170"
  }
}

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _header = __webpack_require__(179);

var _header2 = _interopRequireDefault(_header);

var _refresh = __webpack_require__(4);

var _refresh2 = _interopRequireDefault(_refresh);

var _YXSlider = __webpack_require__(8);

var _YXSlider2 = _interopRequireDefault(_YXSlider);

var _bookSearch = __webpack_require__(9);

var _bookSearch2 = _interopRequireDefault(_bookSearch);

var _Block = __webpack_require__(10);

var _Block2 = _interopRequireDefault(_Block);

var _Block3 = __webpack_require__(11);

var _Block4 = _interopRequireDefault(_Block3);

var _tabBar = __webpack_require__(3);

var _tabBar2 = _interopRequireDefault(_tabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
var navigator = weex.requireModule('navigator');
var storage = weex.requireModule('storage');
exports.default = {
    name: 'home',
    components: {
        'tab-bar': _tabBar2.default,
        'home-header': _header2.default,
        'refresher': _refresh2.default,
        'yx-slider': _YXSlider2.default,
        'book-search': _bookSearch2.default,
        'block-1': _Block2.default,
        'block-2': _Block4.default
    },
    data: function data() {
        return {
            YXBanners: [],
            borrowRecords: [],
            bookList: [],
            showLoading: 'hide',
            token: '',
            isand: false
        };
    },
    created: function created() {
        var _this = this;

        //weex.requireModule('PDFModule').readPDF("book id", "token");
        var _self = this;
        this.isand = _utils2.default.env.isAndroid();
        storage.getItem('token', function (event) {
            _self.token = event.data;

            //banner ajax
            _this.GET('banners/list', _self.token, function (data) {
                if (data.code == 200) {
                    var result = data.result;
                    _this.YXBanners = result;
                } else {
                    // modal.toast({
                    //     message: data.code + ":" + _self.token,
                    //     duration: 3
                    // })
                }
            });

            //借阅记录
            // this.testGET('api/home/borrowRecords.json', res => {
            //     let result = data.result;
            //     this.borrowRecords = result['borrowRecords'];
            // });

            //图书精选
            _this.GET('books/chosen/6', _self.token, function (data) {
                if (data.code == 200) {
                    var result = data.result;
                    _this.bookList = result;
                    _this.borrowRecords = result;
                } else {
                    // modal.toast({
                    //     message: data.code + ":" + _self.token,
                    //     duration: 3
                    // })
                }
            });
        });
    },

    methods: {
        onTabTo: function onTabTo(_result) {
            var _key = _result.data.key || '';
            this.$router && this.$router.push('/' + _key);
        }
    }
};

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(180)
)

/* script */
__vue_exports__ = __webpack_require__(181)

/* template */
var __vue_template__ = __webpack_require__(187)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/components/header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2c7043ef"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "position": "fixed",
    "width": "750",
    "left": 0,
    "top": 0,
    "zIndex": 1,
    "backgroundColor": "#f8f8f8",
    "paddingTop": "3",
    "paddingBottom": "3"
  },
  "header-left": {
    "position": "absolute",
    "top": "16",
    "left": "18",
    "fontSize": "14",
    "lineHeight": "21",
    "color": "#cccccc"
  },
  "left-arrow": {
    "position": "absolute",
    "width": "60",
    "height": "60",
    "top": "-5",
    "left": "-5",
    "content:before": "\"\"",
    "position:before": "absolute",
    "width:before": "24",
    "height:before": "24",
    "border:before": "1px solid #fff",
    "WebkitTrasform:before": "rotate(315deg)",
    "transform:before": "rotate(315deg)",
    "top:before": "20",
    "left:before": "20"
  },
  "header-title": {
    "height": "80",
    "marginTop": 0,
    "marginRight": "88",
    "marginBottom": 0,
    "marginLeft": "88",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap",
    "fontSize": "36",
    "letterSpacing": "2",
    "lineHeight": "80",
    "color": "#000000",
    "textAlign": "center"
  }
}

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcMinibar = __webpack_require__(182);

var _wxcMinibar2 = _interopRequireDefault(_wxcMinibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: ['title', 'leftButton', 'rightButton'],
  data: function data() {
    return {
      height: '86px'
    };
  },

  components: { WxcMinibar: _wxcMinibar2.default },
  methods: {
    minibarLeftButtonClick: function minibarLeftButtonClick() {},
    minibarRightButtonClick: function minibarRightButtonClick() {
      modal.toast({ 'message': 'click rightButton!', 'duration': 1 });
    }
  }
};

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__index_vue___default.a; });



/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(184)
)

/* script */
__vue_exports__ = __webpack_require__(185)

/* template */
var __vue_template__ = __webpack_require__(186)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/node_modules/weex-ui/packages/wxc-minibar/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1be05ca8"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-minibar": {
    "width": "750",
    "height": "90",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "backgroundColor": "#009ff0"
  },
  "left": {
    "width": "180",
    "paddingLeft": "32"
  },
  "middle-title": {
    "fontSize": "30",
    "color": "#ffffff",
    "height": "36",
    "lineHeight": "34"
  },
  "right": {
    "width": "180",
    "paddingRight": "32",
    "alignItems": "flex-end"
  },
  "left-button": {
    "width": "21",
    "height": "36"
  },
  "right-button": {
    "width": "32",
    "height": "32"
  },
  "icon-text": {
    "fontSize": "28",
    "color": "#ffffff"
  }
}

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Navigator = weex.requireModule('navigator');
exports.default = {
  props: {
    backgroundColor: {
      type: String,
      default: '#FFC900'
    },
    leftButton: {
      type: String,
      default: 'https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png'
    },
    textColor: {
      type: String,
      default: '#3D3D3D'
    },
    rightButton: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '标题'
    },
    leftText: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    },
    useDefaultReturn: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    leftButtonClicked: function leftButtonClicked() {
      var self = this;
      if (self.useDefaultReturn) {
        Navigator.pop({}, function (e) {});
      }
      self.$emit('wxcMinibarLeftButtonClicked', {});
    },
    rightButtonClicked: function rightButtonClicked() {
      var self = this;
      if (self.rightText || self.rightButton) {
        self.$emit('wxcMinibarRightButtonClicked', {});
      }
    }
  }
};

/***/ }),
/* 186 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    staticClass: ["wxc-minibar"],
    style: {
      backgroundColor: _vm.backgroundColor
    }
  }, [_c('div', {
    staticClass: ["left"],
    attrs: {
      "ariaLabel": "返回",
      "accessible": true
    },
    on: {
      "click": _vm.leftButtonClicked
    }
  }, [_vm._t("left", [(_vm.leftButton && !_vm.leftText) ? _c('image', {
    staticClass: ["left-button"],
    attrs: {
      "src": _vm.leftButton
    }
  }) : _vm._e(), (_vm.leftText) ? _c('text', {
    staticClass: ["icon-text"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.leftText))]) : _vm._e()])], 2), _vm._t("middle", [_c('text', {
    staticClass: ["middle-title"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
    staticClass: ["right"],
    on: {
      "click": _vm.rightButtonClicked
    }
  }, [_vm._t("right", [(_vm.rightButton && !_vm.rightText) ? _c('image', {
    staticClass: ["right-button"],
    attrs: {
      "src": _vm.rightButton,
      "ariaHidden": true
    }
  }) : _vm._e(), (_vm.rightText) ? _c('text', {
    staticClass: ["icon-text"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.rightText))]) : _vm._e()])], 2)], 2) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 187 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"],
    style: {
      height: _vm.height
    }
  }, [_c('div', {
    staticClass: ["demo"]
  }, [_c('wxc-minibar', {
    attrs: {
      "title": _vm.title,
      "backgroundColor": "#009ff0",
      "textColor": "#FFFFFF",
      "rightText": _vm.rightButton,
      "leftButton": ""
    },
    on: {
      "wxcMinibarLeftButtonClicked": _vm.minibarLeftButtonClick,
      "wxcMinibarRightButtonClicked": _vm.minibarRightButtonClick
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 188 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('home-header', {
    attrs: {
      "title": "阅读活动"
    }
  }), _c('scroller', {
    class: ['main-list', _vm.isand ? 'android-main-list' : '']
  }, [_c('refresher'), _c('div', {
    staticClass: ["cell-button"]
  }, [_c('yx-slider', {
    attrs: {
      "imageList": _vm.YXBanners
    }
  })], 1), _c('div', {
    staticClass: ["cell-button"]
  }, [_c('block-2', {
    attrs: {
      "books": _vm.bookList
    }
  })], 1)], 1), _c('tab-bar', {
    attrs: {
      "router": "home"
    },
    on: {
      "tabTo": _vm.onTabTo
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(190)
)

/* script */
__vue_exports__ = __webpack_require__(191)

/* template */
var __vue_template__ = __webpack_require__(192)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/views/bookshelf.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-c4ee83ee"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#ffffff"
  },
  "w-ipx": {
    "marginTop": "40",
    "marginBottom": "50"
  },
  "main-list": {
    "marginTop": "86",
    "marginBottom": "100",
    "backgroundColor": "#ffffff",
    "width": "750"
  },
  "book-list": {
    "paddingLeft": "20",
    "paddingRight": "20",
    "overflow": "hidden"
  },
  "sub-i": {
    "borderTopWidth": "1",
    "borderTopColor": "#666666",
    "paddingTop": "30",
    "paddingBottom": "30",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "marginTop": "-1"
  },
  "text-box": {
    "width": "461",
    "textAlign": "left"
  },
  "i-img": {
    "width": "199",
    "height": "293",
    "marginRight": "20",
    "marginLeft": "20"
  },
  "i-name": {
    "fontSize": "34",
    "color": "#101010",
    "textAlign": "left",
    "marginTop": "10"
  },
  "i-author": {
    "fontSize": "32",
    "color": "#787878",
    "textAlign": "left",
    "marginTop": "10"
  },
  "i-dec": {
    "fontSize": "32",
    "color": "#787878",
    "marginTop": "10"
  },
  "loading": {
    "width": 750,
    "display": "flex",
    "MsFlexAlign": "center",
    "WebkitAlignItems": "center",
    "WebkitBoxAlign": "center",
    "alignItems": "center"
  },
  "indicator-text": {
    "color": "#888888",
    "fontSize": "42",
    "textAlign": "center"
  },
  "indicator": {
    "marginTop": "16",
    "height": "40",
    "width": "40",
    "color": "#0000FF"
  },
  "show": {
    "opacity": 1
  },
  "hide": {
    "opacity": 0
  }
}

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _refresh = __webpack_require__(4);

var _refresh2 = _interopRequireDefault(_refresh);

var _Header = __webpack_require__(1);

var _Header2 = _interopRequireDefault(_Header);

var _tabBar = __webpack_require__(3);

var _tabBar2 = _interopRequireDefault(_tabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
var storage = weex.requireModule('storage');
var modal = weex.requireModule('modal');
exports.default = {
    components: {
        'tab-bar': _tabBar2.default,
        'refresher': _refresh2.default,
        'header2': _Header2.default
    },
    data: function data() {
        return {
            booklist: [],
            name: '',
            leftBtn: {
                name: '<'
            },
            token: '',
            listID: 1,
            current_page: 1,
            total: 1,
            bookList: 10,
            loadinging: false,
            hasNomare: false,
            isand: false
        };
    },
    created: function created() {
        var _this = this;

        this.isand = _utils2.default.env.isAndroid();
        storage.getItem('token', function (event) {
            _this.token = event.data;
            _this.getList();
        });
    },

    methods: {
        getList: function getList() {
            var _this2 = this;

            var _self = this;
            var url = '';
            this.GET('profile/book/' + this.bookList + '?page=' + this.current_page, this.token, function (data) {
                _this2.loadinging = false;
                if (data.code == 200) {
                    var result = data.result;
                    for (var i = 0; i < result.length; i++) {
                        _this2.booklist.push(result[i]);
                    }
                    _this2.total = _this2.last_page;
                    if (result.last_page == result.current_page) {
                        //最后一页
                        _self.hasNomare = true;
                    } else if (result.last_page > result.current_page) {
                        //非最后一页
                        _this2.current_page = result.current_page + 1;
                    }
                } else {
                    modal.toast({
                        message: data.code,
                        duration: 3
                    });
                }
            });
        },
        onloading: function onloading(event) {
            var _self = this;
            if (_self.hasNomare) {
                modal.toast({ message: '没有更多书籍', duration: 1 });
                return false;
            }
            modal.toast({ message: 'Loading', duration: 1 });
            this.loadinging = true;
            this.getList();
        },
        onTabTo: function onTabTo(_result) {
            var _key = _result.data.key || '';
            this.$router && this.$router.push('/' + _key);
        }
    }
};

/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('header2', {
    attrs: {
      "title": "我的书架",
      "leftBtn": _vm.leftBtn
    }
  }), _c('scroller', {
    staticClass: ["main-list"],
    class: [_vm.isand ? 'android-main-list' : ''],
    attrs: {
      "offsetAccuracy": "300px",
      "loadmoreoffset": "200"
    },
    on: {
      "loadmore": _vm.onloading
    }
  }, [_c('refresher'), _c('div', {
    staticClass: ["book-list"]
  }, _vm._l((_vm.booklist), function(i) {
    return _c('div', {
      staticClass: ["sub-i"]
    }, [_c('image', {
      staticClass: ["i-img"],
      attrs: {
        "resize": "cover",
        "src": i.full_cover
      },
      on: {
        "click": function($event) {
          _vm.jump('/bookDetail/' + i.id + '/' + i.book_name)
        }
      }
    }), _c('div', {
      staticClass: ["text-box"]
    }, [_c('text', {
      staticClass: ["i-name"],
      on: {
        "click": function($event) {
          _vm.jump('/bookDetail/' + i.id + '/' + i.book_name)
        }
      }
    }, [_vm._v(_vm._s(i.book_name))]), _c('text', {
      staticClass: ["i-author"]
    }, [_vm._v("作者：" + _vm._s(i.author))]), _c('text', {
      staticClass: ["i-dec"],
      on: {
        "click": function($event) {
          _vm.jump('/bookDetail/' + i.id + '/' + i.book_name)
        }
      }
    }, [_vm._v(_vm._s(i.description))])])])
  }))], 1), _c('tab-bar', {
    attrs: {
      "router": "list"
    },
    on: {
      "tabTo": _vm.onTabTo
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(194)
)

/* script */
__vue_exports__ = __webpack_require__(195)

/* template */
var __vue_template__ = __webpack_require__(196)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/views/mypost.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a11ec058"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#ffffff"
  },
  "w-ipx": {
    "marginTop": "40",
    "marginBottom": "50"
  },
  "main-list": {
    "marginTop": "86",
    "backgroundColor": "#ffffff",
    "marginBottom": "100"
  },
  "box-post": {
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "box-post-item": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "flexWrap": "nowrap",
    "paddingTop": "20",
    "paddingBottom": "20",
    "borderBottomWidth": "1",
    "borderColor": "#e0e0e0"
  },
  "box-post-text": {
    "fontSize": "32",
    "lines": 1,
    "paddingRight": "20",
    "color": "#6d6d6d"
  },
  "box-post-time": {
    "fontSize": "30",
    "color": "#6d6d6d"
  },
  "show": {
    "opacity": 1
  },
  "hide": {
    "opacity": 0
  }
}

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _Header = __webpack_require__(1);

var _Header2 = _interopRequireDefault(_Header);

var _refresh = __webpack_require__(4);

var _refresh2 = _interopRequireDefault(_refresh);

var _Block = __webpack_require__(12);

var _Block2 = _interopRequireDefault(_Block);

var _tabBar = __webpack_require__(3);

var _tabBar2 = _interopRequireDefault(_tabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = weex.requireModule('storage'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
    data: function data() {
        var _self = this;
        return {
            name: '',
            leftBtn: {
                name: '<'
            },
            posts: [],
            token: '',
            postList: 10,
            current_page: 1,
            total: 1,
            loadinging: false,
            hasNomare: false,
            isand: false
        };
    },

    components: {
        'tab-bar': _tabBar2.default,
        'header2': _Header2.default,
        'refresher': _refresh2.default,
        'block-5': _Block2.default
    },
    created: function created() {
        var _this = this;

        this.isand = _utils2.default.env.isAndroid();
        storage.getItem('token', function (event) {
            _this.token = event.data;
            _this.getCommenList();
        });
    },

    methods: {
        getCommenList: function getCommenList() {
            var _this2 = this;

            var _self = this;
            this.GET('profile/post/' + _self.postList + '?page=' + this.current_page, this.token, function (data) {
                _this2.loadinging = false;
                if (data.code == 200) {
                    var result = data.result;
                    for (var i = 0; i < result.length; i++) {
                        _this2.posts.push(result[i]);
                        _self.posts[i].created_at = result[i].created_at.split(' ')[0];
                    }
                    _this2.total = _this2.last_page;
                    if (result.last_page == result.current_page) {
                        //最后一页
                        _self.hasNomare = true;
                    } else if (result.last_page > result.current_page) {
                        //非最后一页
                        _this2.current_page = result.current_page + 1;
                    }
                } else {
                    modal.toast({
                        message: data.code,
                        duration: 3
                    });
                }
            });
        },
        onloading: function onloading() {
            var _self = this;
            if (_self.hasNomare) {
                modal.toast({ message: '没有更多帖子', duration: 1 });
                return false;
            }
            modal.toast({ message: 'Loading', duration: 1 });
            this.loadinging = true;
            this.getCommenList();
        }
    }
};

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('header2', {
    attrs: {
      "title": "我的帖子",
      "leftBtn": _vm.leftBtn
    }
  }), _c('scroller', {
    staticClass: ["main-list"],
    class: [_vm.isand ? 'android-main-list' : ''],
    attrs: {
      "offsetAccuracy": "300px",
      "loadmoreoffset": "200"
    },
    on: {
      "loadmore": _vm.onloading
    }
  }, [_c('refresher'), _c('div', {
    staticClass: ["box-cont", "box-post"]
  }, _vm._l((_vm.posts), function(post) {
    return _c('div', {
      staticClass: ["box-cont-item", "box-post-item"],
      on: {
        "click": function($event) {
          _vm.jump('/themeDetail/' + post.id)
        }
      }
    }, [_c('text', {
      staticClass: ["box-cont-text", "box-post-text"]
    }, [_vm._v(_vm._s(post.title))]), _c('text', {
      staticClass: ["box-post-time"]
    }, [_vm._v(_vm._s(post.created_at))])])
  }))], 1), _c('tab-bar', {
    attrs: {
      "router": "list"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(198)
)

/* script */
__vue_exports__ = __webpack_require__(199)

/* template */
var __vue_template__ = __webpack_require__(200)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/views/about.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-482c26b5"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#f0f0f0"
  },
  "scroller": {
    "marginTop": "86"
  },
  "ml-ipx": {
    "marginBottom": "140"
  },
  "cell-button": {
    "backgroundColor": "#f4f4f4"
  },
  "text-box": {
    "backgroundColor": "#ffffff"
  },
  "text": {
    "fontSize": "32",
    "color": "#666666",
    "paddingLeft": "30",
    "paddingRight": "30",
    "paddingTop": "30",
    "paddingBottom": "30",
    "borderBottomWidth": "1",
    "borderColor": "#f0f0f0"
  },
  "version": {
    "paddingLeft": "30",
    "paddingRight": "30",
    "paddingTop": "30",
    "paddingBottom": "30",
    "borderBottomWidth": "1",
    "borderColor": "#f0f0f0",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "version-text": {
    "color": "#8d8d8d",
    "fontSize": "32"
  },
  "version-code": {
    "color": "#8d8d8d",
    "fontSize": "30"
  },
  "qrcode-box": {
    "width": "650",
    "marginLeft": "50",
    "marginTop": "30",
    "borderWidth": "1",
    "borderColor": "#f0f0f0",
    "backgroundColor": "#ffffff"
  },
  "qrcode": {
    "alignItems": "center",
    "paddingBottom": "40"
  },
  "qr-img": {
    "width": "480",
    "height": "480",
    "marginTop": "40"
  },
  "qr-text": {
    "width": "630",
    "fontSize": "32",
    "color": "#009ffc",
    "marginTop": "40",
    "borderTopWidth": "1",
    "borderColor": "#f0f0f0",
    "paddingTop": "30",
    "paddingBottom": "30",
    "textAlign": "center"
  },
  "copy-right": {
    "backgroundColor": "#ffffff",
    "paddingLeft": "20",
    "paddingRight": "20",
    "paddingTop": "20",
    "paddingBottom": "20",
    "marginTop": "30"
  },
  "copy-text": {
    "color": "#8d8d8d",
    "fontSize": "30",
    "textIndent": "60"
  }
}

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _Header = __webpack_require__(1);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var storage = weex.requireModule('storage');
exports.default = {
    name: 'about',
    data: function data() {
        return {
            leftBtn: {
                name: '<'
            },
            androidImg: 'http://zl.senseitgroup.com/images/Android-qrcode.png',
            currentVersion: '',
            newVersion: ''
        };
    },

    components: {
        'header2': _Header2.default
    },
    created: function created() {
        this.isand = _utils2.default.env.isAndroid();
        // this.currentVersion = this.$route.params.current;
        // this.newVersion = this.$route.params.new;
    },

    methods: {
        jumpWeb: function jumpWeb() {
            this.$router.push('/web');
        }
    }
};

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('header2', {
    attrs: {
      "title": "关于软件",
      "leftBtn": _vm.leftBtn
    }
  }), _c('scroller', {
    ref: "contentScroller",
    class: ['scroller', _vm.isIpx && _vm.isIpx() ? 'ml-ipx' : '', _vm.isand ? 'android-main-list' : ''],
    attrs: {
      "showScrollbar": "false"
    }
  }, [_vm._m(0), _c('div', {
    staticClass: ["qrcode-box"]
  }, [_c('div', {
    staticClass: ["android", "qrcode"]
  }, [_c('image', {
    staticClass: ["qr-img"],
    attrs: {
      "src": _vm.androidImg
    }
  })])]), _vm._m(1)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["text-box"]
  }, [_c('text', {
    staticClass: ["name", "text"]
  }, [_vm._v("书香浙理APP")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["copy-right"]
  }, [_c('text', {
    staticClass: ["copy-text"]
  }, [_vm._v("        本APP及其具有的图书资料等信息，均用于浙江理工大学师生员工的阅读推广活动。任何组织和个人不得用于其他用途，否则自行承担法律责任，与浙江理工大学无涉。")]), _c('text', {
    staticClass: ["copy-text"]
  }, [_vm._v("        本APP用户均为实名制认证用户，用户发布信息必须遵守国家相关的法律法规，APP管理员有权禁止用户发布不良信息，对造成严重后果的，将保留配合司法机关追究其法律责任的权力。")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(202)
)

/* script */
__vue_exports__ = __webpack_require__(203)

/* template */
var __vue_template__ = __webpack_require__(204)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/assets/views/web.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2c3e16fc"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#ffffff"
  },
  "w-ipx": {
    "marginTop": "40",
    "marginBottom": "50"
  },
  "main-list": {
    "marginTop": "86",
    "backgroundColor": "#ffffff",
    "width": "750"
  }
}

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Header = __webpack_require__(1);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var storage = weex.requireModule('storage');
var modal = weex.requireModule('modal');
exports.default = {
    components: {
        'header2': _Header2.default
    },
    data: function data() {
        return {
            leftButton: {
                name: "&#xe697;"
            },
            isand: false,
            webSrc: 'https://www.senseitgroup.com/zlsxapp'
        };
    },
    created: function created() {},

    methods: {}
};

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('web', {
    staticStyle: {
      width: "750px",
      height: "1500px"
    },
    attrs: {
      "src": "https://www.pgyer.com/Xdo1"
    }
  })])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(206)
)

/* script */
__vue_exports__ = __webpack_require__(207)

/* template */
var __vue_template__ = __webpack_require__(208)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-1/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-dbf9f966"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = {
  "box": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "width": "750"
  },
  "app-wrapper": {
    "backgroundColor": "#ffffff",
    "width": "750",
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "login-page": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "width": "750"
  },
  "r-box": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "hide": {
    "opacity": 0
  },
  "show": {
    "opacity": 1
  }
}

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _tabBar = __webpack_require__(3);

var _tabBar2 = _interopRequireDefault(_tabBar);

var _login = __webpack_require__(13);

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
var globalEvent = weex.requireModule('globalEvent');

var storage = weex.requireModule('storage');
exports.default = {
    name: 'App',
    data: function data() {
        return {
            login: true
        };
    },

    components: {
        'tab-bar': _tabBar2.default,
        'login-page': _login2.default
    },
    created: function created() {
        _util2.default.initIconFont();
        // storage.getItem('token',event => {
        //   var localToken = event.data;
        //   if(localToken == 'undefined'){
        //     this.login = false;
        //   }else if(localToken != 'undefined'){
        //     this.GET('banners/list', localToken, res => {
        //         let result = res.data;
        //         if(result.code != 200){
        //           this.login = false;
        //         }else if(result.code == 200){
        //           this.login = true;
        //         }
        //     });
        //   }
        // });

    },

    methods: {
        // onTabTo(_result){
        //     let _key = _result.data.key || '';
        //     this.$router && this.$router.push('/'+_key)
        // },
        // handleMessage(payload){
        //     this.login = payload.login;
        //     this.$router.push('/home')
        // },
        back: function back() {
            var path = this.$route.path;
            // modal.toast({
            //   message: path,
            //   duration: 2
            // })
            if (path == '/' || path == '/home' || path == '/login') {
                weex.requireModule('close').closeApp();
            } else {
                this.$router.back();
            }
        }
    }
};

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["box"],
    on: {
      "androidback": _vm.back
    }
  }, [_c('div', {
    staticClass: ["app-wrapper"]
  }, [_c('router-view', {
    staticClass: ["r-box"]
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);