const t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");r.disabled=!0;let n=null;function o(t,e){t.setAttribute("disabled","true"),e.removeAttribute("disabled")}e.addEventListener("click",(function(){n=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),o(e,r)})),r.addEventListener("click",(function(){clearInterval(n),o(r,e)}));
//# sourceMappingURL=01-color-switcher.b7f50946.js.map