/* compromise v11.13.2
   http://compromise.cool
   MIT
*/

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.nlp = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
(function (global){
/* efrt trie-compression v2.0.3  github.com/nlp-compromise/efrt  - MIT */
!function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
module.exports={
  "author": "Spencer Kelly <spencermountain@gmail.com> (http://spencermounta.in)",
  "name": "compromise",
  "description": "natural language processing in the browser",
  "version": "11.13.2",
  "main": "./builds/compromise.js",
  "unpkg": "./builds/compromise.min.js",
  "types": "./compromise.d.ts",
  "repository": {
    "type": "git",
    "url": "git://github.com/nlp-compromise/compromise.git"
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
const tagset = _dereq_('./tags');

// https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
const c = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  black: '\x1b[30m'
};
//dont use colors on client-side
if (typeof module === 'undefined') {
  Object.keys(c).forEach(k => {
    c[k] = '';
  });
}

//coerce any input into a string
exports.ensureString = input => {
  if (typeof input === 'string') {
    return input;
  } else if (typeof input === 'number') {
    return String(input);
  }
  return '';
};
//coerce any input into a string
exports.ensureObject = input => {
  if (typeof input !== 'object') {
    return {};
  }
  if (input === null || input instanceof Array) {
    return {};
  }
  return input;
};

exports.titleCase = str => {
  return str.charAt(0).toUpperCase() + str.substr(1);
};

//shallow-clone an object
exports.copy = o => {
  let o2 = {};
  o = exports.ensureObject(o);
  Object.keys(o).forEach(k => {
    o2[k] = o[k];
  });
  return o2;
};
exports.extend = (obj, a) => {
  obj = exports.copy(obj);
  const keys = Object.keys(a);
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = a[keys[i]];
  }
  return obj;
};

//colorization
exports.green = function(str) {
  return c.green + str + c.reset;
};
exports.red = function(str) {
  return c.red + str + c.reset;
};
exports.blue = function(str) {
  return c.blue + str + c.reset;
};
exports.magenta = function(str) {
  return c.magenta + str + c.reset;
};
exports.cyan = function(str) {
  return c.cyan + str + c.reset;
};
exports.yellow = function(str) {
  return c.yellow + str + c.reset;
};
exports.black = function(str) {
  return c.black + str + c.reset;
};
exports.printTag = function(tag) {
  if (tagset[tag]) {
    const color = tagset[tag].color || 'blue';
    return exports[color](tag);
  }
  return tag;
};
exports.printTerm = function(t) {
  const tags = Object.keys(t.tags);
  for (let i = 0; i < tags.length; i++) {
    if (tagset[tags[i]]) {
      const color = tagset[tags[i]].color || 'black';
      return exports[color](t.out('text'));
    }
  }
  return c.reset + t.plaintext + c.reset;
};

exports.leftPad = function(str, width, char) {
  char = char || ' ';
  str = str.toString();
  while (str.length < width) {
    str += char;
  }
  return str;
};

exports.isArray = function(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
};

exports.isObject = function(obj) {
  return obj === Object(obj);
};

},{"./tags":137}],4:[function(_dereq_,module,exports){
(function (global){
'use strict';
const buildText = _dereq_('./text/build');
const pkg = _dereq_('../package.json');
const log = _dereq_('./log');
const unpack = _dereq_('./world/unpack');
let world = _dereq_('./world');
let w = world.w;

//the main function
const nlp = function(str, lex) {
  if (lex) {
    w.plugin({
      words: lex
    });
  }
  let doc = buildText(str, w);
  doc.tagger();
  return doc;
};

//this is used, atleast, for testing the packing
nlp.unpack = function(plugin) {
  return unpack(plugin);
};
//this is handy
nlp.version = pkg.version;
//turn-on some debugging
nlp.verbose = function(str) {
  log.enable(str);
};
//same as main method, except with no POS-tagging.
nlp.tokenize = function(str) {
  return buildText(str);
};

//uncompress user-submitted lexicon
nlp.plugin = function(plugin) {
  w.plugin(plugin);
};
//contribute words to the lexicon
nlp.addWords = function(lex) {
  w.plugin({
    words: lex
  });
};
nlp.addTags = function(tags) {
  w.plugin({
    tags: tags
  });
};
nlp.addRegex = function(regex) {
  w.plugin({
    regex: regex
  });
};
nlp.addPatterns = function(patterns) {
  w.plugin({
    patterns: patterns
  });
};
nlp.addPlurals = function(plurals) {
  w.plugin({
    plurals: plurals
  });
};
nlp.addConjugations = function(conj) {
  w.plugin({
    conjugations: conj
  });
};

//make a weird, half-copy of this method
nlp.clone = function() {
  let w2 = world.reBuild();
  //this is weird, but it's okay
  var nlp2 = function(str, lex) {
    if (lex) {
      w2.plugin({
        words: lex
      });
    }
    let doc = buildText(str, w2);
    doc.tagger();
    return doc;
  };
  nlp2.tokenize = nlp.tokenize;
  nlp2.verbose = nlp.verbose;
  nlp2.version = nlp.version;
  ['Words', 'Tags', 'Regex', 'Patterns', 'Plurals', 'Conjugations'].forEach((fn) => {
    nlp2['add' + fn] = function(obj) {
      w2['add' + fn](obj);
    };
  });
  return nlp2;
};

//and then all-the-exports...
if (typeof self !== 'undefined') {
  self.nlp = nlp; // Web Worker
} else if (typeof window !== 'undefined') {
  window.nlp = nlp; // Browser
} else if (typeof global !== 'undefined') {
  global.nlp = nlp; // NodeJS
}
//don't forget amd!
if (typeof define === 'function' && define.amd) {
  define(nlp);
}
//then for some reason, do this too!
if (typeof module !== 'undefined') {
  module.exports = nlp;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../package.json":2,"./log":6,"./text/build":190,"./world":215,"./world/unpack":223}],5:[function(_dereq_,module,exports){
'use strict';
const fns = _dereq_('../fns');

// const colors = {
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

const tag = (t, pos, reason) => {
  let title = t.normal || '[' + t.silent_term + ']';
  title = fns.leftPad('\'' + title + '\'', 12);
  title += '  ->   ' + pos;
  title += fns.leftPad((reason || ''), 15);
  console.log('%c' + title, ' color: #a2c99c');
};
const untag = (t, pos, reason) => {
  let title = t.normal || '[' + t.silent_term + ']';
  title = fns.leftPad('\'' + title + '\'', 12);
  title += '  ~*   ' + pos;
  title += '    ' + (reason || '');
  console.log('%c' + title, ' color: #b66a6a');
};
module.exports = {
  tag: tag,
  untag: untag,
};

},{"../fns":3}],6:[function(_dereq_,module,exports){
'use strict';
const client = _dereq_('./client');
const server = _dereq_('./server');

let enable = false;

module.exports = {
  enable: (str) => {
    if (str === undefined) {
      str = true;
    }
    enable = str;
  },
  tag: (t, pos, reason) => {
    if (enable === true || enable === 'tagger') {
      if (typeof window !== 'undefined') {
        client.tag(t, pos, reason);
      } else {
        server.tag(t, pos, reason);
      }
    }
  },
  unTag: (t, pos, reason) => {
    if (enable === true || enable === 'tagger') {
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
const fns = _dereq_('../fns');

//use weird bash escape things for some colors
const tag = (t, pos, reason) => {
  let title = t.normal || '[' + t.silent_term + ']';
  title = fns.yellow(title);
  title = fns.leftPad('\'' + title + '\'', 20);
  title += '  ->   ' + fns.printTag(pos);
  title = fns.leftPad(title, 54);
  console.log('       ' + title + '(' + fns.cyan(reason || '') + ')');
};

const untag = function(t, pos, reason) {
  let title = '-' + t.normal + '-';
  title = fns.red(title);
  title = fns.leftPad(title, 20);
  title += '  ~*   ' + fns.red(pos);
  title = fns.leftPad(title, 54);
  console.log('       ' + title + '(' + fns.red(reason || '') + ')');
};

module.exports = {
  tag: tag,
  untag: untag,
};

},{"../fns":3}],8:[function(_dereq_,module,exports){
module.exports = {
  fns: _dereq_('./fns'),
  Terms: _dereq_('./terms'),
};

},{"./fns":3,"./terms":165}],9:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
//the Acronym() subset class

const methods = {
  stripPeriods: function() {
    this.list.forEach((ts) => {
      ts.terms.forEach((t) => {
        let chars = t._text.split('.');
        if (chars.length > 2) {
          t.text = chars.join('');
        }
      });
    });
    return this;
  },
  addPeriods: function() {
    this.list.forEach((ts) => {
      ts.terms.forEach((t) => {
        let chars = t._text.split('.');
        if (chars.length > 2) {
          let str = t._text.replace(/\./g, '');
          t.text = str.split('').join('.') + '.';
        }
      });
    });
    return this;
  },
  data: function() {
    return this.terms().list.map(ts => {
      let t = ts.terms[0];
      let parsed = t.text
        .toUpperCase()
        .replace(/\./g, '')
        .split('');
      return {
        periods: parsed.join('.'),
        normal: parsed.join(''),
        text: t.text
      };
    });
  }
};

const find = function(r, n) {
  r = r.match('#Acronym');
  if (typeof n === 'number') {
    r = r.get(n);
  }
  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192}],10:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
const fns = _dereq_('./methods');
//the Adjectives() subset class

//is this an adjective we want to goof-around with?
const shouldConvert = function(str, words) {
  if (!str || str.length <= 3) {
    return false;
  }
  if (words[str] === 'Comparable') {
    return true;
  }
  if (words[str] === 'Adjective') {
    return false;
  }
  //has space
  if (str.indexOf(' ') !== -1) {
    return false;
  }
  return true;
};

const methods = {
  data: function() {
    return this.list.map(ts => {
      const str = ts.out('normal');
      let obj = {
        normal: str,
        text: this.out('text'),
        comparative: 'more ' + str,
        superlative: 'most ' + str,
        adverbForm: null,
        nounForm: null
      // verbForm: null
      };
      if (shouldConvert(str, this.world().words) === true) {
        obj.comparative = fns.toComparative(str) || obj.comparative;
        obj.superlative = fns.toSuperlative(str) || obj.superlative;
        obj.adverbForm = fns.toAdverb(str);
        obj.nounForm = fns.toNoun(str);
      // obj.verbForm = fns.toVerb(str);
      }
      return obj;
    });
  }
};

const find = function(r, n) {
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
const not_matches = [/airs$/, /ll$/, /ee.$/, /ile$/, /y$/];
const irregulars = _dereq_('../../../world/more-data/irregularAdjectives').toAdverb;

const transforms = [
  {
    reg: /al$/i,
    repl: 'ally'
  },
  {
    reg: /ly$/i,
    repl: 'ly'
  },
  {
    reg: /(.{3})y$/i,
    repl: '$1ily'
  },
  {
    reg: /que$/i,
    repl: 'quely'
  },
  {
    reg: /ue$/i,
    repl: 'uly'
  },
  {
    reg: /ic$/i,
    repl: 'ically'
  },
  {
    reg: /ble$/i,
    repl: 'bly'
  },
  {
    reg: /l$/i,
    repl: 'ly'
  }
];

const adj_to_adv = function(str) {
  if (irregulars.hasOwnProperty(str) === true) {
    return irregulars[str];
  }
  for (let i = 0; i < not_matches.length; i++) {
    if (not_matches[i].test(str) === true) {
      return null;
    }
  }
  for (let i = 0; i < transforms.length; i++) {
    if (transforms[i].reg.test(str) === true) {
      return str.replace(transforms[i].reg, transforms[i].repl);
    }
  }
  return str + 'ly';
};
// console.log(adj_to_adv('good'));

module.exports = adj_to_adv;

},{"../../../world/more-data/irregularAdjectives":218}],13:[function(_dereq_,module,exports){
//turn 'quick' into 'quickly'
'use strict';
const do_rules = [/ght$/, /nge$/, /ough$/, /ain$/, /uel$/, /[au]ll$/, /ow$/, /old$/, /oud$/, /e[ae]p$/];
const dont_rules = [/ary$/, /ous$/];
const irregulars = _dereq_('../../../world/more-data/irregularAdjectives').toComparative;

const transforms = [
  {
    reg: /y$/i,
    repl: 'ier'
  },
  {
    reg: /([aeiou])t$/i,
    repl: '$1tter'
  },
  {
    reg: /([aeou])de$/i,
    repl: '$1der'
  },
  {
    reg: /nge$/i,
    repl: 'nger'
  }
];

const to_comparative = function(str) {
  //known-irregulars
  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  }
  //known-transforms
  for (let i = 0; i < transforms.length; i++) {
    if (transforms[i].reg.test(str) === true) {
      return str.replace(transforms[i].reg, transforms[i].repl);
    }
  }
  //dont-patterns
  for (let i = 0; i < dont_rules.length; i++) {
    if (dont_rules[i].test(str) === true) {
      return null;
    }
  }
  //do-patterns
  for (let i = 0; i < do_rules.length; i++) {
    if (do_rules[i].test(str) === true) {
      return str + 'er';
    }
  }
  //easy-one
  if (/e$/.test(str) === true) {
    return str + 'r';
  }
  return str + 'er';
// return null;
};

// console.log(to_comparative('big'));

module.exports = to_comparative;

},{"../../../world/more-data/irregularAdjectives":218}],14:[function(_dereq_,module,exports){
'use strict';
//convert 'cute' to 'cuteness'
const irregulars = {
  clean: 'cleanliness',
  naivety: 'naivety',
  hurt: 'hurt'
};

const transforms = [
  {
    reg: /y$/,
    repl: 'iness'
  },
  {
    reg: /le$/,
    repl: 'ility'
  },
  {
    reg: /ial$/,
    repl: 'y'
  },
  {
    reg: /al$/,
    repl: 'ality'
  },
  {
    reg: /ting$/,
    repl: 'ting'
  },
  {
    reg: /ring$/,
    repl: 'ring'
  },
  {
    reg: /bing$/,
    repl: 'bingness'
  },
  {
    reg: /sing$/,
    repl: 'se'
  },
  {
    reg: /ing$/,
    repl: 'ment'
  },
  {
    reg: /ess$/,
    repl: 'essness'
  },
  {
    reg: /ous$/,
    repl: 'ousness'
  }
];

const to_noun = function(w) {
  if (irregulars.hasOwnProperty(w)) {
    return irregulars[w];
  }
  const lastChar = w.charAt(w.length - 1);
  if (lastChar === 'w' || lastChar === 's') {
    return null;
  }
  for (let i = 0; i < transforms.length; i++) {
    if (transforms[i].reg.test(w) === true) {
      return w.replace(transforms[i].reg, transforms[i].repl);
    }
  }
  return w + 'ness';
};

module.exports = to_noun;
// console.log(to_noun("great"))

},{}],15:[function(_dereq_,module,exports){
//turn 'quick' into 'quickest'
'use strict';
const do_rules = [/ght$/, /nge$/, /ough$/, /ain$/, /uel$/, /[au]ll$/, /ow$/, /oud$/, /...p$/];
const dont_rules = [/ary$/];
const irregulars = _dereq_('../../../world/more-data/irregularAdjectives').toSuperlative;

const transforms = [
  {
    reg: /y$/i,
    repl: 'iest'
  },
  {
    reg: /([aeiou])t$/i,
    repl: '$1ttest'
  },
  {
    reg: /([aeou])de$/i,
    repl: '$1dest'
  },
  {
    reg: /nge$/i,
    repl: 'ngest'
  },
  {
    reg: /([aeiou])te$/i,
    repl: '$1test'
  }
];

const to_superlative = function(str) {
  //irregulars
  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  }
  //known transforms
  for (let i = 0; i < transforms.length; i++) {
    if (transforms[i].reg.test(str)) {
      return str.replace(transforms[i].reg, transforms[i].repl);
    }
  }
  //dont-rules
  for (let i = 0; i < dont_rules.length; i++) {
    if (dont_rules[i].test(str) === true) {
      return null;
    }
  }
  //do-rules
  for (let i = 0; i < do_rules.length; i++) {
    if (do_rules[i].test(str) === true) {
      if (str.charAt(str.length - 1) === 'e') {
        return str + 'st';
      }
      return str + 'est';
    }
  }
  return str + 'est';
};

module.exports = to_superlative;
// console.log(to_superlative("great"))

},{"../../../world/more-data/irregularAdjectives":218}],16:[function(_dereq_,module,exports){
'use strict';
//turn an adjective like 'soft' into a verb like 'soften'
//(don't do words like 'green' -> 'greenen')

const irregulars = {
  red: 'redden',
  sad: 'sadden',
  fat: 'fatten'
};

const toVerb = str => {
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
const Text = _dereq_('../../text');
const toAdjective = _dereq_('./toAdjective');

//the () subset class

const methods = {
  data: function() {
    return this.terms().list.map(ts => {
      let t = ts.terms[0];
      return {
        adjectiveForm: toAdjective(t.normal),
        normal: t.normal,
        text: t.text
      };
    });
  }
};

const find = function(r, n) {
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
const irregulars = {
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

const transforms = [{
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

const toAdjective = function(str) {
  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  }
  for (let i = 0; i < transforms.length; i++) {
    if (transforms[i].reg.test(str) === true) {
      return str.replace(transforms[i].reg, transforms[i].repl);
    }
  }
  return str;
};

// console.log(toAdjective('quickly'))
module.exports = toAdjective;

},{}],19:[function(_dereq_,module,exports){
'use strict';

//the plumbing to turn two words into a contraction
const combine = (a, b) => {
  b.whitespace.after = a.whitespace.after;
  a.whitespace.after = '';
  b.whitespace.before = '';
  a.silent_term = a.text;
  b.silent_term = b.text;
  b.text = '';
  a.tag('Contraction', 'new-contraction');
  b.tag('Contraction', 'new-contraction');
};

const irregulars = {
  can: 'can\'t',
  will: 'won\'t'
};

const contract = function(ts) {
  if (ts.expanded === false || ts.match('#Contraction').found) {
    return ts;
  }
  //he is -> he's
  ts.match('(#Noun|#QuestionWord) is').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'s';
    ls.contracted = true;
  });
  //he did -> he'd
  ts.match('#PronNoun did').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'d';
    ls.contracted = true;
  });
  //how do -> how'd
  ts.match('#QuestionWord (did|do)').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'d';
    ls.contracted = true;
  });
  //he would -> he'd
  ts.match('#Noun (could|would)').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'d';
    ls.contracted = true;
  });
  //they are -> they're
  ts.match('(they|we|you) are').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'re';
    ls.contracted = true;
  });
  //i am -> i'm
  ts.match('i am').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'m';
    ls.contracted = true;
  });
  //they will -> they'll
  ts.match('(#Noun|#QuestionWord) will').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'ll';
    ls.contracted = true;
  });
  //they have -> they've
  ts.match('(they|we|you|i) have').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'ve';
    ls.contracted = true;
  });
  //is not -> isn't
  ts.match('(#Copula|#Modal|do|does|have|has|can|will) not').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    //can't, won't
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
const Terms = _dereq_('../../paths').Terms;
const contract = _dereq_('./contract');
const expand = _dereq_('./expand');

const ContractionCl = function(arr, world, original) {
  Terms.call(this, arr, world, original);
};

//Inherit properties
ContractionCl.prototype = Object.create(Terms.prototype);

ContractionCl.prototype.data = function() {
  let expanded = expand(this.clone());
  let contracted = contract(this.clone());
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
ContractionCl.prototype.expand = function() {
  return expand(this);
};
ContractionCl.prototype.contract = function() {
  return contract(this);
};
module.exports = ContractionCl;

},{"../../paths":8,"./contract":19,"./expand":21}],21:[function(_dereq_,module,exports){
'use strict';
//turn `i'd` into `i would`
const expand = function(ts) {
  if (ts.contracted === false) {
    return ts;
  }
  ts.terms.forEach((t) => {
    if (t.silent_term) {
      //this term also needs a space now too
      if (!t.text) {
        t.whitespace.before = ' ';
      }
      t._text = t.silent_term;
      //handle (some) capitalization
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
'use strict';
//find contractable, expanded-contractions
const find = (r) => {
  let remain = r.not('#Contraction');
  let m = remain.match('(#Noun|#QuestionWord) (#Copula|did|do|have|had|could|would|will)');
  m.concat(remain.match('(they|we|you|i) have'));
  m.concat(remain.match('i am'));
  m.concat(remain.match('(#Copula|#Modal|do|does|have|has|can|will) not'));
  m.list.forEach((ts) => {
    ts.expanded = true;
  });
  return m;
};
module.exports = find;

},{}],23:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
const ContractionCl = _dereq_('./contraction');
const findPossible = _dereq_('./findPossible');
//the Contractions() subset class

const methods = {
  contract: function() {
    this.list.forEach(ts => ts.contract());
    return this;
  },
  expand: function() {
    this.list.forEach(ts => ts.expand());
    return this;
  },
  contracted: function() {
    this.list = this.list.filter(ts => {
      return ts.contracted;
    });
    return this;
  },
  expanded: function() {
    this.list = this.list.filter(ts => {
      return !ts.contracted;
    });
    return this;
  }
};

const find = function(r, n) {
  //find currently-contracted
  let found = r.match('#Contraction #Contraction #Contraction?');
  found.list = found.list.map(ts => {
    let c = new ContractionCl(ts.terms, ts.world, ts.refText, ts.refTerms);
    c.contracted = true;
    return c;
  });
  //find currently-expanded
  let expanded = findPossible(r);
  expanded.list.forEach(ts => {
    let c = new ContractionCl(ts.terms, ts.world, ts.refText, ts.refTerms);
    c.contracted = false;
    found.list.push(c);
  });
  found.sort('chronological');
  //get nth element
  if (typeof n === 'number') {
    found = found.get(n);
  }
  return found;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./contraction":20,"./findPossible":22}],24:[function(_dereq_,module,exports){
'use strict';
const Terms = _dereq_('../../paths').Terms;
const parseDate = _dereq_('./parseDate');

const _Date = function(arr, world, refText) {
  Terms.call(this, arr, world, refText);
  this.month = this.match('#Month');
};

//Inherit properties
_Date.prototype = Object.create(Terms.prototype);

_Date.prototype.data = function() {
  return {
    text: this.out('text'),
    normal: this.out('normal'),
    date: parseDate(this)
  };
};

module.exports = _Date;

},{"../../paths":8,"./parseDate":28}],25:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
const Date = _dereq_('./date');
const weekdays = _dereq_('./weekday');
const months = _dereq_('./month');
//the Dates() subset class
const methods = {
  toShortForm: function() {
    this.match('#Month')
      .terms()
      .list.forEach(ts => {
        let t = ts.terms[0];
        months.toShortForm(t);
      });
    this.match('#WeekDay')
      .terms()
      .list.forEach(ts => {
        let t = ts.terms[0];
        weekdays.toShortForm(t);
      });
    return this;
  },
  toLongForm: function() {
    this.match('#Month')
      .terms()
      .list.forEach(ts => {
        let t = ts.terms[0];
        months.toLongForm(t);
      });
    this.match('#WeekDay')
      .terms()
      .list.forEach(ts => {
        let t = ts.terms[0];
        weekdays.toLongForm(t);
      });
    return this;
  }
};

const find = function(r, n) {
  let dates = r.match('#Date+');
  if (typeof n === 'number') {
    dates = dates.get(n);
  }
  dates.list = dates.list.map(ts => {
    return new Date(ts.terms, ts.world, ts.refText, ts.refTerms);
  });
  return dates;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./date":24,"./month":27,"./weekday":31}],26:[function(_dereq_,module,exports){
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
  'december': 11,
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
  'sept': 8,
};

},{}],27:[function(_dereq_,module,exports){
'use strict';
const data = _dereq_('./data');
const shortMonths = data.shortMonths;
const longMonths = data.longMonths;
const titleCase = str => {
  return str.charAt(0).toUpperCase() + str.substr(1);
};
module.exports = {
  index: function (t) {
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
  toShortForm: function (t) {
    if (t.tags.Month !== undefined) {
      if (longMonths[t.normal] !== undefined) {
        let shorten = Object.keys(shortMonths);
        let punct = t.getPunctuation() || '';
        t.text = shorten[longMonths[t.normal]] + punct;
        if (t.tags.TitleCase) {
          t.text = titleCase(t.text);
        }
      }
    }
    t.dirty = true;
    return t;
  },
  toLongForm: function (t) {
    if (t.tags.Month !== undefined) {
      if (shortMonths[t.normal] !== undefined) {
        let longer = Object.keys(longMonths);
        let punct = t.getPunctuation() || '';
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
const parseTime = _dereq_('./parseTime');
const weekdays = _dereq_('./weekday');
const months = _dereq_('./month');
//a hugely-conservative and incomplete first-pass for parsing written-dates

//validate a day-of-month
const isDate = (num) => {
  if (num && num < 31 && num > 0) {
    return true;
  }
  return false;
};

//please change this in one thousand years
const isYear = (num) => {
  if (num && num > 1000 && num < 3000) {
    return true;
  }
  return false;
};

//
const parseDate = (r) => {
  let result = {
    month: null,
    date: null,
    weekday: null,
    year: null,
    named: null,
    time: null,
  };
  let m = r.match('(#Holiday|today|tomorrow|yesterday)');
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
  }
  //january fifth 1992
  m = r.match('#Month #Value #Year');
  if (m.found) {
    let numbers = m.values().numbers();
    if (isDate(numbers[0])) {
      result.date = numbers[0];
    }
    let year = parseInt(r.match('#Year').out('normal'), 10);
    if (isYear(year)) {
      result.year = year;
    }
  }
  if (!m.found) {
    //january fifth,  january 1992
    m = r.match('#Month #Value');
    if (m.found) {
      let numbers = m.values().numbers();
      let num = numbers[0];
      if (isDate(num)) {
        result.date = num;
      }
    }
    //january 1992
    m = r.match('#Month #Year');
    if (m.found) {
      let num = parseInt(r.match('#Year').out('normal'), 10);
      if (isYear(num)) {
        result.year = num;
      }
    }
  }

  //fifth of january
  m = r.match('#Value of #Month');
  if (m.found) {
    let num = m.values().numbers()[0];
    if (isDate(num)) {
      result.date = num;
    }
  }
  return result;
};
module.exports = parseDate;

},{"./month":27,"./parseTime":29,"./weekday":31}],29:[function(_dereq_,module,exports){
'use strict';
const ampm = /([12]?[0-9]) ?(am|pm)/i;
const hourMin = /([12]?[0-9]):([0-9][0-9]) ?(am|pm)?/i;
//
const isHour = (num) => {
  if (num && num > 0 && num < 25) {
    return true;
  }
  return false;
};
const isMinute = (num) => {
  if (num && num > 0 && num < 60) {
    return true;
  }
  return false;
};


const parseTime = (r) => {
  let result = {
    logic: null,
    hour: null,
    minute: null,
    second: null,
    timezone: null
  };

  let logic = r.match('(by|before|for|during|at|until|after) #Time').firstTerm();
  if (logic.found) {
    result.logic = logic.out('normal');
  }

  let time = r.match('#Time');
  time.terms().list.forEach((ts) => {
    let t = ts.terms[0];
    //3pm
    let m = t.text.match(ampm);
    if (m !== null) {
      result.hour = parseInt(m[1], 10);
      if (m[2] === 'pm') {
        result.hour += 12;
      }
      if (isHour(result.hour) === false) {
        result.hour = null;
      }
    }
    //3:15
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
//follow the javascript scheme
//sunday is 0
exports.longDays = {
  'sunday': 0,
  'monday': 1,
  'tuesday': 2,
  'wednesday': 3,
  'thursday': 4,
  'friday': 5,
  'saturday': 6,
};
exports.shortDays = {
  'sun': 0,
  'mon': 1,
  'tues': 2,
  'wed': 3,
  'weds': 3,
  'thurs': 4,
  'fri': 5,
  'sat': 6,
};

},{}],31:[function(_dereq_,module,exports){
'use strict';
const data = _dereq_('./data');
const shortDays = data.shortDays;
const longDays = data.longDays;

module.exports = {
  index: function (t) {
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
  toShortForm: function (t) {
    if (t.tags.WeekDay) {
      if (longDays[t.normal] !== undefined) {
        let shorten = Object.keys(shortDays);
        t.text = shorten[longDays[t.normal]];
      }
    }
    return t;
  },
  toLongForm: function (t) {
    if (t.tags.WeekDay) {
      if (shortDays[t.normal] !== undefined) {
        let longer = Object.keys(longDays);
        t.text = longer[shortDays[t.normal]];
      }
    }
    return t;
  }
};

},{"./data":30}],32:[function(_dereq_,module,exports){
'use strict';
const Ngrams = _dereq_('./index');
const getGrams = _dereq_('./getGrams');

//like an n-gram, but only the endings of matches
const EndGrams = function(arr, world, original) {
  Ngrams.call(this, arr, world, original);
};

//Inherit properties
EndGrams.prototype = Object.create(Ngrams.prototype);

//like an n-gram, but only the startings of matches
EndGrams.find = function(r, n, size) {
  let opts = {
    size: [1, 2, 3, 4],
    edge: 'end'
  };
  //only look for bigrams, for example
  if (size) {
    opts.size = [size];
  }
  //fetch them
  let arr = getGrams(r, opts);
  r = new EndGrams(arr);
  //default sort
  r.sort();
  //grab top one, or something
  if (typeof n === 'number') {
    r = r.get(n);
  }
  return r;
};
module.exports = EndGrams;

},{"./getGrams":33,"./index":35}],33:[function(_dereq_,module,exports){
'use strict';
const Gram = _dereq_('./gram');

//strip contractions - remove '' term for "it's"
const noEmpty = function(fts) {
  return fts = fts.terms.filter((t) => t._text !== '');
};

//do all grams of one size, on one termList
const getGrams = function(fts, n) {
  let terms = noEmpty(fts);
  if (terms.length < n) {
    return [];
  }
  let arr = [];
  for(let i = 0; i < terms.length - n + 1; i++) {
    let gram = new Gram(terms.slice(i, i + n));
    arr.push(gram);
  }
  return arr;
};

//left-sided grams
const startGram = function(fts, n) {
  let terms = noEmpty(fts);
  if (terms.length < n) {
    return [];
  }
  let arr = [
    new Gram(terms.slice(0, n)),
  ];
  return arr;
};

//right-sided grams
const endGram = function(fts, n) {
  let terms = noEmpty(fts);
  if (terms.length < n) {
    return [];
  }
  let arr = [
    new Gram(terms.slice(terms.length - n, terms.length))
  ];
  return arr;
};

//ngrams are consecutive terms of a specific size
const buildGrams = function(r, options) {
  options = options || {};
  options.size = options.size || [1, 2, 3];
  if (typeof options.size === 'number') {
    options.size = [options.size];
  }
  let obj = {};
  //collect and count all grams
  options.size.forEach((size) => {
    r.list.forEach((ts) => {
      let newGrams = [];
      if (options.edge === 'start') {
        newGrams = startGram(ts, size);
      } else if (options.edge === 'end') {
        newGrams = endGram(ts, size);
      } else {
        newGrams = getGrams(ts, size);
      }
      newGrams.forEach((g) => {
        if (obj.hasOwnProperty(g.key)) {
          obj[g.key].inc();
        } else {
          obj[g.key] = g;
        }
      });
    });
  });

  //flatten to an array
  let arr = Object.keys(obj).map((k) => obj[k]);
  return arr;
};

module.exports = buildGrams;

},{"./gram":34}],34:[function(_dereq_,module,exports){
'use strict';
const Terms = _dereq_('../../paths').Terms;

//this is one-or-more terms together, sorted by frequency
const Gram = function(arr, world, original) {
  Terms.call(this, arr, world, original);
  //string to sort/uniq by
  this.key = this.out('normal');
  //bigram/trigram/etc
  this.size = arr.length;
  //number of occurances
  this.count = 1;
};

//Inherit properties
Gram.prototype = Object.create(Terms.prototype);

Gram.prototype.inc = function() {
  this.count += 1;
};

module.exports = Gram;

},{"../../paths":8}],35:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
const getGrams = _dereq_('./getGrams');

const sort = function(r) {
  r.list = r.list.sort((a, b) => {
    if (a.count > b.count) {
      return -1;
    }
    //(tie-braker)
    if (a.count === b.count && (a.size > b.size || a.key.length > b.key.length)) {
      return -1;
    }
    return 1;
  });
  return r;
};

//the Ngrams() subset class
const methods = {
  data: function() {
    return this.list.map(ts => {
      return {
        normal: ts.out('normal'),
        count: ts.count,
        size: ts.size
      };
    });
  },
  unigrams: function() {
    this.list = this.list.filter(g => g.size === 1);
    return this;
  },
  bigrams: function() {
    this.list = this.list.filter(g => g.size === 2);
    return this;
  },
  trigrams: function() {
    this.list = this.list.filter(g => g.size === 3);
    return this;
  },
  //default sort the ngrams
  sort: function() {
    return sort(this);
  }
};

const find = function(r, obj) {
  let sizes = [];
  //support .ngrams(3), for compat
  if (typeof obj === 'number') {
    obj = {
      n: obj
    };
  }
  obj = obj || {};
  let max = obj.max || 4;
  for (let i = 1; i <= max; i++) {
    sizes.push(i);
  }
  //only look for bigrams, for example
  if (obj.size) {
    sizes = [obj.size];
  }
  let opts = {
    size: sizes
  };
  //fetch them
  let arr = getGrams(r, opts);
  r = new Text(arr);
  //default sort
  r = sort(r);
  //grab top one, or something
  if (obj.n !== undefined) {
    r = r.get(obj.n);
  }
  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./getGrams":33}],36:[function(_dereq_,module,exports){
'use strict';
const Ngrams = _dereq_('./index');
const getGrams = _dereq_('./getGrams');

const StartGrams = function(arr, world, original) {
  Ngrams.call(this, arr, world, original);
};

//Inherit properties
StartGrams.prototype = Object.create(Ngrams.prototype);

//like an n-gram, but only the startings of matches
StartGrams.find = function(r, n, size) {
  let opts = {
    size: [1, 2, 3, 4],
    edge: 'start'
  };
  //only look for bigrams, for example
  if (size) {
    opts.size = [size];
  }
  //fetch them
  let arr = getGrams(r, opts);
  r = new StartGrams(arr);
  //default sort
  r.sort();
  //grab top one, or something
  if (typeof n === 'number') {
    r = r.get(n);
  }
  return r;
};

module.exports = StartGrams;

},{"./getGrams":33,"./index":35}],37:[function(_dereq_,module,exports){
'use strict';

//certain words can't be plural, like 'peace'
const hasPlural = function(t) {
  //end quick
  if (!t.tags.Noun) {
    return false;
  }
  if (t.tags.Plural) {
    return true;
  }
  //is it potentially plural?
  const noPlural = ['Pronoun', 'Place', 'Value', 'Person', 'Month', 'WeekDay', 'RelativeDay', 'Holiday'];
  for (let i = 0; i < noPlural.length; i++) {
    if (t.tags[noPlural[i]]) {
      return false;
    }
  }
  //terms known as un-inflectable, like 'peace'
  if (t.tags.Uncountable === true) {
    return false;
  }
  return true;
};

module.exports = hasPlural;

},{}],38:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
const Noun = _dereq_('./noun');

//the () subset class
const methods = {
  isPlural: function() {
    this.list = this.list.filter(ts => ts.isPlural());
    return this;
  },
  hasPlural: function() {
    return this.list.map(ts => ts.hasPlural());
  },
  toPlural: function() {
    this.list.forEach(ts => ts.toPlural());
    return this;
  },
  toSingular: function(verbose) {
    this.list.forEach(ts => ts.toSingular(verbose));
    return this;
  },
  toPossessive: function(verbose) {
    this.list.forEach(ts => ts.toPossessive(verbose));
    return this;
  },
  articles: function() {
    return this.list.map(ts => {
      return {
        text: ts.out('text'),
        normal: ts.out('normal'),
        article: ts.article()
      };
    });

  }
};

const find = function(r, n) {
  r = r.clauses();
  r = r.match('#Noun+ (of|by)? the? #Noun+?');
  //nouns that we don't want in these results, for weird reasons
  r = r.not('#Pronoun');
  r = r.not('(there|these)');
  r = r.not('(#Month|#WeekDay)'); //allow Durations, Holidays
  // //allow possessives like "spencer's", but not generic ones like,
  r = r.not('(my|our|your|their|her|his)');
  r = r.not('(of|for|by|the)$');
  if (typeof n === 'number') {
    r = r.get(n);
  }
  r.list = r.list.map(ts => {
    return new Noun(ts.terms, ts.world, ts.refText, ts.refTerms);
  });
  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./noun":46}],39:[function(_dereq_,module,exports){
'use strict';
const rules = _dereq_('./methods/data/indicators');
const prep = /([a-z]*) (of|in|by|for) [a-z]/;
const hasPlural = _dereq_('./hasPlural');

const knownPlural = {
  i: false,
  he: false,
  she: false,
  we: true,
  they: true
};

//is it potentially plural?
const noPlural = ['Place', 'Value', 'Person', 'Month', 'WeekDay', 'RelativeDay', 'Holiday', 'Possessive'];
//first, try to guess based on existing tags
const couldEvenBePlural = function(t) {
  if (hasPlural(t) === false) {
    return false;
  }
  for (let i = 0; i < noPlural.length; i++) {
    if (t.tags[noPlural[i]]) {
      return false;
    }
  }
  return true;
};

/** returns true, false, or null */
const isPlural = function(t, world) {
  if (t.tags.Plural) {
    return true;
  }
  if (t.tags.Singular) {
    return false;
  }
  let str = t.normal;
  //whitelist a few easy ones
  if (knownPlural.hasOwnProperty(str) === true) {
    return knownPlural[str];
  }
  //check given irregulars
  if (world.plurals && world.plurals.hasOwnProperty(str) === true) {
    return false;
  }
  //check opposite-ones
  if (world.cache.toSingular && world.cache.toSingular.hasOwnProperty(str) === true) {
    return true;
  }
  //inspect the existing tags to see if a plural is valid
  if (couldEvenBePlural(t) === false) {
    return null;
  }
  //handle 'mayors of chicago'
  const preposition = str.match(prep);
  if (preposition !== null) {
    str = preposition[1];
  }
  //check the suffix-type rules for indications
  for (let i = 0; i < rules.plural_indicators.length; i++) {
    if (rules.plural_indicators[i].test(str) === true) {
      return true;
    }
  }
  for (let i = 0; i < rules.singular_indicators.length; i++) {
    if (rules.singular_indicators[i].test(str) === true) {
      return false;
    }
  }
  // a fallback 'looks check plural' rule..
  if (/s$/.test(str) === true && /ss$/.test(str) === false && str.length > 3) {
    //needs some lovin'
    return true;
  }
  return false;
};

module.exports = isPlural;
// console.log(is_plural('octopus'))

},{"./hasPlural":37,"./methods/data/indicators":41}],40:[function(_dereq_,module,exports){
'use strict';

//chooses an indefinite aricle 'a/an' for a word
const irregulars = {
  'hour': 'an',
  'heir': 'an',
  'heirloom': 'an',
  'honest': 'an',
  'honour': 'an',
  'honor': 'an',
  'uber': 'an' //german u
};
//pronounced letters of acronyms that get a 'an'
const an_acronyms = {
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
};
//'a' regexes
const a_regexs = [
  /^onc?e/i, //'wu' sound of 'o'
  /^u[bcfhjkqrstn][aeiou]/i, // 'yu' sound for hard 'u'
  /^eul/i
];

const makeArticle = function(t) {
  let str = t.normal;
  //no 'the john smith', but 'a london hotel'
  if (t.tags.Person) {
    return '';
  }
  //no a/an if it's plural
  if (t.tags.Plural) {
    return 'the';
  }
  //explicit irregular forms
  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  }
  //spelled-out acronyms
  let firstLetter = str.substr(0, 1);
  if (t.isAcronym() && an_acronyms.hasOwnProperty(firstLetter)) {
    return 'an';
  }
  //'a' regexes
  for (let i = 0; i < a_regexs.length; i++) {
    if (a_regexs[i].test(str)) {
      return 'a';
    }
  }
  //basic vowel-startings
  if (/^[aeiou]/i.test(str)) {
    return 'an';
  }
  return 'a';
};

module.exports = makeArticle;

},{}],41:[function(_dereq_,module,exports){
'use strict';
//similar to plural/singularize rules, but not the same
const plural_indicators = [
  /(^v)ies$/i,
  /ises$/i,
  /ives$/i,
  /(antenn|formul|nebul|vertebr|vit)ae$/i,
  /(octop|vir|radi|nucle|fung|cact|stimul)i$/i,
  /(buffal|tomat|tornad)oes$/i,
  /(analy|ba|diagno|parenthe|progno|synop|the)ses$/i,
  /(vert|ind|cort)ices$/i,
  /(matr|append)ices$/i,
  /(x|ch|ss|sh|s|z|o)es$/i,
  /men$/i,
  /news$/i,
  /.tia$/i,
  /(^f)ves$/i,
  /(lr)ves$/i,
  /(^aeiouy|qu)ies$/i,
  /(m|l)ice$/i,
  /(cris|ax|test)es$/i,
  /(alias|status)es$/i,
  /ics$/i
];

//similar to plural/singularize rules, but not the same
const singular_indicators = [
  /(ax|test)is$/i,
  /(octop|vir|radi|nucle|fung|cact|stimul)us$/i,
  /(octop|vir)i$/i,
  /(rl)f$/i,
  /(alias|status)$/i,
  /(bu)s$/i,
  /(al|ad|at|er|et|ed|ad)o$/i,
  /(ti)um$/i,
  /(ti)a$/i,
  /sis$/i,
  /(?:(^f)fe|(lr)f)$/i,
  /hive$/i,
  /(^aeiouy|qu)y$/i,
  /(x|ch|ss|sh|z)$/i,
  /(matr|vert|ind|cort)(ix|ex)$/i,
  /(m|l)ouse$/i,
  /(m|l)ice$/i,
  /(antenn|formul|nebul|vertebr|vit)a$/i,
  /.sis$/i,
  /^(?!talis|.*hu)(.*)man$/i
];
module.exports = {
  singular_indicators: singular_indicators,
  plural_indicators: plural_indicators
}

},{}],42:[function(_dereq_,module,exports){
//patterns for turning 'bus' to 'buses'
module.exports = [
  [/(ax|test)is$/i, '$1es'],
  [/(octop|vir|radi|nucle|fung|cact|stimul)us$/i, '$1i'],
  [/(octop|vir)i$/i, '$1i'],
  [/(kn|l|w)ife$/i, '$1ives'],
  [/^((?:ca|e|ha|(?:our|them|your)?se|she|wo)l|lea|loa|shea|thie)f$/i, '$1ves'],
  [/^(dwar|handkerchie|hoo|scar|whar)f$/i, '$1ves'],
  [/(alias|status)$/i, '$1es'],
  [/(bu)s$/i, '$1ses'],
  [/(al|ad|at|er|et|ed|ad)o$/i, '$1oes'],
  [/([ti])um$/i, '$1a'],
  [/([ti])a$/i, '$1a'],
  [/sis$/i, 'ses'],
  [/(hive)$/i, '$1s'],
  [/([^aeiouy]|qu)y$/i, '$1ies'],
  [/(x|ch|ss|sh|s|z)$/i, '$1es'],
  [/(matr|vert|ind|cort)(ix|ex)$/i, '$1ices'],
  [/([m|l])ouse$/i, '$1ice'],
  [/([m|l])ice$/i, '$1ice'],
  [/^(ox)$/i, '$1en'],
  [/^(oxen)$/i, '$1'],
  [/(quiz)$/i, '$1zes'],
  [/(antenn|formul|nebul|vertebr|vit)a$/i, '$1ae'],
  [/(sis)$/i, 'ses'],
  [/^(?!talis|.*hu)(.*)man$/i, '$1men'],
  [/(.*)/i, '$1s']
].map(function(a) {
  return {
    reg: a[0],
    repl: a[1]
  };
});

},{}],43:[function(_dereq_,module,exports){
//patterns for turning 'dwarves' to 'dwarf'
module.exports = [
  [/([^v])ies$/i, '$1y'],
  [/ises$/i, 'isis'],
  [/(kn|[^o]l|w)ives$/i, '$1ife'],
  [/^((?:ca|e|ha|(?:our|them|your)?se|she|wo)l|lea|loa|shea|thie)ves$/i, '$1f'],
  [/^(dwar|handkerchie|hoo|scar|whar)ves$/i, '$1f'],
  [/(antenn|formul|nebul|vertebr|vit)ae$/i, '$1a'],
  [/(octop|vir|radi|nucle|fung|cact|stimul)(i)$/i, '$1us'],
  [/(buffal|tomat|tornad)(oes)$/i, '$1o'],
  // [/(analy|diagno|parenthe|progno|synop|the)ses$/i, '$1sis'],
  [/(..[aeiou]s)es$/i, '$1'],
  [/(vert|ind|cort)(ices)$/i, '$1ex'],
  [/(matr|append)(ices)$/i, '$1ix'],
  [/(x|ch|ss|sh|z|o)es$/i, '$1'],
  [/men$/i, 'man'],
  [/(n)ews$/i, '$1ews'],
  [/([ti])a$/i, '$1um'],
  [/([^aeiouy]|qu)ies$/i, '$1y'],
  [/(s)eries$/i, '$1eries'],
  [/(m)ovies$/i, '$1ovie'],
  [/([m|l])ice$/i, '$1ouse'],
  [/(cris|ax|test)es$/i, '$1is'],
  [/(alias|status)es$/i, '$1'],
  [/(ss)$/i, '$1'],
  [/(ics)$/i, '$1'],
  [/s$/i, '']
].map(function(a) {
  return {
    reg: a[0],
    repl: a[1]
  };
});

},{}],44:[function(_dereq_,module,exports){
'use strict';
// const irregulars = require('../../../lexicon/uncompressed/irregularPlurals').toPlural;
const pluralRules = _dereq_('./data/pluralRules');

//turn 'shoe' into 'shoes'
const pluralize = function(str, world) {
  const irregulars = world.plurals || {};
  //irregular
  if (irregulars.hasOwnProperty(str) === true) {
    return irregulars[str];
  }
  //regular rule-based inflector
  for (let i = 0; i < pluralRules.length; i++) {
    if (pluralRules[i].reg.test(str) === true) {
      return str.replace(pluralRules[i].reg, pluralRules[i].repl);
    }
  }
  return null;
};

module.exports = pluralize;

},{"./data/pluralRules":42}],45:[function(_dereq_,module,exports){
'use strict';
const singleRules = _dereq_('./data/singleRules');

//turn 'shoes' into 'shoe'
const toSingle = function(str, world) {
  //reverse it //TODO: cache in world object somewhere
  let irregulars = world.cache.toSingular || {};
  //check irregulars
  if (irregulars.hasOwnProperty(str) === true) {
    return irregulars[str];
  }
  if (world && world.plurals) {
    //given irregulars
    let keys = Object.keys(world.plurals);
    for (let i = 0; i < keys.length; i++) {
      if (world.plurals[keys[i]] === str) {
        return keys[i];
      }
    }
  }

  //inflect first word of preposition-phrase
  if (/([a-z]*) (of|in|by|for) [a-z]/.test(str) === true) {
    const first = (str.match(/^([a-z]*) (of|in|by|for) [a-z]/) || [])[1];
    if (first) {
      const better_first = toSingle(first); //recursive
      return better_first + str.replace(first, '');
    }
  }

  //regular rule-based inflector
  for (let i = 0; i < singleRules.length; i++) {
    if (singleRules[i].reg.test(str) === true) {
      return str.replace(singleRules[i].reg, singleRules[i].repl);
    }
  }
  return null;
};

module.exports = toSingle;
// console.log(toSingle('days'))

},{"./data/singleRules":43}],46:[function(_dereq_,module,exports){
'use strict';
const Terms = _dereq_('../../paths').Terms;
const hasPlural = _dereq_('./hasPlural');
const isPlural = _dereq_('./isPlural');
const toPossessive = _dereq_('./toPossessive');
const makeArticle = _dereq_('./makeArticle');
const pluralize = _dereq_('./methods/pluralize');
const singularize = _dereq_('./methods/singularize');

const methods = {
  article: function() {
    return makeArticle(this.main);
  },
  isPlural: function() {
    return isPlural(this.main, this.world);
  },
  hasPlural: function() {
    return hasPlural(this.main);
  },
  toPlural: function(verbose) {
    let t = this.main;
    if (hasPlural(t) && !isPlural(t, this.world)) {
      t.text = pluralize(t.normal, this.world, verbose) || t.text;
      t.unTag('Singular', 'toPlural');
      t.tag('Plural', 'toPlural');
    }
    return this;
  },
  toSingular: function(verbose) {
    let t = this.main;
    if (isPlural(t, this.world)) {
      t.text = singularize(t.normal, this.world, verbose) || t.text;
      t.unTag('Plural', 'toSingular');
      t.tag('Singular', 'toSingular');
    }
    return this;
  },
  toPossessive: function() {
    let t = this.main;
    if (t.tags.Possessive) {
      return this;
    }
    t = toPossessive(t);
    return this;
  },
  data: function() {
    let t = this.main;
    let singular = t.text;
    if (isPlural(t, this.world)) {
      singular = singularize(t.normal, this.world) || t.text;
    }
    let plural = t.text;
    if (hasPlural(t) && !isPlural(t, this.world)) {
      plural = pluralize(t.normal, this.world) || t.text;
    }
    //support 'mayors of chicago'
    let qualifier = '';
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

const Noun = function(arr, world, refText) {
  Terms.call(this, arr, world, refText);
  //support 'mayor of chicago' as one noun-phrase
  this.main = this.match('[#Noun+] (of|by|for)');
  if (this.main.found) {
    this.main = this.main.list[0].terms[0];
  } else {
    this.main = this.terms[this.terms.length - 1];
  }
  //'of chicago'
  this.qualifier = this.match(this.main.normal + ' [.+]').list[0];
};
Noun.prototype = Object.create(Terms.prototype);

Object.keys(methods).forEach(k => {
  Noun.prototype[k] = methods[k];
});
module.exports = Noun;

},{"../../paths":8,"./hasPlural":37,"./isPlural":39,"./makeArticle":40,"./methods/pluralize":44,"./methods/singularize":45,"./toPossessive":47}],47:[function(_dereq_,module,exports){
const exceptions = {
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
  your: 'yours',
};

// turn "David" to "David's"
const toPossessive = function(t) {
  t.tag('Possessive', 'toPossessive');
  // exceptions
  if (exceptions.hasOwnProperty(t.normal)) {
    t.text = exceptions[t.normal];
    return t;
  }
  // flanders'
  if (/s$/.test(t.normal)) {
    t.text += '\'';
    return t;
  }
  //normal form:
  t.text += '\'s';
  return t;
};
module.exports = toPossessive;

},{}],48:[function(_dereq_,module,exports){
'use strict';
// make a statistical assumption about the gender of the person based on their given name
// used for pronoun resolution only.
// not intended for classification, or discrimination of people.
const gender = function (firstName) {
  if (!firstName) {
    return null;
  }
  //statistical guesses
  if (/.(i|ee|[a|e]y|a)$/.test(firstName) === true) { //this is almost-always true
    return 'Female';
  }
  if (/[ou]$/.test(firstName) === true) { //if it ends in a 'oh or uh', male
    return 'Male';
  }
  if (/(nn|ll|tt)/.test(firstName) === true) { //if it has double-consonants, female
    return 'Female';
  }
  // name not recognized, or recognized as of indeterminate gender
  return null;
};
module.exports = gender;

},{}],49:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
const Person = _dereq_('./person');
//this is used for pronoun and honorifics, and not intented for more-than grammatical use (see #117)

//the () subset class
const methods = {
  pronoun: function() {
    return this.list.map(ts => ts.pronoun());
  },
  firstNames: function() {
    return this.match('#FirstName');
  },
  lastNames: function() {
    return this.match('#LastName');
  }
};

const find = function(r, n) {
  let people = r.clauses();
  people = people.match('#Person+');
  if (typeof n === 'number') {
    people = people.get(n);
  }
  people.list = people.list.map(ts => {
    return new Person(ts.terms, ts.world, ts.refText, ts.refTerms);
  });
  return people;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./person":50}],50:[function(_dereq_,module,exports){
'use strict';
const Terms = _dereq_('../../paths').Terms;
const guessGender = _dereq_('./guessGender');

const Person = function(arr, world, refText, refTerms) {
  Terms.call(this, arr, world, refText, refTerms);
  this.firstName = this.match('#FirstName+');
  this.middleName = this.match('#Acronym+');
  this.nickName = this.match('#NickName+');
  this.honorifics = this.match('#Honorific');
  this.lastName = this.match('#LastName+');
  //assume first-last
  if (!this.firstName.found && this.length > 1) {
    let m = this.not('(#Acronym|#Honorific)');
    this.firstName = m.first();
    this.lastName = m.last();
  }
  return this;
};
//Inherit properties
Person.prototype = Object.create(Terms.prototype);

const methods = {
  data: function() {
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
  guessGender: function() {
    //try known honorifics
    if (this.honorifics.match('(mr|mister|sr|sir|jr)').found) {
      return 'Male';
    }
    if (this.honorifics.match('(mrs|miss|ms|misses|mme|mlle)').found) {
      return 'Female';
    }
    //try known first-names
    if (this.firstName.match('#MaleName').found) {
      return 'Male';
    }
    if (this.firstName.match('#FemaleName').found) {
      return 'Female';
    }
    //look-for regex clues
    let str = this.firstName.out('normal');
    return guessGender(str);
  },
  pronoun: function() {
    let str = this.firstName.out('normal');
    let g = this.guessGender(str);
    if (g === 'Male') {
      return 'he';
    }
    if (g === 'Female') {
      return 'she';
    }
    return 'they';
  },
  root: function() {
    let first = this.firstName.out('root');
    let last = this.lastName.out('root');
    if (first && last) {
      return first + ' ' + last;
    }
    return last || first || this.out('root');
  }
};

Object.keys(methods).forEach(k => {
  Person.prototype[k] = methods[k];
});
module.exports = Person;

},{"../../paths":8,"./guessGender":48}],51:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
// const Terms = require('../../paths').Terms;

const methods = {
  //remove the 's on the end of the word
  strip() {
    this.list.forEach((ts) => {
      let t = ts.terms[ts.terms.length - 1];
      t.text = t.text.replace(/'s$/, '');
      t.unTag('Possessive', '.strip()');
    });
    return this;
  }
};

const find = function(r, n) {
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
const Text = _dereq_('../../text');
const Sentence = _dereq_('./sentence');
//the Sentences() subset class
const methods = {
  /** conjugate the main/first verb*/
  toPastTense: function() {
    this.list = this.list.map(ts => {
      ts = ts.toPastTense();
      return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
    });
    return this;
  },
  toPresentTense: function() {
    this.list = this.list.map(ts => {
      ts = ts.toPresentTense();
      return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
    });
    return this;
  },
  toFutureTense: function() {
    this.list = this.list.map(ts => {
      ts = ts.toFutureTense();
      return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
    });
    return this;
  },
  toContinuous: function() {
    this.list = this.list.map(ts => {
      ts = ts.toContinuous();
      return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
    });
    return this;
  },
  /** negative/positive */
  toNegative: function() {
    this.list = this.list.map(ts => {
      ts = ts.toNegative();
      return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
    });
    return this;
  },
  toPositive: function() {
    this.list = this.list.map(ts => {
      ts = ts.toPositive();
      return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
    });
    return this;
  },

  /** look for 'was _ by' patterns */
  isPassive: function() {
    this.list = this.list.filter(ts => {
      return ts.isPassive();
    });
    return this;
  },
  //return only questions
  isQuestion: function() {
    // this.list = this.list.filter(ts => {
    //   return ts.isQuestion();
    // });
    return this.questions()
  },
  /** add a word to the start */
  prepend: function(str) {
    this.list = this.list.map(ts => {
      return ts.prepend(str);
    });
    return this;
  },
  /** add a word to the end */
  append: function(str) {
    this.list = this.list.map(ts => {
      return ts.append(str);
    });
    return this;
  },

  /** convert between question/statement/exclamation*/
  toExclamation: function() {
    this.list.forEach(ts => {
      ts.setPunctuation('!');
    });
    return this;
  },
  toQuestion: function() {
    this.list.forEach(ts => {
      ts.setPunctuation('?');
    });
    return this;
  },
  toStatement: function() {
    this.list.forEach(ts => {
      ts.setPunctuation('.');
    });
    return this;
  }
};

const find = function(r, n) {
  r = r.all();
  if (typeof n === 'number') {
    r = r.get(n);
  }
  r.list = r.list.map(ts => {
    return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
  });
  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./sentence":54}],53:[function(_dereq_,module,exports){
'use strict';

//is this sentence asking a question?
const isQuestion = function (ts) {
  let endPunct = ts.getPunctuation();
  let clauses = ts.match('*').splitAfter('#Comma');

  if (/\?/.test(endPunct) === true) {
    return true;
  }

  // Has ellipsis at the end means it's probably not a question
  // e.g., Is this just fantasy...
  if (/\.\.$/.test(ts.out('text'))) {
    return false;
  }

  // Starts with question word, but has a comma, so probably not a question
  // e.g., Why are we caught in a land slide, no escape from reality
  if (ts.has('^#QuestionWord') && ts.has('#Comma')) {
    return false;
  }

  // Starts with a #QuestionWord
  // e.g., What open your eyes look up to the skies and see
  if (ts.has('^#QuestionWord')) {
    return true;
  }

  // Second word is a #QuestionWord
  // e.g., I'm what a poor boy
  // case ts.has('^\w+\s#QuestionWord'):
  // return true;

  // is it, do you - start of sentence
  // e.g., Do I need no sympathy
  if (ts.has('^(do|does|did|is|was|can|could|will|would|may) #Noun')) {
    return true;
  }

  // these are a little more loose..
  // e.g., Must I be come easy come easy go
  if (ts.has('^(have|must) you')) {
    return true;
  }

  // Clause starts with a question word
  // e.g., Anyway the wind blows, what doesn't really matter to me
  if (clauses.has('^#QuestionWord')) {
    return true;
  }

  //is wayne gretskzy alive
  if (clauses.has('(do|does|is|was) #Noun+ #Adverb? (#Adjective|#Infinitive)$')) {
    return true;
  }

  // Probably not a question
  return false;

};
module.exports = isQuestion;

},{}],54:[function(_dereq_,module,exports){
'use strict';
const Terms = _dereq_('../../paths').Terms;
const toNegative = _dereq_('./toNegative');
const toPositive = _dereq_('./toPositive');
const Verb = _dereq_('../verbs/verb');
const insert = _dereq_('./smartInsert');

//decide on main subject-verb-object
const parse = function(s) {
  //strip conditions first
  let conditions = s.match('#Condition');
  let tmp = s.not('#Condition');
  //choose the verb first
  let verb = tmp.match('#VerbPhrase+').first(); //this should be much smarter
  let vb = verb.out('normal');
  //get subj noun left-of the verb
  let subject = tmp.match('#Determiner? #Adjective+? #Noun ' + vb).first().not('#VerbPhrase');
  //get obj noun right-of the verb
  let object = tmp.match(vb + ' #Preposition? #Determiner? #Noun').first().not('#VerbPhrase');
  s.conditions = conditions;
  s.subject = subject;
  s.verb = verb;
  s.object = object;
  if (s.verb.found) {
    s.verb = new Verb(s.verb.list[0].terms, s.world, s.refText, s.refTerms);
  }
  return s;
};

const fixContraction = function(contr) {
  if (contr.found) {
    contr.contractions().expand();
  }
};

const killContraction = function(s) {
  s.terms = s.terms.filter(t => {
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
};

//if the subject of thr sentence is plural, use infinitive form of verb
// (he goes / i go)
const useInfinitive = function(s) {
  if (s.subject.found && s.subject.has('(i|we)')) {
    return true;
  }
  return false;
};

const methods = {
  /** inflect the main/first noun*/
  toSingular: function() {
    let nouns = this.match('#Noun').match('!#Pronoun').firstTerm();
    nouns.things().toSingular();
    return this;
  },
  toPlural: function() {
    let nouns = this.match('#Noun').match('!#Pronoun').firstTerm();
    nouns.things().toPlural();
    return this;
  },

  /** find the first important verbPhrase. returns a Term object */
  mainVerb: function() {
    parse(this); //re-parse
    if (this.verb.found) {
      return this.verb;
    }
    return null;
  },

  /** sentence tense conversion**/
  toPastTense: function() {
    let verb = this.mainVerb();
    if (verb) {
      //this is really ugly..
      let start = verb.out('root');
      verb.toPastTense();
      //support "i'm going"
      let contr = this.match('#Contraction ' + start);
      fixContraction(contr);
      let end = verb.out('root');
      // this.replace(start, end)
      let r = this.parentTerms.replace(start, end);
      return r;
    }
    return this;
  },
  toPresentTense: function() {
    let verb = this.mainVerb();
    if (verb) {
      let start = verb.out('normal');
      //plural/singular stuff
      if (useInfinitive(this) === true) {
        if (this.has('(am|will|did) ' + start)) {
          killContraction(this);
        }
        verb.toInfinitive();
      //irregular "i am"
      // this.debug();
      // if (this.has('i #Adverb? is')) {
      //   this.replace(' #Adverb? [is]', 'am');
      // }
      } else {
        verb.toPresentTense();
        let contr = this.match('#Contraction ' + start);
        fixContraction(contr);
      }
      //support "i'm going"
      let end = verb.out('normal');
      return this.parentTerms.replace(start, end);
    }
    return this;
  },
  toFutureTense: function() {
    let verb = this.mainVerb();
    if (verb) {
      let start = verb.clone(); //.out('root');
      verb.toFutureTense();
      //support "i'm going"
      let contr = this.match('#Contraction ' + start.out('normal'));
      fixContraction(contr);
      let end = verb.out('normal');
      return this.parentTerms.replace(start, end);
    }
    return this;
  },
  toContinuous: function() {
    let verb = this.mainVerb();
    if (verb) {
      let start = verb.clone(); //.out('root');
      //'is walking' or 'are walking'?
      // let aux = 'is';
      // if (useInfinitive(this)) {
      //   aux = 'are';
      // }
      verb.toGerund();
      // verb.insertBefore(aux);
      //support "i'm going"
      let contr = this.match('#Contraction ' + start.out('normal'));
      fixContraction(contr);
      let end = verb.out('normal');
      return this.parentTerms.replace(start, end);
    }
    return this;
  },

  /** negation **/
  isNegative: function() {
    return this.match('#Negative').list.length === 1;
  },
  toNegative: function() {
    if (this.isNegative()) {
      return this;
    }
    return toNegative(this);
  },
  toPositive: function() {
    if (!this.isNegative()) {
      return this;
    }
    return toPositive(this);
  },

  /** smarter insert methods*/
  append: function(str) {
    return insert.append(this, str);
  },
  prepend: function(str) {
    return insert.prepend(this, str);
  },

  /** look for 'was _ by' patterns */
  isPassive: function() {
    return this.match('was #Adverb? #PastTense #Adverb? by').found; //haha
  }
};

const Sentence = function(arr, world, refText, refTerms) {
  Terms.call(this, arr, world, refText, refTerms);
  parse(this);
};
//Terms inheritence
Sentence.prototype = Object.create(Terms.prototype);
//add-in methods
Object.keys(methods).forEach(k => {
  Sentence.prototype[k] = methods[k];
});
module.exports = Sentence;

},{"../../paths":8,"../verbs/verb":94,"./smartInsert":55,"./toNegative":56,"./toPositive":57}],55:[function(_dereq_,module,exports){
'use strict';
const hasCapital = /^[A-Z]/;

//sticking words at the start sentence-sensitive
const prepend = (ts, str) => {
  let firstTerm = ts.terms[0];
  ts.insertAt(0, str);
  //handle titlecase of first-word
  if (hasCapital.test(firstTerm.text)) {
    //is it titlecased because it should be?
    if (firstTerm.needsTitleCase() === false) {
      firstTerm.toLowerCase();
    }
    let newTerm = ts.terms[0];
    newTerm.toTitleCase();
  }
  return ts;
};

//sticking words on end sentence-sensitive
const append = (ts, str) => {
  let endTerm = ts.terms[ts.terms.length - 1];
  //move the sentence punctuation to the end
  let punct = ts.getPunctuation();
  if (punct) {
    endTerm.killPunctuation();
  }
  ts.insertAt(ts.terms.length, str);
  let newTerm = ts.terms[ts.terms.length - 1];
  if (punct) {
    newTerm.text += punct;
  }
  //move over sentence-ending whitespace too
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
'use strict';

//these terms are nicer ways to negate a sentence
//ie. john always walks -> john always doesn't walk
const logicalNegate = {
  everyone: 'no one',
  everybody: 'nobody',
  someone: 'no one',
  somebody: 'nobody',
  // everything:"nothing",
  always: 'never'
};

//different rule for i/we/they/you + infinitive
//that is, 'i walk' -> 'i don\'t walk', not 'I not walk'
const toNegative = ts => {
  let lg = ts.match('(everyone|everybody|someone|somebody|always)').first();
  if (lg.found && logicalNegate[lg.out('normal')]) {
    let found = lg.out('normal');
    // ts = ts.replace(found, logicalNegate[found]);
    ts = ts.match(found).replaceWith(logicalNegate[found]).list[0];
    return ts.parentTerms;
  }
  //negate the main verb of the sentence
  let vb = ts.mainVerb();
  if (vb) {
    vb.toNegative();
  }
  return ts;
};
module.exports = toNegative;

},{}],57:[function(_dereq_,module,exports){
'use strict';

//ie. john never walks -> john always walks
//nobody/noone are ambiguous logically (somebody? / everybody?)
const logical = {
  'never': 'always',
  'nothing': 'everything',
};

const toPositive = (ts) => {
  let m = ts.match('(never|nothing)').first();
  if (m.found) {
    let str = m.out('normal');
    if (logical[str]) {
      ts = ts.match(str).replaceWith(logical[str], true).list[0];
      return ts.parentTerms;
    }
  }
  //otherwise just remove 'not'
  ts.delete('#Negative');
  return ts;
};
module.exports = toPositive;

},{}],58:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
const Terms = _dereq_('../../paths').Terms;

//the Terms() subset class
//this is just a wrapper around the actual Term class,
//which is buried in `ts.terms[0]`
const methods = {
  data: function() {
    return this.list.map(ts => {
      let t = ts.terms[0];
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

const find = function(r, n) {
  let list = [];
  //make a Terms Object for every Term
  r.list.forEach(ts => {
    ts.terms.forEach(t => {
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
const numOrdinal = _dereq_('./numOrdinal');
const textOrdinal = _dereq_('./textOrdinal');
const textCardinal = _dereq_('./textCardinal');
const niceNumber = _dereq_('./niceNumber');

//make all the number formats
const fmt = {
  nice: function(num) {
    return niceNumber(num);
  },
  ordinal: function(num) {
    return numOrdinal(num);
  },
  cardinal: function(num) {
    return String(num);
  },
  niceOrdinal: function(num) {
    num = numOrdinal(num);
    num = niceNumber(num);
    return num;
  },
  text: function(num) {
    return textCardinal(num).join(' ');
  },
  textOrdinal: function(num) {
    return textOrdinal(num);
  }
};
module.exports = fmt;

},{"./niceNumber":60,"./numOrdinal":61,"./textCardinal":62,"./textOrdinal":63}],60:[function(_dereq_,module,exports){
'use strict';
//put a comma or two in
const niceNumber = function (num) {
  if (!num && num !== 0) {
    return null;
  }
  num = String(num);
  let x = num.split('.');
  let x1 = x[0];
  let x2 = x.length > 1 ? '.' + x[1] : '';
  let rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
};
module.exports = niceNumber;

},{}],61:[function(_dereq_,module,exports){
'use strict';
const toString = _dereq_('./toString');

//turn a number like 5 into an ordinal like 5th
const numOrdinal = function(num) {
  if (!num && num !== 0) {
    return null;
  }
  //the teens are all 'th'
  let tens = num % 100;
  if (tens > 10 && tens < 20) {
    return String(num) + 'th';
  }
  //the rest of 'em
  const mapping = {
    0: 'th',
    1: 'st',
    2: 'nd',
    3: 'rd'
  };
  let str = toString(num);
  let last = str.slice(str.length - 1, str.length);
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
const toString = _dereq_('./toString');

// turns an integer/float into a textual number, like 'fifty-five'
const tens_mapping = [
  ['ninety', 90],
  ['eighty', 80],
  ['seventy', 70],
  ['sixty', 60],
  ['fifty', 50],
  ['forty', 40],
  ['thirty', 30],
  ['twenty', 20]
];
const ones_mapping = [
  '',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen'
];

const sequence = [
  [1e24, 'septillion'],
  [1e21, 'sextillion'],
  [1e18, 'quintillion'],
  [1e15, 'quadrillion'],
  [1e12, 'trillion'],
  [1e9, 'billion'],
  [1e8, 'hundred million'],
  [1e6, 'million'],
  [100000, 'hundred thousand'],
  [1000, 'thousand'],
  [100, 'hundred'],
  [1, 'one']
];

//turn number into an array of magnitudes, like [[5, million], [2, hundred]]
const breakdown_magnitudes = function(num) {
  let working = num;
  let have = [];
  sequence.forEach((a) => {
    if (num >= a[0]) {
      let howmany = Math.floor(working / a[0]);
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
};

//turn numbers from 100-0 into their text
const breakdown_hundred = function(num) {
  let arr = [];
  if (num > 100) {
    return arr; //something bad happened..
  }
  for (let i = 0; i < tens_mapping.length; i++) {
    if (num >= tens_mapping[i][1]) {
      num -= tens_mapping[i][1];
      arr.push(tens_mapping[i][0]);
    }
  }
  //(hopefully) we should only have 20-0 now
  if (ones_mapping[num]) {
    arr.push(ones_mapping[num]);
  }
  return arr;
};

/** print-out 'point eight nine'*/
const handle_decimal = (num) => {
  const names = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
  ];
  let arr = [];
  //parse it out like a string, because js math is such shit
  let str = toString(num);
  let decimal = str.match(/\.([0-9]+)/);
  if (!decimal || !decimal[0]) {
    return arr;
  }
  arr.push('point');
  let decimals = decimal[0].split('');
  for (let i = 0; i < decimals.length; i++) {
    arr.push(names[decimals[i]]);
  }
  return arr;
};

/** turns an integer into a textual number */
const to_text = function(num) {
  //big numbers, north of sextillion, aren't gonna work well..
  //keep them small..
  if (num > 1e21) {
    return [String(num)];
  }
  let arr = [];
  //handle negative numbers
  if (num < 0) {
    arr.push('negative');
    num = Math.abs(num);
  }
  //break-down into units, counts
  let units = breakdown_magnitudes(num);
  //build-up the string from its components
  for (let i = 0; i < units.length; i++) {
    let unit_name = units[i].unit;
    if (unit_name === 'one') {
      unit_name = '';
      //put an 'and' in here
      if (arr.length > 1) {
        arr.push('and');
      }
    }
    arr = arr.concat(breakdown_hundred(units[i].count));
    arr.push(unit_name);
  }
  //also support decimals - 'point eight'
  arr = arr.concat(handle_decimal(num));
  //remove empties
  arr = arr.filter((s) => s);
  if (arr.length === 0) {
    arr[0] = '';
  }
  return arr;
};

module.exports = to_text;

// console.log(to_text(-1000.8));

},{"./toString":64}],63:[function(_dereq_,module,exports){
'use strict';
const textValue = _dereq_('./textCardinal');
const ordinalWord = _dereq_('../../../world/more-data/numbers').toOrdinal;
//
const textOrdinal = num => {
  let words = textValue(num);
  //convert the last number to an ordinal
  let last = words[words.length - 1];
  words[words.length - 1] = ordinalWord[last] || last;
  return words.join(' ');
};

module.exports = textOrdinal;

},{"../../../world/more-data/numbers":220,"./textCardinal":62}],64:[function(_dereq_,module,exports){
//turn big numbers, like 2.3e+22, into a tonne of 0's
const numToString = function(n) {
  if (n < 1000000) {
    return String(n);
  }
  var str = n.toFixed(0);
  if (str.indexOf('e+') === -1) {
    return str;
  }
  return str.replace('.', '').split('e+').reduce(function(p, b) {
    return p + Array(b - p.length + 2).join(0);
  });
};
module.exports = numToString;
// console.log(numToString(2.5e+22));

},{}],65:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
const Value = _dereq_('./value');
const parse = _dereq_('./parse');

//the Values() subset class
const methods = {
  noDates: function() {
    return this.not('#Date');
  },
  noUnits: function() {
    return this.not('#Unit');
  },
  units: function() {
    return this.match('#Unit+');
  },
  /** five -> 5 */
  numbers: function() {
    return this.list.map(ts => {
      return ts.number();
    });
  },
  /** five -> '5' */
  toNumber: function() {
    this.list = this.list.map(ts => {
      return ts.toNumber();
    });
    return this;
  },
  /**5 -> 'five' */
  toText: function() {
    this.list = this.list.map(ts => {
      return ts.toText();
    });
    return this;
  },
  /**5th -> 5 */
  toCardinal: function() {
    this.list = this.list.map(ts => {
      return ts.toCardinal();
    });
    return this;
  },
  /**5 -> 5th */
  toOrdinal: function() {
    this.list = this.list.map(ts => {
      return ts.toOrdinal();
    });
    return this;
  },
  /**5900 -> 5,900 */
  toNice: function() {
    this.list = this.list.map(ts => {
      return ts.toNice();
    });
    return this;
  },
  /**seven === 7th */
  isEqual: function(num) {
    num = parse(num);
    this.list = this.list.filter(ts => {
      return num !== null && ts.number() === num;
    });
    return this;
  },
  /**eight > 7th */
  greaterThan: function(num) {
    num = parse(num);
    this.list = this.list.filter(ts => {
      return num !== null && ts.number() > num;
    });
    return this;
  },
  /**five < 7th */
  lessThan: function(num) {
    num = parse(num);
    this.list = this.list.filter(ts => {
      return num !== null && ts.number() < num;
    });
    return this;
  },
  between: function(min, max) {
    if (min === undefined || max === undefined) {
      return this;
    }
    min = parse(min);
    max = parse(max);
    this.list = this.list.filter(ts => {
      let n = ts.number();
      return n > min && n < max;
    });
    return this;
  },
  /**seven + 2 = 'nine' */
  add: function(n) {
    this.list = this.list.map(ts => {
      return ts.add(n);
    });
    return this;
  },
  /**seven - 2 = 'five' */
  subtract: function(n) {
    this.list = this.list.map(ts => {
      return ts.subtract(n);
    });
    return this;
  },
  /**seven -> 'eight' */
  increment: function() {
    this.list = this.list.map(ts => {
      return ts.add(1);
    });
    return this;
  },
  /**seven -> 'eight' */
  decrement: function() {
    this.list = this.list.map(ts => {
      return ts.subtract(1);
    });
    return this;
  }
};

const find = function(r, n) {
  const tens = 'twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|fourty';
  const teens = 'eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen';
  r = r.match('#Value+ #Unit?');
  // r = r.match('#Value+ #Unit?');

  //"50 83"
  if (r.has('#NumericValue #NumericValue')) {
    //a comma may mean two numbers
    if (r.has('#Value #Comma #Value')) {
      r.splitAfter('#Comma');
    } else {
      r.splitAfter('#NumericValue');
    }
  }
  //three-length
  if (r.has('#Value #Value #Value') && !r.has('#Multiple')) {
    //twenty-five-twenty
    if (r.has('(' + tens + ') #Cardinal #Cardinal')) {
      r.splitAfter('(' + tens + ') #Cardinal');
    }
  }

  //two-length ones
  if (r.has('#Value #Value')) {
    //june 21st 1992 is two seperate values
    if (r.has('#NumericValue #NumericValue')) {
      r.splitOn('#Year');
    }
    //sixty fifteen
    if (r.has('(' + tens + ') (' + teens + ')')) {
      r.splitAfter('(' + tens + ')');
    }
    //"72 82"
    let double = r.match('#Cardinal #Cardinal');
    if (double.found && !r.has('(point|decimal)')) {
      //not 'two hundred'
      if (!double.has('#Cardinal (#Multiple|point|decimal)')) {
        //one proper way, 'twenty one', or 'hundred one'
        if (!double.has('(' + tens + ') #Cardinal') && !double.has('#Multiple #Value')) {
          r.splitAfter(double.terms(0).out('normal'));
        }
      }
    }
    //seventh fifth
    if (r.match('#Ordinal #Ordinal').match('#TextValue').found && !r.has('#Multiple')) {
      //the one proper way, 'twenty first'
      if (!r.has('(' + tens + ') #Ordinal')) {
        r.splitAfter('#Ordinal');
      }
    }
    //fifth five
    if (r.has('#Ordinal #Cardinal')) {
      r.splitBefore('#Cardinal+');
    }
    //five 2017 (support '5 hundred', and 'twenty 5'
    if (
      r.has('#TextValue #NumericValue') &&
      !r.has('(' + tens + '|#Multiple)')
    ) {
      r.splitBefore('#NumericValue+');
    }
  }
  //5-8
  if (r.has('#NumberRange')) {
    r.splitAfter('#NumberRange');
  }
  if (typeof n === 'number') {
    r = r.get(n);
  }
  let world = r.world();
  r.list = r.list.map(ts => {
    return new Value(ts.terms, world, ts.refText, ts.refTerms);
  });
  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./parse":66,"./value":74}],66:[function(_dereq_,module,exports){
'use strict';
const parseText = _dereq_('./parseText');
// 2.5, $5.50, 3,432, etc -
const numeric = /^-?(\$|€|¥|£)?\.?[0-9]+[0-9,\.]*(st|nd|rd|th|rth|%)?$/;

const parseString = function(str) {
  if (numeric.test(str) === true) {
    //clean up a number, like '$4,342.00'
    str = str.replace(/,/g, '');
    str = str.replace(/^[\$|€|¥|£]/g, '');
    str = str.replace(/%$/, '');
    str = str.replace(/(st|nd|rd|th|rth)$/g, '');
    let num = parseFloat(str);
    if (num || num === 0) {
      return num;
    }
  }
  return parseText(str);
};

//turn it all into a number
const parse = function(val) {
  if (val === null || val === undefined || typeof val === 'number') {
    return val;
  }
  if (typeof val === 'string') {
    return parseString(val);
  }
  //numerical values can only be one term
  if (val.terms.length === 1 && val.terms[0].tags.TextValue !== true) {
    let str = val.terms[0].normal;
    return parseString(str);
  }
  return parseText(val.out('normal'));
};
module.exports = parse;

},{"./parseText":69}],67:[function(_dereq_,module,exports){
const numbers = _dereq_('../../../world/more-data/numbers');
const fns = _dereq_('../paths').fns;

//setup number-word data
const ones = fns.extend(numbers.ordinal.ones, numbers.cardinal.ones);
const teens = fns.extend(numbers.ordinal.teens, numbers.cardinal.teens);
const tens = fns.extend(numbers.ordinal.tens, numbers.cardinal.tens);
const multiples = fns.extend(numbers.ordinal.multiples, numbers.cardinal.multiples);

//add this one
multiples.grand = 1000;

module.exports = {
  ones: ones,
  teens: teens,
  tens: tens,
  multiples: multiples
};

},{"../../../world/more-data/numbers":220,"../paths":73}],68:[function(_dereq_,module,exports){
'use strict';

//support global multipliers, like 'half-million' by doing 'million' then multiplying by 0.5
const findModifiers = str => {
  const mults = [
    {
      reg: /^(minus|negative)[\s\-]/i,
      mult: -1
    },
    {
      reg: /^(a\s)?half[\s\-](of\s)?/i,
      mult: 0.5
    }
    //  {
    //   reg: /^(a\s)?quarter[\s\-]/i,
    //   mult: 0.25
    // }
  ];
  for (let i = 0; i < mults.length; i++) {
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
const findModifiers = _dereq_('./findModifiers');
const words = _dereq_('./data');
const isValid = _dereq_('./validate');
const parseDecimals = _dereq_('./parseDecimals');
const parseNumeric = _dereq_('./parseNumeric');
const improperFraction = /^([0-9,\. ]+)\/([0-9,\. ]+)$/;

//some numbers we know
const casualForms = {
  // 'a few': 3,
  'a couple': 2,
  'a dozen': 12,
  'two dozen': 24,
  zero: 0
};

// a 'section' is something like 'fifty-nine thousand'
// turn a section into something we can add to - like 59000
const section_sum = obj => {
  return Object.keys(obj).reduce((sum, k) => {
    sum += obj[k];
    return sum;
  }, 0);
};

//turn a string into a number
const parse = function(str) {
  //convert some known-numbers
  if (casualForms.hasOwnProperty(str) === true) {
    return casualForms[str];
  }
  //'a/an' is 1
  if (str === 'a' || str === 'an') {
    return 1;
  }
  const modifier = findModifiers(str);
  str = modifier.str;
  let last_mult = null;
  let has = {};
  let sum = 0;
  let isNegative = false;
  const terms = str.split(/[ -]/);
  for (let i = 0; i < terms.length; i++) {
    let w = terms[i];
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
    }
    //decimal mode
    if (w === 'point') {
      sum += section_sum(has);
      sum += parseDecimals(terms.slice(i + 1, terms.length));
      sum *= modifier.amount;
      return sum;
    }
    //improper fraction
    const fm = w.match(improperFraction);
    if (fm) {
      const num = parseFloat(fm[1].replace(/[, ]/g, ''));
      const denom = parseFloat(fm[2].replace(/[, ]/g, ''));
      if (denom) {
        sum += num / denom || 0;
      }
      continue;
    }
    //prevent mismatched units, like 'seven eleven'
    if (isValid(w, has) === false) {
      return null;
    }
    //buildOut section, collect 'has' values
    if (/^[0-9\.]+$/.test(w)) {
      has['ones'] = parseFloat(w); //not technically right
    } else if (words.ones.hasOwnProperty(w) === true) {
      has['ones'] = words.ones[w];
    } else if (words.teens.hasOwnProperty(w) === true) {
      has['teens'] = words.teens[w];
    } else if (words.tens.hasOwnProperty(w) === true) {
      has['tens'] = words.tens[w];
    } else if (words.multiples.hasOwnProperty(w) === true) {
      let mult = words.multiples[w];

      //something has gone wrong : 'two hundred five hundred'
      if (mult === last_mult) {
        return null;
      }
      //support 'hundred thousand'
      //this one is tricky..
      if (mult === 100 && terms[i + 1] !== undefined) {
        // has['hundreds']=
        const w2 = terms[i + 1];
        if (words.multiples[w2]) {
          mult *= words.multiples[w2]; //hundredThousand/hundredMillion
          i += 1;
        }
      }
      //natural order of things
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
  }
  //dump the remaining has values
  sum += section_sum(has);
  //post-process add modifier
  sum *= modifier.amount;
  sum *= isNegative ? -1 : 1;
  //dont return 0, if it went straight-through
  if (sum === 0 && Object.keys(has).length === 0) {
    return null;
  }
  return sum;
};

module.exports = parse;

},{"./data":67,"./findModifiers":68,"./parseDecimals":70,"./parseNumeric":71,"./validate":72}],70:[function(_dereq_,module,exports){
'use strict';
const words = _dereq_('./data');

//concatenate into a string with leading '0.'
const parseDecimals = function(arr) {
  let str = '0.';
  for (let i = 0; i < arr.length; i++) {
    let w = arr[i];
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
'use strict';
//parse a string like "4,200.1" into Number 4200.1
const parseNumeric = str => {
  //remove ordinal - 'th/rd'
  str = str.replace(/1st$/, '1');
  str = str.replace(/2nd$/, '2');
  str = str.replace(/3rd$/, '3');
  str = str.replace(/([4567890])r?th$/, '$1');
  //remove prefixes
  str = str.replace(/^[$€¥£¢]/, '');
  //remove suffixes
  str = str.replace(/[%$€¥£¢]$/, '');
  //remove commas
  str = str.replace(/,/g, '');
  //split '5kg' from '5'
  str = str.replace(/([0-9])([a-z]{1,2})$/, '$1');
  return str;
};

module.exports = parseNumeric;

},{}],72:[function(_dereq_,module,exports){
'use strict';
const words = _dereq_('./data');

//prevent things like 'fifteen ten', and 'five sixty'
const isValid = (w, has) => {
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
module.exports = _dereq_('../../paths');

},{"../../paths":8}],74:[function(_dereq_,module,exports){
'use strict';
const paths = _dereq_('../../paths');
const Terms = paths.Terms;
const parse = _dereq_('./parse');
const fmt = _dereq_('./format');

// const unpackRange = function(ts) {
//   if (ts.has('#NumberRange')) {
//     ts.terms.forEach(t => {
//       if (t.silent_term && !t._text) {
//         t.text = t.silent_term;
//       }
//     });
//   }
//   return ts;
// };

const parseValue = function(ts) {
  ts.val = ts.match('#Value+');
  // ts.val = unpackRange(ts.val);
  ts.val = ts.val.list[0];
  ts.unit = ts.match('#Unit+');
  if (ts.unit.found) {
    ts.unit = ts.unit.list[0];
  }
  return ts;
};

const isPercent = function(val, unit) {
  //pre-tagged
  if (val.has('#Percent') || unit.has('#Percent')) {
    return true;
  }
  // 'five percent'
  if (unit.out('normal') === 'percent') {
    return true;
  }
  //'5%'
  if (val.out('normal').match(/%$/) !== null) {
    return true;
  }
  return false;
};

//set the text as the same num format
const setNumber = function(ts, num) {
  let str = ts.val.out();
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
  }
  //add the unit at the end
  if (ts.unit.found) {
    str += ts.unit.out('text');
  }
  ts = ts.replaceWith(str, true);
  return parseValue(ts);
};

const Value = function(arr, world, refText, refTerms) {
  Terms.call(this, arr, world, refText, refTerms);
  parseValue(this);
};

//Terms inheritence
Value.prototype = Object.create(Terms.prototype);

const methods = {
  data: function() {
    let num = parse(this.val);
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
  number: function() {
    return parse(this.val);
  },
  // /** five -> '5' */
  toNumber: function() {
    let num = parse(this.val);
    if (num || num === 0) {
      let str = '';
      if (this.val.has('#Ordinal')) {
        str = fmt.ordinal(num);
      } else {
        str = String(num);
        //convert 'five percent' -> '5%'
        if (isPercent(this.val, this.unit)) {
          str = str + '%';
          this.unit.delete();
        }
      }
      // let before = this.terms[0].whitespace.before;
      // let after = this.terms[this.terms.length - 1].whitespace.after;
      if (this.unit.found) {
        str = str + this.unit.out('text');
      }
      this.replaceWith(str, true).tag('NumericValue');
      //make sure unit gets the right tag..
      if (this.unit.found) {
        this.match(this.unit.out('normal')).tag('Unit');
      }
    // this.whitespace.before(before);
    // this.whitespace.after(after);
    }
    return this;
  },
  // /**5 -> 'five' */
  toText: function() {
    let num = parse(this.val);
    if (num || num === 0) {
      let str = '';
      if (this.val.has('#Ordinal')) {
        str = fmt.textOrdinal(num);
      } else {
        str = fmt.text(num);
        //add percent
        if (isPercent(this.val, this.unit)) {
          str = str + ' percent';
        }
      }
      if (this.unit.found) {
        str = str + this.unit.out('text');
      }
      this.replaceWith(str, true).tag('TextValue');
      //make sure unit gets the right tag..
      if (this.unit.found) {
        this.match(this.unit.out('normal')).tag('Unit');
      }
    }
    return this;
  },
  //
  // /**5th -> 5 */
  toCardinal: function() {
    let num = parse(this.val);
    if (num || num === 0) {
      let str = '';
      if (this.val.has('#TextValue')) {
        str = fmt.text(num);
      } else {
        str = num;
      }
      if (this.unit.found) {
        str = str + this.unit.out('text');
      }
      this.replaceWith(str, true).tag('Cardinal');
      //make sure unit gets the right tag..
      if (this.unit.found) {
        this.match(this.unit.out('normal')).tag('Unit');
      }
    }
    return this;
  },
  //
  // /**5 -> 5th */
  toOrdinal: function() {
    let num = parse(this.val);
    if (num || num === 0) {
      let str = '';
      if (this.val.has('#TextValue')) {
        str = fmt.textOrdinal(num);
      } else {
        str = fmt.ordinal(num);
      }
      if (this.unit.found) {
        str = str + this.unit.out('text');
      }
      this.replaceWith(str, true).tag('Ordinal');
      //make sure unit gets the right tag..
      if (this.unit.found) {
        this.match(this.unit.out('normal')).tag('Unit');
      }
    }
    return this;
  },
  //
  // /**5900 -> 5,900 */
  toNice: function() {
    let num = parse(this.val);
    if (num || num === 0) {
      let str = '';
      if (this.val.has('#Ordinal')) {
        str = fmt.niceOrdinal(num);
      } else {
        str = fmt.nice(num);
      }
      if (this.unit.found) {
        str = str + this.unit.out('text');
      }
      this.replaceWith(str, true).tag('NumericValue');
      //make sure unit gets the right tag..
      if (this.unit.found) {
        this.match(this.unit.out('normal')).tag('Unit');
      }
    }
    return this;
  },
  /** seven + 2 = nine */
  add: function(n) {
    if (!n) {
      return this;
    }
    let num = parse(this.val) || 0;
    num += n; //add it
    return setNumber(this, num);
  },
  /** seven - 2 = five */
  subtract: function(n) {
    if (!n) {
      return this;
    }
    let num = parse(this.val) || 0;
    num -= n; //subtract it
    return setNumber(this, num);
  },
  /**seven -> 'eight' */
  increment: function() {
    return this.add(1);
  },
  /**seven -> 'six' */
  decrement: function() {
    return this.subtract(1);
  }
};

Object.keys(methods).forEach(k => {
  Value.prototype[k] = methods[k];
});
module.exports = Value;

},{"../../paths":8,"./format":59,"./parse":66}],75:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
const Verb = _dereq_('./verb');

//the () subset class
const methods = {
  conjugation: function(verbose) {
    return this.list.map(ts => {
      return ts.conjugation(verbose);
    });
  },
  conjugate: function(num, verbose) {
    //suppport only conjugating one verb in our result..
    if (num !== null && typeof num === 'number' && this.list[num]) {
      return this.list[num].conjugate(verbose);
    }
    //otherwise, return an array of conjugations
    return this.list.map(ts => {
      return ts.conjugate(verbose);
    });
  },

  /** plural/singular **/
  isPlural: function() {
    this.list = this.list.filter(ts => {
      return ts.isPlural();
    });
    return this;
  },
  isSingular: function() {
    this.list = this.list.filter(ts => {
      return !ts.isPlural();
    });
    return this;
  },

  /** negation **/
  isNegative: function() {
    this.list = this.list.filter(ts => {
      return ts.isNegative();
    });
    return this;
  },
  isPositive: function() {
    this.list = this.list.filter(ts => {
      return !ts.isNegative();
    });
    return this;
  },
  toNegative: function() {
    this.list = this.list.map(ts => {
      return ts.toNegative();
    });
    return this;
  },
  toPositive: function() {
    this.list.forEach(ts => {
      ts.toPositive();
    });
    return this;
  },

  /** tense **/
  toPastTense: function() {
    this.list.forEach(ts => {
      ts.toPastTense();
    });
    return this;
  },
  toPresentTense: function() {
    this.list.forEach(ts => {
      ts.toPresentTense();
    });
    return this;
  },
  toFutureTense: function() {
    this.list.forEach(ts => {
      ts.toFutureTense();
    });
    return this;
  },
  toInfinitive: function() {
    this.list.forEach(ts => {
      ts.toInfinitive();
    });
    return this;
  },
  toGerund: function() {
    this.list.forEach(ts => {
      ts.toGerund();
    });
    return this;
  },
  asAdjective: function() {
    return this.list.map(ts => ts.asAdjective());
  }
};
//aliases
methods.toContinuous = methods.toGerund;

const find = function(r, n) {
  r = r.match('(#Adverb|#Auxiliary|#Verb|#Negative|#Particle)+');
  r = r.splitAfter('#Comma');
  r = r.if('#Verb'); //this should be (much) smarter
  if (typeof n === 'number') {
    r = r.get(n);
  }
  r.list = r.list.map(ts => {
    return new Verb(ts.terms, ts.world, ts.refText, ts.refTerms);
  });
  return new Text(r.list, this.world, this.parent);
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./verb":94}],76:[function(_dereq_,module,exports){
'use strict';
const predict = _dereq_('./methods/predict');
const isPlural = _dereq_('./methods/isPlural');

//'walking' - aka progressive
const isContinuous = function(ts) {
  return ts.match('#Gerund').found;
};

//will not walk
const isNegative = function(ts) {
  let negs = ts.match('#Negative').list;
  if (negs.length === 2) {
    return false;
  }
  if (negs.length === 1) {
    return true;
  }
  return false;
};

//been walked by..
const isPassive = function(ts) {
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
};

//had walked
const isPerfect = function(ts) {
  if (ts.match('^(had|have) #PastTense')) {
    return true;
  }
  return false;
};

//should walk, could walk
const getModal = function(ts) {
  let modal = ts.match('#Modal');
  if (!modal.found) {
    return null;
  }
  return modal.out('normal');
};

//past/present/future
const getTense = function(ts) {
  //look at the preceding words
  if (ts.auxiliary.found) {
    //'will'
    if (ts.match('will have #PastTense').found) {
      return 'Past';
    }
    if (ts.auxiliary.match('will').found) {
      return 'Future';
    }
    //'was'
    if (ts.auxiliary.match('was').found) {
      return 'Past';
    }
  }
  //look at the main verb tense
  if (ts.verb) {
    const tenses = {
      PastTense: 'Past',
      FutureTense: 'Future',
      FuturePerfect: 'Future',
    };
    let tense = predict(ts.verb); //yikes
    return tenses[tense] || 'Present';
  }
  return 'Present';
};

// const isImperative = function(ts) {};
// const isConditional = function(ts) {};

// detect signals in Auxiliary verbs
// 'will' -> future, 'have'->perfect, modals, negatives, adverbs
const interpret = (ts) => {
  let isNeg = isNegative(ts);
  // let aux = ts.Auxiliary.clone();
  // aux = aux.not('(#Negative|#Adverb)');
  let obj = {
    negative: isNeg,
    continuous: isContinuous(ts),
    passive: isPassive(ts),
    perfect: isPerfect(ts),
    plural: isPlural(ts),
    modal: getModal(ts),
    tense: getTense(ts),
  };
  return obj;
};
module.exports = interpret;

},{"./methods/isPlural":86,"./methods/predict":87}],77:[function(_dereq_,module,exports){
'use strict';
const checkIrregulars = _dereq_('./irregulars');
const suffixPass = _dereq_('./suffixes');
const toActor = _dereq_('./toActor');
const generic = _dereq_('./generic');
const predict = _dereq_('../predict');
const toInfinitive = _dereq_('../toInfinitive');
const toBe = _dereq_('./toBe');

//turn a verb into all it's forms
const conjugate = function(t, world) {
  //handle is/was/will-be specially
  if (t.normal === 'is' || t.normal === 'was' || t.normal === 'will') {
    return toBe();
  }

  //dont conjugate didn't
  if (t.tags.Contraction) {
    t.text = t.silent_term;
  }
  let all = {
    PastTense: null,
    PresentTense: null,
    Infinitive: null,
    Gerund: null,
    Actor: null
  };
  //first, get its current form
  let form = predict(t);
  if (form) {
    all[form] = t.normal;
  }
  if (form !== 'Infinitive') {
    all['Infinitive'] = toInfinitive(t, world) || '';
  }
  //check irregular forms
  const irregObj = checkIrregulars(all['Infinitive'], world) || {};
  Object.keys(irregObj).forEach(k => {
    if (irregObj[k] && !all[k]) {
      all[k] = irregObj[k];
    }
  });
  //ok, send this infinitive to all conjugators
  let inf = all['Infinitive'] || t.normal;

  //check suffix rules
  const suffObj = suffixPass(inf);
  Object.keys(suffObj).forEach(k => {
    if (suffObj[k] && !all[k]) {
      all[k] = suffObj[k];
    }
  });
  //ad-hoc each missing form
  //to Actor
  if (!all.Actor) {
    all.Actor = toActor(inf);
  }

  //use fallback, generic transformations
  Object.keys(all).forEach(k => {
    if (!all[k] && generic[k]) {
      all[k] = generic[k](all);
    }
  });

  return all;
};

module.exports = conjugate;

},{"../predict":87,"../toInfinitive":90,"./generic":80,"./irregulars":82,"./suffixes":83,"./toActor":84,"./toBe":85}],78:[function(_dereq_,module,exports){
module.exports = [
  {
    reg: /(eave)$/i,
    repl: {
      pr: '$1s',
      pa: '$1d',
      gr: 'eaving',
      ar: '$1r'
    }
  },
  {
    reg: /(ink)$/i,
    repl: {
      pr: '$1s',
      pa: 'unk',
      gr: '$1ing',
      ar: '$1er'
    }
  },
  {
    reg: /([aeiou]k)in$/i,
    repl: {
      pr: '$1s',
      pa: '$1ed',
      gr: '$1ing',
      ar: '$1er'
    }
  },
  {
    reg: /(end)$/i,
    repl: {
      pr: '$1s',
      pa: 'ent',
      gr: '$1ing',
      ar: '$1er'
    }
  },
  {
    reg: /(ide)$/i,
    repl: {
      pr: '$1s',
      pa: 'ode',
      gr: 'iding',
      ar: 'ider'
    }
  },
  {
    reg: /(ake)$/i,
    repl: {
      pr: '$1s',
      pa: 'ook',
      gr: 'aking',
      ar: '$1r'
    }
  },
  {
    reg: /(eed)$/i,
    repl: {
      pr: '$1s',
      pa: '$1ed',
      gr: '$1ing',
      ar: '$1er'
    }
  },

  {
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
    },
  }, {
    reg: /(ed)$/i,
    repl: {
      pr: '$1s',
      pa: '$1ded',
      ar: '$1der',
      gr: '$1ding'
    },
  },
  {
    reg: /(..)(ow)$/i,
    repl: {
      pr: '$1$2s',
      pa: '$1ew',
      gr: '$1$2ing',
      prt: '$1$2n'
    }
  },
  {
    reg: /(..)([cs]h)$/i,
    repl: {
      pr: '$1$2es',
      pa: '$1$2ed',
      gr: '$1$2ing'
    },
  },
  {
    reg: /([^aeiou][ou])(g|d)$/i,
    repl: {
      pr: '$1$2s',
      pa: '$1$2$2ed',
      gr: '$1$2$2ing'
    },
  },
  {
    reg: /([^aeiou][aeiou])(b|t|p|m)$/i,
    repl: {
      pr: '$1$2s',
      pa: '$1$2$2ed',
      gr: '$1$2$2ing'
    },
  },
  {
    reg: /([aeiou]zz)$/i,
    repl: {
      pr: '$1es',
      pa: '$1ed',
      gr: '$1ing'
    }
  }
];

},{}],79:[function(_dereq_,module,exports){
'use strict';
const checkIrregulars = _dereq_('./irregulars');
const suffixPass = _dereq_('./suffixes');
const generic = _dereq_('./generic');
//this method is the same as regular conjugate, but optimised for use in the lexicon during warm-up.
//it's way faster because it knows input is already infinitive

const want = ['Gerund', 'PastTense', 'PresentTense'];

const fasterConjugate = function(inf, world) {
  let all = {
    Infinitive: inf
  };
  //check irregulars list
  if (world && world.conjugations) {
    const irregObj = checkIrregulars(all['Infinitive'], world);
    if (irregObj !== null) {
      Object.keys(irregObj).forEach(k => {
        if (irregObj[k] && !all[k]) {
          all[k] = irregObj[k];
        }
      });
    }
  }
  //check suffix rules
  const suffObj = suffixPass(inf);
  Object.keys(suffObj).forEach(k => {
    if (suffObj[k] && !all[k]) {
      all[k] = suffObj[k];
    }
  });
  for (let i = 0; i < want.length; i++) {
    if (all[want[i]] === undefined) {
      all[want[i]] = generic[want[i]](all);
    }
  }
  return all;
};
module.exports = fasterConjugate;
// console.log(fasterConjugate('repeat'));

},{"./generic":80,"./irregulars":82,"./suffixes":83}],80:[function(_dereq_,module,exports){
'use strict';
//non-specifc, 'hail-mary' transforms from infinitive, into other forms
const hasY = /[bcdfghjklmnpqrstvwxz]y$/;
const generic = {

  Gerund: (o) => {
    const inf = o.Infinitive;
    if (inf.charAt(inf.length - 1) === 'e') {
      return inf.replace(/e$/, 'ing');
    }
    return inf + 'ing';
  },

  PresentTense: (o) => {
    const inf = o.Infinitive;
    if (inf.charAt(inf.length - 1) === 's') {
      return inf + 'es';
    }
    if (hasY.test(inf) === true) {
      return inf.slice(0, -1) + 'ies';
    }
    return inf + 's';
  },

  PastTense: (o) => {
    const inf = o.Infinitive;
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
  },

  // FutureTense: (o) => {
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
const conjugate = _dereq_('./conjugate');
const toBe = _dereq_('./toBe');

const addAdverbs = function(obj, vb) {
  if (vb.adverbs.found) {
    //does the adverb go at the start or end?
    let isFirst = vb.first().match('#Adverb').found;
    Object.keys(obj).forEach(k => {
      if (isFirst) {
        obj[k] = vb.adverbs.out() + ' ' + obj[k];
      } else {
        obj[k] = obj[k] + vb.adverbs.out();
      }
    });
  }
  return obj;
};

//conjugation using auxillaries+adverbs and stuff
const multiWordConjugate = (vb, verbose) => {
  let isNegative = vb.negative.found;
  let isPlural = vb.isPlural();
  //handle 'to be' verb seperately
  if (vb.verb.tags.Copula || (vb.verb.normal === 'be' && vb.auxiliary.match('will').found)) {
    let isI = false;
    //account for 'i is' -> 'i am' irregular
    if (vb.parent && vb.parent.has('i #Adverb? #Copula')) {
      isI = true;
    }
    let copulas = toBe(isPlural, isNegative, isI);
    return addAdverbs(copulas, vb);
  }
  let obj = conjugate(vb.verb, vb.world, verbose);
  //apply particles
  if (vb.particle.found) {
    Object.keys(obj).forEach(k => {
      obj[k] = obj[k] + vb.particle.out();
    });
  }
  //apply negative
  if (isNegative) {
    obj.PastTense = 'did not ' + obj.Infinitive;
    obj.PresentTense = 'does not ' + obj.Infinitive;
    obj.Gerund = 'not ' + obj.Gerund;
  }
  //future Tense is pretty straightforward
  if (!obj.FutureTense) {
    if (isNegative) {
      obj.FutureTense = 'will not ' + obj.Infinitive;
    } else {
      obj.FutureTense = 'will ' + obj.Infinitive;
    }
  }
  //apply adverbs
  obj = addAdverbs(obj, vb);
  return obj;
};
module.exports = multiWordConjugate;

},{"./conjugate":77,"./toBe":85}],82:[function(_dereq_,module,exports){
'use strict';
// let irregulars = require('../../../../lexicon/uncompressed/irregularVerbs').irregulars; //weeee!
const fns = _dereq_('../../../../fns'); //weeee!
const forms = ['Participle', 'Gerund', 'PastTense', 'PresentTense', 'FuturePerfect', 'PerfectTense', 'Actor'];

const checkIrregulars = function(str, world) {
  const irregulars = world.conjugations;
  const infArr = Object.keys(irregulars);
  //check irregulars in world
  if (world && world.conjugations && world.conjugations.hasOwnProperty(str) === true) {
    return world.conjugations[str];
  }
  //fast infinitive lookup
  if (irregulars.hasOwnProperty(str) === true) {
    let obj = fns.copy(irregulars[str]);
    obj.Infinitive = str;
    return obj;
  }
  //longer check of known-verb forms
  for (let i = 0; i < infArr.length; i++) {
    for (let o = 0; o < forms.length; o++) {
      let irObj = irregulars[infArr[i]];
      if (irObj[forms[o]] === str) {
        let obj = fns.copy(irObj);
        obj.Infinitive = infArr[i];
        return obj;
      }
    }
  }
  return {};
};

module.exports = checkIrregulars;
// console.log(checkIrregulars('bit'));

},{"../../../../fns":3}],83:[function(_dereq_,module,exports){
'use strict';
const rules = _dereq_('./data/rules');
const mapping = {
  pr: 'PresentTense',
  pa: 'PastTense',
  gr: 'Gerund',
  prt: 'Participle',
  ar: 'Actor',
};
const keys = Object.keys(mapping);

//check suffix rules
const suffixPass = function(inf) {
  let found = {};
  for(let i = 0; i < rules.length; i++) {
    if (rules[i].reg.test(inf) === true) {
      let obj = rules[i].repl;
      for(let o = 0; o < keys.length; o++) {
        if (obj.hasOwnProperty(keys[o]) === true) {
          let key = mapping[keys[o]];
          // console.log(rules[i]);
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
'use strict';
//turn 'walk' into 'walker'
const irregulars = {
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
const dont = {
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
const rules = [{
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

const toActor = function(inf) {
  //check blacklist
  if (dont[inf]) {
    return null;
  }
  //check irregulars
  if (irregulars.hasOwnProperty(inf)) {
    return irregulars[inf];
  }
  //try rules
  for (let i = 0; i < rules.length; i++) {
    if (rules[i].reg.test(inf) === true) {
      return inf.replace(rules[i].reg, rules[i].repl);
    }
  }
  //yup,
  return inf + 'er';
};

module.exports = toActor;

},{}],85:[function(_dereq_,module,exports){
'use strict';
//too many special cases for is/was/will be
const toBe = (isPlural, isNegative, isI) => {
  let obj = {
    PastTense: 'was',
    PresentTense: 'is',
    FutureTense: 'will be',
    Infinitive: 'is',
    Gerund: 'being',
    Actor: '',
    PerfectTense: 'been',
    Pluperfect: 'been',
  };
  //"i is" -> "i am"
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
'use strict';
//sometimes you can tell if a verb is plural/singular, just by the verb
// i am / we were
//othertimes you need its noun 'we walk' vs 'i walk'
const isPlural = (vb) => {
  if (vb.match('(are|were|does)').found) {
    return true;
  }
  if (vb.match('(is|am|do|was)').found) {
    return false;
  }
  //consider its prior noun
  let noun = vb.getNoun();
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
const suffix_rules = _dereq_('./suffix_rules');

const goodTypes = {
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

const predictForm = function(term) {
  //do we already know the form?
  const keys = Object.keys(goodTypes);
  for (let i = 0; i < keys.length; i++) {
    if (term.tags[keys[i]]) {
      return keys[i];
    }
  }
  //consult our handy suffix rules
  const arr = Object.keys(suffix_rules);
  for (let i = 0; i < arr.length; i++) {
    const substr = term.normal.substr(-arr[i].length);
    if (substr === arr[i] && term.normal.length > arr[i].length) {
      return suffix_rules[arr[i]];
    }
  }
  return null;
};

module.exports = predictForm;

},{"./suffix_rules":88}],88:[function(_dereq_,module,exports){
'use strict';
//suffix signals for verb tense, generated from test data
const compact = {
  'Gerund': [
    'ing'
  ],
  'Actor': [
    'erer'
  ],
  'Infinitive': [
    'ate',
    'ize',
    'tion',
    'rify',
    'then',
    'ress',
    'ify',
    'age',
    'nce',
    'ect',
    'ise',
    'ine',
    'ish',
    'ace',
    'ash',
    'ure',
    'tch',
    'end',
    'ack',
    'and',
    'ute',
    'ade',
    'ock',
    'ite',
    'ase',
    'ose',
    'use',
    'ive',
    'int',
    'nge',
    'lay',
    'est',
    'ain',
    'ant',
    'ent',
    'eed',
    'er',
    'le',
    'own',
    'unk',
    'ung',
    'en'
  ],
  'PastTense': [
    'ed',
    'lt',
    'nt',
    'pt',
    'ew',
    'ld'
  ],
  'PresentTense': [
    'rks',
    'cks',
    'nks',
    'ngs',
    'mps',
    'tes',
    'zes',
    'ers',
    'les',
    'acks',
    'ends',
    'ands',
    'ocks',
    'lays',
    'eads',
    'lls',
    'els',
    'ils',
    'ows',
    'nds',
    'ays',
    'ams',
    'ars',
    'ops',
    'ffs',
    'als',
    'urs',
    'lds',
    'ews',
    'ips',
    'es',
    'ts',
    'ns',
    's'
  ]
};
const suffix_rules = {};
const keys = Object.keys(compact);
const l = keys.length;

for (let i = 0; i < l; i++) {
  let l2 = compact[keys[i]].length;
  for (let o = 0; o < l2; o++) {
    suffix_rules[compact[keys[i]][o]] = keys[i];
  }
}
module.exports = suffix_rules;

},{}],89:[function(_dereq_,module,exports){
'use strict';
//turn a infinitiveVerb, like "walk" into an adjective like "walkable"

const rules = [
  [/y$/, 'i'], //relay - reliable
  [/([aeiou][n])$/, '$1n'], //win - winnable
];

//convert - 'convertible'
//http://grammarist.com/usage/able-ible/
//http://blog.oxforddictionaries.com/2012/10/ibles-and-ables/
const ible_suffixes = {
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

const irregulars = {
  eat: 'edible',
  hear: 'audible',
  see: 'visible',
  defend: 'defensible',
  write: 'legible',
  move: 'movable',
  divide: 'divisible',
  perceive: 'perceptible'
};

//takes an infitive verb, and returns an adjective form
const toAdjective = function(str) {
  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  }
  for(let i = 0; i < rules.length; i++) {
    if (rules[i][0].test(str) === true) {
      str = str.replace(rules[i][0], rules[i][1]);
    }
  }
  //ible/able
  let adj = str + 'able';
  if (ible_suffixes[str]) {
    adj = str + 'ible';
  }
  return adj;
};

module.exports = toAdjective;

},{}],90:[function(_dereq_,module,exports){
'use strict';
//turn any verb into its infinitive form
const rules = _dereq_('./rules');
const predict = _dereq_('../predict');

const toInfinitive = function(t, world) {
  const irregulars = world.cache.toInfinitive || {}; //verb_mapping(world.conjugations); //TODO: do this at world cache
  if (t.tags.Infinitive) {
    return t.normal;
  }
  //check the irregular verb conjugations
  if (irregulars.hasOwnProperty(t.normal) === true) {
    return irregulars[t.normal];
  }
  //check the suffix rules
  let form = predict(t);
  if (rules[form]) {
    for (let i = 0; i < rules[form].length; i++) {
      let rule = rules[form][i];
      if (t.normal.match(rule.reg)) {
        return t.normal.replace(rule.reg, rule.to);
      }
    }
  }
  return t.normal;
};

module.exports = toInfinitive;

},{"../predict":87,"./rules":91}],91:[function(_dereq_,module,exports){
'use strict';
//rules for turning a verb into infinitive form
let rules = {
  Participle: [
    {
      reg: /own$/i,
      to: 'ow'
    },
    {
      reg: /(.)un([g|k])$/i,
      to: '$1in$2'
    }
  ],
  Actor: [
    {
      reg: /(er)er$/i,
      to: '$1'
    }
  ],
  PresentTense: [
    {
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
  Gerund: [
    {
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
  PastTense: [
    {
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
//these are contractions with a implicit verb.
const expand = function(vb) {
  vb.match('#Contraction+').list.forEach((ts) => {
    if (ts.has('#Verb')) {
      ts.terms.forEach((t) => {
        if (t.silent_term) {
          //this term also needs a space now too
          if (!t.text) {
            t.whitespace.before = ' ';
          }
          t._text = t.silent_term;
          //handle (some) capitalization
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
'use strict';
//turns a verb negative - may not have enough information to do it properly
// (eg 'did not eat' vs 'does not eat') - needs the noun
const toInfinitive = _dereq_('./methods/toInfinitive');

//this methods operate on parentTerms, so return subset
const getVerb = function(ts) {
  ts = ts.match('(#Adverb|#Auxiliary|#Verb|#Negative|#Particle)+');
  ts = ts.splitAfter('#Comma');
  return ts.list[0];
};

const toNegative = ts => {
  //would not walk
  let modal = ts.match('#Auxiliary').first(); //.notIf('(is|are|was|will|has|had)').first(); //.first();
  if (modal.found) {
    let index = modal.list[0].index();
    let vb = ts.parentTerms.insertAt(index + 1, 'not', 'Verb');
    vb.match('not').tag('Negative', 'tag-not');
    return getVerb(vb);
  }

  //words that pair easily with a 'not' - 'is not'
  let copula = ts.match('(#Copula|will|has|had|do)').first();
  if (copula.found) {
    let index = copula.list[0].index();
    let vb = ts.parentTerms.insertAt(index + 1, 'not', 'Verb');
    vb.match('not').tag('Negative', 'tag-not');
    return getVerb(vb);
  }

  let isPlural = ts.isPlural();

  //walked -> did not walk
  let past = ts.match('#PastTense').last();
  if (past.found) {
    // past.debug();
    let first = past.list[0];
    let index = first.index();
    first.terms[0].text = toInfinitive(first.terms[0], ts.world);
    let vb = ts.parentTerms.insertAt(index, 'did not', 'Verb');
    //add 'do not'?
    vb.match('not').tag('Negative', 'tag-not');
    return getVerb(vb);
  }

  //walks -> does not walk
  let pres = ts.match('#PresentTense').first();
  if (pres.found) {
    let first = pres.list[0];
    let index = first.index();
    first.terms[0].text = toInfinitive(first.terms[0], ts.world);
    //some things use 'do not', everything else is 'does not'
    let noun = ts.getNoun();
    let vb = null;
    if (noun.match('(i|we|they|you)').found) {
      vb = ts.parentTerms.insertAt(index, 'do not', 'Verb');
    } else {
      vb = ts.parentTerms.insertAt(index, 'does not', 'Verb');
    }
    vb.match('not').tag('Negative', 'tag-not');
    return getVerb(vb);
  }

  //not walking
  let gerund = ts.match('#Gerund').last();
  if (gerund.found) {
    let index = gerund.list[0].index();
    let vb = ts.parentTerms.insertAt(index, 'not', 'Verb');
    vb.match('not').tag('Negative', 'tag-not');
    return getVerb(vb);
  }

  //walk -> do not walk
  let verb = ts.match('#Verb').last();
  if (verb.found) {
    let first = verb.list[0];
    let index = first.index();
    first.terms[0].text = toInfinitive(first.terms[0], ts.world);
    let vb = ts;
    if (isPlural) {
      vb = ts.parentTerms.insertAt(index - 1, 'do not', 'Verb');
    } else {
      vb = ts.parentTerms.insertAt(index - 1, 'does not', 'Verb');
    }
    vb.match('not').tag('Negative', 'tag-not');
    return getVerb(vb);
  }

  return ts;
};
module.exports = toNegative;

},{"./methods/toInfinitive":90}],94:[function(_dereq_,module,exports){
'use strict';
const Terms = _dereq_('../../paths').Terms;
const conjugate = _dereq_('./methods/conjugate');
const toAdjective = _dereq_('./methods/toAdjective');
const interpret = _dereq_('./interpret');
const toNegative = _dereq_('./toNegative');
const isPlural = _dereq_('./methods/isPlural');
const expand = _dereq_('./methods/verbContraction');

const parse = function(r) {
  let original = r;
  r.negative = r.match('#Negative');
  r.adverbs = r.match('#Adverb');
  let aux = r.clone().not('(#Adverb|#Negative)');
  r.verb = aux
    .match('#Verb')
    .not('#Particle')
    .last();
  r.particle = aux.match('#Particle').last();
  if (r.verb.found) {
    let str = r.verb.out('normal');
    r.auxiliary = original.not(str).not('(#Adverb|#Negative)');
    r.verb = r.verb.list[0].terms[0];
  // r.auxiliary = aux.match('#Auxiliary+');
  } else {
    r.verb = original.terms[0];
    r.auxiliary = aux.not('.');
  }
  return r;
};

const methods = {
  parse: function() {
    return parse(this);
  },
  data: function(verbose) {
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
  getNoun: function() {
    if (!this.refTerms) {
      return null;
    }
    let str = '#Adjective? #Noun+ ' + this.out('normal');
    return this.refTerms.match(str).match('#Noun+');
  },
  //which conjugation is this right now?
  conjugation: function() {
    return interpret(this, false).tense;
  },
  //blast-out all forms
  conjugate: function(verbose) {
    return conjugate(this, verbose);
  },

  isPlural: function() {
    return isPlural(this);
  },
  /** negation **/
  isNegative: function() {
    return this.match('#Negative').list.length === 1;
  },
  isPerfect: function() {
    return this.auxiliary.match('(have|had)').found;
  },
  toNegative: function() {
    if (this.isNegative()) {
      return this;
    }
    return toNegative(this);
  },
  toPositive: function() {
    return this.match('#Negative').delete();
  },

  /** conjugation **/
  toPastTense: function() {
    if (this.has('#Contraction')) {
      this.list = expand(this.parentTerms).list;
    }
    let obj = this.conjugate();
    let end = obj.PastTense;
    let r = this.replaceWith(end, false);
    r.verb.tag('#PastTense');
    return r;
  },
  toPresentTense: function() {
    if (this.has('#Contraction')) {
      expand(this.parentTerms);
    }
    let obj = this.conjugate();
    let r = this.replaceWith(obj.PresentTense, false);
    r.verb.tag('#PresentTense');
    return r;
  },
  toFutureTense: function() {
    if (this.has('#Contraction')) {
      expand(this.parentTerms);
    }
    let obj = this.conjugate();
    let r = this.replaceWith(obj.FutureTense, false);
    r.verb.tag('#FutureTense');
    return r;
  },
  toInfinitive: function() {
    if (this.has('#Contraction')) {
      expand(this.parentTerms);
    }
    let obj = this.conjugate();
    let r = this.replaceWith(obj.Infinitive, false);
    r.verb.tag('#Infinitive');
    return r;
  },
  toGerund: function() {
    if (this.has('#Contraction')) {
      expand(this.parentTerms);
    }
    let obj = this.conjugate();
    let aux = 'is';
    //support 'i am', 'we are', 'he is'
    let noun = this.getNoun().out('normal');
    if (noun) {
      let auxList = {
        i: 'am',
        we: 'are',
        they: 'are',
      };
      if (auxList.hasOwnProperty(noun)) {
        aux = auxList[noun];
      }
    }
    let end = aux + ' ' + obj.Gerund;
    //i would go -> i would have be going
    // if (this.auxiliary && this.auxiliary.has('#Modal') && !this.auxiliary.has('will')) {
    //   end = this.auxiliary.match('#Modal').out() + ' have ' + end;
    // }
    let r = this.replaceWith(end, false);
    r.verb.tag('#Gerund');
    return r;
  },
  asAdjective: function() {
    return toAdjective(this.verb.out('normal'));
  }
};

const Verb = function(arr, world, refText, parentTerms) {
  Terms.call(this, arr, world, refText, parentTerms);
  //basic verb-phrase parsing:
  return parse(this);
};
//Terms inheritence
Verb.prototype = Object.create(Terms.prototype);
//apply methods
Object.keys(methods).forEach(k => {
  Verb.prototype[k] = methods[k];
});
module.exports = Verb;

},{"../../paths":8,"./interpret":76,"./methods/conjugate":81,"./methods/isPlural":86,"./methods/toAdjective":89,"./methods/verbContraction":92,"./toNegative":93}],95:[function(_dereq_,module,exports){
'use strict';
//the steps and processes of pos-tagging
const step = {
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
  custom: _dereq_('./steps/25-custom'),
};
const tagPhrase = _dereq_('./phrase');

const tagger = function(ts) {
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
'use strict';

//
const conditionPass = function(ts) {
  //'if it really goes, I will..'
  let m = ts.match('#Condition .{1,7} #ClauseEnd');
  //make sure it ends on a comma
  if (m.found && m.match('#Comma$')) {
    m.tag('Condition');
  }
  //'go a bit further, if it then has a pronoun
  m = ts.match('#Condition .{1,13} #ClauseEnd #Pronoun');
  if (m.found && m.match('#Comma$')) {
    m.not('#Pronoun$').tag('Condition', 'end-pronoun');
  }
  //if it goes then ..
  m = ts.match('#Condition .{1,7} then');
  if (m.found) {
    m.not('then$').tag('Condition', 'cond-then');
  }
  //as long as ..
  m = ts.match('as long as .{1,7} (then|#ClauseEnd)');
  if (m.found) {
    m.not('then$').tag('Condition', 'as-long-then');
  }
  //at the end of a sentence:
  //'..., if it really goes.'
  m = ts.match('#Comma #Condition .{1,7} .$');
  if (m.found) {
    m.not('^#Comma').tag('Condition', 'comma-7-end');
  }
  // '... if so.'
  m = ts.match('#Condition .{1,4}$');
  if (m.found) {
    m.tag('Condition', 'cond-4-end');
  }
  return ts;
};

module.exports = conditionPass;

},{}],97:[function(_dereq_,module,exports){
'use strict';
//a verbPhrase is a sequence of axiliaries, adverbs and verbs
const verbPhrase = function (ts) {
  if (ts.has('(#Verb|#Auxiliary)')) {
    ts.match('#Verb').tag('VerbPhrase', 'verbphrase-verb');
    //quickly was
    ts.match('#Adverb #Verb').tag('VerbPhrase', 'adverb-verb');
    //was quickly
    ts.match('#Verb #Adverb').tag('VerbPhrase', 'verb-adverb');
    //is not
    ts.match('#Verb #Negative').tag('VerbPhrase', 'verb-not');
    //never is
    ts.match('never #Verb').tag('VerbPhrase', 'not-verb');
    //'will have had'..
    ts.match('#Auxiliary+').tag('VerbPhrase', '2');
    // 'is'
    ts.match('#Copula').tag('VerbPhrase', '#3');
    //'really will'..
    ts.match('#Adverb #Auxiliary').tag('VerbPhrase', '#4');
  //to go
  // ts.match('to #Infinitive').tag('VerbPhrase', '#5');
  //work with
  // ts.match('#Verb #Preposition').tag('VerbPhrase', '#6');
  }
  return ts;
};

module.exports = verbPhrase;

},{}],98:[function(_dereq_,module,exports){
'use strict';
const conditionPass = _dereq_('./00-conditionPass');
const verbPhrase = _dereq_('./01-verbPhrase');
// const nounPhrase = require('./02-nounPhrase');
// const AdjectivePhrase = require('./03-adjectivePhrase');
//
const phraseTag = function (ts) {
  ts = conditionPass(ts);
  ts = verbPhrase(ts);
  // ts = nounPhrase(ts);
  // ts = AdjectivePhrase(ts);
  return ts;
};

module.exports = phraseTag;

},{"./00-conditionPass":96,"./01-verbPhrase":97}],99:[function(_dereq_,module,exports){
'use strict';
//regs-
const titleCase = /^[A-Z][a-z']/;
const romanNum = /^[IVXCM]+$/;

//not so smart (right now)
const isRomanNumeral = function(t) {
  if (t.text.length > 1 && romanNum.test(t.text) === true) {
    return t.canBe('RomanNumeral');
  }
  return false;
};

const oneLetters = {
  a: true,
  i: true,
  //internet-slang
  u: true,
  r: true,
  c: true,
  k: true
};

const punctuation_step = function(ts) {
  let rules = ts.world.regex || [];
  ts.terms.forEach((t, o) => {
    let str = t.text;
    //anything can be titlecase
    if (titleCase.test(str) === true) {
      t.tag('TitleCase', 'punct-rule');
    }
    //add hyphenation
    if (t.whitespace.after === '-' && ts.terms[o + 1] && ts.terms[o + 1].whitespace.before === '') {
      t.tag('Hyphenated', 'has-hyphen');
      ts.terms[o + 1].tag('Hyphenated', 'has-hyphen');
    }
    //look at () parentheses
    if (t.text[0] === '(') {
      t.tag('StartBracket');
    }
    //look at end-brackets (allow some punctuation after)!
    if (/\)[,.?!;:]?$/.test(t.text) === true) {
      t.tag('EndBracket');
    }
    //ok, normalise it a little,
    str = str.replace(/[,\.\?]$/, '');
    //do punctuation rules (on t.text)
    for (let i = 0; i < rules.length; i++) {
      let r = rules[i];
      if (r.reg.test(str) === true) {
        //don't over-write any other known tags
        if (t.canBe(r.tag)) {
          t.tag(r.tag, 'punctuation-rule- "' + r.reg.toString() + '"');
        }
        return;
      }
    }
    //terms like 'e'
    if (str.length === 1 && ts.terms[o + 1] && /[A-Z]/.test(str) && !oneLetters[str.toLowerCase()]) {
      t.tag('Acronym', 'one-letter-acronym');
    }
    //roman numerals (weak rn)
    if (isRomanNumeral(t)) {
      t.tag('RomanNumeral', 'is-roman-numeral');
    }
    //'100+'
    if (/[0-9]\+$/.test(t.text) === true) {
      t.tag('NumericValue', 'number-plus');
    }
  });
  return ts;
};

module.exports = punctuation_step;

},{}],100:[function(_dereq_,module,exports){
'use strict';
const emojiReg = _dereq_('./rules/emoji_regex');
const emoticon = _dereq_('./rules/emoticon_list');
//for us, there's three types -
// * ;) - emoticons
// * 🌵 - unicode emoji
// * :smiling_face: - asci-represented emoji

//test for forms like ':woman_tone2:‍:ear_of_rice:'
//https://github.com/Kikobeats/emojis-keywords/blob/master/index.js
const isColonEmoji = (t) => {
  if (t.text.charAt(0) === ':') {
    //end comma can be last or second-last ':haircut_tone3:‍♀️'
    if (t.text.match(/:.?$/) === null) {
      return false;
    }
    //ensure no spaces
    if (t.text.match(' ')) {
      return false;
    }
    //reasonably sized
    if (t.text.length > 35) {
      return false;
    }
    return true;
  }
  return false;
};

//check against emoticon whitelist
const isEmoticon = (t) => {
  //normalize the 'eyes'
  let str = t.text.replace(/^[:;]/, ':');
  return emoticon.hasOwnProperty(str) === true;
};

//
const emojiStep = (ts) => {
  for (let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    //test for :keyword: emojis
    if (isColonEmoji(t)) {
      t.tag('Emoji', 'colon-emoji');
    }
    //test for unicode emojis
    if (t.text.match(emojiReg)) {
      t.tag('Emoji', 'unicode-emoji');
    }
    //test for emoticon ':)' emojis
    if (isEmoticon(t)) {
      t.tag('Emoji', 'emoticon-emoji');
    }
  }
  return ts;
};
module.exports = emojiStep;

},{"./rules/emoji_regex":130,"./rules/emoticon_list":131}],101:[function(_dereq_,module,exports){
'use strict';
const split = _dereq_('./contraction/split');
// const l = require('../../lexicon/init');
// const lexicon = l.lexicon;

const lexicon_pass = function(ts) {
  const lexicon = ts.world.words || {};
  //loop through each term
  for (let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    //basic term lookup
    if (lexicon.hasOwnProperty(t.normal) === true) {
      t.tag(lexicon[t.normal], 'lexicon');
      continue;
    }
    //support silent_term matches
    if (t.silent_term && lexicon.hasOwnProperty(t.silent_term) === true) {
      t.tag(lexicon[t.silent_term], 'silent_term-lexicon');
      continue;
    }
    //check root version too
    if (t.root && t.normal !== t.root) {
      if (lexicon.hasOwnProperty(t.root) === true) {
        t.tag(lexicon[t.root], 'lexicon');
        continue;
      }
    }
    //support contractions (manually)
    let parts = split(t);
    if (parts && parts.start) {
      let start = parts.start.toLowerCase();
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
const MAX = 4;

//find terms in the lexicon longer than one word (like 'hong kong')
const findMultiWords = function(ts, i, world) {
  let lex = world.words;
  let start = ts.terms[i].root;
  let nextTerms = ts.terms.slice(i + 1, i + MAX).map((t) => t.root);
  //look for matches, try biggest first
  let max = MAX;
  if (nextTerms.length < max) {
    max = nextTerms.length;
  }
  for(let k = max; k > 0; k -= 1) {
    let howAbout = start + ' ' + nextTerms.slice(0, k).join(' ');
    if (lex.hasOwnProperty(howAbout) === true) {
      ts.slice(i, i + k + 1).tag(lex[howAbout], 'multi-lexicon-' + howAbout);
      return k;
    }
  }
  return 0;
};


//try multiple-word matches in the lexicon (users and default)
const lexiconMulti = ts => {
  ts.world.cache = ts.world.cache || {};
  let firstWords = ts.world.cache.firstWords || {};
  for (let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    //try multi words from user-lexicon
    if (firstWords.hasOwnProperty(t.root) === true) {
      let jump = findMultiWords(ts, i, ts.world);
      i += jump;
      continue;
    }
  }
  return ts;
};
module.exports = lexiconMulti;

},{}],103:[function(_dereq_,module,exports){
'use strict';
//identify urls, hashtags, @mentions, emails
//regs
const email = /^\w+@\w+\.[a-z]{2,3}$/; //not fancy
const hashTag = /^#[a-z0-9_]{2,}$/;
const atMention = /^@\w{2,}$/;
const urlA = /^(https?:\/\/|www\.)\w+\.[a-z]{2,3}/; //with http/www
const urlB = /^[\w\.\/]+\.(com|net|gov|org|ly|edu|info|biz|ru|jp|de|in|uk|br)/; //http://mostpopularwebsites.net/top-level-domain

const web_pass = function(terms) {
  for (let i = 0; i < terms.length; i++) {
    let t = terms.get(i);
    let str = t.text.trim().toLowerCase();
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
const regs = _dereq_('./rules/regex_list');
const suffixes = _dereq_('./rules/suffix_lookup');

const misc = [
  //slang things
  [/^(lol)+[sz]$/, 'Expression'], //lol
  [/^ma?cd[aeiou]/, 'LastName'], //macdonell - Last patterns https://en.wikipedia.org/wiki/List_of_family_name_affixes
  //starting-ones
  [/^[\-\+]?[0-9][0-9,]*(\.[0-9])*$/, 'Cardinal'], //like 5
  [/^(un|de|re)\\-[a-z]../, 'Verb'],
  [/^[\-\+]?[0-9]+(\.[0-9])*$/, 'NumericValue'],
  [/^https?\:?\/\/[a-z0-9]/, 'Url'], //the colon is removed in normalisation
  [/^www\.[a-z0-9]/, 'Url'],
  [/^(over|under)[a-z]{2,}/, 'Adjective'],
  [/^[0-9]{1,4}\.[0-9]{1,2}\.[0-9]{1,4}$/, 'Date'], // 03-02-89
  //ending-ones
  [/^[0-9]+([a-z]{1,2})$/, 'Value'], //like 5kg
  [/^[0-9][0-9,\.]*(st|nd|rd|r?th)$/, ['NumericValue', 'Ordinal']], //like 5th
  //middle (anywhere)
  [/[a-z]*\\-[a-z]*\\-/, 'Adjective']
];

//straight-up lookup of known-suffixes
const lookup = function(t) {
  const len = t.normal.length;
  let max = 7;
  if (len <= max) {
    max = len - 1;
  }
  for (let i = max; i > 1; i -= 1) {
    let str = t.normal.substr(len - i, len);
    if (suffixes[i][str] !== undefined) {
      // console.log('suffix-match: ' + str);
      return suffixes[i][str];
    }
  }
  return null;
};

//word-regexes indexed by last-character
const regexFn = function(t) {
  let char = t.normal.charAt(t.normal.length - 1);
  if (regs[char] === undefined) {
    return null;
  }
  let arr = regs[char];
  for (let o = 0; o < arr.length; o++) {
    if (arr[o][0].test(t.normal) === true) {
      return arr[o];
    }
  }
  return null;
};

const suffix_step = function(ts) {
  for (let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    //try known suffixes
    let tag = lookup(t);
    if (tag !== null && t.canBe(tag) === true) {
      t.tag(tag, 'suffix-lookup');
      continue;
    }
    //apply regexes by final-char
    tag = regexFn(t);
    if (tag !== null && t.canBe(tag[1]) === true) {
      t.tag(tag[1], 'regex-list: ' + String(tag[0]));
      continue;
    }
    //apply misc regexes
    for (let o = 0; o < misc.length; o++) {
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
const markov = _dereq_('./rules/neighbours');
const afterThisWord = markov.afterThisWord;
const beforeThisWord = markov.beforeThisWord;
const beforeThisPos = markov.beforeThisPos;
const afterThisPos = markov.afterThisPos;

const nothing = {
  TitleCase: true,
  UpperCase: true,
  CamelCase: true,
  Hyphenated: true,
  StartBracket: true,
  EndBracket: true,
  Comma: true,
  ClauseEnd: true,
};

//basically a last-ditch effort before everything falls back to a noun
//for unknown terms, look left + right first, and hit-up the markov-chain for clues
const neighbour_step = function (ts) {
  ts.terms.forEach((t, n) => {
    //is it still unknown?
    let termTags = Object.keys(t.tags);
    termTags = termTags.filter((tag) => nothing.hasOwnProperty(tag) === false);
    if (termTags.length === 0) {
      let lastTerm = ts.terms[n - 1];
      let nextTerm = ts.terms[n + 1];
      //look at previous word for clues
      if (lastTerm && afterThisWord.hasOwnProperty(lastTerm.normal) && !lastTerm.tags.ClauseEnd) {
        t.tag(afterThisWord[lastTerm.normal], 'neighbour-after-"' + lastTerm.normal + '"');
        return;
      }
      //look at next word for clues..
      //(not if there's a comma, though)
      if (!t.tags.ClauseEnd && nextTerm && beforeThisWord.hasOwnProperty(nextTerm.normal)) {
        t.tag(beforeThisWord[nextTerm.normal], 'neighbour-before-"' + nextTerm.normal + '"');
        return;
      }
      //look at the last POS for clues
      let tags = [];
      if (lastTerm) {
        tags = Object.keys(lastTerm.tags);
        for (let i = 0; i < tags.length; i++) {
          if (afterThisPos[tags[i]]) {
            t.tag(afterThisPos[tags[i]], 'neighbour-after-[' + tags[i] + ']');
            return;
          }
        }
      }
      //look at the next POS for clues
      if (nextTerm) {
        tags = Object.keys(nextTerm.tags);
        for (let i = 0; i < tags.length; i++) {
          if (beforeThisPos[tags[i]]) {
            t.tag(beforeThisPos[tags[i]], 'neighbour-before-[' + tags[i] + ']');
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
'use strict';
//titlecase is a signal for a noun

const capital_logic = function (s) {
  //(ignore first word)
  for (let i = 1; i < s.terms.length; i++) {
    let t = s.terms[i];
    //has a capital, but isn't too weird.
    if (t.tags.TitleCase && t.isWord()) {
      t.tag('Noun', 'capital-step');
      t.tag('TitleCase', 'capital-step');
    }
  }
  //support first-word of sentence as proper titlecase
  let t = s.terms[0];
  if (t && t.tags.TitleCase) {
    if (t.tags.Person || t.tags.Organization || t.tags.Place) {
      t.tag('TitleCase', 'first-term-capital');
    }
  }
  return s;
};

module.exports = capital_logic;

},{}],107:[function(_dereq_,module,exports){
'use strict';
//tag word as noun if we know nothing about it, still.

//tags that dont really count
const nothing = {
  TitleCase: true,
  UpperCase: true,
  CamelCase: true,
  Hyphenated: true,
  StartBracket: true,
  EndBracket: true,
  Comma: true,
  ClauseEnd: true,
};
//are the tags basically empty
const gotNothing = function(t) {
  //fail-fast
  if (t.tags.Noun || t.tags.Verb || t.tags.Adjective) {
    return false;
  }
  let tags = Object.keys(t.tags);
  if (tags.length === 0) {
    return true;
  }
  if (tags.filter(tag => !nothing[tag]).length === 0) {
    return true;
  }
  return false;
};

//in last-ditch, try to match 'rewatch' -> 'watch' in the lexicon
const tryRoot = function(t) {
  if (/^(re|un)-?[^aeiou]./.test(t.normal) === true) {
    let str = t.normal.replace(/^(re|un)-?/, '');
    if (t.world.words.hasOwnProperty(str) === true) {
      let tag = t.world.words[str];
      if (tag === 'Infinitive' || tag === 'PresentTense' || tag === 'PastTense' || tag === 'Gerund') {
        return tag;
      }
    }
  }
  return null;
};

const noun_fallback = function(s) {
  for (let i = 0; i < s.terms.length; i++) {
    let t = s.terms[i];
    //fail-fast
    if (t.tags.Noun || t.tags.Verb) {
      continue;
    }
    //ensure it only has the tag 'Term'
    if (gotNothing(t)) {
      //ensure it's atleast word-looking
      if (t.isWord() === false) {
        continue;
      }
      let rootTag = tryRoot(t);
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
const irregulars = _dereq_('./contraction/01-irregulars');
const isWasHas = _dereq_('./contraction/02-isWasHas');
const easyOnes = _dereq_('./contraction/03-easyOnes');
const numberRange = _dereq_('./contraction/04-numberRange');

//find and pull-apart contractions
const interpret = function(ts) {
  //check irregulars
  ts = irregulars(ts);
  //guess-at ambiguous "'s" one
  ts = isWasHas(ts);
  //check easy ones
  ts = easyOnes(ts);
  //5-7
  ts = numberRange(ts);
  return ts;
};

module.exports = interpret;

},{"./contraction/01-irregulars":124,"./contraction/02-isWasHas":125,"./contraction/03-easyOnes":126,"./contraction/04-numberRange":127}],109:[function(_dereq_,module,exports){
'use strict';
//ambiguous 'may' and 'march'
const preps = '(in|by|before|during|on|until|after|of|within|all)';
const thisNext = '(last|next|this|previous|current|upcoming|coming)';
const sections = '(start|end|middle|starting|ending|midpoint|beginning)';
const seasons = '(spring|summer|winter|fall|autumn)';

//ensure a year is approximately typical for common years
//please change in one thousand years
const tagYear = (v, reason) => {
  if (v.found !== true) {
    return;
  }
  v.list.forEach((ts) => {
    let num = parseInt(ts.terms[0].normal, 10);
    if (num && num > 1000 && num < 3000) {
      ts.terms[0].tag('Year', reason);
    }
  });
};
//same, but for less-confident values
const tagYearSafer = (v, reason) => {
  if (v.found !== true) {
    return;
  }
  v.list.forEach((ts) => {
    let num = parseInt(ts.terms[0].normal, 10);
    if (num && num > 1900 && num < 2030) {
      ts.terms[0].tag('Year', reason);
    }
  });
};

//non-destructively tag values & prepositions as dates
const datePass = function (ts) {
  //ambiguous month - person forms
  let people = '(january|april|may|june|summer|autumn|jan|sep)';
  if (ts.has(people)) {
    //give to april
    ts.match(`#Infinitive #Determiner? #Adjective? #Noun? (to|for) ${people}`).lastTerm().tag('Person', 'ambig-person');
    //remind june
    ts.match(`#Infinitive ${people}`).lastTerm().tag('Person', 'infinitive-person');
    //may waits for
    ts.match(`${people} #PresentTense (to|for)`).firstTerm().tag('Person', 'ambig-active');
    //april will
    ts.match(`${people} #Modal`).firstTerm().tag('Person', 'ambig-modal');
    //would april
    ts.match(`#Modal ${people}`).lastTerm().tag('Person', 'modal-ambig');
    //with april
    ts.match(`(that|with|for) ${people}`).term(1).tag('Person', 'that-month');
    //it is may
    ts.match(`#Copula ${people}`).term(1).tag('Person', 'is-may');
    //may is
    ts.match(`${people} #Copula`).term(0).tag('Person', 'may-is');
    //april the 5th
    ts.match(`${people} the? #Value`).term(0).tag('Month', 'person-value');
    //wednesday april
    ts.match(`#Date ${people}`).term(1).tag('Month', 'correction-may');
    //may 5th
    ts.match(`${people} the? #Value`).firstTerm().tag('Month', 'may-5th');
    //5th of may
    ts.match(`#Value of ${people}`).lastTerm().tag('Month', '5th-of-may');
    //by april
    ts.match(`${preps} ${people}`).ifNo('#Holiday').term(1).tag('Month', 'preps-month');
    //this april
    ts.match(`(next|this|last) ${people}`).term(1).tag('Month', 'correction-may'); //maybe not 'this'
  }
  //ambiguous month - verb-forms
  let verbs = '(may|march)';
  if (ts.has(verbs)) {
    //quickly march
    ts.match(`#Adverb ${verbs}`).lastTerm().tag('Infinitive', 'ambig-verb');
    ts.match(`${verbs} #Adverb`).lastTerm().tag('Infinitive', 'ambig-verb');
    //all march
    ts.match(`${preps} ${verbs}`).lastTerm().tag('Month', 'in-month');
    //this march
    ts.match(`(next|this|last) ${verbs}`).lastTerm().tag('Month', 'this-month');
    //with date
    ts.match(`${verbs} the? #Value`).firstTerm().tag('Month', 'march-5th');
    ts.match(`#Value of? ${verbs}`).lastTerm().tag('Month', '5th-of-march');
    //nearby
    ts.match(`[${verbs}] .? #Date`).lastTerm().tag('Month', 'march-and-feb');
    ts.match(`#Date .? [${verbs}]`).lastTerm().tag('Month', 'feb-and-march');

    if (ts.has('march')) {
      //march to
      ts.match('march (up|down|back|to|toward)').term(0).tag('Infinitive', 'march-to');
      //must march
      ts.match('#Modal march').term(1).tag('Infinitive', 'must-march');
    }

  }
  //sun 5th
  if (ts.has('sun')) {
    //sun feb 2
    ts.match('sun #Date').firstTerm().tag('WeekDay', 'sun-feb');
    //sun the 5th
    ts.match('sun the #Ordinal').tag('Date').firstTerm().tag('WeekDay', 'sun-the-5th');
    //the sun
    ts.match('#Determiner sun').lastTerm().tag('Singular', 'the-sun');
  }
  //sat, nov 5th
  if (ts.has('sat')) {
    //sat november
    ts.match('sat #Date').firstTerm().tag('WeekDay', 'sat-feb');
    //this sat
    ts.match(`${preps} sat`).lastTerm().tag('WeekDay', 'sat');
  }

  //months:
  if (ts.has('#Month')) {
    //June 5-7th
    ts.match(`#Month #DateRange+`).tag('Date', 'correction-numberRange');
    //5th of March
    ts.match('#Value of #Month').tag('Date', 'value-of-month');
    //5 March
    ts.match('#Cardinal #Month').tag('Date', 'cardinal-month');
    //march 5 to 7
    ts.match('#Month #Value to #Value').tag('Date', 'value-to-value');
    //march the 12th
    ts.match('#Month the #Value').tag('Date', 'month-the-value');
  }

  ts.match('in the (night|evening|morning|afternoon|day|daytime)').tag('Time', 'in-the-night');
  ts.match('(#Value|#Time) (am|pm)').tag('Time', 'value-ampm');

  //months:
  if (ts.has('#Value')) {
    //for 4 months
    ts.match('for #Value #Duration').tag('Date', 'for-x-duration');
    //values
    ts.match('#Value #Abbreviation').tag('Value', 'value-abbr');
    ts.match('a #Value').if('(hundred|thousand|million|billion|trillion|quadrillion|quintillion|sextillion|septillion)').tag('Value', 'a-value');
    ts.match('(minus|negative) #Value').tag('Value', 'minus-value');
    ts.match('#Value grand').tag('Value', 'value-grand');
    // ts.match('#Ordinal (half|quarter)').tag('Value', 'ordinal-half');//not ready
    ts.match('(half|quarter) #Ordinal').tag('Value', 'half-ordinal');
    ts.match('(hundred|thousand|million|billion|trillion|quadrillion|quintillion|sextillion|septillion) and #Value').tag('Value', 'magnitude-and-value');
    ts.match('#Value (point|decimal) #Value').tag('Value', 'value-point-value');
    //for four days
    ts.match(`${preps}? #Value #Duration`).tag('Date', 'value-duration');
    ts.match('(#WeekDay|#Month) #Value').ifNo('#Money').tag('Date', 'date-value');
    ts.match('#Value (#WeekDay|#Month)').ifNo('#Money').tag('Date', 'value-date');
    //may twenty five
    let vs = ts.match('#TextValue #TextValue');
    if (vs.found && vs.has('#Date')) {
      vs.tag('#Date', 'textvalue-date');
    }
    //two days before
    ts.match('#Value #Duration #Conjunction').tag('Date', 'val-duration-conjunction');
    //two years old
    ts.match('#Value #Duration old').unTag('Date', 'val-years-old');
  }


  //seasons
  if (ts.has(seasons)) {
    ts.match(`${preps}? ${thisNext} ${seasons}`).tag('Date', 'thisNext-season');
    ts.match(`the? ${sections} of ${seasons}`).tag('Date', 'section-season');
  }

  //rest-dates
  if (ts.has('#Date')) {
    //june the 5th
    ts.match('#Date the? #Ordinal').tag('Date', 'correction-date');
    //last month
    ts.match(`${thisNext} #Date`).tag('Date', 'thisNext-date');
    //by 5 March
    ts.match('due? (by|before|after|until) #Date').tag('Date', 'by-date');
    //tomorrow before 3
    ts.match('#Date (by|before|after|at|@|about) #Cardinal').not('^#Date').tag('Time', 'date-before-Cardinal');
    //saturday am
    ts.match('#Date (am|pm)').term(1).unTag('Verb').unTag('Copula').tag('Time', 'date-am');
    ts.match('(last|next|this|previous|current|upcoming|coming|the) #Date').tag('Date', 'next-feb');
    ts.match('#Date (#Preposition|to) #Date').tag('Date', 'date-prep-date');
    //start of june
    ts.match(`the? ${sections} of #Date`).tag('Date', 'section-of-date');
    //fifth week in 1998
    ts.match('#Ordinal #Duration in #Date').tag('Date', 'duration-in-date');
    //early in june
    ts.match('(early|late) (at|in)? the? #Date').tag('Time', 'early-evening');
  }


  //year/cardinal tagging
  if (ts.has('#Cardinal')) {
    let v = ts.match(`#Date #Value #Cardinal`).lastTerm();
    tagYear(v, 'date-value-year');
    //scoops up a bunch
    v = ts.match(`#Date+ #Cardinal`).lastTerm();
    tagYear(v, 'date-year');
    //feb 8 2018
    v = ts.match(`#Month #Value #Cardinal`).lastTerm();
    tagYear(v, 'month-value-year');
    //feb 8 to 10th 2018
    v = ts.match(`#Month #Value to #Value #Cardinal`).lastTerm();
    tagYear(v, 'month-range-year');
    //in 1998
    v = ts.match(`(in|of|by|during|before|starting|ending|for|year) #Cardinal`).lastTerm();
    tagYear(v, 'in-year');
    //q2 2009
    v = ts.match('(q1|q2|q3|q4) [#Cardinal]');
    tagYear(v, 'in-year');
    //2nd quarter 2009
    v = ts.match('#Ordinal quarter [#Cardinal]');
    tagYear(v, 'in-year');
    //in the year 1998
    v = ts.match('the year [#Cardinal]');
    tagYear(v, 'in-year');

    //it was 1998
    v = ts.match('it (is|was) [#Cardinal]');
    tagYearSafer(v, 'in-year');
    //was 1998 and...
    v = ts.match(`#Cardinal !#Plural`).firstTerm();
    tagYearSafer(v, 'year-unsafe');
  }

  //another pass at dates..
  if (ts.has('#Date')) {
    //time:
    if (ts.has('#Time')) {
      ts.match('#Cardinal #Time').not('#Year').tag('Time', 'value-time');
      ts.match('(by|before|after|at|@|about) #Time').tag('Time', 'preposition-time');
      //2pm est
      ts.match('#Time (eastern|pacific|central|mountain)').term(1).tag('Time', 'timezone');
      ts.match('#Time (est|pst|gmt)').term(1).tag('Time', 'timezone abbr');
    }

    //fix over-greedy
    let date = ts.match('#Date+').splitOn('Clause');

    if (date.has('(#Year|#Time)') === false) {
      //12 february 12
      date.match('#Value (#Month|#Weekday) #Value').lastTerm().unTag('Date');
    }
  }

  return ts;
};

module.exports = datePass;

},{}],110:[function(_dereq_,module,exports){
'use strict';
//auxiliary verbs are extra verbs beside the main ones
// "[will be] going" - etc.

const Auxiliary = {
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
  'not': true,
};

const corrections = function(ts) {
  //set verbs as auxillaries
  for(let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    if (Auxiliary[t.normal] || Auxiliary[t.silent_term]) {
      let next = ts.terms[i + 1];
      //if next word is a verb
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
'use strict';

// 'not' is sometimes a verb, sometimes an adjective
const negation_step = function(ts) {
  for(let i = 0; i < ts.length; i++) {
    let t = ts.get(i);
    if (t.normal === 'not' || t.silent_term === 'not') {
      //find the next verb/adjective
      for(let o = i + 1; o < ts.length; o++) {
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
'use strict';
//-types of comma-use-
// PlaceComma - Hollywood, California
// List       - cool, fun, and great.
// ClauseEnd  - if so, we do.

//like Toronto, Canada
const isPlaceComma = (ts, i) => {
  let t = ts.terms[i];
  let nextTerm = ts.terms[i + 1];
  //'australia, canada' is a list
  if (nextTerm && t.tags.Place && !t.tags.Country && nextTerm.tags.Country) {
    return true;
  }
  return false;
};

//adj, noun, or verb
const mainTag = (t) => {
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
};


//take the first term with a comma, and test to the right.
//the words with a comma must be the same pos.
const isList = (ts, i) => {
  let start = i;
  let tag = mainTag(ts.terms[i]);
  //ensure there's a following comma, and its the same pos
  //then a Conjunction
  let sinceComma = 0;
  let count = 0;
  let hasConjunction = false;
  for(i = i + 1; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    //are we approaching the end
    if (count > 0 && t.tags.Conjunction) {
      hasConjunction = true;
      continue;
    }
    //found one,
    if (t.tags[tag]) {
      //looks good. keep it going
      if (t.tags.Comma) {
        count += 1;
        sinceComma = 0;
        continue;
      }
      if (count > 0 && hasConjunction) { //is this the end of the list?
        ts.slice(start, i).tag('List');
        return true;
      }
    }
    sinceComma += 1;
    //have we gone too far without a comma?
    if (sinceComma > 5) {
      return false;
    }
    //this one, not a clause..
    if (tag === 'Value') {
      return true;
    }
  }
  return false;
};

const commaStep = function(ts) {
  //tag the correct punctuation forms
  for(let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    let punct = t.getPunctuation();
    if (punct === ',') {
      t.tag('Comma', 'comma-step');
      continue;
    }
    if (punct === ';' || punct === ':') {
      t.tag('ClauseEnd', 'clause-punt');
      continue;
    }
    //support elipses
    if (t.whitespace.after.match(/^\.\./)) {
      t.tag('ClauseEnd', 'clause-elipses');
      continue;
    }

    //support ' - ' clause
    if (ts.terms[i + 1] && ts.terms[i + 1].whitespace.before.match(/ - /)) {
      t.tag('ClauseEnd', 'hypen-clause');
      continue;
    }
  }

  //disambiguate the commas now
  for(let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    if (t.tags.Comma) {
      //if we already got it
      if (t.tags.List) {
        continue;
      }
      //like 'Hollywood, California'
      if (isPlaceComma(ts, i)) {
        continue;
      }
      //like 'cold, wet hands'
      let found = isList(ts, i);
      //otherwise, it's a phrasal comma, like 'you must, if you think so'
      if (!found) {
        t.tag('ClauseEnd', 'phrasal-comma');
      }
    }
  }
  return ts;
};

module.exports = commaStep;

},{}],113:[function(_dereq_,module,exports){
'use strict';

const quotemarks = {
  '\u0022': {
    close: '\u0022',
    tag: 'StraightDoubleQuotes'
  },
  '\uFF02': {
    close: '\uFF02',
    tag: 'StraightDoubleQuotesWide'
  },
  '\u0027': {
    close: '\u0027',
    tag: 'StraightSingleQuotes'
  },

  '\u201C': {
    close: '\u201D',
    tag: 'CommaDoubleQuotes'
  },
  '\u2018': {
    close: '\u2019',
    tag: 'CommaSingleQuotes'
  },

  '\u201F': {
    close: '\u201D',
    tag: 'CurlyDoubleQuotesReversed'
  },
  '\u201B': {
    close: '\u2019',
    tag: 'CurlySingleQuotesReversed'
  },

  '\u201E': {
    close: '\u201D',
    tag: 'LowCurlyDoubleQuotes'
  },
  '\u2E42': {
    close: '\u201D',
    tag: 'LowCurlyDoubleQuotesReversed'
  },

  '\u201A': {
    close: '\u2019',
    tag: 'LowCurlySingleQuotes'
  },

  '\u00AB': {
    close: '\u00BB',
    tag: 'AngleDoubleQuotes'
  },
  '\u2039': {
    close: '\u203A',
    tag: 'AngleSingleQuotes'
  },

  // Prime 'non quotation'
  '\u2035': {
    close: '\u2032',
    tag: 'PrimeSingleQuotes'
  },
  '\u2036': {
    close: '\u2033',
    tag: 'PrimeDoubleQuotes'
  },
  '\u2037': {
    close: '\u2034',
    tag: 'PrimeTripleQuotes'
  },

  // Prime 'quotation' variation
  '\u301D': {
    close: '\u301E',
    tag: 'PrimeDoubleQuotes'
  },
  '\u0060': {
    close: '\u00B4',
    tag: 'PrimeSingleQuotes'
  },

  '\u301F': {
    close: '\u301E',
    tag: 'LowPrimeDoubleQuotesReversed'
  }
};

// Convert the close quote to a regex.
Object.keys(quotemarks).forEach((open) => {
  quotemarks[open].regex = new RegExp(quotemarks[open].close + '[;:,.]*');
  quotemarks[open].open = open;
});

// Improve open match detection.
const startQuote = new RegExp('[' + Object.keys(quotemarks).join('') + ']');

//tag a inline quotation as such
const quotation_step = ts => {
  // Isolate the text so it doesn't change.
  const terms = ts.terms.slice(0); //.map(e => e.text);
  for (let i = 0; i < terms.length; i++) {

    let t = ts.terms[i];
    if (startQuote.test(t.whitespace.before)) {
      // Get the match and split it into groups
      let quotes = t.whitespace.before.match(startQuote).shift().split('');
      // Get close and tag info.
      quotes = quotes.map(mark => quotemarks[mark]);
      // Look for the ending
      for (let o = 0; o < ts.terms.length; o++) {
        // max-length don't go-on forever
        if (!terms[i + o] || o > 28) {
          break;
        }
        // Find the close.
        let index = -1;
        for(let qi = 0; qi < quotes.length; qi += 1) {
          if (quotes[qi].regex.test(terms[i + o].whitespace.after) === true) {
            index = qi;
            break;
          }
        }
        if (index !== -1) {
          // Remove the found
          const quote = quotes.splice(index, 1).pop();

          if (quote.regex.test(ts.terms[i + o].normal)) {
            ts.terms[i + o].whitespace.after.replace(quote.regex, '');
          }
          // Tag the things.
          t.tag('StartQuotation', 'quotation_open');
          ts.terms[i + o].tag('EndQuotation', 'quotation_close');
          ts.slice(i, i + o + 1).tag('Quotation', 'quotation_step');
          // Compensate for multiple close quotes ('"Really"')
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
'use strict';
//decide if an apostrophe s is a contraction or not
// 'spencer's nice' -> 'spencer is nice'
// 'spencer's house' -> 'spencer's house'

const singleQuotes = [
  ['\u0027', '\u0027'], // Straight Single Quotes
  ['\u2018', '\u2019'], // Comma Single Quotes
  ['\u201B', '\u2019'], // Curly Single Quotes Reversed
  ['\u201A', '\u2019'], // Low Curly Single Quotes
  ['\u2035', '\u2032'], // Prime Single Quotes Alt
  ['\u0060', '\u00B4'] // Prime Single Quotes
];
//these are always contractions
const blacklist = [
  'it\'s',
  'that\'s'
];

// Get all types of single quote.
const apostrophes = '\'‘’‛‚‵′`´';
const afterWord = new RegExp('([a-z]s[' + apostrophes + '])\\W*$'); // [^\w]* match 0 or more of any char that is NOT alphanumeric
const hasApostrophe = new RegExp('[' + apostrophes + ']');
const trailers = new RegExp('[^' + apostrophes + '\\w]+$');

const quoteRegex = {};
singleQuotes.forEach(quote => {
  quoteRegex[quote[0]] = new RegExp(quote[1] + '[^' + quote[1] + '\\w]*$');
});

// Compensate for different `'`s in the blacklist
blacklist.map(item => new RegExp(
  item.replace('\'', '[' + apostrophes + ']')
));

// A possessive means `'s` describes ownership
// Not a contraction, like it's -> `it is`
const is_possessive = function(terms, text, index) {
  const thisWord = terms.get(index);
  const nextWord = terms.get(index + 1);
  const stepWord = terms.get(index + 2);

  //our booleans:
  // `blacklist` are always contractions, not possessive
  const inBlacklist = blacklist.map(r => text.match(r)).find(m => m);
  // If no apostrophe s or s apostrophe
  const endTick = hasApostrophe.test(thisWord.whitespace.after);
  // "spencers'" - this is always possessive - eg "flanders'"
  const hasPronoun = thisWord.tags.Pronoun;

  if (inBlacklist || hasPronoun || !endTick) {
    return false;
  }
  if (afterWord.test(text) || nextWord === undefined) {
    return true;
  }
  // Next word is 'house'
  if (nextWord.tags.Noun === true || thisWord.tags.ClauseEnd === true) {
    return true;
  }
  //rocket's red glare
  if (stepWord !== undefined && nextWord.tags.Adjective && stepWord.tags.Noun) {
    return true;
  }
  return false;
};

// Tag each term as possessive, if it should
const possessiveStep = function(ts) {
  let expectingClosers = [];
  for(let i = 0; i < ts.length; i++) {
    const term = ts.get(i);
    let text = term.text;

    // First detect open quotes before detecting apostrophes
    if (typeof quoteRegex[text[0]] !== 'undefined') {
      // Add the expected closing quotes to our inspection array.
      expectingClosers[expectingClosers.length] = quoteRegex[text[0]];
      text = text.slice(1);
    }

    // Pre checking for quotes. e.g: Carlos'.’. -> Carlos'.’
    text = text.replace(trailers, '');
    // If the string ends with an expected closer.
    let closer = -1;
    for(let qi = 0; qi < expectingClosers.length; qi += 1) {
      if (expectingClosers[qi].test(text) === true) {
        closer = qi;
        break;
      }
    }
    if (closer !== -1) {
      text = text.replace(expectingClosers[closer], '');
      delete expectingClosers[closer];
    }

    // Post checking for quotes. e.g: Carlos'. -> Carlos'
    text = text.replace(trailers, '');
    if (is_possessive(ts, text, i)) {
      // If it's not already a noun, co-erce it to one
      if (!term.tags['Noun']) {
        term.tag('Noun', 'possessive_pass');
      }
      term.tag('Possessive', 'possessive_pass');

      // If it's been detected as a `Contraction`
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
'use strict';

//tag 'FBI' as letters-representing-words.
//we guess if letters are an acronym in the Term class.
const acronym_step = function(ts) {
  ts.terms.forEach((t) => {
    if (t.isAcronym()) {
      t.tag('Acronym', 'acronym-step');
    }
  });
  return ts;
};

module.exports = acronym_step;

},{}],116:[function(_dereq_,module,exports){
'use strict';

//sort-out things like 'theresa may', or 'will jones'.
const person_step = function(ts) {
  //mr Putin
  ts.match('(mr|mrs|ms|dr) (#TitleCase|#Possessive)+').tag('#Person', 'mr-putin');

  //a bunch of ambiguous first names
  let maybeNoun = '(rose|robin|dawn|ray|holly|bill|joy|viola|penny|sky|violet|daisy|melody|kelvin|hope|mercedes|olive|jewel|faith|van|charity|miles|lily|summer|dolly|rod|dick|cliff|lane|reed|kitty|art|jean|trinity)';
  if (ts.has(maybeNoun)) {
    ts.match('(#Determiner|#Adverb|#Pronoun|#Possessive) [' + maybeNoun + ']').tag('Noun', 'the-ray');
    ts.match(maybeNoun + ' (#Person|#Acronym|#TitleCase)').canBe('#Person').tag('Person', 'ray-smith');
  }
  //verbs or people-names
  let maybeVerb = '(pat|wade|ollie|will|rob|buck|bob|mark|jack)';
  if (ts.has(maybeVerb)) {
    ts.match('(#Modal|#Adverb) [' + maybeVerb + ']').tag('Verb', 'would-mark');
    ts.match(maybeVerb + ' (#Person|#TitleCase)').tag('Person', 'rob-smith');
  }
  //adjectives or people-names
  let maybeAdj = '(misty|rusty|dusty|rich|randy)';
  if (ts.has(maybeAdj)) {
    ts.match('#Adverb [' + maybeAdj + ']').tag('Adjective', 'really-rich');
    ts.match(maybeAdj + ' (#Person|#TitleCase)').tag('Person', 'randy-smith');
  }
  //dates as people names
  let maybeDate = '(april|june|may|jan|august|eve)';
  if (ts.has(maybeDate)) {
    ts.match(String(maybeDate) + ' (#Person|#TitleCase)').canBe('#Person').tag('Person', 'june-smith');
    ts.match('(in|during|on|by|before|#Date) [' + maybeDate + ']').canBe('#Date').tag('Date', 'in-june');
    ts.match(maybeDate + ' (#Date|#Value)').canBe('#Date').tag('Date', 'june-5th');
  }
  //place-names as people-names
  let maybePlace = '(paris|alexandria|houston|kobe|salvador|sydney)';
  if (ts.has(maybePlace)) {
    ts.match('(in|near|at|from|to|#Place) [' + maybePlace + ']').canBe('#Place').tag('Place', 'in-paris');
    ts.match('[' + maybePlace + '] #Place').canBe('#Place').tag('Place', 'paris-france');
    ts.match('[' + maybePlace + '] #Person').canBe('#Person').tag('Person', 'paris-hilton');
  }
  //this one is tricky
  if (ts.match('al')) {
    ts.match('al (#Person|#TitleCase)').canBe('#Person').tag('#Person', 'al-borlen');
    ts.match('#TitleCase al #TitleCase').canBe('#Person').tag('#Person', 'arabic-al-arabic');
  }
  //ambiguous honorifics
  ts.match('(private|general|major|corporal|lord|lady|secretary|premier) #Honorific? #Person').terms(0).tag('Honorific', 'ambg-honorifics');
  //first general..
  ts.match('(1st|2nd|first|second) #Honorific').terms(0).tag('Honorific', 'ordinal-honorific');

  // let firstNames = '()';
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
    let tmp = ts.match('#FirstName #Noun').ifNo('^#Possessive').ifNo('#ClauseEnd .');
    tmp.lastTerm().canBe('#LastName').tag('#LastName', 'firstname-noun');
    //ferdinand de almar
    ts.match('#FirstName de #Noun').canBe('#Person').tag('#Person', 'firstname-de-noun');
    //Osama bin Laden
    ts.match('#FirstName (bin|al) #Noun').canBe('#Person').tag('#Person', 'firstname-al-noun');
    //John L. Foo
    ts.match('#FirstName #Acronym #TitleCase').tag('Person', 'firstname-acronym-titlecase');
    //Andrew Lloyd Webber
    ts.match('#FirstName #FirstName #TitleCase').tag('Person', 'firstname-firstname-titlecase');
    //Mr Foo
    ts.match('#Honorific #FirstName? #TitleCase').tag('Person', 'Honorific-TitleCase');
    //John Foo
    ts.match('#FirstName #TitleCase #TitleCase?').match('#Noun+').tag('Person', 'firstname-titlecase');
    //peter the great
    ts.match('#FirstName the #Adjective').tag('Person', 'correction-determiner5');
    //very common-but-ambiguous lastnames
    ts.match('#FirstName (green|white|brown|hall|young|king|hill|cook|gray|price)').tag('#Person', 'firstname-maybe');
    //Joe K. Sombrero
    ts.match('#FirstName #Acronym #Noun')
      .ifNo('#Date')
      .tag('#Person', 'n-acro-noun')
      .lastTerm()
      .tag('#LastName', 'n-acro-noun');
    // Dwayne 'the rock' Johnson
    ts.match('#FirstName [#Determiner? #Noun] #LastName')
      .tag('#NickName', 'first-noun-last')
      .tag('#Person', 'first-noun-last');

    //john bodego's
    ts.match('#FirstName (#Singular|#Possessive)')
      .ifNo('#Date')
      .ifNo('#NickName')
      .tag('#Person', 'first-possessive')
      .lastTerm()
      .tag('#LastName', 'first-possessive');
  }

  //methods requiring a lastname match
  if (ts.has('#LastName')) {
    // x Lastname
    ts.match('#Noun #LastName')
      .firstTerm()
      .canBe('#FirstName')
      .tag('#FirstName', 'noun-lastname');
    //ambiguous-but-common firstnames
    ts.match('(will|may|april|june|said|rob|wade|ray|rusty|drew|miles|jack|chuck|randy|jan|pat|cliff|bill) #LastName')
      .firstTerm()
      .tag('#FirstName', 'maybe-lastname');
    //Jani K. Smith
    ts.match('#TitleCase #Acronym? #LastName')
      .ifNo('#Date')
      .tag('#Person', 'title-acro-noun')
      .lastTerm()
      .tag('#LastName', 'title-acro-noun');
    //is foo Smith
    ts.match('#Copula (#Noun|#PresentTense) #LastName')
      .term(1)
      .tag('#FirstName', 'copula-noun-lastname');
  }

  //methods requiring a titlecase
  if (ts.has('#TitleCase')) {
    ts.match('#Acronym #TitleCase')
      .canBe('#Person')
      .tag('#Person', 'acronym-titlecase');
    //ludwig van beethovan
    ts.match('#TitleCase (van|al|bin) #TitleCase')
      .canBe('#Person')
      .tag('Person', 'correction-titlecase-van-titlecase');
    ts.match('#TitleCase (de|du) la? #TitleCase')
      .canBe('#Person')
      .tag('Person', 'correction-titlecase-van-titlecase');
    //Morgan Shlkjsfne
    ts.match('#Person #TitleCase')
      .match('#TitleCase #Noun')
      .canBe('#Person')
      .tag('Person', 'correction-person-titlecase');
    //pope francis
    ts.match('(lady|queen|sister) #TitleCase')
      .ifNo('#Date')
      .ifNo('#Honorific')
      .tag('#FemaleName', 'lady-titlecase');
    ts.match('(king|pope|father) #TitleCase')
      .ifNo('#Date')
      .tag('#MaleName', 'correction-poe');
  }

  //j.k Rowling
  ts.match('#Noun van der? #Noun')
    .canBe('#Person')
    .tag('#Person', 'von der noun');
  //king of spain
  ts.match('(king|queen|prince|saint|lady) of? #Noun')
    .canBe('#Person')
    .tag('#Person', 'king-of-noun');
  //mr X
  ts.match('#Honorific #Acronym').tag('Person', 'Honorific-TitleCase');
  //peter II
  ts.match('#Person #Person the? #RomanNumeral').tag('Person', 'correction-roman-numeral');

  //'Professor Fink', 'General McCarthy'
  ts.match('#Honorific #Person').tag('Person', 'Honorific-Person');

  //remove single 'mr'
  ts.match('^#Honorific$').unTag('Person', 'single-honorific');

  return ts;
};

module.exports = person_step;

},{}],117:[function(_dereq_,module,exports){
'use strict';
//orgwords like 'bank' in 'Foo Bank'
let orgWords = _dereq_('../../world/more-data/orgWords');

//could this word be an organization
const maybeOrg = function(t) {
  //must be a noun
  if (!t.tags.Noun) {
    return false;
  }
  //can't be these things
  if (t.tags.Pronoun || t.tags.Comma || t.tags.Possessive || t.tags.Place) {
    return false;
  }
  //must be one of these
  if (t.tags.TitleCase || t.tags.Organization || t.tags.Acronym) {
    return true;
  }
  return false;
};

const organization_step = ts => {
  for (let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    if (orgWords.hasOwnProperty(t.root) === true) {
      //eg. Toronto University
      let lastTerm = ts.terms[i - 1];
      if (lastTerm && maybeOrg(lastTerm)) {
        lastTerm.tag('Organization', 'org-word-1');
        t.tag('Organization', 'org-word-2');
        continue;
      }
      //eg. University of Toronto
      let nextTerm = ts.terms[i + 1];
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
'use strict';
//tag the words between '(' and ')' as #Parentheses
const parenthesesStep = function(ts) {
  ts.terms.forEach((t, i) => {
    if (t.tags.StartBracket) {
      for(let o = i; o < ts.terms.length; o += 1) {
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
const isPlural = _dereq_('../../subset/nouns/isPlural');

const pluralStep = function(ts) {
  for (let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    if (t.tags.Noun) {
      //skip existing fast
      if (t.tags.Singular || t.tags.Plural) {
        continue;
      }
      //check if it's plural
      let plural = isPlural(t, t.world); //can be null if unknown
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
'use strict';
//regs-
const numericCardinal = /^\$?[0-9,](\.[0-9])?/;
const isOrdinal = /[0-9](st|nd|rd|th)$/;
// const hasText = /^[a-z]/;

const value_step = function(ts) {
  for(let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
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
  }
  //5 books
  ts.match('#Cardinal [#Plural]').tag('Unit', 'cardinal-plural');
  //5th book
  ts.match('#Ordinal [#Singular]').tag('Unit', 'ordinal-singular');
  //1 book
  ts.match('(one|first|1|1st) [#Singular]').tag('Unit', 'one-singular');
  return ts;
};

module.exports = value_step;

},{}],121:[function(_dereq_,module,exports){
'use strict';

//mostly pos-corections here
const corrections = function(ts) {
  //ambig prepositions/conjunctions
  if (ts.has('so')) {
    //so funny
    ts.match('so #Adjective').match('so').tag('Adverb', 'so-adv');
    //so the
    ts.match('so #Noun').match('so').tag('Conjunction', 'so-conj');
    //do so
    ts.match('do so').match('so').tag('Noun', 'so-noun');
  }
  if (ts.has('all')) {
    //all students
    ts.match('[all] #Determiner? #Noun').tag('Adjective', 'all-noun');
    //it all fell apart
    ts.match('[all] #Verb').tag('Adverb', 'all-verb');
  }
  //the ambiguous word 'that' and 'which'
  if (ts.has('(that|which)')) {
    //remind john that
    ts.match('#Verb #Adverb? #Noun (that|which)').lastTerm().tag('Preposition', 'that-prep');
    //that car goes
    ts.match('that #Noun #Verb').firstTerm().tag('Determiner', 'that-determiner');
    //work, which has been done.
    ts.match('#Comma [which] (#Pronoun|#Verb)').tag('Preposition', 'which-copula');
  //things that provide
  // ts.match('#Plural (that|which) #Adverb? #Verb').term(1).tag('Preposition', 'noun-that');
  }
  //Determiner-signals
  if (ts.has('#Determiner')) {
    //the wait to vote
    ts.match('(the|this) [#Verb] #Preposition .').tag('Noun', 'correction-determiner1');
    //the swim
    ts.match('(the|those|these) (#Infinitive|#PresentTense|#PastTense)').term(1).tag('Noun', 'correction-determiner2');
    //a staggering cost
    ts.match('(a|an) [#Gerund]').tag('Adjective', 'correction-a|an');
    ts.match('(a|an) #Adjective (#Infinitive|#PresentTense)').term(2).tag('Noun', 'correction-a|an2');
    //some pressing issues
    ts.match('some [#Verb] #Plural').tag('Noun', 'correction-determiner6');
    //the test string
    ts.match('#Determiner [#Infinitive] #Noun').tag('Noun', 'correction-determiner7');
    //the orange.
    ts.match('#Determiner #Adjective$').not('(#Comparative|#Superlative)').term(1).tag('Noun', 'the-adj-1');
    //the orange is
    ts.match('#Determiner [#Adjective] (#Copula|#PastTense|#Auxiliary)').tag('Noun', 'the-adj-2');
    //the nice swim
    ts.match('(the|this|those|these) #Adjective [#Verb]').tag('Noun', 'the-adj-verb');
    //the truly nice swim
    ts.match('(the|this|those|these) #Adverb #Adjective [#Verb]').tag('Noun', 'correction-determiner4');
    //a stream runs
    ts.match('(the|this|a|an) [#Infinitive] #Adverb? #Verb').tag('Noun', 'correction-determiner5');
    //a sense of
    ts.match('#Determiner [#Verb] of').tag('Noun', 'the-verb-of');
    //the threat of force
    ts.match('#Determiner #Noun of [#Verb]').tag('Noun', 'noun-of-noun');
    //a close
    ts.match('#Determiner #Adverb? [close]').tag('Adjective', 'a-close');
    //did a 900, paid a 20
    ts.match('#Verb (a|an) [#Value]').tag('Singular', 'a-value');
    //a tv show
    ts.match('(a|an) #Noun [#Infinitive]').tag('Noun', 'a-noun-inf');
  }

  //like
  if (ts.has('like')) {
    ts.match('just [like]').tag('Preposition', 'like-preposition');
    //folks like her
    ts.match('#Noun [like] #Noun').tag('Preposition', 'noun-like');
    //look like
    ts.match('#Verb [like]').tag('Adverb', 'verb-like');
    //exactly like
    ts.match('#Adverb like').not('(really|generally|typically|usually|sometimes|often) like').lastTerm().tag('Adverb', 'adverb-like');
  }

  if (ts.has('#Value')) {
    //half a million
    ts.match('half a? #Value').tag('Value', 'half-a-value'); //quarter not ready
    ts.match('#Value and a (half|quarter)').tag('Value', 'value-and-a-half');
    //all values are either ordinal or cardinal
    // ts.match('#Value').match('!#Ordinal').tag('#Cardinal', 'not-ordinal');
    //money
    ts.match('#Value+ #Currency').tag('Money', 'value-currency').lastTerm().tag('Unit', 'money-unit');
    ts.match('#Money and #Money #Currency?').tag('Money', 'money-and-money');
    //1 800 PhoneNumber
    ts.match('1 #Value #PhoneNumber').tag('PhoneNumber', '1-800-Value');
    //(454) 232-9873
    ts.match('#NumericValue #PhoneNumber').tag('PhoneNumber', '(800) PhoneNumber');
    //two hundredth
    ts.match('#TextValue+').match('#Cardinal+ #Ordinal').tag('Ordinal', 'two-hundredth');
  }

  if (ts.has('#Noun')) {
    //'more' is not always an adverb
    ts.match('more #Noun').tag('Noun', 'more-noun');
    //the word 'second'
    ts.match('[second] #Noun').not('#Honorific').unTag('Unit').tag('Ordinal', 'second-noun');
    //he quickly foo
    ts.match('#Noun #Adverb [#Noun]').tag('Verb', 'correction');
    //fix for busted-up phrasalVerbs
    ts.match('#Noun [#Particle]').tag('Preposition', 'repair-noPhrasal');
    //John & Joe's
    ts.match('#Noun (&|n) #Noun').tag('Organization', 'Noun-&-Noun');
    //Aircraft designer
    ts.match('#Noun #Actor').tag('Actor', 'thing-doer');
    //this rocks
    ts.match('(this|that) [#Plural]').tag('PresentTense', 'this-verbs');
    //by a bear.
    ts.match('#Determiner #Infinitive$').lastTerm().tag('Noun', 'a-inf');
    //the western line
    ts.match('#Determiner [(western|eastern|northern|southern|central)] #Noun').tag('Noun', 'western-line');
    ts.match('(#Determiner|#Value) [(linear|binary|mobile|lexical|technical|computer|scientific|formal)] #Noun').tag('Noun', 'technical-noun');
    //organization
    if (ts.has('#Organization')) {
      ts.match('#Organization of the? #TitleCase').tag('Organization', 'org-of-place');
      ts.match('#Organization #Country').tag('Organization', 'org-country');
      ts.match('(world|global|international|national|#Demonym) #Organization').tag('Organization', 'global-org');
    }
    if (ts.has('#Possessive')) {
      //my buddy
      ts.match('#Possessive [#FirstName]').unTag('Person', 'possessive-name');
      //spencer kelly's
      ts.match('#FirstName #Acronym? #Possessive').notIf('#Comma').match('#FirstName #Acronym? #LastName').tag('Possessive');
      //Super Corp's fundraiser
      ts.match('#Organization+ #Possessive').notIf('#Comma').tag('Possessive');
      //Los Angeles's fundraiser
      ts.match('#Place+ #Possessive').notIf('#Comma').tag('Possessive');
    }
  }

  if (ts.has('#Verb')) {
    //still make
    ts.match('[still] #Verb').tag('Adverb', 'still-verb');
    //'u' as pronoun
    ts.match('[u] #Verb').tag('Pronoun', 'u-pronoun-1');
    //is no walk
    ts.match('is no [#Verb]').tag('Noun', 'is-no-verb');
    //different views than
    ts.match('[#Verb] than').tag('Noun', 'correction');
    //her polling
    ts.match('#Possessive [#Verb]').tag('Noun', 'correction-possessive');
    //there are reasons
    ts.match('there (are|were) #Adjective? [#PresentTense]').tag('Plural', 'there-are');
    //jack seems guarded
    ts.match('#Singular (seems|appears) #Adverb? [#PastTense$]').tag('Adjective', 'seems-filled');

    if (ts.has('(who|what|where|why|how|when)')) {
      //the word 'how'
      ts.match('^how').tag('QuestionWord', 'how-question').tag('QuestionWord', 'how-question');
      ts.match('how (#Determiner|#Copula|#Modal|#PastTense)').term(0).tag('QuestionWord', 'how-is');
      // //the word 'which'
      ts.match('^which').tag('QuestionWord', 'which-question').tag('QuestionWord', 'which-question');
      ts.match('which . (#Noun)+ #Pronoun').term(0).tag('QuestionWord', 'which-question2');
      ts.match('which').tag('QuestionWord', 'which-question3');
      //where

      //how he is driving
      let word = ts.match('#QuestionWord #Noun #Copula #Adverb? (#Verb|#Adjective)').firstTerm();
      word.unTag('QuestionWord').tag('Conjunction', 'how-he-is-x');
      //when i go fishing
      word = ts.match('#QuestionWord #Noun #Adverb? #Infinitive not? #Gerund').firstTerm();
      word.unTag('QuestionWord').tag('Conjunction', 'when i go fishing');
    }

    if (ts.has('#Copula')) {
      //is eager to go
      ts.match('#Copula #Adjective to #Verb').match('#Adjective to').tag('Verb', 'correction');
      //is mark hughes
      ts.match('#Copula [#Infinitive] #Noun').tag('Noun', 'is-pres-noun');

      ts.match('[#Infinitive] #Copula').tag('Noun', 'infinitive-copula');
      //sometimes adverbs - 'pretty good','well above'
      ts.match('#Copula (pretty|dead|full|well) (#Adjective|#Noun)').notIf('#Comma').tag('#Copula #Adverb #Adjective', 'sometimes-adverb');
      //sometimes not-adverbs
      ts.match('#Copula [(just|alone)$]').tag('Adjective', 'not-adverb');
      //jack is guarded
      ts.match('#Singular is #Adverb? [#PastTense$]').tag('Adjective', 'is-filled');
    }
    //went to sleep
    // ts.match('#Verb to #Verb').lastTerm().tag('Noun', 'verb-to-verb');
    //support a splattering of auxillaries before a verb
    let advb = '(#Adverb|not)+?';
    if (ts.has(advb)) {
      //had walked
      ts.match(`(has|had) ${advb} #PastTense`).not('#Verb$').tag('Auxiliary', 'had-walked');
      //was walking
      ts.match(`#Copula ${advb} #Gerund`).not('#Verb$').tag('Auxiliary', 'copula-walking');
      //been walking
      ts.match(`(be|been) ${advb} #Gerund`).not('#Verb$').tag('Auxiliary', 'be-walking');
      //would walk
      ts.match(`(#Modal|did) ${advb} #Verb`).not('#Verb$').tag('Auxiliary', 'modal-verb');
      //would have had
      ts.match(`#Modal ${advb} have ${advb} had ${advb} #Verb`).not('#Verb$').tag('Auxiliary', 'would-have');
      //would be walking
      ts.match(`(#Modal) ${advb} be ${advb} #Verb`).not('#Verb$').tag('Auxiliary', 'would-be');
      //would been walking
      ts.match(`(#Modal|had|has) ${advb} been ${advb} #Verb`).not('#Verb$').tag('Auxiliary', 'would-be');
    //infinitive verbs suggest plural nouns - 'XYZ walk to the store'
    // r.match(`#Singular+ #Infinitive`).match('#Singular+').tag('Plural', 'infinitive-make-plural');
    }
    //fall over
    ts.match('#PhrasalVerb #PhrasalVerb').lastTerm().tag('Particle', 'phrasal-particle');
    if (ts.has('#Gerund')) {
      //walking is cool
      ts.match('#Gerund #Adverb? not? #Copula').firstTerm().tag('Activity', 'gerund-copula');
      //walking should be fun
      ts.match('#Gerund #Modal').firstTerm().tag('Activity', 'gerund-modal');
      //running-a-show
      ts.match('#Gerund #Determiner [#Infinitive]').tag('Noun', 'running-a-show');
    //setting records
    // ts.match('#Gerund [#PresentTense]').tag('Plural', 'setting-records');
    }
    //will be cool -> Copula
    if (ts.has('will #Adverb? not? #Adverb? be')) {
      //will be running (not copula
      if (ts.has('will #Adverb? not? #Adverb? be #Gerund') === false) {
        //tag it all
        ts.match('will not? be').tag('Copula', 'will-be-copula');
        //for more complex forms, just tag 'be'
        ts.match('will #Adverb? not? #Adverb? be #Adjective').match('be').tag('Copula', 'be-copula');
      }
    }
  }

  if (ts.has('#Adjective')) {
    //still good
    ts.match('still #Adjective').match('still').tag('Adverb', 'still-advb');
    //big dreams, critical thinking
    ts.match('#Adjective [#PresentTense]').tag('Noun', 'adj-presentTense');
    //will secure our
    ts.match('will [#Adjective]').tag('Verb', 'will-adj');
    //cheering hard - dropped -ly's
    ts.match('#PresentTense (hard|quick|long|bright|slow)').lastTerm().tag('Adverb', 'lazy-ly');
    //his fine
    ts.match('(his|her|its) [#Adjective]').tag('Noun', 'his-fine');
    //
    ts.match('#Noun #Adverb? [left]').tag('PastTense', 'left-verb');
  }

  if (ts.has('#TitleCase')) {
    //FitBit Inc
    ts.match('#TitleCase (ltd|co|inc|dept|assn|bros)').tag('Organization', 'org-abbrv');
    //Foo District
    ts
      .match('#TitleCase+ (district|region|province|county|prefecture|municipality|territory|burough|reservation)')
      .tag('Region', 'foo-district');
    //District of Foo
    ts
      .match('(district|region|province|municipality|territory|burough|state) of #TitleCase')
      .tag('Region', 'district-of-Foo');
  }

  if (ts.has('#Hyphenated')) {
    //air-flow
    ts.match('#Hyphenated #Hyphenated').match('#Noun #Verb').tag('Noun', 'hyphen-verb');
    let hyphen = ts.match('#Hyphenated+');
    if (hyphen.has('#Expression')) {
      //ooh-wee
      hyphen.tag('Expression', 'ooh-wee');
    }
  }

  if (ts.has('#Place')) {
    //West Norforlk
    ts.match('(west|north|south|east|western|northern|southern|eastern)+ #Place').tag('Region', 'west-norfolk');
    //some us-state acronyms (exlude: al, in, la, mo, hi, me, md, ok..)
    ts.match('#City [#Acronym]').match('(al|ak|az|ar|ca|ct|dc|fl|ga|id|il|nv|nh|nj|ny|oh|or|pa|sc|tn|tx|ut|vt|pr)').tag('Region', 'us-state');
  }
  //misc:
  //foot/feet
  ts.match('(foot|feet)').tag('Noun', 'foot-noun');
  ts.match('#Value (foot|feet)').term(1).tag('Unit', 'foot-unit');
  //'u' as pronoun
  ts.match('#Conjunction [u]').tag('Pronoun', 'u-pronoun-2');
  //'a/an' can mean 1 - "a hour"
  ts.match('(a|an) (#Duration|hundred|thousand|million|billion|trillion|quadrillion|quintillion|sextillion|septillion)').ifNo('#Plural').term(0).tag('Value', 'a-is-one');
  //swear-words as non-expression POS
  //nsfw
  ts.match('holy (shit|fuck|hell)').tag('Expression', 'swears-expression');
  ts.match('#Determiner (shit|damn|hell)').term(1).tag('Noun', 'swears-noun');
  ts.match('(shit|damn|fuck) (#Determiner|#Possessive|them)').term(0).tag('Verb', 'swears-verb');
  ts.match('#Copula fucked up?').not('#Copula').tag('Adjective', 'swears-adjective');
  //6 am
  ts.match('#Holiday (day|eve)').tag('Holiday', 'holiday-day');
  //timezones
  ts.match('(standard|daylight|summer|eastern|pacific|central|mountain) standard? time').tag('Time', 'timezone');
  //canadian dollar, Brazilian pesos
  ts.match('#Demonym #Currency').tag('Currency', 'demonym-currency');
  //about to go
  ts.match('about to #Adverb? #Verb').match('about to').tag(['Auxiliary', 'Verb'], 'about-to');
  //Doctor john smith jr
  ts.match('#Honorific #Person').tag('Person', 'honorific-person');
  ts.match('#Person (jr|sr|md)').tag('Person', 'person-honorific');
  //right of way
  ts.match('(right|rights) of .').tag('Noun', 'right-of');
  return ts;
};

module.exports = corrections;

},{}],122:[function(_dereq_,module,exports){

//a specificly-named thing, that should be capitalized
const properNoun = function(ts) {
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

//patterns are .match() statements to be run after the tagger
const posthoc = function(ts) {
  const patterns = ts.world.patterns;
  Object.keys(patterns).forEach((k) => {
    ts.match(k).tag(patterns[k], 'post-hoc: ' + k);
  });
  return ts;
};
module.exports = posthoc;

},{}],124:[function(_dereq_,module,exports){
'use strict';
const fixContraction = _dereq_('./fix');

const irregulars = {
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
};

//check irregulars
const checkIrregulars = ts => {
  for (let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    if (irregulars[t.normal]) {
      let fix = irregulars[t.normal];
      ts = fixContraction(ts, fix, i);
      i += fix.length - 1;
    }
  }
  return ts;
};
module.exports = checkIrregulars;

},{"./fix":128}],125:[function(_dereq_,module,exports){
'use strict';
const fixContraction = _dereq_('./fix');
const splitContraction = _dereq_('./split');

//these are always contractions
const blacklist = {
  'that\'s': true,
  'there\'s': true
};
const are = {
  we: true,
  they: true,
  you: true
};

// "'s" may be a contraction or a possessive
// 'spencer's house' vs 'spencer's good'
const isPossessive = (ts, i) => {
  let t = ts.terms[i];
  let next_t = ts.terms[i + 1];
  //a pronoun can't be possessive - "he's house"
  if (t.tags.Pronoun || t.tags.QuestionWord) {
    return false;
  }
  if (blacklist[t.normal]) {
    return false;
  }
  //if end of sentence, it is possessive - "was spencer's"
  if (!next_t) {
    return true;
  }
  //an infinitive is probably mis-tagged - 'jamie's bite'
  if (next_t.tags.Infinitive) {
    return true;
  }
  //a gerund suggests 'is walking'
  if (next_t.tags.VerbPhrase) {
    return false;
  }
  //spencer's house
  if (next_t.tags.Noun) {
    return true;
  }
  //rocket's red glare
  if (next_t.tags.Adjective && ts.terms[i + 2] && ts.terms[i + 2].tags.Noun) {
    return true;
  }
  //an adjective suggests 'is good'
  if (next_t.tags.Adjective || next_t.tags.Adverb || next_t.tags.Verb) {
    return false;
  }
  return false;
};

// you ain't / i ain't.
const isAre = function(ts, i) {
  let arr = ['is', 'not']; //default
  //get what's it 'about'
  if (ts.terms[i - 1]) {
    let about = ts.terms[i - 1];
    //go back one more..
    if (about.tags.Adverb && ts.terms[i - 2]) {
      about = ts.terms[i - 2];
    }
    if (about.tags.Plural || are[about.normal] === true) {
      arr[0] = 'are';
    }
  }
  return arr;
};

//handle ambigous contraction "'s"
const hardOne = ts => {
  for (let i = 0; i < ts.terms.length; i++) {
    //skip existing
    if (ts.terms[i].silent_term) {
      continue;
    }
    if (ts.terms[i].normal === 'ain\'t' || ts.terms[i].normal === 'aint') {
      let arr = isAre(ts, i);
      ts = fixContraction(ts, arr, i);
      i += 1;
      continue;
    }
    let parts = splitContraction(ts.terms[i]);
    if (parts) {
      //have we found a hard one
      if (parts.end === 's') {
        //spencer's house
        if (isPossessive(ts, i)) {
          ts.terms[i].tag('#Possessive', 'hard-contraction');
          continue;
        }
        let arr = [parts.start, 'is'];
        if (ts.terms[i + 1]) {
          let str = ts.terms[i].normal;
          //he's walking -> is/was
          if (ts.match(str + ' (#Negative|#Adverb|#Auxiliary)+? #Gerund').found) {
            arr = [parts.start, 'is'];
          } else if (ts.match(str + ' (#Negative|#Adverb|#Auxiliary)+? #Verb').found) {
            //is vs has ('he's got milk')
            arr = [parts.start, 'has'];
          }
        }
        ts = fixContraction(ts, arr, i);
        i += 1;
      }
    }
  }
  return ts;
};

module.exports = hardOne;

},{"./fix":128,"./split":129}],126:[function(_dereq_,module,exports){
'use strict';
const fixContraction = _dereq_('./fix');
const split = _dereq_('./split');

//the formulaic contraction types:
const easy_ends = {
  ll: 'will',
  // 'd': 'would',
  ve: 'have',
  re: 'are',
  m: 'am',
  'n\'t': 'not'
//these ones are a bit tricksier:
// 't': 'not',
// 's': 'is' //or was
};

//unambiguous contractions, like "'ll"
const easyOnes = ts => {
  for (let i = 0; i < ts.terms.length; i++) {
    //skip existing
    if (ts.terms[i].silent_term) {
      continue;
    }
    let parts = split(ts.terms[i]);
    if (parts) {
      parts.start = parts.start.toLowerCase();

      //make sure its an easy one
      if (easy_ends[parts.end]) {
        let arr = [parts.start, easy_ends[parts.end]];
        ts = fixContraction(ts, arr, i);
        i += 1;
      }

      //handle i'd -> 'i would' vs 'i had'
      if (parts.end === 'd') {
        //assume 'would'
        let arr = [parts.start, 'would'];
        //if next verb is past-tense, choose 'had'
        if (ts.terms[i + 1] && ts.terms[i + 1].tags.PastTense) {
          arr[1] = 'had';
        }
        //also support '#Adverb #PastTense'
        if (ts.terms[i + 2] && ts.terms[i + 2].tags.PastTense && ts.terms[i + 1].tags.Adverb) {
          arr[1] = 'had';
        }
        ts = fixContraction(ts, arr, i);
        i += 1;
      }
    }
  }
  return ts;
};
module.exports = easyOnes;

},{"./fix":128,"./split":129}],127:[function(_dereq_,module,exports){
'use strict';
const fixContraction = _dereq_('./fix');
const Term = _dereq_('../../../term');

const hasDash = function(t) {
  let dashes = /(-|–|—)/;
  return dashes.test(t.whitespace.before) || dashes.test(t.whitespace.after);
};

const numberRange = ts => {
  //try to support number range, like 5-9, this way:
  ts.match('#Hyphenated #Hyphenated').match('#NumericValue #NumericValue').tag('NumberRange');
  //otherwise, loop through and find them
  for (let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    //skip existing
    if (t.silent_term) {
      continue;
    }
    if (t.tags.TextValue) {
      continue;
    }
    //hyphens found in whitespace - '5 - 7'
    if (t.tags.Value && ts.terms[i + 1] && i > 0 && (hasDash(t) || hasDash(ts.terms[i - 1])) && ts.terms[i - 1].tags.Value) {
      let to = new Term('', ts.world);
      to.silent_term = 'to';
      ts.insertAt(i, to);
      ts.terms[i - 1].tag('NumberRange', 'number-number1');
      ts.terms[i].tag('NumberRange', 'number-number2');
      ts.terms[i].whitespace.before = '';
      ts.terms[i].whitespace.after = '';
      ts.terms[i + 1].tag('NumberRange', 'number-number3');
      return ts;
    }
    //add a silent term
    if (t.tags.NumberRange) {
      let arr = t.text.split(/(-|–|—)/);
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
const Term = _dereq_('../../../term');

const tags = {
  not: 'Negative',
  will: 'Verb',
  would: 'Modal',
  have: 'Verb',
  are: 'Copula',
  is: 'Copula',
  am: 'Verb'
};
//make sure the newly created term gets the easy tags
const easyTag = t => {
  if (tags[t.silent_term]) {
    t.tag(tags[t.silent_term]);
  }
};

//add a silent term
const fixContraction = (ts, parts, i) => {
  //add the interpretation to the contracted term
  let one = ts.terms[i];
  one.silent_term = parts[0];
  //tag it as a contraction
  one.tag('Contraction', 'tagger-contraction');

  //add a new empty term
  if (parts[1]) {
    let two = new Term('', ts.world);
    two.silent_term = parts[1];
    two.tag('Contraction', 'tagger-contraction');
    ts.insertAt(i + 1, two);
    //ensure new term has no auto-whitspace
    two.whitespace.before = '';
    two.whitespace.after = '';
    easyTag(two);
  }

  //potentially it's three-contracted-terms, like 'dunno'
  if (parts[2]) {
    let three = new Term('', ts.world);
    three.silent_term = parts[2];
    // ts.terms.push(three);
    ts.insertAt(i + 2, three);
    three.tag('Contraction', 'tagger-contraction');
    easyTag(three);
  }

  return ts;
};

module.exports = fixContraction;

},{"../../../term":143}],129:[function(_dereq_,module,exports){
'use strict';
const contraction = /^([a-z]+)'([a-z][a-z]?)$/i;
const possessive = /[a-z]s'$/i;

const allowed = {
  re: 1,
  ve: 1,
  ll: 1,
  t: 1,
  s: 1,
  d: 1,
  m: 1
};

/** interpret a terms' contraction */
const splitContraction = t => {
  //handle this irregular one (shared trailing n)
  if (t.normal === 'can\'t') {
    return {
      start: 'can',
      end: 'n\'t'
    };
  }
  let parts = t.normal.match(contraction);
  if (parts && parts[1] && allowed[parts[2]] === 1) {
    //handle n't
    if (parts[2] === 't' && parts[1].match(/[a-z]n$/)) {
      parts[1] = parts[1].replace(/n$/, '');
      parts[2] = 'n\'t'; //dunno..
    }
    //fix titlecase
    if (t.tags.TitleCase === true) {
      parts[1] = parts[1].replace(/^[a-z]/, x => x.toUpperCase());
    }
    return {
      start: parts[1],
      end: parts[2]
    };
  }
  // "flanders' house"
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
//yep,
//https://github.com/mathiasbynens/emoji-regex/blob/master/index.js
module.exports = /(?:0\u20E3\n1\u20E3|2\u20E3|3\u20E3|4\u20E3|5\u20E3|6\u20E3|7\u20E3|8\u20E3|9\u20E3|#\u20E3|\*\u20E3|\uD83C(?:\uDDE6\uD83C(?:\uDDE8|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDEE|\uDDF1|\uDDF2|\uDDF4|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFC|\uDDFD|\uDDFF)|\uDDE7\uD83C(?:\uDDE6|\uDDE7|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDEE|\uDDEF|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFB|\uDDFC|\uDDFE|\uDDFF)|\uDDE8\uD83C(?:\uDDE6|\uDDE8|\uDDE9|\uDDEB|\uDDEC|\uDDED|\uDDEE|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF5|\uDDF7|\uDDFA|\uDDFB|\uDDFC|\uDDFD|\uDDFE|\uDDFF)|\uDDE9\uD83C(?:\uDDEA|\uDDEC|\uDDEF|\uDDF0|\uDDF2|\uDDF4|\uDDFF)|\uDDEA\uD83C(?:\uDDE6|\uDDE8|\uDDEA|\uDDEC|\uDDED|\uDDF7|\uDDF8|\uDDF9|\uDDFA)|\uDDEB\uD83C(?:\uDDEE|\uDDEF|\uDDF0|\uDDF2|\uDDF4|\uDDF7)|\uDDEC\uD83C(?:\uDDE6|\uDDE7|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDEE|\uDDF1|\uDDF2|\uDDF3|\uDDF5|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFC|\uDDFE)|\uDDED\uD83C(?:\uDDF0|\uDDF2|\uDDF3|\uDDF7|\uDDF9|\uDDFA)|\uDDEE\uD83C(?:\uDDE8|\uDDE9|\uDDEA|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF6|\uDDF7|\uDDF8|\uDDF9)|\uDDEF\uD83C(?:\uDDEA|\uDDF2|\uDDF4|\uDDF5)|\uDDF0\uD83C(?:\uDDEA|\uDDEC|\uDDED|\uDDEE|\uDDF2|\uDDF3|\uDDF5|\uDDF7|\uDDFC|\uDDFE|\uDDFF)|\uDDF1\uD83C(?:\uDDE6|\uDDE7|\uDDE8|\uDDEE|\uDDF0|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFB|\uDDFE)|\uDDF2\uD83C(?:\uDDE6|\uDDE8|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF5|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFB|\uDDFC|\uDDFD|\uDDFE|\uDDFF)|\uDDF3\uD83C(?:\uDDE6|\uDDE8|\uDDEA|\uDDEB|\uDDEC|\uDDEE|\uDDF1|\uDDF4|\uDDF5|\uDDF7|\uDDFA|\uDDFF)|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C(?:\uDDE6|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF7|\uDDF8|\uDDF9|\uDDFC|\uDDFE)|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C(?:\uDDEA|\uDDF4|\uDDF8|\uDDFA|\uDDFC)|\uDDF8\uD83C(?:\uDDE6|\uDDE7|\uDDE8|\uDDE9|\uDDEA|\uDDEC|\uDDED|\uDDEE|\uDDEF|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF7|\uDDF8|\uDDF9|\uDDFB|\uDDFD|\uDDFE|\uDDFF)|\uDDF9\uD83C(?:\uDDE6|\uDDE8|\uDDE9|\uDDEB|\uDDEC|\uDDED|\uDDEF|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF7|\uDDF9|\uDDFB|\uDDFC|\uDDFF)|\uDDFA\uD83C(?:\uDDE6|\uDDEC|\uDDF2|\uDDF8|\uDDFE|\uDDFF)|\uDDFB\uD83C(?:\uDDE6|\uDDE8|\uDDEA|\uDDEC|\uDDEE|\uDDF3|\uDDFA)|\uDDFC\uD83C(?:\uDDEB|\uDDF8)|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C(?:\uDDEA|\uDDF9)|\uDDFF\uD83C(?:\uDDE6|\uDDF2|\uDDFC)))|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]/g;

},{}],131:[function(_dereq_,module,exports){
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
'use strict';
//markov-like stats about co-occurance, for hints about unknown terms
//basically, a little-bit better than the noun-fallback
//just top n-grams from nlp tags, generated from nlp-corpus

//after this word, here's what happens usually
let afterThisWord = {
  i: 'Verb', //44% //i walk..
  first: 'Noun', //50% //first principles..
  it: 'Verb', //33%
  there: 'Verb', //35%
  // to: 'Verb', //32%
  not: 'Verb', //33%
  because: 'Noun', //31%
  if: 'Noun', //32%
  but: 'Noun', //26%
  who: 'Verb', //40%
  this: 'Noun', //37%
  his: 'Noun', //48%
  when: 'Noun', //33%
  you: 'Verb', //35%
  very: 'Adjective', // 39%
  old: 'Noun', //51%
  never: 'Verb', //42%
  before: 'Noun', //28%
};

//in advance of this word, this is what happens usually
let beforeThisWord = {
  there: 'Verb', //23% // be there
  me: 'Verb', //31% //see me
  man: 'Adjective', // 80% //quiet man
  only: 'Verb', //27% //sees only
  him: 'Verb', //32% //show him
  were: 'Noun', //48% //we were
  // what: 'Verb', //25% //know what
  took: 'Noun', //38% //he took
  himself: 'Verb', //31% //see himself
  went: 'Noun', //43% //he went
  who: 'Noun', //47% //person who
  jr: 'Person'
};

//following this POS, this is likely
let afterThisPos = {
  Adjective: 'Noun', //36% //blue dress
  Possessive: 'Noun', //41% //his song
  Determiner: 'Noun', //47%
  Adverb: 'Verb', //20%
  // Person: 'Verb', //40%
  Pronoun: 'Verb', //40%
  Value: 'Noun', //47%
  Ordinal: 'Noun', //53%
  Modal: 'Verb', //35%
  Superlative: 'Noun', //43%
  Demonym: 'Noun', //38%
  // Organization: 'Verb', //33%
  Honorific: 'Person', //
// FirstName: 'Person', //
};

//in advance of this POS, this is likely
let beforeThisPos = {
  Copula: 'Noun', //44% //spencer is
  PastTense: 'Noun', //33% //spencer walked
  Conjunction: 'Noun', //36%
  Modal: 'Noun', //38%
  PluperfectTense: 'Noun', //40%
  PerfectTense: 'Verb', //32%
// LastName: 'FirstName', //
};
module.exports = {
  beforeThisWord: beforeThisWord,
  afterThisWord: afterThisWord,

  beforeThisPos: beforeThisPos,
  afterThisPos: afterThisPos
};

},{}],133:[function(_dereq_,module,exports){
'use strict';
//regex suffix patterns and their most common parts of speech,
//built using wordnet, by spencer kelly.
//this mapping shrinks-down the uglified build
const Adj = 'Adjective';
const Inf = 'Infinitive';
const Pres = 'PresentTense';
const Sing = 'Singular';
const Past = 'PastTense';
const Adverb = 'Adverb';
const Exp = 'Expression';
const Actor = 'Actor';
const Verb = 'Verb';
const Noun = 'Noun';
const Last = 'LastName';
//the order here matters.

//regexes indexed by mandated last-character
module.exports = {
  a: [
    [/.[aeiou]na$/, Noun],
    [/.[oau][wvl]ska$/, Last], //polish (female)
    [/.[^aeiou]ica$/, Sing],
    [/^([hyj]a)+$/, Exp] //hahah
  ],
  c: [
    [/.[^aeiou]ic$/, Adj]
  ],
  d: [
    [/.[ia]sed$/, Adj],
    [/.[gt]led$/, Adj],
    [/.[aeiou][td]ed$/, Past],
    [/.[^aeiou]led$/, Past], //rumbled
    [/[^aeiou]ard$/, Sing],
    [/[aeiou][^aeiou]id$/, Adj],
    [/[aeiou]c?ked$/, Past], //hooked
    [/[^aeiou][aeiou][tvx]ed$/, Past], //boxed
    [/[aeiou]red$/, Past], //cheered
    [/.[vrl]id$/, Adj]
  ],
  e: [
    [/.[lnr]ize$/, Inf],
    [/.[^aeiou]ise$/, Inf],
    [/.[aeiou]te$/, Inf],
    [/.[^aeiou][ai]ble$/, Adj],
    [/.[^aeiou]eable$/, Adj],
    [/.[^aeiou]ive$/, Adj]
  ],
  h: [
    [/.[^aeiouf]ish$/, Adj],
    [/.v[iy]ch$/, Last], //east-europe
    [/^ug?h+$/, Exp], //uhh
    [/^uh[ -]?oh$/, Exp] //uhoh
  ],
  i: [
    [/.[oau][wvl]ski$/, Last] //polish (male)
  ],
  k: [
    [/^(k)+$/, Exp] //kkkk
  ],
  l: [
    [/.[gl]ial$/, Adj],
    [/.[^aeiou]ful$/, Adj],
    [/.[nrtumcd]al$/, Adj],
    [/.[^aeiou][ei]al$/, Adj]
  ],
  m: [
    [/.[^aeiou]ium$/, Sing],
    [/[^aeiou]ism$/, Sing],
    [/^h*u*m+$/, Exp], //mmmmmmm / ummmm / huuuuuummmmmm
    [/^\d+ ?[ap]m$/, 'Date']
  ],
  n: [
    [/.[lsrnpb]ian$/, Adj],
    [/[^aeiou]ician$/, Actor],
    [/okin$/, 'Gerund']
  ],
  o: [
    [/^no+$/, Exp], //noooo
    [/^(yo)+$/, Exp], //yoyo
    [/^woo+[pt]?$/, Exp] //woo
  ],
  r: [
    [/.[ilk]er$/, 'Comparative'],
    [/[aeiou][pns]er$/, Sing],
    [/[^i]fer$/, Inf],
    [/.[^aeiou][ao]pher$/, Actor]
  ],
  t: [
    [/.[di]est$/, 'Superlative'],
    [/.[icldtgrv]ent$/, Adj],
    [/[aeiou].*ist$/, Adj],
    [/^[a-z]et$/, Verb]
  ],
  s: [
    [/.[rln]ates$/, Pres],
    [/.[^z]ens$/, Verb],
    [/.[lstrn]us$/, Sing],
    [/[aeiou][^aeiou]is$/, Sing],
    [/[a-z]\'s$/, Noun],
    [/^yes+$/, Exp] //yessss
  ],
  v: [
    [/.[^aeiou][ai][kln]ov$/, Last] //east-europe
  ],
  y: [
    [/.[cts]hy$/, Adj],
    [/.[st]ty$/, Adj],
    [/.[gk]y$/, Adj],
    [/.[tnl]ary$/, Adj],
    [/.[oe]ry$/, Sing],
    [/[rdntkbhs]ly$/, Adverb],
    [/...lly$/, Adverb],
    [/[bszmp]{2}y$/, Adj],
    [/.(gg|bb|zz)ly$/, Adj],
    [/.[aeiou]my$/, Adj],
    [/[ea]{2}zy$/, Adj],
    [/.[^aeiou]ity$/, Sing]
  ]
};

},{}],134:[function(_dereq_,module,exports){
'use strict';
//just a foolish lookup of known suffixes
const Adj = 'Adjective';
const Inf = 'Infinitive';
const Pres = 'PresentTense';
const Sing = 'Singular';
const Past = 'PastTense';
const Avb = 'Adverb';
const Plrl = 'Plural';
const Actor = 'Actor';
const Vb = 'Verb';
const Noun = 'Noun';
const Last = 'LastName';
const Modal = 'Modal';

module.exports = [
  null, //0
  null, //1
  {
    //2-letter
    ea: Sing,
    ia: Noun,
    ic: Adj,
    ly: Avb,
    '\'n': Vb,
    '\'t': Vb
  },
  {
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
    ing: 'Gerund', //likely to be converted to Adj after lexicon pass
    ' so': Avb,
    '\'ll': Modal,
    '\'re': 'Copula'
  },
  {
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
    sson: Last, //swedish male
    czyk: Last, //polish (male)
    chuk: Last, //east-europe
    enko: Last, //east-europe
    akis: Last, //greek
    nsen: Last //norway
  },
  {
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
    nssen: Last, //norway
    marek: Last //polish (male)
  },
  {
    //6-letter
    keeper: Actor,
    logist: Actor,
    auskas: Last, //lithuania
    teenth: 'Value'
  },
  {
    //7-letter
    sdottir: Last, //swedish female
    opoulos: Last //greek
  }
];

},{}],135:[function(_dereq_,module,exports){
'use strict';
//add 'downward' tags (that immediately depend on this one)
const addDownword = function(tags) {
  const keys = Object.keys(tags);
  keys.forEach(k => {
    tags[k].downward = [];
    //look for tags with this as parent
    for (let i = 0; i < keys.length; i++) {
      if (tags[keys[i]].isA && tags[keys[i]].isA === k) {
        tags[k].downward.push(keys[i]);
      }
    }
  });
};
module.exports = addDownword;

},{}],136:[function(_dereq_,module,exports){
'use strict';

//list of inconsistent parts-of-speech
module.exports = [
  //top-level pos are all inconsistent
  [
    'Noun',
    'Verb',
    'Adjective',
    'Adverb',
    'Determiner',
    'Conjunction',
    'Preposition',
    'QuestionWord',
    'Expression',
    'Url',
    'PhoneNumber',
    'Email',
    'Emoji'
  ],
  //exlusive-nouns
  ['Person', 'Organization', 'Value', 'Place', 'Actor', 'Demonym', 'Pronoun'],
  //acronyms
  ['Acronym', 'Pronoun', 'Actor', 'Unit', 'Address'],
  ['Acronym', 'Plural'],
  //things that can't be plural
  ['Plural', 'Singular'],
  // ['Plural', 'Pronoun'],
  // ['Plural', 'Person'],
  // ['Plural', 'Organization'],
  // ['Plural', 'Currency'],
  // ['Plural', 'Ordinal'],
  //exlusive-people
  ['MaleName', 'FemaleName'],
  ['FirstName', 'LastName', 'Honorific'],
  //adjectives
  ['Comparative', 'Superlative'],
  //values
  ['Value', 'Verb', 'Adjective'],
  // ['Value', 'Year'],
  ['Ordinal', 'Cardinal'],
  ['TextValue', 'NumericValue'],
  ['NiceNumber', 'TextValue'],
  ['Ordinal', 'Currency'], //$5.50th
  //verbs
  ['PastTense', 'PresentTense', 'FutureTense'],
  ['Pluperfect', 'Copula', 'Modal', 'Participle', 'Infinitive', 'Gerund', 'FuturePerfect', 'PerfectTense'],
  ['Auxiliary', 'Noun', 'Value'],
  //date
  ['Month', 'WeekDay', 'Year', 'Duration', 'Holiday'],
  ['Particle', 'Conjunction', 'Adverb', 'Preposition'],
  ['Date', 'Verb', 'Adjective', 'Person'],
  ['Date', 'Money', 'RomanNumeral', 'Fraction'],
  //a/an -> 1
  ['Value', 'Determiner'],
  ['Url', 'Value', 'HashTag', 'PhoneNumber', 'Emoji'],
  //roman numerals
  ['RomanNumeral', 'Fraction', 'NiceNumber'],
  ['RomanNumeral', 'Money'],
  //cases
  ['UpperCase', 'TitleCase', 'CamelCase'],
  //phrases
  ['VerbPhrase', 'Noun', 'Adjective', 'Value'],
  //QuestionWord
  ['QuestionWord', 'VerbPhrase'],
  //acronyms
  ['Acronym', 'VerbPhrase'],
];

},{}],137:[function(_dereq_,module,exports){
'use strict';
const conflicts = _dereq_('./conflicts');
const nouns = _dereq_('./tags/nouns');
const verbs = _dereq_('./tags/verbs');
const values = _dereq_('./tags/values');
const dates = _dereq_('./tags/dates');
const misc = _dereq_('./tags/misc');
const addDownward = _dereq_('./addDownward');

//used for pretty-printing on the server-side
const colors = {
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
};

//extend tagset with new tags
const addIn = function(obj, tags) {
  Object.keys(obj).forEach(k => {
    tags[k] = obj[k];
  });
};

//add tags to remove when tagging this one
const addConflicts = function(tags) {
  Object.keys(tags).forEach(k => {
    tags[k].notA = {};
    for (let i = 0; i < conflicts.length; i++) {
      let arr = conflicts[i];
      if (arr.indexOf(k) !== -1) {
        arr = arr.filter(a => a !== k);
        arr.forEach(e => {
          tags[k].notA[e] = true;
        });
      }
    }
    tags[k].notA = Object.keys(tags[k].notA);
  });
};

const addColors = function(tags) {
  Object.keys(tags).forEach(k => {
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

const build = () => {
  let tags = {};
  addIn(nouns, tags);
  addIn(verbs, tags);
  addIn(values, tags);
  addIn(dates, tags);
  addIn(misc, tags);
  //downstream
  addDownward(tags);
  //add enemies
  addConflicts(tags);
  //for nice-logging
  addColors(tags);
  return tags;
};
module.exports = build();

},{"./addDownward":135,"./conflicts":136,"./tags/dates":138,"./tags/misc":139,"./tags/nouns":140,"./tags/values":141,"./tags/verbs":142}],138:[function(_dereq_,module,exports){
module.exports = {
  Date: {}, //not a noun, but usually is
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
  Money: {
    //isA: 'Cardinal'
  },
  Percent: {
    isA: 'Value'
  }
};

},{}],142:[function(_dereq_,module,exports){
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
const fns = _dereq_('./paths').fns;
const build_whitespace = _dereq_('./whitespace');
const makeUID = _dereq_('./makeUID');
//normalization
const addNormal = _dereq_('./methods/normalize/normalize').addNormal;
const addRoot = _dereq_('./methods/normalize/root');

const Term = function(str, world) {
  this.tags = {};
  this._text = fns.ensureString(str);

  // this.world = world;
  Object.defineProperty(this, 'world', {
    enumerable: false, // hide it from for..in
    value: world
  });
  // this.world = function() {
  //   return world;
  // };
  //seperate whitespace from the text
  let parsed = build_whitespace(this._text);
  this.whitespace = parsed.whitespace;
  this._text = parsed.text;
  this.parent = null;
  this.silent_term = '';
  this.lumped = false;
  //normalize the _text
  addNormal(this);
  addRoot(this);
  //has this term been modified
  this.dirty = false;
  //make a unique id for this term
  this.uid = makeUID(this.normal);

  //getters/setters
  Object.defineProperty(this, 'text', {
    get: function() {
      return this._text;
    },
    set: function(txt) {
      txt = txt || '';
      this._text = txt.trim();
      this.dirty = true;
      // if (this._text !== txt) {
      //   console.log('|' + txt + '|');
      // console.log(build_whitespace(txt));
      // this.whitespace = build_whitespace(txt);
      //   console.log(this.whitespace);
      // }
      this.normalize();
    }
  });
  //bit faster than .constructor.name or w/e
  Object.defineProperty(this, 'isA', {
    get: function() {
      return 'Term';
    }
  });
};

/**run each time a new text is set */
Term.prototype.normalize = function() {
  addNormal(this);
  addRoot(this);
  return this;
};
/** where in the sentence is it? zero-based. */
Term.prototype.index = function() {
  let ts = this.parentTerms;
  if (!ts) {
    return null;
  }
  return ts.terms.indexOf(this);
};
/** make a copy with no originals to the original  */
Term.prototype.clone = function() {
  let term = new Term(this._text, this.world);
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
'use strict';
//this is a not-well-thought-out way to reduce our dependence on `object===object` original stuff
//generates a unique id for this term
//may need to change when the term really-transforms? not sure.
const uid = (str) => {
  let nums = '';
  for(let i = 0; i < 5; i++) {
    nums += parseInt(Math.random() * 9, 10);
  }
  return str + '-' + nums;
};
module.exports = uid;

},{}],145:[function(_dereq_,module,exports){
'use strict';
// const tagSet = require('../paths').tags;
const boringTags = {
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
  Quotation: 1,
};

const bestTag = function(t) {
  const tagSet = t.world.tags;
  let tags = Object.keys(t.tags);
  tags = tags.sort(); //alphabetical, first
  //then sort by #of parent tags
  tags = tags.sort((a, b) => {
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

const addMethods = Term => {
  const methods = {
    toUpperCase: function() {
      this.text = this._text.toUpperCase();
      this.tag('#UpperCase', 'toUpperCase');
      return this;
    },
    toLowerCase: function() {
      this.text = this._text.toLowerCase();
      this.unTag('#TitleCase');
      this.unTag('#UpperCase');
      return this;
    },
    toTitleCase: function() {
      this.text = this._text.replace(/^ *[a-z]/, x => x.toUpperCase());
      this.tag('#TitleCase', 'toTitleCase');
      return this;
    },
    //(camelCase() is handled in `./terms` )

    /** is it titlecased because it deserves it? Like a person's name? */
    needsTitleCase: function() {
      const titleCases = [
        'Person',
        'Place',
        'Organization',
        'Acronym',
        'UpperCase',
        'Currency',
        'RomanNumeral',
        'Month',
        'WeekDay',
        'Holiday',
        'Demonym'
      ];
      for (let i = 0; i < titleCases.length; i++) {
        if (this.tags[titleCases[i]]) {
          return true;
        }
      }
      //specific words that keep their titlecase
      //https://en.wikipedia.org/wiki/Capitonym
      const irregulars = ['i', 'god', 'allah'];
      for (let i = 0; i < irregulars.length; i++) {
        if (this.normal === irregulars[i]) {
          return true;
        }
      }
      return false;
    }
  };
  //hook them into result.proto
  Object.keys(methods).forEach(k => {
    Term.prototype[k] = methods[k];
  });
  return Term;
};

module.exports = addMethods;

},{}],147:[function(_dereq_,module,exports){
'use strict';
const isAcronym = _dereq_('./normalize/isAcronym');
const bestTag = _dereq_('./bestTag');

//regs-
const hasVowel = /[aeiouy]/i;
const hasLetter = /[a-z]/;
const hasNumber = /[0-9]/;

const addMethods = (Term) => {

  const methods = {
    /** which tag best-represents this term?*/
    bestTag: function () {
      return bestTag(this);
    },

    /** is this term like F.B.I. or NBA */
    isAcronym: function () {
      return isAcronym(this._text);
    },
    /** check if it is word-like in english */
    isWord: function () {
      let t = this;
      //assume a contraction produces a word-word
      if (t.silent_term) {
        return true;
      }
      //no letters or numbers
      if (/[a-z|A-Z|0-9]/.test(t.text) === false) {
        return false;
      }
      //has letters, but with no vowels
      if (t.normal.length > 3 && hasLetter.test(t.normal) === true && hasVowel.test(t.normal) === false && t.isAcronym() === false) {
        return false;
      }
      //has numbers but not a 'value'
      if (hasNumber.test(t.normal) === true && t.tags.hasOwnProperty('Value') === false) {
        //s4e
        if (/[a-z][0-9][a-z]/.test(t.normal) === true) {
          return false;
        }
      //ensure it looks like a 'value' eg '-$4,231.00'
      // if (/^([$-])*?([0-9,\.])*?([s\$%])*?$/.test(t.normal) === false) {
      //   return false;
      // }
      }
      return true;
    }
  };
  //hook them into result.proto
  Object.keys(methods).forEach((k) => {
    Term.prototype[k] = methods[k];
  });
  return Term;
};

module.exports = addMethods;

},{"./bestTag":145,"./normalize/isAcronym":148}],148:[function(_dereq_,module,exports){
'use strict';
//regs -
const periodAcronym = /([A-Z]\.)+[A-Z]?,?$/;
const oneLetterAcronym = /^[A-Z]\.,?$/;
const noPeriodAcronym = /[A-Z]{2}('s|,)?$/;

/** does it appear to be an acronym, like FBI or M.L.B. */
const isAcronym = function(str) {
  //like N.D.A
  if (periodAcronym.test(str) === true) {
    return true;
  }
  //like 'F.'
  if (oneLetterAcronym.test(str) === true) {
    return true;
  }
  //like NDA
  if (noPeriodAcronym.test(str) === true) {
    return true;
  }
  return false;
};
module.exports = isAcronym;

},{}],149:[function(_dereq_,module,exports){
'use strict';
const killUnicode = _dereq_('./unicode');
const isAcronym = _dereq_('./isAcronym');

//some basic operations on a string to reduce noise
exports.normalize = function(str) {
  str = str || '';
  str = str.toLowerCase();
  str = str.trim();
  let original = str;
  //(very) rough ASCII transliteration -  bjŏrk -> bjork
  str = killUnicode(str);
  //#tags, @mentions
  str = str.replace(/^[#@]/, '');
  //punctuation
  str = str.replace(/[,;.!?]+$/, '');
  // coerce single curly quotes
  str = str.replace(/[\u0027\u0060\u00B4\u2018\u2019\u201A\u201B\u2032\u2035\u2039\u203A]+/g, '\'');
  // coerce double curly quotes
  str = str.replace(/[\u0022\u00AB\u00BB\u201C\u201D\u201E\u201F\u2033\u2034\u2036\u2037\u2E42\u301D\u301E\u301F\uFF02]+/g, '"');
  //coerce Unicode ellipses
  str = str.replace(/\u2026/g, '...');
  //en-dash
  str = str.replace(/\u2013/g, '-');
  //lookin'->looking (make it easier for conjugation)
  if (/[a-z][^aeiou]in['’]$/.test(str) === true) {
    str = str.replace(/in['’]$/, 'ing');
  }
  //turn re-enactment to reenactment
  if (/^(re|un)-?[^aeiou]./.test(str) === true) {
    str = str.replace('-', '');
  }
  //strip leading & trailing grammatical punctuation
  if (/^[:;]/.test(str) === false) {
    str = str.replace(/\.{3,}$/g, '');
    str = str.replace(/['",\.!:;\?\)]+$/g, '');
    str = str.replace(/^['"\(]+/g, '');
  }
  //do this again..
  str = str.trim();
  //oh shucks,
  if (str === '') {
    str = original;
  }
  return str;
};

exports.addNormal = function(term) {
  let str = term._text || '';
  str = exports.normalize(str);
  //compact acronyms
  if (isAcronym(term._text)) {
    str = str.replace(/\./g, '');
  }
  //nice-numbers
  str = str.replace(/([0-9]),([0-9])/g, '$1$2');
  term.normal = str;
};

// console.log(normalize('Dr. V Cooper'));

},{"./isAcronym":148,"./unicode":151}],150:[function(_dereq_,module,exports){
'use strict';
//
const rootForm = function(term) {
  let str = term.normal || term.silent_term || '';
  //handle apostrophes and stuff (go further than normalize())
  str = str.replace(/'s\b/, '');
  str = str.replace(/'$/, '');
  term.root = str;
};

module.exports = rootForm;

},{}],151:[function(_dereq_,module,exports){
'use strict';
//a hugely-ignorant, and widely subjective transliteration of latin, cryllic, greek unicode characters to english ascii.
//approximate visual (not semantic or phonetic) relationship between unicode and ascii characters
//http://en.wikipedia.org/wiki/List_of_Unicode_characters
//https://docs.google.com/spreadsheet/ccc?key=0Ah46z755j7cVdFRDM1A2YVpwa1ZYWlpJM2pQZ003M0E
let compact = {
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
};
//decompress data into two hashes
let unicode = {};
Object.keys(compact).forEach(function (k) {
  compact[k].split('').forEach(function (s) {
    unicode[s] = k;
  });
});

const killUnicode = (str) => {
  let chars = str.split('');
  chars.forEach((s, i) => {
    if (unicode[s]) {
      chars[i] = unicode[s];
    }
  });
  return chars.join('');
};
module.exports = killUnicode;
// console.log(killUnicode('bjŏȒk—Ɏó'));

},{}],152:[function(_dereq_,module,exports){
'use strict';
const paths = _dereq_('../../paths');
const fns = paths.fns;
const tagset = paths.tags;

//a nicer logger for the client-side
const clientSide = (t) => {
  let color = 'silver';
  let tags = Object.keys(t.tags);
  for(let i = 0; i < tags.length; i++) {
    if (tagset[tags[i]] && tagset[tags[i]].color) {
      color = tagset[tags[i]].color;
      break;
    }
  }
  let word = fns.leftPad(t.text, 12);
  word += ' ' + tags;
  console.log('%c ' + word, 'color: ' + color);
};
module.exports = clientSide;

},{"../../paths":161}],153:[function(_dereq_,module,exports){
'use strict';
const renderHtml = _dereq_('./renderHtml');
const clientDebug = _dereq_('./client');
const serverDebug = _dereq_('./server');

const methods = {
  /** a pixel-perfect reproduction of the input, with whitespace preserved */
  text: function(r) {
    return (r.whitespace.before || '') + r._text + (r.whitespace.after || '');
  },
  /** a lowercased, punctuation-cleaned, whitespace-trimmed version of the word */
  normal: function(r) {
    return r.normal;
  },
  /** even-more normalized than normal */
  root: function(r) {
    return r.root || r.normal;
  },
  /** the &encoded term in a span element, with POS as classNames */
  html: function(r) {
    return renderHtml(r);
  },
  /** a simplified response for Part-of-Speech tagging*/
  tags: function(r) {
    return {
      text: r.text,
      normal: r.normal,
      tags: Object.keys(r.tags)
    };
  },
  /** check-print information for the console */
  debug: function(t) {
    if (typeof window === 'object') {
      clientDebug(t);
    } else {
      serverDebug(t);
    }
  }
};

const addMethods = Term => {
  //hook them into result.proto
  Term.prototype.out = function(fn) {
    if (!methods[fn]) {
      fn = 'text';
    }
    return methods[fn](this);
  };
  return Term;
};

module.exports = addMethods;

},{"./client":152,"./renderHtml":154,"./server":155}],154:[function(_dereq_,module,exports){
'use strict';
//turn xml special characters into apersand-encoding.
//i'm not sure this is perfectly safe.
const escapeHtml = (s) => {
  const HTML_CHAR_MAP = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    '\'': '&#39;',
    ' ': '&nbsp;'
  };
  return s.replace(/[<>&"' ]/g, function(ch) {
    return HTML_CHAR_MAP[ch];
  });
};

//remove html elements already in the text
//not tested!
//http://stackoverflow.com/questions/295566/sanitize-rewrite-html-on-the-client-side
const sanitize = (html) => {
  const tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';
  const tagOrComment = new RegExp(
    '<(?:'
    // Comment body.
    + '!--(?:(?:-*[^->])*--+|-?)'
    // Special "raw text" elements whose content should be elided.
    + '|script\\b' + tagBody + '>[\\s\\S]*?</script\\s*'
    + '|style\\b' + tagBody + '>[\\s\\S]*?</style\\s*'
    // Regular name
    + '|/?[a-z]'
    + tagBody
    + ')>',
    'gi');
  let oldHtml;
  do {
    oldHtml = html;
    html = html.replace(tagOrComment, '');
  } while (html !== oldHtml);
  return html.replace(/</g, '&lt;');
};

//turn the term into ~properly~ formatted html
const renderHtml = function(t) {
  let classes = Object.keys(t.tags).filter((tag) => tag !== 'Term');
  classes = classes.map(c => 'nl-' + c);
  classes = classes.join(' ');
  let text = sanitize(t.text);
  text = escapeHtml(text);
  let el = '<span class="' + classes + '">' + text + '</span>';
  return escapeHtml(t.whitespace.before) + el + escapeHtml(t.whitespace.after);
};

module.exports = renderHtml;

},{}],155:[function(_dereq_,module,exports){
'use strict';
const fns = _dereq_('../../paths').fns;

//pretty-print a term on the nodejs console
const serverDebug = function(t) {
  let tags = Object.keys(t.tags)
    .map(tag => {
      return fns.printTag(tag);
    })
    .join(', ');
  let word = t.text;
  word = '\'' + fns.yellow(word || '-') + '\'';
  let silent = '';
  if (t.silent_term) {
    silent = '[' + t.silent_term + ']';
  }
  word = fns.leftPad(word, 20);
  word += fns.leftPad(silent, 8);
  console.log('   ' + word + '   ' + '     - ' + tags);
};
module.exports = serverDebug;

},{"../../paths":161}],156:[function(_dereq_,module,exports){
'use strict';
// const endPunct = /([^\/,:;.()!?]{0,1})([\/,:;.()!?]+)$/i;
const endPunct = /([a-z0-9 ])([,:;.!?]+)$/i; //old

const addMethods = Term => {
  const methods = {
    /** the punctuation at the end of this term*/
    getPunctuation: function() {
      let m = this.text.match(endPunct);
      if (m) {
        return m[2];
      }
      m = this.whitespace.after.match(endPunct);
      if (m) {
        return m[2];
      }
      return null;
    },

    setPunctuation: function(punct) {
      this.killPunctuation();
      this.text += punct;
      if (punct === ',') {
        this.tags.Comma = true;
      }
      return this;
    },

    /** check if the term ends with a comma */
    hasComma: function() {
      if (this.getPunctuation() === ',') {
        return true;
      }
      return false;
    },

    killPunctuation: function() {
      this.text = this._text.replace(endPunct, '$1');
      delete this.tags.Comma;
      delete this.tags.ClauseEnd;
      return this;
    }
  };
  //hook them into result.proto
  Object.keys(methods).forEach(k => {
    Term.prototype[k] = methods[k];
  });
  return Term;
};

module.exports = addMethods;

},{}],157:[function(_dereq_,module,exports){
'use strict';

//recursively-check compatibility of this tag and term
const canBe = function(term, tag) {
  const tagset = term.world.tags;
  //fail-fast
  if (tagset[tag] === undefined) {
    return true;
  }
  //loop through tag's contradictory tags
  let enemies = tagset[tag].notA || [];
  for (let i = 0; i < enemies.length; i++) {
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
const setTag = _dereq_('./setTag');
const unTag = _dereq_('./unTag');
const canBe = _dereq_('./canBe');

//symbols used in sequential taggers which mean 'do nothing'
//.tag('#Person #Place . #City')
const ignore = {
  '.': true
};
const addMethods = (Term) => {

  const methods = {
    /** set the term as this part-of-speech */
    tag: function(tag, reason) {
      if (ignore[tag] !== true) {
        setTag(this, tag, reason);
      }
    },
    /** remove this part-of-speech from the term*/
    unTag: function(tag, reason) {
      if (ignore[tag] !== true) {
        unTag(this, tag, reason);
      }
    },
    /** is this tag compatible with this word */
    canBe: function (tag) {
      tag = tag || '';
      if (typeof tag === 'string') {
        //everything can be '.'
        if (ignore[tag] === true) {
          return true;
        }
        tag = tag.replace(/^#/, '');
      }
      return canBe(this, tag);
    }
  };

  //hook them into term.prototype
  Object.keys(methods).forEach((k) => {
    Term.prototype[k] = methods[k];
  });
  return Term;
};

module.exports = addMethods;

},{"./canBe":157,"./setTag":159,"./unTag":160}],159:[function(_dereq_,module,exports){
'use strict';
//set a term as a particular Part-of-speech
const path = _dereq_('../../paths');
const log = path.log;
const fns = path.fns;
const unTag = _dereq_('./unTag');
// const tagset = path.tags;
// const tagset = require('../../../tagset');

const putTag = (term, tag, reason) => {
  const tagset = term.world.tags;
  tag = tag.replace(/^#/, '');
  //already got this
  if (term.tags[tag] === true) {
    return;
  }
  term.tags[tag] = true;
  log.tag(term, tag, reason);

  //extra logic per-each POS
  if (tagset[tag]) {
    //drop any conflicting tags
    let enemies = tagset[tag].notA || [];
    for (let i = 0; i < enemies.length; i++) {
      if (term.tags[enemies[i]] === true) {
        unTag(term, enemies[i], reason);
      }
    }
    //apply implicit tags
    if (tagset[tag].isA) {
      let doAlso = tagset[tag].isA;
      if (term.tags[doAlso] !== true) {
        putTag(term, doAlso, ' --> ' + tag); //recursive
      }
    }
  }
};

//give term this tag
const wrap = function(term, tag, reason) {
  if (!term || !tag) {
    return;
  }
  const tagset = term.world.tags;
  //handle multiple tags
  if (fns.isArray(tag)) {
    tag.forEach(t => putTag(term, t, reason)); //recursive
    return;
  }
  putTag(term, tag, reason);
  //add 'extra' tag (for some special tags)
  if (tagset[tag] && tagset[tag].also !== undefined) {
    putTag(term, tagset[tag].also, reason);
  }
};

module.exports = wrap;

},{"../../paths":161,"./unTag":160}],160:[function(_dereq_,module,exports){
'use strict';
//set a term as a particular Part-of-speech
const path = _dereq_('../../paths');
const log = path.log;

//remove a tag from a term
const unTag = (term, tag, reason) => {
  const tagset = term.world.tags;
  if (term.tags[tag]) {
    log.unTag(term, tag, reason);
    delete term.tags[tag];

    //delete downstream tags too
    if (tagset[tag]) {
      let also = tagset[tag].downward;
      for (let i = 0; i < also.length; i++) {
        unTag(term, also[i], ' - -   - ');
      }
    }
  }
};

const wrap = (term, tag, reason) => {
  if (!term || !tag) {
    return;
  }
  //support '*' flag - remove all-tags
  if (tag === '*') {
    term.tags = {};
    return;
  }
  //remove this tag
  unTag(term, tag, reason);
  return;
};
module.exports = wrap;

},{"../../paths":161}],161:[function(_dereq_,module,exports){
module.exports = {
  fns: _dereq_('../fns'),
  log: _dereq_('../log'),
  tags: _dereq_('../tags')
};

},{"../fns":3,"../log":6,"../tags":137}],162:[function(_dereq_,module,exports){
'use strict';
//punctuation regs-  are we having fun yet?
const before = /^(\s|-+|\.\.+|\/|"|\u0022|\uFF02|\u0027|\u201C|\u2018|\u201F|\u201B|\u201E|\u2E42|\u201A|\u00AB|\u2039|\u2035|\u2036|\u2037|\u301D|\u0060|\u301F)+/u;
// const after = /(\s+|-+|\.\.+|"|\u0022|\uFF02|\u0027|\u201D|\u2019|\u00BB|\u203A|\u2032|\u2033|\u2034|\u301E|\u00B4)+$/u;
const afterSoft = /(\s+|-+|\.\.+|"|\u0022|\uFF02|\u0027|\u201D|\u2019|\u00BB|\u203A|\u2032|\u2033|\u2034|\u301E|\u00B4)+[,;.!? ]*$/u;
const minusNumber = /^( *)-(\$|€|¥|£)?([0-9])/;

//seperate the 'meat' from the trailing/leading whitespace.
//works in concert with ./src/text/tokenize.js
const build_whitespace = (str) => {
  let whitespace = {
    before: '',
    after: ''
  };
  //get before punctuation/whitespace
  //mangle 'far - fetched', but don't mangle '-2'
  let m = str.match(minusNumber);
  if (m !== null) {
    whitespace.before = m[1];
    str = str.replace(/^ */, '');
  } else {
    m = str.match(before);
    if (m !== null) {
      whitespace.before = m[0];
      str = str.replace(before, '');
    }
  }
  //get after punctuation/whitespace
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
const Term = _dereq_('../term');
const wordlike = /\S/;
const isBoundary = /^[!?.]+$/;

const notWord = {
  '.': true,
  '-': true, //dash
  '–': true, //en-dash
  '—': true, //em-dash
  '--': true,
  '...': true
};

const hasHyphen = function(str) {
  //dont split 're-do'
  if (/^(re|un)-?[^aeiou]./.test(str) === true) {
    return false;
  }
  //letter-number
  let reg = /^([a-z`"'/]+)(-|–|—)([a-z0-9].*)/i;
  if (reg.test(str) === true) {
    return true;
  }
  //number-letter
  // reg = /^([0-9]+)(-|–|—)([a-z].*)/i;
  // if (reg.test(str) === true) {
  //   return true;
  // }
  //support weird number-emdash combo '2010–2011'
  let reg2 = /^([0-9]+)(–|—)([0-9].*)/i;
  if (reg2.test(str)) {
    return true;
  }
  return false;
};

//support splitting terms like "open/closed"
const hasSlash = function(word) {
  const reg = /[a-z]\/[a-z]/;
  if (reg.test(word)) {
    //only one slash though
    if (word.split(/\//g).length === 2) {
      return true;
    }
  }
  return false;
};

//turn a string into an array of terms (naiive for now, lumped later)
const fromString = function(str, world) {
  let result = [];
  let arr = [];
  //start with a naiive split
  str = str || '';
  if (typeof str === 'number') {
    str = String(str);
  }
  const firstSplit = str.split(/(\S+)/);
  for (let i = 0; i < firstSplit.length; i++) {
    const word = firstSplit[i];
    if (hasHyphen(word) === true) {
      //support multiple-hyphenated-terms
      const hyphens = word.split(/[-–—]/);
      for (let o = 0; o < hyphens.length; o++) {
        if (o === hyphens.length - 1) {
          arr.push(hyphens[o]);
        } else {
          arr.push(hyphens[o] + '-');
        }
      }
    } else if (hasSlash(word) === true) {
      const slashes = word.split(/\//);
      arr.push(slashes[0]);
      arr.push('/' + slashes[1]);
    } else {
      arr.push(word);
    }
  }
  //greedy merge whitespace+arr to the right
  let carry = '';
  for (let i = 0; i < arr.length; i++) {
    //if it's more than a whitespace
    if (
      wordlike.test(arr[i]) === true &&
      notWord.hasOwnProperty(arr[i]) === false &&
      isBoundary.test(arr[i]) === false
    ) {
      result.push(carry + arr[i]);
      carry = '';
    } else {
      carry += arr[i];
    }
  }
  //handle last one
  if (carry && result.length > 0) {
    result[result.length - 1] += carry; //put it on the end
  }
  return result.map(t => new Term(t, world));
};
module.exports = fromString;

},{"../term":143}],164:[function(_dereq_,module,exports){
'use strict';

//getters/setters for the Terms class
module.exports = {

  parent: {
    get: function() {
      return this.refText || this;
    },
    set: function(r) {
      this.refText = r;
      return this;
    }
  },

  parentTerms: {
    get: function() {
      return this.refTerms || this;
    },
    set: function(r) {
      this.refTerms = r;
      return this;
    }
  },

  dirty: {
    get: function() {
      for(let i = 0; i < this.terms.length; i++) {
        if (this.terms[i].dirty === true) {
          return true;
        }
      }
      return false;
    },
    set: function(dirt) {
      this.terms.forEach((t) => {
        t.dirty = dirt;
      });
    }
  },

  refTerms: {
    get: function() {
      return this._refTerms || this;
    },
    set: function(ts) {
      this._refTerms = ts;
      return this;
    }
  },
  found: {
    get: function() {
      return this.terms.length > 0;
    }
  },
  length: {
    get: function() {
      return this.terms.length;
    }
  },
  isA: {
    get: function() {
      return 'Terms';
    }
  },
  whitespace: {
    get: function() {
      return {
        before: (str) => {
          this.firstTerm().whitespace.before = str;
          return this;
        },
        after: (str) => {
          this.lastTerm().whitespace.after = str;
          return this;
        },
      };
    }
  },


};

},{}],165:[function(_dereq_,module,exports){
'use strict';
const build = _dereq_('./build');
const getters = _dereq_('./getters');
let w = _dereq_('../world');

//Terms is an array of Term objects, and methods that wrap around them
const Terms = function(arr, world, refText, refTerms) {
  this.terms = arr;
  this.world = world || w;
  this.refText = refText;
  this._refTerms = refTerms;
  this.get = n => {
    return this.terms[n];
  };
  //apply getters
  let keys = Object.keys(getters);
  for (let i = 0; i < keys.length; i++) {
    Object.defineProperty(this, keys[i], getters[keys[i]]);
  }
};

Terms.fromString = function(str, world) {
  let termArr = build(str, world);
  let ts = new Terms(termArr, world, null);
  //give each term a original to this ts
  ts.terms.forEach(t => {
    t.parentTerms = ts;
  });
  return ts;
};

// Terms = require('./methods/lookup')(Terms);
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
const syntax = _dereq_('./lib/syntax');
const startHere = _dereq_('./lib/startHere');
const Text = _dereq_('../../text');
const match = _dereq_('./lib');

const matchMethods = Terms => {
  const methods = {
    //support regex-like whitelist-match
    match: function (reg, verbose) {
      //fail-fast #1
      if (this.terms.length === 0) {
        return new Text([], this.world, this.parent);
      }
      //fail-fast #2
      if (!reg) {
        return new Text([], this.world, this.parent);
      }
      let matches = match(this, reg, verbose);
      matches = matches.map(a => {
        return new Terms(a, this.world, this.refText, this.refTerms);
      });
      return new Text(matches, this.world, this.parent);
    },

    /**return first match */
    matchOne: function (str) {
      //fail-fast
      if (this.terms.length === 0) {
        return null;
      }
      let regs = syntax(str);
      for (let t = 0; t < this.terms.length; t++) {
        //don't loop through if '^'
        if (regs[0] && regs[0].starting && t > 0) {
          break;
        }
        let m = startHere(this, t, regs);
        if (m) {
          return m;
        }
      }
      return null;
    },

    /**return first match */
    has: function (str) {
      return this.matchOne(str) !== null;
    }
  };

  //hook them into result.proto
  Object.keys(methods).forEach(k => {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = matchMethods;

},{"../../text":192,"./lib":170,"./lib/startHere":174,"./lib/syntax":175}],167:[function(_dereq_,module,exports){
'use strict';
//applies the reg capture group setting to the term
const applyCaptureGroup = (term, reg) => {
  if (reg.capture) {
    term.captureGroup = true;
  } else {
    term.captureGroup = undefined;
  }
};
module.exports = applyCaptureGroup;
},{}],168:[function(_dereq_,module,exports){
'use strict';
//take all the matches, and if there is a [capture group], only return that.
const onlyCaptureGroup = function(matches) {
  let results = [];
  matches.forEach((terms) => {
    //if there's no capture group, we good.
    if (terms.filter(t => t.captureGroup === true).length === 0) {
      results.push(terms);
      return;
    }
    //otherwise, just return them as seperate subsets
    let current = [];
    for(let i = 0; i < terms.length; i += 1) {
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
'use strict';
//
//find easy reasons to skip running the full match on this
const fastPass = (ts, regs) => {
  for (let i = 0; i < regs.length; i++) {
    let reg = regs[i];
    let found = false;
    //we can't cheat on these fancy rules:
    if (reg.optional === true || reg.negative === true || reg.minMax !== undefined) {
      continue;
    }
    //look-for missing term-matches
    if (reg.normal !== undefined) {
      for (let o = 0; o < ts.terms.length; o++) {
        if (ts.terms[o].normal === reg.normal || ts.terms[o].silent_term === reg.normal) {
          found = true;
          break;
        }
        //we can't handle lumped-terms with this method
        if (ts.terms[o].lumped === true) {
          return false;
        }
      }
      if (found === false) {
        return true;
      }
    }
    //look for missing tags
    if (reg.tag !== undefined) {
      for (let o = 0; o < ts.terms.length; o++) {
        if (ts.terms[o].tags[reg.tag] === true) {
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
const syntax = _dereq_('./syntax');
const startHere = _dereq_('./startHere');
const fastPass = _dereq_('./fastPass');
const handleCaptureGroup = _dereq_('./captureGroup');

//ensure we have atleast one non-optional demand
// const isTautology = function(regs) {
//   for (let i = 0; i < regs.length; i++) {
//     if (!regs[i].optional && !regs[i].astrix && !regs[i].anyOne) {
//       return false;
//     }
//   }
//   return true;
// };

//make a reg syntax from a text object
const findFromTerms = function(ts) {
  if (!ts) {
    return [];
  }
  let arr = ts.terms.map(t => {
    return {
      id: t.uid
    };
  });
  return arr;
};
//
const match = (ts, reg, verbose) => {
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
  }
  //do a fast-pass for easy negatives
  if (fastPass(ts, reg, verbose) === true) {
    return [];
  }
  //ok, start long-match
  let matches = [];
  for (let t = 0; t < ts.terms.length; t += 1) {
    //don't loop through if '^'
    if (t > 0 && reg[0] && reg[0].starting) {
      break;
    }
    let m = startHere(ts, t, reg, verbose);
    if (m && m.length > 0) {
      matches.push(m);
      //handle capture-groups subset
      // let hasCapture=matches
      //ok, don't try to match these again.
      let skip = m.length - 1;
      t += skip; //this could use some work
    }
  }
  //handle capture-group subset
  matches = handleCaptureGroup(matches);
  return matches;
};
module.exports = match;

},{"./captureGroup":168,"./fastPass":169,"./startHere":174,"./syntax":175}],171:[function(_dereq_,module,exports){
'use strict';
const applyCaptureGroup = _dereq_('./applyCaptureGroup');

//compare 1 term to one reg
const perfectMatch = (term, reg) => {
  if (!term || !reg) {
    return false;
  }
  //support '.' - any
  if (reg.anyOne === true) {
    return true;
  }
  //pos-match
  if (reg.tag !== undefined) {
    return term.tags[reg.tag];
  }
  //id-match
  if (reg.id !== undefined) {
    return reg.id === term.uid;
  }
  //text-match
  if (reg.normal !== undefined) {
    return reg.normal === term.normal || reg.normal === term.silent_term;
  }
  //suffix matches '-nny'
  if (reg.suffix === true && reg.partial !== undefined) {
    const len = term.normal.length;
    return term.normal.substr(len - reg.partial.length, len) === reg.partial;
  }
  //prefix matches 'fun-'
  if (reg.prefix === true && reg.partial !== undefined) {
    return term.normal.substr(0, reg.partial.length) === reg.partial;
  }
  //infix matches '-nn-'
  if (reg.infix === true && reg.partial) {
    return term.normal.indexOf(reg.partial) !== -1;
  }
  //full-on regex-match '/a*?/'
  if (reg.regex !== undefined) {
    return reg.regex.test(term.normal) || reg.regex.test(term.text);
  }
  //one-of term-match
  if (reg.oneOf !== undefined) {
    for (let i = 0; i < reg.oneOf.tagArr.length; i++) {
      if (term.tags.hasOwnProperty(reg.oneOf.tagArr[i]) === true) {
        return true;
      }
    }
    return reg.oneOf.terms.hasOwnProperty(term.normal) || reg.oneOf.terms.hasOwnProperty(term.silent_term);
  }
  return false;
};

//wrap above method, to support '!' negation
const isMatch = (term, reg, verbose) => {
  if (!term || !reg) {
    return false;
  }
  let found = perfectMatch(term, reg, verbose);
  //reverse it for .not()
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

const almostMatch = (reg_str, term) => {
  let want = term.normal.substr(0, reg_str.length);
  return want === reg_str;
};

// match ['john', 'smith'] regs, when the term is lumped
const lumpMatch = function(term, regs, reg_i) {
  let reg_str = regs[reg_i].normal;
  //is this a partial match? 'tony'& 'tony hawk'
  if (reg_str !== undefined && almostMatch(reg_str, term)) {
    //try to grow it
    reg_i = reg_i + 1;
    for (reg_i; reg_i < regs.length; reg_i++) {
      reg_str += ' ' + regs[reg_i].normal;
      // is it now perfect?
      if (reg_str === term.normal) {
        return reg_i;
      }
      // is it still almost?
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
const lumpMatch = _dereq_('./lumpMatch');
const isMatch = _dereq_('./isMatch');
const applyCaptureGroup = _dereq_('./applyCaptureGroup');

// match everything until this point - '*'
const greedyUntil = (ts, i, reg) => {
  for (; i < ts.length; i++) {
    if (isMatch(ts.terms[i], reg)) {
      return i;
    }
  }
  return null;
};

//keep matching this reg as long as possible
const greedyOf = (ts, i, reg, until) => {
  for (; i < ts.length; i++) {
    let t = ts.terms[i];
    //found next reg ('until')
    if (until && isMatch(t, until)) {
      return i;
    }
    //stop here
    if (!isMatch(t, reg)) {
      return i;
    }
  }
  return i;
};

//try and match all regs, starting at this term
const startHere = (ts, startAt, regs, verbose) => {
  let term_i = startAt;
  //check each regex-thing
  for (let reg_i = 0; reg_i < regs.length; reg_i++) {
    let term = ts.terms[term_i];
    let reg = regs[reg_i];
    let next_reg = regs[reg_i + 1];

    if (!term) {
      //we didn't need it anyways
      if (reg.optional === true) {
        continue;
      }
      return null;
    }

    //catch '^' errors
    if (reg.starting === true && term_i > 0) {
      return null;
    }

    //catch '$' errors
    if (reg.ending === true && term_i !== ts.length - 1 && !reg.minMax) {
      return null;
    }

    //support '*'
    if (reg.astrix === true) {
      //just grab until the end..
      if (!next_reg) {
        let terms = ts.terms.slice(startAt, ts.length);
        //apply capture group settings for all wildcard terms
        for (let wildcardTerm_i = term_i - startAt; wildcardTerm_i < terms.length; wildcardTerm_i++) {
          applyCaptureGroup(terms[wildcardTerm_i], reg);
        }
        return terms;
      }
      let foundAt = greedyUntil(ts, term_i, regs[reg_i + 1]);
      if (!foundAt) {
        return null;
      }
      //apply capture group settings for all wildcard terms
      for (let wildcardTerm_i = term_i; wildcardTerm_i < foundAt; wildcardTerm_i++) {
        applyCaptureGroup(ts.terms[wildcardTerm_i], reg)
      }
      term_i = foundAt + 1;
      reg_i += 1;
      continue;
    }

    //support '#Noun{x,y}'
    if (regs[reg_i].minMax !== undefined) {
      let min = regs[reg_i].minMax.min || 0;
      let max = regs[reg_i].minMax.max;
      let until = regs[reg_i + 1];
      for (let i = 0; i < max; i++) {
        //ergh, please clean this loop up..
        let t = ts.terms[term_i + i];
        if (!t) {
          return null;
        }
        //end here
        if (isMatch(t, reg) === false) {
          return null;
        }
        //should we be greedier?
        if (i < min - 1) {
          continue; //gotta keep going!
        }
        //we can end here, after the minimum
        if (!until) {
          term_i += 1;
          break;
        }
        // we're greedy-to-now
        if (i >= min && isMatch(t, until)) {
          break;
        }
        //end with a greedy-match for next term
        let nextT = ts.terms[term_i + i + 1];
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
    }

    //if optional, check next one
    if (reg.optional === true) {
      let until = regs[reg_i + 1];
      term_i = greedyOf(ts, term_i, reg, until);
      continue;
    }

    //check a perfect match
    if (isMatch(term, reg, verbose)) {
      term_i += 1;
      //try to greedy-match '+'
      if (reg.consecutive === true) {
        let until = regs[reg_i + 1];
        term_i = greedyOf(ts, term_i, reg, until);
      }
      continue;
    }

    if (term.silent_term && !term.normal) {
      //skip over silent contraction terms
      //we will continue on it, but not start on it
      if (reg_i === 0) {
        return null;
      }
      //try the next term, but with this regex again
      term_i += 1;
      reg_i -= 1;
      continue;
    }

    //handle partial-matches of lumped terms
    let lumpUntil = lumpMatch(term, regs, reg_i, verbose);
    if (lumpUntil !== null) {
      reg_i = lumpUntil;
      term_i += 1;
      continue;
    }

    //was it optional anways?
    if (reg.optional === true) {
      continue;
    }
    return null;
  }
  return ts.terms.slice(startAt, term_i);
};

module.exports = startHere;

},{"./applyCaptureGroup":167,"./isMatch":171,"./lumpMatch":172}],175:[function(_dereq_,module,exports){
'use strict';
// parse a search lookup term find the regex-like syntax in this term
const fns = _dereq_('./paths').fns;
//regs-
const range = /\{[0-9,]+\}$/;

//trim char#0
const noFirst = function(str) {
  return str.substr(1, str.length);
};
const noLast = function(str) {
  return str.substring(0, str.length - 1);
};

//turn 'regex-like' search string into parsed json
const parse_term = function(term) {
  term = term || '';
  term = term.trim();

  let reg = {};
  //order matters here

  //1-character hasta be a text-match
  if (term.length === 1 && term !== '.' && term !== '*') {
    reg.normal = term.toLowerCase();
    return reg;
  }
  //negation ! flag
  if (term.charAt(0) === '!') {
    term = noFirst(term);
    reg.negative = true;
  }
  //leading ^ flag
  if (term.charAt(0) === '^') {
    term = noFirst(term);
    reg.starting = true;
  }
  //trailing $ flag means ending
  if (term.charAt(term.length - 1) === '$') {
    term = noLast(term);
    reg.ending = true;
  }
  //optional flag
  if (term.charAt(term.length - 1) === '?') {
    term = noLast(term);
    reg.optional = true;
  }
  //atleast-one-but-greedy flag
  if (term.charAt(term.length - 1) === '+') {
    term = noLast(term);
    reg.consecutive = true;
  }
  //prefix/suffix/infix matches
  if (term.charAt(term.length - 1) === '_') {
    term = noLast(term);
    reg.prefix = true;
    //try both '-match-'
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
  }
  //min/max any '{1,3}'
  if (term.charAt(term.length - 1) === '}' && range.test(term) === true) {
    let m = term.match(/\{([0-9])*,? ?([0-9]+)\}/);
    reg.minMax = {
      min: parseInt(m[1], 10) || 0,
      max: parseInt(m[2], 10)
    };
    term = term.replace(range, '');
  }
  //pos flag
  if (term.charAt(0) === '#') {
    term = noFirst(term);
    reg.tag = fns.titleCase(term);
    term = '';
  }
  //support /regex/ mode
  if (term.charAt(0) === '/' && term.charAt(term.length - 1) === '/') {
    term = noLast(term);
    term = noFirst(term);
    //actually make the regex
    reg.regex = new RegExp(term, 'i');
    term = '';
  }
  //one_of options flag
  if (term.charAt(0) === '(' && term.charAt(term.length - 1) === ')') {
    term = noLast(term);
    term = noFirst(term);
    let arr = term.split(/\|/g);
    reg.oneOf = {
      terms: {},
      tagArr: []
    };
    arr.forEach(str => {
      //try a tag match
      if (str.charAt(0) === '#') {
        let tag = str.substr(1, str.length);
        tag = fns.titleCase(tag);
        reg.oneOf.tagArr.push(tag);
      } else {
        reg.oneOf.terms[str] = true;
      }
    });
    term = '';
  }
  //a period means any one term
  if (term === '.') {
    reg.anyOne = true;
    term = '';
  }
  //a * means anything until sentence end
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
};

//turn a match string into an array of objects
const parse_all = function(input) {
  input = input || '';
  let regs = input.split(/ +/);
  //bundle-up multiple-words inside parentheses
  for(let i = 0; i < regs.length; i += 1) {
    if (regs[i].indexOf('(') !== -1 && regs[i].indexOf(')') === -1) {
      let nextWord = regs[i + 1];
      if (nextWord && nextWord.indexOf('(') === -1 && nextWord.indexOf(')') !== -1) {
        regs[i + 1] = regs[i] + ' ' + regs[i + 1];
        regs[i] = '';
      }
    }
  }
  regs = regs.filter((f) => f);
  let captureOn = false;
  regs = regs.map((reg) => {
    let hasEnd = false;
    //support [#Noun] capture-group syntax
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

module.exports = parse_all;
// console.log(JSON.stringify(parse_all('the (canadian|united states|british) senate'), null, 2));

},{"./paths":173}],176:[function(_dereq_,module,exports){
'use strict';
//
const syntax = _dereq_('./lib/syntax');
const startHere = _dereq_('./lib/startHere');
const Text = _dereq_('../../text');

const addfns = Terms => {
  const fns = {
    //blacklist from a {word:true} object
    notObj: function(r, obj) {
      let matches = [];
      let current = [];
      r.terms.forEach(t => {
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
      });
      //add remainder
      if (current.length) {
        matches.push(current);
      }
      matches = matches.map(a => {
        return new Terms(a, r.world, r.refText, r.refTerms);
      });
      return new Text(matches, r.world, r.parent);
    },

    //blacklist from a match string
    notString: function(r, want, verbose) {
      let matches = [];
      let regs = syntax(want);
      let terms = [];
      //try the match starting from each term
      for (let i = 0; i < r.terms.length; i++) {
        let bad = startHere(r, i, regs, verbose);
        if (bad && bad.length > 0) {
          //reset matches
          if (terms.length > 0) {
            matches.push(terms);
            terms = [];
          }
          //skip these terms now
          i += bad.length - 1;
          continue;
        }
        terms.push(r.terms[i]);
      }
      //remaining ones
      if (terms.length > 0) {
        matches.push(terms);
      }
      matches = matches.map(a => {
        return new Terms(a, r.world, r.refText, r.refTerms);
      });
      // return matches
      return new Text(matches, r.world, r.parent);
    }
  };
  //blacklist from a [word, word] array
  fns.notArray = function(r, arr) {
    let obj = arr.reduce((h, a) => {
      h[a] = true;
      return h;
    }, {});
    return fns.notObj(r, obj);
  };
  fns.notText = function(r, m) {
    let arr = m.out('array'); //i guess this is fine..
    return fns.notArray(r, arr);
  };

  /**return everything but these matches*/
  Terms.prototype.not = function(want, verbose) {
    //support [word, word] blacklist
    if (typeof want === 'object') {
      let type = Object.prototype.toString.call(want);
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
const mutate = _dereq_('../mutate');

const addMethod = (Terms) => {

  //hook it into Terms.proto
  Terms.prototype.delete = function (reg) {
    //don't touch parent if empty
    if (!this.found) {
      return this;
    }
    //remove all selected
    if (!reg) {
      this.parentTerms = mutate.deleteThese(this.parentTerms, this);
      return this;
    }
    //only remove a portion of this
    let found = this.match(reg);
    if (found.found) {
      let r = mutate.deleteThese(this, found);
      return r;
    }
    return this.parentTerms;
  };

  return Terms;
};

module.exports = addMethod;

},{"../mutate":188}],178:[function(_dereq_,module,exports){
'use strict';
const mutate = _dereq_('../mutate');

//whitespace
const addSpaceAt = (ts, i) => {
  if (!ts.terms.length || !ts.terms[i]) {
    return ts;
  }
  ts.terms[i].whitespace.before = ' ';
  return ts;
};

const insertMethods = (Terms) => {

  //accept any sorta thing
  const ensureTerms = function(input, world) {
    if (input.isA === 'Terms') {
      return input;
    }
    if (input.isA === 'Term') {
      return new Terms([input], world);
    }
    //handle a string
    let ts = Terms.fromString(input, world);
    ts.tagger();
    return ts;
  };

  const methods = {

    insertBefore: function (input, tag) {
      let original_l = this.terms.length;
      let ts = ensureTerms(input, this.world);
      if (tag) {
        ts.tag(tag);
      }
      let index = this.index();
      //pad a space on parent
      addSpaceAt(this.parentTerms, index);
      if (index > 0) {
        addSpaceAt(ts, 0); //if in middle of sentence
      }
      this.parentTerms.terms = mutate.insertAt(this.parentTerms.terms, index, ts);
      //also copy them to current selection
      if (this.terms.length === original_l) {
        this.terms = ts.terms.concat(this.terms);
      }
      return this;
    },

    insertAfter: function (input, tag) {
      let original_l = this.terms.length;
      let ts = ensureTerms(input, this.world);
      if (tag) {
        ts.tag(tag);
      }
      let index = this.terms[this.terms.length - 1].index();
      //beginning whitespace to ts
      addSpaceAt(ts, 0);
      this.parentTerms.terms = mutate.insertAt(this.parentTerms.terms, index + 1, ts);
      //also copy them to current selection
      if (this.terms.length === original_l) {
        this.terms = this.terms.concat(ts.terms);
      }
      return this;
    },

    insertAt: function (index, input, tag) {
      if (index < 0) {
        index = 0;
      }
      let original_l = this.terms.length;
      let ts = ensureTerms(input, this.world);
      //tag that thing too
      if (tag) {
        ts.tag(tag);
      }
      if (index > 0) {
        addSpaceAt(ts, 0); //if in middle of sentence
      }
      this.parentTerms.terms = mutate.insertAt(this.parentTerms.terms, index, ts);
      //also copy them to current selection
      if (this.terms.length === original_l) {
        //splice the new terms into this (yikes!)
        Array.prototype.splice.apply(this.terms, [index, 0].concat(ts.terms));
      }
      //beginning whitespace to ts
      if (index === 0) {
        this.terms[0].whitespace.before = '';
        ts.terms[ts.terms.length - 1].whitespace.after = ' ';
      }
      return this;
    }

  };

  //hook them into result.proto
  Object.keys(methods).forEach((k) => {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = insertMethods;

},{"../mutate":188}],179:[function(_dereq_,module,exports){
'use strict';
//these methods are simply term-methods called in a loop

const addMethods = (Terms) => {

  const foreach = [
    // ['tag'],
    // ['unTag'],
    // ['canBe'],
    ['toUpperCase', 'UpperCase'],
    ['toLowerCase'],
    ['toTitleCase', 'TitleCase'],
  // ['toCamelCase', 'CamelCase'],
  ];

  foreach.forEach((arr) => {
    let k = arr[0];
    let tag = arr[1];
    let myFn = function () {
      let args = arguments;
      this.terms.forEach((t) => {
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
const Term = _dereq_('../../../term');
//merge two term objects.. carefully

const makeText = (a, b) => {
  let text = a.whitespace.before + a.text + a.whitespace.after;
  text += b.whitespace.before + b.text + b.whitespace.after;
  return text;
};

const combine = function(s, i) {
  let a = s.terms[i];
  let b = s.terms[i + 1];
  if (!b) {
    return;
  }
  let text = makeText(a, b);
  s.terms[i] = new Term(text, a.context);
  s.terms[i].normal = a.normal + ' ' + b.normal;
  s.terms[i].lumped = true;
  s.terms[i].parentTerms = s.terms[i + 1].parentTerms;
  s.terms[i + 1] = null;
  s.terms = s.terms.filter((t) => t !== null);
  return;
};

module.exports = combine;

},{"../../../term":143}],181:[function(_dereq_,module,exports){
'use strict';
const combine = _dereq_('./combine');
const mutate = _dereq_('../../mutate');

//merge-together our current match into one term
const combineThem = function(ts, tags) {
  let len = ts.terms.length;
  for(let i = 0; i < len; i++) {
    combine(ts, 0);
  }
  let lumped = ts.terms[0];
  lumped.tags = tags;
  return lumped;
};

const lumpMethods = (Terms) => {

  Terms.prototype.lump = function () {
    //collect the tags up
    let index = this.index();
    let tags = {};
    this.terms.forEach((t) => {
      Object.keys(t.tags).forEach((tag) => tags[tag] = true);
    });
    //just lump the whole-thing together
    if (this.parentTerms === this) {
      let lumped = combineThem(this, tags);
      this.terms = [lumped];
      return this;
    }
    //otherwise lump just part of it. delete/insert.
    this.parentTerms = mutate.deleteThese(this.parentTerms, this);
    //merge-together our current match into one term
    let lumped = combineThem(this, tags);
    //put it back (in the same place)
    this.parentTerms.terms = mutate.insertAt(this.parentTerms.terms, index, lumped);
    return this;
  };

  return Terms;
};

module.exports = lumpMethods;

},{"../../mutate":188,"./combine":180}],182:[function(_dereq_,module,exports){
'use strict';
const tagger = _dereq_('../../tagger');

const miscMethods = Terms => {
  const methods = {
    tagger: function() {
      tagger(this);
      return this;
    },
    firstTerm: function() {
      return this.terms[0];
    },
    lastTerm: function() {
      return this.terms[this.terms.length - 1];
    },
    all: function() {
      return this.parent;
    },
    data: function() {
      return {
        text: this.out('text'),
        normal: this.out('normal')
      };
    },
    term: function(n) {
      return this.terms[n];
    },
    first: function() {
      let t = this.terms[0];
      return new Terms([t], this.world, this.refText, this.refTerms);
    },
    last: function() {
      let t = this.terms[this.terms.length - 1];
      return new Terms([t], this.world, this.refText, this.refTerms);
    },
    slice: function(start, end) {
      let terms = this.terms.slice(start, end);
      return new Terms(terms, this.world, this.refText, this.refTerms);
    },
    index: function() {
      let parent = this.parentTerms;
      let first = this.terms[0];
      if (!parent || !first) {
        return null; //maybe..
      }
      for (let i = 0; i < parent.terms.length; i++) {
        if (first === parent.terms[i]) {
          return i;
        }
      }
      return null;
    },
    termIndex: function() {
      let first = this.terms[0];
      let ref = this.refText || this;
      if (!ref || !first) {
        return null; //maybe..
      }
      let n = 0;
      for (let i = 0; i < ref.list.length; i++) {
        let ts = ref.list[i];
        for (let o = 0; o < ts.terms.length; o++) {
          if (ts.terms[o] === first) {
            return n;
          }
          n += 1;
        }
      }
      return n;
    },
    //number of characters in this match
    chars: function() {
      return this.terms.reduce((i, t) => {
        i += t.whitespace.before.length;
        i += t.text.length;
        i += t.whitespace.after.length;
        return i;
      }, 0);
    },
    //just .length
    wordCount: function() {
      return this.terms.length;
    },
    /** punctuation */
    setPunctuation: function(punct) {
      let last = this.terms[this.terms.length - 1];
      last.setPunctuation(punct);
    },
    getPunctuation: function() {
      let lastTerm = this.last().terms[0];
      if (!lastTerm) {
        return '';
      }
      return lastTerm.getPunctuation() || '';
    },
    //this has term-order logic, so has to be here
    toCamelCase: function() {
      this.toTitleCase();
      this.terms.forEach((t, i) => {
        if (i !== 0) {
          t.whitespace.before = '';
        }
        t.whitespace.after = '';
      });
      this.tag('#CamelCase', 'toCamelCase');
      return this;
    }
  };

  //hook them into result.proto
  Object.keys(methods).forEach(k => {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = miscMethods;

},{"../../tagger":95}],183:[function(_dereq_,module,exports){
'use strict';
const fns = _dereq_('../paths').fns;

const methods = {
  text: function(ts) {
    return ts.terms.reduce((str, t) => {
      str += t.out('text');
      return str;
    }, '');
  },
  //like 'text', but no leading/trailing whitespace
  match: function(ts) {
    let str = '';
    let len = ts.terms.length;
    for (let i = 0; i < len; i++) {
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

  normal: function(ts) {
    let terms = ts.terms.filter(t => {
      return t.text;
    });
    terms = terms.map(t => {
      return t.normal; //+ punct;
    });
    return terms.join(' ');
  },

  grid: function(ts) {
    let str = '  ';
    str += ts.terms.reduce((s, t) => {
      s += fns.leftPad(t.text, 11);
      return s;
    }, '');
    return str + '\n\n';
  },

  color: function(ts) {
    return ts.terms.reduce((s, t) => {
      s += fns.printTerm(t);
      return s;
    }, '');
  },
  csv: function(ts) {
    return ts.terms.map(t => t.normal.replace(/,/g, '')).join(',');
  },

  newlines: function(ts) {
    return ts.terms
      .reduce((str, t) => {
        str += t.out('text').replace(/\n/g, ' ');
        return str;
      }, '')
      .replace(/^\s/, '');
  },
  /** no punctuation, fancy business **/
  root: function(ts) {
    return ts.terms.map(t => t.silent_term || t.root).join(' ').toLowerCase();
  },

  html: function(ts) {
    return ts.terms.map(t => t.render.html()).join(' ');
  },
  debug: function(ts) {
    ts.terms.forEach(t => {
      t.out('debug');
    });
  },
  custom: function(ts, obj) {
    return ts.terms.map((t) => {
      return Object.keys(obj).reduce((h, k) => {
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

const renderMethods = Terms => {
  Terms.prototype.out = function(fn) {
    if (typeof fn === 'string') {
      if (methods[fn]) {
        return methods[fn](this);
      }
    } else if (fns.isObject(fn) === true) { //support .out({})
      return methods.custom(this, fn);
    }
    return methods.text(this);
  };
  //check method
  Terms.prototype.debug = function() {
    return methods.debug(this);
  };
  return Terms;
};

module.exports = renderMethods;

},{"../paths":189}],184:[function(_dereq_,module,exports){
'use strict';
const mutate = _dereq_('../mutate');

const replaceMethods = Terms => {
  const methods = {
    /**swap this for that */
    replace: function(str1, str2, keepTags) {
      //in this form, we 'replaceWith'
      if (str2 === undefined) {
        return this.replaceWith(str1, keepTags);
      }
      this.match(str1).replaceWith(str2, keepTags);
      return this;
    },

    /**swap this for that */
    replaceWith: function(str, keepTags) {
      let newTs = Terms.fromString(str, this.world);
      newTs.tagger();
      //if instructed, apply old tags to new terms
      if (keepTags) {
        this.terms.forEach((t, i) => {
          let tags = Object.keys(t.tags);
          if (newTs.terms[i] !== undefined) {
            tags.forEach(tg => newTs.terms[i].tag(tg, 'from-memory'));
          }
        });
      }
      //keep its ending punctation..
      let endPunct = this.getPunctuation();
      //grab the insertion place..
      let index = this.index();
      this.parentTerms = mutate.deleteThese(this.parentTerms, this);
      this.parentTerms.terms = mutate.insertAt(this.parentTerms.terms, index, newTs);
      this.terms = newTs.terms;
      //add-in the punctuation at the end..
      if (this.terms.length > 0) {
        this.terms[this.terms.length - 1].whitespace.after += endPunct;
      }
      return this;
    }
  };

  //hook them into result.proto
  Object.keys(methods).forEach(k => {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = replaceMethods;

},{"../mutate":188}],185:[function(_dereq_,module,exports){
'use strict';

//break apart a termlist into (before, match after)
const breakUpHere = (terms, ts) => {
  let firstTerm = ts.terms[0];
  let len = ts.terms.length;
  for (let i = 0; i < terms.length; i++) {
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

const splitMethods = Terms => {
  const methods = {
    /** at the end of the match, split the terms **/
    splitAfter: function(reg, verbose) {
      let ms = this.match(reg, verbose); //Array[ts]
      let termArr = this.terms;
      let all = [];
      ms.list.forEach(lookFor => {
        let section = breakUpHere(termArr, lookFor);
        if (section.before && section.match) {
          all.push(section.before.concat(section.match));
        }
        termArr = section.after;
      });
      //add the remaining
      if (termArr.length) {
        all.push(termArr);
      }
      //make them termlists
      all = all.map(ts => {
        let parent = this.refText; //|| this;
        return new Terms(ts, this.world, parent, this.refTerms);
      });
      return all;
    },

    /** return only before & after  the match**/
    splitOn: function(reg, verbose) {
      let ms = this.match(reg, verbose); //Array[ts]
      let termArr = this.terms;
      let all = [];
      ms.list.forEach(lookFor => {
        let section = breakUpHere(termArr, lookFor);
        if (section.before) {
          all.push(section.before);
        }
        if (section.match) {
          all.push(section.match);
        }
        termArr = section.after;
      });
      //add the remaining
      if (termArr.length) {
        all.push(termArr);
      }
      //make them termlists
      all = all.filter(a => a && a.length);
      all = all.map(ts => new Terms(ts, ts.world, ts.refText, this.refTerms));
      return all;
    },

    /** at the start of the match, split the terms**/
    splitBefore: function(reg, verbose) {
      let ms = this.match(reg, verbose); //Array[ts]
      let termArr = this.terms;
      let all = [];
      ms.list.forEach(lookFor => {
        let section = breakUpHere(termArr, lookFor);
        if (section.before) {
          all.push(section.before);
        }
        if (section.match) {
          all.push(section.match);
        }
        termArr = section.after;
      });
      //add the remaining
      if (termArr.length) {
        all.push(termArr);
      }
      //cleanup-step: merge all (middle) matches with the next one
      for (let i = 0; i < all.length; i++) {
        for (let o = 0; o < ms.length; o++) {
          if (ms.list[o].terms[0] === all[i][0]) {
            if (all[i + 1]) {
              all[i] = all[i].concat(all[i + 1]);
              all[i + 1] = [];
            }
          }
        }
      }
      //make them termlists
      all = all.filter(a => a && a.length);
      all = all.map(ts => new Terms(ts, ts.world, ts.refText, this.refTerms));
      return all;
    }
  };

  //hook them into result.proto
  Object.keys(methods).forEach(k => {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = splitMethods;
exports = splitMethods;

},{}],186:[function(_dereq_,module,exports){
'use strict';
const addMethod = Terms => {
  const methods = {
    tag: function(tag, reason) {
      let tags = [];
      if (typeof tag === 'string') {
        tags = tag.split(' ');
      }
      //fancy version:
      if (tags.length > 1) {
        //do indepenent tags for each term:
        this.terms.forEach((t, i) => {
          t.tag(tags[i], reason);
        });
        return this;
      }
      //non-fancy version:
      this.terms.forEach(t => {
        t.tag(tag, reason);
      });
      return this;
    },

    unTag: function(tag, reason) {
      let tags = [];
      if (typeof tag === 'string') {
        tags = tag.split(' ');
      }
      //fancy version:
      if (tags.length > 1) {
        //do indepenent tags for each term:
        this.terms.forEach((t, i) => {
          t.unTag(tags[i], reason);
        });
        return this;
      }
      //non-fancy version:
      this.terms.forEach(t => {
        t.unTag(tag, reason);
      });
      return this;
    },

    //which terms are consistent with this tag
    canBe: function(tag) {
      let terms = this.terms.filter(t => t.canBe(tag));
      return new Terms(terms, this.world, this.refText, this.refTerms);
    }
  };
  //hook them into result.proto
  Object.keys(methods).forEach(k => {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = addMethod;

},{}],187:[function(_dereq_,module,exports){
'use strict';

const transforms = Terms => {
  const methods = {
    clone: function() {
      // this.world = this.world.clone();
      let terms = this.terms.map(t => {
        return t.clone();
      });
      return new Terms(terms, this.world, this.refText, null); //, this.refTerms
    },
    hyphenate: function() {
      this.terms.forEach((t, i) => {
        if (i !== this.terms.length - 1) {
          t.whitespace.after = '-';
        }
        if (i !== 0) {
          t.whitespace.before = '';
        }
      });
      return this;
    },
    dehyphenate: function() {
      this.terms.forEach(t => {
        if (t.whitespace.after === '-') {
          t.whitespace.after = ' ';
        }
      });
      return this;
    },
    trim: function() {
      if (this.length <= 0) {
        return this;
      }
      this.terms[0].whitespace.before = '';
      this.terms[this.terms.length - 1].whitespace.after = '';
      return this;
    }
  };

  //hook them into result.proto
  Object.keys(methods).forEach(k => {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = transforms;

},{}],188:[function(_dereq_,module,exports){
'use strict';
//
const getTerms = (needle) => {
  let arr = [];
  if (needle.isA === 'Terms') {
    arr = needle.terms;
  } else if (needle.isA === 'Text') {
    arr = needle.flatten().list[0].terms;
  } else if (needle.isA === 'Term') {
    arr = [needle];
  }
  return arr;
};

//remove them
exports.deleteThese = (source, needle) => {
  let arr = getTerms(needle);
  source.terms = source.terms.filter((t) => {
    for (let i = 0; i < arr.length; i++) {
      if (t === arr[i]) {
        return false;
      }
    }
    return true;
  });
  return source;
};

//add them
exports.insertAt = (terms, i, needle) => {
  needle.dirty = true;
  let arr = getTerms(needle);
  //handle whitespace
  if (i > 0 && arr[0] && !arr[0].whitespace.before) {
    arr[0].whitespace.before = ' ';
  }
  //gnarly splice
  //-( basically  - terms.splice(i+1, 0, arr) )
  Array.prototype.splice.apply(terms, [i, 0].concat(arr));
  return terms;
};

},{}],189:[function(_dereq_,module,exports){
module.exports = {
  fns: _dereq_('../fns'),
  Term: _dereq_('../term')
};

},{"../fns":3,"../term":143}],190:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('./index');
const tokenize = _dereq_('./tokenize');
const paths = _dereq_('./paths');
const Terms = paths.Terms;
const fns = paths.fns;

const fromString = (str, world) => {
  let sentences = [];
  //allow pre-tokenized input
  if (fns.isArray(str)) {
    sentences = str;
  } else {
    str = fns.ensureString(str);
    sentences = tokenize(str);
  }
  let list = sentences.map(s => Terms.fromString(s, world));

  let doc = new Text(list, world);
  //give each ts a ref to the result
  doc.list.forEach(ts => {
    ts.refText = doc;
  });
  return doc;
};
module.exports = fromString;

},{"./index":192,"./paths":205,"./tokenize":207}],191:[function(_dereq_,module,exports){
module.exports = {
  /** did it find anything? */
  found: function() {
    return this.list.length > 0;
  },
  /** just a handy wrap*/
  parent: function() {
    return this.original || this;
  },
  /** how many Texts are there?*/
  length: function() {
    return this.list.length;
  },
  /** nicer than constructor.call.name or whatever*/
  isA: function() {
    return 'Text';
  },
  /** the whitespace before and after this match*/
  whitespace: function() {
    return {
      before: str => {
        this.list.forEach(ts => {
          ts.whitespace.before(str);
        });
        return this;
      },
      after: str => {
        this.list.forEach(ts => {
          ts.whitespace.after(str);
        });
        return this;
      }
    };
  }
};

},{}],192:[function(_dereq_,module,exports){
'use strict';
//a Text is an array of termLists
const getters = _dereq_('./getters');

function Text(arr, world, original) {
  this.list = arr || [];
  if (typeof world === 'function') {
    world = world();
  }
  this.world = () => {
    return world;
  };
  this.original = original;
  //apply getters
  let keys = Object.keys(getters);
  for (let i = 0; i < keys.length; i++) {
    Object.defineProperty(this, keys[i], {
      get: getters[keys[i]]
    });
  }
}
module.exports = Text;

Text.addMethods = function(cl, obj) {
  let fns = Object.keys(obj);
  for (let i = 0; i < fns.length; i++) {
    cl.prototype[fns[i]] = obj[fns[i]];
  }
};

//make a sub-class of this class easily
Text.makeSubset = function(methods, find) {
  let Subset = function(arr, world, original) {
    Text.call(this, arr, world, original);
  };
  //inheritance
  Subset.prototype = Object.create(Text.prototype);
  Text.addMethods(Subset, methods);
  Subset.find = find;
  return Subset;
};

//apply instance methods
_dereq_('./methods/misc')(Text);
_dereq_('./methods/loops')(Text);
_dereq_('./methods/match')(Text);
_dereq_('./methods/out')(Text);
_dereq_('./methods/sort')(Text);
_dereq_('./methods/split')(Text);
_dereq_('./methods/normalize')(Text);
_dereq_('./subsets')(Text);

//apply subset methods
const subset = {
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
Object.keys(subset).forEach(k => {
  Text.prototype[k] = function(num, arg) {
    let sub = subset[k];
    let m = sub.find(this, num, arg);
    return new subset[k](m.list, this.world, this.parent);
  };
});
//aliases
Text.prototype.words = Text.prototype.terms;

},{"../subset/acronyms":9,"../subset/adjectives":10,"../subset/adverbs":17,"../subset/contractions":23,"../subset/dates":25,"../subset/ngrams":35,"../subset/ngrams/endGrams":32,"../subset/ngrams/startGrams":36,"../subset/nouns":38,"../subset/people":49,"../subset/possessives":51,"../subset/sentences":52,"../subset/terms":58,"../subset/values":65,"../subset/verbs":75,"./getters":191,"./methods/loops":193,"./methods/match":194,"./methods/misc":195,"./methods/normalize":196,"./methods/out":197,"./methods/sort":202,"./methods/split":204,"./subsets":206}],193:[function(_dereq_,module,exports){
'use strict';
//this methods are simply loops around each termList object.
const methods = [
  'toTitleCase',
  'toUpperCase',
  'toLowerCase',
  'toCamelCase',

  'hyphenate',
  'dehyphenate',
  'trim',

  'insertBefore',
  'insertAfter',
  'insertAt',

  'replace',
  'replaceWith',

  'delete',
  'lump',

  'tagger',

  // 'tag',
  'unTag',
];

const addMethods = (Text) => {
  methods.forEach((k) => {
    Text.prototype[k] = function () {
      for(let i = 0; i < this.list.length; i++) {
        this.list[i][k].apply(this.list[i], arguments);
      }
      return this;
    };
  });

  //add an extra optimisation for tag method
  Text.prototype.tag = function() {
    //fail-fast optimisation
    if (this.list.length === 0) {
      return this;
    }
    for(let i = 0; i < this.list.length; i++) {
      this.list[i].tag.apply(this.list[i], arguments);
    }
    return this;
  };
};

module.exports = addMethods;

},{}],194:[function(_dereq_,module,exports){
'use strict';
const syntaxParse = _dereq_('../../../terms/match/lib/syntax');
const Terms = _dereq_('../../../terms');

const splitMethods = Text => {
  //support "#Noun word" regex-matches
  const matchReg = function(r, reg, verbose) {
    //parse the 'regex' into some json
    let list = [];
    reg = syntaxParse(reg);
    r.list.forEach(ts => {
      //an array of arrays
      let matches = ts.match(reg, verbose);
      matches.list.forEach(ms => {
        list.push(ms);
      });
    });
    let parent = r.parent || r;
    return new Text(list, r.world(), parent);
  };

  //support {word:true} whitelist
  const matchObj = function(r, obj) {
    let matches = [];
    r.list.forEach(ts => {
      ts.terms.forEach(t => {
        if (obj.hasOwnProperty(t.normal) === true) {
          matches.push(t);
        }
      });
    });
    matches = matches.map(t => {
      return new Terms([t], r.world(), r, t.parentTerms);
    });
    return new Text(matches, r.world(), r.parent);
  };

  //support [word, word] whitelist
  const matchArr = function(r, arr) {
    //its faster this way
    let obj = arr.reduce((h, a) => {
      h[a] = true;
      return h;
    }, {});
    return matchObj(r, obj);
  };

  //take a Text object as a match
  const matchTextObj = function(r, m) {
    let arr = m.out('array'); //i guess this is fine..
    return matchArr(r, arr);
  };

  const methods = {
    /** do a regex-like search through terms and return a subset */
    match: function(reg, verbose) {
      //fail-fast
      if (this.list.length === 0 || reg === undefined || reg === null) {
        let parent = this.parent || this;
        return new Text([], this.world(), parent);
      }
      //match "#Noun word" regex
      if (typeof reg === 'string' || typeof reg === 'number') {
        return matchReg(this, reg, verbose);
      }
      //match [word, word] whitelist
      let type = Object.prototype.toString.call(reg);
      if (type === '[object Array]') {
        return matchArr(this, reg);
      }
      //match {word:true} whitelist
      if (type === '[object Object]') {
        if (reg.isA === 'Text') {
          return matchTextObj(this, reg);
        } else {
          return matchObj(this, reg);
        }
      }
      return this;
    },

    not: function(reg, verbose) {
      let list = [];
      this.list.forEach(ts => {
        let found = ts.not(reg, verbose);
        list = list.concat(found.list);
      });
      let parent = this.parent || this;
      return new Text(list, this.world(), parent);
    },

    if: function(reg) {
      let list = [];
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].has(reg) === true) {
          list.push(this.list[i]);
        }
      }
      let parent = this.parent || this;
      return new Text(list, this.world(), parent);
    },

    ifNo: function(reg) {
      let list = [];
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].has(reg) === false) {
          list.push(this.list[i]);
        }
      }
      let parent = this.parent || this;
      return new Text(list, this.world(), parent);
    },

    has: function(reg) {
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].has(reg) === true) {
          return true;
        }
      }
      return false;
    },

    /**find a match, and return everything infront of it*/
    before: function(reg) {
      let list = [];
      for (let i = 0; i < this.list.length; i++) {
        let m = this.list[i].matchOne(reg);
        if (m) {
          let index = m[0].index();
          let found = this.list[i].slice(0, index);
          if (found.length > 0) {
            list.push(found);
          }
        }
      }
      let parent = this.parent || this;
      return new Text(list, this.world(), parent);
    },

    /**find a match, and return everything after of it*/
    after: function(reg) {
      let list = [];
      for (let i = 0; i < this.list.length; i++) {
        let m = this.list[i].matchOne(reg);
        if (m) {
          let lastTerm = m[m.length - 1];
          let index = lastTerm.index();
          let found = this.list[i].slice(index + 1, this.list[i].length);
          if (found.length > 0) {
            list.push(found);
          }
        }
      }
      let parent = this.parent || this;
      return new Text(list, this.world(), parent);
    }
  };
  //alias 'and'
  methods.and = methods.match;
  methods.notIf = methods.ifNo;
  methods.only = methods.if;
  methods.onlyIf = methods.if;

  //hook them into result.proto
  Text.addMethods(Text, methods);
  return Text;
};

module.exports = splitMethods;

},{"../../../terms":165,"../../../terms/match/lib/syntax":175}],195:[function(_dereq_,module,exports){
'use strict';
const Terms = _dereq_('../../terms');

const miscMethods = Text => {
  const methods = {
    all: function() {
      return this.parent;
    },
    index: function() {
      return this.list.map(ts => ts.index());
    },
    wordCount: function() {
      return this.terms().length;
    },
    data: function() {
      return this.list.map(ts => ts.data());
    },
    /* javascript array loop-wrappers */
    map: function(fn) {
      return this.list.map((ts, i) => {
        let text = new Text([ts], this.world);
        return fn(text, i);
      });
    },
    forEach: function(fn) {
      this.list.forEach((ts, i) => {
        let text = new Text([ts], this.world);
        fn(text, i);
      });
      return this;
    },
    filter: function(fn) {
      let list = this.list.filter((ts, i) => {
        let text = new Text([ts], this.world);
        return fn(text, i);
      });
      return new Text(list, this.world);
    },
    reduce: function(fn, h) {
      return this.list.reduce((_h, ts) => {
        let text = new Text([ts], this.world);
        return fn(_h, text);
      }, h);
    },
    find: function(fn) {
      for (let i = 0; i < this.list.length; i++) {
        let ts = this.list[i];
        let text = new Text([ts], this.world);
        if (fn(text)) {
          return text;
        }
      }
      return undefined;
    },
    /**copy data properly so later transformations will have no effect*/
    clone: function() {
      let list = this.list.map(ts => {
        return ts.clone();
      });
      return new Text(list, this.world); //this.lexicon, this.parent
    },

    /** get the nth term of each result*/
    term: function(n) {
      let list = this.list.map(ts => {
        let arr = [];
        let el = ts.terms[n];
        if (el) {
          arr = [el];
        }
        return new Terms(arr, this.world, this.refText, this.refTerms);
      });
      return new Text(list, this.world, this.parent);
    },
    firstTerm: function() {
      return this.match('^.');
    },
    lastTerm: function() {
      return this.match('.$');
    },

    /** grab a subset of the results*/
    slice: function(start, end) {
      this.list = this.list.slice(start, end);
      return this;
    },

    /** use only the nth result*/
    get: function(n) {
      //return an empty result
      if ((!n && n !== 0) || !this.list[n]) {
        return new Text([], this.world, this.parent);
      }
      let ts = this.list[n];
      return new Text([ts], this.world, this.parent);
    },
    /**use only the first result */
    first: function(n) {
      if (!n && n !== 0) {
        return this.get(0);
      }
      return new Text(this.list.slice(0, n), this.world, this.parent);
    },
    /**use only the last result */
    last: function(n) {
      if (!n && n !== 0) {
        return this.get(this.list.length - 1);
      }
      let end = this.list.length;
      let start = end - n;
      return new Text(this.list.slice(start, end), this.world, this.parent);
    },

    concat: function() {
      //any number of params
      for (let i = 0; i < arguments.length; i++) {
        let p = arguments[i];
        if (typeof p === 'object') {
          //Text()
          if (p.isA === 'Text' && p.list) {
            this.list = this.list.concat(p.list);
          }
          //Terms()
          if (p.isA === 'Terms') {
            this.list.push(p);
          }
        }
      }
      return this;
    },

    /** make it into one sentence/termlist */
    flatten: function() {
      let terms = [];
      this.list.forEach(ts => {
        terms = terms.concat(ts.terms);
      });
      //dont create an empty ts
      if (!terms.length) {
        return new Text(null, this.world, this.parent);
      }
      let ts = new Terms(terms, this.world, this, null);
      return new Text([ts], this.world, this.parent);
    },

    /** see if these terms can become this tag*/
    canBe: function(tag) {
      this.list.forEach(ts => {
        ts.terms = ts.terms.filter(t => {
          return t.canBe(tag);
        });
      });
      return this;
    },

    /** sample part of the array */
    random: function(n) {
      n = n || 1;
      let r = Math.floor(Math.random() * this.list.length);
      let arr = this.list.slice(r, r + n);
      //if we're off the end, add some from the start
      if (arr.length < n) {
        let diff = n - arr.length;
        if (diff > r) {
          diff = r; //prevent it from going full-around
        }
        arr = arr.concat(this.list.slice(0, diff));
      }
      return new Text(arr, this.world, this.parent);
    },
    setPunctuation: function(punct) {
      this.list.forEach((ts) => ts.setPunctuation(punct));
      return this;
    },
    getPunctuation: function(num) {
      //support num param
      if (num || num === 0) {
        if (!this.list[num]) {
          return '';
        }
        return this.list[num].getPunctuation();
      }
      return this.list.map((ts) => ts.getPunctuation());
    },
    //jquery-like api aliases
    offset: function() {
      return this.out('offset');
    },
    text: function() {
      return this.out('text');
    }
  };
  //aliases
  methods.eq = methods.get;
  methods.join = methods.flatten;
  Text.addMethods(Text, methods);
};

module.exports = miscMethods;

},{"../../terms":165}],196:[function(_dereq_,module,exports){
'use strict';
const unicode = _dereq_('../../term/methods/normalize/unicode');
//
const defaults = {
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
  honorifics: false,
};

const methods = {
  /** make only one space between each word */
  whitespace: r => {
    r.terms().list.forEach((ts, i) => {
      let t = ts.terms[0];
      if (i > 0 && !t.silent_term) {
        t.whitespace.before = ' ';
      } else if (i === 0) {
        t.whitespace.before = '';
      }
      t.whitespace.after = '';
      //add normalized quotation symbols
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
  case: r => {
    r.list.forEach(ts => {
      ts.terms.forEach((t, i) => {
        if (i === 0 || t.tags.Person || t.tags.Place || t.tags.Organization) {
          // ts.toTitleCase() //fixme: too weird here.
        } else {
          ts.toLowerCase();
        }
      });
    });
    return r;
  },

  /** turn 'five' to 5, and 'fifth' to 5th*/
  numbers: r => {
    r.values().toNumber();
    return r;
  },

  /** remove commas, semicolons - but keep sentence-ending punctuation*/
  punctuation: r => {
    r.list.forEach(ts => {
      if (!ts.terms.length) {
        return;
      }

      //first-term punctuation
      ts.terms[0]._text = ts.terms[0]._text.replace(/^¿/, '');
      //middle-terms
      for (let i = 0; i < ts.terms.length - 1; i++) {
        let t = ts.terms[i];
        //remove non-sentence-ending stuff
        t._text = t._text.replace(/[:;,]$/, '');
      }
      //replace !!! with !
      let last = ts.terms[ts.terms.length - 1];
      last._text = last._text.replace(/\.+$/, '.');
      last._text = last._text.replace(/!+$/, '!');
      last._text = last._text.replace(/\?+!?$/, '?'); //support '?!'
    });
    return r;
  },

  // turn Björk into Bjork
  unicode: r => {
    r.list.forEach((ts) => {
      ts.terms.forEach((t) => {
        t.text = unicode(t.text);
      });
    });
    return r;
  },

  //expand all contractions
  contractions: r => {
    r.contractions().expand();
    return r;
  },
  //remove periods from acronyms, like F.B.I.
  acronyms: r => {
    r.acronyms().stripPeriods();
    return r;
  },
  //turn david's → david
  possessives: r => {
    r.possessives().strip();
    return r;
  },
  //strip out parts in (brackets)
  parentheses: r => {
    r.parentheses().delete();
    return r;
  },
  //turn sandwhiches → sandwhich
  plurals: r => { //todo:this has a non-cooperative bug
    r.nouns().toSingular();
    return r;
  },
  //turn ate → eat
  verbs: r => {
    r.verbs().toInfinitive();
    return r;
  },

  //turn 'Sergeant Pepper to 'Pepper'
  honorifics: r => {
    r = r.delete('#Honorific');
    return r;
  }
};

const addMethods = Text => {
  Text.prototype.normalize = function (options) {
    let doc = this;
    //set defaults
    options = options || {};
    let obj = Object.assign({}, defaults);
    let keys = Object.keys(options);
    keys.forEach((k) => {
      obj[k] = options[k];
    });
    //do each type of normalization
    Object.keys(obj).forEach(fn => {
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
const topk = _dereq_('./topk');
const offset = _dereq_('./offset');
const termIndex = _dereq_('./indexes');
const fns = _dereq_('../paths').fns;

const methods = {
  text: r => {
    return r.list.reduce((str, ts) => {
      str += ts.out('text');
      return str;
    }, '');
  },
  match: r => {
    return r.list.reduce((str, ts) => {
      str += ts.out('match');
      return str;
    }, '');
  },
  normal: r => {
    return r.list
      .map(ts => {
        let str = ts.out('normal');
        let last = ts.last();
        if (last) {
          let punct = ts.getPunctuation();
          if (punct === '.' || punct === '!' || punct === '?') {
            str += punct;
          }
        }
        return str;
      })
      .join(' ');
  },
  root: r => {
    return r.list
      .map(ts => {
        return ts.out('root');
      })
      .join(' ');
  },
  /** output where in the original output string they are*/
  offsets: r => {
    return offset(r);
  },
  /** output the tokenized location of this match*/
  index: r => {
    return termIndex(r);
  },
  grid: r => {
    return r.list.reduce((str, ts) => {
      str += ts.out('grid');
      return str;
    }, '');
  },
  color: r => {
    return r.list.reduce((str, ts) => {
      str += ts.out('color');
      return str;
    }, '');
  },
  array: r => {
    return r.list.map(ts => {
      return ts.out('normal');
    });
  },
  csv: r => {
    return r.list
      .map(ts => {
        return ts.out('csv');
      })
      .join('\n');
  },
  newlines: r => {
    return r.list
      .map(ts => {
        return ts.out('newlines');
      })
      .join('\n');
  },
  json: r => {
    return r.list.reduce((arr, ts) => {
      let terms = ts.terms.map(t => {
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
  html: r => {
    let html = r.list.reduce((str, ts) => {
      let sentence = ts.terms.reduce((sen, t) => {
        sen += '\n    ' + t.out('html');
        return sen;
      }, '');
      return (str += '\n  <span>' + sentence + '\n  </span>');
    }, '');
    return '<span> ' + html + '\n</span>';
  },
  terms: r => {
    let arr = [];
    r.list.forEach(ts => {
      ts.terms.forEach(t => {
        arr.push({
          text: t.text,
          normal: t.normal,
          tags: Object.keys(t.tags)
        });
      });
    });
    return arr;
  },
  debug: r => {
    console.log('====');
    r.list.forEach(ts => {
      console.log('   --');
      ts.debug();
    });
    return r;
  },
  topk: r => {
    return topk(r);
  },
  custom: (r, obj) => {
    return r.list.map((ts) => ts.out(obj));
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



const addMethods = Text => {
  Text.prototype.out = function(fn) {
    if (typeof fn === 'string') {
      if (methods[fn]) {
        return methods[fn](this);
      }
    } else if (fns.isObject(fn) === true) { //support .out({})
      return methods.custom(this, fn);
    }
    return methods.text(this);
  };
  Text.prototype.debug = function() {
    return methods.debug(this);
  };
  return Text;
};

module.exports = addMethods;

},{"../paths":201,"./indexes":198,"./offset":199,"./topk":200}],198:[function(_dereq_,module,exports){
'use strict';
//find where in the original text this match is found, by term-counts
const termIndex = (r) => {
  let result = [];
  //find the ones we want
  let want = {};
  r.terms().list.forEach((ts) => {
    want[ts.terms[0].uid] = true;
  });

  //find their counts
  let sum = 0;
  let parent = r.all();
  parent.list.forEach((ts, s) => {
    ts.terms.forEach((t, i) => {
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

const findOffset = (parent, term) => {
  let sum = 0;
  for(let i = 0; i < parent.list.length; i++) {
    for(let o = 0; o < parent.list[i].terms.length; o++) {
      let t = parent.list[i].terms[o];
      if (t.uid === term.uid) {
        return sum;
      } else {
        sum += t.whitespace.before.length + t._text.length + t.whitespace.after.length;
      }
    }
  }
  return null;
};

//like 'text' for the middle, and 'normal' for the start+ends
//used for highlighting the actual words, without whitespace+punctuation
const trimEnds = function(ts) {
  let terms = ts.terms;
  if (terms.length <= 2) {
    return ts.out('normal');
  }
  //the start
  let str = terms[0].normal;
  //the middle
  for(let i = 1; i < terms.length - 1; i++) {
    let t = terms[i];
    str += t.whitespace.before + t.text + t.whitespace.after;
  }
  //the end
  str += ' ' + terms[ts.terms.length - 1].normal;
  return str;
};

//map over all-dem-results
const allOffset = (r) => {
  let parent = r.all();
  return r.list.map((ts) => {
    let words = [];
    for(let i = 0; i < ts.terms.length; i++) {
      words.push(ts.terms[i].normal);
    }
    let nrml = trimEnds(ts);
    let txt = ts.out('text');
    let startAt = findOffset(parent, ts.terms[0]);
    let beforeWord = ts.terms[0].whitespace.before;
    let wordStart = startAt + beforeWord.length;
    return {
      text: txt,
      normal: ts.out('normal'),
      //where we begin
      offset: startAt,
      length: txt.length,
      wordStart: wordStart,
      wordEnd: wordStart + nrml.length,
    // wordLength: words.join(' ').length
    };
  });
};
module.exports = allOffset;

},{}],200:[function(_dereq_,module,exports){
'use strict';
//
const topk = function (r, n) {
  //count occurance
  let count = {};
  r.list.forEach((ts) => {
    let str = ts.out('root');
    count[str] = count[str] || 0;
    count[str] += 1;
  });
  //turn into an array
  let all = [];
  Object.keys(count).forEach((k) => {
    all.push({
      normal: k,
      count: count[k],
    });
  });
  //add percentage
  all.forEach((o) => {
    o.percent = parseFloat(((o.count / r.list.length) * 100).toFixed(2));
  });
  //sort by freq
  all = all.sort((a, b) => {
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
module.exports = _dereq_('../paths');

},{"../paths":205}],202:[function(_dereq_,module,exports){
'use strict';
const sorter = _dereq_('./methods');

const addMethods = (Text) => {

  const fns = {

    /**reorder result.list alphabetically */
    sort: function (method) {
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
    reverse: function () {
      this.list = this.list.reverse();
      return this;
    },

    unique: function () {
      let obj = {};
      this.list = this.list.filter((ts) => {
        let str = ts.out('root');
        if (obj.hasOwnProperty(str)) {
          return false;
        }
        obj[str] = true;
        return true;
      });
      return this;
    }
  };
  //hook them into result.proto
  Text.addMethods(Text, fns);
  return Text;
};

module.exports = addMethods;

},{"./methods":203}],203:[function(_dereq_,module,exports){
'use strict';

//perform sort on pre-computed values
const sortEm = function(arr) {
  arr = arr.sort((a, b) => {
    if (a.index > b.index) {
      return 1;
    }
    if (a.index === b.index) {
      return 0;
    }
    return -1;
  });
  //return ts objects
  return arr.map((o) => o.ts);
};

//alphabetical sorting of a termlist array
exports.alpha = function(r) {
  r.list.sort((a, b) => {
    //#1 performance speedup
    if (a === b) {
      return 0;
    }
    //#2 performance speedup
    if (a.terms[0] && b.terms[0]) {
      if (a.terms[0].root > b.terms[0].root) {
        return 1;
      }
      if (a.terms[0].root < b.terms[0].root) {
        return -1;
      }
    }
    //regular compare
    if (a.out('root') > b.out('root')) {
      return 1;
    }
    return -1;
  });
  return r;
};

//the order they were recieved (chronological~)
exports.chron = function(r) {
  //pre-compute indexes
  let tmp = r.list.map((ts) => {
    return {
      ts: ts,
      index: ts.termIndex()
    };
  });
  r.list = sortEm(tmp);
  return r;
};

//shortest matches first
exports.lengthFn = function(r) {
  //pre-compute indexes
  let tmp = r.list.map((ts) => {
    return {
      ts: ts,
      index: ts.chars()
    };
  });
  r.list = sortEm(tmp).reverse();
  return r;
};

//count the number of terms in each match
exports.wordCount = function(r) {
  //pre-compute indexes
  let tmp = r.list.map((ts) => {
    return {
      ts: ts,
      index: ts.length
    };
  });
  r.list = sortEm(tmp);
  return r;
};

//sort by frequency (like topk)
exports.freq = function(r) {
  //get counts
  let count = {};
  r.list.forEach((ts) => {
    let str = ts.out('root');
    count[str] = count[str] || 0;
    count[str] += 1;
  });
  //pre-compute indexes
  let tmp = r.list.map((ts) => {
    let num = count[ts.out('root')] || 0;
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

const splitMethods = (Text) => {

  const methods = {
    /** turn result into two seperate results */
    splitAfter: function(reg, verbose) {
      let list = [];
      this.list.forEach((ts) => {
        ts.splitAfter(reg, verbose).forEach((mts) => {
          list.push(mts);
        });
      });
      this.list = list;
      return this;
    },
    /** turn result into two seperate results */
    splitBefore: function(reg, verbose) {
      let list = [];
      this.list.forEach((ts) => {
        ts.splitBefore(reg, verbose).forEach((mts) => {
          list.push(mts);
        });
      });
      this.list = list;
      return this;
    },
    /** turn result into two seperate results */
    splitOn: function(reg, verbose) {
      let list = [];
      this.list.forEach((ts) => {
        ts.splitOn(reg, verbose).forEach((mts) => {
          list.push(mts);
        });
      });
      this.list = list;
      return this;
    },
  };

  //hook them into result.proto
  Text.addMethods(Text, methods);
  return Text;
};

module.exports = splitMethods;

},{}],205:[function(_dereq_,module,exports){
arguments[4][201][0].apply(exports,arguments)
},{"../paths":8,"dup":201}],206:[function(_dereq_,module,exports){
'use strict';
const isQuestion = _dereq_('../subset/sentences/isQuestion');
const addSubsets = Text => {
  //these subsets have no instance methods, so are simply a 'find' method.
  const subsets = {
    clauses: function (n) {
      let r = this.splitAfter('#ClauseEnd');
      if (typeof n === 'number') {
        r = r.get(n);
      }
      return r;
    },
    hashTags: function (n) {
      let r = this.match('#HashTag').terms();
      if (typeof n === 'number') {
        r = r.get(n);
      }
      return r;
    },
    organizations: function (n) {
      let r = this.splitAfter('#Comma');
      r = r.match('#Organization+');
      if (typeof n === 'number') {
        r = r.get(n);
      }
      return r;
    },
    phoneNumbers: function (n) {
      let r = this.splitAfter('#Comma');
      r = r.match('#PhoneNumber+');
      if (typeof n === 'number') {
        r = r.get(n);
      }
      return r;
    },
    places: function (n) {
      let r = this.splitAfter('#Comma');
      r = r.match('#Place+');
      if (typeof n === 'number') {
        r = r.get(n);
      }
      return r;
    },
    quotations: function (n) {
      let matches = this.match('#Quotation+');
      let found = [];
      matches.list.forEach((ts) => {
        let open = 0;
        let start = null;
        //handle nested quotes - 'startQuote->startQuote->endQuote->endQuote'
        ts.terms.forEach((t, i) => {
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
        });
        //maybe we messed something up..
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
    topics: function (n) {
      let r = this.clauses();
      // Find people, places, and organizations
      let yup = r.people();
      yup.concat(r.places());
      yup.concat(r.organizations());
      let ignore = ['someone', 'man', 'woman', 'mother', 'brother', 'sister', 'father'];
      yup = yup.not(ignore);
      //return them to normal ordering
      yup.sort('chronological');
      // yup.unique() //? not sure
      if (typeof n === 'number') {
        yup = yup.get(n);
      }
      return yup;
    },
    urls: function (n) {
      let r = this.match('#Url');
      if (typeof n === 'number') {
        r = r.get(n);
      }
      return r;
    },
    questions: function (n) {
      let r = this.all();
      if (typeof n === 'number') {
        r = r.get(n);
      }
      let list = r.list.filter(ts => isQuestion(ts));
      return new Text(list, this.world, this.parent);
    },
    statements: function (n) {
      let r = this.all();
      if (typeof n === 'number') {
        r = r.get(n);
      }
      let list = r.list.filter(ts => isQuestion(ts) === false);
      return new Text(list, this.world, this.parent);
    },
    parentheses: function (n) {
      let r = this.match('#Parentheses+');
      //split-up consecutive ones
      r = r.splitAfter('#EndBracket');
      if (typeof n === 'number') {
        r = r.get(n);
      }
      return r;
    },
  };

  Object.keys(subsets).forEach(k => {
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
const abbreviations = Object.keys(_dereq_('../world/more-data/abbreviations'));
// \u203D - Interrobang
// \u2E18 - Inverted Interrobang
// \u203C - Double Exclamation Mark
// \u2047 - Double Question Mark
// \u2048 - Question Exclamation Mark
// \u2049 - Exclamation Question Mark
// \u2026 - Ellipses Character

//regs-
const abbrev_reg = new RegExp(
  '\\b(' + abbreviations.join('|') + ')[.!?\u203D\u2E18\u203C\u2047-\u2049] *$',
  'i'
);
const acronym_reg = /[ .][A-Z]\.? *$/i;
const ellipses_reg = /(?:\u2026|\.{2,}) *$/;

// Match different formats of new lines. (Mac: \r, Linux: \n, Windows: \r\n)
const new_line = /((?:\r?\n|\r)+)/;
const naiive_sentence_split = /(\S.+?[.!?\u203D\u2E18\u203C\u2047-\u2049])(?=\s+|$)/g;

const letter_regex = /[a-z0-9\u0000-\u007F]/i; //support an all-unicode sentence, i guess
const not_ws_regex = /\S/;

// Start with a regex:
const naiive_split = function(text) {
  let all = [];
  //first, split by newline
  let lines = text.split(new_line);
  for (let i = 0; i < lines.length; i++) {
    //split by period, question-mark, and exclamation-mark
    let arr = lines[i].split(naiive_sentence_split);
    for (let o = 0; o < arr.length; o++) {
      all.push(arr[o]);
    }
  }
  return all;
};

const sentence_parser = function(text) {
  text = text || '';
  text = String(text);
  let sentences = [];
  // First do a greedy-split..
  let chunks = [];
  // Ensure it 'smells like' a sentence
  if (!text || typeof text !== 'string' || not_ws_regex.test(text) === false) {
    return sentences;
  }
  // Start somewhere:
  let splits = naiive_split(text);
  // Filter-out the grap ones
  for (let i = 0; i < splits.length; i++) {
    let s = splits[i];
    if (s === undefined || s === '') {
      continue;
    }
    //this is meaningful whitespace
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
    }
    //else, only whitespace, no terms, no sentence
    chunks.push(s);
  }

  //detection of non-sentence chunks:
  //loop through these chunks, and join the non-sentence chunks back together..
  for (let i = 0; i < chunks.length; i++) {
    let c = chunks[i];
    //should this chunk be combined with the next one?
    if (chunks[i + 1] && letter_regex.test(c) && (abbrev_reg.test(c) || acronym_reg.test(c) || ellipses_reg.test(c))) {
      chunks[i + 1] = c + (chunks[i + 1] || '');
    } else if (c && c.length > 0 && letter_regex.test(c)) {
      //this chunk is a proper sentence..
      sentences.push(c);
      chunks[i] = '';
    }
  }
  //if we never got a sentence, return the given text
  if (sentences.length === 0) {
    return [text];
  }
  return sentences;
};

module.exports = sentence_parser;
// console.log(sentence_parser('john f. kennedy'));

},{"../world/more-data/abbreviations":216}],208:[function(_dereq_,module,exports){
module.exports=`{"words":"Comparative¦better|Superlative¦earlier|PresentTense¦sounds|Value¦a few|Noun¦daylight7eom,here,no doubt,one d6s4t1week0yesterd6;d5end;mr1o0;d3morrow;!w;ome 0tandard2;d0point;ay; time|Copula¦a1is,w0;as,ere;m,re|Condition¦if,unless|MaleName¦0:2BN;1:29N;2:2BA;3:28R;4:2B6;5:2B3;6:29S;7:2BJ;8:2BB;9:2BD;A:24S;B:28C;C:24J;D:1T7;E:2AW;F:1W1;G:26O;H:2BQ;I:24M;J:2A4;K:1YE;L:29Y;M:244;N:267;O:23D;a1RBb1MIc1GBd19Se12Ff103g0XGh0U4i0R3j0HGk0BKl05EmTMnPMoO0pLMqLErHKsBQt7Uu7Jv6Ew4Vx4Jy1GzP;a09e03h01iYoUranto-eliakim-a24KuTyP;aRe-1l0onP;! P;bo,i1IY;d,n cly23A;haOko,naO;!e wantsouveben1QMhRlQraP;iz,n,vB;an,kefL;aib 2BUeir1ZJ; 0AFad,dr8ed,ha1TFonPri,s282ya0UF; P-malcolm;dr1EZhe1AK;aPih1I4ur1TX;o,yne c1FJ;chariah-d26Qdeki9eTiRkQlyj9mna lux,n22ZphOus brandon r1O9v1SByP;d0n;ary9e;d,k,nP;! al 0SM;sh0v curt8;ab1ZPc0Ae09f4h07i05kZlm1F7nXo,rWvUyP;aRdQed,nP;! arsl0e;! a23Pe1KB;an,nP;! i0WEn 1KL;en,iP;!an,er;eh,riC;d4eP;! cip21I;!aQe2AYiPk;!ah;el,rP;iPy1Q3;!a216yP;a,yah 24I;dPk,n;! mo2B1an,en;iPr0y0MJ;!-0B2d,r;d3l,vi4;!-07arias c0PEch21UhYkP;!-VaQelPi2kaN;oi,y;el,rP;iQyP;!-oF;!aPe;! abU0;aPe05WoF;a2AEla5;! W-VaPeNri;el,rP;iSyP;! P;a28Kj1XOmi1LDpierre-l0TRrP;ob25Qy0;!ah,e i0VH;an20Scarington ste1KNe229;ad1ICher08C;a2h1IE;a1Md1Le1Ghishmae1LJi17l13o01sa2AHuVvQzaP;ak,k;anSePonCU;de1L3sP; bar1UL-P;a1SDden0E1lo1OS;!d4h0J2n; z28Ua4Yb1IFeTAg0ka,ma,nTri,sRuQvaPxu0ze;an,n7Z;ma,t5;ef,ha,sef,ufP;! isl7;! xin aux1QZdi,es,xi1GE;a0Nel1JYha0Jl0m t1QNn0Er0Ds06uP;ba,cef03m02nZri21KsRtha15XvPzars25O;aPen0DR;!s0PR;af,efVoU4sQufP;! tahme27T;efSouP;!fP;! P;ad7o1GRt5R;! s223;! DD;esPis,nG;! Ps;ad7bad8;bi 1IQsi n1T2;! P;abde278el-0ORseddH;efShRsP;ef,iP;!f;t5ua esseyi ko28I;! P;cha28LyP;eh1HBiSV;a1UPd0;!atQgP;! z07U;anQhanP;! b1N5;!-nahit0;an,nP;! ja1AD-QnP;! e1U0;he1R8na20V;h,nP;! Pn;ez1VFj1IG;anQiPy0;am,ot;!nP;!-1HN;! hao0U8a022dWgitalp,ks291sStP;ch28XzP;chokPy;! dov27W;hQrP;a2o2;aPe1Q9;i,n,ya0S;a,dy,el;c1APdidya tesfKhRnn0rQsP;ho1A7s1TN;ik,omah0sult0zh0;iPo1A4u24L;a,da;a1TUris amaec274;a0Rco0Qdhev 26Iel 0Pgaka gAh0Lir0Kj1XGk0Il0Hm0En00oj248q27Xrosl1PNsRt fu ti1M7ussoSNya QzP;an1Z8en,id;iUli26N;eWhVinUsPt3;e0SDiP;nPr;!eP;! iP;dri24H;! j0e;!a euge6;en,l;! s0ZCael01iXkWnPz23K;! U-Sel,iPyC;!-02UckPs;! P;jr,ora6;a2e23IgabrielPm0KA;! kel1IT;al20Xd22Xike1BY;hoba0M0y;!ck,r,sP;! QsP;-l1S7e;fr1SQr0WHs204;! yv0;aQePin,o;en,n;c,n;elangwa ferd0WYuk;i6oPyin23H;b,p,ub-talLv; ary21D;iaRyaP;! P;el-marja6meh21S;! abdelsam27G;home1Z5pe0V6;b,ub;coPdhCLko26U;ub,v1UL;aTiSuP;aPes05U;h,nP;an,yu an;a1ORu0RP;nderUvPy23V;er ma0Q6iePy4; r1NHrP; Q-P;d16WgA;ar0HWel1L4pa11W;! 157;a0Re0Khal3iXoTulfr1LIyP;attRlP;an,lP;!iam1WX;! 1FZ-mikisiw;lfQn y11PodP;-eden bethsale2lDrMC;!gangP;!-0WE;d0AlSnsQsPth7;am,d212hley0D1ken1HK;lPt1;ey,ow;an,b05de0QNe04fr03he02i7kiMlPs1vrHy7; dj1G1-00a1IJem,iPord r. christo1GRy0PX;aQePs;! j033;mPn;! S-Ps;a1G5eQjaPli7nkun067;c22Xy;do1EGst0YA;aRb.,chigozJdom14Dg1R1iii,jaQm25PrPsa21Ftu0vi1R0;a263ithysi24X;c17GmGy;r14Nyd0;al1EGd1EH;lm,m;ed1P9id;m,y;e1U5ur;d0UVlD;aUdechouce22Di,ll19Qnde1ICrTsP;!leyRs,tP;leyPon;!-all0;!-owen06U;a1Y1n4;!l0;b0d03eOBk262lZm0rWsSttRvin-oFyP;an,de1EPl1neP;! ced1YU;a11Qson ste2;im,ko,sP;esk21JimP;! abdP; el gha1O9elmouhay1KE;n4renP;! P;emmanuel de11Sjr;iRk4lPt4;a1MIyP;!-sa13F;!d,s;e06OlDst1;a0Le0HiVladSoRramah ange chris-22RyP;an,ct22XktP;hor,or; quang hieu0O1n k0HK;!iP;mPsl1MI;ir,yr 21A;a08c01et,ha0kt22Rlla1NTnVrSsRtPvaT4;aPh210or,tor1VV;ly,r;ag0hvas238;ajQgilP;!e y0VH;!ay029;cePn;!nP;tPzo;! P-0HT;xa1PIyaP;nz23K;!enUhal n0DQkt22EtorP;! R-QiP;en,no;e0S2hu1ZWoF;aPb.,ekyoKUhu1ZVm20Pyufe1MC;le1D4sz7;te,zo;m,nPte23I;ey,nD;dder ik4er1XCliRnQrP;n1so1N6;i,kata sai as0JT;-j0ns-s1FF;hVihitin0U5lTnSsQug1IEyP;d3k,l3;coPsilios1H1;! 0WV; khoa,ce,ja,sh;ePmo1OUo8yk;ntin1NFre;ak,e;b4go1N0lVmarTno gav5qittuq,rRsQtshima20KwP;a0KBe;a5h4m0;banny-si1TNiel P;jar22Ana1VZutshekat24A;! P;a1WDsidd125;ri1VNysP;!sP;!eP;! w03Vs;a2Wc2Te2Fh1Gi17o0Pr06s05u00wZyPz1MM;!-lorr,cXe,leUrPs1;eRonP;!eP;! bla231;e,nPse key1MM;!-ja22Z;n,rP;! P-02V;jIm1D7;e,ho;al1XY;aRdor129ll1UBmQniqPuvvi0G6v20Zwa;! lucc8I;a1VPi;m,n P;a1O7mi1O7phong bru1KI;aiyah ojKhakape235ohtso r1;a03eXiPoy,um0yst0;nh a1BTsP;h0tP;anPon;! Q-Po;b1CBelyo21YmavrVK;c1OXgAigiyuk em1V2mQrP;.,ay6;an25inh t1LF;nt1ENvQyP;! 1Z8sRB;in,orP;! P;aPthuan 0;id0yd3;vPyv3;er,isP;! P-h0GE;ja1OYkaiz1YG;bi03dL8mTnSrRuP;lou1LRmP;ai,echi k0D1;!r13S;a,hanl18Dy3S;! oF-0NYaWiVmRoQs3yP;! j0BN;ha25ki;a1Q2ie,yP;! Q-Ply;al1AWjZ9l1AX;fr20Lgu1O1j.r;!ly;!sP;!so;-0UWaPe,n;!sP;! 1CM;-pa1YQaUd1WNern0ki,mQno-ka0WBonerahta1LAtPz1SV;an sir8ou0us;!a2eoRmy,othPur;ePy1DX;!e,ly;! cam21D;an,goPm;! P;no9ra220;a0Ie07iWoPu1RSys1;maQrP;in,s3;!h,sPz;! R-P;jPma13BoFpi4w1QXxa1MN;ay,o1FX;aVQe01Tfe1DTgAli7pXJ;agUbault zheTeP;n l1NRrP;noPry; P-boussouri1R2;ibrahima c1XCs1R0;yu;go,oP;! P;aQePr0H3;nr0ZRze1RL;le1NEn1WV;a1S4l1SCoRrP;en1IMiP;on,us; U-SdoPge6hCWp1L4tim1SF;rPsi1J1;!-a19WePo;! oF;aPelJgeWMi1N9;le19UuSQ;ch1WVePje0Z8matth8n0SWp.;d0LAmm1XC;dPnh-0o mano19Ir1X6;!deP;e,usP;! P;elis1S6ra1WN;dYioteron ro1MGjXmWoVrQva,yP;l1m;en1I5rP;an1I4eQyP;! yik tu1IP;ll,nceP;! ja1LN-r1DM;!d1YK;esg3uul3;bOjy-1X0mCQvO;!dPji-n0SF;riCyP;! P-JV;ax2br1YY;abeQhP;ad,ev,on1LW;zi;d0BeEOg6h08i06k04l03m02n01rYsXtWvVwUyP;eSlRmQssP;ir,on;! a1XO;an,er,or aymeric mar1JA;b,m;fL6hid yas5;ar8ia1R0; vinh0LXe,su0FZ;e3io,os,w5;eQiPw5;k,us;k,q;ay,guep nkeugni yoDPn4o 1PA;arata1S4im,o mathis0MJr1u;al,ha salah1SAla0X6on;ePsh1PTumi 142;ru;c1YXmP;!ur;aPs5;! Pr;mouhamed abda1CFya1WA;eo,gh,hg;a3Pc3Ke2Yh1Si1Dk1Bl19mail110ne1WJo0Rp0Pr0Osirem-arez0FJt02uUv3yPzym1;dney kingsley da1IPed Rf0K3lPph0K3;la,vP;a5e1R0;aPhamza abbE;hs0rh7zlan1FF;bh0di,hVje1ZKlSnQrP;aj,e0VU;kRIny-jaPy;mGy;aim0eymanQtanP; m1NZe;! ha1WD-f1OP;a0e;a05ePorm,ua1NQy1SB;ave 18Te03f01l00phVrUvPwart19W;eQoP;!n-bern15L;!-b1R2nP;! Ps;i1LBli0A5s0UM;a,leM;aPen;nPr1AC;!eP;! P;adner rou1VNndom0XS;io,l0;anPfensen-m0E4;! li09Wo1PC;f0ve0XM;nPth8vr1GP;! m1TOislaRleyP;! P;a1OWf0KYmingz1XT;v,w;ishar0u19Z;encer cla0Y8irPlende1XW;id1o;an,ckning mic9f04h02lZnXphea-psLrVuRvaP;nnPthnora FW;! w1NT;lQmaPta;i1IRr sabal0;aymSEeymaneP;! 1EP;an,en,in,ou1YGyP;! hamado1UL; nayth3ny1OEyP;!-jK;aQePly0om1t0y;am,m,y;l,nn;aPeyb;i1IHn;ianePy0;! j1NR;a1PSence naders19EiP;ma6ver0TE;a1O1ylP;an,er u1OV;a02dXhom1QTlVmRn0rPu,vu1IBy7;ajPe-is1S4i1XF;! mounOed1QB;c1SLeonRonP;!-P;oFpi1PZ;! 012ie;asPv1OV;! ark5-c11Z;! aSdRiPjKney-ludVJy; P-malQC;e26ra1TNzac1RP;harth r0SIik;hm1VZli;ka r1W3m;a04e01iYloWmUnToSrQuPylo e13Z;kap0H1l1WHo,y1TR;a1KRiP;neel giri1XJthH;hom gopi m1KAl1S9ma,uvH;eur zalm11Iyder yarn2;iPu2;el,l18O;imHJmP;e,o;a,lo,mQn-drex1A3vaPy17B;!an1XBn1XB;a,on,wa;ikh ibrahim fa19WlQphe19LrP;kh0m0v5w5;d18Wt1;ad0Dba0Cd0Bh06il0ke1W2l05m03n01quCHrZuYwUyP;aSd3e,l0nPze 0IN;ePn;! P;e1TCl15O;!an,n;!eMnP;! Q-P;an15Ie0KJimOjI;itz2Sk0ZK;ghn az1WZl,mba rodnKn;b2e1VRlPun,v5w5;es,o;! has0ePg nay1OZqi1ER;!-w1M0;ar,sP;-1P2hy;by,om;eer hyd4iSrQve4zaP;d,in;amPuP1;! asghB;d,ne,r tahze1KM;!d1HZi;az1POni,z;!wH;a08basti03hajj thak1VNigne1VNkou02l00m1QCny 1P9pan1DLrTthSvRyP;dina mouhamedPmo1VMon,yed roh7;! rE;an1UKen;! ell17Mi;aTgQigne P;ahm1LSsaOR;eQiP;o,us;! 1SLj;fi1MZj,phP; abeiku nhyi1IYim;e1V0im,lPyQ0;a1OHen,ou;!ba;anRenP;! aP;k1VKyl0;! P-1N;a14NgBI;m1VBnPt1;! 167-gA;hSoP;ot,tP;!tP;! ruil5ie,y;illemson 0Q1led4;a1Fba1Dcha 1Cd18el,f14ge,h13i0Xj0Vku,l0Om03nWqVrUsTtSul,vRyP;an1TVed Pf,ha0i aga5;em1W1;erio,io;hur17o1E4;ha n0NEja,u19S;ad1DDim,p,y;ar,ib;ad,chi1UGdTtP;iPos;agoPno;! P;an1QWe11Q;eepBLrP;i1JJo; paxt1-el08a06b0FXhai1H1i04ka,mJna1D8ory03ra1U9son02uRy P;char1RBiPyo1PH;lyE;elPilJ;! Q-Pe,i;f4Mj14ZoF;aTdSe02LfranRg,iUQjQlegXWpa05YsP;a1QJtanislE;amGoshua ti1KV;k,tz;av1UIieu-merBG;lQnd1N3rP;iel loan 0TQth1U5;e13OfK2;! m12J;! gan1K0;! 1B6m,rP;! k1GS;el,nPr1TR;elDvK;i,oi;aTeSiPmOLom1vato1MT;a,f,hQk,mP;! abdelr1TF;! ze0AF;em,h,m;hPs;e1MVou1MV;ad,ed,iPj0;d,t;!dSfQha0lPntalio1GZy0;asJ;!-al-d5anP;! ish1EN;! P-wass1QEou;as1RDkayl3salah 1MM;aqi2ee1T9il,okwatawah1DH;aRoQwanP;! a1MUe;i6ua6;n,ri;aQdin-sa1QTek,iPjo,ra;ne,q I6;!siP;va;jIoF;i,stian P;an1PI;dPj0m,w0;! ra1J2at;a2Ce1Vh1Si1Ao07u00won1DKyP;aTder1JVeSkerRlanCIou,zenP;! jP;ae;! g0LN;!rs1;dTnP;! Q-jaPn puthis1U6v1FX;mGys1;bemsimbom nwiDcolds,ja1R9l0ORmProl147s0L9thien vu;en1QFic1OH;! i1M0-y1QB;bTdSf1SZixu0maan08Upe1HYsP;sQtP;agaBon1F5y;!el0MJ;ol140ransh1MMy;enPin;!-s06Xs;an,b0Kc0Id0Ee1ONge0Ch0Ai,l08m00nWoUsTuSw3yP;!ceP;! P;pP6w1H2;ss2zb1NG;c02Gh,s,t1NZ;beMdPjeiceney cl1GJ; lour007eMy giftO7;!aQdo,ekwataratatJnPy eli1R1;ie-0B0y;do,el,ld0MQnP;!-rotianoh1;aUePi72;lSoPriC;! P;aPe1P8gAm0NH;lek11Or0RO;io,l;inPn;!-d1O8;andPla1MG;! jIo;aPit;m,n,t1JX;l1JQrP;! eric 3Z;e1M1g4ly,nDol1OCrigP;oPue;! P;m1OVpatR0;!coPky;! gi0S3;bUePin,s1yn a1OE;e,rtP;! R-oFoP;! P;a113s05W;aleksa1IAkenne1RB;ie1OOy;ad,cWdVenze 0ODhaGJlUque-cartJTshStPver 0L3ya0IJ;chQhPv0;iavu1R7vH;ie,y;an,iP;k,r0E2;ay-male1RVey1FY;am,wa6;ardVc1DZhRkPo;!-oFey,ie,yP;!-j0CE;a14BerQiePmo1LM;! 0R5;! 1OB-P;lea1AEr0PL;oPy;! P;fid2le1;aQudeMyP;ad,cardy schi1HKs,t010;li,yt;!agan eds1da,e03g01i00mXnSuRwQx,yPza;an1ROl0n0EP;an,en1RK;b3el marc1R1v3;aRce vale6JePo1RIs15R; P-1BE;ji1NYku1FX;s,to,uP;d,lt;iQyP;!-c0VL;-pi4n06L;d,l12Mn-authr1POth;gJiP;mbLna1BDs;dPg0z0SK;!a,lD;ad,b1L4c0Sd0Re0Qf0MgnBh0Ji0IjbOk0El0Cm08n05ou04phael01ronti se1JCsZtYul,vi,wad,yRzP;iPm0ZV;el,ne;aSdeRen,k0mPn,sFMv3y0;i1IBondP;! s0UX;l yadi4n;an,nP;! Pe;ay18Bm1HJ;anakpanhas1RFewennattok1LL;hPl0UYs1QIt5;ad,id;! P;ad0Z4fank1MYghisE6ju1N9lPma0YIth1CIu1QXvaldi-meWKwilbeM;!ew8;f,l;c118dQg7iP;!ehtiia127;al0JRol119y;eel az1DAiRon,sKy,zP;iPy;! anG;!n,ro;f,i,phP;!-0GU;aQiP;m mark10Tn,s;di0HEnP;! riy1AW;d3h0leySVy0zel173;ePhim,im,ul reag0;emPriiohst1KZ;!-kwe1M8;aelPel,fi,y;! Po;a0Z7e0WLfPl0UJpi1IB;ils;d,ed,l;ie zac1L0m0o1KXv5;h1PMimP;! a0IY-moh1ML;aUuP;aSe4ZiPoc vi1B2sK;ll,nP;cy,tP;in,on,us;n,vo;is,lFEsP;im,s1OR;a1Ae11h0Li04o03rQuP;rav vimalk0X6tugu;aZeYiRoP;m18XsP;nelson h0SDp4;am,mael-mwen1ASnPthi1PPy0WT;ceQsP;ey wid0ESlD; Q-Pt1;charles kou1Q2jo0RKl1AD;ashlDdeion sanka1CDePjo0RJmckle5no9w1DC;d3l140;manj,ston0IQ;bhU3ggodY2m1E0nP;ee1OFil k0WT;asJfinet danhikbe0C3l;eRoQraPse1OD;ji1OCv3R;!-mY;rQtroP;! 0LD;-Wi rayha6rP;ePiCot,y;! S-P;ar0NXePha1MSl0ATm1LHoF;dPl12L;gBriC;al0XOiv0mPoKS;arJ;aQePhu1KIl0AOoFyvG;li,t0X2;lexPn0XJ;!a17Gi1FD;ar02e00iRoQylP;!ip;eni10Cng nh1E9;lPn0XG;!-091em1iQlipP;!e-0FB;be1D5pP;!-Se,pP;!eP;! P-SE;cal5wi1DW;an0X6em1KX;lixPn1EC;! SA;ell Pre116;e1KSr0VE;d1FYgU4ndBrUtP;aSePr16A;!rP;! k6O-Pki16Cly,son jr 0YM;jim1L1;p0r;cPlD;evLivLyP;!-mille1GD;b1E1d0Eg0Dhulpr0Cim0lla1LXn0Aolo09p04r03s02trick00ulTvQxtonPyton l1FI;! aloonso6;ePl160;er,lP;!-060;! U-PinGEoosie qua1AWusJ;aSemRh0WFiv0kQl015mP;erveils welt a,uhir1K5;ar8;i1L2m1KA;i131n0WI;a0Y0b.,c0XAfok7m00Mti122;! P-1IC;ju1KAmi1F7;cLko;is-a0XWker stoNGnXsh0;aReP; P-cG5;djibril 0XAmagat19BomB; P-mbB;i0UYmassa4;! em1JY;aPos;gioti1E0m-m1EG;eet1GQ;na035op-nga0SJ;ePli,ra0W6;l lam0M9n;a19b15c10d0Xha0Wi0Vj0Uke6l0Em0An09pfole jared miens1DBr06sYtWuTvRweQyhi othniel 0XSzP;!an,er1B2;l michee steve 12Hn;ad1CDiP;de,la;arith-1MGdiary mORmBri2sP;a0VSmanePsa0VS;!-abakB;hPis,to;m0ni2;aVcarTeSheaRiQkBlo,mPv0A7;an,o1GS;r8ta; 0FW-sakyd0;e lev8id;! P;ja17YrD;ma,retin j165y1LA;d3eQiPl0CMriCv29;!am,on;n,sZS;awatek1HId4esi11Yur,yx0TT;aRerPid;! P-hal8;as1JUh102;el,i4ni,r;a03e02iVlSuPy17O;omac1LQwatP;is1IIoP;bi,mi1IR;i,yP;! P;a04Trayan 0KB;!vP;erRierPo;!-P;far1LYr00L;! Q-P;jIre1CJ;no9re17N;!k1ET;mipo1ESn0VJ;as,eh;h0z4;ha15Fri;alrHe0YUin,rHyP;n simGsP;!seE;ean aStavP;eQiP;an,o;!-le151;um;eQiPonabyos1L0ry0;e,n0I9;d,rP;on,t yi1IC;k0RFnkard1GT;a2Gdoole12Je1Tg1Oh1Mi0Vjimgou rene serap1KVoRr10Rshim izi0I5uQyP;j9k1CClan l05Ex1;ka1JHma0V0r no0YSt5;a0Cd0e0Bh09i08j0lZma0rXsson yeho0NQuTvQyP;!an,l0;aQiP;!c;k,n;h,rP;adineQePliaki6;d1DWne maham1AY;! 0AJ;bertPd19Vik,m0;! yito13F;aRhanP;! gustaP;vo;m,nP;! S-Pn;h1KSjaQkePphillTW;an0;mGy12L;a0TYfilippo,jImerHpaW2ry0s0RY;am,k;aPl0; tamr1AJm,n;! 0E7l,v0; 0CCch,hSkRmPn;! P;hahisy7jI;!im; R-P;aPgAjIk0J3l1AHno2oFr0WL;mo1K4n0EN;agan1KFbWcTelisee duic1GQgabSis65jIkwe1DDlRmPqueUr0ILs1INzakaN;aPure1GC;c 06Vt0SI;ee,i7uhen180;e,ri2;hQlau1HKonstaP;nt5;a0OWr0MV;o,ra0Z0;a0Eb0Dc01d00g2i1AGkUlTmSnRrQstaBth0va8WxPyet ane0XNzB;onYKx1;us0v0;ad,g129it,o,ssemon mathis078;istch1A2sjuu;!a1FIs,t1;aTh1L1ko jubinvSlaOToQshanPwis8y;! alexander-0J8;!laPs0ZQ;!i,os,s;il1HG;h0n;al,ehH;co1A3holZkWoP;!-1AXlP;aPo,son alfr1IJ;e,os,sP;! Q-P;vladimOxa153;an1FNcQPeA0gPj0G0sloan 0LPxa152;ab1K6era145;!-Qan,oPy17W;!las1FE;dave niy1s8H;as19Zs1;al,rE;m,n0DN;atPu l15C; 0an;anSoQuyen P;l03Eminh kh159;c gia 9Gfack 0U4ngang joannes P;ow;a kahis n16Imi dave 1E1;a0Ab09d08e06gan05h01iZjm1C0ktari11JlVoUsTtSviRwQysPzB;on,s1;en,t1;l1GPn,o;an2han2;ha,s;! XB;lhoRsonP;! P;da18Ewi12N;-s7;k0lP;!s3;emiPi0SC;aQeP;! t0Q0;h,s 0CI;ci;skens mbelo190taPv;-anok0RSn;!al;o l0NFsom 1DK;l,n05A;al1JJb0Vc0Td0Sel0Qftul0Ph0Oi0Mj0Lk0Km0Jn0Io0Hp0Gs0EtVvUwSx0yPz1IN;an,eQil,l3ren-nut5tP;e0S8h0on;l,m;azPeed zah5f2id bakh1IY;! shUN;a1HVis-waseyaw;an06e04hPt0;aQeo,yP;!n-joD;el,nP;! T-RaelPel,iel18Rn,y2;! P;da17Nevans elij,mpuWC;aPfreU6jIra1ITs0AA;l0R8ns2;ayu1IMb0WXel1DDgAis16AjaUkTlandry mbia14Kma13NnoSprRrQsPyo1FDzafian185;a11Qco0XQ;aV3o1F7;est1in0ZV;ah,l0;e1EEy0P0;id3mG;! Po;jac0JX;!a2;er,hPir,ko,r1ANs1HX;! yan1DS;oG8s;ki,to;abany5o1HX;anvOr16Q;e1H2ia1B1oa,sh;a e1ABd,i;f,mP;! ez14W;el,id,ko,uel oF;e,i;! P;l0MAz07M;er 16Uir,j1HJym;erPhman yo1EOib charb2;! e1A8;il,y i0O8;. gen xuan deBFa67b64ccallum benne0WZd61e57hamed a00Bi3Ho0WrityunjKuYyP;c195kTlSoRrPshka-r09L;ic,ko,onP;! fUV;!zi1;a0es,o;aReQhay17HoP;! e0O2;l,r youbensly jaLI;el00Nh-a0QK;az,ft9hamYjah1H2k7nXrWsQtPzammil mU9;as1H4ingwa gl92;a,hTsa,taP;faPp1C4;! P;hassa0kP;enzy;id,raf5;ad,p0VI;t3KzO;ad,ed,mP;adRedP;! iP-poyr4X;br1BKrf0;! R-Ps1FQ;aPh14Mrayy0;b1EGy0;a02binyO8da14Le01fZhXiVmTqaSsRtayy1GDwaliQy1NzaP;kariyya0RRva1HM;!d;al9uf1HI;im,sim;ikae2o1FVuP;karr7s15I;br1B9smaeP;el,l;asPu4X;an,hO;aPiz0;re1F2yz0;i1AUs1AU;hmaQo1CVrPza0;h7s1D9;d,r;a28ctar alex0K6d27e,h0Tis0Qk0Pn0Mo1AQr0Js0Ft0GIuP;ad124hamZin,jib ar09Hlay ra0RUnWr1GZsP;a ahmed ham1DDsaRtaP;fa,phaP;! abdoulka185;! P;a192rP;acPy0;hidLTi6;djo1FKiQji P;ily0;be,r;adYedSmP;adPed;! mbaP;ya0Y5;! Q-P;dji1D0mbaye-di0L5;aQmPrIHtay146;ass0NJo1AO;bPl-a0TR;da1DE;! aba1CNouP; P-fal1B;f0CDla0TNmPsalih15H;a10MouP;ntak1AJs1AI;es,hePs1F5usJ;! P;ch119elchun1meOnafta1BQyiP;tzchHM;ad,decQgan monrOZisPphe1F6y; nab1GAsa12J;ai,hai0YO;c1CGdQer au1AGnai marc-a1FRtP;e,he,y;er,o crispa16F;htBr7;eQhP;e,y;!-vitLs;aPc3iz,s3;mPnd;ad0Zed03mP;adVed Pod rMU;aRfaQi17Sj1FRmihr0ru1B4ta1A0zakariP;a,ya;d2h1FP;d7lQmi6yP;h0m3; a0SXi;! Q-P;haz04ot1DB;aShaRi17Kji1C0mRUsh1DLyoPzey0;usP;uf;r8s1E3;bbEly0;! R-P;a0SOchoua0V2la0SOsel1DMyaP;ci6sV5;a0BbilLel0Afad09h08i04jaw1D8kh18Zlamine02m00naZot1D2rWsTta19Kwass1EIyPzKF;aQouP;c1BNss1BN;cPss4z0;i6ob;aPou0B3;dPmy;iq;aQe1B5ha1AMiP;ad,yad;sH1y3;bihn1DTss1E7;ah4eP;h199is18Oz194;! P;cam1F2kabO;dr8ly123mRsQyP;ad,ed;ma1EZ;ad16Pra6;akim mbac0SLe192;il13V; madani 0VGyE;chr1BCd0U5i1CXks2lTmiQrisK6yPz1D7;a0ss1D5;nPr;!eP;! adam13P;-a0RUi;!-a1A1;i0HIou;ad,h,z;a15Ic0Ven0Rg0Oh0ZHk0Bl00nXo,rTsStPva0zyni ccino flis19Q;an040chQiaPya,z11O;! chat0NY;!e0QL;a2hka-ya0ZOp1A3sa2taayaapimak5;aRkoQo,zaP; eeq0n;! m1A5;c,j,ldy 1A7;aQh Pik,j19Y;jun oHEthi3F;-nectarios0UFl1DHto;!aVeSiaRkeMl4oQtP;ia15Bon; r0BCs0Z6v0SK;m 06Vno;d,sP;! P;je14MmicheL;d,nP; Po;an18Zb,ca04He19Dfrancis0WSl0M2nP;asO;aYeVhSing 14QkRoP;-clar0UOlaP;i,j;el,o;aPel;elPil,li;!-yoha0YZ;! dimitN-Pl-0RNy;a0LWePsam19U;dwinn da123mmanuel 121;ePil12N;el,lP;! mehrb0-r0OP;neneta guy0TQuelP;! P;a0LYh0XDjr,kab0SD;moRsahP;! P;claude e125david a0R8; isaac 0JHh lens evZD;a03co,hTip16YkPo,to;aQePy;al,y;elPn19K;! WQ-8X;aSeP;al,e,ka2lP;! 04U-jPi13G;ac19Iu191;-2elPh,il,l;! R-P;angePfarGjulence wesn;!lo;a116brend0estC8fr0XTjPl0GSnjoma174v0RN;amGo16Xr.;elQh Pm;elikpl1BZj0M8mbous14V;! aP;la5;av3c0Hd0Fh08ir,k07l04mph8n01rTsQtJRupep noC1vPys0O0zy7;en,riC;hQr0LsiP;ah,e e0IV;ach obadi9il1B3ul1B3;a12ZiTlSriQu,vinP;! cVE-tahi12Y;ckPll;! ael to0P3;e,in;cPk;-diPk;az;achemQdPelHh 0V2;el,riCy;! me191;e0QWiEkyr0PBr0QSviPw5;nPs;!-BK;a,hi;ar14XdRmetQraP;aj14Wb;! mir0XV; QiP;! jal2-aziz 181;huP;ssa5; madani0VXerPgy;i13Gyk;e6h2; P. f15U;ayaPfer1AU;an,n;aPumba beK8;kPye;op;a4Vc4Sd4Ne4Ig4Hh4Ei4Bj4Ak47l3Tm3Hn33r21s1Vt0Jur0Fv08wu07xYyPz3;aWce,dUeToro hall1BIriCsPt0v3z-maxim1AP;en di195onPs0MY;! Q-sPn;ha0QW;kare1A2l0JSro0ZJ;le,s,ul;enPji-s3;! jayde0M9;nk,s11H;! emil122-Ua0TJenTimPon,we0NO;-oFeRilPus;iPli0;an0UEen; w0C7-oF;!d130e;an0JFePjayd1oF;do0JAli,mP;il11Uy10;en aki0SXna moN;erQrP;eCi12Ny0YY;iPy0YX;ckPk;! P;aPb118i131;da10Qnt0KP;iQo alfP;re0WH;cPzio 0BH;e,io,k;a2e0Th0Di07r107tQyP;ar,s;! e12K-d03eoYhQiPy;a10Ss;eSiP;asQeuP;! den197;! elie 0ZU;o,wP;! Q-domP;in15N;hS2i16FjGWlouie arc11Fp0WTry0;! P;anQePira192ra1A8s0DXvince0VD;do0IIliE;h Ptoni10U;mi0V1;aPer19Q;ni2v8;asRnQsP;! sl143se;!o gui0Y8;! P;ePnehu3;st022;a03e00iSyP;as,sPy;! P;ka0SDpi11R;asTeuRsP;! P-oF;e11Rv0OR;! P-a0S2;fr0UVjCXmTX;! Q-emiP;li3;daEUja0UE;au,oPus,w;! tian-18X-Ps;jIrob5;el,i0R6y18R;i,oPs;! Ps;aRbGDgQjaPoO1;dy2mG;ab19Aiov08S;d0ZSlP;b14Qe0HW;oTr18BsQtPw5;anabLen10AiE;ao,iPy024;!l,mPne;il0ZSo;da,n;c09ek,fateh124i07kZlYqu8sXtUvQwanP;! mahamoud ho18Ce;enQinP;! zao044;!sP;! 078ky;iPy;!nP;! e0F3ez delga0UO;!ha0LC;in,o0HW;! T-Ro0Z2qui0RUusP;!iP; jusipi mas17Me;andrPoF;ay,ew;b0E4fQjPoC5;a104r;erNrances0RS;le6n0RVoPus;! anWKs;! 02-VeSly,oRusP;! P;ma2sa0ZR;!n0P9s;au,lP;!lP;i0Z0o;aSeQgregPjayden c0Hmigis12To0G2u189yl0;oi109;do0GKlP;i,yon hir7;l0GNnQr06TuP;re154;d104t0G7;aloOEdQePiliann ediem0XIkurtOEry0;mm149phra17J;av17Fjiome0QV;a01dr00ef,gZiXkWnVoSrMCs1tej112uPvHyx,zi c0TV;!elP;! P;alehyx will0WTcayeta0YM;!eQlP;i02Fo;! zXD;!a,y;ir0L2;!lPx;!la;a fo0Z8oro abderr11Y;a0LSiC;el,k2y;adRe moQouP;d0X0n;dy,r; bho165ouP;! Qba alinP;ho;aTbScQla162maP;di0WUnso16I;heiP;kh;ho15Yo0AN;li0WQ;aYcoWeViSk11Xl0NLoQt121yP;ck7Xk;!ne,rP;yk;ck,kPx; P-sh069i;a0KPhish7moe3;c0YXek,k asmi0WIo;lm,mP;! jNG;chQkPmi6;ai,hai;ai,iPy;! azGT;aQeo,htBo-14NsPyl;en,im,ym;n,r14X;d,ed,o103;d3eve3kPlo,y2;!anPh0;! p0TA;amaQd0ELel,ik0jes06HmoudP;! bas15G;d0W2t0Y7;as0YZn15X;lQs1vikP;! sij0RW;! P-je04Lo;elliot cEBhPi0SJky0CX;arvDui;ani 12QdeSeo,i,jRox,rP;iCyP;c,k,x;ames140id;n,x tCC; iRKaQeo,il,kP;!andLinto166;n,r04W;mo12AnE;nn8;a54e3Phy7i2Tl2Ro0UuWyP;-5IaSdeMh7i7le,nRoPr1; kai y126f13WnP;drDel;d0HNk3;d,ll,mPnd4;! P-sXIm;e0CAj,l0EHm0JPsa0P0;an0Lc07d03iWkRmum0NZqmQtPxd10Syann val12Izy;h4or;an0WZ;aQeP;! evere0KV; l00Tn,sP;! P;d111gAne0H2oswSO;giUsQz-aP;le0RN;! Q-P;a0EIe0RJfC1;fermV6maPorlV6sa10Y;t0WRu0WY;! fabriz0WH;d0C8er0KCg4ovRviCwiP;gPk;!-thod126;i0X9y0TK;! do0DG-a0DUaTcaSiQkPreti14Q;a0VPg0OYson yov0;ano0FUenPus;!-haro0PA;! hSV-f5J; W-jIh,sP;! Q-Ps;a0DUda0IF;aid3bSda0IEedPCgAjunRmQsPtin j119w0GBxa0Q1;aver0W3t02U;a2oi0O8;ch3i12W;ry0wi0X3;d10Claurentiu,m0W7s1;! h07K;a1Kc4Mev0g1Dh1Ai16jKk15mega-k0BEn14r0Wt0VuYvSwQyP;ck,d,k;an,ePi0HH;!ll,n;eQiP;c0WPk,tz; RnP;sPzo;!ki0MM;lo0GZ; XP-0Ja0XHc0Gd0Een,iUjKkQma2nPp,ra36vHys;es,is;aPe,i,ma6; Q-Ph,s;fr0PU;ja140m.;ck,e,sPz14X;! 03-Pon;a00bW1cZd0ZSeYfXgVjUoTpQr023sPth0Q2vi0APxa0PC;a0NIim1;aQhPi0WF;i0R0ylCW;scLul;li0P7vi0OH;amGe0o0ER;ab14AeP;orgG;el0TWreder0K6;do0CKmi117;ha08Ayr;lPn0CM;be0SFex0CAphon0N8;aRdami3f0TQgQm0IKoP;cta0SX;ab141onle0LA;b2r02O;ePvH;n,viC;asPkE;!-pP;at0X6;e0WQgAhRFmaP;r5tN5;fi,us;d VenSiP;an,cPk,n,s;!kP;!-gA;!zoP;! P-0DV;a0C8litvinoff,w0SQ;victoN;ko,nJ;a12Gi,ma6;cQkPm;!-aLM;! P-eQXk;christ0SUe09Y;aPik;m,nP;!-dimit0LR;anPen,g0h04L; R-P;e0DCjPm0AS;aCo0DN;alQjIky09MmaPpierre beliz0OJsheme0S8;ntMIrt5;e0BSli0UE;m,n l.;e02IiEoPy7;r8yd;aZem,hamYlian-u130nUoRpa,sa0UDviQyPza0UD;am jero0HZo;s,u;c0XHnPyd;!ar,elPn2;! cHY; jun-yuo0CTcolnRdQk8So,us jr. jP;ohn0ME;!on,yn;! 0JW;! la0YE;am,mQnP;!g,no,yu0;! S-Ps;ax2eQjPlPQmJ8oFphar12MtF4;amGo0WZ;l0GYmm0YSr0HExc2;a01dine0TXeZfai11FgXhHVjVmUnTpark4rene verli5sQyoP;h0va0M3;antQhaP;ms,yt1;ia0XTos;eTBiC;as1i0TMoi0LH;aPo0WQ;c0Z4mG;aPra0N1;b129el;du0O2lisePmm0YGstUF; k04R;iPl06Y;na,zB;a10e0Xfter8gacyNSho,i0Uks0Y7la0VOm0Sn0Ko01r0EYsYuXvTwQx0DTyP;d3reMth0;dQisP;!on0EW;ovH;!aRiPon-0NT; Pk,n pri07M;a11Xitzch12B;n,ri-10Z;meni k0KHng mM6;h0tQzek P;le1;at,er; 03-Zh,lo,nRpQrP;ic,yC;aWVo0LO;! UarQel,g0MNidasP;! 0AB;!dP;!oP;! P;r0D3tC2;patPxa0MD;ri0IQ;aRcQflo0M6gAjImi0JBnaPpaWMrZ2;ss4th0;ha05Il04P;le0NCnt0BEymIA;ali0SMcQgAmauPnoah mHYray0X0;ric0S9;hPlaud0S8;a05De8J;!dUnoRoxQslDtz-kePzo;ndQ9;! p;!x P;c057dPeZO;.,avi00R;onPu0MQ;!-68;my,uelP;! blessi0IU;bQf,ghtonPo;! onik7;!i10Ty; Q-Pb3s1vi,y7zh0M8;am,li0;he0IO;mh,ndrP;e,oP;! f0QDs; fleche-na073bite 0Dc0Cf01Xi0Bm05n00rryZsYuUwTyQzarP;o0R0us;as,dPeMke,ne,son carlisl,tER;enPon;!-paBC;r0HSs0C6;g0rP;ent-QiP;a0L8ck,er;cU8gAoFvicto08N;siWNz0Q5;! luwi,-0PK;bo,ceSdPe;onPyn;!-Pn;ja0EF;! eYTl0XY;bTeck iRinPo0KZ; i0WXeP;! 0PW;shimP;we;e0OEr0HU;ne-eden ma0WSth,z4;hl0;ev0;a3Te2Bh1Ti19l17n16o0Qr0Gu0DyP;-a0KWa09d2e,lVmSng,o,rPs1;ee,iPo;ePll0HN;! ellCX;aniPi9;! P;j014lyo0LG;a01eXiaPli0o;mUnP;! P;a0ZOeRkPma2no9sD4;amr1i0IQwaP;ku;du0LF;! dP;arr3;! P-0R9i0UFr,z1;e0RKfQjP;e0VWo0TU;ernP0;n,yd3;m,nP;! Psh stev3u;ed3;angrP7nse0I7rtP;!isPy-U2;!-i0RK;iQysP;s,tofer0FS;k0WYsP; m0TVhUsCXtP;ianSoP;ffer-alexy,phePs;!rP;! VM;!-RP;!iv;a02bZcei0J2d0VNfYh3lWmVnTp0ZBrSsQuPv06Uw3;assiethan ezecEMssay iy0Z7;ay,sKtaP;!ntin0GL;om,y;r0Z3stantinP;!os;enan ETlan a0YQ;iPt0B1ya;a,n;fi david mate0J9i;eQiPy; mey4a,na;! m0P1-m0Y7;!hP; jI;ig05Dox;awber 0CRePim,ov8;av1di,in arm2;a06dus 04e01lZnTp,rQsho0BCwed0yaP;nJMsh;by,iQk,oll0G3sler erc0XAuihikan vijayP;ak0;ll,thH;an0PDen,gPh0i0UCo; david wendj2-0VQne,sP;leyQtonP;! o1Q;! P;ethan .e,nicko0I9;i0lPuOY;ia0QUua,y0;no,rP;anPkegaardiii ke0J7;! ro0M9;ayal0MLhenP;ok;an,mbu a03MnPtain0I3;!u;aWeUiSr8ursheed0DLyP;lQrP;ee,oh;er,li0;an siegfri0VYdPl046;ir,r chaudhN;an,m0J1rP;n,on be0UP;dimVel,iUlPmd3ngLr8;eRiP;d,lPo;! mamady 0WL;b,dP;!-i0JJ; nguy3li,re;! rP;asP;soSJ;a13b,d12e10h0Yi0Ukeli-seTKl0Pm0On06o05phr3r03s00urt-0GDvXwentesh1yRzP;iah kVDvinP; ze0WM;aSd3lRmBsP;hawnPon; samuel re05My;eb,i0;an,n P;e0DLpr0XI;an,en,inPo068;! Pston N0;essam khalaf n,ju0TDky0U1liUKsabbati0FW;hawnQley bertP;ra0QJ;! issachB;b084em,leMm0LDoaCvensPyan 072;! a05Jl0R0;-archiba0GUn0UZ;! g05a04dr01ji,ley00nWrickUsTtRvenslay-lov4y1zP;i,oP;! solta6;!aPon;rontJvio0W2;hin 0LVzy roy0DY;! P;m.,no9;ethRyP;!-P;jo0AQ;! hA7;! 0LB;iPyx;c0OBkPx; g0HE-mano0M5;ld,n;adi2;i,yrhodz-ma4;anSd3eb0WBi0lQt1vPyan mit0AF;in yo0y0HY;an,en,y P;jul0N6nJ6;! dorvLi,n;-le0HUd0rRthP;!-oP;liv4;!an0H;in Pod0;an04I;g0l0nanPph4vens-0CSw0JPyd3;!-gi0MP;dy,ous yos0SNs3;nPt1; kahPu;yl; kit 1Eb1Bc1Ad17e12h10i0Ul0Om0In0Gpeni3r04s00th0UNvYyP;a0OLce,dSlRn0sPumb1Cyd3z3;aG4en,haPon0LPseG4;un,wn;e0CGi7;an,eP;e harr06VnP;! P-mayvrHs;d0QXis0UPjaX5weP;slD;an,iP;!ir0n;e3RhQp4ra,sP;em,i2ym;!iP;s,us;aZeYiWlRmQonhiaka0GVrs1sPt4un;on,un;a,elo-da0AY;! nS-QeMhPss1yle po1; ad03H;an03Qe05DgAn0I0oFrPsaban0IDwar0OK;aphael0PYo0JI;erNoe;fa Pm;no0SY;em,m,nni 0M2;m,n aj0GGs;aPe,n1tW9z0;an-paYDe,met0KCta,v;aTbaSeQil,rP;an,on,yn;l adewale shai0PKronP;! macken0RN; elv8-kiJY;al,el,ha carNBnga kanku gabrJ;-2eSiRo andraiR2vQyP;an,x;in,yn0IC;fa,x;bPl,m,n;! mattE1;! 1-o0dSe0DAh0len wolf,nRrPs,z4;av,i 093oP; s82s;!oa;!enP;! ama0CZ;aa0QHzai P;pr05H;d3lP; Pan;emilianoQjohn P;yv1; ibra0TA;aPe03G; zPn;akar0J6;e,im;aPel,ir,r2; sidi9WlP;a ye0H8;an0QU;a5De3Nh3Mi3BleyMo0Nra0RMuRyP;d3m-haP;rd3;a0Aba09d04i0jhU2lUnSstiPwa0;fied oluwalon0THnP;! P-chr8;gAjr; 0BIaBAelo0LXior dyP;la6;esWiPli0yV5;anSenPo,us;! P;anna0CMgAlincP;oln;! Po;al026chi-X1d0OZtP;ruong 0; eH4-P;eH3oF;aSdRePlD; gP-d0C5;ilbry6osh3;!s0PK;!el,h;! wibisaPN;dan 07RnP;! Q-Pa0LR;baptis0AEmi0MQpab0J2sVL;aUcTdSeRfQjo0CFmaPviZJ;rt5t0KH;eli0FW;mm0PGstLF;av0SMie0OL;ami0IW;gu0NUn0OL;-2Ba22b21ch0P5d20e1Tffrey-0CIh1El1Dn12o11r0SsXuVvaTwen jSyQzP;ef,i9;cePs1; j02S;eremi9;ly,nP;! t9;dePnei0NJ;!ns0QK; weills YKay9e0AhYiQsPta,ue;el5o0RY;aPf aAZ;hRsP;!-marvP;enEU;! P;bPthi05R;enjP;am5;! 7M-XuaP;! Q-P;ad3feli09Smi0JS;alXAche0IKdReQiv0ja0Q1lE2mPpaNOweed03Oyo0MW;ax,i0LV;ag0mm0OO;aQoP;ng0RU;ni2vD;eQr4SsheP;eh0;lYUvaM;! U-yadiel 0IUf,lito LFphP;! Q-P;be0B2et006g12ju0OJsa0B9;aQlucc0IVmubenesha09SsP;eri aP7hayne 0OG;d0n0IQ;eQfePgAmi037;li0EPrnHN;do00Ernes0NK;aWdReQgePiC;! caIXn;l,s;anPeMi,on,y; R-Pn08So;cPprai0AZ;la02S;ad0JKjKl00Cmc;m,n00X;d02Xn;! 09UaPny;hXic,sVtPy9;an,hP;anPon;! P;aFOjPma2na7IwZA;aPo0AO;c0OChazi2;! P;abdelha0M3e0JKleopoldovi06F;! s4W;an,em;an01nP;! T-Sath36cUFie,nP;ie,yP;! P;aZXinukpuk r09Wmi0C8quang lo095;a019d0MKgAhilai0JAlouJ;ad0R8brUjo01OmRpPth0CT;aMDhilP;ip;aPcw0EU;rPve0KF;c,sha03N;a05Benn0;!nP;!es;! cyri05X-daSIlSnRs01Gy-P;joSUkenP;ne0NN;dy,ey-tZF;! P-timothZE;d0M5gPjos0nILviX2;amaXA;-mica2e0HS;-c001ey; yotWchimUd,h,kSnRquiPs;mPn;! d0HV; r0CGasJ;h0K8imP;! l0BA;! nP;oe;hm;ed3na0IK;aYbrXe,hWmRnPren avr0QX; yo08AgPu,yuy03A; X1shGA;! s3Tly,mP;iRyP;! kha086-P;diaI0jIlo0;e,sh;ad,larno wi0CG;an,e2il00P;ch3la,n,yu0;ai0HJeO8;an0Qchesk2d0Le0Kf0Dhud 04Hiro-095l04In0CovPMph0BMrYsSth0HIvRw0NRxQyP;la08YmOo kyrJremih dev1;!-e0LW;ah muy9is;ed,hv5i9sPus;!eQiPy0DQ;e ram1m; Q-P;jIw0F1;bin08ZlePBm0GC;a09TemUi2mai6oSrP;ard mikQyP;! lucke00Vck;ha0Q8;mePniUN;!-je0;iRyP;! P-nyishu;eloOly7sa08O;!-ZUahReP;! P;kabWWmuko0MJsa08L;! P-jaxs5;a09SgAomo0L0wood0OK;is1lDo9s3;fPrD;! S-ReNrP;eyPy;! der0P0;rKwardnD;hensche01Oju0LMkeP;en0;ka,te0P5v0;!-SeRidiahP;! jean P-jXF;eno043;!diah w.;maWOsa085;! 04-Pn0MR;ba02c01dZfYgAjoZHkristof,l8JmUnTom0CMpRrQsRAthPya0AP;eo,omE;aKRo0D9;aPhi0BK;scL;a0GZo9;aPiZZ;riePth8;! lionel P;ju;el0EFr0A0;aPoWS;ni2rlan05Yv0O4;h0KElRZ;p03XsG8;cVdie0K0jUoFpTrQtP;h0A6i02N;aPichkaard the0BAo0CU;fa2yP;no08H;hi0B3i0GH;a0APu0KS;aFDhrist kyl0IWlaudeN2;a3Kb3Jc2Zd2Ue2Sg2Qh2Li2Hk28leel27m1Ln1Io,p1Hr19s12v11wad0Yx0PyQzP;e,i9;! 0M-0Lan,c0Jd06feZFh05k03le02mXn024rWsSthan toRvQzP;!son ry01V;eMyn;dd;eXDonQsPun;en GXi,on;! P;aY5d0JGstee0D0;e0JSiCo sk0M;aSeRiP;! cS5son yP;ahO;!e,sZP;el09Jr;hn,n;!e,oP; cruz,b;an,on;an,ePon;-louvHl,nPrs1; R-Pe,n,s hernandU1;alW9lWAph0O8sPtK0;ko02Smyl0C6;brainG7cUdouglEeTfedweMgSjLYkQlo0matPno9salm0w0BE;eo,teo;aPpedet5;dibu,el,lm0;aby houde 0J7lend1;dl4lie-V2th0uc0LS;hrPMlP;au0F2ov8;ePob;!-sherwo0LUe,n,s;ar,de093;ju0JQsley0MA;!en,onUsRtPx1;onPyn;! v0;en,onP;!-rP;ilD;! Q-tP;yl4;lVOstewa0BG;! P;b5khP;alH;a05Wi4on ta043;e,h0G0onRp4sQuP;ah,or;em,im;! R-P;sePwULza6;ti;hoz0i84ja0MUs0HQ;eQod,rPv8;e01Uis1od;dPll;! P;addRfQharry lP;ucE;ot0A9;ies1;d0HGn7raam0FO; Qin,o Pvi4;re6;e0IPmatyE;a09eUiQyP;!e,s1;ePs1; P-b,s1;aPde0saHJ;ll3nd0ED;sPys1;! S-Ply,on;aQe9Rku0AKn090oFrick0OsPw0BE;eba10;leksa04MntW8;aWbradVgrKhUjVXmaSpaRtPvido0G7;.,ri Pyl4;tu;tt0FEul;r05BttP;eo,h0AO;unt4;foY8;lexandPrKM;er,re;l,r weinstein v; rJH;eSobQsonPub;!-lUC;! P;gregg,h9C;! R-Ps;ePm0GG;ly0JDmm0HW;jJWrP;ichaXV;!d3kRmQr0KXsPve4y0;h,on;es,y;e,obJ;an,coYEeQkeMle2me0DInOYreY1yP;d3e0GN;emQimP;!-markendel mYR;! RW;b07HrP;aj0EE;d3lPmy; i07B;! RenPh3son-a03N;! P;gAmi0CF;aPri0HI;ll9mi6z0JY;!e03kXoPquG;!bP; P-augu0FQo;aTchRda6eQgAkNKnicolas08RoPrCPsS8;scB;li,nrJ9th0;riP;sti0;nEIri2;! Tob,sQyP;! le ho02O;!e0FZonP;! Ps;jae m5tend063;marl1ronnJ;! Q-Pk;ka0I6;lexinQmPrD;ar0DH;gt1;a0GDer;far amj0KTji,ka,nPx;ve4;a2Kbrah2Bchi052d26ehahonwe iohs,g23hs3k21l1Mm1In1Fo1Br15s07t04v00w0yVzP;aPik,y0;a0C8cRkPo;! hP;arN;!kP;!i2;aQePleizK;d,s;an cPd0BBn,s;haP;ri0J1;anPha0inson jr aid0o;! Q-rP;ob0FK;aSOrK;aRXh7oua yannis-0CQsuQzaP;e,mna oriCF;ki;a06ha04i03ka09Slem abdeldjell0KEmaXraelVsQuP;!m4;aPelm09B;! QcPm,o,yah-0N;!ar 5R;fPju0G4;am0;!-P;n06Goluwase0FS;elQilP;! osayQBa;! R-P;yasP;si6;ahmed-wa0IWkM3nal08Zy0G6;ah,do0BJ;aPi,q;n,q;aZc0BAiSkQm,o,yaP;!h kab0HS;!-marie mathP;ys;!aSc,eP;!-P;jPwilliaY9;onG;!hPs;! P;e0B8is0I8;cRkP;! mP;ave0CD;! P;b0ARcamer1don-celes04Ied36gAjIkwaY0mala00Vxa03V;aTch0JAfanRh7is 0I2sut0ILvPw5;inPyn;!g;! P;kh0;ah,j akuna0EYkl8;aPrdan8;nQquim fredP;erXL;!n8;aEQuP;apHkPnngu02V;!p0I9;aRmEranP;! Pe;kIXna0I2;d,m;a01han00iXlan tsafaCoWyP;aPes;!nSsP;!sP;! Pe;abi0AM;! Pe;ad7boun0F1nasr0AJ;yd;aPja,r;n,sP;! gA-ta0CR;! akun0;m,nP;! zaCe,n;ePtan-MW;!nna olakun0F2r;nacioQorP;! rugwi09E;!-lea09C;an,en-hSir,risP;!sP;! Pa thi7;kyOB;enlD;e0GMimP;! R-tareq,aP;! P;anYSkhaliloul9sanou0E6yakhe0FC;aRd0ha0CBkQmaPtofH;el,h0CA;api,h0BM;hmPli;ad,ed b3;hSin,m,nP;! Q-aP;lex8;aRHgAtobiE;!arahkwen nonVL;a1Ge0Ci09mi0DSoXrag,uQyP;dBy0;be05Ods1gUlu09Rmb0CVnSsPxlDzai05W;nu-eQsP;a5e5;ym3;arj0EYtP;er,lD;h,uG;ang ZlVm4ngUrSs0E1uPwaTFzTB;dQmainsuda8ssP;am,e5;!ay05Men;acPmidE;e,io;miYVyi;denRlPm0;an,yP;scoVZwo0FB;! s0EK;ju0BKqu0;be0DUd0maQnaXWrPs0DPz1;d,o;n0GPya;a0Pba 0Octor0Md0Ji0Gktor-05Xl0Dmr0CnZrTsSyRzekP;aiahPyah luth4; aPL;dKMt0ven R3;ed,t1;bTcu0DMdens-ab0DCleRm0riCsh,veP;!nP;djy vio brun0E9s;ns,y jP;oh3;e04Sy;dri00ocZrPzo;iTyP;! kewJV-Pck;e068jImatP;hiP;eu;! cKD-QckPk;! yuh0;f05VlQpP;aBDi087;ou8;! elJh vigZQ;ck,k,xXH;i048yC;iQly0DRoHyP;!am;o06Cx;dPmsR5s2t0DS;an,enP;!-ZB;dQiPwB;! ra0FX;ens wildneQXy;! P;a.,m069;kev5;th,venP; P-jSJ;cHQsteph0;adi toZ7b16ch0EGd13i0Yjoo02Dk0Ul0Tm0Nn0Ho0Gr05s02t0F5v3yPza2;aZdTes,le01AtPveY;hamPon;!-P;edP;waRR;aTenP; Q-P;gAkristoff4;aPEgrKjP;ax;n,r;an,nPto;!ess margn0EMsh;an,e038h0E2sP;anPib;! aV1e;dy,is,j088keSOlYmWno,oTrRshad-an8TuPvD;hi0AOki,n,tP;a,o;isQSyP;! anastasiWTs1;ld,n,on,uP;nPt;! sa0EEa;anPeSG;j07ZmeSF;an,ey02Now;!yu0;i,k,nibal-liv007sRtzQyadanonhwGzP;al9o; bT0-miSX;! Pen,on;cTJjP;ad3effrD;adTda0eSiRmQneTQpN9zaP;! B8ta;ad,ou0AZ;d,lt1sh;d,th;!ou;!ek,im;ePim,yl;emPm ibrahimasoN;! iP;sai9;dPlaW8t7;ar,eP;nPr;! P-gA;elKT;iPri3;! mP;ohRDughL;acPib;uc;a1Se1Ch19i0Sl0Pnamiensa prince0Oo0Kr08uPya06H;e01ffy,illYnXrUsRtanaQyP; 6R-oFllauT1; w035;!tavP;!e,oP;! JM;jaap,sehQtejXJvP;an0DSe4in06Y;aj;in,t4;auSSeP; PrIO;greg0BJ;ds1mtoh fSns2YrPzy milhan emmanNL;bQsP;chom lubo0B9on;ens O1ir-jaC;riP;tz;aVeQiPov4u02Gyph1;ff5gorJ;en-jh0DSgPian sk0C4ys1;!ery koO5g,oP;ireQrP;io,y;! agbeO2;ceSdy,es1h7nt,phy junior alex0ti2ysP;en,onP;! degeP;raPI;-e05B;dRh0nQrPttli016;an,d1;tr0za02V;sgi ving0ASwinMU; e08X;am09AePi01XoryPX;b,nP;!-zoph00Ln;aZde1lbertWCno,oRuPveM;liPsepZL;anWAo;!rSvanP;i tres0AOnP;iPy;! t92;danoRgioP;! ronP;alYL;! nicoWU;cTnP;cFPlRmaQniP;! andrOR;el,tt03S;uca;in082oHG;aPilG;di,li,ssP;an03Ken;b,deon03i2n02oSrPvoND;aQry,sP;h1on;ld,rdVP;ffrXrgPvBT;ePiU1;! hU-SsP;!-P;al01VePhKHoF;doKJ;ePhQ;mi094;enN;ey,oy;c,e,na03Fs09P;! iJU;-e042bXdix-liyonHNeWhen g0BBlVmalUoussou oJ9rRspaO8uthi4vPylor 0B2;en,inPn4riel othny2yn;! franc8;eQla05GrPth,v3yNQ;eQXyVI;n,th;!iel-02E;a0C3en,il02Zo;l alb079th0;in,rP;ielPy2; S-P;aQpresP;to6;dr02A;anRe07RheHSlPspirid1vQN;eonaNSi7uP;cEis;ders,tLI;a1Ie0Yi0Rl0Jo09rPu0BRyX4;aXedSiP;edQtP;s1z;en,m0;! f00YdReriQrickP;! al IS;c034k bernard h;ie,yP;! watai009;nPs4;cQkP;!-LDlY6y;a,esUCisTk,oP;! 8KisP;! Q-P;e077m028xaVV;gAleTW;!coPz0AM;! P-0V;cesBrD;deTedley Sgang mathys azYGrRuPx;r005sseynP;i,ou;eCJreCJ;mous04S;! P;laQrP;aya6;dPye;ji;aVetUim1oP;rPyd;aVAentQiP;an,eV9;! P-jahgiZC;alIYoF;ch4;sh wild4v01C;d2e0AAlTnQoW1rP;as00Odous 0ALnas monO;dlDlKnPt5;!leyP;! meWA;ipPy;!os,po;d05h05Ui0A3lUnTod07ZrP;dRnQran zPs3ys;achaN;anVY;ina03M;g,niC;iPyx;ci3ks,p013s-XxP;! T-P;aPelNAlE5oFtelespho01Yvi06F;nPr8K;d01WtoP;i6ny;gang yQyinP;uo;ui;xaUL;ericoPi,y;! P;an009m004;a08GbZdYhWizu06WlVnoos UrQtehT9yP;sLz0;eRhaQisPma034o096;!si;d,n;s,z;omB;ah,co,lYV;d,eP;d,em;el,i,l;iSriP;cePz008;! P;etH7;anPen,o06J;! aHToP;! valienUN;-aw0a6Wb6Ud62e61fr60g06Xi5Wk5Ul3Dm2En1Zo5phraim mi1Yr1Hs19t0Zu0Xv0Fw0CxauQDy05zP;ai03drEeUh0iTraP; R-Ph;bPe7L;or0;film1gAli7mGJ;cZ3o;cWeky2kPlz,q06B;ielPy2; R-P;musamPwel1O;pa;caQjaPsafi006;ymB;rlQH;hi2ki2;e,ki2;aUdSed,menRr7tPyub-ensB;an r3hanP;!-kieRP;! far086;anPen03T;veas4Q;d,l da2;anQenP;!n5J;!im-gTD;aSePh0;nQrP;eNDs1; n06Is;an,nP;! W-UdQel,gelPZn,sP;!-curN; sPer;ebP;asP;ti3;aGPjPlGLrog4;amGoe;edgaK9gSherJ6jImUYnRrP;ayP;mo01I;icYD;regoN;an,genePno i042;! QG-gA;an,hRienneQtPua;an,h0;! m02I;anPen,fi;! Q-Pe;gAjImelchi05H;archReunwoo,haKVjQlandNmarie-I2pa2Tra07PwPza6;ahl35ilWS;a054r;anSK;aJdrEeoghe6kVpTsaStP;ebanQhPif yonE;eb0;! c.; hUTm;eraS5oirP;! attendu;andBeX7;asC8f0gi,iZkan mohKIlXmW8nSrRv5wP;anGFinP;! yipAL;ol;estQie,sP;tlD;! edw5oP;! P;georgiy,miYC;au,in P;ga2;cPk;! Q-Pk;alFG;aPmXE;bdouP;rah05F;laSI;dr01eHInXRoXrUuma Tyu0zP;eRoP; P-05U;c9SjImXWna2quetza02K;!l;viCW;iPy;ckPqGI;!-napess8;!chRha,kP;! P;joPM;! ran3-je8S;ew,iP;!ck nahel fondJIk;a0Ke0Gi07mVrSyP;lQrP;!son ryel0;!e,iaX1;ay,iQyP;!ck,k;cY3k,s;anuelSePiL9;riL4tP;h,tP;! iS6;! R-P;anPjK;geVR;alexandre-j,cSdoho mg,horacWYiRjPlucWPsteCCvaleN;aK4oP;hn,rG;be,i;haP0;lQn,rPx;!h0;! ikt0eTiP;aRen,oP;! Pn;d011gaet0j3Z;m,no;!-P;hDXoF;rPtt;ey LQiXFyP;-kePck;niku3;ad,nuelPus james jefferT4;! Pe;josFC; 22-21a1ZbeTQchonon eliezer zKLd1Xe1Vh1Pi0Ok0Nl0Cm0Bnathan-kabaPKo01riTKt1uz4vZwXyPzeB;-VaSck,esVQjahRoQsP;ee fritzcJGi0;!tGZ;! 9C;ke043m,n,sP;! mP;asXM;anQ7jI;aPo03Kyn NQ;lid ubKnn;iPyn;n,s;aXhWiTnRu6DyP;! P;gabriel tcham3justiM9;! jImi P;ed01O;! gAcWSkPm,s;! P;all3;an,im;h,n;er,o;al0iQyP;no8otGD;!eWoRsP;! lP;awrLV;!tP;! QtP;! quiQ8;nRApaP;ul;-s025;ana mikel luziZZi; 0M-0Ka0Ce04hu,ja01k00mZoTro6sRx,yaPze;!huP;! g04O;!cPei,ha go2;haCQ;! floe-stenTs,tP;e,h,tP;! Q-Pe;amayEceleYW;saN8t6C;berg;a6eleJ2;em,y9;h Pn;aWRcPjIloIVmHWpiW1;arven emmeMGhr63; T-QlPz4;! VP-mikOK;an8dZ8jQraP;fa2pYO;amGu007;char00UenoCfloUDjQnP;galuNYo7;oAFu004;b,h,kimVmUnTsP;! P-bas3Js;aiIPdPn6W;aleP;ssUL;!ge,o;! kemegMG;! chranRU;c7MdjayHOjPno9;amGe0;gAkQniriPsaMJ;na;erN; iALaPy7;djQji fP;allSS;! P;amSPiVMmPnaFD;amSOouctB;bePYftherios-haralaPiEm5x8;mb;ePon,ryC;n,r skylD;ij9j Pm,n,z4;ous01N;se0;ely1hadjiP;! mP;aliComB;aPdeepW1o;mj00MsvirW0;d3nRs43tP;an,hanP;! a02U;ar,o;aiVKen;li,sa;!-0Ean0Dd06e03foEZgar02i01m00oXrVuardM3vTwP;ardPeMin,yn;! P-vaugGUo;desOjo4JkakP;raKO;aRJielP; yP9;iPy0;ck,en,k;nexe,uardP;! P;c.,w.;oVYuVY;!s1z;! ethan chau,d;m,nPr; Ps YL;as7Zjo45saNtafXV;enTiSyP;! P;leP;on2;e,s1;! rP;apWU;!-nonH;stP;eph3;be,enPoua ethan 011rahUR;!ez4;m1rSsPt1v3zyPN;h0tP;en,onP;! youJF;l,ne3J;a3Be27h22i1Hj15m14o0Ir0Au06w05yPzimeCG;lanPriCs3; U-QdP; neyi00K-staCM;daEVeRjeQmWEray cP;arl;reY6;duNElFY;aWdVeTgabry2jSmRprCJrobbie reggJsP;aPinWF;ntJ8;iUUosX7;acY8;mmXMnrP;iqB9;jeffeCF;leNAnibL;aynSEight;a6dleyBRke,nc0stP;en,inPyn;!-P;lennEY;aVeQiss-008yss-eP;zeR9;-mesaSwPxyl jacYR;! creesonP; arP;th004;be;g0ke,yI7zFS;bromir-radostinHUl0m07nVrUuRvPyXX;!iP;c,d;!gPly,m0ra009;!lasP;! adRB;i0je,yan dru43;! Z-YaWgmo VnTovP;anPon;! kP-lev2;ePiII;ndrQA; PeD5ie,y;milG;ez2W;ld,tien shamaI4vP;an,en,on;bruce auQZc26;el0jimmy-k1Yoliver joBL;eniJNinPnHyniC;go,iP;cS7on;itNytRP;aWeUhoshu9ibrilToRuP;li1Knnice paP;yt1;!ey,ffrey amaJ2mo,vP;anJ1;! cristQU;bbBdP;!jeVX;meRn,waQyP;!d3;d JE;l de0s cEH;armuZDc08di4e01lYmTnoZVoSrk,vPyB;ad,inP;!e-authoriP;ty;ge6my,n;etI9itP;hI8rP;iPy;!e,osPus;! phineE;aPlBD;n,wP;arSP;goSuPz2;-dQbPdQ;en8;on6;! P;alPemVOisYJmazzoJL;eLEfonN1;en,keQE;aReQiPruv,wNT;rBy0;er0;nPviZ7;iOZzel benedict kW9; t0Ra0Lcl0e0Ii0Ej0l0Dm09n05on,rYsWvSwRxtQyP;an,l7v35;er,t4;ay6ey;! nael gossCManRen,iPon,y6;j0nP;!ceJT;sh,te;hPi OPmoSK;aELown lindsK;da,eSiPmeMnelson V9ou,riCyC;ckPk,q8T;! P;simGXvo;ck,kP;! P-aK0;miS6;aRev0isQnPsleyeliY8z2;is,y;!-mTG;hi,i,li;aH3ba abSUetriRiQyP;aKArX0;an,r XN;os,us;beMUon,ycie immanuel LH;mRon qwLRtan-lafQvP;yn;lecU7;i0us;andrey 2FdjQlPzel kJR;an7I;ahmL;monSnPv3;! PdQBgeO0;a8UmarcP;ks1;! P;b.;ys1;c NAe2Il2Em21n1Io1Cr0Ss0QuQIv03wXxWyP;aRl3m9PsQt1vPwens-six1;en,i;haDNon,un; sSWnP;! cP;hriP;st;!am,t1;enTmin joRoud,sPud;onPun;! IY;shP;ua;!sley herwiM;e05iPon,yO1;!auA2dSnO0sP;!-cPon;hrP;istoph4;! R-Pe,s1;ax2panS3saGLtP;heodoPJ;aWbP8dreau-40eTjRkingsV5meOsQtPyad9;iaSUrM6;im1;ePo3X;remJ;liEmmTKzP;ecP;hi2;dNSleJ8nNVsh7;! T-RnP;!-rA1sP; 7Bky;a5SeP8hP;endQF;bOUedQEma2ry0yiwin5;hie9MtP;an,i0;e05iYne9KonXrQsh0wiWXyP;k,l,us6Y;eRiQylP;! christ brVA;ck,el 3Fn;lQnP;! jK;!lP;!-brillaHJ;!-ardzMJ;an,el,n,oTs,usP;! Ph;azl0cQnPs0F;a31iimin ash4;arMC;! P;ludW2mil0sandUD;l,nP;! nPtz ritcAL;ikMX; TudP;! nagy fikry fLVaP;! modiQ-clP;auNX;bo;miE6;! 06-sneid4a2e,g05iVlDnSte QyP;!ck,el,k,l;andrPmaric6XwoUM;ei;ickQyP;! zaQ1;!-fanf0;al,ck,elQil,k,lPs,yL;!o riccHW; R-P;bMJdaws1eP;do4ClJvIP;emm0humbRGjRnQsPweih0;tef0;aRXe78;oEZr.,unP;ho,iTN; phL4eLJ;isUVyaIL;a00iQj0on,yP;an,en;anUenPon;! Q-P;kySN;cPl45;haP;rlG;! QoP;! anti0F;atlEkySHlPmLN;og0;rlDse;eRi7lasPy0;! aaron moP;rlD;!ck;l,m1vP;a,en,on;.5Ua4Be40h13i12kairauh,l0Ho04rUuSyP;!prienQrP;il,us;!-octaviUH;niluIErtP;!is;a3NeWistQuz dP;.,anieS1;ianQoP;bLph4;! RoP;! alP;essaM9;saQ8;ePpin phar2;d3s1;by,dy,henZlYnUrQsiP;mo;eQmaCnePy;ille tshibanR2liU1;nt5yP;! S5;norQor,rUXstantPvenaFD; e0VinLP;! P;jeffNxaFE;by,e,in,linKUt64;! P;lFCsauJB;aZeUiRoPyLZ;ud,visP;! lud13-aCS;fPnt;fPt1;!o6J;ff-SmeF0rmontRtTLvPyt1;ePon dyeR8;laNR;! dautrK;raRO;rVudeQwens pierre junL2yP;! eM6t1;! R-P;adPeQ8oFsaD3;gi;miP;sa2;ck,enPk;cPs 3B;e SX;ar0eJKf-ettig3;a18e0Qhan chu27i0KontianPUriPuckAPyler bryB2;n0IsP;! 0C-09aJMlDtP;! 03-01an aeraQSen4WianWmy merFYoP;ff r5MphePs;! TrP;! Q-P;i0jIwIR;hu0jP;amGoseph-m,uPW;ichiKXl.;! Po;a24eRjr,leonFBrodriguQsergio m0viP;ctR9;ez;liE;ay02ePjo3Tno9;vaM;dOMeSkQnaP;tha6I;ylP;li0;li2;bKXelQjoPnoah kimeQSoF;naL8;liQT;emSmarck-alexRzP;a3ihP;ao;anKK;meMA;ov7S; hin asTiRmaobSFwetinP;! rP;icQJ;muw5shekP; abrah7;ht1;iWms,nTrRsPyt1;kPn4t4;el,i,y;my,vik sriyP;anSK;au,g P;en,yP;ou,u;ckXkhP;! R-iP;braP;hi0V;aQbShaPBoPtMV;umB;daIFhmP;adou bPed at tiCG;amAD; amadou tidi0na hamaCF;ce,d0Zim,k0Yll3n0VrVsSva staley m. daB4yP;se,tonP;!-P;no9;!e-mPka;atP;thGQ;bel0MlPo 14;eRiPo3OyFS;!e wP;illiaI1;-l0HriCsP;! 05-P;aZdoYeUhRiQl0FoPwH1xaCRyv0;liCQw3;saJ;enrQuP;beG3go;i,y;d02lQmiOQr6KtPvanI2;ien6;iPoi,y;!e,o6P;min6G;dSlQntP;hoB5oi6;beFUexPfrPR;a9Xis;ri3;aWclement UeRhQjPoF;ud9;en9U;dPvaD1;oPwa3L;ua3K;tiP;ma;lQnP;toi6;exa9L;ee;! haP;ig; my1Rdl4el-aP;leP;xaGV;am karl b57ir;! mLPd,i,lPy;ey,y;cXdrVlestinUndK7phTsarP;! Q-P;da42gA;aPraQV;ng2;yr;! benoit-PT;iPyk;cIJk,x;e Pil;mi1Q;de,el14i0Yl0Nm0Fn0ErYsRyP;dePm0r1s3;!n;pUsiTtP; beckham dRielP;! P;rav3;arCM;an,us;er,i0;dy,ey,lUmeG1rTsten-SterPv3y;! Q-P;jaNS;aEUclKleopoA7trevO1;ga2A;endjy,o2Q;! mart5-Xcy-1MeTiSoPt1;!sP;! P;jo2raQ4;ns,sN1;nsQs P;bernBTulys93;! jP;as1;aEIbHN;ek,t5;d3eronTilRronP;! serekoP;ue;!i3oP;! myGZ; aP;ntP;ho98; DLeWixUlSno,um,vinP;! Q-emP;meN;ki7E;aPum;gh0han-mGP;! P;da2N;!bP;! P;d3TeLJhe lush 9Ymoslee batra89nC3ya2;denTnPo,ro,us;e P;joP;seP;ph;! gA;-augusANanP;! aP;veN; j;a3Nb,e2Dh2Bi1Tjo1Zl1Oo1BrUuRwania1WyP;arass-mweneluPr1;ko;dLOgBOrP;ak,ePt0M;-saleKNch;a0Ne0Gi0Ao08u04yP;anVceTd3eRleigh 5Mon,sP;onPson oshKW;!-lynx;nn,r maP;rk;!n vP;in5X;! V-Pson-bidjouNt;edTkeRmiQniCpeaP;rs1;ch2;ilP;ly;is1;chi vy,lo3Ama2van-HR;ce,nP;eQoP;!-GC;ls1;dy,oPxgB;ks;anRce,eP;l P;moi7B;! Pd;rPzif0;omFB;nRtQydP;en,on;!t;dQn0tP;!on;anPen,on;! edi5S;d03ed3hNEi02ndWv3xVyP;anTdenQen,sonPt3;!-jI;! P;jean-FRke6Unzoga5NrP;eign;! clK;lDt1;en,oP;!nP;! Q-ashP;by;gAshP;ea;dy,nd1;!foQlPy;ay al3Sey;rd;az,b00di,gZiYnheurXrVs6NuRwQyP;an,d;!en;a,bacarQdreauP;lt;! P;mohamed b9BsiJY;eLisPna;! ilC3l4O;! ceriaC;ll;d0ne enzo aKM;!by,ie;aQess rockP; v23;de,iQyP;k,z;ne,r,se;agDUe05j0ko,lWnyVoUraSsP;aiQhP;oy; eJ0;hMAme naPne;bi;rn;amin-b5um5;al Sel,lPoo,y;!yP; P-floria7D;jo;aSmoQtP;al6Ohiouba8E;hPusGJ;amKP;ni2;l,nfaAV;agPerti5Z;atFG;au0Xck0WejKhnoKQlkacem a4YnVrQshP;oi;at,ekSnQtP;!ie,r7;aPie,y;do,rd5K;et;! 0O-0KcklDd0HeFMi0Fj02n01oALsYtSyQzP;leiH1;-ryan laPam5;mi6;leQzP;i1y;e,yP;!-mP;addP;ox;lDonP;! mP;orr8;e0Uie,y;amPi,oen74;iPyn;m,nP;! P-mBU;bVeliCRgUh.,joTluSnsRtiP;motP;hy;on8O;ke;hn;abLHord1;raP;dlD;!-PcCCto;chLO;avKRjy Prick consta63;elP;ij9;cRevenson christA6mQra2tP;zi1;arC5;art4;achOmarc2;am,h7;!-kyl1;a34b9Fd0Hk0Gl0EmaJPndou nd0Dp0CrZsRxt1yP;ezKGrP;em,on;iHZsUtiP;aPen;an,nP;! cP;edrP;ic;am,em,iP;li2Jm;aYkXnVrStQuP;ch;!holoP;me;a-vQePon,y;tt;ince5C;abePey;! francois wL;ev; siH7ckQkP;!a;! touCG;tis5W;onFR;tPz6F;ajDEhazB;aNtaK7;a6Zer eCIis,r;aK1bHBcH5dFAeF7fF6gEVhDViD9jD6kCLl84m7Dn4Ko4Gputsi4Fq4Ar2Fs20t1Ru1Fv11w0Xx0QyXzP;aUer,haTiRlaQrP;a2i2;an hamayG8n;m,y9zP;!j1;wn;an,de,i,m,n,rP;i gabriel manaMy9;a0Cd06e05hISi03l00mUoub Sr1ssRth0usI1v3yP;azPoJQ; aR;am,em;aPmos8D;hmK5;anSeQricP;-iC4k;n,rP;icBL;!-adPe;ib;aPey,imE;l,nP;!e,n;! Pte;julG;en,l eyr7;an,enRinP;! sandow P;husGA;! P;rPzi1;ex;anRnPsHHto;! Pn,sh;aF3sE5;!-P;roFR;eQil,lPt1x2;! 7U;lPm; QlP; dED;da7WjoIIm,ous2MrP;om0;aQePs9B;b,n;b,n-P;jay05;a01eWiVnUo,rPy0;ahamSohom yaakRuP;hDHmP;!y;ov;! d0;eesh AGoGI; solom1an,nKraj2BtejpLy0;d8rQsP;ta;i,yP; d7G-P;coFJ;k,sh;bhoy aarZdrHgustXllalI3relVstRxP;enP;ce;en,inRonPyn;! P;sG0w7H;!-rK;!e,iP;en,o; loB4-a89e,inPus;! moke mbi2C;av;ah,ef,hSif,l0oQreHHsainCVtiP;cHGla;m,ng-tanP;yi;aPeo,ir0;nPrv;!asP;e,iP;os;aZerXhSinayIAl0oRsP;alaEFer,iP;m,rGN;ng;ar,erQim,k0vPw5;aGNin;! P;d6Fe9SgrD;ey;! muteP;ba;d,elRhQph Pr;ca3L;d,i;! gillG;a1Hch1Ee1Cfe3ha1Bi13jun0Zk0Yl0Wm0Rn0Fo0Br09s04tTvSw5yQzP;ad,hur jesa6;!anPe2Vo7Rs1;! 6K;en,in;!a,hUiTtuSurPyC0;!oP;! aP;nd9A;ri;n,os oE3;em8urP;! Q-Pe;juBT;b.,emDBf6Qsessi dPza1Y;yl0;al0enShP;aPbO;m,nPv5;! rHD;e,ie;es1oP;n,w;!nQtskenton P;ni;! tzP;vi;aVoP;! promSldP;! P;saP;mu2;esP;se;itG5uQvP;! sBEpL;dPlt;! d.,-morocP;co;aPeBLin;an,nP;! QdP;!o;ad7;an,o jaP;ck,mG;a6en,h0in;! P;der0AsP;unP;ny;!an,elSh0lGo barz0sQus,yanP;! sAX;! f58tP;i7Jo1H; Q-nP;atha8N;gede1theopP;hiCV;am,m;k,n,sP;! aki2Iti7C;er,iP;baPe,t;ld; eBVaf,f4ZmPs14ta,z;!azt;iSuP;iQuP;ja;la;b,l;aq;ki,uP;elePs; aP;ar1;a2Bd1Ies,g0Yh0Vi0Rs0NtSuRvitnQyPze;r,s;adh;j0kiF6;hon09oP; soj0ineZnP; beC6iPy;! lUnSoP;! luQsP;! adn0;ka;!oP;! 4P;auP;reP;nt;! T-P;lRoF;liP;vi4;ew8;gQsengphachaPtien d42;nh;eorP;ge;ey rKiXyP;! P-jI;frUgAjTkaleDHloRmaQpet4rPse4G;aEMusty cher6;th5Q;h0reP;nzo;amGunior ezenw;anco8;e,n;dy,el,hRonP;! lP;ai;!il;konhrasha QmeE6sP;!h;tsP;te; minhPad; thP;omE;ad06eRuP;i loic camroPs;nn; ZlP; QoPus;! BAs;aUb5NeTkSlyfe,na5ZrP;icP;arP;do;al1R;mil4G;lePn4C;ja52;berek2LiQkeP;lv5;saP;ac;!vP;eer6M;er0Coni3UrTuinSyP;! jaQ-P;leM;cquG;! v1;eQiP;ck,x,y;! Z-Vas,i,sSwPy;! P;johnnyPma2yi0; j2Q;! P;gonza2Wm3NroP;ma5;adonKpP;hiP;lipP;pe;ju9CkSnRtyQyP;oh0;ra;ol0;ais4uP;nn2;!sP;!onP;! P;de jesC3mP;arc;el iSkRsPto9Py;! aPs3S;hmAVmO;in,yn;lunP;ga;a00djed abdeldj6IeZiUjRmBnKoPr77;ry09s;ay;ad,u spP;enP;cy;el,ne,rP;! P;el-joQhPmAI;am1C;ud;d3Fl,nin broux ya2;dZel,h,nXrUsTuNvieRyQziP;ah,gh;as,es; isP;ra2;so;! s6XiPo;! zP;ay6;!e,iP;-jI;eoRouPri2y;! P;djoul3EndiaAH;! mars6D;!-h42a3Ib3Ec3Bd37e1Lf1BhareAOi0Rl0Gmamy a0Eo0CpYrWsa6tUune al8SvSwaleed labRyP;assaPk; m2Y;eb;a32inP;! gi0;aPon;i,n;iPyk;ck,k;arslan Xer,hP;aTe2LonsP;ePo;! alP;beP;rt;! ouQbP;acB;mBs9U;mQyigP;it;usP;taP;fa;is,nPu;so,zo;ndrP;ew;aYeRoum yann-P;trP;av8;luUnP;! Qd47willie P;jr;dQsteP;ve;unc0;ia;n,rd; Z-YfXj9mWoSrQstPx V;aOer;aPi70;za;!c55uP;!-wPmBne;ilP;li7; 9You a. m.,usb9;arh0;mah51y72;akbBjWkaVmSreQseerP;at;dPza;a,ha;ahamPusawO;adP;ou;mLrB;r.;onsoWredP;! ToP;! P;fPre6;elP;ix;paoP;lo;! P;iv;a18c16i15jandro10k0Wph,s0OxP; 0La02e01iSyQzaP;nd4;m,sP;! jI;!m,o mWsP; S-Ps;aPjI;daP;ms;ePshen l5;rw0zeP;ki2;atiE;nder-guy,y;nPvi4;!dP;erYrP;eQoPu;!s;! Q-P;greg,vissL;doSjRmQnichP;olE;at0E;amGr;ri0; R-P;anP;ton00;aPjItshishte8Y;ar1drP;iaP;no;azBgAju59mPnader nasr yo89;athiE;!sP;aRioP;! P;erHfabi0;ndroQvP;io;! saP;ns1;!sP;andPh0y;ar,er,rP;!e;! mR-mP;attP;eo;icP;ka2;st4; m34-4OkP;!sy;ndP;ro;eRiQo,riP;ch bi3en,k;n,on;n,rH;alyQiP;de; mo2L;aRertP;! Po;g.,p.;n,ra;e05inWkarial8CnUrQz P;ry0;iQyP;c,k;cPk;!k;! P;e3Ymi15;! S-P;piP;erP;re;jQnaP;th0;r,unP;i5CoO;ir; PdQ;edP;di6;a4AusseynP; iP;br1M;ars0c2e05h04i02omian seth00ramZsQweP;si;elVhTiPyl;lPm;! P;aPc34;hm5D;!aP;n5Zr,y0;! bouP;al5U;! sad6O; aP;na2;-y0aPl,m;m,n;e5Oim;emPm donnie ray ab0;!-kiP;veM;ns;!aP;i,n4TyP;!an; z3andEbrah09dWkimJmUnaTsRvyjP;otP; s1H;aPh2L;!ki;ch0Mn;al,eP;!ry;anXenP;! R-ulP;riC;ck;bRchristian ha3Bda6BjImiPr0s17;gu2;amG;enePryi2;dict;! P;ebe62gAmhaPna62;nd;ab63;ym;mRnafPod0s0y0;! P;al1Y;a07eP;dRs,tP;! fetP;ih;! P-t0A;aZbenyoYc1RelVgWiTj64khSsRyQzaP;kar3E;a26oW;el58hehryB;al66;brYsPy5Z;sa;fatQgP;ha1F;eh;uc28;bPm5;douP;la43;dQt rP;ah4W;! YouP;! R-jay-P;joP;rd0;moRtP;idP;ia6;usP;tapP;ha;aPfa1T;di;amVhiUit,ni rajRuQya ekow adP;om;st5; mP;icP;ha2;ad,lG; sQdPve4;eep;inP;gh;dLf0n0;d0g0SlQmeNth0;ry;! lorenz;a0Rdi0Qe0Mh0Hi0Ejoumani ch0Cle0Bnan09o06rRvHyP;anPm;!-0N;iPyeQ;aQeP;l,n;m,nP;! RoP;! dP;av3S;aRhunter vinc3saP;ntiaP;go;lbRnP;drG;es;erP;to;lQniPri;as marv5s;fo;! saPe;mi;ne,y;ristopP;he;b,lPr,y0;! waP;li;aPiban ponraj0vH;m,nPrv;! cP;herP;if;dotReb,lQm,tomiP;wa;!-ya01io;un;su;el,hy,mSn,r luckP;-eP;mmP;anu2;! W-Ta nSie,o,sP;! P;juP;ni15;da;jeQr1Nsmael smi26yaP;ci6;ssy;fat25h01imr0jYmTrQsP;ha0;aQoP;ss;my;!aSohamed yP;ouP;ssP;ef;dy;acQiP;br3D;ob;aQusP;se5;ss0;eShPke1K;ak,ilQrPyut;af;le;! heP;nd2;a2BbEd0Fe0Bhij0Ai06o00rRt5uP;!bakr,lfazl,zB;ar;aPi2;hSm,rP;! abP;duP;ll9;amPem;! P;ezeqP;ui2;lo RuP;!bakP;er,ry;haP;yd3;en;el-wandQnaPy0;ya;ensP;ky;ot;!d,lP;!ard P;taylP;or; elm1Halla1De0Tilla0So0CuP;lTrP; RaUrahmaP;an,nP;! khalY;raR;! 00-Xah1ZhaTlRrP;aPhm0;hm0;ahPo;!i;diPm0Y; mP;ohammP;ed;kWrahmanP;! iP;hs0;ah1Nil9kTrahRwadoQzP;ay0;od;am1e02m0;on;ar0P;!ll9uP;! 00lRrahaP;ma6;ne; S-QaP;ye;azUrP;afH;azShaQjamLw04;al;kePm0B;em;iz;karim jean pJsamaP;th;ie;hi;lUnoTrrahP;im,manP;! Pe;isP;ma2;ur;! h00aziZhXkTl9maRouP;ahP;ab;lPt5;ek,ik;aRodP;doP;us;fi;amP;id;ze;akP;im;!hP;! aP;mr faroPym0;uk;alP;ek;as;nPrn0;!oP;ub;d0Dh0Cl0ArQvuPy0zz;sh0;a06h7i00onRuQw5;in;sh;! R-aQve4;er;ri2;benSdeiv8raP;fa2;el;is;aj9;ah;sh,zP;! P;muP;hammP;ad;am;f,laPv;ak;iy0;an;il;en,vH;ik|PastTense¦be1did,had,mea0taken,we0;nt;en,gan|LastName¦0:654;1:64S;2:64V;3:64Q;4:65H;5:5VO;6:62Q;7:652;8:65U;9:65R;A:63X;B:62G;C:62E;D:60Z;E:65J;F:65B;G:5Y5;H:5OS;I:644;J:611;K:65X;L:637;M:5Z1;N:63F;O:5ZT;P:65O;Q:616;a5T0b4ZSc4CUd3MHe3IUf39Lg2V0h2K0i2I7j2E6k26Nl1OXm11Xn0XQo0ULp0GUqu0G0r076sOCtFWuFDv83w2Hx2Dy1HzR;a0Rbi2LSd0Qe0Hgh66Ph0Fi06o03ra5BJuVv66IwSyR;p,sk;a3VReSiR;bHck0;in3KPrsd8;an5QIbWcUerTm63Bni5W4pSrR;avi4NBek,i664;anc5MPpH;ch0le3;cRh3EJ;a5SFo64B;an,erRo2HU;!bu2KH;l0J6mb5PLna65Bok,rSsDuR;ch,vi;rI4zi;c5UVddBeXli4N1mUnTol4CGrpo65Ato597uk60WvSzR;ka,zi;!an103ic,k103;ger594nHz3HK;merRn5HR;!mR;an5HMm2;gRli4MUm0;el,l0;aMouRu;!ko5FH;aYchXhraMiNlWnVpUrSss,tR;ch5XHtl;anRbGi648n,ou3FBr;g648s5ZL;hir3iIp5NF;etDga;en5D6in5Y7nicMG;!ma604;l5OZrn;aniec5ZFon5BF;bHc0Bd0AegHfaro5Y2g08h07i62Nj5FIk05l04m02nYor,pVrUsDuTwSyRz61Y;a3NGon61H;ac5QFol;liIst;an5BAi5S2ov;a654hi5YYpR;!aR;!vig62R;eTiSnRth,utiq;is,oN;ni,s;l635tt51E;bi64Be4M4or,pR;a60Vie61T;at2o5TUus5J5;aRem,otno60Kr5N9;ib,ri2;ari5LBer5FF;or623roR;dn5FDv5LC;ra,unays5YU;cShR;ar5L6ee;arRo5PC;d5FZia,o;a09e05h311i04oVpersiHs2LturrC7uSvRyy,zyc5PS;a639o622;ankao,iEnas5XCrR;gaitGievichR;!sansou4UB;cYn60MrVshiUuR;ma634nR;gRy;bl636e,s1w61T;da,k2GQna5UA;kSsR;ki,t1;!e,um;h64FkeE;el,p;!arTllJm1KUnSr5U7tRun4W0;m2t544;or,s8;l6wo5SN;co02gns5BUk01l00mXnVp5V9rTsStRx;es,yI;!ko;dRengoua63Yge5;in,l6;ez,g,i4k5TSnR;a5Z6onP;aRba;da,guc5P1mo637sRza5XY;a5XXhi63S;ao613e;i,ole5ZGym4F4;la,ob;aSenUSiRu;ao,e,l1;i4QInR;d4th5W2;a3Xe2Vh2Ai0Ro02rZuTyRzaw9;a5X7bBdHer,l5Y9m2nn3P0oto4X7sRt5YL;e,ne5LYoc5XNpia4KPs;!bbol5HZebboOlVnTrRth3T0;fHstA7tR;eBh;derRs5ZX;!li5ZW;ff,z;aSen5ZUiRo4KI;ce,de,ght5RYnn;ig5ZQy;!erMPi0Ej0Cl07n06oWrUsneswesquigi5UUtTulSw4EMycR;en5D7is5XC;fe,i147;d2herspo1;dRms58Do2AQr1C4th;!e4COsw60K;!dTlRod,t5LN;co63EeRfo7g62Nl6ri5Z7s6;d5Z7y;!a7bu60IcoIgWhVlUmanTru5YPs5RNwRy;arRor60G;d,k;!s5SS;aQed5Z2oI;am,ouK;aDer;!g,n;dUe2YRfSlRsk,v3;ey,m2;eRin2UCo7;!nd1;s1um;ciRt4I7;chows4ZOecho5L1;l3IDto;aFb18c13d12e0Zg0Yk0Wl0Gmferwi5B3nZonz58OrYsWtRx553;hTos5WNs19HtRz5S2;!eRi5E6ma5X9y;b22Jr;eRmo4o4YH;ld0nb2GVrs;ca5IFem2hi4JKintain0ni2D2sRta5Y3;!el5H9;i5X1te;a610b06c03d02e01g00heng5YRiarZkWnVsUtR;erRle,on;b55XsR;!giE;p0ta19A;e5D3iA;el,lR;eRh5WS;p60Kr;s5GBz;!aDe0G6f594;klf5UGr;!er,le,s5LM;hRkl0;c0CXeR;ll,st0;e5ZMu59H;b4MDco05d04es,fo7he03i02k01lWmVsTtRve5OT;sRz;e,hi4;c5NKey,onR;abH;an,et,s;ar,coc3DTeUiRow59Js5QB;aSck,ngRot,st1;!h5NFt1;ms1rd;t4W7y;!i3R9y;ams1s5VMts5FR;!l5JQ;e1XKiMs;tt,x;iRm2;ns,r5HV;en,gi601ht5DNn6;be,czor57Fge5OAh0le4OVnSrRsn0;en5R8zb5DA;i3AQke5ZY;m0o4GEtm2;e,hUkRloI;eRh5MZi;nRy;heis0s;kramasing5ZRma5VU;anaw603r3;a09e04iSyR;a61Cdd1n5VPte;bl6gh5MSnf582ppBs01tR;aZco50CeWfo7iMlUmo4tSwR;h0SUor5YE;e4OGiRle,o58Zy;ck,er,g,n5FT;ey,oR;ck,w;duIfo7hSl6m2seEwR;ay,o5PB;e615ouKu5XR;k0ll;s4SAt1;aTel0lRssHts3G4;an5Q2eRl2;h5MEn;bBr,tR;l6on;lRmoQn,rt1tt,yC;an,e5GOl6on;a0Qb0Pd0Ne0Lg0Kh0Ji0Bkar4BTl06my4VPn03r01sSther19Futhe5TKxl0yR;gaQm2;b2WNco60QeYl0n0sXtR;!aEbVeTla39Umore49Wov0pSriR;ck,m2;ahEh60P;lak8rR;!gaa7;o1N0ro4IXu5XQ;e5TGin42O;lo5ILma5UXn3GO;bRhBt,y;er,r71;ar4BGc,deSer,ga,k,niIsl6tRzH;er,laQw5XI;l,rP;bu57Mch,d,feFlTn0sStR;on,y,z;!ch,h;!eRi2ECm2s,wo5OH;ns5BCr,t;b554ck0e5MUgXlWn0ppeFrVsStR;he,zH;enthe3i5XOlo,mi404sRt3PD;!ba5WAenR;bo57Ds5B7;!iIot;!brenn0;a7h5MB;liMm3FEr5XX;an,eli5RKn0;ch,dRg5J8k5ZBl0se;!n0on;geRloI;!r55M;b5DUer,st0;d,k54On0riMtherRv0;b5PAup;an260b13c12d10e0Zf0Yg0Uh0Ti0Qjs8ke0Ol0DmpBn0Aqua5T1r02sZtTuSvro5VWwan24YyR;h5GDlaQm2;gh,thi59T;ana5IOchVeSi0ki29Aso5B8tR;!ec3S8ie5EUs,y;rRs;aEh2ZTm2sR;!treA;el,i5M5;hSki4EQl4IGt1ylR;ciw,iw;ipaba5SWko;am,bXdVeUfo7ga4AFing29EkTl5R2maInSsRt,wiI;ima5V7za5HG;af5LWe5MIoI;!en5JR;!nc5Y8s;eRle,r5QX;l5DSn;riIu5NM;dl0em2DAg4C6kSnR;am2D9er;!o1GK;dYeXgrae5RYh3kWlTmSpoBsh,tRz56J;!e5LPh5E3on,z2HD;an,sl6;!aFeSgaDiRm2;ng1HGs;ck,n5M4r,tD;laDovi58T;c5SOry0FGs;al,iSn0onJrR;if,on;ck,spu2BG;f2LJlRy;iMm2;bHdJnSsbr5MYtR;!e,o,tequaQ;m2wr4NT;ichko11Ul8;an5TBeSnRwawaho5U1;er,iG;nRt49L;a5XSer;erLf0;cOClp5WY;deRel,lei5GV;l5CZns;ey,kenh5WVo4RP;eRle;noukisik11Jr5LI;a3Se21i0Ela0DoUrSuR;ig5WClga36Qr5YC;ee5SQign2RXk5EIoR;mAon8;c08egt533g07hl,i04jtis53Zk6lXnVorhiGr5QBsUuTx,yRz;ar,er,nR;a5FEe;e,k,l3ZBri5SH;e,sm2;d56Xext0hoh8kn0KJod0ricNXsR;ae5VKy406;aWcViUkTlRp4UHterraNw5L0;eRiI;n3E4riM;!aeFri5VG;g5SFk0KD;k5ALy;nt,ti0;cu,dy,gSns1sRza7;a7elBinJ;ht,t;el,u0;al,elBi5R6;ardingerbro53Gso578;a19b18c15d13e0Zg0Qir4k4l0Cmon5NIn06o04r02sZtWvSziR;au,e4KU;aTeSiRo5VJ;aNerL;ir5PNla4V6t;l5UJra9;aRiuIk5P3ry,ti,ul5WK;lRrd;!e,iL;!cReJ7h6i2T1son4ZE;ar5UEoR;glio5V9l,mpDn5HD;aRce5TVeLk5OXmon3T5o5QMt5VQ;l5UBn2YI;lRn;a7et5H9i,o58T;!ceTeRk,ya7;tRy;!t5TI;lRnD;et5FLlR;etDi;a03b3F5ch5RAde,i5S1lRn0on,tofs5QT;a00eTiRne5SDot;aReu,ot5FH;rd,u5SN;!br58YdWfVg5RMmTnSrRsec5V9;ay,s,y;a5PQeu5PQ;aRe4u4;i4rt;eu,r46P;i417onC;!fu1TNgom5QZl58Rndr4T7rRse5PHt;d,e5WRs;in,nd4r4LLt,y23O;!a5DWeXiWnSoRro5WCue2L8;a,t;aTeSi0oRy;la,n;!auOr1t,ux;is,le;a7la5PS;aRr;nt,ux;!au,ill5QRlTn32ZrSuRw2FI;!xfoF;a,nesHra;!e,fau4;al5FIe2O1is,rR;egn5I0ic5I0;aSca,eRo;!n4IR;i4r5PW;eFo5VU;fo4g5PLlTnSrRu;d,ri40J;!di0;!a46W;a1FbeFc1Ed1Dg1Ci19k5P5l15n0Wr00sXtUuil4FDv3UDxtoriCyTzR;e5iR;e4J6na;rPs;e4rStRu;er,or5FV;a5PBie;c5PJen5T5il5C2sRt3X2ve;e5FLiRot;a,e4;a0Lb0Jc0Id0Eett5H6g0Ch0Ai09ja11XlQPm06n04o02p01rYsWtVvRwoeF;aSeRilB;nCt;eRis;c34Rl5SBt;efeu5GJhe8z;ail3OWchRi,t26;e28Lue4;eSiRo4XI;er,ll5MC;auOc4KAt5DY;ael5S4eal5S4i53A;!nR;!e5ne4AQ;a4V5eRi5EBoui4IS;!rLt5N6;aSeR;sh,t5DR;es8nd;eu59Rty;aev8elRo1YR;le,st;a5R6eRne,ouv8;!at,gBrJt5DL;eTiSonRy;!ck,i;!c5NPer;ro5PRt;aingCh;aCer5S3oRu5SC;!nc580;r5QAyP;aXdUeTiSne4O3tR;i,ur4BP;ck,e4;d5G8g5PGsLt,z5LD;eSitRramiN;ol5SNti;riItD;!bBnRsK;c5OCt;!aTeSlR;a,uc5DP;s01z;rd,s5PG;g0CUllSnRt001;e,o5UG;e0MKo5E2;a,he4ZAia7;d0et;auOch5O2ot;le,ry,uR;!d5RGgeo9;b4c2Td2Ri2Ol2Bn0Fr06s01t00uTvaSzR;qu5OH;la,s1L4;b3SHcWdUgTja5OPle,q3DAtSvRx,zaudug5SI;i3N7r5N2;hi0i0o5EHr3;eo9h2;ev5F0rR;a3eu5MYin,on,y;h0la5HY;ch0e5EXtheu0;as,el5A7ilUko,qu5O7sR;!aSe5EAilRor;!j5PJ;l,ram53F;a1W3en53Hi5TEo5P7;aYeXgaWiUl6ma,nTot5TGrSs,varR;as5D6es5D6;ie5E4y;ey,um;eRn55W;ty,ur;!ra;l5OBnK3;!c0KWlo,mbouviB;!-hav4a1Kb1Fc1Dd0Oe0Nfe37Jg0Mh0Ji10HkoughnAl0Em0An08o07p04r03s01tZvWwTzR;anRielegh8;dt,t;alle1GiSoRy32M;lv1Dnth98rm0;jk,nd8;alkSig,lR;aend1WOiA;en5NQ;a23SiRy;en8gh33V;arelber5BOchPeRum1WK;l,v1WJ;enter16oestH;eperstSuymbrR;ouI;raeD;pst5T5sJt5D4verm0;eRon;ck,l5QZr,sD;eTiSoR;nsj5SJorh2;chHddelko5KMer5S1;er,t0;aSeRuvan5IF;uv8ym2;aSeth8nR;de0Sen;n8r;erIoRust8;rCuR;c5R1tD;!een05rimb8G;g555l,t5KIve5PT;a0CeTiSl4KLor2r3CAuRy31R;s8ys5QX;erendonIjk;g08inKl06meulebroec31OnZrSwR;alBi5LT;bVdonckt,hTlu3D2mSpoHsFDt56Ave8wR;al5NM;a4N9e0i3D0;aReR;yd8;eRyl;ck,rg5QN;bUdTeShout8kerckRwild3UE;hov8;!n5NE;a0C3ungengronovi5JT;os5OCrR;an37BoeR;k,le;aRe5CG;c,gama5S2;insDri5BW;eBlSnR;biggela5R8el5OO;!e,le;alst1V8hRle5KSort414;estein4JEy;eToetzSrRur8;aba5L5uy22B;ela0;llRrg8;gh32C;ck0el5OFmme5EDsseR;!ndel5BK;a5MUc02dZeWiVlRot5DFt2LC;a1A3eSiR;erGll5H5;e,ntgo5FTrRt,y;aQon;n,qu50E;ntSriRt;en,oD;i,y51Q;eRoI;be25sRz;!be288;in,ouF;d3Q1lRnc54Nos,r,ve;!lanR;c3IBt;a5P2eRna9;au,bonc54B;carUhRlav51Gzy;eRon;rRt;!e46Gie;e5NRo;bart5LQc5BWg08h05it5Q2l01mZnXpWrSsRtinaw5LQ;al,er5IMon,tin5P4;baTf0quSsRza5LP;a5KQiN;aFhaF;in,s;at3NXsh58V;derRger4OF;hiEwo5F1;bRfr4HFp391;he3MEr34S;ako4K1bricks1ep,ho4Y0iSlRm0ri5MW;i50Lri5MV;nRshn6;!e250;lSrR;i5MRy;!e4O5fe57K;laQu5DJ;a6Uc6Qe5Ph4Ei3Jka3Hnimer4T9o20r0Ks0IuZwVyR;e5D4lTmSne,o,quien5HQrR;an,e4MYl50QreE;ch56Li4XVofi41G;ie,or;eSiRym2;gg,niM;ddeEedR;aBy;!b08ck07d06g5GTi05l03n01o3E2p00rTsStRx35Pzo;hiEi5JPty;c2h5O1i,k2QQ;aNbWc4SHenGNgVin5H1k5H1mUnSpRri0t1;!auOin;bRe57Ji0oI;l4SAuE;aiCel58Y;e1ot;a57Ye,i3PL;in,liMp3Y4;nRstaE;ey,oI;ipa5JDlR;!ey,i0o5M1y;l59Nte;auOe5o;!er,li2LFno5PS;iel450m2oe5LZ;chawaschinakusc4UWerenp5INheil5J7iRoufl1RZui;gad5KEhe5LEnon5LRp9;a0Ve0Ji06oXuSyR;gg,m0n20;ax,ch4DBde5EWeUff0l59FmTnAoMsRt;el,l0sR;!aFl0;bBel,i0p;l,sd4GS;al8cYdd8es5LNiXll0mVnApUquAtSuRws1MUy0;i4CWs2GQt;e5hi0oc3L7tR;!a3e4VVi0;ia5IUp0;bRp3WT;el5OEly;lo,ni,ti0;hAki;a02b5JLc3N3e01fi00gXh6ls37XmWnUoTpRquAtG;le5P7oRp;di,loC;!n45Rt;gRh,ks,qu3YM;a5N1le;!bo5N0;anCeSoR;!trinda5K6;ni5O0;lett5LBro;b,re;l,ntapoulosNud;a00beZc4PLdr5EEen,fXgonniMh8illWlo5O4mVn5NWpaTsSvR;e5M6is2;s6tl0;g5MUnR;ez,i0;aiCbl5BQo2TXpJ;!et,i;eRfB;n1V5th8;k,rt;dRsu4udecoe5MJ;aw5BKw5BK;ch00g0h4SYin0j5IWmmeEnWo4pVsUvRyn57U;ag3XJeRo5NL;ni5G3rsR;!ay,e,i,y;el0k;h4LFp;!chRqu59B;aSeR;ll,m0IK;n5E5rd;imow5MYy;b16c15d14e2UZf12gn0JVkarz,l10m0Vn0Oo0Mp0Ir0Ds0Bt0AuUwRys1z5FO;eEle,nRsl6;e4HFsR;eQheQ;b3che05g5ITkat4T0l04me58Hp55Hque3SIrXsVtTve2PMzR;eRin;!au,l;!aRen,ge,lo5JEv3Q9;in,nt;elBig6NsaRt5NJ;i5H9l3;aVeUi47XlAnRon5D1tel5IAv58V;eRi0o3XW;b1lBrRu49X;oc5M6;!au,il;ng48VuR;de,lt;go5CEze;q5M4ra3tD;h,t8;caNh,sHtR;ev3o;cUd,el5LJi5H2k5HYnTok,pe,rRte525;an5JGeR;s3W9y;aiKeb58Z;a56Vh5H7;a,e,h58XoSpRs2;!i5F5;lnRr;is5H5;ds,f,le,mR;bs,ey;as,dWeViUkTnRty;a3EAeR;!ma5LI;anCin;et5M7o5M9;ll5FFr;rK0u;aTbLe53FkSli5KHpRs;ic,ki5LF;i5LEow;i5GHlRn,s4Y1;la,ty;do,edo,lRon,st40B;an,ey,i0;fRt;a,lemi4o5KT;a4B2dy,orPS;cac4XUh6;ey,ic,l0;cRt5IX;h,k45P;a0Kb0Jc0Hdr5JCe0Ff0Eg0Dkk1SZl09m03n01pZrYsUtRvich5BDwis5F2;aSchywakFCe,iRl6te2V4yk;o,r5GP;r3XNs;chTi,on,sR;an4QWeRi5o59Q;r2ur,y4;aFer,uI;e4LZli,re;pRt1;er,iMma5GUy;a5FPcX2daEkRon,us;er,h57Ul5FI;bVl3mSonRp3RGs;ey,s,y;!eRi5KNo5KN;ns,rR;manLs;e58Uro;bu5JCi0lRma56Mt1;a7eSi,m2oR;n,ts1y;m,ry;e,heLne,r3uG;fAn6r1;rRtj8ulP;ce4LKn6;al,eRh6kn0li;!h5IL;bi501oO;n,tatih8;a0Ve0Ki07oXri55PuTyR;f5CDsR;!dH;il55KmuOn58Rot549rRss,y;bSi0m8sR;by,t1;er,u4SY;ai,e5ITin,ll1mXnWrSuR;in,saQzH;aTbSnRpJs1;!e,t1;o4STu4ST;l,v5LK;ey,is;!asSeRmas3ps1s8;!l52S;on,s52R;b00chAeYff5BXlle3Z0mWnVon,rSsRvier5H7;daBe55PtB;eSiRot,y;er,o54X;au,me5EK;akar2el544;enRot;e55Js;rRss8ul8v3;i5INy;auSeFi,oRut5G3;d2V1ut3RF;d5AIlt;b00d5GUis8llZme5JDn4DJoXrRsa7tr0YV;aVeUiaSn,o5KOrRy;e5BIi8;q5JCultR;!bujo4T3;auOr,t;ce,uO;doRfil59QrA;r079s9;ab,en59V;a51Zer5GK;b5B9ckViUjge4WVnSt5IZuRy0;m551te,v4KO;as1I0oR;p5CPs;laQn,saQ;!er0FBr4UX;a0Qb0Oc0Nd3KNe0Mf0Lgo0KhHi0Jja5F9l0Gm0Dn06o05rXsUtRven3wf4UT;aSrRt,u;au,eau,o;ouis1RDrd;ke595ni0sStR;a3V9e,o4u;er31Pi0on;c39ZiXp1KArStR;elc55Sre;aUeTiRo5JZ;aRck,er,sK;h,n;!au4TKn3I2;cc5ASin,s,uO;auOeBll58G;liLtaranha8;aWbVc5GFdlUnSsRta,zi;car4on;a5DCey,iR;an,er,na;aQen;erg8;gl5DNnt,rd,uO;e3SXk6pR;a5EEleR;!m2t1;a59Fen4TGlRm0ZG;eRi0;m0r,z;chorab,llAssere4ATx39D;nagenni1us5HM;ft0n0;d,s,t0;ci5HGh0k3V8;bRo;roeIu5JK;g5HYre,s2AT;hRik4QY;aMiSorR;yk,ze51J;no4ZLte5AX;b0Zc0Ydr5BIe3PCg0Vi0Qk0Nl0Mm0Jn0Foc,p0Cquo9r06s01tYuVvSweEysR;!ec;aRer5HEr6;gl01BrR;a,oz5AQ;pi0reSsRte,zi0;!s58F;au,l,t;ic,loIoRroJ;n535uR;!ague5GG;cUhTk,na4J1sRt4EG;e,iR;e,na5I2;ko4SK;a,he43T;asVdTe5g0i3NElSm6quiNrRt3HBzi;a5C8id3U1;ey,o;e,iR;f,vH;i4YZs3M5;aSerno5IHh4KJiRp5AS;e54Tn;k54Lr4OI;a5B6cTd5ey,gSis,kersl6n5DEq48ZsRze50N;e48TweE;!o5EPu55N;ho55Sre5DS;!aSbReo,i0l3;e5u5E6;n,ro,s;!ari5DGb5CVh53Zla7m2on4KIty;aSeRi5I4s5A3;shi5EAuc53B;cs,h1L2;lRsa5BPt;haTlR;a5DIeRon,y;f0ur;n4MMrda3;gSliaR;fer5ESni;aFet;coCh04Qkn6;aSet,ic5CUle,oRrizi3QV;i5ALr;ry,uO;aF3bF2cCQdra5AJeATfriz59CgAPh9Ji86jom2k7Zl7Mm7Bn72o5Op4Squ4Qr4Pt1Du0Gvei5FGw03yVzR;aTcze5E7eSiFtankov4UEuR;b0m4RN;i4MWle5EO;bo,l51Fr4NQ;!ch,kGlUmTnSph5H6rRvr575;e,i3EG;no5HVo5HV;bol4S4es,in4WGon8Hs;co5D6vR;aSeR;rho55Zs8M;n5GOr5GO;aYeViSoRygwa53T;bo5CEl;ercz4NFgSk55InRrce3YHszczo4ZQ;del542fo7;aFeF;ariK7eRll,ns1rdfZ1tli5A3;nRz6;ay,ey,y;ck0iUlTn3O2rSyR;ch4XMze;d8t4WN;es,l5E1;l53Tn;a0Lbra0Kch0Jd0He0Gffo2B4g0Fh3Q2i0Eja,kun5C2l0Cmmer0Bn08p05rYsXtSwa5F6zR;or,u5B3;cTer,her3QHliffJtRz;eRo4SU;au,r1AS;h,lifR;fJse;m2s4EQ;a5ENbl56Nch,dWeVgUlTma,n2P9onCpreSre3WHteGujnau5E9vR;ey0oy0;na5AD;ak,o1SJ;et,ue;au4QCt4ZH;if,yn;eRi5AEpHKry;rRt;i5E7n506;!bo5E9dRstr55G;a,bo5E8erRq5BE;laQma5B7;f4NIl3s,t1;em2ko,l1NHtRzB;ai4e;c5BMff1re,s5BG;d8r5F2;tl0;da7ey4Q8oR;l,ml4O0;et,odo33Z;!nN;g0rR;d,ez;-25.24a1Id2BYe0Zgeo07Pi0Sje2l0Rmi2Do0HrYuSv2yR;g0lG;a7bTck6e1UJll,p54QrR;gRl6m6n6roI;e1iE;bRi5DT;inRlef4N0s;gt1s;a01eYiXoTuRzel3RB;b,ga4k,n55StR;he52Sr514;bHehe4LLkow5E1m5A2nTpSuRv0;b,ds,se;e,ian5F0;a5C7iI;ck3P7de,gn0k3P7ng0pl3;bHc4PMet4U0if,lSmmHveR;y,z;b03Kow;b9cXda,mWn52EsTtRuss4TXv6;en,fo7hRt1;ea4N4ie,y;b3E4sR;bRer;ou5D6u5ED;!andi2QT;h2k;bZckYdaFeXfWkGlVnTo2OTpellb8rSsi4N4tt,uRvHweEy;g3OBt0HE;ch4N2e4X1k,m1oz4VSy;a,eR;!h2FTy;fi,g531zenbe2U0;feEiB;be,ssH;!daBer,le0WUm2w10K;bs,o;auF2ou9;b4A2ckWdd,eVlTnRre,tt,v8;eho4ZPgRs1;a,k,ue;et,iar59ZlRs1weE;ar,in,y;gli4REli;lGn6;-08a06b58Sc53Sdm2e04f02g0hl6i00llZmXnWpTrSspr531u0veRwa7y0;ns1r;c4ZZg5EDk,liMn0ry;an5ANhR;anRe1OP;iIos;ckGg0s3O7;arPmRs;a59Del8l0;!i5EHy;gn0nR;!ba5B1er,g5DAhi4VVmeB1th5EX;anat56YfeOElovR;a,ic;ks4B2lJnRpe,vG;!bu4M1s8;!dRr5D3;!w3NU;cEFm1OP;b0Bck0Ae0O9f09gChl08i07k5E7l06n00pYrVsTtSuRvo5CHwowy,zn4OX;b,ff0;es,h502;iRs8y3W7;!o4WM;an3PJbuIch4UOliMm0nSosz4OSrR;!a5EH;a,es;i2A2leR;!h5B2s,t1y;buIdVf214g,iSkiRovUMt1;cewi58Lew5D1;f5BFsR;laRze56Q;s,ws581;f20Zi4U4;in,k0;kHrs;!be5BK;an4NRfo7ra5A0;!ni4LJpoB;aIiBlGn0;a4PIel6PlDO;a0Jc0Gd0Fe0Ef0Dg0Bh23Zj07l03mXoWpUqueTroSsauve4YDthom58PviRyvG;ct4XAn357;ch,ma3;nt3;a3MUeRi3Y9;re,t4SW;m0n59Ou50H;aSiRle5DI;chH;rRuDK;cHre,sRt3;!eilleR;!-fo419;aToRuc;!uR;is,p;uD8wr46Xza4;aTe2oSulR;es,i8;hn,r;c0H4mGr4;eRod4EU;la9mmeLorgeLr2KW;el4QKran13R;l60ti56Y;en9izi0;a5CFer57ThSla518oRyrJ;e4XMme;a28Gristop5BK;mTnSrRub3;maQna4UF;d4ge5C8t59K;aQo4XH;eb1KCivas3IJ;agamiko9er2N2iRyrG;bb,reL;a0Ce06i00oZrSuRyks49A;gn3EZrr;aVen52FiSoRy;tt,uK;mo567ngR;er,sR;te8;dl6gRtt;ge,ue;on4QSseto,to,waF;cVdHeUl4K6nSrRshoIz0;a,i4WQop54S;a3NJeRou;ll48Qtt4UZ;gHrs,taH;e,kl0;arVcUdTer,ig58OnSrR;a560be59Youn9;a7ce,e5C7;al2ZLdiM;h,k,t4VR;!a55Qe,m2s50Q;argar8chicouaCJd6gXlWnUrTtSuR;n3EIra;h9t;k5BPliMna4ZBr58Y;gRi0je4YX;en3EEl0;diMlanzaNt1;gia58RnR;io3L7olR;et4W6iN;a13b12c11d0ZetaFh0Xi0Wkol0Vl0Qm0Mn0Jo4YTp0Ir0Fs0Et0CuVvUwTySzR;et,io;eGEy56R;!e09Q;al,iaD;a06b05c03d02et,il3XXk01lYmWnVpUrdiTsDtRv3D6za;hRie4;am,er1ie4;f,vG;i3G9r56K;g,ia;an56ZiR;l3XQs;aSde,e,iRor,s565;a,erGg569ni0;ge,nge,rd;onn59Sup;aNer,ol,re;heRy;ir1re5;haNir4ILl511re;mi,rt;l567oRsitsihowaCtB;!may4US;a,eb50Z;bSce,de4V8eRma55Yren3OE;l,ns416t;a,es,o3K7;er,ha,in53T;!dSi0nRt35K;e4T8i0;eFr4P2;erTly4Y8mR;erRi0;!e5AVs,v4W4;f6Ts,v4W3;aUch0de,eTiSle36Vm2oRqu3ti;!wo2W0;e5ARs;c53It;gGn56UriJ;an,o4T2uk;f0gnonb,ll557;i0nR;!e48H;eRgergre8os54N;n,rl2;hodols4OQq4WH;ey,hi,i2QS;me,rG;aYeUiSoRyd0;d4ANok,w4MO;d0eRseran4KBz4GG;rs,z4KX;dd1eTiSlRtt,y;g3OYl1SW;d0rs1;!p;b5A2y;aZeWiTocSu4OMyR;k,thJ;k,z4G7;ga2X4le4A7rn58ItR;hRs;!e4WZingeE;aSe59GlRntzc4HRst1t;in,lP;rs,t1;il,llR;ey,wo4YF;aZeWiUoSyR;k0w52M;at,boRc4YQniego566on,the4WRu4SJwi3QY;da,ge2;c0de,gRnto55Fp1GQz;er,ht1;aSighRmmo58Dno,v3;er,t;g0n6;ck,g0o56Wss1tTuRv3K9ws1yd8;gRte572;ht0;er,te570;aWeUiToSrRu2PPyrP;eslAo52N;fro1H0g2rb,tto0CY;l46Nnn0viM;a,enJlRne,rlt1v4JZ;ly,t1;ar3TXff,g3GIi4W7kHlk54Cna,ps524;a12b11c0Yd0Ve0Rg0Ni0Mko55Ol0Em05nZoXpWrVsTtSvRzm2;a4DXer3YQianx,r4YT;es,o3SXt0;co,et,s1tR;la,o;a7e43Yge,isaw4Y5na,o4A9;liMos,plG;ch2n4BFuR;i,se;aVcSetDgRi,j2H3ou,xt0;!ca58Her,h4NDl535;eRla4X9;nRrn4Z7;neL;i,ll1s4J4;!arN8bl42UcYeXiVmToRps1s4N8;es,nR;a586ds,e4HDin,s1SVy;e4FLonRs;ds,s;enRno,ot;c35Fs3S0;oCr;ox;aXeo,icaNlWvR;aUeR;i54YrSsR;tr558;s2NZwo4X2;!gg52Jin,n513;im2ye;rd,smakwe58E;no,ra;a4PYl,m2RLnSoRuGG;gCin,u3;er,orR;!et4SNi;beTfeFgSmRverkro53H;i3PEs;el,l0waF;rt,s;aw4VHeSl6m2oRweE;li,r1EY;le5ro53S;aSil57CkiNoRuren4ZO;n4JEtD;n4JDrd,te5;er3DCil3K1l6;ne,ud;a0Ke0Bi06oXrVtu4UKuRyD;bTffeOlSmRn1J8te;an,ko;l,m2tzJ;a4D1ro3QI;ad0eRi1I9orinche4HR;ad0en510;eYk54Mn1PMoXrVuTvR;a,eR;l3r;ldRp;is,om;e4NStR;is,keep0l6;k,n0;m1LYs44Z;d0GNelUl44Qmizu,nTpSri382sRvH;hiputag2lo;m2peO;dlede4D7e1Tk;ds,l,s;aYd2SWeXffWh51QiVlUm4HBppa7qu3rSvel2wR;an,c341;id8rRwo4VU;aQer,in;a4X6b6dt,t53Mv6;nk,toy2;a7er4WM;dy,h2OPp1ENr3sl6t501;dy,n,re4OV;ar,dowe55Sef0fOYh01i00kes4EYlap4UFnXpWrTshume56QtweEughWveSwRy;in,l;l2r;by,iMkSpR;e,lG;ey,l6;nes33W;aSd,kRly,o;!le,s;feOh2;en2IYnk;!an,in;aSorl1rR;oi;n4WNrR;bi,i412;a1Jb1Hco1Gd1Ce1BfTGg17hl,i13jour11k10l0Um0Qn0IoMp0Hqu2WMr01s00tYurAvVwTxt1yR;eRme55B;au,r,z;a4F3eR;d,ll;al4QNeRi33D;nRr4LAst4;e,i4MO;lWRo4ICterRz2RG;!bl56T;ny,s8;at,b05c04e5g02h2i01m4Ton6p40GrXtWvR;aSeRign2os;t4y;iRnt;n,sR;!vi5;el,orel;aSeRu4UE;!au,n3JFrG;nRr;!d,o,t;en,nd4G9;eRi;nt,rP;hi21Xia;an,i2;ch4MEulve50Y;aXcWeUlAnSsa4ZOtR;enCi0;!eR;t,v4R2;cRle,s4FZz;a3NLh564o1HK;hy53Dil;ck,r4VVt;aSco,en3H0iRjon543onGp0;na4S0tD;li0nRy;!y3NJ;!aVby,ci,eUig537k0lSmRva,w4SV;an,et,i4OZ;aRe53Is;nd,rs;ce4s4ZB;m55Ari;al6ouako3NXu3KS;!neR;!r,y;b1NAd4FZfTgSll0ne,s4UTtRzJ;ch0enlu52Q;le,neurA;eFoF;aSee,g55Ll1SMmoQuR;e53Bin,y;lRr,to4;a,la;!d,fe4DLl6r457wal53Y;erTgSiRmihrads4JA;l4ZPn4ZP;e,l6;ay,ho3N7;n4GArd,urL;ast4VUeRilB;!sty8;bTlSrRve4MLwa7;le,r,s;!e4TU;o0LUro3NG;a1We1Vh05i03la02oYrSuR;ll27Wrf4BSt4P2;aVe2BRiToSuR;g3BUt1;sa4OZza4OZ;bn0p1C6veR;n4IXr;i4n4H1;bTfSll24Nol,rRtte03Q;c53Rdamd53Rso;en,fi0ie4CZ;ey,le;faNt0v4F0;araffa,oRpi1s2X8vi0;rpi4Y5t53P;a14e0Zi0Ul0Pm0Ln0Go06r00uUwR;aRen3RSin536;b,ll0nn,p,rR;k,tz,z;c4WGeVhma52TlTmRne424r4E6st0tDvail0;!aRph;ch0k0n;d,eRl0tz,z;n4YTr;rm2tz;aUeTijve4R0oSyR;buFer;b0d0ed4JC;ad0ck,ib0y0;er,mRpp;!m;bb,c3Z8eYf4AYlXmm0nUoTpSrr,tt,uR;ff0l4GC;ac,pe;fs,l0;bSd0ei509fR;el52M;e52Nra4SN;lJt8;b,c2D4nR;!wa4C5;arr,eide4LVoTuR;bRpp;b,el;bRg0;!b;a4VEiSoRu4HX;ck,uth4IZ;d4QWliMtR;!h,t,z;aUeTiSossRybeuF;er,ma51X;c4ZQnk;ck0gHiha4ZTsi514y;tz0;aUck,eTff,lSpp0rRsgh4W0;al51Gm0;f,icoCke,l0AEt0;l2CLttekatD;ppac1QJvoN;eUff4HFiwi33Dl40Bmb4nTrStRub0xna4O2;agCky,te;!dHer,g0l3merho4AMr0;ck,dl0;jeep,l,n,v0;b0dli4ZFe01fZlYmXnWpp0rUtzBuRyG;bSeRm;n35Cr;!u50L;fRmHp,ry;!e,f;ck,en,zen2LS;bi0p4FS;l0t4U8;er,fR;er,n0riI;d0fKH;au4P5ivi0;gn4MWhiEi4PGlUmpiNnTrRuKyan00L;a4WCbRder4OBpit52I;e5o;dl4LVl49Ut3C0;aRl3QHzo;b4YDip4D4;ar4YSirado3YH;a36b2Xc2Sd2Rey,f2Pg2Lh2Ki29j28k27l1Qm1Jn0Zoum135p0Yquesp4S8r0Os0Mt0Ku03vXwUxTyR;eRl4CYwa7;gh,rLs,ur;!iCt1;aSchuRhn6ic4GI;ck,k;n,ts4GGya;aTe4VPiSoR;!ie,nnAriNy4O1;da4VRgn4CCns4GD;ge,rRs2RD;d,iRy;!a,e,ni;ber50Ac05d04g03k4TYl01m00nZp3rXssWtTvR;ageRe,iES;!au,sKt;eRn0on,r36Lt0;nCt,uR;se,x;e,ig4WJ;eRi4FYo;l,tD;d4H4i0o9;aFi0u4w0RK;a9li,ni0qu3tR;er,ry;er1u0HJ;e,riA;e4XCh4I3iRo2VC;er,sK;aco36IoRtl0;!re4LV;a4VLsRv4MR;!ev4MQ;aZb,ceYd3e3H4geXi4XXjea4V2labo4TDmWnVo4WArStR;h51AweE;aSeRo426;re,ttJ;bou49Hz4YJ;ec4VEo;ien50M;ant,nt;l0NSn;co4WAgu4NKnt4W7o,uOya;ee,i3IBk4TLount4SX;aco4bor09c06d03foFg01he51Bitr50Pn1onJr00sXtSviRz;c3V7do,lB;!aUer4HSiToRy;iRr;ne,re;er,ll2ni,o4SK;cruz,iCros4W2;aFcSer4fac1oRrTsig4VM;ne,uc4R5;ar3LQhagr3rainD;egrA;ine506la4WBol508st0uR;inAjC;erSgr8li8oRs;lo,v514;coIe,s4PC;er4hSoRy;mb,uF;a4VFe4G6;d,n;aWbVeUi4W2l50Ym4ZDoTpSuRw4Y0;els1KLs;as,le,s1;is49Os49Ourcachi2;k,o4ZTtz;auOe5ir,o3FU;kraDrdzi4QByVR;a05da4Y1e02g01haNi00lZmWna4TKoVsUt0vRzm2;aSiRy;a,et4KO;d4JXil,s,tor4BN;bu4XRki;!is,tto4ZN;eSonR;!ovi4CO;la,n,r1;afranq4YVes,o4YVs;ba,er,ot,si4TW;a4VTue4MG;!mbi0rSsR;bu4XIki,seL;a,no;bRdzi4RWh,is,m1ps4WUz4ZJ;a,er4XF;ala4IBelar9iN;gal4AHot;a4WQll00nRto,z2;b4QPcyl4RRd1ge3KUtRxt4JG;-Wa7eUil,jTlRon;auR;re4TD;ac03Pe2;-cRcRlo9;ro4D6;fiEh1PXlYSmauRp20Nurba3;ri4VT;a4T7ot;e44Rli;aSbo,eRot;ot,r;chte2YPlR;aLla;fRko;i,ou4WVr3UI;arangaNi4TGl0ou175;aUcThAkhoa4VHoRre;chiouRkP;co49F;a4YNhit3L4o;gaw4C5lo3JTr3K2;atXba4HXeWi4SZlUoTrSuR;rn,s4UF;an,evo9;lBur3;ie4oR;n,s4DA;e,l4I8t4YZ;e,iRte;er,ni;b,da4WLke,r,s4T1;a6Me4Xh4Ti39o0IuTwiyanili4VAyR;aEbRc1ZWgh,keFl6m2n4I6pi3G1rP;aIka;a9b0Bc1D3d09e07f04g02h01iz,lBm00nZpYqu4M5r46LsUtRwe,z;a4APhSigl4PQled4UYtR;er,le;ar4XMer2EIm2v4VY;aw,by,cTk,n46Hp4RYsStR;!ad,en4TE;e4YZo;h,io,oN;erth1Z6pe,r2CN;cim2ne4LCs6y45X;ak,bo472l6pf;l3WFomutal43Q;eni4QFgRuA;ie4VClG;e,fRi3ID;!a4XTet,iR;er,g4T8;dy,lRst,t4H6;!laQ;dRge,ow,ziav4EV;!ef4VPuIy;b,eSiR;con4VKo;c,nRrt4QS;ne,ov4U2;a2Eb23c1Yd1Se1Qg1Oh1Mi1Lj1Kl1Fm18n12o0Zp0Yqu0Xs0Lt0IuYvWwTxbur4GVySzR;elBiCm2on,zi;e2Tgi02Lly,on,z0;aQb0J3eSlRse4N3;a1BSey;!ll,rt,y;aRin49B;lAn;auOb08c5d4SLe07fi4MWg06i04l02m01n00pJqu473rZsUtSvRx,y,zy;es,ilB;et,h39ZlRy;ed4TZi4TI;!e,sR;eRi230le,on,y;!au,lRt;iRot;e4n;ke,re;d13Vtr4NH;a3el0ZW;eRl4JVo9;!au,tDz;llRsK;a7e,on;e2ILi0;n,r,tD;eRl3;li2rD;a,hSil4REoRs2D4t2F0u4E0;loNn2LPt;!er,i0;!a01by,co00eWh4DRiVl0on,qu3sRt2v4QI;aTeSiRo,y;!er,gn4BCt0;!gaQlAt;no,u;e3QRk,to;au,bTcra4VSe,ll,nRs;bRth4XG;a4TJe2BU;er4UIu4D8;ni,vi4TH;do,lGmoQti;ay,e0R5i0;er4KEpe;d,f,k,me,n6sStR;!e,s49W;!eveO;aVcTdSey,iRni,s1;ng8;aEe4MCo22Oy;er4K1heR;se,t4H1;l4UXyC;aTbSeRion42Qone4ROp4urJ;r4NSus;a4T2ion4GXur4FB;gnol4P5nRrd;e0I9iSko,oR;!ff,us4QL;!uk;a7et4F9feLin,koUlRs4AO;eSiR;!nL;ri,tt,v4HM;!s4AK;as,o;n4JLre5;m2n,rR;ba4SPer;a4UCerRge4IKi0l3Q5n1on,u0;is,s4KSy;!a4CCdQ6lRsn0uM;an4UZl;c4CdVeSge4J1h4HVi4AFl6riR;gue4OXq4US;!gh38KrR;iRmoQ;g4UPquG;e,iI;an,beFhSkRlof4ISo,quGr4J8;!e4W7laQr6;!a7eRfo7i4VQon0EN;!bla4P0cousDfor4M0le44Dr48Cst0tRv4H3;e5te;ar00bZeWiSl1WMr5uRy4UG;c2RUtH;chTdSe,l3HZnRss1ta4GZ;d49Be3FRs4KBts1;as,e5o4VO;a4D7e5on;nhSrR;ge,ts4K7;eQLim0ym0;!er49Zi4U7;!e,ge;cSdR;!kn3KW;hLk;a19b14c0Pd0Me0If0Fg0Dh0Cj2ll0Bm0An07o05p03qu00sZtVvRxJzz37X;a2Q5eRi3G6ra9;!n2XSrRs,t;aRin,on,s;!galv4PUt;cSi0o021s1tRz24P;er,wa4RD;ey,hRo;!e21Mot;iMs4DSt0w4SK;eSieR;r,z;l4R2t;au,eFl6ol4UFpeRr8;a,r;pHrd42BuxR;!he406tel4F2;ald9eSfr3V8gRk3;!laQroKuA;ar,haF;beFm0sc3TW;!et,y;et,ouA;a3UAby,gi,l0ouRu43X;ill4LLlA;fRir1ou;a4UOoR;!n4K2u44B;ber473dTl,ndSs48YuR;!to7x;au,e5o;el,l;dSeRgl6s1M3;!au,no4F5o4T9r;ay,eEle;a03c02e,hWkToStRuc4DV;el4TSi0;sKu;eRm2s1;r,tR;s,tL;aTb2SVeSk3lPoRt0;tDux,z;c47Uli2YYrt;n,rdSuR;d,me;e5s4IQv4FD;i4L9k4O4;rRz;d,ry;aUbGeSoR;de5ut;i4GBlli5rR;dy,v4F6;!rd,ut;ch,h;ain29BeToSyR;as1mG;!adGdeL;au2AVel;a1Db1Bc19d15e14ff,g0Yh0Xi0Qj0Pkl4HJl4RVm0Mn09p07q2D5s01t00uZvWySzR;ab3ZSetD;!es,nR;aSi0oR;!ldL;er481l292r4J0ud;aCeSiRn3D3ol;e,ll;ll,r460;laQmo4N3;a4MOhi0ti4RA;b4MUcUle4ATne3OPsTtR;er,h0oRre2TY;!uB;eguPl0;hRia,oe;e,ke;aRe2ODoc4RWp47LtuC;c,l4O9;a01co1KBdle4TIe00fr3CQka3WOnXoVsUtTu1ADvSy,zR;et4DIi,o42X;eEoi4NX;i0o8Rsc1T4;h4BEo3D7;!ir,n,uRy0;a7er,f,s,x;eSiR;c253e;!re5;!au,decotrAur,y;ld,rdJudRy;e41Ein;eSiRme4FSo2RPpHs386;gi,l3F2;n2XFte;an3eanC;cheWdVff2TDh0l41JmTnhSs4CJtR;be4QFm42A;aFol01A;er,nRshn1C1;e453i453;li4QFy;!n2BK;auObe4Q9el,liM;aVeUiTnRo,uin4I6;a1ISe4iR;er,us;mba40Xst4;as,nt,re5;lbu4RPm6n,udP;bs,d3CUk,ls,sJveL;bu3ZWdTekSfo7ik0mR;an,oQ;er,o4NG;en,iIon,y;!he,io,oRte4CV;llAre,u4OJ;an249e0BQiRo4S5;f4EZll5;dRliMndo43Zrd1um4CRy;!e,iMm2;b1Kc1Ed19f18g16h14i11j10k0Zl0Ym0Qn0Ko,p0Fqu0Ern,s0Bt04u02vWwlUyRz0U3;!le,moSnRta;es27Qol27G;!d,ne5r;ey,inR;g,s;aVenTiR;e,oRt4RS;lat4C5n;el,hR;iEor4OR;cl6ry;ch,q4QFshRt4LQ;!aw;cWe3WWhViUli4NBtR;ai,eRh4HGl6;lRw,y;a4N1le;a,er,g2;!weE;lif4EC;cSi4P3laviciuDmu2CCom,qu3E0sRto30P;!aFn6;al4R9oN;ep4MDi0;aUczy3Resar4K4hae4PLiToSpRs1ut;!ar4HHin,l;s38Hza;dD0er,n;g4OVt12Y;al4QLcUdTell14Tg46Jk3nSsRta;h0l49Ho3Z8;ey,ou;!eEh13Hle3LWon;in,oR;n,uF;aXbWeVhar3YSiTkhelaw1mel3OXoSp3sR;deEey,on;l330nGs;eRr4LI;r,ux;au,r,sa,zLY;au4GAeF;c2E9ge,nausk0WBut;l4FFst1;e3ISoc3NT;an,ot34W;a,c4PDdl,l,mSnRs3z4KN;bo4O5ey,gu3ZVi0s26Gv4BY;b4HJoQ;aRemtul4OSir,v4Q7;l,m2rola4O3;aRe4FKl8Wot,ue3SW;in,n,u408;ay,f36Xou,t45VuK;aUc491eSfo7iRoms44Qu3XByk;!g0ss1;au,rRta;!m14U;choH4k4EN;co,e49ChViUkSlRo2N9;etDos;e4QMm2oR;r,ws4KD;c4KXne;!a453els4EUieB;aTby,eSiRle5oMGu4DOy;de5e;au,r,zanaha4NM;dy,ni0;a0Ee05iSoR;quoc4B8y;beEd1FSg02l00mZnUquetR7rRtH;ck,iSoR;u3Z5z;auOn,on;!iUl2nTtR;!aRer4C9o,y;l,s;e4Q5hiE;aFo;b3MKp2Y8;aQico4D8lRty;an,i4BI;!l6n6;d45Ke1ANheilechipy,ir1FFlYmXnVquej2UFrTsRvi3XUzH;d4M0nRsy,t;el,on;cy,e44Gio41Ho49XtiRy;er,n3PD;auOe37DnRon;ev4ARv4AR;e1PKiC;lAue;ckenbu45MdVil,nTshnoItR;reRtro3JM;fa4LIso4HA;e,n,tR;i0z;e,laQ;aA4e75f70h6Ii4Ol41o1Mr0Cs0Btolom4F3uUyR;eSke,lGnR;che1e;!f1K8;a4MSbb8c05dd03e36Zf02g01hl3N1j4HKlZnt,pYrWsUtSw0yR;gib4FZpero4P4;elBn4AVtRzi4MX;!hw2;hRka,ti4IY;ee,m2or;ceEdy,enCiRteE;ch,fica49Ant1;a4O9il4OB;ciNfo7g4OGh4AOkRv0;!k387;et,h,l02R;a11Rfi4P4;icRy;om483;ac4JZcRet,h4JE;a4JYi;ai4MTi3BEzcEU;a0Ze0Hi07oXuTyRzyby4MS;dPor,sR;tu1G2un4HD;dh3SUnSssRt0W4;e,i8;eauRi0;!godm4AJ;cZg3i48Rje2kYmh1P0nov0MphAsXtWuUvRw,zy;encSoR;nc4H2st;al,h0;dRff,lx,t;fo4IZl6m2;a3e5o;ofs42Hs0;ki,op1QT;!acciNe,haz4GZt47T;cZdYeXgWho4J7l4NKmUnToSsRtch043veJ;c4JGq4MV;l2VWul;ciMgBse5t38O;aRe5i,o;!rd,ve4M9;e4HMna4HS;st3WSur;ea4NYh49Qmo4;e,ha7;!bi07co06d2e4K3fo41Hge05i3J4j2l04mo1H2nZo,sUtTvR;erRilBo4KV;e5re5t;a,ie4NTty;cTe33GseStR;!ay3XPi4JW;!au,c;a4KKoR;d,ttJ;a3L8derIWeUovTtR;iRov4JI;ce,ss;e5o4KK;ne5v2H2;at,l0;an4AYnt;tt,ur4AX;ns4HIsh;di0g0irPt31Jud,y;ar4JUc23d21e20g1Zh1Yi1Rl1Dm12n0Xo0Vp0Tr0Js0Ht0AuWwUyTzR;d36Mer,naR;ns4G3;e3U2nt0;eRl6;ll,rL;cach3Rdr03get02ill01j00lYnd,pVqu3E5rUssTtRz40Q;eRke,re;au,ouatam9;ar4DAe,i46E;n3q26Ir2GMti0v2RU;aRe5inHot;eFrR;d3ZIt;et45SiRl3W5os,t1y4HN;n,ot;et,ot;a7ot;!o4LN;et45Ni0;!aWc4LGeVhUin,oTrStRv3;er,ho4IGle,s;as4N4el;cn3XBms4GT;el,i0;et,l,t;gCrt;f46EgaDsAtR;i4E5leth3M8ma,on;a4K0cZeYi3ZHli0rXtSzR;ad3SM;aUeSiRloIne4J1uga9wiC;er,l4LV;!laRo4EDr,t;!n4IM;is,l,nt;e27Hi4MO;au,llJ;her4AXo;adi4IReRo3PAul4E7;!s3GX;lRre,se;e43Lm2;cUd,e4B7is4INsStRzo;!bri45Ich4B4e2XAikGon2YJus;!aRinA;nt,rt;e49Jin,y;b00eYiXmUnPoz1pR;a,eSiRonn37V;lii,ni;!ia4FQrt;eRi0;rRt;!e3UEoB;er,nv473;rRt;an3Y9e5le5oy;eFr4FS;a00eZiWjan3VXka,lTnic3ZYoSs1tRuk,yz4E5z402;on,riN;ck,n0EV;arSeRoI;nd0t;d,o;c3WWn,qu3sRtiIzog4AS;enRse4J6;a,ce;!sol4KV;k,nTrSsR;eIki;d,i;co,ek,s4FG;gnAlAnVrTssStRv4;ev3hi0i0ou,r23Q;an48Ret,on2XO;!e4EIiRot,s1;au3UWer,ot;ce5e5teR;!l,t;le,u;n4FSs1;!llh1U2te,ymir4KY;estRl21D;o,re;eRke4LB;!t45B;a03eYiWoUuRymaB;ch1mRnket48Esquell2WC;b49XeRm0;re5te5;c0XSme,of,qu3tkinLuR;a7f47Or4GA;c1LSn0ANsRtnik4FS;h4DJs1;au,h2iUmTsRtD;hRs9;ek,ke;arAer;ch,ff0;cZgYisXmond1nVqu3sTtSu4E7xt1yRzzot4KJ;fo4F8ne;!a,r,tL;hy,sR;!an,e;ch3G4e,tR;et,i43Ps;an5Vt4H8;ak9wi3WU;e,i4HOke2QL;a1Jc19d18e0Wg0TjaFke,l0Nm0Ln09o3GTp07quAr05s01tWu4F3vUzR;aSetDzaR;!le,r4HL;nCu;eFinRn3W6;!dr8X;aUcherTe5m2oSre,tRz;!aw47Fm2s,ui;n,ul;!alB;li0rd;aTh3TYsRz4JK;ar4FPin9oR;nAwotz4E1;ca4DPn;a3HHeRo3VSroCsoulB;!a4JVs,t,y4;eRia,on,p;!rN;a7cZd0eYgXhaWkVnawa4IGoUsStR;a3YMo;in4FXky,onR;!ne4AK;l,n,te5;h45Fm2n6;r4H3s;ato4l4NuA;!auOji2l,s,t;hSinR;ce,se;!beIin;coDentRpa4;al,el;aUbr4GCch0et,gr4JKie,k3YAlSoRs1YYt;is,n,tLF;aRe3J3or4FHy;!rd,t;rs4DDtR;os,re;arouSeRn1ou,uA;au3SVlAon;ic4HT;ch,d01g46Gp00rUsch1SLtRun1SL;e462n44WoSrRte,z4FL;acu1AKyz2PN;n,ws4D5;aVc3FTie,n6oUrRs1;eSoR;!ciNt43B;je2l1Cpa2S7ux;ni,ti;nun4ANrd;sz3QM;!al4HKim54no473;ge1oC;aYcXhUkSoRq,t1;r1t1IV;eRfo7l,neE;l,n,riMtt;a7eSl0oR;n,ra,t;!l4GVre5t;ioCol4B6;rRs429u48Q;d,i3A7;c3CLn3A6t;a04e01iSl1TDoRyB;!c4DGl3sP;lSnRp3STripp9;e4DEn6;bWiTliRocteDp;beFon,pR;e,on,p3NNs;as,b4CYe,me5on,pRst3;a1SIpRs;aFe3OQin,on,s,y;riIu3PS;lRys6;an,iRps;ng0pp4CS;l320m,nSrR;aQon,r9;!eRg,s0CMvobonen3MF;kh43Suf;aUeSliRun4GU;eg0;ff0ifR;er,f0;ff,hl0;a2Kc2Fd2Ce2Ag29i27je2l1Um1Sn1Gp1Cr0Gs0DtUuTva4H6wadjiwo6NzR;a7eRza;r1t;s,teFvr441;e06i02on,rUtR;eSiRy;gr317ni3BWt455;n1NPrs37Q;aVell3E0iUoRy4AE;!nSsk47TvR;!it4E1;e,z4BK;!e,l4FRmo2IFn;cRin;cRhuI;ioC;ll4C2on,qu44PtR;!bo9cle08IetSgr30Wje2lRot,p4CD;ou9;!i4B8;l40HrRt3;kRs11A;a,in;a4ATcSsR;el6l;e,h0;a0Kb4ACc0Id0He0Gh42Wi0Bk08liNm07n06o05rZsWtUuRwiI;c3XNgi4AVsStRz48U;a,el;ie,se4AA;!hR;!u9;hSiRon2RS;l411ng0;iMouK;aUeTiSoR;nJtDul4EWzU;er,go,n;!auOe,l,t45Ey;s,uOzR;zi4AI;c4FCde5ff,tD;a,et,in,ot;an31Higi1;eSiRs;ns,o;rs1tt;aUch1e,gTllSnRs;au,et;a7o;ny,o1GQ;l,nd,rd,ud;!i4CRs,y,z3ZX;ig2ri5;eRi3KZ;c416v476;l4G8rd,zR;el4EIz3RL;iSl0pRy;er,ia4GI;!e,nR;!-berg1ED;!a01dYe099iXk,m2nUoTroKse4C1tRy;eRlaQon,re;co4D2ll;i3MTsw43Ct;!eSiR;n3UWs1;ll,r,y;co3Q2ga3XHn,ss1;eRle1VGoI;lt1rRxt0;!ga4CU;nt,s3U1;bRonta9;e44Hro1P7;a02bo9c00eZiYk6lTne46LoStRu3ZF;on,z0;!is,qu3sKw;!an434eSiRo4FNs;c3QYg4BJzza4CH;fSgrin1QEr44YtRy;ier1GJrA;ig4E9;c2ss2MA;!ck,g4BEponj3PFr3tD;a4BVhR;at,er;de5n44Tt1;ff0llex,rR;ei4BPotD;e4EPgPn1Q7orra41Ouy;blGl,rRte428;!al3KGs;dPeRic,neau44No,ro3YXthoM;m42In312rR;s359zaN;aUcarre4hSkRlAorJq35Qry;!a42Xh40W;e,iR;e,na;r3TDu3FA;bo3F9cUds1k,n,rSse,t,uR;!dem0SR;ce,sRth;aEe,on;hy,oI;ar32b1c2Ud2Rest3MYffn6g2Oh2Ni2Ik2Gl24m22n1Po1Op1Kqu1Hr0Vs0Gt05uYvWwVx,ySzR;!et3Z6zi;a48FeSf0m0ne,otDr45OsR;an,se;!me48Dr,t,ur;lasz0Q8s6;a34JeE1iRlo0QRoC;e,ot;ke4EYlSne,r3s,tRzeJ;ch,o4CZ;et,h46IiTmi0oSsRyh;hCKon;!vi4B0;!nR;!g,o;a00chZeYiWno49XoVrTtRurHz3SS;eRis1on,yn;e,n,rs1s1;a1IUiRon,y;ar49Lg2EG;iCla;enRn,s2PX;ce,t;!hvi4B3l3XFnau49P;!e0ZFin;fPk3XP;c04e03h02l6quYsUtRzt;e3YSoRu4AL;!rR;el,i45Z;arTeRilBut;l0AJrRt;ie4DZ;d,el4C7;aSiR;er,no;lRr3P7;!et4D6;b6ek,l6;k,t4D4;au,he,os,ua;!a0Ac09d07e05fi4E1i01kYmWnVo417rTsStRzyI;!en4AChe26Yl4ANo0COs4A6;er,hl6i,l4AMonLy;!a43Ken37FoRy;t,w;eEi0;eRi0;n2YDr;!erlabShRi4B7m2s;iEur4AH;onD;l4CTsSzR;e46No;eRh,i0X4;!e,l4BH;!kh,ma46XntRro2MKtDz;!e46J;!eRi3NG;!lD6n;el,ks;be44Qd1BUsRy4;ch3TMkev44H;ay,eRin;l3re5tR;!/lava40Pe,te;aSendr1R2iRp481roc474y;cc471ll16Zn3PI;!domanolRl4C8tPy4zi2;ak9;l0QJnJ;a02cat2FFd01eZfi4B5gYiWkraVlo,nSquAse499talonRz1;e,o414;eRit3X6on;au,ll,tR;i0on,ti;c,tz;ch,sR;!en47S;aeFm2;s,tR;!t201;elAiNke;d9gap3EYroN;br3OVpR;al1in;a00c2TGdiMeeKfr6iYlWmToSuR;!ch1d3W1;c446mi467s;aSiRo1F7;e498tes47G;riNt0;!asRi4BR;!c46B;jt2NLnRot3WL;!s46B;dy,iRn48Crdy,sK;n,sy;eRik2ka4AA;nh3XWr;e45OllSnRvo;!c285e,t0;aSeRon;!re5ur;rd,t;in,k,ng;aNeSliaRno2V2u3;!ru4A5;au,l,r,s,t3UO;haSoRu4B8yku49Z;is,ka;is3Q0;!au2M3ciWe3F2hTiSkRre5;a7wo409;fi46Yoret3Y4;eSoR;lcz3JEt;!t4BK;!oR;la,ne;!sa0ZY;a2Ub2Kc2Gd27e26f24g21h1Wisel1Vk1Ql1Gm1Bn18o16p15quorm8r0Os0Ct07uUverTwe4A6zR;anRel6o4BHro4A9;iIne,o;eQmu473;a00dZeXiVlUn9rTtRvFWzil2NF;chiouani47UeRh1BXz8;l46Cy1E5;ipehenemiIs3;im4AUt1;koue45ClRmAn1XItiL7;emJle478;badinCEchipichi0IElRntou8stuoro0K4;!l3N;aFerki36Ain,ry;baRcantGBdi49Sgadoug4AZkipakino49UouagCBre5t2GV;nRrt;aQ1o9;aTes,ienkwaronNoolJsRtm2z2VM;en3ZZiniR;ag1;!jawadjiwaR;nokEF;a471b01go3ZFh00l0or44XselAtSuRwaO;ll0HXnkhirhC;aXerWiUrR;aSoR;!ut,walk0;nd0ut;gRl3FXn;ny,uy;!m2o49G;fic27Csh3GQ;aughness1KRea;o2Y6u3I6;a06b2c05d03e02fan0D4h0H5iZlYman3AToXpWrVsUtSv9weEyR;an,l6;eRiz,on;ga,n428;a48Pe3H8iNo3MC;!enm0B6iE;en,h3VI;o1JTs,ur1JTy;ea490os3OKy;chefSllRo2S5;at,i1;q47Js3OH;e3X3fi46Fg2il3FFste3VH;e,oR;n44Qw496;e5ha7u4AG;ll,m,nt;deka3Q3ie,or49Fp8r6;i,stR;er48Shuiz8;chawiaMdSeRio48Olina358o,raAsl46Ywani343;il0A1l;ar29Yoy0;aTeSiR;ccio485s;a468ry;it4lRra;by,l159;aXdersk0SMeWiUli0mTnSougJPsR;c12Ven,on,s1t4A5;ey,ho45E;o,s3OQ;g44IvR;ei460ie46I;a473niI;fSiR;zo47P;lam45Js1;eUiSoRre44Lumu45V;!no49S;ll,mR;akCX;e3W9s1;et,le;aSeRle,ma442na46Zo45P;ar1UIir;ll2LRnlSrR;a,e,ra;ey,on;aSd8i35Sle3LHo3GQrR;a39Fea39F;a7wa;arr30PfR;e3GMr2MR;miMsterrei45JttiM;aYd8eXiWjiVoSrRstrc429wy0;us3N8;ar44PnRwd;!i,neEoR;gh47Nugh47N;bw3W7ck;et,l1;l3nwa3HCsKt;ir,ms,y;aTchione3V5hSonnRte5;el3NMorL;a,ol3JBriM;in,lla137;aZeXiWl14Imi2PToUrTs1TWuSyR;ma3ILrC;ch1mTs;ea38Ui8;mRrC;saw3;d3G8s2K5;an,irCrRso;holz0m2;ma,rs417;k483s3V0;a2Pd2Oe1Qg1Oh1J9i0Zkye458o00twZuSyR;be462m2s1M9t414u46L;bVckBer,gUir3XAl3UQmai2R6nTrSs,tR;brown,e,t0QW;i,se,y;an,e413;e41TuA;er,ouR;rgG;al46D;adGb0Mf0Lg3PSi0Il0FmiCn0Eon2r08se07t05u00vWwTyR;eRon;l21Os;aSeElRosie1VRta3O7;an,es;k,ll;a2EHeSic420oR;s48Atn6;cRl479;os3M2;iDl2rSte,viR;ll1on;cy,ie,rRse,y;iRy;!ce;m2ru3I2su4tR;aw3UYe;da,w2H2;ay,bu452cVdUe5f3ENgr8ie3XImandTqu3GRr9tSum,v47YwR;ay,id,o3W3;h6on;!au,e5in;i0SPo435;hAu47R;a407s465;d,eSiRs;b0KLn;sLt;ls,rSseR;tDux;et,on;fsi452l3GE;eSleR;m2sK;c3KSrt;a0OAc07diMe03g01jhu9ke46Il00mYnXoWpissiMqu3GAro,sUtTvRwi2O9;a7eR;ns,rv3SB;aouigui0E9elAko3PFschkP;bAen,hiR;ka46Xmu43C;f,rt;et,te5;ch1N7eRs;ck,ns;eLlo,ss1;en,hRro;!tengaB;dTlSmRs8;ec,i;!liNs2WS;er0iMziels3ZG;a3O7hWkUlToR;dRlet3YS;!e43P;as,etD;eRn0s;lb3ZXrs1;iRolet3KX;lo,p3Q2;!uR;ess2y8;a0Nd0Le0Jf0Ig0Fi0Cj1UHl0Bm09n08p06r05s03t02u01vYwTx0ySzR;a3QAol;!laQs33R;bTcoSeEhaEmRsh3S2;an,ei45P;mbJw8;erRo3EPu43Oy;gh0ry;eSiRry;e42Hns;l3POns,s,u3SM;fe3EKha3XZm3HXv3RB;herc44Ti0;bi46Bimi3MHle,tR;or,ruI;a44Qbon,e,on,s38Yva45Y;hRpBt1;ew,in;diIes,qu3;acheIeRirovs3K2;c3BWy,z;li1HNty;dSlRm2s2GR;an,es,l,on,s1y;er3K1;li,rR;eRi;!t0FX;f,osK;b,dRf3XHse;er,h3RB;ao,do,e5ilen3YAjelkRo;ov3M1;gBle,ry;ambu3ZIejuru;b0Wc0Vd0Segel422f0Rg0LhBi2SZj0Kk0Hll0Gn0Cp0Aqu3r06s03tZuUvSyd3LVzR;a3TMie,za428;arr3NZeRi1rat3YK;au,l,r3P4;dTgSlRry;le5t;ht1l0;et,lamR;ont01P;ha,iSsi3TTtR;e,re30C;ana438onR;a437s;mi42Hon,r,sR;e5iR;f,ve41C;b1HZcTdSeRva3ZI;au,th;achieNel435;isKy;eFiRo433p0;chis43Ger;aTdSgreavGiNny,tR;a9el;e3LDy;im0;!ay;aSoR;g3UGta;ji316mu40Yshi316;da,em;aTeRle,ra,y;nRotD;ga41H;jSnt,sR;e,ua;oa;fi2rech448;al3STeRkrynech3Z6on,re5;auRre5;!par1DC;h444ke;eRki;l42Fs;aEXc9Je78i56jol55lynars3IEo10r0Ysadoqu0H1uUyRü24G;c,e3R1ke,lSn0rRsk28Ft36J;!aQe3G0;er,o7;c0Rd0Qe0Ogner3YQh2i0Nji3X4kangar0V9l09mm3MDn05r01sVtTzRñ0TT;eRz6;raEt;chRtaF;!mo4;!cVe,g2ILiUsStaRulina3QA;ik9ng,rd;elRiNo2D7;m2y;al,ej0FB;ar3F4;aTchi1OHdoc0QDl6ph6rStR;ha,on,y;ay,eEi3FL;ka1RSt3N9;a2KKc6dTeSg0i404kHnRoz,ro,s6tea3CX;!in2ASo403;co,s;en,vi23U;ai4ca03d01e00hYi0ke3B4lToSron6vR;an3YCe3KOi3KO;in,t,u3;aTeSiRo9;g2nL;aC6n,r,tt;h6n6rRv6;d,ey,k1DH;aEer1XTolR;aQlaQ;!a33IyC;erRo1;!ic;h1DBir,s3HE;!r,se;ll0nR;i3ZKzen2IF;dBry;cShRkB;e15Tmo4;h3NAi2Z2;az,oR;ch390t390;a3Ub3Tc3Rd40Ee3Qff3RVg3Ph3Oi3Mk3Ll3Fm3Cn1Oo1Lq1Ir0Ks0Et0AuUwTxh3OOyRzaF;a7e2QEl0D4nRse;at,et,ih2;at3QAic3WWry;cAd3NYe05flAge3XGha404ill04l02nZrWsTtRvi0z3XS;oRrP;n,u;!avi,ne3JCsRt3;arzHeRi1NV;au,t3LGu;a3W8eSiRouze5s3;ck,er;je5tDy,z;i0s6tR;!aRbatt8fo7;in,k9;a3ZObe5in,tRun;on,z;a7e1UBier3RD;l3NJt;aTeSha7in,tR;!asl3Z5e3PSus;nbo34Sre;!rd,y;cVeUh0i3YPkal3IPl6sR;!arSeRi1DU;au,r,tDy;abBd;l1C9r;a41Fio,ov9;a0Ibe3SXc0Hd0Ge0Bg08i03jHXl1mAnYoXpaWrSse,tRv1L9;ense2W3loIon;a3VSiSoR;gh,ni,w;ce,e3INll,ng,sR;!ey,s1C2;in,w;!ne,ra,t;ay,eSiR;!ak,er;auRt,x;!tardR;if;ar3O4c,eLAg402ll3QBnTssR;eRon0R4se5;au,t,y;!eRv3MV;!au,z;antiNeRue;nRse;ste393tal0;au,i3XUlSnRst,t3LTy;cy,o,z;!aSlR;e,i,o;nd,t3TS;a3UYe5;el,om;!bi40McViUlTnSrd,sKuOzR;a3zi;d3J6ge,o,v3MH;!es;ll1s;e,he,y;t41IuR;etDiR;ll1n;d,n6rStRy,za;oo,z;c3FNe,he41Ds;a1Bb1Fc1Ad15e14fi3NPg10i0Zjo0Yk0Xm0Un0To0Sp0Qr0Ps0OtSvRzer3F2;iHois3;a0Gb0Ec0De05f04g02i00lZmWo407pUrRsi1v3M5z;eSoR;usKy;au,t,u3U1;as,eRl0L;lNBt3OXz3PQ;aRi3VKoren2QJ;rRye3LD;gu39UquA;e,oI;!g3VGl3YRmi3VGni,on,zR;am35T;oRra3;me3Y0;er257i3N9leu3XZort3P4;fXiVlUmiTnSrrosoli2X2sR;!a3U8;a3WWbe5u;gl3UF;!e1;lRro,th;!hA;err1BVorD;a2IHouF;le5rR;iaQousso3S4un;bVgSl1mb3R1na3MJrRub2;r3V5y;a3TWnRue;aRe,on;c,isJ;auOeFoC;!al3T6c3YNeiSY;en2PSou3PZ;el3K2lR;ais3O6;gh2tu3AH;an6i2KO;a0CeRi3UO;a,lRsn3T1;li2;!a,m2s;ly,ueD;e198gou3FWh2n,q3R4sKz;eRin,le,ne,ra3;aSnRon,r;a9e5;nt,u;rt,s2KEt3IDy;aUeSiRoVKy;ck,n3HGon,sk;a3ZHlRrP;et,l3S1;!in,t,y;a3UFha3FEi0RGz375;co,gh2h2k3P7rq3Y3stRt;!eR;!sK;bRe2KKy;le5ouR;rqu38E;!a3WFby,dov2e2APgViSlRo3U1s1t,w3MI;!eFZi3XUo2KG;nRra,usG;!a0O0eRic3S4;l3XCt;at,o3VF;ni,re0NQ;nRs36CtP;a7e5sonn3L1;an,r;an,g,l3Y6;ck3X5lBnLrm2u3LU;h1kR;eEle3G8;er340lo;kl6l3X1n;ne2TZ;a1Rc1Id1Ge1Dg16h15k13l0Qm0On0Do0Bquel3NCr05sYtRus,v3JZze3V3;chel25LeUko,rStR;le2E0on;essJoR;n,v3F6w;au,ouamR;igR;ou05R;cWerVhUiuTl3LTsStRu3UV;as2LCr3F1;ia3S8on,ut3QP;k,rs3SI;io,ou;a3T7e4icord3XM;h3Y7iosc3XL;aTeSij2PZj2PZmo3RXonR;!c1UZd37G;!auO;bSmbe5ndR;adac1VSe386;el3XFin;r,tR;!t3GR;a00chi0J2dn1eZgWiUja3S6kTnSoRs6ty,v3JC;!po3WBs,t3Y0;eMVon;e,l0;!a3S2ch2PNer,gRnN;o22Wut3PP;aSne2T5o13UuR;e3LDs,y;ce,nt,uO;au37Ih2r,tD;co3UOdi3W2rd;aReaOms;nd4ux;a01b00deZe1TSh320iYj31Ik18WlTmo4ne3F4oR;nUMrd,tR;!e,te;!aUeThol275iSmo4oRr2BBs;ir,n,tD;a7er,g2k8n33Fot,quA;n,t3L1;i4r3MY;!ar,ken39EsK;beu4n2CT;ou351ran3WBu351;i4nRrd;ge,i;aRl9ul9;e1SMlin3SC;ai28Nhail3VQ;a3EUeWnRo3XArAu19J;aTeRi0o2XZ;au36WrR;!aQet,on;cRrd,ut;!ca;l,n1on;cieli3Q5lSrRs8;t1FUzge2E7;e0JNke;dRki3SO;elmi2S7l3R3;hSkHlAm375oR;l3SMn3T4;aTeRie,na,on;au,lRn0;an3SBet,i2QWl,o3GSs;eTlSm,uR;d1J1v3I1x;ik,s3QUuk;i31Xls2MT;dai3T2snik026;a1Wc1Sd1Pe1Mg1Lh1Ji1Hj3VXko2SQl17m15n0Xph3IGr0Gs07tXuVv3HXwi3WZyTzR;eRie4ou,vi0SL;i,r3JX;!er,nR;er,i21B;l1I2ni0rRse;et,in,s,y;aYcalfJe3JFhWiVot,rTs3OWtSzR;!alabanle3TWl0;ay,he,le2SH;aRoz,u;ilBs;l31Jv265;eRl0ot,v8;!e,ny;ilBkabRl1ZIy3AL;we;an3SCgouigui2QAiIki8l3n2FBp27MsTtRu4zar3OM;as,o3GUrR;an,e5;!aUeSiRut;!erJn3E1;ly,rR;!vi0;gRn3H1ou3TC;er,ui0;a05c01di20Pe00iYjacXkWlUmoi34GoTp3E9rRy,z;etDiRy387;l,t3JD;!ukiouetamAIz;et,oR;i,t;el,le;quG;auOc,dPenCgd8nRv3UZz3NH;!e5uk;co1HBna,t3EH;!aTerSiRkh,o08Du4;er,l3ET;!e5on;di0n3FW;li380nRt,ud,y;!de,g0;aXdVeUg0R7iTnSoc3U4ra3SXtRut,zi2L4;er,ha,on;es1ie;c090e2IXng0;au,c3FHss,t3JLu;ay,e3O7h3H4oRresho3RP;la,za;ci0ge3COn2P2rd3MG;bRet3JH;ra7;aYchi1SRdr3K4eXfi,gGhaFiWlTn0oRt1v3GGz0;cUTnRt;g,i;!a26AiSmiCoR;!r,ws,y;er,lo,sh;er,n,ot,s,ta;!dy;dy,nRv8ys;c1s1;di3SRer,gs,lRn3RVst0;ke,le3FK;aRou3PVta;f3UNn;a,his0PDin,l3q1E8re;h2ks,rRse;sRt;!s3O6;a7eir3N4iSl0ovR;a2A2i3R5;eu,na;c3FShRr37Jte5;e,iR;n,pouR;eo34O;dTgh0h2l6rSsRut;a32Jor;!ce,es,s;!e,oR;rs,ws;.douCNa4Ub4Pc3Jd39e30f2Ug23h1Zi1Sk19l12m0Qn0Ip0Dqu07r04s02tYvUwR;ay,hiSiR;de,lliamLnn6;nnPrt0;eTiR;cRttP;ar,kP;i3CWy;aTeSiRomn6;ern2g3SU;ar,er,rn2;ggaFvi3A9;hRkimmiMween31B;a2RUer3RH;a2QRea2U8it1H8oR;bRrPy;bPeF;aUeTiRo31;lRnn;an,k3l1D1;e3ONst8;de,id,rR;rPt393;aTe31HhR;a3MXeB5ilR;ip342li342;rRt3MQ;laQt234;aWeUiSoRul3G0;ld,wn;cRd0;ho3G9oE;al,iRletc3S4;ce,l38B;b,ir,ll1G2mRug22Ey;a3PRee;aYeek3iWoTuR;llRrr3GN;e2GUin;nSrR;iCr327;igB;llRtc0RL;an,en,i1;h30HnSrtRst0;hy,in;!aRh3MJim2us;m1ra;aUeSi398oRu4;ed,ug2X;aRi396ll3CCmo4nn2od;n,ry;ch3inJrSuRw;c2GUghl23J;en,n1;a08e00iTn2IAoSr3B5utRy;ch8;ne,y;bb3eWllUm1ZNnRr2T0sso0DZv0;ley/mckeSnR;e2ERon;nl6;iRop;c2p;!rn2;aXe34UlVnUoTrcRty;hRk0;ar,er;gh,nJwn;!d3PXn12Ls6ty,v8;l3RZvR;ey,ie;chPge;i39Jle,niIy;lWnSsRv0;a32Her;aEd3EFeTn054tR;ee,i4oRy4;mn6sh;ly,rn6;larg6moyBw3L8;aSeRu3AU;e,n3PK;le,rR;dy,g;a0De0Ci04l02oYrVuR;ck3iSlR;flPph3;g2nRre;!ne2N4;aSeR;e0Mg3BG;dy,il,th,w33P;ld3KVnTog2uSve2ZDwR;an,en,n;gh,n;agBeg3S2ig3S2nig3S2;ash2oRy3ME;ne,ry;bb1lSnn1OIrr,vR;e2Z6n6;lSvrR;ay,ey;!eTiRve3OZ;cudRs,vr3ES;dy,y;s,v6;a3OVeG8o3NVtt3KH;ffig2lTnn,rrR;!iRy;gBty;e,li18M;aSerR;laQn;dd8gh2ll,rRul;lRq12F;anRiM;d,e;achYlTnSrRv24Rw1AA;n,vaB;r3D7v8;en6gu3LQhTligo3RBrRva3OH;eaRoy;vy;aRer2;lt1ny;er2YXr2;aYeWoRu3MI;nTugalSwR;aEeE;!d,l;a2Z8nRou39G;eEou39F;armo3QZrmRvi3QZ;id,ot3E4;niHvR;id;a0Jhal202l08oZrWuR;a3G1e,llSmb0n2ILr1G0sk2B1tchR;e1on;ey,oR;ck,uR;ch,gh;aSeaRim1o3NVystP;dy,ry,th;ck8e,nk,ry,w,y;lXmWnUol,rRuFw19Iy;by,d,is3B1kiEl6mR;aRiI;ck,rI;e,nRv3BG;a1DFeE;b,e5;lRm2;!am,ou38Tum;aYeViUoTuRy2PV;re,skR;ey,i;sk104ud,we3NG;chJntoIsh;aSd1ll39AmRod;a3OKe3JI;f,n;naSsk3ugRy;hl3;ch2;an,beJdd8ff01h00i36YlXmWnVrTskiEuRw;ghRl2X0sl3;an,r178;ey,go,rRt2MPvi1AJ;a3JDeEiIo1Z6y;!dle2KUn;br3AVl6;h3EHlR;!iRum;on,st0;an,e3MY;erRr6;ty,y;a3eTrRurn6;ear3BSiR;de,en;aRou381th;n,th;dZlXnWrVsUtee36NuSvR;en3NYoy;ch3lR;ey,if3C1;kiEs1RO;dHth39S;al2UAdrewLee3JXg3H0;eRli3OI;ar,er,n6;am,dam;!a7Ib7Hc6Bd63e62ff3J8g5Qh5Ki5Aj57k54l4Cm4Bn3Douensao2Z4p3CquAr1Ls16t0Ku07v06wn,xf2W1y02zR;eZia3KFoXraaNuUzR;aSeRoc3A3;o,rOX;!n3MIreK;rRz2;!eR;au,k,t37L;cRu0;hi,ie;l3MUrR;e2X7olB;diEeShRke3G5n1DRo2YMraQsh36Yv39W;ew,ue;nRrLt37E;ce,o37W;es,ilBor,r3FV;c02d01fZgVn18Hp3JIrSsRvi3JZ;e,si1;a3KNeSi37QoR;!is,ux;!lJr;a7eThSis,rRue;as,ot;am,m0;nAr,t;etDiR;ls,n;e4ou;ai4e3L1ie3L1la3CF;a0Bc09e08h04i02o01sZtSurRz34M;a,o,y;aWeVhTiRo2W5s1;cRi,s1;e,ks;eRon,ys;!rs,ws;!au,l,nc37Ews;r3DCs,wasUN;en,on,uR;mo3N7o;n,ot,s,u;f3CSgn1nRv3CS;i0s1;a,eTis1oSs,uRy;r3s1;n37At;rLs1ws;jc347r2K1;hRlo343;e3NWiouagkiou3CK;gCmekw2nakin2raz3F5s3IN;adacn3FYc03e2COi,k02lan3GBsWtRu3BRyn2ZI;a,erUiCon,rR;anSia3H9oRu3LL;gi1NJi1NKvi3MS;dr30CgH;j0VFs3C0;aVeSiRo37Bue;a,cot,eJDl1n08Xot;!lSrR;ma3I0on;!e5in;i1NIl,r3DEy0;ale3LZegoC;iRla3N6o3MK;ot3N3t365;!a1FbBc0Xd0Ve0Sg0Oi0Fk0Cl0Bm09n6o07que06r04sYtTuRveEw09Hx2ZMzi0;ca,lRm;an3I3lo;bBeUhe,iRol3H2ta3L6y2UR;al,cot215mbe22OnR;be5eRho,i,o,pel1WHs3BL;au,t,z;au,l31Sn,r,s;aVchin1TGd8eUhTiSm2oRt2CZ;lAn,t,uiC;co,le;!all1DK;au,ilBreau,t;c,n;!a2X0eLin,oR;ll3HDt3M1;s,t,z;b3ATis,nRrt,tDv1Y2ws3GQ;ey,taB;auDeRotD;au,n,t35D;e17NiMow;e2JAl6oSs,us1wR;eEiI;p3EUv330;aYcic35VeWgVll2WMnToRss3MS;nRt36Q;el,nel;ac35SeRg,i0koY5o3I0;au,l3KK;ny,o2US;n,rR;!oK;ge,no,uch5;aCeli32DoTuerR;a3MGiR;e,t3B3;leKnC;cSnRsJttJ;g0t2V7;!h3MD;eRi3JT;g2ll;a07e05hWiVl398oSuR;cci3D2r3IK;glSll396n3IJtDuR;i1M4x;ieK;ch1Q2er,l34Zn1SC;aYeTiSs2X6uR;k,s;!ld1o3IKt3L1;!r3sTtR;!eR;au,r4;!i,sR;auOe3CF;is,l,nd;lRno,re5t;a9l335;di0n1BFureB;gh,is,nRs,ud,y;dYTg0o,za3F6;lGp;a0Nc0Jd0Ge0Efe,g0Di08j07k06l6n02o01sWtTuSwarr8zR;!a3F3erLCi,o;by,ri;eSha,iRo2X5;ni,on;ll,nA;eUf2S8iSourR;!i2;!on,skR;oueo3JT;!au,ll;r,ve2Q8;aEerR8iRu34G;e,gh2nRon;gRo;!ha2SZ;ivHs;e5i;b3L7c2NCgaUs0N0tR;ouRta;aRko3JI;kiRZ;n,uO;an0VIin,o,ui2;e2PVg4rR;!a,s;a34KeRi3EElek3HKr2XJzi313;lRrs,v35U;!et,ko;eThSin3D4oRus18Q;!tH;a3E3on;au,bo,l39H;hi,ig4;aNe27Xmad3IT;!a0Eb0Cchel0Bdem2FHe09f36Fgu08h07i03ko,lXmWoUpaFrTtSzR;ac,oC;a9eK;a3ic;is,n6sKtt,uR;f,in;as,s0Y4;aVeTiSoR;!n,t,y,z3BW;er,ns1;au,n,rLtRy;!er4t;is,nd3rd;d33MgTnSsRz3J9;h,s1;!e,gPo32C;a,u349;erbeLi3EKot3G9;erA;au,dy,n2O8pRstro380t3J6y,za;ar39Z;osK;e3GAoR;euf,uf;bor3ESiTkSnc1GErRt24Dv1XDy;d,t4;et,os;re,s1;aRe,i0Q3l0o31Zsa;n3ELrRtwiniN;a2TEi3BY;ch0da0X5eSoR;c3C5re;au,r,ur;c3I2d3D0e36DgZllXnWoraVr,sStRzi1PX;ay,r3B9;!ch,onR;nRv34L;at,eu3CH;ma,no;d254el3HEfrAg3AOonCv34I;ar39Ee36PoRy;t,ux;a,rA;aUeTjouSl38NoRur3yA;nPFod;bi;au,r,u;f3IUir,ne,rR;!as;a00e0A8gYiXl1H5nUoTr3DZuRwo37I;ahw3ENeRi4y;!t,ur;n,on,sKya;aSeRi0o,y;!ss1;!c,n36Ard;ll,n,s;iRs;ni,o;in,s,uR;lt,rn;da,lk,rte3HB;dWeVgUiTo0AErRs8u0S2;aRy;c,n,s;c,g2;e3ITin;i3EUr2F9;e8oRry;c0UJn;!a0Tbe3FUc0Pd0Le0Ifa0Gg0Eh0Bi08k01lZmXnWoVpheUquarrPrRswe8tavi2YL;a27KeSoR;b2L1usK;!a08W;e,rs1;mb0n;ama3ELes,id0;aRi0FOuO9;h8st0;augl3eRin,o3EZ;an,nn2od;aWeViTnR;aDeR;ss,y;eRll39Zngn6;!w3GZ;ig2lm2n34Dy;na319ro39Uy;!nRsa2S3v0;n9tR;o2Y1y4;aSeRi3ALo307u3AV;goCt;beJdo,n,rd;ilRrav6;li0Z1vr350;dRrlaC;d8en;!aSlRro3FRv1VAw8y;a9m2;ch8rche2P5;oSuR;ff,nn;n306uR;gaE;aThSiRosh337ua36X;as,ni;esn6ia;ll369roC;ilBjo3HBlSme5rt,uR;d,l6;em,piC;e,ilBrian37E;lo3DQs;.tou1D4a95e3Vh3Pi2Qjung1JMlore3FUo0NuVyR;!de2YJg3DKmTnSonRs26LtB;!na9s;ch,d,e2CBg,h32Vo3HE;an,burn0;!b0Hc0Cd0Be0Ag09i,j2k08l07m05n01o00pi8r2HCsWtUvisot3GDxTzR;iRzo;nc2UM;!fo7;a3EKes,fy,ge3FLhRi,z;ar3FRi0;iSk,sR;!ac,e5i0on;er,gnanRne5;!i,t;!ma3EW;!a2OSdSeRg31Wn;au,ge3AB;!erRy;s,v31W;bRi2IXsd8;eFsd8;l,o3C8;a3D0em2in;a3F6on,u8;b2ZTsch3DF;fo7ri19N;aSMcTeSh2O6iRkenuIos,sansz2UN;enCw;!ro,y;he3EKiR;o3EGsa3A3;be338ke,ra3A2;b1Rc1Md1Le1Jfgr8g1Ih1Hi1Fj2Q7k1El30Dm1Cn15o14p11quAr0Ms0Jt0Hu04vZwVyTzR;!eRo2S4;au,lBns3AA;eRsH;l3FJr;d8eSlGrRth0;ey1MZy;nRrys1s;be3DRg0;eRgr8;j1TNlRr319tt;aSeRl;ss,tt;dy,nd;b02d1et2YOg00iWkEXpVren3B4sUtTvR;!aFe1XOiRo9;a3FTon;ho34Bre,s3C9;c3EEta2I2;e,rA;n,sR;eSmAseR;!i3AF;i3AElB;ee,hR;er31Zhe3CEl3r8;eR7i0out3;bin35Ahs,i0m2orCtRz;i1YCr30R;chia3AEhSi0li0sRts1QS;a2Z4on;aw,uk;a03d02eZgYiWmand32UquArTtRus2Z2;a,iR;e,t3BS;aSeRi1;!n34XtD;in,ng0;aRe5mi0on;t,uO;e,ue3F;!au,in,nRt;c2RLg0t2UMzR;!a3CPiN;!kipanid39T;nRzo;ge2WDt;e37TpRres2ZA;e,iR;e,n39K;!by,d,f,m9n,tm2;cKPdo,eWgRmo,sw325;a3AQbUchaTdaBeSie,mo4o,p4sho4t3ueRv3F6;ep34Mp34Msp34Mv301;!u322w322;mpLp;ott2H7;derg2rg2y;an,baRet3DZme,p4;!rd0PF;e,ie2R2;gn1ne5sRze5;e7Oy;andGren2QZ;hr2ie,oc38Kue;ffl0hm2v8wenR;!th3ES;er,rio2Y0;asUey,hAkR;e294hSqueEwR;eEo32U;aFe3EO;!t30M;b,inoR;is,wi3AO;!a0Ob0Kc0Ie0Gg0Fh3E1l0Cm0An03o17Fp01r00sYtUu,vRx6z39H;ernoSinR;e1TIg0OH;c3CQis;aliTch36HowStleRw3;cr3AZf2L3mo4r;sk348;a37Ren;eRlo9se,te0KE;!c380;etDl1CH;a3AQm2peR;!au,ns;arGcWdTen1T5gSks,n,sRt07S;e2Q2l6;!enfe31SlA;au,be3BGeSfo30Oho1VYle32Ro,sR;l6tr2G7;!ck0m2n,rm2;e027h,ouF;!a,be,m0oR;gGn,us3;es,lRo9;e,iRym2;o3DTs;htbo2DQn2A9oDF;bRge,m1SSna7rc2R3to,uv3ve3C4;eFr0RG;htRie3DEk0;en1FTy;erSoRre;ir1tD;aRdy,ge,s2tJ;le,to4;rd,sKudA;arr32CeTirond1Z2oSuilR;i0li0;m395pit3DIst350;rRu36M;auObi0e145miR;ne,te;a4Vb4Dc3Xd3Se3Rf3Gg30h2Vi2Pj2Ol2Jm20n1Qo1Op1Aqu1G3r14s0Ft04u02vUwTyR;!boRro1DZ;urC;!ando2VCic371;aWeUiTrRys;a7eRon,y;au2MJr;c2YWnJs,t4;auOilBly,nshul38TrRsq2UIy,zu;!d1OWri0s,t;c2X6do3CRig0CUll32LnRq3BHs47;gPi0;ng,pr0QQrR;at,o2BZs,y;aYeWhie1RSk363oTrStRu3D0w370;!e2ZKo4re;en,ot3V;cq,nd3CXuR;ne5rneRsKze;au,u1YV;au,l2WLmp2WLnd4sRtu;si0tu;in,ll1NUng,rR;dRt1B2;!if;a0Dc07di06e02he,ie01na00oZpXqu30LsUtSuRzc1TB;e2WZir;aRe,ringa35W;ge,ng;ar32EeSie2WWoR;niNr,u7;rt,y;a2Q8eR;r2PUs;t,u7;k,y;ge,ur;el0XJiSl0XJneR;ch3CCr2M6;gRze;le,ne2WL;de2WKll0;aUel0XEoR;mSp,rCt,uR;arn1N8ren30S;!bJ;biAd2TKno,rRt4;!be1REd4;ff4ge,i35Brd,uR;l3A1te2WCx;a1VMe38Nhe,iUn1GEoR;!s2POuRy0;ge,x,zR;es,ic;cRg0;he,o1AX;a02e01iZoWpVrSt2M2uR;il,t;eSiRoh1;e2W2n37L;!st4ux,vo38D;e,in8;ch35CitSre,uR;pAtrH;i0tev3;cRle2VWnJp368re,s1MVt4;i0q;au,lBrJsa34St2ZC;g28ZiRn,pe,rc,u2M5;l0WNn;dHnR;e,g1HYh25TtiC;arduz32ScZdYeXfWgVin,nUoTsStRw2YCz;!oc33Oz;eigCy;ble2YFir,r2MQuvH;!ev2W6on;!h2;a34Hes2XA;d18Sn,uf,v1FLy;a,en,r2ZQ;h,l32P;a04b03eZiXmWoSp,riKuRza378;re,s1N4;iSnRth30Ju0W8y8;dJe,i0ni0tre0;!gn2nR;e,g;el3o;eRre;n,rJux;d1LXil0W1l3nTqu3rSsRud1LXvH;le,u2YP;ci0di,e2PBiKle,re,y;ne,s,t1LUu;e39Bo;!ge,iUle,nTrSsRu4y;s1t0;b4ch2DHi0qu2Q2;!quA;re,t4;aTiSoR;c38Ung,tDup;be5ev4;boure2UTi2ESnRr36A;!da9;ambBeuCo2URu368;bHnUsTtR;hRo2IJ;!am;chn0hm2;enwRst0;eb0;ap297eu2WFm2LRnUouTtSuR;guA;o,u37Z;il2TXx;!e2R6i;a03e01g,na7oZrTuR;ay,eRilBy2YC;da7r2XXs1UJ;aUeTis,oR;s,uRve,w;lx,x;sl6w;in,ndRs;!e2U7;ff,ix,uRvy;be,es,f2WC;n14PrR;!e,ri0;!cy,g09HlSn1U8rRs34HuOy;de2U1e,s;a9et,l;aZeYiliat4lVoTrRurgy;ancRo9;!o9;ll2PSrt,uR;lgCDr37K;agSoR;ch,t;a9ua9;bv4r1KItt6v4;b4e,i328nRvo2TQ;co9;ch,r,s;aUdTeSfo7ge2JVi8o38ZrRu0S0ya7;an,o2X4;nt,rm2t;en,y;in,nt1KA;a03e0PCh00k2MZlYoSuR;iv4y0;cq,ll8mpDnte2ZTqVrUt,uR;!f2VMpe,rStR;e2IJre,y;!s,to9voi1KC;!danHre;!ue;a2WVeR;rc;aRelBn0;iCsR;se2T6;che38HmSnRuOva2SL;te2T4;p,us;a07e04i03l00oVrSuR;f2V8is,ys;assSeRis,oIun;t2WXu2G0;e2SYse2SY;e34Sis,n0UIrgCuR;ef,la362rStRvi0;hil2SBte;da9hisRlo36Yq36W;!v;ancSeu,oR;is,nd;!bou36N;de5g32Ph2re;!au2HOck,dFKg36QlSq36QrR;!ge,t;!li0;ilHYn0YOr1s,uda9;ch,d1h0I1m2nd34Ro,p1ZKrUsk,vR;eSiR;ns,tt;ns,r,y;d,mou358n34My;a7Zb78c6Rd6Lf5Yg5Gh5Ai55j52ke,l4Pm43n2Wp2Gqu1SFr1Qs1Ht11u0Mv03w00xZyYzR;aTca31IeRotDu4;n2R1rRtD;ius,us;rSzzR;a33Ze33Z;e,i342oviR;c2K1t341;dAe27Am2ng;!al32Zt1;!eSkamc31IlRt1;er,is,or;rs1tz;a03eYiToRr366t1;i257nR;en,tu4;ct15HelBgUlTm16FnRol2GH;!sR;c329k329;a,le;n2CJue2RV;au,c1WBlUnTrR;dRe,gCiDr2WXtu,y;ie4u4;d0e2UKtu4u;iCl;!c35OlTnSrRs,uD;enCie4ny,r2WS;di0o9;!ie4lRtrPy;eRie2OQ;!e,tDy;!be2O9gh04n03rVteUvSzR;e2O8i1RNon;erRr2U4;gn2VR;nschlag0r;aWeSiRs8;au2GDds8n,to;l34TnRys;ceSdRs,t35W;au,e5;au,lB;in,nR;ce5;ay,dri2XDel,i1RBo9;er,l3r2JE;!a05e02h01i00n0ouYrUtSuR;lip25Qsc2Z3;a1UXerR;gra21Lra31U;aTeRy;ilBmoRsK;l2W2u2RJ;ilBverKy;c34VrR;!elBr1S2;er,m0;a2E7o2NP;ndr2M0rR;ga,rR;e2QQie4;c34OilB;aXble9err2RRhWka,l6n2BCor311sStR;auDRima31P;aTelSiRon31F;aBseSOt0;in,le;liC;a257o257;blon2VLg34JlBnR;g34Ite;a0Dc0Ad09e07g06i03k02laber1QLm01oVrTsRt2K3ue2B0;en,onR;!ne2QD;ab2VIe5ivRue;ee,ie4;cSe,n313seJuR;c348q34B;heSqueR;!bruC;!lR;ie4le;a29Le;e,inL;chRe35Eg2ou2RXq344vier142;!ard2V5eR;!l2V4;e2DUy;au2EYlBnR;ce,te;el,ie,n0uy;!heR;!r,vR;eq33V;bSde,i4mRn319vPw2SFy;eJie,y;e2JXie;a01eYiXlVoUp3rSuR;ce,z;aRe,i2YUomena30G;de,irPtD;i2I2li314rt2QOst4Yt32F;aRu30W;ce,iCnD;a2YMcer2CXer4n;arBlBnSrRy4;c33Fle,r2UK;na,s2UL;iUlTnSrRtrP;ch2YQe;!e,s2UI;i30Ume,us;l0Q5re;a0Vc0Qd0Ge0Ff0Eg01i00kZnWoTslo2Z9tR;agCeRhi0in;igCr2GT;iSnv2PRuRv2PR;e2EGgareCl2OL;sel2UAx;an,eSi,oR;!m,n;gra30Kv1EG;ey,o300tr2U6;au,e2MKg2;!a7d02e00fo7hXiWlTst1t1uRwa2CS;ay,ed7FiR;er,lBraQ;aSey,oisR;!t0ZK;de,is;llJn,s;aRendriGof;mRn;!m0;!li0n,r1vR;e2CHin;au,e5on;ilBo7;uv2P5v2P5;!aZeXgr8iVrRseadHwehr;ay,eTiSoRy;c32Gn;au2DGg2UNpA;au,m2v2P0;eRng3s;r,u;au,gh0EKlBrRs,y;m2s;is,u;a331eUiSl2W0oRt2Y9up;g25Cp,ur2R1;aRot;!u1FN;le2O5y;gh2s,uR;lt,ze;!a08b04e02i00mZoTpRroIus11Cy;!e,hi0iet2PQm2ronRsa,y;!n2T6;nTra1At31YuR;c31XrR;e339ie;dSi0tR;agC;!e,in;e31Ti,y;aunIelBraRtP;n2YKuO;nt314rRs2WX;!re,t1;!eTi0O7our1DUrRut9;eRin2UBop2VD;mo2WKtD;r1WPye;chi1AOd11Lgd1OEiUOli2Z3nSrRs2PTx,y;c31IgueriDiCq31Lre,tiC;dRna,q31Kte;a9e;a01enc2BYiYlVoTuR;e,mR;a11Lie4;nRre,u2BV;de,e,ge2K2;emSiRy;er,ga2W8;andJn32Z;bSmRn;a11Ee;erD;nRu;c2BMde,ne;am2LReunes03im11JoSuR;dPs;ie,ue;b8gnUl6nSr,sd1tRze5;!im8reL;eRgJ;!sKz;el,ie;aUey,iTl322oRue,y;g30WuR;ciCd;a,t1;iRr;e,se;a05d8e03i01ne5oXrTueR;!rRux;!ce,ip2RRre;aSeRoi10ue;ca,na2XE;nRve;de2MJge;!rStR;erPh2ZBte;ce,e,geR;!nd2RJ;moRnsc2VT;d2RHn2RH;rRsK;be2ZDe;ce,nSr2X3ss6uR;chet2RDgA;ie4n2RC;a0Ae08fo07i06l04oWrR;aTenRica3;aRie4;i1QNye;mbENncR;e,hiK;e,ll6nVrTsKuRy;nMVrRt;c2ZYee,n14H;a3ce,e2YAge,me,tR;e,uC;dStaR;iCnt;!erP;amRe2LTotD;e,me;a,l2L0tD;l6rd;rRsKt2QTu2MAx;r2QSte;ge,ilBntaisPrgSsan292tDuRve,ye;a2WFt;e,ue;aWUd,eUn0ouce2LKrSuR;e,ke,r0ZT;iRy;e2HIlB;baRrouDt;uc2ZE;a05e03h00isseNHkZlYoTroR;iRssJu2D6;s,x;ix,mUrCsDte,uR;dr2NXetDliCnt,rRtu4v2QG;!be,cRsR;e,ie4;b2KGm0Z4;etDoc2Z5;ey,m2o,ya7;!aSesR;e,na0ZG;i0QJmb4n2WLp1M9riDu2WE;lBrRsr2NO;ra,t0Z0;ge,illRlami309mp,rDsKve;a2VRe;a0Db0Ce09i08oYrSuRye;mba7n,tD;aVeTiSoR;sKusK;an2WCe,s;!cR;he,q2YT;ke,nc2YPsh;issoZmbardJnYrXssWuR;caCll2PSn2MFrRsed2PS;l2PRsR;aSel2PQoR;l2PPn2PP;d2POud2PO;ee,ie4oT;dJe,gCie,y;ne,te,v2L2;nn2PK;e2H5l17Yne;au26Jg2YGlSr2VVsKtR;olB;!lJ;e,iJy;dPie,o,rTst2KVttSuR;!ve;a1TXe;be,ge,re;kk6DnR;st2VU;a5Ue4Hh4Di33je31l2Smi1AVn2Go10r0EuUwSyR;er,n0ri2ZAte;aRiat15Yo18O;kerna2OCn;b07c05di2FJecDTga2XHh04janp03k02l00mYnXpWrVsStsRy25Fznets2XR;che2VOh2HM;hRlei2S2n2NJsnHz0W;m2nR;a,er;evi2P3ko2HLth,us;ic,p0AC;cyDkHyk;aRirov2H2;cz2W1r;ba2Z0czyc2T5es2VPic2T5ka,lRy;!m2s1;ac,ovi2S2;aa;lm2n;hRzy1G2;arc2SZer;at,eSiR;k,ns2RM;cz24Wl;a07e02iYoXuTyRzyzS;g0ko1UTs,w28PzR;ano2H4;g0mmIGpTsRtcht8;!e,hRke;en,i1FS;a,ka;ets2V2ft,ok,ss,tz;ck,eTl6m,nbaEstSvanR;ek,ic;e1G5ia1G5l,of;b0n10Xtz2NZ;bs,geT2iTmSnz,pRss,u2AXy;c2SGs;er,ppt;n0sRtz;c2WZz;em0ft,mUpo0V9tz02WuSvi2ASwR;c0UZer,i19P;sRtl8;e,kopf;er,ps;at15b12c0Ze0Uh0Tji1URk0Ol0Jm0Hn0Eon,pec2CEr09s06t04u02vZwVyi5AzR;aSdra2GJic2S8mi1FAubR;!ek;cRk;h2EJz245;aSiR;l,tz;lRt2UG;!cz1H8sk1UC;aRiI;cLk,lRts;!cs1ik;a2TUr2O2tRyoumdAZ;achiw0Rrouvide2ST;al28Dch1sR;ilin2MZos;ar,ciel25Gi1EVkSs208tR;as,y0IX;a,i,o;bel2SNdUeEia1D1mTnSol2E4pRyt27L;e2VRi;ac2ROer;a2SAen2UW;i2U0yb2;as,do,e,g,iRk3niMope2BQra0KAsoulas,z259;ditsRg;iot9;ay,bRe2UWi,mH;a,ul;aUeTl0oR;dRgy,sa;enc0U0ziejs2RE;m2n2SB;di2TQr,sz;koUl2oR;rSslRt2U5;id9;i2u1XE;n8r9;l2BFn8r;hUniTppSrRs2R5voA;n0s8t;e1KJli2UU;c,g,ng;l0ne;hRiel2RRk,ur230;!enR;bu2VSd2RI;aRe2F3r2R7s,yle1DZ;r,yR;as2HY;!hi;a00eYiXoSuR;ds1MSts06J;blUepfHf064pTtSwlR;e1QPs1t1;!h,t;fHh,p;oc;espeIghtLpfeEth,vbbs;bHeRpt,tz0ut;laQske242;pp,twsh8uR;f,ss;aYeWiUoSuRyC;ka,s;bRni2U6os;erdanz,uc2VV;ff2O7j2P2m22DnRsh;e,g2AL;i1QAj2Q0menRnn1s2S3z0;cs28Vt;a0H2m1UZpp2AItt,uwe2J4;llRns2T9;er8;a0Zche0Yd0We0Rfoo2GFg2SIjaIl0Km0Hn05o04rUsTtRw2K9;oul0W2tR;el,s,y;ch23Rhi2R1l2CHsHtl0;all26NbZcWeVkTl6n2ouaSsRw16M;c2JNte2WC;c,k;bWeRh2HOlaQm2oUwo2KF;!by,y;ef;hSoR;ri2;!gessn0mS6n0;ri2R7;lApiN;c00dZeappBgXke2UClVnTsRv2GXy1;bu2T4eRh23Qt1;l1NMy;ai7eRi2T2on;e,l,s1y;ey,oR;ch,u2E8;e2SYsRt0;!b034laQ;er,ra16R;ar09XhR;!i2NA;bSen0me2VNpRu2RP;er,t1;aEer,le;bVe,gThaFkeSlRm0p039r18X;am,er,ingCQor2;a2SOn6;anRo4;an,n1on;rRu2SU;e2SJi2QK;di2SWff0j250lUpu2RFrSsRwiA;!er,ke,li2RI;ceRn2st2RUz11K;au,re5;baIj2y;dRheaF;!er,ie;napanaid1ra;b2UPpeN;aTim,oRu0DC;ngsav2JRuR;ry,z2GJ;n,y2JPzo1X8;a0WbHck,e0Tffel0gBhoJi0Skijicak2GVl0Im0Gn0Bo0Ap09rXsWtTuSw,yl2EBzR;ar,ha2MH;ck,n0VWrenchGs2R4;chStR;!yB;en,um;ik,sl0;by,d0XBec2N6grec01huIXi00kYlXmel0H5nWoVrUsStRw3;laQs1;h2CRla03WtRul9;e2T3iM;!ig2y;chi2U8n;!an,iI;am,i10V;a19FhR;of;g0ng0;olA;haFpH;gh,haCugh;andFQdUe1UDis1nSoe,se,tRw13K;eEy;!a0H6eRis1;l42s1tt,y;l0ol0;b2UCm0XpR;!er,st1t2IK;em8gaZlTnSsR;ch,o;ar2AF;!aVeTiSn0oR;gg,m;h0n28P;k,rRtt;!ma2OGs255;nd,r;ll3;ff0gh2ke2TTl,rs28O;!ch,le2B0nRrn2v8;aRey,s;gh,h2;bBc1QKfe,gWlVnUrStRys;iMs;nRy;!ey,s,y;!e2IGy;ey,ty;an,h2;basin14c12d11e10gigconi23Jh0Zi0XjjouNk2LRl0Um0Rn0Mo0Lp0Hr06s03t00uWvanaVwTySzR;l2RQu02R;a2DMb2EKr2LPs;aRinien2T7;lil20Zmo2SKse;gh,h;fShRki,r;an8;fRh1Z5m2;ma2NTo21L;ch0o,sSt2zenR;be2RYs24G;hi297;a22XeRs0PVtn0z;k,nR;en22V;aXcWd2NWes,g2KTin2NWkwas2MZliVmmUn278out2NWpTrSu2PJvR;on8;an,ol;i19Yo22O;er0;ko1OT;h,ze2B4;dTsSzR;iv2;arki1YAi294tergi2SI;an9;iRl1p,r8us2SJ;n,ouapR;noR;ko2R8;pui2MKraD;aUdTg2NGia,kHnSs2MJt2C2yaR;voM;a2OJegiess0;aEeErasho228;pe,sh,wa2RO;!alanath2inRma2N1ra2R6;aRs2MD;wa28G;aRl2SLm,so,tschmi2R3un2N9y0DG;n,schRy5C;niI;gBnRr2QTs0;e,o2Q9;a2Q8l2PCmahkotayo,n,ooK;gi,sl3;eviHjul22Mro3UweE;halu087or,zmarR;ek,s2KR;sk2MY;a2Fe1IhaMi1Go0AuR;a08b07c06d05e04h2i02m01nZrWsStRz2;e5r2MV;sStR;as1e2L2us;au2NSeRi2PXsi0BN;l3re5;ad,czySiIko2A4nov15EtschyRy;ch2M2sch2M2;k,ns2LR;e5gRk0;!bl2QEcuF;i1AGte;lRn;i8lA;e0OGl;ic0IGon,s1;he283kG;ai1AAi1AAy;i4r2LY;a0Sb0Qc0Pd0Nh0Ii0Gjo,l0Dm0Cn09os8pPr08s06uUv3we2EByR;aSeRnt;l2AIux;l,u2DT;anne2KIbZd2FHeYffrAi1LBng,rUsseTtr2M9vRwH;eRin;l,n2NEt;au1XZl2LUmAt;dSj1neR;au2KXl,t;aReu2KB;in,na9;nne2OIt29U;aSerR;ge,t;er,rC;ephs8if1X0l3sR;aFe2K5;d24Ege2OKi2on;caSdr1HSes,g8p2PHqRva2QU;ue2NT;i4s;p2PEt2PE;a2FKe1ASiSlRy;ey,iA;at,bo9c243ff,n,ve18Y;gnAnR;auOt,v2BV;aTnRsn1;dr2NIer,r2CQsRt1;!en,on,ton;he0nR;ne0XDs2JM;oRry;in,n,u3;he061te5;aFeFiRs1;d1n;nRss2QH;es,is2K5nR;eRis2K4;s,tD;gge2OVm2KQnRrea2L8;che26Tx;a09dd2NMeroburkh2ff07gu,hannQ9lc26Pm05nYoffroPps1rXsUtTuneh1UFweSzR;e28Iio0D5;ll,r,tt;roKte;be2MEm0sR;e09VoRup;me,p;dPen,olm1s6;c021eWi264kUnRoEZ;eSiR;n0X1sL;!ry,ss;en,iR;ns2EE;au,ry,sK;meRus;!ly;or055rRs;iGoy;fco2ELnRrtoQuroQ;b00chaL4dZe5lYmXneVot,riUtTvR;aiCeR;au2C2nCzi2N6;on,rUB;an,e;au,tR;!ot;arP;egr2HSou9;avel2GRelB;aSeRoe2LU;gl6;ptisDrd;bs,c0Rd0Qe0Nffr2CJg2BEh0Li0Kk0Il0Gm0En07ou8qu05rYsUuTvRwo14My2E7zz2OS;eRillo213onH;l2JUry;n1VHr1v3;mTsStrR;ems2J6;el3i2WogC;an20Xer;aWbe5ch2LYdVel,ga2A9is1jo29Ole2PBnTouSrRv1PNy;et,in,y;ssH;ac,eR;ck,t;at,inL;ch,m2H3;eRi250;n2JGt;a7d25EgWiVki14BnUoTsSvR;e0PVr0RS;en,on,sen;si,t;e18Mi0ot2OL;er,ts2L3;!el,l;aRba7et,in,me25Yo9;is,re;aRbeFetDin,l2E1ot,te5;d1ux;a2C9uR;bo;c00Ida2J4llA;ar,nR;!ke;gSniR;cXQs2KR;er,g3;cz17I;cott6in2J7kZm24RoWqRz24O;ma3uR;aTeSiR;er,n,th;!l3m3re5t;rt,t;bSmi2LOtR;el,i;s7Qy;liCmi2HQoRubo26C;vi2KE;a1Cbarr1Bc1Aff0XEg17h16i2IXk15l12m0Wn0Ko0Jpper0Ir0Fs04tZvTwaSzR;a1O4z2GG;nic2GIsk2KS;aUeTic,oR;n,rR;c0KGy;ns,rs7R;l22KnoRts1XN;u,v;aTel,hSo,zR;oei2AKwei4;en,i0;gRs;isK;a00bZcaul1eWhUiToSsa00CtR;asKival1WNre;i4la,m;ch,do2KAot;am,ikRmaH;awa;li,nSrR;!ho2IZt;haFriM;e25Ii2MP;acs1be5m1SG;al2IOczl,e0WPoRurz1ZJviC;nRqu0E;m2si2IM;ciHsiH;annoNdi2JAn0NIr2H4;a7c01dZf0KOgUicaEk1ENm2nTo2LStR;erRreva2IR;li2GS;es,i1I7;!al29PeUh28QlTo2JHrR;am,oR;s26Luv285;es,is;beFls,rs1;aRi2GQ;hl;h,l2onnuL;!amedVbTho2IEmSpRse9;a2KUeril2KY;e,uc264;eRle5od8uelt8;auOr;ji2;er,isha2IIliRo2MV;ck,nR;oiK;e2HIweH1;l8m,uell2MB;b2MSe,guSlesi2HFnaR;ce,sz1SH;ld8;i2H0kem1RK;a,o2KG;cUffol2KFk2GBlCWmoni2HJnSquRsenzani28N;ez,in2M7;nRtk2J6;ici1DVoCuz2DY;oRur2LI;mRno,v1XH;uc25K;a73e4Ci3Floz2n3Do1Cr1Asu,uYyR;aVde,hUlaTmGnRo1WGppoliDr0M2t26EveF;dm2eR;maQs;ndL;arD;ciRrd2AE;nt2KJ;!a11b0Xc0Ud0Se29Cf0Qg0Khn,je2LVl0Hm0Dn07ot,p06qu16JrYsWtSv17QyRza7;be2KIet,nh,sK;chiSni1TKs1tR;!e06WiMon;nRs1;gs,s2AC;!er5k23Nla2HUsRt2AB;ey,in,on;aQ4d24UeXfo7iWk1OPlUon,pe5reEst,tRyn;auOeSh,iRuR;biK;au,bi2GC;bRey;eFut;et,k;au,nLt,z;e,peJ;auOgerbuUsTtR;h,iR;ng1IA;ak0;eRhl0;hl0;!bSeLm0phrR;eyLiG;eRl6y;r28MutH;b0WJeSin,lRma2FU;!i2IX;ts1ZA;entobl0gVhUr1uR;eRin;!n3tR;!lato25Mte;aFe1L1s1;!i2JK;auOfR;!m2o7;ak,de,eRgi2JHlAon;c1QVn2H5;heSkR;!i2JEle;!r,tD;bTeRin249ka,l0ouO;!c,l,ny,rR;!de5te5;a7le;ng,rd,uO;ab2JSi1X0yR;cu2I5nch1S9;!a1Qb1Pc1Ld1Gels2J2f1Eg1Ah19kayVDl0Xm0Sn0Po0Mp0Lr0Ds0At09uYvWwSyR;!le,os,t;ar2HVeTiSlRs1PR;aQe2KP;e0R9s1;!llLs;asKeRingt02U;nd8;a00bZck,dYeXgh1H7iatan1k,lVnseEpeFrUsRy;eSm2sRt1;a7e2HOin;!r1WGt;an,ca2FMi2EP;ah2d,eRfoFiEMne;!t,y;!lbe0Z7;a075e;aFr1;rt,tD;a1H6esKotDsy,t1PA;c263kSm0s28JtR;e0Q5in,l0;in0R9o;aXb2EUdWi1mi107nTsStRvat249;!emHh,on,y;bu2HIem2f1QUl6;!bSdi2HGe215iRs6uM;d2FVng;l1NCro12D;ou24Xziej1TM;n,seI;hiMki2IAp1XYs1wo285;d,fRgen2ICk1XXlih2p0se,t,v0;fsRsRt;te2CI;an,e,g,oRsi2HC;rRw;e,os2DJ;beFeSi0meRsy;l,ry;l6n121rSsRt;!si2ET;e,iIst1;an,b8co1INd01e00fo7lUmTne1EIos0YTroyd,tRweE;!er,for2IPoRz0;n,rf;!be2GXes;and2BHeViRow26H;er,nRs1ZO;gSsR;!he2JH;er,she2JGw2GH;n021r22Ky;!nbreI;er,sw2GEw26A;a2AVn2;an,b3ds1erh2AUgShaFle1V7on,s1ueR;!nA;aRe;rtt,tt;a1OLbae23HfRma2DJste2EA;!ay,m1UN;d0gTiRne2J2s1;au,eR;rnCsC;eRi2HCm2s1;!n,s;hTkR;eRiM;ss1;!ar27Yu;aFs1;g,ng,re2BQ;atRic1FH;uk,y10D;a0Mbb1DRc0Jda0FCe0Ig0Fl04m03nZonde19MpXrVsUtRv1;chRes,l0m2ti2G7;!coIe2H0inRockL;gs,s1;h2A9s;ag2GZbo22XiaFschR;beI;ol,pRtmEM;!olyD;ch,dTe2G5g2GVkSsRt1z;daBe,pe2H1;eEl6s;enlaMle,s;b28WmH;a00bZch6deXeWfVlSm0sh6tR;!on,z;!eSiRm2s,ya7;am,er,k0;b0MLg2CW;ik0;au,rA;b0MIrR;b0MHl6;er0NK;ire257rA;gShR;am,st2EIt1W0;e2GBi2GB;beFn,sKt0;hSkR;ey,m2ok,s;e,ioa1QT;nv0M9rd3;!a2Bb28c26d25emske1CMf23g22hr,i1Tl1Mm1Ln10on,p0Zr0As05t02uYvXwUyR;dSe2FGm,nemanRst27A;!d,n;er,ra;!etSiRs25Z;s1tR;s1t;a3e;er,go,rtTsR;er,sR;i,n0;a2H6ea2H6;e2FDhSi0riItRu;!iM;er1VZr1VZ;lUsR;!eR;!lR;!tiC;er,op;a0BPb0Dcz0Cdt,e27Sge0Ah2FRi09li08m04n02o00pH1rXsWtTvSy,zR;og;i0VOy;!a2FMeRle,og2FHt,z;lRr;!e0l0;be2EHe25Shm2;!a1P8eSiRon;d2CUng1DNss1;ns,r0XVs;de5n,uR;a2EVx;!anR;d2B4z;aSeRi28L;ri2ECs;ko1YVnR;ge,n;hy,n;!g279ng;nroRr;ed0;eg;aFeRin,ruIst;c078t;p0R8w2DN;a0Ab09ch6d03e02ga00nVou1G0rSsRusA;!chPMe01Wle1XWon,pet0;a7iR;cRot,p3qu2AO;h1ks1;a2EUeUiR;g2nR;!gsR;!en;!beFr,ssQ3tD;!rR;d,tn0;in,lBr,s1N5y;eTl6m2rR;iRy;cksTks;!l,rR;kerk0sR;!en,on;e0X8r6;i4uO;a7e1ingw22Xmin0MSoQp1WS;!bWf0VZgVik,lRmQRp3s6;eSiR;c2AJs;n0HYrRu,y;!ey,sJ;!e0X0;e0L0ig;dXg2BTlWmVnSsRtzl0;!l0se;!eSig,m2ri2BTsJtz,zR;!e,i2D5;!ig4m1R5n;e20Pri2BQ;!in0MEle;eRriI;l0HMm2r;a,e04gaFlaQo;ferRn0;!nYA;ge,ou3;ht,kRquA;!e1X9l0;bBd8erRn0re2EZ;ly,tR;!/lecomD;d8fP1gaVlP1pUrTsl6tR;cRon;at,oat;d,nJs1ty;e,hy;nt1;!a3Cb3Bc36d31e2Zf2Yg2Th2Si2Pj2Nk2Ml28m1Vn1Gq1Fr0Ls0Et0Au05v03wZx20SyUzR;a7eRza7;lRn,ur;t1wo236;!as1ZSdoUeTf1LOh2BLl21Xm2nGsSth,wR;a7o234;!te2BE;!b3r,t,ur;ck,n;ay,eTkSriRs1JTth1VG;l1UXsh0X4;e23GinL;!l,s,y;eRin1TAr3;r01Pt;bo9ck,dec1RQg0NAlUntsm2ry,sStRv0;bo9c1RPeb0CWre2EA;!au0hn0m2sR;e0KHi253;ta3;a0X1chThSi1XGra25OtRz;!o1Q1;aw21F;!e1OZ;an2CHcoAen,himo2DEkWlVpecUseTtRweE;iRy;e,n0L6;l,tt;k,t;am,et;eEi2CK;a0Ib0Dd07e05fo7gr03i02k01l00mZnXpe,qua273rUtSwRz0GA;ar2CPo22D;!ig0MUl0HRm1POnRon,weE;agHe1VV;a11ZeS1iSoRr2AZ;d,ld,n,p,w0;g2l2E2m2n1SM;a9e1VRi1TVoR;i2DCld;an,er,on,s;a1HQle3;ey,inLon8;ng,o,ss1;aRo26O;d0ve;!l,nRsK;ouch1zl1L6;eVgrUiToSt,u1L8wRye;iIo21W;in,u3y;m2ng;avGow;e,l,r;eTiRo27Yre29P;cTnsR;ki,on;cRl3r20M;!k;nRscz1TK;!go24N;!ue2BE;ab26Fc03d01e00gZiYko1VElXnUouAraTsStR;ra9;c1FGfo7ma27Oq28Qse26Jz;h2t1ZC;aSem2iRon;g2s,v2;g2mLn;ey,on,y;g2k;a7s3;!l,t1y;!eysi286fRly,rah1YHs,ve2BM;ie1L6o7;e,hRk,oIzar1IQ;ay,ir;!a02bl01eXiWlVmSon,pRro1OXst28Y;!l260s1t1;!an,erSoR;ck,nd,ud;!sl6;et1ZXin;a2CFll;lRr,u29V;!inR;!mR;asK;et1in;n1O5rd;a03d01e,f00glei1SFiZkhor222lTo2B0p3sRt1ve0TSy;aEteR;ad,d;!aVcz1SMeUiTmaSoRs;r2w;n,yr;d1ZDer,g2s;!r2tt,y;is,s,waGP;k26Zn;o7pen26S;e,iR;m2n;bu28Is,y;!ey,o29Z;a1H0jaR;ji,r;ch,gh,l0mSnRr1VC;auOes,s;eu28Po1WD;ce,n;aUeTgRle,n6u3;an,eRluQ;n,rYYtt;!lto1J5ma26An;n,r1XY;fn0si;ck,gRr0CQ;eBhl;aTdSe1STiwinar1V4j9lR;er,oI;!ad,ig2oI;d,togR;lu;a29FhTkRleph24Iqua7;eRi29XlG;r,t1YP;eRie;!y,z;erl3laN;ck,g,s;aASe9Agg,h97i7JjiNl6Vm6Unoc6To4Gr1QschwiMuUwTyR;e,m0orRre,sHzm2;fi;illi1WSyn;a1Gbb,d1Fe0Yf68g0Vh1VNi02lZmmes1nYo,rWstafs1tUyR;a7eSn0VJoR;mar27En,tD;a,t1TP;ch0hRierr25Fo293ter1W5;!rP;eg1ZSm2nRry;ag0K1ey;de0SBn1P3t,v1W0;iks8l8ma3oSyR;as,ch;viI;b0Ich0Gd0Dg0Bh0AlYmoQnVrUsep24tRzz1UY;aRe,or,t1;rRuO;!d,e;a1S3gu9y;aSd1e1J1gu8oR;is,t;me242n1ZVrd,u204;a282b21Ad1H4ha01iNlTmRne21A;aRin;in,n,t;au200eTin,mAoR;che1IUnRry,t1YSu;!ne5;boTmSrRt,v3;e213iJm1QSy;etDin,ot;e26PurR;de5g;m,s;an,na7o;e4nRon,ue;ard1RZon;i,oSrR;oz;!nJ;a19GeRon;l3t1ME;auOert1MDl3or1ZA;liRu1X5y;ch,eR;lmin7Rt1U4;b8co,d06g20Hl05n03rTsSt9RvRye,z;in,re19J;se28Dti8;aZbo9et,ganivAinXmWnUouTrRt3y;a,eRier20Ty;ra,tD;sKt;eRi0o1TI;s6t;etDon;!/st-hRauO;il1VI;rd,u0JR;a7eRno1LQy;e,tD;fi,te;esKon;er,munW2;bAgVis,lUrRy;dRi230;aRin,o;!do,no;diM;en1TG;a1Pe0Yi0GoYuSyRze278;l1VTma277s0OL;a7bVc1U7et,ffUg0nSsRt91z0BK;l3s;dReFwa1HH;s1Ey;at,y;b,er;at,bb,chm298g07i06l05m0BEndin0YIsXtWuTveLzR;elRie28U;iCle;aSgRillo28Slx,s8vH;et,na7;lArd;e,he,on,to;!i26Ije2lWm2pe1SSsTvRz;alAeR;nt4;aFeRin1TMm2o;jRt;am1RV;eRou9;au,e;e5i0le5;gnAni0s16W;an,g;auObou04Tch8e07ff04g01ll00mXnVpUsSttn0vR;e1Z7o9;a7daBe1VSh1U3on,sRwo1GT;!el3im,om;pa;c1LVdRfe1GQh1U0k,na24Don,seE;al,l0r1WQ;aSb1Z1es,m,ouOsR;daB;l25Grd,u1YA;!i,o1VK;as,gs,l223nSorRs1;es12PiH3uk;auOon;et,iSoR;n,re;ng,thL;co,n0r0ES;a0Gc0Fd1e09f07g06i05l22Jm03nYsUvTw,ySzeR;la,t;k8s1I0;a283e;h1TJlTsR;!eR;!au,t;au,on;a9Ici,eUiSn1oR;n,t,uill5;erRlB;!ga1ZO;lBt1QC;a1P2illR;i1on;g,ss,ve;is,or;!fR;!a7e,o7;l6nRr,s1CJ;be251daBe,hiEiUlSou1Q1sRtr1X5wo1VU;hielMR;aRe5L;nd,w;a,ng;co,h,o;l6ny,rs1vG;bat3c0EdHf0Di0Bj1m09n01sYtXu,vTw,y14CzR;iaRul9;d21Bno;eSiRo9;er,n0O7s1;lRn,s1VLtt,z;!iCy;i21Lr00Gt1;sRt9;eRi0IDo1IR;l,t11G;be24Jch0dTet,fo7gSi265o,tRvil0RT;el,fo7h1SKrH;e24Rui0UI;a9bo9chUe1REf1DSguillQLin,je2mSo,pRry;i0RDre;aiRon1WU;s1t4;ampL;moRs;!nt;ll1nR;d1BSe;!f1UY;ey,iR;!aR;!mole1SRn;a22b20c1Zd1Oe1Lf1Kg1Jh1Ii1Hl1Bm1An13o0Wpaul0Vr0Ms0It0EuVvUwTyR;au,cool1J9eR;au,r,t04S;anLe0TTiMliM;a,er,oN;as3b08d06e05g03i02j1V7l00na1ZUp1ZGrUsTtSve25Hwe24WzR;il,y;in,re5;sV9y;!auOboun23Rce,dTe1TLgSiRl6mel1n1TFon,q1NTre;ad0HIou;es,on,uG;!eSiRon;e,nC;!au,l,s;aRd,et,igu0sch13E;h,r1W3;lqu0n;eRh,l20Vo25Vy;!on,r,s,t;da7ttJ;ge,ie,on,rRy;e5on;auOil0HR;h0HTrTshaEtR;freds8i0schaRwer234;lk;e5ie,o;h0in,liTn6sRte5;!a7eRi5;!l3ns,t;aQng;dWe1UIgeVh1R9iUka,lTmSnRo,rPt1vea25Sy;e5iM;an,e1AMlFK;ay,e1UF;ng,s;a25Ct1O5;eSiR;en,g;c01Ye1F4;gh2;dSg3r21KsR;se23U;aEby,e11YfUhTi0X7liMm2noCRri21Ms1wiSyeR;ar,r;ll,n1UI;aQe25Gue;ell21Zie1DJ;caWdVeUgr1NBiaTneSsRt50y1HXzale1XV;aVoul3;llPnt1YVv1Q7;!u;au,u;a7ic;lvG;beFe1XOi8mi0;aneIbouVdTinSka,lRymbiL3z;a3e1M5i22Ln0ogh19Y;!va24Q;be22Fen,fRin0WIriIsK5wa1SV;in215;rn,t;ne5sA;e8in,l0m;ar1QZer,hl3ly,n1TJu8;etDf1T0;dSfRg2pf0tz;fr0I5;ecDWhaFiDWsee1R7;a00boZchXda7eWfrVh235iUmToSsRu;by,maF;!n,y;ai4er;er,ll1n;ey,oy;au,b3fr0HXk,lZXm1QBqu3r,v205;aRe4;rlG;is,ut;i4m19Drd;el,tu;eRin1NOri2;il,l3rt;n,rd,sh;hiN;iter1A2yz;a02eYiXoTuRy1YO;odRsh1EI;en9;beTdSrb0PQutn6v0wR;ats1XXe;e,os1I1u;ns1I0;ckm2nn,ss1;aTeSgg,i1YImboInRs78;ah1PHdonw1Y2ey,f1ARnDU;n2t1;s1ve;ckm01d00iKnZsXuWvVzR;eSiR;er,ou;bRr;ro0M6;e8in1P8;benskiQde,mo1X2s0;co,g20Dh2p6sR;co,e,goC;cy,d1;u,wi1JJ;ay0;a18b13d1T2e11ff10g0Wl0DmaiHn09o06pp,rWsUtTuSvRz8;og21Zry;ffre1Y9liaNn236st;o1F3sc37to;eRl0quAt;!t22H;aVlUoRpHt1;dSir,n0DXuR;a7d,x;ay,e5;c0KiM;ldUrdTuR;dRlt;!e1BG;!.roch1C2e1BFi1M6ot;e5i,o;io1XXnSrR;daNs1N4;a,e0KM;ac,cTeRgr1XRi0;sRy;!tA;e,he1JB;!ar1SBb08c07d06e05f02k0lUmSot,p3q1XJsRten2;on,trap;an,oR;n1SQre,ur;!a7ca1IQeWiSmRo0LOs;an,or;aTes,gSl2ngLsR;!s8;an,h1O7;m,ns,rd,u;nLsRt0WZ;!pP;iSoR;il,rd;ll2;au,s,ts;aFerslee1VD;hri1Z6;e09Pri1XM;auTgPm2nSon,uR;e4ie4;a0H1illi1R1;lt,t;!a7en,o7;n,rs1KCsRtz8;brFZi1ZS;a20PbUeTl1WLoRs1;in,uR;le5ry,st;au,rs1;!o20Hs;coUgh1M3mTnSq20IrdRs1WV;!et1M3;co1ZVno0V0op1U4sDB;b0S9pao213;mRsa;az1TEel211in;e01WiSoR;ronz6sh;rlan1WLsl1YI;a15b14drGe13ffr11go21Jh10i0Zl0Sm0Rn0Go0Cr01sYtUuke1OHvSweOy0zR;er1;a146rR;it,y;cTtSzlR;af;an,el;heE;er1mi0sR;eRon;au1X9r1;a00beZd0Z4eYgXiMke,laWmUnToSri1KUs,th,u,vaRwiM;h,is;!udAw;at,i0on;aRerPme;in,n1DLux;isJ;e168o;au,gh1NFmi2tD;au,r06B;gh1NDl1QMu0BA;ffrTli0rgR;eRian1MN;s1t1DD;e,i1oi;a00dYeVi1K3ne214oTs1tRuL;es1UNh1ilRry;!co4e,h151ly,o;is,la,n,veR;l1QJse;au,rSsRt,vo9;!se,t;e20My;ezt,rR;e1TTon,y;nd,pB;ba1WVe1NGina1XDus;a9dWe1UUiTlRoFO;a,eRi1VPy;au,s;e,nR;aRe5;!s,u;aFerbl12T;b,gne1T9;an,l1ELr1PRu;aRey;rd,y;dGvG;a1WIh0UW;rSuRy;go203x;in,n6on,y;b34ch33d2Xet2Wff2Vg2Ph2Oi2Jl1Xm1Tn1Mo1Lr0Us0Mt0EuYvUwrylu1U4yTzR;aRon;ilBuck1UZ;ar4et,l1JKm2n1JKo0RY;aSiRrilch1AI;gn2llA;n,rRso;d,is;c04dZge,hi0ja7lYmoQnt,r1ssXtSvR;in,re0FG;hSieretRr0SU;hi0;erPierR;moyRric0O;ne1KB;e,in;!doNi1IVt1O7;aUeTiSon,rR;e0F7on,y;an,n,o;l,re,s,t,ur;is,rd;hRin;e07Ein;ch18QeWf16FiVtRz1I6;e,oSuR;so,zo;lRni;a,i1O8;en,gn1ll1n1BQ;au,hRli0s;ouK;cWe5keEpUsStR;m18Po0NK;!eRin;!au,r;ar,eR;!riN;!oR;n,yC;a0Fb0Dc0Cd09e08f15Zg05i02l01ma1SPnZoVrSs1tl0vR;ey,in;an1P1eSiRow;ck,e,ty;fa,voA;faTnRt1YQ;!boucR;ha7;lo,no;ac1XBeRh1NLi9Uon,s,y;au,r,tt;iIou1HC;bal1VXep1CQgSnRte5up;et,th0;ou,ue;anSoR;tt3ur;o,tiN;!au,m2;eSiRn0y;!n0;re,s,t;e5iaLon;et,r1O4uRy;g1WIs1UQtt,z1N8;be1NKh2mvolgRnd,y1LP;yi;!pewa7;at,baat1XPcWdVeUiTl6nRs,t1;eRon;s,tt;er,m,n,vA;!sh;ey,hi,iJQon;io,y;aTbSeRfo7in,m1s15S;l3t;e5i0le,oa;c1WIrd;a0Ab07e06i03ko,lTm,oSp3us1QIvRy;ez,in;is,udA;aZeWiSoRup;!fr8nJw1L1;an1OVbo9ch1H2eTg2nSpRv2;e5o1VX;el1VWg0;n08Gr;rSs,tRy;!ta;aQn9B;!gh0h128nt,rd,s,v2;a1V4bSch2mi,nRo1VMpe5;do,i0;eFo9;a1V1n1U1rCzo1FS;a1BTrR;aRun;i1URnd;ch,iKneIrRs1GZti;d1OFet1HLne5;gnUllSnRv3;ey,sCY;ardRo1X6;!e19M;a7e1NH;an,erKG;aVeUl1R3nR;eSie1EUonR;!broc12Hleb0OD;!??,r;!a1QKrm16J;ri1QP;ay,e,n6;an,z;!aVbo9dy,eUi1WPm0oSrRs14O;as,e5;is,re,sy,uR;a7ry;l1UZs;l,p1MJ;et,o1GM;!a09Cbei1WYey,i000le,oSriRso;au,el1UVon;rSurR;i1y;!i1NE;a6Yd,e5Mhe0RNi4El3Po21r0AuTyR;fRlysht2sh;e,fe,le;biNchLd1SKe06g05hr,iDji1WDks,l03m01n00o1ROrUsStR;t0voVF;cRe0RNsbLUz;hi1Q4o;ce,gus1loVnUo1K2rl8sthTtR;aRe5ha;do,u;en0;i0RFs;ng,tD;g,k;aRo085;r1VCs;fo7ker02YlRt1;er0SZo,u143;erGlPuG;ls,ntGss07W;a11e0Gi02oTuSyR;!dec1OPe,kluQ;g1MRi0GQth;!bYeXiWlVmUnTsStt8uR;d,st;sa7t;g1O1tXA;a1RWent189o1PD;a1KKin;deva1VPquingo1PB;liliIse;e,ish0;a03b1QAc02dY1eZgXoWppi1KLsVtTzR;elBzR;eEie;h,sR;chJh1DT;ar,ko,on;lAui;auOe5n1oR;lsp1TJn,t;dSk,l,sR;!en,s;enXRma1Q1ri1RS;k1BIot;s,uO;c09d06e05ge5i04je5ke,m02nZrWsVtUuSvRy;es,re;dRnd;!enXL;e,on,ti;el,l1ne19YsH;eSiRot;chs;!au14Oje2;chJetteRie4oy;!trR;embl1I8;e5oR;nt,t;!re,t1PU;dm2haFlaQm2re,s;eRin;mX7nX7ricRtD;a,ks1;hRon;a1TGetDon;bo05c04dAg03i02je1FBk0l6m01nSppi0r0R8si0teRus3wl6z0FU;!l1SV;cVgeUkRquX4ss8tz,y,z;eSfur1S0lRs;!aQ;!l,n;lo,t1ET;!de06OeThRke,oe1F4;a7eRiN;!ge1T2re;!sca1TPti1QU;bGe1NYpt1;n1EMse;as1DZo1SF;h1k;ulA;beFcze1P1d8er1TNg1Ch4Ci1Bl17n11r0Cs0At08uRwle1BXyJ;beFc05da,e04ger02ill00lZnYquArRst;cVeUi0mTnRqu3r03Ys3;aiKeRi0;au1GMl,rP;oy,y;au,ur;aRhe;de,ud1ON;i0ta3;em,on;aRon;de,rd;aRe;t,u;re,t;auRhe10Jr1KM;de5lt,x;herRtuni099;giE;e1EBh1GYsRt0;!e0OE;an1J0be1RLc0Bd08Te09g05i04k6man03n00queZreXsVtRv1EU;e,iTon,uRy;g1NBnR;a1DUe1MR;er,n1D0;!an,be1R6tRythJ;!aEer;n1PLstR;al,er;l1CJs;aSeR;ll,r;ri,si0;!ns;n,tn;eSie,uR;es,itG;au,r1tR;!t1EU;acrGm2nt,stRt056;aEeEi0;aTeSiR;a,er,l1SDoC;la9v1E7;de,n;dUg,ja1B4rVs,tRvie1E5zali1SU;!ain0QPeRig1NPr0CS;nRs;ay,e5ot;er,rRuroK;ou1OW;!co,do4e1BPg0in,lRot,st0weEz;e1T0iSoR;ws;as,ck,s;daFsy;ar1F0g,h08ZlR;e,i00C;a02eYiWoSuRy1N9;et1BBh0QE;cTho,rRuca1A1we1FF;eRin,o;a,nt3s;ca1P9k1KM;b1NOe1OInR;g,n,t;ck,et,gBmTs1OStt,urRxm2;a1LWet,iRy;au,c15Wd1BVmo1LVss1;iMmiM;g02h01i00ke,mXnUrSuR;st,t4x;oRr1;!w;!ag2de1F1nSsbR;er1PJu1PJ;e1PIig2;anSba7mR;an1ESe,iM;chAd;ma3;er1EBi1N3;eoBg;c0Xd0Ve0Rf0Qgueire1NKjolYEl0Jn0Bo07r06s01tRvAzA;chYgeXzR;!baVgUjTmorr9pSsimR;mo1QFo1QF;at1KT;ohn;eSibb1;ck,y;ra104;!eR;ll,tt;cSet,hRkJn6si5;!ba1NZer;hRus;bRer,le3;a1NWeI;by,ek,m3n,th;d0J1lSriR;!l1QQto;a,kR;os1LD;cWdl1EKeVg0iUk,nSsterR;er,waO;eRig2;g2y;g2zi;haFl1PDs,t;hRk;!el1ED;ar,bU3de,et,iTki1PPlSoRsoff0t16V;c1PNt;mo4;aTon,pRs;en10VoCpR;el1P5iNoC;n,rd,tr1HQu;e,f4le,re;lRrAv4zo;dShaR;ub0;!e1DOiMs;dGe1OYiR;ad9;hau00Zke1QY;a0Ybv0Xct0Wd0Sen0RgnoQhr,i0Qka,l0Nmm0n0Io1ORquAr00sYtVuTvSwKx,y,zR;erAzaN;e,r00D;ers11Yge4illRre1K5stH;a7et1on;eSherRter0VOz0;!o,stonh0ZE;is,s;c1P1tR;a,er,o1LB;a1LLchic1BIda9e07gus06iVCjaNla05m03n01rTsRtinHv10J;chRt0;ke;aUeTiRo125y125;!eRg2n,ol,s;!rJ;!auOi1MJll,n,ol,r,t1AI;!gTnSrR;a,d,iLo;d,te;ne,u1PE;andRba1MIet,s;!e1IV;aRi1JR;ni2;nd,tD;on,s1;!nc11Vol,s;aUc0el1HRiTnRt1;eRi,o;l,sMQty;ou,s;sKto;c1OCdm2i1LWlSs14QtR;h1BGon;!ba1EKe1CLi1HO;cze0T3th,x,zo;ey,y;ak,erSorRunkTU;ko,ov1OJuk;aRo0J4;ti1;auOe5;et,re;rTtherR;stR;onJ;n1on,wea57;b1Pc1Md1Lfa7g1Ih1Hi1CjF5l0Zme0Yn0Tou1NCqu0YGr0Es0Dtta145u00vUwTySziR;no1ONo;dher18Ket,ol,t;cettJdr1CIns;eUi0rR;eRon;!auRt;!per06D;rRur;e5on,y;beFcYd00XgXlVnt,q1NQreUsRte1P0vH;be1MPel,se,tR;!inR;!i,o;!au,s;conbr1A5ds,kn0lRtz;em;e4hn2;auOe1P3hToR;nRuF;!n1B0;erRon;!boisjo1MXdug1JO;an0WQc1FKtrG;a02b0d01e10Ig00ha,iZk1JMlYm0nWqVrRu1AVweE;aTeSiRow;er,s;as,ll,r;n3Zr;uh1O1;a0WIeRsw1LV;l,t,y;ay,ey,iMy;as,b1F8ne5;no1ML;e065y;dj,gSndRy,z1OO;!ou;h0o;ch0dDOeUfla0TIgTia,nV1tR;icRoN;anD;as,e1D3;ss6;laFry;a02by,c00er,is,kXlUma7or,q1IXstrTterR;!mR;an,i0;auOo;iSoRs,u;ns0VQw;g2s;!eRn0;nRr;be1LIhaus8;ao,ia1HJonR;!br190er,i;iKr1DDs1GR;llTn,rR;banRf0UPl6m2servi1JU;ks;aRe;nt,rd;ey,l0ZTy;an,eLn51oSuR;et,y;n1IXt;er,ne0IN;cSetDhRkn6;e,m2;en1IDki1H4;as,b1K6er,i,rR;e,i1F1y;a37b34c31d2Mfthimiak1CHg2Hh2Ei2Ak29l1Mm1En10p0Yr0Rs0Dt08u05vWwUxTySzR;ovs1HBzy;amPd18ZkHr3tH;er080fo7;aRb0KNe1A3iMme1NG;rd,s06N;aUeSin,o095raR;ge,i4rd;dekiMns1rR;a7eEs,t1;nSrR;d,ts;gelStR;urH;ho,isD;deLlSrRsan1GV;iphiKy;e19Qi0Z9;cheTesShRtP6u;er11Mi0;onC;as1cop1M8l19FvR;ar1LWe1K4;c01in1EUl13moQn00pYsUtR;aEeSiRr076;geCv1MX;be,nso18Ws,ve,y;aTe81iR;aReR;mb4;ff,hAJ;eniHinoRosi1LQ;la,sa;auOo1IV;arfull1GVhSoRu16F;b1LUfAla;am0B7en59;aWb2coVeKiTli8mita1IDnSsRy1M3;kiCto;o,st,we3;cRpH;ks1ss1;laN;mXErd,so1K7uw;erje1K9pR;le13Qs;a03chaQXde18Xe02f01gVm2nUoSriRtsXBy;g1IDqu1GI;ld,uR;f,ilB;is,s1;a,elUlSsR;tr0OB;aQeRi11Z;haFr;brRma1GG;ec1I4;ie0U6o1LO;ff,r,sK;irJrd;a7bWd3e128mTonSpRslP;ey,s1;d,et;anueSeRo1K6s;ll,ry;ls1;e1J5l1FJrR;ia1GN;a0Cch11Ud0Ae09fn0g08harr1KXi06ki1K1lZmXoVr19WsTvSwRzt0;a7eE;e0SUid1HG;lRo,w1IP;ig0;nRqu3tD;diC;!as1I1oRs,y;re,useddeb;eSiRo1LFsw1IJ;ff,ngs1s1;fs8mTnSrRst1LGtt;t1y;be1IQs;beRe1EL;rg0ZA;as1cS9eRzon1GN;ff,se;attio1I5hoU4;moQute1HP;erRr163;!bro0NAm2;nd,ouf190;emN6izi2;cRdt,kHls1ns0W4ri;hSkR;ho1GBle;m2o0S7;lerSouarCrR;et,ma1FA;!s,t;aUer0HGgRo;eSinRlefiel19W;gt1t1;liMm2rt;n,rh1CT;dis04e01gYiWleVmRr9seEwards18Z;i1JSonTunR;ds,sR;toC;ds;fs8st1;ne,p,sR;bu1HN;aSeR;!rt1;ms;lRsK;iCmR;ey0;fo7;cShl3kR;aFe126lG;e16NlG;a1IGd1erSnoeRy;th0;!le,tL;dy,gUm0rTstR;er,mR;an,e1DC;by,le0ZV;an,lesR;h11Yon;aM9e9Sh9Ni7Go4Vr45u05w02yVzR;aTiR;erzb0VJob,uR;ba;t,wa1HN;aWcVer,kTlSoRzy;tDuK;es1DI;eRst1FR;!m2rm2;e,k;meKGuc0WY;an,elsRineEy0;doR;rf;a3Pb3Bc2Td2Re2Qf2Hg2Ch29ig1J2ja00Ake1JIl25m1Pn1Fo1Ep0Wque0Vr0Fs09tXvSxbur1GOyRz1BG;eCFon;al0Y0eSiR;lla162vi0;au,rR;gRn16Dse5t;er,n0;a01ch0eZhYilVko11Elo1EOoUrRtlo1EOu;emSiR;s0T5z0T5;bl0E1pe;it,ur;!lR;eRy;!ul;ie,u;au,l,mpBrR;!t4;l1EPrt4;aUka,oTsRt;auRer4i2Ion,u0ZA;lt,me;me,uchA;bl0NWng,uR;c15UtW7;a03b02c01dBe00gZiXliMnWoTpC1sSuRy;ey,is0FN;in,o;cherSuRy,ze5;vr15P;!je2;h144in0A5;e1IBga,o,sot12NvR;a1EFe5;e194in;au0RWbo9l,p1ANtD;an,y;et,in,o9;!ck,le5nRss,ux;!ce5d,lRtaH5;e5ot;m3sCt10V;a06e03hi02i01lVoTrSuR;is,y5;a1AUeL;le5n184rt,uR;rq1GNy;aVeTiR;n,sR;!ea;chRin,ss9;a3in;i0BTnt00VquA;g1CKl,nLre;ly,n6;l,rRtD;e0Z1ie,rR;e18Hon;rRs,ul;c,t;n09Cs;aZbYckl17CdXfo7h13Ai0S1kWlTnRo7t;!e,iR;g2ngWW;aSeRop;av6vy;p,y;!in,l6;as,on;ar,er1ER;nd,s;a02b1ANe01iZoTpSulR;on090;hr6;nUr01ZuR;chHin,lRs01Y;inRon;!e1DL;ce16Md,tR;!char01UeYUi0;li1trR;es0BM;rg1FNsn1A5;iTnSreRs,y;il,sq;o153s;nJs;aTenSiRm0UEoMu1C9;gn1n;ba1D7;c,y;aSet4me,n,oR;n,uss13Y;i1CMmHut,yJ;aTgSreSZuR;a15Let;an,en;l,sR;!rocheSI;aYeXfWigVl1B4oTrR;eRo1DF;nGsn0BIz;e,nd,rt,sKurR;!nH;ui0;!a1B4in,n6y;!sD;uQKyJ;c0BJg0YIll;a,d3eRra;m0TRvo14E;a06e05h00iZkYlWoUrR;eSoRuc;cq,is01Xs;!st;l1nRr0QEudr13B;du,ge;aRos;s,ux;e1G7w1DB;au1BV;aUeRir1;!m3nSsnRtD;ay,e191o9;ay,y;i1AKmb1r1BQstHtHu1BQ;d4p0F0;p,rRsK;re5ufH;a03bles0R1e01i00lZoTrSuR;c,q1EBr1sK;ay,eu18Soy,uB;cVisUrdTsSuR;chArg;q,t;!iK7;!bela1D9;!q,t;ay,et,in;en,ll1A0;!au0OZe,rRul;g0ry;!so1BSy;le,nt,rDx;a08e04iZoUuTyR;an,d8er,sdR;aBeE;ck0e,geo0Z2h2mmond16Ary,ss1;g1DTig19Xl0FEm6n,uSwRz15K;!n0VAse;a7et,iSsR;e,s1;ll0ANn;eUnkw08FsRv0;coEdR;aBeR;llJ;ss8;au,nn2rZEsSuRwi1F4;mo18Ex;deEsRzH;er,l0;bbBeg0gViXKmmeh,nUpSuRy;lt,s;eRie,pi0;au,r;o,sf0LN;aSoR;n,on;ni0UZ;anJb24c22d20e1Yf1Xg1Vh1Ti1Rk1Pl1Jm1Cn0Zo0Wp0Vr0Hs0Et0DuYv0wUySzR;a,i0o9zi;eRon;l,ns,r;!dTer,iMlSnR;e0UIiMs;e,iM;!aEeE;a04b02c01e00gXill09Xla1CImVpe,sUtreTvRw9x,zie1AQ;iKVreR;le0YV;!leEM;m2sAt1E0;a10NoR;ul9;aSe,hRle;an,er10Gt132;l,n;s0FRyi0;et,h3inA;ek,lR;a7i0;i4n,uO;h,tJy;sStR;al0eFie;ant166ey,ou;!a01e00geZiYlWmUoTr9sSta,vRw3;al,i72;az,ey,onne1CC;ch0pt17Ww;an,eRoy;r,sn16Tt;eRot,y;a1C7y;a,be5o0XG;!v0YQ;!n,t;iSnRzi14L;!ge;re,s;e19PhZW;dSks,lRn0I1;an,ey,ittBy;na1APr0YJy;aYcXdi0eWi0l1nToSst1tRusz;a16Fig181;gh1BWh1BW;ag2eRol0IC;lRnfe0LMv0YD;ly,y;g2ll09U;arl15GouF;gTh1BQlStR;!el1B8i,o;ds1;ay,hR;ue,y;aiCbWeViTmWSoSpiR;er4g17O;n128t0WF;ce16EnR;a,e,g0OCo;n9rg1BGy;ro0V3;!bO3cVeUiTlRt0N4;aRi0o;n,rd;b1v2J;go0UYnc;e,imas0LM;is,uR;chP;g0ZXn,rRs1;e,on0OB;an,erRim,or0YTr8;!ty;anRge1CN;ie196;f3ny;!rRts18Q;iMks8;dRet,i0VHon,r0XHweE;!r0XGs;ia,kRquLY;e1CFstad0;bWie,laVrSs1uR;ck,sh;a0OIoR;us163woR;ls162;n0LWs161;eFinLy;a1Sb1Qc1Jd1He18f16g0Yha0YUio0Xj0Wl0Rm0Kn0Fo0Cp0Aqui0Gr08s05tXvSx10IzR;az13Gy;eSiR;lo0LOr2Lta;lSrR;e,ny,si;lN5y;chPda09NillXmi4oUtSuR;ll15Pr18J;aRri184;mi;mRr4;asRma0V9;o,so;io,o;al16Fco,en1A1hni14Jle,nSsy,tRy;as15Hefa158l0;a7ey;adRig6Gks,o16Hr8;do,o;al07XiRp098roK;et0XOn1AN;nSrRtt0TX;e,io;et,pelleW2;aUc0ell0TUgTh,kHniMoc16GsmoSuRwoodP;nz157;or,re;le,waE;n,rd129;aUeTiRop13GpGHu0XF;cheBnNtroR;ff,v;l,nt;rSssi182t14LuR;lo,rFZ;co,e,z14X;aUeTio,ks,lRmo14Horet1A7wi18B;aRey;b0TIi4;aGHl18Xo;i4l18Wu0X4;or14Rul14R;ia,r14Q;aWby,eVgi19CiTm2nSon,uR;er0RCgliel17R;a7e;aRovAProla17P;co17Ontomas0U9;!n14K;eRna7;ta149;abRio4;io,rFH;bYcWdeVl0TLm19Yn,rUsTtDudeSzR;!i1;!pa7;!ch150;ce,e,no9o,re,s;ri16Q;!kR;ho15V;boEel;iConRunyk,yk;a19Ge;aWeVha7iUkRlaBIro0TJ;!eSiRn0o,s1;e,ns1;e,ns,r0MAy;c158nt140;rNsa4;i4pr13Y;!bBernRlNW;ar15L;b110mUnTsRu,vat9z;!perR;ei165;ton13S;a13Ce5os;aTerSoR;et,r8;elBre;eRl0n9strHvern14M;ne,se;aC1bBGcADdAAeA8f9Vg96h90ibHj8Uk8Ql6Km5Qn5Ao59p4Vqu4Rr3Ys0Zt0Sur,v01wYxtWyTzR;ain150eRiHy;e7Iry;!dAeSgl0LTo,sR;iCz;lBtD;e15RraR;!de0U1ze;a120faEiRol0W7;nRtt;g,t0;a0De09iZl3oVrRynI;eSieRoe14P;n182s;eRux;se,ze;e,iTlSs0WLyR;!au,o;d0in;d,sy;!cZenClVnTrSs,tRz131;o,s;gil12Z;ceRe;!nt9;lRmo12H;eRier0P2y;b1mu4nXKrR;a0WJoy,s;!q;au,l105rRse;!aSbo9cAOeRgi0;aux,ux;!c,ux;nTrSuR;drD8x;e2Uie18K;ey,t0UW;a15Dchev11XelBhourvenAilliD9loWoTtR;mRo4;an,e0VE;mma0S4nnaRuc172;ncR;our0VU;ff,r;a2Ib2Cc1Xdeve16Ze1Wf1Sg1Lh1Hi1Fj1Cl16m0Zn0Wo0Rp0Iquin0Hr06sZtTueFvSyR;!l0I5;agGea189;a3epha120iVouUrSvinR;ce11T;eRijk0oismai10;e,mpG;chGn9;mauv0TCn;aSinRolGu0OP;!g16R;iTlinGnSulR;es,t;de,e;llRnt;ie0UUy;aZivYoTuR;es,iR;ss1C;b0AHcheUsTuR;le5sseR;a17Qls;by,es,ie0UNny;rs,s;ea17NiE5;bRm15nJNsoi0UK;is,ra9;c0L7d4;aWerVinTlaSoRrGut12;c12IntLrtGts;s,ts;aRs;ce,sK;n0UPri0;rSt9uR;lt,sG;d,o9s,tL;!rTta,uR;rRsa;cy,d0UZ;c0LCmR;ea176ie0U4;aYEe0D1oR;mme16Tux,yR;a173e0U1;aTeSoR;n0LHrm0Kuli15P;!dt,ille0TYno0V9t,ulG;iTnSrR;a9cha9is,qu9te83;chGgGo0V6;so15K;aVe14CiToR;geLngchR;am0H7;erRppeL;es,rG;ndGur4N;aRour06Y;do15CrR;di15Bla9;co,gClRn0Q8;e0L1va;aSetrGoR;guG;iGrRute0T9;na9;agnGe154oufWrR;anUeToR;bo9seiR;ll4A;n49s;ds,gG;fGrG;ay0FFoR;nt0JUrgSssGurnR;ea167;es,uG;iCnnX3rrGu4ve;a02e0ZQhVoSroiselR;leL;!eSlomb3ZmRrm3ZstGte02u0T0;bGps;urL;aTeRiev0m15Jo0SQry0u0YY;neYvR;a15Xe13E;lTmRtele0KC;bRps;auOrG;as,e0K9;m0G6rRuO;affGds,reRt;a15Qs;aUecque0K5ie14DoSroR;ssGye15O;is,rR;bGdG;ns,rR;a0K0rG;br0V2c2VinWlVnUreTuSvR;is,o4J;ln3Ete0S8;nnG;t9y;ab0YTl3B;de,tje2;a0Ib0Hcy,e0Fi0Ck0Bm09ny,o00rXsahWuVvSwRy;ay,orG;aSiR;e159lB;in,n;chPit0s0XV;ag;eSienRy;!n0LO;ca,r;beFchYme,n119o,pe,sVtter0HVuRy,zBC;aTcSen,sR;i0sH;hPk;rd,uO;aSby,e,iR;a,erL;!r0YW;e0ETie;a13HiR;d,ne,t;o,s8;bStRv0A2;i0o;oy8;!n075peRx;nt64;r0PVy;by,il,le5mo,p0UNspJvenH;a3iRoy;lSnR;d4t;li8;a02e01iXlan0QUoWrUuR;tt0yR;jRsba0QQ;al1;aRin10I;et0tt0WV;des147ix,mereudalig4n0UFt,urq12Z;eSnR;ci0te;rRt0QJ;c0YTredeberniscalv0TX;auOd0QHir0Z4lXWnci0y4;do0DYl00Oni,pe,ro9ssilRtPuc0Z3;i0le;liv0LXm,ne,rs6;a04b13Ke01g,he00iXnVoStR;!as,on,re03Su;!bS3fr0XZlf,mmeJnSt,yR;e0QVon;c0HJv0P5;eRie,o;ny,r,t,v0P3;c0HGel,g08Jll,m146no,oFsSveR;rv0P1;c0Gon;y0z;au,cSgr9hog12Fs,tDveR;!rs;ha0L7;iKnRttGy;to9;a0Bbro0Ac09e04i02mo128oUpsTro,uR;mbr0SGnbru0BLth,yR;!ld0;ey,t0;ite039lD9nUo0QErTsSuR;chPAy;cova0XHko0Z2;asKe;brTce5tR;br0FNgaRig0Y5;ilPJ;eun,un;niRr,s0ZPt4;!ac;a136dy,lo,nUo,rTtR;rRte,ure0Q3;e,iIop0VI;l9o0YKs;i,ou;huI;s0H8ws0X3;iYlXnWrRt0VEurai0Z4y;!a,b4co,e0ZYg10GkUsTtRy;el0OZiR;g0XQn;!ac,e;!is;!c11Gge,thA;sy;o,so11F;a0Ube0Tco0Sd0Re0Lf0Kg0Jh0Hi0Dl06m04ne0GYoWpVruJsoFuTvRwai0Y7z0WN;aQGec0VPiR;gCn;b0CUcaLde,gR;a,re;orDr0RK;c117e0VSge,m0PVnUrSs0S0ttiLFuR;c116ghe100r0YJv0QR;!eRge,i0DIme,t;n0U2tDy;co0N4gR;!cSueR;ep0S8;ha0ID;aRiVB;ge,i4rDs;aTer,iSoR;ue,w;gaEs;b0AAfTniTVpSrd,tRvedo0C2;or4;os123;ortu0ZR;asKcer0FTeTgnYVneLq10TsRva;io,leRs0;!martHra;ge,l,nCreLtD;aRougC;es,lB;a0XNuidi0Y4;g5osK;eVgliKigCll9piUrTsRtoiBu4z0P6;dernRelV2tre0HD;ie0OR;iq10I;er4ne;uw;ot111u0UR;l,r0X5uF;cq10Duf;b0Oc0Ldur0Kf0Ig0Fh0Ei0Dj0ClQDm06n04p01qu9rYsXuUvRwa4yJ;aSictR;oi4;ltrPuDO;m0OTnSrR;e,i0GT;ay,e,ie0J9o9;alBse;ge,iv0R6min0QDoRue;cheRd0YVn0WUsb0UL;!foucau09UlB;lanSoR;inDth0YS;c0ZWte;auRdJeWIgBnEWo,ux,y;d0QZze;aTbSirRot0ZT;an0WM;ou0YU;dSrR;e,re;eleiC;ar0V1o0ZQ;ne0Q0rJ;aPoussaZun0ND;ar0WEe,orgeSrR;a0U2ee;nd0QN;aVoRra0Z7;nt0EFrest0QLsK;antaT;hesnaSoR;sDur;ye;arToursSrR;ie4osKuye4;od0QE;re,t0Z8;erTi0PEoR;n1SvaR;chi0WZ;legaQver0S2;aUeToR;ie,nRr00Ourd2y05N;ckhee4g;an,rs6s0SA;d1rR;la9;aVeSoRud1;ey,n,st0SOu0MSy0SO;er,mSn5rto0IYt4uR;rGs0WO;!ptinC;as,erCit4sq0YVut;a0Be09hr0ZOi07la05o01rUuR;eSiR;lBre,se,t4;s,yt0;aTeSoRucX1;otJsbo9;!a007e,gor0TZni0s;ce,iTndRy;!mRp4;a0X3o0TH;de,s;ix,nSuR;ff,in;g4zR;ag0YG;in,nR;d1f1;ovR;anN;nRte0;e,nG;gCiTlifAnSrRsYUuc0Y6;iOPmend0YRriOP;neLo;ll0;a01e00ilipZoWrR;aReit0UEi0UE;iTnR;cRq0WM;es0UK;po0SW;e,llQ7nSorDrRuAy;d,e0W8ge,t;d,v0KG;po;li0VCrr0OX;iMVlkRuw,y08Az0T5;ens0AI;b,g2ks,n,rRvy;!iMy;ch0BCen0QXiSoR;bbelae4uhA;c,eu;a0Le0Kha0Di0Bk0l08oXrR;esCoRuy0XR;iTÿR;!roeR;ulx;seRx;llG;ck,e00igCnnZrYsWtUuR;rSsseRte4;!rg0XE;c0CSp1v0Z0;!a,eR;au0L4;seLtR;a,e0FX;by,d0LTmi0tJ;inI;ne,ur;aSoRus3;it4s;r0s;aRc0RZnt4;nt9;mVntUrTtSuR;lnGme,x;ig0T2;d,n0LI;!al;b4pR;la3s;a07DllGsa4vi0XF;dXi4mWnVot,rTstSto,uR;s8x;el0P6re;ave0TPdRetDi1l,re5ufHy;aill085en0SY;!b4tP;!pL;ar2ilh082;a08e03i02l01oXrUuR;cUUh2i4lBre,ssR;at,cRie4;he4;ay,ieSouw0uR;in,yC;!nCre;er,isa02YnTrSuR;gh,t;ass0BPd;a062ne,v0IT;aiGEe,o9uc0W6;da0GUga4l02P;auri0CXlleTrR;m8nR;ar0UR;au,fR;eu0IMoQ;ille6Lne,r0THttRy;enR;be0V0;!c1kVl6nUrTse,uRvi0XKza;dRlt;el3;au0OBbo04Rdu0SUm2;dr9e;!inL;b3Gc3Edd3De3Cg35h32i2Yk2Xl2Gm20n1Bou1Ap17r0Ss0Ltz,u02vTwSy,zeR;!m0WM;eLi0JZ;aYdim0M8eViSl0VSrR;e5ie0WZ;au,dSeLgnKYlatRo;orG;a0KPoSY;lSnRy;ne,poF;iCuy;la,ux;b06d03ghD5l02m01nZpWrUssTtRvi3EzA;a0QCeRh8Ut;l,u0PX;in,y;aRiz0VWy;is,t,y;hinSin,lR;aiK;!a9;a9oravicR;io0OE;a0K7e;ne,t;eSiR;as,er;ga0DWl3;eFiR;gRn;e1ny;cWkVpe,sUtR;iSoR;li,us;!g0QZ;i0yl05Z;ev0RZ;en0NNh0CJ;!a04b0T9che07Xde56e02g00ip0UOlZmoWAnYoXrUsiTtSvRw3;auOe5i0WD;ez,o9;e,g0QS;aSiRo9;ce,go;c,gh,h,r;is,sa;aj0VOet,is;ey,iM;enRiKYy;c09Ds1z0PR;nRt;be0TEka0BO;by,c,g1ic0UAme,sC;h,onDpeSrR;a0UXendes0MZiB;n,rn;di,st;a0Eb0Dc0Bd06e04f0SXg01harg0U8iel00j0VDkZnWquHre,sUtTus0v0GRyRze;lkRs;iw;in,re;auOerR;e5re;!eShaus0is,oR;nz0PCsA;se,v0GJ;o,s,u0TE;lo,s0JU;eSla0QOuR;ay,eg0;la,rf027ug0;au,stR;eu0OB;el3oUrSuR;raQ;e0CYiR;eu;ff,is,nX9q0TO;oRzin04V;es,sKuK;re07Ou0SC;h0TKuO;a03bYeXiWmVoSphoRquAy;usK;is,rSurR;an,s;a0PQe;iz0OP;aNco,r,se;!r0JN;oTrR;eRo0OK;mo0O5v0FS;iKurR;gGn0HS;nStR;ha,o;e,t;be05c03e00lWmUpTrympBtSziR;el,llJ;er0OC;e0JBhoQ;aRe;ce,n,s0O3;!aTeRi0on;!geersheRng0r0HH;cq0SV;i4mo4;c,rAsRy;io,saR;nd0GE;anRh0ouF;ta0QC;c,rR;g,t;in,u;gTk0QTlRnJ;ey,lR;ebou0QTon,y;le,ne5;an,lSmR;!an,er;!er,sei0P6;eWg,hVnUoTuR;eRil0SA;il,r4t;s6Vu0IK;aEo0SY;er,uiB;na9sKy;lm2;ar0NH;an0GQcar02LhYTiRos0TDrGun0M3;er,uk;aTbadPin,lVJoSrR;a0QGo0M3;nv0EKus;nc06Xte;aGKeFYhAHi9Xl8Umi8So2Mr13such0CVuYv0STyUzSácR;erG;ajRer00Xop;ko0BK;piTrR;!enCiR;er,lB;hot,ot;b0Uc0Sd0Re0Pff,g0Oi0Ml0Hm0En0Ar01sYtUvSyRzn0;en,l0;en,illR;i0on;f0QChSl0m2n0EPro,sh0B8tR;er,iM;aCbertR;!s1;aShRiIs1t0FA;en,iMm2;ck,n0LC;a0IEeYl6oXrTst1tRw3zi;az,e5iR;n,us;an,eSiRo,y;e0A0v2;n,rbrigR;gs;de5nCtD;!a04Zux;eSha,niR;g2ng7O;gRo;on0NV;berSminRuyh0E5;gs,s;bat0OSlaQ;beUet,ha0LGi0PXj001lRv0;!eSiRt1;mo4n;n,rs,t0GTy;rts1;ba,er0GDllRn,r0MT;e0GCierT;gy,nA;ll0RMnoQrR;i0ri0;by,dG0;ciolRhure2ks6;et0RW;aynGi0S8;a10e0Ki0FoUuSyR;a0QJer,sl0tG;ch1iKmRssA;iCly,p;a0Ac07ftLise05ke,l3m04n03o00queZsXtWuUwTy0S5zR;eRi0;!r,t;!eOIl6th0;ch,sR;e01MsRY;e5os,t07G;by,l6ni0sRto;an,e0RVm2on;lo9;kRzy;!sR;!hOY;an,en6Ri0APk,stea0QA;ie,me0RPp;au,tR;!ie4;e,hSkRq;er0ER;et0H1on;ch,n;ck,e,lWEsStR;chl6es;afSe,pRti031;i030o;ul0PCy;a05ciCe04g02i00mZnApXqu9sUtSv0DCwR;!elE;eRot,zm2;!l,s;p3sRweE;aRe,m2;c,ty;auOeRin;au00IlB;a02Tm0o;gRss0;ht1;an,gRhe0BEo;!an;!lm2ry;m0nXX;btr0GGco,gXiWmTnSpoRr6ul6w005y;!nC;daEe,l6t;!er,n0oSpR;!e,on,sP;ul;k,n;an,g2noR;liN;a5Ub5Qc5Jd5Ge0HEf5Eg5Aha7i55je,l4Lm45n3Eo39p33qu30r1Ys1Kt18u00vXwUxSyRze0P1;!le,nJ;!e,wR;ortNB;an,eSh0FRie,n,pR;laQ;ll,n;at0Q4eSiR;er,lli1;n6re0QFy;a0A7br0Vc0Td0Resl2g0Pi0Ol0Mn0Kp0Jr05s02tUvRy0;e0A0rR;a0JNeR;tDur;aWeTinSDo,r0DAts,uR;!e,rR;e,i0;au,lSnaPrR;mar062o09T;eYDli0;nRrd,ut;ce0J1t;e5inSsR;e5o09O;e5s;a03b02c01e0GJgeoBnoy050o0POrYsXtSvR;al,ilB;!eTiSoR;is,re0AU;al,en,g0KEn;!au,mRv0AS;anc0O5;ol08Oy;auSi0oR;is,ux;d,lt;amb0SelBh27y;er1i0o9r1;ge,nt,uO;al,e5iVSry;ih2seEtR;er,ry,y;a0NZbe5l,oRt0;m08In;llaOOyk;hlRn1;an,in;e,rR;ay,et,y;!hR;!our1y;oRun;nRu07N;!ne;a01eZinYnXonWtRu2y;a7eTiRon,rAy;!nR;et,i;!n3ZrR;!eE;!n04;am,o0CX;!e5ot;!laQsR;!l0NZ;!rd;and6e03gr02in01mZni0perYsXtR;aTeSiRo07L;!ch,lBn;!g2l0NU;!nSsR;ch04V;te,zo;!et075i0ON;ec;aRouXG;!t0GO;sc09E;ay,o0HD;le0OHn1G;a0Rb0Nc0Md0He0NEiLQk0Gl0Fm0Bn03o01p00rVsUtTvR;eRilB;si0;e0GXis;et08Din,oZX;!aUeTiSoRve5y;n,w;e,g2ve5;c,ia,nD;d087w0B7;or1r1;a,nR;!el;eUiSo,uR;!d,t;c,e4lR;le5;auTc0B5e,illYAlRr,tIAy;is,lR;!i0;!lt,x;aTe5iRo0H6;er,nR;boe0K1;n,vI;ey,iIO;e,um;aUeTi0oRy;ba,nR;!ni0;au,li0y;!ll0LCs0IJ;or2;eTiSo0C9ussRyZ4;ie09K;e04ZlBn;au,il06Ct0AMy;n0CJz0JR;eSiR;er,ll0C1n;rAt;eVin,l6pRs0BM;eSiRl3;e09VnER;quRss;esC;!laQm2;g2kUlTmb0MJnStR;e,wa4;!eMW;ah2ey,id0IW;e044m2s0BC;a0Gc0Fd0Ee0Cf0Ag0ilBkl3l08n04obloIr01sWtTvRw0A0;eRilB;nt,rK;aSeTBinXYo,reR;!c000e,miCr0HL;!nt,r0IA;eSig0HDtantinR;e5idG;ilSnR;ti0G8;!l0;aRoy;dRth;o,t;!aissa0FXeSiIoR;lRHrs;l014rR;!oy,y;e89in,oR;g0KWn;ieUNlanRor06H;d,s;be0LNfrRry;oy;e,ie,oXX;au04Qie0FM;nt,rr085;a05b04d8e02mXpStR;e,o9;aSeRlaisZMs,t1;au,re;gn0ATiSn,rR;et,iNti0FL;n,r1;aTeSinR;as0FR;fo7r08tD;nRrt3;da,fo7;au,fo7ll0GMr,tR;e,te;!eF4;rt3s;!a09b08c07dcoBe05fo7g2i04lYmXoTpSs1umb0DFviRweE;lBn;!itZWr1;!mbSnRpy,v0;!ey,ge;!eRi0;!au,y;a7orJ;!aVeUiRon;a7er,gDKnR;gRi,s1;e,fo7;!la,mo0ESrAs1ttJ;do,rd;gn1ndrG;gRm2s,ttHHy;ro0E8;l03Qo7;eFon,uSL;bCNc04FfoFgiaco0I3m0EMnge0KDrd,s;f07TgnUmb0HBnSpHri0tR;e0KXou;!dri5teR;!au,rH;aTey;an,d0L6e07RgThl2nR;aRe;c,rd;er,i0JE;fRoCre,sYX;eHGi03Y;eRliM;!beRr4y;cq;hTkRol0FKu;buS4erRriE;!h06A;aFeRl3oLKranJu;nSrRt;!ie;be0JB;a,bTeSieRo,uRY;rs0EF;l0JPrt,t0JNy;!an,s;c0IWdy,lRstGt0JY;!ie,li0;kiR;ew0J6;a0De04i00oUuRym0;e0KFin,k6mpn0ne095re,sR;e5iRse5t1;auTQ;at4ch0g0C3isHmGnWIp3r07SssVtTuSwR;!e0HH;at4dep0EZet02Sgh,st1ti0;!uR;c0IKs;!e08Xon;c0IInStR;esKher060;!chRe;!amU6;aWde,mTn0G8rRsKwe0K2;c,ge,iRk,ou0DJ;ce,n0EQ;enRmo0ICo0ICps1;ce5sRts;!at,on;ne,rStRvG;h0on;hih0I9wa06Gy;e04fl3i01me0I6n00pYrXuTvRxt1ypi0JT;eRi0;!au,l02NrPt;chTsR;en,iRs;er,ng;er05R;dy,eJ4ks1m0G9os,t1;in,pRro07T;!e07Z;cy,g,n1;ng,rR;ea0J6moRo2B;nt,unt;sRys;!se0HR;a06b04c02d,e00fZg0GPlsJmYnWoVpr09ZrUsTtSucciu,vaR;di0li0;o2Or0E0;i04se;ce,i0oc0E7roCs;l0H2t;el0H5qR;-ma05Tui0GI;in0BFonJ;fo;pNZsR;zyW;cReroNoC;ariADiu,oC;aReF;rd3;ncio0I0rSzyR;ns0CO;dTWlR;a,o;a29e18i0MlebOLmile00Wo07rXuRva0GNwe;!a0AIbVgg,lleUDngUp3rSsseR;re09B;as,chR;!iEwa7;!ful087;ac,b07Dry;eZiRystofa04O;q0FKsR;ho0HtR;a3eViTmaCAoR;ffeRpheR;rs1;aSnRs1;!-saint-aG2;ns8;ti8v06A;!i03l01mYnXpWquArUse,tTuRw,yWD;aRin03ng,pingoS5;n,rt;a7em;au,eRus;l,t;chSGin,p3ti2;a7g;ba7ed6iSyR;sh0C5;c0BUl01V;aRetDlA;rd,s;!nRsy;a7ie4;a0Bb0Ac06dKMgJEk04l02ma9n00oYpXqueWrVsStour0CMu,vHzR;m0H5y;hoSoR;gClm;lm;iae0D5on;!t009;chaKewy2pa;dRvit01Q;iNo;!g,iR;c,q08Q;dRl0CAshJSt1;!reCHs;ahaRhaN;ki0C7;co0FBhSoR;iCr0FEu;akMBipR;e,pe;ok;neKss1;!b0PcrouCd0Ne0Mf0Kikhelze3l0Im3Kn0Do0Br03s00uMvR;aWeVig0BTrR;aSeRi0on;au,fi03Ol,ry,tDuOM;iRrd;nv024;au,s,tD;gnHlSn2OrPuR;di1Lx;!eXEi0;!b033in,l6neSsR;er,ie;au,veF;aYVby,edarXf07Ih0H0iWkVl0BBnToSrRubiN;i0y;n,ux;eRo0C8;s0AMy;ao0DSez;es,f;yk;n88uehR;in8;!aUeTg,iSk,neRu;q0DMtD;a0COer;au,d4l,veGW;il,rd,ux;ag0lRn0t0CL;ew;!devRf0;ergCilB;n6s09Kva032zo;aRo4;le0G2;in,rR;a,ou02J;!b2Ld2Kf2Ig2Hi2Dl29m1Vn1Louig1Kp18queIAr0Ls0Et08uZvSwigRyQFz0GC;noinP4ou2I;aVeSig0ARoR;n1Ry0;rRz;lRt,y;an0BY;neRtD;lBt;!bYchAdiXffo00EmWnt,ssTt3vR;eRin;au,tYH;eSoR;nnA;!gr080l;eH6o096;er,ll1;eFo;al,eTiSoRte047;s,u98;g0A9ll1;auSlR;!a3leW0o9;!lo9ne0BVveF;aube0A5lGpo0FBsUtR;aMeR;ignRna030;er,y;agCeRie;!loRy;up;a0Cb0Ad07e06i05l01m2n00penZrWtTuSvR;a08PeYW;er4;erLi0on,rR;aRe,in;in,nd,w,y;eSiRoG1u5;erJ;ti0;!ti0;e5l6;aQeSi0oRt1;k,p3t3;bo9pRry,sw0C6t1;la3;g09Dh;l,st,tD;!onRr1;!a9neR;re5t;onnRy;e5i0;de,ux;a00dZeWin,lVm2oUpSr1uR;t,y;elRr1;!l0CG;n,t1;e5in;au,lRr1;a3eMTiXKlR;an,e,ie4;elRU;c0E2dRis;e5os;anAonA;!a7cXdUe,f33g,kaCnTtRu;!eloRig08XreE;is,up;aBReEon;eY4oR;iB5nR;a9n03H;eRy;li0rR;elB;a02bVel08Io9pR;!aSbeEe5iRla3o0DTy;g08Mon;gCnR;o9y;aWeSly,oR;n,y;foFrR;lRot,s013;aRin;in,nd;ll1ud;ilRnDRrd;la7;iSk,le,me00En0ou079uR;mHpe5t;fouRne;r,x;f,gnTll080ne,rAsR;e,sR;e02Bon;aUTe06I;n1ot;f0icoR;inA;iLBr1wiI;a,eSle,oRri0;illeSMt,y1;l,rt;a0Bc08d07el06l03n00rUsTtSvaRwiI;ll05F;chTGo;s0ALvA;anto0B2ch07Hd2eViTmina09AtoSutX9vaR;ntG;siN;co0AZni,sR;a06Li0;!nz0C1tX4;d0CBsStR;e06Ris;i0ky;aQeriR0lSoR;ne,r1;a7e,i0;an,eu;il07Vr07K;cRi4;hetRucVY;o,to;cy,r0B4s0C0;b5Qc5Md5Her0B3f5Gg5Bh5Ai50ke,l4Im3Wn3Fou3Ep31q30r1Os0St0Gu08v01wZyXzR;aTeR;lRn14s,tD;a9i0;!b1iKHlRuOva05X;!eRis;!de;a,eRia;n,r;st1thoR;rnJ;aWeSiR;c18o0A8;!llSn0rRz08P;hiEly;ec,muR;llA;llaYBnaUO;chXdeWfIZgVlUmSpolL3r1sRvY7x,z3;l6signM3;aRe,o05H;rt3;!e,fIV;hl2;n,r2;on,y;aZchewZ0elYhVin,l3m2ry,tRud0C2y;!aSeRin,on;au,m2;bRdc0AV;ri01I;a09PcaFeRie;rRy;wo001;!anV0liPT;fSlRn0APr5;a7IogC;a7or01K;a0Gca0Fe0Dg0Ch0Ai07kPo09Is01tRvane2weE;aZeWiTle,oSrR;ataXOid,o;nguYL;llRn;eRo0B8;!ro;lRn,r;!lR;!i,oN0;g09GiMra;!aVeSiRon;n,o,s0AZv07P;!lSnRsKtDvLO;eu045;lo,ot,s;b1gnGnYEr,t;l095mZ5nR;!gRo;!hi04M;aRet0A5m2;baI;ra3;llRne079t;a,es,i;gnJUnJU;!calVd032lUuTvR;anY3ecR;ch09U;b1lt;e,s;en05J;a0Yb0Vc0Ud0Qe0Pfn055i0Ok3l0Im0Gn0Eo0Dp09rZsYtUuTvR;aj0ATeR;ll,r,th;el,fHl08N;e,hwrTiSoRwrTy;is,la044;er,g08Os;ig06P;t073weE;!eWiToSri0uthR;!eX5;n,ue;erSgRl09JnP2sK;an,n2;!eL;!au,iTl,rStRy;!ot,te;!e,ot;a,ra;enTiSonR;cy;n,o;et,tKH;!beCll,nJs3;ah2eRovaB;!gPll,t,y;an,ichaHoR;dy,ni,si03I;eViTo2ZsSuR;cT4er;en,on;!er,nRtTY;!e,g,i;!au,n,t1;gn2otDsK;au,l07RsDtSBw;arKTeTiRonRFucSX;ff,ll1nR;!al,et;au,moCn5r1;a07Lhi05F;erSonRy;a05Oe,neHU;ry,y;c049gNDmTnR;d,gRi;e,iJ;ag02Y;uerH;d02e00iZlYoWpTr1sSuR;a02Vst3to;el,tiI;ayJeRi0Pl1;!lR;a00Kl5D;n05MrR;iSDusc02Y;an,et,is,o08W;el089no,strS8;lRrXG;!i0lo;evU1;etDs;a01cil06Vd00ge,iXnWoVtRuH;aTeSiRlebrW0reEweEy;!e,ll1;!au,l06S;is,ra;l,ni03U;a08Iey,on;ch1e,no,q079vAzarezR;rodriR;gu031;fie,ie,on,y;an,cVdUma,pBrdRv8;!bR;laR;nc;a,i2;!hi088;a07b03eZirBFleVKo9pSro089uR;!sRT;!aTbSd1e5fF9hHi1li,oRsaE;!lie07Is;elN0;gnTnR;a,el068iR;el07G;aVIot;!lZ6rR;er,lR;aXBinR;!g;eTiR6oSrR;ay,ia;t,ur9;ll,rYZ;cA6nUrRsK;aSdelRet,go,ra;!la;!i4;e,n;a06bHUc05d03e02gaU0ind02Nki06BlVm2n2oUt1uTvR;eRo;!rt;o04Fya;t,uGP;aVeUf02IiRon;e4gShRs06T;oo;an,n1;fl06Ni,ya;ghT5h2nRry;!d0;g2n6vTO;erRoro05FweE;!i05Hon03X;agnZTi;bRdo,ge,is;ak026reK;j00SlUmo,nJrnTsR;ey,sR;ac,eW4ie;ey,s;hVlRteBX;aOKeToR;l,n9AtPSuR;etPRx;!te5;auOi0;aCiE;eUlR;e,iR;!e050oR;stT4;!la9;aT2fr6;a,de,eUiToSrRy;in,on;rAt,uT5;e06Ln;au,l04TnOIt;chioTe01KheSiR;uc;liev4ry;ne,tQS;aSeRot,r06S;do02LllYT;nRrAzi0;a,ie;aMMeG7hG3iDXlCIo68r2Fu00wZyR;a06LeXkeWleVot,rSwR;at0;am,nRo04W;eRs;!r,s;s,veEN;wi02L;rs,tD;en029;!bi0c1Ud1Se1Qff1Pg1Nh1Mi1Jj1Hki1Gl1Am17n13o12p11quAr0Fs01tUveTxt1ySzzR;a,elKVi;!at,s;te5;chWe5lVtRzVF;!eSinRon,s;e5g,o;au,m0rRt;fCVy;er,in;aFer;at05Oby,c02e01hZilaYkXqRPsUtRweE;amSe02Jil053oR;n,s;enD;a7eSiR;e4ng;au,l008y;iMy;ccQO;!eRueFCy;!ll,y;vest4y;aRh;gl04M;b0Bch,d09e08fo7g05haFk02l01m2nVon,rTsStRweE;ch,neN1or01D;ey,on,taE;!a01Ee0Hi05KoR;gaZ0ughLwL;aUdt,eShQZie,sR;!i00N;ll,tR;!tJ;p,sh,tRy;cu;a,ey,ingE7;eShRi0F;ar03U;!tt;eSoRy;s,yC;!auOrs,ss,tt;au,k,lBt;an,eRiI;nVYtS9;ee,rQ1;er,re;na,rs,tJ;claTdoIel,gSk0loIn,tR;!iMon;ay,e;rk;ayl9brRVpR;!aR;ss;g0hVi02BlSteRwiI;au,y;!er,iSocR;h,k;a7s;er,oG;nshMM;aRe5noMOoCS;ra,tOL;!es,sR;sRt;ieZNon;ay,l0;aRbTYdaBgH1l03OnAon,y00H;j,rA;a7et;cRno,t;hn0k0;d,geRze3;!on,ss;ci00hWkRl1;!eUinTleK2mSnR;am,er;an,ey0;ghPLx;lINr;an2el,koTnSoRs;lz;er,oe;wsHW;!no;a2Ie21i1Bo0BqlGuUyR;!aSdRm0sWD;gGon;nt1u;ba023che06d0e05g04in02jPlZmYnSsRye4;ad3si0;!a02SeSiRn0s1;!er,on;au,lTtR;e5tR;a,i;!lZZ;!a,bC8n0;e,lSoR;n,tM1;m2on;!sR;ma;g0ni0ui0;l,ns,re;si,tt;a0Obe00Rc0Fd0Be8Tg2hl,k0AlXPm08n05o03p02quAs00theRRuVwRy0zoLF;!nR;biEeShiEiMleRrigg,sEE;e,y;!ll;a7ghUillTlli4sRt3x,ze;e,sRt;a7e5;a7etD;!t1;n2sRt;a7e5oiMJ;hy;kGmRshooMU;!f9P;eSgniaFsR;a7on;se5;eRl6wiZ0;liM;aIHer;eThSieJ5riRsGO;g015q015;ag8;r1Rur;a7co00LhVkR;e26leSm2sR;miZQ;bRy;ank;aTet,uR;!corriR;ve5;eFrd;dRt;beOhZ1;a0Ec0Bd08e06ffe02Cg03kn0l01nWonVquAsStt1w0zR;za7;!a7eSsRtG3;a7eBXon;bo9to00P;e,ne;!cUdSkRn;maWK;aRle;moMG;e5k;ay,lR;!aVBon;anSd8gs,hOAnR;ac,on;di,ti;!n,rR;e,t1;auOeSgeR;m2r,s;au,lBn,t;auSkRoOX;!atGey;d,lt,t;nXKrRs,uB1;d,t1;a06b05c03d3e02ga7i01kkeD7laQm00nZsXtTusSvAwRye12za;er,st0;sa7;hTonSsRt1;c09ky;!io,nA;ePVoLT;a,l3nah2sR;eB2oN;aQ3doIhol8iHne05z;auOm0n0;l67siYU;d,n,se;htelsRk,q;bau0;e2i37;k6rd,uJL;baUGc0Md0Kg0Ji0GjB1ken0Fl6m0En06rd,s00tYuUvTwl6ySzR;eU2oYYziH;!aUE;aUDo;chBd,er,lt,nRs8;!beZMeSig,scR;hneid0;is,r;h09koRt1;!vH5;cUe5i0ka,sR;a02eRfo7;au,t,urR;!jeffr6;et00EouR;pe;cVdTg0nSscoRt1vo8WzeE;mb;!iI;!a,eRt,ys;is,nUZr;hRonYM;!aRe;rd,ud;!an,bBie,ucJM;!bTK;l5BnSrl6s,thR;waiD;!ay,e;agnoZFd1eloCgED;buXHdy,eRiMly,shIB;r,tD;eUhAkSqueR;moTJ;!eRl6;n,tt;!l3;a5Zb5Yc5Rd5Me5Ig5Eh5Bi4Ol4Hm4Cn3Ho3Br2Os29t20u00vZwWxe9MySzzR;er,o;anVYcTeSgo,ko,lRne,te;an,eL;keYDr,s,tt;e,hG5zOL;d8eSleRm2n,y0;s,y;rLs;a,et,k;a1Obonn1Nc1Hd1Ce1Aff19g17h16i13jeOIl0Wm0Vn0Uqu3r07s04tWvTx,yCGzR;aCelXRiR;dy;eSi0rR;etI8;r8Kt;arXeWhTiSoRrAte,weE;n,tJu;er,n,r4;iRotI3;er,llR;etDi0;ilBt,vKG;d,ic;aXXhSquGTseR;au,rt;ie,o;asU5b09c08d04e4BgWh9lVnToSquRrLCsi0;aYe,iAX;n,te;eRivZCoy0;!uf;e7Got1;!auOcXeWiVnivZ9oUuR;aSiRo3;gn1nvK3;rdTD;!in,n,t,u3;e,llaGB;at,lTQon,ry,t;hem3;aUTeSoRuTOy;is,n;auL5lRre5t;a9le;erAi0;eTonR;!nR;a9et,ie4;au,l1;aBEharTIilT3koM;a,r92;aVeTiSle,oRriUKtCP;gCn,t;anCer,n;au,rRtH3y;iUGri;di0gRng0rd,y;ay,uA;llRn,ssA;eRis,on;!re5t;allasT6id,ouL1;eRht1ie,l0o3r3G;!aRNt;a7o7;!sRt;na7;eUiTjaIor,rR;e5iaRy;s,u;er,ll1n,sSX;au,ns,t;!auOhRl3oSZreXS;aUeR;l,rRtGJ;!mRon;or3;d,rNTt,ud;et,ie4;nfLUrt,t,zR;iz;cYelXhViUk3qu3sTtR;!inRos;e5g;as,fo7;ne5;elRlingk,weE;er,lo;ho;ay1horichviVK;a04h03isRBl6qu01sUtRweE;!ed,onSrRwiI;om;!na9;anWchaVeTha7iRuF4y;e,nR;otFX;!lArR;on,t;erBH;ge,yi;eRiL;t,z;aw,m2uyz8;!rT1;a0Cd07e05g04i02l01m2nZoYrWtSyR;!cI0;hToR;luRn;sUZzOI;wiI;eRis,omMJ;maVC;n,s,t,wsAV;a9eRic,y;!m2uf;aQe;sRtzQM;d,se;es,ia,ne;!hI8lRm2r,y;!li;aUeTinSuR;as,z44;aIPg,i;!le5n,s;ge,s;wi8Q;mUnJrTsSthR;!e,m2;amSJe;ne,ze;hRs;ow0;!a0Id0He0FfanGEg0Dh0Ci0AjoanPUk,nXoWpaFsTtSvR;i01ouloKA;em6EhoW0;!aSecRpiHteH;ouIW;int,nt;de5mo;a02eUiSoRy;de5y0;ci,eRfacPUn;l,rJul;aXbi0foWllVmUn05rTtSviRy;e,lB;!er4te;!oFM;ayeILer;!i,y;nd,y;nnLEu;fe,llPmoG7rd,ud;calN9er,fRn;aROerHU;omRG;arRi;s,tz;!lTMnRss;faOY;!az,f2DuJy;!fSlRmi,nP2to;do,moFX;e,oV8;bSeisl,iR;a,n;aRerIG;!ce,rRy;di0;aWdUeK3f,g0io,koIlTmSon,p0st0tRus,v3z;!e,on,ze;an,er;aQeK0;eRiNuc,wI9;n,rMZ;ck,nKBrihOO;ardiNc0Ce0Bl08mi0ne5r07sSteRv3za7;au,ux;!a04briaQc03d1e02guil01inPHjo00la7mXonneLOraQTsSveR;nTIrKY;eUiSonRy;!e5ne5;eRnPD;re,u;!au4Bl;eRi0;!nR;e,u;ly;beF;!lB;laIP;nd4;e,on;a7eSlRy;at,et;au,v3;!s/fourSN;hu;an,eSme,nRon,uAF;!hoPV;li0mi0n44r;asQMeBJgiThRiNXnTPue;oRus;ssi2;a,s;diThSm0rRs0UtFW;io,j2;l0m,n0;ck0;aUdTeSinRs1y;!gt1;!ch1rQ0t;igG;!h,rd;aWchicMShSkR;!us;arJWeSkR;ol66;nRr,t;ek;n,sh;aIe5i1RoN;kGrdm2;a0De07i04oTuRyQZ;mRnd1ss1te5;!e,haFke,st0;cM8dgeTRem0m00nVoTuRw,ys;a7de5in,tiquR;iaTE;d,mR;!eB2;dSiaR;rz,sz;eSiR;au,n;au,el,l;b0e;er,li,nSsRtn6;h,s;!n,strubO3tz;!auVcTiSni0re5s,tteRu,weTD;!ry;cheFle;!heRk;r,t;!me;c09ecnG7g07i04k00mpiZnSquIOsRtch2Fus4BvGAz0;kavORse;cSdReHVks,quAveFy;iMosH;!fUhRo;a7eRfTon;rt,tR;!ie4te;ie16;ed,n;eSiRuIE;e,st1;lRn6;ey,oIy;e,gQVnSsR;!deE;!ey;dRraLL;an,on;he,kRquI5;bWeVfo7haEin79mTstSwR;eEin,oGU;oIuI;aRer,on;n,y0;rm2;i7uR;rn;a1Tb1Qc1Md1Ge1Bg14l0Rn0Io0Gr0Bs01tZudiPYvDDxYzR;aVeRi0;au,l2rSt,uR;il,x;niR;ak;i,ns1rR;d,ro;by;ne9LousAtR;le,n0on;aiZcoYhXinWneS4oVsRtoHH;etF9oRuH;nRt;!neR;auOtD;m,n;elPS;aNZinHJop;rnA;ll1;aUchTd,eF0ks,mi36oSs,tR;wistBz;le5n;!aEer,iE;b3l3;lQSnR;!di;!aYc0IdWeVgTi,kl6nRst;a,eR;nkaMRy;aEhD1le,oRs1;ld;au,t;aRia,l6;!ux;rd,sPCudGW;a02b01e00iZlSm0oR;cq,de5s,tQE;a7eViSoRsFN;!is,n,tALuLKvi5G;a8JngRon;!sR;!l6;coq,rRt9P;ay,on;d5nsJMotB6;au,k,ts51;au9I;de5nsKU;aVeUfo7g3hCIl0miTnSoRrLQuA;n6Lt;auOeEon;coQ1;auOlNK;nn6HouR;etD;b0dr1lUnRraugBs,tO0v0;!aiMIjonnATvR;eRilB;nu;ek,lo,maL5;aUdTeSon,wR;eEiE;au,ga4t;in58le;gu3l,rRut;d,y;hSkR;fo7l6;e,lmRotD;ei0;by,eRi;auRr1;!lt;ge,ncRrd,soO6t;hiRo;!ni;aSereR;r,ur;ng,rgaR;va;a52c4Sd4Je4Df4Cg47h45i43l2Qm2Mn20r0Ks09t02u00vilYyVzR;aNIeTi0oSuR;ko;!tD;au,nc1;ak,eSinLWor,rR;am,iG;!r,ur;acqRla7;ua;llRriK8scaF;ac;emWf0huViUk0ournCTry,tRu65y,zH;eSiRrARs;!ng0;nc32z;!e,l,s,t;i,ne;ps;anc00etDhYl0margi2nXre,sStR;er,on;ay,eTiSoR;dGn;e4s;!dRr0tDy;ik;er,i0;arRro;ah;enJPon;a13b12c11d3e0Yg0The0Si0Rk0Ql0Om0Mn0Eo0DqJWr07s1tSubeJvRwiIyn;alMBin;a04el03hWiVleUoSrR;aQoNL;lM8rR;a,elN4;r,tt;!n8C;!alJGeUiToR;!dy,ld,uR;mi0;auKPer;!lR;!eRin,ot7G;me,t;et,le,ot;l1uO;aUiSoRy0T;ua7y0;cRg2n;h1il;ng0rdR;elMN;!ua7;aVdt,eUhaTiSo8AsRuy;te3;cMXer,quIU;rd,us0;!cMVt;d5Vl,nd,qSrdiRscoNtchIR;!n7Ps;ue3O;an,eF9iRoHQ;ngh9V;aQe8QingRo3;er,uA;!ar4Kinsl6BowN0;auOch1er,ni;maQ;!aEJeUin,luQmSogCsR;ma,trap0;anR;!n;rCFs,v3;!be,ns,szaSy,znR;icHU;zy;i0zy;ar,eKJi1;nSrdRtNL;!elLVi,uc72;e,g0;a0AbKIc07d03e00gZh9CiXkemoWlemmoud8nVoTtSwAVzR;acN3ie,o;aouAon,t;d3thR;!m2;!arKRet,iMouL2;un;cM0gH5ng0tR;ah,i0;hoF2le;!cLXdettFVtSv01wiR;tz;!e5;aTer55haN2iRo,weE;cRs,t;ks1s1;ia,kBD;hSsR;ics;abL6en0;c7FdHne,rd,ss9vR;idG;eTiSjR;moQ;ll0s;nt,ur;a0Tbus76c0RdPe8Rf0Qh0Oi0Nk0Ml00moZoXtWusUvSyRziB;ea;al,erR;de4;e,sR;aeF;er,z;cLAin,nRuB4;!cBgP;ntJ;!a09eViSmo4oRroKuc60wa4y;mLSn,ws;a7nSsRve5;!saQ;!g0i;a03c02fZgarHWhYma4nWpercL2rVsUtSvRw,y;ilBue;!eRte;sDte;oe6Z;iFGoK;!oR;ix;acKU;eu7Fle6UoR;ntR;aiC;ouF;rGu;b9Cm0nSrt,s,vRzDS;anI7;de,ge;ir,os06;esKnI2sBve5;am0oRume6K;ciCmHV;io4ry;hRouF;amb0er;iXmWnRrqKHu;dRey,g0;!rosR;siR;gnR;ol;ie,y;nsSrR;!boisveFe;ky;dl,gnB0qK7rR;l,ne;an,ie86lR;!er;asKeUgLhiNnSuR;e8Ty;eRocJY;ts;lI7r;f4orBE;be,cVg8hl0k,ls,rTsl6tR;hRz;am,ov8;eRs;ns,r;ro58;a7dXeVfo7narUoSrR;os,y;re,s,uR;in,t;d,z;lRt;!l;inR;gt1;a7erH5hXkSot3LqueRra4Y;moEDt;!eTiSl6m2sRteL4wiI6;teL3;ng,us;!rRtt;!iH3jonG;!aRet3Ei4steJG;mp,rR;ah,d;ch0Sd0RkGl0Qmi0Pn0Ord0Nsl6t0MuRv8;b0Kc0Ed0Af09g07h06j04l02m01noy0pZqu3rWsUtr1vR;a9e5illRolsk;a9iR;erL;aMeRoleDL;igBjo50t;aSeSiRol;vaGF;ga7;arlaDUe4iH2oFreR;!z;i0onAC;ac,e,iRne,t;eu,ga7;eRoIC;an,u;arno9er;e,rR;aQis;a84oF;eSin,o3rR;e5y;nRt2O;esK;aVeUhRla82o4H;aSeR;!m3neL;mp;!r1;ge,i4mp;i8o3;on,s1ty;!er,ow,sl6;!s,y;sh;!e,s;fo7le,s;!em3;a60b5Tc5Dd54e53g4Xh4Wi4Mj4Kk4Hl3Pm3Mn3Bp,q5Er1Cs0Ut0Fu00vZwa,xYyVzR;ane4elHNiSzR;o,y;nRre;!a9et;ar9GeSl6neLoRs;uk;!r,s,ur;!t0;ic;!bDHc02dYer,gXlCmVne,rUsTtSvRweHTzA;a9e,ilB;re5;ch,em0;!re;!aDQeRgart8m0oCM;lBr;a7e,h,is,y;a7eSoR;!in,n,u3;lRt;et,ogHK;heRo3H;cRr;orC;a02che01e00hZisYloun6oXri1DtR;!ah,ersViSleLu,yR;!anP;kBBsR;!tR;a,on24;hiE;g,n;se,t1;al1urFH;m2re5s;ld0;iRka;lleRni;!r;c06gaEh05i02keIMle01n0q00seYtR;!aVe,iSonR;a9e4Mna9;aNlBnR;!aRe,gs;ud;n,rR;acGRd;lRt5K;et,in;ueL;r,y;lRrA;!ieR;reL;!a,o4;hRiaBN;ieE7;a1Jb18c14d11e0Zg0Xi0Vk0Ul0RmA8n0No0Kr09s03tSutRweEz6;!a;e00hVleUm2oTrSy,zR;!ch;ow,um;liNn;tt,y;aHMeSolomR;ew,y;!lR;!eR;my;l,r;aVcTeShRky;aw;lH9t1Q;zeR;wsBF;!lH6;!aYeWiUoR;is,s,wR;cRs;liCV;auObe81eRte5;!au,re;!au,st,ttR;e,o;clRs,te5uO;ouR;gh;dy,lAnRt,usB2y;!etRi,nA;!te;!aTeShartd,iRs;co5Uer;koCIs,tt;by,is,rd;atSeRow;tDy;i,ti;er,l6m2weE;!auObe5er4lRte5;!l1;e5LiHoC;el;!au,ilRsK;!le;!a0Ue0GiSoRy;l,u;er,n;!eloThSi0l3QomR;be;an5S;!n,u2V;aYeViToSro,ucR;ci;sa,t3ur;erRn;!i;!au,dSlRr2Ns,t;!et;or;!galFHnt,rR;esRin,y;so;!bUciolE9d4Zi4kaTmy,nRo,ta,uO;!yR;ai;s,t;aRe4Xy;na,sh;cZdXfiCBgWiFAks,liVnToSquaFs9XvilR;e,le;n,t;eRiF7on;!rm2;ac,er;s,uC1;eramusteRulAzuI;li0;e,roR;ft;bRo95s6;riRusBZ;ck,dBM;a0Ec0Cd08e05fo04i03koB4lXmWoUsTty,zarR;etR;ti;e,illP;cDZgR;!h;er,ir;!aTeSie,mo4oR;n,r,w;nTt,ux,y;b6nSrR;d,iN;tyC;!arA4;ur;!nSsR;!de8M;tiC;aSiRw3;n,seBS;ccRssa4;hi8N;er,h8omR;!be;nTsSux,wRzs;yd0;h,y;!g0;er,ke,oR;!pR;an71;alsRejoaquERolA;hi;eZgXj97lUnRrd,sl6vy;!brSes,vR;ilB;idAL;!es,lR;arRe,iJon,y;d,ge2Z;neRuy;!e,t;rl;am,k,l,ng,o66ri;aVdaBKgUhTl6nSoRweE;t,ut;ac,oN;daBHeB0;!io;na7oBDtDFu;r1Jse,t8z;aXeVgUhTiSji,orR;ek,g;a,e;am;er,l6;au,lRr;!a7;cCHyaR;!c;a04en0hZkVoSqRziI;ue18;ka,nR;!villemR;ai4;eRm2s;nsRs;hy8tR;oe;!aUelTkanSmRus;a88ei0;gi;et,i0;ndJrd;!diBGnDRrR;ro;bWcoIeUiSne5uRy;ty;c,eAXnR;!e5o;au,n,uR;!x;!iDH;b,rR;tm2;arestDHbCLcC4dBPeBLfBHgB0hAPiA8jA7k9Zl7Em6En4Po4Jp4Aquin49r2Ks1Ut1Lu0Dv04w02x00yVzR;aou4TeSuel5HzR;ie,ol3;iRve8Q;ls;ad,eUlSmonRotD;d,g;eD7ifRw78;fe;rLtD;teR;rs;aRde;d,ng;aYeTiSoRra7;iCn;ce,la;lTnSrRzza6E;iEty;da6Cel,ir;ar,inR;e,orive8V;on,re;!b0Rc0Ld0Ef0Dg0Aksztina09l08m06n04o03p00rYsVtSvrRzCB;ay;ef,hSin,raRy;ge,y;i0ot;mait4sR;anRem;!t;as0Ee,ioRy;na7t;e,in,rR;iRy;l,x;ll1X;cRe5;hm2;aRi0o5M;is,y;d,is,otD;it9;eRi6Wr2;!a7rR;!lajoPm2;fr6mu99;eViUoSrRy;as,en;irdevaRn,u3;lt0;!beFer,ot,t,veF;bRl3s5It;ec,oAE;hVlaUoSuR;it;in,utuR;ri0;ir;i0u;an,eViTlAou95rSuR;ch1t;ay,e,ia4Z;ch1nR;!e5g0;rtRuf;!in;al9HhXiVkinTl12mansh5Vr8HtSwoR;od;as,ia,o4;!sR;!on;kuaRna;pi;an61eRot;rt1;ca0Fh08i06k05p02sVtR;er,hTi0leZon,rR;aRuc;nd0;al3Aon;aUeSinib7KoR;um;l3nR;at;d,fSlR;!y;!f;eRir5B;ck,tR;eg20;ew,inL;macRo8S;op2W;!by,eWfo7iVlUmo4oTwR;eEoR;od,r7V;di2;inJ;ck,ni;!d;h,t;a1Db19c11d0Yen0Wg0Ui0Tk0Rle0Pm0Ln0Bo7Yp08rYsVtTvisSzR;ig;a9et;eRigGs,us;au,l;anSeRon;me3Pn0Y;de5;a4LeZiUoRu52;g1Ft3uRyo;a1HquR;ie4;aUbaTe9VgSvR;ee;hi,n2;ja;ga;lBs;aRin;ge5;au;aYdt,eXoSt,uR;p,s;is,lTtt,uR;lRx;d,t;!dR;i,y;auOl7QtDy;l,utR;!ov5B;aTbu8UitSoRst2R;ry,ur;a5Ht;ly,range4;nRss;!da;eRi6Xs1;nGtt;al,naFrh1;aEo,uiR;mo,n;aRds,s;!t7A;!a29iSoRr1uiN;in,u3;l3Zon;aWeUhSoRul8I;iDuA;ambRet88ule8U;auO;dRme2G;ia2L;la,nR;d,ge70;eTiSoRuthn3E;!ur;c,e,q7E;c,l3BtD;go69my,uR;jo;!o;aric2KeWoUpRriBt5D;elBleRs;by,gatRt1;e,h;lo,stolR;ak0T;l7Rn,rt,sR;tigR;uy;nVuR;aSendaR;ys;camRd,m;go;zo;a1Ec1Bd0Te0Qf0Ng07haOi06j7Zka05le04n02onym00sYtRw7Ozoui1W;aWhiViTle,oRra3Kun2NwiC;!nR;el6As8;l,nozR;zi;au3Yer8;ya;al3Mbr4UelmRl6;e,ie;e,oR;us;an3Ze83is,lRonchis;op;it0y;!ng;st1;!a7eXiolWlUoSriRuen2B;gn1;!tR;!ti;eRophoC;haF;il6V;au,lSrR;!er,s;ak9iUl,oR;pRsan6P;oulR;os;!dGlRs;!lo;es;oRrP;ssRusK;i,o;l6InRt,z;harisonri5BontR;ha;e05o02rR;a2HeXiWoVusTy,zejeR;wsR;ka;ek,hR;ko2K;s,z;anjafitrimonaso68ll1;aRch8j2Ro52ws;cSsdraR;tt0;ch0R;iSn,sR;ca;riI;graSrsR;en,s1;ve;eSl3tR;il;!au;c53iKka,r3S;a0Mb0Ee09i06m03oWplVsRu3Wyo6Q;bTtR;roM;ng;er3S;em2;dWe,ncleUrSuR;re68;!osR;o,si;meR;nt;eo;aRera60on;nn,rinR;gh0;ci,en,na1Pot,rauStraR;no;lt,x;au,deJga,lUriSsR;!se;auOci,ndiR;enC;l,ot;eWlVoTroR;iKsR;io;iKrsR;ki;et1;auOlt1;lt;bTdSnd0raRto;l,nD;ei;iBle;a24b1Qc1Nd1Ge19fa18g16i12k0Zl0Jm0Ao06poFqui05t00vTwSywR;a7in;yn;arSeR;s,ze;adoRez,iño/cendán;!/R;alvariño,hernándSjimRsalvatier1L;enR;ez;enUhTiCmanRrog1A;!shR;of0;ot;bu2R;nn;iSnR;ze;!gRse;ny;aXeUonSqR;ui1U;d,tebraRy;vo;iSrR;as;da;in,nRsi;sa;a04bu4Xcr1KeZiWly,maQoUsSui2UyR;cPn;oRt1;pp;!cRi4uch20;co;an,cPes,nRot,ss1;otD;te;gTnSynJ;!e;bu21s;r0WueR;de;i4maQtt;nd;enbShatib,iR;re,shw2;raIu1U;as,brSeRn,s,y01;ff;anR;do;er,onqRr3ui4;uiC;no,ro;auWgVksejUsandTxandrR;ovR;it0B;riN;ev;i,re;me;erVrSubR;ae;eIiR;ch,dR;ge;diRs;ce;aSoR;mbraIrn;n,r1I;anes03eZin,oeYrTuRy;feRry,s;ra;eSigR;ht;cStR;ch;ht,k;uf;e,rR;gativRic,ti;ezR;za;e,i;bWhmVigBjar3rTvR;oiC;ne;c1ie;le;ed;ri;a0HeVhTiR;kis2Rn,rR;ow;urR;st;l6rRy;l6s;ey;mo;au,d06gr1k04ll03nYrWssUtRzua3;chSkRzm2;en,in;is1;aoR;ui;d,olR;di;ey,sR;buTlPwR;orR;th;ry;erP;enL;!s;a0Te;e00iZlXmaVo,rSuR;na;beSoR;ns1;rg;di,raN;ni;faRst8;ng0;er,gi2na;lo,rn;a05e04harokh,is,nZrWuR;eTiR;ar,laR;r,s;ni0ttR;az;et,iR;coR;la;anAeR;lSsRw;si;li;et;!l9ma,rs;gRr;ni0;fSinogenR;ov;leI;ck;reWsR;chRi;baR;ch0;am03d02eXhem0OicVjeTkiSl0na3olpRra3;he;ns;ngR;ue;hoR;ut;lTrhRs;olR;dt;in,speR;rg0;a,is;i,ovRyk;icz;a05c02e01hZicYkVoTqu3teR;au,s1;in;rd,stadesamiYul1;on;eRle;rm2t;an;ia;a7er,im,oR;n,ur;to;a7ettulR;lo;rd;st0;er;a0Kb0Gd0De05graEir03oYrTuR;d,kabR;ar;aSiR;gu;mSn,ssaF;rt;es,s;i4uR;d,ssR;aRir;fy;re;ou;ll;cass9lWnVrSyR;ta;crombPoR;ux;ie;aqu9d;in,ly;is;elmoum8oulkarR;im;en;oTruzzRs;eKo;se;tt;re,siRt;al;ad|Gerund¦accord0be0develop0go0result0stain0;ing|Negative¦n0;ever,o0;!n,t|QuestionWord¦how3wh0;at,e1ich,o0y;!m,se;n,re; come,'s|Singular¦aZbUcPdLeJfFgEhCici02jel00lunch,mAn9others,p7question mark,r6s3t1us 0;dollQstR; rex,ax return,h0ic,ragedy,v show;ere,iZ;t0uper bowl,ystZ;riXu0;dEff;alToom;atCroblVu0;d7rpose;othiSumbE;ayfPee7o0;del,nopoO;ead start,ome0;! run;adfLirlHlaci9od,rand slam,ulL;amiKly,olKr1un0;diL;iFos0;tiJ;conomy,gg,ner3v0xampE;ent;eath,inn2o0ragonfE;cument6g0iDlDor;gy;er;an3eiliChocol2i0ottage,redit card;ty,vil w0;ar;ate;ary;anki7o0reakfast,utterf5;tt2y0;fri0;end;le;d1noma0;ly; homin1vertisi0;ng;em|FemaleName¦0:2P6;1:2NO;2:2P3;3:2OV;4:2NP;5:2P7;6:2M4;7:2NX;8:2O2;9:2HL;A:2KY;B:2OF;C:2OD;D:2NH;E:2NK;F:2MQ;G:2HR;H:2OC;I:2GJ;J:2CX;K:2OZ;L:2LX;M:2ND;N:2NV;O:2P1;P:2JI;Q:2HU;a20Bb1W1c1OId1JNe1AHf17Dg14Mh11Ki0YYj0T0k0KNl0AFmWPnRIoPZpOBqO1rIXs9St6Ru6Hv4Gw3Kx3By1FzR;a0Ue0Jh0Hi0DlaKoUuSyR;a,be6lah-l2OZ;hra1J0l1I6riR;-04Ashadd1MO;eWhVi1USla,raTyR;!aR;! bi2D0;! Rl4na;a1Z4mDA;ar shar2MNee,ra;! X-Ve0DUlUyR;! S-R;em277mitche12F;jeLruo2C7;ie,ly,y;an1jaGlRm1V0s2M6;ee,ou;aVdUeJHja1mTrR;ap0NOoR;s0POy;a2E6ishH;a1JOj0X5;l0R2m2O1n1; chu ZTaTlSm2EMnRon,s204va,x1CRya;a,eb,ob2;a2P5i2DF;!h,nn1LT;aRor;n2OHoci,ri1SI;a,b5e0hra mas2EGina00lYmXnUph1LZyR;aE0nR;abRep hu2DO;! yus6;aSdRi7n1FWo;a7e7;!ba,iG;ira miya-abongn8Co6;da,iRla Lma,ya;a2EPe,ka;! f2ARb;ch2KTda,fGSh07i03ky6l02ma6n00rWwa1WTyR;aUnR;aReb;! lucie 20JbR;! 0T6;! 2M7-g2KXh,na;aReJia2DMm0NXsh2DZya;! S-Rh ta27Sl4;aFk1HF;qudo22Bzuna22O;ai2NFeRiy5;ka,lP;ia,ma;a,dy,naRra,ynah e2O5;!bR;! R;soha2NMzoh6;-07TePiSlia 0QWraRya;! bat2ISa;a,da maris181;a0Ue0PhssJi0Nl0Mn0Lo0Dr0Cs06uWvRz2M3;aSetteRia0on0NW;! ous0;! u13MnR;a,naR;!-jam2IW; ZeYkWliUmTnaSriRsr0ZI;e,tzi1XI;! elh1KV-l0HN;i,nah ova2LU;aRssa1KL;!nna nairo2B7; ling aOWiR;!ma; leila e1VIlia2C2;hImo;aRee,idra jO9;belRl4;a,lR;aRe isolG;! R;ar1SMden1ZCka1TS;abHis 0OO;c1A8h2JFko,lXmWnaVsUuRvj1JW;!d2HJmRn4s1JZ;aRna;!ly,n2I9;r2L6sa j1WJt1AZ;!-18Jh;i0na;an2MBie;esOsse eni1;an2GRiz2; x1ATdRmkoue kyliane 1MBn kei emiPt236yi;es,ja ange neWM;ganeh,hud2L4lUmSn234rRsZva,za;az,i;eRi;li,n;e0i a2H2;c0Gel0Effa t2BEgmur 0JLhei2BRl2M1m0Cn05o lucie anne ter2HXp04q09Lr01sTthzi2DAumeni1VNzminR;!eR;!-l1JB;hWmSna,sR;en2mi1;inRyn;!a,eR;! R;al0E2edJ;aRi2N0oda ha0AGvi2MF;-pE4shrE;aSitzRosla22Z;ah,i a1H7;!h e126;aty yanique sharo,djo refaela p1FQ;aWeUiTnR;aRePie 1QY;! e0QJ-e2MD;e,s-arielle taudN;isy-th2AVlRt;ie e2EPle,y;! 3K;aRelCile2DJ;l0MJma;! em2YleR;!-04O;ineRoCN;! m2IL;aXeUiRuan y2FP;aSnR; KMni2AI;!o 0S5;l1ERnR;aRia,na;!b;ly 2HZriah mikh0Q0vRy5;i2H7rina0OZ;a0Ce08h05iToSrJynR;n,t2H5;lann-12Ire;am,d00lWnSssaR;l,m;g Tifr2GJniRo0t2H1;eRfr2GI;! faithira 0PS;chun c271yu charm1OA;a19Edaigne-key23Rhel2FRiannah aby2KSlRma;aSiaRow;!n1UH;!mi0;aRe22Ymaelle0KJ;d,elle landy hay2GG;itnRydy5;eyRi,y;! ann-eu1XB;che2FKdnesd24Zi zhJli1A1ndRst2B8;a1G1iByR;! Ram;chinelda foCXvalentina-th2AV;ad,bWcte0derly nashly jeIfVhi2KEji9m5nUrTsSthR;a18Eetiiostha v2;ia,ko0n,siA;d2J3is;da,isha naki27Qya;a,i7o jo289;aTiR;go2KUnR;chiku20Ejuk20E;go2KSqu18Q;a13e0TiRyckt2IT;an0Rc0Ad09en0k08malenthiraJ5n07o02r01tXus9vRya2HJ;iRyan2IT;aRen1F3;!nR;!aSe,nR; 1GRa,e;! holP;aTtoriaR;! R;nerazzur6p2;!l4ny l.;eld2IQgin4;lRna;a,etR; AW-Da,tR;a,eR;!-sylv2;a,udhi wag1F6;a,tor0P2;a,eCya yonzo;ha6k05toR;ire03rR;iSyR;a,nje2GS;aRne;! S-R;lEna27Tro3;aUce1Y1f29Xgil2JCis25Ul7mTngoc tr278ro3sSurielle-chr,vR;ero1ERiol2GY;tNVvilJ;ar2ATich0O7;nRu0IY;aRne;is mad1VSleeyaQK;! cresc2D9;iByR;! e0B0;a2HUna;da,e,ga1DAka,lZnYrSsR;elinVUna7;aVnUoniR;caRka,q2DA;! R-D;chi k23Dkry0GY;a,i2G9;!-2HH;dHus;ma,ouryann1W7;dex-ludnilla jus2CTea,i0DlYnVrsi2JZsSyR;da,la;h7iliRti-twumwa5;ki,saR;! romanov0;deliah wiXQesEXiSnaRya;!r171;a,enan emeraude 1YOsa;a0br04eRi2EP;nWrRs2JQ;iRy;aTeRya;! est2EL-R;f28Zni1XX;! a15Ine;cVtinR;aSeR;! ju0C7;! R;a1JVcatTCg263jOZm2F0ro3;e,iaR;! l20C;un5;a0sha2DY;asheshk2CJdMl10GmXndi0rTssiStRwa3yen nhi j26Z;shemaRtu25Russma1YA;shk1G5;iRsuA;ah,elR;!leR; m2F1-fel20B;aRme-habi1Z7;!iR;ma,zah sh15S;a1Pch1Me16h0Pi0Do09r00sZuWySziR;po1FArel fr2CQvi; 267aSpha1rR;a,en abi2HR;h-suzLnRr5;a,na 0LA;lSraif5shiyah Ryet 0BC;ar25M;a,laug1ZD;hinguta U3i213owenha3;acYe5NiSu2FRyciaR;! q1FQ;a0ciaVnTsRx4;hRta;!a1PTiKya;a,iR;dy-j3Ety27J;! shana adeni1Q5;ey,iBy;by,leJnTrSuRva;ka,narM3;a0Q9i;i2FZya;aWes4fVguidUh7kwaach15RlPmTnSowenno3ph1ASrUshaRt1OHwaICya2EMza-271;!n2; hinIa,hi1TVw5;a,ea;an1PV;a6fa2C3;!-Dmaine b1KPnTrR;aRi-li emer0BMyh;! 16N;aSelCnaR;! del0HB;! nIX-D;aZeSiRomasi0r1XR;a e0XZen k29Fpi2I1y26Azi2I0;aVl26Inu2C1oUresR;aSeR;! teng0V5;!-m2DH;!do6f2D2;! michael mo29R-Rl1WM;jayne l0JPro3;fathLBis,ksig2H4lUnTrRshv1Y4;aRi0;!h,jie-milDV;a,h,i0ya;iSlya no5yR;!a2DWsha113;aRe1LMsO;! yane2C8;a05g04h03i00lOnnessEoZrXsTtchen0HIv24DyaR;!naR;! tP0;h2GWni1ZCsR;! m21BaSie,nR;i1ZAy1ZA;! 9Ih;eRi,riB;sa,za;do6na;aRoker00H; ZEkoR;ianakhJronhiaketskwJ;a,ila-j1QP;an,r0OS;!gIira-justi2DC;aSeR;fig2A8rgnim14H;kounQn1T8;a0Rb0Qe2B3h0Pi0Nkar0Ml0Am07n05o,paKr03sXtWvay9wa0yR;aUc1V1i6lSma,siR;a 0DDr;aRor;! reign wastes7Y;! ak56;ia0um;ha,miahVnRsie ange k19V;eemTiRu1WXym;mRn;! thobo,e;! ahmed-w0LN;! m284;aRh13Xr1VGyn;! l1G3-l2GCnn1S2;a,eek9ha,iRj0FTw2DOya26L;a,ka,na,s9;aSe6iRm1NVra,y2B7;!ka,la,ra;l4mi,n29Tra1BX;a01iWlUohserenhaTyR;!aRna;! rin28D;wi;ul5yR;! paris tab1UG;!aSe,nBthaRy5;! p27E;! oShRn24G;!-g2C9;m2CBrP;! an2BSny-s10Gr;a,onhio ke0TJ;akorihonnienni20Eb2F4ma,na,sR;ha1K3s2;el,ira binte maruf;at9ea,it9yt9;ib5ra;a5Vc5Oe54h3Ki2Rk2Jl2Io17p15rish28Ut0Iu00veZwYyR;bWdUeda TlSmo1nnafErR;i1ynnaHJ;a,ia,vi8;a198f21Pmir9zaLY;elCneyRra;! le2DP;el2EQil2EQ;a6e1U7;a,t0I7;!e07h05khroop,l04m00nZrYsTu0zR;anRetQie,y,zanne-r1CF;!a,e,n8;anTiR;!eR;! ap0O1;!a,e,nR;a2FCe;a ebr2BLbi,iBy;d1YQeeKn1S6sa;aTmerR;! Rly e1VG;aWNcarlyC;i7ya2F6;mi naho1CRta0;aRi6ry07W;ni,s7yA;!d1H0llen1GO;a07eR;f03lWphRv4;anRyB;iRy;a,eR;! R;a1ASf24FkaQmau1Q8oni1VGv6P;a,lR;aRie;! T-R;ben1T1jo17Cl1QYmRro3;ax;la27Rm2ASnha-0Pro3sRt0RZvi2CC;eoe283ue;aniRfy;aRe;! mi210;cSe253rRv4;!ei2EQla;eyTiByR;!-R;malaik5s0CS;! laws2BH;enc29JlendR;eur-divine oAiG;aFf0Th0Rk0Ol0Gmi1n0Dph01rUs1W8uR;he1SIjSk9mayRndo1D2raleh sarah hafVVwai1UL;a,yah fatou6N;an7o0B7;aUb5c9eTiSyR; b0XLa;a1ne;na,ya;!yaR;! R;ayanna maev4ha0YT;iSyR;!a1;aUeR;! S-R;an1la26Zro3;harp291regi1simo1;! T-Rn1;anRe2DMjeLlEmilani7ro3vi0;aHge29O;ele2DEmaroi,ro3viRys24G; Rta;uyJ; ar7dSgul 0A8iRja,o22Eya;!a,ta,ya bi1WL;os,ra;!aXeSiRk28D;nBzah b169;aTdad l1PRil,nR;a,e,nR;! ix2;!nR;a cali1QPe;ia,ne,r0E6;atl2AMhna R;diarra Rmariama bou1XB;bous1ADf2BC;a17CeR;ilia amore njieg,me;iRya;aRya;! T-Rn1;an1e1Q0irJka204maRro3;e,r2;am22JgSl21Wma7ne1JBrR;aquMo3;ab29Ai28Yra29F;eynai0X3oKL;aXyR;!-VaMe1KClR;aSeRie;e,r;! 0M8rR;! maforbih,-le3P;g291lE;ina-na0IAya;a0Fb0Ed0Ce05fa,ham21Xik267ka,l03mYnXoWrTsSyaR;!me;il7si;a1TPeRi1ta;en,lle daRm;vi0;bhIu28W;ac1K6dy;a,i,onUrR;aRit;h,nRt 1ZO;!pr0K9;a,eGPne;aRi1la,oe,v2ya;! may28O;la,nSrR;a,ra;aTnaR;! R;jenif27Emi0MFr01B;! R;c00Fm28A;nNraR;! m27W;el,ylC;!nSr,si mR;ic1U4;a,naR;!-p23A;a0Ee02iWo0rUternaTuSyR;an1la2BYrelle k25O;bhKniE3;! menuc9;eyaRi7;-0WZni;f6iqu0ZDloh09Uma mazu,rRvayaa teey209;a,el,lR;eyRi,y;! S-R;aFelysE;morHxianwJ;a,ba,e0i01kDSlWmeArSsdy ann mir14Xun,yR;a14Bn29J;da227iTley Sr1J2ylR;! noem2;a0S3nip0Z3;!dIfa,ne;by,cy,ia,lUsRy;eRy;aRy;! de0IS-aF;a,ey,ie,s205y;la,ndM;d0Le0Kh0Ii0Fk0ElPm0Cn01olLrUu0vy,w0ySzmah naR;hi6;a1lRna,oni 1YO;aWTee;aWi,lSonRr289;! zena-hono22Oe;eSiRotQy20A;a1e,ne aure1NQ;e,neR;! hyl1Y1;!np1Q3;aZda,elCiVnSon151yR;!lEss;aSonRy;! tanyaraoz1MA;! aU-m1UC;! Sa,eRmJ;! lorr1DB-p1UO;aRl1VB;nne-chr1SK;! M9a7el-IJis,yaR; i1XJ;!aRim,rut9yr5;! a1RYelCi6;aika10Ei6;lNma,nRtr2A4;a,dRi;el shos1SGy;d,iR;da,n1F0;lle leLm4;e naia lati0G5ha;alyah 167b09f08h143l02msemi27Tn01o00pho6rUtTve21XyR;chHnabouR;! 0DF-a1A0;aye1PJi7;aUenRi1va1y;!aRi0Q6;! R-sa21K;a1JQmetrN;!fi0hRpIDy0L5;! j1JU;hye277you1YF;!a,na;enSiRma,wa;na,p9;aRe;! g1WU-R;ma1GWrR;o3u1H7;i0ora ben1RA;asti1BRe1MI;arletUhSilia be0SEotlynR;! jaym24P;eRnei148;ferine tr01SkBXlumielle tinbn1LD;!tR;! R-De;ro3s21N;a2Ob2Fc9d2Cf27ga,h26i24j23k22l1Wm1Cn17o16p12r06s01tDTvWwVyR;aRda,u29T;!nR;a,nah R;sk26Y;da,y24O;anRy;aTnaR;! aubRh;ut;!h1YJ;haSkiaRvi29K;!h roxL;! R;aRb.,jon252su19L;liana0M4ve1ZH;aUedo0JLgu1NKiTker12GraRv2;!hR;! khoze1XV;na,ta;! 0F-0CdjEhTiRl28An;! R;aVFs1G8;! Y-Ri,mE;aWdanieCeVj0Ak20LlSm1ELny,tR;at1VYhille23S;au1TEeSi1oRyn1;u,ve;ey5;li1T4ve;dr1VTlice j1IInTX;aYbel0PGch1ULeWg255hVjUlSmRn9U;i110ohammed ali m;e5ouR;!iO;a1eL;a0P8in27N;lRmaP;i1SVy0;bi27LlR;aRyc2;ku;e28AjSk0UYlRm1E3ro3;ee,y3;a194eL;e287ghSiKl2pRs22W;au249;az1XSyz0XJ;atie jukeeThR;iRy6;r8ya;pa;ir3na;aTdRi15Ojhp1N9na;rRy;a,i1;!aRe,h,ya284;! 21B;!a01iZmYouhan 08RrXsa6uSyR;!a,ukkt9;a-z1T9elR;a-ort131lR;a,eR;!-vR;aler4;awiy,eJin;arrydji,y1F7;a,e,l7na,raR;! j196h;!a,elCh,ntWrUyaR;-lSh R;ashlNlaury1;ee6;!aR;! ma9h;ah beatri0HXhaR;! R;a1L9lyd4ni1M1s1JP;aVeUimaDWl1KEmaTo1PJsabeeAwa,yR;ma 1ITna kR;he1VQ;! deJ-08J;e0ha;maK;ina27Cu6;a,d5ee0;a23Sda,ge,nRt26SyuA;a,t rheaneX3;asra keert1P4i1NI;aUiRy1W8;aSra1KVyR;a,ya;! b0QIt26A;! daher diri24Ha,e,r4;e,iRorah mikens1QE;a,eR;! a0XW-1ZL;a,elAiWouma1VOriR;nRya noM;aRe;! R;anouch272lR;eiAuc2;a0ha,le,nR;a,eR;! c0Y7;ja0RHnR;u1J1vi26W;a3Se32h2Ui28o0AuYyR;lUmStaR;j,l;!aRe;!s3;eRie1WOl8;eRi1L1;! g22T-aF;bXchWdr5hi,kVmUqa7s1OCtR;hRvi;! Rie;bethjacOdawit;i 1TIy;ia,me25X;my,y;a25Vby,iUyR;! R-L;chri038j.,mR;ar4ik0T3;e,s;a23Vb1Mc1Kd1Jf201haIj0TOk1Hla1Gm19n17oha25Qq16r1J0sYuXwWxUyaTzaR;lRn0;ie,yB;!l1LY;an05RiRy;a ka1M7e;an,e0;d24Fgui23Xka7ma25S;a0MeWha12MiTl234yR;-aFanRl0TA;e,n;eRta;! R-e25K;e0EOm12O;! 0D-03a00e-a18LlVmarStR;erline mika21Hta;ieRy;! eR;lean23T;ai1iUl8yR;!a,nR;!eRn;! ng0KN;a,e,ne,za1Q9;ly,nnR;!eR;! a1ON;aUeSmaRol0XR;e,r4th15C;lRm1FFva;ia1y8;bViUlSnRya;chi3n8;ex4iRy;!ce;l4meB;by,elCi24F;aSelRl249mar1VPr-0XBvi22Q;e1MSi1HX;imEm1YRnn1VP;!-00bHim1OGlTnR;aRe,i1PFn8;!-0WW;ee,iTl1HTyR;!e,nRss;!e,n;a0YVce,eSnRta;a,d22Ke;! R;agO4g213rengs1VS;lRro3;ee,ynda jacquel0S9;a7ua7;da,gy1XYiRn1B1;!a anne6Eda,n,sO;aUea r.,iTm1HHyR;! R-1VJe;pi1ZOw;! 1DSe1AAna;!nSysR;a,sa;ce,e,nB;!n23D;a7hayaR;! 1XZ-EY;ina af1G1ri0;heRio;lQHn24G;b0RSerKinRy20Q;e-jane karl0YQshi7;a0Ac06f1MOha05k1HPley03m02n00o,tTvRwa,ya20L;a,er,kR;a244y;aUeShR;a 1DCi249;ge,lR;! rah01H;! joIgBjSlR;! 1HZe;!e,j;aRed;!dB;!a0XVe0XV;! R;le1S2ro3;m,n1X8;hSkRoC;i,ny;a,eR;l22Rre,sse diben1R2;!nR;a den1XMie,ne0ALs232;aXeTiSoR;da,nKV;a1R2ta;aTmaRtt,ya;! hiR;la1TN;!ya0;ine099ya;a0Fb07e06gin04h02i00jane-sherrlt,lPmZnTs22Tta,va,yR;a1T8hInR;a,eHM;aVeRka;eSsmR;ay,ey;!-R;an1hope 18Y;!d amm1ZEe,ta;i,o0;gnRlNn8zy;!-cWHa;a0mat R;ka1Q6sin1HI;a,eR;! kuya1PJ;m,na0D6se emil1PVva;a,eR;cTkaR;!hR;! yejoo;a,caRka;! R;gRh20D;evna valeA2ra1Z1;!gIn0;an2b0Rch0Od0Me0Kf0Ih0Gi0Dk0Clya z05Lm09n06phael03quel02sh01t21Yv00wZyTzanR;!eRne;!-nourDD;aTe,ha0lSn8sR;an mousOhe0FF;a,ee;!nR;a,nR; 02Na;anBen,ya;en,i0l1GN;a,mi22I;! s0Z6;a,e,lRy;a,eR;! sauvageau;a,di,iRy1ZX;aRmB;! en18N;atRl5o0;a,ouR;!la1ZF;i,sh18A;hana8Dma,n1QEtzel az6yaSzR;el,y; isl1OS-sou1L6;af,i1QLmaR;!-f1YM;aelRfa1XM;a,e,l8;!gIlRya;le,ynn deb6;a,hika RouI;ra21B;aMelRi20N;! veron1UXe,leR;! nambuA;ab,i5D;aZiVuR;eenTiRods;a0nnR;!zM;cy,ie,slN;anSngRva magda1JO; y12EwJ; Rjin YQ;yuI;adira ra1ONrq12Ott1I2;a0Ve0Jh0Bi09lanQo07rRus213;a04e00iSo0SNuR;d1UBnH;nVsSyaR;mva205n21D;cRha,ka;iRt7;anne sato,lN1;cessRdar1WU; R-meri200e aeline k9;hN5lUP;ciSeya MDma,slR;ey,ie;euseQ3ousR; ce1RI-Y1;bh 1O1nR;a7j1Q9;et-m208lRmpin1PLppy,rt2tip9;ly,om ly1QV;aRer-giova0hu,na;!-robenc4;aXeWiUoeSylR;is,lis;beRnFU;! 1NC;b4loR; 0VImJO;by,lo1UInyx;jangi20Pnie-ke0V1;a01g1GJnYou do1QPrTtSyRz4;n1DFton1KN;it brua1IDra;el,lSrR;i1y;!aRe,i1yn8;! R;es0HQquetza1V3;da,elopSiRny;el-digbS8n0H1;e,pe;ce,rl;dmi1ZRei1ZQge,i07lo1OUm05n03ola01rYsXtUulSvesh0yR;a,t1X6;aVNeRin8;!-an1HWtQ;ieSricRsy,t17I;a,e,ia; shalom e1VDnce-07O;caCt060;askeviSf06Ais1XOkerRva1SY;! 1SH-D;! e1ZG;! R;et0lucia antone0CQ;agiota ker03Udo6iR;ngarq,z;!elaR;!-015;geRslNt1WW;! QU;a17b021c0Yd0Vfe0Uh0Tk0Sl0Em0Cns,o0p08r00samuyimJtulie maell1CLuUvTxSyele kaian eRz08X;loA;an1T1sa0;ie,o meira k0RP;ard2b5lUmRryT6s1AV; koult01IouRy;! kheira kha1QW-1ASlR;-khai1PNama ben0;e1WSfa,iR;a0maK;aXelWiTlRph1C9s9tiz fernandO6;anRy0NL;da,e; ephrSan1WZelRoC;is,le;ai1H8;ie,le; 1PU-joL;alBhelR;iRy1WU;a,eR;! b11P-D; SLa1NPbelR;i1le;a,e02ga,iSl4ov2uwadarasimi my6weFyR;!a,m1P9v2;an1eZvR;a,e,iaRya;! T-Rne;jRro3;eLoy;aTchanmaPdSg.,judi1PUkrystal1OAm2ro3sRt.,yan1LH;.,o1AE;aye1TI;la2;! carliK-hI;epe1YTnR;a,na l0M5;eli chieOik153s1S0;a0ore1FU;ePl3Q;alEeRiC;lRn1tteU0;i8le,y5;eRh6tavi8xa0;-a118anRli8;!aWeUnR;a,eR;! R;abyW8eP;! R;djene1EHnirinas1SA;! wolf;klRna;ay,ey,yn1UM;a2Wd2Se1Tg1Rha1B0i0Vji1EDneka koo6o01uYwiGySzR;elle nzi15Uiako annaelle la1L9owaP;aVi1MQlUnSra1Y1ssaR;! rosYD;ahRka;-m1U1;a08Vee,ia;la aFMt;ha,i1D2mSnaru1CUsR;aifa n1L1ra ja0ILsei1E4;eria lady minz,id2;a0Ie0Bgodjon0GMh0Ako0VEl09o06r01tt4uUvaR;! m1TU-Sh,lR;ee,ie,yB;lEr1X4;biwo audrey lou0ha h1T1m142npagnasoVGrR;! V-alhou1WMaUeThe1iRs8G;ah shekRne;in5;!en;!lhoda mar1KEne;di1X0mag15LrazIz1UG;aTci1d,eSiRma;g,ne;-zineb,en,iHl2;! 1I6hRl1AA;!-b17O;mi,rR;! R;elyaki1f1JAka1KH;a0RAweF;a,e0UU;e,lVmR;a,iRyB;!a,eR;! R;k1LFs1RK;a,iRl1D2y;a,e,ne,se;!-bHhRl19Wmi;!-m1GF;a0Kc0Edehy-myr1QOh0Ci0Bk07l03m02nYsVtTv2yaR;!hR;! ev1JB-luv;a,ehinaRhi7;!n-joP;aSh0PXkaRsi 1G;! carolPK;!li;aRon;! R;isab3VmaR;i0r2;a,e6ra0BL;aSiR;a,yy5;!jR;a HKha;a,iRkVX;!-0UMtaR;! R;jaGs6A;b0JXoherasa h167yI;aRel1VG;l,r1CT;hVk13RolR;a,eR;! RtQ;m1RYstR;eph0OR;ar1MRoC;!ley anissa zoNmR;a159h;atia hendaRoc OQuyen 4N; mUM;a1KPch0Oda,e0Kfe1QTh0Iila0Gl08m07n06o-nathan18Xpht04r00sYtXvUwlNyR;ama alai5la1VZrSsR;a,ha;ouz;!aSeRia;!ly;!ll4ya;anya g0A9en;ri1sR;a,ia,rine1SO;iRlJQmi1;aRsOy5;!hR;! k15W;al4halR;ie,ya;a,e bam12T;a,ma;!a,iWlSyaR;! e18B;!a1B2e,i8yR;!-SaRn,ro3;!n8;a0M7ro3toudamdje;aRne;! tit1I6;! R;aKKitza0OJja1s03I;a,emyah-makie3iR;r,ya;b0IQlaSmaRva;! turn1QA-0DG;! altaR;grac2;ama0QNu1JR;ate ngo1eyeRonfack01Q; R-fa07X;aBXf1SZkhod2marRrok1O4waG;eme oulim1UIie; fa1EVa1Qb1Od1Je1Cfissa1Bh17i10j0Zk0Xl0Tm0Sn0Pom0Jr0Fs0Ct03u6v01w00ySzR;an0IGek,hreen l1LX;!aWelTir5lRra,sa;aRha;!a,h050;iRy hant1BJ;! Re;j14EyidI;! R-Db,h,la,ra;mi9Oodeymine0PF;ell-p0T3la;a,iRya;e,ka,ya;aThaRtie marb1QC;lRnaH;i8y;c9lTniHsR;haRya;! ru1HR;iRya;aRe;! a164;i9ra,sRya;imRou; zah,ah;aSdReh,g1P3jis1J5od;i1os0UH;!aye18IhR; f1JPy;iRyEQ;! UeR;! R;brookl1R9en10KjR;ol4;ariel nichoCi0NIja0UNngob06Mol16Bv0EE;aT6cRd0QBe00UklI;iLyR;! mohamed yaf2-1PS;i1m4ri08U;aTeSiRy5;!e,y5;eyah 056ya;! 17Vh,ni;is9shatR;h6ra;ia18Sla041wa;!a,ca lourdmy5dy6kaVlSmaRni1TUri1MOs1LH;! 0M1h cam0XG;aRee,la,y;!hR;! st1PT;!-zeR;in05I;atTeRi05Aomi an17Qualie-lu1;lRml4r;iBle;h g;!t1SI;-PeAlUmaTs9vR;aRia;! kimSNh;!-jhen13H;a,ie,lRy1HM;a,eR;! alexandra kJ;a,eUiRja6ra,ya;a,el,nR;a,eR;! 1CA;ge,ne;a,iR;ha,la;nWZra;a4Yb4Wc4Te32i0Xma148o0Bpike arielle pri0ArignaTCu07waju1HLyRzaliwa1QP; 05-a141a03dje1JHk01lXna,o1T1rRs9za;aVel4iRka,na,rh8tC;-aFaRem,ol-a0JP;!de,mR;! R-neh17Pe fathymZG;k0CIsarah kadid1MY;!-1QEh1P0l4n4;aSe1QEiR;a,e1HSv2;!hRn0MG;!-alai7;aReAha1RD;elEH;! wattsiserenhJ-Rh,l1NSn1SPrZW;a19Res1NLjaGk1K2lEro3y4T;juliL8la0;j02GkKlInSrRskItmai0D6yisa hel0X8;griGiYG;aj1RXia maguy;sc;a09h07i06l04mo 03nXrTuR;igni alaoui kiy1F5my0H6nRz0;a,i6ta9;aTea,gSiahRlNya;! edJ;anB;h,ne;aVe1MXiTla divine larSr1DDtimou elian0Y3yR; e1EOka;oc0ZN;ca,ka,queR;! 164;!-segueM3lP;regi0;ka,lRy;ie,y0ZA;ra1I0sa 0A6;aRe6i1GJ;ee,mm1MG;naSyeR;! marie k1CY;! aneA;a1Ic18deleeyah-md1LPe16fi,h14iyobin neesha-chIk0Tl0Emi,n0CqueArYsWtTyR;aRk5;! 19S-Dh,na;cShraRsou 15Qzi; guruprasadh,h;hi0;ai5haRsa,ty;! 0CNll-wah0L6;aXberlie-hend0SMeViSna,oAyamR;! fai13S;!aR;!mR;! cha17L;iRla;a,lC;! Wb1N2cClUnRy;daRe;! R;d.,elK;! Rie,y;he19E;g1NGzoe a7; 5aRdy,er17Bh1JNn4sa,tou ba17D;!n sara-light,y;aZdr1LOeYiWkk,lUoTurtuq,yR;!aRna;!nn;!w;a1H2iRy;!ce18Ue;aRca,e-D;!n1GY;a,dy,e1N8na,y17L;! U-Tfa1O6hSnR;! tasn1ICa,e,ia,n,ya;! 0J3-D;ev8g1N1lili1HSm1H5ro3;aRg.,m1MFro3scarl15Rvi1OB;is9le0RFmary1E5;aSoR;!n1OI;!-13HelVyR;a za7laR;! R;eRjoo1NO;ndz4speran1D2;aRl8;! R;a0KUcamRm1PS;ilA;aly fai1CXrR;in0USum5;lAnR;m0GEsah nais fave1DF;aYhSkaR;el0FQyla viazC;aelSelRkeQla;a,e,i1le;aN5lR;a,eR;! R;jaGza7;elRh;a,le colli0KP;! V-ShRly,n06Do yi1E7ro3; moe0y;eSjaGk1HGl1P1naMro3sRvi1NI;ava0AL;li1A2s0M;aWb1LKcaUg1CMkaG3lTmSro3s1K9vR;a1BGi1NE;elek,ikTN;ayAea0i10V;ssa1HGtR;ha1OE;leRn0R3y0EF;ss2xa;a1Ed1CekelICg13h0Zi0Yji1ke1OJl07moon5n02rSva,yRzi0;gIlia-adali12Imo0ra,sO;al,cZedYiWlVry naud12Fs2veilleTyR;amRem,l;! mo03Ie,on;! R;de diHEmakoudj1OK;e1ia;am,dMemRsO;! a1JA;i1GDy1GD;ed1K4ia celes1HL;anga-an16Ie1DIgqiao Uo1LJuR;cha StanR;!-MB;es1K9ra1F1;so190;a0Ge0Fi05l03oXro3uWv4yR;-aEEaSka,naRssiah maheP;! ol1DT;!-DnR;e,nR;!e,na;si1;dRr0CB;iSyR;! ree3;!a,eR;! R;ay1KNsamuH;iRy0SW;na,sa;-DaZe1DTkWnAVsR;aUsaR;! R-j1D9;aRni133;bi1NVnn;!nd18Z;aRe;! R;mer1EZro3;!-Dh1DKn1JYro3;a1OEk;ni8t;!ka,ly,ra,yu;er,jabeen-af181rR;eenRi1;! R;sa6;!anVg4hRis;anRe0W9;! R;chIesmi1GCjRtiah0v0J3;essi1LXoy1KG;! juTeRne;! R;laur4ro3tame6;b1IRde;i1jR;e-l2;!gRn09A;anRhan7K;! cassa0SJ;kRlyF;enRi0UJ;na,z4;aRolle 1CK;l2ya1BZ;a86b85c81d7Ge6Vf6Ug6Ph6Di5Rj5Ok5Kl4Nm4Jn48oM4pCr1Bs16t0Yu0Sv0Qw0Nx0EySzR;e,ie;-0Ba03be00Jc4d172e,jo1IFka02lZrVsRte,va,z4;aTen,o1H0sR;aRem;!e,m,ne;m,ne;aSiR;d2ne;! yRl4;aneP;a,ee,iRo1KK;!a1JRe,nBsR;!-SRse;!yA;! S-Rh,lina j0Y3na,r;di0BIro3;aVfabiola-eud0AMi0BGkolyLlSmyr1IZrAKtini1NDviR;ct1KUd7;aSuR;ci0na;tiSSurM;biL1naH;aFlE;an1KQen1JDiTyR;mBnR;a0K4e;mTnR;a,eR;! k0RV;!-eQSeR;! R;e170r.;aSenR;n,ssah katths d1K6;!ssa09L;ee,iRyB;!e,s;dUrR;aSeenR;! yanaelle l1HU;!h-j1L1;!eR;! L5;ea,hViUsa,tSyR;! N4l1LE;ea,iR;ca,e;ld8ya nu6;ea,ildRylG;a,eR;!-elvi16P;a,ilye-b1I0komina-k1DToka jocely1sR;aTiR;a0LTlRva;ia,va;!ba;a2Kc2Gdi7en,g29i0Jj0SSl0Cn4qu18Lr18Ks9t08wa,yR;! 06-02aUbe1D5em,ja1kaTlSsR;a,e,sa;ee,ie,ouDW;!-e1LR;!mUnR;!a,nR;!aRe;! clara QF;! R-bato1GE;aSmouZVrR;a1GBouka7;mi6rJLzz1IP;a0g1I2iyoTjSka,lRyoeA;ee,ouDL;ane1ALoL;ne11V;ai6cla162gl1JAnammaay0N9;a,hTinR;a,eR;!-rhode chri06P;a,e sotong iBT;aWeViRoZ1y0FI;eRta-azee1KF;! S-R;marl4;nerrFZyaH;e,n8yAI;!y0;! 0PMa0UbRCeYja,ka,lWn8on,pi1GFsVtUyaR;!hR;! R;lo1KZ;a,za;!a,k9ol,sa;ea,ie,l1I6ouD0yR;!nB;! 0J-VlSmRst1GU;! mantou fou1D5e0WF;!a,lRou;a,eR;!-18T;a0Ac07e05fel04g1H4j03kDKl00mWnVpUrSsR;o1BMt1GO;a1ARoR;se,xL;erChilip1B5i1FY;ei1C3i0;aSiR;racC;i,uGxR;im,y12P;a1DPeSi3ouRu1y1AK;!i3;a,e,on4;aGeLosEul4;ix;lRstHu0W9ve;i0XCle;hRl0TR;lo0S0ristR;elCi0;lTnR;aHge,nR;ai0V2e;e0L2i1GN;aRcD6em11Ygl1HXjayHkarJno1HMoc0XKro3s1EQyedid7;li1GLnR;ge,t0C;! 05-03h01l00mUnR;! k0DCa,e,nR;aRe;! judica1FV;! V-bai0JSaTeR;! R;dewo,sarI;! R;bi12VdioulG;ahm1G7poupEy18K;ie,vi TEys;! R;edXkh0BC;cRes1EXgoret1CUjo3p157s1BRvi1HG;e0XGh0BA;aVch0B9danea s0VXeTfern1DHis158jSk0H2l0FRrosRso12M;an1e;e2Pul2;dRlpi1IN;uar1IM;de1FHli1FZntR;on2;aUeTie,oRretX8ueriteSK;!tR;! tien serN;!ry;rSuxR;! aS7;etX2iK;elTiRy;!aRe;! 1EEn1;a,i1l8;! 1BU-max1AUi7mSyR; chri0RKa;! s1DO-0NJe;a00dZeYha,iXnWo17JprQYrVsUuSviR;!tha venkatara17U;cci le0SLeR;!la;aKo;eeY0ooY1;aXZrQS;-katenJa,nu,sO;!l,sOt1I4;akranKie,y182;i1J3l;ad4e R;aSdiar6f1GUndio0Z4sR;afi0U8e1EU;ra10T;a0Ie0Chya c094i00kXlWoVuUvi0yR;!aSciaRe,ka,na,siah tW0;!-hecaQ;! ka1A6h,na;! isabeA;bX6r0VIu;ak,or0VHya-0AY;aRia,y;! Rh adeC;c1HBourielle-kad0S6;!aZc2eYhaWkUnTyaR;! 1C5hR;!-linds11V;a,da;!aR;! edmE-sorhay10G;! aR;ve18I;!jaG;! R-melody epoCh3T;i6Zro3tsaR;fo;eSiRk,na1I5;g9y5;!yahR;! R;cassie Rro3;da1HM;do,iTkSur4yaR;! fin0OPh;! 1G3;c9kaRya;! esther jHS;aTeRia,ly,o,yla 11R;nRrlie nei1I0;a,na,z0UO;m,yla1AB;doulineSolyR;-rose shawi0e;! solta0;-l0Ba0Ac09ka07l04m00naZqi,rWsTtRv035wen1E5ya,zN;eRhe;! elyzEe;aSey,haRie,sa0BLy;!-emE;!m;aRe;!-Rh-k0RP;anastLH;! is182;ounaSunaR;! khe09Y;! R;al1GSi62;aSee,ou jacqOZyR;!a,s;! ka0ET-D;! R-Dh,ro3;ro3se1FL;ha,ka,y;! mar1BE;ee,i0S8;a00eUiSoF7sa,ussede FMveen afOyR;a,na,tE;la-do1GRnaRra;!-s0ZG;!eUlRra,v02F;iRy15T;aRe;! is0XZ;!-lRka;ee,y1;itia anRy;niH;alUdaSgRu137;ie16Ty;!lR;en8;iNNy;al1FJerima al36;!-l0AdJiPka,lXna,ssara17MvR;aRe,ie,y;! S-Rh 1E6;an1dorcas sansa14Qmi0AM;agSeliLkaQliRros0FFvi1E2;d7ncN;at0NY;a02ee01h7iZlXsh5yR;! U-Ta,e,sR;! Rs;marie a1CHnolwJ;an1kID;bHedmon009m1CAnaRro3sara yoy132;ki7;!a,e,i8yR;! k09B;!a,eRne;! shG6-D;!-a0GN;!-elizabeth0RBne;ee,ys;a09d05eYge,iUl1D6oTyRz4;!sR;on151s1CYun;l14Kn0;e,ha,nTsR;an1onRs1CV;! lil092-16R;a,se;lRnn;ai1eineUiRynB;e,nR;a,eRn;! r01M;! R;fa149skyl1AP;a1DZiRox,y1CK;eSsR;on,son;!-s18V;lRyss1CH;ee,i0yn;ha,ie,kRy;ayAenzR;ieRy;! l07O;el,le;nRy;d1AZvi;a7Ve5Ai32lyana tHVo1Ku0Vwo0yR;a0Nb0Mc2di0Hl0Bn02ra096sYvSzR;! da0Z4;!iR;aRe;! S-Rro3;perCro3;mRro3;ar4ikue04P;!aR;!-m0KHnR;dreRne;! reeP6;!aYc2dXeUka,nRsN;! sSa,eR;! home1DGtQ;of2ybill ney0BD;! RtQ;anR;gel17X;a,ra,sN;! firdao0DC;a,e1BFiSoRu,y-D;o,u;-DaTeR;!-R;an1ho14Sro3;!nLA;aTeR;! bR;ev0LA;! R-D;donovJk07H;el,in;! V-DhUk15Tl4m1C5nR;aSe,ie,nR;a13Be;! j0TZ;! claud16S;aRkeyn2ludi02DshuenP;ly1BWnn;an12Ec03d00eYisaXja1B9ka,lWm27nSpRthien valkyr4z16A;e,iK;aRea13W;! R-m0AViAra;azary5em0VMl14EmRro3vy;ar4i1CC;a,u;! bel9;lRna;a,la;ivineRmiA;! R-r0S0;a7sa6;a,ciy124e00iUyR;! gS-Rdine 1B9;j1C4kaQ;ailN;aVeTlSnR;a,da,e;e,le;!-R;aFk151m1CV;! IVna;-aRtQ;ng4;a14b13e12gan11i10k yin 1AYl0Wnd0Vr0Htt4uUvR;aSeRia;die mdofuAli1B0rP;-m0IUl0Q5n4;! 0C-09an08b07c33e06is00jaZka,lYmi8nVrSss2tchina edoRve,x2;ui1;aPdR;e-neRjin9;ys9;aRelle12M;!-R;k14Mro3;ia,oB6;inBy1;aVeRian0LP;! T-R;br5FmaRy1CH;dDLr4;b.,therese-franc;! 1AFro3;lAva;a0T1na;a,e,n115y;aRe1CH;m1BHnR;a,ge,n112;an0rAXsarah bere0OD;-ePa02ca,eZiVna,rUyR;!anRel;aRne;! sareJW;aZOiB;!-aFan1A6eR;!-R;amb0WUrR;afaH;a1da0lSnRtK; 19Xa,e,na;ai,ei,ie;!in0S9lRn1ya;i19Yy;on,yn;aRiK;! Ryny-malC9;ceciPkamoR;nu;ka,s0G8za;! De,nB;l4va,zoy5;bo,el4;!ia,nR;a1BXe,nR;!eR;! vign18X;a1Sb1Qd1Pe1Nh15Aja,ka,l0Pn0Go0Dria 0G6s03thish1BCvVx2yaTzR;!-aFaRbe12WetQia,yMRziIV;!-0ZNn06;! kRh10Wn10C;and2;! 19W-m17Sa,iSyR;! curt19L-Da;aRe;! R-0O1n175;eSk136rosR;e,i0;kRstr17B;ate1T;aUeSi,mary 10Non,saR;!-195; RtQ;jolYTlar0QC;! U-TbeSnR;d0VSne;lCth;m17Dro3;he0Z0mR;ar4ei6;!d4n0RCraR;! lEhR;! debruchars;aVdTeRg y14Fh;-Rs0UJ;m175s17T;a,sRy;ay,ey,i,y;! S-iRh;ma1;chanRloreK;ez;a0Mea,i0Bl02o00yR;! V-RaAKbHjaGm07Rro3;anTblanc0IEem0SIjSk12EmRro3;ay,ichaM;a0BFoy;h,n0Z5;a0DKfr0EHjaGmaTopheliSrR;o3u11R;a katu089e;dBCe,y;h,uR;!-L;ah,iWyR;!-R;aTjaGm0TXrR;ae aRo3;nn113;nn0YT;!aRe2Kth;!nR;! tian-yXVa;! 00-YaUeSka,ro3tR;!h0ZEy;!-R;jeLro3;!-DnR;!aRe0ZAn0YK;! R;c10Ge0Q9m;an1jRm06Zro3;eLu2X;fIRro3;! b,-Rh,s10X;ro3so0LM;l,nouRv,zl; wen173;a,ia,ya;a,bRer0PRie,ni ru0H3;ie,y0YY;! V-m0T8h0LEnRra;aSeRn8y;! em3L;! R-D;benie bonk148e0PWk0BWva0VD;gY0ro3; 2Aa1Nda,e1Dh0i0Zl0Ym16On0Qo0Lra,sl0Kt0Cv09x00yR;-aFaXca,el,lRn5;aRia;! S-R;i26m15Lro3;c0Z4loQ7ro3saR;bRfa;ri0;!h,nR;e,na sibel158;a11Pee,iWxVyR;! 0EH-TaRe;!nR;e,nB;aFol01M;a,y1Z;!aSeR;! k08R-aF;!h,n16U;an0FHiRy;!aRna;! anaskI;hXiTtRyc2;iByR;!-JNc2;!ciaRss2t2z2;! R;eRm14M;lod4;ic2yc2;e0M6iBy4C;!l0F5nRon4ra;aTee,iRn0M4orDGyB;!eRta;! iku0XD-D;!h baLK;aWi,nRor8y16D;aUiBox,yR;! z0TT-R;madR;is15K;!-r6S;! R-De,h;bRTe0SNm146;a,ia0XJou,ya;a01c9gh00ka,lVnaTs9tR;hRic2ty;g,ic2;! QL-R;e181fl16G;aRi15Zla,ou;! T-ShRni; stepha TB-Del;al9Zmari8no0RJro3;a022chZMro3;!-La,sa;! S-R;li3sylv4;g14Cso0RW; 15O-annYaXbaWda,lTn15Qsa-15OvSyaR;!h filippi,n5;ia,y;a,oR;o,uR;!p;! mal180;h,na17S;! schaelle kRa;eu;! 09-02bDRhYjeLk0ZAnSro3tR;icC4oya massXU;aVd6e,iEPnRy;!aTeRy;! R;ammar moham0ZOker0XSz0ST;!-104;! r0QY;! T-Rf0QXro3;di0NOjaGkZMmi0XCrR;a0XBo3;k0SLmiZMvi151;bVfEjTkSlRm0CYro3;ee,o174;im,ym;aReL;de,y1;elCrR;igitQ;e16YkTm139roSyR;aman0KEise0Y8;my,se;im,rVP;vy;bib5c04Ed1Se1Ohna1Mi1Jke1Il1Hm1En1Co1Br12si7t0Zu08v03x04NyR;a00ck2iZka,lRn0DEs9t16Xza-f0QG;aSieR;-aF;! S-miZ5hR;! divine0MH;aTcSjuRm12M;li0ZI;hrVF;lAJye0U7;a,n0;!h,l,nR;!a16Pe;erUiRya;e,nRolette anta an13P;a,iaR;!-g0TF;a,n8;rSsLvR;elCia;!a08eZiUryTyR;!-RanDBe,nFG;aYCe167ro3; fE-aF;a63eRlTSne;! T-Rl,ve;a096cRdaZLjaG;athe0XS;d0M4kat2;!-Yan13YineWlVnRtQ;! dor144ceRne,t;! aR;shR;an0Z5;!i8le; lR;eiA;an0e0C7l156;! V-Se15Ri1lRn11I;i13Oou,yB;eRg124jeLk0XIl1Uro3;mRve;il4;anRjiOFkaQmuswam0M4socheaK;dr0ULw123;as9iSoR;n7ya;fa,s9;aUiRk;n,ssaR;! viR;anN;! T-R;g11RmaRuapI;e,x09B;bautisKe040g11UjR;an119ul2;n4ra; xSZaRna;! m115-D;aSbQQiRys;a,na,s0Y3tK;!r;iKlaO4ou,y;esha d0OXis9s9;a,ba,ga,ka,laSnRra-ve0GZs12Z;a,ey;!-145h;! sR;yl;ka,la,tR;et2iR;c9HtiaRzia kF9;! g11C-Q5;i-liz0PRon0YG;a4He2Gh1Xi10l0Xo0Opad0Z6r0Cus0Bva,weyo0yR;!a03lXmUnTrR;aRiH;! guenaelle 0NFh,in0;a,lE;!b0BRiR;aRlPra; 12Gh-cor54;aVee115iR;a07KeR;! R;l0TFrR;e0XGo3;! juliane palatK;nUrR;aRra;!-aZWhR; naelle12B-jeF;aRe,na;! R;chanMflo0OUg10Lj05S;a 03Ghitha mohI;isSushna0Z5ystR;al,el,i0;!hZtR;aXeViRy;!e,nR;!aSeR;! aZK;! talRP;l138nR;! ab0BC;!l;a,vi;il4nstanYrTsSuR;assi miensah el10NrtnN;i,sa6;aRiToto5Zy1;!-lTlRyl;ie081ly,yR;!an1;ee,y;ce,di0;a6eSoR;a1e03R;a,op03T;a0Ge0Ek0Cl0AmYnXrUsha TyaRzXQ;n0raR;!hBW;cTYo088;aSi,pa,stR;en,in;! edl10Qme milel emilod,n;aalC4slN;! 01-00berlWiVmTyR;a,lRrH;ee,i8;i11OyR;! leeQY;!a,ly,ya;e0GOi,yR;! R;m10EyaR;niO;summ0YB;bry0Z1ly,my;ey,iRla;an1na;iRo;!araolu;rRvB;a,ra0JNstJ;!nTraR;! Rh-0H1;jo3marc4;aRn;! R;maRnat0R5;ud;aXeUi6loeTrySus128yR;aSYlie marceAra;stM;! g0Z0;iraRlsNyA;! R;lu0;dViAlSnh li0DQrRwA;diata aminaKla0WK;eRi0OX;esiRsi channM;! n001;iTyR;! R-l081;so0E1;d0WKjaR;! Rt11H;lina afRndiaQ;af;a1Qc2e1Phlan1Oi1Hkeli1Gl0Ym0Un0GolPr0As08t04va,ySzR;al4ia127;a01isOlSsRth tha121;ha0ZPs4;aTiR;anRe;-T4n;! SnR;i,ne;aSjuaR;niK;l0JArR;aceP;!h,n0;a abiTchna06Uli0YPsiaSuraR; slim0X6h;! tchomtc09D;gaM;cy,hiaRsy; naom4;a,eSiRri;!aFsO;enn-0EJnR;! S-maelys adjoR;ua;a0ITelOm0YP;a02dZgny-d0VIia,ly ir0JRnWsVya,zR;aRie,y;!h rR;apR;haH;lNy;aSeR;!dy;!l4;aSrR;a,ia0;!h,ll;-mRd4;ael0WF;eeAgo kerene SiRo,u0WW;e,lla la10Y;auR;drN;a07ey0YRh2i05lYsWyR;!aRna;!h-ra0IGnR;aSeR;! b0ME; j0GP;eyRie,y;! c0HI;ey,iWyR;! U-SaR;! J1n0FM;anRj0GJro3;ge,nB;j0GHketour5;!a,e,na;!aRya;! biVEn0W3;h0UKiy5; perA;laWma,nVraSshaRth k04R;! tumbUZ;! R;athRc0LM;ee0;ay5; sX7ni;i,y;-a0l08Wna,ya0;cy,l2s0B5;a0M5c3Bdi37e2Zgom0R8h2Vi2Hl24m1Un1To10Dr1Js1Ft0Lur0Kv0Jwt0HyR;!a0Dc0Bd0T9e09lTrSsRtl0XE;ie,s4;a,ilia nayreJy5;a01eViRla,o0;aSeRsO;! impano;!nR;a,e,n8;a,eTiR; F6ghR;! margar0SK;! R-Dha,n;lRro3;oe0G1;! U-WDnR;!iRne;! Re;e0FXka08X;asifiD8maelys keug0B9olS2;!sha hud-dR;ai0ZT;eeRie;!-kamil7;! Sh,nR;e,ha,ne;els4;ar,hR;ar,er;ayaeh lond0WGiK;al4;a0He0ChZiXl0WKni0JArUsu0G3tTyR;!aR;ya0YW;!a0Y0; enna0Y7iRy1;c2naRo0;! cuc tiJ;!a0VKeRna0CU;! me01A;a01erinYiXleenWrVyR;!-R;madR;elR;ei1;i1yn0WP;! LD;e,ka;a,eR;! R;cl084ho0P5;e0X8lRrLZya;ea y0NEi0y0S8;! 0Q6-TlSriR;! a0TYna;l,yn0V6;joRlyFvi0WA;haJD;lRna,ri0;e7i0S1yR;a,na mary 0W8;mi6sR;andr8iSyR; fEa,o0OS;dy jordIe0NKopE;a,cia-leil5eZiVlSma0CQolRthi0AQyn;an0W3i1yne l0N5;-piX3aRie,y;! tiffany phil09W-jane anahR;riK;!a1d2maYAnRsOya;!aRe;! R;i0F5r036;l0X9n;dS6k0XAto nomeniavo,yakuma0YA;aZelYiTyR;!e-elly0AXlR;a,ia,l2;a,lR;aRia,l0UI;!-Rh;alRma7;eja0PO;i8ya;lQYr,ya;a02e01hIiZlWtUyR;aRna,ss0MT;!nR;a aby0X1ne;hoR;um;i8yR; stR-aF;eylA;!aRe0MPla,na,ssJ2xa,y5;!nLY;ah,i0C1;!ne,ya; 3Va,diMClXmM9naWrTsStlRya;in,yn9T;ey,sy;a-PViR;! awenhR;ok0UD;at,t;aVeRiXPly,y0V0;eRy;!nR; Ra;jul0X0;!ni aR;la0;aTe0i0lSmR;al5;an,i7;ia,nto reRQ;-lEc4lR;!aViTlSyR;!e,n,s;a,y7R;a,e,sR; viM;! alR;ay0;atouTd0QYjaR;! Rtou jahi0VO;ast0VU;! HS;ey,ie marit0J8ou elyana u0SUy;a3Ie2Mh2Ki29o0QuR;an0Nb0RCc0Md0JlYma0nWpit0RPstRv2wayr0GA;iRy1;ce,nR;a,eR;! R;an,patr0DS;a-sunsJEeRip0RJo;! 085;es,iSlJRyaR;!nn0LT;aWeRja,sO;!-Un1tR;!aSteR;! d;! soled0OA;an1ro3;! Z-08JnR;aWe,nR;aUeR;! R;alRro3;ex2;! heaVB;! p0FR-R;miO4renE;eTmRro3s0QCyao-x2;ar2icR;aeA;ly3;e,i0MUyR;!-R;aFe0VH;as2;aRiK;! IX;!a13be bonny ocasi0SNcelynBd0Ze0Tha0Ql0Jma0Ini,o0Gr0Ds06uYvWyR;! U-TaGEceRla,s lyd2;! ty6-R;angePmolo0BS;ad0RPharmo0PI;hadOIn0IVyoncN;a0iR;aCe;dUlTma0na d7rR;i,neyRy;! starr;ia,ya;!iRy0T0;aRe;!-R;in0Q1;al4ce0LReTiSyR;-Lan1;an0STe;e,finTl0SAni05TphRtQ;a,inR;a,e0L5;a3Ze;dRg2;anRyn;!a lillO6eXUn8;dRn0HQry;! ta9y;an5na0UT;a m0MYeWiSyR;-Lan0SH;-Lan0SGeR;! R-aF;kaila0UAsR;afi;enBigh-m0E2n8;nRre;a,e,ie,naRy;! ndouS5-lynn anabe7G;lRve,y;lRy;aTeR;!-R;es0PImanuela sEZ;! 0CI;aTiRy;! eRe;st0Q2;che0S3;ddIh0O9l074nR;!a,e,ieUnR;!aRe;! R;gab2zantO;! yadi6;aWha1lUme0nSverRzH;fa;anBgRso0IA; hIyi;!a1iIlR;!iI; hui,-UnnTxin M9yR;an,uR; m2;a CVy;to0I2;aRu-ba06O;de,nae-med0I2;an0Ge023iTCl0Fm0Cn05r03sUwTySzabR;el0SS;da,na 04P;el02Iy6J;i0RFpe0E1sR;a,e,iTyR;!kaRlE;! adW6;caSeRl0QP;! jia3M;! R-0GL;b0P6mR;aiQ;i,ri,sey R;laurJ;!a,elCiWnR;aUetQiTyR;! Rf0ODka;lEtram04C;!e,f0OB;! ya0HU-Dh;f0O9sleyd0R1;imahSmaR;!el; s0PS;a0SMe0; fitdji0a,eViUnR;a,eRiT;! od0LLlCtteR;! arl0LK;e,n8;!tQ;c1Nd1He1Eh1Di1Bk4li1Am15n0Mp0Kq0Jrmayne 0Is08vie6wR4yWzR;mTs0MRzR;!iR; d0S5;inRyn;!e0HT;-00dZlWmUnR;aRe,y0ST;! R;g0OWshal045;ely m0E0iR;cah 0GDe,na;aRe1ynne nami02N;! Rh,n4;j023th0GR;a,e0OW;lRmore0;en5;hAUki5SlZmTpSrR;a77ee79;ar,e;iRynB;nRra;!a,eR;! S-R;gl0PSma7;aam0ODka0FAso03R;eJyn;jayG;ue0IM;nRsi5G;ee6X;a05e00iWnaUos9su,yR;l4sR; dRsa;en0RP;!h,tR;!e fati9;cSe,ka,n8q0L2ro3sR;!ya;eRya;!-mQ5;! T-eva,e6lRsOt5Bva;!e,lR;-machaera ex0QRe;eRpiedga6;ba,mily kah08A;!eTirySn,t sR;al0G6; al08T;! ad04C;eUiRy0AQ;!eSlR;a0RCya06Y;! s0LS-l7;el5s2;e,y5;da,ly,mRna,y0N4;e maxi098ie;dO3elCi0li,oGya0zara s0IG;ilyss amSlRmes0O7;!-serapE4l04I;ik;a,eRis,y0KJ;! U-RlZX;aSeXfR;lor0K2;ntoin0JM;carARj06Rkeye0GNl089naH;iXkieWl0O4ob,quelR;inTynR;! R;le08J;a,eR;! e03L-08W;!-m0MT;e,nR;da,ta;a28b26d25erahkwi1fe,h23k22l1Qm1Gn13o11phigPNqra10r0Ps06t04vUwa,zR;aRel,ia,zy;!-b0MDbelRdo6l4;!a,l8;aXey,yR;! V-R;aRmiA;nn SzR;alE;pr05V;ro3te0AB;!nR;aRie,ka,nWP;! kayF2;a,hia ily0IFomb maeva sRta;el0EX;a00eZhXiWlaVobMraRsraBys;!aTeR;!lR; aFla;! 9O;! callio0GE;do6r0LBs;aRitha s0Q6kN3mIno0O7;!al,na;e,olu01Bul;!a1belSdoraRli0NNo6ro,ura 0NJy5;!h k9O;! mavWa,e,lR;!aTeR;! R;erich,ro3wenBF;! R-e0O7;giR4jR4k,no0OJsMMz0AZ;in021;aZeXfane abdo0K8ha,iRleJma,o9;a0e,naUsR;! R-e09Us 0KZ;make0shiRva0BA;yu;! cR;amilC;h,landRn8;-g0LS;!koR;ze; a0K6;an0le,nRteraswi io brook;a,kwetiiost9;aXdiVeTgridSnaRsi7ulQX;! f0N9;!-otR0;sRza mal0OY;! iz0ANs;aRra;!h,na0F9;!ayaVraUsTyaR;! Rh meyR8;ju1;!sB; vion1h;! ansh0LP;aUeRmaculEogen0DC;ldaRnB;! myriamR; gl0MI;!an,ll05KnSyR;!ah;!eSiRy;! GO-015;! R-r2N;kha0LVm0JAsha0IP;a0L2eZh0BIiVlTo0se,yR;! sidnN-LanaRsa feHO;! ysado6;a,ian8yR;an0r2;aRn0MC;!nR;aRe,na;! ni0;anaRf,ne;! R;ma0B4;hl0GHra06Cueu-maE2;l0B5sR;a1sa1;a,iy5;ek0N0tiR;h0DLss0B1;kRna,ra;aweriahsi 0KSohR;entenhsehRnonterR;at4;a0Te0Ai01oUuSwefa meira 00QyR;acin0F3l2v4;daRgo,khman p031raBJs0;! u08L;dayaWi yu030lVno6orUpe Trten3sannaSto0KZuR;da,ma;!maria shego0HA;kajinga budia05Srayh0JQ;ab,iaH1;ie,l00O;! riv0NY;bWlUmaTnSra,yR;ab;a,dNP;la7ya sarah-e0NF;a0DUdRey,la0DU;a,egard;aRetS;! hali0C8tR; a0AY;a06be0CMdy yue0IMi01ki0C6lWnTrSst0IMvR;an2erly pierr0G4v4;lysha kay0DYmAMyne mcaurH;esYBlNn8WriettR;a,eR;! aE8;aUenRga,iaHCly-0J7oi3ya;!aRe;! R-f099;hadaJVtoshi0MU;!na,y0;dRra0MS;iTyR;!-diamR;ond;! philome1e;therSvR;an4en;! e0MR;-hagshama anders0K0adiya 0BAb1Ocer-zeh6d1Hfs1Fi1Aj19l15m13n0Poua hab0F0ppi0Or0Ds0Bt0Av03wa01yUzR;al,elR;! D-g0J8ynnR; m0IY;aWdeVlSzeR;ll;eSieR;! chakriya-rAB;e0BVn0KHyQW;e0BUn;!h edgeJ;! R;isLOmL3;anaWeTiRyh0IH;laRsh0M2;-f0C3h;n-Rry;m0IKthR;ereO;!-r0LU;ea,he0ou0B3t4;i0satoR;u b5;a,eem00iYlUmonZ7nWCperTriTBsR;eeRiR;ra18;! boGE;eSie,oRy;we;e00Hne,quinD6yR;! e06CaF;etRni,th6;!te;! amj0E5;!ne05Y;a02eJiZnRor5ys9;aRe 0A6;! mW-Ue,hRlil0G5;! S-R;bHro3;e062ka-yIqJ1;e0LLmari7rR;ah0AH;ae,ilagrZL;a,fe,yaR;! muR;hamm0GB;! m053a,bel hE0cy,eRh,n,so0CD;! laiI9;ash2naZNsR;a,i0LR;a,ey,iTlRo0;iRy;bMe;e-Dm0JG;ar,r5;da yBQka,lRslN;a,eRiBy;e,yR;! R-a0aF;av0HI;aRsa;! n5T;assaWiUjaSlNrR;ia5X;! R;aiss0J4gnalJmarly0J4;aRya; oum0K8t0K8;! saint-lou0IYh;b4i01Asa,y;a1Te18h15i0Rl0On0No0Kr05uUwR;enRyne0C1;!dolR;i1yn;eXlru,nWrRylNC;baV9jaaUleen01XnSsehaR;j 07Z;eeRoo07X;t 07X;p 07W;eZWtaP7;gam elsie-c05WrR;densia deneF6lRnaH;a,y loR;ud2;acVeSiR;sel0JIta;i0B1tSy R;wint0FM;a,chJ;eUiR;a1eR;!-YHlR;a,le JB;! T-Rd4l0HJ;an01Kdi8KeR;mmanu0G1;aya francP1di8Ielizabeth su06Ufrancoise wiUMhSmbonZGsolange just7SuRva05X;wa3;e07Xo0AI;dSldR;a,ie,y;iva-genn05Ks plan nabahes0JK;eba marie-cecile h,irN;ad0FBenSorRyn0HY;ia09Xy0HR;a,da,na;a00ftyXNgi,lZnYoWrls,selVtUuliR;aRetK;!nR;a,y m7;a,ty;a,e,le;ia,vanR;a-dez08Gna;aLBg0EV;da,liI;!-kh0DRda,nnRv0FK;a,iR; Re;loa1;aSeane kei0A3iRym;na,slM0ta;dXPl2;li0Am09n02orgWrR;aSha0i,mLXtR;ie meira 0CCruG;e0J0ldinR;a,eR;! yul06B;eSiR;a,e,na;sRtQ; R-zacha09G;haR;dasO;a,eRna;nR7sSvR;ie0IV;isRsy;! S-liR;veP;a0ENhazaMmay7; 09Jm8;a b0EP;b01d0F4elYiWlUneev 062rSyR;aCWeAle;an0F7hyaFihanna luckenc2nR;et,i;aRe,i0F7;dBTx4;aRl0GHna;! e0H5;!lR;a,eR;! puam0C1;ella huyen I8ie07QrSyR;!-099;ielRy01F;!aZe,lR;aUeR;! R;eRn01V;ri0IL;! R;al022chanatoi1eRj06Z;sRv08W;sen055;! kulimus0HQ;a1Ce0Vi0Ml05o04rRurah0FZ;aYeSiR;da,eda;dSja,quen08Os2yR;a,ja;a,erR;iSyR;ck,ka;k06Fq0BB;dMi0F6nR;!cRk4;esShes0I4iRoiKU;a,n8s0FQ;!ca,ka,se-ludnie kM;rouh0E4ti0HGutoum edna-m01V;av05e01oRya;!rR;!aXc4eSiRy;an0FGeLWne;!-UMlUnR;cRti1za;eRia;! ePC-g0DT;ie,l4;! c077-lElUGnR;ce,e,ne;chereSurR;!-aFal4ette KG;!-R;emZ4;iRyB;!a07Ae09X;by,dYfa sZ8h0D8loXnlNoTrdawsRtia nEX; Rse;clau1Crah0GM;na,rR;a,eSina-fede moR;ni0HE;!lA;me0;el2ji;b06d04e03lUmOVrR;iMnRyM;!andaR;! mi06W;ec2iUlSyR;c2xe;aRic7; m0AL;cSma,sh2xR;-aFe;iRya;aRe,te;! a0CZ-D;!-li7Yby;eRor5;ri0EI;by,erly-ae0;b14d13elCfavi v11hima 0Zi0Ul0Tm7n0Ro6r0ItVuUvoTyR;!e,liR;a,c2ss2;rina ngu,ur;stianna bomenVQve;i04ma00na-n0DFouR;! YmaR;!taR;! T-R;bRzaEO;inK;bRdiara0DPs02Gy0CE;alGintR;a,ou z5;astom0CIbiZ5die04Iki1reAz0D6;! R;aliyahSzohra R;sid6; ocTF;ha,maR;! T-z0D0hStR;aRou;! z0CY;aUbSkRraya1s0CQz0CX;en02K;atoRint sidd097;ol;baid chaud063ss7zz0CT;ahYdXhaUiSrahRyal zah2zana a08;! eYT;ah,dahRshK;! gold;-nouraSnaR;! a03;di1;is,oEE;! madys0CO-HL;gx35nSHtaR;! la048;l0CLyc2;da,g10thRza;! T-Rl0CP;eVOlR;u0yF;fen024israM;aRjabRU;kt0AH;icR;to05I;ia,ouma-z0C7yA;e9iRy;a0eR;-tRn1;ou6;a8Vb8UciCd8Ie8Gf8Fglan07Gi89k85l4Rm2Un2Mo2Lp2Kr29s1Mt1Hu19vZwa,xa,yUzR;au6eSraRza;! 06I;chkielle janaye z,l2;aUlSmi,raR;nn5;a,ulR;!-hu0DW;!n0;a0BeUiTlSoRv5y;d4lTX;in8y0BB;!e,ta;! 0AN-06di0lYnPrR;eWlR;eTyR;! jaR-sX6e;de,m09I;e-RiT5;kaQ;st;eeSViXyR;!nR;! TeSnR;!-De;! no0A7;iRm0A5starM6;ri0DZ;e,n02R;ch003el4lyFm0AEpascaCrica avR8v09O;! 06-03bHdnNell02h,lZnRro3;a,geliSie,nRs0DQth2y;a,y;a,nR;aUeR;! R;c03Ryu-R;xi;! quetzal08V;eyi5iMSu0yR;!a,nR; De;a,eEH;e3Jj02KlSmaRpearl,ro3so08H;ri8uGy;e8uc2;aYb0A2c5Cell03CjNIlXmVn71prade04NrUsSvR;i0BGoloa0BN;atyava06Timo0oR;f2ra7;ee3o3;aRicVR;el08Yr2;e5i08G;nge09H;genTla,niceRriH;! R;mbokashEWteudB5;etQiR;aTeR;!-aR;n1rthemi3;! MO;hMiaUoStR;a,el,y;iCnam-ayoko R;el0P;!m-014n1;al020ha0Ci0Bme09oOperan06r03s02tR;eUherSrellaRy;! mwilla gi081;! R-chYX;bin0C3d89g09Gkawou3AvictoriaOE;e,f08GlTrR;! yocR;hev07O;!a,e,lR;a,eR;! R;cecEPro3;il,owedeou n02Z;a,yR; kR;ayA;ceRza;! josepR;hi1;!e,raldaRy;! guadalu030;le,oA;al,l;el biynah or00iTma,nestSyR;ka,n;in8;cUen mh0BXkaSnR;!a,y;! R-jM4;ca03V;aRka;! R;jahreClovP9q00I;ia1;hniGif07N;l2n4w09H;aWea,iVj01Nley-DnaUoTri0CFuella disha-cherSyaRzo;! mVN;in;h6la-A6ra0C5;!y5;d,th kBP;elCmR;! rhe00Q;a1Iber1He1Bi0VmZna,rYyR;! W-Ta1lSrR;auGo3;ee,ia,ou;e0BOjRlEpi071ro3;aReL;de,m06Pne;jaGk,ma7;ie,yn;aVeTie,yR;! R-Dka,l0AW;jMJlYO;!rR;auGie;! 09-02e18jaGl00nuelR;a,lR;aVeR;! R-095;diSeRQiRme06Boo0;ma0B3;vi1;! R;gRmejaZO;eorg2;ee,iRy07U;a,ne;aFcVe0B2g07MjaBYkaQlTolisSro3soR;f2ph4;sa1;e8ou,yR;ne,v2;a06ZhrR;is03G;blayIVcen09WdanaEeXf00Nha,kaVlTm076ol3Hro3soSvi03QyR;ana0AJ;f2lk05Sph2;ee,iR;li,nh t7C;thR;leJ;liOve; 9Ye03Fka,lSraRva; mUA;c03ee,iVlUou,yR;! S-N7aR;!na jesSQ;j8JkamCI;i06Ly il019;aVeR;! S-R;melDro3;lG8orR;la1;! mSnR;a,na celesW8;ar4ya;a nidj4ia;lUrRt08C;aReFZs07Gy;ldRn06QuG;! re036;da,ia008yR;! ca064ne;!lN5;!-017eUlTnRro3;!at,uelR;a,l8;ee,ie,ly,yn;lCve;a2Vdi0e2Ci1Ck1Al0Qm0Pno6o0Hs0Cv0AySzR;a,irr5;! jane as07-06a01eZ6jaGk2mFMnZro3sTzaR;!-jane katRbe013n1;niTX;!aTe,ia,sR;aRee-reuvJia;! g063h;!-DbeRndUB;lCthR;! l74;a,eR;! megI;! D-UhTk01BnR;aRe,nY4;! IY-D;! mael08T;ja1k1Sro3;a0FjaGmF6ro3;oh;a,iRy;na,ra;aRiBy;! R;cSkat71l2yR;aretzi;helsY5;an1dWiVrSuRy3;a1i3;aRie,y;! Rh;b.,sk06M;na,seGL;ieRy;!-l08B;a,i0;a03e05LiTyR;! g05E-001a0Lne,sR;ia,on,s2;aXeRps04As068ya;! U-R;aSchUQjRpi043ro3;aGeL;nn06N;aRm04Yro3;lexa;!naR;!-nR;da7;! V-Tha Sna,yR; dreVK;am07H;g04ZmRro3;ay,eAS;g04XmaRno06Sro3;r2xi1;aRy;ss7;!-Da0Gc2da,e0Cf0Aj5ka,m,n08o06s01v2ya00zR;!aR;! WbethRveK;! T-R;maYLproR;vid01F;cRjameAmZL;onstC2;chRsoS5;risTY;h,na;aTeBhaRia,s8;! R;jNYzeJW;!-DbetRn1p4;h,ta;na,raRt;! jo03W;!aRe,or;! qere1; RnCF;asMnCE;! T-Rne;aRjaGro3sUP;nn8;jeL;! YhWnRro3;aTeXVnRor;aRe;! corX3;! Rh;a30marie-hailPtshiaA; kR-aOV;ym;miRro3;chH;!a07ktra06nXonRy;elCie,orR;!a UeR;!-R;olR;iv2;olJN;!aTiRna,oRQ;! R;heiFB;! R-jGV;bUeTRflaSPgTkhaSsolyR;an4;di01C;ab03Bra03G;eatr24;! isSI;!nR;a,e,na,orVE;!f,iXnWrTu6yR;a06XnaR;! r06B;aRi038;! kR;athr041;a,ne,or04J;a,nR;a,e,nah-nitan04N; thakTWaSeysha bRmaL1nuTUta;riM;terinRu;a,i;d01QlUmRsOvy,ya;anSy joR;elP; fSI;eJidh-benKlRya;ya0;fy,remia evang058tih2ya marie-aTF;la,vR;ee jazz,y;a,eXhMiWjUmil0naSviac4wi0zR;ah,ra ayL;! R;fVTlQR;ee aRin9;na7;a0e,th;lUnR;! R;guer052kRtchiengaUD;aj;!le,weiPZ;ah saphir 013ba,ens067ya1;b9le0;a2Ge1Gi11j0Io01rXuUyR;anSen0ClanRna;!e,nB;a,na-e00O;a03LlceRn7;!-aRl2m01W;drSR;aiTeR; marie jNWanR;!ne;zy;an al05Ih05l03m01nZrStt4uRva,xa;aa,n2;aVIcXReWiVla,othSra,sa sad055t1Yy-aR;nn4;eRy;a,eR;!-ceJ5;a1ce,n8s;en,ss;aRg ng04Via,na;!t015;eRinYM;ni035;or005saf-aR;na036;!any mero-naR;is9;a06eZiYouVuR;liSmaR;!eA;a,ssaR; tatyPLh;li8nR;a doryLie weeR;ns;asmine rho3ta;e0hina gloV5mOnSssmine bryRyl04S;an053;ab041eRn5;! WA-zTbaR;! nina-R;maV0;ei0;miAnR;ay5elCna lwR;iz;aVba,em miFTh7k6lishya sheoZGmUna04NoTrJs9vinRx4ya;a,e dR;ouanA;n1r;a,i6;gniAka,lZmXnSrR;afa-maiAra;aSd6eRga,n8;!-5V;! R-020;aRdaODluz2;ndrT4;il02BondR;! mazhevJ;a,lo;an0Mb0Ec7de,e0Dhb2i0Cja,l01metr2nXri1sUvRw1U;aTCoR;iUErahR;! le5;irEtR;inyRynN;! agnYX-m005;a,iRsc4vZ6;a Sce,elCsRz;e,ha;itzM;aZiYlVorSphRya;ay,ee,i1;es,isR;! aR;dwXW;aRia;! loRs;uiO;a,ce,l5;!ra,yR;la,na;dO2rdO2;!dEma,na;!bGGorRra;aRha nei01D;! lyse-vitcVhR;! T-R;jDPkitumR;ai031;emS3lune00Lnoe10;hy;a,dTnR;!aRe;! R5-stereF;ra039;ba diouTGc1UeAfnMOh1Ri1Lk1Il1Bm16n0Ophn0Mr0Gs0Cvi07wn,yR;aZinaYleXnTsR;ha saRi;ir012;aSiR;ss5;!hR; a3S;!ni;! aCH;!nR;aRna;! Rra;desTmicheXOsR;arR;ai;yr;-kUdTnaR;! maelys koutR;so; nicholUUa;ueML;hn000sR;i1ylvaR;-qR;ueJ;a,by,cVeJiUlRya;a,en8iRys9;jee evRne;en2;a,lZMne;ey,ie,y;a,eRie kar027;! sier6eSGl2y;a05e04h7iXl01GnSyR;a,ka; samEPaR;! R;caTMnRsoL1;aoR;mi;!a,caVelRka,s3;!a,e,lR;aRe;! R;enyonOUlJBro3;! jR;ewM;tQva;!eShR; lNAeB;!e,ve;ariQPiSyR;-victor7a;aSka,taR;jo;!na giovXK;eWh2iUlSyR;!aY1ce,n0;as RiahXWy;taylZR;!aRda,e,la01Js9yah mae7Q;! alHSh,nZ8;en,iCE;otaSsR;ha6;! jZW;a,la,men-axe,na,syRya;! R;eTgXNleLmSnoMof004pR;aoA;aeHH;velYG;ab,lR;iRya;aXKe;henH9i1;a54e4Ih22i1Yl10o08rWyR;bHlQ3nUprTriR;elleRne;!-03;us;di,thiaQ3;e01isSystaR; zoHl;lie juimo YtR;alVelle-TiR;anaelisabetKnaR;!-sV9;eugR;en4;!-R;maM;elNM;dTPed4Esl4;heen leGIl0Gn09opVQrWsiPAuR;mbaTrtnR;eyRi,y;! hallN;! R;soKCvelore issiH7; u02aXdZ8iTneRri1ta0;au boisveRl2;rt;!e,nR;a,e,nR;aRe;! nUC;!-lElR;!iRyOM;a,eRne;! lR;eyA;my;n4sR;tSueR;lo;anSeR;lCnWB;ceRdi0za;! yik chTB;eRleJombe nouHW;en,tQ;a00eVoR;eTtRvUX;hRilG;ilG;!y;a,l2menToR;!fRTkayQpRr;at6hE;ce,tR;e herO8i1;ir0CrYudR;eWiR;aTe,neR;!-daR;niM;! R;ibtissU4mKS;lCtQ;aVeGWiSke,yR;!sO;an0ceSsRta;!s8;! UA;! V-ThRnVJ;! aR;ngM;eYVjaRlEro3;de,ne;aSj85rR;ai0o3;leR;xaQQ;!-mV0eR;! maPZ-KN;a6bHdN7er6l2nRrKyLQ;dRsI3;el,i,yR;! claire ebia7;a11e0Li0Kloe0Fouro0ErSuqiaoqiRy0;ao;isWysR;oUtR;al,haRia;-princRl2;esO;ula l0CvalaHH;elXImS9phaelove05sy,tR;a02e00iRla-jahyeAyW9;!an8eWla,nR;aRe;! R;jSmR;anAP;ul2;! R;anR;geA;lJJnRva;!v4;!bHlRnPH;!-gUH; bH;uk;! R-VOe,y;aFb8CeSisOPjeLkasenADmaRperei6;eE8r4;liI8mR;il2;a6de6nenVBri1;d05ilAk03lsXnWrSvy,yR;en1;!iRna,yl;!e,fRsh;a R;fatMG;ai noH4iya diva1;eRie,y;aRe,y;! S-R;ro3sKH;emFAmeRso99;ghI;am kRi0;et2;ine akWNva-elio6;anX1d0Uh0SiM5m0Rn0LrWvTyR;aRil,mWU;! mushXL;aRy;! R;brBXto4KzisM;elCi0DlSmRny;ai1;a0Ae08iXotteTyR;! D-Re,nBse;eWYro3;! S-R;jiaj2m2P;adRgTFheaS7ro3sterliLD;riSY;anUReSne,zeR;!-serena UP;! V-Re;aTjaGkaQmRro3;aRia;e,uG;nnB;ecU9flV1mGAroR;seR;! R;b.;eRn8stJtQy;! aF-D;!ine myI;sRy5;!sa;aUcelia reine-ceREd6eTi willo6nStRy;al,elC;ah,j4;lVMz;! Rz;brB2cPLesRK;!e,ma lhamo,s;dRra;! rawa1;-nelsTEa,i1;c07lSnayRri1ylan alB9;a leon4;eViSyaR;! marilTGnah ngaluA;aRn8;! R-laurE;biatcTKsQM;na,sR;!tR;eViR;a,nR;a,eR;! florR;anSB;! S-yollR;anG;k,sQCza6;eUilR;e,iaRy;! R-mRV;dai6OiIKxin89;!l2;d4e9Ti1Tl1Pm14nd12p11r0Js09tSwerNAyR;dORl22sha oerstQB;a00erinaYhSriRtaUE;na,o0;aUCerinSiana jack4leJrSTyR;!-aF;a,eR;! R;kRliP;imb2E;! R;roO;lRri0;eViR;a,naR;! R;isGQpR;az;ia,yaSR;aMYey2JsR;andrVeUiTyR;!-aFrelle hoR;rtens2;a,dy,e,ll2opeRL;ndFH;aRe;! R;elRysLM;oi3;a,deesha-kDXel07i06lZmeTolSrRys;ie,ol,yaF;!-aFanSKe,inQDyn;lVnR;! R;maSrR;yl4;riL;!a,la;aVeUiSyR;!ianna meidLXna;e,na Ry5;seT0;ne,y;! R-brun4;blessing mokHCmafo9P;na,ssaIC;le,y;el7ri;aQQiR;ce,de;ar0Ae05iR;e02lR;aXe,iSlR;aDXeJDia;aRe;! S-clR;auG;lRngoc quynh a;auEJ;! R;aRja1vaFQ;leySZnR;drIRnaH;! R;gabriPP;lRrQY;iRl2yRM;aRe;! R;dje1mPJ;a 01;ai,iTlRysK;a,iR;eIToK0;!e,sKxa;lNs4JtlR;inRCynQ3;a3Ge21h1Xi1Gl14o12rSucky adriSKyR;ll4;a0Xe0Si02oXuVyR;anSen1nn,tR;an7;a,naR;!-alex5;chRneFM;a,ie;c9nwQJokR;!e,lynR;! Re,n;elCvR;ioA;an08d05elZgiYha0llG5nXtRya;anVhaN6nNtR;!anySnR;ey,i,y;! marjR;or4;ie,ny,y;nlN;d,tQ;a,lR;a,eR;! R;evSiR;riO;erP;gRinLF;etR;!tB;aVnRty;aRe;! Rh;al7JmC1natR;as9;! R;feRnehAobianuju,ruR;by;anLXeUla,nR;daSnaR;! kim cGN;!-lE;!-O8;c9elyn1nR;a,dR;iBy;!bbiBfJ9nRuaRUw4;iKn4;aXeSim52oss3RytR;he;ssRueF;!ingR;! R;chriRyiS7;stH;iCFke,nSyR;ke;cRdi1;a,heR;!-e83;an03lYnSssRthush7;an,en;du,eKtR;aSouR;! nawM;! R;jOMsiR;di;al,ie,lR;ieSyR;!-aFn0;!-R;aFcCQro3;caRka,s5;! bN8-R;eBNkryR;stGT;aSruR;viRJ;iraQWvR;gu5Mya;a0Yc0Ul0Mn0Gr06s04tXulaR9vVyR;aRza;!nR;caRe; mFH;!erlR;ey,y;hUsy,tR;e,iSyR;!-De,lQ6;e,na;!anRo6sKV;ie,yR;! laM;ma,sR;!ie;aYeniceVliUnRr7Kt9yl;adSiceR;! e6X;etQi1;e,ndKX;! R;chloe akiALjR;ul4;kah beniRngeB1;ciC;edicteViSnRz rebekah myria8K;yl2; Rta;clR;aiAV;! kaso3X;atBWiXkyWlRvia ch17yO;aRe,v4;! R-Dn4;aSjiRskylMK;viK;ic9; saraPO;a,nP5;ca,kR;a,ie,yR;!-jR;oy;!h,lWnn4trR;iRyMD;ceRx,z;! R;hRs.;azM;deJie,ye;a09by na7Vfreen kur08haaCZil07mD6n06rZsXtWvnVyR;aRiIlasI;!nR;!eR;! jour2;ooCU;hya-kaMViah FJoK8; she5Vma,sRya;ma,y;aVbSwaR;ko;araRie,ra;!-jR;es0E;a,kah bR;lessiDP;ee CKu;a,ey,y;do;ni CH;aONbN5cN2dKPeKGfKBgK4hK0iIMjaIHkI8lD7mAUn5Wo5Up5Tq5Rr42s31t2Pu1Uv17w14xel13y02zR;aXeVizaUraP9uTyaSzR;el7ur6;!h ine3;l,rDL;! ayCK;lRnNB;!i8le,ye;el,faTil2lSriR;a,elle-kekeJU;eDFi8l4y;ck;a0Ech0Dda0Ce05ia,ka,lWmToub,shaR; diRh;anH;ieRy lE;! staR;sy;aVe1iR;e,nRs;! Re;katRmillar85;ali7;! R-dBM;basiDBmir82phuongR; aR;nh; VeshaUleSshaR;! zaeJ9;n,tR; ruFJ; za6;haR;wa;! e4K;etNH;! X-bK2hWla,me,nRsof7t;aSe,naR;! J8-sel5h;!hR;! djuikR;om;! iAX;aVgert9jSsoR;ph2;aSiR;na1;niKC;mi6;!leD2ya;aRo-helI;!-R;marie5V;a03eWiUl24ni,rSyR;nM3s9;eJiR;l,n;aRe0va,y5;!nH5;il2lWna,ryRy;! U-R;lSsR;now;iv;gift,ro3;!li0y;! W-VaN2hUlTnR;a,eR;ga;ee,on; gJJ;gJNro3;aTeLQmata7noelle maraSro3zemR;ir5;nig;ha3Fm04;b0Ic0Hd08gust07l04ph03rWtTxR;a1iR;ll2;om1umnR;! R;deni3;aTeRiLor8ya0;lRoC;i8l4y;!lTne eR;liR;sa7N;ie,y;el4;iSyviR;a-D;e-Lna;!a,in8;aPeYrR;a,eSiRy;!nEB;an1e,ne,yR;! S-R;aFjaG;em47neh juiR;si;! fASsO;ea1;e,rR;eRie,y;e,y;a6enea00hRi7ri0ta;al2eUiR;naRr;! veatriR;ki;naRs9y0;! Ris;cRmiA;.,eR;lesQ; aR;biLB;a0Qe0Oh08iya07m04na02ra01sUtRya;er-lise hagSou FLrR;ee,idB;os;anJViTyR;aRl;! afsJTh;aSlBnRya;ad,et;! dR;ja0;! imrI;!-R;lyF;aRi1;! amRa;ir;! bilAXh;a04i01lUmSrRtIJvR;it9;eeR;n 8K;eRiByHV;e,iVyR;! R;dominEKfAUlA2nRriK;aiLGiR;coC;gh;a,ra R;brRliM;ac9;!a0ntR;i,y-kyHT;eRnKL;l,s23;!bHl,wG4;a1Ach-JRde19e17ghawIi0Gl0Bm09n07o04piKr03shZtemisBusKFwYyR;aSelRna sFEssaH8;!a,le;! Sh,m,nR;a,e,nB;ashfSdeKEi7MlRro3;ysO;aq;a,en;i,oTpR;reR;et; eJ2;ey jemimah-jahd4iane elli3;na maseSs9uR;sh;go;aRiKO;kall17li,q;aK1onieR;! moi6;eRo;eGUnRtQy;a,eR;! blR;ai3;a06eXj,nWsVyaR;!h,nR;aSnaR; a5W; e4C;ha,ta;a40e;!lRve;! c.,a-trWe,lRs;a,eR;! R;al1AdSjR;oyG9;eb9Y;iniR;ty;! Z-Yd1h,m,nR;aUeSh,nR;a,e,y;! lina medgR;gy;! Rz;rosRva5B;a,elC;liO;eRjaGlA0ro3;va;eRni;ba;lCn;!bellaUceE7mSvRya;anbuSinIC;aKozhiR; priya praJI;! don0-2J;ila shaRsa;ik9;ol9Tpoline nabiDFrIJ;iRss;fe;a3Och3Nd3Fe37f36g2Fi2AjaFJn08o05si7TtYuXviWw6JyR;aTebeRla,ssa mar1Cz2;-kR;ataHS;! malR-elio0;ak;!ka;s9un;aWh7OoR;inBJnR;!elAiaR;! R;iRviGF;oa0;! manF0;opSra,uR;chIVk;! 5T;!-1Ka0Te00iTjSlRmEPnaick wase0ysO;au6;aMol4;aUc2eRka,l4y5;! R-louEA;em06m1Xqau0ru9KyaR;naH; lR;etR;ic2;! 07-Rlise dominique n,mEFtQ;a04ch02eZfXlaVmarUnagelEprunHrSsRviFY;ara6Ao26;aRo3;faeC;gu4Pie;i4SureR;!nEI;lRrBD;e5Ao6;leSmRsD6;manuH;ono2G;l38rR;ist4;biGXgnCSnR;drE;abelle-g01cYis3Cjode8Hl.,phoebe bartXsVtSyoR;ha0;helysSoussaiR;nt;si5;ar5o1MubliR;me;heC;h3FlarR;a R;ho7X;emi69;! 0C-09be04eXhEiWlUmTstasiaR;! cathR;le1;ar2e;iRy;e3sa;ca,lys de la carid,s;!lRve;!leR;! R;maellis dC0naomie nd9FrosSsR;ky;e hRie;ada14;lRth;!lR;a,eR;! R;j.,shime5B;bHeGSk8LlSmaRpiC5ro3;r2uG;au6ou7H;biUchia6f6HisabTmCOro3sR;chmaCOoR;f2ph2;ell8;ntFZ;eVfrederiUgaMjessa rTkSl28mycEMnaHso0OtaRviEF;nASr5;la6;aylE;k,q9Z;lRsBR;iRyED;e,sa1D;!a,eAkaUla,ra,sRta;aGJha,saR;!-Rh;ma7;! 1I;eUieSyR;-lE;! nehR;em4;!-0Ae,lSmR;ay;! 06a01de72ei,iSla,yR;!aFk8;a,cYeWkDYnRq9I;aRe;! R;lSroR;sa0xa1;ay4I;! alR;iy5;!a,k;! T-R;pRroyaC;au6I;m6WsoR;ph4;princeR;ss;mSpeR;niBI;ic5;el,isO;!eXlSsFUtRy5;h,te;!iRla;aRe;!-eR;liR;za09;ka,t;a,iWjeArR;a2eRi7;aRe,ia;! Rnn8;auroRjus7Nlucres3s9S;re; lRe;oui3;anEP;! 0J-0IahEQb0Ge09gha 08h07i03k6Rl01m00rZstasUxandr2yaR;! Rh,tjot;ja1mary1ZuR;smI;iRs2ya;aRya;! R;gBBlisR;be61;ay,o3;ar2ilE;iRuc2ya;a,ka,ya; viv1ScTka,sRta;! Rha;aA5bi7;a,ca;!iK;redBV;!e,lRve;!leR;! R;cSkRn8N;erJ;hlR;oe;!elRia;!l8;bHeE6fNk5ZmA5p5O;bVg17isUlTmSpRs8U;auA;elE6;uc2;abM;eatR;riAK;a1Eb17e0EiZna,o6yRzN;! T-Rl2n5ra,ta;jaGlRro3;ee,i1;chUkeiKsaTvaR;lenR;ti0;ma6;arlotQ;!-Dah,e04l03naZraTyahR;! R;evelyn3EjaG;! T-Rh;eRmery8K;vi7;aSfR;ati2F;bdoulkad8UlD4;! 7BtaR;! R-kim2;aissaKnde1sR;adA9;aDKia,ya;!lla rCY;-0Ie0ElTn,rSthysRya;!t;ah,y;iTl2yR;!aRe,sAG;!n9V;aVeSyR;a D;! marR;guR;eriQ;! U-RnAX;eRja1ro3;liR;za;balrYfrancesAXgXho3FiWmUqinTroSvy,yiR;qi;se,u3;yi;iRucowe6;riT;sab8P;abr77;am;!na nudlTraR;! atRh;he0;ia0;ly5;aUerSrR;e,o3;! Rly;audr4jai0;r R;kaR;ur;aC4bHelCh7ia0El0Bn03rZtuYyR;aRll2;! U-ThR;! hanaR;bi;jaGs94;jordan maria d,rumaiOzR;es9;ll5;aSie,yR;llA5;!chi shaRh;nn98;a,dSee,iRy;!-ren4A;aRi1;! R;is2Pja1rSvR;aler2i9N;avJ;en;! SiRya;a,e,y5;em0K;! s6B;a47b44d43e2Khe0i11jaz2l0Rm0Oon0Mt0Ku0vi0yR;!-0Ia0Cc09da suz08e,n07o0r06sTviaSx41zR;ee,ia; Dh;!a1Me02ha 00on87sRun;!aSe,ia,onR;! 0T;! T-Rh,n;qRro3;uiF;anh phScarmMhe0sR;am89;uoR;ng;thRyeasmin rabu;al2;a,n;a,o3;!a,e;an5;eSiaR;!-3Th L;! 8W;! Sh,nR;a,naB5;fatouTyR;asR;mi1;ma;jaGro3s4F;a,hR;ea;a,dra solR;an27;aSuR;de0;!s;eZiWow80yR;!-UaTc2ia b,na,sRxe;hea l7Hia,on,sR;a,ia;!h,na;jaGxaF;cya SeRs7Oy5;!-D;oceL;g6iy5;!-17a15c0Re0Pk,ma0On0Mro3s0Av2x09yYzR;!aUeRia;! raheMeR;! R;keni70zang3P;! R;mazRtshiboA;al;aRe;! XhUnnR;ahR; fR;ai19;! R-m2;cRe9WhassIm67p;ata5Y;de9NfatSha0r9HshR;erl79;em5;! 5Ue;a,hYoWsRya;!aUia,onRya;! R;raR;chM;!n1;a,nR;! lig2;aRba;! R;nRvi7B;or5;aRe;! D; sadi7ya;! DvaleR;ry;eViaRya;! cT-R;hoRro3;pe;lemen1P;! U-R;aFmR;argaR;ux;evTjStraR;cy;ay85;angeR;li1;! ysRn2K;abH;soR;le8C;a,c18e0Ugr2i0Sja0Rks0Pli5n0Oss0IxTyRzia fE;ah,na zeynR;ep;! gr8B-0Da01e00iTsa,yR;!aRna,ss;!h,nn8; mezt3MaTeRn8s;!-R;jaGro3;! S-m85h-mRn6G;ei;keiRm4R;th;!i;! 00nR;dRe,nB;er,rR;aUiR;a pRne;aiR;ge;! R;kongrIm2;an;caRja1sil0Z;miA;e81kenned4sandR;ri1;aTiaRya;! m2-kR;im;!ndraR;! R;ly6m3T;a,n5;andrRia;a,i7;nd6;na,sR;ha,sa;ah,ha,nUshaSya7VzaR;! sy0; sR-lourd2O;amant9; WaR;! Rh;mSsaqR;ib;urR;ad;eSwaqR;as;smeR;ral6H;!ia;ea,ora t3S;aSerRi5Q;ti1;!n53;a,e,i07ku,nUra,skaTyR;a7Bna,s9;ha;! alexina rynE;a00iYnaRy;! nicUhR;! R;jaG;de;olR;etQ;te;!e,sR;!se;! R;b35reR;ign;aRna,s,ya;!-R;rejoi36;al4eYhsXiWksXofa laUriTsR;a36hiR;!t68;ti;urR;en30;!nisie 2Hra;ha7;el5miB;! Ry5;frR;ederR;iqR;ue; 12a0ba,cha0Uda0SePk0Qlee0Nm0In0Gr5sXvWyUzR;aRly;!-wapukRh;un;anR;a,na;a,ey,ie,y;h02l00saR;!tR;aWouR;! S-R;ra0M;dalSmRndia3Go0N;ali68;an4Z;! R;ay0mary3Nyah7;inRyF;g,n;aRwarya3M;! S-adam Rh;ai4S;dSmafouCsaR;mi0;estiR;ny;hRn4slN;oa;eRie,y;eRri5S;! R;miRro3;ja;!nR;! danR;ieA;a-bernadette kamw,o;ly;! R;morgLse1C;! S-sRt4G;of2;ber4Ekadar mUnabila dieo,oTraRz26;ssoR;ul;um1F;ohamR;ed;my,vR;an,y;eTjin aSlRuva 03we4Myl4;em;ilE;li;aSg4l4BnR;es;ph7tR;a,hR;a,eR;! eveR;ly0;iRna1ra4P; Ry5;esR;thR;er;lVnTrRva;gs,iR;elCs;erR;ys;-taTiKla brittSyR;ne,s;an2;li5;a1Kble-kayim3Ad1Be0Pi0Fja0Bnelly mi4Io08rRya;e06iRy5;anTeRna;lCm5nR;a,e,ne;aVe,nR;aRe;! R;aRmiA;li0F;! R;caUkaSmR;ar2;elA;la;roR;li0;an0;n2raR;! R;gl1Fnjonk2X;! S-seR;ynab2V;bane cheikh,mR;ar4;ba,kiXlaVna,sRva,x2;sonRyn;!-galR;abR;riH;! jafR;ar; gR;raR;ce;e08lSnR;!na;a03eZiUlTyR;!a,nR;!n;e,ia;aTeRn8;! scarlR-D;ett;!-rocRh;io;! Rne;jeLsR;ar5;an1;!iR;de,nRs;e-D;ba,naR; zR;ah6;ra;iTyR;!sR;on;e,lVsR;on,ynR;! mR;eloR;dy;yn;!hi,ir08lYmaR;! R;diVmRra2A;aladTor R;gaR;ye;ho;aw;ee,iZyR;nRs;! Wa Te,nR;! aF;nn;viR;ctR;or2;ja1;e,ne;!a;ac2eciusRilBk0R; rebecR;ca;a16b0We0PiZlaYriWsVyR;!-0UgaSnaR;is;elRil,le;! bHle;at0W;elCl,sh kashR;if;!k17;!a,e,gVmaMrRshna17ygay0Y;!a R;noR;or;el;aRelCuH;e01ilTlR;e D;ro3;! U-R;eSlE;ee;le0;debb4jRro3ti0;ay1;ne;ie;el,lR;!-grace odXe,leR;! R;darThaR;rlN;ey;le7;ya;el2;eUlR;i8lR;a,e,ya;a,e;-Sha syeRr;da;gaH;ey,iByR;! X-Te,gaR;elRil;!le;gaHlRro3;ou;elC;le;an0e09;!e;gaR;il;d0Geed5ha0i0Ck0Al00maZni,rTvR;a,iela desirR;ae;aViTthiySusRya,za;hi;aa;a,fR;at;vi;ni;ayah meYiyahRy5;! R;elUloTooleepSro3;se;ee06;ve;miK;ta;isO;sa;it2;ia;ma,raRza;!h;na;ah;a,hRya;viTyaR;! shR;ri;ka|Infinitive¦0:6Y;1:7C;2:7A;3:79;4:5F;5:74;6:6D;7:6L;8:78;9:6W;A:73;B:76;C:6R;D:68;E:7D;F:60;a6Qb69c5Bd4Je43f3Qg3Jh3Ci2Zj2Xk2Tl2Km2Bn28o24p1Pques3Rr0Xs05tWuRvOwHyG;awn,ield;aJe24hist7iIoGre6H;nd0rG;k,ry;n,pe,sh,th0;lk,nHrGsh,tCve;n,raE;d0t;aHiGo8;ew,sA;l6Rry;nHpGr3se;gra4Wli49;dGi8lo65;erGo;go,mi5H;aNeMhKie,oJrHuGwi5;ne,rn;aGe0Ui60u5y;de,in,nsf0p,v5O;r37uC;ank,rG;eat2Vi2;nd,st;ke,lk,rg5Os8;a06c03eZhWi4Jkip,lVmUneTo56pQtJuGwitC;bmAck,ff0gge5ppHrGspe6;ge,pri1rou53vi2;ly,o3D;aLeKoJrHuG;dy,mb7;aDeGi2;ngth2Lss,tC;p,re;m,p;in,ke,r0Yy;iHlaFoil,rinG;g,k7;n,t;ak,e3E;aFe22i7o5B;am,e1Qip;aHiv0oG;ck,ut;re,ve;arCeIle6nHr2tG;!t7;d,se;k,m;aHo4rG;atCew;le,re;il,ve;a05eIisk,oHuG;b,in,le,n,sh;am,ll;a01cZdu9fYgXje6lUmTnt,pQquPsKtJvGwa5V;eGiew,o4U;al,l,rG;se,t;aDi4u42;eJi5oItG;!o4rG;i6uc20;l2rt;mb7nt,r2;e5i4;air,eHlGo40reseE;a9y;at;aDemb0i3Wo2;aHeGi2y;a1nt;te,x;a5Dr4A;act1Yer,le6u1;a12ei2k5PoGyc7;gni2Cnci7rd;ch,li2Bs5N;i1nG;ge,k;aTerSiRlPoNrIuG;b21ll,mp,rGsh,t;cha1s4Q;ai1eJiEoG;cHdu9greBhibAmi1te5vG;e,i2U;eBlaim;di6pa4ss,veE;iEp,rtr43sGur;e,t;a3RuG;g,n3;ck,le;fo32mAsi5;ck,iErt4Mss,u1y;bIccur,ff0pera8utweHverGwe;co47lap,ta3Qu1whelm;igh;ser2taD;eHotG;e,i9;ed,gle6;aLeKiIoHuG;ltip3Frd0;nit14ve;nGrr13;d,g7us;asu4lt,n0Qr3ssa3;intaDke d40na3rHtG;ch,t0;ch,k39ry;aMeLiIoGu1F;aGck,ok,ve;d,n;ft,ke,mAnHstGve;!en;e,k;a2Gc0Ht;b0Qck,uG;gh,nC;eIiHnoG;ck,w;ck,ll,ss;ep;am,oDuG;d3mp;gno4mQnGss3I;cOdica8flu0NhNsKtIvG;eGol2;nt,st;erGrodu9;a6fe4;i5tG;aGru6;ll;abAibA;lu1Fr1D;agi22pG;lemeEo20ro2;aKeIi4oHuG;nt,rry;ld fa5n03pe,st;aGlp;d,t;nd7ppGrm,te;en;aLet,loBoKrIuG;arGeBi14;ant39d;aGip,ow,umb7;b,sp;es,ve1I;in,th0ze;aQeaPiNlLoIracHuncG;ti3I;tu4;cus,lHrG;ce,eca5m,s30;d,l22;aFoG;at,od,w;gu4lGniFx;e,l;r,tu4;il,ll,vG;or;a13cho,dAle6mSnPstNvalua8xG;a0AcLerKi5pGte16;a15eHlaDoGreB;rt,se;ct,riG;en9;ci1t;el,han3;abGima8;liF;ab7couXdHfor9ga3han9j03riCsu4t0vG;isi2Vy;!u4;body,er3pG;hasiGow0;ze;a06eUiMoLrHuG;mp;aIeHiGop;ft;am,ss;g,in;!d3ubt;e,ff0p,re6sHvG;e,iXor9;aJcGli13miBpl18tinguiF;oGuB;uGv0;ra3;gr1YppG;ear,ro2;al,cNem,fLliv0ma0Cny,pKsHterG;mi0D;cribe,er2iHtrG;oy;gn,re;a08e07i6osA;eGi08y;at,ct;iIlHrG;ea1;a4i04;de;ma3n9re,te;a0Ae09h06i8l03oJrGut;aHeGoBuFy;a8dA;ck,ve;llYmSnHok,py,uGv0;gh,nt;cePdu6fMsKtIvG;eGin9;rt,y;aDin0XrG;a5ibu8ol;iGtitu8;d0st;iHoGroE;rm;gu4rm;rn;biKe,foJmaIpG;a4laD;re;nd;rt;ne;ap1e6;aHiGo1;ng,p;im,w;aHeG;at,ck,w;llen3n3r3se;a1nt0;ll,ncHrGt0u1;e,ry;el;aUeQloPoNrKuG;dgIlHrG;n,y;ly;et;aHuF;sh;ke;a5mb,o5rrGth0un9;ow;ck;ar,coSgDlHnefAtrG;ay;ie2ong;in;nGse;!g;band0Jc0Bd06ffo05gr04id,l01mu1nYppTrQsKttGvoid,waA;acIeHra6;ct;m0Fnd;h,k;k,sG;eIiHocia8uG;me;gn,st;mb7rt;le;chHgGri2;ue;!i2;eaJlIroG;aCve;ch;aud,y;l,r;noun9sw0tG;icipa8;ce;lHt0;er;e3ow;ee;rd;aRdIju5mAoR;it;st;!reB;ss;cJhie2knowled3tiva8;te;ge;ve;eIouEu1;se;nt;pt;on|Actor¦aFbricklayEdBengineEfireAgardenEh9instructLjournalHlawyEm8opeKp5r3s1t0;echnBherapG;ailJcientFoldiCu0;pervGrgeon;e0oofA;ceptionCsearch9;hotograph8lumb8oli1r0sychologB;actition7ogramm7;cem5t4;echanic,inist5us3;airdress4ousekeep4;fight3m2;eputy,iet0;ici0;an;er;ccoun6d2ge7r0ssis6ttenda7;chitect,t0;ist;minist1v0;is1;rat0;or;ta0;nt|Honorific¦aObrigadiNcHdGexcellency,fiBking,liDmaAofficNp6queen,r3s0taoiseach,vice5;e0ultJ;c0rgeaC;ond liAretary;abbi,e0;ar0verend; adJ;astFr0;eside6i0ofessE;me ministEnce0;!ss;gistrate,r4yB;eld mar3rst l0;ady,i0;eutena0;nt;shA;oct5utchess;aptain,hance3o0;lonel,mmand4ngress0unci2;m0wom0;an;ll0;or;er;d0yatullah;mir0;al|SportsTeam¦0:1M;1:1T;2:1U;a1Rb1Dc0Zd0Qfc dallas,g0Nhouston 0Mindiana0Ljacksonville jagua0k0Il0Fm02newVoRpKqueens parkJrIsAt5utah jazz,vancouver whitecaps,w3yY;ashington 3est ham0Xh16;natio21redski1wizar12;ampa bay 6e5o3;ronto 3ttenham hotspur;blu1Hrapto0;nnessee tita1xasD;buccanee0ra1G;a7eattle 5heffield0Qporting kansas13t3;. louis 3oke12;c1Srams;mari02s3;eah1IounI;cramento Sn 3;antonio spu0diego 3francisco gi0Bjose earthquak2;char0EpaB;eal salt lake,o04; ran0C;a8h5ittsburgh 4ortland t3;imbe0rail blaze0;pirat2steele0;il3oenix su1;adelphia 3li2;eagl2philNunE;dr2;akland 4klahoma city thunder,r3;i10lando magic;athle0Trai3;de0; 3castle05;england 6orleans 5york 3;city fc,giUje0Lkn02me0Lred bul19y3;anke2;pelica1sain0J;patrio0Irevolut3;ion;aBe9i3ontreal impact;ami 7lwaukee b6nnesota 3;t4u0Rvi3;kings;imberwolv2wi1;re0Cuc0W;dolphi1heat,marli1;mphis grizz3ts;li2;nchester 5r3vN;i3li1;ne0;c00u0H;a4eicesterYos angeles 3;clippe0dodFlaA; galaxy,ke0;ansas city 3nH;chiefs,ro3;ya0M; pace0polis colX;astr0Edynamo,rockeWtexa1;i4olden state warrio0reen bay pac3;ke0;anT;.c.Aallas 7e3i0Cod5;nver 5troit 3;lio1pisto1ti3;ge0;bronc06nuggeO;cowboUmav3;er3;ic06; uX;arCelNh8incinnati 6leveland 5ol3;orado r3umbus crew sc;api5ocki2;brow1cavalie0india1;benga03re3;ds;arlotte horCicago 3;b4cubs,fire,wh3;iteE;ea0ulY;di3olina panthe0;ff3naW; c3;ity;altimore ElAoston 7r3uffalo bilT;av2e5ooklyn 3;ne3;ts;we0;cel4red3; sox;tics;ackburn rove0u3;e ja3;ys;rs;ori3rave1;ol2;rizona Ast8tlanta 3;brav2falco1h4u3;nited;aw9;ns;es;on villa,r3;os;c5di3;amondbac3;ks;ardi3;na3;ls|Uncountable¦a14b0Zc0Qe0Kf0Fg0Bh05i02jewel09knowled13lXmPnOoNpLreJs9t6vi5w0;a3ea00i2o0;ol,rld0;! seE;ldlife,ne;rmth,t0V;neg0NolY;ennis,ime,oothpaste,r0una;affJou0;ble,sers;a8ceneZe7h6il5o4p1team,u0;g0Inshi0B;ace1e0;ciHed;!c0S;ap,cc0Lft03;k,v0K;eep,opp0G;riC;dZfe0Mlt,nd;c0lax05search;ognit07re04;ap0Ee0hys08last5oLressU;anNtrol;il,xygen;ews,oi09;a5ea3i2oo08u0;mps,s0;ic;lk,st;sl0t;es;chine0il,thematY; learn00ry;aught02e2i1u0;ck,g03;ghtnXqu08teratG;a0isF;thY;ce,mp0nformMtself;ati0ortan03;en02;alib4isto3o0;ck1mewo0n1spitaliY;rk;ey;ry;ut;o1r0um,ymnastI;a6ound;l0ssip;d,f;ictClour,o1ruit,urnit0;ure;od,rgive0wl;ne0;ss;conom9duc4lectriciKn2quip3th9very0;body,o0thB;ne;joy0tertain0;ment;at2;ash,elcius,h4iv3loth6o0urrency;ld w1nfus0;ion;ar;ics;aos,e0;e1w0;ing;se;a1eef,read,utt0;er;g0ss;ga0;ge;c3dvi2irc1mnes0;ty;raft;ce;id|Unit¦0:15;a11b0Zc0Ld0Ke0If0Eg0Ah07in06joule0kZlXmNnMoLpHqGsqBt6vol00wb,y4z3°2µ1;g,s;c,f,n;b,e2;a0Kb,d0Qears old,o1;tt0E;able4b3e2on1sp;!nes;a2r0B;!l,sp;spoon0; ft,uare 1;c0Gd0Ff3i0Dkilo0Hm1ya0C;e0Kil1;e0li0F;eet0o0B;t,uart0;a3e2i1ounds,t;c0Knt0;rcent,t00;!scals;hms,uV;an0GewtR;/s,b,e7g,i3l,m2p1²,³;h,s;!²;!/h,cro3l1;e1li05; Ds D²;g05s0A;gPter1;! 1s 1;per second;b,i00m,u1x;men0xs;b,elvin0g,ilo3m2no1;ts;!/h,ph,²;byYgWmeter1;! 2s1;! 1;per hour;²,³;e1g,z;ct1rtzs;aVogP;al2b,ig9ra1;in0m;!l1;ons;a3emtOl1tG; oz,uid ou1;nce0;hrenheit0rad0;b,x1;abyH;eciCg,l,mA;arat0eAg,l,m9oulomb0u1;bic 1p0;c5d4fo3i2meAya1;rd0;nch0;ot0;eci2;enti1;me4;!²,³;lsius0nti1;g2li1me1;ter0;ram0;bl,y1;te0;c3tt1;os1;econd0;re0;!s|Pronoun¦'em,h4i3me,ourselves,she2th0us,we,yourself;e0ou;m,y;!'s;!l,t;e's,im|Organization¦0:3U;1:2Z;2:35;a33b2Jc25d1Xe1Tf1Pg1Jh1Ei1Cj18k16l12m0Sn0Go0Dp07qu06rZsUtHuDvAw5y3;amaha,m0Xou3w0X;gov,tu2K;a5e3orld trade organizati3R;lls fargo,st3;fie1Yinghou15;l3rner br34;-m10gree1l street journ20m10;an halOeriz3Misa,o3;dafo29l3;kswagMvo;bs,kip,n4ps,s3;a tod2Kps;es2Wi3;lev2Eted natio1; mobi2Caco bePd bMeCgi fridaBh5im horto1mz,o3witt2D;shiba,y3;ota,s r Y;e 3in lizzy;b5carpen2Udaily ma2guess w4holli0rolling st1Is3w4;mashing pumpki1uprem0;ho;ea3lack eyed pe35yrds;ch bo3tl0;ys;l4s3;co,la m0Y;efoni07us;a6ex pisto5ieme1np,oundgard4pice gir5ta3ubaru;rbucks,to2;en;ls;few20insbu21msu1R;.e.m.,adiohead,b8e5oyal 3yan2Q;b3dutch she6;ank;/max,aders dige1Bd 3vl2U;bu3c1Ohot chili peppe2Dlobst1R;ll;c,s;ant2Nizno28;an7bs,e5fiz1Nhilip morr1Zi4r3;emier20octer & gamb1Ludenti11;nk floyd,zza hut;psi21tro3uge08;br2Ichina,n2I; 4ason1Sda29;ld navy,pec,range juli4xf3;am;us;aBbAe6fl,h5i4o3sa,wa;kia,tre dame,vart1P;ke,ntendo,ss0J;l,s;c,stl5tflix,w3; 3sweek;kids on the block,york07;e,é;a,c;nd1Ns4t3;ional aca27o,we0N;a,car,d0L;aBcdonaldAe7i5lb,o3tv,yspace;b2nsanto,ody blu0t3;ley crue,or0L;crosoft,t3;as,subisO;dica4rcedes-benz,talli3;ca;id,re;'s,s;c's milk,z1R;'ore07a5e3g,ittle caesa1E;novo,x3;is,mark; pres7-z-boy,bour party;atv,fc,kk,m3od1E;art;iffy lu0Go5pmorgan3sa;! cha3;se;hnson & johns1Ly d1K;bm,hop,nte3tv;l,rpol; & m,asbro,ewlett-packSi5o3sbc,yundai;me dep3n1D;ot;tac3zbollah;hi;eneral 6hq,l5mb,o4reen d0Fu3;cci,ns n ros0;ldman sachs,og08;axo smith kliYencore;electr0Hm3;oto0S;a5bi,da,edex,i3leetwood mac,rito-l09;at,nancial3restoU; tim0;cebook,nnie mae;b05sa,u5xxon3; m3m3;ob2;!rosceptics;aimlXe7o5u3;nkin donuts,ran dur3;an;j,w j3;on0;f lepp4ll,peche mode,r spiegYstiny's chi3;ld;ard;aEbc,hiDiBnn,o5r3;aigsli7eedence clearwater reviv3ossra2;al;ca c7l6m3o08st03;ca4p3;aq;st;dplMgate;ola;a,sco3tigroup;! systems;ck fil-a,na daily;dbury,pital o3rl's jr;ne;aIbc,eEfCl7mw,ni,o3p,rexiteeX;ei5ston 3;glo3pizza;be;ng;ack & deck6o4ue c3;roY;ckbuster video,omingda3;le;er; g3g3;oodriN;cht5e ge0n & jer4rkshire hathaw3;ay;ryH;el;nana republ5s3;f,kin robbi1;ns;ic;bWcRdidQerosmith,ig,lLmFnheuser-busEol,ppleAr7s4t&t,v3;is;hland3sociated H; o2;il;by6g4m3;co;os; compu4bee3;'s;te3;rs;ch;c,d,erican5t3;!r3;ak; ex3;pre3;ss; 5catel4t3;air;!-lucent;jazeera,qae3;da;as;/dc,a5er,t3;ivisi3;on;demy of scienc0;es;ba,c|Demonym¦0:12;a0Rb0Ic07d05e04fi03g01hZiVjSkQlMmInFpBqatari,r9s6t4u3v2z1;am0Aimbabwe0;enezuel0ietnam0C;g7krai0W;aiwQhai,rinida0Du1;ni0Lrkmen;a2cot0Fenegal08ingapoLlovak,oma0Opa00udOw1y0S;edi0Fiss;mo0uS;o5us0Hw1;and0;a2eru0Dhilipp0Lo1;li0Artugu02;kistani,lesti0Mna1raguay0;ma0L;amiWi1orweN;caragu0geri1;an,en;a2ex0Jo1;ngo0Brocc0;cedo0Fla1;gasy,y05;a3eb8i1;b1thua0C;e0Ay0;o,tZ;azakh,eny0o1uwaiti;re0;a1orda07;ma08p1;anK;celandic,nd3r1sraeli,taZvo03;a1iQ;ni0qi;i0oneS;aiAin1ondur0unK;di;amAeor1hanai0reek,uatemal0;gi0;lipino,n3;cuadoUgyp5stoVthiopi0urope0;a1ominWut3;niG;a8h5o3roa2ub0ze1;ch;ti0;lom1ngol4;bi0;a5i1;le0n1;ese;liforKm1;bo1erooJ;di0;angladeshi,el7o5r2ul1;gaF;aziAi1;ti1;sh;li1sC;vi0;aru1gi0;si0;f9l6merAngol0r4si0us1;sie,tr1;a1i0;li0;gent1me4;ine;ba2ge1;ri0;ni0;gh0r1;ic0;an|Possessive¦anyAh5its,m3noCo1sometBthe0yo1;ir1mselves;ur0;!s;i8y0;!se4;er1i0;mse2s;!s0;!e0;lf;o1t0;hing;ne|Currency¦$,aud,bPcNdIeurHfGgbp,hkd,inr,jpy,kElCp9r8s3usd,x2y1z0¢,£,¥,ден,лв,руб,฿,₡,₨,€,₭,﷼;lotyPł;en,uanO;af,of;h0ter1;e1il0;lings;k0q0;elI;oubleHp,upeeH;e0ound sterlingG;n0soF;ceEnies;e0i7;i,mpi6;n,r0wanzaByatB;!onaAw;ori7rancs,t;!o8;en3i2kk,o0;b0ll2;ra5;me4n0rham4;ar3;ad,e0ny;nt1;aht,itcoin0;!s|Country¦0:2W;a2Jb20c1Od1Ke1Ef19g11h0Zi0Wja0Vk0Ul0Pm0Cn02om2ZpWqat17rUsItAu4v2wallis and futu2Mz1;a1Rimbabwe;a1enezue2Pietnam;nuatu,tican city;.4gRkraiXnited 2ruVs1zbeD;a,sr;arab emirat0Gkingdom,states1;! of am2L;k.,s.1; 1Va.;a6imor-leste,o5rinidad3u1;nis0rk1valu;ey,me2Ls and caic1H; and 1-1;toba17;go,kel0Pnga;iw2Jji1nz2F;ki2H;aAcotl1Re9i6lov5o3pa1Zri lanka,u2w1yr0;azil1Qed7itzerl1Q;d2Friname;lomon1Kmal0uth 1;afr27kJsud2D;ak0en0;erra leoDn1;gapo1Lt maart1;en;negIrb0ychellV;int 1moa,n marino,udi arab0;hele1Tluc0mart1O;epublic of ir04om21uss0w1;an1U;a2eFhilippinQitcairn19o1uerto riK;l1CrtugC;ki20l2nama,pua new0Ira1;guay;au,esti1;ne;a8e6i4or1;folk15th1; k1ern mariana11;or0C;caragua,ger1ue;!ia;p1ther0Yw zeal11;al;mib0u1;ru;a5exi4icroZo1yanmV;ldova,n1roc3zamb7;gol0t1;enegro,serrat;co;c7dagascQl4r2urit1;an0i0V;shall0Mtin1;ique;a2div1ta;es;wi,ys0;ao,edR;a4e3i1uxembourg;b1echtenste0Rthu15;er0ya;ban07sotho;os,tv0;azakh14eeling0BiribaTosovo,uwait,yrgyz14;ma0Yp14;c2ndoFra1sle of m13taly,vory coast;n,q;el0B;aiOon1ungary;dur0Ig kong;a7ermany,ha0Libralt6re5u1;a3ernsey,inea1ya0K;!-biss1;au;deloupe,m,tema0M;ece,na0J;ar;bRmb0;a4i3rench 1;guia0Cpoly1;nes0;ji,nlX;lklandSroeS;ast tim5cu4gypt,l salv4quatorial2ritr3st1thiop0;on0; guin1;ea;ad1;or;enmark,jibou3ominica2r con1;go;!n A;ti;a9entral african 8h6o3roat0u2zech1; 7ia;ba,racao;c2lo1morOngo-brazzaville,okEsta r02te d'ivoiJ;mb0;osC;i1ristmasE;le,na;republic;m1pe verde,yman8;bod0ero1;on;aEeBhutZo7r3u1;lgar0r1;kina faso,ma,undi;azil,itish 1unei;virgin1; is1;lands;liv0nai3snia and herzegoviFtswaFuvet1; isl1;and;re;l1n6rmuE;ar1gium,ize;us;h2ngladesh,rbad1;os;am2ra1;in;as;fghaElBm9n4r2ustr1zerbaijG;al0ia;genti1men0uba;na;dorra,g3t1;arct5igua and barbu1;da;o1uil1;la;er1;ica;b1ger0;an0;ia;ni1;st1;an|Region¦0:1S;a1Xb1Qc1Gd1Ces1Bf18g12h0Zi0Xj0Vk0Sl0Pm0EnZoXpSqPrMsDtButAv6w3y1zacatec1Z;o05u1;cat17kZ;a1est vir5isconsin,yomi13;rwick0shington1;! dc;er3i1;cto1Gr1;gin1O;acruz,mont;ah,tar pradesh;a1ex1Olaxca1Ausca9;bas0Kmaulip1NsmJ;a6i4o2taf0Nu1ylh12;rrZs0X;me0Zno18uth 1;cSdR;ber1Fc1naloa;hu0Rily;n2skatchew0Qxo1;ny; luis potosi,ta catari1F;a1hode7;j1ngp01;asth0Lshahi;inghai,u1;e1intana roo;bec,ensVreta0D;ara4e2rince edward1; isT;i,nnsylv1rnambu02;an11;!na;axa0Ldisha,h1klaho16ntar1reg4x03;io;ayarit,eAo3u1;evo le1nav0J;on;r1tt0Pva scot0U;folk,mandy,th1; 1ampton0;c3d2yo1;rk0;ako0V;aroli0S;brasLva01w1; 2foundland1;! and labrador;brunswick,hamp0jers1mexiKyork state;ey;a6i2o1;nta0Lrelos;ch3dlanBn2ss1;issippi,ouri;as geraGneso0K;igQoacQ;dhya,harasht03ine,ni3r1ssachusetts;anhao,y1;land;p1toba;ur;anca0e1incoln0ouisia0B;e1iH;ds;a1entucky,hul08;ns06rnata1shmir;ka;alis1iangxi;co;daho,llino1owa;is;a2ert1idalEunA;ford0;mp0waii;ansu,lou5u1;an2erre1izhou,jarat;ro;ajuato,gdo1;ng;cester0;lori2uji1;an;da;sex;erby0o2uran1;go;rs1;et;a8ea7hi6o1umbrG;ahui4l3nnectic2rsi1ventry;ca;ut;iJorado;la;apDhuahua;ra;l7m1;bridge0peche;a4r3uck1;ingham0;shire;emen,itish columb3;h2ja cal1var2;iforn1;ia;guascalientes,l4r1;izo2kans1;as;na;aba2ber1;ta;ma|City¦a2Ab1Kc1Cd17e16f14g0Yh0Si0Qjakar1Vk0Il0Fm05n01o00pTquiSrOsItAu9v7w3y1z0;agreb,uri1F;ang19e0okohama;katerin0Xrev2H;ars2exford,i0rocl2;ckl0En0;nipeg,terth0F;aw;a0ilni2E;ncouv04r1W;lan bat01trecht;a5bilisi,e4he3i2o1rondheim,u0;nis,rku;kyo,ronF;anj1Kl0Mmiso20ra1R; haGssaloni0H;gucigalpa,hr24l av06;i0llinn,mpe1SngiWrtu;chu1Jn22pL;a3e2h1kopje,t0;ockholm,uttga0L;angh0Xenzh1E;o05ville;int peters0Dlz0Dn 0ppo4;jose,salvadN;eykjavik,i1o0;me,t1Q;ga,o de janei0;ro;to;alerKetah tik10h5i4o2r0ueb1Ayongya17;a0etor1N;gue;rt0zn1N; elizabeth,o;ls10rae1N;iladelph1Inom peU;dessa,sa16ttawa;a2ew 0is;delMtaip0york;ei;goya,nt0Jpl0Jv1F;a4e3i2o0umb0C;nt0scC;evideo,real;nTskolc;dellín,lbour0I;drid,l3n1rib0;or;chest0dalQi0R;er;mo;a pla0Fi0os angel08v6;mass0nz,sbUverpo0;ol;a4hark3laipeda,o1rak0uala lump2;ow;pavog0sice;ur;iv;b3mpa0Gndy,ohsiu0Dra0unZ;c0j;hi;ncheKstanb0̇zmir;ul;a4e2o0; chi mi0ms;nh;lsin0rakliF;ki;ifa,m2noi;alw4dan3en2hent,iza,othen1raz,ua0;dalaj0Engzhou;bu0M;eSoa;sk;ay;es,rankfu0;rt;dmont4indhovS;a1haZoha,u0;rb0Bshanbe;e0kar,masc0CugavpiH;gu,je0;on;a6ebu,h2o0raioHuritiZ;lo0nstanHpenhagLrk;gDmbo;enn2i1ristchur0;ch;ang m0cago,ttagoJ;ai;lgary,pe town;aHeBogoAr5u0;char3dap3enos air2r0sY;g0sa;as;es;est;a2isba1usse0;ls;ne;silOtisla0;va;ta;i3lgrade,r0;g1l0n;in;en;ji0rut;ng;ku,n3r0sel;celo1ranquil0;la;na;g1ja lu0;ka;alo0kok;re;aAb8hmedabad,l6m4n2qa1sh0thens,uckland;dod,gabat;ba;k0twerp;ara;m4s0;terdam;exandr0maty;ia;idj0u dhabi;an;lbo1rh0;us;rg|Place¦aKbIcGdFeDfCg9h8i7jfk,kul,l6m4new england,ord,p2s1the 0upHyyz;bronx,hamptons;fo,oho,yd;acifKek,h0;l,x;a0co,idCuc;libu,nhattJ;as,gw,hr;ax,cn,ndianGst;arlem,kg,nd;ay village,re0;at 0enwich;britain,lak2;co,ra;urope,verglad0;es;en,fw,own1xb;dg,gk,hina0lt;town;cn,e0kk;l air,verly hills;frica,m5ntar1r1sia,tl0;!ant1;ct0;ic0; oce0;an;ericas,s|Person¦a01bZcTdQeOfMgJhHinez,jFkEleDmAnettPo9p7r4s3t2uncle,v0womL;a0irgin maH;lentino rossi,n go3;heresa may,iger woods,yra banks;addam hussaQcarlett johanssRistZlobodan milosevic,omeone,tepGuC;ay romano,eese witherspoQo1ush limbau0;gh;d stewart,naldinho,sario;a0ipV;lmUris hiltM;prah winfrOra;an,essiaen,itt romnNo0ubarek;m0thR;!my;bron james,e;anye west,iefer sutherland,obe bryaN;aime,effersFk rowli0;ng;alle ber0ulk hog3;ry;astBentlem1irl,rand0uy;fa2mo2;an;a0ella;thF;ff0meril lagasse,zekiel;ie;a0enzel washingt4ick wolf,ude;d0lt3nte;!dy;ar2lint1ous0ruz;in;on;dinal wols1son0;! palm5;ey;arack obama,oy,ro0;!ck,th2;dolf hitl1shton kutch1u0;nt;er|WeekDay¦fri6mon4s2t1wed0;!nesd4;hurs4ues4;at0und2;!urd3;!d0;ays;!d0;ay0;!s|Date¦daylight7eom,one d6s4t1week0yesterd6;d5end;mr1o0;d3morrow;!w;ome 0tandard2;d0point;ay; time|Time¦a6breakfast 5dinner5e3lunch5m2n0oclock,some5to7;i7o0;on,w;id4or1;od,ve0;ning;time;fternoon,go,ll day,t 0;ni0;ght|Holiday¦0:1P;1:1O;a1Eb1Ac12d0Ye0Pf0Lg0Ih0Ei0Ajune08kwanzaa,l05m01nYoVpRrPsFt9v6w4xm04y2;om 2ule;hasho15kippur;hit2int0Xomens equalit8; 0Ss0T;alentines3e2ictor1D;r1Ateran1;! 0;-0ax 0h6isha bav,rinityMu2; b3rke2;y 0;ish2she2;vat;a0We prophets birth0;a6eptember13h4imchat tor0Tt 3u2;kk4mmer U;a8p7s6valentines day ;avu2mini atzeret;ot;int 2mhain;a4p3s2valentine1;tephen1;atrick1;ndrew1;amadan,ememberanc0Xos2;a park1h hashana;a3reside0Yur2;im,ple heart 0;lm2ssovF; s04;rthodox 2stara;christma1easter2goPhoKn0B;! m07;ational 3ew years2;! 0U;freedom 0nurse1;a2emorial 0lHoOuharram;bMr2undy thurs0;ch0Fdi gr2tin luther k09;as;a2itRughnassadh;bour 0g baom2ilat al-qadr;er; 2teenth;soliT;d aJmbolc,n2sra and miraj;augurGd2;ependen2igenous people1;c09t1;a3o2;ly satur0;lloween,nukkSrvey mil2;k 0;o3r2;ito de dolores,oundhoU;odU;a4east of 2;our lady of guadalupe,the immaculate concepti2;on;ther1;aster 8id 3lectWmancip2piphany;atV;al-3u2;l-f3;ad3f2;itr;ha;m8s2;un0;ay of the dead,ecemb3i2;a de muertos,eciseis de septiembre,wali;er sol2;stice;anad7h4inco de mayo,o3yber m2;on0;lumbu1mmonwealth 0rpus christi;anuk3inese n2ristmaN;ew year;ah;a 0ian tha2;nksgiving;astillCeltaine,lack4ox2;in2;g 0; fri0;dvent,ll 9pril fools,rmistic8s6u2;stral4tum2;nal2; equinox;ia 0;cens2h wednes0sumption of mary;ion 0;e 0;hallow6s2;ai2oul1t1;nt1;s 0;day;s 2;eve|Month¦aAdec8feb6j2nov8oct1sep0;!t7;!o7;an2u0;l0n;!y;!u1;!ru0;ary;!em0;ber;pr,ug|Duration¦centur4d2hour3m0seconds,week,year3;i0onth2;llisecond1nute1;ays,ecade0;!s;ies,y|FirstName¦andra,devan,jammie,k0lashawn,mel,shiloh;asey,enyatta|Adjective¦0:73;1:7I;2:7O;3:7H;4:7A;5:5A;6:47;7:48;8:4Q;9:5Z;A:7F;B:6X;C:5V;D:6Y;E:71;a6Hb63c5Pd55e4Rf48g40h3Pi34j32k31l2Qm2Fn26o1Qp1Aquack,r10s0Gt09uQvNwFyear5;arp0eJholeIiHoF;man5oFu6A;d6Czy;despr73s5E;!sa7;eGlFste25;co1Hl o4J;!k5;aGiFola4A;b7Rce versa,ol53;ca2gabo61nilla;ltWnJpGrb58su4tterF;!moB; f33b1NpGsFti1G;ca7et,ide dMtairs;er,i3M;aPbeco6Pconvin26deMeLfair,ivers4knKprecedYrIsGwF;iel1Zritt5X;i1UuF;pervis0specti3;eFu5;cognLgul6Fl6F;own;ndi3v5Rxpect0;cid0rF;!grou5MsF;iz0tood;b7ppeaLssu6EuthorF;iz0;i23ra;aJeHhough4NoGrF;i1oubl0;geth8p,rpD;en5OlFm4Yrr2Tst0;li3;boo,lFn;ent0;aXcWeUhTiRmug,nobbi3DoPpOqueami3DtJuFymb62;bHi gener53pFrprisi3;erFre0K;! dup8b,i28;du0seq4S;anda6SeIi0OrFy37;aightFip0; fFfF;or59;adfaBreotyp0;aCec2Fir1IlendDot on; call0le,mb8phist1WrFu0Wvi40;dDry;gnifica2nF;ceCg7;am2Oe8ocki3ut;cFda1em5lfi2Xni1Vpa67re6;o1Fr3U;at56ient27reec56;cr0me,ns serif;aMeIiGoF;buBtt4SuSy4;ghtFv4;!-28f9;ar,bel,condi1du61fres50lHpublic3UsFtard0;is46oF;lu1na2;e1Duc44;bDciF;al,st;aPeNicayu6lacDopuliBrGuF;bl58mp0;eJiGoF;!b09fuEmi30p8;mGor,sFva1;ti6;a4Ue;ciEmF;a0Hi5I;ac20rFti1;feAma2Tplexi3v33;rFst;allelHtF;-tiFi4;me;!ed;bQffOkNld fashion0nMpLrg1Hth8utKvF;al,erF;!aHniGt,wF;eiFrouF;ght;ll;do0Ver,g2Lsi45;en,posi1; boa5Fg2Jli6;!ay; gua5DbFli6;eat;eHsF;cFer0Hole1;e6uC;d2Sse;ak0eMiLoFua4O;nJrGtF;ab7;thF;!eF;rn;chala2descri4Zstop;ght5;arby,cessa3Wighbor5xt;aNeLiIoFultip7;bi7derGlFnth5ot,st;dy;a1n;nFx0;iaFor;tuC;di4EnaFre;ci3;cFgenta,in,j03keshift,le,mmoth,ny,sculi6;abCho;aOeJiGoFu13;uti12vi3;mGteraF;l,te;it0;ftIgFth4;al,eGitiF;ma1;nda3C;!-0C;nguDst,tt8;ap1Sind5no0A;agg0uF;niOstifi0veni7;de4gno4Blleg4mSnHpso 1VrF;a1releF;va2; NaMbr0corLdJfluenTiTnIsHtF;aAenEoxF;ic36;a6i2R;a1er,oce2;iGoF;or;reA;deq3Jppr2Y;fFsitu,vitro;ro2;mJpF;arHerfeAoFrop8;li1rtF;a2ed;ti4;eFi0Q;d2QnE;aKelJiHoFumdr3B;neBok0rrFs07ur5;if2S;ghfalut1OspF;an2Q;liZpf9;lInHrF;d05roF;wi3;dy,gi3;f,low0;ainf9ener2Jiga22lLoKraHuF;ilFng ho;ty;cGtF;ef9is;ef9;ne,od;ea2Dob4;aUeOinNlMoHrF;a1TeFoz1K;e2Dq12tf9;oHrF; keeps,eFm8tuna1;g04ign;liF;sh;ag2Zue2;al,i1;dJmGrF;ti7;a7ini6;ne;le; up;bl0i2lEr Fux,vori1;oFreac1F;ff;aOfficie2lNmiMnKreAthere4veJxF;aAcess,peHtraGuF;be2Ml0I;!va1E;ct0rt;n,ryday; Fcouragi3tiC;rou1sui1;ne2;abo23dQe18i1;g8sF;t,ygF;oi3;er;aVeNiHoFrea15ue;mina2ne,ubF;le,tf9;dact1Bfficu1OsGvF;erE;creHeas0gruntl0honeBordGtF;a2ress0;er5;et; LadpKfJgene1PliHrang0spe1PtGvoF;ut;ail0ermin0;be1Mca1ghF;tf9;ia2;an;facto;i5magFngeroZs0I;ed,i3;ly;ertaRhief,ivil,oHrF;aFowd0u0H;mp0v02z0;loNmLnGoi3rrFve0P;eAu1I;cre1grIsHtF;emFra0F;po0D;ta2;ue2;mer08pleF;te,x;ni4ss4;in;aPeLizarClJoGrF;and new,isk,okP;gGna fiWttom,urgeoF;is;us;ank,iI;re;autif9hiGlov0nFst,yoG;eVt;nd;ul;ckGnkru0XrrF;en;!wards; priori,b0Nc0Kd0AfraDg05h04lZma06ntiquYpUrOsMttracti07utheLvIwF;aGkF;wa0U;ke,re;ant garGerF;age;de;ntV;leep,tonisF;hi3;ab,bitIroHtiF;fiF;ci4;ga2;raF;ry;pFt;are2etiPrF;oprF;ia1;at0;arIcohGeFiMl,oof;rt;olF;ic;mi3;ead;ainBgressiGoniF;zi3;ve;st;id; MeKuJvF;aGerE;se;nc0;ed;lt;pt,qF;ua1;hoc,infinitF;um;cuGtu4u1;al;ra1;erPlOoMruLsGuF;nda2;e2oGtraA;ct;lu1rbi3;ng;te;pt;aFve;rd;aze,e;ra2;nt|Expression¦a02b01dXeVfuck,gShLlImHnGoDpBshAu7voi04w3y0;a1eLu0;ck,p;!a,hoo,y;h1ow,t0;af,f;e0oa;e,w;gh,h0;! 0h,m;huh,oh;eesh,hh,it;ff,hew,l0sst;ease,z;h1o0w,y;h,o,ps;!h;ah,ope;eh,mm;m1ol0;!s;ao,fao;a4e2i,mm,oly1urr0;ah;! mo6;e,ll0y;!o;ha0i;!ha;ah,ee,o0rr;l0odbye;ly;e0h,t cetera,ww;k,p;'oh,a0uh;m0ng;mit,n0;!it;ah,oo,ye; 1h0rgh;!em;la|Comparable¦0:41;1:4I;2:45;3:4B;4:2Y;5:3X;a4Ob44c3Od3De35f2Rg2Fh24i1Vj1Uk1Rl1Im1Cn16o14p0Tqu0Rr0IsRtKuIvFw7y6za12;ell27ou3;aBe9hi1Yi7r6;o3y;ck0Mde,l6n1ry,se;d,y;a6i4Mt;k,ry;n1Tr6sI;m,y;a7e6ulgar;nge5rda2xi3;gue,in,st;g0n6pco3Mse5;like0ti1;aAen9hi8i7ough,r6;anqu2Qen1ue;dy,g3Ume0ny,r09;ck,n,rs2R;d42se;ll,me,rt,s6wd47;te5;aVcarUeThRiQkin0GlMmKoHpGqua1HtAu7w6;eet,ift;b7dd15per0Hr6;e,re2J;sta2Ht4;aAe9iff,r7u6;pXr1;a6ict,o3;ig3Hn0W;a1ep,rn;le,rk;e24i3Hright0;ci2Aft,l7o6re,ur;n,thi3;emn,id;a6el0ooth;ll,rt;e8i6ow,y;ck,g37m6;!y;ek,nd3F;ck,l0mp4;a6iUort,rill,y;dy,ll0Zrp;cu0Tve0Txy;ce,ed,y;d,fe,int0l1Xv16;aBe9i8o6ude;mantic,o1Ksy,u6;gh,nd;ch,pe,tzy;a6d,mo0J;dy,l;gg7ndom,p6re,w;id;ed;ai2i6;ck,et;aFhoEi1SlCoBr8u6;ny,r6;e,p4;egna2ic7o6;fou00ud;ey,k0;li06or,te1D;a6easa2;in,nt;ny;in5le;dd,f6i0ld,ranR;fi11;aAe8i7o6;b4isy,rm16sy;ce,mb4;a6w;r,t;ive,rr02;aAe8ild,o7u6;nda1Ate;ist,o1;a6ek,llY;n,s0ty;d,tuR;aCeBi9o6ucky;f0Vn7o1Eu6ve0w18y0U;d,sy;e0g;g1Uke0tt4v6;e0i3;an,wd;me,r6te;ge;e7i6;nd;en;ol0ui1P;cy,ll,n6;sBt6;e6ima8;llege2r6;es7media6;te;ti3;ecu6ta2;re;aEeBiAo8u6;ge,m6ng1R;b4id;ll6me0t;ow;gh,l0;a6f04sita2;dy,v6;en0y;nd1Hppy,r6te5;d,sh;aGenFhDiClBoofy,r6;a9e8is0o6ue1E;o6ss;vy;at,en,y;nd,y;ad,ib,ooI;a2d1;a6o6;st0;t4uiY;u1y;aIeeb4iDlat,oAr8u6;ll,n6r14;!ny;aHe6iend0;e,sh;a7r6ul;get5mG;my;erce8n6rm,t;an6e;ciC;! ;le;ir,ke,n0Fr,st,t,ulA;aAerie,mp9sse7v6xtre0Q;il;nti6;al;ty;r7s6;tern,y;ly,th0;aFeCi9r7u6;ll,mb;u6y;nk;r7vi6;ne;e,ty;a6ep,nD;d6f,r;!ly;mp,pp03rk;aHhDlAo8r7u6;dd0r0te;isp,uel;ar6ld,mmon,ol,st0ward0zy;se;e6ou1;a6vW;n,r;ar8e6il0;ap,e6;sy;mi3;gey,lm8r6;e5i3;ful;!i3;aNiLlIoEr8u6;r0sy;ly;aAi7o6;ad,wn;ef,g7llia2;nt;ht;sh,ve;ld,r7un6;cy;ed,i3;ng;a7o6ue;nd,o1;ck,nd;g,tt6;er;d,ld,w1;dy;bsu9ng8we6;so6;me;ry;rd|Conjunction¦aEbAcuz,how8in caDno7o6p4supposing,t1vers5wh0yet;eth8ile;h0o;eref9o0;!uC;l0rovided that;us;r,therwi6; matt1r;!ev0;er;e0ut;cau1f0;ore;se;lthou1nd,s 0;far as,if;gh|Verb¦awak9born,cannot,fr8g7h5k3le2m1s0wors9;e8h3;ake sure,sg;ngth6ss6;eep tabs,n0;own;as0e2;!t2;iv1onna;ight0;en|Preposition¦'o,-,aKbHcGdFexcept,fEinDmidPnotwithstandiQoBpRqua,sAt6u3vi2w0;/o,hereMith0;!in,oQ;a,s-a-vis;n1p0;!on;like,til;h0ill,owards;an,r0;ough0u;!oI;ans,ince,o that;',f0n1ut;!f;!to;or,rom;espite,own,u3;hez,irca;ar1e0oAy;low,sides,tween;ri6;',bo7cross,ft6lo5m3propos,round,s1t0;!op;! long 0;as;id0ong0;!st;ng;er;ut|Adverb¦a07by 05d01eYfShQinPjustOkinda,mMnJoEpCquite,r9s5t2up1very,w0Bye0;p,s; to,wards5;h1o0wiO;o,t6ward;en,us;everal,o0uch;!me1rt0; of;hXtimes,w07;a1e0;alS;ndomRthN;ar excellDer0oint blank; Mhaps;f3n0;ce0ly;! 0;ag00moU; courHten;ewJo0; longEt 0;onHwithstanding;aybe,eanwhiAore0;!ovB;! aboS;deed,steT;en0;ce;or2u0;l9rther0;!moH; 0ev3;examp0good,suF;le;n mas1v0;er;se;e0irect1; 1finite0;ly;ju7trop;far,n0;ow; CbroBd nauseam,gAl5ny2part,side,t 0w3;be5l0mo5wor5;arge,ea4;mo1w0;ay;re;l 1mo0one,ready,so,ways;st;b1t0;hat;ut;ain;ad;lot,posteriori|Determiner¦aAboth,d8e5few,l3mu7neiCown,plenty,some,th2various,wh0;at0ich0;evB;at,e3is,ose;a,e0;!ast,s;a1i6l0nough,very;!se;ch;e0u;!s;!n0;!o0y;th0;er|Modal¦c5lets,m4ought3sh1w0;ill,o5;a0o4;ll,nt;! to;ay,ight,ust;an,o0;uld|PhrasalVerb¦0:71;1:6P;2:7D;3:73;4:6I;5:7G;6:75;7:6O;8:6B;9:6C;A:5H;B:70;C:6Z;a7Gb62c5Cd59e57f45g3Nh37iron0j33k2Yl2Km2Bn29o27p1Pr1Es09tQuOvacuum 1wGyammerCzD;eroAip EonD;e0k0;by,up;aJeGhFiEorDrit52;d 1k2Q;mp0n49pe0r8s8;eel Bip 7K;aEiD;gh 06rd0;n Br 3C;it 5Jk8lk6rm 0Qsh 73t66v4O;rgeCsD;e 9herA;aRePhNiJoHrFuDype 0N;ckArn D;d2in,o3Fup;ade YiDot0y 32;ckle67p 79;ne66p Ds4C;d2o6Kup;ck FdEe Dgh5Sme0p o0Dre0;aw3ba4d2in,up;e5Jy 1;by,o6U;ink Drow 5U;ba4ov7up;aDe 4Hll4N;m 1r W;ckCke Elk D;ov7u4N;aDba4d2in,o30up;ba4ft7p4Sw3;a0Gc0Fe09h05i02lYmXnWoVpSquare RtJuHwD;earFiD;ngEtch D;aw3ba4o6O; by;ck Dit 1m 1ss0;in,up;aIe0RiHoFrD;aigh1LiD;ke 5Xn2X;p Drm1O;by,in,o6A;n2Yr 1tc3H;c2Xmp0nd Dr6Gve6y 1;ba4d2up;d2o66up;ar2Uell0ill4TlErDurC;ingCuc8;a32it 3T;be4Brt0;ap 4Dow B;ash 4Yoke0;eep EiDow 9;c3Mp 1;in,oD;ff,v7;gn Eng2Yt Dz8;d2o5up;in,o5up;aFoDu4E;ot Dut0w 5W;aw3ba4f36o5Q;c2EdeAk4Rve6;e Hll0nd GtD; Dtl42;d2in,o5upD;!on;aw3ba4d2in,o1Xup;o5to;al4Kout0rap4K;il6v8;at0eKiJoGuD;b 4Dle0n Dstl8;aDba4d2in52o3Ft2Zu3D;c1Ww3;ot EuD;g2Jnd6;a1Wf2Qo5;ng 4Np6;aDel6inAnt0;c4Xd D;o2Su0C;aQePiOlMoKrHsyc29uD;ll Ft D;aDba4d2in,o1Gt33up;p38w3;ap37d2in,o5t31up;attleCess EiGoD;p 1;ah1Gon;iDp 52re3Lur44wer 52;nt0;ay3YuD;gAmp 9;ck 52g0leCn 9p3V;el 46ncilA;c3Oir 2Hn0ss FtEy D;ba4o4Q; d2c1X;aw3ba4o11;pDw3J;e3It B;arrow3Serd0oD;d6te3R;aJeHiGoEuD;ddl8ll36;c16p 1uth6ve D;al3Ad2in,o5up;ss0x 1;asur8lt 9ss D;a19up;ke Dn 9r2Zs1Kx0;do,o3Xup;aOeMiHoDuck0;a16c36g 0AoDse0;k Dse34;aft7ba4d2forw2Ain3Vov7uD;nd7p;e GghtFnEsDv1T;ten 4D;e 1k 1; 1e2Y;ar43d2;av1Ht 2YvelD; o3L;p 1sh DtchCugh6y1U;in3Lo5;eEick6nock D;d2o3H;eDyA;l2Hp D;aw3ba4d2fSin,o05to,up;aFoEuD;ic8mpA;ke2St2W;c31zz 1;aPeKiHoEuD;nker2Ts0U;lDneArse2O;d De 1;ba4d2oZup;de Et D;ba4on,up;aw3o5;aDlp0;d Fr Dt 1;fDof;rom;in,oO;cZm 1nDve it;d Dg 27kerF;d2in,o5;aReLive Jloss1VoFrEunD; f0M;in39ow 23; Dof 0U;aEb17it,oDr35t0Ou12;ff,n,v7;bo5ft7hJw3;aw3ba4d2in,oDup,w3;ff,n,ut;a17ek0t D;aEb11d2oDr2Zup;ff,n,ut,v7;cEhDl1Pr2Xt,w3;ead;ross;d aEnD;g 1;bo5;a08e01iRlNoJrFuD;cDel 1;k 1;eEighten DownCy 1;aw3o2L;eDshe1G; 1z8;lFol D;aDwi19;bo5r2I;d 9;aEeDip0;sh0;g 9ke0mDrD;e 2K;gLlJnHrFsEzzD;le0;h 2H;e Dm 1;aw3ba4up;d0isD;h 1;e Dl 11;aw3fI;ht ba4ure0;eInEsD;s 1;cFd D;fDo1X;or;e B;dQl 1;cHll Drm0t0O;apYbFd2in,oEtD;hrough;ff,ut,v7;a4ehi1S;e E;at0dge0nd Dy8;o1Mup;o09rD;ess 9op D;aw3bNin,o15;aShPlean 9oDross But 0T;me FoEuntD; o1M;k 1l6;aJbIforGin,oFtEuD;nd7;ogeth7;ut,v7;th,wD;ard;a4y;pDr19w3;art;eDipA;ck BeD;r 1;lJncel0rGsFtch EveA; in;o16up;h Bt6;ry EvD;e V;aw3o12;l Dm02;aDba4d2o10up;r0Vw3;a0He08l01oSrHuD;bbleFcklTilZlEndlTrn 05tDy 10zz6;t B;k 9; ov7;anMeaKiDush6;ghHng D;aEba4d2forDin,o5up;th;bo5lDr0Lw3;ong;teD;n 1;k D;d2in,o5up;ch0;arKgJil 9n8oGssFttlEunce Dx B;aw3ba4;e 9; ar0B;k Bt 1;e 1;d2up; d2;d 1;aIeed0oDurt0;cFw D;aw3ba4d2o5up;ck;k D;in,oK;ck0nk0st6; oJaGef 1nd D;d2ov7up;er;up;r0t D;d2in,oDup;ff,ut;ff,nD;to;ck Jil0nFrgEsD;h B;ainCe B;g BkC; on;in,o5; o5;aw3d2o5up;ay;cMdIsk Fuction6; oD;ff;arDo5;ouD;nd;d D;d2oDup;ff,n;own;t D;o5up;ut","conjugations":"t:ake,ook,,,aken|:can,could,can,_|free:_,,,ing|puk:e,,,ing|ar:ise,ose,,,isen|babys:it,at|:be,was,is,am,been|:is,was,is,being|beat:_,,,ing,en|beg:in,an,,inning,un|ban:_,ned,,ning|bet:_,,,,_|bit:e,_,,ing,ten|ble:ed,d,,,d|bre:ed,d|br:ing,ought,,,ought|broadcast:_,_|buil:d,t,,,t|b:uy,ought,,,ought|cho:ose,se,,osing,sen|cost:_,_|deal:_,t,,,t|d:ie,ied,,ying|d:ig,ug,,igging,ug|dr:aw,ew,,,awn|dr:ink,ank,,,unk|dr:ive,ove,,iving,iven|:eat,ate,,eating,eaten|f:all,ell,,,allen|fe:ed,d,,,d|fe:el,lt|f:ight,ought,,,ought|f:ind,ound|fl:y,ew,,,own|bl:ow,ew,,,own|forb:id,ade|edit:_,,,ing|forg:et,ot,,eting,otten|forg:ive,ave,,iving,iven|fr:eeze,oze,,eezing,ozen|g:et,ot|g:ive,ave,,iving,iven|:go,went,goes,,gone|h:ang,ung,,,ung|ha:ve,d,s,ving,d|hear:_,d,,,d|hid:e,_,,,den|h:old,eld,,,eld|hurt:_,_,,,_|la:y,id,,,id|le:ad,d,,,d|le:ave,ft,,,ft|l:ie,ay,,ying|li:ght,t,,,t|los:e,t,,ing|ma:ke,de,,,de|mean:_,t,,,t|me:et,t,,eting,t|pa:y,id,,,id|read:_,_,,,_|r:ing,ang,,,ung|r:ise,ose,,ising,isen|r:un,an,,unning,un|sa:y,id,ys,,id|s:ee,aw,,eeing,een|s:ell,old,,,old|sh:ine,one,,,one|sho:ot,t,,,t|show:_,ed|s:ing,ang,,,ung|s:ink,ank|s:it,at|slid:e,_,,,_|sp:eak,oke,,,oken|sp:in,un,,inning,un|st:and,ood|st:eal,ole|st:ick,uck|st:ing,ung|:stream,,,,|str:ike,uck,,iking|sw:ear,ore|sw:im,am,,imming|sw:ing,ung|t:each,aught,eaches|t:ear,ore|t:ell,old|th:ink,ought|underst:and,ood|w:ake,oke|w:ear,ore|w:in,on,,inning|withdr:aw,ew|wr:ite,ote,,iting,itten|t:ie,ied,,ying|ski:_,ied|:boil,,,,|miss:_,,_|:act,,,,|compet:e,ed,,ing|:being,were,are,are|impl:y,ied,ies|ic:e,ed,,ing|develop:_,ed,,ing|wait:_,ed,,ing|aim:_,ed,,ing|spil:l,t,,,led|drop:_,ped,,ping|log:_,ged,,ging|rub:_,bed,,bing|smash:_,,es|egg:_,ed|suit:_,ed,,ing|age:_,d,s,ing|shed:_,_,s,ding|br:eak,oke|ca:tch,ught|d:o,id,oes|b:ind,ound|spread:_,_|become:_,,,,_|ben:d,,,,t|br:ake,,,,oken|burn:_,,,,ed|burst:_,,,,_|cl:ing,,,,ung|c:ome,ame,,,ome|cre:ep,,,,pt|cut:_,,,,_|dive:_,,,,d|dream:_,,,,t|fle:e,,,eing,d|fl:ing,,,,ung|got:_,,,,ten|grow:_,,,,n|hit:_,,,,_|ke:ep,,,,pt|kne:el,,,,lt|know:_,,,,n|leap:_,,,,t|len:d,,,,t|lo:ose,,,,st|prove:_,,,,n|put:_,,,,_|quit:_,,,,_|rid:e,,,,den|s:eek,,,,ought|sen:d,,,,t|set:_,,,,_|sew:_,,,,n|shake:_,,,,n|shave:_,,,,d|shut:_,,,,_|s:eat,,,,at|sla:y,,,,in|sle:ep,,,,pt|sn:eak,,,,uck|spe:ed,,,,d|spen:d,,,,t|sp:it,,,,at|split:_,,,,_|spr:ing,,,,ung|st:ink,unk,,,unk|strew:_,,,,n|sw:are,,,,orn|swe:ep,,,,pt|thrive:_,,,,d|undergo:_,,,,ne|upset:_,,,,_|w:eave,,,,oven|we:ep,,,,pt|w:ind,,,,ound|wr:ing,,,,ung","plurals":"addend|um|a,alga|e,alumna|e,alumn|us|i,appendi|x|ces,avocado|s,bacill|us|i,barracks|,beau|x,bus|es,cact|us|i,chateau|x,analys|is|es,diagnos|is|es,parenthes|is|es,prognos|is|es,synops|is|es,thes|is|es,child|ren,circus|es,clothes|,corp|us|ora,criteri|on|a,curricul|um|a,database|s,deer|,echo|es,embargo|es,epoch|s,f|oot|eet,gen|us|era,g|oose|eese,halo|s,hippopotam|us|i,ind|ex|ices,larva|e,lea|f|ves,librett|o|i,loa|f|ves,m|an|en,matri|x|ces,memorand|um|a,modul|us|i,mosquito|es,move|s,op|us|era,ov|um|a,ox|en,pe|rson|ople,phenomen|on|a,quiz|zes,radi|us|i,referend|um|a,rodeo|s,sex|es,shoe|s,sombrero|s,stomach|s,syllab|us|i,tableau|x,thie|f|ves,t|ooth|eeth,tornado|s,tuxedo|s,zero|s","patterns":{"Person":["master of #Noun","captain of the #Noun"]},"regex":{"HashTag":["^#[a-z]+"],"Gerund":["^[a-z]+n['’]$"],"PhoneNumber":["^[0-9]{3}-[0-9]{4}$","^[0-9]{3}[ -]?[0-9]{3}-[0-9]{4}$"],"Time":["^[012]?[0-9](:[0-5][0-9])(:[0-5][0-9])$","^[012]?[0-9](:[0-5][0-9])?(:[0-5][0-9])? ?(am|pm)$","^[012]?[0-9](:[0-5][0-9])(:[0-5][0-9])? ?(am|pm)?$","^[PMCE]ST$","^utc ?[+-]?[0-9]+?$","^[a-z0-9]*? o'?clock$"],"Date":["^[0-9]{1,4}-[0-9]{1,2}-[0-9]{1,4}$","^[0-9]{1,4}/[0-9]{1,2}/[0-9]{1,4}$"],"Money":["^[-+]?[$€¥£][0-9]+(.[0-9]{1,2})?$","^[-+]?[$€¥£][0-9]{1,3}(,[0-9]{3})+(.[0-9]{1,2})?$"],"Value":["^[-+]?[$€¥£][0-9]+(.[0-9]{1,2})?$","^[-+]?[$€¥£][0-9]{1,3}(,[0-9]{3})+(.[0-9]{1,2})?$","^[0-9.]{1,2}[-–][0-9]{1,2}$"],"NumberRange":["^[0-9.]{1,4}(st|nd|rd|th)?[-–][0-9.]{1,4}(st|nd|rd|th)?$","^[0-9.]{1,2}[-–][0-9]{1,2}$"],"NiceNumber":["^[-+]?[0-9.,]{1,3}(,[0-9.,]{3})+(.[0-9]+)?$"],"NumericValue":["^[-+]?[0-9]+(.[0-9]+)?$","^.?[0-9]+([0-9,.]+)?%$"],"Percent":["^.?[0-9]+([0-9,.]+)?%$"],"Cardinal":["^.?[0-9]+([0-9,.]+)?%$"],"Fraction":["^[0-9]{1,4}/[0-9]{1,4}$"],"LastName":["^ma?c'.*","^o'[drlkn].*"]}}`
},{}],209:[function(_dereq_,module,exports){
'use strict';
const conjugate = _dereq_('../subset/verbs/methods/conjugate/faster.js');

//extend our current irregular conjugations, overwrite if exists
//also, map the irregulars for easy infinitive lookup - {bought: 'buy'}
const addConjugations = function(obj) {

  Object.keys(obj).forEach((inf) => {
    this.conjugations[inf] = this.conjugations[inf] || {};
    //add it to the lexicon
    this.words[inf] = this.words[inf] || 'Infinitive';
    Object.keys(obj[inf]).forEach((tag) => {
      let word = obj[inf][tag];
      //add this to our conjugations
      this.conjugations[inf][tag] = word;
      //add it to the lexicon, too
      this.words[word] = this.words[word] || tag;
      //also denormalize to cache.toInfinitive
      this.cache.toInfinitive[obj[inf][tag]] = inf;
    });
    //guess the other conjugations
    let forms = conjugate(inf, this);
    Object.keys(forms).forEach((k) => {
      let word = forms[k];
      if (this.words.hasOwnProperty(word) === false) {
        this.words[word] = k;
      }
    });
  });
  return obj;
};
module.exports = addConjugations;

},{"../subset/verbs/methods/conjugate/faster.js":79}],210:[function(_dereq_,module,exports){

//
const addPatterns = function(obj) {
  Object.keys(obj).forEach((k) => {
    this.patterns[k] = obj[k];
  });
  return obj;
};
module.exports = addPatterns;

},{}],211:[function(_dereq_,module,exports){
'use strict';
//put singular->plurals in world, the reverse in cache,
//and both forms in the lexicon
const addPlurals = function(obj) {
  Object.keys(obj).forEach((sing) => {
    let plur = obj[sing];
    this.plurals[sing] = plur;
    //add them both to the lexicon
    this.words[plur] = this.words[plur] || 'Plural';
    this.words[sing] = this.words[sing] || 'Singular';
    //denormalize them in cache.toPlural
    this.cache.toSingular[plur] = sing;
  });
  return obj;
};
module.exports = addPlurals;

},{}],212:[function(_dereq_,module,exports){

//
const addRegex = function(obj) {
  Object.keys(obj).forEach((k) => {
    this.regex.push({
      reg: new RegExp(k, 'i'),
      tag: obj[k]
    });
  });
};
module.exports = addRegex;

},{}],213:[function(_dereq_,module,exports){
'use strict';
//add 'downward' tags (that immediately depend on this one)
const addDownword = _dereq_('../tags/addDownward');

//extend our known tagset with these new ones
const addTags = function(tags) {
  Object.keys(tags).forEach((tag) => {
    let obj = tags[tag];
    obj.notA = obj.notA || [];
    obj.downward = obj.downward || [];
    this.tags[tag] = obj;
  });
  addDownword(this.tags);
  return tags;
};
module.exports = addTags;

},{"../tags/addDownward":135}],214:[function(_dereq_,module,exports){
'use strict';
const normalize = _dereq_('../term/methods/normalize/normalize').normalize;
const inflect = _dereq_('../subset/nouns/methods/pluralize');
const conjugate = _dereq_('../subset/verbs/methods/conjugate/faster.js');
const adjFns = _dereq_('../subset/adjectives/methods');
const wordReg = / /;


const cleanUp = function(str) {
  str = normalize(str);
  //extra whitespace
  str = str.replace(/\s+/, ' ');
  //remove sentence-punctuaion too
  str = str.replace(/[.\?,;\!]/g, '');
  return str;
};

//
const addWords = function(words) {
  //go through each word
  Object.keys(words).forEach((word) => {
    let tag = words[word];
    word = cleanUp(word);
    this.words[word] = tag;
    //add it to multi-word cache,
    if (wordReg.test(word) === true) {
      let arr = word.split(wordReg);
      this.cache.firstWords[arr[0]] = true;
    }

    //turn singulars into plurals
    if (tag === 'Singular') {
      let plural = inflect(word, {});
      if (plural && plural !== word) {
        this.words[plural] = 'Plural';
      }
      return;
    }
    //turn infinitives into all conjugations
    if (tag === 'Infinitive') {
      let conj = conjugate(word, this);
      Object.keys(conj).forEach((k) => {
        this.words[conj[k]] = k;
      });
      return;
    }
    //phrasals like 'pull out' get conjugated too
    if (tag === 'PhrasalVerb') {
      let arr = word.split(/ /);
      let conj = conjugate(arr[0], this);
      Object.keys(conj).forEach((k) => {
        let form = conj[k] + ' ' + arr[1];
        this.words[form] = 'PhrasalVerb';
        //add it to cache, too
        this.cache.firstWords[conj[k]] = true;
      });
      return;
    }
    //turn some adjectives into superlatives
    if (tag === 'Comparable') {
      let comp = adjFns.toComparative(word);
      if (comp && word !== comp) {
        this.words[comp] = 'Comparative';
      }
      let supr = adjFns.toSuperlative(word);
      if (supr && word !== supr) {
        this.words[supr] = 'Superlative';
      }
    }
  });

  return words;
};
module.exports = addWords;

},{"../subset/adjectives/methods":11,"../subset/nouns/methods/pluralize":44,"../subset/verbs/methods/conjugate/faster.js":79,"../term/methods/normalize/normalize":149}],215:[function(_dereq_,module,exports){
'use strict';
// const addWords = require('./addWords');
const fns = _dereq_('../fns');
let data = _dereq_('./_data');
let moreData = _dereq_('./more-data');
let tags = _dereq_('../tags');
let unpack = _dereq_('./unpack');
let addTags = _dereq_('./addTags');
let addWords = _dereq_('./addWords');
let addRegex = _dereq_('./addRegex');
let addConjugations = _dereq_('./addConjugations');
let addPatterns = _dereq_('./addPatterns');
let addPlurals = _dereq_('./addPlurals');
let misc = _dereq_('./more-data/misc');

//lazier/faster object-merge
const extend = (main, obj) => {
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    main[keys[i]] = obj[keys[i]];
  }
  return main;
};

//class World
let World = function() {
  this.words = {};
  this.tags = tags;
  this.regex = [];
  this.patterns = {};
  this.conjugations = {};
  this.plurals = {};
  //denormalized data for faster-lookups
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
World.prototype.addPatterns = addPatterns;

//make a no-reference copy of all the data
World.prototype.clone = function() {
  let w2 = new World();
  ['words', 'firstWords', 'tagset', 'regex', 'patterns', 'conjugations', 'plurals'].forEach((k) => {
    if (this[k]) {
      w2[k] = fns.copy(this[k]);
    }
  });
  return w2;
};

//add all the things, in all the places
World.prototype.plugin = function(obj) {
  //untangle compromise-plugin
  obj = unpack(obj);
  //add all-the-things to this world object
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
};

//export a default world
let w = new World();
w.plugin(data);
w.addWords(misc);
moreData.forEach((obj) => {
  extend(w.words, obj);
});

module.exports = {
  w: w,
  reBuild: function() {
    //export a default world
    let w2 = new World();
    w2.plugin(data);
    w2.addWords(misc);
    moreData.forEach((obj) => {
      extend(w2.words, obj);
    });
    return w2;
  }
};

},{"../fns":3,"../tags":137,"./_data":208,"./addConjugations":209,"./addPatterns":210,"./addPlurals":211,"./addRegex":212,"./addTags":213,"./addWords":214,"./more-data":217,"./more-data/misc":219,"./unpack":223}],216:[function(_dereq_,module,exports){
//these are common word shortenings used in the lexicon and sentence segmentation methods
//there are all nouns,or at the least, belong beside one.
"use strict";

//common abbreviations
let compact = {
  Noun: [
    "arc",
    "al",
    "exp",
    "fy",
    "pd",
    "pl",
    "plz",
    "tce",
    "bl",
    "ma",
    "ba",
    "lit",
    "ex",
    "eg",
    "ie",
    "ca",
    "cca",
    "vs",
    "etc",
    "esp",
    "ft",
    //these are too ambiguous
    "bc",
    "ad",
    "md",
    "corp",
    "col"
  ],
  Organization: [
    "dept",
    "univ",
    "assn",
    "bros",
    "inc",
    "ltd",
    "co",
    //proper nouns with exclamation marks
    "yahoo",
    "joomla",
    "jeopardy"
  ],

  Place: [
    "rd",
    "st",
    "dist",
    "mt",
    "ave",
    "blvd",
    "cl",
    "ct",
    "cres",
    "hwy",
    //states
    "ariz",
    "cal",
    "calif",
    "colo",
    "conn",
    "fla",
    "fl",
    "ga",
    "ida",
    "ia",
    "kan",
    "kans",

    "minn",
    "neb",
    "nebr",
    "okla",
    "penna",
    "penn",
    "pa",
    "dak",
    "tenn",
    "tex",
    "ut",
    "vt",
    "va",
    "wis",
    "wisc",
    "wy",
    "wyo",
    "usafa",
    "alta",
    "ont",
    "que",
    "sask"
  ],

  Month: [
    "jan",
    "feb",
    "mar",
    "apr",
    "jun",
    "jul",
    "aug",
    "sep",
    "sept",
    "oct",
    "nov",
    "dec"
  ],
  Date: ["circa"],

  //Honorifics
  Honorific: [
    "adj",
    "adm",
    "adv",
    "asst",
    "atty",
    "bldg",
    "brig",
    "capt",
    "cmdr",
    "comdr",
    "cpl",
    "det",
    "dr",
    "esq",
    "gen",
    "gov",
    "hon",
    "jr",
    "llb",
    "lt",
    "maj",
    "messrs",
    "mister",
    "mlle",
    "mme",
    "mr",
    "mrs",
    "ms",
    "mstr",
    "op",
    "ord",
    "phd",
    "prof",
    "pvt",
    "rep",
    "reps",
    "res",
    "rev",
    "sen",
    "sens",
    "sfc",
    "sgt",
    "sir",
    "sr",
    "supt",
    "surg"
    //miss
    //misses
  ],
  Value: ["no"]
};

//unpack the compact terms into the misc lexicon..
let abbreviations = {};
const keys = Object.keys(compact);
for (let i = 0; i < keys.length; i++) {
  const arr = compact[keys[i]];
  for (let i2 = 0; i2 < arr.length; i2++) {
    abbreviations[arr[i2]] = [keys[i], "Abbreviation"];
  }
}
module.exports = abbreviations;

},{}],217:[function(_dereq_,module,exports){
module.exports = [
  _dereq_('./abbreviations'),
  _dereq_('./irregularAdjectives').lexicon,
  _dereq_('./numbers').lexicon,
  _dereq_('./orgWords'),
];

},{"./abbreviations":216,"./irregularAdjectives":218,"./numbers":220,"./orgWords":221}],218:[function(_dereq_,module,exports){
'use strict';
//adjectives that have irregular conjugations to adverb, comparative, and superlative forms
const toAdverb = {
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

const toComparative = {
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

const toSuperlative = {
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

const combine = function(lexicon, obj, tag) {
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    lexicon[keys[i]] = 'Comparable';
    if (lexicon[obj[keys[i]]] === undefined) {
      lexicon[obj[keys[i]]] = tag;
    }
  }
  return lexicon;
};
let lexicon = combine({}, toSuperlative, 'Superlative');
lexicon = combine(lexicon, toComparative, 'Comparative');
lexicon = combine(lexicon, toAdverb, 'Adverb');

module.exports = {
  lexicon: lexicon,
  toAdverb: toAdverb,
  toComparative: toComparative,
  toSuperlative: toSuperlative
};

},{}],219:[function(_dereq_,module,exports){
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
  '&': 'Conjunction',
};

},{}],220:[function(_dereq_,module,exports){
'use strict';
const cardinal = {
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
    fourty: 40, //support typo
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

const ordinal = {
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
    fourtieth: 40, //support typo
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
};

//used for the units
const prefixes = {
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
};

//create an easy mapping between ordinal-cardinal
let toOrdinal = {};
let toCardinal = {};
let lexicon = {};
Object.keys(ordinal).forEach(k => {
  let ord = Object.keys(ordinal[k]);
  let card = Object.keys(cardinal[k]);
  for (let i = 0; i < card.length; i++) {
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
//nouns that also signal the title of an unknown organization
//todo remove/normalize plural forms
const orgWords = [
  'administration',
  'agence',
  'agences',
  'agencies',
  'agency',
  'airlines',
  'airways',
  'army',
  'assoc',
  'associates',
  'association',
  'assurance',
  'authority',
  'autorite',
  'aviation',
  'bank',
  'banque',
  'board',
  'boys',
  'brands',
  'brewery',
  'brotherhood',
  'brothers',
  'building society',
  'bureau',
  'cafe',
  'caisse',
  'capital',
  'care',
  'cathedral',
  'center',
  'central bank',
  'centre',
  'chemicals',
  'choir',
  'chronicle',
  'church',
  'circus',
  'clinic',
  'clinique',
  'club',
  'co',
  'coalition',
  'coffee',
  'collective',
  'college',
  'commission',
  'committee',
  'communications',
  'community',
  'company',
  'comprehensive',
  'computers',
  'confederation',
  'conference',
  'conseil',
  'consulting',
  'containers',
  'corporation',
  'corps',
  'corp',
  'council',
  'crew',
  'daily news',
  'data',
  'departement',
  'department',
  'department store',
  'departments',
  'design',
  'development',
  'directorate',
  'division',
  'drilling',
  'education',
  'eglise',
  'electric',
  'electricity',
  'energy',
  'ensemble',
  'enterprise',
  'enterprises',
  'entertainment',
  'estate',
  'etat',
  'evening news',
  'faculty',
  'federation',
  'financial',
  'fm',
  'foundation',
  'fund',
  'gas',
  'gazette',
  'girls',
  'government',
  'group',
  'guild',
  'health authority',
  'herald',
  'holdings',
  'hospital',
  'hotel',
  'hotels',
  'inc',
  'industries',
  'institut',
  'institute',
  'institute of technology',
  'institutes',
  'insurance',
  'international',
  'interstate',
  'investment',
  'investments',
  'investors',
  'journal',
  'laboratory',
  'labs',
  // 'law',
  'liberation army',
  'limited',
  'local authority',
  'local health authority',
  'machines',
  'magazine',
  'management',
  'marine',
  'marketing',
  'markets',
  'media',
  'memorial',
  'mercantile exchange',
  'ministere',
  'ministry',
  'military',
  'mobile',
  'motor',
  'motors',
  'musee',
  'museum',
  // 'network',
  'news',
  'news service',
  'observatory',
  'office',
  'oil',
  'optical',
  'orchestra',
  'organization',
  'partners',
  'partnership',
  // 'party',
  'people\'s party',
  'petrol',
  'petroleum',
  'pharmacare',
  'pharmaceutical',
  'pharmaceuticals',
  'pizza',
  'plc',
  'police',
  'polytechnic',
  'post',
  'power',
  'press',
  'productions',
  'quartet',
  'radio',
  'regional authority',
  'regional health authority',
  'reserve',
  'resources',
  'restaurant',
  'restaurants',
  'savings',
  'school',
  'securities',
  'service',
  'services',
  'social club',
  'societe',
  'society',
  'sons',
  'standard',
  'state police',
  'state university',
  'stock exchange',
  'subcommittee',
  'syndicat',
  'systems',
  'telecommunications',
  'telegraph',
  'television',
  'times',
  'tribunal',
  'tv',
  'union',
  'university',
  'utilities',
  'workers'
];

module.exports = orgWords.reduce(function(h, str) {
  h[str] = 'Noun';
  return h;
}, {});

},{}],222:[function(_dereq_,module,exports){
'use strict';
//supported verb forms:
const forms = [
  null,
  'PastTense',
  'PresentTense',
  'Gerund',
  'Participle',
];
//
const unpackVerbs = function(str) {
  let verbs = str.split('|');
  return verbs.reduce((h, s) => {
    let parts = s.split(':');
    let prefix = parts[0];
    let ends = parts[1].split(',');
    //grab the infinitive
    let inf = prefix + ends[0];
    if (ends[0] === '_') {
      inf = prefix;
    }
    h[inf] = {};
    //we did the infinitive, now do the rest:
    for (let i = 1; i < forms.length; i++) {
      let word = parts[0] + ends[i];
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
const unpack = {
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

const unpackPlugin = function(str) {
  let obj = str;
  if (typeof str === 'string') {
    obj = JSON.parse(str);
  }
  //words is packed with efrt
  if (obj.words && typeof obj.words === 'string') {
    obj.words = unpack.words(obj.words);
  }
  //patterns is pivoted as key-value
  if (obj.patterns) {
    obj.patterns = unpack.keyValue(obj.patterns);
  }
  //regex, too
  if (obj.regex) {
    obj.regex = unpack.keyValue(obj.regex);
  }
  //plurals is packed in a ad-hoc way
  if (obj.plurals && typeof obj.plurals === 'string') {
    obj.plurals = unpack.plurals(obj.plurals);
  }
  //conjugations is packed in another ad-hoc way
  if (obj.conjugations && typeof obj.conjugations === 'string') {
    obj.conjugations = unpack.conjugations(obj.conjugations);
  }
  return obj;
};
module.exports = unpackPlugin;

},{"./conjugations":222,"./key-value":224,"./plurals":225,"efrt-unpack":1}],224:[function(_dereq_,module,exports){
'use strict';
//pivot k:[val,val] ->  val:k, val:k
const keyValue = function(obj) {
  let keys = Object.keys(obj);
  let isCompressed = true;
  if (keys[0] && typeof obj[keys[0]] === 'string') {
    isCompressed = false;
  }
  return keys.reduce((h, k) => {
    if (isCompressed === true) {
      let arr = obj[k];
      arr.forEach((a) => {
        if (h[a]) {
          //convert val to an array
          if (typeof h[a] === 'string') {
            h[a] = [h[a]];
          }
          //add it
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
const unpackPlurals = function(str) {
  return str.split(/,/g).reduce((h, s) => {
    let arr = s.split(/\|/g);
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
