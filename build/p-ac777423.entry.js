import{r as t,d as i,h as s,c as e}from"./p-fd83c6f5.js";import{g as a,c as o}from"./p-667e92e8.js";import{t as n}from"./p-bf32a450.js";import{g as h}from"./p-177ede88.js";import{a as r,d as c}from"./p-718ae824.js";const l=class{constructor(s){t(this,s),this.animationEnabled=!0,this.mode=a(this),this.animated=!0,this.ionNavWillLoad=i(this,"ionNavWillLoad",7),this.ionNavWillChange=i(this,"ionNavWillChange",3),this.ionNavDidChange=i(this,"ionNavDidChange",3)}swipeHandlerChanged(){this.gesture&&this.gesture.enable(void 0!==this.swipeHandler)}async connectedCallback(){this.gesture=(await __sc_import_record_audio_button("./p-b6bf1db6.js")).createSwipeBackGesture(this.el,()=>!!this.swipeHandler&&this.swipeHandler.canStart()&&this.animationEnabled,()=>this.swipeHandler&&this.swipeHandler.onStart(),t=>this.ani&&this.ani.progressStep(t),(t,i,s)=>{if(this.ani){this.animationEnabled=!1,this.ani.onFinish(()=>{this.animationEnabled=!0,this.swipeHandler&&this.swipeHandler.onEnd(t)},{oneTimeCallback:!0});let e=t?-.001:.001;t?e+=h([0,0],[.32,.72],[0,1],[1,1],i)[0]:(this.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"),e+=h([0,0],[1,0],[.68,.28],[1,1],i)[0]),this.ani.progressEnd(t?1:0,e,s)}}),this.swipeHandlerChanged()}componentWillLoad(){this.ionNavWillLoad.emit()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}async commit(t,i,s){const e=await this.lock();let a=!1;try{a=await this.transition(t,i,s)}catch(o){console.error(o)}return e(),a}async setRouteId(t,i,s){return{changed:await this.setRoot(t,i,{duration:"root"===s?0:void 0,direction:"back"===s?"back":"forward"}),element:this.activeEl}}async getRouteId(){const t=this.activeEl;return t?{id:t.tagName,element:t}:void 0}async setRoot(t,i,s){if(this.activeComponent===t)return!1;const e=this.activeEl,a=await r(this.delegate,this.el,t,["ion-page","ion-page-invisible"],i);return this.activeComponent=t,this.activeEl=a,await this.commit(a,e,s),await c(this.delegate,e),!0}async transition(t,i,s={}){if(i===t)return!1;this.ionNavWillChange.emit();const{el:e,mode:a}=this,h=this.animated&&o.getBoolean("animated",!0),r=this.animation||s.animationBuilder||o.get("navAnimation");return await n(Object.assign({mode:a,animated:h,animationBuilder:r,enteringEl:t,leavingEl:i,baseEl:e,progressCallback:s.progressAnimation?t=>this.ani=t:void 0},s)),this.ionNavDidChange.emit(),!0}async lock(){const t=this.waitPromise;let i;return this.waitPromise=new Promise(t=>i=t),void 0!==t&&await t,i}render(){return s("slot",null)}get el(){return e(this)}static get watchers(){return{swipeHandler:["swipeHandlerChanged"]}}};l.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";export{l as ion_router_outlet}