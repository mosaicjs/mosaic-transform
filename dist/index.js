(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("d3-scale"));
	else if(typeof define === 'function' && define.amd)
		define(["d3-scale"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("d3-scale")) : factory(root["d3-scale"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    transform : __webpack_require__(1),
	    transformObject : __webpack_require__(3)
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var d3_scale = __webpack_require__(2);

	module.exports = transform;

	function transform(domain, range, transform) {
	    var d, t, r;
	    function f(val) {
	        return r(t(d(val)));
	    }
	    function prepare(n) {
	        var result = [];
	        var len = (n.length || 1);
	        var step = 1 / len;
	        for (var i = 0; i < len; i++) {
	            result.push(step * i);
	        }
	        result[len - 1] = 1;
	        return result;
	    }
	    f.domain = function(_) {
	        if (!_)
	            return domain;
	        domain = _;
	        d = d3_scale.scaleLinear().clamp(true).domain(_).range(prepare(_));
	        return f;
	    }
	    f.range = function(_) {
	        if (!_)
	            return range;
	        range = _;
	        r = d3_scale.scaleLinear().clamp(true).domain(prepare(_)).range(_);
	        return f;
	    }
	    f.transform = function(_) {
	        if (!_)
	            return t;
	        t = _;
	        return f;
	    }
	    domain = domain || [ 0, 1 ];
	    range = range || [ 0, 1 ];
	    transform = transform || function(_) {
	        return +_;
	    };
	    return f.domain(domain).transform(transform).range(range);
	}


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = transformObject;

	function transformObject(obj) {
	    var args = [];
	    for (var i = 1; i < arguments.length; i++) {
	        args.push(arguments[i]);
	    }
	    return doTransform.call(this, obj, args);
	}

	function doTransform(context, obj, args) {
	    var result = {};
	    Object.keys(obj).forEach(function(key) {
	        let
	        value = obj[key];
	        if (typeof value === 'function') {
	            value = value.apply((context || obj), args);
	        }
	        if (typeof value === 'object') {
	            value = doTransform(context, value, args);
	        }
	        if (value) {
	            result[key] = value;
	        }
	    }, this);
	    return result;
	}

/***/ }
/******/ ])
});
;