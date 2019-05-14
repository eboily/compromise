(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.nlp = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
(function (global){
/* efrt trie-compression v2.0.3  github.com/nlp-compromise/efrt  - MIT */
!function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
module.exports={
  "author": "Edouard Boily <edouard.boily@gmail.com>",
  "name": "compromise-quebec",
  "description": "natural language processing adapted for Quebec names",
  "version": "1.0.0",
  "main": "./builds/compromise.js",
  "unpkg": "./builds/compromise.min.js",
  "types": "./compromise.d.ts",
  "repository": {
    "type": "git",
    "url": "git://github.com/eboily/compromise.git"
  },
  "scripts": {
    "test": "tape \"./test/unit/**/*.test.js\" | tap-dancer",
    "test:spec": "tape \"./test/unit/**/*.test.js\" | tap-spec",
    "testb": "TESTENV=prod tape \"./test/unit/**/*.test.js\" | tap-dancer",
    "buildTest": "TESTENV=prod node ./scripts/test.js",
    "test:types": "tsc --project test/types",
    "browserTest": "node ./scripts/browserTest.js",
    "benchmark": "node ./scripts/benchmark.js",
    "build": "node ./scripts/build/index.js",
    "pack": "node ./scripts/pack.js",
    "prepublishOnly": "node ./scripts/prepublish",
    "postpublish": "node ./scripts/postpublish",
    "watch": "amble ./scratch.js",
    "filesize": "node ./scripts/lib/filesize.js",
    "coverage": "node ./scripts/postpublish/coverage.js",
    "lint": "node ./scripts/prepublish/linter.js"
  },
  "files": [
    "builds/",
    "docs/",
    "compromise.d.ts"
  ],
  "dependencies": {
    "efrt-unpack": "2.0.3"
  },
  "devDependencies": {
    "@babel/core": "7.3.4",
    "@babel/preset-env": "7.3.4",
    "amble": "0.0.7",
    "babelify": "10.0.0",
    "babili": "0.1.4",
    "browserify": "16.2.3",
    "chalk": "2.4.2",
    "codecov": "3.2.0",
    "compromise-plugin": "0.0.8",
    "derequire": "2.0.6",
    "nyc": "13.3.0",
    "shelljs": "0.8.3",
    "tap-dancer": "0.1.2",
    "terser": "3.17.0",
    "tape": "4.10.1"
  },
  "license": "MIT"
}

},{}],3:[function(_dereq_,module,exports){
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var tagset = _dereq_('./tags'); // https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color


var c = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  black: '\x1b[30m'
}; //dont use colors on client-side

if (typeof module === 'undefined') {
  Object.keys(c).forEach(function (k) {
    c[k] = '';
  });
} //coerce any input into a string


exports.ensureString = function (input) {
  if (typeof input === 'string') {
    return input;
  } else if (typeof input === 'number') {
    return String(input);
  }

  return '';
}; //coerce any input into a string


exports.ensureObject = function (input) {
  if (_typeof(input) !== 'object') {
    return {};
  }

  if (input === null || input instanceof Array) {
    return {};
  }

  return input;
};

exports.titleCase = function (str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}; //shallow-clone an object


exports.copy = function (o) {
  var o2 = {};
  o = exports.ensureObject(o);
  Object.keys(o).forEach(function (k) {
    o2[k] = o[k];
  });
  return o2;
};

exports.extend = function (obj, a) {
  obj = exports.copy(obj);
  var keys = Object.keys(a);

  for (var i = 0; i < keys.length; i++) {
    obj[keys[i]] = a[keys[i]];
  }

  return obj;
}; //colorization


exports.green = function (str) {
  return c.green + str + c.reset;
};

exports.red = function (str) {
  return c.red + str + c.reset;
};

exports.blue = function (str) {
  return c.blue + str + c.reset;
};

exports.magenta = function (str) {
  return c.magenta + str + c.reset;
};

exports.cyan = function (str) {
  return c.cyan + str + c.reset;
};

exports.yellow = function (str) {
  return c.yellow + str + c.reset;
};

exports.black = function (str) {
  return c.black + str + c.reset;
};

exports.printTag = function (tag) {
  if (tagset[tag]) {
    var color = tagset[tag].color || 'blue';
    return exports[color](tag);
  }

  return tag;
};

exports.printTerm = function (t) {
  var tags = Object.keys(t.tags);

  for (var i = 0; i < tags.length; i++) {
    if (tagset[tags[i]]) {
      var color = tagset[tags[i]].color || 'black';
      return exports[color](t.out('text'));
    }
  }

  return c.reset + t.plaintext + c.reset;
};

exports.leftPad = function (str, width, char) {
  char = char || ' ';
  str = str.toString();

  while (str.length < width) {
    str += char;
  }

  return str;
};

exports.isArray = function (arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
};

exports.isObject = function (obj) {
  return obj === Object(obj);
};

},{"./tags":137}],4:[function(_dereq_,module,exports){
(function (global){
'use strict';

var buildText = _dereq_('./text/build');

var pkg = _dereq_('../package.json');

var log = _dereq_('./log');

var unpack = _dereq_('./world/unpack');

var world = _dereq_('./world');

var w = world.w; //the main function

var nlp = function nlp(str, lex) {
  if (lex) {
    w.plugin({
      words: lex
    });
  }

  var doc = buildText(str, w);
  doc.tagger();
  return doc;
}; //this is used, atleast, for testing the packing


nlp.unpack = function (plugin) {
  return unpack(plugin);
}; //this is handy


nlp.version = pkg.version; //turn-on some debugging

nlp.verbose = function (str) {
  log.enable(str);
}; //same as main method, except with no POS-tagging.


nlp.tokenize = function (str) {
  return buildText(str);
}; //uncompress user-submitted lexicon


nlp.plugin = function (plugin) {
  w.plugin(plugin);
}; //contribute words to the lexicon


nlp.addWords = function (lex) {
  w.plugin({
    words: lex
  });
};

nlp.addTags = function (tags) {
  w.plugin({
    tags: tags
  });
};

nlp.addRegex = function (regex) {
  w.plugin({
    regex: regex
  });
};

nlp.addPatterns = function (patterns) {
  w.plugin({
    patterns: patterns
  });
};

nlp.addPlurals = function (plurals) {
  w.plugin({
    plurals: plurals
  });
};

nlp.addConjugations = function (conj) {
  w.plugin({
    conjugations: conj
  });
}; //make a weird, half-copy of this method


nlp.clone = function () {
  var w2 = world.reBuild(); //this is weird, but it's okay

  var nlp2 = function nlp2(str, lex) {
    if (lex) {
      w2.plugin({
        words: lex
      });
    }

    var doc = buildText(str, w2);
    doc.tagger();
    return doc;
  };

  nlp2.tokenize = nlp.tokenize;
  nlp2.verbose = nlp.verbose;
  nlp2.version = nlp.version;
  ['Words', 'Tags', 'Regex', 'Patterns', 'Plurals', 'Conjugations'].forEach(function (fn) {
    nlp2['add' + fn] = function (obj) {
      w2['add' + fn](obj);
    };
  });
  return nlp2;
}; //and then all-the-exports...


if (typeof self !== 'undefined') {
  self.nlp = nlp; // Web Worker
} else if (typeof window !== 'undefined') {
  window.nlp = nlp; // Browser
} else if (typeof global !== 'undefined') {
  global.nlp = nlp; // NodeJS
} //don't forget amd!


if (typeof define === 'function' && define.amd) {
  define(nlp);
} //then for some reason, do this too!


if (typeof module !== 'undefined') {
  module.exports = nlp;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../package.json":2,"./log":6,"./text/build":190,"./world":215,"./world/unpack":223}],5:[function(_dereq_,module,exports){
'use strict';

var fns = _dereq_('../fns'); // const colors = {
//   'Person': '#6393b9',
//   'Pronoun': '#81acce',
//   'Noun': 'steelblue',
//   'Verb': 'palevioletred',
//   'Adverb': '#f39c73',
//   'Adjective': '#b3d3c6',
//   'Determiner': '#d3c0b3',
//   'Preposition': '#9794a8',
//   'Conjunction': '#c8c9cf',
//   'Value': 'palegoldenrod',
//   'Expression': '#b3d3c6'
// };


var tag = function tag(t, pos, reason) {
  var title = t.normal || '[' + t.silent_term + ']';
  title = fns.leftPad('\'' + title + '\'', 12);
  title += '  ->   ' + pos;
  title += fns.leftPad(reason || '', 15);
  console.log('%c' + title, ' color: #a2c99c');
};

var untag = function untag(t, pos, reason) {
  var title = t.normal || '[' + t.silent_term + ']';
  title = fns.leftPad('\'' + title + '\'', 12);
  title += '  ~*   ' + pos;
  title += '    ' + (reason || '');
  console.log('%c' + title, ' color: #b66a6a');
};

module.exports = {
  tag: tag,
  untag: untag
};

},{"../fns":3}],6:[function(_dereq_,module,exports){
'use strict';

var client = _dereq_('./client');

var server = _dereq_('./server');

var _enable = false;
module.exports = {
  enable: function enable(str) {
    if (str === undefined) {
      str = true;
    }

    _enable = str;
  },
  tag: function tag(t, pos, reason) {
    if (_enable === true || _enable === 'tagger') {
      if (typeof window !== 'undefined') {
        client.tag(t, pos, reason);
      } else {
        server.tag(t, pos, reason);
      }
    }
  },
  unTag: function unTag(t, pos, reason) {
    if (_enable === true || _enable === 'tagger') {
      if (typeof window !== 'undefined') {
        client.untag(t, pos, reason);
      } else {
        server.untag(t, pos, reason);
      }
    }
  }
};

},{"./client":5,"./server":7}],7:[function(_dereq_,module,exports){
'use strict';

var fns = _dereq_('../fns'); //use weird bash escape things for some colors


var tag = function tag(t, pos, reason) {
  var title = t.normal || '[' + t.silent_term + ']';
  title = fns.yellow(title);
  title = fns.leftPad('\'' + title + '\'', 20);
  title += '  ->   ' + fns.printTag(pos);
  title = fns.leftPad(title, 54);
  console.log('       ' + title + '(' + fns.cyan(reason || '') + ')');
};

var untag = function untag(t, pos, reason) {
  var title = '-' + t.normal + '-';
  title = fns.red(title);
  title = fns.leftPad(title, 20);
  title += '  ~*   ' + fns.red(pos);
  title = fns.leftPad(title, 54);
  console.log('       ' + title + '(' + fns.red(reason || '') + ')');
};

module.exports = {
  tag: tag,
  untag: untag
};

},{"../fns":3}],8:[function(_dereq_,module,exports){
"use strict";

module.exports = {
  fns: _dereq_('./fns'),
  Terms: _dereq_('./terms')
};

},{"./fns":3,"./terms":165}],9:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('../../text'); //the Acronym() subset class


var methods = {
  stripPeriods: function stripPeriods() {
    this.list.forEach(function (ts) {
      ts.terms.forEach(function (t) {
        var chars = t._text.split('.');

        if (chars.length > 2) {
          t.text = chars.join('');
        }
      });
    });
    return this;
  },
  addPeriods: function addPeriods() {
    this.list.forEach(function (ts) {
      ts.terms.forEach(function (t) {
        var chars = t._text.split('.');

        if (chars.length > 2) {
          var str = t._text.replace(/\./g, '');

          t.text = str.split('').join('.') + '.';
        }
      });
    });
    return this;
  },
  data: function data() {
    return this.terms().list.map(function (ts) {
      var t = ts.terms[0];
      var parsed = t.text.toUpperCase().replace(/\./g, '').split('');
      return {
        periods: parsed.join('.'),
        normal: parsed.join(''),
        text: t.text
      };
    });
  }
};

var find = function find(r, n) {
  r = r.match('#Acronym');

  if (typeof n === 'number') {
    r = r.get(n);
  }

  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192}],10:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('../../text');

var fns = _dereq_('./methods'); //the Adjectives() subset class
//is this an adjective we want to goof-around with?


var shouldConvert = function shouldConvert(str, words) {
  if (!str || str.length <= 3) {
    return false;
  }

  if (words[str] === 'Comparable') {
    return true;
  }

  if (words[str] === 'Adjective') {
    return false;
  } //has space


  if (str.indexOf(' ') !== -1) {
    return false;
  }

  return true;
};

var methods = {
  data: function data() {
    var _this = this;

    return this.list.map(function (ts) {
      var str = ts.out('normal');
      var obj = {
        normal: str,
        text: _this.out('text'),
        comparative: 'more ' + str,
        superlative: 'most ' + str,
        adverbForm: null,
        nounForm: null // verbForm: null

      };

      if (shouldConvert(str, _this.world().words) === true) {
        obj.comparative = fns.toComparative(str) || obj.comparative;
        obj.superlative = fns.toSuperlative(str) || obj.superlative;
        obj.adverbForm = fns.toAdverb(str);
        obj.nounForm = fns.toNoun(str); // obj.verbForm = fns.toVerb(str);
      }

      return obj;
    });
  }
};

var find = function find(r, n) {
  r = r.match('#Adjective');

  if (typeof n === 'number') {
    r = r.get(n);
  }

  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./methods":11}],11:[function(_dereq_,module,exports){
'use strict';

module.exports = {
  toNoun: _dereq_('./toNoun'),
  toSuperlative: _dereq_('./toSuperlative'),
  toComparative: _dereq_('./toComparative'),
  toAdverb: _dereq_('./toAdverb'),
  toVerb: _dereq_('./toVerb')
};

},{"./toAdverb":12,"./toComparative":13,"./toNoun":14,"./toSuperlative":15,"./toVerb":16}],12:[function(_dereq_,module,exports){
//turn 'quick' into 'quickly'
'use strict';

var not_matches = [/airs$/, /ll$/, /ee.$/, /ile$/, /y$/];

var irregulars = _dereq_('../../../world/more-data/irregularAdjectives').toAdverb;

var transforms = [{
  reg: /al$/i,
  repl: 'ally'
}, {
  reg: /ly$/i,
  repl: 'ly'
}, {
  reg: /(.{3})y$/i,
  repl: '$1ily'
}, {
  reg: /que$/i,
  repl: 'quely'
}, {
  reg: /ue$/i,
  repl: 'uly'
}, {
  reg: /ic$/i,
  repl: 'ically'
}, {
  reg: /ble$/i,
  repl: 'bly'
}, {
  reg: /l$/i,
  repl: 'ly'
}];

var adj_to_adv = function adj_to_adv(str) {
  if (irregulars.hasOwnProperty(str) === true) {
    return irregulars[str];
  }

  for (var i = 0; i < not_matches.length; i++) {
    if (not_matches[i].test(str) === true) {
      return null;
    }
  }

  for (var _i = 0; _i < transforms.length; _i++) {
    if (transforms[_i].reg.test(str) === true) {
      return str.replace(transforms[_i].reg, transforms[_i].repl);
    }
  }

  return str + 'ly';
}; // console.log(adj_to_adv('good'));


module.exports = adj_to_adv;

},{"../../../world/more-data/irregularAdjectives":218}],13:[function(_dereq_,module,exports){
//turn 'quick' into 'quickly'
'use strict';

var do_rules = [/ght$/, /nge$/, /ough$/, /ain$/, /uel$/, /[au]ll$/, /ow$/, /old$/, /oud$/, /e[ae]p$/];
var dont_rules = [/ary$/, /ous$/];

var irregulars = _dereq_('../../../world/more-data/irregularAdjectives').toComparative;

var transforms = [{
  reg: /y$/i,
  repl: 'ier'
}, {
  reg: /([aeiou])t$/i,
  repl: '$1tter'
}, {
  reg: /([aeou])de$/i,
  repl: '$1der'
}, {
  reg: /nge$/i,
  repl: 'nger'
}];

var to_comparative = function to_comparative(str) {
  //known-irregulars
  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  } //known-transforms


  for (var i = 0; i < transforms.length; i++) {
    if (transforms[i].reg.test(str) === true) {
      return str.replace(transforms[i].reg, transforms[i].repl);
    }
  } //dont-patterns


  for (var _i = 0; _i < dont_rules.length; _i++) {
    if (dont_rules[_i].test(str) === true) {
      return null;
    }
  } //do-patterns


  for (var _i2 = 0; _i2 < do_rules.length; _i2++) {
    if (do_rules[_i2].test(str) === true) {
      return str + 'er';
    }
  } //easy-one


  if (/e$/.test(str) === true) {
    return str + 'r';
  }

  return str + 'er'; // return null;
}; // console.log(to_comparative('big'));


module.exports = to_comparative;

},{"../../../world/more-data/irregularAdjectives":218}],14:[function(_dereq_,module,exports){
'use strict'; //convert 'cute' to 'cuteness'

var irregulars = {
  clean: 'cleanliness',
  naivety: 'naivety',
  hurt: 'hurt'
};
var transforms = [{
  reg: /y$/,
  repl: 'iness'
}, {
  reg: /le$/,
  repl: 'ility'
}, {
  reg: /ial$/,
  repl: 'y'
}, {
  reg: /al$/,
  repl: 'ality'
}, {
  reg: /ting$/,
  repl: 'ting'
}, {
  reg: /ring$/,
  repl: 'ring'
}, {
  reg: /bing$/,
  repl: 'bingness'
}, {
  reg: /sing$/,
  repl: 'se'
}, {
  reg: /ing$/,
  repl: 'ment'
}, {
  reg: /ess$/,
  repl: 'essness'
}, {
  reg: /ous$/,
  repl: 'ousness'
}];

var to_noun = function to_noun(w) {
  if (irregulars.hasOwnProperty(w)) {
    return irregulars[w];
  }

  var lastChar = w.charAt(w.length - 1);

  if (lastChar === 'w' || lastChar === 's') {
    return null;
  }

  for (var i = 0; i < transforms.length; i++) {
    if (transforms[i].reg.test(w) === true) {
      return w.replace(transforms[i].reg, transforms[i].repl);
    }
  }

  return w + 'ness';
};

module.exports = to_noun; // console.log(to_noun("great"))

},{}],15:[function(_dereq_,module,exports){
//turn 'quick' into 'quickest'
'use strict';

var do_rules = [/ght$/, /nge$/, /ough$/, /ain$/, /uel$/, /[au]ll$/, /ow$/, /oud$/, /...p$/];
var dont_rules = [/ary$/];

var irregulars = _dereq_('../../../world/more-data/irregularAdjectives').toSuperlative;

var transforms = [{
  reg: /y$/i,
  repl: 'iest'
}, {
  reg: /([aeiou])t$/i,
  repl: '$1ttest'
}, {
  reg: /([aeou])de$/i,
  repl: '$1dest'
}, {
  reg: /nge$/i,
  repl: 'ngest'
}, {
  reg: /([aeiou])te$/i,
  repl: '$1test'
}];

var to_superlative = function to_superlative(str) {
  //irregulars
  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  } //known transforms


  for (var i = 0; i < transforms.length; i++) {
    if (transforms[i].reg.test(str)) {
      return str.replace(transforms[i].reg, transforms[i].repl);
    }
  } //dont-rules


  for (var _i = 0; _i < dont_rules.length; _i++) {
    if (dont_rules[_i].test(str) === true) {
      return null;
    }
  } //do-rules


  for (var _i2 = 0; _i2 < do_rules.length; _i2++) {
    if (do_rules[_i2].test(str) === true) {
      if (str.charAt(str.length - 1) === 'e') {
        return str + 'st';
      }

      return str + 'est';
    }
  }

  return str + 'est';
};

module.exports = to_superlative; // console.log(to_superlative("great"))

},{"../../../world/more-data/irregularAdjectives":218}],16:[function(_dereq_,module,exports){
'use strict'; //turn an adjective like 'soft' into a verb like 'soften'
//(don't do words like 'green' -> 'greenen')

var irregulars = {
  red: 'redden',
  sad: 'sadden',
  fat: 'fatten'
};

var toVerb = function toVerb(str) {
  if (irregulars.hasOwnProperty(str) === true) {
    return irregulars[str];
  }

  if (/e$/.test(str) === true) {
    return str + 'n';
  }

  return str + 'en';
};

module.exports = toVerb;

},{}],17:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('../../text');

var toAdjective = _dereq_('./toAdjective'); //the () subset class


var methods = {
  data: function data() {
    return this.terms().list.map(function (ts) {
      var t = ts.terms[0];
      return {
        adjectiveForm: toAdjective(t.normal),
        normal: t.normal,
        text: t.text
      };
    });
  }
};

var find = function find(r, n) {
  r = r.splitAfter('#Comma');
  r = r.match('#Adverb+');

  if (typeof n === 'number') {
    r = r.get(n);
  }

  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./toAdjective":18}],18:[function(_dereq_,module,exports){
//turns 'quickly' into 'quick'
'use strict';

var irregulars = {
  'idly': 'idle',
  'sporadically': 'sporadic',
  'basically': 'basic',
  'grammatically': 'grammatical',
  'alphabetically': 'alphabetical',
  'economically': 'economical',
  'conically': 'conical',
  'politically': 'political',
  'vertically': 'vertical',
  'practically': 'practical',
  'theoretically': 'theoretical',
  'critically': 'critical',
  'fantastically': 'fantastic',
  'mystically': 'mystical',
  'pornographically': 'pornographic',
  'fully': 'full',
  'jolly': 'jolly',
  'wholly': 'whole'
};
var transforms = [{
  'reg': /bly$/i,
  'repl': 'ble'
}, {
  'reg': /gically$/i,
  'repl': 'gical'
}, {
  'reg': /([rsdh])ically$/i,
  'repl': '$1ical'
}, {
  'reg': /ically$/i,
  'repl': 'ic'
}, {
  'reg': /uly$/i,
  'repl': 'ue'
}, {
  'reg': /ily$/i,
  'repl': 'y'
}, {
  'reg': /(.{3})ly$/i,
  'repl': '$1'
}];

var toAdjective = function toAdjective(str) {
  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  }

  for (var i = 0; i < transforms.length; i++) {
    if (transforms[i].reg.test(str) === true) {
      return str.replace(transforms[i].reg, transforms[i].repl);
    }
  }

  return str;
}; // console.log(toAdjective('quickly'))


module.exports = toAdjective;

},{}],19:[function(_dereq_,module,exports){
'use strict'; //the plumbing to turn two words into a contraction

var combine = function combine(a, b) {
  b.whitespace.after = a.whitespace.after;
  a.whitespace.after = '';
  b.whitespace.before = '';
  a.silent_term = a.text;
  b.silent_term = b.text;
  b.text = '';
  a.tag('Contraction', 'new-contraction');
  b.tag('Contraction', 'new-contraction');
};

var irregulars = {
  can: 'can\'t',
  will: 'won\'t'
};

var contract = function contract(ts) {
  if (ts.expanded === false || ts.match('#Contraction').found) {
    return ts;
  } //he is -> he's


  ts.match('(#Noun|#QuestionWord) is').list.forEach(function (ls) {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'s';
    ls.contracted = true;
  }); //he did -> he'd

  ts.match('#PronNoun did').list.forEach(function (ls) {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'d';
    ls.contracted = true;
  }); //how do -> how'd

  ts.match('#QuestionWord (did|do)').list.forEach(function (ls) {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'d';
    ls.contracted = true;
  }); //he would -> he'd

  ts.match('#Noun (could|would)').list.forEach(function (ls) {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'d';
    ls.contracted = true;
  }); //they are -> they're

  ts.match('(they|we|you) are').list.forEach(function (ls) {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'re';
    ls.contracted = true;
  }); //i am -> i'm

  ts.match('i am').list.forEach(function (ls) {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'m';
    ls.contracted = true;
  }); //they will -> they'll

  ts.match('(#Noun|#QuestionWord) will').list.forEach(function (ls) {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'ll';
    ls.contracted = true;
  }); //they have -> they've

  ts.match('(they|we|you|i) have').list.forEach(function (ls) {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'ve';
    ls.contracted = true;
  }); //is not -> isn't

  ts.match('(#Copula|#Modal|do|does|have|has|can|will) not').list.forEach(function (ls) {
    combine(ls.terms[0], ls.terms[1]); //can't, won't

    if (irregulars.hasOwnProperty(ls.terms[0].text) === true) {
      ls.terms[0].text = irregulars[ls.terms[0].text];
    } else {
      ls.terms[0].text += 'n\'t';
    }

    ls.contracted = true;
  });
  return ts;
};

module.exports = contract;

},{}],20:[function(_dereq_,module,exports){
'use strict';

var Terms = _dereq_('../../paths').Terms;

var contract = _dereq_('./contract');

var expand = _dereq_('./expand');

var ContractionCl = function ContractionCl(arr, world, original) {
  Terms.call(this, arr, world, original);
}; //Inherit properties


ContractionCl.prototype = Object.create(Terms.prototype);

ContractionCl.prototype.data = function () {
  var expanded = expand(this.clone());
  var contracted = contract(this.clone());
  return {
    text: this.out('text'),
    normal: this.out('normal'),
    expanded: {
      normal: expanded.out('normal'),
      text: expanded.out('text')
    },
    contracted: {
      normal: contracted.out('normal'),
      text: contracted.out('text')
    },
    isContracted: Boolean(this.contracted)
  };
};

ContractionCl.prototype.expand = function () {
  return expand(this);
};

ContractionCl.prototype.contract = function () {
  return contract(this);
};

module.exports = ContractionCl;

},{"../../paths":8,"./contract":19,"./expand":21}],21:[function(_dereq_,module,exports){
'use strict'; //turn `i'd` into `i would`

var expand = function expand(ts) {
  if (ts.contracted === false) {
    return ts;
  }

  ts.terms.forEach(function (t) {
    if (t.silent_term) {
      //this term also needs a space now too
      if (!t.text) {
        t.whitespace.before = ' ';
      }

      t._text = t.silent_term; //handle (some) capitalization

      if (t.tags.TitleCase) {
        t.toTitleCase();
      }

      t.normalize();
      t.silent_term = null;
      t.unTag('Contraction', 'expanded');
    }
  });
  return ts;
};

module.exports = expand;

},{}],22:[function(_dereq_,module,exports){
'use strict'; //find contractable, expanded-contractions

var find = function find(r) {
  var remain = r.not('#Contraction');
  var m = remain.match('(#Noun|#QuestionWord) (#Copula|did|do|have|had|could|would|will)');
  m.concat(remain.match('(they|we|you|i) have'));
  m.concat(remain.match('i am'));
  m.concat(remain.match('(#Copula|#Modal|do|does|have|has|can|will) not'));
  m.list.forEach(function (ts) {
    ts.expanded = true;
  });
  return m;
};

module.exports = find;

},{}],23:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('../../text');

var ContractionCl = _dereq_('./contraction');

var findPossible = _dereq_('./findPossible'); //the Contractions() subset class


var methods = {
  contract: function contract() {
    this.list.forEach(function (ts) {
      return ts.contract();
    });
    return this;
  },
  expand: function expand() {
    this.list.forEach(function (ts) {
      return ts.expand();
    });
    return this;
  },
  contracted: function contracted() {
    this.list = this.list.filter(function (ts) {
      return ts.contracted;
    });
    return this;
  },
  expanded: function expanded() {
    this.list = this.list.filter(function (ts) {
      return !ts.contracted;
    });
    return this;
  }
};

var find = function find(r, n) {
  //find currently-contracted
  var found = r.match('#Contraction #Contraction #Contraction?');
  found.list = found.list.map(function (ts) {
    var c = new ContractionCl(ts.terms, ts.world, ts.refText, ts.refTerms);
    c.contracted = true;
    return c;
  }); //find currently-expanded

  var expanded = findPossible(r);
  expanded.list.forEach(function (ts) {
    var c = new ContractionCl(ts.terms, ts.world, ts.refText, ts.refTerms);
    c.contracted = false;
    found.list.push(c);
  });
  found.sort('chronological'); //get nth element

  if (typeof n === 'number') {
    found = found.get(n);
  }

  return found;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./contraction":20,"./findPossible":22}],24:[function(_dereq_,module,exports){
'use strict';

var Terms = _dereq_('../../paths').Terms;

var parseDate = _dereq_('./parseDate');

var _Date = function _Date(arr, world, refText) {
  Terms.call(this, arr, world, refText);
  this.month = this.match('#Month');
}; //Inherit properties


_Date.prototype = Object.create(Terms.prototype);

_Date.prototype.data = function () {
  return {
    text: this.out('text'),
    normal: this.out('normal'),
    date: parseDate(this)
  };
};

module.exports = _Date;

},{"../../paths":8,"./parseDate":28}],25:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('../../text');

var Date = _dereq_('./date');

var weekdays = _dereq_('./weekday');

var months = _dereq_('./month'); //the Dates() subset class


var methods = {
  toShortForm: function toShortForm() {
    this.match('#Month').terms().list.forEach(function (ts) {
      var t = ts.terms[0];
      months.toShortForm(t);
    });
    this.match('#WeekDay').terms().list.forEach(function (ts) {
      var t = ts.terms[0];
      weekdays.toShortForm(t);
    });
    return this;
  },
  toLongForm: function toLongForm() {
    this.match('#Month').terms().list.forEach(function (ts) {
      var t = ts.terms[0];
      months.toLongForm(t);
    });
    this.match('#WeekDay').terms().list.forEach(function (ts) {
      var t = ts.terms[0];
      weekdays.toLongForm(t);
    });
    return this;
  }
};

var find = function find(r, n) {
  var dates = r.match('#Date+');

  if (typeof n === 'number') {
    dates = dates.get(n);
  }

  dates.list = dates.list.map(function (ts) {
    return new Date(ts.terms, ts.world, ts.refText, ts.refTerms);
  });
  return dates;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./date":24,"./month":27,"./weekday":31}],26:[function(_dereq_,module,exports){
"use strict";

//follow the javascript scheme
//january is 0
exports.longMonths = {
  'january': 0,
  'february': 1,
  'march': 2,
  'april': 3,
  'may': 4,
  'june': 5,
  'july': 6,
  'august': 7,
  'september': 8,
  'october': 9,
  'november': 10,
  'december': 11
};
exports.shortMonths = {
  'jan': 0,
  'feb': 1,
  'mar': 2,
  'apr': 3,
  'may': 4,
  'jun': 5,
  'jul': 6,
  'aug': 7,
  'sep': 8,
  'oct': 9,
  'nov': 10,
  'dec': 11,
  //extra ones
  'febr': 1,
  'sept': 8
};

},{}],27:[function(_dereq_,module,exports){
'use strict';

var data = _dereq_('./data');

var shortMonths = data.shortMonths;
var longMonths = data.longMonths;

var titleCase = function titleCase(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
};

module.exports = {
  index: function index(t) {
    if (t.tags.Month) {
      if (longMonths[t.normal] !== undefined) {
        return longMonths[t.normal];
      }

      if (shortMonths[t.normal] !== undefined) {
        return shortMonths[t.normal];
      }
    }

    return null;
  },
  toShortForm: function toShortForm(t) {
    if (t.tags.Month !== undefined) {
      if (longMonths[t.normal] !== undefined) {
        var shorten = Object.keys(shortMonths);
        var punct = t.getPunctuation() || '';
        t.text = shorten[longMonths[t.normal]] + punct;

        if (t.tags.TitleCase) {
          t.text = titleCase(t.text);
        }
      }
    }

    t.dirty = true;
    return t;
  },
  toLongForm: function toLongForm(t) {
    if (t.tags.Month !== undefined) {
      if (shortMonths[t.normal] !== undefined) {
        var longer = Object.keys(longMonths);
        var punct = t.getPunctuation() || '';
        t.text = longer[shortMonths[t.normal]] + punct;

        if (t.tags.TitleCase) {
          t.text = titleCase(t.text);
        }
      }
    }

    t.dirty = true;
    return t;
  }
};

},{"./data":26}],28:[function(_dereq_,module,exports){
'use strict';

var parseTime = _dereq_('./parseTime');

var weekdays = _dereq_('./weekday');

var months = _dereq_('./month'); //a hugely-conservative and incomplete first-pass for parsing written-dates
//validate a day-of-month


var isDate = function isDate(num) {
  if (num && num < 31 && num > 0) {
    return true;
  }

  return false;
}; //please change this in one thousand years


var isYear = function isYear(num) {
  if (num && num > 1000 && num < 3000) {
    return true;
  }

  return false;
}; //


var parseDate = function parseDate(r) {
  var result = {
    month: null,
    date: null,
    weekday: null,
    year: null,
    named: null,
    time: null
  };
  var m = r.match('(#Holiday|today|tomorrow|yesterday)');

  if (m.found) {
    result.named = m.out('normal');
  }

  m = r.match('#Month');

  if (m.found) {
    result.month = months.index(m.list[0].terms[0]);
  }

  m = r.match('#WeekDay');

  if (m.found) {
    result.weekday = weekdays.index(m.list[0].terms[0]);
  }

  m = r.match('#Time');

  if (m.found) {
    result.time = parseTime(r);
    r.not('#Time'); //unsure
  } //january fifth 1992


  m = r.match('#Month #Value #Year');

  if (m.found) {
    var numbers = m.values().numbers();

    if (isDate(numbers[0])) {
      result.date = numbers[0];
    }

    var year = parseInt(r.match('#Year').out('normal'), 10);

    if (isYear(year)) {
      result.year = year;
    }
  }

  if (!m.found) {
    //january fifth,  january 1992
    m = r.match('#Month #Value');

    if (m.found) {
      var _numbers = m.values().numbers();

      var num = _numbers[0];

      if (isDate(num)) {
        result.date = num;
      }
    } //january 1992


    m = r.match('#Month #Year');

    if (m.found) {
      var _num = parseInt(r.match('#Year').out('normal'), 10);

      if (isYear(_num)) {
        result.year = _num;
      }
    }
  } //fifth of january


  m = r.match('#Value of #Month');

  if (m.found) {
    var _num2 = m.values().numbers()[0];

    if (isDate(_num2)) {
      result.date = _num2;
    }
  }

  return result;
};

module.exports = parseDate;

},{"./month":27,"./parseTime":29,"./weekday":31}],29:[function(_dereq_,module,exports){
'use strict';

var ampm = /([12]?[0-9]) ?(am|pm)/i;
var hourMin = /([12]?[0-9]):([0-9][0-9]) ?(am|pm)?/i; //

var isHour = function isHour(num) {
  if (num && num > 0 && num < 25) {
    return true;
  }

  return false;
};

var isMinute = function isMinute(num) {
  if (num && num > 0 && num < 60) {
    return true;
  }

  return false;
};

var parseTime = function parseTime(r) {
  var result = {
    logic: null,
    hour: null,
    minute: null,
    second: null,
    timezone: null
  };
  var logic = r.match('(by|before|for|during|at|until|after) #Time').firstTerm();

  if (logic.found) {
    result.logic = logic.out('normal');
  }

  var time = r.match('#Time');
  time.terms().list.forEach(function (ts) {
    var t = ts.terms[0]; //3pm

    var m = t.text.match(ampm);

    if (m !== null) {
      result.hour = parseInt(m[1], 10);

      if (m[2] === 'pm') {
        result.hour += 12;
      }

      if (isHour(result.hour) === false) {
        result.hour = null;
      }
    } //3:15


    m = t.text.match(hourMin);

    if (m !== null) {
      result.hour = parseInt(m[1], 10);
      result.minute = parseInt(m[2], 10);

      if (!isMinute(result.minute)) {
        result.minute = null;
      }

      if (m[3] === 'pm') {
        result.hour += 12;
      }

      if (isHour(result.hour) === false) {
        result.hour = null;
      }
    }
  });
  return result;
};

module.exports = parseTime;

},{}],30:[function(_dereq_,module,exports){
"use strict";

//follow the javascript scheme
//sunday is 0
exports.longDays = {
  'sunday': 0,
  'monday': 1,
  'tuesday': 2,
  'wednesday': 3,
  'thursday': 4,
  'friday': 5,
  'saturday': 6
};
exports.shortDays = {
  'sun': 0,
  'mon': 1,
  'tues': 2,
  'wed': 3,
  'weds': 3,
  'thurs': 4,
  'fri': 5,
  'sat': 6
};

},{}],31:[function(_dereq_,module,exports){
'use strict';

var data = _dereq_('./data');

var shortDays = data.shortDays;
var longDays = data.longDays;
module.exports = {
  index: function index(t) {
    if (t.tags.WeekDay) {
      if (longDays[t.normal] !== undefined) {
        return longDays[t.normal];
      }

      if (shortDays[t.normal] !== undefined) {
        return shortDays[t.normal];
      }
    }

    return null;
  },
  toShortForm: function toShortForm(t) {
    if (t.tags.WeekDay) {
      if (longDays[t.normal] !== undefined) {
        var shorten = Object.keys(shortDays);
        t.text = shorten[longDays[t.normal]];
      }
    }

    return t;
  },
  toLongForm: function toLongForm(t) {
    if (t.tags.WeekDay) {
      if (shortDays[t.normal] !== undefined) {
        var longer = Object.keys(longDays);
        t.text = longer[shortDays[t.normal]];
      }
    }

    return t;
  }
};

},{"./data":30}],32:[function(_dereq_,module,exports){
'use strict';

var Ngrams = _dereq_('./index');

var getGrams = _dereq_('./getGrams'); //like an n-gram, but only the endings of matches


var EndGrams = function EndGrams(arr, world, original) {
  Ngrams.call(this, arr, world, original);
}; //Inherit properties


EndGrams.prototype = Object.create(Ngrams.prototype); //like an n-gram, but only the startings of matches

EndGrams.find = function (r, n, size) {
  var opts = {
    size: [1, 2, 3, 4],
    edge: 'end'
  }; //only look for bigrams, for example

  if (size) {
    opts.size = [size];
  } //fetch them


  var arr = getGrams(r, opts);
  r = new EndGrams(arr); //default sort

  r.sort(); //grab top one, or something

  if (typeof n === 'number') {
    r = r.get(n);
  }

  return r;
};

module.exports = EndGrams;

},{"./getGrams":33,"./index":35}],33:[function(_dereq_,module,exports){
'use strict';

var Gram = _dereq_('./gram'); //strip contractions - remove '' term for "it's"


var noEmpty = function noEmpty(fts) {
  return fts = fts.terms.filter(function (t) {
    return t._text !== '';
  });
}; //do all grams of one size, on one termList


var getGrams = function getGrams(fts, n) {
  var terms = noEmpty(fts);

  if (terms.length < n) {
    return [];
  }

  var arr = [];

  for (var i = 0; i < terms.length - n + 1; i++) {
    var gram = new Gram(terms.slice(i, i + n));
    arr.push(gram);
  }

  return arr;
}; //left-sided grams


var startGram = function startGram(fts, n) {
  var terms = noEmpty(fts);

  if (terms.length < n) {
    return [];
  }

  var arr = [new Gram(terms.slice(0, n))];
  return arr;
}; //right-sided grams


var endGram = function endGram(fts, n) {
  var terms = noEmpty(fts);

  if (terms.length < n) {
    return [];
  }

  var arr = [new Gram(terms.slice(terms.length - n, terms.length))];
  return arr;
}; //ngrams are consecutive terms of a specific size


var buildGrams = function buildGrams(r, options) {
  options = options || {};
  options.size = options.size || [1, 2, 3];

  if (typeof options.size === 'number') {
    options.size = [options.size];
  }

  var obj = {}; //collect and count all grams

  options.size.forEach(function (size) {
    r.list.forEach(function (ts) {
      var newGrams = [];

      if (options.edge === 'start') {
        newGrams = startGram(ts, size);
      } else if (options.edge === 'end') {
        newGrams = endGram(ts, size);
      } else {
        newGrams = getGrams(ts, size);
      }

      newGrams.forEach(function (g) {
        if (obj.hasOwnProperty(g.key)) {
          obj[g.key].inc();
        } else {
          obj[g.key] = g;
        }
      });
    });
  }); //flatten to an array

  var arr = Object.keys(obj).map(function (k) {
    return obj[k];
  });
  return arr;
};

module.exports = buildGrams;

},{"./gram":34}],34:[function(_dereq_,module,exports){
'use strict';

var Terms = _dereq_('../../paths').Terms; //this is one-or-more terms together, sorted by frequency


var Gram = function Gram(arr, world, original) {
  Terms.call(this, arr, world, original); //string to sort/uniq by

  this.key = this.out('normal'); //bigram/trigram/etc

  this.size = arr.length; //number of occurances

  this.count = 1;
}; //Inherit properties


Gram.prototype = Object.create(Terms.prototype);

Gram.prototype.inc = function () {
  this.count += 1;
};

module.exports = Gram;

},{"../../paths":8}],35:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('../../text');

var getGrams = _dereq_('./getGrams');

var _sort = function sort(r) {
  r.list = r.list.sort(function (a, b) {
    if (a.count > b.count) {
      return -1;
    } //(tie-braker)


    if (a.count === b.count && (a.size > b.size || a.key.length > b.key.length)) {
      return -1;
    }

    return 1;
  });
  return r;
}; //the Ngrams() subset class


var methods = {
  data: function data() {
    return this.list.map(function (ts) {
      return {
        normal: ts.out('normal'),
        count: ts.count,
        size: ts.size
      };
    });
  },
  unigrams: function unigrams() {
    this.list = this.list.filter(function (g) {
      return g.size === 1;
    });
    return this;
  },
  bigrams: function bigrams() {
    this.list = this.list.filter(function (g) {
      return g.size === 2;
    });
    return this;
  },
  trigrams: function trigrams() {
    this.list = this.list.filter(function (g) {
      return g.size === 3;
    });
    return this;
  },
  //default sort the ngrams
  sort: function sort() {
    return _sort(this);
  }
};

var find = function find(r, obj) {
  var sizes = []; //support .ngrams(3), for compat

  if (typeof obj === 'number') {
    obj = {
      n: obj
    };
  }

  obj = obj || {};
  var max = obj.max || 4;

  for (var i = 1; i <= max; i++) {
    sizes.push(i);
  } //only look for bigrams, for example


  if (obj.size) {
    sizes = [obj.size];
  }

  var opts = {
    size: sizes
  }; //fetch them

  var arr = getGrams(r, opts);
  r = new Text(arr); //default sort

  r = _sort(r); //grab top one, or something

  if (obj.n !== undefined) {
    r = r.get(obj.n);
  }

  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./getGrams":33}],36:[function(_dereq_,module,exports){
'use strict';

var Ngrams = _dereq_('./index');

var getGrams = _dereq_('./getGrams');

var StartGrams = function StartGrams(arr, world, original) {
  Ngrams.call(this, arr, world, original);
}; //Inherit properties


StartGrams.prototype = Object.create(Ngrams.prototype); //like an n-gram, but only the startings of matches

StartGrams.find = function (r, n, size) {
  var opts = {
    size: [1, 2, 3, 4],
    edge: 'start'
  }; //only look for bigrams, for example

  if (size) {
    opts.size = [size];
  } //fetch them


  var arr = getGrams(r, opts);
  r = new StartGrams(arr); //default sort

  r.sort(); //grab top one, or something

  if (typeof n === 'number') {
    r = r.get(n);
  }

  return r;
};

module.exports = StartGrams;

},{"./getGrams":33,"./index":35}],37:[function(_dereq_,module,exports){
'use strict'; //certain words can't be plural, like 'peace'

var hasPlural = function hasPlural(t) {
  //end quick
  if (!t.tags.Noun) {
    return false;
  }

  if (t.tags.Plural) {
    return true;
  } //is it potentially plural?


  var noPlural = ['Pronoun', 'Place', 'Value', 'Person', 'Month', 'WeekDay', 'RelativeDay', 'Holiday'];

  for (var i = 0; i < noPlural.length; i++) {
    if (t.tags[noPlural[i]]) {
      return false;
    }
  } //terms known as un-inflectable, like 'peace'


  if (t.tags.Uncountable === true) {
    return false;
  }

  return true;
};

module.exports = hasPlural;

},{}],38:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('../../text');

var Noun = _dereq_('./noun'); //the () subset class


var methods = {
  isPlural: function isPlural() {
    this.list = this.list.filter(function (ts) {
      return ts.isPlural();
    });
    return this;
  },
  hasPlural: function hasPlural() {
    return this.list.map(function (ts) {
      return ts.hasPlural();
    });
  },
  toPlural: function toPlural() {
    this.list.forEach(function (ts) {
      return ts.toPlural();
    });
    return this;
  },
  toSingular: function toSingular(verbose) {
    this.list.forEach(function (ts) {
      return ts.toSingular(verbose);
    });
    return this;
  },
  toPossessive: function toPossessive(verbose) {
    this.list.forEach(function (ts) {
      return ts.toPossessive(verbose);
    });
    return this;
  },
  articles: function articles() {
    return this.list.map(function (ts) {
      return {
        text: ts.out('text'),
        normal: ts.out('normal'),
        article: ts.article()
      };
    });
  }
};

var find = function find(r, n) {
  r = r.clauses();
  r = r.match('#Noun+ (of|by)? the? #Noun+?'); //nouns that we don't want in these results, for weird reasons

  r = r.not('#Pronoun');
  r = r.not('(there|these)');
  r = r.not('(#Month|#WeekDay)'); //allow Durations, Holidays
  // //allow possessives like "spencer's", but not generic ones like,

  r = r.not('(my|our|your|their|her|his)');
  r = r.not('(of|for|by|the)$');

  if (typeof n === 'number') {
    r = r.get(n);
  }

  r.list = r.list.map(function (ts) {
    return new Noun(ts.terms, ts.world, ts.refText, ts.refTerms);
  });
  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./noun":46}],39:[function(_dereq_,module,exports){
'use strict';

var rules = _dereq_('./methods/data/indicators');

var prep = /([a-z]*) (of|in|by|for) [a-z]/;

var hasPlural = _dereq_('./hasPlural');

var knownPlural = {
  i: false,
  he: false,
  she: false,
  we: true,
  they: true
}; //is it potentially plural?

var noPlural = ['Place', 'Value', 'Person', 'Month', 'WeekDay', 'RelativeDay', 'Holiday', 'Possessive']; //first, try to guess based on existing tags

var couldEvenBePlural = function couldEvenBePlural(t) {
  if (hasPlural(t) === false) {
    return false;
  }

  for (var i = 0; i < noPlural.length; i++) {
    if (t.tags[noPlural[i]]) {
      return false;
    }
  }

  return true;
};
/** returns true, false, or null */


var isPlural = function isPlural(t, world) {
  if (t.tags.Plural) {
    return true;
  }

  if (t.tags.Singular) {
    return false;
  }

  var str = t.normal; //whitelist a few easy ones

  if (knownPlural.hasOwnProperty(str) === true) {
    return knownPlural[str];
  } //check given irregulars


  if (world.plurals && world.plurals.hasOwnProperty(str) === true) {
    return false;
  } //check opposite-ones


  if (world.cache.toSingular && world.cache.toSingular.hasOwnProperty(str) === true) {
    return true;
  } //inspect the existing tags to see if a plural is valid


  if (couldEvenBePlural(t) === false) {
    return null;
  } //handle 'mayors of chicago'


  var preposition = str.match(prep);

  if (preposition !== null) {
    str = preposition[1];
  } //check the suffix-type rules for indications


  for (var i = 0; i < rules.plural_indicators.length; i++) {
    if (rules.plural_indicators[i].test(str) === true) {
      return true;
    }
  }

  for (var _i = 0; _i < rules.singular_indicators.length; _i++) {
    if (rules.singular_indicators[_i].test(str) === true) {
      return false;
    }
  } // a fallback 'looks check plural' rule..


  if (/s$/.test(str) === true && /ss$/.test(str) === false && str.length > 3) {
    //needs some lovin'
    return true;
  }

  return false;
};

module.exports = isPlural; // console.log(is_plural('octopus'))

},{"./hasPlural":37,"./methods/data/indicators":41}],40:[function(_dereq_,module,exports){
'use strict'; //chooses an indefinite aricle 'a/an' for a word

var irregulars = {
  'hour': 'an',
  'heir': 'an',
  'heirloom': 'an',
  'honest': 'an',
  'honour': 'an',
  'honor': 'an',
  'uber': 'an' //german u

}; //pronounced letters of acronyms that get a 'an'

var an_acronyms = {
  a: true,
  e: true,
  f: true,
  h: true,
  i: true,
  l: true,
  m: true,
  n: true,
  o: true,
  r: true,
  s: true,
  x: true
}; //'a' regexes

var a_regexs = [/^onc?e/i, //'wu' sound of 'o'
/^u[bcfhjkqrstn][aeiou]/i, // 'yu' sound for hard 'u'
/^eul/i];

var makeArticle = function makeArticle(t) {
  var str = t.normal; //no 'the john smith', but 'a london hotel'

  if (t.tags.Person) {
    return '';
  } //no a/an if it's plural


  if (t.tags.Plural) {
    return 'the';
  } //explicit irregular forms


  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  } //spelled-out acronyms


  var firstLetter = str.substr(0, 1);

  if (t.isAcronym() && an_acronyms.hasOwnProperty(firstLetter)) {
    return 'an';
  } //'a' regexes


  for (var i = 0; i < a_regexs.length; i++) {
    if (a_regexs[i].test(str)) {
      return 'a';
    }
  } //basic vowel-startings


  if (/^[aeiou]/i.test(str)) {
    return 'an';
  }

  return 'a';
};

module.exports = makeArticle;

},{}],41:[function(_dereq_,module,exports){
'use strict'; //similar to plural/singularize rules, but not the same

var plural_indicators = [/(^v)ies$/i, /ises$/i, /ives$/i, /(antenn|formul|nebul|vertebr|vit)ae$/i, /(octop|vir|radi|nucle|fung|cact|stimul)i$/i, /(buffal|tomat|tornad)oes$/i, /(analy|ba|diagno|parenthe|progno|synop|the)ses$/i, /(vert|ind|cort)ices$/i, /(matr|append)ices$/i, /(x|ch|ss|sh|s|z|o)es$/i, /men$/i, /news$/i, /.tia$/i, /(^f)ves$/i, /(lr)ves$/i, /(^aeiouy|qu)ies$/i, /(m|l)ice$/i, /(cris|ax|test)es$/i, /(alias|status)es$/i, /ics$/i]; //similar to plural/singularize rules, but not the same

var singular_indicators = [/(ax|test)is$/i, /(octop|vir|radi|nucle|fung|cact|stimul)us$/i, /(octop|vir)i$/i, /(rl)f$/i, /(alias|status)$/i, /(bu)s$/i, /(al|ad|at|er|et|ed|ad)o$/i, /(ti)um$/i, /(ti)a$/i, /sis$/i, /(?:(^f)fe|(lr)f)$/i, /hive$/i, /(^aeiouy|qu)y$/i, /(x|ch|ss|sh|z)$/i, /(matr|vert|ind|cort)(ix|ex)$/i, /(m|l)ouse$/i, /(m|l)ice$/i, /(antenn|formul|nebul|vertebr|vit)a$/i, /.sis$/i, /^(?!talis|.*hu)(.*)man$/i];
module.exports = {
  singular_indicators: singular_indicators,
  plural_indicators: plural_indicators
};

},{}],42:[function(_dereq_,module,exports){
"use strict";

//patterns for turning 'bus' to 'buses'
module.exports = [[/(ax|test)is$/i, '$1es'], [/(octop|vir|radi|nucle|fung|cact|stimul)us$/i, '$1i'], [/(octop|vir)i$/i, '$1i'], [/(kn|l|w)ife$/i, '$1ives'], [/^((?:ca|e|ha|(?:our|them|your)?se|she|wo)l|lea|loa|shea|thie)f$/i, '$1ves'], [/^(dwar|handkerchie|hoo|scar|whar)f$/i, '$1ves'], [/(alias|status)$/i, '$1es'], [/(bu)s$/i, '$1ses'], [/(al|ad|at|er|et|ed|ad)o$/i, '$1oes'], [/([ti])um$/i, '$1a'], [/([ti])a$/i, '$1a'], [/sis$/i, 'ses'], [/(hive)$/i, '$1s'], [/([^aeiouy]|qu)y$/i, '$1ies'], [/(x|ch|ss|sh|s|z)$/i, '$1es'], [/(matr|vert|ind|cort)(ix|ex)$/i, '$1ices'], [/([m|l])ouse$/i, '$1ice'], [/([m|l])ice$/i, '$1ice'], [/^(ox)$/i, '$1en'], [/^(oxen)$/i, '$1'], [/(quiz)$/i, '$1zes'], [/(antenn|formul|nebul|vertebr|vit)a$/i, '$1ae'], [/(sis)$/i, 'ses'], [/^(?!talis|.*hu)(.*)man$/i, '$1men'], [/(.*)/i, '$1s']].map(function (a) {
  return {
    reg: a[0],
    repl: a[1]
  };
});

},{}],43:[function(_dereq_,module,exports){
"use strict";

//patterns for turning 'dwarves' to 'dwarf'
module.exports = [[/([^v])ies$/i, '$1y'], [/ises$/i, 'isis'], [/(kn|[^o]l|w)ives$/i, '$1ife'], [/^((?:ca|e|ha|(?:our|them|your)?se|she|wo)l|lea|loa|shea|thie)ves$/i, '$1f'], [/^(dwar|handkerchie|hoo|scar|whar)ves$/i, '$1f'], [/(antenn|formul|nebul|vertebr|vit)ae$/i, '$1a'], [/(octop|vir|radi|nucle|fung|cact|stimul)(i)$/i, '$1us'], [/(buffal|tomat|tornad)(oes)$/i, '$1o'], // [/(analy|diagno|parenthe|progno|synop|the)ses$/i, '$1sis'],
[/(..[aeiou]s)es$/i, '$1'], [/(vert|ind|cort)(ices)$/i, '$1ex'], [/(matr|append)(ices)$/i, '$1ix'], [/(x|ch|ss|sh|z|o)es$/i, '$1'], [/men$/i, 'man'], [/(n)ews$/i, '$1ews'], [/([ti])a$/i, '$1um'], [/([^aeiouy]|qu)ies$/i, '$1y'], [/(s)eries$/i, '$1eries'], [/(m)ovies$/i, '$1ovie'], [/([m|l])ice$/i, '$1ouse'], [/(cris|ax|test)es$/i, '$1is'], [/(alias|status)es$/i, '$1'], [/(ss)$/i, '$1'], [/(ics)$/i, '$1'], [/s$/i, '']].map(function (a) {
  return {
    reg: a[0],
    repl: a[1]
  };
});

},{}],44:[function(_dereq_,module,exports){
'use strict'; // const irregulars = require('../../../lexicon/uncompressed/irregularPlurals').toPlural;

var pluralRules = _dereq_('./data/pluralRules'); //turn 'shoe' into 'shoes'


var pluralize = function pluralize(str, world) {
  var irregulars = world.plurals || {}; //irregular

  if (irregulars.hasOwnProperty(str) === true) {
    return irregulars[str];
  } //regular rule-based inflector


  for (var i = 0; i < pluralRules.length; i++) {
    if (pluralRules[i].reg.test(str) === true) {
      return str.replace(pluralRules[i].reg, pluralRules[i].repl);
    }
  }

  return null;
};

module.exports = pluralize;

},{"./data/pluralRules":42}],45:[function(_dereq_,module,exports){
'use strict';

var singleRules = _dereq_('./data/singleRules'); //turn 'shoes' into 'shoe'


var toSingle = function toSingle(str, world) {
  //reverse it //TODO: cache in world object somewhere
  var irregulars = world.cache.toSingular || {}; //check irregulars

  if (irregulars.hasOwnProperty(str) === true) {
    return irregulars[str];
  }

  if (world && world.plurals) {
    //given irregulars
    var keys = Object.keys(world.plurals);

    for (var i = 0; i < keys.length; i++) {
      if (world.plurals[keys[i]] === str) {
        return keys[i];
      }
    }
  } //inflect first word of preposition-phrase


  if (/([a-z]*) (of|in|by|for) [a-z]/.test(str) === true) {
    var first = (str.match(/^([a-z]*) (of|in|by|for) [a-z]/) || [])[1];

    if (first) {
      var better_first = toSingle(first); //recursive

      return better_first + str.replace(first, '');
    }
  } //regular rule-based inflector


  for (var _i = 0; _i < singleRules.length; _i++) {
    if (singleRules[_i].reg.test(str) === true) {
      return str.replace(singleRules[_i].reg, singleRules[_i].repl);
    }
  }

  return null;
};

module.exports = toSingle; // console.log(toSingle('days'))

},{"./data/singleRules":43}],46:[function(_dereq_,module,exports){
'use strict';

var Terms = _dereq_('../../paths').Terms;

var _hasPlural = _dereq_('./hasPlural');

var _isPlural = _dereq_('./isPlural');

var _toPossessive = _dereq_('./toPossessive');

var makeArticle = _dereq_('./makeArticle');

var pluralize = _dereq_('./methods/pluralize');

var singularize = _dereq_('./methods/singularize');

var methods = {
  article: function article() {
    return makeArticle(this.main);
  },
  isPlural: function isPlural() {
    return _isPlural(this.main, this.world);
  },
  hasPlural: function hasPlural() {
    return _hasPlural(this.main);
  },
  toPlural: function toPlural(verbose) {
    var t = this.main;

    if (_hasPlural(t) && !_isPlural(t, this.world)) {
      t.text = pluralize(t.normal, this.world, verbose) || t.text;
      t.unTag('Singular', 'toPlural');
      t.tag('Plural', 'toPlural');
    }

    return this;
  },
  toSingular: function toSingular(verbose) {
    var t = this.main;

    if (_isPlural(t, this.world)) {
      t.text = singularize(t.normal, this.world, verbose) || t.text;
      t.unTag('Plural', 'toSingular');
      t.tag('Singular', 'toSingular');
    }

    return this;
  },
  toPossessive: function toPossessive() {
    var t = this.main;

    if (t.tags.Possessive) {
      return this;
    }

    t = _toPossessive(t);
    return this;
  },
  data: function data() {
    var t = this.main;
    var singular = t.text;

    if (_isPlural(t, this.world)) {
      singular = singularize(t.normal, this.world) || t.text;
    }

    var plural = t.text;

    if (_hasPlural(t) && !_isPlural(t, this.world)) {
      plural = pluralize(t.normal, this.world) || t.text;
    } //support 'mayors of chicago'


    var qualifier = '';

    if (this.qualifier) {
      qualifier = this.qualifier.out('normal');
      singular += ' ' + qualifier;
      plural += ' ' + qualifier;
    }

    return {
      text: this.out('text'),
      normal: this.out('normal'),
      article: this.article(),
      main: t.normal,
      qualifier: qualifier,
      singular: singular,
      plural: plural
    };
  }
};

var Noun = function Noun(arr, world, refText) {
  Terms.call(this, arr, world, refText); //support 'mayor of chicago' as one noun-phrase

  this.main = this.match('[#Noun+] (of|by|for)');

  if (this.main.found) {
    this.main = this.main.list[0].terms[0];
  } else {
    this.main = this.terms[this.terms.length - 1];
  } //'of chicago'


  this.qualifier = this.match(this.main.normal + ' [.+]').list[0];
};

Noun.prototype = Object.create(Terms.prototype);
Object.keys(methods).forEach(function (k) {
  Noun.prototype[k] = methods[k];
});
module.exports = Noun;

},{"../../paths":8,"./hasPlural":37,"./isPlural":39,"./makeArticle":40,"./methods/pluralize":44,"./methods/singularize":45,"./toPossessive":47}],47:[function(_dereq_,module,exports){
"use strict";

var exceptions = {
  he: 'his',
  she: 'hers',
  they: 'theirs',
  we: 'ours',
  i: 'mine',
  you: 'yours',
  her: 'hers',
  their: 'theirs',
  our: 'ours',
  my: 'mine',
  your: 'yours'
}; // turn "David" to "David's"

var toPossessive = function toPossessive(t) {
  t.tag('Possessive', 'toPossessive'); // exceptions

  if (exceptions.hasOwnProperty(t.normal)) {
    t.text = exceptions[t.normal];
    return t;
  } // flanders'


  if (/s$/.test(t.normal)) {
    t.text += '\'';
    return t;
  } //normal form:


  t.text += '\'s';
  return t;
};

module.exports = toPossessive;

},{}],48:[function(_dereq_,module,exports){
'use strict'; // make a statistical assumption about the gender of the person based on their given name
// used for pronoun resolution only.
// not intended for classification, or discrimination of people.

var gender = function gender(firstName) {
  if (!firstName) {
    return null;
  } //statistical guesses


  if (/.(i|ee|[a|e]y|a)$/.test(firstName) === true) {
    //this is almost-always true
    return 'Female';
  }

  if (/[ou]$/.test(firstName) === true) {
    //if it ends in a 'oh or uh', male
    return 'Male';
  }

  if (/(nn|ll|tt)/.test(firstName) === true) {
    //if it has double-consonants, female
    return 'Female';
  } // name not recognized, or recognized as of indeterminate gender


  return null;
};

module.exports = gender;

},{}],49:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('../../text');

var Person = _dereq_('./person'); //this is used for pronoun and honorifics, and not intented for more-than grammatical use (see #117)
//the () subset class


var methods = {
  pronoun: function pronoun() {
    return this.list.map(function (ts) {
      return ts.pronoun();
    });
  },
  firstNames: function firstNames() {
    return this.match('#FirstName');
  },
  lastNames: function lastNames() {
    return this.match('#LastName');
  }
};

var find = function find(r, n) {
  var people = r.clauses();
  people = people.match('#Person+');

  if (typeof n === 'number') {
    people = people.get(n);
  }

  people.list = people.list.map(function (ts) {
    return new Person(ts.terms, ts.world, ts.refText, ts.refTerms);
  });
  return people;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./person":50}],50:[function(_dereq_,module,exports){
'use strict';

var Terms = _dereq_('../../paths').Terms;

var _guessGender = _dereq_('./guessGender');

var Person = function Person(arr, world, refText, refTerms) {
  Terms.call(this, arr, world, refText, refTerms);
  this.firstName = this.match('#FirstName+');
  this.middleName = this.match('#Acronym+');
  this.nickName = this.match('#NickName+');
  this.honorifics = this.match('#Honorific');
  this.lastName = this.match('#LastName+'); //assume first-last

  if (!this.firstName.found && this.length > 1) {
    var m = this.not('(#Acronym|#Honorific)');
    this.firstName = m.first();
    this.lastName = m.last();
  }

  return this;
}; //Inherit properties


Person.prototype = Object.create(Terms.prototype);
var methods = {
  data: function data() {
    return {
      text: this.out('text'),
      normal: this.out('normal'),
      firstName: this.firstName.out('normal'),
      middleName: this.middleName.out('normal'),
      nickName: this.nickName.out('normal'),
      lastName: this.lastName.out('normal'),
      genderGuess: this.guessGender(),
      pronoun: this.pronoun(),
      honorifics: this.honorifics.out('array')
    };
  },
  guessGender: function guessGender() {
    //try known honorifics
    if (this.honorifics.match('(mr|mister|sr|sir|jr)').found) {
      return 'Male';
    }

    if (this.honorifics.match('(mrs|miss|ms|misses|mme|mlle)').found) {
      return 'Female';
    } //try known first-names


    if (this.firstName.match('#MaleName').found) {
      return 'Male';
    }

    if (this.firstName.match('#FemaleName').found) {
      return 'Female';
    } //look-for regex clues


    var str = this.firstName.out('normal');
    return _guessGender(str);
  },
  pronoun: function pronoun() {
    var str = this.firstName.out('normal');
    var g = this.guessGender(str);

    if (g === 'Male') {
      return 'he';
    }

    if (g === 'Female') {
      return 'she';
    }

    return 'they';
  },
  root: function root() {
    var first = this.firstName.out('root');
    var last = this.lastName.out('root');

    if (first && last) {
      return first + ' ' + last;
    }

    return last || first || this.out('root');
  }
};
Object.keys(methods).forEach(function (k) {
  Person.prototype[k] = methods[k];
});
module.exports = Person;

},{"../../paths":8,"./guessGender":48}],51:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('../../text'); // const Terms = require('../../paths').Terms;


var methods = {
  //remove the 's on the end of the word
  strip: function strip() {
    this.list.forEach(function (ts) {
      var t = ts.terms[ts.terms.length - 1];
      t.text = t.text.replace(/'s$/, '');
      t.unTag('Possessive', '.strip()');
    });
    return this;
  }
};

var find = function find(r, n) {
  r = r.match('#Possessive+');
  r = r.splitAfter('#Comma');

  if (typeof n === 'number') {
    r = r.get(n);
  }

  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192}],52:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('../../text');

var Sentence = _dereq_('./sentence'); //the Sentences() subset class


var methods = {
  /** conjugate the main/first verb*/
  toPastTense: function toPastTense() {
    this.list = this.list.map(function (ts) {
      ts = ts.toPastTense();
      return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
    });
    return this;
  },
  toPresentTense: function toPresentTense() {
    this.list = this.list.map(function (ts) {
      ts = ts.toPresentTense();
      return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
    });
    return this;
  },
  toFutureTense: function toFutureTense() {
    this.list = this.list.map(function (ts) {
      ts = ts.toFutureTense();
      return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
    });
    return this;
  },
  toContinuous: function toContinuous() {
    this.list = this.list.map(function (ts) {
      ts = ts.toContinuous();
      return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
    });
    return this;
  },

  /** negative/positive */
  toNegative: function toNegative() {
    this.list = this.list.map(function (ts) {
      ts = ts.toNegative();
      return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
    });
    return this;
  },
  toPositive: function toPositive() {
    this.list = this.list.map(function (ts) {
      ts = ts.toPositive();
      return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
    });
    return this;
  },

  /** look for 'was _ by' patterns */
  isPassive: function isPassive() {
    this.list = this.list.filter(function (ts) {
      return ts.isPassive();
    });
    return this;
  },
  //return only questions
  isQuestion: function isQuestion() {
    // this.list = this.list.filter(ts => {
    //   return ts.isQuestion();
    // });
    return this.questions();
  },

  /** add a word to the start */
  prepend: function prepend(str) {
    this.list = this.list.map(function (ts) {
      return ts.prepend(str);
    });
    return this;
  },

  /** add a word to the end */
  append: function append(str) {
    this.list = this.list.map(function (ts) {
      return ts.append(str);
    });
    return this;
  },

  /** convert between question/statement/exclamation*/
  toExclamation: function toExclamation() {
    this.list.forEach(function (ts) {
      ts.setPunctuation('!');
    });
    return this;
  },
  toQuestion: function toQuestion() {
    this.list.forEach(function (ts) {
      ts.setPunctuation('?');
    });
    return this;
  },
  toStatement: function toStatement() {
    this.list.forEach(function (ts) {
      ts.setPunctuation('.');
    });
    return this;
  }
};

var find = function find(r, n) {
  r = r.all();

  if (typeof n === 'number') {
    r = r.get(n);
  }

  r.list = r.list.map(function (ts) {
    return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
  });
  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./sentence":54}],53:[function(_dereq_,module,exports){
'use strict'; //is this sentence asking a question?

var isQuestion = function isQuestion(ts) {
  var endPunct = ts.getPunctuation();
  var clauses = ts.match('*').splitAfter('#Comma');

  if (/\?/.test(endPunct) === true) {
    return true;
  } // Has ellipsis at the end means it's probably not a question
  // e.g., Is this just fantasy...


  if (/\.\.$/.test(ts.out('text'))) {
    return false;
  } // Starts with question word, but has a comma, so probably not a question
  // e.g., Why are we caught in a land slide, no escape from reality


  if (ts.has('^#QuestionWord') && ts.has('#Comma')) {
    return false;
  } // Starts with a #QuestionWord
  // e.g., What open your eyes look up to the skies and see


  if (ts.has('^#QuestionWord')) {
    return true;
  } // Second word is a #QuestionWord
  // e.g., I'm what a poor boy
  // case ts.has('^\w+\s#QuestionWord'):
  // return true;
  // is it, do you - start of sentence
  // e.g., Do I need no sympathy


  if (ts.has('^(do|does|did|is|was|can|could|will|would|may) #Noun')) {
    return true;
  } // these are a little more loose..
  // e.g., Must I be come easy come easy go


  if (ts.has('^(have|must) you')) {
    return true;
  } // Clause starts with a question word
  // e.g., Anyway the wind blows, what doesn't really matter to me


  if (clauses.has('^#QuestionWord')) {
    return true;
  } //is wayne gretskzy alive


  if (clauses.has('(do|does|is|was) #Noun+ #Adverb? (#Adjective|#Infinitive)$')) {
    return true;
  } // Probably not a question


  return false;
};

module.exports = isQuestion;

},{}],54:[function(_dereq_,module,exports){
'use strict';

var Terms = _dereq_('../../paths').Terms;

var _toNegative = _dereq_('./toNegative');

var _toPositive = _dereq_('./toPositive');

var Verb = _dereq_('../verbs/verb');

var insert = _dereq_('./smartInsert'); //decide on main subject-verb-object


var parse = function parse(s) {
  //strip conditions first
  var conditions = s.match('#Condition');
  var tmp = s.not('#Condition'); //choose the verb first

  var verb = tmp.match('#VerbPhrase+').first(); //this should be much smarter

  var vb = verb.out('normal'); //get subj noun left-of the verb

  var subject = tmp.match('#Determiner? #Adjective+? #Noun ' + vb).first().not('#VerbPhrase'); //get obj noun right-of the verb

  var object = tmp.match(vb + ' #Preposition? #Determiner? #Noun').first().not('#VerbPhrase');
  s.conditions = conditions;
  s.subject = subject;
  s.verb = verb;
  s.object = object;

  if (s.verb.found) {
    s.verb = new Verb(s.verb.list[0].terms, s.world, s.refText, s.refTerms);
  }

  return s;
};

var fixContraction = function fixContraction(contr) {
  if (contr.found) {
    contr.contractions().expand();
  }
};

var killContraction = function killContraction(s) {
  s.terms = s.terms.filter(function (t) {
    if (t.silent_term) {
      if (t.silent_term === 'am' || t.silent_term === 'will' || t.silent_term === 'did') {
        return false;
      }

      t.text = t.silent_term;
      t.silent_term = null;
      t.unTag('Contraction');

      if (t.tags.TitleCase === true) {
        t.toTitleCase();
      }
    }

    return true;
  });
}; //if the subject of thr sentence is plural, use infinitive form of verb
// (he goes / i go)


var useInfinitive = function useInfinitive(s) {
  if (s.subject.found && s.subject.has('(i|we)')) {
    return true;
  }

  return false;
};

var methods = {
  /** inflect the main/first noun*/
  toSingular: function toSingular() {
    var nouns = this.match('#Noun').match('!#Pronoun').firstTerm();
    nouns.things().toSingular();
    return this;
  },
  toPlural: function toPlural() {
    var nouns = this.match('#Noun').match('!#Pronoun').firstTerm();
    nouns.things().toPlural();
    return this;
  },

  /** find the first important verbPhrase. returns a Term object */
  mainVerb: function mainVerb() {
    parse(this); //re-parse

    if (this.verb.found) {
      return this.verb;
    }

    return null;
  },

  /** sentence tense conversion**/
  toPastTense: function toPastTense() {
    var verb = this.mainVerb();

    if (verb) {
      //this is really ugly..
      var start = verb.out('root');
      verb.toPastTense(); //support "i'm going"

      var contr = this.match('#Contraction ' + start);
      fixContraction(contr);
      var end = verb.out('root'); // this.replace(start, end)

      var r = this.parentTerms.replace(start, end);
      return r;
    }

    return this;
  },
  toPresentTense: function toPresentTense() {
    var verb = this.mainVerb();

    if (verb) {
      var start = verb.out('normal'); //plural/singular stuff

      if (useInfinitive(this) === true) {
        if (this.has('(am|will|did) ' + start)) {
          killContraction(this);
        }

        verb.toInfinitive(); //irregular "i am"
        // this.debug();
        // if (this.has('i #Adverb? is')) {
        //   this.replace(' #Adverb? [is]', 'am');
        // }
      } else {
        verb.toPresentTense();
        var contr = this.match('#Contraction ' + start);
        fixContraction(contr);
      } //support "i'm going"


      var end = verb.out('normal');
      return this.parentTerms.replace(start, end);
    }

    return this;
  },
  toFutureTense: function toFutureTense() {
    var verb = this.mainVerb();

    if (verb) {
      var start = verb.clone(); //.out('root');

      verb.toFutureTense(); //support "i'm going"

      var contr = this.match('#Contraction ' + start.out('normal'));
      fixContraction(contr);
      var end = verb.out('normal');
      return this.parentTerms.replace(start, end);
    }

    return this;
  },
  toContinuous: function toContinuous() {
    var verb = this.mainVerb();

    if (verb) {
      var start = verb.clone(); //.out('root');
      //'is walking' or 'are walking'?
      // let aux = 'is';
      // if (useInfinitive(this)) {
      //   aux = 'are';
      // }

      verb.toGerund(); // verb.insertBefore(aux);
      //support "i'm going"

      var contr = this.match('#Contraction ' + start.out('normal'));
      fixContraction(contr);
      var end = verb.out('normal');
      return this.parentTerms.replace(start, end);
    }

    return this;
  },

  /** negation **/
  isNegative: function isNegative() {
    return this.match('#Negative').list.length === 1;
  },
  toNegative: function toNegative() {
    if (this.isNegative()) {
      return this;
    }

    return _toNegative(this);
  },
  toPositive: function toPositive() {
    if (!this.isNegative()) {
      return this;
    }

    return _toPositive(this);
  },

  /** smarter insert methods*/
  append: function append(str) {
    return insert.append(this, str);
  },
  prepend: function prepend(str) {
    return insert.prepend(this, str);
  },

  /** look for 'was _ by' patterns */
  isPassive: function isPassive() {
    return this.match('was #Adverb? #PastTense #Adverb? by').found; //haha
  }
};

var Sentence = function Sentence(arr, world, refText, refTerms) {
  Terms.call(this, arr, world, refText, refTerms);
  parse(this);
}; //Terms inheritence


Sentence.prototype = Object.create(Terms.prototype); //add-in methods

Object.keys(methods).forEach(function (k) {
  Sentence.prototype[k] = methods[k];
});
module.exports = Sentence;

},{"../../paths":8,"../verbs/verb":94,"./smartInsert":55,"./toNegative":56,"./toPositive":57}],55:[function(_dereq_,module,exports){
'use strict';

var hasCapital = /^[A-Z]/; //sticking words at the start sentence-sensitive

var prepend = function prepend(ts, str) {
  var firstTerm = ts.terms[0];
  ts.insertAt(0, str); //handle titlecase of first-word

  if (hasCapital.test(firstTerm.text)) {
    //is it titlecased because it should be?
    if (firstTerm.needsTitleCase() === false) {
      firstTerm.toLowerCase();
    }

    var newTerm = ts.terms[0];
    newTerm.toTitleCase();
  }

  return ts;
}; //sticking words on end sentence-sensitive


var append = function append(ts, str) {
  var endTerm = ts.terms[ts.terms.length - 1]; //move the sentence punctuation to the end

  var punct = ts.getPunctuation();

  if (punct) {
    endTerm.killPunctuation();
  }

  ts.insertAt(ts.terms.length, str);
  var newTerm = ts.terms[ts.terms.length - 1];

  if (punct) {
    newTerm.text += punct;
  } //move over sentence-ending whitespace too


  if (endTerm.whitespace.after) {
    newTerm.whitespace.after = endTerm.whitespace.after;
    endTerm.whitespace.after = '';
  }

  return ts;
};

module.exports = {
  append: append,
  prepend: prepend
};

},{}],56:[function(_dereq_,module,exports){
'use strict'; //these terms are nicer ways to negate a sentence
//ie. john always walks -> john always doesn't walk

var logicalNegate = {
  everyone: 'no one',
  everybody: 'nobody',
  someone: 'no one',
  somebody: 'nobody',
  // everything:"nothing",
  always: 'never'
}; //different rule for i/we/they/you + infinitive
//that is, 'i walk' -> 'i don\'t walk', not 'I not walk'

var toNegative = function toNegative(ts) {
  var lg = ts.match('(everyone|everybody|someone|somebody|always)').first();

  if (lg.found && logicalNegate[lg.out('normal')]) {
    var found = lg.out('normal'); // ts = ts.replace(found, logicalNegate[found]);

    ts = ts.match(found).replaceWith(logicalNegate[found]).list[0];
    return ts.parentTerms;
  } //negate the main verb of the sentence


  var vb = ts.mainVerb();

  if (vb) {
    vb.toNegative();
  }

  return ts;
};

module.exports = toNegative;

},{}],57:[function(_dereq_,module,exports){
'use strict'; //ie. john never walks -> john always walks
//nobody/noone are ambiguous logically (somebody? / everybody?)

var logical = {
  'never': 'always',
  'nothing': 'everything'
};

var toPositive = function toPositive(ts) {
  var m = ts.match('(never|nothing)').first();

  if (m.found) {
    var str = m.out('normal');

    if (logical[str]) {
      ts = ts.match(str).replaceWith(logical[str], true).list[0];
      return ts.parentTerms;
    }
  } //otherwise just remove 'not'


  ts.delete('#Negative');
  return ts;
};

module.exports = toPositive;

},{}],58:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('../../text');

var Terms = _dereq_('../../paths').Terms; //the Terms() subset class
//this is just a wrapper around the actual Term class,
//which is buried in `ts.terms[0]`


var methods = {
  data: function data() {
    return this.list.map(function (ts) {
      var t = ts.terms[0];
      return {
        spaceBefore: t.whitespace.before,
        text: t.text,
        spaceAfter: t.whitespace.after,
        normal: t.normal,
        implicit: t.silent_term,
        bestTag: t.bestTag(),
        tags: Object.keys(t.tags)
      };
    });
  }
};

var find = function find(r, n) {
  var list = []; //make a Terms Object for every Term

  r.list.forEach(function (ts) {
    ts.terms.forEach(function (t) {
      list.push(new Terms([t], ts.world, r));
    });
  });
  r = new Text(list, r.world, r.parent);

  if (typeof n === 'number') {
    r = r.get(n);
  }

  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../paths":8,"../../text":192}],59:[function(_dereq_,module,exports){
"use strict";

var numOrdinal = _dereq_('./numOrdinal');

var _textOrdinal = _dereq_('./textOrdinal');

var textCardinal = _dereq_('./textCardinal');

var niceNumber = _dereq_('./niceNumber'); //make all the number formats


var fmt = {
  nice: function nice(num) {
    return niceNumber(num);
  },
  ordinal: function ordinal(num) {
    return numOrdinal(num);
  },
  cardinal: function cardinal(num) {
    return String(num);
  },
  niceOrdinal: function niceOrdinal(num) {
    num = numOrdinal(num);
    num = niceNumber(num);
    return num;
  },
  text: function text(num) {
    return textCardinal(num).join(' ');
  },
  textOrdinal: function textOrdinal(num) {
    return _textOrdinal(num);
  }
};
module.exports = fmt;

},{"./niceNumber":60,"./numOrdinal":61,"./textCardinal":62,"./textOrdinal":63}],60:[function(_dereq_,module,exports){
'use strict'; //put a comma or two in

var niceNumber = function niceNumber(num) {
  if (!num && num !== 0) {
    return null;
  }

  num = String(num);
  var x = num.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;

  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }

  return x1 + x2;
};

module.exports = niceNumber;

},{}],61:[function(_dereq_,module,exports){
'use strict';

var toString = _dereq_('./toString'); //turn a number like 5 into an ordinal like 5th


var numOrdinal = function numOrdinal(num) {
  if (!num && num !== 0) {
    return null;
  } //the teens are all 'th'


  var tens = num % 100;

  if (tens > 10 && tens < 20) {
    return String(num) + 'th';
  } //the rest of 'em


  var mapping = {
    0: 'th',
    1: 'st',
    2: 'nd',
    3: 'rd'
  };
  var str = toString(num);
  var last = str.slice(str.length - 1, str.length);

  if (mapping[last]) {
    str += mapping[last];
  } else {
    str += 'th';
  }

  return str;
};

module.exports = numOrdinal;

},{"./toString":64}],62:[function(_dereq_,module,exports){
'use strict';

var toString = _dereq_('./toString'); // turns an integer/float into a textual number, like 'fifty-five'


var tens_mapping = [['ninety', 90], ['eighty', 80], ['seventy', 70], ['sixty', 60], ['fifty', 50], ['forty', 40], ['thirty', 30], ['twenty', 20]];
var ones_mapping = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var sequence = [[1e24, 'septillion'], [1e21, 'sextillion'], [1e18, 'quintillion'], [1e15, 'quadrillion'], [1e12, 'trillion'], [1e9, 'billion'], [1e8, 'hundred million'], [1e6, 'million'], [100000, 'hundred thousand'], [1000, 'thousand'], [100, 'hundred'], [1, 'one']]; //turn number into an array of magnitudes, like [[5, million], [2, hundred]]

var breakdown_magnitudes = function breakdown_magnitudes(num) {
  var working = num;
  var have = [];
  sequence.forEach(function (a) {
    if (num >= a[0]) {
      var howmany = Math.floor(working / a[0]);
      working -= howmany * a[0];

      if (howmany) {
        have.push({
          unit: a[1],
          count: howmany
        });
      }
    }
  });
  return have;
}; //turn numbers from 100-0 into their text


var breakdown_hundred = function breakdown_hundred(num) {
  var arr = [];

  if (num > 100) {
    return arr; //something bad happened..
  }

  for (var i = 0; i < tens_mapping.length; i++) {
    if (num >= tens_mapping[i][1]) {
      num -= tens_mapping[i][1];
      arr.push(tens_mapping[i][0]);
    }
  } //(hopefully) we should only have 20-0 now


  if (ones_mapping[num]) {
    arr.push(ones_mapping[num]);
  }

  return arr;
};
/** print-out 'point eight nine'*/


var handle_decimal = function handle_decimal(num) {
  var names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var arr = []; //parse it out like a string, because js math is such shit

  var str = toString(num);
  var decimal = str.match(/\.([0-9]+)/);

  if (!decimal || !decimal[0]) {
    return arr;
  }

  arr.push('point');
  var decimals = decimal[0].split('');

  for (var i = 0; i < decimals.length; i++) {
    arr.push(names[decimals[i]]);
  }

  return arr;
};
/** turns an integer into a textual number */


var to_text = function to_text(num) {
  //big numbers, north of sextillion, aren't gonna work well..
  //keep them small..
  if (num > 1e21) {
    return [String(num)];
  }

  var arr = []; //handle negative numbers

  if (num < 0) {
    arr.push('negative');
    num = Math.abs(num);
  } //break-down into units, counts


  var units = breakdown_magnitudes(num); //build-up the string from its components

  for (var i = 0; i < units.length; i++) {
    var unit_name = units[i].unit;

    if (unit_name === 'one') {
      unit_name = ''; //put an 'and' in here

      if (arr.length > 1) {
        arr.push('and');
      }
    }

    arr = arr.concat(breakdown_hundred(units[i].count));
    arr.push(unit_name);
  } //also support decimals - 'point eight'


  arr = arr.concat(handle_decimal(num)); //remove empties

  arr = arr.filter(function (s) {
    return s;
  });

  if (arr.length === 0) {
    arr[0] = '';
  }

  return arr;
};

module.exports = to_text; // console.log(to_text(-1000.8));

},{"./toString":64}],63:[function(_dereq_,module,exports){
'use strict';

var textValue = _dereq_('./textCardinal');

var ordinalWord = _dereq_('../../../world/more-data/numbers').toOrdinal; //


var textOrdinal = function textOrdinal(num) {
  var words = textValue(num); //convert the last number to an ordinal

  var last = words[words.length - 1];
  words[words.length - 1] = ordinalWord[last] || last;
  return words.join(' ');
};

module.exports = textOrdinal;

},{"../../../world/more-data/numbers":220,"./textCardinal":62}],64:[function(_dereq_,module,exports){
"use strict";

//turn big numbers, like 2.3e+22, into a tonne of 0's
var numToString = function numToString(n) {
  if (n < 1000000) {
    return String(n);
  }

  var str = n.toFixed(0);

  if (str.indexOf('e+') === -1) {
    return str;
  }

  return str.replace('.', '').split('e+').reduce(function (p, b) {
    return p + Array(b - p.length + 2).join(0);
  });
};

module.exports = numToString; // console.log(numToString(2.5e+22));

},{}],65:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('../../text');

var Value = _dereq_('./value');

var parse = _dereq_('./parse'); //the Values() subset class


var methods = {
  noDates: function noDates() {
    return this.not('#Date');
  },
  noUnits: function noUnits() {
    return this.not('#Unit');
  },
  units: function units() {
    return this.match('#Unit+');
  },

  /** five -> 5 */
  numbers: function numbers() {
    return this.list.map(function (ts) {
      return ts.number();
    });
  },

  /** five -> '5' */
  toNumber: function toNumber() {
    this.list = this.list.map(function (ts) {
      return ts.toNumber();
    });
    return this;
  },

  /**5 -> 'five' */
  toText: function toText() {
    this.list = this.list.map(function (ts) {
      return ts.toText();
    });
    return this;
  },

  /**5th -> 5 */
  toCardinal: function toCardinal() {
    this.list = this.list.map(function (ts) {
      return ts.toCardinal();
    });
    return this;
  },

  /**5 -> 5th */
  toOrdinal: function toOrdinal() {
    this.list = this.list.map(function (ts) {
      return ts.toOrdinal();
    });
    return this;
  },

  /**5900 -> 5,900 */
  toNice: function toNice() {
    this.list = this.list.map(function (ts) {
      return ts.toNice();
    });
    return this;
  },

  /**seven === 7th */
  isEqual: function isEqual(num) {
    num = parse(num);
    this.list = this.list.filter(function (ts) {
      return num !== null && ts.number() === num;
    });
    return this;
  },

  /**eight > 7th */
  greaterThan: function greaterThan(num) {
    num = parse(num);
    this.list = this.list.filter(function (ts) {
      return num !== null && ts.number() > num;
    });
    return this;
  },

  /**five < 7th */
  lessThan: function lessThan(num) {
    num = parse(num);
    this.list = this.list.filter(function (ts) {
      return num !== null && ts.number() < num;
    });
    return this;
  },
  between: function between(min, max) {
    if (min === undefined || max === undefined) {
      return this;
    }

    min = parse(min);
    max = parse(max);
    this.list = this.list.filter(function (ts) {
      var n = ts.number();
      return n > min && n < max;
    });
    return this;
  },

  /**seven + 2 = 'nine' */
  add: function add(n) {
    this.list = this.list.map(function (ts) {
      return ts.add(n);
    });
    return this;
  },

  /**seven - 2 = 'five' */
  subtract: function subtract(n) {
    this.list = this.list.map(function (ts) {
      return ts.subtract(n);
    });
    return this;
  },

  /**seven -> 'eight' */
  increment: function increment() {
    this.list = this.list.map(function (ts) {
      return ts.add(1);
    });
    return this;
  },

  /**seven -> 'eight' */
  decrement: function decrement() {
    this.list = this.list.map(function (ts) {
      return ts.subtract(1);
    });
    return this;
  }
};

var find = function find(r, n) {
  var tens = 'twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|fourty';
  var teens = 'eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen';
  r = r.match('#Value+ #Unit?'); // r = r.match('#Value+ #Unit?');
  //"50 83"

  if (r.has('#NumericValue #NumericValue')) {
    //a comma may mean two numbers
    if (r.has('#Value #Comma #Value')) {
      r.splitAfter('#Comma');
    } else {
      r.splitAfter('#NumericValue');
    }
  } //three-length


  if (r.has('#Value #Value #Value') && !r.has('#Multiple')) {
    //twenty-five-twenty
    if (r.has('(' + tens + ') #Cardinal #Cardinal')) {
      r.splitAfter('(' + tens + ') #Cardinal');
    }
  } //two-length ones


  if (r.has('#Value #Value')) {
    //june 21st 1992 is two seperate values
    if (r.has('#NumericValue #NumericValue')) {
      r.splitOn('#Year');
    } //sixty fifteen


    if (r.has('(' + tens + ') (' + teens + ')')) {
      r.splitAfter('(' + tens + ')');
    } //"72 82"


    var double = r.match('#Cardinal #Cardinal');

    if (double.found && !r.has('(point|decimal)')) {
      //not 'two hundred'
      if (!double.has('#Cardinal (#Multiple|point|decimal)')) {
        //one proper way, 'twenty one', or 'hundred one'
        if (!double.has('(' + tens + ') #Cardinal') && !double.has('#Multiple #Value')) {
          r.splitAfter(double.terms(0).out('normal'));
        }
      }
    } //seventh fifth


    if (r.match('#Ordinal #Ordinal').match('#TextValue').found && !r.has('#Multiple')) {
      //the one proper way, 'twenty first'
      if (!r.has('(' + tens + ') #Ordinal')) {
        r.splitAfter('#Ordinal');
      }
    } //fifth five


    if (r.has('#Ordinal #Cardinal')) {
      r.splitBefore('#Cardinal+');
    } //five 2017 (support '5 hundred', and 'twenty 5'


    if (r.has('#TextValue #NumericValue') && !r.has('(' + tens + '|#Multiple)')) {
      r.splitBefore('#NumericValue+');
    }
  } //5-8


  if (r.has('#NumberRange')) {
    r.splitAfter('#NumberRange');
  }

  if (typeof n === 'number') {
    r = r.get(n);
  }

  var world = r.world();
  r.list = r.list.map(function (ts) {
    return new Value(ts.terms, world, ts.refText, ts.refTerms);
  });
  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./parse":66,"./value":74}],66:[function(_dereq_,module,exports){
'use strict';

var parseText = _dereq_('./parseText'); // 2.5, $5.50, 3,432, etc -


var numeric = /^-?(\$|€|¥|£)?\.?[0-9]+[0-9,\.]*(st|nd|rd|th|rth|%)?$/;

var parseString = function parseString(str) {
  if (numeric.test(str) === true) {
    //clean up a number, like '$4,342.00'
    str = str.replace(/,/g, '');
    str = str.replace(/^[\$|€|¥|£]/g, '');
    str = str.replace(/%$/, '');
    str = str.replace(/(st|nd|rd|th|rth)$/g, '');
    var num = parseFloat(str);

    if (num || num === 0) {
      return num;
    }
  }

  return parseText(str);
}; //turn it all into a number


var parse = function parse(val) {
  if (val === null || val === undefined || typeof val === 'number') {
    return val;
  }

  if (typeof val === 'string') {
    return parseString(val);
  } //numerical values can only be one term


  if (val.terms.length === 1 && val.terms[0].tags.TextValue !== true) {
    var str = val.terms[0].normal;
    return parseString(str);
  }

  return parseText(val.out('normal'));
};

module.exports = parse;

},{"./parseText":69}],67:[function(_dereq_,module,exports){
"use strict";

var numbers = _dereq_('../../../world/more-data/numbers');

var fns = _dereq_('../paths').fns; //setup number-word data


var ones = fns.extend(numbers.ordinal.ones, numbers.cardinal.ones);
var teens = fns.extend(numbers.ordinal.teens, numbers.cardinal.teens);
var tens = fns.extend(numbers.ordinal.tens, numbers.cardinal.tens);
var multiples = fns.extend(numbers.ordinal.multiples, numbers.cardinal.multiples); //add this one

multiples.grand = 1000;
module.exports = {
  ones: ones,
  teens: teens,
  tens: tens,
  multiples: multiples
};

},{"../../../world/more-data/numbers":220,"../paths":73}],68:[function(_dereq_,module,exports){
'use strict'; //support global multipliers, like 'half-million' by doing 'million' then multiplying by 0.5

var findModifiers = function findModifiers(str) {
  var mults = [{
    reg: /^(minus|negative)[\s\-]/i,
    mult: -1
  }, {
    reg: /^(a\s)?half[\s\-](of\s)?/i,
    mult: 0.5 //  {
    //   reg: /^(a\s)?quarter[\s\-]/i,
    //   mult: 0.25
    // }

  }];

  for (var i = 0; i < mults.length; i++) {
    if (mults[i].reg.test(str) === true) {
      return {
        amount: mults[i].mult,
        str: str.replace(mults[i].reg, '')
      };
    }
  }

  return {
    amount: 1,
    str: str
  };
};

module.exports = findModifiers;

},{}],69:[function(_dereq_,module,exports){
'use strict';

var findModifiers = _dereq_('./findModifiers');

var words = _dereq_('./data');

var isValid = _dereq_('./validate');

var parseDecimals = _dereq_('./parseDecimals');

var parseNumeric = _dereq_('./parseNumeric');

var improperFraction = /^([0-9,\. ]+)\/([0-9,\. ]+)$/; //some numbers we know

var casualForms = {
  // 'a few': 3,
  'a couple': 2,
  'a dozen': 12,
  'two dozen': 24,
  zero: 0
}; // a 'section' is something like 'fifty-nine thousand'
// turn a section into something we can add to - like 59000

var section_sum = function section_sum(obj) {
  return Object.keys(obj).reduce(function (sum, k) {
    sum += obj[k];
    return sum;
  }, 0);
}; //turn a string into a number


var parse = function parse(str) {
  //convert some known-numbers
  if (casualForms.hasOwnProperty(str) === true) {
    return casualForms[str];
  } //'a/an' is 1


  if (str === 'a' || str === 'an') {
    return 1;
  }

  var modifier = findModifiers(str);
  str = modifier.str;
  var last_mult = null;
  var has = {};
  var sum = 0;
  var isNegative = false;
  var terms = str.split(/[ -]/);

  for (var i = 0; i < terms.length; i++) {
    var w = terms[i];
    w = parseNumeric(w);

    if (!w || w === 'and') {
      continue;
    }

    if (w === '-' || w === 'negative') {
      isNegative = true;
      continue;
    }

    if (w.charAt(0) === '-') {
      isNegative = true;
      w = w.substr(1);
    } //decimal mode


    if (w === 'point') {
      sum += section_sum(has);
      sum += parseDecimals(terms.slice(i + 1, terms.length));
      sum *= modifier.amount;
      return sum;
    } //improper fraction


    var fm = w.match(improperFraction);

    if (fm) {
      var num = parseFloat(fm[1].replace(/[, ]/g, ''));
      var denom = parseFloat(fm[2].replace(/[, ]/g, ''));

      if (denom) {
        sum += num / denom || 0;
      }

      continue;
    } //prevent mismatched units, like 'seven eleven'


    if (isValid(w, has) === false) {
      return null;
    } //buildOut section, collect 'has' values


    if (/^[0-9\.]+$/.test(w)) {
      has['ones'] = parseFloat(w); //not technically right
    } else if (words.ones.hasOwnProperty(w) === true) {
      has['ones'] = words.ones[w];
    } else if (words.teens.hasOwnProperty(w) === true) {
      has['teens'] = words.teens[w];
    } else if (words.tens.hasOwnProperty(w) === true) {
      has['tens'] = words.tens[w];
    } else if (words.multiples.hasOwnProperty(w) === true) {
      var mult = words.multiples[w]; //something has gone wrong : 'two hundred five hundred'

      if (mult === last_mult) {
        return null;
      } //support 'hundred thousand'
      //this one is tricky..


      if (mult === 100 && terms[i + 1] !== undefined) {
        // has['hundreds']=
        var w2 = terms[i + 1];

        if (words.multiples[w2]) {
          mult *= words.multiples[w2]; //hundredThousand/hundredMillion

          i += 1;
        }
      } //natural order of things
      //five thousand, one hundred..


      if (last_mult === null || mult < last_mult) {
        sum += (section_sum(has) || 1) * mult;
        last_mult = mult;
        has = {};
      } else {
        //maybe hundred .. thousand
        sum += section_sum(has);
        last_mult = mult;
        sum = (sum || 1) * mult;
        has = {};
      }
    }
  } //dump the remaining has values


  sum += section_sum(has); //post-process add modifier

  sum *= modifier.amount;
  sum *= isNegative ? -1 : 1; //dont return 0, if it went straight-through

  if (sum === 0 && Object.keys(has).length === 0) {
    return null;
  }

  return sum;
};

module.exports = parse;

},{"./data":67,"./findModifiers":68,"./parseDecimals":70,"./parseNumeric":71,"./validate":72}],70:[function(_dereq_,module,exports){
'use strict';

var words = _dereq_('./data'); //concatenate into a string with leading '0.'


var parseDecimals = function parseDecimals(arr) {
  var str = '0.';

  for (var i = 0; i < arr.length; i++) {
    var w = arr[i];

    if (words.ones.hasOwnProperty(w) === true) {
      str += words.ones[w];
    } else if (words.teens.hasOwnProperty(w) === true) {
      str += words.teens[w];
    } else if (words.tens.hasOwnProperty(w) === true) {
      str += words.tens[w];
    } else if (/^[0-9]$/.test(w) === true) {
      str += w;
    } else {
      return 0;
    }
  }

  return parseFloat(str);
};

module.exports = parseDecimals;

},{"./data":67}],71:[function(_dereq_,module,exports){
'use strict'; //parse a string like "4,200.1" into Number 4200.1

var parseNumeric = function parseNumeric(str) {
  //remove ordinal - 'th/rd'
  str = str.replace(/1st$/, '1');
  str = str.replace(/2nd$/, '2');
  str = str.replace(/3rd$/, '3');
  str = str.replace(/([4567890])r?th$/, '$1'); //remove prefixes

  str = str.replace(/^[$€¥£¢]/, ''); //remove suffixes

  str = str.replace(/[%$€¥£¢]$/, ''); //remove commas

  str = str.replace(/,/g, ''); //split '5kg' from '5'

  str = str.replace(/([0-9])([a-z]{1,2})$/, '$1');
  return str;
};

module.exports = parseNumeric;

},{}],72:[function(_dereq_,module,exports){
'use strict';

var words = _dereq_('./data'); //prevent things like 'fifteen ten', and 'five sixty'


var isValid = function isValid(w, has) {
  if (words.ones.hasOwnProperty(w)) {
    if (has.ones || has.teens) {
      return false;
    }
  } else if (words.teens.hasOwnProperty(w)) {
    if (has.ones || has.teens || has.tens) {
      return false;
    }
  } else if (words.tens.hasOwnProperty(w)) {
    if (has.ones || has.teens || has.tens) {
      return false;
    }
  }

  return true;
};

module.exports = isValid;

},{"./data":67}],73:[function(_dereq_,module,exports){
"use strict";

module.exports = _dereq_('../../paths');

},{"../../paths":8}],74:[function(_dereq_,module,exports){
'use strict';

var paths = _dereq_('../../paths');

var Terms = paths.Terms;

var parse = _dereq_('./parse');

var fmt = _dereq_('./format'); // const unpackRange = function(ts) {
//   if (ts.has('#NumberRange')) {
//     ts.terms.forEach(t => {
//       if (t.silent_term && !t._text) {
//         t.text = t.silent_term;
//       }
//     });
//   }
//   return ts;
// };


var parseValue = function parseValue(ts) {
  ts.val = ts.match('#Value+'); // ts.val = unpackRange(ts.val);

  ts.val = ts.val.list[0];
  ts.unit = ts.match('#Unit+');

  if (ts.unit.found) {
    ts.unit = ts.unit.list[0];
  }

  return ts;
};

var isPercent = function isPercent(val, unit) {
  //pre-tagged
  if (val.has('#Percent') || unit.has('#Percent')) {
    return true;
  } // 'five percent'


  if (unit.out('normal') === 'percent') {
    return true;
  } //'5%'


  if (val.out('normal').match(/%$/) !== null) {
    return true;
  }

  return false;
}; //set the text as the same num format


var setNumber = function setNumber(ts, num) {
  var str = ts.val.out();

  if (ts.has('#Ordinal')) {
    if (ts.has('#TextValue')) {
      str = fmt.textOrdinal(num); //ordinal text
    } else {
      str = fmt.ordinal(num); //ordinal number
    }
  } else if (ts.has('#TextValue')) {
    str = fmt.text(num); //cardinal text
  } else if (ts.has('#NiceNumber')) {
    str = fmt.nice(num); //8,929 number
  } else {
    str = fmt.cardinal(num); //cardinal number
  } //add the unit at the end


  if (ts.unit.found) {
    str += ts.unit.out('text');
  }

  ts = ts.replaceWith(str, true);
  return parseValue(ts);
};

var Value = function Value(arr, world, refText, refTerms) {
  Terms.call(this, arr, world, refText, refTerms);
  parseValue(this);
}; //Terms inheritence


Value.prototype = Object.create(Terms.prototype);
var methods = {
  data: function data() {
    var num = parse(this.val);
    return {
      number: num,
      nice: fmt.nice(num),
      ordinal: fmt.ordinal(num),
      niceOrdinal: fmt.niceOrdinal(num),
      text: fmt.text(num),
      textOrdinal: fmt.textOrdinal(num),
      unit: this.unit.out('normal')
    };
  },
  number: function number() {
    return parse(this.val);
  },
  // /** five -> '5' */
  toNumber: function toNumber() {
    var num = parse(this.val);

    if (num || num === 0) {
      var str = '';

      if (this.val.has('#Ordinal')) {
        str = fmt.ordinal(num);
      } else {
        str = String(num); //convert 'five percent' -> '5%'

        if (isPercent(this.val, this.unit)) {
          str = str + '%';
          this.unit.delete();
        }
      } // let before = this.terms[0].whitespace.before;
      // let after = this.terms[this.terms.length - 1].whitespace.after;


      if (this.unit.found) {
        str = str + this.unit.out('text');
      }

      this.replaceWith(str, true).tag('NumericValue'); //make sure unit gets the right tag..

      if (this.unit.found) {
        this.match(this.unit.out('normal')).tag('Unit');
      } // this.whitespace.before(before);
      // this.whitespace.after(after);

    }

    return this;
  },
  // /**5 -> 'five' */
  toText: function toText() {
    var num = parse(this.val);

    if (num || num === 0) {
      var str = '';

      if (this.val.has('#Ordinal')) {
        str = fmt.textOrdinal(num);
      } else {
        str = fmt.text(num); //add percent

        if (isPercent(this.val, this.unit)) {
          str = str + ' percent';
        }
      }

      if (this.unit.found) {
        str = str + this.unit.out('text');
      }

      this.replaceWith(str, true).tag('TextValue'); //make sure unit gets the right tag..

      if (this.unit.found) {
        this.match(this.unit.out('normal')).tag('Unit');
      }
    }

    return this;
  },
  //
  // /**5th -> 5 */
  toCardinal: function toCardinal() {
    var num = parse(this.val);

    if (num || num === 0) {
      var str = '';

      if (this.val.has('#TextValue')) {
        str = fmt.text(num);
      } else {
        str = num;
      }

      if (this.unit.found) {
        str = str + this.unit.out('text');
      }

      this.replaceWith(str, true).tag('Cardinal'); //make sure unit gets the right tag..

      if (this.unit.found) {
        this.match(this.unit.out('normal')).tag('Unit');
      }
    }

    return this;
  },
  //
  // /**5 -> 5th */
  toOrdinal: function toOrdinal() {
    var num = parse(this.val);

    if (num || num === 0) {
      var str = '';

      if (this.val.has('#TextValue')) {
        str = fmt.textOrdinal(num);
      } else {
        str = fmt.ordinal(num);
      }

      if (this.unit.found) {
        str = str + this.unit.out('text');
      }

      this.replaceWith(str, true).tag('Ordinal'); //make sure unit gets the right tag..

      if (this.unit.found) {
        this.match(this.unit.out('normal')).tag('Unit');
      }
    }

    return this;
  },
  //
  // /**5900 -> 5,900 */
  toNice: function toNice() {
    var num = parse(this.val);

    if (num || num === 0) {
      var str = '';

      if (this.val.has('#Ordinal')) {
        str = fmt.niceOrdinal(num);
      } else {
        str = fmt.nice(num);
      }

      if (this.unit.found) {
        str = str + this.unit.out('text');
      }

      this.replaceWith(str, true).tag('NumericValue'); //make sure unit gets the right tag..

      if (this.unit.found) {
        this.match(this.unit.out('normal')).tag('Unit');
      }
    }

    return this;
  },

  /** seven + 2 = nine */
  add: function add(n) {
    if (!n) {
      return this;
    }

    var num = parse(this.val) || 0;
    num += n; //add it

    return setNumber(this, num);
  },

  /** seven - 2 = five */
  subtract: function subtract(n) {
    if (!n) {
      return this;
    }

    var num = parse(this.val) || 0;
    num -= n; //subtract it

    return setNumber(this, num);
  },

  /**seven -> 'eight' */
  increment: function increment() {
    return this.add(1);
  },

  /**seven -> 'six' */
  decrement: function decrement() {
    return this.subtract(1);
  }
};
Object.keys(methods).forEach(function (k) {
  Value.prototype[k] = methods[k];
});
module.exports = Value;

},{"../../paths":8,"./format":59,"./parse":66}],75:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('../../text');

var Verb = _dereq_('./verb'); //the () subset class


var methods = {
  conjugation: function conjugation(verbose) {
    return this.list.map(function (ts) {
      return ts.conjugation(verbose);
    });
  },
  conjugate: function conjugate(num, verbose) {
    //suppport only conjugating one verb in our result..
    if (num !== null && typeof num === 'number' && this.list[num]) {
      return this.list[num].conjugate(verbose);
    } //otherwise, return an array of conjugations


    return this.list.map(function (ts) {
      return ts.conjugate(verbose);
    });
  },

  /** plural/singular **/
  isPlural: function isPlural() {
    this.list = this.list.filter(function (ts) {
      return ts.isPlural();
    });
    return this;
  },
  isSingular: function isSingular() {
    this.list = this.list.filter(function (ts) {
      return !ts.isPlural();
    });
    return this;
  },

  /** negation **/
  isNegative: function isNegative() {
    this.list = this.list.filter(function (ts) {
      return ts.isNegative();
    });
    return this;
  },
  isPositive: function isPositive() {
    this.list = this.list.filter(function (ts) {
      return !ts.isNegative();
    });
    return this;
  },
  toNegative: function toNegative() {
    this.list = this.list.map(function (ts) {
      return ts.toNegative();
    });
    return this;
  },
  toPositive: function toPositive() {
    this.list.forEach(function (ts) {
      ts.toPositive();
    });
    return this;
  },

  /** tense **/
  toPastTense: function toPastTense() {
    this.list.forEach(function (ts) {
      ts.toPastTense();
    });
    return this;
  },
  toPresentTense: function toPresentTense() {
    this.list.forEach(function (ts) {
      ts.toPresentTense();
    });
    return this;
  },
  toFutureTense: function toFutureTense() {
    this.list.forEach(function (ts) {
      ts.toFutureTense();
    });
    return this;
  },
  toInfinitive: function toInfinitive() {
    this.list.forEach(function (ts) {
      ts.toInfinitive();
    });
    return this;
  },
  toGerund: function toGerund() {
    this.list.forEach(function (ts) {
      ts.toGerund();
    });
    return this;
  },
  asAdjective: function asAdjective() {
    return this.list.map(function (ts) {
      return ts.asAdjective();
    });
  }
}; //aliases

methods.toContinuous = methods.toGerund;

var find = function find(r, n) {
  r = r.match('(#Adverb|#Auxiliary|#Verb|#Negative|#Particle)+');
  r = r.splitAfter('#Comma');
  r = r.if('#Verb'); //this should be (much) smarter

  if (typeof n === 'number') {
    r = r.get(n);
  }

  r.list = r.list.map(function (ts) {
    return new Verb(ts.terms, ts.world, ts.refText, ts.refTerms);
  });
  return new Text(r.list, this.world, this.parent);
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./verb":94}],76:[function(_dereq_,module,exports){
'use strict';

var predict = _dereq_('./methods/predict');

var isPlural = _dereq_('./methods/isPlural'); //'walking' - aka progressive


var isContinuous = function isContinuous(ts) {
  return ts.match('#Gerund').found;
}; //will not walk


var isNegative = function isNegative(ts) {
  var negs = ts.match('#Negative').list;

  if (negs.length === 2) {
    return false;
  }

  if (negs.length === 1) {
    return true;
  }

  return false;
}; //been walked by..


var isPassive = function isPassive(ts) {
  if (ts.match('is being #PastTense').found) {
    return true;
  }

  if (ts.match('(had|has) been #PastTense').found) {
    return true;
  }

  if (ts.match('will have been #PastTense').found) {
    return true;
  }

  return false;
}; //had walked


var isPerfect = function isPerfect(ts) {
  if (ts.match('^(had|have) #PastTense')) {
    return true;
  }

  return false;
}; //should walk, could walk


var getModal = function getModal(ts) {
  var modal = ts.match('#Modal');

  if (!modal.found) {
    return null;
  }

  return modal.out('normal');
}; //past/present/future


var getTense = function getTense(ts) {
  //look at the preceding words
  if (ts.auxiliary.found) {
    //'will'
    if (ts.match('will have #PastTense').found) {
      return 'Past';
    }

    if (ts.auxiliary.match('will').found) {
      return 'Future';
    } //'was'


    if (ts.auxiliary.match('was').found) {
      return 'Past';
    }
  } //look at the main verb tense


  if (ts.verb) {
    var tenses = {
      PastTense: 'Past',
      FutureTense: 'Future',
      FuturePerfect: 'Future'
    };
    var tense = predict(ts.verb); //yikes

    return tenses[tense] || 'Present';
  }

  return 'Present';
}; // const isImperative = function(ts) {};
// const isConditional = function(ts) {};
// detect signals in Auxiliary verbs
// 'will' -> future, 'have'->perfect, modals, negatives, adverbs


var interpret = function interpret(ts) {
  var isNeg = isNegative(ts); // let aux = ts.Auxiliary.clone();
  // aux = aux.not('(#Negative|#Adverb)');

  var obj = {
    negative: isNeg,
    continuous: isContinuous(ts),
    passive: isPassive(ts),
    perfect: isPerfect(ts),
    plural: isPlural(ts),
    modal: getModal(ts),
    tense: getTense(ts)
  };
  return obj;
};

module.exports = interpret;

},{"./methods/isPlural":86,"./methods/predict":87}],77:[function(_dereq_,module,exports){
'use strict';

var checkIrregulars = _dereq_('./irregulars');

var suffixPass = _dereq_('./suffixes');

var toActor = _dereq_('./toActor');

var generic = _dereq_('./generic');

var predict = _dereq_('../predict');

var toInfinitive = _dereq_('../toInfinitive');

var toBe = _dereq_('./toBe'); //turn a verb into all it's forms


var conjugate = function conjugate(t, world) {
  //handle is/was/will-be specially
  if (t.normal === 'is' || t.normal === 'was' || t.normal === 'will') {
    return toBe();
  } //dont conjugate didn't


  if (t.tags.Contraction) {
    t.text = t.silent_term;
  }

  var all = {
    PastTense: null,
    PresentTense: null,
    Infinitive: null,
    Gerund: null,
    Actor: null
  }; //first, get its current form

  var form = predict(t);

  if (form) {
    all[form] = t.normal;
  }

  if (form !== 'Infinitive') {
    all['Infinitive'] = toInfinitive(t, world) || '';
  } //check irregular forms


  var irregObj = checkIrregulars(all['Infinitive'], world) || {};
  Object.keys(irregObj).forEach(function (k) {
    if (irregObj[k] && !all[k]) {
      all[k] = irregObj[k];
    }
  }); //ok, send this infinitive to all conjugators

  var inf = all['Infinitive'] || t.normal; //check suffix rules

  var suffObj = suffixPass(inf);
  Object.keys(suffObj).forEach(function (k) {
    if (suffObj[k] && !all[k]) {
      all[k] = suffObj[k];
    }
  }); //ad-hoc each missing form
  //to Actor

  if (!all.Actor) {
    all.Actor = toActor(inf);
  } //use fallback, generic transformations


  Object.keys(all).forEach(function (k) {
    if (!all[k] && generic[k]) {
      all[k] = generic[k](all);
    }
  });
  return all;
};

module.exports = conjugate;

},{"../predict":87,"../toInfinitive":90,"./generic":80,"./irregulars":82,"./suffixes":83,"./toActor":84,"./toBe":85}],78:[function(_dereq_,module,exports){
"use strict";

module.exports = [{
  reg: /(eave)$/i,
  repl: {
    pr: '$1s',
    pa: '$1d',
    gr: 'eaving',
    ar: '$1r'
  }
}, {
  reg: /(ink)$/i,
  repl: {
    pr: '$1s',
    pa: 'unk',
    gr: '$1ing',
    ar: '$1er'
  }
}, {
  reg: /([aeiou]k)in$/i,
  repl: {
    pr: '$1s',
    pa: '$1ed',
    gr: '$1ing',
    ar: '$1er'
  }
}, {
  reg: /(end)$/i,
  repl: {
    pr: '$1s',
    pa: 'ent',
    gr: '$1ing',
    ar: '$1er'
  }
}, {
  reg: /(ide)$/i,
  repl: {
    pr: '$1s',
    pa: 'ode',
    gr: 'iding',
    ar: 'ider'
  }
}, {
  reg: /(ake)$/i,
  repl: {
    pr: '$1s',
    pa: 'ook',
    gr: 'aking',
    ar: '$1r'
  }
}, {
  reg: /(eed)$/i,
  repl: {
    pr: '$1s',
    pa: '$1ed',
    gr: '$1ing',
    ar: '$1er'
  }
}, {
  reg: /(e)(ep)$/i,
  repl: {
    pr: '$1$2s',
    pa: '$1pt',
    gr: '$1$2ing',
    ar: '$1$2er'
  }
}, {
  reg: /(a[tg]|i[zn]|ur|nc|gl|is)e$/i,
  repl: {
    pr: '$1es',
    pa: '$1ed',
    gr: '$1ing',
    prt: '$1en'
  }
}, {
  reg: /([i|f|rr])y$/i,
  repl: {
    pr: '$1ies',
    pa: '$1ied',
    gr: '$1ying'
  }
}, {
  reg: /([td]er)$/i,
  repl: {
    pr: '$1s',
    pa: '$1ed',
    gr: '$1ing'
  }
}, {
  reg: /([bd]l)e$/i,
  repl: {
    pr: '$1es',
    pa: '$1ed',
    gr: '$1ing'
  }
}, {
  reg: /(ish|tch|ess)$/i,
  repl: {
    pr: '$1es',
    pa: '$1ed',
    gr: '$1ing'
  }
}, {
  reg: /(ion|end|e[nc]t)$/i,
  repl: {
    pr: '$1s',
    pa: '$1ed',
    gr: '$1ing'
  }
}, {
  reg: /(om)e$/i,
  repl: {
    pr: '$1es',
    pa: 'ame',
    gr: '$1ing'
  }
}, {
  reg: /(.eat)$/i,
  repl: {
    pr: '$1s',
    pa: '$1ed',
    gr: '$1ing'
  }
}, {
  reg: /([aeiu])([pt])$/i,
  repl: {
    pr: '$1$2s',
    pa: '$1$2',
    gr: '$1$2$2ing'
  }
}, {
  reg: /(er)$/i,
  repl: {
    pr: '$1s',
    pa: '$1ed',
    gr: '$1ing'
  }
}, {
  reg: /(en)$/i,
  repl: {
    pr: '$1s',
    pa: '$1ed',
    gr: '$1ing'
  }
}, {
  reg: /(ed)$/i,
  repl: {
    pr: '$1s',
    pa: '$1ded',
    ar: '$1der',
    gr: '$1ding'
  }
}, {
  reg: /(..)(ow)$/i,
  repl: {
    pr: '$1$2s',
    pa: '$1ew',
    gr: '$1$2ing',
    prt: '$1$2n'
  }
}, {
  reg: /(..)([cs]h)$/i,
  repl: {
    pr: '$1$2es',
    pa: '$1$2ed',
    gr: '$1$2ing'
  }
}, {
  reg: /([^aeiou][ou])(g|d)$/i,
  repl: {
    pr: '$1$2s',
    pa: '$1$2$2ed',
    gr: '$1$2$2ing'
  }
}, {
  reg: /([^aeiou][aeiou])(b|t|p|m)$/i,
  repl: {
    pr: '$1$2s',
    pa: '$1$2$2ed',
    gr: '$1$2$2ing'
  }
}, {
  reg: /([aeiou]zz)$/i,
  repl: {
    pr: '$1es',
    pa: '$1ed',
    gr: '$1ing'
  }
}];

},{}],79:[function(_dereq_,module,exports){
'use strict';

var checkIrregulars = _dereq_('./irregulars');

var suffixPass = _dereq_('./suffixes');

var generic = _dereq_('./generic'); //this method is the same as regular conjugate, but optimised for use in the lexicon during warm-up.
//it's way faster because it knows input is already infinitive


var want = ['Gerund', 'PastTense', 'PresentTense'];

var fasterConjugate = function fasterConjugate(inf, world) {
  var all = {
    Infinitive: inf
  }; //check irregulars list

  if (world && world.conjugations) {
    var irregObj = checkIrregulars(all['Infinitive'], world);

    if (irregObj !== null) {
      Object.keys(irregObj).forEach(function (k) {
        if (irregObj[k] && !all[k]) {
          all[k] = irregObj[k];
        }
      });
    }
  } //check suffix rules


  var suffObj = suffixPass(inf);
  Object.keys(suffObj).forEach(function (k) {
    if (suffObj[k] && !all[k]) {
      all[k] = suffObj[k];
    }
  });

  for (var i = 0; i < want.length; i++) {
    if (all[want[i]] === undefined) {
      all[want[i]] = generic[want[i]](all);
    }
  }

  return all;
};

module.exports = fasterConjugate; // console.log(fasterConjugate('repeat'));

},{"./generic":80,"./irregulars":82,"./suffixes":83}],80:[function(_dereq_,module,exports){
'use strict'; //non-specifc, 'hail-mary' transforms from infinitive, into other forms

var hasY = /[bcdfghjklmnpqrstvwxz]y$/;
var generic = {
  Gerund: function Gerund(o) {
    var inf = o.Infinitive;

    if (inf.charAt(inf.length - 1) === 'e') {
      return inf.replace(/e$/, 'ing');
    }

    return inf + 'ing';
  },
  PresentTense: function PresentTense(o) {
    var inf = o.Infinitive;

    if (inf.charAt(inf.length - 1) === 's') {
      return inf + 'es';
    }

    if (hasY.test(inf) === true) {
      return inf.slice(0, -1) + 'ies';
    }

    return inf + 's';
  },
  PastTense: function PastTense(o) {
    var inf = o.Infinitive;

    if (inf.charAt(inf.length - 1) === 'e') {
      return inf + 'd';
    }

    if (inf.substr(-2) === 'ed') {
      return inf;
    }

    if (hasY.test(inf) === true) {
      return inf.slice(0, -1) + 'ied';
    }

    return inf + 'ed';
  } // FutureTense: (o) => {
  //   return 'will ' + o.Infinitive;
  // },
  //
  // PerfectTense: (o) => {
  //   return 'have ' + (o.Participle || o.PastTense);
  // },
  //
  // Pluperfect: (o) => {
  //   if (o.PastTense) {
  //     return 'had ' + o.PastTense;
  //   }
  //   return null;
  // },
  // FuturePerfect: (o) => {
  //   if (o.PastTense) {
  //     return 'will have ' + o.PastTense;
  //   }
  //   return null;
  // }

};
module.exports = generic;

},{}],81:[function(_dereq_,module,exports){
'use strict';

var conjugate = _dereq_('./conjugate');

var toBe = _dereq_('./toBe');

var addAdverbs = function addAdverbs(obj, vb) {
  if (vb.adverbs.found) {
    //does the adverb go at the start or end?
    var isFirst = vb.first().match('#Adverb').found;
    Object.keys(obj).forEach(function (k) {
      if (isFirst) {
        obj[k] = vb.adverbs.out() + ' ' + obj[k];
      } else {
        obj[k] = obj[k] + vb.adverbs.out();
      }
    });
  }

  return obj;
}; //conjugation using auxillaries+adverbs and stuff


var multiWordConjugate = function multiWordConjugate(vb, verbose) {
  var isNegative = vb.negative.found;
  var isPlural = vb.isPlural(); //handle 'to be' verb seperately

  if (vb.verb.tags.Copula || vb.verb.normal === 'be' && vb.auxiliary.match('will').found) {
    var isI = false; //account for 'i is' -> 'i am' irregular

    if (vb.parent && vb.parent.has('i #Adverb? #Copula')) {
      isI = true;
    }

    var copulas = toBe(isPlural, isNegative, isI);
    return addAdverbs(copulas, vb);
  }

  var obj = conjugate(vb.verb, vb.world, verbose); //apply particles

  if (vb.particle.found) {
    Object.keys(obj).forEach(function (k) {
      obj[k] = obj[k] + vb.particle.out();
    });
  } //apply negative


  if (isNegative) {
    obj.PastTense = 'did not ' + obj.Infinitive;
    obj.PresentTense = 'does not ' + obj.Infinitive;
    obj.Gerund = 'not ' + obj.Gerund;
  } //future Tense is pretty straightforward


  if (!obj.FutureTense) {
    if (isNegative) {
      obj.FutureTense = 'will not ' + obj.Infinitive;
    } else {
      obj.FutureTense = 'will ' + obj.Infinitive;
    }
  } //apply adverbs


  obj = addAdverbs(obj, vb);
  return obj;
};

module.exports = multiWordConjugate;

},{"./conjugate":77,"./toBe":85}],82:[function(_dereq_,module,exports){
'use strict'; // let irregulars = require('../../../../lexicon/uncompressed/irregularVerbs').irregulars; //weeee!

var fns = _dereq_('../../../../fns'); //weeee!


var forms = ['Participle', 'Gerund', 'PastTense', 'PresentTense', 'FuturePerfect', 'PerfectTense', 'Actor'];

var checkIrregulars = function checkIrregulars(str, world) {
  var irregulars = world.conjugations;
  var infArr = Object.keys(irregulars); //check irregulars in world

  if (world && world.conjugations && world.conjugations.hasOwnProperty(str) === true) {
    return world.conjugations[str];
  } //fast infinitive lookup


  if (irregulars.hasOwnProperty(str) === true) {
    var obj = fns.copy(irregulars[str]);
    obj.Infinitive = str;
    return obj;
  } //longer check of known-verb forms


  for (var i = 0; i < infArr.length; i++) {
    for (var o = 0; o < forms.length; o++) {
      var irObj = irregulars[infArr[i]];

      if (irObj[forms[o]] === str) {
        var _obj = fns.copy(irObj);

        _obj.Infinitive = infArr[i];
        return _obj;
      }
    }
  }

  return {};
};

module.exports = checkIrregulars; // console.log(checkIrregulars('bit'));

},{"../../../../fns":3}],83:[function(_dereq_,module,exports){
'use strict';

var rules = _dereq_('./data/rules');

var mapping = {
  pr: 'PresentTense',
  pa: 'PastTense',
  gr: 'Gerund',
  prt: 'Participle',
  ar: 'Actor'
};
var keys = Object.keys(mapping); //check suffix rules

var suffixPass = function suffixPass(inf) {
  var found = {};

  for (var i = 0; i < rules.length; i++) {
    if (rules[i].reg.test(inf) === true) {
      var obj = rules[i].repl;

      for (var o = 0; o < keys.length; o++) {
        if (obj.hasOwnProperty(keys[o]) === true) {
          var key = mapping[keys[o]]; // console.log(rules[i]);

          found[key] = inf.replace(rules[i].reg, obj[keys[o]]);
        }
      }

      return found;
    }
  }

  return found;
};

module.exports = suffixPass;

},{"./data/rules":78}],84:[function(_dereq_,module,exports){
'use strict'; //turn 'walk' into 'walker'

var irregulars = {
  'tie': 'tier',
  'dream': 'dreamer',
  'sail': 'sailer',
  'run': 'runner',
  'rub': 'rubber',
  'begin': 'beginner',
  'win': 'winner',
  'claim': 'claimant',
  'deal': 'dealer',
  'spin': 'spinner'
};
var dont = {
  'aid': 1,
  'fail': 1,
  'appear': 1,
  'happen': 1,
  'seem': 1,
  'try': 1,
  'say': 1,
  'marry': 1,
  'be': 1,
  'forbid': 1,
  'understand': 1,
  'bet': 1
};
var rules = [{
  'reg': /e$/i,
  'repl': 'er'
}, {
  'reg': /([aeiou])([mlgp])$/i,
  'repl': '$1$2$2er'
}, {
  'reg': /([rlf])y$/i,
  'repl': '$1ier'
}, {
  'reg': /^(.?.[aeiou])t$/i,
  'repl': '$1tter'
}];

var toActor = function toActor(inf) {
  //check blacklist
  if (dont[inf]) {
    return null;
  } //check irregulars


  if (irregulars.hasOwnProperty(inf)) {
    return irregulars[inf];
  } //try rules


  for (var i = 0; i < rules.length; i++) {
    if (rules[i].reg.test(inf) === true) {
      return inf.replace(rules[i].reg, rules[i].repl);
    }
  } //yup,


  return inf + 'er';
};

module.exports = toActor;

},{}],85:[function(_dereq_,module,exports){
'use strict'; //too many special cases for is/was/will be

var toBe = function toBe(isPlural, isNegative, isI) {
  var obj = {
    PastTense: 'was',
    PresentTense: 'is',
    FutureTense: 'will be',
    Infinitive: 'is',
    Gerund: 'being',
    Actor: '',
    PerfectTense: 'been',
    Pluperfect: 'been'
  }; //"i is" -> "i am"

  if (isI === true) {
    obj.PresentTense = 'am';
    obj.Infinitive = 'am';
  }

  if (isPlural) {
    obj.PastTense = 'were';
    obj.PresentTense = 'are';
    obj.Infinitive = 'are';
  }

  if (isNegative) {
    obj.PastTense += ' not';
    obj.PresentTense += ' not';
    obj.FutureTense = 'will not be';
    obj.Infinitive += ' not';
    obj.PerfectTense = 'not ' + obj.PerfectTense;
    obj.Pluperfect = 'not ' + obj.Pluperfect;
    obj.Gerund = 'not ' + obj.Gerund;
  }

  return obj;
};

module.exports = toBe;

},{}],86:[function(_dereq_,module,exports){
'use strict'; //sometimes you can tell if a verb is plural/singular, just by the verb
// i am / we were
//othertimes you need its noun 'we walk' vs 'i walk'

var isPlural = function isPlural(vb) {
  if (vb.match('(are|were|does)').found) {
    return true;
  }

  if (vb.match('(is|am|do|was)').found) {
    return false;
  } //consider its prior noun


  var noun = vb.getNoun();

  if (noun && noun.found) {
    if (noun.match('#Plural').found) {
      return true;
    }

    if (noun.match('#Singular').found) {
      return false;
    }
  }

  return null;
};

module.exports = isPlural;

},{}],87:[function(_dereq_,module,exports){
'use strict';

var suffix_rules = _dereq_('./suffix_rules');

var goodTypes = {
  Infinitive: true,
  Gerund: true,
  PastTense: true,
  PresentTense: true,
  FutureTense: true,
  PerfectTense: true,
  Pluperfect: true,
  FuturePerfect: true,
  Participle: true
};

var predictForm = function predictForm(term) {
  //do we already know the form?
  var keys = Object.keys(goodTypes);

  for (var i = 0; i < keys.length; i++) {
    if (term.tags[keys[i]]) {
      return keys[i];
    }
  } //consult our handy suffix rules


  var arr = Object.keys(suffix_rules);

  for (var _i = 0; _i < arr.length; _i++) {
    var substr = term.normal.substr(-arr[_i].length);

    if (substr === arr[_i] && term.normal.length > arr[_i].length) {
      return suffix_rules[arr[_i]];
    }
  }

  return null;
};

module.exports = predictForm;

},{"./suffix_rules":88}],88:[function(_dereq_,module,exports){
'use strict'; //suffix signals for verb tense, generated from test data

var compact = {
  'Gerund': ['ing'],
  'Actor': ['erer'],
  'Infinitive': ['ate', 'ize', 'tion', 'rify', 'then', 'ress', 'ify', 'age', 'nce', 'ect', 'ise', 'ine', 'ish', 'ace', 'ash', 'ure', 'tch', 'end', 'ack', 'and', 'ute', 'ade', 'ock', 'ite', 'ase', 'ose', 'use', 'ive', 'int', 'nge', 'lay', 'est', 'ain', 'ant', 'ent', 'eed', 'er', 'le', 'own', 'unk', 'ung', 'en'],
  'PastTense': ['ed', 'lt', 'nt', 'pt', 'ew', 'ld'],
  'PresentTense': ['rks', 'cks', 'nks', 'ngs', 'mps', 'tes', 'zes', 'ers', 'les', 'acks', 'ends', 'ands', 'ocks', 'lays', 'eads', 'lls', 'els', 'ils', 'ows', 'nds', 'ays', 'ams', 'ars', 'ops', 'ffs', 'als', 'urs', 'lds', 'ews', 'ips', 'es', 'ts', 'ns', 's']
};
var suffix_rules = {};
var keys = Object.keys(compact);
var l = keys.length;

for (var i = 0; i < l; i++) {
  var l2 = compact[keys[i]].length;

  for (var o = 0; o < l2; o++) {
    suffix_rules[compact[keys[i]][o]] = keys[i];
  }
}

module.exports = suffix_rules;

},{}],89:[function(_dereq_,module,exports){
'use strict'; //turn a infinitiveVerb, like "walk" into an adjective like "walkable"

var rules = [[/y$/, 'i'], //relay - reliable
[/([aeiou][n])$/, '$1n']]; //convert - 'convertible'
//http://grammarist.com/usage/able-ible/
//http://blog.oxforddictionaries.com/2012/10/ibles-and-ables/

var ible_suffixes = {
  collect: true,
  exhaust: true,
  convert: true,
  digest: true,
  discern: true,
  dismiss: true,
  reverse: true,
  access: true,
  collapse: true,
  express: true
};
var irregulars = {
  eat: 'edible',
  hear: 'audible',
  see: 'visible',
  defend: 'defensible',
  write: 'legible',
  move: 'movable',
  divide: 'divisible',
  perceive: 'perceptible'
}; //takes an infitive verb, and returns an adjective form

var toAdjective = function toAdjective(str) {
  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  }

  for (var i = 0; i < rules.length; i++) {
    if (rules[i][0].test(str) === true) {
      str = str.replace(rules[i][0], rules[i][1]);
    }
  } //ible/able


  var adj = str + 'able';

  if (ible_suffixes[str]) {
    adj = str + 'ible';
  }

  return adj;
};

module.exports = toAdjective;

},{}],90:[function(_dereq_,module,exports){
'use strict'; //turn any verb into its infinitive form

var rules = _dereq_('./rules');

var predict = _dereq_('../predict');

var toInfinitive = function toInfinitive(t, world) {
  var irregulars = world.cache.toInfinitive || {}; //verb_mapping(world.conjugations); //TODO: do this at world cache

  if (t.tags.Infinitive) {
    return t.normal;
  } //check the irregular verb conjugations


  if (irregulars.hasOwnProperty(t.normal) === true) {
    return irregulars[t.normal];
  } //check the suffix rules


  var form = predict(t);

  if (rules[form]) {
    for (var i = 0; i < rules[form].length; i++) {
      var rule = rules[form][i];

      if (t.normal.match(rule.reg)) {
        return t.normal.replace(rule.reg, rule.to);
      }
    }
  }

  return t.normal;
};

module.exports = toInfinitive;

},{"../predict":87,"./rules":91}],91:[function(_dereq_,module,exports){
'use strict'; //rules for turning a verb into infinitive form

var rules = {
  Participle: [{
    reg: /own$/i,
    to: 'ow'
  }, {
    reg: /(.)un([g|k])$/i,
    to: '$1in$2'
  }],
  Actor: [{
    reg: /(er)er$/i,
    to: '$1'
  }],
  PresentTense: [{
    reg: /(..)(ies)$/i,
    to: '$1y'
  }, {
    reg: /(tch|sh)es$/i,
    to: '$1'
  }, {
    reg: /(ss|zz)es$/i,
    to: '$1'
  }, {
    reg: /([tzlshicgrvdnkmu])es$/i,
    to: '$1e'
  }, {
    reg: /(n[dtk]|c[kt]|[eo]n|i[nl]|er|a[ytrl])s$/i,
    to: '$1'
  }, {
    reg: /(ow)s$/i,
    to: '$1'
  }, {
    reg: /(op)s$/i,
    to: '$1'
  }, {
    reg: /([eirs])ts$/i,
    to: '$1t'
  }, {
    reg: /(ll)s$/i,
    to: '$1'
  }, {
    reg: /(el)s$/i,
    to: '$1'
  }, {
    reg: /(ip)es$/i,
    to: '$1e'
  }, {
    reg: /ss$/i,
    to: 'ss'
  }, {
    reg: /s$/i,
    to: ''
  }],
  Gerund: [{
    reg: /pping$/i,
    to: 'p'
  }, {
    reg: /lling$/i,
    to: 'll'
  }, {
    reg: /tting$/i,
    to: 't'
  }, {
    reg: /dding$/i,
    to: 'd'
  }, {
    reg: /ssing$/i,
    to: 'ss'
  }, {
    reg: /(..)gging$/i,
    to: '$1g'
  }, {
    reg: /([^aeiou])ying$/i,
    to: '$1y'
  }, {
    reg: /([^ae]i.)ing$/i,
    to: '$1e'
  }, {
    reg: /(ea.)ing$/i,
    to: '$1'
  }, {
    reg: /(u[rtcb]|[bdtpkg]l|n[cg]|a[gdkvtc]|[ua]s|[dr]g|yz|o[rlsp]|cre)ing$/i,
    to: '$1e'
  }, {
    reg: /(ch|sh)ing$/i,
    to: '$1'
  }, {
    reg: /(..)ing$/i,
    to: '$1'
  }],
  PastTense: [{
    reg: /(ued)$/i,
    to: 'ue'
  }, {
    reg: /a([^aeiouy])ed$/i,
    to: 'a$1e'
  }, {
    reg: /([aeiou]zz)ed$/i,
    to: '$1'
  }, {
    reg: /(e|i)lled$/i,
    to: '$1ll'
  }, {
    reg: /(.)(sh|ch)ed$/i,
    to: '$1$2'
  }, {
    reg: /(tl|gl)ed$/i,
    to: '$1e'
  }, {
    reg: /(um?pt?)ed$/i,
    to: '$1'
  }, {
    reg: /(ss)ed$/i,
    to: '$1'
  }, {
    reg: /pped$/i,
    to: 'p'
  }, {
    reg: /tted$/i,
    to: 't'
  }, {
    reg: /(..)gged$/i,
    to: '$1g'
  }, {
    reg: /(..)lked$/i,
    to: '$1lk'
  }, {
    reg: /([^aeiouy][aeiou])ked$/i,
    to: '$1ke'
  }, {
    reg: /(.[aeiou])led$/i,
    to: '$1l'
  }, {
    reg: /(..)(h|ion|n[dt]|ai.|[cs]t|pp|all|ss|tt|int|ail|ld|en|oo.|er|k|pp|w|ou.|rt|ght|rm)ed$/i,
    to: '$1$2'
  }, {
    reg: /(.ut)ed$/i,
    to: '$1e'
  }, {
    reg: /(.pt)ed$/i,
    to: '$1'
  }, {
    reg: /(us)ed$/i,
    to: '$1e'
  }, {
    reg: /(..[^aeiouy])ed$/i,
    to: '$1e'
  }, {
    reg: /(..)ied$/i,
    to: '$1y'
  }, {
    reg: /(.o)ed$/i,
    to: '$1o'
  }, {
    reg: /(..i)ed$/i,
    to: '$1'
  }, {
    reg: /(.a[^aeiou])ed$/i,
    to: '$1'
  }, {
    reg: /([rl])ew$/i,
    to: '$1ow'
  }, {
    reg: /([pl])t$/i,
    to: '$1t'
  }]
};
module.exports = rules;

},{}],92:[function(_dereq_,module,exports){
"use strict";

//these are contractions with a implicit verb.
var expand = function expand(vb) {
  vb.match('#Contraction+').list.forEach(function (ts) {
    if (ts.has('#Verb')) {
      ts.terms.forEach(function (t) {
        if (t.silent_term) {
          //this term also needs a space now too
          if (!t.text) {
            t.whitespace.before = ' ';
          }

          t._text = t.silent_term; //handle (some) capitalization

          if (t.tags.TitleCase) {
            t.toTitleCase();
          }

          t.normalize();
          t.silent_term = null;
          t.unTag('Contraction', 'expanded');
        }
      });
    }
  });
  return vb;
};

module.exports = expand;

},{}],93:[function(_dereq_,module,exports){
'use strict'; //turns a verb negative - may not have enough information to do it properly
// (eg 'did not eat' vs 'does not eat') - needs the noun

var toInfinitive = _dereq_('./methods/toInfinitive'); //this methods operate on parentTerms, so return subset


var getVerb = function getVerb(ts) {
  ts = ts.match('(#Adverb|#Auxiliary|#Verb|#Negative|#Particle)+');
  ts = ts.splitAfter('#Comma');
  return ts.list[0];
};

var toNegative = function toNegative(ts) {
  //would not walk
  var modal = ts.match('#Auxiliary').first(); //.notIf('(is|are|was|will|has|had)').first(); //.first();

  if (modal.found) {
    var index = modal.list[0].index();
    var vb = ts.parentTerms.insertAt(index + 1, 'not', 'Verb');
    vb.match('not').tag('Negative', 'tag-not');
    return getVerb(vb);
  } //words that pair easily with a 'not' - 'is not'


  var copula = ts.match('(#Copula|will|has|had|do)').first();

  if (copula.found) {
    var _index = copula.list[0].index();

    var _vb = ts.parentTerms.insertAt(_index + 1, 'not', 'Verb');

    _vb.match('not').tag('Negative', 'tag-not');

    return getVerb(_vb);
  }

  var isPlural = ts.isPlural(); //walked -> did not walk

  var past = ts.match('#PastTense').last();

  if (past.found) {
    // past.debug();
    var first = past.list[0];

    var _index2 = first.index();

    first.terms[0].text = toInfinitive(first.terms[0], ts.world);

    var _vb2 = ts.parentTerms.insertAt(_index2, 'did not', 'Verb'); //add 'do not'?


    _vb2.match('not').tag('Negative', 'tag-not');

    return getVerb(_vb2);
  } //walks -> does not walk


  var pres = ts.match('#PresentTense').first();

  if (pres.found) {
    var _first = pres.list[0];

    var _index3 = _first.index();

    _first.terms[0].text = toInfinitive(_first.terms[0], ts.world); //some things use 'do not', everything else is 'does not'

    var noun = ts.getNoun();
    var _vb3 = null;

    if (noun.match('(i|we|they|you)').found) {
      _vb3 = ts.parentTerms.insertAt(_index3, 'do not', 'Verb');
    } else {
      _vb3 = ts.parentTerms.insertAt(_index3, 'does not', 'Verb');
    }

    _vb3.match('not').tag('Negative', 'tag-not');

    return getVerb(_vb3);
  } //not walking


  var gerund = ts.match('#Gerund').last();

  if (gerund.found) {
    var _index4 = gerund.list[0].index();

    var _vb4 = ts.parentTerms.insertAt(_index4, 'not', 'Verb');

    _vb4.match('not').tag('Negative', 'tag-not');

    return getVerb(_vb4);
  } //walk -> do not walk


  var verb = ts.match('#Verb').last();

  if (verb.found) {
    var _first2 = verb.list[0];

    var _index5 = _first2.index();

    _first2.terms[0].text = toInfinitive(_first2.terms[0], ts.world);
    var _vb5 = ts;

    if (isPlural) {
      _vb5 = ts.parentTerms.insertAt(_index5 - 1, 'do not', 'Verb');
    } else {
      _vb5 = ts.parentTerms.insertAt(_index5 - 1, 'does not', 'Verb');
    }

    _vb5.match('not').tag('Negative', 'tag-not');

    return getVerb(_vb5);
  }

  return ts;
};

module.exports = toNegative;

},{"./methods/toInfinitive":90}],94:[function(_dereq_,module,exports){
'use strict';

var Terms = _dereq_('../../paths').Terms;

var _conjugate = _dereq_('./methods/conjugate');

var toAdjective = _dereq_('./methods/toAdjective');

var interpret = _dereq_('./interpret');

var _toNegative = _dereq_('./toNegative');

var _isPlural = _dereq_('./methods/isPlural');

var expand = _dereq_('./methods/verbContraction');

var _parse = function parse(r) {
  var original = r;
  r.negative = r.match('#Negative');
  r.adverbs = r.match('#Adverb');
  var aux = r.clone().not('(#Adverb|#Negative)');
  r.verb = aux.match('#Verb').not('#Particle').last();
  r.particle = aux.match('#Particle').last();

  if (r.verb.found) {
    var str = r.verb.out('normal');
    r.auxiliary = original.not(str).not('(#Adverb|#Negative)');
    r.verb = r.verb.list[0].terms[0]; // r.auxiliary = aux.match('#Auxiliary+');
  } else {
    r.verb = original.terms[0];
    r.auxiliary = aux.not('.');
  }

  return r;
};

var methods = {
  parse: function parse() {
    return _parse(this);
  },
  data: function data(verbose) {
    return {
      text: this.out('text'),
      normal: this.out('normal'),
      parts: {
        negative: this.negative.out('normal'),
        auxiliary: this.auxiliary.out('normal'),
        verb: this.verb.out('normal'),
        particle: this.particle.out('normal'),
        adverbs: this.adverbs.out('normal')
      },
      interpret: interpret(this, verbose),
      conjugations: this.conjugate()
    };
  },
  getNoun: function getNoun() {
    if (!this.refTerms) {
      return null;
    }

    var str = '#Adjective? #Noun+ ' + this.out('normal');
    return this.refTerms.match(str).match('#Noun+');
  },
  //which conjugation is this right now?
  conjugation: function conjugation() {
    return interpret(this, false).tense;
  },
  //blast-out all forms
  conjugate: function conjugate(verbose) {
    return _conjugate(this, verbose);
  },
  isPlural: function isPlural() {
    return _isPlural(this);
  },

  /** negation **/
  isNegative: function isNegative() {
    return this.match('#Negative').list.length === 1;
  },
  isPerfect: function isPerfect() {
    return this.auxiliary.match('(have|had)').found;
  },
  toNegative: function toNegative() {
    if (this.isNegative()) {
      return this;
    }

    return _toNegative(this);
  },
  toPositive: function toPositive() {
    return this.match('#Negative').delete();
  },

  /** conjugation **/
  toPastTense: function toPastTense() {
    if (this.has('#Contraction')) {
      this.list = expand(this.parentTerms).list;
    }

    var obj = this.conjugate();
    var end = obj.PastTense;
    var r = this.replaceWith(end, false);
    r.verb.tag('#PastTense');
    return r;
  },
  toPresentTense: function toPresentTense() {
    if (this.has('#Contraction')) {
      expand(this.parentTerms);
    }

    var obj = this.conjugate();
    var r = this.replaceWith(obj.PresentTense, false);
    r.verb.tag('#PresentTense');
    return r;
  },
  toFutureTense: function toFutureTense() {
    if (this.has('#Contraction')) {
      expand(this.parentTerms);
    }

    var obj = this.conjugate();
    var r = this.replaceWith(obj.FutureTense, false);
    r.verb.tag('#FutureTense');
    return r;
  },
  toInfinitive: function toInfinitive() {
    if (this.has('#Contraction')) {
      expand(this.parentTerms);
    }

    var obj = this.conjugate();
    var r = this.replaceWith(obj.Infinitive, false);
    r.verb.tag('#Infinitive');
    return r;
  },
  toGerund: function toGerund() {
    if (this.has('#Contraction')) {
      expand(this.parentTerms);
    }

    var obj = this.conjugate();
    var aux = 'is'; //support 'i am', 'we are', 'he is'

    var noun = this.getNoun().out('normal');

    if (noun) {
      var auxList = {
        i: 'am',
        we: 'are',
        they: 'are'
      };

      if (auxList.hasOwnProperty(noun)) {
        aux = auxList[noun];
      }
    }

    var end = aux + ' ' + obj.Gerund; //i would go -> i would have be going
    // if (this.auxiliary && this.auxiliary.has('#Modal') && !this.auxiliary.has('will')) {
    //   end = this.auxiliary.match('#Modal').out() + ' have ' + end;
    // }

    var r = this.replaceWith(end, false);
    r.verb.tag('#Gerund');
    return r;
  },
  asAdjective: function asAdjective() {
    return toAdjective(this.verb.out('normal'));
  }
};

var Verb = function Verb(arr, world, refText, parentTerms) {
  Terms.call(this, arr, world, refText, parentTerms); //basic verb-phrase parsing:

  return _parse(this);
}; //Terms inheritence


Verb.prototype = Object.create(Terms.prototype); //apply methods

Object.keys(methods).forEach(function (k) {
  Verb.prototype[k] = methods[k];
});
module.exports = Verb;

},{"../../paths":8,"./interpret":76,"./methods/conjugate":81,"./methods/isPlural":86,"./methods/toAdjective":89,"./methods/verbContraction":92,"./toNegative":93}],95:[function(_dereq_,module,exports){
'use strict'; //the steps and processes of pos-tagging

var step = {
  punctuation_step: _dereq_('./steps/01-punctuation_step'),
  emoji_step: _dereq_('./steps/02-emoji_step'),
  lexicon_step: _dereq_('./steps/03-lexicon_step'),
  lexicon_multi: _dereq_('./steps/04-lexicon_multi'),
  web_step: _dereq_('./steps/05-web_step'),
  suffix_step: _dereq_('./steps/06-suffix_step'),
  neighbour_step: _dereq_('./steps/07-neighbour_step'),
  capital_step: _dereq_('./steps/08-capital_step'),
  noun_fallback: _dereq_('./steps/09-noun_fallback'),
  contraction: _dereq_('./steps/10-contraction_step'),
  date_step: _dereq_('./steps/11-date_step'),
  auxiliary_step: _dereq_('./steps/12-auxiliary_step'),
  negation_step: _dereq_('./steps/13-negation_step'),
  comma_step: _dereq_('./steps/14-comma_step'),
  quotation_step: _dereq_('./steps/15-quotation_step'),
  possessive_step: _dereq_('./steps/16-possessive_step'),
  acronym_step: _dereq_('./steps/17-acronym_step'),
  person_step: _dereq_('./steps/18-person_step'),
  organization_step: _dereq_('./steps/19-organization_step'),
  parentheses_step: _dereq_('./steps/20-parentheses_step'),
  plural_step: _dereq_('./steps/21-plural_step'),
  value_step: _dereq_('./steps/22-value_step'),
  corrections: _dereq_('./steps/23-corrections'),
  properNoun: _dereq_('./steps/24-proper_noun'),
  custom: _dereq_('./steps/25-custom')
};

var tagPhrase = _dereq_('./phrase');

var tagger = function tagger(ts) {
  ts = step.punctuation_step(ts);
  ts = step.emoji_step(ts);
  ts = step.lexicon_step(ts);
  ts = step.lexicon_multi(ts);
  ts = step.web_step(ts);
  ts = step.suffix_step(ts);
  ts = step.comma_step(ts); //formerly #14

  ts = step.neighbour_step(ts);
  ts = step.capital_step(ts);
  ts = step.noun_fallback(ts);
  ts = step.contraction(ts);
  ts = step.date_step(ts); //3ms

  ts = step.auxiliary_step(ts);
  ts = step.negation_step(ts);
  ts = step.quotation_step(ts);
  ts = step.possessive_step(ts);
  ts = step.acronym_step(ts);
  ts = step.person_step(ts); //1ms

  ts = step.organization_step(ts);
  ts = step.parentheses_step(ts);
  ts = step.plural_step(ts);
  ts = step.value_step(ts);
  ts = step.corrections(ts); //2ms

  ts = step.properNoun(ts);
  ts = tagPhrase(ts);
  ts = step.custom(ts);
  return ts;
};

module.exports = tagger;

},{"./phrase":98,"./steps/01-punctuation_step":99,"./steps/02-emoji_step":100,"./steps/03-lexicon_step":101,"./steps/04-lexicon_multi":102,"./steps/05-web_step":103,"./steps/06-suffix_step":104,"./steps/07-neighbour_step":105,"./steps/08-capital_step":106,"./steps/09-noun_fallback":107,"./steps/10-contraction_step":108,"./steps/11-date_step":109,"./steps/12-auxiliary_step":110,"./steps/13-negation_step":111,"./steps/14-comma_step":112,"./steps/15-quotation_step":113,"./steps/16-possessive_step":114,"./steps/17-acronym_step":115,"./steps/18-person_step":116,"./steps/19-organization_step":117,"./steps/20-parentheses_step":118,"./steps/21-plural_step":119,"./steps/22-value_step":120,"./steps/23-corrections":121,"./steps/24-proper_noun":122,"./steps/25-custom":123}],96:[function(_dereq_,module,exports){
'use strict'; //

var conditionPass = function conditionPass(ts) {
  //'if it really goes, I will..'
  var m = ts.match('#Condition .{1,7} #ClauseEnd'); //make sure it ends on a comma

  if (m.found && m.match('#Comma$')) {
    m.tag('Condition');
  } //'go a bit further, if it then has a pronoun


  m = ts.match('#Condition .{1,13} #ClauseEnd #Pronoun');

  if (m.found && m.match('#Comma$')) {
    m.not('#Pronoun$').tag('Condition', 'end-pronoun');
  } //if it goes then ..


  m = ts.match('#Condition .{1,7} then');

  if (m.found) {
    m.not('then$').tag('Condition', 'cond-then');
  } //as long as ..


  m = ts.match('as long as .{1,7} (then|#ClauseEnd)');

  if (m.found) {
    m.not('then$').tag('Condition', 'as-long-then');
  } //at the end of a sentence:
  //'..., if it really goes.'


  m = ts.match('#Comma #Condition .{1,7} .$');

  if (m.found) {
    m.not('^#Comma').tag('Condition', 'comma-7-end');
  } // '... if so.'


  m = ts.match('#Condition .{1,4}$');

  if (m.found) {
    m.tag('Condition', 'cond-4-end');
  }

  return ts;
};

module.exports = conditionPass;

},{}],97:[function(_dereq_,module,exports){
'use strict'; //a verbPhrase is a sequence of axiliaries, adverbs and verbs

var verbPhrase = function verbPhrase(ts) {
  if (ts.has('(#Verb|#Auxiliary)')) {
    ts.match('#Verb').tag('VerbPhrase', 'verbphrase-verb'); //quickly was

    ts.match('#Adverb #Verb').tag('VerbPhrase', 'adverb-verb'); //was quickly

    ts.match('#Verb #Adverb').tag('VerbPhrase', 'verb-adverb'); //is not

    ts.match('#Verb #Negative').tag('VerbPhrase', 'verb-not'); //never is

    ts.match('never #Verb').tag('VerbPhrase', 'not-verb'); //'will have had'..

    ts.match('#Auxiliary+').tag('VerbPhrase', '2'); // 'is'

    ts.match('#Copula').tag('VerbPhrase', '#3'); //'really will'..

    ts.match('#Adverb #Auxiliary').tag('VerbPhrase', '#4'); //to go
    // ts.match('to #Infinitive').tag('VerbPhrase', '#5');
    //work with
    // ts.match('#Verb #Preposition').tag('VerbPhrase', '#6');
  }

  return ts;
};

module.exports = verbPhrase;

},{}],98:[function(_dereq_,module,exports){
'use strict';

var conditionPass = _dereq_('./00-conditionPass');

var verbPhrase = _dereq_('./01-verbPhrase'); // const nounPhrase = require('./02-nounPhrase');
// const AdjectivePhrase = require('./03-adjectivePhrase');
//


var phraseTag = function phraseTag(ts) {
  ts = conditionPass(ts);
  ts = verbPhrase(ts); // ts = nounPhrase(ts);
  // ts = AdjectivePhrase(ts);

  return ts;
};

module.exports = phraseTag;

},{"./00-conditionPass":96,"./01-verbPhrase":97}],99:[function(_dereq_,module,exports){
'use strict'; //regs-

var titleCase = /^[A-Z][a-z']/;
var romanNum = /^[IVXCM]+$/; //not so smart (right now)

var isRomanNumeral = function isRomanNumeral(t) {
  if (t.text.length > 1 && romanNum.test(t.text) === true) {
    return t.canBe('RomanNumeral');
  }

  return false;
};

var oneLetters = {
  a: true,
  i: true,
  //internet-slang
  u: true,
  r: true,
  c: true,
  k: true
};

var punctuation_step = function punctuation_step(ts) {
  var rules = ts.world.regex || [];
  ts.terms.forEach(function (t, o) {
    var str = t.text; //anything can be titlecase

    if (titleCase.test(str) === true) {
      t.tag('TitleCase', 'punct-rule');
    } //add hyphenation


    if (t.whitespace.after === '-' && ts.terms[o + 1] && ts.terms[o + 1].whitespace.before === '') {
      t.tag('Hyphenated', 'has-hyphen');
      ts.terms[o + 1].tag('Hyphenated', 'has-hyphen');
    } //look at () parentheses


    if (t.text[0] === '(') {
      t.tag('StartBracket');
    } //look at end-brackets (allow some punctuation after)!


    if (/\)[,.?!;:]?$/.test(t.text) === true) {
      t.tag('EndBracket');
    } //ok, normalise it a little,


    str = str.replace(/[,\.\?]$/, ''); //do punctuation rules (on t.text)

    for (var i = 0; i < rules.length; i++) {
      var r = rules[i];

      if (r.reg.test(str) === true) {
        //don't over-write any other known tags
        if (t.canBe(r.tag)) {
          t.tag(r.tag, 'punctuation-rule- "' + r.reg.toString() + '"');
        }

        return;
      }
    } //terms like 'e'


    if (str.length === 1 && ts.terms[o + 1] && /[A-Z]/.test(str) && !oneLetters[str.toLowerCase()]) {
      t.tag('Acronym', 'one-letter-acronym');
    } //roman numerals (weak rn)


    if (isRomanNumeral(t)) {
      t.tag('RomanNumeral', 'is-roman-numeral');
    } //'100+'


    if (/[0-9]\+$/.test(t.text) === true) {
      t.tag('NumericValue', 'number-plus');
    }
  });
  return ts;
};

module.exports = punctuation_step;

},{}],100:[function(_dereq_,module,exports){
'use strict';

var emojiReg = _dereq_('./rules/emoji_regex');

var emoticon = _dereq_('./rules/emoticon_list'); //for us, there's three types -
// * ;) - emoticons
// * 🌵 - unicode emoji
// * :smiling_face: - asci-represented emoji
//test for forms like ':woman_tone2:‍:ear_of_rice:'
//https://github.com/Kikobeats/emojis-keywords/blob/master/index.js


var isColonEmoji = function isColonEmoji(t) {
  if (t.text.charAt(0) === ':') {
    //end comma can be last or second-last ':haircut_tone3:‍♀️'
    if (t.text.match(/:.?$/) === null) {
      return false;
    } //ensure no spaces


    if (t.text.match(' ')) {
      return false;
    } //reasonably sized


    if (t.text.length > 35) {
      return false;
    }

    return true;
  }

  return false;
}; //check against emoticon whitelist


var isEmoticon = function isEmoticon(t) {
  //normalize the 'eyes'
  var str = t.text.replace(/^[:;]/, ':');
  return emoticon.hasOwnProperty(str) === true;
}; //


var emojiStep = function emojiStep(ts) {
  for (var i = 0; i < ts.terms.length; i++) {
    var t = ts.terms[i]; //test for :keyword: emojis

    if (isColonEmoji(t)) {
      t.tag('Emoji', 'colon-emoji');
    } //test for unicode emojis


    if (t.text.match(emojiReg)) {
      t.tag('Emoji', 'unicode-emoji');
    } //test for emoticon ':)' emojis


    if (isEmoticon(t)) {
      t.tag('Emoji', 'emoticon-emoji');
    }
  }

  return ts;
};

module.exports = emojiStep;

},{"./rules/emoji_regex":130,"./rules/emoticon_list":131}],101:[function(_dereq_,module,exports){
'use strict';

var split = _dereq_('./contraction/split'); // const l = require('../../lexicon/init');
// const lexicon = l.lexicon;


var lexicon_pass = function lexicon_pass(ts) {
  var lexicon = ts.world.words || {}; //loop through each term

  for (var i = 0; i < ts.terms.length; i++) {
    var t = ts.terms[i]; //basic term lookup

    if (lexicon.hasOwnProperty(t.normal) === true) {
      t.tag(lexicon[t.normal], 'lexicon');
      continue;
    } //support silent_term matches


    if (t.silent_term && lexicon.hasOwnProperty(t.silent_term) === true) {
      t.tag(lexicon[t.silent_term], 'silent_term-lexicon');
      continue;
    } //check root version too


    if (t.root && t.normal !== t.root) {
      if (lexicon.hasOwnProperty(t.root) === true) {
        t.tag(lexicon[t.root], 'lexicon');
        continue;
      }
    } //support contractions (manually)


    var parts = split(t);

    if (parts && parts.start) {
      var start = parts.start.toLowerCase();

      if (lexicon.hasOwnProperty(start) === true) {
        t.tag(lexicon[start], 'contraction-lexicon');
        continue;
      }
    }
  }

  return ts;
};

module.exports = lexicon_pass;

},{"./contraction/split":129}],102:[function(_dereq_,module,exports){
'use strict';

var MAX = 4; //find terms in the lexicon longer than one word (like 'hong kong')

var findMultiWords = function findMultiWords(ts, i, world) {
  var lex = world.words;
  var start = ts.terms[i].root;
  var nextTerms = ts.terms.slice(i + 1, i + MAX).map(function (t) {
    return t.root;
  }); //look for matches, try biggest first

  var max = MAX;

  if (nextTerms.length < max) {
    max = nextTerms.length;
  }

  for (var k = max; k > 0; k -= 1) {
    var howAbout = start + ' ' + nextTerms.slice(0, k).join(' ');

    if (lex.hasOwnProperty(howAbout) === true) {
      ts.slice(i, i + k + 1).tag(lex[howAbout], 'multi-lexicon-' + howAbout);
      return k;
    }
  }

  return 0;
}; //try multiple-word matches in the lexicon (users and default)


var lexiconMulti = function lexiconMulti(ts) {
  ts.world.cache = ts.world.cache || {};
  var firstWords = ts.world.cache.firstWords || {};

  for (var i = 0; i < ts.terms.length; i++) {
    var t = ts.terms[i]; //try multi words from user-lexicon

    if (firstWords.hasOwnProperty(t.root) === true) {
      var jump = findMultiWords(ts, i, ts.world);
      i += jump;
      continue;
    }
  }

  return ts;
};

module.exports = lexiconMulti;

},{}],103:[function(_dereq_,module,exports){
'use strict'; //identify urls, hashtags, @mentions, emails
//regs

var email = /^\w+@\w+\.[a-z]{2,3}$/; //not fancy

var hashTag = /^#[a-z0-9_]{2,}$/;
var atMention = /^@\w{2,}$/;
var urlA = /^(https?:\/\/|www\.)\w+\.[a-z]{2,3}/; //with http/www

var urlB = /^[\w\.\/]+\.(com|net|gov|org|ly|edu|info|biz|ru|jp|de|in|uk|br)/; //http://mostpopularwebsites.net/top-level-domain

var web_pass = function web_pass(terms) {
  for (var i = 0; i < terms.length; i++) {
    var t = terms.get(i);
    var str = t.text.trim().toLowerCase();

    if (email.test(str) === true) {
      t.tag('Email', 'web_pass');
    }

    if (hashTag.test(str) === true) {
      t.tag('HashTag', 'web_pass');
    }

    if (atMention.test(str) === true) {
      t.tag('AtMention', 'web_pass');
    }

    if (urlA.test(str) === true || urlB.test(str) === true) {
      t.tag('Url', 'web_pass');
    }
  }

  return terms;
};

module.exports = web_pass;

},{}],104:[function(_dereq_,module,exports){
'use strict';

var regs = _dereq_('./rules/regex_list');

var suffixes = _dereq_('./rules/suffix_lookup');

var misc = [//slang things
[/^(lol)+[sz]$/, 'Expression'], //lol
[/^ma?cd[aeiou]/, 'LastName'], //macdonell - Last patterns https://en.wikipedia.org/wiki/List_of_family_name_affixes
//starting-ones
[/^[\-\+]?[0-9][0-9,]*(\.[0-9])*$/, 'Cardinal'], //like 5
[/^(un|de|re)\\-[a-z]../, 'Verb'], [/^[\-\+]?[0-9]+(\.[0-9])*$/, 'NumericValue'], [/^https?\:?\/\/[a-z0-9]/, 'Url'], //the colon is removed in normalisation
[/^www\.[a-z0-9]/, 'Url'], [/^(over|under)[a-z]{2,}/, 'Adjective'], [/^[0-9]{1,4}\.[0-9]{1,2}\.[0-9]{1,4}$/, 'Date'], // 03-02-89
//ending-ones
[/^[0-9]+([a-z]{1,2})$/, 'Value'], //like 5kg
[/^[0-9][0-9,\.]*(st|nd|rd|r?th)$/, ['NumericValue', 'Ordinal']], //like 5th
//middle (anywhere)
[/[a-z]*\\-[a-z]*\\-/, 'Adjective']]; //straight-up lookup of known-suffixes

var lookup = function lookup(t) {
  var len = t.normal.length;
  var max = 7;

  if (len <= max) {
    max = len - 1;
  }

  for (var i = max; i > 1; i -= 1) {
    var str = t.normal.substr(len - i, len);

    if (suffixes[i][str] !== undefined) {
      // console.log('suffix-match: ' + str);
      return suffixes[i][str];
    }
  }

  return null;
}; //word-regexes indexed by last-character


var regexFn = function regexFn(t) {
  var char = t.normal.charAt(t.normal.length - 1);

  if (regs[char] === undefined) {
    return null;
  }

  var arr = regs[char];

  for (var o = 0; o < arr.length; o++) {
    if (arr[o][0].test(t.normal) === true) {
      return arr[o];
    }
  }

  return null;
};

var suffix_step = function suffix_step(ts) {
  for (var i = 0; i < ts.terms.length; i++) {
    var t = ts.terms[i]; //try known suffixes

    var tag = lookup(t);

    if (tag !== null && t.canBe(tag) === true) {
      t.tag(tag, 'suffix-lookup');
      continue;
    } //apply regexes by final-char


    tag = regexFn(t);

    if (tag !== null && t.canBe(tag[1]) === true) {
      t.tag(tag[1], 'regex-list: ' + String(tag[0]));
      continue;
    } //apply misc regexes


    for (var o = 0; o < misc.length; o++) {
      if (misc[o][0].test(t.normal) === true) {
        tag = misc[o][1];

        if (t.canBe(tag) === true) {
          t.tag(tag, 'misc-regex-' + misc[o][0]);
        }
      }
    }
  }

  return ts;
};

module.exports = suffix_step;

},{"./rules/regex_list":133,"./rules/suffix_lookup":134}],105:[function(_dereq_,module,exports){
'use strict';

var markov = _dereq_('./rules/neighbours');

var afterThisWord = markov.afterThisWord;
var beforeThisWord = markov.beforeThisWord;
var beforeThisPos = markov.beforeThisPos;
var afterThisPos = markov.afterThisPos;
var nothing = {
  TitleCase: true,
  UpperCase: true,
  CamelCase: true,
  Hyphenated: true,
  StartBracket: true,
  EndBracket: true,
  Comma: true,
  ClauseEnd: true
}; //basically a last-ditch effort before everything falls back to a noun
//for unknown terms, look left + right first, and hit-up the markov-chain for clues

var neighbour_step = function neighbour_step(ts) {
  ts.terms.forEach(function (t, n) {
    //is it still unknown?
    var termTags = Object.keys(t.tags);
    termTags = termTags.filter(function (tag) {
      return nothing.hasOwnProperty(tag) === false;
    });

    if (termTags.length === 0) {
      var lastTerm = ts.terms[n - 1];
      var nextTerm = ts.terms[n + 1]; //look at previous word for clues

      if (lastTerm && afterThisWord.hasOwnProperty(lastTerm.normal) && !lastTerm.tags.ClauseEnd) {
        t.tag(afterThisWord[lastTerm.normal], 'neighbour-after-"' + lastTerm.normal + '"');
        return;
      } //look at next word for clues..
      //(not if there's a comma, though)


      if (!t.tags.ClauseEnd && nextTerm && beforeThisWord.hasOwnProperty(nextTerm.normal)) {
        t.tag(beforeThisWord[nextTerm.normal], 'neighbour-before-"' + nextTerm.normal + '"');
        return;
      } //look at the last POS for clues


      var tags = [];

      if (lastTerm) {
        tags = Object.keys(lastTerm.tags);

        for (var i = 0; i < tags.length; i++) {
          if (afterThisPos[tags[i]]) {
            t.tag(afterThisPos[tags[i]], 'neighbour-after-[' + tags[i] + ']');
            return;
          }
        }
      } //look at the next POS for clues


      if (nextTerm) {
        tags = Object.keys(nextTerm.tags);

        for (var _i = 0; _i < tags.length; _i++) {
          if (beforeThisPos[tags[_i]]) {
            t.tag(beforeThisPos[tags[_i]], 'neighbour-before-[' + tags[_i] + ']');
            return;
          }
        }
      }
    }
  });
  return ts;
};

module.exports = neighbour_step;

},{"./rules/neighbours":132}],106:[function(_dereq_,module,exports){
'use strict'; //titlecase is a signal for a noun

var capital_logic = function capital_logic(s) {
  //(ignore first word)
  for (var i = 1; i < s.terms.length; i++) {
    var _t = s.terms[i]; //has a capital, but isn't too weird.

    if (_t.tags.TitleCase && _t.isWord()) {
      _t.tag('Noun', 'capital-step');

      _t.tag('TitleCase', 'capital-step');
    }
  } //support first-word of sentence as proper titlecase


  var t = s.terms[0];

  if (t && t.tags.TitleCase) {
    if (t.tags.Person || t.tags.Organization || t.tags.Place) {
      t.tag('TitleCase', 'first-term-capital');
    }
  }

  return s;
};

module.exports = capital_logic;

},{}],107:[function(_dereq_,module,exports){
'use strict'; //tag word as noun if we know nothing about it, still.
//tags that dont really count

var nothing = {
  TitleCase: true,
  UpperCase: true,
  CamelCase: true,
  Hyphenated: true,
  StartBracket: true,
  EndBracket: true,
  Comma: true,
  ClauseEnd: true
}; //are the tags basically empty

var gotNothing = function gotNothing(t) {
  //fail-fast
  if (t.tags.Noun || t.tags.Verb || t.tags.Adjective) {
    return false;
  }

  var tags = Object.keys(t.tags);

  if (tags.length === 0) {
    return true;
  }

  if (tags.filter(function (tag) {
    return !nothing[tag];
  }).length === 0) {
    return true;
  }

  return false;
}; //in last-ditch, try to match 'rewatch' -> 'watch' in the lexicon


var tryRoot = function tryRoot(t) {
  if (/^(re|un)-?[^aeiou]./.test(t.normal) === true) {
    var str = t.normal.replace(/^(re|un)-?/, '');

    if (t.world.words.hasOwnProperty(str) === true) {
      var tag = t.world.words[str];

      if (tag === 'Infinitive' || tag === 'PresentTense' || tag === 'PastTense' || tag === 'Gerund') {
        return tag;
      }
    }
  }

  return null;
};

var noun_fallback = function noun_fallback(s) {
  for (var i = 0; i < s.terms.length; i++) {
    var t = s.terms[i]; //fail-fast

    if (t.tags.Noun || t.tags.Verb) {
      continue;
    } //ensure it only has the tag 'Term'


    if (gotNothing(t)) {
      //ensure it's atleast word-looking
      if (t.isWord() === false) {
        continue;
      }

      var rootTag = tryRoot(t);

      if (rootTag !== null) {
        t.tag(rootTag, 'root-tag-match');
        continue;
      }

      t.tag('Noun', 'noun-fallback');
    }
  }

  return s;
};

module.exports = noun_fallback;

},{}],108:[function(_dereq_,module,exports){
'use strict';

var irregulars = _dereq_('./contraction/01-irregulars');

var isWasHas = _dereq_('./contraction/02-isWasHas');

var easyOnes = _dereq_('./contraction/03-easyOnes');

var numberRange = _dereq_('./contraction/04-numberRange'); //find and pull-apart contractions


var interpret = function interpret(ts) {
  //check irregulars
  ts = irregulars(ts); //guess-at ambiguous "'s" one

  ts = isWasHas(ts); //check easy ones

  ts = easyOnes(ts); //5-7

  ts = numberRange(ts);
  return ts;
};

module.exports = interpret;

},{"./contraction/01-irregulars":124,"./contraction/02-isWasHas":125,"./contraction/03-easyOnes":126,"./contraction/04-numberRange":127}],109:[function(_dereq_,module,exports){
'use strict'; //ambiguous 'may' and 'march'

var preps = '(in|by|before|during|on|until|after|of|within|all)';
var thisNext = '(last|next|this|previous|current|upcoming|coming)';
var sections = '(start|end|middle|starting|ending|midpoint|beginning)';
var seasons = '(spring|summer|winter|fall|autumn)'; //ensure a year is approximately typical for common years
//please change in one thousand years

var tagYear = function tagYear(v, reason) {
  if (v.found !== true) {
    return;
  }

  v.list.forEach(function (ts) {
    var num = parseInt(ts.terms[0].normal, 10);

    if (num && num > 1000 && num < 3000) {
      ts.terms[0].tag('Year', reason);
    }
  });
}; //same, but for less-confident values


var tagYearSafer = function tagYearSafer(v, reason) {
  if (v.found !== true) {
    return;
  }

  v.list.forEach(function (ts) {
    var num = parseInt(ts.terms[0].normal, 10);

    if (num && num > 1900 && num < 2030) {
      ts.terms[0].tag('Year', reason);
    }
  });
}; //non-destructively tag values & prepositions as dates


var datePass = function datePass(ts) {
  //ambiguous month - person forms
  var people = '(january|april|may|june|summer|autumn|jan|sep)';

  if (ts.has(people)) {
    //give to april
    ts.match("#Infinitive #Determiner? #Adjective? #Noun? (to|for) ".concat(people)).lastTerm().tag('Person', 'ambig-person'); //remind june

    ts.match("#Infinitive ".concat(people)).lastTerm().tag('Person', 'infinitive-person'); //may waits for

    ts.match("".concat(people, " #PresentTense (to|for)")).firstTerm().tag('Person', 'ambig-active'); //april will

    ts.match("".concat(people, " #Modal")).firstTerm().tag('Person', 'ambig-modal'); //would april

    ts.match("#Modal ".concat(people)).lastTerm().tag('Person', 'modal-ambig'); //with april

    ts.match("(that|with|for) ".concat(people)).term(1).tag('Person', 'that-month'); //it is may

    ts.match("#Copula ".concat(people)).term(1).tag('Person', 'is-may'); //may is

    ts.match("".concat(people, " #Copula")).term(0).tag('Person', 'may-is'); //april the 5th

    ts.match("".concat(people, " the? #Value")).term(0).tag('Month', 'person-value'); //wednesday april

    ts.match("#Date ".concat(people)).term(1).tag('Month', 'correction-may'); //may 5th

    ts.match("".concat(people, " the? #Value")).firstTerm().tag('Month', 'may-5th'); //5th of may

    ts.match("#Value of ".concat(people)).lastTerm().tag('Month', '5th-of-may'); //by april

    ts.match("".concat(preps, " ").concat(people)).ifNo('#Holiday').term(1).tag('Month', 'preps-month'); //this april

    ts.match("(next|this|last) ".concat(people)).term(1).tag('Month', 'correction-may'); //maybe not 'this'
  } //ambiguous month - verb-forms


  var verbs = '(may|march)';

  if (ts.has(verbs)) {
    //quickly march
    ts.match("#Adverb ".concat(verbs)).lastTerm().tag('Infinitive', 'ambig-verb');
    ts.match("".concat(verbs, " #Adverb")).lastTerm().tag('Infinitive', 'ambig-verb'); //all march

    ts.match("".concat(preps, " ").concat(verbs)).lastTerm().tag('Month', 'in-month'); //this march

    ts.match("(next|this|last) ".concat(verbs)).lastTerm().tag('Month', 'this-month'); //with date

    ts.match("".concat(verbs, " the? #Value")).firstTerm().tag('Month', 'march-5th');
    ts.match("#Value of? ".concat(verbs)).lastTerm().tag('Month', '5th-of-march'); //nearby

    ts.match("[".concat(verbs, "] .? #Date")).lastTerm().tag('Month', 'march-and-feb');
    ts.match("#Date .? [".concat(verbs, "]")).lastTerm().tag('Month', 'feb-and-march');

    if (ts.has('march')) {
      //march to
      ts.match('march (up|down|back|to|toward)').term(0).tag('Infinitive', 'march-to'); //must march

      ts.match('#Modal march').term(1).tag('Infinitive', 'must-march');
    }
  } //sun 5th


  if (ts.has('sun')) {
    //sun feb 2
    ts.match('sun #Date').firstTerm().tag('WeekDay', 'sun-feb'); //sun the 5th

    ts.match('sun the #Ordinal').tag('Date').firstTerm().tag('WeekDay', 'sun-the-5th'); //the sun

    ts.match('#Determiner sun').lastTerm().tag('Singular', 'the-sun');
  } //sat, nov 5th


  if (ts.has('sat')) {
    //sat november
    ts.match('sat #Date').firstTerm().tag('WeekDay', 'sat-feb'); //this sat

    ts.match("".concat(preps, " sat")).lastTerm().tag('WeekDay', 'sat');
  } //months:


  if (ts.has('#Month')) {
    //June 5-7th
    ts.match("#Month #DateRange+").tag('Date', 'correction-numberRange'); //5th of March

    ts.match('#Value of #Month').tag('Date', 'value-of-month'); //5 March

    ts.match('#Cardinal #Month').tag('Date', 'cardinal-month'); //march 5 to 7

    ts.match('#Month #Value to #Value').tag('Date', 'value-to-value'); //march the 12th

    ts.match('#Month the #Value').tag('Date', 'month-the-value');
  }

  ts.match('in the (night|evening|morning|afternoon|day|daytime)').tag('Time', 'in-the-night');
  ts.match('(#Value|#Time) (am|pm)').tag('Time', 'value-ampm'); //months:

  if (ts.has('#Value')) {
    //for 4 months
    ts.match('for #Value #Duration').tag('Date', 'for-x-duration'); //values

    ts.match('#Value #Abbreviation').tag('Value', 'value-abbr');
    ts.match('a #Value').if('(hundred|thousand|million|billion|trillion|quadrillion|quintillion|sextillion|septillion)').tag('Value', 'a-value');
    ts.match('(minus|negative) #Value').tag('Value', 'minus-value');
    ts.match('#Value grand').tag('Value', 'value-grand'); // ts.match('#Ordinal (half|quarter)').tag('Value', 'ordinal-half');//not ready

    ts.match('(half|quarter) #Ordinal').tag('Value', 'half-ordinal');
    ts.match('(hundred|thousand|million|billion|trillion|quadrillion|quintillion|sextillion|septillion) and #Value').tag('Value', 'magnitude-and-value');
    ts.match('#Value (point|decimal) #Value').tag('Value', 'value-point-value'); //for four days

    ts.match("".concat(preps, "? #Value #Duration")).tag('Date', 'value-duration');
    ts.match('(#WeekDay|#Month) #Value').ifNo('#Money').tag('Date', 'date-value');
    ts.match('#Value (#WeekDay|#Month)').ifNo('#Money').tag('Date', 'value-date'); //may twenty five

    var vs = ts.match('#TextValue #TextValue');

    if (vs.found && vs.has('#Date')) {
      vs.tag('#Date', 'textvalue-date');
    } //two days before


    ts.match('#Value #Duration #Conjunction').tag('Date', 'val-duration-conjunction'); //two years old

    ts.match('#Value #Duration old').unTag('Date', 'val-years-old');
  } //seasons


  if (ts.has(seasons)) {
    ts.match("".concat(preps, "? ").concat(thisNext, " ").concat(seasons)).tag('Date', 'thisNext-season');
    ts.match("the? ".concat(sections, " of ").concat(seasons)).tag('Date', 'section-season');
  } //rest-dates


  if (ts.has('#Date')) {
    //june the 5th
    ts.match('#Date the? #Ordinal').tag('Date', 'correction-date'); //last month

    ts.match("".concat(thisNext, " #Date")).tag('Date', 'thisNext-date'); //by 5 March

    ts.match('due? (by|before|after|until) #Date').tag('Date', 'by-date'); //tomorrow before 3

    ts.match('#Date (by|before|after|at|@|about) #Cardinal').not('^#Date').tag('Time', 'date-before-Cardinal'); //saturday am

    ts.match('#Date (am|pm)').term(1).unTag('Verb').unTag('Copula').tag('Time', 'date-am');
    ts.match('(last|next|this|previous|current|upcoming|coming|the) #Date').tag('Date', 'next-feb');
    ts.match('#Date (#Preposition|to) #Date').tag('Date', 'date-prep-date'); //start of june

    ts.match("the? ".concat(sections, " of #Date")).tag('Date', 'section-of-date'); //fifth week in 1998

    ts.match('#Ordinal #Duration in #Date').tag('Date', 'duration-in-date'); //early in june

    ts.match('(early|late) (at|in)? the? #Date').tag('Time', 'early-evening');
  } //year/cardinal tagging


  if (ts.has('#Cardinal')) {
    var v = ts.match("#Date #Value #Cardinal").lastTerm();
    tagYear(v, 'date-value-year'); //scoops up a bunch

    v = ts.match("#Date+ #Cardinal").lastTerm();
    tagYear(v, 'date-year'); //feb 8 2018

    v = ts.match("#Month #Value #Cardinal").lastTerm();
    tagYear(v, 'month-value-year'); //feb 8 to 10th 2018

    v = ts.match("#Month #Value to #Value #Cardinal").lastTerm();
    tagYear(v, 'month-range-year'); //in 1998

    v = ts.match("(in|of|by|during|before|starting|ending|for|year) #Cardinal").lastTerm();
    tagYear(v, 'in-year'); //q2 2009

    v = ts.match('(q1|q2|q3|q4) [#Cardinal]');
    tagYear(v, 'in-year'); //2nd quarter 2009

    v = ts.match('#Ordinal quarter [#Cardinal]');
    tagYear(v, 'in-year'); //in the year 1998

    v = ts.match('the year [#Cardinal]');
    tagYear(v, 'in-year'); //it was 1998

    v = ts.match('it (is|was) [#Cardinal]');
    tagYearSafer(v, 'in-year'); //was 1998 and...

    v = ts.match("#Cardinal !#Plural").firstTerm();
    tagYearSafer(v, 'year-unsafe');
  } //another pass at dates..


  if (ts.has('#Date')) {
    //time:
    if (ts.has('#Time')) {
      ts.match('#Cardinal #Time').not('#Year').tag('Time', 'value-time');
      ts.match('(by|before|after|at|@|about) #Time').tag('Time', 'preposition-time'); //2pm est

      ts.match('#Time (eastern|pacific|central|mountain)').term(1).tag('Time', 'timezone');
      ts.match('#Time (est|pst|gmt)').term(1).tag('Time', 'timezone abbr');
    } //fix over-greedy


    var date = ts.match('#Date+').splitOn('Clause');

    if (date.has('(#Year|#Time)') === false) {
      //12 february 12
      date.match('#Value (#Month|#Weekday) #Value').lastTerm().unTag('Date');
    }
  }

  return ts;
};

module.exports = datePass;

},{}],110:[function(_dereq_,module,exports){
'use strict'; //auxiliary verbs are extra verbs beside the main ones
// "[will be] going" - etc.

var Auxiliary = {
  'do': true,
  'don\'t': true,
  'does': true,
  'doesn\'t': true,
  'will': true,
  'wont': true,
  'won\'t': true,
  'have': true,
  'haven\'t': true,
  'had': true,
  'hadn\'t': true,
  'not': true
};

var corrections = function corrections(ts) {
  //set verbs as auxillaries
  for (var i = 0; i < ts.terms.length; i++) {
    var t = ts.terms[i];

    if (Auxiliary[t.normal] || Auxiliary[t.silent_term]) {
      var next = ts.terms[i + 1]; //if next word is a verb

      if (next && (next.tags.Verb || next.tags.Adverb || next.tags.Negative)) {
        t.tag('Auxiliary', 'corrections-Auxiliary');
        continue;
      }
    }
  }

  return ts;
};

module.exports = corrections;

},{}],111:[function(_dereq_,module,exports){
'use strict'; // 'not' is sometimes a verb, sometimes an adjective

var negation_step = function negation_step(ts) {
  for (var i = 0; i < ts.length; i++) {
    var t = ts.get(i);

    if (t.normal === 'not' || t.silent_term === 'not') {
      //find the next verb/adjective
      for (var o = i + 1; o < ts.length; o++) {
        if (ts.get(o).tags.Verb) {
          t.tag('VerbPhrase', 'negate-verb');
          break;
        }

        if (ts.get(o).tags.Adjective) {
          t.tag('AdjectivePhrase', 'negate-adj');
          break;
        }
      }
    }
  }

  return ts;
};

module.exports = negation_step;

},{}],112:[function(_dereq_,module,exports){
'use strict'; //-types of comma-use-
// PlaceComma - Hollywood, California
// List       - cool, fun, and great.
// ClauseEnd  - if so, we do.
//like Toronto, Canada

var isPlaceComma = function isPlaceComma(ts, i) {
  var t = ts.terms[i];
  var nextTerm = ts.terms[i + 1]; //'australia, canada' is a list

  if (nextTerm && t.tags.Place && !t.tags.Country && nextTerm.tags.Country) {
    return true;
  }

  return false;
}; //adj, noun, or verb


var mainTag = function mainTag(t) {
  if (t.tags.Adjective) {
    return 'Adjective';
  }

  if (t.tags.Noun) {
    return 'Noun';
  }

  if (t.tags.Verb) {
    return 'Verb';
  }

  if (t.tags.Value) {
    return 'Value';
  }

  return null;
}; //take the first term with a comma, and test to the right.
//the words with a comma must be the same pos.


var isList = function isList(ts, i) {
  var start = i;
  var tag = mainTag(ts.terms[i]); //ensure there's a following comma, and its the same pos
  //then a Conjunction

  var sinceComma = 0;
  var count = 0;
  var hasConjunction = false;

  for (i = i + 1; i < ts.terms.length; i++) {
    var t = ts.terms[i]; //are we approaching the end

    if (count > 0 && t.tags.Conjunction) {
      hasConjunction = true;
      continue;
    } //found one,


    if (t.tags[tag]) {
      //looks good. keep it going
      if (t.tags.Comma) {
        count += 1;
        sinceComma = 0;
        continue;
      }

      if (count > 0 && hasConjunction) {
        //is this the end of the list?
        ts.slice(start, i).tag('List');
        return true;
      }
    }

    sinceComma += 1; //have we gone too far without a comma?

    if (sinceComma > 5) {
      return false;
    } //this one, not a clause..


    if (tag === 'Value') {
      return true;
    }
  }

  return false;
};

var commaStep = function commaStep(ts) {
  //tag the correct punctuation forms
  for (var i = 0; i < ts.terms.length; i++) {
    var t = ts.terms[i];
    var punct = t.getPunctuation();

    if (punct === ',') {
      t.tag('Comma', 'comma-step');
      continue;
    }

    if (punct === ';' || punct === ':') {
      t.tag('ClauseEnd', 'clause-punt');
      continue;
    } //support elipses


    if (t.whitespace.after.match(/^\.\./)) {
      t.tag('ClauseEnd', 'clause-elipses');
      continue;
    } //support ' - ' clause


    if (ts.terms[i + 1] && ts.terms[i + 1].whitespace.before.match(/ - /)) {
      t.tag('ClauseEnd', 'hypen-clause');
      continue;
    }
  } //disambiguate the commas now


  for (var _i = 0; _i < ts.terms.length; _i++) {
    var _t = ts.terms[_i];

    if (_t.tags.Comma) {
      //if we already got it
      if (_t.tags.List) {
        continue;
      } //like 'Hollywood, California'


      if (isPlaceComma(ts, _i)) {
        continue;
      } //like 'cold, wet hands'


      var found = isList(ts, _i); //otherwise, it's a phrasal comma, like 'you must, if you think so'

      if (!found) {
        _t.tag('ClauseEnd', 'phrasal-comma');
      }
    }
  }

  return ts;
};

module.exports = commaStep;

},{}],113:[function(_dereq_,module,exports){
'use strict';

var quotemarks = {
  "\"": {
    close: "\"",
    tag: 'StraightDoubleQuotes'
  },
  "\uFF02": {
    close: "\uFF02",
    tag: 'StraightDoubleQuotesWide'
  },
  "'": {
    close: "'",
    tag: 'StraightSingleQuotes'
  },
  "\u201C": {
    close: "\u201D",
    tag: 'CommaDoubleQuotes'
  },
  "\u2018": {
    close: "\u2019",
    tag: 'CommaSingleQuotes'
  },
  "\u201F": {
    close: "\u201D",
    tag: 'CurlyDoubleQuotesReversed'
  },
  "\u201B": {
    close: "\u2019",
    tag: 'CurlySingleQuotesReversed'
  },
  "\u201E": {
    close: "\u201D",
    tag: 'LowCurlyDoubleQuotes'
  },
  "\u2E42": {
    close: "\u201D",
    tag: 'LowCurlyDoubleQuotesReversed'
  },
  "\u201A": {
    close: "\u2019",
    tag: 'LowCurlySingleQuotes'
  },
  "\xAB": {
    close: "\xBB",
    tag: 'AngleDoubleQuotes'
  },
  "\u2039": {
    close: "\u203A",
    tag: 'AngleSingleQuotes'
  },
  // Prime 'non quotation'
  "\u2035": {
    close: "\u2032",
    tag: 'PrimeSingleQuotes'
  },
  "\u2036": {
    close: "\u2033",
    tag: 'PrimeDoubleQuotes'
  },
  "\u2037": {
    close: "\u2034",
    tag: 'PrimeTripleQuotes'
  },
  // Prime 'quotation' variation
  "\u301D": {
    close: "\u301E",
    tag: 'PrimeDoubleQuotes'
  },
  "`": {
    close: "\xB4",
    tag: 'PrimeSingleQuotes'
  },
  "\u301F": {
    close: "\u301E",
    tag: 'LowPrimeDoubleQuotesReversed'
  }
}; // Convert the close quote to a regex.

Object.keys(quotemarks).forEach(function (open) {
  quotemarks[open].regex = new RegExp(quotemarks[open].close + '[;:,.]*');
  quotemarks[open].open = open;
}); // Improve open match detection.

var startQuote = new RegExp('[' + Object.keys(quotemarks).join('') + ']'); //tag a inline quotation as such

var quotation_step = function quotation_step(ts) {
  // Isolate the text so it doesn't change.
  var terms = ts.terms.slice(0); //.map(e => e.text);

  for (var i = 0; i < terms.length; i++) {
    var t = ts.terms[i];

    if (startQuote.test(t.whitespace.before)) {
      // Get the match and split it into groups
      var quotes = t.whitespace.before.match(startQuote).shift().split(''); // Get close and tag info.

      quotes = quotes.map(function (mark) {
        return quotemarks[mark];
      }); // Look for the ending

      for (var o = 0; o < ts.terms.length; o++) {
        // max-length don't go-on forever
        if (!terms[i + o] || o > 28) {
          break;
        } // Find the close.


        var index = -1;

        for (var qi = 0; qi < quotes.length; qi += 1) {
          if (quotes[qi].regex.test(terms[i + o].whitespace.after) === true) {
            index = qi;
            break;
          }
        }

        if (index !== -1) {
          // Remove the found
          var quote = quotes.splice(index, 1).pop();

          if (quote.regex.test(ts.terms[i + o].normal)) {
            ts.terms[i + o].whitespace.after.replace(quote.regex, '');
          } // Tag the things.


          t.tag('StartQuotation', 'quotation_open');
          ts.terms[i + o].tag('EndQuotation', 'quotation_close');
          ts.slice(i, i + o + 1).tag('Quotation', 'quotation_step'); // Compensate for multiple close quotes ('"Really"')

          o -= 1;

          if (!quotes.length) {
            break;
          }
        }
      }
    }
  }

  return ts;
};

module.exports = quotation_step;

},{}],114:[function(_dereq_,module,exports){
'use strict'; //decide if an apostrophe s is a contraction or not
// 'spencer's nice' -> 'spencer is nice'
// 'spencer's house' -> 'spencer's house'

var singleQuotes = [["'", "'"], // Straight Single Quotes
["\u2018", "\u2019"], // Comma Single Quotes
["\u201B", "\u2019"], // Curly Single Quotes Reversed
["\u201A", "\u2019"], // Low Curly Single Quotes
["\u2035", "\u2032"], // Prime Single Quotes Alt
["`", "\xB4"] // Prime Single Quotes
]; //these are always contractions

var blacklist = ['it\'s', 'that\'s']; // Get all types of single quote.

var apostrophes = '\'‘’‛‚‵′`´';
var afterWord = new RegExp('([a-z]s[' + apostrophes + '])\\W*$'); // [^\w]* match 0 or more of any char that is NOT alphanumeric

var hasApostrophe = new RegExp('[' + apostrophes + ']');
var trailers = new RegExp('[^' + apostrophes + '\\w]+$');
var quoteRegex = {};
singleQuotes.forEach(function (quote) {
  quoteRegex[quote[0]] = new RegExp(quote[1] + '[^' + quote[1] + '\\w]*$');
}); // Compensate for different `'`s in the blacklist

blacklist.map(function (item) {
  return new RegExp(item.replace('\'', '[' + apostrophes + ']'));
}); // A possessive means `'s` describes ownership
// Not a contraction, like it's -> `it is`

var is_possessive = function is_possessive(terms, text, index) {
  var thisWord = terms.get(index);
  var nextWord = terms.get(index + 1);
  var stepWord = terms.get(index + 2); //our booleans:
  // `blacklist` are always contractions, not possessive

  var inBlacklist = blacklist.map(function (r) {
    return text.match(r);
  }).find(function (m) {
    return m;
  }); // If no apostrophe s or s apostrophe

  var endTick = hasApostrophe.test(thisWord.whitespace.after); // "spencers'" - this is always possessive - eg "flanders'"

  var hasPronoun = thisWord.tags.Pronoun;

  if (inBlacklist || hasPronoun || !endTick) {
    return false;
  }

  if (afterWord.test(text) || nextWord === undefined) {
    return true;
  } // Next word is 'house'


  if (nextWord.tags.Noun === true || thisWord.tags.ClauseEnd === true) {
    return true;
  } //rocket's red glare


  if (stepWord !== undefined && nextWord.tags.Adjective && stepWord.tags.Noun) {
    return true;
  }

  return false;
}; // Tag each term as possessive, if it should


var possessiveStep = function possessiveStep(ts) {
  var expectingClosers = [];

  for (var i = 0; i < ts.length; i++) {
    var term = ts.get(i);
    var text = term.text; // First detect open quotes before detecting apostrophes

    if (typeof quoteRegex[text[0]] !== 'undefined') {
      // Add the expected closing quotes to our inspection array.
      expectingClosers[expectingClosers.length] = quoteRegex[text[0]];
      text = text.slice(1);
    } // Pre checking for quotes. e.g: Carlos'.’. -> Carlos'.’


    text = text.replace(trailers, ''); // If the string ends with an expected closer.

    var closer = -1;

    for (var qi = 0; qi < expectingClosers.length; qi += 1) {
      if (expectingClosers[qi].test(text) === true) {
        closer = qi;
        break;
      }
    }

    if (closer !== -1) {
      text = text.replace(expectingClosers[closer], '');
      delete expectingClosers[closer];
    } // Post checking for quotes. e.g: Carlos'. -> Carlos'


    text = text.replace(trailers, '');

    if (is_possessive(ts, text, i)) {
      // If it's not already a noun, co-erce it to one
      if (!term.tags['Noun']) {
        term.tag('Noun', 'possessive_pass');
      }

      term.tag('Possessive', 'possessive_pass'); // If it's been detected as a `Contraction`

      if (term.tags.Contraction === true) {
        // Remove the `Contraction` tag and silent_terms
        term.unTag('Contraction');
        ts.terms.splice(i + 1, 1);
        term.silent_term = '';
      }
    }
  }

  return ts;
};

module.exports = possessiveStep;

},{}],115:[function(_dereq_,module,exports){
'use strict'; //tag 'FBI' as letters-representing-words.
//we guess if letters are an acronym in the Term class.

var acronym_step = function acronym_step(ts) {
  ts.terms.forEach(function (t) {
    if (t.isAcronym()) {
      t.tag('Acronym', 'acronym-step');
    }
  });
  return ts;
};

module.exports = acronym_step;

},{}],116:[function(_dereq_,module,exports){
'use strict'; //sort-out things like 'theresa may', or 'will jones'.

var person_step = function person_step(ts) {
  //mr Putin
  ts.match('(mr|mrs|ms|dr) (#TitleCase|#Possessive)+').tag('#Person', 'mr-putin'); //a bunch of ambiguous first names

  var maybeNoun = '(rose|robin|dawn|ray|holly|bill|joy|viola|penny|sky|violet|daisy|melody|kelvin|hope|mercedes|olive|jewel|faith|van|charity|miles|lily|summer|dolly|rod|dick|cliff|lane|reed|kitty|art|jean|trinity)';

  if (ts.has(maybeNoun)) {
    ts.match('(#Determiner|#Adverb|#Pronoun|#Possessive) [' + maybeNoun + ']').tag('Noun', 'the-ray');
    ts.match(maybeNoun + ' (#Person|#Acronym|#TitleCase)').canBe('#Person').tag('Person', 'ray-smith');
  } //verbs or people-names


  var maybeVerb = '(pat|wade|ollie|will|rob|buck|bob|mark|jack)';

  if (ts.has(maybeVerb)) {
    ts.match('(#Modal|#Adverb) [' + maybeVerb + ']').tag('Verb', 'would-mark');
    ts.match(maybeVerb + ' (#Person|#TitleCase)').tag('Person', 'rob-smith');
  } //adjectives or people-names


  var maybeAdj = '(misty|rusty|dusty|rich|randy)';

  if (ts.has(maybeAdj)) {
    ts.match('#Adverb [' + maybeAdj + ']').tag('Adjective', 'really-rich');
    ts.match(maybeAdj + ' (#Person|#TitleCase)').tag('Person', 'randy-smith');
  } //dates as people names


  var maybeDate = '(april|june|may|jan|august|eve)';

  if (ts.has(maybeDate)) {
    ts.match(String(maybeDate) + ' (#Person|#TitleCase)').canBe('#Person').tag('Person', 'june-smith');
    ts.match('(in|during|on|by|before|#Date) [' + maybeDate + ']').canBe('#Date').tag('Date', 'in-june');
    ts.match(maybeDate + ' (#Date|#Value)').canBe('#Date').tag('Date', 'june-5th');
  } //place-names as people-names


  var maybePlace = '(paris|alexandria|houston|kobe|salvador|sydney)';

  if (ts.has(maybePlace)) {
    ts.match('(in|near|at|from|to|#Place) [' + maybePlace + ']').canBe('#Place').tag('Place', 'in-paris');
    ts.match('[' + maybePlace + '] #Place').canBe('#Place').tag('Place', 'paris-france');
    ts.match('[' + maybePlace + '] #Person').canBe('#Person').tag('Person', 'paris-hilton');
  } //this one is tricky


  if (ts.match('al')) {
    ts.match('al (#Person|#TitleCase)').canBe('#Person').tag('#Person', 'al-borlen');
    ts.match('#TitleCase al #TitleCase').canBe('#Person').tag('#Person', 'arabic-al-arabic');
  } //ambiguous honorifics


  ts.match('(private|general|major|corporal|lord|lady|secretary|premier) #Honorific? #Person').terms(0).tag('Honorific', 'ambg-honorifics'); //first general..

  ts.match('(1st|2nd|first|second) #Honorific').terms(0).tag('Honorific', 'ordinal-honorific'); // let firstNames = '()';
  // let names = ts.match(firstNames);
  // if (names.found) {
  //   //prolly not a name:
  //   if (ts.has('(#Determiner|#Adverb|#Pronoun|#Possessive) ' + firstNames)) {
  //     names.unTag('Person', 'the-bill');
  //   } else {
  //     //probably a name here:
  //     let name = ts.match('(#Honorific|#Person) ' + firstNames);
  //     if (!name.found) {
  //       name = ts.match(firstNames + ' (#Person|#Honorific|#TitleCase)');
  //     }
  //     if (name.found && name.has('(#Place|#Date|#Organization)') === false) {
  //       name.tag('Person', 'dr-bill');
  //       names.tag('FirstName', 'ambiguous-name');
  //     }
  //   }
  // }
  //tighter-matches for other ambiguous names:
  // ts.match('(al|) #Acronym? #LastName').firstTerm().tag('#FirstName', 'ambig-lastname');
  //methods requiring a firstname match

  if (ts.has('#FirstName')) {
    // Firstname x (dangerous)
    var tmp = ts.match('#FirstName #Noun').ifNo('^#Possessive').ifNo('#ClauseEnd .');
    tmp.lastTerm().canBe('#LastName').tag('#LastName', 'firstname-noun'); //ferdinand de almar

    ts.match('#FirstName de #Noun').canBe('#Person').tag('#Person', 'firstname-de-noun'); //Osama bin Laden

    ts.match('#FirstName (bin|al) #Noun').canBe('#Person').tag('#Person', 'firstname-al-noun'); //John L. Foo

    ts.match('#FirstName #Acronym #TitleCase').tag('Person', 'firstname-acronym-titlecase'); //Andrew Lloyd Webber

    ts.match('#FirstName #FirstName #TitleCase').tag('Person', 'firstname-firstname-titlecase'); //Mr Foo

    ts.match('#Honorific #FirstName? #TitleCase').tag('Person', 'Honorific-TitleCase'); //John Foo

    ts.match('#FirstName #TitleCase #TitleCase?').match('#Noun+').tag('Person', 'firstname-titlecase'); //peter the great

    ts.match('#FirstName the #Adjective').tag('Person', 'correction-determiner5'); //very common-but-ambiguous lastnames

    ts.match('#FirstName (green|white|brown|hall|young|king|hill|cook|gray|price)').tag('#Person', 'firstname-maybe'); //Joe K. Sombrero

    ts.match('#FirstName #Acronym #Noun').ifNo('#Date').tag('#Person', 'n-acro-noun').lastTerm().tag('#LastName', 'n-acro-noun'); // Dwayne 'the rock' Johnson

    ts.match('#FirstName [#Determiner? #Noun] #LastName').tag('#NickName', 'first-noun-last').tag('#Person', 'first-noun-last'); //john bodego's

    ts.match('#FirstName (#Singular|#Possessive)').ifNo('#Date').ifNo('#NickName').tag('#Person', 'first-possessive').lastTerm().tag('#LastName', 'first-possessive');
  } //methods requiring a lastname match


  if (ts.has('#LastName')) {
    // x Lastname
    ts.match('#Noun #LastName').firstTerm().canBe('#FirstName').tag('#FirstName', 'noun-lastname'); //ambiguous-but-common firstnames

    ts.match('(will|may|april|june|said|rob|wade|ray|rusty|drew|miles|jack|chuck|randy|jan|pat|cliff|bill) #LastName').firstTerm().tag('#FirstName', 'maybe-lastname'); //Jani K. Smith

    ts.match('#TitleCase #Acronym? #LastName').ifNo('#Date').tag('#Person', 'title-acro-noun').lastTerm().tag('#LastName', 'title-acro-noun'); //is foo Smith

    ts.match('#Copula (#Noun|#PresentTense) #LastName').term(1).tag('#FirstName', 'copula-noun-lastname');
  } //methods requiring a titlecase


  if (ts.has('#TitleCase')) {
    ts.match('#Acronym #TitleCase').canBe('#Person').tag('#Person', 'acronym-titlecase'); //ludwig van beethovan

    ts.match('#TitleCase (van|al|bin) #TitleCase').canBe('#Person').tag('Person', 'correction-titlecase-van-titlecase');
    ts.match('#TitleCase (de|du) la? #TitleCase').canBe('#Person').tag('Person', 'correction-titlecase-van-titlecase'); //Morgan Shlkjsfne

    ts.match('#Person #TitleCase').match('#TitleCase #Noun').canBe('#Person').tag('Person', 'correction-person-titlecase'); //pope francis

    ts.match('(lady|queen|sister) #TitleCase').ifNo('#Date').ifNo('#Honorific').tag('#FemaleName', 'lady-titlecase');
    ts.match('(king|pope|father) #TitleCase').ifNo('#Date').tag('#MaleName', 'correction-poe');
  } //j.k Rowling


  ts.match('#Noun van der? #Noun').canBe('#Person').tag('#Person', 'von der noun'); //king of spain

  ts.match('(king|queen|prince|saint|lady) of? #Noun').canBe('#Person').tag('#Person', 'king-of-noun'); //mr X

  ts.match('#Honorific #Acronym').tag('Person', 'Honorific-TitleCase'); //peter II

  ts.match('#Person #Person the? #RomanNumeral').tag('Person', 'correction-roman-numeral'); //'Professor Fink', 'General McCarthy'

  ts.match('#Honorific #Person').tag('Person', 'Honorific-Person'); //remove single 'mr'

  ts.match('^#Honorific$').unTag('Person', 'single-honorific');
  return ts;
};

module.exports = person_step;

},{}],117:[function(_dereq_,module,exports){
'use strict'; //orgwords like 'bank' in 'Foo Bank'

var orgWords = _dereq_('../../world/more-data/orgWords'); //could this word be an organization


var maybeOrg = function maybeOrg(t) {
  //must be a noun
  if (!t.tags.Noun) {
    return false;
  } //can't be these things


  if (t.tags.Pronoun || t.tags.Comma || t.tags.Possessive || t.tags.Place) {
    return false;
  } //must be one of these


  if (t.tags.TitleCase || t.tags.Organization || t.tags.Acronym) {
    return true;
  }

  return false;
};

var organization_step = function organization_step(ts) {
  for (var i = 0; i < ts.terms.length; i++) {
    var t = ts.terms[i];

    if (orgWords.hasOwnProperty(t.root) === true) {
      //eg. Toronto University
      var lastTerm = ts.terms[i - 1];

      if (lastTerm && maybeOrg(lastTerm)) {
        lastTerm.tag('Organization', 'org-word-1');
        t.tag('Organization', 'org-word-2');
        continue;
      } //eg. University of Toronto


      var nextTerm = ts.terms[i + 1];

      if (nextTerm && nextTerm.normal === 'of') {
        if (ts.terms[i + 2] && maybeOrg(ts.terms[i + 2])) {
          t.tag('Organization', 'org-of-word-1');
          nextTerm.tag('Organization', 'org-of-word-2');
          ts.terms[i + 2].tag('Organization', 'org-of-word-3');
          continue;
        }
      }
    }
  }

  if (ts.has('#Acronym')) {
    ts.match('the #Acronym').not('(iou|fomo|yolo|diy|dui|nimby)').lastTerm().tag('Organization', 'the-acronym');
    ts.match('#Acronym').match('#Possessive').tag('Organization', 'possessive-acronym');
  }

  return ts;
};

module.exports = organization_step;

},{"../../world/more-data/orgWords":221}],118:[function(_dereq_,module,exports){
'use strict'; //tag the words between '(' and ')' as #Parentheses

var parenthesesStep = function parenthesesStep(ts) {
  ts.terms.forEach(function (t, i) {
    if (t.tags.StartBracket) {
      for (var o = i; o < ts.terms.length; o += 1) {
        if (ts.terms[o].tags.EndBracket === true) {
          ts.slice(i, o + 1).tag('Parentheses');
          break;
        }
      }
    }
  });
  return ts;
};

module.exports = parenthesesStep;

},{}],119:[function(_dereq_,module,exports){
'use strict';

var isPlural = _dereq_('../../subset/nouns/isPlural');

var pluralStep = function pluralStep(ts) {
  for (var i = 0; i < ts.terms.length; i++) {
    var t = ts.terms[i];

    if (t.tags.Noun) {
      //skip existing fast
      if (t.tags.Singular || t.tags.Plural) {
        continue;
      } //check if it's plural


      var plural = isPlural(t, t.world); //can be null if unknown

      if (plural === true) {
        t.tag('Plural', 'pluralStep');
      } else if (plural === false) {
        t.tag('Singular', 'pluralStep');
      }
    }
  }

  return ts;
};

module.exports = pluralStep;

},{"../../subset/nouns/isPlural":39}],120:[function(_dereq_,module,exports){
'use strict'; //regs-

var numericCardinal = /^\$?[0-9,](\.[0-9])?/;
var isOrdinal = /[0-9](st|nd|rd|th)$/; // const hasText = /^[a-z]/;

var value_step = function value_step(ts) {
  for (var i = 0; i < ts.terms.length; i++) {
    var t = ts.terms[i];

    if (t.tags.Value === true) {
      //ordinal/cardinal
      if (t.tags.Ordinal === undefined && t.tags.Cardinal === undefined) {
        if (numericCardinal.test(t.normal) === true) {
          t.tag('Cardinal', 'cardinal-val-regex');
          t.tag('NumericValue', 'NumericValue-regex');
        } else if (isOrdinal.test(t.normal) === true) {
          t.tag('Ordinal', 'ordinal-value-regex');
          t.tag('NumericValue', 'NumericValue-regex');
        }
      }
    }
  } //5 books


  ts.match('#Cardinal [#Plural]').tag('Unit', 'cardinal-plural'); //5th book

  ts.match('#Ordinal [#Singular]').tag('Unit', 'ordinal-singular'); //1 book

  ts.match('(one|first|1|1st) [#Singular]').tag('Unit', 'one-singular');
  return ts;
};

module.exports = value_step;

},{}],121:[function(_dereq_,module,exports){
'use strict'; //mostly pos-corections here

var corrections = function corrections(ts) {
  //ambig prepositions/conjunctions
  if (ts.has('so')) {
    //so funny
    ts.match('so #Adjective').match('so').tag('Adverb', 'so-adv'); //so the

    ts.match('so #Noun').match('so').tag('Conjunction', 'so-conj'); //do so

    ts.match('do so').match('so').tag('Noun', 'so-noun');
  }

  if (ts.has('all')) {
    //all students
    ts.match('[all] #Determiner? #Noun').tag('Adjective', 'all-noun'); //it all fell apart

    ts.match('[all] #Verb').tag('Adverb', 'all-verb');
  } //the ambiguous word 'that' and 'which'


  if (ts.has('(that|which)')) {
    //remind john that
    ts.match('#Verb #Adverb? #Noun (that|which)').lastTerm().tag('Preposition', 'that-prep'); //that car goes

    ts.match('that #Noun #Verb').firstTerm().tag('Determiner', 'that-determiner'); //work, which has been done.

    ts.match('#Comma [which] (#Pronoun|#Verb)').tag('Preposition', 'which-copula'); //things that provide
    // ts.match('#Plural (that|which) #Adverb? #Verb').term(1).tag('Preposition', 'noun-that');
  } //Determiner-signals


  if (ts.has('#Determiner')) {
    //the wait to vote
    ts.match('(the|this) [#Verb] #Preposition .').tag('Noun', 'correction-determiner1'); //the swim

    ts.match('(the|those|these) (#Infinitive|#PresentTense|#PastTense)').term(1).tag('Noun', 'correction-determiner2'); //a staggering cost

    ts.match('(a|an) [#Gerund]').tag('Adjective', 'correction-a|an');
    ts.match('(a|an) #Adjective (#Infinitive|#PresentTense)').term(2).tag('Noun', 'correction-a|an2'); //some pressing issues

    ts.match('some [#Verb] #Plural').tag('Noun', 'correction-determiner6'); //the test string

    ts.match('#Determiner [#Infinitive] #Noun').tag('Noun', 'correction-determiner7'); //the orange.

    ts.match('#Determiner #Adjective$').not('(#Comparative|#Superlative)').term(1).tag('Noun', 'the-adj-1'); //the orange is

    ts.match('#Determiner [#Adjective] (#Copula|#PastTense|#Auxiliary)').tag('Noun', 'the-adj-2'); //the nice swim

    ts.match('(the|this|those|these) #Adjective [#Verb]').tag('Noun', 'the-adj-verb'); //the truly nice swim

    ts.match('(the|this|those|these) #Adverb #Adjective [#Verb]').tag('Noun', 'correction-determiner4'); //a stream runs

    ts.match('(the|this|a|an) [#Infinitive] #Adverb? #Verb').tag('Noun', 'correction-determiner5'); //a sense of

    ts.match('#Determiner [#Verb] of').tag('Noun', 'the-verb-of'); //the threat of force

    ts.match('#Determiner #Noun of [#Verb]').tag('Noun', 'noun-of-noun'); //a close

    ts.match('#Determiner #Adverb? [close]').tag('Adjective', 'a-close'); //did a 900, paid a 20

    ts.match('#Verb (a|an) [#Value]').tag('Singular', 'a-value'); //a tv show

    ts.match('(a|an) #Noun [#Infinitive]').tag('Noun', 'a-noun-inf');
  } //like


  if (ts.has('like')) {
    ts.match('just [like]').tag('Preposition', 'like-preposition'); //folks like her

    ts.match('#Noun [like] #Noun').tag('Preposition', 'noun-like'); //look like

    ts.match('#Verb [like]').tag('Adverb', 'verb-like'); //exactly like

    ts.match('#Adverb like').not('(really|generally|typically|usually|sometimes|often) like').lastTerm().tag('Adverb', 'adverb-like');
  }

  if (ts.has('#Value')) {
    //half a million
    ts.match('half a? #Value').tag('Value', 'half-a-value'); //quarter not ready

    ts.match('#Value and a (half|quarter)').tag('Value', 'value-and-a-half'); //all values are either ordinal or cardinal
    // ts.match('#Value').match('!#Ordinal').tag('#Cardinal', 'not-ordinal');
    //money

    ts.match('#Value+ #Currency').tag('Money', 'value-currency').lastTerm().tag('Unit', 'money-unit');
    ts.match('#Money and #Money #Currency?').tag('Money', 'money-and-money'); //1 800 PhoneNumber

    ts.match('1 #Value #PhoneNumber').tag('PhoneNumber', '1-800-Value'); //(454) 232-9873

    ts.match('#NumericValue #PhoneNumber').tag('PhoneNumber', '(800) PhoneNumber'); //two hundredth

    ts.match('#TextValue+').match('#Cardinal+ #Ordinal').tag('Ordinal', 'two-hundredth');
  }

  if (ts.has('#Noun')) {
    //'more' is not always an adverb
    ts.match('more #Noun').tag('Noun', 'more-noun'); //the word 'second'

    ts.match('[second] #Noun').not('#Honorific').unTag('Unit').tag('Ordinal', 'second-noun'); //he quickly foo

    ts.match('#Noun #Adverb [#Noun]').tag('Verb', 'correction'); //fix for busted-up phrasalVerbs

    ts.match('#Noun [#Particle]').tag('Preposition', 'repair-noPhrasal'); //John & Joe's

    ts.match('#Noun (&|n) #Noun').tag('Organization', 'Noun-&-Noun'); //Aircraft designer

    ts.match('#Noun #Actor').tag('Actor', 'thing-doer'); //this rocks

    ts.match('(this|that) [#Plural]').tag('PresentTense', 'this-verbs'); //by a bear.

    ts.match('#Determiner #Infinitive$').lastTerm().tag('Noun', 'a-inf'); //the western line

    ts.match('#Determiner [(western|eastern|northern|southern|central)] #Noun').tag('Noun', 'western-line');
    ts.match('(#Determiner|#Value) [(linear|binary|mobile|lexical|technical|computer|scientific|formal)] #Noun').tag('Noun', 'technical-noun'); //organization

    if (ts.has('#Organization')) {
      ts.match('#Organization of the? #TitleCase').tag('Organization', 'org-of-place');
      ts.match('#Organization #Country').tag('Organization', 'org-country');
      ts.match('(world|global|international|national|#Demonym) #Organization').tag('Organization', 'global-org');
    }

    if (ts.has('#Possessive')) {
      //my buddy
      ts.match('#Possessive [#FirstName]').unTag('Person', 'possessive-name'); //spencer kelly's

      ts.match('#FirstName #Acronym? #Possessive').notIf('#Comma').match('#FirstName #Acronym? #LastName').tag('Possessive'); //Super Corp's fundraiser

      ts.match('#Organization+ #Possessive').notIf('#Comma').tag('Possessive'); //Los Angeles's fundraiser

      ts.match('#Place+ #Possessive').notIf('#Comma').tag('Possessive');
    }
  }

  if (ts.has('#Verb')) {
    //still make
    ts.match('[still] #Verb').tag('Adverb', 'still-verb'); //'u' as pronoun

    ts.match('[u] #Verb').tag('Pronoun', 'u-pronoun-1'); //is no walk

    ts.match('is no [#Verb]').tag('Noun', 'is-no-verb'); //different views than

    ts.match('[#Verb] than').tag('Noun', 'correction'); //her polling

    ts.match('#Possessive [#Verb]').tag('Noun', 'correction-possessive'); //there are reasons

    ts.match('there (are|were) #Adjective? [#PresentTense]').tag('Plural', 'there-are'); //jack seems guarded

    ts.match('#Singular (seems|appears) #Adverb? [#PastTense$]').tag('Adjective', 'seems-filled');

    if (ts.has('(who|what|where|why|how|when)')) {
      //the word 'how'
      ts.match('^how').tag('QuestionWord', 'how-question').tag('QuestionWord', 'how-question');
      ts.match('how (#Determiner|#Copula|#Modal|#PastTense)').term(0).tag('QuestionWord', 'how-is'); // //the word 'which'

      ts.match('^which').tag('QuestionWord', 'which-question').tag('QuestionWord', 'which-question');
      ts.match('which . (#Noun)+ #Pronoun').term(0).tag('QuestionWord', 'which-question2');
      ts.match('which').tag('QuestionWord', 'which-question3'); //where
      //how he is driving

      var word = ts.match('#QuestionWord #Noun #Copula #Adverb? (#Verb|#Adjective)').firstTerm();
      word.unTag('QuestionWord').tag('Conjunction', 'how-he-is-x'); //when i go fishing

      word = ts.match('#QuestionWord #Noun #Adverb? #Infinitive not? #Gerund').firstTerm();
      word.unTag('QuestionWord').tag('Conjunction', 'when i go fishing');
    }

    if (ts.has('#Copula')) {
      //is eager to go
      ts.match('#Copula #Adjective to #Verb').match('#Adjective to').tag('Verb', 'correction'); //is mark hughes

      ts.match('#Copula [#Infinitive] #Noun').tag('Noun', 'is-pres-noun');
      ts.match('[#Infinitive] #Copula').tag('Noun', 'infinitive-copula'); //sometimes adverbs - 'pretty good','well above'

      ts.match('#Copula (pretty|dead|full|well) (#Adjective|#Noun)').notIf('#Comma').tag('#Copula #Adverb #Adjective', 'sometimes-adverb'); //sometimes not-adverbs

      ts.match('#Copula [(just|alone)$]').tag('Adjective', 'not-adverb'); //jack is guarded

      ts.match('#Singular is #Adverb? [#PastTense$]').tag('Adjective', 'is-filled');
    } //went to sleep
    // ts.match('#Verb to #Verb').lastTerm().tag('Noun', 'verb-to-verb');
    //support a splattering of auxillaries before a verb


    var advb = '(#Adverb|not)+?';

    if (ts.has(advb)) {
      //had walked
      ts.match("(has|had) ".concat(advb, " #PastTense")).not('#Verb$').tag('Auxiliary', 'had-walked'); //was walking

      ts.match("#Copula ".concat(advb, " #Gerund")).not('#Verb$').tag('Auxiliary', 'copula-walking'); //been walking

      ts.match("(be|been) ".concat(advb, " #Gerund")).not('#Verb$').tag('Auxiliary', 'be-walking'); //would walk

      ts.match("(#Modal|did) ".concat(advb, " #Verb")).not('#Verb$').tag('Auxiliary', 'modal-verb'); //would have had

      ts.match("#Modal ".concat(advb, " have ").concat(advb, " had ").concat(advb, " #Verb")).not('#Verb$').tag('Auxiliary', 'would-have'); //would be walking

      ts.match("(#Modal) ".concat(advb, " be ").concat(advb, " #Verb")).not('#Verb$').tag('Auxiliary', 'would-be'); //would been walking

      ts.match("(#Modal|had|has) ".concat(advb, " been ").concat(advb, " #Verb")).not('#Verb$').tag('Auxiliary', 'would-be'); //infinitive verbs suggest plural nouns - 'XYZ walk to the store'
      // r.match(`#Singular+ #Infinitive`).match('#Singular+').tag('Plural', 'infinitive-make-plural');
    } //fall over


    ts.match('#PhrasalVerb #PhrasalVerb').lastTerm().tag('Particle', 'phrasal-particle');

    if (ts.has('#Gerund')) {
      //walking is cool
      ts.match('#Gerund #Adverb? not? #Copula').firstTerm().tag('Activity', 'gerund-copula'); //walking should be fun

      ts.match('#Gerund #Modal').firstTerm().tag('Activity', 'gerund-modal'); //running-a-show

      ts.match('#Gerund #Determiner [#Infinitive]').tag('Noun', 'running-a-show'); //setting records
      // ts.match('#Gerund [#PresentTense]').tag('Plural', 'setting-records');
    } //will be cool -> Copula


    if (ts.has('will #Adverb? not? #Adverb? be')) {
      //will be running (not copula
      if (ts.has('will #Adverb? not? #Adverb? be #Gerund') === false) {
        //tag it all
        ts.match('will not? be').tag('Copula', 'will-be-copula'); //for more complex forms, just tag 'be'

        ts.match('will #Adverb? not? #Adverb? be #Adjective').match('be').tag('Copula', 'be-copula');
      }
    }
  }

  if (ts.has('#Adjective')) {
    //still good
    ts.match('still #Adjective').match('still').tag('Adverb', 'still-advb'); //big dreams, critical thinking

    ts.match('#Adjective [#PresentTense]').tag('Noun', 'adj-presentTense'); //will secure our

    ts.match('will [#Adjective]').tag('Verb', 'will-adj'); //cheering hard - dropped -ly's

    ts.match('#PresentTense (hard|quick|long|bright|slow)').lastTerm().tag('Adverb', 'lazy-ly'); //his fine

    ts.match('(his|her|its) [#Adjective]').tag('Noun', 'his-fine'); //

    ts.match('#Noun #Adverb? [left]').tag('PastTense', 'left-verb');
  }

  if (ts.has('#TitleCase')) {
    //FitBit Inc
    ts.match('#TitleCase (ltd|co|inc|dept|assn|bros)').tag('Organization', 'org-abbrv'); //Foo District

    ts.match('#TitleCase+ (district|region|province|county|prefecture|municipality|territory|burough|reservation)').tag('Region', 'foo-district'); //District of Foo

    ts.match('(district|region|province|municipality|territory|burough|state) of #TitleCase').tag('Region', 'district-of-Foo');
  }

  if (ts.has('#Hyphenated')) {
    //air-flow
    ts.match('#Hyphenated #Hyphenated').match('#Noun #Verb').tag('Noun', 'hyphen-verb');
    var hyphen = ts.match('#Hyphenated+');

    if (hyphen.has('#Expression')) {
      //ooh-wee
      hyphen.tag('Expression', 'ooh-wee');
    }
  }

  if (ts.has('#Place')) {
    //West Norforlk
    ts.match('(west|north|south|east|western|northern|southern|eastern)+ #Place').tag('Region', 'west-norfolk'); //some us-state acronyms (exlude: al, in, la, mo, hi, me, md, ok..)

    ts.match('#City [#Acronym]').match('(al|ak|az|ar|ca|ct|dc|fl|ga|id|il|nv|nh|nj|ny|oh|or|pa|sc|tn|tx|ut|vt|pr)').tag('Region', 'us-state');
  } //misc:
  //foot/feet


  ts.match('(foot|feet)').tag('Noun', 'foot-noun');
  ts.match('#Value (foot|feet)').term(1).tag('Unit', 'foot-unit'); //'u' as pronoun

  ts.match('#Conjunction [u]').tag('Pronoun', 'u-pronoun-2'); //'a/an' can mean 1 - "a hour"

  ts.match('(a|an) (#Duration|hundred|thousand|million|billion|trillion|quadrillion|quintillion|sextillion|septillion)').ifNo('#Plural').term(0).tag('Value', 'a-is-one'); //swear-words as non-expression POS
  //nsfw

  ts.match('holy (shit|fuck|hell)').tag('Expression', 'swears-expression');
  ts.match('#Determiner (shit|damn|hell)').term(1).tag('Noun', 'swears-noun');
  ts.match('(shit|damn|fuck) (#Determiner|#Possessive|them)').term(0).tag('Verb', 'swears-verb');
  ts.match('#Copula fucked up?').not('#Copula').tag('Adjective', 'swears-adjective'); //6 am

  ts.match('#Holiday (day|eve)').tag('Holiday', 'holiday-day'); //timezones

  ts.match('(standard|daylight|summer|eastern|pacific|central|mountain) standard? time').tag('Time', 'timezone'); //canadian dollar, Brazilian pesos

  ts.match('#Demonym #Currency').tag('Currency', 'demonym-currency'); //about to go

  ts.match('about to #Adverb? #Verb').match('about to').tag(['Auxiliary', 'Verb'], 'about-to'); //Doctor john smith jr

  ts.match('#Honorific #Person').tag('Person', 'honorific-person');
  ts.match('#Person (jr|sr|md)').tag('Person', 'person-honorific'); //right of way

  ts.match('(right|rights) of .').tag('Noun', 'right-of');
  return ts;
};

module.exports = corrections;

},{}],122:[function(_dereq_,module,exports){
"use strict";

//a specificly-named thing, that should be capitalized
var properNoun = function properNoun(ts) {
  if (ts.has('#Person') === true) {
    ts.match('#FirstName #Person+').tag('ProperNoun');
    ts.match('#Person+ #LastName').tag('ProperNoun');
  }

  if (ts.has('#Place') === true) {
    ts.match('(#City|#Region|#Country)').tag('ProperNoun');
  }

  ts.match('#Organization').tag('ProperNoun');
  ts.match('#Month').tag('ProperNoun');
  return ts;
};

module.exports = properNoun;

},{}],123:[function(_dereq_,module,exports){
"use strict";

//patterns are .match() statements to be run after the tagger
var posthoc = function posthoc(ts) {
  var patterns = ts.world.patterns;
  Object.keys(patterns).forEach(function (k) {
    ts.match(k).tag(patterns[k], 'post-hoc: ' + k);
  });
  return ts;
};

module.exports = posthoc;

},{}],124:[function(_dereq_,module,exports){
'use strict';

var fixContraction = _dereq_('./fix');

var irregulars = {
  wanna: ['want', 'to'],
  gonna: ['going', 'to'],
  im: ['i', 'am'],
  alot: ['a', 'lot'],
  dont: ['do', 'not'],
  dun: ['do', 'not'],
  ive: ['i', 'have'],
  "won't": ['will', 'not'],
  wont: ['will', 'not'],
  "can't": ['can', 'not'],
  cant: ['can', 'not'],
  cannot: ['can', 'not'],
  // aint: ['is', 'not'], //or 'are'
  // "ain't": ['is', 'not'],
  "shan't": ['should', 'not'],
  imma: ['I', 'will'],
  "where'd": ['where', 'did'],
  whered: ['where', 'did'],
  "when'd": ['when', 'did'],
  whend: ['when', 'did'],
  "how'd": ['how', 'did'],
  howd: ['how', 'did'],
  "what'd": ['what', 'did'],
  whatd: ['what', 'did'],
  "let's": ['let', 'us'],
  //multiple word contractions
  dunno: ['do', 'not', 'know'],
  brb: ['be', 'right', 'back'],
  gtg: ['got', 'to', 'go'],
  irl: ['in', 'real', 'life'],
  tbh: ['to', 'be', 'honest'],
  imo: ['in', 'my', 'opinion'],
  til: ['today', 'i', 'learned'],
  rn: ['right', 'now'],
  twas: ['it', 'was'],
  '@': ['at']
}; //check irregulars

var checkIrregulars = function checkIrregulars(ts) {
  for (var i = 0; i < ts.terms.length; i++) {
    var t = ts.terms[i];

    if (irregulars[t.normal]) {
      var fix = irregulars[t.normal];
      ts = fixContraction(ts, fix, i);
      i += fix.length - 1;
    }
  }

  return ts;
};

module.exports = checkIrregulars;

},{"./fix":128}],125:[function(_dereq_,module,exports){
'use strict';

var fixContraction = _dereq_('./fix');

var splitContraction = _dereq_('./split'); //these are always contractions


var blacklist = {
  'that\'s': true,
  'there\'s': true
};
var are = {
  we: true,
  they: true,
  you: true
}; // "'s" may be a contraction or a possessive
// 'spencer's house' vs 'spencer's good'

var isPossessive = function isPossessive(ts, i) {
  var t = ts.terms[i];
  var next_t = ts.terms[i + 1]; //a pronoun can't be possessive - "he's house"

  if (t.tags.Pronoun || t.tags.QuestionWord) {
    return false;
  }

  if (blacklist[t.normal]) {
    return false;
  } //if end of sentence, it is possessive - "was spencer's"


  if (!next_t) {
    return true;
  } //an infinitive is probably mis-tagged - 'jamie's bite'


  if (next_t.tags.Infinitive) {
    return true;
  } //a gerund suggests 'is walking'


  if (next_t.tags.VerbPhrase) {
    return false;
  } //spencer's house


  if (next_t.tags.Noun) {
    return true;
  } //rocket's red glare


  if (next_t.tags.Adjective && ts.terms[i + 2] && ts.terms[i + 2].tags.Noun) {
    return true;
  } //an adjective suggests 'is good'


  if (next_t.tags.Adjective || next_t.tags.Adverb || next_t.tags.Verb) {
    return false;
  }

  return false;
}; // you ain't / i ain't.


var isAre = function isAre(ts, i) {
  var arr = ['is', 'not']; //default
  //get what's it 'about'

  if (ts.terms[i - 1]) {
    var about = ts.terms[i - 1]; //go back one more..

    if (about.tags.Adverb && ts.terms[i - 2]) {
      about = ts.terms[i - 2];
    }

    if (about.tags.Plural || are[about.normal] === true) {
      arr[0] = 'are';
    }
  }

  return arr;
}; //handle ambigous contraction "'s"


var hardOne = function hardOne(ts) {
  for (var i = 0; i < ts.terms.length; i++) {
    //skip existing
    if (ts.terms[i].silent_term) {
      continue;
    }

    if (ts.terms[i].normal === 'ain\'t' || ts.terms[i].normal === 'aint') {
      var arr = isAre(ts, i);
      ts = fixContraction(ts, arr, i);
      i += 1;
      continue;
    }

    var parts = splitContraction(ts.terms[i]);

    if (parts) {
      //have we found a hard one
      if (parts.end === 's') {
        //spencer's house
        if (isPossessive(ts, i)) {
          ts.terms[i].tag('#Possessive', 'hard-contraction');
          continue;
        }

        var _arr = [parts.start, 'is'];

        if (ts.terms[i + 1]) {
          var str = ts.terms[i].normal; //he's walking -> is/was

          if (ts.match(str + ' (#Negative|#Adverb|#Auxiliary)+? #Gerund').found) {
            _arr = [parts.start, 'is'];
          } else if (ts.match(str + ' (#Negative|#Adverb|#Auxiliary)+? #Verb').found) {
            //is vs has ('he's got milk')
            _arr = [parts.start, 'has'];
          }
        }

        ts = fixContraction(ts, _arr, i);
        i += 1;
      }
    }
  }

  return ts;
};

module.exports = hardOne;

},{"./fix":128,"./split":129}],126:[function(_dereq_,module,exports){
'use strict';

var fixContraction = _dereq_('./fix');

var split = _dereq_('./split'); //the formulaic contraction types:


var easy_ends = {
  ll: 'will',
  // 'd': 'would',
  ve: 'have',
  re: 'are',
  m: 'am',
  'n\'t': 'not' //these ones are a bit tricksier:
  // 't': 'not',
  // 's': 'is' //or was

}; //unambiguous contractions, like "'ll"

var easyOnes = function easyOnes(ts) {
  for (var i = 0; i < ts.terms.length; i++) {
    //skip existing
    if (ts.terms[i].silent_term) {
      continue;
    }

    var parts = split(ts.terms[i]);

    if (parts) {
      parts.start = parts.start.toLowerCase(); //make sure its an easy one

      if (easy_ends[parts.end]) {
        var arr = [parts.start, easy_ends[parts.end]];
        ts = fixContraction(ts, arr, i);
        i += 1;
      } //handle i'd -> 'i would' vs 'i had'


      if (parts.end === 'd') {
        //assume 'would'
        var _arr = [parts.start, 'would']; //if next verb is past-tense, choose 'had'

        if (ts.terms[i + 1] && ts.terms[i + 1].tags.PastTense) {
          _arr[1] = 'had';
        } //also support '#Adverb #PastTense'


        if (ts.terms[i + 2] && ts.terms[i + 2].tags.PastTense && ts.terms[i + 1].tags.Adverb) {
          _arr[1] = 'had';
        }

        ts = fixContraction(ts, _arr, i);
        i += 1;
      }
    }
  }

  return ts;
};

module.exports = easyOnes;

},{"./fix":128,"./split":129}],127:[function(_dereq_,module,exports){
'use strict';

var fixContraction = _dereq_('./fix');

var Term = _dereq_('../../../term');

var hasDash = function hasDash(t) {
  var dashes = /(-|–|—)/;
  return dashes.test(t.whitespace.before) || dashes.test(t.whitespace.after);
};

var numberRange = function numberRange(ts) {
  //try to support number range, like 5-9, this way:
  ts.match('#Hyphenated #Hyphenated').match('#NumericValue #NumericValue').tag('NumberRange'); //otherwise, loop through and find them

  for (var i = 0; i < ts.terms.length; i++) {
    var t = ts.terms[i]; //skip existing

    if (t.silent_term) {
      continue;
    }

    if (t.tags.TextValue) {
      continue;
    } //hyphens found in whitespace - '5 - 7'


    if (t.tags.Value && ts.terms[i + 1] && i > 0 && (hasDash(t) || hasDash(ts.terms[i - 1])) && ts.terms[i - 1].tags.Value) {
      var to = new Term('', ts.world);
      to.silent_term = 'to';
      ts.insertAt(i, to);
      ts.terms[i - 1].tag('NumberRange', 'number-number1');
      ts.terms[i].tag('NumberRange', 'number-number2');
      ts.terms[i].whitespace.before = '';
      ts.terms[i].whitespace.after = '';
      ts.terms[i + 1].tag('NumberRange', 'number-number3');
      return ts;
    } //add a silent term


    if (t.tags.NumberRange) {
      var arr = t.text.split(/(-|–|—)/);
      arr[1] = 'to';
      ts = fixContraction(ts, arr, i);
      ts.terms[i].tag(['NumberRange', 'NumericValue'], 'numRange-1');
      ts.terms[i + 1].tag(['NumberRange', 'Preposition'], 'numRange-silent');
      ts.terms[i + 2].tag(['NumberRange', 'NumericValue'], 'numRange-3');
      i += 2;
    }
  }

  return ts;
};

module.exports = numberRange;

},{"../../../term":143,"./fix":128}],128:[function(_dereq_,module,exports){
'use strict';

var Term = _dereq_('../../../term');

var tags = {
  not: 'Negative',
  will: 'Verb',
  would: 'Modal',
  have: 'Verb',
  are: 'Copula',
  is: 'Copula',
  am: 'Verb'
}; //make sure the newly created term gets the easy tags

var easyTag = function easyTag(t) {
  if (tags[t.silent_term]) {
    t.tag(tags[t.silent_term]);
  }
}; //add a silent term


var fixContraction = function fixContraction(ts, parts, i) {
  //add the interpretation to the contracted term
  var one = ts.terms[i];
  one.silent_term = parts[0]; //tag it as a contraction

  one.tag('Contraction', 'tagger-contraction'); //add a new empty term

  if (parts[1]) {
    var two = new Term('', ts.world);
    two.silent_term = parts[1];
    two.tag('Contraction', 'tagger-contraction');
    ts.insertAt(i + 1, two); //ensure new term has no auto-whitspace

    two.whitespace.before = '';
    two.whitespace.after = '';
    easyTag(two);
  } //potentially it's three-contracted-terms, like 'dunno'


  if (parts[2]) {
    var three = new Term('', ts.world);
    three.silent_term = parts[2]; // ts.terms.push(three);

    ts.insertAt(i + 2, three);
    three.tag('Contraction', 'tagger-contraction');
    easyTag(three);
  }

  return ts;
};

module.exports = fixContraction;

},{"../../../term":143}],129:[function(_dereq_,module,exports){
'use strict';

var contraction = /^([a-z]+)'([a-z][a-z]?)$/i;
var possessive = /[a-z]s'$/i;
var allowed = {
  re: 1,
  ve: 1,
  ll: 1,
  t: 1,
  s: 1,
  d: 1,
  m: 1
};
/** interpret a terms' contraction */

var splitContraction = function splitContraction(t) {
  //handle this irregular one (shared trailing n)
  if (t.normal === 'can\'t') {
    return {
      start: 'can',
      end: 'n\'t'
    };
  }

  var parts = t.normal.match(contraction);

  if (parts && parts[1] && allowed[parts[2]] === 1) {
    //handle n't
    if (parts[2] === 't' && parts[1].match(/[a-z]n$/)) {
      parts[1] = parts[1].replace(/n$/, '');
      parts[2] = 'n\'t'; //dunno..
    } //fix titlecase


    if (t.tags.TitleCase === true) {
      parts[1] = parts[1].replace(/^[a-z]/, function (x) {
        return x.toUpperCase();
      });
    }

    return {
      start: parts[1],
      end: parts[2]
    };
  } // "flanders' house"


  if (possessive.test(t.text) === true) {
    return {
      start: t.normal.replace(/s'?$/, ''),
      end: ''
    };
  }

  return null;
};

module.exports = splitContraction;

},{}],130:[function(_dereq_,module,exports){
"use strict";

//yep,
//https://github.com/mathiasbynens/emoji-regex/blob/master/index.js
module.exports = /(?:0\u20E3\n1\u20E3|2\u20E3|3\u20E3|4\u20E3|5\u20E3|6\u20E3|7\u20E3|8\u20E3|9\u20E3|#\u20E3|\*\u20E3|\uD83C(?:\uDDE6\uD83C(?:\uDDE8|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDEE|\uDDF1|\uDDF2|\uDDF4|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFC|\uDDFD|\uDDFF)|\uDDE7\uD83C(?:\uDDE6|\uDDE7|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDEE|\uDDEF|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFB|\uDDFC|\uDDFE|\uDDFF)|\uDDE8\uD83C(?:\uDDE6|\uDDE8|\uDDE9|\uDDEB|\uDDEC|\uDDED|\uDDEE|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF5|\uDDF7|\uDDFA|\uDDFB|\uDDFC|\uDDFD|\uDDFE|\uDDFF)|\uDDE9\uD83C(?:\uDDEA|\uDDEC|\uDDEF|\uDDF0|\uDDF2|\uDDF4|\uDDFF)|\uDDEA\uD83C(?:\uDDE6|\uDDE8|\uDDEA|\uDDEC|\uDDED|\uDDF7|\uDDF8|\uDDF9|\uDDFA)|\uDDEB\uD83C(?:\uDDEE|\uDDEF|\uDDF0|\uDDF2|\uDDF4|\uDDF7)|\uDDEC\uD83C(?:\uDDE6|\uDDE7|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDEE|\uDDF1|\uDDF2|\uDDF3|\uDDF5|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFC|\uDDFE)|\uDDED\uD83C(?:\uDDF0|\uDDF2|\uDDF3|\uDDF7|\uDDF9|\uDDFA)|\uDDEE\uD83C(?:\uDDE8|\uDDE9|\uDDEA|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF6|\uDDF7|\uDDF8|\uDDF9)|\uDDEF\uD83C(?:\uDDEA|\uDDF2|\uDDF4|\uDDF5)|\uDDF0\uD83C(?:\uDDEA|\uDDEC|\uDDED|\uDDEE|\uDDF2|\uDDF3|\uDDF5|\uDDF7|\uDDFC|\uDDFE|\uDDFF)|\uDDF1\uD83C(?:\uDDE6|\uDDE7|\uDDE8|\uDDEE|\uDDF0|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFB|\uDDFE)|\uDDF2\uD83C(?:\uDDE6|\uDDE8|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF5|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFB|\uDDFC|\uDDFD|\uDDFE|\uDDFF)|\uDDF3\uD83C(?:\uDDE6|\uDDE8|\uDDEA|\uDDEB|\uDDEC|\uDDEE|\uDDF1|\uDDF4|\uDDF5|\uDDF7|\uDDFA|\uDDFF)|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C(?:\uDDE6|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF7|\uDDF8|\uDDF9|\uDDFC|\uDDFE)|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C(?:\uDDEA|\uDDF4|\uDDF8|\uDDFA|\uDDFC)|\uDDF8\uD83C(?:\uDDE6|\uDDE7|\uDDE8|\uDDE9|\uDDEA|\uDDEC|\uDDED|\uDDEE|\uDDEF|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF7|\uDDF8|\uDDF9|\uDDFB|\uDDFD|\uDDFE|\uDDFF)|\uDDF9\uD83C(?:\uDDE6|\uDDE8|\uDDE9|\uDDEB|\uDDEC|\uDDED|\uDDEF|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF7|\uDDF9|\uDDFB|\uDDFC|\uDDFF)|\uDDFA\uD83C(?:\uDDE6|\uDDEC|\uDDF2|\uDDF8|\uDDFE|\uDDFF)|\uDDFB\uD83C(?:\uDDE6|\uDDE8|\uDDEA|\uDDEC|\uDDEE|\uDDF3|\uDDFA)|\uDDFC\uD83C(?:\uDDEB|\uDDF8)|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C(?:\uDDEA|\uDDF9)|\uDDFF\uD83C(?:\uDDE6|\uDDF2|\uDDFC)))|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]/g;

},{}],131:[function(_dereq_,module,exports){
"use strict";

//just some of the most common emoticons
//faster than
//http://stackoverflow.com/questions/28077049/regex-matching-emoticons
module.exports = {
  ':(': true,
  ':)': true,
  ':P': true,
  ':p': true,
  ':O': true,
  ':3': true,
  ':|': true,
  ':/': true,
  ':\\': true,
  ':$': true,
  ':*': true,
  ':@': true,
  ':-(': true,
  ':-)': true,
  ':-P': true,
  ':-p': true,
  ':-O': true,
  ':-3': true,
  ':-|': true,
  ':-/': true,
  ':-\\': true,
  ':-$': true,
  ':-*': true,
  ':-@': true,
  ':^(': true,
  ':^)': true,
  ':^P': true,
  ':^p': true,
  ':^O': true,
  ':^3': true,
  ':^|': true,
  ':^/': true,
  ':^\\': true,
  ':^$': true,
  ':^*': true,
  ':^@': true,
  '):': true,
  '(:': true,
  '$:': true,
  '*:': true,
  ')-:': true,
  '(-:': true,
  '$-:': true,
  '*-:': true,
  ')^:': true,
  '(^:': true,
  '$^:': true,
  '*^:': true,
  '<3': true,
  '</3': true,
  '<\\3': true
};

},{}],132:[function(_dereq_,module,exports){
'use strict'; //markov-like stats about co-occurance, for hints about unknown terms
//basically, a little-bit better than the noun-fallback
//just top n-grams from nlp tags, generated from nlp-corpus
//after this word, here's what happens usually

var afterThisWord = {
  i: 'Verb',
  //44% //i walk..
  first: 'Noun',
  //50% //first principles..
  it: 'Verb',
  //33%
  there: 'Verb',
  //35%
  // to: 'Verb', //32%
  not: 'Verb',
  //33%
  because: 'Noun',
  //31%
  if: 'Noun',
  //32%
  but: 'Noun',
  //26%
  who: 'Verb',
  //40%
  this: 'Noun',
  //37%
  his: 'Noun',
  //48%
  when: 'Noun',
  //33%
  you: 'Verb',
  //35%
  very: 'Adjective',
  // 39%
  old: 'Noun',
  //51%
  never: 'Verb',
  //42%
  before: 'Noun' //28%

}; //in advance of this word, this is what happens usually

var beforeThisWord = {
  there: 'Verb',
  //23% // be there
  me: 'Verb',
  //31% //see me
  man: 'Adjective',
  // 80% //quiet man
  only: 'Verb',
  //27% //sees only
  him: 'Verb',
  //32% //show him
  were: 'Noun',
  //48% //we were
  // what: 'Verb', //25% //know what
  took: 'Noun',
  //38% //he took
  himself: 'Verb',
  //31% //see himself
  went: 'Noun',
  //43% //he went
  who: 'Noun',
  //47% //person who
  jr: 'Person'
}; //following this POS, this is likely

var afterThisPos = {
  Adjective: 'Noun',
  //36% //blue dress
  Possessive: 'Noun',
  //41% //his song
  Determiner: 'Noun',
  //47%
  Adverb: 'Verb',
  //20%
  // Person: 'Verb', //40%
  Pronoun: 'Verb',
  //40%
  Value: 'Noun',
  //47%
  Ordinal: 'Noun',
  //53%
  Modal: 'Verb',
  //35%
  Superlative: 'Noun',
  //43%
  Demonym: 'Noun',
  //38%
  // Organization: 'Verb', //33%
  Honorific: 'Person' //
  // FirstName: 'Person', //

}; //in advance of this POS, this is likely

var beforeThisPos = {
  Copula: 'Noun',
  //44% //spencer is
  PastTense: 'Noun',
  //33% //spencer walked
  Conjunction: 'Noun',
  //36%
  Modal: 'Noun',
  //38%
  PluperfectTense: 'Noun',
  //40%
  PerfectTense: 'Verb' //32%
  // LastName: 'FirstName', //

};
module.exports = {
  beforeThisWord: beforeThisWord,
  afterThisWord: afterThisWord,
  beforeThisPos: beforeThisPos,
  afterThisPos: afterThisPos
};

},{}],133:[function(_dereq_,module,exports){
'use strict'; //regex suffix patterns and their most common parts of speech,
//built using wordnet, by spencer kelly.
//this mapping shrinks-down the uglified build

var Adj = 'Adjective';
var Inf = 'Infinitive';
var Pres = 'PresentTense';
var Sing = 'Singular';
var Past = 'PastTense';
var Adverb = 'Adverb';
var Exp = 'Expression';
var Actor = 'Actor';
var Verb = 'Verb';
var Noun = 'Noun';
var Last = 'LastName'; //the order here matters.
//regexes indexed by mandated last-character

module.exports = {
  a: [[/.[aeiou]na$/, Noun], [/.[oau][wvl]ska$/, Last], //polish (female)
  [/.[^aeiou]ica$/, Sing], [/^([hyj]a)+$/, Exp] //hahah
  ],
  c: [[/.[^aeiou]ic$/, Adj]],
  d: [[/.[ia]sed$/, Adj], [/.[gt]led$/, Adj], [/.[aeiou][td]ed$/, Past], [/.[^aeiou]led$/, Past], //rumbled
  [/[^aeiou]ard$/, Sing], [/[aeiou][^aeiou]id$/, Adj], [/[aeiou]c?ked$/, Past], //hooked
  [/[^aeiou][aeiou][tvx]ed$/, Past], //boxed
  [/[aeiou]red$/, Past], //cheered
  [/.[vrl]id$/, Adj]],
  e: [[/.[lnr]ize$/, Inf], [/.[^aeiou]ise$/, Inf], [/.[aeiou]te$/, Inf], [/.[^aeiou][ai]ble$/, Adj], [/.[^aeiou]eable$/, Adj], [/.[^aeiou]ive$/, Adj]],
  h: [[/.[^aeiouf]ish$/, Adj], [/.v[iy]ch$/, Last], //east-europe
  [/^ug?h+$/, Exp], //uhh
  [/^uh[ -]?oh$/, Exp] //uhoh
  ],
  i: [[/.[oau][wvl]ski$/, Last] //polish (male)
  ],
  k: [[/^(k)+$/, Exp] //kkkk
  ],
  l: [[/.[gl]ial$/, Adj], [/.[^aeiou]ful$/, Adj], [/.[nrtumcd]al$/, Adj], [/.[^aeiou][ei]al$/, Adj]],
  m: [[/.[^aeiou]ium$/, Sing], [/[^aeiou]ism$/, Sing], [/^h*u*m+$/, Exp], //mmmmmmm / ummmm / huuuuuummmmmm
  [/^\d+ ?[ap]m$/, 'Date']],
  n: [[/.[lsrnpb]ian$/, Adj], [/[^aeiou]ician$/, Actor], [/okin$/, 'Gerund']],
  o: [[/^no+$/, Exp], //noooo
  [/^(yo)+$/, Exp], //yoyo
  [/^woo+[pt]?$/, Exp] //woo
  ],
  r: [[/.[ilk]er$/, 'Comparative'], [/[aeiou][pns]er$/, Sing], [/[^i]fer$/, Inf], [/.[^aeiou][ao]pher$/, Actor]],
  t: [[/.[di]est$/, 'Superlative'], [/.[icldtgrv]ent$/, Adj], [/[aeiou].*ist$/, Adj], [/^[a-z]et$/, Verb]],
  s: [[/.[rln]ates$/, Pres], [/.[^z]ens$/, Verb], [/.[lstrn]us$/, Sing], [/[aeiou][^aeiou]is$/, Sing], [/[a-z]\'s$/, Noun], [/^yes+$/, Exp] //yessss
  ],
  v: [[/.[^aeiou][ai][kln]ov$/, Last] //east-europe
  ],
  y: [[/.[cts]hy$/, Adj], [/.[st]ty$/, Adj], [/.[gk]y$/, Adj], [/.[tnl]ary$/, Adj], [/.[oe]ry$/, Sing], [/[rdntkbhs]ly$/, Adverb], [/...lly$/, Adverb], [/[bszmp]{2}y$/, Adj], [/.(gg|bb|zz)ly$/, Adj], [/.[aeiou]my$/, Adj], [/[ea]{2}zy$/, Adj], [/.[^aeiou]ity$/, Sing]]
};

},{}],134:[function(_dereq_,module,exports){
'use strict'; //just a foolish lookup of known suffixes

var Adj = 'Adjective';
var Inf = 'Infinitive';
var Pres = 'PresentTense';
var Sing = 'Singular';
var Past = 'PastTense';
var Avb = 'Adverb';
var Plrl = 'Plural';
var Actor = 'Actor';
var Vb = 'Verb';
var Noun = 'Noun';
var Last = 'LastName';
var Modal = 'Modal';
module.exports = [null, //0
null, //1
{
  //2-letter
  ea: Sing,
  ia: Noun,
  ic: Adj,
  ly: Avb,
  '\'n': Vb,
  '\'t': Vb
}, {
  //3-letter
  que: Adj,
  lar: Adj,
  ike: Adj,
  ffy: Adj,
  nny: Adj,
  rmy: Adj,
  azy: Adj,
  oid: Adj,
  mum: Adj,
  ous: Adj,
  end: Vb,
  sis: Sing,
  rol: Sing,
  ize: Inf,
  ify: Inf,
  zes: Pres,
  nes: Pres,
  ing: 'Gerund',
  //likely to be converted to Adj after lexicon pass
  ' so': Avb,
  '\'ll': Modal,
  '\'re': 'Copula'
}, {
  //4-letter
  teen: 'Value',
  tors: Noun,
  amed: Past,
  ched: Past,
  ends: Vb,
  oses: Pres,
  fies: Pres,
  ects: Pres,
  nded: Past,
  cede: Inf,
  tage: Inf,
  gate: Inf,
  vice: Sing,
  tion: Sing,
  cted: Past,
  ette: Sing,
  some: Adj,
  llen: Adj,
  ried: Adj,
  gone: Adj,
  made: Adj,
  fore: Avb,
  less: Avb,
  ices: Plrl,
  ions: Plrl,
  ints: Plrl,
  aped: Past,
  lked: Past,
  ould: Modal,
  tive: Actor,
  sson: Last,
  //swedish male
  czyk: Last,
  //polish (male)
  chuk: Last,
  //east-europe
  enko: Last,
  //east-europe
  akis: Last,
  //greek
  nsen: Last //norway

}, {
  //5-letter
  fully: Avb,
  where: Avb,
  wards: Avb,
  urned: Past,
  tized: Past,
  eased: Past,
  ances: Plrl,
  tures: Plrl,
  ports: Plrl,
  ettes: Plrl,
  ities: Plrl,
  rough: Adj,
  bound: Adj,
  tieth: 'Ordinal',
  ishes: Pres,
  tches: Pres,
  nssen: Last,
  //norway
  marek: Last //polish (male)

}, {
  //6-letter
  keeper: Actor,
  logist: Actor,
  auskas: Last,
  //lithuania
  teenth: 'Value'
}, {
  //7-letter
  sdottir: Last,
  //swedish female
  opoulos: Last //greek

}];

},{}],135:[function(_dereq_,module,exports){
'use strict'; //add 'downward' tags (that immediately depend on this one)

var addDownword = function addDownword(tags) {
  var keys = Object.keys(tags);
  keys.forEach(function (k) {
    tags[k].downward = []; //look for tags with this as parent

    for (var i = 0; i < keys.length; i++) {
      if (tags[keys[i]].isA && tags[keys[i]].isA === k) {
        tags[k].downward.push(keys[i]);
      }
    }
  });
};

module.exports = addDownword;

},{}],136:[function(_dereq_,module,exports){
'use strict'; //list of inconsistent parts-of-speech

module.exports = [//top-level pos are all inconsistent
['Noun', 'Verb', 'Adjective', 'Adverb', 'Determiner', 'Conjunction', 'Preposition', 'QuestionWord', 'Expression', 'Url', 'PhoneNumber', 'Email', 'Emoji'], //exlusive-nouns
['Person', 'Organization', 'Value', 'Place', 'Actor', 'Demonym', 'Pronoun'], //acronyms
['Acronym', 'Pronoun', 'Actor', 'Unit', 'Address'], ['Acronym', 'Plural'], //things that can't be plural
['Plural', 'Singular'], // ['Plural', 'Pronoun'],
// ['Plural', 'Person'],
// ['Plural', 'Organization'],
// ['Plural', 'Currency'],
// ['Plural', 'Ordinal'],
//exlusive-people
['MaleName', 'FemaleName'], ['FirstName', 'LastName', 'Honorific'], //adjectives
['Comparative', 'Superlative'], //values
['Value', 'Verb', 'Adjective'], // ['Value', 'Year'],
['Ordinal', 'Cardinal'], ['TextValue', 'NumericValue'], ['NiceNumber', 'TextValue'], ['Ordinal', 'Currency'], //$5.50th
//verbs
['PastTense', 'PresentTense', 'FutureTense'], ['Pluperfect', 'Copula', 'Modal', 'Participle', 'Infinitive', 'Gerund', 'FuturePerfect', 'PerfectTense'], ['Auxiliary', 'Noun', 'Value'], //date
['Month', 'WeekDay', 'Year', 'Duration', 'Holiday'], ['Particle', 'Conjunction', 'Adverb', 'Preposition'], ['Date', 'Verb', 'Adjective', 'Person'], ['Date', 'Money', 'RomanNumeral', 'Fraction'], //a/an -> 1
['Value', 'Determiner'], ['Url', 'Value', 'HashTag', 'PhoneNumber', 'Emoji'], //roman numerals
['RomanNumeral', 'Fraction', 'NiceNumber'], ['RomanNumeral', 'Money'], //cases
['UpperCase', 'TitleCase', 'CamelCase'], //phrases
['VerbPhrase', 'Noun', 'Adjective', 'Value'], //QuestionWord
['QuestionWord', 'VerbPhrase'], //acronyms
['Acronym', 'VerbPhrase']];

},{}],137:[function(_dereq_,module,exports){
'use strict';

var conflicts = _dereq_('./conflicts');

var nouns = _dereq_('./tags/nouns');

var verbs = _dereq_('./tags/verbs');

var values = _dereq_('./tags/values');

var dates = _dereq_('./tags/dates');

var misc = _dereq_('./tags/misc');

var addDownward = _dereq_('./addDownward'); //used for pretty-printing on the server-side


var colors = {
  Noun: 'blue',
  Date: 'red',
  Value: 'red',
  Verb: 'green',
  Auxiliary: 'green',
  Negative: 'green',
  VerbPhrase: 'green',
  Preposition: 'cyan',
  Condition: 'cyan',
  Conjunction: 'cyan',
  Determiner: 'cyan',
  Adjective: 'magenta',
  Adverb: 'cyan'
}; //extend tagset with new tags

var addIn = function addIn(obj, tags) {
  Object.keys(obj).forEach(function (k) {
    tags[k] = obj[k];
  });
}; //add tags to remove when tagging this one


var addConflicts = function addConflicts(tags) {
  Object.keys(tags).forEach(function (k) {
    tags[k].notA = {};

    for (var i = 0; i < conflicts.length; i++) {
      var arr = conflicts[i];

      if (arr.indexOf(k) !== -1) {
        arr = arr.filter(function (a) {
          return a !== k;
        });
        arr.forEach(function (e) {
          tags[k].notA[e] = true;
        });
      }
    }

    tags[k].notA = Object.keys(tags[k].notA);
  });
};

var addColors = function addColors(tags) {
  Object.keys(tags).forEach(function (k) {
    if (colors[k]) {
      tags[k].color = colors[k];
      return;
    }

    if (tags[k].isA && colors[tags[k].isA]) {
      tags[k].color = colors[tags[k].isA];
      return;
    }

    if (tags[k].isA && tags[tags[k].isA].color) {
      tags[k].color = tags[tags[k].isA].color;
    }
  });
};

var build = function build() {
  var tags = {};
  addIn(nouns, tags);
  addIn(verbs, tags);
  addIn(values, tags);
  addIn(dates, tags);
  addIn(misc, tags); //downstream

  addDownward(tags); //add enemies

  addConflicts(tags); //for nice-logging

  addColors(tags);
  return tags;
};

module.exports = build();

},{"./addDownward":135,"./conflicts":136,"./tags/dates":138,"./tags/misc":139,"./tags/nouns":140,"./tags/values":141,"./tags/verbs":142}],138:[function(_dereq_,module,exports){
"use strict";

module.exports = {
  Date: {},
  //not a noun, but usually is
  Month: {
    isA: 'Date',
    also: 'Singular'
  },
  WeekDay: {
    isA: 'Date',
    also: 'Noun'
  },
  RelativeDay: {
    isA: 'Date'
  },
  Year: {
    isA: 'Date'
  },
  Duration: {
    isA: 'Date',
    also: 'Noun'
  },
  Time: {
    isA: 'Date',
    also: 'Noun'
  },
  Holiday: {
    isA: 'Date',
    also: 'Noun'
  }
};

},{}],139:[function(_dereq_,module,exports){
"use strict";

module.exports = {
  Adjective: {},
  Comparable: {
    isA: 'Adjective'
  },
  Comparative: {
    isA: 'Adjective'
  },
  Superlative: {
    isA: 'Adjective'
  },
  NumberRange: {
    isA: 'Contraction'
  },
  Adverb: {},
  Currency: {},
  //glue
  Determiner: {},
  Conjunction: {},
  Preposition: {},
  QuestionWord: {},
  RelativeProunoun: {
    isA: 'Pronoun'
  },
  Expression: {},
  Abbreviation: {},
  Url: {},
  PhoneNumber: {},
  HashTag: {},
  AtMention: {
    is: 'Noun'
  },
  Emoji: {},
  Email: {},
  //non-exclusive
  Condition: {},
  VerbPhrase: {},
  Auxiliary: {},
  Negative: {},
  Contraction: {},
  TitleCase: {},
  CamelCase: {},
  UpperCase: {},
  Hyphenated: {},
  Acronym: {},
  ClauseEnd: {},
  // Quotes
  Quotation: {},
  StartQuotation: {
    isA: 'Quotation'
  },
  EndQuotation: {
    isA: 'Quotation'
  },
  //parentheses
  Parentheses: {},
  EndBracket: {
    isA: 'Parentheses'
  },
  StartBracket: {
    isA: 'Parentheses'
  }
};

},{}],140:[function(_dereq_,module,exports){
"use strict";

module.exports = {
  Noun: {},
  // - singular
  Singular: {
    isA: 'Noun'
  },
  //a specific thing that's capitalized
  ProperNoun: {
    isA: 'Noun'
  },
  // -- people
  Person: {
    isA: 'Singular'
  },
  FirstName: {
    isA: 'Person'
  },
  MaleName: {
    isA: 'FirstName'
  },
  FemaleName: {
    isA: 'FirstName'
  },
  LastName: {
    isA: 'Person'
  },
  Honorific: {
    isA: 'Noun'
  },
  Place: {
    isA: 'Singular'
  },
  // -- places
  Country: {
    isA: 'Place'
  },
  City: {
    isA: 'Place'
  },
  Region: {
    isA: 'Place'
  },
  Address: {
    isA: 'Place'
  },
  Organization: {
    isA: 'Singular'
  },
  SportsTeam: {
    isA: 'Organization'
  },
  Company: {
    isA: 'Organization'
  },
  School: {
    isA: 'Organization'
  },
  // - plural
  Plural: {
    isA: 'Noun'
  },
  Uncountable: {
    //(not plural or singular)
    isA: 'Noun'
  },
  Pronoun: {
    isA: 'Noun'
  },
  //a word for someone doing something -'plumber'
  Actor: {
    isA: 'Noun'
  },
  //a gerund-as-noun - 'swimming'
  Activity: {
    isA: 'Noun'
  },
  //'kilograms'
  Unit: {
    isA: 'Noun'
  },
  //'Canadians'
  Demonym: {
    isA: 'Noun'
  },
  //`john's`
  Possessive: {
    isA: 'Noun'
  }
};

},{}],141:[function(_dereq_,module,exports){
"use strict";

module.exports = {
  Value: {},
  Ordinal: {
    isA: 'Value'
  },
  Cardinal: {
    isA: 'Value'
  },
  Multiple: {
    isA: 'Value'
  },
  RomanNumeral: {
    isA: 'Cardinal'
  },
  Fraction: {
    isA: 'Value'
  },
  TextValue: {
    isA: 'Value'
  },
  NumericValue: {
    isA: 'Value'
  },
  NiceNumber: {
    isA: 'Value'
  },
  Money: {//isA: 'Cardinal'
  },
  Percent: {
    isA: 'Value'
  }
};

},{}],142:[function(_dereq_,module,exports){
"use strict";

module.exports = {
  Verb: {
    isA: 'VerbPhrase'
  },
  PresentTense: {
    isA: 'Verb'
  },
  Infinitive: {
    isA: 'PresentTense'
  },
  Gerund: {
    isA: 'PresentTense'
  },
  PastTense: {
    isA: 'Verb'
  },
  PerfectTense: {
    isA: 'Verb'
  },
  FuturePerfect: {
    isA: 'Verb'
  },
  Pluperfect: {
    isA: 'Verb'
  },
  Copula: {
    isA: 'Verb'
  },
  Modal: {
    isA: 'Verb'
  },
  Participle: {
    isA: 'Verb'
  },
  Particle: {
    isA: 'Verb'
  },
  PhrasalVerb: {
    isA: 'Verb'
  }
};

},{}],143:[function(_dereq_,module,exports){
'use strict';

var fns = _dereq_('./paths').fns;

var build_whitespace = _dereq_('./whitespace');

var makeUID = _dereq_('./makeUID'); //normalization


var addNormal = _dereq_('./methods/normalize/normalize').addNormal;

var addRoot = _dereq_('./methods/normalize/root');

var Term = function Term(str, world) {
  this.tags = {};
  this._text = fns.ensureString(str); // this.world = world;

  Object.defineProperty(this, 'world', {
    enumerable: false,
    // hide it from for..in
    value: world
  }); // this.world = function() {
  //   return world;
  // };
  //seperate whitespace from the text

  var parsed = build_whitespace(this._text);
  this.whitespace = parsed.whitespace;
  this._text = parsed.text;
  this.parent = null;
  this.silent_term = '';
  this.lumped = false; //normalize the _text

  addNormal(this);
  addRoot(this); //has this term been modified

  this.dirty = false; //make a unique id for this term

  this.uid = makeUID(this.normal); //getters/setters

  Object.defineProperty(this, 'text', {
    get: function get() {
      return this._text;
    },
    set: function set(txt) {
      txt = txt || '';
      this._text = txt.trim();
      this.dirty = true; // if (this._text !== txt) {
      //   console.log('|' + txt + '|');
      // console.log(build_whitespace(txt));
      // this.whitespace = build_whitespace(txt);
      //   console.log(this.whitespace);
      // }

      this.normalize();
    }
  }); //bit faster than .constructor.name or w/e

  Object.defineProperty(this, 'isA', {
    get: function get() {
      return 'Term';
    }
  });
};
/**run each time a new text is set */


Term.prototype.normalize = function () {
  addNormal(this);
  addRoot(this);
  return this;
};
/** where in the sentence is it? zero-based. */


Term.prototype.index = function () {
  var ts = this.parentTerms;

  if (!ts) {
    return null;
  }

  return ts.terms.indexOf(this);
};
/** make a copy with no originals to the original  */


Term.prototype.clone = function () {
  var term = new Term(this._text, this.world);
  term.tags = fns.copy(this.tags);
  term.whitespace = fns.copy(this.whitespace);
  term.silent_term = this.silent_term;
  return term;
};

_dereq_('./methods/misc')(Term);

_dereq_('./methods/out')(Term);

_dereq_('./methods/tag')(Term);

_dereq_('./methods/case')(Term);

_dereq_('./methods/punctuation')(Term);

module.exports = Term;

},{"./makeUID":144,"./methods/case":146,"./methods/misc":147,"./methods/normalize/normalize":149,"./methods/normalize/root":150,"./methods/out":153,"./methods/punctuation":156,"./methods/tag":158,"./paths":161,"./whitespace":162}],144:[function(_dereq_,module,exports){
'use strict'; //this is a not-well-thought-out way to reduce our dependence on `object===object` original stuff
//generates a unique id for this term
//may need to change when the term really-transforms? not sure.

var uid = function uid(str) {
  var nums = '';

  for (var i = 0; i < 5; i++) {
    nums += parseInt(Math.random() * 9, 10);
  }

  return str + '-' + nums;
};

module.exports = uid;

},{}],145:[function(_dereq_,module,exports){
'use strict'; // const tagSet = require('../paths').tags;

var boringTags = {
  Auxiliary: 1,
  Possessive: 1,
  TitleCase: 1,
  ClauseEnd: 1,
  Comma: 1,
  CamelCase: 1,
  UpperCase: 1,
  Hyphenated: 1,
  VerbPhrase: 1,
  EndBracket: 1,
  StartBracket: 1,
  Parentheses: 1,
  Quotation: 1
};

var bestTag = function bestTag(t) {
  var tagSet = t.world.tags;
  var tags = Object.keys(t.tags);
  tags = tags.sort(); //alphabetical, first
  //then sort by #of parent tags

  tags = tags.sort(function (a, b) {
    //bury the tags we dont want
    if (!tagSet[a]) {
      return 1;
    }

    if (boringTags[b] || !tagSet[b]) {
      return -1;
    }

    if (tagSet[a].downward.length > tagSet[b].downward.length) {
      return 1;
    }

    return 1;
  });
  return tags[0];
};

module.exports = bestTag;

},{}],146:[function(_dereq_,module,exports){
'use strict';

var addMethods = function addMethods(Term) {
  var methods = {
    toUpperCase: function toUpperCase() {
      this.text = this._text.toUpperCase();
      this.tag('#UpperCase', 'toUpperCase');
      return this;
    },
    toLowerCase: function toLowerCase() {
      this.text = this._text.toLowerCase();
      this.unTag('#TitleCase');
      this.unTag('#UpperCase');
      return this;
    },
    toTitleCase: function toTitleCase() {
      this.text = this._text.replace(/^ *[a-z]/, function (x) {
        return x.toUpperCase();
      });
      this.tag('#TitleCase', 'toTitleCase');
      return this;
    },
    //(camelCase() is handled in `./terms` )

    /** is it titlecased because it deserves it? Like a person's name? */
    needsTitleCase: function needsTitleCase() {
      var titleCases = ['Person', 'Place', 'Organization', 'Acronym', 'UpperCase', 'Currency', 'RomanNumeral', 'Month', 'WeekDay', 'Holiday', 'Demonym'];

      for (var i = 0; i < titleCases.length; i++) {
        if (this.tags[titleCases[i]]) {
          return true;
        }
      } //specific words that keep their titlecase
      //https://en.wikipedia.org/wiki/Capitonym


      var irregulars = ['i', 'god', 'allah'];

      for (var _i = 0; _i < irregulars.length; _i++) {
        if (this.normal === irregulars[_i]) {
          return true;
        }
      }

      return false;
    }
  }; //hook them into result.proto

  Object.keys(methods).forEach(function (k) {
    Term.prototype[k] = methods[k];
  });
  return Term;
};

module.exports = addMethods;

},{}],147:[function(_dereq_,module,exports){
'use strict';

var _isAcronym = _dereq_('./normalize/isAcronym');

var _bestTag = _dereq_('./bestTag'); //regs-


var hasVowel = /[aeiouy]/i;
var hasLetter = /[a-z]/;
var hasNumber = /[0-9]/;

var addMethods = function addMethods(Term) {
  var methods = {
    /** which tag best-represents this term?*/
    bestTag: function bestTag() {
      return _bestTag(this);
    },

    /** is this term like F.B.I. or NBA */
    isAcronym: function isAcronym() {
      return _isAcronym(this._text);
    },

    /** check if it is word-like in english */
    isWord: function isWord() {
      var t = this; //assume a contraction produces a word-word

      if (t.silent_term) {
        return true;
      } //no letters or numbers


      if (/[a-z|A-Z|0-9]/.test(t.text) === false) {
        return false;
      } //has letters, but with no vowels


      if (t.normal.length > 3 && hasLetter.test(t.normal) === true && hasVowel.test(t.normal) === false && t.isAcronym() === false) {
        return false;
      } //has numbers but not a 'value'


      if (hasNumber.test(t.normal) === true && t.tags.hasOwnProperty('Value') === false) {
        //s4e
        if (/[a-z][0-9][a-z]/.test(t.normal) === true) {
          return false;
        } //ensure it looks like a 'value' eg '-$4,231.00'
        // if (/^([$-])*?([0-9,\.])*?([s\$%])*?$/.test(t.normal) === false) {
        //   return false;
        // }

      }

      return true;
    }
  }; //hook them into result.proto

  Object.keys(methods).forEach(function (k) {
    Term.prototype[k] = methods[k];
  });
  return Term;
};

module.exports = addMethods;

},{"./bestTag":145,"./normalize/isAcronym":148}],148:[function(_dereq_,module,exports){
'use strict'; //regs -

var periodAcronym = /([A-Z]\.)+[A-Z]?,?$/;
var oneLetterAcronym = /^[A-Z]\.,?$/;
var noPeriodAcronym = /[A-Z]{2}('s|,)?$/;
/** does it appear to be an acronym, like FBI or M.L.B. */

var isAcronym = function isAcronym(str) {
  //like N.D.A
  if (periodAcronym.test(str) === true) {
    return true;
  } //like 'F.'


  if (oneLetterAcronym.test(str) === true) {
    return true;
  } //like NDA


  if (noPeriodAcronym.test(str) === true) {
    return true;
  }

  return false;
};

module.exports = isAcronym;

},{}],149:[function(_dereq_,module,exports){
'use strict';

var killUnicode = _dereq_('./unicode');

var isAcronym = _dereq_('./isAcronym'); //some basic operations on a string to reduce noise


exports.normalize = function (str) {
  str = str || '';
  str = str.toLowerCase();
  str = str.trim();
  var original = str; //(very) rough ASCII transliteration -  bjŏrk -> bjork

  str = killUnicode(str); //#tags, @mentions

  str = str.replace(/^[#@]/, ''); //punctuation

  str = str.replace(/[,;.!?]+$/, ''); // coerce single curly quotes

  str = str.replace(/[\u0027\u0060\u00B4\u2018\u2019\u201A\u201B\u2032\u2035\u2039\u203A]+/g, '\''); // coerce double curly quotes

  str = str.replace(/[\u0022\u00AB\u00BB\u201C\u201D\u201E\u201F\u2033\u2034\u2036\u2037\u2E42\u301D\u301E\u301F\uFF02]+/g, '"'); //coerce Unicode ellipses

  str = str.replace(/\u2026/g, '...'); //en-dash

  str = str.replace(/\u2013/g, '-'); //lookin'->looking (make it easier for conjugation)

  if (/[a-z][^aeiou]in['’]$/.test(str) === true) {
    str = str.replace(/in['’]$/, 'ing');
  } //turn re-enactment to reenactment


  if (/^(re|un)-?[^aeiou]./.test(str) === true) {
    str = str.replace('-', '');
  } //strip leading & trailing grammatical punctuation


  if (/^[:;]/.test(str) === false) {
    str = str.replace(/\.{3,}$/g, '');
    str = str.replace(/['",\.!:;\?\)]+$/g, '');
    str = str.replace(/^['"\(]+/g, '');
  } //do this again..


  str = str.trim(); //oh shucks,

  if (str === '') {
    str = original;
  }

  return str;
};

exports.addNormal = function (term) {
  var str = term._text || '';
  str = exports.normalize(str); //compact acronyms

  if (isAcronym(term._text)) {
    str = str.replace(/\./g, '');
  } //nice-numbers


  str = str.replace(/([0-9]),([0-9])/g, '$1$2');
  term.normal = str;
}; // console.log(normalize('Dr. V Cooper'));

},{"./isAcronym":148,"./unicode":151}],150:[function(_dereq_,module,exports){
'use strict'; //

var rootForm = function rootForm(term) {
  var str = term.normal || term.silent_term || ''; //handle apostrophes and stuff (go further than normalize())

  str = str.replace(/'s\b/, '');
  str = str.replace(/'$/, '');
  term.root = str;
};

module.exports = rootForm;

},{}],151:[function(_dereq_,module,exports){
'use strict'; //a hugely-ignorant, and widely subjective transliteration of latin, cryllic, greek unicode characters to english ascii.
//approximate visual (not semantic or phonetic) relationship between unicode and ascii characters
//http://en.wikipedia.org/wiki/List_of_Unicode_characters
//https://docs.google.com/spreadsheet/ccc?key=0Ah46z755j7cVdFRDM1A2YVpwa1ZYWlpJM2pQZ003M0E

var compact = {
  '!': '¡',
  '?': '¿Ɂ',
  '"': '“”"❝❞',
  '\'': '‘‛❛❜',
  '-': '—–',
  'a': 'ªÀÁÂÃÄÅàáâãäåĀāĂăĄąǍǎǞǟǠǡǺǻȀȁȂȃȦȧȺΆΑΔΛάαλАДадѦѧӐӑӒӓƛɅæ',
  'b': 'ßþƀƁƂƃƄƅɃΒβϐϦБВЪЬбвъьѢѣҌҍҔҕƥƾ',
  'c': '¢©ÇçĆćĈĉĊċČčƆƇƈȻȼͻͼͽϲϹϽϾϿЄСсєҀҁҪҫ',
  'd': 'ÐĎďĐđƉƊȡƋƌǷ',
  'e': 'ÈÉÊËèéêëĒēĔĕĖėĘęĚěƎƏƐǝȄȅȆȇȨȩɆɇΈΕΞΣέεξϱϵ϶ЀЁЕЭеѐёҼҽҾҿӖӗӘәӚӛӬӭ',
  'f': 'ƑƒϜϝӺӻҒғӶӷſ',
  'g': 'ĜĝĞğĠġĢģƓǤǥǦǧǴǵ',
  'h': 'ĤĥĦħƕǶȞȟΉΗЂЊЋНнђћҢңҤҥҺһӉӊ',
  'I': 'ÌÍÎÏ',
  'i': 'ìíîïĨĩĪīĬĭĮįİıƖƗȈȉȊȋΊΐΪίιϊІЇії',
  'j': 'ĴĵǰȷɈɉϳЈј',
  'k': 'ĶķĸƘƙǨǩΚκЌЖКжкќҚқҜҝҞҟҠҡ',
  'l': 'ĹĺĻļĽľĿŀŁłƚƪǀǏǐȴȽΙӀӏ',
  'm': 'ΜϺϻМмӍӎ',
  'n': 'ÑñŃńŅņŇňŉŊŋƝƞǸǹȠȵΝΠήηϞЍИЙЛПийлпѝҊҋӅӆӢӣӤӥπ',
  'o': 'ÒÓÔÕÖØðòóôõöøŌōŎŏŐőƟƠơǑǒǪǫǬǭǾǿȌȍȎȏȪȫȬȭȮȯȰȱΌΘΟθοσόϕϘϙϬϭϴОФоѲѳӦӧӨөӪӫ¤ƍΏ',
  'p': 'ƤƿΡρϷϸϼРрҎҏÞ',
  'q': 'Ɋɋ',
  'r': 'ŔŕŖŗŘřƦȐȑȒȓɌɍЃГЯгяѓҐґ',
  's': 'ŚśŜŝŞşŠšƧƨȘșȿςϚϛϟϨϩЅѕ',
  't': 'ŢţŤťŦŧƫƬƭƮȚțȶȾΓΤτϮϯТт҂Ҭҭ',
  'u': 'µÙÚÛÜùúûüŨũŪūŬŭŮůŰűŲųƯưƱƲǓǔǕǖǗǘǙǚǛǜȔȕȖȗɄΰμυϋύϑЏЦЧцџҴҵҶҷӋӌӇӈ',
  'v': 'νѴѵѶѷ',
  'w': 'ŴŵƜωώϖϢϣШЩшщѡѿ',
  'x': '×ΧχϗϰХхҲҳӼӽӾӿ',
  'y': 'ÝýÿŶŷŸƳƴȲȳɎɏΎΥΫγψϒϓϔЎУучўѰѱҮүҰұӮӯӰӱӲӳ',
  'z': 'ŹźŻżŽžƩƵƶȤȥɀΖζ'
}; //decompress data into two hashes

var unicode = {};
Object.keys(compact).forEach(function (k) {
  compact[k].split('').forEach(function (s) {
    unicode[s] = k;
  });
});

var killUnicode = function killUnicode(str) {
  var chars = str.split('');
  chars.forEach(function (s, i) {
    if (unicode[s]) {
      chars[i] = unicode[s];
    }
  });
  return chars.join('');
};

module.exports = killUnicode; // console.log(killUnicode('bjŏȒk—Ɏó'));

},{}],152:[function(_dereq_,module,exports){
'use strict';

var paths = _dereq_('../../paths');

var fns = paths.fns;
var tagset = paths.tags; //a nicer logger for the client-side

var clientSide = function clientSide(t) {
  var color = 'silver';
  var tags = Object.keys(t.tags);

  for (var i = 0; i < tags.length; i++) {
    if (tagset[tags[i]] && tagset[tags[i]].color) {
      color = tagset[tags[i]].color;
      break;
    }
  }

  var word = fns.leftPad(t.text, 12);
  word += ' ' + tags;
  console.log('%c ' + word, 'color: ' + color);
};

module.exports = clientSide;

},{"../../paths":161}],153:[function(_dereq_,module,exports){
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var renderHtml = _dereq_('./renderHtml');

var clientDebug = _dereq_('./client');

var serverDebug = _dereq_('./server');

var methods = {
  /** a pixel-perfect reproduction of the input, with whitespace preserved */
  text: function text(r) {
    return (r.whitespace.before || '') + r._text + (r.whitespace.after || '');
  },

  /** a lowercased, punctuation-cleaned, whitespace-trimmed version of the word */
  normal: function normal(r) {
    return r.normal;
  },

  /** even-more normalized than normal */
  root: function root(r) {
    return r.root || r.normal;
  },

  /** the &encoded term in a span element, with POS as classNames */
  html: function html(r) {
    return renderHtml(r);
  },

  /** a simplified response for Part-of-Speech tagging*/
  tags: function tags(r) {
    return {
      text: r.text,
      normal: r.normal,
      tags: Object.keys(r.tags)
    };
  },

  /** check-print information for the console */
  debug: function debug(t) {
    if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
      clientDebug(t);
    } else {
      serverDebug(t);
    }
  }
};

var addMethods = function addMethods(Term) {
  //hook them into result.proto
  Term.prototype.out = function (fn) {
    if (!methods[fn]) {
      fn = 'text';
    }

    return methods[fn](this);
  };

  return Term;
};

module.exports = addMethods;

},{"./client":152,"./renderHtml":154,"./server":155}],154:[function(_dereq_,module,exports){
'use strict'; //turn xml special characters into apersand-encoding.
//i'm not sure this is perfectly safe.

var escapeHtml = function escapeHtml(s) {
  var HTML_CHAR_MAP = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    '\'': '&#39;',
    ' ': '&nbsp;'
  };
  return s.replace(/[<>&"' ]/g, function (ch) {
    return HTML_CHAR_MAP[ch];
  });
}; //remove html elements already in the text
//not tested!
//http://stackoverflow.com/questions/295566/sanitize-rewrite-html-on-the-client-side


var sanitize = function sanitize(html) {
  var tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';
  var tagOrComment = new RegExp('<(?:' // Comment body.
  + '!--(?:(?:-*[^->])*--+|-?)' // Special "raw text" elements whose content should be elided.
  + '|script\\b' + tagBody + '>[\\s\\S]*?</script\\s*' + '|style\\b' + tagBody + '>[\\s\\S]*?</style\\s*' // Regular name
  + '|/?[a-z]' + tagBody + ')>', 'gi');
  var oldHtml;

  do {
    oldHtml = html;
    html = html.replace(tagOrComment, '');
  } while (html !== oldHtml);

  return html.replace(/</g, '&lt;');
}; //turn the term into ~properly~ formatted html


var renderHtml = function renderHtml(t) {
  var classes = Object.keys(t.tags).filter(function (tag) {
    return tag !== 'Term';
  });
  classes = classes.map(function (c) {
    return 'nl-' + c;
  });
  classes = classes.join(' ');
  var text = sanitize(t.text);
  text = escapeHtml(text);
  var el = '<span class="' + classes + '">' + text + '</span>';
  return escapeHtml(t.whitespace.before) + el + escapeHtml(t.whitespace.after);
};

module.exports = renderHtml;

},{}],155:[function(_dereq_,module,exports){
'use strict';

var fns = _dereq_('../../paths').fns; //pretty-print a term on the nodejs console


var serverDebug = function serverDebug(t) {
  var tags = Object.keys(t.tags).map(function (tag) {
    return fns.printTag(tag);
  }).join(', ');
  var word = t.text;
  word = '\'' + fns.yellow(word || '-') + '\'';
  var silent = '';

  if (t.silent_term) {
    silent = '[' + t.silent_term + ']';
  }

  word = fns.leftPad(word, 20);
  word += fns.leftPad(silent, 8);
  console.log('   ' + word + '   ' + '     - ' + tags);
};

module.exports = serverDebug;

},{"../../paths":161}],156:[function(_dereq_,module,exports){
'use strict'; // const endPunct = /([^\/,:;.()!?]{0,1})([\/,:;.()!?]+)$/i;

var endPunct = /([a-z0-9 ])([,:;.!?]+)$/i; //old

var addMethods = function addMethods(Term) {
  var methods = {
    /** the punctuation at the end of this term*/
    getPunctuation: function getPunctuation() {
      var m = this.text.match(endPunct);

      if (m) {
        return m[2];
      }

      m = this.whitespace.after.match(endPunct);

      if (m) {
        return m[2];
      }

      return null;
    },
    setPunctuation: function setPunctuation(punct) {
      this.killPunctuation();
      this.text += punct;

      if (punct === ',') {
        this.tags.Comma = true;
      }

      return this;
    },

    /** check if the term ends with a comma */
    hasComma: function hasComma() {
      if (this.getPunctuation() === ',') {
        return true;
      }

      return false;
    },
    killPunctuation: function killPunctuation() {
      this.text = this._text.replace(endPunct, '$1');
      delete this.tags.Comma;
      delete this.tags.ClauseEnd;
      return this;
    }
  }; //hook them into result.proto

  Object.keys(methods).forEach(function (k) {
    Term.prototype[k] = methods[k];
  });
  return Term;
};

module.exports = addMethods;

},{}],157:[function(_dereq_,module,exports){
'use strict'; //recursively-check compatibility of this tag and term

var canBe = function canBe(term, tag) {
  var tagset = term.world.tags; //fail-fast

  if (tagset[tag] === undefined) {
    return true;
  } //loop through tag's contradictory tags


  var enemies = tagset[tag].notA || [];

  for (var i = 0; i < enemies.length; i++) {
    if (term.tags[enemies[i]] === true) {
      return false;
    }
  }

  if (tagset[tag].isA !== undefined) {
    return canBe(term, tagset[tag].isA); //recursive
  }

  return true;
};

module.exports = canBe;

},{}],158:[function(_dereq_,module,exports){
'use strict';

var setTag = _dereq_('./setTag');

var _unTag = _dereq_('./unTag');

var _canBe = _dereq_('./canBe'); //symbols used in sequential taggers which mean 'do nothing'
//.tag('#Person #Place . #City')


var ignore = {
  '.': true
};

var addMethods = function addMethods(Term) {
  var methods = {
    /** set the term as this part-of-speech */
    tag: function tag(_tag, reason) {
      if (ignore[_tag] !== true) {
        setTag(this, _tag, reason);
      }
    },

    /** remove this part-of-speech from the term*/
    unTag: function unTag(tag, reason) {
      if (ignore[tag] !== true) {
        _unTag(this, tag, reason);
      }
    },

    /** is this tag compatible with this word */
    canBe: function canBe(tag) {
      tag = tag || '';

      if (typeof tag === 'string') {
        //everything can be '.'
        if (ignore[tag] === true) {
          return true;
        }

        tag = tag.replace(/^#/, '');
      }

      return _canBe(this, tag);
    }
  }; //hook them into term.prototype

  Object.keys(methods).forEach(function (k) {
    Term.prototype[k] = methods[k];
  });
  return Term;
};

module.exports = addMethods;

},{"./canBe":157,"./setTag":159,"./unTag":160}],159:[function(_dereq_,module,exports){
'use strict'; //set a term as a particular Part-of-speech

var path = _dereq_('../../paths');

var log = path.log;
var fns = path.fns;

var unTag = _dereq_('./unTag'); // const tagset = path.tags;
// const tagset = require('../../../tagset');


var putTag = function putTag(term, tag, reason) {
  var tagset = term.world.tags;
  tag = tag.replace(/^#/, ''); //already got this

  if (term.tags[tag] === true) {
    return;
  }

  term.tags[tag] = true;
  log.tag(term, tag, reason); //extra logic per-each POS

  if (tagset[tag]) {
    //drop any conflicting tags
    var enemies = tagset[tag].notA || [];

    for (var i = 0; i < enemies.length; i++) {
      if (term.tags[enemies[i]] === true) {
        unTag(term, enemies[i], reason);
      }
    } //apply implicit tags


    if (tagset[tag].isA) {
      var doAlso = tagset[tag].isA;

      if (term.tags[doAlso] !== true) {
        putTag(term, doAlso, ' --> ' + tag); //recursive
      }
    }
  }
}; //give term this tag


var wrap = function wrap(term, tag, reason) {
  if (!term || !tag) {
    return;
  }

  var tagset = term.world.tags; //handle multiple tags

  if (fns.isArray(tag)) {
    tag.forEach(function (t) {
      return putTag(term, t, reason);
    }); //recursive

    return;
  }

  putTag(term, tag, reason); //add 'extra' tag (for some special tags)

  if (tagset[tag] && tagset[tag].also !== undefined) {
    putTag(term, tagset[tag].also, reason);
  }
};

module.exports = wrap;

},{"../../paths":161,"./unTag":160}],160:[function(_dereq_,module,exports){
'use strict'; //set a term as a particular Part-of-speech

var path = _dereq_('../../paths');

var log = path.log; //remove a tag from a term

var unTag = function unTag(term, tag, reason) {
  var tagset = term.world.tags;

  if (term.tags[tag]) {
    log.unTag(term, tag, reason);
    delete term.tags[tag]; //delete downstream tags too

    if (tagset[tag]) {
      var also = tagset[tag].downward;

      for (var i = 0; i < also.length; i++) {
        unTag(term, also[i], ' - -   - ');
      }
    }
  }
};

var wrap = function wrap(term, tag, reason) {
  if (!term || !tag) {
    return;
  } //support '*' flag - remove all-tags


  if (tag === '*') {
    term.tags = {};
    return;
  } //remove this tag


  unTag(term, tag, reason);
  return;
};

module.exports = wrap;

},{"../../paths":161}],161:[function(_dereq_,module,exports){
"use strict";

module.exports = {
  fns: _dereq_('../fns'),
  log: _dereq_('../log'),
  tags: _dereq_('../tags')
};

},{"../fns":3,"../log":6,"../tags":137}],162:[function(_dereq_,module,exports){
'use strict'; //punctuation regs-  are we having fun yet?

var before = /^([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]|\x2D+|\.\.+|\/|"|"|\uFF02|'|\u201C|\u2018|\u201F|\u201B|\u201E|\u2E42|\u201A|\xAB|\u2039|\u2035|\u2036|\u2037|\u301D|`|\u301F)+/; // const after = /(\s+|-+|\.\.+|"|\u0022|\uFF02|\u0027|\u201D|\u2019|\u00BB|\u203A|\u2032|\u2033|\u2034|\u301E|\u00B4)+$/u;

var afterSoft = /([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+|\x2D+|\.\.+|"|"|\uFF02|'|\u201D|\u2019|\xBB|\u203A|\u2032|\u2033|\u2034|\u301E|\xB4)+[ !,\.;\?]*$/;
var minusNumber = /^( *)-(\$|€|¥|£)?([0-9])/; //seperate the 'meat' from the trailing/leading whitespace.
//works in concert with ./src/text/tokenize.js

var build_whitespace = function build_whitespace(str) {
  var whitespace = {
    before: '',
    after: ''
  }; //get before punctuation/whitespace
  //mangle 'far - fetched', but don't mangle '-2'

  var m = str.match(minusNumber);

  if (m !== null) {
    whitespace.before = m[1];
    str = str.replace(/^ */, '');
  } else {
    m = str.match(before);

    if (m !== null) {
      whitespace.before = m[0];
      str = str.replace(before, '');
    }
  } //get after punctuation/whitespace


  m = str.match(afterSoft);

  if (m !== null) {
    str = str.replace(afterSoft, '');
    whitespace.after = m[0];
  }

  return {
    whitespace: whitespace,
    text: str
  };
};

module.exports = build_whitespace;

},{}],163:[function(_dereq_,module,exports){
'use strict';

var Term = _dereq_('../term');

var wordlike = /\S/;
var isBoundary = /^[!?.]+$/;
var notWord = {
  '.': true,
  '-': true,
  //dash
  '–': true,
  //en-dash
  '—': true,
  //em-dash
  '--': true,
  '...': true
};

var hasHyphen = function hasHyphen(str) {
  //dont split 're-do'
  if (/^(re|un)-?[^aeiou]./.test(str) === true) {
    return false;
  } //letter-number


  var reg = /^([a-z`"'/]+)(-|–|—)([a-z0-9].*)/i;

  if (reg.test(str) === true) {
    return true;
  } //number-letter
  // reg = /^([0-9]+)(-|–|—)([a-z].*)/i;
  // if (reg.test(str) === true) {
  //   return true;
  // }
  //support weird number-emdash combo '2010–2011'


  var reg2 = /^([0-9]+)(–|—)([0-9].*)/i;

  if (reg2.test(str)) {
    return true;
  }

  return false;
}; //support splitting terms like "open/closed"


var hasSlash = function hasSlash(word) {
  var reg = /[a-z]\/[a-z]/;

  if (reg.test(word)) {
    //only one slash though
    if (word.split(/\//g).length === 2) {
      return true;
    }
  }

  return false;
}; //turn a string into an array of terms (naiive for now, lumped later)


var fromString = function fromString(str, world) {
  var result = [];
  var arr = []; //start with a naiive split

  str = str || '';

  if (typeof str === 'number') {
    str = String(str);
  }

  var firstSplit = str.split(/(\S+)/);

  for (var i = 0; i < firstSplit.length; i++) {
    var word = firstSplit[i];

    if (hasHyphen(word) === true) {
      //support multiple-hyphenated-terms
      var hyphens = word.split(/[-–—]/);

      for (var o = 0; o < hyphens.length; o++) {
        if (o === hyphens.length - 1) {
          arr.push(hyphens[o]);
        } else {
          arr.push(hyphens[o] + '-');
        }
      }
    } else if (hasSlash(word) === true) {
      var slashes = word.split(/\//);
      arr.push(slashes[0]);
      arr.push('/' + slashes[1]);
    } else {
      arr.push(word);
    }
  } //greedy merge whitespace+arr to the right


  var carry = '';

  for (var _i = 0; _i < arr.length; _i++) {
    //if it's more than a whitespace
    if (wordlike.test(arr[_i]) === true && notWord.hasOwnProperty(arr[_i]) === false && isBoundary.test(arr[_i]) === false) {
      result.push(carry + arr[_i]);
      carry = '';
    } else {
      carry += arr[_i];
    }
  } //handle last one


  if (carry && result.length > 0) {
    result[result.length - 1] += carry; //put it on the end
  }

  return result.map(function (t) {
    return new Term(t, world);
  });
};

module.exports = fromString;

},{"../term":143}],164:[function(_dereq_,module,exports){
'use strict'; //getters/setters for the Terms class

module.exports = {
  parent: {
    get: function get() {
      return this.refText || this;
    },
    set: function set(r) {
      this.refText = r;
      return this;
    }
  },
  parentTerms: {
    get: function get() {
      return this.refTerms || this;
    },
    set: function set(r) {
      this.refTerms = r;
      return this;
    }
  },
  dirty: {
    get: function get() {
      for (var i = 0; i < this.terms.length; i++) {
        if (this.terms[i].dirty === true) {
          return true;
        }
      }

      return false;
    },
    set: function set(dirt) {
      this.terms.forEach(function (t) {
        t.dirty = dirt;
      });
    }
  },
  refTerms: {
    get: function get() {
      return this._refTerms || this;
    },
    set: function set(ts) {
      this._refTerms = ts;
      return this;
    }
  },
  found: {
    get: function get() {
      return this.terms.length > 0;
    }
  },
  length: {
    get: function get() {
      return this.terms.length;
    }
  },
  isA: {
    get: function get() {
      return 'Terms';
    }
  },
  whitespace: {
    get: function get() {
      var _this = this;

      return {
        before: function before(str) {
          _this.firstTerm().whitespace.before = str;
          return _this;
        },
        after: function after(str) {
          _this.lastTerm().whitespace.after = str;
          return _this;
        }
      };
    }
  }
};

},{}],165:[function(_dereq_,module,exports){
'use strict';

var build = _dereq_('./build');

var getters = _dereq_('./getters');

var w = _dereq_('../world'); //Terms is an array of Term objects, and methods that wrap around them


var Terms = function Terms(arr, world, refText, refTerms) {
  var _this = this;

  this.terms = arr;
  this.world = world || w;
  this.refText = refText;
  this._refTerms = refTerms;

  this.get = function (n) {
    return _this.terms[n];
  }; //apply getters


  var keys = Object.keys(getters);

  for (var i = 0; i < keys.length; i++) {
    Object.defineProperty(this, keys[i], getters[keys[i]]);
  }
};

Terms.fromString = function (str, world) {
  var termArr = build(str, world);
  var ts = new Terms(termArr, world, null); //give each term a original to this ts

  ts.terms.forEach(function (t) {
    t.parentTerms = ts;
  });
  return ts;
}; // Terms = require('./methods/lookup')(Terms);


_dereq_('./match')(Terms);

_dereq_('./methods/tag')(Terms);

_dereq_('./methods/loops')(Terms);

_dereq_('./match/not')(Terms);

_dereq_('./methods/delete')(Terms);

_dereq_('./methods/insert')(Terms);

_dereq_('./methods/misc')(Terms);

_dereq_('./methods/out')(Terms);

_dereq_('./methods/replace')(Terms);

_dereq_('./methods/split')(Terms);

_dereq_('./methods/transform')(Terms);

_dereq_('./methods/lump')(Terms);

module.exports = Terms;

},{"../world":215,"./build":163,"./getters":164,"./match":166,"./match/not":176,"./methods/delete":177,"./methods/insert":178,"./methods/loops":179,"./methods/lump":181,"./methods/misc":182,"./methods/out":183,"./methods/replace":184,"./methods/split":185,"./methods/tag":186,"./methods/transform":187}],166:[function(_dereq_,module,exports){
'use strict';

var syntax = _dereq_('./lib/syntax');

var startHere = _dereq_('./lib/startHere');

var Text = _dereq_('../../text');

var _match = _dereq_('./lib');

var matchMethods = function matchMethods(Terms) {
  var methods = {
    //support regex-like whitelist-match
    match: function match(reg, verbose) {
      var _this = this;

      //fail-fast #1
      if (this.terms.length === 0) {
        return new Text([], this.world, this.parent);
      } //fail-fast #2


      if (!reg) {
        return new Text([], this.world, this.parent);
      }

      var matches = _match(this, reg, verbose);

      matches = matches.map(function (a) {
        return new Terms(a, _this.world, _this.refText, _this.refTerms);
      });
      return new Text(matches, this.world, this.parent);
    },

    /**return first match */
    matchOne: function matchOne(str) {
      //fail-fast
      if (this.terms.length === 0) {
        return null;
      }

      var regs = syntax(str);

      for (var t = 0; t < this.terms.length; t++) {
        //don't loop through if '^'
        if (regs[0] && regs[0].starting && t > 0) {
          break;
        }

        var m = startHere(this, t, regs);

        if (m) {
          return m;
        }
      }

      return null;
    },

    /**return first match */
    has: function has(str) {
      return this.matchOne(str) !== null;
    }
  }; //hook them into result.proto

  Object.keys(methods).forEach(function (k) {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = matchMethods;

},{"../../text":192,"./lib":170,"./lib/startHere":174,"./lib/syntax":175}],167:[function(_dereq_,module,exports){
'use strict'; //applies the reg capture group setting to the term

var applyCaptureGroup = function applyCaptureGroup(term, reg) {
  if (reg.capture) {
    term.captureGroup = true;
  } else {
    term.captureGroup = undefined;
  }
};

module.exports = applyCaptureGroup;

},{}],168:[function(_dereq_,module,exports){
'use strict'; //take all the matches, and if there is a [capture group], only return that.

var onlyCaptureGroup = function onlyCaptureGroup(matches) {
  var results = [];
  matches.forEach(function (terms) {
    //if there's no capture group, we good.
    if (terms.filter(function (t) {
      return t.captureGroup === true;
    }).length === 0) {
      results.push(terms);
      return;
    } //otherwise, just return them as seperate subsets


    var current = [];

    for (var i = 0; i < terms.length; i += 1) {
      if (terms[i].captureGroup) {
        current.push(terms[i]);
      } else if (current.length > 0) {
        results.push(current);
        current = [];
      }
    }

    if (current.length > 0) {
      results.push(current);
    }
  });
  return results;
};

module.exports = onlyCaptureGroup;

},{}],169:[function(_dereq_,module,exports){
'use strict'; //
//find easy reasons to skip running the full match on this

var fastPass = function fastPass(ts, regs) {
  for (var i = 0; i < regs.length; i++) {
    var reg = regs[i];
    var found = false; //we can't cheat on these fancy rules:

    if (reg.optional === true || reg.negative === true || reg.minMax !== undefined) {
      continue;
    } //look-for missing term-matches


    if (reg.normal !== undefined) {
      for (var o = 0; o < ts.terms.length; o++) {
        if (ts.terms[o].normal === reg.normal || ts.terms[o].silent_term === reg.normal) {
          found = true;
          break;
        } //we can't handle lumped-terms with this method


        if (ts.terms[o].lumped === true) {
          return false;
        }
      }

      if (found === false) {
        return true;
      }
    } //look for missing tags


    if (reg.tag !== undefined) {
      for (var _o = 0; _o < ts.terms.length; _o++) {
        if (ts.terms[_o].tags[reg.tag] === true) {
          found = true;
          break;
        }
      }

      if (found === false) {
        return true;
      }
    }
  }

  return false;
};

module.exports = fastPass;

},{}],170:[function(_dereq_,module,exports){
'use strict';

var syntax = _dereq_('./syntax');

var startHere = _dereq_('./startHere');

var fastPass = _dereq_('./fastPass');

var handleCaptureGroup = _dereq_('./captureGroup'); //ensure we have atleast one non-optional demand
// const isTautology = function(regs) {
//   for (let i = 0; i < regs.length; i++) {
//     if (!regs[i].optional && !regs[i].astrix && !regs[i].anyOne) {
//       return false;
//     }
//   }
//   return true;
// };
//make a reg syntax from a text object


var findFromTerms = function findFromTerms(ts) {
  if (!ts) {
    return [];
  }

  var arr = ts.terms.map(function (t) {
    return {
      id: t.uid
    };
  });
  return arr;
}; //


var match = function match(ts, reg, verbose) {
  //parse for backwards-compatibility
  if (typeof reg === 'string') {
    reg = syntax(reg);
  } else if (reg && reg.isA === 'Text') {
    reg = findFromTerms(reg.list[0]);
  } else if (reg && reg.isA === 'Terms') {
    reg = findFromTerms(reg);
  }

  if (!reg || reg.length === 0) {
    return [];
  } //do a fast-pass for easy negatives


  if (fastPass(ts, reg, verbose) === true) {
    return [];
  } //ok, start long-match


  var matches = [];

  for (var t = 0; t < ts.terms.length; t += 1) {
    //don't loop through if '^'
    if (t > 0 && reg[0] && reg[0].starting) {
      break;
    }

    var m = startHere(ts, t, reg, verbose);

    if (m && m.length > 0) {
      matches.push(m); //handle capture-groups subset
      // let hasCapture=matches
      //ok, don't try to match these again.

      var skip = m.length - 1;
      t += skip; //this could use some work
    }
  } //handle capture-group subset


  matches = handleCaptureGroup(matches);
  return matches;
};

module.exports = match;

},{"./captureGroup":168,"./fastPass":169,"./startHere":174,"./syntax":175}],171:[function(_dereq_,module,exports){
'use strict';

var applyCaptureGroup = _dereq_('./applyCaptureGroup'); //compare 1 term to one reg


var perfectMatch = function perfectMatch(term, reg) {
  if (!term || !reg) {
    return false;
  } //support '.' - any


  if (reg.anyOne === true) {
    return true;
  } //pos-match


  if (reg.tag !== undefined) {
    return term.tags[reg.tag];
  } //id-match


  if (reg.id !== undefined) {
    return reg.id === term.uid;
  } //text-match


  if (reg.normal !== undefined) {
    return reg.normal === term.normal || reg.normal === term.silent_term;
  } //suffix matches '-nny'


  if (reg.suffix === true && reg.partial !== undefined) {
    var len = term.normal.length;
    return term.normal.substr(len - reg.partial.length, len) === reg.partial;
  } //prefix matches 'fun-'


  if (reg.prefix === true && reg.partial !== undefined) {
    return term.normal.substr(0, reg.partial.length) === reg.partial;
  } //infix matches '-nn-'


  if (reg.infix === true && reg.partial) {
    return term.normal.indexOf(reg.partial) !== -1;
  } //full-on regex-match '/a*?/'


  if (reg.regex !== undefined) {
    return reg.regex.test(term.normal) || reg.regex.test(term.text);
  } //one-of term-match


  if (reg.oneOf !== undefined) {
    for (var i = 0; i < reg.oneOf.tagArr.length; i++) {
      if (term.tags.hasOwnProperty(reg.oneOf.tagArr[i]) === true) {
        return true;
      }
    }

    return reg.oneOf.terms.hasOwnProperty(term.normal) || reg.oneOf.terms.hasOwnProperty(term.silent_term);
  }

  return false;
}; //wrap above method, to support '!' negation


var isMatch = function isMatch(term, reg, verbose) {
  if (!term || !reg) {
    return false;
  }

  var found = perfectMatch(term, reg, verbose); //reverse it for .not()

  if (reg.negative) {
    found = !Boolean(found);
  }

  if (found) {
    //only apply capture group settings to matches
    applyCaptureGroup(term, reg);
  }

  return found;
};

module.exports = isMatch;

},{"./applyCaptureGroup":167}],172:[function(_dereq_,module,exports){
'use strict';

var almostMatch = function almostMatch(reg_str, term) {
  var want = term.normal.substr(0, reg_str.length);
  return want === reg_str;
}; // match ['john', 'smith'] regs, when the term is lumped


var lumpMatch = function lumpMatch(term, regs, reg_i) {
  var reg_str = regs[reg_i].normal; //is this a partial match? 'tony'& 'tony hawk'

  if (reg_str !== undefined && almostMatch(reg_str, term)) {
    //try to grow it
    reg_i = reg_i + 1;

    for (reg_i; reg_i < regs.length; reg_i++) {
      reg_str += ' ' + regs[reg_i].normal; // is it now perfect?

      if (reg_str === term.normal) {
        return reg_i;
      } // is it still almost?


      if (almostMatch(reg_str, term) === false) {
        return null;
      }
    }
  }

  return null;
};

module.exports = lumpMatch;

},{}],173:[function(_dereq_,module,exports){
arguments[4][73][0].apply(exports,arguments)
},{"../../paths":189,"dup":73}],174:[function(_dereq_,module,exports){
'use strict';

var lumpMatch = _dereq_('./lumpMatch');

var isMatch = _dereq_('./isMatch');

var applyCaptureGroup = _dereq_('./applyCaptureGroup'); // match everything until this point - '*'


var greedyUntil = function greedyUntil(ts, i, reg) {
  for (; i < ts.length; i++) {
    if (isMatch(ts.terms[i], reg)) {
      return i;
    }
  }

  return null;
}; //keep matching this reg as long as possible


var greedyOf = function greedyOf(ts, i, reg, until) {
  for (; i < ts.length; i++) {
    var t = ts.terms[i]; //found next reg ('until')

    if (until && isMatch(t, until)) {
      return i;
    } //stop here


    if (!isMatch(t, reg)) {
      return i;
    }
  }

  return i;
}; //try and match all regs, starting at this term


var startHere = function startHere(ts, startAt, regs, verbose) {
  var term_i = startAt; //check each regex-thing

  for (var reg_i = 0; reg_i < regs.length; reg_i++) {
    var term = ts.terms[term_i];
    var reg = regs[reg_i];
    var next_reg = regs[reg_i + 1];

    if (!term) {
      //we didn't need it anyways
      if (reg.optional === true) {
        continue;
      }

      return null;
    } //catch '^' errors


    if (reg.starting === true && term_i > 0) {
      return null;
    } //catch '$' errors


    if (reg.ending === true && term_i !== ts.length - 1 && !reg.minMax) {
      return null;
    } //support '*'


    if (reg.astrix === true) {
      //just grab until the end..
      if (!next_reg) {
        var terms = ts.terms.slice(startAt, ts.length); //apply capture group settings for all wildcard terms

        for (var wildcardTerm_i = term_i - startAt; wildcardTerm_i < terms.length; wildcardTerm_i++) {
          applyCaptureGroup(terms[wildcardTerm_i], reg);
        }

        return terms;
      }

      var foundAt = greedyUntil(ts, term_i, regs[reg_i + 1]);

      if (!foundAt) {
        return null;
      } //apply capture group settings for all wildcard terms


      for (var _wildcardTerm_i = term_i; _wildcardTerm_i < foundAt; _wildcardTerm_i++) {
        applyCaptureGroup(ts.terms[_wildcardTerm_i], reg);
      }

      term_i = foundAt + 1;
      reg_i += 1;
      continue;
    } //support '#Noun{x,y}'


    if (regs[reg_i].minMax !== undefined) {
      var min = regs[reg_i].minMax.min || 0;
      var max = regs[reg_i].minMax.max;
      var until = regs[reg_i + 1];

      for (var i = 0; i < max; i++) {
        //ergh, please clean this loop up..
        var t = ts.terms[term_i + i];

        if (!t) {
          return null;
        } //end here


        if (isMatch(t, reg) === false) {
          return null;
        } //should we be greedier?


        if (i < min - 1) {
          continue; //gotta keep going!
        } //we can end here, after the minimum


        if (!until) {
          term_i += 1;
          break;
        } // we're greedy-to-now


        if (i >= min && isMatch(t, until)) {
          break;
        } //end with a greedy-match for next term


        var nextT = ts.terms[term_i + i + 1];

        if (nextT && isMatch(nextT, until)) {
          term_i += i + 2;
          reg_i += 1;
          break;
        } else if (i === max - 1) {
          //we've maxed-out
          return null;
        }
      }

      continue;
    } //if optional, check next one


    if (reg.optional === true) {
      var _until = regs[reg_i + 1];
      term_i = greedyOf(ts, term_i, reg, _until);
      continue;
    } //check a perfect match


    if (isMatch(term, reg, verbose)) {
      term_i += 1; //try to greedy-match '+'

      if (reg.consecutive === true) {
        var _until2 = regs[reg_i + 1];
        term_i = greedyOf(ts, term_i, reg, _until2);
      }

      continue;
    }

    if (term.silent_term && !term.normal) {
      //skip over silent contraction terms
      //we will continue on it, but not start on it
      if (reg_i === 0) {
        return null;
      } //try the next term, but with this regex again


      term_i += 1;
      reg_i -= 1;
      continue;
    } //handle partial-matches of lumped terms


    var lumpUntil = lumpMatch(term, regs, reg_i, verbose);

    if (lumpUntil !== null) {
      reg_i = lumpUntil;
      term_i += 1;
      continue;
    } //was it optional anways?


    if (reg.optional === true) {
      continue;
    }

    return null;
  }

  return ts.terms.slice(startAt, term_i);
};

module.exports = startHere;

},{"./applyCaptureGroup":167,"./isMatch":171,"./lumpMatch":172}],175:[function(_dereq_,module,exports){
'use strict'; // parse a search lookup term find the regex-like syntax in this term

var fns = _dereq_('./paths').fns; //regs-


var range = /\{[0-9,]+\}$/; //trim char#0

var noFirst = function noFirst(str) {
  return str.substr(1, str.length);
};

var noLast = function noLast(str) {
  return str.substring(0, str.length - 1);
}; //turn 'regex-like' search string into parsed json


var parse_term = function parse_term(term) {
  term = term || '';
  term = term.trim();
  var reg = {}; //order matters here
  //1-character hasta be a text-match

  if (term.length === 1 && term !== '.' && term !== '*') {
    reg.normal = term.toLowerCase();
    return reg;
  } //negation ! flag


  if (term.charAt(0) === '!') {
    term = noFirst(term);
    reg.negative = true;
  } //leading ^ flag


  if (term.charAt(0) === '^') {
    term = noFirst(term);
    reg.starting = true;
  } //trailing $ flag means ending


  if (term.charAt(term.length - 1) === '$') {
    term = noLast(term);
    reg.ending = true;
  } //optional flag


  if (term.charAt(term.length - 1) === '?') {
    term = noLast(term);
    reg.optional = true;
  } //atleast-one-but-greedy flag


  if (term.charAt(term.length - 1) === '+') {
    term = noLast(term);
    reg.consecutive = true;
  } //prefix/suffix/infix matches


  if (term.charAt(term.length - 1) === '_') {
    term = noLast(term);
    reg.prefix = true; //try both '-match-'

    if (term.charAt(0) === '_') {
      term = noFirst(term);
      reg.prefix = undefined;
      reg.infix = true;
    }

    reg.partial = term;
    term = '';
  } else if (term.charAt(0) === '_') {
    term = noFirst(term);
    reg.suffix = true;
    reg.partial = term;
    term = '';
  } //min/max any '{1,3}'


  if (term.charAt(term.length - 1) === '}' && range.test(term) === true) {
    var m = term.match(/\{([0-9])*,? ?([0-9]+)\}/);
    reg.minMax = {
      min: parseInt(m[1], 10) || 0,
      max: parseInt(m[2], 10)
    };
    term = term.replace(range, '');
  } //pos flag


  if (term.charAt(0) === '#') {
    term = noFirst(term);
    reg.tag = fns.titleCase(term);
    term = '';
  } //support /regex/ mode


  if (term.charAt(0) === '/' && term.charAt(term.length - 1) === '/') {
    term = noLast(term);
    term = noFirst(term); //actually make the regex

    reg.regex = new RegExp(term, 'i');
    term = '';
  } //one_of options flag


  if (term.charAt(0) === '(' && term.charAt(term.length - 1) === ')') {
    term = noLast(term);
    term = noFirst(term);
    var arr = term.split(/\|/g);
    reg.oneOf = {
      terms: {},
      tagArr: []
    };
    arr.forEach(function (str) {
      //try a tag match
      if (str.charAt(0) === '#') {
        var tag = str.substr(1, str.length);
        tag = fns.titleCase(tag);
        reg.oneOf.tagArr.push(tag);
      } else {
        reg.oneOf.terms[str] = true;
      }
    });
    term = '';
  } //a period means any one term


  if (term === '.') {
    reg.anyOne = true;
    term = '';
  } //a * means anything until sentence end


  if (term === '*') {
    reg.astrix = true;
    term = '';
  }

  if (term !== '') {
    //support \ encoding of #[]()*+?^
    term = term.replace(/\\([\\#\*\.\[\]\(\)\+\?\^])/g, '');
    reg.normal = term.toLowerCase();
  }

  return reg;
}; //turn a match string into an array of objects


var parse_all = function parse_all(input) {
  input = input || '';
  var regs = input.split(/ +/); //bundle-up multiple-words inside parentheses

  for (var i = 0; i < regs.length; i += 1) {
    if (regs[i].indexOf('(') !== -1 && regs[i].indexOf(')') === -1) {
      var nextWord = regs[i + 1];

      if (nextWord && nextWord.indexOf('(') === -1 && nextWord.indexOf(')') !== -1) {
        regs[i + 1] = regs[i] + ' ' + regs[i + 1];
        regs[i] = '';
      }
    }
  }

  regs = regs.filter(function (f) {
    return f;
  });
  var captureOn = false;
  regs = regs.map(function (reg) {
    var hasEnd = false; //support [#Noun] capture-group syntax

    if (reg.charAt(0) === '[') {
      reg = noFirst(reg);
      captureOn = true;
    }

    if (reg.charAt(reg.length - 1) === ']') {
      reg = noLast(reg);
      captureOn = false;
      hasEnd = true;
    }

    reg = parse_term(reg);

    if (captureOn === true || hasEnd === true) {
      reg.capture = true;
    }

    return reg;
  });
  return regs;
};

module.exports = parse_all; // console.log(JSON.stringify(parse_all('the (canadian|united states|british) senate'), null, 2));

},{"./paths":173}],176:[function(_dereq_,module,exports){
'use strict'; //

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var syntax = _dereq_('./lib/syntax');

var startHere = _dereq_('./lib/startHere');

var Text = _dereq_('../../text');

var addfns = function addfns(Terms) {
  var fns = {
    //blacklist from a {word:true} object
    notObj: function notObj(r, obj) {
      var matches = [];
      var current = [];
      r.terms.forEach(function (t) {
        //TODO? support multi-word blacklists
        //we should blacklist this term
        if (obj.hasOwnProperty(t.normal)) {
          if (current.length) {
            matches.push(current);
          }

          current = [];
        } else {
          current.push(t);
        }
      }); //add remainder

      if (current.length) {
        matches.push(current);
      }

      matches = matches.map(function (a) {
        return new Terms(a, r.world, r.refText, r.refTerms);
      });
      return new Text(matches, r.world, r.parent);
    },
    //blacklist from a match string
    notString: function notString(r, want, verbose) {
      var matches = [];
      var regs = syntax(want);
      var terms = []; //try the match starting from each term

      for (var i = 0; i < r.terms.length; i++) {
        var bad = startHere(r, i, regs, verbose);

        if (bad && bad.length > 0) {
          //reset matches
          if (terms.length > 0) {
            matches.push(terms);
            terms = [];
          } //skip these terms now


          i += bad.length - 1;
          continue;
        }

        terms.push(r.terms[i]);
      } //remaining ones


      if (terms.length > 0) {
        matches.push(terms);
      }

      matches = matches.map(function (a) {
        return new Terms(a, r.world, r.refText, r.refTerms);
      }); // return matches

      return new Text(matches, r.world, r.parent);
    }
  }; //blacklist from a [word, word] array

  fns.notArray = function (r, arr) {
    var obj = arr.reduce(function (h, a) {
      h[a] = true;
      return h;
    }, {});
    return fns.notObj(r, obj);
  };

  fns.notText = function (r, m) {
    var arr = m.out('array'); //i guess this is fine..

    return fns.notArray(r, arr);
  };
  /**return everything but these matches*/


  Terms.prototype.not = function (want, verbose) {
    //support [word, word] blacklist
    if (_typeof(want) === 'object') {
      var type = Object.prototype.toString.call(want);

      if (type === '[object Array]') {
        return fns.notArray(this, want, verbose);
      }

      if (type === '[object Object]') {
        if (want.isA === 'Text') {
          return fns.notText(this, want, verbose);
        } else {
          return fns.notObj(this, want, verbose);
        }
      }
    }

    if (typeof want === 'string') {
      return fns.notString(this, want, verbose);
    }

    return this;
  };

  return Terms;
};

module.exports = addfns;

},{"../../text":192,"./lib/startHere":174,"./lib/syntax":175}],177:[function(_dereq_,module,exports){
'use strict';

var mutate = _dereq_('../mutate');

var addMethod = function addMethod(Terms) {
  //hook it into Terms.proto
  Terms.prototype.delete = function (reg) {
    //don't touch parent if empty
    if (!this.found) {
      return this;
    } //remove all selected


    if (!reg) {
      this.parentTerms = mutate.deleteThese(this.parentTerms, this);
      return this;
    } //only remove a portion of this


    var found = this.match(reg);

    if (found.found) {
      var r = mutate.deleteThese(this, found);
      return r;
    }

    return this.parentTerms;
  };

  return Terms;
};

module.exports = addMethod;

},{"../mutate":188}],178:[function(_dereq_,module,exports){
'use strict';

var mutate = _dereq_('../mutate'); //whitespace


var addSpaceAt = function addSpaceAt(ts, i) {
  if (!ts.terms.length || !ts.terms[i]) {
    return ts;
  }

  ts.terms[i].whitespace.before = ' ';
  return ts;
};

var insertMethods = function insertMethods(Terms) {
  //accept any sorta thing
  var ensureTerms = function ensureTerms(input, world) {
    if (input.isA === 'Terms') {
      return input;
    }

    if (input.isA === 'Term') {
      return new Terms([input], world);
    } //handle a string


    var ts = Terms.fromString(input, world);
    ts.tagger();
    return ts;
  };

  var methods = {
    insertBefore: function insertBefore(input, tag) {
      var original_l = this.terms.length;
      var ts = ensureTerms(input, this.world);

      if (tag) {
        ts.tag(tag);
      }

      var index = this.index(); //pad a space on parent

      addSpaceAt(this.parentTerms, index);

      if (index > 0) {
        addSpaceAt(ts, 0); //if in middle of sentence
      }

      this.parentTerms.terms = mutate.insertAt(this.parentTerms.terms, index, ts); //also copy them to current selection

      if (this.terms.length === original_l) {
        this.terms = ts.terms.concat(this.terms);
      }

      return this;
    },
    insertAfter: function insertAfter(input, tag) {
      var original_l = this.terms.length;
      var ts = ensureTerms(input, this.world);

      if (tag) {
        ts.tag(tag);
      }

      var index = this.terms[this.terms.length - 1].index(); //beginning whitespace to ts

      addSpaceAt(ts, 0);
      this.parentTerms.terms = mutate.insertAt(this.parentTerms.terms, index + 1, ts); //also copy them to current selection

      if (this.terms.length === original_l) {
        this.terms = this.terms.concat(ts.terms);
      }

      return this;
    },
    insertAt: function insertAt(index, input, tag) {
      if (index < 0) {
        index = 0;
      }

      var original_l = this.terms.length;
      var ts = ensureTerms(input, this.world); //tag that thing too

      if (tag) {
        ts.tag(tag);
      }

      if (index > 0) {
        addSpaceAt(ts, 0); //if in middle of sentence
      }

      this.parentTerms.terms = mutate.insertAt(this.parentTerms.terms, index, ts); //also copy them to current selection

      if (this.terms.length === original_l) {
        //splice the new terms into this (yikes!)
        Array.prototype.splice.apply(this.terms, [index, 0].concat(ts.terms));
      } //beginning whitespace to ts


      if (index === 0) {
        this.terms[0].whitespace.before = '';
        ts.terms[ts.terms.length - 1].whitespace.after = ' ';
      }

      return this;
    }
  }; //hook them into result.proto

  Object.keys(methods).forEach(function (k) {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = insertMethods;

},{"../mutate":188}],179:[function(_dereq_,module,exports){
'use strict'; //these methods are simply term-methods called in a loop

var addMethods = function addMethods(Terms) {
  var foreach = [// ['tag'],
  // ['unTag'],
  // ['canBe'],
  ['toUpperCase', 'UpperCase'], ['toLowerCase'], ['toTitleCase', 'TitleCase']];
  foreach.forEach(function (arr) {
    var k = arr[0];
    var tag = arr[1];

    var myFn = function myFn() {
      var args = arguments;
      this.terms.forEach(function (t) {
        t[k].apply(t, args);
      });

      if (tag) {
        this.tag(tag, k);
      }

      return this;
    };

    Terms.prototype[k] = myFn;
  });
  return Terms;
};

module.exports = addMethods;

},{}],180:[function(_dereq_,module,exports){
'use strict';

var Term = _dereq_('../../../term'); //merge two term objects.. carefully


var makeText = function makeText(a, b) {
  var text = a.whitespace.before + a.text + a.whitespace.after;
  text += b.whitespace.before + b.text + b.whitespace.after;
  return text;
};

var combine = function combine(s, i) {
  var a = s.terms[i];
  var b = s.terms[i + 1];

  if (!b) {
    return;
  }

  var text = makeText(a, b);
  s.terms[i] = new Term(text, a.context);
  s.terms[i].normal = a.normal + ' ' + b.normal;
  s.terms[i].lumped = true;
  s.terms[i].parentTerms = s.terms[i + 1].parentTerms;
  s.terms[i + 1] = null;
  s.terms = s.terms.filter(function (t) {
    return t !== null;
  });
  return;
};

module.exports = combine;

},{"../../../term":143}],181:[function(_dereq_,module,exports){
'use strict';

var combine = _dereq_('./combine');

var mutate = _dereq_('../../mutate'); //merge-together our current match into one term


var combineThem = function combineThem(ts, tags) {
  var len = ts.terms.length;

  for (var i = 0; i < len; i++) {
    combine(ts, 0);
  }

  var lumped = ts.terms[0];
  lumped.tags = tags;
  return lumped;
};

var lumpMethods = function lumpMethods(Terms) {
  Terms.prototype.lump = function () {
    //collect the tags up
    var index = this.index();
    var tags = {};
    this.terms.forEach(function (t) {
      Object.keys(t.tags).forEach(function (tag) {
        return tags[tag] = true;
      });
    }); //just lump the whole-thing together

    if (this.parentTerms === this) {
      var _lumped = combineThem(this, tags);

      this.terms = [_lumped];
      return this;
    } //otherwise lump just part of it. delete/insert.


    this.parentTerms = mutate.deleteThese(this.parentTerms, this); //merge-together our current match into one term

    var lumped = combineThem(this, tags); //put it back (in the same place)

    this.parentTerms.terms = mutate.insertAt(this.parentTerms.terms, index, lumped);
    return this;
  };

  return Terms;
};

module.exports = lumpMethods;

},{"../../mutate":188,"./combine":180}],182:[function(_dereq_,module,exports){
'use strict';

var _tagger = _dereq_('../../tagger');

var miscMethods = function miscMethods(Terms) {
  var methods = {
    tagger: function tagger() {
      _tagger(this);

      return this;
    },
    firstTerm: function firstTerm() {
      return this.terms[0];
    },
    lastTerm: function lastTerm() {
      return this.terms[this.terms.length - 1];
    },
    all: function all() {
      return this.parent;
    },
    data: function data() {
      return {
        text: this.out('text'),
        normal: this.out('normal')
      };
    },
    term: function term(n) {
      return this.terms[n];
    },
    first: function first() {
      var t = this.terms[0];
      return new Terms([t], this.world, this.refText, this.refTerms);
    },
    last: function last() {
      var t = this.terms[this.terms.length - 1];
      return new Terms([t], this.world, this.refText, this.refTerms);
    },
    slice: function slice(start, end) {
      var terms = this.terms.slice(start, end);
      return new Terms(terms, this.world, this.refText, this.refTerms);
    },
    index: function index() {
      var parent = this.parentTerms;
      var first = this.terms[0];

      if (!parent || !first) {
        return null; //maybe..
      }

      for (var i = 0; i < parent.terms.length; i++) {
        if (first === parent.terms[i]) {
          return i;
        }
      }

      return null;
    },
    termIndex: function termIndex() {
      var first = this.terms[0];
      var ref = this.refText || this;

      if (!ref || !first) {
        return null; //maybe..
      }

      var n = 0;

      for (var i = 0; i < ref.list.length; i++) {
        var ts = ref.list[i];

        for (var o = 0; o < ts.terms.length; o++) {
          if (ts.terms[o] === first) {
            return n;
          }

          n += 1;
        }
      }

      return n;
    },
    //number of characters in this match
    chars: function chars() {
      return this.terms.reduce(function (i, t) {
        i += t.whitespace.before.length;
        i += t.text.length;
        i += t.whitespace.after.length;
        return i;
      }, 0);
    },
    //just .length
    wordCount: function wordCount() {
      return this.terms.length;
    },

    /** punctuation */
    setPunctuation: function setPunctuation(punct) {
      var last = this.terms[this.terms.length - 1];
      last.setPunctuation(punct);
    },
    getPunctuation: function getPunctuation() {
      var lastTerm = this.last().terms[0];

      if (!lastTerm) {
        return '';
      }

      return lastTerm.getPunctuation() || '';
    },
    //this has term-order logic, so has to be here
    toCamelCase: function toCamelCase() {
      this.toTitleCase();
      this.terms.forEach(function (t, i) {
        if (i !== 0) {
          t.whitespace.before = '';
        }

        t.whitespace.after = '';
      });
      this.tag('#CamelCase', 'toCamelCase');
      return this;
    }
  }; //hook them into result.proto

  Object.keys(methods).forEach(function (k) {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = miscMethods;

},{"../../tagger":95}],183:[function(_dereq_,module,exports){
'use strict';

var fns = _dereq_('../paths').fns;

var methods = {
  text: function text(ts) {
    return ts.terms.reduce(function (str, t) {
      str += t.out('text');
      return str;
    }, '');
  },
  //like 'text', but no leading/trailing whitespace
  match: function match(ts) {
    var str = '';
    var len = ts.terms.length;

    for (var i = 0; i < len; i++) {
      if (i > 0) {
        str += ts.terms[i].whitespace.before;
      }

      str += ts.terms[i].text.replace(/[,.?!]$/, ''); //remove comma

      if (i < len - 1) {
        str += ts.terms[i].whitespace.after;
      }
    }

    return str;
  },
  normal: function normal(ts) {
    var terms = ts.terms.filter(function (t) {
      return t.text;
    });
    terms = terms.map(function (t) {
      return t.normal; //+ punct;
    });
    return terms.join(' ');
  },
  grid: function grid(ts) {
    var str = '  ';
    str += ts.terms.reduce(function (s, t) {
      s += fns.leftPad(t.text, 11);
      return s;
    }, '');
    return str + '\n\n';
  },
  color: function color(ts) {
    return ts.terms.reduce(function (s, t) {
      s += fns.printTerm(t);
      return s;
    }, '');
  },
  csv: function csv(ts) {
    return ts.terms.map(function (t) {
      return t.normal.replace(/,/g, '');
    }).join(',');
  },
  newlines: function newlines(ts) {
    return ts.terms.reduce(function (str, t) {
      str += t.out('text').replace(/\n/g, ' ');
      return str;
    }, '').replace(/^\s/, '');
  },

  /** no punctuation, fancy business **/
  root: function root(ts) {
    return ts.terms.map(function (t) {
      return t.silent_term || t.root;
    }).join(' ').toLowerCase();
  },
  html: function html(ts) {
    return ts.terms.map(function (t) {
      return t.render.html();
    }).join(' ');
  },
  debug: function debug(ts) {
    ts.terms.forEach(function (t) {
      t.out('debug');
    });
  },
  custom: function custom(ts, obj) {
    return ts.terms.map(function (t) {
      return Object.keys(obj).reduce(function (h, k) {
        if (obj[k] && t[k]) {
          if (typeof t[k] === 'function') {
            h[k] = t[k]();
          } else {
            h[k] = t[k];
          }
        }

        return h;
      }, {});
    });
  }
};
methods.plaintext = methods.text;
methods.normalize = methods.normal;
methods.normalized = methods.normal;
methods.colors = methods.color;
methods.tags = methods.terms;

var renderMethods = function renderMethods(Terms) {
  Terms.prototype.out = function (fn) {
    if (typeof fn === 'string') {
      if (methods[fn]) {
        return methods[fn](this);
      }
    } else if (fns.isObject(fn) === true) {
      //support .out({})
      return methods.custom(this, fn);
    }

    return methods.text(this);
  }; //check method


  Terms.prototype.debug = function () {
    return methods.debug(this);
  };

  return Terms;
};

module.exports = renderMethods;

},{"../paths":189}],184:[function(_dereq_,module,exports){
'use strict';

var mutate = _dereq_('../mutate');

var replaceMethods = function replaceMethods(Terms) {
  var methods = {
    /**swap this for that */
    replace: function replace(str1, str2, keepTags) {
      //in this form, we 'replaceWith'
      if (str2 === undefined) {
        return this.replaceWith(str1, keepTags);
      }

      this.match(str1).replaceWith(str2, keepTags);
      return this;
    },

    /**swap this for that */
    replaceWith: function replaceWith(str, keepTags) {
      var newTs = Terms.fromString(str, this.world);
      newTs.tagger(); //if instructed, apply old tags to new terms

      if (keepTags) {
        this.terms.forEach(function (t, i) {
          var tags = Object.keys(t.tags);

          if (newTs.terms[i] !== undefined) {
            tags.forEach(function (tg) {
              return newTs.terms[i].tag(tg, 'from-memory');
            });
          }
        });
      } //keep its ending punctation..


      var endPunct = this.getPunctuation(); //grab the insertion place..

      var index = this.index();
      this.parentTerms = mutate.deleteThese(this.parentTerms, this);
      this.parentTerms.terms = mutate.insertAt(this.parentTerms.terms, index, newTs);
      this.terms = newTs.terms; //add-in the punctuation at the end..

      if (this.terms.length > 0) {
        this.terms[this.terms.length - 1].whitespace.after += endPunct;
      }

      return this;
    }
  }; //hook them into result.proto

  Object.keys(methods).forEach(function (k) {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = replaceMethods;

},{"../mutate":188}],185:[function(_dereq_,module,exports){
'use strict'; //break apart a termlist into (before, match after)

var breakUpHere = function breakUpHere(terms, ts) {
  var firstTerm = ts.terms[0];
  var len = ts.terms.length;

  for (var i = 0; i < terms.length; i++) {
    if (terms[i] === firstTerm) {
      return {
        before: terms.slice(0, i),
        match: terms.slice(i, i + len),
        after: terms.slice(i + len, terms.length)
      };
    }
  }

  return {
    after: terms
  };
};

var splitMethods = function splitMethods(Terms) {
  var methods = {
    /** at the end of the match, split the terms **/
    splitAfter: function splitAfter(reg, verbose) {
      var _this = this;

      var ms = this.match(reg, verbose); //Array[ts]

      var termArr = this.terms;
      var all = [];
      ms.list.forEach(function (lookFor) {
        var section = breakUpHere(termArr, lookFor);

        if (section.before && section.match) {
          all.push(section.before.concat(section.match));
        }

        termArr = section.after;
      }); //add the remaining

      if (termArr.length) {
        all.push(termArr);
      } //make them termlists


      all = all.map(function (ts) {
        var parent = _this.refText; //|| this;

        return new Terms(ts, _this.world, parent, _this.refTerms);
      });
      return all;
    },

    /** return only before & after  the match**/
    splitOn: function splitOn(reg, verbose) {
      var _this2 = this;

      var ms = this.match(reg, verbose); //Array[ts]

      var termArr = this.terms;
      var all = [];
      ms.list.forEach(function (lookFor) {
        var section = breakUpHere(termArr, lookFor);

        if (section.before) {
          all.push(section.before);
        }

        if (section.match) {
          all.push(section.match);
        }

        termArr = section.after;
      }); //add the remaining

      if (termArr.length) {
        all.push(termArr);
      } //make them termlists


      all = all.filter(function (a) {
        return a && a.length;
      });
      all = all.map(function (ts) {
        return new Terms(ts, ts.world, ts.refText, _this2.refTerms);
      });
      return all;
    },

    /** at the start of the match, split the terms**/
    splitBefore: function splitBefore(reg, verbose) {
      var _this3 = this;

      var ms = this.match(reg, verbose); //Array[ts]

      var termArr = this.terms;
      var all = [];
      ms.list.forEach(function (lookFor) {
        var section = breakUpHere(termArr, lookFor);

        if (section.before) {
          all.push(section.before);
        }

        if (section.match) {
          all.push(section.match);
        }

        termArr = section.after;
      }); //add the remaining

      if (termArr.length) {
        all.push(termArr);
      } //cleanup-step: merge all (middle) matches with the next one


      for (var i = 0; i < all.length; i++) {
        for (var o = 0; o < ms.length; o++) {
          if (ms.list[o].terms[0] === all[i][0]) {
            if (all[i + 1]) {
              all[i] = all[i].concat(all[i + 1]);
              all[i + 1] = [];
            }
          }
        }
      } //make them termlists


      all = all.filter(function (a) {
        return a && a.length;
      });
      all = all.map(function (ts) {
        return new Terms(ts, ts.world, ts.refText, _this3.refTerms);
      });
      return all;
    }
  }; //hook them into result.proto

  Object.keys(methods).forEach(function (k) {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = splitMethods;
exports = splitMethods;

},{}],186:[function(_dereq_,module,exports){
'use strict';

var addMethod = function addMethod(Terms) {
  var methods = {
    tag: function tag(_tag, reason) {
      var tags = [];

      if (typeof _tag === 'string') {
        tags = _tag.split(' ');
      } //fancy version:


      if (tags.length > 1) {
        //do indepenent tags for each term:
        this.terms.forEach(function (t, i) {
          t.tag(tags[i], reason);
        });
        return this;
      } //non-fancy version:


      this.terms.forEach(function (t) {
        t.tag(_tag, reason);
      });
      return this;
    },
    unTag: function unTag(tag, reason) {
      var tags = [];

      if (typeof tag === 'string') {
        tags = tag.split(' ');
      } //fancy version:


      if (tags.length > 1) {
        //do indepenent tags for each term:
        this.terms.forEach(function (t, i) {
          t.unTag(tags[i], reason);
        });
        return this;
      } //non-fancy version:


      this.terms.forEach(function (t) {
        t.unTag(tag, reason);
      });
      return this;
    },
    //which terms are consistent with this tag
    canBe: function canBe(tag) {
      var terms = this.terms.filter(function (t) {
        return t.canBe(tag);
      });
      return new Terms(terms, this.world, this.refText, this.refTerms);
    }
  }; //hook them into result.proto

  Object.keys(methods).forEach(function (k) {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = addMethod;

},{}],187:[function(_dereq_,module,exports){
'use strict';

var transforms = function transforms(Terms) {
  var methods = {
    clone: function clone() {
      // this.world = this.world.clone();
      var terms = this.terms.map(function (t) {
        return t.clone();
      });
      return new Terms(terms, this.world, this.refText, null); //, this.refTerms
    },
    hyphenate: function hyphenate() {
      var _this = this;

      this.terms.forEach(function (t, i) {
        if (i !== _this.terms.length - 1) {
          t.whitespace.after = '-';
        }

        if (i !== 0) {
          t.whitespace.before = '';
        }
      });
      return this;
    },
    dehyphenate: function dehyphenate() {
      this.terms.forEach(function (t) {
        if (t.whitespace.after === '-') {
          t.whitespace.after = ' ';
        }
      });
      return this;
    },
    trim: function trim() {
      if (this.length <= 0) {
        return this;
      }

      this.terms[0].whitespace.before = '';
      this.terms[this.terms.length - 1].whitespace.after = '';
      return this;
    }
  }; //hook them into result.proto

  Object.keys(methods).forEach(function (k) {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = transforms;

},{}],188:[function(_dereq_,module,exports){
'use strict'; //

var getTerms = function getTerms(needle) {
  var arr = [];

  if (needle.isA === 'Terms') {
    arr = needle.terms;
  } else if (needle.isA === 'Text') {
    arr = needle.flatten().list[0].terms;
  } else if (needle.isA === 'Term') {
    arr = [needle];
  }

  return arr;
}; //remove them


exports.deleteThese = function (source, needle) {
  var arr = getTerms(needle);
  source.terms = source.terms.filter(function (t) {
    for (var i = 0; i < arr.length; i++) {
      if (t === arr[i]) {
        return false;
      }
    }

    return true;
  });
  return source;
}; //add them


exports.insertAt = function (terms, i, needle) {
  needle.dirty = true;
  var arr = getTerms(needle); //handle whitespace

  if (i > 0 && arr[0] && !arr[0].whitespace.before) {
    arr[0].whitespace.before = ' ';
  } //gnarly splice
  //-( basically  - terms.splice(i+1, 0, arr) )


  Array.prototype.splice.apply(terms, [i, 0].concat(arr));
  return terms;
};

},{}],189:[function(_dereq_,module,exports){
"use strict";

module.exports = {
  fns: _dereq_('../fns'),
  Term: _dereq_('../term')
};

},{"../fns":3,"../term":143}],190:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('./index');

var tokenize = _dereq_('./tokenize');

var paths = _dereq_('./paths');

var Terms = paths.Terms;
var fns = paths.fns;

var fromString = function fromString(str, world) {
  var sentences = []; //allow pre-tokenized input

  if (fns.isArray(str)) {
    sentences = str;
  } else {
    str = fns.ensureString(str);
    sentences = tokenize(str);
  }

  var list = sentences.map(function (s) {
    return Terms.fromString(s, world);
  });
  var doc = new Text(list, world); //give each ts a ref to the result

  doc.list.forEach(function (ts) {
    ts.refText = doc;
  });
  return doc;
};

module.exports = fromString;

},{"./index":192,"./paths":205,"./tokenize":207}],191:[function(_dereq_,module,exports){
"use strict";

module.exports = {
  /** did it find anything? */
  found: function found() {
    return this.list.length > 0;
  },

  /** just a handy wrap*/
  parent: function parent() {
    return this.original || this;
  },

  /** how many Texts are there?*/
  length: function length() {
    return this.list.length;
  },

  /** nicer than constructor.call.name or whatever*/
  isA: function isA() {
    return 'Text';
  },

  /** the whitespace before and after this match*/
  whitespace: function whitespace() {
    var _this = this;

    return {
      before: function before(str) {
        _this.list.forEach(function (ts) {
          ts.whitespace.before(str);
        });

        return _this;
      },
      after: function after(str) {
        _this.list.forEach(function (ts) {
          ts.whitespace.after(str);
        });

        return _this;
      }
    };
  }
};

},{}],192:[function(_dereq_,module,exports){
'use strict'; //a Text is an array of termLists

var getters = _dereq_('./getters');

function Text(arr, world, original) {
  this.list = arr || [];

  if (typeof world === 'function') {
    world = world();
  }

  this.world = function () {
    return world;
  };

  this.original = original; //apply getters

  var keys = Object.keys(getters);

  for (var i = 0; i < keys.length; i++) {
    Object.defineProperty(this, keys[i], {
      get: getters[keys[i]]
    });
  }
}

module.exports = Text;

Text.addMethods = function (cl, obj) {
  var fns = Object.keys(obj);

  for (var i = 0; i < fns.length; i++) {
    cl.prototype[fns[i]] = obj[fns[i]];
  }
}; //make a sub-class of this class easily


Text.makeSubset = function (methods, find) {
  var Subset = function Subset(arr, world, original) {
    Text.call(this, arr, world, original);
  }; //inheritance


  Subset.prototype = Object.create(Text.prototype);
  Text.addMethods(Subset, methods);
  Subset.find = find;
  return Subset;
}; //apply instance methods


_dereq_('./methods/misc')(Text);

_dereq_('./methods/loops')(Text);

_dereq_('./methods/match')(Text);

_dereq_('./methods/out')(Text);

_dereq_('./methods/sort')(Text);

_dereq_('./methods/split')(Text);

_dereq_('./methods/normalize')(Text);

_dereq_('./subsets')(Text); //apply subset methods


var subset = {
  acronyms: _dereq_('../subset/acronyms'),
  adjectives: _dereq_('../subset/adjectives'),
  adverbs: _dereq_('../subset/adverbs'),
  contractions: _dereq_('../subset/contractions'),
  dates: _dereq_('../subset/dates'),
  nouns: _dereq_('../subset/nouns'),
  people: _dereq_('../subset/people'),
  sentences: _dereq_('../subset/sentences'),
  terms: _dereq_('../subset/terms'),
  possessives: _dereq_('../subset/possessives'),
  values: _dereq_('../subset/values'),
  verbs: _dereq_('../subset/verbs'),
  ngrams: _dereq_('../subset/ngrams'),
  startGrams: _dereq_('../subset/ngrams/startGrams'),
  endGrams: _dereq_('../subset/ngrams/endGrams')
};
Object.keys(subset).forEach(function (k) {
  Text.prototype[k] = function (num, arg) {
    var sub = subset[k];
    var m = sub.find(this, num, arg);
    return new subset[k](m.list, this.world, this.parent);
  };
}); //aliases

Text.prototype.words = Text.prototype.terms;

},{"../subset/acronyms":9,"../subset/adjectives":10,"../subset/adverbs":17,"../subset/contractions":23,"../subset/dates":25,"../subset/ngrams":35,"../subset/ngrams/endGrams":32,"../subset/ngrams/startGrams":36,"../subset/nouns":38,"../subset/people":49,"../subset/possessives":51,"../subset/sentences":52,"../subset/terms":58,"../subset/values":65,"../subset/verbs":75,"./getters":191,"./methods/loops":193,"./methods/match":194,"./methods/misc":195,"./methods/normalize":196,"./methods/out":197,"./methods/sort":202,"./methods/split":204,"./subsets":206}],193:[function(_dereq_,module,exports){
'use strict'; //this methods are simply loops around each termList object.

var methods = ['toTitleCase', 'toUpperCase', 'toLowerCase', 'toCamelCase', 'hyphenate', 'dehyphenate', 'trim', 'insertBefore', 'insertAfter', 'insertAt', 'replace', 'replaceWith', 'delete', 'lump', 'tagger', // 'tag',
'unTag'];

var addMethods = function addMethods(Text) {
  methods.forEach(function (k) {
    Text.prototype[k] = function () {
      for (var i = 0; i < this.list.length; i++) {
        this.list[i][k].apply(this.list[i], arguments);
      }

      return this;
    };
  }); //add an extra optimisation for tag method

  Text.prototype.tag = function () {
    //fail-fast optimisation
    if (this.list.length === 0) {
      return this;
    }

    for (var i = 0; i < this.list.length; i++) {
      this.list[i].tag.apply(this.list[i], arguments);
    }

    return this;
  };
};

module.exports = addMethods;

},{}],194:[function(_dereq_,module,exports){
'use strict';

var syntaxParse = _dereq_('../../../terms/match/lib/syntax');

var Terms = _dereq_('../../../terms');

var splitMethods = function splitMethods(Text) {
  //support "#Noun word" regex-matches
  var matchReg = function matchReg(r, reg, verbose) {
    //parse the 'regex' into some json
    var list = [];
    reg = syntaxParse(reg);
    r.list.forEach(function (ts) {
      //an array of arrays
      var matches = ts.match(reg, verbose);
      matches.list.forEach(function (ms) {
        list.push(ms);
      });
    });
    var parent = r.parent || r;
    return new Text(list, r.world(), parent);
  }; //support {word:true} whitelist


  var matchObj = function matchObj(r, obj) {
    var matches = [];
    r.list.forEach(function (ts) {
      ts.terms.forEach(function (t) {
        if (obj.hasOwnProperty(t.normal) === true) {
          matches.push(t);
        }
      });
    });
    matches = matches.map(function (t) {
      return new Terms([t], r.world(), r, t.parentTerms);
    });
    return new Text(matches, r.world(), r.parent);
  }; //support [word, word] whitelist


  var matchArr = function matchArr(r, arr) {
    //its faster this way
    var obj = arr.reduce(function (h, a) {
      h[a] = true;
      return h;
    }, {});
    return matchObj(r, obj);
  }; //take a Text object as a match


  var matchTextObj = function matchTextObj(r, m) {
    var arr = m.out('array'); //i guess this is fine..

    return matchArr(r, arr);
  };

  var methods = {
    /** do a regex-like search through terms and return a subset */
    match: function match(reg, verbose) {
      //fail-fast
      if (this.list.length === 0 || reg === undefined || reg === null) {
        var parent = this.parent || this;
        return new Text([], this.world(), parent);
      } //match "#Noun word" regex


      if (typeof reg === 'string' || typeof reg === 'number') {
        return matchReg(this, reg, verbose);
      } //match [word, word] whitelist


      var type = Object.prototype.toString.call(reg);

      if (type === '[object Array]') {
        return matchArr(this, reg);
      } //match {word:true} whitelist


      if (type === '[object Object]') {
        if (reg.isA === 'Text') {
          return matchTextObj(this, reg);
        } else {
          return matchObj(this, reg);
        }
      }

      return this;
    },
    not: function not(reg, verbose) {
      var list = [];
      this.list.forEach(function (ts) {
        var found = ts.not(reg, verbose);
        list = list.concat(found.list);
      });
      var parent = this.parent || this;
      return new Text(list, this.world(), parent);
    },
    if: function _if(reg) {
      var list = [];

      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].has(reg) === true) {
          list.push(this.list[i]);
        }
      }

      var parent = this.parent || this;
      return new Text(list, this.world(), parent);
    },
    ifNo: function ifNo(reg) {
      var list = [];

      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].has(reg) === false) {
          list.push(this.list[i]);
        }
      }

      var parent = this.parent || this;
      return new Text(list, this.world(), parent);
    },
    has: function has(reg) {
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].has(reg) === true) {
          return true;
        }
      }

      return false;
    },

    /**find a match, and return everything infront of it*/
    before: function before(reg) {
      var list = [];

      for (var i = 0; i < this.list.length; i++) {
        var m = this.list[i].matchOne(reg);

        if (m) {
          var index = m[0].index();
          var found = this.list[i].slice(0, index);

          if (found.length > 0) {
            list.push(found);
          }
        }
      }

      var parent = this.parent || this;
      return new Text(list, this.world(), parent);
    },

    /**find a match, and return everything after of it*/
    after: function after(reg) {
      var list = [];

      for (var i = 0; i < this.list.length; i++) {
        var m = this.list[i].matchOne(reg);

        if (m) {
          var lastTerm = m[m.length - 1];
          var index = lastTerm.index();
          var found = this.list[i].slice(index + 1, this.list[i].length);

          if (found.length > 0) {
            list.push(found);
          }
        }
      }

      var parent = this.parent || this;
      return new Text(list, this.world(), parent);
    }
  }; //alias 'and'

  methods.and = methods.match;
  methods.notIf = methods.ifNo;
  methods.only = methods.if;
  methods.onlyIf = methods.if; //hook them into result.proto

  Text.addMethods(Text, methods);
  return Text;
};

module.exports = splitMethods;

},{"../../../terms":165,"../../../terms/match/lib/syntax":175}],195:[function(_dereq_,module,exports){
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Terms = _dereq_('../../terms');

var miscMethods = function miscMethods(Text) {
  var methods = {
    all: function all() {
      return this.parent;
    },
    index: function index() {
      return this.list.map(function (ts) {
        return ts.index();
      });
    },
    wordCount: function wordCount() {
      return this.terms().length;
    },
    data: function data() {
      return this.list.map(function (ts) {
        return ts.data();
      });
    },

    /* javascript array loop-wrappers */
    map: function map(fn) {
      var _this = this;

      return this.list.map(function (ts, i) {
        var text = new Text([ts], _this.world);
        return fn(text, i);
      });
    },
    forEach: function forEach(fn) {
      var _this2 = this;

      this.list.forEach(function (ts, i) {
        var text = new Text([ts], _this2.world);
        fn(text, i);
      });
      return this;
    },
    filter: function filter(fn) {
      var _this3 = this;

      var list = this.list.filter(function (ts, i) {
        var text = new Text([ts], _this3.world);
        return fn(text, i);
      });
      return new Text(list, this.world);
    },
    reduce: function reduce(fn, h) {
      var _this4 = this;

      return this.list.reduce(function (_h, ts) {
        var text = new Text([ts], _this4.world);
        return fn(_h, text);
      }, h);
    },
    find: function find(fn) {
      for (var i = 0; i < this.list.length; i++) {
        var ts = this.list[i];
        var text = new Text([ts], this.world);

        if (fn(text)) {
          return text;
        }
      }

      return undefined;
    },

    /**copy data properly so later transformations will have no effect*/
    clone: function clone() {
      var list = this.list.map(function (ts) {
        return ts.clone();
      });
      return new Text(list, this.world); //this.lexicon, this.parent
    },

    /** get the nth term of each result*/
    term: function term(n) {
      var _this5 = this;

      var list = this.list.map(function (ts) {
        var arr = [];
        var el = ts.terms[n];

        if (el) {
          arr = [el];
        }

        return new Terms(arr, _this5.world, _this5.refText, _this5.refTerms);
      });
      return new Text(list, this.world, this.parent);
    },
    firstTerm: function firstTerm() {
      return this.match('^.');
    },
    lastTerm: function lastTerm() {
      return this.match('.$');
    },

    /** grab a subset of the results*/
    slice: function slice(start, end) {
      this.list = this.list.slice(start, end);
      return this;
    },

    /** use only the nth result*/
    get: function get(n) {
      //return an empty result
      if (!n && n !== 0 || !this.list[n]) {
        return new Text([], this.world, this.parent);
      }

      var ts = this.list[n];
      return new Text([ts], this.world, this.parent);
    },

    /**use only the first result */
    first: function first(n) {
      if (!n && n !== 0) {
        return this.get(0);
      }

      return new Text(this.list.slice(0, n), this.world, this.parent);
    },

    /**use only the last result */
    last: function last(n) {
      if (!n && n !== 0) {
        return this.get(this.list.length - 1);
      }

      var end = this.list.length;
      var start = end - n;
      return new Text(this.list.slice(start, end), this.world, this.parent);
    },
    concat: function concat() {
      //any number of params
      for (var i = 0; i < arguments.length; i++) {
        var p = arguments[i];

        if (_typeof(p) === 'object') {
          //Text()
          if (p.isA === 'Text' && p.list) {
            this.list = this.list.concat(p.list);
          } //Terms()


          if (p.isA === 'Terms') {
            this.list.push(p);
          }
        }
      }

      return this;
    },

    /** make it into one sentence/termlist */
    flatten: function flatten() {
      var terms = [];
      this.list.forEach(function (ts) {
        terms = terms.concat(ts.terms);
      }); //dont create an empty ts

      if (!terms.length) {
        return new Text(null, this.world, this.parent);
      }

      var ts = new Terms(terms, this.world, this, null);
      return new Text([ts], this.world, this.parent);
    },

    /** see if these terms can become this tag*/
    canBe: function canBe(tag) {
      this.list.forEach(function (ts) {
        ts.terms = ts.terms.filter(function (t) {
          return t.canBe(tag);
        });
      });
      return this;
    },

    /** sample part of the array */
    random: function random(n) {
      n = n || 1;
      var r = Math.floor(Math.random() * this.list.length);
      var arr = this.list.slice(r, r + n); //if we're off the end, add some from the start

      if (arr.length < n) {
        var diff = n - arr.length;

        if (diff > r) {
          diff = r; //prevent it from going full-around
        }

        arr = arr.concat(this.list.slice(0, diff));
      }

      return new Text(arr, this.world, this.parent);
    },
    setPunctuation: function setPunctuation(punct) {
      this.list.forEach(function (ts) {
        return ts.setPunctuation(punct);
      });
      return this;
    },
    getPunctuation: function getPunctuation(num) {
      //support num param
      if (num || num === 0) {
        if (!this.list[num]) {
          return '';
        }

        return this.list[num].getPunctuation();
      }

      return this.list.map(function (ts) {
        return ts.getPunctuation();
      });
    },
    //jquery-like api aliases
    offset: function offset() {
      return this.out('offset');
    },
    text: function text() {
      return this.out('text');
    }
  }; //aliases

  methods.eq = methods.get;
  methods.join = methods.flatten;
  Text.addMethods(Text, methods);
};

module.exports = miscMethods;

},{"../../terms":165}],196:[function(_dereq_,module,exports){
'use strict';

var _unicode = _dereq_('../../term/methods/normalize/unicode'); //


var defaults = {
  whitespace: true,
  case: true,
  numbers: true,
  punctuation: true,
  unicode: true,
  contractions: true,
  acronyms: true,
  parentheses: false,
  possessives: false,
  plurals: false,
  verbs: false,
  honorifics: false
};
var methods = {
  /** make only one space between each word */
  whitespace: function whitespace(r) {
    r.terms().list.forEach(function (ts, i) {
      var t = ts.terms[0];

      if (i > 0 && !t.silent_term) {
        t.whitespace.before = ' ';
      } else if (i === 0) {
        t.whitespace.before = '';
      }

      t.whitespace.after = ''; //add normalized quotation symbols

      if (t.tags.StartQuotation === true) {
        t.whitespace.before += '"';
      }

      if (t.tags.EndQuotation === true) {
        t.whitespace.after = '"' + t.whitespace.after;
      }
    });
    return r;
  },

  /** make first-word titlecase, and people, places titlecase */
  case: function _case(r) {
    r.list.forEach(function (ts) {
      ts.terms.forEach(function (t, i) {
        if (i === 0 || t.tags.Person || t.tags.Place || t.tags.Organization) {// ts.toTitleCase() //fixme: too weird here.
        } else {
          ts.toLowerCase();
        }
      });
    });
    return r;
  },

  /** turn 'five' to 5, and 'fifth' to 5th*/
  numbers: function numbers(r) {
    r.values().toNumber();
    return r;
  },

  /** remove commas, semicolons - but keep sentence-ending punctuation*/
  punctuation: function punctuation(r) {
    r.list.forEach(function (ts) {
      if (!ts.terms.length) {
        return;
      } //first-term punctuation


      ts.terms[0]._text = ts.terms[0]._text.replace(/^¿/, ''); //middle-terms

      for (var i = 0; i < ts.terms.length - 1; i++) {
        var t = ts.terms[i]; //remove non-sentence-ending stuff

        t._text = t._text.replace(/[:;,]$/, '');
      } //replace !!! with !


      var last = ts.terms[ts.terms.length - 1];
      last._text = last._text.replace(/\.+$/, '.');
      last._text = last._text.replace(/!+$/, '!');
      last._text = last._text.replace(/\?+!?$/, '?'); //support '?!'
    });
    return r;
  },
  // turn Björk into Bjork
  unicode: function unicode(r) {
    r.list.forEach(function (ts) {
      ts.terms.forEach(function (t) {
        t.text = _unicode(t.text);
      });
    });
    return r;
  },
  //expand all contractions
  contractions: function contractions(r) {
    r.contractions().expand();
    return r;
  },
  //remove periods from acronyms, like F.B.I.
  acronyms: function acronyms(r) {
    r.acronyms().stripPeriods();
    return r;
  },
  //turn david's → david
  possessives: function possessives(r) {
    r.possessives().strip();
    return r;
  },
  //strip out parts in (brackets)
  parentheses: function parentheses(r) {
    r.parentheses().delete();
    return r;
  },
  //turn sandwhiches → sandwhich
  plurals: function plurals(r) {
    //todo:this has a non-cooperative bug
    r.nouns().toSingular();
    return r;
  },
  //turn ate → eat
  verbs: function verbs(r) {
    r.verbs().toInfinitive();
    return r;
  },
  //turn 'Sergeant Pepper to 'Pepper'
  honorifics: function honorifics(r) {
    r = r.delete('#Honorific');
    return r;
  }
};

var addMethods = function addMethods(Text) {
  Text.prototype.normalize = function (options) {
    var doc = this; //set defaults

    options = options || {};
    var obj = Object.assign({}, defaults);
    var keys = Object.keys(options);
    keys.forEach(function (k) {
      obj[k] = options[k];
    }); //do each type of normalization

    Object.keys(obj).forEach(function (fn) {
      if (obj[fn] && methods[fn] !== undefined) {
        doc = methods[fn](doc);
      }
    });
    return doc;
  };
};

module.exports = addMethods;

},{"../../term/methods/normalize/unicode":151}],197:[function(_dereq_,module,exports){
'use strict';

var _topk = _dereq_('./topk');

var offset = _dereq_('./offset');

var termIndex = _dereq_('./indexes');

var fns = _dereq_('../paths').fns;

var methods = {
  text: function text(r) {
    return r.list.reduce(function (str, ts) {
      str += ts.out('text');
      return str;
    }, '');
  },
  match: function match(r) {
    return r.list.reduce(function (str, ts) {
      str += ts.out('match');
      return str;
    }, '');
  },
  normal: function normal(r) {
    return r.list.map(function (ts) {
      var str = ts.out('normal');
      var last = ts.last();

      if (last) {
        var punct = ts.getPunctuation();

        if (punct === '.' || punct === '!' || punct === '?') {
          str += punct;
        }
      }

      return str;
    }).join(' ');
  },
  root: function root(r) {
    return r.list.map(function (ts) {
      return ts.out('root');
    }).join(' ');
  },

  /** output where in the original output string they are*/
  offsets: function offsets(r) {
    return offset(r);
  },

  /** output the tokenized location of this match*/
  index: function index(r) {
    return termIndex(r);
  },
  grid: function grid(r) {
    return r.list.reduce(function (str, ts) {
      str += ts.out('grid');
      return str;
    }, '');
  },
  color: function color(r) {
    return r.list.reduce(function (str, ts) {
      str += ts.out('color');
      return str;
    }, '');
  },
  array: function array(r) {
    return r.list.map(function (ts) {
      return ts.out('normal');
    });
  },
  csv: function csv(r) {
    return r.list.map(function (ts) {
      return ts.out('csv');
    }).join('\n');
  },
  newlines: function newlines(r) {
    return r.list.map(function (ts) {
      return ts.out('newlines');
    }).join('\n');
  },
  json: function json(r) {
    return r.list.reduce(function (arr, ts) {
      var terms = ts.terms.map(function (t) {
        return {
          text: t.text,
          normal: t.normal,
          tags: t.tag
        };
      });
      arr.push(terms);
      return arr;
    }, []);
  },
  html: function html(r) {
    var html = r.list.reduce(function (str, ts) {
      var sentence = ts.terms.reduce(function (sen, t) {
        sen += '\n    ' + t.out('html');
        return sen;
      }, '');
      return str += '\n  <span>' + sentence + '\n  </span>';
    }, '');
    return '<span> ' + html + '\n</span>';
  },
  terms: function terms(r) {
    var arr = [];
    r.list.forEach(function (ts) {
      ts.terms.forEach(function (t) {
        arr.push({
          text: t.text,
          normal: t.normal,
          tags: Object.keys(t.tags)
        });
      });
    });
    return arr;
  },
  debug: function debug(r) {
    console.log('====');
    r.list.forEach(function (ts) {
      console.log('   --');
      ts.debug();
    });
    return r;
  },
  topk: function topk(r) {
    return _topk(r);
  },
  custom: function custom(r, obj) {
    return r.list.map(function (ts) {
      return ts.out(obj);
    });
  }
};
methods.plaintext = methods.text;
methods.normalized = methods.normal;
methods.colors = methods.color;
methods.tags = methods.terms;
methods.offset = methods.offsets;
methods.idexes = methods.index;
methods.frequency = methods.topk;
methods.freq = methods.topk;
methods.arr = methods.array;

var addMethods = function addMethods(Text) {
  Text.prototype.out = function (fn) {
    if (typeof fn === 'string') {
      if (methods[fn]) {
        return methods[fn](this);
      }
    } else if (fns.isObject(fn) === true) {
      //support .out({})
      return methods.custom(this, fn);
    }

    return methods.text(this);
  };

  Text.prototype.debug = function () {
    return methods.debug(this);
  };

  return Text;
};

module.exports = addMethods;

},{"../paths":201,"./indexes":198,"./offset":199,"./topk":200}],198:[function(_dereq_,module,exports){
'use strict'; //find where in the original text this match is found, by term-counts

var termIndex = function termIndex(r) {
  var result = []; //find the ones we want

  var want = {};
  r.terms().list.forEach(function (ts) {
    want[ts.terms[0].uid] = true;
  }); //find their counts

  var sum = 0;
  var parent = r.all();
  parent.list.forEach(function (ts, s) {
    ts.terms.forEach(function (t, i) {
      if (want[t.uid] !== undefined) {
        result.push({
          text: t.text,
          normal: t.normal,
          term: sum,
          sentence: s,
          sentenceTerm: i
        });
      }

      sum += 1;
    });
  });
  return result;
};

module.exports = termIndex;

},{}],199:[function(_dereq_,module,exports){
'use strict';
/** say where in the original output string they are found*/

var findOffset = function findOffset(parent, term) {
  var sum = 0;

  for (var i = 0; i < parent.list.length; i++) {
    for (var o = 0; o < parent.list[i].terms.length; o++) {
      var t = parent.list[i].terms[o];

      if (t.uid === term.uid) {
        return sum;
      } else {
        sum += t.whitespace.before.length + t._text.length + t.whitespace.after.length;
      }
    }
  }

  return null;
}; //like 'text' for the middle, and 'normal' for the start+ends
//used for highlighting the actual words, without whitespace+punctuation


var trimEnds = function trimEnds(ts) {
  var terms = ts.terms;

  if (terms.length <= 2) {
    return ts.out('normal');
  } //the start


  var str = terms[0].normal; //the middle

  for (var i = 1; i < terms.length - 1; i++) {
    var t = terms[i];
    str += t.whitespace.before + t.text + t.whitespace.after;
  } //the end


  str += ' ' + terms[ts.terms.length - 1].normal;
  return str;
}; //map over all-dem-results


var allOffset = function allOffset(r) {
  var parent = r.all();
  return r.list.map(function (ts) {
    var words = [];

    for (var i = 0; i < ts.terms.length; i++) {
      words.push(ts.terms[i].normal);
    }

    var nrml = trimEnds(ts);
    var txt = ts.out('text');
    var startAt = findOffset(parent, ts.terms[0]);
    var beforeWord = ts.terms[0].whitespace.before;
    var wordStart = startAt + beforeWord.length;
    return {
      text: txt,
      normal: ts.out('normal'),
      //where we begin
      offset: startAt,
      length: txt.length,
      wordStart: wordStart,
      wordEnd: wordStart + nrml.length // wordLength: words.join(' ').length

    };
  });
};

module.exports = allOffset;

},{}],200:[function(_dereq_,module,exports){
'use strict'; //

var topk = function topk(r, n) {
  //count occurance
  var count = {};
  r.list.forEach(function (ts) {
    var str = ts.out('root');
    count[str] = count[str] || 0;
    count[str] += 1;
  }); //turn into an array

  var all = [];
  Object.keys(count).forEach(function (k) {
    all.push({
      normal: k,
      count: count[k]
    });
  }); //add percentage

  all.forEach(function (o) {
    o.percent = parseFloat((o.count / r.list.length * 100).toFixed(2));
  }); //sort by freq

  all = all.sort(function (a, b) {
    if (a.count > b.count) {
      return -1;
    }

    return 1;
  });

  if (n) {
    all = all.splice(0, n);
  }

  return all;
};

module.exports = topk;

},{}],201:[function(_dereq_,module,exports){
"use strict";

module.exports = _dereq_('../paths');

},{"../paths":205}],202:[function(_dereq_,module,exports){
'use strict';

var sorter = _dereq_('./methods');

var addMethods = function addMethods(Text) {
  var fns = {
    /**reorder result.list alphabetically */
    sort: function sort(method) {
      //default sort
      method = method || 'alphabetical';
      method = method.toLowerCase();

      if (!method || method === 'alpha' || method === 'alphabetical') {
        return sorter.alpha(this, Text);
      }

      if (method === 'chron' || method === 'chronological') {
        return sorter.chron(this, Text);
      }

      if (method === 'length') {
        return sorter.lengthFn(this, Text);
      }

      if (method === 'freq' || method === 'frequency') {
        return sorter.freq(this, Text);
      }

      if (method === 'wordcount') {
        return sorter.wordCount(this, Text);
      }

      return this;
    },

    /**reverse the order of result.list */
    reverse: function reverse() {
      this.list = this.list.reverse();
      return this;
    },
    unique: function unique() {
      var obj = {};
      this.list = this.list.filter(function (ts) {
        var str = ts.out('root');

        if (obj.hasOwnProperty(str)) {
          return false;
        }

        obj[str] = true;
        return true;
      });
      return this;
    }
  }; //hook them into result.proto

  Text.addMethods(Text, fns);
  return Text;
};

module.exports = addMethods;

},{"./methods":203}],203:[function(_dereq_,module,exports){
'use strict'; //perform sort on pre-computed values

var sortEm = function sortEm(arr) {
  arr = arr.sort(function (a, b) {
    if (a.index > b.index) {
      return 1;
    }

    if (a.index === b.index) {
      return 0;
    }

    return -1;
  }); //return ts objects

  return arr.map(function (o) {
    return o.ts;
  });
}; //alphabetical sorting of a termlist array


exports.alpha = function (r) {
  r.list.sort(function (a, b) {
    //#1 performance speedup
    if (a === b) {
      return 0;
    } //#2 performance speedup


    if (a.terms[0] && b.terms[0]) {
      if (a.terms[0].root > b.terms[0].root) {
        return 1;
      }

      if (a.terms[0].root < b.terms[0].root) {
        return -1;
      }
    } //regular compare


    if (a.out('root') > b.out('root')) {
      return 1;
    }

    return -1;
  });
  return r;
}; //the order they were recieved (chronological~)


exports.chron = function (r) {
  //pre-compute indexes
  var tmp = r.list.map(function (ts) {
    return {
      ts: ts,
      index: ts.termIndex()
    };
  });
  r.list = sortEm(tmp);
  return r;
}; //shortest matches first


exports.lengthFn = function (r) {
  //pre-compute indexes
  var tmp = r.list.map(function (ts) {
    return {
      ts: ts,
      index: ts.chars()
    };
  });
  r.list = sortEm(tmp).reverse();
  return r;
}; //count the number of terms in each match


exports.wordCount = function (r) {
  //pre-compute indexes
  var tmp = r.list.map(function (ts) {
    return {
      ts: ts,
      index: ts.length
    };
  });
  r.list = sortEm(tmp);
  return r;
}; //sort by frequency (like topk)


exports.freq = function (r) {
  //get counts
  var count = {};
  r.list.forEach(function (ts) {
    var str = ts.out('root');
    count[str] = count[str] || 0;
    count[str] += 1;
  }); //pre-compute indexes

  var tmp = r.list.map(function (ts) {
    var num = count[ts.out('root')] || 0;
    return {
      ts: ts,
      index: num * -1 //quick-reverse it

    };
  });
  r.list = sortEm(tmp);
  return r;
};

},{}],204:[function(_dereq_,module,exports){
'use strict';

var splitMethods = function splitMethods(Text) {
  var methods = {
    /** turn result into two seperate results */
    splitAfter: function splitAfter(reg, verbose) {
      var list = [];
      this.list.forEach(function (ts) {
        ts.splitAfter(reg, verbose).forEach(function (mts) {
          list.push(mts);
        });
      });
      this.list = list;
      return this;
    },

    /** turn result into two seperate results */
    splitBefore: function splitBefore(reg, verbose) {
      var list = [];
      this.list.forEach(function (ts) {
        ts.splitBefore(reg, verbose).forEach(function (mts) {
          list.push(mts);
        });
      });
      this.list = list;
      return this;
    },

    /** turn result into two seperate results */
    splitOn: function splitOn(reg, verbose) {
      var list = [];
      this.list.forEach(function (ts) {
        ts.splitOn(reg, verbose).forEach(function (mts) {
          list.push(mts);
        });
      });
      this.list = list;
      return this;
    }
  }; //hook them into result.proto

  Text.addMethods(Text, methods);
  return Text;
};

module.exports = splitMethods;

},{}],205:[function(_dereq_,module,exports){
arguments[4][201][0].apply(exports,arguments)
},{"../paths":8,"dup":201}],206:[function(_dereq_,module,exports){
'use strict';

var isQuestion = _dereq_('../subset/sentences/isQuestion');

var addSubsets = function addSubsets(Text) {
  //these subsets have no instance methods, so are simply a 'find' method.
  var subsets = {
    clauses: function clauses(n) {
      var r = this.splitAfter('#ClauseEnd');

      if (typeof n === 'number') {
        r = r.get(n);
      }

      return r;
    },
    hashTags: function hashTags(n) {
      var r = this.match('#HashTag').terms();

      if (typeof n === 'number') {
        r = r.get(n);
      }

      return r;
    },
    organizations: function organizations(n) {
      var r = this.splitAfter('#Comma');
      r = r.match('#Organization+');

      if (typeof n === 'number') {
        r = r.get(n);
      }

      return r;
    },
    phoneNumbers: function phoneNumbers(n) {
      var r = this.splitAfter('#Comma');
      r = r.match('#PhoneNumber+');

      if (typeof n === 'number') {
        r = r.get(n);
      }

      return r;
    },
    places: function places(n) {
      var r = this.splitAfter('#Comma');
      r = r.match('#Place+');

      if (typeof n === 'number') {
        r = r.get(n);
      }

      return r;
    },
    quotations: function quotations(n) {
      var matches = this.match('#Quotation+');
      var found = [];
      matches.list.forEach(function (ts) {
        var open = 0;
        var start = null; //handle nested quotes - 'startQuote->startQuote->endQuote->endQuote'

        ts.terms.forEach(function (t, i) {
          if (t.tags.StartQuotation === true) {
            if (open === 0) {
              start = i;
            }

            open += 1;
          }

          if (open > 0 && t.tags.EndQuotation === true) {
            open -= 1;
          }

          if (open === 0 && start !== null) {
            found.push(ts.slice(start, i + 1));
            start = null;
          }
        }); //maybe we messed something up..

        if (start !== null) {
          found.push(ts.slice(start, ts.terms.length));
        }
      });
      matches.list = found;

      if (typeof n === 'number') {
        matches = matches.get(n);
      }

      return matches;
    },
    topics: function topics(n) {
      var r = this.clauses(); // Find people, places, and organizations

      var yup = r.people();
      yup.concat(r.places());
      yup.concat(r.organizations());
      var ignore = ['someone', 'man', 'woman', 'mother', 'brother', 'sister', 'father'];
      yup = yup.not(ignore); //return them to normal ordering

      yup.sort('chronological'); // yup.unique() //? not sure

      if (typeof n === 'number') {
        yup = yup.get(n);
      }

      return yup;
    },
    urls: function urls(n) {
      var r = this.match('#Url');

      if (typeof n === 'number') {
        r = r.get(n);
      }

      return r;
    },
    questions: function questions(n) {
      var r = this.all();

      if (typeof n === 'number') {
        r = r.get(n);
      }

      var list = r.list.filter(function (ts) {
        return isQuestion(ts);
      });
      return new Text(list, this.world, this.parent);
    },
    statements: function statements(n) {
      var r = this.all();

      if (typeof n === 'number') {
        r = r.get(n);
      }

      var list = r.list.filter(function (ts) {
        return isQuestion(ts) === false;
      });
      return new Text(list, this.world, this.parent);
    },
    parentheses: function parentheses(n) {
      var r = this.match('#Parentheses+'); //split-up consecutive ones

      r = r.splitAfter('#EndBracket');

      if (typeof n === 'number') {
        r = r.get(n);
      }

      return r;
    }
  };
  Object.keys(subsets).forEach(function (k) {
    Text.prototype[k] = subsets[k];
  });
  return Text;
};

module.exports = addSubsets;

},{"../subset/sentences/isQuestion":53}],207:[function(_dereq_,module,exports){
//(Rule-based sentence boundary segmentation) - chop given text into its proper sentences.
// Ignore periods/questions/exclamations used in acronyms/abbreviations/numbers, etc.
// @spencermountain 2017 MIT
'use strict';

var abbreviations = Object.keys(_dereq_('../world/more-data/abbreviations')); // \u203D - Interrobang
// \u2E18 - Inverted Interrobang
// \u203C - Double Exclamation Mark
// \u2047 - Double Question Mark
// \u2048 - Question Exclamation Mark
// \u2049 - Exclamation Question Mark
// \u2026 - Ellipses Character
//regs-

var abbrev_reg = new RegExp('\\b(' + abbreviations.join('|') + ")[.!?\u203D\u2E18\u203C\u2047-\u2049] *$", 'i');
var acronym_reg = /[ .][A-Z]\.? *$/i;
var ellipses_reg = /(?:\u2026|\.{2,}) *$/; // Match different formats of new lines. (Mac: \r, Linux: \n, Windows: \r\n)

var new_line = /((?:\r?\n|\r)+)/;
var naiive_sentence_split = /(\S.+?[.!?\u203D\u2E18\u203C\u2047-\u2049])(?=\s+|$)/g;
var letter_regex = /[a-z0-9\u0000-\u007F]/i; //support an all-unicode sentence, i guess

var not_ws_regex = /\S/; // Start with a regex:

var naiive_split = function naiive_split(text) {
  var all = []; //first, split by newline

  var lines = text.split(new_line);

  for (var i = 0; i < lines.length; i++) {
    //split by period, question-mark, and exclamation-mark
    var arr = lines[i].split(naiive_sentence_split);

    for (var o = 0; o < arr.length; o++) {
      all.push(arr[o]);
    }
  }

  return all;
};

var sentence_parser = function sentence_parser(text) {
  text = text || '';
  text = String(text);
  var sentences = []; // First do a greedy-split..

  var chunks = []; // Ensure it 'smells like' a sentence

  if (!text || typeof text !== 'string' || not_ws_regex.test(text) === false) {
    return sentences;
  } // Start somewhere:


  var splits = naiive_split(text); // Filter-out the grap ones

  for (var i = 0; i < splits.length; i++) {
    var s = splits[i];

    if (s === undefined || s === '') {
      continue;
    } //this is meaningful whitespace


    if (not_ws_regex.test(s) === false) {
      //add it to the last one
      if (chunks[chunks.length - 1]) {
        chunks[chunks.length - 1] += s;
        continue;
      } else if (splits[i + 1]) {
        //add it to the next one
        splits[i + 1] = s + splits[i + 1];
        continue;
      }
    } //else, only whitespace, no terms, no sentence


    chunks.push(s);
  } //detection of non-sentence chunks:
  //loop through these chunks, and join the non-sentence chunks back together..


  for (var _i = 0; _i < chunks.length; _i++) {
    var c = chunks[_i]; //should this chunk be combined with the next one?

    if (chunks[_i + 1] && letter_regex.test(c) && (abbrev_reg.test(c) || acronym_reg.test(c) || ellipses_reg.test(c))) {
      chunks[_i + 1] = c + (chunks[_i + 1] || '');
    } else if (c && c.length > 0 && letter_regex.test(c)) {
      //this chunk is a proper sentence..
      sentences.push(c);
      chunks[_i] = '';
    }
  } //if we never got a sentence, return the given text


  if (sentences.length === 0) {
    return [text];
  }

  return sentences;
};

module.exports = sentence_parser; // console.log(sentence_parser('john f. kennedy'));

},{"../world/more-data/abbreviations":216}],208:[function(_dereq_,module,exports){
"use strict";

module.exports = "{\"words\":\"Comparative\xA6better|Superlative\xA6earlier|PresentTense\xA6sounds|Value\xA6a few|Noun\xA6daylight7eom,here,no doubt,one d6s4t1week0yesterd6;d5end;mr1o0;d3morrow;!w;ome 0tandard2;d0point;ay; time|Copula\xA6a1is,w0;as,ere;m,re|Condition\xA6if,unless|PastTense\xA6be2d1had,mea0sa1taken,we0;nt;id;en,gan|LastName\xA60:65G;1:654;2:657;3:652;4:65T;5:5VY;6:631;7:65E;8:666;9:648;A:663;B:62R;C:62P;D:619;E:65V;F:65N;G:5YE;H:5P0;I:64F;J:61B;K:669;L:63I;M:5ZA;N:602;O:63Q;P:660;Q:61G;a5T9b502c4D7d3MRe3J2f39Tg2V7h2K6i2IEj2ECk26Tl1P1m11Xn0XQo0ULp0GTqu0FZr074sOBtFWuFDv84w2Ix2Ey1IzR;a0Rbi2LYd0Qe0Hgh671h0Fi06o03ra5BRuVv66UwSyR;p,sk;a3W0eSiR;bHck0;in3KZrsd8;an5QQbWcUerTm63Mni5WEpSrR;avi4NMek,i66G;anc5MXpH;ch0le3;cRh3ER;a5SOo64M;an,erRo2I1;!bu2KN;l0J5mb5PTna65Nok,rSsDuR;ch,vi;rI4zi;c5V5ddBeXli4NCmUnTol4CTrpo65Mto59Fuk616vSzR;ka,zi;!an103ic,k103;ger59CnHz3HS;merRn5HZ;!mR;an5HUm2;gRli4N5m0;el,l0;aMouRu;!ko5FP;aYchXhraMiOlWnVpUrSss,tR;ch5XQtl;anRbGi64Jn,ou3FJr;g64Js5ZU;hir3iIp5NN;etDga;en5DEin5YGnicMF;!ma60E;l5P7rn;aniec5ZOon5BN;bHc0Bd0AegHfaro5YBg08h07i62Yj5FQk05l04m02nYor,pVrUsDuTwSyRz629;a3NQon61S;ac5QNol;liIst;an5BIi5SDov;a65Ghi5Z7pR;!aR;!vig632;eTiSnRth,utiq;is,oO;ni,s;l63Gtt51O;bi64Ne4MFor,pR;a617ie624;at2o5U4us5JD;aRem,otno60Ur5NH;ib,ri2;ari5LJer5FN;or62EroR;dn5FLv5LK;ra,unays5Z3;cThR;arRee;ie,uk;arRo5PJ;d5G6ia,o;a09e05h317i04oVpersiHs2LturrC6uSvRyy,zyc5PZ;a63Jo62C;ankao,iEnas5XKrR;gaitGievichR;!sansou4UL;cYn60WrVshiUuR;ma63EnR;gRy;bl63Ge,s1w623;da,k2GVna5UJ;kSsR;ki,t1;!e,um;h64QkeE;el,p;!arTllJm1KXnSr5UGtRun4W9;m2t54C;or,s8;l6wo5SX;co02gns5C1k01l00mXnVp5VIrTsStRx;es,yI;!ko;dRengoua649ge5;in,l6;ez,g,i4k5U1nR;a5ZFonP;aRba;da,guc5P8mo63IsRza5Y6;a5Y5hi643;ao61De;i,ole5ZPym4FG;la,ob;aSenUPiRu;e,l1;i4QSnRvi0;d4th5WA;a3Xe2Vh2Ai0Ro02rZuTyRzawA;a5XFbBdHer,l5YIm2nn3P8oto4XGsRt5YU;e,ne5M5oc5XVpia4KZs;!bbol5I6ebboNlVnTrRth3T8;fHstA6tR;eBh;derRs607;!li606;ff,z;aSen604iRo4KS;ce,de,ght62Lnn;ig600y;!erMNi0Ej0Cl07n5KOoWrUsneswesquigi5V3tTulSw4EYycR;en5DEis5XK;fe,i148;d2herspo1;dRms58Ko2AVr1C5th;!e4D0sw60U;!dUlRod,t5LU;co63PeSfo7g62Yl6riRs6;ch,d5ZH;d5ZGy;!a7bu60RcoIgWhVlUmanTru5YXs629wRy;arRor60P;d,k;!s5T0;aQed5ZBoI;am,ouK;aDer;dUe2YXfSlRsk,v3;ey,m2;eRin2UIo7;!nd1;s1um;ciRt4IH;chows4ZXecho5L8;l3IMto;aFb18c13d12e0Zg0Yk0Wl0Gmferwi5BAnZonz58VrYsWtRx55A;hTos5WVs19ItRz5SB;!eRi5EDma5XIy;b22Or;eRmo4o4YQ;ld0nb2H0rs;ca5IMem2hi4JUintain0ni2D8sRta5YC;!el5HG;i5XAte;a61Ab06c03d02e01g00heng5Z1iarZkWnVsUtR;erRle,on;b564sR;!giE;p0ta19B;e5DAi9;el,lR;eRh5X1;p60Ur;s5GIz;aDe0G4f59B;klf5UOr;!er,le,s5LT;hRkl0;c0CVeR;ll,st0;e5ZWu59O;b4MNco05d04es,fo7he03i02k01lWmVsTtRve5P3;sRz;e,hi4;c5NSey,onR;abH;an,et,s;ar,coc3E0eUiRow59Qs60Y;aSck,ngRot,st1;!h5NNt1;ms1rd;t4WGy;!i3RHy;ams1s5VUts5FY;!l5JX;e1XPiMs;tt,x;iRm2;ns,r5I2;en,gi60Bht5DUn6;be,czor57Mge5OKh0le4P5nSrRsn0;en5RHzb5DH;i3AXke608;m0o4GOtm2;e,hUkRloI;eRh5N7i;nRy;heis0s;kramasing601ma5W3;anaw60Er3;a09e04iSyR;a61Ndd1n5VYte;bl6gh5N0nf589ppBs01tR;aZco50KeWfo7iMlUmo4tSwR;h0STor5YO;e4OQiRle,o596y;ck,er,g,n5G0;ey,oR;ck,w;duIfo7hSl6m2seEwR;ay,o5PL;e61GouKu5Y1;k0ll;s4SJt1;aTel0lRssHts3GD;an5QBeRl2;h5MMn;bBr,tR;l6on;lRmoQn,rt1tt,yC;an,e5GVl6on;a0Qb0Pd0Ne0Lg0Kh0Ji0Bkar4C5l06my4VYn03r01sSther19Guthe5TSxl0yR;gaQm2;b2WTco611eYl0n0sXtR;!aEbVeTla3A1more4A8ov0pSriR;ck,m2;ahEh610;lak8rR;!gaa7;o1N3ro4J7u5Y0;e5TOin42Y;lo5ISma5V6n3GX;bRhBt,y;er,r70;ar4BSc,deSer,ga,k,niIsl6tRzH;er,laQw5XS;l,rP;bu57Tch,d,feFlTn0sStR;on,y,z;!ch,h;!eRi2EHm2s,wo5OR;ns5BJr,t;b55Bck0e5N4gXlWn0ppeFrVsStR;he,zH;enthe3i5XYlo,mi40EsRt3PL;!ba5WKenR;bo57Ks5BE;!iIot;!brenn0;a7h5MJ;liMm3FNr5Y7;an,eli5RSn0;ch,dRg5JFkGl0se;!n0on;geRloI;!r55T;b5E1er,st0;d,k54Vn0riMtherRv0;b5PJup;an265b13c12d10e0Zf0Yg0Uh0Ti0Qjs8ke0Ol0DmpBn0Aqua5T9r02sZtTuSvro5W6wan253yR;h5GKlaQm2;gh,thi5A0;ana5IVchVeSi0ki29Gso5BFtR;!ec3SHie5F1s,y;rRs;aEh2ZZm2sR;!tre9;el,i5MF;hSki4F0l4IQt1ylR;ciw,iw;ipaba5T4ko;am,bXdVeUfo7ga4ARing29KkTl5RAmaInSsRt,wiI;ima5VHza5HN;af5M6e5MSoI;!en5JY;!nc5YJs;eRle,r5R5;l5DZn;riIu5NV;dl0em2DFg4CHkSnR;am2DEer;!o1GN;dYeXgrae5S6h3kWlTmSpoBsh,tRz56Q;!e5LZh5EAon,z2HI;an,sl6;!aFeSgaDiRm2;ng1HJs;ck,n5MEr,tD;laDovi590;c5SWry0FEs;al,iSn0onJrR;if,on;ck,spu2BL;f2LPlRy;iMm2;bHdJnSsbr5N8tR;!e,o,tequaQ;m2wr4O3;ichko11Vl8;an5TKeSnRwawaho5UA;er,iG;nRt49X;a5Y3er;erLf0;cO9lp5X8;deRel,lei5H2;l5D6ns;ey,kenh5X5o4RY;eRle;noukisik11Kr5LS;a3Re21i0Ela0DoUrSuR;ig5WMlga36Xr5YN;ee5SZign2S2k5EPoR;m9on8;c08egt53Ag07hl,i04jtis546k6lXnVorhiGr5QJsUuTx,yRz;ar,er,nR;a5FLe;e,k,l3ZLri5SQ;e,sm2;d574ext0hoh8kn0KIod0ricNUsR;ae5VUy40G;aWcViUkTlRp4UQterraOw5LA;eRiI;n3EDriM;!aeFri5VQ;g5SOk0KC;k5ASy;nt,ti0;cu,dy,gSns1sRza7;a7elBinJ;ht,t;el,u0;al,elBi5RE;ardingerbro53Nso57F;a19b18c15d13e0Zg0Qir4k4l0Cmon5NRn06o04r02sZtWvSziR;au,e4L4;aTeSiRo5VT;aOerL;ir5PVla4VFt;l5UTraA;aRiuIk5PBry,ti,ul5WV;lRrd;!e,iL;!cReJ5h6i2T7son4ZL;ar5UOoR;glio5VJl,mpDn5HK;aRce5U5eLk5P5mon3TEo5QUt5W0;l5ULn2YO;lRn;a7et5HGi,o590;!ceTeRk,ya7;tRy;!t5TS;lRnD;et5FSlR;etDi;a03b3FEch5RJde,i5SAlRn0on,tofs5R1;a00eTiRne5SMot;aReu,ot5FO;rd,u5SY;!br595dWfVg5RVmTnSrRsec5VJ;ay,s,y;a5PYeu5PY;aRe4u4;i4rt;eu,r471;i41JonC;!fu1TSgom5R8l58Yndr4TGrRse5PPt;d,e5X2s;in,nd4r4LVt,y23T;!a5E3eXiWnSoRro5WNue2LE;a,t;aTeSi0oRy;la,n;!auNr1t,ux;is,le;a7la5Q0;aRr;nt,ux;!au,ill5R0lTn336rSuRw2FN;!xfoF;a,nesHra;!e,fau4;al5FPe2O7is,rR;egn5I8ic5I8;aSca,eRo;!n4J1;i4r5Q4;eFo5W5;fo4g5PTlTnSrRu;d,ri40V;!di0;!a478;a1EbeFc1Dd9g1Ci19k5PDl15n0Wr00sXtUuil4FNv3UNxtoriCyTzR;e5iR;e4JGna;rPs;e4rStRu;er,or5G2;a5PJie;c5PRen5TFil5C9sRt3XCve;e5FSiRot;a,e4;a0Lb0Jc0Id0Eett5HEg0Ch0Ai09ja11YlQMm06n04o02p01rYsWtVvRwoeF;aSeRilB;nCt;eRis;c34Yl5SLt;efeu5GQhe8z;ail3P5chRi,t25;e28Que4;eSiRo4XP;er,ll5ML;auNc4KKt5E5;ael5SEeal5SEi53H;!nR;!e5ne4B0;a5GMeRi5EIoui4J2;!rLt5NE;aSeR;sh,t5DY;es8nd;eu59Yty;aev8elRo1YW;le,st;a5RGeRne,ouv8;!at,gBrJt5DS;eTiSonRy;!ck,i;!c5NXer;ro5Q0t;aingCh;aCer5SDoRu5SM;!nc587;r5QJyP;aXdUeTiSne4OCtR;i,ur4BZ;ck,e4;d5GGg5PPsLt,z5LM;eSitRramiO;ol5SXti;riItD;!bBnRsK;c5OKt;!aTeSlR;a,uc5DW;s00z;rd,s5PP;g0CSllSnRtZZ;e,o5UR;e0MJo5E9;he4ZHia7;auNch5OBot;le,ry,uR;!d5RRgeoA;b4c2Td2Ri2Ol2Bn0Fr06s01t00uTvaSzR;qu5OR;la,s1L9;b3SScWdUgTja5OZle,q3DJtSvRx,zaudug5ST;i3NHr5NB;hi0i0o5EPr3;eoAh2;ev5F8rR;a3eu5N7in,on,y;h0la5I9;ch0e5F5theu0;as,el5AFilUko,qu5OHsR;!aSe5EIilRor;!j5PV;l,ram53N;a1W9en53Pi5TQo5PH;aYeXgaWiUl6ma,nTot5TSrSs,varR;as5DEes5DE;ie5ECy;ey,um;eRn564;ty,ur;!ra;l5OLnK1;!c0KWlo,mbouviB;-hav4a1Kb1Fc1Dd0Oe0Nfe37Sg0Mh0Ji10Jkoughn9l0Em0An08o07p04r03s01tZvWwTzR;anRielegh8;dt,t;alle1GiSoRy32U;lv1Dnth97rm0;jk,nd8;alkSig,lR;aend1WUi9;en5O0;a23ZiRy;en8gh343;arelber5BWchPeRum1WQ;l,v1WP;enter16oestH;eperstSuymbrR;ouI;raeD;pst5THsJt5DCverm0;eRon;ck,l5RAr,sD;eTiSoR;nsj5SVorh2;chHddelko5KVer5SD;er,t0;aSeRuvan5IP;uv8ym2;aSeth8nR;de0Sen;n8r;erIoRust8;rCuR;c5RCtD;!een05rimb8F;g55Dl,t5KRve5Q4;a0CeTiSl4KUor2r3CJuRy31Z;s8ys5R8;erendonIjk;g08inKl06meulebroec31WnZrSwR;alBi5M2;bVdonckt,hTlu3DBmSpoHsFCt56Ive8wR;al5NW;a4NJe0i3D9;aReR;yd8;eRyl;ck,rg5QY;bUdTeShout8kerckRwild3UP;hov8;!n5NO;a0C2ungengronovi5K2;os5ONrR;an37LoeR;k,le;aRe5CO;c,gama5SE;insDri5C4;eBlSnR;biggela5RKel5OZ;!e,le;alst1VEhRle5L1ort41H;estein4JOy;eToetzSrRur8;aba5LEuy22I;ela0;llRrg8;gh32K;ck0el5OQmme5EOsseR;!ndel5BS;a5N4c02dZeWiVlRot5DOt2LI;a1A7eSiR;erGll5HF;e,ntgo5G4rRt,y;aQon;n,qu50M;ntSriRt;en,oD;i42Cy51Y;eRoI;be25sRz;!be28E;in,ouF;d3QClRnc54Vos,r,ve;!lanR;c3ILt;a5PDeRnaA;au,bonc54J;carUhRlav51Ozy;eRon;rRt;!e46Rie;e5O2o;bart5M0c5C4g08h05it5QEl01mZnXpWrSsRtinaw5M0;al,er5IVon,tin5PF;baTf0quSsRza5LZ;a5KZiO;aFhaF;in,s;at3O7sh593;derRger4OP;hiEwo5FC;bRfr4HQp39A;he3MOr352;ako4KBbricks1ep,ho4Y8iSlRm0ri5N7;i50Tri5N6;nRshn6;!e256;lSrR;i5N2y;!e4OFfe57S;laQu5DU;a6Tc6Pe5Oh4Ei3Jka3Hnimer4THo20r0Ks0IuZwVyR;e5DFlTmSne,o,quien5I0rR;an,e4N8l50YreE;ch56Ti4Y3ofi41T;ie,or;eSiRym2;gg,niM;ddeEedR;aBy;!b08ck07d06g5H3i05l03n01o3EBp00rTsStRx35Zzo;hiEi5JYty;c2h5OCi,k2QX;aObWc4SPenGLgVin5HBk5HBmUnSpRri0t1;!auNin;bRe57Ri0oI;l4SIuE;aiCel596;e1ot;a586e,i3PW;in,liMp3YH;nRstaE;ey,oI;ipa5JMlR;!ey,i0o5MCy;l59Vte;auNe5o;!er,li2LMno5Q4;iel45Bm2oe5MA;chawaschinakusc4V4erenp5IWheil5JGiRoufl1S5ui;gad5KOhe5LQnon5M2pA;a0Ve0Ji06oXuSyR;gg,m0n20;ax,ch4DMde5F6eUff0l59NmTn9oMsRt;el,l0sR;!aFl0;bBel,i0p;l,sd4H2;al8cYdd8es5LYiXll0mVn9pUqu9tSuRws1N0y0;i4D7s2GXt;e5hi0oc3LHtR;!a3e4W3i0;ia5J3p0;bRp3X6;el5OQly;lo,ni,ti0;h9ki;a02b5JVc3NDe01fi00gXh6ls386mWnUoTpRqu9tG;le5PJoRp;di,loC;!n462t;gRks,qu3YZ;a5NCle;!bo5NB;anCeSoR;!trinda5KG;ni5OC;lett5LMro;b,re;l,ntapoulosOud;a00beZc4PTdr5EOen,fXgonniMh8illWlo5OGmVn5O8paTsSvR;e5MHis2;s6tl0;g5N5nR;ez,i0;aiCbl5C1o2U5pJ;!et,i;eRfB;n1VBth8;k,rt;dRsu4udecoe5MU;aw5BVw5BV;ch00g0h4T6in0j5J6mmeEnWo4pVsUvRyn582;ag3XWeRo5NX;ni5GCrsR;!ay,e,i,y;el0k;h4LPp;!chRqu59J;aSeR;ll,m0IK;n5EFrd;imow5NAy;b16c15d14e2V7f12gn0JVkarz,l10m0Vn0Oo0Mp0Ir0Ds0Bt0AuUwRys1z5FX;eEle,nRsl6;e4HPsR;eQheQ;b3che05g5J3kat4T8l04me58Pp55Pque3SVrXsVtTve2PTzR;eRin;!au,l;!aRen,ge,lo5JOv3QK;in,nt;elBig6MsaRt5NV;i5HIl3;aVeUi488l9nRon5DBtel5IKv593;eRi0o3Y9;b1lBrRu4A8;oc5MH;!au,il;ng496uR;de,lt;go5COze;q5MFra3tD;h,t8;caOh,sHtR;ev3o;cUd,el5LUi5HBk5I8nTok,pe,rRte52D;an5JReR;s3WMy;aiKeb598;a573h5HG;a,e,h596oSpRs2;!i5FE;lnRr;is5HE;ds,f,le,mR;bs,ey;as,dWeViUkTnRty;a3EKeR;!ma5LT;anCin;et5MJo5ML;ll5FOr;rJYu;aTbLe53NkSli5KSpRs;ic,ki5LQ;i5LPow;i5GQlRn,s4Y9;la,ty;do,edo,lRon,st40N;an,ey,i0;fRt;a,lemi4o5L4;a4BDdy,orPQ;cac4Y2h6;ey,ic,l0;cRt5J8;h,k460;a0Kb0Jc0Hdr5JNe0Ff0Eg0Dkk1T5l09m03n01pZrYsUtRvich5BNwis5FB;aSchywakFAe,iRl6te2VCyk;o,r5GZ;r3Y0s;chTi,on,sR;an4R4eRi5o5A1;r2ur,y4;aFer,uI;e4M8li,re;pRt1;er,iMma5H4y;a5FYcX1daEkRon,us;er,h583l5FR;bVl3mSonRp3RTs;ey,s,y;!eRi5KYo5KY;ns,rR;manLs;e595ro;bu5JNi0lRma56Ut1;a7eSi,m2oR;n,ts1y;m,ry;e,heLne,r3uG;f9n6r1;rRtj8ulP;ce4LTn6;al,eRh6kn0li;!h5IW;bi509oN;n,tatih8;a0Ue0Ji07oXri55XuTyR;f5CNsR;!dH;il55SmuNn592ot54HrRss,y;bSi0m8sR;by,t1;er,u4T6;ai,e5J4in,ll1mXnWrSuR;in,saQzH;aTbSnRpJs1;!e,t1;o4T1u4T1;l,v5LW;ey,is;!asSeRmas3ps1s8;!l530;on,s52Z;b00ch9eYff5C7lle3ZCmWnVon,rSsRvier5HI;daBe55XtB;eSiRot,y;er,o555;au,me5ET;akar2el54C;enRot;e55Rs;rRss8ul8v3;i5IYy;aud5AUeFi,oRut5GD;d2V9ut3RS;b00d5H6is8llZme5JPn4DUoXrRsa7tr0YY;aVeUiaSn,o5L1rRy;e5BTi8;q5JOultR;!bujo4TC;auNr,t;ce,uN;doRfil5A1r9;r07AsA;ab,en5A6;a528er5GW;b5BKckViUjge4X4nSt5JBuRy0;m55Ate,v4KX;as1I7oR;p5CZs;laQn,saQ;!er0FCr4V6;a0Qb0Oc0Nd3KZe0Mf0Lgo0KhHi0Jja5FKl0Gm0Dn06o05rXsUtRven3wf4V2;aSrRt,u;au,eau,o;ouis1RKrd;ke59Gni0sStR;a3VNe,o4u;er320i0on;c3A9iXp1KHrStR;elc562re;aUeTiRo5KC;aRck,er,sK;h,n;!au4TTn3ID;cc5B3in,s,uN;auNeBll5J5;liLtaranha8;aWbVc5GRdlUnSsRta,zi;car4on;a5DMey,iR;an,er,na;aQen;erg8;gl5DXnt,rd,uN;e3TBk6pR;a5EPleR;!m2t1;a59Qen4TPlRm0ZK;eRi0;m0r,z;chorab,ll9ssere4B5x39N;nagenni1us5HY;ft0n0;d,s,t0;ci5HSh0k3VM;bRo;roeIu5JX;g5IAre,s2B1;hRik4R7;aMiSorR;yk,ze51S;no4ZUte5B7;b0Zc0Ydr5BSe3PQg0Vi0Qk0Nl0Mm0Jn0Foc,p0CquoAr06s02tZuWvTweEyR;l52XsR;!ec;aRer5HPr6;gl01ArR;a,oz5AZ;pi0reSsRte,zi0;!s58P;au,l,t;ic,loIoRroJ;n53DuR;!ague5GR;cThSk,na4J9sRt4EQ;e,ina5IF;ko4ST;a,he445;asVdTe5g0i3NSlSm6quiOrRt3HNzi;a5CIid3UF;ey,o;e,iR;f,vH;i4Z8s3MH;aSerno5IUh4KSiRp5B2;e553n;k54Vr4OR;a5BGcTd5ey,gSis,kersl6n5DPq49BsRze50W;e495weE;!o5F1u55Z;ho564re5E3;!aSbReo,i0l3;e5u5EJ;n,ro,s;!ari5DRb5D6h549la7m2on4KRty;aSeRi5IHs5AD;shi5EMuc53K;cs,h1L9;lRsa5BZt;haTlR;a5DTeRon,y;f0ur;n4MVrda3;gSliaR;fer5F4ni;aFet;coCh04Rkn6;aSet,ic5D5le,oRrizi3R9;i5AVr;ry,uN;aF2bF1cCPdra5ATeASfriz59NgAOh9Ii85jom2k7Yl7Lm7An71o5Op4Squ4Qr4Pt1Du0Gvei5FSw03yVzR;aTcze5EJeSiFtankov4UNuR;b0m4RW;i4N5le5F0;bo,l51Or4NZ;!ch,kGlUmTnSph5HJrRvr57G;e,i3ER;no5I8o5I8;bol4SDes,in4WPon8Gs;co5DHvR;aSeR;rho56Bs8L;n5H1r5H1;aYeViSoRygwa543;bo5CPl;ercz4NOgSk55UnRrce3YTszczo4ZZ;del54Cfo7;aFeF;ariK6eRll,ns1rdfZ1tli5AD;nRz6;ay,ey,y;ck0iUlTn3OGrSyR;ch4XVze;d8t4WW;es,l5ED;l543n;a0Lbra0Kch0Jd0He0Gffo2BBg0Fh3QGi0Eja,kun5CDl0Cmmer0Bn08p05rYsXtSwa5FIzR;or,u5BD;cTer,her3QVliffJtRz;eRo4T3;au,r1AZ;h,lifR;fJse;m2s4F1;a5EZbl56Ych,dWeVgUlTma,n2PIonCpreSre3WTteGujnau5ELvR;ey0oy0;na5AN;ak,o1SR;et,ue;au4QLt4ZQ;if,yn;eRi5AOpHJry;rRt;i5EJn50F;bo5ELdRstr55R;a,bo5EKerRq5BP;laQma5BI;f4NRl3s,t1;em2ko,l1NOtRzB;ai4e;c5BXff1re,s5BR;d8r5FE;tl0;da7ey4QHoR;l,ml4O9;et,odo349;!nO;g0rR;d,ez;-25.24a1Id2C5e0Zgeo07Qi0Sje2l0Rmi2Do0HrYuSv2yR;g0lG;a7bTck6e1UQll,p551rR;gRl6m6n6roI;e1iE;bRi5E5;inRlef4N9s;gt1s;a01eYiXoTuRzel3RP;b,ga4k,n563tR;he534r51D;bHehe4LUkow5EDm5ACnTpSuRv0;b,ds,se;e,ian5FD;a5CJiI;ck3PLde,gn0k3PLng0pl3;bHc4PVet4U9if,lSmmHveR;y,z;b03Low;bAcXda,mWn52QsTtRuss4U6v6;en,fo7hRt1;ea4NDie,y;b3EGsR;bRer;ou5DIu5EP;!andi2R2;h2k;bZckYdaFeXfWkGlVnTo2P2pellb8rSsi4NDtt,uRvHweEy;g3OPt0HH;ch4NBe4XAk,m1oz4W1y;a,eR;!h2G1y;fi,g53Dzenbe2UB;feEiB;be,ssH;!daBer,le0WZm2w10Q;bs,o;auF1ouA;b4ADckWdd,eVlTnRre,tt,v8;eho4ZYgRs1;a,k,ue;et,iar5AAlRs1weE;ar,in,y;gli4RNli;lGn6;-08a06b592c543dm2e04f02g0hl6i00llZmXnWpTrSspr53Du0veRwa7y0;ns1r;c508g5EQk,liMn0ry;an5B0hR;anRe1OX;iIos;ckGg0s3OL;arPmRs;a59Oel8l0;!i5EUy;gn0nR;!ba5BDer,g5DMhi4W4meB0th5FA;anat578feOElovR;a,ic;ks4BDlJnRpe,vG;!bu4MAs8;!dRr5DF;!w3O8;cEEm1OX;b0Bck0Ae0OCf09gChl08i07k5EKl06n00pYrVsTtSuRvo5CTwowy,zn4P6;b,ff0;es,h50C;iRs8y3WJ;!o4WV;an3PXbuIch4UXliMm0nSosz4P1rR;!a5EU;a,es;i2AAleR;!h5BEs,t1y;buIdVf21Cg,iSkiRovUMt1;cewi58Wew5DE;f5BRsR;laRze570;s,ws58B;f217i4UD;in,k0;kHrs;!be5BW;an4O0fo7ra5AC;!ni4LSpoB;aIiBlGn0;a4PRel6OlDN;a0Jc0Gd0Fe0Ef0Dg0Bh247j07l03mXoWpUqueTroSsauve4YMthom590viRyvG;ct4XJn35I;ch,ma3;nt3;a3N8eRi3YL;re,t4T5;m0n5A0u50T;aSiRle5DV;chH;rRuDJ;cHre,sRt3;!eilleR;!-fo41L;aToRuc;!uR;is,p;uD7wr478za4;aTe2oSulR;es,i8;hn,r;c0H7mGr4;eRod4F3;laAmmeLorgeLr2L5;el4QTran13X;l5Zti578;enAizi0;a5CSer584hSla51KoRyrJ;e4XVme;a28Nristop5BW;mTnSrRub3;maQna4UO;d4ge5CLt59W;aQo4XQ;eb1KJivas3IX;agamikoAer2NBiRyrG;bb,reL;a0Ce06i00oZrSuRyks49L;gn3FBrr;aVen52QiSoRy;tt,uK;mo56HngR;er,sR;te8;dl6gRtt;ge,ue;on4R1seto,to,waF;cVdHeUl4KFnSrRshoIz0;a,i4WZop552;a3NXeRou;ll491tt4V8;gHrs,taH;e,kl0;arVcUdTer,ig590nSrR;a56Abe5AAounA;a7ce4TUe5CK;al2ZVdiM;h,k,t4W0;!a560e,m2s5BF;argar8chicouaCId6gXlWnUrTtSuR;n3EUra;hAt;k5C2liMna4ZNr59A;gRi0je4Z9;en3EQl0;diMlanzaOt1;gia593nR;io3LLolR;et4WFiO;a12b11c10d0YetaFh0Wi0Vkol0Ul0Qm0Mn0Jo4Z5p0Ir0Fs0Et0CuVvUwTySzR;et,io;eGDy572;!e09R;al,iaD;a06b05c03d02et,il3Y9k01lYmWnVpUrdiTsDtRv3DIza;hRie4;am,er1ie4;f,vG;i3GNr56V;g,ia;an57AiR;l3Y2s;aSde,e,iRor,s56G;a,erGg56Kni0;ge,nge,rd;onn5A4up;aOer,ol,re;heRy;ir1re5;haOir4IUl51Cre;mi,rt;l56IoRsitsihowaCtB;!may4V1;a,eb51A;bSce,de4VHeRma569ren3OR;l,ns41It;a,es,o3KL;er,ha,in543;dSi0nRt35V;e4THi0;eFr4PB;erTly4YKmR;erRi0;!e5B8s,v4WD;f6Ss,v4WC;aTch0de,eSiRle376m2owo2WBqu3ti;e5B5s;c53Tt;gGn577riJ;an,o4TCuk;f0gnonb,ll55J;i0nR;!e48T;eRgergre8os54Y;n,rl2;hodols4P0q4WS;ey,hi,i2R4;me,rG;aYeUiSoRyd0;d4AXok,w4MY;d0eRseran4KLz4GQ;rs,z4L7;dd1eTiSlRtt,y;g3PBl1T4;d0rs1;!p;b5AGy;aZeWiTocSu4OWyR;k,thJ;k,z4GH;ga2XFle4VRrn58VtR;hRs;!e4XCingeE;aSe59UlRntzc4I1st1t;in,lP;rs,t1;il,llR;ey,wo4YS;aZeWiUoSyR;k0w52X;at,boRc4Z2niego56Jon,the4X4u4STwi3RB;da,ge2;c0de,gRnto55Rp1GYz;er,ht1;aSighRmmo58Qno,v3;er,t;g0n6;ck,g0o579ss1tTuRv3KOws1yd8;gRte57F;ht0;er,te57D;aWeUiToSrRu2Q1yrP;esl9o52Y;fro1H8g2rb,tto0D2;l46Znn0viM;a,enJlRne,rlt1v4K9;ly,t1;ar3UAff,g3GXi4WKkHlk54Ona,ps52F;a12b11c0Yd0Ve0Rg0Ni0Mko561l0Em05nZoXpWrVsTtSvRzm2;a4E7er3Z3ianx,r4Z5;es,o3TAt0;co,et,s1tR;la,o;a7e44Age,isaw4YHna,o4AJ;liMos,plG;ch2n4BPuR;i,se;aVcSetDgRi,j2HDou,xt0;ca58Ver,h4NNl53G;eRla4XM;nRrn4ZJ;neL;i,ll1s4JE;!arN9bl436cYeXiVmToRps1s4NI;es,nR;a58Kds,e4HNin,s1T3y;e4FVonRs;ds,s;enRno,ot;c35Rs3SD;oCr;ox;aXeo,icaOlWvR;aUeR;i55BrSsR;tr55L;s2OBwo4XF;!gg52Uin,n51E;im2ye;!rd,smakwe58S;no,ra;a4Q8l,m2RWnSoRuGH;gCin,u3;er,orR;!et4SXi;beTfeFgSmRverkro53T;i3PRs;el,l0waF;rt,s;aw4VUeSl6m2oRweE;li,r1F6;le5ro544;aSil57QkiOoRuren500;n4JOtD;n4JNrd,te5;er3DRil3KGl6;ne,ud;a0Ke0Bi06oXrVtu4UVuRyD;bTffeNlSmRn1JHte;an,ko;l,m2tzJ;a4DBro3QV;ad0eRi1IIorinche4I1;ad0en51B;eYk54Zn1PUoXrVuTvR;a,eR;l3r;ldRp;is,om;e4O2tR;is,keep0l6;k,n0;m1M6s45B;d0GRelUl452mizu,nTpSri38FsRvH;hiputag2lo;m2peN;dlede4DHe1Tk;ds,l,s;aYd2T7eXffWh522iVlUm4HLppa7qu3rSvel2wR;an,c34D;id8rRwo4W7;aQer,in;a4XIb6dt,t53Zv6;nk,toy2;a7er4WY;dy,h2P1p1EVr3sl6t50C;dy,n,re4P5;ar,dowe565ef0fOZh01i00kes4F8lap4USnXpWrTshume574tweEughWveSwRy;in,l;l2r;by,iMkSpR;e,lG;ey,l6;nes348;aSd,kRly,o;!le,s;feNh2;en2J8nk;!an,in;aSorl1rR;oi;n4WZrR;bi,i41E;a1Jb1Hco1Gd1Ce1BfTIg17hl,i13jour11k10l0Um0Qn0IoMp0Hqu2WXr01s00tYur9vVwTxt1yR;eRme55O;au,r,z;a4FDeR;d,ll;al4QXeRi33P;nRr4LKst4;e,i4MY;lWSo4IMterRz2RR;!bl577;ny,s8;at,b05c04e5g02h2i01m4Ton6p40SrXtWvR;aSeRign2os;t4y;iRnt;n,sR;!vi5;el,orel;aSeRu4UR;!au,n3JTrG;nRr;!d,o,t;en,nd4GJ;eRi;nt,rP;hi226ia;an,i2;ch4MOulve51A;aXcWeUl9nSsa4ZZtR;enCi0;!eR;t,v4RC;cRle,s4G9z;a3NYh56Io1HT;hy53Qil;ck,r4W7t;aSco,en3HFiRjon54GonGp0;na4SBtD;li0nRy;!y3NW;!aVby,ci,eUig53Kk0lSmRva,w4T8;an,et,i4P9;aRe53Vs;nd,rs;ce4s4ZM;m55Ori;al6ouako3OAu3L5;!neR;!r,y;b1NId4G9fTgSll0ne,s4V5tRzJ;ch0enlu533;le,neur9;eFoF;aSee,g55Zl1SVmoQuR;e53Oin,y;lRr,to4;a,la;d,fe4DVl6r4QRwal54B;erTgSiRmihrads4JK;l501n501;e,l6;ay,ho3NK;n4GKrd,urL;ast4W6eRilB;!sty8;bTlSrRve4MVwa7;le,r,s;!e4U6;o0M0ro3NT;a1We1Vh05i03la02oYrSuR;ll286rf4C2t4PC;aVe2C1iToSuR;g3C9t1;sa4P9za4P9;bn0p1CEveR;n4J7r;i4n4HB;bTfSll24Wol,rRtte03T;c545damd545so;en,fi0ie4D9;ey,le;faOt0v4FA;araffa,oRpi1s2XKvi0;rpi4YGt543;a14e0Zi0Ul0Pm0Ln0Go06r00uUwR;aRen3S5in53J;b,ll0nn,p,rR;k,tz,z;c4WReVhma536lTmRne42Gr4EGst0tDvail0;!aRph;ch0k0n;d,eRl0tz,z;n4Z5r;rm2tz;aUeTijve4RDoSyR;buFer;b0d0ed4JM;ad0ck,ib0y0;er,mRpp;!m;bb,c3ZKeYf4B8lXmm0nUoTpSrr,tt,uR;ff0l4GM;ac,pe;fs,l0;bSd0ei50MfR;el52Z;e530ra4SZ;lJt8;b,c2DEnR;!wa4CF;arr,eide4M5oTuR;bRpp;b,el;bRg0;!b;a4VPiSoRu4I7;ck,uth4J9;d4R9liMtR;!h,t,z;aUeTiSossRybeuF;er,ma52A;c503nk;ck0gHiha506si51Hy;tz0;aUck,eTff,lSpp0rRsgh4WB;al51Tm0;f,icoCke,l0AIt0;l2CVttekatD;ppac1QSvoO;eUff4HPiwi33Ql40Nmb4nTrStRub0xna4OC;agCky,te;!dHer,g0l3merho4AWr0;ck,dl0;jeep,l,n,v0;b0dli4ZSe01fZlYmXnWpp0rUtzBuRyG;bSeRm;n35Pr;!u50Y;fRmHp,ry;!e,f;ck,en,zen2M3;bi0p4G2;l0t4UK;er,fR;er,n0riI;d0fKI;au4PGivi0;gn4N6hiEi4PTlUmpiOnTrRuKyan00N;a4WNbRder4OMpit52W;e5o;dl4M5l4A4t3CF;aRl3QUzo;b4YRip4DE;ar4Z5irado3YT;a36b2Xc2Sd2Rey,f2Pg2Lh2Ki29j28k27l1Qm1Jn0Zoum13Dp0Yquesp4SKr0Os0Mt0Ku03vXwUxTyR;eRl4D8wa7;gh,rLs,ur;!iCt1;aSchuRhn6ic4GSy0;ck,k;n,ts4GQya;aTe4W0iSoR;!ie,nn9riOy4OC;da4W2gn4CMns4GN;ge,rRs2RO;d,iRy;!a,e,ni;ber50Nc05d04g03k4U9l01m00nZp3rXssWtTvR;ageRe,iET;!au,sKt;eRn0on,r370t0;nCt,uR;se,x;e,ig4WV;eRi4G8o;l,tD;d4HEi0oA;aFi0u4w0RR;aAli,ni0qu3tR;er,ry;er1u0HO;e,ri9;e4XOh4IDiRo2VO;er,sK;aco36XoRtl0;!re4M5;a4VWsRv4N1;!ev4N0;aZb,ceYd3e3HHgeXi4YAjea4VDlabo4TOmWnVo4WMrStR;h51OweE;aSeRo42G;re,ttJ;bou49Rz4YW;ec4VPo;ien510;ant,nt;l0NYn;co4WMgu4NVnt4WJo,uNya;ee,i3IOk4TWount4T8;aco4bor09c06d03foFg01he51Pitr513n1onJr00sXtSviRz;c3VJdo,lB;!aUer4I2iToRy;iRr;ne,re;er,ll2ni,o4SW;cruz,iCros4WE;aFcSer4fac1oRrTsig4VY;ne,uc4RH;ar3M3hagr3rainD;egr9;ine50Kla4WNol50Mst0uR;in9jC;erSgr8li8oRs;lo,v51I;coIe,s502;er4hSoRy;mb,uF;a4VRe4GG;d,n;aWbVeUi4WEl51Cm4ZQoTpSuRw4YD;els1KTs;as,le,s1;is49Ys49Yurcachi2;k,o507tz;auNe5ir,o3G7;kraDrdzi4QNyVT;a05da4YEe02g01haOi00lZmWna4TVoVsUt0vRzm2;aSiRy;a,et4KY;d4K7il,s,tor4BX;bu4Y4ki;!is,tto501;eSonR;!ovi4CY;la,n,r1;afranq4Z8es,o4Z8s;ba,er,ot,si4U7;a4W5ue4MR;!mbi0rSsR;bu4XVki,seL;a,no;bRdzi4S7h,is,m1ps4X7z4ZX;a,er4XS;ala4ILelarAiO;gal4ARot;a4X3ll00nRto,z2;b4R1cyl4S2d1ge3L7tRxt4JQ;-Wa7eUil,jTlRon;auR;re4TO;ac03Te2;-cRcRloA;ro4DG;fiEh1Q6lYVmauRp20Wurba3;ri4W6;a4TIot;e451li;aSbo,eRot;ot,r;chte2Z2lR;aLla;fRko;i,ou4X8r3UU;arangaOi4TRl0ou17D;aUcTh9khoa4VUoRre;chiouRkP;co49P;a4Z1hit3LHo;gaw4CFlo3K6r3KF;atXba4I7eWi4TAlUoTrSuR;rn,s4UR;an,evoA;lBur3;ie4oR;n,s4DK;e,l4IIt4ZD;e,iRte;er,ni;b,da4WYke,r,s4TC;a6Ne4Yh4Ui39o0IuTwiyanili4VNyR;aEbRc205gh,keFl6m2n4IGpi3GErP;aIka;aAb0Bc1DBd09e07f04g02h01iz,lBm00nZpYqu4MIr46VsUtRwe,z;a4AZhSigl4Q2led4VBtR;er,le;ar4XZer2EUm2v4WB;aw,by,cTk,n46Rp4S9sStR;!ad,en4TQ;e4ZDo;h,io,oO;erth1ZFpe,r2CY;cim2ne4LNs6y467;ak,bo47Cl6pf;l3WRomutal440;eni4QQgRu9;ie4VPlG;e,fRi3IQ;!a4Y7et,iR;er,g4TK;dy,lRst,t4HG;!laQ;dRge,ow,ziav4F5;!ef4W2uIy;b,eSiR;con4VXo;c,nRrt4R3;ne,ov4UG;a2Eb23c1Yd1Se1Qg1Oh1Mi1Lj1Kl1Fm18n12o0Zp0Yqu0Xs0Lt0IuYvWwTxbur4H5ySzR;elBiCm2on,zi;e2Tgi02Ply,on,z0;an4NTb0J9eSlRse4NF;a1C0ey;!ll,rt,y;aRin49L;l9n;auNb08c5d4SXe07fi4N8g06i04l02m01n00pJqu47DrZsUtSvRx,y,zy;es,ilB;et,h3AElRy;ed4UCi4TU;!e,sR;eRi23Ale,on,y;!au,lRt;iRot;e4n;ke,re;d143tr4NT;a3el104;eRl4K6oA;!au,tDz;llRsK;a7e,on;e2IWi0;n,r,tD;eRl3;li2rD;a,hSil4RPoRs2DGt2FCu4EA;loOn2M0t;!er,i0;!a01by,co00eWh4E1iVl0on,qu3sRt2v4QT;aTeSiRo,y;!er,gn4BMt0;!gaQl9t;no,u;e3R3k,to;au,bTcra4W5e,ll,nRs;bRth4XU;a4TWe2C6;er4UVu4DI;ni,vi4TU;do,lGmoQti;ay,e0RDi0;er4KRpe;f,k,me,n6sStR;!e,s4A6;!eveN;aVcTdSey,iRni,s1;ng8;aEe4MOo22Yy;er4KEheR;se,t4HB;l4VAyC;aTbSeRion430one4S0p4urJ;r4O4us;a4TFion4H7ur4FL;gnol4PGnRrd;e0IGiSko,oR;!ff,us4QW;!uk;a7et4FJfeLin,koUlRs4AY;eSiR;!nL;ri,tt,v4HW;!s4AU;as,o;n4JYre5;m2n,rR;ba4T2er;a4UPerRge4IVi0l3QHn1on,u0;is,s4VIy;!a4CMdQ8lRsn0uM;an4VCl;c4DdVeSge4JEh4I6i4APl6riR;gue4P8q4V5;!gh38YrR;iRmoQ;g4V2quG;e,iI;an,beFhSkRlof4J5o,quGr4JL;!e4WLlaQr6;!a7eRfo7i4W4on0ET;!bla4PBcousDfor4MCle44Nr48Mst0tRv4HD;e5te;ar00bZeWiSl1WVr5uRy22K;c2S6tH;chTdSe,l3ICnRss1ta4H9;d49Le3G4s4V1ts1;as,e5o4W2;a4DHe5on;nhSrR;ge,ts4UX;eQNim0ym0;!er4A9i4UK;!e,ge;cSdR;!kn3L9;hLk;a1Ab15c0Qd0Ne0Jf0Gg0Eh0Dj2l0Bm0An07o05p03qu00sZtVvRxJzz38B;a2QHeRi3GJraA;!n2Y5rRs,t;aRin,on,s;!galv4Q6t;cSi0o025s1tRz24Z;er,wa4RQ;ey,hRo;!e21Wot;s4E2t0w4SX;eSieR;r,z;l4RGt;au,eFl6ol4UTpeRr8;a,r;pHrd42LuxR;!he40Gtel4FC;aldAeSfr3VIgRk3;!laQroKu9;ar,haF;beFm0sc3U7;ey,lR;!et,y;et,ou9;a3UKby,gi,l0ouRu446;ill4LWl9;fRir1ou;a4V1oR;!n4KDu44K;ber47CdTl,ndSs497uR;!to7x;au,e5o;el,l;dSeRgl6s1MB;!au,no4FEo4TLr;ay,eEle;a03c02e,hWkToStRuc4E4;el4U5i0;sKu;eRm2s1;r,tR;s,tL;aTb2T7eSk3lPoRt0;tDux,z;c483li2ZCrt;n,rdSuR;d,me;e5s4TFv4FM;i4LKk4OE;rRz;d,ry;aUbGeSoR;de5ut;i4GLlli5rR;dy,v4FF;!rd,ut;ch,h;ain29MeToSyR;as1mG;!adGdeL;au2B6el;a1Db1Bc19d15e14ff,g0Yh0Xi0Qj0Pkl4HVl4S7m0Mn09p07q2DFs01t00uZvWySzR;ab401etD;!es,nR;aSi0oR;!ldL;er48Al29Dr4JBud;aCeSiRn3DFol;e,ll;ll,r469;laQmo4ND;a4MYhi0ti4RM;b4N4cUle4B2ne3P0sTtR;er,h0oRre2UA;!uB;eguPl0;hRia,oe;e,ke;aRe2OOoc4S8p47UtuC;c,l4OK;a01co1KJdle4TVe00fr3D2ka3WXnXoVsUtTu1AKvSy,zR;et4DRi,o436;eEoi4O8;i0o8Rsc1TC;h4BNo3DJ;!ir,n,uRy0;a7er,f,s,x;eSiR;c25Ce;!re5;au,decotr9ur,y;ld,rdJudRy;e41Nin;eSiRme4G4o2S1pHs38I;!gi,l3FE;n2XTte;an3eanC;cheWdVff2TPh0l41SmTnhSs4CStR;be4QRm42J;aFol01D;er,nRshn1C8;e45Ci45C;li4QRy;!n2BU;auNbe4QLel,liM;aVeUiTnRo,uin4IH;a1J0e4iR;er,us;mba416st4;as,nt,re5;lbu4S2m6n,udP;bs,d3D6k,ls,s,veL;bu405dTekSfo7ik0mR;an,oQ;er,o4NR;en,iIon,y;!he,io,oRte4D4;ll9re,u4OV;an24Ie0BWiRo4SI;f4FBll5;dRg2liMndo448rd1um4D0y;e,iMm2;b1Kc1Ed19f18g16h14i11j10k0Zl0Ym0Qn0Ko,p0Fqu0Ern,s0Bt04u02vWwlUyRz0UA;!le,moSnRta;es281ol27R;!d,ne5r;ey,inR;g,s;aVenTiR;e,oRt4S5;lat4CEn;el,hR;iEor4P3;cl6ry;ch,q4QRshRt4M0;!aw;cWe3X5hViUli4NMtR;ai,eRh4HRl6;lRw,y;a4NCle;a,er,g2;!weE;lif4EO;cSi4PFlaviciuDmu2CMom,qu3ECsRto313;!aFn6;al4RMoO;ep4MOi0;aUczy3Resar4KEhae4PXiToSpRs1ut;!ar4HSin,l;s38Tza;dD0er,n;g4P7t136;al4QYcUdTell150g46Sk3nSsRta;h0l49Qo3ZH;ey,ou;!eEh13Ole3M7on;in,oR;n,uF;aXbWeVhar3Z1iTkhelaw1mel3P8oSp3sR;deEey,on;l33EnGs;eRr4LT;r,ux;au,r,sa,zLZ;au4GLeF;c2EJge,nausk0WIut;l4Q4st1;e3J3oc3O4;an,ot359;a,c4PPdl,l,mSnRs3z4KX;bo4OHey,gu404i0s26Rv4C7;b4HUoQ;aRemtul4P4ir,v4QK;l,m2rola4OF;aRe4FVl8Wot,ue3T5;in,n,u40H;ay,f379ou,t464uK;aUc49AeSfo7iRoms44Zu3XKyk;!g0ss1;au,rRta;!m151;choH4k4EZ;co,e49LhViUkSlRo2NK;etDos;e4QZm2oR;r,ws4KN;c4L8ne;!a45Cels4PJieB;aTby,eSiRle5oMHu4E0y;de5e;au,r,zanaha4NY;dy,ni0;a0Ee05iSoR;quoc4BHy;beEd1G0g02l00mZnUquetRArRtH;ck,iSoR;u3ZEz;auNn,on;!iUl2nTtR;!aRer4CJo,y;l,s;!e4QIhiE;aFo;b3MVp2YM;aQico4DKlRty;an,i4BS;!l6n6;d45Te1AUheilechipy,ir1FNlYmXnVquej2UTrTsRvi3Y3zH;d4MCnRsy,t;el,on;cy,e44Pio41Qo4A6tiRy;er,n3PN;auNe37PnRon;ev4B0v4B0;e1PSiC;l9ue;ckenbu45VdVil,nTshnoItR;reRtro3JX;fa4LUso4HK;e,n,tR;i0z;e,laQ;aA4e75f70h6Ii4Ol41o1Mr0Cs0Btolom4FEuUyR;eSke,lGnR;che1e;!f1KF;a4N4bb8c05dd03e37Bf02g01hl3NCj4HUlZnt,pYrWsUtSw0yR;gib4GApero4PH;elBn4B5tRzi4N9;!hw2;hRka,ti4J8;ee,m2or;ceEdy,enCiRteE;ch,fica49Jnt1;a4OMil4OO;ciOfo7g4OTh4AYkRv0;!k38J;et,h,l02U;a11Yfi4PH;icRy;om48C;ac4KAcRet,h4JP;a4K9i;ai4N5i3BQzcEU;a0Ze0Hi07oXuTyRzyby4N4;dPor,sR;tu1GAun4HN;dh3T3nSssRt0WB;e,i8;eauRi0;!godm4AT;cZg3i490je2kYmh1P8nov0Mph9sXtWuUvRw,zy;encSoR;nc4HCst;al,h0;dRff,lx,t;fo4JAl6m2;a3e5o;ofs42Qs0;ki,op1R1;!acciOe,haz4H9t482;cZdYeXgWho4JIl4NXmUnToSsRtch047veJ;c4JRq4N7;l2WAul;ciMgBse5t390;aRe5i,o;!rd,ve4ML;e4HWna4I2;st3X1ur;ea4OBh4A0mo4;e,ha7;!bi07co06d2e4KFfo41Qge05i3JFj2l04mo1H9nZo,sUtTvR;erRilBo4L7;e5re5t;a,ie4O6;cTe33SseStR;!ay3XYi4K8;!au,c;a4KWoR;d,ttJ;a3LJderIXeUovTtR;iRov4JV;ce,ss;e5o4KW;ne5v2HD;at,l0;an4BAnt;tt,ur4B9;ns4HSsh;di0g0irPt31Wud,y;ar4K6c23d21e20g1Zh1Yi1Rl1Dm12n0Xo0Vp0Tr0Js0Ht0AuWwUyTzR;d36Yer,naR;ns4GD;e3UBnt0;eRl6;ll,rL;cach3Rdr03get02ill01j00lYnd,pVqu3EHrUssTtRz40Z;eRke,re;au,ouatamA;ar4DLe,i46N;n3q26Sr2GXti0v2S8;aRe5inHot;eFrR;d3ZRt;et461iRl3WEos,t1y4HY;n,ot;et,ot;a7ot;!o4LZ;et45Wi0;!aWc4LSeVhUin,oTrStRv3;er,ho4IRle,s;as4NHel;cn3XKms4H3;el,i0;et,l,t;gCrt;f46NgaDs9tR;i4EGleth3MIma,on;a4KCcZeYi3ZQli0rXtSzR;ad3SV;aUeSiRloIne4JDugaAwiC;er,l4M8;!laRo4ENr,t;!n4IY;is,l,nt;e27Ri4N1;au,llJ;her4LMo;adi4J3eRo3PJul4EH;!s3H8;lRre,se;e43Um2;cUd,e4BIis4IZsStRzo;!bri45Rch4BFe2XOikGon2YWus;!aRin9;nt,rt;e49Vin,y;b00eYiXmUnPoz1pR;a,eSiRonn387;lii,ni;!ia4G0rt;eRi0;rRt;!e3UNoB;er,nv47C;rRt;an3YIe5le5oy;eFr4G2;a00eZiWjan3W6ka,lTnic407oSs1tRuk,yz4EFz40B;on,riO;ck,n0F2;arSeRoI;nd0t;d,o;c3X5n,qu3sRtiIzog4B3;enRse4JI;a,ce;!sol4L8;k,nTrSsR;eIki;d,i;co,ek,s4FQ;gn9l9nVrTssStRv4;ev3hi0i0ou,r241;an493et,on2Y1;!e4ESiRot,s1;au3V5er,ot;ce5e5teR;!l,t;le,u;n4G3s1;!llh1UBte,ymir4LB;estRl21O;o,re;eRke4LO;!t45K;a03eYiWoUuRymaB;ch1mRnket48Qsquell2WQ;b4A8eRm0;re5te5;c0XZme,of,qu3tkinLuR;a7f480r4GL;c1M0n0ATsRtnik4G3;h4DTs1;au,h2iUmTsRtD;hRsA;ek,ke;ar9er;ch,ff0;cZgYisXmond1nVqu3sTtSu4EHxt1yRzzot4KW;fo4FJne;!a,r,tL;hy,sR;!an,e;ch3GFe,tR;et,i43Ys;an5Vt4HK;akAwi3X3;e,i4I0ke2QZ;a1Jc19d18e0Wg0TjaFke,l0Nm0Ln09o3H4p07qu9r05s01tWu4FEvUzR;aSetDzaR;!le,r4HX;nCu;eFinRn3WF;!dr8Y;aUcherTe5m2oSre,tRz;!aw47Rm2s,ui;n,ul;!alB;li0rd;aTh3U7sRz4JX;ar4G0inAoR;n9wotz4EB;ca4DZn;a3HSeRo3W1roCsoulB;!a4K8s,t,y4;eRia,on,p;!rO;a7cZd0eYgXhaWkVnawa4ISoUsStR;a3YVo;in4G9ky,onR;!ne4AV;l,n,te5;h45Pm2n6;r4HFs;ato4l4Nu9;!auNji2l,s,t;hSinR;ce,se;!beIin;coDentRpa4;al,el;aUbr4GOch0et,gr4JXie,k3YJlSoRs1Z9t;is,n,tLI;aRe3JDor4FTy;!rd,t;rs4DNtR;os,re;arouSeRn1ou,u9;au3T4l9on;ic4I5;ch,d01g46Sp00rUsch1SUtRun1SU;e46En456oSrRte,z4FX;acu1ASyz2Q1;n,ws4DF;aVc3G4ie,n6oUrRs1;eSoR;!ciOt43K;je2l1Cpa2SLux;ni,ti;nun4AXrd;sz3QV;!al4HWim55no47F;ge1oC;aYcXhUkSoRq,t1;r1t1J3;eRfo7l,neE;l,n,riMtt;a7eSl0oR;n,ra,t;!l4H7re5t;ioCol4BG;rRs42Iu491;d,i3AI;c3CWn3AHt;a04e01iSl1TMoRyB;!c4DRl3sP;lSnRp3T2rippA;e4DPn6;bWiTliRocteDp;beFon,pR;e,on,p3NWs;as,b4D9e,me5on,pRst3;a1SRpRs;aFe3OZin,on,s,y;riIu3Q1;lRys6;an,iRps;ng0pp4D3;l32Cm,nSrR;aQon,rA;!eRg,s0CTvobonen3MO;kh442uf;aUeSliRun4H6;eg0;ff0ifR;er,f0;ff,hl0;a2Kc2Fd2Ce2Ag29i27je2l1Um1Sn1Gp1Cr0Gs0DtUuTva4HJwadjiwo6OzR;a7eRza;r1t;s,teFvr44B;e06i02on,rUtR;eSiRy;gr31Jni3C7t45H;n1NYrs382;aVell3EBiUoRy4AO;!nSsk484vR;!it4ED;e,z4BU;!e,l4G3mo2IRn;cRin;cRhuI;ioC;ll4CDon,qu451tR;boAcle08OetSgr318je2lRot,p4CO;ouA;!i4BI;l40QrRt3;kRs117;a,in;a4B3cSsR;el6l;e,h0;a0Kb4AMc0Id0He0Gh436i0Bk08liOm07n06o05rZsWtUuRwiI;c3XWgi4B5sStRz494;a,el;ie,se4AK;!hR;!uA;hSiR;l41Ang0;iMouK;aUeTiSoR;nJtDul4F8zU;er,go,n;!auNe,l,t4G3y;s,uNzR;zi4AS;c4FOde5ff,tD;a,et,in,ot;an31Tigi1;eSiRs;ns,o;rs1tt;aUch1e,gTllSnRs;au,et;a7o;ny,o1GY;l,nd,rd,ud;!i4D3s,y,z406;ig2ri5;eRi3L8;c41Fv47H;l4GLrd,zR;el4EUz3RU;iSl0pRy;er,ia4GV;!e,nR;!-berg1EL;!a01dYe01HiXk,m2nUoTroKse4CEtRy;eRlaQon,re;co4DEll;i3N2sw43Ot;!eSiR;n3V5s1;ll,r,y;co3QBga3XQn,ss1;eRle1VRoI;lt1rRxt0;!ga4D6;nt,s3UA;bRontaA;e44Sro1PG;a02boAc00eZiYk6lTne46WoStRu3ZO;on,z0;!is,qu3sKw;!an43GeSiRo4G0s;c3R7g4BWzza4CT;fSgrin1QNr459tRy;ier1GRr9;ig4EL;c2ss2MO;!ck,g4BRponj3POr3tD;a4C7hR;at,er;de5n454t1;ff0llex,rR;ei4C1otD;e4F2gPn1QGorra41Yuy;blGl,rRte42K;!al3KPs;dPeRic,neau44Yo,ro3Z6thoM;m42Un31ErR;s35LzaO;aUcarre4hSkRl9orJq362ry;!a439h416;e,iR;e,na;r3TMu3FJ;bo3FIcUds1k,n,rSse,t,uR;!dem0SY;ce,sRth;aEe,on;hy,oI;ar33b1c2Vd2Sest3N7ffn6g2Ph2Oi2Jk2Hl25m23n1Qo1Pp1Lqu1Ir0Vs0Gt05uYvWwVx,ySzR;!et3ZFzi;a48PeSf0m0ne,otDr45ZsR;an,se;!me48Nr,t,ur;lasz0QGs6;a34VeE3iRlo0QZoC;e,ot;ke4FBlSne,r3s,tRzeJ;ch,o4DB;et,h46SiTmi0oSsRyh;hCLon;!vi4BC;!nR;!g,o;a00chZeYiWno4A8oVrTtRurHz3T1;eRis1on,yn;e,n,rs1s1;a1J3iRon,y;ar49Wce,g2ES;iCla;enRn,s2QB;ce,t;!hvi4BFl3XOnau4A0;!e0ZNin;fPk3XY;c04e03h02l6quYsUtRzt;e3Z1oRu4AX;!rR;el,i469;arTeRilBut;l0AQrRt;ie4EC;d,el4CJ;aSiR;er,no;lRr3PG;!et4DJ;b6ek,l6;k,t4DH;au,he,os,ua;!a0Bc0Ad08e06fi4EEi02kYmWnVo41JrTsStRzyI;!en4AOhe279l4AZo0CVs4AI;er,hl6i,l4AYonLy;!a43Ven37QoRy;t,w;eEi0;eRi0;n2YPr;erShRi4BJm2s;iEur4AT;!labR;onD;l4D5sSzR;e46Wo;eRh,i0XA;!e,l4BS;!kh,ma476ntRro2MXtDz;!e46S;!eRi3NO;!lD7n;el,ks;be450d1C1sRy4;ch3TUkev44R;ay,eRin;l3re5tR;!/lava410e,te;aSendr1RBiRp48Broc47Dy;cc47All175n3PQ;domanolRl4CKtPy4zi2;akA;l0QPnJ;a02cat2FQd01eZfi4BGgYiWkraVlo,nSqu9se49KtalonRz1;e,o41F;eRit3XEon;au,ll,tR;i0on,ti;c,tz;ch,sR;!en482;aeFm2;s,tR;!t20A;el9iOke;dAgap3F6roO;br3P3pR;al1in;a00c2TRdiMeeKfr6iYlWmToSuR;!ch1d3W9;c44Fmi46Gs;aSiRo1FE;e49Jtes47Q;riOt0;!asRi4C3;!c46K;jt2NYnRot3WT;!s46K;dy,iRn48Nrdy,sK;n,sy;eRik2ka4AL;nh3Y5r;e45XllSnRvo;!c28Fe,t0;aSeRon;!re5ur;rd,t;in,k,ng;aOeSliaRno2VDu3;!ru4AG;au,l,r,s,t3UW;haSoRu4BKyku4AA;is,ka;is3Q8;!au2MGciWe3FAhTiSkRre5;a7wo40K;fi478oret3YD;eSoR;lcz3JMt;!t4BW;!oR;la,ne;!sa105;a2Tb2Jc2Fd26e25f23g20h1Visel1Uk1Pl1Fm1An17o15p14quorm8r0Ns0Ct07uUverTwe4AHzR;anRel6o4BTro4AK;iIne,o;eQmu47D;a00dZeXiVlUnArTtRvFYzil2NS;chiouani485eRh1C4z8;l46My1EC;ipehenemiIs3;im4B6t1;koue45LlRm9n1XRtiL9;emJle47K;badinCGchipichi0IKlRntou8stuoro0KA;!l3N;aFerki36Kin,ry;baRcantGDdi4A3gadoug4BBkipakino4A5ouagCDre5t2H8;nRrt;aQ4oA;aTes,ienkwaronOoolJsRtm2z2VX;en409iniR;ag1;!jawadjiwaR;nokEH;a47Cb00go3ZQhaughness1L9l0or456sel9tSuRwaN;ll0I3nkhirhC;aXerWiUrR;aSoR;!ut,walk0;nd0ut;gRl3G5n;ny,uy;!m2o49R;fic27Msh3GY;o2YIu3IF;a06b2c05d03e02fan0DBh0HCiZlYman3B2oXpWrVsUtSvAweEyR;an,l6;eRon;ga,n42I;a491e3HHiOo3ML;!enm0BDiE;en,h3VR;o1K2s,ur1K2y;ea49Cos3OTy;chefSllRo2SH;at,i1;q47Vs3OQ;e3XFfi46Rg2il3FOste3VQ;e,oR;n451w49J;e5ha7u4AT;ll,m,nt;deka3QCie,or49Sp8r6;i,stR;er494huiz8;chawiaMdSeRio490lina35Jo,ra9sl47Awani34E;il0A8l;ar2AAoy0;aTeSiR;ccio48Hs;a46Kry;it4lRra;by,l15G;aXdersk0STeWiUli0mTnSougJSsR;c133en,on,s1t4AI;ey,ho45P;o,s3OZ;g44TvR;ei46Cie46U;a47FniI;fSiR;zo481;lam45Ws1;eUiSoRre44Wumu467;!no4A5;ll,mR;akD0;e3WLs1;et,le;aSeRle,ma44Dna47Bo461;ar1USir;ll2M4nlSrR;a,e,ra;ey,on;aSd8i363le3LQo3GZrR;a39Oea39O;a7wa;arr310fR;e3GVr2N4;miMsterrei45VttiM;aYd8eXiWjiVoSrRstrc42Jwy0;us3NH;ar450nRwd;!i,neEoR;gh47Zugh47Z;bw3WJck;et,l1;l3nwa3HLsKt;ir,ms,y;aTchione3VFhSonnRte5;el3NVorL;a,ol3JKriM;in,lla13E;aZeXiWl14Pmi2Q5oUrTs1U6uSyR;ma3IUrC;ch1mTs;ea393i8;mRrC;saw3;d3GHs2KJ;an,irCrRso;holz0m2;ma,rs41H;kRs3VA;es,l6s;a2Pd2Oe1Qg1Oh1JHi0Zkye45Jo00twZuSyR;be46Dm2s1MIt41Du46W;bVckBer,gUir3XKl3UZmai2RHnTrSs,tR;brown,e,t0R2;i,se,y;an,e41C;e422u9;er,ouR;rgG;al46O;adGb0Mf0Lg3Q0i0Il0FmiCn0Eon2r08se07t05u00vWwTyR;eRon;l21Ys;aSeElRosie1W0ta3OF;an,es;k,ll;a2EUeSic429oR;s48Mtn6;cRl47L;os3MA;iDl2rSte,viR;ll1on;!cy,ie,rRse,y;iRy;!ce;m2ru3IAsu4tR;aw3V9e;da,w2HF;ay,bu45DcVdUe5f3EVgr8ie3XSmandTqu3GZrAtSum,v48AwR;ay,id,o3WE;h6on;!au,e5in;i0SWo43F;h9u483;a40Gs46G;d,eSiRs;b0KRn;sLt;ls,rSseR;tDux;et,on;fsi45Dl3GM;eSleR;m2sK;c3L0rt;a0OGc07diMe03g01jhuAke46Ul00mYnXoWpissiMqu3GIro,sUtTvRwi2OK;a7eR;ns,rv3SJ;aouigui0EFel9ko3PNschkP;b9en,hiR;ka479mu43N;f,rt;et,te5;ch1NHeRs;ck,ns;eLlo,ss1;en,hRro;!tengaB;dTlSmRs8;ec,i;!liOs2X3;er0iMziels3ZP;a3OFhWkUlToR;dRlet3Z1;!e440;as,etD;eRn0s;lb406rs1;iRolet3L5;lo,p3QA;!uR;ess2y8;a0Nd0Le0Jf0Ig0Fi0Cj1UQl0Bm09n08p06r05s03t02u01vYwTx0ySzR;a3QIol;!laQs341;bTcoSeEhaEmRsh3SB;an,ei461;mbJw8;erRo3EXu43Zy;gh0ry;eSiRry;e42Sns;l3PWns,s,u3SV;fe3ESha3Y8m3I5v3RJ;herc454i0;bi46Nimi3MPle,tR;or,ruI;a451bon,e,on,s396va46A;hRpBt1;ew,in;diIes,qu3;acheIeRirovs3KA;c3C4y,z;li1HVty;dSlRm2s2H4;an,es,l,on,s1y;er3K9;li,rR;eRi;!t0G4;f,osK;b,dRf3XQse;er,h3RK;ao,do,e5ilen3YJjelkRo;ov3M9;gBle,ry;ambu3ZRejuru;b0Wc0Vd0Segel42Df0Rg0LhBi2TAj0Kk0Hll0Gn0Cp0Aqu3r06s03tZuUvSyd3M3zR;a3TXie,za42J;arr3O7eRi1rat3YT;au,l,r3PC;dTgSlRry;le5t;ht1l0;et,lamR;ont01V;ha,iSsi3U3tR;e,re30M;ana43JonR;a43Is;mi42Son,r,sR;e5iR;f,ve41N;b1I8cTdSeRva3ZS;au,th;achieOel43G;isKy;eFiRo43Ep0;chis43Rer;aTdSgreavGiOny,tR;aAel;e3LLy;im0;!ay;aSoR;g3UQta;ji31Gmu419shi31G;da,em;aTeRle,ra,y;nRotD;ga41S;jSnt,sR;e,ua;oa;fi2rech44K;al3T4eRkrynech3ZGon,re5;auRre5;!par1DK;h44Gke;eRki;l42Qs;aEZc9Le7Ai58jol57lynars3IMo10r0Ysadoqu0H7uUyR\xFC24R;c,e3RCke,lSn0rRsk28St36R;!aQe3G8;er,o7;c0Rd0Qe0Ogner3Z0h2i0Nji3XDkangar0VGl09mm3MLn05r01sVtTzR\xF10U0;eRz6;raEt;chRtaF;!mo4;!cVe,g2IWiUsStaRulina3QJ;ikAng,rd;elRiOo2DK;m2y;al,ej0FI;ar3FC;aTchi1OQdoc0QKl6ph6rStR;ha,on,y;ay,eEi3FT;ka1S1t3NH;a2KVc6dTeSg0i40FkHnRoz,ro,s6tea3D5;!in2B5o40E;co,s;en,vi245;ai4ca03d01e00hYi0ke3BClToSron6vR;an3YMe3KWi3KW;in,t,u3;aTeSiRoA;g2nL;aC8n,r,tt;h6n6rRv6;d,ey,k1DP;aEer1Y3olR;aQlaQ;!a33QyC;erRo1;!ic;h1DJir,s3HM;!r,se;ll0nR;i3ZVzen2IQ;dBry;cShRkB;e160mo4;h3NIi2ZC;az,oR;ch398t398;a3Wb3Vc3Td40Pe3Sff3S5g3Rh3Pi3Nk3Ml3Gm3Dn1Po1Mq1Jr0Ks0Et0AuUwTxh3OXyRzaF;a7e2QPl0DBnRse;at,et,ih2;at3QLic3X5ry;c9d3O6e05fl9ge3XQha40Fill04l02nZrWsTtRvi0z3Y2;oRrP;n,u;!avi,ne3JKsRt3;arzHeRi1O4;au,t3LOu;a3WHeSiRouze5s3;ck,er;je5tDy,z;i0s6tR;!aRbatt8fo7;in,kA;a3ZZbe5in,tRun;on,z;a7e1ULier3RN;l3NRt;aTeSha7in,tR;!asl3ZGe3Q3us;nbo350re;!rd,y;cVeUh0i3Z0kal3IXl6sR;!arSeRi1E2;au,r,tDy;abBd;l1CHr;a41Rio,ovA;a0Jbe3T7c0Id0He0Cg08i03jI0l1m9nYoXpaWrSse,tRv1LI;ense2WDloIon;a3W1iSoR;gh,ni,w;ce,e3IVll,ng,sR;!ey,s1CA;in,w;!ne,ra,t;ay,eSiR;!ak,er;auRt,x;!tardR;if;ar3ODc,eLFg40Dll40ZnTssR;eRon0RBse5;au,t,y;!eRv3N3;!au,z;anTeRue;nRse;ste39Btal0;!tiO;au,i3Y4lSnRst,t3M0y;cy,o,z;!aSlR;e,i,o;nd,t3U0;a3V6e5;el,om;!bi40XcViUlTnSrd,sKuNzR;a3zi;d3JDge,o,v3MO;!es;ll1s;e,he,y;t41TuR;etDiR;ll1n;d,n6rStRy,za;oo,z;c3FUe,he41Os;a1Bb1Fc1Ad15e14fi3NXg10i0Zjo0Yk0Xm0Un0To0Sp0Qr0Ps0OtSvRzer3F9;iHois3;a0Gb0Ec0De05f04g02i00lZmWo40IpUrRsi1v3MCz;eSoR;usKy;au,t,u3U9;as,eRl0L;lNEt3P7z3PZ;aRi3VToren2QT;rRye3LK;gu3A1qu9;e,oI;!g3VPl3Z1mi3VPni,on,zR;am360;oRra3;me3YA;er25Ji3NHleu3Y9ort3ZR;fXiVlUmiTnSrrosoli2XBsR;!a3UG;a3X6be5u;gl3UN;!e1;lRro,th;!h9;err1C2orD;a2IRouF;le5rR;iaQousso3SCun;bVgSl1mb3RAna3MRrRub2;r3VEy;a3U4nRue;aRe,on;c,isJ;auNeFoC;!al3TEc3YXeiT2;en2Q2ou3Q8;el3K9lR;ais3OG;gh2tu3AO;an6i2KY;a0CeRi3UX;a,lRsn3T9;li2;!a,m2s;ly,ueD;e19Fgou3G3h2n,q3RDsKz;eRin,le,ne,ra3;aSnRon,r;aAe5;nt,u;rt,s2KOt3IKy;aUeSiRoVPy;ck,n3HNon,sk;a3ZSlRrP;et,l3S9;!in,t;a3UOha3FLi0RMz37C;co,gh2h2k3PGrq3YDstRt;!eR;!sK;bRe2KUy;le5ouR;rqu38L;!a3WPby,dov2e2B1gViSlRo3UAs1t,w3MS;!eG2i3Y4o2KQ;nRra,usG;!a0O6eRic3SC;l3XMt;at,o3VP;ni,re0NW;nRs36JtP;a7e5sonn3L9;aRr;mm3W1n;an,g,l3YG;ck3XElBnLrm2u3M3;h1kR;eEle3GE;er346lo;kl6l3XAn;ne2U7;a1Rc1Id1Ge1Dg16h15k13l0Qm0On0Do0Bquel3XYr05sYtRus,v3K5ze3VC;chel25WeUko,rStR;le2E9on;essJoR;n,v3FCw;au,ouamR;igR;ou05V;cWerVhUiuTl3M2sStRu3V4;as2LLr3F7;ia3SFon,ut3QW;k,rs3SP;io,ou;a3TFe4icord3XW;h3YHiosc3XV;aTeSij2Q7j2Q7mo3S4onR;!c1V7d37M;!auN;bSmbe5ndR;adac1W0e38C;el3XPin;r,tR;!t3GX;a00chi0J6dn1eZgWiUja3SDkTnSoRs6ty,v3JI;!po3WKs,t3YA;eMYon;e,l0;!a3S9ch2PVer,gRnO;o237ut3PW;aSne2TDo140uR;e3LMs,y;ce,nt,uN;au37Oh2r,tD;co3UXdi3WBrd;aReaNms;nd4ux;a01b00deZe1U0h326iYj31Ok192lTmo4ne3FAoR;nUQrd,tR;!e,te;!aUeThol27GiSmo4oRr2BLs;ir,n,tD;a7er,g2k8n33Lot,qu9;n,t3LA;i4r3N6;!ar,ken39KsK;beu4n2D2;ou357ran3WKu357;i4nRrd;ge,i;aRlAulA;!e1SUlin3SK;ai28Yhail3VZ;a3F0eWnRo3XKr9u19P;aTeRi0o2Y5;au372rR;!aQet,on;cRrd,ut;!ca;l,n1on;cieli3QClSrRs8;t1G1zge2EG;e0JSke;dRki3SW;elmi2SFl3RA;hSkHl9m37BoR;l3SUn3TD;aTeRie,na,on;au,lRn0;an3SJet,i2R4l,o3GYs;eTlSm,uR;d1J8v3I7x;ik,s3R1uk;i323ls2N2;dai3TBsnik02A;a1Wc1Sd1Pe1Mg1Lh1Ji1Hj3W7ko2SYl17m15n0Xph3INr0Gs07tXuVv3I3wi3X9yTzR;eRie4ou,vi0SQ;i,r3K6;!er,nR;er,i21M;l1I9ni0rRse;et,in,s,y;aYcalfJe3JOhWiVot,rTs3P3tSzR;!alabanle3U5l0;ay,he,le2SP;aRoz,u;ilBs;l31Pv26G;eRl0ot,v8;!e,ny;ilBkabRl1ZRy3AR;we;an3SLgouigui2QIiIki8l3n2FKp27XsTtRu4zar3OT;as,o3H0rR;an,e5;!aUeSiRut;!erJn3E7;ly,rR;!vi0;gRn3H7ou3TL;er,ui0;a05c01di210e00iYjacXkWlUmoi34MoTp3EFrRy,z;etDiRym2;l,t3JM;!ukiouetamAJz;et,oR;i,t;el,le;quG;auNc,dPenCgd8nRv3V9z3NO;!e5uk;co1HIna,t3EN;!aTerSiRkh,o08Hu4;er,l3EZ;!e5on;di0n3G2;li386nRt,ud,y;!de,g0;aXdVeUg0RBiTnSoc3UDra3T6tRut,zi2LD;er,ha,on;es1ie;c094e2J6ng0;au,c3FNss,t3JUu;ay,e3OEh3HBoRresho3RY;la,za;ci0ge3CUn2PArd3MO;bRet3JQ;ra7;aYchi1SZdr3KCeXfi,gGhaFiWlTn0oRt1v3GMz0;cUXnRt;g,i;!a26LiSmiCoR;!r,ws,y;er,lo,sh;er,n,ot,s,ta;!dy;dy,nRv8ys;c1s1;di3T0er,gs,lRn3S4st0;ke,le3FQ;aRou3Q3ta;f3UXn;a,his0PHin,l3q1EFre;h2ks,rRse;sRt;!s3OD;a7eir3NBiSl0ovR;a2ABi3RE;eu,na;c3FYhRr37Pte5;e,iR;n,pouR;eo34U;dTgh0h2l6rSsRut;a32Por;!ce,es,s;!e,oR;rs,ws;.douCPa4Ub4Pc3Jd39e30f2Ug23h1Zi1Sk19l12m0Qn0Ip0Dqu07r04s02tYvUwR;ay,hiSiR;de,lliamLnn6;nnPrt0;eTiR;cRttP;ar,kP;i3D2y;aTeSiRomn6;ern2g3T3;ar,er,rn2;ggaFvi3AF;hRkimmiMween31H;a2S2er3RQ;a2QZea2UEit1HFoR;bRrPy;bPeF;aUeTiRo31;lRnn;an,k3l1D8;e3OVst8;de,id,rR;rPt399;aTe31NhR;a3N4eB7ilR;ip348li348;rRt3MX;laQt23F;aWeUiSoRul3G7;ld,wn;cRd0;ho3GGoE;al,iRletc3SD;ce,l38H;b,ir,ll1G9mRug22Py;a3Q0ee;aYeek3iWoTuR;llRrr3GW;e2H3in;nSrR;iCr32D;igB;llRtc0RQ;an,en,i1;h30NnSrtRst0;hy,in;!aRh3MQim2us;m1ra;aUeSi39EoRu4;ed,ug2X;aRi39Cll3CImo4nn2od;n,ry;ch3inJrSuRw;c2H3ghl23U;en,n1;a08e00iTn2IJoSr3BButRy;ch8;ne,y;bb3eWllUm1ZYnRr2T6sso0E4v0;ley/mckeSnR;e2F0on;nl6;iRop;c2p;!rn2;aXe350lVnUoTrcRty;hRk0;ar,er;gh,nJwn;!d3Q6n12Rs6ty,v8;l3S9vR;ey,ie;chPge;i39Ple,niIy;lWnSsRv0;a32Ner;aEd3EMeTn058tR;ee,i4oRy4;mn6sh;ly,rn6;larg6moyBw3LF;aSeRu3B0;e,n3PT;le,rR;dy,g;a0De0Ci04l02oYrVuR;ck3iSlR;flPph3;g2nRre;!ne2NC;aSeR;e0Mg3BM;dy,il,th,wn;ld3L2nTog2uSve2ZJwR;an,en,n;gh,n;agBeg3SCig3SCnig3SC;ash2oRy3MM;ne,ry;bb1lSnn1OQrr,vR;e2ZCn6;lSvrR;ay,ey;!eTiRve3P8;cudRs,vr3F1;dy,y;s,v6;a3P4eGBo3O4tt3KO;ffig2lTnn,rrR;!iRy;gBty;e,li18U;aSerR;laQn;dd8gh2ll,rRul;lRq12L;anRiM;d,e;achYlTnSrRv251w1AH;n,vaB;r3DEv8;en6gu3LYhTligo3RLrRva3OQ;eaRoy;vy;aRer2;lt1ny;er2Z3r2;aYeWoRu3MQ;nTugalSwR;aEeE;!d,l;a2ZEnRou39M;eEou39L;armo3R9rmRvi3R9;id,ot3ED;niHvR;id;a0Jhal20Dl08oZrWuR;a3G9e,llSmb0n2ISr1G7sk2BAtchR;e1on;ey,oR;ck,uR;ch,gh;aSeaRim1o3O4ystP;dy,ry,th;ck8e,nk,ry,w,y;lXmWnUol,rRuFw19Py;by,d,is3B7kiEl6mR;aRiI;ck,rI;e,nRv3BM;a1DMeE;b,e5;lRm2;!am,ou38Zum;aYeViUoTuRy2Q2;re,skR;ey,i;sk10Aud,we3NP;chJntoIsh;aSd1ll39GmRod;a3OTe3JP;f,n;naSsk3ugRy;hl3;ch2;an,beJdd8ff01h00i374lXmWnVrTskiEuRw;ghRl2X6sl3;an,r17G;ey,go,rRt2MXvi1AQ;a3JKeEiIo1ZHy;!dle2L2n;br3B1l6;h3EPlR;!iR;on,st0;an,e3N7;erRr6;ty,y;a3eTrRurn6;ear3BZiR;de,en;aRou387th;n,th;dZlXnWrVsUtee36TuSvR;en3O7oy;ch3lR;ey,if3CA;kiEs1RX;dHth39Y;al2UGdrewLee3K5g3H7;eRli3OS;ar,er,n6;am,dam;!a7Kb7Jc6Dd65e64ff3JFg5Sh5Li5Bj58k55l4Dm4Cn3Eo3Dp3Cqu9r1Ls16t0Ku08v07wn,x06y02zR;eZia3KNoXraaOuUzR;aSeRoc3A9;o,rP1;!n3MRreK;rRz2;!eR;au,k,t37R;cRu0;hi,ie;l3N3rR;e2XDolB;diEeShRke3GDn1DYo2YSraQsh374v3A2;ew,ue;nRrLt37K;ce,o382;f2VRimJ;es,i3EOor,r3G2;c01d00fYgUn18Np3JPrSsRvi3K6;e,si1;a3KVeRi37Vo1Z1;!lJr;a7eThSis,rRue;as,ot;am,m0;n9r,t;etDiR;ls,n;e4ou;ai4e3LAie3LAla3CO;a0Bc09e08h04i02o01sZtSurRz34S;a,o,y;aWeVhTiRo2WBs1;cRi,s1;e,ks;eRon,ys;!rs,ws;!au,l,nc37Kws;r3DKs,wasUR;en,on,uR;mo3NHo;n,ot,s,u;f3D0gn1nRv3D0;i0s1;a,eTis1oSs,uRy;r3s1;n37Gt;rs,s1ws;jc34Dr2K9;hRlo349;e3O6iouagkiou3CS;gCmekw2nakin2raz3FDs3IV;adacn3G5c03e2CXi,k02lan3GIsWtRu3C0yn2ZO;a,erUiCon,rR;anSia3HGoRu3LU;gi1NSi1NTvi3N2;dr30IgH;j0VLs3MM;aVeSiRo37Hue;a,cot,eJHl1n092ot;!lSrR;ma3I8on;!e5in;i1NRl,r3DMy0;ale3M8egoC;iRla3NGo3MU;ot3NDt36B;!a1FbBc0Xd0Ve0Sg0Oi0Fk0Cl0Am08n6o06que05r03sXtTuRveEw09Mx2ZSzi0;ca,lRm;an3IBlo;bBeTiRol3H9ta3LFy2UX;al,cot21Fmbe22XnR;be5e2VOho,i,o,pel1WSs3M7;au,l31Zn,r,s;aVchin1TSd8eUhTiSm2oRt2D9;l9n,t,uiC;co,le;!all1DT;au,ilBreau,t;c,n;!a2X7eLin,oR;ll3HMt3MC;s,t,z;b3B3is,nRrt,tDv1YEws3GY;ey,taB;auDeRotD;au,n,t35K;eRiMow;au,r,y;e2JIl6oSs,us1wR;eEiI;p3F1v336;aYcic361eWgVll2WSnToRss3N2;nRt36W;el,nel;ac35YeRg,i0koYAo3I8;au,l3KT;ny,o2UY;n,rR;!oK;ge,no,uch5;aCeli32JoTuerR;a3MQiR;e,t3BB;leKnC;cSnRsJttJ;g0t2VD;!h3MN;eRi3K2;g2ll;a07e05hWiVl39HoSuR;cci3DAr3IT;glSll39Fn3IStDuR;i1MDx;ieK;ch1QDer,l355n1SN;aYeTiSs2XCuR;k,s;!ld1o3ITt3LB;!r3sTtR;!eR;au,r4;!i,sR;auNe3CN;is,l,nd;lRno,re5t;aAl33B;di0n1BMureB;gh,is,nRs,ud;dYXg0o,za3FD;lGp;!uensao2VN;a0Nc0Jd0Ge0Efe,g0Di08j07k06l6n02o01sWtTuSwarr8zR;!a3F9erLFo;by,ri;eSha,iRo2XA;ni,on;ll,n9;eUf2SDiSourR;!i2;!on,skR;oueo3K1;!au,ll;r,ve2QD;aEerRBiRu34L;e,gh2nRon;gRo;!ha2T4;ivHs;e5i;b3LGc2NHgaUs0N4tR;ouRta;aRko3JQ;kiS2;n,uN;an0VNin,ui2;e2Q0g4rR;!a,s;a34PeRi3EKlek3HSr2XOzi318;lRrs,v35Z;!et,ko;eThSin3DAoRus18W;!tH;a3E9on;au,bo,l39O;hi,ig4;aOe285mad3J1;!a0Eb0Cchel0Bdem2FOe09f36Lgu08h07i03ko,lXmWoUpaFrTtSzR;ac,oC;aAeK;a3ic;is,n6sKtt,uR;f,in;as,s0YA;aVeTiSoR;!n,t,y,z3C2;er,ns1;au,n,rLtRy;!er4t;is,nd3rd;d33RgTnSsRz3JI;h,s1;!e,gPo32H;a,u34E;erbeLi3ERot3GH;er9;au,dy,n2ODpRstro388t3JFy,za;ar3A6;osK;e3GIoR;euf,uf;bor3EZiTkSnc1GLrRt24Lv1XMy;d,t4;et,os;re,s1;aRi0Q8l0o324sa;n3ESrRtwiniO;a2TJi3C4;ch0da0XBeSoR;c3CBre;au,r,ur;c3IAd3D6e36LgZllXnWoraVr,sStRzi1Q7;ay,r3BF;!ch,onR;nRv34Q;at,eu3CN;ma,no;d25Cel3HMfr9g3AVonCv34N;ar39Le36XoRy;t,ux;a,r9;aVeUjouTl38UoRur3y9;nRod;!e38By;bi;!au,r,u;f3J2ir,ne,rR;!as;a00e0ABgYiXl1HBnUoTr3E5uRwo37P;ahw3ETeRi4y;!t,ur;n,on,sKya;aSeRi0o,y;!ss1;!c,n36Hrd;ll,n,s;iRs;ni,o;in,s,uR;lt,rn;da,lk,rte3HI;dWeVgUiTo0AHrRs8u0S6;aRy;c,n,s;c,g2s1;e3J1in;i3F1r2FF;e8oRry;c0UNn,x;a0Tbe3G1c0Pd0Le0Ifa0Gg0Eh0Bi08k01lZmXnWoVpheUquarrPrRswe8tavi2YP;a27ReSoR;b2L5usK;!a08Z;e,rs1;mb0n;ama3ESes,id0;aRi0FRuOB;h8st0;augl3eRin,o3F6;an,nn2od;aWeViTnR;aDeR;ss,y;eRll3A4ngn6;!w3H7;ig2lm2n34Iy;na31Dro39Zy;!nRsa2S7v0;nAtR;o2Y5y4;aSeRi3AQo30Bu3B0;goCt;beJdo,n,rd;ilRrav6;li0Z7vr357;dRrlaC;d8en;!aSlRro3FYv1VIw8y;aAm2;ch8rche2P9;oSuR;ff,nn;n30AuR;gaE;aThSiRosh33Cua373;as,ni;esn6ia;ll36FroC;ilBjo3HJlSme5rt,uR;d,l6;em,piC;e,ilBrian37K;lo3DXs;.tou1DAa96e3Vh3Pi2Rjung1JTlore3G1o0OuVyR;!de2YNg3DRmTnSonRs26StB;!naAs;ch,d,e2CHg,h330o3HM;an,burn0;!b0Ic0Cd0Be0Ag09i,j2k08l07m05n01o00pi8r2HGsWtUvisot3GLxTzR;iRzo;nc2UQ;!fo7;a3ERes,fy,ge3FShRi,z;ar3FYi0;iSk,sR;!ac,e5i0on;er,gnanRne5;!i,t;!ma3F3;!a2OWdSeRg320n;au,ge3AG;!erRy;s,v320;bRi2J1sd8;eFsd8;l,o3CE;a3D7em2in;a3FDon,u8;b2ZXsch3DM;fo7ri19T;aVcTeSh2OAiRkenuIos,sansz2UR;enCw;!ro,y;he3ERiR;o3ENsa3A8;!isK;be33Eke,ra3A6;b1Rc1Md1Le1Jfgr8g1Ih1Hi1Ej2QAk1Dl30Gm1Bn14o13p10qu9r0Ms0Jt0Hu04vZwVyTzR;!eRo2S7;au,lBns3AE;eRsH;l3FQr;d8eSlGrRth0;ey1N7y;nRrys1s;be3DXg0;eRgr8;j1TUlRr31Ctt;aSeRl;ss,tt;dy,nd;b02d1et2YRg00iWkEYpVren3B9sUtTvR;!aFe1XUiRoA;a3G0on;ho34Hre,s3CF;c3EKta2I5;e,r9;n,sR;eSm9seR;!i3AK;i3AJlB;ee,hR;er323he3CKl3r8;eR9i0out3;bin35Fhs,i0m2orCtRz;i1YIr30U;chia3AJhSi0li0sRts1R0;a2Z7on;aw,uk;a02dkipanid3AAeZgYiWmand330qu9rTtRus2Z5;a,iR;e,t3BY;aSeRi1;!n352tD;in,ng0;aRe5mi0on;t,uN;e,ue3E;!au,in,nRt;c2ROg0t2UPzR;!a3CViO;nRzo;ge2WHt;e37YpRres2ZE;e,iR;e,n39Q;!by,d,f,mAn,tm2;cKRdo2QUeWgRmo,sw32C;a3AYbUchaTdaBeSie,mo4o,p4sho4t3ueRv3FE;ep34Sp34Ssp34Sv305;!u329w329;mpLp;ott2HB;derg2rg2y;an,baRet3E7me,p4;!rd0PJ;e,ie2R6;gn1ne5sRze5;!eRy;au,lB;andGren2R2;an,hr2ie,oc38Oue;ffl0hm2v8wenR;!th3EZ;er,rio2Y3;asUey,h9kR;e299hSqueEwR;eEo330;aFe3EV;!t30Q;b,inoR;is,wi3AU;!a0Nb0Jc0He0Fg0Eh3E8l0Bm09n02o17Kp00rZsYtUu,vRx6z39M;ernoSinR;e1TOg0OK;c3CWis;aliTch36LowStleRw3;cr3B5f2L6mo4r;sk34D;a37Ven;ec385loAse,te0KH;etDl1CO;a3AXm2peR;!au,ns;arGcWdTen1TCgSks,n,sRt07U;e2Q6l6;enfe31Zl9;au,be3BNeSfo30Vho1W5le32Xo,sR;l6tr2GB;!ck0m2n,rm2;e02Ah,ouF;!a,be,m0oR;gGn,us3;es,lRoA;e,iRym2;o3E1s;htbo2DUn2AFoDH;bRge,m1SZna7rc2R7to,uv3ve3CB;eFr0RL;htRie3DMk0;en1G0y;erSoRre;ir1tD;aRdy,ge,s2tJ;le,to4;rd,sKud9;arr32IeTirond1Z9oSuilR;i0li0;m39Dpit3DQst355;rRu36R;auNbi0e14BmiR;ne,te;a4Wb4Ec3Yd3Te3Sf3Hg31h2Wi2Qj2Pl2Km21n1Qo1Op1Aqu1GAr14s0Ft04u02vUwTyR;!boRro1E6;urC;!ando2VGic376;aWeUiTrRyL;a7eRon,y;au2MNr;!c2Z1ne,s,t4;auNilBly,nshul391rRsq2UMy,zu;!d1P5ri0s,t;c2XAdo3CZig0CXll32RnRq3BOs48;gPi0;pr0QVrR;at,o2C4s,y;aYeWhie1RZk368oTrStRu3D8w376;!e2ZRo4re;en,ot3W;cq,nd3D5uR;ne5rneRsKze;au,u1Z2;au,l2WPmp2WPnd4sRtu;si0tu;in,ll1O3ng,rR;dRt1B9;!if;a0Dc07di06e02he,ie01lPna00oZpXqu30SsUtSuRzc1TI;e2X3ir;aRe,ringa361;ge,ng;ar32KeSie2X0oR;niOr,u7;rt,y;a2QCeR;r2PYs;t,u7;k,y;ge,ur;el0XOiSl0XOneR;ch3CKr2MA;gRze;le,ne2WP;de2WOll0;aUel0XJoR;mSp,rCt,uR;arn1NHren30Y;!bJ;bi9d2TOno,rRt4;!be1RLd4;ff4ge,i35Grd,uR;l3A8te2WGx;a1VTe38Uhe,iUn1GNoR;!s2PSuRy0;ge,x,zR;es,ic;cRg0;he,o1B4;a02e01iZoWpVrSt2M6uR;il,t;eSiRoh1;e2W6n37S;!st4ux,vo38K;e,in8;ch35HitSre,uR;p9trH;i0tev3;cRle2W0nJp36Ere,s1N4t4;i0q;au,lBrJsa34Xt2ZJ;g295iRn,pe,rc,u2M9;l0WSn;!dHnR;e,g1I7h25ZtiC;arduz32Xc00dZeYfXgWin,nUoTsStRw2YJz;!oc33Tz;eigCy;ble2YMir,r2MUuvH;!ev2WAoR;n,x;!h2;a34Les2XE;d18Xn,uf,v1FTy;a,en,r2ZV;h,l32T;a04b03eZiXmWoSp,riKuRza37E;re,s1NB;iSnRth30Ou0WCy8;dJe,i0ni0tre0;!gn2nR;e,g;el3o;eRre;n,rJux;d1M5il0W5l3nTqu3rSsRud1M5vH;le,u2YV;ci0di,e2PEiKle,re,y;ne,s,t1M2u;e39Ho;!ge,iUle,nTrSsRu4y;s1t0;b4ch2DKi0qu2Q5;!qu9;re,t4;aTiSoR;c390ng,tDup;be5ev4;boure2UWi2EVnRr36G;!daA;ambBeuCo2UUu36E;bHnUsTtR;hRo2IM;!am;chn0hm2;enwRst0;eb0;ap29Beu2WJm2LUnUouTtSuR;gu9;o,u385;il2U0x;!e2R9i;a03e01g,na7oZrTuR;ay,eRilBy38V;da7r2Y3s1UP;aUeTis,oR;s,uRve,w;lx,x;sl6w;in,ndRs;!e2UA;ff,ix,uRvy;be,es,f2WI;n14UrR;!e,ri0;!g09JlSn1UErRs34MuNy;de2U4e,s;aAet,l;aZeYiliat4lVoTrRurgy;ancRoA;!oA;ll2PVrt,uR;lgCEr37Q;agSoR;ch,t;aAuaA;bv4r1KQtt6v4;b4e,i32CnRvo2TT;coA;ch,r,s;aUdTeSfo7ge2JYi8o396rRu0S4ya7;an,o2XA;nt,rm2t;en,y;in,nt1KI;a03e0PHh00k2N2lYoSuR;iv4y0;cq,ll8mpDnte2ZYqVrUt,uR;!f2VSpe,rStR;e2IMre,y;!s,toAvoi1KK;!danHre;!ue;a2X1eR;rc;aRelBn0;iCsR;se2T9;che38OmSnRuNva2SO;te2T7;p,us;a07e04i03l00oVrSuR;f2VEis,ys;assSeRis,oIun;t37Gu2G3;e2T1se2T1;e34Yis,n0UMrgCuR;ef,la368rStRvi0;hil2SEte;daAhisRlo374q372;!v;ancSeu,oR;is,nd;!bou36T;de5g32Uh2re;!au2HRck,dFLg36WlSq36WrR;!ge,t;!li0;ilI0n0YTr1s,udaA;ch,d1h0I4m2nd34Xo,p1ZPrUsk,vR;eSiR;ns,tt;ns,r,y;d,mou35En34Sy;a80b79c6Sd6Mf5Zg5Hh5Bi56j53ke,l4Qm44n2Xp2Hqu1SLr1Rs1It12u0Mv03w00xZyYzR;aTca31MeRotDu4;n2R4rRtD;ius,us;rSzzR;a345e345;e,i348oviR;c2K4t347;d9e27Em2ng;al334t1;!eSkamc31MlRt1;er,is,or;rs1tz;a03eYiToRr36Ct1;i25CnR;en,tu4;ct15MelBgUlTm16LnR;!sR;c32Ek32E;a,le;n2CMue2RY;au,c1WHlUnTrR;dRe,gCiDr2X2tu,y;ie4u4;d0e2UQtu4u;iCl;!c35UlTnSrRs,uD;enCie4ny,r2WX;di0oA;!ie4lRtrPy;eRie2OT;!e,tDy;!be2OCgh05n04rVteUvSzR;e2OBi1RTon;erRr2UA;gn2VW;nschlag0r;aXeSiRs8;au2GGds8n,to;l34ZnRys;ceTdSs,tR;!ia;au,e5;!au,lB;in,nR;ce5;ay,dri2XHel,i1RGoA;er,l3r2JG;!a05e02h01i00n0ouYrUtSuR;lip25Tsc2Z6;a1V2erR;gra21Pra31Y;aTeRy;ilBmoRsK;l2W6u2RL;ilBverKy;c350rR;!elBr1S7;er,m0;a2E9o2NR;ndr2M2rR;ga,rR;e2QSie4;c34TilB;aXbleAerr2RUhWka,l6n2BEor315sStR;auDRima31T;aTelSiRon31J;aBseSPt0;in,le;liC;a25Ao25A;blon2VPg34OlBnR;g34Nte;a0Dc0Ad09e07g06i03k02laber1QQm01oVrTsRt2K5ue2B2;en,onR;!ne2QF;ab2VMe5ivRue;ee,ie4;cSe,n317seJuR;c34Dq34G;heSqueR;!bruC;!lR;ie4le;a29Ne;e,inL;chRe35Kg2ou2S0q349vier147;!ard2V9eR;!l2V8;e2DWy;au2F0lBnR;ce,te;el,ie,n0uy;!heR;!r,vR;eq340;bSde,i4mRn31EvPw2SKy;eJie,y;e2JZie;a01eYiXlVoUp3rSuR;ce,z;aRe,i2YXomena30K;de,irPtD;i2I4li319rt2QRst4Yt32K;aRu312;ce,iCnD;a2YPcer2CZer4n;arBlBnSrRy4;c33Kle,r2UO;na,s2UP;iUlTnSrRtrP;ch2YTe;!e,s2UM;i30Zme,us;l0Q8re;a0Vc0Qd0Ge0Ff0Eg01i00kZnWoTslo2ZDtR;agCeRhi0in;igCr2GV;iSnv2PTuRv2PT;e2EIgareCl2ON;sel2UEx;an,eSi,oR;!m,n;gra30Pv1EN;ey,o304tr2UA;au,e2MMg2;!a7d02e00fo7hXiWlTst1t1uRwa2CU;ay,ed7FiR;er,lBraQ;aSey,oisR;!t0ZO;de,is;llJn,s;aRendriGof;mRn;!m0;!li0n,r1vR;e2CJin;au,e5on;ilBo7;uv2P7v2P7;!aZeXgr8iVrRseadHwehr;ay,eTiSoRy;c32Ln;au2DIg2URp9;au,m2v2P2;eRng3s;r,u;au,gh0EMlBrRs,y;m2s;is,u;a337eUiSl2W3oRt2YDup;g25Ep,ur2R6;aRot;!u11U;le2O7y;gh2s,uR;lt,ze;!a08b04e02i00mZoTpRroIus11Gy;!e,hi0iet2PTm2ronRsa,y;!n2TA;nTra1At323uR;c322rR;e33Fie;dSi0tR;agC;!e,in;e31Yi,y;aunIelBraRtP;n2YOuN;nt319rRs2X0;!re,t1;!eTi0OAour1E1rRutA;eRin2UFop2VG;mo2WNtD;r1WTye;chi1AVd11Qgd1OJiUPli2Z8nSrRs2PYx,y;c31NgueriDiCq31Qre,tiC;dRna,q31Pte;aAe;a01enc2C0iYlVoTuR;e,mR;a11Qie4;nRre,u2BX;de,e,ge2K4;emSiRy;er,ga2WB;andJn335;bSmRn;a11Je;erD;nRu;c2BOde,ne;am2LTeunes03im11OoSuR;dPs;ie,ue;b8gnUl6nSr,sd1tRze5;!im8reL;eRgJ;!sKz;el,ie;aUey,iTl328oRue,y;g311uR;ciCd;a,t1;iRr;e,se;a05d8e03i01ne5oXrTueR;!rRux;!ce,ip2RVre;aSeRoi10ue;ca,na2XI;nRve;de2MLge;!rStR;erPh2ZGte;ce,e,geR;!nd2RN;moRnsc2VW;d2RLn2RL;rRsK;be2ZIe;ce,nSr2X7ss6uR;chet2RHg9;ie4n2RG;a0Ae08fo07i06l04oWrR;aTenRica3;aRie4;i1QSye;mbENncR;e,hiK;e,ll6nVrTsKuRy;nMWrRt;c303ee,n14M;a3ce,e2YFge,me,tR;e,uC;dStaR;iCnt;!erP;amRe2LVotD;e,me;a,l2L2tD;l6rd;rRsKt2QXu2MCx;r2QWte;ge,ilBntaisPrgSsan294tDuRve,ye;a2WJt;e,ue;aWVd,eUn0ouce2LMrSuR;e,ke,r0ZY;iRy;e2HKlB;baRrouDt;uc2ZJ;a05e03h00isseNIkZlYoTroR;iRssJu2D8;s,x;ix,mUrCsDte,uR;dr2O2etDliCnt,rRtu4v2QK;!be,cRsR;e,ie4;b2KIm0Z9;etDoc2ZA;ey,m2o,ya7;!aSesR;e,na0ZL;i0QNmb4n2WQp1MEriDu2WK;lBrRsr2NT;ra,t0Z5;ge,illRlami30Fmp,rDsKve;a2VVe;a0Db0Ce09i08oYrSuRye;mba7n,tD;aVeTiSoR;sKusK;an2WHe,s;!cR;he,q2YY;ke,nc2YUsh;issoZmbardJnYrXssWuR;caCll2PWn2MIrRsed2PW;l2PVsR;aSel2PUoR;l2PTn2PT;d2PSud2PS;ee,ie4oT;dJe,gCie,y;ne,te,v2L4;nn2PO;e2H7l185ne;au26Lg2YLlSr2W0sKtR;olB;!lJ;e,iJy;dPie,o,rTst2KXttSuR;!ve;a1U1e;be,ge,re;kk6DnR;st2VZ;a5Ue4Hh4Di33je31l2Smi1B2n2Go10r0EuUwSyR;er,n0ri2ZGte;aRiat165o18V;kerna2OGn;b07c05di2FLecDTga2XMh04janp03k02l00mYnXpWrVsStsRy25Hznets2XW;che2VTh2HO;hRlei2S5n2NOsnHz0W;m2nR;a,er;evi2P7ko2HNth,us;ic,p0AE;cyDkHyk;aRirov2H4;cz2W6r;ba2Z6czyc2T8es2VUic2T8ka,lRy;!m2s1;ac,ovi2S5;aa;lm2n;hRzy1G7;arc2T2er;at,eSiR;k,ns2RP;cz24Yl;a07e02iYoXuTyRzyzS;g0ko1UXs,w28RzR;ano2H6;g0mmIGpTsRtcht8;!e,hRke;en,i1FX;a,ka;ets2V7ft,ok,ss,tz;ck,eTl6m,nbaEstSvanR;ek,ic;e1GAia1GAl,of;b0n112tz2O3;bs,geT2iTmSnz,pRss,u2AZy;c2SJs;er,ppt;n0sRtz;c2X4z;em0ft,mUpo0VDtz02YuSvi2AUwR;c0V3er,i19W;sRtl8;e,kopf;er,ps;at15b12c0Ze0Uh0Tji1UVk0Ol0Jm0Hn0Eon,pec2CGr09s06t04u02vZwVyi5AzR;aSdra2GLic2SBmi1FFubR;!ek;cRk;h2ELz247;aSiR;l,tz;lRt2UL;!cz1HDsk1UG;aRiI;cLk,lRts;!cs1ik;a2U0r2O6tRyoumdAZ;achiw0Rrouvide2SX;al28Fch1sR;ilin2N3os;ar,ciel25Ii1F0kSs20AtR;as,y0J0;a,i,o;bel2SRdUeEia1D6mTnSol2E6pRyt27N;e2VWi;ac2RRer;a2SEen2V1;i2U5yb2;as,do,e,g,iRk3niMope2BSra0KDsoulas,z25B;ditsRg;iotA;ay,bRe2V1i,mH;a,ul;aUeTl0oR;dRgy,sa;enc0U4ziejs2RH;m2n2SF;di2TVr,sz;koUl2oR;rSslRt2UA;idA;i2u1XG;n8rA;l2BHn8r;hUniTppSrRs2R8vo9;n0s8t;e1KOli2UZ;c,g,ng;l0ne;hRiel2RVk,ur232;!enR;bu2VXd2RM;aRe2F5r2RBs,yle1E4;r,yR;as2I0;!hi;a00eYiXoSuR;ds1MXts06L;blUepfHf066pTtSwlR;e1QTs1t1;!h,t;fHh,p;oc;espeIghtLpfeEth,vbbs;bHeRpt,tz0ut;laQske244;pp,twsh8uR;f,ss;aYeWiUoSuRyC;ka,s;bRni2UBos;erdanz,uc2W1;ff2OAj2P5m22FnRsh;e,g2AN;is,j2Q3menRnn1s2S9z0;cs28Xt;a0H5m1V3pp2AKtt,uwe2J9;llRns2TE;er8;a0Zche0Yd0We0Rfoo2GHg2SNjaIl0Km0Hn05o04rUsTtRw2KE;oul0W7tR;el,s,y;ch23Thi2R5l2CJsHtl0;all26PbZcWeVkTl6n2ouaSsRw16T;c2JSte2WI;c,k;bWeRh2HRlaQm2oUwo2KK;!by,y;ef;hSoR;ri2;!gessn0mS7n0;ri2RB;l9piO;c00dZeappBgXke2UHlVnTsRv2GZy1;bu2T9eRh23St1;l1NQy;ai7eRi2T7on;e,l,s1y;ey,oR;ch,u2EA;e2T3sRt0;!b036laQ;er,ra16Y;ar0A1hR;!i2ND;bSen0me2VTpRu2RU;er,t1;aEer,le;bVe,gThaFkeSlRm0p03Br193;am,er,ingCQor2;a2STn6;anRo4;an,n1on;rRu2SZ;e2SOi2QO;di2T1ff0j252lUpu2RKrSsRwi9;!er,ke,li2RN;ceRn2st2RZz11R;au,re5;baIj2y;dRheaF;!er,ie;napanaid1ra;b2UVpeO;aTim,oRu0DF;ngsav2JVuR;ry,z2GM;n,y2JTzo1XA;a0WbHck,e0Tffel0gBhoJi0Skijicak2GYl0Im0Gn0Bo0Ap09rXsWtTuSw,yl2EDzR;ar,ha2MK;ck,n0W1renchGs2R9;chStR;!yB;en,um;ik,sl0;by,d0XGec2N9grec01huIYi00kYlXmel0H8nWoVrUsStRw3;laQs1;h2CTla03YtRulA;e2T8iM;!ig2y;chi2UEn;!an,iI;am,i112;a19KhR;of;g0ng0;ol9;haFpH;gh,haCugh;andFRdUe1UFis1nSoe,se,tRw13R;eEy;!a0H9eRis1;l43s1tt,y;aEl0ol0;b2UIm0XpR;!er,st1t2T2;em8gaZlTnSsR;ch,o;ar2AH;!aVeTiSn0oRy;gg,m;h0n28R;k,rRtt;!ma2OKs257;nd,r;ll3;ff0gh2ke2TZl,rs28Qth;!ch,le2B2nRrn2v8;aRey,s;gh,h2;bBc1QOfe,gWlVnUrStRys;iMs;nRy;!ey,s,y;e2IKy;ey,ty;an,h2;basin14c12d11e10gigconi23Lh0Zi0XjjouOk2LUl0Um0Rn0Mo0Lp0Hr06s03t00uWvanaVwTySzR;l2RVu02T;a2DOb2EMr2LSs;aRinien2TD;lil211mo2SQse;gh,h;fShRki,r;an8;fRh1Z7m2;ma2NXo21N;ch0o,sSt2zenR;be2S3s24I;hi299;a22ZeRs0PZtn0z;k,nR;en22X;aXcWd2O0es,g2KWin2O0kwas2N2liVmmUn27Aout2O0pTrSu2POvR;on8;an,ol;i1A3o22Q;er0;ko1OX;h,ze2B6;dTsSzR;iv2;arki1YCi296tergi2SO;anA;iRl1p,r8us2SP;n,ouapR;noR;ko2RD;pui2MNraD;aUdTg2NKia,kHnSs2MMt2C4yaR;voM;a2OOegiess0;aEeErasho22A;pe,sh,wa2RU;!alanath2inRma2N5ra2RB;aRs2MG;wa28I;aRl2SRm,so,tschmi2R8un2NDy0DJ;n,schRy5C;niI;gBnRr2QYs0;e,o2QE;a2QDl2PHmahkotayo,n,ooK;gi,sl3;eviHjul22Oro3VweE;halu08Bor,zmarR;ek,s2KU;sk2N2;a2Ge1IhaMi1Go0AuR;a08b07c06d05e04h2i02m01nZrWsStRz2;e5r2MZ;sStR;as1e2L5us;au2NYeRi2Q2si0BQ;l3re5;ad,czySiIko2A6nov15KtschyRy;ch2M6sch2M6;k,ns2LU;e5gRk0;!bl2QJcuF;i1ALte;lRn;i8l9;e0OKl;ic0IKon,s1;he285kG;ai1AFi1AFy;i4r2M2;a0Sb0Qc0Pd0Nh0Ii0Gjo,l0Dm0Cn09os8pPr08s06uUv3we2EGyR;aSce,eRnt;l2AKux;l,u2DW;anne2KLbZd2FMeYffr9i1LFng,rUsseTtr2MDvRwH;eRin;l,n2NJt;au1Y1l2LYm9t;dSj1neR;au2L0l,t;aReu2KE;in,naA;nne2ONt29W;aSerR;ge,t;er,rC;ephs8if1X2l3sR;aFe2K8;d24Gge2OPi2on;caSdr1HXes,g8p2PMqRva2R0;ue2NY;i4s;p2PJt2PJ;a2FOe1AXiSlRy;ey,i9;at,boAc245ff,n,ve193;gn9nR;auNt,v2BX;aTnRsn1;dr2NNer,r2CTsRt1;!en,on,ton;he0nR;ne0XKs2JP;oRry;in,n,u3;he065te5;aFeFiRs1;d1n;nRss2QN;es,is2K8nR;eRis2K7;s,tD;gge2P0m2KUnRrea2LC;che26Vx;a0Add2NReroburkh2ff08gu,hannQAlc26Rm06nZoffroPps1rYsUtTuneh1UHweSzR;e28Kio0D8;ll,r,tt;roKte;be2MJm0sR;eSoRup;me,p;!au2M4;dPen,olm1;c022eWi265kUnRoEZ;eSiR;n0X7sL;!ry,ss;en,iR;ns2OV;au,ry,sK;meRus;!ly;or058rRs;iGoy;fco2EOnRrtoQuroQ;!b00chaL3dZe5lYmXneVot,riUtTvR;aiCeR;au2C4nCzi2NA;on,rUC;an,e;au,tR;!ot;arP;egr2HUouA;avel2GUelB;aSeRoe2LY;gl6;ptisDrd;bs,c0Rd0Qe0Nffr2CNg2BGh0Li0Kk0Il0Gm0En07ou8qu05rYsUuTvRwo14Qy2EAzz2OX;eRillo214onH;l2JXry;n1VIr1v3;mTsStrR;ems2J8;el3i2VogC;an20Yer,in;aWbe5ch2M2dVel,ga2AAis1jo29Ple2PGnTouSrRv1POy;et,in,y;ssH;ac,eR;ck,t;at,inL;ch,m2H5;eRi251;n2JJt;a7d25FgWiVki14FnUoTsSvR;e0PZr0RW;en,on,sen;si,t;e18Qi0ot2OQ;er,ts2L7;!el,l;aRba7et,in,me25ZoA;is,re;aRbeFetDin,l2E4ot,te5;d1ux;a2CDuR;bo;c00Jda2J7ll9;ar,nR;!ke;gSniR;cXRs2KV;er,g3;cz17M;cott6in2JAkZm24SoWqRz24P;ma3uR;aTeSiR;er,n,th;!l3m3re5t;rt,t;bSmi2LStR;el,i;!s7Py;liCmi2HSoRubo26D;vi2KI;a1Bbarr1Ac19ff0XKg16h15i2J0k14l11m0Vn0Jo0Ipper0Hr0Es03tZvTwaSzR;a1O5z2GI;nic2GKsk2KW;aUeTic,oR;n,rR;c0KJy;ns,rs7Q;l22LnoRts1XO;u,v;aTel,hSo,zR;oei2AOwei4;en,i0;gisKs;a00bZcaul1eWhUiToSraHsa00FtR;asKival1WPre;i4la,m;ch,do2KFot;am,ikRmaH;awa;li,nSrR;!ho2J3t;haFriM;e25Ki2MV;acs1be5m1SI;al2ISczl,e0WWoRurz1ZLviC;nRqu0E;m2si2IQ;ciHsiH;annoOdi2JFn0NNr2H7;a7c01dZf0KSgUicaEk1ERm2nTo2LXtR;erRreva2IV;li2GV;es,i1IB;!al29SeUh28TlTo2JMrR;am,oR;s26Nuv287;es,is;beFls,rs1;aRi2GT;hl;h,l2onnuL;!amedVbTho2IImSpRseA;a2KZeril2L3;e,uc266;eRle5od8uelt8;auNr;ji2;er,isha2IOliRo2N1;ck,nR;oiK;e2HMweH1;l8m,uell2MH;b2MYe,guSlesi2HJnaR;ce,sz1SJ;ld8;i2H4kem1RM;a,o2KL;cUffol2KKk2GElCXmoni2HNnSquRsenzani28Q;ez,in2MD;nRtk2JB;ici1DZoCuz2E1;oRur2LO;mRno,v1XJ;uc25M;a73e4Ci3Floz2n3Do1Cr1Asu,uYyR;aVde,hUlaTmGnRo1WIppoliDr0M7t26GveF;dm2eR;maQs;ndL;arD;ciRrd2AJ;nt2KO;!a11b0Xc0Ud0Se29Hf0Qg0Khn,je2M1l0Hm0Dn07ot,p06qu16OrYsWtSv17VyRza7;be2KNet,nh,sK;chiSni1TMs1tR;!e06ZiMon;nRs1;gs,s2KU;!er5k23Pla2HZsRt2KT;ey,in,on;aQ6d24WeXfo7iWk1ORlUon,pe5reEst,tRyn;auNeSh,iRuR;biK;au,bi2GG;bRey;eFut;et,k;au,nLt,z;e,peJ;auNgerbuUsTtR;h,iR;ng1IE;ak0;eRhl0;hl0;!bSeLm0phrR;eyLiG;eRl6y;r28RutH;b0WQeSin,lRma2FY;!i2J2;ts1ZC;entobl0gVhUo,r1uR;eRin;!n3tR;!lato25Ote;aFe26Ds1;!i2JP;auNfR;!m2o7;ak,de,eRgi2JMl9on;c1QXn2HA;heSkR;!i2JJle;!r,tD;bTeRin24Bka,l0ouN;!c,l,ny,rR;!de5te5;a7le;ng,rd,uN;ab2JYi1X2yR;cu2IAnch1SB;!a1Qb1Pc1Ld1Gels2J7f1Eg1Ah19kayVFl0Xm0Sn0Po0Mp0Lr0Ds0At09uYvWwSyR;!le,os,t;ar2I0eTiSlRs1PT;aQe2KV;e0RGs1;!llLs;asKeRingt02X;nd8;a00bZck,dYeXgh1HBiatan1k,lVnseEpeFrUsRy;eSm2sRt1;a7e2HTin;!r1WIt;an,ca2FQi2ET;ah2d,eRfoFiEMne;!t,y;!lbe0ZC;a078e;aFr1;rt,tD;a1HAesKotDsy,t1PC;c266kSm0s2J1tR;e0QCin,l0;in0RGo;aXb2EYdWi1mi10CnTsStRvat24B;!emHh,on,y;bu2HNem2f1QWl6;!bSdi2HLe217iRs6uM;d2G0ng;l1NEro12I;ou24Zziej1TO;n,seI;hiMki2IFp1Y0s1wo28A;d,fRgen2IHk1XZlih2p0se,t,v0;fsRsRt;te2CL;an,e,g,oRsi2HH;rRw;e,os2DM;beFeSi0meRsy;l,ry;l6n126rSsRt;!si2EX;e,iIst1;an,b8co1IQd01e00fo7lUmTne1EMos0YYroyd,tRweE;!er,for2IVoRz0;n,rf;!be2H2es;and2BKeViRow26M;er,nRs1ZQ;gSsR;!he2JN;er,she2JMw2GM;n024r22My;!nbreI;er,sw2GJw26F;a2AYn2;an,b3ds1erh2AXgShaFle1V9on,s1ueR;!n9;aRe;rtt,tt;a1ONbae23JfRma2DNste2EE;!ay,m1UP;d0gTiRne2J8s1;au,eR;rnCsC;eRi2HHm2s1;!n,s;hTkR;eRiM;ss1;!ar282u;aFs1;g,re2BT;atRic1FL;uk,y10I;a0Mbb1DVc0Jda0FGe0Ig0Fl04m03nZonde19RpXrVsUtRv1;chRes,l0m2ti2GC;!coIe2H5inRockL;gs,s1;h2ACs;ag2H4bo22ZiaFschR;beI;ol,pRtmEN;!olyD;ch,dTe2GAg2H0kSsRt1z;daBe,pe2H6;eEl6s;enlaMle,s;b290mH;a00bZch6deXeWfVlSm0sh6tR;!on,z;!eSiRm2s,ya7;am,er,k0;b0MSg2D0;ik0;au,r9;b0MPrR;b0MOl6;er0NR;ire25Cr9;gShR;am,st2ENt1W2;e2GGi2GG;beFn,sKt0;hSkR;ey,m2ok,s;e,ioa1QV;nv0MGrd3;a2Bb28c26d25emske1CQf23g22hr,i1Tl1Mm1Ln10on,p0Zr0As05t02uYvXwUyR;dSe2FLm,nemanRst27E;!d,n;er,ra;!etSiRs2GH;s1tR;s1t;a3e;er,go,rtTsR;er,sR;i,n0;a2HCea2HC;e2FIhSi0riItRu;!iM;er1W1r1W1;lUsR;!eR;!lR;!tiC;er,op;a0BTb0Dcz0Cdt,e27Wge0Ah2FWi09li08m04n02o00pH2rXsWtTvSy,zR;og;i0VTy;!a2FReRle,og2FMt;lRr;!e0l0;be2EMe25Whm2;!a1PAeSiRon;d2CZng1DRss1;ns,r0Y0s;de5n,uR;a2F0x;!anR;d2B8z;aSeRi28O;ri2EHs;ko1YXnR;ge,n;hy,n;!g27Dng;nroRr;ed0;eg;aFeRin,ruIst;c07Ct;p0RFw2DS;a0Ab09ch6d03e02ga00nVou1G3rSsRus9;!chPOe01Zle1XYon,pet0;a7iR;cRot,p3qu2AS;h1ks1;a2EZeUiR;g2nR;!gsR;!en;!beFr,ssQ5tD;!rR;d,tn0;in,lBr,s1N7y;eTl6m2rR;iRy;cksTks;!l,rR;kerk0sR;!en,on;e0XDr6;i4uN;a7e1ingw232min0MZoQp1WU;!bWf0W4gVik,lRmQTp3s6;eSiR;c2ANs;n0I3rRu,y;!ey,sJ;!e0X5;e0L7ig;dXg2BYlWmVnSsRtzl0;!l0se;!eSig,m2ri2BYsJtz,zR;!e,i2DA;!ig4m1R7n;e20Sri2BV;!in0MLle;eRriI;l0HRm2r;a,e04gaFlaQo;ferRn0;!nYD;ge,ou3;ht,kRqu9;!e1XBl0;bBd8erRn0re2F5;ly,tR;!/lecomD;d8fP3gaVlP3pUrTsl6tR;cRon;at,oat;d,nJs1ty;e,hy;nt1;!a3Db3Cc37d32e30f2Zg2Uh2Ti2Qj2Ok2Nl29m1Wn1Hq1Gr0Ms0Ft0Bu06v04w00x20VyUzR;a7eRza7;lRn,ur;t1wo23B;!as1ZUdUeTf1LQh2BQl222m2nGsSth,wR;a7o239;!te2BJ;!b3r,t,ur;en,oR;ck,n;ay,eTkSriRs1JUth1VH;l1UYsh0X8;e23JinL;!l,s,y;eRin1TBr3;r01Rt;boAck,dec1RRg0NGlUntsm2ry,sStRv0;boAc1RQeb0D0re2EF;!au0hn0m2sR;e0KNi256;ta3;a0X5chThSi1XHra25RtRz;!o1Q2;aw21J;!e1P0;an2CLco9en,himo2DJkWlVpecUseTtRweE;iRy;e,n0LC;l,tt;k,t;am,et;eEi2CO;a0Ib0Dd07e05fo7gr03i02k01l00mZnXpe,qua275rUtSwRz0GE;ar2CTo22H;!ig0N0l0HVm1PPnRon,weE;agHe1VW;a123eS3iSoRr2B3;d,ld,n,p,w0;g2l2E7m2n1SN;aAe1VSi1TWoR;i2DHld;an,er,on,s;a1HRle3;ey,inLon8;ng,o,ss1;aRo26Q;d0ve;!l,nRsK;ouch1zl1L7;eVgrUiToSt,u1L9wRye;iIo220;in,u3y;m2ng;avGow;e,l,r;eTiRo281re29T;cTnsR;ki,on;cRl3r20Q;!k;nRscz1TL;!go24Q;!ue2BI;ab26Hc03d01e00gZiYko1VFlXnUou9raTsStR;raA;c1FHfo7ma27Rq28Tse26Lz;h2t1ZE;aSem2iRon;g2s,v2;g2mLn;ey,on,y;g2k;a7s3;!l,t1y;!eysi289fRly,rah1YJs,ve2BQ;ie1L7o7;e,hRk,oIzar1IR;ay,ir;!a02bl01eXiWlVmSon,pRro1OYst292;!l262s1t1;!an,erSoR;ck,nd,ud;!sl6;et201in;a2CKll;lRr,u29Z;!inR;!mR;asK;et1in;n1O6rd;a03d01e,f00glei1SGiZkhor225lTo2B4p3sRt1ve0TWy;aEteR;ad,d;!aVcz1SNeUiTmaSoRs;r2w;n,yr;d1ZHer,g2s;!r2tt,y;is,s,waGQ;k272n;o7pen26V;e,iR;m2n;bu28Ms,y;!ey,o2A3;a1H1jaR;ji,r;ch,gh,l0mSnRr1VD;auNes,s;eu28To1WE;ce,n;aUeTgRle,n6u3;an,eRluQ;n,rZ0tt;!lto1J6ma26Dn;n,r1Y0;fn0si;ck,gRr0CU;eBhl;aTdSe1SUiwinar1V5jAlR;er,oI;!ad,ig2oI;d,togR;lu;a29JhTkRleph24Kqua7;eRi2A1lG;r,t1YT;eRie;!y,z;erl3laO;ck,g,s;aASe9Agg,h97i7JjiOl6Um6Tnoc6So4Fr1QschwiMuUwTyR;e,m0orRre,sHzm2;fi;illi1WUyn;a1Gbb,d1Fe0Yf67g0Vh1VOi02lZmmes1nYo,rWstafs1tUyR;a7eSn0VNoR;mar27In,tD;a,t1TQ;ch0hRierr25Io297ter1W6;!rP;eg1ZVm2nRry;ag0K7ey;de0SFn1P4t,v1W1;iks8l8ma3oSyR;as,ch;viI;b0Ich0Gd0Dg0Bh0AlYmoQnVrUsep24tRzz1UZ;aRe,or,t1;rRuN;!d,e;a1S4guAy;aSd1e1J2gu8oR;is,t;me244n1ZYrd,u207;a286b21Dd1H5ha01iOlTmRne21D;aRin;in,n,t;au203eTin,m9oR;che1IVnRry,t1YWu;!ne5;boTmSrRt,v3;e216iJm1QTy;etDin,ot;e26TurR;de5g;m,s;an,na7o;e4nRon,ue;ard1S0on;i,oSrR;oz;!nJ;a19IeRon;l3t1MF;auNert1MEl3or1ZD;liRu1X9y;ch,eR;lmin7Rt1U5;b8co,d06g20Kl05n03rTsSt9RvRye,z;in,re19L;se28Hti8;aZboAet,ganiv9inXmWnUouTrRt3y;a,eRier20Wy;ra,tD;sKt;eRi0o1TJ;s6t;etDon;!/st-hRauN;il1VK;rd,u0JX;a7eRno1LRy;e,tD;fi,te;esKon;er,munW4;b9gVis,lUrRy;dRi232;aRin,o;!do,no;diM;en1TH;a1Pe0Yi0GoYuSyRze27C;l1VVma27Bs0OP;a7bVc1U8et,ffUg0nSsRt91z0BO;l3s;dReFwa1HI;s1Ey;at,y;b,er;at,bb,chm29Dg07i06l05m0BIndin0YMsXtWuTveLzR;elRie28Z;iCle;aSgRillo28Xlx,s8vH;et,na7;l9rd;e,he,on,to;!i26Mje2lWm2pe1STsTvRz;al9eR;nt4;aFeRin1TNm2o;jRt;am1RW;eRouA;au,e;e5i0le5;gn9ni0s16Z;an,g;auNbou04Wch8e07ff04g01ll00mXnVpUsSttn0vR;e1ZAoA;a7daBe1VWh1U5on,sRwo1GU;!el3im,om;pa;c1LWdRfe1GRh1U2k,na24Hon,seE;al,l0r1WU;aSb1Z4es,m,ouNsR;daB;l25Krd,u1YD;!i,o1VO;as,gs,l225nSorRs1;es12SiH4uk;auNon;et,iSoR;n,re;ng,thL;co,n0r0EY;a0Gc0Fd1e09f07g06i05l22Mm03nYsUvTw,ySzeR;la,t;k8s1I1;a288e;h1TLlTsR;!eR;!au,t;au,on;a9Ici,eUiSn1oR;n,t,uill5;erRlB;!ga1ZQ;lBt1QD;a1P3illR;i1on;g,ss,ve;is,or;!fR;!a7e,o7;l6nRr,s1CK;be255daBe,hiEiUlSou1Q2sRtr1X8wo1VY;hielMU;aRe5L;nd,w;a,ng;co,h,o;l6ny,rs1vG;bat3c0DdHf0Ci0Aj1mmo09n01sYtXu,vTw,y14FzR;iaRulA;d21Dno;eSiRoA;er,n0OBs1;lRn,s262tt,z;!iCy;i21Or00Jt1;sRtA;eRi0IJo1IS;l,t11J;be24Nch0dTet,fo7gSi26Ao,tRvil0RX;el,fo7h1SMrH;e24Vui0UM;aAboAchUe1RFf1DTguillQNin,je2mSo,pRry;i0RHre;aiRon1WX;s1t4;ampL;!nt;ll1nR;d1BUe;!f1V3;ey,iR;!aR;!mole1SUn;a22b20c1Zd1Oe1Lf1Kg1Jh1Ii1Hl1Bm1An13o0Wpaul0Vr0Ms0It0EuVvUwTyR;au,cool1JBeR;au,r,t04X;anLe0TYiMliM;a,er,oO;as3b08d06e05g03i02j1VBl00na1ZXp1ZJrUsTtSve25Nwe251zR;il,y;in,re5;sVCy;!auNboun23Wce,dTe1TQgSiRl6mel1n1TKon,q1NVre;ad0HPou;es,on,uG;!eSiRon;e,nC;!au,l,s;aRd,et,igu0sch13I;h,r1W7;lqu0n;eRh,l20Zo261y;!on,r,s,t;da7ttJ;ge,ie,on,rRy;e5on;auNil0HY;h0I0rTshaEtR;freds8i0schaRwer239;lk;e5ie,o;h0in,liTn6sRte5;!a7eRi5;!l3ns,t;aQng;dWe1UMgeVh1RCiUka,lTmSnRo,rPt1vea25Yy;e5iM;an,e1AOlFM;ay,e1UJ;ng,s;a25It1O7;eSiR;en,g;c022e1F6;gh2;dSg3r21PsR;se23Z;aEby,e122fUhTi0XAliMm2noCTri21Rs1wiSyeR;ar,r;ll,n1UM;aQe25Mue;ell224ie1DL;caWdVeUgr1NDiaTneSsRt51y1HZzale1XY;aVoul3;llPnt1YYv1Q9;!u;au,u;a7ic;lvG;beFe1XRi8mi0;aneIbouVdTinSka,lRymbiL7z;a3e1M7i22Qn0ogh1A0;!va24W;be22Ken,fRin0WMriIsK9wa1T0;in21A;rn,t;ne5s9;e8in,l0m;ar1R2er,hl3ly,n1TNu8;etDf1T5;dSfRg2pf0tz;fr0IB;ecDYhaFiDYsee1RA;a00boZchXda7eWfrVh23AiUmToSsRu;by,maF;!n,y;ai4er;er,ll1n;ey,oy;au,b3fr0I3k,l001m1QEqu3r,v20B;aRe4;rlG;is,ut;i4m19Frd;el,tu;eRin1NQri2;il,l3rt;n,rd,sh;hiO;iter1A4yz;a03eZiYoTuRy1YS;odRsh1EK;enA;beUdTrSutn6v0wR;ats1Y0e;b0PTy;e,os1I2u;ns1I1;ckm2nn,ss1;aTeSgg,i1YLmboInRs79;ah1PJdonw1Y5ey,f1ASnDV;n2t1;s1ve;ckm01d00iKnZsXuWvVzR;eSiR;er,ou;bRr;ro0MA;e8in1PA;benskiQde,mo1X4s0;co,g20Hh2p6sR;co,e,goC;cy,d1;u,wi1JK;ay0;a18b13d1T5e11ff10g0Wl0DmaiHn09o06pp,rWsUtTuSvRz8;og223ry;ffre1YCliaOn23Bst;o1F4sc37to;eRl0qu9t;!t22M;aVlUoRpHt1;dSir,n0E3uR;a7d,x;ay,e5;c0KiM;ldUrdTuR;dRlt;!e1BH;!.roch1C3e1BGi1M7ot;e5i,o;io1Y0nSrR;daOs1N5;a,e0KQ;ac,cTeRgr1XUi0;sRy;!t9;e,he1JC;!ar1SEb08c07d06e05f02k0lUmSot,p3q1XMsRten2;on,trap;an,oR;n1STre,ur;!a7ca1IReWiSmRo0LSs;an,or;aTes,gSl2ngLsR;!s8;an,h1O9;m,ns,rd,u;nLsRt0X2;!pP;iSoR;il,rd;ll2;au,s,ts;aFerslee1VF;hri1ZA;e09Vri1XP;auTgPm2nSon,uR;e4ie4;a0H5illi1R4;lt,t;!a7en,o7;n,rs1KDsRtz8;brG1i1ZW;a20TbUeTl1WOoRs1;in,uR;le5ry,st;au,rs1;!o20Ls;coUgh1M4mTnSq20MrdRs1WY;!et1M4;co1ZZno0V3op1U6sDC;b0SDpao218;mRsa;az1TGel216in;e020iSoR;ronz6sh;rlan1WOsl1YM;a15b14drGe13ffr11go21Oh10i0Zl0Sm0Rn0Go0Cr01sYtUuke1OLvSweNy0zR;er1;a147rR;it,y;cTtSzlR;af;an,el;heE;er1mi0sR;eRon;au1XEr1;a00beZd0Z7eYgXiMke,laWmUnToSri1KVs,th,u,vaRwiM;h,is;!ud9w;at,i0on;aRerPme;in,n1DMux;isJ;e169o;au,gh1NHmi2tD;au,r06H;gh1NFl1QPu0BG;ffrTli0rgR;eRian1MP;s1ZYt1DE;e,i1oi;a00dYeVi1K4ne219oTs1tRuL;es1UPh1ilRry;!co4e,h152ly,o;is,la,n,veR;l1QMse;au,rSsRt,voA;!se,t;e20Ry;ezt,rR;e1TVon,y;nd,pB;ba1WZe1NKina1XHus;aAdWe1UXiTlRoFR;a,eRi1VSy;au,s;e,nR;aRe5;!s,u;aFerbl12U;b,gne1TB;an,l1EMr1PUu;aRey;rd,y;dGvG;a1WMh0UZ;rSuRy;go208x;in,n6on,y;b34ch33d2Xet2Wff2Vg2Ph2Oi2Jl1Xm1Tn1Mo1Lr0Us0Mt0EuYvUwrylu1U6yTzR;aRon;ilBuck1V2;ar4et,m2n1JLo0S1;aSiRrilch1AJ;gn2ll9;n,rRso;d,is;c04dZge,hi0ja7lYmoQnt,r1ssXtSvR;in,re0FK;hSieretRr0SX;hi0;erPierR;moyRric0O;ne1KC;e,in;!doOi1IWt1YO;aUeTiSon,rR;e0FBon,y;an,n,o;l,re,s,t,ur;is,rd;hRin;e07Kin;ch18ReWf16GiVtRz1I7;e,oSuR;so,zo;lRni;a,i1OB;en,gn1ll1n1BR;au,hRli0s;ouK;cWe5keEpUsStR;m18Qo0NO;!eRin;!au,r;ar,eR;!riO;!oR;n,yC;a0Fb0Dc0Cd09e08f160g05i02l01ma1SRnZoVrSs1tl0vR;ey,in;an1P4eSiRow;ck,e,ty;fa,vo9;faTnRt1YV;!boucR;ha7;lo,no;ac1XFeRh1NOi9Von,s,y;au,r,tt;iIou1HD;bal1W1ep1CRgSnRte5up;et,th0;ou,ue;anSoR;tt3ur;o,tiO;!au,m2;eSiRn0y;!n0;re,s,t;e5iaLon;et,r1O7uRy;g1WMs1UUtt,z1NB;be1NNh2mvolgRnd,y1LT;yi;!pewa7;at,baat1XUcWdVeUiTl6nRs,t1;eRon;s,tt;er,m,n,v9;!sh;ey,hi,iJSon;io,y;aTbSeRfo7in,m1s15T;l3t;e5i0le,oa;c1WMrd;a0Ab07e06i03ko,lTm,oSp3us1QKvRy;ez,in;is,ud9;aZeWiSoRup;!fr8nJw1L5;an1OYboAch1H3eTg2nSpRv2;e5o1W1;el1W0g0;n08Mr;rSs,tRy;!ta;aQn9C;!gh0h129nt,rd,s,v2;a1V8bSch2mi,nRo1VQpe5;do,i0;eFoA;a1V5n1U5rCzo1FT;a1BUrR;aRun;i1UVnd;ch,iKneIrRs1H0ti;d1OIet1HMne5;gnUllSnRv3;ey,sD1;ardRo1XB;!e19N;a7e1NK;an,erKI;aVeUl1R5nR;eSie1EVonR;!broc12Ileb0OH;!??,r;!a1QMrm16K;ri1QR;ay,e,n6;an,z;!aVboAdy,eUi1WUm0oSrRs14P;as,e5;is,re,sy,uR;a7ry;l1V3s;l,p1MM;et,o1GN;!a09Hbei1X3ey,i004le,oTriRso;au,elRon;!e,li;rSurR;i1y;!i1NG;a6Yd,e5Mhe0RPi4El3Po21r0AuTyR;fRlysht2sh;e,fe,le;biOchLd1SNe06g05hr,iDji1WHks,l03m01n00o1RQrUsStR;t0voVI;cRe0RPsbLVz;hi1Q5o;ce,gus1loVnUo1K5rl8sthTtR;aRe5ha;do,u;en0;i0RHs;ng,tD;g,k;aRo08A;r1VGs;fo7ker033lRt1;er0T1o,u143;erGlPuG;ls,ntGss081;a11e0Gi02oTuSyR;!dec1OQe,kluQ;g1MTi0GTth;!bYeXiWlVmUnTsStt8uR;d,st;sa7t;g1O2tXD;a1RZent189o1PE;a1KMin;deva1VTquingo1PC;liliIse;e,ish0;a03b1QCc02dY4eZgXoWppi1KNsVtTzR;elBzR;eEie;h,sR;chJh1DT;ar,ko,on;l9ui;auNe5n1oR;lsp1TMn,t;dSk,l,sR;!en,s;enXUma1Q3ri1RV;k1BIot;s,uN;c09d06e05ge5i04je5ke,m02nZrWsVtUuSvRy;es,re;dRnd;!enXO;e,on,ti;el,l1ne19YsH;eSiRot;chs;!au14Oje2;chJetteRie4oy;!trR;embl1IB;e5oR;nt,t;!re,t1PW;dm2haFlaQm2re,s;eRin;mXAnXAricRtD;a,ks1;hRon;a1TJetDon;bo05c04d9g03i02je1FBk0l6m01nSppi0r0RAsi0teRus3wl6z0FX;!l1SY;cVgeUkRquX7ss8tz,y,z;eSfur1S3lRs;!aQ;!l,n;lo,t1ET;!de06SeThRke,oe1F4;a7eRiO;!ge1T5re;!sca1TTti1QX;bGe1NZpt1;n1EMse;as1DZo1SI;h1k;ul9;beFcze1P3d8er1TRg1Ch4Ci1Bl17n11r0Cs0At08uRwle1BXyJ;beFc05da,e04ger02ill00lZnYqu9rRst;cVeUi0mTnRqu3r043s3;aiKeRi0;au1GNl,rP;oy,y;au,ur;aRhe;de,ud1OP;i0ta3;em,on;aRon;de,rd;aRe;t,u;re,t;auRhe10Jr1KO;de5lt,x;herRtuni09C;giE;e1EBh1H1sRt0;!e0OG;an1J2be1ROc0Bd08We09g05i04k6man03n00queZreXsVtRv1EU;e,iTon,uRy;g1NCnR;a1DUe1MS;er,n1D0;!an,be1R9tRythJ;!aEer;n1POstR;al,er;l1CJs;aSeR;ll,r;ri,si0;!ns;n,tn;eSie,uR;es,itG;au,r1tR;!t1EV;acrGm2nt,stRt05B;aEeEi0;aTeSiR;a,er,l1SHoC;laAv1E7;de,n;dUg,ja1B4rVs,tRvie1E5zali1SY;!ain0QReRig1NRr0CV;nRs;ay,e5ot;er,rRuroK;ou1OZ;!co,do4e1BPg0in,lRot,st0weEz;e1T4iSoR;ws;as,ck,s;daFsy;ar1F1g,h092lR;e,i00H;a02eYiWoSuRy1NB;et1BBh0QG;cTho,rRuca1A1we1FI;eRin,o;a,nt3s;ca1PCk1KN;b1NQe1OLnR;g,n,t;ck,et,gBmTs1OVtt,urRxm2;a1LXet,iRy;au,c15Wd1BVmo1LWss1;iMmiM;g02h01i00ke,mXnUrSuR;st,t4x;oRr1;!w;!ag2de1F4nSsbR;er1PMu1PM;e1PLig2;anSba7mR;an1EVe,iM;ch9d;ma3;er1ECi1N5;eoBg;c0Xd0Ve0Rf0Qgueire1NMjolYJl0Jn0Bo07r06s01tRv9z9;chYgeXzR;!baVgUjTmorrApSsimR;mo1QIo1QI;at1KU;ohn;eSibb1;ck,y;ra104;!eR;ll,tt;cSet,hRkJn6si5;!ba1O2er;hRus;bRer,le3;a1NZeI;by,ek,m3n,th;d0J3lSriR;!l1QUto;a,kR;os1LE;cWdl1ENeVg0iUk,l6nSsterR;er,waN;eRig2;g2y;g2zi;haFl1PGs,t;hRk;!el1EG;ar,bU6de,et,iTki1PSlSoRsoff0t16V;c1PQt;mo4;aTon,pRs;en10VoCpR;el1P8iOoC;n,rd,tr1HSu;e,f4le,re;lRr9v4zo;dShaR;ub0;!e1DRiMs;dGe1P1iR;adA;hau014ke1R2;a0Ybv0Xct0Wd0Sen0RgnoQhr,i0Qka,l0Nmm0n0Io1OUqu9r00sYtVuTvSwKx,y,zR;er9zaO;e,r00I;ers11Yge4illRre1K6stH;a7et1on;eSherRter0VOz0;!o,stonh0ZE;is,s;c1P4tR;a,er,o1LD;a1LNchic1BIdaAe07gus06iVHjaOla05m03n01rTsRtinHv10J;chRt0;ke;aUeTiRo125y125;!eRg2n,ol,s;!rJ;!auNi1MMll,n,ol,r,t1AI;!gTnSrR;a,d,iLo;d,te;ne,u1PI;andRba1MLet,s;!e1IW;aRi1JS;ni2;nd,tD;on,s1;!nc11Vol,s;aUc0el1HSiTnRt1;eRi,o;l,sMSty;ou,s;sKto;c1OFdm2i1LZlSs14QtR;h1BHon;!ba1EMe1COi1HP;cze0T3th,x,zo;ey,y;ak,erSorRunkTZ;ko,ov1ONuk;aRo0J6;ti1;auNe5;et,re;rTtherR;stR;onJ;n1on,wea59;b1Pc1Md1Lfa7g1Ih1Hi1CjF6l0Zme0Yn0Tou1NFqu0YGr0Es0Dtta145u00vUwTySziR;no1ORo;dher18Ket,ol,t;cettJdr1CLns;eUi0rR;eRon;!auRt;!per06G;rRur;e5on,y;beFcYd012gXlVnt,q1NTreUsRte1P4vH;be1MSel,se,tR;!inR;!i,o;!au,s;conbr1A5ds,kn0lRtz;em;e4hn2;auNe1P7hToR;nRuF;!n1B1;erRon;!boisjo1N0dug1JQ;an0WQc1FMtrG;a02b0d01e10Ig00ha,iZk1JOlYm0nWqVrRu1AWweE;aTeSiRow;er,s;as,ll,r;n41r;uh1O5;a0WIeRsw1LY;l,t,y;ay,ey,iMy;as,b1FAne5;no1MO;e068y;dj,gSndRy,z1OS;!ou;h0o;ch0dDPeUfla0TIgTia,nV6tR;icRoO;anD;as,e1D5;ss6;laFry;a02by,c00er,is,kXlUma7or,q1IZstrTterR;!mR;an,i0;auNo;iSoRs,u;ns0VQw;g2s;!eRn0;nRr;be1LLhaus8;ao,ia1HKonR;!br190er,i;iKr1DFs1GS;llTn,rR;banRf0UPl6m2servi1JX;ks;aRe;nt,rd;ey,l0ZTy;an,eLn53oSuR;et,y;n1IZt;er,ne0IP;cSetDhRkn6;e,m2;en1IFki1H5;as,b1K9er,i,rR;e,i1F2y;a39b36c33d2Ofthimiak1CJg2Jh2Gi2Ck2Bl1Om1Fn11p0Zr0Ss0Et09u06vWwUxTySzR;ovs1HCzy;amPd190kHr3tH;er083fo7;aRb0KPe1A6iMme1NK;rd,s06Q;aVeSin,o098raR;ge,i4rd;dekiMns1rR;a7eRs,t1;ll,st;!nSrR;d,ts;gelStR;urH;ho,isD;deLlSrRsan1GV;iphiKy;e19Si0Z8;cheTesShRtP8u;er11Li0;onC;as1cop1MBl19FvR;ar1LZe1K6;c01in1EUl14moQn00pYsUtR;aEeSiRr078;geCv1N0;be,nso18Ws,ve,y;aTe81iR;aReR;mb4;ff,hAJ;eniHinoRosi1LT;la,sa;auNo1IX;arfull1GWhSoRu16E;b1LXf9la;am0B9en59;aWb2coVeKiTli8mita1IFnSsRy1M6;kiCto;o,st,we3;cRpH;ks1ss1;laO;mXIrd,so1K9uw;erje1KBpR;le13Ps;a03chaR1de18Ze02f01gVm2nUoSriRtsXFy;g1IFqu1GJ;ld,uR;f,ilB;is,s1;a,elUlSsR;tr0OA;aQeRi11Y;haFr;brRma1GH;ec1I6;ie0U5o1LR;ff,r,sK;irJrd;a7bXd3erWmTonSpRslP;ey,s1;d,et;anueSeRo1K8s;ll,ry;ls1;e5s1y;e1J6l1FIrR;ia1GN;a0Cch11Sd0Ae09fn0g08harr1KZi06ki1K2lZmXoVr19XsTvSwRzt0;a7eE;e0SSid1HH;lRo,w1IQ;ig0;nRqu3tD;diC;!as1I2oRs,y;re,useddeb;eSiRo1LHsw1IK;ff,ngs1s1;fs8mTnSrRst1LItt;t1y;be1IRs;beRe1EK;rg0Z8;as1cSCeRzon1GN;!ff,se;attio1I6hoU7;moQute1HQ;erRr161;bro0N8m2;nd,ouf191;emN7izi2;cRdt,kHls1ns0W2ri;hSkR;ho1GBle;m2o0S5;lerSouarCrR;et,ma1FA;!s,t;aUer0HGgRo;eSinRlefiel19W;gt1t1;liMm2rt;n,rh1CS;dis04e01gYiWleVmRrAseEwards1JD;i1JUonTunR;ds,sR;toC;ds;fs8st1;ne,p,sR;bu1HO;aSeR;!rt1;ms;lRn,sK;iCmR;ey0;fo7;cShl3kR;aFe124lG;e16MlG;a1IHd1erSnoeRy;th0;!le,tL;dy,gUm0rTstR;er,mR;an,e1DB;by,le0ZT;an,lesR;h11Won;aMAe9Sh9Ni7Fo4Ur44u05w02yVzR;aTiR;erzb0VHob,uR;ba;t,wa1HO;aWcVer,kTlSoRzy;tDuK;es1DH;eRst1FS;!m2rm2;e,k;meKHuc0WW;an,elsRineEy0;doR;rf;a3Ob3Ac2Sd2Qe2Pf2Gg2Bh28ig1J4ja00Bke1JKl24m1On1Fo1Ep0Wque0Vr0Fs09tXvSxbur1GPyRz1BF;eCFon;al0XYeSiR;lla163vi0;au,rR;gRn16Ese5t;er,n0;a01ch0eZhYilVko11Clo1EOoUrRtlo1EOu;emSiR;s0T3z0T3;bl0E1pe;it,ur;!lR;eRy;!ul;ie,u;au,l,mpBrR;!t4;l1ERrt4;aUka,oTsRt;auRer4i2Hon,u0Z8;lt,me;me,uch9;bl0NUng,uR;c15VtW9;a03b02c01dBe00gZiXliMnWoTpC1sSuRy;ey,is0FN;in,o;cherSuRy,ze5;vr15Q;!je2;h143in0A5;e1IDga,o,sot12LvR;a1EGe5;e194in;au0RUboAl,p1AMtD;an,y;et,in,oA;!ck,le5nRss,ux;!ce5d,lRtaH6;e5ot;m3sCt10T;a06e03hi02i01lVoTrSuR;is,y5;a1ATeL;le5n184rt,uR;rq1GOy;aVeTiR;n,sR;!ea;chRin,ssA;a3in;i0BTnt00Wqu9;g1CKl,nLre;ly,n6;l,rRtD;e0YZie,rR;e18Hon;rRs,ul;c,t;n09Cs;a7IbYckl17CdXfo7h139i0RZkWlTnRo7t;!e,iR;g2ngWX;aSeRop;av6vy;p,y;!in,l6;as,on;ar,er1ES;a02b1ANe01iZoTpSulR;on091;hr6;nUr021uR;chHin,lRs020;inRon;!e1DN;ce16Nd,tR;!char01WeYWi0;li1trR;es0BN;rg1FPsn1A5;iTnSreRs,y;il,sq;o155s;nJs;aTenSiRm0UDoMu1CA;gn1n;ba1D9;c,y;aSet4me,n,oR;n,uss140;i1CPmHut,yJ;aTgSreT2uR;a15Met;an,en;l,sR;!rocheSM;aYeXfWigVl1B5oTrR;eRo1DH;nGsn0BJz;e,nd,rt,sKurR;!nH;ui0;!a1B5in,n6y;!sD;uQOyJ;c0BKg0YHll;a,d3eRra;m0TQvo14G;a06e05h00iZkYlWoUrR;eSoRuc;cq,is01Zs;!st;l1nRr0QDudr13D;du,ge;aRos;s,ux;e1GAw1DD;au1BY;aUeRir1;!m3nSsnRtD;ay,e191oA;ay,y;i1ALmb1r1BTstHtHu1BT;d4p0F0;p,rRsK;re5ufH;a03bles0R0e01i00lZoTrSuR;c,q1EDr1sK;ay,eu18Soy,uB;cVisUrdTsSuR;ch9rg;q,t;!iKB;!bela1DB;!q,t;ay,et,in;en,ll1A1;!au0OYe,rRul;g0ry;!so1BUy;le,nt,rDx;a08e04iZoUuTyR;an,d8er,sdR;aBeE;ck0e,geo0Z1h2mmond16Bry,ss1;g1DVig19Yl0FDm6n,uSwRz15L;!n0V9se;a7et,iSsR;e,s1;ll0AOn;eUnkw08GsRv0;coEdR;aBeR;llJ;ss8;au,nn2rZGsSuRwi1F7;mo18Ex;deEsRzH;er,l0;bbBeg0gViXMmmeh,nUpSuRy;lt,s;eRie,pi0;au,r;o,sf0LM;aSoR;n,on;ni0UY;aCb24c22d20e1Yf1Xg1Vh1Ti1Rk1Pl1Jm1Cn0Zo0Wp0Vr0Hs0Et0DuYv0wUySzR;a,i0oAzi;eRon;l,ns,r;!dTer,iMlSnR;e0UHiMs;e,iM;!aEeE;a04b02c01e00gXill09Yla1CKmVpe,sUtreTvRwAx,zie1AS;iKZreR;le0YU;!leEO;m2s9t1E3;a10NoR;ulA;aSe,hRle;an,er10Gt133;l,n;s0FQyi0;et,h3in9;ek,lR;a7i0;i4n,uN;h,tJy;sStR;al0eFie;ant166ey,ou;!a01e00geZiYlWmUoTrAsSta,vRw3;al,i73;az,ey,onne1CE;ch0pt17Ww;an,eRoy;r,sn16Tt;eRot,y;a1C9y;a,be5o0XF;!v0YP;!n,t;iSnRzi14M;!ge;re,s;e19RhZY;dSks,lRn0I0;an,ey,ittBy;na1ARr0YIy;aYcXdi0eWi0l1nToSst1tRusz;a16Fig182;gh1BYh1BY;ag2eRol0IB;lRnfe0LLv0YC;ly,y;g2ll09V;arl15GouF;gTh1BSlStR;!el1BAi,o;ds1;ay,hR;ue,y;aiCbWeViTmWUoSpiR;er4g17P;n129t0WE;ce16EnR;a,e,g0OBo;nArg1BIy;ro0V2;!bO7cVeUiTlRt0N3;aRi0o;n,rd;b1v2J;go0UXnc;e,imas0LL;is,uR;chP;g0ZZn,rRs1;e,on0OA;an,erRim,or0YTr8;!ty;anRge1CQ;ie198;f3ny;!rRts18S;iMks8;dRet,i0VGon,r0XGweE;!r0XFs;ia,kRquM2;e1CIstad0;bWie,laVrSs1uR;ck,sh;a0OHoR;us163woR;ls162;n0LVs161;eFinLy;a1Sb1Qc1Jd1He18f16g0Yha0YWio0Xj0Wl0Rm0Kn0Fo0Cp0Aqui0Gr08s05tXvSx1AXzR;az13Hy;eSiR;lo0LNr2Mta;lSrR;e,ny,si;lN9y;chPda09OillXmi4oUtSuR;ll15Pr18L;aRri186;mi;mRr4;asRma0V8;o,so;io,o;al16Gco,en1A3hni14Jle,nSsy,tRy;as15Hefa158l0;a7ey;adRig6Hks,o16Ir8;do,o;al07YiRp099roK;et0XOn1AQ;nSrRtt0TW;e,io;et,pelleW4;aUc0ell0TTgTh,kHniMoc16HsmoSuRwoodP;nz157;or,re;le,waE;n,rd12A;aUeTiRop13GpGLu0XF;cheBnOtroR;ff,v;l,nt;rSssi184t14LuR;lo,rG3;co,e,z14X;aUeTio,ks,lRmo14Horet1AAwi18D;aRey;b0THi4;aGLl18Zo;i4l18Yu0X4;or14Rul14R;ia,r14Q;aWby,eVgi19EiTm2nSon,uR;er0RBgliel17T;a7e;aRovARrola17R;co17Qntomas0U8;!n14K;eRna7;ta149;abRio4;io,rFL;bYcWdeVl0TKm1A1n,rUsTtDudeSzR;!i1;!pa7;!ch151;ce,e,noAo,re,s;ri16S;!kR;ho15W;boEel;iConRunyk,yk;a19Je;aWeVha7iUkRlaBKro0TI;!eSiRn0o,s1;e,ns1;e,ns,r0M9y;c159nt140;rOsa4;i4pr13Y;!bBernRlNZ;ar15M;b111mUnTsRu,vatAz;!perR;ei167;ton13S;a13Ce5oR;nd,s;aTerSoR;et,r8;elBre;eRl0nAstrHvern14M;ne,se;aC2bBHcAEdABeA9f9Wg97h91ibHj8Vk8Rl6Km5Qn5Ao59p4Vqu4Rr3Ys0Zt0Sur,v01wYxtWyTzR;ain150eRiHy;e7Iry;!d9eSgl0LRo,sR;iCz;lBtD;e15SraR;!de0TZze;a11ZfaEiRol0W8;nRtt;g,t0;a0De09iZl3oVrRynI;eSieRoe14P;n183s;eRux;se,ze;e,iTlSs0WMyR;!au,o;d0in;d,sy;!cZenClVnTrSs,tRz130;o,s;gil12Y;ceRe;!ntA;lRmo12G;eRier0P0y;b1mu4nXLrR;a0WKoy,s;!q;au,l105rRse;!aSboAcAPeRgi0;aux,ux;!c,ux;nTrSuR;drDBx;e2Uie18M;ey,t0UV;a15Echev11WelBhourven9illiDCloWoTtR;mRo4;an,e0VF;mma0S2nnaRuc173;ncR;our0VV;ff,r;a2Ib2Cc1Xdeve170e1Wf1Sg1Lh1Hi1Fj1Cl16m0Zn0Wo0Rp0Iquin0Hr06sZtTueFvSyR;!l0I3;agGea18B;a3epha11ZiVouUrSvinR;ce11S;eRijk0oismai10;e,mpG;chGnA;mauv0TAn;aSinRolGu0ON;!g16S;iTlinGnSulR;es,t;de,e;llRnt;ie0UVy;aZivYoTuR;es,iR;ss1C;b0AFcheUsTuR;le5sseR;a17Sls;by,es,ie0UOny;rs,s;ea17PiE8;bRm15nJQsoi0UL;is,raA;c0L5d4;aWerVinTlaSoRrGut12;c12IntLrtGts;s,ts;aRs;ce,sK;n0UQri0;rStAuR;lt,sG;d,oAs,tL;!rTta,uR;rRsa;cy,d0V0;c0LAmR;ea178ie0U5;aYFe0CZoR;mme16Vux,yR;a175e0U2;aTeSoR;n0LFrm0Kuli15Q;!dt,ille0TZno0VAt,ulG;iTnSrR;aAchaAis,quAte84;chGgGo0V7;so15L;aVe14DiToR;geLngchR;am0H5;erRppeL;es,rG;ndGur4N;aRour06W;do15DrR;di15ClaA;co,gClRn0Q6;e0KZva;aSetrGoR;guG;iGrRute0T8;naA;agnGe155oufWrR;anUeToR;boAseiR;ll4A;n49s;ds,gG;fGrG;ay0FDoR;nt0JSrgSssGurnR;ea169;es,uG;iCnnX4rrGu4ve;a02e0ZPhVoSroiselR;leL;!eSlomb3ZmRrm3ZstGte02u0T1;bGps;urL;aTeRiev0m15Lo0SPry0u0YX;neYvR;a15Ze13F;lTmRtele0KA;bRps;auNrG;as,e0K7;m0G4rRuN;affGds,reRt;a15Ss;aUecque0K3ie14EoSroR;ssGye15Q;is,rR;bGdG;ns,rR;a0JYrG;br0V2c2VinWlVnUreTuSvR;is,o4K;ln3Ete0S7;nnG;tAy;ab0YSl3B;de,tje2;a0Ib0Hcy,e0Fi0Ck0Bm09ny,o00rXsahWuVvSwRy;ay,orG;aSiR;e15BlB;in,n;chPit0s0XU;ag;eSienRy;!n0LM;ca,r;beFchYme,n11Ao,pe,sVtter0HTuRy,zBF;aTcSen,sR;i0sH;hPk;rd,uN;aSby,e,iR;a,erL;!r0YV;e0ERie;a13IiR;d,ne,t;o,s8;bStRv0A0;i0o;oy8;!n073peRx;nt65;r0PTy;by,il,le5mo,p0UNspJvenH;a3iRoy;lSnR;d4t;li8;a02e01iXlan0QToWrUuR;tt0yR;jRsba0QP;al1;aRin10J;et0tt0WU;des149ix,mereudalig4n0UFt,urq130;eSnR;ci0te;rRt0QI;c0YTredeberniscalv0TX;auNd0QGir0Z4lXWnci0y4;do0DWl00Oni,pe,roAssilRtPuc0Z3;i0le;liv0LVm,ne,rs6;a04b13Me01g,he00iXnVoStR;!as,on,re03Ru;!bS4fr0XYlf,mmeJnSt,yR;e0QWon;c0HHv0P3;eRie,o;ny,r,t,v0P1;c0HEel,g08Hll,m148no,oFsSveR;rv0OZ;c0Gon;y0z;au,cSgrAhog12Gs,tDveR;!rs;ha0L5;iKnRttGy;toA;a0Bbro0Ac09e04i02mo129oUpsTro,uR;mbr0SGnbru0BJth,yR;!ld0;ey,t0;ite038lDCnUo0QFrTsSuR;chPBy;cova0XGko0Z2;asKe;brTce5tR;br0FLgaRig0Y5;ilPK;eun,un;niRs0ZQt4;!ac;a138dy,lo,nUo,rTtR;rRte,ure0Q4;e,iIop0VH;lAo0YKs;i,ou;huI;s0H6ws0X2;iYlXnWrRt0VDurai0Z5y;!a,b4co,e0ZZg10HkUsTtRy;el0OYiR;g0XQn;!ac,e;!is;!c11Hge,th9;sy;o,so11G;a0Ube0Tco0Sd0Re0Lf0Kg0Jh0Hi0Dl06m04ne0GWoWpVruJsoFuTvRwai0Y7z0WM;aQHec0VOiR;gCn;b0CScaLde,gR;a,re;orDr0RK;c118e0VRge,m0PWnUrSs0S0ttiLGuR;c117ghe101r0YLv0QS;!eRge,i0DGme,t;n0U2tDy;co0N2gR;!cSueR;ep0S8;ha0IB;aRiVB;ge,i4rDs;aTer,iSoR;ue,w;gaEs;b0A8fTniTVpSrd,tRvedo0C0;or4;os125;ortu0ZS;asKcer0FReTgnYVneLq10UsRva;io,leRs0;!martHra;ge,l,nCreLtD;aRougC;es,lB;a0XNuidi0Y5;g5osK;eVgliKigCllApiUrTsRtoiBu4z0P7;dernRelV2tre0HB;ie0OS;iq10J;er4ne;uw;ot113u0UQ;l,r0X5uF;cq10Euf;b0Pc0Mdur0Lf0Jg0Gh0Fi0Ej0DlQEm07n05p02quArZsYuVvRwa4yJ;aSictR;oi4;ltrPuR;!lt,x;m0OTnSrR;e,i0GQ;ay,e,ie0J6oA;alBse;ge,iv0R5min0QCoRue;cheRd0YVn0WTsb0UJ;!foucau09RlB;lanSoR;inDth0YS;c0ZWte;auRdJeWHgBnEXo,ux,y;d0QYze;aTbSirRot0ZT;an0WL;ou0YU;dSrR;e,re;eleiC;ar0UZo0ZQ;ne0PZrJ;aPoussaZun0NB;ar0WDe,orgeSrR;a0U0ee;nd0QM;aVoRra0Z7;nt0ECrest0QKsK;antaT;hesnaSoR;sDur;ye;arToursSrR;ie4osKuye4;od0QD;re,t0Z8;erTi0PDoR;n1SvaR;chi0WZ;legaQver0S1;aUeToR;ie,nRr00Lurd2y05K;ckhee4g;an,rs6s0S8;d1rR;laA;aVeSoRud1;ey,n,st0SMu0MQy0SM;er,mSn5rto0IVt4uR;rGs0WO;!ptinC;as,erCit4sq0YVut;a0Be09hr0ZPi07la05o01rUuR;eSiR;lBre,se,t4;s,yt0;aTeSoRucX0;otJsboA;!a004e,gor0TXni0s;ce,iTndRy;!mRp4;a0X3o0TF;de,s;ix,nSuR;ff,in;g4zR;ag0YG;in,nR;d1f1;ovR;anO;nRte0;e,nG;gCiTlif9nSrRsYSuc0Y6;iOPmend0YSriOP;neLo;ll0;a01e00ilipZoWrR;aReit0UDi0UD;iTnR;cRq0WM;es0UJ;po0SU;e,llQ7nSorDrRu9y;d,e0W8ge,t;d,v0KD;po;li0VCrr0OW;iMVlkRuw,y087z0T3;ens0AF;b,g2ks,n,rRvy;!iMy;ch0B9en0QViSoR;bbelae4uh9;c,eu;a0Le0Kha0Di0Bk0l08oXrR;esCoRuy0XR;iT\xFFR;!roeR;ulx;seRx;llG;ck,e00igCnnZrYsWtUuR;rSsseRte4;!rg0XE;c0CPp1v0Z1;!a,eR;au0L2;seLtR;a,e0FU;by,d0LTmi0tJ;inI;ne,ur;aSoRus3;it4s;r0s;aRc0RXnt4;ntA;mVntUrTtSuR;lnGme,x;ig0T1;d,n0LI;!al;b4pR;la3s;a07AllGsa4vi0XG;dXi4mWnVot,rTstSto,uR;s8x;el0P5re;ave0TOdRetDi1l,re5ufHy;aill082en0SX;!b4tP;!pL;ar2ilh07Z;a08e03i02l01oXrUuR;cUTh2i4lBre,ssR;at,cRie4;he4;ay,ieSouw0uR;in,yC;!nCre;er,isa02VnTrSuR;gh,t;ass0BMd;a05Zne,v0IQ;aiGEe,oAuc0W6;da0GRga4l02M;auri0CUlleTrR;m8nR;ar0UR;au,fR;eu0IJoQ;ille6Nne,r0THttRy;enR;be0V0;!c1kVl6nUrTse,uRvi0XLza;dRlt;el3;au0OAbo04Odu0STm2;drAe;!inL;b3Ic3Gdd3Fe3Eg37h34i30k2Zl2Im22n1Dou1Cp19r0Ss0Ltz,u02vTwSzeR;!m0WN;eLi0JZ;aYdim0M7eViSl0VSrR;e5ie0X0;au,dSeLgnKYlatRo;orG;!a0KPoSX;lSnRy;ne,poF;iCuy;la,ux;b06d03ghD5l02m01nZpWrUssTtRvi3Gz9;a0QAeRh8Wt;l,u0PV;in,y;aRiz0VXy;is,t,y;hinSin,lR;aiK;!aA;aAoravicR;io0OC;a0K7e;ne,t;eSiR;as,er;ga0DTl3;eFiR;gRn;e1ny;cWkVpe,sUtR;iSoR;li,us;!g0QY;i0yl05W;ev0S0;en0NMh0CG;!a06b05c04de58e02g00ip0UOlZmoW7nYoXrUsiTtSvRw3;auNe5i0WE;ez,oA;e,g0QR;aSiRoA;ce,go;c,gh,h,r;is,sa;aj0VPet,is;ey,iM;enRiKYy;c09As1z0PP;nRt;be0TEka0BL;he07Gy;is1y;by,c,g1ic0U8me,sC;h,onDpeSrR;a0UWendes0MWiB;n,rn;di,st;a0Eb0Dc0Bd06e04f0SVg01harg0U6iel00j0VCkZnWquHre,sUtTus0v0GMyRze;lkRs;iw;in,re;auNerR;e5re;eShaus0is,oR;nz0P8s9;se,v0GE;o,s,u0TC;!lo,s0U5;eSla0QLuR;ay,eg0;la,rf022ug0;au,stR;eu0O7;el3oUrSuR;raQ;e0CTiR;eu;ff,is,nX4q0TM;oRzin04Q;es,sKuK;re07Ju0SA;h0TIuN;a03bYeXiWmVoSphoRqu9y;usK;is,rSurR;an,s;a0PNe;iz0OL;aOco,r,se;!r0JK;oTrR;eRo0OG;mo0O1v0FN;iKurR;gGn0HQ;nStR;ha,o;e,t;be05c03e00lWmUpTrympBtSziR;el,llJ;er0O8;e0J8hoQ;aRe;ce,n,s0NZ;!aTeRi0on;!geersheRng0r0HF;cq0ST;i4mo4s;c,r9sRy;io,saR;nd0GA;anRh0ouF;ta0QA;c,rR;g,t;in,u;gTk0QRlRnJ;ey,lR;ebou0QRon,y;le,ne5;an,lSmR;!an,er;!er,sei0P3;eWg,hVnUoTuR;eRil0S8;il,r4t;s6Uu0IH;aEo0SX;er,uiB;naAsKy;lm2;ar0ND;an0GOcar02GhYOiRos0TCrGun0LZ;er,uk;aTbadPin,lVEoSrR;a0QEo0LZ;nv0EFus;nc06Ste;aGIeFWhAFi9Vl8Smi8Qo2Mr13such0CQuYv0SSyUzS\xE1cR;erG;ajRer00Sop;ko0BF;piTrR;!enCiR;er,lB;hot,ot;b0Uc0Sd0Re0Pff,g0Oi0Ml0Hm0En0Ar01sYtUvSyRzn0;en,l0;en,illR;i0on;f0QAhSl0m2n0ELro,sh0B3tR;er,iM;aCbertR;!s1;aShRiIs1t0F6;en,iMm2;ck,n0L8;a0IBeYl6oXrTst1tRw3zi;az,e5iR;n,us;an,eSiRo,y;e09Vv2;n,rbrigR;gs;de5nCtD;!a04Uux;eSha,niR;g2ng7M;gRo;on0NS;berSminRuyh0E1;gs,s;bat0OQlaQ;beUet,ha0LCi0PVjZWlRv0;!eSiRt1;mo4n;n,rs,t0R4y;rts1;ba,er0GBllRn,r0MQ;e0GAierT;gy,n9;ll0RLnoQrR;i0ri0;by,dFY;ciolRhure2ks6;et0RV;aynGi0S7;a10e0Ki0FoUuSyR;a0QHer,sl0tG;ch1iKmRss9;iCly,p;a0Ac07ftLise05ke,l3m04n03o00queZsXtWuUwTy0S4zR;eRi0;!r,t;!eOFl6th0;ch,sR;e01HsRT;e5os,t07B;by,l6ni0sRto;an,e0RUm2on;loA;kRzy;!sR;!hOV;an,en6Pi0AKk,stea0Q8;ie,me0ROp;au,tR;!ie4;e,hSkRq;er0EP;et0GYon;ch,n;ck,e,lW9sStR;chl6es;afSe,pRti02W;i02Vo;ul0PAy;a05ciCe04g02i00mZn9pXquAsUtSv0D8wR;!elE;eRot,zm2;!l,s;p3sRweE;aRe,m2;c,ty;auNeR;au00DlB;a02Om0o;gRss0;ht1;an,gRhe0B9o;!an;!lm2ry;m0nXS;btr0GDco,gXiWmTnSpoRr6ul6w000y;!nC;daEe,l6t;!er,n0oSpR;!e,on,sP;ul;k,n;an,g2noR;liO;a5Sb5Oc5Hd5Ee0HBf5Cg58ha7i53je,l4Km44n3Do38p32qu2Zr1Ys1Kt18u00vXwUxSyRze0OZ;!le,nJ;!e,wR;ortN8;an,eSh0FOie,n,pR;laQ;ll,n;at0Q3eSiR;er,lli1;n6re0QEy;a0A2br0Vc0Td0Resl2g0Pi0Ol0Mn0Kp0Jr05s02tUvRy0;e09VrR;a0JJeR;tDur;aWeTinS8o,r0D8ts,uR;!e,rR;e,i0;au,lSnaPrR;mar05Xo09O;eY8li0;nRrd,ut;ce0IXt;e5inSsR;e5o09J;e5s;a03b02c01e0GGgeoBnoy04Vo0PNrYsXtSvR;al,ilB;!eTiSoR;is,re0AP;al,en,g0KBn;!au,mRv0AN;anc0O3;ol08Jy;auSi0oR;is,ux;d,lt;amb0SelBh26y;er1i0oAr1;ge,nt,uN;al,e5iVNry;ih2seEtR;er,ry,y;a0NXbe5l,oRt0;m08Dn;llaOKyk;hlRn1;an,in;e,rR;ay,et,y;!hR;!our1y;oRun;nRu07I;!ne;a01eZinYnXonWtRu2y;a7eTiRon,r9y;!nR;et,i;!n3XrR;!eE;!n04;am,o0CV;!e5ot;!laQsR;!l0NY;!rd;and6e03gr02in01mZni0perYsXtR;aTeSiRo07G;!ch,lBn;!g2l0NT;!nSsR;ch04Q;te,zo;!et070i0OM;ec;aRouXB;!t0GK;sc099;ay,o0H9;le0OGn1F;a0Qb0Mc0Ld0Ge0NDiLNk0Fl0Em0An03o01p00rVsUtTvR;eRilB;si0;e0GTis;et088in,oZS;!aUeTiSoRve5y;n,w;e,g2ve5;c,ia,nD;d082w0B5;or1r1;a,nR;!el;eUiSo,uR;!d,t;c,e4lR;le5;au0HDc0B3e,illY5lRr,tI7y;is,lR;!i0;aTe5iRo0H3;er,nR;boe0K0;n,vI;ey,iIM;e,um;aUeTi0oRy;ba,nR;!ni0;au,li0y;!ll0LBs0IH;or2;eTiSo0C7ussRyZ0;ie09H;e04VlBn;au,il068t0ALy;n0CHz0JQ;eSiR;er,ll0BZn;r9t;eVin,l6pRs0LY;eSiRl3;e09UnEP;quRss;esC;!laQm2;g2kUlTmb0MJnSp0tR;e,wa4;!e082;ah2ey,id0IV;e040m2s0LO;a0Gc0Fd0Ee0Cf0Ag0ilBkl3l08n04obloIr01sWtTvRw09Z;eRilB;nt,rK;aSeT7inXUo,reR;!cZWe,miCr0HJ;!nt,r0I8;eSig0HBtantinR;e5idG;ilSnR;ti0G5;!l0;aRoy;dRth;o,t;!aissa0FUeSiIoR;lRDrs;l010rR;!oy,y;e88in,oR;g0KVn;ieUJlanRor06D;d,s;be0LNfrRry;oy;e,ie,oXT;au04Mie0FJ;nt,rr082;a05b04d8e02mXpStR;e,oA;aSeRlaisZIs,t1;au,re;gn0ARiSn,rR;et,iOti0FI;n,r1;aTeSinR;as0FO;fo7r07tD;nRrt3;da,fo7;au,fo7ll0GKr,tR;e,te;!eF2;rt3s;!a08b07c06dcoBe04fo7g2i03lXmWoTpSs1umb0DCviRweE;lBn;!itZSr1;!mbSnRpy,v0;!ey,ge;!eGLi0;a7orJ;!aVeUiRon;a7er,gDInR;gRi,s1;e,fo7;!la,mo0EQr9s1ttJ;do,rd;gn1ndrG;gRm2s,ttHGy;ro0E6;l03No7;eFon,uSI;bCMc04CfoFgiaco0I3m0EKnge0KErd,s;f07TgnUmb0HBnSpHri0tR;e0KYou;!dri5teR;!au,rH;aTey;an,d0L7e07RgThl2nR;aRe;c,rd;er,i0JE;fRoCre,sYU;eHFi03V;eRliM;!beRr4y;cq;hTkRol0FJu;buS1erRriE;!h068;aFeRl3oLHranJu;nSrRt;!ie;be0JB;a,bTeSieRo,uRV;rs0ED;l0JQrt,t0JOy;!an,s;c0IWdy,lRstGt0JZ;!ie,li0;kiR;ew0J7;a0De04i00oUuRym0;e0KGin,k6mpn0ne094re,sR;e5iRse5t1;auTN;at4ch0g0C1isHmGnWFp3r07SssVtTuSwR;!e0HH;at4dep0EYet02Pgh,st1ti0;!uR;c0IKs;!e08Won;c0IInStR;esKher05Y;!chRe;!amU3;aWde,mTn0G8rRsKwe0K3;c,ge,iRk,ou0DH;ce,n0EP;enRmo0ICo0ICps1;ce5sRts;!at,on;ne,rStRvG;h0on;hih0I9wa06Gy;e04fl3i01me0I6n00pYrXuTvRxt1ypi0JU;eRi0;!au,l02KrPt;chTsR;en,iRs;er,ng;er05P;dy,eJ2ks1m0G9os,t1;in,pRro07T;!e07Y;cy,g,n1;ng,rR;ea0J7moRo2B;nt,unt;sRys;!se0HR;a06b04c02d,e00fZg0GPlsJmYnWoVpr09YrUsTtSucciu,vaR;di0li0;o2Or0DZ;i04se;ce,i0oc0E6roCs;l0H2t;el0H5qR;-ma05Tui0GI;in0BDonJ;fo;pNWsR;zyW;cReroOoC;ariACiu,oC;aReF;rd3;ncio0I1rSzyR;ns0CM;dTTlR;a,o;a29e18i0MlebOImile00To07rXuRva0GNwe;!a0AGbVgg,lleUAngUp3rSsseR;re09A;as,chR;!iEwa7;!ful086;ac,b07Cry;eZiRystofa04M;q0FKsR;ho0HtR;a3eViTmaC9oR;ffeRpheR;rs1;aSnRs1;!-saint-aG1;ns8;ti8v06A;!i03l01mYnXpWqu9rUse,tTuRw,yWA;aRin03ng,pingoS2;n,rt;a7em;au,eRus;l,t;chSDin,p3ti2;a7g;ba7ed6iSyR;sh0C4;c0BSl01S;aRetDl9;rd,s;!nRsy;a7ie4;a0Bb0Ac06dKJgJBk04l02maAn00oYpXqueWrVsStour0CLu,vHzR;m0H6y;hoSoR;gClm;lm;iae0D4on;!t006;chaKewy2pa;dRvit01N;iOo;!g,iR;c,q08P;dRl0C9shJPt1;!reCGs;ahaRhaO;ki0C6;co0FBhSoR;iCr0FEu;akM8ipR;e,pe;ok;neKss1;!b0PcrouCd0Ne0Mf0Kikhelze3l0Im3Kn0Do0Br03s00uMvR;aWeVig0BSrR;aSeRi0on;au,fi03Ml,ry,tDuOJ;iRrd;nv021;au,s,tD;gnHlSn2OrPuR;di1Lx;!eXBi0;!b031in,l6neSsR;er,ie;au,veF;aYSby,edarXf07Hh0H1iWkVl0BAnToSrRubiO;i0y;n,ux;eRo0C7;s0AKy;ao0DSez;es,f;yk;n87uehR;in8;!aUeTiSk,neRu;q0DMtD;a0COer;au,d4l,veGT;il,rd,ux;ag0lRn0t0CL;ew;!devRf0;ergCilB;n6s09Iva032zo;aRo4;le0G3;in,rR;a,ou02H;!b2Ld2Kf2Ig2Hi2Dl29m1Vn1Louig1Kp18queI7r0Ls0Et08uZvSwigRyQCz0GD;noinP1ou2I;aVeSig0AQoR;n1Ry0;rRz;lRt,y;an0BY;neRtD;lBt;!bYch9diXffo00BmWnt,ssTt3vR;eRin;au,tYE;eSoR;nn9;!gr07Yl;eH3o094;er,ll1;eFo;al,eTiSoRte046;s,u97;g0A8ll1;auSlR;!a3leVXoA;!loAne0BVveF;aube0A4lGpo0FCsUtR;aMeR;ignRna030;er,y;agCeRie;!loRy;up;a0Cb0Ad07e06i05l01m2n00penZrWtTuSvR;a08NeYT;er4;erLi0on,rR;aRe,in;in,nd,w,y;eSiRoFYu5;erJ;ti0;!ti0;e5l6;aQeSi0oRt1y;k,p3t3;boApRry,sw0C6t1;la3;g09Ch;l,st,tD;!onRr1;!aAneR;re5t;onnRy;e5i0;de,ux;a00dZeWin,lVm2oUpSr1uR;t,y;elRr1;!l0CG;n,t1;e5in;au,lRr1;a3eMQiXHlR;an,e,ie4;elRR;c0E3dRis;e5os;an9on9;a7cXdUe,f33g,kaCnTtRu;!eloRig08WreE;is,up;aBQeEon;eY1oR;iB4nR;aAn03G;eRy;li0rR;elB;a02bVel08HoApR;!aSbeEe5iRla3o0DUy;g08Lon;gCnR;oAy;aWeSly,oR;n,y;foFrR;lRot,s013;aRin;in,nd;ll1ud;ilRnDOrd;la7;iSk,le,me00En0ou077uR;mHpe5t;fouRne;r,x;f,gnTll07Zne,r9sR;e,sR;e02Aon;aUQe06G;n1ot;f0icoR;in9;iL8r1wiI;a,eSle,oRri0;illeSJt,y1;l,rt;a0Bc08d07el06l03n00rUsTtSvaRwiI;ll05D;chTDo;s0ALv9;anto0B2ch07Gd2eViTmina09AtoSutX6vaR;ntG;siO;co0AZni,sR;a06Ji0;!nz0C2tX1;d0CCsStR;e06Pis;i0ky;aQeriQXlSoR;ne,r1;a7e,i0;an,eu;il07Ur07J;cRi4;hetRucVV;o,to;cy,r0B4s0C1;b5Pc5Ld5Ger0B3f5Fg5Ah59i4Zke,l4Gm3Vn3Fou3Ep31q30r1Os0St0Gu08v01wZyXzR;aTeR;lRn14s,tD;aAi0;!b1iKElRuNva05V;!eRis;!de;a,eRia;n,r;st1thoR;rnJ;aWeSiR;c18o0A8;!llSn0rRz08P;hiEly;ec,muR;ll9;llaY9naUL;chXdeWfIWgVlUmSpolL0r1sRvY5x,z3;l6signM0;aRe,o05F;rt3;!e,fIS;hl2;n,r2;on,y;aZchewZ0elYhVin,l3m2ry,tRud0C3y;!aSeRin,on;au,m2;bRdc0AW;ri01H;a09PcaFeRie;rRy;wo001;!anUXliPQ;fSlRn0AQr5;a7HogC;a7or01J;a0Gca0Fe0Dg0Ch0Ai07kPo09Is01tRvane2weE;aZeWiTle,oSrR;ataXMid,o;nguYL;llRn;eRo0B9;!ro;lRn,r;!lR;!i,oMX;g09GiMra;!aVeSiRon;dy,n,o,s0B0v07P;!lSnRsKtDvLL;eu043;lo,ot,s;b1gnGnYEr,t;l095mZ5nR;!gR;!hi04K;aRet0A6m2;baI;ra3;llRne079t,y;a,es,i;gnJRnJR;!calVd030lUuTvR;anY3ecR;ch09V;b1lt;e,s;en05I;a0Yb0Vc0Ud0Qe0Pfn054i0Ok3l0Im0Gn0Eo0Dp09rZsYtUuTvR;aj0AUeR;ll,r,th;el,fHl08N;e,hwrTiSoRwrTy;is,la042;er,g08Os;ig06P;t073weE;!eWiToSri0uthR;!eX5;n,ue;erSgRl09KnOZsK;an,n2;!eL;!au,iTl,rStRy;!ot,te;!e,ot;a,ra;enTiSonR;cy;n,o;et,tKE;!beCll,nJs3;ah2eRovaB;!gPll,t,y;an,ichaHoR;dy,ni,si03G;eViTo2YsSuR;cT1er;en,on;!er,nRtTV;!e,g,i;!au,n,t1;gn2otDsK;au,l07RsDtS8w;arKQeTiRonRCucSU;ff,ll1nR;!al,et;au,moCn5r1;a07Lhi05G;erSonRy;a05Oe,neHR;ry,y;c048gNAmTnR;d,gRi;e,iJ;ag02W;uerH;d02e00iZlYoWpTr1sSuR;a02Tst3to;el,tiI;ayJeRi0Ol1;!lR;a00Jl5C;n05MrR;iSAusc02W;an,et,is,o08X;el08Ano,strS5;lRr07T;!i0lo;evTY;etDs;a01cil06Vd00ge,iXnWoVtRuH;aTeSiRlebrW0reEweEy;!e,ll1;!au,l06S;is,ra;l,ni03T;a08Jey,on;ch1e,no,q079v9zarezR;rodriR;gu030;fie,ie,on,y;an,cUma,pBrdRv8;!bR;laR;nc;!hi08A;a07b03eZirBDleVLoApSro08BuR;!sRR;!aTbSd1e5fF7hHi1li,oRsaE;!lie07Ks;elMY;gnTnR;a,el069iR;el07I;aVJot;!lZ6rR;er,lRon;aXBinR;!g;eTiR4oSrR;ay,ia;t,urA;ll,rYZ;cA4nTrRsK;ai4delRet,go,ra;!la;e,n;a07bHTc06d04e03gaU0i02ki06DlVm2n2oUt1uTvR;eRo;!rt;o04Hya;t,uGO;aVeUf02JiRon;e4gShRs06W;oo;an,n1;fl06Qi,ya;ghT5h2nRry;!d0;!nd02C;g2n6vTN;erRoro05GweE;!i05Ion03Y;agnZSi;bRdo,ge,is;ak026reK;j00RlUmo,n,rnTsR;ey,sR;ac,eW4ie;ey,s;hVlRteBV;aOIeToR;l,n98tPQuR;etPPx;!te5;auNi0;aCiE;eUlR;e,iR;!e051oR;stT3;!laA;aT1fr6;a,de,eUiToSrRy;in,on;r9t,uT4;e06Nn;au,l04UnOGt;chioTe01KheSiR;uc;liev4ry;ne,tQQ;aSeRot,r06U;do02MllYS;nRr9zi0;a,ie;aMKeG5hG1iDVlCGo67r2Fu00wZyR;a06NeXkeWleVot,rSwR;at0;am,nRo04X;eRs;!r,s;s,veEL;wi02M;rs,tD;en02A;!bi0c1Ud1Se1Qff1Pg1Nh1Mi1Jj1Hki1Gl1Am17n13o12p11qu9r0Fs01tUveTxt1ySzzR;a,elKTi;at,s;te5;chWe5lVtRzVF;!eSinRon,s;e5g,o;au,m0rRt;fCTy;er,in;aFer;at05Qby,c02e01hZilaYkXqROsUtRweE;amSe02Kil055oR;n,s;enD;a7eSiR;e4ng;au,l008y;iMy;ccQM;!eRueFAy;!ll,y;vest4y;aRh;gl04O;b0Bch,d09e08fo7g05haFk02l01m2nVon,rTsStRweE;ch,neMZor01F;ey,on,taE;!a01Fe0Hi05MoR;gaYZughLwL;aUdt,eShQYie,sR;!i00N;ll,tR;!tJ;p,sh,tRy;cu;a,ey,ingE5;eShRi0F;ar03V;!tt;eSoRy;s,yC;!auNrs,ss,tt;au,k,lBt;an,eRiI;nVYtSA;ee,rPZ;er,re;na,rs,tJ;claTdoIel,gSk0loIn,tR;!iMon;ay,e;rk;aylAbrRWpR;!aR;ss;g0hVi02ClSteRwiI;au,y;!er,iSocR;h,k;a7s;er,oG;nshMK;aRe5noMMoCQ;ra,tOJ;!es,sR;sRt;ieZNon;ay,l0;aRbTYdaBgGZl03Qn9on,y00I;j,r9;a7et;cRno,t;hn0k0;d,geRze3;!on,ss;ci00hWkRl1;!eUinTleK0mSnR;am,er;an,ey0;ghPKx;lILr;an2el,koTnSoRs;lz;er,oe;wsHU;!no;a2Ie21i1Bo0BqlGuUyR;!aSdRm0sWC;gGon;nt1u;ba024che06d0e05g04in02jPlZmYnSsRye4;ad3si0;!a02UeSiRn0s1;!er,on;au,lTtR;e5tR;a,i;!l000;!a,bC6n0;e,lSoR;n,tLZ;m2on;!sR;ma;g0ni0ui0;l,ns,re;si,tt;a0Obe00Sc0Fd0Be8Rg2hl,k0AlXPm08n05o03p02qu9s00theRRuVwRy0zoLD;!nR;biEeShiEiMleRrigg,sEC;e,y;!ll;a7ghUillTlli4sRt3x,ze;e,sRt;a7e5;a7etD;!t1;n2sRt;a7e5oiMH;hy;kGmRshooMS;!f9N;eSgniaFsR;a7on;se5;eRl6wiZ1;liM;aIFer;eThSieJ3riRsGM;g016q016;ag8;r1Qur;a7co00MhVkR;e25leSm2sR;miZR;bRy;ank;aTet,uR;!corriR;ve5;eFrd;dRt;beNhZ2;a0Ec0Bd08e06ffe02Eg03kn0l01nWonVqu9sStt1w0zR;za7;!a7eSsRtG1;a7eBVon;boAto00Q;e,ne;!cUdSkRn;maWK;aRle;moME;e5k;ay,lR;!aVAon;anSd8gs,hO9nR;ac,on;di,ti;!n,rR;e,t1;auNeSgeR;m2r,s;au,lBn,t;auSkRoOY;!atGey;d,lt,t;nXLrRs,uAZ;d,t1;a06b05c03d3e02ga7i01kkeD5laQm00nZsXtTusSv9wRye11za;er,st0;sa7;hTonSsRt1;c08ky;!io,n9;ePVoLR;a,l3nah2sR;eB0oO;aQ3doIhol8iHne04z;auNm0n0;l65siYV;d,n,se;htelsRk,q;bau0;e2i35;k6rd,uJJ;baUFc0Ld0Jg0Ii0FjAZken0El6m0Dn05rd,sZtXuTvaUFwl6ySzR;eU1oYZziH;!aUD;chBd,er,lt,nRs8;!beZOeSig,scR;hneid0;is,r;h09koRt1;!vH4;cUe5i0ka,sR;a02eRfo7;au,t,urR;!jeffr6;et00HouR;pe;cVdTg0nSscoRt1vo8VzeE;mb;!iI;!a,eRt,ys;is,nV0r;hRonYO;!aRe;rd,ud;!an,bBie,ucJL;!bTK;l5AnSrl6s,thR;waiD;!ay,e;agnoZId1eloCgEC;buXJdy,eRiMly,shIA;r,tD;eUh9kSqueR;moTJ;!eRl6;n,tt;!l3;a5Yb5Xc5Qd5Le5Hg5Dh5Ai4Nl4Gm4Bn3Go3Ar2Ns28t1ZuZvYwWxe9LySzzR;er,o;anW0cTeSgo,ko,lRne,te;an,eL;keYFr,s,tt;e,hG4zOM;d8eRleL0m2n,y0;rLs;a,et,k;a1Obonn1Nc1Hd1Ce1Aff19g17h16i13jeOKl0Wm0Vn0Uqu3r07s04tWvTx,yCGzR;aCelXUiR;dy;eSi0rR;etI8;r8Kt;arXeWhTiSoRr9te,weE;n,tJu;er,n,r4;iRotI3;er,llR;etDi0;ilBt,vKG;d,ic;aY0hSquGTseR;au,rt;ie,o;asU7b09c08d04e4BgWhAlVnToSquRrLDsi0;aYe,iAX;n,te;eRivZGoy0;!uf;e7Got1;!auNcXeWiVnivZDoUuR;aSiRo3;gn1nvK3;rdTF;!in,n,t,u3;e,llaGB;at,lTSon,ry,t;hem3;aUWeSoRuTQy;is,n;auL6lRre5t;aAle;er9i0;eTonR;!nR;aAet,ie4;au,l1;aBEharTKilT5koM;a,r92;aVeTiSle,oRriUNtCP;gCn,t;anCer,n;au,rRtH3y;iUJri;di0gRng0rd,y;ay,u9;llRn,ss9;eRis,on;!re5t;allasT8id,ouL4;eRht1ie,l0o3r3G;!aROt;a7o7;!sRt;na7;eUiTjaIor,rR;e5iaRy;s,u;er,ll1n,sSZ;au,ns,t;!auNhRl3oT1reXW;aUeR;l,rRtGJ;!mRon;or3;d,rNVt,ud;et,ie4;nfLXrt,t,zR;iz;cYelXhViUk3qu3sTtR;!inRos;e5g;as,fo7;ne5;elRlingk,weE;er,lo;ho;ay1horichviVN;a04h03isRCl6qu01sUtRweE;!ed,onSrRwiI;om;!naA;anWchaVeTha7iRuF4y;e,nR;otFX;!l9rR;on,t;erBH;ge,yi;eRiL;t,z;aw,m2uyz8;!rT4;a0Cd07e05g04i02l01m2nZoYrWtSyR;!cI0;hToR;luRn;sV2zOJ;wiI;eRis,omML;maVF;n,s,t,wsAV;aAeRic,y;!m2uf;aQe;sRtzQN;d,se;es,ia,ne;!hI9lRm2r,y;!li;aUeTinSuR;as,z44;aIQg,i;!le5n,s;ge,s;wi8Q;mUnJrTsSthR;!e,m2;amSMe;ne,ze;hRs;ow0;!a0Id0He0FfanGEg0Dh0Ci0AjoanPVk,nXoWpaFsTtSvR;i01ouloKD;em6EhoW4;!aSecRpiHteH;ouIZ;int,nt;de5mo;a02eUiSoRy;de5y0;ci,eRfacPVn;l,rJul;aXbi0foWllVmUn05rTtSviRy;e,lB;!er4te;!oFM;ayeIOer;!i,y;nd,y;nnLGu;fe,llPmoG7rd,ud;calNAer,fRn;aRRerHV;omRK;arRi;s,tz;!lTPnRss;faOZ;!az,f2DuJy;!fSlRmi,nP3to;do,moFX;e,oVC;bSeisl,iR;a,n;aRerIJ;!ce,rRy;di0;aWdUeK5f,g0io,koIlTmSon,p0st0tRus,v3z;!e,on,ze;an,er;aQeK2;eRiOuc,wIC;n,rN0;ck,nKDrihOP;ardiOc0Ce0Bl08mi0ne5r07sSteRv3za7;au,ux;!a04briaQc03d1e02guil01inPJjo00la7mXonneLQraQXsSveR;nTLrL0;eUiSonRy;!e5ne5;eRnPF;re,u;!au4Bl;eRi0;!nR;e,u;ly;beF;!lB;laIS;nd4;e,on;a7eSlRy;at,et;au,v3;!s/fourSQ;hu;an,eSme,nRon,uAF;!hoPX;li0mi0n44r;asQPeBJgiThRiNYnTTue;oRus;ssi2;a,s;diThSm0rRs0UtFX;io,j2;l0m,n0;ck0;aUdTeSinRs1y;!gt1;!ch1rQ3t;igG;!h,rd;aWchicMThSkR;!us;arJYeSkR;ol66;nRr,t;ek;n,sh;aIe5i1RoO;kGrdm2;a0De07i04oTuRyR2;mRnd1ss1te5;!e,haFke,st0;cM9dgeTVem0m00nVoTuRw,ys;a7de5in,tiquR;iaTI;d,mR;!eB2;dSiaR;rz,sz;eSiR;au,n;au,el,l;b0e;er,li,nSsRtn6;h,s;!n,strubO5tz;!auVcTiSni0re5s,tteRu,weTH;!ry;cheFle;!heRk;r,t;!me;c09ecnGAg07i04k00mpiZnSquIQsRtch2Fus4BvGDz0;kavOVse;cSdReHXks,qu9veFy;iMosH;!fUhRo;a7eRfTon;rt,tR;!ie4te;ie16;ed,n;eSiRuIG;e,st1;!lRn6;ey,oIy;e,gQYnSsR;!deE;!ey;dRraLM;an,on;he,kRquI7;bWeVfo7haEin79mTstSwR;eEin,oGX;oIuI;aRer,on;n,y0;rm2;i7uR;rn;a1Tb1Qc1Md1Ge1Bg14l0Rn0Io0Gr0Bs01tZudiQ1vDDxYzR;aVeRi0;au,l2rSt,uR;il,x;niR;ak;i,ns1rR;d,ro;by;ne9Lous9tR;le,n0on;aiZcoYhXinWneS8oVsRtoHJ;etFCoRuH;nRt;!neR;auNtD;m,n;elPV;aO2inHLop;rn9;ll1;aUchTd,eF3ks,mi36oSs,tR;wistBz;le5n;!aEer,iE;b3l3;lQWnR;!di;!aYc0IdWeVgTi,kl6nRst;a,eR;nkaMTy;aEhD2le,oRs1;ld;au,t;aRia,l6;!ux;rd,sPFudGY;a02b01e00iZlSm0oR;cq,de5s,tQI;a7eViSoRsQ3y;!is,n,tALuLMvi5G;a8JngRon;!sR;!l6;coq,rRt9P;ay,on;d5nsJNotB6;au,k,ts51;au9I;de5nsKV;aVeUfo7g3hCJl0miTnSoRrLSu9;n6Lt;auNeEon;coQ5;auNlNN;nn6HouR;etD;b0dr1lUnRraugBs,tO3v0;!aiMMjonnATvR;eRilB;nu;ek,lo,maL7;aUdTeSon,wR;eEiE;au,ga4t;in58le;gu3l,rRut;d,y;hSkR;fo7l6;e,lmRotD;ei0;by,eRi;auRr1;!lt;ge,ncRrd,soO9t;hiRo;!ni;aSereR;r,ur;ng,rgaR;va;a52c4Sd4Je4Df4Cg47h45i43l2Qm2Mn20r0Ks09t02u00vilYyVzR;aNLeTi0oSuR;ko;!tD;au,nc1;ak,eSinLZor,rR;am,iG;!r,ur;acqRla7;ua;llRriKAscaF;ac;emWf0huViUk0ournCWry,tRu65y,zH;eSiRrARs;!ng0;nc32z;!e,l,s,t;i,ne;ps;anc00etDhYl0margi2nXre,sStR;er,on;ay,eTiSoR;dGn;e4s;!dRr0tDy;ik;er,i0;arRro;ah;enJRon;a13b12c11d3e0Yg0The0Si0Rk0Ql0Om0Mn0Eo0DqJYr07s1tSubeJvRwiIyn;alMEin;a04el03hWiVleUoSrR;aQoNO;lMBrR;a,elN7;r,tt;!n8C;!alJIeUiToR;!dy,ld,uR;mi0;auKTer;!lR;!eRin,ot7G;me,t;et,le,ot;l1uN;aUiSoRym2;ua7y0;cRg2n;h1il;ng0rdR;elMQ;!ua7;aVdt,eUhaTiSo8AsRuy;te3;cN0er,quIW;rd,us0;!cMYt;d5Vl,nd,qSrdiRscoOtchIT;!n7Ps;ue3O;an,eFBiRoHR;ngh9W;aQe8QingRo3;er,u9;!ar4Kinsl6BowN4;auNch1er,ni;maQ;!aELeUin,luQmSogCsR;ma,trap0;anR;!n;rMVs,v3;!be,ns,szaSy,znR;icHV;zy;i0zy;ar,eKMi1;nSrdRtNP;!elLYi,uc72;e,g0;a0AbKLc07d03e00gZh9DiXkemoWlemmoud8nVoTtSwAYzR;acN7ie,o;aou9on,t;d3thR;!m2;!arKUet,iMouL5;un;cM3gH6ng0tR;ah,i0;hoF3le;!cM0dettFWtSv01wiR;tz;!e5;aTer55haN6iRo,weE;cRs,t;ks1s1;ia,kBG;hSsR;ics;abL9en0;c7FdHne,rd,ssAvR;idG;eTiSjR;moQ;ll0s;nt,ur;a0Tbus76c0RdPe8Sf0Qh0Oi0Nk0Ml00moZoXtWusUvSyRziB;ea;al,erR;de4;e,sR;aeF;er,z;cLDin,nRuB7;!cBgP;ntJ;!a09eViSmo4oRroKuc60wa4y;mLWn,ws;a7nSsRve5;!saQ;!g0i;a03c02fZgarHYhYma4nWpercL5rVsUtSvRw,y;ilBue;!eRte;sDte;oe6Z;iFHoK;!oR;ix;acKX;eu7Fle6UoR;ntR;aiC;ouF;rGu;b9Fm0nSrt,s,vRzDT;anIA;de,ge;ir,os06;esKnI5sBve5;am0oRume6K;ciCmHZ;io4ry;hRouF;amb0er;iXmWnRrqKKu;dRey,g0;!rosR;siR;gnR;ol;ie,y;nsSrR;!boisveFe;ky;dl,gnB2qKArR;l,ne;an,ie87lR;!er;asKeUgLhiOnSuR;e8Wy;eRocK1;ts;lIAr;f4orBG;be,cVg8hl0k,ls,rTsl6tR;hRz;am,ov8;eRs;ns,r;ro58;a7dXeVfo7narUoSrR;os,y;re,s,uR;in,t;d,z;lRt;!l;inR;gt1;a7erH8hXkSot3LqueRra4Y;moEEt;!eTiSl6m2sRteL8wiI9;teL7;ng,us;!rRtt;!iH6jonG;!aRet3Ei4steJJ;mp,rR;ah,d;ch0Sd0RkGl0Qmi0Pn0Ord0Nsl6t0MuRv8;b0Kc0Ed0Af09g07h06j04l02m01noy0pZqu3rWsUtr1vR;aAe5illRolsk;aAiR;erL;aMeRoleDM;igBjo50t;aSeSiRol;vaGI;ga7;arlaDVe4iH5oFreR;!z;i0onAE;ac,e,iRne,t;eu,ga7;eRoIF;an,u;arnoAer;e,rR;aQis;a87oF;eSin,o3rR;e5y;nRt2O;esK;aVeUhRla85o4H;aSeR;!m3neL;mp;!r1;ge,i4mp;i8o3;on,s1ty;!er,ow,sl6;!s,y;sh;!e,s;fo7le,s;!em3;a61b5Uc5Ed55e54g4Yh4Xi4Mj4Kk4Hl3Pm3Mn3Bp,q5Fr1Cs0Ut0Fu00vZwa,xYyVzR;ane4elHQiSzR;o,y;nRre;!aAet;ar9IeSl6neLoRs;uk;!r,s,ur;!t0;ic;!bDJc02dYer,gXlCmVne,rUsTtSvRweHWz9;aAe,ilB;re5;ch,em0;!re;!aDSeRgart8m0oCN;lBr;a7e,h,is,y;a7eSoR;!in,n,u3;lRt;et,ogHN;heRo3H;cRr;orC;a02che01e00hZisYloun6oXri1DtR;!ah,ersViSleLu,yR;!anP;kBCsR;!tR;a,on24;hiE;g,n;se,t1;al1urFK;m2re5s;ld0;iRka;lleRni;!r;c06gaEh05i02keIQle01n0q00seYtR;!aVe,iSonR;aAe4NnaA;aOlBnR;!aRe,gs;ud;n,rR;acGUd;lRt5N;et,in;ueL;r,y;lRr9;!ieR;reL;!a,o4;hRiaBO;ieEA;a1Jb18c14d11e0Zg0Xi0Vk0Ul0RmA9n0No0Kr09s03tSutRweEz6;!a;e00hVleUm2oTrSy,zR;!ch;ow,um;liOn;tt,y;aHQeSolomR;ew,y;!lR;!eR;my;l,r;aVcTeShRky;aw;lHDt1Q;zeR;wsBG;!lHA;!aYeWiUoR;is,s,wR;cRs;liCX;auNbe83eRte5;!au,re;!au,st,ttR;e,o;clRs,te5uN;ouR;gh;dy,l9nRt,usB3y;!etRi,n9;!te;!aTeShartd,iRs;co5Wer;koCKs,tt;by,is,rd;atSeRow;tDy;i,ti;er,l6m2weE;!auNbe5er4lRte5;!l1;e5NiHoC;el;!au,ilRsK;!le;!a0Ue0GiSoRy;l,u;er,n;!eloThSi0l3TomR;be;an5U;!n,u2W;aYeViToSro,ucR;ci;sa,t3ur;erRn;!i;!au,dSlRr2Os,t;!et;or;!galFLnt,rR;esRin,y;so;bUciolECd51i4kaTmy,nRo,ta,uN;!yR;ai;s,t;aRe4Zy;na,sh;cZdXfiCEgWiFEks,liVnToSquaFs9YvilR;e,le;n,t;eRiFBon;!rm2;ac,er;s,uC4;eramusteRul9zuI;li0;e,roR;ft;bRo96s6;riRusC2;ck,dBP;a0Ec0Cd08e05fo04i03koB6lXmWoUsTty,zarR;etR;ti;e,illP;cE2gR;!h;er,ir;!aTeSie,mo4oR;n,r,w;nTt,ux,y;b6nSrR;d,iO;tyC;!arA6;ur;!nSsR;!de8N;tiC;aSiRw3;n,seBV;ccRssa4;hi8O;er,h8omR;!be;nTsSux,wRzs;yd0;h,y;!g0;er,ke,oR;!pR;an72;alsRejoaquEVol9;hi;e00gYj99lUnRrd,sl6vy;!brSes,vR;ilB;idAO;!eTlR;arRe,iJon,y;d,geDF;s,y;neRuy;!e,t;rl;am,k,l,ng,o66ri;aVdaBMgUhTl6nSoRweE;t,ut;ac,oO;daBJeB2;!io;na7oBFtDIu;r1Lse,t8z;aXeVgUhTiSji,orR;ek,g;a,e;am;er,l6;au,lR;!a7;cCJyaR;!c;a04en0hZkVoSqRziI;ue1A;ka,nR;!villemR;ai4;eRm2s;nsRs;hy8tR;oe;!aUelTkanSmRus;a89ei0;gi;et,i0;ndJrd;!diBInDUrR;ro;bWcoIeUiSne5uR;ty;c,eAZnR;!e5o;au,n,uR;!x;!iDK;b,rR;tm2;arestDKbCOcC7dBReBNfBJgB2hARiAAjA9kA1l7Em6En4Qo4Kp4Bquin4Ar2Ls1Vt1Nu0Fv06w04x02yWzR;aUeSuel5HzR;ie,ol3;iRve8R;ls;ou4PrCA;ad,eVlTmonSoR;tDub;d,g;eD8ifRw77;fe;rLtD;teR;rs;aRde;d,ng;aYeTiSoRra7;iCn;ce,la;lTnSrRzza6C;iEty,y;da6Ael,ir;ar,inR;e,orive8V;on,re;!b0Rc0Ld0Ef0Dg0Aksztina09l08m06n04o03p00rYsVtSvrRzCC;ay;ef,hSin,raRy;ge,y;i0ot;mait4sR;anRem;!t;as0Ee,ioRy;na7t;e,in,rR;iRy;l,x;ll1W;cRe5;hm2;aRi0o5K;is,y;d,is,otD;itA;eRi6Vr2;!a7rR;!lajoPm2;fr6mu99;eViUoSrRy;as,en;irdevaRn,u3;lt0;!beFer,ot,t,veF;bRl3s5Gt;ec,oAE;hVlaUoSuR;it;in,utuR;ri0;ir;i0u;an,eViTl9ou95rSuR;ch1t;ay,e0Dia4Xy;ch1nR;!e5g0;rtRuf;!in;al9HhWiUkinTl11mansh5Ur8HtSwoR;od;as,ia,o4;!sA4;kuaRna;pi;an61eRot;rt1;ca0Fh08i06k05p02sVtR;er,hTi0leZon,rR;aRuc;nd0;al39on;aUeSinib7LoR;um;l3nR;at;d,fSlR;!y;!f;eRir5B;ck,tR;eg20;ew,inL;macRo8T;op2V;!by,eWfo7iVlUmo4oTt1wR;eEoR;od,r7W;di2;inJ;ck,ni;!d;h,t;a1Db19c11d0Yen0Wg0Ui0Tk0Rle0Pm0Ln0Bo7Zp08rYsVtTvisSzR;ig;aAet;eRigGs,us;au,l;anSeRon;me3On0Y;de5;a4LeZiUoRu52;g1Ft3uRyo;a1HquR;ie4;aUbaTe9XgSvR;ee;hi,n2;ja;ga;lBs;aRin;ge5;au;aYdt,eXoSt,uR;p,s;is,lTtt,uR;lRx;d,t;!dR;i,y;auNl7RtDy;l,utR;!ov5D;aTbu8WitSoRst2Q;ry,ur;a5It;ly,range4;nRss;!da;eRi6Ys1;nGtt;al,el,naFrh1;aEo,uiR;mo,n;aRds,s;!t7B;!a28iSoRr1uiO;in,u3;l3Zon;aWeUhSoRul8K;iDu9;ambRet8Aule8W;auN;dRme2F;ia2K;la,nR;d,ge71;eTiSoRuthn3E;!ur;c,e,q7F;c,l3BtD;go6Amy,uR;jo;!o;aric2JeWoUpRriBt5E;elBleRs;by,gatRt1;e,h;lo,stolR;ak0S;l7Tn,rt,sR;tigR;uy;nVuR;aSendaR;ys;camRd,m;go;zo;a1Dc1Ad0Se0Pf0Mg06haNi05j81ka04le03n01onymZsXtRw7Qzoui1V;aVhiUiSle,onRra3Kun2NwiC;!el6Cs8;l,nozR;zi;au41er8;ya;al3Nbr4WelmRl6;e,ie;e,oR;us;an41e86is,lRonchis;op;it0y;!ng;st1;!a7eXiolWlUoSriRuen2C;gn1;!tR;!ti;eRophoC;haF;il6Y;au,lSrR;!er,s;!akAiUl,oR;pRsan6S;oulR;os;!dGlRs;!lo;es;oRrP;ssRusK;i,o;l6LnRt,z;harisonri5DontR;ha;e05o02rR;a2IeXiWoVusTy,zejeR;wsR;ka;ek,hR;ko2L;s,z;anjafitrimonaso6Bll1;aRch8j2Uo54ws;cSsdraR;tt0;ch0R;iSn,sR;ca;riI;graSrsR;en,s1;ve;eSl3tR;il;!au;c55iKka,r3U;a0Mb0Ee09i06m03oWplVsRu3Yyo6T;bTtR;roM;ng;er3U;em2;dWe,ncleUrSuR;re6B;!osR;o,si;meR;nt;eo;aRera63on;nn,rinR;gh0;ci,en,na1Qot,rauStraR;no;lt,x;au,deJga,lUriSsR;!se;auNci,ndiR;enC;l,ot;eWlVoTroR;iKsR;io;iKrsR;ki;et1;auNlt1r;lt;bTdSnd0raRto;l,nD;ei;iBle;a26b1Sc1Pd1Je1Afa19g17i13k10l0Km0Bo07poFqui06t01vUwTyR;!wR;a7in;yn;arSeR;s,ze;adoRez,i\xF1o/cend\xE1n;!/R;alvari\xF1o,hern\xE1ndSjimRsalvatier1M;enR;ez;enUhTiCmanRrog1B;!shR;of0;ot;bu2S;nn;iSnR;ze;!gRse;ny;aXeUonSqR;ui1V;d,tebraRy;vo;iSrR;as;da;in,nRsi;sa;a04bu4Zcr1LeZiWly,maQoUsSui2VyR;cPn;oRt1;pp;!cRi4uch21;co;an,cPes,nRot,ss1;otD;te;gTnSynJ;!e;bu22s;r0XueR;de;i4maQtt;nd;enbShatib,iR;re,shw2;raIu1V;!as,brSeRn,s,x,y03;ff;anR;do;er,onqRr3ui4;uiC;no,ro;auYgXksejWsandVxR;!andR;er,rR;ovR;it0A;riO;ev;i,re;me;erUrSubR;ae;eIidR;ge;diRs;ce;aSoR;mbraIrn;n,r1I;anes03eZin,oeYrTuRy;feRry,s;ra;eSigR;ht;cStR;ch;ht,k;uf;e,rR;gativRic,ti;ezR;za;e,i;bWhmVigBjar3rTvR;oiC;ne;c1ie;le;ed;ri;a0HeVhTiR;kis2Sn,rR;ow;urR;st;l6rRy;l6s;ey;mo;au,d06gr1k04ll03nYrWssUtRzua3;chSkRzm2;en,in;is1;aoR;ui;d,olR;di;ey,sR;buTlPwR;orR;th;ry;erP;enL;!s;a0Te;e00iZlXmaVo,rSuR;na;beSoR;ns1;rg;di,raO;ni;faRst8;ng0;er,gi2na;lo,rn;a05e04harokh,is,nZrWuR;eTiR;ar,laR;r,s;ni0ttR;az;et,iR;coR;la;an9eR;lSsRw;si;li;et;!lAma,rs;gRr;ni0;fSinogenR;ov;leI;ck;reWsR;chRi;baR;ch0;am04d02eXhem0PicVjeTkiSl0na3olpRra3;he;ns;ngR;ue;hoR;ut;lTrhRs;olR;dt;in,speR;rg0;a,isR;!on;i,ovRyk;icz;a05c02e01hZicYkVoTqu3teR;au,s1;in;rd,stadesamiYul1;on;eRle;rm2t;an;ia;a7er,im,oR;n,ur;to;a7ettulR;lo;rd;st0;er;a0Kb0Gd0De05graEir03oYrTuR;d,kabR;ar;aSiR;gu;mSn,ssaF;rt;es,s;i4uR;d,ssR;aRir;fy;re;ou;ll;cassAlWnVrSyR;ta;crombPoR;ux;ie;aquAd;in,ly;is;elmoum8oulkarR;im;en;oTruzzRs;eKo;se;tt;re,siRt;al;ad|Gerund\xA6accord0be0develop0go0result0stain0;ing|Negative\xA6n0;ever,o0;!n,t|QuestionWord\xA6how3wh0;at,e1ich,o0y;!m,se;n,re; come,'s|Singular\xA6aZbUcPdLeJfFgEhCici02jel00lunch,mAn9others,p7question mark,r6s3t1us 0;dollQstR; rex,ax return,h0ic,ragedy,v show;ere,iZ;t0uper bowl,ystZ;riXu0;dEff;alToom;atCroblVu0;d7rpose;othiSumbE;ayfPee7o0;del,nopoO;ead start,ome0;! run;adfLirlHlaci9od,rand slam,ulL;amiKly,olKr1un0;diL;iFos0;tiJ;conomy,gg,ner3v0xampE;ent;eath,inn2o0ragonfE;cument6g0iDlDor;gy;er;an3eiliChocol2i0ottage,redit card;ty,vil w0;ar;ate;ary;anki7o0reakfast,utterf5;tt2y0;fri0;end;le;d1noma0;ly; homin1vertisi0;ng;em|FirstName\xA60:20;a23b1Wc1Pd1Ie18f16g12h10i0Vj0Nk0Hl09mYnToSpayton,rLsDt9uri8vi7w6y4z1;i2o1;e,la;!on;a1i,u;ci20el;ei,illow;ctoire,ta;ah,el;a3eag0Ch2oby,y1;!r1H;anh,eo,i1G;o,rD;a5e0Lhi26i4ky3o1tev0unny,y4;l,r1;a,y;!l16;dn0K;c2m1s2;!my,y;ha;a6hett,i5o1ylN;b3haZm2n1ry;i,n0;aOi,y;yn;o,v0W;iz1Jny,ylH;ceTly,ri;a4goc,i2o1;a0Nha,va;cola,hal,k1ma;ita,ki;mrit,ss0G;a4i1y0L;c0Hen2ko,l1nh,rac0W;an0Ko;moh,s0F;ckenz0e5ko,l3me,noa,r02x2y1;ka,s0O;en0Yym;ek,i1;!k;!l1;ee;a7e5ie4o1uka;a2ga2r0Hu1;!ca,ka;nn;l,v;evy,n1;n0Yy;mar,ur0U;a2e1inslKrN;nzRziY;el,i3mali,y1;a,l1;an;!ri;a6ess4i3o2u1;de,les,no,sti0E;ey,od,rda0Gud;l,ng;i1y;ca,e;de,el,m0n0y1;dXm0;ma4ndia3r2sa1;!yK;a,is;na;an,ni;arl1eavRima0K;ey;a3enes2ian06ur1;jaap,sehaj;is;by,el,li,ya;avour,r1;ank0ederik;d0l2mil1nzo,ya,z08;ie,y;i4ly,y1;!a1;!k1ne;im;!a3j2m,ot,s1y2;ee,ha;ah;!h;a5en3y1;lan1;!n;iz,v1;er;n1ya;a,i;amil6eDh1larenD;a2rist1;en;rl1va;e1ie;e,y;le;araa,e5il3l1;ayke,ess1;!ing;al,l0;ie;atri1ni;ce;arHdFiEkiDlBm8n6r4s3x7ya2z1;a6ur;ne;a,sil;a,ie,lo,ma1;ni;a1drea,ge;el;an2e1;lia,n;i,y;ae,e1ik,yx;c,xy;ra;!ssa;a1en;ma;ya|FemaleName\xA60:1EQ;1:1BR;2:1EN;3:1BM;4:1ER;5:1E4;6:1DW;7:1A2;8:1BP;9:1E8;A:1A8;B:1EP;C:1E7;D:1ED;E:1DN;F:1BZ;G:1CM;H:11V;I:1AZ;J:1E6;K:19D;L:1BB;M:15P;N:1CT;O:1EU;P:1DH;Q:1C9;a10Fb0XDc0SHd0P4e0JRf0HMg0FUh0DOi0BXj07Tk02ElVLmMPnJAoI7pGWqGOrD2s74t4Ru4Jv3Aw2Jx2By0VzR;a0Ie09h07i03laFoUuSyR;a,be7lah-l1ET;h7l0O9riR;-0UDshadd0BF;eThSi0WJraRyP;!l3na;ar,ee,ra;-Ue06IlTyR;!-R;em14Omitche0E9;ie,ly,y;an1jaKlRm0WTs17V;ee,ou;aTlSm0YHnRs0ZWva,x1BTya;a,eb,ob2;aBi096;!h,nn;aRor;n1BSoSFr2;a,b4e0h7ina1XlXmWnTphyr,yR;a,nR;ab,ep;aSdRi8n0MWo;a8e8;!ba,iK;i7o7;da,iRla,ma,ya;a18Ne,ka;da,fBOh01i00ky7lZma7nXrUwa0GHyR;aSnR;a1Meb;!-g1DLh,na;aReHia187m5Qsh0XYya;!-Rh,l3;aIkathr1CQ;ai1CQeRiy4;ka,lQ;ia,ma;a,dy,na1Era,yn4;-ki8eQiSCl2raPya;a0Ne0IhssHi0Gl0Fn0Eo06r05s03uVvRz1CW;aRetLia0on1BQ;!nR;a,naR;!-jam1B1;eXkVliUmTnaSriRsr0C6;e,tzi;!-leiD;i,n4;a073sM;!iR;!ma;!lia085;aRee,id7;b0KYl3;abJis;chevMOh1BCko,lXmWnaVsUuRvj0NW;d13ZmRn3s130;aRna;!ly,n1AK;rPsa,t1AI;!-0IGh;i0na;an1BYie;esMs5;an19Oiz2;dRmko14Bn,t11Oyi;es,ja;gan03Zhud1C4lUmSn11MrRsZva,za;az,i;eRi;li,n;e0i;cout,elle08f197gm12Uhei128l1BOm06n01o,p00qui1rYsTthzi17Iume1D8zminR;!eR;!-l0P0;hTmSna,sR;en2mi1;in16Hyn;aRiOo1BIvi1D2;-pau0JUshrE;aBitzRosla19V;ah,i;a117d0PQ;a,eTiSnR;aOQeQie;e,s-a1AQ;isy-th0RNlRt;ie,le,y;aRelCile146;lV8ma;!-RH;aXeUiRu113;aSnR;!ni06Z;!o;l0BPnR;aRia,na;!b;ly,ri4v0TJy4;a07e04h03iToSrHynR;n,t12Y;lann-hadasMre;am,dYlUnSssaR;l,m;g,ifrLBniRo0t12U;e,frLA;a19Idaigne-keyM3hel07Fia0GVlRma;aSiaR;!n0W7;!mi0;aRe0L2maJ;d,elC;i0PSydy4;che12Eli0IRndRsterl1AI;aECi9yR;!am;ad,bWcte0dZCfVhi1AGjiAm4nUrTsSthR;a08Ce09H;ia,ko0n,siD;dPis;da,isAya;a,i8o;aTiR;go1BTnR;chiku0ZOjuk0ZO;go1BRqu18O;a0Ke0EiRyckt11Z;an0Cc06d05en0k04malenthirara1BPn03oYrXtVusAvRya17M;iRy0LK;aRen19S;!nR;!a,e,n14Z;aRt11T;l3ny;eld1A9gin3;lRna;a,etR;-Na,tR;a,eR;!-sylv2;a,ud1B7;a,tor0SF;a,eCya;ha7k0U8torR;iSyR;a,nH6;aRne;!-R;lEna0ZYro5;aPna;da,e,ga,ka,lVnUrSsR;elinLHna8;a0M5n0K8oniR;caGka,q11V;dJus;ma,our0D3;dex-ludnilDea,i04lXnUrsiOsSyR;da,la;h8iliRti-twumwa4;ki,sa;de188es0B6iSnaRya;!r03H;a,en0Z4sa;a0brun4eRi117;nVrRsO;iRy;a18ReRya;!-R;f09ZnicoC;c18Jti0;a0sha17G;asheshk16Nd19FlriOmVndi0rTssiStRwa5yH;shemaRtuqi,ussma0YC;shk0ML;ielleRsuD;!-felic2;aRme-habi0YS;!iR;ma,z4;a1Cch19e0Wh0Hi08o04rXsWuUySziR;po0ZKr196vi;aRpha1ra;h-suz0WPn16Er4;lRraif4sh02Qy0XY;a,laug0Y3;hinguFi0S8owenha5;acWevi0iRu0UUyc2;a0c2nTsRx3;hRta;!a0SUiFya;a,iR;dy-j2ItyG;ey,i9y;leHnTrSuRva;ka,narFD;a141i;iPya;aWes3fVguidUh8kwaach16OlQmTnSowenno5ph08VrUshaRt0RZwaloDya15Oza-an11S;!n2;!a,hina1w4;a,ea;an0D2;a7fa0ZX;!-Nm0PCnSrR;a,i-16Iyh;aGelCna;aYeSiRomasi0r0XQ;a,piOyQXzi011;aUl0YGnu0TOoTresR;aRe;!-m11G;do7f0FD;!-RlGX;j050ro5;fa10Ois,ksig196lUnTrRshvEL;aRi0;!h,jie-milla13I;a,i0ya;iSl8yR;!a152sA;a,e0Q3sM;a02g01h00iXlMnnessEoWrUsRtchenRKv0ULya150;h191ni0UTsR;!aBie,nR;i0URy0UR;eRi,ri9;sa,za;do7na;aRokerat0RZ;!koR;ianakhHronhiaketskwH;a,ila-0TC;an,re0WL;!ira-justi17Z;aSeR;fig0ZLrgnim15M;kounLn0UR;a0Gb0Fe0SVh0Ei0Ckar0Bl05m02nZpaFrXsUtTvayAwa0yR;a,c0ABi7la,ma,siR;a,r;ia0um;ha,mi4nRs3;e15EiRu0WYym;m9n;aRh016rG1;!-l0J7nn0RJ;a,eekAha,iSjRw16Tya;ee0;a,ka,na,sA;aSe7iRm0RAra,y159;!ka,la,ra;l3mi,n14Hra;aViTlSohserenha05OyR;!a,na;ul4y;!aRe,n9tAy4;!h0B3n12A;!ny-sto12Dr;a,onh166;akorihonnienni0XRb17Mma,na,sR;ha0OZs2;el,i7;atAea,itAytA;ib4ra;a41c3Ve3Eh28i1Rk1Kl1Jo0Pplend0Orish13Ut0AuYveXwWyR;bUdTe16BlSmo1nnafErR;i1ynnaBY;a,ia,vi6;elCra;el179il179;a7eacA;a,tla0;!e01hZkhroLFlYmWnVrUsSu0zR;anKUetLie,y,zanne-r03W;anRi9;!a,e,n0QD;a,bi,i9y;eeFn3sa;aRmerD3;i8yaB;mi,ta0;aRi7ryT8;ni,s8yD;!da,llH;aZeR;fXlSphR;anDRy9;a,lR;aRie;!-R;ben0UGjo06Al0T5mRro5;ax;ani6fy;cSe0X9rRv3;!eiOla;ey,i9yR;!-R;malaik4sRO;eur-di082iK;aIf0Fh0Dk0Cl08mi1n05phXrUs4YuR;he08LjSkAmayRndo15KralXIwai0VC;a,y4;an8oud;a8b4cAeSiRya;a1ne;na,ya;iSyR;!a1;aTeR;!-R;an1laJGro5;!-Rn1;anRe11Nje0T3lEmilani8ro5vi0;aJge0DC;!dSg12ViRja,o0VIya;!a,ta,ya;os,ra;aTeSiRk13B;n9z4;aFAdad,il,nMC;ia,ne,rXA;a2Bh0;a14FeR;il2me;iRya;aRya;!-Rn1;an1eliXTirHkahe0maRro5;e,r2;eynai0A6oan9;aWyR;-Ua14Ze0OWlR;aRee,ie;!rR;!-le2H;g13RlE;ina-naZZya;a04b03d7e02fa,hamGik121ka,l01mXnWoVrTsSyaR;!me;il8si;a,eRi1ta;en,lCm;bh0U4u0QT;ac0OSdy;a,i,on139rR;aRit;h,nRt;!p0TD;i1la,oe,v2ya;la,n11Rr0SY;el,ylC;!nRr,si;a,naR;!-p0XF;a09e00iVo0rTter0uSyR;an1laBrJ;bhFni9T;eyaRi8;-0A6ni;f7iqu126loh,rRvay155;a,el,lR;eyRi,y;!-R;aIelysE;a,ba,e0iYk17lUmeDrSs0PWun,yR;a,n13U;da0W3iRl11Nr0O1yl;!d0TFfa,ne;by,cy,ia,lTsRy;eRy;a0LXy;a,ey,ie,s0YQy;la,nd13U;d0GAe0Ch0Ai07k06lQm04nXol0RErTu0vy,w0yRzm4;a1lRna,o14U;a,ee;aTi,lRon9r135;e13CiRotLyG;a1e,ne;!np0SH;aWda,elCiUnSon12TyR;!lEss;aRon,y;!-m0VD;!a,eRmH;!-p0VJ;!a8el-regi0is,ya;!aRim,rutAyr4;!elCi7;aik02Ii7;l10Zma,nRtr14A;a,dRi;el,y;d,iR;da,n0D1;lCm3;a0WYb06f05hCPlZmsemi0JKn105oYpho7rUtTve0ZAyR;chJnabouR;!-aZ3;aye0S1i8;aTenRi1va1y;!aRi05I;!-sa0W3;!fi0h,pLNy01T;hye12DyouYC;enSiRma,wa;na,pA;aRe;!-R;mariMrR;o5uby;i0o7;asti0J6e0Q0;arletVhSil2oR;tl125;eRnei0E6;fe0YQkRlumiJ;in4;!t08M;a1Bb18d16f13ga,h12i10j0Zk0Yl0Um0Hn0Eo0Dp0ArWsVt9EvSw121yR;a0Q7da,uV4;anRy;aRnaB;!hG;k0WOviO;aSedo,g0ZLiRk0TXraBv2;na,ta;!-ZdjEhRi,l12Yn;!-Ri,mE;aWdanieCeVjZk0YHlSm0L6ny,tR;at0OShille108;au0SZeSi1oRyn1;u,ve;ey4;l0UIve;dr0ONli12Dngel0SP;e0Y7jSkelVUlRm0KZro5;ee,y5;a0HPe0PL;at3hR;iRy7;r6ya;ir5na;aSdRi0FFjhp0QPna;r0VYy;!a,e,h,yaB;aZiYmXouh0R8rWsa7uSyR;a,ukktA;a-z0SKelR;a-ort5YlR;a,eR;!-valer3;awiy,eHin;arrydji,y0TD;a,e,l8na,raB;!a,elCh,ntTr0Y1yaR;-lRh;ee7;ah,ha;amaFeTima02Zl0OVmaSo0O8sabeeDwa,yR;ma,na;!-TL;e0ha;inaBu7;a,d4ee0;a10Ada,ge,nRt127yuD;a,t;as7i0QP;aSiRy0W0;a02Pra,y0TU;!a,e,r3;e,iRor4;a,eNI;a,elDiSouma0R3riR;n6ya;a0ha,le,n6;ja06LnR;u0O2viO;a2Ke24h1Yi1Ho04uXyR;lUmStaR;j,l;!aRe;!s5;eRie,l6;eNLi0P6;bVchUdr4hi,kTmRQqa8sStR;h0LTvi;ha0;ia,me11O;my,y;a11Mby,iRyKZ;e,s;aPb11c0Zd0Yf0LLj0YHk0Wla0Vm0Sn0Qoha11Kq0Pr3sWuVwe0xUyaTzaR;lRn0;ie,y9;!l0PQ;an0Z2i6y;dX4gui108ka8ma0C7;a0AeUha0DGiTl0ZTyR;-aIanRlU3;e,n;eD5ta;!-WaVe-a0HElSmar0NOtR;er0SAta;ai1iSl6yR;!a,n0JM;a,e,ne,za0SJ;ly,nn9;aUeSmaRol0A6;e,r3th0F9;lRm0LWva;ia1y6;bViUlSnRya;chi5n6;ex3iRy;!ce;l3me9;by,elCi10K;!-XbJim0RMlTnR;aRe,i0QJn6;!-je0NB;ee,iSl0N5yR;!e,n0J5ss;a0YUce,e,nRta;a,dPe;lRro5;ee,yn0Z2;a8ua8;da,gy0RGiRna;a,da,n,sM;aSea,i0KHm0MWyR;-0V9e;!n03Iys00U;!n0YV;a8hayaR;!-so0QP;i0ri0;heRio;lHMnO;b0X6erFinR;e-07Mshi8;a05c01f0ICha00kki,mZnXtTvRwa,ya0W4;a,kR;aBy;aSeRh008;ge,l;!g9jRl9;!e,j;aRed;!d9;!a0Y3e0Y3;m,n0W5;hSkRoC;i,ny;a,eR;l0ZBre,s5;!nR;a,ie,ne,s0ZM;aVeTiSoR;da,nDV;ann0Y1ta;aRma,ya;!ya0;i1ya;aSRb03e02g0GKh01iZjane-sherrlt,lQmo0nTs0ZFta,va,yR;a0TOh0NXnR;a,eBP;aVeRka;eSsmR;ay,ey;!-R;an1ho0TR;!d,e,ta;gnRl0VWn6zy;!-cLKa;a0m0Z7;m,naWMse,va;a,eR;cRkaB;a,ca,ka;an2b0Hch0Fd0Ee0Cf0Bh09i07k06l8m03n01phael00qu0Y2shZt0YUvYwXyTzanR;!eRne;!-nour8Z;aSe,ha0la,n6sR;an,heY9;!nR;a,nP;an9en,ya;en,i0leH;a,miO;a,e,l6y;a,di,iRya;a,m9;atRl4o0;a,ouR;!la0E1;i,sh0GW;hanaZ5ma,n0S1tz0XLyaRzy;!-sou0PA;af,i0NLmaR;!-f0RH;ael0B3fa0PM;!g0MWlRya;le,yI;a,hiOou0MU;a0XDelRi0WV;!e,le;ab,i3V;aXiUuR;eenSiRods;a0nnz0X8;cy,ie,sl0UU;anSngRva;!wH;!j0V3;adi7rqan0K8tt0M4;a0Pe0Fh08i06lanLo04rRusmiF;a01eZiSo06NuR;d0EXnJ;nVsSyaR;mva0WGnO;cRha,ka;iRt8;an1lF1;cessRdar0OZ;-meri0WBe;ciRe8ma,sl0A8;euseH6ous-7J;bh,nR;a8j0HC;et-m0URlRmpin0RJppy,rt2tipA;ly,om;aRer-giova0hu,na;!-robenc3;aVeUiSoe0BNylR;is,lis;b3loR;!mCT;by,loSNnyx;jangiOnie-keR;isA;aZggy,nWou,rTtSyRz3;n0JVton0OO;it,ra;el,lSrR;i1y;!a,e,i1yn6;da,elopSiRny;el-digbeu,na;e,pe;ce,rl;dmi0X5ei0X4ge,i01lo0M5mZnXoDrWsVtTulRvesh0ya;a,eRin6;!-an0MXtL;ieRric0QUsy,t0G1;!nce-jayK;caCtRG;aske0WYfaiLisPker-Nva0SX;agioFdo7iR;ngarq,z;!elaR;!-riF;ge,sl0TFt0V9;a0Rbok0V6c0Pd0Mfe0Lh0Kk0Jl0Am08ns,o0p05rZsamuyimHtul3uTvSxRyeCzTO;an0T0sa0;ie,o;ard2b4lUmRry,sTV;!ouRy;!-4YlR;-khai0QXa0LN;e0BYfa,iR;a0maF;a-jo0J3elViTlSph0IZsAtR;iz;an55yXM;an0V2elRoC;is,le;ie,le;al9helR;iRyP;a,eG;!a0LBbelR;i1le;a,eYga,iSl3ov2uwadarasi07HweIyR;a,m0QMv2;an1eVvR;a,e,iaRya;!-Rne;jRro5;e0IMoy;!-h0KG;epeOn0S9;e0SYikioDs0S7;a0o0LP;eQl2F;alEeRiC;lRn1tL;i6le,y4;eRh7tavi6xa0;-a0BXan0TFli6;klRna;ay,yn0TQ;a1Wd1Ue16gat2ha0I5i0Lji0K6neOo00uXwiKySzR;elCia0GLowaQ;aUi0KOlTnRraBsM;ahRka;-m0KV;aTDee,ia;la,t;ha,i0JFmSnaruaq,sR;ai0RHra,sei0JY;er2id2;a0Ae06godj0TThe06Oko06Ol05o04rZtt3uUvaR;-Sh,lR;ee,ie,y9;lEr0SE;biwo,ha,m0DOnpagnasoniFrR;-alhou0TRaTeShe1iRs58;ah,ne;!en;!lho0TOne;aTci1d,eSiRma;g,ne;-zineb,en,iJl2;!hRl0HI;!-blessiPF;mi,r;a0T6weI;e,lSmR;a,i0ODy9;a,iRl0JAy;a,e,ne,se;-bJhOPl0HAmi;a09c07dehy-myr0A3h05i04k02lZmYnXsVtTv2yaR;!hR;!-luv;a,ehinaRhi8;!n-joQ;aRh045ka,si;!li;a,on;e7r0UL;aSiR;a,yy4;!j02;a,iRky;!-tayl0FS;b0REoheraMy0IV;arRel0TY;ikA;hRk0DDolePG;ar0LEoC;!l0QXmR;aciCh;a0JAch0Dda,e0Cfe0R8h0AiDl05m04n6o-nathan0GPpht02r00sYtXvUwl0QVyR;a0J9laBrSsR;a,ha;ouz;!aSeRia;!ly;!ll3ya;an8en;ri1sR;a,ia,ri1;iRland2mi1;aBsMy4;al3halR;ie,ya;a,ma;!a,i0OVlRya;!a,e,i6yR;!-Ra2Qn,ro5;a01Yro5toudamdR;je;a,emyah-makie5iR;r,ya;b0QLla,maWTva;a0INu0IN;aLeyeRonfa0IQ;!-faSU;!a0Yb0Wd0Te0PfissaU2h0Mi0Jj0Ik0Gl0Cm0Bn09om0CJr06s04tZu7vXwWySzR;an0QGek,h0EN;!aTel0CHir4lRra,sa;aRha;!a,h;!-Nb,h,la,ra;ell-paoDla;a,iRya;e,ka,ya;aThaRt3;lRnaJ;i6y;cAlL2niJsR;ha,ya;iAra,sRya;im4ou;aSdReh,g0Q4jis0MSod;i1os07J;!ayHh079;a,cRd038eO3kl0HF;i0FJy0BW;i1m3;aTeSiRy4;!e,y4;ey4ya;!h,ni;isAshatR;h7ra;ia,la,wa;!a,ca,dy7kaSlRmaBniOri0OPs0O4;aBee,la,y;!-zeinRC;a0K2eRiR6o03Wualie-lu1;lRml3r;i9le;-QeDlTmaSsAvR;aBia;!-jhen0DI;a,ie,l6y0LW;a,eSiRja7ra,ya;a,el,n6;ge,ne;a,iR;ha,la;n0I8ra;a30b2Yc2Ve1Pi0Mma0Lo08piVQrignaJ1u05waju0HByRzaliPG;-a78a02dje0JBk01lXna,oJUrRsAza;aVel3iRka,na,rh6tC;-aIaRem,ol-alexa;!de,mR;!-nehRe;ysM;!-ZIh,l3n3;aSe0QOiR;a,eGv2;!hRn0QM;!-alai8;ael93eDha0QM;!-Rh,l0PAnOrND;a00Tes0IEjaKk0N3lEro5yaneQ;jin0DZkFl0GAnSrRsk0GAtmaiWHyiM;griKiMB;aj0RSia;a02h01i00lYmo,nVrTuR;ig0RSmy,nRz0;a,i7taA;aRea,ga1i4l0OBya;h,ne;aSe0OMiRla,r0HGtim0R9y0GJ;ca,ka,q0IJ;!-seguean0O7lQ;ka,lRy;ie,y0AG;ra,sa;aEe7i0GI;na,ye;haOL;a0Qc0Mdeleeyah-mGTelDfi,h0Kiyob0OCk0Il06mi,n04qLGrXsUtTyR;aRk4;!-Nh,na;c8Yh0GOs0QXzi;ai4haRsa,ty;!ll-wahR;aj;aUberlie-hend0HMeSiRna,oDy0NR;!a5V;iRla;a,lC;!b0I7lSnRy;da,e;!ie,y;!aRdy,er0NWn3sa,t0QM;!n,y;aZdrYeXiVkk,lTow,urtuq,yR;!aRna;!nn;a,iRy;!cent,e;aRca,e-N;!n6;a,dy,e0MPna,y0FN;ed;!-Sfa062hGnR;a,e,ia,ya;ev6g0PVlili0I2m0L5ro5;aRon0PE;-0D1el099y7Q;aQrR;inZBum4;aelRKhSkaR;el095yD;aXOelRkeLla;a,e,i1le;!-Rh04Mly,nSAo,ro5;eRjaKk0LKl0PZna0PCro5savaUZv0GM;l0HPs0A;a0Td0RekelC5g0Oh0Mi0Lji1ke0OSl03moon4nZrSva,yRzi0;g0EPlia-adali0CSmo0ra,sM;al,cWedViUlTry,s2veilCyR;amRem,l;!e,on;e1ia;am,d0P4em,sM;i0HJy0HJ;ed0N4ia;anga-anYZeKFg04Yo,uR;cAtanR;!-R;lu0;a07e06i01lZoXro5uWv3yR;-a9GaSka,na,sR;si4;!-NnR;e,nR;!e,na;si1;dRrII;i0J5y;iRy06P;na,sa;-NaUeGk6n6ZsR;aSsaR;!-ja00F;!nd0FB;!-NhGn0N5ro5;aBk;ni6t;!ka,ly,ra,yu;er,jabeen-afI1rR;eHi1;!anSg3hRis;an,eRD;!e,ne;i1jR;e-l2;!gRnUA;an,hanR;!-4T;kRlyI;enRi07Q;na,z3;aRolC;l2yaJE;a5Ab59c57d4Qe4Ef4Dg49h40i3Lj3Jk3Fl2Ymad3n2Lol3pCr0Rs0Mt0Fu0Cv0Bw09x05ySzR;e,ie;-02a00beO8c3d0FRe,jo0LXkayDlXrVsRte,va,z3;aTo0L4sR;aRem;!e,m,ne;m,ne;aE7iR;d2ne;a,ee,iRo09K;!a0KOe,n9sR;!-st0FTse;!-Rh,li0na,r;diPSro5;aIlE;an0N7iTyR;me,nR;a00Te;m-ely5n6;a0B9enR;n,ss4;ee,i9y9;d9rR;aReH;!h-jK2;ea,hUiTsa,tSyR;!l0MR;ea,i083;ld6ya;ea,ildRylK;a,eR;!-elvi0DW;a,ilye-b0F8komina-k0JBoOsR;aTiR;aJ0lRva;ia,va;!ba;a1Ic1Gdi8en,g1Ci0Ajor3l04n3qu0DGrgu0DGsAt01wa,yR;!-XaUbe0FDem,ja1kaTlSsR;a,e,sa;ee,ie,ou95;!-e0IZ;!mSnR;!a,n0H8;!-bato0K6;a0g0MZiyone0KNjSka,lRyoeD;ee,ou8Z;ane0HEo0A9;a,h6inR;a,eR;!-rhoK;aVeUiRoNAy0LR;eRta-azee0M1;!-R;marl3;e,n6y-0A1;!y0;!a0MbHWeUja,ka,lTn6on,pi0DYsStRyaB;a,za;a,kAol,sa;ea,ie,l0LQou8Ly083;!-UlRm9st0EF;!a,lRou;a,eR;!-ST;a0Ac07e05felix,g0L2j04k03lZmWnVpUrSsR;o0HRt0EA;a8OoR;se,x09O;erChilip0HIi0DM;ei0F4i0;aRiracC;i,uKxR;im,y08R;aTeSi5ouRu1y0H4;!i5;a,e,on3;ur03R;im,rTN;aKe09DosEul3;lRstJu072ve;iEGle;hRlai0CH;lo05TristR;elCi0;lTnR;aJge,nR;ai0BQe;exa0HWi0LT;!-Uh,lTmSnR;!a,e,n6;!-bai00Ea,e;ie,vi,ys;cRes0CXgoret0IEjo5pauDsamantAv0CO;eWQhristi0;aSeRie,o0EUretM5uerite036;!ry;rRux;etM2iF;elRiPHy;a,i1l6;!-max0HEi8mRyP;!-roMe;a02d01e00ha,iZnYon,p09YrWsVuSviR;!tA;cSeR;!la;ci;aFo;e09ToR;op;at,re09R;-katenHa,nu,sM;!l,sMt0LH;akranFie,yG;iOl;a05e03h8iWkVlUoTu,vi0yR;!a0FMciaRe,ka,na,si4;!-hecaL;bM6r084u;ak,or083ya-UQ;aBia,y;aWc2eVha,kaUnTyaR;!hR;!-linds0CD;a,da;!-sor0HK;!jaK;!-melo069h;e0IOiRnaB;gAy4;do,iRk,ur3yaB;cAka,ya;aTeRia,ly,yD;nRrl3;a,na,z07O;m,yD;dou0C9olyR;-Ne;-l03a,c02ka01lZmYna,qi,rVsStRv068wen0J5ya,z0HR;e9he;aSey,haRie,sa0J9y;!-emE;!m;aRe;!-Rh-k05Z;anast0AV;ou0u0;aGee,ou,yR;!a,s;!-Nh,ro5;ha,ka,y;ee,iR;nh;aYeUiSoKKsa,usseKveHyR;a,na,tE;la-do0FSnaRra;!-s02T;eSlRra,v05P;i6y0EA;!-lRka;ee,y1;it2y;alTdaRg06Wu09Y;!lR;en6;iFMy;al0IUeri09E;-l01dHiQka,lUna,ssara0BRvR;aRe,ie,y;!-Rh;an1dorc0DBmiUG;aWee-Vh8iUlTsh4yR;!-Ra,e,s0DW;an1keylD;!a,e,i6y;!a,eGne;ang0J2;!-0BEne;ee,ys;a05d01eXge,iUl0IGoTyRz3;!sR;onGs0ICun;l08Yn0;e,ha,nSsR;an1on-0EOs0I9;a,se;lRnn;ai1ei1iRyn9;e,nR;a,e,n;a0IUiRy0I2;eSsR;on,son;!-s0FT;lRyss0HZ;ee,i0yn;ha,ie,kRy;ayDenTL;el,le;nRy;d0AJvi;a55e3Fi22lSYo0Wu0Bwo0yR;a07b06c2di09l00nXra0HJsVvRz;!iR;aRe;!-Rro5;perCro5;!aR;!-m013n25;!a,c2dSeE9ka,nRs0FS;!a,eE8;a,ra,s0FQ;a,e0HCiSoRu,y-N;o,u;-NaTeR;!-R;an1ho0DEro5;!nE0;el,in;!-Nh,k0E3l3m0HOnR;a,e,ie,nR;aGe;an0D0c01dZeXiMja0H9lWmVnTpSthiHzR;!ia;e,iF;aRea0CW;!-mEZiDra;e,i0;a,u;lRna;a,la;ivineRmiD;!-r05U;ciyZeYiTyR;!-Rdi1;jE6kaL;a0EDeTlSnR;a,da,e;e,le;!-R;aIk0DIm0FD;-ang3tL;an4;a0Ub0Te0SgS5i0Rk,l0Ond0GOr0Ett3uUvR;aSeRia;d3li0GSrQ;-m001l04Kn3;-07an06b05cZ9e04isZjaYlXmi6nUrSss2tcRve,x2;hi0;aQdR;e-neRFjinA;aRelC;!-R;k0D5ro5;ia,oHR;in9y1;aUeRian01V;!-R;br3JmaRy0HT;d8Qr3;!ro5;lDva;a066na;a,e,n0B3y;aRe0CR;m0GAnR;a,ge,n0B0;-eQaYca,eWiTna,rSyR;!an0CKel;aYJi9;!-aIan0G3eR;!-R;amb076rafaJ;a1da0lRnJAtF;ai,ei,ie;!in05PlRn1ya;i0FXy;aRiF;!yny-malR;aiO;ka,s31za;l3va,zoy4;bo,el3;!ia,nR;aBe,ne;a11b0Zd0Ye0Xh0DAja,ka,l09n03o02r2sYthish0GZvUx2yaTzR;!-aIaRbe08GetLia,yEUziC9;!-MLnY;!hGn0AJ;!-m068a,iSyR;!-Na;aRe;!-031n0EH;aReBXi,ma0B5on,sa8B;!-SbeOCnR;d06Jne;m061ro5;!d3nTXraB;aVdTeRg,h;-Rs07H;m05Xs09L;a,sRy;ay,ey,i,y;!-ima1h;a0Cea,i04lYoWyR;!-Ra6RbJjaKmCSro5;anTblancZLem066jSk0BOmRro5;ay,icha0FF;aV3oy;h,n09T;h,uR;!-02W;ah,iVyR;!-R;aSjaKm072rR;ae,o5;nn09M;!a8Ge1Lth;!-WaUeSka,ro5tR;!hGy;!-R;je02Mro5;!-NnR;!a,eGn09F;an1jRmC9ro5;e02Iuli0CP;!-Rh,s0AP;ro5soph2;n0FHzl;a,ia,ya;a,bRer043ie,ni;ie,yG;!-m06Kh,nRra;aGe,n6y;a10da,e0Uh0i0Il0Hm0E3n0Co09ra,sl40t04v03xWyR;-aIaUca,el,lRn4;aRia;!-R;ivy,m04Vro5;!h,nZK;a0B5ee,iWxVyR;!-TaRe;!nR;e,n9;aIolOI;a,y18;!aSBeWD;anXPi0BL;hUiTtRyc2;i9yR;!-ju1c2;!c2ss2t2z2;ic2yc2;lXJnRon3ra;aBee,iRnBIor6y9;!eGta;aUi,nRor6ya;aRie,y-madis0DG;!-rapR;haJ;!-Ne,h;a,iaGou,ya;a00cAghZka,lVnaTsAtR;hRic2ty;g,ic2;!-R;e09Xfl004;aRiPla,ou;!-ShRni;!-Nel;a6Jmari6noem3ro5;!-018a,sa;!-R;li5sylv3;-aMSaVba,da,lSnPsa-M0v2yaR;!h,n4;a,oR;o,uR;!p;h,naB;!-Zb8WhVje00Zk09MnSro5tR;icVJo8;a,d7e,i9LnRy;!aRe,y;!-07T;!-Rf053ro5;di0B5jaKkLWmiSrR;aRo5;ch0D6;bVfEjTkSlRmW2ro5;ee,o099;im,ym;aRe00N;de,y1;elCrR;igitL;bib4c3Od13e0Zh0i0Wke0Vl0Um0Sn0Ro0Qr0Lsi8t0Iu02vYxP8yR;aVck2iUka,lRnWBsAt0E1za-f04R;aSieR;-aI;!-m6Vh;a,n0;!h,l,nR;!aBe;erUGiRya;e,nRol0AH;a,iaR;!-gabrieD;rSs007vR;elCia;!a00eXiTryULyR;!-Ran8Me,nUD;a053e08Nro5;a3ReRl69ne;!-Rl,ve;aTLcRdaN0jaK;athe08I;!-San0C0i1lRn0BKtL;i6le;an0eVHl0CY;!-Se08Fi1lRn0AX;i0BWou,y9;eRg0B4jeZTk08GlMWro5;mil3ve;asAiSoR;n8ya;fa,sA;aSiRk;n,sM;!-R;g0AWmaRuap01G;e,xQM;n3ra;!aGna;a,bri0CYiRys;a,na,s08OtF;iFla,ou,y;esAisAsA;a,ba,ga,ka,laSnRra-veX3sP;a,ey;!-0B8h;ka,la,tR;et2iR;cTTtiaRz2;!-HK;i-liz040on08V;a2Oe1Fh15i0Nl0Ko0CpadWUr06us05va,weyo0yR;!a00lYmUnTrR;aRiJ;!h,in0;a,lE;!bTiR;aRlQra;!h-co32;erQ;a,ee08AiR;aSGe;nE6rR;aRra;!-andr062hR;!-jeI;a,hZH;isSushna094ystR;al,el,i0;hTtR;aPGe3LiRy;!e,n05G;a,vi;il3nstanXrTsSuR;asACrtn08K;i,sa7;aRiTotEOy1;!-lLIlRyl;ieSUly,yR;!an1;ce,di0;a7eSoR;a1ePY;a,opQ0;a06e04k02l00mVnaalik,rSsAyaRzLR;n0raB;aSi,pa,stR;en,in;!me,n;!-summ022berlUiTmXYyR;a,lRrJ;ee,i6;!a,ly,ya;e7Si,y;ey,iRla;an1na;iRo;!araolu;rRv9;a,ra001stH;!n05FraR;!h-YF;aTeSi7l00Zryst0A5us0B2yR;aJUl3ra;i7ls07QyD;dUiDlSnh,rRwD;diaFla01E;eRia;esi,si;iSyR;!-lau00P;dV6jaBG;a0Yc2e0Xhlan0Wi0Vke07Vl0Im0Gn06olQr02s01t00va,ySzR;al3ia;aXisMlSsRth;ha,s3;aTiR;anRe;-am09En;!nR;i,ne;!h,n0;a,chnayl3li08Vs2uZZ;cy,h2sy;a,eSiRri;!aIsM;enn-WYnR;!-00;aYdWgny-Via,ly,nSsRya,zaB;l071y;aSeR;!dy;!l3;desti00N;aBrR;a,ia0;-Rd3;mael07K;eeDgo,iRo,u01A;e,lD;a02eyPh2i00lUsTyR;!aRna;!h-raZHn6;ey,ie,y;ey,iVyR;-SaR;!nXO;anRjoy096ro5;ge,n9;!a,e,na;!aRya;!n07F;h004iy4;laLUma,nay4ra,sA;i,y;-a0lTLna,ya0;cy,l2sUP;a01Yc26di25e21gom04Jh1Yi1Rl1Km19n17o18r11s0Xt0Cu0Bv09wt07yR;!a04c02dQIe01lTrSsRtl082;ie,s3;a,il2y4;aWeTiRla,o0;aRe,sM;!n074;a,eSiR;!gh;!-Nha,n;!-ir085nR;i9ne;!sA;eeRie;!-kamil8;h,nR;e,ha,ne;ar,hR;ar,er;ayaRiF;eh;ral3;a09e05hXiWl07HniX7rUsuX1tTyR;!aR;ya090;!aXR;!iRy1;c2na,o0;!a04Te,na;aWerPViVleHrUyR;!-madR;elR;ei1;i1ynP;e,ka;e07TlRrPPya;ea,i0y04W;!-SlRri04K;l,yn06L;joRlyIvYT;haD5;lRna,ri0;e8i04Qy04Q;mi7sR;aPPiSyR;!a,o02T;dy,eGopE;a,cia-leil4eViUlSmWRolRthiUGyn;an06Xi1y1;-pi06ZaRie,y;!-FO;!a1d2maMGn01NsMya;l07Qn;dI9k07Sto,yakumaR;ri;a00elZiUyR;!e-ellySlR;a,ia,l2;saZF;a,lR;aRia,l060;!-Rh;aRma8;leja038;i6ya;la,r,ya;aWeVhW8iTlSthALyR;aTna,ss01L;i6yOR;!aReGla,na,ssSTxa,y4;!n02Q;ah,iV3;!ne,ya;a,di,lUmleHnaTra-heidi,sStlRya;in,yn;ey,sy;at,t;aJLeRiUAly,yP;eRy;!nP;aSe0i0lRmal4;an,i8;ia,nto;-lEc3lR;a,iSlSEyR;!e,n,s;a,e,s;at06UdRHja7R;ey,ie,ou,y;a2Ae1Mh1Ki1Do0BuR;an09bilEcX2d06lUma0nTpitXOstSv2wayrR;iy4;in6y1;a-suns3GipXL;iTlSyaR;!nn4;ia1;aUeRja,sM;!-Sn1tR;!a,te;an1ro5;!-T0nR;aRe,n6;!-R;mRrenE;ichJ;iY4yR;!-R;aIe01R;a,iF;!a0Qbe,celyn9d0Oe0Iha0Gl0Bma0Ani,o09r07s02uXvVyR;!-TaSce-Rla,s;angeQmoloV0;!n0;ad04DharmoWT;a0iR;aCe;dSlNJma0na,rR;i,n02Zy;iRyP;aRe;!-in03B;al3ceXBeTiSyR;-SSan1;an04Te;e,finRl04MniVBphSRtL;aMYe;dRg2;anMSyn;dy,n02Mry;an4naB;a,eTiSyR;-SJan04L;-SIan04KeMY;en9ighRn6;-mWP;nRre;a,e,ie,naT1y;lRve;lRy;a,eR;!-R;esW7manR;ueD;aRi9y;cheW0;ddU0hVXlS0nR;!a,e,ie,nYZ;aUha1lSme0nRver01JzJ;an9gyi,soV;a1iTWlR;!iTV;!-toSnnQIx02DyR;an,u;ng;aRu-baRS;de,nae-medK5;an09eOYi08l07m05nZrYsUwTySzabR;el04S;da,na;elPBy4H;iVKpeUXsR;a,iSyR;ka,lE;ca-kaUQl03J;i,ri,s01O;!a,elCiVnR;aTetLiSyR;!fVIka;!e,fVH;!-Nh;fVFsleyd03O;im4maR;!el;a04Ue0;my;a,eUiTnR;a,eRiS;!lCtL;e,n6;!tL;c14d11e0Xh0Vi0Uk3li0Tm0Pn0Fp0DqueVOrm0Cs03vie7wHNyVzR;mSsRzZI;mi0;inRyn;!eG;-Wd6lUmSnR;a,e,yO;eQiR;c4na;aRe1yn1;!h,n3;lRmoKB;en4;hniOk01lYmTpSrR;aj,eS2;ar,e;iRyn9;nRra;a,eR;!-R;glUCma8;eHyn;ay1;neRTsR;ir03X;aZeWiTnaSosAsu,yR;l3sK5;!h,t9;cRka,n6qURro5sY3;eRya;!-mae00O;!-eva,e7lRsMt3Jva;!e,lR;-machae7e;!e,iXZn,t;eTiRyUE;!e-l8lR;aBya;el4s2;e,y4;da,ly,m3na,y016;dRelCi0li,oKya0za7;ai;ilyRLlRmes01T;-serapSlR;e,y;hi1;a,eRis,yZK;-RlNE;antoin000elSZflorK5;iUkieK1l01OquelR;inRyn;a,eR;!-hoXK;e,nR;da,ta;a1Cb1Ad19erahkwi1fe,h17k15l0Ym0Sn0Mo0IphiGLq7r0Ds02t01vUwa,zR;aRel,ia,zy;!-bU4belRdo7l3;!a,l6;aVey,yR;!-R;aRmiD;nn,zR;alE;!nR;a,ie,ka,nL5;a,h2omb,ta;aXeVhTiSla,ob01PraRsra9ys;!a,eV4;do7r001s;aRitAkEUmR2noNY;!al,na;e,oluRul;wa;a1belRdoRWli015o7ro,u7;!a,e,lR;!aRe;!-e01L;akoze,eTfa1ha,iRleHma,oA;a0e,na,sR;-TPs;h,landRn6;-g01J;an0le,nSterasR;wi;a,kweR;tiiostA;aUdiTeSgridRna,si8ulHG;!-otil2;sVTza;aBra;!a8raBsRyaB;!s9;aSeRmaculEogenVF;l00Gn9;!llPYnSyR;!ah;!eRi-O2y;!-r1W;aXSeWhYEiUlSo0se,yR;!-ODa0sa;a,ian6yR;an0r2;aRnS4;!n3L;a0f,ne;hlUPraNFueu-mR;aniPS;lY5sR;a1sa1;a,iy4;ek006tiR;hL3ssY1;kRna,ra;aweriahTohR;entenhsehRnonterR;at3;si;a0He04iYoTuSweXByR;acinSPl2v3;da,khmPOraY7s0;da8i,lUno7orTrten5sannaStoZMuR;da,ma;!mT9;ab,ia;ie,lNJ;bVlTmala8nSra,yR;ab;a,dF9;aVBdRey,laVB;a,egard;aTFet;a01beGdy,iYkiPYlUnTrSstRGvR;an2erQv3;lA9mHWy1;esLVlXGnLXriett6;aTenRga,iaYZly-YHoi5ya;!aRe;!-fatiPS;!na,y0;dRra00Q;i9yR;!-diamond;thR5vR;an3;-hagshaPLadi8b14cer-zeh7d10fs0Zi0Vj0Ul0Qm0On0Fo0Eppi0Dr06s05t04vXwa,yTzR;al,elR;!-gZQyI;aBdeeGlSzeR;ll;eRie;eGnPyHE;anaWeUiRyhY1;laRsh009;-fRh;aiRP;n-Rry;mPIthereM;!-rX9;ea,he0ouP7t3;i0sYZ;a,eX1iVlSmonMJnoLFpQNriIUsR;eer002ir002;eSie,oRy;we;en,ne,quWYyaI;etRni,th7;!te;!neO3;ua;aYeHiXnRor4ysA;aRe;!-Te,hRlilK2;!-R;bJro5;eUUmari8rR;ahOQ;a,fe,ya;!a,bYMcy,e,h,n,soU8;ash2na,sR;a,iO;a,ey,iTlRo0;iRy;bYHe;e-NmYB;ar,r4;da,ka,lRslW1;a,eRi9y;e,yR;!-a0aI;a,sa;as9ZiSja,lVWrR;ia3V;aRya;!tYT;b3iNNsa,y;a18e0Wh0Si0Il0Fn0Eo0Br00uUwR;enRyneQJ;!dolR;i1yn;eUlru,nTrRylET;baZ1leHnR;eMToKA;eMVta7Q;gVHrR;dens2lJZnaJ;acUeSiR;selXBta;iP0tR;a,chH;eUiR;a1eR;!-LXlR;a,le;!-Rd3lX3;an7JdiRemmanuPQ;vi1;dSldR;a,ie,y;iva-gennabXHs;eMYirV3;adVTenSorRynX8;iaSLya;a,da,na;aZfMNgi,lYnXoVrls,selUtTuliR;aRetF;!nJE;a,ty;a,e,le;ia,vanR;a-dezN8na;aDDgOP;da,liMK;!-khURda,nnGHvVS;aSea1iRym;na,slDUta;dRl2;ir;l2m01nXorgUrR;aSha0i,mDQtR;ie,ruK;eXXldEX;eSiR;a,e,na;s-zachaS4tL;a,eRna;nSsRvieSV;is-liveQsy;di;!m6;bYdVJe2ViXlVneev,rSyR;a1eDle;anWUhSihV9nR;et,i;yaI;aRe,i0;driWGx3;a,lPna;elDieGrRy-RZ;i4Mye2M;a13e0Qi0Ml06o04rRurahP;aYeSiR;da,eda;dSja,quenNHs2yR;a,ja;a,erR;iSyR;ck,ka;k6qO2;dW3iHXnR;!cR;esShesOiRoi5;a,n6sNF;!ca,ka,se-ludn3;rouhI3tiX0utR;oum;av04e01oRya;!rR;!aXc3eSiRy;anVGeDUne;!-J9lUnR;cRti1za;eRia;!-gUL;ie,l3;!-lElJ3nR;ce,e,ne;chereSurR;!-aIal3etL;!-emM9;iRy9;!aQOe;by,dTfa,hU5lome0oRrdawsS9t2;na,rR;a,eOUina-feK;el2ji;b02d01e00lUmTrR;iVBnRyVB;!anUS;ke;ec2iSlic8yR;c2xe;cSma,sh2xR;-aIe;iRya;aGe,te;!-li4Iby;eriMGor4;by,erly-ae0;b0Fd0DelCfaW0hiL1i09l08m8n07o7r01tUuTvoD2yR;!e,liR;a,c2ss2;stiTLve;iVma,na-n0AouR;!maR;!taR;!-R;binFza8T;ha,maR;!-z04h,tF4;ahVdUhaSiRr4yFBza0;ah,d4shF;-nouraRna;di1;is,oUA;!-fatKL;gxSHnHYta;lTWyc2;da,gGKthRza;!-RlTW;eSBlR;u0yI;ia,ouma-zRyD;ah7;eAiRy;a0eR;-tou7n1;a52b51ciCd4We4Uf4TglanQTi4Pk4Ll2Jm1Fn1Bo1Ap18r14s0Ut0Pu0KvXwa,xa,yTzR;au7eRza;chkiJl2;an0lSmi,raR;nn4;a,ulR;!-huTJ;a05eUiTlSoRv4y;d3lIU;in6ySZ;!e,ta;!-00di0lVnQrlR;eSyR;!-sD1e;e-RiI9;kaL;eHiUyR;!nR;!e,nR;!-Ne;e,nO3;c2Tel3lyImJXpascaCriL1v0O;-VbJdnR8eUh,lSnRro5;a,geliBAie,nFOsUHth2y;eyi4iEKu0yR;!a,n9;ll6;e1Rja5BlSmaRpearl,ro5soQV;ri6uKy;e6uc2;genRla,niTNriJ;etLiR;a,eR;!-aR;n1rthemi5;hT8iaToStR;a,el,y;iCnam-ayoF4;!m-Rn1;emJ6;alNYhaZiYmeXoMperanWrF7sVtR;eSherRrL7y;!-c28;e,f02lRr;!a,e,l6;il,owedeTL;ce,za;!e,ralSEy;le,oD;al,l;el,iSma,nestAVyR;ka,n;c6Ben,kaEBnR;!a,y;hniKifR;an2;l2n3wS4;aTea,iSjD9ley-NnaQWoRriOuKRya;h7la-6FraB;d,th;elCm;a0Pber0Oe0Ki0EmYna,rXyR;!-Ta1lSrR;auKo5;ee,ia,ou;eOJjRlEpiJYro5;aReFY;de,mQEne;ie,yn;aUeSie,yR;!-Nka,lSW;!rR;auKie;!-Ue0HjaKlTnuelR;a,lR;a,e4B;ee,iO5yR4;aIcVeO7gSBja7RkaLlTolisSro5soR;f2ph3;sa1;e6ou,yR;ne,v2;aroShrR;isOI;li0;!e,ka,lRra,va;cMNee,iTlSou,yR;-EZaOR;iQGy;aNAe-R;melNro5;lTrRtRH;aReAK;ld,nRWuK;da,iaMSyQS;!lF0;!-NDeUlTnRro5;!at,uR;elB6;ee,ie,ly,yn;lCve;a1Mdi0e1Di0Vk0Tl0Dm0Cno7o06s05v04ySzR;a,irr4;-01aXeGjaKk2mA9n6ro5sTzaR;!-RbeJRn1;ja1;!aSe,ia,sR;aBee-reuvHia;!-NbeRndHZ;lCth;-Sh,nR;aGnLK;ja1kRro5;ym;a09jaKm9Yro5;a,i0Qy;a,i9y;an1dUiTrSuRy5;a1i5;aBie,y;na,seAT;ieRy;!-lRG;a,i0;a03ePSiUyR;-MKaSne,sR;ia,on,s2;h,na;aWeRpsP1sQ4ya;!-R;aTcSjRpiI5ro5;aKeE5;harlotL;nnP;!naR;!-nR;da8;!-Rha,na,y;gQMmRro5;ay,eghFS;aRy;ss8;-Na05c2da,e03f01ka,n00oZsWv2ya0zR;!aR;!bethRveF;!-R;maLHproR;vid81;aRe,ia,s6;!-NbetRn1p3;h,ta;na,ra;!a,e,or;!nR;az;-Rne;aIGjaKro5sNG;h-aSnRro5;aBe,n6or;naJ;!aXkt7nWonRy;elCie,orR;!a,eR;!-R;olR;iv2;!aB5i,na,oGD;!nR;a,e,na,orJZ;!f,iUnTrSu7yR;aBna;a,iPQ;a,ne,orP;a,nR;a,e,nah-nitanP6;!aSeRmESnG0ta;ysA;terinRu;a,i;dGSlSmRsMvy,ya;an,y;eHidh-benFlRya;ya0;fy,rem2tih2ya;la,vR;ee,y;a,elUhP1iTjSmil0na,viac3wi0zR;ah,ra;ee,inA;a0th;!le,weiE4;ah,ba,ensOya1;bAle0;a1Ue13i0Uj0GoZrWuUyR;anSen0ClRna;anOF;a,na-eMR;aPlceRn8;!-adrB9l2mF0;aiSeR;!anNU;zy;an,h06l05m03n01rStt3uRva,xa;aa,n2;aJQcIMeYiXla,othTra,sa,tSy-aR;nn3;hy;eRy;a,eR;!-ceR;lesL;a1ce,n6s;en,ss;aRg,ia,na;!tGE;eRinEU;niFM;orM8saf-anaNZ;!aFI;a02eXiWouVuR;liSmaR;!eD;a,sR;saB;li6n7D;aTta;e0hi0mMnTsSylR;isM;smi1;abOHeRn4;!-zei0ba;miDnR;ay4elCna;aTba,em,h8k7li82mSnaBoRrHsAvi0x3ya;n1r;a,i7;gniDka,lVmilNInSrR;afa-maiDra;aSd7eRga,n6;!-angeD;!-vET;a,lo;an0Eb08c8de,e07hb2i06ja,lZmetr2nWri1sUvSwR;mi;aGoR;iIQr4;irEtR;iny56ynKZ;a,iRsc3;a,ce,elCsR;e,ha;aViUlTorSphRya;ay,ee,i1;es,is;aHVia;a,ce,l4;!ra,yR;la,na;dDTrdDT;!dEma,na;!bAForRra;aRha;!hR;!-R;j8WkitumR;aiNW;a,dD7nR;!aRe;!-stereI;ba,c0XeDfnEKh0Ui0Tk0Rl0Lm0Hn09phn07r02sZviXyR;anUi0leTnSsR;ha,i;aBiss4;!ni;aRna;!ra;-kRda,na;ueBP;hn2VsR;i1ylvaR;-queH;a,cUeHiTlRya;a,en6iRysA;jEne;a,lLSne;ey,ie;a,eRie;!e,l2y;aVeUh8iSlMUnPyR;a,ka;a,ca,elRka,s5;a,e,l6;tLva;eShR;!e9;!e,ve;ariGPiSyR;-victor8a;aIWka,taR;jo;eVh2iTlSyR;!aITce,n0;i4y;!aRda,e,laBsAy4;!h,nLE;en,i7S;oFsR;ha7;a,la,men-axe,na,ya;ab,lR;iRya;aIJe;henRi1;a,elC;a3Ce2Zh1Di19l0Mo05rVyR;bJlGAnTprL6riR;elleRne;!-el7Y;di,thiaG;eYisSystaR;!l;l3tR;alUelle-euTiR;anaelisabetFnaR;!-J2;gen3;!-maL5;d31edRsl3;anLD;heHl04nYrTsiB4uR;mAJrR;tn4L;!aTdKOiSneRri1ta0;au,l2;!e,nJL;!-lElR;!iJIyFB;n3sR;tSueR;lo;anSeR;lCnL0;ce,di0za;eSleHomR;be;en,tL;a00eVoR;eTtRvC4;hRilK;ilK;!y;a,l2menToR;!fEIkayLpRr;at7hE;ce,tR;e,i1;ir01rVudR;eTiR;a,e,neR;!-daniK8;lCtL;aTe,iRke,y7Z;an0ce,sRta;!s6;!-Rh,nKD;eG7jaRlEro5;de,ne;!-mABeR;!-ma7;a7bJdTer7l2nRrFyHJ;dRsBN;el,i,y;al2;a0Ke09i07loe06ouro05rSuqiaoRy0;qiao;isVysR;oTtR;al,haRia;-princB5l2;uDvalantKB;elJ5mXphaeWsy,tR;aTeSiRla-jahyeDyP;!an6e,la,n6;lCKnv3va;!bJlRnCM;!-gJR;loFM;anIY;uk;!-vAOe,y;a7de7nenRri1;ye;d00ilDkZlsVnUrSvy,yR;en1;!iRna,yl;!e,fa,sh;ai,i8;eRie,y;aRe,y;!-R;ro5sGO;am,i0;i1va-elio7;anK1d0Hh0Gi92m0Fn0BrSvy,yR;a,il,mH2;elCi07lSmRny;ai1;a04e03iVotteTyR;-Re,n9se;eEZro5;!-R;jiaj2m1P;anIEeTne,zeR;!-seR;re0;-Re;aTjaKkaLmRro5;aRia;e,uK;nn9;e-Nn6stHtL;!i1;sRy4;!sa;a7UcI4d7eTi,nStRy;al,elC;ah,j3;lIWz;!e,ma,s;d,ra;-nelsHOa,i1;c00lRna8ri1yl7O;eUiSyaR;!n4;aRn6;!-laurE;na,sR;!tR;eSiR;a,n6;!-yollanK;el2ilR;e,iaRy;!-m87;d3e64i0Yl0Um0Mnd0Kp0Jr07s02tTwerE3yR;dRl18sA;enI3;aWeVhSriRta7M;na,o0;a7KerSia0leHrH7yR;!-aI;in6;ri0;lRri0;eRiEV;ia,ya;aDWey9BsR;aTend8AiSyR;!-aIrJ;a,e,ll2opeGI;ndr6;a,deesha-kaylEel01i00lVmeTolSrRys;ie,ol,yaI;!-aIanGZe,inFZyn;lRn;!a,la;aUeTiSyR;!iFXna;e,na,y4;ne,y;!-brun3;na,sM;le,y;el8ri;aHBiR;ce,de;a7elXiR;e,lR;a,e,iSlR;a,e-Nia;aRe;!-clR;auK;i6l2yP;ai,iTlRysF;a,iR;eGoC5;e,sFxa;lEAs2PtlR;inPynFN;a2Be1Dh19i0Wl0Po0NrTucSyR;ll3;ky;a0He0Di00oXuVyR;anSen1nn,tR;an8;a,naR;!-alex4;chRne9V;a,ie;cAnwFSokR;!e,lynR;!e,n;an01dYelXgiWha0ll2SnVtRya;anTha7KnDUtR;!a7JnR;ey,i,y;ie,ny,y;nlDQ;d,tL;a,l6;gRinDS;etR;!t9;a,nRty;aBe;anD5eTla,nR;daRna;!-lE;!-EH;cAelyn1nR;a,dR;i9y;!bbi9fBLnRuaGQw3;iFn3;aTeueIim32ossSytR;he;om;i6BnR;cRdi1;a,heR;!-eDD;anZlVnTssSthuR;sh8;an,en;du,eFtR;a,ou;ie,lR;ie-SyR;-aIn0;aIchl61ro5;caRka,s4;!-R;el7IkrystR;al;aSruR;viO;iraG1vR;gC7ya;a0Kc0Gl0Cn0Br04s02tWulaBvUyR;aRza;!nR;ca,e;!erlR;ey,y;hUsy,tR;e,iSyR;!-Ne,lFD;e,na;!an24o7sR;aiE5;ma,sR;!ie;aWeVliTnRr3LtAyl;adRiET;etLi1;e,ndR;ja;niEP;k4nge56;edicLiFnyl2z;atriEMiTky,lRv2yM;aRe,v3;!-Nn3;a,nDR;ca,kR;a,ie,yR;!-R;joy;!h,lTnn3trR;iRyED;x,z;deHie,ye;aF2by,f06ha05il04mbi,n03rXsVtTvno0CyR;aRi3Flas3F;!n9;hya-kaRi4oBC;dy;!ma,sRya;ma,y;ak4bSwaR;ko;araRie,ra;!-jR;esR;sy;ee,u;a,y;ar;reH;aECbDAcD7dC2eBUfBRgBKhBFiAOjaBTkAFl7Qm6On3Ao39p38q37r26s1Kt1Fu0Rv0Dw0Axel09yZzR;aWeTi78raBuSyaBzR;el8ur7;l,r6;lSnR;or;!i6le,ye;fa3Iil2lRrielle-kekeBC;e7Ri6l3y;aXchetDXda,eVia,ka,lRm0QshaB;aSe1iR;e,n9s;!-dR;ia0;!esAleRsA;n,t;!-b58h,la,me,nRsof8t;aBnaR;!-sel4h;leGya;aRo-hel2F;!-marieR;me;aZeViUleHni,rSyR;ne,sA;eHiR;l,n;a8Ce0va,y4;il2lTna,ry-Ry;lRsnow;iv;!li0y;!-UaDPh,lTnR;a,eR;ga;ee,on;gCSro5;b0Ccea1d05gust04l00phZrUtTxR;a1iR;ll2;om1umn;aTeRiZor6ya0;lRoC;i6l3y;!lRne;ie,y;el3;iSyviR;a-N;e-Rna;an1;a,in6;aQeWrR;a,eSiRy;!n8B;an1e,ne,yR;!-R;aIjaK;!sM;e,rR;ee,ie;a7en6PhRi8ri0ta;al2eSiR;na,r;naRsAy0;!is;a0Be09h00iyaBmZnaXra,sTtRya;er-li5ou,rR;ee,id9;anBHiSyR;aBl;a,le,nRya;ad,et;!-R;lyI;aPi1;aXiWlTmeHrRvR;itA;en;eRi9yAD;e,iRy;gh;a,ra;!a0ntR;i,y-ky56;eRnC6;l,s;bJl,w2O;a0Nch-ASde0Me0Kghaw0Ji06le05mon3n02o00piFrZshWtemis9usC0wVyR;aSelRna,sM;!a,le;!h,m,nR;a,e,n9;a,en;i,o,pR;reR;et;ey,ia1;na,sAuR;sh;aRiO;kallRli,q;ak;e9Pn6tLy;aZeVj,nTsSyaR;!h,n7W;ha,ta;aRe;ss;lRve;a-trRe,l6s;iniR;ty;!-liMd1h,m,nR;aSe,h,nR;a,e,y;!z;an;eRni;ba;lCn;bellaTce86mSvRya;anbu,in9N;aFozB1;!-1T;iDsa;ol24po24;ife,ss;a2LchanAXd2He27f25g1Qi1Mja6Yn04o02si01tYuXviWwVyR;aTebeRla,sMz2;-kataR;le8;!-elio0;esA;!ka;sAun;a,h4MoR;in7InR;elDia;ma;op,ra,uR;chOk;!-0Ua0IeViTjSlau7mWnaiRysM;ck;a9Jol3;a,c2eRka,l3y4;!-lou1M;!-Sli5mRtL;ar3;a09ch07e03fZlaXmarVnagelEprunJrTsRv0O;aRo0R;raB;aRo5;faeC;guRie;eriL;i2XureR;!n9G;lSrederR;iq12;eRo7;ur;lSmRs0K;manuJ;eonoR;re;lRrist3;oe;bi9Bgn6XnR;drE;!-YbeXeWhEiVlTmSstR;as2;ar2e;iRy;e5sa;ca,l72s;!l97ve;l1Mth;bJe4Qk4TlSmaRpi05ro5;r2uK;au7ouR;cy;eZfrederiYga8HjXkla7luc2mycWnaJsoVtaTvR;ictR;or2;nRr4;ny;ph3;ca;esM;k,q07;lTsR;thR;er;iRyP;e,sa0J;!a,eDka,la,ra,sRta;aBha,saR;!-Rh;ma8;eSie,yR;-lE;-01e,lSmR;ay;aVdeep,ei,iSla,yR;!aIk6;a,cSe,kPn6qR;ue;!a,k;!-R;pRroyaC;auR;li1;mic4peniR;elD;el,isM;sa;!eZlSsOtRy4;h,te;!iRla;aRe;!-R;elR;izaR;beR;th;ka,t;a,i9jeDrR;a2eRi8;aRe,ia;nn6;!-05ah84b03e02gAh01iYk3ClWmVrUstasSxandr2yaR;!h,tjot;iRs2ya;a,ya;ay,o5;ar2ilE;iRuc2ya;a,ka,ya;!cSka,sRta;!ha;a,ca;!iF;!e,lCve;!elRia;!l6;bJe2Uf4Ck2XmTpR;aiR;ge;ar2;a0Gb0Ee02iUna,o7yRz48;!-Rl2n4ra,ta;jaKlRro5;ee,i1;!-Nah,eXlWnaUraRy4;!-Rh;eRmery4D;vi8;!taR;!-kim2;aBia,ya;!lD;-01e00lTrSthysRya;!t;ah,y;iTl2yR;!aRe,s5K;!n55;aRe,ya;-Rn5P;eliRja1ro5;za;!na,raB;ly4;ar,erQrR;e,o5;a6XbJelCh8ia,l00nXrVtull4yR;aRll2;!-Rh;jaKsR;ar4;aRie,yll5J;!c6Mh;a,dSee,i-renR;as;a,i1;!iRya;a,e,y4;a27b24d22e16he0i0Jjaz2l0Am08on07t06u0vi0yR;-04a02cZda,e,nYo0rXsTvSx2zR;ee,ia;iaB;!a0Me0Nha,on4GsRun;!aRe,ia,on;!-Rh,n;quiIro5;a,o5;!a,e;e,iaR;!-Rh;jaK;!h,nR;a,naB;jaKro5s2C;a,hY;a,d7;aRude0;!s;eYiXow4GyR;!-VaUc2ia,na,sRxe;hSia,on,sR;a,ia;ea;!h,na;jaKxaI;c8eGs47y4;g7iy4;-0Ba0Ac03e01ma00n6ro5sVv2xe,ySzR;!a,e9ia;aRe;!hRnn4;!-m2;a,hUoTsRya;!aRia,on,ya;!n1;a,n;a,ba;!ya;!valeR;ry;eUiaRya;!-R;hoRro5;pe;!-R;aImR;argaux;!n1G;soR;le4W;a,c2e0Jgr2i0Hja0Gks0Eli4n0Dss09xSyRz2;ah,na;-04a00eZiTsa,yR;aRna,ss;!h,nn6;aUeRn6s;!-R;jaKro5;de;!-m1Xh-mRn3H;ei;!i;!nR;drRe,n9;a,iR;a,ne;eSkenned3sandR;ri1;ve;aTiaRya;!-kR;im;!nd7;a,n4;andrRia;a,i8;nd7;na,sR;ha,sa;ah,ha,nSshaRyaBza;!-lourd1B;!aB;ea,o7;ra;aSerRie;ti1;!n2Q;a,iWku,nTra,sOyR;aBna,sA;ha;a,iRnaBy;!e,sR;!se;aRna,s,ya;!-rejoi35;al3eYhsXiWksXoVriUsR;aShiR;!t3Q;!na;ti;fa;!nis3;ha8;el4mi9;a0ba,cha0Fda,eQk0Clee1Mm0An07r4sXvWyUzR;aRly;!-wapukRh;un;anR;a,na;a,ey,ie,y;hXlUsatR;a,ouR;!-rassoR;ul;inSyI;nn;g,n;aRwaryaP;!-adRh;am;hSn3slR;ey;oa;eRie,y;e,riO;a-bernadRo;etL;te;!-Rt2J;sof2;eUjTlSuRwe2Wyl3;va;em;in;li;aUg3lSnR;es;ae;ie;ph8tR;a,h6;ya;iSna1raB;ne;!y4;lUnerTrRva;gs,iR;elCs;ys;-taTiFla,yR;ne,s;ta;li4;a0Qble-kayim0Pd0Ke05i00jaZnelQoXrRya;eViRy4;anTeRna;lCm4nR;a,e,ne;a,e,n6;an0;n2ra;ly;!-seynab1L;ba,ki,la,na,sRva,x2;sonRyn;!-galR;abR;riJ;e04lRn0;aZeYiUlTyR;!a,nR;!n;e,ia;aSeGn6;!-N;!-rocRh;io;!ne;!iR;de,nRs;e-N;ro5;ba,na;iTyR;!sR;on;e,lRsR;yn;da;!hi,irPlR;ee,iTyR;nRs;!a,e,n;e,ne;ac2eciSil9kR;el2;us;a0Qb0Ge0AiXlaWriVsUyR;!-0EgaSnaR;is;el0Gil,le;at0I;elCl,sh;!k0T;!a,e,gTmaSrPshna0Tygay0K;!a;el;aRelCuJ;eVilRle;!-R;eSlE;ee;le0;el,lR;!-gRe,le;raR;ce;eUlR;i6lR;a,e,ya;a,e;-Rha,r;gaJ;ey,i9yR;!-Te,gaR;elRil;!le;gaJlSro5;se;ou;elC;le;!e;gaR;il;d07eed4ha0i03k01l00maZni,rTvR;a,ieD;la;aViTthiySusRza;hi;aa;a,fR;at;vi;ni;ay4iy4y4;it2;ia;ma,raBza;!h;na;ah;a,hRya;viOya;ka|Infinitive\xA60:6Y;1:7C;2:7A;3:79;4:5F;5:74;6:6D;7:6L;8:78;9:6W;A:73;B:76;C:6R;D:68;E:7D;F:60;a6Qb69c5Bd4Je43f3Qg3Jh3Ci2Zj2Xk2Tl2Km2Bn28o24p1Pques3Rr0Xs05tWuRvOwHyG;awn,ield;aJe24hist7iIoGre6H;nd0rG;k,ry;n,pe,sh,th0;lk,nHrGsh,tCve;n,raE;d0t;aHiGo8;ew,sA;l6Rry;nHpGr3se;gra4Wli49;dGi8lo65;erGo;go,mi5H;aNeMhKie,oJrHuGwi5;ne,rn;aGe0Ui60u5y;de,in,nsf0p,v5O;r37uC;ank,rG;eat2Vi2;nd,st;ke,lk,rg5Os8;a06c03eZhWi4Jkip,lVmUneTo56pQtJuGwitC;bmAck,ff0gge5ppHrGspe6;ge,pri1rou53vi2;ly,o3D;aLeKoJrHuG;dy,mb7;aDeGi2;ngth2Lss,tC;p,re;m,p;in,ke,r0Yy;iHlaFoil,rinG;g,k7;n,t;ak,e3E;aFe22i7o5B;am,e1Qip;aHiv0oG;ck,ut;re,ve;arCeIle6nHr2tG;!t7;d,se;k,m;aHo4rG;atCew;le,re;il,ve;a05eIisk,oHuG;b,in,le,n,sh;am,ll;a01cZdu9fYgXje6lUmTnt,pQquPsKtJvGwa5V;eGiew,o4U;al,l,rG;se,t;aDi4u42;eJi5oItG;!o4rG;i6uc20;l2rt;mb7nt,r2;e5i4;air,eHlGo40reseE;a9y;at;aDemb0i3Wo2;aHeGi2y;a1nt;te,x;a5Dr4A;act1Yer,le6u1;a12ei2k5PoGyc7;gni2Cnci7rd;ch,li2Bs5N;i1nG;ge,k;aTerSiRlPoNrIuG;b21ll,mp,rGsh,t;cha1s4Q;ai1eJiEoG;cHdu9greBhibAmi1te5vG;e,i2U;eBlaim;di6pa4ss,veE;iEp,rtr43sGur;e,t;a3RuG;g,n3;ck,le;fo32mAsi5;ck,iErt4Mss,u1y;bIccur,ff0pera8utweHverGwe;co47lap,ta3Qu1whelm;igh;ser2taD;eHotG;e,i9;ed,gle6;aLeKiIoHuG;ltip3Frd0;nit14ve;nGrr13;d,g7us;asu4lt,n0Qr3ssa3;intaDke d40na3rHtG;ch,t0;ch,k39ry;aMeLiIoGu1F;aGck,ok,ve;d,n;ft,ke,mAnHstGve;!en;e,k;a2Gc0Ht;b0Qck,uG;gh,nC;eIiHnoG;ck,w;ck,ll,ss;ep;am,oDuG;d3mp;gno4mQnGss3I;cOdica8flu0NhNsKtIvG;eGol2;nt,st;erGrodu9;a6fe4;i5tG;aGru6;ll;abAibA;lu1Fr1D;agi22pG;lemeEo20ro2;aKeIi4oHuG;nt,rry;ld fa5n03pe,st;aGlp;d,t;nd7ppGrm,te;en;aLet,loBoKrIuG;arGeBi14;ant39d;aGip,ow,umb7;b,sp;es,ve1I;in,th0ze;aQeaPiNlLoIracHuncG;ti3I;tu4;cus,lHrG;ce,eca5m,s30;d,l22;aFoG;at,od,w;gu4lGniFx;e,l;r,tu4;il,ll,vG;or;a13cho,dAle6mSnPstNvalua8xG;a0AcLerKi5pGte16;a15eHlaDoGreB;rt,se;ct,riG;en9;ci1t;el,han3;abGima8;liF;ab7couXdHfor9ga3han9j03riCsu4t0vG;isi2Vy;!u4;body,er3pG;hasiGow0;ze;a06eUiMoLrHuG;mp;aIeHiGop;ft;am,ss;g,in;!d3ubt;e,ff0p,re6sHvG;e,iXor9;aJcGli13miBpl18tinguiF;oGuB;uGv0;ra3;gr1YppG;ear,ro2;al,cNem,fLliv0ma0Cny,pKsHterG;mi0D;cribe,er2iHtrG;oy;gn,re;a08e07i6osA;eGi08y;at,ct;iIlHrG;ea1;a4i04;de;ma3n9re,te;a0Ae09h06i8l03oJrGut;aHeGoBuFy;a8dA;ck,ve;llYmSnHok,py,uGv0;gh,nt;cePdu6fMsKtIvG;eGin9;rt,y;aDin0XrG;a5ibu8ol;iGtitu8;d0st;iHoGroE;rm;gu4rm;rn;biKe,foJmaIpG;a4laD;re;nd;rt;ne;ap1e6;aHiGo1;ng,p;im,w;aHeG;at,ck,w;llen3n3r3se;a1nt0;ll,ncHrGt0u1;e,ry;el;aUeQloPoNrKuG;dgIlHrG;n,y;ly;et;aHuF;sh;ke;a5mb,o5rrGth0un9;ow;ck;ar,coSgDlHnefAtrG;ay;ie2ong;in;nGse;!g;band0Jc0Bd06ffo05gr04id,l01mu1nYppTrQsKttGvoid,waA;acIeHra6;ct;m0Fnd;h,k;k,sG;eIiHocia8uG;me;gn,st;mb7rt;le;chHgGri2;ue;!i2;eaJlIroG;aCve;ch;aud,y;l,r;noun9sw0tG;icipa8;ce;lHt0;er;e3ow;ee;rd;aRdIju5mAoR;it;st;!reB;ss;cJhie2knowled3tiva8;te;ge;ve;eIouEu1;se;nt;pt;on|Actor\xA6aFbricklayEdBengineEfireAgardenEh9instructLjournalHlawyEm8opeKp5r3s1t0;echnBherapG;ailJcientFoldiCu0;pervGrgeon;e0oofA;ceptionCsearch9;hotograph8lumb8oli1r0sychologB;actition7ogramm7;cem5t4;echanic,inist5us3;airdress4ousekeep4;fight3m2;eputy,iet0;ici0;an;er;ccoun6d2ge7r0ssis6ttenda7;chitect,t0;ist;minist1v0;is1;rat0;or;ta0;nt|Honorific\xA6aObrigadiNcHdGexcellency,fiBking,liDmaAofficNp6queen,r3s0taoiseach,vice5;e0ultJ;c0rgeaC;ond liAretary;abbi,e0;ar0verend; adJ;astFr0;eside6i0ofessE;me ministEnce0;!ss;gistrate,r4yB;eld mar3rst l0;ady,i0;eutena0;nt;shA;oct5utchess;aptain,hance3o0;lonel,mmand4ngress0unci2;m0wom0;an;ll0;or;er;d0yatullah;mir0;al|SportsTeam\xA60:1M;1:1T;2:1U;a1Rb1Dc0Zd0Qfc dallas,g0Nhouston 0Mindiana0Ljacksonville jagua0k0Il0Fm02newVoRpKqueens parkJrIsAt5utah jazz,vancouver whitecaps,w3yY;ashington 3est ham0Xh16;natio21redski1wizar12;ampa bay 6e5o3;ronto 3ttenham hotspur;blu1Hrapto0;nnessee tita1xasD;buccanee0ra1G;a7eattle 5heffield0Qporting kansas13t3;. louis 3oke12;c1Srams;mari02s3;eah1IounI;cramento Sn 3;antonio spu0diego 3francisco gi0Bjose earthquak2;char0EpaB;eal salt lake,o04; ran0C;a8h5ittsburgh 4ortland t3;imbe0rail blaze0;pirat2steele0;il3oenix su1;adelphia 3li2;eagl2philNunE;dr2;akland 4klahoma city thunder,r3;i10lando magic;athle0Trai3;de0; 3castle05;england 6orleans 5york 3;city fc,giUje0Lkn02me0Lred bul19y3;anke2;pelica1sain0J;patrio0Irevolut3;ion;aBe9i3ontreal impact;ami 7lwaukee b6nnesota 3;t4u0Rvi3;kings;imberwolv2wi1;re0Cuc0W;dolphi1heat,marli1;mphis grizz3ts;li2;nchester 5r3vN;i3li1;ne0;c00u0H;a4eicesterYos angeles 3;clippe0dodFlaA; galaxy,ke0;ansas city 3nH;chiefs,ro3;ya0M; pace0polis colX;astr0Edynamo,rockeWtexa1;i4olden state warrio0reen bay pac3;ke0;anT;.c.Aallas 7e3i0Cod5;nver 5troit 3;lio1pisto1ti3;ge0;bronc06nuggeO;cowboUmav3;er3;ic06; uX;arCelNh8incinnati 6leveland 5ol3;orado r3umbus crew sc;api5ocki2;brow1cavalie0india1;benga03re3;ds;arlotte horCicago 3;b4cubs,fire,wh3;iteE;ea0ulY;di3olina panthe0;ff3naW; c3;ity;altimore ElAoston 7r3uffalo bilT;av2e5ooklyn 3;ne3;ts;we0;cel4red3; sox;tics;ackburn rove0u3;e ja3;ys;rs;ori3rave1;ol2;rizona Ast8tlanta 3;brav2falco1h4u3;nited;aw9;ns;es;on villa,r3;os;c5di3;amondbac3;ks;ardi3;na3;ls|Uncountable\xA6a14b0Zc0Qe0Kf0Fg0Bh05i02jewel09knowled13lXmPnOoNpLreJs9t6vi5w0;a3ea00i2o0;ol,rld0;! seE;ldlife,ne;rmth,t0V;neg0NolY;ennis,ime,oothpaste,r0una;affJou0;ble,sers;a8ceneZe7h6il5o4p1team,u0;g0Inshi0B;ace1e0;ciHed;!c0S;ap,cc0Lft03;k,v0K;eep,opp0G;riC;dZfe0Mlt,nd;c0lax05search;ognit07re04;ap0Ee0hys08last5oLressU;anNtrol;il,xygen;ews,oi09;a5ea3i2oo08u0;mps,s0;ic;lk,st;sl0t;es;chine0il,thematY; learn00ry;aught02e2i1u0;ck,g03;ghtnXqu08teratG;a0isF;thY;ce,mp0nformMtself;ati0ortan03;en02;alib4isto3o0;ck1mewo0n1spitaliY;rk;ey;ry;ut;o1r0um,ymnastI;a6ound;l0ssip;d,f;ictClour,o1ruit,urnit0;ure;od,rgive0wl;ne0;ss;conom9duc4lectriciKn2quip3th9very0;body,o0thB;ne;joy0tertain0;ment;at2;ash,elcius,h4iv3loth6o0urrency;ld w1nfus0;ion;ar;ics;aos,e0;e1w0;ing;se;a1eef,read,utt0;er;g0ss;ga0;ge;c3dvi2irc1mnes0;ty;raft;ce;id|MaleName\xA60:15Y;1:0WH;2:15T;3:0X1;4:15R;5:15O;6:14V;7:12G;8:13Z;9:0T5;A:15A;B:15V;C:0XS;D:10H;E:161;F:0XQ;G:121;H:154;I:15H;J:12Z;K:12C;a0UNb0R6c0N5d0IVe0ECf0CLg0AKh07Wi065j00XkWUlSOmLNnJ0oHMpFMqFErCJs8At5Ju5Dv4Fw38x2Zy0VzL;aZeUhSiRoNranto-eliakim-0XIuMyL;a0E0e-1l0on;ha102ko,na102;!hNlMraL;iz,n,v8;an,kefJ;a0UWe0ZY;ad,drCed,ha0W8on-malcolm,ri,s0DIya08A;aLih0Yur0WH;o,y6;chariah-d0HFdekiAeOiNkMlyjAm0GZn11Hph0ZUus,v0VByL;d0n;aryAe;d,k,n;sh0v;ab0T0c01e00f4hYiWkRlm0MHnQo,rPvOyL;aMdLed,nH;!e0R1;an,n0R0;en,iH3;eh,ri7;d4e;!aLe15Pi05k;el,rL;iLy0TO;!aDyL;a,yA;dLk,n;!an,en;iLr0y03I;!-VXd,r;d3l,vi4;!-XariIch10HhSkL;!-PaMelLi2ka12N;oi,y;el,rL;iLyP9;!a,e;aLeT4oF;a158la5;!-OaLe12Gri;el,rL;iLy;!ah;a0ZWcarinD7e0ND;a2h0F8;a10d0Ze0Uhish12Zi0Ml0IoXsa156uRvMzaL;ak,k;anOeLon98;de0Q8sL;!-L;a0ODdeVlo0O8;!d4hBKn;anz142b0OEeya0UYg0ka,ma,nOri,sNuMvaLxu0ze;an,nyu;ma,t5;ef,ha,sef,uf;!di,es,xiL;ao;a04el,ha01l0m,nYrXsTuL;ba,c0YTmRnQri10CsOtha0FLvLzarsZ2;aMeL;nsl9;!s04Y;af,ef,ouf,sLuf;ef,ouP;esDis,n11K;bi,si;ef,hNsL;ef,iL;!f;t5ua;a0JDd0;!atLg;anLh0;!-nahit0;an,nL;!-Ln;he0UJna0MF;h,n0PB;anMiLy0;am,ot;!nL;!-mi0PB;annCdRgitalp,ks146sNtL;ch143zL;chok,y;hMrL;a2o2;aLe0TY;i,n,ya;a,dy,el;cPDdid126hNnn0rMsL;ho0G4s0QX;ik,omah0sult0zh0;iLoZOu0XJ;a,da;a0IOrC;a06co05dh0RKga0EVh04ir,j0V2k02l01mYnQoj11Eq13Drosl0PRsNt,ussoMya,zL;anHen,id;uf;e0SEh0RJinHsLt3;e0F7iL;nHr;!a2iPkOnLz0OF;!-Mel,iLy7;!-QUck,s;a2e0H3g0N6malE;ho0RLy;!ck,r,sL;!sL;-lCSe;aMeLin,o;en,n;c,n;elaIOuk;i6oLyin-e0KV;b,p,ub-talJv;ia,ya;b,ub;coLdh92ko12R;ub,v;aPiOuL;aLeshe0T0;h,nL;an,yu;a0SXu06H;nd4vLy10W;er,ieLy4;!r-L;d0GXg0MJ;a0Fe08hal3iSoPulfr0M0yL;attNlL;an,lL;!iamD;!-mikisiw;lfModL;-SYl9row;!gang095;dZlOnsMsLthB;am,d0V6hl9ken0XW;lLt1;ey,ow;an,bUde0E2eTfrSheO0iBkiGlLs1vrEyB;a10Wem,iLo10Wy056;aLe,s;mLn;!-Ls;an019eMjaLliBnkunku;cK1y;do0LFst0B5;ed0ZLid;m,y;e0LKur;dW5l9;aQdechouce0VKll0ILnde0O7rPsL;!leyNs,tL;leyLon;!-all0;!-ow3;a0XSn4;!l0;b0dVeUk120lQm0rPsNttMvinKZyL;an,de0MZl1ne;a0CPs1;im,ko,sL;esk0ZIim;n4r3;iNk4lLt4;a0R6yL;!-sant0RK;!d,s;el,l;e,l9st1;a0Be07iQladNo0MOramAyL;an,ct0WOktL;hor,or;!iL;mLsl0NJ;ir,yr;aZcUet,ha0kt0WJlla0YXnQrOsNtLva100;aLh0Z3or,tor0W7;ly,r;ag0hvas0Z7;ajLgilH;!ay;ceLn;!nL;tLzo;!-re6;!enOhJkt0W9torL;!-MiL;en,no;e06Thu027oF;te,zo;m,nLte109;ey,n9;dd4er0X6liNnMrL;n1so0YF;i,ka0Q7;-j0ns-s0W8;hQihitinRMlOnNsMug0CSyL;d3k,l3;co,sili0QN;!ce,ja,sh;eLmo0OIoCyk;ntin0Y2re;ak,e;b4go,lNm8no,qittuq,rbanny-si0KTsMtshima0QMwL;ays,e;a5h4m0;ri0W4ysL;!sL;!eD;a1Qc1Oe1Ch0Qi0Ko06rUsTuRwal0UEyLzR8;-lorr,cPe,leNrLs1;eLonH;e,n-ja0ZXse;n,rL;!-QJ;e,ho;a0WAd0VEll0V3mLnGSuvviYSv0YLwa;a0W2i;aiyAhakape101oht0UD;aTeQiLoy,um0yst0;nh,sL;h0tL;anLon;!-Lo;brav3elyo0W0mavrLG;nt0SJvMyL;!sIU;in,or;vLyv3;er,isL;!-hunt4;biXd0LAmPnOrNuL;lou0K4mL;ai,ec0YX;!r0VJ;a,han0XRy2L;!-el0HXaQiPmMoLs3y;ha1Eki;a0TTie,yL;!-Lly;al08Tjohn0M3l0J2;!ly;!sL;!so;-ga2aDe,n;-pa0PGaPd0W7ern0ki,mMno-ka09Nonerahta0JRtLz05L;an,ou0us;!a2eo,my,othLur;eLy0RC;!e,ly;an,go,m;a03eViRoLu0TJys1;maMrL;in,s3;!h,sLz;!-L;jLmV4oFpi4w0T1xa0R1;ay,o0B3;agNba0L3erL;noLry;!-boussouri0N1;go,o;a08Ll0TToNrL;en0OFiL;on,us;-NdoLge6h9Pphi0WXtimH;rLsi0OR;!-0IDe,o;aLelKgeMJiR2;l0ICuJO;dLnh-0o,r0WH;!deL;e,us;dTioter1jSmRoQrMva,yL;l1m;en0O3rL;an0O2eLy;ll,nceL;!-r0O6;!d0TN;esg3uul3;b0S6jy-0TJme0L5v0S6;!dLji-nicB2;ri7yL;!-ily0;abezi,hL;ad,ev,on0LF;d04evo,g6h03i01kZlYmXnWrTsStRvQwPyL;eNlMm,ssL;ir,on;an,er;b,m;fEOh0XO;arCia07Q;!e,suY4;e3io,os,w5;eMiLw5;k,us;k,q;ay,gu0V0n4o;arata0TMim,o,r1u;al,ha,la,on;eLsh0DXu05C;ru;c0WYmL;!ur;aORs5;eo,gh,hg;a2Oc2Je26h16i0Uk0Tl0Rmail0THne0INo0Dp0Br0Asirem-arezXQtVuOv3yLzym1;ed,f56lLph56;la,vL;a5e0SM;bh0di,hQje0XFlOnMrL;aj,e08F;kIMny-jaLy;m0UIy;aim0eymanLta6;!-f0RG;a0e;aWeLorm,ua0GTy0TJ;a048eUfSlRphPrOvLwa0GS;eMoL;!n-bernez;!-b0K4nD;a,leG;aLen;nHr0SL;io,l0;anLfensen-mar0TA;!oD;f0ve;nLthCvr0MY;!islaLl9;v,w;ishar0u0SD;irLlende0W8;id1o;an,ckni0MXfXhVlSnQphea-psJrPuMvaL;nn,thno0L1;lMmaLta;i0OAr;aym0W0ey0VR;an,en,in,ou0WL;ny,yL;!-j0PF;aMeLly0om1t0y;am,m,y;l,nn;aLeyb;i0O2n;ia6y0;a0RVen0LZiL;ma6ver07A;a0QPyl0;aVdSh0P3lRmNn0rLu,vu0NYyB;ajLe-is0PHi0VV;!ed0S3;c0QAeonNonL;!-L;oFpi0RY;!ie;as47v0R2;!dMiLj0OXney-ludL8y;!-malHL;har0S4ik;ka,m;aZeWiTloSmQnPoOrMuLy0GA;kapYLl0U0o,y0TS;aQ4iL;ne2thE;h0ONl0ONma,uvE;e0V8yd4;iLu2;el,l0RA;imC6m0P7;a,lo,mMn-drHAvaLy0AI;!an0VNn0VN;on,wa;i6SlMphe0U9rL;kh0m0v5w5;d0H7t1;ad04ba03d02hYil0ke0TMlXmVnTqu7CrRuQwNyL;aLd3e,l0n0NNze;!an,n;!eGnL;!-L;anP9e017im0P9j0PX;g07Hl,m0JPn;b2e0TFlLun,v5w5;es,o;!eLg,qi0LG;!-w0PA;ar,sL;-0R2hy;by,om;e4iNrMve4zaL;d,in;am,u69;d,ne,r;!d0IAi;az,ni,z;!wE;aWbastiUhajj,igne0UDkouGElSmRKny,pan0KFrNth0TTvMyL;di05Xmo0UCon,y0O6;an0TRen;aOgLig6;eMiL;o,us;!j;fi04Ij,ph83;e0STim,lLy0U3;a,en,ou;anLen;!-andr0RS;m0U8n03Ht1;hOoL;ot,tL;!tL;!ie,y;illems1led4;a0Nba0Md0Iel,f0Fge,h0Ei0Bj09ku,l04mWnRqQrPsOtNul,vMyL;an0TAed,f,ha0i;erio,io;hur0Io0KT;ja,u05Y;ad0KCim,p,y;ar,ib;ad,chi0QDdNtL;iLos;aVIno;eep8IrL;i0NJo;-elRaPbXNhai098iOka,mKna0KAo0RFra0Q8s1uL;elLilK;!-Le,i;f4Yjas1oF;!m,r;el,nLr0Q3;el9v0MT;i,oi;aNeMiLm0T9om1vato0PQ;a,f,h,k,m;em,h,m;hLs;e0PNou0PN;ad,ed,iLj0;d,t;!dMfLha0lPXntal0OOy0;!-al-d5an;-wassO4ou;aqi2ee0PQil,okwatawah0E2;aMoLw0SY;i6ua6;n,ri;aMdin-sa0N4ek,iLjo,ra;ne,q;!siL;va;i,sSG;dLj0m,w0;!at;a1Ne16h13i0OoYuRwon0FYyL;aMd4eLk4lan0EVou,z3;!rs1;dNnL;!-jaLn,ve4;m0QBys1;!-y0NC;bPdOf0SQixu0maanSYpe0COsL;sMtL;aga8on,y;!el02H;ol0BArV9y;enLin;!-sRZs;an,b07c06d04e0QEge03h01i,l00mVnRoPsNuMw3yL;!ce;ss2zb0PE;cLh,s,t0LN;oe;beGdLjeicen9;!eGy;!aMdo,ekwataratatKnLy;ie-3Iy;do,el,ld,nL;!-rotianoh1;aNeLiHU;lLo,ri7;io,l;inLn;!-d03Y;and0Q0la0A5;aLit;m,n,tH;l0NDr;e0P2g4ly,n9ol0PZrigL;o,ue;!co,ky;bYReLin,s1;e,rtL;!-oFo;ad,cRdQen0RWha0QYlPque-cartD4shNtLyaZZ;chYNhLv0;iavu0O9vE;an,iL;k,r0HI;ay-male0AKey0L6;am,wa6;ardRc04UhOkLo;!-oFey,ie,yL;!-jL;ax;a0QJerLie,mo09K;!-L;lea0BDrHC;o,y;aMudeGyL;ad,car0CUs,thm;li,yt;!da,eZgXiWmSnOuNwMx,yLza;an0RNl0n3A;an,en0RJ;b3el,v3;aMce,eLo0RHsWH;!-0IS;s,to,uL;d,lt;iMyL;!-ch033;-pi4nL;gt1;d,l0MWn-authr0KMth;gKiL;mbJna0IRs;dLg0z0N7;!a,l9;ad,bNUc0Ad09e08f07gn8h04i03jb0L3k01lZmXnUouTp068ronPWsRtQul,vi,wad,yNzL;iLm08E;el,ne;aMde0OMen,k0mLn,sA5v3y0;iHo08S;an,nH;anakpanhas0R9ewennattok0L5;hLl07Os0Q2t5;ad,id;f,l;ce,dMgBiL;!ehtiia0CG;al00Col096y;e2iLon,s0JQy,z0A1;!n,ro;f,i,phL;!-om8;aLiKP;diZ0n;d3h0l9y0;eLhim,im,ul;emLriiohst0KQ;!-kwe04F;ael0O4el,fi,y;d,ed,l;ie,m0o0NMv5;h0Q6imL;!-moh0OG;aQuL;aOent5iLoc,s0JA;ll,nL;cy,tL;in,on,us;n,vo;is,lA2sL;im,s0OC;a0Xe0Ph0CiZoYrMuL;r0CFtugu;aUeTiNoL;mes0ALsL;ne0BLp4;am,mael-mwen00MnLthi0Q2ySC;ceMsL;ey,l9;-Lt1;ch01MjoM1lL;auFI;manj,st1;bhno0L6ggodDMm0D2nL;ee0LZil;asKfin0COl;eMoQEraLse0LX;ji0LWv2Y;rLt0L3;-Qi,rL;eLi7ot,y;!-L;arX5eLh09WlTWm07IoF;dLl0CB;g8ri7;aMeLhuQVlTToFyv0MP;li,ti08R;lexLnJD;!a090iD;arWeViNoMylL;!ip;eni0AXng;lLn08Z;!-SMem1iMlipL;!e-eKX;be08UpL;!-Ne,pL;!eL;!-anJ2;anJ1em071;lUZnUZ;e0BDre0BD;d0KFgan0A6nd8rPtL;aNeLr0F3;!rL;!-jim0IMki0F6ly,s1;p0r;cLl9;evJivJyL;!-mille0KQ;b097d06g05hulpre0BPim0lla0NCn03o097pZrYsXtrickWulPvLxt1;eLl0EV;er,lL;!-L;kyGX;!-Linho,oosKusK;aPemOhYXiv0kNlucImL;erveLuhir0MH;ils;arC;i0MRm06G;i0CFnIF;!-0LJ;cJko;is-anNLne0BBsh0;aNeL;!-cheiL;kh;!-mb8;aLos;giotiDm-mathiI;nari0KEop-nga05J;e0LQli,ra05G;a0Xb0Tctav0Qd0Nha0Mi0Lj0Kke6l08m05n04pfo0MEr00sTtRuOvMwe0LPy0NIzL;!an,er;ad0HXiL;de,la;arith-is0M4dia0LFm8ri2sL;a06TmaneLsa06T;!-abak8;hLis,to;m0ni2;aQc8ePheaOiNk8lo,mMvL;al00T;an,o05L;rCta;!-sakyd0;e,id;ma,r069y0H2;d3eNiMlV2ri7vL;il0LX;am,on;n,sMD;awatek0HRd4esi0BJur,yx;aMerLid;!-halC;el,i4ni,r;aVeUiOl06QuLy0FL;omac0MTwatL;is08KoL;bi,mi0LA;!vL;erNierLo;!-L;far0N1richa0M0;!-L;j0HUre0HW;!k0J9;mipo0J8n08I;as,eh;h0z4;ha07Mri;alrEe09Ein,rEyL;n,sL;!seI;eMiL;an,o;!-leDX;eMiLonabyos0M9ry0;e,nXY;d,rL;on,t;k04Inkar9I;a1Hdoo0L0e0Zg0Wh0Vi09jimg0AZoOr068sh0LVuNyL;jAkLl0x1;olI;ka0L8ma080r,t5;a01d0e00hZiYj0lSma0rRss1uOvMyL;!an,l0;aBWiL;!c;h,rL;a0IGeLliaki6;d0IFne;be063dJWik,m0;aLh0;m,nL;!-Ln;h0M2jaMkeLphillA5;an0;m0JIy0BZ;am,k;a0IHl0;!l,v0;ch,h-MkLm,n;!im;aLg063j0GQkarl,l0ACno2oFr3T;mo0LLnW6;a05b04cVdUg2i06HkQlPmOnNrMsta8th0va0KWxLy08Zz8;onLBx1;us0v0;ad,g0BYit,o,ssem1;istch0A6sjuu;!a08Xs,t1;aNh0M8ko,laFOoLsh0wisCy;!laLs0A1;!i,os,s;h0n;al,ehE;co066holSkQoL;!-a0GOlL;aLo,s1;e,os,sL;!-L;vladim0FKxa0DQ;!-Lan,oYXy0ES;daSNs4N;as,s1;al,rI;m,nVK;at0HXu;anMoL;fa7nga0BN;a,mi;a01b00dZeXganci,hUiSjm0Gk2JlQo,sPtOviNwMysLz8;on,s1;en,t1;l0JIn,o;an2han2;ha,s;lhoLs1;-sB;k0lL;!s3;emiLi053;aLe;h,s;skeGtaLv;-anok04Nn;!al;o,s0DS;l,nGA;al0L4b09c08d07el,ftul06h05i04j03k02manv0ESn01o00pZsXtPvOwNx0yLz0JY;an,e0GXil,l3ren-nut5tL;e064h0on;az,e0E3f2id;a0GXis-waseyaw;anRe0IBhLt0;aMeo,yL;!n-jo9;el,nL;!-La2el,i2n,y2;aLfredd,j0F6rafa2s78;lTZns2;!a2;er,h,ir,ko,rL;ed0GE;ole1s;ki,to;abany5o0BF;e0IIia0GLoa,sh;a,d,i;f,m;el,id,ko,u2;e,i;er,ir,j0JBym;er,hm0ib;il,y;.,a33b30ccall0DVd2Ze2Aham0DGi13o04rityunj0D2uRyL;c04YkOlNoMrLshka-raymo01U;ic,ko,on;!zi1;a0es,o;aLeJ7hay04Eo;el,h-a6U;az,ftAhamRjah0JOkBnQrPsNtLzamm0K9;as0J0iL;ng0HR;a,hLsa,taX;id,raf5;ad,pOR;tas0DPz0DP;ad,ed,mL;adMedL;!-poyr25;!-Ls0IQ;aLham0DNrayy0;bdRJy0;a0Ict8d0He,h05is02k01nZo0CVrXsWtXNuL;ad0JChamPin,j08Fl0CHnNr0IJsL;a,sa,taL;fa,p0DN;djo0IYiLji;be,r;adOedMmL;ad,ed;!-L;djiX4mbaye-di00N;!ouL;!-falil07H;es,he,s0ISusK;ad,dec52isLphe0IWy;!sa07K;c0DGdU1er,n06HtL;e,he,y;ht8rB;eMhL;e,y;!-vitJs;aLc3iz,s3;mLnd;adTedPmL;adLod;!-L;hazLot0HW;iq;!-L;aMchoua07NlaMsel0HYyaL;ci6sJ9;mi6;!-aWK;iCRou;ad,h,z;a0E0c0CenZXg0Bh05XkXlTnQo,rOsNtLva0zy0GC;an9LchLia,ya,zNS;!e04V;a2hka-yaXPp0GGsa2taayaapimak5;aLko,o,za03T;c,j,l03M;aLik,j0GD;-necLl00Zto;tari08H;!aNeIFiaSKkeGl4oMtL;ia0DWon;s0I3v01R;d,no;aUeRhOi08HkNoL;-clar07VlaL;i,j;el,o;aLel;elLil,li;!-yohaX9;!-Ll-elUXy;al01SeLsam0BP;dwiX6mmZX;eLil066;el,lL;!-rL;om0D2;nene07Eu2;aYco,hPip0B4kLo,to;aMeLy;al,y;elLn02W;!-victo0F3;aPeL;al,e,ka2lL;!-jLiRG;acLu0CX;ob;-2elLh,il,l;!-L;angeLfar0EPjul075;!lo;el,m;av3c08d06h02ir,k01lYmphCnWrPsMtCYup0EOvLys034zyB;en,ri7;hMr0AsiL;ah,e;a056il0FGul0FG;aR3iOlNriMu,vinL;!-tahiR2;ck,ll;e,in;cLk;-diLk;az;ach0F8dLelEh;el,ri7y;!e04WiIkyr03Sr00HviLw5;nLs;!-ev0;a,hi;ar,dMm03TraL;aj,b;!iL;!-az0G5;!erLgy;i0CKyk;e6h2;!.;aLum053;kLye;op;a31c2Yd2Te2Rg2Qh2Oi2Mj2Lk2Il25m21n1Rr12s0Wt08ur05v02wu01xSyLz3;aQce,dPeOo0BZri7sLt0v3z-maxim0G9;onLs029;!-sLn;ha052;le,s,ul;en,ji-s3;nk,sD;!-QaZZenPimLon,we02P;-oFeNilLus;iLli0;an0DWen;-oF;!d0C5e;anA5eLjayd1oF;doZLli,mL;il0B7y0A;en,na;erMrL;e7i0BVy09J;i09Iy09I;iLo;cLz0B1;e,io,k;a2e07hXiVrLUtMyL;ar,s;!-dReo,hMiLy;aDs;eMiL;as,eu;o,wL;!-domL;inH3;aLerY9;ni2vC;as,n0D8sL;!se;aTeQiMyL;as,s,y;asMeuX2sL;!-oF;!-emiL;li3;au,oLus,w;!-Ls;j09Yrob5;el,i05Fy0F0;i,oDs;oPr0ERsMtLw5;anabJenHiI;ao,iLyOQ;!l,mLne;ilLIo;da,n;cXek,fat0BPiWkSlRquCsQtNvLw0EJ;enLin;!sUZ;iLy;!nL;!ez;!ha019;in,o008;!-MoDquiZEusL;!iH;andrLoF;ay,ew;le6n0CDoDus;!-PeMly,oLus;!n044s;au,lL;!lL;iOGo;aOeMgregLjYXmigis08RoXRu0EQyl0;oi0AH;doXYlL;i,y1;lNXnMrM2uL;re0CP;d0ACtXY;aTdrSef,gRiQkPnOoMr03Ws1tIYuLvEyx,zi;!el;!e,lL;iP1o;!a,y;ir05V;!l8Xx;a,o09M;aPVi7;el,k2y;adMouL;d02Bn;!ouL;!ba;aUcoTeSiPk06WlOoMtT3yL;ck58k;!ne,rL;yk;ex;ck,kLx;-shezecLi;hi2;c09Mek,o;lm,m;chMkLmi6;ai,hai;ai,i,y;aMeo,ht8o-tayl090sLyl;en,im,ym;n,r0CJ;d,ed,o0AC;d3eve3kLlo,y2;!an,h0;amaLdWQel,ik0jesRKmoT6;d01Ot;as09Hn0D4;lLs1vE;!-jeQ7o;a0B3deOeo,i,jNox,rL;i7yL;c,k,x;ames0BVid;n,x;!aMeo,il,kL;!andJinto0D8;n,rKQ;mo0B2nI;a35e29hyBi1Vl1To0DuSyL;-3IaOdeGhBiBle,nNoLr1;!f08EnL;dr9el;dYPk3;d,ll,mLnd4;!-sLm;eb0Y;an,cWdSiOkNmum01Aqman,tMxLyaS2zy;de0A4;h4or;aNIe;gi,sLz-al2H;!-L;aLemilJ2feli05E;ng2;dV4erW4g4ovNvi7wiL;gLk;!-thodXR;i08Dy061;!-aSaPcaOiMkLreti0C8;aDgZ8s1;aMBenLus;!-haro03Z;!-fernJS;-j070h,sL;!-Ls;alW4dWC;lLRn69;am,c2Wev0g0Xh0Ui0Sj058k0Rmega-kyl4Jn0Qr0Mt0LuSvOwMyL;ck,d,k;an,eLiYK;!ll,n;enMiL;c07Zk,tz;sLzo;!ki02C;-0Ba08Bc09d07en,iPj050kMma2nLp,ra1UvEys;es,is;aLe,i,ma6;-Lh,s;fr9L;ck,e,sLz0C7;!-Lon;aYbXcWdNEeVfUgSjRoQpMr1GsLthomIvict078xa03Z;aTQim1;aNhLi07P;i04GylL;ip;scJul;li03Tvi03E;am08We0oU0;ab0BSeL;org08U;elHIreder00F;doUZmi09T;hN9yr;as9A;lLn5F;beV3exV1phonVZ;eLvE;n,vi7;asLkI;!-pat084;e07OgVAhHAmaL;r5tE0;fi,us;d,enzoNiL;an,cLk,n,s;!kK4;!-dV5;ko,nK;a0AGi,ma6;cLkCPm;!-eGXk;aLik;m,nL;!-dimit01H;an-Len,g0hQC;eVNjLmTV;a7oT7;eyt1iIoLyB;rCyd;aSem,hBlian-u0AXnPoNpa,sa066viMyLza066;am,o;s,u;c04VnLyd;!ar,el,n2;!cMdLkMo,us;!on,yn;oln;am,mMnL;!g,no,yu0;!-Ls;ax2eMjLlFZmave079oFphar0AMt91;am07Oo07K;lNBmmSDrTWxc2;a0Ee0CfterCgaRIho,i0Aks08ClaS5m09n05oUr009sSuRvOwMx035yL;d3reGth0;dLis033;ovE;!aMiLon-N7;k,n;n,ri-08B;me07Yng;h0tLzSR;at,er;-Oh,lo,nNpMrL;ic,y7;aCXo01L;!ar016el,gIOidI;aPcOfloNgTZj04Mmi009naMpaCVrL;apP2;ss4th0;reXY;hLMlQD;lLn92ymerTC;eja058;!dMno,ox,sl9tz-keLzo;nd41;onLuOY;!-prinZF;my,u2;bLf,g1Eo;!i09Py;-Lb3s1vi,yBzhWY;am,li0;mh,ndrL;e,oD;bi00Sc04fOUi02m00nVrryUsTuPwOyLzar01X;as,dLeGke,ne,s1t8W;enLon;!-pa6X;rZ2sV4;g0rL;ent-MiL;aXCck,er;chaTTgT9oFvictoSY;siKCzTO;!-03D;bo,ceOdLe;onLyn;!-Ln;jaKT;!l07Q;bLe7inHoX3;eSOrZ5;ne-Lth,z4;ed3;hl0;a2Ce1Gh11i0Ql0On0Mo08rZuUyL;-anh,aRd2e,lOmNng,o,rLs1;ee,iLo;e,llYY;a06KiA;aMeLia051li0o;!-VTiVRr,z1;n,yd3;m,nL;!sh,u;angrOnseNrtL;!isLy-all3;!-XD;vi;ui;iMysL;s,tof4;k03TsL;hPs,tL;ianNoL;ffer-alexy,pheLs;!r;!-HQ;!iv;a082bVceiZYdTFfUh3lSmRnPp08JrOsMuLvRIw3;assieQNss016;ay,say,taL;!ntinYA;om,y;r074stantinL;!os;en0l0;iLtU7ya;a,n;fi,i;eMiLy;!a,na;!-malQH;igLox;ht1;awb4eLim,ovC;av1di,in;aUd07GeSlQnOp,rMshoUCwed0yaL;n,sh;by,iLk,ollXTsl4uihik0;ll,thE;anHen,gLh0i05Lo;-hRYne,sTI;i0lLuFY;ia03Tua,y0;no,rL;an,kegaardiii;an,mbu,n0VtainZ8;aSeRiOrCurshe00SyL;lMrL;ee,oh;er,li0;an,dMlL;li0;ir,r;an,mULr02R;d06Cel,iQlLmd3ngJrC;eMiL;d,l,o;b,dL;!-iL;saVD;!li,re;a0Eb,d0De0Bh0Ai09keli-seI4l06m05nUoTphr3rRsQurt43vOwentesh1yLzv5;a05Ud3lMm8sL;hawnWEon;eb,i0;an,en,inLoS9;!st1;haVGl9;bSBem,leGmU3oa7vensLy0;!l03F;-archibaYBn05Q;!aUdrRji,l9nPri7sOtMvenslay-lov4y1zL;i,o;!aLon;rontKvio06D;h5zy;e02TyL;!-joIS;iLyx;c02DkLx;!-manoQX;ld,n;i,yrhodz-ma4;anMd3eb06Ki0lN5t1vLy0;in,yLL;!i,n;-leLJd0r02Tth-oliv4;in,od0;g0l0nanLph4vensVLway6yd3;!-giG3;dy,o05Xs3;nLt1;!u;!b0Tc0Sd0Re0Qh0Oi0Ll0Hm0An07peni3rYsUth04BvSyL;a02Dce,dOlNn0sLumUJyd3z3;aHYen,haLon,seHY;un,wn;eVAiB;an,eL;e,nL;!-mayvrEs;an,iL;!ir0n;e1ThMp4ra,sL;em,i2ym;!iL;s,us;aSeRiQlMmLonhiakatsX1rs1sLFt4un;a,elo-daUB;!-LeGh,ss1y03Y;anMeQFgPNn64oFrLsabanZwar02G;apKQo33;toi6;fa,m;em,m,n03B;m,n,s;aLe,n1t01Iz0;an-paLe,metX3ta,v;bo;aPbaNeMil,rL;an,on,yn;l,r1;!-kiL;ji;al,el,ha,nL;ga;-2eNiMo,vY2yL;an,x;fa,x;b,l,m,n;-o0dRAe03h0l3nMrLs,z4;av,oD;!oa;aaLzSD;if;d3l0;aQAeQA;e,im;aLel,ir,r2;!la;a2Ne1Hh1Gi18leyGoZrP6uMyL;d3m-hard3;aUba,dQi0jh8lNnMstinLwa0;!-chrC;a5Yelo00N;es-MiLli0yK4;an02Aen,o,us;eAJoF;aNdMe-dLl9;yl0;!s02I;!el,h;d0nL;!-La00J;baptisU0migu2pabOVs1U;-0Sa0Pb0Och02Bd0Ne0Iffrey-7Kh0El0Dn0Ao09r05sPuNvaMw3ys1zL;ef,iA;ly,n;deLneiYO;!ns02X;!ayAeWhQiMsLta,ue;el5o03R;aLf;h,sL;!-marvenL;tz;!-NuaL;!-L;ad3feliTRmiOX;eMr2JsheL;eh0;lMFvaG;!-yadi2f,li9IphL;!-L;be01NeLgamali2juZ8saLS;tiN6;aNdLeHTgeP6i7;anLeGi,on,y;!nT7o;m,nP3;dZCn;!aLny;h,ic,s,tLyA;an,h1S;an,em;anMnL;!ath1Pie,nA4;!nL;!es;!-dOl,nNsLUy-L;joLkenneOM;shFY;dy,ey-tN3;ays1;-mica2eQW;-carVUey;!ch02Ed,h,kMnLquiZJs;asK;h002im;ed3naLM;aRbrQe,hPmMnLr3;!gshuo,u;!ly,mL;iLy;e,sh;ad,larCV;an,e2il;ch3la,n,yu0;aiYDeFS;an08chesk2d04e03f00hIMiroZlFTnYovGPphU7rSsPthYCvOw01IxNyL;la00NmWUo,remL;ih;!-eGQ;ah,is;ed,hv5iAsLus;!e-Lim,yVY;jXCwWU;aU8emOi2mai6oMrL;a01EyJJ;meLniJZ;!-je0;iLy;!-dMKah,e;is1l9oAs3;-saKE;fLr9;!-LeZUrMB;rVDwardn9;ka,te02Gv0;!-NeMidiahL;!-judA;!diA;maLAsaK6;-Ln00W;baZcYdWfUgM7joKKkristof,l54mSnRom7GpPrNsMthLyaHF;eo,omI;im1;aDMoL;beLR;aLhiUR;scJ;aKGoA;aLiNG;rKthC;el7VrL;ancoC;aLoLC;ni2rlanRKv01M;hristopMZlIB;pQ0sL;ti3;a1Nb1Mc1Gd1Fe1Eg1Dh19i15k10le2m0On0No,p0Mr0Js0Dv0Cw00Rx05yMzL;e,iA;!-02an,c00dVfeN4hUkTleSmPnOWrOsMth0vLzBH;eGyn;eMZon,sLun;en,i,on;e9Ai7o;aMeLiBC;!e,sUA;el,r;hn,n;!e,oMC;an,on;an,eLon;-louvEl,nLrs1;-Le,n,s;alARlL0ph01NsLterYP;koPAmylOJ;eLob;!-sherwoOTe,n,s;ar,deGE;!en,onPsMtLx1;on,yn;en,onL;!-rL;il9;!-tL;yl4;aYQi4on;e,hXFonNp4sMuL;ah,or;em,im;!-L;seLwilliaVIza6;ti;eMod,rLvC;eORis1od;d,ll;deXZnBraB;!in,o,vi4;aVeOiMyL;!e,s1;eLs1;-b,s1;sLys1;!-Lly,on;aNe6DkuK4n0XoFri7sLwUL;ebasL;ti0;leksaK0nL;thoN3;l,r;eMob,sonLub;!-lJZ;!-Ls;eLmFA;lyYUmmI5;!d3kNmMrZVsLve4y0;h,on;es,y;e,obK;an,cobi,eMkeGle2meVZnei,reMEyL;d3eXL;em,imL;!-markend2;be4rPG;d3my;!en,h3son-aJI;!ePkNoLquX3;!bL;-auguWZo;!ob,sLy;!eXBonD;!-kK2k;aDLer;f8ji,ka,nLx;ve4;a18brah16chiB1d14ehahonwe,g12hs3k0Zl0Rm0Pn0Mo0Jr0FsWtTvRw0yOzL;aLik,y0;aVDcLk,o;!kJQ;aMeLleizSG;d,s;an,dHn,s;anLha0iMZo;!-ro1A;aIMhBoBWsuMzaL;e,mAF;ki;aXhaViUkaTRlXGmaRrael-PsMuL;!m4;aLelmNG;!cLm,o,yah-kh0;!ar;nLoluwaseX3;ol0;elLilN9;!-yasL;si6;ah,doUX;aLi,q;n,q;aUPcURiMkLm,o,ya;!-marK;!aNc,eL;!-L;jonW1williaMR;!h,s;aNchXRf0hBsutPTvLw5;inLyn;!g;ah,j,klC;aLrdanC;nLquXQ;!nC;assTMuL;apEkLnnguQA;!pPK;aLmIrXX;d,m;aRh0iOl0oNyL;aLes;!nHsR6;yd;aLja,r;n,sL;!-taSF;m,nN7;eMtan-santiaL;go;!n98r;nacioLor;!-leaTH;an,en-henl9ir,risL;!sM7;eW6imL;!-tareq,a;hMin,m,nL;!-alexC;!arahkw3;a14e08i04miRVoTrag,uMyL;d8y0;beHGds1gQluTVmPnNsLxl9zaiV;nu-eym3sL;a5e5;arjWDtL;er,l9;ber38;h,uUV;aNVlSm4ngRrPsWuLwaWCzea;dMmainsudaCssL;am,e5;!ayLen;fa;acLmidI;e,io;miNOyi;d3lLm0;an,yL;scoLCwoKX;beVKd0mNnaMVrMsLz1;se5;d,o;anXA;a0Fba,ctSKd0Di09ktor-RCl06mr05nTrOsNyMzekL;aiAyA;dDVt0v3;ed,t1;bOcuVCdens-abI9leNm0ri7sh,veL;!nL;dHFs;ns,y;eGMy;driVocWRrLzo;iPyL;!-Lck;eRCjRHmatL;hiL;eu;!-Lck,k;fel2OlNpL;aLiSM;ul;ouC;ck,k,xME;iQ3y7;iMlyV8oEyL;!am;oDx;dLmsS4s2tRV;an,enL;!-L;adB;dLi,w8;eGy;th,ven-jM7;aQNb0MchUHd0Li0IjooKPk0Gl0Fm09n05o04rVsTtVFv3yLza2;aQdOes,leBHtLve85;hamLon;!-L;edwaUX;a81en-L;gG4kristoff4;an,nLto;!eMBsh;an,e13hU8sL;anHib;dy,is,jUNkeIXlSmQno,oOrNshad-an63uLv9;hi1Jki,n,tL;a,o;isOOy5P;ld,n,on,uL;nK1t;anLeIR;jUGmeIQ;an,eyOZow;!yu0;i,k,nibal-livJ2sNtzMyadanonhwSYzL;alAo;!-mi7D;!en,on;adPda0eOiNmMneJMpCWzaL;!ta;ad,ouPK;d,lt1sh;d,th;!ou;!ek,im;eLim,yl;em,m;dLlaLMtB;ar,eL;n49r;i,ri3;acLib;uc;a1Ae0Vh0Si0Gl0CnamienOIo07rZuLyaR9;eUffy,illSnRrOsMta69yL;-oFllauJ3;!tavL;!e,o;tMvL;anV3e4in;ej;in,t4;auIWeL;!rC9;ds1mtoh,ns20rLzy;bMsL;chNQon;eGir-ja7;aQeMiLov4uOMyph1;ff5gorK;en-jhTQgLi0ys1;!eS3g,oL;iQLrL;io,y;ce-eD1dy,es1hBnt,pLti2ysGC;hy;dOh0nNrMttliL;eb;an,d1;tr0zaEW;sCFw5;amCDeLi1I;b,nL;!-zophLn;ra2;aQde1lbePZno,oNuLveG;liLsepMZ;anRVo;!rMvanL;i,nDG;da40gP8;cOnL;carEJlMmaL;el,ttPA;uca;inLoBD;to;aLilR7;di,li,ssL;anHen;b,de1i2nYoOrLvo6O;aMry,sL;h1on;ld,rdRF;ffrTrgLv7K;eLiJV;!-Os-L;alMeLh40oF;doD3;ix;eMhL;enQZ;miRT;ey,oy;c,e,naOXsS4;-eBWbRdix-liyonBGeBWh3lQmalPoussHPrMspaS7uthi4vLylOU;en,in,n4ri2yn;eMlaB6rLth,v3yLM;eHEy;n,th;!ielO9;aSBen,ilOIo;in,rL;iel-Ly2;adrLpresto6;ia31;a0Xe0Hi0Bl04o00rLuS6y8D;aQedOiL;edMtL;s1z;en,m0;!dLerHVri7;ie,y;nLs4;cMkL;!-dCXlLRy;a,esJXisOk,oL;!isL;!-L;eAQmDNxaKX;!coLzBD;!-0F;de,edl9gaIZrNuL;rKBsseynL;i,ou;e67re67;avNOetQim1oL;rLyd;aGLentMiL;an,eGK;!-jahgiL;ve;ch4;d2eSHlOnMo7MrL;asDdoS3nI;dl9lLBnLt5;!l9;ipLy;!os,po;dZhYiSBlOnNodNMrL;dina9ZnLr0s3ys;an55;g,ni7;iLyx;ci3ks,pHs-SxL;!-L;aMelEUlog0oFtelesphoNZviL;ha0;nMrL;thRH;dNVtoL;i6ny;xaK0;mi;eriIVi,y;aR5bVdUhSizRlQnoHXrMtOFyL;sJz0;eNhaMisLma9IoIT;!si;d,n;s,z;ah,co,lFV;ullA;d,eL;d,em;el,i,l;iMriL;ce,zMJ;anP2en,o;-aw0a40b3Xd3Je3Ifr3HgMSi3Ek3Cl1Wm15n0Wo5phraQJr0Os0It0Eu0Cv03w00xauH4yVzL;aiTdrIeOh0iNraL;-Lh;bor0e4G;c4Go;cOeky2kLlz,qui2;iel-Ly2;musamLwella6F;pa;hi2ki2;e,ki2;aOdNed,m3rBtLyub-ens8;an,hanL;!-kieBL;anveas24en;d,l;anLenCB;!im-gL;eor1J;aNeLh0;ns,rL;eEUs1;an,nL;!-NdMel,gelGWn,sL;!-curO5;!er;alAHjLlAErog4;amNWoe;an,geneLno;!-gAL;an,hLi9Wt2Lua;anLen,fi;!-Le;gAHjL4melchiLV;aKdrIeoghe6kPpOsaNtL;eb0hLif;eb0;!m;eraEEoKB;and8eKT;as7Nf0gi,iOk0lNmK5nMrol,v5wL;anBMin;estNVie,stl9;au,in;cLk;!-Lk;alL;exa9Q;drSeB4nL5oQrNu8Wyu0zL;eLo-O5;!l;iLy;ckLq4V;!-napessC;!chLha,k;!-jeremK;ew,iR;a0Ae06iYmSrPyL;lMrL;!s1;!e,iaL;no;ay,iMyL;!ck,k;cLHk,s;anuelNeLiDM;riDHtL;h,t;!-L;anLjIG;ge9W;lMn,rLx;!h0;!eNiL;aLen,oAP;m,no;!-L;hLoF;enFS;rLtt;ey,iL0yL;-keLck;niku3;ad,nuelHus;-se0a0Zbe8Qchon1d0Xe0Wh0Ui07k05l00mZnathan-kabaGSoUriIKt1uz4vSwQyLze8;-NaMck,esDjAo02sL;ee,i0;keN6m,n,s;anLjJL;ge;aLoCIyn;lONnn;iLyn;n,s;aOhNiMnLu48y;!mi;!cKLk,m,s;an,im;h,n;er,o;al0iMyL;noCotAD;!eMoLs;!tAB;-sN5;aLi;na;-03a00eThu,j0kSmRoNro6sMx,yaLze;!hu;!cha77ei;!s,tL;e,h,tL;!-Le;amayIceleLG;a6eleC5;em,yA;-NlLz4;!-mikL;ka;anCdNjMraL;fa2p36;amLAuJE;avNS;b,kN4m,nMsL;!-bas22s;!ge,o;chNdjayMjLnoA;amL4e0;ke;arlL2;!aLyB;dj,ji;beC5ftherios-haralamb,iIm5xC;eLon,ry7;n,r;ijAj,m,n,z4;aLdeKXo;mjM9svHK;d3nMsJLtL;an,h0;ar,o;aiJRen;li,sa;!-steph3anXdVeUfoM6gar94iTmSoRrPuardL2vOwL;ardLeGin,yn;!-vaugLo;hn;aH7i2;iLy0;ck,en,k;nexe,uaLZ;o4Zu4Z;!s1z;m,ns,r;en,iLy;e,s1;!-nonE;be,enMoLrahJC;ua;!ez4;m1rMsLt1v3zyG6;h0t8O;l,ne0H;a2Ee1Gh1Ci0Wj0Lm0Ko04rZuWwVyLzime7X;lanLri7s3;-NdL;!-staL;rk;d6ReMjeLm1TrFP;reGF;duMlL;ijA;arL;do;aynHight;a6dl9ke,nc0stL;en,inLyn;!-lenn9P;aOeNiss-KKyss-eL;zeL;ki2;-mesaAHw,xyl;g0ke,yC2z5U;bromir-radostinov,l0mXnQrPuNvLyKL;!iL;c,d;!gLly,m0raM0;!lI;i0je,y0;!-PaOg3InNovL;anLon;!-lev2;!e8Fie,y;ld,ti3v7V;bruBQchriL;st;eniD0inLnEyni7;go,iL;cHRon;itJAytHB;aSePhoshuAiOoMuL;li19nniBJ;!ey,ffr9mo,vL;anJJ;brM3;bb8dL;!jeL;li;meMn,wKNyL;!d3;l,s;armuLBcZdi4eVlTmPnoLMoOrk,vLy8;ad,inL;!e-authoriL;ty;ge6my,n;etBYitL;hBXrL;iLy;!e,os,us;aLlE2;n,w8;go,uLz2;-dMbLdM;enC;on6;en,ke8P;aMeer0iLruv,w8D;r8y0;nLviL4;i5Gz2;a0Gcl0e0Ei0Bj0l0Am05nZon,rUsSvOwNxtMyL;an,lBv1P;er,t4;ay6ey;!anNen,iLon,y6;j0nL;!ce8V;sh,te;hLi,mo2J;a9Co9C;da,eNiLmeGne6Aou,ri7y7;ck,k,qL;ue;ck,kL;!-anzo;aPev0isMnLsleyeliakJPz2;is,y;!-mL;icL;ha2;hi,i,li;aAYba,etriOiNyL;aLr7Z;nn;an,r;os,us;be3Xon,ycK;mMon,tan-lafLvG9;lec5D;i0us;andr9djahmJlLz2;an5H;m1nLv3;!dG0ge4I;c,e0Yl0Wm0Rn0Ko0Gr04s02uG4vTwPxOyL;an,l3m5RsMt1vLwens-six1;en,i;ha8Kon,un;!am,t1;enNm5oMsLud;on,un;ud;!sl9;ePiLon,yD;!a60dMnDsL;!-christoph4on;-Le,s1;ax2panDVsa1LtheodoFM;!-NnL;!-r9IsL;!ky;al3De20hendGD;hie5WtL;an,i0;eUiTne5UonRrMsh0wiJKyL;k,l,us;eMiLyl;ck,el,n;lLn;!lL;!-brilla7D;!-ardzL;iv;an,el,n,o,s,usJ2;l,nL;!tz;!udL;!aL;!-clL;auEO;!-sneid4a2e,ge3HiOl9nMyL;!ck,el,k,l;ickLy;!-fanf0;al,ck,el-Lil,k,lGKs,yJ;bri0daws1eL;do2BlKv7A;aOiMj0on,yL;an,en;anGFenLon;!-kyH1;rl9se;eLiBy0;!ck;l,m1vL;a,en,on;.,a2Qe2Ih0Oi0Nkairauh,l04oXrRuOyL;!prienMrL;il,us;!-octaviI8;niluMrtL;!is;cy;aPeNistL;i0OoL;bJph4;eLp5;d3s1;ig;by,dy,h3lQnPrMsiL;mo;eMma7neLy;ilGFliHV;nt5y;nor,or,rH4stantinHvena65;by,e,in,linDt3T;aUeQiNoLyDN;ud,visL;!-a1M;fLnt;fLt1;!oGN;ff-r28me5Xrmo5XtHLvLyt1;eLon;laL;nd;rSudeMweGyL;!t1;!-L;adOeMoFsaL;mu2;mmL;anu2;gi;ck,eGk;ar0e1Yf-ettig3;a0De04h0i00ontianFEriLuck6Xyl4;nYsL;!-UaBXl9tL;!-Qan,enD1iPmy,oL;ff,pheLs;!rL;!-L;i0jBXwBF;anEW;aymeE1evaGjoLnoA;seL;ph;b48elMjonaLnoAoF;th0;liFR;ov0K;!iMmaobG6wL;et5;muw5shL;ek;iPms,nOrNsLyt1;kLn4t4;el,i,y;my,vE;au,g;ckNkhL;!-ibrahiL;ma;!na;ce,d0Jim,k0Ill3n0FrQsNyL;se,tonL;!-noA;!e-mLka;atL;th15;b2lLo;eLi,o29y9P;-l06ri7sL;!-L;aXdoVePhMisaKl04oLwAJxa8Jyv0;li8Iw3;enrMuL;beZgo;i,y;dOlMmiEJrRtiLvanD;en6;iLoi,y;!e,o47;oLwaEW;uaEV;minL;ic;dQlMntL;ho2Roi6;beNexLfr9C;aLis;ndBV;rt;ri3;ee;!dl4el-L;alL;exaA9;am,ir;!d,i,lLy;ey,y;cG0drQleCUndCGphPsarL;!-L;dMgL;abFQ;ani2;yr;iLyk;cBBk,x;de,el0Ei0Dl05m03n02rQsMyL;de0Rm0r1s3;pNsiMtL;!i2;an,us;er,i0;dy,ey,lQmePrNsten-ga1AterLv3y;!-jL;ayd3;endLo1J;jy;lo;!-Ocy-moiNeMiLoDt1;ns,sDC;ns,s;se;andrLb22;ew;ek,t5;d3ilLr1;!i3o;!eRix,lNno,um,vinL;!-emL;meC7;aLum;gh0han-mL;icL;ka2;!b;d3ne,o,ro,us;-augus5Wan;a29b,e1Ch1Ai13jo16la10o0PrSuNwan8FyL;arass-mweneluLr1;ko;dOg2WrL;ak,eLt78;-saleLch;he;dy;a07e02i00oYuVyL;anPceOd3eNl1Bon,sL;onLs1;!-lynx;nn,r;!n;!-Lson-bidjouBLt;edNkeil9SmiMni7peaL;rs1;ch2;is1;ce,nL;eLo9W;ls1;dy,oLxg8;ks;anLce,el;!d;nNtMydL;en,on;!t;dLn0t6J;an,en,on;dSed3hCUiRndNv3xMyL;an,d3en,son5Wt3;l9t1;en,oL;!nL;!-ashL;by;dy,nd1;!foC8lLy;ay,ey;az,bUdi,gTiSnheCYrPs4HuNwMyL;an,d;!en;a,b6ZdreaL;ult;eJisLna;!lL;av;ll;d0ne;!by,ie;de,iMyL;k,z;ne,r,se;ag84eQj0ko,lPnyOoNraMsL;ai,h2W;hC4me,ne;rn;amin-b5um5;el,ly-floria0Yoo,y;l,nfa05;ag4HertiL;ny;au0Gck0Fej5Rhno0ElkacAZnRrMshL;oi;at,ekOnMtL;!ie,rB;aLie,y;do,rdAA;et;!-05ckl9d03edict,i02jXnWoVsUtPyNzlL;eiL;gh;-Lam5;ry0;leMzL;i1y;e,yL;!-maddL;ox;l9on;it;e0Aie,y;amMi,oenL;ai;iLyn;m,nL;!-matiI;-chB4c76to;avBUjy,ri7;ey;cart4eveLmar73ra2tzi1;ns1;od;am,hB;!-kyl1;a0Bb5Id09k08l05maB6nd04p03rRsNxt1yL;ezBMrL;em,on;iA2sMtiL;aAMen;am,em,iL;li1Um;aUkTnRrOtMuL;ch;!holoL;me;a-vinceMeLon,y;tt;nt;aLey;be;ev;!ck,kL;!a;tis2N;ou;tMzL;ac;aj,haz8;a8MtaBA;aLer,is,r;ra;ba;aB2b9Ec99d8Je8Hf8Fg89h7Zi7Mj7Jk75l4Dm3Zn2Yo2Wputsi2Vq2Rr1Is19t10u0Rv0Gw0Cx0AySzL;aPer,haOiMla9XrL;a2i2;m,yAzL;!j1;wn;an,de,i,m,n,rL;i,yA;aZdYeXh92iWlTmMr1ss9Bth0us9Yv3yL;az,oAS;anPeNricL;-Lk;ibrah9W;n,rL;ic6K;!-adLe;ib;aLey,imI;l,nL;!e,n;!te;en,l;an,en,in;anMnLs,to;!n,sh;!-ro0N;eLil,l,t1x2;ll,m;aMeLsD;b,n;b,nL;-jayY;aUeRiPnOo,rLy0;ahBoh33uL;h32mL;!y;eeA6o5H;!an,n31rLtejpJy0;aj;dCrMsL;ta;i,y-co88;k,sh;bhSdrEgustRllal0ZrelPstNxL;enL;ce;en,inLon,yn;!-r2R;!e,iL;en,o;-a4De,in,us;oy;ah,ef,hOif,l0oMre9Dsa5tiL;c9Cla;m,ng-tanL;yi;aLeo,ir0;nLrv;!asL;e,iL;os;aRer,hPinay9Pl0oOsL;alaMer,iL;m,r7J;ss;ng;ar,er,im,k0vLw5;a5Gin;d,el,hLph,r;d,i;a0Qch0Ne0Lfe3ha0Ji0Dj74k0Cl0m09n01oZrXsTtOvNw5yMzL;ad,h8N;!an,e8XoDs1;en,in;!a,hNiMtuLur6Oy1Y;ri;n,os;emCurL;!-ju64e;al0enNhL;aLb2U;m,n,v5;e,ie;es1oL;n,w;!n,tskent1;on;aMoL;!ld;itPuMvL;!pJ;dLlt;!-morocL;co;uk;aLe61in;an,nL;!d61;a6en,h0in;!an,el-nOh0l5Lo,sLus,y0;!tL;i3WoL;te;athL;ana2;am,m;en;k,n,sL;!ti3P;er,iL;baLe,t;ld;af,fMmLs7Tta,z;!azt;at;iNuL;iLuja;la;b,l;aq;ki,uL;e60s;a0Id07es,g03h02i01sZtNuMvitnadh,yLze;r,s;j0ki7Q;honToL;!ineNnL;iLy;!n56oD;!-L;lewCoF;liL;vi4;is;ey,iMyL;!-j1Z;e,n;dy,el,hLon;!il;konhras1Fme7Bs72;!ad;adNelMuL;i,s;oDus;!ve4;erToniDrNu5yL;!-L;leG;eMiL;ck,x,y;!-Las,i,s,w,y;adonVphiL;lipL;pe;!sL;!on;kMsLto51y;!sH;in,yn;aRdj01eQiPjOm8nNoMrL;om;ryUs;ay;ad,u;el,ne,r;d1Ql,n5;dQel,h,nOrNs0Wu3WvKyMziL;ah,gh;as,es;!i,o;!e,iL;-j0Z;eo,ou,ri2y;!-h2Aa21b1Yc1Vd1Re0Qf0Ohare2Ii07l01ma00oYpTrRsa6tPu6vOwaleNyL;asLk;sa;ed;a1Min;aLon;i,n;iLyk;ck,k;arsl0er,hL;aMeHonsL;e,o;!bL;ac8;is,nLu;so,zo;my;aPeMoL;um;luMnL;!d2JwillK;ia;n,rd;-XfWjAmVoQrNstL;aLer;ir;aMiL;da;za;!cOuL;!-wLm8ne;ilL;liB;ha;!ou,usbA;arh0;mahNyL;oussL;ef;di;onLred2T;so;a0Jc0Ei0Djandro0Bk08ph,s04xL;aUeTiNyMzaL;nd4;m,s;!m,o,sL;-Ls;aMjL;am26;daL;ms;nder-guy,y;nLvi4;!dL;erPrL;eMoDu;!s;!-L;greg,vissJ;-aL;ntonO;!sL;aLio;ndYvL;io;!sL;andLh0y;ar,er,rH;!-mattL;eo;st4;-MkL;!sy;juL;niL;or;ndL;ro;eNiMo,riL;ch,en,k;n,on;n,rE;aMiL;de;ly;aMeL;rt1I;n,ra;edSinPkarial44n,rLz;iMyL;c,k;cLk;!k;!-piL;erL;re;di6;ass0usseL;yn;ars0c2eUhTiRomi0rBsMweL;si;el,hMiLyl;l,m;!aL;nLr,y0;th;-y0aLl,m;m,n;e1Gim;emLm;!-kiL;veG;ns;!aL;i,n22yL;!an;andIbrahWdSkimKmPnaNsLvyj1P;aLh0X;!ki;chLn;eh;al,eL;!ry;ie;an,enL;!-ulL;ri7;ck;ym;mLn0Xod0s0y0;aOeL;dLs,t;!-tidL;ia6;dLt;!ouL;!-jay-L;joL;rd0;amOhiMit,ni,uLya;st5;ad,lL;es;!deLve4;ep;dJf0n0;al;d0g05l,meLth0;ry;a04disu,e00hYiXjoumaWleVn1LoSrNvEyL;anLm;!-01;iLyeM;aMeL;l,n;m,nL;!o;lMniLri;as,s;fo;ne,y;ni;b,l,r,y0;aLib0vE;m,n,rv;dotNeb,lMm,tomiL;wa;!-yaPio;un;el,hy,mLn,r;!-Lie,o,s;jessy,rNsMyaL;ci6;ma2;ay0;e,hMkeL;em;ak,ilMrLyut;af;le;a15bId01eYhijXiToQrNt5uL;!bakr,lfazl,z8;ar;aLi2;hLm,r;am,em;lo,uL;!bakL;er,ry;el-wandMnaLy0;ya;ensL;ky;ot;!d,lL;!aL;rd;alla0Me07illa06oYuL;lNrL;!aTrahmaL;an,n;!-QahPhaOlMrL;aQhm0;ahLo;!i;di,m0C;ad;kMraL;hm0;arL;im;!llAuL;!lNrahaL;ma6;ne;!-MaL;ye;azLrafE;iz;hi;lPnoOrrahL;im,mL;anH;!e;ur;!aziThRkPlAmaMouahL;ab;lLt5;ek,ik;ah;afi,oddoL;us;amL;id;ze;!h;as;nLrn0;!oL;ub;dZhYliy0rMvuLy0zz;sh0;aThBiRonNuMw5;in;sh;!-aMve4;er;ri2;el;sh,z;am;f,laLv;ak;an;il;en,vE;ik|Unit\xA6a10b0Yc0Kd0Je0Hf0Dg09h06in05joule14kYlWmMnLoKpGqFsqAt5volZwb,y3z2\xB01\xB50;g,s;c,f,n;b,e1;a0Jb,d0Pears old,o0;tt0D;able3b2e1on0sp;!nes;a1r0A;!l,sp;spoon0U; ft,uare 0;c0Fd0Ef2i0Ckilo0Gm0ya0B;e0Jil0;e0Qli0E;eet0Po0A;t,uart0O;a2e1i0ounds,t;c0Jnt0M;rcent,tZ;!scals;hms,uU;an0FewtoQ;/s,b,e6g,i2l,m1p0\xB2,\xB3;h,s;!\xB2;!/h,cro2l0;e0li04; Cs C\xB2;g04s09;gOter0;! 0s 0;per second;b,iZm,u0x;men06xs;b,elviDg,ilo2m1no0;ts;!/h,ph,\xB2;byXgVmeter0;! 1s0;! 0;per hour;\xB2,\xB3;e0g,z;ct0rtzW;aUogO;al1b,ig8ra0;inTmT;!lo0;ns;a2emtNl0tF; oz,uid ou0;nceO;hrenheitNradN;b,x0;abyG;eciBg,l,m9;aratJe9g,l,m8oulombJu0;bic 0pI;c4d3fo2i1me9ya0;rdG;nchF;otE;eci1;enti0;me3;!\xB2,\xB3;lsius9nti0;g1li0me0;ter7;ram6;bl,y0;te4;c2tt0;os0;econd1;re0;!s|Pronoun\xA6'em,h4i3me,ourselves,she5th1us,we,you0;!rself;e0ou;m,y;!l,t;e0im;!'s|Organization\xA60:3U;1:2Z;2:35;a33b2Jc25d1Xe1Tf1Pg1Jh1Ei1Cj18k16l12m0Sn0Go0Dp07qu06rZsUtHuDvAw5y3;amaha,m0Xou3w0X;gov,tu2K;a5e3orld trade organizati3R;lls fargo,st3;fie1Yinghou15;l3rner br34;-m10gree1l street journ20m10;an halOeriz3Misa,o3;dafo29l3;kswagMvo;bs,kip,n4ps,s3;a tod2Kps;es2Wi3;lev2Eted natio1; mobi2Caco bePd bMeCgi fridaBh5im horto1mz,o3witt2D;shiba,y3;ota,s r Y;e 3in lizzy;b5carpen2Udaily ma2guess w4holli0rolling st1Is3w4;mashing pumpki1uprem0;ho;ea3lack eyed pe35yrds;ch bo3tl0;ys;l4s3;co,la m0Y;efoni07us;a6ex pisto5ieme1np,oundgard4pice gir5ta3ubaru;rbucks,to2;en;ls;few20insbu21msu1R;.e.m.,adiohead,b8e5oyal 3yan2Q;b3dutch she6;ank;/max,aders dige1Bd 3vl2U;bu3c1Ohot chili peppe2Dlobst1R;ll;c,s;ant2Nizno28;an7bs,e5fiz1Nhilip morr1Zi4r3;emier20octer & gamb1Ludenti11;nk floyd,zza hut;psi21tro3uge08;br2Ichina,n2I; 4ason1Sda29;ld navy,pec,range juli4xf3;am;us;aBbAe6fl,h5i4o3sa,wa;kia,tre dame,vart1P;ke,ntendo,ss0J;l,s;c,stl5tflix,w3; 3sweek;kids on the block,york07;e,\xE9;a,c;nd1Ns4t3;ional aca27o,we0N;a,car,d0L;aBcdonaldAe7i5lb,o3tv,yspace;b2nsanto,ody blu0t3;ley crue,or0L;crosoft,t3;as,subisO;dica4rcedes-benz,talli3;ca;id,re;'s,s;c's milk,z1R;'ore07a5e3g,ittle caesa1E;novo,x3;is,mark; pres7-z-boy,bour party;atv,fc,kk,m3od1E;art;iffy lu0Go5pmorgan3sa;! cha3;se;hnson & johns1Ly d1K;bm,hop,nte3tv;l,rpol; & m,asbro,ewlett-packSi5o3sbc,yundai;me dep3n1D;ot;tac3zbollah;hi;eneral 6hq,l5mb,o4reen d0Fu3;cci,ns n ros0;ldman sachs,og08;axo smith kliYencore;electr0Hm3;oto0S;a5bi,da,edex,i3leetwood mac,rito-l09;at,nancial3restoU; tim0;cebook,nnie mae;b05sa,u5xxon3; m3m3;ob2;!rosceptics;aimlXe7o5u3;nkin donuts,ran dur3;an;j,w j3;on0;f lepp4ll,peche mode,r spiegYstiny's chi3;ld;ard;aEbc,hiDiBnn,o5r3;aigsli7eedence clearwater reviv3ossra2;al;ca c7l6m3o08st03;ca4p3;aq;st;dplMgate;ola;a,sco3tigroup;! systems;ck fil-a,na daily;dbury,pital o3rl's jr;ne;aIbc,eEfCl7mw,ni,o3p,rexiteeX;ei5ston 3;glo3pizza;be;ng;ack & deck6o4ue c3;roY;ckbuster video,omingda3;le;er; g3g3;oodriN;cht5e ge0n & jer4rkshire hathaw3;ay;ryH;el;nana republ5s3;f,kin robbi1;ns;ic;bWcRdidQerosmith,ig,lLmFnheuser-busEol,ppleAr7s4t&t,v3;is;hland3sociated H; o2;il;by6g4m3;co;os; compu4bee3;'s;te3;rs;ch;c,d,erican5t3;!r3;ak; ex3;pre3;ss; 5catel4t3;air;!-lucent;jazeera,qae3;da;as;/dc,a5er,t3;ivisi3;on;demy of scienc0;es;ba,c|Demonym\xA60:12;a0Rb0Ic07d05e04fi03g01hZiVjSkQlMmInFpBqatari,r9s6t4u3v2z1;am0Aimbabwe0;enezuel0ietnam0C;g7krai0W;aiwQhai,rinida0Du1;ni0Lrkmen;a2cot0Fenegal08ingapoLlovak,oma0Opa00udOw1y0S;edi0Fiss;mo0uS;o5us0Hw1;and0;a2eru0Dhilipp0Lo1;li0Artugu02;kistani,lesti0Mna1raguay0;ma0L;amiWi1orweN;caragu0geri1;an,en;a2ex0Jo1;ngo0Brocc0;cedo0Fla1;gasy,y05;a3eb8i1;b1thua0C;e0Ay0;o,tZ;azakh,eny0o1uwaiti;re0;a1orda07;ma08p1;anK;celandic,nd3r1sraeli,taZvo03;a1iQ;ni0qi;i0oneS;aiAin1ondur0unK;di;amAeor1hanai0reek,uatemal0;gi0;lipino,n3;cuadoUgyp5stoVthiopi0urope0;a1ominWut3;niG;a8h5o3roa2ub0ze1;ch;ti0;lom1ngol4;bi0;a5i1;le0n1;ese;liforKm1na2;bo1erooJ;di0;angladeshi,el7o5r2ul1;gaF;aziAi1;ti1;sh;li1sC;vi0;aru1gi0;si0;f9l6merAngol0r4si0us1;sie,tr1;a1i0;li0;gent1me4;ine;ba2ge1;ri0;ni0;gh0r1;ic0;an|Possessive\xA6anyAh5its,m3noCo1sometBthe0yo1;ir1mselves;ur0;!s;i8y0;!se4;er1i0;mse2s;!s0;!e0;lf;o1t0;hing;ne|Currency\xA6$,aud,bPcNdIeurHfGgbp,hkd,inr,jpy,kElCp9r8s3usd,x2y1z0\xA2,\xA3,\xA5,\u0434\u0435\u043D,\u043B\u0432,\u0440\u0443\u0431,\u0E3F,\u20A1,\u20A8,\u20AC,\u20AD,\uFDFC;lotyP\u0142;en,uanO;af,of;h0ter1;e1il0;lings;k0q0;elI;oubleHp,upeeH;e0ound sterlingG;n0soF;ceEnies;e0i7;i,mpi6;n,r0wanzaByatB;!onaAw;ori7rancs,t;!o8;en3i2kk,o0;b0ll2;ra5;me4n0rham4;ar3;ad,e0ny;nt1;aht,itcoin0;!s|Country\xA60:2W;a2Jb20c1Od1Ke1Ef19g11h0Zi0Wja0Vk0Ul0Pm0Cn02om2ZpWqat17rUsItAu4v2wallis and futu2Mz1;a1Rimbabwe;a1enezue2Pietnam;nuatu,tican city;.4gRkraiXnited 2ruVs1zbeD;a,sr;arab emirat0Gkingdom,states1;! of am2L;k.,s.1; 1Va.;a6imor-leste,o5rinidad3u1;nis0rk1valu;ey,me2Ls and caic1H; and 1-1;toba17;go,kel0Pnga;iw2Jji1nz2F;ki2H;aAcotl1Re9i6lov5o3pa1Zri lanka,u2w1yr0;azil1Qed7itzerl1Q;d2Friname;lomon1Kmal0uth 1;afr27kJsud2D;ak0en0;erra leoDn1;gapo1Lt maart1;en;negIrb0ychellV;int 1moa,n marino,udi arab0;hele1Tluc0mart1O;epublic of ir04om21uss0w1;an1U;a2eFhilippinQitcairn19o1uerto riK;l1CrtugC;ki20l2nama,pua new0Ira1;guay;au,esti1;ne;a8e6i4or1;folk15th1; k1ern mariana11;or0C;caragua,ger1ue;!ia;p1ther0Yw zeal11;al;mib0u1;ru;a5exi4icroZo1yanmV;ldova,n1roc3zamb7;gol0t1;enegro,serrat;co;c7dagascQl4r2urit1;an0i0V;shall0Mtin1;ique;a2div1ta;es;wi,ys0;ao,edR;a4e3i1uxembourg;b1echtenste0Rthu15;er0ya;ban07sotho;os,tv0;azakh14eeling0BiribaTosovo,uwait,yrgyz14;ma0Yp14;c2ndoFra1sle of m13taly,vory coast;n,q;el0B;aiOon1ungary;dur0Ig kong;a7ermany,ha0Libralt6re5u1;a3ernsey,inea1ya0K;!-biss1;au;deloupe,m,tema0M;ece,na0J;ar;bRmb0;a4i3rench 1;guia0Cpoly1;nes0;ji,nlX;lklandSroeS;ast tim5cu4gypt,l salv4quatorial2ritr3st1thiop0;on0; guin1;ea;ad1;or;enmark,jibou3ominica2r con1;go;!n A;ti;a9entral african 8h6o3roat0u2zech1; 7ia;ba,racao;c2lo1morOngo-brazzaville,okEsta r02te d'ivoiJ;mb0;osC;i1ristmasE;le,na;republic;m1naSpe verde,yman8;bod0ero1;on;aEeBhutZo7r3u1;lgar0r1;kina faso,ma,undi;azil,itish 1unei;virgin1; is1;lands;liv0nai3snia and herzegoviFtswaFuvet1; isl1;and;re;l1n6rmuE;ar1gium,ize;us;h2ngladesh,rbad1;os;am2ra1;in;as;fghaElBm9n4r2ustr1zerbaijG;al0ia;genti1men0uba;na;dorra,g3t1;arct5igua and barbu1;da;o1uil1;la;er1;ica;b1ger0;an0;ia;ni1;st1;an|Region\xA60:1S;a1Xb1Qc1Gd1Ces1Bf18g12h0Zi0Xj0Vk0Sl0Pm0EnZoXpSqPrMsDtButAv6w3y1zacatec1Z;o05u1;cat17kZ;a1est vir5isconsin,yomi13;rwick0shington1;! dc;er3i1;cto1Gr1;gin1O;acruz,mont;ah,tar pradesh;a1ex1Olaxca1Ausca9;bas0Kmaulip1NsmJ;a6i4o2taf0Nu1ylh12;rrZs0X;me0Zno18uth 1;cSdR;ber1Fc1naloa;hu0Rily;n2skatchew0Qxo1;ny; luis potosi,ta catari1F;a1hode7;j1ngp01;asth0Lshahi;inghai,u1;e1intana roo;bec,ensVreta0D;ara4e2rince edward1; isT;i,nnsylv1rnambu02;an11;!na;axa0Ldisha,h1klaho16ntar1reg4x03;io;ayarit,eAo3u1;evo le1nav0J;on;r1tt0Pva scot0U;folk,mandy,th1; 1ampton0;c3d2yo1;rk0;ako0V;aroli0S;brasLva01w1; 2foundland1;! and labrador;brunswick,hamp0jers1mexiKyork state;ey;a6i2o1;nta0Lrelos;ch3dlanBn2ss1;issippi,ouri;as geraGneso0K;igQoacQ;dhya,harasht03ine,ni3r1ssachusetts;anhao,y1;land;p1toba;ur;anca0e1incoln0ouisia0B;e1iH;ds;a1entucky,hul08;ns06rnata1shmir;ka;alis1iangxi;co;daho,llino1owa;is;a2ert1idalEunA;ford0;mp0waii;ansu,lou5u1;an2erre1izhou,jarat;ro;ajuato,gdo1;ng;cester0;lori2uji1;an;da;sex;erby0o2uran1;go;rs1;et;a8ea7hi6o1umbrG;ahui4l3nnectic2rsi1ventry;ca;ut;iJorado;la;apDhuahua;ra;l7m1;bridge0peche;a4r3uck1;ingham0;shire;emen,itish columb3;h2ja cal1var2;iforn1;ia;guascalientes,l4r1;izo2kans1;as;na;aba2ber1;ta;ma|City\xA60:2K;a2Cb1Lc1Dd18e17f15g0Zh0Ti0Rjakar1Xk0Jl0Gm06n02o01pUquiTrPsJtBuAv8w4y2z1;agreb,uri1G;ang1Ae1okohama;katerin0Yrev0;ars3exford,i1rocl3;ckl0Fn1;nipeg,terth0G;aw;a1ilni2E;ncouv05r1Y;lan bat02trecht;a6bilisi,e5he4i3o2rondheim,u1;nis,rku;kyo,ronG;anj1Ml0Nmiso22ra1T; haHssaloni0I;gucigalpa,hr0l av07;i1llinn,mpe1UngiXrtu;chu1Ln0pM;a4e3h2kopje,t1;ockholm,uttga0M;angh0Yenzh1G;o06ville;int peters0Elz0En 1ppo5;jose,salvadO;eykjavik,i2o1;me,t1S;ga,o de janei1;ro;to;alerLetah tik11h6i5o3r1ueb1Cyongya19;a1etor11;gue;rt1zn0; elizabeth,o;ls12rae1N;iladelph0Wnom peVoenix;dessa,sa18ttawa;a3ew 1is;delNtaip1york;ei;goya,nt0Kpl0Kv0;a5e4i3o1umb0D;nt1scD;evideo,real;nUskolc;dell\xEDn,lbour0J;drid,l4n2rib1;or;chest1dalRi0T;er;mo;a pla0Hi1os angel09v7;mass1nz,sbVverpo1;ol;a5hark4laipeda,o2rak1uala lump3;ow;pavog1sice;ur;iv;b4mpa0Indy,ohsiu0Fra1un00;c1j;hi;ncheLstanb1\u0307zmir;ul;a5e3o1; chi mi1ms;nh;lsin1rakliG;ki;ifa,m3noi;alw5dan4en3hent,iza,othen2raz,ua1;dalaj0Gngzhou;bu0M;eToa;sk;ay;es,rankfu1;rt;dmont5indhovU;a2ha01oha,u1;rb0shanbe;e1kar,masc0CugavpiI;gu,je1;on;a7ebu,h3o1raioIuriti01;lo1nstanJpenhagNrk;gEmbo;enn3i2ristchur1;ch;ang m1cago,ttagoL;ai;lgary,pe town;aJeDogoCr6u1;char4dap4enos air3r1s0;g1sa;as;es;est;a3isba2usse1;ls;ne;sil2tisla1;va;ia;ta;i4lgrade,r1;g2l1n;in;en;ji1rut;ng;ku,n4r1sel;celo2ranquil1;la;na;g2ja lu1;ka;alo1kok;re;a9b7hmedabad,lmaty,m5n3qa2sh1thens,uckland;dod,gabat;ba;k1twerp;ara;m0s1;terdam;idj0u dhabi;an;lbo2rh1;us;rg|Place\xA6aLbJcHdGeEfDgAh9i8jfk,kul,l6m4new england,ord,p2s1the 0upIyyz;bronx,hamptons;fo,oho,yd;acifLek,h0;l,x;a0co,idDuc;libu,nhattK;a0gw,hr;s,x;ax,cn,ndianGst;arlem,kg,nd;ay village,re0;at 0enwich;britain,lak2;co,ra;urope,verglad0;es;en,fw,own1xb;dg,gk,hina0lt;town;cn,e0kk;l air,verly hills;frica,m5ntar1r1sia,tl0;!ant1;ct0;ic0; oce0;an;ericas,s|Person\xA6a01bZcTdQeOfMgJhHinez,jFkEleDmAnettPo9p7r4s3t2uncle,v0womL;a0irgin maH;lentino rossi,n go3;heresa may,iger woods,yra banks;addam hussaQcarlett johanssRistZlobodan milosevic,omeone,tepGuC;ay romano,eese witherspoQo1ush limbau0;gh;d stewart,naldinho,sario;a0ipV;lmUris hiltM;prah winfrOra;an,essiaen,itt romnNo0ubarek;m0thR;!my;bron james,e;anye west,iefer sutherland,obe bryaN;aime,effersFk rowli0;ng;alle ber0ulk hog3;ry;astBentlem1irl,rand0uy;fa2mo2;an;a0ella;thF;ff0meril lagasse,zekiel;ie;a0enzel washingt4ick wolf,ude;d0lt3nte;!dy;ar2lint1ous0ruz;in;on;dinal wols1son0;! palm5;ey;arack obama,oy,ro0;!ck,th2;dolf hitl1shton kutch1u0;nt;er|WeekDay\xA6fri4mon4s2t1wed0;!nesd4;hurs2ues2;at0un1;!urd1;!d0;ay0;!s|Date\xA6daylight7eom,one d6s4t1week0yesterd6;d5end;mr1o0;d3morrow;!w;ome 0tandard2;d0point;ay; time|Time\xA6a6breakfast 5dinner5e3lunch5m2n0oclock,some5to7;i7o0;on,w;id4or1;od,ve0;ning;time;fternoon,go,ll day,t 0;ni0;ght|Holiday\xA60:1P;1:1O;a1Eb1Ac12d0Ye0Pf0Lg0Ih0Ei0Ajune08kwanzaa,l05m01nYoVpRrPsFt9v6w4xm04y2;om 2ule;hasho15kippur;hit2int0Xomens equalit8; 0Ss0T;alentines3e2ictor1D;r1Ateran1;! 0;-0ax 0h6isha bav,rinityMu2; b3rke2;y 0;ish2she2;vat;a0We prophets birth0;a6eptember13h4imchat tor0Tt 3u2;kk4mmer U;a8p7s6valentines day ;avu2mini atzeret;ot;int 2mhain;a4p3s2valentine1;tephen1;atrick1;ndrew1;amadan,ememberanc0Xos2;a park1h hashana;a3reside0Yur2;im,ple heart 0;lm2ssovF; s04;rthodox 2stara;christma1easter2goPhoKn0B;! m07;ational 3ew years2;! 0U;freedom 0nurse1;a2emorial 0lHoOuharram;bMr2undy thurs0;ch0Fdi gr2tin luther k09;as;a2itRughnassadh;bour 0g baom2ilat al-qadr;er; 2teenth;soliT;d aJmbolc,n2sra and miraj;augurGd2;ependen2igenous people1;c09t1;a3o2;ly satur0;lloween,nukkSrvey mil2;k 0;o3r2;ito de dolores,oundhoU;odU;a4east of 2;our lady of guadalupe,the immaculate concepti2;on;ther1;aster 8id 3lectWmancip2piphany;atV;al-3u2;l-f3;ad3f2;itr;ha;m8s2;un0;ay of the dead,ecemb3i2;a de muertos,eciseis de septiembre,wali;er sol2;stice;anad7h4inco de mayo,o3yber m2;on0;lumbu1mmonwealth 0rpus christi;anuk3inese n2ristmaN;ew year;ah;a 0ian tha2;nksgiving;astillCeltaine,lack4ox2;in2;g 0; fri0;dvent,ll 9pril fools,rmistic8s6u2;stral4tum2;nal2; equinox;ia 0;cens2h wednes0sumption of mary;ion 0;e 0;hallow6s2;ai2oul1t1;nt1;s 0;day;s 2;eve|Month\xA6aAdec8feb6j2nov8oct1sep0;!t7;!o7;an4u0;l1n0;!e;!y;!r0;uary;!em0;ber;pr1ug0;!ust;!il|Duration\xA6centur4d2hour3m0seconds,week3year3;i0onth2;llisecond1nute1;ay0ecade0;!s;ies,y|Comparable\xA60:41;1:4I;2:45;3:4B;4:2Y;5:3X;a4Ob44c3Od3De35f2Rg2Fh24i1Vj1Uk1Rl1Im1Cn16o14p0Tqu0Rr0IsRtKuIvFw7y6za12;ell27ou3;aBe9hi1Yi7r6;o3y;ck0Mde,l6n1ry,se;d,y;a6i4Mt;k,ry;n1Tr6sI;m,y;a7e6ulgar;nge5rda2xi3;gue,in,st;g0n6pco3Mse5;like0ti1;aAen9hi8i7ough,r6;anqu2Qen1ue;dy,g3Ume0ny,r09;ck,n,rs2R;d42se;ll,me,rt,s6wd47;te5;aVcarUeThRiQkin0GlMmKoHpGqua1HtAu7w6;eet,ift;b7dd15per0Hr6;e,re2J;sta2Ht4;aAe9iff,r7u6;pXr1;a6ict,o3;ig3Hn0W;a1ep,rn;le,rk;e24i3Hright0;ci2Aft,l7o6re,ur;n,thi3;emn,id;a6el0ooth;ll,rt;e8i6ow,y;ck,g37m6;!y;ek,nd3F;ck,l0mp4;a6iUort,rill,y;dy,ll0Zrp;cu0Tve0Txy;ce,ed,y;d,fe,int0l1Xv16;aBe9i8o6ude;mantic,o1Ksy,u6;gh,nd;ch,pe,tzy;a6d,mo0J;dy,l;gg7ndom,p6re,w;id;ed;ai2i6;ck,et;aFhoEi1SlCoBr8u6;ny,r6;e,p4;egna2ic7o6;fou00ud;ey,k0;li06or,te1D;a6easa2;in,nt;ny;in5le;dd,f6i0ld,ranR;fi11;aAe8i7o6;b4isy,rm16sy;ce,mb4;a6w;r,t;ive,rr02;aAe8ild,o7u6;nda1Ate;ist,o1;a6ek,llY;n,s0ty;d,tuR;aCeBi9o6ucky;f0Vn7o1Eu6ve0w18y0U;d,sy;e0g;g1Uke0tt4v6;e0i3;an,wd;me,r6te;ge;e7i6;nd;en;ol0ui1P;cy,ll,n6;sBt6;e6ima8;llege2r6;es7media6;te;ti3;ecu6ta2;re;aEeBiAo8u6;ge,m6ng1R;b4id;ll6me0t;ow;gh,l0;a6f04sita2;dy,v6;en0y;nd1Hppy,r6te5;d,sh;aGenFhDiClBoofy,r6;a9e8is0o6ue1E;o6ss;vy;at,en,y;nd,y;ad,ib,ooI;a2d1;a6o6;st0;t4uiY;u1y;aIeeb4iDlat,oAr8u6;ll,n6r14;!ny;aHe6iend0;e,sh;a7r6ul;get5mG;my;erce8n6rm,t;an6e;ciC;! ;le;ir,ke,n0Fr,st,t,ulA;aAerie,mp9sse7v6xtre0Q;il;nti6;al;ty;r7s6;tern,y;ly,th0;aFeCi9r7u6;ll,mb;u6y;nk;r7vi6;ne;e,ty;a6ep,nD;d6f,r;!ly;mp,pp03rk;aHhDlAo8r7u6;dd0r0te;isp,uel;ar6ld,mmon,ol,st0ward0zy;se;e6ou1;a6vW;n,r;ar8e6il0;ap,e6;sy;mi3;gey,lm8r6;e5i3;ful;!i3;aNiLlIoEr8u6;r0sy;ly;aAi7o6;ad,wn;ef,g7llia2;nt;ht;sh,ve;ld,r7un6;cy;ed,i3;ng;a7o6ue;nd,o1;ck,nd;g,tt6;er;d,ld,w1;dy;bsu9ng8we6;so6;me;ry;rd|Adjective\xA60:73;1:7I;2:7O;3:7H;4:7A;5:5A;6:47;7:48;8:4Q;9:5Z;A:7F;B:6X;C:5V;D:6Y;E:71;a6Hb63c5Pd55e4Rf48g40h3Pi34j32k31l2Qm2Fn26o1Qp1Aquack,r10s0Gt09uQvNwFyear5;arp0eJholeIiHoF;man5oFu6A;d6Czy;despr73s5E;!sa7;eGlFste25;co1Hl o4J;!k5;aGiFola4A;b7Rce versa,ol53;ca2gabo61nilla;ltWnJpGrb58su4tterF;!moB; f33b1NpGsFti1G;ca7et,ide dMtairs;er,i3M;aPbeco6Pconvin26deMeLfair,ivers4knKprecedYrIsGwF;iel1Zritt5X;i1UuF;pervis0specti3;eFu5;cognLgul6Fl6F;own;ndi3v5Rxpect0;cid0rF;!grou5MsF;iz0tood;b7ppeaLssu6EuthorF;iz0;i23ra;aJeHhough4NoGrF;i1oubl0;geth8p,rpD;en5OlFm4Yrr2Tst0;li3;boo,lFn;ent0;aXcWeUhTiRmug,nobbi3DoPpOqueami3DtJuFymb62;bHi gener53pFrprisi3;erFre0K;! dup8b,i28;du0seq4S;anda6SeIi0OrFy37;aightFip0; fFfF;or59;adfaBreotyp0;aCec2Fir1IlendDot on; call0le,mb8phist1WrFu0Wvi40;dDry;gnifica2nF;ceCg7;am2Oe8ocki3ut;cFda1em5lfi2Xni1Vpa67re6;o1Fr3U;at56ient27reec56;cr0me,ns serif;aMeIiGoF;buBtt4SuSy4;ghtFv4;!-28f9;ar,bel,condi1du61fres50lHpublic3UsFtard0;is46oF;lu1na2;e1Duc44;bDciF;al,st;aPeNicayu6lacDopuliBrGuF;bl58mp0;eJiGoF;!b09fuEmi30p8;mGor,sFva1;ti6;a4Ue;ciEmF;a0Hi5I;ac20rFti1;feAma2Tplexi3v33;rFst;allelHtF;-tiFi4;me;!ed;bQffOkNld fashion0nMpLrg1Hth8utKvF;al,erF;!aHniGt,wF;eiFrouF;ght;ll;do0Ver,g2Lsi45;en,posi1; boa5Fg2Jli6;!ay; gua5DbFli6;eat;eHsF;cFer0Hole1;e6uC;d2Sse;ak0eMiLoFua4O;nJrGtF;ab7;thF;!eF;rn;chala2descri4Zstop;ght5;arby,cessa3Wighbor5xt;aNeLiIoFultip7;bi7derGlFnth5ot,st;dy;a1n;nFx0;iaFor;tuC;di4EnaFre;ci3;cFgenta,in,j03keshift,le,mmoth,ny,sculi6;abCho;aOeJiGoFu13;uti12vi3;mGteraF;l,te;it0;ftIgFth4;al,eGitiF;ma1;nda3C;!-0C;nguDst,tt8;ap1Sind5no0A;agg0uF;niOstifi0veni7;de4gno4Blleg4mSnHpso 1VrF;a1releF;va2; NaMbr0corLdJfluenTiTnIsHtF;aAenEoxF;ic36;a6i2R;a1er,oce2;iGoF;or;reA;deq3Jppr2Y;fFsitu,vitro;ro2;mJpF;arHerfeAoFrop8;li1rtF;a2ed;ti4;eFi0Q;d2QnE;aKelJiHoFumdr3B;neBok0rrFs07ur5;if2S;ghfalut1OspF;an2Q;liZpf9;lInHrF;d05roF;wi3;dy,gi3;f,low0;ainf9ener2Jiga22lLoKraHuF;ilFng ho;ty;cGtF;ef9is;ef9;ne,od;ea2Dob4;aUeOinNlMoHrF;a1TeFoz1K;e2Dq12tf9;oHrF; keeps,eFm8tuna1;g04ign;liF;sh;ag2Zue2;al,i1;dJmGrF;ti7;a7ini6;ne;le; up;bl0i2lEr Fux,vori1;oFreac1F;ff;aOfficie2lNmiMnKreAthere4veJxF;aAcess,peHtraGuF;be2Ml0I;!va1E;ct0rt;n,ryday; Fcouragi3tiC;rou1sui1;ne2;abo23dQe18i1;g8sF;t,ygF;oi3;er;aVeNiHoFrea15ue;mina2ne,ubF;le,tf9;dact1Bfficu1OsGvF;erE;creHeas0gruntl0honeBordGtF;a2ress0;er5;et; LadpKfJgene1PliHrang0spe1PtGvoF;ut;ail0ermin0;be1Mca1ghF;tf9;ia2;an;facto;i5magFngeroZs0I;ed,i3;ly;ertaRhief,ivil,oHrF;aFowd0u0H;mp0v02z0;loNmLnGoi3rrFve0P;eAu1I;cre1grIsHtF;emFra0F;po0D;ta2;ue2;mer08pleF;te,x;ni4ss4;in;aPeLizarClJoGrF;and new,isk,okP;gGna fiWttom,urgeoF;is;us;ank,iI;re;autif9hiGlov0nFst,yoG;eVt;nd;ul;ckGnkru0XrrF;en;!wards; priori,b0Nc0Kd0AfraDg05h04lZma06ntiquYpUrOsMttracti07utheLvIwF;aGkF;wa0U;ke,re;ant garGerF;age;de;ntV;leep,tonisF;hi3;ab,bitIroHtiF;fiF;ci4;ga2;raF;ry;pFt;are2etiPrF;oprF;ia1;at0;arIcohGeFiMl,oof;rt;olF;ic;mi3;ead;ainBgressiGoniF;zi3;ve;st;id; MeKuJvF;aGerE;se;nc0;ed;lt;pt,qF;ua1;hoc,infinitF;um;cuGtu4u1;al;ra1;erPlOoMruLsGuF;nda2;e2oGtraA;ct;lu1rbi3;ng;te;pt;aFve;rd;aze,e;ra2;nt|Expression\xA6a02b01dXeVfuck,gShLlImHnGoDpBshAu7voi04w3y0;a1eLu0;ck,p;!a,hoo,y;h1ow,t0;af,f;e0oa;e,w;gh,h0;! 0h,m;huh,oh;eesh,hh,it;ff,hew,l0sst;ease,z;h1o0w,y;h,o,ps;!h;ah,ope;eh,mm;m1ol0;!s;ao,fao;a4e2i,mm,oly1urr0;ah;! mo6;e,ll0y;!o;ha0i;!ha;ah,ee,o0rr;l0odbye;ly;e0h,t cetera,ww;k,p;'oh,a0uh;m0ng;mit,n0;!it;ah,oo,ye; 1h0rgh;!em;la|Conjunction\xA6aEbAcuz,how8in caDno7o6p4supposing,t1vers5wh0yet;eth8ile;h0o;eref9o0;!uC;l0rovided that;us;r,therwi6; matt1r;!ev0;er;e0ut;cau1f0;ore;se;lthou1nd,s 0;far as,if;gh|Verb\xA6awak9born,cannot,fr8g7h5k3le2m1s0wors9;e8h3;ake sure,sg;ngth6ss6;eep tabs,n0;own;as0e2;!t2;iv1onna;ight0;en|Preposition\xA6'o,-,aKbHcGdFexcept,fEinDmidPnotwithstandiQoBpRqua,sAt6u3vi2w0;/o,hereMith0;!in,oQ;a,s-a-vis;n1p0;!on;like,til;h0ill,owards;an,r0;ough0u;!oI;ans,ince,o that;',f0n1ut;!f;!to;or,rom;espite,own,u3;hez,irca;ar1e0oAy;low,sides,tween;ri6;',bo7cross,ft6lo5m3propos,round,s1t0;!op;! long 0;as;id0ong0;!st;ng;er;ut|Adverb\xA6a07by 05d01eYfShQinPjustOkinda,mMnJoEpCquite,r9s5t2up1very,w0Bye0;p,s; to,wards5;h1o0wiO;o,t6ward;en,us;everal,o0uch;!me1rt0; of;hXtimes,w07;a1e0;alS;ndomRthN;ar excellDer0oint blank; Mhaps;f3n0;ce0ly;! 0;ag00moU; courHten;ewJo0; longEt 0;onHwithstanding;aybe,eanwhiAore0;!ovB;! aboS;deed,steT;en0;ce;or2u0;l9rther0;!moH; 0ev3;examp0good,suF;le;n mas1v0;er;se;e0irect1; 1finite0;ly;ju7trop;far,n0;ow; CbroBd nauseam,gAl5ny2part,side,t 0w3;be5l0mo5wor5;arge,ea4;mo1w0;ay;re;l 1mo0one,ready,so,ways;st;b1t0;hat;ut;ain;ad;lot,posteriori|Determiner\xA6aAboth,d8e5few,l3mu7neiCown,plenty,some,th2various,wh0;at0ich0;evB;at,e3is,ose;a,e0;!ast,s;a1i6l0nough,very;!se;ch;e0u;!s;!n0;!o0y;th0;er|Modal\xA6c5lets,m4ought3sh1w0;ill,o5;a0o4;ll,nt;! to;ay,ight,ust;an,o0;uld|PhrasalVerb\xA60:71;1:6P;2:7D;3:73;4:6I;5:7G;6:75;7:6O;8:6B;9:6C;A:5H;B:70;C:6Z;a7Gb62c5Cd59e57f45g3Nh37iron0j33k2Yl2Km2Bn29o27p1Pr1Es09tQuOvacuum 1wGyammerCzD;eroAip EonD;e0k0;by,up;aJeGhFiEorDrit52;d 1k2Q;mp0n49pe0r8s8;eel Bip 7K;aEiD;gh 06rd0;n Br 3C;it 5Jk8lk6rm 0Qsh 73t66v4O;rgeCsD;e 9herA;aRePhNiJoHrFuDype 0N;ckArn D;d2in,o3Fup;ade YiDot0y 32;ckle67p 79;ne66p Ds4C;d2o6Kup;ck FdEe Dgh5Sme0p o0Dre0;aw3ba4d2in,up;e5Jy 1;by,o6U;ink Drow 5U;ba4ov7up;aDe 4Hll4N;m 1r W;ckCke Elk D;ov7u4N;aDba4d2in,o30up;ba4ft7p4Sw3;a0Gc0Fe09h05i02lYmXnWoVpSquare RtJuHwD;earFiD;ngEtch D;aw3ba4o6O; by;ck Dit 1m 1ss0;in,up;aIe0RiHoFrD;aigh1LiD;ke 5Xn2X;p Drm1O;by,in,o6A;n2Yr 1tc3H;c2Xmp0nd Dr6Gve6y 1;ba4d2up;d2o66up;ar2Uell0ill4TlErDurC;ingCuc8;a32it 3T;be4Brt0;ap 4Dow B;ash 4Yoke0;eep EiDow 9;c3Mp 1;in,oD;ff,v7;gn Eng2Yt Dz8;d2o5up;in,o5up;aFoDu4E;ot Dut0w 5W;aw3ba4f36o5Q;c2EdeAk4Rve6;e Hll0nd GtD; Dtl42;d2in,o5upD;!on;aw3ba4d2in,o1Xup;o5to;al4Kout0rap4K;il6v8;at0eKiJoGuD;b 4Dle0n Dstl8;aDba4d2in52o3Ft2Zu3D;c1Ww3;ot EuD;g2Jnd6;a1Wf2Qo5;ng 4Np6;aDel6inAnt0;c4Xd D;o2Su0C;aQePiOlMoKrHsyc29uD;ll Ft D;aDba4d2in,o1Gt33up;p38w3;ap37d2in,o5t31up;attleCess EiGoD;p 1;ah1Gon;iDp 52re3Lur44wer 52;nt0;ay3YuD;gAmp 9;ck 52g0leCn 9p3V;el 46ncilA;c3Oir 2Hn0ss FtEy D;ba4o4Q; d2c1X;aw3ba4o11;pDw3J;e3It B;arrow3Serd0oD;d6te3R;aJeHiGoEuD;ddl8ll36;c16p 1uth6ve D;al3Ad2in,o5up;ss0x 1;asur8lt 9ss D;a19up;ke Dn 9r2Zs1Kx0;do,o3Xup;aOeMiHoDuck0;a16c36g 0AoDse0;k Dse34;aft7ba4d2forw2Ain3Vov7uD;nd7p;e GghtFnEsDv1T;ten 4D;e 1k 1; 1e2Y;ar43d2;av1Ht 2YvelD; o3L;p 1sh DtchCugh6y1U;in3Lo5;eEick6nock D;d2o3H;eDyA;l2Hp D;aw3ba4d2fSin,o05to,up;aFoEuD;ic8mpA;ke2St2W;c31zz 1;aPeKiHoEuD;nker2Ts0U;lDneArse2O;d De 1;ba4d2oZup;de Et D;ba4on,up;aw3o5;aDlp0;d Fr Dt 1;fDof;rom;in,oO;cZm 1nDve it;d Dg 27kerF;d2in,o5;aReLive Jloss1VoFrEunD; f0M;in39ow 23; Dof 0U;aEb17it,oDr35t0Ou12;ff,n,v7;bo5ft7hJw3;aw3ba4d2in,oDup,w3;ff,n,ut;a17ek0t D;aEb11d2oDr2Zup;ff,n,ut,v7;cEhDl1Pr2Xt,w3;ead;ross;d aEnD;g 1;bo5;a08e01iRlNoJrFuD;cDel 1;k 1;eEighten DownCy 1;aw3o2L;eDshe1G; 1z8;lFol D;aDwi19;bo5r2I;d 9;aEeDip0;sh0;g 9ke0mDrD;e 2K;gLlJnHrFsEzzD;le0;h 2H;e Dm 1;aw3ba4up;d0isD;h 1;e Dl 11;aw3fI;ht ba4ure0;eInEsD;s 1;cFd D;fDo1X;or;e B;dQl 1;cHll Drm0t0O;apYbFd2in,oEtD;hrough;ff,ut,v7;a4ehi1S;e E;at0dge0nd Dy8;o1Mup;o09rD;ess 9op D;aw3bNin,o15;aShPlean 9oDross But 0T;me FoEuntD; o1M;k 1l6;aJbIforGin,oFtEuD;nd7;ogeth7;ut,v7;th,wD;ard;a4y;pDr19w3;art;eDipA;ck BeD;r 1;lJncel0rGsFtch EveA; in;o16up;h Bt6;ry EvD;e V;aw3o12;l Dm02;aDba4d2o10up;r0Vw3;a0He08l01oSrHuD;bbleFcklTilZlEndlTrn 05tDy 10zz6;t B;k 9; ov7;anMeaKiDush6;ghHng D;aEba4d2forDin,o5up;th;bo5lDr0Lw3;ong;teD;n 1;k D;d2in,o5up;ch0;arKgJil 9n8oGssFttlEunce Dx B;aw3ba4;e 9; ar0B;k Bt 1;e 1;d2up; d2;d 1;aIeed0oDurt0;cFw D;aw3ba4d2o5up;ck;k D;in,oK;ck0nk0st6; oJaGef 1nd D;d2ov7up;er;up;r0t D;d2in,oDup;ff,ut;ff,nD;to;ck Jil0nFrgEsD;h B;ainCe B;g BkC; on;in,o5; o5;aw3d2o5up;ay;cMdIsk Fuction6; oD;ff;arDo5;ouD;nd;d D;d2oDup;ff,n;own;t D;o5up;ut\",\"conjugations\":\"t:ake,ook,,,aken|:can,could,can,_|free:_,,,ing|puk:e,,,ing|ar:ise,ose,,,isen|babys:it,at|:be,was,is,am,been|:is,was,is,being|beat:_,,,ing,en|beg:in,an,,inning,un|ban:_,ned,,ning|bet:_,,,,_|bit:e,_,,ing,ten|ble:ed,d,,,d|bre:ed,d|br:ing,ought,,,ought|broadcast:_,_|buil:d,t,,,t|b:uy,ought,,,ought|cho:ose,se,,osing,sen|cost:_,_|deal:_,t,,,t|d:ie,ied,,ying|d:ig,ug,,igging,ug|dr:aw,ew,,,awn|dr:ink,ank,,,unk|dr:ive,ove,,iving,iven|:eat,ate,,eating,eaten|f:all,ell,,,allen|fe:ed,d,,,d|fe:el,lt|f:ight,ought,,,ought|f:ind,ound|fl:y,ew,,,own|bl:ow,ew,,,own|forb:id,ade|edit:_,,,ing|forg:et,ot,,eting,otten|forg:ive,ave,,iving,iven|fr:eeze,oze,,eezing,ozen|g:et,ot|g:ive,ave,,iving,iven|:go,went,goes,,gone|h:ang,ung,,,ung|ha:ve,d,s,ving,d|hear:_,d,,,d|hid:e,_,,,den|h:old,eld,,,eld|hurt:_,_,,,_|la:y,id,,,id|le:ad,d,,,d|le:ave,ft,,,ft|l:ie,ay,,ying|li:ght,t,,,t|los:e,t,,ing|ma:ke,de,,,de|mean:_,t,,,t|me:et,t,,eting,t|pa:y,id,,,id|read:_,_,,,_|r:ing,ang,,,ung|r:ise,ose,,ising,isen|r:un,an,,unning,un|sa:y,id,ys,,id|s:ee,aw,,eeing,een|s:ell,old,,,old|sh:ine,one,,,one|sho:ot,t,,,t|show:_,ed|s:ing,ang,,,ung|s:ink,ank|s:it,at|slid:e,_,,,_|sp:eak,oke,,,oken|sp:in,un,,inning,un|st:and,ood|st:eal,ole|st:ick,uck|st:ing,ung|:stream,,,,|str:ike,uck,,iking|sw:ear,ore|sw:im,am,,imming|sw:ing,ung|t:each,aught,eaches|t:ear,ore|t:ell,old|th:ink,ought|underst:and,ood|w:ake,oke|w:ear,ore|w:in,on,,inning|withdr:aw,ew|wr:ite,ote,,iting,itten|t:ie,ied,,ying|ski:_,ied|:boil,,,,|miss:_,,_|:act,,,,|compet:e,ed,,ing|:being,were,are,are|impl:y,ied,ies|ic:e,ed,,ing|develop:_,ed,,ing|wait:_,ed,,ing|aim:_,ed,,ing|spil:l,t,,,led|drop:_,ped,,ping|log:_,ged,,ging|rub:_,bed,,bing|smash:_,,es|egg:_,ed|suit:_,ed,,ing|age:_,d,s,ing|shed:_,_,s,ding|br:eak,oke|ca:tch,ught|d:o,id,oes|b:ind,ound|spread:_,_|become:_,,,,_|ben:d,,,,t|br:ake,,,,oken|burn:_,,,,ed|burst:_,,,,_|cl:ing,,,,ung|c:ome,ame,,,ome|cre:ep,,,,pt|cut:_,,,,_|dive:_,,,,d|dream:_,,,,t|fle:e,,,eing,d|fl:ing,,,,ung|got:_,,,,ten|grow:_,,,,n|hit:_,,,,_|ke:ep,,,,pt|kne:el,,,,lt|know:_,,,,n|leap:_,,,,t|len:d,,,,t|lo:ose,,,,st|prove:_,,,,n|put:_,,,,_|quit:_,,,,_|rid:e,,,,den|s:eek,,,,ought|sen:d,,,,t|set:_,,,,_|sew:_,,,,n|shake:_,,,,n|shave:_,,,,d|shut:_,,,,_|s:eat,,,,at|sla:y,,,,in|sle:ep,,,,pt|sn:eak,,,,uck|spe:ed,,,,d|spen:d,,,,t|sp:it,,,,at|split:_,,,,_|spr:ing,,,,ung|st:ink,unk,,,unk|strew:_,,,,n|sw:are,,,,orn|swe:ep,,,,pt|thrive:_,,,,d|undergo:_,,,,ne|upset:_,,,,_|w:eave,,,,oven|we:ep,,,,pt|w:ind,,,,ound|wr:ing,,,,ung\",\"plurals\":\"addend|um|a,alga|e,alumna|e,alumn|us|i,appendi|x|ces,avocado|s,bacill|us|i,barracks|,beau|x,bus|es,cact|us|i,chateau|x,analys|is|es,diagnos|is|es,parenthes|is|es,prognos|is|es,synops|is|es,thes|is|es,child|ren,circus|es,clothes|,corp|us|ora,criteri|on|a,curricul|um|a,database|s,deer|,echo|es,embargo|es,epoch|s,f|oot|eet,gen|us|era,g|oose|eese,halo|s,hippopotam|us|i,ind|ex|ices,larva|e,lea|f|ves,librett|o|i,loa|f|ves,m|an|en,matri|x|ces,memorand|um|a,modul|us|i,mosquito|es,move|s,op|us|era,ov|um|a,ox|en,pe|rson|ople,phenomen|on|a,quiz|zes,radi|us|i,referend|um|a,rodeo|s,sex|es,shoe|s,sombrero|s,stomach|s,syllab|us|i,tableau|x,thie|f|ves,t|ooth|eeth,tornado|s,tuxedo|s,zero|s\",\"patterns\":{\"Person\":[\"master of #Noun\",\"captain of the #Noun\"]},\"regex\":{\"HashTag\":[\"^#[a-z]+\"],\"Gerund\":[\"^[a-z]+n['\u2019]$\"],\"PhoneNumber\":[\"^[0-9]{3}-[0-9]{4}$\",\"^[0-9]{3}[ -]?[0-9]{3}-[0-9]{4}$\"],\"Time\":[\"^[012]?[0-9](:[0-5][0-9])(:[0-5][0-9])$\",\"^[012]?[0-9](:[0-5][0-9])?(:[0-5][0-9])? ?(am|pm)$\",\"^[012]?[0-9](:[0-5][0-9])(:[0-5][0-9])? ?(am|pm)?$\",\"^[PMCE]ST$\",\"^utc ?[+-]?[0-9]+?$\",\"^[a-z0-9]*? o'?clock$\"],\"Date\":[\"^[0-9]{1,4}-[0-9]{1,2}-[0-9]{1,4}$\",\"^[0-9]{1,4}/[0-9]{1,2}/[0-9]{1,4}$\"],\"Money\":[\"^[-+]?[$\u20AC\xA5\xA3][0-9]+(.[0-9]{1,2})?$\",\"^[-+]?[$\u20AC\xA5\xA3][0-9]{1,3}(,[0-9]{3})+(.[0-9]{1,2})?$\"],\"Value\":[\"^[-+]?[$\u20AC\xA5\xA3][0-9]+(.[0-9]{1,2})?$\",\"^[-+]?[$\u20AC\xA5\xA3][0-9]{1,3}(,[0-9]{3})+(.[0-9]{1,2})?$\",\"^[0-9.]{1,2}[-\u2013][0-9]{1,2}$\"],\"NumberRange\":[\"^[0-9.]{1,4}(st|nd|rd|th)?[-\u2013][0-9.]{1,4}(st|nd|rd|th)?$\",\"^[0-9.]{1,2}[-\u2013][0-9]{1,2}$\"],\"NiceNumber\":[\"^[-+]?[0-9.,]{1,3}(,[0-9.,]{3})+(.[0-9]+)?$\"],\"NumericValue\":[\"^[-+]?[0-9]+(.[0-9]+)?$\",\"^.?[0-9]+([0-9,.]+)?%$\"],\"Percent\":[\"^.?[0-9]+([0-9,.]+)?%$\"],\"Cardinal\":[\"^.?[0-9]+([0-9,.]+)?%$\"],\"Fraction\":[\"^[0-9]{1,4}/[0-9]{1,4}$\"],\"LastName\":[\"^ma?c'.*\",\"^o'[drlkn].*\"]}}";

},{}],209:[function(_dereq_,module,exports){
'use strict';

var conjugate = _dereq_('../subset/verbs/methods/conjugate/faster.js'); //extend our current irregular conjugations, overwrite if exists
//also, map the irregulars for easy infinitive lookup - {bought: 'buy'}


var addConjugations = function addConjugations(obj) {
  var _this = this;

  Object.keys(obj).forEach(function (inf) {
    _this.conjugations[inf] = _this.conjugations[inf] || {}; //add it to the lexicon

    _this.words[inf] = _this.words[inf] || 'Infinitive';
    Object.keys(obj[inf]).forEach(function (tag) {
      var word = obj[inf][tag]; //add this to our conjugations

      _this.conjugations[inf][tag] = word; //add it to the lexicon, too

      _this.words[word] = _this.words[word] || tag; //also denormalize to cache.toInfinitive

      _this.cache.toInfinitive[obj[inf][tag]] = inf;
    }); //guess the other conjugations

    var forms = conjugate(inf, _this);
    Object.keys(forms).forEach(function (k) {
      var word = forms[k];

      if (_this.words.hasOwnProperty(word) === false) {
        _this.words[word] = k;
      }
    });
  });
  return obj;
};

module.exports = addConjugations;

},{"../subset/verbs/methods/conjugate/faster.js":79}],210:[function(_dereq_,module,exports){
"use strict";

//
var addPatterns = function addPatterns(obj) {
  var _this = this;

  Object.keys(obj).forEach(function (k) {
    _this.patterns[k] = obj[k];
  });
  return obj;
};

module.exports = addPatterns;

},{}],211:[function(_dereq_,module,exports){
'use strict'; //put singular->plurals in world, the reverse in cache,
//and both forms in the lexicon

var addPlurals = function addPlurals(obj) {
  var _this = this;

  Object.keys(obj).forEach(function (sing) {
    var plur = obj[sing];
    _this.plurals[sing] = plur; //add them both to the lexicon

    _this.words[plur] = _this.words[plur] || 'Plural';
    _this.words[sing] = _this.words[sing] || 'Singular'; //denormalize them in cache.toPlural

    _this.cache.toSingular[plur] = sing;
  });
  return obj;
};

module.exports = addPlurals;

},{}],212:[function(_dereq_,module,exports){
"use strict";

//
var addRegex = function addRegex(obj) {
  var _this = this;

  Object.keys(obj).forEach(function (k) {
    _this.regex.push({
      reg: new RegExp(k, 'i'),
      tag: obj[k]
    });
  });
};

module.exports = addRegex;

},{}],213:[function(_dereq_,module,exports){
'use strict'; //add 'downward' tags (that immediately depend on this one)

var addDownword = _dereq_('../tags/addDownward'); //extend our known tagset with these new ones


var addTags = function addTags(tags) {
  var _this = this;

  Object.keys(tags).forEach(function (tag) {
    var obj = tags[tag];
    obj.notA = obj.notA || [];
    obj.downward = obj.downward || [];
    _this.tags[tag] = obj;
  });
  addDownword(this.tags);
  return tags;
};

module.exports = addTags;

},{"../tags/addDownward":135}],214:[function(_dereq_,module,exports){
'use strict';

var normalize = _dereq_('../term/methods/normalize/normalize').normalize;

var inflect = _dereq_('../subset/nouns/methods/pluralize');

var conjugate = _dereq_('../subset/verbs/methods/conjugate/faster.js');

var adjFns = _dereq_('../subset/adjectives/methods');

var wordReg = / /;

var cleanUp = function cleanUp(str) {
  str = normalize(str); //extra whitespace

  str = str.replace(/\s+/, ' '); //remove sentence-punctuaion too

  str = str.replace(/[.\?,;\!]/g, '');
  return str;
}; //


var addWords = function addWords(words) {
  var _this = this;

  //go through each word
  Object.keys(words).forEach(function (word) {
    var tag = words[word];
    word = cleanUp(word);
    _this.words[word] = tag; //add it to multi-word cache,

    if (wordReg.test(word) === true) {
      var arr = word.split(wordReg);
      _this.cache.firstWords[arr[0]] = true;
    } //turn singulars into plurals


    if (tag === 'Singular') {
      var plural = inflect(word, {});

      if (plural && plural !== word) {
        _this.words[plural] = 'Plural';
      }

      return;
    } //turn infinitives into all conjugations


    if (tag === 'Infinitive') {
      var conj = conjugate(word, _this);
      Object.keys(conj).forEach(function (k) {
        _this.words[conj[k]] = k;
      });
      return;
    } //phrasals like 'pull out' get conjugated too


    if (tag === 'PhrasalVerb') {
      var _arr = word.split(/ /);

      var _conj = conjugate(_arr[0], _this);

      Object.keys(_conj).forEach(function (k) {
        var form = _conj[k] + ' ' + _arr[1];
        _this.words[form] = 'PhrasalVerb'; //add it to cache, too

        _this.cache.firstWords[_conj[k]] = true;
      });
      return;
    } //turn some adjectives into superlatives


    if (tag === 'Comparable') {
      var comp = adjFns.toComparative(word);

      if (comp && word !== comp) {
        _this.words[comp] = 'Comparative';
      }

      var supr = adjFns.toSuperlative(word);

      if (supr && word !== supr) {
        _this.words[supr] = 'Superlative';
      }
    }
  });
  return words;
};

module.exports = addWords;

},{"../subset/adjectives/methods":11,"../subset/nouns/methods/pluralize":44,"../subset/verbs/methods/conjugate/faster.js":79,"../term/methods/normalize/normalize":149}],215:[function(_dereq_,module,exports){
'use strict'; // const addWords = require('./addWords');

var fns = _dereq_('../fns');

var data = _dereq_('./_data');

var moreData = _dereq_('./more-data');

var tags = _dereq_('../tags');

var unpack = _dereq_('./unpack');

var addTags = _dereq_('./addTags');

var addWords = _dereq_('./addWords');

var addRegex = _dereq_('./addRegex');

var addConjugations = _dereq_('./addConjugations');

var addPatterns = _dereq_('./addPatterns');

var addPlurals = _dereq_('./addPlurals');

var misc = _dereq_('./more-data/misc'); //lazier/faster object-merge


var extend = function extend(main, obj) {
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i++) {
    main[keys[i]] = obj[keys[i]];
  }

  return main;
}; //class World


var World = function World() {
  this.words = {};
  this.tags = tags;
  this.regex = [];
  this.patterns = {};
  this.conjugations = {};
  this.plurals = {}; //denormalized data for faster-lookups

  this.cache = {
    firstWords: {},
    toInfinitive: {},
    toSingular: {}
  };
};

World.prototype.addTags = addTags;
World.prototype.addWords = addWords;
World.prototype.addRegex = addRegex;
World.prototype.addConjugations = addConjugations;
World.prototype.addPlurals = addPlurals;
World.prototype.addPatterns = addPatterns; //make a no-reference copy of all the data

World.prototype.clone = function () {
  var _this = this;

  var w2 = new World();
  ['words', 'firstWords', 'tagset', 'regex', 'patterns', 'conjugations', 'plurals'].forEach(function (k) {
    if (_this[k]) {
      w2[k] = fns.copy(_this[k]);
    }
  });
  return w2;
}; //add all the things, in all the places


World.prototype.plugin = function (obj) {
  //untangle compromise-plugin
  obj = unpack(obj); //add all-the-things to this world object
  //(order may matter)

  if (obj.tags) {
    this.addTags(obj.tags);
  }

  if (obj.regex) {
    this.addRegex(obj.regex);
  }

  if (obj.patterns) {
    this.addPatterns(obj.patterns);
  }

  if (obj.conjugations) {
    this.addConjugations(obj.conjugations);
  }

  if (obj.plurals) {
    this.addPlurals(obj.plurals);
  }

  if (obj.words) {
    this.addWords(obj.words);
  }
}; //export a default world


var w = new World();
w.plugin(data);
w.addWords(misc);
moreData.forEach(function (obj) {
  extend(w.words, obj);
});
module.exports = {
  w: w,
  reBuild: function reBuild() {
    //export a default world
    var w2 = new World();
    w2.plugin(data);
    w2.addWords(misc);
    moreData.forEach(function (obj) {
      extend(w2.words, obj);
    });
    return w2;
  }
};

},{"../fns":3,"../tags":137,"./_data":208,"./addConjugations":209,"./addPatterns":210,"./addPlurals":211,"./addRegex":212,"./addTags":213,"./addWords":214,"./more-data":217,"./more-data/misc":219,"./unpack":223}],216:[function(_dereq_,module,exports){
//these are common word shortenings used in the lexicon and sentence segmentation methods
//there are all nouns,or at the least, belong beside one.
"use strict"; //common abbreviations

var compact = {
  Noun: ["arc", "al", "exp", "fy", "pd", "pl", "plz", "tce", "bl", "ma", "ba", "lit", "ex", "eg", "ie", "ca", "cca", "vs", "etc", "esp", "ft", //these are too ambiguous
  "bc", "ad", "md", "corp", "col"],
  Organization: ["dept", "univ", "assn", "bros", "inc", "ltd", "co", //proper nouns with exclamation marks
  "yahoo", "joomla", "jeopardy"],
  Place: ["rd", "st", "dist", "mt", "ave", "blvd", "cl", "ct", "cres", "hwy", //states
  "ariz", "cal", "calif", "colo", "conn", "fla", "fl", "ga", "ida", "ia", "kan", "kans", "minn", "neb", "nebr", "okla", "penna", "penn", "pa", "dak", "tenn", "tex", "ut", "vt", "va", "wis", "wisc", "wy", "wyo", "usafa", "alta", "ont", "que", "sask"],
  Month: ["jan", "feb", "mar", "apr", "jun", "jul", "aug", "sep", "sept", "oct", "nov", "dec"],
  Date: ["circa"],
  //Honorifics
  Honorific: ["adj", "adm", "adv", "asst", "atty", "bldg", "brig", "capt", "cmdr", "comdr", "cpl", "det", "dr", "esq", "gen", "gov", "hon", "jr", "llb", "lt", "maj", "messrs", "mister", "mlle", "mme", "mr", "mrs", "ms", "mstr", "op", "ord", "phd", "prof", "pvt", "rep", "reps", "res", "rev", "sen", "sens", "sfc", "sgt", "sir", "sr", "supt", "surg" //miss
  //misses
  ],
  Value: ["no"]
}; //unpack the compact terms into the misc lexicon..

var abbreviations = {};
var keys = Object.keys(compact);

for (var i = 0; i < keys.length; i++) {
  var arr = compact[keys[i]];

  for (var i2 = 0; i2 < arr.length; i2++) {
    abbreviations[arr[i2]] = [keys[i], "Abbreviation"];
  }
}

module.exports = abbreviations;

},{}],217:[function(_dereq_,module,exports){
"use strict";

module.exports = [_dereq_('./abbreviations'), _dereq_('./irregularAdjectives').lexicon, _dereq_('./numbers').lexicon, _dereq_('./orgWords')];

},{"./abbreviations":216,"./irregularAdjectives":218,"./numbers":220,"./orgWords":221}],218:[function(_dereq_,module,exports){
'use strict'; //adjectives that have irregular conjugations to adverb, comparative, and superlative forms

var toAdverb = {
  bad: 'badly',
  best: 'best',
  early: 'early',
  fast: 'fast',
  good: 'well',
  hard: 'hard',
  icy: 'icily',
  idle: 'idly',
  late: 'late',
  latter: 'latter',
  little: 'little',
  long: 'long',
  low: 'low',
  male: 'manly',
  public: 'publicly',
  simple: 'simply',
  single: 'singly',
  special: 'especially',
  straight: 'straight',
  vague: 'vaguely',
  well: 'well',
  whole: 'wholly',
  wrong: 'wrong'
};
var toComparative = {
  grey: 'greyer',
  gray: 'grayer',
  green: 'greener',
  yellow: 'yellower',
  red: 'redder',
  good: 'better',
  well: 'better',
  bad: 'worse',
  sad: 'sadder',
  big: 'bigger'
};
var toSuperlative = {
  nice: 'nicest',
  late: 'latest',
  hard: 'hardest',
  inner: 'innermost',
  outer: 'outermost',
  far: 'furthest',
  worse: 'worst',
  bad: 'worst',
  good: 'best',
  big: 'biggest',
  large: 'largest'
};

var combine = function combine(lexicon, obj, tag) {
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i++) {
    lexicon[keys[i]] = 'Comparable';

    if (lexicon[obj[keys[i]]] === undefined) {
      lexicon[obj[keys[i]]] = tag;
    }
  }

  return lexicon;
};

var lexicon = combine({}, toSuperlative, 'Superlative');
lexicon = combine(lexicon, toComparative, 'Comparative');
lexicon = combine(lexicon, toAdverb, 'Adverb');
module.exports = {
  lexicon: lexicon,
  toAdverb: toAdverb,
  toComparative: toComparative,
  toSuperlative: toSuperlative
};

},{}],219:[function(_dereq_,module,exports){
"use strict";

//words that can't be compressed, for whatever reason
module.exports = {
  '20th century fox': 'Organization',
  '3m': 'Organization',
  '7 eleven': 'Organization',
  '7-eleven': 'Organization',
  'g8': 'Organization',
  'motel 6': 'Organization',
  'vh1': 'Organization',
  'q1': 'Date',
  'q2': 'Date',
  'q3': 'Date',
  'q4': 'Date',
  //misc
  'records': 'Plural',
  '&': 'Conjunction'
};

},{}],220:[function(_dereq_,module,exports){
'use strict';

var cardinal = {
  ones: {
    // 'a': 1,
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  },
  teens: {
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19
  },
  tens: {
    twenty: 20,
    thirty: 30,
    forty: 40,
    fourty: 40,
    //support typo
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90
  },
  multiples: {
    hundred: 1e2,
    thousand: 1e3,
    // grand: 1e3,
    million: 1e6,
    billion: 1e9,
    trillion: 1e12,
    quadrillion: 1e15,
    quintillion: 1e18,
    sextillion: 1e21,
    septillion: 1e24
  }
};
var ordinal = {
  ones: {
    zeroth: 0,
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
    sixth: 6,
    seventh: 7,
    eighth: 8,
    ninth: 9
  },
  teens: {
    tenth: 10,
    eleventh: 11,
    twelfth: 12,
    thirteenth: 13,
    fourteenth: 14,
    fifteenth: 15,
    sixteenth: 16,
    seventeenth: 17,
    eighteenth: 18,
    nineteenth: 19
  },
  tens: {
    twentieth: 20,
    thirtieth: 30,
    fortieth: 40,
    fourtieth: 40,
    //support typo
    fiftieth: 50,
    sixtieth: 60,
    seventieth: 70,
    eightieth: 80,
    ninetieth: 90
  },
  multiples: {
    hundredth: 1e2,
    thousandth: 1e3,
    millionth: 1e6,
    billionth: 1e9,
    trillionth: 1e12,
    quadrillionth: 1e15,
    quintillionth: 1e18,
    sextillionth: 1e21,
    septillionth: 1e24
  }
}; //used for the units

var prefixes = {
  yotta: 1,
  zetta: 1,
  exa: 1,
  peta: 1,
  tera: 1,
  giga: 1,
  mega: 1,
  kilo: 1,
  hecto: 1,
  deka: 1,
  deci: 1,
  centi: 1,
  milli: 1,
  micro: 1,
  nano: 1,
  pico: 1,
  femto: 1,
  atto: 1,
  zepto: 1,
  yocto: 1,
  square: 1,
  cubic: 1,
  quartic: 1
}; //create an easy mapping between ordinal-cardinal

var toOrdinal = {};
var toCardinal = {};
var lexicon = {};
Object.keys(ordinal).forEach(function (k) {
  var ord = Object.keys(ordinal[k]);
  var card = Object.keys(cardinal[k]);

  for (var i = 0; i < card.length; i++) {
    toOrdinal[card[i]] = ord[i];
    toCardinal[ord[i]] = card[i];
    lexicon[ord[i]] = ['Ordinal', 'TextValue'];
    lexicon[card[i]] = ['Cardinal', 'TextValue'];

    if (k === 'multiples') {
      lexicon[ord[i]].push('Multiple');
      lexicon[card[i]].push('Multiple');
    }
  }
});
module.exports = {
  toOrdinal: toOrdinal,
  toCardinal: toCardinal,
  cardinal: cardinal,
  ordinal: ordinal,
  prefixes: prefixes,
  lexicon: lexicon
};

},{}],221:[function(_dereq_,module,exports){
"use strict";

//nouns that also signal the title of an unknown organization
//todo remove/normalize plural forms
var orgWords = ['administration', 'agence', 'agences', 'agencies', 'agency', 'airlines', 'airways', 'army', 'assoc', 'associates', 'association', 'assurance', 'authority', 'autorite', 'aviation', 'bank', 'banque', 'board', 'boys', 'brands', 'brewery', 'brotherhood', 'brothers', 'building society', 'bureau', 'cafe', 'caisse', 'capital', 'care', 'cathedral', 'center', 'central bank', 'centre', 'chemicals', 'choir', 'chronicle', 'church', 'circus', 'clinic', 'clinique', 'club', 'co', 'coalition', 'coffee', 'collective', 'college', 'commission', 'committee', 'communications', 'community', 'company', 'comprehensive', 'computers', 'confederation', 'conference', 'conseil', 'consulting', 'containers', 'corporation', 'corps', 'corp', 'council', 'crew', 'daily news', 'data', 'departement', 'department', 'department store', 'departments', 'design', 'development', 'directorate', 'division', 'drilling', 'education', 'eglise', 'electric', 'electricity', 'energy', 'ensemble', 'enterprise', 'enterprises', 'entertainment', 'estate', 'etat', 'evening news', 'faculty', 'federation', 'financial', 'fm', 'foundation', 'fund', 'gas', 'gazette', 'girls', 'government', 'group', 'guild', 'health authority', 'herald', 'holdings', 'hospital', 'hotel', 'hotels', 'inc', 'industries', 'institut', 'institute', 'institute of technology', 'institutes', 'insurance', 'international', 'interstate', 'investment', 'investments', 'investors', 'journal', 'laboratory', 'labs', // 'law',
'liberation army', 'limited', 'local authority', 'local health authority', 'machines', 'magazine', 'management', 'marine', 'marketing', 'markets', 'media', 'memorial', 'mercantile exchange', 'ministere', 'ministry', 'military', 'mobile', 'motor', 'motors', 'musee', 'museum', // 'network',
'news', 'news service', 'observatory', 'office', 'oil', 'optical', 'orchestra', 'organization', 'partners', 'partnership', // 'party',
'people\'s party', 'petrol', 'petroleum', 'pharmacare', 'pharmaceutical', 'pharmaceuticals', 'pizza', 'plc', 'police', 'polytechnic', 'post', 'power', 'press', 'productions', 'quartet', 'radio', 'regional authority', 'regional health authority', 'reserve', 'resources', 'restaurant', 'restaurants', 'savings', 'school', 'securities', 'service', 'services', 'social club', 'societe', 'society', 'sons', 'standard', 'state police', 'state university', 'stock exchange', 'subcommittee', 'syndicat', 'systems', 'telecommunications', 'telegraph', 'television', 'times', 'tribunal', 'tv', 'union', 'university', 'utilities', 'workers'];
module.exports = orgWords.reduce(function (h, str) {
  h[str] = 'Noun';
  return h;
}, {});

},{}],222:[function(_dereq_,module,exports){
'use strict'; //supported verb forms:

var forms = [null, 'PastTense', 'PresentTense', 'Gerund', 'Participle']; //

var unpackVerbs = function unpackVerbs(str) {
  var verbs = str.split('|');
  return verbs.reduce(function (h, s) {
    var parts = s.split(':');
    var prefix = parts[0];
    var ends = parts[1].split(','); //grab the infinitive

    var inf = prefix + ends[0];

    if (ends[0] === '_') {
      inf = prefix;
    }

    h[inf] = {}; //we did the infinitive, now do the rest:

    for (var i = 1; i < forms.length; i++) {
      var word = parts[0] + ends[i];

      if (ends[i] === '_') {
        word = parts[0];
      }

      if (ends[i]) {
        h[inf][forms[i]] = word;
      }
    }

    return h;
  }, {});
};

module.exports = unpackVerbs;

},{}],223:[function(_dereq_,module,exports){
'use strict';

var unpack = {
  words: _dereq_('efrt-unpack'),
  plurals: _dereq_('./plurals'),
  conjugations: _dereq_('./conjugations'),
  keyValue: _dereq_('./key-value')
};
/*
 == supported plugin fields ==
  name
  words        - efrt packed
  tags         - stringified
  regex        - key-value
  patterns     - key-value
  plurals      - plural-unpack
  conjugations - conjugation-unpack
*/

var unpackPlugin = function unpackPlugin(str) {
  var obj = str;

  if (typeof str === 'string') {
    obj = JSON.parse(str);
  } //words is packed with efrt


  if (obj.words && typeof obj.words === 'string') {
    obj.words = unpack.words(obj.words);
  } //patterns is pivoted as key-value


  if (obj.patterns) {
    obj.patterns = unpack.keyValue(obj.patterns);
  } //regex, too


  if (obj.regex) {
    obj.regex = unpack.keyValue(obj.regex);
  } //plurals is packed in a ad-hoc way


  if (obj.plurals && typeof obj.plurals === 'string') {
    obj.plurals = unpack.plurals(obj.plurals);
  } //conjugations is packed in another ad-hoc way


  if (obj.conjugations && typeof obj.conjugations === 'string') {
    obj.conjugations = unpack.conjugations(obj.conjugations);
  }

  return obj;
};

module.exports = unpackPlugin;

},{"./conjugations":222,"./key-value":224,"./plurals":225,"efrt-unpack":1}],224:[function(_dereq_,module,exports){
'use strict'; //pivot k:[val,val] ->  val:k, val:k

var keyValue = function keyValue(obj) {
  var keys = Object.keys(obj);
  var isCompressed = true;

  if (keys[0] && typeof obj[keys[0]] === 'string') {
    isCompressed = false;
  }

  return keys.reduce(function (h, k) {
    if (isCompressed === true) {
      var arr = obj[k];
      arr.forEach(function (a) {
        if (h[a]) {
          //convert val to an array
          if (typeof h[a] === 'string') {
            h[a] = [h[a]];
          } //add it


          h[a].push(k);
        } else {
          h[a] = k;
        }
      });
    } else {
      h[k] = obj[k];
    }

    return h;
  }, {});
};

module.exports = keyValue;

},{}],225:[function(_dereq_,module,exports){
'use strict';

var unpackPlurals = function unpackPlurals(str) {
  return str.split(/,/g).reduce(function (h, s) {
    var arr = s.split(/\|/g);

    if (arr.length === 3) {
      h[arr[0] + arr[1]] = arr[0] + arr[2];
    } else if (arr.length === 2) {
      h[arr[0]] = arr[0] + arr[1];
    } else {
      h[arr[0]] = arr[0];
    }

    return h;
  }, {});
};

module.exports = unpackPlurals;

},{}]},{},[4])(4)
});
