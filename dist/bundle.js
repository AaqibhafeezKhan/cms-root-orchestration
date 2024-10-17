(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),t.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var e={};t.r(e),t.d(e,{BOOTSTRAPPING:()=>v,LOADING_SOURCE_CODE:()=>h,LOAD_ERROR:()=>P,MOUNTED:()=>y,MOUNTING:()=>g,NOT_BOOTSTRAPPED:()=>m,NOT_LOADED:()=>d,NOT_MOUNTED:()=>w,SKIP_BECAUSE_BROKEN:()=>T,UNLOADING:()=>O,UNMOUNTING:()=>E,UPDATING:()=>b,addErrorHandler:()=>s,checkActivityFunctions:()=>Nt,ensureJQuerySupport:()=>pt,getAppNames:()=>Ot,getAppStatus:()=>Pt,getMountedApps:()=>Et,mountRootParcel:()=>H,navigateToUrl:()=>ot,pathToActiveWhen:()=>Ct,registerApplication:()=>Tt,removeErrorHandler:()=>l,setBootstrapMaxTime:()=>J,setMountMaxTime:()=>Q,setUnloadMaxTime:()=>z,setUnmountMaxTime:()=>V,start:()=>Rt,triggerAppChange:()=>_t,unloadApplication:()=>St,unregisterApplication:()=>At});var n=Object.freeze({__proto__:null,get start(){return Rt},get ensureJQuerySupport(){return pt},get setBootstrapMaxTime(){return J},get setMountMaxTime(){return Q},get setUnmountMaxTime(){return V},get setUnloadMaxTime(){return z},get registerApplication(){return Tt},get unregisterApplication(){return At},get getMountedApps(){return Et},get getAppStatus(){return Pt},get unloadApplication(){return St},get checkActivityFunctions(){return Nt},get getAppNames(){return Ot},get pathToActiveWhen(){return Ct},get navigateToUrl(){return ot},get triggerAppChange(){return _t},get addErrorHandler(){return s},get removeErrorHandler(){return l},get mountRootParcel(){return H},get NOT_LOADED(){return d},get LOADING_SOURCE_CODE(){return h},get NOT_BOOTSTRAPPED(){return m},get BOOTSTRAPPING(){return v},get NOT_MOUNTED(){return w},get MOUNTING(){return g},get UPDATING(){return b},get LOAD_ERROR(){return P},get MOUNTED(){return y},get UNLOADING(){return O},get UNMOUNTING(){return E},get SKIP_BECAUSE_BROKEN(){return T}});function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t.g?t.g:"undefined"!=typeof self?self:{}).CustomEvent,a=function(){try{var t=new i("cat",{detail:{foo:"bar"}});return"cat"===t.type&&"bar"===t.detail.foo}catch(t){}return!1}()?i:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(t,e){var n=document.createEvent("CustomEvent");return e?n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail):n.initCustomEvent(t,!1,!1,void 0),n}:function(t,e){var n=document.createEventObject();return n.type=t,e?(n.bubbles=Boolean(e.bubbles),n.cancelable=Boolean(e.cancelable),n.detail=e.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n},u=[];function c(t,e,n){var r=p(t,e,n);u.length?u.forEach((function(t){return t(r)})):setTimeout((function(){throw r}))}function s(t){if("function"!=typeof t)throw Error(f(28,!1));u.push(t)}function l(t){if("function"!=typeof t)throw Error(f(29,!1));var e=!1;return u=u.filter((function(n){var r=n===t;return e=e||r,!r})),e}function f(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return"single-spa minified message #".concat(t,": ").concat(e?e+" ":"","See https://single-spa.js.org/error/?code=").concat(t).concat(r.length?"&arg=".concat(r.join("&arg=")):"")}function p(t,e,n){var r,o="".concat(L(e)," '").concat(S(e),"' died in status ").concat(e.status,": ");if(t instanceof Error){try{t.message=o+t.message}catch(t){}r=t}else{console.warn(f(30,!1,e.status,S(e)));try{r=Error(o+JSON.stringify(t))}catch(e){r=t}}return r.appOrParcelName=S(e),e.status=n,r}var d="NOT_LOADED",h="LOADING_SOURCE_CODE",m="NOT_BOOTSTRAPPED",v="BOOTSTRAPPING",w="NOT_MOUNTED",g="MOUNTING",y="MOUNTED",b="UPDATING",E="UNMOUNTING",O="UNLOADING",P="LOAD_ERROR",T="SKIP_BECAUSE_BROKEN";function N(t){return t.status===y}function A(t){try{return t.activeWhen(window.location)}catch(e){return c(e,t,T),!1}}function S(t){return t.name}function j(t){return Boolean(t.unmountThisParcel)}function L(t){return j(t)?"parcel":"application"}function C(){for(var t=arguments.length-1;t>0;t--)for(var e in arguments[t])"__proto__"!==e&&(arguments[t-1][e]=arguments[t][e]);return arguments[0]}function M(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return t[n];return null}function D(t){return t&&("function"==typeof t||(e=t,Array.isArray(e)&&!M(e,(function(t){return"function"!=typeof t}))));var e}function x(t,e){var n=t[e]||[];0===(n=Array.isArray(n)?n:[n]).length&&(n=[function(){return Promise.resolve()}]);var r=L(t),o=S(t);return function(t){return n.reduce((function(n,i,a){return n.then((function(){var n=i(t);return _(n)?n:Promise.reject(f(15,!1,r,o,e,a))}))}),Promise.resolve())}}function _(t){return t&&"function"==typeof t.then&&"function"==typeof t.catch}function I(t,e){return Promise.resolve().then((function(){return t.status!==m?t:(t.status=v,t.bootstrap?X(t,"bootstrap").then(n).catch((function(n){if(e)throw p(n,t,T);return c(n,t,T),t})):Promise.resolve().then(n))}));function n(){return t.status=w,t}}function U(t,e){return Promise.resolve().then((function(){if(t.status!==y)return t;t.status=E;var n=Object.keys(t.parcels).map((function(e){return t.parcels[e].unmountThisParcel()}));return Promise.all(n).then(r,(function(n){return r().then((function(){var r=Error(n.message);if(e)throw p(r,t,T);c(r,t,T)}))})).then((function(){return t}));function r(){return X(t,"unmount").then((function(){t.status=w})).catch((function(n){if(e)throw p(n,t,T);c(n,t,T)}))}}))}var W=!1,R=!1;function B(t,e){return Promise.resolve().then((function(){return t.status!==w?t:(W||(window.dispatchEvent(new a("single-spa:before-first-mount")),W=!0),X(t,"mount").then((function(){return t.status=y,R||(window.dispatchEvent(new a("single-spa:first-mount")),R=!0),t})).catch((function(n){return t.status=y,U(t,!0).then(r,r);function r(){if(e)throw p(n,t,T);return c(n,t,T),t}})))}))}var G=0,k={parcels:{}};function H(){return $.apply(k,arguments)}function $(t,e){var n=this;if(!t||"object"!==r(t)&&"function"!=typeof t)throw Error(f(2,!1));if(t.name&&"string"!=typeof t.name)throw Error(f(3,!1,r(t.name)));if("object"!==r(e))throw Error(f(4,!1,name,r(e)));if(!e.domElement)throw Error(f(5,!1,name));var o,i=G++,a="function"==typeof t,u=a?t:function(){return Promise.resolve(t)},c={id:i,parcels:{},status:a?h:m,customProps:e,parentName:S(n),unmountThisParcel:function(){return g.then((function(){if(c.status!==y)throw Error(f(6,!1,name,c.status));return U(c,!0)})).then((function(t){return c.parentName&&delete n.parcels[c.id],t})).then((function(t){return l(t),t})).catch((function(t){throw c.status=T,d(t),t}))}};n.parcels[i]=c;var s=u();if(!s||"function"!=typeof s.then)throw Error(f(7,!1));var l,d,v=(s=s.then((function(t){if(!t)throw Error(f(8,!1));var e=t.name||"parcel-".concat(i);if(Object.prototype.hasOwnProperty.call(t,"bootstrap")&&!D(t.bootstrap))throw Error(f(9,!1,e));if(!D(t.mount))throw Error(f(10,!1,e));if(!D(t.unmount))throw Error(f(11,!1,e));if(t.update&&!D(t.update))throw Error(f(12,!1,e));var n=x(t,"bootstrap"),r=x(t,"mount"),a=x(t,"unmount");c.status=m,c.name=e,c.bootstrap=n,c.mount=r,c.unmount=a,c.timeouts=Y(t.timeouts),t.update&&(c.update=x(t,"update"),o.update=function(t){return c.customProps=t,F(function(t){return Promise.resolve().then((function(){if(t.status!==y)throw Error(f(32,!1,S(t)));return t.status=b,X(t,"update").then((function(){return t.status=y,t})).catch((function(e){throw p(e,t,T)}))}))}(c))})}))).then((function(){return I(c,!0)})),g=v.then((function(){return B(c,!0)})),E=new Promise((function(t,e){l=t,d=e}));return o={mount:function(){return F(Promise.resolve().then((function(){if(c.status!==w)throw Error(f(13,!1,name,c.status));return n.parcels[i]=c,B(c)})))},unmount:function(){return F(c.unmountThisParcel())},getStatus:function(){return c.status},loadPromise:F(s),bootstrapPromise:F(v),mountPromise:F(g),unmountPromise:F(E)}}function F(t){return t.then((function(){return null}))}function K(t){var e=S(t),o="function"==typeof t.customProps?t.customProps(e,window.location):t.customProps;("object"!==r(o)||null===o||Array.isArray(o))&&(o={},console.warn(f(40,!1),e,o));var i=C({},o,{name:e,mountParcel:$.bind(t),singleSpa:n});return j(t)&&(i.unmountSelf=t.unmountThisParcel),i}var q={bootstrap:{millis:4e3,dieOnTimeout:!1,warningMillis:1e3},mount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unmount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unload:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},update:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3}};function J(t,e,n){if("number"!=typeof t||t<=0)throw Error(f(16,!1));q.bootstrap={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function Q(t,e,n){if("number"!=typeof t||t<=0)throw Error(f(17,!1));q.mount={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function V(t,e,n){if("number"!=typeof t||t<=0)throw Error(f(18,!1));q.unmount={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function z(t,e,n){if("number"!=typeof t||t<=0)throw Error(f(19,!1));q.unload={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function X(t,e){var n=t.timeouts[e],r=n.warningMillis,o=L(t);return new Promise((function(i,a){var u=!1,c=!1;t[e](K(t)).then((function(t){u=!0,i(t)})).catch((function(t){u=!0,a(t)})),setTimeout((function(){return l(1)}),r),setTimeout((function(){return l(!0)}),n.millis);var s=f(31,!1,e,o,S(t),n.millis);function l(t){if(!u)if(!0===t)c=!0,n.dieOnTimeout?a(Error(s)):console.error(s);else if(!c){var e=t,o=e*r;console.warn(s),o+r<n.millis&&setTimeout((function(){return l(e+1)}),r)}}}))}function Y(t){var e={};for(var n in q)e[n]=C({},q[n],t&&t[n]||{});return e}function Z(t){return Promise.resolve().then((function(){return t.loadPromise?t.loadPromise:t.status!==d&&t.status!==P?t:(t.status=h,t.loadPromise=Promise.resolve().then((function(){var o=t.loadApp(K(t));if(!_(o))throw n=!0,Error(f(33,!1,S(t)));return o.then((function(n){var o;t.loadErrorTime=null,"object"!==r(e=n)&&(o=34),Object.prototype.hasOwnProperty.call(e,"bootstrap")&&!D(e.bootstrap)&&(o=35),D(e.mount)||(o=36),D(e.unmount)||(o=37);var i=L(e);if(o){var a;try{a=JSON.stringify(e)}catch(t){}return console.error(f(o,!1,i,S(t),a),e),c(void 0,t,T),t}return e.devtools&&e.devtools.overlays&&(t.devtools.overlays=C({},t.devtools.overlays,e.devtools.overlays)),t.status=m,t.bootstrap=x(e,"bootstrap"),t.mount=x(e,"mount"),t.unmount=x(e,"unmount"),t.unload=x(e,"unload"),t.timeouts=Y(e.timeouts),delete t.loadPromise,t}))})).catch((function(e){var r;return delete t.loadPromise,n?r=T:(r=P,t.loadErrorTime=(new Date).getTime()),c(e,t,r),t})));var e,n}))}var tt,et="undefined"!=typeof window,nt={hashchange:[],popstate:[]},rt=["hashchange","popstate"];function ot(t){var e;if("string"==typeof t)e=t;else if(this&&this.href)e=this.href;else{if(!(t&&t.currentTarget&&t.currentTarget.href&&t.preventDefault))throw Error(f(14,!1));e=t.currentTarget.href,t.preventDefault()}var n=lt(window.location.href),r=lt(e);0===e.indexOf("#")?window.location.hash=r.hash:n.host!==r.host&&r.host?window.location.href=e:r.pathname===n.pathname&&r.search===n.search?window.location.hash=r.hash:window.history.pushState(null,null,e)}function it(t){var e=this;if(t){var n=t[0].type;rt.indexOf(n)>=0&&nt[n].forEach((function(n){try{n.apply(e,t)}catch(t){setTimeout((function(){throw t}))}}))}}function at(){It([],arguments)}function ut(t,e){return function(){var n=window.location.href,r=t.apply(this,arguments),o=window.location.href;return tt&&n===o||(Bt()?window.dispatchEvent(function(t,e){var n;try{n=new PopStateEvent("popstate",{state:t})}catch(e){(n=document.createEvent("PopStateEvent")).initPopStateEvent("popstate",!1,!1,t)}return n.singleSpa=!0,n.singleSpaTrigger=e,n}(window.history.state,e)):It([])),r}}if(et){window.addEventListener("hashchange",at),window.addEventListener("popstate",at);var ct=window.addEventListener,st=window.removeEventListener;window.addEventListener=function(t,e){if(!("function"==typeof e&&rt.indexOf(t)>=0)||M(nt[t],(function(t){return t===e})))return ct.apply(this,arguments);nt[t].push(e)},window.removeEventListener=function(t,e){if(!("function"==typeof e&&rt.indexOf(t)>=0))return st.apply(this,arguments);nt[t]=nt[t].filter((function(t){return t!==e}))},window.history.pushState=ut(window.history.pushState,"pushState"),window.history.replaceState=ut(window.history.replaceState,"replaceState"),window.singleSpaNavigate?console.warn(f(41,!1)):window.singleSpaNavigate=ot}function lt(t){var e=document.createElement("a");return e.href=t,e}var ft=!1;function pt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.jQuery;if(t||window.$&&window.$.fn&&window.$.fn.jquery&&(t=window.$),t&&!ft){var e=t.fn.on,n=t.fn.off;t.fn.on=function(t,n){return dt.call(this,e,window.addEventListener,t,n,arguments)},t.fn.off=function(t,e){return dt.call(this,n,window.removeEventListener,t,e,arguments)},ft=!0}}function dt(t,e,n,r,o){return"string"!=typeof n?t.apply(this,o):(n.split(/\s+/).forEach((function(t){rt.indexOf(t)>=0&&(e(t,r),n=n.replace(t,""))})),""===n.trim()?this:t.apply(this,o))}var ht={};function mt(t){return Promise.resolve().then((function(){var e=ht[S(t)];if(!e)return t;if(t.status===d)return vt(t,e),t;if(t.status===O)return e.promise.then((function(){return t}));if(t.status!==w&&t.status!==P)return t;var n=t.status===P?Promise.resolve():X(t,"unload");return t.status=O,n.then((function(){return vt(t,e),t})).catch((function(n){return function(t,e,n){delete ht[S(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,c(n,t,T),e.reject(n)}(t,e,n),t}))}))}function vt(t,e){delete ht[S(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,t.status=d,e.resolve()}function wt(t,e,n,r){ht[S(t)]={app:t,resolve:n,reject:r},Object.defineProperty(ht[S(t)],"promise",{get:e})}function gt(t){return ht[t]}var yt=[];function bt(){var t=[],e=[],n=[],r=[],o=(new Date).getTime();return yt.forEach((function(i){var a=i.status!==T&&A(i);switch(i.status){case P:a&&o-i.loadErrorTime>=200&&n.push(i);break;case d:case h:a&&n.push(i);break;case m:case w:!a&&gt(S(i))?t.push(i):a&&r.push(i);break;case y:a||e.push(i)}})),{appsToUnload:t,appsToUnmount:e,appsToLoad:n,appsToMount:r}}function Et(){return yt.filter(N).map(S)}function Ot(){return yt.map(S)}function Pt(t){var e=M(yt,(function(e){return S(e)===t}));return e?e.status:null}function Tt(t,e,n,o){var i=function(t,e,n,o){var i,a={name:null,loadApp:null,activeWhen:null,customProps:null};return"object"===r(t)?(function(t){if(Array.isArray(t)||null===t)throw Error(f(39,!1));var e=["name","app","activeWhen","customProps"],n=Object.keys(t).reduce((function(t,n){return e.indexOf(n)>=0?t:t.concat(n)}),[]);if(0!==n.length)throw Error(f(38,!1,e.join(", "),n.join(", ")));if("string"!=typeof t.name||0===t.name.length)throw Error(f(20,!1));if("object"!==r(t.app)&&"function"!=typeof t.app)throw Error(f(20,!1));var o=function(t){return"string"==typeof t||"function"==typeof t};if(!(o(t.activeWhen)||Array.isArray(t.activeWhen)&&t.activeWhen.every(o)))throw Error(f(24,!1));if(!Lt(t.customProps))throw Error(f(22,!1))}(t),a.name=t.name,a.loadApp=t.app,a.activeWhen=t.activeWhen,a.customProps=t.customProps):(function(t,e,n,r){if("string"!=typeof t||0===t.length)throw Error(f(20,!1));if(!e)throw Error(f(23,!1));if("function"!=typeof n)throw Error(f(24,!1));if(!Lt(r))throw Error(f(22,!1))}(t,e,n,o),a.name=t,a.loadApp=e,a.activeWhen=n,a.customProps=o),a.loadApp="function"!=typeof(i=a.loadApp)?function(){return Promise.resolve(i)}:i,a.customProps=function(t){return t||{}}(a.customProps),a.activeWhen=function(t){var e=Array.isArray(t)?t:[t];return e=e.map((function(t){return"function"==typeof t?t:Ct(t)})),function(t){return e.some((function(e){return e(t)}))}}(a.activeWhen),a}(t,e,n,o);if(-1!==Ot().indexOf(i.name))throw Error(f(21,!1,i.name));yt.push(C({loadErrorTime:null,status:d,parcels:{},devtools:{overlays:{options:{},selectors:[]}}},i)),et&&(pt(),It())}function Nt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location;return yt.filter((function(e){return e.activeWhen(t)})).map(S)}function At(t){if(0===yt.filter((function(e){return S(e)===t})).length)throw Error(f(25,!1,t));return St(t).then((function(){var e=yt.map(S).indexOf(t);yt.splice(e,1)}))}function St(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{waitForUnmount:!1};if("string"!=typeof t)throw Error(f(26,!1));var n=M(yt,(function(e){return S(e)===t}));if(!n)throw Error(f(27,!1,t));var r,o=gt(S(n));if(e&&e.waitForUnmount){if(o)return o.promise;var i=new Promise((function(t,e){wt(n,(function(){return i}),t,e)}));return i}return o?(r=o.promise,jt(n,o.resolve,o.reject)):r=new Promise((function(t,e){wt(n,(function(){return r}),t,e),jt(n,t,e)})),r}function jt(t,e,n){U(t).then(mt).then((function(){e(),setTimeout((function(){It()}))})).catch(n)}function Lt(t){return!t||"function"==typeof t||"object"===r(t)&&null!==t&&!Array.isArray(t)}function Ct(t,e){var n=function(t,e){var n=0,r=!1,o="^";"/"!==t[0]&&(t="/"+t);for(var i=0;i<t.length;i++){var a=t[i];(!r&&":"===a||r&&"/"===a)&&u(i)}return u(t.length),new RegExp(o,"i");function u(i){var a=t.slice(n,i).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&");if(o+=r?"[^/]+/?":a,i===t.length)if(r)e&&(o+="$");else{var u=e?"":".*";o="/"===o.charAt(o.length-1)?"".concat(o).concat(u,"$"):"".concat(o,"(/").concat(u,")?(#.*)?$")}r=!r,n=i}}(t,e);return function(t){var e=t.origin;e||(e="".concat(t.protocol,"//").concat(t.host));var r=t.href.replace(e,"").replace(t.search,"").split("?")[0];return n.test(r)}}var Mt=!1,Dt=[],xt=et&&window.location.href;function _t(){return It()}function It(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;if(Mt)return new Promise((function(t,n){Dt.push({resolve:t,reject:n,eventArguments:e})}));var n,r=bt(),i=r.appsToUnload,u=r.appsToUnmount,c=r.appsToLoad,s=r.appsToMount,l=!1,f=xt,p=xt=window.location.href;return Bt()?(Mt=!0,n=i.concat(c,u,s),Promise.resolve().then((function(){if(window.dispatchEvent(new a(0===n.length?"single-spa:before-no-app-change":"single-spa:before-app-change",g(!0))),window.dispatchEvent(new a("single-spa:before-routing-event",g(!0,{cancelNavigation:h}))),l)return window.dispatchEvent(new a("single-spa:before-mount-routing-event",g(!0))),m(),void ot(f);var e=i.map(mt),r=u.map(U).map((function(t){return t.then(mt)})).concat(e),o=Promise.all(r);o.then((function(){window.dispatchEvent(new a("single-spa:before-mount-routing-event",g(!0)))}));var p=c.map((function(t){return Z(t).then((function(t){return Ut(t,o)}))})),d=s.filter((function(t){return c.indexOf(t)<0})).map((function(t){return Ut(t,o)}));return o.catch((function(t){throw v(),t})).then((function(){return v(),Promise.all(p.concat(d)).catch((function(e){throw t.forEach((function(t){return t.reject(e)})),e})).then(m)}))}))):(n=c,Promise.resolve().then((function(){var t=c.map(Z);return Promise.all(t).then(v).then((function(){return[]})).catch((function(t){throw v(),t}))})));function h(){l=!0}function m(){var e=Et();t.forEach((function(t){return t.resolve(e)}));try{var r=0===n.length?"single-spa:no-app-change":"single-spa:app-change";window.dispatchEvent(new a(r,g())),window.dispatchEvent(new a("single-spa:routing-event",g()))}catch(t){setTimeout((function(){throw t}))}if(Mt=!1,Dt.length>0){var o=Dt;Dt=[],It(o)}return e}function v(){t.forEach((function(t){it(t.eventArguments)})),it(e)}function g(){var t,r=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1?arguments[1]:void 0,h={},m=(o(t={},y,[]),o(t,w,[]),o(t,d,[]),o(t,T,[]),t);r?(c.concat(s).forEach((function(t,e){g(t,y)})),i.forEach((function(t){g(t,d)})),u.forEach((function(t){g(t,w)}))):n.forEach((function(t){g(t)}));var v={detail:{newAppStatuses:h,appsByNewStatus:m,totalAppChanges:n.length,originalEvent:null==e?void 0:e[0],oldUrl:f,newUrl:p,navigationIsCanceled:l}};return a&&C(v.detail,a),v;function g(t,e){var n=S(t);e=e||Pt(n),h[n]=e,(m[e]=m[e]||[]).push(n)}}}function Ut(t,e){return A(t)?I(t).then((function(t){return e.then((function(){return A(t)?B(t):t}))})):e.then((function(){return t}))}var Wt=!1;function Rt(t){var e;Wt=!0,t&&t.urlRerouteOnly&&(e=t.urlRerouteOnly,tt=e),et&&It()}function Bt(){return Wt}et&&setTimeout((function(){Wt||console.warn(f(1,!1))}),5e3);var Gt={getRawAppData:function(){return[].concat(yt)},reroute:It,NOT_LOADED:d,toLoadPromise:Z,toBootstrapPromise:I,unregisterApplication:At};function kt(t){return(kt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Ht(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Ft(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?$t(Object(n),!0).forEach((function(e){Ht(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$t(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Kt(t){return function(t){if(Array.isArray(t))return Jt(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||qt(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function qt(t,e){if(t){if("string"==typeof t)return Jt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Jt(t,e):void 0}}function Jt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}et&&window.__SINGLE_SPA_DEVTOOLS__&&(window.__SINGLE_SPA_DEVTOOLS__.exposedMethods=Gt);var Qt="undefined"!=typeof window;function Vt(t,e){if("object"!==kt(e)||Array.isArray(e)||null===e)throw Error("Invalid ".concat(t,": received ").concat(Array.isArray(e)?"array":e," but expected a plain object"))}function zt(t,e){if("boolean"!=typeof e)throw Error("Invalid ".concat(t,": received ").concat(kt(e),", but expected a boolean"))}function Xt(t,e,n,r){if(!r){var o=Object.keys(e),i=[];o.forEach((function(t){n.indexOf(t)<0&&i.push(t)})),i.length>0&&console.warn(Error("Invalid ".concat(t,": received invalid properties '").concat(i.join(", "),"', but valid properties are ").concat(n.join(", "))))}}function Yt(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if("string"!=typeof e||n&&""===e.trim())throw Error("Invalid ".concat(t,": received '").concat(e,"', but expected a").concat(n?" non-blank":""," string"))}function Zt(t,e){if(Yt(t,e),e.indexOf("/")<0)throw Error("Invalid ".concat(t,": received '").concat(e,"', but expected an absolute path that starts with /"))}function te(t,e,n){if(!Array.isArray(e)&&("object"!==kt(kt(e))||"number"!==e.length))throw Error("Invalid ".concat(t,": received '").concat(e,"', but expected an array"));for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];for(var a=0;a<e.length;a++)n.apply(void 0,[e[a],"".concat(t,"[").concat(a,"]")].concat(o))}function ee(t,e){var n;return"/"===(n="/"===t.substr(-1)?"/"===e[0]?t+e.slice(1):t+e:"/"===e[0]?t+e:t+"/"+e).substr(-1)&&n.length>1&&(n=n.slice(0,n.length-1)),n}function ne(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return t[n];return null}var re=Object.prototype.hasOwnProperty.call(e,"default")?Object.getOwnPropertyDescriptor(e,"default").value.pathToActiveWhen:Ct,oe="undefined"!=typeof Symbol?Symbol():"@";function ie(t,e){if(Qt)return t.getAttribute(e);var n=ne(t.attrs,(function(t){return t.name===e.toLowerCase()}));return n?n.value:null}function ae(t,e){return Qt?t.hasAttribute(e):t.attrs.some((function(t){return t.name===e}))}function ue(t,e,n){if("application"===t.nodeName.toLowerCase()){if(t.childNodes.length>0)throw Error("<application> elements must not have childNodes. You must put in a closing </application> - self closing is not allowed");var r={type:"application",name:ie(t,"name")},o=ie(t,"loader");if(o)if(e.loaders&&e.loaders.hasOwnProperty(o))r.loader=e.loaders[o];else if(Qt)throw Error("Application loader '".concat(o,"' was not defined in the htmlLayoutData"));var i=ie(t,"error");if(i)if(e.errors&&e.errors.hasOwnProperty(i))r.error=e.errors[i];else if(Qt)throw Error("Application error handler '".concat(o,"' was not defined in the htmlLayoutData"));return ce(t,r,e),[r]}if("route"===t.nodeName.toLowerCase()){var a={type:"route",routes:[]},u=ie(t,"path");u&&(a.path=u),ae(t,"default")&&(a.default=!0),ae(t,"exact")&&(a.exact=!0),ce(t,a,e);for(var c=0;c<t.childNodes.length;c++){var s;(s=a.routes).push.apply(s,Kt(ue(t.childNodes[c],e,n)))}return[a]}if("redirect"===t.nodeName.toLowerCase())return n.redirects[ee("/",ie(t,"from"))]=ee("/",ie(t,"to")),[];if("undefined"!=typeof Node&&t instanceof Node){if(t.nodeType===Node.TEXT_NODE&&""===t.textContent.trim())return[];if(t.childNodes&&t.childNodes.length>0){t.routes=[];for(var l=0;l<t.childNodes.length;l++){var f;(f=t.routes).push.apply(f,Kt(ue(t.childNodes[l],e,n)))}}return[t]}if(t.childNodes){for(var p={type:t.nodeName.toLowerCase(),routes:[],attrs:t.attrs},d=0;d<t.childNodes.length;d++){var h;(h=p.routes).push.apply(h,Kt(ue(t.childNodes[d],e,n)))}return[p]}return"#comment"===t.nodeName?[{type:"#comment",value:t.data}]:"#text"===t.nodeName?[{type:"#text",value:t.value}]:void 0}function ce(t,e,n){for(var r=(ie(t,"props")||"").split(","),o=0;o<r.length;o++){var i=r[o].trim();if(0!==i.length)if(e.props||(e.props={}),n.props&&n.props.hasOwnProperty(i))e.props[i]=n.props[i];else{if(Qt)throw Error("Prop '".concat(i,"' was not defined in the htmlLayoutData. Either remove this attribute from the HTML element or provide the prop's value"));e.props[i]=oe}}}function se(t){return{bootstrap:function(){return Promise.resolve()},mount:function(e){return Promise.resolve().then((function(){e.domElement.innerHTML=t}))},unmount:function(t){return Promise.resolve().then((function(){t.domElement.innerHTML=""}))}}}function le(t){var e=t.location,n=t.routes,r=t.parentContainer,o=t.previousSibling,i=t.shouldMount,a=t.applicationContainers;return n.forEach((function(t,n){if("application"===t.type){if(i){var u,c=de(t.name);a[t.name]?u=a[t.name]:document.getElementById(c)?u=document.getElementById(c):(u=document.createElement("div")).id=c,pe(u,r,o),o=u}}else if("route"===t.type)o=le({location:e,routes:t.routes,parentContainer:r,previousSibling:o,shouldMount:i&&t.activeWhen(e),applicationContainers:a});else if(t instanceof Node||"string"==typeof t.type)if(i){if(!t.connectedNode){var s=t instanceof Node?t.cloneNode(!1):he(t);t.connectedNode=s}pe(t.connectedNode,r,o),t.routes&&le({location:e,routes:t.routes,parentContainer:t.connectedNode,previousSibling:null,shouldMount:i,applicationContainers:a}),o=t.connectedNode}else(l=t.connectedNode)&&(l.remove?l.remove():l.parentNode.removeChild(l)),delete t.connectedNode;var l})),o}function fe(t){for(var e=t.applicationName,n=t.location,r=t.routes,o=0;o<r.length;o++){var i=r[o];if("application"===i.type){if(i.name===e)return i}else if("route"===i.type){if(i.activeWhen(n)){var a=fe({applicationName:e,location:n,routes:i.routes});if(a)return a}}else if(i.routes){var u=fe({applicationName:e,location:n,routes:i.routes});if(u)return u}}}function pe(t,e,n){var r=n?n.nextSibling:e.firstChild;r!==t&&e.insertBefore(t,r)}function de(t){return"single-spa-application:".concat(t)}function he(t){if("#text"===t.type.toLowerCase())return document.createTextNode(t.value);if("#comment"===t.type.toLowerCase())return document.createComment(t.value);var e=document.createElement(t.type);return(t.attrs||[]).forEach((function(t){e.setAttribute(t.name,t.value)})),e.routes&&e.routes.forEach((function(t){e.appendChild(he(t))})),e}function me(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:location)["hash"===t.mode?"hash":"pathname"]}function ve(t){try{return new URL(t)}catch(n){var e=document.createElement("a");return e.href=t,e}}function we(t){var e=[],n=Nt(t?ve(t):location);return Ot().forEach((function(t){n.indexOf(t)<0&&e.push(t)})),e}function ge(t,e,n,r){r.forEach((function(r){"application"===r.type?(t[r.name]||(t[r.name]=[]),t[r.name].push({activeWhen:e,props:ye(n,r.props),loader:r.loader})):"route"===r.type?ge(t,r.activeWhen,ye(n,r.props),r.routes):r.routes&&ge(t,e,n,r.routes)}))}function ye(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Ft(Ft({},t),e)}function be(){return!0}const Ee=function(t,e){if(t&&t.nodeName||"string"==typeof t){if(Qt&&!e&&window.singleSpaLayoutData&&(e=window.singleSpaLayoutData),"string"==typeof t){if(!Qt)throw Error("calling constructRoutes with a string on the server is not yet supported");if(!(t=(new DOMParser).parseFromString(t,"text/html").documentElement.querySelector("single-spa-router")))throw Error("constructRoutes should be called with a string HTML document that contains a <single-spa-router> element.")}t=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("template"===t.nodeName.toLowerCase()&&(t=(t.content||t).querySelector("single-spa-router")),"single-spa-router"!==t.nodeName.toLowerCase())throw Error("single-spa-layout: The HTMLElement passed to constructRoutes must be <single-spa-router> or a <template> containing the router. Received ".concat(t.nodeName));Qt&&t.isConnected&&t.parentNode.removeChild(t);var n={routes:[],redirects:{}};ie(t,"mode")&&(n.mode=ie(t,"mode")),ie(t,"base")&&(n.base=ie(t,"base")),ie(t,"containerEl")&&(n.containerEl=ie(t,"containerEl"));for(var r=0;r<t.childNodes.length;r++){var o;(o=n.routes).push.apply(o,Kt(ue(t.childNodes[r],e,n)))}return n}(t,e)}else if(e)throw Error("constructRoutes should be called either with an HTMLElement and layoutData, or a single json object.");return function(t){Vt("routesConfig",t);var e,n=t.disableWarnings;if(Xt("routesConfig",t,["mode","base","containerEl","routes","disableWarnings","redirects"],n),t.hasOwnProperty("containerEl")?function(t,e){if("string"==typeof e?""===e.trim():!(Qt&&e instanceof HTMLElement))throw Error("Invalid ".concat("routesConfig.containerEl",": received ").concat(e," but expected either non-blank string or HTMLElement"))}(0,t.containerEl):t.containerEl="body",t.hasOwnProperty("mode")||(t.mode="history"),function(t,e,n){if(n.indexOf(e)<0)throw Error("Invalid ".concat("routesConfig.mode",": received '").concat(e,"' but expected ").concat(n.join(", ")))}(0,t.mode,["history","hash"]),t.hasOwnProperty("base")?(Yt("routesConfig.base",t.base),t.base=(0!==(e=t.base).indexOf("/")&&(e="/"+e),"/"!==e[e.length-1]&&(e+="/"),e)):t.base="/",t.hasOwnProperty("redirects"))for(var r in Vt("routesConfig.redirects",t.redirects),t.redirects){var o=t.redirects[r];Zt("routesConfig.redirects key",r),Zt("routesConfig.redirects['".concat(r,"']"),o)}var i=Qt?window.location.pathname:"/",a="hash"===t.mode?i+"#":"";te("routesConfig.routes",t.routes,(function t(e,r,o){var i=o.parentPath,a=o.siblingActiveWhens,u=o.parentActiveWhen;if(Vt(r,e),"application"===e.type)Xt(r,e,["type","name","props","loader","error"],n),e.props&&Vt("".concat(r,".props"),e.props),Yt("".concat(r,".name"),e.name);else if("route"===e.type){Xt(r,e,["type","path","routes","props","default","exact"],n),e.hasOwnProperty("exact")&&zt("".concat(r,".exact"),e.exact);var c,s=e.hasOwnProperty("path"),l=e.hasOwnProperty("default");if(s)Yt("".concat(r,".path"),e.path),c=ee(i,e.path),e.activeWhen=re(c,e.exact),a.push(e.activeWhen);else{if(!l)throw Error("Invalid ".concat(r,": routes must have either a path or default property."));zt("".concat(r,".default"),e.default),c=i,e.activeWhen=function(t,e){return function(n){return e(n)&&!t.some((function(t){return t(n)}))}}(a,u)}if(s&&l&&e.default)throw Error("Invalid ".concat(r,": cannot have both path and set default to true."));e.routes&&te("".concat(r,".routes"),e.routes,t,{parentPath:c,siblingActiveWhens:[],parentActiveWhen:e.activeWhen})}else{if("undefined"!=typeof Node&&e instanceof Node);else for(var f in e)"routes"!==f&&"attrs"!==f&&Yt("".concat(r,"['").concat(f,"']"),e[f],!1);e.routes&&te("".concat(r,".routes"),e.routes,t,{parentPath:i,siblingActiveWhens:a,parentActiveWhen:u})}}),{parentPath:a+t.base,parentActiveWhen:function(){return!0},siblingActiveWhens:[]}),delete t.disableWarnings}(t),t}('\n  <single-spa-router>\n    <nav>\n      <a href=\'/editorial\'>Editorial</a>\n      <a href=\'/media-library\'>Media Library</a>\n      <a href=\'/role-access\'>Role Access</a>\n      <a href=\'/real-time-editor\'>Real-Time Editor</a>\n    </nav>\n    <main>\n      <route path="/editorial" exact>\n        <application name="cms-react-editorial"></application>\n      </route>\n      <route path="/media-library" exact>\n        <application name="cms-vue-media"></application>\n      </route>\n      <route path="/role-access" exact>\n        <application name="cms-angular-auth"></application>\n      </route>\n      <route path="/real-time-editor" exact>\n        <application name="cms-svelte-collab"></application>\n      </route>\n    </main>\n  </single-spa-router>\n'),Oe=function(t){var e=t.loadApp,n={};return ge(n,be,{},t.routes.routes),Object.keys(n).map((function(t){var r=n[t];return{name:t,customProps:function(t,e){var n=ne(r,(function(t){return t.activeWhen(e)}));return n?n.props:{}},activeWhen:r.map((function(t){return t.activeWhen})),app:function(){var n;Qt&&(n=ne(r,(function(t){return t.activeWhen(window.location)})));var o=e({name:t});return n&&n.loader?function(t,e,n){return Promise.resolve().then((function(){var r,o=de(t),i=document.getElementById(o);i||((i=document.createElement("div")).id=o,i.style.display="none",document.body.appendChild(i),r=function(){i.style.removeProperty("display"),""===i.getAttribute("style")&&i.removeAttribute("style"),window.removeEventListener("single-spa:before-mount-routing-event",r)},window.addEventListener("single-spa:before-mount-routing-event",r));var a=H("string"==typeof e.loader?se(e.loader):e.loader,{name:"application-loader:".concat(t),domElement:i});function u(){return a.unmount().then((function(){r&&r()}))}return Promise.all([a.mountPromise,n]).then((function(t){var e,n=function(t){if(Array.isArray(t))return t}(e=t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],n=!0,r=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done)&&(e.push(i.value),2!==e.length);n=!0);}catch(t){r=!0,o=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}return e}}(e)||qt(e,2)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();n[0];var r=n[1];return u().then((function(){return r}))}),(function(t){return u().then((function(){throw t}))}))}))}(t,n,o):o}}}))}({routes:Ee,loadApp:t=>System.import(t)}),Pe=function(t){var e=t.routes,n=t.active,r=void 0===n||n,o=!1,i={};if(!e)throw Error("single-spa-layout constructLayoutEngine(opts): opts.routes must be provided. Value was ".concat(kt(e)));var a=e.base.slice(0,e.base.length-1),u={isActive:function(){return o},activate:function(){o||(o=!0,Qt&&(window.addEventListener("single-spa:before-routing-event",f),window.addEventListener("single-spa:before-mount-routing-event",p),window.addEventListener("single-spa:routing-event",d),s(c),p()))},deactivate:function(){o&&(o=!1,Qt&&(window.removeEventListener("single-spa:before-routing-event",f),window.removeEventListener("single-spa:before-mount-routing-event",p),window.removeEventListener("single-spa:routing-event",d),l(c)))}};return r&&u.activate(),u;function c(t){var n=fe({applicationName:t.appOrParcelName,location:window.location,routes:e.routes});if(n&&n.error){var r=document.getElementById(de(n.name)),o="string"==typeof n.error?se(n.error):n.error;i[n.name]=H(o,{domElement:r})}setTimeout((function(){throw t}))}function f(t){var n=t.detail,r=n.cancelNavigation,o=n.newUrl,a=me(e,ve(o)),u=function(t){var n=e.redirects[t];if(t===a){if(!r)throw Error("single-spa-layout: <redirect> requires single-spa@>=5.7.0");return r(),setTimeout((function(){ot(n)})),{v:void 0}}};for(var c in e.redirects){var s=u(c);if("object"===kt(s))return s.v}var l=[];we(o).forEach((function(t){i[t]&&(l.push(i[t].unmount()),delete i[t])})),l.length>0&&(r(),Promise.all(l).then((function(){ot(o)})))}function p(){if(0===me(e).indexOf(a)){var t="string"==typeof e.containerEl?document.querySelector(e.containerEl):e.containerEl,n=Et().reduce((function(t,e){return t[e]=document.getElementById(de(e)),t}),{});le({location:window.location,routes:e.routes,parentContainer:t,shouldMount:!0,applicationContainers:n})}}function d(t){var e=t.detail,n=e.navigationIsCanceled,r=e.newUrl;n||we(r).forEach((function(t){var e=document.getElementById(de(t));e&&e.isConnected&&e.parentNode.removeChild(e)}))}}({routes:Ee,applications:Oe});Oe.forEach(Tt),Pe.activate(),Rt()})();