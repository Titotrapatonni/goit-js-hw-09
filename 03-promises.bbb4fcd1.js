!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i"),u=document.querySelector(".form"),i=document.querySelector("input[name=delay]"),a=document.querySelector("input[name=step]"),c=document.querySelector("input[name=amount]");function l(e,n){var t=Math.random()>.3;new Promise((function(o,r){setTimeout((function(){t?o("Fulfilled promise ".concat(e," in ").concat(n,"ms")):r("Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)})).then((function(e){r.Notify.success(e)})).catch((function(e){r.Notify.failure(e)}))}u.addEventListener("submit",(function(e){if(e.preventDefault(),Number(i.value)<0||Number(a.value)<0||Number(c.value)<0)return void r.Notify.warning("Value cannot be negative");for(var n=0,t=0,o=Number(i.value),u=1;u<=c.value;u+=1)n+=1,t+=Number(a.value),l(n,o),o=Number(i.value)+t}))}();
//# sourceMappingURL=03-promises.bbb4fcd1.js.map