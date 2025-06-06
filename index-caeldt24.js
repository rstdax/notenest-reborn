function E_(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function S_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Op={exports:{}},vl={},Lp={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _s=Symbol.for("react.element"),C_=Symbol.for("react.portal"),k_=Symbol.for("react.fragment"),I_=Symbol.for("react.strict_mode"),N_=Symbol.for("react.profiler"),T_=Symbol.for("react.provider"),R_=Symbol.for("react.context"),P_=Symbol.for("react.forward_ref"),b_=Symbol.for("react.suspense"),A_=Symbol.for("react.memo"),O_=Symbol.for("react.lazy"),eh=Symbol.iterator;function L_(t){return t===null||typeof t!="object"?null:(t=eh&&t[eh]||t["@@iterator"],typeof t=="function"?t:null)}var Dp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mp=Object.assign,jp={};function Qr(t,e,n){this.props=t,this.context=e,this.refs=jp,this.updater=n||Dp}Qr.prototype.isReactComponent={};Qr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fp(){}Fp.prototype=Qr.prototype;function tc(t,e,n){this.props=t,this.context=e,this.refs=jp,this.updater=n||Dp}var nc=tc.prototype=new Fp;nc.constructor=tc;Mp(nc,Qr.prototype);nc.isPureReactComponent=!0;var th=Array.isArray,Up=Object.prototype.hasOwnProperty,rc={current:null},zp={key:!0,ref:!0,__self:!0,__source:!0};function Wp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Up.call(e,r)&&!zp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:_s,type:t,key:s,ref:o,props:i,_owner:rc.current}}function D_(t,e){return{$$typeof:_s,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ic(t){return typeof t=="object"&&t!==null&&t.$$typeof===_s}function M_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var nh=/\/+/g;function Yl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?M_(""+t.key):e.toString(36)}function io(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _s:case C_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Yl(o,0):r,th(i)?(n="",t!=null&&(n=t.replace(nh,"$&/")+"/"),io(i,e,n,"",function(u){return u})):i!=null&&(ic(i)&&(i=D_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(nh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",th(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Yl(s,l);o+=io(s,e,n,a,i)}else if(a=L_(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Yl(s,l++),o+=io(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fs(t,e,n){if(t==null)return t;var r=[],i=0;return io(t,r,"","",function(s){return e.call(n,s,i++)}),r}function j_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Pe={current:null},so={transition:null},F_={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:so,ReactCurrentOwner:rc};function Bp(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Fs,forEach:function(t,e,n){Fs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fs(t,function(){e++}),e},toArray:function(t){return Fs(t,function(e){return e})||[]},only:function(t){if(!ic(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Component=Qr;U.Fragment=k_;U.Profiler=N_;U.PureComponent=tc;U.StrictMode=I_;U.Suspense=b_;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F_;U.act=Bp;U.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Mp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=rc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Up.call(e,a)&&!zp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:_s,type:t.type,key:i,ref:s,props:r,_owner:o}};U.createContext=function(t){return t={$$typeof:R_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:T_,_context:t},t.Consumer=t};U.createElement=Wp;U.createFactory=function(t){var e=Wp.bind(null,t);return e.type=t,e};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:P_,render:t}};U.isValidElement=ic;U.lazy=function(t){return{$$typeof:O_,_payload:{_status:-1,_result:t},_init:j_}};U.memo=function(t,e){return{$$typeof:A_,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=so.transition;so.transition={};try{t()}finally{so.transition=e}};U.unstable_act=Bp;U.useCallback=function(t,e){return Pe.current.useCallback(t,e)};U.useContext=function(t){return Pe.current.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t){return Pe.current.useDeferredValue(t)};U.useEffect=function(t,e){return Pe.current.useEffect(t,e)};U.useId=function(){return Pe.current.useId()};U.useImperativeHandle=function(t,e,n){return Pe.current.useImperativeHandle(t,e,n)};U.useInsertionEffect=function(t,e){return Pe.current.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return Pe.current.useLayoutEffect(t,e)};U.useMemo=function(t,e){return Pe.current.useMemo(t,e)};U.useReducer=function(t,e,n){return Pe.current.useReducer(t,e,n)};U.useRef=function(t){return Pe.current.useRef(t)};U.useState=function(t){return Pe.current.useState(t)};U.useSyncExternalStore=function(t,e,n){return Pe.current.useSyncExternalStore(t,e,n)};U.useTransition=function(){return Pe.current.useTransition()};U.version="18.3.1";Lp.exports=U;var w=Lp.exports;const U_=S_(w),z_=E_({__proto__:null,default:U_},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_=w,B_=Symbol.for("react.element"),V_=Symbol.for("react.fragment"),$_=Object.prototype.hasOwnProperty,H_=W_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G_={key:!0,ref:!0,__self:!0,__source:!0};function Vp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)$_.call(e,r)&&!G_.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:B_,type:t,key:s,ref:o,props:i,_owner:H_.current}}vl.Fragment=V_;vl.jsx=Vp;vl.jsxs=Vp;Op.exports=vl;var d=Op.exports,$p={exports:{}},Ge={},Hp={exports:{}},Gp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,O){var L=N.length;N.push(O);e:for(;0<L;){var re=L-1>>>1,de=N[re];if(0<i(de,O))N[re]=O,N[L]=de,L=re;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var O=N[0],L=N.pop();if(L!==O){N[0]=L;e:for(var re=0,de=N.length,Ms=de>>>1;re<Ms;){var Ln=2*(re+1)-1,Ql=N[Ln],Dn=Ln+1,js=N[Dn];if(0>i(Ql,L))Dn<de&&0>i(js,Ql)?(N[re]=js,N[Dn]=L,re=Dn):(N[re]=Ql,N[Ln]=L,re=Ln);else if(Dn<de&&0>i(js,L))N[re]=js,N[Dn]=L,re=Dn;else break e}}return O}function i(N,O){var L=N.sortIndex-O.sortIndex;return L!==0?L:N.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],h=1,c=null,f=3,g=!1,v=!1,_=!1,x=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=N)r(u),O.sortIndex=O.expirationTime,e(a,O);else break;O=n(u)}}function E(N){if(_=!1,y(N),!v)if(n(a)!==null)v=!0,Kl(k);else{var O=n(u);O!==null&&ql(E,O.startTime-N)}}function k(N,O){v=!1,_&&(_=!1,m(P),P=-1),g=!0;var L=f;try{for(y(O),c=n(a);c!==null&&(!(c.expirationTime>O)||N&&!tt());){var re=c.callback;if(typeof re=="function"){c.callback=null,f=c.priorityLevel;var de=re(c.expirationTime<=O);O=t.unstable_now(),typeof de=="function"?c.callback=de:c===n(a)&&r(a),y(O)}else r(a);c=n(a)}if(c!==null)var Ms=!0;else{var Ln=n(u);Ln!==null&&ql(E,Ln.startTime-O),Ms=!1}return Ms}finally{c=null,f=L,g=!1}}var T=!1,R=null,P=-1,K=5,j=-1;function tt(){return!(t.unstable_now()-j<K)}function li(){if(R!==null){var N=t.unstable_now();j=N;var O=!0;try{O=R(!0,N)}finally{O?ai():(T=!1,R=null)}}else T=!1}var ai;if(typeof p=="function")ai=function(){p(li)};else if(typeof MessageChannel<"u"){var Zd=new MessageChannel,x_=Zd.port2;Zd.port1.onmessage=li,ai=function(){x_.postMessage(null)}}else ai=function(){x(li,0)};function Kl(N){R=N,T||(T=!0,ai())}function ql(N,O){P=x(function(){N(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,Kl(k))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var O=3;break;default:O=f}var L=f;f=O;try{return N()}finally{f=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,O){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=f;f=N;try{return O()}finally{f=L}},t.unstable_scheduleCallback=function(N,O,L){var re=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?re+L:re):L=re,N){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=L+de,N={id:h++,callback:O,priorityLevel:N,startTime:L,expirationTime:de,sortIndex:-1},L>re?(N.sortIndex=L,e(u,N),n(a)===null&&N===n(u)&&(_?(m(P),P=-1):_=!0,ql(E,L-re))):(N.sortIndex=de,e(a,N),v||g||(v=!0,Kl(k))),N},t.unstable_shouldYield=tt,t.unstable_wrapCallback=function(N){var O=f;return function(){var L=f;f=O;try{return N.apply(this,arguments)}finally{f=L}}}})(Gp);Hp.exports=Gp;var K_=Hp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_=w,He=K_;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kp=new Set,Vi={};function lr(t,e){jr(t,e),jr(t+"Capture",e)}function jr(t,e){for(Vi[t]=e,t=0;t<e.length;t++)Kp.add(e[t])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja=Object.prototype.hasOwnProperty,Q_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rh={},ih={};function Y_(t){return ja.call(ih,t)?!0:ja.call(rh,t)?!1:Q_.test(t)?ih[t]=!0:(rh[t]=!0,!1)}function J_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function X_(t,e,n,r){if(e===null||typeof e>"u"||J_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function be(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){we[t]=new be(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];we[e]=new be(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){we[t]=new be(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){we[t]=new be(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){we[t]=new be(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){we[t]=new be(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){we[t]=new be(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){we[t]=new be(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){we[t]=new be(t,5,!1,t.toLowerCase(),null,!1,!1)});var sc=/[\-:]([a-z])/g;function oc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(sc,oc);we[e]=new be(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(sc,oc);we[e]=new be(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(sc,oc);we[e]=new be(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){we[t]=new be(t,1,!1,t.toLowerCase(),null,!1,!1)});we.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){we[t]=new be(t,1,!1,t.toLowerCase(),null,!0,!0)});function lc(t,e,n,r){var i=we.hasOwnProperty(e)?we[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(X_(e,n,i,r)&&(n=null),r||i===null?Y_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Bt=q_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Us=Symbol.for("react.element"),hr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),ac=Symbol.for("react.strict_mode"),Fa=Symbol.for("react.profiler"),qp=Symbol.for("react.provider"),Qp=Symbol.for("react.context"),uc=Symbol.for("react.forward_ref"),Ua=Symbol.for("react.suspense"),za=Symbol.for("react.suspense_list"),cc=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),Yp=Symbol.for("react.offscreen"),sh=Symbol.iterator;function ui(t){return t===null||typeof t!="object"?null:(t=sh&&t[sh]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,Jl;function Ei(t){if(Jl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Jl=e&&e[1]||""}return`
`+Jl+t}var Xl=!1;function Zl(t,e){if(!t||Xl)return"";Xl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Xl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ei(t):""}function Z_(t){switch(t.tag){case 5:return Ei(t.type);case 16:return Ei("Lazy");case 13:return Ei("Suspense");case 19:return Ei("SuspenseList");case 0:case 2:case 15:return t=Zl(t.type,!1),t;case 11:return t=Zl(t.type.render,!1),t;case 1:return t=Zl(t.type,!0),t;default:return""}}function Wa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fr:return"Fragment";case hr:return"Portal";case Fa:return"Profiler";case ac:return"StrictMode";case Ua:return"Suspense";case za:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qp:return(t.displayName||"Context")+".Consumer";case qp:return(t._context.displayName||"Context")+".Provider";case uc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case cc:return e=t.displayName||null,e!==null?e:Wa(t.type)||"Memo";case qt:e=t._payload,t=t._init;try{return Wa(t(e))}catch{}}return null}function e0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wa(e);case 8:return e===ac?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function t0(t){var e=Jp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function zs(t){t._valueTracker||(t._valueTracker=t0(t))}function Xp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Jp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Eo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ba(t,e){var n=e.checked;return ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function oh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=yn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zp(t,e){e=e.checked,e!=null&&lc(t,"checked",e,!1)}function Va(t,e){Zp(t,e);var n=yn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$a(t,e.type,n):e.hasOwnProperty("defaultValue")&&$a(t,e.type,yn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function lh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $a(t,e,n){(e!=="number"||Eo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Si=Array.isArray;function kr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+yn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ha(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ah(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Si(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yn(n)}}function em(t,e){var n=yn(e.value),r=yn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function uh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function tm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ga(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?tm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ws,nm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ws=Ws||document.createElement("div"),Ws.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ws.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $i(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},n0=["Webkit","ms","Moz","O"];Object.keys(Ti).forEach(function(t){n0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ti[e]=Ti[t]})});function rm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ti.hasOwnProperty(t)&&Ti[t]?(""+e).trim():e+"px"}function im(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=rm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var r0=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ka(t,e){if(e){if(r0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function qa(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qa=null;function dc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ya=null,Ir=null,Nr=null;function ch(t){if(t=Es(t)){if(typeof Ya!="function")throw Error(S(280));var e=t.stateNode;e&&(e=El(e),Ya(t.stateNode,t.type,e))}}function sm(t){Ir?Nr?Nr.push(t):Nr=[t]:Ir=t}function om(){if(Ir){var t=Ir,e=Nr;if(Nr=Ir=null,ch(t),e)for(t=0;t<e.length;t++)ch(e[t])}}function lm(t,e){return t(e)}function am(){}var ea=!1;function um(t,e,n){if(ea)return t(e,n);ea=!0;try{return lm(t,e,n)}finally{ea=!1,(Ir!==null||Nr!==null)&&(am(),om())}}function Hi(t,e){var n=t.stateNode;if(n===null)return null;var r=El(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var Ja=!1;if(Lt)try{var ci={};Object.defineProperty(ci,"passive",{get:function(){Ja=!0}}),window.addEventListener("test",ci,ci),window.removeEventListener("test",ci,ci)}catch{Ja=!1}function i0(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var Ri=!1,So=null,Co=!1,Xa=null,s0={onError:function(t){Ri=!0,So=t}};function o0(t,e,n,r,i,s,o,l,a){Ri=!1,So=null,i0.apply(s0,arguments)}function l0(t,e,n,r,i,s,o,l,a){if(o0.apply(this,arguments),Ri){if(Ri){var u=So;Ri=!1,So=null}else throw Error(S(198));Co||(Co=!0,Xa=u)}}function ar(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function cm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dh(t){if(ar(t)!==t)throw Error(S(188))}function a0(t){var e=t.alternate;if(!e){if(e=ar(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return dh(i),t;if(s===r)return dh(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function dm(t){return t=a0(t),t!==null?hm(t):null}function hm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hm(t);if(e!==null)return e;t=t.sibling}return null}var fm=He.unstable_scheduleCallback,hh=He.unstable_cancelCallback,u0=He.unstable_shouldYield,c0=He.unstable_requestPaint,ie=He.unstable_now,d0=He.unstable_getCurrentPriorityLevel,hc=He.unstable_ImmediatePriority,pm=He.unstable_UserBlockingPriority,ko=He.unstable_NormalPriority,h0=He.unstable_LowPriority,mm=He.unstable_IdlePriority,yl=null,_t=null;function f0(t){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(yl,t,void 0,(t.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:g0,p0=Math.log,m0=Math.LN2;function g0(t){return t>>>=0,t===0?32:31-(p0(t)/m0|0)|0}var Bs=64,Vs=4194304;function Ci(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Io(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ci(l):(s&=o,s!==0&&(r=Ci(s)))}else o=n&~i,o!==0?r=Ci(o):s!==0&&(r=Ci(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ct(e),i=1<<n,r|=t[n],e&=~i;return r}function v0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function y0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ct(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=v0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Za(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gm(){var t=Bs;return Bs<<=1,!(Bs&4194240)&&(Bs=64),t}function ta(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ws(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ct(e),t[e]=n}function _0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ct(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function fc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ct(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var B=0;function vm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ym,pc,_m,wm,xm,eu=!1,$s=[],sn=null,on=null,ln=null,Gi=new Map,Ki=new Map,Yt=[],w0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fh(t,e){switch(t){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":Gi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ki.delete(e.pointerId)}}function di(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Es(e),e!==null&&pc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function x0(t,e,n,r,i){switch(e){case"focusin":return sn=di(sn,t,e,n,r,i),!0;case"dragenter":return on=di(on,t,e,n,r,i),!0;case"mouseover":return ln=di(ln,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Gi.set(s,di(Gi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ki.set(s,di(Ki.get(s)||null,t,e,n,r,i)),!0}return!1}function Em(t){var e=Wn(t.target);if(e!==null){var n=ar(e);if(n!==null){if(e=n.tag,e===13){if(e=cm(n),e!==null){t.blockedOn=e,xm(t.priority,function(){_m(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=tu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Qa=r,n.target.dispatchEvent(r),Qa=null}else return e=Es(n),e!==null&&pc(e),t.blockedOn=n,!1;e.shift()}return!0}function ph(t,e,n){oo(t)&&n.delete(e)}function E0(){eu=!1,sn!==null&&oo(sn)&&(sn=null),on!==null&&oo(on)&&(on=null),ln!==null&&oo(ln)&&(ln=null),Gi.forEach(ph),Ki.forEach(ph)}function hi(t,e){t.blockedOn===e&&(t.blockedOn=null,eu||(eu=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,E0)))}function qi(t){function e(i){return hi(i,t)}if(0<$s.length){hi($s[0],t);for(var n=1;n<$s.length;n++){var r=$s[n];r.blockedOn===t&&(r.blockedOn=null)}}for(sn!==null&&hi(sn,t),on!==null&&hi(on,t),ln!==null&&hi(ln,t),Gi.forEach(e),Ki.forEach(e),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)Em(n),n.blockedOn===null&&Yt.shift()}var Tr=Bt.ReactCurrentBatchConfig,No=!0;function S0(t,e,n,r){var i=B,s=Tr.transition;Tr.transition=null;try{B=1,mc(t,e,n,r)}finally{B=i,Tr.transition=s}}function C0(t,e,n,r){var i=B,s=Tr.transition;Tr.transition=null;try{B=4,mc(t,e,n,r)}finally{B=i,Tr.transition=s}}function mc(t,e,n,r){if(No){var i=tu(t,e,n,r);if(i===null)da(t,e,r,To,n),fh(t,r);else if(x0(i,t,e,n,r))r.stopPropagation();else if(fh(t,r),e&4&&-1<w0.indexOf(t)){for(;i!==null;){var s=Es(i);if(s!==null&&ym(s),s=tu(t,e,n,r),s===null&&da(t,e,r,To,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else da(t,e,r,null,n)}}var To=null;function tu(t,e,n,r){if(To=null,t=dc(r),t=Wn(t),t!==null)if(e=ar(t),e===null)t=null;else if(n=e.tag,n===13){if(t=cm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return To=t,null}function Sm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(d0()){case hc:return 1;case pm:return 4;case ko:case h0:return 16;case mm:return 536870912;default:return 16}default:return 16}}var tn=null,gc=null,lo=null;function Cm(){if(lo)return lo;var t,e=gc,n=e.length,r,i="value"in tn?tn.value:tn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return lo=i.slice(t,1<r?1-r:void 0)}function ao(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Hs(){return!0}function mh(){return!1}function Ke(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Hs:mh,this.isPropagationStopped=mh,this}return ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hs)},persist:function(){},isPersistent:Hs}),e}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vc=Ke(Yr),xs=ee({},Yr,{view:0,detail:0}),k0=Ke(xs),na,ra,fi,_l=ee({},xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fi&&(fi&&t.type==="mousemove"?(na=t.screenX-fi.screenX,ra=t.screenY-fi.screenY):ra=na=0,fi=t),na)},movementY:function(t){return"movementY"in t?t.movementY:ra}}),gh=Ke(_l),I0=ee({},_l,{dataTransfer:0}),N0=Ke(I0),T0=ee({},xs,{relatedTarget:0}),ia=Ke(T0),R0=ee({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),P0=Ke(R0),b0=ee({},Yr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),A0=Ke(b0),O0=ee({},Yr,{data:0}),vh=Ke(O0),L0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=M0[t])?!!e[t]:!1}function yc(){return j0}var F0=ee({},xs,{key:function(t){if(t.key){var e=L0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ao(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?D0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yc,charCode:function(t){return t.type==="keypress"?ao(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ao(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),U0=Ke(F0),z0=ee({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yh=Ke(z0),W0=ee({},xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yc}),B0=Ke(W0),V0=ee({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),$0=Ke(V0),H0=ee({},_l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),G0=Ke(H0),K0=[9,13,27,32],_c=Lt&&"CompositionEvent"in window,Pi=null;Lt&&"documentMode"in document&&(Pi=document.documentMode);var q0=Lt&&"TextEvent"in window&&!Pi,km=Lt&&(!_c||Pi&&8<Pi&&11>=Pi),_h=" ",wh=!1;function Im(t,e){switch(t){case"keyup":return K0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pr=!1;function Q0(t,e){switch(t){case"compositionend":return Nm(e);case"keypress":return e.which!==32?null:(wh=!0,_h);case"textInput":return t=e.data,t===_h&&wh?null:t;default:return null}}function Y0(t,e){if(pr)return t==="compositionend"||!_c&&Im(t,e)?(t=Cm(),lo=gc=tn=null,pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return km&&e.locale!=="ko"?null:e.data;default:return null}}var J0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!J0[t.type]:e==="textarea"}function Tm(t,e,n,r){sm(r),e=Ro(e,"onChange"),0<e.length&&(n=new vc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var bi=null,Qi=null;function X0(t){Um(t,0)}function wl(t){var e=vr(t);if(Xp(e))return t}function Z0(t,e){if(t==="change")return e}var Rm=!1;if(Lt){var sa;if(Lt){var oa="oninput"in document;if(!oa){var Eh=document.createElement("div");Eh.setAttribute("oninput","return;"),oa=typeof Eh.oninput=="function"}sa=oa}else sa=!1;Rm=sa&&(!document.documentMode||9<document.documentMode)}function Sh(){bi&&(bi.detachEvent("onpropertychange",Pm),Qi=bi=null)}function Pm(t){if(t.propertyName==="value"&&wl(Qi)){var e=[];Tm(e,Qi,t,dc(t)),um(X0,e)}}function ew(t,e,n){t==="focusin"?(Sh(),bi=e,Qi=n,bi.attachEvent("onpropertychange",Pm)):t==="focusout"&&Sh()}function tw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wl(Qi)}function nw(t,e){if(t==="click")return wl(e)}function rw(t,e){if(t==="input"||t==="change")return wl(e)}function iw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pt=typeof Object.is=="function"?Object.is:iw;function Yi(t,e){if(pt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ja.call(e,i)||!pt(t[i],e[i]))return!1}return!0}function Ch(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kh(t,e){var n=Ch(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ch(n)}}function bm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Am(){for(var t=window,e=Eo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Eo(t.document)}return e}function wc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sw(t){var e=Am(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&bm(n.ownerDocument.documentElement,n)){if(r!==null&&wc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=kh(n,s);var o=kh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ow=Lt&&"documentMode"in document&&11>=document.documentMode,mr=null,nu=null,Ai=null,ru=!1;function Ih(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ru||mr==null||mr!==Eo(r)||(r=mr,"selectionStart"in r&&wc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ai&&Yi(Ai,r)||(Ai=r,r=Ro(nu,"onSelect"),0<r.length&&(e=new vc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=mr)))}function Gs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gr={animationend:Gs("Animation","AnimationEnd"),animationiteration:Gs("Animation","AnimationIteration"),animationstart:Gs("Animation","AnimationStart"),transitionend:Gs("Transition","TransitionEnd")},la={},Om={};Lt&&(Om=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function xl(t){if(la[t])return la[t];if(!gr[t])return t;var e=gr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Om)return la[t]=e[n];return t}var Lm=xl("animationend"),Dm=xl("animationiteration"),Mm=xl("animationstart"),jm=xl("transitionend"),Fm=new Map,Nh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(t,e){Fm.set(t,e),lr(e,[t])}for(var aa=0;aa<Nh.length;aa++){var ua=Nh[aa],lw=ua.toLowerCase(),aw=ua[0].toUpperCase()+ua.slice(1);kn(lw,"on"+aw)}kn(Lm,"onAnimationEnd");kn(Dm,"onAnimationIteration");kn(Mm,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn(jm,"onTransitionEnd");jr("onMouseEnter",["mouseout","mouseover"]);jr("onMouseLeave",["mouseout","mouseover"]);jr("onPointerEnter",["pointerout","pointerover"]);jr("onPointerLeave",["pointerout","pointerover"]);lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ki));function Th(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,l0(r,e,void 0,t),t.currentTarget=null}function Um(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Th(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Th(i,l,u),s=a}}}if(Co)throw t=Xa,Co=!1,Xa=null,t}function q(t,e){var n=e[au];n===void 0&&(n=e[au]=new Set);var r=t+"__bubble";n.has(r)||(zm(e,t,2,!1),n.add(r))}function ca(t,e,n){var r=0;e&&(r|=4),zm(n,t,r,e)}var Ks="_reactListening"+Math.random().toString(36).slice(2);function Ji(t){if(!t[Ks]){t[Ks]=!0,Kp.forEach(function(n){n!=="selectionchange"&&(uw.has(n)||ca(n,!1,t),ca(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ks]||(e[Ks]=!0,ca("selectionchange",!1,e))}}function zm(t,e,n,r){switch(Sm(e)){case 1:var i=S0;break;case 4:i=C0;break;default:i=mc}n=i.bind(null,e,n,t),i=void 0,!Ja||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function da(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Wn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}um(function(){var u=s,h=dc(n),c=[];e:{var f=Fm.get(t);if(f!==void 0){var g=vc,v=t;switch(t){case"keypress":if(ao(n)===0)break e;case"keydown":case"keyup":g=U0;break;case"focusin":v="focus",g=ia;break;case"focusout":v="blur",g=ia;break;case"beforeblur":case"afterblur":g=ia;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=N0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=B0;break;case Lm:case Dm:case Mm:g=P0;break;case jm:g=$0;break;case"scroll":g=k0;break;case"wheel":g=G0;break;case"copy":case"cut":case"paste":g=A0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=yh}var _=(e&4)!==0,x=!_&&t==="scroll",m=_?f!==null?f+"Capture":null:f;_=[];for(var p=u,y;p!==null;){y=p;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,m!==null&&(E=Hi(p,m),E!=null&&_.push(Xi(p,E,y)))),x)break;p=p.return}0<_.length&&(f=new g(f,v,null,n,h),c.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Qa&&(v=n.relatedTarget||n.fromElement)&&(Wn(v)||v[Dt]))break e;if((g||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Wn(v):null,v!==null&&(x=ar(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(_=gh,E="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=yh,E="onPointerLeave",m="onPointerEnter",p="pointer"),x=g==null?f:vr(g),y=v==null?f:vr(v),f=new _(E,p+"leave",g,n,h),f.target=x,f.relatedTarget=y,E=null,Wn(h)===u&&(_=new _(m,p+"enter",v,n,h),_.target=y,_.relatedTarget=x,E=_),x=E,g&&v)t:{for(_=g,m=v,p=0,y=_;y;y=cr(y))p++;for(y=0,E=m;E;E=cr(E))y++;for(;0<p-y;)_=cr(_),p--;for(;0<y-p;)m=cr(m),y--;for(;p--;){if(_===m||m!==null&&_===m.alternate)break t;_=cr(_),m=cr(m)}_=null}else _=null;g!==null&&Rh(c,f,g,_,!1),v!==null&&x!==null&&Rh(c,x,v,_,!0)}}e:{if(f=u?vr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var k=Z0;else if(xh(f))if(Rm)k=rw;else{k=tw;var T=ew}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=nw);if(k&&(k=k(t,u))){Tm(c,k,n,h);break e}T&&T(t,f,u),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&$a(f,"number",f.value)}switch(T=u?vr(u):window,t){case"focusin":(xh(T)||T.contentEditable==="true")&&(mr=T,nu=u,Ai=null);break;case"focusout":Ai=nu=mr=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,Ih(c,n,h);break;case"selectionchange":if(ow)break;case"keydown":case"keyup":Ih(c,n,h)}var R;if(_c)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else pr?Im(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(km&&n.locale!=="ko"&&(pr||P!=="onCompositionStart"?P==="onCompositionEnd"&&pr&&(R=Cm()):(tn=h,gc="value"in tn?tn.value:tn.textContent,pr=!0)),T=Ro(u,P),0<T.length&&(P=new vh(P,t,null,n,h),c.push({event:P,listeners:T}),R?P.data=R:(R=Nm(n),R!==null&&(P.data=R)))),(R=q0?Q0(t,n):Y0(t,n))&&(u=Ro(u,"onBeforeInput"),0<u.length&&(h=new vh("onBeforeInput","beforeinput",null,n,h),c.push({event:h,listeners:u}),h.data=R))}Um(c,e)})}function Xi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ro(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Hi(t,n),s!=null&&r.unshift(Xi(t,s,i)),s=Hi(t,e),s!=null&&r.push(Xi(t,s,i))),t=t.return}return r}function cr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Rh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Hi(n,s),a!=null&&o.unshift(Xi(n,a,l))):i||(a=Hi(n,s),a!=null&&o.push(Xi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cw=/\r\n?/g,dw=/\u0000|\uFFFD/g;function Ph(t){return(typeof t=="string"?t:""+t).replace(cw,`
`).replace(dw,"")}function qs(t,e,n){if(e=Ph(e),Ph(t)!==e&&n)throw Error(S(425))}function Po(){}var iu=null,su=null;function ou(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var lu=typeof setTimeout=="function"?setTimeout:void 0,hw=typeof clearTimeout=="function"?clearTimeout:void 0,bh=typeof Promise=="function"?Promise:void 0,fw=typeof queueMicrotask=="function"?queueMicrotask:typeof bh<"u"?function(t){return bh.resolve(null).then(t).catch(pw)}:lu;function pw(t){setTimeout(function(){throw t})}function ha(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),qi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qi(e)}function an(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ah(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Jr=Math.random().toString(36).slice(2),yt="__reactFiber$"+Jr,Zi="__reactProps$"+Jr,Dt="__reactContainer$"+Jr,au="__reactEvents$"+Jr,mw="__reactListeners$"+Jr,gw="__reactHandles$"+Jr;function Wn(t){var e=t[yt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dt]||n[yt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ah(t);t!==null;){if(n=t[yt])return n;t=Ah(t)}return e}t=n,n=t.parentNode}return null}function Es(t){return t=t[yt]||t[Dt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function El(t){return t[Zi]||null}var uu=[],yr=-1;function In(t){return{current:t}}function Y(t){0>yr||(t.current=uu[yr],uu[yr]=null,yr--)}function G(t,e){yr++,uu[yr]=t.current,t.current=e}var _n={},ke=In(_n),je=In(!1),Qn=_n;function Fr(t,e){var n=t.type.contextTypes;if(!n)return _n;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Fe(t){return t=t.childContextTypes,t!=null}function bo(){Y(je),Y(ke)}function Oh(t,e,n){if(ke.current!==_n)throw Error(S(168));G(ke,e),G(je,n)}function Wm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,e0(t)||"Unknown",i));return ee({},n,r)}function Ao(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_n,Qn=ke.current,G(ke,t),G(je,je.current),!0}function Lh(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=Wm(t,e,Qn),r.__reactInternalMemoizedMergedChildContext=t,Y(je),Y(ke),G(ke,t)):Y(je),G(je,n)}var St=null,Sl=!1,fa=!1;function Bm(t){St===null?St=[t]:St.push(t)}function vw(t){Sl=!0,Bm(t)}function Nn(){if(!fa&&St!==null){fa=!0;var t=0,e=B;try{var n=St;for(B=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}St=null,Sl=!1}catch(i){throw St!==null&&(St=St.slice(t+1)),fm(hc,Nn),i}finally{B=e,fa=!1}}return null}var _r=[],wr=0,Oo=null,Lo=0,qe=[],Qe=0,Yn=null,kt=1,It="";function Mn(t,e){_r[wr++]=Lo,_r[wr++]=Oo,Oo=t,Lo=e}function Vm(t,e,n){qe[Qe++]=kt,qe[Qe++]=It,qe[Qe++]=Yn,Yn=t;var r=kt;t=It;var i=32-ct(r)-1;r&=~(1<<i),n+=1;var s=32-ct(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kt=1<<32-ct(e)+i|n<<i|r,It=s+t}else kt=1<<s|n<<i|r,It=t}function xc(t){t.return!==null&&(Mn(t,1),Vm(t,1,0))}function Ec(t){for(;t===Oo;)Oo=_r[--wr],_r[wr]=null,Lo=_r[--wr],_r[wr]=null;for(;t===Yn;)Yn=qe[--Qe],qe[Qe]=null,It=qe[--Qe],qe[Qe]=null,kt=qe[--Qe],qe[Qe]=null}var $e=null,Ve=null,J=!1,st=null;function $m(t,e){var n=Ye(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$e=t,Ve=an(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$e=t,Ve=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yn!==null?{id:kt,overflow:It}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ye(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$e=t,Ve=null,!0):!1;default:return!1}}function cu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function du(t){if(J){var e=Ve;if(e){var n=e;if(!Dh(t,e)){if(cu(t))throw Error(S(418));e=an(n.nextSibling);var r=$e;e&&Dh(t,e)?$m(r,n):(t.flags=t.flags&-4097|2,J=!1,$e=t)}}else{if(cu(t))throw Error(S(418));t.flags=t.flags&-4097|2,J=!1,$e=t}}}function Mh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$e=t}function Qs(t){if(t!==$e)return!1;if(!J)return Mh(t),J=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ou(t.type,t.memoizedProps)),e&&(e=Ve)){if(cu(t))throw Hm(),Error(S(418));for(;e;)$m(t,e),e=an(e.nextSibling)}if(Mh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ve=an(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ve=null}}else Ve=$e?an(t.stateNode.nextSibling):null;return!0}function Hm(){for(var t=Ve;t;)t=an(t.nextSibling)}function Ur(){Ve=$e=null,J=!1}function Sc(t){st===null?st=[t]:st.push(t)}var yw=Bt.ReactCurrentBatchConfig;function pi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function Ys(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jh(t){var e=t._init;return e(t._payload)}function Gm(t){function e(m,p){if(t){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=hn(m,p),m.index=0,m.sibling=null,m}function s(m,p,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=2,p):y):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,p,y,E){return p===null||p.tag!==6?(p=wa(y,m.mode,E),p.return=m,p):(p=i(p,y),p.return=m,p)}function a(m,p,y,E){var k=y.type;return k===fr?h(m,p,y.props.children,E,y.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===qt&&jh(k)===p.type)?(E=i(p,y.props),E.ref=pi(m,p,y),E.return=m,E):(E=go(y.type,y.key,y.props,null,m.mode,E),E.ref=pi(m,p,y),E.return=m,E)}function u(m,p,y,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=xa(y,m.mode,E),p.return=m,p):(p=i(p,y.children||[]),p.return=m,p)}function h(m,p,y,E,k){return p===null||p.tag!==7?(p=qn(y,m.mode,E,k),p.return=m,p):(p=i(p,y),p.return=m,p)}function c(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=wa(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Us:return y=go(p.type,p.key,p.props,null,m.mode,y),y.ref=pi(m,null,p),y.return=m,y;case hr:return p=xa(p,m.mode,y),p.return=m,p;case qt:var E=p._init;return c(m,E(p._payload),y)}if(Si(p)||ui(p))return p=qn(p,m.mode,y,null),p.return=m,p;Ys(m,p)}return null}function f(m,p,y,E){var k=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return k!==null?null:l(m,p,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Us:return y.key===k?a(m,p,y,E):null;case hr:return y.key===k?u(m,p,y,E):null;case qt:return k=y._init,f(m,p,k(y._payload),E)}if(Si(y)||ui(y))return k!==null?null:h(m,p,y,E,null);Ys(m,y)}return null}function g(m,p,y,E,k){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(y)||null,l(p,m,""+E,k);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Us:return m=m.get(E.key===null?y:E.key)||null,a(p,m,E,k);case hr:return m=m.get(E.key===null?y:E.key)||null,u(p,m,E,k);case qt:var T=E._init;return g(m,p,y,T(E._payload),k)}if(Si(E)||ui(E))return m=m.get(y)||null,h(p,m,E,k,null);Ys(p,E)}return null}function v(m,p,y,E){for(var k=null,T=null,R=p,P=p=0,K=null;R!==null&&P<y.length;P++){R.index>P?(K=R,R=null):K=R.sibling;var j=f(m,R,y[P],E);if(j===null){R===null&&(R=K);break}t&&R&&j.alternate===null&&e(m,R),p=s(j,p,P),T===null?k=j:T.sibling=j,T=j,R=K}if(P===y.length)return n(m,R),J&&Mn(m,P),k;if(R===null){for(;P<y.length;P++)R=c(m,y[P],E),R!==null&&(p=s(R,p,P),T===null?k=R:T.sibling=R,T=R);return J&&Mn(m,P),k}for(R=r(m,R);P<y.length;P++)K=g(R,m,P,y[P],E),K!==null&&(t&&K.alternate!==null&&R.delete(K.key===null?P:K.key),p=s(K,p,P),T===null?k=K:T.sibling=K,T=K);return t&&R.forEach(function(tt){return e(m,tt)}),J&&Mn(m,P),k}function _(m,p,y,E){var k=ui(y);if(typeof k!="function")throw Error(S(150));if(y=k.call(y),y==null)throw Error(S(151));for(var T=k=null,R=p,P=p=0,K=null,j=y.next();R!==null&&!j.done;P++,j=y.next()){R.index>P?(K=R,R=null):K=R.sibling;var tt=f(m,R,j.value,E);if(tt===null){R===null&&(R=K);break}t&&R&&tt.alternate===null&&e(m,R),p=s(tt,p,P),T===null?k=tt:T.sibling=tt,T=tt,R=K}if(j.done)return n(m,R),J&&Mn(m,P),k;if(R===null){for(;!j.done;P++,j=y.next())j=c(m,j.value,E),j!==null&&(p=s(j,p,P),T===null?k=j:T.sibling=j,T=j);return J&&Mn(m,P),k}for(R=r(m,R);!j.done;P++,j=y.next())j=g(R,m,P,j.value,E),j!==null&&(t&&j.alternate!==null&&R.delete(j.key===null?P:j.key),p=s(j,p,P),T===null?k=j:T.sibling=j,T=j);return t&&R.forEach(function(li){return e(m,li)}),J&&Mn(m,P),k}function x(m,p,y,E){if(typeof y=="object"&&y!==null&&y.type===fr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Us:e:{for(var k=y.key,T=p;T!==null;){if(T.key===k){if(k=y.type,k===fr){if(T.tag===7){n(m,T.sibling),p=i(T,y.props.children),p.return=m,m=p;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===qt&&jh(k)===T.type){n(m,T.sibling),p=i(T,y.props),p.ref=pi(m,T,y),p.return=m,m=p;break e}n(m,T);break}else e(m,T);T=T.sibling}y.type===fr?(p=qn(y.props.children,m.mode,E,y.key),p.return=m,m=p):(E=go(y.type,y.key,y.props,null,m.mode,E),E.ref=pi(m,p,y),E.return=m,m=E)}return o(m);case hr:e:{for(T=y.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),p=i(p,y.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=xa(y,m.mode,E),p.return=m,m=p}return o(m);case qt:return T=y._init,x(m,p,T(y._payload),E)}if(Si(y))return v(m,p,y,E);if(ui(y))return _(m,p,y,E);Ys(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,y),p.return=m,m=p):(n(m,p),p=wa(y,m.mode,E),p.return=m,m=p),o(m)):n(m,p)}return x}var zr=Gm(!0),Km=Gm(!1),Do=In(null),Mo=null,xr=null,Cc=null;function kc(){Cc=xr=Mo=null}function Ic(t){var e=Do.current;Y(Do),t._currentValue=e}function hu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Rr(t,e){Mo=t,Cc=xr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Le=!0),t.firstContext=null)}function Xe(t){var e=t._currentValue;if(Cc!==t)if(t={context:t,memoizedValue:e,next:null},xr===null){if(Mo===null)throw Error(S(308));xr=t,Mo.dependencies={lanes:0,firstContext:t}}else xr=xr.next=t;return e}var Bn=null;function Nc(t){Bn===null?Bn=[t]:Bn.push(t)}function qm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Nc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Mt(t,r)}function Mt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qt=!1;function Tc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function un(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Mt(t,n)}return i=r.interleaved,i===null?(e.next=e,Nc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Mt(t,n)}function uo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,fc(t,n)}}function Fh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function jo(t,e,n,r){var i=t.updateQueue;Qt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,h=u=a=null,l=s;do{var f=l.lane,g=l.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,_=l;switch(f=e,g=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){c=v.call(g,c,f);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(g,c,f):v,f==null)break e;c=ee({},c,f);break e;case 2:Qt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else g={eventTime:g,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=g,a=c):h=h.next=g,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(h===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Xn|=o,t.lanes=o,t.memoizedState=c}}function Uh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Ss={},wt=In(Ss),es=In(Ss),ts=In(Ss);function Vn(t){if(t===Ss)throw Error(S(174));return t}function Rc(t,e){switch(G(ts,e),G(es,t),G(wt,Ss),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ga(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ga(e,t)}Y(wt),G(wt,e)}function Wr(){Y(wt),Y(es),Y(ts)}function Ym(t){Vn(ts.current);var e=Vn(wt.current),n=Ga(e,t.type);e!==n&&(G(es,t),G(wt,n))}function Pc(t){es.current===t&&(Y(wt),Y(es))}var X=In(0);function Fo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pa=[];function bc(){for(var t=0;t<pa.length;t++)pa[t]._workInProgressVersionPrimary=null;pa.length=0}var co=Bt.ReactCurrentDispatcher,ma=Bt.ReactCurrentBatchConfig,Jn=0,Z=null,ae=null,fe=null,Uo=!1,Oi=!1,ns=0,_w=0;function xe(){throw Error(S(321))}function Ac(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pt(t[n],e[n]))return!1;return!0}function Oc(t,e,n,r,i,s){if(Jn=s,Z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,co.current=t===null||t.memoizedState===null?Sw:Cw,t=n(r,i),Oi){s=0;do{if(Oi=!1,ns=0,25<=s)throw Error(S(301));s+=1,fe=ae=null,e.updateQueue=null,co.current=kw,t=n(r,i)}while(Oi)}if(co.current=zo,e=ae!==null&&ae.next!==null,Jn=0,fe=ae=Z=null,Uo=!1,e)throw Error(S(300));return t}function Lc(){var t=ns!==0;return ns=0,t}function vt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?Z.memoizedState=fe=t:fe=fe.next=t,fe}function Ze(){if(ae===null){var t=Z.alternate;t=t!==null?t.memoizedState:null}else t=ae.next;var e=fe===null?Z.memoizedState:fe.next;if(e!==null)fe=e,ae=t;else{if(t===null)throw Error(S(310));ae=t,t={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},fe===null?Z.memoizedState=fe=t:fe=fe.next=t}return fe}function rs(t,e){return typeof e=="function"?e(t):e}function ga(t){var e=Ze(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var h=u.lane;if((Jn&h)===h)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,Z.lanes|=h,Xn|=h}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,pt(r,e.memoizedState)||(Le=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Z.lanes|=s,Xn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function va(t){var e=Ze(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);pt(s,e.memoizedState)||(Le=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Jm(){}function Xm(t,e){var n=Z,r=Ze(),i=e(),s=!pt(r.memoizedState,i);if(s&&(r.memoizedState=i,Le=!0),r=r.queue,Dc(tg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,is(9,eg.bind(null,n,r,i,e),void 0,null),ge===null)throw Error(S(349));Jn&30||Zm(n,e,i)}return i}function Zm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function eg(t,e,n,r){e.value=n,e.getSnapshot=r,ng(e)&&rg(t)}function tg(t,e,n){return n(function(){ng(e)&&rg(t)})}function ng(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pt(t,n)}catch{return!0}}function rg(t){var e=Mt(t,1);e!==null&&dt(e,t,1,-1)}function zh(t){var e=vt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},e.queue=t,t=t.dispatch=Ew.bind(null,Z,t),[e.memoizedState,t]}function is(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ig(){return Ze().memoizedState}function ho(t,e,n,r){var i=vt();Z.flags|=t,i.memoizedState=is(1|e,n,void 0,r===void 0?null:r)}function Cl(t,e,n,r){var i=Ze();r=r===void 0?null:r;var s=void 0;if(ae!==null){var o=ae.memoizedState;if(s=o.destroy,r!==null&&Ac(r,o.deps)){i.memoizedState=is(e,n,s,r);return}}Z.flags|=t,i.memoizedState=is(1|e,n,s,r)}function Wh(t,e){return ho(8390656,8,t,e)}function Dc(t,e){return Cl(2048,8,t,e)}function sg(t,e){return Cl(4,2,t,e)}function og(t,e){return Cl(4,4,t,e)}function lg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ag(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4,4,lg.bind(null,e,t),n)}function Mc(){}function ug(t,e){var n=Ze();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ac(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function cg(t,e){var n=Ze();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ac(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function dg(t,e,n){return Jn&21?(pt(n,e)||(n=gm(),Z.lanes|=n,Xn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Le=!0),t.memoizedState=n)}function ww(t,e){var n=B;B=n!==0&&4>n?n:4,t(!0);var r=ma.transition;ma.transition={};try{t(!1),e()}finally{B=n,ma.transition=r}}function hg(){return Ze().memoizedState}function xw(t,e,n){var r=dn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fg(t))pg(e,n);else if(n=qm(t,e,n,r),n!==null){var i=Te();dt(n,t,r,i),mg(n,e,r)}}function Ew(t,e,n){var r=dn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fg(t))pg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,pt(l,o)){var a=e.interleaved;a===null?(i.next=i,Nc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=qm(t,e,i,r),n!==null&&(i=Te(),dt(n,t,r,i),mg(n,e,r))}}function fg(t){var e=t.alternate;return t===Z||e!==null&&e===Z}function pg(t,e){Oi=Uo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function mg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,fc(t,n)}}var zo={readContext:Xe,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},Sw={readContext:Xe,useCallback:function(t,e){return vt().memoizedState=[t,e===void 0?null:e],t},useContext:Xe,useEffect:Wh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ho(4194308,4,lg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ho(4194308,4,t,e)},useInsertionEffect:function(t,e){return ho(4,2,t,e)},useMemo:function(t,e){var n=vt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=vt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=xw.bind(null,Z,t),[r.memoizedState,t]},useRef:function(t){var e=vt();return t={current:t},e.memoizedState=t},useState:zh,useDebugValue:Mc,useDeferredValue:function(t){return vt().memoizedState=t},useTransition:function(){var t=zh(!1),e=t[0];return t=ww.bind(null,t[1]),vt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Z,i=vt();if(J){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),ge===null)throw Error(S(349));Jn&30||Zm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Wh(tg.bind(null,r,s,t),[t]),r.flags|=2048,is(9,eg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=vt(),e=ge.identifierPrefix;if(J){var n=It,r=kt;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ns++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_w++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Cw={readContext:Xe,useCallback:ug,useContext:Xe,useEffect:Dc,useImperativeHandle:ag,useInsertionEffect:sg,useLayoutEffect:og,useMemo:cg,useReducer:ga,useRef:ig,useState:function(){return ga(rs)},useDebugValue:Mc,useDeferredValue:function(t){var e=Ze();return dg(e,ae.memoizedState,t)},useTransition:function(){var t=ga(rs)[0],e=Ze().memoizedState;return[t,e]},useMutableSource:Jm,useSyncExternalStore:Xm,useId:hg,unstable_isNewReconciler:!1},kw={readContext:Xe,useCallback:ug,useContext:Xe,useEffect:Dc,useImperativeHandle:ag,useInsertionEffect:sg,useLayoutEffect:og,useMemo:cg,useReducer:va,useRef:ig,useState:function(){return va(rs)},useDebugValue:Mc,useDeferredValue:function(t){var e=Ze();return ae===null?e.memoizedState=t:dg(e,ae.memoizedState,t)},useTransition:function(){var t=va(rs)[0],e=Ze().memoizedState;return[t,e]},useMutableSource:Jm,useSyncExternalStore:Xm,useId:hg,unstable_isNewReconciler:!1};function rt(t,e){if(t&&t.defaultProps){e=ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var kl={isMounted:function(t){return(t=t._reactInternals)?ar(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Te(),i=dn(t),s=bt(r,i);s.payload=e,n!=null&&(s.callback=n),e=un(t,s,i),e!==null&&(dt(e,t,i,r),uo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Te(),i=dn(t),s=bt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=un(t,s,i),e!==null&&(dt(e,t,i,r),uo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Te(),r=dn(t),i=bt(n,r);i.tag=2,e!=null&&(i.callback=e),e=un(t,i,r),e!==null&&(dt(e,t,r,n),uo(e,t,r))}};function Bh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Yi(n,r)||!Yi(i,s):!0}function gg(t,e,n){var r=!1,i=_n,s=e.contextType;return typeof s=="object"&&s!==null?s=Xe(s):(i=Fe(e)?Qn:ke.current,r=e.contextTypes,s=(r=r!=null)?Fr(t,i):_n),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&kl.enqueueReplaceState(e,e.state,null)}function pu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Tc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Xe(s):(s=Fe(e)?Qn:ke.current,i.context=Fr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&kl.enqueueReplaceState(i,i.state,null),jo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Br(t,e){try{var n="",r=e;do n+=Z_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ya(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function mu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Iw=typeof WeakMap=="function"?WeakMap:Map;function vg(t,e,n){n=bt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Bo||(Bo=!0,ku=r),mu(t,e)},n}function yg(t,e,n){n=bt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){mu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){mu(t,e),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function $h(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Iw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=zw.bind(null,t,e,n),e.then(t,t))}function Hh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bt(-1,1),e.tag=2,un(n,e,1))),n.lanes|=1),t)}var Nw=Bt.ReactCurrentOwner,Le=!1;function Ie(t,e,n,r){e.child=t===null?Km(e,null,n,r):zr(e,t.child,n,r)}function Kh(t,e,n,r,i){n=n.render;var s=e.ref;return Rr(e,i),r=Oc(t,e,n,r,s,i),n=Lc(),t!==null&&!Le?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jt(t,e,i)):(J&&n&&xc(e),e.flags|=1,Ie(t,e,r,i),e.child)}function qh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!$c(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_g(t,e,s,r,i)):(t=go(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Yi,n(o,r)&&t.ref===e.ref)return jt(t,e,i)}return e.flags|=1,t=hn(s,r),t.ref=e.ref,t.return=e,e.child=t}function _g(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Yi(s,r)&&t.ref===e.ref)if(Le=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Le=!0);else return e.lanes=t.lanes,jt(t,e,i)}return gu(t,e,n,r,i)}function wg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Sr,Be),Be|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,G(Sr,Be),Be|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,G(Sr,Be),Be|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,G(Sr,Be),Be|=r;return Ie(t,e,i,n),e.child}function xg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gu(t,e,n,r,i){var s=Fe(n)?Qn:ke.current;return s=Fr(e,s),Rr(e,i),n=Oc(t,e,n,r,s,i),r=Lc(),t!==null&&!Le?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jt(t,e,i)):(J&&r&&xc(e),e.flags|=1,Ie(t,e,n,i),e.child)}function Qh(t,e,n,r,i){if(Fe(n)){var s=!0;Ao(e)}else s=!1;if(Rr(e,i),e.stateNode===null)fo(t,e),gg(e,n,r),pu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xe(u):(u=Fe(n)?Qn:ke.current,u=Fr(e,u));var h=n.getDerivedStateFromProps,c=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Vh(e,o,r,u),Qt=!1;var f=e.memoizedState;o.state=f,jo(e,r,o,i),a=e.memoizedState,l!==r||f!==a||je.current||Qt?(typeof h=="function"&&(fu(e,n,h,r),a=e.memoizedState),(l=Qt||Bh(e,n,l,r,f,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Qm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:rt(e.type,l),o.props=u,c=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Xe(a):(a=Fe(n)?Qn:ke.current,a=Fr(e,a));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||f!==a)&&Vh(e,o,r,a),Qt=!1,f=e.memoizedState,o.state=f,jo(e,r,o,i);var v=e.memoizedState;l!==c||f!==v||je.current||Qt?(typeof g=="function"&&(fu(e,n,g,r),v=e.memoizedState),(u=Qt||Bh(e,n,u,r,f,v,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return vu(t,e,n,r,s,i)}function vu(t,e,n,r,i,s){xg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Lh(e,n,!1),jt(t,e,s);r=e.stateNode,Nw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=zr(e,t.child,null,s),e.child=zr(e,null,l,s)):Ie(t,e,l,s),e.memoizedState=r.state,i&&Lh(e,n,!0),e.child}function Eg(t){var e=t.stateNode;e.pendingContext?Oh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Oh(t,e.context,!1),Rc(t,e.containerInfo)}function Yh(t,e,n,r,i){return Ur(),Sc(i),e.flags|=256,Ie(t,e,n,r),e.child}var yu={dehydrated:null,treeContext:null,retryLane:0};function _u(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sg(t,e,n){var r=e.pendingProps,i=X.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),G(X,i&1),t===null)return du(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Tl(o,r,0,null),t=qn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_u(n),e.memoizedState=yu,t):jc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Tw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=hn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=hn(l,s):(s=qn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?_u(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=yu,r}return s=t.child,t=s.sibling,r=hn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function jc(t,e){return e=Tl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Js(t,e,n,r){return r!==null&&Sc(r),zr(e,t.child,null,n),t=jc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Tw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ya(Error(S(422))),Js(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Tl({mode:"visible",children:r.children},i,0,null),s=qn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&zr(e,t.child,null,o),e.child.memoizedState=_u(o),e.memoizedState=yu,s);if(!(e.mode&1))return Js(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(S(419)),r=ya(s,r,void 0),Js(t,e,o,r)}if(l=(o&t.childLanes)!==0,Le||l){if(r=ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mt(t,i),dt(r,t,i,-1))}return Vc(),r=ya(Error(S(421))),Js(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Ww.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ve=an(i.nextSibling),$e=e,J=!0,st=null,t!==null&&(qe[Qe++]=kt,qe[Qe++]=It,qe[Qe++]=Yn,kt=t.id,It=t.overflow,Yn=e),e=jc(e,r.children),e.flags|=4096,e)}function Jh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),hu(t.return,e,n)}function _a(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Cg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ie(t,e,r.children,n),r=X.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jh(t,n,e);else if(t.tag===19)Jh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(G(X,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Fo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),_a(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Fo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}_a(e,!0,n,null,s);break;case"together":_a(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=hn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Rw(t,e,n){switch(e.tag){case 3:Eg(e),Ur();break;case 5:Ym(e);break;case 1:Fe(e.type)&&Ao(e);break;case 4:Rc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;G(Do,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(G(X,X.current&1),e.flags|=128,null):n&e.child.childLanes?Sg(t,e,n):(G(X,X.current&1),t=jt(t,e,n),t!==null?t.sibling:null);G(X,X.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Cg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(X,X.current),r)break;return null;case 22:case 23:return e.lanes=0,wg(t,e,n)}return jt(t,e,n)}var kg,wu,Ig,Ng;kg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wu=function(){};Ig=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Vn(wt.current);var s=null;switch(n){case"input":i=Ba(t,i),r=Ba(t,r),s=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),s=[];break;case"textarea":i=Ha(t,i),r=Ha(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Po)}Ka(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ng=function(t,e,n,r){n!==r&&(e.flags|=4)};function mi(t,e){if(!J)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ee(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Pw(t,e,n){var r=e.pendingProps;switch(Ec(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(e),null;case 1:return Fe(e.type)&&bo(),Ee(e),null;case 3:return r=e.stateNode,Wr(),Y(je),Y(ke),bc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Qs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,st!==null&&(Tu(st),st=null))),wu(t,e),Ee(e),null;case 5:Pc(e);var i=Vn(ts.current);if(n=e.type,t!==null&&e.stateNode!=null)Ig(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Ee(e),null}if(t=Vn(wt.current),Qs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[yt]=e,r[Zi]=s,t=(e.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(i=0;i<ki.length;i++)q(ki[i],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":oh(r,s),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},q("invalid",r);break;case"textarea":ah(r,s),q("invalid",r)}Ka(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&qs(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&qs(r.textContent,l,t),i=["children",""+l]):Vi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&q("scroll",r)}switch(n){case"input":zs(r),lh(r,s,!0);break;case"textarea":zs(r),uh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Po)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=tm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[yt]=e,t[Zi]=r,kg(t,e,!1,!1),e.stateNode=t;e:{switch(o=qa(n,r),n){case"dialog":q("cancel",t),q("close",t),i=r;break;case"iframe":case"object":case"embed":q("load",t),i=r;break;case"video":case"audio":for(i=0;i<ki.length;i++)q(ki[i],t);i=r;break;case"source":q("error",t),i=r;break;case"img":case"image":case"link":q("error",t),q("load",t),i=r;break;case"details":q("toggle",t),i=r;break;case"input":oh(t,r),i=Ba(t,r),q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),q("invalid",t);break;case"textarea":ah(t,r),i=Ha(t,r),q("invalid",t);break;default:i=r}Ka(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?im(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&nm(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&$i(t,a):typeof a=="number"&&$i(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Vi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&q("scroll",t):a!=null&&lc(t,s,a,o))}switch(n){case"input":zs(t),lh(t,r,!1);break;case"textarea":zs(t),uh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+yn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?kr(t,!!r.multiple,s,!1):r.defaultValue!=null&&kr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Po)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ee(e),null;case 6:if(t&&e.stateNode!=null)Ng(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=Vn(ts.current),Vn(wt.current),Qs(e)){if(r=e.stateNode,n=e.memoizedProps,r[yt]=e,(s=r.nodeValue!==n)&&(t=$e,t!==null))switch(t.tag){case 3:qs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&qs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yt]=e,e.stateNode=r}return Ee(e),null;case 13:if(Y(X),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(J&&Ve!==null&&e.mode&1&&!(e.flags&128))Hm(),Ur(),e.flags|=98560,s=!1;else if(s=Qs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[yt]=e}else Ur(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ee(e),s=!1}else st!==null&&(Tu(st),st=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||X.current&1?ce===0&&(ce=3):Vc())),e.updateQueue!==null&&(e.flags|=4),Ee(e),null);case 4:return Wr(),wu(t,e),t===null&&Ji(e.stateNode.containerInfo),Ee(e),null;case 10:return Ic(e.type._context),Ee(e),null;case 17:return Fe(e.type)&&bo(),Ee(e),null;case 19:if(Y(X),s=e.memoizedState,s===null)return Ee(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)mi(s,!1);else{if(ce!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Fo(t),o!==null){for(e.flags|=128,mi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return G(X,X.current&1|2),e.child}t=t.sibling}s.tail!==null&&ie()>Vr&&(e.flags|=128,r=!0,mi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Fo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),mi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!J)return Ee(e),null}else 2*ie()-s.renderingStartTime>Vr&&n!==1073741824&&(e.flags|=128,r=!0,mi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ie(),e.sibling=null,n=X.current,G(X,r?n&1|2:n&1),e):(Ee(e),null);case 22:case 23:return Bc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Be&1073741824&&(Ee(e),e.subtreeFlags&6&&(e.flags|=8192)):Ee(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function bw(t,e){switch(Ec(e),e.tag){case 1:return Fe(e.type)&&bo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Wr(),Y(je),Y(ke),bc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Pc(e),null;case 13:if(Y(X),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Ur()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(X),null;case 4:return Wr(),null;case 10:return Ic(e.type._context),null;case 22:case 23:return Bc(),null;case 24:return null;default:return null}}var Xs=!1,Se=!1,Aw=typeof WeakSet=="function"?WeakSet:Set,I=null;function Er(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(t,e,r)}else n.current=null}function xu(t,e,n){try{n()}catch(r){te(t,e,r)}}var Xh=!1;function Ow(t,e){if(iu=No,t=Am(),wc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,h=0,c=t,f=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)f=c,c=g;for(;;){if(c===t)break t;if(f===n&&++u===i&&(l=o),f===s&&++h===r&&(a=o),(g=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(su={focusedElem:t,selectionRange:n},No=!1,I=e;I!==null;)if(e=I,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,I=t;else for(;I!==null;){e=I;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,x=v.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:rt(e.type,_),x);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(E){te(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,I=t;break}I=e.return}return v=Xh,Xh=!1,v}function Li(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&xu(e,n,s)}i=i.next}while(i!==r)}}function Il(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Eu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Tg(t){var e=t.alternate;e!==null&&(t.alternate=null,Tg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yt],delete e[Zi],delete e[au],delete e[mw],delete e[gw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Rg(t){return t.tag===5||t.tag===3||t.tag===4}function Zh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Su(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Po));else if(r!==4&&(t=t.child,t!==null))for(Su(t,e,n),t=t.sibling;t!==null;)Su(t,e,n),t=t.sibling}function Cu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Cu(t,e,n),t=t.sibling;t!==null;)Cu(t,e,n),t=t.sibling}var ve=null,it=!1;function Gt(t,e,n){for(n=n.child;n!==null;)Pg(t,e,n),n=n.sibling}function Pg(t,e,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(yl,n)}catch{}switch(n.tag){case 5:Se||Er(n,e);case 6:var r=ve,i=it;ve=null,Gt(t,e,n),ve=r,it=i,ve!==null&&(it?(t=ve,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(it?(t=ve,n=n.stateNode,t.nodeType===8?ha(t.parentNode,n):t.nodeType===1&&ha(t,n),qi(t)):ha(ve,n.stateNode));break;case 4:r=ve,i=it,ve=n.stateNode.containerInfo,it=!0,Gt(t,e,n),ve=r,it=i;break;case 0:case 11:case 14:case 15:if(!Se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xu(n,e,o),i=i.next}while(i!==r)}Gt(t,e,n);break;case 1:if(!Se&&(Er(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,e,l)}Gt(t,e,n);break;case 21:Gt(t,e,n);break;case 22:n.mode&1?(Se=(r=Se)||n.memoizedState!==null,Gt(t,e,n),Se=r):Gt(t,e,n);break;default:Gt(t,e,n)}}function ef(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Aw),e.forEach(function(r){var i=Bw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ve=l.stateNode,it=!1;break e;case 3:ve=l.stateNode.containerInfo,it=!0;break e;case 4:ve=l.stateNode.containerInfo,it=!0;break e}l=l.return}if(ve===null)throw Error(S(160));Pg(s,o,i),ve=null,it=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){te(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)bg(e,t),e=e.sibling}function bg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(nt(e,t),gt(t),r&4){try{Li(3,t,t.return),Il(3,t)}catch(_){te(t,t.return,_)}try{Li(5,t,t.return)}catch(_){te(t,t.return,_)}}break;case 1:nt(e,t),gt(t),r&512&&n!==null&&Er(n,n.return);break;case 5:if(nt(e,t),gt(t),r&512&&n!==null&&Er(n,n.return),t.flags&32){var i=t.stateNode;try{$i(i,"")}catch(_){te(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Zp(i,s),qa(l,o);var u=qa(l,s);for(o=0;o<a.length;o+=2){var h=a[o],c=a[o+1];h==="style"?im(i,c):h==="dangerouslySetInnerHTML"?nm(i,c):h==="children"?$i(i,c):lc(i,h,c,u)}switch(l){case"input":Va(i,s);break;case"textarea":em(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?kr(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?kr(i,!!s.multiple,s.defaultValue,!0):kr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Zi]=s}catch(_){te(t,t.return,_)}}break;case 6:if(nt(e,t),gt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){te(t,t.return,_)}}break;case 3:if(nt(e,t),gt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qi(e.containerInfo)}catch(_){te(t,t.return,_)}break;case 4:nt(e,t),gt(t);break;case 13:nt(e,t),gt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(zc=ie())),r&4&&ef(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Se=(u=Se)||h,nt(e,t),Se=u):nt(e,t),gt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(I=t,h=t.child;h!==null;){for(c=I=h;I!==null;){switch(f=I,g=f.child,f.tag){case 0:case 11:case 14:case 15:Li(4,f,f.return);break;case 1:Er(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){te(r,n,_)}}break;case 5:Er(f,f.return);break;case 22:if(f.memoizedState!==null){nf(c);continue}}g!==null?(g.return=f,I=g):nf(c)}h=h.sibling}e:for(h=null,c=t;;){if(c.tag===5){if(h===null){h=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=rm("display",o))}catch(_){te(t,t.return,_)}}}else if(c.tag===6){if(h===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(_){te(t,t.return,_)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;h===c&&(h=null),c=c.return}h===c&&(h=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:nt(e,t),gt(t),r&4&&ef(t);break;case 21:break;default:nt(e,t),gt(t)}}function gt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Rg(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($i(i,""),r.flags&=-33);var s=Zh(t);Cu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Zh(t);Su(t,l,o);break;default:throw Error(S(161))}}catch(a){te(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Lw(t,e,n){I=t,Ag(t)}function Ag(t,e,n){for(var r=(t.mode&1)!==0;I!==null;){var i=I,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Xs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Se;l=Xs;var u=Se;if(Xs=o,(Se=a)&&!u)for(I=i;I!==null;)o=I,a=o.child,o.tag===22&&o.memoizedState!==null?rf(i):a!==null?(a.return=o,I=a):rf(i);for(;s!==null;)I=s,Ag(s),s=s.sibling;I=i,Xs=l,Se=u}tf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,I=s):tf(t)}}function tf(t){for(;I!==null;){var e=I;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Se||Il(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Se)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:rt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Uh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Uh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var c=h.dehydrated;c!==null&&qi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Se||e.flags&512&&Eu(e)}catch(f){te(e,e.return,f)}}if(e===t){I=null;break}if(n=e.sibling,n!==null){n.return=e.return,I=n;break}I=e.return}}function nf(t){for(;I!==null;){var e=I;if(e===t){I=null;break}var n=e.sibling;if(n!==null){n.return=e.return,I=n;break}I=e.return}}function rf(t){for(;I!==null;){var e=I;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Il(4,e)}catch(a){te(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){te(e,i,a)}}var s=e.return;try{Eu(e)}catch(a){te(e,s,a)}break;case 5:var o=e.return;try{Eu(e)}catch(a){te(e,o,a)}}}catch(a){te(e,e.return,a)}if(e===t){I=null;break}var l=e.sibling;if(l!==null){l.return=e.return,I=l;break}I=e.return}}var Dw=Math.ceil,Wo=Bt.ReactCurrentDispatcher,Fc=Bt.ReactCurrentOwner,Je=Bt.ReactCurrentBatchConfig,z=0,ge=null,le=null,_e=0,Be=0,Sr=In(0),ce=0,ss=null,Xn=0,Nl=0,Uc=0,Di=null,Oe=null,zc=0,Vr=1/0,Et=null,Bo=!1,ku=null,cn=null,Zs=!1,nn=null,Vo=0,Mi=0,Iu=null,po=-1,mo=0;function Te(){return z&6?ie():po!==-1?po:po=ie()}function dn(t){return t.mode&1?z&2&&_e!==0?_e&-_e:yw.transition!==null?(mo===0&&(mo=gm()),mo):(t=B,t!==0||(t=window.event,t=t===void 0?16:Sm(t.type)),t):1}function dt(t,e,n,r){if(50<Mi)throw Mi=0,Iu=null,Error(S(185));ws(t,n,r),(!(z&2)||t!==ge)&&(t===ge&&(!(z&2)&&(Nl|=n),ce===4&&Jt(t,_e)),Ue(t,r),n===1&&z===0&&!(e.mode&1)&&(Vr=ie()+500,Sl&&Nn()))}function Ue(t,e){var n=t.callbackNode;y0(t,e);var r=Io(t,t===ge?_e:0);if(r===0)n!==null&&hh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&hh(n),e===1)t.tag===0?vw(sf.bind(null,t)):Bm(sf.bind(null,t)),fw(function(){!(z&6)&&Nn()}),n=null;else{switch(vm(r)){case 1:n=hc;break;case 4:n=pm;break;case 16:n=ko;break;case 536870912:n=mm;break;default:n=ko}n=zg(n,Og.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Og(t,e){if(po=-1,mo=0,z&6)throw Error(S(327));var n=t.callbackNode;if(Pr()&&t.callbackNode!==n)return null;var r=Io(t,t===ge?_e:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=$o(t,r);else{e=r;var i=z;z|=2;var s=Dg();(ge!==t||_e!==e)&&(Et=null,Vr=ie()+500,Kn(t,e));do try{Fw();break}catch(l){Lg(t,l)}while(!0);kc(),Wo.current=s,z=i,le!==null?e=0:(ge=null,_e=0,e=ce)}if(e!==0){if(e===2&&(i=Za(t),i!==0&&(r=i,e=Nu(t,i))),e===1)throw n=ss,Kn(t,0),Jt(t,r),Ue(t,ie()),n;if(e===6)Jt(t,r);else{if(i=t.current.alternate,!(r&30)&&!Mw(i)&&(e=$o(t,r),e===2&&(s=Za(t),s!==0&&(r=s,e=Nu(t,s))),e===1))throw n=ss,Kn(t,0),Jt(t,r),Ue(t,ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:jn(t,Oe,Et);break;case 3:if(Jt(t,r),(r&130023424)===r&&(e=zc+500-ie(),10<e)){if(Io(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Te(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=lu(jn.bind(null,t,Oe,Et),e);break}jn(t,Oe,Et);break;case 4:if(Jt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ct(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Dw(r/1960))-r,10<r){t.timeoutHandle=lu(jn.bind(null,t,Oe,Et),r);break}jn(t,Oe,Et);break;case 5:jn(t,Oe,Et);break;default:throw Error(S(329))}}}return Ue(t,ie()),t.callbackNode===n?Og.bind(null,t):null}function Nu(t,e){var n=Di;return t.current.memoizedState.isDehydrated&&(Kn(t,e).flags|=256),t=$o(t,e),t!==2&&(e=Oe,Oe=n,e!==null&&Tu(e)),t}function Tu(t){Oe===null?Oe=t:Oe.push.apply(Oe,t)}function Mw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!pt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jt(t,e){for(e&=~Uc,e&=~Nl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ct(e),r=1<<n;t[n]=-1,e&=~r}}function sf(t){if(z&6)throw Error(S(327));Pr();var e=Io(t,0);if(!(e&1))return Ue(t,ie()),null;var n=$o(t,e);if(t.tag!==0&&n===2){var r=Za(t);r!==0&&(e=r,n=Nu(t,r))}if(n===1)throw n=ss,Kn(t,0),Jt(t,e),Ue(t,ie()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jn(t,Oe,Et),Ue(t,ie()),null}function Wc(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(Vr=ie()+500,Sl&&Nn())}}function Zn(t){nn!==null&&nn.tag===0&&!(z&6)&&Pr();var e=z;z|=1;var n=Je.transition,r=B;try{if(Je.transition=null,B=1,t)return t()}finally{B=r,Je.transition=n,z=e,!(z&6)&&Nn()}}function Bc(){Be=Sr.current,Y(Sr)}function Kn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,hw(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(Ec(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bo();break;case 3:Wr(),Y(je),Y(ke),bc();break;case 5:Pc(r);break;case 4:Wr();break;case 13:Y(X);break;case 19:Y(X);break;case 10:Ic(r.type._context);break;case 22:case 23:Bc()}n=n.return}if(ge=t,le=t=hn(t.current,null),_e=Be=e,ce=0,ss=null,Uc=Nl=Xn=0,Oe=Di=null,Bn!==null){for(e=0;e<Bn.length;e++)if(n=Bn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Bn=null}return t}function Lg(t,e){do{var n=le;try{if(kc(),co.current=zo,Uo){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Uo=!1}if(Jn=0,fe=ae=Z=null,Oi=!1,ns=0,Fc.current=null,n===null||n.return===null){ce=1,ss=e,le=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=_e,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,h=l,c=h.tag;if(!(h.mode&1)&&(c===0||c===11||c===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Hh(o);if(g!==null){g.flags&=-257,Gh(g,o,l,s,e),g.mode&1&&$h(s,u,e),e=g,a=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(a),e.updateQueue=_}else v.add(a);break e}else{if(!(e&1)){$h(s,u,e),Vc();break e}a=Error(S(426))}}else if(J&&l.mode&1){var x=Hh(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Gh(x,o,l,s,e),Sc(Br(a,l));break e}}s=a=Br(a,l),ce!==4&&(ce=2),Di===null?Di=[s]:Di.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=vg(s,a,e);Fh(s,m);break e;case 1:l=a;var p=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(cn===null||!cn.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=yg(s,l,e);Fh(s,E);break e}}s=s.return}while(s!==null)}jg(n)}catch(k){e=k,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function Dg(){var t=Wo.current;return Wo.current=zo,t===null?zo:t}function Vc(){(ce===0||ce===3||ce===2)&&(ce=4),ge===null||!(Xn&268435455)&&!(Nl&268435455)||Jt(ge,_e)}function $o(t,e){var n=z;z|=2;var r=Dg();(ge!==t||_e!==e)&&(Et=null,Kn(t,e));do try{jw();break}catch(i){Lg(t,i)}while(!0);if(kc(),z=n,Wo.current=r,le!==null)throw Error(S(261));return ge=null,_e=0,ce}function jw(){for(;le!==null;)Mg(le)}function Fw(){for(;le!==null&&!u0();)Mg(le)}function Mg(t){var e=Ug(t.alternate,t,Be);t.memoizedProps=t.pendingProps,e===null?jg(t):le=e,Fc.current=null}function jg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bw(n,e),n!==null){n.flags&=32767,le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ce=6,le=null;return}}else if(n=Pw(n,e,Be),n!==null){le=n;return}if(e=e.sibling,e!==null){le=e;return}le=e=t}while(e!==null);ce===0&&(ce=5)}function jn(t,e,n){var r=B,i=Je.transition;try{Je.transition=null,B=1,Uw(t,e,n,r)}finally{Je.transition=i,B=r}return null}function Uw(t,e,n,r){do Pr();while(nn!==null);if(z&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_0(t,s),t===ge&&(le=ge=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zs||(Zs=!0,zg(ko,function(){return Pr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Je.transition,Je.transition=null;var o=B;B=1;var l=z;z|=4,Fc.current=null,Ow(t,n),bg(n,t),sw(su),No=!!iu,su=iu=null,t.current=n,Lw(n),c0(),z=l,B=o,Je.transition=s}else t.current=n;if(Zs&&(Zs=!1,nn=t,Vo=i),s=t.pendingLanes,s===0&&(cn=null),f0(n.stateNode),Ue(t,ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Bo)throw Bo=!1,t=ku,ku=null,t;return Vo&1&&t.tag!==0&&Pr(),s=t.pendingLanes,s&1?t===Iu?Mi++:(Mi=0,Iu=t):Mi=0,Nn(),null}function Pr(){if(nn!==null){var t=vm(Vo),e=Je.transition,n=B;try{if(Je.transition=null,B=16>t?16:t,nn===null)var r=!1;else{if(t=nn,nn=null,Vo=0,z&6)throw Error(S(331));var i=z;for(z|=4,I=t.current;I!==null;){var s=I,o=s.child;if(I.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(I=u;I!==null;){var h=I;switch(h.tag){case 0:case 11:case 15:Li(8,h,s)}var c=h.child;if(c!==null)c.return=h,I=c;else for(;I!==null;){h=I;var f=h.sibling,g=h.return;if(Tg(h),h===u){I=null;break}if(f!==null){f.return=g,I=f;break}I=g}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var x=_.sibling;_.sibling=null,_=x}while(_!==null)}}I=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,I=o;else e:for(;I!==null;){if(s=I,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Li(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,I=m;break e}I=s.return}}var p=t.current;for(I=p;I!==null;){o=I;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,I=y;else e:for(o=p;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Il(9,l)}}catch(k){te(l,l.return,k)}if(l===o){I=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,I=E;break e}I=l.return}}if(z=i,Nn(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(yl,t)}catch{}r=!0}return r}finally{B=n,Je.transition=e}}return!1}function of(t,e,n){e=Br(n,e),e=vg(t,e,1),t=un(t,e,1),e=Te(),t!==null&&(ws(t,1,e),Ue(t,e))}function te(t,e,n){if(t.tag===3)of(t,t,n);else for(;e!==null;){if(e.tag===3){of(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){t=Br(n,t),t=yg(e,t,1),e=un(e,t,1),t=Te(),e!==null&&(ws(e,1,t),Ue(e,t));break}}e=e.return}}function zw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Te(),t.pingedLanes|=t.suspendedLanes&n,ge===t&&(_e&n)===n&&(ce===4||ce===3&&(_e&130023424)===_e&&500>ie()-zc?Kn(t,0):Uc|=n),Ue(t,e)}function Fg(t,e){e===0&&(t.mode&1?(e=Vs,Vs<<=1,!(Vs&130023424)&&(Vs=4194304)):e=1);var n=Te();t=Mt(t,e),t!==null&&(ws(t,e,n),Ue(t,n))}function Ww(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Fg(t,n)}function Bw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),Fg(t,n)}var Ug;Ug=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||je.current)Le=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Le=!1,Rw(t,e,n);Le=!!(t.flags&131072)}else Le=!1,J&&e.flags&1048576&&Vm(e,Lo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;fo(t,e),t=e.pendingProps;var i=Fr(e,ke.current);Rr(e,n),i=Oc(null,e,r,t,i,n);var s=Lc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Fe(r)?(s=!0,Ao(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Tc(e),i.updater=kl,e.stateNode=i,i._reactInternals=e,pu(e,r,t,n),e=vu(null,e,r,!0,s,n)):(e.tag=0,J&&s&&xc(e),Ie(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(fo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=$w(r),t=rt(r,t),i){case 0:e=gu(null,e,r,t,n);break e;case 1:e=Qh(null,e,r,t,n);break e;case 11:e=Kh(null,e,r,t,n);break e;case 14:e=qh(null,e,r,rt(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rt(r,i),gu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rt(r,i),Qh(t,e,r,i,n);case 3:e:{if(Eg(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Qm(t,e),jo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Br(Error(S(423)),e),e=Yh(t,e,r,n,i);break e}else if(r!==i){i=Br(Error(S(424)),e),e=Yh(t,e,r,n,i);break e}else for(Ve=an(e.stateNode.containerInfo.firstChild),$e=e,J=!0,st=null,n=Km(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ur(),r===i){e=jt(t,e,n);break e}Ie(t,e,r,n)}e=e.child}return e;case 5:return Ym(e),t===null&&du(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ou(r,i)?o=null:s!==null&&ou(r,s)&&(e.flags|=32),xg(t,e),Ie(t,e,o,n),e.child;case 6:return t===null&&du(e),null;case 13:return Sg(t,e,n);case 4:return Rc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=zr(e,null,r,n):Ie(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rt(r,i),Kh(t,e,r,i,n);case 7:return Ie(t,e,e.pendingProps,n),e.child;case 8:return Ie(t,e,e.pendingProps.children,n),e.child;case 12:return Ie(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,G(Do,r._currentValue),r._currentValue=o,s!==null)if(pt(s.value,o)){if(s.children===i.children&&!je.current){e=jt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=bt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),hu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),hu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ie(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Rr(e,n),i=Xe(i),r=r(i),e.flags|=1,Ie(t,e,r,n),e.child;case 14:return r=e.type,i=rt(r,e.pendingProps),i=rt(r.type,i),qh(t,e,r,i,n);case 15:return _g(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rt(r,i),fo(t,e),e.tag=1,Fe(r)?(t=!0,Ao(e)):t=!1,Rr(e,n),gg(e,r,i),pu(e,r,i,n),vu(null,e,r,!0,t,n);case 19:return Cg(t,e,n);case 22:return wg(t,e,n)}throw Error(S(156,e.tag))};function zg(t,e){return fm(t,e)}function Vw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(t,e,n,r){return new Vw(t,e,n,r)}function $c(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $w(t){if(typeof t=="function")return $c(t)?1:0;if(t!=null){if(t=t.$$typeof,t===uc)return 11;if(t===cc)return 14}return 2}function hn(t,e){var n=t.alternate;return n===null?(n=Ye(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function go(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")$c(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fr:return qn(n.children,i,s,e);case ac:o=8,i|=8;break;case Fa:return t=Ye(12,n,e,i|2),t.elementType=Fa,t.lanes=s,t;case Ua:return t=Ye(13,n,e,i),t.elementType=Ua,t.lanes=s,t;case za:return t=Ye(19,n,e,i),t.elementType=za,t.lanes=s,t;case Yp:return Tl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qp:o=10;break e;case Qp:o=9;break e;case uc:o=11;break e;case cc:o=14;break e;case qt:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=Ye(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function qn(t,e,n,r){return t=Ye(7,t,r,e),t.lanes=n,t}function Tl(t,e,n,r){return t=Ye(22,t,r,e),t.elementType=Yp,t.lanes=n,t.stateNode={isHidden:!1},t}function wa(t,e,n){return t=Ye(6,t,null,e),t.lanes=n,t}function xa(t,e,n){return e=Ye(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Hw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ta(0),this.expirationTimes=ta(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ta(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hc(t,e,n,r,i,s,o,l,a){return t=new Hw(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ye(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tc(s),t}function Gw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Wg(t){if(!t)return _n;t=t._reactInternals;e:{if(ar(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Fe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(Fe(n))return Wm(t,n,e)}return e}function Bg(t,e,n,r,i,s,o,l,a){return t=Hc(n,r,!0,t,i,s,o,l,a),t.context=Wg(null),n=t.current,r=Te(),i=dn(n),s=bt(r,i),s.callback=e??null,un(n,s,i),t.current.lanes=i,ws(t,i,r),Ue(t,r),t}function Rl(t,e,n,r){var i=e.current,s=Te(),o=dn(i);return n=Wg(n),e.context===null?e.context=n:e.pendingContext=n,e=bt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=un(i,e,o),t!==null&&(dt(t,i,o,s),uo(t,i,o)),o}function Ho(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gc(t,e){lf(t,e),(t=t.alternate)&&lf(t,e)}function Kw(){return null}var Vg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kc(t){this._internalRoot=t}Pl.prototype.render=Kc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));Rl(t,e,null,null)};Pl.prototype.unmount=Kc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zn(function(){Rl(null,t,null,null)}),e[Dt]=null}};function Pl(t){this._internalRoot=t}Pl.prototype.unstable_scheduleHydration=function(t){if(t){var e=wm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yt.length&&e!==0&&e<Yt[n].priority;n++);Yt.splice(n,0,t),n===0&&Em(t)}};function qc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function af(){}function qw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ho(o);s.call(u)}}var o=Bg(e,r,t,0,null,!1,!1,"",af);return t._reactRootContainer=o,t[Dt]=o.current,Ji(t.nodeType===8?t.parentNode:t),Zn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ho(a);l.call(u)}}var a=Hc(t,0,!1,null,null,!1,!1,"",af);return t._reactRootContainer=a,t[Dt]=a.current,Ji(t.nodeType===8?t.parentNode:t),Zn(function(){Rl(e,a,n,r)}),a}function Al(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Ho(o);l.call(a)}}Rl(e,o,t,i)}else o=qw(n,e,t,i,r);return Ho(o)}ym=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ci(e.pendingLanes);n!==0&&(fc(e,n|1),Ue(e,ie()),!(z&6)&&(Vr=ie()+500,Nn()))}break;case 13:Zn(function(){var r=Mt(t,1);if(r!==null){var i=Te();dt(r,t,1,i)}}),Gc(t,1)}};pc=function(t){if(t.tag===13){var e=Mt(t,134217728);if(e!==null){var n=Te();dt(e,t,134217728,n)}Gc(t,134217728)}};_m=function(t){if(t.tag===13){var e=dn(t),n=Mt(t,e);if(n!==null){var r=Te();dt(n,t,e,r)}Gc(t,e)}};wm=function(){return B};xm=function(t,e){var n=B;try{return B=t,e()}finally{B=n}};Ya=function(t,e,n){switch(e){case"input":if(Va(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=El(r);if(!i)throw Error(S(90));Xp(r),Va(r,i)}}}break;case"textarea":em(t,n);break;case"select":e=n.value,e!=null&&kr(t,!!n.multiple,e,!1)}};lm=Wc;am=Zn;var Qw={usingClientEntryPoint:!1,Events:[Es,vr,El,sm,om,Wc]},gi={findFiberByHostInstance:Wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yw={bundleType:gi.bundleType,version:gi.version,rendererPackageName:gi.rendererPackageName,rendererConfig:gi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=dm(t),t===null?null:t.stateNode},findFiberByHostInstance:gi.findFiberByHostInstance||Kw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eo.isDisabled&&eo.supportsFiber)try{yl=eo.inject(Yw),_t=eo}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qw;Ge.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qc(e))throw Error(S(200));return Gw(t,e,null,n)};Ge.createRoot=function(t,e){if(!qc(t))throw Error(S(299));var n=!1,r="",i=Vg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Hc(t,1,!1,null,null,n,!1,r,i),t[Dt]=e.current,Ji(t.nodeType===8?t.parentNode:t),new Kc(e)};Ge.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=dm(e),t=t===null?null:t.stateNode,t};Ge.flushSync=function(t){return Zn(t)};Ge.hydrate=function(t,e,n){if(!bl(e))throw Error(S(200));return Al(null,t,e,!0,n)};Ge.hydrateRoot=function(t,e,n){if(!qc(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Vg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Bg(e,null,t,1,n??null,i,!1,s,o),t[Dt]=e.current,Ji(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Pl(e)};Ge.render=function(t,e,n){if(!bl(e))throw Error(S(200));return Al(null,t,e,!1,n)};Ge.unmountComponentAtNode=function(t){if(!bl(t))throw Error(S(40));return t._reactRootContainer?(Zn(function(){Al(null,null,t,!1,function(){t._reactRootContainer=null,t[Dt]=null})}),!0):!1};Ge.unstable_batchedUpdates=Wc;Ge.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bl(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return Al(t,e,n,!1,r)};Ge.version="18.3.1-next-f1338f8080-20240426";function $g(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($g)}catch(t){console.error(t)}}$g(),$p.exports=Ge;var Jw=$p.exports,Hg,uf=Jw;Hg=uf.createRoot,uf.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function os(){return os=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},os.apply(this,arguments)}var rn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(rn||(rn={}));const cf="popstate";function Xw(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Ru("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Go(i)}return ex(e,n,null,t)}function se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Gg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Zw(){return Math.random().toString(36).substr(2,8)}function df(t,e){return{usr:t.state,key:t.key,idx:e}}function Ru(t,e,n,r){return n===void 0&&(n=null),os({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Xr(e):e,{state:n,key:e&&e.key||r||Zw()})}function Go(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Xr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ex(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=rn.Pop,a=null,u=h();u==null&&(u=0,o.replaceState(os({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function c(){l=rn.Pop;let x=h(),m=x==null?null:x-u;u=x,a&&a({action:l,location:_.location,delta:m})}function f(x,m){l=rn.Push;let p=Ru(_.location,x,m);u=h()+1;let y=df(p,u),E=_.createHref(p);try{o.pushState(y,"",E)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(E)}s&&a&&a({action:l,location:_.location,delta:1})}function g(x,m){l=rn.Replace;let p=Ru(_.location,x,m);u=h();let y=df(p,u),E=_.createHref(p);o.replaceState(y,"",E),s&&a&&a({action:l,location:_.location,delta:0})}function v(x){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof x=="string"?x:Go(x);return p=p.replace(/ $/,"%20"),se(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let _={get action(){return l},get location(){return t(i,o)},listen(x){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(cf,c),a=x,()=>{i.removeEventListener(cf,c),a=null}},createHref(x){return e(i,x)},createURL:v,encodeLocation(x){let m=v(x);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:g,go(x){return o.go(x)}};return _}var hf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(hf||(hf={}));function tx(t,e,n){return n===void 0&&(n="/"),nx(t,e,n,!1)}function nx(t,e,n,r){let i=typeof e=="string"?Xr(e):e,s=Qc(i.pathname||"/",n);if(s==null)return null;let o=Kg(t);rx(o);let l=null;for(let a=0;l==null&&a<o.length;++a){let u=px(s);l=hx(o[a],u,r)}return l}function Kg(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(se(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=fn([r,a.relativePath]),h=n.concat(a);s.children&&s.children.length>0&&(se(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Kg(s.children,e,h,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:cx(u,s.index),routesMeta:h})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of qg(s.path))i(s,o,a)}),e}function qg(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=qg(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function rx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:dx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ix=/^:[\w-]+$/,sx=3,ox=2,lx=1,ax=10,ux=-2,ff=t=>t==="*";function cx(t,e){let n=t.split("/"),r=n.length;return n.some(ff)&&(r+=ux),e&&(r+=ox),n.filter(i=>!ff(i)).reduce((i,s)=>i+(ix.test(s)?sx:s===""?lx:ax),r)}function dx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function hx(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let a=r[l],u=l===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",c=pf({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},h),f=a.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=pf({path:a.relativePath,caseSensitive:a.caseSensitive,end:!1},h)),!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:fn([s,c.pathname]),pathnameBase:yx(fn([s,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(s=fn([s,c.pathnameBase]))}return o}function pf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=fx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,h,c)=>{let{paramName:f,isOptional:g}=h;if(f==="*"){let _=l[c]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const v=l[c];return g&&!v?u[f]=void 0:u[f]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function fx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Gg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function px(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Gg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Qc(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function mx(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Xr(t):t;return{pathname:n?n.startsWith("/")?n:gx(n,e):e,search:_x(r),hash:wx(i)}}function gx(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ea(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vx(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Yc(t,e){let n=vx(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Jc(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Xr(t):(i=os({},t),se(!i.pathname||!i.pathname.includes("?"),Ea("?","pathname","search",i)),se(!i.pathname||!i.pathname.includes("#"),Ea("#","pathname","hash",i)),se(!i.search||!i.search.includes("#"),Ea("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),c-=1;i.pathname=f.join("/")}l=c>=0?e[c]:"/"}let a=mx(i,l),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||h)&&(a.pathname+="/"),a}const fn=t=>t.join("/").replace(/\/\/+/g,"/"),yx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),_x=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,wx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function xx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Qg=["post","put","patch","delete"];new Set(Qg);const Ex=["get",...Qg];new Set(Ex);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ls(){return ls=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ls.apply(this,arguments)}const Xc=w.createContext(null),Sx=w.createContext(null),Tn=w.createContext(null),Ol=w.createContext(null),Vt=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Yg=w.createContext(null);function Cx(t,e){let{relative:n}=e===void 0?{}:e;Zr()||se(!1);let{basename:r,navigator:i}=w.useContext(Tn),{hash:s,pathname:o,search:l}=Zg(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:fn([r,o])),i.createHref({pathname:a,search:l,hash:s})}function Zr(){return w.useContext(Ol)!=null}function Cs(){return Zr()||se(!1),w.useContext(Ol).location}function Jg(t){w.useContext(Tn).static||w.useLayoutEffect(t)}function Zc(){let{isDataRoute:t}=w.useContext(Vt);return t?jx():kx()}function kx(){Zr()||se(!1);let t=w.useContext(Xc),{basename:e,future:n,navigator:r}=w.useContext(Tn),{matches:i}=w.useContext(Vt),{pathname:s}=Cs(),o=JSON.stringify(Yc(i,n.v7_relativeSplatPath)),l=w.useRef(!1);return Jg(()=>{l.current=!0}),w.useCallback(function(u,h){if(h===void 0&&(h={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let c=Jc(u,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:fn([e,c.pathname])),(h.replace?r.replace:r.push)(c,h.state,h)},[e,r,o,s,t])}function Xg(){let{matches:t}=w.useContext(Vt),e=t[t.length-1];return e?e.params:{}}function Zg(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=w.useContext(Tn),{matches:i}=w.useContext(Vt),{pathname:s}=Cs(),o=JSON.stringify(Yc(i,r.v7_relativeSplatPath));return w.useMemo(()=>Jc(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Ix(t,e){return Nx(t,e)}function Nx(t,e,n,r){Zr()||se(!1);let{navigator:i}=w.useContext(Tn),{matches:s}=w.useContext(Vt),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=Cs(),h;if(e){var c;let x=typeof e=="string"?Xr(e):e;a==="/"||(c=x.pathname)!=null&&c.startsWith(a)||se(!1),h=x}else h=u;let f=h.pathname||"/",g=f;if(a!=="/"){let x=a.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(x.length).join("/")}let v=tx(t,{pathname:g}),_=Ax(v&&v.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:fn([a,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?a:fn([a,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),s,n,r);return e&&_?w.createElement(Ol.Provider,{value:{location:ls({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:rn.Pop}},_):_}function Tx(){let t=Mx(),e=xx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),n?w.createElement("pre",{style:i},n):null,null)}const Rx=w.createElement(Tx,null);class Px extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?w.createElement(Vt.Provider,{value:this.props.routeContext},w.createElement(Yg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function bx(t){let{routeContext:e,match:n,children:r}=t,i=w.useContext(Xc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Vt.Provider,{value:e},r)}function Ax(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let h=o.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id])!==void 0);h>=0||se(!1),o=o.slice(0,Math.min(o.length,h+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let c=o[h];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=h),c.route.id){let{loaderData:f,errors:g}=n,v=c.route.loader&&f[c.route.id]===void 0&&(!g||g[c.route.id]===void 0);if(c.route.lazy||v){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((h,c,f)=>{let g,v=!1,_=null,x=null;n&&(g=l&&c.route.id?l[c.route.id]:void 0,_=c.route.errorElement||Rx,a&&(u<0&&f===0?(v=!0,x=null):u===f&&(v=!0,x=c.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,f+1)),p=()=>{let y;return g?y=_:v?y=x:c.route.Component?y=w.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=h,w.createElement(bx,{match:c,routeContext:{outlet:h,matches:m,isDataRoute:n!=null},children:y})};return n&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?w.createElement(Px,{location:n.location,revalidation:n.revalidation,component:_,error:g,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var ev=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ev||{}),Ko=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ko||{});function Ox(t){let e=w.useContext(Xc);return e||se(!1),e}function Lx(t){let e=w.useContext(Sx);return e||se(!1),e}function Dx(t){let e=w.useContext(Vt);return e||se(!1),e}function tv(t){let e=Dx(),n=e.matches[e.matches.length-1];return n.route.id||se(!1),n.route.id}function Mx(){var t;let e=w.useContext(Yg),n=Lx(Ko.UseRouteError),r=tv(Ko.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function jx(){let{router:t}=Ox(ev.UseNavigateStable),e=tv(Ko.UseNavigateStable),n=w.useRef(!1);return Jg(()=>{n.current=!0}),w.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ls({fromRouteId:e},s)))},[t,e])}function Fx(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function wn(t){let{to:e,replace:n,state:r,relative:i}=t;Zr()||se(!1);let{future:s,static:o}=w.useContext(Tn),{matches:l}=w.useContext(Vt),{pathname:a}=Cs(),u=Zc(),h=Jc(e,Yc(l,s.v7_relativeSplatPath),a,i==="path"),c=JSON.stringify(h);return w.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function Fn(t){se(!1)}function Ux(t){let{basename:e="/",children:n=null,location:r,navigationType:i=rn.Pop,navigator:s,static:o=!1,future:l}=t;Zr()&&se(!1);let a=e.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:a,navigator:s,static:o,future:ls({v7_relativeSplatPath:!1},l)}),[a,l,s,o]);typeof r=="string"&&(r=Xr(r));let{pathname:h="/",search:c="",hash:f="",state:g=null,key:v="default"}=r,_=w.useMemo(()=>{let x=Qc(h,a);return x==null?null:{location:{pathname:x,search:c,hash:f,state:g,key:v},navigationType:i}},[a,h,c,f,g,v,i]);return _==null?null:w.createElement(Tn.Provider,{value:u},w.createElement(Ol.Provider,{children:n,value:_}))}function zx(t){let{children:e,location:n}=t;return Ix(Pu(e),n)}new Promise(()=>{});function Pu(t,e){e===void 0&&(e=[]);let n=[];return w.Children.forEach(t,(r,i)=>{if(!w.isValidElement(r))return;let s=[...e,i];if(r.type===w.Fragment){n.push.apply(n,Pu(r.props.children,s));return}r.type!==Fn&&se(!1),!r.props.index||!r.props.children||se(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Pu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bu(){return bu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bu.apply(this,arguments)}function Wx(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Bx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Vx(t,e){return t.button===0&&(!e||e==="_self")&&!Bx(t)}const $x=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Hx="6";try{window.__reactRouterVersion=Hx}catch{}const Gx="startTransition",mf=z_[Gx];function Kx(t){let{basename:e,children:n,future:r,window:i}=t,s=w.useRef();s.current==null&&(s.current=Xw({window:i,v5Compat:!0}));let o=s.current,[l,a]=w.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},h=w.useCallback(c=>{u&&mf?mf(()=>a(c)):a(c)},[a,u]);return w.useLayoutEffect(()=>o.listen(h),[o,h]),w.useEffect(()=>Fx(r),[r]),w.createElement(Ux,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const qx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ne=w.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:h,viewTransition:c}=e,f=Wx(e,$x),{basename:g}=w.useContext(Tn),v,_=!1;if(typeof u=="string"&&Qx.test(u)&&(v=u,qx))try{let y=new URL(window.location.href),E=u.startsWith("//")?new URL(y.protocol+u):new URL(u),k=Qc(E.pathname,g);E.origin===y.origin&&k!=null?u=k+E.search+E.hash:_=!0}catch{}let x=Cx(u,{relative:i}),m=Yx(u,{replace:o,state:l,target:a,preventScrollReset:h,relative:i,viewTransition:c});function p(y){r&&r(y),y.defaultPrevented||m(y)}return w.createElement("a",bu({},f,{href:v||x,onClick:_||s?r:p,ref:n,target:a}))});var gf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(gf||(gf={}));var vf;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(vf||(vf={}));function Yx(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,a=Zc(),u=Cs(),h=Zg(t,{relative:o});return w.useCallback(c=>{if(Vx(c,n)){c.preventDefault();let f=r!==void 0?r:Go(u)===Go(h);a(t,{replace:f,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[u,a,h,r,i,n,t,s,o,l])}var yf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(t,e){if(!t)throw ei(e)},ei=function(t){return new Error("Firebase Database ("+nv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Jx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ed={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,h=s>>2,c=(s&3)<<4|l>>4;let f=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(f=64)),r.push(n[h],n[c],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Jx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new Xx;const f=s<<2|l>>4;if(r.push(f),u!==64){const g=l<<4&240|u>>2;if(r.push(g),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Xx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iv=function(t){const e=rv(t);return ed.encodeByteArray(e,!0)},qo=function(t){return iv(t).replace(/\./g,"")},Qo=function(t){try{return ed.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zx(t){return sv(void 0,t)}function sv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!eE(n)||(t[n]=sv(t[n],e[n]));return t}function eE(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=()=>tE().__FIREBASE_DEFAULTS__,rE=()=>{if(typeof process>"u"||typeof yf>"u")return;const t=yf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qo(t[1]);return e&&JSON.parse(e)},td=()=>{try{return nE()||rE()||iE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ov=t=>{var e,n;return(n=(e=td())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},sE=t=>{const e=ov(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},lv=()=>{var t;return(t=td())===null||t===void 0?void 0:t.config},av=t=>{var e;return(e=td())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[qo(JSON.stringify(n)),qo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function lE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function aE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function uv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uE(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cv(){return nv.NODE_ADMIN===!0}function cE(){try{return typeof indexedDB=="object"}catch{return!1}}function dE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE="FirebaseError";class Rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hE,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ks.prototype.create)}}class ks{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?fE(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Rn(i,l,r)}}function fE(t,e){return t.replace(pE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const pE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t){return JSON.parse(t)}function me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=as(Qo(s[0])||""),n=as(Qo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},mE=function(t){const e=dv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},gE=function(t){const e=dv(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function $r(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Au(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Jo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(_f(s)&&_f(o)){if(!Jo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _f(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ii(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ni(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const f=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,h;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),h=1518500249):(u=s^o^l,h=1859775393):c<60?(u=s&o|l&(s|o),h=2400959708):(u=s^o^l,h=3395469782);const f=(i<<5|i>>>27)+u+a+h+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function yE(t,e){const n=new _E(t,e);return n.subscribe.bind(n)}class _E{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Sa),i.error===void 0&&(i.error=Sa),i.complete===void 0&&(i.complete=Sa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sa(){}function rd(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,C(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Dl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t){return t&&t._delegate?t._delegate:t}class er{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ll;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CE(e))try{this.getOrInitializeService({instanceIdentifier:Un})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Un){return this.instances.has(e)}getOptions(e=Un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:SE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Un){return this.component?this.component.multipleInstances?e:Un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function SE(t){return t===Un?void 0:t}function CE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new EE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const IE={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},NE=V.INFO,TE={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},RE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=TE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class id{constructor(e){this.name=e,this._logLevel=NE,this._logHandler=RE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?IE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const PE=(t,e)=>e.some(n=>t instanceof n);let wf,xf;function bE(){return wf||(wf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AE(){return xf||(xf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hv=new WeakMap,Ou=new WeakMap,fv=new WeakMap,Ca=new WeakMap,sd=new WeakMap;function OE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hv.set(n,t)}).catch(()=>{}),sd.set(e,t),e}function LE(t){if(Ou.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ou.set(t,e)}let Lu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ou.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DE(t){Lu=t(Lu)}function ME(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ka(this),e,...n);return fv.set(r,e.sort?e.sort():[e]),pn(r)}:AE().includes(t)?function(...e){return t.apply(ka(this),e),pn(hv.get(this))}:function(...e){return pn(t.apply(ka(this),e))}}function jE(t){return typeof t=="function"?ME(t):(t instanceof IDBTransaction&&LE(t),PE(t,bE())?new Proxy(t,Lu):t)}function pn(t){if(t instanceof IDBRequest)return OE(t);if(Ca.has(t))return Ca.get(t);const e=jE(t);return e!==t&&(Ca.set(t,e),sd.set(e,t)),e}const ka=t=>sd.get(t);function FE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=pn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(pn(o.result),a.oldVersion,a.newVersion,pn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const UE=["get","getKey","getAll","getAllKeys","count"],zE=["put","add","delete","clear"],Ia=new Map;function Ef(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ia.get(e))return Ia.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=zE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||UE.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Ia.set(e,s),s}DE(t=>({...t,get:(e,n,r)=>Ef(e,n)||t.get(e,n,r),has:(e,n)=>!!Ef(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(BE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function BE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Du="@firebase/app",Sf="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new id("@firebase/app"),VE="@firebase/app-compat",$E="@firebase/analytics-compat",HE="@firebase/analytics",GE="@firebase/app-check-compat",KE="@firebase/app-check",qE="@firebase/auth",QE="@firebase/auth-compat",YE="@firebase/database",JE="@firebase/data-connect",XE="@firebase/database-compat",ZE="@firebase/functions",e1="@firebase/functions-compat",t1="@firebase/installations",n1="@firebase/installations-compat",r1="@firebase/messaging",i1="@firebase/messaging-compat",s1="@firebase/performance",o1="@firebase/performance-compat",l1="@firebase/remote-config",a1="@firebase/remote-config-compat",u1="@firebase/storage",c1="@firebase/storage-compat",d1="@firebase/firestore",h1="@firebase/vertexai-preview",f1="@firebase/firestore-compat",p1="firebase",m1="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="[DEFAULT]",g1={[Du]:"fire-core",[VE]:"fire-core-compat",[HE]:"fire-analytics",[$E]:"fire-analytics-compat",[KE]:"fire-app-check",[GE]:"fire-app-check-compat",[qE]:"fire-auth",[QE]:"fire-auth-compat",[YE]:"fire-rtdb",[JE]:"fire-data-connect",[XE]:"fire-rtdb-compat",[ZE]:"fire-fn",[e1]:"fire-fn-compat",[t1]:"fire-iid",[n1]:"fire-iid-compat",[r1]:"fire-fcm",[i1]:"fire-fcm-compat",[s1]:"fire-perf",[o1]:"fire-perf-compat",[l1]:"fire-rc",[a1]:"fire-rc-compat",[u1]:"fire-gcs",[c1]:"fire-gcs-compat",[d1]:"fire-fst",[f1]:"fire-fst-compat",[h1]:"fire-vertex","fire-js":"fire-js",[p1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new Map,v1=new Map,ju=new Map;function Cf(t,e){try{t.container.addComponent(e)}catch(n){Ft.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hr(t){const e=t.name;if(ju.has(e))return Ft.debug(`There were multiple attempts to register component ${e}.`),!1;ju.set(e,t);for(const n of Xo.values())Cf(n,t);for(const n of v1.values())Cf(n,t);return!0}function od(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function lt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mn=new ks("app","Firebase",y1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=m1;function pv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Mu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mn.create("bad-app-name",{appName:String(i)});if(n||(n=lv()),!n)throw mn.create("no-options");const s=Xo.get(i);if(s){if(Jo(n,s.options)&&Jo(r,s.config))return s;throw mn.create("duplicate-app",{appName:i})}const o=new kE(i);for(const a of ju.values())o.addComponent(a);const l=new _1(n,r,o);return Xo.set(i,l),l}function mv(t=Mu){const e=Xo.get(t);if(!e&&t===Mu&&lv())return pv();if(!e)throw mn.create("no-app",{appName:t});return e}function gn(t,e,n){var r;let i=(r=g1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ft.warn(l.join(" "));return}Hr(new er(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1="firebase-heartbeat-database",x1=1,us="firebase-heartbeat-store";let Na=null;function gv(){return Na||(Na=FE(w1,x1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(us)}catch(n){console.warn(n)}}}}).catch(t=>{throw mn.create("idb-open",{originalErrorMessage:t.message})})),Na}async function E1(t){try{const n=(await gv()).transaction(us),r=await n.objectStore(us).get(vv(t));return await n.done,r}catch(e){if(e instanceof Rn)Ft.warn(e.message);else{const n=mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ft.warn(n.message)}}}async function kf(t,e){try{const r=(await gv()).transaction(us,"readwrite");await r.objectStore(us).put(e,vv(t)),await r.done}catch(n){if(n instanceof Rn)Ft.warn(n.message);else{const r=mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ft.warn(r.message)}}}function vv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1=1024,C1=30*24*60*60*1e3;class k1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new N1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=If();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=C1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ft.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=If(),{heartbeatsToSend:r,unsentEntries:i}=I1(this._heartbeatsCache.heartbeats),s=qo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ft.warn(n),""}}}function If(){return new Date().toISOString().substring(0,10)}function I1(t,e=S1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Nf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Nf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class N1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cE()?dE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await E1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Nf(t){return qo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(t){Hr(new er("platform-logger",e=>new WE(e),"PRIVATE")),Hr(new er("heartbeat",e=>new k1(e),"PRIVATE")),gn(Du,Sf,t),gn(Du,Sf,"esm2017"),gn("fire-js","")}T1("");function ld(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function yv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const R1=yv,_v=new ks("auth","Firebase",yv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new id("@firebase/auth");function P1(t,...e){Zo.logLevel<=V.WARN&&Zo.warn(`Auth (${ni}): ${t}`,...e)}function vo(t,...e){Zo.logLevel<=V.ERROR&&Zo.error(`Auth (${ni}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,...e){throw ud(t,...e)}function ht(t,...e){return ud(t,...e)}function ad(t,e,n){const r=Object.assign(Object.assign({},R1()),{[e]:n});return new ks("auth","Firebase",r).create(e,{appName:t.name})}function At(t){return ad(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function b1(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&et(t,"argument-error"),ad(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ud(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _v.create(t,...e)}function b(t,e,...n){if(!t)throw ud(e,...n)}function Nt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vo(e),new Error(e)}function Ut(t,e){t||Nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function A1(){return Tf()==="http:"||Tf()==="https:"}function Tf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(A1()||aE()||"connection"in navigator)?navigator.onLine:!0}function L1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ut(n>e,"Short delay should be less than long delay!"),this.isMobile=nd()||uv()}get(){return O1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(t,e){Ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1=new Is(3e4,6e4);function Pn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function bn(t,e,n,r,i={}){return xv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ti(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},s);return lE()||(u.referrerPolicy="no-referrer"),wv.fetch()(Ev(t,t.config.apiHost,n,l),u)})}async function xv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},D1),e);try{const i=new F1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw to(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw to(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw to(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw to(t,"user-disabled",o);const h=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ad(t,h,u);et(t,h)}}catch(i){if(i instanceof Rn)throw i;et(t,"network-request-failed",{message:String(i)})}}async function Ns(t,e,n,r,i={}){const s=await bn(t,e,n,r,i);return"mfaPendingCredential"in s&&et(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ev(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?cd(t.config,i):`${t.config.apiScheme}://${i}`}function j1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class F1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ht(this.auth,"network-request-failed")),M1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function to(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ht(t,e,r);return i.customData._tokenResponse=n,i}function Rf(t){return t!==void 0&&t.enterprise!==void 0}class U1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return j1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function z1(t,e){return bn(t,"GET","/v2/recaptchaConfig",Pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W1(t,e){return bn(t,"POST","/v1/accounts:delete",e)}async function Sv(t,e){return bn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function B1(t,e=!1){const n=Ae(t),r=await n.getIdToken(e),i=dd(r);b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ji(Ta(i.auth_time)),issuedAtTime:ji(Ta(i.iat)),expirationTime:ji(Ta(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ta(t){return Number(t)*1e3}function dd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qo(n);return i?JSON.parse(i):(vo("Failed to decode base64 JWT payload"),null)}catch(i){return vo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Pf(t){const e=dd(t);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rn&&V1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function V1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ji(this.lastLoginAt),this.creationTime=ji(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function el(t){var e;const n=t.auth,r=await t.getIdToken(),i=await cs(t,Sv(n,{idToken:r}));b(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Cv(s.providerUserInfo):[],l=G1(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),h=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Uu(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,c)}async function H1(t){const e=Ae(t);await el(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function G1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Cv(t){return t.map(e=>{var{providerId:n}=e,r=ld(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K1(t,e){const n=await xv(t,{},async()=>{const r=ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ev(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",wv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function q1(t,e){return bn(t,"POST","/v2/accounts:revokeToken",Pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){b(e.length!==0,"internal-error");const n=Pf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await K1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new br;return r&&(b(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(b(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(b(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new br,this.toJSON())}_performRefresh(){return Nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,e){b(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ld(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Uu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await cs(this,this.stsTokenManager.getToken(this.auth,e));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return B1(this,e)}reload(){return H1(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await el(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(lt(this.auth.app))return Promise.reject(At(this.auth));const e=await this.getIdToken();return await cs(this,W1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,h;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(l=n.tenantId)!==null&&l!==void 0?l:void 0,x=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:y,emailVerified:E,isAnonymous:k,providerData:T,stsTokenManager:R}=n;b(y&&R,e,"internal-error");const P=br.fromJSON(this.name,R);b(typeof y=="string",e,"internal-error"),Kt(c,e.name),Kt(f,e.name),b(typeof E=="boolean",e,"internal-error"),b(typeof k=="boolean",e,"internal-error"),Kt(g,e.name),Kt(v,e.name),Kt(_,e.name),Kt(x,e.name),Kt(m,e.name),Kt(p,e.name);const K=new Tt({uid:y,auth:e,email:f,emailVerified:E,displayName:c,isAnonymous:k,photoURL:v,phoneNumber:g,tenantId:_,stsTokenManager:P,createdAt:m,lastLoginAt:p});return T&&Array.isArray(T)&&(K.providerData=T.map(j=>Object.assign({},j))),x&&(K._redirectEventId=x),K}static async _fromIdTokenResponse(e,n,r=!1){const i=new br;i.updateFromServerResponse(n);const s=new Tt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await el(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];b(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Cv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new br;l.updateFromIdToken(r);const a=new Tt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Uu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=new Map;function Rt(t){Ut(t instanceof Function,"Expected a class definition");let e=bf.get(t);return e?(Ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}kv.type="NONE";const Af=kv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t,e,n){return`firebase:${t}:${e}:${n}`}class Ar{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=yo(this.userKey,i.apiKey,s),this.fullPersistenceKey=yo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ar(Rt(Af),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Rt(Af);const o=yo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){const c=Tt._fromJSON(e,h);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Ar(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ar(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Iv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bv(e))return"Blackberry";if(Av(e))return"Webos";if(Nv(e))return"Safari";if((e.includes("chrome/")||Tv(e))&&!e.includes("edge/"))return"Chrome";if(Pv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Iv(t=Re()){return/firefox\//i.test(t)}function Nv(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tv(t=Re()){return/crios\//i.test(t)}function Rv(t=Re()){return/iemobile/i.test(t)}function Pv(t=Re()){return/android/i.test(t)}function bv(t=Re()){return/blackberry/i.test(t)}function Av(t=Re()){return/webos/i.test(t)}function hd(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Q1(t=Re()){var e;return hd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Y1(){return uE()&&document.documentMode===10}function Ov(t=Re()){return hd(t)||Pv(t)||Av(t)||bv(t)||/windows phone/i.test(t)||Rv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t,e=[]){let n;switch(t){case"Browser":n=Of(Re());break;case"Worker":n=`${Of(Re())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ni}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X1(t,e={}){return bn(t,"GET","/v2/passwordPolicy",Pn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=6;class eS{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Z1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lf(this),this.idTokenSubscription=new Lf(this),this.beforeStateQueue=new J1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_v,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ar.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Sv(this,{idToken:e}),r=await Tt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(lt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await el(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=L1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(lt(this.app))return Promise.reject(At(this));const n=e?Ae(e):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return lt(this.app)?Promise.reject(At(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return lt(this.app)?Promise.reject(At(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await X1(this),n=new eS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ks("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await q1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rt(e)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await Ar.create(this,[Rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&P1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function An(t){return Ae(t)}class Lf{constructor(e){this.auth=e,this.observer=null,this.addObserver=yE(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ml={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nS(t){Ml=t}function Dv(t){return Ml.loadJS(t)}function rS(){return Ml.recaptchaEnterpriseScript}function iS(){return Ml.gapiScript}function sS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const oS="recaptcha-enterprise",lS="NO_RECAPTCHA";class aS{constructor(e){this.type=oS,this.auth=An(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{z1(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new U1(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;Rf(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(lS)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Rf(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=rS();a.length!==0&&(a+=l),Dv(a).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Df(t,e,n,r=!1){const i=new aS(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function zu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Df(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Df(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(t,e){const n=od(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Jo(s,e??{}))return i;et(i,"already-initialized")}return n.initialize({options:e})}function cS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function dS(t,e,n){const r=An(t);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Mv(e),{host:o,port:l}=hS(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),fS()}function Mv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hS(t){const e=Mv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Mf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Mf(o)}}}function Mf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nt("not implemented")}_getIdTokenResponse(e){return Nt("not implemented")}_linkToIdToken(e,n){return Nt("not implemented")}_getReauthenticationResolver(e){return Nt("not implemented")}}async function pS(t,e){return bn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mS(t,e){return Ns(t,"POST","/v1/accounts:signInWithPassword",Pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gS(t,e){return Ns(t,"POST","/v1/accounts:signInWithEmailLink",Pn(t,e))}async function vS(t,e){return Ns(t,"POST","/v1/accounts:signInWithEmailLink",Pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends fd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ds(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ds(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zu(e,n,"signInWithPassword",mS);case"emailLink":return gS(e,{email:this._email,oobCode:this._password});default:et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zu(e,r,"signUpPassword",pS);case"emailLink":return vS(e,{idToken:n,email:this._email,oobCode:this._password});default:et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(t,e){return Ns(t,"POST","/v1/accounts:signInWithIdp",Pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS="http://localhost";class tr extends fd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ld(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new tr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Or(e,n)}buildRequest(){const e={requestUri:yS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ti(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wS(t){const e=Ii(Ni(t)).link,n=e?Ii(Ni(e)).deep_link_id:null,r=Ii(Ni(t)).deep_link_id;return(r?Ii(Ni(r)).link:null)||r||n||e||t}class pd{constructor(e){var n,r,i,s,o,l;const a=Ii(Ni(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,h=(r=a.oobCode)!==null&&r!==void 0?r:null,c=_S((i=a.mode)!==null&&i!==void 0?i:null);b(u&&h&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=h,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=wS(e);try{return new pd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.providerId=ri.PROVIDER_ID}static credential(e,n){return ds._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=pd.parseLink(n);return b(r,"argument-error"),ds._fromEmailAndCode(e,r.code,r.tenantId)}}ri.PROVIDER_ID="password";ri.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ri.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends md{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Ts{constructor(){super("facebook.com")}static credential(e){return tr._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends Ts{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return tr._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ct.credential(n,r)}catch{return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com";Ct.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Ts{constructor(){super("github.com")}static credential(e){return tr._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zt.credential(e.oauthAccessToken)}catch{return null}}}Zt.GITHUB_SIGN_IN_METHOD="github.com";Zt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Ts{constructor(){super("twitter.com")}static credential(e,n){return tr._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return en.credential(n,r)}catch{return null}}}en.TWITTER_SIGN_IN_METHOD="twitter.com";en.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xS(t,e){return Ns(t,"POST","/v1/accounts:signUp",Pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Tt._fromIdTokenResponse(e,r,i),o=jf(r);return new nr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=jf(r);return new nr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function jf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends Rn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,tl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new tl(e,n,r,i)}}function jv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?tl._fromErrorAndOperation(t,s,e,r):s})}async function ES(t,e,n=!1){const r=await cs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return nr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SS(t,e,n=!1){const{auth:r}=t;if(lt(r.app))return Promise.reject(At(r));const i="reauthenticate";try{const s=await cs(t,jv(r,i,e,t),n);b(s.idToken,r,"internal-error");const o=dd(s.idToken);b(o,r,"internal-error");const{sub:l}=o;return b(t.uid===l,r,"user-mismatch"),nr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&et(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fv(t,e,n=!1){if(lt(t.app))return Promise.reject(At(t));const r="signIn",i=await jv(t,r,e),s=await nr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function CS(t,e){return Fv(An(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uv(t){const e=An(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function kS(t,e,n){if(lt(t.app))return Promise.reject(At(t));const r=An(t),o=await zu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xS).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Uv(t),a}),l=await nr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function IS(t,e,n){return lt(t.app)?Promise.reject(At(t)):CS(Ae(t),ri.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Uv(t),r})}function NS(t,e,n,r){return Ae(t).onIdTokenChanged(e,n,r)}function TS(t,e,n){return Ae(t).beforeAuthStateChanged(e,n)}function RS(t,e,n,r){return Ae(t).onAuthStateChanged(e,n,r)}function PS(t){return Ae(t).signOut()}const nl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nl,"1"),this.storage.removeItem(nl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=1e3,AS=10;class Wv extends zv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ov(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Y1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,AS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},bS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wv.type="LOCAL";const OS=Wv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv extends zv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Bv.type="SESSION";const Vv=Bv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new jl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await LS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=gd("",20);i.port1.start();const h=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const f=c;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(f.data.response);break;default:clearTimeout(h),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return window}function MS(t){xt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(){return typeof xt().WorkerGlobalScope<"u"&&typeof xt().importScripts=="function"}async function jS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function US(){return $v()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv="firebaseLocalStorageDb",zS=1,rl="firebaseLocalStorage",Gv="fbase_key";class Rs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fl(t,e){return t.transaction([rl],e?"readwrite":"readonly").objectStore(rl)}function WS(){const t=indexedDB.deleteDatabase(Hv);return new Rs(t).toPromise()}function Wu(){const t=indexedDB.open(Hv,zS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(rl,{keyPath:Gv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(rl)?e(r):(r.close(),await WS(),e(await Wu()))})})}async function Ff(t,e,n){const r=Fl(t,!0).put({[Gv]:e,value:n});return new Rs(r).toPromise()}async function BS(t,e){const n=Fl(t,!1).get(e),r=await new Rs(n).toPromise();return r===void 0?null:r.value}function Uf(t,e){const n=Fl(t,!0).delete(e);return new Rs(n).toPromise()}const VS=800,$S=3;class Kv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>$S)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $v()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jl._getInstance(US()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jS(),!this.activeServiceWorker)return;this.sender=new DS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wu();return await Ff(e,nl,"1"),await Uf(e,nl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ff(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>BS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Fl(i,!1).getAll();return new Rs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kv.type="LOCAL";const HS=Kv;new Is(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(t,e){return e?Rt(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd extends fd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Or(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Or(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Or(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function GS(t){return Fv(t.auth,new vd(t),t.bypassAuthState)}function KS(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),SS(n,new vd(t),t.bypassAuthState)}async function qS(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),ES(n,new vd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GS;case"linkViaPopup":case"linkViaRedirect":return qS;case"reauthViaPopup":case"reauthViaRedirect":return KS;default:et(this.auth,"internal-error")}}resolve(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=new Is(2e3,1e4);async function YS(t,e,n){if(lt(t.app))return Promise.reject(ht(t,"operation-not-supported-in-this-environment"));const r=An(t);b1(t,e,md);const i=qv(r,n);return new $n(r,"signInViaPopup",e,i).executeNotNull()}class $n extends Qv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,$n.currentPopupAction&&$n.currentPopupAction.cancel(),$n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){Ut(this.filter.length===1,"Popup operations only handle one event");const e=gd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,QS.get())};e()}}$n.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS="pendingRedirect",_o=new Map;class XS extends Qv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_o.get(this.auth._key());if(!e){try{const r=await ZS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_o.set(this.auth._key(),e)}return this.bypassAuthState||_o.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZS(t,e){const n=nC(e),r=tC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function eC(t,e){_o.set(t._key(),e)}function tC(t){return Rt(t._redirectPersistence)}function nC(t){return yo(JS,t.config.apiKey,t.name)}async function rC(t,e,n=!1){if(lt(t.app))return Promise.reject(At(t));const r=An(t),i=qv(r,e),o=await new XS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=10*60*1e3;class sC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Yv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ht(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iC&&this.cachedEventUids.clear(),this.cachedEventUids.has(zf(e))}saveEventToCache(e){this.cachedEventUids.add(zf(e)),this.lastProcessedEventTime=Date.now()}}function zf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Yv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lC(t,e={}){return bn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uC=/^https?/;async function cC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lC(t);for(const n of e)try{if(dC(n))return}catch{}et(t,"unauthorized-domain")}function dC(t){const e=Fu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!uC.test(n))return!1;if(aC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=new Is(3e4,6e4);function Wf(){const t=xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fC(t){return new Promise((e,n)=>{var r,i,s;function o(){Wf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wf(),n(ht(t,"network-request-failed"))},timeout:hC.get()})}if(!((i=(r=xt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=xt().gapi)===null||s===void 0)&&s.load)o();else{const l=sS("iframefcb");return xt()[l]=()=>{gapi.load?o():n(ht(t,"network-request-failed"))},Dv(`${iS()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw wo=null,e})}let wo=null;function pC(t){return wo=wo||fC(t),wo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=new Is(5e3,15e3),gC="__/auth/iframe",vC="emulator/auth/iframe",yC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_C=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wC(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?cd(e,vC):`https://${t.config.authDomain}/${gC}`,r={apiKey:e.apiKey,appName:t.name,v:ni},i=_C.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ti(r).slice(1)}`}async function xC(t){const e=await pC(t),n=xt().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:wC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ht(t,"network-request-failed"),l=xt().setTimeout(()=>{s(o)},mC.get());function a(){xt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SC=500,CC=600,kC="_blank",IC="http://localhost";class Bf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NC(t,e,n,r=SC,i=CC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},EC),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Re().toLowerCase();n&&(l=Tv(u)?kC:n),Iv(u)&&(e=e||IC,a.scrollbars="yes");const h=Object.entries(a).reduce((f,[g,v])=>`${f}${g}=${v},`,"");if(Q1(u)&&l!=="_self")return TC(e||"",l),new Bf(null);const c=window.open(e||"",l,h);b(c,t,"popup-blocked");try{c.focus()}catch{}return new Bf(c)}function TC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC="__/auth/handler",PC="emulator/auth/handler",bC=encodeURIComponent("fac");async function Vf(t,e,n,r,i,s){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ni,eventId:i};if(e instanceof md){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Au(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,c]of Object.entries({}))o[h]=c}if(e instanceof Ts){const h=e.getScopes().filter(c=>c!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const a=await t._getAppCheckToken(),u=a?`#${bC}=${encodeURIComponent(a)}`:"";return`${AC(t)}?${ti(l).slice(1)}${u}`}function AC({config:t}){return t.emulator?cd(t,PC):`https://${t.authDomain}/${RC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="webStorageSupport";class OC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vv,this._completeRedirectFn=rC,this._overrideRedirectResult=eC}async _openPopup(e,n,r,i){var s;Ut((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Vf(e,n,r,Fu(),i);return NC(e,o,gd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Vf(e,n,r,Fu(),i);return MS(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ut(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xC(e),r=new sC(e);return n.register("authEvent",i=>(b(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ra,{type:Ra},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ra];o!==void 0&&n(!!o),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ov()||Nv()||hd()}}const LC=OC;var $f="@firebase/auth",Hf="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jC(t){Hr(new er("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;b(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lv(t)},u=new tS(r,i,s,a);return cS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Hr(new er("auth-internal",e=>{const n=An(e.getProvider("auth").getImmediate());return(r=>new DC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn($f,Hf,MC(t)),gn($f,Hf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=5*60,UC=av("authIdTokenMaxAge")||FC;let Gf=null;const zC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>UC)return;const i=n==null?void 0:n.token;Gf!==i&&(Gf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function WC(t=mv()){const e=od(t,"auth");if(e.isInitialized())return e.getImmediate();const n=uS(t,{popupRedirectResolver:LC,persistence:[HS,OS,Vv]}),r=av("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=zC(s.toString());TS(n,o,()=>o(n.currentUser)),NS(n,l=>o(l))}}const i=ov("auth");return i&&dS(n,`http://${i}`),n}function BC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}nS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ht("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",BC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jC("Browser");var VC="firebase",$C="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gn(VC,$C,"app");var Kf={};const qf="@firebase/database",Qf="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jv="";function HC(t){Jv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:as(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return $t(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new GC(e)}}catch{}return new KC},Hn=Xv("localStorage"),qC=Xv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new id("@firebase/database"),QC=function(){let t=1;return function(){return t++}}(),Zv=function(t){const e=xE(t),n=new vE;n.update(e);const r=n.digest();return ed.encodeByteArray(r)},Ps=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ps.apply(null,r):typeof r=="object"?e+=me(r):e+=r,e+=" "}return e};let Fi=null,Yf=!0;const YC=function(t,e){C(!e,"Can't turn on custom loggers persistently."),Lr.logLevel=V.VERBOSE,Fi=Lr.log.bind(Lr)},Ce=function(...t){if(Yf===!0&&(Yf=!1,Fi===null&&qC.get("logging_enabled")===!0&&YC()),Fi){const e=Ps.apply(null,t);Fi(e)}},bs=function(t){return function(...e){Ce(t,...e)}},Bu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ps(...t);Lr.error(e)},zt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ps(...t)}`;throw Lr.error(e),new Error(e)},ze=function(...t){const e="FIREBASE WARNING: "+Ps(...t);Lr.warn(e)},JC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ey=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},XC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Gr="[MIN_NAME]",rr="[MAX_NAME]",ii=function(t,e){if(t===e)return 0;if(t===Gr||e===rr)return-1;if(e===Gr||t===rr)return 1;{const n=Jf(t),r=Jf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},ZC=function(t,e){return t===e?0:t<e?-1:1},vi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+me(e))},yd=function(t){if(typeof t!="object"||t===null)return me(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=me(e[r]),n+=":",n+=yd(t[e[r]]);return n+="}",n},ty=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function We(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ny=function(t){C(!ey(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const h=u.join("");let c="";for(a=0;a<64;a+=8){let f=parseInt(h.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},ek=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},tk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function nk(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const rk=new RegExp("^-?(0*)\\d{1,10}$"),ik=-2147483648,sk=2147483647,Jf=function(t){if(rk.test(t)){const e=Number(t);if(e>=ik&&e<=sk)return e}return null},si=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ze("Exception was thrown by user callback.",n),e},Math.floor(0))}},ok=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ui=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ze(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ze(e)}}class xo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}xo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="5",ry="v",iy="s",sy="r",oy="f",ly=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ay="ls",uy="p",Vu="ac",cy="websocket",dy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Hn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Hn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function uk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function fy(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let r;if(e===cy)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===dy)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);uk(t)&&(n.ns=t.namespace);const i=[];return We(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(){this.counters_={}}incrementCounter(e,n=1){$t(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Zx(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa={},ba={};function wd(t){const e=t.toString();return Pa[e]||(Pa[e]=new ck),Pa[e]}function dk(t,e){const n=t.toString();return ba[n]||(ba[n]=e()),ba[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&si(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="start",fk="close",pk="pLPCommand",mk="pRTLPCB",py="id",my="pw",gy="ser",gk="cb",vk="seg",yk="ts",_k="d",wk="dframe",vy=1870,yy=30,xk=vy-yy,Ek=25e3,Sk=3e4;class Cr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bs(e),this.stats_=wd(n),this.urlFn=a=>(this.appCheckToken&&(a[Vu]=this.appCheckToken),fy(n,dy,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new hk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Sk)),XC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new xd((...s)=>{const[o,l,a,u,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Xf)this.id=l,this.password=a;else if(o===fk)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Xf]="t",r[gy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[gk]=this.scriptTagHolder.uniqueCallbackIdentifier),r[ry]=_d,this.transportSessionId&&(r[iy]=this.transportSessionId),this.lastSessionId&&(r[ay]=this.lastSessionId),this.applicationId&&(r[uy]=this.applicationId),this.appCheckToken&&(r[Vu]=this.appCheckToken),typeof location<"u"&&location.hostname&&ly.test(location.hostname)&&(r[sy]=oy);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Cr.forceAllow_=!0}static forceDisallow(){Cr.forceDisallow_=!0}static isAvailable(){return Cr.forceAllow_?!0:!Cr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ek()&&!tk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=iv(n),i=ty(r,xk);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[wk]="t",r[py]=e,r[my]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class xd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=QC(),window[pk+this.uniqueCallbackIdentifier]=e,window[mk+this.uniqueCallbackIdentifier]=n,this.myIFrame=xd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ce("frame writing exception"),l.stack&&Ce(l.stack),Ce(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[py]=this.myID,e[my]=this.myPW,e[gy]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+yy+r.length<=vy;){const o=this.pendingSegs.shift();r=r+"&"+vk+i+"="+o.seg+"&"+yk+i+"="+o.ts+"&"+_k+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Ek)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck=16384,kk=45e3;let il=null;typeof MozWebSocket<"u"?il=MozWebSocket:typeof WebSocket<"u"&&(il=WebSocket);class ot{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bs(this.connId),this.stats_=wd(n),this.connURL=ot.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[ry]=_d,typeof location<"u"&&location.hostname&&ly.test(location.hostname)&&(o[sy]=oy),n&&(o[iy]=n),r&&(o[ay]=r),i&&(o[Vu]=i),s&&(o[uy]=s),fy(e,cy,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Hn.set("previous_websocket_failure",!0);try{let r;cv(),this.mySock=new il(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ot.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&il!==null&&!ot.forceDisallow_}static previouslyFailed(){return Hn.isInMemoryStorage||Hn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Hn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=as(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ty(n,Ck);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(kk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ot.responsesRequiredToBeHealthy=2;ot.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Cr,ot]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ot&&ot.isAvailable();let r=n&&!ot.previouslyFailed();if(e.webSocketOnly&&(n||ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ot];else{const i=this.transports_=[];for(const s of hs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);hs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}hs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik=6e4,Nk=5e3,Tk=10*1024,Rk=100*1024,Aa="t",Zf="d",Pk="s",ep="r",bk="e",tp="o",np="a",rp="n",ip="p",Ak="h";class Ok{constructor(e,n,r,i,s,o,l,a,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bs("c:"+this.id+":"),this.transportManager_=new hs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ui(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Rk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Tk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Aa in e){const n=e[Aa];n===np?this.upgradeIfSecondaryHealthy_():n===ep?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===tp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=vi("t",e),r=vi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ip,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:np,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:rp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=vi("t",e),r=vi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=vi(Aa,e);if(Zf in e){const r=e[Zf];if(n===Ak){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===rp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Pk?this.onConnectionShutdown_(r):n===ep?this.onReset_(r):n===bk?Bu("Server Error: "+r):n===tp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Bu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),_d!==r&&ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ui(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ik))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ui(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Nk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ip,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Hn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends wy{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!nd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new sl}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=32,op=768;class ${constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function W(){return new $("")}function D(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function xn(t){return t.pieces_.length-t.pieceNum_}function H(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new $(t.pieces_,e)}function xy(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Lk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ey(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Sy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new $(e,0)}function ue(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof $)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new $(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function De(t,e){const n=D(t),r=D(e);if(n===null)return e;if(n===r)return De(H(t),H(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ed(t,e){if(xn(t)!==xn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function at(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(xn(t)>xn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Dk{constructor(e,n){this.errorPrefix_=n,this.parts_=Ey(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Dl(this.parts_[r]);Cy(this)}}function Mk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Dl(e),Cy(t)}function jk(t){const e=t.parts_.pop();t.byteLength_-=Dl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Cy(t){if(t.byteLength_>op)throw new Error(t.errorPrefix_+"has a key path longer than "+op+" bytes ("+t.byteLength_+").");if(t.parts_.length>sp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+sp+") or object contains a cycle "+zn(t))}function zn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd extends wy{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Sd}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=1e3,Fk=60*5*1e3,lp=30*1e3,Uk=1.3,zk=3e4,Wk="server_kill",ap=3;class Ot extends _y{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Ot.nextPersistentConnectionId_++,this.log_=bs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=yi,this.maxReconnectDelay_=Fk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!cv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Sd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&sl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(me(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ll,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Ot.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&$t(e,"w")){const r=$r(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||gE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=lp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=mE(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+me(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Bu("Unrecognized action received from server: "+me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=yi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=yi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>zk&&(this.reconnectDelay_=yi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Uk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ot.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){C(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,l=new Ok(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{ze(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Wk)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&ze(c),a())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Au(this.interruptReasons_)&&(this.reconnectDelay_=yi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>yd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new $(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ap&&(this.reconnectDelay_=lp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ap&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Jv.replace(/\./g,"-")]=1,nd()?e["framework.cordova"]=1:uv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=sl.getInstance().currentlyOnline();return Au(this.interruptReasons_)&&e}}Ot.nextPersistentConnectionId_=0;Ot.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new M(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new M(Gr,e),i=new M(Gr,n);return this.compare(r,i)!==0}minPost(){return M.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no;class ky extends Ul{static get __EMPTY_NODE(){return no}static set __EMPTY_NODE(e){no=e}compare(e,n){return ii(e.name,n.name)}isDefinedOn(e){throw ei("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return M.MIN}maxPost(){return new M(rr,no)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new M(e,no)}toString(){return".key"}}const Dr=new ky;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class pe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??pe.RED,this.left=i??Me.EMPTY_NODE,this.right=s??Me.EMPTY_NODE}copy(e,n,r,i,s){return new pe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Me.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Me.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}pe.RED=!0;pe.BLACK=!1;class Bk{copy(e,n,r,i,s){return this}insert(e,n,r){return new pe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Me{constructor(e,n=Me.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Me(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,pe.BLACK,null,null))}remove(e){return new Me(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,pe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ro(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ro(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ro(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ro(this.root_,null,this.comparator_,!0,e)}}Me.EMPTY_NODE=new Bk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(t,e){return ii(t.name,e.name)}function Cd(t,e){return ii(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $u;function $k(t){$u=t}const Iy=function(t){return typeof t=="number"?"number:"+ny(t):"string:"+t},Ny=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&$t(e,".sv"),"Priority must be a string or number.")}else C(t===$u||t.isEmpty(),"priority of unexpected type.");C(t===$u||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let up;class he{constructor(e,n=he.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ny(this.priorityNode_)}static set __childrenNodeConstructor(e){up=e}static get __childrenNodeConstructor(){return up}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new he(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:D(e)===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:he.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=D(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(C(r!==".priority"||xn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,he.__childrenNodeConstructor.EMPTY_NODE.updateChild(H(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Iy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ny(this.value_):e+=this.value_,this.lazyHash_=Zv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===he.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof he.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=he.VALUE_TYPE_ORDER.indexOf(n),s=he.VALUE_TYPE_ORDER.indexOf(r);return C(i>=0,"Unknown leaf type: "+n),C(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}he.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ty,Ry;function Hk(t){Ty=t}function Gk(t){Ry=t}class Kk extends Ul{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ii(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return M.MIN}maxPost(){return new M(rr,new he("[PRIORITY-POST]",Ry))}makePost(e,n){const r=Ty(e);return new M(n,new he("[PRIORITY-POST]",r))}toString(){return".priority"}}const ne=new Kk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=Math.log(2);class Qk{constructor(e){const n=s=>parseInt(Math.log(s)/qk,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ol=function(t,e,n,r){t.sort(e);const i=function(a,u){const h=u-a;let c,f;if(h===0)return null;if(h===1)return c=t[a],f=n?n(c):c,new pe(f,c.node,pe.BLACK,null,null);{const g=parseInt(h/2,10)+a,v=i(a,g),_=i(g+1,u);return c=t[g],f=n?n(c):c,new pe(f,c.node,pe.BLACK,v,_)}},s=function(a){let u=null,h=null,c=t.length;const f=function(v,_){const x=c-v,m=c;c-=v;const p=i(x+1,m),y=t[x],E=n?n(y):y;g(new pe(E,y.node,_,null,p))},g=function(v){u?(u.left=v,u=v):(h=v,u=v)};for(let v=0;v<a.count;++v){const _=a.nextBitIsOne(),x=Math.pow(2,a.count-(v+1));_?f(x,pe.BLACK):(f(x,pe.BLACK),f(x,pe.RED))}return h},o=new Qk(t.length),l=s(o);return new Me(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oa;const dr={};class Pt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(dr&&ne,"ChildrenNode.ts has not been loaded"),Oa=Oa||new Pt({".priority":dr},{".priority":ne}),Oa}get(e){const n=$r(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Me?n:null}hasIndex(e){return $t(this.indexSet_,e.toString())}addIndex(e,n){C(e!==Dr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(M.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=ol(r,e.getCompare()):l=dr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new Pt(h,u)}addToIndexes(e,n){const r=Yo(this.indexes_,(i,s)=>{const o=$r(this.indexSet_,s);if(C(o,"Missing index implementation for "+s),i===dr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(M.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),ol(l,o.getCompare())}else return dr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new M(e.name,l))),a.insert(e,e.node)}});return new Pt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Yo(this.indexes_,i=>{if(i===dr)return i;{const s=n.get(e.name);return s?i.remove(new M(e.name,s)):i}});return new Pt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i;class A{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Ny(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return _i||(_i=new A(new Me(Cd),null,Pt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_i}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?_i:n}}getChild(e){const n=D(e);return n===null?this:this.getImmediateChild(n).getChild(H(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new M(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?_i:this.priorityNode_;return new A(i,o,s)}}updateChild(e,n){const r=D(e);if(r===null)return n;{C(D(e)!==".priority"||xn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(H(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ne,(o,l)=>{n[o]=l.val(e),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Iy(this.getPriority().val())+":"),this.forEachChild(ne,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Zv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new M(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new M(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new M(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,M.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,M.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===As?-1:0}withIndex(e){if(e===Dr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Dr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ne),i=n.getIterator(ne);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Dr?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Yk extends A{constructor(){super(new Me(Cd),A.EMPTY_NODE,Pt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const As=new Yk;Object.defineProperties(M,{MIN:{value:new M(Gr,A.EMPTY_NODE)},MAX:{value:new M(rr,As)}});ky.__EMPTY_NODE=A.EMPTY_NODE;he.__childrenNodeConstructor=A;$k(As);Gk(As);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=!0;function ye(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new he(n,ye(e))}if(!(t instanceof Array)&&Jk){const n=[];let r=!1;if(We(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ye(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new M(o,a)))}}),n.length===0)return A.EMPTY_NODE;const s=ol(n,Vk,o=>o.name,Cd);if(r){const o=ol(n,ne.getCompare());return new A(s,ye(e),new Pt({".priority":o},{".priority":ne}))}else return new A(s,ye(e),Pt.Default)}else{let n=A.EMPTY_NODE;return We(t,(r,i)=>{if($t(t,r)&&r.substring(0,1)!=="."){const s=ye(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ye(e))}}Hk(ye);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk extends Ul{constructor(e){super(),this.indexPath_=e,C(!F(e)&&D(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ii(e.name,n.name):s}makePost(e,n){const r=ye(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new M(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,As);return new M(rr,e)}toString(){return Ey(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk extends Ul{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ii(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return M.MIN}maxPost(){return M.MAX}makePost(e,n){const r=ye(e);return new M(n,r)}toString(){return".value"}}const eI=new Zk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(t){return{type:"value",snapshotNode:t}}function Kr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function fs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ps(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function tI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(fs(n,l)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Kr(n,r)):o.trackChildChange(ps(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ne,(i,s)=>{n.hasChild(i)||r.trackChildChange(fs(i,s))}),n.isLeafNode()||n.forEachChild(ne,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ps(i,s,o))}else r.trackChildChange(Kr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.indexedFilter_=new kd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ms.getStartPost_(e),this.endPost_=ms.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new M(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(ne,(o,l)=>{s.matches(new M(o,l))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ms(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new M(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(f,g)=>c(g,f)}else o=this.index_.getCompare();const l=e;C(l.numChildren()===this.limit_,"");const a=new M(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,a);if(h&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(ps(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(fs(n,c));const _=l.updateImmediateChild(n,A.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Kr(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:h&&o(u,a)>=0?(s!=null&&(s.trackChildChange(fs(u.name,u.node)),s.trackChildChange(Kr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ne}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Gr}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:rr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ne}copy(){const e=new Id;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function rI(t){return t.loadsAllData()?new kd(t.getIndex()):t.hasLimit()?new nI(t):new ms(t)}function cp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ne?n="$priority":t.index_===eI?n="$value":t.index_===Dr?n="$key":(C(t.index_ instanceof Xk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=me(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=me(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+me(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=me(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function dp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ne&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends _y{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=bs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ll.getListenId_(e,r),l={};this.listens_[o]=l;const a=cp(e._queryParams);this.restRequest_(s+".json",a,(u,h)=>{let c=h;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),$r(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=ll.getListenId_(e,n);delete this.listens_[r]}get(e){const n=cp(e._queryParams),r=e._path.toString(),i=new Ll;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ti(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=as(l.responseText)}catch{ze("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&ze("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(){return{value:null,children:new Map}}function by(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=D(e);t.children.has(r)||t.children.set(r,al());const i=t.children.get(r);e=H(e),by(i,e,n)}}function Hu(t,e,n){t.value!==null?n(e,t.value):sI(t,(r,i)=>{const s=new $(e.toString()+"/"+r);Hu(i,s,n)})}function sI(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&We(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=10*1e3,lI=30*1e3,aI=5*60*1e3;class uI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new oI(e);const r=hp+(lI-hp)*Math.random();Ui(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;We(e,(i,s)=>{s>0&&$t(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ui(this.reportStats_.bind(this),Math.floor(Math.random()*2*aI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ut||(ut={}));function Ay(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Nd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Td(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ut.ACK_USER_WRITE,this.source=Ay()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new $(e));return new ul(W(),n,this.revert)}}else return C(D(this.path)===e,"operationForChild called for unrelated child."),new ul(H(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n){this.source=e,this.path=n,this.type=ut.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new gs(this.source,W()):new gs(this.source,H(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ut.OVERWRITE}operationForChild(e){return F(this.path)?new ir(this.source,W(),this.snap.getImmediateChild(e)):new ir(this.source,H(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ut.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new $(e));return n.isEmpty()?null:n.value?new ir(this.source,W(),n.value):new vs(this.source,W(),n)}else return C(D(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vs(this.source,H(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=D(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function dI(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(tI(o.childName,o.snapshotNode))}),wi(t,i,"child_removed",e,r,n),wi(t,i,"child_added",e,r,n),wi(t,i,"child_moved",s,r,n),wi(t,i,"child_changed",e,r,n),wi(t,i,"value",e,r,n),i}function wi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>fI(t,l,a)),o.forEach(l=>{const a=hI(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function hI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function fI(t,e,n){if(e.childName==null||n.childName==null)throw ei("Should only compare child_ events.");const r=new M(e.childName,e.snapshotNode),i=new M(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(t,e){return{eventCache:t,serverCache:e}}function zi(t,e,n,r){return zl(new sr(e,n,r),t.serverCache)}function Oy(t,e,n,r){return zl(t.eventCache,new sr(e,n,r))}function Gu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function or(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let La;const pI=()=>(La||(La=new Me(ZC)),La);class Q{constructor(e,n=pI()){this.value=e,this.children=n}static fromObject(e){let n=new Q(null);return We(e,(r,i)=>{n=n.set(new $(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:W(),value:this.value};if(F(e))return null;{const r=D(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(H(e),n);return s!=null?{path:ue(new $(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=D(e),r=this.children.get(n);return r!==null?r.subtree(H(e)):new Q(null)}}set(e,n){if(F(e))return new Q(n,this.children);{const r=D(e),s=(this.children.get(r)||new Q(null)).set(H(e),n),o=this.children.insert(r,s);return new Q(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const n=D(e),r=this.children.get(n);if(r){const i=r.remove(H(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Q(null):new Q(this.value,s)}else return this}}get(e){if(F(e))return this.value;{const n=D(e),r=this.children.get(n);return r?r.get(H(e)):null}}setTree(e,n){if(F(e))return n;{const r=D(e),s=(this.children.get(r)||new Q(null)).setTree(H(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Q(this.value,o)}}fold(e){return this.fold_(W(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ue(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,W(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(F(e))return null;{const s=D(e),o=this.children.get(s);return o?o.findOnPath_(H(e),ue(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,W(),n)}foreachOnPath_(e,n,r){if(F(e))return this;{this.value&&r(n,this.value);const i=D(e),s=this.children.get(i);return s?s.foreachOnPath_(H(e),ue(n,i),r):new Q(null)}}foreach(e){this.foreach_(W(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ue(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.writeTree_=e}static empty(){return new ft(new Q(null))}}function Wi(t,e,n){if(F(e))return new ft(new Q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=De(i,e);return s=s.updateChild(o,n),new ft(t.writeTree_.set(i,s))}else{const i=new Q(n),s=t.writeTree_.setTree(e,i);return new ft(s)}}}function fp(t,e,n){let r=t;return We(n,(i,s)=>{r=Wi(r,ue(e,i),s)}),r}function pp(t,e){if(F(e))return ft.empty();{const n=t.writeTree_.setTree(e,new Q(null));return new ft(n)}}function Ku(t,e){return ur(t,e)!=null}function ur(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(De(n.path,e)):null}function mp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ne,(r,i)=>{e.push(new M(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new M(r,i.value))}),e}function vn(t,e){if(F(e))return t;{const n=ur(t,e);return n!=null?new ft(new Q(n)):new ft(t.writeTree_.subtree(e))}}function qu(t){return t.writeTree_.isEmpty()}function qr(t,e){return Ly(W(),t.writeTree_,e)}function Ly(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Ly(ue(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ue(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t,e){return Fy(e,t)}function mI(t,e,n,r,i){C(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Wi(t.visibleWrites,e,n)),t.lastWriteId=r}function gI(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function vI(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&yI(l,r.path)?i=!1:at(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return _I(t),!0;if(r.snap)t.visibleWrites=pp(t.visibleWrites,r.path);else{const l=r.children;We(l,a=>{t.visibleWrites=pp(t.visibleWrites,ue(r.path,a))})}return!0}else return!1}function yI(t,e){if(t.snap)return at(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&at(ue(t.path,n),e))return!0;return!1}function _I(t){t.visibleWrites=Dy(t.allWrites,wI,W()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function wI(t){return t.visible}function Dy(t,e,n){let r=ft.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)at(n,o)?(l=De(n,o),r=Wi(r,l,s.snap)):at(o,n)&&(l=De(o,n),r=Wi(r,W(),s.snap.getChild(l)));else if(s.children){if(at(n,o))l=De(n,o),r=fp(r,l,s.children);else if(at(o,n))if(l=De(o,n),F(l))r=fp(r,W(),s.children);else{const a=$r(s.children,D(l));if(a){const u=a.getChild(H(l));r=Wi(r,W(),u)}}}else throw ei("WriteRecord should have .snap or .children")}}return r}function My(t,e,n,r,i){if(!r&&!i){const s=ur(t.visibleWrites,e);if(s!=null)return s;{const o=vn(t.visibleWrites,e);if(qu(o))return n;if(n==null&&!Ku(o,W()))return null;{const l=n||A.EMPTY_NODE;return qr(o,l)}}}else{const s=vn(t.visibleWrites,e);if(!i&&qu(s))return n;if(!i&&n==null&&!Ku(s,W()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(at(u.path,e)||at(e,u.path))},l=Dy(t.allWrites,o,e),a=n||A.EMPTY_NODE;return qr(l,a)}}}function xI(t,e,n){let r=A.EMPTY_NODE;const i=ur(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ne,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=vn(t.visibleWrites,e);return n.forEachChild(ne,(o,l)=>{const a=qr(vn(s,new $(o)),l);r=r.updateImmediateChild(o,a)}),mp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=vn(t.visibleWrites,e);return mp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function EI(t,e,n,r,i){C(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ue(e,n);if(Ku(t.visibleWrites,s))return null;{const o=vn(t.visibleWrites,s);return qu(o)?i.getChild(n):qr(o,i.getChild(n))}}function SI(t,e,n,r){const i=ue(e,n),s=ur(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=vn(t.visibleWrites,i);return qr(o,r.getNode().getImmediateChild(n))}else return null}function CI(t,e){return ur(t.visibleWrites,e)}function kI(t,e,n,r,i,s,o){let l;const a=vn(t.visibleWrites,e),u=ur(a,W());if(u!=null)l=u;else if(n!=null)l=qr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],c=o.getCompare(),f=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=f.getNext();for(;g&&h.length<i;)c(g,r)!==0&&h.push(g),g=f.getNext();return h}else return[]}function II(){return{visibleWrites:ft.empty(),allWrites:[],lastWriteId:-1}}function cl(t,e,n,r){return My(t.writeTree,t.treePath,e,n,r)}function Pd(t,e){return xI(t.writeTree,t.treePath,e)}function gp(t,e,n,r){return EI(t.writeTree,t.treePath,e,n,r)}function dl(t,e){return CI(t.writeTree,ue(t.treePath,e))}function NI(t,e,n,r,i,s){return kI(t.writeTree,t.treePath,e,n,r,i,s)}function bd(t,e,n){return SI(t.writeTree,t.treePath,e,n)}function jy(t,e){return Fy(ue(t.treePath,e),t.writeTree)}function Fy(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ps(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,fs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Kr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ps(r,e.snapshotNode,i.oldSnap));else throw ei("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Uy=new RI;class Ad{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new sr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return bd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:or(this.viewCache_),s=NI(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t){return{filter:t}}function bI(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function AI(t,e,n,r,i){const s=new TI;let o,l;if(n.type===ut.OVERWRITE){const u=n;u.source.fromUser?o=Qu(t,e,u.path,u.snap,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!F(u.path),o=hl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ut.MERGE){const u=n;u.source.fromUser?o=LI(t,e,u.path,u.children,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Yu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ut.ACK_USER_WRITE){const u=n;u.revert?o=jI(t,e,u.path,r,i,s):o=DI(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ut.LISTEN_COMPLETE)o=MI(t,e,n.path,r,s);else throw ei("Unknown operation type: "+n.type);const a=s.getChanges();return OI(e,o,a),{viewCache:o,changes:a}}function OI(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Gu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Py(Gu(e)))}}function zy(t,e,n,r,i,s){const o=e.eventCache;if(dl(r,n)!=null)return e;{let l,a;if(F(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=or(e),h=u instanceof A?u:A.EMPTY_NODE,c=Pd(r,h);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=cl(r,or(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=D(n);if(u===".priority"){C(xn(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const c=gp(r,n,h,a);c!=null?l=t.filter.updatePriority(h,c):l=o.getNode()}else{const h=H(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const f=gp(r,n,o.getNode(),a);f!=null?c=o.getNode().getImmediateChild(u).updateChild(h,f):c=o.getNode().getImmediateChild(u)}else c=bd(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,h,i,s):l=o.getNode()}}return zi(e,l,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function hl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(F(n))u=h.updateFullNode(a.getNode(),r,null);else if(h.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=h.updateFullNode(a.getNode(),g,null)}else{const g=D(n);if(!a.isCompleteForPath(n)&&xn(n)>1)return e;const v=H(n),x=a.getNode().getImmediateChild(g).updateChild(v,r);g===".priority"?u=h.updatePriority(a.getNode(),x):u=h.updateChild(a.getNode(),g,x,v,Uy,null)}const c=Oy(e,u,a.isFullyInitialized()||F(n),h.filtersNodes()),f=new Ad(i,c,s);return zy(t,c,n,i,f,l)}function Qu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const h=new Ad(i,e,s);if(F(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=zi(e,u,!0,t.filter.filtersNodes());else{const c=D(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=zi(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=H(n),g=l.getNode().getImmediateChild(c);let v;if(F(f))v=r;else{const _=h.getCompleteChild(c);_!=null?xy(f)===".priority"&&_.getChild(Sy(f)).isEmpty()?v=_:v=_.updateChild(f,r):v=A.EMPTY_NODE}if(g.equals(v))a=e;else{const _=t.filter.updateChild(l.getNode(),c,v,f,h,o);a=zi(e,_,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function vp(t,e){return t.eventCache.isCompleteForChild(e)}function LI(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const h=ue(n,a);vp(e,D(h))&&(l=Qu(t,l,h,u,i,s,o))}),r.foreach((a,u)=>{const h=ue(n,a);vp(e,D(h))||(l=Qu(t,l,h,u,i,s,o))}),l}function yp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Yu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;F(n)?u=r:u=new Q(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(h.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),v=yp(t,g,f);a=hl(t,a,new $(c),v,i,s,o,l)}}),u.children.inorderTraversal((c,f)=>{const g=!e.serverCache.isCompleteForChild(c)&&f.value===null;if(!h.hasChild(c)&&!g){const v=e.serverCache.getNode().getImmediateChild(c),_=yp(t,v,f);a=hl(t,a,new $(c),_,i,s,o,l)}}),a}function DI(t,e,n,r,i,s,o){if(dl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(F(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return hl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(F(n)){let u=new Q(null);return a.getNode().forEachChild(Dr,(h,c)=>{u=u.set(new $(h),c)}),Yu(t,e,n,u,i,s,l,o)}else return e}else{let u=new Q(null);return r.foreach((h,c)=>{const f=ue(n,h);a.isCompleteForPath(f)&&(u=u.set(h,a.getNode().getChild(f)))}),Yu(t,e,n,u,i,s,l,o)}}function MI(t,e,n,r,i){const s=e.serverCache,o=Oy(e,s.getNode(),s.isFullyInitialized()||F(n),s.isFiltered());return zy(t,o,n,r,Uy,i)}function jI(t,e,n,r,i,s){let o;if(dl(r,n)!=null)return e;{const l=new Ad(r,e,i),a=e.eventCache.getNode();let u;if(F(n)||D(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=cl(r,or(e));else{const c=e.serverCache.getNode();C(c instanceof A,"serverChildren would be complete if leaf node"),h=Pd(r,c)}h=h,u=t.filter.updateFullNode(a,h,s)}else{const h=D(n);let c=bd(r,h,e.serverCache);c==null&&e.serverCache.isCompleteForChild(h)&&(c=a.getImmediateChild(h)),c!=null?u=t.filter.updateChild(a,h,c,H(n),l,s):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(a,h,A.EMPTY_NODE,H(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=cl(r,or(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||dl(r,W())!=null,zi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new kd(r.getIndex()),s=rI(r);this.processor_=PI(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(A.EMPTY_NODE,l.getNode(),null),h=new sr(a,o.isFullyInitialized(),i.filtersNodes()),c=new sr(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=zl(c,h),this.eventGenerator_=new cI(this.query_)}get query(){return this.query_}}function UI(t){return t.viewCache_.serverCache.getNode()}function zI(t,e){const n=or(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(D(e)).isEmpty())?n.getChild(e):null}function _p(t){return t.eventRegistrations_.length===0}function WI(t,e){t.eventRegistrations_.push(e)}function wp(t,e,n){const r=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function xp(t,e,n,r){e.type===ut.MERGE&&e.source.queryId!==null&&(C(or(t.viewCache_),"We should always have a full cache before handling merges"),C(Gu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=AI(t.processor_,i,e,n,r);return bI(t.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Wy(t,s.changes,s.viewCache.eventCache.getNode(),null)}function BI(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ne,(s,o)=>{r.push(Kr(s,o))}),n.isFullyInitialized()&&r.push(Py(n.getNode())),Wy(t,r,n.getNode(),e)}function Wy(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return dI(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fl;class VI{constructor(){this.views=new Map}}function $I(t){C(!fl,"__referenceConstructor has already been defined"),fl=t}function HI(){return C(fl,"Reference.ts has not been loaded"),fl}function GI(t){return t.views.size===0}function Od(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return C(s!=null,"SyncTree gave us an op for an invalid query."),xp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(xp(o,e,n,r));return s}}function KI(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=cl(n,i?r:null),a=!1;l?a=!0:r instanceof A?(l=Pd(n,r),a=!1):(l=A.EMPTY_NODE,a=!1);const u=zl(new sr(l,a,!1),new sr(r,i,!1));return new FI(e,u)}return o}function qI(t,e,n,r,i,s){const o=KI(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),WI(o,n),BI(o,n)}function QI(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=En(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(wp(u,n,r)),_p(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(wp(a,n,r)),_p(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!En(t)&&s.push(new(HI())(e._repo,e._path)),{removed:s,events:o}}function By(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Mr(t,e){let n=null;for(const r of t.views.values())n=n||zI(r,e);return n}function Vy(t,e){if(e._queryParams.loadsAllData())return Wl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function $y(t,e){return Vy(t,e)!=null}function En(t){return Wl(t)!=null}function Wl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pl;function YI(t){C(!pl,"__referenceConstructor has already been defined"),pl=t}function JI(){return C(pl,"Reference.ts has not been loaded"),pl}let XI=1;class Ep{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=II(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Hy(t,e,n,r,i){return mI(t.pendingWriteTree_,e,n,r,i),i?Os(t,new ir(Ay(),e,n)):[]}function Gn(t,e,n=!1){const r=gI(t.pendingWriteTree_,e);if(vI(t.pendingWriteTree_,e)){let s=new Q(null);return r.snap!=null?s=s.set(W(),!0):We(r.children,o=>{s=s.set(new $(o),!0)}),Os(t,new ul(r.path,s,n))}else return[]}function Bl(t,e,n){return Os(t,new ir(Nd(),e,n))}function ZI(t,e,n){const r=Q.fromObject(n);return Os(t,new vs(Nd(),e,r))}function eN(t,e){return Os(t,new gs(Nd(),e))}function tN(t,e,n){const r=Dd(t,n);if(r){const i=Md(r),s=i.path,o=i.queryId,l=De(s,e),a=new gs(Td(o),l);return jd(t,s,a)}else return[]}function Ju(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||$y(o,e))){const a=QI(o,e,n,r);GI(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const h=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(f,g)=>En(g));if(h&&!c){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const g=iN(f);for(let v=0;v<g.length;++v){const _=g[v],x=_.query,m=qy(t,_);t.listenProvider_.startListening(Bi(x),ml(t,x),m.hashFn,m.onComplete)}}}!c&&u.length>0&&!r&&(h?t.listenProvider_.stopListening(Bi(e),null):u.forEach(f=>{const g=t.queryToTagMap.get(Vl(f));t.listenProvider_.stopListening(Bi(f),g)}))}sN(t,u)}return l}function nN(t,e,n,r){const i=Dd(t,r);if(i!=null){const s=Md(i),o=s.path,l=s.queryId,a=De(o,e),u=new ir(Td(l),a,n);return jd(t,o,u)}else return[]}function rN(t,e,n,r){const i=Dd(t,r);if(i){const s=Md(i),o=s.path,l=s.queryId,a=De(o,e),u=Q.fromObject(n),h=new vs(Td(l),a,u);return jd(t,o,h)}else return[]}function Sp(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const v=De(f,i);s=s||Mr(g,v),o=o||En(g)});let l=t.syncPointTree_.get(i);l?(o=o||En(l),s=s||Mr(l,W())):(l=new VI,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,v)=>{const _=Mr(v,W());_&&(s=s.updateImmediateChild(g,_))}));const u=$y(l,e);if(!u&&!e._queryParams.loadsAllData()){const f=Vl(e);C(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=oN();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const h=Rd(t.pendingWriteTree_,i);let c=qI(l,e,n,h,s,a);if(!u&&!o&&!r){const f=Vy(l,e);c=c.concat(lN(t,e,f))}return c}function Ld(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=De(o,e),u=Mr(l,a);if(u)return u});return My(i,e,s,n,!0)}function Os(t,e){return Gy(e,t.syncPointTree_,null,Rd(t.pendingWriteTree_,W()))}function Gy(t,e,n,r){if(F(t.path))return Ky(t,e,n,r);{const i=e.get(W());n==null&&i!=null&&(n=Mr(i,W()));let s=[];const o=D(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,h=jy(r,o);s=s.concat(Gy(l,a,u,h))}return i&&(s=s.concat(Od(i,t,r,n))),s}}function Ky(t,e,n,r){const i=e.get(W());n==null&&i!=null&&(n=Mr(i,W()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=jy(r,o),h=t.operationForChild(o);h&&(s=s.concat(Ky(h,l,a,u)))}),i&&(s=s.concat(Od(i,t,r,n))),s}function qy(t,e){const n=e.query,r=ml(t,n);return{hashFn:()=>(UI(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?tN(t,n._path,r):eN(t,n._path);{const s=nk(i,n);return Ju(t,n,null,s)}}}}function ml(t,e){const n=Vl(e);return t.queryToTagMap.get(n)}function Vl(t){return t._path.toString()+"$"+t._queryIdentifier}function Dd(t,e){return t.tagToQueryMap.get(e)}function Md(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new $(t.substr(0,e))}}function jd(t,e,n){const r=t.syncPointTree_.get(e);C(r,"Missing sync point for query tag that we're tracking");const i=Rd(t.pendingWriteTree_,e);return Od(r,n,i,null)}function iN(t){return t.fold((e,n,r)=>{if(n&&En(n))return[Wl(n)];{let i=[];return n&&(i=By(n)),We(r,(s,o)=>{i=i.concat(o)}),i}})}function Bi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(JI())(t._repo,t._path):t}function sN(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Vl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function oN(){return XI++}function lN(t,e,n){const r=e._path,i=ml(t,e),s=qy(t,n),o=t.listenProvider_.startListening(Bi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)C(!En(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,h,c)=>{if(!F(u)&&h&&En(h))return[Wl(h).query];{let f=[];return h&&(f=f.concat(By(h).map(g=>g.query))),We(c,(g,v)=>{f=f.concat(v)}),f}});for(let u=0;u<a.length;++u){const h=a[u];t.listenProvider_.stopListening(Bi(h),ml(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Fd(n)}node(){return this.node_}}class Ud{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ue(this.path_,e);return new Ud(this.syncTree_,n)}node(){return Ld(this.syncTree_,this.path_)}}const aN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Cp=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return uN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return cN(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},uN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},cN=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&C(!1,"Unexpected increment value: "+r);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},dN=function(t,e,n,r){return zd(e,new Ud(n,t),r)},Qy=function(t,e,n){return zd(t,new Fd(e),n)};function zd(t,e,n){const r=t.getPriority().val(),i=Cp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Cp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new he(l,ye(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new he(i))),o.forEachChild(ne,(l,a)=>{const u=zd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Bd(t,e){let n=e instanceof $?e:new $(e),r=t,i=D(n);for(;i!==null;){const s=$r(r.node.children,i)||{children:{},childCount:0};r=new Wd(i,r,s),n=H(n),i=D(n)}return r}function oi(t){return t.node.value}function Yy(t,e){t.node.value=e,Xu(t)}function Jy(t){return t.node.childCount>0}function hN(t){return oi(t)===void 0&&!Jy(t)}function $l(t,e){We(t.node.children,(n,r)=>{e(new Wd(n,t,r))})}function Xy(t,e,n,r){n&&!r&&e(t),$l(t,i=>{Xy(i,e,!0,r)}),n&&r&&e(t)}function fN(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ls(t){return new $(t.parent===null?t.name:Ls(t.parent)+"/"+t.name)}function Xu(t){t.parent!==null&&pN(t.parent,t.name,t)}function pN(t,e,n){const r=hN(n),i=$t(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Xu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Xu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN=/[\[\].#$\/\u0000-\u001F\u007F]/,gN=/[\[\].#$\u0000-\u001F\u007F]/,Da=10*1024*1024,Zy=function(t){return typeof t=="string"&&t.length!==0&&!mN.test(t)},e_=function(t){return typeof t=="string"&&t.length!==0&&!gN.test(t)},vN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),e_(t)},t_=function(t,e,n,r){r&&e===void 0||Vd(rd(t,"value"),e,n)},Vd=function(t,e,n){const r=n instanceof $?new Dk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+zn(r));if(typeof e=="function")throw new Error(t+"contains a function "+zn(r)+" with contents = "+e.toString());if(ey(e))throw new Error(t+"contains "+e.toString()+" "+zn(r));if(typeof e=="string"&&e.length>Da/3&&Dl(e)>Da)throw new Error(t+"contains a string greater than "+Da+" utf8 bytes "+zn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(We(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Zy(o)))throw new Error(t+" contains an invalid key ("+o+") "+zn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Mk(r,o),Vd(t,l,r),jk(r)}),i&&s)throw new Error(t+' contains ".value" child '+zn(r)+" in addition to actual children.")}},n_=function(t,e,n,r){if(!e_(n))throw new Error(rd(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},yN=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),n_(t,e,n)},$d=function(t,e){if(D(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},_N=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Zy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!vN(n))throw new Error(rd(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Hd(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Ed(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function r_(t,e,n){Hd(t,n),i_(t,r=>Ed(r,e))}function Wt(t,e,n){Hd(t,n),i_(t,r=>at(r,e)||at(e,r))}function i_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(xN(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function xN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Fi&&Ce("event: "+n.toString()),si(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN="repo_interrupt",SN=25;class CN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new wN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=al(),this.transactionQueueTree_=new Wd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function kN(t,e,n){if(t.stats_=wd(t.repoInfo_),t.forceRestClient_||ok())t.server_=new ll(t.repoInfo_,(r,i,s,o)=>{kp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ip(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{me(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ot(t.repoInfo_,e,(r,i,s,o)=>{kp(t,r,i,s,o)},r=>{Ip(t,r)},r=>{IN(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=dk(t.repoInfo_,()=>new uI(t.stats_,t.server_)),t.infoData_=new iI,t.infoSyncTree_=new Ep({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Bl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Kd(t,"connected",!1),t.serverSyncTree_=new Ep({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Wt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function s_(t){const n=t.infoData_.getNode(new $(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Gd(t){return aN({timestamp:s_(t)})}function kp(t,e,n,r,i){t.dataUpdateCount++;const s=new $(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Yo(n,u=>ye(u));o=rN(t.serverSyncTree_,s,a,i)}else{const a=ye(n);o=nN(t.serverSyncTree_,s,a,i)}else if(r){const a=Yo(n,u=>ye(u));o=ZI(t.serverSyncTree_,s,a)}else{const a=ye(n);o=Bl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Hl(t,s)),Wt(t.eventQueue_,l,o)}function Ip(t,e){Kd(t,"connected",e),e===!1&&TN(t)}function IN(t,e){We(e,(n,r)=>{Kd(t,n,r)})}function Kd(t,e,n){const r=new $("/.info/"+e),i=ye(n);t.infoData_.updateSnapshot(r,i);const s=Bl(t.infoSyncTree_,r,i);Wt(t.eventQueue_,r,s)}function o_(t){return t.nextWriteId_++}function NN(t,e,n,r,i){qd(t,"set",{path:e.toString(),value:n,priority:r});const s=Gd(t),o=ye(n,r),l=Ld(t.serverSyncTree_,e),a=Qy(o,l,s),u=o_(t),h=Hy(t.serverSyncTree_,e,a,u,!0);Hd(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const v=f==="ok";v||ze("set at "+e+" failed: "+f);const _=Gn(t.serverSyncTree_,u,!v);Wt(t.eventQueue_,e,_),bN(t,i,f,g)});const c=d_(t,e);Hl(t,c),Wt(t.eventQueue_,c,[])}function TN(t){qd(t,"onDisconnectEvents");const e=Gd(t),n=al();Hu(t.onDisconnect_,W(),(i,s)=>{const o=dN(i,s,t.serverSyncTree_,e);by(n,i,o)});let r=[];Hu(n,W(),(i,s)=>{r=r.concat(Bl(t.serverSyncTree_,i,s));const o=d_(t,i);Hl(t,o)}),t.onDisconnect_=al(),Wt(t.eventQueue_,W(),r)}function RN(t,e,n){let r;D(e._path)===".info"?r=Sp(t.infoSyncTree_,e,n):r=Sp(t.serverSyncTree_,e,n),r_(t.eventQueue_,e._path,r)}function Np(t,e,n){let r;D(e._path)===".info"?r=Ju(t.infoSyncTree_,e,n):r=Ju(t.serverSyncTree_,e,n),r_(t.eventQueue_,e._path,r)}function PN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(EN)}function qd(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function bN(t,e,n,r){e&&si(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function l_(t,e,n){return Ld(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function Qd(t,e=t.transactionQueueTree_){if(e||Gl(t,e),oi(e)){const n=u_(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&AN(t,Ls(e),n)}else Jy(e)&&$l(e,n=>{Qd(t,n)})}function AN(t,e,n){const r=n.map(u=>u.currentWriteId),i=l_(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const h=n[u];C(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const c=De(e,h.path);s=s.updateChild(c,h.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{qd(t,"transaction put response",{path:a.toString(),status:u});let h=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(Gn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Gl(t,Bd(t.transactionQueueTree_,e)),Qd(t,t.transactionQueueTree_),Wt(t.eventQueue_,e,h);for(let f=0;f<c.length;f++)si(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{ze("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Hl(t,e)}},o)}function Hl(t,e){const n=a_(t,e),r=Ls(n),i=u_(t,n);return ON(t,i,r),r}function ON(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=De(n,a.path);let h=!1,c;if(C(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,c=a.abortReason,i=i.concat(Gn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=SN)h=!0,c="maxretry",i=i.concat(Gn(t.serverSyncTree_,a.currentWriteId,!0));else{const f=l_(t,a.path,o);a.currentInputSnapshot=f;const g=e[l].update(f.val());if(g!==void 0){Vd("transaction failed: Data returned ",g,a.path);let v=ye(g);typeof g=="object"&&g!=null&&$t(g,".priority")||(v=v.updatePriority(f.getPriority()));const x=a.currentWriteId,m=Gd(t),p=Qy(v,f,m);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=p,a.currentWriteId=o_(t),o.splice(o.indexOf(x),1),i=i.concat(Hy(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(Gn(t.serverSyncTree_,x,!0))}else h=!0,c="nodata",i=i.concat(Gn(t.serverSyncTree_,a.currentWriteId,!0))}Wt(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}Gl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)si(r[l]);Qd(t,t.transactionQueueTree_)}function a_(t,e){let n,r=t.transactionQueueTree_;for(n=D(e);n!==null&&oi(r)===void 0;)r=Bd(r,n),e=H(e),n=D(e);return r}function u_(t,e){const n=[];return c_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function c_(t,e,n){const r=oi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);$l(e,i=>{c_(t,i,n)})}function Gl(t,e){const n=oi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Yy(e,n.length>0?n:void 0)}$l(e,r=>{Gl(t,r)})}function d_(t,e){const n=Ls(a_(t,e)),r=Bd(t.transactionQueueTree_,e);return fN(r,i=>{Ma(t,i)}),Ma(t,r),Xy(r,i=>{Ma(t,i)}),n}function Ma(t,e){const n=oi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Gn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Yy(e,void 0):n.length=s+1,Wt(t.eventQueue_,Ls(e),i);for(let o=0;o<r.length;o++)si(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function DN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ze(`Invalid query segment '${n}' in query '${t}'`)}return e}const Tp=function(t,e){const n=MN(t),r=n.namespace;n.domain==="firebase.com"&&zt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||JC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new hy(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new $(n.pathString)}},MN=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(h,c)),h<c&&(i=LN(t.substring(h,c)));const f=DN(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",jN=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Rp.charAt(n%64),n=Math.floor(n/64);C(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Rp.charAt(e[i]);return C(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+me(this.snapshot.exportVal())}}class UN{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return F(this._path)?null:xy(this._path)}get ref(){return new On(this._repo,this._path)}get _queryIdentifier(){const e=dp(this._queryParams),n=yd(e);return n==="{}"?"default":n}get _queryObject(){return dp(this._queryParams)}isEqual(e){if(e=Ae(e),!(e instanceof Yd))return!1;const n=this._repo===e._repo,r=Ed(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Lk(this._path)}}class On extends Yd{constructor(e,n){super(e,n,new Id,!1)}get parent(){const e=Sy(this._path);return e===null?null:new On(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class gl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new $(e),r=ys(this.ref,e);return new gl(this._node.getChild(n),r,ne)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new gl(i,ys(this.ref,r),ne)))}hasChild(e){const n=new $(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Sn(t,e){return t=Ae(t),t._checkNotDeleted("ref"),e!==void 0?ys(t._root,e):t._root}function ys(t,e){return t=Ae(t),D(t._path)===null?yN("child","path",e):n_("child","path",e),new On(t._repo,ue(t._path,e))}function h_(t,e){t=Ae(t),$d("push",t._path),t_("push",e,t._path,!0);const n=s_(t._repo),r=jN(n),i=ys(t,r),s=ys(t,r);let o;return e!=null?o=f_(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function WN(t){return $d("remove",t._path),f_(t,null)}function f_(t,e){t=Ae(t),$d("set",t._path),t_("set",e,t._path,!1);const n=new Ll;return NN(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Jd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new FN("value",this,new gl(e.snapshotNode,new On(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new UN(this,e,n):null}matches(e){return e instanceof Jd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function BN(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(h,c)=>{Np(t._repo,t,l),a(h,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new zN(n,s||void 0),l=new Jd(o);return RN(t._repo,t,l),()=>Np(t._repo,t,l)}function Ds(t,e,n,r){return BN(t,"value",e,n,r)}$I(On);YI(On);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN="FIREBASE_DATABASE_EMULATOR_HOST",Zu={};let $N=!1;function HN(t,e,n,r){t.repoInfo_=new hy(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function GN(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Tp(s,i),l=o.repoInfo,a;typeof process<"u"&&Kf&&(a=Kf[VN]),a?(s=`http://${a}?ns=${l.namespace}`,o=Tp(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new ak(t.name,t.options,e);_N("Invalid Firebase Database URL",o),F(o.path)||zt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=qN(l,t,u,new lk(t.name,n));return new QN(h,t)}function KN(t,e){const n=Zu[e];(!n||n[t.key]!==t)&&zt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),PN(t),delete n[t.key]}function qN(t,e,n,r){let i=Zu[e.name];i||(i={},Zu[e.name]=i);let s=i[t.toURLString()];return s&&zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new CN(t,$N,n,r),i[t.toURLString()]=s,s}class QN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(kN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new On(this._repo,W())),this._rootInternal}_delete(){return this._rootInternal!==null&&(KN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&zt("Cannot call "+e+" on a deleted database.")}}function YN(t=mv(),e){const n=od(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=sE("database");r&&JN(n,...r)}return n}function JN(t,e,n,r={}){t=Ae(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&zt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&zt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new xo(xo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:oE(r.mockUserToken,t.app.options.projectId);s=new xo(o)}HN(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XN(t){HC(ni),Hr(new er("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return GN(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),gn(qf,Qf,t),gn(qf,Qf,"esm2017")}Ot.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ot.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};XN();const ZN={apiKey:"AIzaSyCCwg1J5uijTvM-mGlW0g5PN9SgL7lyCqg",authDomain:"notenest-official.firebaseapp.com",databaseURL:"https://notenest-official-default-rtdb.firebaseio.com",projectId:"notenest-official",storageBucket:"notenest-official.firebasestorage.app",messagingSenderId:"123694074747",appId:"1:123694074747:web:a541597cb341a0de190bde",measurementId:"G-KEV3VTZ7EB"},p_=pv(ZN),xi=WC(p_),Cn=YN(p_),m_=w.createContext({currentUser:null,loading:!0,login:async()=>{},signUp:async()=>{},loginWithGoogle:async()=>{},logout:async()=>{}}),Ht=()=>w.useContext(m_),eT=({children:t})=>{const[e,n]=w.useState(null),[r,i]=w.useState(!0),s=c=>c?{uid:c.uid,email:c.email,displayName:c.displayName,isAdmin:c.email==="rstrohan1@gmail.com"}:null;w.useEffect(()=>{const c=RS(xi,f=>{n(s(f)),i(!1)});return()=>c()},[]);const h={currentUser:e,loading:r,login:async(c,f)=>{try{await IS(xi,c,f)}catch(g){throw console.error("Login error:",g),g}},signUp:async(c,f)=>{try{await kS(xi,c,f)}catch(g){throw console.error("Signup error:",g),g}},loginWithGoogle:async()=>{try{const c=new Ct;await YS(xi,c)}catch(c){throw console.error("Google login error:",c),c}},logout:async()=>{try{await PS(xi)}catch(c){throw console.error("Logout error:",c),c}}};return d.jsx(m_.Provider,{value:h,children:!r&&t})};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var tT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),oe=(t,e)=>{const n=w.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:a,...u},h)=>w.createElement("svg",{ref:h,...tT,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${nT(t)}`,l].join(" "),...u},[...e.map(([c,f])=>w.createElement(c,f)),...Array.isArray(a)?a:[a]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=oe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=oe("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=oe("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=oe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=oe("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=oe("FileUp",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=oe("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=oe("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=oe("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=oe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=oe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=oe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=oe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=oe("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=oe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=oe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=oe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=oe("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=oe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=oe("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=oe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),fT=({darkMode:t,toggleDarkMode:e})=>{const{currentUser:n,logout:r}=Ht(),i=Zc(),[s,o]=w.useState(!1),l=async()=>{try{await r(),i("/login")}catch(u){console.error("Failed to log out",u)}},a=()=>{o(!s)};return d.jsx("header",{className:"bg-white dark:bg-gray-800 shadow-sm",children:d.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[d.jsxs("div",{className:"flex justify-between h-16",children:[d.jsx("div",{className:"flex items-center",children:d.jsxs(Ne,{to:"/",className:"flex items-center",children:[d.jsx("img",{src:"/notenest_logo_new.jpg",alt:"NoteNest",className:"h-8 w-8 sm:h-10 sm:w-10 rounded-full"}),d.jsx("span",{className:"ml-2 text-lg sm:text-xl font-bold text-gray-900 dark:text-white",children:"NoteNest"})]})}),d.jsxs("div",{className:"flex items-center",children:[d.jsx("button",{onClick:e,className:"p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800","aria-label":t?"Switch to light mode":"Switch to dark mode",children:t?d.jsx(cT,{size:20}):d.jsx(lT,{size:20})}),d.jsx("div",{className:"hidden sm:flex items-center ml-4",children:n?d.jsxs("div",{className:"flex items-center space-x-3",children:[n.isAdmin&&d.jsx(Ne,{to:"/admin",className:"inline-flex items-center px-3 py-1.5 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Admin"}),d.jsxs("div",{className:"flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700",children:[d.jsx(Ap,{size:16,className:"text-gray-500 dark:text-gray-400"}),d.jsx("span",{className:"ml-2 text-sm font-medium text-gray-700 dark:text-gray-300 truncate max-w-[150px]",children:n.email||"User"})]}),d.jsx("button",{onClick:l,className:"p-1.5 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none","aria-label":"Log out",children:d.jsx(bp,{size:18})})]}):d.jsxs("div",{className:"flex items-center space-x-3",children:[d.jsx(Ne,{to:"/login",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 dark:text-indigo-100 dark:bg-indigo-900/30 dark:hover:bg-indigo-900/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Sign In"}),d.jsx(Ne,{to:"/signup",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Sign Up"})]})}),d.jsx("button",{onClick:a,className:"ml-4 sm:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none",children:s?d.jsx(hT,{size:24}):d.jsx(oT,{size:24})})]})]}),s&&d.jsx("div",{className:"sm:hidden py-4 border-t border-gray-200 dark:border-gray-700",children:n?d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"flex items-center px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700",children:[d.jsx(Ap,{size:16,className:"text-gray-500 dark:text-gray-400"}),d.jsx("span",{className:"ml-2 text-sm font-medium text-gray-700 dark:text-gray-300 truncate",children:n.email||"User"})]}),n.isAdmin&&d.jsx(Ne,{to:"/admin",className:"block px-3 py-2 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md",onClick:a,children:"Admin Dashboard"}),d.jsxs("button",{onClick:()=>{l(),a()},className:"w-full flex items-center px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md",children:[d.jsx(bp,{size:18,className:"mr-2"}),"Log Out"]})]}):d.jsxs("div",{className:"space-y-2",children:[d.jsx(Ne,{to:"/login",className:"block w-full px-3 py-2 text-center text-base font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200 dark:text-indigo-100 dark:bg-indigo-900/30 dark:hover:bg-indigo-900/50 rounded-md",onClick:a,children:"Sign In"}),d.jsx(Ne,{to:"/signup",className:"block w-full px-3 py-2 text-center text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md",onClick:a,children:"Sign Up"})]})})]})})},pT=()=>d.jsx("footer",{className:"bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700",children:d.jsxs("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:[d.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[d.jsxs("div",{className:"flex items-center mb-4 md:mb-0",children:[d.jsx(mt,{className:"h-6 w-6 text-indigo-600 dark:text-indigo-400"}),d.jsx("span",{className:"ml-2 text-lg font-semibold text-gray-900 dark:text-white",children:"NoteNest"})]}),d.jsxs("div",{className:"flex flex-col md:flex-row items-center md:space-x-8 space-y-2 md:space-y-0",children:[d.jsx("a",{href:"#",className:"text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400",children:"Privacy Policy"}),d.jsx("a",{href:"#",className:"text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400",children:"Terms of Service"}),d.jsx("a",{href:"#",className:"text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400",children:"Contact Us"})]})]}),d.jsx("div",{className:"mt-4 pt-4 border-t border-gray-200 dark:border-gray-700",children:d.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center",children:["Made with ",d.jsx(iT,{size:14,className:"mx-1 text-red-500"})," for students - ",new Date().getFullYear()]})})]})}),mT=()=>{const[t,e]=w.useState(""),[n,r]=w.useState(""),[i,s]=w.useState(!1),[o,l]=w.useState(""),[a,u]=w.useState(!1),{login:h,loginWithGoogle:c}=Ht(),f=async v=>{if(v.preventDefault(),l(""),!t||!n){l("Please fill in all fields");return}try{u(!0),await h(t,n)}catch(_){l(_.message||"Failed to log in")}finally{u(!1)}},g=async()=>{try{u(!0),await c()}catch(v){l(v.message||"Failed to log in with Google")}finally{u(!1)}};return d.jsx("div",{className:"w-full max-w-md",children:d.jsxs("form",{onSubmit:f,className:"bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg",children:[d.jsx("h2",{className:"text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white",children:"Sign In"}),o&&d.jsx("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4",children:o}),d.jsxs("div",{className:"mb-4",children:[d.jsx("label",{className:"block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2",htmlFor:"email",children:"Email"}),d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:d.jsx(w_,{size:18,className:"text-gray-500"})}),d.jsx("input",{type:"email",id:"email",className:"pl-10 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white",placeholder:"your@email.com",value:t,onChange:v=>e(v.target.value),required:!0})]})]}),d.jsxs("div",{className:"mb-6",children:[d.jsx("label",{className:"block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2",htmlFor:"password",children:"Password"}),d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:d.jsx(ec,{size:18,className:"text-gray-500"})}),d.jsx("input",{type:i?"text":"password",id:"password",className:"pl-10 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white",placeholder:"********",value:n,onChange:v=>r(v.target.value),required:!0}),d.jsx("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer",onClick:()=>s(!i),children:i?d.jsx(v_,{size:18,className:"text-gray-500"}):d.jsx(y_,{size:18,className:"text-gray-500"})})]})]}),d.jsxs("div",{className:"flex flex-col space-y-4",children:[d.jsx("button",{type:"submit",disabled:a,className:"w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out disabled:opacity-50",children:a?"Signing in...":"Sign In"}),d.jsxs("div",{className:"relative flex items-center",children:[d.jsx("div",{className:"flex-grow border-t border-gray-300 dark:border-gray-600"}),d.jsx("span",{className:"flex-shrink mx-4 text-gray-600 dark:text-gray-400",children:"or"}),d.jsx("div",{className:"flex-grow border-t border-gray-300 dark:border-gray-600"})]}),d.jsxs("button",{type:"button",onClick:g,disabled:a,className:"w-full flex items-center justify-center bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-2 px-4 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out disabled:opacity-50",children:[d.jsx("svg",{className:"h-5 w-5 mr-2",viewBox:"0 0 24 24",children:d.jsx("path",{fill:"currentColor",d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"})}),"Continue with Google"]})]})]})})},gT=()=>{const{currentUser:t}=Ht();return t?d.jsx(wn,{to:"/"}):d.jsxs("div",{className:"min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center px-4 py-12",children:[d.jsxs("div",{className:"flex flex-col items-center mb-8",children:[d.jsx(mt,{className:"h-12 w-12 text-indigo-600 dark:text-indigo-400"}),d.jsx("h1",{className:"mt-2 text-3xl font-bold text-gray-900 dark:text-white",children:"NoteNest"}),d.jsx("p",{className:"mt-2 text-center text-gray-600 dark:text-gray-400 max-w-md",children:"Access study materials and notes for all your undergraduate courses"})]}),d.jsx(mT,{}),d.jsxs("p",{className:"mt-8 text-center text-gray-600 dark:text-gray-400",children:["Don't have an account?"," ",d.jsx(Ne,{to:"/signup",className:"text-indigo-600 dark:text-indigo-400 hover:underline",children:"Sign up"})]})]})},vT=()=>{const[t,e]=w.useState(""),[n,r]=w.useState(""),[i,s]=w.useState(""),[o,l]=w.useState(!1),[a,u]=w.useState(""),[h,c]=w.useState(!1),{signUp:f,loginWithGoogle:g}=Ht(),v=async x=>{if(x.preventDefault(),u(""),!t||!n||!i){u("Please fill in all fields");return}if(n!==i){u("Passwords do not match");return}if(n.length<6){u("Password must be at least 6 characters");return}try{c(!0),await f(t,n)}catch(m){u(m.message||"Failed to create an account")}finally{c(!1)}},_=async()=>{try{c(!0),await g()}catch(x){u(x.message||"Failed to sign up with Google")}finally{c(!1)}};return d.jsx("div",{className:"w-full max-w-md",children:d.jsxs("form",{onSubmit:v,className:"bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg",children:[d.jsx("h2",{className:"text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white",children:"Create Account"}),a&&d.jsx("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4",children:a}),d.jsxs("div",{className:"mb-4",children:[d.jsx("label",{className:"block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2",htmlFor:"email",children:"Email"}),d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:d.jsx(w_,{size:18,className:"text-gray-500"})}),d.jsx("input",{type:"email",id:"email",className:"pl-10 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white",placeholder:"your@email.com",value:t,onChange:x=>e(x.target.value),required:!0})]})]}),d.jsxs("div",{className:"mb-4",children:[d.jsx("label",{className:"block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2",htmlFor:"password",children:"Password"}),d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:d.jsx(ec,{size:18,className:"text-gray-500"})}),d.jsx("input",{type:o?"text":"password",id:"password",className:"pl-10 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white",placeholder:"********",value:n,onChange:x=>r(x.target.value),required:!0}),d.jsx("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer",onClick:()=>l(!o),children:o?d.jsx(v_,{size:18,className:"text-gray-500"}):d.jsx(y_,{size:18,className:"text-gray-500"})})]})]}),d.jsxs("div",{className:"mb-6",children:[d.jsx("label",{className:"block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2",htmlFor:"confirmPassword",children:"Confirm Password"}),d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:d.jsx(ec,{size:18,className:"text-gray-500"})}),d.jsx("input",{type:o?"text":"password",id:"confirmPassword",className:"pl-10 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white",placeholder:"********",value:i,onChange:x=>s(x.target.value),required:!0})]})]}),d.jsxs("div",{className:"flex flex-col space-y-4",children:[d.jsx("button",{type:"submit",disabled:h,className:"w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out disabled:opacity-50",children:h?"Creating Account...":"Sign Up"}),d.jsxs("div",{className:"relative flex items-center",children:[d.jsx("div",{className:"flex-grow border-t border-gray-300 dark:border-gray-600"}),d.jsx("span",{className:"flex-shrink mx-4 text-gray-600 dark:text-gray-400",children:"or"}),d.jsx("div",{className:"flex-grow border-t border-gray-300 dark:border-gray-600"})]}),d.jsxs("button",{type:"button",onClick:_,disabled:h,className:"w-full flex items-center justify-center bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-2 px-4 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out disabled:opacity-50",children:[d.jsx("svg",{className:"h-5 w-5 mr-2",viewBox:"0 0 24 24",children:d.jsx("path",{fill:"currentColor",d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"})}),"Continue with Google"]})]})]})})},yT=()=>{const{currentUser:t}=Ht();return t?d.jsx(wn,{to:"/"}):d.jsxs("div",{className:"min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center px-4 py-12",children:[d.jsxs("div",{className:"flex flex-col items-center mb-8",children:[d.jsx(mt,{className:"h-12 w-12 text-indigo-600 dark:text-indigo-400"}),d.jsx("h1",{className:"mt-2 text-3xl font-bold text-gray-900 dark:text-white",children:"NoteNest"}),d.jsx("p",{className:"mt-2 text-center text-gray-600 dark:text-gray-400 max-w-md",children:"Join NoteNest to access study materials for your undergraduate courses"})]}),d.jsx(vT,{}),d.jsxs("p",{className:"mt-8 text-center text-gray-600 dark:text-gray-400",children:["Already have an account?"," ",d.jsx(Ne,{to:"/login",className:"text-indigo-600 dark:text-indigo-400 hover:underline",children:"Sign in"})]})]})},_T=({selectedSemester:t,onSemesterChange:e})=>{const n=[1,2,3,4,5,6,7,8];return d.jsxs("div",{className:"w-full max-w-md mx-auto mb-6 px-4 sm:px-0",children:[d.jsx("h2",{className:"text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center",children:"Select Semester"}),d.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 sm:p-4",children:d.jsx("div",{className:"grid grid-cols-4 gap-2 sm:gap-3",children:n.map(r=>d.jsxs("div",{className:"relative",children:[d.jsx("input",{type:"radio",id:`semester-${r}`,name:"semester",value:r,checked:t===r,onChange:()=>e(r),className:"peer absolute opacity-0 w-0 h-0"}),d.jsx("label",{htmlFor:`semester-${r}`,className:`flex justify-center items-center h-10 sm:h-12 cursor-pointer rounded-lg border-2 border-gray-300 dark:border-gray-600 
                  peer-checked:border-indigo-500 peer-checked:bg-indigo-50 dark:peer-checked:bg-indigo-900/30
                  text-gray-700 dark:text-gray-300 peer-checked:text-indigo-700 dark:peer-checked:text-indigo-300
                  hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 text-sm sm:text-base font-medium`,children:r})]},r))})})]})},wT=({subjects:t,semester:e})=>t.length===0?d.jsxs("div",{className:"flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md",children:[d.jsx(mt,{size:48,className:"text-gray-400 mb-4"}),d.jsxs("p",{className:"text-gray-600 dark:text-gray-400 text-lg text-center",children:["No subjects available for Semester ",e," yet."]})]}):d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6",children:t.map(n=>d.jsx(Ne,{to:`/subjects/${n.id}`,className:"group",children:d.jsxs("div",{className:"overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 h-full flex flex-col",children:[d.jsx("div",{className:"relative pt-[60%] bg-gray-200 dark:bg-gray-700",children:n.imageUrl?d.jsx("img",{src:n.imageUrl,alt:n.name,className:"absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"}):d.jsx("div",{className:"absolute top-0 left-0 w-full h-full flex items-center justify-center",children:d.jsx(mt,{size:48,className:"text-gray-400"})})}),d.jsxs("div",{className:"p-4 flex-grow flex flex-col",children:[d.jsx("h3",{className:"text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 line-clamp-2",children:n.name}),d.jsx("div",{className:"mt-auto pt-2",children:d.jsxs("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",children:["Semester ",n.semester]})})]})]})},n.id))}),xT=()=>{const{currentUser:t,loading:e}=Ht(),[n,r]=w.useState(1),[i,s]=w.useState([]),[o,l]=w.useState([]),[a,u]=w.useState(""),[h,c]=w.useState(!0);return w.useEffect(()=>{if(!t&&!e)return;const f=Sn(Cn,"subjects"),g=Ds(f,v=>{const _=v.val(),x=[];_&&Object.keys(_).forEach(m=>{x.push({id:m,name:_[m].name,imageUrl:_[m].imageUrl,semester:_[m].semester})}),s(x),c(!1)},v=>{console.error("Error fetching subjects:",v),c(!1)});return()=>g()},[t,e]),w.useEffect(()=>{let f=i.filter(g=>g.semester===n);if(a.trim()!==""){const g=a.toLowerCase();f=f.filter(v=>v.name.toLowerCase().includes(g))}l(f)},[i,n,a]),!t&&!e?d.jsx(wn,{to:"/login"}):d.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[d.jsxs("div",{className:"mb-8",children:[d.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white mb-2",children:"Welcome to NoteNest"}),d.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Find and access study materials for all your courses"})]}),d.jsx(_T,{selectedSemester:n,onSemesterChange:r}),d.jsxs("div",{className:"relative mb-8 max-w-md mx-auto",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:d.jsx(Xd,{size:20,className:"text-gray-500"})}),d.jsx("input",{type:"text",placeholder:"Search subjects...",value:a,onChange:f=>u(f.target.value),className:"pl-10 w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"})]}),h?d.jsx("div",{className:"flex justify-center items-center py-16",children:d.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"})}):d.jsxs(d.Fragment,{children:[d.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-white mb-6",children:["Semester ",n," Subjects"]}),d.jsx(wT,{subjects:o,semester:n})]})]})},ET=({subjectId:t,selectedCategory:e,onCategoryChange:n})=>{const r=[{value:`${t} major`,label:"Major"},{value:`${t} minor`,label:"Minor"},{value:`${t} aec`,label:"AEC"},{value:`${t} idc`,label:"IDC/MDC"},{value:`${t} sec`,label:"SEC"}];return d.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6",children:d.jsx("select",{value:e,onChange:i=>n(i.target.value),className:"w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500",children:r.map(i=>d.jsx("option",{value:i.value,children:i.label},i.value))})})},ST=({subjectId:t,category:e})=>{const[n,r]=w.useState([]),[i,s]=w.useState([]),[o,l]=w.useState(""),[a,u]=w.useState(!0),h=[{value:`${t} major`,label:"Major"},{value:`${t} minor`,label:"Minor"},{value:`${t} aec`,label:"AEC"},{value:`${t} idc`,label:"IDC/MDC"},{value:`${t} sec`,label:"SEC"}],c=f=>{const g=h.find(v=>v.value===f);return g?g.label:f};return w.useEffect(()=>{u(!0);const f=Sn(Cn,e),g=Ds(f,v=>{const _=v.val(),x=[];_&&Object.keys(_).forEach(m=>{x.push({id:m,buttonText:_[m].buttonText,buttonLink:_[m].buttonLink})}),x.sort((m,p)=>m.buttonText.localeCompare(p.buttonText)),r(x),s(x),u(!1)},v=>{console.error("Error fetching notes:",v),u(!1)});return()=>g()},[e]),w.useEffect(()=>{const f=o.toLowerCase().trim();if(f==="")s(n);else{const g=n.filter(v=>v.buttonText.toLowerCase().includes(f));s(g)}},[o,n]),d.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6",children:[d.jsx("div",{className:"flex items-center justify-between mb-6",children:d.jsxs("h2",{className:"text-lg sm:text-xl font-semibold text-gray-800 dark:text-white",children:[c(e)," Notes"]})}),d.jsxs("div",{className:"relative mb-6",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:d.jsx(Xd,{size:18,className:"text-gray-500"})}),d.jsx("input",{type:"text",placeholder:"Search notes...",value:o,onChange:f=>l(f.target.value),className:"w-full pl-10 pr-4 py-2 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"})]}),a?d.jsx("div",{className:"flex justify-center items-center py-8",children:d.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"})}):i.length>0?d.jsx("ul",{className:"space-y-2 sm:space-y-3",children:i.map(f=>d.jsx("li",{children:d.jsxs("a",{href:f.buttonLink,target:"_blank",rel:"noopener noreferrer",className:"flex items-center p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition duration-150 group",children:[d.jsx(Pp,{size:18,className:"text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 mr-3 flex-shrink-0"}),d.jsx("div",{className:"flex-grow min-w-0",children:d.jsx("span",{className:"text-sm sm:text-base text-gray-800 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-300 font-medium truncate block",children:f.buttonText})}),d.jsx(__,{size:16,className:"text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex-shrink-0 ml-2"})]})},f.id))}):d.jsxs("div",{className:"flex flex-col items-center justify-center py-8",children:[d.jsx(Pp,{size:48,className:"text-gray-400 mb-4"}),d.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-center text-sm sm:text-base",children:o?"No matching notes found. Try a different search term.":"No notes available yet."})]})]})},CT=()=>{const{id:t}=Xg(),{currentUser:e,loading:n}=Ht(),[r,i]=w.useState(null),[s,o]=w.useState(""),[l,a]=w.useState(!0);return w.useEffect(()=>{if(!t||!e&&!n)return;const u=Sn(Cn,`subjects/${t}`),h=Ds(u,c=>{const f=c.val();if(f){const g={id:t,name:f.name,imageUrl:f.imageUrl,semester:f.semester};i(g),o(`${t} major`)}else i(null);a(!1)},c=>{console.error("Error fetching subject:",c),a(!1)});return()=>h()},[t,e,n]),!e&&!n?d.jsx(wn,{to:"/login"}):d.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[d.jsxs(Ne,{to:"/",className:"inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 mb-6",children:[d.jsx(g_,{size:16,className:"mr-1"}),"Back to Subjects"]}),l?d.jsx("div",{className:"flex justify-center items-center py-16",children:d.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"})}):r?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"flex flex-col md:flex-row items-start md:items-center mb-8 gap-6",children:[d.jsx("div",{className:"w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0",children:r.imageUrl?d.jsx("img",{src:r.imageUrl,alt:r.name,className:"w-full h-full object-cover"}):d.jsx("div",{className:"w-full h-full flex items-center justify-center",children:d.jsx(mt,{size:48,className:"text-gray-400"})})}),d.jsxs("div",{children:[d.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white mb-2",children:r.name}),d.jsx("div",{className:"flex items-center",children:d.jsxs("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",children:["Semester ",r.semester]})})]})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[d.jsxs("div",{className:"lg:col-span-1",children:[d.jsx(ET,{subjectId:r.id,selectedCategory:s,onCategoryChange:o}),e.isAdmin&&d.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mt-6",children:d.jsx(Ne,{to:`/admin/subject/${r.id}`,className:"w-full flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150",children:"Manage Notes"})})]}),d.jsx("div",{className:"lg:col-span-3",children:d.jsx(ST,{subjectId:r.id,category:s})})]})]}):d.jsxs("div",{className:"flex flex-col items-center justify-center py-16",children:[d.jsx(mt,{size:64,className:"text-gray-400 mb-4"}),d.jsx("h2",{className:"text-xl font-semibold text-gray-800 dark:text-white mb-2",children:"Subject Not Found"}),d.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"The subject you're looking for doesn't exist or has been removed."})]})]})},kT=()=>{const[t,e]=w.useState(""),[n,r]=w.useState(""),[i,s]=w.useState("1"),[o,l]=w.useState(!1),[a,u]=w.useState(""),[h,c]=w.useState(""),f=async g=>{if(g.preventDefault(),u(""),c(""),!t.trim()){u("Subject name is required");return}try{l(!0);const v=Sn(Cn,"subjects");await h_(v,{name:t,imageUrl:n,semester:parseInt(i)}),e(""),r(""),c("Subject added successfully!"),setTimeout(()=>{c("")},3e3)}catch(v){u(v.message||"Failed to add subject")}finally{l(!1)}};return d.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-md p-6",children:[d.jsx("h3",{className:"text-lg font-semibold text-gray-800 dark:text-white mb-4",children:"Add New Subject"}),a&&d.jsx("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4",children:a}),h&&d.jsx("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4",children:h}),d.jsxs("form",{onSubmit:f,children:[d.jsxs("div",{className:"mb-4",children:[d.jsx("label",{className:"block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2",children:"Subject Name"}),d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:d.jsx(mt,{size:18,className:"text-gray-500"})}),d.jsx("input",{type:"text",value:t,onChange:g=>e(g.target.value),placeholder:"e.g., Mathematics",className:"pl-10 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"})]})]}),d.jsxs("div",{className:"mb-4",children:[d.jsx("label",{className:"block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2",children:"Subject Image URL"}),d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:d.jsx(sT,{size:18,className:"text-gray-500"})}),d.jsx("input",{type:"url",value:n,onChange:g=>r(g.target.value),placeholder:"https://example.com/image.jpg",className:"pl-10 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"})]})]}),d.jsxs("div",{className:"mb-6",children:[d.jsx("label",{className:"block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2",children:"Semester"}),d.jsx("select",{value:i,onChange:g=>s(g.target.value),className:"w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500",children:[1,2,3,4,5,6,7,8].map(g=>d.jsxs("option",{value:g.toString(),children:["Semester ",g]},g))})]}),d.jsx("button",{type:"submit",disabled:o,className:"w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 disabled:opacity-50",children:o?"Adding...":"Add Subject"})]})]})},IT=()=>{const{currentUser:t,loading:e}=Ht();return!t&&!e?d.jsx(wn,{to:"/login"}):t&&!t.isAdmin?d.jsx(wn,{to:"/"}):d.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[d.jsxs("div",{className:"flex items-center justify-between mb-8",children:[d.jsxs("div",{children:[d.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white mb-2",children:"Admin Dashboard"}),d.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Manage subjects and notes for all semesters"})]}),d.jsxs(Ne,{to:"/",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[d.jsx(mt,{size:16,className:"mr-2"}),"View Site"]})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[d.jsx(kT,{}),d.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-md p-6",children:[d.jsx("h3",{className:"text-lg font-semibold text-gray-800 dark:text-white mb-4",children:"Quick Actions"}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs(Ne,{to:"/",className:"flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition duration-150 group",children:[d.jsx(aT,{size:20,className:"text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 mr-3"}),d.jsxs("div",{children:[d.jsx("span",{className:"text-gray-800 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-300 font-medium",children:"Go to Subject List"}),d.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"View and manage existing subjects"})]})]}),d.jsxs("div",{className:"flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition duration-150 group cursor-pointer",children:[d.jsx(uT,{size:20,className:"text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 mr-3"}),d.jsxs("div",{children:[d.jsx("span",{className:"text-gray-800 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-300 font-medium",children:"Site Settings"}),d.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Manage website configuration"})]})]})]})]})]})]})},NT=({subjectId:t,onSuccess:e})=>{const[n,r]=w.useState(""),[i,s]=w.useState(""),[o,l]=w.useState(`${t} major`),[a,u]=w.useState(!1),[h,c]=w.useState(""),f=[{value:`${t} major`,label:"Major"},{value:`${t} minor`,label:"Minor"},{value:`${t} aec`,label:"AEC"},{value:`${t} idc`,label:"IDC/MDC"},{value:`${t} sec`,label:"SEC"}],g=async v=>{if(v.preventDefault(),c(""),!n.trim()||!i.trim()){c("Please fill in all fields");return}try{u(!0);const _=Sn(Cn,o);await h_(_,{buttonText:n,buttonLink:i}),r(""),s(""),e()}catch(_){c(_.message||"Failed to add note")}finally{u(!1)}};return d.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-md p-6",children:[d.jsx("h3",{className:"text-lg font-semibold text-gray-800 dark:text-white mb-4",children:"Add New Note"}),h&&d.jsx("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4",children:h}),d.jsxs("form",{onSubmit:g,children:[d.jsxs("div",{className:"mb-4",children:[d.jsx("label",{className:"block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2",children:"Category"}),d.jsx("select",{value:o,onChange:v=>l(v.target.value),className:"w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500",children:f.map(v=>d.jsx("option",{value:v.value,children:v.label},v.value))})]}),d.jsxs("div",{className:"mb-4",children:[d.jsx("label",{className:"block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2",children:"Note Title"}),d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:d.jsx(rT,{size:18,className:"text-gray-500"})}),d.jsx("input",{type:"text",value:n,onChange:v=>r(v.target.value),placeholder:"e.g., Chapter 1 Notes",className:"pl-10 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"})]})]}),d.jsxs("div",{className:"mb-6",children:[d.jsx("label",{className:"block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2",children:"Note Link"}),d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:d.jsx(__,{size:18,className:"text-gray-500"})}),d.jsx("input",{type:"url",value:i,onChange:v=>s(v.target.value),placeholder:"https://example.com/notes.pdf",className:"pl-10 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"})]})]}),d.jsx("button",{type:"submit",disabled:a,className:"w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 disabled:opacity-50",children:a?"Adding...":"Add Note"})]})]})},TT=({subjectId:t})=>{const[e,n]=w.useState(`${t} major`),[r,i]=w.useState([]),[s,o]=w.useState([]),[l,a]=w.useState(""),[u,h]=w.useState(!0),[c,f]=w.useState({}),g=[{value:`${t} major`,label:"Major"},{value:`${t} minor`,label:"Minor"},{value:`${t} aec`,label:"AEC"},{value:`${t} idc`,label:"IDC/MDC"},{value:`${t} sec`,label:"SEC"}];w.useEffect(()=>{h(!0);const _=Sn(Cn,e),x=Ds(_,m=>{const p=m.val(),y=[];p&&Object.keys(p).forEach(E=>{y.push({id:E,buttonText:p[E].buttonText,buttonLink:p[E].buttonLink})}),y.sort((E,k)=>E.buttonText.localeCompare(k.buttonText)),i(y),o(y),h(!1)},m=>{console.error("Error fetching notes:",m),h(!1)});return()=>x()},[e]),w.useEffect(()=>{const _=l.toLowerCase().trim();if(_==="")o(r);else{const x=r.filter(m=>m.buttonText.toLowerCase().includes(_));o(x)}},[l,r]);const v=async _=>{try{f(m=>({...m,[_]:!0}));const x=Sn(Cn,`${e}/${_}`);await WN(x)}catch(x){console.error("Error deleting note:",x)}finally{f(x=>({...x,[_]:!1}))}};return d.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-md p-6",children:[d.jsx("h2",{className:"text-xl font-semibold text-gray-800 dark:text-white mb-6",children:"Manage Notes"}),d.jsxs("div",{className:"mb-4",children:[d.jsx("label",{className:"block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2",children:"Category"}),d.jsx("select",{value:e,onChange:_=>n(_.target.value),className:"w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500",children:g.map(_=>d.jsx("option",{value:_.value,children:_.label},_.value))})]}),d.jsxs("div",{className:"relative mb-6",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:d.jsx(Xd,{size:18,className:"text-gray-500"})}),d.jsx("input",{type:"text",placeholder:"Search notes...",value:l,onChange:_=>a(_.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"})]}),u?d.jsx("div",{className:"flex justify-center items-center py-8",children:d.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"})}):s.length>0?d.jsx("div",{className:"overflow-x-auto",children:d.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-700",children:[d.jsx("thead",{className:"bg-gray-50 dark:bg-gray-700",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Title"}),d.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Link"}),d.jsx("th",{scope:"col",className:"px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Actions"})]})}),d.jsx("tbody",{className:"bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700",children:s.map(_=>d.jsxs("tr",{children:[d.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-white",children:_.buttonText}),d.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",children:d.jsx("a",{href:_.buttonLink,target:"_blank",rel:"noopener noreferrer",className:"text-indigo-600 dark:text-indigo-400 hover:underline truncate block max-w-xs",children:_.buttonLink})}),d.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:d.jsx("button",{onClick:()=>v(_.id),disabled:c[_.id],className:"text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 focus:outline-none",children:c[_.id]?d.jsx("div",{className:"animate-spin h-5 w-5 border-b-2 border-red-500 rounded-full inline-block"}):d.jsx(dT,{size:18})})})]},_.id))})]})}):d.jsx("div",{className:"flex flex-col items-center justify-center py-8",children:d.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-center",children:l?"No matching notes found.":"No notes available in this category."})})]})},RT=()=>{const{id:t}=Xg(),{currentUser:e,loading:n}=Ht(),[r,i]=w.useState(null),[s,o]=w.useState(!0),[l,a]=w.useState(0);if(w.useEffect(()=>{if(!t||!e&&!n)return;const h=Sn(Cn,`subjects/${t}`),c=Ds(h,f=>{const g=f.val();if(g){const v={id:t,name:g.name,imageUrl:g.imageUrl,semester:g.semester};i(v)}else i(null);o(!1)},f=>{console.error("Error fetching subject:",f),o(!1)});return()=>c()},[t,e,n]),!e&&!n)return d.jsx(wn,{to:"/login"});if(e&&!e.isAdmin)return d.jsx(wn,{to:"/"});const u=()=>{a(h=>h+1)};return d.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[d.jsxs(Ne,{to:`/subjects/${t}`,className:"inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 mb-6",children:[d.jsx(g_,{size:16,className:"mr-1"}),"Back to Subject"]}),s?d.jsx("div",{className:"flex justify-center items-center py-16",children:d.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"})}):r?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"flex items-center mb-8",children:[d.jsx("div",{className:"w-16 h-16 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0 mr-4",children:r.imageUrl?d.jsx("img",{src:r.imageUrl,alt:r.name,className:"w-full h-full object-cover"}):d.jsx("div",{className:"w-full h-full flex items-center justify-center",children:d.jsx(mt,{size:24,className:"text-gray-400"})})}),d.jsxs("div",{children:[d.jsxs("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:["Manage: ",r.name]}),d.jsxs("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",children:["Semester ",r.semester]})]})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[d.jsx("div",{children:d.jsx(NT,{subjectId:r.id,onSuccess:u})}),d.jsx("div",{className:"lg:col-span-2",children:d.jsx(TT,{subjectId:r.id},l)})]})]}):d.jsxs("div",{className:"flex flex-col items-center justify-center py-16",children:[d.jsx(mt,{size:64,className:"text-gray-400 mb-4"}),d.jsx("h2",{className:"text-xl font-semibold text-gray-800 dark:text-white mb-2",children:"Subject Not Found"}),d.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"The subject you're looking for doesn't exist or has been removed."})]})]})};function PT(){const[t,e]=w.useState(()=>{const r=localStorage.getItem("darkMode");return r?JSON.parse(r):window.matchMedia("(prefers-color-scheme: dark)").matches});w.useEffect(()=>{localStorage.setItem("darkMode",JSON.stringify(t)),t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[t]);const n=()=>{e(!t)};return d.jsx(eT,{children:d.jsx(Kx,{children:d.jsxs("div",{className:"flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200",children:[d.jsx(fT,{darkMode:t,toggleDarkMode:n}),d.jsx("main",{className:"flex-grow",children:d.jsxs(zx,{children:[d.jsx(Fn,{path:"/login",element:d.jsx(gT,{})}),d.jsx(Fn,{path:"/signup",element:d.jsx(yT,{})}),d.jsx(Fn,{path:"/",element:d.jsx(xT,{})}),d.jsx(Fn,{path:"/subjects/:id",element:d.jsx(CT,{})}),d.jsx(Fn,{path:"/admin",element:d.jsx(IT,{})}),d.jsx(Fn,{path:"/admin/subject/:id",element:d.jsx(RT,{})})]})}),d.jsx(pT,{})]})})})}Hg(document.getElementById("root")).render(d.jsx(w.StrictMode,{children:d.jsx(PT,{})}));
