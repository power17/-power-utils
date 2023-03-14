
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.utils = {}));
})(this, (function (exports) { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function find(list, f) {
    return list.filter(f)[0];
  }
  /**
   * Deep copy the given object considering circular structure.
   * This function caches all nested objects and its copies.
   * If it detects circular structure, use cached copy to avoid infinite loop.
   *
   * @param {*} obj
   * @param {Array<Object>} cache
   * @return {*}
   */
  var deepCopy = function deepCopy(obj) {
    var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    // just return if obj is immutable value
    if (obj === null || _typeof(obj) !== 'object') {
      return obj;
    }

    // if obj is hit, it is in circular structure
    // let b = {a:2};
    //	b.b = b;
    var hit = find(cache, function (c) {
      return c.original === obj;
    });
    if (hit) {
      return hit.copy;
    }
    var copy = Array.isArray(obj) ? [] : {};
    // put the copy into cache at first
    // because we want to refer it in recursive deepCopy
    cache.push({
      original: obj,
      copy: copy
    });
    Object.keys(obj).forEach(function (key) {
      copy[key] = deepCopy(obj[key], cache);
    });
    return copy;
  };

  /*
  * description 冒泡排序
  * @param Array<number> 
  * @return Array<number>
  */
  var bubbleSort = function bubbleSort(arr) {
    if (!Array.isArray(arr)) throw '@power Function bubbleSort:argument much be Array';
    if (arr.length <= 1) return arr;
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      var flag = false;
      for (var j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          flag = true;
        }
      }
      if (!flag) break;
    }
    return arr;
  };
  /*
  * description 插入排序
  * @param Array<number> 
  * @return Array<number>
  */
  var insertSort = function insertSort(arr) {
    if (!Array.isArray(arr)) throw '@power Function insertSort:argument much be Array';
    if (arr.length <= 1) return arr;
    var len = arr.length;
    for (var i = 1; i < len; i++) {
      var insertValue = arr[i];
      var j = [i - 1];
      // 从后面开始比较
      for (; j >= 0; j--) {
        if (arr[j] > insertValue) {
          arr[j + 1] = arr[j];
        } else {
          break;
        }
      }
      // 插入数据
      arr[j + 1] = insertValue;
    }
  };

  var index = {
    deepCopy: deepCopy,
    bubbleSort: bubbleSort,
    insertSort: insertSort
  };

  exports.bubbleSort = bubbleSort;
  exports.deepCopy = deepCopy;
  exports.default = index;
  exports.insertSort = insertSort;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
