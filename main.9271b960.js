parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n=document.querySelector("body"),e=function(n,e){document.addEventListener("mousedown",function(e){0===e.button&&n()}),setTimeout(function(){e()},3e3)},t=function(n){document.addEventListener("mousedown",function(e){0!==e.button&&2!==e.button||n()})},o=function(n){document.addEventListener("mousedown",function(e){document.addEventListener("mousedown",function(t){(0===e.button&&2===t.button||0===t.button&&2===e.button)&&n()})})},c=new Promise(e),s=new Promise(t),u=new Promise(o);function i(e,t){var o=document.createElement("div");o.dataset.qa="notification",o.className="success"===e?"success":"warning",o.innerText="".concat(t,"success"===e?" promise was resolved":" promise was rejected"),n.append(o)}c.then(function(n){i("success","First")}).catch(function(n){i("error","First")}),s.then(function(n){i("success","Second")}),u.then(function(n){i("success","Third")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.9271b960.js.map