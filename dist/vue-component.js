(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueComponent"] = factory();
	else
		root["VueComponent"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Alert = __webpack_require__(76);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	var _Carousel = __webpack_require__(84);
	
	var _Carousel2 = _interopRequireDefault(_Carousel);
	
	var _Slider = __webpack_require__(128);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	var _Accordion = __webpack_require__(131);
	
	var _Accordion2 = _interopRequireDefault(_Accordion);
	
	var _Affix = __webpack_require__(134);
	
	var _Affix2 = _interopRequireDefault(_Affix);
	
	var _Aside = __webpack_require__(139);
	
	var _Aside2 = _interopRequireDefault(_Aside);
	
	var _checkboxGroup = __webpack_require__(145);
	
	var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);
	
	var _checkboxBtn = __webpack_require__(148);
	
	var _checkboxBtn2 = _interopRequireDefault(_checkboxBtn);
	
	var _Datepicker = __webpack_require__(151);
	
	var _Datepicker2 = _interopRequireDefault(_Datepicker);
	
	var _Dropdown = __webpack_require__(158);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _Modal = __webpack_require__(161);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Option = __webpack_require__(170);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	var _Panel = __webpack_require__(175);
	
	var _Panel2 = _interopRequireDefault(_Panel);
	
	var _Popover = __webpack_require__(180);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Progressbar = __webpack_require__(186);
	
	var _Progressbar2 = _interopRequireDefault(_Progressbar);
	
	var _radioBtn = __webpack_require__(189);
	
	var _radioBtn2 = _interopRequireDefault(_radioBtn);
	
	var _radioGroup = __webpack_require__(192);
	
	var _radioGroup2 = _interopRequireDefault(_radioGroup);
	
	var _Select = __webpack_require__(195);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Tab = __webpack_require__(200);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _Tabset = __webpack_require__(205);
	
	var _Tabset2 = _interopRequireDefault(_Tabset);
	
	var _Table = __webpack_require__(209);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _Tooltip = __webpack_require__(212);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _Typeahead = __webpack_require__(217);
	
	var _Typeahead2 = _interopRequireDefault(_Typeahead);
	
	var _Spin = __webpack_require__(223);
	
	var _Spin2 = _interopRequireDefault(_Spin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(227);
	__webpack_require__(233);
	__webpack_require__(234);
	
	// import Toast from './components/Toast.vue'
	
	var VueComponent = {
	  Alert: _Alert2.default,
	  Carousel: _Carousel2.default,
	  Slider: _Slider2.default,
	  Accordion: _Accordion2.default,
	  Affix: _Affix2.default,
	  Aside: _Aside2.default,
	  CheckboxBtn: _checkboxBtn2.default,
	  CheckboxGroup: _checkboxGroup2.default,
	  Datepicker: _Datepicker2.default,
	  Dropdown: _Dropdown2.default,
	  Modal: _Modal2.default,
	  Option: _Option2.default,
	  Panel: _Panel2.default,
	  Popover: _Popover2.default,
	  Progressbar: _Progressbar2.default,
	  RadioGroup: _radioGroup2.default,
	  RadioBtn: _radioBtn2.default,
	  Select: _Select2.default,
	  Tab: _Tab2.default,
	  Tabset: _Tabset2.default,
	  Grid: _Table2.default,
	  Tooltip: _Tooltip2.default,
	  Typeahead: _Typeahead2.default,
	  Spin: _Spin2.default
	};
	
	module.exports = VueComponent;

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(77)
	__vue_script__ = __webpack_require__(81)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Alert.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(83)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Alert.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(78);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(80)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Alert.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Alert.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(79)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.fade-transition {\n  -webkit-transition: opacity .3s ease;\n  transition: opacity .3s ease;\n}\n.fade-enter,\n.fade-leave {\n  height: 0;\n  opacity: 0;\n}\n.alert.top {\n  position: fixed;\n  top: 30px;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  z-index: 2;\n}\n.alert.top-right {\n  position: fixed;\n  top: 30px;\n  right: 50px;\n  z-index: 2;\n}\n", "", {"version":3,"sources":["/./src/components/Alert.vue?3476acb2"],"names":[],"mappings":";AAwEA;EACA,qCAAA;EAAA,6BAAA;CACA;AACA;;EAEA,UAAA;EACA,WAAA;CACA;AACA;EACA,gBAAA;EACA,UAAA;EACA,eAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;CACA;AACA;EACA,gBAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;CACA","file":"Alert.vue","sourcesContent":["<template>\n  <div\n    v-show=\"show\"\n    v-bind:class=\"{\n      'alert':\t\ttrue,\n      'alert-success':(type == 'success'),\n      'alert-warning':(type == 'warning'),\n      'alert-info':\t(type == 'info'),\n      'alert-danger':\t(type == 'danger'),\n      'alert-help': (type == 'help'),\n      'top': \t\t\t(placement === 'top'),\n      'top-right': \t(placement === 'top-right')\n    }\"\n    transition=\"fade\"\n    v-bind:style=\"{width:width}\"\n    role=\"alert\">\n    <button v-show=\"dismissable\" type=\"button\" class=\"close\"\n      @click=\"show = false\">\n      <span>&times;</span>\n    </button>\n    <icon :type=\"type\"></icon>\n    <slot></slot>\n  </div>\n</template>\n\n<script>\nimport coerceBoolean from './utils/coerceBoolean.js'\n\n  export default {\n    props: {\n      type: {\n        type: String\n      },\n      dismissable: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: false,\n      },\n      showIcon: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: false,\n      },\n      show: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: true,\n        twoWay: true\n      },\n      duration: {\n        type: Number,\n        default: 0\n      },\n      width: {\n        type: String\n      },\n      placement: {\n        type: String\n      }\n    },\n    watch: {\n      show(val) {\n        if (this._timeout) clearTimeout(this._timeout)\n        if (val && Boolean(this.duration)) {\n          this._timeout = setTimeout(()=> this.show = false, this.duration)\n        }\n      }\n    }\n  }\n</script>\n\n<style>\n.fade-transition {\n  transition: opacity .3s ease;\n}\n.fade-enter,\n.fade-leave {\n  height: 0;\n  opacity: 0;\n}\n.alert.top {\n  position: fixed;\n  top: 30px;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  z-index: 2;\n}\n.alert.top-right {\n  position: fixed;\n  top: 30px;\n  right: 50px;\n  z-index: 2;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 79 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(82);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    type: {
	      type: String
	    },
	    dismissable: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    showIcon: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    show: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: true,
	      twoWay: true
	    },
	    duration: {
	      type: Number,
	      default: 0
	    },
	    width: {
	      type: String
	    },
	    placement: {
	      type: String
	    }
	  },
	  watch: {
	    show: function show(val) {
	      var _this = this;
	
	      if (this._timeout) clearTimeout(this._timeout);
	      if (val && Boolean(this.duration)) {
	        this._timeout = setTimeout(function () {
	          return _this.show = false;
	        }, this.duration);
	      }
	    }
	  }
	};
	// </script>
	//
	// <style>
	// .fade-transition {
	//   transition: opacity .3s ease;
	// }
	// .fade-enter,
	// .fade-leave {
	//   height: 0;
	//   opacity: 0;
	// }
	// .alert.top {
	//   position: fixed;
	//   top: 30px;
	//   margin: 0 auto;
	//   left: 0;
	//   right: 0;
	//   z-index: 2;
	// }
	// .alert.top-right {
	//   position: fixed;
	//   top: 30px;
	//   right: 50px;
	//   z-index: 2;
	// }
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <div
	//     v-show="show"
	//     v-bind:class="{
	//       'alert':		true,
	//       'alert-success':(type == 'success'),
	//       'alert-warning':(type == 'warning'),
	//       'alert-info':	(type == 'info'),
	//       'alert-danger':	(type == 'danger'),
	//       'alert-help': (type == 'help'),
	//       'top': 			(placement === 'top'),
	//       'top-right': 	(placement === 'top-right')
	//     }"
	//     transition="fade"
	//     v-bind:style="{width:width}"
	//     role="alert">
	//     <button v-show="dismissable" type="button" class="close"
	//       @click="show = false">
	//       <span>&times;</span>
	//     </button>
	//     <icon :type="type"></icon>
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 82 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// Attempt to convert a string value to a Boolean. Otherwise, return the value
	// without modification so Vue can throw a warning.
	
	exports.default = function (val) {
	  return typeof val !== "string" ? val : val === "true" ? true : val === "false" ? false : val === "null" ? false : val === "undefined" ? false : val;
	};

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = "\n<div\n  v-show=\"show\"\n  v-bind:class=\"{\n    'alert':\t\ttrue,\n    'alert-success':(type == 'success'),\n    'alert-warning':(type == 'warning'),\n    'alert-info':\t(type == 'info'),\n    'alert-danger':\t(type == 'danger'),\n    'alert-help': (type == 'help'),\n    'top': \t\t\t(placement === 'top'),\n    'top-right': \t(placement === 'top-right')\n  }\"\n  transition=\"fade\"\n  v-bind:style=\"{width:width}\"\n  role=\"alert\">\n  <button v-show=\"dismissable\" type=\"button\" class=\"close\"\n    @click=\"show = false\">\n    <span>&times;</span>\n  </button>\n  <icon :type=\"type\"></icon>\n  <slot></slot>\n</div>\n";

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(85)
	__vue_script__ = __webpack_require__(87)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Carousel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(127)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Carousel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(86);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(80)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-69b62e64&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-69b62e64&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(79)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.carousel-control[_v-69b62e64] {\n  cursor: pointer;\n}\n", "", {"version":3,"sources":["/./src/components/Carousel.vue?2d818cc3"],"names":[],"mappings":";AAsHA;EACA,gBAAA;CACA","file":"Carousel.vue","sourcesContent":["<template>\n<div class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\" v-show=\"indicators\">\n    <indicator></indicator>\n  </ol>\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <slot></slot>\n  </div>\n  <!-- Controls -->\n  <a v-show=\"controls\" class=\"left carousel-control\" @click=\"prevClick\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a v-show=\"controls\" class=\"right carousel-control\" @click=\"nextClick\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n</template>\n\n<script>\nimport EventListener from './utils/EventListener.js'\nimport coerceBoolean from './utils/coerceBoolean.js'\n  export default {\n    props: {\n      indicators: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: true\n      },\n      controls: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: true\n      },\n      interval: {\n        type: Number,\n        default: 5000\n      }\n    },\n    components: {\n      'indicator': {\n        inherit: true,\n        template: '<li v-for=\"i in indicator\" @click=\"handleIndicatorClick($index)\" v-bind:class=\"{\\'active\\':$index === activeIndex}\"</li>',\n        methods: {\n          handleIndicatorClick(index) {\n            if (this.isAnimating) return false\n            this.isAnimating = true\n            this.activeIndex = index\n          }\n        },\n      }\n    },\n    data() {\n      return {\n        indicator: [],\n        activeIndex: 0,\n        isAnimating: false\n      }\n    },\n    computed: {\n      slider() {\n        return this.$el.querySelectorAll('.item')\n      }\n    },\n    watch: {\n      activeIndex(newVal, oldVal) {\n        newVal > oldVal ? this.slide('left', newVal, oldVal) : this.slide('right', newVal, oldVal)\n      }\n    },\n    methods: {\n      slide(direction, selected, prev) {\n        if (this._prevSelectedEvent) this._prevSelectedEvent.remove()\n        if (this._selectedEvent) this._selectedEvent.remove()\n        const prevSelectedEl = this.slider[prev]\n        const selectedEl = this.slider[selected]\n        const transitionendFn = ()=> {\n          [...this.slider].forEach((el)=> el.className = 'item')\n          selectedEl.classList.add('active')\n          this.isAnimating = false\n        }\n        direction === 'left' ? selectedEl.classList.add('next') : selectedEl.classList.add('prev')\n        // request property that requires layout to force a layout\n        var x = selectedEl.clientHeight\n        this._prevSelectedEvent = EventListener.listen(prevSelectedEl, 'transitionend', transitionendFn)\n        this._selectedEvent = EventListener.listen(selectedEl, 'transitionend', transitionendFn)\n        prevSelectedEl.classList.add(direction)\n        selectedEl.classList.add(direction)\n      },\n      nextClick() {\n        if (this.isAnimating) return false\n        this.isAnimating = true\n        this.activeIndex + 1 < this.slider.length ? this.activeIndex += 1 : this.activeIndex = 0\n      },\n      prevClick() {\n        if (this.isAnimating) return false\n        this.isAnimating = true\n        this.activeIndex === 0 ? this.activeIndex = this.slider.length - 1 : this.activeIndex -= 1\n      }\n    },\n    ready() {\n      let intervalID = null\n      const el = this.$el\n      function intervalManager(flag, func, time) {\n        flag ? intervalID =  setInterval(func, time) : clearInterval(intervalID)\n      }\n      if (!!this.interval) {\n        intervalManager(true, this.nextClick, this.interval)\n        el.addEventListener('mouseenter', ()=> intervalManager(false))\n        el.addEventListener('mouseleave', ()=> intervalManager(true, this.nextClick, this.interval))\n      }\n    },\n  }\n</script>\n\n<style scoped>\n  .carousel-control {\n    cursor: pointer;\n  }\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toConsumableArray2 = __webpack_require__(88);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _EventListener = __webpack_require__(126);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _coerceBoolean = __webpack_require__(82);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// <div class="carousel slide" data-ride="carousel">
	//   <!-- Indicators -->
	//   <ol class="carousel-indicators" v-show="indicators">
	//     <indicator></indicator>
	//   </ol>
	//   <!-- Wrapper for slides -->
	//   <div class="carousel-inner" role="listbox">
	//     <slot></slot>
	//   </div>
	//   <!-- Controls -->
	//   <a v-show="controls" class="left carousel-control" @click="prevClick">
	//     <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
	//     <span class="sr-only">Previous</span>
	//   </a>
	//   <a v-show="controls" class="right carousel-control" @click="nextClick">
	//     <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
	//     <span class="sr-only">Next</span>
	//   </a>
	// </div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    indicators: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: true
	    },
	    controls: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: true
	    },
	    interval: {
	      type: Number,
	      default: 5000
	    }
	  },
	  components: {
	    'indicator': {
	      inherit: true,
	      template: '<li v-for="i in indicator" @click="handleIndicatorClick($index)" v-bind:class="{\'active\':$index === activeIndex}"</li>',
	      methods: {
	        handleIndicatorClick: function handleIndicatorClick(index) {
	          if (this.isAnimating) return false;
	          this.isAnimating = true;
	          this.activeIndex = index;
	        }
	      }
	    }
	  },
	  data: function data() {
	    return {
	      indicator: [],
	      activeIndex: 0,
	      isAnimating: false
	    };
	  },
	
	  computed: {
	    slider: function slider() {
	      return this.$el.querySelectorAll('.item');
	    }
	  },
	  watch: {
	    activeIndex: function activeIndex(newVal, oldVal) {
	      newVal > oldVal ? this.slide('left', newVal, oldVal) : this.slide('right', newVal, oldVal);
	    }
	  },
	  methods: {
	    slide: function slide(direction, selected, prev) {
	      var _this = this;
	
	      if (this._prevSelectedEvent) this._prevSelectedEvent.remove();
	      if (this._selectedEvent) this._selectedEvent.remove();
	      var prevSelectedEl = this.slider[prev];
	      var selectedEl = this.slider[selected];
	      var transitionendFn = function transitionendFn() {
	        [].concat((0, _toConsumableArray3.default)(_this.slider)).forEach(function (el) {
	          return el.className = 'item';
	        });
	        selectedEl.classList.add('active');
	        _this.isAnimating = false;
	      };
	      direction === 'left' ? selectedEl.classList.add('next') : selectedEl.classList.add('prev');
	      // request property that requires layout to force a layout
	      var x = selectedEl.clientHeight;
	      this._prevSelectedEvent = _EventListener2.default.listen(prevSelectedEl, 'transitionend', transitionendFn);
	      this._selectedEvent = _EventListener2.default.listen(selectedEl, 'transitionend', transitionendFn);
	      prevSelectedEl.classList.add(direction);
	      selectedEl.classList.add(direction);
	    },
	    nextClick: function nextClick() {
	      if (this.isAnimating) return false;
	      this.isAnimating = true;
	      this.activeIndex + 1 < this.slider.length ? this.activeIndex += 1 : this.activeIndex = 0;
	    },
	    prevClick: function prevClick() {
	      if (this.isAnimating) return false;
	      this.isAnimating = true;
	      this.activeIndex === 0 ? this.activeIndex = this.slider.length - 1 : this.activeIndex -= 1;
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;
	
	    var intervalID = null;
	    var el = this.$el;
	    function intervalManager(flag, func, time) {
	      flag ? intervalID = setInterval(func, time) : clearInterval(intervalID);
	    }
	    if (!!this.interval) {
	      intervalManager(true, this.nextClick, this.interval);
	      el.addEventListener('mouseenter', function () {
	        return intervalManager(false);
	      });
	      el.addEventListener('mouseleave', function () {
	        return intervalManager(true, _this2.nextClick, _this2.interval);
	      });
	    }
	  }
	};
	// </script>
	//
	// <style scoped>
	//   .carousel-control {
	//     cursor: pointer;
	//   }
	// </style>
	/* generated by vue-loader */

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(89);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(90), __esModule: true };

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(91);
	__webpack_require__(115);
	module.exports = __webpack_require__(99).Array.from;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(92)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(95)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(93)
	  , defined   = __webpack_require__(94);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 93 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 94 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(96)
	  , $export        = __webpack_require__(97)
	  , redefine       = __webpack_require__(102)
	  , hide           = __webpack_require__(103)
	  , has            = __webpack_require__(108)
	  , Iterators      = __webpack_require__(109)
	  , $iterCreate    = __webpack_require__(110)
	  , setToStringTag = __webpack_require__(111)
	  , getProto       = __webpack_require__(104).getProto
	  , ITERATOR       = __webpack_require__(112)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(98)
	  , core      = __webpack_require__(99)
	  , ctx       = __webpack_require__(100)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 98 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 99 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(101);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(103);

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(104)
	  , createDesc = __webpack_require__(105);
	module.exports = __webpack_require__(106) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 104 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(107)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 108 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(104)
	  , descriptor     = __webpack_require__(105)
	  , setToStringTag = __webpack_require__(111)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(103)(IteratorPrototype, __webpack_require__(112)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(104).setDesc
	  , has = __webpack_require__(108)
	  , TAG = __webpack_require__(112)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(113)('wks')
	  , uid    = __webpack_require__(114)
	  , Symbol = __webpack_require__(98).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(98)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 114 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(100)
	  , $export     = __webpack_require__(97)
	  , toObject    = __webpack_require__(116)
	  , call        = __webpack_require__(117)
	  , isArrayIter = __webpack_require__(120)
	  , toLength    = __webpack_require__(121)
	  , getIterFn   = __webpack_require__(122);
	$export($export.S + $export.F * !__webpack_require__(125)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(94);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(118);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(119);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(109)
	  , ITERATOR   = __webpack_require__(112)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(93)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(123)
	  , ITERATOR  = __webpack_require__(112)('iterator')
	  , Iterators = __webpack_require__(109);
	module.exports = __webpack_require__(99).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(124)
	  , TAG = __webpack_require__(112)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 124 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(112)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 126 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	
	  listen: function listen(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function remove() {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  }
	};
	
	exports.default = EventListener;

/***/ },
/* 127 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"carousel slide\" data-ride=\"carousel\" _v-69b62e64=\"\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\" v-show=\"indicators\" _v-69b62e64=\"\">\n    <indicator _v-69b62e64=\"\"></indicator>\n  </ol>\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\" _v-69b62e64=\"\">\n    <slot _v-69b62e64=\"\"></slot>\n  </div>\n  <!-- Controls -->\n  <a v-show=\"controls\" class=\"left carousel-control\" @click=\"prevClick\" _v-69b62e64=\"\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" _v-69b62e64=\"\"></span>\n    <span class=\"sr-only\" _v-69b62e64=\"\">Previous</span>\n  </a>\n  <a v-show=\"controls\" class=\"right carousel-control\" @click=\"nextClick\" _v-69b62e64=\"\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" _v-69b62e64=\"\"></span>\n    <span class=\"sr-only\" _v-69b62e64=\"\">Next</span>\n  </a>\n</div>\n";

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(129)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Slider.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(130)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Slider.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 129 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="item">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      index: 0,
	      show: false
	    };
	  },
	
	  computed: {
	    show: function show() {
	      return this.$parent.activeIndex === this.index;
	    }
	  },
	  ready: function ready() {
	    for (var c in this.$parent.$children) {
	      if (this.$parent.$children[c].$el == this.$el) {
	        this.index = parseInt(c, 10);
	        break;
	      }
	    }
	    //this.index = [...this.$el.parentNode.children].indexOf(this.$el)
	    this.$parent.indicator.push(this.index);
	    if (this.index === 0) {
	      this.$el.classList.add('active');
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 130 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"item\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(132)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Accordion.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(133)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Accordion.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(82);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    oneAtATime: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    }
	  },
	  created: function created() {
	    var _this = this;
	
	    this.$on('isOpenEvent', function (child) {
	      if (_this.oneAtATime) {
	        _this.$children.forEach(function (item) {
	          if (child !== item) {
	            item.isOpen = false;
	          }
	        });
	      }
	    });
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="panel-group">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 133 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"panel-group\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(135)
	__vue_script__ = __webpack_require__(137)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Affix.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(138)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Affix.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(136);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(80)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Affix.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Affix.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(79)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.vue-affix {\n  position: fixed;\n}\n", "", {"version":3,"sources":["/./src/components/Affix.vue?43e2bfa3"],"names":[],"mappings":";AAqFA;EACA,gBAAA;CACA","file":"Affix.vue","sourcesContent":["<template>\n<div>\n<div v-bind:class=\"{'vue-affix': affixed}\"\n  v-bind:style=\"styles\">\n  <slot></slot>\n</div>\n</div>\n</template>\n\n<script>\nimport EventListener from './utils/EventListener.js'\n  export default {\n    props: {\n      offset: {\n        type: Number,\n        default: 0\n      }\n    },\n    data() {\n      return {\n        affixed: false,\n        styles: {}\n      }\n    },\n    methods: {\n      scrolling() {\n        const scrollTop = this.getScroll(window, true)\n        const elementOffset = this.getOffset(this.$el)\n        if (!this.affixed && scrollTop > elementOffset.top) {\n          this.affixed = true\n          this.styles = {\n            top: this.offset + 'px',\n            left: elementOffset.left + 'px',\n            width: this.$el.offsetWidth + 'px'\n          }\n        }\n        if (this.affixed && scrollTop < elementOffset.top) {\n          this.affixed = false\n          this.styles = {}\n        }\n      },\n      // from https://github.com/ant-design/ant-design/blob/master/components/affix/index.jsx#L20\n      getScroll(w, top) {\n        let ret = w['page' + (top ? 'Y' : 'X') + 'Offset']\n        const method = 'scroll' + (top ? 'Top' : 'Left')\n        if (typeof ret !== 'number') {\n          const d = w.document\n          // ie6,7,8 standard mode\n          ret = d.documentElement[method]\n          if (typeof ret !== 'number') {\n            // quirks mode\n            ret = d.body[method]\n          }\n        }\n        return ret\n      },\n      getOffset(element) {\n        const rect = element.getBoundingClientRect()\n        const body = document.body\n        const clientTop = element.clientTop || body.clientTop || 0\n        const clientLeft = element.clientLeft || body.clientLeft || 0\n        const scrollTop = this.getScroll(window, true)\n        const scrollLeft = this.getScroll(window)\n        return {\n          top: rect.top + scrollTop - clientTop,\n          left: rect.left + scrollLeft - clientLeft\n        }\n      }\n    },\n    ready() {\n      this._scrollEvent = EventListener.listen(window, 'scroll', this.scrolling)\n      this._resizeEvent = EventListener.listen(window, 'resize', this.scrolling)\n    },\n    beforeDestroy() {\n      if (this._scrollEvent) {\n        this._scrollEvent.remove()\n      }\n      if (this._resizeEvent) {\n        this._resizeEvent.remove()\n      }\n    }\n  }\n</script>\n\n<style>\n  .vue-affix {\n    position: fixed;\n  }\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(126);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    offset: {
	      type: Number,
	      default: 0
	    }
	  },
	  data: function data() {
	    return {
	      affixed: false,
	      styles: {}
	    };
	  },
	
	  methods: {
	    scrolling: function scrolling() {
	      var scrollTop = this.getScroll(window, true);
	      var elementOffset = this.getOffset(this.$el);
	      if (!this.affixed && scrollTop > elementOffset.top) {
	        this.affixed = true;
	        this.styles = {
	          top: this.offset + 'px',
	          left: elementOffset.left + 'px',
	          width: this.$el.offsetWidth + 'px'
	        };
	      }
	      if (this.affixed && scrollTop < elementOffset.top) {
	        this.affixed = false;
	        this.styles = {};
	      }
	    },
	
	    // from https://github.com/ant-design/ant-design/blob/master/components/affix/index.jsx#L20
	    getScroll: function getScroll(w, top) {
	      var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	      var method = 'scroll' + (top ? 'Top' : 'Left');
	      if (typeof ret !== 'number') {
	        var d = w.document;
	        // ie6,7,8 standard mode
	        ret = d.documentElement[method];
	        if (typeof ret !== 'number') {
	          // quirks mode
	          ret = d.body[method];
	        }
	      }
	      return ret;
	    },
	    getOffset: function getOffset(element) {
	      var rect = element.getBoundingClientRect();
	      var body = document.body;
	      var clientTop = element.clientTop || body.clientTop || 0;
	      var clientLeft = element.clientLeft || body.clientLeft || 0;
	      var scrollTop = this.getScroll(window, true);
	      var scrollLeft = this.getScroll(window);
	      return {
	        top: rect.top + scrollTop - clientTop,
	        left: rect.left + scrollLeft - clientLeft
	      };
	    }
	  },
	  ready: function ready() {
	    this._scrollEvent = _EventListener2.default.listen(window, 'scroll', this.scrolling);
	    this._resizeEvent = _EventListener2.default.listen(window, 'resize', this.scrolling);
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._scrollEvent) {
	      this._scrollEvent.remove();
	    }
	    if (this._resizeEvent) {
	      this._resizeEvent.remove();
	    }
	  }
	};
	// </script>
	//
	// <style>
	//   .vue-affix {
	//     position: fixed;
	//   }
	// </style>

	/* generated by vue-loader */
	// <template>
	// <div>
	// <div v-bind:class="{'vue-affix': affixed}"
	//   v-bind:style="styles">
	//   <slot></slot>
	// </div>
	// </div>
	// </template>
	//
	// <script>

/***/ },
/* 138 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n<div v-bind:class=\"{'vue-affix': affixed}\"\n  v-bind:style=\"styles\">\n  <slot></slot>\n</div>\n</div>\n";

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(140)
	__vue_script__ = __webpack_require__(142)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Aside.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(144)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Aside.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(141);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(80)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Aside.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Aside.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(79)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.aside-open {\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n.aside-open.has-push-right {\n  -webkit-transform: translateX(-300px);\n          transform: translateX(-300px);\n}\n.aside {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    z-index: 1049;\n    overflow: auto;\n    background: #fff;\n}\n.aside.left {\n  left: 0;\n  right: auto;\n}\n.aside.right {\n  left: auto;\n  right: 0;\n}\n\n.slideleft-enter {\n  -webkit-animation:slideleft-in .3s;\n          animation:slideleft-in .3s;\n}\n.slideleft-leave {\n  -webkit-animation:slideleft-out .3s;\n          animation:slideleft-out .3s;\n}\n@-webkit-keyframes slideleft-in {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes slideleft-in {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideleft-out {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    opacity: 0;\n  }\n}\n@keyframes slideleft-out {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    opacity: 0;\n  }\n}\n.slideright-enter {\n  -webkit-animation:slideright-in .3s;\n          animation:slideright-in .3s;\n}\n.slideright-leave {\n  -webkit-animation:slideright-out .3s;\n          animation:slideright-out .3s;\n}\n@-webkit-keyframes slideright-in {\n  0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes slideright-in {\n  0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideright-out {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 0;\n  }\n}\n@keyframes slideright-out {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 0;\n  }\n}\n\n.aside:focus {\n    outline: 0\n}\n\n@media (max-width: 991px) {\n    .aside {\n        min-width:240px\n    }\n}\n\n.aside.left {\n    right: auto;\n    left: 0\n}\n\n.aside.right {\n    right: 0;\n    left: auto\n}\n\n.aside .aside-dialog .aside-header {\n    border-bottom: 1px solid #e5e5e5;\n    min-height: 16.43px;\n    padding: 6px 15px;\n    background: #337ab7;\n    color: #fff\n}\n\n.aside .aside-dialog .aside-header .close {\n    margin-right: -8px;\n    padding: 4px 8px;\n    color: #fff;\n    font-size: 25px;\n    opacity: .8\n}\n\n.aside .aside-dialog .aside-body {\n    position: relative;\n    padding: 15px\n}\n\n.aside .aside-dialog .aside-footer {\n    padding: 15px;\n    text-align: right;\n    border-top: 1px solid #e5e5e5\n}\n\n.aside .aside-dialog .aside-footer .btn+.btn {\n    margin-left: 5px;\n    margin-bottom: 0\n}\n\n.aside .aside-dialog .aside-footer .btn-group .btn+.btn {\n    margin-left: -1px\n}\n\n.aside .aside-dialog .aside-footer .btn-block+.btn-block {\n    margin-left: 0\n}\n\n.aside-backdrop {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1040;\n    opacity: 0;\n    -webkit-transition: opacity .3s ease;\n    transition: opacity .3s ease;\n    background-color: #000\n}\n\n\n.aside-backdrop.in {\n    opacity: .5;\n    filter: alpha(opacity=50)\n}\n", "", {"version":3,"sources":["/./src/components/Aside.vue?5d227c8c"],"names":[],"mappings":";AAqFA;EACA,2CAAA;EAAA,mCAAA;EAAA,2BAAA;EAAA,mDAAA;CACA;AACA;EACA,sCAAA;UAAA,8BAAA;CACA;AACA;IACA,gBAAA;IACA,OAAA;IACA,UAAA;IACA,cAAA;IACA,eAAA;IACA,iBAAA;CACA;AACA;EACA,QAAA;EACA,YAAA;CACA;AACA;EACA,WAAA;EACA,SAAA;CACA;;AAEA;EACA,mCAAA;UAAA,2BAAA;CACA;AACA;EACA,oCAAA;UAAA,4BAAA;CACA;AACA;EACA;IACA,qCAAA;YAAA,6BAAA;IACA,WAAA;GACA;EACA;IACA,iCAAA;YAAA,yBAAA;IACA,WAAA;GACA;CACA;AATA;EACA;IACA,qCAAA;YAAA,6BAAA;IACA,WAAA;GACA;EACA;IACA,iCAAA;YAAA,yBAAA;IACA,WAAA;GACA;CACA;AACA;EACA;IACA,iCAAA;YAAA,yBAAA;IACA,WAAA;GACA;EACA;IACA,qCAAA;YAAA,6BAAA;IACA,WAAA;GACA;CACA;AATA;EACA;IACA,iCAAA;YAAA,yBAAA;IACA,WAAA;GACA;EACA;IACA,qCAAA;YAAA,6BAAA;IACA,WAAA;GACA;CACA;AACA;EACA,oCAAA;UAAA,4BAAA;CACA;AACA;EACA,qCAAA;UAAA,6BAAA;CACA;AACA;EACA;IACA,oCAAA;YAAA,4BAAA;IACA,WAAA;GACA;EACA;IACA,iCAAA;YAAA,yBAAA;IACA,WAAA;GACA;CACA;AATA;EACA;IACA,oCAAA;YAAA,4BAAA;IACA,WAAA;GACA;EACA;IACA,iCAAA;YAAA,yBAAA;IACA,WAAA;GACA;CACA;AACA;EACA;IACA,iCAAA;YAAA,yBAAA;IACA,WAAA;GACA;EACA;IACA,oCAAA;YAAA,4BAAA;IACA,WAAA;GACA;CACA;AATA;EACA;IACA,iCAAA;YAAA,yBAAA;IACA,WAAA;GACA;EACA;IACA,oCAAA;YAAA,4BAAA;IACA,WAAA;GACA;CACA;;AAEA;IACA,UAAA;CACA;;AAEA;IACA;QACA,eAAA;KACA;CACA;;AAEA;IACA,YAAA;IACA,OAAA;CACA;;AAEA;IACA,SAAA;IACA,UAAA;CACA;;AAEA;IACA,iCAAA;IACA,oBAAA;IACA,kBAAA;IACA,oBAAA;IACA,WAAA;CACA;;AAEA;IACA,mBAAA;IACA,iBAAA;IACA,YAAA;IACA,gBAAA;IACA,WAAA;CACA;;AAEA;IACA,mBAAA;IACA,aAAA;CACA;;AAEA;IACA,cAAA;IACA,kBAAA;IACA,6BAAA;CACA;;AAEA;IACA,iBAAA;IACA,gBAAA;CACA;;AAEA;IACA,iBAAA;CACA;;AAEA;IACA,cAAA;CACA;;AAEA;IACA,gBAAA;IACA,OAAA;IACA,SAAA;IACA,UAAA;IACA,QAAA;IACA,cAAA;IACA,WAAA;IACA,qCAAA;IAAA,6BAAA;IACA,sBAAA;CACA;;;AAGA;IACA,YAAA;IACA,yBAAA;CACA","file":"Aside.vue","sourcesContent":["<template>\n  <div class=\"aside\"\n    v-bind:style=\"{width:width + 'px'}\"\n    v-bind:class=\"{\n    left:placement === 'left',\n    right:placement === 'right'\n    }\"\n    v-show=\"show\"\n    :transition=\"(this.placement === 'left') ? 'slideleft' : 'slideright'\">\n    <div class=\"aside-dialog\">\n      <div class=\"aside-content\">\n        <div class=\"aside-header\">\n          <button type=\"button\" class=\"close\" @click='close'><span>&times;</span></button>\n          <h4 class=\"aside-title\">{{header}}</h4>\n        </div>\n        <div class=\"aside-body\">\n          <slot></slot>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport EventListener from './utils/EventListener.js'\nimport getScrollBarWidth from './utils/getScrollBarWidth.js'\nimport coerceBoolean from './utils/coerceBoolean.js'\n\n  export default {\n    props: {\n      show: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        require: true,\n        twoWay: true\n      },\n      placement: {\n        type: String,\n        default: 'right'\n      },\n      header: {\n        type: String\n      },\n      width: {\n        type: Number,\n        default: '320'\n      }\n    },\n    watch: {\n      show(val) {\n        let backdrop = document.createElement('div')\n        const body = document.body\n        backdrop.className = 'aside-backdrop'\n        const scrollBarWidth =  getScrollBarWidth()\n        if (val) {\n          body.appendChild(backdrop)\n          body.classList.add('modal-open')\n          if (scrollBarWidth !== 0) {\n            body.style.paddingRight = scrollBarWidth + 'px'\n          }\n          // request property that requires layout to force a layout\n          var x = backdrop.clientHeight\n          backdrop.className += ' in'\n          this._clickEvent = EventListener.listen(backdrop, 'click', this.close)\n        } else {\n          if (this._clickEvent) this._clickEvent.remove()\n          backdrop = document.querySelector('.aside-backdrop')\n          try {\n              backdrop.className = 'aside-backdrop'\n              body.classList.remove('modal-open')\n              body.style.paddingRight = '0'\n              body.removeChild(backdrop)\n          } catch(e) {}\n        }\n      }\n    },\n    methods: {\n      close() {\n        this.show = false\n      }\n    }\n  }\n</script>\n\n<style>\n  .aside-open {\n    transition: transform 0.3s;\n  }\n  .aside-open.has-push-right {\n    transform: translateX(-300px);\n  }\n  .aside {\n      position: fixed;\n      top: 0;\n      bottom: 0;\n      z-index: 1049;\n      overflow: auto;\n      background: #fff;\n  }\n  .aside.left {\n    left: 0;\n    right: auto;\n  }\n  .aside.right {\n    left: auto;\n    right: 0;\n  }\n\n  .slideleft-enter {\n    animation:slideleft-in .3s;\n  }\n  .slideleft-leave {\n    animation:slideleft-out .3s;\n  }\n  @keyframes slideleft-in {\n    0% {\n      transform: translateX(-100%);\n      opacity: 0;\n    }\n    100% {\n      transform: translateX(0);\n      opacity: 1;\n    }\n  }\n  @keyframes slideleft-out {\n    0% {\n      transform: translateX(0);\n      opacity: 1;\n    }\n    100% {\n      transform: translateX(-100%);\n      opacity: 0;\n    }\n  }\n  .slideright-enter {\n    animation:slideright-in .3s;\n  }\n  .slideright-leave {\n    animation:slideright-out .3s;\n  }\n  @keyframes slideright-in {\n    0% {\n      transform: translateX(100%);\n      opacity: 0;\n    }\n    100% {\n      transform: translateX(0);\n      opacity: 1;\n    }\n  }\n  @keyframes slideright-out {\n    0% {\n      transform: translateX(0);\n      opacity: 1;\n    }\n    100% {\n      transform: translateX(100%);\n      opacity: 0;\n    }\n  }\n\n  .aside:focus {\n      outline: 0\n  }\n\n  @media (max-width: 991px) {\n      .aside {\n          min-width:240px\n      }\n  }\n\n  .aside.left {\n      right: auto;\n      left: 0\n  }\n\n  .aside.right {\n      right: 0;\n      left: auto\n  }\n\n  .aside .aside-dialog .aside-header {\n      border-bottom: 1px solid #e5e5e5;\n      min-height: 16.43px;\n      padding: 6px 15px;\n      background: #337ab7;\n      color: #fff\n  }\n\n  .aside .aside-dialog .aside-header .close {\n      margin-right: -8px;\n      padding: 4px 8px;\n      color: #fff;\n      font-size: 25px;\n      opacity: .8\n  }\n\n  .aside .aside-dialog .aside-body {\n      position: relative;\n      padding: 15px\n  }\n\n  .aside .aside-dialog .aside-footer {\n      padding: 15px;\n      text-align: right;\n      border-top: 1px solid #e5e5e5\n  }\n\n  .aside .aside-dialog .aside-footer .btn+.btn {\n      margin-left: 5px;\n      margin-bottom: 0\n  }\n\n  .aside .aside-dialog .aside-footer .btn-group .btn+.btn {\n      margin-left: -1px\n  }\n\n  .aside .aside-dialog .aside-footer .btn-block+.btn-block {\n      margin-left: 0\n  }\n\n  .aside-backdrop {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: 1040;\n      opacity: 0;\n      transition: opacity .3s ease;\n      background-color: #000\n  }\n\n\n  .aside-backdrop.in {\n      opacity: .5;\n      filter: alpha(opacity=50)\n  }\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(126);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _getScrollBarWidth = __webpack_require__(143);
	
	var _getScrollBarWidth2 = _interopRequireDefault(_getScrollBarWidth);
	
	var _coerceBoolean = __webpack_require__(82);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    show: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      require: true,
	      twoWay: true
	    },
	    placement: {
	      type: String,
	      default: 'right'
	    },
	    header: {
	      type: String
	    },
	    width: {
	      type: Number,
	      default: '320'
	    }
	  },
	  watch: {
	    show: function show(val) {
	      var backdrop = document.createElement('div');
	      var body = document.body;
	      backdrop.className = 'aside-backdrop';
	      var scrollBarWidth = (0, _getScrollBarWidth2.default)();
	      if (val) {
	        body.appendChild(backdrop);
	        body.classList.add('modal-open');
	        if (scrollBarWidth !== 0) {
	          body.style.paddingRight = scrollBarWidth + 'px';
	        }
	        // request property that requires layout to force a layout
	        var x = backdrop.clientHeight;
	        backdrop.className += ' in';
	        this._clickEvent = _EventListener2.default.listen(backdrop, 'click', this.close);
	      } else {
	        if (this._clickEvent) this._clickEvent.remove();
	        backdrop = document.querySelector('.aside-backdrop');
	        try {
	          backdrop.className = 'aside-backdrop';
	          body.classList.remove('modal-open');
	          body.style.paddingRight = '0';
	          body.removeChild(backdrop);
	        } catch (e) {}
	      }
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	    }
	  }
	};
	// </script>
	//
	// <style>
	//   .aside-open {
	//     transition: transform 0.3s;
	//   }
	//   .aside-open.has-push-right {
	//     transform: translateX(-300px);
	//   }
	//   .aside {
	//       position: fixed;
	//       top: 0;
	//       bottom: 0;
	//       z-index: 1049;
	//       overflow: auto;
	//       background: #fff;
	//   }
	//   .aside.left {
	//     left: 0;
	//     right: auto;
	//   }
	//   .aside.right {
	//     left: auto;
	//     right: 0;
	//   }
	//
	//   .slideleft-enter {
	//     animation:slideleft-in .3s;
	//   }
	//   .slideleft-leave {
	//     animation:slideleft-out .3s;
	//   }
	//   @keyframes slideleft-in {
	//     0% {
	//       transform: translateX(-100%);
	//       opacity: 0;
	//     }
	//     100% {
	//       transform: translateX(0);
	//       opacity: 1;
	//     }
	//   }
	//   @keyframes slideleft-out {
	//     0% {
	//       transform: translateX(0);
	//       opacity: 1;
	//     }
	//     100% {
	//       transform: translateX(-100%);
	//       opacity: 0;
	//     }
	//   }
	//   .slideright-enter {
	//     animation:slideright-in .3s;
	//   }
	//   .slideright-leave {
	//     animation:slideright-out .3s;
	//   }
	//   @keyframes slideright-in {
	//     0% {
	//       transform: translateX(100%);
	//       opacity: 0;
	//     }
	//     100% {
	//       transform: translateX(0);
	//       opacity: 1;
	//     }
	//   }
	//   @keyframes slideright-out {
	//     0% {
	//       transform: translateX(0);
	//       opacity: 1;
	//     }
	//     100% {
	//       transform: translateX(100%);
	//       opacity: 0;
	//     }
	//   }
	//
	//   .aside:focus {
	//       outline: 0
	//   }
	//
	//   @media (max-width: 991px) {
	//       .aside {
	//           min-width:240px
	//       }
	//   }
	//
	//   .aside.left {
	//       right: auto;
	//       left: 0
	//   }
	//
	//   .aside.right {
	//       right: 0;
	//       left: auto
	//   }
	//
	//   .aside .aside-dialog .aside-header {
	//       border-bottom: 1px solid #e5e5e5;
	//       min-height: 16.43px;
	//       padding: 6px 15px;
	//       background: #337ab7;
	//       color: #fff
	//   }
	//
	//   .aside .aside-dialog .aside-header .close {
	//       margin-right: -8px;
	//       padding: 4px 8px;
	//       color: #fff;
	//       font-size: 25px;
	//       opacity: .8
	//   }
	//
	//   .aside .aside-dialog .aside-body {
	//       position: relative;
	//       padding: 15px
	//   }
	//
	//   .aside .aside-dialog .aside-footer {
	//       padding: 15px;
	//       text-align: right;
	//       border-top: 1px solid #e5e5e5
	//   }
	//
	//   .aside .aside-dialog .aside-footer .btn+.btn {
	//       margin-left: 5px;
	//       margin-bottom: 0
	//   }
	//
	//   .aside .aside-dialog .aside-footer .btn-group .btn+.btn {
	//       margin-left: -1px
	//   }
	//
	//   .aside .aside-dialog .aside-footer .btn-block+.btn-block {
	//       margin-left: 0
	//   }
	//
	//   .aside-backdrop {
	//       position: fixed;
	//       top: 0;
	//       right: 0;
	//       bottom: 0;
	//       left: 0;
	//       z-index: 1040;
	//       opacity: 0;
	//       transition: opacity .3s ease;
	//       background-color: #000
	//   }
	//
	//
	//   .aside-backdrop.in {
	//       opacity: .5;
	//       filter: alpha(opacity=50)
	//   }
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <div class="aside"
	//     v-bind:style="{width:width + 'px'}"
	//     v-bind:class="{
	//     left:placement === 'left',
	//     right:placement === 'right'
	//     }"
	//     v-show="show"
	//     :transition="(this.placement === 'left') ? 'slideleft' : 'slideright'">
	//     <div class="aside-dialog">
	//       <div class="aside-content">
	//         <div class="aside-header">
	//           <button type="button" class="close" @click='close'><span>&times;</span></button>
	//           <h4 class="aside-title">{{header}}</h4>
	//         </div>
	//         <div class="aside-body">
	//           <slot></slot>
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 143 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  if (document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
	    return 0;
	  }
	  var inner = document.createElement('p');
	  inner.style.width = '100%';
	  inner.style.height = '200px';
	
	  var outer = document.createElement('div');
	  outer.style.position = 'absolute';
	  outer.style.top = '0px';
	  outer.style.left = '0px';
	  outer.style.visibility = 'hidden';
	  outer.style.width = '200px';
	  outer.style.height = '150px';
	  outer.style.overflow = 'hidden';
	  outer.appendChild(inner);
	
	  document.body.appendChild(outer);
	  var w1 = inner.offsetWidth;
	  outer.style.overflow = 'scroll';
	  var w2 = inner.offsetWidth;
	  if (w1 === w2) w2 = outer.clientWidth;
	
	  document.body.removeChild(outer);
	
	  return w1 - w2;
	};

/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"aside\"\n  v-bind:style=\"{width:width + 'px'}\"\n  v-bind:class=\"{\n  left:placement === 'left',\n  right:placement === 'right'\n  }\"\n  v-show=\"show\"\n  :transition=\"(this.placement === 'left') ? 'slideleft' : 'slideright'\">\n  <div class=\"aside-dialog\">\n    <div class=\"aside-content\">\n      <div class=\"aside-header\">\n        <button type=\"button\" class=\"close\" @click='close'><span>&times;</span></button>\n        <h4 class=\"aside-title\">{{header}}</h4>\n      </div>\n      <div class=\"aside-body\">\n        <slot></slot>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(146)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/checkboxGroup.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(147)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/checkboxGroup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 146 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="btn-group" data-toggle="buttons" :class="{
	//     'large': size == 'large',
	//     'small': size == 'small'
	//   }">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    type: {
	      type: String,
	      default: 'default'
	    },
	    size: {
	      type: String,
	      default: 'default'
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 147 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"btn-group\" data-toggle=\"buttons\" :class=\"{\n  'large': size == 'large',\n  'small': size == 'small'\n}\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(149)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/checkboxBtn.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(150)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/checkboxBtn.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(82);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    value: {
	      type: String
	    },
	    checked: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    size: String
	  },
	  methods: {
	    handleClick: function handleClick() {
	      var parent = this.$parent;
	      var index = parent.value.indexOf(this.value);
	      index === -1 ? parent.value.push(this.value) : parent.value.splice(index, 1);
	      this.checked = !this.checked;
	    }
	  },
	  created: function created() {
	    if (this.$parent.value.length) {
	      this.checked = this.$parent.value.indexOf(this.value) > -1;
	    } else if (this.checked) {
	      this.$parent.value.push(this.value);
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <label class="button"
	//   v-bind:class="{
	//     'active':checked,
	//     'large': size == 'large',
	//     'small': size == 'small'
	//   }">
	//     <input type="checkbox" autocomplete="off"
	//     :checked="checked"
	//     @click="handleClick"
	//     />
	//
	//     <slot></slot>
	//   </label>
	// </template>
	// <script>
	//'btn-success':type == 'success',
	// 'btn-warning':type == 'warning',
	// 'btn-info':type == 'info',
	// 'btn-danger':type == 'danger',
	// 'btn-default':type == 'default',
	// 'btn-primary':type == 'primary',

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = "\n<label class=\"button\"\nv-bind:class=\"{\n  'active':checked,\n  'large': size == 'large',\n  'small': size == 'small'\n}\">\n  <input type=\"checkbox\" autocomplete=\"off\"\n  :checked=\"checked\"\n  @click=\"handleClick\"\n  />\n\n  <slot></slot>\n</label>\n";

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(152)
	__webpack_require__(154)
	__vue_script__ = __webpack_require__(156)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Datepicker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(157)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Datepicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(153);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(80)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Datepicker.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Datepicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(79)();
	// imports
	
	
	// module
	exports.push([module.id, "\ninput.datepicker-input.with-reset-button {\n  padding-right: 25px;\n}\n\ndiv.datepicker > button.close {\n  position: absolute;\n  top: calc(50% - 13px);\n  right: 10px;\n}\n\ndiv.datepicker > button.close {\n  outline: none;\n  z-index: 2;\n}\n\ndiv.datepicker > button.close:focus {\n  opacity: .2;\n}\n", "", {"version":3,"sources":["/./src/components/Datepicker.vue?cac9b692"],"names":[],"mappings":";AACA;EACA,oBAAA;CACA;;AAEA;EACA,mBAAA;EACA,sBAAA;EACA,YAAA;CACA;;AAEA;EACA,cAAA;EACA,WAAA;CACA;;AAEA;EACA,YAAA;CACA","file":"Datepicker.vue","sourcesContent":["<style>\n  input.datepicker-input.with-reset-button {\n    padding-right: 25px;\n  }\n\n  div.datepicker > button.close {\n    position: absolute;\n    top: calc(50% - 13px);\n    right: 10px;\n  }\n\n  div.datepicker > button.close {\n    outline: none;\n    z-index: 2;\n  }\n\n  div.datepicker > button.close:focus {\n    opacity: .2;\n  }\n</style>\n\n<template>\n  <div class=\"datepicker\">\n    <input class=\"form-control datepicker-input\" :class=\"{'with-reset-button': showResetButton}\" type=\"text\"\n        v-bind:style=\"{width:width}\"\n        @click=\"inputClick\"\n        v-model=\"value\"/>\n    <button v-if=\"showResetButton\" type=\"button\" class=\"close\" @click=\"value = ''\">\n      <span>&times;</span>\n    </button>\n    <div class=\"datepicker-popup\" v-show=\"displayDayView\">\n      <div class=\"datepicker-inner\">\n        <div class=\"datepicker-body\">\n          <div class=\"datepicker-ctrl\">\n            <span class=\"month-btn datepicker-preBtn\" @click=\"preNextMonthClick(0)\">&lt;</span>\n            <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextMonthClick(1)\">&gt;</span>\n            <p @click=\"switchMonthView\">{{stringifyDayHeader(currDate)}}</p>\n          </div>\n          <div class=\"datepicker-weekRange\">\n            <span v-for=\"w in weekRange\">{{w}}</span>\n          </div>\n          <div class=\"datepicker-dateRange\">\n            <span v-for=\"d in dateRange\" v-bind:class=\"d.sclass\" @click=\"daySelect(d.date,this)\">{{d.text}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"datepicker-popup\" v-show=\"displayMonthView\">\n      <div class=\"datepicker-inner\">\n        <div class=\"datepicker-body\">\n          <div class=\"datepicker-ctrl\">\n            <span class=\"month-btn datepicker-preBtn\" @click=\"preNextYearClick(0)\">&lt;</span>\n            <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextYearClick(1)\">&gt;</span>\n            <p @click=\"switchDecadeView\">{{stringifyYearHeader(currDate)}}</p>\n          </div>\n          <div class=\"datepicker-monthRange\">\n            <template v-for=\"m in monthNames\">\n              <span   v-bind:class=\"{'datepicker-dateRange-item-active':\n                  (this.monthNames[this.parse(this.value).getMonth()]  === m) &&\n                  this.currDate.getFullYear() === this.parse(this.value).getFullYear()}\"\n                  @click=\"monthSelect($index)\"\n                >{{m.substr(0,3)}}</span>\n            </template>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"datepicker-popup\" v-show=\"displayYearView\">\n      <div class=\"datepicker-inner\">\n        <div class=\"datepicker-body\">\n          <div class=\"datepicker-ctrl\">\n            <span class=\"month-btn datepicker-preBtn\" @click=\"preNextDecadeClick(0)\">&lt;</span>\n            <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextDecadeClick(1)\">&gt;</span>\n            <p>{{stringifyDecadeHeader(currDate)}}</p>\n          </div>\n          <div class=\"datepicker-monthRange decadeRange\">\n            <template v-for=\"decade in decadeRange\">\n              <span v-bind:class=\"{'datepicker-dateRange-item-active':\n                  this.parse(this.value).getFullYear() === decade.text}\"\n                  @click.stop=\"yearSelect(decade.text)\"\n                >{{decade.text}}</span>\n            </template>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport EventListener from './utils/EventListener.js'\nconst localeConfig = {\n  zh_CN : {\n    weekRange: ['日', '一', '二', '三', '四', '五', '六'],\n    monthNames : [\n      '1', '2', '3',\n      '4', '5', '6',\n      '7', '8', '8',\n      '10', '11', '12'\n    ]\n  },\n  en_US : {\n    weekRange: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],\n    monthNames : [\n      'January', 'February', 'March',\n      'April', 'May', 'June',\n      'July', 'August', 'September',\n      'October', 'November', 'December'\n    ]\n  }\n}\nexport default {\n  props: {\n    value: {\n      type: String,\n      twoWay: true\n    },\n    format: {\n      default: 'MMMM/dd/yyyy'\n    },\n    locale:{\n      default : 'zh_CN'\n    },\n    disabledDaysOfWeek: {\n      type: Array,\n      default() {\n        return []\n      }\n    },\n    width: {\n      type: String,\n      default: '200px'\n    },\n    showResetButton: {\n      type: Boolean,\n      default: false\n    }\n  },\n  data() {\n    return {\n      weekRange: localeConfig[this.locale].weekRange,\n      dateRange: [],\n      decadeRange: [],\n      currDate: new Date,\n      displayDayView: false,\n      displayMonthView: false,\n      displayYearView: false,\n      monthNames: localeConfig[this.locale].monthNames\n    }\n  },\n  watch: {\n    currDate() {\n      this.getDateRange()\n    }\n  },\n  methods: {\n    close() {\n      this.displayDayView = this.displayMonthView = this.displayMonthView = false\n    },\n    inputClick() {\n      if (this.displayMonthView || this.displayYearView) {\n        this.displayDayView = false\n      } else {\n        this.displayDayView = !this.displayDayView\n      }\n    },\n    preNextDecadeClick(flag) {\n      const year = this.currDate.getFullYear()\n      const months = this.currDate.getMonth()\n      const date = this.currDate.getDate()\n\n      if (flag === 0) {\n        this.currDate = new Date(year - 10, months, date)\n      } else {\n        this.currDate = new Date(year + 10, months, date)\n      }\n    },\n    preNextMonthClick(flag) {\n      const year = this.currDate.getFullYear()\n      const month = this.currDate.getMonth()\n      const date = this.currDate.getDate()\n\n\n      if (flag === 0) {\n        const preMonth = this.getYearMonth(year, month - 1)\n        this.currDate = new Date(preMonth.year, preMonth.month, date)\n      } else {\n        const nextMonth = this.getYearMonth(year, month + 1)\n        this.currDate = new Date(nextMonth.year, nextMonth.month, date)\n      }\n    },\n    preNextYearClick(flag) {\n      const year = this.currDate.getFullYear()\n      const months = this.currDate.getMonth()\n      const date = this.currDate.getDate()\n\n      if (flag === 0) {\n        this.currDate = new Date(year - 1, months, date)\n      } else {\n        this.currDate = new Date(year + 1, months, date)\n      }\n    },\n    yearSelect(year) {\n      this.displayYearView = false\n      this.displayMonthView = true\n      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate())\n    },\n    daySelect(date, el) {\n      if (el.$el.classList[0] === 'datepicker-item-disable') {\n        return false\n      } else {\n        this.currDate = date\n        this.value = this.stringify(this.currDate)\n        this.displayDayView = false\n      }\n    },\n    switchMonthView() {\n      this.displayDayView = false\n      this.displayMonthView = true\n    },\n    switchDecadeView() {\n      this.displayMonthView = false\n      this.displayYearView = true\n    },\n    monthSelect(index) {\n      this.displayMonthView = false\n      this.displayDayView = true\n      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate())\n    },\n    getYearMonth(year, month) {\n      if (month > 11) {\n        year++\n          month = 0\n      } else if (month < 0) {\n        year--\n          month = 11\n      }\n      return {year: year, month: month}\n    },\n    stringifyDecadeHeader(date) {\n      const yearStr = date.getFullYear().toString()\n      const firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0\n      const lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10\n      return firstYearOfDecade + '-' + lastYearOfDecade\n    },\n    stringifyDayHeader(date) {\n      return this.monthNames[date.getMonth()] + ' ' + date.getFullYear()\n    },\n    parseMonth(date) {\n      return this.monthNames[date.getMonth()]\n    },\n    stringifyYearHeader(date) {\n      return date.getFullYear()\n    },\n    stringify(date, format = this.format) {\n      const year = date.getFullYear()\n      const month = date.getMonth() + 1\n      const day = date.getDate()\n      const monthName = this.parseMonth(date)\n\n      return format\n      .replace(/yyyy/g, year)\n      .replace(/MMMM/g, monthName)\n      .replace(/MMM/g, monthName.substring(0, 3))\n      .replace(/MM/g, ('0' + month).slice(-2))\n      .replace(/dd/g, ('0' + day).slice(-2))\n      .replace(/yy/g, year)\n      .replace(/M(?!a)/g, month)\n      .replace(/d/g, day)\n    },\n    parse(str) {\n      const date = new Date(str)\n      return isNaN(date.getFullYear()) ? null : date\n    },\n    getDayCount(year, month) {\n      const dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\n\n      if (month === 1) {\n        if ( (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0) ) {\n          return 29\n        }\n        return 28\n      }\n\n      return dict[month]\n    },\n    getDateRange() {\n      this.dateRange = []\n      this.decadeRange = []\n      const time = {\n        year: this.currDate.getFullYear(),\n        month: this.currDate.getMonth(),\n        day: this.currDate.getDate()\n      }\n      const yearStr = time.year.toString()\n      const firstYearOfDecade = (yearStr.substring(0, yearStr.length - 1) + 0) - 1\n      for (let i = 0; i < 12; i++) {\n        this.decadeRange.push({\n          text: firstYearOfDecade + i\n        })\n      }\n\n      const currMonthFirstDay = new Date(time.year, time.month, 1)\n      let firstDayWeek = currMonthFirstDay.getDay() + 1\n      if (firstDayWeek === 0) {\n        firstDayWeek = 7\n      }\n      const dayCount = this.getDayCount(time.year, time.month)\n      if (firstDayWeek > 1) {\n        const preMonth = this.getYearMonth(time.year, time.month - 1)\n        const prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month)\n        for (let i = 1; i < firstDayWeek; i++) {\n          const dayText = prevMonthDayCount - firstDayWeek + i + 1\n          this.dateRange.push({\n            text: dayText,\n            date: new Date(preMonth.year, preMonth.month, dayText),\n            sclass: 'datepicker-item-gray'\n          })\n        }\n      }\n\n      for (let i = 1; i <= dayCount; i++) {\n        const date = new Date(time.year, time.month, i)\n        const week = date.getDay()\n        let sclass = ''\n        this.disabledDaysOfWeek.forEach((el)=> {\n          if (week === parseInt(el, 10)) sclass = 'datepicker-item-disable'\n        })\n\n      if (i === time.day) {\n        if (this.value) {\n          const valueDate = this.parse(this.value)\n          if (valueDate) {\n            if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {\n              sclass = 'datepicker-dateRange-item-active'\n            }\n          }\n        }\n      }\n      this.dateRange.push({\n        text: i,\n        date: date,\n        sclass: sclass\n      })\n      }\n\n      if (this.dateRange.length < 42) {\n        const nextMonthNeed = 42 - this.dateRange.length\n        const nextMonth = this.getYearMonth(time.year, time.month + 1)\n\n        for (let i = 1; i <= nextMonthNeed; i++) {\n          this.dateRange.push({\n            text: i,\n            date: new Date(nextMonth.year, nextMonth.month, i),\n            sclass: 'datepicker-item-gray'\n          })\n        }\n      }\n    }\n  },\n  ready() {\n    this.$dispatch('child-created', this)\n    this.currDate = this.parse(this.value) || this.parse(new Date())\n    this._closeEvent = EventListener.listen(window, 'click', (e)=> {\n      if (!this.$el.contains(e.target)) this.close()\n    })\n  },\n  beforeDestroy() {\n    if (this._closeEvent) this._closeEvent.remove()\n  }\n}\n</script>\n\n<style>\n.datepicker{\n    position: relative;\n    display: inline-block;\n}\n\n.datepicker-popup{\n    position: absolute;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    background: #fff;\n    margin-top: 2px;\n    z-index: 1000;\n    box-shadow: 0 6px 12px rgba(0,0,0,0.175);\n}\n.datepicker-inner{\n    width: 218px;\n\n}\n.datepicker-body{\n    padding: 10px 10px;\n}\n.datepicker-ctrl p,\n.datepicker-ctrl span,\n.datepicker-body span{\n    display: inline-block;\n    width: 28px;\n    line-height: 28px;\n    height: 28px;\n    border-radius: 4px;\n}\n.datepicker-ctrl p {\n    width: 65%;\n}\n.datepicker-ctrl span {\n  position: absolute;\n}\n.datepicker-body span {\n  text-align: center;\n}\n.datepicker-monthRange span{\n  width: 48px;\n  height: 50px;\n  line-height: 45px;\n}\n.datepicker-item-disable {\n  background-color: white!important;\n  cursor: not-allowed!important;\n}\n.decadeRange span:first-child,\n.decadeRange span:last-child,\n.datepicker-item-disable,\n.datepicker-item-gray{\n    color: #999;\n}\n\n.datepicker-dateRange-item-active:hover,\n.datepicker-dateRange-item-active {\n    background: rgb(50, 118, 177)!important;\n    color: white!important;\n}\n.datepicker-monthRange {\n  margin-top: 10px\n}\n.datepicker-monthRange span,\n.datepicker-ctrl span,\n.datepicker-ctrl p,\n.datepicker-dateRange span {\n  cursor: pointer;\n}\n.datepicker-monthRange span:hover,\n.datepicker-ctrl p:hover,\n.datepicker-ctrl i:hover,\n.datepicker-dateRange span:hover,\n.datepicker-dateRange-item-hover {\n    background-color : #eeeeee;\n}\n\n.datepicker-weekRange span{\n    font-weight: bold;\n}\n.datepicker-label{\n    background-color: #f8f8f8;\n    font-weight: 700;\n    padding: 7px 0;\n    text-align: center;\n}\n.datepicker-ctrl{\n    position: relative;\n    height: 30px;\n    line-height: 30px;\n    font-weight: bold;\n    text-align: center;\n}\n.month-btn{\n  font-weight: bold;\n  -webkit-user-select:none;\n    -moz-user-select:none;\n    -ms-user-select:none;\n    user-select:none;\n}\n.datepicker-preBtn{\n    left: 2px;\n}\n.datepicker-nextBtn{\n    right: 2px;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(155);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(80)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=1!./Datepicker.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=1!./Datepicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(79)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.datepicker{\n    position: relative;\n    display: inline-block;\n}\n\n.datepicker-popup{\n    position: absolute;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    background: #fff;\n    margin-top: 2px;\n    z-index: 1000;\n    box-shadow: 0 6px 12px rgba(0,0,0,0.175);\n}\n.datepicker-inner{\n    width: 218px;\n\n}\n.datepicker-body{\n    padding: 10px 10px;\n}\n.datepicker-ctrl p,\n.datepicker-ctrl span,\n.datepicker-body span{\n    display: inline-block;\n    width: 28px;\n    line-height: 28px;\n    height: 28px;\n    border-radius: 4px;\n}\n.datepicker-ctrl p {\n    width: 65%;\n}\n.datepicker-ctrl span {\n  position: absolute;\n}\n.datepicker-body span {\n  text-align: center;\n}\n.datepicker-monthRange span{\n  width: 48px;\n  height: 50px;\n  line-height: 45px;\n}\n.datepicker-item-disable {\n  background-color: white!important;\n  cursor: not-allowed!important;\n}\n.decadeRange span:first-child,\n.decadeRange span:last-child,\n.datepicker-item-disable,\n.datepicker-item-gray{\n    color: #999;\n}\n\n.datepicker-dateRange-item-active:hover,\n.datepicker-dateRange-item-active {\n    background: rgb(50, 118, 177)!important;\n    color: white!important;\n}\n.datepicker-monthRange {\n  margin-top: 10px\n}\n.datepicker-monthRange span,\n.datepicker-ctrl span,\n.datepicker-ctrl p,\n.datepicker-dateRange span {\n  cursor: pointer;\n}\n.datepicker-monthRange span:hover,\n.datepicker-ctrl p:hover,\n.datepicker-ctrl i:hover,\n.datepicker-dateRange span:hover,\n.datepicker-dateRange-item-hover {\n    background-color : #eeeeee;\n}\n\n.datepicker-weekRange span{\n    font-weight: bold;\n}\n.datepicker-label{\n    background-color: #f8f8f8;\n    font-weight: 700;\n    padding: 7px 0;\n    text-align: center;\n}\n.datepicker-ctrl{\n    position: relative;\n    height: 30px;\n    line-height: 30px;\n    font-weight: bold;\n    text-align: center;\n}\n.month-btn{\n  font-weight: bold;\n  -webkit-user-select:none;\n    -moz-user-select:none;\n    -ms-user-select:none;\n    user-select:none;\n}\n.datepicker-preBtn{\n    left: 2px;\n}\n.datepicker-nextBtn{\n    right: 2px;\n}\n", "", {"version":3,"sources":["/./src/components/Datepicker.vue?cac9b692"],"names":[],"mappings":";AAsXA;IACA,mBAAA;IACA,sBAAA;CACA;;AAEA;IACA,mBAAA;IACA,uBAAA;IACA,mBAAA;IACA,iBAAA;IACA,gBAAA;IACA,cAAA;IACA,yCAAA;CACA;AACA;IACA,aAAA;;CAEA;AACA;IACA,mBAAA;CACA;AACA;;;IAGA,sBAAA;IACA,YAAA;IACA,kBAAA;IACA,aAAA;IACA,mBAAA;CACA;AACA;IACA,WAAA;CACA;AACA;EACA,mBAAA;CACA;AACA;EACA,mBAAA;CACA;AACA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;CACA;AACA;EACA,kCAAA;EACA,8BAAA;CACA;AACA;;;;IAIA,YAAA;CACA;;AAEA;;IAEA,wCAAA;IACA,uBAAA;CACA;AACA;EACA,gBAAA;CACA;AACA;;;;EAIA,gBAAA;CACA;AACA;;;;;IAKA,2BAAA;CACA;;AAEA;IACA,kBAAA;CACA;AACA;IACA,0BAAA;IACA,iBAAA;IACA,eAAA;IACA,mBAAA;CACA;AACA;IACA,mBAAA;IACA,aAAA;IACA,kBAAA;IACA,kBAAA;IACA,mBAAA;CACA;AACA;EACA,kBAAA;EACA,yBAAA;IACA,sBAAA;IACA,qBAAA;IACA,iBAAA;CACA;AACA;IACA,UAAA;CACA;AACA;IACA,WAAA;CACA","file":"Datepicker.vue","sourcesContent":["<style>\n  input.datepicker-input.with-reset-button {\n    padding-right: 25px;\n  }\n\n  div.datepicker > button.close {\n    position: absolute;\n    top: calc(50% - 13px);\n    right: 10px;\n  }\n\n  div.datepicker > button.close {\n    outline: none;\n    z-index: 2;\n  }\n\n  div.datepicker > button.close:focus {\n    opacity: .2;\n  }\n</style>\n\n<template>\n  <div class=\"datepicker\">\n    <input class=\"form-control datepicker-input\" :class=\"{'with-reset-button': showResetButton}\" type=\"text\"\n        v-bind:style=\"{width:width}\"\n        @click=\"inputClick\"\n        v-model=\"value\"/>\n    <button v-if=\"showResetButton\" type=\"button\" class=\"close\" @click=\"value = ''\">\n      <span>&times;</span>\n    </button>\n    <div class=\"datepicker-popup\" v-show=\"displayDayView\">\n      <div class=\"datepicker-inner\">\n        <div class=\"datepicker-body\">\n          <div class=\"datepicker-ctrl\">\n            <span class=\"month-btn datepicker-preBtn\" @click=\"preNextMonthClick(0)\">&lt;</span>\n            <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextMonthClick(1)\">&gt;</span>\n            <p @click=\"switchMonthView\">{{stringifyDayHeader(currDate)}}</p>\n          </div>\n          <div class=\"datepicker-weekRange\">\n            <span v-for=\"w in weekRange\">{{w}}</span>\n          </div>\n          <div class=\"datepicker-dateRange\">\n            <span v-for=\"d in dateRange\" v-bind:class=\"d.sclass\" @click=\"daySelect(d.date,this)\">{{d.text}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"datepicker-popup\" v-show=\"displayMonthView\">\n      <div class=\"datepicker-inner\">\n        <div class=\"datepicker-body\">\n          <div class=\"datepicker-ctrl\">\n            <span class=\"month-btn datepicker-preBtn\" @click=\"preNextYearClick(0)\">&lt;</span>\n            <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextYearClick(1)\">&gt;</span>\n            <p @click=\"switchDecadeView\">{{stringifyYearHeader(currDate)}}</p>\n          </div>\n          <div class=\"datepicker-monthRange\">\n            <template v-for=\"m in monthNames\">\n              <span   v-bind:class=\"{'datepicker-dateRange-item-active':\n                  (this.monthNames[this.parse(this.value).getMonth()]  === m) &&\n                  this.currDate.getFullYear() === this.parse(this.value).getFullYear()}\"\n                  @click=\"monthSelect($index)\"\n                >{{m.substr(0,3)}}</span>\n            </template>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"datepicker-popup\" v-show=\"displayYearView\">\n      <div class=\"datepicker-inner\">\n        <div class=\"datepicker-body\">\n          <div class=\"datepicker-ctrl\">\n            <span class=\"month-btn datepicker-preBtn\" @click=\"preNextDecadeClick(0)\">&lt;</span>\n            <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextDecadeClick(1)\">&gt;</span>\n            <p>{{stringifyDecadeHeader(currDate)}}</p>\n          </div>\n          <div class=\"datepicker-monthRange decadeRange\">\n            <template v-for=\"decade in decadeRange\">\n              <span v-bind:class=\"{'datepicker-dateRange-item-active':\n                  this.parse(this.value).getFullYear() === decade.text}\"\n                  @click.stop=\"yearSelect(decade.text)\"\n                >{{decade.text}}</span>\n            </template>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport EventListener from './utils/EventListener.js'\nconst localeConfig = {\n  zh_CN : {\n    weekRange: ['日', '一', '二', '三', '四', '五', '六'],\n    monthNames : [\n      '1', '2', '3',\n      '4', '5', '6',\n      '7', '8', '8',\n      '10', '11', '12'\n    ]\n  },\n  en_US : {\n    weekRange: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],\n    monthNames : [\n      'January', 'February', 'March',\n      'April', 'May', 'June',\n      'July', 'August', 'September',\n      'October', 'November', 'December'\n    ]\n  }\n}\nexport default {\n  props: {\n    value: {\n      type: String,\n      twoWay: true\n    },\n    format: {\n      default: 'MMMM/dd/yyyy'\n    },\n    locale:{\n      default : 'zh_CN'\n    },\n    disabledDaysOfWeek: {\n      type: Array,\n      default() {\n        return []\n      }\n    },\n    width: {\n      type: String,\n      default: '200px'\n    },\n    showResetButton: {\n      type: Boolean,\n      default: false\n    }\n  },\n  data() {\n    return {\n      weekRange: localeConfig[this.locale].weekRange,\n      dateRange: [],\n      decadeRange: [],\n      currDate: new Date,\n      displayDayView: false,\n      displayMonthView: false,\n      displayYearView: false,\n      monthNames: localeConfig[this.locale].monthNames\n    }\n  },\n  watch: {\n    currDate() {\n      this.getDateRange()\n    }\n  },\n  methods: {\n    close() {\n      this.displayDayView = this.displayMonthView = this.displayMonthView = false\n    },\n    inputClick() {\n      if (this.displayMonthView || this.displayYearView) {\n        this.displayDayView = false\n      } else {\n        this.displayDayView = !this.displayDayView\n      }\n    },\n    preNextDecadeClick(flag) {\n      const year = this.currDate.getFullYear()\n      const months = this.currDate.getMonth()\n      const date = this.currDate.getDate()\n\n      if (flag === 0) {\n        this.currDate = new Date(year - 10, months, date)\n      } else {\n        this.currDate = new Date(year + 10, months, date)\n      }\n    },\n    preNextMonthClick(flag) {\n      const year = this.currDate.getFullYear()\n      const month = this.currDate.getMonth()\n      const date = this.currDate.getDate()\n\n\n      if (flag === 0) {\n        const preMonth = this.getYearMonth(year, month - 1)\n        this.currDate = new Date(preMonth.year, preMonth.month, date)\n      } else {\n        const nextMonth = this.getYearMonth(year, month + 1)\n        this.currDate = new Date(nextMonth.year, nextMonth.month, date)\n      }\n    },\n    preNextYearClick(flag) {\n      const year = this.currDate.getFullYear()\n      const months = this.currDate.getMonth()\n      const date = this.currDate.getDate()\n\n      if (flag === 0) {\n        this.currDate = new Date(year - 1, months, date)\n      } else {\n        this.currDate = new Date(year + 1, months, date)\n      }\n    },\n    yearSelect(year) {\n      this.displayYearView = false\n      this.displayMonthView = true\n      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate())\n    },\n    daySelect(date, el) {\n      if (el.$el.classList[0] === 'datepicker-item-disable') {\n        return false\n      } else {\n        this.currDate = date\n        this.value = this.stringify(this.currDate)\n        this.displayDayView = false\n      }\n    },\n    switchMonthView() {\n      this.displayDayView = false\n      this.displayMonthView = true\n    },\n    switchDecadeView() {\n      this.displayMonthView = false\n      this.displayYearView = true\n    },\n    monthSelect(index) {\n      this.displayMonthView = false\n      this.displayDayView = true\n      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate())\n    },\n    getYearMonth(year, month) {\n      if (month > 11) {\n        year++\n          month = 0\n      } else if (month < 0) {\n        year--\n          month = 11\n      }\n      return {year: year, month: month}\n    },\n    stringifyDecadeHeader(date) {\n      const yearStr = date.getFullYear().toString()\n      const firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0\n      const lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10\n      return firstYearOfDecade + '-' + lastYearOfDecade\n    },\n    stringifyDayHeader(date) {\n      return this.monthNames[date.getMonth()] + ' ' + date.getFullYear()\n    },\n    parseMonth(date) {\n      return this.monthNames[date.getMonth()]\n    },\n    stringifyYearHeader(date) {\n      return date.getFullYear()\n    },\n    stringify(date, format = this.format) {\n      const year = date.getFullYear()\n      const month = date.getMonth() + 1\n      const day = date.getDate()\n      const monthName = this.parseMonth(date)\n\n      return format\n      .replace(/yyyy/g, year)\n      .replace(/MMMM/g, monthName)\n      .replace(/MMM/g, monthName.substring(0, 3))\n      .replace(/MM/g, ('0' + month).slice(-2))\n      .replace(/dd/g, ('0' + day).slice(-2))\n      .replace(/yy/g, year)\n      .replace(/M(?!a)/g, month)\n      .replace(/d/g, day)\n    },\n    parse(str) {\n      const date = new Date(str)\n      return isNaN(date.getFullYear()) ? null : date\n    },\n    getDayCount(year, month) {\n      const dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\n\n      if (month === 1) {\n        if ( (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0) ) {\n          return 29\n        }\n        return 28\n      }\n\n      return dict[month]\n    },\n    getDateRange() {\n      this.dateRange = []\n      this.decadeRange = []\n      const time = {\n        year: this.currDate.getFullYear(),\n        month: this.currDate.getMonth(),\n        day: this.currDate.getDate()\n      }\n      const yearStr = time.year.toString()\n      const firstYearOfDecade = (yearStr.substring(0, yearStr.length - 1) + 0) - 1\n      for (let i = 0; i < 12; i++) {\n        this.decadeRange.push({\n          text: firstYearOfDecade + i\n        })\n      }\n\n      const currMonthFirstDay = new Date(time.year, time.month, 1)\n      let firstDayWeek = currMonthFirstDay.getDay() + 1\n      if (firstDayWeek === 0) {\n        firstDayWeek = 7\n      }\n      const dayCount = this.getDayCount(time.year, time.month)\n      if (firstDayWeek > 1) {\n        const preMonth = this.getYearMonth(time.year, time.month - 1)\n        const prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month)\n        for (let i = 1; i < firstDayWeek; i++) {\n          const dayText = prevMonthDayCount - firstDayWeek + i + 1\n          this.dateRange.push({\n            text: dayText,\n            date: new Date(preMonth.year, preMonth.month, dayText),\n            sclass: 'datepicker-item-gray'\n          })\n        }\n      }\n\n      for (let i = 1; i <= dayCount; i++) {\n        const date = new Date(time.year, time.month, i)\n        const week = date.getDay()\n        let sclass = ''\n        this.disabledDaysOfWeek.forEach((el)=> {\n          if (week === parseInt(el, 10)) sclass = 'datepicker-item-disable'\n        })\n\n      if (i === time.day) {\n        if (this.value) {\n          const valueDate = this.parse(this.value)\n          if (valueDate) {\n            if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {\n              sclass = 'datepicker-dateRange-item-active'\n            }\n          }\n        }\n      }\n      this.dateRange.push({\n        text: i,\n        date: date,\n        sclass: sclass\n      })\n      }\n\n      if (this.dateRange.length < 42) {\n        const nextMonthNeed = 42 - this.dateRange.length\n        const nextMonth = this.getYearMonth(time.year, time.month + 1)\n\n        for (let i = 1; i <= nextMonthNeed; i++) {\n          this.dateRange.push({\n            text: i,\n            date: new Date(nextMonth.year, nextMonth.month, i),\n            sclass: 'datepicker-item-gray'\n          })\n        }\n      }\n    }\n  },\n  ready() {\n    this.$dispatch('child-created', this)\n    this.currDate = this.parse(this.value) || this.parse(new Date())\n    this._closeEvent = EventListener.listen(window, 'click', (e)=> {\n      if (!this.$el.contains(e.target)) this.close()\n    })\n  },\n  beforeDestroy() {\n    if (this._closeEvent) this._closeEvent.remove()\n  }\n}\n</script>\n\n<style>\n.datepicker{\n    position: relative;\n    display: inline-block;\n}\n\n.datepicker-popup{\n    position: absolute;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    background: #fff;\n    margin-top: 2px;\n    z-index: 1000;\n    box-shadow: 0 6px 12px rgba(0,0,0,0.175);\n}\n.datepicker-inner{\n    width: 218px;\n\n}\n.datepicker-body{\n    padding: 10px 10px;\n}\n.datepicker-ctrl p,\n.datepicker-ctrl span,\n.datepicker-body span{\n    display: inline-block;\n    width: 28px;\n    line-height: 28px;\n    height: 28px;\n    border-radius: 4px;\n}\n.datepicker-ctrl p {\n    width: 65%;\n}\n.datepicker-ctrl span {\n  position: absolute;\n}\n.datepicker-body span {\n  text-align: center;\n}\n.datepicker-monthRange span{\n  width: 48px;\n  height: 50px;\n  line-height: 45px;\n}\n.datepicker-item-disable {\n  background-color: white!important;\n  cursor: not-allowed!important;\n}\n.decadeRange span:first-child,\n.decadeRange span:last-child,\n.datepicker-item-disable,\n.datepicker-item-gray{\n    color: #999;\n}\n\n.datepicker-dateRange-item-active:hover,\n.datepicker-dateRange-item-active {\n    background: rgb(50, 118, 177)!important;\n    color: white!important;\n}\n.datepicker-monthRange {\n  margin-top: 10px\n}\n.datepicker-monthRange span,\n.datepicker-ctrl span,\n.datepicker-ctrl p,\n.datepicker-dateRange span {\n  cursor: pointer;\n}\n.datepicker-monthRange span:hover,\n.datepicker-ctrl p:hover,\n.datepicker-ctrl i:hover,\n.datepicker-dateRange span:hover,\n.datepicker-dateRange-item-hover {\n    background-color : #eeeeee;\n}\n\n.datepicker-weekRange span{\n    font-weight: bold;\n}\n.datepicker-label{\n    background-color: #f8f8f8;\n    font-weight: 700;\n    padding: 7px 0;\n    text-align: center;\n}\n.datepicker-ctrl{\n    position: relative;\n    height: 30px;\n    line-height: 30px;\n    font-weight: bold;\n    text-align: center;\n}\n.month-btn{\n  font-weight: bold;\n  -webkit-user-select:none;\n    -moz-user-select:none;\n    -ms-user-select:none;\n    user-select:none;\n}\n.datepicker-preBtn{\n    left: 2px;\n}\n.datepicker-nextBtn{\n    right: 2px;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(126);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var localeConfig = {
	  zh_CN: {
	    weekRange: ['日', '一', '二', '三', '四', '五', '六'],
	    monthNames: ['1', '2', '3', '4', '5', '6', '7', '8', '8', '10', '11', '12']
	  },
	  en_US: {
	    weekRange: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	  }
	}; // <style>
	//   input.datepicker-input.with-reset-button {
	//     padding-right: 25px;
	//   }
	//
	//   div.datepicker > button.close {
	//     position: absolute;
	//     top: calc(50% - 13px);
	//     right: 10px;
	//   }
	//
	//   div.datepicker > button.close {
	//     outline: none;
	//     z-index: 2;
	//   }
	//
	//   div.datepicker > button.close:focus {
	//     opacity: .2;
	//   }
	// </style>
	//
	// <template>
	//   <div class="datepicker">
	//     <input class="form-control datepicker-input" :class="{'with-reset-button': showResetButton}" type="text"
	//         v-bind:style="{width:width}"
	//         @click="inputClick"
	//         v-model="value"/>
	//     <button v-if="showResetButton" type="button" class="close" @click="value = ''">
	//       <span>&times;</span>
	//     </button>
	//     <div class="datepicker-popup" v-show="displayDayView">
	//       <div class="datepicker-inner">
	//         <div class="datepicker-body">
	//           <div class="datepicker-ctrl">
	//             <span class="month-btn datepicker-preBtn" @click="preNextMonthClick(0)">&lt;</span>
	//             <span class="month-btn datepicker-nextBtn" @click="preNextMonthClick(1)">&gt;</span>
	//             <p @click="switchMonthView">{{stringifyDayHeader(currDate)}}</p>
	//           </div>
	//           <div class="datepicker-weekRange">
	//             <span v-for="w in weekRange">{{w}}</span>
	//           </div>
	//           <div class="datepicker-dateRange">
	//             <span v-for="d in dateRange" v-bind:class="d.sclass" @click="daySelect(d.date,this)">{{d.text}}</span>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//     <div class="datepicker-popup" v-show="displayMonthView">
	//       <div class="datepicker-inner">
	//         <div class="datepicker-body">
	//           <div class="datepicker-ctrl">
	//             <span class="month-btn datepicker-preBtn" @click="preNextYearClick(0)">&lt;</span>
	//             <span class="month-btn datepicker-nextBtn" @click="preNextYearClick(1)">&gt;</span>
	//             <p @click="switchDecadeView">{{stringifyYearHeader(currDate)}}</p>
	//           </div>
	//           <div class="datepicker-monthRange">
	//             <template v-for="m in monthNames">
	//               <span   v-bind:class="{'datepicker-dateRange-item-active':
	//                   (this.monthNames[this.parse(this.value).getMonth()]  === m) &&
	//                   this.currDate.getFullYear() === this.parse(this.value).getFullYear()}"
	//                   @click="monthSelect($index)"
	//                 >{{m.substr(0,3)}}</span>
	//             </template>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//     <div class="datepicker-popup" v-show="displayYearView">
	//       <div class="datepicker-inner">
	//         <div class="datepicker-body">
	//           <div class="datepicker-ctrl">
	//             <span class="month-btn datepicker-preBtn" @click="preNextDecadeClick(0)">&lt;</span>
	//             <span class="month-btn datepicker-nextBtn" @click="preNextDecadeClick(1)">&gt;</span>
	//             <p>{{stringifyDecadeHeader(currDate)}}</p>
	//           </div>
	//           <div class="datepicker-monthRange decadeRange">
	//             <template v-for="decade in decadeRange">
	//               <span v-bind:class="{'datepicker-dateRange-item-active':
	//                   this.parse(this.value).getFullYear() === decade.text}"
	//                   @click.stop="yearSelect(decade.text)"
	//                 >{{decade.text}}</span>
	//             </template>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	
	exports.default = {
	  props: {
	    value: {
	      type: String,
	      twoWay: true
	    },
	    format: {
	      default: 'MMMM/dd/yyyy'
	    },
	    locale: {
	      default: 'zh_CN'
	    },
	    disabledDaysOfWeek: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    width: {
	      type: String,
	      default: '200px'
	    },
	    showResetButton: {
	      type: Boolean,
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      weekRange: localeConfig[this.locale].weekRange,
	      dateRange: [],
	      decadeRange: [],
	      currDate: new Date(),
	      displayDayView: false,
	      displayMonthView: false,
	      displayYearView: false,
	      monthNames: localeConfig[this.locale].monthNames
	    };
	  },
	
	  watch: {
	    currDate: function currDate() {
	      this.getDateRange();
	    }
	  },
	  methods: {
	    close: function close() {
	      this.displayDayView = this.displayMonthView = this.displayMonthView = false;
	    },
	    inputClick: function inputClick() {
	      if (this.displayMonthView || this.displayYearView) {
	        this.displayDayView = false;
	      } else {
	        this.displayDayView = !this.displayDayView;
	      }
	    },
	    preNextDecadeClick: function preNextDecadeClick(flag) {
	      var year = this.currDate.getFullYear();
	      var months = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 10, months, date);
	      } else {
	        this.currDate = new Date(year + 10, months, date);
	      }
	    },
	    preNextMonthClick: function preNextMonthClick(flag) {
	      var year = this.currDate.getFullYear();
	      var month = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        var preMonth = this.getYearMonth(year, month - 1);
	        this.currDate = new Date(preMonth.year, preMonth.month, date);
	      } else {
	        var nextMonth = this.getYearMonth(year, month + 1);
	        this.currDate = new Date(nextMonth.year, nextMonth.month, date);
	      }
	    },
	    preNextYearClick: function preNextYearClick(flag) {
	      var year = this.currDate.getFullYear();
	      var months = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 1, months, date);
	      } else {
	        this.currDate = new Date(year + 1, months, date);
	      }
	    },
	    yearSelect: function yearSelect(year) {
	      this.displayYearView = false;
	      this.displayMonthView = true;
	      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate());
	    },
	    daySelect: function daySelect(date, el) {
	      if (el.$el.classList[0] === 'datepicker-item-disable') {
	        return false;
	      } else {
	        this.currDate = date;
	        this.value = this.stringify(this.currDate);
	        this.displayDayView = false;
	      }
	    },
	    switchMonthView: function switchMonthView() {
	      this.displayDayView = false;
	      this.displayMonthView = true;
	    },
	    switchDecadeView: function switchDecadeView() {
	      this.displayMonthView = false;
	      this.displayYearView = true;
	    },
	    monthSelect: function monthSelect(index) {
	      this.displayMonthView = false;
	      this.displayDayView = true;
	      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate());
	    },
	    getYearMonth: function getYearMonth(year, month) {
	      if (month > 11) {
	        year++;
	        month = 0;
	      } else if (month < 0) {
	        year--;
	        month = 11;
	      }
	      return { year: year, month: month };
	    },
	    stringifyDecadeHeader: function stringifyDecadeHeader(date) {
	      var yearStr = date.getFullYear().toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0;
	      var lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10;
	      return firstYearOfDecade + '-' + lastYearOfDecade;
	    },
	    stringifyDayHeader: function stringifyDayHeader(date) {
	      return this.monthNames[date.getMonth()] + ' ' + date.getFullYear();
	    },
	    parseMonth: function parseMonth(date) {
	      return this.monthNames[date.getMonth()];
	    },
	    stringifyYearHeader: function stringifyYearHeader(date) {
	      return date.getFullYear();
	    },
	    stringify: function stringify(date) {
	      var format = arguments.length <= 1 || arguments[1] === undefined ? this.format : arguments[1];
	
	      var year = date.getFullYear();
	      var month = date.getMonth() + 1;
	      var day = date.getDate();
	      var monthName = this.parseMonth(date);
	
	      return format.replace(/yyyy/g, year).replace(/MMMM/g, monthName).replace(/MMM/g, monthName.substring(0, 3)).replace(/MM/g, ('0' + month).slice(-2)).replace(/dd/g, ('0' + day).slice(-2)).replace(/yy/g, year).replace(/M(?!a)/g, month).replace(/d/g, day);
	    },
	    parse: function parse(str) {
	      var date = new Date(str);
	      return isNaN(date.getFullYear()) ? null : date;
	    },
	    getDayCount: function getDayCount(year, month) {
	      var dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	
	      if (month === 1) {
	        if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
	          return 29;
	        }
	        return 28;
	      }
	
	      return dict[month];
	    },
	    getDateRange: function getDateRange() {
	      var _this = this;
	
	      this.dateRange = [];
	      this.decadeRange = [];
	      var time = {
	        year: this.currDate.getFullYear(),
	        month: this.currDate.getMonth(),
	        day: this.currDate.getDate()
	      };
	      var yearStr = time.year.toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0 - 1;
	      for (var i = 0; i < 12; i++) {
	        this.decadeRange.push({
	          text: firstYearOfDecade + i
	        });
	      }
	
	      var currMonthFirstDay = new Date(time.year, time.month, 1);
	      var firstDayWeek = currMonthFirstDay.getDay() + 1;
	      if (firstDayWeek === 0) {
	        firstDayWeek = 7;
	      }
	      var dayCount = this.getDayCount(time.year, time.month);
	      if (firstDayWeek > 1) {
	        var preMonth = this.getYearMonth(time.year, time.month - 1);
	        var prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month);
	        for (var i = 1; i < firstDayWeek; i++) {
	          var dayText = prevMonthDayCount - firstDayWeek + i + 1;
	          this.dateRange.push({
	            text: dayText,
	            date: new Date(preMonth.year, preMonth.month, dayText),
	            sclass: 'datepicker-item-gray'
	          });
	        }
	      }
	
	      var _loop = function _loop(i) {
	        var date = new Date(time.year, time.month, i);
	        var week = date.getDay();
	        var sclass = '';
	        _this.disabledDaysOfWeek.forEach(function (el) {
	          if (week === parseInt(el, 10)) sclass = 'datepicker-item-disable';
	        });
	
	        if (i === time.day) {
	          if (_this.value) {
	            var valueDate = _this.parse(_this.value);
	            if (valueDate) {
	              if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {
	                sclass = 'datepicker-dateRange-item-active';
	              }
	            }
	          }
	        }
	        _this.dateRange.push({
	          text: i,
	          date: date,
	          sclass: sclass
	        });
	      };
	
	      for (var i = 1; i <= dayCount; i++) {
	        _loop(i);
	      }
	
	      if (this.dateRange.length < 42) {
	        var nextMonthNeed = 42 - this.dateRange.length;
	        var nextMonth = this.getYearMonth(time.year, time.month + 1);
	
	        for (var i = 1; i <= nextMonthNeed; i++) {
	          this.dateRange.push({
	            text: i,
	            date: new Date(nextMonth.year, nextMonth.month, i),
	            sclass: 'datepicker-item-gray'
	          });
	        }
	      }
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;
	
	    this.$dispatch('child-created', this);
	    this.currDate = this.parse(this.value) || this.parse(new Date());
	    this._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	      if (!_this2.$el.contains(e.target)) _this2.close();
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	  }
	};
	// </script>
	//
	// <style>
	// .datepicker{
	//     position: relative;
	//     display: inline-block;
	// }
	//
	// .datepicker-popup{
	//     position: absolute;
	//     border: 1px solid #ccc;
	//     border-radius: 5px;
	//     background: #fff;
	//     margin-top: 2px;
	//     z-index: 1000;
	//     box-shadow: 0 6px 12px rgba(0,0,0,0.175);
	// }
	// .datepicker-inner{
	//     width: 218px;
	//
	// }
	// .datepicker-body{
	//     padding: 10px 10px;
	// }
	// .datepicker-ctrl p,
	// .datepicker-ctrl span,
	// .datepicker-body span{
	//     display: inline-block;
	//     width: 28px;
	//     line-height: 28px;
	//     height: 28px;
	//     border-radius: 4px;
	// }
	// .datepicker-ctrl p {
	//     width: 65%;
	// }
	// .datepicker-ctrl span {
	//   position: absolute;
	// }
	// .datepicker-body span {
	//   text-align: center;
	// }
	// .datepicker-monthRange span{
	//   width: 48px;
	//   height: 50px;
	//   line-height: 45px;
	// }
	// .datepicker-item-disable {
	//   background-color: white!important;
	//   cursor: not-allowed!important;
	// }
	// .decadeRange span:first-child,
	// .decadeRange span:last-child,
	// .datepicker-item-disable,
	// .datepicker-item-gray{
	//     color: #999;
	// }
	//
	// .datepicker-dateRange-item-active:hover,
	// .datepicker-dateRange-item-active {
	//     background: rgb(50, 118, 177)!important;
	//     color: white!important;
	// }
	// .datepicker-monthRange {
	//   margin-top: 10px
	// }
	// .datepicker-monthRange span,
	// .datepicker-ctrl span,
	// .datepicker-ctrl p,
	// .datepicker-dateRange span {
	//   cursor: pointer;
	// }
	// .datepicker-monthRange span:hover,
	// .datepicker-ctrl p:hover,
	// .datepicker-ctrl i:hover,
	// .datepicker-dateRange span:hover,
	// .datepicker-dateRange-item-hover {
	//     background-color : #eeeeee;
	// }
	//
	// .datepicker-weekRange span{
	//     font-weight: bold;
	// }
	// .datepicker-label{
	//     background-color: #f8f8f8;
	//     font-weight: 700;
	//     padding: 7px 0;
	//     text-align: center;
	// }
	// .datepicker-ctrl{
	//     position: relative;
	//     height: 30px;
	//     line-height: 30px;
	//     font-weight: bold;
	//     text-align: center;
	// }
	// .month-btn{
	//   font-weight: bold;
	//   -webkit-user-select:none;
	//     -moz-user-select:none;
	//     -ms-user-select:none;
	//     user-select:none;
	// }
	// .datepicker-preBtn{
	//     left: 2px;
	// }
	// .datepicker-nextBtn{
	//     right: 2px;
	// }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 157 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"datepicker\">\n  <input class=\"form-control datepicker-input\" :class=\"{'with-reset-button': showResetButton}\" type=\"text\"\n      v-bind:style=\"{width:width}\"\n      @click=\"inputClick\"\n      v-model=\"value\"/>\n  <button v-if=\"showResetButton\" type=\"button\" class=\"close\" @click=\"value = ''\">\n    <span>&times;</span>\n  </button>\n  <div class=\"datepicker-popup\" v-show=\"displayDayView\">\n    <div class=\"datepicker-inner\">\n      <div class=\"datepicker-body\">\n        <div class=\"datepicker-ctrl\">\n          <span class=\"month-btn datepicker-preBtn\" @click=\"preNextMonthClick(0)\">&lt;</span>\n          <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextMonthClick(1)\">&gt;</span>\n          <p @click=\"switchMonthView\">{{stringifyDayHeader(currDate)}}</p>\n        </div>\n        <div class=\"datepicker-weekRange\">\n          <span v-for=\"w in weekRange\">{{w}}</span>\n        </div>\n        <div class=\"datepicker-dateRange\">\n          <span v-for=\"d in dateRange\" v-bind:class=\"d.sclass\" @click=\"daySelect(d.date,this)\">{{d.text}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"datepicker-popup\" v-show=\"displayMonthView\">\n    <div class=\"datepicker-inner\">\n      <div class=\"datepicker-body\">\n        <div class=\"datepicker-ctrl\">\n          <span class=\"month-btn datepicker-preBtn\" @click=\"preNextYearClick(0)\">&lt;</span>\n          <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextYearClick(1)\">&gt;</span>\n          <p @click=\"switchDecadeView\">{{stringifyYearHeader(currDate)}}</p>\n        </div>\n        <div class=\"datepicker-monthRange\">\n          <template v-for=\"m in monthNames\">\n            <span   v-bind:class=\"{'datepicker-dateRange-item-active':\n                (this.monthNames[this.parse(this.value).getMonth()]  === m) &&\n                this.currDate.getFullYear() === this.parse(this.value).getFullYear()}\"\n                @click=\"monthSelect($index)\"\n              >{{m.substr(0,3)}}</span>\n          </template>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"datepicker-popup\" v-show=\"displayYearView\">\n    <div class=\"datepicker-inner\">\n      <div class=\"datepicker-body\">\n        <div class=\"datepicker-ctrl\">\n          <span class=\"month-btn datepicker-preBtn\" @click=\"preNextDecadeClick(0)\">&lt;</span>\n          <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextDecadeClick(1)\">&gt;</span>\n          <p>{{stringifyDecadeHeader(currDate)}}</p>\n        </div>\n        <div class=\"datepicker-monthRange decadeRange\">\n          <template v-for=\"decade in decadeRange\">\n            <span v-bind:class=\"{'datepicker-dateRange-item-active':\n                this.parse(this.value).getFullYear() === decade.text}\"\n                @click.stop=\"yearSelect(decade.text)\"\n              >{{decade.text}}</span>\n          </template>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(159)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Dropdown.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(160)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Dropdown.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(126);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    trigger: {
	      type: String,
	      default: 'click'
	    }
	  },
	  methods: {
	    toggleDropdown: function toggleDropdown(e) {
	      e.preventDefault();
	      this.$el.classList.toggle('open');
	    }
	  },
	  ready: function ready() {
	    var el = this.$el;
	    var toggle = el.querySelector('[data-toggle="dropdown"]');
	    if (toggle) {
	      var event = this.trigger === 'click' ? 'click' : 'mouseenter';
	      toggle.addEventListener(event, this.toggleDropdown);
	    }
	    if (this.trigger === 'hover') {
	      var me = this;
	      me.$el.addEventListener('mouseleave', function () {
	        setTimeout(function () {
	          me.$el.classList.remove('open');
	        }, 300);
	      });
	    }
	    this._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	      if (!el.contains(e.target)) el.classList.remove('open');
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="dropdown">
	//     <slot></slot>
	//     <slot name="dropdown-menu"></slot>
	//   </div>
	// </template>
	// <script>

/***/ },
/* 160 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"dropdown\">\n  <slot></slot>\n  <slot name=\"dropdown-menu\"></slot>\n</div>\n";

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(162)
	__vue_script__ = __webpack_require__(164)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Modal.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(169)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Modal.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(163);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(80)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Modal.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(79)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.modal {\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.modal.in {\n  background-color: rgba(0,0,0,0.5);\n}\n.modal.zoom .modal-dialog {\n    -webkit-transform: scale(0.1);\n    transform: scale(0.1);\n    top: 300px;\n    opacity: 0;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n.modal.zoom.in .modal-dialog {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-transform: translate3d(0, -300px, 0);\n    transform: translate3d(0, -300px, 0);\n    opacity: 1;\n}\n", "", {"version":3,"sources":["/./src/components/Modal.vue?11fc301c"],"names":[],"mappings":";AAmIA;EACA,kCAAA;EAAA,0BAAA;CACA;AACA;EACA,kCAAA;CACA;AACA;IACA,8BAAA;IAGA,sBAAA;IACA,WAAA;IACA,WAAA;IACA,6BAAA;IAEA,qBAAA;CACA;AACA;IACA,4BAAA;IAGA,oBAAA;IACA,6CAAA;IACA,qCAAA;IACA,WAAA;CACA","file":"Modal.vue","sourcesContent":["<template>\n  <div role=\"dialog\"\n    v-bind:class=\"{\n    'modal':true,\n    'fade':effect === 'fade',\n    'zoom':effect === 'zoom'\n    }\"\n    >\n    <div v-bind:class=\"{'modal-dialog':true,'modal-lg':large,'modal-sm':small}\" role=\"document\"\n      v-bind:style=\"{width: optionalWidth}\">\n      <div class=\"modal-content\">\n        <slot name=\"modal-header\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" @click=\"close\"><span>&times;</span></button>\n            <h4 class=\"modal-title\" >{{title}}</h4>\n          </div>\n        </slot>\n        <slot name=\"modal-body\">\n          <div class=\"modal-body\"></div>\n        </slot>\n        <slot name=\"modal-footer\">\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" @click=\"callback\">确定</button>\n            <button type=\"button\" class=\"btn tertiary\" @click=\"close\">取消</button>\n          </div>\n        </slot>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport getScrollBarWidth from './utils/getScrollBarWidth.js'\nimport EventListener from './utils/EventListener.js'\nimport coerceBoolean from './utils/coerceBoolean.js'\n\n  export default {\n    props: {\n      title: {\n        type: String,\n        default: ''\n      },\n      show: {\n        require: true,\n        type: Boolean,\n        coerce: coerceBoolean,\n        twoWay: true\n      },\n      width: {\n        default: null\n      },\n      callback: {\n        type: Function,\n        default() {}\n      },\n      effect: {\n        type: String,\n        default: null\n      },\n      backdrop: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: true\n      },\n      large: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: false\n      },\n      small: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: false\n      }\n    },\n    ready() {\n      this.$watch('show', (val)=> {\n        const el = this.$el\n        const body = document.body\n        const scrollBarWidth =  getScrollBarWidth()\n        if (val) {\n          el.querySelector('.modal-content').focus()\n          el.style.display = 'block'\n          setTimeout(()=> el.classList.add('in'), 0)\n          body.classList.add('modal-open')\n          if (scrollBarWidth !== 0) {\n            body.style.paddingRight = scrollBarWidth + 'px'\n          }\n          if (this.backdrop) {\n            this._blurModalContentEvent = EventListener.listen(this.$el, 'click', (e)=> {\n              if (e.target === el) this.show = false\n            })\n          }\n        } else {\n          if (this._blurModalContentEvent) this._blurModalContentEvent.remove()\n          el.classList.remove('in')\n          setTimeout(()=> {\n            el.style.display = 'none'\n            body.classList.remove('modal-open')\n            body.style.paddingRight = '0'\n          }, 300)\n        }\n      }, { immediate: true })\n    },\n    computed: {\n      optionalWidth: function() {\n        if( this.width === null ) {\n          return null;\n        } else if( Number.isInteger(this.width) ) {\n          return this.width + \"px\";\n        }\n        return this.width;\n      },\n    },\n    methods: {\n      close() {\n        this.show = false\n      }\n    },\n    compiled () {\n      var me = this;\n\n      window.addEventListener('keyup', function (ev) {\n          if (ev.keyCode === 27) {\n              me.show = false;\n          }\n      });\n    }\n  }\n</script>\n<style>\n.modal {\n  transition: all 0.3s ease;\n}\n.modal.in {\n  background-color: rgba(0,0,0,0.5);\n}\n.modal.zoom .modal-dialog {\n    -webkit-transform: scale(0.1);\n    -moz-transform: scale(0.1);\n    -ms-transform: scale(0.1);\n    transform: scale(0.1);\n    top: 300px;\n    opacity: 0;\n    -webkit-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    transition: all 0.3s;\n}\n.modal.zoom.in .modal-dialog {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n    -webkit-transform: translate3d(0, -300px, 0);\n    transform: translate3d(0, -300px, 0);\n    opacity: 1;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isInteger = __webpack_require__(165);
	
	var _isInteger2 = _interopRequireDefault(_isInteger);
	
	var _getScrollBarWidth = __webpack_require__(143);
	
	var _getScrollBarWidth2 = _interopRequireDefault(_getScrollBarWidth);
	
	var _EventListener = __webpack_require__(126);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _coerceBoolean = __webpack_require__(82);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    title: {
	      type: String,
	      default: ''
	    },
	    show: {
	      require: true,
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      twoWay: true
	    },
	    width: {
	      default: null
	    },
	    callback: {
	      type: Function,
	      default: function _default() {}
	    },
	    effect: {
	      type: String,
	      default: null
	    },
	    backdrop: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: true
	    },
	    large: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    small: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	
	    this.$watch('show', function (val) {
	      var el = _this.$el;
	      var body = document.body;
	      var scrollBarWidth = (0, _getScrollBarWidth2.default)();
	      if (val) {
	        el.querySelector('.modal-content').focus();
	        el.style.display = 'block';
	        setTimeout(function () {
	          return el.classList.add('in');
	        }, 0);
	        body.classList.add('modal-open');
	        if (scrollBarWidth !== 0) {
	          body.style.paddingRight = scrollBarWidth + 'px';
	        }
	        if (_this.backdrop) {
	          _this._blurModalContentEvent = _EventListener2.default.listen(_this.$el, 'click', function (e) {
	            if (e.target === el) _this.show = false;
	          });
	        }
	      } else {
	        if (_this._blurModalContentEvent) _this._blurModalContentEvent.remove();
	        el.classList.remove('in');
	        setTimeout(function () {
	          el.style.display = 'none';
	          body.classList.remove('modal-open');
	          body.style.paddingRight = '0';
	        }, 300);
	      }
	    }, { immediate: true });
	  },
	
	  computed: {
	    optionalWidth: function optionalWidth() {
	      if (this.width === null) {
	        return null;
	      } else if ((0, _isInteger2.default)(this.width)) {
	        return this.width + "px";
	      }
	      return this.width;
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	    }
	  },
	  compiled: function compiled() {
	    var me = this;
	
	    window.addEventListener('keyup', function (ev) {
	      if (ev.keyCode === 27) {
	        me.show = false;
	      }
	    });
	  }
	};
	// </script>
	// <style>
	// .modal {
	//   transition: all 0.3s ease;
	// }
	// .modal.in {
	//   background-color: rgba(0,0,0,0.5);
	// }
	// .modal.zoom .modal-dialog {
	//     -webkit-transform: scale(0.1);
	//     -moz-transform: scale(0.1);
	//     -ms-transform: scale(0.1);
	//     transform: scale(0.1);
	//     top: 300px;
	//     opacity: 0;
	//     -webkit-transition: all 0.3s;
	//     -moz-transition: all 0.3s;
	//     transition: all 0.3s;
	// }
	// .modal.zoom.in .modal-dialog {
	//     -webkit-transform: scale(1);
	//     -moz-transform: scale(1);
	//     -ms-transform: scale(1);
	//     transform: scale(1);
	//     -webkit-transform: translate3d(0, -300px, 0);
	//     transform: translate3d(0, -300px, 0);
	//     opacity: 1;
	// }
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <div role="dialog"
	//     v-bind:class="{
	//     'modal':true,
	//     'fade':effect === 'fade',
	//     'zoom':effect === 'zoom'
	//     }"
	//     >
	//     <div v-bind:class="{'modal-dialog':true,'modal-lg':large,'modal-sm':small}" role="document"
	//       v-bind:style="{width: optionalWidth}">
	//       <div class="modal-content">
	//         <slot name="modal-header">
	//           <div class="modal-header">
	//             <button type="button" class="close" @click="close"><span>&times;</span></button>
	//             <h4 class="modal-title" >{{title}}</h4>
	//           </div>
	//         </slot>
	//         <slot name="modal-body">
	//           <div class="modal-body"></div>
	//         </slot>
	//         <slot name="modal-footer">
	//           <div class="modal-footer">
	//             <button type="button" class="btn btn-default" @click="callback">确定</button>
	//             <button type="button" class="btn tertiary" @click="close">取消</button>
	//           </div>
	//         </slot>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(166), __esModule: true };

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(167);
	module.exports = __webpack_require__(99).Number.isInteger;

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(97);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(168)});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(119)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 169 */
/***/ function(module, exports) {

	module.exports = "\n<div role=\"dialog\"\n  v-bind:class=\"{\n  'modal':true,\n  'fade':effect === 'fade',\n  'zoom':effect === 'zoom'\n  }\"\n  >\n  <div v-bind:class=\"{'modal-dialog':true,'modal-lg':large,'modal-sm':small}\" role=\"document\"\n    v-bind:style=\"{width: optionalWidth}\">\n    <div class=\"modal-content\">\n      <slot name=\"modal-header\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" @click=\"close\"><span>&times;</span></button>\n          <h4 class=\"modal-title\" >{{title}}</h4>\n        </div>\n      </slot>\n      <slot name=\"modal-body\">\n        <div class=\"modal-body\"></div>\n      </slot>\n      <slot name=\"modal-footer\">\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click=\"callback\">确定</button>\n          <button type=\"button\" class=\"btn tertiary\" @click=\"close\">取消</button>\n        </div>\n      </slot>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(171)
	__vue_script__ = __webpack_require__(173)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Option.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(174)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Option.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(172);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(80)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2dd86df9&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Option.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2dd86df9&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Option.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(79)();
	// imports
	
	
	// module
	exports.push([module.id, "\na span.check-mark[_v-2dd86df9] {\n  position: absolute;\n  display: inline-block;\n  right: 15px;\n  margin-top: 5px;\n}\n", "", {"version":3,"sources":["/./src/components/Option.vue?2558c81b"],"names":[],"mappings":";AA0CA;EACA,mBAAA;EACA,sBAAA;EACA,YAAA;EACA,gBAAA;CACA","file":"Option.vue","sourcesContent":["<template>\n  <li style=\"position:relative\">\n    <a @mousedown.prevent=\"handleClick\" style=\"cursor:pointer\">\n      <span v-el:v><slot></slot></span>\n      <span class=\"glyphicon glyphicon-ok check-mark\" v-show=\"chosen\"></span>\n    </a>\n  </li>\n</template>\n\n<script>\n  export default {\n    props: {\n      value: {\n        type: String\n      }\n    },\n    data() {\n      return {\n        chosen: false\n      }\n    },\n    computed: {\n      chosen() {\n        return this.$parent.value.indexOf(this.value) !== -1\n      }\n    },\n    methods: {\n      handleClick() {\n        const parent = this.$parent\n        if (parent.multiple) {\n          const index = parent.value.indexOf(this.value)\n          index === -1 ? parent.value.push(this.value) : parent.value.splice(index, 1)\n        } else {\n          parent.value = [this.value]\n          parent.show = false\n        }\n      }\n    }\n  }\n</script>\n\n<style scoped>\n  a span.check-mark {\n    position: absolute;\n    display: inline-block;\n    right: 15px;\n    margin-top: 5px;\n  }\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 173 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <li style="position:relative">
	//     <a @mousedown.prevent="handleClick" style="cursor:pointer">
	//       <span v-el:v><slot></slot></span>
	//       <span class="glyphicon glyphicon-ok check-mark" v-show="chosen"></span>
	//     </a>
	//   </li>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: String
	    }
	  },
	  data: function data() {
	    return {
	      chosen: false
	    };
	  },
	
	  computed: {
	    chosen: function chosen() {
	      return this.$parent.value.indexOf(this.value) !== -1;
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      var parent = this.$parent;
	      if (parent.multiple) {
	        var index = parent.value.indexOf(this.value);
	        index === -1 ? parent.value.push(this.value) : parent.value.splice(index, 1);
	      } else {
	        parent.value = [this.value];
	        parent.show = false;
	      }
	    }
	  }
	};
	// </script>
	//
	// <style scoped>
	//   a span.check-mark {
	//     position: absolute;
	//     display: inline-block;
	//     right: 15px;
	//     margin-top: 5px;
	//   }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 174 */
/***/ function(module, exports) {

	module.exports = "\n<li style=\"position:relative\" _v-2dd86df9=\"\">\n  <a @mousedown.prevent=\"handleClick\" style=\"cursor:pointer\" _v-2dd86df9=\"\">\n    <span v-el:v=\"\" _v-2dd86df9=\"\"><slot _v-2dd86df9=\"\"></slot></span>\n    <span class=\"glyphicon glyphicon-ok check-mark\" v-show=\"chosen\" _v-2dd86df9=\"\"></span>\n  </a>\n</li>\n";

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(176)
	__vue_script__ = __webpack_require__(178)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Panel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(179)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Panel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(177);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(80)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Panel.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Panel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(79)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.accordion-toggle {\n  cursor: pointer;\n}\n\n.collapse-transition {\n-webkit-transition: max-height .5s ease;\ntransition: max-height .5s ease;\noverflow: hidden;\n}\n\n.collapse-enter, .collapse-leave {\n  max-height: 0!important;\n}\n\n", "", {"version":3,"sources":["/./src/components/Panel.vue?5f672bf4"],"names":[],"mappings":";AA0DA;EACA,gBAAA;CACA;;AAEA;AACA,wCAAA;AAAA,gCAAA;AACA,iBAAA;CACA;;AAEA;EACA,wBAAA;CACA","file":"Panel.vue","sourcesContent":["<template>\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h4 class=\"panel-title\">\n        <a class=\"accordion-toggle\"\n          @click=\"toggleIsOpen()\">\n           {{ header }}\n        </a>\n      </h4>\n    </div>\n    <div class=\"panel-collapse\"\n      v-el:panel\n      v-show=\"isOpen\"\n      transition=\"collapse\"\n    >\n      <div class=\"panel-body\">\n        <slot></slot>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport coerceBoolean from './utils/coerceBoolean.js'\n\n  export default {\n    props: {\n      isOpen: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: false\n      },\n      header: {\n        type: String\n      }\n    },\n    data() {\n      return {\n        height: 0\n      }\n    },\n    methods: {\n      toggleIsOpen() {\n        this.isOpen = !this.isOpen\n        this.$dispatch('isOpenEvent', this)\n      }\n    },\n    ready() {\n      const panel = this.$els.panel\n      panel.style.display = 'block'\n      this.height = panel.offsetHeight\n      panel.style.maxHeight = this.height + 'px'\n      if (!this.isOpen) panel.style.display = 'none'\n    }\n  }\n</script>\n\n<style>\n.accordion-toggle {\n  cursor: pointer;\n}\n\n.collapse-transition {\ntransition: max-height .5s ease;\noverflow: hidden;\n}\n\n.collapse-enter, .collapse-leave {\n  max-height: 0!important;\n}\n\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(82);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    isOpen: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    header: {
	      type: String
	    }
	  },
	  data: function data() {
	    return {
	      height: 0
	    };
	  },
	
	  methods: {
	    toggleIsOpen: function toggleIsOpen() {
	      this.isOpen = !this.isOpen;
	      this.$dispatch('isOpenEvent', this);
	    }
	  },
	  ready: function ready() {
	    var panel = this.$els.panel;
	    panel.style.display = 'block';
	    this.height = panel.offsetHeight;
	    panel.style.maxHeight = this.height + 'px';
	    if (!this.isOpen) panel.style.display = 'none';
	  }
	};
	// </script>
	//
	// <style>
	// .accordion-toggle {
	//   cursor: pointer;
	// }
	//
	// .collapse-transition {
	// transition: max-height .5s ease;
	// overflow: hidden;
	// }
	//
	// .collapse-enter, .collapse-leave {
	//   max-height: 0!important;
	// }
	//
	// </style>

	/* generated by vue-loader */
	// <template>
	// <div class="panel panel-default">
	//     <div class="panel-heading">
	//       <h4 class="panel-title">
	//         <a class="accordion-toggle"
	//           @click="toggleIsOpen()">
	//            {{ header }}
	//         </a>
	//       </h4>
	//     </div>
	//     <div class="panel-collapse"
	//       v-el:panel
	//       v-show="isOpen"
	//       transition="collapse"
	//     >
	//       <div class="panel-body">
	//         <slot></slot>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 179 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h4 class=\"panel-title\">\n        <a class=\"accordion-toggle\"\n          @click=\"toggleIsOpen()\">\n           {{ header }}\n        </a>\n      </h4>\n    </div>\n    <div class=\"panel-collapse\"\n      v-el:panel\n      v-show=\"isOpen\"\n      transition=\"collapse\"\n    >\n      <div class=\"panel-body\">\n        <slot></slot>\n      </div>\n    </div>\n  </div>\n";

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(181)
	__vue_script__ = __webpack_require__(183)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Popover.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(185)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Popover.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(182);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(80)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(79)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.scale-transition,\n.fade-transition {\n  display: block;\n}\n.scale-enter {\n  -webkit-animation:scale-in 0.15s ease-in;\n          animation:scale-in 0.15s ease-in;\n}\n.scale-leave {\n  -webkit-animation:scale-out 0.15s ease-out;\n          animation:scale-out 0.15s ease-out;\n}\n@-webkit-keyframes scale-in {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes scale-in {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes scale-out {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n}\n@keyframes scale-out {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n}\n\n\n", "", {"version":3,"sources":["/./src/components/Popover.vue?4403645d"],"names":[],"mappings":";AA8BA;;EAEA,eAAA;CACA;AACA;EACA,yCAAA;UAAA,iCAAA;CACA;AACA;EACA,2CAAA;UAAA,mCAAA;CACA;AACA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;CACA;AATA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;CACA;AACA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;CACA;AATA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;CACA","file":"Popover.vue","sourcesContent":["<template>\n  <span v-el:trigger>\n    <slot>\n    </slot>\n  </span>\n  <div class=\"popover\"\n    v-bind:class=\"{\n    'top':placement === 'top',\n    'left':placement === 'left',\n    'right':placement === 'right',\n    'bottom':placement === 'bottom'\n    }\"\n    v-el:popover\n    v-show=\"show\"\n    :transition=\"effect\">\n      <div class=\"arrow\"></div>\n      <h3 class=\"popover-title\" v-show=\"title\">{{title}}</h3>\n      <div class=\"popover-content\">\n        {{{content}}}\n      </div>\n  </div>\n</template>\n\n<script>\nimport PopoverMixin from './popoverMixins.js'\n  export default {\n    mixins: [PopoverMixin]\n  }\n</script>\n<style>\n.scale-transition,\n.fade-transition {\n  display: block;\n}\n.scale-enter {\n  animation:scale-in 0.15s ease-in;\n}\n.scale-leave {\n  animation:scale-out 0.15s ease-out;\n}\n@keyframes scale-in {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes scale-out {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0);\n    opacity: 0;\n  }\n}\n\n\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(184);
	
	var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_popoverMixins2.default]
	};
	// </script>
	// <style>
	// .scale-transition,
	// .fade-transition {
	//   display: block;
	// }
	// .scale-enter {
	//   animation:scale-in 0.15s ease-in;
	// }
	// .scale-leave {
	//   animation:scale-out 0.15s ease-out;
	// }
	// @keyframes scale-in {
	//   0% {
	//     transform: scale(0);
	//     opacity: 0;
	//   }
	//   100% {
	//     transform: scale(1);
	//     opacity: 1;
	//   }
	// }
	// @keyframes scale-out {
	//   0% {
	//     transform: scale(1);
	//     opacity: 1;
	//   }
	//   100% {
	//     transform: scale(0);
	//     opacity: 0;
	//   }
	// }
	//
	//
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <span v-el:trigger>
	//     <slot>
	//     </slot>
	//   </span>
	//   <div class="popover"
	//     v-bind:class="{
	//     'top':placement === 'top',
	//     'left':placement === 'left',
	//     'right':placement === 'right',
	//     'bottom':placement === 'bottom'
	//     }"
	//     v-el:popover
	//     v-show="show"
	//     :transition="effect">
	//       <div class="arrow"></div>
	//       <h3 class="popover-title" v-show="title">{{title}}</h3>
	//       <div class="popover-content">
	//         {{{content}}}
	//       </div>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(126);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _coerceBoolean = __webpack_require__(82);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PopoverMixin = {
	  props: {
	    trigger: {
	      type: String,
	      default: 'click'
	    },
	    effect: {
	      type: String,
	      default: 'fadein'
	    },
	    title: {
	      type: String
	    },
	    content: {
	      type: String
	    },
	    header: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: true
	    },
	    placement: {
	      type: String
	    }
	  },
	  data: function data() {
	    return {
	      position: {
	        top: 0,
	        left: 0
	      },
	      show: true
	    };
	  },
	
	  methods: {
	    toggle: function toggle() {
	      this.show = !this.show;
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	
	    if (!this.$els.popover) return console.error("Couldn't find popover v-el in your component that uses popoverMixin.");
	    var popover = this.$els.popover;
	    var triger = this.$els.trigger.children[0];
	
	    if (this.trigger === 'hover') {
	      this._mouseenterEvent = _EventListener2.default.listen(triger, 'mouseenter', function () {
	        return self.show = true;
	      });
	      this._mouseleaveEvent = _EventListener2.default.listen(triger, 'mouseleave', function () {
	        return self.show = false;
	      });
	    } else if (this.trigger === 'focus') {
	      this._focusEvent = _EventListener2.default.listen(triger, 'focus', function () {
	        return _this.show = true;
	      });
	      this._blurEvent = _EventListener2.default.listen(triger, 'blur', function () {
	        return _this.show = false;
	      });
	    } else {
	      this._clickEvent = _EventListener2.default.listen(triger, 'click', this.toggle);
	    }
	
	    switch (this.placement) {
	      case 'top':
	        this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
	        this.position.top = triger.offsetTop - popover.offsetHeight;
	        break;
	      case 'topLeft':
	        this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2 + popover.offsetWidth / 4;
	        this.position.top = triger.offsetTop - popover.offsetHeight;
	        break;
	      case 'topRight':
	        this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2 - popover.offsetWidth / 4;
	        this.position.top = triger.offsetTop - popover.offsetHeight;
	        break;
	      case 'left':
	        this.position.left = triger.offsetLeft - popover.offsetWidth;
	        this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
	        break;
	      case 'leftTop':
	        this.position.left = triger.offsetLeft - popover.offsetWidth;
	        this.position.top = triger.offsetTop + triger.offsetHeight / 4 - popover.offsetHeight / 2 + popover.offsetHeight / 4;
	        break;
	      case 'leftBottom':
	        this.position.left = triger.offsetLeft - popover.offsetWidth;
	        this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2 - popover.offsetHeight / 4 + triger.offsetHeight / 4;
	        break;
	      case 'right':
	        this.position.left = triger.offsetLeft + triger.offsetWidth;
	        this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
	        break;
	      case 'rightTop':
	        this.position.left = triger.offsetLeft + triger.offsetWidth;
	        this.position.top = triger.offsetTop + triger.offsetHeight / 4 - popover.offsetHeight / 2 + popover.offsetHeight / 4;
	        break;
	      case 'rightBottom':
	        this.position.left = triger.offsetLeft + triger.offsetWidth;
	        this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2 - popover.offsetHeight / 4 + triger.offsetHeight / 4;
	        break;
	      case 'bottom':
	        this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
	        this.position.top = triger.offsetTop + triger.offsetHeight;
	        break;
	      case 'bottomLeft':
	        this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2 + popover.offsetWidth / 4;
	        this.position.top = triger.offsetTop + triger.offsetHeight;
	        break;
	      case 'bottomRight':
	        this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2 - popover.offsetWidth / 4;
	        this.position.top = triger.offsetTop + triger.offsetHeight;
	        break;
	      default:
	        console.log('Wrong placement prop');
	    }
	    popover.style.top = this.position.top + 'px';
	    popover.style.left = this.position.left + 'px';
	    popover.style.display = 'none';
	    this.show = !this.show;
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._blurEvent) {
	      this._blurEvent.remove();
	      this._focusEvent.remove();
	    }
	    if (this._mouseenterEvent) {
	      this._mouseenterEvent.remove();
	      this._mouseleaveEvent.remove();
	    }
	    if (this._clickEvent) this._clickEvent.remove();
	  }
	};
	
	exports.default = PopoverMixin;

/***/ },
/* 185 */
/***/ function(module, exports) {

	module.exports = "\n<span v-el:trigger>\n  <slot>\n  </slot>\n</span>\n<div class=\"popover\"\n  v-bind:class=\"{\n  'top':placement === 'top',\n  'left':placement === 'left',\n  'right':placement === 'right',\n  'bottom':placement === 'bottom'\n  }\"\n  v-el:popover\n  v-show=\"show\"\n  :transition=\"effect\">\n    <div class=\"arrow\"></div>\n    <h3 class=\"popover-title\" v-show=\"title\">{{title}}</h3>\n    <div class=\"popover-content\">\n      {{{content}}}\n    </div>\n</div>\n";

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(187)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Progressbar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(188)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Progressbar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(82);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    now: {
	      type: Number,
	      require: true
	    },
	    label: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    type: {
	      type: String
	    },
	    striped: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    animated: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    }
	  }
	};
	// </script>
	/* generated by vue-loader */
	// <template>
	//   <div role="progressbar"
	//     v-bind:class="{
	//     'progress-bar' : true,
	//     'progress-bar-success':type == 'success',
	//     'progress-bar-warning':type == 'warning',
	//     'progress-bar-info':type == 'info',
	//     'progress-bar-danger':type == 'danger',
	//     'progress-bar-striped':striped,
	//     'active':animated
	//     }"
	//     v-bind:style="{width: now + '%'}">
	//     {{label ? now + '%':'' }}
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 188 */
/***/ function(module, exports) {

	module.exports = "\n<div role=\"progressbar\"\n  v-bind:class=\"{\n  'progress-bar' : true,\n  'progress-bar-success':type == 'success',\n  'progress-bar-warning':type == 'warning',\n  'progress-bar-info':type == 'info',\n  'progress-bar-danger':type == 'danger',\n  'progress-bar-striped':striped,\n  'active':animated\n  }\"\n  v-bind:style=\"{width: now + '%'}\">\n  {{label ? now + '%':'' }}\n</div>\n";

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(190)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/radioBtn.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(191)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/radioBtn.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(82);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    value: {
	      type: String
	    },
	    checked: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    size: {
	      type: String,
	      default: 'default'
	    }
	  },
	  computed: {
	    active: function active() {
	      return this.$parent.value === this.value;
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      this.$parent.value = this.value;
	    }
	  },
	  created: function created() {
	    if (this.$parent.value === this.value) {
	      this.checked = true;
	    } else if (!this.$parent.value.length && this.checked) {
	      this.$parent.value = this.value;
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <label class="button"
	//   v-bind:class="{
	//     'active':active,
	//     'large': size == 'large',
	//     'small': size == 'small'
	//   }">
	//
	//     <input type="radio" autocomplete="off"
	//       :checked="checked"
	//       @click="handleClick"
	//     />
	//
	//     <slot></slot>
	//
	//   </label>
	// </template>
	//
	// <script>

/***/ },
/* 191 */
/***/ function(module, exports) {

	module.exports = "\n<label class=\"button\"\nv-bind:class=\"{\n  'active':active,\n  'large': size == 'large',\n  'small': size == 'small'\n}\">\n\n  <input type=\"radio\" autocomplete=\"off\"\n    :checked=\"checked\"\n    @click=\"handleClick\"\n  />\n\n  <slot></slot>\n\n</label>\n";

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(193)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/radioGroup.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(194)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/radioGroup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 193 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="btn-group" data-toggle="buttons" :class="{
	//     'large': size == 'large',
	//     'small': size == 'small'
	//   }">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: String,
	      twoWay: true
	    },
	    type: {
	      type: String,
	      default: 'default'
	    },
	    size: {
	      type: String,
	      default: 'default'
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 194 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"btn-group\" data-toggle=\"buttons\" :class=\"{\n  'large': size == 'large',\n  'small': size == 'small'\n}\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(196)
	__vue_script__ = __webpack_require__(198)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Select.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(199)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Select.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(197);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(80)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-79457f00&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Select.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-79457f00&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Select.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(79)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Select.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(82);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    options: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    value: {
	      twoWay: true
	    },
	    placeholder: {
	      type: String,
	      default: 'Nothing Selected'
	    },
	    multiple: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    search: { // Allow searching (only works when options are provided)
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    limit: {
	      type: Number,
	      default: 1024
	    },
	    closeOnSelect: { // only works when multiple==false
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    }
	  },
	  ready: function ready() {
	    if (this.value.constructor !== Array) {
	      if (this.value.length === 0) {
	        this.value = [];
	      } else {
	        this.value = [this.value];
	      }
	    } else {
	      if (!this.multiple && this.value.length > 1) {
	        this.value = this.value.slice(0, 1);
	      } else if (this.multiple && this.value.length > this.limit) {
	        this.value = this.value.slice(0, this.limit);
	      }
	    }
	  },
	  data: function data() {
	    return {
	      searchText: null,
	      show: false,
	      showNotify: false
	    };
	  },
	
	  computed: {
	    selectedItems: function selectedItems() {
	      var foundItems = [];
	      if (this.value.length) {
	        for (var item in this.value) {
	          if (typeof this.value[item] === "string") {
	            foundItems.push(this.value[item]);
	          }
	        }
	        return foundItems.join(', ');
	      }
	    },
	    showPlaceholder: function showPlaceholder() {
	      return this.value.length === 0;
	    }
	  },
	  watch: {
	    value: function value(val) {
	      var _this = this;
	
	      if (val.length > this.limit) {
	        this.showNotify = true;
	        this.value.pop();
	        setTimeout(function () {
	          return _this.showNotify = false;
	        }, 1000);
	      }
	    }
	  },
	  methods: {
	    select: function select(v) {
	      if (this.value.indexOf(v) === -1) {
	        if (this.multiple) {
	          this.value.push(v);
	        } else {
	          this.value = [v];
	        }
	      } else {
	        if (this.multiple) {
	          this.value.$remove(v);
	        }
	      }
	      if (this.closeOnSelect) {
	        this.toggleDropdown();
	      }
	    },
	    toggleDropdown: function toggleDropdown() {
	      this.show = !this.show;
	    }
	  }
	};
	// </script>
	//
	// <style scoped>
	//
	// </style>
	/* generated by vue-loader */
	// <template>
	//   <div class="btn-group" v-bind:class="{open: show}">
	//     <button v-el:btn type="button" class="btn btn-default dropdown-toggle"
	//       @click="toggleDropdown"
	//       @blur="show = (search ? show : false)"
	//       v-bind="{disabled: disabled}"
	//     >
	//       <span class="btn-placeholder" v-show="showPlaceholder">{{placeholder}}</span>
	//       <span class="btn-content">{{ selectedItems }}</span>
	//       <span class="caret"></span>
	//     </button>
	//     <ul class="dropdown-menu">
	//       <template v-if="options.length">
	//         <li v-if="search" class="bs-searchbox">
	//           <input type="text" placeholder="Search" v-model="searchText" class="form-control" autocomplete="off">
	//         </li>
	//         <li v-for="option in options | filterBy searchText " v-bind:id="option.value" style="position:relative">
	//           <a @mousedown.prevent="select(option.value)" style="cursor:pointer">
	//             {{ option.label }}
	//             <span class="glyphicon glyphicon-ok check-mark" v-show="value.indexOf(option.value) !== -1"></span>
	//           </a>
	//         </li>
	//       </template>
	//       <slot v-else></slot>
	//       <div class="notify" v-show="showNotify" transition="fadein">Limit reached ({{limit}} items max).</div>
	//     </ul>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 199 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"btn-group\" v-bind:class=\"{open: show}\" _v-79457f00=\"\">\n  <button v-el:btn=\"\" type=\"button\" class=\"btn btn-default dropdown-toggle\" @click=\"toggleDropdown\" @blur=\"show = (search ? show : false)\" v-bind=\"{disabled: disabled}\" _v-79457f00=\"\">\n    <span class=\"btn-placeholder\" v-show=\"showPlaceholder\" _v-79457f00=\"\">{{placeholder}}</span>\n    <span class=\"btn-content\" _v-79457f00=\"\">{{ selectedItems }}</span>\n    <span class=\"caret\" _v-79457f00=\"\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" _v-79457f00=\"\">\n    <template v-if=\"options.length\">\n      <li v-if=\"search\" class=\"bs-searchbox\" _v-79457f00=\"\">\n        <input type=\"text\" placeholder=\"Search\" v-model=\"searchText\" class=\"form-control\" autocomplete=\"off\" _v-79457f00=\"\">\n      </li>\n      <li v-for=\"option in options | filterBy searchText \" v-bind:id=\"option.value\" style=\"position:relative\" _v-79457f00=\"\">\n        <a @mousedown.prevent=\"select(option.value)\" style=\"cursor:pointer\" _v-79457f00=\"\">\n          {{ option.label }}\n          <span class=\"glyphicon glyphicon-ok check-mark\" v-show=\"value.indexOf(option.value) !== -1\" _v-79457f00=\"\"></span>\n        </a>\n      </li>\n    </template>\n    <slot v-else=\"\" _v-79457f00=\"\"></slot>\n    <div class=\"notify\" v-show=\"showNotify\" transition=\"fadein\" _v-79457f00=\"\">Limit reached ({{limit}} items max).</div>\n  </ul>\n</div>\n";

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(201)
	__vue_script__ = __webpack_require__(203)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tab.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(204)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Tab.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(202);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(80)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-300001c1&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tab.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-300001c1&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tab.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(79)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.tab-content > .tab-pane[_v-300001c1] {\n  display: block;\n}\n", "", {"version":3,"sources":["/./src/components/Tab.vue?15b01c3e"],"names":[],"mappings":";AA0DA;EACA,eAAA;CACA","file":"Tab.vue","sourcesContent":["<template>\n  <div role=\"tabpanel\" class=\"tab-pane\"\n      v-bind:class=\"{hide:!show}\"\n      v-show=\"show\"\n      :transition=\"transition\"\n  >\n    <slot></slot>\n  </div>\n</template>\n\n<script>\nimport coerceBoolean from './utils/coerceBoolean.js'\n\n  export default {\n    props: {\n      header: {\n        type: String\n      },\n      disabled: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: false\n      }\n    },\n    data() {\n      return {\n        index: 0,\n        show: false\n      }\n    },\n    computed: {\n      show() {\n        return (this.$parent.active == this.index);\n      },\n      transition() {\n        return this.$parent.effect\n      }\n    },\n    created() {\n      this.$parent.renderData.push({\n        header: this.header,\n        disabled: this.disabled\n      })\n    },\n    ready() {\n        for (var c in this.$parent.$children)\n        {\n            if (this.$parent.$children[c].$el == this.$el)\n            {\n                this.index= c;\n                break;\n            }\n        }\n    }\n  }\n</script>\n\n<style scoped>\n  .tab-content > .tab-pane {\n    display: block;\n  }\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(82);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    header: {
	      type: String
	    },
	    disabled: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      index: 0,
	      show: false
	    };
	  },
	
	  computed: {
	    show: function show() {
	      return this.$parent.active == this.index;
	    },
	    transition: function transition() {
	      return this.$parent.effect;
	    }
	  },
	  created: function created() {
	    this.$parent.renderData.push({
	      header: this.header,
	      disabled: this.disabled
	    });
	  },
	  ready: function ready() {
	    for (var c in this.$parent.$children) {
	      if (this.$parent.$children[c].$el == this.$el) {
	        this.index = c;
	        break;
	      }
	    }
	  }
	};
	// </script>
	//
	// <style scoped>
	//   .tab-content > .tab-pane {
	//     display: block;
	//   }
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <div role="tabpanel" class="tab-pane"
	//       v-bind:class="{hide:!show}"
	//       v-show="show"
	//       :transition="transition"
	//   >
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 204 */
/***/ function(module, exports) {

	module.exports = "\n<div role=\"tabpanel\" class=\"tab-pane\" v-bind:class=\"{hide:!show}\" v-show=\"show\" :transition=\"transition\" _v-300001c1=\"\">\n  <slot _v-300001c1=\"\"></slot>\n</div>\n";

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(206)
	__vue_script__ = __webpack_require__(207)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tabset.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(208)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Tabset.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 206 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 207 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="navWrapper">
	//     <!-- Nav tabs -->
	//      <ul :class="{
	//       'nav': true,
	//       'nav-tabs': (tabType === 'nav-tabs'),
	//       'nav-base': (tabType === 'base') }" role="tablist">
	//             <li
	//                 v-for="r in renderData"
	//                 v-bind:class="{
	//                   'active': ($index === active),
	//                   'disabled': r.disabled
	//                 }"
	//                 @click.prevent="handleTabListClick($index, r)"
	//                 :disabled="r.disabled"
	//             >
	//                 <a href="#">{{{r.header}}}</a>
	//             </li>
	//      </ul>
	//
	//
	//      <!-- Tab panes -->
	//      <div class="tab-content" v-el:tab-content>
	//         <slot></slot>
	//      </div>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    effect: {
	      type: String,
	      default: 'fadein'
	    },
	    active: {
	      type: Number,
	      default: 0
	    },
	    tabType: {
	      type: String,
	      default: 'nav-tabs'
	    }
	  },
	
	  data: function data() {
	    return {
	      renderData: []
	    };
	  },
	
	  methods: {
	    handleTabListClick: function handleTabListClick(index, el) {
	      if (!el.disabled) this.active = index;
	    }
	  }
	};
	// </script>
	//
	// <style lang="less" scoped>
	//   .navWrapper {
	//     position: relative;
	//     display: inline-block;
	//     vertical-align: middle;
	//   }
	//   .nav-tabs {
	//     margin-bottom: 15px
	//   }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 208 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"navWrapper\" _v-149b3b9e=\"\">\n  <!-- Nav tabs -->\n   <ul :class=\"{\n    'nav': true,\n    'nav-tabs': (tabType === 'nav-tabs'),\n    'nav-base': (tabType === 'base') }\" role=\"tablist\" _v-149b3b9e=\"\">\n          <li v-for=\"r in renderData\" v-bind:class=\"{\n                'active': ($index === active),\n                'disabled': r.disabled\n              }\" @click.prevent=\"handleTabListClick($index, r)\" :disabled=\"r.disabled\" _v-149b3b9e=\"\">\n              <a href=\"#\" _v-149b3b9e=\"\">{{{r.header}}}</a>\n          </li>\n   </ul>\n\n\n   <!-- Tab panes -->\n   <div class=\"tab-content\" v-el:tab-content=\"\" _v-149b3b9e=\"\">\n      <slot _v-149b3b9e=\"\"></slot>\n   </div>\n</div>\n";

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(210)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Table.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(211)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Table.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 210 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	// <table class="table">
	//     <thead>
	//         <tr>
	//             <th v-if="rowSelection">
	//                 <input type="checkbox" @change="onCheckAll"/>
	//             </th>
	//             <th v-for="key in columns" :class="{'multi-col':key.multiCols}" :width="key.width">
	//                 {{key['title']}}
	//                 <template v-if="key.multiCols">
	//                     <span class="iconfont">&#xe608;</span>
	//                     <ul>
	//                         <li v-for="col in key.multiCols"><a href="javascript:void(0);" @click="onSelectColumn(col.id, col.dataId)">{{col.name}}</a></li>
	//                     </ul>
	//                 </template>
	//             </th>
	//
	//         </tr>
	//     </thead>
	//     <tbody>
	//         <tr v-show="!dataSrouce.length"><td colspan="10000" style="text-align: center;" class="vue-table-empty">没有任何数据</td></tr>
	//         <tr v-for="
	//             (rowIndex, entry) in dataSrouce
	//             | filterBy filterKey
	//             | orderBy sortKey sortOrders[sortKey]">
	//             <td v-if="rowSelection">
	//                 <input type="checkbox" v-model="checkedKeys" :value="entry[rowKey]"  />
	//             </td>
	//             <td v-for="key in columns" v-bind="{'data-key': entry[rowKey] ,'data-column':key.dataIndex,'data-value':entry[key.dataIndex]}">
	//                 <template v-if="key.render">
	//                     {{{key.render(entry, rowIndex)}}}
	//                 </template>
	//                 <template v-else>
	//                 {{{entry[key.dataIndex] | g_filter key.filter}}}
	//                 </template>
	//             </td>
	//         </tr>
	//     </tbody>
	// </table>
	// </template>
	//
	// <script>
	exports.default = {
	    props: {
	        dataSrouce: Array,
	        columns: Array,
	        filterKey: String,
	        rowSelection: Boolean,
	        rowKey: String
	    },
	    data: function data() {
	        var sortOrders = {};
	        this.columns.forEach(function (key) {
	            return sortOrders[key] = 1;
	        });
	        this.compileTbody();
	        return {
	            sortKey: '',
	            sortOrders: sortOrders,
	            data: this.dataSrouce,
	            checkedKeys: [],
	            checkedDataList: [],
	            scope: null
	        };
	    },
	
	    watch: {
	        checkedKeys: function checkedKeys(_checkedKeys) {
	            var self = this;
	            // 有时候需要多选的时候传两个字段，所以再保存一份选中的数据列集合
	            self.checkedDataList = [];
	            self.dataSrouce.forEach(function (item, i) {
	                if (_checkedKeys.indexOf(item[self.rowKey]) >= 0) {
	                    self.checkedDataList.push(item);
	                }
	            });
	        },
	
	        dataSrouce: {
	            handler: function handler() {
	                this.compileTbody();
	            },
	
	            deep: true
	        }
	    },
	    methods: {
	        compileTbody: function compileTbody() {
	            var self = this;
	            //  因为table里有html和事件绑定，所以需要重新调用$compile，而马上调用时可能页面还没有重新渲染完成
	            this.$nextTick(function () {
	                self.scope = self.scope || self.$parent;
	                self.scope.$compile(self.$el.getElementsByTagName('tbody')[0]);
	            });
	        },
	        sortBy: function sortBy(key) {
	            this.sortKey = key;
	            this.sortOrders[key] = this.sortOrders[key] * -1;
	        },
	        onCheckAll: function onCheckAll() {
	            var self = this;
	            self.checkedKeys = [];
	            self.checkedDataList = [];
	            if (event.target.checked) {
	                self.dataSrouce.forEach(function (key, i) {
	                    if (key[self.rowKey]) {
	                        self.checkedKeys.push(key[self.rowKey]);
	                        self.checkedDataList.push(key);
	                    }
	                });
	            }
	        },
	        onSelectColumn: function onSelectColumn(col, dataId) {
	            this.$dispatch('table-selectCol', col, dataId);
	        }
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 211 */
/***/ function(module, exports) {

	module.exports = "\n<table class=\"table\">\n    <thead>\n        <tr>\n            <th v-if=\"rowSelection\">\n                <input type=\"checkbox\" @change=\"onCheckAll\"/>\n            </th>\n            <th v-for=\"key in columns\" :class=\"{'multi-col':key.multiCols}\" :width=\"key.width\">\n                {{key['title']}}\n                <template v-if=\"key.multiCols\">\n                    <span class=\"iconfont\">&#xe608;</span>\n                    <ul>\n                        <li v-for=\"col in key.multiCols\"><a href=\"javascript:void(0);\" @click=\"onSelectColumn(col.id, col.dataId)\">{{col.name}}</a></li>\n                    </ul>\n                </template>\n            </th>\n\n        </tr>\n    </thead>\n    <tbody>\n        <tr v-show=\"!dataSrouce.length\"><td colspan=\"10000\" style=\"text-align: center;\" class=\"vue-table-empty\">没有任何数据</td></tr>\n        <tr v-for=\"\n            (rowIndex, entry) in dataSrouce\n            | filterBy filterKey\n            | orderBy sortKey sortOrders[sortKey]\">\n            <td v-if=\"rowSelection\">\n                <input type=\"checkbox\" v-model=\"checkedKeys\" :value=\"entry[rowKey]\"  />\n            </td>\n            <td v-for=\"key in columns\" v-bind=\"{'data-key': entry[rowKey] ,'data-column':key.dataIndex,'data-value':entry[key.dataIndex]}\">\n                <template v-if=\"key.render\">\n                    {{{key.render(entry, rowIndex)}}}\n                </template>\n                <template v-else>\n                {{{entry[key.dataIndex] | g_filter key.filter}}}\n                </template>\n            </td>\n        </tr>\n    </tbody>\n</table>\n";

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(213)
	__vue_script__ = __webpack_require__(215)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tooltip.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(216)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Tooltip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(214);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(80)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(79)();
	// imports
	
	
	// module
	exports.push([module.id, "\n  .tooltip {\n    opacity: .9\n  }\n.fadein-enter {\n  -webkit-animation:fadein-in 0.3s ease-in;\n          animation:fadein-in 0.3s ease-in;\n}\n.fadein-leave {\n  -webkit-animation:fadein-out 0.3s ease-out;\n          animation:fadein-out 0.3s ease-out;\n}\n@-webkit-keyframes fadein-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadein-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadein-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fadein-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n", "", {"version":3,"sources":["/./src/components/Tooltip.vue?a92097dc"],"names":[],"mappings":";EAiDA;IACA,WAAA;GACA;AACA;EACA,yCAAA;UAAA,iCAAA;CACA;AACA;EACA,2CAAA;UAAA,mCAAA;CACA;AACA;EACA;IACA,WAAA;GACA;EACA;IACA,WAAA;GACA;CACA;AAPA;EACA;IACA,WAAA;GACA;EACA;IACA,WAAA;GACA;CACA;AACA;EACA;IACA,WAAA;GACA;EACA;IACA,WAAA;GACA;CACA;AAPA;EACA;IACA,WAAA;GACA;EACA;IACA,WAAA;GACA;CACA","file":"Tooltip.vue","sourcesContent":["<template>\n  <span v-el:trigger>\n    <slot>\n    </slot>\n  </span>\n  <div class=\"tooltip\"\n    v-bind:class=\"{\n    'top':    placement === 'top',\n    'top-left':    placement === 'topLeft',\n    'top-right':    placement === 'topRight',\n    'left':   placement === 'left',\n    'left-top':   placement === 'leftTop',\n    'left-bottom':   placement === 'leftBottom',\n    'right':  placement === 'right',\n    'right-top':  placement === 'rightTop',\n    'right-bottom':  placement === 'rightBottom',\n    'bottom': placement === 'bottom',\n    'bottom-left': placement === 'bottomLeft',\n    'bottom-right': placement === 'bottomRight'\n    }\"\n    v-el:popover\n    v-show=\"show\"\n    :transition=\"effect\"\n    role=\"tooltip\">\n    <div class=\"tooltip-arrow\" v-el:arrow></div>\n    <div class=\"tooltip-inner\">\n      {{{content}}}\n    </div>\n  </div>\n</template>\n\n<script>\nimport PopoverMixin from './popoverMixins.js'\n  export default {\n    mixins: [PopoverMixin],\n    props: {\n      trigger: {\n        type: String,\n        default: 'hover'\n      },\n      effect: {\n        type: String,\n        default: 'scale'\n      }\n    }\n  }\n</script>\n\n<style>\n  .tooltip {\n    opacity: .9\n  }\n.fadein-enter {\n  animation:fadein-in 0.3s ease-in;\n}\n.fadein-leave {\n  animation:fadein-out 0.3s ease-out;\n}\n@keyframes fadein-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadein-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(184);
	
	var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_popoverMixins2.default],
	  props: {
	    trigger: {
	      type: String,
	      default: 'hover'
	    },
	    effect: {
	      type: String,
	      default: 'scale'
	    }
	  }
	};
	// </script>
	//
	// <style>
	//   .tooltip {
	//     opacity: .9
	//   }
	// .fadein-enter {
	//   animation:fadein-in 0.3s ease-in;
	// }
	// .fadein-leave {
	//   animation:fadein-out 0.3s ease-out;
	// }
	// @keyframes fadein-in {
	//   0% {
	//     opacity: 0;
	//   }
	//   100% {
	//     opacity: 1;
	//   }
	// }
	// @keyframes fadein-out {
	//   0% {
	//     opacity: 1;
	//   }
	//   100% {
	//     opacity: 0;
	//   }
	// }
	//
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <span v-el:trigger>
	//     <slot>
	//     </slot>
	//   </span>
	//   <div class="tooltip"
	//     v-bind:class="{
	//     'top':    placement === 'top',
	//     'top-left':    placement === 'topLeft',
	//     'top-right':    placement === 'topRight',
	//     'left':   placement === 'left',
	//     'left-top':   placement === 'leftTop',
	//     'left-bottom':   placement === 'leftBottom',
	//     'right':  placement === 'right',
	//     'right-top':  placement === 'rightTop',
	//     'right-bottom':  placement === 'rightBottom',
	//     'bottom': placement === 'bottom',
	//     'bottom-left': placement === 'bottomLeft',
	//     'bottom-right': placement === 'bottomRight'
	//     }"
	//     v-el:popover
	//     v-show="show"
	//     :transition="effect"
	//     role="tooltip">
	//     <div class="tooltip-arrow" v-el:arrow></div>
	//     <div class="tooltip-inner">
	//       {{{content}}}
	//     </div>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 216 */
/***/ function(module, exports) {

	module.exports = "\n<span v-el:trigger>\n  <slot>\n  </slot>\n</span>\n<div class=\"tooltip\"\n  v-bind:class=\"{\n  'top':    placement === 'top',\n  'top-left':    placement === 'topLeft',\n  'top-right':    placement === 'topRight',\n  'left':   placement === 'left',\n  'left-top':   placement === 'leftTop',\n  'left-bottom':   placement === 'leftBottom',\n  'right':  placement === 'right',\n  'right-top':  placement === 'rightTop',\n  'right-bottom':  placement === 'rightBottom',\n  'bottom': placement === 'bottom',\n  'bottom-left': placement === 'bottomLeft',\n  'bottom-right': placement === 'bottomRight'\n  }\"\n  v-el:popover\n  v-show=\"show\"\n  :transition=\"effect\"\n  role=\"tooltip\">\n  <div class=\"tooltip-arrow\" v-el:arrow></div>\n  <div class=\"tooltip-inner\">\n    {{{content}}}\n  </div>\n</div>\n";

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(218)
	__vue_script__ = __webpack_require__(220)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Typeahead.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(222)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Typeahead.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(219);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(80)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(79)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.dropdown-menu > li > a {\n  cursor: pointer;\n}\n", "", {"version":3,"sources":["/./src/components/Typeahead.vue?0d12b9e0"],"names":[],"mappings":";AAyJA;EACA,gBAAA;CACA","file":"Typeahead.vue","sourcesContent":["<template>\n<div style=\"position: relative\"\n  v-bind:class=\"{'open':showDropdown}\"\n  >\n  <input type=\"text\" class=\"form-control\"\n    :placeholder=\"placeholder\"\n    autocomplete=\"off\"\n    v-model=\"query\"\n    @input=\"update\"\n    @keydown.up=\"up\"\n    @keydown.down=\"down\"\n    @keydown.enter= \"hit\"\n    @keydown.esc=\"reset\"\n    @blur=\"showDropdown = false\"\n  />\n  <ul class=\"dropdown-menu\" v-el:dropdown>\n    <li v-for=\"item in items\" v-bind:class=\"{'active': isActive($index)}\">\n      <a @mousedown.prevent=\"hit\" @mousemove=\"setActive($index)\">\n        <partial :name=\"templateName\"></partial>\n      </a>\n    </li>\n  </ul>\n</div>\n\n</template>\n\n<script>\nimport callAjax from './utils/callAjax.js'\nimport coerceBoolean from './utils/coerceBoolean.js'\n\nconst typeahead = {\n    created() {\n      this.items = this.primitiveData\n    },\n    partials: {\n      'default': '<span v-html=\"item | highlight query\"></span>',\n    },\n    props: {\n      data: {\n        type: Array\n      },\n      limit: {\n        type: Number,\n        default: 8\n      },\n      async: {\n        type: String\n      },\n      template: {\n        type:String\n      },\n      templateName: {\n        type:String,\n        default: 'default'\n      },\n      key: {\n        type: String\n      },\n      matchCase: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: false\n      },\n      onHit: {\n        type: Function,\n        default(items) {\n          this.reset()\n          this.query = items\n        }\n      },\n      placeholder: {\n        type: String\n      }\n    },\n    data() {\n      return {\n        query: '',\n        showDropdown: false,\n        noResults: true,\n        current: 0,\n        items: [],\n      }\n    },\n    computed: {\n      primitiveData() {\n        var _this = this;\n        \n        if (this.data) {\n          return this.data.filter(value=> {\n            value = this.matchCase ? value : value.toLowerCase();\n            var query = this.matchCase ? _this.query : _this.query.toLowerCase();\n            return value.indexOf(query) !== -1;\n          }).slice(0, this.limit)\n        }\n      }\n    },\n    ready() {\n      // register a partial:\n      if (this.templateName && this.templateName!=='default')\n      {\n        Vue.partial(this.templateName, this.template)\n      }\n    },\n    methods: {\n      update() {\n        if (!this.query) {\n          this.reset()\n          return false\n        }\n        if (this.data) {\n          this.items = this.primitiveData\n          this.showDropdown = this.items.length ? true : false\n        }\n        if (this.async) {\n          callAjax(this.async + this.query, (data)=> {\n            this.items = data[this.key].slice(0, this.limit)\n            this.showDropdown = this.items.length ? true : false\n          })\n        }\n      },\n      reset() {\n        this.items = []\n        this.query = ''\n        this.loading = false\n        this.showDropdown = false\n      },\n      setActive(index) {\n        this.current = index\n      },\n      isActive(index) {\n        return this.current === index\n      },\n      hit(e) {\n        e.preventDefault()\n        this.onHit(this.items[this.current], this);\n      },\n      up() {\n        if (this.current > 0) this.current--\n      },\n      down() {\n        if (this.current < this.items.length - 1) this.current++\n      }\n    },\n    filters: {\n      highlight(value, phrase) {\n        return value.replace(new RegExp('('+phrase+')', 'gi'), '<strong>$1</strong>')\n      }\n    }\n  }\nexport default typeahead\n</script>\n\n<style>\n.dropdown-menu > li > a {\n  cursor: pointer;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _callAjax = __webpack_require__(221);
	
	var _callAjax2 = _interopRequireDefault(_callAjax);
	
	var _coerceBoolean = __webpack_require__(82);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// <div style="position: relative"
	//   v-bind:class="{'open':showDropdown}"
	//   >
	//   <input type="text" class="form-control"
	//     :placeholder="placeholder"
	//     autocomplete="off"
	//     v-model="query"
	//     @input="update"
	//     @keydown.up="up"
	//     @keydown.down="down"
	//     @keydown.enter= "hit"
	//     @keydown.esc="reset"
	//     @blur="showDropdown = false"
	//   />
	//   <ul class="dropdown-menu" v-el:dropdown>
	//     <li v-for="item in items" v-bind:class="{'active': isActive($index)}">
	//       <a @mousedown.prevent="hit" @mousemove="setActive($index)">
	//         <partial :name="templateName"></partial>
	//       </a>
	//     </li>
	//   </ul>
	// </div>
	//
	// </template>
	//
	// <script>
	
	var typeahead = {
	  created: function created() {
	    this.items = this.primitiveData;
	  },
	
	  partials: {
	    'default': '<span v-html="item | highlight query"></span>'
	  },
	  props: {
	    data: {
	      type: Array
	    },
	    limit: {
	      type: Number,
	      default: 8
	    },
	    async: {
	      type: String
	    },
	    template: {
	      type: String
	    },
	    templateName: {
	      type: String,
	      default: 'default'
	    },
	    key: {
	      type: String
	    },
	    matchCase: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    onHit: {
	      type: Function,
	      default: function _default(items) {
	        this.reset();
	        this.query = items;
	      }
	    },
	    placeholder: {
	      type: String
	    }
	  },
	  data: function data() {
	    return {
	      query: '',
	      showDropdown: false,
	      noResults: true,
	      current: 0,
	      items: []
	    };
	  },
	
	  computed: {
	    primitiveData: function primitiveData() {
	      var _this2 = this;
	
	      var _this = this;
	
	      if (this.data) {
	        return this.data.filter(function (value) {
	          value = _this2.matchCase ? value : value.toLowerCase();
	          var query = _this2.matchCase ? _this.query : _this.query.toLowerCase();
	          return value.indexOf(query) !== -1;
	        }).slice(0, this.limit);
	      }
	    }
	  },
	  ready: function ready() {
	    // register a partial:
	    if (this.templateName && this.templateName !== 'default') {
	      Vue.partial(this.templateName, this.template);
	    }
	  },
	
	  methods: {
	    update: function update() {
	      var _this3 = this;
	
	      if (!this.query) {
	        this.reset();
	        return false;
	      }
	      if (this.data) {
	        this.items = this.primitiveData;
	        this.showDropdown = this.items.length ? true : false;
	      }
	      if (this.async) {
	        (0, _callAjax2.default)(this.async + this.query, function (data) {
	          _this3.items = data[_this3.key].slice(0, _this3.limit);
	          _this3.showDropdown = _this3.items.length ? true : false;
	        });
	      }
	    },
	    reset: function reset() {
	      this.items = [];
	      this.query = '';
	      this.loading = false;
	      this.showDropdown = false;
	    },
	    setActive: function setActive(index) {
	      this.current = index;
	    },
	    isActive: function isActive(index) {
	      return this.current === index;
	    },
	    hit: function hit(e) {
	      e.preventDefault();
	      this.onHit(this.items[this.current], this);
	    },
	    up: function up() {
	      if (this.current > 0) this.current--;
	    },
	    down: function down() {
	      if (this.current < this.items.length - 1) this.current++;
	    }
	  },
	  filters: {
	    highlight: function highlight(value, phrase) {
	      return value.replace(new RegExp('(' + phrase + ')', 'gi'), '<strong>$1</strong>');
	    }
	  }
	};
	exports.default = typeahead;
	// </script>
	//
	// <style>
	// .dropdown-menu > li > a {
	//   cursor: pointer;
	// }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 221 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (url, callback) {
	    var httpRequest = new XMLHttpRequest();
	    httpRequest.onreadystatechange = function () {
	        if (httpRequest.readyState === 4) {
	            if (httpRequest.status === 200) {
	                var data = JSON.parse(httpRequest.responseText);
	                if (callback) callback(data);
	            }
	        }
	    };
	    httpRequest.open('GET', url);
	    httpRequest.send();
	};

/***/ },
/* 222 */
/***/ function(module, exports) {

	module.exports = "\n<div style=\"position: relative\"\n  v-bind:class=\"{'open':showDropdown}\"\n  >\n  <input type=\"text\" class=\"form-control\"\n    :placeholder=\"placeholder\"\n    autocomplete=\"off\"\n    v-model=\"query\"\n    @input=\"update\"\n    @keydown.up=\"up\"\n    @keydown.down=\"down\"\n    @keydown.enter= \"hit\"\n    @keydown.esc=\"reset\"\n    @blur=\"showDropdown = false\"\n  />\n  <ul class=\"dropdown-menu\" v-el:dropdown>\n    <li v-for=\"item in items\" v-bind:class=\"{'active': isActive($index)}\">\n      <a @mousedown.prevent=\"hit\" @mousemove=\"setActive($index)\">\n        <partial :name=\"templateName\"></partial>\n      </a>\n    </li>\n  </ul>\n</div>\n\n";

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(224)
	__vue_script__ = __webpack_require__(225)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Spin.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(226)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Spin.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 224 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 225 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <style lang="less">
	// /*!
	//  * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)
	//  * Copyright 2015 Daniel Cardoso <@DanielCardoso>
	//  * Licensed under MIT
	//  */
	// .spin,
	// .spin > div {
	//     position: relative;
	//     -webkit-box-sizing: border-box;
	//        -moz-box-sizing: border-box;
	//             box-sizing: border-box;
	// }
	// .spin {
	//     display: block;
	//     font-size: 0;
	//     color: #333;
	// }
	// .spin > div {
	//     display: inline-block;
	//     float: none;
	//     background-color: currentColor;
	//     border: 0 solid currentColor;
	// }
	// .spin {
	//     width: 32px;
	//     height: 32px;
	// }
	// .spin.small{
	//   width: 16px;
	//   height: 16px;
	// }
	// .spin.large{
	//   width: 64px;
	//   height: 64px;
	// }
	// .spin > div {
	//     position: absolute;
	//     top: 0;
	//     left: 0;
	//     width: 10px;
	//     height: 10px;
	//     border-radius: 100%;
	// }
	// .spin > div:nth-child(1) {
	//     -webkit-animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;
	//        -moz-animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;
	//          -o-animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;
	//             animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;
	// }
	// .spin > div:nth-child(2) {
	//     -webkit-animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;
	//        -moz-animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;
	//          -o-animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;
	//             animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;
	// }
	// .spin > div:nth-child(3) {
	//     -webkit-animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;
	//        -moz-animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;
	//          -o-animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;
	//             animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;
	// }
	// .spin.small {
	//     width: 16px;
	//     height: 16px;
	// }
	// .spin.small > div {
	//     width: 4px;
	//     height: 4px;
	// }
	// .spin.large {
	//     width: 64px;
	//     height: 64px;
	// }
	// .spin.large > div {
	//     width: 20px;
	//     height: 20px;
	// }
	// /*
	//  * Animations
	//  */
	// @-webkit-keyframes ball-triangle-path-ball-one {
	//     0% {
	//         -webkit-transform: translate(0, 220%);
	//                 transform: translate(0, 220%);
	//     }
	//     17% {
	//         opacity: .25;
	//     }
	//     33% {
	//         opacity: 1;
	//         -webkit-transform: translate(110%, 0);
	//                 transform: translate(110%, 0);
	//     }
	//     50% {
	//         opacity: .25;
	//     }
	//     66% {
	//         opacity: 1;
	//         -webkit-transform: translate(220%, 220%);
	//                 transform: translate(220%, 220%);
	//     }
	//     83% {
	//         opacity: .25;
	//     }
	//     100% {
	//         opacity: 1;
	//         -webkit-transform: translate(0, 220%);
	//                 transform: translate(0, 220%);
	//     }
	// }
	// @-moz-keyframes ball-triangle-path-ball-one {
	//     0% {
	//         -moz-transform: translate(0, 220%);
	//              transform: translate(0, 220%);
	//     }
	//     17% {
	//         opacity: .25;
	//     }
	//     33% {
	//         opacity: 1;
	//         -moz-transform: translate(110%, 0);
	//              transform: translate(110%, 0);
	//     }
	//     50% {
	//         opacity: .25;
	//     }
	//     66% {
	//         opacity: 1;
	//         -moz-transform: translate(220%, 220%);
	//              transform: translate(220%, 220%);
	//     }
	//     83% {
	//         opacity: .25;
	//     }
	//     100% {
	//         opacity: 1;
	//         -moz-transform: translate(0, 220%);
	//              transform: translate(0, 220%);
	//     }
	// }
	// @-o-keyframes ball-triangle-path-ball-one {
	//     0% {
	//         -o-transform: translate(0, 220%);
	//            transform: translate(0, 220%);
	//     }
	//     17% {
	//         opacity: .25;
	//     }
	//     33% {
	//         opacity: 1;
	//         -o-transform: translate(110%, 0);
	//            transform: translate(110%, 0);
	//     }
	//     50% {
	//         opacity: .25;
	//     }
	//     66% {
	//         opacity: 1;
	//         -o-transform: translate(220%, 220%);
	//            transform: translate(220%, 220%);
	//     }
	//     83% {
	//         opacity: .25;
	//     }
	//     100% {
	//         opacity: 1;
	//         -o-transform: translate(0, 220%);
	//            transform: translate(0, 220%);
	//     }
	// }
	// @keyframes ball-triangle-path-ball-one {
	//     0% {
	//         -webkit-transform: translate(0, 220%);
	//            -moz-transform: translate(0, 220%);
	//              -o-transform: translate(0, 220%);
	//                 transform: translate(0, 220%);
	//     }
	//     17% {
	//         opacity: .25;
	//     }
	//     33% {
	//         opacity: 1;
	//         -webkit-transform: translate(110%, 0);
	//            -moz-transform: translate(110%, 0);
	//              -o-transform: translate(110%, 0);
	//                 transform: translate(110%, 0);
	//     }
	//     50% {
	//         opacity: .25;
	//     }
	//     66% {
	//         opacity: 1;
	//         -webkit-transform: translate(220%, 220%);
	//            -moz-transform: translate(220%, 220%);
	//              -o-transform: translate(220%, 220%);
	//                 transform: translate(220%, 220%);
	//     }
	//     83% {
	//         opacity: .25;
	//     }
	//     100% {
	//         opacity: 1;
	//         -webkit-transform: translate(0, 220%);
	//            -moz-transform: translate(0, 220%);
	//              -o-transform: translate(0, 220%);
	//                 transform: translate(0, 220%);
	//     }
	// }
	// @-webkit-keyframes ball-triangle-path-ball-two {
	//     0% {
	//         -webkit-transform: translate(110%, 0);
	//                 transform: translate(110%, 0);
	//     }
	//     17% {
	//         opacity: .25;
	//     }
	//     33% {
	//         opacity: 1;
	//         -webkit-transform: translate(220%, 220%);
	//                 transform: translate(220%, 220%);
	//     }
	//     50% {
	//         opacity: .25;
	//     }
	//     66% {
	//         opacity: 1;
	//         -webkit-transform: translate(0, 220%);
	//                 transform: translate(0, 220%);
	//     }
	//     83% {
	//         opacity: .25;
	//     }
	//     100% {
	//         opacity: 1;
	//         -webkit-transform: translate(110%, 0);
	//                 transform: translate(110%, 0);
	//     }
	// }
	// @-moz-keyframes ball-triangle-path-ball-two {
	//     0% {
	//         -moz-transform: translate(110%, 0);
	//              transform: translate(110%, 0);
	//     }
	//     17% {
	//         opacity: .25;
	//     }
	//     33% {
	//         opacity: 1;
	//         -moz-transform: translate(220%, 220%);
	//              transform: translate(220%, 220%);
	//     }
	//     50% {
	//         opacity: .25;
	//     }
	//     66% {
	//         opacity: 1;
	//         -moz-transform: translate(0, 220%);
	//              transform: translate(0, 220%);
	//     }
	//     83% {
	//         opacity: .25;
	//     }
	//     100% {
	//         opacity: 1;
	//         -moz-transform: translate(110%, 0);
	//              transform: translate(110%, 0);
	//     }
	// }
	// @-o-keyframes ball-triangle-path-ball-two {
	//     0% {
	//         -o-transform: translate(110%, 0);
	//            transform: translate(110%, 0);
	//     }
	//     17% {
	//         opacity: .25;
	//     }
	//     33% {
	//         opacity: 1;
	//         -o-transform: translate(220%, 220%);
	//            transform: translate(220%, 220%);
	//     }
	//     50% {
	//         opacity: .25;
	//     }
	//     66% {
	//         opacity: 1;
	//         -o-transform: translate(0, 220%);
	//            transform: translate(0, 220%);
	//     }
	//     83% {
	//         opacity: .25;
	//     }
	//     100% {
	//         opacity: 1;
	//         -o-transform: translate(110%, 0);
	//            transform: translate(110%, 0);
	//     }
	// }
	// @keyframes ball-triangle-path-ball-two {
	//     0% {
	//         -webkit-transform: translate(110%, 0);
	//            -moz-transform: translate(110%, 0);
	//              -o-transform: translate(110%, 0);
	//                 transform: translate(110%, 0);
	//     }
	//     17% {
	//         opacity: .25;
	//     }
	//     33% {
	//         opacity: 1;
	//         -webkit-transform: translate(220%, 220%);
	//            -moz-transform: translate(220%, 220%);
	//              -o-transform: translate(220%, 220%);
	//                 transform: translate(220%, 220%);
	//     }
	//     50% {
	//         opacity: .25;
	//     }
	//     66% {
	//         opacity: 1;
	//         -webkit-transform: translate(0, 220%);
	//            -moz-transform: translate(0, 220%);
	//              -o-transform: translate(0, 220%);
	//                 transform: translate(0, 220%);
	//     }
	//     83% {
	//         opacity: .25;
	//     }
	//     100% {
	//         opacity: 1;
	//         -webkit-transform: translate(110%, 0);
	//            -moz-transform: translate(110%, 0);
	//              -o-transform: translate(110%, 0);
	//                 transform: translate(110%, 0);
	//     }
	// }
	// @-webkit-keyframes ball-triangle-path-ball-tree {
	//     0% {
	//         -webkit-transform: translate(220%, 220%);
	//                 transform: translate(220%, 220%);
	//     }
	//     17% {
	//         opacity: .25;
	//     }
	//     33% {
	//         opacity: 1;
	//         -webkit-transform: translate(0, 220%);
	//                 transform: translate(0, 220%);
	//     }
	//     50% {
	//         opacity: .25;
	//     }
	//     66% {
	//         opacity: 1;
	//         -webkit-transform: translate(110%, 0);
	//                 transform: translate(110%, 0);
	//     }
	//     83% {
	//         opacity: .25;
	//     }
	//     100% {
	//         opacity: 1;
	//         -webkit-transform: translate(220%, 220%);
	//                 transform: translate(220%, 220%);
	//     }
	// }
	// @-moz-keyframes ball-triangle-path-ball-tree {
	//     0% {
	//         -moz-transform: translate(220%, 220%);
	//              transform: translate(220%, 220%);
	//     }
	//     17% {
	//         opacity: .25;
	//     }
	//     33% {
	//         opacity: 1;
	//         -moz-transform: translate(0, 220%);
	//              transform: translate(0, 220%);
	//     }
	//     50% {
	//         opacity: .25;
	//     }
	//     66% {
	//         opacity: 1;
	//         -moz-transform: translate(110%, 0);
	//              transform: translate(110%, 0);
	//     }
	//     83% {
	//         opacity: .25;
	//     }
	//     100% {
	//         opacity: 1;
	//         -moz-transform: translate(220%, 220%);
	//              transform: translate(220%, 220%);
	//     }
	// }
	// @-o-keyframes ball-triangle-path-ball-tree {
	//     0% {
	//         -o-transform: translate(220%, 220%);
	//            transform: translate(220%, 220%);
	//     }
	//     17% {
	//         opacity: .25;
	//     }
	//     33% {
	//         opacity: 1;
	//         -o-transform: translate(0, 220%);
	//            transform: translate(0, 220%);
	//     }
	//     50% {
	//         opacity: .25;
	//     }
	//     66% {
	//         opacity: 1;
	//         -o-transform: translate(110%, 0);
	//            transform: translate(110%, 0);
	//     }
	//     83% {
	//         opacity: .25;
	//     }
	//     100% {
	//         opacity: 1;
	//         -o-transform: translate(220%, 220%);
	//            transform: translate(220%, 220%);
	//     }
	// }
	// @keyframes ball-triangle-path-ball-tree {
	//     0% {
	//         -webkit-transform: translate(220%, 220%);
	//            -moz-transform: translate(220%, 220%);
	//              -o-transform: translate(220%, 220%);
	//                 transform: translate(220%, 220%);
	//     }
	//     17% {
	//         opacity: .25;
	//     }
	//     33% {
	//         opacity: 1;
	//         -webkit-transform: translate(0, 220%);
	//            -moz-transform: translate(0, 220%);
	//              -o-transform: translate(0, 220%);
	//                 transform: translate(0, 220%);
	//     }
	//     50% {
	//         opacity: .25;
	//     }
	//     66% {
	//         opacity: 1;
	//         -webkit-transform: translate(110%, 0);
	//            -moz-transform: translate(110%, 0);
	//              -o-transform: translate(110%, 0);
	//                 transform: translate(110%, 0);
	//     }
	//     83% {
	//         opacity: .25;
	//     }
	//     100% {
	//         opacity: 1;
	//         -webkit-transform: translate(220%, 220%);
	//            -moz-transform: translate(220%, 220%);
	//              -o-transform: translate(220%, 220%);
	//                 transform: translate(220%, 220%);
	//     }
	// }
	// </style>
	// <template>
	// <div :class="[spin,size]" v-show="spining">
	//   <div></div>
	//   <div></div>
	//   <div></div>
	// </div>
	// </template>
	// <script>
	exports.default = {
	  name: 'loading',
	  props: {
	    spining: {
	      type: Boolean,
	      default: false
	    },
	    size: {
	      type: String,
	      default: 'default'
	    }
	  },
	  data: function data() {
	    return {
	      spin: 'spin',
	      size: this.size
	    };
	  },
	
	  methods: {
	    show: function show() {
	      this.spining = true;
	    },
	    hide: function hide() {
	      this.spining = false;
	    }
	  },
	  created: function created() {
	    var self = this;
	    // window.DAYU = window.DAYU || {};
	    Vue.showLoading = function () {
	      self.show();
	    };
	    Vue.hideLoading = function () {
	      self.hide();
	    };
	  }
	};

	/* generated by vue-loader */

/***/ },
/* 226 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[spin,size]\" v-show=\"spining\">\n  <div></div>\n  <div></div>\n  <div></div>\n</div>\n";

/***/ },
/* 227 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 234 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-component.js.map