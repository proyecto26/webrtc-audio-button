import{w as i,B as a}from"./p-fd83c6f5.js";const e="ionViewWillLeave",n="ionViewDidLeave",o="ionViewWillUnload",s=a=>new Promise((e,n)=>{i(()=>{t(a),r(a).then(i=>{i.animation&&i.animation.destroy(),c(a),e(i)},i=>{c(a),n(i)})})}),t=i=>{const a=i.enteringEl,e=i.leavingEl;V(a,e,i.direction),i.showGoBack?a.classList.add("can-go-back"):a.classList.remove("can-go-back"),y(a,!1),e&&y(e,!1)},r=async i=>{const e=await d(i);return e&&a.isBrowser?w(e,i):l(i)},c=i=>{const a=i.leavingEl;i.enteringEl.classList.remove("ion-page-invisible"),void 0!==a&&a.classList.remove("ion-page-invisible")},d=async i=>{if(i.leavingEl&&i.animated&&0!==i.duration)return i.animationBuilder?i.animationBuilder:"ios"===i.mode?(await __sc_import_record_audio_button("./p-52163e33.js")).iosTransitionAnimation:(await __sc_import_record_audio_button("./p-eef8e423.js")).mdTransitionAnimation},w=async(i,a)=>{await p(a,!0);const e=i(a.baseEl,a);m(a.enteringEl,a.leavingEl);const n=await b(e,a);return a.progressCallback&&a.progressCallback(void 0),n&&v(a.enteringEl,a.leavingEl),{hasCompleted:n,animation:e}},l=async i=>{const a=i.enteringEl,e=i.leavingEl;return await p(i,!1),m(a,e),v(a,e),{hasCompleted:!0}},p=async(i,a)=>{const e=(void 0!==i.deepWait?i.deepWait:a)?[g(i.enteringEl),g(i.leavingEl)]:[f(i.enteringEl),f(i.leavingEl)];await Promise.all(e),await u(i.viewIsReady,i.enteringEl)},u=async(i,a)=>{i&&await i(a)},b=(i,a)=>{const e=a.progressCallback,n=new Promise(a=>{i.onFinish(i=>a(1===i))});return e?(i.progressStart(!0),e(i)):i.play(),n},m=(i,a)=>{_(a,"ionViewWillLeave"),_(i,"ionViewWillEnter")},v=(i,a)=>{_(i,"ionViewDidEnter"),_(a,"ionViewDidLeave")},_=(i,a)=>{if(i){const e=new CustomEvent(a,{bubbles:!1,cancelable:!1});i.dispatchEvent(e)}},f=i=>i&&i.componentOnReady?i.componentOnReady():Promise.resolve(),g=async i=>{const a=i;if(a){if(null!=a.componentOnReady&&null!=await a.componentOnReady())return;await Promise.all(Array.from(a.children).map(g))}},y=(i,a)=>{a?(i.setAttribute("aria-hidden","true"),i.classList.add("ion-page-hidden")):(i.hidden=!1,i.removeAttribute("aria-hidden"),i.classList.remove("ion-page-hidden"))},V=(i,a,e)=>{void 0!==i&&(i.style.zIndex="back"===e?"99":"101"),void 0!==a&&(a.style.zIndex="100")},h=i=>{if(i.classList.contains("ion-page"))return i;return i.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||i};export{o as L,e as a,n as b,g as d,h as g,_ as l,y as s,s as t}