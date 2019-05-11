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

module.exports = "{\"words\":\"Comparative\xA6better|Superlative\xA6earlier|PresentTense\xA6sounds|Value\xA6a few|Noun\xA6daylight7eom,here,no doubt,one d6s4t1week0yesterd6;d5end;mr1o0;d3morrow;!w;ome 0tandard2;d0point;ay; time|Copula\xA6a1is,w0;as,ere;m,re|Condition\xA6if,unless|PastTense\xA6be2d1had,mea0sa1taken,we0;nt;id;en,gan|LastName\xA60:64O;1:64C;2:64F;3:64A;4:651;5:5VA;6:62A;7:64M;8:65E;9:65B;A:63H;B:620;C:61Y;D:60K;E:653;F:64V;G:5XQ;H:5OE;I:63O;J:65H;K:60M;L:62R;M:5YM;N:62Z;O:5ZE;P:658;Q:60R;a5SMb4ZFc4CLd3M7e3IKf39Bg2URh2JRi2HYj2DXk26El1OQm11Rn0XLo0UHp0GQqu0FWr072sO9tFVuFCv83w2Hx2Dy1HzR;a0Rbi2LJd0Qe0Hgh669h0Fi06o03ra5B5uVv662wSyR;p,sk;a3VHeSiR;bHck0;in3KFrsd8;an5Q4bWcUerTm62Vni5VQpSrR;avi4N0ek,i65O;anc5MBpH;ch0le3;cRh3E9;a5S1o63V;an,erRo2HL;!bu2K8;l0J2mb5P7na64Vok,rSsDuR;ch,vi;rI3zi;c5UHddBeXli4MQmUnTol4C7rpo64Uto58Tuk60HvSzR;ka,zi;!an0ZXic,k0ZX;ger58QnHz3HA;merRn5HD;!mR;an5H8m2;gRli4MJm0;el,l0;aMouRu;!ko5F3;aYchXhraMiNlWnVpUrSss,tR;ch5X2tl;anRbGi63Sn,ou3F1r;g63Ss5Z6;hir3iIp5N1;etDga;en5CSin5XSnicMD;!ma5ZP;l5OLrn;aniec5Z0on5B1;bHc0Bd0AegHfaro5XNg08h07i627j5F4k05l04m02nYor,pVrUsDuTwSyRz61I;a3N6on611;ac5Q1ol;liIst;an5AWi5ROov;a64Ohi5YJpR;!aR;!vig62B;eTiSnRth,utiq;is,oN;ni,s;l62Ptt511;bi63Ve4LTor,pR;a60Gie61D;at2o5TGus5IR;aRem,otno605r5MV;ib,ri2;ari5KXer5F1;or61NroR;dn5EZv5KY;ra,unays5YF;cShR;ar5KSee;arRo5OY;d5FLia,o;a09e05h30Ri04oVpersiHs2LturrC6uSvRyy,zyc5PE;a62To61M;ankao,iEnas5WXrR;gaitGievichR;!sansou4U0;cYn606rVshiUuR;ma62OnR;gRy;bl62Qe,s1w61D;da,k2GHna5TW;kSsR;ki,t1;!e,um;h63ZkeE;el,p;!arTllKm1KNnSr5TTtRun4VO;m2t53Q;or,s8;l6wo5S9;co02gns5BGk01l00mXnVp5UVrTsStRx;es,yI;!ko;dRengoua63Ige5;in,l6;ez,g,i4k5TEnR;a5YRonP;aRba;da,guc5ONmo62RsRza5XJ;a5XIhi63C;ao60Ne;i,ole5Z1ym4EV;la,ob;aSenUOiRu;e,l1;i4Q7nR;d4th5VN;a3Xe2Vh2Ai0Ro02rZuTyRzaw9;a5WSbBdHer,l5XUm2nn3OQoto4WUsRt5Y6;e,ne5LKoc5X8pia4KEs;!bbol5HLebboOlVnTrRth3SQ;fHstA6tR;eBh;derRs5ZH;!li5ZG;ff,z;aSen5ZEiRo4K7;ce,de,ght5RKnn;ig5ZAy;!erMMi0Ej0Cl07n5K3oWrUsneswesquigi5UGtTulSw4EDycR;en5CTis5WX;fe,i141;d2herspo1;dRms57Zo2AHr1BYth;!e4CFsw604;!dUlRod,t5L9;co62YeSfo7g627l6riRs6;ch,d5YR;d5YQy;!a7bu601coIgWhVlUmanTru5Y9s5R8wRy;arRor5ZZ;d,k;!s5SD;aQed5YLoI;am,ouJ;aDer;dUe2YHfSlRsk,v3;ey,m2;eRin2U3o7;!nd1;s1um;ciRt4HW;chows4ZBecho5KN;l3I3to;aFb18c13d12e0Zg0Yk0Wl0Gmferwi5APnZonz58ArYsWtRx54P;hTos5W8s19BtRz5RO;!eRi5DSma5WUy;b22Ar;eRmo4o4Y4;ld0nb2GMrs;ca5I1em2hi4J9intain0ni2CTsRta5XO;!el5GV;i5WMte;a60Kb06c03d02e01g00heng5YBiarZkWnVsUtR;erRle,on;b55JsR;!giE;p0ta194;e5CPiA;el,lR;eRh5WD;p604r;s5FXz;aDe0G2f58Q;klf5U1r;!er,le,s5L8;hRkl0;c0CTeR;ll,st0;e5Z6u593;b4M2co05d04es,fo7he03i02k01lWmVsTtRve5OF;sRz;e,hi4;c5N6ey,onR;abH;an,et,s;ar,coc3DJeUiRow595s5PX;aSck,ngRot,st1;!h5N1t1;ms1rd;t4VUy;!i3QZy;ams1s5V7ts5FD;!l5JC;e1XBiMs;tt,x;iRm2;ns,r5HH;en,gi5ZLht5D9n6;be,czor571ge5NWh0le4OKnSrRsn0;en5QUzb5CW;i3AGke5ZI;m0o4G3tm2;e,hUkRloI;eRh5MLi;nRy;heis0s;kramasing5ZBma5VF;anaw5ZNr3;a09e04iSyR;a60Wdd1n5VAte;bl6gh5MEnf57OppBs01tR;aZco4ZYeWfo7iMlUmo4tSwR;h0SPor5XY;e4O5iRle,o58Ly;ck,er,g,n5FF;ey,oR;ck,w;duIfo7hSl6m2seEwR;ay,o5OX;e60PouJu5XB;k0ll;s4RYt1;aTel0lRssHts3FU;an5POeRl2;h5M0n;bBr,tR;l6on;lRmoQn,rt1tt,yC;an,e5GAl6on;a0Qb0Pd0Ne0Lg0Kh0Ji0Bkar4BKl06my4VCn03r01sSther199uthe5T5xl0yR;gaQm2;b2WDco60AeYl0n0sXtR;!aEbVeTla39Kmore49Nov0pSriR;ck,m2;ahEh609;lak8rR;!gaa7;o1MRro4IMu5XA;e5T1in42F;lo5I7ma5UIn3GE;bRhBt,y;er,r70;ar4B7c,deSer,ga,k,niIsl6tRzH;er,laQw5X2;l,rP;bu578ch,d,feFlTn0sStR;on,y,z;!ch,h;!eRi2E3m2s,wo5O3;ns5AYr,t;b54Qck0e5MGgXlWn0ppeFrVsStR;he,zH;enthe3i5X8lo,mi3ZVsRt3P3;!ba5VUenR;bo56Zs5AT;!iIot;!brenn0;a7h5LX;liMm3F4r5XH;an,eli5R5n0;ch,dRg5IUkGl0se;!n0on;geRloI;!r558;b5DGer,st0;d,k54An0riMtherRv0;b5OWup;an25Rb13c12d10e0Zf0Yg0Uh0Ti0Qjs8ke0Ol0DmpBn0Aqua5SMr02sZtTuSvro5VGwan24PyR;h5FZlaQm2;gh,thi59F;ana5IAchVeSi0ki291so5AUtR;!ec3RYie5EGs,y;rRs;aEh2ZJm2sR;!treA;el,i5LR;hSki4EFl4I5t1ylR;ciw,iw;ipaba5SHko;am,bXdVeUfo7ga4A6ing295kTl5QNmaInSsRt,wiI;ima5URza5H2;af5LIe5M4oI;!en5JD;!nc5XSs;eRle,r5QI;l5DEn;riIu5N8;dl0em2D1g4BWkSnR;am2D0er;!o1GD;dYeXgrae5RJh3kWlTmSpoBsh,tRz565;!e5LBh5DPon,z2H4;an,sl6;!aFeSgaDiRm2;ng1H9s;ck,n5LQr,tD;laDovi58F;c5S9ry0FCs;al,iSn0onKrR;if,on;ck,spu2B7;f2LAlRy;iMm2;bHdKnSsbr5MKtR;!e,o,tequaQ;m2wr4NI;ichko11Ol8;an5SWeSnRwawaho5TM;er,iG;nRt49C;a5XCer;erLf0;cO8lp5WI;deRel,lei5GH;l5CLns;ey,kenh5WFo4RC;eRle;noukisik11Dr5L4;a3Re21i0Ela0DoUrSuR;ig5VWlga36Gr5XW;ee5SBign2RNk5E4oR;mAon8;c08egt52Pg07hl,i04jtis53Lk6lXnVorhiGr5PWsUuTx,yRz;ar,er,nR;a5F0e;e,k,l3Z2ri5S2;e,sm2;d56Jext0hoh8kn0KFod0ricNTsR;ae5V4y3ZX;aWcViUkTlRp4U4terraNw5KM;eRiI;n3DUriM;!aeFri5V0;g5S0k0K9;k5A7y;nt,ti0;cu,dy,gSns1sRza7;a7elBinK;ht,t;el,u0;al,elBi5QR;ardingerbro532so56U;a19b18c15d13e0Zg0Qir4k4l0Cmon5N4n06o04r02sZtWvSziR;au,e4KJ;aTeSiRo5V3;aNerL;ir5P8la4UTt;l5U3ra9;aRiuIk5OOry,ti,ul5W4;lRrd;!e,iL;!cReJ4h6i2SRson4Z0;ar5TYoR;glio5UTl,mpDn5GZ;aRce5TFeLk5OImon3SVo5Q7t5VA;l5TVn2Y8;lRn;a7et5GVi,o58F;!ceTeRk,ya7;tRy;!t5T2;lRnD;et5F7lR;etDi;a03b3EVch5QVde,i5RMlRn0on,tofs5QE;a00eTiRne5RYot;aReu,ot5F3;rd,u5S8;!br58KdWfVg5R7mTnSrRsec5UT;ay,s,y;a5PBeu5PB;aRe4u4;i4rt;eu,r46G;i40YonC;!fu1TEgom5QKl58Dndr4SUrRse5P2t;d,e5WBs;in,nd4r4LAt,y23F;!a5DIeXiWnSoRro5VWue2KZ;a,t;aTeSi0oRy;la,n;!auOr1t,ux;is,le;a7la5PD;aRr;nt,ux;!au,ill5QClTn32PrSuRw2F9;!xfoF;a,nesHra;!e,fau4;al5F4e2NSis,rR;egn5HMic5HM;aSca,eRo;!n4IG;i4r5PH;eFo5VE;fo4g5P6lTnSrRu;d,ri40A;!di0;!a46N;a1EbeFc1DdAg1Ci19k5OQl15n0Wr00sXtUuil4F2v3U4xtoriCyTzR;e5iR;e4IVna;rPs;e4rStRu;er,or5FH;a5OWie;c5P4en5SPil5BOsRt3WTve;e5F7iRot;a,e4;a0Lb0Jc0Id0Eett5GSg0Ch0Ai09ja11RlQLm06n04o02p01rYsWtVvRwoeF;aSeRilB;nCt;eRis;c34Hl5RVt;efeu5G5he8z;ail3OMchRi,t25;e28Cue4;eSiRo4X4;er,ll5LY;auOc4JZt5DK;ael5ROeal5ROi52W;!nR;!e5ne4AF;a4UReRi5DXoui4IH;!rLt5MR;aSeR;sh,t5DD;es8nd;eu59Dty;aev8elRo1YI;le,st;a5QQeRne,ouv8;!at,gBrKt5D7;eTiSonRy;!ck,i;!c5NAer;ro5PCt;aingCh;aCer5RNoRu5RW;!nc57M;r5PVyP;aXdUeTiSne4NQtR;i,ur4BE;ck,e4;d5FUg5P1sLt,z5KZ;eSitRramiN;ol5S7ti;riItD;!bBnRsJ;c5NXt;!aTeSlR;a,uc5DB;s00z;rd,s5P1;g0CQllSnRtZX;e,o5U0;e0MFo5DO;he4YWia7;auOch5NOot;le,ry,uR;!d5R1geo9;b4c2Td2Ri2Ol2Bn0Fr06s01t00uTvaSzR;qu5O3;la,s1KW;b3S9cWdUgTja5OBle,q3D1tSvRx,zaudug5S3;i3MYr5MO;hi0i0o5E4r3;eo9h2;ev5ENrR;a3eu5MKin,on,y;h0la5HL;ch0e5EKtheu0;as,el59UilUko,qu5NTsR;!aSe5DXilRor;!j5P5;l,ram532;a1VVen534i5SZo5OT;aYeXgaWiUl6ma,nTot5T1rSs,varR;as5CTes5CT;ie5DRy;ey,um;eRn55J;ty,ur;!ra;l5NXnK0;!c0KSlo,mbouviB;-hav4a1Kb1Fc1Dd0Oe0Nfe37Ag0Mh0Ji10CkoughnAl0Em0An08o07p04r03s01tZvWwTzR;anRielegh8;dt,t;alle1GiSoRy32D;lv1Dnth97rm0;jk,nd8;alkSig,lR;aend1WGiA;en5NC;a23KiRy;en8gh33M;arelber5BBchPeRum1WC;l,v1WB;enter16oestH;eperstSuymbrR;ouI;raeD;pst5SQsKt5CRverm0;eRon;ck,l5QKr,sD;eTiSoR;nsj5S4orh2;chHddelko5K8er5RM;er,t0;aSeRuvan5I2;uv8ym2;aSeth8nR;de0Sen;n8r;erIoRust8;rCuR;c5QMtD;!een05rimb8F;g54Sl,t5K4ve5PE;a0CeTiSl4K9or2r3C1uRy31I;s8ys5QI;erendonIjk;g08inJl06meulebroec31FnZrSwR;alBi5LF;bVdonckt,hTlu3CTmSpoHsFBt55Xve8wR;al5N8;a4MXe0i3CR;aReR;yd8;eRyl;ck,rg5Q8;bUdTeShout8kerckRwild3U6;hov8;!n5N0;a0C0ungengronovi5JF;os5NXrR;an372oeR;k,le;aRe5C3;c,gama5RN;insDri5BJ;eBlSnR;biggela5QTel5O9;!e,le;alst1V0hRle5KEort40W;estein4J3y;eToetzSrRur8;aba5KRuy223;ela0;llRrg8;gh323;ck0el5O0mme5E0sseR;!ndel5B7;a5MGc02dZeWiVlRot5D2t2L3;a19XeSiR;erGll5GS;e,ntgo5FGrRt,y;aQon;n,qu501;ntSriRt;en,oD;i,y51D;eRoI;be25sRz;!be280;in,ouF;d3PTlRnc54Aos,r,ve;!lanR;c3I2t;a5ONeRna9;au,bonc53Y;carUhRlav513zy;eRon;rRt;!e466ie;e5NCo;bart5LCc5BJg08h05it5PNl01mZnXpWrSsRtinaw5LC;al,er5I8on,tin5OP;baTf0quSsRza5LB;a5KCiN;aFhaF;in,s;at3NOsh58I;derRger4O3;hiEwo5EO;bRfr4H5p38S;he3M5r34J;ako4JPbricks1ep,ho4XNiSlRm0ri5MH;i508ri5MG;nRshn6;!e24S;lSrR;i5MCy;!e4NTfe577;laQu5D6;a6Tc6Pe5Oh4Ei3Jka3Hnimer4SWo20r0Ks0IuZwVyR;e5CRlTmSne,o,quien5HDrR;an,e4MMl50DreE;ch568i4XIofi418;ie,or;eSiRym2;gg,niM;ddeEedR;aBy;!b08ck07d06g5GGi05l03n01o3DTp00rTsStRx35Gzo;hiEi5JBty;c2h5NMi,k2QH;aNbWc4S4enGKgVin5GOk5GOmUnSpRri0t1;!auOin;bRe576i0oI;l4RXuE;aiCel58L;e1ot;a57Le,i3PD;in,liMp3XW;nRstaE;ey,oI;ipa5IZlR;!ey,i0o5LMy;l59Ate;auOe5o;!er,li2L6no5PD;iel44Qm2oe5LK;chawaschinakusc4UJerenp5I9heil5ITiRoufl1RRui;gad5K0he5L0non5LCp9;a0Ve0Ji06oXuSyR;gg,m0n20;ax,ch4D1de5EJeUff0l592mTnAoMsRt;el,l0sR;!aFl0;bBel,i0p;l,sd4GH;al8cYdd8es5L8iXll0mVnApUquAtSuRws1MMy0;i4CMs2GIt;e5hi0oc3KYtR;!a3e4VIi0;ia5IGp0;bRp3WL;el5NZly;lo,ni,ti0;hAki;a02b5J7c3MUe01fi00gXh6ls37OmWnUoTpRquAtG;le5OSoRp;di,loC;!n45Ht;gRks,qu3YE;a5MMle;!bo5ML;anCeSoR;!trinda5JS;ni5NL;lett5KWro;b,re;l,ntapoulosNud;a00beZc4P8dr5E1en,fXgonniMh8illWlo5NPmVn5NHpaTsSvR;e5LRis2;s6tl0;g5MFnR;ez,i0;aiCbl5BDo2TOpK;!et,i;eRfB;n1UXth8;k,rt;dRsu4udecoe5M4;aw5B7w5B7;ch00g0h4SLin0j5IImmeEnWo4pVsUvRyn57H;ag3XBeRo5N6;ni5FPrsR;!ay,e,i,y;el0k;h4L3p;!chRqu58Y;aSeR;ll,m0IF;n5DSrd;imow5MJy;b16c15d14e2UQf12gn0JQkarz,l10m0Vn0Oo0Mp0Ir0Ds0Bt0AuUwRys1z5FA;eEle,nRsl6;e4H3sR;eQheQ;b3che05g5IFkat4SNl04me584p554que3SArXsVtTve2PDzR;eRin;!au,l;!aRen,ge,lo5J0v3Q1;in,nt;elBig6LsaRt5N4;i5GVl3;aVeUi47NlAnRon5COtel5HWv58I;eRi0o3XO;b1lBrRu49N;oc5LR;!au,il;ng48LuR;de,lt;go5C1ze;q5LPra3tD;h,t8;caNh,sHtR;ev3o;cUd,el5L4i5GOk5HKnTok,pe,rRte51S;an5J1eR;s3W1y;aiJeb58M;a56Ih5GT;a,e,h58KoSpRs2;!i5ER;lnRr;is5GR;ds,f,le,mR;bs,ey;as,dWeViUkTnRty;a3E1eR;!ma5L3;anCin;et5LSo5LU;ll5F1r;rJXu;aTbLe532kSli5K2pRs;ic,ki5L0;i5KZow;i5G3lRn,s4XO;la,ty;do,edo,lRon,st402;an,ey,i0;fRt;a,lemi4o5KE;a4ASdy,orPP;cac4XHh6;ey,ic,l0;cRt5II;h,k45F;a0Kb0Jc0Hdr5IXe0Ff0Eg0Dkk1SRl09m03n01pZrYsUtRvich5B0wis5EO;aSchywakF9e,iRl6te2UVyk;o,r5GB;r3XFs;chTi,on,sR;an4QJeRi5o59D;r2ur,y4;aFer,uI;e4LMli,re;pRt1;er,iMma5GGy;a5FBcWZdaEkRon,us;er,h57Hl5F4;bVl3mSonRp3R8s;ey,s,y;!eRi5K8o5K8;ns,rR;manLs;e58Hro;bu5IXi0lRma569t1;a7eSi,m2oR;n,ts1y;m,ry;e,heLne,r3uG;fAn6r1;rRtj8ulP;ce4L7n6;al,eRh6kn0li;!h5I6;bi4ZOoO;n,tatih8;a0Ue0Ji07oXri55CuTyR;f5C0sR;!dH;il557muOn58Eot53WrRss,y;bSi0m8sR;by,t1;er,u4SL;ai,e5IEin,ll1mXnWrSuR;in,saQzH;aTbSnRpKs1;!e,t1;o4SGu4SG;l,v5L5;ey,is;!asSeRmas3ps1s8;!l52F;on,s52E;b00chAeYff5BKlle3YRmWnVon,rSsRvier5GS;daBe55CtB;eSiRot,y;er,o54K;au,me5E6;akar2el53R;enRot;e556s;rRss8ul8v3;i5I8y;aud5A7eFi,oRut5FP;d2USut3R7;b00d5GGis8llZme5IZn4D8oXrRsa7tr0YP;aVeUiaSn,o5KArRy;e5B6i8;q5IYultR;!bujo4SR;auOr,t;ce,uO;doRfil59ErA;r077s9;ab,en59J;a51Ner5G6;b5AXckViUjge4WJnSt5ILuRy0;m54Pte,v4KC;as1HToR;p5CCs;laQn,saQ;!er0F7r4UL;a0Qb0Oc0Nd3KGe0Mf0Lgo0KhHi0Jja5EWl0Gm0Dn06o05rXsUtRven3wf4UH;aSrRt,u;au,eau,o;ouis1R6rd;ke58Tni0sStR;a3V2e,o4u;er31Hi0on;c39RiXp1K3rStR;elc55Gre;aUeTiRo5JL;aRck,er,sJ;h,n;!au4T8n3HU;cc5AGin,s,uO;auOeBll584;liLtaranha8;aWbVc5G1dlUnSsRta,zi;car4on;a5CZey,iR;an,er,na;aQen;erg8;gl5DAnt,rd,uO;e3SQk6pR;a5E1leR;!m2t1;a593en4T4lRm0ZA;eRi0;m0r,z;chorab,llAssere4AKx395;nagenni1us5H8;ft0n0;d,s,t0;ci5H2h0k3V1;bRo;roeIu5J6;g5HKre,s2AM;hRik4QM;aMiSorR;yk,ze517;no4Z9te5AK;b0Yc0Xdr5B5e3P5g0Ui0Pk0Ml0Lm0In0Eoc,p0Bquo9r05s01tYuVvSweEysR;!ec;aRer5H0r6;gl019rR;a,oz5AD;pi0reSsRte,zi0;!s583;au,l,t;ic,loIoRroK;n52TuR;!ague5G2;cThSk,na4IPsRt4E5;e,ina5HP;ko4S9;a,he43L;asVdTe5g0i3N8lSm6quiNrRt3H5zi;a5BWid3TV;ey,o;e,iR;f,vH;i4YOs3LZ;aSerno5I4h4K8iRp5AG;e54In;k54Ar4O7;a5AUcTd5ey,gSis,kersl6n5D2q48RsRze50C;e48LweE;!o5ECu55C;ho55Hre5DG;!aSbReo,i0l3;e5u5DU;n,ro,s;!ari5D4b5CJh53Ola7m2on4K7ty;aSeRi5HRs59R;shi5DXuc530;cs,h1KW;lRsa5BDt;haTlR;a5D6eRon,y;f0ur;n4MBrda3;gSliaR;fer5EFni;aFet;coCh04Pkn6;aSet,ic5CIle,oRrizi3QP;i5A9r;ry,uO;aF2bF1cCPdra5A7eASfriz591gAOh9Ii85jom2k7Yl7Lm7An71o5Op4Squ4Qr4Pt1Du0Gvei5F3w03yVzR;aTcze5DUeSiFtankov4U3uR;b0m4RC;i4MLle5EB;bo,l514r4NF;!ch,kGlUmTnSph5GTrRvr56U;e,i3E9;no5HIo5HI;bol4RTes,in4W5on8Gs;co5CUvR;aSeR;rho55Os8L;n5GBr5GB;aYeViSoRygwa53I;bo5C2l;ercz4N4gSk557nRrce3Y9szczo4ZF;del53Rfo7;aFeF;ariK6eRll,ns1rdfZ0tli59R;nRz6;ay,ey,y;ck0iUlTn3NWrSyR;ch4XBze;d8t4WC;es,l5DO;l53In;a0Lbra0Kch0Jd0He0Gffo2AXg0Fh3PWi0Eja,kun5BQl0Cmmer0Bn08p05rYsXtSwa5ETzR;or,u5AR;cTer,her3QBliffKtRz;eRo4SJ;au,r1AM;h,lifR;fKse;m2s4EG;a5EAbl56Cch,dWeVgUlTma,n2P2onCpreSre3W9teGujnau5DWvR;ey0oy0;na5A1;ak,o1SD;et,ue;au4Q1t4Z6;if,yn;eRi5A2pHJry;rRt;i5DUn4ZV;bo5DWdRstr555;a,bo5DVerRq5B2;laQma5AV;f4N7l3s,t1;em2ko,l1NBtRzB;ai4e;c5BAff1re,s5B4;d8r5EP;tl0;da7ey4PXoR;l,ml4NP;et,odo33S;!nN;g0rR;d,ez;-25.24a1Id2BRe0Zgeo07Ni0Sje2l0Rmi2Do0HrYuSv2yR;g0lG;a7bTck6e1UDll,p54FrR;gRl6m6n6roI;e1iE;bRi5DG;inRlef4MPs;gt1s;a01eYiXoTuRzel3R5;b,ga4k,n55HtR;he52Hr50T;bHehe4LAkow5DOm59QnTpSuRv0;b,ds,se;e,ian5EN;a5BUiI;ck3P1de,gn0k3P1ng0pl3;bHc4PBet4TPif,lSmmHveR;y,z;b03Jow;b9cXda,mWn523sTtRuss4TMv6;en,fo7hRt1;ea4MTie,y;b3DYsR;bRer;ou5CTu5E0;!andi2QM;h2k;bZckYdaFeXfWkGlVnTo2OMpellb8rSsi4MTtt,uRvHweEy;g3O5t0HB;ch4MRe4WQk,m1oz4VHy;a,eR;!h2FMy;fi,g52Qzenbe2TT;feEiB;be,ssH;!daBer,le0WQm2w10F;bs,o;auF1ou9;b49SckWdd,eVlTnRre,tt,v8;eho4ZEgRs1;a,k,ue;et,iar59NlRs1weE;ar,in,y;gli4R3li;lGn6;-08a06b58Gc53Hdm2e04f02g0hl6i00llZmXnWpTrSspr52Qu0veRwa7y0;ns1r;c4ZOg5E0k,liMn0ry;an5ABhR;anRe1OJ;iIos;ckGg0s3O1;arPmRs;a591el8l0;!i5E4y;gn0nR;!ba5AOer,g5CXhi4VKmeB0th5EK;anat56MfeODlovR;a,ic;ks4ASlKnRpe,vG;!bu4LQs8;!dRr5CQ;!w3NO;cEEm1OJ;b0Bck0Ae0O6f09gChl08i07k5DUl06n00pYrVsTtSuRvo5C4wowy,zn4OM;b,ff0;es,h4ZR;iRs8y3VZ;!o4WB;an3PDbuIch4UDliMm0nSosz4OHrR;!a5E4;a,es;i29VleR;!h5APs,t1y;buIdVf20Yg,iSkiRovULt1;cewi589ew5CO;f5B2sR;laRze56E;s,ws57P;f20Ti4TT;in,k0;kHrs;!be5B7;an4NGfo7ra59N;!ni4L8poB;aIiBlGn0;a4P7el6OlDN;a0Jc0Gd0Fe0Ef0Dg0Bh23Tj07l03mXoWpUqueTroSsauve4Y2thom58DviRyvG;ct4WZn350;ch,ma3;nt3;a3MOeRi3Y1;re,t4SL;m0n59Bu506;aSiRle5D5;chH;rRuDJ;cHre,sRt3;!eilleR;!-fo411;aToRuc;!uR;is,p;uD7wr46Nza4;aTe2oSulR;es,i8;hn,r;c0H1mGr4;eRod4EJ;la9mmeLorgeLr2KP;el4Q9ran13L;l5Zti56M;en9izi0;a5C2er57HhSla50XoRyrK;e4XBme;a289ristop5B7;mTnSrRub3;maQna4U4;d4ge5BVt597;aQo4X6;eb1K6ivas3ID;agamiko9er2MViRyrG;bb,reL;a0Ce06i00oZrSuRyks490;gn3ETrr;aVen524iSoRy;tt,uJ;mo55VngR;er,sR;te8;dl6gRtt;ge,ue;on4QHseto,to,waF;cVdHeUl4JVnSrRshoIz0;a,i4WFop54G;a3NDeRou;ll48Gtt4UO;gHrs,taH;e,kl0;arVcUdTer,ig58BnSrR;a55Obe59Loun9;a7ce,e5BU;al2ZEdiM;h,k,t4VG;!a55Ee,m2s50F;argar8chicouaCId6gXlWnUrTtSuR;n3ECra;h9t;k5BCliMna4Z0r58L;gRi0je4YM;en3E8l0;diMlanzaNt1;gia58EnR;io3L1olR;et4VViN;a12b11c10d0YetaFh0Wi0Vkol0Ul0Qm0Mn0Jo4YIp0Ir0Fs0Et0CuVvUwTySzR;et,io;eGDy56F;!e09N;al,iaD;a06b05c03d02et,il3XPk01lYmWnVpUrdiTsDtRv3D0za;hRie4;am,er1ie4;f,vG;i3G3r568;g,ia;an56NiR;l3XIs;aSde,e,iRor,s55T;a,erGg55Xni0;ge,nge,rd;onn59Fup;aNer,ol,re;heRy;ir1re5;haNir4IAl50Qre;mi,rt;l55VoRsitsihowaCtB;!may4UH;a,eb50O;bSce,de4UXeRma55Mren3O7;l,ns40Yt;a,es,o3K1;er,ha,in53H;dSi0nRt35D;e4SXi0;eFr4OR;erTly4XXmR;erRi0;!e5AIs,v4VT;f6Ss,v4VS;aTch0de,eSiRle36Om2owo2VUqu3ti;e5AFs;c537t;gGn56IriK;an,o4SSuk;f0gnonb,ll54W;i0nR;!e488;eRgergre8os54C;n,rl2;hodols4OGq4W7;ey,hi,i2QM;me,rG;aYeUiSoRyd0;d4ADok,w4ME;d0eRseran4K1z4G6;rs,z4KN;dd1eTiSlRtt,y;g3ORl1SR;d0rs1;!p;b59Qy;aZeWiTocSu4OCyR;k,thK;k,z4FX;ga2WYle49Xrn586tR;hRs;!e4WPingeE;aSe594lRntzc4HHst1t;in,lP;rs,t1;il,llR;ey,wo4Y5;aZeWiUoSyR;k0w52B;at,boRc4YGniego55Uon,the4WHu4S9wi3QR;da,ge2;c0de,gRnto554p1GLz;er,ht1;aSighRmmo581no,v3;er,t;g0n6;ck,g0o56Kss1tTuRv3K4ws1yd8;gRte56Q;ht0;er,te56O;aWeUiToSrRu2PJyrP;eslAo52C;fro1GVg2rb,tto0CW;l46Enn0viM;a,enKlRne,rlt1v4JP;ly,t1;ar3TQff,g3GDi4VXkHlk541na,ps51T;a12b11c0Yd0Ve0Rg0Ni0Mko55Cl0Em05nZoXpWrVsTtSvRzm2;a4DNer3YJianx,r4YJ;es,o3SQt0;co,et,s1tR;la,o;a7e43Pge,isaw4XVna,o49Z;liMos,plG;ch2n4B5uR;i,se;aVcSetDgRi,j2GXou,xt0;ca585er,h4N3l52U;eRla4WZ;nRrn4YX;neL;i,ll1s4IU;!arN8bl42LcYeXiVmToRps1s4MY;es,nR;a57Uds,e4H3in,s1SQy;e4FBonRs;ds,s;enRno,ot;c359s3RT;oCr;ox;aXeo,icaNlWvR;aUeR;i54MrSsR;tr54W;s2NTwo4WS;!gg528in,n50S;im2ye;rd,smakwe582;no,ra;a4POl,m2RFnSoRuGG;gCin,u3;er,orR;!et4SDi;beTfeFgSmRverkro536;i3P7s;el,l0waF;rt,s;aw4V7eSl6m2oRweE;li,r1ET;le5ro53H;aSil570kiNoRuren4ZE;n4J4tD;n4J3rd,te5;er3D7il3JWl6;ne,ud;a0Ke0Bi06oXrVtu4UAuRyD;bTffeOlSmRn1J3te;an,ko;l,m2tzK;a4CRro3QB;ad0eRi1I4orinche4HH;ad0en50P;eYk54An1PHoXrVuTvR;a,eR;l3r;ldRp;is,om;e4NItR;is,keep0l6;k,n0;m1LTs44Q;d0GLelUl44Hmizu,nTpSri37XsRvH;hiputag2lo;m2peO;dlede4CXe1Tk;ds,l,s;aYd2SQeXffWh51FiVlUm4H1ppa7qu3rSvel2wR;an,c33V;id8rRwo4VK;aQer,in;a4WWb6dt,t53Av6;nk,toy2;a7er4WC;dy,h2OJp1EIr3sl6t4ZQ;dy,n,re4OL;ar,dowe55Gef0fOYh01i00kes4EOlap4U5nXpWrTshume56EtweEughWveSwRy;in,l;l2r;by,iMkSpR;e,lG;ey,l6;nes33Q;aSd,kRly,o;!le,s;feOh2;en2ISnk;!an,in;aSorl1rR;oi;n4WDrR;bi,i40T;a1Jb1Hco1Gd1Ce1BfTGg17hl,i13jour11k10l0Um0Qn0IoMp0Hqu2WGr01s00tYurAvVwTxt1yR;eRme54Z;au,r,z;a4ETeR;d,ll;al4QDeRi337;nRr4L0st4;e,i4ME;lWQo4I2terRz2RA;!bl56H;ny,s8;at,b05c04e5g02h2i01m4Ton6p407rXtWvR;aSeRign2os;t4y;iRnt;n,sR;!vi5;el,orel;aSeRu4U4;!au,n3J9rG;nRr;!d,o,t;en,nd4FZ;eRi;nt,rP;hi21Ria;an,i2;ch4M4ulve50N;aXcWeUlAnSsa4ZDtR;enCi0;!eR;t,v4QS;cRle,s4FPz;a3NEh55So1HF;hy531il;ck,r4VLt;aSco,en3GViRjon53RonGp0;na4RQtD;li0nRy;!y3NC;!aVby,ci,eUig52Vk0lSmRva,w4SL;an,et,i4OP;aRe536s;nd,rs;ce4s4Z0;m54Yri;al6ouako3NQu3KL;!neR;!r,y;b1N5d4FPfTgSll0ne,s4UJtRzK;ch0enlu52E;le,neurA;eFoF;aSee,g559l1SHmoQuR;e52Zin,y;lRr,to4;a,la;d,fe4DBl6r44Xwal53M;erTgSiRmihrads4J0;l4ZEn4ZE;e,l6;ay,ho3N0;n4G0rd,urL;ast4VKeRilB;!sty8;bTlSrRve4MBwa7;le,r,s;!e4TK;o0LRro3N9;a1We1Vh05i03la02oYrSuR;ll27Qrf4BIt4OS;aVe2BLiToSuR;g3BPt1;sa4OPza4OP;bn0p1C1veR;n4INr;i4n4GR;bTfSll24Hol,rRtte03O;c53Fdamd53Fso;en,fi0ie4CP;ey,le;faNt0v4EQ;araffa,oRpi1s2X2vi0;rpi4XUt53D;a14e0Zi0Ul0Pm0Ln0Go06r00uUwR;aRen3RLin52U;b,ll0nn,p,rR;k,tz,z;c4W5eVhma52HlTmRne41Vr4DWst0tDvail0;!aRph;ch0k0n;d,eRl0tz,z;n4YIr;rm2tz;aUeTijve4QQoSyR;buFer;b0d0ed4J2;ad0ck,ib0y0;er,mRpp;!m;bb,c3YZeYf4AOlXmm0nUoTpSrr,tt,uR;ff0l4G2;ac,pe;fs,l0;bSd0ei4ZXfR;el52A;e52Bra4SD;lKt8;b,c2CYnR;!wa4BV;arr,eide4LLoTuR;bRpp;b,el;bRg0;!b;a4V3iSoRu4HN;ck,uth4IP;d4QMliMtR;!h,t,z;aUeTiSossRybeuF;er,ma51L;c4ZEnk;ck0gHiha4ZHsi50Sy;tz0;aUck,eTff,lSpp0rRsgh4VP;al514m0;f,icoCke,l0ACt0;l2CFttekatD;ppac1QEvoN;eUff4H5iwi338l402mb4nTrStRub0xna4NS;agCky,te;!dHer,g0l3merho4ACr0;ck,dl0;jeep,l,n,v0;b0dli4Z3e01fZlYmXnWpp0rUtzBuRyG;bSeRm;n357r;!u509;fRmHp,ry;!e,f;ck,en,zen2LM;bi0p4FI;l0t4TY;er,fR;er,n0riI;d0fKH;au4OVivi0;gn4MMhiEi4P6lUmpiNnTrRuJyan00J;a4W1bRder4O1pit526;e5o;dl4LLl49Kt3BV;aRl3QAzo;b4Y2ip4CU;ar4YGirado3Y8;a36b2Xc2Sd2Rey,f2Pg2Lh2Ki29j28k27l1Qm1Jn0Zoum130p0Yquesp4RYr0Os0Mt0Ku03vXwUxTyR;eRl4COwa7;gh,rLs,ur;!iCt1;aSchuRhn6ic4G8;ck,k;n,ts4G6ya;aTe4VEiSoR;!ie,nnAriNy4NR;da4VGgn4C2ns4G3;ge,rRs2R7;d,iRy;!a,e,ni;ber4ZYc05d04g03k4TNl01m00nZp3rXssWtTvR;ageRe,iES;!au,sJt;eRn0on,r36Gt0;nCt,uR;se,x;e,ig4W8;eRi4FOo;l,tD;d4GUi0o9;aFi0u4w0RF;a9li,ni0qu3tR;er,ry;er1u0HF;e,riA;e4X1h4HTiRo2V6;er,sJ;aco36DoRtl0;!re4LL;a4VAsRv4MH;!ev4MG;aZb,ceYd3e3GXgeXi4XLjea4URlabo4T2mWnVo4VZrStR;h50YweE;aSeRo41W;re,ttK;bou497z4Y7;ec4V3o;ien50A;ant,nt;l0NNn;co4VZgu4NAnt4VWo,uOya;ee,i3I4k4TAount4SM;aco4bor09c06d03foFg01he50Zitr50Dn1onKr00sXtSviRz;c3UYdo,lB;!aUer4HIiToRy;iRr;ne,re;er,ll2ni,o4SA;cruz,iCros4VR;aFcSer4fac1oRrTsig4VB;ne,uc4QV;ar3LJhagr3rainD;egrA;ine4ZUla4W0ol4ZWst0uR;inAjC;erSgr8li8oRs;lo,v50S;coIe,s4P2;er4hSoRy;mb,uF;a4V4e4FW;d,n;aWbVeUi4VRl50Mm4Z1oTpSuRw4XO;els1KGs;as,le,s1;is49Es49Eurcachi2;k,o4ZHtz;auOe5ir,o3FN;kraDrdzi4Q1yVP;a05da4XPe02g01haNi00lZmWna4T9oVsUt0vRzm2;aSiRy;a,et4KE;d4JNil,s,tor4BD;bu4XFki;!is,tto4ZB;eSonR;!ovi4CE;la,n,r1;afranq4YJes,o4YJs;ba,er,ot,si4TL;a4VIue4M6;!mbi0rSsR;bu4X6ki,seL;a,no;bRdzi4RLh,is,m1ps4WIz4Z7;a,er4X3;ala4I1elar9iN;gal4A7ot;a4WEll00nRto,z2;b4QFcyl4RGd1ge3KNtRxt4J6;-Wa7eUil,jTlRon;auR;re4T2;ac03Ne2;-cRcRlo9;ro4CW;fiEh1PSlYQmauRp20Hurba3;ri4VH;a4SWot;e44Hli;aSbo,eRot;ot,r;chte2YKlR;aLla;fRko;i,ou4WJr3U9;arangaNi4T5l0ou170;aUcThAkhoa4V5oRre;chiouRkP;co495;a4YBhit3KXo;gaw4BVlo3JMr3JV;atXba4HNeWi4SOlUoTrSuR;rn,s4U4;an,evo9;lBur3;ie4oR;n,s4D0;e,l4HYt4YN;e,iRte;er,ni;b,da4W9ke,r,s4SQ;a6Me4Xh4Ti39o0IuTwiyanili4UYyR;aEbRc1ZQgh,keFl6m2n4HWpi3FUrP;aIka;a9b0Bc1CYd09e07f04g02h01iz,lBm00nZpYqu4LVr46BsUtRwe,z;a4AFhSigl4PGled4UMtR;er,le;ar4XAer2ECm2v4VM;aw,by,cTk,n467p4RNsStR;!ad,en4T3;e4YNo;h,io,oN;erth1Z0pe,r2CH;cim2ne4L2s6y45N;ak,bo46Sl6pf;l3W6omutal43G;eni4Q4gRuA;ie4V0lG;e,fRi3I6;!a4XHet,iR;er,g4SX;dy,lRst,t4GW;!laQ;dRge,ow,ziav4EL;!ef4VDuIy;b,eSiR;con4V8o;c,nRrt4QH;ne,ov4TR;a2Eb23c1Yd1Se1Qg1Oh1Mi1Lj1Kl1Fm18n12o0Zp0Yqu0Xs0Lt0IuYvWwTxbur4GLySzR;elBiCm2on,zi;e2Tgi02Jly,on,z0;aQb0IZeSlRse4MT;a1BNey;!ll,rt,y;aRin491;lAn;auOb08c5d4SAe07fi4MMg06i04l02m01n00pKqu46TrZsUtSvRx,y,zy;es,ilB;et,h39UlRy;ed4TNi4T7;!e,sR;eRi22Ule,on,y;!au,lRt;iRot;e4n;ke,re;d13Qtr4N7;a3el0ZR;eRl4JLo9;!au,tDz;llRsJ;a7e,on;e2IFi0;n,r,tD;eRl3;li2rD;a,hSil4R3oRs2CYt2EUu4DQ;loNn2LJt;!er,i0;!a01by,co00eWh4DHiVl0on,qu3sRt2v4Q7;aTeSiRo,y;!er,gn4B2t0;!gaQlAt;no,u;e3QIk,to;au,bTcra4VGe,ll,nRs;bRth4X4;a4T7e2BO;er4U6u4CY;ni,vi4T5;do,lGmoQti;ay,e0R0i0;er4K4pe;f,k,me,n6sStR;!e,s49M;!eveO;aVcTdSey,iRni,s1;ng8;aEe4M2o22Iy;er4JRheR;se,t4GR;l4ULyC;aTbSeRion42Gone4RDp4urK;r4NIus;a4SQion4GNur4F1;gnol4OUnRrd;e0I5iSko,oR;!ff,us4QA;!uk;a7et4EZfeLin,koUlRs4AE;eSiR;!nL;ri,tt,v4HC;!s4AA;as,o;n4JBre5;m2n,rR;ba4SDer;a4U0erRge4IAi0l3PWn1on,u0;is,s4KIy;!a4C2dQ4lRsn0uM;an4UNl;c4CdVeSge4IRh4HLi4A5l6riR;gue4OMq4UG;!gh38ErR;iRmoQ;g4UDquG;e,iI;an,beFhSkRlof4IIo,quGr4IY;!e4VVlaQr6;!a7eRfo7i4VEon0EK;!bla4OPcousDfor4LQle443r482st0tRv4GT;e5te;ar00bZeWiSl1WGr5uRy4U4;c2ROtH;chTdSe,l3HSnRss1ta4GP;d491e3FKs4K1ts1;as,e5o4VC;a4CXe5on;nhSrR;ge,ts4JX;eQJim0ym0;!er49Pi4TV;!e,ge;cSdR;!kn3KP;hLk;a19b14c0Pd0Me0If0Fg0Dh0Cj2ll0Bm0An07o05p03qu00sZtVvRxKzz37R;a2PZeRi3FZra9;!n2XNrRs,t;aRin,on,s;!galv4PJt;cSi0o01Zs1tRz24J;er,wa4R1;ey,hRo;!e21Got;s4DIt0w4S8;eSieR;r,z;l4QRt;au,eFl6ol4U3peRr8;a,r;pHrd421uxR;!he3ZWtel4ES;ald9eSfr3UYgRk3;!laQroJuA;ar,haF;beFm0sc3TM;!et,y;et,ouA;a3U0by,gi,l0ouRu43N;ill4LBlA;fRir1ou;a4UCoR;!n4JSu441;ber46TdTl,ndSs48OuR;!to7x;au,e5o;el,l;dSeRgl6s1LY;!au,no4EVo4SXr;ay,eEle;a03c02e,hWkToStRuc4DL;el4TGi0;sJu;eRm2s1;r,tR;s,tL;aTb2SQeSk3lPoRt0;tDux,z;c47Kli2YTrt;n,rdSuR;d,me;e5s4IGv4F3;i4KZk4NT;rRz;d,ry;aUbGeSoR;de5ut;i4G1lli5rR;dy,v4EW;!rd,ut;ch,h;ain295eToSyR;as1mG;!adGdeL;au2APel;a1Db1Bc19d15e14ff,g0Yh0Xi0Qj0Pkl4H9l4RJm0Mn09p07q2CZs01t00uZvWySzR;ab3ZIetD;!es,nR;aSi0oR;!ldL;er47Rl28Wr4IQud;aCeSiRn3CWol;e,ll;ll,r45Q;laQmo4MS;a4MDhi0ti4QY;b4MJcUle4AJne3OGsTtR;er,h0oRre2TT;!uB;eguPl0;hRia,oe;e,ke;aRe2O7oc4RKp47BtuC;c,l4NY;a01co1K6dle4T6e00fr3CJka3WEnXoVsUtTu1A8vSy,zR;et4D8i,o42N;eEoi4NM;i0o8Rsc1SY;h4B4o3D0;!ir,n,uRy0;a7er,f,s,x;eSiR;c24Xe;!re5;au,decotrAur,y;ld,rdKudRy;e414in;eSiRme4FIo2RKpHs37Z;gi,l3EV;n2XAte;an3eanC;cheWdVff2T8h0l419mTnhSs4C9tR;be4Q3m420;aFol018;er,nRshn1BW;e44Ti44T;li4Q3y;!n2BE;auObe4PXel,liM;aVeUiTnRo,uin4HW;a1INe4iR;er,us;mba40Nst4;as,nt,re5;lbu4RDm6n,udP;bs,d3CNk,ls,s,veL;bu3ZMdTekSfo7ik0mR;an,oQ;er,o4N5;en,iIon,y;!he,io,oRte4CL;llAre,u4O7;an243e0BNiRo4RT;f4EPll5;dRliMndo43Prd1um4CHy;e,iMm2;b1Kc1Ed19f18g16h14i11j10k0Zl0Ym0Qn0Ko,p0Fqu0Ern,s0Bt04u02vWwlUyRz0TY;!le,moSnRta;es27Kol27A;!d,ne5r;ey,inR;g,s;aVenTiR;e,oRt4RG;lat4BVn;el,hR;iEor4OF;cl6ry;ch,q4Q3shRt4LF;!aw;cWe3WMhViUli4N0tR;ai,eRh4H6l6;lRw,y;a4MQle;a,er,g2;!weE;lif4E2;cSi4ORlaviciuDmu2C6om,qu3DTsRto30K;!aFn6;al4QXoN;ep4M2i0;aUczy3Resar4JThae4P9iToSpRs1ut;!ar4H7in,l;s38Aza;dD0er,n;g4OJt12T;al4Q9cUdTell14Og469k3nSsRta;h0l497o3YY;ey,ou;!eEh13Cle3LNon;in,oR;n,uF;aXbWeVhar3YIiTkhelaw1mel3OOoSp3sR;deEey,on;l32VnGs;eRr4L7;r,ux;au,r,sa,zLW;au4G0eF;c2E3ge,nausk0W6ut;l4F5st1;e3IKoc3NK;an,ot34Q;a,c4P1dl,l,mSnRs3z4KC;bo4NTey,gu3ZLi0s26Av4BO;b4H9oQ;aRemtul4OGir,v4PV;l,m2rola4NR;aRe4FAl8Wot,ue3SM;in,n,u3ZY;ay,f36Qou,t45LuJ;aUc48ReSfo7iRoms44Gu3X1yk;!g0ss1;au,rRta;!m14P;choH3k4ED;co,e492hViUkSlRo2N3;etDos;e4QAm2oR;r,ws4K2;c4KMne;!a44Tels4EKieB;aTby,eSiRle5oMEu4DEy;de5e;au,r,zanaha4NA;dy,ni0;a0Ee05iSoR;quoc4AYy;beEd1FNg02l00mZnUquetR5rRtH;ck,iSoR;u3YVz;auOn,on;!iUl2nTtR;!aRer4BZo,y;l,s;e4PThiE;aFo;b3MBp2Y3;aQico4CYlRty;an,i4B8;!l6n6;d45Ae1AIheilechipy,ir1FAlYmXnVquej2UArTsRvi3XKzH;d4LOnRsy,t;el,on;cy,e446io417o49NtiRy;er,n3P3;auOe376nRon;ev4AHv4AH;e1PEiC;lAue;ckenbu45CdVil,nTshnoItR;reRtro3JD;fa4L6so4GZ;e,n,tR;i0z;e,laQ;aA4e75f70h6Ii4Ol41o1Mr0Cs0Btolom4ETuUyR;eSke,lGnR;che1e;!f1K2;a4MGbb8c05dd03e36Sf02g01hl3MSj4H9lZnt,pYrWsUtSw0yR;gib4FPpero4OS;elBn4ALtRzi4ML;!hw2;hRka,ti4IN;ee,m2or;ceEdy,enCiRteE;ch,fica490nt1;a4NXil4NZ;ciNfo7g4O4h4AEkRv0;!k380;et,h,l02N;a11Mfi4OS;icRy;om47T;ac4JOcRet,h4J3;a4JNi;ai4MHi3B7zcET;a0Ze0Hi07oXuTyRzyby4MG;dPor,sR;tu1FXun4H2;dh3SKnSssRt0VZ;e,i8;eauRi0;!godm4A9;cZg3i48Hje2kYmh1OUnov0MphAsXtWuUvRw,zy;encSoR;nc4GRst;al,h0;dRff,lx,t;fo4IOl6m2;a3e5o;ofs427s0;ki,op1QN;!acciNe,haz4GOt47J;cZdYeXgWho4IWl4N8mUnToSsRtch03ZveK;c4J5q4MJ;l2VRul;ciMgBse5t38H;aRe5i,o;!rd,ve4LX;e4HBna4HH;st3WIur;ea4NMh49Gmo4;e,ha7;!bi07co06d2e4JRfo417ge05i3IVj2l04mo1GWnZo,sUtTvR;erRilBo4KJ;e5re5t;a,ie4NH;cTe339seStR;!ay3XFi4JK;!au,c;a4K8oR;d,ttK;a3KZderIUeUovTtR;iRov4J7;ce,ss;e5o4K8;ne5v2GW;at,l0;an4AOnt;tt,ur4AN;ns4H7sh;di0g0irPt31Dud,y;ar4JIc23d21e20g1Zh1Yi1Rl1Dm12n0Xo0Vp0Tr0Js0Ht0AuWwUyTzR;d36Fer,naR;ns4FS;e3TSnt0;eRl6;ll,rL;cach3Rdr03get02ill01j00lYnd,pVqu3DYrUssTtRz40G;eRke,re;au,ouatam9;ar4D0e,i464;n3q26Cr2GGti0v2RP;aRe5inHot;eFrR;d3Z8t;et45IiRl3VVos,t1y4HC;n,ot;et,ot;a7ot;!o4LB;et45Di0;!aWc4L4eVhUin,oTrStRv3;er,ho4I5le,s;as4MSel;cn3X1ms4GI;el,i0;et,l,t;gCrt;f464gaDsAtR;i4DVleth3LYma,on;a4JOcZeYi3Z7li0rXtSzR;ad3SC;aUeSiRloIne4IPuga9wiC;er,l4LJ;!laRo4E2r,t;!n4IA;is,l,nt;e27Bi4MC;au,llK;her4ANo;adi4IFeRo3P0ul4DW;!s3GO;lRre,se;e43Bm2;cUd,e4AXis4IBsStRzo;!bri458ch4AUe2X5ikGon2YDus;!aRinA;nt,rt;e499in,y;b00eYiXmUnPoz1pR;a,eSiRonn37O;lii,ni;!ia4FFrt;eRi0;rRt;!e3U4oB;er,nv46T;rRt;an3XZe5le5oy;eFr4FH;a00eZiWjan3VNka,lTnic3ZOoSs1tRuk,yz4DUz3ZS;on,riN;ck,n0EQ;arSeRoI;nd0t;d,o;c3WMn,qu3sRtiIzog4AI;enRse4IU;a,ce;!sol4KJ;k,nTrSsR;eIki;d,i;co,ek,s4F5;gnAlAnVrTssStRv4;ev3hi0i0ou,r23K;an48Het,on2XI;!e4E7iRot,s1;au3UMer,ot;ce5e5teR;!l,t;le,u;n4FHs1;!llh1TWte,ymir4KM;estRl217;o,re;eRke4KZ;!t451;a03eYiWoUuRymaB;ch1mRnket484squell2W7;b49NeRm0;re5te5;c0XNme,of,qu3tkinLuR;a7f47Er4FZ;c1LMn0AIsRtnik4FH;h4D8s1;au,h2iUmTsRtD;hRs9;ek,ke;arAer;ch,ff0;cZgYisXmond1nVqu3sTtSu4DWxt1yRzzot4K7;fo4EXne;!a,r,tL;hy,sR;!an,e;ch3FVe,tR;et,i43Fs;an5Vt4GW;ak9wi3WK;e,i4HCke2QG;a1Jc19d18e0Wg0TjaFke,l0Nm0Ln09o3GKp07quAr05s01tWu4ESvUzR;aSetDzaR;!le,r4H9;nCu;eFinRn3VW;!dr8X;aUcherTe5m2oSre,tRz;!aw475m2s,ui;n,ul;!alB;li0rd;aTh3TOsRz4J8;ar4FEin9oR;nAwotz4DQ;ca4DEn;a3H8eRo3VIroCsoulB;!a4JJs,t,y4;eRia,on,p;!rN;a7cZd0eYgXhaWkVnawa4I4oUsStR;a3YCo;in4FLky,onR;!ne4AA;l,n,te5;h455m2n6;r4GRs;ato4l4NuA;!auOji2l,s,t;hSinR;ce,se;!beIin;coDentRpa4;al,el;aUbr4G0ch0et,gr4J8ie,k3Y0lSoRs1YSt;is,n,tLD;aRe3ITor4F5y;!rd,t;rs4D2tR;os,re;arouSeRn1ou,uA;au3SLlAon;ic4HH;ch,d01g466p00rUsch1SFtRun1SF;e45Sn44MoSrRte,z4F9;acu1AFyz2PI;n,ws4CU;aVc3FKie,n6oUrRs1;eSoR;!ciNt431;je2l1Cpa2S2ux;ni,ti;nun4ACrd;sz3QC;!al4H8im54no46T;ge1oC;aYcXhUkSoRq,t1;r1t1IP;eRfo7l,neE;l,n,riMtt;a7eSl0oR;n,ra,t;!l4GJre5t;ioCol4AV;rRs41Zu48G;d,i39Z;c3CCn39Yt;a04e01iSl1T7oRyB;!c4D5l3sP;lSnRp3SJripp9;e4D3n6;bWiTliRocteDp;beFon,pR;e,on,p3NDs;as,b4CNe,me5on,pRst3;a1SCpRs;aFe3OGin,on,s,y;riIu3PI;lRys6;an,iRps;ng0pp4CH;l31Tm,nSrR;aQon,r9;!eRg,s0CHvobonen3M5;kh43Iuf;aUeSliRun4GI;eg0;ff0ifR;er,f0;ff,hl0;a2Kc2Fd2Ce2Ag29i27je2l1Um1Sn1Gp1Cr0Gs0DtUuTva4GUwadjiwo6NzR;a7eRza;r1t;s,teFvr43R;e06i02on,rUtR;eSiRy;gr310ni3BNt44V;n1NJrs37J;aVell3DRiUoRy4A3;!nSsk47JvR;!it4DP;e,z4B9;!e,l4FFmo2IAn;cRin;cRhuI;ioC;ll4BRon,qu44FtR;bo9cle08DetSgr30Pje2lRot,p4C2;ou9;!i4AX;l407rRt3;kRs10V;a,in;a4AIcSsR;el6l;e,h0;a0Kb4A1c0Id0He0Gh42Mi0Bk08liNm07n06o05rZsWtUuRwiI;c3XDgi4AKsStRz48J;a,el;ie,se49Z;!hR;!u9;hSiR;l40Rng0;iMouJ;aUeTiSoR;nKtDul4EKzU;er,go,n;!auOe,l,t454y;s,uOzR;zi4A7;c4F0de5ff,tD;a,et,in,ot;an31Aigi1;eSiRs;ns,o;rs1tt;aUch1e,gTllSnRs;au,et;a7o;ny,o1GK;l,nd,rd,ud;!i4CFs,y,z3ZN;ig2ri5;eRi3KP;c40Wv46W;l4FWrd,zR;el4E6z3RB;iSl0pRy;er,ia4G6;!e,nR;!-berg1E7;!a01dYe094iXk,m2nUoTroJse4BQtRy;eRlaQon,re;co4CQll;i3MJsw432t;!eSiR;n3UMs1;ll,r,y;co3PSga3X7n,ss1;eRle1VAoI;lt1rRxt0;!ga4CI;nt,s3TR;bRonta9;e447ro1P1;a02bo9c00eZiYk6lTne46BoStRu3Z5;on,z0;!is,qu3sJw;!an42UeSiRo4FBs;c3QOg4B8zza4C5;fSgrin1Q8r44OtRy;ier1GDrA;ig4DX;c2ss2M5;!ck,g4B3ponj3P5r3tD;a4BJhR;at,er;de5n44Jt1;ff0llex,rR;ei4BDotD;e4EDgPn1Q1orra41Euy;blGl,rRte41Y;!al3K6s;dPeRic,neau44Do,ro3YNthoM;m428n30VrR;s352zaN;aUcarre4hSkRlAorKq35Jry;!a42Nh40M;e,iR;e,na;r3T3u3F0;bo3EZcUds1k,n,rSse,t,uR;!dem0SM;ce,sRth;aEe,on;hy,oI;ar32b1c2Ud2Rest3MOffn6g2Oh2Ni2Ik2Gl24m22n1Po1Op1Kqu1Hr0Vs0Gt05uYvWwVx,ySzR;!et3YWzi;a484eSf0m0ne,otDr45EsR;an,se;!me482r,t,ur;lasz0Q3s6;a34CeDZiRlo0QMoC;e,ot;ke4EMlSne,r3s,tRzeK;ch,o4CN;et,h467iTmi0oSsRyh;hCIon;!vi4AO;!nR;!g,o;a00chZeYiWno49MoVrTtRurHz3SI;eRis1on,yn;e,n,rs1s1;a1IOiRon,y;ar49Ag2EB;iCla;enRn,s2PS;ce,t;!hvi4ARl3X5nau49E;!e0ZAin;fPk3XF;c04e03h02l6quYsUtRzt;e3YIoRu4A9;!rR;el,i45O;arTeRilBut;l0AErRt;ie4DN;d,el4BV;aSiR;er,no;lRr3OX;!et4CU;b6ek,l6;k,t4CS;au,he,os,ua;!a0Ac09d07e05fi4DPi01kYmWnVo40XrTsStRzyI;!en4A0he26Sl4ABo0CJs49U;er,hl6i,l4AAonLy;!a43Aen376oRy;t,w;eEi0;eRi0;n2Y6r;erlabShRi4AVm2s;iEur4A5;onD;l4CHsSzR;e46Co;eRh,i0WZ;!e,l4B5;!kh,ma46MntRro2MFtDz;!e468;!eRi3N6;!lD4n;el,ks;be44Gd1BOsRy4;ch3TCkev447;ay,eRin;l3re5tR;!/lava40Fe,te;aSendr1QWiRp47Qroc46Ty;cc46Qll16Tn3P8;domanolRl4BWtPy4zi2;ak9;l0QEnK;a02cat2FAd01eZfi4ATgYiWkraVlo,nSquAse48XtalonRz1;e,o40U;eRit3WWon;au,ll,tR;i0on,ti;c,tz;ch,sR;!en47H;aeFm2;s,tR;!t1ZV;elAiNke;d9gap3EOroN;br3OLpR;al1in;a00c2T9diMeeJfr6iYlWmToSuR;!ch1d3VR;c43Vmi45Ws;aSiRo1F1;e48Wtes475;riNt0;!asRi4BF;!c460;jt2NGnRot3WB;!s460;dy,iRn480rdy,sJ;n,sy;eRik2ka49Y;nh3XMr;e45DllSnRvo;!c27Ze,t0;aSeRon;!re5ur;rd,t;in,k,ng;aNeSliaRno2UVu3;!ru49T;au,l,r,s,t3UE;haSoRu4AWyku49N;is,ka;is3PQ;!au2LYciWe3EShTiSkRre5;a7wo3ZZ;fi46Noret3XU;eSoR;lcz3J4t;!t4B8;!oR;la,ne;!sa0ZT;a2Tb2Jc2Fd26e25f23g20h1Visel1Uk1Pl1Fm1An17o15p14quorm8r0Ns0Ct07uUverTwe49UzR;anRel6o4B5ro49X;iIne,o;eQmu46S;a00dZeXiVlUn9rTtRvFUzil2NA;chiouani47IeRh1BRz8;l461y1DZ;ipehenemiIs3;im4AIt1;koue451lRmAn1XCtiL5;emKle46X;badinCCchipichi0I9lRntou8stuoro0JZ;!l3M;aFerki361in,ry;baRcantG9di49Ggadoug4ANkipakino49IouagC9re5t2GQ;nRrt;aPXo9;aTes,ienkwaronNoolKsRtm2z2VF;en3ZPiniR;ag1;!jawadjiwaR;nokED;a46Pb00go3Z5haughness1KVl0or44MselAtSuRwaO;ll0HSnkhirhC;aXerWiUrR;aSoR;!ut,walk0;nd0ut;gRl3FNn;ny,uy;!m2o494;fic276sh3GG;o2Y0u3HX;a06b2c05d03e02fan0D0h0H1iZlYman3AKoXpWrVsUtSv9weEyR;an,l6;eRon;ga,n41Y;a48Ee3GZiNo3M3;!enm0B2iE;en,h3V9;o1JOs,ur1JOy;ea48Pos3OBy;chefSllRo2RZ;at,i1;q478s3O8;e3WUfi464g2il3F6ste3V8;e,oR;n44Gw48V;e5ha7u4A5;ll,m,nt;deka3PUie,or494p8r6;i,stR;er48Hhuiz8;chawiaMdSeRio48Dlina350o,raAsl46Nwani33V;il09Xl;ar29Uoy0;aTeSiR;ccio47Us;a45Xry;it4lRra;by,l154;aXdersk0SIeWiUli0mTnSougJOsR;c12Ren,on,s1t49U;ey,ho454;o,s3OH;g448vR;ei45Pie467;a46SniI;fSiR;zo47E;lam459s1;eUiSoRre44Bumu45K;!no49H;ll,mR;akCW;e3W0s1;et,le;aSeRle,ma43Sna46Oo45E;ar1UDir;ll2LMnlSrR;a,e,ra;ey,on;aSd8i35Kle3L8o3GHrR;a396ea396;a7wa;arr30IfR;e3GDr2MM;miMsterrei458ttiM;aYd8eXiWjiVoSrRstrc41Zwy0;us3MZ;ar44FnRwd;!i,neEoR;gh47Cugh47C;bw3VYck;et,l1;l3nwa3H3sJt;ir,ms,y;aTchione3UWhSonnRte5;el3NDorL;a,ol3J2riM;in,lla132;aZeXiWl14Dmi2PNoUrTs1TRuSyR;ma3ICrC;ch1mTs;ea38Li8;mRrC;saw3;d3FZs2K1;an,irCrRso;holz0m2;ma,rs40X;k47Ss3UR;a2Od2Ne1Pg1Oh1J4i0Zkye44Xo00twZuSyR;be45Rm2s1M4t40Uu46A;bVckBer,gUir3X1l3UHmai2R0nTrSs,tR;brown,e,t0QS;i,se,y;an,e40T;e41JuA;er,ouR;rgG;al462;adGb0Mf0Lg3PJi0Il0FmiCn0Eon2r08se07t05u00vWwTyR;eRon;l21Js;aSeElRosie1VMta3NY;an,es;k,ll;a2EDeSic41QoR;s47Ztn6;cRl46Y;os3LT;iDl2rSte,viR;ll1on;cy,ie,rRse,y;iRy;!ce;m2ru3HTsu4tR;aw3UPe;da,w2GY;ay,bu44RcVdUe5f3EEgr8ie3X9mandTqu3GIr9tSum,v47NwR;ay,id,o3VU;h6on;!au,e5in;i0SLo42V;hAu47G;a3ZXs45U;d,eSiRs;b0KHn;sLt;ls,rSseR;tDux;et,on;fsi44Rl3G5;eSleR;m2sJ;c3KJrt;a0O6c07diMe03g01jhu9ke467l00mYnXoWpissiMqu3G1ro,sUtTvRwi2O3;a7eR;ns,rv3S2;aouigui0E5elAko3P6schkP;bAen,hiR;ka46Mmu431;f,rt;et,te5;ch1N2eRs;ck,ns;eLlo,ss1;en,hRro;!tengaB;dTlSmRs8;ec,i;!liNs2WM;er0iMziels3Z6;a3NYhWkUlToR;dRlet3YI;!e43E;as,etD;eRn0s;lb3ZNrs1;iRolet3KO;lo,p3PT;!uess2;a0Nd0Le0Jf0Ig0Fi0Cj1UDl0Bm09n08p06r05s03t02u01vYwTx0ySzR;a3Q2ol;!laQs33K;bTcoSeEhaEmRsh3RU;an,ei45F;mbKw8;erRo3EHu43Ey;gh0ry;eSiRry;e427ns;l3PGns,s,u3SE;fe3ECha3XQm3HPv3R3;herc44Ji0;bi461imi3M9le,tR;or,ruI;a44Gbon,e,on,s38Qva45O;hRpBt1;ew,in;diIes,qu3;acheIeRirovs3JU;c3BOy,z;li1HJty;dSlRm2s2GO;an,es,l,on,s1y;er3JT;li,rR;eRi;!t0FU;f,osJ;b,dRf3X8se;er,h3R3;ao,do,e5ilen3Y1jelkRo;ov3LT;gBle,ry;ambu3Z9ejuru;b0Wc0Vd0Segel41Sf0Rg0LhBi2SUj0Kk0Hll0Gn0Cp0Aqu3r06s03tZuUvSyd3LNzR;a3TEie,za41Y;arr3NReRi1rat3YB;au,l,r3OW;dTgSlRry;le5t;ht1l0;et,lamR;ont01M;ha,iSsi3TLtR;e,re305;ana42YonR;a42Xs;mi427on,r,sR;e5iR;f,ve412;b1HVcTdSeRva3Z9;au,th;achieNel42V;isJy;eFiRo42Tp0;chis436er;aTdSgreavGiNny,tR;a9el;e3L5y;im0;!ay;aSoR;g3U8ta;ji30Zmu40Oshi30Z;da,em;aTeRle,ra,y;nRotD;ga417;jSnt,sR;e,ua;oa;fi2rech43Y;al3SLeRkrynech3YXon,re5;auRre5;!par1D8;h43Uke;eRki;l425s;aEXc9Je78i56jol55lynars3I6o10r0Ysadoqu0GYuUyR\xFC24D;c,e3QTke,lSn0rRsk28Ct36B;!aQe3FS;er,o7;c0Rd0Qe0Ogner3YHh2i0Nji3WVkangar0V6l09mm3M5n05r01sVtTzR\xF10TQ;eRz6;raEt;chRtaF;!mo4;!cVe,g2IGiUsStaRulina3Q2;ik9ng,rd;elRiNo2D4;m2y;al,ej0F8;ar3EW;aTchi1ODdoc0QAl6ph6rStR;ha,on,y;ay,eEi3FD;ka1ROt3N1;a2KFc6dTeSg0i3ZUkHnRoz,ro,s6tea3CP;!in2APo3ZT;co,s;en,vi23R;ai4ca03d01e00hYi0ke3AWlToSron6vR;an3Y3e3KGi3KG;in,t,u3;aTeSiRo9;g2nL;aC6n,r,tt;h6n6rRv6;d,ey,k1DD;aEer1XPolR;aQlaQ;!a33AyC;erRo1;!ic;h1D7ir,s3H6;!r,se;ll0nR;i3ZAzen2IA;dBry;cShRkB;e15Pmo4;h3N2i2YV;az,oR;ch38St38S;a3Ub3Tc3Rd404e3Qff3RNg3Ph3Oi3Mk3Ll3Fm3Cn1Oo1Lq1Ir0Ks0Et0AuUwTxh3OGyRzaF;a7e2Q9l0D1nRse;at,et,ih2;at3Q2ic3WNry;cAd3NQe05flAge3X7ha3ZUill04l02nZrWsTtRvi0z3XJ;oRrP;n,u;!avi,ne3J4sRt3;arzHeRi1NR;au,t3L8u;a3VZeSiRouze5s3;ck,er;je5tDy,z;i0s6tR;!aRbatt8fo7;in,k9;a3ZEbe5in,tRun;on,z;a7e1U7ier3R5;l3NBt;aTeSha7in,tR;!asl3YVe3PKus;nbo34Kre;!rd,y;cVeUh0i3YFkal3IHl6sR;!arSeRi1DQ;au,r,tDy;abBd;l1C5r;a415io,ov9;a0Ibe3SPc0Hd0Ge0Bg08i03jHVl1mAnYoXpaWrSse,tRv1L5;ense2VWloIon;a3VJiSoR;gh,ni,w;ce,e3IFll,ng,sR;!ey,s1BY;in,w;!ne,ra,t;ay,eSiR;!ak,er;auRt,x;!tardR;if;ar3NWc,eL9g3ZSll3Q3nTssR;eRon0R1se5;au,t,y;!eRv3MN;!au,z;antiNeRue;nRse;ste38Vtal0;au,i3XKlSnRst,t3LLy;cy,o,z;!aSlR;e,i,o;nd,t3TJ;a3UPe5;el,om;!bi40CcViUlTnSrd,sJuOzR;a3zi;d3IYge,o,v3M9;!es;ll1s;e,he,y;t418uR;etDiR;ll1n;d,n6rStRy,za;oo,z;c3FFe,he413s;a1Bb1Fc1Ad15e14fi3NHg10i0Zjo0Yk0Xm0Un0To0Sp0Qr0Ps0OtSvRzer3EU;iHois3;a0Gb0Ec0De05f04g02i00lZmWo3ZXpUrRsi1v3LXz;eSoR;usJy;au,t,u3TS;as,eRl0L;lN8t3OPz3PI;aRi3VBoren2QE;rRye3L5;gu39MquA;e,oI;!g3V7l3YHmi3V7ni,on,zR;am35L;oRra3;me3XQ;er254i3N1leu3XPort3OW;fXiVlUmiTnSrrosoli2WVsR;!a3TZ;a3WMbe5u;gl3U6;!e1;lRro,th;!hA;err1BRorD;a2ICouF;le5rR;iaQousso3RVun;bVgSl1mb3QTna3MBrRub2;r3UWy;a3TNnRue;aRe,on;c,isK;auOeFoC;!al3SXc3YDeiSV;en2PNou3PR;el3JUlR;ais3NY;gh2tu3A9;an6i2KJ;a0CeRi3UF;a,lRsn3SS;li2;!a,m2s;ly,ueD;e194gou3FOh2n,q3QWsJz;eRin,le,ne,ra3;aSnRon,r;a9e5;nt,u;rt,s2K9t3I5y;aUeSiRoVHy;ck,n3H8on,sk;a3Z7lRrP;et,l3RS;!in,t;a3U6ha3F6i0RDz36X;co,gh2h2k3OZrq3XTstRt;!eR;!sJ;bRe2KFy;le5ouR;rqu386;!a3W5by,dov2e2AMgViSlRo3TSs1t,w3MA;!eFYi3XKo2KB;nRra,usG;!a0NXeRic3RV;l3X2t;at,o3V5;ni,re0NN;nRs364tP;a7e5sonn3KT;an,r;an,g,l3XW;ck3WVlBnLrm2u3LM;h1kR;eEle3G0;er33Slo;kl6l3WRn;ne2TS;a1Rc1Id1Ge1Dg16h15k13l0Qm0On0Do0Bquel3N4r05sYtRus,v3JRze3UT;chel25IeUko,rStR;le2DVon;essKoR;n,v3EYw;au,ouamR;igR;ou05O;cWerVhUiuTl3LLsStRu3UL;as2L7r3ET;ia3RZon,ut3QG;k,rs3S9;io,ou;a3SYe4icord3XC;h3XXiosc3XB;aTeSij2PTj2PTmo3ROonR;!c1UVd378;!auO;bSmbe5ndR;adac1VOe37Y;el3X5in;r,tR;!t3GJ;a00chi0IZdn1eZgWiUja3RXkTnSoRs6ty,v3J4;!po3W1s,t3XQ;eMSon;e,l0;!a3RTch2PHer,gRnN;o22Tut3PG;aSne2SYo13QuR;e3L5s,y;ce,nt,uO;au37Ah2r,tD;co3UEdi3VSrd;aReaOms;nd4ux;a01b00deZe1TOh31SiYj31Ak18SlTmo4ne3EWoR;nUJrd,tR;!e,te;!aUeThol272iSmo4oRr2B7s;ir,n,tD;a7er,g2k8n337ot,quA;n,t3KT;i4r3MQ;!ar,ken396sJ;beu4n2CO;ou34Tran3W1u34T;i4nRrd;ge,i;aRl9ul9;e1SIlin3S3;ai28Khail3VG;a3EMeWnRo3X0rAu19F;aTeRi0o2XR;au36OrR;!aQet,on;cRrd,ut;!ca;l,n1on;cieli3PWlSrRs8;t1FQzge2E2;e0JKke;dRki3SF;elmi2S0l3QU;hSkHlAm36XoR;l3SDn3SU;aTeRie,na,on;au,lRn0;an3S2et,i2QPl,o3GKs;eTlSm,uR;d1IXv3HTx;ik,s3QLuk;i31Pls2MO;dai3SSsnik023;a1Wc1Sd1Pe1Mg1Lh1Ji1Hj3VNko2SJl17m15n0Xph3I8r0Gs07tXuVv3HPwi3WPyTzR;eRie4ou,vi0SH;i,r3JP;!er,nR;er,i218;l1HYni0rRse;et,in,s,y;aYcalfKe3J7hWiVot,rTs3ONtSzR;!alabanle3TMl0;ay,he,le2SA;aRoz,u;ilBs;l31Bv262;eRl0ot,v8;!e,ny;ilBkabRl1ZFy3AD;we;an3S2gouigui2Q3iIki8l3n2F6p27JsTtRu4zar3OD;as,o3GMrR;an,e5;!aUeSiRut;!erKn3DT;ly,rR;!vi0;gRn3GTou3T2;er,ui0;a05c01di20Me00iYjacXkWlUmoi348oTp3E1rRy,z;etDiRym2;l,t3J5;!ukiouetamAGz;et,oR;i,t;el,le;quG;auOc,dPenCgd8nRv3UPz3N8;!e5uk;co1H7na,t3E9;!aTerSiRkh,o08Au4;er,l3EL;!e5on;di0n3FO;li37SnRt,ud,y;!de,g0;aXdVeUg0R3iTnSoc3TUra3SNtRut,zi2KZ;er,ha,on;es1ie;c08Xe2ISng0;au,c3F9ss,t3JDu;ay,e3NYh3GWoRresho3RF;la,za;ci0ge3CGn2OVrd3M8;bRet3J9;ra7;aYchi1SNdr3JWeXfi,gGhaFiWlTn0oRt1v3G8z0;cUQnRt;g,i;!a267iSmiCoR;!r,ws,y;er,lo,sh;er,n,ot,s,ta;!dy;dy,nRv8ys;c1s1;di3SHer,gs,lRn3RLst0;ke,le3FC;aRou3PMta;f3UDn;a,his0P9in,l3q1E4re;h2ks,rRse;sRt;!s3NX;a7eir3MViSl0ovR;a29Xi3QV;eu,na;c3FKhRr37Bte5;e,iR;n,pouR;eo34G;dTgh0h2l6rSsRut;a32Bor;!ce,es,s;!e,oR;rs,ws;.douCMa4Ub4Pc3Jd39e30f2Ug23h1Zi1Sk19l12m0Qn0Ip0Dqu07r04s02tYvUwR;ay,hiSiR;de,lliamLnn6;nnPrt0;eTiR;cRttP;ar,kP;i3COy;aTeSiRomn6;ern2g3SK;ar,er,rn2;ggaFvi3A1;hRkimmiMween313;a2RNer3R7;a2QKea2U0it1H4oR;bRrPy;bPeF;aUeTiRo31;lRnn;an,k3l1CX;e3OEst8;de,id,rR;rPt38V;aTe319hR;a3MOeB4ilR;ip33Uli33U;rRt3MH;laQt231;aWeUiSoRul3FS;ld,wn;cRd0;ho3G1oE;al,iRletc3RU;ce,l383;b,ir,ll1FYmRug22By;a3PHee;aYeek3iWoTuR;llRrr3GF;e2GPin;nSrR;iCr31Z;igB;llRtc0RH;an,en,i1;h309nSrtRst0;hy,in;!aRh3MAim2us;m1ra;aUeSi390oRu4;ed,ug2X;aRi38Yll3C4mo4nn2od;n,ry;ch3inKrSuRw;c2GPghl23G;en,n1;a08e00iTn2I5oSr3AXutRy;ch8;ne,y;bb3eWllUm1ZKnRr2SSsso0DWv0;ley/mckeSnR;e2EMon;nl6;iRop;c2p;!rn2;aXe34MlVnUoTrcRty;hRk0;ar,er;gh,nKwn;!d3PNn12Hs6ty,v8;l3RPvR;ey,ie;chPge;i39Ble,niIy;lWnSsRv0;a329er;aEd3E7eTn051tR;ee,i4oRy4;mn6sh;ly,rn6;larg6moyBw3KZ;aSeRu3AM;e,n3PA;le,rR;dy,g;a0De0Ci04l02oYrVuR;ck3iSlR;flPph3;g2nRre;!ne2MX;aSeR;e0Mg3B8;dy,il,th,wn;ld3KMnTog2uSve2Z5wR;an,en,n;gh,n;agBeg3RSig3RSnig3RS;ash2oRy3M5;ne,ry;bb1lSnn1OErr,vR;e2YYn6;lSvrR;ay,ey;!eTiRve3OP;cudRs,vr3EK;dy,y;s,v6;a3OLeG5o3NLtt3K8;ffig2lTnn,rrR;!iRy;gBty;e,li18I;aSerR;laQn;dd8gh2ll,rRul;lRq12B;anRiM;d,e;achYlTnSrRv24Nw1A6;n,vaB;r3CZv8;en6gu3LHhTligo3R1rRva3O7;eaRoy;vy;aRer2;lt1ny;er2YPr2;aYeWoRu3M9;nTugalSwR;aEeE;!d,l;a2Z0nRou398;eEou397;armo3QPrmRvi3QP;id,ot3DW;niHvR;id;a0Jhal1ZZl08oZrWuR;a3FTe,llSmb0n2IEr1FWsk2AWtchR;e1on;ey,oR;ck,uR;ch,gh;aSeaRim1o3NLystP;dy,ry,th;ck8e,nk,ry,w,y;lXmWnUol,rRuFw19Ey;by,d,is3ATkiEl6mR;aRiI;ck,rI;e,nRv3B8;a1DBeE;b,e5;lRm2;!am,ou38Lum;aYeViUoTuRy2PN;re,skR;ey,i;sk100ud,we3N6;chKntoIsh;aSd1ll392mRod;a3OAe3J9;f,n;naSsk3ugRy;hl3;ch2;an,beKdd8ff01h00i36QlXmWnVrTskiEuRw;ghRl2WSsl3;an,r174;ey,go,rRt2MIvi1AF;a3J4eEiIo1Z3y;!dle2KNn;br3ANl6;h3E9lR;!iR;on,st0;an,e3MO;erRr6;ty,y;a3eTrRurn6;ear3BKiR;de,en;aRou37Tth;n,th;dZlXnWrVsUtee36FuSvR;en3NOoy;ch3lR;ey,if3BT;kiEs1RL;dHth39K;al2U2drewLee3JOg3GR;eRli3O8;ar,er,n6;am,dam;!a7Hb7Gc6Ad62e61ff3IZg5Ph5Ii58j55k52l4Am49n3Bouensao2YWp3AquAr1Ks15t0Ju07v06wn,xf2VTy02zR;eZia3K6oXraaNuUzR;aSeRoc39V;o,rOU;!n3M8reJ;rRz2;!eR;au,k,t37D;cRu0;hi,ie;l3MKrR;e2WZolB;diEeShRke3FXn1DNo2YEraQsh36Qv39O;ew,ue;nRrLt376;ce,o37O;es,ilBor,r3FN;c01d00fYgUn18Dp3J9rSsRvi3JQ;e,si1;a3KDeRi37Io1YO;!lKr;a7eThSis,rRue;as,ot;am,m0;nAr,t;etDiR;ls,n;e4ou;ai4e3KSie3KSla3C8;a0Bc09e08h04i02o01sZtSurRz34F;a,o,y;aWeVhTiRo2VYs1;cRi,s1;e,ks;eRon,ys;!rs,ws;!au,l,nc377ws;r3D5s,wasUL;en,on,uR;mo3MYo;n,ot,s,u;f3CLgn1nRv3CL;i0s1;a,eTis1oSs,uRy;r3s1;n373t;rs,s1ws;jc340r2JV;hRlo33W;e3NNiouagkiou3CD;gCmekw2nakin2raz3EYs3IF;adacn3FQc03e2CKi,k02lan3G3sWtRu3BKyn2ZB;a,erUiCon,rR;anSia3H1oRu3LC;gi1NHi1NIvi3MJ;dr305gH;j0VCs3BT;aVeSiRo374ue;a,cot,eJBl1n08Vot;!lSrR;ma3HSon;!e5in;i1NGl,r3D7y0;ale3LQegoC;iRla3MXo3MB;ot3MUt35Y;!a1EbBc0Wd0Ue0Rg0Ni0Ek0Bl0Am08n6o06que05r03sXtTuRveEw09Fx2ZFzi0;ca,lRm;an3HVlo;bBeTiRol3GUta3KXy2UK;al,cot212mbe22KnR;be5e2VBho,i,o,pel1WFs3BE;au,l31Mn,r,s;aVchin1TFd8eUhTiSm2oRt2CW;lAn,t,uiC;co,le;!all1DI;au,ilBreau,t;c,n;!a2WUeLin,oR;ll3H6t3LT;s,t,z;b3ANis,nRrt,tDv1Y1ws3GJ;ey,taB;auDeRotD;au,n,t357;e17LiMow;e2J5l6oSs,us1wR;eEiI;p3ENv32U;aYcic35PeWgVll2WGnToRss3MK;nRt36K;el,nel;ac35MeRg,i0koY4o3HT;au,l3KC;ny,o2UM;n,rR;!oJ;ge,no,uch5;aCeli327oTuerR;a3M8iR;e,t3AX;leJnC;cSnRsKttK;g0t2V1;!h3M5;eRi3JL;g2ll;a07e05hWiVl392oSuR;cci3CWr3IC;glSll390n3IBtDuR;i1M3x;ieJ;ch1Q1er,l34Tn1SB;aYeTiSs2X0uR;k,s;!ld1o3ICt3KT;!r3sTtR;!eR;au,r4;!i,sR;auOe3C9;is,l,nd;lRno,re5t;a9l32Z;di0n1BDureB;gh,is,nRs,ud;dYSg0o,za3EZ;lGp;a0Nc0Jd0Ge0Efe,g0Di08j07k06l6n02o01sWtTuSwarr8zR;!a3EWerLBo;by,ri;eSha,iRo2WZ;ni,on;ll,nA;eUf2S2iSourR;!i2;!on,skR;oueo3JL;!au,ll;r,ve2Q2;aEerR7iRu34A;e,gh2nRon;gRo;!ha2ST;ivHs;e5i;b3KZc2N6gaUs0MYtR;ouRta;aRko3JA;kiRY;n,uO;an0VGin,ui2;e2PPg4rR;!a,s;a34EeRi3E7lek3HCr2XDzi30X;lRrs,v35O;!et,ko;eThSin3CXoRus18O;!tH;a3DWon;au,bo,l39B;hi,ig4;aNe27Umad3IL;!a0Eb0Cchel0Bdem2FCe09f369gu08h07i03ko,lXmWoUpaFrTtSzR;ac,oC;a9eJ;a3ic;is,n6sJtt,uR;f,in;as,s0Y2;aVeTiSoR;!n,t,y,z3BP;er,ns1;au,n,rLtRy;!er4t;is,nd3rd;d33GgTnSsRz3J1;h,s1;!e,gPo326;a,u343;erbeLi3EDot3G1;erA;au,dy,n2O2pRstro37Ut3IYy,za;ar39T;osJ;e3G2oR;euf,uf;bor3ELiTkSnc1GCrRt24Av1XBy;d,t4;et,os;re,s1;aRi0Q1l0o31Tsa;n3EErRtwiniN;a2T8i3BR;ch0da0X3eSoR;c3BYre;au,r,ur;c3HUd3CTe367gZllXnWoraVr,sStRzi1PW;ay,r3B2;!ch,onR;nRv34F;at,eu3CA;ma,no;d251el3H6frAg3AIonCv34C;ar398e36JoRy;t,ux;a,rA;aVeUjouTl38HoRur3yA;nRod;!e37Yy;bi;au,r,u;f3ILir,ne,rR;!as;a00e0A6gYiXl1H2nUoTr3DRuRwo37B;ahw3EFeRi4y;!t,ur;n,on,sJya;aSeRi0o,y;!ss1;!c,n363rd;ll,n,s;iRs;ni,o;in,s,uR;lt,rn;da,lk,rte3H2;dWeVgUiTo0ACrRs8u0RZ;aRy;c,n,s;c,g2;e3IKin;i3ELr2F3;e8oRry;c0UGn;a0Tbe3FLc0Pd0Le0Ifa0Gg0Eh0Bi08k01lZmXnWoVpheUquarrPrRswe8tavi2YE;a27GeSoR;b2KUusJ;!a08U;e,rs1;mb0n;ama3ECes,id0;aRi0FLuO7;h8st0;augl3eRin,o3EQ;an,nn2od;aWeViTnR;aDeR;ss,y;eRll39Rngn6;!w3GQ;ig2lm2n346y;na312ro39My;!nRsa2RWv0;n9tR;o2XUy4;aSeRi3ADo300u3AN;goCt;beKdo,n,rd;ilRrav6;li0YYvr34T;dRrlaC;d8en;!aSlRro3FIv1V7w8y;a9m2;ch8rche2OY;oSuR;ff,nn;n2ZZuR;gaE;aThSiRosh330ua36Q;as,ni;esn6ia;ll362roC;ilBjo3H2lSme5rt,uR;d,l6;em,piC;e,ilBrian377;lo3DHs;.tou1D1a93e3Th3Ni2Pjung1JKlore3FLo0NuVyR;!de2YCg3DBmTnSonRs26HtB;!na9s;ch,d,e2C5g,h32Oo3H5;an,burn0;!b0Hc0Cd0Be0Ag09i,j2k08l07m05n01o00pi8r2H5sWtUvisot3G4xTzR;iRzo;nc2UF;!fo7;a3EBes,fy,ge3FChRi,z;ar3FIi0;iSk,sR;!ac,e5i0on;er,gnanRne5;!i,t;!ma3EN;!a2OLdSeRg31Pn;au,ge3A3;!erRy;s,v31P;bRi2IQsd8;eFsd8;l,o3C0;a3CRem2in;a3EXon,u8;b2ZMsch3D6;fo7ri19K;aSKcTeSh2NZiRkenuIos,sansz2UG;enCw;!ro,y;he3EBiR;o3E7sa39V;be331ke,ra39U;b1Qc1Ld1Ke1Ifgr8g1Hh1Gi1Ej2Q0k1Dl306m1Bn14o13p10quAr0Ms0Jt0Hu04vZwVyTzR;!eRo2RX;au,lBns3A2;eRsH;l3FAr;d8eSlGrRth0;ey1MXy;nRrys1s;be3DIg0;eRgr8;j1TKlRr312tt;aSeRl;ss,tt;dy,nd;b02d1et2YHg00iWkEVpVren3AWsUtTvR;!aFe1XKiRo9;a3FKon;ho344re,s3C0;c3E5ta2HV;e,rA;n,sR;eSmAseR;!i3A7;i3A6lB;ee,hR;er31She3C5l3r8;eR5i0out3;bin353hs,i0m2orCtRz;i1Y8r30K;chia3A6hSi0li0sRts1QQ;a2YXon;aw,uk;a02dkipanid39XeZgYiWmand32NquArTtRus2YV;a,iR;e,t3BJ;aSeRi1;!n34QtD;in,ng0;aRe5mi0on;t,uO;e,ue3D;!au,in,nRt;c2REg0t2UFzR;!a3CGiN;nRzo;ge2W7t;e37MpRres2Z4;e,iR;e,n39D;!by,d,f,m9n,tm2;cKOdo,eWgRmo,sw31Z;a3AJbUchaTdaBeSie,mo4o,p4sho4t3ueRv3EY;ep34Gp34Gsp34Gv2ZV;!u31Ww31W;mpLp;ott2H1;derg2rg2y;an,baRet3DRme,p4;!rd0PD;e,ie2QW;gn1ne5sRze5;e7Ny;andGren2QT;hr2ie,oc38Due;ffl0hm2v8wenR;!th3EK;er,rio2XU;asUey,hAkR;e28ZhSqueEwR;eEo32O;aFe3EG;!t30G;b,inoR;is,wi3AG;!a0Nb0Jc0He0Fg0Eh3DTl0Bm09n02o17Dp00rZsYtUu,vRx6z39A;ernoSinR;e1TFg0OF;c3CIis;aliTch36AowStleRw3;cr3ARf2KXmo4r;sk342;a37Ken;ec37Ulo9se,te0KC;etDl1CH;a3AJm2peR;!au,ns;arGcWdTen1T3gSks,n,sRt07R;e2PXl6;enfe31NlA;au,be3B9eSfo30Jho1VWle32Mo,sR;l6tr2G2;!ck0m2n,rm2;e027h,ouF;!a,be,m0oR;gGn,us3;es,lRo9;e,iRym2;o3DMs;htbo2DLn2A5oDF;bRge,m1SQna7rc2QYto,uv3ve3BX;eFr0RF;htRie3D7k0;en1FTy;erSoRre;ir1tD;aRdy,ge,s2tK;le,to4;rd,sJudA;arr327eTirond1Z0oSuilR;i0li0;m38Zpit3DBst34U;rRu36G;auObi0e144miR;ne,te;a4Vb4Dc3Xd3Se3Rf3Gg30h2Vi2Pj2Ol2Jm20n1Qo1Op1Aqu1G3r14s0Ft04u02vUwTyR;!boRro1DZ;urC;!ando2V7ic36V;aWeUiTrRys;a7eRon,y;au2MEr;c2YRne,s,t4;auOilBly,nshul38NrRsq2UDy,zu;!d1OWri0s,t;c2X1do3CKig0CTll32GnRq3BAs47;gPi0;pr0QPrR;at,o2BUs,y;aYeWhie1RQk35XoTrStRu3CTw36U;!e2ZFo4re;en,ot3V;cq,nd3CQuR;ne5rneRsJze;au,u1YT;au,l2WGmp2WGnd4sRtu;si0tu;in,ll1NUng,rR;dRt1B2;!if;a0Dc07di06e02he,ie01na00oZpXqu30GsUtSuRzc1T9;e2WUir;aRe,ringa35Q;ge,ng;ar329eSie2WRoR;niNr,u7;rt,y;a2Q3eR;r2PPs;t,u7;k,y;ge,ur;el0XIiSl0XIneR;ch3C5r2M1;gRze;le,ne2WG;de2WFll0;aUel0XDoR;mSp,rCt,uR;arn1N8ren30N;!bK;biAd2TFno,rRt4;!be1RCd4;ff4ge,i355rd,uR;l39Ute2W7x;a1VKe38Ghe,iUn1GEoR;!s2PJuRy0;ge,x,zR;es,ic;cRg0;he,o1AX;a02e01iZoWpVrSt2LXuR;il,t;eSiRoh1;e2VXn37E;!st4ux,vo386;e,in8;ch356itSre,uR;pAtrH;i0tev3;cRle2VRnKp362re,s1MVt4;i0q;au,lBrKsa34Mt2Z7;g28ViRn,pe,rc,u2M0;l0WMn;dHnR;e,g1HYh25PtiC;arduz32McZdYeXfWgVin,nUoTsStRw2Y7z;!oc33Iz;eigCy;ble2YAir,r2MLuvH;!ev2W1on;!h2;a34Bes2X5;d18Rn,uf,v1FLy;a,en,r2ZL;h,l32J;a04b03eZiXmWoSp,riJuRza371;re,s1N3;iSnRth30Eu0W7y8;dKe,i0ni0tre0;!gn2nR;e,g;el3o;eRre;n,rKux;d1LXil0W0l3nTqu3rSsRud1LXvH;le,u2YK;ci0di,e2P6iJle,re,y;ne,s,t1LUu;e394o;!ge,iUle,nTrSsRu4y;s1t0;b4ch2DCi0qu2PX;!quA;re,t4;aTiSoR;c38Nng,tDup;be5ev4;boure2UOi2ENnRr363;!da9;ambBeuCo2UMu361;bHnUsTtR;hRo2IE;!am;chn0hm2;enwRst0;eb0;ap292eu2WAm2LMnUouTtSuR;guA;o,u37S;il2TSx;!e2R1i;a03e01g,na7oZrTuR;ay,eRilBy2Y7;da7r2XSs1UH;aUeTis,oR;s,uRve,w;lx,x;sl6w;in,ndRs;!e2U2;ff,ix,uRvy;be,es,f2W7;n14OrR;!e,ri0;!g09GlSn1U6rRs34BuOy;de2TWe,s;a9et,l;aZeYiliat4lVoTrRurgy;ancRo9;!o9;ll2PNrt,uR;lgCDr37D;agSoR;ch,t;a9ua9;bv4r1KItt6v4;b4e,i322nRvo2TL;co9;ch,r,s;aUdTeSfo7ge2JQi8o38SrRu0RZya7;an,o2WZ;nt,rm2t;en,y;in,nt1KA;a03e0PBh00k2MUlYoSuR;iv4y0;cq,ll8mpDnte2ZOqVrUt,uR;!f2VHpe,rStR;e2IEre,y;!s,to9voi1KC;!danHre;!ue;a2WQeR;rc;aRelBn0;iCsR;se2T1;che38AmSnRuOva2SG;te2SZ;p,us;a07e04i03l00oVrSuR;f2V3is,ys;assSeRis,oIun;t2WSu2FV;e2STse2ST;e34Lis,n0UHrgCuR;ef,la35VrStRvi0;hil2S6te;da9hisRlo36Rq36P;!v;ancSeu,oR;is,nd;!bou36G;de5g32Jh2re;!au2HJck,dFKg36JlSq36JrR;!ge,t;!li0;ilHYn0YNr1s,uda9;ch,d1h0I0m2nd34Ko,p1ZHrUsk,vR;eSiR;ns,tt;ns,r,y;d,mou351n34Fy;a7Zb78c6Rd6Lf5Yg5Gh5Ai55j52ke,l4Pm43n2Wp2Gqu1SDr1Qs1Ht11u0Mv03w00xZyYzR;aTca31CeRotDu4;n2QWrRtD;ius,us;rSzzR;a33Se33S;e,i33VoviR;c2JWt33U;dAe275m2ng;al32Tt1;!eSkamc31ClRt1;er,is,or;rs1tz;a03eYiToRr35Zt1;i253nR;en,tu4;ct15GelBgUlTm16FnR;!sR;c323k323;a,le;n2CEue2RQ;au,c1W9lUnTrR;dRe,gCiDr2WStu,y;ie4u4;d0e2UFtu4u;iCl;!c35HlTnSrRs,uD;enCie4ny,r2WN;di0o9;!ie4lRtrPy;eRie2OL;!e,tDy;!be2O4gh04n03rVteUvSzR;e2O3i1RLon;erRr2TZ;gn2VM;nschlag0r;aWeSiRs8;au2G8ds8n,to;l34MnRys;ceSdRs,t35P;au,e5;au,lB;in,nR;ce5;ay,dri2X8el,i1R9o9;er,l3r2J9;!a05e02h01i00n0ouYrUtSuR;lip25Lsc2YX;a1UVerR;gra21Hra31O;aTeRy;ilBmoRsJ;l2VXu2RE;ilBverJy;c34OrR;!elBr1S0;er,m0;a2E2o2NK;ndr2LVrR;ga,rR;e2QLie4;c34HilB;aXble9err2RMhWka,l6n2B7or30VsStR;auDRima31J;aTelSiRon319;aBseSOt0;in,le;liC;a252o252;blon2VGg34ClBnR;g34Bte;a0Dc0Ad09e07g06i03k02laber1QJm01oVrTsRt2JYue2AV;en,onR;!ne2Q8;ab2VDe5ivRue;ee,ie4;cSe,n30XseKuR;c341q344;heSqueR;!bruC;!lR;ie4le;a29Ge;e,inL;chRe357g2ou2RSq33Xvier142;!ard2V0eR;!l2UZ;e2DPy;au2ETlBnR;ce,te;el,ie,n0uy;!heR;!r,vR;eq33O;bSde,i4mRn312vPw2SAy;eKie,y;e2JSie;a01eYiXlVoUp3rSuR;ce,z;aRe,i2YOomena30A;de,irPtD;i2HXli30Xrt2QJst4Yt328;aRu30Q;ce,iCnD;a2YGcer2CSer4n;arBlBnSrRy4;c338le,r2UF;na,s2UG;iUlTnSrRtrP;ch2YKe;!e,s2UD;i30Nme,us;l0Q4re;a0Vc0Qd0Ge0Ff0Eg01i00kZnWoTslo2Z3tR;agCeRhi0in;igCr2GO;iSnv2PMuRv2PM;e2EBgareCl2OG;sel2U5x;an,eSi,oR;!m,n;gra30Dv1EG;ey,o2ZUtr2U1;au,e2MFg2;!a7d02e00fo7hXiWlTst1t1uRwa2CN;ay,ed7FiR;er,lBraQ;aSey,oisR;!t0ZJ;de,is;llKn,s;aRendriGof;mRn;!m0;!li0n,r1vR;e2CCin;au,e5on;ilBo7;uv2P0v2P0;!aZeXgr8iVrRseadHwehr;ay,eTiSoRy;c329n;au2DBg2UIpA;au,m2v2OV;eRng3s;r,u;au,gh0EJlBrRs,y;m2s;is,u;a32UeUiSl2VUoRt2Y3up;g257p,ur2QW;aRot;!u11P;le2O0y;gh2s,uR;lt,ze;!a08b04e02i00mZoTpRroIus11By;!e,hi0iet2PLm2ronRsa,y;!n2T1;nTra1At31RuR;c31QrR;e332ie;dSi0tR;agC;!e,in;e31Mi,y;aunIelBraRtP;n2YEuO;nt30XrRs2WR;!re,t1;!eTi0O6our1DUrRut9;eRin2U6op2V7;mo2WEtD;r1WLye;chi1AOd11Lgd1OCiUOli2YWnSrRs2POx,y;c31BgueriDiCq31Ere,tiC;dRna,q31Dte;a9e;a01enc2BTiYlVoTuR;e,mR;a11Lie4;nRre,u2BQ;de,e,ge2JX;emSiRy;er,ga2W2;andKn32S;bSmRn;a11Ee;erD;nRu;c2BHde,ne;am2LMeunes03im11JoSuR;dPs;ie,ue;b8gnUl6nSr,sd1tRze5;!im8reL;eRgK;!sJz;el,ie;aUey,iTl31VoRue,y;g30PuR;ciCd;a,t1;iRr;e,se;a05d8e03i01ne5oXrTueR;!rRux;!ce,ip2RMre;aSeRoi10ue;ca,na2X8;nRve;de2MEge;!rStR;erPh2Z4te;ce,e,geR;!nd2RE;moRnsc2VN;d2RCn2RC;rRsJ;be2Z6e;ce,nSr2WXss6uR;chet2R8gA;ie4n2R7;a0Ae08fo07i06l04oWrR;aTenRica3;aRie4;i1QLye;mbENncR;e,hiJ;e,ll6nVrTsJuRy;nMVrRt;c2ZRee,n14H;a3ce,e2Y3ge,me,tR;e,uC;dStaR;iCnt;!erP;amRe2LOotD;e,me;a,l2KVtD;l6rd;rRsJt2QOu2M5x;r2QNte;ge,ilBntaisPrgSsan28XtDuRve,ye;a2W9t;e,ue;aWTd,eUn0ouce2LFrSuR;e,ke,r0ZT;iRy;e2HDlB;baRrouDt;uc2Z7;a05e03h00isseNHkZlYoTroR;iRssKu2D1;s,x;ix,mUrCsDte,uR;dr2NSetDliCnt,rRtu4v2QB;!be,cRsR;e,ie4;b2KBm0Z4;etDoc2YY;ey,m2o,ya7;!aSesR;e,na0ZG;i0QImb4n2WEp1M7riDu2W8;lBrRsr2NJ;ra,t0Z0;ge,illRlami302mp,rDsJve;a2VLe;a0Db0Ce09i08oYrSuRye;mba7n,tD;aVeTiSoR;sJusJ;an2W5e,s;!cR;he,q2YM;ke,nc2YIsh;issoZmbardKnYrXssWuR;caCll2PNn2MArRsed2PN;l2PMsR;aSel2PLoR;l2PKn2PK;d2PJud2PJ;ee,ie4oT;dKe,gCie,y;ne,te,v2KX;nn2PF;e2H0l17Yne;au26Eg2Y9lSr2VOsJtR;olB;!lK;e,iKy;dPie,o,rTst2KQttSuR;!ve;a1TTe;be,ge,re;kk6DnR;st2VN;a5Ue4Hh4Di33je31l2Smi1AVn2Go10r0EuUwSyR;er,n0ri2Z3te;aRiat15Yo18O;kerna2O7n;b07c05di2FEecDTga2XAh04janp03k02l00mYnXpWrVsStsRy25Aznets2XK;che2VHh2HH;hRlei2RWn2NEsnHz0W;m2nR;a,er;evi2OYko2HGth,us;ic,p0AB;cyDkHyk;aRirov2GX;cz2VUr;ba2YTczyc2SZes2VIic2SZka,lRy;!m2s1;ac,ovi2RW;aa;lm2n;hRzy1G0;arc2STer;at,eSiR;k,ns2RG;cz24Rl;a07e02iYoXuTyRzyzS;g0ko1UPs,w28KzR;ano2GZ;g0mmIGpTsRtcht8;!e,hRke;en,i1FQ;a,ka;ets2UVft,ok,ss,tz;ck,eTl6m,nbaEstSvanR;ek,ic;e1G3ia1G3l,of;b0n10Xtz2NU;bs,geT1iTmSnz,pRss,u2ASy;c2SAs;er,ppt;n0sRtz;c2WSz;em0ft,mUpo0V8tz02VuSvi2ANwR;c0UYer,i19P;sRtl8;e,kopf;er,ps;at15b12c0Ze0Uh0Tji1UNk0Ol0Jm0Hn0Eon,pec2C9r09s06t04u02vZwVyi5AzR;aSdra2GEic2S2mi1F8ubR;!ek;cRk;h2EEz240;aSiR;l,tz;lRt2U9;!cz1H6sk1U8;aRiI;cLk,lRts;!cs1ik;a2TOr2NXtRyoumdAZ;achiw0Rrouvide2SN;al288ch1sR;ilin2MUos;ar,ciel25Bi1ETkSs203tR;as,y0IW;a,i,o;bel2SHdUeEia1CZmTnSol2DZpRyt27G;e2VKi;ac2RIer;a2S4en2UP;i2TTyb2;as,do,e,g,iRk3niMope2BLra0K9soulas,z254;ditsRg;iot9;ay,bRe2UPi,mH;a,ul;aUeTl0oR;dRgy,sa;enc0TZziejs2R8;m2n2S5;di2TJr,sz;koUl2oR;rSslRt2TY;id9;i2u1X9;n8r9;l2BAn8r;hUniTppSrRs2QZvoA;n0s8t;e1KHli2UN;c,g,ng;l0ne;hRiel2RLk,ur22V;!enR;bu2VLd2RC;aRe2EYr2R1s,yle1DX;r,yR;as2HT;!hi;a00eYiXoSuR;ds1MQts06I;blUepfHf063pTtSwlR;e1QLs1t1;!h,t;fHh,p;oc;espeIghtLpfeEth,vbbs;bHeRpt,tz0ut;laQske23X;pp,twsh8uR;f,ss;aYeWiUoSuRyC;ka,s;bRni2TZos;erdanz,uc2VO;ff2O1j2OWm228nRsh;e,g2AG;is,j2PUmenRnn1s2RXz0;cs28Qt;a0H1m1UVpp2ADtt,uwe2IZ;llRns2T2;er8;a0Zche0Yd0We0Rfoo2GAg2SBjaIl0Km0Hn05o04rUsTtRw2K4;oul0W2tR;el,s,y;ch23Mhi2QVl2CCsHtl0;all26IbZcWeVkTl6n2ouaSsRw16M;c2JIte2W5;c,k;bWeRh2HJlaQm2oUwo2KA;!by,y;ef;hSoR;ri2;!gessn0mS5n0;ri2R1;lApiN;c00dZeappBgXke2U5lVnTsRv2GSy1;bu2SXeRh23Lt1;l1NJy;ai7eRi2SVon;e,l,s1y;ey,oR;ch,u2E3;e2SRsRt0;!b033laQ;er,ra16R;ar09WhR;!i2N4;bSen0me2VGpRu2RI;er,t1;aEer,le;bVe,gThaFkeSlRm0p038r18W;am,er,ingCQor2;a2SHn6;anRo4;an,n1on;rRu2SN;e2SCi2QE;di2SPff0j24VlUpu2R8rSsRwiA;!er,ke,li2RB;ceRn2st2RNz11K;au,re5;baIj2y;dRheaF;!er,ie;napanaid1ra;b2UIpeN;aTim,oRu0DB;ngsav2JMuR;ry,z2GE;n,y2JKzo1X3;a0WbHck,e0Tffel0gBhoKi0Skijicak2GQl0Im0Gn0Bo0Ap09rXsWtTuSw,yl2E6zR;ar,ha2MB;ck,n0VWrenchGs2QX;chStR;!yB;en,um;ik,sl0;by,d0XBec2N0grec01huIXi00kYlXmel0H4nWoVrUsStRw3;laQs1;h2CMla03VtRul9;e2SWiM;!ig2y;chi2U1n;!an,iI;am,i10V;a19DhR;of;g0ng0;olA;haFpH;gh,haCugh;andFQdUe1U8is1nSoe,se,tRw13K;eEy;!a0H5eRis1;l42s1tt,y;l0ol0;b2U5m0XpR;!er,st1t2IF;em8gaZlTnSsR;ch,o;ar2AA;!aVeTiSn0oR;gg,m;h0n28K;k,rRtt;!ma2OAs250;nd,r;ll3;ff0gh2ke2TMl,rs28J;!ch,le2AVnRrn2v8;aRey,s;gh,h2;bBc1QGfe,gWlVnUrStRys;iMs;nRy;!ey,s,y;e2IBy;ey,ty;an,h2;basin14c12d11e10gigconi23Eh0Zi0XjjouNk2LLl0Um0Rn0Mo0Lp0Hr06s03t00uWvanaVwTySzR;l2RJu02Q;a2DHb2EFr2LJs;aRinien2T0;lil20Umo2SDse;gh,h;fShRki,r;an8;fRh1Z0m2;ma2NNo21G;ch0o,sSt2zenR;be2RRs24B;hi292;a22SeRs0PUtn0z;k,nR;en22Q;aXcWd2NQes,g2KNin2NQkwas2MTliVmmUn273out2NQpTrSu2PCvR;on8;an,ol;i19Wo22J;er0;ko1OP;h,ze2AZ;dTsSzR;iv2;arki1Y5i28Ztergi2SB;an9;iRl1p,r8us2SC;n,ouapR;noR;ko2R1;pui2MEraD;aUdTg2NAia,kHnSs2MDt2BXyaR;voM;a2OCegiess0;aEeErasho223;pe,sh,wa2RH;!alanath2inRma2MVra2QZ;aRs2M7;wa28B;aRl2SEm,so,tschmi2QWun2N3y0DF;n,schRy5C;niI;gBnRr2QMs0;e,o2Q2;a2Q1l2P5mahkotayo,n,ooJ;gi,sl3;eviHjul22Hro3UweE;halu086or,zmarR;ek,s2KL;sk2MS;a2Fe1IhaMi1Go0AuR;a08b07c06d05e04h2i02m01nZrWsStRz2;e5r2MP;sStR;as1e2KWus;au2NMeRi2PQsi0BM;l3re5;ad,czySiIko29Znov15DtschyRy;ch2LWsch2LW;k,ns2LL;e5gRk0;!bl2Q7cuF;i1AEte;lRn;i8lA;e0OFl;ic0IFon,s1;he27YkG;ai1A8i1A8y;i4r2LS;a0Sb0Qc0Pd0Nh0Ii0Gjo,l0Dm0Cn09os8pPr08s06uUv3we2E6yR;aSeRnt;l2ADux;l,u2DO;anne2KCbZd2FCeYffrAi1L7ng,rUsseTtr2M3vRwH;eRin;l,n2N7t;au1XUl2LOmAt;dSj1neR;au2KRl,t;aReu2K5;in,na9;nne2OBt29P;aSerR;ge,t;er,rC;ephs8if1WVl3sR;aFe2JZ;d249ge2ODi2on;caSdr1HQes,g8p2PAqRva2QN;ue2NM;i4s;p2P7t2P7;a2FFe1AQiSlRy;ey,iA;at,bo9c23Yff,n,ve18W;gnAnR;auOt,v2BQ;aTnRsn1;dr2NBer,r2CLsRt1;!en,on,ton;he0nR;ne0XDs2JG;oRry;in,n,u3;he060te5;aFeFiRs1;d1n;nRss2QA;es,is2JZnR;eRis2JY;s,tD;gge2OOm2KKnRrea2L2;che26Ox;a09dd2NFeroburkh2ff07gu,hannQ8lc26Km05nYoffroPps1rXsUtTuneh1UAweSzR;e28Dio0D4;ll,r,tt;roJte;be2M7m0sR;e09UoRup;me,p;dPen,olm1;c020eWi25ZkUnRoEZ;eSiR;n0X1sL;!ry,ss;en,iR;ns2E9;au,ry,sJ;meRus;!ly;or054rRs;iGoy;fco2EGnRrtoQuroQ;b00chaL3dZe5lYmXneVot,riUtTvR;aiCeR;au2BXnCzi2MZ;on,rUA;an,e;au,tR;!ot;arP;egr2HMou9;avel2GMelB;aSeRoe2LN;gl6;ptisDrd;bs,c0Rd0Qe0Nffr2CEg2B9h0Li0Kk0Il0Gm0En07ou8qu05rYsUuTvRwo14Ky2E2zz2OL;eRillo20YonH;l2JOry;n1VCr1v3;mTsStrR;ems2J0;el3i2WogC;an20Ser;aWbe5ch2LRdVel,ga2A4is1jo29Jle2P4nTouSrRv1PIy;et,in,y;ssH;ac,eR;ck,t;at,inL;ch,m2GX;eRi24V;n2JAt;a7d259gWiVki149nUoTsSvR;e0PVr0RS;en,on,sen;si,t;e18Ki0ot2OE;er,ts2KW;!el,l;aRba7et,in,me25To9;is,re;aRbeFetDin,l2DWot,te5;d1ux;a2C4uR;bo;c00Hda2IYllA;ar,nR;!ke;gSniR;cXPs2KK;er,g3;cz17G;cott6in2J1kZm24MoWqRz24J;ma3uR;aTeSiR;er,n,th;!l3m3re5t;rt,t;bSmi2LHtR;el,i;s7Qy;liCmi2HKoRubo267;vi2K7;a1Cbarr1Bc1Aff0XEg17h16i2IRk15l12m0Wn0Ko0Jpper0Ir0Fs04tZvTwaSzR;a1NZz2GA;nic2GCsk2KL;aUeTic,oR;n,rR;c0KFy;ns,rs7R;l22FnoRts1XI;u,v;aTel,hSo,zR;oei2AFwei4;en,i0;gRs;isJ;a00bZcaul1eWhUiToSsa00BtR;asJival1WIre;i4la,m;ch,do2K3ot;am,ikRmaH;awa;li,nSrR;!ho2ITt;haFriM;e25Di2MI;acs1be5m1SB;al2IIczl,e0WPoRurz1ZEviC;nRqu0E;m2si2IG;ciHsiH;annoNdi2J3n0NIr2GY;a7c01dZf0KNgUicaEk1EKm2nTo2LLtR;erRreva2IL;li2GM;es,i1I3;!al29KeUh28LlTo2JArR;am,oR;s26Guv280;es,is;beFls,rs1;aRi2GK;hl;h,l2onnuL;!amedVbTho2I8mSpRse9;a2KNeril2KR;e,uc25Z;eRle5od8uelt8;auOr;ji2;er,isha2ICliRo2MO;ck,nR;oiJ;e2HCweH0;l8m,uell2M4;b2MLe,guSlesi2H9naR;ce,sz1SC;ld8;i2GUkem1RF;a,o2K9;cUffol2K8k2G5lCWmoni2HDnSquRsenzani28I;ez,in2M0;nRtk2IZ;ici1DSoCuz2DS;oRur2LB;mRno,v1XC;uc25F;a73e4Ci3Floz2n3Do1Cr1Asu,uYyR;aVde,hUlaTmGnRo1WBppoliDr0M2t269veF;dm2eR;maQs;ndL;arD;ciRrd2A9;nt2KC;!a11b0Xc0Ud0Se297f0Qg0Khn,je2LOl0Hm0Dn07ot,p06qu16HrYsWtSv17OyRza7;be2KBet,nh,sJ;chiSni1TFs1tR;!e06ViMon;nRs1;gs,s2A7;!er5k23Ila2HNsRt2A6;ey,in,on;aQ3d24PeXfo7iWk1OKlUon,pe5reEst,tRyn;auOeSh,iRuR;biJ;au,bi2G6;bRey;eFut;et,k;au,nLt,z;e,peK;auOgerbuUsTtR;h,iR;ng1I6;ak0;eRhl0;hl0;!bSeLm0phrR;eyLiG;eRl6y;r28HutH;b0WJeSin,lRma2FO;!i2IQ;ts1Z5;entobl0gVhUr1uR;eRin;!n3tR;!lato25Hte;aFe1KWs1;!i2JD;auOfR;!m2o7;ak,de,eRgi2JAlAon;c1QQn2GY;heSkR;!i2J7le;!r,tD;bTeRin244ka,l0ouO;!c,l,ny,rR;!de5te5;a7le;ng,rd,uO;ab2JLi1WVyR;cu2HYnch1S4;!a1Qb1Pc1Ld1Gels2IVf1Eg1Ah19kayVCl0Xm0Sn0Po0Mp0Lr0Ds0At09uYvWwSyR;!le,os,t;ar2HOeTiSlRs1PM;aQe2KI;e0R9s1;!llLs;asJeRingt02T;nd8;a00bZck,dYeXgh1H3iatan1k,lVnseEpeFrUsRy;eSm2sRt1;a7e2HHin;!r1WBt;an,ca2FGi2EJ;ah2d,eRfoFiELne;!t,y;!lbe0Z5;a074e;aFr1;rt,tD;a1H2esJotDsy,t1P5;c25YkSm0s28EtR;e0Q5in,l0;in0R9o;aXb2EOdWi1mi105nTsStRvat244;!emHh,on,y;bu2HBem2f1QPl6;!bSdi2H9e210iRs6uM;d2FOng;l1N7ro12B;ou24Sziej1TH;n,seI;hiMki2I3p1XTs1wo280;d,fRgen2I5k1XSlih2p0se,t,v0;fsRsRt;te2CC;an,e,g,oRsi2H5;rRw;e,os2DD;beFeSi0meRsy;l,ry;l6n11ZrSsRt;!si2EN;e,iIst1;an,b8co1IId01e00fo7lUmTne1EEos0YRroyd,tRweE;!er,for2IIoRz0;n,rf;!be2GQes;and2BBeViRow26C;er,nRs1ZJ;gSsR;!he2JA;er,she2J9w2GA;n020r22Fy;!nbreI;er,sw2G7w265;a2APn2;an,b3ds1erh2AOgShaFle1V2on,s1ueR;!nA;aRe;rtt,tt;a1OGbae23CfRma2DDste2E4;!ay,m1UI;d0gTiRne2IVs1;au,eR;rnCsC;eRi2H5m2s1;!n,s;hTkR;eRiM;ss1;!ar27Tu;aFs1;g,re2BK;atRic1FD;uk,y10B;a0Mbb1DNc0Jda0FBe0Ig0Fl04m03nZonde19KpXrVsUtRv1;chRes,l0m2ti2G0;!coIe2GTinRockL;gs,s1;h2A3s;ag2GSbo22SiaFschR;beI;ol,pRtmEL;!olyD;ch,dTe2FYg2GOkSsRt1z;daBe,pe2GU;eEl6s;enlaMle,s;b28RmH;a00bZch6deXeWfVlSm0sh6tR;!on,z;!eSiRm2s,ya7;am,er,k0;b0MLg2CQ;ik0;au,rA;b0MIrR;b0MHl6;er0NK;ire252rA;gShR;am,st2EBt1VV;e2G4i2G4;beFn,sJt0;hSkR;ey,m2ok,s;e,ioa1QO;nv0M9rd3;a2Bb28c26d25emske1CIf23g22hr,i1Tl1Mm1Ln10on,p0Zr0As05t02uYvXwUyR;dSe2F9m,nemanRst275;!d,n;er,ra;!etSiRs25U;s1tR;s1t;a3e;er,go,rtTsR;er,sR;i,n0;a2GZea2GZ;e2F6hSi0riItRu;!iM;er1VUr1VU;lUsR;!eR;!lR;!tiC;er,op;a0BOb0Dcz0Cdt,e27Nge0Ah2FKi09li08m04n02o00pH0rXsWtTvSy,zR;og;i0VMy;!a2FFeRle,og2FAt;lRr;!e0l0;be2EAe25Nhm2;!a1P3eSiRon;d2CNng1DJss1;ns,r0XTs;de5n,uR;a2EOx;!anR;d2AYz;aSeRi28F;ri2E5s;ko1YQnR;ge,n;hy,n;!g274ng;nroRr;ed0;eg;aFeRin,ruIst;c077t;p0R8w2DG;a0Ab09ch6d03e02ga00nVou1FVrSsRusA;!chPLe01Vle1XRon,pet0;a7iR;cRot,p3qu2AI;h1ks1;a2ENeUiR;g2nR;!gsR;!en;!beFr,ssQ2tD;!rR;d,tn0;in,lBr,s1N0y;eTl6m2rR;iRy;cksTks;!l,rR;kerk0sR;!en,on;e0X6r6;i4uO;a7e1ingw22Smin0MSoQp1WN;!bWf0VXgVik,lRmQQp3s6;eSiR;c2ADs;n0HYrRu,y;!ey,sK;!e0WY;e0L0ig;dXg2BMlWmVnSsRtzl0;!l0se;!eSig,m2ri2BMsKtz,zR;!e,i2CY;!ig4m1R0n;e20Kri2BJ;!in0MEle;eRriI;l0HMm2r;a,e04gaFlaQo;ferRn0;!nY9;ge,ou3;ht,kRquA;!e1X4l0;bBd8erRn0re2ES;ly,tR;!/lecomD;d8fP0gaVlP0pUrTsl6tR;cRon;at,oat;d,nKs1ty;e,hy;nt1;!a3Cb3Bc36d31e2Zf2Yg2Th2Si2Pj2Nk2Ml28m1Vn1Gq1Fr0Ls0Et0Au05v03wZx20NyUzR;a7eRza7;lRn,ur;t1wo231;!as1ZNdoUeTf1LJh2BEl21Sm2nGsSth,wR;a7o22Z;!te2B7;!b3r,t,ur;ck,n;ay,eTkSriRs1JOth1VB;l1USsh0X2;e23BinL;!l,s,y;eRin1T5r3;r01Ot;bo9ck,dec1RLg0NAlUntsm2ry,sStRv0;bo9c1RKeb0CWre2E3;!au0hn0m2sR;e0KHi24Y;ta3;a0WZchThSi1XBra25JtRz;!o1PW;aw21A;!e1OU;an2CAcoAen,himo2D7kWlVpecUseTtRweE;iRy;e,n0L6;l,tt;k,t;am,et;eEi2CD;a0Ib0Dd07e05fo7gr03i02k01l00mZnXpe,qua26XrUtSwRz0GA;ar2CIo228;!ig0MUl0HRm1PJnRon,weE;agHe1VQ;a11XeS0iSoRr2AS;d,ld,n,p,w0;g2l2DVm2n1SH;a9e1VMi1TQoR;i2D5ld;an,er,on,s;a1HLle3;ey,inLon8;ng,o,ss1;aRo26I;d0ve;!l,nRsJ;ouch1zl1L1;eVgrUiToSt,u1L3wRye;iIo21R;in,u3y;m2ng;avGow;e,l,r;eTiRo27Sre29I;cTnsR;ki,on;cRl3r20H;!k;nRscz1TF;!go24I;!ue2B7;ab269c03d01e00gZiYko1V9lXnUouAraTsStR;ra9;c1FBfo7ma27Iq28Kse26Dz;h2t1Z7;aSem2iRon;g2s,v2;g2mLn;ey,on,y;g2k;a7s3;!l,t1y;!eysi280fRly,rah1YCs,ve2BF;ie1L1o7;e,hRk,oIzar1IL;ay,ir;!a02bl01eXiWlVmSon,pRro1OSst28R;!l25Us1t1;!an,erSoR;ck,nd,ud;!sl6;et1ZSin;a2C8ll;lRr,u29O;!inR;!mR;asJ;et1in;n1O0rd;a03d01e,f00glei1SAiZkhor21XlTo2ATp3sRt1ve0TQy;aEteR;ad,d;!aVcz1SHeUiTmaSoRs;r2w;n,yr;d1Z8er,g2s;!r2tt,y;is,s,waGO;k26Tn;o7pen26M;e,iR;m2n;bu28Bs,y;!ey,o29S;a1GVjaR;ji,r;ch,gh,l0mSnRr1V7;auOes,s;eu28Io1W8;ce,n;aUeTgRle,n6u3;an,eRluQ;n,rYXtt;!lto1J0ma264n;n,r1XT;fn0si;ck,gRr0CQ;eBhl;aTdSe1SOiwinar1UZj9lR;er,oI;!ad,ig2oI;d,togR;lu;a298hTkRleph24Cqua7;eRi29QlG;r,t1YK;eRie;!y,z;erl3laN;ck,g,s;aARe99gg,h96i7IjiNl6Um6Tnoc6So4Fr1QschwiMuUwTyR;e,m0orRre,sHzm2;fi;illi1WNyn;a1Gbb,d1Fe0Yf67g0Vh1VIi02lZmmes1nYo,rWstafs1tUyR;a7eSn0VHoR;mar277n,tD;a,t1TK;ch0hRierr259o28Wter1W0;!rP;eg1ZNm2nRry;ag0K1ey;de0S9n1OYt,v1VV;iks8l8ma3oSyR;as,ch;viI;b0Ich0Gd0Dg0Bh0AlYmoQnVrUsep24tRzz1UT;aRe,or,t1;rRuO;!d,e;a1RYgu9y;aSd1e1IWgu8oR;is,t;me23Wn1ZQrd,u1ZZ;a27Vb215d1GZha01iNlTmRne215;aRin;in,n,t;au1ZVeTin,mAoR;che1IPnRry,t1YNu;!ne5;boTmSrRt,v3;e20YiKm1QNy;etDin,ot;e26IurR;de5g;m,s;an,na7o;e4nRon,ue;ard1RUon;i,oSrR;oz;!nK;a19BeRon;l3t1M9;auOert1M8l3or1Z5;liRu1X0y;ch,eR;lmin7Qt1TZ;b8co,d06g20Cl05n03rTsSt9QvRye,z;in,re19E;se286ti8;aZbo9et,ganivAinXmWnUouTrRt3y;a,eRier20Oy;ra,tD;sJt;eRi0o1TD;s6t;etDon;!/st-hRauO;il1VD;rd,u0JR;a7eRno1LLy;e,tD;fi,te;esJon;er,munW1;bAgVis,lUrRy;dRi22U;aRin,o;!do,no;diM;en1TB;a1Pe0Yi0GoYuSyRze271;l1VOma270s0OJ;a7bVc1U2et,ffUg0nSsRt90z0BK;l3s;dReFwa1HC;s1Ey;at,y;b,er;at,bb,chm291g07i06l05m0BEndin0YGsXtWuTveLzR;elRie28N;iCle;aSgRillo28Llx,s8vH;et,na7;lArd;e,he,on,to;!i26Bje2lWm2pe1SNsTvRz;alAeR;nt4;aFeRin1THm2o;jRt;am1RQ;eRou9;au,e;e5i0le5;gnAni0s16S;an,g;auObou04Sch8e07ff04g01ll00mXnVpUsSttn0vR;e1Z2o9;a7daBe1VNh1TYon,sRwo1GO;!el3im,om;pa;c1LQdRfe1GLh1TVk,na246on,seE;al,l0r1WL;aSb1YWes,m,ouOsR;daB;l259rd,u1Y5;!i,o1VF;as,gs,l21XnSorRs1;es12LiH2uk;auOon;et,iSoR;n,re;ng,thL;co,n0r0ES;a0Gc0Fd1e09f07g06i05l22Dm03nYsUvTw,ySzeR;la,t;k8s1HV;a27We;h1TElTsR;!eR;!au,t;au,on;a9Hci,eUiSn1oR;n,t,uill5;erRlB;!ga1ZI;lBt1Q7;a1OXillR;i1on;g,ss,ve;is,or;!fR;!a7e,o7;l6nRr,s1CE;be24UdaBe,hiEiUlSou1PWsRtr1X0wo1VP;hielMQ;aRe5K;nd,w;a,ng;co,h,o;l6ny,rs1vG;bat3c0DdHf0Ci0Aj1mmo09n01sYtXu,vTw,y148zR;iaRul9;d215no;eSiRo9;er,n0O5s1;lRn,s1VGtt,z;!iCy;i21Fr00Ft1;sRt9;eRi0IDo1IM;l,t11C;be24Cch0dTet,fo7gSi25Yo,tRvil0RR;el,fo7h1SFrH;e24Kui0UG;a9bo9chUe1R9f1DNguillQKin,je2mSo,pRry;i0RBre;aiRon1WP;s1t4;ampL;!nt;ll1nR;d1BOe;!f1UU;ey,iR;!aR;!mole1SNn;a22b20c1Zd1Oe1Lf1Kg1Jh1Ii1Hl1Bm1An13o0Wpaul0Vr0Ms0It0EuVvUwTyR;au,cool1J5eR;au,r,t04T;anLe0TSiMliM;a,er,oN;as3b08d06e05g03i02j1V3l00na1ZPp1ZBrUsTtSve25Bwe24QzR;il,y;in,re5;sV9y;!auOboun23Lce,dTe1THgSiRl6mel1n1TBon,q1NPre;ad0HJou;es,on,uG;!eSiRon;e,nC;!au,l,s;aRd,et,igu0sch13B;h,r1VZ;lqu0n;eRh,l20Qo25Py;!on,r,s,t;da7ttK;ge,ie,on,rRy;e5on;auOil0HS;h0HUrTshaEtR;freds8i0schaRwer22Y;lk;e5ie,o;h0in,liTn6sRte5;!a7eRi5;!l3ns,t;aQng;dWe1UEgeVh1R5iUka,lTmSnRo,rPt1vea25My;e5iM;an,e1AIlFK;ay,e1UB;ng,s;a256t1O1;eSiR;en,g;c01Ye1F0;gh2;dSg3r21EsR;se23O;aEby,e11VfUhTi0X4liMm2noCRri21Gs1wiSyeR;ar,r;ll,n1UE;aQe25Aue;ell21Tie1DF;caWdVeUgr1N7iaTneSsRt50y1HTzale1XQ;aVoul3;llPnt1YQv1Q3;!u;au,u;a7ic;lvG;beFe1XJi8mi0;aneIbouVdTinSka,lRymbiL3z;a3e1M1i22Fn0ogh19U;!va24K;be229en,fRin0WGriIsK5wa1SR;in20Z;rn,t;ne5sA;e8in,l0m;ar1QVer,hl3ly,n1TFu8;etDf1SW;dSfRg2pf0tz;fr0I5;ecDWhaFiDWsee1R3;a00boZchXda7eWfrVh22ZiUmToSsRu;by,maF;!n,y;ai4er;er,ll1n;ey,oy;au,b3fr0HXk,lZXm1Q7qu3r,v200;aRe4;rlG;is,ut;i4m199rd;el,tu;eRin1NKri2;il,l3rt;n,rd,sh;hiN;iter19Yyz;a02eYiXoTuRy1YJ;odRsh1EE;en9;beTdSrb0PPutn6v0wR;ats1XSe;e,os1HXu;ns1HW;ckm2nn,ss1;aTeSgg,i1YDmboInRs78;ah1PDdonw1XXey,f1ANnDU;n2t1;s1ve;ckm01d00iJnZsXuWvVzR;eSiR;er,ou;bRr;ro0M5;e8in1P4;benskiQde,mo1WXs0;co,g207h2p6sR;co,e,goC;cy,d1;u,wi1JF;ay0;a18b13d1SYe11ff10g0Wl0DmaiHn09o06pp,rWsUtTuSvRz8;og21Try;ffre1Y4liaNn230st;o1EZsc37to;eRl0quAt;!t22B;aVlUoRpHt1;dSir,n0DYuR;a7d,x;ay,e5;c0KiM;ldUrdTuR;dRlt;!e1BC;!.roch1BYe1BBi1M2ot;e5i,o;io1XSnSrR;daNs1N0;a,e0KL;ac,cTeRgr1XMi0;sRy;!tA;e,he1J7;!ar1S7b08c07d06e05f02k0lUmSot,p3q1XEsRten2;on,trap;an,oR;n1SMre,ur;!a7ca1IMeWiSmRo0LNs;an,or;aTes,gSl2ngLsR;!s8;an,h1O3;m,ns,rd,u;nLsRt0WW;!pP;iSoR;il,rd;ll2;au,s,ts;aFerslee1V8;hri1Z0;e09Qri1XH;auTgPm2nSon,uR;e4ie4;a0H0illi1QX;lt,t;!a7en,o7;n,rs1K8sRtz8;brFZi1ZM;a20JbUeTl1WGoRs1;in,uR;le5ry,st;au,rs1;!o20Bs;coUgh1LZmTnSq20CrdRs1WQ;!et1LZ;co1ZPno0UXop1TZsDB;b0S8pao20X;mRsa;az1T9el20Vin;e01XiSoR;ronz6sh;rlan1WGsl1YC;a15b14drGe13ffr11go21Dh10i0Zl0Sm0Rn0Go0Cr01sYtUuke1ODvSweOy0zR;er1;a142rR;it,y;cTtSzlR;af;an,el;heE;er1mi0sR;eRon;au1X4r1;a00beZd0Z1eYgXiMke,laWmUnToSri1KQs,th,u,vaRwiM;h,is;!udAw;at,i0on;aRerPme;in,n1DHux;isK;e164o;au,gh1NBmi2tD;au,r06C;gh1N9l1QIu0BB;ffrTli0rgR;eRian1MJ;s1t1D9;e,i1oi;a00dYeVi1JZne20YoTs1tRuL;es1UIh1ilRry;!co4e,h14Xly,o;is,la,n,veR;l1QFse;au,rSsRt,vo9;!se,t;e20Gy;ezt,rR;e1TOon,y;nd,pB;ba1WPe1NCina1X7us;a9dWe1UPiTlRoFO;a,eRi1VKy;au,s;e,nR;aRe5;!s,u;aFerbl12P;b,gne1T4;an,l1EHr1PNu;aRey;rd,y;dGvG;a1WCh0UT;rSuRy;go1ZXx;in,n6on,y;b34ch33d2Xet2Wff2Vg2Ph2Oi2Jl1Xm1Tn1Mo1Lr0Us0Mt0EuYvUwrylu1TZyTzR;aRon;ilBuck1UU;ar4et,m2n1JGo0RW;aSiRrilch1AE;gn2llA;n,rRso;d,is;c04dZge,hi0ja7lYmoQnt,r1ssXtSvR;in,re0FF;hSieretRr0SR;hi0;erPierR;moyRric0O;ne1K7;e,in;!doNi1IRt1O3;aUeTiSon,rR;e0F6on,y;an,n,o;l,re,s,t,ur;is,rd;hRin;e07Fin;ch18MeWf16BiVtRz1I2;e,oSuR;so,zo;lRni;a,i1O4;en,gn1ll1n1BM;au,hRli0s;ouJ;cWe5keEpUsStR;m18Lo0NJ;!eRin;!au,r;ar,eR;!riN;!oR;n,yC;a0Fb0Dc0Cd09e08f15Vg05i02l01ma1SKnZoVrSs1tl0vR;ey,in;an1OXeSiRow;ck,e,ty;fa,voA;faTnRt1YK;!boucR;ha7;lo,no;ac1X5eRh1NHi9Uon,s,y;au,r,tt;iIou1H8;bal1VRep1CMgSnRte5up;et,th0;ou,ue;anSoR;tt3ur;o,tiN;!au,m2;eSiRn0y;!n0;re,s,t;e5iaLon;et,r1O0uRy;g1WCs1UKtt,z1N4;be1NGh2mvolgRnd,y1LL;yi;!pewa7;at,baat1XJcWdVeUiTl6nRs,t1;eRon;s,tt;er,m,n,vA;!sh;ey,hi,iJQon;io,y;aTbSeRfo7in,m1s15O;l3t;e5i0le,oa;c1WCrd;a0Ab07e06i03ko,lTm,oSp3us1QDvRy;ez,in;is,udA;aZeWiSoRup;!fr8nKw1KX;an1ORbo9ch1GYeTg2nSpRv2;e5o1VR;el1VQg0;n08Hr;rSs,tRy;!ta;aQn9B;!gh0h124nt,rd,s,v2;a1UYbSch2mi,nRo1VGpe5;do,i0;eFo9;a1UVn1TVrCzo1FO;a1BPrR;aRun;i1ULnd;ch,iJneIrRs1GVti;d1OBet1HHne5;gnUllSnRv3;ey,sCY;ardRo1X0;!e19I;a7e1ND;an,erKG;aVeUl1QYnR;eSie1EQonR;!broc12Dleb0OC;!??,r;!a1QFrm16F;ri1QK;ay,e,n6;an,z;!aVbo9dy,eUi1WJm0oSrRs14K;as,e5;is,re,sy,uR;a7ry;l1UTs;l,p1MF;et,o1GI;!a09Cbei1WSey,i001le,oSriRso;au,el1UPon;rSurR;i1y;!i1NA;a6Yd,e5Mhe0RKi4El3Po21r0AuTyR;fRlysht2sh;e,fe,le;biNchLd1SEe06g05hr,iDji1W7ks,l03m01n00o1RJrUsStR;t0voVG;cRe0RKsbLUz;hi1PZo;ce,gus1loVnUo1JYrl8sthTtR;aRe5ha;do,u;en0;i0RCs;ng,tD;g,k;aRo086;r1V6s;fo7ker02ZlRt1;er0SWo,u13Z;erGlPuG;ls,ntGss07X;a11e0Gi02oTuSyR;!dec1OKe,kluQ;g1MNi0GPth;!bYeXiWlVmUnTsStt8uR;d,st;sa7t;g1NWtXB;a1RQent185o1P8;a1KGin;deva1VJquingo1P6;liliIse;e,ish0;a03b1Q5c02dY2eZgXoWppi1KHsVtTzR;elBzR;eEie;h,sR;chKh1DP;ar,ko,on;lAui;auOe5n1oR;lsp1TDn,t;dSk,l,sR;!en,s;enXSma1PWri1RM;k1BEot;s,uO;c09d06e05ge5i04je5ke,m02nZrWsVtUuSvRy;es,re;dRnd;!enXM;e,on,ti;el,l1ne19UsH;eSiRot;chs;!au14Kje2;chKetteRie4oy;!trR;embl1I4;e5oR;nt,t;!re,t1PP;dm2haFlaQm2re,s;eRin;mX8nX8ricRtD;a,ks1;hRon;a1TAetDon;bo05c04dAg03i02je1F7k0l6m01nSppi0r0R5si0teRus3wl6z0FT;!l1SP;cVgeUkRquX5ss8tz,y,z;eSfur1RUlRs;!aQ;!l,n;lo,t1EP;!de06OeThRke,oe1F0;a7eRiN;!ge1SWre;!sca1TJti1QO;bGe1NTpt1;n1EIse;as1DVo1S9;h1k;ulA;beFcze1OWd8er1THg1Ch4Ci1Bl17n11r0Cs0At08uRwle1BTyK;beFc05da,e04ger02ill00lZnYquArRst;cVeUi0mTnRqu3r03Zs3;aiJeRi0;au1GIl,rP;oy,y;au,ur;aRhe;de,ud1OI;i0ta3;em,on;aRon;de,rd;aRe;t,u;re,t;auRhe10Fr1KI;de5lt,x;herRtuni098;giE;e1E7h1GUsRt0;!e0OB;an1IWbe1RFc0Bd08Se09g05i04k6man03n00queZreXsVtRv1EQ;e,iTon,uRy;g1N6nR;a1DQe1MM;er,n1CW;!an,be1R0tRythK;!aEer;n1PFstR;al,er;l1CFs;aSeR;ll,r;ri,si0;!ns;n,tn;eSie,uR;es,itG;au,r1tR;!t1EQ;acrGm2nt,stRt057;aEeEi0;aTeSiR;a,er,l1S7oC;la9v1E3;de,n;dUg,ja1B0rVs,tRvie1E1zali1SO;!ain0QMeRig1NKr0CR;nRs;ay,e5ot;er,rRuroJ;ou1OQ;!co,do4e1BLg0in,lRot,st0weEz;e1SUiSoR;ws;as,ck,s;daFsy;ar1EWg,h08YlR;e,i00D;a02eYiWoSuRy1N4;et1B7h0QB;cTho,rRuca19Xwe1FB;eRin,o;a,nt3s;ca1P3k1KH;b1NJe1OCnR;g,n,t;ck,et,gBmTs1OMtt,urRxm2;a1LRet,iRy;au,c15Sd1BRmo1LQss1;iMmiM;g02h01i00ke,mXnUrSuR;st,t4x;oRr1;!w;!ag2de1EXnSsbR;er1PDu1PD;e1PCig2;anSba7mR;an1EOe,iM;chAd;ma3;er1E7i1MY;eoBg;c0Xd0Ve0Rf0Qgueire1NFjolYFl0Jn0Bo07r06s01tRvAzA;chYgeXzR;!baVgUjTmorr9pSsimR;mo1Q9o1Q9;at1KO;ohn;eSibb1;ck,y;ra100;!eR;ll,tt;cSet,hRkKn6si5;!ba1NTer;hRus;bRer,le3;a1NQeI;by,ek,m3n,th;d0IZlSriR;!l1QKto;a,kR;os1L8;cWdl1EGeVg0iUk,nSsterR;er,waO;eRig2;g2y;g2zi;haFl1P7s,t;hRk;!el1E9;ar,bU4de,et,iTki1PJlSoRsoff0t16R;c1PHt;mo4;aTon,pRs;en10RoCpR;el1OZiNoC;n,rd,tr1HMu;e,f4le,re;lRrAv4zo;dShaR;ub0;!e1DKiMs;dGe1OSiR;ad9;hau010ke1QS;a0Ybv0Xct0Wd0Sen0RgnoQhr,i0Qka,l0Nmm0n0Io1OLquAr00sYtVuTvSwJx,y,zR;erAzaN;e,r00E;ers11Uge4illRre1K0stH;a7et1on;eSherRter0VKz0;!o,stonh0ZA;is,s;c1OVtR;a,er,o1L6;a1LGchic1BEda9e07gus06iVDjaNla05m03n01rTsRtinHv10F;chRt0;ke;aUeTiRo121y121;!eRg2n,ol,s;!rK;!auOi1MDll,n,ol,r,t1AE;!gTnSrR;a,d,iLo;d,te;ne,u1P8;andRba1MCet,s;!e1IQ;aRi1JM;ni2;nd,tD;on,s1;!nc11Rol,s;aUc0el1HMiTnRt1;eRi,o;l,sMQty;ou,s;sJto;c1O6dm2i1LQlSs14MtR;h1BCon;!ba1EGe1CHi1HJ;cze0SZth,x,zo;ey,y;ak,erSorRunkTV;ko,ov1ODuk;aRo0J1;ti1;auOe5;et,re;rTtherR;stR;onK;n1on,wea57;b1Pc1Md1Lfa7g1Ih1Hi1CjF5l0Zme0Yn0Tou1N6qu0YCr0Es0Dtta141u00vUwTySziR;no1OHo;dher18Get,ol,t;cettKdr1CEns;eUi0rR;eRon;!auRt;!per06C;rRur;e5on,y;beFcYd00YgXlVnt,q1NKreUsRte1OUvH;be1MJel,se,tR;!inR;!i,o;!au,s;conbr1A1ds,kn0lRtz;em;e4hn2;auOe1OXhToR;nRuF;!n1AW;erRon;!boisjo1MRdug1JJ;an0WMc1FGtrG;a02b0d01e10Eg00ha,iZk1JHlYm0nWqVrRu1ARweE;aTeSiRow;er,s;as,ll,r;n3Zr;uh1NV;a0WEeRsw1LP;l,t,y;ay,ey,iMy;as,b1F4ne5;no1MF;e064y;dj,gSndRy,z1OI;!ou;h0o;ch0dDOeUfla0TEgTia,nV2tR;icRoN;anD;as,e1CZ;ss6;laFry;a02by,c00er,is,kXlUma7or,q1ISstrTterR;!mR;an,i0;auOo;iSoRs,u;ns0VMw;g2s;!eRn0;nRr;be1LChaus8;ao,ia1HEonR;!br18Wer,i;iJr1D9s1GM;llTn,rR;banRf0ULl6m2servi1JO;ks;aRe;nt,rd;ey,l0ZPy;an,eLn51oSuR;et,y;n1ISt;er,ne0IK;cSetDhRkn6;e,m2;en1I8ki1GZ;as,b1K0er,i,rR;e,i1EWy;a37b34c31d2Mfthimiak1CDg2Hh2Ei2Ak29l1Mm1En10p0Yr0Rs0Dt08u05vWwUxTySzR;ovs1H6zy;amPd18VkHr3tH;er07Zfo7;aRb0KKe19ZiMme1NA;rd,s06M;aUeSin,o094raR;ge,i4rd;dekiMns1rR;a7eEs,t1;nSrR;d,ts;gelStR;urH;ho,isD;deLlSrRsan1GQ;iphiJy;e19Mi0Z5;cheTesShRtP7u;er11Ii0;onC;as1cop1M2l19BvR;ar1LQe1JY;c01in1EPl13moQn00pYsUtR;aEeSiRr075;geCv1MR;be,nso18Ss,ve,y;aTe81iR;aReR;mb4;ff,hAJ;eniHinoRosi1LK;la,sa;auOo1IP;arfull1GQhSoRu16B;b1LOfAla;am0B6en59;aWb2coVeJiTli8mita1I7nSsRy1LX;kiCto;o,st,we3;cRpH;ks1ss1;laN;mXFrd,so1K1uw;erje1K3pR;le13Ms;a03chaQYde18Te02f01gVm2nUoSriRtsXCy;g1I7qu1GD;ld,uR;f,ilB;is,s1;a,elUlSsR;tr0O7;aQeRi11V;haFr;brRma1GB;ec1HY;ie0U2o1LI;ff,r,sJ;irKrd;a7bWd3e124mTonSpRslP;ey,s1;d,et;anueSeRo1K0s;ll,ry;ls1;e1IZl1FErR;ia1GI;a0Cch11Qd0Ae09fn0g08harr1KRi06ki1JVlZmXoVr19SsTvSwRzt0;a7eE;e0SQid1HA;lRo,w1IJ;ig0;nRqu3tD;diC;!as1HVoRs,y;re,useddeb;eSiRo1L9sw1ID;ff,ngs1s1;fs8mTnSrRst1LAtt;t1y;be1IKs;beRe1EG;rg0Z6;as1cSAeRzon1GI;ff,se;attio1HZhoU5;moQute1HJ;erRr15Z;bro0N6m2;nd,ouf18W;emN7izi2;cRdt,kHls1ns0W0ri;hSkR;ho1G6le;m2o0S3;lerSouarCrR;et,ma1F5;!s,t;aUer0HDgRo;eSinRlefiel19S;gt1t1;liMm2rt;n,rh1CO;dis04e01gYiWleVmRr9seEwards18V;i1JMonTunR;ds,sR;toC;ds;fs8st1;ne,p,sR;bu1HH;aSeR;!rt1;ms;lRsJ;iCmR;ey0;fo7;cShl3kR;aFe122lG;e16JlG;a1IAd1erSnoeRy;th0;!le,tL;dy,gUm0rTstR;er,mR;an,e1D7;by,le0ZR;an,lesR;h11Uon;aMAe9Sh9Ni7Go4Vr45u05w02yVzR;aTiR;erzb0VFob,uR;ba;t,wa1HH;aWcVer,kTlSoRzy;tDuJ;es1DD;eRst1FL;!m2rm2;e,k;meKHuc0WU;an,elsRineEy0;doR;rf;a3Pb3Bc2Td2Re2Qf2Hg2Ch29ig1IWja009ke1JCl25m1Pn1Fo1Ep0Wque0Vr0Fs09tXvSxbur1GIyRz1BB;eCFon;al0XWeSiR;lla15Yvi0;au,rR;gRn169se5t;er,n0;a01ch0eZhYilVko11Alo1EJoUrRtlo1EJu;emSiR;s0T1z0T1;bl0DYpe;it,ur;!lR;eRy;!ul;ie,u;au,l,mpBrR;!t4;l1EKrt4;aUka,oTsRt;auRer4i2Ion,u0Z6;lt,me;me,uchA;bl0NSng,uR;c15QtW7;a03b02c01dBe00gZiXliMnWoTpC1sSuRy;ey,is0FK;in,o;cherSuRy,ze5;vr15L;!je2;h140in0A3;e1I5ga,o,sot12JvR;a1E9e5;e190in;au0RSbo9l,p1AItD;an,y;et,in,o9;!ck,le5nRss,ux;!ce5d,lRtaH6;e5ot;m3sCt10R;a06e03hi02i01lVoTrSuR;is,y5;a1APeL;le5n180rt,uR;rq1GHy;aVeTiR;n,sR;!ea;chRin,ss9;a3in;i0BQnt00UquA;g1CFl,nLre;ly,n6;l,rRtD;e0YXie,rR;e18Don;rRs,ul;c,t;n09As;aZbYckl178dXfo7h136i0RXkWlTnRo7t;!e,iR;g2ngWV;aSeRop;av6vy;p,y;!in,l6;as,on;ar,er1EL;nd,s;a02b1AIe01iZoTpSulR;on08Y;hr6;nUr01YuR;chHin,lRs01X;inRon;!e1DF;ce16Id,tR;!char01TeYTi0;li1trR;es0BJ;rg1FHsn1A0;iTnSreRs,y;il,sq;o14Zs;nKs;aTenSiRm0UAoMu1C4;gn1n;ba1D1;c,y;aSet4me,n,oR;n,uss13U;i1CHmHut,yK;aTgSreSZuR;a15Het;an,en;l,sR;!rocheSJ;aYeXfWigVl1AZoTrR;eRo1D9;nGsn0BFz;e,nd,rt,sJurR;!nH;ui0;!a1AZin,n6y;!sD;uQLyK;c0BGg0YEll;a,d3eRra;m0TNvo14A;a06e05h00iZkYlWoUrR;eSoRuc;cq,is01Ws;!st;l1nRr0QAudr137;du,ge;aRos;s,ux;e1G1w1D5;au1BQ;aUeRir1;!m3nSsnRtD;ay,e18Wo9;ay,y;i1AFmb1r1BLstHtHu1BL;d4p0EW;p,rRsJ;re5ufH;a03bles0QXe01i00lZoTrSuR;c,q1E5r1sJ;ay,eu18Noy,uB;cVisUrdTsSuR;chArg;q,t;!iK8;!bela1D3;!q,t;ay,et,in;en,ll19V;!au0OVe,rRul;g0ry;!so1BMy;le,nt,rDx;a08e04iZoUuTyR;an,d8er,sdR;aBeE;ck0e,geo0YYh2mmond166ry,ss1;g1DNig19Sl0FAm6n,uSwRz15G;!n0V6se;a7et,iSsR;e,s1;ll0AKn;eUnkw08CsRv0;coEdR;aBeR;llK;ss8;au,nn2rZDsSuRwi1EY;mo189x;deEsRzH;er,l0;bbBeg0gViXJmmeh,nUpSuRy;lt,s;eRie,pi0;au,r;o,sf0LJ;aSoR;n,on;ni0UV;aCb24c22d20e1Yf1Xg1Vh1Ti1Rk1Pl1Jm1Cn0Zo0Wp0Vr0Hs0Et0DuYv0wUySzR;a,i0o9zi;eRon;l,ns,r;!dTer,iMlSnR;e0UEiMs;e,iM;!aEeE;a04b02c01e00gXill09Ula1CCmVpe,sUtreTvRw9x,zie1AK;iKWreR;le0YR;!leEN;m2sAt1DU;a10JoR;ul9;aSe,hRle;an,er10Ct12Y;l,n;s0FNyi0;et,h3inA;ek,lR;a7i0;i4n,uO;h,tKy;sStR;al0eFie;ant161ey,ou;!a01e00geZiYlWmUoTr9sSta,vRw3;al,i72;az,ey,onne1C6;ch0pt17Rw;an,eRoy;r,sn16Ot;eRot,y;a1C1y;a,be5o0XC;!v0YM;!n,t;iSnRzi14H;!ge;re,s;e19JhZV;dSks,lRn0HX;an,ey,ittBy;na1AJr0YFy;aYcXdi0eWi0l1nToSst1tRusz;a16Aig17W;gh1BQh1BQ;ag2eRol0I8;lRnfe0LIv0Y9;ly,y;g2ll09R;arl15BouF;gTh1BKlStR;!el1B2i,o;ds1;ay,hR;ue,y;aiCbWeViTmWRoSpiR;er4g17J;n124t0WB;ce169nR;a,e,g0O8o;n9rg1BAy;ro0UZ;!bO4cVeUiTlRt0N0;aRi0o;n,rd;b1v2J;go0UUnc;e,imas0LI;is,uR;chP;g0ZTn,rRs1;e,on0O7;an,erRim,or0YPr8;!ty;anRge1CH;ie190;f3ny;!rRts18K;iMks8;dRet,i0VDon,r0XDweE;!r0XCs;ia,kRquLZ;e1C9stad0;bWie,laVrSs1uR;ck,sh;a0OEoR;us15YwoR;ls15X;n0LSs15W;eFinLy;a1Sb1Qc1Jd1He18f16g0Yha0YQio0Xj0Wl0Rm0Kn0Fo0Cp0Aqui0Gr08s05tXvSx10EzR;az13Cy;eSiR;lo0LKr2Lta;lSrR;e,ny,si;lN6y;chPda09KillXmi4oUtSuR;ll15Kr18D;aRri17Y;mi;mRr4;asRma0V5;o,so;io,o;al16Aco,en19Vhni14Ele,nSsy,tRy;as15Cefa153l0;a7ey;adRig6Gks,o16Cr8;do,o;al07UiRp095roJ;et0XKn1AH;nSrRtt0TT;e,io;et,pelleW1;aUc0ell0TQgTh,kHniMoc16BsmoSuRwoodP;nz152;or,re;le,waE;n,rd125;aUeTiRop13BpGIu0XB;cheBnNtroR;ff,v;l,nt;rSssi17Wt14GuR;lo,rG0;co,e,z14S;aUeTio,ks,lRmo14Coret1A1wi185;aRey;b0TEi4;aGIl18Ro;i4l18Qu0X0;or14Mul14M;ia,r14L;aWby,eVgi196iTm2nSon,uR;er0R8gliel17L;a7e;aRovAQrola17J;co17Intomas0U5;!n14F;eRna7;ta144;abRio4;io,rFI;bYcWdeVl0THm19Sn,rUsTtDudeSzR;!i1;!pa7;!ch14V;ce,e,no9o,re,s;ri16K;!kR;ho15Q;boEel;iConRunyk,yk;a19Ae;aWeVha7iUkRlaBJro0TF;!eSiRn0o,s1;e,ns1;e,ns,r0M6y;c153nt13V;rNsa4;i4pr13T;!bBernRlNW;ar15G;b10WmUnTsRu,vat9z;!perR;ei15Z;ton13N;a137e5os;aTerSoR;et,r8;elBre;eRl0n9strHvern14H;ne,se;aC2bBHcAEdABeA9f9Wg97h91ibHj8Vk8Rl6Km5Qn5Ao59p4Vqu4Rr3Ys0Zt0Sur,v01wYxtWyTzR;ain14VeRiHy;e7Iry;!dAeSgl0LPo,sR;iCz;lBtD;e15LraR;!de0TXze;a11VfaEiRol0W3;nRtt;g,t0;a0De09iZl3oVrRynI;eSieRoe14K;n17Ws;eRux;se,ze;e,iTlSs0WHyR;!au,o;d0in;d,sy;!cZenClVnTrSs,tRz12W;o,s;gil12U;ceRe;!nt9;lRmo12C;eRier0OYy;b1mu4nXJrR;a0WFoy,s;!q;au,l101rRse;!aSbo9cAPeRgi0;aux,ux;!c,ux;nTrSuR;drD9x;e2Uie18E;ey,t0US;a157chev11SelBhourvenAilliDAloWoTtR;mRo4;an,e0VA;mma0S0nnaRuc16W;ncR;our0VQ;ff,r;a2Ib2Cc1Xdeve16Te1Wf1Sg1Lh1Hi1Fj1Cl16m0Zn0Wo0Rp0Iquin0Hr06sZtTueFvSyR;!l0I1;agGea183;a3epha11ViVouUrSvinR;ce11O;eRijk0oismai10;e,mpG;chGn9;mauv0T8n;aSinRolGu0OL;!g16L;iTlinGnSulR;es,t;de,e;llRnt;ie0UQy;aZivYoTuR;es,iR;ss1C;b0ADcheUsTuR;le5sseR;a17Kls;by,es,ie0UJny;rs,s;ea17HiE6;bRm15nJOsoi0UG;is,ra9;c0L3d4;aWerVinTlaSoRrGut12;c12DntLrtGts;s,ts;aRs;ce,sJ;n0ULri0;rSt9uR;lt,sG;d,o9s,tL;!rTta,uR;rRsa;cy,d0UV;c0L8mR;ea170ie0U0;aYDe0CXoR;mme16Nux,yR;a16Xe0TX;aTeSoR;n0LDrm0Kuli15J;!dt,ille0TUno0V5t,ulG;iTnSrR;a9cha9is,qu9te84;chGgGo0V2;so15E;aVe146iToR;geLngchR;am0H3;erRppeL;es,rG;ndGur4N;aRour06U;do156rR;di155la9;co,gClRn0Q4;e0KXva;aSetrGoR;guG;iGrRute0T5;na9;agnGe14YoufWrR;anUeToR;bo9seiR;ll4A;n49s;ds,gG;fGrG;ay0FBoR;nt0JQrgSssGurnR;ea161;es,uG;iCnnX2rrGu4ve;a02e0ZLhVoSroiselR;leL;!eSlomb3ZmRrm3ZstGte02u0SW;bGps;urL;aTeRiev0m15Do0SMry0u0YT;neYvR;a15Re138;lTmRtele0K8;bRps;auOrG;as,e0K5;m0G2rRuO;affGds,reRt;a15Ks;aUecque0K1ie147oSroR;ssGye15I;is,rR;bGdG;ns,rR;a0JWrG;br0UYc2VinWlVnUreTuSvR;is,o4K;ln3Ete0S4;nnG;t9y;ab0YOl3B;de,tje2;a0Ib0Hcy,e0Fi0Ck0Bm09ny,o00rXsahWuVvSwRy;ay,orG;aSiR;e153lB;in,n;chPit0s0XQ;ag;eSienRy;!n0LK;ca,r;beFchYme,n113o,pe,sVtter0HRuRy,zBD;aTcSen,sR;i0sH;hPk;rd,uO;aSby,e,iR;a,erL;!r0YR;e0EPie;a13BiR;d,ne,t;o,s8;bStRv09Y;i0o;oy8;!n071peRx;nt65;r0PRy;by,il,le5mo,p0UJspKvenH;a3iRoy;lSnR;d4t;li8;a02e01iXlan0QQoWrUuR;tt0yR;jRsba0QM;al1;aRin10C;et0tt0WQ;des141ix,mereudalig4n0UBt,urq12T;eSnR;ci0te;rRt0QF;c0YOredeberniscalv0TT;auOd0QDir0YZlXTnci0y4;do0DUl00Lni,pe,ro9ssilRtPuc0YY;i0le;liv0LTm,ne,rs6;a04b13Ee01g,he00iXnVoStR;!as,on,re03Ou;!bS2fr0XUlf,mmeKnSt,yR;e0QRon;c0HFv0P1;eRie,o;ny,r,t,v0OZ;c0HCel,g08Fll,m140no,oFsSveR;rv0OX;c0Gon;y0z;au,cSgr9hog129s,tDveR;!rs;ha0L3;iJnRttGy;to9;a0Bbro0Ac09e04i02mo122oUpsTro,uR;mbr0SCnbru0BHth,yR;!ld0;ey,t0;ite035lDAnUo0QArTsSuR;chP9y;cova0XCko0YX;asJe;brTce5tR;br0FJgaRig0Y0;ilPI;eun,un;niRs0ZJt4;!ac;a130dy,lo,nUo,rTtR;rRte,ure0PZ;e,iIop0VD;l9o0YFs;i,ou;huI;s0H4ws0WY;iYlXnWrRt0V9urai0YYy;!a,b4co,e0ZSg10AkUsTtRy;el0OViR;g0XLn;!ac,e;!is;!c11Age,thA;sy;o,so119;a0Ube0Tco0Sd0Re0Lf0Kg0Jh0Hi0Dl06m04ne0GUoWpVruKsoFuTvRwai0Y2z0WI;aQFec0VKiR;gCn;b0CQcaLde,gR;a,re;orDr0RG;c111e0VNge,m0PRnUrSs0RWttiLEuR;c110ghe0ZUr0YEv0QN;!eRge,i0DEme,t;n0TYtDy;co0N0gR;!cSueR;ep0S4;ha0I9;aRiV8;ge,i4rDs;aTer,iSoR;ue,w;gaEs;b0A6fTniTTpSrd,tRvedo0BY;or4;os11X;ortu0ZL;asJcer0FPeTgnYSneLq10NsRva;io,leRs0;!martHra;ge,l,nCreLtD;aRougC;es,lB;a0XIuidi0XY;g5osJ;eVgliJigCll9piUrTsRtoiBu4z0P2;dernRelUZtre0H9;ie0ON;iq10C;er4ne;uw;ot10Vu0UM;l,r0X0uF;cq107uf;b0Pc0Mdur0Lf0Jg0Gh0Fi0Ej0DlQCm07n05p02qu9rZsYuVvRwa4yK;aSictR;oi4;ltrPuR;!lt,x;m0OOnSrR;e,i0GO;ay,e,ie0J4o9;alBse;ge,iv0R1min0Q8oRue;cheRd0YOn0WOsb0UF;!foucau09PlB;lanSoR;inDth0YL;c0ZPte;auRdKeWEgBnEVo,ux,y;d0QUze;aTbSirRot0ZM;an0WG;ou0YN;dSrR;e,re;eleiC;ar0UVo0ZJ;ne0PVrK;aPoussaZun0N8;ar0W8e,orgeSrR;a0TWee;nd0QI;aVoRra0Z0;nt0EArest0QGsJ;antaT;hesnaSoR;sDur;ye;arToursSrR;ie4osJuye4;od0Q9;re,t0Z1;erTi0P9oR;n1SvaR;chi0WS;legaQver0RX;aUeToR;ie,nRr00Jurd2y05I;ckhee4g;an,rs6s0S4;d1rR;la9;aVeSoRud1;ey,n,st0SIu0MNy0SI;er,mSn5rto0ITt4uR;rGs0WH;!ptinC;as,erCit4sq0YOut;a0Be09hr0ZHi07la05o01rUuR;eSiR;lBre,se,t4;s,yt0;aTeSoRucWX;otKsbo9;!a002e,gor0TTni0s;ce,iTndRy;!mRp4;a0WWo0TB;de,s;ix,nSuR;ff,in;g4zR;ag0Y9;in,nR;d1f1;ovR;anN;nRte0;e,nG;gCiTlifAnSrRsYPuc0XZ;iONmend0YKriON;neLo;ll0;a01e00ilipZoWrR;aReit0U8i0U8;iTnR;cRq0WF;es0UE;po0SQ;e,llQ5nSorDrRuAy;d,e0W1ge,t;d,v0KB;po;li0V5rr0OS;iMTlkRuw,y085z0SZ;ens0AD;b,g2ks,n,rRvy;!iMy;ch0B7en0QRiSoR;bbelae4uhA;c,eu;a0Le0Kha0Di0Bk0l08oXrR;esCoRuy0XK;iT\xFFR;!roeR;ulx;seRx;llG;ck,e00igCnnZrYsWtUuR;rSsseRte4;!rg0X7;c0CNp1v0YT;!a,eR;au0KZ;seLtR;a,e0FS;by,d0LOmi0tK;inI;ne,ur;aSoRus3;it4s;r0s;aRc0RTnt4;nt9;mVntUrTtSuR;lnGme,x;ig0SW;d,n0LD;!al;b4pR;la3s;a078llGsa4vi0X8;dXi4mWnVot,rTstSto,uR;s8x;el0P1re;ave0TJdRetDi1l,re5ufHy;aill080en0SS;!b4tP;!pL;ar2ilh07X;a08e03i02l01oXrUuR;cUQh2i4lBre,ssR;at,cRie4;he4;ay,ieSouw0uR;in,yC;!nCre;er,isa02TnTrSuR;gh,t;ass0BKd;a05Xne,v0IO;aiGCe,o9uc0VZ;da0GPga4l02K;auri0CSlleTrR;m8nR;ar0UK;au,fR;eu0IHoQ;ille6Lne,r0TAttRy;enR;be0UT;!c1kVl6nUrTse,uRvi0XDza;dRlt;el3;au0O6bo04Mdu0SOm2;dr9e;!inL;b3Gc3Edd3De3Cg35h32i2Yk2Xl2Gm20n1Bou1Ap17r0Ss0Ltz,u02vTwSzeR;!m0WF;eLi0JU;aYdim0M3eViSl0VLrR;e5ie0WS;au,dSeLgnKWlatRo;orG;a0KKoSU;lSnRy;ne,poF;iCuy;la,ux;b06d03ghD3l02m01nZpWrUssTtRvi3EzA;a0Q6eRh8Ut;l,u0PR;in,y;aRiz0VPy;is,t,y;hinSin,lR;aiJ;!a9;a9oravicR;io0O8;a0K2e;ne,t;eSiR;as,er;ga0DRl3;eFiR;gRn;e1ny;cWkVpe,sUtR;iSoR;li,us;!g0QT;i0yl05U;ev0RT;en0NIh0CE;!a04b0T2che07Sde56e02g00ip0UHlZmoW5nYoXrUsiTtSvRw3;auOe5i0W6;ez,o9;e,g0QM;aSiRo9;ce,go;c,gh,h,r;is,sa;aj0VHet,is;ey,iM;enRiKWy;c098s1z0PL;nRt;be0T7ka0BJ;by,c,g1ic0U3me,sC;h,onDpeSrR;a0UQendes0MUiB;n,rn;di,st;a0Eb0Dc0Bd06e04f0SQg01harg0U1iel00j0V6kZnWquHre,sUtTus0v0GMyRze;lkRs;iw;in,re;auOerR;e5re;eShaus0is,oR;nz0P6sA;se,v0GE;o,s,u0T7;lo,s0JP;eSla0QIuR;ay,eg0;la,rf022ug0;au,stR;eu0O5;el3oUrSuR;raQ;e0CTiR;eu;ff,is,nX4q0TH;oRzin04Q;es,sJuJ;re07Ju0S5;h0TDuO;a03bYeXiWmVoSphoRquAy;usJ;is,rSurR;an,s;a0PKe;iz0OJ;aNco,r,se;!r0JI;oTrR;eRo0OE;mo0NZv0FN;iJurR;gGn0HN;nStR;ha,o;e,t;be05c03e00lWmUpTrympBtSziR;el,llK;er0O6;e0J6hoQ;aRe;ce,n,s0NX;!aTeRi0on;!geersheRng0r0HC;cq0SO;i4mo4;c,rAsRy;io,saR;nd0G9;anRh0ouF;ta0Q5;c,rR;g,t;in,u;gTk0QMlRnK;ey,lR;ebou0QMon,y;le,ne5;an,lSmR;!an,er;!er,sei0P0;eWg,hVnUoTuR;eRil0S3;il,r4t;s6Uu0IF;aEo0SR;er,uiB;na9sJy;lm2;ar0NB;an0GLcar02GhYOiRos0T6rGun0LX;er,uk;aTbadPin,lVEoSrR;a0Q9o0LX;nv0EFus;nc06Ste;aGIeFWhAFi9Vl8Smi8Qo2Mr13such0CQuYv0SMyUzS\xE1cR;erG;ajRer00Sop;ko0BF;piTrR;!enCiR;er,lB;hot,ot;b0Uc0Sd0Re0Pff,g0Oi0Ml0Hm0En0Ar01sYtUvSyRzn0;en,l0;en,illR;i0on;f0Q5hSl0m2n0EKro,sh0B3tR;er,iM;aCbertR;!s1;aShRiIs1t0F5;en,iMm2;ck,n0L6;a0I9eYl6oXrTst1tRw3zi;az,e5iR;n,us;an,eSiRo,y;e09Vv2;n,rbrigR;gs;de5nCtD;!a04Uux;eSha,niR;g2ng7M;gRo;on0NP;berSminRuyh0E0;gs,s;bat0OLlaQ;beUet,ha0LAi0PQjZWlRv0;!eSiRt1;mo4n;n,rs,t0GOy;rts1;ba,er0G8llRn,r0MN;e0G7ierT;gy,nA;ll0RFnoQrR;i0ri0;by,dFY;ciolRhure2ks6;et0RP;aynGi0S1;a10e0Ki0FoUuSyR;a0QCer,sl0tG;ch1iJmRssA;iCly,p;a0Ac07ftLise05ke,l3m04n03o00queZsXtWuUwTy0RYzR;eRi0;!r,t;!eOEl6th0;ch,sR;e01HsRT;e5os,t07B;by,l6ni0sRto;an,e0ROm2on;lo9;kRzy;!sR;!hOU;an,en6Pi0AKk,stea0Q3;ie,me0RIp;au,tR;!ie4;e,hSkRq;er0EM;et0GWon;ch,n;ck,e,lW9sStR;chl6es;afSe,pRti02W;i02Vo;ul0P5y;a05ciCe04g02i00mZnApXqu9sUtSv0D7wR;!elE;eRot,zm2;!l,s;p3sRweE;aRe,m2;c,ty;auOeR;au00DlB;a02Om0o;gRss0;ht1;an,gRhe0B9o;!an;!lm2ry;m0nXS;btr0GBco,gXiWmTnSpoRr6ul6w000y;!nC;daEe,l6t;!er,n0oSpR;!e,on,sP;ul;k,n;an,g2noR;liN;a5Sb5Oc5Hd5Ee0H9f5Cg58ha7i53je,l4Km44n3Do38p32qu2Zr1Ys1Kt18u00vXwUxSyRze0OU;!le,nK;!e,wR;ortN7;an,eSh0FMie,n,pR;laQ;ll,n;at0PXeSiR;er,lli1;n6re0Q8y;a0A2br0Vc0Td0Resl2g0Pi0Ol0Mn0Kp0Jr05s02tUvRy0;e09VrR;a0JHeR;tDur;aWeTinS8o,r0D5ts,uR;!e,rR;e,i0;au,lSnaPrR;mar05Xo09O;eY8li0;nRrd,ut;ce0IVt;e5inSsR;e5o09J;e5s;a03b02c01e0GEgeoBnoy04Vo0PHrYsXtSvR;al,ilB;!eTiSoR;is,re0AP;al,en,g0K8n;!au,mRv0AN;anc0NY;ol08Jy;auSi0oR;is,ux;d,lt;amb0SelBh26y;er1i0o9r1;ge,nt,uO;al,e5iVNry;ih2seEtR;er,ry,y;a0NSbe5l,oRt0;m08Dn;llaOJyk;hlRn1;an,in;e,rR;ay,et,y;!hR;!our1y;oRun;nRu07I;!ne;a01eZinYnXonWtRu2y;a7eTiRon,rAy;!nR;et,i;!n3XrR;!eE;!n04;am,o0CS;!e5ot;!laQsR;!l0NS;!rd;and6e03gr02in01mZni0perYsXtR;aTeSiRo07G;!ch,lBn;!g2l0NN;!nSsR;ch04Q;te,zo;!et070i0OG;ec;aRouXB;!t0GI;sc099;ay,o0H7;le0OAn1F;a0Qb0Mc0Ld0Ge0N7iLMk0Fl0Em0An03o01p00rVsUtTvR;eRilB;si0;e0GRis;et088in,oZS;!aUeTiSoRve5y;n,w;e,g2ve5;c,ia,nD;d082w0B2;or1r1;a,nR;!el;eUiSo,uR;!d,t;c,e4lR;le5;au0HBc0B0e,illY5lRr,tI6y;is,lR;!i0;aTe5iRo0H1;er,nR;boe0JV;n,vI;ey,iIL;e,um;aUeTi0oRy;ba,nR;!ni0;au,li0y;!ll0L6s0IE;or2;eTiSo0C5ussRyZ0;ie09G;e04VlBn;au,il068t0AIy;n0CFz0JL;eSiR;er,ll0BXn;rAt;eVin,l6pRs0BI;eSiRl3;e09RnEP;quRss;esC;!laQm2;g2kUlTmb0MDnStR;e,wa4;!eMS;ah2ey,id0IQ;e040m2s0B8;a0Gc0Fd0Ee0Cf0Ag0ilBkl3l08n04obloIr01sWtTvRw09W;eRilB;nt,rJ;aSeT7inXUo,reR;!cZWe,miCr0HG;!nt,r0I5;eSig0H8tantinR;e5idG;ilSnR;ti0G3;!l0;aRoy;dRth;o,t;!aissa0FSeSiIoR;lRDrs;l010rR;!oy,y;e88in,oR;g0KQn;ieUJlanRor06D;d,s;be0LHfrRry;oy;e,ie,oXT;au04Mie0FH;nt,rr081;a05b04d8e02mXpStR;e,o9;aSeRlaisZIs,t1;au,re;gn0APiSn,rR;et,iNti0FG;n,r1;aTeSinR;as0FM;fo7r07tD;nRrt3;da,fo7;au,fo7ll0GHr,tR;e,te;!eF1;rt3s;!a08b07c06dcoBe04fo7g2i03lXmWoTpSs1umb0DAviRweE;lBn;!itZSr1;!mbSnRpy,v0;!ey,ge;!eGKi0;a7orK;!aVeUiRon;a7er,gDInR;gRi,s1;e,fo7;!la,mo0EOrAs1ttK;do,rd;gn1ndrG;gRm2s,ttHFy;ro0E4;l03No7;eFon,uSI;bCMc04CfoFgiaco0HYm0EInge0K8rd,s;f07QgnUmb0H6nSpHri0tR;e0KSou;!dri5teR;!au,rH;aTey;an,d0L1e07OgThl2nR;aRe;c,rd;er,i0J9;fRoCre,sYU;eHEi03V;eRliM;!beRr4y;cq;hTkRol0FGu;buS1erRriE;!h067;aFeRl3oLHranKu;nSrRt;!ie;be0J6;a,bTeSieRo,uRV;rs0EB;l0JKrt,t0JIy;!an,s;c0IRdy,lRstGt0JT;!ie,li0;kiR;ew0J1;a0De04i00oUuRym0;e0KAin,k6mpn0ne092re,sR;e5iRse5t1;auTN;at4ch0g0BZisHmGnWFp3r07PssVtTuSwR;!e0HC;at4dep0EVet02Pgh,st1ti0;!uR;c0IFs;!e08Uon;c0IDnStR;esJher05X;!chRe;!amU3;aWde,mTn0G3rRsJwe0JX;c,ge,iRk,ou0DF;ce,n0EM;enRmo0I7o0I7ps1;ce5sRts;!at,on;ne,rStRvG;h0on;hih0I4wa06Dy;e04fl3i01me0I1n00pYrXuTvRxt1ypi0JO;eRi0;!au,l02KrPt;chTsR;en,iRs;er,ng;er05O;dy,eJ1ks1m0G4os,t1;in,pRro07Q;!e07W;cy,g,n1;ng,rR;ea0J1moRo2B;nt,unt;sRys;!se0HM;a06b04c02d,e00fZg0GKlsKmYnWoVpr09WrUsTtSucciu,vaR;di0li0;o2Or0DW;i04se;ce,i0oc0E3roCs;l0GXt;el0H0qR;-ma05Qui0GD;in0BBonK;fo;pNWsR;zyW;cReroNoC;ariACiu,oC;aReF;rd3;ncio0HVrSzyR;ns0CK;dTTlR;a,o;a29e18i0MlebOImile00To07rXuRva0GIwe;!a0AEbVgg,lleUAngUp3rSsseR;re098;as,chR;!iEwa7;!ful084;ac,b07Ary;eZiRystofa04L;q0FFsR;ho0HtR;a3eViTmaC8oR;ffeRpheR;rs1;aSnRs1;!-saint-aG0;ns8;ti8v067;!i03l01mYnXpWquArUse,tTuRw,yWA;aRin03ng,pingoS2;n,rt;a7em;au,eRus;l,t;chSDin,p3ti2;a7g;ba7ed6iSyR;sh0C1;c0BQl01S;aRetDlA;rd,s;!nRsy;a7ie4;a0Bb0Ac06dKJgJBk04l02ma9n00oYpXqueWrVsStour0CIu,vHzR;m0H0y;hoSoR;gClm;lm;iae0D1on;!t006;chaJewy2pa;dRvit01N;iNo;!g,iR;c,q08N;dRl0C6shJPt1;!reCFs;ahaRhaN;ki0C3;co0F6hSoR;iCr0F9u;akM8ipR;e,pe;ok;neJss1;!b0PcrouCd0Ne0Mf0Kikhelze3l0Im3Kn0Do0Br03s00uMvR;aWeVig0BPrR;aSeRi0on;au,fi03Ll,ry,tDuOJ;iRrd;nv021;au,s,tD;gnHlSn2OrPuR;di1Lx;!eXBi0;!b030in,l6neSsR;er,ie;au,veF;aYSby,edarXf07Fh0GViWkVl0B7nToSrRubiN;i0y;n,ux;eRo0C4;s0AIy;ao0DNez;es,f;yk;n87uehR;in8;!aUeTiSk,neRu;q0DHtD;a0CJer;au,d4l,veGT;il,rd,ux;ag0lRn0t0CG;ew;!devRf0;ergCilB;n6s09Gva02Zzo;aRo4;le0FX;in,rR;a,ou02G;!b2Ld2Kf2Ig2Hi2Dl29m1Vn1Louig1Kp18queI7r0Ls0Et08uZvSwigRyQCz0G7;noinP1ou2I;aVeSig0ANoR;n1Ry0;rRz;lRt,y;an0BT;neRtD;lBt;!bYchAdiXffo00BmWnt,ssTt3vR;eRin;au,tYE;eSoR;nnA;!gr07Wl;eH3o092;er,ll1;eFo;al,eTiSoRte044;s,u96;g0A5ll1;auSlR;!a3leVXo9;!lo9ne0BQveF;aube0A1lGpo0F6sUtR;aMeR;ignRna02X;er,y;agCeRie;!loRy;up;a0Cb0Ad07e06i05l01m2n00penZrWtTuSvR;a08LeYT;er4;erLi0on,rR;aRe,in;in,nd,w,y;eSiRoFYu5;erK;ti0;!ti0;e5l6;aQeSi0oRt1;k,p3t3;bo9pRry,sw0C1t1;la3;g099h;l,st,tD;!onRr1;!a9neR;re5t;onnRy;e5i0;de,ux;a00dZeWin,lVm2oUpSr1uR;t,y;elRr1;!l0CB;n,t1;e5in;au,lRr1;a3eMQiXHlR;an,e,ie4;elRR;c0DXdRis;e5os;anAonA;a7cXdUe,f33g,kaCnTtRu;!eloRig08TreE;is,up;aBPeEon;eY1oR;iB3nR;a9n03E;eRy;li0rR;elB;a02bVel08Eo9pR;!aSbeEe5iRla3o0DOy;g08Ion;gCnR;o9y;aWeSly,oR;n,y;foFrR;lRot,s010;aRin;in,nd;ll1ud;ilRnDOrd;la7;iSk,le,me00Bn0ou075uR;mHpe5t;fouRne;r,x;f,gnTll07Wne,rAsR;e,sR;e028on;aUQe06E;n1ot;f0icoR;inA;iL8r1wiI;a,eSle,oRri0;illeSJt,y1;l,rt;a0Bc08d07el06l03n00rUsTtSvaRwiI;ll05B;chTDo;s0AGvA;anto0AXch07Dd2eViTmina095toSutX6vaR;ntG;siN;co0AUni,sR;a06Hi0;!nz0BWtX1;d0C6sStR;e06Nis;i0ky;aQeriQXlSoR;ne,r1;a7e,i0;an,eu;il07Rr07G;cRi4;hetRucVV;o,to;cy,r0AZs0BV;b5Oc5Kd5Fer0AYf5Eg59h58i4Yke,l4Gm3Vn3Fou3Ep31q30r1Os0St0Gu08v01wZyXzR;aTeR;lRn14s,tD;a9i0;!b1iKElRuOva05T;!eRis;!de;a,eRia;n,r;st1thoR;rnK;aWeSiR;c18o0A3;!llSn0rRz08K;hiEly;ec,muR;llA;llaY8naUL;chXdeWfIWgVlUmSpolL0r1sRvY4x,z3;l6signM0;aRe,o05D;rt3;!e,fIS;hl2;n,r2;on,y;aZchewYXelYhVin,l3m2ry,tRud0BXy;!aSeRin,on;au,m2;bRdc0AQ;ri01F;a09KcaFeRie;rRy;woZY;!anUXliPQ;fSlRn0AKr5;a7GogC;a7or01H;a0Gca0Fe0Dg0Ch0Ai07kPo09Ds01tRvane2weE;aZeWiTle,oSrR;ataXLid,o;nguYI;llRn;eRo0B3;!ro;lRn,r;!lR;!i,oMX;g09BiMra;!aVeSiRon;n,o,s0AUv07K;!lSnRsJtDvLL;eu041;lo,ot,s;b1gnGnYBr,t;l090mZ2nR;!gR;!hi04I;aRet0A0m2;baI;ra3;llRne074t;a,es,i;gnJRnJR;!calVd02YlUuTvR;anY0ecR;ch09P;b1lt;e,s;en05F;a0Yb0Vc0Ud0Qe0Pfn051i0Ok3l0Im0Gn0Eo0Dp09rZsYtUuTvR;aj0AOeR;ll,r,th;el,fHl08I;e,hwrTiSoRwrTy;is,la040;er,g08Js;ig06K;t06YweE;!eWiToSri0uthR;!eX2;n,ue;erSgRl09EnOZsJ;an,n2;!eL;!au,iTl,rStRy;!ot,te;!e,ot;a,ra;enTiSonR;cy;n,o;et,tKE;!beCll,nKs3;ah2eRovaB;!gPll,t,y;an,ichaHoR;dy,ni,si03E;eViTo2XsSuR;cT1er;en,on;!er,nRtTV;!e,g,i;!au,n,t1;gn2otDsJ;au,l07MsDtS8w;arKQeTiRonRCucSU;ff,ll1nR;!al,et;au,moCn5r1;a07Ghi05B;erSonRy;a05Je,neHR;ry,y;c045gNAmTnR;d,gRi;e,iK;ag02U;uerH;d02e00iZlYoWpTr1sSuR;a02Rst3to;el,tiI;ayKeRi0Ol1;!lR;a00Hl5B;n05HrR;iSAusc02U;an,et,is,o08R;el084no,strS5;lRrXD;!i0lo;evTY;etDs;a01cil06Qd00ge,iXnWoVtRuH;aTeSiRlebrVXreEweEy;!e,ll1;!au,l06N;is,ra;l,ni03Q;a08Dey,on;ch1e,no,q074vAzarezR;rodriR;gu02X;fie,ie,on,y;an,cUma,pBrdRv8;!bR;laR;nc;!hi084;a07b03eZirBDleVIo9pSro085uR;!sRR;!aTbSd1e5fF7hHi1li,oRsaE;!lie07Es;elMY;gnTnR;a,el064iR;el07C;aVGot;!lZ4rR;er,lR;aX9inR;!g;eTiR4oSrR;ay,ia;t,ur9;ll,rYX;cA4nTrRsJ;ai4delRet,go,ra;!la;e,n;a06bHTc05d03e02gaTZind02Lki068lVm2n2oUt1uTvR;eRo;!rt;o04Cya;t,uGO;aVeUf02GiRon;e4gShRs06Q;oo;an,n1;fl06Ki,ya;ghT4h2nRry;!d0;g2n6vTN;erRoro05CweE;!i05Eon03U;agnZRi;bRdo,ge,is;ak024reJ;j00QlUmo,n,rnTsR;ey,sR;ac,eW3ie;ey,s;hVlRteBW;aOJeToR;l,n99tPRuR;etPQx;!te5;auOi0;aCiE;eUlR;e,iR;!e04XoR;stT3;!la9;aT1fr6;a,de,eUiToSrRy;in,on;rAt,uT4;e06In;au,l04QnOHt;chioTe01IheSiR;uc;liev4ry;ne,tQR;aSeRot,r06P;do02IllYR;nRrAzi0;a,ie;aMLeG6hG2iDWlCHo67r2Fu00wZyR;a06IeXkeWleVot,rSwR;at0;am,nRo04T;eRs;!r,s;s,veEM;wi02I;rs,tD;en026;!bi0c1Ud1Se1Qff1Pg1Nh1Mi1Jj1Hki1Gl1Am17n13o12p11quAr0Fs01tUveTxt1ySzzR;a,elKUi;at,s;te5;chWe5lVtRzVE;!eSinRon,s;e5g,o;au,m0rRt;fCUy;er,in;aFer;at05Lby,c02e01hZilaYkXqROsUtRweE;amSe02Gil050oR;n,s;enD;a7eSiR;e4ng;au,l006y;iMy;ccQN;!eRueFBy;!ll,y;vest4y;aRh;gl04J;b0Bch,d09e08fo7g05haFk02l01m2nVon,rTsStRweE;ch,neN0or01B;ey,on,taE;!a01Be0Hi05HoR;gaYYughLwL;aUdt,eShQYie,sR;!i00L;ll,tR;!tK;p,sh,tRy;cu;a,ey,ingE6;eShRi0F;ar03R;!tt;eSoRy;s,yC;!auOrs,ss,tt;au,k,lBt;an,eRiI;nVXtS8;ee,rQ0;er,re;na,rs,tK;claTdoIel,gSk0loIn,tR;!iMon;ay,e;rk;ayl9brRUpR;!aR;ss;g0hVi028lSteRwiI;au,y;!er,iSocR;h,k;a7s;er,oG;nshML;aRe5noMNoCR;ra,tOK;!es,sR;sRt;ieZLon;ay,l0;aRbTXdaBgH0l03LnAon,y00E;j,rA;a7et;cRno,t;hn0k0;d,geRze3;!on,ss;ci00hWkRl1;!eUinTleK1mSnR;am,er;an,ey0;ghPKx;lIMr;an2el,koTnSoRs;lz;er,oe;wsHV;!no;a2Ie21i1Bo0BqlGuUyR;!aSdRm0sWB;gGon;nt1u;ba020che06d0e05g04in02jPlZmYnSsRye4;ad3si0;!a02PeSiRn0s1;!er,on;au,lTtR;e5tR;a,i;!lZW;!a,bC7n0;e,lSoR;n,tM0;m2on;!sR;ma;g0ni0ui0;l,ns,re;si,tt;a0Obe00Oc0Fd0Be8Sg2hl,k0AlXNm08n05o03p02quAs00theRQuVwRy0zoLE;!nR;biEeShiEiMleRrigg,sED;e,y;!ll;a7ghUillTlli4sRt3x,ze;e,sRt;a7e5;a7etD;!t1;n2sRt;a7e5oiMI;hy;kGmRshooMT;!f9O;eSgniaFsR;a7on;se5;eRl6wiYX;liM;aIGer;eThSieJ4riRsGN;g012q012;ag8;r1Qur;a7co00IhVkR;e25leSm2sR;miZN;bRy;ank;aTet,uR;!corriR;ve5;eFrd;dRt;beOhYY;a0Ec0Bd08e06ffe029g03kn0l01nWonVquAsStt1w0zR;za7;!a7eSsRtG2;a7eBWon;bo9to00M;e,ne;!cUdSkRn;maWI;aRle;moMF;e5k;ay,lR;!aV9on;anSd8gs,hO9nR;ac,on;di,ti;!n,rR;e,t1;auOeSgeR;m2r,s;au,lBn,t;auSkRoOW;!atGey;d,lt,t;nXHrRs,uB0;d,t1;a06b05c03d3e02ga7i01kkeD6laQm00nZsXtTusSvAwRye11za;er,st0;sa7;hTonSsRt1;c08ky;!io,nA;ePUoLS;a,l3nah2sR;eB1oN;aQ2doIhol8iHne04z;auOm0n0;l66siYR;d,n,se;htelsRk,q;bau0;e2i36;k6rd,uJK;baUEc0Ld0Jg0Ii0FjB0ken0El6m0Dn05rd,sZtXuTvaUEwl6ySzR;eU0oYVziH;!aUC;chBd,er,lt,nRs8;!beZKeSig,scR;hneid0;is,r;h09koRt1;!vH5;cUe5i0ka,sR;a02eRfo7;au,t,urR;!jeffr6;et00CouR;pe;cVdTg0nSscoRt1vo8WzeE;mb;!iI;!a,eRt,ys;is,nUYr;hRonYK;!aRe;rd,ud;!an,bBie,ucJM;!bTJ;l5BnSrl6s,thR;waiD;!ay,e;agnoZDd1eloCgED;buXFdy,eRiMly,shIB;r,tD;eUhAkSqueR;moTI;!eRl6;n,tt;!l3;a5Zb5Yc5Rd5Me5Ig5Eh5Bi4Ol4Hm4Cn3Ho3Br2Os29t20u00vZwWxe9MySzzR;er,o;anVWcTeSgo,ko,lRne,te;an,eL;keYBr,s,tt;e,hG5zOL;d8eSleRm2n,y0;s,y;rLs;a,et,k;a1Obonn1Nc1Hd1Ce1Aff19g17h16i13jeOIl0Wm0Vn0Uqu3r07s04tWvTx,yCGzR;aCelXPiR;dy;eSi0rR;etI8;r8Kt;arXeWhTiSoRrAte,weE;n,tKu;er,n,r4;iRotI3;er,llR;etDi0;ilBt,vKG;d,ic;aXVhSquGTseR;au,rt;ie,o;asU4b09c08d04e4BgWh9lVnToSquRrLCsi0;aYe,iAX;n,te;eRivZAoy0;!uf;e7Got1;!auOcXeWiVnivZ7oUuR;aSiRo3;gn1nvK3;rdTC;!in,n,t,u3;e,llaGB;at,lTPon,ry,t;hem3;aUReSoRuTNy;is,n;auL5lRre5t;a9le;erAi0;eTonR;!nR;a9et,ie4;au,l1;aBEharTHilT2koM;a,r92;aVeTiSle,oRriUItCP;gCn,t;anCer,n;au,rRtH3y;iUEri;di0gRng0rd,y;ay,uA;llRn,ssA;eRis,on;!re5t;allasT5id,ouL1;eRht1ie,l0o3r3G;!aRMt;a7o7;!sRt;na7;eUiTjaIor,rR;e5iaRy;s,u;er,ll1n,sSW;au,ns,t;!auOhRl3oSYreXQ;aUeR;l,rRtGJ;!mRon;or3;d,rNTt,ud;et,ie4;nfLUrt,t,zR;iz;cYelXhViUk3qu3sTtR;!inRos;e5g;as,fo7;ne5;elRlingk,weE;er,lo;ho;ay1horichviVI;a04h03isRAl6qu01sUtRweE;!ed,onSrRwiI;om;!na9;anWchaVeTha7iRuF4y;e,nR;otFX;!lArR;on,t;erBH;ge,yi;eRiL;t,z;aw,m2uyz8;!rSZ;a0Cd07e05g04i02l01m2nZoYrWtSyR;!cI0;hToR;luRn;sUXzOH;wiI;eRis,omMJ;maVA;n,s,t,wsAV;a9eRic,y;!m2uf;aQe;sRtzQL;d,se;es,ia,ne;!hI8lRm2r,y;!li;aUeTinSuR;as,z44;aIPg,i;!le5n,s;ge,s;wi8Q;mUnKrTsSthR;!e,m2;amSHe;ne,ze;hRs;ow0;!a0Id0He0FfanGEg0Dh0Ci0AjoanPTk,nXoWpaFsTtSvR;i01ouloKA;em6EhoVY;!aSecRpiHteH;ouIW;int,nt;de5mo;a02eUiSoRy;de5y0;ci,eRfacPTn;l,rKul;aXbi0foWllVmUn05rTtSviRy;e,lB;!er4te;!oFM;ayeILer;!i,y;nd,y;nnLEu;fe,llPmoG7rd,ud;calN8er,fRn;aRMerHU;omRF;arRi;s,tz;!lTKnRss;faOX;!az,f2DuKy;!fSlRmi,nP1to;do,moFX;e,oV6;bSeisl,iR;a,n;aRerIG;!ce,rRy;di0;aWdUeK3f,g0io,koIlTmSon,p0st0tRus,v3z;!e,on,ze;an,er;aQeK0;eRiNuc,wI9;n,rMY;ck,nKBrihON;ardiNc0Ce0Bl08mi0ne5r07sSteRv3za7;au,ux;!a04briaQc03d1e02guil01inPGjo00la7mXonneLOraQSsSveR;nTGrKY;eUiSonRy;!e5ne5;eRnPC;re,u;!au4Bl;eRi0;!nR;e,u;ly;beF;!lB;laIP;nd4;e,on;a7eSlRy;at,et;au,v3;!s/fourSL;hu;an,eSme,nRon,uAF;!hoPU;li0mi0n44r;asQKeBJgiThRiNWnTNue;oRus;ssi2;a,s;diThSm0rRs0UtFW;io,j2;l0m,n0;ck0;aUdTeSinRs1y;!gt1;!ch1rPYt;igG;!h,rd;aWchicMRhSkR;!us;arJWeSkR;ol66;nRr,t;ek;n,sh;aIe5i1RoN;kGrdm2;a0De07i04oTuRyQX;mRnd1ss1te5;!e,haFke,st0;cM7dgeTPem0m00nVoTuRw,ys;a7de5in,tiquR;iaTC;d,mR;!eB2;dSiaR;rz,sz;eSiR;au,n;au,el,l;b0e;er,li,nSsRtn6;h,s;!n,strubO2tz;!auVcTiSni0re5s,tteRu,weTB;!ry;cheFle;!heRk;r,t;!me;c09ecnG7g07i04k00mpiZnSquIOsRtch2Fus4BvGAz0;kavOQse;cSdReHVks,quAveFy;iMosH;!fUhRo;a7eRfTon;rt,tR;!ie4te;ie16;ed,n;eSiRuIE;e,st1;lRn6;ey,oIy;e,gQTnSsR;!deE;!ey;dRraLK;an,on;he,kRquI5;bWeVfo7haEin79mTstSwR;eEin,oGU;oIuI;aRer,on;n,y0;rm2;i7uR;rn;a1Tb1Qc1Md1Ge1Bg14l0Rn0Io0Gr0Bs01tZudiPWvDDxYzR;aVeRi0;au,l2rSt,uR;il,x;niR;ak;i,ns1rR;d,ro;by;ne9LousAtR;le,n0on;aiZcoYhXinWneS2oVsRtoHH;etF9oRuH;nRt;!neR;auOtD;m,n;elPQ;aNXinHJop;rnA;ll1;aUchTd,eF0ks,mi36oSs,tR;wistBz;le5n;!aEer,iE;b3l3;lQQnR;!di;!aYc0IdWeVgTi,kl6nRst;a,eR;nkaMQy;aEhD1le,oRs1;ld;au,t;aRia,l6;!ux;rd,sPAudGW;a02b01e00iZlSm0oR;cq,de5s,tQC;a7eViSoRsFN;!is,n,tALuLJvi5G;a8JngRon;!sR;!l6;coq,rRt9P;ay,on;d5nsJLotB6;au,k,ts51;au9I;de5nsKT;aVeUfo7g3hCIl0miTnSoRrLPuA;n6Lt;auOeEon;coPZ;auOlNI;nn6HouR;etD;b0dr1lUnRraugBs,tNYv0;!aiMHjonnATvR;eRilB;nu;ek,lo,maL4;aUdTeSon,wR;eEiE;au,ga4t;in58le;gu3l,rRut;d,y;hSkR;fo7l6;e,lmRotD;ei0;by,eRi;auRr1;!lt;ge,ncRrd,soO4t;hiRo;!ni;aSereR;r,ur;ng,rgaR;va;a52c4Sd4Je4Df4Cg47h45i43l2Qm2Mn20r0Ks09t02u00vilYyVzR;aNGeTi0oSuR;ko;!tD;au,nc1;ak,eSinLUor,rR;am,iG;!r,ur;acqRla7;ua;llRriK7scaF;ac;emWf0huViUk0ournCTry,tRu65y,zH;eSiRrARs;!ng0;nc32z;!e,l,s,t;i,ne;ps;anc00etDhYl0margi2nXre,sStR;er,on;ay,eTiSoR;dGn;e4s;!dRr0tDy;ik;er,i0;arRro;ah;enJOon;a13b12c11d3e0Yg0The0Si0Rk0Ql0Om0Mn0Eo0DqJVr07s1tSubeKvRwiIyn;alM9in;a04el03hWiVleUoSrR;aQoNJ;lM6rR;a,elN2;r,tt;!n8C;!alJFeUiToR;!dy,ld,uR;mi0;auKOer;!lR;!eRin,ot7G;me,t;et,le,ot;l1uO;aUiSoRym2;ua7y0;cRg2n;h1il;ng0rdR;elML;!ua7;aVdt,eUhaTiSo8AsRuy;te3;cMVer,quIT;rd,us0;!cMTt;d5Vl,nd,qSrdiRscoNtchIQ;!n7Ps;ue3O;an,eF9iRoHP;ngh9V;aQe8QingRo3;er,uA;!ar4Kinsl6BowMY;auOch1er,ni;maQ;!aEJeUin,luQmSogCsR;ma,trap0;anR;!n;rCFs,v3;!be,ns,szaSy,znR;icHT;zy;i0zy;ar,eKHi1;nSrdRtNJ;!elLTi,uc72;e,g0;a0AbKGc07d03e00gZh9CiXkemoWlemmoud8nVoTtSwAVzR;acN1ie,o;aouAon,t;d3thR;!m2;!arKPet,iMouL0;un;cLYgH4ng0tR;ah,i0;hoF1le;!cLVdettFUtSv01wiR;tz;!e5;aTer55haN0iRo,weE;cRs,t;ks1s1;ia,kBD;hSsR;ics;abL4en0;c7FdHne,rd,ss9vR;idG;eTiSjR;moQ;ll0s;nt,ur;a0Tbus76c0RdPe8Rf0Qh0Oi0Nk0Ml00moZoXtWusUvSyRziB;ea;al,erR;de4;e,sR;aeF;er,z;cL8in,nRuB4;!cBgP;ntK;!a09eViSmo4oRroJuc60wa4y;mLQn,ws;a7nSsRve5;!saQ;!g0i;a03c02fZgarHVhYma4nWpercL0rVsUtSvRw,y;ilBue;!eRte;sDte;oe6Z;iFFoJ;!oR;ix;acKS;eu7Fle6UoR;ntR;aiC;ouF;rGu;b9Cm0nSrt,s,vRzDR;anI5;de,ge;ir,os06;esJnI0sBve5;am0oRume6K;ciCmHU;io4ry;hRouF;amb0er;iXmWnRrqKFu;dRey,g0;!rosR;siR;gnR;ol;ie,y;nsSrR;!boisveFe;ky;dl,gnB0qK5rR;l,ne;an,ie86lR;!er;asJeUgLhiNnSuR;e8Ty;eRocJW;ts;lI5r;f4orBE;be,cVg8hl0k,ls,rTsl6tR;hRz;am,ov8;eRs;ns,r;ro58;a7dXeVfo7narUoSrR;os,y;re,s,uR;in,t;d,z;lRt;!l;inR;gt1;a7erH3hXkSot3LqueRra4Y;moECt;!eTiSl6m2sRteL2wiI4;teL1;ng,us;!rRtt;!iH1jonG;!aRet3Ei4steJE;mp,rR;ah,d;ch0Sd0RkGl0Qmi0Pn0Ord0Nsl6t0MuRv8;b0Kc0Ed0Af09g07h06j04l02m01noy0pZqu3rWsUtr1vR;a9e5illRolsk;a9iR;erL;aMeRoleDK;igBjo50t;aSeSiRol;vaGD;ga7;arlaDTe4iH0oFreR;!z;i0onAC;ac,e,iRne,t;eu,ga7;eRoIA;an,u;arno9er;e,rR;aQis;a84oF;eSin,o3rR;e5y;nRt2O;esJ;aVeUhRla82o4H;aSeR;!m3neL;mp;!r1;ge,i4mp;i8o3;on,s1ty;!er,ow,sl6;!s,y;sh;!e,s;fo7le,s;!em3;a60b5Tc5Dd54e53g4Xh4Wi4Mj4Kk4Hl3Pm3Mn3Bp,q5Er1Cs0Ut0Fu00vZwa,xYyVzR;ane4elHLiSzR;o,y;nRre;!a9et;ar9GeSl6neLoRs;uk;!r,s,ur;!t0;ic;!bDGc02dYer,gXlCmVne,rUsTtSvRweHRzA;a9e,ilB;re5;ch,em0;!re;!aDPeRgart8m0oCL;lBr;a7e,h,is,y;a7eSoR;!in,n,u3;lRt;et,ogHI;heRo3H;cRr;orC;a02che01e00hZisYloun6oXri1DtR;!ah,ersViSleLu,yR;!anP;kBAsR;!tR;a,on24;hiE;g,n;se,t1;al1urFF;m2re5s;ld0;iRka;lleRni;!r;c06gaEh05i02keIKle01n0q00seYtR;!aVe,iSonR;a9e4Mna9;aNlBnR;!aRe,gs;ud;n,rR;acGPd;lRt5K;et,in;ueL;r,y;lRrA;!ieR;reL;!a,o4;hRiaBM;ieE5;a1Jb18c14d11e0Zg0Xi0Vk0Ul0RmA7n0No0Kr09s03tSutRweEz6;!a;e00hVleUm2oTrSy,zR;!ch;ow,um;liNn;tt,y;aHKeSolomR;ew,y;!lR;!eR;my;l,r;aVcTeShRky;aw;lH7t1Q;zeR;wsBE;!lH4;!aYeWiUoR;is,s,wR;cRs;liCU;auObe81eRte5;!au,re;!au,st,ttR;e,o;clRs,te5uO;ouR;gh;dy,lAnRt,usB1y;!etRi,nA;!te;!aTeShartd,iRs;co5Uer;koCHs,tt;by,is,rd;atSeRow;tDy;i,ti;er,l6m2weE;!auObe5er4lRte5;!l1;e5LiHoC;el;!au,ilRsJ;!le;!a0Ue0GiSoRy;l,u;er,n;!eloThSi0l3QomR;be;an5S;!n,u2V;aYeViToSro,ucR;ci;sa,t3ur;erRn;!i;!au,dSlRr2Ns,t;!et;or;!galFFnt,rR;esRin,y;so;bUciolE7d4Zi4kaTmy,nRo,ta,uO;!yR;ai;s,t;aRe4Xy;na,sh;cZdXfiC9gWiF8ks,liVnToSquaFs9WvilR;e,le;n,t;eRiF5on;!rm2;ac,er;s,uBZ;eramusteRulAzuI;li0;e,roR;ft;bRo94s6;riRusBX;ck,dBK;a0Ec0Cd08e05fo04i03koB3lXmWoUsTty,zarR;etR;ti;e,illP;cDXgR;!h;er,ir;!aTeSie,mo4oR;n,r,w;nTt,ux,y;b6nSrR;d,iN;tyC;!arA3;ur;!nSsR;!de8L;tiC;aSiRw3;n,seBQ;ccRssa4;hi8M;er,h8omR;!be;nTsSux,wRzs;yd0;h,y;!g0;er,ke,oR;!pR;an70;alsRejoaquEPolA;hi;eZgXj96lUnRrd,sl6vy;!brSes,vR;ilB;idAJ;!es,lR;arRe,iKon,y;d,ge2Z;neRuy;!e,t;rl;am,k,l,ng,o65ri;aVdaBIgUhTl6nSoRweE;t,ut;ac,oN;daBFeAY;!io;na7oBBtDDu;r1Jse,t8z;aXeVgUhTiSji,orR;ek,g;a,e;am;er,l6;au,lR;!a7;cCFyaR;!c;a04en0hZkVoSqRziI;ue18;ka,nR;!villemR;ai4;eRm2s;nsRs;hy8tR;oe;!aUelTkanSmRus;a87ei0;gi;et,i0;ndKrd;!diBEnDPrR;ro;bWcoIeUiSne5uR;ty;c,eAVnR;!e5o;au,n,uR;!x;!iDF;b,rR;tm2;arestDFbCJcC2dBNeBJfBFgAYhANiA6jA5k9Xl7Dm6Dn4Po4Jp4Aquin49r2Ks1Ut1Lu0Dv04w02x00yVzR;aou4SeSuel5GzR;ie,ol3;iRve8P;ls;ad,eUlSmonRotD;d,g;eD5ifRw77;fe;rLtD;teR;rs;aRde;d,ng;aYeTiSoRra7;iCn;ce,la;lTnSrRzza6D;iEty;da6Bel,ir;ar,inR;e,orive8T;on,re;!b0Rc0Ld0Ef0Dg0Aksztina09l08m06n04o03p00rYsVtSvrRzC9;ay;ef,hSin,raRy;ge,y;i0ot;mait4sR;anRem;!t;as0Ee,ioRy;na7t;e,in,rR;iRy;l,x;ll1X;cRe5;hm2;aRi0o5L;is,y;d,is,otD;it9;eRi6Vr2;!a7rR;!lajoPm2;fr6mu97;eViUoSrRy;as,en;irdevaRn,u3;lt0;!beFer,ot,t,veF;bRl3s5Ht;ec,oAC;hVlaUoSuR;it;in,utuR;ri0;ir;i0u;an,eViTlAou93rSuR;ch1t;ay,e,ia4Y;ch1nR;!e5g0;rtRuf;!in;al9FhXiVkinTl12mansh5Ur8FtSwoR;od;as,ia,o4;!sR;!on;kuaRna;pi;an60eRot;rt1;ca0Fh08i06k05p02sVtR;er,hTi0leZon,rR;aRuc;nd0;al39on;aUeSinib7IoR;um;l3nR;at;d,fSlR;!y;!f;eRir5A;ck,tR;eg20;ew,inL;macRo8Q;op2V;!by,eWfo7iVlUmo4oTwR;eEoR;od,r7T;di2;inK;ck,ni;!d;h,t;a1Db19c11d0Yen0Wg0Ui0Tk0Rle0Pm0Ln0Bo7Wp08rYsVtTvisSzR;ig;a9et;eRigGs,us;au,l;anSeRon;me3On0Y;de5;a4KeZiUoRu51;g1Ft3uRyo;a1HquR;ie4;aUbaTe9TgSvR;ee;hi,n2;ja;ga;lBs;aRin;ge5;au;aYdt,eXoSt,uR;p,s;is,lTtt,uR;lRx;d,t;!dR;i,y;auOl7OtDy;l,utR;!ov5A;aTbu8SitSoRst2Q;ry,ur;a5Ft;ly,range4;nRss;!da;eRi6Vs1;nGtt;al,naFrh1;aEo,uiR;mo,n;aRds,s;!t78;!a28iSoRr1uiN;in,u3;l3Yon;aWeUhSoRul8G;iDuA;ambRet86ule8S;auO;dRme2F;ia2K;la,nR;d,ge6Y;eTiSoRuthn3D;!ur;c,e,q7C;c,l3AtD;go67my,uR;jo;!o;aric2JeWoUpRriBt5B;elBleRs;by,gatRt1;e,h;lo,stolR;ak0S;l7Pn,rt,sR;tigR;uy;nVuR;aSendaR;ys;camRd,m;go;zo;a1Dc1Ad0Se0Pf0Mg06haOi05j7Xka04le03n01onymZsXtRw7Mzoui1V;aVhiUiSle,onRra3Jun2MwiC;el69s8;l,nozR;zi;au3Yer8;ya;al3Mbr4TelmRl6;e,ie;e,oR;us;an3Ye82is,lRonchis;op;it0y;!ng;st1;!a7eXiolWlUoSriRuen2B;gn1;!tR;!ti;eRophoC;haF;il6U;au,lSrR;!er,s;ak9iUl,oR;pRsan6O;oulR;os;!dGlRs;!lo;es;oRrP;ssRusJ;i,o;l6HnRt,z;harisonri5AontR;ha;e05o02rR;a2HeXiWoVusTy,zejeR;wsR;ka;ek,hR;ko2K;s,z;anjafitrimonaso67ll1;aRch8j2Ro51ws;cSsdraR;tt0;ch0R;iSn,sR;ca;riI;graSrsR;en,s1;ve;eSl3tR;il;!au;c52iJka,r3R;a0Mb0Ee09i06m03oWplVsRu3Vyo6P;bTtR;roM;ng;er3R;em2;dWe,ncleUrSuR;re67;!osR;o,si;meR;nt;eo;aRera5Zon;nn,rinR;gh0;ci,en,na1Pot,rauStraR;no;lt,x;au,deKga,lUriSsR;!se;auOci,ndiR;enC;l,ot;eWlVoTroR;iJsR;io;iJrsR;ki;et1;auOlt1;lt;bTdSnd0raRto;l,nD;ei;iBle;a23b1Pc1Md1Ge19fa18g16i12k0Zl0Jm0Ao06poFqui05t00vTwSywR;a7in;yn;arSeR;s,ze;adoRez,i\xF1o/cend\xE1n;!/R;alvari\xF1o,hern\xE1ndSjimRsalvatier1K;enR;ez;enUhTiCmanRrog19;!shR;of0;ot;bu2Q;nn;iSnR;ze;!gRse;ny;aXeUonSqR;ui1T;d,tebraRy;vo;iSrR;as;da;in,nRsi;sa;a04bu4Wcr1JeZiWly,maQoUsSui2TyR;cPn;oRt1;pp;!cRi4uch1Z;co;an,cPes,nRot,ss1;otD;te;gTnSynK;!e;bu20s;r0VueR;de;i4maQtt;nd;enbShatib,iR;re,shw2;raIu1T;as,brSeRn,s,y01;ff;anR;do;er,onqRr3ui4;uiC;no,ro;auWgVksejUsandTxandrR;ovR;it0A;riN;ev;i,re;me;erUrSubR;ae;eIidR;ge;diRs;ce;aSoR;mbraIrn;n,r1I;anes03eZin,oeYrTuRy;feRry,s;ra;eSigR;ht;cStR;ch;ht,k;uf;e,rR;gativRic,ti;ezR;za;e,i;bWhmVigBjar3rTvR;oiC;ne;c1ie;le;ed;ri;a0HeVhTiR;kis2Rn,rR;ow;urR;st;l6rRy;l6s;ey;mo;au,d06gr1k04ll03nYrWssUtRzua3;chSkRzm2;en,in;is1;aoR;ui;d,olR;di;ey,sR;buTlPwR;orR;th;ry;erP;enL;!s;a0Te;e00iZlXmaVo,rSuR;na;beSoR;ns1;rg;di,raN;ni;faRst8;ng0;er,gi2na;lo,rn;a05e04harokh,is,nZrWuR;eTiR;ar,laR;r,s;ni0ttR;az;et,iR;coR;la;anAeR;lSsRw;si;li;et;!l9ma,rs;gRr;ni0;fSinogenR;ov;leI;ck;reWsR;chRi;baR;ch0;am03d02eXhem0OicVjeTkiSl0na3olpRra3;he;ns;ngR;ue;hoR;ut;lTrhRs;olR;dt;in,speR;rg0;a,is;i,ovRyk;icz;a05c02e01hZicYkVoTqu3teR;au,s1;in;rd,stadesamiYul1;on;eRle;rm2t;an;ia;a7er,im,oR;n,ur;to;a7ettulR;lo;rd;st0;er;a0Kb0Gd0De05graEir03oYrTuR;d,kabR;ar;aSiR;gu;mSn,ssaF;rt;es,s;i4uR;d,ssR;aRir;fy;re;ou;ll;cass9lWnVrSyR;ta;crombPoR;ux;ie;aqu9d;in,ly;is;elmoum8oulkarR;im;en;oTruzzRs;eJo;se;tt;re,siRt;al;ad|Gerund\xA6accord0be0develop0go0result0stain0;ing|Negative\xA6n0;ever,o0;!n,t|QuestionWord\xA6how3wh0;at,e1ich,o0y;!m,se;n,re; come,'s|Singular\xA6aZbUcPdLeJfFgEhCici02jel00lunch,mAn9others,p7question mark,r6s3t1us 0;dollQstR; rex,ax return,h0ic,ragedy,v show;ere,iZ;t0uper bowl,ystZ;riXu0;dEff;alToom;atCroblVu0;d7rpose;othiSumbE;ayfPee7o0;del,nopoO;ead start,ome0;! run;adfLirlHlaci9od,rand slam,ulL;amiKly,olKr1un0;diL;iFos0;tiJ;conomy,gg,ner3v0xampE;ent;eath,inn2o0ragonfE;cument6g0iDlDor;gy;er;an3eiliChocol2i0ottage,redit card;ty,vil w0;ar;ate;ary;anki7o0reakfast,utterf5;tt2y0;fri0;end;le;d1noma0;ly; homin1vertisi0;ng;em|FemaleName\xA60:1H3;1:1E2;2:1H0;3:1DX;4:1H4;5:1GH;6:1G9;7:1GL;8:1CD;9:1CJ;A:1E0;B:1GK;C:1H2;D:1GQ;E:1EY;F:1G0;G:140;H:1EA;I:1DA;J:1FU;K:1GJ;L:1BM;M:17W;N:1DM;O:1H7;P:1DG;Q:155;a12Hb0Z8c0U9d0QSe0L9f0J4g0H7h0EYi0D3j08Wk03FlWHmNCnJToIQpHCqH3rDAs7At4Xu4Nv3Dw2Mx2Dy0VzR;a0Ie09h07i03laHoUuSyR;a,be8lah-l1H6;h8l0PWriR;-0W6shadd0CM;eThSi0YDla,raRyJ;!l3na;ar,ee,ra;!-Ue07KlTyR;!-R;em16Vmitche0FK;ie,ly,y;an1jaLlRm0YNs1A3;ee,ou;!aTlSm10HnRon,s11Xva,x1E4ya;a,eb,ob2;aCi0ZW;!h,nn;aRor;n1E3oT9r2;a,b4e0h8ina1ZlXmWnTphyr,yR;a,nR;ab,ep;aSdRiAn0OGo;aAeA;!ba,iL;i8o8;da,iRla,ma,ya;a1AWe,ka;ch15Xda,fBWh01i00ky8lZma8nXrUwa0HYyR;aSnR;a1Oeb;!-g1FYh,na;aReGia1AGm5Xsh0ZYya;!-Rh,l3;aIkathr1F3;ai1F3eRiy4;ka,l1E9;ia,ma;a,dy,na1Gra,yn4;-kiAe1E6iT7l2raJya;a0Ne0IhssGi0Gl0Fn0Eo06r05s03uVvRz1F9;aRetNia0on1E1;!nR;a,naR;!-jam1DC;!eXkVliUmTnaSriRsr0DG;e,tzi;!-leiD;i,n4;a0K2sM;!iR;!ma;!lia0YV;aRee,id8;b0MIl3;abKis;chevNDh1DNko,lXmWnaVsUuRvj0PL;d166mRn3s157;aRna;!ly,n1CV;rJsa,t1CT;!-0K0h;i0na;an1EBie;esMs5;an1BYiz2;!dRmko16In,t13Vyi;es,ja;gan051hud1EHlUmSn13TrRsZva,za;az,i;eRi;li,n;e0i;c0Ael08f1BHgm151hei14Fl1E1m06n01o,p00qui1rYsTthzi19Rume1FLzminR;!eR;!-l0QR;hTmSna,sR;en2mi1;in18Qyn;aRiOo1DVvi1FF;-pau0LDshrF;aCitzRosla1C6;ah,i;a13Ed0RI;a,eTiSnR;aPMe1CWie;e,s-a1D1;isy-th0TFlRt;ie,le,y;aRelBile16D;lW3ma;!leR;!-SC;i1out;aXeUiRuQ;aSnR;!ni0XN;!o;l5BnR;aRia,na;!b;ly,ri4vRy4;i154ri0;a07e04h03iToSrGynR;n,t152;lann-hadasMre;am,dYlUnSssaR;l,m;g,ifrLXniRo0t14Y;e,frLW;a1BQdaigne-keyMUhel08Hia0IAlRma;aSiaRow;!n0Y4;!mi0;aRe0MMmaK;d,elB;i0RHydy4;che14Ii,li0K7ndRsterl1CS;aEQi7yR;!am;ad,bWcte0d00AfVhi1CQji9m4nUrTsSthR;a09Fe0AN;ia,ko0n,siD;dJis;da,is9ya;a,iAo;aTiR;go1E3nR;chiku11Qjuk11Q;go1E1qu1AW;a0Le0FiRyckt143;an0Dc06d05en0k04malenthirara1DZn03oYrXtVus9vRya1BU;iRyan1CJ;aRen1C1;!nR;!a,e,n175;aRt13X;!l3ny;eld1CJgin3;lRna;a,etR;-1BXa,tR;a,eR;!-sylv2;a,ud1DH;a,tor0U6;a,eBya;ha8k0W0toR;i132rR;iSyR;a,nHP;aRne;!-R;lFna121ro5;aJna;da,e,ga,ka,lVnUrSsR;elinM7naA;a0NQn0LRoniR;caEka,q13Y;dKus;ma,our0EG;dex-ludnilDea,i04lXnUrsiOsSyR;da,la;hAiliRti-twumwa4;ki,sa;de1AFes0CFiSnaRya;!r04H;a,enQsa;a0brun4eRi13A;nVrRsO;iRy;a1AZeRya;!-R;f0B7nicoB;c1ARt0TA;a0sha19N;asheshk18Td1BOlriOmXndi0rTssiStRwa5yG;shemaRtuqi,ussma10D;shk0O9;iRsuD;ah,elR;!leR;!-felic2;aRme-habi10T;!iR;ma,z4;a1Cch19e0Wh0Hi08o04rXsWuUySziR;po11Lr1BDvi;!aRpha1r0ZW;h-suz0YNn18Ir4;lRraif4sh03Ny0ZX;a,laug102;hinguHi0TXowenha5;acWevi0iRu0WPyc2;a0c2nTsRx3;hRta;!a0UJiHya;a,iR;dy-j2ItyE;ey,i7y;by,leGnTrSuRva;ka,narFV;a164i;iJya;aWes3fVguidUhAkwaach18Tl19LmTnSowenno5ph2DrUshaRt0TOwaloDya19Tza-an13T;!n2;!a,hina1w4;a,ea;an0UL;a8fa11Y;!-1A0m0R0nSrR;a,i-18Nyh;aEelBna;aYeSiRomasi0r0ZR;a,en,piOyRMzi01X;aUl10Hnu0VIoTresR;aRe;!-m13H;!do8f0GQ;!-RlHE;j060ro5;fa12Pis,ksig1BDlUnTrRshvF1;aRi0;!h,jie-milla15L;a,h,i0ya;iSlAyR;!a197s9;a,e0RSsM;a02g01h00iXlMnnessFoWrUsRtchenS9v0WIya195;h1B8ni0WQsR;!aCie,nR;i0WOy0WO;eRi,ri7;sa,za;do8na;aRokerat0TO;!koR;ianakhGronhiaketskwG;a,ila-0V7;an,re0YK;!gQira-justi1A6;aSeR;fig11Mrgnim17R;kounNn0WP;a0Gb0Fe0UPh0Ei0Ckar0Bl06m03n00o,paHrYsVtUvay9wa0yR;a,c0BKi8lSma,siR;a,r;a,or;ia0um;ha,mi4nRs3;e17IiRu0YYym;m7n;aRh023rGHyn;!-l0KPnn0T7;a,eek9ha,iSjRw18Zya;ee0;a,ka,na,s9;aSe8iRm0SYra,y17D;!ka,la,ra;l3mi,n16Kra;aUiSlRohserenha06QyTA;ul4y;!aRe,n7t9y4;!h0CFn14D;!ny-sto14Gr;a,onh18C;akorihonnienni0ZSb19Tma,na,sR;ha0QOs2;el,i8;at9ea,it9yt9;ib4ra;a42c3We3Fh2Ci1Uk1Ml1Lo0Rp0Prish15Yt0AuYveXwWyR;bUdTe18IlSmo1nnafFrR;i1ynnaCB;a,ia,vi6;elBnPra;el19Gil19G;a8eac9;a,tla0;!e01hZkhroM3lYmWnVrUsSu0zR;an028etNie,y,zanne-r04X;anRi7;!a,e,n0S2;a,bi,i7y;eeHn0VVsa;aRmer12C;iAyaC;mi,ta0;aRi8ryU1;ni,sAyD;!da,llG;a00eR;fYlSphRv3;anE8y7;a,lR;aRie;!-R;ben0WFjoSl0V3mRro5;ax;an3;ani6fy;cSe0Z9rRv3;!eiOla;ey,i7yR;!-R;malaik4sSF;enc0ZGlendR;eur-di098iL;aIf0Fh0Dk0Cl08mi1n05phXrUs4YuR;he09SjSk9mayRndo17PralYCwai0XB;a,y4;anAoud;a132b4c9eSiRyJ;a1ne;na,ya;iSyR;!a1;aTeR;!-R;an1laK4ro5;!-Rn1;anRe13Pje0UZlFmilaniAro5vi0;aKge0EN;!dSg14YiRja,o0XHya;!a,ta,ya;os,ra;!aTeSiRk15E;n7z4;aFRdad,il,nN0;ia,ne,rY4;a2Ah0;a16JeR;il2me;iRya;aRya;!-Rn1;an1eliYNirGkahe0maRro5;e,r2;eynai0BGoEJ;aXyR;!-Va174e0QJlR;aSeRie;e,r;!rR;!-le2G;g15TlF;ina-na00Uya;a05b04d03e02fa,hamEik142ka,l01mXnWoVrTsSyaR;!me;ilAsi;a,eRi1ta;en,lBm;bhQu0SM;ac0QEdy;a,i,on15BrR;aRit;h,nRt;!p0V9;a,i1la,oe,v2ya;la,n13Sr0UU;nPra;el,ylB;!nRr,si;a,naR;!-p0ZC;a09e00iVo0rTter0uSyR;an1laCrK;bhHniA2;eyaRiA;-0BGni;f8iqu147lEYma,rRvay178;a,el,lR;eyRi,y;!-R;aIelysF;a,ba,e0iYk14lUmeDrSs0RNun,yR;a,n15X;da0Y0iRlPr0PMyl;!dQfa,ne;by,cy,ia,lTsRy;eRy;a0NIy;a,ey,ie,s10Py;la,nd15X;d0HRe09h07i05k04l14Lm02nWol0T8rSu0vy,w0yRzm4;a1l5Nna,o16X;aTi,lRon7r158;e15GiRotNyE;a1e,ne;!np0UD;aVda,elBiTnSon14WyR;!lFss;a9Son,y;!a,eRmG;!-p0XI;!aAel-regi0is,ya;!aRim,rut9yr4;!elBi8;aik03Ki8;lPma,nRtr16F;a,d5Mi;d,iR;da,n0EF;lBm3;a0YYb06f05h064lZmsemi0L6nPAoYpho8rUtTve11DyR;chKnabouR;!-a001;aye0TZiA;aTenRi1va1y;!aRi06P;!-sa0Y3;!fi0h,pMBy02V;hye14Iyou0OV;enSiRma,wa;na,p9;aRe;!-R;mariMrR;o5uby;i0o8;asti0KSe0RX;arletVhSil2oR;tl14B;eRnei0FO;fe10TkRlumiK;in4;!t09Z;a1Cb19c9d17f14ga,h13i11j10k0Zl0Vm0In0Fo0Ep0BrXsWt9UvTwSyR;a0S4da,uVZ;da,y0W1;anRy;aRnaC;!hE;ha,k0YPviO;aSedo,g11NiRk0VWraCv2;na,ta;!-ZdjFhRi,l153n;!-Ri,mF;aWdanieBeVjZk10JlSm0MSny,tR;at0QNhille12B;au0UYeSi1oRyn1;u,ve;ey4;l0WHve;dr0QIli14Ingel0UO;e109jSkelWQlRm0MLro5;ee,y5;a0J9e0RH;at3hR;iRy8;r6ya;ir5na;aSdRi0GZjhp0SMna;r0XZy;!a,e,h,yaC;!aZiYmXouhQrWsa8uSyR;!a,ukkt9;a-z0UJelR;a-ort69lR;a,eR;!-valer3;awiy,eGin;arrydji,y0N5;a,e,lAna,raC;!a,elBh,ntTr103yaR;-lRh;ee8;ah,ha;amaHeTima044l0QRmaSo0Q3sabeeDwa,yR;ma,na;!-UF;e0ha;inaCu8;a,d4ee0;a12Eda,ge,nRt14CyuD;a,t;as8i0SO;aSiRy0Y1;a03Ura,y0VT;!a,e,r3;e,iRor4;a,eO9;a,elDiSouma0T2riR;n6ya;a0ha,le,n6;ja07VnR;u0PYviO;a2Oe26h20i1Jo04uXyR;lUmStaR;j,l;!aRe;!s5;eRie,l6;e0KEi0R3;bVchUdr4hi,kTmSKqaAsStR;h0NLvi;ha0;ia,me13T;my,y;a13Rby,iRyLM;e,s;aJb13c11d10f0NDhaQj10Kk0Yla0Xm0Tn0Roha13Pq0Qr0PUsXuWwVxUyaTzaR;lRn0;ie,y7;!l0RP;an115i6y;an,e0;dY1gui12CkaAma0DN;a0AeUha0EYiTl11XyR;-aIanRlUY;e,n;eDSta;!-WaVe-a0IZlSmar0PJtR;er0U8ta;ai1iSl6yR;!a,n0L8;a,e,ne,za0UH;ly,nn7;aUeSmaRol0BK;e,r3th0GS;lRm0NOva;ia1y6;bViUlSnRya;chi5n6;ex3iRy;!ce;l3me7;by,elBi12O;!-XbKim0TKlTnR;aRe,i0SHn6;!-je0P6;ee,iSl0P0yR;!e,n0KRss;a10Xce,e,nRta;a,dJe;lRro5;ee,yn116;aAuaA;da,gy0TEiRn0KI;!a,da,n,sM;aSea,iAZm0ORyR;!-0X9e;!nRys01Y;ce,e,n7;!n10Y;aAhayaR;!-so0SM;i0ri0;heRio;lI7nO;b0Z7erHinRy10A;e-08WshiA;a05c01f0JXha00kki,lPmZnXo,tTvRwa,ya105;a,er,kR;aCy;aSeRh01B;ge,l;!g7jRl7;!e,j;aRed;!d7;!a105e105;m,n0Y5;hSkRoB;i,ny;a,eR;l11Ere,s5;!nR;a,ie,ne,s11P;aVeTiSoR;da,nEG;ann103ta;aRma,tt,ya;!ya0;i1ya;a07b04e03g0I5h02i00jane-sherrlt,l0ZAmZnTs11Ita,va,yR;a0VNhQnR;a,eCB;aVeRka;eSsmR;ay,ey;!-R;an1ho0VQ;!d,e,ta;i,o0;gnRlPn6zy;!-cM8a;a0m119;m,naXJse,va;a,eR;cRkaC;a,ca,ka;!gQn0;an2b0Kch0Id0He0Ff0Dh0Bi08k07lAm04n02phael01qu103sh00t10VvZwYyTzanR;!eRne;!-nour9H;aTe,ha0lSn6sR;an,heZ8;a,ee;!nR;a,nJ;an7en,ya;en,i0leG;a,miO;a,e,l6y;a,di,iRyJ;a,m7;atRl4o0;a,ouR;!la0FH;i,sh0IE;hana005ma,n0TXtz0ZLyaSzR;el,y;!-sou0R3;af,i0PEmaR;!-f0TB;aelRfa0RF;a,e,l6;!gQlRya;le,yI;a,hiOouQ;a0ZBelRi0YT;!e,le;ab,i44;aYiVuR;eenTiRods;a0nnR;!z0Z5;cy,ie,slP;anSngRva;!wG;!j0WY;adi8rqan0LWtt0NT;a0Qe0Gh09i07lanNo05rRusmiH;a02eZiSo07RuR;d0GCnK;nVsSyaR;mva0YDnO;cRha,ka;iRtA;an1lFG;cessRdar0QQ;-meri0Y8e;ciSeAma,slR;ey,ie;euseHKous-7W;bh,nR;aAj0IV;et-m0WLlRmpin0TBppy,rt2tip9;ly,om;aRer-giova0hu,na;!-robenc3;aVeUiSoe0CYylR;is,lis;b3loR;!mD8;by,loTBnyx;jangiOnie-keR;is9;aZggy,nWou,rTtSyRz3;n0LIton0QE;it,ra;el,lSrR;i1y;!a,e,i1yn6;da,elopSiRny;el-digbeu,na;e,pe;ce,rl;dmi0Z1ei0Z0ge,i03lo0NVm01nZoDrYsXtUulSvesh0yR;a,t0XC;a,eRin6;!-an0OMtN;ieSricRsy,t0HE;a,e,ia;!nce-jayL;caBtS1;aske0YSfaiNisJkerEva0UO;agioHdo8iR;ngarq,z;!elaR;!-riH;ge,slPt0X3;a0Rbok0WZc0Pd0Mfe0Lh0Kk0Jl0Am08ns,o0p05rZsamuyimGtul3uTvSxRyeBzUB;an0URsa0;ie,o;ard2b4lUmRry,sUK;!ouRy;!-54lR;-khai0SNa0NB;e0D8fa,iR;a0maH;a-jo0KOelViTlSph0KKs9tR;iz;an5AyYH;!an0WWelRoB;is,le;ie,le;al7helR;iRyJ;a,eE;!a0MZbelR;i1le;a,eYga,iSl3ov2uwadarasi08PweIyR;!a,m0SCv2;an1eVvR;a,e,iaRya;!-Rne;jRro5;e0K7oy;!-hQ;epeOn0U0;e0UQikioDs0TY;a0o0ND;e0VFl2J;alFeRiB;lRn1tN;i6le,y4;eRh8tavi6xa0;-a0D8anQ1li6;klRna;ay,ey,yn0VJ;a20d1Ye1Bg1Aha0JQi0Nji0LUneOo00uXwiLySzR;elBia0I3owa0V6;aUi0MClTnRraCsM;ahRka;-m0MJ;aU3ee,ia;la,t;ha,i0L1mSnaruaq,sR;ai0T8ra,sei0LM;er2id2;a0Be07godj0VMh06ko07Wl05o04rZtt3uUvaR;!-Sh,lR;ee,ie,y7;lFr0U6;biwo,ha,m0F0npagnasoniHrR;!-alhou0VLaTeShe1iRs5J;ah,ne;!en;!lho0VIne;aTci1d,eSiRma;g,ne;-zineb,en,iKl2;!hRl0J3;!-blessi0FM;mi,r;a0UZweI;a,e07G;e,lSmR;a,i0Q2y7;a,iRl0KXy;a,e,ne,se;!-bKhRl0IUmi;!-m0NA;a0Bc08dehy-myr0BBh05i04k02lZmYnXsVtTv2yaR;!hR;!-luv;a,ehinaRhiA;!n-jo0U6;aRh057ka,si;!li;a,on;a,e8r0WD;aSiR;a,yy4;!j05;a,iRkKZ;!-tayl0H9ta;b0T4oheraMyQ;aRel0VQ;l,rR;ik9;hSk0EMolR;a,ePY;ar0MYoB;!lPmR;aciBh;at2oc,uyG;a0KTch0Cda,e0Bfe0SVh09iDl04m03n6o-nathan0I5pht01rZsXtWvUwlPyR;a0KSlaCrSsR;a,ha;ouz;!aRe0OIia;!ll3ya;anAen;ri1sR;a,ia,ri1;iRland2mi1;aCsMy4;al3halR;ie,ya;a,ma;!a,i0QIlRya;!a,e,i6yR;!-Ra2Sn,ro5;a02Vro5toudamdR;je;a,emyah-makie5iR;r,ya;b0S9la,maXOva;a0K7u0K7;aNeyeRonfa0KA;!-faTI;!a0Yb0Wd0Te0PfissaUSh0Mi0Jj0Ik0Gl0Cm0Bn09om0DRr06s04tZu8vXwWySzR;an0S4ek,h0G2;!aTel0DPir4lRra,sa;aRha;!a,h;!-0TDb,h,la,ra;ell-paoDla;a,iRya;e,ka,ya;aThaRt3;lRnaK;i6y;c9lLHniKsR;ha,ya;i9ra,sRya;imRJou;aSdReh,g0RSjis0OEod;i1os08O;!ayGh08E;a,cRd04AeOLklQ;i0H0y0D4;i1m3rit;aTeSiRy4;!e,y4;ey4ya;!h,ni;is9shatR;h8ra;ia,la,wa;!a,ca,dy8kaSlRmaCniOri0QCs0PR;aCee,la,y;!-zeinRZ;a0LMeRiRTo050ualie-lu1;lRml3r;i7le;-0RYeDlTmaSs9vR;aCia;!-jhen0EW;a,ie,l6y0NI;a,eSiRja8ra,ya;a,el,n6;ge,ne;a,iR;ha,la;n0JSra;a36b34c31e1Wi0Oma0No08pi0CSrignaJGu05waju0IVyRzaliQ1;-a7Ha02dje0KVk01lXna,oK9rRs9za;aVel3iRka,na,rh6tB;-aIaRem,ol-alexa;!de,mR;!-nehRe;ysM;!-00Fh,l3n3;aSe0SEiR;a,eEv2;!hRn02Z;!-alaiA;ael9BeDha0SC;!-Rh,l0QYnOrNW;a01Tes0JYjaLk0OQlFro5yane0RA;jin0FGkHlQnSrRskQtmaiXCyiM;griLiMS;aj0TIia;a04h02i01lZmo,nWrTuR;ig0TImy,nRz0;a,i8ta9;aSea,gRi4lPya;an7;h,ne;aSe0Q9iRla,r0IZtim0SYy0I2;ca,ka,q0K2;!-segueanPl0QY;ka,lRy;ie,y0BN;ra,sa;aRe8i0I1;ee,mm0H;na,ye;haP4;a0Vc0Qdeleeyah-mH6e0Nfi,h0Liyob0PYk0Il05mi,n03qLVrWsUtTyR;aRk4;!-0R9h,na;c94h0I6s0SLzi;ai4haRsa,ty;!ll-wahSO;aUberlie-hend0J5eSiRna,oDy0PE;!a63;iRla;a,lB;!b0JQcBlSnRy;da,e;!ie,y;!aRdy,er0PJh,n3sa,t0SB;!n,y;a00drZeYiWkk,lUoTurtuq,yR;!aRna;!nn;!w;a,iRy;!cent,e;aRca,e-0QQ;!n6;a,dy,e0QBna,y0H5;ed;!-Sfa076hEnR;!a,e,ia,n,ya;ev6g0RJlili0JKm0MPro5;aSoR;!n0R1;!-0EFel0AEy7V;a0PVrR;in006um4;lDnR;mRs4;oh;aUhSkaR;el0A7yD;aYFelRkeNla;a,e,i1le;elS1h;!-Rh05Kly,nSVo,ro5;eRjaLk0N0l0RIna0QVro5savaVNv0HZ;l0J2s0A;a0Td0RekelCAg0Oh0Mi0Lji1ke0QBl03moon4nZrSva,yRzi0;gQlia-adali0E2mo0ra,sM;al,cWedViUlTry,s2veilByR;amRem,l;!e,on;e1ia;am,d0QNem,sM;i0IWy0IW;ed0OLia;anga-anZSe0ABg05Wo,uR;c9tanR;!-R;lu0;a07e06i01lZoXro5uWv3yR;-a9HaSka,na,sR;si4;!-0PNnR;e,nR;!e,na;si1;dRrIS;i0KKy;iRy07Q;na,sa;-0PFaUeEk6n70sR;aSsaR;!-ja01A;!nd0GO;!-0PBhEn0OMro5;aCk;ni6t;!ka,ly,ra,yu;er,jabeen-afIArR;eGi1;!anSg3hRis;an,eS0;!e,ne;i1jR;e-l2;!gRnV0;an,han4W;kRlyI;enRi08S;na,z3;aRolB;l2ya09B;a5Db5Cc5Ad4Te4Hf4Gg4Ch43i3Oj3Mk3Il30m2Zn2NoENpBr0Us0Pt0Iu0Fv0Dw0Bx06ySzR;e,ie;-03a01beOQc3d0H5e,jo0NFka00lXrVsRte,va,z3;aTen,o0MLsR;aRem;!e,m,ne;m,ne;aEGiR;d2ne;a,ee,iRo0AS;!a0O6e,n7sR;!-st0H7se;!yD;!-Rh,li0na,r;diQCro5;aIlF;an0OQen0PDiTyR;m7nR;a01Re;mRn6;!-ely5e;a0CIenR;n,ss4;ee,iRy7;!e,s;d7rR;aReG;!h-jKC;ea,hUiTsa,tSyR;!l0O8;ea,i097;ld6ya;ea,ildRylL;a,eR;!-elvi0F7;a,ilye-b0GJkomina-k0KPoOsR;aTiR;aJ9lRva;ia,va;!ba;a1Hc1FdiAen,g1Bi0Ajor3l04n3qu0ERrgu0ERs9t01wa,yR;!-XaUbe0GOem,ja1kaTlSsR;a,e,sa;ee,ie,ou98;!-e0KD;!mSnR;!a,n0IL;!-bato0LL;a0g0OGiyone0M2jSka,lRyoeD;ee,ou92;ane0IRo0BH;a,h6inR;a,eR;!-rhoL;aVeUiRoNQy0N7;eRta-azee0NI;!-R;marl3;e,n6y6U;!y0;!a0MbI4eUja,ka,lTn6on,pi0F9sStRyaC;a,za;!a,k9ol,sa;ea,ie,l0N6ou8Oy098;!-UlRm7st0FQ;!a,lRou;a,eR;!-TH;a0Ac07e05felix,g0MHj04k03lZmWnVpUrSsR;o0J4t0FL;a8RoR;se,x0AW;erBhilip0IVi0EX;ei0GFi0;aRiracB;i,uLxR;im,y09Y;aTeSi5ouRu1y0IH;!i5;a,e,on3;ur04Q;im,rUA;aLe0ALosFul3;lRstKu086ve;iEMle;hRlai0DS;lo06SristR;elBi0;lTnR;aKge,nR;ai0D1e;exa0JAi0NA;!-Th,lSmRnGF;!-bai01Ba,e;ie,vi,ys;cRes0E9goret0JTjo5pauDsamant9v0E0;eXKhristi0;aSeRie,o0G6retMNuerite045;!ry;rRux;etMKiH;elRiQ4y;a,i1l6;!-max0ITiAmRyJ;!-roMe;a01d00eZha,iYnXo0HQp0B8rVsUuSviR;!t9;cReJH;ci;aHo;e0B4oR;op;at,re0B2;-katenGa,nu,sM;!l,sMt0N0;akranHie,yE;iOl;ad3e;a06e04hAiWkVlUoTu,vi0yR;!a0H0ciaRe,ka,na,si4;!-hecaN;bMOr09Du;ak,or09Cya-VI;aCia,y;!aXc2eWha,kUnTyaR;!hR;!-linds0DP;a,da;!aR;!-sor0IY;!jaL;!-melo07Eh;e0K3iRk,naC;g9y4;do,iRk,ur3yaC;c9ka,ya;aTeRia,ly,o,yD;nRrl3;a,na,z08W;m,yD;dou0DKolyR;-0KWe;-l03a,c02ka01lZmYna,qi,rVsStRv01Twen0KLya,zP;e7he;aSey,haRie,sa0KPy;!-emF;!m;aRe;!-Rh-k074;anast0C6;ou0u0;aEee,ou,yR;!a,s;!-0KKh,ro5;ha,ka,y;ee,iR;nh;aYeUiSoL1sa,usseLveGyR;a,na,tF;la-do0H6naRra;!-s03S;!eSlRra,v01A;i6y0FN;!-lRka;ee,y1;it2y;alTdaRg084u0B9;!lR;en6;iFVy;al0KBeri0AP;!-l01dGi0JHka,lUna,ssara0D2vR;aRe,ie,y;!-Rh;an1dorc0EOmiV9;aWeeVhAiUlTsh4yR;!-Ra,e,s0F9;an1keylD;!a,e,i6y;!a,eEne;!-ang0KJ;!-0CPne;ee,ys;a05d01eXge,iUl0JXoTyRz3;!sR;onEs0JSun;l0A9n0;e,ha,nSsR;an1on0G0s0JP;a,se;lRnn;ai1ei1iRyn7;e,nR;a,e,n;a0KBiRox,y0JI;eSsR;on,son;!-s0H7;lRyss0JF;ee,i0yn;ha,ie,kRy;ayDenz075;el,le;nRy;d0BUvi;a58e3Ei21lTPo0Vu0Bwo0yR;a07b06c2di09l00nXra0IZsVvRz;!iR;aRe;!-Rro5;perBro5;!aR;!-m021n24;!a,c2dSeEIka,nRsP;!a,eEH;a,ra,sP;a,e0ISiSoRu,y-0IT;o,u;-0IRaTeR;!-R;an1ho0ERro5;!nE9;el,in;!-0IMh,k0FHl3m0J5nR;a,e,ie,nR;aEe;an0EDc00dYeWiMja0IQka,lVmUnSpRthiGz0FP;e,iH;aRea0EA;!-mFBiDra;e,i0;a,u;lRna;a,la;ivineRmiD;!-r074;a,ciyZeYiTyR;!-Rdi1;jEHkaN;a0HTeTlSnR;a,da,e;e,le;!-R;aIk0EXm0GT;-ang3tN;an4;a0Ub0Te0SgSYi0Rk,l0Ond0I5r0Ett3uUvR;aSeRia;d3li0IAr0HC;-m010l05Tn3;!-07an06b05c20e04isZjaYka,lXmi6nUrSss2tcRve,x2;hi0;a0H8dR;e-neS7jin9;aRelB;!-R;k0EKro5;ia,oI9;in7y1;aUeRian030;!-R;br3NmaRy0JB;d8Xr3;!ro5;lDva;a07Ina;a,e,n0CHy;aRe0E6;m0HSnR;a,ge,n0CE;-e0GQaYca,eWiTna,rSyR;!an0DZel;aZJi7;!-aIan0HLeR;!-R;amb08IrafaK;a1da0lRn7GtH;ai,ei,ie;!in071lRn1ya;i0HFy;aRiH;!yny-malR;aiO;ka,sZ7za;l3va,zoy4;bo,el3;!ia,nR;aCe,n7;a11b0Zd0Ye0Xh0EPja,ka,l09n03o02r2sYthish0IHvUx2yaTzR;!-aIaRbe09SetNia,yF8ziCJ;!-NAnY;!hEn0BX;!-m07Ka,iSyR;!-0GOa;aRe;!-04An0FX;aReC7i,ma0CJon,sa8I;!-SbeP1nR;d07Vne;m07Dro5;!d3nUUraC;aVdTeRg,h;-Rs08T;m079s0AY;a,sRy;ay,ey,i,y;!-ima1h;a0Cea,i04lYoWyR;!-Ra6YbKjaLmD4ro5;anTblanc00Lem07IjSk0D3mRro5;ay,icha0GX;aW0oy;h,n0B7;h,uR;!-045;ah,iVyR;!-R;aSjaLm08ErR;ae,o5;nn0B0;!a8Oe1Pth;!-WaUeSka,ro5tR;!hEy;!-R;je03Vro5;!-0FSnR;!a,eEn0AT;an1jRmCLro5;e03Ruli0E5;!-Rh,s0C3;ro5soph2;l,n0GZv,zl;a,ia,ya;a,bRer05Fie,ni;ie,yE;!-m07Wh,nRra;aEe,n6y;a14da,e0Xh0i0Ll0Km0FKn0Eo0Bra,sl0At05v03xWyR;-aIaUca,el,lRn4;aRia;!-R;ivy,m067ro5;!h,n00P;a0CLee,iWxVyR;!-TaRe;!nR;e,n7;aIolPA;a,y1C;!aT8eXD;anYPiRy;!a,na;hUiTtRyc2;i7yR;!-ju1c2;!c2ss2t2z2;ic2yc2;e039i7y;!lYHnRon3ra;aCee,iRn037or6y7;!eEta;aVi,nRor6yJ;aSi7ox,yR;!-madis0EU;!-rapR;haK;!-0ENe,h;a,iaEou,ya;a00c9ghZka,lVnaTs9tR;hRic2ty;g,ic2;!-R;e0B9fl018;aRiJla,ou;!-ShRni;!-0EEel;a6Nmari6noem3ro5;!-02Ea,sa;!-R;li5sylv3;-aNEaWba,da,lTnJsa-MMvSyaR;!h,n4;ia,y;a,oR;o,uR;!p;h,naC;!-Zb91hVje024k0AXnSro5tR;icWEoA;a,d8e,i9RnRy;!aRe,y;!-093;!-Rf06Bro5;di0CHjaLkMHmiSrR;aRo5;ch0EK;bVfFjTkSlRmWXro5;ee,o0AK;im,ym;aRe01S;de,y1;elBrR;igitN;bib4cR7d15e11h0i0Yke0Xl0Wm0Tn0So0Rr0MsiAt0Ju02vYxQ0yR;aVck2iUka,lRnX7s9t0FFza-f05Z;aSieR;-aI;!-m70h;a,n0;!h,l,nR;!aCe;erVBiRya;e,nRol0BT;a,iaR;!-gabrieD;rSs01CvR;elBia;!a01eXiTryVHyR;!-Ran8Se,nV8;aN0e09Yro5;a3UeRl6Ene;!-Rl,ve;aUGcRdaNOjaL;athe09T;!-Tan0DEi1lSnRtN;!ce,ne,t;!i6le;an0eWCl0EB;!-Se09Pi1lRn0C8;i0D9ou,y7;eRg0CFje00Xk09QlNJro5;mil3ve;as9iSoR;nAya;fa,s9;aSiRk;n,sM;!-R;g0C7maRuapQ;e,xRE;n3ra;!aEna;aSbri0EBiRys;a,na,s09ZtH;!r;iHla,ou,y;es9is9s9;a,ba,ga,ka,laSnRra-veY2sJ;a,ey;!-0CKh;ka,la,tR;et2iR;cUMtiaRz2;!-I3;i-liz056on0A4;a2Pe1Gh16i0Nl0Ko0CpadXTr06us05va,weyo0yR;!a00lYmUnTrR;aRiK;!h,in0;a,lF;!bTiR;aRl0BFra;!h-co33;er0BD;a,ee0BKiR;aT9e;nEKrR;aRra;!-andr07AhR;!-jeI;a,h00L;isSushna0AEystR;al,el,i0;!hTtR;aQ7e3MiRy;!e,n06O;a,vi;il3nstanXrTsSuR;asALrtnP;i,sa8;aRiTotF5y1;!-lM4lRyl;ieTOly,yR;!an1;ce,di0;a8eSoR;a1eQP;a,opQR;a07e05k03l01mWnVrSs9yaRzMF;n0raC;aSi,pa,stR;en,in;!me,n;aalik,slP;!-summ037berlUiTmZ0yR;a,lRrK;ee,i6;!a,ly,ya;eZCi,y;ey,iRla;an1na;iRo;!araolu;rRv7;a,ra016stG;!n06MraR;!h-ZI;aTeSi8l024ryst0BGus0CDyR;aJDl3ra;i8lsPyD;dUiDlSnh,rRwD;diaHla02J;eRia;esi,si;iSyR;!-lau01U;dW4jaBR;a0Yc2e0Xhlan0Wi0Vke094l0Jm0Hn06ol09Vr02s01t00va,ySzR;al3iaC;aXisMlSsRth;ha,s3;aTiR;anRe;-am0APn;!nR;i,ne;!h,n0;a,chnayl3li0A5s2u014;cy,h2sy;a,eSiRri;!aIsM;enn-Y0nR;!-01;aZdWgny-Via,ly,nSsRya,zIS;lPy;aSeR;!dy;!l3;desti01S;aSrR;a,ia0;!h,ll;-Rd3;mael08S;eeDgo,iRo,u02E;e,lD;a01eyJh2iZlTsN8yR;!aRna;!h-ra00Ln6;ey,iVyR;!-SaR;!nYR;anRjoy0AHro5;ge,n7;!a,e,na;!aRya;!n08O;h019iy4;laMJma,nay4ra,s9th;i,y;-a0lUJna,ya0;cy,l2sVO;a033c27di26e22gom05Qh1Zi1Rl1Km19n17o18r11s0Xt0Cu0Bv09wt07yR;!a04c02dRBe01lTrSsRtl09D;ie,s3;a,il2y4;aWeTiRla,o0;aRe,sM;!n08D;a,eSiR;!gh;!-08Yha,n;!-ir09GnR;!i7ne;!s9;eeRie;!-kamilA;!h,nR;e,ha,ne;ar,hR;ar,er;ayaRiH;eh;ral3;a09e05hXiWl08SniYCrUsuY4tTyR;!aR;ya0AB;!aYW;!iRy1;c2na,o0;!a082e,na;aWerQOiVleGrUyR;!-madR;elR;ei1;i1ynJ;e,ka;e094lRrQIya;ea,i0y064;!-SlRri07T;l,yn07V;joRlyIvZY;haDL;lRna,ri0;eAi05Yy05Y;mi8sR;aQHiSyR;!a,o040;dy,eEopF;a,cia-leil4eViUlSmQolRthiVIyn;an088i1y1;-pi08AaRie,y;!-G6;!a1d2maN6n02UsMya;l091n;dIWk093to,yakumaR;ri;a00elZiUyR;!e-ellySlR;a,ia,l2;sa00K;a,lR;aRia,l07A;!-Rh;aRmaA;leja04G;i6ya;lHVr,ya;aWeVhQiTlSthB1yR;aTna,ss02S;i6yPK;!aReEla,na,ssO8xa,y4;!n03Y;ah,iW6;!ne,ya;!a,di,lVmleGnaUrTsStlRya;in,yn;ey,sy;a-hei9Zi;at,t;aK9eRiVBly,yJ;eRy;!nJ;aSe0i0lRmal4;an,iA;ia,nto;-lFc3lR;!a,iSlNSyR;!e,n,s;a,e,s;at084dSEja81;ey,ie,ou,y;a2Ce1Nh1Li1Eo0CuR;an0AbilFcY6d07lVma0nUpitYSstSv2wayrR;iy4;iRy1;ce,n6;a-suns3IipYOo;es,iTlSyaR;!nn4;ia1;aUeRja,sM;!-Sn1tR;!a,te;an1ro5;!-U0nR;aRe,n6;!-R;mRrenF;ichK;e,iZ7yR;!-R;aIe02X;a,iH;!a0Qbe,celyn7d0Oe0Iha0Gl0Cma0Bni,o0Ar07s02uXvVyR;!-TaBNceRla,s;!-R;ange05FmoloW2;ad05KharmoXW;a0iR;aBe;dSlO9ma0na,rR;i,nPy;!iRyJ;aRe;!-in04I;al3ceYEeTiSyR;-TSan1;an062e;e,finRl05VniWEphTRtN;aNOe;dRg2;anRyn;!a,e,n6;dKXn03Sry;an4naC;a,eTiSyR;-TIan05T;-THan05SeNO;en7igh-mXSn6;nRre;a,e,ie,naU2y;lRve,y;lRy;a,eR;!-R;esXAmanR;ueD;aRi7y;cheX3;ddQhX0lT0nR;!a,e,ie,n004;aVha1lTme0nRver02PzK;an7gRsoPH;!yi;!a1iQlR;!iQ;!-toPDnnLUx03JyR;an,u;aRu-baSS;de,nae-medKT;an0AePUi09l08m06n00rZsUwTySzabR;el061;da,na;elQ7y4O;iWNpeW0sR;a,e,iSyR;!ka,lF;caRe,l04S;!-kaVS;i,ri,sP;!a,elBiVnR;aTetNiSyR;!fWKka;!e,fWJ;!-04Eh;fWHsleyd04W;im4maR;!el;a062e0;my;!a,eUiTnR;a,eRiS;!lBtN;e,n6;!tN;c15d12e0Zh0Xi0Wk3li0Vm0Qn0Gp0EqueWQrm0Ds04vie8wIAyVzR;mSsRz00M;mi0;inRyn;!eE;-XdWlUmSnR;a,e,yO;e03BiR;c4e,na;aRe1yn1;!h,n3;a,e03I;lRmoKZ;en4;hniOk01lYmTpSrR;aj,eT1;ar,e;iRyn7;nRra;!a,eR;!-R;glVDmaA;eGyn;ay1;neSSsR;ir054;aZeWiTnaSos9su,yR;l3sKT;!h,t7;cRe,ka,n6qVSro5sZ6;eRya;!-mae01T;!-eva,e8lRsMt3Qva;!e,lR;-machae8e;!e,iZ2n,t;eUiRyVF;!eSlR;aCya;!-lA;el4s2;e,y4;da,ly,m3na,y02A;dRelBi0li,oLya0za8;ai;ilySLlRmes02Y;!-serapRlR6;hi1;a,eRis,y00O;!-RlO8;antoin015elU0florKU;iUkieKPl02Vob,quelR;inRyn;a,eR;!-hoYN;e,nR;da,ta;a1Gb1Ed1Derahkwi1fe,h1Bk19l12m0Vn0Po0LphiH7q8r0Fs02t01vUwa,zR;aRel,ia,zy;!-bV5belRdo8l3;!a,l6;aVey,yR;!-R;aRmiD;nn,zR;alF;!nR;a,ie,ka,nLU;a,h2omb,ta;aZeXhViUla,ob02WraRsra7ys;!a,eR;!lR;!la;do8r014s;aRit9kFEmQnoOS;!al,na;e,oluRul;wa;!a1belRdoSVli02Ao8ro,u8y4;!a,e,lR;!aRe;!-e02Q;aVeTfa1ha,iRleGma,o9;a0e,na,sR;!-UOs;h,landRn6;-g02O;!koze;an0le,nSterasR;wi;a,kweR;tiiost9;aUdiTeSgridRna,siAulI0;!-otil2;sWTza;aWYra;!aAraCsRyaC;!s7;aSeRmaculFogenWF;l01Kn7;!an,llQUnSyR;!ah;!eSiRy;!-OW;!-r1Z;a00TeWhZFiUlSo0se,yR;!-P7a0sa;a,ian6yR;an0r2;aRnT1;!n3Q;a0f,ne;hlVOraO8ueu-mR;aniQP;lZ6sR;a1sa1;a,iy4;ek019tiR;hLTssZ2;kRna,ra;aweriahTohR;entenhsehRnonterR;at3;si;a0Ie05iYoTuSweYByR;acinTMl2v3;da,go,khmQraZ8s0;daAi,lUno8orTrten5sannaSto00OuR;da,ma;!mU6;ab,ia;ie,lOD;bWlUmaTnSra,yR;ab;a,dFR;laAya;aW9dRey,laW9;a,egard;aUBet;a01beEdy,iYkiQUlUnTrSstSCvR;an2erZMv3;lALmIGy1;esMLlPnH3riett6;aTenRga,ia000ly-ZHoi5ya;!aRe;!-fatiQO;!na,y0;dRra01S;i7yR;!-diamoC9;thS1vR;an3en;-hagshaQHadiAb16cer-zeh8d12fs11i0Xj0Wl0Sm0Qn0Ho0Gppi0Fr07s06t05vYwa,yTzR;al,elR;!-g00SyI;aCdeUlSzeR;ll;eRie;eEnJyHY;eEn;anaWeUiRyhZ0;laRsh01A;-fRh;aiSK;n-Rry;mQDthereM;!-rY8;ea,he0ouQ2t3;i0s000;a,eY0iWlSmonNBnoM5pRIriJDsR;eer013ir013;eSie,oRy;we;en,ne,quXXyR;!aI;etRni,th8;!te;!neOX;ua;aYeGiXnRor4ys9;aRe;!-Te,hRlilKP;!-R;bKro5;eVRmariArR;ahPK;a,fe,ya;!a,bZMcy,e,h,n,soV4;ash2na,sR;a,iO;a,ey,iTlRo0;iRy;bZHe;e-YQmZB;ar,r4;da,ka,lRslP;a,eRi7y;e,yR;!-a0aI;a,sa;asABiSja,lPrR;ia40;aRya;!tZT;b3iOHsa,y;a1Ce0Yh0Ui0Jl0Gn0Fo0Cr01uUwR;enRyneRD;!dolR;i1yn;eVlru,nUrRylFA;ba001jaap,leGnSsehR;aj;eNKoKY;eNMta7X;gWErR;dens2lF2naK;acUeSiR;selYAta;iPTtR;a,chG;eUiR;a1eR;!-MOlR;a,le;!-Rd3lY2;an7SdiRemmanuQJ;vi1;dSldR;a,ie,y;iva-gennabYGs;eNRirP;adWQenSorRynY7;iaTGyJ;a,da,na;aZfNGgi,lYnXoVrls,selUtTuliR;aRetH;!nEH;a,ty;a,e,le;ia,vanR;a-dezO1na;aDSgPI;da,liQ;!-khVOda,nnRvWP;a,i7;aSea1iRym;na,slE9ta;dRl2;ir;l2m03nYorgUrR;aSha0i,mE5tR;ie,ruL;eYVldFD;eSiR;a,e,na;sRtN;!-zachaSX;a,eRna;nTsRvieTP;isRsy;!-liveWA;di;!m6;bYdWDelQCiXlVneev,rSyR;aWNeDle;anXQhSihW3nR;et,i;yaI;aRe,iWA;driXCx3;a,lJna;elDieErSyR;!-SQ;ielA9ye2O;a12e0Qi0Ml06o04rRurahJ;aYeSiR;da,eda;dSja,quenO6s2yR;a,ja;a,erR;iSyR;ck,ka;kRBqOR;dWYiIGnR;!cRk3;esShesOiRoi5;a,n6sO4;!ca,ka,se-ludn3;rouhINtiXVutR;oum;av04e01oRya;!rR;!aXc3eSiRy;anWBeE7ne;!-JVlUnR;cRti1za;eRia;!-gVE;ie,l3;!-lFlJPnR;ce,e,ne;chereSurR;!-aIal3etN;!-emMY;iRy7;!aRFe;by,dTfa,hUYlome0nlPoRrdawsT2t2;na,rR;a,ePJina-feL;el2ji;b01d00eZlTmG0rR;iW6nRyW6;!anVN;ec2iSlicAyR;c2xe;cSma,sh2xR;-aIe;iRya;aEe,te;!-li4Lby;eriN6or4;by,erly-ae0;b0Gd0EelBfaWWhiLRi0Al09mAn08o8r02tVuUvoTyR;!e,liR;a,c2ss2;ri0ur;stiUEve;iVma,na-n0AouR;!maR;!taR;!-R;binHza93;ha,maR;!-z04h,tFL;ahVdUhaSiRr4yFTza0;ah,d4shH;-nouraRna;di1;is,oV5;!-fatLA;gxTAnIKta;lUQyc2;da,gBJthRza;!-RlUR;eT4lR;u0yI;ia,ouma-zRyD;ah8;e9iRy;a0eR;-tou8n1;a58b57ciBd51e4Zf4YglanRMi4Uk4Ql2Lm1Gn1Co1Bp19r15s0Wt0Ru0MvYwa,xa,yTzR;au8eRra,za;chkiKl2;aUlSmi,raR;nn4;a,ulR;!-huUE;!n0;a06eUiTlSoRv4y;d3lJG;in6yTS;!e,ta;!-01di0lWnTFrR;est,lR;eSyR;!-sDCe;e-RiIU;kaN;eGiUyR;!nR;!e,nR;!-TRe;e,nOS;c2Tel3lyImKKpascaBriLOv0N;!-VbKdnPeUh,lSnRro5;a,geliBKie,nALsVAth2y;eyi4iF0u0yR;!a,n7;ll6;e1Rja5GlSmaRpearl,ro5soRM;ri6uLy;e6uc2;genRla,niUGriK;etNiR;a,eR;!-aR;n1rthemi5;hU1iaToStR;a,el,y;iBnam-ayoFL;!m-Rn1;emJT;alONhaYiXmeWoMperanVrA4sUtR;eSherRrLUy;!-c28;e,f01l6Ur;il,owedeUF;ce,za;!e,ralT8y;le,oD;al,l;el,iSma,nestB7yR;ka,n;c6Ken,kaETnR;!a,y;hniLifR;an2;l2n3wSY;aTea,iSjDQley-SQnaROoRriOuLFya,zo;h8la-6OraC;d,th;elBm;a0Qber0Pe0Li0EmYna,rXyR;!-Ta1lSrR;auLo5;ee,ia,ou;ePAjRlFpiKMro5;aReGJ;de,mR6ne;ie,yn;aUeSie,yR;!-SDka,lTQ;!rR;auLie;!-Ue0IjaLlTnuelR;a,lR;a,e4H;ee,iOWyRX;aIcVeOYgT5ja80kaNlTolisSro5soR;f2ph3;sa1;e6ou,yR;ne,v2;aroShrR;isPA;li0;!e,ka,lRra,va;cNDee,iTlSou,yR;!-FKaRJ;iR8y;aO0eR;!-R;melRSro5;lTrRtSA;aReAUsRUy;ld,nSPuL;da,iaNHyRK;!lFK;!-O2eUlTnRro5;!at,uR;elBH;ee,ie,ly,yn;lBve;a1Pdi0e1Gi0Vk0Tl0Em0Dno8o07s06v04ySzR;a,irr4;!-01aXeEjaLk2mAJn6ro5sTzaR;!-RbeKEn1;ja1;!aSe,ia,sR;aCee-reuvGia;!-RAbeRndIM;lBth;!-Sh,kO3nR;aEe,nM9;ja1kRro5;ym;a09jaLmA8ro5;a,iRy;na,ra;a,i7y;an1dUiTrSuRy5;a1i5;aCie,y;na,seB3;ieRy;!-lS8;a,i0;a02eQJiTyR;!-N8a0Cne,sR;ia,on,s2;aWeRpsPSsQXya;!-R;aTcSjRpiISro5;aLeEP;harlotN;nnJ;!naR;!-nR;daA;!-Rha,na,y;gRFmRro5;ay,eghQ;aRy;ssA;!-QCa07c2da,e04f02j4ka,m,n01o00sXv2yaWzR;!aR;!bethRveH;!-R;maM6proR;vid8C;h,na;aRe7ha,ia,s6;!-Q4betRn1p3;h,ta;na,ra,t;!a,e,or;!nR;az;!-Rne;aRjaLro5sO6;nn6;!hSnRro5;aCe,n6or;!-aR;naK;!aXkt8nWonRy;elBie,orR;!a,eR;!-R;olR;iv2;!aBJi,na,oGX;!nR;a,e,na,orKL;!f,iUnTrSu8yR;aCna;a,iQG;a,ne,orJ;a,nR;a,e,nah-nitanPW;!aSeRmQnGKta;ys9;terinRu;a,i;dHClSmRsMvy,ya;an,y;eGidh-benHlRya;ya0;fy,rem2tih2ya;la,vR;ee,y;a,eUhPRiTjSmil0na,viac3wi0zR;ah,ra;ee,in9;a0e,th;lRn;!le,weiEN;ah,ba,ensOya1;b9le0;a1Xe16i0Vj0Ho00rXuVyR;anTen0DlRna;anR;!e,n7;a,na-eND;aJlceRnA;!-adrBNl2mFI;aiSeR;!anOH;zy;an,h06l05m03n01rStt3uRva,xa;aa,n2;aKAcJ6eYiXla,othTra,sa,tSy-aR;nn3;hy;eRy;a,eR;!-ceR;lesN;a1ce,n6s;en,ss;aRg,ia,na;!tGW;eRinFC;niG4;orMUsaf-anaON;!aG0;a02eXiWouVuR;liSmaR;!eD;a,sR;saC;li6n7J;aTta;e0hi0mMnTsSylR;isM;smi1;abP5eRn4;!-zei0ba;miDnR;ay4elBna;aTba,em,hAk8li8CmSnaCoRrGs9vi0x3ya;n1r;a,i8;gniDka,lXmVnSrR;afa-maiDra;aSd8eRga,n6;!-angeD;!-vFB;ilO1oR;nd;a,lo;an0Eb08cAde,e07hb2i06ja,lZmetr2nWri1sUvSwR;mi;aEoR;iJ8r4;irFtR;iny59ynP;a,iRsc3vFB;a,ce,elBsRz;e,ha;aViUlTorSphRya;ay,ee,i1;es,is;aIDia;a,ce,l4;!ra,yR;la,na;dE9rdE9;!dFma,na;!bASorRra;aRha;!hR;!-R;j96kitumR;aiOI;a,dDNnR;!aRe;!-stereI;ba,c0YeDfnF0h0Vi0Uk0Sl0Mm0In0Aphn08r03s00viYyR;aUi0leTnSsR;ha,i;aCiss4;!ni;!nR;aRna;!ra;-kRdJna;ueC4;hn2WsR;i1ylvaR;-queG;a,by,cUeGiTlRya;a,en6iRys9;jFne;a,lMDne;ey,ie,y;a,eRie;!e,l2y;aVeUhAiSlNFnJyR;a,ka;!a,ca,elRka,s5;!a,e,l6;tNva;!eShR;!e7;!e,ve;ariH6iSyR;-victorAa;aLFka,taR;jo;eVh2iTlSyR;!aLCce,n0;as,i4y;!aRda,e,laCs9y4;!h,nLZ;en,i81;oHsR;ha8;a,la,men-axe,na,ya;ab,lR;iRya;aL2e;henRi1;a,elB;a3Fe31h1Di19l0Mo05rVyR;bKlGRnTprLRriR;elleRne;!-el89;di,thiaE;eYisSystaR;!l;l3tR;alUelle-euTiR;anaelisabetHnaR;!-JL;gen3;!-maLQ;d34edRsl3;anLY;heGl04nYopD1rTsiBJuR;mAYrR;tn4O;!aTdL9iSneRri1ta0;au,l2;!e,nK4;!-lFlR;!iK1yFS;n3sR;tSueR;lo;anSeR;lBnLL;ce,di0za;eSleGomR;be;en,tN;a00eVoR;eTtRvCJ;hRilL;ilL;!y;a,l2menToR;!fEZkayNpRr;at8hF;ce,tR;e,i1;ir01rVudR;eTiR;a,e,neR;!-daniKT;lBtN;aTeB5iRke,y8B;an0ce,sRta;!s6;!-Rh,nKY;eGPjaRlFro5;de,ne;!-mAQeR;!-ma8;a8bKdTer8l2nRrHyI2;dRsC2;el,i,y;al2;a0Le0Ai08loe07ouro06rSuqiaoRy0;qiao;isVysR;oTtR;al,haRia;-princBKl2;uDvalantKW;elJQmYphaeXsy,tR;aUeSiRla-jahyeDyJ;!an6e,la,n6;lCZnRva;!v3;!bKlRnD0;!-gKB;loG3;anJI;uk;!-vB2e,y;a8de8nenRri1;ye;d00ilDkZlsVnUrSvy,yR;en1;!iRna,yl;!e,fa,sh;ai,iA;eRie,y;aRe,y;!-R;ro5sH6;am,i0;i1va-elio8;anKLd0Ih0Hi9Gm0Gn0CrTvSyR;a,il,mHK;a,y;elBi07lSmRny;ai1;a04e03iVotteTyR;!-Re,n7se;eFFro5;!-R;jiaj2m1P;anIXeTne,zeR;!-seR;re0;!-Re;aTjaLkaNmRro5;aRia;e,uL;nn7;eEn6stGtNy;!i1;sRy4;!sa;a87cINd8eTi,nStRy;al,elB;ah,j3;lJFz;!e,ma,s;d,ra;-nelsI6a,i1;c00lRnaAri1ylQ;eUiSyaR;!n4;aRn6;!-laurF;na,sR;!tR;eSiR;a,n6;!-yollanL;eTilR;e,iaRy;!-m8K;!l2;d3e6Ei0Yl0Um0Lnd0Jp0Ir06s01tTwerEIyR;dRl18s9;enIL;aVeri0hSriRta7Y;na,o0;a7WerSia0leGrHPyR;!-aI;in6;lRri0;eRiFB;ia,ya;aECey1HsR;aTend8NiSyR;!-aIrK;a,dy,e,ll2opeH0;ndr6;a,deesha-kaylFel01i00lVmeTolSrRys;ie,ol,yaI;!-aIanHIe,inGGyn;lRn;!a,la;aUeTiSyR;!iGEna;e,na,y4;ne,y;!-brun3;na,sM;le,y;elAri;aHUiR;ce,de;a8eXiR;e,lR;a,e,iSlR;a,eEia;aRe;!-clR;auL;lRrGP;i6l2yJ;ai,iTlRysH;a,iR;eEoCJ;!e,sHxa;lPs2VtlR;inJynG4;a2He1Ih1Ei10l0Po0NrTucSyR;ll3;ky;a0He0Di00oXuVyR;anSen1nn,tR;anA;a,naR;!-alex4;chRneA7;a,ie;c9nwGAokR;!e,lynR;!e,n;an01dYelXgiWha0ll30nVtRya;anTha7WnPtR;!a7VnR;ey,i,y;ie,ny,y;nlP;d,tN;a,l6;gRinE8;etR;!t7;a,nRty;aCe;anDKeTla,nR;daRna;!-lF;!-EX;c9elyn1nR;a,dR;i7y;!bbi7fBZnRuaH8w3;iHn3;aWeTim3BossSytR;he;om;ssRueI;!iR;ng;i6Kke,nSyR;ke;cRdi1;a,heR;!-eDP;an00lVnTssSthuR;shA;an,en;du,eHtR;a,ou;al,ie,lR;ieSyR;!-aIn0;!-R;aIchl68ro5;caRka,s4;!-R;el7PkrystR;al;aSruR;viO;iraGEvR;gCHya;a0Lc0Hl0Dn0Br04s02tWulaCvUyR;aRza;!nR;ca,e;!erlR;ey,y;hUsy,tR;e,iSyR;!-EDe,lFQ;e,na;!an28o8sR;aiEI;ma,sR;!ie;aWeVliTnRr3Qt9yl;adRiF6;etNi1;e,ndR;ja;niF2;k4nge5D;edicNiRnyl2z;!ta;atriEYiTky,lRv2yM;aRe,v3;!-DWn3;a,nE3;ca,kR;a,ie,yR;!-R;joy;!h,lTnn3trR;iRyEP;ce,x,z;deGie,ye;aFEby,f07ha06il05mbi,n04rXsVtTvno0DyR;aRiQlasQ;!n7;hya-kaRi4oBM;dy;!ma,sRya;ma,y;aWbSwaR;ko;araRie,ra;!-jR;esR;sy;a,k4;ee,u;a,ey,y;ar;reG;aENbDLcDIdCBeC3fC0gBThBOiAWjaC2kAOl7Xm6Tn3Fo3Ep3Dq3Cr29s1Nt1Iu0Tv0Ew0Bxel0Ay00zR;aWeTi7DraCuSyaCzR;elAur8;l,r83;lSnR;or;!i6le,ye;el,fa3Nil2lSriR;a,elle-kekeBK;e7Xi6l3y;aXchetE7da,eVia,ka,lRm0Roub,shaC;aSe1iR;e,n7s;!-dR;ia0;!es9leRs9;n,t;!-b5Ch,la,me,nRsofAt;aCe,naR;!-sel4h;!leEya;aRo-helQ;!-marieR;me;a00eViUleGni,rSyR;ne,s9;eGiR;l,n;a8Ie0va,y4;il2lUna,ryRy;!-R;lRsnow;iv;!li0y;!-UaDYh,lTnR;a,eR;ga;ee,on;gD1ro5;b0Ccea1d05gust04l00phZrUtTxR;a1iR;ll2;om1umn;aTeRiZor6ya0;lRoB;i6l3y;!lRne;ie,y;el3;iSyviR;a-BQ;e-Rna;an1;a,in6;aB1eWrR;a,eSiRy;!n8H;an1e,ne,yR;!-R;aIjaL;!sM;e,rR;eRie,y;e,y;a8en6ThRiAri0ta;al2eSiR;na,r;naRs9y0;!is;a0Be09h00iyaCmZnaXra,sTtRya;er-li5ou,rR;ee,id7;anBPiSyR;aCl;a,l7nRya;ad,et;!-R;lyI;aJi1;aXiWlTmeGrRtB1vR;it9;en;eRi7yAK;e,iRy;gh;a,ra;!a0ntR;i,y-ky59;eRnCE;l,s;!bKl,w2Q;a0Pch-B0de0Oe0MghawQi08l06m05n02o00piHrZshWtemis7usC8wVyR;aSelRna,sM;!a,le;!h,m,nR;a,e,n7;a,en;i,o,pR;reR;et;ey,ia1;na,s9uR;sh;aRiO;kallRli,q;ak;aBYon3;eRo;e9Un6tNy;aZeVj,nTsSyaR;!h,n7Z;ha,ta;aRe;ss;!lRve;!a-trRe,l6s;iniR;ty;!-liMd1h,m,nR;aSe,h,nR;a,e,y;!z;an;eRni;ba;lBn;!bellaTce8AmSvRya;anbu,in9T;aHozB7;!-1T;iDsa;ol24po24;ife,ss;a2LchanB3d2He27f25g1Qi1Mja92n04o02si01tYuXviWwVyR;aTebeRla,sMz2;-kataR;leA;!-elio0;es9;!ka;s9un;a,h4OoR;in7MnR;!elDia;ma;op,ra,uR;chOk;!-0Ua0IeViTjSlau8mWnaiRysM;ck;a9Pol3;a,c2eRka,l3y4;!-lou1M;!-Sli5mRtN;ar3;a09ch07e03fZlaXmarVnagelFprunKrTsRv0O;aRo0R;raC;aRo5;faeB;guRie;eriN;i2XureR;!n9M;lSrederR;iq12;eRo8;ur;lSmRs0K;manuK;eonoR;re;lRrist3;oe;bi9Hgn71nR;drF;!-YbeXeWhFiVlTmSstR;as2;ar2e;iRy;e5sa;ca,l76s;!l9Dve;l1Mth;bKe4Tk4WlSmaRpi05ro5;r2uL;au8ouR;cy;eZfrederiYga8NjXkla8luc2mycWnaKsoVtaTvR;ictR;or2;nRr4;ny;ph3;ca;esM;k,q07;lTsR;thR;er;iRyJ;e,sa0J;!a,eDka,la,ra,sRta;aCha,saR;!-Rh;maA;eSie,yR;-lF;!-01e,lSmR;ay;!aVdeep,ei,iSla,yR;!aIk6;a,cSe,kJn6qR;ue;!a,k;!-R;pRroyaB;auR;li1;mic4peniR;elD;el,isM;sa;!eZlSsOtRy4;h,te;!iRla;aRe;!-R;elR;izaR;beR;th;ka,t;a,i7jeDrR;a2eRiA;aRe,ia;!nn6;!-05ah8Ab03e02g9h01iYk3FlWmVrUstasSxandr2yaR;!h,tjot;iRs2ya;a,ya;ay,o5;ar2ilF;iRuc2ya;a,ka,ya;!cSka,sRta;!ha;a,ca;!iH;!e,l7Ive;!elRia;!l6;bKe2XfPk30mTpR;aiR;ge;ar2;a0Hb0Ee02iUna,o8yRzP;!-Rl2n4ra,ta;jaLlRro5;ee,i1;!-5Xah,eXlWnaUraRy4;!-Rh;eRmery4H;viA;!taR;!-kim2;aCia,ya;!lD;-01e00lTn,rSthysRya;!t;ah,y;iTl2yR;!aRe,s5P;!n5A;aRe,ya;!-Rn5V;eliRja1ro5;za;!na,raC;ly4;ar,erSrR;e,o5;!ly;a72bKelBhAia,l01nXrVtull4yR;aRll2;!-Rh;jaLsR;ar4;aRie,yll5O;!c6Rh;a,dTee,iRy;!-renR;as;a,i1;!iRya;a,e,y4;a29b26d24e16he0i0Jjaz2l0Am08on07t06u0vi0yR;!-04a02cZda,e,nYo0rXsTvSx22zR;ee,ia;iaC;!a0Me0Nha,on4JsRun;!aRe,ia,on;!-Rh,n;quiIro5;a,o5;!a,e;e,iaR;!-Rh;jaL;!h,nR;a,naC;jaLro5s2D;a,hY;a,d8;aRude0;!s;eYiXow4KyR;!-VaUc2ia,na,sRxe;hSia,on,sR;a,ia;ea;!h,na;jaLxaI;cAeEs4Ay4;g8iy4;!-0Ba0Ac03e01k,ma00n6ro5sVv2x7ySzR;!a,e7ia;aRe;!hRnn4;!-m2;a,hUoTsRya;!aRia,on,ya;!n1;a,n;a,ba;!ya;!valeR;ry;eUiaRya;!-R;hoRro5;pe;!-R;aImR;argaux;!n1H;soR;le50;a,c0Ne0Kgr2i0Ija0Hks0Fli4n0Ess0AxSyRz2;ah,na;!-05a00eZiTsa,yR;!aRna,ss;!h,nn6;!aUeRn6s;!-R;jaLro5;de;!-m1Zh-mRn3L;ei;!i;!nR;dRe,n7;er,rR;a,iR;a,ne;eSkenned3sandR;ri1;ve;aTiaRya;!-kR;im;!nd8;a,n4;andrRia;a,iA;nd8;na,sR;ha,sa;ah,ha,nSshaRyaCza;!-lourd1C;!aC;!ia;ea,o8;ra;aSerRie;ti1;!n2S;a,e,iWku,nTra,sOyR;aCna,s9;ha;a,iRnaCy;!e,sR;!se;aRna,s,ya;!-rejoi37;al3eXhsWiVksWoUriTsR;a1ShiR;!t3S;ti;fa;!nis3ra;haA;el4mi7;!a0ba,cha0Gda,e1Dk0Dlee1Om0Bn08r4sXvWyUzR;aRly;!-wapukRh;un;anR;a,na;a,ey,ie,y;hYlVsaR;!tR;a,ouR;!-rassoR;ul;inSyI;nn;g,n;aRwaryaJ;!-adRh;am;hSn3slP;ey;oa;eRie,y;e,riO;a-bernadRo;etN;te;!-Rt2L;sof2;eUjTlSuRwe2Yyl3;va;em;in;li;aUg3lSnR;es;ae;ie;phAtR;a,h6;ya;iSna1raC;ne;!y4;lUnerTrRva;gs,iR;elBs;ys;-taTiHla,yR;ne,s;ta;li4;a0Sble-kayim0Rd0Le05i00jaZnelYoXrRya;eViRy4;anTeRna;lBm4nR;a,e,ne;a,e,n6;an0;n2ra;ly;!-seynab1N;ba,ki,la,na,sRva,x2;sonRyn;!-galR;abR;riK;e05lSnR;!na;aZeYiUlTyR;!a,nR;!n;e,ia;aSeEn6;!-X;!-rocRh;io;!ne;!iR;de,nRs;e-R;ro5;ba,na;iTyR;!sR;on;e,lSsR;on,yn;yn;da;!hi,irJlRma;ee,iTyR;nRs;!a,e,n;e,ne;ac2eciSil7kR;el2;us;a0Qb0Ge0AiXlaWriVsUyR;!-0EgaSnaR;is;el0Gil,le;at0I;elBl,sh;!k0T;!a,e,gTmaSrJshna0Tygay0K;!a;el;aRelBuK;eVilRle;!-R;eSlF;ee;le0;el,lR;!-gRe,le;raR;ce;eUlR;i6lR;a,e,ya;a,e;-Rha,r;gaK;ey,i7yR;!-Te,gaR;elRil;!le;gaKlSro5;se;ou;elB;le;!e;gaR;il;d07eed4ha0i03k01l00maZni,rTvR;a,ieD;la;aViTthiySusRya,za;hi;aa;a,fR;at;vi;ni;ay4iy4y4;it2;ia;ma,raCza;!h;na;ah;a,hRya;viOya;ka|Infinitive\xA60:6Y;1:7C;2:7A;3:79;4:5F;5:74;6:6D;7:6L;8:78;9:6W;A:73;B:76;C:6R;D:68;E:7D;F:60;a6Qb69c5Bd4Je43f3Qg3Jh3Ci2Zj2Xk2Tl2Km2Bn28o24p1Pques3Rr0Xs05tWuRvOwHyG;awn,ield;aJe24hist7iIoGre6H;nd0rG;k,ry;n,pe,sh,th0;lk,nHrGsh,tCve;n,raE;d0t;aHiGo8;ew,sA;l6Rry;nHpGr3se;gra4Wli49;dGi8lo65;erGo;go,mi5H;aNeMhKie,oJrHuGwi5;ne,rn;aGe0Ui60u5y;de,in,nsf0p,v5O;r37uC;ank,rG;eat2Vi2;nd,st;ke,lk,rg5Os8;a06c03eZhWi4Jkip,lVmUneTo56pQtJuGwitC;bmAck,ff0gge5ppHrGspe6;ge,pri1rou53vi2;ly,o3D;aLeKoJrHuG;dy,mb7;aDeGi2;ngth2Lss,tC;p,re;m,p;in,ke,r0Yy;iHlaFoil,rinG;g,k7;n,t;ak,e3E;aFe22i7o5B;am,e1Qip;aHiv0oG;ck,ut;re,ve;arCeIle6nHr2tG;!t7;d,se;k,m;aHo4rG;atCew;le,re;il,ve;a05eIisk,oHuG;b,in,le,n,sh;am,ll;a01cZdu9fYgXje6lUmTnt,pQquPsKtJvGwa5V;eGiew,o4U;al,l,rG;se,t;aDi4u42;eJi5oItG;!o4rG;i6uc20;l2rt;mb7nt,r2;e5i4;air,eHlGo40reseE;a9y;at;aDemb0i3Wo2;aHeGi2y;a1nt;te,x;a5Dr4A;act1Yer,le6u1;a12ei2k5PoGyc7;gni2Cnci7rd;ch,li2Bs5N;i1nG;ge,k;aTerSiRlPoNrIuG;b21ll,mp,rGsh,t;cha1s4Q;ai1eJiEoG;cHdu9greBhibAmi1te5vG;e,i2U;eBlaim;di6pa4ss,veE;iEp,rtr43sGur;e,t;a3RuG;g,n3;ck,le;fo32mAsi5;ck,iErt4Mss,u1y;bIccur,ff0pera8utweHverGwe;co47lap,ta3Qu1whelm;igh;ser2taD;eHotG;e,i9;ed,gle6;aLeKiIoHuG;ltip3Frd0;nit14ve;nGrr13;d,g7us;asu4lt,n0Qr3ssa3;intaDke d40na3rHtG;ch,t0;ch,k39ry;aMeLiIoGu1F;aGck,ok,ve;d,n;ft,ke,mAnHstGve;!en;e,k;a2Gc0Ht;b0Qck,uG;gh,nC;eIiHnoG;ck,w;ck,ll,ss;ep;am,oDuG;d3mp;gno4mQnGss3I;cOdica8flu0NhNsKtIvG;eGol2;nt,st;erGrodu9;a6fe4;i5tG;aGru6;ll;abAibA;lu1Fr1D;agi22pG;lemeEo20ro2;aKeIi4oHuG;nt,rry;ld fa5n03pe,st;aGlp;d,t;nd7ppGrm,te;en;aLet,loBoKrIuG;arGeBi14;ant39d;aGip,ow,umb7;b,sp;es,ve1I;in,th0ze;aQeaPiNlLoIracHuncG;ti3I;tu4;cus,lHrG;ce,eca5m,s30;d,l22;aFoG;at,od,w;gu4lGniFx;e,l;r,tu4;il,ll,vG;or;a13cho,dAle6mSnPstNvalua8xG;a0AcLerKi5pGte16;a15eHlaDoGreB;rt,se;ct,riG;en9;ci1t;el,han3;abGima8;liF;ab7couXdHfor9ga3han9j03riCsu4t0vG;isi2Vy;!u4;body,er3pG;hasiGow0;ze;a06eUiMoLrHuG;mp;aIeHiGop;ft;am,ss;g,in;!d3ubt;e,ff0p,re6sHvG;e,iXor9;aJcGli13miBpl18tinguiF;oGuB;uGv0;ra3;gr1YppG;ear,ro2;al,cNem,fLliv0ma0Cny,pKsHterG;mi0D;cribe,er2iHtrG;oy;gn,re;a08e07i6osA;eGi08y;at,ct;iIlHrG;ea1;a4i04;de;ma3n9re,te;a0Ae09h06i8l03oJrGut;aHeGoBuFy;a8dA;ck,ve;llYmSnHok,py,uGv0;gh,nt;cePdu6fMsKtIvG;eGin9;rt,y;aDin0XrG;a5ibu8ol;iGtitu8;d0st;iHoGroE;rm;gu4rm;rn;biKe,foJmaIpG;a4laD;re;nd;rt;ne;ap1e6;aHiGo1;ng,p;im,w;aHeG;at,ck,w;llen3n3r3se;a1nt0;ll,ncHrGt0u1;e,ry;el;aUeQloPoNrKuG;dgIlHrG;n,y;ly;et;aHuF;sh;ke;a5mb,o5rrGth0un9;ow;ck;ar,coSgDlHnefAtrG;ay;ie2ong;in;nGse;!g;band0Jc0Bd06ffo05gr04id,l01mu1nYppTrQsKttGvoid,waA;acIeHra6;ct;m0Fnd;h,k;k,sG;eIiHocia8uG;me;gn,st;mb7rt;le;chHgGri2;ue;!i2;eaJlIroG;aCve;ch;aud,y;l,r;noun9sw0tG;icipa8;ce;lHt0;er;e3ow;ee;rd;aRdIju5mAoR;it;st;!reB;ss;cJhie2knowled3tiva8;te;ge;ve;eIouEu1;se;nt;pt;on|Actor\xA6aFbricklayEdBengineEfireAgardenEh9instructLjournalHlawyEm8opeKp5r3s1t0;echnBherapG;ailJcientFoldiCu0;pervGrgeon;e0oofA;ceptionCsearch9;hotograph8lumb8oli1r0sychologB;actition7ogramm7;cem5t4;echanic,inist5us3;airdress4ousekeep4;fight3m2;eputy,iet0;ici0;an;er;ccoun6d2ge7r0ssis6ttenda7;chitect,t0;ist;minist1v0;is1;rat0;or;ta0;nt|Honorific\xA6aObrigadiNcHdGexcellency,fiBking,liDmaAofficNp6queen,r3s0taoiseach,vice5;e0ultJ;c0rgeaC;ond liAretary;abbi,e0;ar0verend; adJ;astFr0;eside6i0ofessE;me ministEnce0;!ss;gistrate,r4yB;eld mar3rst l0;ady,i0;eutena0;nt;shA;oct5utchess;aptain,hance3o0;lonel,mmand4ngress0unci2;m0wom0;an;ll0;or;er;d0yatullah;mir0;al|SportsTeam\xA60:1M;1:1T;2:1U;a1Rb1Dc0Zd0Qfc dallas,g0Nhouston 0Mindiana0Ljacksonville jagua0k0Il0Fm02newVoRpKqueens parkJrIsAt5utah jazz,vancouver whitecaps,w3yY;ashington 3est ham0Xh16;natio21redski1wizar12;ampa bay 6e5o3;ronto 3ttenham hotspur;blu1Hrapto0;nnessee tita1xasD;buccanee0ra1G;a7eattle 5heffield0Qporting kansas13t3;. louis 3oke12;c1Srams;mari02s3;eah1IounI;cramento Sn 3;antonio spu0diego 3francisco gi0Bjose earthquak2;char0EpaB;eal salt lake,o04; ran0C;a8h5ittsburgh 4ortland t3;imbe0rail blaze0;pirat2steele0;il3oenix su1;adelphia 3li2;eagl2philNunE;dr2;akland 4klahoma city thunder,r3;i10lando magic;athle0Trai3;de0; 3castle05;england 6orleans 5york 3;city fc,giUje0Lkn02me0Lred bul19y3;anke2;pelica1sain0J;patrio0Irevolut3;ion;aBe9i3ontreal impact;ami 7lwaukee b6nnesota 3;t4u0Rvi3;kings;imberwolv2wi1;re0Cuc0W;dolphi1heat,marli1;mphis grizz3ts;li2;nchester 5r3vN;i3li1;ne0;c00u0H;a4eicesterYos angeles 3;clippe0dodFlaA; galaxy,ke0;ansas city 3nH;chiefs,ro3;ya0M; pace0polis colX;astr0Edynamo,rockeWtexa1;i4olden state warrio0reen bay pac3;ke0;anT;.c.Aallas 7e3i0Cod5;nver 5troit 3;lio1pisto1ti3;ge0;bronc06nuggeO;cowboUmav3;er3;ic06; uX;arCelNh8incinnati 6leveland 5ol3;orado r3umbus crew sc;api5ocki2;brow1cavalie0india1;benga03re3;ds;arlotte horCicago 3;b4cubs,fire,wh3;iteE;ea0ulY;di3olina panthe0;ff3naW; c3;ity;altimore ElAoston 7r3uffalo bilT;av2e5ooklyn 3;ne3;ts;we0;cel4red3; sox;tics;ackburn rove0u3;e ja3;ys;rs;ori3rave1;ol2;rizona Ast8tlanta 3;brav2falco1h4u3;nited;aw9;ns;es;on villa,r3;os;c5di3;amondbac3;ks;ardi3;na3;ls|Uncountable\xA6a14b0Zc0Qe0Kf0Fg0Bh05i02jewel09knowled13lXmPnOoNpLreJs9t6vi5w0;a3ea00i2o0;ol,rld0;! seE;ldlife,ne;rmth,t0V;neg0NolY;ennis,ime,oothpaste,r0una;affJou0;ble,sers;a8ceneZe7h6il5o4p1team,u0;g0Inshi0B;ace1e0;ciHed;!c0S;ap,cc0Lft03;k,v0K;eep,opp0G;riC;dZfe0Mlt,nd;c0lax05search;ognit07re04;ap0Ee0hys08last5oLressU;anNtrol;il,xygen;ews,oi09;a5ea3i2oo08u0;mps,s0;ic;lk,st;sl0t;es;chine0il,thematY; learn00ry;aught02e2i1u0;ck,g03;ghtnXqu08teratG;a0isF;thY;ce,mp0nformMtself;ati0ortan03;en02;alib4isto3o0;ck1mewo0n1spitaliY;rk;ey;ry;ut;o1r0um,ymnastI;a6ound;l0ssip;d,f;ictClour,o1ruit,urnit0;ure;od,rgive0wl;ne0;ss;conom9duc4lectriciKn2quip3th9very0;body,o0thB;ne;joy0tertain0;ment;at2;ash,elcius,h4iv3loth6o0urrency;ld w1nfus0;ion;ar;ics;aos,e0;e1w0;ing;se;a1eef,read,utt0;er;g0ss;ga0;ge;c3dvi2irc1mnes0;ty;raft;ce;id|MaleName\xA60:15Y;1:0WH;2:15T;3:0X1;4:15R;5:15O;6:14V;7:12G;8:13Z;9:0T5;A:15A;B:15V;C:0XS;D:10H;E:161;F:0XQ;G:121;H:154;I:15H;J:12Z;K:12C;a0UNb0R6c0N5d0IVe0ECf0CLg0AKh07Wi065j00XkWUlSOmLNnJ0oHMpFMqFErCJs8At5Ju5Dv4Fw38x2Zy0VzL;aZeUhSiRoNranto-eliakim-0XIuMyL;a0E0e-1l0on;ha102ko,na102;!hNlMraL;iz,n,v8;an,kefJ;a0UWe0ZY;ad,drCed,ha0W8on-malcolm,ri,s0DIya08A;aLih0Yur0WH;o,y6;chariah-d0HFdekiAeOiNkMlyjAm0GZn11Hph0ZUus,v0VByL;d0n;aryAe;d,k,n;sh0v;ab0T0c01e00f4hYiWkRlm0MHnQo,rPvOyL;aMdLed,nH;!e0R1;an,n0R0;en,iH3;eh,ri7;d4e;!aLe15Pi05k;el,rL;iLy0TO;!aDyL;a,yA;dLk,n;!an,en;iLr0y03I;!-VXd,r;d3l,vi4;!-XariIch10HhSkL;!-PaMelLi2ka12N;oi,y;el,rL;iLyP9;!a,e;aLeT4oF;a158la5;!-OaLe12Gri;el,rL;iLy;!ah;a0ZWcarinD7e0ND;a2h0F8;a10d0Ze0Uhish12Zi0Ml0IoXsa156uRvMzaL;ak,k;anOeLon98;de0Q8sL;!-L;a0ODdeVlo0O8;!d4hBKn;anz142b0OEeya0UYg0ka,ma,nOri,sNuMvaLxu0ze;an,nyu;ma,t5;ef,ha,sef,uf;!di,es,xiL;ao;a04el,ha01l0m,nYrXsTuL;ba,c0YTmRnQri10CsOtha0FLvLzarsZ2;aMeL;nsl9;!s04Y;af,ef,ouf,sLuf;ef,ouP;esDis,n11K;bi,si;ef,hNsL;ef,iL;!f;t5ua;a0JDd0;!atLg;anLh0;!-nahit0;an,nL;!-Ln;he0UJna0MF;h,n0PB;anMiLy0;am,ot;!nL;!-mi0PB;annCdRgitalp,ks146sNtL;ch143zL;chok,y;hMrL;a2o2;aLe0TY;i,n,ya;a,dy,el;cPDdid126hNnn0rMsL;ho0G4s0QX;ik,omah0sult0zh0;iLoZOu0XJ;a,da;a0IOrC;a06co05dh0RKga0EVh04ir,j0V2k02l01mYnQoj11Eq13Drosl0PRsNt,ussoMya,zL;anHen,id;uf;e0SEh0RJinHsLt3;e0F7iL;nHr;!a2iPkOnLz0OF;!-Mel,iLy7;!-QUck,s;a2e0H3g0N6malE;ho0RLy;!ck,r,sL;!sL;-lCSe;aMeLin,o;en,n;c,n;elaIOuk;i6oLyin-e0KV;b,p,ub-talJv;ia,ya;b,ub;coLdh92ko12R;ub,v;aPiOuL;aLeshe0T0;h,nL;an,yu;a0SXu06H;nd4vLy10W;er,ieLy4;!r-L;d0GXg0MJ;a0Fe08hal3iSoPulfr0M0yL;attNlL;an,lL;!iamD;!-mikisiw;lfModL;-SYl9row;!gang095;dZlOnsMsLthB;am,d0V6hl9ken0XW;lLt1;ey,ow;an,bUde0E2eTfrSheO0iBkiGlLs1vrEyB;a10Wem,iLo10Wy056;aLe,s;mLn;!-Ls;an019eMjaLliBnkunku;cK1y;do0LFst0B5;ed0ZLid;m,y;e0LKur;dW5l9;aQdechouce0VKll0ILnde0O7rPsL;!leyNs,tL;leyLon;!-all0;!-ow3;a0XSn4;!l0;b0dVeUk120lQm0rPsNttMvinKZyL;an,de0MZl1ne;a0CPs1;im,ko,sL;esk0ZIim;n4r3;iNk4lLt4;a0R6yL;!-sant0RK;!d,s;el,l;e,l9st1;a0Be07iQladNo0MOramAyL;an,ct0WOktL;hor,or;!iL;mLsl0NJ;ir,yr;aZcUet,ha0kt0WJlla0YXnQrOsNtLva100;aLh0Z3or,tor0W7;ly,r;ag0hvas0Z7;ajLgilH;!ay;ceLn;!nL;tLzo;!-re6;!enOhJkt0W9torL;!-MiL;en,no;e06Thu027oF;te,zo;m,nLte109;ey,n9;dd4er0X6liNnMrL;n1so0YF;i,ka0Q7;-j0ns-s0W8;hQihitinRMlOnNsMug0CSyL;d3k,l3;co,sili0QN;!ce,ja,sh;eLmo0OIoCyk;ntin0Y2re;ak,e;b4go,lNm8no,qittuq,rbanny-si0KTsMtshima0QMwL;ays,e;a5h4m0;ri0W4ysL;!sL;!eD;a1Qc1Oe1Ch0Qi0Ko06rUsTuRwal0UEyLzR8;-lorr,cPe,leNrLs1;eLonH;e,n-ja0ZXse;n,rL;!-QJ;e,ho;a0WAd0VEll0V3mLnGSuvviYSv0YLwa;a0W2i;aiyAhakape101oht0UD;aTeQiLoy,um0yst0;nh,sL;h0tL;anLon;!-Lo;brav3elyo0W0mavrLG;nt0SJvMyL;!sIU;in,or;vLyv3;er,isL;!-hunt4;biXd0LAmPnOrNuL;lou0K4mL;ai,ec0YX;!r0VJ;a,han0XRy2L;!-el0HXaQiPmMoLs3y;ha1Eki;a0TTie,yL;!-Lly;al08Tjohn0M3l0J2;!ly;!sL;!so;-ga2aDe,n;-pa0PGaPd0W7ern0ki,mMno-ka09Nonerahta0JRtLz05L;an,ou0us;!a2eo,my,othLur;eLy0RC;!e,ly;an,go,m;a03eViRoLu0TJys1;maMrL;in,s3;!h,sLz;!-L;jLmV4oFpi4w0T1xa0R1;ay,o0B3;agNba0L3erL;noLry;!-boussouri0N1;go,o;a08Ll0TToNrL;en0OFiL;on,us;-NdoLge6h9Pphi0WXtimH;rLsi0OR;!-0IDe,o;aLelKgeMJiR2;l0ICuJO;dLnh-0o,r0WH;!deL;e,us;dTioter1jSmRoQrMva,yL;l1m;en0O3rL;an0O2eLy;ll,nceL;!-r0O6;!d0TN;esg3uul3;b0S6jy-0TJme0L5v0S6;!dLji-nicB2;ri7yL;!-ily0;abezi,hL;ad,ev,on0LF;d04evo,g6h03i01kZlYmXnWrTsStRvQwPyL;eNlMm,ssL;ir,on;an,er;b,m;fEOh0XO;arCia07Q;!e,suY4;e3io,os,w5;eMiLw5;k,us;k,q;ay,gu0V0n4o;arata0TMim,o,r1u;al,ha,la,on;eLsh0DXu05C;ru;c0WYmL;!ur;aORs5;eo,gh,hg;a2Oc2Je26h16i0Uk0Tl0Rmail0THne0INo0Dp0Br0Asirem-arezXQtVuOv3yLzym1;ed,f56lLph56;la,vL;a5e0SM;bh0di,hQje0XFlOnMrL;aj,e08F;kIMny-jaLy;m0UIy;aim0eymanLta6;!-f0RG;a0e;aWeLorm,ua0GTy0TJ;a048eUfSlRphPrOvLwa0GS;eMoL;!n-bernez;!-b0K4nD;a,leG;aLen;nHr0SL;io,l0;anLfensen-mar0TA;!oD;f0ve;nLthCvr0MY;!islaLl9;v,w;ishar0u0SD;irLlende0W8;id1o;an,ckni0MXfXhVlSnQphea-psJrPuMvaL;nn,thno0L1;lMmaLta;i0OAr;aym0W0ey0VR;an,en,in,ou0WL;ny,yL;!-j0PF;aMeLly0om1t0y;am,m,y;l,nn;aLeyb;i0O2n;ia6y0;a0RVen0LZiL;ma6ver07A;a0QPyl0;aVdSh0P3lRmNn0rLu,vu0NYyB;ajLe-is0PHi0VV;!ed0S3;c0QAeonNonL;!-L;oFpi0RY;!ie;as47v0R2;!dMiLj0OXney-ludL8y;!-malHL;har0S4ik;ka,m;aZeWiTloSmQnPoOrMuLy0GA;kapYLl0U0o,y0TS;aQ4iL;ne2thE;h0ONl0ONma,uvE;e0V8yd4;iLu2;el,l0RA;imC6m0P7;a,lo,mMn-drHAvaLy0AI;!an0VNn0VN;on,wa;i6SlMphe0U9rL;kh0m0v5w5;d0H7t1;ad04ba03d02hYil0ke0TMlXmVnTqu7CrRuQwNyL;aLd3e,l0n0NNze;!an,n;!eGnL;!-L;anP9e017im0P9j0PX;g07Hl,m0JPn;b2e0TFlLun,v5w5;es,o;!eLg,qi0LG;!-w0PA;ar,sL;-0R2hy;by,om;e4iNrMve4zaL;d,in;am,u69;d,ne,r;!d0IAi;az,ni,z;!wE;aWbastiUhajj,igne0UDkouGElSmRKny,pan0KFrNth0TTvMyL;di05Xmo0UCon,y0O6;an0TRen;aOgLig6;eMiL;o,us;!j;fi04Ij,ph83;e0STim,lLy0U3;a,en,ou;anLen;!-andr0RS;m0U8n03Ht1;hOoL;ot,tL;!tL;!ie,y;illems1led4;a0Nba0Md0Iel,f0Fge,h0Ei0Bj09ku,l04mWnRqQrPsOtNul,vMyL;an0TAed,f,ha0i;erio,io;hur0Io0KT;ja,u05Y;ad0KCim,p,y;ar,ib;ad,chi0QDdNtL;iLos;aVIno;eep8IrL;i0NJo;-elRaPbXNhai098iOka,mKna0KAo0RFra0Q8s1uL;elLilK;!-Le,i;f4Yjas1oF;!m,r;el,nLr0Q3;el9v0MT;i,oi;aNeMiLm0T9om1vato0PQ;a,f,h,k,m;em,h,m;hLs;e0PNou0PN;ad,ed,iLj0;d,t;!dMfLha0lPXntal0OOy0;!-al-d5an;-wassO4ou;aqi2ee0PQil,okwatawah0E2;aMoLw0SY;i6ua6;n,ri;aMdin-sa0N4ek,iLjo,ra;ne,q;!siL;va;i,sSG;dLj0m,w0;!at;a1Ne16h13i0OoYuRwon0FYyL;aMd4eLk4lan0EVou,z3;!rs1;dNnL;!-jaLn,ve4;m0QBys1;!-y0NC;bPdOf0SQixu0maanSYpe0COsL;sMtL;aga8on,y;!el02H;ol0BArV9y;enLin;!-sRZs;an,b07c06d04e0QEge03h01i,l00mVnRoPsNuMw3yL;!ce;ss2zb0PE;cLh,s,t0LN;oe;beGdLjeicen9;!eGy;!aMdo,ekwataratatKnLy;ie-3Iy;do,el,ld,nL;!-rotianoh1;aNeLiHU;lLo,ri7;io,l;inLn;!-d03Y;and0Q0la0A5;aLit;m,n,tH;l0NDr;e0P2g4ly,n9ol0PZrigL;o,ue;!co,ky;bYReLin,s1;e,rtL;!-oFo;ad,cRdQen0RWha0QYlPque-cartD4shNtLyaZZ;chYNhLv0;iavu0O9vE;an,iL;k,r0HI;ay-male0AKey0L6;am,wa6;ardRc04UhOkLo;!-oFey,ie,yL;!-jL;ax;a0QJerLie,mo09K;!-L;lea0BDrHC;o,y;aMudeGyL;ad,car0CUs,thm;li,yt;!da,eZgXiWmSnOuNwMx,yLza;an0RNl0n3A;an,en0RJ;b3el,v3;aMce,eLo0RHsWH;!-0IS;s,to,uL;d,lt;iMyL;!-ch033;-pi4nL;gt1;d,l0MWn-authr0KMth;gKiL;mbJna0IRs;dLg0z0N7;!a,l9;ad,bNUc0Ad09e08f07gn8h04i03jb0L3k01lZmXnUouTp068ronPWsRtQul,vi,wad,yNzL;iLm08E;el,ne;aMde0OMen,k0mLn,sA5v3y0;iHo08S;an,nH;anakpanhas0R9ewennattok0L5;hLl07Os0Q2t5;ad,id;f,l;ce,dMgBiL;!ehtiia0CG;al00Col096y;e2iLon,s0JQy,z0A1;!n,ro;f,i,phL;!-om8;aLiKP;diZ0n;d3h0l9y0;eLhim,im,ul;emLriiohst0KQ;!-kwe04F;ael0O4el,fi,y;d,ed,l;ie,m0o0NMv5;h0Q6imL;!-moh0OG;aQuL;aOent5iLoc,s0JA;ll,nL;cy,tL;in,on,us;n,vo;is,lA2sL;im,s0OC;a0Xe0Ph0CiZoYrMuL;r0CFtugu;aUeTiNoL;mes0ALsL;ne0BLp4;am,mael-mwen00MnLthi0Q2ySC;ceMsL;ey,l9;-Lt1;ch01MjoM1lL;auFI;manj,st1;bhno0L6ggodDMm0D2nL;ee0LZil;asKfin0COl;eMoQEraLse0LX;ji0LWv2Y;rLt0L3;-Qi,rL;eLi7ot,y;!-L;arX5eLh09WlTWm07IoF;dLl0CB;g8ri7;aMeLhuQVlTToFyv0MP;li,ti08R;lexLnJD;!a090iD;arWeViNoMylL;!ip;eni0AXng;lLn08Z;!-SMem1iMlipL;!e-eKX;be08UpL;!-Ne,pL;!eL;!-anJ2;anJ1em071;lUZnUZ;e0BDre0BD;d0KFgan0A6nd8rPtL;aNeLr0F3;!rL;!-jim0IMki0F6ly,s1;p0r;cLl9;evJivJyL;!-mille0KQ;b097d06g05hulpre0BPim0lla0NCn03o097pZrYsXtrickWulPvLxt1;eLl0EV;er,lL;!-L;kyGX;!-Linho,oosKusK;aPemOhYXiv0kNlucImL;erveLuhir0MH;ils;arC;i0MRm06G;i0CFnIF;!-0LJ;cJko;is-anNLne0BBsh0;aNeL;!-cheiL;kh;!-mb8;aLos;giotiDm-mathiI;nari0KEop-nga05J;e0LQli,ra05G;a0Xb0Tctav0Qd0Nha0Mi0Lj0Kke6l08m05n04pfo0MEr00sTtRuOvMwe0LPy0NIzL;!an,er;ad0HXiL;de,la;arith-is0M4dia0LFm8ri2sL;a06TmaneLsa06T;!-abak8;hLis,to;m0ni2;aQc8ePheaOiNk8lo,mMvL;al00T;an,o05L;rCta;!-sakyd0;e,id;ma,r069y0H2;d3eNiMlV2ri7vL;il0LX;am,on;n,sMD;awatek0HRd4esi0BJur,yx;aMerLid;!-halC;el,i4ni,r;aVeUiOl06QuLy0FL;omac0MTwatL;is08KoL;bi,mi0LA;!vL;erNierLo;!-L;far0N1richa0M0;!-L;j0HUre0HW;!k0J9;mipo0J8n08I;as,eh;h0z4;ha07Mri;alrEe09Ein,rEyL;n,sL;!seI;eMiL;an,o;!-leDX;eMiLonabyos0M9ry0;e,nXY;d,rL;on,t;k04Inkar9I;a1Hdoo0L0e0Zg0Wh0Vi09jimg0AZoOr068sh0LVuNyL;jAkLl0x1;olI;ka0L8ma080r,t5;a01d0e00hZiYj0lSma0rRss1uOvMyL;!an,l0;aBWiL;!c;h,rL;a0IGeLliaki6;d0IFne;be063dJWik,m0;aLh0;m,nL;!-Ln;h0M2jaMkeLphillA5;an0;m0JIy0BZ;am,k;a0IHl0;!l,v0;ch,h-MkLm,n;!im;aLg063j0GQkarl,l0ACno2oFr3T;mo0LLnW6;a05b04cVdUg2i06HkQlPmOnNrMsta8th0va0KWxLy08Zz8;onLBx1;us0v0;ad,g0BYit,o,ssem1;istch0A6sjuu;!a08Xs,t1;aNh0M8ko,laFOoLsh0wisCy;!laLs0A1;!i,os,s;h0n;al,ehE;co066holSkQoL;!-a0GOlL;aLo,s1;e,os,sL;!-L;vladim0FKxa0DQ;!-Lan,oYXy0ES;daSNs4N;as,s1;al,rI;m,nVK;at0HXu;anMoL;fa7nga0BN;a,mi;a01b00dZeXganci,hUiSjm0Gk2JlQo,sPtOviNwMysLz8;on,s1;en,t1;l0JIn,o;an2han2;ha,s;lhoLs1;-sB;k0lL;!s3;emiLi053;aLe;h,s;skeGtaLv;-anok04Nn;!al;o,s0DS;l,nGA;al0L4b09c08d07el,ftul06h05i04j03k02manv0ESn01o00pZsXtPvOwNx0yLz0JY;an,e0GXil,l3ren-nut5tL;e064h0on;az,e0E3f2id;a0GXis-waseyaw;anRe0IBhLt0;aMeo,yL;!n-jo9;el,nL;!-La2el,i2n,y2;aLfredd,j0F6rafa2s78;lTZns2;!a2;er,h,ir,ko,rL;ed0GE;ole1s;ki,to;abany5o0BF;e0IIia0GLoa,sh;a,d,i;f,m;el,id,ko,u2;e,i;er,ir,j0JBym;er,hm0ib;il,y;.,a33b30ccall0DVd2Ze2Aham0DGi13o04rityunj0D2uRyL;c04YkOlNoMrLshka-raymo01U;ic,ko,on;!zi1;a0es,o;aLeJ7hay04Eo;el,h-a6U;az,ftAhamRjah0JOkBnQrPsNtLzamm0K9;as0J0iL;ng0HR;a,hLsa,taX;id,raf5;ad,pOR;tas0DPz0DP;ad,ed,mL;adMedL;!-poyr25;!-Ls0IQ;aLham0DNrayy0;bdRJy0;a0Ict8d0He,h05is02k01nZo0CVrXsWtXNuL;ad0JChamPin,j08Fl0CHnNr0IJsL;a,sa,taL;fa,p0DN;djo0IYiLji;be,r;adOedMmL;ad,ed;!-L;djiX4mbaye-di00N;!ouL;!-falil07H;es,he,s0ISusK;ad,dec52isLphe0IWy;!sa07K;c0DGdU1er,n06HtL;e,he,y;ht8rB;eMhL;e,y;!-vitJs;aLc3iz,s3;mLnd;adTedPmL;adLod;!-L;hazLot0HW;iq;!-L;aMchoua07NlaMsel0HYyaL;ci6sJ9;mi6;!-aWK;iCRou;ad,h,z;a0E0c0CenZXg0Bh05XkXlTnQo,rOsNtLva0zy0GC;an9LchLia,ya,zNS;!e04V;a2hka-yaXPp0GGsa2taayaapimak5;aLko,o,za03T;c,j,l03M;aLik,j0GD;-necLl00Zto;tari08H;!aNeIFiaSKkeGl4oMtL;ia0DWon;s0I3v01R;d,no;aUeRhOi08HkNoL;-clar07VlaL;i,j;el,o;aLel;elLil,li;!-yohaX9;!-Ll-elUXy;al01SeLsam0BP;dwiX6mmZX;eLil066;el,lL;!-rL;om0D2;nene07Eu2;aYco,hPip0B4kLo,to;aMeLy;al,y;elLn02W;!-victo0F3;aPeL;al,e,ka2lL;!-jLiRG;acLu0CX;ob;-2elLh,il,l;!-L;angeLfar0EPjul075;!lo;el,m;av3c08d06h02ir,k01lYmphCnWrPsMtCYup0EOvLys034zyB;en,ri7;hMr0AsiL;ah,e;a056il0FGul0FG;aR3iOlNriMu,vinL;!-tahiR2;ck,ll;e,in;cLk;-diLk;az;ach0F8dLelEh;el,ri7y;e04WiIkyr03Sr00HviLw5;nLs;!-ev0;a,hi;ar,dMm03TraL;aj,b;!iL;!-az0G5;!erLgy;i0CKyk;e6h2;!.;aLum053;kLye;op;a31c2Yd2Te2Rg2Qh2Oi2Mj2Lk2Il25m21n1Rr12s0Wt08ur05v02wu01xSyLz3;aQce,dPeOo0BZri7sLt0v3z-maxim0G9;onLs029;!-sLn;ha052;le,s,ul;en,ji-s3;nk,sD;!-QaZZenPimLon,we02P;-oFeNilLus;iLli0;an0DWen;-oF;!d0C5e;anA5eLjayd1oF;doZLli,mL;il0B7y0A;en,na;erMrL;e7i0BVy09J;i09Iy09I;iLo;cLz0B1;e,io,k;a2e07hXiVrLUtMyL;ar,s;!-dReo,hMiLy;aDs;eMiL;as,eu;o,wL;!-domL;inH3;aLerY9;ni2vC;as,n0D8sL;!se;aTeQiMyL;as,s,y;asMeuX2sL;!-oF;!-emiL;li3;au,oLus,w;!-Ls;j09Yrob5;el,i05Fy0F0;i,oDs;oPr0ERsMtLw5;anabJenHiI;ao,iLyOQ;!l,mLne;ilLIo;da,n;cXek,fat0BPiWkSlRquCsQtNvLw0EJ;enLin;!sUZ;iLy;!nL;!ez;!ha019;in,o008;!-MoDquiZEusL;!iH;andrLoF;ay,ew;le6n0CDoDus;!-PeMly,oLus;!n044s;au,lL;!lL;iOGo;aOeMgregLjYXmigis08RoXRu0EQyl0;oi0AH;doXYlL;i,y1;lNXnMrM2uL;re0CP;d0ACtXY;aTdrSef,gRiQkPnOoMr03Ws1tIYuLvEyx,zi;!el;!e,lL;iP1o;!a,y;ir05V;!l8Xx;a,o09M;aPVi7;el,k2y;adMouL;d02Bn;!ouL;!ba;aUcoTeSiPk06WlOoMtT3yL;ck58k;!ne,rL;yk;ex;ck,kLx;-shezecLi;hi2;c09Mek,o;lm,m;chMkLmi6;ai,hai;ai,i,y;aMeo,ht8o-tayl090sLyl;en,im,ym;n,r0CJ;d,ed,o0AC;d3eve3kLlo,y2;!an,h0;amaLdWQel,ik0jesRKmoT6;d01Ot;as09Hn0D4;lLs1vE;!-jeQ7o;a0B3deOeo,i,jNox,rL;i7yL;c,k,x;ames0BVid;n,x;!aMeo,il,kL;!andJinto0D8;n,rKQ;mo0B2nI;a35e29hyBi1Vl1To0DuSyL;-3IaOdeGhBiBle,nNoLr1;!f08EnL;dr9el;dYPk3;d,ll,mLnd4;!-sLm;eb0Y;an,cWdSiOkNmum01Aqman,tMxLyaS2zy;de0A4;h4or;aNIe;gi,sLz-al2H;!-L;aLemilJ2feli05E;ng2;dV4erW4g4ovNvi7wiL;gLk;!-thodXR;i08Dy061;!-aSaPcaOiMkLreti0C8;aDgZ8s1;aMBenLus;!-haro03Z;!-fernJS;-j070h,sL;!-Ls;alW4dWC;lLRn69;am,c2Wev0g0Xh0Ui0Sj058k0Rmega-kyl4Jn0Qr0Mt0LuSvOwMyL;ck,d,k;an,eLiYK;!ll,n;enMiL;c07Zk,tz;sLzo;!ki02C;-0Ba08Bc09d07en,iPj050kMma2nLp,ra1UvEys;es,is;aLe,i,ma6;-Lh,s;fr9L;ck,e,sLz0C7;!-Lon;aYbXcWdNEeVfUgSjRoQpMr1GsLthomIvict078xa03Z;aTQim1;aNhLi07P;i04GylL;ip;scJul;li03Tvi03E;am08We0oU0;ab0BSeL;org08U;elHIreder00F;doUZmi09T;hN9yr;as9A;lLn5F;beV3exV1phonVZ;eLvE;n,vi7;asLkI;!-pat084;e07OgVAhHAmaL;r5tE0;fi,us;d,enzoNiL;an,cLk,n,s;!kK4;!-dV5;ko,nK;a0AGi,ma6;cLkCPm;!-eGXk;aLik;m,nL;!-dimit01H;an-Len,g0hQC;eVNjLmTV;a7oT7;eyt1iIoLyB;rCyd;aSem,hBlian-u0AXnPoNpa,sa066viMyLza066;am,o;s,u;c04VnLyd;!ar,el,n2;!cMdLkMo,us;!on,yn;oln;am,mMnL;!g,no,yu0;!-Ls;ax2eMjLlFZmave079oFphar0AMt91;am07Oo07K;lNBmmSDrTWxc2;a0Ee0CfterCgaRIho,i0Aks08ClaS5m09n05oUr009sSuRvOwMx035yL;d3reGth0;dLis033;ovE;!aMiLon-N7;k,n;n,ri-08B;me07Yng;h0tLzSR;at,er;-Oh,lo,nNpMrL;ic,y7;aCXo01L;!ar016el,gIOidI;aPcOfloNgTZj04Mmi009naMpaCVrL;apP2;ss4th0;reXY;hLMlQD;lLn92ymerTC;eja058;!dMno,ox,sl9tz-keLzo;nd41;onLuOY;!-prinZF;my,u2;bLf,g1Eo;!i09Py;-Lb3s1vi,yBzhWY;am,li0;mh,ndrL;e,oD;bi00Sc04fOUi02m00nVrryUsTuPwOyLzar01X;as,dLeGke,ne,s1t8W;enLon;!-pa6X;rZ2sV4;g0rL;ent-MiL;aXCck,er;chaTTgT9oFvictoSY;siKCzTO;!-03D;bo,ceOdLe;onLyn;!-Ln;jaKT;!l07Q;bLe7inHoX3;eSOrZ5;ne-Lth,z4;ed3;hl0;a2Ce1Gh11i0Ql0On0Mo08rZuUyL;-anh,aRd2e,lOmNng,o,rLs1;ee,iLo;e,llYY;a06KiA;aMeLia051li0o;!-VTiVRr,z1;n,yd3;m,nL;!sh,u;angrOnseNrtL;!isLy-all3;!-XD;vi;ui;iMysL;s,tof4;k03TsL;hPs,tL;ianNoL;ffer-alexy,pheLs;!r;!-HQ;!iv;a082bVceiZYdTFfUh3lSmRnPp08JrOsMuLvRIw3;assieQNss016;ay,say,taL;!ntinYA;om,y;r074stantinL;!os;en0l0;iLtU7ya;a,n;fi,i;eMiLy;!a,na;!-malQH;igLox;ht1;awb4eLim,ovC;av1di,in;aUd07GeSlQnOp,rMshoUCwed0yaL;n,sh;by,iLk,ollXTsl4uihik0;ll,thE;anHen,gLh0i05Lo;-hRYne,sTI;i0lLuFY;ia03Tua,y0;no,rL;an,kegaardiii;an,mbu,n0VtainZ8;aSeRiOrCurshe00SyL;lMrL;ee,oh;er,li0;an,dMlL;li0;ir,r;an,mULr02R;d06Cel,iQlLmd3ngJrC;eMiL;d,l,o;b,dL;!-iL;saVD;!li,re;a0Eb,d0De0Bh0Ai09keli-seI4l06m05nUoTphr3rRsQurt43vOwentesh1yLzv5;a05Ud3lMm8sL;hawnWEon;eb,i0;an,en,inLoS9;!st1;haVGl9;bSBem,leGmU3oa7vensLy0;!l03F;-archibaYBn05Q;!aUdrRji,l9nPri7sOtMvenslay-lov4y1zL;i,o;!aLon;rontKvio06D;h5zy;e02TyL;!-joIS;iLyx;c02DkLx;!-manoQX;ld,n;i,yrhodz-ma4;anMd3eb06Ki0lN5t1vLy0;in,yLL;!i,n;-leLJd0r02Tth-oliv4;in,od0;g0l0nanLph4vensVLway6yd3;!-giG3;dy,o05Xs3;nLt1;!u;!b0Tc0Sd0Re0Qh0Oi0Ll0Hm0An07peni3rYsUth04BvSyL;a02Dce,dOlNn0sLumUJyd3z3;aHYen,haLon,seHY;un,wn;eVAiB;an,eL;e,nL;!-mayvrEs;an,iL;!ir0n;e1ThMp4ra,sL;em,i2ym;!iL;s,us;aSeRiQlMmLonhiakatsX1rs1sLFt4un;a,elo-daUB;!-LeGh,ss1y03Y;anMeQFgPNn64oFrLsabanZwar02G;apKQo33;toi6;fa,m;em,m,n03B;m,n,s;aLe,n1t01Iz0;an-paLe,metX3ta,v;bo;aPbaNeMil,rL;an,on,yn;l,r1;!-kiL;ji;al,el,ha,nL;ga;-2eNiMo,vY2yL;an,x;fa,x;b,l,m,n;-o0dRAe03h0l3nMrLs,z4;av,oD;!oa;aaLzSD;if;d3l0;aQAeQA;e,im;aLel,ir,r2;!la;a2Ne1Hh1Gi18leyGoZrP6uMyL;d3m-hard3;aUba,dQi0jh8lNnMstinLwa0;!-chrC;a5Yelo00N;es-MiLli0yK4;an02Aen,o,us;eAJoF;aNdMe-dLl9;yl0;!s02I;!el,h;d0nL;!-La00J;baptisU0migu2pabOVs1U;-0Sa0Pb0Och02Bd0Ne0Iffrey-7Kh0El0Dn0Ao09r05sPuNvaMw3ys1zL;ef,iA;ly,n;deLneiYO;!ns02X;!ayAeWhQiMsLta,ue;el5o03R;aLf;h,sL;!-marvenL;tz;!-NuaL;!-L;ad3feliTRmiOX;eMr2JsheL;eh0;lMFvaG;!-yadi2f,li9IphL;!-L;be01NeLgamali2juZ8saLS;tiN6;aNdLeHTgeP6i7;anLeGi,on,y;nT7o;m,nP3;dZCn;!aLny;h,ic,s,tLyA;an,h1S;an,em;anMnL;!ath1Pie,nA4;!nL;!es;!-dOl,nNsLUy-L;joLkenneOM;shFY;dy,ey-tN3;ays1;-mica2eQW;-carVUey;!ch02Ed,h,kMnLquiZJs;asK;h002im;ed3naLM;aRbrQe,hPmMnLr3;!gshuo,u;!ly,mL;iLy;e,sh;ad,larCV;an,e2il;ch3la,n,yu0;aiYDeFS;an08chesk2d04e03f00hIMiroZlFTnYovGPphU7rSsPthYCvOw01IxNyL;la00NmWUo,remL;ih;!-eGQ;ah,is;ed,hv5iAsLus;!e-Lim,yVY;jXCwWU;aU8emOi2mai6oMrL;a01EyJJ;meLniJZ;!-je0;iLy;!-dMKah,e;is1l9oAs3;-saKE;fLr9;!-LeZUrMB;rVDwardn9;ka,te02Gv0;!-NeMidiahL;!-judA;!diA;maLAsaK6;-Ln00W;baZcYdWfUgM7joKKkristof,l54mSnRom7GpPrNsMthLyaHF;eo,omI;im1;aDMoL;beLR;aLhiUR;scJ;aKGoA;aLiNG;rKthC;el7VrL;ancoC;aLoLC;ni2rlanRKv01M;hristopMZlIB;pQ0sL;ti3;a1Nb1Mc1Gd1Fe1Eg1Dh19i15k10le2m0On0No,p0Mr0Js0Dv0Cw00Rx05yMzL;e,iA;!-02an,c00dVfeN4hUkTleSmPnOWrOsMth0vLzBH;eGyn;eMZon,sLun;en,i,on;e9Ai7o;aMeLiBC;!e,sUA;el,r;hn,n;!e,oMC;an,on;an,eLon;-louvEl,nLrs1;-Le,n,s;alARlL0ph01NsLterYP;koPAmylOJ;eLob;!-sherwoOTe,n,s;ar,deGE;!en,onPsMtLx1;on,yn;en,onL;!-rL;il9;!-tL;yl4;aYQi4on;e,hXFonNp4sMuL;ah,or;em,im;!-L;seLwilliaVIza6;ti;eMod,rLvC;eORis1od;d,ll;deXZnBraB;!in,o,vi4;aVeOiMyL;!e,s1;eLs1;-b,s1;sLys1;!-Lly,on;aNe6DkuK4n0XoFri7sLwUL;ebasL;ti0;leksaK0nL;thoN3;l,r;eMob,sonLub;!-lJZ;!-Ls;eLmFA;lyYUmmI5;!d3kNmMrZVsLve4y0;h,on;es,y;e,obK;an,cobi,eMkeGle2meVZnei,reMEyL;d3eXL;em,imL;!-markend2;be4rPG;d3my;!en,h3son-aJI;!ePkNoLquX3;!bL;-auguWZo;!ob,sLy;!eXBonD;!-kK2k;aDLer;f8ji,ka,nLx;ve4;a18brah16chiB1d14ehahonwe,g12hs3k0Zl0Rm0Pn0Mo0Jr0FsWtTvRw0yOzL;aLik,y0;aVDcLk,o;!kJQ;aMeLleizSG;d,s;an,dHn,s;anLha0iMZo;!-ro1A;aIMhBoBWsuMzaL;e,mAF;ki;aXhaViUkaTRlXGmaRrael-PsMuL;!m4;aLelmNG;!cLm,o,yah-kh0;!ar;nLoluwaseX3;ol0;elLilN9;!-yasL;si6;ah,doUX;aLi,q;n,q;aUPcURiMkLm,o,ya;!-marK;!aNc,eL;!-L;jonW1williaMR;!h,s;aNchXRf0hBsutPTvLw5;inLyn;!g;ah,j,klC;aLrdanC;nLquXQ;!nC;assTMuL;apEkLnnguQA;!pPK;aLmIrXX;d,m;aRh0iOl0oNyL;aLes;!nHsR6;yd;aLja,r;n,sL;!-taSF;m,nN7;eMtan-santiaL;go;!n98r;nacioLor;!-leaTH;an,en-henl9ir,risL;!sM7;eW6imL;!-tareq,a;hMin,m,nL;!-alexC;!arahkw3;a14e08i04miRVoTrag,uMyL;d8y0;beHGds1gQluTVmPnNsLxl9zaiV;nu-eym3sL;a5e5;arjWDtL;er,l9;ber38;h,uUV;aNVlSm4ngRrPsWuLwaWCzea;dMmainsudaCssL;am,e5;!ayLen;fa;acLmidI;e,io;miNOyi;d3lLm0;an,yL;scoLCwoKX;beVKd0mNnaMVrMsLz1;se5;d,o;anXA;a0Fba,ctSKd0Di09ktor-RCl06mr05nTrOsNyMzekL;aiAyA;dDVt0v3;ed,t1;bOcuVCdens-abI9leNm0ri7sh,veL;!nL;dHFs;ns,y;eGMy;driVocWRrLzo;iPyL;!-Lck;eRCjRHmatL;hiL;eu;!-Lck,k;fel2OlNpL;aLiSM;ul;ouC;ck,k,xME;iQ3y7;iMlyV8oEyL;!am;oDx;dLmsS4s2tRV;an,enL;!-L;adB;dLi,w8;eGy;th,ven-jM7;aQNb0MchUHd0Li0IjooKPk0Gl0Fm09n05o04rVsTtVFv3yLza2;aQdOes,leBHtLve85;hamLon;!-L;edwaUX;a81en-L;gG4kristoff4;an,nLto;!eMBsh;an,e13hU8sL;anHib;dy,is,jUNkeIXlSmQno,oOrNshad-an63uLv9;hi1Jki,n,tL;a,o;isOOy5P;ld,n,on,uL;nK1t;anLeIR;jUGmeIQ;an,eyOZow;!yu0;i,k,nibal-livJ2sNtzMyadanonhwSYzL;alAo;!-mi7D;!en,on;adPda0eOiNmMneJMpCWzaL;!ta;ad,ouPK;d,lt1sh;d,th;!ou;!ek,im;eLim,yl;em,m;dLlaLMtB;ar,eL;n49r;i,ri3;acLib;uc;a1Ae0Vh0Si0Gl0CnamienOIo07rZuLyaR9;eUffy,illSnRrOsMta69yL;-oFllauJ3;!tavL;!e,o;tMvL;anV3e4in;ej;in,t4;auIWeL;!rC9;ds1mtoh,ns20rLzy;bMsL;chNQon;eGir-ja7;aQeMiLov4uOMyph1;ff5gorK;en-jhTQgLi0ys1;!eS3g,oL;iQLrL;io,y;ce-eD1dy,es1hBnt,pLti2ysGC;hy;dOh0nNrMttliL;eb;an,d1;tr0zaEW;sCFw5;amCDeLi1I;b,nL;!-zophLn;ra2;aQde1lbePZno,oNuLveG;liLsepMZ;anRVo;!rMvanL;i,nDG;da40gP8;cOnL;carEJlMmaL;el,ttPA;uca;inLoBD;to;aLilR7;di,li,ssL;anHen;b,de1i2nYoOrLvo6O;aMry,sL;h1on;ld,rdRF;ffrTrgLv7K;eLiJV;!-Os-L;alMeLh40oF;doD3;ix;eMhL;enQZ;miRT;ey,oy;c,e,naOXsS4;-eBWbRdix-liyonBGeBWh3lQmalPoussHPrMspaS7uthi4vLylOU;en,in,n4ri2yn;eMlaB6rLth,v3yLM;eHEy;n,th;!ielO9;aSBen,ilOIo;in,rL;iel-Ly2;adrLpresto6;ia31;a0Xe0Hi0Bl04o00rLuS6y8D;aQedOiL;edMtL;s1z;en,m0;!dLerHVri7;ie,y;nLs4;cMkL;!-dCXlLRy;a,esJXisOk,oL;!isL;!-L;eAQmDNxaKX;!coLzBD;!-0F;de,edl9gaIZrNuL;rKBsseynL;i,ou;e67re67;avNOetQim1oL;rLyd;aGLentMiL;an,eGK;!-jahgiL;ve;ch4;d2eSHlOnMo7MrL;asDdoS3nI;dl9lLBnLt5;!l9;ipLy;!os,po;dZhYiSBlOnNodNMrL;dina9ZnLr0s3ys;an55;g,ni7;iLyx;ci3ks,pHs-SxL;!-L;aMelEUlog0oFtelesphoNZviL;ha0;nMrL;thRH;dNVtoL;i6ny;xaK0;mi;eriIVi,y;aR5bVdUhSizRlQnoHXrMtOFyL;sJz0;eNhaMisLma9IoIT;!si;d,n;s,z;ah,co,lFV;ullA;d,eL;d,em;el,i,l;iMriL;ce,zMJ;anP2en,o;-aw0a40b3Xd3Je3Ifr3HgMSi3Ek3Cl1Wm15n0Wo5phraQJr0Os0It0Eu0Cv03w00xauH4yVzL;aiTdrIeOh0iNraL;-Lh;bor0e4G;c4Go;cOeky2kLlz,qui2;iel-Ly2;musamLwella6F;pa;hi2ki2;e,ki2;aOdNed,m3rBtLyub-ens8;an,hanL;!-kieBL;anveas24en;d,l;anLenCB;!im-gL;eor1J;aNeLh0;ns,rL;eEUs1;an,nL;!-NdMel,gelGWn,sL;!-curO5;!er;alAHjLlAErog4;amNWoe;an,geneLno;!-gAL;an,hLi9Wt2Lua;anLen,fi;!-Le;gAHjL4melchiLV;aKdrIeoghe6kPpOsaNtL;eb0hLif;eb0;!m;eraEEoKB;and8eKT;as7Nf0gi,iOk0lNmK5nMrol,v5wL;anBMin;estNVie,stl9;au,in;cLk;!-Lk;alL;exa9Q;drSeB4nL5oQrNu8Wyu0zL;eLo-O5;!l;iLy;ckLq4V;!-napessC;!chLha,k;!-jeremK;ew,iR;a0Ae06iYmSrPyL;lMrL;!s1;!e,iaL;no;ay,iMyL;!ck,k;cLHk,s;anuelNeLiDM;riDHtL;h,t;!-L;anLjIG;ge9W;lMn,rLx;!h0;!eNiL;aLen,oAP;m,no;!-L;hLoF;enFS;rLtt;ey,iL0yL;-keLck;niku3;ad,nuelHus;-se0a0Zbe8Qchon1d0Xe0Wh0Ui07k05l00mZnathan-kabaGSoUriIKt1uz4vSwQyLze8;-NaMck,esDjAo02sL;ee,i0;keN6m,n,s;anLjJL;ge;aLoCIyn;lONnn;iLyn;n,s;aOhNiMnLu48y;!mi;!cKLk,m,s;an,im;h,n;er,o;al0iMyL;noCotAD;!eMoLs;!tAB;-sN5;aLi;na;-03a00eThu,j0kSmRoNro6sMx,yaLze;!hu;!cha77ei;!s,tL;e,h,tL;!-Le;amayIceleLG;a6eleC5;em,yA;-NlLz4;!-mikL;ka;anCdNjMraL;fa2p36;amLAuJE;avNS;b,kN4m,nMsL;!-bas22s;!ge,o;chNdjayMjLnoA;amL4e0;ke;arlL2;!aLyB;dj,ji;beC5ftherios-haralamb,iIm5xC;eLon,ry7;n,r;ijAj,m,n,z4;aLdeKXo;mjM9svHK;d3nMsJLtL;an,h0;ar,o;aiJRen;li,sa;!-steph3anXdVeUfoM6gar94iTmSoRrPuardL2vOwL;ardLeGin,yn;!-vaugLo;hn;aH7i2;iLy0;ck,en,k;nexe,uaLZ;o4Zu4Z;!s1z;m,ns,r;en,iLy;e,s1;!-nonE;be,enMoLrahJC;ua;!ez4;m1rMsLt1v3zyG6;h0t8O;l,ne0H;a2Ee1Gh1Ci0Wj0Lm0Ko04rZuWwVyLzime7X;lanLri7s3;-NdL;!-staL;rk;d6ReMjeLm1TrFP;reGF;duMlL;ijA;arL;do;aynHight;a6dl9ke,nc0stL;en,inLyn;!-lenn9P;aOeNiss-KKyss-eL;zeL;ki2;-mesaAHw,xyl;g0ke,yC2z5U;bromir-radostinov,l0mXnQrPuNvLyKL;!iL;c,d;!gLly,m0raM0;!lI;i0je,y0;!-PaOg3InNovL;anLon;!-lev2;!e8Fie,y;ld,ti3v7V;bruBQchriL;st;eniD0inLnEyni7;go,iL;cHRon;itJAytHB;aSePhoshuAiOoMuL;li19nniBJ;!ey,ffr9mo,vL;anJJ;brM3;bb8dL;!jeL;li;meMn,wKNyL;!d3;l,s;armuLBcZdi4eVlTmPnoLMoOrk,vLy8;ad,inL;!e-authoriL;ty;ge6my,n;etBYitL;hBXrL;iLy;!e,os,us;aLlE2;n,w8;go,uLz2;-dMbLdM;enC;on6;en,ke8P;aMeer0iLruv,w8D;r8y0;nLviL4;i5Gz2;a0Gcl0e0Ei0Bj0l0Am05nZon,rUsSvOwNxtMyL;an,lBv1P;er,t4;ay6ey;!anNen,iLon,y6;j0nL;!ce8V;sh,te;hLi,mo2J;a9Co9C;da,eNiLmeGne6Aou,ri7y7;ck,k,qL;ue;ck,kL;!-anzo;aPev0isMnLsleyeliakJPz2;is,y;!-mL;icL;ha2;hi,i,li;aAYba,etriOiNyL;aLr7Z;nn;an,r;os,us;be3Xon,ycK;mMon,tan-lafLvG9;lec5D;i0us;andr9djahmJlLz2;an5H;m1nLv3;!dG0ge4I;c,e0Yl0Wm0Rn0Ko0Gr04s02uG4vTwPxOyL;an,l3m5RsMt1vLwens-six1;en,i;ha8Kon,un;!am,t1;enNm5oMsLud;on,un;ud;!sl9;ePiLon,yD;!a60dMnDsL;!-christoph4on;-Le,s1;ax2panDVsa1LtheodoFM;!-NnL;!-r9IsL;!ky;al3De20hendGD;hie5WtL;an,i0;eUiTne5UonRrMsh0wiJKyL;k,l,us;eMiLyl;ck,el,n;lLn;!lL;!-brilla7D;!-ardzL;iv;an,el,n,o,s,usJ2;l,nL;!tz;!udL;!aL;!-clL;auEO;!-sneid4a2e,ge3HiOl9nMyL;!ck,el,k,l;ickLy;!-fanf0;al,ck,el-Lil,k,lGKs,yJ;bri0daws1eL;do2BlKv7A;aOiMj0on,yL;an,en;anGFenLon;!-kyH1;rl9se;eLiBy0;!ck;l,m1vL;a,en,on;.,a2Qe2Ih0Oi0Nkairauh,l04oXrRuOyL;!prienMrL;il,us;!-octaviI8;niluMrtL;!is;cy;aPeNistL;i0OoL;bJph4;eLp5;d3s1;ig;by,dy,h3lQnPrMsiL;mo;eMma7neLy;ilGFliHV;nt5y;nor,or,rH4stantinHvena65;by,e,in,linDt3T;aUeQiNoLyDN;ud,visL;!-a1M;fLnt;fLt1;!oGN;ff-r28me5Xrmo5XtHLvLyt1;eLon;laL;nd;rSudeMweGyL;!t1;!-L;adOeMoFsaL;mu2;mmL;anu2;gi;ck,eGk;ar0e1Yf-ettig3;a0De04h0i00ontianFEriLuck6Xyl4;nYsL;!-UaBXl9tL;!-Qan,enD1iPmy,oL;ff,pheLs;!rL;!-L;i0jBXwBF;anEW;aymeE1evaGjoLnoA;seL;ph;b48elMjonaLnoAoF;th0;liFR;ov0K;!iMmaobG6wL;et5;muw5shL;ek;iPms,nOrNsLyt1;kLn4t4;el,i,y;my,vE;au,g;ckNkhL;!-ibrahiL;ma;!na;ce,d0Jim,k0Ill3n0FrQsNyL;se,tonL;!-noA;!e-mLka;atL;th15;b2lLo;eLi,o29y9P;-l06ri7sL;!-L;aXdoVePhMisaKl04oLwAJxa8Jyv0;li8Iw3;enrMuL;beZgo;i,y;dOlMmiEJrRtiLvanD;en6;iLoi,y;!e,o47;oLwaEW;uaEV;minL;ic;dQlMntL;ho2Roi6;beNexLfr9C;aLis;ndBV;rt;ri3;ee;!dl4el-L;alL;exaA9;am,ir;!d,i,lLy;ey,y;cG0drQleCUndCGphPsarL;!-L;dMgL;abFQ;ani2;yr;iLyk;cBBk,x;de,el0Ei0Dl05m03n02rQsMyL;de0Rm0r1s3;pNsiMtL;!i2;an,us;er,i0;dy,ey,lQmePrNsten-ga1AterLv3y;!-jL;ayd3;endLo1J;jy;lo;!-Ocy-moiNeMiLoDt1;ns,sDC;ns,s;se;andrLb22;ew;ek,t5;d3ilLr1;!i3o;!eRix,lNno,um,vinL;!-emL;meC7;aLum;gh0han-mL;icL;ka2;!b;d3ne,o,ro,us;-augus5Wan;a29b,e1Ch1Ai13jo16la10o0PrSuNwan8FyL;arass-mweneluLr1;ko;dOg2WrL;ak,eLt78;-saleLch;he;dy;a07e02i00oYuVyL;anPceOd3eNl1Bon,sL;onLs1;!-lynx;nn,r;!n;!-Lson-bidjouBLt;edNkeil9SmiMni7peaL;rs1;ch2;is1;ce,nL;eLo9W;ls1;dy,oLxg8;ks;anLce,el;!d;nNtMydL;en,on;!t;dLn0t6J;an,en,on;dSed3hCUiRndNv3xMyL;an,d3en,son5Wt3;l9t1;en,oL;!nL;!-ashL;by;dy,nd1;!foC8lLy;ay,ey;az,bUdi,gTiSnheCYrPs4HuNwMyL;an,d;!en;a,b6ZdreaL;ult;eJisLna;!lL;av;ll;d0ne;!by,ie;de,iMyL;k,z;ne,r,se;ag84eQj0ko,lPnyOoNraMsL;ai,h2W;hC4me,ne;rn;amin-b5um5;el,ly-floria0Yoo,y;l,nfa05;ag4HertiL;ny;au0Gck0Fej5Rhno0ElkacAZnRrMshL;oi;at,ekOnMtL;!ie,rB;aLie,y;do,rdAA;et;!-05ckl9d03edict,i02jXnWoVsUtPyNzlL;eiL;gh;-Lam5;ry0;leMzL;i1y;e,yL;!-maddL;ox;l9on;it;e0Aie,y;amMi,oenL;ai;iLyn;m,nL;!-matiI;-chB4c76to;avBUjy,ri7;ey;cart4eveLmar73ra2tzi1;ns1;od;am,hB;!-kyl1;a0Bb5Id09k08l05maB6nd04p03rRsNxt1yL;ezBMrL;em,on;iA2sMtiL;aAMen;am,em,iL;li1Um;aUkTnRrOtMuL;ch;!holoL;me;a-vinceMeLon,y;tt;nt;aLey;be;ev;!ck,kL;!a;tis2N;ou;tMzL;ac;aj,haz8;a8MtaBA;aLer,is,r;ra;ba;aB2b9Ec99d8Je8Hf8Fg89h7Zi7Mj7Jk75l4Dm3Zn2Yo2Wputsi2Vq2Rr1Is19t10u0Rv0Gw0Cx0AySzL;aPer,haOiMla9XrL;a2i2;m,yAzL;!j1;wn;an,de,i,m,n,rL;i,yA;aZdYeXh92iWlTmMr1ss9Bth0us9Yv3yL;az,oAS;anPeNricL;-Lk;ibrah9W;n,rL;ic6K;!-adLe;ib;aLey,imI;l,nL;!e,n;!te;en,l;an,en,in;anMnLs,to;!n,sh;!-ro0N;eLil,l,t1x2;ll,m;aMeLsD;b,n;b,nL;-jayY;aUeRiPnOo,rLy0;ahBoh33uL;h32mL;!y;eeA6o5H;!an,n31rLtejpJy0;aj;dCrMsL;ta;i,y-co88;k,sh;bhSdrEgustRllal0ZrelPstNxL;enL;ce;en,inLon,yn;!-r2R;!e,iL;en,o;-a4De,in,us;oy;ah,ef,hOif,l0oMre9Dsa5tiL;c9Cla;m,ng-tanL;yi;aLeo,ir0;nLrv;!asL;e,iL;os;aRer,hPinay9Pl0oOsL;alaMer,iL;m,r7J;ss;ng;ar,er,im,k0vLw5;a5Gin;d,el,hLph,r;d,i;a0Qch0Ne0Lfe3ha0Ji0Dj74k0Cl0m09n01oZrXsTtOvNw5yMzL;ad,h8N;!an,e8XoDs1;en,in;!a,hNiMtuLur6Oy1Y;ri;n,os;emCurL;!-ju64e;al0enNhL;aLb2U;m,n,v5;e,ie;es1oL;n,w;!n,tskent1;on;aMoL;!ld;itPuMvL;!pJ;dLlt;!-morocL;co;uk;aLe61in;an,nL;!d61;a6en,h0in;!an,el-nOh0l5Lo,sLus,y0;!tL;i3WoL;te;athL;ana2;am,m;en;k,n,sL;!ti3P;er,iL;baLe,t;ld;af,fMmLs7Tta,z;!azt;at;iNuL;iLuja;la;b,l;aq;ki,uL;e60s;a0Id07es,g03h02i01sZtNuMvitnadh,yLze;r,s;j0ki7Q;honToL;!ineNnL;iLy;!n56oD;!-L;lewCoF;liL;vi4;is;ey,iMyL;!-j1Z;e,n;dy,el,hLon;!il;konhras1Fme7Bs72;!ad;adNelMuL;i,s;oDus;!ve4;erToniDrNu5yL;!-L;leG;eMiL;ck,x,y;!-Las,i,s,w,y;adonVphiL;lipL;pe;!sL;!on;kMsLto51y;!sH;in,yn;aRdj01eQiPjOm8nNoMrL;om;ryUs;ay;ad,u;el,ne,r;d1Ql,n5;dQel,h,nOrNs0Wu3WvKyMziL;ah,gh;as,es;!i,o;!e,iL;-j0Z;eo,ou,ri2y;!-h2Aa21b1Yc1Vd1Re0Qf0Ohare2Ii07l01ma00oYpTrRsa6tPu6vOwaleNyL;asLk;sa;ed;a1Min;aLon;i,n;iLyk;ck,k;arsl0er,hL;aMeHonsL;e,o;!bL;ac8;is,nLu;so,zo;my;aPeMoL;um;luMnL;!d2JwillK;ia;n,rd;-XfWjAmVoQrNstL;aLer;ir;aMiL;da;za;!cOuL;!-wLm8ne;ilL;liB;ha;!ou,usbA;arh0;mahNyL;oussL;ef;di;onLred2T;so;a0Jc0Ei0Djandro0Bk08ph,s04xL;aUeTiNyMzaL;nd4;m,s;m,o,sL;-Ls;aMjL;am26;daL;ms;nder-guy,y;nLvi4;!dL;erPrL;eMoDu;!s;!-L;greg,vissJ;-aL;ntonO;!sL;aLio;ndYvL;io;!sL;andLh0y;ar,er,rH;!-mattL;eo;st4;-MkL;!sy;juL;niL;or;ndL;ro;eNiMo,riL;ch,en,k;n,on;n,rE;aMiL;de;ly;aMeL;rt1I;n,ra;edSinPkarial44n,rLz;iMyL;c,k;cLk;!k;!-piL;erL;re;di6;ass0usseL;yn;ars0c2eUhTiRomi0rBsMweL;si;el,hMiLyl;l,m;!aL;nLr,y0;th;-y0aLl,m;m,n;e1Gim;emLm;!-kiL;veG;ns;!aL;i,n22yL;!an;andIbrahWdSkimKmPnaNsLvyj1P;aLh0X;!ki;chLn;eh;al,eL;!ry;ie;an,enL;!-ulL;ri7;ck;ym;mLn0Xod0s0y0;aOeL;dLs,t;!-tidL;ia6;dLt;!ouL;!-jay-L;joL;rd0;amOhiMit,ni,uLya;st5;ad,lL;es;!deLve4;ep;dJf0n0;al;d0g05l,meLth0;ry;a04disu,e00hYiXjoumaWleVn1LoSrNvEyL;anLm;!-01;iLyeM;aMeL;l,n;m,nL;!o;lMniLri;as,s;fo;ne,y;ni;b,l,r,y0;aLib0vE;m,n,rv;dotNeb,lMm,tomiL;wa;!-yaPio;un;el,hy,mLn,r;!-Lie,o,s;jessy,rNsMyaL;ci6;ma2;ay0;e,hMkeL;em;ak,ilMrLyut;af;le;a15bId01eYhijXiToQrNt5uL;!bakr,lfazl,z8;ar;aLi2;hLm,r;am,em;lo,uL;!bakL;er,ry;el-wandMnaLy0;ya;ensL;ky;ot;!d,lL;!aL;rd;alla0Me07illa06oYuL;lNrL;!aTrahmaL;an,n;!-QahPhaOlMrL;aQhm0;ahLo;!i;di,m0C;ad;kMraL;hm0;arL;im;!llAuL;!lNrahaL;ma6;ne;!-MaL;ye;azLrafE;iz;hi;lPnoOrrahL;im,mL;anH;!e;ur;!aziThRkPlAmaMouahL;ab;lLt5;ek,ik;ah;afi,oddoL;us;amL;id;ze;!h;as;nLrn0;!oL;ub;dZhYliy0rMvuLy0zz;sh0;aThBiRonNuMw5;in;sh;!-aMve4;er;ri2;el;sh,z;am;f,laLv;ak;an;il;en,vE;ik|Unit\xA6a10b0Yc0Kd0Je0Hf0Dg09h06in05joule14kYlWmMnLoKpGqFsqAt5volZwb,y3z2\xB01\xB50;g,s;c,f,n;b,e1;a0Jb,d0Pears old,o0;tt0D;able3b2e1on0sp;!nes;a1r0A;!l,sp;spoon0U; ft,uare 0;c0Fd0Ef2i0Ckilo0Gm0ya0B;e0Jil0;e0Qli0E;eet0Po0A;t,uart0O;a2e1i0ounds,t;c0Jnt0M;rcent,tZ;!scals;hms,uU;an0FewtoQ;/s,b,e6g,i2l,m1p0\xB2,\xB3;h,s;!\xB2;!/h,cro2l0;e0li04; Cs C\xB2;g04s09;gOter0;! 0s 0;per second;b,iZm,u0x;men06xs;b,elviDg,ilo2m1no0;ts;!/h,ph,\xB2;byXgVmeter0;! 1s0;! 0;per hour;\xB2,\xB3;e0g,z;ct0rtzW;aUogO;al1b,ig8ra0;inTmT;!lo0;ns;a2emtNl0tF; oz,uid ou0;nceO;hrenheitNradN;b,x0;abyG;eciBg,l,m9;aratJe9g,l,m8oulombJu0;bic 0pI;c4d3fo2i1me9ya0;rdG;nchF;otE;eci1;enti0;me3;!\xB2,\xB3;lsius9nti0;g1li0me0;ter7;ram6;bl,y0;te4;c2tt0;os0;econd1;re0;!s|Pronoun\xA6'em,h4i3me,ourselves,she5th1us,we,you0;!rself;e0ou;m,y;!l,t;e0im;!'s|Organization\xA60:3U;1:2Z;2:35;a33b2Jc25d1Xe1Tf1Pg1Jh1Ei1Cj18k16l12m0Sn0Go0Dp07qu06rZsUtHuDvAw5y3;amaha,m0Xou3w0X;gov,tu2K;a5e3orld trade organizati3R;lls fargo,st3;fie1Yinghou15;l3rner br34;-m10gree1l street journ20m10;an halOeriz3Misa,o3;dafo29l3;kswagMvo;bs,kip,n4ps,s3;a tod2Kps;es2Wi3;lev2Eted natio1; mobi2Caco bePd bMeCgi fridaBh5im horto1mz,o3witt2D;shiba,y3;ota,s r Y;e 3in lizzy;b5carpen2Udaily ma2guess w4holli0rolling st1Is3w4;mashing pumpki1uprem0;ho;ea3lack eyed pe35yrds;ch bo3tl0;ys;l4s3;co,la m0Y;efoni07us;a6ex pisto5ieme1np,oundgard4pice gir5ta3ubaru;rbucks,to2;en;ls;few20insbu21msu1R;.e.m.,adiohead,b8e5oyal 3yan2Q;b3dutch she6;ank;/max,aders dige1Bd 3vl2U;bu3c1Ohot chili peppe2Dlobst1R;ll;c,s;ant2Nizno28;an7bs,e5fiz1Nhilip morr1Zi4r3;emier20octer & gamb1Ludenti11;nk floyd,zza hut;psi21tro3uge08;br2Ichina,n2I; 4ason1Sda29;ld navy,pec,range juli4xf3;am;us;aBbAe6fl,h5i4o3sa,wa;kia,tre dame,vart1P;ke,ntendo,ss0J;l,s;c,stl5tflix,w3; 3sweek;kids on the block,york07;e,\xE9;a,c;nd1Ns4t3;ional aca27o,we0N;a,car,d0L;aBcdonaldAe7i5lb,o3tv,yspace;b2nsanto,ody blu0t3;ley crue,or0L;crosoft,t3;as,subisO;dica4rcedes-benz,talli3;ca;id,re;'s,s;c's milk,z1R;'ore07a5e3g,ittle caesa1E;novo,x3;is,mark; pres7-z-boy,bour party;atv,fc,kk,m3od1E;art;iffy lu0Go5pmorgan3sa;! cha3;se;hnson & johns1Ly d1K;bm,hop,nte3tv;l,rpol; & m,asbro,ewlett-packSi5o3sbc,yundai;me dep3n1D;ot;tac3zbollah;hi;eneral 6hq,l5mb,o4reen d0Fu3;cci,ns n ros0;ldman sachs,og08;axo smith kliYencore;electr0Hm3;oto0S;a5bi,da,edex,i3leetwood mac,rito-l09;at,nancial3restoU; tim0;cebook,nnie mae;b05sa,u5xxon3; m3m3;ob2;!rosceptics;aimlXe7o5u3;nkin donuts,ran dur3;an;j,w j3;on0;f lepp4ll,peche mode,r spiegYstiny's chi3;ld;ard;aEbc,hiDiBnn,o5r3;aigsli7eedence clearwater reviv3ossra2;al;ca c7l6m3o08st03;ca4p3;aq;st;dplMgate;ola;a,sco3tigroup;! systems;ck fil-a,na daily;dbury,pital o3rl's jr;ne;aIbc,eEfCl7mw,ni,o3p,rexiteeX;ei5ston 3;glo3pizza;be;ng;ack & deck6o4ue c3;roY;ckbuster video,omingda3;le;er; g3g3;oodriN;cht5e ge0n & jer4rkshire hathaw3;ay;ryH;el;nana republ5s3;f,kin robbi1;ns;ic;bWcRdidQerosmith,ig,lLmFnheuser-busEol,ppleAr7s4t&t,v3;is;hland3sociated H; o2;il;by6g4m3;co;os; compu4bee3;'s;te3;rs;ch;c,d,erican5t3;!r3;ak; ex3;pre3;ss; 5catel4t3;air;!-lucent;jazeera,qae3;da;as;/dc,a5er,t3;ivisi3;on;demy of scienc0;es;ba,c|Demonym\xA60:12;a0Rb0Ic07d05e04fi03g01hZiVjSkQlMmInFpBqatari,r9s6t4u3v2z1;am0Aimbabwe0;enezuel0ietnam0C;g7krai0W;aiwQhai,rinida0Du1;ni0Lrkmen;a2cot0Fenegal08ingapoLlovak,oma0Opa00udOw1y0S;edi0Fiss;mo0uS;o5us0Hw1;and0;a2eru0Dhilipp0Lo1;li0Artugu02;kistani,lesti0Mna1raguay0;ma0L;amiWi1orweN;caragu0geri1;an,en;a2ex0Jo1;ngo0Brocc0;cedo0Fla1;gasy,y05;a3eb8i1;b1thua0C;e0Ay0;o,tZ;azakh,eny0o1uwaiti;re0;a1orda07;ma08p1;anK;celandic,nd3r1sraeli,taZvo03;a1iQ;ni0qi;i0oneS;aiAin1ondur0unK;di;amAeor1hanai0reek,uatemal0;gi0;lipino,n3;cuadoUgyp5stoVthiopi0urope0;a1ominWut3;niG;a8h5o3roa2ub0ze1;ch;ti0;lom1ngol4;bi0;a5i1;le0n1;ese;liforKm1na2;bo1erooJ;di0;angladeshi,el7o5r2ul1;gaF;aziAi1;ti1;sh;li1sC;vi0;aru1gi0;si0;f9l6merAngol0r4si0us1;sie,tr1;a1i0;li0;gent1me4;ine;ba2ge1;ri0;ni0;gh0r1;ic0;an|Possessive\xA6anyAh5its,m3noCo1sometBthe0yo1;ir1mselves;ur0;!s;i8y0;!se4;er1i0;mse2s;!s0;!e0;lf;o1t0;hing;ne|Currency\xA6$,aud,bPcNdIeurHfGgbp,hkd,inr,jpy,kElCp9r8s3usd,x2y1z0\xA2,\xA3,\xA5,\u0434\u0435\u043D,\u043B\u0432,\u0440\u0443\u0431,\u0E3F,\u20A1,\u20A8,\u20AC,\u20AD,\uFDFC;lotyP\u0142;en,uanO;af,of;h0ter1;e1il0;lings;k0q0;elI;oubleHp,upeeH;e0ound sterlingG;n0soF;ceEnies;e0i7;i,mpi6;n,r0wanzaByatB;!onaAw;ori7rancs,t;!o8;en3i2kk,o0;b0ll2;ra5;me4n0rham4;ar3;ad,e0ny;nt1;aht,itcoin0;!s|Country\xA60:2W;a2Jb20c1Od1Ke1Ef19g11h0Zi0Wja0Vk0Ul0Pm0Cn02om2ZpWqat17rUsItAu4v2wallis and futu2Mz1;a1Rimbabwe;a1enezue2Pietnam;nuatu,tican city;.4gRkraiXnited 2ruVs1zbeD;a,sr;arab emirat0Gkingdom,states1;! of am2L;k.,s.1; 1Va.;a6imor-leste,o5rinidad3u1;nis0rk1valu;ey,me2Ls and caic1H; and 1-1;toba17;go,kel0Pnga;iw2Jji1nz2F;ki2H;aAcotl1Re9i6lov5o3pa1Zri lanka,u2w1yr0;azil1Qed7itzerl1Q;d2Friname;lomon1Kmal0uth 1;afr27kJsud2D;ak0en0;erra leoDn1;gapo1Lt maart1;en;negIrb0ychellV;int 1moa,n marino,udi arab0;hele1Tluc0mart1O;epublic of ir04om21uss0w1;an1U;a2eFhilippinQitcairn19o1uerto riK;l1CrtugC;ki20l2nama,pua new0Ira1;guay;au,esti1;ne;a8e6i4or1;folk15th1; k1ern mariana11;or0C;caragua,ger1ue;!ia;p1ther0Yw zeal11;al;mib0u1;ru;a5exi4icroZo1yanmV;ldova,n1roc3zamb7;gol0t1;enegro,serrat;co;c7dagascQl4r2urit1;an0i0V;shall0Mtin1;ique;a2div1ta;es;wi,ys0;ao,edR;a4e3i1uxembourg;b1echtenste0Rthu15;er0ya;ban07sotho;os,tv0;azakh14eeling0BiribaTosovo,uwait,yrgyz14;ma0Yp14;c2ndoFra1sle of m13taly,vory coast;n,q;el0B;aiOon1ungary;dur0Ig kong;a7ermany,ha0Libralt6re5u1;a3ernsey,inea1ya0K;!-biss1;au;deloupe,m,tema0M;ece,na0J;ar;bRmb0;a4i3rench 1;guia0Cpoly1;nes0;ji,nlX;lklandSroeS;ast tim5cu4gypt,l salv4quatorial2ritr3st1thiop0;on0; guin1;ea;ad1;or;enmark,jibou3ominica2r con1;go;!n A;ti;a9entral african 8h6o3roat0u2zech1; 7ia;ba,racao;c2lo1morOngo-brazzaville,okEsta r02te d'ivoiJ;mb0;osC;i1ristmasE;le,na;republic;m1naSpe verde,yman8;bod0ero1;on;aEeBhutZo7r3u1;lgar0r1;kina faso,ma,undi;azil,itish 1unei;virgin1; is1;lands;liv0nai3snia and herzegoviFtswaFuvet1; isl1;and;re;l1n6rmuE;ar1gium,ize;us;h2ngladesh,rbad1;os;am2ra1;in;as;fghaElBm9n4r2ustr1zerbaijG;al0ia;genti1men0uba;na;dorra,g3t1;arct5igua and barbu1;da;o1uil1;la;er1;ica;b1ger0;an0;ia;ni1;st1;an|Region\xA60:1S;a1Xb1Qc1Gd1Ces1Bf18g12h0Zi0Xj0Vk0Sl0Pm0EnZoXpSqPrMsDtButAv6w3y1zacatec1Z;o05u1;cat17kZ;a1est vir5isconsin,yomi13;rwick0shington1;! dc;er3i1;cto1Gr1;gin1O;acruz,mont;ah,tar pradesh;a1ex1Olaxca1Ausca9;bas0Kmaulip1NsmJ;a6i4o2taf0Nu1ylh12;rrZs0X;me0Zno18uth 1;cSdR;ber1Fc1naloa;hu0Rily;n2skatchew0Qxo1;ny; luis potosi,ta catari1F;a1hode7;j1ngp01;asth0Lshahi;inghai,u1;e1intana roo;bec,ensVreta0D;ara4e2rince edward1; isT;i,nnsylv1rnambu02;an11;!na;axa0Ldisha,h1klaho16ntar1reg4x03;io;ayarit,eAo3u1;evo le1nav0J;on;r1tt0Pva scot0U;folk,mandy,th1; 1ampton0;c3d2yo1;rk0;ako0V;aroli0S;brasLva01w1; 2foundland1;! and labrador;brunswick,hamp0jers1mexiKyork state;ey;a6i2o1;nta0Lrelos;ch3dlanBn2ss1;issippi,ouri;as geraGneso0K;igQoacQ;dhya,harasht03ine,ni3r1ssachusetts;anhao,y1;land;p1toba;ur;anca0e1incoln0ouisia0B;e1iH;ds;a1entucky,hul08;ns06rnata1shmir;ka;alis1iangxi;co;daho,llino1owa;is;a2ert1idalEunA;ford0;mp0waii;ansu,lou5u1;an2erre1izhou,jarat;ro;ajuato,gdo1;ng;cester0;lori2uji1;an;da;sex;erby0o2uran1;go;rs1;et;a8ea7hi6o1umbrG;ahui4l3nnectic2rsi1ventry;ca;ut;iJorado;la;apDhuahua;ra;l7m1;bridge0peche;a4r3uck1;ingham0;shire;emen,itish columb3;h2ja cal1var2;iforn1;ia;guascalientes,l4r1;izo2kans1;as;na;aba2ber1;ta;ma|City\xA60:2K;a2Cb1Lc1Dd18e17f15g0Zh0Ti0Rjakar1Xk0Jl0Gm06n02o01pUquiTrPsJtBuAv8w4y2z1;agreb,uri1G;ang1Ae1okohama;katerin0Yrev0;ars3exford,i1rocl3;ckl0Fn1;nipeg,terth0G;aw;a1ilni2E;ncouv05r1Y;lan bat02trecht;a6bilisi,e5he4i3o2rondheim,u1;nis,rku;kyo,ronG;anj1Ml0Nmiso22ra1T; haHssaloni0I;gucigalpa,hr0l av07;i1llinn,mpe1UngiXrtu;chu1Ln0pM;a4e3h2kopje,t1;ockholm,uttga0M;angh0Yenzh1G;o06ville;int peters0Elz0En 1ppo5;jose,salvadO;eykjavik,i2o1;me,t1S;ga,o de janei1;ro;to;alerLetah tik11h6i5o3r1ueb1Cyongya19;a1etor11;gue;rt1zn0; elizabeth,o;ls12rae1N;iladelph0Wnom peVoenix;dessa,sa18ttawa;a3ew 1is;delNtaip1york;ei;goya,nt0Kpl0Kv0;a5e4i3o1umb0D;nt1scD;evideo,real;nUskolc;dell\xEDn,lbour0J;drid,l4n2rib1;or;chest1dalRi0T;er;mo;a pla0Hi1os angel09v7;mass1nz,sbVverpo1;ol;a5hark4laipeda,o2rak1uala lump3;ow;pavog1sice;ur;iv;b4mpa0Indy,ohsiu0Fra1un00;c1j;hi;ncheLstanb1\u0307zmir;ul;a5e3o1; chi mi1ms;nh;lsin1rakliG;ki;ifa,m3noi;alw5dan4en3hent,iza,othen2raz,ua1;dalaj0Gngzhou;bu0M;eToa;sk;ay;es,rankfu1;rt;dmont5indhovU;a2ha01oha,u1;rb0shanbe;e1kar,masc0CugavpiI;gu,je1;on;a7ebu,h3o1raioIuriti01;lo1nstanJpenhagNrk;gEmbo;enn3i2ristchur1;ch;ang m1cago,ttagoL;ai;lgary,pe town;aJeDogoCr6u1;char4dap4enos air3r1s0;g1sa;as;es;est;a3isba2usse1;ls;ne;sil2tisla1;va;ia;ta;i4lgrade,r1;g2l1n;in;en;ji1rut;ng;ku,n4r1sel;celo2ranquil1;la;na;g2ja lu1;ka;alo1kok;re;a9b7hmedabad,lmaty,m5n3qa2sh1thens,uckland;dod,gabat;ba;k1twerp;ara;m0s1;terdam;idj0u dhabi;an;lbo2rh1;us;rg|Place\xA6aLbJcHdGeEfDgAh9i8jfk,kul,l6m4new england,ord,p2s1the 0upIyyz;bronx,hamptons;fo,oho,yd;acifLek,h0;l,x;a0co,idDuc;libu,nhattK;a0gw,hr;s,x;ax,cn,ndianGst;arlem,kg,nd;ay village,re0;at 0enwich;britain,lak2;co,ra;urope,verglad0;es;en,fw,own1xb;dg,gk,hina0lt;town;cn,e0kk;l air,verly hills;frica,m5ntar1r1sia,tl0;!ant1;ct0;ic0; oce0;an;ericas,s|Person\xA6a01bZcTdQeOfMgJhHinez,jFkEleDmAnettPo9p7r4s3t2uncle,v0womL;a0irgin maH;lentino rossi,n go3;heresa may,iger woods,yra banks;addam hussaQcarlett johanssRistZlobodan milosevic,omeone,tepGuC;ay romano,eese witherspoQo1ush limbau0;gh;d stewart,naldinho,sario;a0ipV;lmUris hiltM;prah winfrOra;an,essiaen,itt romnNo0ubarek;m0thR;!my;bron james,e;anye west,iefer sutherland,obe bryaN;aime,effersFk rowli0;ng;alle ber0ulk hog3;ry;astBentlem1irl,rand0uy;fa2mo2;an;a0ella;thF;ff0meril lagasse,zekiel;ie;a0enzel washingt4ick wolf,ude;d0lt3nte;!dy;ar2lint1ous0ruz;in;on;dinal wols1son0;! palm5;ey;arack obama,oy,ro0;!ck,th2;dolf hitl1shton kutch1u0;nt;er|WeekDay\xA6fri4mon4s2t1wed0;!nesd4;hurs2ues2;at0un1;!urd1;!d0;ay0;!s|Date\xA6daylight7eom,one d6s4t1week0yesterd6;d5end;mr1o0;d3morrow;!w;ome 0tandard2;d0point;ay; time|Time\xA6a6breakfast 5dinner5e3lunch5m2n0oclock,some5to7;i7o0;on,w;id4or1;od,ve0;ning;time;fternoon,go,ll day,t 0;ni0;ght|Holiday\xA60:1P;1:1O;a1Eb1Ac12d0Ye0Pf0Lg0Ih0Ei0Ajune08kwanzaa,l05m01nYoVpRrPsFt9v6w4xm04y2;om 2ule;hasho15kippur;hit2int0Xomens equalit8; 0Ss0T;alentines3e2ictor1D;r1Ateran1;! 0;-0ax 0h6isha bav,rinityMu2; b3rke2;y 0;ish2she2;vat;a0We prophets birth0;a6eptember13h4imchat tor0Tt 3u2;kk4mmer U;a8p7s6valentines day ;avu2mini atzeret;ot;int 2mhain;a4p3s2valentine1;tephen1;atrick1;ndrew1;amadan,ememberanc0Xos2;a park1h hashana;a3reside0Yur2;im,ple heart 0;lm2ssovF; s04;rthodox 2stara;christma1easter2goPhoKn0B;! m07;ational 3ew years2;! 0U;freedom 0nurse1;a2emorial 0lHoOuharram;bMr2undy thurs0;ch0Fdi gr2tin luther k09;as;a2itRughnassadh;bour 0g baom2ilat al-qadr;er; 2teenth;soliT;d aJmbolc,n2sra and miraj;augurGd2;ependen2igenous people1;c09t1;a3o2;ly satur0;lloween,nukkSrvey mil2;k 0;o3r2;ito de dolores,oundhoU;odU;a4east of 2;our lady of guadalupe,the immaculate concepti2;on;ther1;aster 8id 3lectWmancip2piphany;atV;al-3u2;l-f3;ad3f2;itr;ha;m8s2;un0;ay of the dead,ecemb3i2;a de muertos,eciseis de septiembre,wali;er sol2;stice;anad7h4inco de mayo,o3yber m2;on0;lumbu1mmonwealth 0rpus christi;anuk3inese n2ristmaN;ew year;ah;a 0ian tha2;nksgiving;astillCeltaine,lack4ox2;in2;g 0; fri0;dvent,ll 9pril fools,rmistic8s6u2;stral4tum2;nal2; equinox;ia 0;cens2h wednes0sumption of mary;ion 0;e 0;hallow6s2;ai2oul1t1;nt1;s 0;day;s 2;eve|Month\xA6aAdec8feb6j2nov8oct1sep0;!t7;!o7;an4u0;l1n0;!e;!y;!r0;uary;!em0;ber;pr1ug0;!ust;!il|Duration\xA6centur4d2hour3m0seconds,week3year3;i0onth2;llisecond1nute1;ay0ecade0;!s;ies,y|FirstName\xA6andra,devan,jammie,k0lashawn,mel;asey,enyatta|Adjective\xA60:73;1:7I;2:7O;3:7H;4:7A;5:5A;6:47;7:48;8:4Q;9:5Z;A:7F;B:6X;C:5V;D:6Y;E:71;a6Hb63c5Pd55e4Rf48g40h3Pi34j32k31l2Qm2Fn26o1Qp1Aquack,r10s0Gt09uQvNwFyear5;arp0eJholeIiHoF;man5oFu6A;d6Czy;despr73s5E;!sa7;eGlFste25;co1Hl o4J;!k5;aGiFola4A;b7Rce versa,ol53;ca2gabo61nilla;ltWnJpGrb58su4tterF;!moB; f33b1NpGsFti1G;ca7et,ide dMtairs;er,i3M;aPbeco6Pconvin26deMeLfair,ivers4knKprecedYrIsGwF;iel1Zritt5X;i1UuF;pervis0specti3;eFu5;cognLgul6Fl6F;own;ndi3v5Rxpect0;cid0rF;!grou5MsF;iz0tood;b7ppeaLssu6EuthorF;iz0;i23ra;aJeHhough4NoGrF;i1oubl0;geth8p,rpD;en5OlFm4Yrr2Tst0;li3;boo,lFn;ent0;aXcWeUhTiRmug,nobbi3DoPpOqueami3DtJuFymb62;bHi gener53pFrprisi3;erFre0K;! dup8b,i28;du0seq4S;anda6SeIi0OrFy37;aightFip0; fFfF;or59;adfaBreotyp0;aCec2Fir1IlendDot on; call0le,mb8phist1WrFu0Wvi40;dDry;gnifica2nF;ceCg7;am2Oe8ocki3ut;cFda1em5lfi2Xni1Vpa67re6;o1Fr3U;at56ient27reec56;cr0me,ns serif;aMeIiGoF;buBtt4SuSy4;ghtFv4;!-28f9;ar,bel,condi1du61fres50lHpublic3UsFtard0;is46oF;lu1na2;e1Duc44;bDciF;al,st;aPeNicayu6lacDopuliBrGuF;bl58mp0;eJiGoF;!b09fuEmi30p8;mGor,sFva1;ti6;a4Ue;ciEmF;a0Hi5I;ac20rFti1;feAma2Tplexi3v33;rFst;allelHtF;-tiFi4;me;!ed;bQffOkNld fashion0nMpLrg1Hth8utKvF;al,erF;!aHniGt,wF;eiFrouF;ght;ll;do0Ver,g2Lsi45;en,posi1; boa5Fg2Jli6;!ay; gua5DbFli6;eat;eHsF;cFer0Hole1;e6uC;d2Sse;ak0eMiLoFua4O;nJrGtF;ab7;thF;!eF;rn;chala2descri4Zstop;ght5;arby,cessa3Wighbor5xt;aNeLiIoFultip7;bi7derGlFnth5ot,st;dy;a1n;nFx0;iaFor;tuC;di4EnaFre;ci3;cFgenta,in,j03keshift,le,mmoth,ny,sculi6;abCho;aOeJiGoFu13;uti12vi3;mGteraF;l,te;it0;ftIgFth4;al,eGitiF;ma1;nda3C;!-0C;nguDst,tt8;ap1Sind5no0A;agg0uF;niOstifi0veni7;de4gno4Blleg4mSnHpso 1VrF;a1releF;va2; NaMbr0corLdJfluenTiTnIsHtF;aAenEoxF;ic36;a6i2R;a1er,oce2;iGoF;or;reA;deq3Jppr2Y;fFsitu,vitro;ro2;mJpF;arHerfeAoFrop8;li1rtF;a2ed;ti4;eFi0Q;d2QnE;aKelJiHoFumdr3B;neBok0rrFs07ur5;if2S;ghfalut1OspF;an2Q;liZpf9;lInHrF;d05roF;wi3;dy,gi3;f,low0;ainf9ener2Jiga22lLoKraHuF;ilFng ho;ty;cGtF;ef9is;ef9;ne,od;ea2Dob4;aUeOinNlMoHrF;a1TeFoz1K;e2Dq12tf9;oHrF; keeps,eFm8tuna1;g04ign;liF;sh;ag2Zue2;al,i1;dJmGrF;ti7;a7ini6;ne;le; up;bl0i2lEr Fux,vori1;oFreac1F;ff;aOfficie2lNmiMnKreAthere4veJxF;aAcess,peHtraGuF;be2Ml0I;!va1E;ct0rt;n,ryday; Fcouragi3tiC;rou1sui1;ne2;abo23dQe18i1;g8sF;t,ygF;oi3;er;aVeNiHoFrea15ue;mina2ne,ubF;le,tf9;dact1Bfficu1OsGvF;erE;creHeas0gruntl0honeBordGtF;a2ress0;er5;et; LadpKfJgene1PliHrang0spe1PtGvoF;ut;ail0ermin0;be1Mca1ghF;tf9;ia2;an;facto;i5magFngeroZs0I;ed,i3;ly;ertaRhief,ivil,oHrF;aFowd0u0H;mp0v02z0;loNmLnGoi3rrFve0P;eAu1I;cre1grIsHtF;emFra0F;po0D;ta2;ue2;mer08pleF;te,x;ni4ss4;in;aPeLizarClJoGrF;and new,isk,okP;gGna fiWttom,urgeoF;is;us;ank,iI;re;autif9hiGlov0nFst,yoG;eVt;nd;ul;ckGnkru0XrrF;en;!wards; priori,b0Nc0Kd0AfraDg05h04lZma06ntiquYpUrOsMttracti07utheLvIwF;aGkF;wa0U;ke,re;ant garGerF;age;de;ntV;leep,tonisF;hi3;ab,bitIroHtiF;fiF;ci4;ga2;raF;ry;pFt;are2etiPrF;oprF;ia1;at0;arIcohGeFiMl,oof;rt;olF;ic;mi3;ead;ainBgressiGoniF;zi3;ve;st;id; MeKuJvF;aGerE;se;nc0;ed;lt;pt,qF;ua1;hoc,infinitF;um;cuGtu4u1;al;ra1;erPlOoMruLsGuF;nda2;e2oGtraA;ct;lu1rbi3;ng;te;pt;aFve;rd;aze,e;ra2;nt|Expression\xA6a02b01dXeVfuck,gShLlImHnGoDpBshAu7voi04w3y0;a1eLu0;ck,p;!a,hoo,y;h1ow,t0;af,f;e0oa;e,w;gh,h0;! 0h,m;huh,oh;eesh,hh,it;ff,hew,l0sst;ease,z;h1o0w,y;h,o,ps;!h;ah,ope;eh,mm;m1ol0;!s;ao,fao;a4e2i,mm,oly1urr0;ah;! mo6;e,ll0y;!o;ha0i;!ha;ah,ee,o0rr;l0odbye;ly;e0h,t cetera,ww;k,p;'oh,a0uh;m0ng;mit,n0;!it;ah,oo,ye; 1h0rgh;!em;la|Comparable\xA60:41;1:4I;2:45;3:4B;4:2Y;5:3X;a4Ob44c3Od3De35f2Rg2Fh24i1Vj1Uk1Rl1Im1Cn16o14p0Tqu0Rr0IsRtKuIvFw7y6za12;ell27ou3;aBe9hi1Yi7r6;o3y;ck0Mde,l6n1ry,se;d,y;a6i4Mt;k,ry;n1Tr6sI;m,y;a7e6ulgar;nge5rda2xi3;gue,in,st;g0n6pco3Mse5;like0ti1;aAen9hi8i7ough,r6;anqu2Qen1ue;dy,g3Ume0ny,r09;ck,n,rs2R;d42se;ll,me,rt,s6wd47;te5;aVcarUeThRiQkin0GlMmKoHpGqua1HtAu7w6;eet,ift;b7dd15per0Hr6;e,re2J;sta2Ht4;aAe9iff,r7u6;pXr1;a6ict,o3;ig3Hn0W;a1ep,rn;le,rk;e24i3Hright0;ci2Aft,l7o6re,ur;n,thi3;emn,id;a6el0ooth;ll,rt;e8i6ow,y;ck,g37m6;!y;ek,nd3F;ck,l0mp4;a6iUort,rill,y;dy,ll0Zrp;cu0Tve0Txy;ce,ed,y;d,fe,int0l1Xv16;aBe9i8o6ude;mantic,o1Ksy,u6;gh,nd;ch,pe,tzy;a6d,mo0J;dy,l;gg7ndom,p6re,w;id;ed;ai2i6;ck,et;aFhoEi1SlCoBr8u6;ny,r6;e,p4;egna2ic7o6;fou00ud;ey,k0;li06or,te1D;a6easa2;in,nt;ny;in5le;dd,f6i0ld,ranR;fi11;aAe8i7o6;b4isy,rm16sy;ce,mb4;a6w;r,t;ive,rr02;aAe8ild,o7u6;nda1Ate;ist,o1;a6ek,llY;n,s0ty;d,tuR;aCeBi9o6ucky;f0Vn7o1Eu6ve0w18y0U;d,sy;e0g;g1Uke0tt4v6;e0i3;an,wd;me,r6te;ge;e7i6;nd;en;ol0ui1P;cy,ll,n6;sBt6;e6ima8;llege2r6;es7media6;te;ti3;ecu6ta2;re;aEeBiAo8u6;ge,m6ng1R;b4id;ll6me0t;ow;gh,l0;a6f04sita2;dy,v6;en0y;nd1Hppy,r6te5;d,sh;aGenFhDiClBoofy,r6;a9e8is0o6ue1E;o6ss;vy;at,en,y;nd,y;ad,ib,ooI;a2d1;a6o6;st0;t4uiY;u1y;aIeeb4iDlat,oAr8u6;ll,n6r14;!ny;aHe6iend0;e,sh;a7r6ul;get5mG;my;erce8n6rm,t;an6e;ciC;! ;le;ir,ke,n0Fr,st,t,ulA;aAerie,mp9sse7v6xtre0Q;il;nti6;al;ty;r7s6;tern,y;ly,th0;aFeCi9r7u6;ll,mb;u6y;nk;r7vi6;ne;e,ty;a6ep,nD;d6f,r;!ly;mp,pp03rk;aHhDlAo8r7u6;dd0r0te;isp,uel;ar6ld,mmon,ol,st0ward0zy;se;e6ou1;a6vW;n,r;ar8e6il0;ap,e6;sy;mi3;gey,lm8r6;e5i3;ful;!i3;aNiLlIoEr8u6;r0sy;ly;aAi7o6;ad,wn;ef,g7llia2;nt;ht;sh,ve;ld,r7un6;cy;ed,i3;ng;a7o6ue;nd,o1;ck,nd;g,tt6;er;d,ld,w1;dy;bsu9ng8we6;so6;me;ry;rd|Conjunction\xA6aEbAcuz,how8in caDno7o6p4supposing,t1vers5wh0yet;eth8ile;h0o;eref9o0;!uC;l0rovided that;us;r,therwi6; matt1r;!ev0;er;e0ut;cau1f0;ore;se;lthou1nd,s 0;far as,if;gh|Verb\xA6awak9born,cannot,fr8g7h5k3le2m1s0wors9;e8h3;ake sure,sg;ngth6ss6;eep tabs,n0;own;as0e2;!t2;iv1onna;ight0;en|Preposition\xA6'o,-,aKbHcGdFexcept,fEinDmidPnotwithstandiQoBpRqua,sAt6u3vi2w0;/o,hereMith0;!in,oQ;a,s-a-vis;n1p0;!on;like,til;h0ill,owards;an,r0;ough0u;!oI;ans,ince,o that;',f0n1ut;!f;!to;or,rom;espite,own,u3;hez,irca;ar1e0oAy;low,sides,tween;ri6;',bo7cross,ft6lo5m3propos,round,s1t0;!op;! long 0;as;id0ong0;!st;ng;er;ut|Adverb\xA6a07by 05d01eYfShQinPjustOkinda,mMnJoEpCquite,r9s5t2up1very,w0Bye0;p,s; to,wards5;h1o0wiO;o,t6ward;en,us;everal,o0uch;!me1rt0; of;hXtimes,w07;a1e0;alS;ndomRthN;ar excellDer0oint blank; Mhaps;f3n0;ce0ly;! 0;ag00moU; courHten;ewJo0; longEt 0;onHwithstanding;aybe,eanwhiAore0;!ovB;! aboS;deed,steT;en0;ce;or2u0;l9rther0;!moH; 0ev3;examp0good,suF;le;n mas1v0;er;se;e0irect1; 1finite0;ly;ju7trop;far,n0;ow; CbroBd nauseam,gAl5ny2part,side,t 0w3;be5l0mo5wor5;arge,ea4;mo1w0;ay;re;l 1mo0one,ready,so,ways;st;b1t0;hat;ut;ain;ad;lot,posteriori|Determiner\xA6aAboth,d8e5few,l3mu7neiCown,plenty,some,th2various,wh0;at0ich0;evB;at,e3is,ose;a,e0;!ast,s;a1i6l0nough,very;!se;ch;e0u;!s;!n0;!o0y;th0;er|Modal\xA6c5lets,m4ought3sh1w0;ill,o5;a0o4;ll,nt;! to;ay,ight,ust;an,o0;uld|PhrasalVerb\xA60:71;1:6P;2:7D;3:73;4:6I;5:7G;6:75;7:6O;8:6B;9:6C;A:5H;B:70;C:6Z;a7Gb62c5Cd59e57f45g3Nh37iron0j33k2Yl2Km2Bn29o27p1Pr1Es09tQuOvacuum 1wGyammerCzD;eroAip EonD;e0k0;by,up;aJeGhFiEorDrit52;d 1k2Q;mp0n49pe0r8s8;eel Bip 7K;aEiD;gh 06rd0;n Br 3C;it 5Jk8lk6rm 0Qsh 73t66v4O;rgeCsD;e 9herA;aRePhNiJoHrFuDype 0N;ckArn D;d2in,o3Fup;ade YiDot0y 32;ckle67p 79;ne66p Ds4C;d2o6Kup;ck FdEe Dgh5Sme0p o0Dre0;aw3ba4d2in,up;e5Jy 1;by,o6U;ink Drow 5U;ba4ov7up;aDe 4Hll4N;m 1r W;ckCke Elk D;ov7u4N;aDba4d2in,o30up;ba4ft7p4Sw3;a0Gc0Fe09h05i02lYmXnWoVpSquare RtJuHwD;earFiD;ngEtch D;aw3ba4o6O; by;ck Dit 1m 1ss0;in,up;aIe0RiHoFrD;aigh1LiD;ke 5Xn2X;p Drm1O;by,in,o6A;n2Yr 1tc3H;c2Xmp0nd Dr6Gve6y 1;ba4d2up;d2o66up;ar2Uell0ill4TlErDurC;ingCuc8;a32it 3T;be4Brt0;ap 4Dow B;ash 4Yoke0;eep EiDow 9;c3Mp 1;in,oD;ff,v7;gn Eng2Yt Dz8;d2o5up;in,o5up;aFoDu4E;ot Dut0w 5W;aw3ba4f36o5Q;c2EdeAk4Rve6;e Hll0nd GtD; Dtl42;d2in,o5upD;!on;aw3ba4d2in,o1Xup;o5to;al4Kout0rap4K;il6v8;at0eKiJoGuD;b 4Dle0n Dstl8;aDba4d2in52o3Ft2Zu3D;c1Ww3;ot EuD;g2Jnd6;a1Wf2Qo5;ng 4Np6;aDel6inAnt0;c4Xd D;o2Su0C;aQePiOlMoKrHsyc29uD;ll Ft D;aDba4d2in,o1Gt33up;p38w3;ap37d2in,o5t31up;attleCess EiGoD;p 1;ah1Gon;iDp 52re3Lur44wer 52;nt0;ay3YuD;gAmp 9;ck 52g0leCn 9p3V;el 46ncilA;c3Oir 2Hn0ss FtEy D;ba4o4Q; d2c1X;aw3ba4o11;pDw3J;e3It B;arrow3Serd0oD;d6te3R;aJeHiGoEuD;ddl8ll36;c16p 1uth6ve D;al3Ad2in,o5up;ss0x 1;asur8lt 9ss D;a19up;ke Dn 9r2Zs1Kx0;do,o3Xup;aOeMiHoDuck0;a16c36g 0AoDse0;k Dse34;aft7ba4d2forw2Ain3Vov7uD;nd7p;e GghtFnEsDv1T;ten 4D;e 1k 1; 1e2Y;ar43d2;av1Ht 2YvelD; o3L;p 1sh DtchCugh6y1U;in3Lo5;eEick6nock D;d2o3H;eDyA;l2Hp D;aw3ba4d2fSin,o05to,up;aFoEuD;ic8mpA;ke2St2W;c31zz 1;aPeKiHoEuD;nker2Ts0U;lDneArse2O;d De 1;ba4d2oZup;de Et D;ba4on,up;aw3o5;aDlp0;d Fr Dt 1;fDof;rom;in,oO;cZm 1nDve it;d Dg 27kerF;d2in,o5;aReLive Jloss1VoFrEunD; f0M;in39ow 23; Dof 0U;aEb17it,oDr35t0Ou12;ff,n,v7;bo5ft7hJw3;aw3ba4d2in,oDup,w3;ff,n,ut;a17ek0t D;aEb11d2oDr2Zup;ff,n,ut,v7;cEhDl1Pr2Xt,w3;ead;ross;d aEnD;g 1;bo5;a08e01iRlNoJrFuD;cDel 1;k 1;eEighten DownCy 1;aw3o2L;eDshe1G; 1z8;lFol D;aDwi19;bo5r2I;d 9;aEeDip0;sh0;g 9ke0mDrD;e 2K;gLlJnHrFsEzzD;le0;h 2H;e Dm 1;aw3ba4up;d0isD;h 1;e Dl 11;aw3fI;ht ba4ure0;eInEsD;s 1;cFd D;fDo1X;or;e B;dQl 1;cHll Drm0t0O;apYbFd2in,oEtD;hrough;ff,ut,v7;a4ehi1S;e E;at0dge0nd Dy8;o1Mup;o09rD;ess 9op D;aw3bNin,o15;aShPlean 9oDross But 0T;me FoEuntD; o1M;k 1l6;aJbIforGin,oFtEuD;nd7;ogeth7;ut,v7;th,wD;ard;a4y;pDr19w3;art;eDipA;ck BeD;r 1;lJncel0rGsFtch EveA; in;o16up;h Bt6;ry EvD;e V;aw3o12;l Dm02;aDba4d2o10up;r0Vw3;a0He08l01oSrHuD;bbleFcklTilZlEndlTrn 05tDy 10zz6;t B;k 9; ov7;anMeaKiDush6;ghHng D;aEba4d2forDin,o5up;th;bo5lDr0Lw3;ong;teD;n 1;k D;d2in,o5up;ch0;arKgJil 9n8oGssFttlEunce Dx B;aw3ba4;e 9; ar0B;k Bt 1;e 1;d2up; d2;d 1;aIeed0oDurt0;cFw D;aw3ba4d2o5up;ck;k D;in,oK;ck0nk0st6; oJaGef 1nd D;d2ov7up;er;up;r0t D;d2in,oDup;ff,ut;ff,nD;to;ck Jil0nFrgEsD;h B;ainCe B;g BkC; on;in,o5; o5;aw3d2o5up;ay;cMdIsk Fuction6; oD;ff;arDo5;ouD;nd;d D;d2oDup;ff,n;own;t D;o5up;ut\",\"conjugations\":\"t:ake,ook,,,aken|:can,could,can,_|free:_,,,ing|puk:e,,,ing|ar:ise,ose,,,isen|babys:it,at|:be,was,is,am,been|:is,was,is,being|beat:_,,,ing,en|beg:in,an,,inning,un|ban:_,ned,,ning|bet:_,,,,_|bit:e,_,,ing,ten|ble:ed,d,,,d|bre:ed,d|br:ing,ought,,,ought|broadcast:_,_|buil:d,t,,,t|b:uy,ought,,,ought|cho:ose,se,,osing,sen|cost:_,_|deal:_,t,,,t|d:ie,ied,,ying|d:ig,ug,,igging,ug|dr:aw,ew,,,awn|dr:ink,ank,,,unk|dr:ive,ove,,iving,iven|:eat,ate,,eating,eaten|f:all,ell,,,allen|fe:ed,d,,,d|fe:el,lt|f:ight,ought,,,ought|f:ind,ound|fl:y,ew,,,own|bl:ow,ew,,,own|forb:id,ade|edit:_,,,ing|forg:et,ot,,eting,otten|forg:ive,ave,,iving,iven|fr:eeze,oze,,eezing,ozen|g:et,ot|g:ive,ave,,iving,iven|:go,went,goes,,gone|h:ang,ung,,,ung|ha:ve,d,s,ving,d|hear:_,d,,,d|hid:e,_,,,den|h:old,eld,,,eld|hurt:_,_,,,_|la:y,id,,,id|le:ad,d,,,d|le:ave,ft,,,ft|l:ie,ay,,ying|li:ght,t,,,t|los:e,t,,ing|ma:ke,de,,,de|mean:_,t,,,t|me:et,t,,eting,t|pa:y,id,,,id|read:_,_,,,_|r:ing,ang,,,ung|r:ise,ose,,ising,isen|r:un,an,,unning,un|sa:y,id,ys,,id|s:ee,aw,,eeing,een|s:ell,old,,,old|sh:ine,one,,,one|sho:ot,t,,,t|show:_,ed|s:ing,ang,,,ung|s:ink,ank|s:it,at|slid:e,_,,,_|sp:eak,oke,,,oken|sp:in,un,,inning,un|st:and,ood|st:eal,ole|st:ick,uck|st:ing,ung|:stream,,,,|str:ike,uck,,iking|sw:ear,ore|sw:im,am,,imming|sw:ing,ung|t:each,aught,eaches|t:ear,ore|t:ell,old|th:ink,ought|underst:and,ood|w:ake,oke|w:ear,ore|w:in,on,,inning|withdr:aw,ew|wr:ite,ote,,iting,itten|t:ie,ied,,ying|ski:_,ied|:boil,,,,|miss:_,,_|:act,,,,|compet:e,ed,,ing|:being,were,are,are|impl:y,ied,ies|ic:e,ed,,ing|develop:_,ed,,ing|wait:_,ed,,ing|aim:_,ed,,ing|spil:l,t,,,led|drop:_,ped,,ping|log:_,ged,,ging|rub:_,bed,,bing|smash:_,,es|egg:_,ed|suit:_,ed,,ing|age:_,d,s,ing|shed:_,_,s,ding|br:eak,oke|ca:tch,ught|d:o,id,oes|b:ind,ound|spread:_,_|become:_,,,,_|ben:d,,,,t|br:ake,,,,oken|burn:_,,,,ed|burst:_,,,,_|cl:ing,,,,ung|c:ome,ame,,,ome|cre:ep,,,,pt|cut:_,,,,_|dive:_,,,,d|dream:_,,,,t|fle:e,,,eing,d|fl:ing,,,,ung|got:_,,,,ten|grow:_,,,,n|hit:_,,,,_|ke:ep,,,,pt|kne:el,,,,lt|know:_,,,,n|leap:_,,,,t|len:d,,,,t|lo:ose,,,,st|prove:_,,,,n|put:_,,,,_|quit:_,,,,_|rid:e,,,,den|s:eek,,,,ought|sen:d,,,,t|set:_,,,,_|sew:_,,,,n|shake:_,,,,n|shave:_,,,,d|shut:_,,,,_|s:eat,,,,at|sla:y,,,,in|sle:ep,,,,pt|sn:eak,,,,uck|spe:ed,,,,d|spen:d,,,,t|sp:it,,,,at|split:_,,,,_|spr:ing,,,,ung|st:ink,unk,,,unk|strew:_,,,,n|sw:are,,,,orn|swe:ep,,,,pt|thrive:_,,,,d|undergo:_,,,,ne|upset:_,,,,_|w:eave,,,,oven|we:ep,,,,pt|w:ind,,,,ound|wr:ing,,,,ung\",\"plurals\":\"addend|um|a,alga|e,alumna|e,alumn|us|i,appendi|x|ces,avocado|s,bacill|us|i,barracks|,beau|x,bus|es,cact|us|i,chateau|x,analys|is|es,diagnos|is|es,parenthes|is|es,prognos|is|es,synops|is|es,thes|is|es,child|ren,circus|es,clothes|,corp|us|ora,criteri|on|a,curricul|um|a,database|s,deer|,echo|es,embargo|es,epoch|s,f|oot|eet,gen|us|era,g|oose|eese,halo|s,hippopotam|us|i,ind|ex|ices,larva|e,lea|f|ves,librett|o|i,loa|f|ves,m|an|en,matri|x|ces,memorand|um|a,modul|us|i,mosquito|es,move|s,op|us|era,ov|um|a,ox|en,pe|rson|ople,phenomen|on|a,quiz|zes,radi|us|i,referend|um|a,rodeo|s,sex|es,shoe|s,sombrero|s,stomach|s,syllab|us|i,tableau|x,thie|f|ves,t|ooth|eeth,tornado|s,tuxedo|s,zero|s\",\"patterns\":{\"Person\":[\"master of #Noun\",\"captain of the #Noun\"]},\"regex\":{\"HashTag\":[\"^#[a-z]+\"],\"Gerund\":[\"^[a-z]+n['\u2019]$\"],\"PhoneNumber\":[\"^[0-9]{3}-[0-9]{4}$\",\"^[0-9]{3}[ -]?[0-9]{3}-[0-9]{4}$\"],\"Time\":[\"^[012]?[0-9](:[0-5][0-9])(:[0-5][0-9])$\",\"^[012]?[0-9](:[0-5][0-9])?(:[0-5][0-9])? ?(am|pm)$\",\"^[012]?[0-9](:[0-5][0-9])(:[0-5][0-9])? ?(am|pm)?$\",\"^[PMCE]ST$\",\"^utc ?[+-]?[0-9]+?$\",\"^[a-z0-9]*? o'?clock$\"],\"Date\":[\"^[0-9]{1,4}-[0-9]{1,2}-[0-9]{1,4}$\",\"^[0-9]{1,4}/[0-9]{1,2}/[0-9]{1,4}$\"],\"Money\":[\"^[-+]?[$\u20AC\xA5\xA3][0-9]+(.[0-9]{1,2})?$\",\"^[-+]?[$\u20AC\xA5\xA3][0-9]{1,3}(,[0-9]{3})+(.[0-9]{1,2})?$\"],\"Value\":[\"^[-+]?[$\u20AC\xA5\xA3][0-9]+(.[0-9]{1,2})?$\",\"^[-+]?[$\u20AC\xA5\xA3][0-9]{1,3}(,[0-9]{3})+(.[0-9]{1,2})?$\",\"^[0-9.]{1,2}[-\u2013][0-9]{1,2}$\"],\"NumberRange\":[\"^[0-9.]{1,4}(st|nd|rd|th)?[-\u2013][0-9.]{1,4}(st|nd|rd|th)?$\",\"^[0-9.]{1,2}[-\u2013][0-9]{1,2}$\"],\"NiceNumber\":[\"^[-+]?[0-9.,]{1,3}(,[0-9.,]{3})+(.[0-9]+)?$\"],\"NumericValue\":[\"^[-+]?[0-9]+(.[0-9]+)?$\",\"^.?[0-9]+([0-9,.]+)?%$\"],\"Percent\":[\"^.?[0-9]+([0-9,.]+)?%$\"],\"Cardinal\":[\"^.?[0-9]+([0-9,.]+)?%$\"],\"Fraction\":[\"^[0-9]{1,4}/[0-9]{1,4}$\"],\"LastName\":[\"^ma?c'.*\",\"^o'[drlkn].*\"]}}";

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
