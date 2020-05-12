System.register(["./p-eba2f7b9.system.js"],(function(t){"use strict";var n,e;return{setters:[function(t){n=t.g;e=t.s}],execute:function(){var r=function(t){return o(t)};var i=t("a",(function(t,n){if(typeof t==="string"){n=t;t=undefined}return r(t).includes(n)}));var o=function(t){if(t===void 0){t=window}t.Ionic=t.Ionic||{};var n=t.Ionic.platforms;if(n==null){n=t.Ionic.platforms=a(t);n.forEach((function(n){return t.document.documentElement.classList.add("plt-"+n)}))}return n};var a=function(t){return Object.keys(O).filter((function(n){return O[n](t)}))};var u=function(t){return p(t)&&!h(t)};var c=function(t){if(N(t,/iPad/i)){return true}if(N(t,/Macintosh/i)&&p(t)){return true}return false};var s=function(t){return N(t,/iPhone/i)};var f=function(t){return N(t,/iPhone|iPod/i)||c(t)};var v=function(t){return N(t,/android|sink/i)};var d=function(t){return v(t)&&!N(t,/mobile/i)};var m=function(t){var n=t.innerWidth;var e=t.innerHeight;var r=Math.min(n,e);var i=Math.max(n,e);return r>390&&r<520&&(i>620&&i<800)};var l=function(t){var n=t.innerWidth;var e=t.innerHeight;var r=Math.min(n,e);var i=Math.max(n,e);return c(t)||d(t)||r>460&&r<820&&(i>780&&i<1400)};var p=function(t){return M(t,"(any-pointer:coarse)")};var g=function(t){return!p(t)};var h=function(t){return b(t)||y(t)};var b=function(t){return!!(t["cordova"]||t["phonegap"]||t["PhoneGap"])};var y=function(t){var n=t["Capacitor"];return!!(n&&n.isNative)};var I=function(t){return N(t,/electron/i)};var w=function(t){return!!(t.matchMedia("(display-mode: standalone)").matches||t.navigator.standalone)};var N=function(t,n){return n.test(t.navigator.userAgent)};var M=function(t,n){return t.matchMedia(n).matches};var O={ipad:c,iphone:s,ios:f,android:v,phablet:m,tablet:l,cordova:b,capacitor:y,electron:I,pwa:w,mobile:p,mobileweb:u,desktop:g,hybrid:h};var j=function(){function t(){this.m=new Map}t.prototype.reset=function(t){this.m=new Map(Object.entries(t))};t.prototype.get=function(t,n){var e=this.m.get(t);return e!==undefined?e:n};t.prototype.getBoolean=function(t,n){if(n===void 0){n=false}var e=this.m.get(t);if(e===undefined){return n}if(typeof e==="string"){return e==="true"}return!!e};t.prototype.getNumber=function(t,n){var e=parseFloat(this.m.get(t));return isNaN(e)?n!==undefined?n:NaN:e};t.prototype.set=function(t,n){this.m.set(t,n)};return t}();var E=t("c",new j);var C=function(t){try{var n=t.sessionStorage.getItem(k);return n!==null?JSON.parse(n):{}}catch(e){return{}}};var P=function(t,n){try{t.sessionStorage.setItem(k,JSON.stringify(n))}catch(e){return}};var S=function(t){var n={};t.location.search.slice(1).split("&").map((function(t){return t.split("=")})).map((function(t){var n=t[0],e=t[1];return[decodeURIComponent(n),decodeURIComponent(e)]})).filter((function(t){var n=t[0];return x(n,A)})).map((function(t){var n=t[0],e=t[1];return[n.slice(A.length),e]})).forEach((function(t){var e=t[0],r=t[1];n[e]=r}));return n};var x=function(t,n){return t.substr(0,n.length)===n};var A="ionic:";var k="ionic-persist-config";var B;var W=t("g",(function(t){return t&&n(t)||B}));var H=t("i",(function(){var t=document;var n=window;var r=n.Ionic=n.Ionic||{};o(n);var a=Object.assign(Object.assign(Object.assign(Object.assign({},C(n)),{persistConfig:false}),r.config),S(n));E.reset(a);if(E.getBoolean("persistConfig")){P(n,a)}r.config=E;r.mode=B=E.get("mode",t.documentElement.getAttribute("mode")||(i(n,"ios")?"ios":"md"));E.set("mode",B);t.documentElement.setAttribute("mode",B);t.documentElement.classList.add(B);if(E.getBoolean("_testing")){E.set("animated",false)}var u=function(t){return t.tagName&&t.tagName.startsWith("ION-")};var c=function(t){return["ios","md"].includes(t)};e((function(t){while(t){var n=t.mode||t.getAttribute("mode");if(n){if(c(n)){return n}else if(u(t)){console.warn('Invalid ionic mode: "'+n+'", expected: "ios" or "md"')}}t=t.parentElement}return B}))}))}}}));