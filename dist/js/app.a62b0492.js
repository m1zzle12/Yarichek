(function(){"use strict";var e={99:function(e,n,t){var r=t(963),o=t(252);function a(e,n){const t=(0,o.up)("router-link"),r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",null,[(0,o.Wm)(t,{to:"/"})]),(0,o.Wm)(r)],64)}var i=t(744);const u={},c=(0,i.Z)(u,[["render",a]]);var l=c,s=t(201);function f(e,n,t,r,a,i){const u=(0,o.up)("navigate-bar"),c=(0,o.up)("IntroducePage");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(u),(0,o.Wm)(c)],64)}var d=t.p+"img/title-photo_yarik.97e71c78.jpg";const v=e=>((0,o.dD)("data-v-16116ac8"),e=e(),(0,o.Cn)(),e),p={class:"cover"},m=v((()=>(0,o._)("h1",{class:"title"},"Yaroslav Moskalec",-1))),h=v((()=>(0,o._)("div",{class:"first-section"},[(0,o._)("img",{src:d,alt:"img"}),(0,o._)("p",null,"The ideal man: slim, muscular, handsome, able to achieve goals, unmanipulative, smart, loves to learn new things")],-1))),g=[m,h];function b(e,n,t,r,a,i){return(0,o.wg)(),(0,o.iD)("div",p,g)}var y={name:"IntroducePage"};const k=(0,i.Z)(y,[["render",b],["__scopeId","data-v-16116ac8"]]);var w=k,_=t(394),C={name:"HomePage",components:{NavigateBar:_.Z,IntroducePage:w}};const O=(0,i.Z)(C,[["render",f]]);var j=O;const E=[{path:"/",name:"home",component:j},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,71))},{path:"/cats",name:"cats",component:()=>t.e(916).then(t.bind(t,955))}],P=(0,s.p7)({history:(0,s.r5)(),routes:E});var A=P;(0,r.ri)(l).use(A).mount("#app")},394:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(252);const o={class:"navbar header"};function a(e,n,t,a,i,u){const c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("nav",null,[(0,r._)("ul",null,[(0,r._)("li",null,[(0,r.Wm)(c,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(c,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(c,{to:"/cats"},{default:(0,r.w5)((()=>[(0,r.Uk)("Cats")])),_:1})])])])])}var i={name:"navigateBar"},u=t(744);const c=(0,u.Z)(i,[["render",a]]);var l=c}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],a=e[s][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(s--,1);var l=o();void 0!==l&&(n=l)}}return n}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+(443===e?"about":e)+"."+{443:"7d3bc004",916:"22d2f771"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+(443===e?"about":e)+"."+{443:"c41e07c7",916:"af78b474"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="yarik_3:";t.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+a){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=r),e[r]=[o];var d=function(n,t){u.onerror=u.onload=null,clearTimeout(v);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/Yarichek/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(t){if(a.onerror=a.onload=null,"load"===t.type)r();else{var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,a.parentNode.removeChild(a),o(c)}};return a.onerror=a.onload=i,a.href=n,t?t.parentNode.insertBefore(a,t.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var i=t.miniCssF(r),u=t.p+i;if(n(i,u))return o();e(r,u,null,o,a)}))},o={143:0};t.f.miniCss=function(e,n){var t={443:1,916:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(n),u=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};t.l(i,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],u=r[1],c=r[2],l=0;if(i.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var s=c(t)}for(n&&n(r);l<i.length;l++)a=i[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(s)},r=self["webpackChunkyarik_3"]=self["webpackChunkyarik_3"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(99)}));r=t.O(r)})();
//# sourceMappingURL=app.a62b0492.js.map