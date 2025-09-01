(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const y of h.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&u(y)}).observe(document,{childList:!0,subtree:!0});function c(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(f){if(f.ep)return;f.ep=!0;const h=c(f);fetch(f.href,h)}})();function Tb(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ic={exports:{}},Cl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh;function _b(){if(Fh)return Cl;Fh=1;var i=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function c(u,f,h){var y=null;if(h!==void 0&&(y=""+h),f.key!==void 0&&(y=""+f.key),"key"in f){h={};for(var S in f)S!=="key"&&(h[S]=f[S])}else h=f;return f=h.ref,{$$typeof:i,type:u,key:y,ref:f!==void 0?f:null,props:h}}return Cl.Fragment=o,Cl.jsx=c,Cl.jsxs=c,Cl}var Wh;function Eb(){return Wh||(Wh=1,Ic.exports=_b()),Ic.exports}var s=Eb(),Fc={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep;function Cb(){if(ep)return ce;ep=1;var i=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),y=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),_=Symbol.iterator;function R(j){return j===null||typeof j!="object"?null:(j=_&&j[_]||j["@@iterator"],typeof j=="function"?j:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,Y={};function K(j,G,P){this.props=j,this.context=G,this.refs=Y,this.updater=P||M}K.prototype.isReactComponent={},K.prototype.setState=function(j,G){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,G,"setState")},K.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function k(){}k.prototype=K.prototype;function Q(j,G,P){this.props=j,this.context=G,this.refs=Y,this.updater=P||M}var Z=Q.prototype=new k;Z.constructor=Q,X(Z,K.prototype),Z.isPureReactComponent=!0;var q=Array.isArray,O={H:null,A:null,T:null,S:null,V:null},U=Object.prototype.hasOwnProperty;function V(j,G,P,I,ee,he){return P=he.ref,{$$typeof:i,type:j,key:G,ref:P!==void 0?P:null,props:he}}function te(j,G){return V(j.type,G,void 0,void 0,void 0,j.props)}function se(j){return typeof j=="object"&&j!==null&&j.$$typeof===i}function ne(j){var G={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(P){return G[P]})}var Ce=/\/+/g;function Re(j,G){return typeof j=="object"&&j!==null&&j.key!=null?ne(""+j.key):G.toString(36)}function pt(){}function Dt(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(pt,pt):(j.status="pending",j.then(function(G){j.status==="pending"&&(j.status="fulfilled",j.value=G)},function(G){j.status==="pending"&&(j.status="rejected",j.reason=G)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function Le(j,G,P,I,ee){var he=typeof j;(he==="undefined"||he==="boolean")&&(j=null);var le=!1;if(j===null)le=!0;else switch(he){case"bigint":case"string":case"number":le=!0;break;case"object":switch(j.$$typeof){case i:case o:le=!0;break;case w:return le=j._init,Le(le(j._payload),G,P,I,ee)}}if(le)return ee=ee(j),le=I===""?"."+Re(j,0):I,q(ee)?(P="",le!=null&&(P=le.replace(Ce,"$&/")+"/"),Le(ee,G,P,"",function(lt){return lt})):ee!=null&&(se(ee)&&(ee=te(ee,P+(ee.key==null||j&&j.key===ee.key?"":(""+ee.key).replace(Ce,"$&/")+"/")+le)),G.push(ee)),1;le=0;var Ze=I===""?".":I+":";if(q(j))for(var ve=0;ve<j.length;ve++)I=j[ve],he=Ze+Re(I,ve),le+=Le(I,G,P,he,ee);else if(ve=R(j),typeof ve=="function")for(j=ve.call(j),ve=0;!(I=j.next()).done;)I=I.value,he=Ze+Re(I,ve++),le+=Le(I,G,P,he,ee);else if(he==="object"){if(typeof j.then=="function")return Le(Dt(j),G,P,I,ee);throw G=String(j),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return le}function B(j,G,P){if(j==null)return j;var I=[],ee=0;return Le(j,I,"","",function(he){return G.call(P,he,ee++)}),I}function J(j){if(j._status===-1){var G=j._result;G=G(),G.then(function(P){(j._status===0||j._status===-1)&&(j._status=1,j._result=P)},function(P){(j._status===0||j._status===-1)&&(j._status=2,j._result=P)}),j._status===-1&&(j._status=0,j._result=G)}if(j._status===1)return j._result.default;throw j._result}var ae=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)};function me(){}return ce.Children={map:B,forEach:function(j,G,P){B(j,function(){G.apply(this,arguments)},P)},count:function(j){var G=0;return B(j,function(){G++}),G},toArray:function(j){return B(j,function(G){return G})||[]},only:function(j){if(!se(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},ce.Component=K,ce.Fragment=c,ce.Profiler=f,ce.PureComponent=Q,ce.StrictMode=u,ce.Suspense=b,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ce.__COMPILER_RUNTIME={__proto__:null,c:function(j){return O.H.useMemoCache(j)}},ce.cache=function(j){return function(){return j.apply(null,arguments)}},ce.cloneElement=function(j,G,P){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var I=X({},j.props),ee=j.key,he=void 0;if(G!=null)for(le in G.ref!==void 0&&(he=void 0),G.key!==void 0&&(ee=""+G.key),G)!U.call(G,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&G.ref===void 0||(I[le]=G[le]);var le=arguments.length-2;if(le===1)I.children=P;else if(1<le){for(var Ze=Array(le),ve=0;ve<le;ve++)Ze[ve]=arguments[ve+2];I.children=Ze}return V(j.type,ee,void 0,void 0,he,I)},ce.createContext=function(j){return j={$$typeof:y,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:h,_context:j},j},ce.createElement=function(j,G,P){var I,ee={},he=null;if(G!=null)for(I in G.key!==void 0&&(he=""+G.key),G)U.call(G,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(ee[I]=G[I]);var le=arguments.length-2;if(le===1)ee.children=P;else if(1<le){for(var Ze=Array(le),ve=0;ve<le;ve++)Ze[ve]=arguments[ve+2];ee.children=Ze}if(j&&j.defaultProps)for(I in le=j.defaultProps,le)ee[I]===void 0&&(ee[I]=le[I]);return V(j,he,void 0,void 0,null,ee)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(j){return{$$typeof:S,render:j}},ce.isValidElement=se,ce.lazy=function(j){return{$$typeof:w,_payload:{_status:-1,_result:j},_init:J}},ce.memo=function(j,G){return{$$typeof:g,type:j,compare:G===void 0?null:G}},ce.startTransition=function(j){var G=O.T,P={};O.T=P;try{var I=j(),ee=O.S;ee!==null&&ee(P,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then(me,ae)}catch(he){ae(he)}finally{O.T=G}},ce.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ce.use=function(j){return O.H.use(j)},ce.useActionState=function(j,G,P){return O.H.useActionState(j,G,P)},ce.useCallback=function(j,G){return O.H.useCallback(j,G)},ce.useContext=function(j){return O.H.useContext(j)},ce.useDebugValue=function(){},ce.useDeferredValue=function(j,G){return O.H.useDeferredValue(j,G)},ce.useEffect=function(j,G,P){var I=O.H;if(typeof P=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return I.useEffect(j,G)},ce.useId=function(){return O.H.useId()},ce.useImperativeHandle=function(j,G,P){return O.H.useImperativeHandle(j,G,P)},ce.useInsertionEffect=function(j,G){return O.H.useInsertionEffect(j,G)},ce.useLayoutEffect=function(j,G){return O.H.useLayoutEffect(j,G)},ce.useMemo=function(j,G){return O.H.useMemo(j,G)},ce.useOptimistic=function(j,G){return O.H.useOptimistic(j,G)},ce.useReducer=function(j,G,P){return O.H.useReducer(j,G,P)},ce.useRef=function(j){return O.H.useRef(j)},ce.useState=function(j){return O.H.useState(j)},ce.useSyncExternalStore=function(j,G,P){return O.H.useSyncExternalStore(j,G,P)},ce.useTransition=function(){return O.H.useTransition()},ce.version="19.1.1",ce}var tp;function Lu(){return tp||(tp=1,Fc.exports=Cb()),Fc.exports}var $=Lu();const ct=Tb($);var Wc={exports:{}},Al={},eu={exports:{}},tu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np;function Ab(){return np||(np=1,function(i){function o(B,J){var ae=B.length;B.push(J);e:for(;0<ae;){var me=ae-1>>>1,j=B[me];if(0<f(j,J))B[me]=J,B[ae]=j,ae=me;else break e}}function c(B){return B.length===0?null:B[0]}function u(B){if(B.length===0)return null;var J=B[0],ae=B.pop();if(ae!==J){B[0]=ae;e:for(var me=0,j=B.length,G=j>>>1;me<G;){var P=2*(me+1)-1,I=B[P],ee=P+1,he=B[ee];if(0>f(I,ae))ee<j&&0>f(he,I)?(B[me]=he,B[ee]=ae,me=ee):(B[me]=I,B[P]=ae,me=P);else if(ee<j&&0>f(he,ae))B[me]=he,B[ee]=ae,me=ee;else break e}}return J}function f(B,J){var ae=B.sortIndex-J.sortIndex;return ae!==0?ae:B.id-J.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;i.unstable_now=function(){return h.now()}}else{var y=Date,S=y.now();i.unstable_now=function(){return y.now()-S}}var b=[],g=[],w=1,_=null,R=3,M=!1,X=!1,Y=!1,K=!1,k=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function q(B){for(var J=c(g);J!==null;){if(J.callback===null)u(g);else if(J.startTime<=B)u(g),J.sortIndex=J.expirationTime,o(b,J);else break;J=c(g)}}function O(B){if(Y=!1,q(B),!X)if(c(b)!==null)X=!0,U||(U=!0,Re());else{var J=c(g);J!==null&&Le(O,J.startTime-B)}}var U=!1,V=-1,te=5,se=-1;function ne(){return K?!0:!(i.unstable_now()-se<te)}function Ce(){if(K=!1,U){var B=i.unstable_now();se=B;var J=!0;try{e:{X=!1,Y&&(Y=!1,Q(V),V=-1),M=!0;var ae=R;try{t:{for(q(B),_=c(b);_!==null&&!(_.expirationTime>B&&ne());){var me=_.callback;if(typeof me=="function"){_.callback=null,R=_.priorityLevel;var j=me(_.expirationTime<=B);if(B=i.unstable_now(),typeof j=="function"){_.callback=j,q(B),J=!0;break t}_===c(b)&&u(b),q(B)}else u(b);_=c(b)}if(_!==null)J=!0;else{var G=c(g);G!==null&&Le(O,G.startTime-B),J=!1}}break e}finally{_=null,R=ae,M=!1}J=void 0}}finally{J?Re():U=!1}}}var Re;if(typeof Z=="function")Re=function(){Z(Ce)};else if(typeof MessageChannel<"u"){var pt=new MessageChannel,Dt=pt.port2;pt.port1.onmessage=Ce,Re=function(){Dt.postMessage(null)}}else Re=function(){k(Ce,0)};function Le(B,J){V=k(function(){B(i.unstable_now())},J)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(B){B.callback=null},i.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<B?Math.floor(1e3/B):5},i.unstable_getCurrentPriorityLevel=function(){return R},i.unstable_next=function(B){switch(R){case 1:case 2:case 3:var J=3;break;default:J=R}var ae=R;R=J;try{return B()}finally{R=ae}},i.unstable_requestPaint=function(){K=!0},i.unstable_runWithPriority=function(B,J){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ae=R;R=B;try{return J()}finally{R=ae}},i.unstable_scheduleCallback=function(B,J,ae){var me=i.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?me+ae:me):ae=me,B){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=ae+j,B={id:w++,callback:J,priorityLevel:B,startTime:ae,expirationTime:j,sortIndex:-1},ae>me?(B.sortIndex=ae,o(g,B),c(b)===null&&B===c(g)&&(Y?(Q(V),V=-1):Y=!0,Le(O,ae-me))):(B.sortIndex=j,o(b,B),X||M||(X=!0,U||(U=!0,Re()))),B},i.unstable_shouldYield=ne,i.unstable_wrapCallback=function(B){var J=R;return function(){var ae=R;R=J;try{return B.apply(this,arguments)}finally{R=ae}}}}(tu)),tu}var ap;function Db(){return ap||(ap=1,eu.exports=Ab()),eu.exports}var nu={exports:{}},st={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip;function Rb(){if(ip)return st;ip=1;var i=Lu();function o(b){var g="https://react.dev/errors/"+b;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)g+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+b+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var u={d:{f:c,r:function(){throw Error(o(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function h(b,g,w){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:_==null?null:""+_,children:b,containerInfo:g,implementation:w}}var y=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function S(b,g){if(b==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return st.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,st.createPortal=function(b,g){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(o(299));return h(b,g,null,w)},st.flushSync=function(b){var g=y.T,w=u.p;try{if(y.T=null,u.p=2,b)return b()}finally{y.T=g,u.p=w,u.d.f()}},st.preconnect=function(b,g){typeof b=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,u.d.C(b,g))},st.prefetchDNS=function(b){typeof b=="string"&&u.d.D(b)},st.preinit=function(b,g){if(typeof b=="string"&&g&&typeof g.as=="string"){var w=g.as,_=S(w,g.crossOrigin),R=typeof g.integrity=="string"?g.integrity:void 0,M=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;w==="style"?u.d.S(b,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:_,integrity:R,fetchPriority:M}):w==="script"&&u.d.X(b,{crossOrigin:_,integrity:R,fetchPriority:M,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},st.preinitModule=function(b,g){if(typeof b=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var w=S(g.as,g.crossOrigin);u.d.M(b,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&u.d.M(b)},st.preload=function(b,g){if(typeof b=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var w=g.as,_=S(w,g.crossOrigin);u.d.L(b,w,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},st.preloadModule=function(b,g){if(typeof b=="string")if(g){var w=S(g.as,g.crossOrigin);u.d.m(b,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else u.d.m(b)},st.requestFormReset=function(b){u.d.r(b)},st.unstable_batchedUpdates=function(b,g){return b(g)},st.useFormState=function(b,g,w){return y.H.useFormState(b,g,w)},st.useFormStatus=function(){return y.H.useHostTransitionStatus()},st.version="19.1.1",st}var lp;function Ob(){if(lp)return nu.exports;lp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(o){console.error(o)}}return i(),nu.exports=Rb(),nu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rp;function kb(){if(rp)return Al;rp=1;var i=Db(),o=Lu(),c=Ob();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function S(e){if(h(e)!==e)throw Error(u(188))}function b(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var r=l.alternate;if(r===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===n)return S(l),e;if(r===a)return S(l),t;r=r.sibling}throw Error(u(188))}if(n.return!==a.return)n=l,a=r;else{for(var m=!1,p=l.child;p;){if(p===n){m=!0,n=l,a=r;break}if(p===a){m=!0,a=l,n=r;break}p=p.sibling}if(!m){for(p=r.child;p;){if(p===n){m=!0,n=r,a=l;break}if(p===a){m=!0,a=r,n=l;break}p=p.sibling}if(!m)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,_=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),Q=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),se=Symbol.for("react.activity"),ne=Symbol.for("react.memo_cache_sentinel"),Ce=Symbol.iterator;function Re(e){return e===null||typeof e!="object"?null:(e=Ce&&e[Ce]||e["@@iterator"],typeof e=="function"?e:null)}var pt=Symbol.for("react.client.reference");function Dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===pt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case K:return"Profiler";case Y:return"StrictMode";case O:return"Suspense";case U:return"SuspenseList";case se:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case Z:return(e.displayName||"Context")+".Provider";case Q:return(e._context.displayName||"Context")+".Consumer";case q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return t=e.displayName||null,t!==null?t:Dt(e.type)||"Memo";case te:t=e._payload,e=e._init;try{return Dt(e(t))}catch{}}return null}var Le=Array.isArray,B=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},me=[],j=-1;function G(e){return{current:e}}function P(e){0>j||(e.current=me[j],me[j]=null,j--)}function I(e,t){j++,me[j]=e.current,e.current=t}var ee=G(null),he=G(null),le=G(null),Ze=G(null);function ve(e,t){switch(I(le,t),I(he,e),I(ee,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Th(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Th(t),e=_h(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P(ee),I(ee,e)}function lt(){P(ee),P(he),P(le)}function ea(e){e.memoizedState!==null&&I(Ze,e);var t=ee.current,n=_h(t,e.type);t!==n&&(I(he,e),I(ee,n))}function cn(e){he.current===e&&(P(ee),P(he)),Ze.current===e&&(P(Ze),zl._currentValue=ae)}var Rt=Object.prototype.hasOwnProperty,Uo=i.unstable_scheduleCallback,Ho=i.unstable_cancelCallback,i1=i.unstable_shouldYield,l1=i.unstable_requestPaint,Wt=i.unstable_now,r1=i.unstable_getCurrentPriorityLevel,ld=i.unstable_ImmediatePriority,rd=i.unstable_UserBlockingPriority,Vl=i.unstable_NormalPriority,o1=i.unstable_LowPriority,od=i.unstable_IdlePriority,s1=i.log,c1=i.unstable_setDisableYieldValue,Ri=null,St=null;function En(e){if(typeof s1=="function"&&c1(e),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(Ri,e)}catch{}}var wt=Math.clz32?Math.clz32:f1,u1=Math.log,d1=Math.LN2;function f1(e){return e>>>=0,e===0?32:31-(u1(e)/d1|0)|0}var Kl=256,Pl=4194304;function ta(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Jl(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,r=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var p=a&134217727;return p!==0?(a=p&~r,a!==0?l=ta(a):(m&=p,m!==0?l=ta(m):n||(n=p&~e,n!==0&&(l=ta(n))))):(p=a&~r,p!==0?l=ta(p):m!==0?l=ta(m):n||(n=a&~e,n!==0&&(l=ta(n)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:l}function Oi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function m1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sd(){var e=Kl;return Kl<<=1,(Kl&4194048)===0&&(Kl=256),e}function cd(){var e=Pl;return Pl<<=1,(Pl&62914560)===0&&(Pl=4194304),e}function Lo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ki(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function h1(e,t,n,a,l,r){var m=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var p=e.entanglements,v=e.expirationTimes,C=e.hiddenUpdates;for(n=m&~n;0<n;){var N=31-wt(n),L=1<<N;p[N]=0,v[N]=-1;var A=C[N];if(A!==null)for(C[N]=null,N=0;N<A.length;N++){var D=A[N];D!==null&&(D.lane&=-536870913)}n&=~L}a!==0&&ud(e,a,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(m&~t))}function ud(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-wt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function dd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-wt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function qo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Go(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function fd(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:Zh(e.type))}function p1(e,t){var n=J.p;try{return J.p=e,t()}finally{J.p=n}}var Cn=Math.random().toString(36).slice(2),rt="__reactFiber$"+Cn,gt="__reactProps$"+Cn,za="__reactContainer$"+Cn,Yo="__reactEvents$"+Cn,g1="__reactListeners$"+Cn,y1="__reactHandles$"+Cn,md="__reactResources$"+Cn,Mi="__reactMarker$"+Cn;function Xo(e){delete e[rt],delete e[gt],delete e[Yo],delete e[g1],delete e[y1]}function $a(e){var t=e[rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[za]||n[rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Dh(e);e!==null;){if(n=e[rt])return n;e=Dh(e)}return t}e=n,n=e.parentNode}return null}function Ta(e){if(e=e[rt]||e[za]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Bi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function _a(e){var t=e[md];return t||(t=e[md]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ve(e){e[Mi]=!0}var hd=new Set,pd={};function na(e,t){Ea(e,t),Ea(e+"Capture",t)}function Ea(e,t){for(pd[e]=t,e=0;e<t.length;e++)hd.add(t[e])}var b1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gd={},yd={};function x1(e){return Rt.call(yd,e)?!0:Rt.call(gd,e)?!1:b1.test(e)?yd[e]=!0:(gd[e]=!0,!1)}function Il(e,t,n){if(x1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Fl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function un(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var Qo,bd;function Ca(e){if(Qo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qo=t&&t[1]||"",bd=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qo+e+bd}var Zo=!1;function Vo(e,t){if(!e||Zo)return"";Zo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(D){var A=D}Reflect.construct(e,[],L)}else{try{L.call()}catch(D){A=D}e.call(L.prototype)}}else{try{throw Error()}catch(D){A=D}(L=e())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(D){if(D&&A&&typeof D.stack=="string")return[D.stack,A.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),m=r[0],p=r[1];if(m&&p){var v=m.split(`
`),C=p.split(`
`);for(l=a=0;a<v.length&&!v[a].includes("DetermineComponentFrameRoot");)a++;for(;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;if(a===v.length||l===C.length)for(a=v.length-1,l=C.length-1;1<=a&&0<=l&&v[a]!==C[l];)l--;for(;1<=a&&0<=l;a--,l--)if(v[a]!==C[l]){if(a!==1||l!==1)do if(a--,l--,0>l||v[a]!==C[l]){var N=`
`+v[a].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=a&&0<=l);break}}}finally{Zo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ca(n):""}function v1(e){switch(e.tag){case 26:case 27:case 5:return Ca(e.type);case 16:return Ca("Lazy");case 13:return Ca("Suspense");case 19:return Ca("SuspenseList");case 0:case 15:return Vo(e.type,!1);case 11:return Vo(e.type.render,!1);case 1:return Vo(e.type,!0);case 31:return Ca("Activity");default:return""}}function xd(e){try{var t="";do t+=v1(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Ot(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function S1(e){var t=vd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(m){a=""+m,r.call(this,m)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wl(e){e._valueTracker||(e._valueTracker=S1(e))}function Sd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=vd(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function er(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var w1=/[\n"\\]/g;function kt(e){return e.replace(w1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ko(e,t,n,a,l,r,m,p){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ot(t)):e.value!==""+Ot(t)&&(e.value=""+Ot(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?Po(e,m,Ot(t)):n!=null?Po(e,m,Ot(n)):a!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+Ot(p):e.removeAttribute("name")}function wd(e,t,n,a,l,r,m,p){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+Ot(n):"",t=t!=null?""+Ot(t):n,p||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=p?e.checked:!!a,e.defaultChecked=!!a,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m)}function Po(e,t,n){t==="number"&&er(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Aa(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Ot(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function jd(e,t,n){if(t!=null&&(t=""+Ot(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ot(n):""}function zd(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(Le(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Ot(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function Da(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var j1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $d(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||j1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Td(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&$d(e,l,a)}else for(var r in t)t.hasOwnProperty(r)&&$d(e,r,t[r])}function Jo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var z1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tr(e){return $1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Io=null;function Fo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ra=null,Oa=null;function _d(e){var t=Ta(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ko(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+kt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[gt]||null;if(!l)throw Error(u(90));Ko(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Sd(a)}break e;case"textarea":jd(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Aa(e,!!n.multiple,t,!1)}}}var Wo=!1;function Ed(e,t,n){if(Wo)return e(t,n);Wo=!0;try{var a=e(t);return a}finally{if(Wo=!1,(Ra!==null||Oa!==null)&&(Lr(),Ra&&(t=Ra,e=Oa,Oa=Ra=null,_d(t),e)))for(t=0;t<e.length;t++)_d(e[t])}}function Ni(e,t){var n=e.stateNode;if(n===null)return null;var a=n[gt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),es=!1;if(dn)try{var Ui={};Object.defineProperty(Ui,"passive",{get:function(){es=!0}}),window.addEventListener("test",Ui,Ui),window.removeEventListener("test",Ui,Ui)}catch{es=!1}var An=null,ts=null,nr=null;function Cd(){if(nr)return nr;var e,t=ts,n=t.length,a,l="value"in An?An.value:An.textContent,r=l.length;for(e=0;e<n&&t[e]===l[e];e++);var m=n-e;for(a=1;a<=m&&t[n-a]===l[r-a];a++);return nr=l.slice(e,1<a?1-a:void 0)}function ar(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ir(){return!0}function Ad(){return!1}function yt(e){function t(n,a,l,r,m){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=r,this.target=m,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(r):r[p]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ir:Ad,this.isPropagationStopped=Ad,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ir)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ir)},persist:function(){},isPersistent:ir}),t}var aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lr=yt(aa),Hi=w({},aa,{view:0,detail:0}),T1=yt(Hi),ns,as,Li,rr=w({},Hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ls,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Li&&(Li&&e.type==="mousemove"?(ns=e.screenX-Li.screenX,as=e.screenY-Li.screenY):as=ns=0,Li=e),ns)},movementY:function(e){return"movementY"in e?e.movementY:as}}),Dd=yt(rr),_1=w({},rr,{dataTransfer:0}),E1=yt(_1),C1=w({},Hi,{relatedTarget:0}),is=yt(C1),A1=w({},aa,{animationName:0,elapsedTime:0,pseudoElement:0}),D1=yt(A1),R1=w({},aa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),O1=yt(R1),k1=w({},aa,{data:0}),Rd=yt(k1),M1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function U1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=N1[e])?!!t[e]:!1}function ls(){return U1}var H1=w({},Hi,{key:function(e){if(e.key){var t=M1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?B1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ls,charCode:function(e){return e.type==="keypress"?ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),L1=yt(H1),q1=w({},rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Od=yt(q1),G1=w({},Hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ls}),Y1=yt(G1),X1=w({},aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q1=yt(X1),Z1=w({},rr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),V1=yt(Z1),K1=w({},aa,{newState:0,oldState:0}),P1=yt(K1),J1=[9,13,27,32],rs=dn&&"CompositionEvent"in window,qi=null;dn&&"documentMode"in document&&(qi=document.documentMode);var I1=dn&&"TextEvent"in window&&!qi,kd=dn&&(!rs||qi&&8<qi&&11>=qi),Md=" ",Bd=!1;function Nd(e,t){switch(e){case"keyup":return J1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ud(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ka=!1;function F1(e,t){switch(e){case"compositionend":return Ud(t);case"keypress":return t.which!==32?null:(Bd=!0,Md);case"textInput":return e=t.data,e===Md&&Bd?null:e;default:return null}}function W1(e,t){if(ka)return e==="compositionend"||!rs&&Nd(e,t)?(e=Cd(),nr=ts=An=null,ka=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kd&&t.locale!=="ko"?null:t.data;default:return null}}var ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ey[e.type]:t==="textarea"}function Ld(e,t,n,a){Ra?Oa?Oa.push(a):Oa=[a]:Ra=a,t=Zr(t,"onChange"),0<t.length&&(n=new lr("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Gi=null,Yi=null;function ty(e){Sh(e,0)}function or(e){var t=Bi(e);if(Sd(t))return e}function qd(e,t){if(e==="change")return t}var Gd=!1;if(dn){var os;if(dn){var ss="oninput"in document;if(!ss){var Yd=document.createElement("div");Yd.setAttribute("oninput","return;"),ss=typeof Yd.oninput=="function"}os=ss}else os=!1;Gd=os&&(!document.documentMode||9<document.documentMode)}function Xd(){Gi&&(Gi.detachEvent("onpropertychange",Qd),Yi=Gi=null)}function Qd(e){if(e.propertyName==="value"&&or(Yi)){var t=[];Ld(t,Yi,e,Fo(e)),Ed(ty,t)}}function ny(e,t,n){e==="focusin"?(Xd(),Gi=t,Yi=n,Gi.attachEvent("onpropertychange",Qd)):e==="focusout"&&Xd()}function ay(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return or(Yi)}function iy(e,t){if(e==="click")return or(t)}function ly(e,t){if(e==="input"||e==="change")return or(t)}function ry(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:ry;function Xi(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!Rt.call(t,l)||!jt(e[l],t[l]))return!1}return!0}function Zd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vd(e,t){var n=Zd(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zd(n)}}function Kd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=er(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=er(e.document)}return t}function cs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var oy=dn&&"documentMode"in document&&11>=document.documentMode,Ma=null,us=null,Qi=null,ds=!1;function Jd(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ds||Ma==null||Ma!==er(a)||(a=Ma,"selectionStart"in a&&cs(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Qi&&Xi(Qi,a)||(Qi=a,a=Zr(us,"onSelect"),0<a.length&&(t=new lr("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ma)))}function ia(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ba={animationend:ia("Animation","AnimationEnd"),animationiteration:ia("Animation","AnimationIteration"),animationstart:ia("Animation","AnimationStart"),transitionrun:ia("Transition","TransitionRun"),transitionstart:ia("Transition","TransitionStart"),transitioncancel:ia("Transition","TransitionCancel"),transitionend:ia("Transition","TransitionEnd")},fs={},Id={};dn&&(Id=document.createElement("div").style,"AnimationEvent"in window||(delete Ba.animationend.animation,delete Ba.animationiteration.animation,delete Ba.animationstart.animation),"TransitionEvent"in window||delete Ba.transitionend.transition);function la(e){if(fs[e])return fs[e];if(!Ba[e])return e;var t=Ba[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Id)return fs[e]=t[n];return e}var Fd=la("animationend"),Wd=la("animationiteration"),ef=la("animationstart"),sy=la("transitionrun"),cy=la("transitionstart"),uy=la("transitioncancel"),tf=la("transitionend"),nf=new Map,ms="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ms.push("scrollEnd");function Xt(e,t){nf.set(e,t),na(t,[e])}var af=new WeakMap;function Mt(e,t){if(typeof e=="object"&&e!==null){var n=af.get(e);return n!==void 0?n:(t={value:e,source:t,stack:xd(t)},af.set(e,t),t)}return{value:e,source:t,stack:xd(t)}}var Bt=[],Na=0,hs=0;function sr(){for(var e=Na,t=hs=Na=0;t<e;){var n=Bt[t];Bt[t++]=null;var a=Bt[t];Bt[t++]=null;var l=Bt[t];Bt[t++]=null;var r=Bt[t];if(Bt[t++]=null,a!==null&&l!==null){var m=a.pending;m===null?l.next=l:(l.next=m.next,m.next=l),a.pending=l}r!==0&&lf(n,l,r)}}function cr(e,t,n,a){Bt[Na++]=e,Bt[Na++]=t,Bt[Na++]=n,Bt[Na++]=a,hs|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function ps(e,t,n,a){return cr(e,t,n,a),ur(e)}function Ua(e,t){return cr(e,null,null,t),ur(e)}function lf(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,r=e.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-wt(n),e=r.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),r):null}function ur(e){if(50<gl)throw gl=0,Sc=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ha={};function dy(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,n,a){return new dy(e,t,n,a)}function gs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fn(e,t){var n=e.alternate;return n===null?(n=zt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function rf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function dr(e,t,n,a,l,r){var m=0;if(a=e,typeof e=="function")gs(e)&&(m=1);else if(typeof e=="string")m=mb(e,n,ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case se:return e=zt(31,n,t,l),e.elementType=se,e.lanes=r,e;case X:return ra(n.children,l,r,t);case Y:m=8,l|=24;break;case K:return e=zt(12,n,t,l|2),e.elementType=K,e.lanes=r,e;case O:return e=zt(13,n,t,l),e.elementType=O,e.lanes=r,e;case U:return e=zt(19,n,t,l),e.elementType=U,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case k:case Z:m=10;break e;case Q:m=9;break e;case q:m=11;break e;case V:m=14;break e;case te:m=16,a=null;break e}m=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=zt(m,n,t,l),t.elementType=e,t.type=a,t.lanes=r,t}function ra(e,t,n,a){return e=zt(7,e,a,t),e.lanes=n,e}function ys(e,t,n){return e=zt(6,e,null,t),e.lanes=n,e}function bs(e,t,n){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var La=[],qa=0,fr=null,mr=0,Nt=[],Ut=0,oa=null,mn=1,hn="";function sa(e,t){La[qa++]=mr,La[qa++]=fr,fr=e,mr=t}function of(e,t,n){Nt[Ut++]=mn,Nt[Ut++]=hn,Nt[Ut++]=oa,oa=e;var a=mn;e=hn;var l=32-wt(a)-1;a&=~(1<<l),n+=1;var r=32-wt(t)+l;if(30<r){var m=l-l%5;r=(a&(1<<m)-1).toString(32),a>>=m,l-=m,mn=1<<32-wt(t)+l|n<<l|a,hn=r+e}else mn=1<<r|n<<l|a,hn=e}function xs(e){e.return!==null&&(sa(e,1),of(e,1,0))}function vs(e){for(;e===fr;)fr=La[--qa],La[qa]=null,mr=La[--qa],La[qa]=null;for(;e===oa;)oa=Nt[--Ut],Nt[Ut]=null,hn=Nt[--Ut],Nt[Ut]=null,mn=Nt[--Ut],Nt[Ut]=null}var dt=null,Be=null,xe=!1,ca=null,en=!1,Ss=Error(u(519));function ua(e){var t=Error(u(418,""));throw Ki(Mt(t,e)),Ss}function sf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[rt]=e,t[gt]=a,n){case"dialog":ge("cancel",t),ge("close",t);break;case"iframe":case"object":case"embed":ge("load",t);break;case"video":case"audio":for(n=0;n<bl.length;n++)ge(bl[n],t);break;case"source":ge("error",t);break;case"img":case"image":case"link":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"input":ge("invalid",t),wd(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Wl(t);break;case"select":ge("invalid",t);break;case"textarea":ge("invalid",t),zd(t,a.value,a.defaultValue,a.children),Wl(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||$h(t.textContent,n)?(a.popover!=null&&(ge("beforetoggle",t),ge("toggle",t)),a.onScroll!=null&&ge("scroll",t),a.onScrollEnd!=null&&ge("scrollend",t),a.onClick!=null&&(t.onclick=Vr),t=!0):t=!1,t||ua(e)}function cf(e){for(dt=e.return;dt;)switch(dt.tag){case 5:case 13:en=!1;return;case 27:case 3:en=!0;return;default:dt=dt.return}}function Zi(e){if(e!==dt)return!1;if(!xe)return cf(e),xe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Nc(e.type,e.memoizedProps)),n=!n),n&&Be&&ua(e),cf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Be=Zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Be=null}}else t===27?(t=Be,Zn(e.type)?(e=qc,qc=null,Be=e):Be=t):Be=dt?Zt(e.stateNode.nextSibling):null;return!0}function Vi(){Be=dt=null,xe=!1}function uf(){var e=ca;return e!==null&&(vt===null?vt=e:vt.push.apply(vt,e),ca=null),e}function Ki(e){ca===null?ca=[e]:ca.push(e)}var ws=G(null),da=null,pn=null;function Dn(e,t,n){I(ws,t._currentValue),t._currentValue=n}function gn(e){e._currentValue=ws.current,P(ws)}function js(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function zs(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var m=l.child;r=r.firstContext;e:for(;r!==null;){var p=r;r=l;for(var v=0;v<t.length;v++)if(p.context===t[v]){r.lanes|=n,p=r.alternate,p!==null&&(p.lanes|=n),js(r.return,n,e),a||(m=null);break e}r=p.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(u(341));m.lanes|=n,r=m.alternate,r!==null&&(r.lanes|=n),js(m,n,e),m=null}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===e){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function Pi(e,t,n,a){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(u(387));if(m=m.memoizedProps,m!==null){var p=l.type;jt(l.pendingProps.value,m.value)||(e!==null?e.push(p):e=[p])}}else if(l===Ze.current){if(m=l.alternate,m===null)throw Error(u(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(zl):e=[zl])}l=l.return}e!==null&&zs(t,e,n,a),t.flags|=262144}function hr(e){for(e=e.firstContext;e!==null;){if(!jt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fa(e){da=e,pn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ot(e){return df(da,e)}function pr(e,t){return da===null&&fa(e),df(e,t)}function df(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},pn===null){if(e===null)throw Error(u(308));pn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else pn=pn.next=t;return n}var fy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},my=i.unstable_scheduleCallback,hy=i.unstable_NormalPriority,Xe={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $s(){return{controller:new fy,data:new Map,refCount:0}}function Ji(e){e.refCount--,e.refCount===0&&my(hy,function(){e.controller.abort()})}var Ii=null,Ts=0,Ga=0,Ya=null;function py(e,t){if(Ii===null){var n=Ii=[];Ts=0,Ga=Ec(),Ya={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Ts++,t.then(ff,ff),t}function ff(){if(--Ts===0&&Ii!==null){Ya!==null&&(Ya.status="fulfilled");var e=Ii;Ii=null,Ga=0,Ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function gy(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var mf=B.S;B.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&py(e,t),mf!==null&&mf(e,t)};var ma=G(null);function _s(){var e=ma.current;return e!==null?e:Ae.pooledCache}function gr(e,t){t===null?I(ma,ma.current):I(ma,t.pool)}function hf(){var e=_s();return e===null?null:{parent:Xe._currentValue,pool:e}}var Fi=Error(u(460)),pf=Error(u(474)),yr=Error(u(542)),Es={then:function(){}};function gf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function br(){}function yf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(br,br),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,xf(e),e;default:if(typeof t.status=="string")t.then(br,br);else{if(e=Ae,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,xf(e),e}throw Wi=t,Fi}}var Wi=null;function bf(){if(Wi===null)throw Error(u(459));var e=Wi;return Wi=null,e}function xf(e){if(e===Fi||e===yr)throw Error(u(483))}var Rn=!1;function Cs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function As(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function On(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function kn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(we&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=ur(e),lf(e,null,n),t}return cr(e,a,t,n),ur(e)}function el(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,dd(e,n)}}function Ds(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?l=r=m:r=r.next=m,n=n.next}while(n!==null);r===null?l=r=t:r=r.next=t}else l=r=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Rs=!1;function tl(){if(Rs){var e=Ya;if(e!==null)throw e}}function nl(e,t,n,a){Rs=!1;var l=e.updateQueue;Rn=!1;var r=l.firstBaseUpdate,m=l.lastBaseUpdate,p=l.shared.pending;if(p!==null){l.shared.pending=null;var v=p,C=v.next;v.next=null,m===null?r=C:m.next=C,m=v;var N=e.alternate;N!==null&&(N=N.updateQueue,p=N.lastBaseUpdate,p!==m&&(p===null?N.firstBaseUpdate=C:p.next=C,N.lastBaseUpdate=v))}if(r!==null){var L=l.baseState;m=0,N=C=v=null,p=r;do{var A=p.lane&-536870913,D=A!==p.lane;if(D?(ye&A)===A:(a&A)===A){A!==0&&A===Ga&&(Rs=!0),N!==null&&(N=N.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var oe=e,ie=p;A=t;var Te=n;switch(ie.tag){case 1:if(oe=ie.payload,typeof oe=="function"){L=oe.call(Te,L,A);break e}L=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ie.payload,A=typeof oe=="function"?oe.call(Te,L,A):oe,A==null)break e;L=w({},L,A);break e;case 2:Rn=!0}}A=p.callback,A!==null&&(e.flags|=64,D&&(e.flags|=8192),D=l.callbacks,D===null?l.callbacks=[A]:D.push(A))}else D={lane:A,tag:p.tag,payload:p.payload,callback:p.callback,next:null},N===null?(C=N=D,v=L):N=N.next=D,m|=A;if(p=p.next,p===null){if(p=l.shared.pending,p===null)break;D=p,p=D.next,D.next=null,l.lastBaseUpdate=D,l.shared.pending=null}}while(!0);N===null&&(v=L),l.baseState=v,l.firstBaseUpdate=C,l.lastBaseUpdate=N,r===null&&(l.shared.lanes=0),Gn|=m,e.lanes=m,e.memoizedState=L}}function vf(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Sf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)vf(n[e],t)}var Xa=G(null),xr=G(0);function wf(e,t){e=jn,I(xr,e),I(Xa,t),jn=e|t.baseLanes}function Os(){I(xr,jn),I(Xa,Xa.current)}function ks(){jn=xr.current,P(Xa),P(xr)}var Mn=0,de=null,ze=null,qe=null,vr=!1,Qa=!1,ha=!1,Sr=0,al=0,Za=null,yy=0;function Ue(){throw Error(u(321))}function Ms(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jt(e[n],t[n]))return!1;return!0}function Bs(e,t,n,a,l,r){return Mn=r,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?lm:rm,ha=!1,r=n(a,l),ha=!1,Qa&&(r=zf(t,n,a,l)),jf(e),r}function jf(e){B.H=_r;var t=ze!==null&&ze.next!==null;if(Mn=0,qe=ze=de=null,vr=!1,al=0,Za=null,t)throw Error(u(300));e===null||Ke||(e=e.dependencies,e!==null&&hr(e)&&(Ke=!0))}function zf(e,t,n,a){de=e;var l=0;do{if(Qa&&(Za=null),al=0,Qa=!1,25<=l)throw Error(u(301));if(l+=1,qe=ze=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}B.H=zy,r=t(n,a)}while(Qa);return r}function by(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?il(t):t,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(de.flags|=1024),t}function Ns(){var e=Sr!==0;return Sr=0,e}function Us(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Hs(e){if(vr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vr=!1}Mn=0,qe=ze=de=null,Qa=!1,al=Sr=0,Za=null}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?de.memoizedState=qe=e:qe=qe.next=e,qe}function Ge(){if(ze===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=qe===null?de.memoizedState:qe.next;if(t!==null)qe=t,ze=e;else{if(e===null)throw de.alternate===null?Error(u(467)):Error(u(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},qe===null?de.memoizedState=qe=e:qe=qe.next=e}return qe}function Ls(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function il(e){var t=al;return al+=1,Za===null&&(Za=[]),e=yf(Za,e,t),t=de,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?lm:rm),e}function wr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return il(e);if(e.$$typeof===Z)return ot(e)}throw Error(u(438,String(e)))}function qs(e){var t=null,n=de.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=de.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ls(),de.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=ne;return t.index++,n}function yn(e,t){return typeof t=="function"?t(e):t}function jr(e){var t=Ge();return Gs(t,ze,e)}function Gs(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var l=e.baseQueue,r=a.pending;if(r!==null){if(l!==null){var m=l.next;l.next=r.next,r.next=m}t.baseQueue=l=r,a.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var p=m=null,v=null,C=t,N=!1;do{var L=C.lane&-536870913;if(L!==C.lane?(ye&L)===L:(Mn&L)===L){var A=C.revertLane;if(A===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),L===Ga&&(N=!0);else if((Mn&A)===A){C=C.next,A===Ga&&(N=!0);continue}else L={lane:0,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},v===null?(p=v=L,m=r):v=v.next=L,de.lanes|=A,Gn|=A;L=C.action,ha&&n(r,L),r=C.hasEagerState?C.eagerState:n(r,L)}else A={lane:L,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},v===null?(p=v=A,m=r):v=v.next=A,de.lanes|=L,Gn|=L;C=C.next}while(C!==null&&C!==t);if(v===null?m=r:v.next=p,!jt(r,e.memoizedState)&&(Ke=!0,N&&(n=Ya,n!==null)))throw n;e.memoizedState=r,e.baseState=m,e.baseQueue=v,a.lastRenderedState=r}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Ys(e){var t=Ge(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,r=t.memoizedState;if(l!==null){n.pending=null;var m=l=l.next;do r=e(r,m.action),m=m.next;while(m!==l);jt(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function $f(e,t,n){var a=de,l=Ge(),r=xe;if(r){if(n===void 0)throw Error(u(407));n=n()}else n=t();var m=!jt((ze||l).memoizedState,n);m&&(l.memoizedState=n,Ke=!0),l=l.queue;var p=Ef.bind(null,a,l,e);if(ll(2048,8,p,[e]),l.getSnapshot!==t||m||qe!==null&&qe.memoizedState.tag&1){if(a.flags|=2048,Va(9,zr(),_f.bind(null,a,l,n,t),null),Ae===null)throw Error(u(349));r||(Mn&124)!==0||Tf(a,t,n)}return n}function Tf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t=Ls(),de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _f(e,t,n,a){t.value=n,t.getSnapshot=a,Cf(t)&&Af(e)}function Ef(e,t,n){return n(function(){Cf(t)&&Af(e)})}function Cf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jt(e,n)}catch{return!0}}function Af(e){var t=Ua(e,2);t!==null&&Ct(t,e,2)}function Xs(e){var t=bt();if(typeof e=="function"){var n=e;if(e=n(),ha){En(!0);try{n()}finally{En(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:e},t}function Df(e,t,n,a){return e.baseState=n,Gs(e,ze,typeof a=="function"?a:yn)}function xy(e,t,n,a,l){if(Tr(e))throw Error(u(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){r.listeners.push(m)}};B.T!==null?n(!0):r.isTransition=!1,a(r),n=t.pending,n===null?(r.next=t.pending=r,Rf(t,r)):(r.next=n.next,t.pending=n.next=r)}}function Rf(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var r=B.T,m={};B.T=m;try{var p=n(l,a),v=B.S;v!==null&&v(m,p),Of(e,t,p)}catch(C){Qs(e,t,C)}finally{B.T=r}}else try{r=n(l,a),Of(e,t,r)}catch(C){Qs(e,t,C)}}function Of(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){kf(e,t,a)},function(a){return Qs(e,t,a)}):kf(e,t,n)}function kf(e,t,n){t.status="fulfilled",t.value=n,Mf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Rf(e,n)))}function Qs(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Mf(t),t=t.next;while(t!==a)}e.action=null}function Mf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Bf(e,t){return t}function Nf(e,t){if(xe){var n=Ae.formState;if(n!==null){e:{var a=de;if(xe){if(Be){t:{for(var l=Be,r=en;l.nodeType!==8;){if(!r){l=null;break t}if(l=Zt(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){Be=Zt(l.nextSibling),a=l.data==="F!";break e}}ua(a)}a=!1}a&&(t=n[0])}}return n=bt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bf,lastRenderedState:t},n.queue=a,n=nm.bind(null,de,a),a.dispatch=n,a=Xs(!1),r=Js.bind(null,de,!1,a.queue),a=bt(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=xy.bind(null,de,l,r,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function Uf(e){var t=Ge();return Hf(t,ze,e)}function Hf(e,t,n){if(t=Gs(e,t,Bf)[0],e=jr(yn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=il(t)}catch(m){throw m===Fi?yr:m}else a=t;t=Ge();var l=t.queue,r=l.dispatch;return n!==t.memoizedState&&(de.flags|=2048,Va(9,zr(),vy.bind(null,l,n),null)),[a,r,e]}function vy(e,t){e.action=t}function Lf(e){var t=Ge(),n=ze;if(n!==null)return Hf(t,n,e);Ge(),t=t.memoizedState,n=Ge();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Va(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=de.updateQueue,t===null&&(t=Ls(),de.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function zr(){return{destroy:void 0,resource:void 0}}function qf(){return Ge().memoizedState}function $r(e,t,n,a){var l=bt();a=a===void 0?null:a,de.flags|=e,l.memoizedState=Va(1|t,zr(),n,a)}function ll(e,t,n,a){var l=Ge();a=a===void 0?null:a;var r=l.memoizedState.inst;ze!==null&&a!==null&&Ms(a,ze.memoizedState.deps)?l.memoizedState=Va(t,r,n,a):(de.flags|=e,l.memoizedState=Va(1|t,r,n,a))}function Gf(e,t){$r(8390656,8,e,t)}function Yf(e,t){ll(2048,8,e,t)}function Xf(e,t){return ll(4,2,e,t)}function Qf(e,t){return ll(4,4,e,t)}function Zf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vf(e,t,n){n=n!=null?n.concat([e]):null,ll(4,4,Zf.bind(null,t,e),n)}function Zs(){}function Kf(e,t){var n=Ge();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Ms(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Pf(e,t){var n=Ge();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Ms(t,a[1]))return a[0];if(a=e(),ha){En(!0);try{e()}finally{En(!1)}}return n.memoizedState=[a,t],a}function Vs(e,t,n){return n===void 0||(Mn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Fm(),de.lanes|=e,Gn|=e,n)}function Jf(e,t,n,a){return jt(n,t)?n:Xa.current!==null?(e=Vs(e,n,a),jt(e,t)||(Ke=!0),e):(Mn&42)===0?(Ke=!0,e.memoizedState=n):(e=Fm(),de.lanes|=e,Gn|=e,t)}function If(e,t,n,a,l){var r=J.p;J.p=r!==0&&8>r?r:8;var m=B.T,p={};B.T=p,Js(e,!1,t,n);try{var v=l(),C=B.S;if(C!==null&&C(p,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var N=gy(v,a);rl(e,t,N,Et(e))}else rl(e,t,a,Et(e))}catch(L){rl(e,t,{then:function(){},status:"rejected",reason:L},Et())}finally{J.p=r,B.T=m}}function Sy(){}function Ks(e,t,n,a){if(e.tag!==5)throw Error(u(476));var l=Ff(e).queue;If(e,l,t,ae,n===null?Sy:function(){return Wf(e),n(a)})}function Ff(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:ae},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Wf(e){var t=Ff(e).next.queue;rl(e,t,{},Et())}function Ps(){return ot(zl)}function em(){return Ge().memoizedState}function tm(){return Ge().memoizedState}function wy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Et();e=On(n);var a=kn(t,e,n);a!==null&&(Ct(a,t,n),el(a,t,n)),t={cache:$s()},e.payload=t;return}t=t.return}}function jy(e,t,n){var a=Et();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Tr(e)?am(t,n):(n=ps(e,t,n,a),n!==null&&(Ct(n,e,a),im(n,t,a)))}function nm(e,t,n){var a=Et();rl(e,t,n,a)}function rl(e,t,n,a){var l={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tr(e))am(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var m=t.lastRenderedState,p=r(m,n);if(l.hasEagerState=!0,l.eagerState=p,jt(p,m))return cr(e,t,l,0),Ae===null&&sr(),!1}catch{}finally{}if(n=ps(e,t,l,a),n!==null)return Ct(n,e,a),im(n,t,a),!0}return!1}function Js(e,t,n,a){if(a={lane:2,revertLane:Ec(),action:a,hasEagerState:!1,eagerState:null,next:null},Tr(e)){if(t)throw Error(u(479))}else t=ps(e,n,a,2),t!==null&&Ct(t,e,2)}function Tr(e){var t=e.alternate;return e===de||t!==null&&t===de}function am(e,t){Qa=vr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function im(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,dd(e,n)}}var _r={readContext:ot,use:wr,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue},lm={readContext:ot,use:wr,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:Gf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,$r(4194308,4,Zf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $r(4194308,4,e,t)},useInsertionEffect:function(e,t){$r(4,2,e,t)},useMemo:function(e,t){var n=bt();t=t===void 0?null:t;var a=e();if(ha){En(!0);try{e()}finally{En(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=bt();if(n!==void 0){var l=n(t);if(ha){En(!0);try{n(t)}finally{En(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=jy.bind(null,de,e),[a.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:function(e){e=Xs(e);var t=e.queue,n=nm.bind(null,de,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Zs,useDeferredValue:function(e,t){var n=bt();return Vs(n,e,t)},useTransition:function(){var e=Xs(!1);return e=If.bind(null,de,e.queue,!0,!1),bt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=de,l=bt();if(xe){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Ae===null)throw Error(u(349));(ye&124)!==0||Tf(a,t,n)}l.memoizedState=n;var r={value:n,getSnapshot:t};return l.queue=r,Gf(Ef.bind(null,a,r,e),[e]),a.flags|=2048,Va(9,zr(),_f.bind(null,a,r,n,t),null),n},useId:function(){var e=bt(),t=Ae.identifierPrefix;if(xe){var n=hn,a=mn;n=(a&~(1<<32-wt(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=Sr++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=yy++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Ps,useFormState:Nf,useActionState:Nf,useOptimistic:function(e){var t=bt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Js.bind(null,de,!0,n),n.dispatch=t,[e,t]},useMemoCache:qs,useCacheRefresh:function(){return bt().memoizedState=wy.bind(null,de)}},rm={readContext:ot,use:wr,useCallback:Kf,useContext:ot,useEffect:Yf,useImperativeHandle:Vf,useInsertionEffect:Xf,useLayoutEffect:Qf,useMemo:Pf,useReducer:jr,useRef:qf,useState:function(){return jr(yn)},useDebugValue:Zs,useDeferredValue:function(e,t){var n=Ge();return Jf(n,ze.memoizedState,e,t)},useTransition:function(){var e=jr(yn)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:il(e),t]},useSyncExternalStore:$f,useId:em,useHostTransitionStatus:Ps,useFormState:Uf,useActionState:Uf,useOptimistic:function(e,t){var n=Ge();return Df(n,ze,e,t)},useMemoCache:qs,useCacheRefresh:tm},zy={readContext:ot,use:wr,useCallback:Kf,useContext:ot,useEffect:Yf,useImperativeHandle:Vf,useInsertionEffect:Xf,useLayoutEffect:Qf,useMemo:Pf,useReducer:Ys,useRef:qf,useState:function(){return Ys(yn)},useDebugValue:Zs,useDeferredValue:function(e,t){var n=Ge();return ze===null?Vs(n,e,t):Jf(n,ze.memoizedState,e,t)},useTransition:function(){var e=Ys(yn)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:il(e),t]},useSyncExternalStore:$f,useId:em,useHostTransitionStatus:Ps,useFormState:Lf,useActionState:Lf,useOptimistic:function(e,t){var n=Ge();return ze!==null?Df(n,ze,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:qs,useCacheRefresh:tm},Ka=null,ol=0;function Er(e){var t=ol;return ol+=1,Ka===null&&(Ka=[]),yf(Ka,e,t)}function sl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Cr(e,t){throw t.$$typeof===_?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function om(e){var t=e._init;return t(e._payload)}function sm(e){function t(T,z){if(e){var E=T.deletions;E===null?(T.deletions=[z],T.flags|=16):E.push(z)}}function n(T,z){if(!e)return null;for(;z!==null;)t(T,z),z=z.sibling;return null}function a(T){for(var z=new Map;T!==null;)T.key!==null?z.set(T.key,T):z.set(T.index,T),T=T.sibling;return z}function l(T,z){return T=fn(T,z),T.index=0,T.sibling=null,T}function r(T,z,E){return T.index=E,e?(E=T.alternate,E!==null?(E=E.index,E<z?(T.flags|=67108866,z):E):(T.flags|=67108866,z)):(T.flags|=1048576,z)}function m(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function p(T,z,E,H){return z===null||z.tag!==6?(z=ys(E,T.mode,H),z.return=T,z):(z=l(z,E),z.return=T,z)}function v(T,z,E,H){var F=E.type;return F===X?N(T,z,E.props.children,H,E.key):z!==null&&(z.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===te&&om(F)===z.type)?(z=l(z,E.props),sl(z,E),z.return=T,z):(z=dr(E.type,E.key,E.props,null,T.mode,H),sl(z,E),z.return=T,z)}function C(T,z,E,H){return z===null||z.tag!==4||z.stateNode.containerInfo!==E.containerInfo||z.stateNode.implementation!==E.implementation?(z=bs(E,T.mode,H),z.return=T,z):(z=l(z,E.children||[]),z.return=T,z)}function N(T,z,E,H,F){return z===null||z.tag!==7?(z=ra(E,T.mode,H,F),z.return=T,z):(z=l(z,E),z.return=T,z)}function L(T,z,E){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=ys(""+z,T.mode,E),z.return=T,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case R:return E=dr(z.type,z.key,z.props,null,T.mode,E),sl(E,z),E.return=T,E;case M:return z=bs(z,T.mode,E),z.return=T,z;case te:var H=z._init;return z=H(z._payload),L(T,z,E)}if(Le(z)||Re(z))return z=ra(z,T.mode,E,null),z.return=T,z;if(typeof z.then=="function")return L(T,Er(z),E);if(z.$$typeof===Z)return L(T,pr(T,z),E);Cr(T,z)}return null}function A(T,z,E,H){var F=z!==null?z.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return F!==null?null:p(T,z,""+E,H);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case R:return E.key===F?v(T,z,E,H):null;case M:return E.key===F?C(T,z,E,H):null;case te:return F=E._init,E=F(E._payload),A(T,z,E,H)}if(Le(E)||Re(E))return F!==null?null:N(T,z,E,H,null);if(typeof E.then=="function")return A(T,z,Er(E),H);if(E.$$typeof===Z)return A(T,z,pr(T,E),H);Cr(T,E)}return null}function D(T,z,E,H,F){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return T=T.get(E)||null,p(z,T,""+H,F);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case R:return T=T.get(H.key===null?E:H.key)||null,v(z,T,H,F);case M:return T=T.get(H.key===null?E:H.key)||null,C(z,T,H,F);case te:var fe=H._init;return H=fe(H._payload),D(T,z,E,H,F)}if(Le(H)||Re(H))return T=T.get(E)||null,N(z,T,H,F,null);if(typeof H.then=="function")return D(T,z,E,Er(H),F);if(H.$$typeof===Z)return D(T,z,E,pr(z,H),F);Cr(z,H)}return null}function oe(T,z,E,H){for(var F=null,fe=null,W=z,re=z=0,Je=null;W!==null&&re<E.length;re++){W.index>re?(Je=W,W=null):Je=W.sibling;var be=A(T,W,E[re],H);if(be===null){W===null&&(W=Je);break}e&&W&&be.alternate===null&&t(T,W),z=r(be,z,re),fe===null?F=be:fe.sibling=be,fe=be,W=Je}if(re===E.length)return n(T,W),xe&&sa(T,re),F;if(W===null){for(;re<E.length;re++)W=L(T,E[re],H),W!==null&&(z=r(W,z,re),fe===null?F=W:fe.sibling=W,fe=W);return xe&&sa(T,re),F}for(W=a(W);re<E.length;re++)Je=D(W,T,re,E[re],H),Je!==null&&(e&&Je.alternate!==null&&W.delete(Je.key===null?re:Je.key),z=r(Je,z,re),fe===null?F=Je:fe.sibling=Je,fe=Je);return e&&W.forEach(function(In){return t(T,In)}),xe&&sa(T,re),F}function ie(T,z,E,H){if(E==null)throw Error(u(151));for(var F=null,fe=null,W=z,re=z=0,Je=null,be=E.next();W!==null&&!be.done;re++,be=E.next()){W.index>re?(Je=W,W=null):Je=W.sibling;var In=A(T,W,be.value,H);if(In===null){W===null&&(W=Je);break}e&&W&&In.alternate===null&&t(T,W),z=r(In,z,re),fe===null?F=In:fe.sibling=In,fe=In,W=Je}if(be.done)return n(T,W),xe&&sa(T,re),F;if(W===null){for(;!be.done;re++,be=E.next())be=L(T,be.value,H),be!==null&&(z=r(be,z,re),fe===null?F=be:fe.sibling=be,fe=be);return xe&&sa(T,re),F}for(W=a(W);!be.done;re++,be=E.next())be=D(W,T,re,be.value,H),be!==null&&(e&&be.alternate!==null&&W.delete(be.key===null?re:be.key),z=r(be,z,re),fe===null?F=be:fe.sibling=be,fe=be);return e&&W.forEach(function($b){return t(T,$b)}),xe&&sa(T,re),F}function Te(T,z,E,H){if(typeof E=="object"&&E!==null&&E.type===X&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case R:e:{for(var F=E.key;z!==null;){if(z.key===F){if(F=E.type,F===X){if(z.tag===7){n(T,z.sibling),H=l(z,E.props.children),H.return=T,T=H;break e}}else if(z.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===te&&om(F)===z.type){n(T,z.sibling),H=l(z,E.props),sl(H,E),H.return=T,T=H;break e}n(T,z);break}else t(T,z);z=z.sibling}E.type===X?(H=ra(E.props.children,T.mode,H,E.key),H.return=T,T=H):(H=dr(E.type,E.key,E.props,null,T.mode,H),sl(H,E),H.return=T,T=H)}return m(T);case M:e:{for(F=E.key;z!==null;){if(z.key===F)if(z.tag===4&&z.stateNode.containerInfo===E.containerInfo&&z.stateNode.implementation===E.implementation){n(T,z.sibling),H=l(z,E.children||[]),H.return=T,T=H;break e}else{n(T,z);break}else t(T,z);z=z.sibling}H=bs(E,T.mode,H),H.return=T,T=H}return m(T);case te:return F=E._init,E=F(E._payload),Te(T,z,E,H)}if(Le(E))return oe(T,z,E,H);if(Re(E)){if(F=Re(E),typeof F!="function")throw Error(u(150));return E=F.call(E),ie(T,z,E,H)}if(typeof E.then=="function")return Te(T,z,Er(E),H);if(E.$$typeof===Z)return Te(T,z,pr(T,E),H);Cr(T,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,z!==null&&z.tag===6?(n(T,z.sibling),H=l(z,E),H.return=T,T=H):(n(T,z),H=ys(E,T.mode,H),H.return=T,T=H),m(T)):n(T,z)}return function(T,z,E,H){try{ol=0;var F=Te(T,z,E,H);return Ka=null,F}catch(W){if(W===Fi||W===yr)throw W;var fe=zt(29,W,null,T.mode);return fe.lanes=H,fe.return=T,fe}finally{}}}var Pa=sm(!0),cm=sm(!1),Ht=G(null),tn=null;function Bn(e){var t=e.alternate;I(Qe,Qe.current&1),I(Ht,e),tn===null&&(t===null||Xa.current!==null||t.memoizedState!==null)&&(tn=e)}function um(e){if(e.tag===22){if(I(Qe,Qe.current),I(Ht,e),tn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(tn=e)}}else Nn()}function Nn(){I(Qe,Qe.current),I(Ht,Ht.current)}function bn(e){P(Ht),tn===e&&(tn=null),P(Qe)}var Qe=G(0);function Ar(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Lc(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Is(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fs={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Et(),l=On(a);l.payload=t,n!=null&&(l.callback=n),t=kn(e,l,a),t!==null&&(Ct(t,e,a),el(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Et(),l=On(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=kn(e,l,a),t!==null&&(Ct(t,e,a),el(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Et(),a=On(n);a.tag=2,t!=null&&(a.callback=t),t=kn(e,a,n),t!==null&&(Ct(t,e,n),el(t,e,n))}};function dm(e,t,n,a,l,r,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,m):t.prototype&&t.prototype.isPureReactComponent?!Xi(n,a)||!Xi(l,r):!0}function fm(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Fs.enqueueReplaceState(t,t.state,null)}function pa(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var Dr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function mm(e){Dr(e)}function hm(e){console.error(e)}function pm(e){Dr(e)}function Rr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function gm(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ws(e,t,n){return n=On(n),n.tag=3,n.payload={element:null},n.callback=function(){Rr(e,t)},n}function ym(e){return e=On(e),e.tag=3,e}function bm(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var r=a.value;e.payload=function(){return l(r)},e.callback=function(){gm(t,n,a)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){gm(t,n,a),typeof l!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var p=a.stack;this.componentDidCatch(a.value,{componentStack:p!==null?p:""})})}function $y(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Pi(t,n,l,!0),n=Ht.current,n!==null){switch(n.tag){case 13:return tn===null?jc():n.alternate===null&&Ne===0&&(Ne=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===Es?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),$c(e,a,l)),!1;case 22:return n.flags|=65536,a===Es?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),$c(e,a,l)),!1}throw Error(u(435,n.tag))}return $c(e,a,l),jc(),!1}if(xe)return t=Ht.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==Ss&&(e=Error(u(422),{cause:a}),Ki(Mt(e,n)))):(a!==Ss&&(t=Error(u(423),{cause:a}),Ki(Mt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=Mt(a,n),l=Ws(e.stateNode,a,l),Ds(e,l),Ne!==4&&(Ne=2)),!1;var r=Error(u(520),{cause:a});if(r=Mt(r,n),pl===null?pl=[r]:pl.push(r),Ne!==4&&(Ne=2),t===null)return!0;a=Mt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Ws(n.stateNode,a,e),Ds(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))))return n.flags|=65536,l&=-l,n.lanes|=l,l=ym(l),bm(l,e,n,a),Ds(n,l),!1}n=n.return}while(n!==null);return!1}var xm=Error(u(461)),Ke=!1;function We(e,t,n,a){t.child=e===null?cm(t,null,n,a):Pa(t,e.child,n,a)}function vm(e,t,n,a,l){n=n.render;var r=t.ref;if("ref"in a){var m={};for(var p in a)p!=="ref"&&(m[p]=a[p])}else m=a;return fa(t),a=Bs(e,t,n,m,r,l),p=Ns(),e!==null&&!Ke?(Us(e,t,l),xn(e,t,l)):(xe&&p&&xs(t),t.flags|=1,We(e,t,a,l),t.child)}function Sm(e,t,n,a,l){if(e===null){var r=n.type;return typeof r=="function"&&!gs(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,wm(e,t,r,a,l)):(e=dr(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!oc(e,l)){var m=r.memoizedProps;if(n=n.compare,n=n!==null?n:Xi,n(m,a)&&e.ref===t.ref)return xn(e,t,l)}return t.flags|=1,e=fn(r,a),e.ref=t.ref,e.return=t,t.child=e}function wm(e,t,n,a,l){if(e!==null){var r=e.memoizedProps;if(Xi(r,a)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=a=r,oc(e,l))(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,xn(e,t,l)}return ec(e,t,n,a,l)}function jm(e,t,n){var a=t.pendingProps,l=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=r!==null?r.baseLanes|n:n,e!==null){for(l=t.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;t.childLanes=r&~a}else t.childLanes=0,t.child=null;return zm(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&gr(t,r!==null?r.cachePool:null),r!==null?wf(t,r):Os(),um(t);else return t.lanes=t.childLanes=536870912,zm(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(gr(t,r.cachePool),wf(t,r),Nn(),t.memoizedState=null):(e!==null&&gr(t,null),Os(),Nn());return We(e,t,l,n),t.child}function zm(e,t,n,a){var l=_s();return l=l===null?null:{parent:Xe._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&gr(t,null),Os(),um(t),e!==null&&Pi(e,t,a,!0),null}function Or(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ec(e,t,n,a,l){return fa(t),n=Bs(e,t,n,a,void 0,l),a=Ns(),e!==null&&!Ke?(Us(e,t,l),xn(e,t,l)):(xe&&a&&xs(t),t.flags|=1,We(e,t,n,l),t.child)}function $m(e,t,n,a,l,r){return fa(t),t.updateQueue=null,n=zf(t,a,n,l),jf(e),a=Ns(),e!==null&&!Ke?(Us(e,t,r),xn(e,t,r)):(xe&&a&&xs(t),t.flags|=1,We(e,t,n,r),t.child)}function Tm(e,t,n,a,l){if(fa(t),t.stateNode===null){var r=Ha,m=n.contextType;typeof m=="object"&&m!==null&&(r=ot(m)),r=new n(a,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Fs,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=a,r.state=t.memoizedState,r.refs={},Cs(t),m=n.contextType,r.context=typeof m=="object"&&m!==null?ot(m):Ha,r.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(Is(t,n,m,a),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(m=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),m!==r.state&&Fs.enqueueReplaceState(r,r.state,null),nl(t,a,r,l),tl(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){r=t.stateNode;var p=t.memoizedProps,v=pa(n,p);r.props=v;var C=r.context,N=n.contextType;m=Ha,typeof N=="object"&&N!==null&&(m=ot(N));var L=n.getDerivedStateFromProps;N=typeof L=="function"||typeof r.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,N||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(p||C!==m)&&fm(t,r,a,m),Rn=!1;var A=t.memoizedState;r.state=A,nl(t,a,r,l),tl(),C=t.memoizedState,p||A!==C||Rn?(typeof L=="function"&&(Is(t,n,L,a),C=t.memoizedState),(v=Rn||dm(t,n,v,a,A,C,m))?(N||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=C),r.props=a,r.state=C,r.context=m,a=v):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,As(e,t),m=t.memoizedProps,N=pa(n,m),r.props=N,L=t.pendingProps,A=r.context,C=n.contextType,v=Ha,typeof C=="object"&&C!==null&&(v=ot(C)),p=n.getDerivedStateFromProps,(C=typeof p=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(m!==L||A!==v)&&fm(t,r,a,v),Rn=!1,A=t.memoizedState,r.state=A,nl(t,a,r,l),tl();var D=t.memoizedState;m!==L||A!==D||Rn||e!==null&&e.dependencies!==null&&hr(e.dependencies)?(typeof p=="function"&&(Is(t,n,p,a),D=t.memoizedState),(N=Rn||dm(t,n,N,a,A,D,v)||e!==null&&e.dependencies!==null&&hr(e.dependencies))?(C||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,D,v),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,D,v)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||m===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=D),r.props=a,r.state=D,r.context=v,a=N):(typeof r.componentDidUpdate!="function"||m===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),a=!1)}return r=a,Or(e,t),a=(t.flags&128)!==0,r||a?(r=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&a?(t.child=Pa(t,e.child,null,l),t.child=Pa(t,null,n,l)):We(e,t,n,l),t.memoizedState=r.state,e=t.child):e=xn(e,t,l),e}function _m(e,t,n,a){return Vi(),t.flags|=256,We(e,t,n,a),t.child}var tc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nc(e){return{baseLanes:e,cachePool:hf()}}function ac(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Lt),e}function Em(e,t,n){var a=t.pendingProps,l=!1,r=(t.flags&128)!==0,m;if((m=r)||(m=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),m&&(l=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(xe){if(l?Bn(t):Nn(),xe){var p=Be,v;if(v=p){e:{for(v=p,p=en;v.nodeType!==8;){if(!p){p=null;break e}if(v=Zt(v.nextSibling),v===null){p=null;break e}}p=v}p!==null?(t.memoizedState={dehydrated:p,treeContext:oa!==null?{id:mn,overflow:hn}:null,retryLane:536870912,hydrationErrors:null},v=zt(18,null,null,0),v.stateNode=p,v.return=t,t.child=v,dt=t,Be=null,v=!0):v=!1}v||ua(t)}if(p=t.memoizedState,p!==null&&(p=p.dehydrated,p!==null))return Lc(p)?t.lanes=32:t.lanes=536870912,null;bn(t)}return p=a.children,a=a.fallback,l?(Nn(),l=t.mode,p=kr({mode:"hidden",children:p},l),a=ra(a,l,n,null),p.return=t,a.return=t,p.sibling=a,t.child=p,l=t.child,l.memoizedState=nc(n),l.childLanes=ac(e,m,n),t.memoizedState=tc,a):(Bn(t),ic(t,p))}if(v=e.memoizedState,v!==null&&(p=v.dehydrated,p!==null)){if(r)t.flags&256?(Bn(t),t.flags&=-257,t=lc(e,t,n)):t.memoizedState!==null?(Nn(),t.child=e.child,t.flags|=128,t=null):(Nn(),l=a.fallback,p=t.mode,a=kr({mode:"visible",children:a.children},p),l=ra(l,p,n,null),l.flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,Pa(t,e.child,null,n),a=t.child,a.memoizedState=nc(n),a.childLanes=ac(e,m,n),t.memoizedState=tc,t=l);else if(Bn(t),Lc(p)){if(m=p.nextSibling&&p.nextSibling.dataset,m)var C=m.dgst;m=C,a=Error(u(419)),a.stack="",a.digest=m,Ki({value:a,source:null,stack:null}),t=lc(e,t,n)}else if(Ke||Pi(e,t,n,!1),m=(n&e.childLanes)!==0,Ke||m){if(m=Ae,m!==null&&(a=n&-n,a=(a&42)!==0?1:qo(a),a=(a&(m.suspendedLanes|n))!==0?0:a,a!==0&&a!==v.retryLane))throw v.retryLane=a,Ua(e,a),Ct(m,e,a),xm;p.data==="$?"||jc(),t=lc(e,t,n)}else p.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,Be=Zt(p.nextSibling),dt=t,xe=!0,ca=null,en=!1,e!==null&&(Nt[Ut++]=mn,Nt[Ut++]=hn,Nt[Ut++]=oa,mn=e.id,hn=e.overflow,oa=t),t=ic(t,a.children),t.flags|=4096);return t}return l?(Nn(),l=a.fallback,p=t.mode,v=e.child,C=v.sibling,a=fn(v,{mode:"hidden",children:a.children}),a.subtreeFlags=v.subtreeFlags&65011712,C!==null?l=fn(C,l):(l=ra(l,p,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,p=e.child.memoizedState,p===null?p=nc(n):(v=p.cachePool,v!==null?(C=Xe._currentValue,v=v.parent!==C?{parent:C,pool:C}:v):v=hf(),p={baseLanes:p.baseLanes|n,cachePool:v}),l.memoizedState=p,l.childLanes=ac(e,m,n),t.memoizedState=tc,a):(Bn(t),n=e.child,e=n.sibling,n=fn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=n,t.memoizedState=null,n)}function ic(e,t){return t=kr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function kr(e,t){return e=zt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function lc(e,t,n){return Pa(t,e.child,null,n),e=ic(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cm(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),js(e.return,t,n)}function rc(e,t,n,a,l){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=l)}function Am(e,t,n){var a=t.pendingProps,l=a.revealOrder,r=a.tail;if(We(e,t,a.children,n),a=Qe.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cm(e,n,t);else if(e.tag===19)Cm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(I(Qe,a),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Ar(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),rc(t,!1,l,n,r);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Ar(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}rc(t,!0,n,null,r);break;case"together":rc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Pi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function oc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&hr(e)))}function Ty(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),Dn(t,Xe,e.memoizedState.cache),Vi();break;case 27:case 5:ea(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:Dn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Bn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Em(e,t,n):(Bn(t),e=xn(e,t,n),e!==null?e.sibling:null);Bn(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Pi(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return Am(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),I(Qe,Qe.current),a)break;return null;case 22:case 23:return t.lanes=0,jm(e,t,n);case 24:Dn(t,Xe,e.memoizedState.cache)}return xn(e,t,n)}function Dm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ke=!0;else{if(!oc(e,n)&&(t.flags&128)===0)return Ke=!1,Ty(e,t,n);Ke=(e.flags&131072)!==0}else Ke=!1,xe&&(t.flags&1048576)!==0&&of(t,mr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,l=a._init;if(a=l(a._payload),t.type=a,typeof a=="function")gs(a)?(e=pa(a,e),t.tag=1,t=Tm(null,t,a,e,n)):(t.tag=0,t=ec(null,t,a,e,n));else{if(a!=null){if(l=a.$$typeof,l===q){t.tag=11,t=vm(null,t,a,e,n);break e}else if(l===V){t.tag=14,t=Sm(null,t,a,e,n);break e}}throw t=Dt(a)||a,Error(u(306,t,""))}}return t;case 0:return ec(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=pa(a,t.pendingProps),Tm(e,t,a,l,n);case 3:e:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var r=t.memoizedState;l=r.element,As(e,t),nl(t,a,null,n);var m=t.memoizedState;if(a=m.cache,Dn(t,Xe,a),a!==r.cache&&zs(t,[Xe],n,!0),tl(),a=m.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=_m(e,t,a,n);break e}else if(a!==l){l=Mt(Error(u(424)),t),Ki(l),t=_m(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Be=Zt(e.firstChild),dt=t,xe=!0,ca=null,en=!0,n=cm(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Vi(),a===l){t=xn(e,t,n);break e}We(e,t,a,n)}t=t.child}return t;case 26:return Or(e,t),e===null?(n=Mh(t.type,null,t.pendingProps,null))?t.memoizedState=n:xe||(n=t.type,e=t.pendingProps,a=Kr(le.current).createElement(n),a[rt]=t,a[gt]=e,tt(a,n,e),Ve(a),t.stateNode=a):t.memoizedState=Mh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ea(t),e===null&&xe&&(a=t.stateNode=Rh(t.type,t.pendingProps,le.current),dt=t,en=!0,l=Be,Zn(t.type)?(qc=l,Be=Zt(a.firstChild)):Be=l),We(e,t,t.pendingProps.children,n),Or(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&xe&&((l=a=Be)&&(a=eb(a,t.type,t.pendingProps,en),a!==null?(t.stateNode=a,dt=t,Be=Zt(a.firstChild),en=!1,l=!0):l=!1),l||ua(t)),ea(t),l=t.type,r=t.pendingProps,m=e!==null?e.memoizedProps:null,a=r.children,Nc(l,r)?a=null:m!==null&&Nc(l,m)&&(t.flags|=32),t.memoizedState!==null&&(l=Bs(e,t,by,null,null,n),zl._currentValue=l),Or(e,t),We(e,t,a,n),t.child;case 6:return e===null&&xe&&((e=n=Be)&&(n=tb(n,t.pendingProps,en),n!==null?(t.stateNode=n,dt=t,Be=null,e=!0):e=!1),e||ua(t)),null;case 13:return Em(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Pa(t,null,a,n):We(e,t,a,n),t.child;case 11:return vm(e,t,t.type,t.pendingProps,n);case 7:return We(e,t,t.pendingProps,n),t.child;case 8:return We(e,t,t.pendingProps.children,n),t.child;case 12:return We(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Dn(t,t.type,a.value),We(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,fa(t),l=ot(l),a=a(l),t.flags|=1,We(e,t,a,n),t.child;case 14:return Sm(e,t,t.type,t.pendingProps,n);case 15:return wm(e,t,t.type,t.pendingProps,n);case 19:return Am(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=kr(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=fn(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return jm(e,t,n);case 24:return fa(t),a=ot(Xe),e===null?(l=_s(),l===null&&(l=Ae,r=$s(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=n),l=r),t.memoizedState={parent:a,cache:l},Cs(t),Dn(t,Xe,l)):((e.lanes&n)!==0&&(As(e,t),nl(t,null,null,n),tl()),l=e.memoizedState,r=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Dn(t,Xe,a)):(a=r.cache,Dn(t,Xe,a),a!==l.cache&&zs(t,[Xe],n,!0))),We(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function vn(e){e.flags|=4}function Rm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Lh(t)){if(t=Ht.current,t!==null&&((ye&4194048)===ye?tn!==null:(ye&62914560)!==ye&&(ye&536870912)===0||t!==tn))throw Wi=Es,pf;e.flags|=8192}}function Mr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?cd():536870912,e.lanes|=t,Wa|=t)}function cl(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function _y(e,t,n){var a=t.pendingProps;switch(vs(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),gn(Xe),lt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Zi(t)?vn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,uf())),Me(t),null;case 26:return n=t.memoizedState,e===null?(vn(t),n!==null?(Me(t),Rm(t,n)):(Me(t),t.flags&=-16777217)):n?n!==e.memoizedState?(vn(t),Me(t),Rm(t,n)):(Me(t),t.flags&=-16777217):(e.memoizedProps!==a&&vn(t),Me(t),t.flags&=-16777217),null;case 27:cn(t),n=le.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&vn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Me(t),null}e=ee.current,Zi(t)?sf(t):(e=Rh(l,a,n),t.stateNode=e,vn(t))}return Me(t),null;case 5:if(cn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&vn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Me(t),null}if(e=ee.current,Zi(t))sf(t);else{switch(l=Kr(le.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?l.createElement(n,{is:a.is}):l.createElement(n)}}e[rt]=t,e[gt]=a;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(tt(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&vn(t)}}return Me(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&vn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=le.current,Zi(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=dt,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[rt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||$h(e.nodeValue,n)),e||ua(t)}else e=Kr(e).createTextNode(a),e[rt]=t,t.stateNode=e}return Me(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Zi(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[rt]=t}else Vi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),l=!1}else l=uf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(bn(t),t):(bn(t),null)}if(bn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var r=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==l&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Mr(t,t.updateQueue),Me(t),null;case 4:return lt(),e===null&&Rc(t.stateNode.containerInfo),Me(t),null;case 10:return gn(t.type),Me(t),null;case 19:if(P(Qe),l=t.memoizedState,l===null)return Me(t),null;if(a=(t.flags&128)!==0,r=l.rendering,r===null)if(a)cl(l,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Ar(e),r!==null){for(t.flags|=128,cl(l,!1),e=r.updateQueue,t.updateQueue=e,Mr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)rf(n,e),n=n.sibling;return I(Qe,Qe.current&1|2),t.child}e=e.sibling}l.tail!==null&&Wt()>Ur&&(t.flags|=128,a=!0,cl(l,!1),t.lanes=4194304)}else{if(!a)if(e=Ar(r),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Mr(t,e),cl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!xe)return Me(t),null}else 2*Wt()-l.renderingStartTime>Ur&&n!==536870912&&(t.flags|=128,a=!0,cl(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Wt(),t.sibling=null,e=Qe.current,I(Qe,a?e&1|2:e&1),t):(Me(t),null);case 22:case 23:return bn(t),ks(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),n=t.updateQueue,n!==null&&Mr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&P(ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),gn(Xe),Me(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Ey(e,t){switch(vs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(Xe),lt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return cn(t),null;case 13:if(bn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return P(Qe),null;case 4:return lt(),null;case 10:return gn(t.type),null;case 22:case 23:return bn(t),ks(),e!==null&&P(ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return gn(Xe),null;case 25:return null;default:return null}}function Om(e,t){switch(vs(t),t.tag){case 3:gn(Xe),lt();break;case 26:case 27:case 5:cn(t);break;case 4:lt();break;case 13:bn(t);break;case 19:P(Qe);break;case 10:gn(t.type);break;case 22:case 23:bn(t),ks(),e!==null&&P(ma);break;case 24:gn(Xe)}}function ul(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var r=n.create,m=n.inst;a=r(),m.destroy=a}n=n.next}while(n!==l)}}catch(p){Ee(t,t.return,p)}}function Un(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){var m=a.inst,p=m.destroy;if(p!==void 0){m.destroy=void 0,l=t;var v=n,C=p;try{C()}catch(N){Ee(l,v,N)}}}a=a.next}while(a!==r)}}catch(N){Ee(t,t.return,N)}}function km(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Sf(t,n)}catch(a){Ee(e,e.return,a)}}}function Mm(e,t,n){n.props=pa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Ee(e,t,a)}}function dl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){Ee(e,t,l)}}function nn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){Ee(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Ee(e,t,l)}else n.current=null}function Bm(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){Ee(e,e.return,l)}}function sc(e,t,n){try{var a=e.stateNode;Py(a,e.type,n,t),a[gt]=t}catch(l){Ee(e,e.return,l)}}function Nm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zn(e.type)||e.tag===4}function cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vr));else if(a!==4&&(a===27&&Zn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(uc(e,t,n),e=e.sibling;e!==null;)uc(e,t,n),e=e.sibling}function Br(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Zn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Br(e,t,n),e=e.sibling;e!==null;)Br(e,t,n),e=e.sibling}function Um(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);tt(t,a,n),t[rt]=e,t[gt]=n}catch(r){Ee(e,e.return,r)}}var Sn=!1,He=!1,dc=!1,Hm=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function Cy(e,t){if(e=e.containerInfo,Mc=eo,e=Pd(e),cs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var m=0,p=-1,v=-1,C=0,N=0,L=e,A=null;t:for(;;){for(var D;L!==n||l!==0&&L.nodeType!==3||(p=m+l),L!==r||a!==0&&L.nodeType!==3||(v=m+a),L.nodeType===3&&(m+=L.nodeValue.length),(D=L.firstChild)!==null;)A=L,L=D;for(;;){if(L===e)break t;if(A===n&&++C===l&&(p=m),A===r&&++N===a&&(v=m),(D=L.nextSibling)!==null)break;L=A,A=L.parentNode}L=D}n=p===-1||v===-1?null:{start:p,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bc={focusedElem:e,selectionRange:n},eo=!1,Pe=t;Pe!==null;)if(t=Pe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Pe=e;else for(;Pe!==null;){switch(t=Pe,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,l=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var oe=pa(n.type,l,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(oe,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Ee(n,n.return,ie)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Hc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Pe=e;break}Pe=t.return}}function Lm(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Hn(e,n),a&4&&ul(5,n);break;case 1:if(Hn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){Ee(n,n.return,m)}else{var l=pa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Ee(n,n.return,m)}}a&64&&km(n),a&512&&dl(n,n.return);break;case 3:if(Hn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Sf(e,t)}catch(m){Ee(n,n.return,m)}}break;case 27:t===null&&a&4&&Um(n);case 26:case 5:Hn(e,n),t===null&&a&4&&Bm(n),a&512&&dl(n,n.return);break;case 12:Hn(e,n);break;case 13:Hn(e,n),a&4&&Ym(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Uy.bind(null,n),nb(e,n))));break;case 22:if(a=n.memoizedState!==null||Sn,!a){t=t!==null&&t.memoizedState!==null||He,l=Sn;var r=He;Sn=a,(He=t)&&!r?Ln(e,n,(n.subtreeFlags&8772)!==0):Hn(e,n),Sn=l,He=r}break;case 30:break;default:Hn(e,n)}}function qm(e){var t=e.alternate;t!==null&&(e.alternate=null,qm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Xo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Oe=null,xt=!1;function wn(e,t,n){for(n=n.child;n!==null;)Gm(e,t,n),n=n.sibling}function Gm(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Ri,n)}catch{}switch(n.tag){case 26:He||nn(n,t),wn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:He||nn(n,t);var a=Oe,l=xt;Zn(n.type)&&(Oe=n.stateNode,xt=!1),wn(e,t,n),vl(n.stateNode),Oe=a,xt=l;break;case 5:He||nn(n,t);case 6:if(a=Oe,l=xt,Oe=null,wn(e,t,n),Oe=a,xt=l,Oe!==null)if(xt)try{(Oe.nodeType===9?Oe.body:Oe.nodeName==="HTML"?Oe.ownerDocument.body:Oe).removeChild(n.stateNode)}catch(r){Ee(n,t,r)}else try{Oe.removeChild(n.stateNode)}catch(r){Ee(n,t,r)}break;case 18:Oe!==null&&(xt?(e=Oe,Ah(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),El(e)):Ah(Oe,n.stateNode));break;case 4:a=Oe,l=xt,Oe=n.stateNode.containerInfo,xt=!0,wn(e,t,n),Oe=a,xt=l;break;case 0:case 11:case 14:case 15:He||Un(2,n,t),He||Un(4,n,t),wn(e,t,n);break;case 1:He||(nn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Mm(n,t,a)),wn(e,t,n);break;case 21:wn(e,t,n);break;case 22:He=(a=He)||n.memoizedState!==null,wn(e,t,n),He=a;break;default:wn(e,t,n)}}function Ym(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{El(e)}catch(n){Ee(t,t.return,n)}}function Ay(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Hm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Hm),t;default:throw Error(u(435,e.tag))}}function fc(e,t){var n=Ay(e);t.forEach(function(a){var l=Hy.bind(null,e,a);n.has(a)||(n.add(a),a.then(l,l))})}function $t(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],r=e,m=t,p=m;e:for(;p!==null;){switch(p.tag){case 27:if(Zn(p.type)){Oe=p.stateNode,xt=!1;break e}break;case 5:Oe=p.stateNode,xt=!1;break e;case 3:case 4:Oe=p.stateNode.containerInfo,xt=!0;break e}p=p.return}if(Oe===null)throw Error(u(160));Gm(r,m,l),Oe=null,xt=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Xm(t,e),t=t.sibling}var Qt=null;function Xm(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$t(t,e),Tt(e),a&4&&(Un(3,e,e.return),ul(3,e),Un(5,e,e.return));break;case 1:$t(t,e),Tt(e),a&512&&(He||n===null||nn(n,n.return)),a&64&&Sn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=Qt;if($t(t,e),Tt(e),a&512&&(He||n===null||nn(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Mi]||r[rt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(a),l.head.insertBefore(r,l.querySelector("head > title"))),tt(r,a,n),r[rt]=e,Ve(r),a=r;break e;case"link":var m=Uh("link","href",l).get(a+(n.href||""));if(m){for(var p=0;p<m.length;p++)if(r=m[p],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(p,1);break t}}r=l.createElement(a),tt(r,a,n),l.head.appendChild(r);break;case"meta":if(m=Uh("meta","content",l).get(a+(n.content||""))){for(p=0;p<m.length;p++)if(r=m[p],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(p,1);break t}}r=l.createElement(a),tt(r,a,n),l.head.appendChild(r);break;default:throw Error(u(468,a))}r[rt]=e,Ve(r),a=r}e.stateNode=a}else Hh(l,e.type,e.stateNode);else e.stateNode=Nh(l,a,e.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?Hh(l,e.type,e.stateNode):Nh(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&sc(e,e.memoizedProps,n.memoizedProps)}break;case 27:$t(t,e),Tt(e),a&512&&(He||n===null||nn(n,n.return)),n!==null&&a&4&&sc(e,e.memoizedProps,n.memoizedProps);break;case 5:if($t(t,e),Tt(e),a&512&&(He||n===null||nn(n,n.return)),e.flags&32){l=e.stateNode;try{Da(l,"")}catch(D){Ee(e,e.return,D)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,sc(e,l,n!==null?n.memoizedProps:l)),a&1024&&(dc=!0);break;case 6:if($t(t,e),Tt(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(D){Ee(e,e.return,D)}}break;case 3:if(Ir=null,l=Qt,Qt=Pr(t.containerInfo),$t(t,e),Qt=l,Tt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{El(t.containerInfo)}catch(D){Ee(e,e.return,D)}dc&&(dc=!1,Qm(e));break;case 4:a=Qt,Qt=Pr(e.stateNode.containerInfo),$t(t,e),Tt(e),Qt=a;break;case 12:$t(t,e),Tt(e);break;case 13:$t(t,e),Tt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(bc=Wt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,fc(e,a)));break;case 22:l=e.memoizedState!==null;var v=n!==null&&n.memoizedState!==null,C=Sn,N=He;if(Sn=C||l,He=N||v,$t(t,e),He=N,Sn=C,Tt(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||v||Sn||He||ga(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){v=n=t;try{if(r=v.stateNode,l)m=r.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{p=v.stateNode;var L=v.memoizedProps.style,A=L!=null&&L.hasOwnProperty("display")?L.display:null;p.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(D){Ee(v,v.return,D)}}}else if(t.tag===6){if(n===null){v=t;try{v.stateNode.nodeValue=l?"":v.memoizedProps}catch(D){Ee(v,v.return,D)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,fc(e,n))));break;case 19:$t(t,e),Tt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,fc(e,a)));break;case 30:break;case 21:break;default:$t(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Nm(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var l=n.stateNode,r=cc(e);Br(e,r,l);break;case 5:var m=n.stateNode;n.flags&32&&(Da(m,""),n.flags&=-33);var p=cc(e);Br(e,p,m);break;case 3:case 4:var v=n.stateNode.containerInfo,C=cc(e);uc(e,C,v);break;default:throw Error(u(161))}}catch(N){Ee(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Qm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Hn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Lm(e,t.alternate,t),t=t.sibling}function ga(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Un(4,t,t.return),ga(t);break;case 1:nn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Mm(t,t.return,n),ga(t);break;case 27:vl(t.stateNode);case 26:case 5:nn(t,t.return),ga(t);break;case 22:t.memoizedState===null&&ga(t);break;case 30:ga(t);break;default:ga(t)}e=e.sibling}}function Ln(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,r=t,m=r.flags;switch(r.tag){case 0:case 11:case 15:Ln(l,r,n),ul(4,r);break;case 1:if(Ln(l,r,n),a=r,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(C){Ee(a,a.return,C)}if(a=r,l=a.updateQueue,l!==null){var p=a.stateNode;try{var v=l.shared.hiddenCallbacks;if(v!==null)for(l.shared.hiddenCallbacks=null,l=0;l<v.length;l++)vf(v[l],p)}catch(C){Ee(a,a.return,C)}}n&&m&64&&km(r),dl(r,r.return);break;case 27:Um(r);case 26:case 5:Ln(l,r,n),n&&a===null&&m&4&&Bm(r),dl(r,r.return);break;case 12:Ln(l,r,n);break;case 13:Ln(l,r,n),n&&m&4&&Ym(l,r);break;case 22:r.memoizedState===null&&Ln(l,r,n),dl(r,r.return);break;case 30:break;default:Ln(l,r,n)}t=t.sibling}}function mc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ji(n))}function hc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ji(e))}function an(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Zm(e,t,n,a),t=t.sibling}function Zm(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:an(e,t,n,a),l&2048&&ul(9,t);break;case 1:an(e,t,n,a);break;case 3:an(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ji(e)));break;case 12:if(l&2048){an(e,t,n,a),e=t.stateNode;try{var r=t.memoizedProps,m=r.id,p=r.onPostCommit;typeof p=="function"&&p(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Ee(t,t.return,v)}}else an(e,t,n,a);break;case 13:an(e,t,n,a);break;case 23:break;case 22:r=t.stateNode,m=t.alternate,t.memoizedState!==null?r._visibility&2?an(e,t,n,a):fl(e,t):r._visibility&2?an(e,t,n,a):(r._visibility|=2,Ja(e,t,n,a,(t.subtreeFlags&10256)!==0)),l&2048&&mc(m,t);break;case 24:an(e,t,n,a),l&2048&&hc(t.alternate,t);break;default:an(e,t,n,a)}}function Ja(e,t,n,a,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,m=t,p=n,v=a,C=m.flags;switch(m.tag){case 0:case 11:case 15:Ja(r,m,p,v,l),ul(8,m);break;case 23:break;case 22:var N=m.stateNode;m.memoizedState!==null?N._visibility&2?Ja(r,m,p,v,l):fl(r,m):(N._visibility|=2,Ja(r,m,p,v,l)),l&&C&2048&&mc(m.alternate,m);break;case 24:Ja(r,m,p,v,l),l&&C&2048&&hc(m.alternate,m);break;default:Ja(r,m,p,v,l)}t=t.sibling}}function fl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:fl(n,a),l&2048&&mc(a.alternate,a);break;case 24:fl(n,a),l&2048&&hc(a.alternate,a);break;default:fl(n,a)}t=t.sibling}}var ml=8192;function Ia(e){if(e.subtreeFlags&ml)for(e=e.child;e!==null;)Vm(e),e=e.sibling}function Vm(e){switch(e.tag){case 26:Ia(e),e.flags&ml&&e.memoizedState!==null&&pb(Qt,e.memoizedState,e.memoizedProps);break;case 5:Ia(e);break;case 3:case 4:var t=Qt;Qt=Pr(e.stateNode.containerInfo),Ia(e),Qt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=ml,ml=16777216,Ia(e),ml=t):Ia(e));break;default:Ia(e)}}function Km(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function hl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Pe=a,Jm(a,e)}Km(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pm(e),e=e.sibling}function Pm(e){switch(e.tag){case 0:case 11:case 15:hl(e),e.flags&2048&&Un(9,e,e.return);break;case 3:hl(e);break;case 12:hl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Nr(e)):hl(e);break;default:hl(e)}}function Nr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Pe=a,Jm(a,e)}Km(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Un(8,t,t.return),Nr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Nr(t));break;default:Nr(t)}e=e.sibling}}function Jm(e,t){for(;Pe!==null;){var n=Pe;switch(n.tag){case 0:case 11:case 15:Un(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ji(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Pe=a;else e:for(n=e;Pe!==null;){a=Pe;var l=a.sibling,r=a.return;if(qm(a),a===n){Pe=null;break e}if(l!==null){l.return=r,Pe=l;break e}Pe=r}}}var Dy={getCacheForType:function(e){var t=ot(Xe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Ry=typeof WeakMap=="function"?WeakMap:Map,we=0,Ae=null,pe=null,ye=0,je=0,_t=null,qn=!1,Fa=!1,pc=!1,jn=0,Ne=0,Gn=0,ya=0,gc=0,Lt=0,Wa=0,pl=null,vt=null,yc=!1,bc=0,Ur=1/0,Hr=null,Yn=null,et=0,Xn=null,ei=null,ti=0,xc=0,vc=null,Im=null,gl=0,Sc=null;function Et(){if((we&2)!==0&&ye!==0)return ye&-ye;if(B.T!==null){var e=Ga;return e!==0?e:Ec()}return fd()}function Fm(){Lt===0&&(Lt=(ye&536870912)===0||xe?sd():536870912);var e=Ht.current;return e!==null&&(e.flags|=32),Lt}function Ct(e,t,n){(e===Ae&&(je===2||je===9)||e.cancelPendingCommit!==null)&&(ni(e,0),Qn(e,ye,Lt,!1)),ki(e,n),((we&2)===0||e!==Ae)&&(e===Ae&&((we&2)===0&&(ya|=n),Ne===4&&Qn(e,ye,Lt,!1)),ln(e))}function Wm(e,t,n){if((we&6)!==0)throw Error(u(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Oi(e,t),l=a?My(e,t):zc(e,t,!0),r=a;do{if(l===0){Fa&&!a&&Qn(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!Oy(n)){l=zc(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var p=e;l=pl;var v=p.current.memoizedState.isDehydrated;if(v&&(ni(p,m).flags|=256),m=zc(p,m,!1),m!==2){if(pc&&!v){p.errorRecoveryDisabledLanes|=r,ya|=r,l=4;break e}r=vt,vt=l,r!==null&&(vt===null?vt=r:vt.push.apply(vt,r))}l=m}if(r=!1,l!==2)continue}}if(l===1){ni(e,0),Qn(e,t,0,!0);break}e:{switch(a=e,r=l,r){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Qn(a,t,Lt,!qn);break e;case 2:vt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(l=bc+300-Wt(),10<l)){if(Qn(a,t,Lt,!qn),Jl(a,0,!0)!==0)break e;a.timeoutHandle=Eh(eh.bind(null,a,n,vt,Hr,yc,t,Lt,ya,Wa,qn,r,2,-0,0),l);break e}eh(a,n,vt,Hr,yc,t,Lt,ya,Wa,qn,r,0,-0,0)}}break}while(!0);ln(e)}function eh(e,t,n,a,l,r,m,p,v,C,N,L,A,D){if(e.timeoutHandle=-1,L=t.subtreeFlags,(L&8192||(L&16785408)===16785408)&&(jl={stylesheets:null,count:0,unsuspend:hb},Vm(t),L=gb(),L!==null)){e.cancelPendingCommit=L(oh.bind(null,e,t,r,n,a,l,m,p,v,N,1,A,D)),Qn(e,r,m,!C);return}oh(e,t,r,n,a,l,m,p,v)}function Oy(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],r=l.getSnapshot;l=l.value;try{if(!jt(r(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qn(e,t,n,a){t&=~gc,t&=~ya,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var r=31-wt(l),m=1<<r;a[r]=-1,l&=~m}n!==0&&ud(e,n,t)}function Lr(){return(we&6)===0?(yl(0),!1):!0}function wc(){if(pe!==null){if(je===0)var e=pe.return;else e=pe,pn=da=null,Hs(e),Ka=null,ol=0,e=pe;for(;e!==null;)Om(e.alternate,e),e=e.return;pe=null}}function ni(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Iy(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),wc(),Ae=e,pe=n=fn(e.current,null),ye=t,je=0,_t=null,qn=!1,Fa=Oi(e,t),pc=!1,Wa=Lt=gc=ya=Gn=Ne=0,vt=pl=null,yc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-wt(a),r=1<<l;t|=e[l],a&=~r}return jn=t,sr(),n}function th(e,t){de=null,B.H=_r,t===Fi||t===yr?(t=bf(),je=3):t===pf?(t=bf(),je=4):je=t===xm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,_t=t,pe===null&&(Ne=1,Rr(e,Mt(t,e.current)))}function nh(){var e=B.H;return B.H=_r,e===null?_r:e}function ah(){var e=B.A;return B.A=Dy,e}function jc(){Ne=4,qn||(ye&4194048)!==ye&&Ht.current!==null||(Fa=!0),(Gn&134217727)===0&&(ya&134217727)===0||Ae===null||Qn(Ae,ye,Lt,!1)}function zc(e,t,n){var a=we;we|=2;var l=nh(),r=ah();(Ae!==e||ye!==t)&&(Hr=null,ni(e,t)),t=!1;var m=Ne;e:do try{if(je!==0&&pe!==null){var p=pe,v=_t;switch(je){case 8:wc(),m=6;break e;case 3:case 2:case 9:case 6:Ht.current===null&&(t=!0);var C=je;if(je=0,_t=null,ai(e,p,v,C),n&&Fa){m=0;break e}break;default:C=je,je=0,_t=null,ai(e,p,v,C)}}ky(),m=Ne;break}catch(N){th(e,N)}while(!0);return t&&e.shellSuspendCounter++,pn=da=null,we=a,B.H=l,B.A=r,pe===null&&(Ae=null,ye=0,sr()),m}function ky(){for(;pe!==null;)ih(pe)}function My(e,t){var n=we;we|=2;var a=nh(),l=ah();Ae!==e||ye!==t?(Hr=null,Ur=Wt()+500,ni(e,t)):Fa=Oi(e,t);e:do try{if(je!==0&&pe!==null){t=pe;var r=_t;t:switch(je){case 1:je=0,_t=null,ai(e,t,r,1);break;case 2:case 9:if(gf(r)){je=0,_t=null,lh(t);break}t=function(){je!==2&&je!==9||Ae!==e||(je=7),ln(e)},r.then(t,t);break e;case 3:je=7;break e;case 4:je=5;break e;case 7:gf(r)?(je=0,_t=null,lh(t)):(je=0,_t=null,ai(e,t,r,7));break;case 5:var m=null;switch(pe.tag){case 26:m=pe.memoizedState;case 5:case 27:var p=pe;if(!m||Lh(m)){je=0,_t=null;var v=p.sibling;if(v!==null)pe=v;else{var C=p.return;C!==null?(pe=C,qr(C)):pe=null}break t}}je=0,_t=null,ai(e,t,r,5);break;case 6:je=0,_t=null,ai(e,t,r,6);break;case 8:wc(),Ne=6;break e;default:throw Error(u(462))}}By();break}catch(N){th(e,N)}while(!0);return pn=da=null,B.H=a,B.A=l,we=n,pe!==null?0:(Ae=null,ye=0,sr(),Ne)}function By(){for(;pe!==null&&!i1();)ih(pe)}function ih(e){var t=Dm(e.alternate,e,jn);e.memoizedProps=e.pendingProps,t===null?qr(e):pe=t}function lh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=$m(n,t,t.pendingProps,t.type,void 0,ye);break;case 11:t=$m(n,t,t.pendingProps,t.type.render,t.ref,ye);break;case 5:Hs(t);default:Om(n,t),t=pe=rf(t,jn),t=Dm(n,t,jn)}e.memoizedProps=e.pendingProps,t===null?qr(e):pe=t}function ai(e,t,n,a){pn=da=null,Hs(t),Ka=null,ol=0;var l=t.return;try{if($y(e,l,t,n,ye)){Ne=1,Rr(e,Mt(n,e.current)),pe=null;return}}catch(r){if(l!==null)throw pe=l,r;Ne=1,Rr(e,Mt(n,e.current)),pe=null;return}t.flags&32768?(xe||a===1?e=!0:Fa||(ye&536870912)!==0?e=!1:(qn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Ht.current,a!==null&&a.tag===13&&(a.flags|=16384))),rh(t,e)):qr(t)}function qr(e){var t=e;do{if((t.flags&32768)!==0){rh(t,qn);return}e=t.return;var n=_y(t.alternate,t,jn);if(n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);Ne===0&&(Ne=5)}function rh(e,t){do{var n=Ey(e.alternate,e);if(n!==null){n.flags&=32767,pe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){pe=e;return}pe=e=n}while(e!==null);Ne=6,pe=null}function oh(e,t,n,a,l,r,m,p,v){e.cancelPendingCommit=null;do Gr();while(et!==0);if((we&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(r=t.lanes|t.childLanes,r|=hs,h1(e,n,r,m,p,v),e===Ae&&(pe=Ae=null,ye=0),ei=t,Xn=e,ti=n,xc=r,vc=l,Im=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ly(Vl,function(){return fh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=B.T,B.T=null,l=J.p,J.p=2,m=we,we|=4;try{Cy(e,t,n)}finally{we=m,J.p=l,B.T=a}}et=1,sh(),ch(),uh()}}function sh(){if(et===1){et=0;var e=Xn,t=ei,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=B.T,B.T=null;var a=J.p;J.p=2;var l=we;we|=4;try{Xm(t,e);var r=Bc,m=Pd(e.containerInfo),p=r.focusedElem,v=r.selectionRange;if(m!==p&&p&&p.ownerDocument&&Kd(p.ownerDocument.documentElement,p)){if(v!==null&&cs(p)){var C=v.start,N=v.end;if(N===void 0&&(N=C),"selectionStart"in p)p.selectionStart=C,p.selectionEnd=Math.min(N,p.value.length);else{var L=p.ownerDocument||document,A=L&&L.defaultView||window;if(A.getSelection){var D=A.getSelection(),oe=p.textContent.length,ie=Math.min(v.start,oe),Te=v.end===void 0?ie:Math.min(v.end,oe);!D.extend&&ie>Te&&(m=Te,Te=ie,ie=m);var T=Vd(p,ie),z=Vd(p,Te);if(T&&z&&(D.rangeCount!==1||D.anchorNode!==T.node||D.anchorOffset!==T.offset||D.focusNode!==z.node||D.focusOffset!==z.offset)){var E=L.createRange();E.setStart(T.node,T.offset),D.removeAllRanges(),ie>Te?(D.addRange(E),D.extend(z.node,z.offset)):(E.setEnd(z.node,z.offset),D.addRange(E))}}}}for(L=[],D=p;D=D.parentNode;)D.nodeType===1&&L.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<L.length;p++){var H=L[p];H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}eo=!!Mc,Bc=Mc=null}finally{we=l,J.p=a,B.T=n}}e.current=t,et=2}}function ch(){if(et===2){et=0;var e=Xn,t=ei,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=B.T,B.T=null;var a=J.p;J.p=2;var l=we;we|=4;try{Lm(e,t.alternate,t)}finally{we=l,J.p=a,B.T=n}}et=3}}function uh(){if(et===4||et===3){et=0,l1();var e=Xn,t=ei,n=ti,a=Im;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?et=5:(et=0,ei=Xn=null,dh(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Yn=null),Go(n),t=t.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Ri,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=B.T,l=J.p,J.p=2,B.T=null;try{for(var r=e.onRecoverableError,m=0;m<a.length;m++){var p=a[m];r(p.value,{componentStack:p.stack})}}finally{B.T=t,J.p=l}}(ti&3)!==0&&Gr(),ln(e),l=e.pendingLanes,(n&4194090)!==0&&(l&42)!==0?e===Sc?gl++:(gl=0,Sc=e):gl=0,yl(0)}}function dh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ji(t)))}function Gr(e){return sh(),ch(),uh(),fh()}function fh(){if(et!==5)return!1;var e=Xn,t=xc;xc=0;var n=Go(ti),a=B.T,l=J.p;try{J.p=32>n?32:n,B.T=null,n=vc,vc=null;var r=Xn,m=ti;if(et=0,ei=Xn=null,ti=0,(we&6)!==0)throw Error(u(331));var p=we;if(we|=4,Pm(r.current),Zm(r,r.current,m,n),we=p,yl(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Ri,r)}catch{}return!0}finally{J.p=l,B.T=a,dh(e,t)}}function mh(e,t,n){t=Mt(n,t),t=Ws(e.stateNode,t,2),e=kn(e,t,2),e!==null&&(ki(e,2),ln(e))}function Ee(e,t,n){if(e.tag===3)mh(e,e,n);else for(;t!==null;){if(t.tag===3){mh(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Yn===null||!Yn.has(a))){e=Mt(n,e),n=ym(2),a=kn(t,n,2),a!==null&&(bm(n,a,t,e),ki(a,2),ln(a));break}}t=t.return}}function $c(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Ry;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(pc=!0,l.add(n),e=Ny.bind(null,e,t,n),t.then(e,e))}function Ny(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ae===e&&(ye&n)===n&&(Ne===4||Ne===3&&(ye&62914560)===ye&&300>Wt()-bc?(we&2)===0&&ni(e,0):gc|=n,Wa===ye&&(Wa=0)),ln(e)}function hh(e,t){t===0&&(t=cd()),e=Ua(e,t),e!==null&&(ki(e,t),ln(e))}function Uy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hh(e,n)}function Hy(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),hh(e,n)}function Ly(e,t){return Uo(e,t)}var Yr=null,ii=null,Tc=!1,Xr=!1,_c=!1,ba=0;function ln(e){e!==ii&&e.next===null&&(ii===null?Yr=ii=e:ii=ii.next=e),Xr=!0,Tc||(Tc=!0,Gy())}function yl(e,t){if(!_c&&Xr){_c=!0;do for(var n=!1,a=Yr;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var r=0;else{var m=a.suspendedLanes,p=a.pingedLanes;r=(1<<31-wt(42|e)+1)-1,r&=l&~(m&~p),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,bh(a,r))}else r=ye,r=Jl(a,a===Ae?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||Oi(a,r)||(n=!0,bh(a,r));a=a.next}while(n);_c=!1}}function qy(){ph()}function ph(){Xr=Tc=!1;var e=0;ba!==0&&(Jy()&&(e=ba),ba=0);for(var t=Wt(),n=null,a=Yr;a!==null;){var l=a.next,r=gh(a,t);r===0?(a.next=null,n===null?Yr=l:n.next=l,l===null&&(ii=n)):(n=a,(e!==0||(r&3)!==0)&&(Xr=!0)),a=l}yl(e)}function gh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var m=31-wt(r),p=1<<m,v=l[m];v===-1?((p&n)===0||(p&a)!==0)&&(l[m]=m1(p,t)):v<=t&&(e.expiredLanes|=p),r&=~p}if(t=Ae,n=ye,n=Jl(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(je===2||je===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Ho(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Oi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Ho(a),Go(n)){case 2:case 8:n=rd;break;case 32:n=Vl;break;case 268435456:n=od;break;default:n=Vl}return a=yh.bind(null,e),n=Uo(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Ho(a),e.callbackPriority=2,e.callbackNode=null,2}function yh(e,t){if(et!==0&&et!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Gr()&&e.callbackNode!==n)return null;var a=ye;return a=Jl(e,e===Ae?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Wm(e,a,t),gh(e,Wt()),e.callbackNode!=null&&e.callbackNode===n?yh.bind(null,e):null)}function bh(e,t){if(Gr())return null;Wm(e,t,!0)}function Gy(){Fy(function(){(we&6)!==0?Uo(ld,qy):ph()})}function Ec(){return ba===0&&(ba=sd()),ba}function xh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:tr(""+e)}function vh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Yy(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var r=xh((l[gt]||null).action),m=a.submitter;m&&(t=(t=m[gt]||null)?xh(t.formAction):m.getAttribute("formAction"),t!==null&&(r=t,m=null));var p=new lr("action","action",null,a,l);e.push({event:p,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ba!==0){var v=m?vh(l,m):new FormData(l);Ks(n,{pending:!0,data:v,method:l.method,action:r},null,v)}}else typeof r=="function"&&(p.preventDefault(),v=m?vh(l,m):new FormData(l),Ks(n,{pending:!0,data:v,method:l.method,action:r},r,v))},currentTarget:l}]})}}for(var Cc=0;Cc<ms.length;Cc++){var Ac=ms[Cc],Xy=Ac.toLowerCase(),Qy=Ac[0].toUpperCase()+Ac.slice(1);Xt(Xy,"on"+Qy)}Xt(Fd,"onAnimationEnd"),Xt(Wd,"onAnimationIteration"),Xt(ef,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(sy,"onTransitionRun"),Xt(cy,"onTransitionStart"),Xt(uy,"onTransitionCancel"),Xt(tf,"onTransitionEnd"),Ea("onMouseEnter",["mouseout","mouseover"]),Ea("onMouseLeave",["mouseout","mouseover"]),Ea("onPointerEnter",["pointerout","pointerover"]),Ea("onPointerLeave",["pointerout","pointerover"]),na("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),na("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),na("onBeforeInput",["compositionend","keypress","textInput","paste"]),na("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),na("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),na("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bl));function Sh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var m=a.length-1;0<=m;m--){var p=a[m],v=p.instance,C=p.currentTarget;if(p=p.listener,v!==r&&l.isPropagationStopped())break e;r=p,l.currentTarget=C;try{r(l)}catch(N){Dr(N)}l.currentTarget=null,r=v}else for(m=0;m<a.length;m++){if(p=a[m],v=p.instance,C=p.currentTarget,p=p.listener,v!==r&&l.isPropagationStopped())break e;r=p,l.currentTarget=C;try{r(l)}catch(N){Dr(N)}l.currentTarget=null,r=v}}}}function ge(e,t){var n=t[Yo];n===void 0&&(n=t[Yo]=new Set);var a=e+"__bubble";n.has(a)||(wh(t,e,2,!1),n.add(a))}function Dc(e,t,n){var a=0;t&&(a|=4),wh(n,e,a,t)}var Qr="_reactListening"+Math.random().toString(36).slice(2);function Rc(e){if(!e[Qr]){e[Qr]=!0,hd.forEach(function(n){n!=="selectionchange"&&(Zy.has(n)||Dc(n,!1,e),Dc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qr]||(t[Qr]=!0,Dc("selectionchange",!1,t))}}function wh(e,t,n,a){switch(Zh(t)){case 2:var l=xb;break;case 8:l=vb;break;default:l=Zc}n=l.bind(null,t,n,e),l=void 0,!es||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Oc(e,t,n,a,l){var r=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var p=a.stateNode.containerInfo;if(p===l)break;if(m===4)for(m=a.return;m!==null;){var v=m.tag;if((v===3||v===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;p!==null;){if(m=$a(p),m===null)return;if(v=m.tag,v===5||v===6||v===26||v===27){a=r=m;continue e}p=p.parentNode}}a=a.return}Ed(function(){var C=r,N=Fo(n),L=[];e:{var A=nf.get(e);if(A!==void 0){var D=lr,oe=e;switch(e){case"keypress":if(ar(n)===0)break e;case"keydown":case"keyup":D=L1;break;case"focusin":oe="focus",D=is;break;case"focusout":oe="blur",D=is;break;case"beforeblur":case"afterblur":D=is;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=E1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=Y1;break;case Fd:case Wd:case ef:D=D1;break;case tf:D=Q1;break;case"scroll":case"scrollend":D=T1;break;case"wheel":D=V1;break;case"copy":case"cut":case"paste":D=O1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Od;break;case"toggle":case"beforetoggle":D=P1}var ie=(t&4)!==0,Te=!ie&&(e==="scroll"||e==="scrollend"),T=ie?A!==null?A+"Capture":null:A;ie=[];for(var z=C,E;z!==null;){var H=z;if(E=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||E===null||T===null||(H=Ni(z,T),H!=null&&ie.push(xl(z,H,E))),Te)break;z=z.return}0<ie.length&&(A=new D(A,oe,null,n,N),L.push({event:A,listeners:ie}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",A&&n!==Io&&(oe=n.relatedTarget||n.fromElement)&&($a(oe)||oe[za]))break e;if((D||A)&&(A=N.window===N?N:(A=N.ownerDocument)?A.defaultView||A.parentWindow:window,D?(oe=n.relatedTarget||n.toElement,D=C,oe=oe?$a(oe):null,oe!==null&&(Te=h(oe),ie=oe.tag,oe!==Te||ie!==5&&ie!==27&&ie!==6)&&(oe=null)):(D=null,oe=C),D!==oe)){if(ie=Dd,H="onMouseLeave",T="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Od,H="onPointerLeave",T="onPointerEnter",z="pointer"),Te=D==null?A:Bi(D),E=oe==null?A:Bi(oe),A=new ie(H,z+"leave",D,n,N),A.target=Te,A.relatedTarget=E,H=null,$a(N)===C&&(ie=new ie(T,z+"enter",oe,n,N),ie.target=E,ie.relatedTarget=Te,H=ie),Te=H,D&&oe)t:{for(ie=D,T=oe,z=0,E=ie;E;E=li(E))z++;for(E=0,H=T;H;H=li(H))E++;for(;0<z-E;)ie=li(ie),z--;for(;0<E-z;)T=li(T),E--;for(;z--;){if(ie===T||T!==null&&ie===T.alternate)break t;ie=li(ie),T=li(T)}ie=null}else ie=null;D!==null&&jh(L,A,D,ie,!1),oe!==null&&Te!==null&&jh(L,Te,oe,ie,!0)}}e:{if(A=C?Bi(C):window,D=A.nodeName&&A.nodeName.toLowerCase(),D==="select"||D==="input"&&A.type==="file")var F=qd;else if(Hd(A))if(Gd)F=ly;else{F=ay;var fe=ny}else D=A.nodeName,!D||D.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?C&&Jo(C.elementType)&&(F=qd):F=iy;if(F&&(F=F(e,C))){Ld(L,F,n,N);break e}fe&&fe(e,A,C),e==="focusout"&&C&&A.type==="number"&&C.memoizedProps.value!=null&&Po(A,"number",A.value)}switch(fe=C?Bi(C):window,e){case"focusin":(Hd(fe)||fe.contentEditable==="true")&&(Ma=fe,us=C,Qi=null);break;case"focusout":Qi=us=Ma=null;break;case"mousedown":ds=!0;break;case"contextmenu":case"mouseup":case"dragend":ds=!1,Jd(L,n,N);break;case"selectionchange":if(oy)break;case"keydown":case"keyup":Jd(L,n,N)}var W;if(rs)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else ka?Nd(e,n)&&(re="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(re="onCompositionStart");re&&(kd&&n.locale!=="ko"&&(ka||re!=="onCompositionStart"?re==="onCompositionEnd"&&ka&&(W=Cd()):(An=N,ts="value"in An?An.value:An.textContent,ka=!0)),fe=Zr(C,re),0<fe.length&&(re=new Rd(re,e,null,n,N),L.push({event:re,listeners:fe}),W?re.data=W:(W=Ud(n),W!==null&&(re.data=W)))),(W=I1?F1(e,n):W1(e,n))&&(re=Zr(C,"onBeforeInput"),0<re.length&&(fe=new Rd("onBeforeInput","beforeinput",null,n,N),L.push({event:fe,listeners:re}),fe.data=W)),Yy(L,e,C,n,N)}Sh(L,t)})}function xl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zr(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=Ni(e,n),l!=null&&a.unshift(xl(e,l,r)),l=Ni(e,t),l!=null&&a.push(xl(e,l,r))),e.tag===3)return a;e=e.return}return[]}function li(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function jh(e,t,n,a,l){for(var r=t._reactName,m=[];n!==null&&n!==a;){var p=n,v=p.alternate,C=p.stateNode;if(p=p.tag,v!==null&&v===a)break;p!==5&&p!==26&&p!==27||C===null||(v=C,l?(C=Ni(n,r),C!=null&&m.unshift(xl(n,C,v))):l||(C=Ni(n,r),C!=null&&m.push(xl(n,C,v)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var Vy=/\r\n?/g,Ky=/\u0000|\uFFFD/g;function zh(e){return(typeof e=="string"?e:""+e).replace(Vy,`
`).replace(Ky,"")}function $h(e,t){return t=zh(t),zh(e)===t}function Vr(){}function $e(e,t,n,a,l,r){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Da(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Da(e,""+a);break;case"className":Fl(e,"class",a);break;case"tabIndex":Fl(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Fl(e,n,a);break;case"style":Td(e,a,r);break;case"data":if(t!=="object"){Fl(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=tr(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&$e(e,t,"name",l.name,l,null),$e(e,t,"formEncType",l.formEncType,l,null),$e(e,t,"formMethod",l.formMethod,l,null),$e(e,t,"formTarget",l.formTarget,l,null)):($e(e,t,"encType",l.encType,l,null),$e(e,t,"method",l.method,l,null),$e(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=tr(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Vr);break;case"onScroll":a!=null&&ge("scroll",e);break;case"onScrollEnd":a!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=tr(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Il(e,"popover",a);break;case"xlinkActuate":un(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":un(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":un(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":un(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":un(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":un(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":un(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":un(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":un(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Il(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=z1.get(n)||n,Il(e,n,a))}}function kc(e,t,n,a,l,r){switch(n){case"style":Td(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Da(e,a):(typeof a=="number"||typeof a=="bigint")&&Da(e,""+a);break;case"onScroll":a!=null&&ge("scroll",e);break;case"onScrollEnd":a!=null&&ge("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Vr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),r=e[gt]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,l),typeof a=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Il(e,n,a)}}}function tt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var a=!1,l=!1,r;for(r in n)if(n.hasOwnProperty(r)){var m=n[r];if(m!=null)switch(r){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:$e(e,t,r,m,n,null)}}l&&$e(e,t,"srcSet",n.srcSet,n,null),a&&$e(e,t,"src",n.src,n,null);return;case"input":ge("invalid",e);var p=r=m=l=null,v=null,C=null;for(a in n)if(n.hasOwnProperty(a)){var N=n[a];if(N!=null)switch(a){case"name":l=N;break;case"type":m=N;break;case"checked":v=N;break;case"defaultChecked":C=N;break;case"value":r=N;break;case"defaultValue":p=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,t));break;default:$e(e,t,a,N,n,null)}}wd(e,r,p,v,C,m,l,!1),Wl(e);return;case"select":ge("invalid",e),a=m=r=null;for(l in n)if(n.hasOwnProperty(l)&&(p=n[l],p!=null))switch(l){case"value":r=p;break;case"defaultValue":m=p;break;case"multiple":a=p;default:$e(e,t,l,p,n,null)}t=r,n=m,e.multiple=!!a,t!=null?Aa(e,!!a,t,!1):n!=null&&Aa(e,!!a,n,!0);return;case"textarea":ge("invalid",e),r=l=a=null;for(m in n)if(n.hasOwnProperty(m)&&(p=n[m],p!=null))switch(m){case"value":a=p;break;case"defaultValue":l=p;break;case"children":r=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(u(91));break;default:$e(e,t,m,p,n,null)}zd(e,a,l,r),Wl(e);return;case"option":for(v in n)if(n.hasOwnProperty(v)&&(a=n[v],a!=null))switch(v){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:$e(e,t,v,a,n,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(a=0;a<bl.length;a++)ge(bl[a],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in n)if(n.hasOwnProperty(C)&&(a=n[C],a!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:$e(e,t,C,a,n,null)}return;default:if(Jo(t)){for(N in n)n.hasOwnProperty(N)&&(a=n[N],a!==void 0&&kc(e,t,N,a,n,void 0));return}}for(p in n)n.hasOwnProperty(p)&&(a=n[p],a!=null&&$e(e,t,p,a,n,null))}function Py(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,m=null,p=null,v=null,C=null,N=null;for(D in n){var L=n[D];if(n.hasOwnProperty(D)&&L!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":v=L;default:a.hasOwnProperty(D)||$e(e,t,D,null,a,L)}}for(var A in a){var D=a[A];if(L=n[A],a.hasOwnProperty(A)&&(D!=null||L!=null))switch(A){case"type":r=D;break;case"name":l=D;break;case"checked":C=D;break;case"defaultChecked":N=D;break;case"value":m=D;break;case"defaultValue":p=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(u(137,t));break;default:D!==L&&$e(e,t,A,D,a,L)}}Ko(e,m,p,v,C,N,r,l);return;case"select":D=m=p=A=null;for(r in n)if(v=n[r],n.hasOwnProperty(r)&&v!=null)switch(r){case"value":break;case"multiple":D=v;default:a.hasOwnProperty(r)||$e(e,t,r,null,a,v)}for(l in a)if(r=a[l],v=n[l],a.hasOwnProperty(l)&&(r!=null||v!=null))switch(l){case"value":A=r;break;case"defaultValue":p=r;break;case"multiple":m=r;default:r!==v&&$e(e,t,l,r,a,v)}t=p,n=m,a=D,A!=null?Aa(e,!!n,A,!1):!!a!=!!n&&(t!=null?Aa(e,!!n,t,!0):Aa(e,!!n,n?[]:"",!1));return;case"textarea":D=A=null;for(p in n)if(l=n[p],n.hasOwnProperty(p)&&l!=null&&!a.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:$e(e,t,p,null,a,l)}for(m in a)if(l=a[m],r=n[m],a.hasOwnProperty(m)&&(l!=null||r!=null))switch(m){case"value":A=l;break;case"defaultValue":D=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==r&&$e(e,t,m,l,a,r)}jd(e,A,D);return;case"option":for(var oe in n)if(A=n[oe],n.hasOwnProperty(oe)&&A!=null&&!a.hasOwnProperty(oe))switch(oe){case"selected":e.selected=!1;break;default:$e(e,t,oe,null,a,A)}for(v in a)if(A=a[v],D=n[v],a.hasOwnProperty(v)&&A!==D&&(A!=null||D!=null))switch(v){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:$e(e,t,v,A,a,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in n)A=n[ie],n.hasOwnProperty(ie)&&A!=null&&!a.hasOwnProperty(ie)&&$e(e,t,ie,null,a,A);for(C in a)if(A=a[C],D=n[C],a.hasOwnProperty(C)&&A!==D&&(A!=null||D!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(u(137,t));break;default:$e(e,t,C,A,a,D)}return;default:if(Jo(t)){for(var Te in n)A=n[Te],n.hasOwnProperty(Te)&&A!==void 0&&!a.hasOwnProperty(Te)&&kc(e,t,Te,void 0,a,A);for(N in a)A=a[N],D=n[N],!a.hasOwnProperty(N)||A===D||A===void 0&&D===void 0||kc(e,t,N,A,a,D);return}}for(var T in n)A=n[T],n.hasOwnProperty(T)&&A!=null&&!a.hasOwnProperty(T)&&$e(e,t,T,null,a,A);for(L in a)A=a[L],D=n[L],!a.hasOwnProperty(L)||A===D||A==null&&D==null||$e(e,t,L,A,a,D)}var Mc=null,Bc=null;function Kr(e){return e.nodeType===9?e:e.ownerDocument}function Th(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _h(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Nc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Uc=null;function Jy(){var e=window.event;return e&&e.type==="popstate"?e===Uc?!1:(Uc=e,!0):(Uc=null,!1)}var Eh=typeof setTimeout=="function"?setTimeout:void 0,Iy=typeof clearTimeout=="function"?clearTimeout:void 0,Ch=typeof Promise=="function"?Promise:void 0,Fy=typeof queueMicrotask=="function"?queueMicrotask:typeof Ch<"u"?function(e){return Ch.resolve(null).then(e).catch(Wy)}:Eh;function Wy(e){setTimeout(function(){throw e})}function Zn(e){return e==="head"}function Ah(e,t){var n=t,a=0,l=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<a&&8>a){n=a;var m=e.ownerDocument;if(n&1&&vl(m.documentElement),n&2&&vl(m.body),n&4)for(n=m.head,vl(n),m=n.firstChild;m;){var p=m.nextSibling,v=m.nodeName;m[Mi]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&m.rel.toLowerCase()==="stylesheet"||n.removeChild(m),m=p}}if(l===0){e.removeChild(r),El(t);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:a=n.charCodeAt(0)-48;else a=0;n=r}while(n);El(t)}function Hc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Hc(n),Xo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function eb(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Mi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Zt(e.nextSibling),e===null)break}return null}function tb(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Zt(e.nextSibling),e===null))return null;return e}function Lc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function nb(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var qc=null;function Dh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Rh(e,t,n){switch(t=Kr(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function vl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Xo(e)}var qt=new Map,Oh=new Set;function Pr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var zn=J.d;J.d={f:ab,r:ib,D:lb,C:rb,L:ob,m:sb,X:ub,S:cb,M:db};function ab(){var e=zn.f(),t=Lr();return e||t}function ib(e){var t=Ta(e);t!==null&&t.tag===5&&t.type==="form"?Wf(t):zn.r(e)}var ri=typeof document>"u"?null:document;function kh(e,t,n){var a=ri;if(a&&typeof t=="string"&&t){var l=kt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Oh.has(l)||(Oh.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),tt(t,"link",e),Ve(t),a.head.appendChild(t)))}}function lb(e){zn.D(e),kh("dns-prefetch",e,null)}function rb(e,t){zn.C(e,t),kh("preconnect",e,t)}function ob(e,t,n){zn.L(e,t,n);var a=ri;if(a&&e&&t){var l='link[rel="preload"][as="'+kt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+kt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+kt(n.imageSizes)+'"]')):l+='[href="'+kt(e)+'"]';var r=l;switch(t){case"style":r=oi(e);break;case"script":r=si(e)}qt.has(r)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),qt.set(r,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(Sl(r))||t==="script"&&a.querySelector(wl(r))||(t=a.createElement("link"),tt(t,"link",e),Ve(t),a.head.appendChild(t)))}}function sb(e,t){zn.m(e,t);var n=ri;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+kt(a)+'"][href="'+kt(e)+'"]',r=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=si(e)}if(!qt.has(r)&&(e=w({rel:"modulepreload",href:e},t),qt.set(r,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(wl(r)))return}a=n.createElement("link"),tt(a,"link",e),Ve(a),n.head.appendChild(a)}}}function cb(e,t,n){zn.S(e,t,n);var a=ri;if(a&&e){var l=_a(a).hoistableStyles,r=oi(e);t=t||"default";var m=l.get(r);if(!m){var p={loading:0,preload:null};if(m=a.querySelector(Sl(r)))p.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=qt.get(r))&&Gc(e,n);var v=m=a.createElement("link");Ve(v),tt(v,"link",e),v._p=new Promise(function(C,N){v.onload=C,v.onerror=N}),v.addEventListener("load",function(){p.loading|=1}),v.addEventListener("error",function(){p.loading|=2}),p.loading|=4,Jr(m,t,a)}m={type:"stylesheet",instance:m,count:1,state:p},l.set(r,m)}}}function ub(e,t){zn.X(e,t);var n=ri;if(n&&e){var a=_a(n).hoistableScripts,l=si(e),r=a.get(l);r||(r=n.querySelector(wl(l)),r||(e=w({src:e,async:!0},t),(t=qt.get(l))&&Yc(e,t),r=n.createElement("script"),Ve(r),tt(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function db(e,t){zn.M(e,t);var n=ri;if(n&&e){var a=_a(n).hoistableScripts,l=si(e),r=a.get(l);r||(r=n.querySelector(wl(l)),r||(e=w({src:e,async:!0,type:"module"},t),(t=qt.get(l))&&Yc(e,t),r=n.createElement("script"),Ve(r),tt(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function Mh(e,t,n,a){var l=(l=le.current)?Pr(l):null;if(!l)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=oi(n.href),n=_a(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=oi(n.href);var r=_a(l).hoistableStyles,m=r.get(e);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,m),(r=l.querySelector(Sl(e)))&&!r._p&&(m.instance=r,m.state.loading=5),qt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},qt.set(e,n),r||fb(l,e,n,m.state))),t&&a===null)throw Error(u(528,""));return m}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=si(n),n=_a(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function oi(e){return'href="'+kt(e)+'"'}function Sl(e){return'link[rel="stylesheet"]['+e+"]"}function Bh(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function fb(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),tt(t,"link",n),Ve(t),e.head.appendChild(t))}function si(e){return'[src="'+kt(e)+'"]'}function wl(e){return"script[async]"+e}function Nh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+kt(n.href)+'"]');if(a)return t.instance=a,Ve(a),a;var l=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ve(a),tt(a,"style",l),Jr(a,n.precedence,e),t.instance=a;case"stylesheet":l=oi(n.href);var r=e.querySelector(Sl(l));if(r)return t.state.loading|=4,t.instance=r,Ve(r),r;a=Bh(n),(l=qt.get(l))&&Gc(a,l),r=(e.ownerDocument||e).createElement("link"),Ve(r);var m=r;return m._p=new Promise(function(p,v){m.onload=p,m.onerror=v}),tt(r,"link",a),t.state.loading|=4,Jr(r,n.precedence,e),t.instance=r;case"script":return r=si(n.src),(l=e.querySelector(wl(r)))?(t.instance=l,Ve(l),l):(a=n,(l=qt.get(r))&&(a=w({},n),Yc(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ve(l),tt(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Jr(a,n.precedence,e));return t.instance}function Jr(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,r=l,m=0;m<a.length;m++){var p=a[m];if(p.dataset.precedence===t)r=p;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Gc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Yc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ir=null;function Uh(e,t,n){if(Ir===null){var a=new Map,l=Ir=new Map;l.set(n,a)}else l=Ir,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var r=n[l];if(!(r[Mi]||r[rt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var m=r.getAttribute(t)||"";m=e+m;var p=a.get(m);p?p.push(r):a.set(m,[r])}}return a}function Hh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function mb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Lh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var jl=null;function hb(){}function pb(e,t,n){if(jl===null)throw Error(u(475));var a=jl;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=oi(n.href),r=e.querySelector(Sl(l));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Fr.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=r,Ve(r);return}r=e.ownerDocument||e,n=Bh(n),(l=qt.get(l))&&Gc(n,l),r=r.createElement("link"),Ve(r);var m=r;m._p=new Promise(function(p,v){m.onload=p,m.onerror=v}),tt(r,"link",n),t.instance=r}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Fr.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function gb(){if(jl===null)throw Error(u(475));var e=jl;return e.stylesheets&&e.count===0&&Xc(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Xc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Fr(){if(this.count--,this.count===0){if(this.stylesheets)Xc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wr=null;function Xc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wr=new Map,t.forEach(yb,e),Wr=null,Fr.call(e))}function yb(e,t){if(!(t.state.loading&4)){var n=Wr.get(e);if(n)var a=n.get(null);else{n=new Map,Wr.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var m=l[r];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),a=m)}a&&n.set(null,a)}l=t.instance,m=l.getAttribute("data-precedence"),r=n.get(m)||a,r===a&&n.set(null,l),n.set(m,l),this.count++,a=Fr.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var zl={$$typeof:Z,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function bb(e,t,n,a,l,r,m,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lo(0),this.hiddenUpdates=Lo(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function qh(e,t,n,a,l,r,m,p,v,C,N,L){return e=new bb(e,t,n,m,p,v,C,L),t=1,r===!0&&(t|=24),r=zt(3,null,null,t),e.current=r,r.stateNode=e,t=$s(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:t},Cs(r),e}function Gh(e){return e?(e=Ha,e):Ha}function Yh(e,t,n,a,l,r){l=Gh(l),a.context===null?a.context=l:a.pendingContext=l,a=On(t),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=kn(e,a,t),n!==null&&(Ct(n,e,t),el(n,e,t))}function Xh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qc(e,t){Xh(e,t),(e=e.alternate)&&Xh(e,t)}function Qh(e){if(e.tag===13){var t=Ua(e,67108864);t!==null&&Ct(t,e,67108864),Qc(e,67108864)}}var eo=!0;function xb(e,t,n,a){var l=B.T;B.T=null;var r=J.p;try{J.p=2,Zc(e,t,n,a)}finally{J.p=r,B.T=l}}function vb(e,t,n,a){var l=B.T;B.T=null;var r=J.p;try{J.p=8,Zc(e,t,n,a)}finally{J.p=r,B.T=l}}function Zc(e,t,n,a){if(eo){var l=Vc(a);if(l===null)Oc(e,t,a,to,n),Vh(e,a);else if(wb(l,e,t,n,a))a.stopPropagation();else if(Vh(e,a),t&4&&-1<Sb.indexOf(e)){for(;l!==null;){var r=Ta(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var m=ta(r.pendingLanes);if(m!==0){var p=r;for(p.pendingLanes|=2,p.entangledLanes|=2;m;){var v=1<<31-wt(m);p.entanglements[1]|=v,m&=~v}ln(r),(we&6)===0&&(Ur=Wt()+500,yl(0))}}break;case 13:p=Ua(r,2),p!==null&&Ct(p,r,2),Lr(),Qc(r,2)}if(r=Vc(a),r===null&&Oc(e,t,a,to,n),r===l)break;l=r}l!==null&&a.stopPropagation()}else Oc(e,t,a,null,n)}}function Vc(e){return e=Fo(e),Kc(e)}var to=null;function Kc(e){if(to=null,e=$a(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return to=e,null}function Zh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(r1()){case ld:return 2;case rd:return 8;case Vl:case o1:return 32;case od:return 268435456;default:return 32}default:return 32}}var Pc=!1,Vn=null,Kn=null,Pn=null,$l=new Map,Tl=new Map,Jn=[],Sb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vh(e,t){switch(e){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":$l.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tl.delete(t.pointerId)}}function _l(e,t,n,a,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[l]},t!==null&&(t=Ta(t),t!==null&&Qh(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function wb(e,t,n,a,l){switch(t){case"focusin":return Vn=_l(Vn,e,t,n,a,l),!0;case"dragenter":return Kn=_l(Kn,e,t,n,a,l),!0;case"mouseover":return Pn=_l(Pn,e,t,n,a,l),!0;case"pointerover":var r=l.pointerId;return $l.set(r,_l($l.get(r)||null,e,t,n,a,l)),!0;case"gotpointercapture":return r=l.pointerId,Tl.set(r,_l(Tl.get(r)||null,e,t,n,a,l)),!0}return!1}function Kh(e){var t=$a(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=y(n),t!==null){e.blockedOn=t,p1(e.priority,function(){if(n.tag===13){var a=Et();a=qo(a);var l=Ua(n,a);l!==null&&Ct(l,n,a),Qc(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function no(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Io=a,n.target.dispatchEvent(a),Io=null}else return t=Ta(n),t!==null&&Qh(t),e.blockedOn=n,!1;t.shift()}return!0}function Ph(e,t,n){no(e)&&n.delete(t)}function jb(){Pc=!1,Vn!==null&&no(Vn)&&(Vn=null),Kn!==null&&no(Kn)&&(Kn=null),Pn!==null&&no(Pn)&&(Pn=null),$l.forEach(Ph),Tl.forEach(Ph)}function ao(e,t){e.blockedOn===t&&(e.blockedOn=null,Pc||(Pc=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,jb)))}var io=null;function Jh(e){io!==e&&(io=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){io===e&&(io=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(Kc(a||n)===null)continue;break}var r=Ta(n);r!==null&&(e.splice(t,3),t-=3,Ks(r,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function El(e){function t(v){return ao(v,e)}Vn!==null&&ao(Vn,e),Kn!==null&&ao(Kn,e),Pn!==null&&ao(Pn,e),$l.forEach(t),Tl.forEach(t);for(var n=0;n<Jn.length;n++){var a=Jn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Jn.length&&(n=Jn[0],n.blockedOn===null);)Kh(n),n.blockedOn===null&&Jn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],r=n[a+1],m=l[gt]||null;if(typeof r=="function")m||Jh(n);else if(m){var p=null;if(r&&r.hasAttribute("formAction")){if(l=r,m=r[gt]||null)p=m.formAction;else if(Kc(l)!==null)continue}else p=m.action;typeof p=="function"?n[a+1]=p:(n.splice(a,3),a-=3),Jh(n)}}}function Jc(e){this._internalRoot=e}lo.prototype.render=Jc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=Et();Yh(n,a,e,t,null,null)},lo.prototype.unmount=Jc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yh(e.current,2,null,e,null,null),Lr(),t[za]=null}};function lo(e){this._internalRoot=e}lo.prototype.unstable_scheduleHydration=function(e){if(e){var t=fd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jn.length&&t!==0&&t<Jn[n].priority;n++);Jn.splice(n,0,e),n===0&&Kh(e)}};var Ih=o.version;if(Ih!=="19.1.1")throw Error(u(527,Ih,"19.1.1"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=b(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var zb={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ro.isDisabled&&ro.supportsFiber)try{Ri=ro.inject(zb),St=ro}catch{}}return Al.createRoot=function(e,t){if(!f(e))throw Error(u(299));var n=!1,a="",l=mm,r=hm,m=pm,p=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(p=t.unstable_transitionCallbacks)),t=qh(e,1,!1,null,null,n,a,l,r,m,p,null),e[za]=t.current,Rc(e),new Jc(t)},Al.hydrateRoot=function(e,t,n){if(!f(e))throw Error(u(299));var a=!1,l="",r=mm,m=hm,p=pm,v=null,C=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(v=n.unstable_transitionCallbacks),n.formState!==void 0&&(C=n.formState)),t=qh(e,1,!0,t,n??null,a,l,r,m,p,v,C),t.context=Gh(null),n=t.current,a=Et(),a=qo(a),l=On(a),l.callback=null,kn(n,l,a),n=a,t.current.lanes=n,ki(t,n),ln(t),e[za]=t.current,Rc(e),new lo(t)},Al.version="19.1.1",Al}var op;function Mb(){if(op)return Wc.exports;op=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(o){console.error(o)}}return i(),Wc.exports=kb(),Wc.exports}var Bb=Mb();const Nb="https://morbid-gene-2-0.onrender.com",ht=async(i,o={})=>{const c=`${Nb}${i}`,u={headers:{"Content-Type":"application/json",...o.headers},credentials:"include",...o};return await fetch(c,u)},Ub=async i=>{const o=await ht("/api/merch/baskets",{method:"POST",body:JSON.stringify({basketItems:i})});if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);return o.json()},ci=async i=>{const o=await ht(`/api/merch/baskets/${i}`);if(!o.ok){if(o.status===404)return null;throw new Error(`HTTP error! status: ${o.status}`)}return o.json()},au=async(i,o)=>{const c=await ht(`/api/merch/baskets/${i}`,{method:"PUT",body:JSON.stringify({basketItems:o})});if(!c.ok)throw new Error(`HTTP error! status: ${c.status}`);return c.json()},sp=async i=>{const o=await ht(`/api/merch/baskets/${i}`,{method:"DELETE"});if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);return!0},Hb=async(i,o,c,u=1)=>{const f=await ht("/api/merch/baskets/convert",{method:"POST",body:JSON.stringify({productId:i,sizeName:o,colorName:c,quantity:u})});if(!f.ok)throw new Error(`HTTP error! status: ${f.status}`);return f.json()},Lb=async i=>{const o=await ht(`/api/merch/baskets/${i}/checkout`);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);return o.json()},qb=(i,o=null,c=null)=>{const u=i.element.properties,f=u.find(_=>_.key==="sizeLabel")?.value,h=u.find(_=>_.key==="appearanceLabel")?.value,y=u.find(_=>_.key==="sellable")?.value,S=u.find(_=>_.key==="appearance")?.value;let b;c&&c.amount?b={amount:c.amount,currencyId:c.currencyId||"EUR",display:c.amount,vatIncluded:c.amount,vatExcluded:c.amount}:b={...i.priceItem,display:i.priceItem.display/100,vatIncluded:i.priceItem.vatIncluded/100,vatExcluded:i.priceItem.vatExcluded/100};let g=o;if(o){const _=`cart-image-${y}-${f}-${S}`,R=`cart-image-${y}-${f}`;try{localStorage.setItem(_,o),localStorage.setItem(R,o)}catch(M){console.error("Kunde inte spara bild till localStorage:",M)}}const w=`cart-price-${y}-${f}`;if(c&&c.amount)try{localStorage.setItem(w,JSON.stringify(b))}catch(_){console.error("Kunde inte spara pris till localStorage:",_)}else if(!c)try{const _=localStorage.getItem(w);_&&(b=JSON.parse(_))}catch(_){console.error("Kunde inte läsa pris från localStorage:",_)}if(!o){const _=[`cart-image-${y}-${f}-${S}`,`cart-image-${y}-${f}`,`cart-image-${y}-${f}-default`,`cart-image-${y}-${f}-undefined`];for(const R of _)try{const M=localStorage.getItem(R);if(M&&M.startsWith("http")){g=M;break}}catch(M){console.error("Kunde inte läsa bild från localStorage:",M)}}return{sellableId:y,name:i.description,price:b,originalPrice:b,size:f,color:h,appearanceId:S,quantity:i.quantity,selectedImage:g}},Co=$.createContext(),xo=i=>{const o=i.element.properties;return{sellableId:o.find(c=>c.key==="sellable")?.value,sizeLabel:o.find(c=>c.key==="sizeLabel")?.value}},Gb=(i,o,c)=>i.find(u=>u.sellableId===o&&u.size===c),Yb=(i,o,c)=>i.findIndex(u=>{const{sellableId:f,sizeLabel:h}=xo(u);return f===o&&h===c}),ui=(i,o,c=null,u=null,f=-1)=>i.map((h,y)=>{const{sellableId:S,sizeLabel:b}=xo(h),g=Gb(o,S,b),w=f>=0?y===f:!1,_=w?c:g?.selectedImage||null,R=w?u:g?.originalPrice||null;return g?{...g,quantity:h.quantity}:qb(h,_,R)}),Xb=({children:i})=>{const[o,c]=$.useState([]),[u,f]=$.useState(null),[h,y]=$.useState(!1),[S,b]=$.useState(null);$.useEffect(()=>{(async()=>{const O=localStorage.getItem("spreadshirt-basket-id");if(O){y(!0);try{const U=await ci(O);U?.basketItems?(f(O),c(ui(U.basketItems,[]))):localStorage.removeItem("spreadshirt-basket-id")}catch(U){console.error("Error loading basket:",U),localStorage.removeItem("spreadshirt-basket-id"),b("Could not load cart")}finally{y(!1)}}})()},[]);const g=async q=>{if(q.length===0)await sp(u),f(null),c([]),localStorage.removeItem("spreadshirt-basket-id");else{const O=await au(u,q);c(ui(O.basketItems,o))}},w=async(q,O,U)=>{const V=await Ub([q]);f(V.id),localStorage.setItem("spreadshirt-basket-id",V.id);const te=await ci(V.id),se=te.basketItems.length-1;c(ui(te.basketItems,[],O,U,se))},_=async(q,O,U,V,te,se,ne)=>{const Ce=await ci(u),Re=Yb(Ce.basketItems,q.sellableId,O);let pt;Re>=0?(pt=[...Ce.basketItems],pt[Re].quantity+=te):pt=[...Ce.basketItems,ne];const Dt=await au(u,pt),Le=Re<0?Dt.basketItems.length-1:-1;c(ui(Dt.basketItems,o,U,se,Le))},R=async(q,O,U,V,te=1,se=null)=>{y(!0),b(null);try{const ne=await Hb(q.sellableId,O,V,te);u?await _(q,O,U,V,te,se,ne):await w(ne,U,se)}catch(ne){console.error("Error adding to cart:",ne),b("Could not add item to cart")}finally{y(!1)}},M=async(q,O)=>{if(u){y(!0),b(null);try{const V=(await ci(u)).basketItems.filter(te=>{const{sellableId:se,sizeLabel:ne}=xo(te);return!(se===q&&ne===O)});await g(V)}catch(U){console.error("Error removing from cart:",U),b("Could not remove item from cart")}finally{y(!1)}}},X=(q,O,U)=>{c(V=>V.map(te=>te.sellableId===q&&te.size===O?{...te,quantity:U}:te))},Y=async(q,O,U)=>{if(U<=0)return M(q,O);if(u){X(q,O,U),b(null);try{const te=(await ci(u)).basketItems.map(ne=>{const{sellableId:Ce,sizeLabel:Re}=xo(ne);return Ce===q&&Re===O?{...ne,quantity:U}:ne}),se=await au(u,te);c(ui(se.basketItems,o))}catch(V){console.error("Error updating quantity:",V),b("Could not update quantity");try{const te=await ci(u);c(ui(te.basketItems,o))}catch(te){console.error("Error restoring cart state:",te)}}}},K=async()=>{if(u){y(!0),b(null);try{await sp(u),f(null),c([]),localStorage.removeItem("spreadshirt-basket-id")}catch(q){console.error("Error clearing cart:",q),b("Could not clear cart")}finally{y(!1)}}},k=()=>o.reduce((q,O)=>q+O.quantity,0),Q=()=>o.reduce((q,O)=>{const U=parseFloat(O.price?.display||O.price?.amount||0);return q+U*O.quantity},0),Z=()=>b(null);return s.jsx(Co.Provider,{value:{cartItems:o,basketId:u,loading:h,error:S,addToCart:R,removeFromCart:M,updateQuantity:Y,clearCart:K,getTotalItems:k,getTotalPrice:Q,clearError:Z},children:i})},Wp=$.createContext(),_i=()=>{const i=$.useContext(Wp);if(!i)throw new Error("useAuth must be used within AuthProvider");return i},Qb=({children:i})=>{const[o,c]=$.useState(null),[u,f]=$.useState(!0),[h,y]=$.useState([]),S=async(k,Q={})=>{try{const Z=await ht(k,{credentials:"include",...Q}),q=await Z.json();return{success:Z.ok,data:q,response:Z}}catch(Z){return console.error(`API call error (${k}):`,Z),{success:!1,error:"Network error"}}};$.useEffect(()=>{b()},[]);const b=async()=>{const k=await S("/auth/me");k.success?(c(k.data),await g(k.data)):c(null),f(!1)},g=async(k=o)=>{if(!k)return;const Q=await S("/auth/favorites");Q.success&&y(Q.data)},K={user:o,loading:u,favorites:h,login:async(k,Q)=>{const Z=await S("/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:k,password:Q})});return Z.success?(c(Z.data.user),await g(Z.data.user),{success:!0}):{success:!1,error:Z.data?.message||Z.error}},register:async(k,Q,Z)=>{const q=await S("/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:k,email:Q,password:Z})});return q.success?(c(q.data.user),{success:!0}):{success:!1,error:q.data?.message||q.error}},logout:async()=>{await S("/auth/logout",{method:"POST"}),c(null),y([]);const k=window.location.pathname;(k==="/settings"||k==="/favorites")&&(window.location.href="/merch")},addToFavorites:async k=>{if(!o)return{success:!1,error:"Please login to add favorites"};const Q=await S("/auth/favorites",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sellableId:k.sellableId,name:k.name,productTypeName:k.productTypeName,price:k.price,previewImage:k.previewImage})});return Q.success?(g(),{success:!0,message:Q.data.message}):{success:!1,error:Q.data?.message||Q.error}},removeFromFavorites:async k=>{if(!o)return{success:!1,error:"Please login first"};const Q=await S(`/auth/favorites/${k}`,{method:"DELETE"});return Q.success?(g(),{success:!0,message:Q.data.message}):{success:!1,error:Q.data?.message||Q.error}},isFavorite:k=>h.some(Q=>Q.sellableId===k),isAuthenticated:!!o};return s.jsx(Wp.Provider,{value:K,children:i})};var ut=function(){return ut=Object.assign||function(o){for(var c,u=1,f=arguments.length;u<f;u++){c=arguments[u];for(var h in c)Object.prototype.hasOwnProperty.call(c,h)&&(o[h]=c[h])}return o},ut.apply(this,arguments)};function Si(i,o,c){if(c||arguments.length===2)for(var u=0,f=o.length,h;u<f;u++)(h||!(u in o))&&(h||(h=Array.prototype.slice.call(o,0,u)),h[u]=o[u]);return i.concat(h||Array.prototype.slice.call(o))}var De="-ms-",Ll="-moz-",Se="-webkit-",eg="comm",Ao="rule",qu="decl",Zb="@import",tg="@keyframes",Vb="@layer",ng=Math.abs,Gu=String.fromCharCode,Eu=Object.assign;function Kb(i,o){return Ie(i,0)^45?(((o<<2^Ie(i,0))<<2^Ie(i,1))<<2^Ie(i,2))<<2^Ie(i,3):0}function ag(i){return i.trim()}function $n(i,o){return(i=o.exec(i))?i[0]:i}function ue(i,o,c){return i.replace(o,c)}function fo(i,o,c){return i.indexOf(o,c)}function Ie(i,o){return i.charCodeAt(o)|0}function wi(i,o,c){return i.slice(o,c)}function rn(i){return i.length}function ig(i){return i.length}function Hl(i,o){return o.push(i),i}function Pb(i,o){return i.map(o).join("")}function cp(i,o){return i.filter(function(c){return!$n(c,o)})}var Do=1,ji=1,lg=0,Yt=0,Ye=0,Ei="";function Ro(i,o,c,u,f,h,y,S){return{value:i,root:o,parent:c,type:u,props:f,children:h,line:Do,column:ji,length:y,return:"",siblings:S}}function Fn(i,o){return Eu(Ro("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},o)}function di(i){for(;i.root;)i=Fn(i.root,{children:[i]});Hl(i,i.siblings)}function Jb(){return Ye}function Ib(){return Ye=Yt>0?Ie(Ei,--Yt):0,ji--,Ye===10&&(ji=1,Do--),Ye}function Kt(){return Ye=Yt<lg?Ie(Ei,Yt++):0,ji++,Ye===10&&(ji=1,Do++),Ye}function wa(){return Ie(Ei,Yt)}function mo(){return Yt}function Oo(i,o){return wi(Ei,i,o)}function Cu(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Fb(i){return Do=ji=1,lg=rn(Ei=i),Yt=0,[]}function Wb(i){return Ei="",i}function iu(i){return ag(Oo(Yt-1,Au(i===91?i+2:i===40?i+1:i)))}function ex(i){for(;(Ye=wa())&&Ye<33;)Kt();return Cu(i)>2||Cu(Ye)>3?"":" "}function tx(i,o){for(;--o&&Kt()&&!(Ye<48||Ye>102||Ye>57&&Ye<65||Ye>70&&Ye<97););return Oo(i,mo()+(o<6&&wa()==32&&Kt()==32))}function Au(i){for(;Kt();)switch(Ye){case i:return Yt;case 34:case 39:i!==34&&i!==39&&Au(Ye);break;case 40:i===41&&Au(i);break;case 92:Kt();break}return Yt}function nx(i,o){for(;Kt()&&i+Ye!==57;)if(i+Ye===84&&wa()===47)break;return"/*"+Oo(o,Yt-1)+"*"+Gu(i===47?i:Kt())}function ax(i){for(;!Cu(wa());)Kt();return Oo(i,Yt)}function ix(i){return Wb(ho("",null,null,null,[""],i=Fb(i),0,[0],i))}function ho(i,o,c,u,f,h,y,S,b){for(var g=0,w=0,_=y,R=0,M=0,X=0,Y=1,K=1,k=1,Q=0,Z="",q=f,O=h,U=u,V=Z;K;)switch(X=Q,Q=Kt()){case 40:if(X!=108&&Ie(V,_-1)==58){fo(V+=ue(iu(Q),"&","&\f"),"&\f",ng(g?S[g-1]:0))!=-1&&(k=-1);break}case 34:case 39:case 91:V+=iu(Q);break;case 9:case 10:case 13:case 32:V+=ex(X);break;case 92:V+=tx(mo()-1,7);continue;case 47:switch(wa()){case 42:case 47:Hl(lx(nx(Kt(),mo()),o,c,b),b);break;default:V+="/"}break;case 123*Y:S[g++]=rn(V)*k;case 125*Y:case 59:case 0:switch(Q){case 0:case 125:K=0;case 59+w:k==-1&&(V=ue(V,/\f/g,"")),M>0&&rn(V)-_&&Hl(M>32?dp(V+";",u,c,_-1,b):dp(ue(V," ","")+";",u,c,_-2,b),b);break;case 59:V+=";";default:if(Hl(U=up(V,o,c,g,w,f,S,Z,q=[],O=[],_,h),h),Q===123)if(w===0)ho(V,o,U,U,q,h,_,S,O);else switch(R===99&&Ie(V,3)===110?100:R){case 100:case 108:case 109:case 115:ho(i,U,U,u&&Hl(up(i,U,U,0,0,f,S,Z,f,q=[],_,O),O),f,O,_,S,u?q:O);break;default:ho(V,U,U,U,[""],O,0,S,O)}}g=w=M=0,Y=k=1,Z=V="",_=y;break;case 58:_=1+rn(V),M=X;default:if(Y<1){if(Q==123)--Y;else if(Q==125&&Y++==0&&Ib()==125)continue}switch(V+=Gu(Q),Q*Y){case 38:k=w>0?1:(V+="\f",-1);break;case 44:S[g++]=(rn(V)-1)*k,k=1;break;case 64:wa()===45&&(V+=iu(Kt())),R=wa(),w=_=rn(Z=V+=ax(mo())),Q++;break;case 45:X===45&&rn(V)==2&&(Y=0)}}return h}function up(i,o,c,u,f,h,y,S,b,g,w,_){for(var R=f-1,M=f===0?h:[""],X=ig(M),Y=0,K=0,k=0;Y<u;++Y)for(var Q=0,Z=wi(i,R+1,R=ng(K=y[Y])),q=i;Q<X;++Q)(q=ag(K>0?M[Q]+" "+Z:ue(Z,/&\f/g,M[Q])))&&(b[k++]=q);return Ro(i,o,c,f===0?Ao:S,b,g,w,_)}function lx(i,o,c,u){return Ro(i,o,c,eg,Gu(Jb()),wi(i,2,-2),0,u)}function dp(i,o,c,u,f){return Ro(i,o,c,qu,wi(i,0,u),wi(i,u+1,-1),u,f)}function rg(i,o,c){switch(Kb(i,o)){case 5103:return Se+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Se+i+i;case 4789:return Ll+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return Se+i+Ll+i+De+i+i;case 5936:switch(Ie(i,o+11)){case 114:return Se+i+De+ue(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return Se+i+De+ue(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return Se+i+De+ue(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return Se+i+De+i+i;case 6165:return Se+i+De+"flex-"+i+i;case 5187:return Se+i+ue(i,/(\w+).+(:[^]+)/,Se+"box-$1$2"+De+"flex-$1$2")+i;case 5443:return Se+i+De+"flex-item-"+ue(i,/flex-|-self/g,"")+($n(i,/flex-|baseline/)?"":De+"grid-row-"+ue(i,/flex-|-self/g,""))+i;case 4675:return Se+i+De+"flex-line-pack"+ue(i,/align-content|flex-|-self/g,"")+i;case 5548:return Se+i+De+ue(i,"shrink","negative")+i;case 5292:return Se+i+De+ue(i,"basis","preferred-size")+i;case 6060:return Se+"box-"+ue(i,"-grow","")+Se+i+De+ue(i,"grow","positive")+i;case 4554:return Se+ue(i,/([^-])(transform)/g,"$1"+Se+"$2")+i;case 6187:return ue(ue(ue(i,/(zoom-|grab)/,Se+"$1"),/(image-set)/,Se+"$1"),i,"")+i;case 5495:case 3959:return ue(i,/(image-set\([^]*)/,Se+"$1$`$1");case 4968:return ue(ue(i,/(.+:)(flex-)?(.*)/,Se+"box-pack:$3"+De+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Se+i+i;case 4200:if(!$n(i,/flex-|baseline/))return De+"grid-column-align"+wi(i,o)+i;break;case 2592:case 3360:return De+ue(i,"template-","")+i;case 4384:case 3616:return c&&c.some(function(u,f){return o=f,$n(u.props,/grid-\w+-end/)})?~fo(i+(c=c[o].value),"span",0)?i:De+ue(i,"-start","")+i+De+"grid-row-span:"+(~fo(c,"span",0)?$n(c,/\d+/):+$n(c,/\d+/)-+$n(i,/\d+/))+";":De+ue(i,"-start","")+i;case 4896:case 4128:return c&&c.some(function(u){return $n(u.props,/grid-\w+-start/)})?i:De+ue(ue(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return ue(i,/(.+)-inline(.+)/,Se+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rn(i)-1-o>6)switch(Ie(i,o+1)){case 109:if(Ie(i,o+4)!==45)break;case 102:return ue(i,/(.+:)(.+)-([^]+)/,"$1"+Se+"$2-$3$1"+Ll+(Ie(i,o+3)==108?"$3":"$2-$3"))+i;case 115:return~fo(i,"stretch",0)?rg(ue(i,"stretch","fill-available"),o,c)+i:i}break;case 5152:case 5920:return ue(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,f,h,y,S,b,g){return De+f+":"+h+g+(y?De+f+"-span:"+(S?b:+b-+h)+g:"")+i});case 4949:if(Ie(i,o+6)===121)return ue(i,":",":"+Se)+i;break;case 6444:switch(Ie(i,Ie(i,14)===45?18:11)){case 120:return ue(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Se+(Ie(i,14)===45?"inline-":"")+"box$3$1"+Se+"$2$3$1"+De+"$2box$3")+i;case 100:return ue(i,":",":"+De)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ue(i,"scroll-","scroll-snap-")+i}return i}function vo(i,o){for(var c="",u=0;u<i.length;u++)c+=o(i[u],u,i,o)||"";return c}function rx(i,o,c,u){switch(i.type){case Vb:if(i.children.length)break;case Zb:case qu:return i.return=i.return||i.value;case eg:return"";case tg:return i.return=i.value+"{"+vo(i.children,u)+"}";case Ao:if(!rn(i.value=i.props.join(",")))return""}return rn(c=vo(i.children,u))?i.return=i.value+"{"+c+"}":""}function ox(i){var o=ig(i);return function(c,u,f,h){for(var y="",S=0;S<o;S++)y+=i[S](c,u,f,h)||"";return y}}function sx(i){return function(o){o.root||(o=o.return)&&i(o)}}function cx(i,o,c,u){if(i.length>-1&&!i.return)switch(i.type){case qu:i.return=rg(i.value,i.length,c);return;case tg:return vo([Fn(i,{value:ue(i.value,"@","@"+Se)})],u);case Ao:if(i.length)return Pb(c=i.props,function(f){switch($n(f,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":di(Fn(i,{props:[ue(f,/:(read-\w+)/,":"+Ll+"$1")]})),di(Fn(i,{props:[f]})),Eu(i,{props:cp(c,u)});break;case"::placeholder":di(Fn(i,{props:[ue(f,/:(plac\w+)/,":"+Se+"input-$1")]})),di(Fn(i,{props:[ue(f,/:(plac\w+)/,":"+Ll+"$1")]})),di(Fn(i,{props:[ue(f,/:(plac\w+)/,De+"input-$1")]})),di(Fn(i,{props:[f]})),Eu(i,{props:cp(c,u)});break}return""})}}var ux={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},At={},zi=typeof process<"u"&&At!==void 0&&(At.REACT_APP_SC_ATTR||At.SC_ATTR)||"data-styled",og="active",sg="data-styled-version",ko="6.1.19",Yu=`/*!sc*/
`,So=typeof window<"u"&&typeof document<"u",dx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&At!==void 0&&At.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&At.REACT_APP_SC_DISABLE_SPEEDY!==""?At.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&At.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&At!==void 0&&At.SC_DISABLE_SPEEDY!==void 0&&At.SC_DISABLE_SPEEDY!==""&&At.SC_DISABLE_SPEEDY!=="false"&&At.SC_DISABLE_SPEEDY),fx={},Mo=Object.freeze([]),$i=Object.freeze({});function cg(i,o,c){return c===void 0&&(c=$i),i.theme!==c.theme&&i.theme||o||c.theme}var ug=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),mx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,hx=/(^-|-$)/g;function fp(i){return i.replace(mx,"-").replace(hx,"")}var px=/(a)(d)/gi,oo=52,mp=function(i){return String.fromCharCode(i+(i>25?39:97))};function Du(i){var o,c="";for(o=Math.abs(i);o>oo;o=o/oo|0)c=mp(o%oo)+c;return(mp(o%oo)+c).replace(px,"$1-$2")}var lu,dg=5381,vi=function(i,o){for(var c=o.length;c;)i=33*i^o.charCodeAt(--c);return i},fg=function(i){return vi(dg,i)};function Xu(i){return Du(fg(i)>>>0)}function gx(i){return i.displayName||i.name||"Component"}function ru(i){return typeof i=="string"&&!0}var mg=typeof Symbol=="function"&&Symbol.for,hg=mg?Symbol.for("react.memo"):60115,yx=mg?Symbol.for("react.forward_ref"):60112,bx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},xx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vx=((lu={})[yx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},lu[hg]=pg,lu);function hp(i){return("type"in(o=i)&&o.type.$$typeof)===hg?pg:"$$typeof"in i?vx[i.$$typeof]:bx;var o}var Sx=Object.defineProperty,wx=Object.getOwnPropertyNames,pp=Object.getOwnPropertySymbols,jx=Object.getOwnPropertyDescriptor,zx=Object.getPrototypeOf,gp=Object.prototype;function gg(i,o,c){if(typeof o!="string"){if(gp){var u=zx(o);u&&u!==gp&&gg(i,u,c)}var f=wx(o);pp&&(f=f.concat(pp(o)));for(var h=hp(i),y=hp(o),S=0;S<f.length;++S){var b=f[S];if(!(b in xx||c&&c[b]||y&&b in y||h&&b in h)){var g=jx(o,b);try{Sx(i,b,g)}catch{}}}}return i}function Ti(i){return typeof i=="function"}function Qu(i){return typeof i=="object"&&"styledComponentId"in i}function Sa(i,o){return i&&o?"".concat(i," ").concat(o):i||o||""}function wo(i,o){if(i.length===0)return"";for(var c=i[0],u=1;u<i.length;u++)c+=i[u];return c}function ql(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Ru(i,o,c){if(c===void 0&&(c=!1),!c&&!ql(i)&&!Array.isArray(i))return o;if(Array.isArray(o))for(var u=0;u<o.length;u++)i[u]=Ru(i[u],o[u]);else if(ql(o))for(var u in o)i[u]=Ru(i[u],o[u]);return i}function Zu(i,o){Object.defineProperty(i,"toString",{value:o})}function Xl(i){for(var o=[],c=1;c<arguments.length;c++)o[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var $x=function(){function i(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return i.prototype.indexOfGroup=function(o){for(var c=0,u=0;u<o;u++)c+=this.groupSizes[u];return c},i.prototype.insertRules=function(o,c){if(o>=this.groupSizes.length){for(var u=this.groupSizes,f=u.length,h=f;o>=h;)if((h<<=1)<0)throw Xl(16,"".concat(o));this.groupSizes=new Uint32Array(h),this.groupSizes.set(u),this.length=h;for(var y=f;y<h;y++)this.groupSizes[y]=0}for(var S=this.indexOfGroup(o+1),b=(y=0,c.length);y<b;y++)this.tag.insertRule(S,c[y])&&(this.groupSizes[o]++,S++)},i.prototype.clearGroup=function(o){if(o<this.length){var c=this.groupSizes[o],u=this.indexOfGroup(o),f=u+c;this.groupSizes[o]=0;for(var h=u;h<f;h++)this.tag.deleteRule(u)}},i.prototype.getGroup=function(o){var c="";if(o>=this.length||this.groupSizes[o]===0)return c;for(var u=this.groupSizes[o],f=this.indexOfGroup(o),h=f+u,y=f;y<h;y++)c+="".concat(this.tag.getRule(y)).concat(Yu);return c},i}(),po=new Map,jo=new Map,go=1,so=function(i){if(po.has(i))return po.get(i);for(;jo.has(go);)go++;var o=go++;return po.set(i,o),jo.set(o,i),o},Tx=function(i,o){go=o+1,po.set(i,o),jo.set(o,i)},_x="style[".concat(zi,"][").concat(sg,'="').concat(ko,'"]'),Ex=new RegExp("^".concat(zi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Cx=function(i,o,c){for(var u,f=c.split(","),h=0,y=f.length;h<y;h++)(u=f[h])&&i.registerName(o,u)},Ax=function(i,o){for(var c,u=((c=o.textContent)!==null&&c!==void 0?c:"").split(Yu),f=[],h=0,y=u.length;h<y;h++){var S=u[h].trim();if(S){var b=S.match(Ex);if(b){var g=0|parseInt(b[1],10),w=b[2];g!==0&&(Tx(w,g),Cx(i,w,b[3]),i.getTag().insertRules(g,f)),f.length=0}else f.push(S)}}},yp=function(i){for(var o=document.querySelectorAll(_x),c=0,u=o.length;c<u;c++){var f=o[c];f&&f.getAttribute(zi)!==og&&(Ax(i,f),f.parentNode&&f.parentNode.removeChild(f))}};function Dx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var yg=function(i){var o=document.head,c=i||o,u=document.createElement("style"),f=function(S){var b=Array.from(S.querySelectorAll("style[".concat(zi,"]")));return b[b.length-1]}(c),h=f!==void 0?f.nextSibling:null;u.setAttribute(zi,og),u.setAttribute(sg,ko);var y=Dx();return y&&u.setAttribute("nonce",y),c.insertBefore(u,h),u},Rx=function(){function i(o){this.element=yg(o),this.element.appendChild(document.createTextNode("")),this.sheet=function(c){if(c.sheet)return c.sheet;for(var u=document.styleSheets,f=0,h=u.length;f<h;f++){var y=u[f];if(y.ownerNode===c)return y}throw Xl(17)}(this.element),this.length=0}return i.prototype.insertRule=function(o,c){try{return this.sheet.insertRule(c,o),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},i.prototype.getRule=function(o){var c=this.sheet.cssRules[o];return c&&c.cssText?c.cssText:""},i}(),Ox=function(){function i(o){this.element=yg(o),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(o,c){if(o<=this.length&&o>=0){var u=document.createTextNode(c);return this.element.insertBefore(u,this.nodes[o]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},i.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},i}(),kx=function(){function i(o){this.rules=[],this.length=0}return i.prototype.insertRule=function(o,c){return o<=this.length&&(this.rules.splice(o,0,c),this.length++,!0)},i.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},i.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},i}(),bp=So,Mx={isServer:!So,useCSSOMInjection:!dx},zo=function(){function i(o,c,u){o===void 0&&(o=$i),c===void 0&&(c={});var f=this;this.options=ut(ut({},Mx),o),this.gs=c,this.names=new Map(u),this.server=!!o.isServer,!this.server&&So&&bp&&(bp=!1,yp(this)),Zu(this,function(){return function(h){for(var y=h.getTag(),S=y.length,b="",g=function(_){var R=function(k){return jo.get(k)}(_);if(R===void 0)return"continue";var M=h.names.get(R),X=y.getGroup(_);if(M===void 0||!M.size||X.length===0)return"continue";var Y="".concat(zi,".g").concat(_,'[id="').concat(R,'"]'),K="";M!==void 0&&M.forEach(function(k){k.length>0&&(K+="".concat(k,","))}),b+="".concat(X).concat(Y,'{content:"').concat(K,'"}').concat(Yu)},w=0;w<S;w++)g(w);return b}(f)})}return i.registerId=function(o){return so(o)},i.prototype.rehydrate=function(){!this.server&&So&&yp(this)},i.prototype.reconstructWithOptions=function(o,c){return c===void 0&&(c=!0),new i(ut(ut({},this.options),o),this.gs,c&&this.names||void 0)},i.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(o=function(c){var u=c.useCSSOMInjection,f=c.target;return c.isServer?new kx(f):u?new Rx(f):new Ox(f)}(this.options),new $x(o)));var o},i.prototype.hasNameForId=function(o,c){return this.names.has(o)&&this.names.get(o).has(c)},i.prototype.registerName=function(o,c){if(so(o),this.names.has(o))this.names.get(o).add(c);else{var u=new Set;u.add(c),this.names.set(o,u)}},i.prototype.insertRules=function(o,c,u){this.registerName(o,c),this.getTag().insertRules(so(o),u)},i.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},i.prototype.clearRules=function(o){this.getTag().clearGroup(so(o)),this.clearNames(o)},i.prototype.clearTag=function(){this.tag=void 0},i}(),Bx=/&/g,Nx=/^\s*\/\/.*$/gm;function bg(i,o){return i.map(function(c){return c.type==="rule"&&(c.value="".concat(o," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(o," ")),c.props=c.props.map(function(u){return"".concat(o," ").concat(u)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=bg(c.children,o)),c})}function Ux(i){var o,c,u,f=$i,h=f.options,y=h===void 0?$i:h,S=f.plugins,b=S===void 0?Mo:S,g=function(R,M,X){return X.startsWith(c)&&X.endsWith(c)&&X.replaceAll(c,"").length>0?".".concat(o):R},w=b.slice();w.push(function(R){R.type===Ao&&R.value.includes("&")&&(R.props[0]=R.props[0].replace(Bx,c).replace(u,g))}),y.prefix&&w.push(cx),w.push(rx);var _=function(R,M,X,Y){M===void 0&&(M=""),X===void 0&&(X=""),Y===void 0&&(Y="&"),o=Y,c=M,u=new RegExp("\\".concat(c,"\\b"),"g");var K=R.replace(Nx,""),k=ix(X||M?"".concat(X," ").concat(M," { ").concat(K," }"):K);y.namespace&&(k=bg(k,y.namespace));var Q=[];return vo(k,ox(w.concat(sx(function(Z){return Q.push(Z)})))),Q};return _.hash=b.length?b.reduce(function(R,M){return M.name||Xl(15),vi(R,M.name)},dg).toString():"",_}var Hx=new zo,Ou=Ux(),xg=ct.createContext({shouldForwardProp:void 0,styleSheet:Hx,stylis:Ou});xg.Consumer;ct.createContext(void 0);function ku(){return $.useContext(xg)}var vg=function(){function i(o,c){var u=this;this.inject=function(f,h){h===void 0&&(h=Ou);var y=u.name+h.hash;f.hasNameForId(u.id,y)||f.insertRules(u.id,y,h(u.rules,y,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=c,Zu(this,function(){throw Xl(12,String(u.name))})}return i.prototype.getName=function(o){return o===void 0&&(o=Ou),this.name+o.hash},i}(),Lx=function(i){return i>="A"&&i<="Z"};function xp(i){for(var o="",c=0;c<i.length;c++){var u=i[c];if(c===1&&u==="-"&&i[0]==="-")return i;Lx(u)?o+="-"+u.toLowerCase():o+=u}return o.startsWith("ms-")?"-"+o:o}var Sg=function(i){return i==null||i===!1||i===""},wg=function(i){var o,c,u=[];for(var f in i){var h=i[f];i.hasOwnProperty(f)&&!Sg(h)&&(Array.isArray(h)&&h.isCss||Ti(h)?u.push("".concat(xp(f),":"),h,";"):ql(h)?u.push.apply(u,Si(Si(["".concat(f," {")],wg(h),!1),["}"],!1)):u.push("".concat(xp(f),": ").concat((o=f,(c=h)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||o in ux||o.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return u};function Wn(i,o,c,u){if(Sg(i))return[];if(Qu(i))return[".".concat(i.styledComponentId)];if(Ti(i)){if(!Ti(h=i)||h.prototype&&h.prototype.isReactComponent||!o)return[i];var f=i(o);return Wn(f,o,c,u)}var h;return i instanceof vg?c?(i.inject(c,u),[i.getName(u)]):[i]:ql(i)?wg(i):Array.isArray(i)?Array.prototype.concat.apply(Mo,i.map(function(y){return Wn(y,o,c,u)})):[i.toString()]}function jg(i){for(var o=0;o<i.length;o+=1){var c=i[o];if(Ti(c)&&!Qu(c))return!1}return!0}var qx=fg(ko),Gx=function(){function i(o,c,u){this.rules=o,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&jg(o),this.componentId=c,this.baseHash=vi(qx,c),this.baseStyle=u,zo.registerId(c)}return i.prototype.generateAndInjectStyles=function(o,c,u){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,c,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))f=Sa(f,this.staticRulesId);else{var h=wo(Wn(this.rules,o,c,u)),y=Du(vi(this.baseHash,h)>>>0);if(!c.hasNameForId(this.componentId,y)){var S=u(h,".".concat(y),void 0,this.componentId);c.insertRules(this.componentId,y,S)}f=Sa(f,y),this.staticRulesId=y}else{for(var b=vi(this.baseHash,u.hash),g="",w=0;w<this.rules.length;w++){var _=this.rules[w];if(typeof _=="string")g+=_;else if(_){var R=wo(Wn(_,o,c,u));b=vi(b,R+w),g+=R}}if(g){var M=Du(b>>>0);c.hasNameForId(this.componentId,M)||c.insertRules(this.componentId,M,u(g,".".concat(M),void 0,this.componentId)),f=Sa(f,M)}}return f},i}(),Vu=ct.createContext(void 0);Vu.Consumer;var ou={};function Yx(i,o,c){var u=Qu(i),f=i,h=!ru(i),y=o.attrs,S=y===void 0?Mo:y,b=o.componentId,g=b===void 0?function(q,O){var U=typeof q!="string"?"sc":fp(q);ou[U]=(ou[U]||0)+1;var V="".concat(U,"-").concat(Xu(ko+U+ou[U]));return O?"".concat(O,"-").concat(V):V}(o.displayName,o.parentComponentId):b,w=o.displayName,_=w===void 0?function(q){return ru(q)?"styled.".concat(q):"Styled(".concat(gx(q),")")}(i):w,R=o.displayName&&o.componentId?"".concat(fp(o.displayName),"-").concat(o.componentId):o.componentId||g,M=u&&f.attrs?f.attrs.concat(S).filter(Boolean):S,X=o.shouldForwardProp;if(u&&f.shouldForwardProp){var Y=f.shouldForwardProp;if(o.shouldForwardProp){var K=o.shouldForwardProp;X=function(q,O){return Y(q,O)&&K(q,O)}}else X=Y}var k=new Gx(c,R,u?f.componentStyle:void 0);function Q(q,O){return function(U,V,te){var se=U.attrs,ne=U.componentStyle,Ce=U.defaultProps,Re=U.foldedComponentIds,pt=U.styledComponentId,Dt=U.target,Le=ct.useContext(Vu),B=ku(),J=U.shouldForwardProp||B.shouldForwardProp,ae=cg(V,Le,Ce)||$i,me=function(he,le,Ze){for(var ve,lt=ut(ut({},le),{className:void 0,theme:Ze}),ea=0;ea<he.length;ea+=1){var cn=Ti(ve=he[ea])?ve(lt):ve;for(var Rt in cn)lt[Rt]=Rt==="className"?Sa(lt[Rt],cn[Rt]):Rt==="style"?ut(ut({},lt[Rt]),cn[Rt]):cn[Rt]}return le.className&&(lt.className=Sa(lt.className,le.className)),lt}(se,V,ae),j=me.as||Dt,G={};for(var P in me)me[P]===void 0||P[0]==="$"||P==="as"||P==="theme"&&me.theme===ae||(P==="forwardedAs"?G.as=me.forwardedAs:J&&!J(P,j)||(G[P]=me[P]));var I=function(he,le){var Ze=ku(),ve=he.generateAndInjectStyles(le,Ze.styleSheet,Ze.stylis);return ve}(ne,me),ee=Sa(Re,pt);return I&&(ee+=" "+I),me.className&&(ee+=" "+me.className),G[ru(j)&&!ug.has(j)?"class":"className"]=ee,te&&(G.ref=te),$.createElement(j,G)}(Z,q,O)}Q.displayName=_;var Z=ct.forwardRef(Q);return Z.attrs=M,Z.componentStyle=k,Z.displayName=_,Z.shouldForwardProp=X,Z.foldedComponentIds=u?Sa(f.foldedComponentIds,f.styledComponentId):"",Z.styledComponentId=R,Z.target=u?f.target:i,Object.defineProperty(Z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(q){this._foldedDefaultProps=u?function(O){for(var U=[],V=1;V<arguments.length;V++)U[V-1]=arguments[V];for(var te=0,se=U;te<se.length;te++)Ru(O,se[te],!0);return O}({},f.defaultProps,q):q}}),Zu(Z,function(){return".".concat(Z.styledComponentId)}),h&&gg(Z,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Z}function vp(i,o){for(var c=[i[0]],u=0,f=o.length;u<f;u+=1)c.push(o[u],i[u+1]);return c}var Sp=function(i){return Object.assign(i,{isCss:!0})};function Ku(i){for(var o=[],c=1;c<arguments.length;c++)o[c-1]=arguments[c];if(Ti(i)||ql(i))return Sp(Wn(vp(Mo,Si([i],o,!0))));var u=i;return o.length===0&&u.length===1&&typeof u[0]=="string"?Wn(u):Sp(Wn(vp(u,o)))}function Mu(i,o,c){if(c===void 0&&(c=$i),!o)throw Xl(1,o);var u=function(f){for(var h=[],y=1;y<arguments.length;y++)h[y-1]=arguments[y];return i(o,c,Ku.apply(void 0,Si([f],h,!1)))};return u.attrs=function(f){return Mu(i,o,ut(ut({},c),{attrs:Array.prototype.concat(c.attrs,f).filter(Boolean)}))},u.withConfig=function(f){return Mu(i,o,ut(ut({},c),f))},u}var zg=function(i){return Mu(Yx,i)},x=zg;ug.forEach(function(i){x[i]=zg(i)});var Xx=function(){function i(o,c){this.rules=o,this.componentId=c,this.isStatic=jg(o),zo.registerId(this.componentId+1)}return i.prototype.createStyles=function(o,c,u,f){var h=f(wo(Wn(this.rules,c,u,f)),""),y=this.componentId+o;u.insertRules(y,y,h)},i.prototype.removeStyles=function(o,c){c.clearRules(this.componentId+o)},i.prototype.renderStyles=function(o,c,u,f){o>2&&zo.registerId(this.componentId+o),this.removeStyles(o,u),this.createStyles(o,c,u,f)},i}();function Qx(i){for(var o=[],c=1;c<arguments.length;c++)o[c-1]=arguments[c];var u=Ku.apply(void 0,Si([i],o,!1)),f="sc-global-".concat(Xu(JSON.stringify(u))),h=new Xx(u,f),y=function(b){var g=ku(),w=ct.useContext(Vu),_=ct.useRef(g.styleSheet.allocateGSInstance(f)).current;return g.styleSheet.server&&S(_,b,g.styleSheet,w,g.stylis),ct.useLayoutEffect(function(){if(!g.styleSheet.server)return S(_,b,g.styleSheet,w,g.stylis),function(){return h.removeStyles(_,g.styleSheet)}},[_,b,g.styleSheet,w,g.stylis]),null};function S(b,g,w,_,R){if(h.isStatic)h.renderStyles(b,fx,w,R);else{var M=ut(ut({},g),{theme:cg(g,_,y.defaultProps)});h.renderStyles(b,M,w,R)}}return ct.memo(y)}function Zx(i){for(var o=[],c=1;c<arguments.length;c++)o[c-1]=arguments[c];var u=wo(Ku.apply(void 0,Si([i],o,!1))),f=Xu(u);return new vg(f,u)}const d={colors:{black:"#000000",red:"#cc0000",darkRed:"#990000",mediumGray:"#666666",charcoal:"#333333",darkCharcoal:"#555555",primaryText:"#ffffff",secondaryText:"#cccccc",mutedText:"#666666",borderLight:"#333333",borderRed:"#cc0000",pageBg:"#000000",sectionBg:"#1a1a1a",inputBg:"#222222",buttonPrimary:"#cc0000",buttonPrimaryHover:"#990000",buttonSecondary:"#333333",buttonSecondaryHover:"#555555",buttonDisabled:"#666666"},typography:{fontFamily:"'Orbitron', sans-serif",headingFamily:"'Bebas Neue', sans-serif",sizes:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem"},weights:{semibold:600,bold:700},letterSpacing:{normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em",uppercase:"1px"}},spacing:{xs:"0.25rem",sm:"0.5rem",md:"0.75rem",base:"1rem",lg:"1.25rem",xl:"1.5rem","2xl":"2rem","3xl":"2.5rem","4xl":"3rem"},transitions:{fast:"0.15s ease",normal:"0.2s ease"},breakpoints:{mobile:"480px",tablet:"768px",desktop:"1024px"}},Vx=Qx`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  body {
    font-family: ${d.typography.fontFamily};
    color: ${d.colors.primaryText};
    line-height: 1.5;
    overflow-x: hidden;
    background-color: ${d.colors.black};
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3 {
    font-family: ${d.typography.headingFamily};
    letter-spacing: ${d.typography.letterSpacing.uppercase};
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`,Kx=x.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #1a1a1a;
  border-top: 2px solid #dc2626;
  padding: 1rem;
  z-index: 1000;
  display: ${i=>i.$show?"block":"none"};
  
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`,Px=x.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,Jx=x.div`
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.5;
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }
  
  a {
    color: #dc2626;
    text-decoration: underline;
    
    &:hover {
      color: #b91c1c;
    }
  }
`,Ix=x.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`,$g=x.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 0.875rem;
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,Fx=x($g)`
  background-color: #dc2626;
  color: #ffffff;
  
  &:hover {
    background-color: #b91c1c;
  }
`,Wx=x($g)`
  background-color: #374151;
  color: #ffffff;
  
  &:hover {
    background-color: #4b5563;
  }
`,ev=()=>{const[i,o]=$.useState(!1);$.useEffect(()=>{localStorage.getItem("cookieConsent")||o(!0)},[]);const c=()=>{localStorage.setItem("cookieConsent","accepted"),o(!1)},u=()=>{localStorage.setItem("cookieConsent","declined"),o(!1)};return s.jsx(Kx,{$show:i,children:s.jsxs(Px,{children:[s.jsxs(Jx,{children:["We use cookies to improve your experience on our website. Essential cookies are used for login and shopping cart functionality.",s.jsx("a",{href:"/privacy",target:"_blank",children:" Read more in our privacy policy"})]}),s.jsxs(Ix,{children:[s.jsx(Wx,{onClick:u,children:"Essential only"}),s.jsx(Fx,{onClick:c,children:"Accept all"})]})]})})};/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var wp="popstate";function tv(i={}){function o(u,f){let{pathname:h,search:y,hash:S}=u.location;return Bu("",{pathname:h,search:y,hash:S},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function c(u,f){return typeof f=="string"?f:Gl(f)}return av(o,c,null,i)}function ke(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}function Pt(i,o){if(!i){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function nv(){return Math.random().toString(36).substring(2,10)}function jp(i,o){return{usr:i.state,key:i.key,idx:o}}function Bu(i,o,c=null,u){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof o=="string"?Ci(o):o,state:c,key:o&&o.key||u||nv()}}function Gl({pathname:i="/",search:o="",hash:c=""}){return o&&o!=="?"&&(i+=o.charAt(0)==="?"?o:"?"+o),c&&c!=="#"&&(i+=c.charAt(0)==="#"?c:"#"+c),i}function Ci(i){let o={};if(i){let c=i.indexOf("#");c>=0&&(o.hash=i.substring(c),i=i.substring(0,c));let u=i.indexOf("?");u>=0&&(o.search=i.substring(u),i=i.substring(0,u)),i&&(o.pathname=i)}return o}function av(i,o,c,u={}){let{window:f=document.defaultView,v5Compat:h=!1}=u,y=f.history,S="POP",b=null,g=w();g==null&&(g=0,y.replaceState({...y.state,idx:g},""));function w(){return(y.state||{idx:null}).idx}function _(){S="POP";let K=w(),k=K==null?null:K-g;g=K,b&&b({action:S,location:Y.location,delta:k})}function R(K,k){S="PUSH";let Q=Bu(Y.location,K,k);g=w()+1;let Z=jp(Q,g),q=Y.createHref(Q);try{y.pushState(Z,"",q)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;f.location.assign(q)}h&&b&&b({action:S,location:Y.location,delta:1})}function M(K,k){S="REPLACE";let Q=Bu(Y.location,K,k);g=w();let Z=jp(Q,g),q=Y.createHref(Q);y.replaceState(Z,"",q),h&&b&&b({action:S,location:Y.location,delta:0})}function X(K){return iv(K)}let Y={get action(){return S},get location(){return i(f,y)},listen(K){if(b)throw new Error("A history only accepts one active listener");return f.addEventListener(wp,_),b=K,()=>{f.removeEventListener(wp,_),b=null}},createHref(K){return o(f,K)},createURL:X,encodeLocation(K){let k=X(K);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:R,replace:M,go(K){return y.go(K)}};return Y}function iv(i,o=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),ke(c,"No window.location.(origin|href) available to create URL");let u=typeof i=="string"?i:Gl(i);return u=u.replace(/ $/,"%20"),!o&&u.startsWith("//")&&(u=c+u),new URL(u,c)}function Tg(i,o,c="/"){return lv(i,o,c,!1)}function lv(i,o,c,u){let f=typeof o=="string"?Ci(o):o,h=_n(f.pathname||"/",c);if(h==null)return null;let y=_g(i);rv(y);let S=null;for(let b=0;S==null&&b<y.length;++b){let g=yv(h);S=pv(y[b],g,u)}return S}function _g(i,o=[],c=[],u=""){let f=(h,y,S)=>{let b={relativePath:S===void 0?h.path||"":S,caseSensitive:h.caseSensitive===!0,childrenIndex:y,route:h};b.relativePath.startsWith("/")&&(ke(b.relativePath.startsWith(u),`Absolute route path "${b.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(u.length));let g=Tn([u,b.relativePath]),w=c.concat(b);h.children&&h.children.length>0&&(ke(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),_g(h.children,o,w,g)),!(h.path==null&&!h.index)&&o.push({path:g,score:mv(g,h.index),routesMeta:w})};return i.forEach((h,y)=>{if(h.path===""||!h.path?.includes("?"))f(h,y);else for(let S of Eg(h.path))f(h,y,S)}),o}function Eg(i){let o=i.split("/");if(o.length===0)return[];let[c,...u]=o,f=c.endsWith("?"),h=c.replace(/\?$/,"");if(u.length===0)return f?[h,""]:[h];let y=Eg(u.join("/")),S=[];return S.push(...y.map(b=>b===""?h:[h,b].join("/"))),f&&S.push(...y),S.map(b=>i.startsWith("/")&&b===""?"/":b)}function rv(i){i.sort((o,c)=>o.score!==c.score?c.score-o.score:hv(o.routesMeta.map(u=>u.childrenIndex),c.routesMeta.map(u=>u.childrenIndex)))}var ov=/^:[\w-]+$/,sv=3,cv=2,uv=1,dv=10,fv=-2,zp=i=>i==="*";function mv(i,o){let c=i.split("/"),u=c.length;return c.some(zp)&&(u+=fv),o&&(u+=cv),c.filter(f=>!zp(f)).reduce((f,h)=>f+(ov.test(h)?sv:h===""?uv:dv),u)}function hv(i,o){return i.length===o.length&&i.slice(0,-1).every((u,f)=>u===o[f])?i[i.length-1]-o[o.length-1]:0}function pv(i,o,c=!1){let{routesMeta:u}=i,f={},h="/",y=[];for(let S=0;S<u.length;++S){let b=u[S],g=S===u.length-1,w=h==="/"?o:o.slice(h.length)||"/",_=$o({path:b.relativePath,caseSensitive:b.caseSensitive,end:g},w),R=b.route;if(!_&&g&&c&&!u[u.length-1].route.index&&(_=$o({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},w)),!_)return null;Object.assign(f,_.params),y.push({params:f,pathname:Tn([h,_.pathname]),pathnameBase:Sv(Tn([h,_.pathnameBase])),route:R}),_.pathnameBase!=="/"&&(h=Tn([h,_.pathnameBase]))}return y}function $o(i,o){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[c,u]=gv(i.path,i.caseSensitive,i.end),f=o.match(c);if(!f)return null;let h=f[0],y=h.replace(/(.)\/+$/,"$1"),S=f.slice(1);return{params:u.reduce((g,{paramName:w,isOptional:_},R)=>{if(w==="*"){let X=S[R]||"";y=h.slice(0,h.length-X.length).replace(/(.)\/+$/,"$1")}const M=S[R];return _&&!M?g[w]=void 0:g[w]=(M||"").replace(/%2F/g,"/"),g},{}),pathname:h,pathnameBase:y,pattern:i}}function gv(i,o=!1,c=!0){Pt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let u=[],f="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,S,b)=>(u.push({paramName:S,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(u.push({paramName:"*"}),f+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?f+="\\/*$":i!==""&&i!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,o?void 0:"i"),u]}function yv(i){try{return i.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Pt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),i}}function _n(i,o){if(o==="/")return i;if(!i.toLowerCase().startsWith(o.toLowerCase()))return null;let c=o.endsWith("/")?o.length-1:o.length,u=i.charAt(c);return u&&u!=="/"?null:i.slice(c)||"/"}function bv(i,o="/"){let{pathname:c,search:u="",hash:f=""}=typeof i=="string"?Ci(i):i;return{pathname:c?c.startsWith("/")?c:xv(c,o):o,search:wv(u),hash:jv(f)}}function xv(i,o){let c=o.replace(/\/+$/,"").split("/");return i.split("/").forEach(f=>{f===".."?c.length>1&&c.pop():f!=="."&&c.push(f)}),c.length>1?c.join("/"):"/"}function su(i,o,c,u){return`Cannot include a '${i}' character in a manually specified \`to.${o}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function vv(i){return i.filter((o,c)=>c===0||o.route.path&&o.route.path.length>0)}function Pu(i){let o=vv(i);return o.map((c,u)=>u===o.length-1?c.pathname:c.pathnameBase)}function Ju(i,o,c,u=!1){let f;typeof i=="string"?f=Ci(i):(f={...i},ke(!f.pathname||!f.pathname.includes("?"),su("?","pathname","search",f)),ke(!f.pathname||!f.pathname.includes("#"),su("#","pathname","hash",f)),ke(!f.search||!f.search.includes("#"),su("#","search","hash",f)));let h=i===""||f.pathname==="",y=h?"/":f.pathname,S;if(y==null)S=c;else{let _=o.length-1;if(!u&&y.startsWith("..")){let R=y.split("/");for(;R[0]==="..";)R.shift(),_-=1;f.pathname=R.join("/")}S=_>=0?o[_]:"/"}let b=bv(f,S),g=y&&y!=="/"&&y.endsWith("/"),w=(h||y===".")&&c.endsWith("/");return!b.pathname.endsWith("/")&&(g||w)&&(b.pathname+="/"),b}var Tn=i=>i.join("/").replace(/\/\/+/g,"/"),Sv=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),wv=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,jv=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function zv(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var Cg=["POST","PUT","PATCH","DELETE"];new Set(Cg);var $v=["GET",...Cg];new Set($v);var Ai=$.createContext(null);Ai.displayName="DataRouter";var Bo=$.createContext(null);Bo.displayName="DataRouterState";$.createContext(!1);var Ag=$.createContext({isTransitioning:!1});Ag.displayName="ViewTransition";var Tv=$.createContext(new Map);Tv.displayName="Fetchers";var _v=$.createContext(null);_v.displayName="Await";var It=$.createContext(null);It.displayName="Navigation";var Ql=$.createContext(null);Ql.displayName="Location";var Ft=$.createContext({outlet:null,matches:[],isDataRoute:!1});Ft.displayName="Route";var Iu=$.createContext(null);Iu.displayName="RouteError";function Ev(i,{relative:o}={}){ke(Di(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:u}=$.useContext(It),{hash:f,pathname:h,search:y}=Zl(i,{relative:o}),S=h;return c!=="/"&&(S=h==="/"?c:Tn([c,h])),u.createHref({pathname:S,search:y,hash:f})}function Di(){return $.useContext(Ql)!=null}function sn(){return ke(Di(),"useLocation() may be used only in the context of a <Router> component."),$.useContext(Ql).location}var Dg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Rg(i){$.useContext(It).static||$.useLayoutEffect(i)}function ja(){let{isDataRoute:i}=$.useContext(Ft);return i?qv():Cv()}function Cv(){ke(Di(),"useNavigate() may be used only in the context of a <Router> component.");let i=$.useContext(Ai),{basename:o,navigator:c}=$.useContext(It),{matches:u}=$.useContext(Ft),{pathname:f}=sn(),h=JSON.stringify(Pu(u)),y=$.useRef(!1);return Rg(()=>{y.current=!0}),$.useCallback((b,g={})=>{if(Pt(y.current,Dg),!y.current)return;if(typeof b=="number"){c.go(b);return}let w=Ju(b,JSON.parse(h),f,g.relative==="path");i==null&&o!=="/"&&(w.pathname=w.pathname==="/"?o:Tn([o,w.pathname])),(g.replace?c.replace:c.push)(w,g.state,g)},[o,c,h,f,i])}$.createContext(null);function Fu(){let{matches:i}=$.useContext(Ft),o=i[i.length-1];return o?o.params:{}}function Zl(i,{relative:o}={}){let{matches:c}=$.useContext(Ft),{pathname:u}=sn(),f=JSON.stringify(Pu(c));return $.useMemo(()=>Ju(i,JSON.parse(f),u,o==="path"),[i,f,u,o])}function Av(i,o){return Og(i,o)}function Og(i,o,c,u){ke(Di(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=$.useContext(It),{matches:h}=$.useContext(Ft),y=h[h.length-1],S=y?y.params:{},b=y?y.pathname:"/",g=y?y.pathnameBase:"/",w=y&&y.route;{let k=w&&w.path||"";kg(b,!w||k.endsWith("*")||k.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k==="/"?"*":`${k}/*`}">.`)}let _=sn(),R;if(o){let k=typeof o=="string"?Ci(o):o;ke(g==="/"||k.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${k.pathname}" was given in the \`location\` prop.`),R=k}else R=_;let M=R.pathname||"/",X=M;if(g!=="/"){let k=g.replace(/^\//,"").split("/");X="/"+M.replace(/^\//,"").split("/").slice(k.length).join("/")}let Y=Tg(i,{pathname:X});Pt(w||Y!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),Pt(Y==null||Y[Y.length-1].route.element!==void 0||Y[Y.length-1].route.Component!==void 0||Y[Y.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let K=Mv(Y&&Y.map(k=>Object.assign({},k,{params:Object.assign({},S,k.params),pathname:Tn([g,f.encodeLocation?f.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?g:Tn([g,f.encodeLocation?f.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),h,c,u);return o&&K?$.createElement(Ql.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...R},navigationType:"POP"}},K):K}function Dv(){let i=Lv(),o=zv(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),c=i instanceof Error?i.stack:null,u="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:u},h={padding:"2px 4px",backgroundColor:u},y=null;return console.error("Error handled by React Router default ErrorBoundary:",i),y=$.createElement($.Fragment,null,$.createElement("p",null,"💿 Hey developer 👋"),$.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",$.createElement("code",{style:h},"ErrorBoundary")," or"," ",$.createElement("code",{style:h},"errorElement")," prop on your route.")),$.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},o),c?$.createElement("pre",{style:f},c):null,y)}var Rv=$.createElement(Dv,null),Ov=class extends $.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,o){return o.location!==i.location||o.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:o.error,location:o.location,revalidation:i.revalidation||o.revalidation}}componentDidCatch(i,o){console.error("React Router caught the following error during render",i,o)}render(){return this.state.error!==void 0?$.createElement(Ft.Provider,{value:this.props.routeContext},$.createElement(Iu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function kv({routeContext:i,match:o,children:c}){let u=$.useContext(Ai);return u&&u.static&&u.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=o.route.id),$.createElement(Ft.Provider,{value:i},c)}function Mv(i,o=[],c=null,u=null){if(i==null){if(!c)return null;if(c.errors)i=c.matches;else if(o.length===0&&!c.initialized&&c.matches.length>0)i=c.matches;else return null}let f=i,h=c?.errors;if(h!=null){let b=f.findIndex(g=>g.route.id&&h?.[g.route.id]!==void 0);ke(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),f=f.slice(0,Math.min(f.length,b+1))}let y=!1,S=-1;if(c)for(let b=0;b<f.length;b++){let g=f[b];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(S=b),g.route.id){let{loaderData:w,errors:_}=c,R=g.route.loader&&!w.hasOwnProperty(g.route.id)&&(!_||_[g.route.id]===void 0);if(g.route.lazy||R){y=!0,S>=0?f=f.slice(0,S+1):f=[f[0]];break}}}return f.reduceRight((b,g,w)=>{let _,R=!1,M=null,X=null;c&&(_=h&&g.route.id?h[g.route.id]:void 0,M=g.route.errorElement||Rv,y&&(S<0&&w===0?(kg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,X=null):S===w&&(R=!0,X=g.route.hydrateFallbackElement||null)));let Y=o.concat(f.slice(0,w+1)),K=()=>{let k;return _?k=M:R?k=X:g.route.Component?k=$.createElement(g.route.Component,null):g.route.element?k=g.route.element:k=b,$.createElement(kv,{match:g,routeContext:{outlet:b,matches:Y,isDataRoute:c!=null},children:k})};return c&&(g.route.ErrorBoundary||g.route.errorElement||w===0)?$.createElement(Ov,{location:c.location,revalidation:c.revalidation,component:M,error:_,children:K(),routeContext:{outlet:null,matches:Y,isDataRoute:!0}}):K()},null)}function Wu(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bv(i){let o=$.useContext(Ai);return ke(o,Wu(i)),o}function Nv(i){let o=$.useContext(Bo);return ke(o,Wu(i)),o}function Uv(i){let o=$.useContext(Ft);return ke(o,Wu(i)),o}function ed(i){let o=Uv(i),c=o.matches[o.matches.length-1];return ke(c.route.id,`${i} can only be used on routes that contain a unique "id"`),c.route.id}function Hv(){return ed("useRouteId")}function Lv(){let i=$.useContext(Iu),o=Nv("useRouteError"),c=ed("useRouteError");return i!==void 0?i:o.errors?.[c]}function qv(){let{router:i}=Bv("useNavigate"),o=ed("useNavigate"),c=$.useRef(!1);return Rg(()=>{c.current=!0}),$.useCallback(async(f,h={})=>{Pt(c.current,Dg),c.current&&(typeof f=="number"?i.navigate(f):await i.navigate(f,{fromRouteId:o,...h}))},[i,o])}var $p={};function kg(i,o,c){!o&&!$p[i]&&($p[i]=!0,Pt(!1,c))}$.memo(Gv);function Gv({routes:i,future:o,state:c}){return Og(i,void 0,c,o)}function Yv({to:i,replace:o,state:c,relative:u}){ke(Di(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=$.useContext(It);Pt(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:h}=$.useContext(Ft),{pathname:y}=sn(),S=ja(),b=Ju(i,Pu(h),y,u==="path"),g=JSON.stringify(b);return $.useEffect(()=>{S(JSON.parse(g),{replace:o,state:c,relative:u})},[S,g,u,o,c]),null}function ft(i){ke(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Xv({basename:i="/",children:o=null,location:c,navigationType:u="POP",navigator:f,static:h=!1}){ke(!Di(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=i.replace(/^\/*/,"/"),S=$.useMemo(()=>({basename:y,navigator:f,static:h,future:{}}),[y,f,h]);typeof c=="string"&&(c=Ci(c));let{pathname:b="/",search:g="",hash:w="",state:_=null,key:R="default"}=c,M=$.useMemo(()=>{let X=_n(b,y);return X==null?null:{location:{pathname:X,search:g,hash:w,state:_,key:R},navigationType:u}},[y,b,g,w,_,R,u]);return Pt(M!=null,`<Router basename="${y}"> is not able to match the URL "${b}${g}${w}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:$.createElement(It.Provider,{value:S},$.createElement(Ql.Provider,{children:o,value:M}))}function Qv({children:i,location:o}){return Av(Nu(i),o)}function Nu(i,o=[]){let c=[];return $.Children.forEach(i,(u,f)=>{if(!$.isValidElement(u))return;let h=[...o,f];if(u.type===$.Fragment){c.push.apply(c,Nu(u.props.children,h));return}ke(u.type===ft,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ke(!u.props.index||!u.props.children,"An index route cannot have child routes.");let y={id:u.props.id||h.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(y.children=Nu(u.props.children,h)),c.push(y)}),c}var yo="get",bo="application/x-www-form-urlencoded";function No(i){return i!=null&&typeof i.tagName=="string"}function Zv(i){return No(i)&&i.tagName.toLowerCase()==="button"}function Vv(i){return No(i)&&i.tagName.toLowerCase()==="form"}function Kv(i){return No(i)&&i.tagName.toLowerCase()==="input"}function Pv(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Jv(i,o){return i.button===0&&(!o||o==="_self")&&!Pv(i)}var co=null;function Iv(){if(co===null)try{new FormData(document.createElement("form"),0),co=!1}catch{co=!0}return co}var Fv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function cu(i){return i!=null&&!Fv.has(i)?(Pt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bo}"`),null):i}function Wv(i,o){let c,u,f,h,y;if(Vv(i)){let S=i.getAttribute("action");u=S?_n(S,o):null,c=i.getAttribute("method")||yo,f=cu(i.getAttribute("enctype"))||bo,h=new FormData(i)}else if(Zv(i)||Kv(i)&&(i.type==="submit"||i.type==="image")){let S=i.form;if(S==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=i.getAttribute("formaction")||S.getAttribute("action");if(u=b?_n(b,o):null,c=i.getAttribute("formmethod")||S.getAttribute("method")||yo,f=cu(i.getAttribute("formenctype"))||cu(S.getAttribute("enctype"))||bo,h=new FormData(S,i),!Iv()){let{name:g,type:w,value:_}=i;if(w==="image"){let R=g?`${g}.`:"";h.append(`${R}x`,"0"),h.append(`${R}y`,"0")}else g&&h.append(g,_)}}else{if(No(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=yo,u=null,f=bo,y=i}return h&&f==="text/plain"&&(y=h,h=void 0),{action:u,method:c.toLowerCase(),encType:f,formData:h,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function td(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}function e2(i,o,c){let u=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return u.pathname==="/"?u.pathname=`_root.${c}`:o&&_n(u.pathname,o)==="/"?u.pathname=`${o.replace(/\/$/,"")}/_root.${c}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${c}`,u}async function t2(i,o){if(i.id in o)return o[i.id];try{let c=await import(i.module);return o[i.id]=c,c}catch(c){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function n2(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function a2(i,o,c){let u=await Promise.all(i.map(async f=>{let h=o.routes[f.route.id];if(h){let y=await t2(h,c);return y.links?y.links():[]}return[]}));return o2(u.flat(1).filter(n2).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Tp(i,o,c,u,f,h){let y=(b,g)=>c[g]?b.route.id!==c[g].route.id:!0,S=(b,g)=>c[g].pathname!==b.pathname||c[g].route.path?.endsWith("*")&&c[g].params["*"]!==b.params["*"];return h==="assets"?o.filter((b,g)=>y(b,g)||S(b,g)):h==="data"?o.filter((b,g)=>{let w=u.routes[b.route.id];if(!w||!w.hasLoader)return!1;if(y(b,g)||S(b,g))return!0;if(b.route.shouldRevalidate){let _=b.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function i2(i,o,{includeHydrateFallback:c}={}){return l2(i.map(u=>{let f=o.routes[u.route.id];if(!f)return[];let h=[f.module];return f.clientActionModule&&(h=h.concat(f.clientActionModule)),f.clientLoaderModule&&(h=h.concat(f.clientLoaderModule)),c&&f.hydrateFallbackModule&&(h=h.concat(f.hydrateFallbackModule)),f.imports&&(h=h.concat(f.imports)),h}).flat(1))}function l2(i){return[...new Set(i)]}function r2(i){let o={},c=Object.keys(i).sort();for(let u of c)o[u]=i[u];return o}function o2(i,o){let c=new Set;return new Set(o),i.reduce((u,f)=>{let h=JSON.stringify(r2(f));return c.has(h)||(c.add(h),u.push({key:h,link:f})),u},[])}function Mg(){let i=$.useContext(Ai);return td(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function s2(){let i=$.useContext(Bo);return td(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var nd=$.createContext(void 0);nd.displayName="FrameworkContext";function Bg(){let i=$.useContext(nd);return td(i,"You must render this element inside a <HydratedRouter> element"),i}function c2(i,o){let c=$.useContext(nd),[u,f]=$.useState(!1),[h,y]=$.useState(!1),{onFocus:S,onBlur:b,onMouseEnter:g,onMouseLeave:w,onTouchStart:_}=o,R=$.useRef(null);$.useEffect(()=>{if(i==="render"&&y(!0),i==="viewport"){let Y=k=>{k.forEach(Q=>{y(Q.isIntersecting)})},K=new IntersectionObserver(Y,{threshold:.5});return R.current&&K.observe(R.current),()=>{K.disconnect()}}},[i]),$.useEffect(()=>{if(u){let Y=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(Y)}}},[u]);let M=()=>{f(!0)},X=()=>{f(!1),y(!1)};return c?i!=="intent"?[h,R,{}]:[h,R,{onFocus:Dl(S,M),onBlur:Dl(b,X),onMouseEnter:Dl(g,M),onMouseLeave:Dl(w,X),onTouchStart:Dl(_,M)}]:[!1,R,{}]}function Dl(i,o){return c=>{i&&i(c),c.defaultPrevented||o(c)}}function u2({page:i,...o}){let{router:c}=Mg(),u=$.useMemo(()=>Tg(c.routes,i,c.basename),[c.routes,i,c.basename]);return u?$.createElement(f2,{page:i,matches:u,...o}):null}function d2(i){let{manifest:o,routeModules:c}=Bg(),[u,f]=$.useState([]);return $.useEffect(()=>{let h=!1;return a2(i,o,c).then(y=>{h||f(y)}),()=>{h=!0}},[i,o,c]),u}function f2({page:i,matches:o,...c}){let u=sn(),{manifest:f,routeModules:h}=Bg(),{basename:y}=Mg(),{loaderData:S,matches:b}=s2(),g=$.useMemo(()=>Tp(i,o,b,f,u,"data"),[i,o,b,f,u]),w=$.useMemo(()=>Tp(i,o,b,f,u,"assets"),[i,o,b,f,u]),_=$.useMemo(()=>{if(i===u.pathname+u.search+u.hash)return[];let X=new Set,Y=!1;if(o.forEach(k=>{let Q=f.routes[k.route.id];!Q||!Q.hasLoader||(!g.some(Z=>Z.route.id===k.route.id)&&k.route.id in S&&h[k.route.id]?.shouldRevalidate||Q.hasClientLoader?Y=!0:X.add(k.route.id))}),X.size===0)return[];let K=e2(i,y,"data");return Y&&X.size>0&&K.searchParams.set("_routes",o.filter(k=>X.has(k.route.id)).map(k=>k.route.id).join(",")),[K.pathname+K.search]},[y,S,u,f,g,o,i,h]),R=$.useMemo(()=>i2(w,f),[w,f]),M=d2(w);return $.createElement($.Fragment,null,_.map(X=>$.createElement("link",{key:X,rel:"prefetch",as:"fetch",href:X,...c})),R.map(X=>$.createElement("link",{key:X,rel:"modulepreload",href:X,...c})),M.map(({key:X,link:Y})=>$.createElement("link",{key:X,nonce:c.nonce,...Y})))}function m2(...i){return o=>{i.forEach(c=>{typeof c=="function"?c(o):c!=null&&(c.current=o)})}}var Ng=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ng&&(window.__reactRouterVersion="7.8.0")}catch{}function h2({basename:i,children:o,window:c}){let u=$.useRef();u.current==null&&(u.current=tv({window:c,v5Compat:!0}));let f=u.current,[h,y]=$.useState({action:f.action,location:f.location}),S=$.useCallback(b=>{$.startTransition(()=>y(b))},[y]);return $.useLayoutEffect(()=>f.listen(S),[f,S]),$.createElement(Xv,{basename:i,children:o,location:h.location,navigationType:h.action,navigator:f})}var Ug=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,it=$.forwardRef(function({onClick:o,discover:c="render",prefetch:u="none",relative:f,reloadDocument:h,replace:y,state:S,target:b,to:g,preventScrollReset:w,viewTransition:_,...R},M){let{basename:X}=$.useContext(It),Y=typeof g=="string"&&Ug.test(g),K,k=!1;if(typeof g=="string"&&Y&&(K=g,Ng))try{let se=new URL(window.location.href),ne=g.startsWith("//")?new URL(se.protocol+g):new URL(g),Ce=_n(ne.pathname,X);ne.origin===se.origin&&Ce!=null?g=Ce+ne.search+ne.hash:k=!0}catch{Pt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Q=Ev(g,{relative:f}),[Z,q,O]=c2(u,R),U=b2(g,{replace:y,state:S,target:b,preventScrollReset:w,relative:f,viewTransition:_});function V(se){o&&o(se),se.defaultPrevented||U(se)}let te=$.createElement("a",{...R,...O,href:K||Q,onClick:k||h?o:V,ref:m2(M,q),target:b,"data-discover":!Y&&c==="render"?"true":void 0});return Z&&!Y?$.createElement($.Fragment,null,te,$.createElement(u2,{page:Q})):te});it.displayName="Link";var p2=$.forwardRef(function({"aria-current":o="page",caseSensitive:c=!1,className:u="",end:f=!1,style:h,to:y,viewTransition:S,children:b,...g},w){let _=Zl(y,{relative:g.relative}),R=sn(),M=$.useContext(Bo),{navigator:X,basename:Y}=$.useContext(It),K=M!=null&&j2(_)&&S===!0,k=X.encodeLocation?X.encodeLocation(_).pathname:_.pathname,Q=R.pathname,Z=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;c||(Q=Q.toLowerCase(),Z=Z?Z.toLowerCase():null,k=k.toLowerCase()),Z&&Y&&(Z=_n(Z,Y)||Z);const q=k!=="/"&&k.endsWith("/")?k.length-1:k.length;let O=Q===k||!f&&Q.startsWith(k)&&Q.charAt(q)==="/",U=Z!=null&&(Z===k||!f&&Z.startsWith(k)&&Z.charAt(k.length)==="/"),V={isActive:O,isPending:U,isTransitioning:K},te=O?o:void 0,se;typeof u=="function"?se=u(V):se=[u,O?"active":null,U?"pending":null,K?"transitioning":null].filter(Boolean).join(" ");let ne=typeof h=="function"?h(V):h;return $.createElement(it,{...g,"aria-current":te,className:se,ref:w,style:ne,to:y,viewTransition:S},typeof b=="function"?b(V):b)});p2.displayName="NavLink";var g2=$.forwardRef(({discover:i="render",fetcherKey:o,navigate:c,reloadDocument:u,replace:f,state:h,method:y=yo,action:S,onSubmit:b,relative:g,preventScrollReset:w,viewTransition:_,...R},M)=>{let X=S2(),Y=w2(S,{relative:g}),K=y.toLowerCase()==="get"?"get":"post",k=typeof S=="string"&&Ug.test(S),Q=Z=>{if(b&&b(Z),Z.defaultPrevented)return;Z.preventDefault();let q=Z.nativeEvent.submitter,O=q?.getAttribute("formmethod")||y;X(q||Z.currentTarget,{fetcherKey:o,method:O,navigate:c,replace:f,state:h,relative:g,preventScrollReset:w,viewTransition:_})};return $.createElement("form",{ref:M,method:K,action:Y,onSubmit:u?b:Q,...R,"data-discover":!k&&i==="render"?"true":void 0})});g2.displayName="Form";function y2(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Hg(i){let o=$.useContext(Ai);return ke(o,y2(i)),o}function b2(i,{target:o,replace:c,state:u,preventScrollReset:f,relative:h,viewTransition:y}={}){let S=ja(),b=sn(),g=Zl(i,{relative:h});return $.useCallback(w=>{if(Jv(w,o)){w.preventDefault();let _=c!==void 0?c:Gl(b)===Gl(g);S(i,{replace:_,state:u,preventScrollReset:f,relative:h,viewTransition:y})}},[b,S,g,c,u,o,i,f,h,y])}var x2=0,v2=()=>`__${String(++x2)}__`;function S2(){let{router:i}=Hg("useSubmit"),{basename:o}=$.useContext(It),c=Hv();return $.useCallback(async(u,f={})=>{let{action:h,method:y,encType:S,formData:b,body:g}=Wv(u,o);if(f.navigate===!1){let w=f.fetcherKey||v2();await i.fetch(w,c,f.action||h,{preventScrollReset:f.preventScrollReset,formData:b,body:g,formMethod:f.method||y,formEncType:f.encType||S,flushSync:f.flushSync})}else await i.navigate(f.action||h,{preventScrollReset:f.preventScrollReset,formData:b,body:g,formMethod:f.method||y,formEncType:f.encType||S,replace:f.replace,state:f.state,fromRouteId:c,flushSync:f.flushSync,viewTransition:f.viewTransition})},[i,o,c])}function w2(i,{relative:o}={}){let{basename:c}=$.useContext(It),u=$.useContext(Ft);ke(u,"useFormAction must be used inside a RouteContext");let[f]=u.matches.slice(-1),h={...Zl(i||".",{relative:o})},y=sn();if(i==null){h.search=y.search;let S=new URLSearchParams(h.search),b=S.getAll("index");if(b.some(w=>w==="")){S.delete("index"),b.filter(_=>_).forEach(_=>S.append("index",_));let w=S.toString();h.search=w?`?${w}`:""}}return(!i||i===".")&&f.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(h.pathname=h.pathname==="/"?c:Tn([c,h.pathname])),Gl(h)}function j2(i,{relative:o}={}){let c=$.useContext(Ag);ke(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Hg("useViewTransitionState"),f=Zl(i,{relative:o});if(!c.isTransitioning)return!1;let h=_n(c.currentLocation.pathname,u)||c.currentLocation.pathname,y=_n(c.nextLocation.pathname,u)||c.nextLocation.pathname;return $o(f.pathname,y)!=null||$o(f.pathname,h)!=null}var Lg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},_p=ct.createContext&&ct.createContext(Lg),z2=["attr","size","title"];function $2(i,o){if(i==null)return{};var c=T2(i,o),u,f;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(i);for(f=0;f<h.length;f++)u=h[f],!(o.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(i,u)&&(c[u]=i[u])}return c}function T2(i,o){if(i==null)return{};var c={};for(var u in i)if(Object.prototype.hasOwnProperty.call(i,u)){if(o.indexOf(u)>=0)continue;c[u]=i[u]}return c}function To(){return To=Object.assign?Object.assign.bind():function(i){for(var o=1;o<arguments.length;o++){var c=arguments[o];for(var u in c)Object.prototype.hasOwnProperty.call(c,u)&&(i[u]=c[u])}return i},To.apply(this,arguments)}function Ep(i,o){var c=Object.keys(i);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);o&&(u=u.filter(function(f){return Object.getOwnPropertyDescriptor(i,f).enumerable})),c.push.apply(c,u)}return c}function _o(i){for(var o=1;o<arguments.length;o++){var c=arguments[o]!=null?arguments[o]:{};o%2?Ep(Object(c),!0).forEach(function(u){_2(i,u,c[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(c)):Ep(Object(c)).forEach(function(u){Object.defineProperty(i,u,Object.getOwnPropertyDescriptor(c,u))})}return i}function _2(i,o,c){return o=E2(o),o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}function E2(i){var o=C2(i,"string");return typeof o=="symbol"?o:o+""}function C2(i,o){if(typeof i!="object"||!i)return i;var c=i[Symbol.toPrimitive];if(c!==void 0){var u=c.call(i,o);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(i)}function qg(i){return i&&i.map((o,c)=>ct.createElement(o.tag,_o({key:c},o.attr),qg(o.child)))}function Fe(i){return o=>ct.createElement(A2,To({attr:_o({},i.attr)},o),qg(i.child))}function A2(i){var o=c=>{var{attr:u,size:f,title:h}=i,y=$2(i,z2),S=f||c.size||"1em",b;return c.className&&(b=c.className),i.className&&(b=(b?b+" ":"")+i.className),ct.createElement("svg",To({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},c.attr,u,y,{className:b,style:_o(_o({color:i.color||c.color},c.style),i.style),height:S,width:S,xmlns:"http://www.w3.org/2000/svg"}),h&&ct.createElement("title",null,h),i.children)};return _p!==void 0?ct.createElement(_p.Consumer,null,c=>o(c)):o(Lg)}function D2(i){return Fe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(i)}function Gg(i){return Fe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(i)}function R2(i){return Fe({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"},child:[]}]})(i)}function O2(i){return Fe({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(i)}function Yg(i){return Fe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(i)}function k2(i){return Fe({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(i)}function M2(i){return Fe({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(i)}function uu(i){return Fe({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"},child:[]}]})(i)}function du(i){return Fe({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(i)}function B2(i){return Fe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(i)}function N2(i){return Fe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(i)}function U2(i){return Fe({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"},child:[]}]})(i)}function H2(i){return Fe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(i)}function L2(i){return Fe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(i)}function q2(i){return Fe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M262.29 192.31a64 64 0 1 0 57.4 57.4 64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22 155.3 155.3 0 0 1-21.46-12.57 16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22 155.3 155.3 0 0 1 21.46 12.57 16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z"},child:[]}]})(i)}const Xg="/assets/logo-KzmhyHs9.svg",Qg=i=>{const[o,c]=$.useState(null),[u,f]=$.useState(null),[h,y]=$.useState(!1),[S,b]=$.useState(null);return $.useEffect(()=>{if(!i)return;(async()=>{y(!0),b(null);try{const w=await ht(`/api/merch/${i}`);if(!w.ok)throw new Error("Failed to fetch product");const _=await w.json();if(c(_),_.productTypeId){const R=await ht(`/api/merch/productType/${_.productTypeId}`);if(R.ok){const M=await R.json();f(M)}}}catch(w){b(w.message)}finally{y(!1)}})()},[i]),{product:o,productType:u,loading:h,error:S}},G2=x.nav`
  background-color: #000;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #333;
  position: relative;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
  margin-top: 0; /* No extra margin needed */
  
  @media (min-width: 480px) {
    padding: 1rem 1.5rem;
  }
  
  @media (min-width: 768px) {
    padding: 1.25rem 2rem;
  }
`,Y2=x.ol`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.75rem;
  justify-self: start;
  
  @media (min-width: 480px) {
    font-size: 0.875rem;
  }
`,nt=x.li`
  display: flex;
  align-items: center;

  &:not(:last-child)::after {
    content: "/";
    margin: 0 0.5rem;
    color: #666;
    font-size: 0.75rem;
    
    @media (min-width: 480px) {
      margin: 0 0.75rem;
      font-size: 0.8rem;
    }
  }
`,Vt=x(it)`
  color: #999;
  text-decoration: none;
  font-size: 14px;
  margin: 0;
  padding: 0;

  &:hover {
    color: #ccc;
  }
`,fi=x.span`
  color: #ffffffff;
  font-size: 14px;
  margin: 0;
  padding: 0;
`,X2=()=>{const i=sn(),{productId:o}=Fu(),{product:c,loading:u}=Qg(o);if(!(i.pathname==="/merch"||i.pathname.startsWith("/product")||i.pathname==="/cart"||i.pathname==="/favorites"||i.pathname==="/settings"||i.pathname==="/login"))return null;const h=()=>{const y=i.pathname;return y==="/merch"?s.jsxs(s.Fragment,{children:[s.jsx(nt,{children:s.jsx(Vt,{to:"/",children:"Home"})}),s.jsx(nt,{children:s.jsx(fi,{children:"Merch"})})]}):y.startsWith("/product")?s.jsxs(s.Fragment,{children:[s.jsx(nt,{children:s.jsx(Vt,{to:"/",children:"Home"})}),s.jsx(nt,{children:s.jsx(Vt,{to:"/merch",children:"Merch"})}),s.jsx(nt,{children:s.jsx(fi,{children:u?"Loading...":c?.name||"Product"})})]}):y==="/cart"?s.jsxs(s.Fragment,{children:[s.jsx(nt,{children:s.jsx(Vt,{to:"/",children:"Home"})}),s.jsx(nt,{children:s.jsx(Vt,{to:"/merch",children:"Merch"})}),s.jsx(nt,{children:s.jsx(fi,{children:"Cart"})})]}):y==="/settings"?s.jsxs(s.Fragment,{children:[s.jsx(nt,{children:s.jsx(Vt,{to:"/",children:"Home"})}),s.jsx(nt,{children:s.jsx(Vt,{to:"/merch",children:"Merch"})}),s.jsx(nt,{children:s.jsx(fi,{children:"Settings"})})]}):y==="/favorites"?s.jsxs(s.Fragment,{children:[s.jsx(nt,{children:s.jsx(Vt,{to:"/",children:"Home"})}),s.jsx(nt,{children:s.jsx(Vt,{to:"/merch",children:"Merch"})}),s.jsx(nt,{children:s.jsx(fi,{children:"Favorites"})})]}):y==="/login"?s.jsxs(s.Fragment,{children:[s.jsx(nt,{children:s.jsx(Vt,{to:"/",children:"Home"})}),s.jsx(nt,{children:s.jsx(Vt,{to:"/merch",children:"Merch"})}),s.jsx(nt,{children:s.jsx(fi,{children:"Login / Register"})})]}):null};return s.jsx(G2,{children:s.jsx(Y2,{children:h()})})},Q2=x.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${d.colors.red};
  color: ${d.colors.primaryText};
  border-radius: 50%;
  padding: 2px 4px;
  font-size: ${d.typography.sizes.xs};
  font-weight: ${d.typography.weights.bold};
  min-width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;

  @media (min-width: ${d.breakpoints.tablet}) {
    top: -${d.spacing.xs};
    right: -${d.spacing.xs};
    padding: 2px 6px;
    font-size: ${d.typography.sizes.xs};
    min-width: 18px;
    height: 18px;
  }
`,fu=x(it)`
  color: ${d.colors.primaryText};
  font-size: ${d.typography.sizes.lg};
  transition: color ${d.transitions.fast};
  position: relative;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    color: ${d.colors.mutedText};
  }
  
  @media (min-width: ${d.breakpoints.tablet}) {
    font-size: ${d.typography.sizes.lg};
    
    &:hover::after {
      content: attr(aria-label);
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      margin-top: ${d.spacing.xs};
      background: ${d.colors.charcoal};
      color: ${d.colors.primaryText};
      padding: ${d.spacing.xs} ${d.spacing.sm};
      border-radius: 4px;
      font-size: ${d.typography.sizes.xs};
      white-space: nowrap;
      z-index: 1000;
      pointer-events: none;
    }
  }
`,Z2=x.button`
  background: none;
  border: none;
  color: ${d.colors.primaryText};
  font-size: ${d.typography.sizes.lg};
  cursor: pointer;
  transition: color ${d.transitions.fast};
  padding: 0;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    color: ${d.colors.mutedText};
  }
  
  @media (min-width: ${d.breakpoints.tablet}) {
    font-size: ${d.typography.sizes.lg};
  }
`,V2=x.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`,K2=x.div`
  background-color: ${d.colors.sectionBg};
  padding: ${d.spacing["2xl"]};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 90%;
  
  h3 {
    color: ${d.colors.primaryText};
    margin-bottom: ${d.spacing.base};
    font-size: ${d.typography.sizes.xl};
  }
  
  p {
    color: ${d.colors.mutedText};
    margin-bottom: ${d.spacing.xl};
    font-size: ${d.typography.sizes.base};
  }
`,P2=x.div`
  display: flex;
  gap: ${d.spacing.base};
  justify-content: flex-end;
`,J2=x.button`
  background-color: ${d.colors.red};
  color: ${d.colors.primaryText};
  border: none;
  padding: ${d.spacing.sm} ${d.spacing.xl};
  border-radius: 4px;
  font-weight: ${d.typography.weights.bold};
  cursor: pointer;
  transition: background-color ${d.transitions.fast};
  
  &:hover {
    background-color: ${d.colors.darkRed};
  }
`,I2=x.button`
  background-color: ${d.colors.charcoal};
  color: ${d.colors.primaryText};
  border: none;
  padding: ${d.spacing.sm} ${d.spacing.xl};
  border-radius: 4px;
  font-weight: ${d.typography.weights.bold};
  cursor: pointer;
  transition: background-color ${d.transitions.fast};
  
  &:hover {
    background-color: ${d.colors.darkCharcoal};
  }
`,F2=i=>["/merch","/product","/cart","/favorites","/settings","/login","/profile"].some(c=>i.startsWith(c))?"shopping":"website",W2=x.nav`
  position: ${({$isHomepage:i})=>i?"absolute":"relative"};
  top: ${({$isHomepage:i})=>i?"0":"auto"};
  left: ${({$isHomepage:i})=>i?"0":"auto"};
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: ${({$hasPageTitle:i})=>i?"space-between":"flex-end"};
  align-items: center;
  z-index: 999;
  background: ${({$isHomepage:i})=>i?"transparent":"black"};
  box-sizing: border-box;
  min-height: 72px;
  
  /* Animation för homepage */
  transform: ${({$isHomepage:i,$hasAnimated:o})=>i&&!o?"translateX(100%)":"translateX(0)"};
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @media (min-width: 768px) {
    justify-content: ${({$hasPageTitle:i})=>i?"space-between":"flex-end"};
    padding: 2rem 3rem;
    min-height: 96px;
  }
`,e4=x.h1`
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
  
  @media (min-width: 480px) {
    font-size: 1.4rem;
  }
  
  @media (min-width: 768px) {
    font-size: 1.6rem;
    letter-spacing: 1.5px;
  }
  
  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
`,t4=x.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`,n4=x.nav`
  background: ${d.colors.pageBg};
  padding: ${d.spacing.xl} ${d.spacing.base};
  position: static;
  z-index: 200;

  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto auto;
  align-items: center;
  gap: ${d.spacing.base};
  
  @media (min-width: ${d.breakpoints.tablet}) {
    padding: ${d.spacing.xl} ${d.spacing["2xl"]};
    padding-top: ${d.spacing.sm};
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto auto auto;
    column-gap: ${d.spacing["2xl"]};
    row-gap: ${d.spacing.sm};
  }
`,a4=x.div`
  display: flex;
  justify-content: center;
  grid-column: 1 / -1;
  grid-row: 2;
  
  @media (min-width: ${d.breakpoints.tablet}) {
    justify-content: flex-start;
    grid-column: 1;
    grid-row: 1;
    align-self: start;
  }
`,i4=x(it)`
  display: inline-flex;
  align-items: flex-start;
  text-decoration: none;
  position: relative;
  
  @media (min-width: ${d.breakpoints.tablet}) {
    &:hover::after {
      content: "Home";
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      margin-top: ${d.spacing.xs};
      background: ${d.colors.charcoal};
      color: ${d.colors.primaryText};
      padding: ${d.spacing.xs} ${d.spacing.sm};
      border-radius: 4px;
      font-size: ${d.typography.sizes.xs};
      white-space: nowrap;
      z-index: 1000;
    }
  }
`,l4=x.img`
  height: 120px;
  width: auto;
  display: block;
  margin-top: ${d.spacing["2xl"]};
  
  @media (min-width: ${d.breakpoints.tablet}) {
    height: 90px;
    margin-top: 0;
  }
`,r4=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  grid-column: 1 / -1;
  grid-row: 1;
  
  @media (min-width: ${d.breakpoints.tablet}) {
    grid-column: 2;
    grid-row: 1;
    align-self: start;
  }
`,o4=x.h1`
  font-size: ${d.typography.sizes.lg};
  color: ${d.colors.primaryText};
  margin: 0;
  margin-top: ${d.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: ${d.typography.weights.bold};
  text-align: center;
  
  @media (min-width: ${d.breakpoints.mobile}) {
    font-size: ${d.typography.sizes.xl};
    margin-top: ${d.spacing.base};
    letter-spacing: 6px;
  }
  
  @media (min-width: ${d.breakpoints.tablet}) {
    font-size: ${d.typography.sizes["2xl"]};
    margin-top: 0;
    letter-spacing: 8px;
  }
`,s4=x.p`
  font-size: ${d.typography.sizes.xs};
  color: ${d.colors.secondaryText};
  margin: ${d.spacing.xs} 0 0 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media (min-width: ${d.breakpoints.mobile}) {
    font-size: ${d.typography.sizes.sm};
    margin-top: ${d.spacing.sm};
  }
`,c4=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 2;
  grid-row: 1;
  gap: ${d.spacing.base};
  
  @media (min-width: ${d.breakpoints.tablet}) {
    justify-content: flex-end;
    grid-column: 3;
    grid-row: 1;
    align-self: start;
    gap: ${d.spacing.lg};
  }
`,u4=x.div`
  display: none;
  
  @media (min-width: ${d.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    gap: ${d.spacing.lg};
  }
`,d4=x.div`
  grid-column: 1 / -1;
  grid-row: 3;
  display: flex;
  justify-content: center;
  
  @media (min-width: ${d.breakpoints.tablet}) {
    grid-column: 1 / -1;
    grid-row: 2;
    margin-top: ${d.spacing.base};
  }
`,Zg=x.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${d.colors.primaryText};
  font-size: ${d.typography.sizes.xl};
  cursor: pointer;
  padding: ${d.spacing.sm};
  
  @media (min-width: ${d.breakpoints.tablet}) {
    display: none;
  }
  
  &:hover {
    color: ${d.colors.buttonPrimary};
  }
`,f4=({location:i,hasAnimated:o})=>{const{user:c,logout:u}=_i(),[f,h]=$.useState(!1),y=i.pathname==="/",b=(g=>{const w={"/contact":"Contact","/media":"Media","/gigs":"Gigs"};return g.startsWith("/media/")?null:w[g]||null})(i.pathname);return s.jsxs(W2,{$isHomepage:y,$hasAnimated:o,$hasPageTitle:!!b,children:[b&&s.jsx(e4,{children:b}),s.jsxs(t4,{children:[s.jsx(Zg,{onClick:()=>h(!f),children:s.jsx(Yg,{})}),s.jsx("div",{style:{display:"none"}})]})]})},m4=()=>{const{user:i,logout:o}=_i(),{cartItems:c,getTotalItems:u}=$.useContext(Co),[f,h]=$.useState(!1),[y,S]=$.useState(!1),b=()=>h(!0),g=()=>{o(),h(!1)},w=()=>h(!1);return s.jsxs(n4,{children:[s.jsx(a4,{children:s.jsx(i4,{to:"/",children:s.jsx(l4,{src:Xg,alt:"Morbid Gene Logo"})})}),s.jsxs(r4,{children:[s.jsx(o4,{children:"The Official Morbid Gene Shop"}),s.jsx(s4,{children:"Powered by Spreadshirt"})]}),s.jsxs(c4,{children:[s.jsx(Zg,{onClick:()=>S(!y),children:s.jsx(Yg,{})}),s.jsxs(u4,{children:[i&&s.jsx(fu,{to:"/settings",title:"Account Settings",children:s.jsx(q2,{})}),s.jsx(fu,{to:"/favorites",title:"Favorites",children:s.jsx(B2,{})}),s.jsxs(fu,{to:"/cart",title:"Shopping Cart",children:[s.jsx(U2,{}),c.length>0&&s.jsx(Q2,{children:u()})]}),i&&s.jsx(Z2,{onClick:b,title:"Logout",children:s.jsx(H2,{})})]})]}),s.jsx(d4,{children:s.jsx(X2,{})}),f&&s.jsx(V2,{onClick:w,children:s.jsxs(K2,{onClick:_=>_.stopPropagation(),children:[s.jsx("h3",{children:"Confirm Logout"}),s.jsx("p",{children:"Are you sure you want to log out?"}),s.jsxs(P2,{children:[s.jsx(I2,{onClick:w,children:"Cancel"}),s.jsx(J2,{onClick:g,children:"Logout"})]})]})})]})},h4=()=>{const i=sn(),[o,c]=$.useState(!1),u=F2(i.pathname);return $.useEffect(()=>{if(i.pathname==="/")if(sessionStorage.getItem("homepage-animation-seen"))c(!0);else{const h=setTimeout(()=>{c(!0),sessionStorage.setItem("homepage-animation-seen","true")},500);return()=>clearTimeout(h)}},[i.pathname]),u==="shopping"?s.jsx(m4,{}):s.jsx(f4,{location:i,hasAnimated:o})};function p4(i){return Fe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M25.45 63.043l-4.364 17.463 8.73 2.18L90.44 97.846l29.402 44.1 62.44 187.32-36.845 73.693h17.827c-2.086 4.238-3.264 8.99-3.264 14 0 17.567 14.433 32 32 32s32-14.433 32-32c0-5.01-1.178-9.762-3.264-14h102.528c-2.086 4.238-3.264 8.99-3.264 14 0 17.567 14.433 32 32 32s32-14.433 32-32c0-5.01-1.178-9.762-3.264-14H393v-18H174.562l23-46h192.924l70-210h-327.67L101.56 82.07 34.183 65.227l-8.733-2.184zm115.038 83.914H231v46h-75.178l-15.334-46zm108.512 0h78v46h-78v-46zm96 0h90.512l-15.334 46H345v-46zm-183.18 64H231v46h-53.846l-15.334-46zm87.18 0h78v46h-78v-46zm96 0h69.18l-15.334 46H345v-46zm-161.846 64H231v46h-32.514l-15.332-46zm65.846 0h78v46h-78v-46zm96 0h47.846l-15.332 46H345v-46zm-153 128c7.84 0 14 6.16 14 14s-6.16 14-14 14-14-6.16-14-14 6.16-14 14-14zm160 0c7.84 0 14 6.16 14 14s-6.16 14-14 14-14-6.16-14-14 6.16-14 14-14z"},child:[]}]})(i)}x.div`
  background-color: #000;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #333;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (min-width: 480px) {
    padding: 0.75rem 1.5rem;
  }
`;x.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  @media (min-width: 480px) {
    gap: 1rem;
  }
`;x(it)`
  display: inline-flex;
  align-items: center;
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.75rem;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  transition: all 0.2s ease;
  line-height: 1;
  
  @media (min-width: 480px) {
    font-size: 0.875rem;
    padding: 0.5rem;
  }

  &:hover {
    background: rgba(220, 38, 38, 0.1);
    color: #dc2626;
  }
`;x(it)`
  display: inline-flex;
  align-items: center;
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.75rem;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  transition: all 0.2s ease;
  line-height: 1;
  
  @media (min-width: 480px) {
    font-size: 0.875rem;
    padding: 0.5rem;
  }

  &:hover {
    background: rgba(220, 38, 38, 0.1);
    color: #dc2626;
  }

  &::before {
    content: "♥";
    margin-right: 0.25rem;
    color: #dc2626;
    
    @media (min-width: 480px) {
      margin-right: 0.5rem;
    }
  }
`;x(it)`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: white;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  transition: all 0.2s ease;
  line-height: 1;
  
  @media (min-width: 480px) {
    gap: 0.4rem;
    padding: 0.5rem;
  }

  &:hover {
    background: rgba(220, 38, 38, 0.1);
    color: #dc2626;
  }
`;x(p4)`
  font-size: 16px;
  margin: 0;
  padding: 0;
  display: block;
  font-weight: bold;
  
  @media (min-width: 480px) {
    font-size: 18px;
  }
`;x.span`
  font-size: 0.75rem;
  line-height: 1;
  margin: 0;
  padding: 0;
  display: block;
  font-weight: bold;
  
  @media (min-width: 480px) {
    font-size: 0.875rem;
  }
`;x.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  transition: all 0.2s ease;
  
  @media (min-width: 768px) {
    display: none;
  }

  &:hover {
    background: rgba(220, 38, 38, 0.1);
    color: #dc2626;
  }
`;const g4=x.footer`
  background-color: #000;
  border-top: 1px solid #333;
  padding: 2rem 1rem;
  margin-top: auto;
  
  @media (min-width: 768px) {
    padding: 2rem 2rem;
  }
`,y4=x.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  text-align: center;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    text-align: left;
    align-items: center;
  }
`,b4=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`,uo=x.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: #dc2626;
  }
`,x4=x.div`
  color: #ccc;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  
  @media (min-width: 768px) {
    text-align: center;
  }
`,v4=x.div`
  display: flex;
  gap: 1rem;
  
  @media (min-width: 768px) {
    font-size: 12px;
  }
`,Cp=x(it)`
  color: #999;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #ccc;
  }
`,S4=x.div`
  color: #ccc;
  font-size: 0.9rem;
  
  @media (min-width: 768px) {
    text-align: right;
  }
`,w4=x.a`
  color: #ccc;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: white;
  }
`,j4=()=>{const i=new Date().getFullYear();return s.jsx(g4,{children:s.jsxs(y4,{children:[s.jsxs(b4,{children:[s.jsx(uo,{href:"https://open.spotify.com/artist/5AfmmWHx8TRE8mMU2uqhQC?si=VzjHLDFSTsiCfsc59r9nnw",target:"_blank",rel:"noopener noreferrer","aria-label":"Spotify",children:s.jsx(R2,{})}),s.jsx(uo,{href:"https://www.instagram.com/morbidgenebandpage",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:s.jsx(Gg,{})}),s.jsx(uo,{href:"https://www.youtube.com/@morbidgeneofficial",target:"_blank",rel:"noopener noreferrer","aria-label":"YouTube",children:s.jsx(O2,{})}),s.jsx(uo,{href:"https://www.facebook.com/morbidgene",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:s.jsx(D2,{})})]}),s.jsxs(x4,{children:[s.jsxs("div",{children:["© ",i," Morbid Gene"]}),s.jsxs(v4,{children:[s.jsx(Cp,{to:"/terms",children:"Terms of Use"}),s.jsx(Cp,{to:"/privacy",children:"Privacy Policy"})]})]}),s.jsx(S4,{children:s.jsx(w4,{href:"mailto:morbidgenemusic@gmail.com",children:"morbidgenemusic@gmail.com"})})]})})},z4="/assets/band-Bk1Q2eM4.jpg",$4=x.section`
  min-height: 100dvh;
  width: 100dvw;
  position: relative;
  background: url(${z4}) no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem;
  padding-bottom: 4rem;
  text-align: center;
  overflow: hidden;
`,T4=x.div`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1.5rem 2rem;
  max-width: 90%;
  border-radius: 8px;
  overflow-x: hidden;
  
  @media (min-width: 768px) {
    backdrop-filter: blur(4px);
  }
`,_4=x.h1`
  font-size: 2.5rem;
  color: #f5f5f5;
  text-shadow: 2px 2px 6px #000;
  margin: 0;
  word-break: break-word;
  
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`,E4=x.a`
  display: inline-block;
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #ccc;
  text-decoration: none;
  text-shadow: 1px 1px 3px #000;

  &:hover {
    text-decoration: underline;
    color: #fff;
  }
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`,C4=x(it)`
  position: absolute;
  top: 0rem;
  left: 2rem;
  z-index: 10;

  img {
    height: 80px;

    @media (min-width: 768px) {
      height: 200px;
    }
  }
`,A4=()=>s.jsxs($4,{id:"hero",children:[s.jsx(C4,{to:"/",children:s.jsx("img",{src:Xg,alt:"Morbid Gene logo"})}),s.jsxs(T4,{children:[s.jsx(_4,{children:"Morbid Gene Official"}),s.jsx(E4,{href:"https://open.spotify.com/album/60V2k04RRUCSt4fuD4NDWc?si=JYi5N-CrQJG84dBm34_tKg",target:"_blank",rel:"noopener noreferrer",children:"Our EP 'Face Your Maker' out now – Listen here!"})]})]}),D4=x.section`
  background: #000;
  padding: 3rem 1rem;
  text-align: center;
  
  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`,R4=x.a`
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: color 0.2s;
  flex-wrap: wrap;
  
  &:hover {
    color: #9ca3af;
  }
  
  @media (min-width: 768px) {
    font-size: 1.8rem;
    letter-spacing: 2px;
    flex-wrap: nowrap;
  }
`;x.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  margin-bottom: 2rem;
  display: inline-block;
  transition: color 0.2s;
  
  &:hover {
    color: #9ca3af;
  }
  
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;const O4=x.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`,k4=x.a`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  background: #1a1a1a;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
    z-index: 1;
    
    &::after {
      opacity: 1;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent, rgba(220, 38, 38, 0.4));
    opacity: 0;
    transition: opacity 0.2s;
  }
`,M4=x.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,B4=x.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  z-index: 2;
`;x.div`
  width: 100%;
  height: 100%;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  font-size: 3rem;
`;const N4=()=>{const o={posts:[{id:"18056736512621615",permalink:"https://www.instagram.com/reel/DNl8nxOCD-X/",mediaType:"VIDEO",thumbnailUrl:"https://scontent-sof1-2.cdninstagram.com/v/t51.71878-15/535765604_3228535713971134_5922814022170085326_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=QTFFIrIuJ-sQ7kNvwH0UGZi&_nc_oc=AdmMF782hc4K9iFkI5P1pw87Ctr4QJzHO3G7Ac__qcyU8B5LhRqtcejILe3G1c_RGrFC1MCQ4F42adducJZdpiM2&_nc_zt=23&_nc_ht=scontent-sof1-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=hq3oAYY2XfShs1uiDlo4Sg&oh=00_AfXjk5_VN1AjX28JIjUtqx-nOWKTOQzmICFi4MekOYjN7g&oe=68B5265F",sizes:{medium:{mediaUrl:"https://behold.pictures/XPDtsfFk8wQ6ty5tqpTOBI9KPaC2/AmMaOJ50cbyW838WVB8L/18056736512621615/medium.jpg"}},caption:'NEW EP, "FACE YOUR MAKER" - OUT NOW ON ALL STREAMING PLATFORMS! 💿'},{id:"17870368617419948",permalink:"https://www.instagram.com/reel/DNNxbP_Mhzr/",mediaType:"VIDEO",thumbnailUrl:"https://scontent-sof1-1.cdninstagram.com/v/t51.82787-15/530233102_17962684250951301_4624421791502455443_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=9taS___u5ZQQ7kNvwEIgOUk&_nc_oc=Adkjtp6w3yLq_woDq46EIlk3ZeDAKuFFOBHTcHS1FycDEooTqVuPgtoz2iJ8O9D3r9wvefVFXP0JDRtDKKzjmPYN&_nc_zt=23&_nc_ht=scontent-sof1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=hq3oAYY2XfShs1uiDlo4Sg&oh=00_AfVRw_V7T1463gJBbjucfSAs_wDyqlW4CwtLxMOTJC6bxQ&oe=68B522C3",sizes:{medium:{mediaUrl:"https://behold.pictures/XPDtsfFk8wQ6ty5tqpTOBI9KPaC2/AmMaOJ50cbyW838WVB8L/17870368617419948/medium.jpg"}},caption:"🖤🖤"},{id:"17895729507266608",permalink:"https://www.instagram.com/reel/DM_h-1aiOia/",mediaType:"VIDEO",thumbnailUrl:"https://scontent-sof1-1.cdninstagram.com/v/t51.71878-15/528297148_3941584452819681_394528058147860578_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=xwxXfyxHVNoQ7kNvwGmwwXe&_nc_oc=Adk_rU8oQi9THt_QiJRgwK1wKSyU-phmlYCGvmRtD1Gp463KIH1l8dZSFWxuPdEz4PIm_R11ALTaJ74XzGUu7beZ&_nc_zt=23&_nc_ht=scontent-sof1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=hq3oAYY2XfShs1uiDlo4Sg&oh=00_AfUR953u02e4MUMHACbjq5yRe9n0qSNLXC_zemy8t-X2pA&oe=68B4FACD",sizes:{medium:{mediaUrl:"https://behold.pictures/XPDtsfFk8wQ6ty5tqpTOBI9KPaC2/AmMaOJ50cbyW838WVB8L/17895729507266608/medium.jpg"}},caption:"Morbid Gene - Purpose. Out now on all platforms!"},{id:"18101034772492536",permalink:"https://www.instagram.com/reel/DK5CUfvifej/",mediaType:"VIDEO",thumbnailUrl:"https://scontent-sof1-2.cdninstagram.com/v/t51.75761-15/503873013_17956392338951301_8694256387169534820_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=QefLR353MEAQ7kNvwG9CDHK&_nc_oc=Adnm0ifct6tIUl1HHhvfGpMiQfdp5Um34NZ7JYqKDNiy8zjtHzbf7akYsUx3LcG3tPIuSWuqPyAI7hswuJgJVXbC&_nc_zt=23&_nc_ht=scontent-sof1-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=hq3oAYY2XfShs1uiDlo4Sg&oh=00_AfUBpbNxAqyA8-8-UR6sb309smhOeT3orrlGptJ7IP0ujg&oe=68B501D7",sizes:{medium:{mediaUrl:"https://behold.pictures/XPDtsfFk8wQ6ty5tqpTOBI9KPaC2/AmMaOJ50cbyW838WVB8L/18101034772492536/medium.jpg"}},caption:'"PURPOSE" out now on all streaming platforms!'},{id:"17991048590811446",permalink:"https://www.instagram.com/p/DK0TS3VC4Ig/",mediaType:"IMAGE",mediaUrl:"https://scontent-sof1-2.cdninstagram.com/v/t51.75761-15/504509917_17956183985951301_3036917802775333302_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=tv0GgcMUp3wQ7kNvwEF4nLR&_nc_oc=AdkpfTHh2drjU8zx7sB29DIF5kGKHdjm27SnkwNm8ThKsFFjQgiwR94DXEmzcy1WzUiwvNWvX2Iq-6eBEuEpp3bH&_nc_zt=23&_nc_ht=scontent-sof1-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=hq3oAYY2XfShs1uiDlo4Sg&oh=00_AfXjZRQNu4lXpliJE2Kwe0JkytxpdiQRIdz9fRaGzfYK_A&oe=68B5287B",sizes:{medium:{mediaUrl:"https://behold.pictures/XPDtsfFk8wQ6ty5tqpTOBI9KPaC2/AmMaOJ50cbyW838WVB8L/17991048590811446/medium.jpg"}},caption:"🤜🤛🔥"},{id:"18314806621226775",permalink:"https://www.instagram.com/p/DKeU1JDC3yg/",mediaType:"CAROUSEL_ALBUM",mediaUrl:"https://scontent-sof1-1.cdninstagram.com/v/t51.75761-15/503150253_17955203873951301_2085565770835587894_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=VIDsyCS8NykQ7kNvwGJ0xB8&_nc_oc=AdkfR7_SEy287uXv3bk8CuO6NUkGJniGouN1ftwQZghv9l17HGi7IeUmpHOOv117UsJoq1Cvx9IFY-V-sUOmwWLK&_nc_zt=23&_nc_ht=scontent-sof1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=hq3oAYY2XfShs1uiDlo4Sg&oh=00_AfXQC8x3PsgFuIfANaUKnlflp9Lfxr-bZ5jhEFP1Tnoc5A&oe=68B51281",sizes:{medium:{mediaUrl:"https://behold.pictures/XPDtsfFk8wQ6ty5tqpTOBI9KPaC2/AmMaOJ50cbyW838WVB8L/18314806621226775/medium.jpg"}},caption:"Kråkan, Vocals 🔥"}]}.posts.slice(0,6).map((c,u)=>{let f;return c.mediaType==="VIDEO"?f=c.sizes?.medium?.mediaUrl||c.thumbnailUrl:f=c.sizes?.medium?.mediaUrl||c.mediaUrl,{id:c.id,imageUrl:f,postUrl:c.permalink,alt:c.caption?`${c.caption.substring(0,50)}...`:`Morbid Gene Instagram post ${u+1}`,mediaType:c.mediaType,isVideo:c.mediaType==="VIDEO"}});return s.jsxs(D4,{children:[s.jsxs(R4,{href:"https://www.instagram.com/morbidgenebandpage/",target:"_blank",rel:"noopener noreferrer",children:["Follow Us ",s.jsx(Gg,{})," morbidgenebandpage"]}),s.jsx(O4,{children:o.map(c=>s.jsxs(k4,{href:c.postUrl,target:"_blank",rel:"noopener noreferrer","aria-label":c.alt,children:[s.jsx(M4,{src:c.imageUrl,alt:c.alt,loading:"lazy"}),c.isVideo&&s.jsx(B4,{children:s.jsx(N2,{})})]},c.id))})]})},U4=x.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #000;
  color: #fff;
  border: 2px solid #fff;
  cursor: pointer;
  display: ${i=>i.$isVisible?"flex":"none"};
  align-items: center;
  justify-content: center;
  font-size: 20px;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #333;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
  }
`,H4=x.span`
  &::before {
    content: "↑";
    font-weight: bold;
  }
`,Jt=()=>{const[i,o]=$.useState(!1);$.useEffect(()=>{const u=()=>{window.pageYOffset>300?o(!0):o(!1)};return window.addEventListener("scroll",u),()=>{window.removeEventListener("scroll",u)}},[]);const c=()=>{window.scrollTo({top:0,behavior:"smooth"})};return s.jsx(U4,{$isVisible:i,onClick:c,"aria-label":"Scroll to top",children:s.jsx(H4,{})})},L4=()=>s.jsxs(s.Fragment,{children:[s.jsx(A4,{}),s.jsx(N4,{}),s.jsx(Jt,{})]}),Vg="/assets/1-D8fA1BfH.jpg",Kg="/assets/10-e7Zg5oei.jpg",Pg="/assets/11-B2yZKaUd.jpg",Jg="/assets/12-BAd-p6qN.jpg",Ig="/assets/13-GyWweX6N.jpg",Fg="/assets/14-Dja3XA8x.jpg",Wg="/assets/15-BaZITr23.jpg",e0="/assets/16-D_pyVsMO.jpg",t0="/assets/17-DbgwhdH2.jpg",n0="/assets/18-BV16_kds.jpg",a0="/assets/19-CsFlFBv1.jpg",i0="/assets/2-qG2L30ZI.jpg",l0="/assets/20-wZdG-SR-.jpg",r0="/assets/21-DPl9Y7l3.jpg",o0="/assets/22-DiKAXVzP.jpg",s0="/assets/23-DbG4D12m.jpg",c0="/assets/24-D4HduF6b.jpg",u0="/assets/25-BFC4tMWb.jpg",d0="/assets/26-ttjLywfX.jpg",f0="/assets/27-v9bgJ_2i.jpg",m0="/assets/28-DqRNMe7y.jpg",h0="/assets/29-Cajzr2u8.jpg",p0="/assets/3-BKNVHun_.jpg",g0="/assets/30-C6rPkaS-.jpg",y0="/assets/31-C39ech7U.jpg",b0="/assets/32-BnvR4OjT.jpg",x0="/assets/33-Bjmcq7re.jpg",v0="/assets/4-BiLxIdMj.jpg",S0="/assets/5-B3ylAitY.jpg",w0="/assets/6-CSJixN84.jpg",j0="/assets/7-CvnMc_xS.jpg",z0="/assets/8-BatzCXHS.jpg",$0="/assets/9-DIuiT2Eu.jpg",T0="/assets/DSC02947-Cmvz-Zga.jpg",_0="/assets/DSC02951-p3xcBjHT.jpg",E0="/assets/DSC02957-BouP3Wtv.jpg",C0="/assets/DSC02960-DTbBoWxn.jpg",A0="/assets/DSC02962-CcYDAR0D.jpg",D0="/assets/DSC02967-BRhoSaoS.jpg",R0="/assets/DSC02968-DRKSL1xH.jpg",O0="/assets/DSC02969-DY3tDbm_.jpg",k0="/assets/DSC02970-BB8-RA_D.jpg",M0="/assets/DSC02973-bQOljm7z.jpg",B0="/assets/DSC02572-Enhanced-NR%20(1)-B9ecWBzx.jpg",N0="/assets/DSC02578-Enhanced-NR-D0uwDjt_.jpg",U0="/assets/DSC02609-Enhanced-NR-CQpy8hZH.jpg",H0="/assets/DSC02648-Enhanced-NR%20(1)-DWphirGT.jpg",L0="/assets/DSC02663-Enhanced-NR-BAQWcJkl.jpg",q0="/assets/DSC02679-Enhanced-NR-Ckcwt2Az.jpg",G0="/assets/DSC02682-Enhanced-NR-Edit-BqT5cryI.jpg",q4=Object.assign({"/src/assets/images/fryshuset/1.jpg":Vg,"/src/assets/images/fryshuset/10.jpg":Kg,"/src/assets/images/fryshuset/11.jpg":Pg,"/src/assets/images/fryshuset/12.jpg":Jg,"/src/assets/images/fryshuset/13.jpg":Ig,"/src/assets/images/fryshuset/14.jpg":Fg,"/src/assets/images/fryshuset/15.jpg":Wg,"/src/assets/images/fryshuset/16.jpg":e0,"/src/assets/images/fryshuset/17.jpg":t0,"/src/assets/images/fryshuset/18.jpg":n0,"/src/assets/images/fryshuset/19.jpg":a0,"/src/assets/images/fryshuset/2.jpg":i0,"/src/assets/images/fryshuset/20.jpg":l0,"/src/assets/images/fryshuset/21.jpg":r0,"/src/assets/images/fryshuset/22.jpg":o0,"/src/assets/images/fryshuset/23.jpg":s0,"/src/assets/images/fryshuset/24.jpg":c0,"/src/assets/images/fryshuset/25.jpg":u0,"/src/assets/images/fryshuset/26.jpg":d0,"/src/assets/images/fryshuset/27.jpg":f0,"/src/assets/images/fryshuset/28.jpg":m0,"/src/assets/images/fryshuset/29.jpg":h0,"/src/assets/images/fryshuset/3.jpg":p0,"/src/assets/images/fryshuset/30.jpg":g0,"/src/assets/images/fryshuset/31.jpg":y0,"/src/assets/images/fryshuset/32.jpg":b0,"/src/assets/images/fryshuset/33.jpg":x0,"/src/assets/images/fryshuset/4.jpg":v0,"/src/assets/images/fryshuset/5.jpg":S0,"/src/assets/images/fryshuset/6.jpg":w0,"/src/assets/images/fryshuset/7.jpg":j0,"/src/assets/images/fryshuset/8.jpg":z0,"/src/assets/images/fryshuset/9.jpg":$0}),G4=Object.assign({"/src/assets/images/fredagsmangel/DSC02947.jpg":T0,"/src/assets/images/fredagsmangel/DSC02951.jpg":_0,"/src/assets/images/fredagsmangel/DSC02957.jpg":E0,"/src/assets/images/fredagsmangel/DSC02960.jpg":C0,"/src/assets/images/fredagsmangel/DSC02962.jpg":A0,"/src/assets/images/fredagsmangel/DSC02967.jpg":D0,"/src/assets/images/fredagsmangel/DSC02968.jpg":R0,"/src/assets/images/fredagsmangel/DSC02969.jpg":O0,"/src/assets/images/fredagsmangel/DSC02970.jpg":k0,"/src/assets/images/fredagsmangel/DSC02973.jpg":M0}),Y4=Object.assign({"/src/assets/images/olearys/DSC02572-Enhanced-NR (1).jpg":B0,"/src/assets/images/olearys/DSC02578-Enhanced-NR.jpg":N0,"/src/assets/images/olearys/DSC02609-Enhanced-NR.jpg":U0,"/src/assets/images/olearys/DSC02648-Enhanced-NR (1).jpg":H0,"/src/assets/images/olearys/DSC02663-Enhanced-NR.jpg":L0,"/src/assets/images/olearys/DSC02679-Enhanced-NR.jpg":q0,"/src/assets/images/olearys/DSC02682-Enhanced-NR-Edit.jpg":G0}),X4=[{id:"fryshuset",title:"Stockholm - Fryshuset 24.05.25",credit:"Photo © Marielle Tengström @ Tritone",images:Object.values(q4)},{id:"fredagsmangel",title:"Jakobsberg - Fredagsmangel 15.11.24",credit:"Photo © Per Lenner",images:Object.values(G4)},{id:"olearys",title:"Vällingby - O'learys - 26.10.24",credit:"Photo © Christoffer Wiklundh",images:Object.values(Y4)}],Q4=x.section`
  padding: 120px 2rem 2rem;
  background: ${d.colors.pageBg};
  color: ${d.colors.primaryText};
  min-height: 100vh;
`,Z4=x.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
`,V4=x(it)`
  position: relative;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
  }

  &:hover .overlay {
    opacity: 1;
  }
`,K4=x.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 4px;

  @media (max-width: 767px) {
    opacity: 1;
    background: rgba(0, 0, 0, 0.85);
    justify-content: flex-end;
    padding: 1rem;
  }
`,P4=x.h2`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 767px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    background: rgba(0, 0, 0, 0.9);
    padding: 0.75rem;
    border-radius: 4px;
    font-weight: bold;
  }
`,J4=x.span`
  background: ${d.colors.red};
  color: ${d.colors.primaryText};
  padding: 0.5rem 1rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 4px;

  @media (max-width: 767px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
`,I4=()=>s.jsxs(Q4,{children:[s.jsx(Z4,{children:X4.map(i=>s.jsxs(V4,{to:`/media/${i.id}`,children:[s.jsx("img",{src:i.images[0],alt:i.title}),s.jsxs(K4,{className:"overlay",children:[s.jsx(P4,{children:i.title}),s.jsx(J4,{children:"View More"})]})]},i.id))}),s.jsx(Jt,{})]});function F4(i){return Fe({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"},child:[]}]})(i)}function W4(i){return Fe({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},child:[]},{tag:"path",attr:{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},child:[]}]})(i)}const on=x.div.withConfig({shouldForwardProp:i=>!["$maxWidth","$minHeight","$variant","$padding"].includes(i)})`
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  
  /* Max-width variants */
  max-width: ${i=>{const{$maxWidth:o="md"}=i;switch(o){case"sm":return"800px";case"md":return"1200px";case"lg":return"1600px";default:return o}}};
  
  /* Min-height variants */
  min-height: ${i=>{const{$minHeight:o="auto"}=i;switch(o){case"viewport":return"100vh";case"auto":return"auto";default:return o}}};
  
  /* Responsive padding based on size variant */
  padding: ${i=>{const{$padding:o="md"}=i;switch(o){case"sm":return`${d.spacing.base}`;case"md":return`${d.spacing.base}`;case"lg":return`${d.spacing.xl}`;case"xl":return`${d.spacing["2xl"]}`;default:return`${d.spacing.base}`}}};
  
  /* Responsive padding adjustments */
  @media (min-width: ${d.breakpoints.mobile}) {
    padding: ${i=>{const{$padding:o="md"}=i;switch(o){case"sm":return`${d.spacing.lg}`;case"md":return`${d.spacing.xl}`;case"lg":return`${d.spacing["2xl"]}`;case"xl":return`${d.spacing["2xl"]}`;default:return`${d.spacing.xl}`}}};
  }
  
  @media (min-width: ${d.breakpoints.tablet}) {
    padding: ${i=>{const{$padding:o="md"}=i;switch(o){case"sm":return`${d.spacing["2xl"]}`;case"md":return`${d.spacing["2xl"]}`;case"lg":return`${d.spacing["3xl"]}`;case"xl":return`${d.spacing["3xl"]}`;default:return`${d.spacing["2xl"]}`}}};
  }
  
  @media (min-width: ${d.breakpoints.desktop}) {
    padding: ${i=>{const{$padding:o="md"}=i;switch(o){case"sm":return`${d.spacing["2xl"]}`;case"md":return`${d.spacing["3xl"]}`;case"lg":return`${d.spacing["3xl"]}`;case"xl":return`${d.spacing["4xl"]}`;default:return`${d.spacing["3xl"]}`}}};
  }
  
  /* Layout variants */
  ${i=>{const{$variant:o}=i;switch(o){case"form":return`
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        `;case"grid":return`
          display: flex;
          flex-direction: column;
          gap: ${d.spacing.base};
          
          @media (min-width: ${d.breakpoints.tablet}) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: ${d.spacing["2xl"]};
          }
          
          @media (min-width: ${d.breakpoints.desktop}) {
            gap: ${d.spacing["3xl"]};
          }
        `;case"page":default:return`
          display: block;
        `}}}
`;x.div.withConfig({shouldForwardProp:i=>!["$maxWidth"].includes(i)})`
  max-width: ${i=>i.$maxWidth||"600px"};
  margin: 0 auto;
  padding: ${d.spacing.base};
  width: 100%;
  box-sizing: border-box;
  
  @media (min-width: ${d.breakpoints.mobile}) {
    padding: ${d.spacing["2xl"]};
  }
`;x.div`
  background: ${d.colors.sectionBg};
  border: 1px solid ${d.colors.borderLight};
  padding: ${d.spacing.base};
  margin-bottom: ${d.spacing.base};
  
  @media (min-width: ${d.breakpoints.mobile}) {
    padding: ${d.spacing.xl};
  }
  
  @media (min-width: ${d.breakpoints.tablet}) {
    padding: ${d.spacing["2xl"]};
    margin-bottom: ${d.spacing["2xl"]};
  }
`;const e3=x.div`
  text-align: center;
  margin-bottom: 3rem;
`,t3=x.h1`
  color: ${d.colors.primaryText};
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`,n3=x.p`
  color: ${d.colors.secondaryText};
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`,a3=x.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,i3=x.div`
  background: ${d.colors.sectionBg};
  border: 1px solid ${d.colors.charcoal};
  padding: 2rem;
  border-radius: 8px;
  transition: border-color 0.3s ease;
  
  &:hover {
    border-color: ${d.colors.buttonPrimary};
  }
`,l3=x.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`,r3=x.div`
  flex: 1;
`,o3=x.h2`
  color: ${d.colors.primaryText};
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`,s3=x.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${d.colors.secondaryText};
  font-size: 1rem;
  margin: 0;
  
  svg {
    color: ${d.colors.buttonPrimary};
    font-size: 1.1rem;
  }
`,c3=x.div`
  text-align: left;
  
  @media (min-width: 768px) {
    text-align: right;
  }
`,u3=x.div`
  color: ${d.colors.buttonPrimary};
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`,d3=x.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${d.colors.primaryText};
  font-size: 1.1rem;
  
  svg {
    color: ${d.colors.primaryText};
    font-size: 1.1rem;
  }
`,f3=x.div`
  margin-bottom: 1.5rem;
`,m3=x.p`
  color: ${d.colors.secondaryText};
  line-height: 1.6;
  margin-bottom: 1rem;
`,h3=x.a`
  display: inline-block;
  background: ${d.colors.buttonPrimary};
  color: ${d.colors.primaryText};
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: ${d.colors.buttonPrimaryHover};
    text-decoration: none;
    color: ${d.colors.primaryText};
  }
`,Ap=x.span`
  color: ${d.colors.mediumGray};
  font-style: italic;
  font-size: 0.9rem;
`,p3=()=>{const i=[{id:1,venue:"Brother Tuck",location:"Stockholm",date:"13 September",dayOfWeek:"Lör",time:"20:00",description:"Join us for an intimate evening of heavy music at Brother Tuck. Expect crushing riffs and atmospheric soundscapes.",ticketLink:"https://zippertic.se/events/946",hasTickets:!0},{id:2,venue:"The Node",location:"Stockholm",date:"7 November",dayOfWeek:"Tor",time:"TBA",description:"More details coming soon for this highly anticipated show at The Node.",ticketLink:null,hasTickets:!1}];return s.jsxs(on,{$maxWidth:"md",$padding:"lg",children:[s.jsxs(e3,{children:[s.jsx(t3,{children:"Upcoming Gigs"}),s.jsx(n3,{children:"Join us live for an unforgettable metal experience. Check back regularly for new dates and ticket information."})]}),s.jsx(a3,{children:i.map(o=>s.jsxs(i3,{children:[s.jsxs(l3,{children:[s.jsxs(r3,{children:[s.jsx(o3,{children:o.venue}),s.jsxs(s3,{children:[s.jsx(F4,{}),o.location]})]}),s.jsxs(c3,{children:[s.jsx(u3,{children:o.date}),s.jsxs(d3,{children:[s.jsx(W4,{}),o.time==="TBA"?s.jsx(Ap,{children:"Time TBA"}):o.time]})]})]}),s.jsxs(f3,{children:[s.jsx(m3,{children:o.description}),o.hasTickets&&o.ticketLink?s.jsx(h3,{href:o.ticketLink,target:"_blank",rel:"noopener noreferrer",children:"Get Tickets"}):s.jsx(Ap,{children:"Tickets coming soon"})]})]},o.id))}),s.jsx(Jt,{})]})};function g3({q:i,limit:o,offset:c}){const[u,f]=$.useState([]),[h,y]=$.useState(0),[S,b]=$.useState(!1),[g,w]=$.useState(null);return $.useEffect(()=>{b(!0),w(null);const _=new URLSearchParams;_.append("limit",o),i&&_.append("q",i),ht(`/api/merch?${_.toString()}`).then(R=>{if(!R.ok)throw new Error("Something went wrong while fetching products");return R.json()}).then(R=>{f(R.sellables||[]),y(R.count||0)}).catch(R=>w(R.message)).finally(()=>b(!1))},[i,o,c]),{items:u,total:h,loading:S,error:g}}const Yl=i=>{let o;if(typeof i=="object"&&i!==null?o=i.display||i.vatIncluded||i.amount:o=i,!o||o===0)return"0,00 €";const c=o>100?o/100:o;return new Intl.NumberFormat("sv-SE",{style:"currency",currency:"EUR",minimumFractionDigits:2}).format(c)},mu={liten:"Small",mellan:"Medium",stor:"Large","extra stor":"Extra Large","extra extra stor":"2X Large",svart:"Black",vit:"White",grå:"Gray",röd:"Red",blå:"Blue",grön:"Green",gul:"Yellow",orange:"Orange",rosa:"Pink",lila:"Purple",brun:"Brown",marinblå:"Navy",mörkgrå:"Dark Gray",ljusgrå:"Light Gray","heather grey":"Heather Gray",charcoal:"Charcoal",burgundy:"Burgundy",vinröd:"Wine Red",beige:"Beige",khaki:"Khaki",huvtröja:"Hoodie",luvtröja:"Hoodie",tröja:"Sweatshirt","t-shirt":"T-shirt","t-tröja":"T-shirt",linne:"Tank Top",keps:"Cap",mugg:"Mug",väska:"Bag",tygväska:"Tote Bag",klistermärke:"Sticker",poster:"Poster",premiumluvtröja:"Premium Hoodie","premium luvtröja":"Premium Hoodie","premium t-shirt":"Premium T-shirt",herr:"Men's",dam:"Women's",unisex:"Unisex",barn:"Kids'",premium:"Premium",ekologisk:"Organic",klassisk:"Classic"},ad=i=>{if(!i)return"";const o=i.toLowerCase();if(mu[o])return mu[o];let c=i;return Object.entries(mu).forEach(([u,f])=>{const h=new RegExp(`\\b${u}\\b`,"gi");c=c.replace(h,f)}),c},Y0=i=>{if(!i)return"";const o=i.toUpperCase();return/^(XXS|XS|S|M|L|XL|XXL|3XL|4XL|5XL)$/.test(o)?o:ad(i)},X0=i=>{if(!i)return"";const o=ad(i);return o===i?i.charAt(0).toUpperCase()+i.slice(1).toLowerCase():o},id=i=>i?i.split(/[\s-]/).map(u=>ad(u)||u).join(" ").replace(/\s+/g," ").trim():"",Q0=x.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  /* Tooltip för icke-inloggade användare */
  ${i=>!i.$isAuthenticated&&i.$showTooltip?`
    &:hover::after {
      content: "Login to add favorites";
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 5px;
      background: #333;
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      z-index: 1000;
    }
  `:""}
`,y3=x.svg`
  width: 20px;
  height: 20px;
  transition: all 0.2s ease;
  
  path {
    fill: ${i=>i.$isFavorite?"#dc2626":"transparent"};
    stroke: ${i=>i.$isFavorite?"#dc2626":"#666"};
    stroke-width: 2;
    transition: all 0.2s ease;
  }
  
  ${Q0}:hover & path {
    stroke: #dc2626;
  }
`,Z0=({product:i,size:o=20,showTooltip:c=!1})=>{const{isAuthenticated:u,isFavorite:f,addToFavorites:h,removeFromFavorites:y}=_i(),[S,b]=$.useState(!1),g=f(i.sellableId),w=async _=>{if(_.preventDefault(),_.stopPropagation(),!!u){b(!0);try{g?await y(i.sellableId):await h(i)}catch(R){console.error("Favorite toggle error:",R)}finally{b(!1)}}};return s.jsx(Q0,{onClick:w,disabled:S,$isAuthenticated:u,$showTooltip:c,"aria-label":g?"Remove from favorites":"Add to favorites",title:u?g?"Remove from favorites":"Add to favorites":"Login to add favorites",style:{position:"relative"},children:s.jsx(y3,{$isFavorite:g,width:o,height:o,viewBox:"0 0 24 24",children:s.jsx("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})})})},V0=({item:i})=>{const o=i.productTypeName||i.productType?.name||i.name||"Unknown Product",c=i.previewImage?.url,u=i.price?.amount;i.price?.currencyId;const f=i.sellableId;return s.jsxs("div",{style:{border:"1px solid #e2e8f0",borderRadius:"0.5rem",padding:"1rem",display:"block",transition:"box-shadow 0.2s",backgroundColor:"white",color:"black",position:"relative",paddingBottom:"3rem"},children:[s.jsxs(it,{to:`/product/${f}`,style:{textDecoration:"none",color:"inherit",display:"block"},children:[c&&s.jsx("img",{src:c,alt:o,style:{width:"100%",aspectRatio:"1 / 1",objectFit:"cover",borderRadius:"0.25rem",marginBottom:"0.5rem"}}),s.jsx("div",{style:{fontWeight:"500"},children:id(o)}),u!=null&&s.jsx("div",{style:{fontSize:"0.875rem",opacity:"0.8"},children:Yl(u)})]}),s.jsx("div",{style:{position:"absolute",bottom:"0.5rem",right:"0.5rem",zIndex:10},children:s.jsx(Z0,{product:i,showTooltip:!0})})]})},K0=Zx`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,b3=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${i=>i.$fullScreen?"80vh":i.$minHeight||"200px"};
  padding: ${i=>i.$padding||"2rem"};
`,x3=x.div`
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top: 3px solid #dc2626;
  border-radius: 50%;
  width: ${i=>i.$size||"50px"};
  height: ${i=>i.$size||"50px"};
  animation: ${K0} 1s linear infinite;
`,v3=x.p`
  color: #ffffff;
  margin-top: 1rem;
  font-size: 1rem;
  text-align: center;
`,S3=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Uu=({size:i="50px",fullScreen:o=!1,minHeight:c="200px",padding:u="2rem",text:f="Loading...",showText:h=!0})=>s.jsx(b3,{$fullScreen:o,$minHeight:c,$padding:u,children:s.jsxs(S3,{children:[s.jsx(x3,{$size:i}),h&&s.jsx(v3,{children:f})]})}),w3=x.div`
  display: inline-block;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid currentColor;
  border-radius: 50%;
  width: ${i=>i.$size||"16px"};
  height: ${i=>i.$size||"16px"};
  animation: ${K0} 1s linear infinite;
  margin-right: ${i=>i.$marginRight||"8px"};
  vertical-align: middle;
`,j3=({size:i="16px",marginRight:o="8px"})=>s.jsx(w3,{$size:i,$marginRight:o}),z3=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`,$3=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,T3=x.button`
  background: ${i=>i.$active?"${theme.colors.pageBg}":"${theme.colors.primaryText}"};
  color: ${i=>i.$active?"${theme.colors.primaryText}":"${theme.colors.pageBg}"};
  border: 1px solid ${d.colors.pageBg};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${i=>i.$active?"${theme.colors.pageBg}":"#f5f5f5"};
  }
`,_3=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 0.5rem;
  }
`,E3=x.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,hu=x.button`
  background: ${i=>i.$active?"${theme.colors.pageBg}":"${theme.colors.primaryText}"};
  color: ${i=>i.$active?"${theme.colors.primaryText}":"${theme.colors.pageBg}"};
  border: 1px solid ${d.colors.pageBg};
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 40px;

  &:hover:not(:disabled) {
    background: ${i=>i.$active?"${theme.colors.pageBg}":"#f5f5f5"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,C3=x.span`
  font-size: 0.875rem;
  color: ${d.colors.mediumGray};
  text-align: center;

  @media (min-width: 768px) {
    margin: 0 1rem;
  }
`,A3=x.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`,D3=()=>{const[i,o]=$.useState(""),[c,u]=$.useState(""),[f,h]=$.useState("all"),[y,S]=$.useState(1),b=10,{items:g,loading:w,error:_}=g3({q:c,limit:100,offset:0});$.useEffect(()=>{const O=setTimeout(()=>{u(i),S(1)},300);return()=>clearTimeout(O)},[i]),$.useEffect(()=>{S(1)},[f]);const R=[{key:"all",label:"All"},{key:"mens",label:"Men"},{key:"womens",label:"Women"},{key:"other",label:"Other"}],X=f==="all"?g:g.filter(O=>{const U=(O.productTypeName||O.name||"").toLowerCase();switch(f){case"mens":return U.includes("men")&&!U.includes("women");case"womens":return U.includes("women")||U.includes("ladies");case"other":return!U.includes("men")&&!U.includes("women");default:return!0}}),Y=Math.ceil(X.length/b),K=(y-1)*b,k=K+b,Q=X.slice(K,k),Z=()=>{const O=[];if(Y<=5)for(let V=1;V<=Y;V++)O.push(V);else if(y<=3){for(let V=1;V<=4;V++)O.push(V);O.push("..."),O.push(Y)}else if(y>=Y-2){O.push(1),O.push("...");for(let V=Y-3;V<=Y;V++)O.push(V)}else O.push(1),O.push("..."),O.push(y-1),O.push(y),O.push(y+1),O.push("..."),O.push(Y);return O},q=O=>{S(O),window.scrollTo({top:0,behavior:"smooth"})};return s.jsxs("div",{style:{padding:"1rem",maxWidth:"1280px",margin:"0 auto"},children:[s.jsxs(z3,{children:[s.jsx("h1",{style:{fontSize:"1.5rem",fontWeight:"bold",margin:"0"},children:"Merch"}),s.jsx($3,{children:R.map(O=>s.jsx(T3,{$active:f===O.key,onClick:()=>h(O.key),children:O.label},O.key))})]}),s.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"1rem",position:"relative"},children:[s.jsx("input",{style:{border:"1px solid #ccc",padding:"0.5rem 0.75rem",borderRadius:"0.25rem",width:"100%",maxWidth:"28rem"},placeholder:"Search merch…",value:i,onChange:O=>o(O.target.value)}),i&&w&&s.jsx("span",{style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)",fontSize:"0.875rem",color:"${theme.colors.mediumGray}"},children:"Searching..."})]}),w&&s.jsx(Uu,{text:"Loading products...",minHeight:"400px"}),_&&s.jsx("p",{children:"We're sorry, but we couldn't load the merch right now. Please try again later or visit: https://morbid-gene.myspreadshop.se/"}),!w&&!_&&s.jsxs(s.Fragment,{children:[s.jsxs("p",{style:{fontSize:"0.875rem",opacity:"0.7",marginBottom:"0.5rem"},children:["Showing ",K+1,"-",Math.min(k,X.length)," of ",X.length," products"]}),s.jsx(A3,{children:Q.map(O=>s.jsx(V0,{item:O},O.sellableId))}),Y>1&&s.jsxs(_3,{children:[s.jsxs(E3,{children:[s.jsx(hu,{onClick:()=>q(y-1),disabled:y===1,"aria-label":"Previous page",children:"←"}),Z().map((O,U)=>O==="..."?s.jsx("span",{style:{margin:"0 0.5rem"},children:"..."},`ellipsis-${U}`):s.jsx(hu,{$active:O===y,onClick:()=>q(O),children:O},O)),s.jsx(hu,{onClick:()=>q(y+1),disabled:y===Y,"aria-label":"Next page",children:"→"})]}),s.jsxs(C3,{children:["Page ",y," of ",Y]})]})]}),s.jsx(Jt,{})]})},R3=(i,o,c)=>{const[u,f]=$.useState([]),[h,y]=$.useState(!1),[S,b]=$.useState(null);return $.useEffect(()=>{if(!i||!o)return;(async()=>{y(!0),b(null);try{const w=await ht(`/api/merch/sellable/${i}/${o}/${c}`);if(!w.ok)throw new Error("Failed to fetch images");const _=await w.json();f(_.images||[])}catch(w){console.error("Error fetching images:",w),b(w.message)}finally{y(!1)}})()},[i,o,c]),{images:u,loading:h,error:S}},O3=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`,Dp=x.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  cursor: pointer;
`,k3=x.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
`,M3=x.div`
  display: flex;
  gap: 0.5rem;
  transition: transform 0.3s ease;
  transform: translateX(${i=>i.$offset}px);
  width: max-content;
  overflow: visible;
`,Rp=x.button.withConfig({shouldForwardProp:i=>!["$direction"].includes(i)})`
  background-color: #dc2626;
  color: #ffffff;
  border: none;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  
  &:hover {
    background-color: #b91c1c;
  }
  
  &:disabled {
    background-color: #666666;
    cursor: not-allowed;
  }
  
  ${i=>i.$direction==="left"&&`
    left: -20px;
  `}
  
  ${i=>i.$direction==="right"&&`
    right: -20px;
  `}
`,B3=x.div`
  overflow: hidden;
  margin: 0 20px;
  width: 480px; /* Show 5 full thumbnails + hint of the 6th */
  
  @media (max-width: 767px) {
    width: 176px; /* Show exactly 2 full thumbnails (80px * 2 + 16px for gap and safety) */
    margin: 0 15px;
  }
`,N3=x.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  border: 2px solid ${i=>i.$isActive?"#dc2626":"#e2e8f0"};
  cursor: pointer;
  transition: border-color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    border-color: #dc2626;
  }
`,U3=x.div`
  width: 100%;
  max-width: 500px;
  height: 300px;
  background-color: #f3f4f6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
`,H3=({images:i,productName:o,fallbackImage:c})=>{const[u,f]=$.useState(0),[h,y]=$.useState(0),S=5,b=2,_=80+8,M=window.innerWidth<=767?b:S,X=i&&i.length>M,Y=u===0,K=u===(i?i.length-1:0),k=Z=>{if(Z==="right"){if(u<i.length-1){const q=u+1;f(q);const U=Math.abs(Math.round(h/_))+M-1;if(q>U){const V=h-_;y(V)}}}else if(u>0){const q=u-1;f(q);const O=Math.abs(Math.round(h/_));if(q<O){const U=h+_;y(U)}}};if(!i||i.length===0)return c?s.jsx(Dp,{src:c,alt:o}):s.jsx(U3,{children:"Loading images..."});const Q=i[u]||i[0];return s.jsxs(O3,{children:[s.jsx(Dp,{src:Q.url,alt:`${o} - Image ${u+1}`,onClick:()=>{}}),i.length>1&&s.jsxs(k3,{children:[X&&s.jsx(Rp,{$direction:"left",onClick:()=>k("left"),disabled:Y,"aria-label":"Previous image",children:s.jsx(k2,{})}),s.jsx(B3,{children:s.jsx(M3,{$offset:h,children:i.map((Z,q)=>s.jsx(N3,{src:Z.url,alt:`${o} thumbnail ${q+1}`,$isActive:q===u,onClick:()=>f(q)},q))})}),X&&s.jsx(Rp,{$direction:"right",onClick:()=>k("right"),disabled:K,"aria-label":"Next image",children:s.jsx(M2,{})})]})]})},L3=x.div`
  margin-bottom: ${d.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${d.spacing.base};
  
  @media (min-width: ${d.breakpoints.tablet}) {
    gap: ${d.spacing.xl};
  }
`,pu=x.select`
  padding: ${d.spacing.md};
  background-color: ${d.colors.inputBg};
  border: 2px solid ${d.colors.borderLight};
  border-radius: 4px;
  color: ${d.colors.primaryText};
  font-size: ${d.typography.sizes.base};
  width: 100%;
  cursor: pointer;
  transition: border-color ${d.transitions.normal};

  &:focus {
    outline: none;
    border-color: ${d.colors.borderRed};
  }

  option {
    background-color: ${d.colors.inputBg};
    color: ${d.colors.primaryText};
  }
  
  @media (min-width: ${d.breakpoints.mobile}) {
    padding: 0.85rem;
  }
`;x.div`
  display: flex;
  align-items: center;
  gap: ${d.spacing.md};
  margin-bottom: ${d.spacing.xl};
  
  @media (min-width: ${d.breakpoints.tablet}) {
    gap: ${d.spacing.base};
  }
`;x.label`
  color: ${d.colors.primaryText};
  font-weight: ${d.typography.weights.bold};
  font-size: ${d.typography.sizes.base};
  min-width: 80px;
`;x.input`
  padding: ${d.spacing.sm};
  width: 80px;
  background-color: ${d.colors.inputBg};
  border: 2px solid ${d.colors.borderLight};
  border-radius: 4px;
  color: ${d.colors.primaryText};
  font-size: ${d.typography.sizes.base};
  text-align: center;

  &:focus {
    outline: none;
    border-color: ${d.colors.borderRed};
  }

  /* Hide spin buttons in webkit browsers */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Hide spin buttons in Firefox */
  &[type=number] {
    -moz-appearance: textfield;
  }
`;const P0=x.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: ${d.spacing.base};
`,J0=x.div`
  background-color: ${d.colors.sectionBg};
  padding: ${d.spacing["2xl"]};
  border-radius: 8px;
  border: 1px solid ${d.colors.borderLight};
  max-width: 400px;
  width: 100%;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  
  @media (min-width: ${d.breakpoints.mobile}) {
    padding: ${d.spacing["3xl"]};
  }
`,I0=x.p`
  color: ${d.colors.primaryText};
  margin-bottom: ${d.spacing.xl};
  font-size: ${d.typography.sizes.base};
  line-height: 1.5;
  
  @media (min-width: ${d.breakpoints.mobile}) {
    font-size: ${d.typography.sizes.lg};
    margin-bottom: ${d.spacing["2xl"]};
  }
`,F0=x.div`
  display: flex;
  gap: ${d.spacing.base};
  justify-content: center;
  flex-wrap: wrap;
`,W0=x.button`
  background-color: ${d.colors.buttonSecondary};
  color: ${d.colors.primaryText};
  border: none;
  padding: ${d.spacing.md} ${d.spacing.xl};
  border-radius: 4px;
  font-weight: ${d.typography.weights.bold};
  cursor: pointer;
  transition: background-color ${d.transitions.normal};
  
  &:hover {
    background-color: ${d.colors.buttonSecondaryHover};
  }
`,e1=x.button`
  background-color: ${d.colors.buttonPrimary};
  color: ${d.colors.primaryText};
  border: none;
  padding: ${d.spacing.md} ${d.spacing.xl};
  border-radius: 4px;
  font-weight: ${d.typography.weights.bold};
  cursor: pointer;
  transition: background-color ${d.transitions.normal};
  
  &:hover {
    background-color: ${d.colors.buttonPrimaryHover};
  }
`,q3=x.h1`
  font-size: ${d.typography.sizes.xl};
  font-weight: ${d.typography.weights.bold};
  margin-bottom: ${d.spacing.md};
  color: ${d.colors.primaryText};
  word-break: break-word;
  
  @media (min-width: ${d.breakpoints.mobile}) {
    font-size: ${d.typography.sizes["2xl"]};
    margin-bottom: ${d.spacing.base};
  }
  
  @media (min-width: ${d.breakpoints.tablet}) {
    font-size: ${d.typography.sizes["4xl"]};
  }
`,Eo=x.h1.withConfig({shouldForwardProp:i=>!["$size","$align","$uppercase","$spacing"].includes(i)})`
  color: ${d.colors.primaryText};
  font-weight: ${d.typography.weights.bold};
  margin: 0;
  text-align: ${i=>i.$align||"left"};
  text-transform: ${i=>i.$uppercase?"uppercase":"none"};
  letter-spacing: ${i=>i.$uppercase?d.typography.letterSpacing.uppercase:i.$spacing==="wide"?d.typography.letterSpacing.wide:i.$spacing==="wider"?d.typography.letterSpacing.wider:i.$spacing==="widest"?d.typography.letterSpacing.widest:d.typography.letterSpacing.normal};
  
  /* Size variants */
  ${i=>{switch(i.$size){case"sm":return`
          font-size: ${d.typography.sizes.lg};
          margin-bottom: ${d.spacing.sm};
          
          @media (min-width: ${d.breakpoints.mobile}) {
            font-size: ${d.typography.sizes.xl};
            margin-bottom: ${d.spacing.md};
          }
          
          @media (min-width: ${d.breakpoints.tablet}) {
            font-size: ${d.typography.sizes["2xl"]};
          }
        `;case"md":return`
          font-size: ${d.typography.sizes.xl};
          margin-bottom: ${d.spacing.md};
          
          @media (min-width: ${d.breakpoints.mobile}) {
            font-size: ${d.typography.sizes["2xl"]};
            margin-bottom: ${d.spacing.base};
          }
          
          @media (min-width: ${d.breakpoints.tablet}) {
            font-size: ${d.typography.sizes["3xl"]};
          }
        `;case"lg":return`
          font-size: ${d.typography.sizes["2xl"]};
          margin-bottom: ${d.spacing.base};
          
          @media (min-width: ${d.breakpoints.mobile}) {
            font-size: ${d.typography.sizes["3xl"]};
            margin-bottom: ${d.spacing.xl};
          }
          
          @media (min-width: ${d.breakpoints.tablet}) {
            font-size: ${d.typography.sizes["4xl"]};
          }
        `;case"xl":return`
          font-size: ${d.typography.sizes["3xl"]};
          margin-bottom: ${d.spacing.xl};
          
          @media (min-width: ${d.breakpoints.mobile}) {
            font-size: ${d.typography.sizes["4xl"]};
            margin-bottom: ${d.spacing["2xl"]};
          }
          
          @media (min-width: ${d.breakpoints.tablet}) {
            font-size: 3.5rem;
            margin-bottom: ${d.spacing["3xl"]};
          }
        `;default:return`
          font-size: ${d.typography.sizes.xl};
          margin-bottom: ${d.spacing.md};
          
          @media (min-width: ${d.breakpoints.mobile}) {
            font-size: ${d.typography.sizes["2xl"]};
            margin-bottom: ${d.spacing.base};
          }
          
          @media (min-width: ${d.breakpoints.tablet}) {
            font-size: ${d.typography.sizes["3xl"]};
          }
        `}}}
`,at=x.h2.withConfig({shouldForwardProp:i=>!["$border","$align"].includes(i)})`
  color: ${d.colors.primaryText};
  font-size: ${d.typography.sizes.lg};
  font-weight: ${d.typography.weights.bold};
  margin-bottom: ${d.spacing.base};
  text-align: ${i=>i.$align||"left"};
  border-bottom: ${i=>i.$border?`1px solid ${d.colors.borderLight}`:"none"};
  padding-bottom: ${i=>i.$border?d.spacing.sm:"0"};
  
  @media (min-width: ${d.breakpoints.mobile}) {
    font-size: ${d.typography.sizes.xl};
    margin-bottom: ${d.spacing.xl};
  }
  
  @media (min-width: ${d.breakpoints.tablet}) {
    font-size: ${d.typography.sizes["2xl"]};
  }
`,G3=x.p`
  font-size: ${d.typography.sizes.sm};
  margin-bottom: ${d.spacing.base};
  line-height: 1.5;
  color: ${d.colors.secondaryText};
  
  @media (min-width: ${d.breakpoints.mobile}) {
    font-size: ${d.typography.sizes.base};
    margin-bottom: ${d.spacing.xl};
    line-height: 1.6;
  }
  
  @media (min-width: ${d.breakpoints.tablet}) {
    font-size: ${d.typography.sizes.lg};
  }
`,Y3=x.div`
  font-size: ${d.typography.sizes.lg};
  font-weight: ${d.typography.weights.bold};
  margin-bottom: ${d.spacing.base};
  color: ${d.colors.buttonPrimary};
  
  @media (min-width: ${d.breakpoints.mobile}) {
    font-size: ${d.typography.sizes.xl};
    margin-bottom: ${d.spacing.xl};
  }
  
  @media (min-width: ${d.breakpoints.tablet}) {
    font-size: ${d.typography.sizes["2xl"]};
  }
`,X3=x.button`
  background-color: ${i=>i.$enabled?d.colors.buttonPrimary:d.colors.buttonDisabled};
  color: ${i=>i.$enabled?d.colors.primaryText:d.colors.secondaryText};
  padding: ${d.spacing.md} ${d.spacing.base};
  border-radius: 8px;
  border: none;
  font-size: ${d.typography.sizes.sm};
  font-weight: ${d.typography.weights.bold};
  cursor: ${i=>i.$enabled?"pointer":"not-allowed"};
  transition: background-color ${d.transitions.normal};
  opacity: ${i=>i.$enabled?1:.9};
  width: 100%;
  min-height: 44px;
  
  @media (min-width: ${d.breakpoints.mobile}) {
    padding: ${d.spacing.md} ${d.spacing.xl};
    font-size: ${d.typography.sizes.base};
  }
  
  @media (min-width: ${d.breakpoints.tablet}) {
    width: auto;
    padding: ${d.spacing.base} ${d.spacing["2xl"]};
    font-size: ${d.typography.sizes.lg};
  }

  &:hover {
    background-color: ${i=>i.$enabled?d.colors.buttonPrimaryHover:d.colors.buttonDisabled};
  }
  
  &:active {
    background-color: ${i=>i.$enabled?d.colors.darkRed:d.colors.buttonDisabled};
  }
  
  /* Mobile touch optimization */
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
`,Op=x.button.withConfig({shouldForwardProp:i=>!["$variant","$size","$fullWidth","$uppercase"].includes(i)})`
  border: none;
  font-weight: ${d.typography.weights.bold};
  cursor: pointer;
  transition: background-color ${d.transitions.normal};
  text-transform: ${i=>i.$uppercase?"uppercase":"none"};
  letter-spacing: ${i=>i.$uppercase?d.typography.letterSpacing.uppercase:d.typography.letterSpacing.normal};
  width: ${i=>i.$fullWidth?"100%":"auto"};
  min-height: 44px; /* Touch target accessibility */
  
  /* Mobile touch optimization */
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  
  /* Variant styles */
  ${i=>{switch(i.$variant){case"secondary":return`
          background-color: ${d.colors.buttonSecondary};
          color: ${d.colors.primaryText};
          
          &:hover:not(:disabled) {
            background-color: ${d.colors.buttonSecondaryHover};
          }
        `;case"danger":return`
          background-color: ${d.colors.red};
          color: ${d.colors.primaryText};
          
          &:hover:not(:disabled) {
            background-color: ${d.colors.darkRed};
          }
        `;case"outline":return`
          background-color: transparent;
          color: ${d.colors.primaryText};
          border: 1px solid ${d.colors.borderLight};
          
          &:hover:not(:disabled) {
            background-color: ${d.colors.sectionBg};
            border-color: ${d.colors.borderRed};
          }
        `;default:return`
          background-color: ${d.colors.buttonPrimary};
          color: ${d.colors.primaryText};
          
          &:hover:not(:disabled) {
            background-color: ${d.colors.buttonPrimaryHover};
          }
        `}}}
  
  /* Size variants */
  ${i=>{switch(i.$size){case"sm":return`
          padding: ${d.spacing.sm} ${d.spacing.md};
          font-size: ${d.typography.sizes.sm};
          
          @media (min-width: ${d.breakpoints.mobile}) {
            padding: ${d.spacing.md} ${d.spacing.base};
            font-size: ${d.typography.sizes.base};
          }
        `;case"lg":return`
          padding: ${d.spacing.base} ${d.spacing["2xl"]};
          font-size: ${d.typography.sizes.base};
          
          @media (min-width: ${d.breakpoints.mobile}) {
            padding: ${d.spacing.xl} ${d.spacing["3xl"]};
            font-size: ${d.typography.sizes.lg};
          }
        `;default:return`
          padding: ${d.spacing.md} ${d.spacing.base};
          font-size: ${d.typography.sizes.sm};
          
          @media (min-width: ${d.breakpoints.mobile}) {
            padding: ${d.spacing.md} ${d.spacing.xl};
            font-size: ${d.typography.sizes.base};
          }
        `}}}
  
  &:disabled {
    background-color: ${d.colors.buttonDisabled} !important;
    color: ${d.colors.mutedText} !important;
    cursor: not-allowed;
    border-color: ${d.colors.buttonDisabled};
  }
  
  &:focus {
    outline: 2px solid ${d.colors.buttonPrimary};
    outline-offset: 2px;
  }
`,t1=x.button.withConfig({shouldForwardProp:i=>!["$variant"].includes(i)})`
  background: none;
  border: none;
  color: ${i=>i.$variant==="primary"?d.colors.buttonPrimary:d.colors.primaryText};
  text-decoration: none;
  cursor: pointer;
  font-size: ${d.typography.sizes.sm};
  font-weight: ${d.typography.weights.bold};
  transition: color ${d.transitions.normal};
  padding: ${d.spacing.sm};
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  gap: ${d.spacing.sm};
  
  &:hover {
    color: ${d.colors.buttonPrimary};
    text-decoration: underline;
  }
  
  &:focus {
    outline: 2px solid ${d.colors.buttonPrimary};
    outline-offset: 2px;
  }
  
  @media (min-width: ${d.breakpoints.mobile}) {
    font-size: ${d.typography.sizes.base};
  }
`;x.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s ease-in-out infinite;
  margin-right: ${d.spacing.sm};

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;const Q3=x.div`
  padding: ${d.spacing["2xl"]};
  color: ${d.colors.primaryText};
  text-align: center;
`,Z3=x(Q3)`
  color: ${d.colors.red};
`,V3=x.div``,K3=x.div``,P3=x.div`
  margin-top: ${d.spacing["2xl"]};
  padding: ${d.spacing.xl};
  background-color: ${d.colors.sectionBg};
  font-size: ${d.typography.sizes.sm};
  color: ${d.colors.secondaryText};
  line-height: 1.5;
  
  @media (min-width: ${d.breakpoints.mobile}) {
    padding: ${d.spacing["2xl"]};
    font-size: ${d.typography.sizes.base};
  }
  
  strong {
    color: ${d.colors.primaryText};
    font-weight: ${d.typography.weights.bold};
  }
  
  > strong:first-child {
    font-size: ${d.typography.sizes.base};
    color: ${d.colors.primaryText};
    display: block;
    margin-bottom: ${d.spacing.base};
    
    @media (min-width: ${d.breakpoints.mobile}) {
      font-size: ${d.typography.sizes.lg};
    }
  }
`,gu=i=>i?i.replace(/<[^>]*>/g,"").trim():"",J3=()=>{const{productId:i}=Fu(),{product:o,productType:c,loading:u,error:f}=Qg(i),{addToCart:h}=$.useContext(Co),y=ja(),[S,b]=$.useState(null),[g,w]=$.useState(null),[_,R]=$.useState(1),[M,X]=$.useState(!1),[Y,K]=$.useState(!1),{images:k}=R3(o?.sellableId,o?S||o.defaultAppearanceId:null,o?.ideaId),Q=(U,V)=>c?.stockStates?.some(te=>te.size.id===U&&te.appearance.id===V&&te.available===!0),Z=()=>!S||!c?c?.sizes||[]:c.sizes.map(U=>({...U,available:Q(U.id,S)})),q=async()=>{if(!S||!g){alert("Please select both color and size");return}if(o){K(!0);try{const U=c.appearances.find(se=>se.id===S)?.name,V=c.sizes.find(se=>se.id===g)?.name,te=k&&k.length>0?k[0].url:o.previewImage?.url;await h(o,V,te,U,_,o.price),X(!0)}finally{K(!1)}}};if(u)return s.jsx(Uu,{fullScreen:!0,text:"Loading product..."});if(f)return s.jsxs(Z3,{children:["Error: ",f]});if(!o)return s.jsx(Uu,{fullScreen:!0,text:"Product not found."});const O=S&&g;return s.jsxs(on,{$maxWidth:"md",$variant:"grid",$padding:"md",children:[s.jsx(V3,{children:s.jsx(H3,{images:k,productName:o.name,fallbackImage:o.previewImage?.url})}),s.jsxs(K3,{children:[s.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:"1rem"},children:[s.jsx(q3,{style:{margin:0,flex:1,paddingRight:"1rem"},children:id(c?.name||o.productTypeName||o.name)}),s.jsx("div",{style:{flexShrink:0,paddingTop:"0.25rem"},children:s.jsx(Z0,{product:o,size:24,showTooltip:!0})})]}),c?.shortDescription&&s.jsx(G3,{children:gu(c.shortDescription)}),s.jsx(Y3,{children:Yl(o.price?.amount,o.price?.currencyId)}),s.jsxs(L3,{children:[s.jsxs(pu,{value:S||"",onChange:U=>{b(U.target.value),w(null)},"aria-label":"Choose Color",children:[s.jsx("option",{value:"",disabled:!0,children:"Choose Color"}),c?.appearances?.map(U=>s.jsx("option",{value:U.id,children:X0(U.name)},U.id))]}),s.jsxs(pu,{value:g||"",onChange:U=>w(U.target.value),disabled:!S,"aria-label":"Choose Size",children:[s.jsx("option",{value:"",disabled:!0,children:"Choose Size"}),Z().map(U=>s.jsxs("option",{value:U.id,disabled:S&&!U.available,children:[Y0(U.name)," ",S&&!U.available&&"(Out of stock)"]},U.id))]}),s.jsx(pu,{value:_,onChange:U=>R(parseInt(U.target.value)),"aria-label":"Quantity",children:[1,2,3,4,5,6,7,8,9,10].map(U=>s.jsx("option",{value:U,children:U===1?"Qty: 1":U},U))})]}),s.jsx(X3,{onClick:q,$enabled:O&&!Y,disabled:!O||Y,children:Y?s.jsxs(s.Fragment,{children:[s.jsx(j3,{}),"Adding to Cart..."]}):"Add to Cart"}),c&&s.jsxs(P3,{children:[s.jsx("strong",{children:"Product Details"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Print:"})," Morbid Gene"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Material:"})," ",c.description&&c.description.includes("Material:")?gu(c.description.match(/Material:([^<]*)/)?.[1]||"").trim():"N/A"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Weight:"})," ",(()=>{if(c.description){const U=c.description.match(/(\d+(?:g\/m²|g\/m2|gsm|\s*g\/m²))/i);if(U)return gu(U[1]).trim();const V=c.description.match(/(\d+)\s*g/i);if(V)return`${V[1]}g/m²`}return"N/A"})()]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Fit:"})," ",c.sizeFitHint||"N/A"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Clothing Brand:"})," ",c.brand||"N/A"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Care Instructions:"})," ",c.washingInstructions&&c.washingInstructions.length>0?c.washingInstructions.join(", "):"N/A"]})]})]}),M&&s.jsx(P0,{onClick:()=>X(!1),children:s.jsxs(J0,{onClick:U=>U.stopPropagation(),children:[s.jsx(I0,{children:"Product added to cart!"}),s.jsxs(F0,{children:[s.jsx(W0,{onClick:()=>X(!1),children:"Continue Shopping"}),s.jsx(e1,{onClick:()=>y("/cart"),children:"View Cart"})]})]})}),s.jsx(Jt,{})]})},I3=x.div`
  display: flex;
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  background-color: #ffffff;
  margin-bottom: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  gap: 0.75rem;
  width: 100%;
  box-sizing: border-box;
  
  @media (min-width: 480px) {
    padding: 1rem;
    gap: 1rem;
  }
  
  @media (min-width: 768px) {
    padding: 1.25rem;
    margin-bottom: 1rem;
  }
`,F3=x(it)`
  display: block;
  align-self: flex-start;
  flex-shrink: 0;
  cursor: pointer;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
`,W3=x.img`
  object-fit: cover;
  width: 60px;
  height: 60px;
  display: block;
  
  @media (min-width: 480px) {
    width: 80px;
    height: 80px;
  }
  
  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`,e5=x.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 0; /* Förhindra overflow */
  
  @media (min-width: 480px) {
    gap: 1rem;
  }
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`,t5=x.div`
  flex: 1; /* Tar upp mesta utrymmet till vänster */
`;x.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-end;
`;const n5=x.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`,a5=x(it)`
  margin: 0 0 0.5rem 0;
  font-size: 16px;
  color: #333333;
  text-align: left;
  font-weight: bold;
  text-decoration: none;
  display: block;
  transition: color 0.2s;
  
  &:hover {
    color: #666666;
  }
  
  @media (min-width: 480px) {
    font-size: 18px;
  }
`,i5=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 0.75rem;
  font-size: 16px;
  color: #666666;
  text-align: left;
`,yu=x.span`
  font-size: 16px;
  
  &.price {
    font-weight: bold;
    color: #333333;
    font-size: 16px;
  }
`,l5=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
  
  @media (min-width: 480px) {
    justify-content: flex-end;
  }
`,kp=x.button`
  padding: 0.4rem 0.6rem;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  color: #333333;
  cursor: pointer;
  font-size: 16px;
  min-width: 36px;
  font-weight: bold;
  
  @media (min-width: 480px) {
    padding: 0.5rem 0.75rem;
    min-width: 40px;
  }

  &:hover {
    background-color: #e5e5e5;
  }
  
  &:disabled {
    background-color: #f9f9f9;
    color: #999;
    cursor: not-allowed;
  }
`,r5=x.span`
  margin: 0 0.4rem;
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  min-width: 1.5rem;
  text-align: center;
  
  @media (min-width: 480px) {
    margin: 0 0.75rem;
    min-width: 2rem;
  }
`,o5=({item:i,onUpdateQuantity:o,onRemove:c})=>{if(!i)return null;const u=()=>{if(i.selectedImage&&typeof i.selectedImage=="string"&&i.selectedImage.startsWith("http"))return i.selectedImage;const y=[`cart-image-${i.sellableId}-${i.size}-${i.appearanceId}`,`cart-image-${i.sellableId}-${i.size}-default`,`cart-image-${i.sellableId}-${i.size}`,`cart-image-${i.sellableId}-${i.size}-undefined`];for(const S of y){const b=localStorage.getItem(S);if(b&&typeof b=="string"&&b.startsWith("http"))return b}return"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjQ0NDIi8+Cjx0ZXh0IHg9IjQwIiB5PSI0NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNjY2Ij5ObyBJbWFnZTwvdGV4dD4KPHN2Zz4K"},f=$.useMemo(()=>u(),[i.sellableId,i.size,i.appearanceId,i.selectedImage]),h=y=>{y<=0?c():o(y)};return s.jsxs(I3,{children:[s.jsx(F3,{to:`/product/${i.sellableId}`,children:s.jsx(W3,{src:f,alt:i.name||"Product image",width:"120",height:"120",onError:y=>{y.target.src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjQ0NDIi8+Cjx0ZXh0IHg9IjQwIiB5PSI0NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNjY2Ij5ObyBJbWFnZTwvdGV4dD4KPHN2Zz4K"}})}),s.jsxs(e5,{children:[s.jsxs(t5,{children:[s.jsx(a5,{to:`/product/${i.sellableId}`,children:id(i.name)}),s.jsxs(i5,{children:[s.jsxs(yu,{children:["Size: ",Y0(i.size)]}),i.color&&s.jsxs(yu,{children:["Color: ",X0(i.color)]}),s.jsxs(yu,{className:"price",children:["Price: ",Yl(i.price)]})]})]}),s.jsx(n5,{children:s.jsxs(l5,{children:[s.jsx(kp,{onClick:()=>{h(i.quantity-1)},"aria-label":i.quantity===1?"Remove item from cart":"Decrease quantity",title:i.quantity===1?"Remove item from cart":"Decrease quantity",children:i.quantity===1?s.jsx(L2,{}):"-"}),s.jsx(r5,{children:i.quantity}),s.jsx(kp,{onClick:()=>{h(i.quantity+1)},"aria-label":"Increase quantity",title:"Increase quantity",children:"+"})]})})]})]})},s5=({isOpen:i,onClose:o,onConfirm:c})=>{if(!i)return null;const u=()=>{c(),o()};return s.jsx(P0,{children:s.jsxs(J0,{children:[s.jsx(I0,{children:"Are you sure you want to clear your entire cart? This action cannot be undone."}),s.jsxs(F0,{children:[s.jsx(W0,{onClick:o,children:"Cancel"}),s.jsx(e1,{onClick:u,children:"Clear Cart"})]})]})})},c5=x.div`
  text-align: center;
  padding: 2rem 1rem;
  color: ${d.colors.secondaryText};
  
  @media (min-width: ${d.breakpoints.tablet}) {
    padding: 3rem;
  }
`,u5=x.div.withConfig({shouldForwardProp:i=>!["$size"].includes(i)})`
  font-size: ${i=>i.$size==="large"?"3rem":"2rem"};
  margin-bottom: 1rem;
  
  &::before {
    content: ${i=>i.children||'"❌"'};
  }
`,d5=x.h1.withConfig({shouldForwardProp:i=>!["$size"].includes(i)})`
  color: ${d.colors.primaryText};
  margin-bottom: ${i=>i.$size==="large"?"1rem":"0.5rem"};
  
  ${i=>{switch(i.$size){case"large":return`
          font-size: 1.5rem;
          
          @media (min-width: ${d.breakpoints.mobile}) {
            font-size: 2rem;
          }
        `;default:return`
          font-size: 1.25rem;
          
          @media (min-width: ${d.breakpoints.mobile}) {
            font-size: 1.5rem;
          }
        `}}}
`,f5=x.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: ${d.colors.secondaryText};
`,m5=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  
  @media (min-width: ${d.breakpoints.mobile}) {
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }
`,h5=x(it)`
  text-decoration: none;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  background-color: ${d.colors.buttonPrimary};
  color: ${d.colors.primaryText};
  border: none;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background-color ${d.transitions.normal};
  font-size: 0.9rem;
  
  @media (min-width: ${d.breakpoints.mobile}) {
    font-size: 1rem;
  }

  &:hover {
    background-color: ${d.colors.buttonPrimaryHover};
    text-decoration: none;
  }
`,Hu=({icon:i,title:o,message:c,actions:u,titleSize:f="medium",iconSize:h="medium"})=>s.jsxs(c5,{children:[i&&s.jsx(u5,{$size:h,children:i}),s.jsx(d5,{$size:f,children:o}),c&&s.jsx(f5,{children:c}),u&&s.jsx(m5,{children:u})]}),p5=x.div`
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`,g5=x.h1`
  color: ${d.colors.primaryText};
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  
  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,y5=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    gap: 1rem;
    margin-bottom: 2rem;
  }
`,b5=x.div`
  background: #1f2937;
  border: 1px solid #374151;
  padding: 1rem;
  margin-bottom: 1.5rem;
  
  @media (min-width: 480px) {
    padding: 1.5rem;
  }
  
  @media (min-width: 768px) {
    padding: 2rem;
    margin-bottom: 2rem;
  }
`,x5=x.h2`
  color: ${d.colors.primaryText};
  font-size: 1.1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #374151;
  padding-bottom: 0.5rem;
  
  @media (min-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
`,bu=x.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0;
  color: #e5e7eb;
  border-bottom: 1px solid #374151;
  gap: 0.5rem;
  
  @media (min-width: 480px) {
    align-items: center;
    padding: 0.75rem 0;
  }

  &:last-child {
    border-bottom: none;
    padding-top: 0.75rem;
    margin-top: 0.5rem;
    font-weight: bold;
    font-size: 1rem;
    color: white;
    
    @media (min-width: 480px) {
      padding-top: 1rem;
      font-size: 1.1rem;
    }
  }
`,xu=x.span.withConfig({shouldForwardProp:i=>!["bold"].includes(i)})`
  font-weight: ${i=>i.bold?"bold":"normal"};
  font-size: 0.9rem;
  
  @media (min-width: 480px) {
    font-size: 1rem;
  }
`,vu=x.span.withConfig({shouldForwardProp:i=>!["bold"].includes(i)})`
  font-weight: ${i=>i.bold?"bold":"normal"};
  font-size: 0.9rem;
  text-align: right;
  
  @media (min-width: 480px) {
    font-size: 1rem;
  }
`,v5=x.div`
  background: ${d.colors.sectionBg};
  border: 1px solid ${d.colors.buttonPrimary};
  padding: 1rem;
  margin-bottom: 1.5rem;
  
  @media (min-width: 480px) {
    padding: 1.5rem;
  }
  
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`,S5=x.h3`
  color: ${d.colors.primaryText};
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  @media (min-width: 480px) {
    margin: 0 0 0.75rem 0;
    font-size: 1.1rem;
  }
`,Mp=x.p`
  color: ${d.colors.secondaryText};
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.4;
  
  @media (min-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`,w5=x.ul`
  color: ${d.colors.secondaryText};
  margin: 0.5rem 0 0 0.75rem;
  font-size: 0.85rem;
  line-height: 1.3;
  
  @media (min-width: 480px) {
    margin: 0.5rem 0 0 1rem;
    font-size: 0.9rem;
    line-height: 1.4;
  }
`,j5=x.div`
  text-align: center;
  margin: 1rem 0;
  padding: 0.75rem 0;
  border-top: 1px solid #374151;
  border-bottom: 1px solid #374151;
  
  @media (min-width: 768px) {
    margin: 1.5rem 0;
    padding: 1rem 0;
  }
`,z5=x.p`
  color: #9ca3af;
  font-size: 0.8rem;
  margin: 0;
  line-height: 1.4;
  
  @media (min-width: 480px) {
    font-size: 0.85rem;
  }
`,Bp=x(it)`
  color: ${d.colors.primaryText};
  text-decoration: none;
  margin: 0 0.5rem;
  transition: color 0.2s ease;
  font-weight: bold;
  font-size: 0.8rem;
  
  @media (min-width: 480px) {
    font-size: 0.85rem;
  }
  
  &:hover {
    color: ${d.colors.buttonPrimary};
    text-decoration: underline;
  }
`,$5=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
  }
`,Np=x.button.withConfig({shouldForwardProp:i=>!["variant"].includes(i)})`
  padding: 0.75rem 1rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s;
  width: 100%;
  
  @media (min-width: 480px) {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    width: auto;
  }

  ${i=>i.variant==="primary"&&`
    background-color: ${d.colors.buttonPrimary};
    color: ${d.colors.primaryText};
    font-weight: bold;
    letter-spacing: 1px;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${d.colors.buttonPrimaryHover};
    }

    &:disabled {
      background-color: #6b7280;
      cursor: not-allowed;
    }
  `}

  ${i=>i.variant==="secondary"&&`
    background-color: ${d.colors.buttonPrimary};
    color: white;

    &:hover {
      background-color: ${d.colors.buttonPrimaryHover};
    }
  `}
`,T5=x.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid ${d.colors.primaryText};
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s ease-in-out infinite;
  margin-right: 8px;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,_5=()=>{const{cartItems:i,updateQuantity:o,removeFromCart:c,getTotalPrice:u,getTotalItems:f,clearCart:h,basketId:y}=$.useContext(Co),[S,b]=$.useState(!1),[g,w]=$.useState(!1),_=async()=>{if(!y){alert("No basket found. Please try refreshing the page.");return}b(!0);try{const M=await Lb(y);if(!M.checkoutUrl)throw new Error("No checkout URL received from server");window.location.href=M.checkoutUrl}catch(M){console.error("Checkout-fel:",M),alert(`An error occurred during checkout: ${M.message}`),b(!1)}},R=u();return i.length===0?s.jsx(Hu,{title:"Your cart is empty",titleSize:"large",actions:s.jsx(h5,{to:"/merch",children:"Continue shopping"})}):s.jsxs(on,{$maxWidth:"sm",$padding:"md",children:[s.jsx(p5,{children:s.jsxs(g5,{children:["Shopping Cart (",f()," items)"]})}),s.jsx(y5,{children:i.map(M=>s.jsx(o5,{item:M,onUpdateQuantity:X=>o(M.sellableId,M.size,X),onRemove:()=>c(M.sellableId,M.size)},`${M.sellableId}-${M.size}`))}),s.jsxs(b5,{children:[s.jsx(x5,{children:"Order Summary"}),s.jsxs(bu,{children:[s.jsxs(xu,{children:["Items (",f(),"):"]}),s.jsx(vu,{children:Yl(u())})]}),s.jsxs(bu,{children:[s.jsx(xu,{children:"Shipping:"}),s.jsx(vu,{children:"Calculated at checkout"})]}),s.jsxs(bu,{children:[s.jsx(xu,{bold:!0,children:"Total (excl. shipping):"}),s.jsx(vu,{bold:!0,children:Yl(R)})]})]}),s.jsxs(v5,{children:[s.jsx(S5,{children:"Secure Payment via Spreadshirt"}),s.jsx(Mp,{children:`When you click "Proceed to Checkout" you will be redirected to Spreadshirt's secure payment page where you can:`}),s.jsxs(w5,{children:[s.jsx("li",{children:"Enter delivery address"}),s.jsx("li",{children:"Choose payment method (card, PayPal etc.)"}),s.jsx("li",{children:"See exact delivery time estimates (typically ~7 days)"}),s.jsx("li",{children:"Review and complete your order"}),s.jsx("li",{children:"Receive order confirmation via email"})]}),s.jsxs(Mp,{style:{marginTop:"1rem",fontSize:"0.85rem",fontStyle:"italic"},children:[s.jsx("strong",{children:"Delivery:"})," Spreadshirt typically delivers within 7 days. The exact estimated delivery date will be shown during checkout based on your location and chosen shipping method."]})]}),s.jsx(j5,{children:s.jsxs(z5,{children:["By proceeding to checkout, you agree to our",s.jsx(Bp,{to:"/terms",children:"Terms of Use"}),"and",s.jsx(Bp,{to:"/privacy",children:"Privacy Policy"})]})}),s.jsxs($5,{children:[s.jsx(Np,{variant:"secondary",onClick:()=>w(!0),children:"Clear Cart"}),s.jsxs(Np,{variant:"primary",onClick:_,disabled:S,children:[S&&s.jsx(T5,{}),S?"Preparing checkout...":"Proceed to Checkout"]})]}),s.jsx(s5,{isOpen:g,onClose:()=>w(!1),onConfirm:h}),s.jsx(Jt,{})]})},E5={fryshuset:{title:"Fryshuset 24.05.25",credit:"Photo © Marielle Tengström @ Tritone",images:Object.values([Vg,Kg,Pg,Jg,Ig,Fg,Wg,e0,t0,n0,a0,i0,l0,r0,o0,s0,c0,u0,d0,f0,m0,h0,p0,g0,y0,b0,x0,v0,S0,w0,j0,z0,$0])},fredagsmangel:{title:"Fredagsmangel 15.11.24",credit:"Photo © Per Lenner",images:Object.values([T0,_0,E0,C0,A0,D0,R0,O0,k0,M0])},olearys:{title:"O'learys 26.10.24",credit:"Photo © Christoffer Wiklundh",images:Object.values([B0,N0,U0,H0,L0,q0,G0])}},Up=x.section`
  padding: 0 1rem 2rem;
  background: ${d.colors.pageBg};
  color: ${d.colors.primaryText};
  min-height: 100vh;
  text-align: center;
`,Hp=x.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.8rem;
  }
`,C5=x.p`
  font-size: 1rem;
  color: ${d.colors.primaryText};
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`,A5=x.div`
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 1fr; /* 📱 default: en kolumn */

  @media (min-width: 748px) {
    grid-template-columns: repeat(
      3,
      1fr
    ); /* 💻 tre kolumner på större skärmar */
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`,D5=()=>{const{slug:i}=Fu(),o=E5[i],[c,u]=$.useState([]);return $.useEffect(()=>{o&&Promise.all(o.images.map(f=>new Promise(h=>{const y=new Image;y.src=f,y.onload=()=>{h({src:f,isLandscape:y.width>=y.height})}}))).then(f=>{const h=f.filter(S=>S.isLandscape),y=f.filter(S=>!S.isLandscape);u([...y,...h])})},[o]),o?s.jsxs(Up,{children:[s.jsx(Hp,{children:o.title}),s.jsx(C5,{children:o.credit}),s.jsx(A5,{children:c.map((f,h)=>s.jsx("img",{src:f.src,alt:`${o.title} image ${h+1}`},h))}),s.jsx(Jt,{})]}):s.jsx(Up,{children:s.jsx(Hp,{children:"404 – Gallery Not Found"})})},Lp=x.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem 0.75rem;

  @media (min-width: 480px) {
    padding: 1.5rem 1rem;
  }

  @media (min-width: 768px) {
    max-width: 500px;
    padding: 2rem 1rem;
  }

  @media (min-width: 1024px) {
    max-width: 550px;
  }

  @media (min-width: 1200px) {
    max-width: 600px;
  }

  @media (min-width: 1400px) {
    max-width: 650px;
  }
`,R5=x.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: #1a1a1a;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #333;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

  @media (min-width: 480px) {
    gap: 1.5rem;
    padding: 2rem;
  }

  @media (min-width: 768px) {
    gap: 1.75rem;
    padding: 2.5rem;
  }
`,xa=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  @media (min-width: 480px) {
    gap: 0.5rem;
  }
`,Su=x.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1.5rem;

    > div {
      flex: 1;
    }
  }
`,va=x.label`
  color: #ffffff;
  font-weight: bold;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (min-width: 480px) {
    font-size: 1rem;
    letter-spacing: 1px;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`,Rl=x.input`
  padding: 0.65rem;
  background: #2a2a2a;
  border: 1px solid #444444;
  border-radius: 8px;
  color: #ffffff;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 480px) {
    padding: 0.75rem;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    padding: 0.85rem;
  }

  &:focus {
    outline: none;
    border-color: #dc2626;
    background: #333;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }

  &:hover:not(:focus) {
    border-color: #555;
  }

  &::placeholder {
    color: #888;
  }
`,O5=x.select`
  padding: 0.65rem;
  background: #2a2a2a;
  border: 1px solid #444444;
  border-radius: 8px;
  color: #ffffff;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 480px) {
    padding: 0.75rem;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    padding: 0.85rem;
  }

  &:focus {
    outline: none;
    border-color: #dc2626;
    background: #333;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }

  &:hover:not(:focus) {
    border-color: #555;
  }

  option {
    background: #2a2a2a;
    color: #ffffff;
  }
`,k5=x.textarea`
  padding: 0.65rem;
  background: #2a2a2a;
  border: 1px solid #444444;
  border-radius: 8px;
  color: #ffffff;
  font-size: 0.95rem;
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.2s ease;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 480px) {
    padding: 0.75rem;
    font-size: 1rem;
    min-height: 120px;
  }

  @media (min-width: 768px) {
    padding: 0.85rem;
    min-height: 140px;
  }

  &:focus {
    outline: none;
    border-color: #dc2626;
    background: #333;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }

  &:hover:not(:focus) {
    border-color: #555;
  }

  &::placeholder {
    color: #888;
  }
`,qp=x.button`
  background: linear-gradient(45deg, #dc2626, #991b1b);
  color: #ffffff;
  border: 1px solid #dc2626;
  padding: 0.5rem 0.9rem;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: all 0.3s ease;
  width: 100%;
  align-self: flex-start;

  @media (min-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
    margin-top: 0.75rem;
  }

  @media (min-width: 768px) {
    padding: 0.65rem 1.25rem;
    font-size: 0.85rem;
    width: auto;
    align-self: flex-start;
  }

  @media (min-width: 1024px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }

  &:hover {
    background: linear-gradient(45deg, #991b1b, #dc2626);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #666666;
    cursor: not-allowed;
    transform: none;
  }
`,mi=x.span`
  color: #dc2626;
  margin-left: 4px;
`,M5=x.div`
  background: #1a1a1a;
  border: 1px solid #dc2626;
  color: #ffffff;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 1rem;

  h2 {
    font-size: 1.3rem;
    margin: 0 0 1rem 0;

    @media (min-width: 480px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 0.9rem;
    margin: 0 0 1rem 0;

    @media (min-width: 480px) {
      font-size: 1rem;
    }
  }
`,B5=()=>{const[i,o]=$.useState({name:"",email:"",phone:"",eventType:"",eventDate:"",venue:"",message:""}),[c,u]=$.useState(!1),[f,h]=$.useState(!1),y=g=>{const{name:w,value:_}=g.target;o(R=>({...R,[w]:_}))},S=async()=>{if(!i.name||!i.email||!i.eventType||!i.eventDate||!i.venue||!i.message){alert("Please fill in all required fields");return}h(!0);try{const w=await(await ht("/api/forms/booking",{method:"POST",body:JSON.stringify(i)})).json();w.success?u(!0):alert("Error: "+w.error)}catch(g){console.error("Error submitting form:",g),alert("Failed to send booking request. Please try again.")}h(!1)},b=()=>{u(!1),o({name:"",email:"",phone:"",eventType:"",eventDate:"",venue:"",message:""})};return c?s.jsx(Lp,{children:s.jsxs(M5,{children:[s.jsx("h2",{children:"BOOKING REQUEST SENT"}),s.jsx("p",{children:"Thanks for your booking request! We will get back to you within 24-48 hours with more information."}),s.jsx(qp,{onClick:b,children:"Send another request"})]})}):s.jsx(Lp,{children:s.jsxs(R5,{children:[s.jsxs(Su,{children:[s.jsxs(xa,{children:[s.jsxs(va,{htmlFor:"name",children:["Your Name ",s.jsx(mi,{children:"*"})]}),s.jsx(Rl,{type:"text",id:"name",name:"name",value:i.name,onChange:y,placeholder:"Enter your full name"})]}),s.jsxs(xa,{children:[s.jsxs(va,{htmlFor:"email",children:["Email Address ",s.jsx(mi,{children:"*"})]}),s.jsx(Rl,{type:"email",id:"email",name:"email",value:i.email,onChange:y,placeholder:"your.email@example.com"})]})]}),s.jsxs(Su,{children:[s.jsxs(xa,{children:[s.jsx(va,{htmlFor:"phone",children:"Phone Number"}),s.jsx(Rl,{type:"tel",id:"phone",name:"phone",value:i.phone,onChange:y,placeholder:"+46 70 123 45 67"})]}),s.jsxs(xa,{children:[s.jsxs(va,{htmlFor:"eventType",children:["Event Type ",s.jsx(mi,{children:"*"})]}),s.jsxs(O5,{id:"eventType",name:"eventType",value:i.eventType,onChange:y,children:[s.jsx("option",{value:"",children:"Select event type"}),s.jsx("option",{value:"festival",children:"Festival"}),s.jsx("option",{value:"club",children:"Club/Bar"}),s.jsx("option",{value:"private",children:"Private Event"}),s.jsx("option",{value:"other",children:"Other"})]})]})]}),s.jsxs(Su,{children:[s.jsxs(xa,{children:[s.jsxs(va,{htmlFor:"eventDate",children:["Preferred Event Date ",s.jsx(mi,{children:"*"})]}),s.jsx(Rl,{type:"date",id:"eventDate",name:"eventDate",value:i.eventDate,onChange:y})]}),s.jsxs(xa,{children:[s.jsxs(va,{htmlFor:"venue",children:["City ",s.jsx(mi,{children:"*"})]}),s.jsx(Rl,{type:"text",id:"venue",name:"venue",value:i.venue,onChange:y,placeholder:"City name"})]})]}),s.jsxs(xa,{children:[s.jsxs(va,{htmlFor:"message",children:["Additional Information ",s.jsx(mi,{children:"*"})]}),s.jsx(k5,{id:"message",name:"message",value:i.message,onChange:y,placeholder:"Tell us more about your event, special requirements, or any questions you might have..."})]}),s.jsx(qp,{onClick:S,disabled:f,children:f?"SENDING REQUEST...":"SEND BOOKING REQUEST"})]})})},Gp=x.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem 0.75rem;

  @media (min-width: 480px) {
    padding: 1.5rem 1rem;
  }

  @media (min-width: 768px) {
    max-width: 600px;
    padding: 2rem 1rem;
  }
`,N5=x.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: #1a1a1a;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #333;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

  @media (min-width: 480px) {
    gap: 1.5rem;
    padding: 2rem;
  }

  @media (min-width: 768px) {
    gap: 1.75rem;
    padding: 2.5rem;
  }
`,Ol=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  @media (min-width: 480px) {
    gap: 0.5rem;
  }
`,Yp=x.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1.5rem;

    > div {
      flex: 1;
    }
  }
`,kl=x.label`
  color: #ffffff;
  font-weight: bold;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (min-width: 480px) {
    font-size: 1rem;
    letter-spacing: 1px;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`,wu=x.input`
  padding: 0.65rem;
  background: #2a2a2a;
  border: 1px solid #444444;
  border-radius: 8px;
  color: #ffffff;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 480px) {
    padding: 0.75rem;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    padding: 0.85rem;
  }

  &:focus {
    outline: none;
    border-color: #dc2626;
    background: #333;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }

  &::placeholder {
    color: #888;
  }

  &:hover:not(:focus) {
    border-color: #555;
  }
`,U5=x.select`
  padding: 0.65rem;
  background: #2a2a2a;
  border: 1px solid #444444;
  border-radius: 8px;
  color: #ffffff;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 480px) {
    padding: 0.75rem;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    padding: 0.85rem;
  }

  &:focus {
    outline: none;
    border-color: #dc2626;
    background: #333;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }

  &:hover:not(:focus) {
    border-color: #555;
  }

  option {
    background: #2a2a2a;
    color: #ffffff;
  }
`,H5=x.textarea`
  padding: 0.65rem;
  background: #2a2a2a;
  border: 1px solid #444444;
  border-radius: 8px;
  color: #ffffff;
  font-size: 0.95rem;
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.2s ease;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 480px) {
    padding: 0.75rem;
    font-size: 1rem;
    min-height: 120px;
  }

  @media (min-width: 768px) {
    padding: 0.85rem;
    min-height: 140px;
  }

  &:focus {
    outline: none;
    border-color: #dc2626;
    background: #333;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }

  &:hover:not(:focus) {
    border-color: #555;
  }

  &::placeholder {
    color: #888;
  }
`,Xp=x.button`
  background: linear-gradient(45deg, #dc2626, #991b1b);
  color: #ffffff;
  border: 1px solid #dc2626;
  padding: 0.5rem 0.9rem;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: all 0.3s ease;
  width: 100%;
  align-self: flex-start;

  @media (min-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
    margin-top: 0.75rem;
  }

  @media (min-width: 768px) {
    padding: 0.65rem 1.25rem;
    font-size: 0.85rem;
    width: auto;
    align-self: flex-start;
  }

  @media (min-width: 1024px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }

  &:hover {
    background: linear-gradient(45deg, #991b1b, #dc2626);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #666666;
    cursor: not-allowed;
    transform: none;
  }
`,ju=x.span`
  color: #dc2626;
  margin-left: 4px;
`,L5=x.div`
  background: #1a1a1a;
  border: 1px solid #dc2626;
  color: #ffffff;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 1rem;

  h2 {
    font-size: 1.3rem;
    margin: 0 0 1rem 0;

    @media (min-width: 480px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 0.9rem;
    margin: 0 0 1rem 0;

    @media (min-width: 480px) {
      font-size: 1rem;
    }
  }
`,q5=()=>{const[i,o]=$.useState({name:"",email:"",phone:"",subject:"",message:""}),[c,u]=$.useState(!1),[f,h]=$.useState(!1),y=g=>{const{name:w,value:_}=g.target;o(R=>({...R,[w]:_}))},S=async()=>{if(!i.name||!i.email||!i.message){alert("Please fill in all required fields");return}h(!0);try{const w=await(await ht("/api/forms/contact",{method:"POST",body:JSON.stringify(i)})).json();w.success?u(!0):alert("Error: "+w.error)}catch(g){console.error("Error submitting contact form:",g),alert("Failed to send message. Please try again.")}h(!1)},b=()=>{u(!1),o({name:"",email:"",phone:"",subject:"",message:""})};return c?s.jsx(Gp,{children:s.jsxs(L5,{children:[s.jsx("h2",{children:"MESSAGE SENT"}),s.jsx("p",{children:"Thank you for your message! We'll get back to you as soon as possible."}),s.jsx(Xp,{onClick:b,children:"SEND ANOTHER MESSAGE"})]})}):s.jsx(Gp,{children:s.jsxs(N5,{children:[s.jsxs(Yp,{children:[s.jsxs(Ol,{children:[s.jsxs(kl,{htmlFor:"contact-name",children:["Your Name ",s.jsx(ju,{children:"*"})]}),s.jsx(wu,{type:"text",id:"contact-name",name:"name",value:i.name,onChange:y,placeholder:"Enter your full name"})]}),s.jsxs(Ol,{children:[s.jsxs(kl,{htmlFor:"contact-email",children:["Email Address ",s.jsx(ju,{children:"*"})]}),s.jsx(wu,{type:"email",id:"contact-email",name:"email",value:i.email,onChange:y,placeholder:"your.email@example.com"})]})]}),s.jsxs(Yp,{children:[s.jsxs(Ol,{children:[s.jsx(kl,{htmlFor:"contact-phone",children:"Phone Number"}),s.jsx(wu,{type:"tel",id:"contact-phone",name:"phone",value:i.phone,onChange:y,placeholder:"+46 70 123 45 67"})]}),s.jsxs(Ol,{children:[s.jsx(kl,{htmlFor:"contact-subject",children:"Subject"}),s.jsxs(U5,{id:"contact-subject",name:"subject",value:i.subject,onChange:y,children:[s.jsx("option",{value:"",children:"Select a subject"}),s.jsx("option",{value:"general",children:"General Inquiry"}),s.jsx("option",{value:"collaboration",children:"Collaboration"}),s.jsx("option",{value:"press",children:"Press & Media"}),s.jsx("option",{value:"technical",children:"Technical Support"}),s.jsx("option",{value:"other",children:"Other"})]})]})]}),s.jsxs(Ol,{children:[s.jsxs(kl,{htmlFor:"contact-message",children:["Message ",s.jsx(ju,{children:"*"})]}),s.jsx(H5,{id:"contact-message",name:"message",value:i.message,onChange:y,placeholder:"Write your message here..."})]}),s.jsx(Xp,{onClick:S,disabled:f,children:f?"SENDING MESSAGE...":"SEND MESSAGE"})]})})},G5=x.div`
  min-height: 100vh;
  padding: 1rem;
  max-width: 1600px;
  margin: 0 auto;
  
  @media (min-width: 480px) {
    padding: 1.5rem;
  }
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
  
  @media (min-width: 1024px) {
    padding: 3rem;
  }
  
  @media (min-width: 1400px) {
    padding: 4rem;
  }
`,Y5=x.div`
  text-align: center;
  margin-bottom: 1.5rem;
  padding: 0;
  
  @media (min-width: 480px) {
    margin-bottom: 2rem;
  }
  
  @media (min-width: 768px) {
    margin-bottom: 2.5rem;
  }
  
  @media (min-width: 1024px) {
    margin-bottom: 3rem;
  }
`,X5=x.h2`
  color: ${d.colors.secondaryText};
  font-size: 0.9rem;
  font-style: italic;
  margin: 0.5rem 0 1.5rem 0;
  padding: 0 0.5rem;
  font-weight: 300;
  line-height: 1.5;
  
  @media (min-width: 480px) {
    font-size: 1rem;
    margin: 0.75rem 0 1.75rem 0;
    padding: 0 1rem;
  }
  
  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin: 1rem 0 2rem 0;
    padding: 0;
  }
  
  @media (min-width: 1024px) {
    font-size: 1.2rem;
    margin: 1.5rem 0 2.5rem 0;
  }
`,Q5=x.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  gap: 0;
  
  @media (min-width: 480px) {
    margin-bottom: 2rem;
  }
  
  @media (min-width: 768px) {
    margin-bottom: 2.5rem;
  }
  
  @media (min-width: 1024px) {
    margin-bottom: 3rem;
  }
`,Qp=x.button`
  background: ${i=>i.$active?"linear-gradient(45deg, ${theme.colors.buttonPrimary}, ${theme.colors.buttonPrimaryHover})":d.colors.charcoal};
  color: ${i=>i.$active?d.colors.primaryText:d.colors.secondaryText};
  border: 1px solid ${i=>i.$active?d.colors.buttonPrimary:d.colors.darkCharcoal};
  padding: 0.5rem 0.9rem;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:first-child {
    border-radius: 6px 0 0 6px;
    border-right: none;
  }
  
  &:last-child {
    border-radius: 0 6px 6px 0;
    border-left: none;
  }

  @media (min-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    padding: 0.65rem 1.25rem;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
  }
  
  @media (min-width: 1024px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
    letter-spacing: 0.75px;
  }

  &:hover {
    background: ${i=>i.$active?"linear-gradient(45deg, ${theme.colors.buttonPrimaryHover}, ${theme.colors.buttonPrimary})":"#444444"};
    color: ${d.colors.primaryText};
    border-color: ${i=>i.$active?d.colors.buttonPrimary:d.colors.mediumGray};
  }
`,Z5=x.p`
  text-align: center;
  color: ${d.colors.mediumGray};
  font-size: 0.8rem;
  margin: 0 0 1rem 0;
  line-height: 1.4;
  
  @media (min-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1.25rem;
  }
  
  @media (min-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }
  
  @media (min-width: 1024px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`,V5=()=>{const[i,o]=$.useState("contact"),c=()=>i==="booking"?"Ready to bring the darkness to your event?":"Get in touch with us!",u=()=>i==="booking"?"Fill out the booking form below to request Morbid Gene for your event.":"Send us a message for general inquiries, collaboration, or any other questions.";return s.jsxs(G5,{children:[s.jsxs(Y5,{children:[s.jsx(X5,{children:c()}),s.jsxs(Q5,{children:[s.jsx(Qp,{$active:i==="contact",onClick:()=>o("contact"),children:"General Contact"}),s.jsx(Qp,{$active:i==="booking",onClick:()=>o("booking"),children:"Booking Request"})]}),s.jsx(Z5,{children:u()})]}),i==="booking"?s.jsx(B5,{}):s.jsx(q5,{})]})},n1=x.p`
  color: ${d.colors.mutedText};
  text-align: center;
  margin-bottom: ${d.spacing["2xl"]};
  font-size: ${d.typography.sizes.sm};

  @media (max-width: ${d.breakpoints.mobile}) {
    margin-bottom: ${d.spacing.xl};
    font-size: ${d.typography.sizes.xs};
  }
`,mt=x.section`
  margin-bottom: ${d.spacing["2xl"]};

  @media (max-width: ${d.breakpoints.mobile}) {
    margin-bottom: ${d.spacing.xl};
  }
`,_e=x.p`
  color: ${d.colors.secondaryText};
  line-height: 1.8;
  margin-bottom: ${d.spacing.base};
  font-size: ${d.typography.sizes.base};

  @media (max-width: ${d.breakpoints.mobile}) {
    line-height: 1.6;
    font-size: ${d.typography.sizes.sm};
    margin-bottom: ${d.spacing.md};
  }
`,Gt=x.ul`
  color: ${d.colors.secondaryText};
  line-height: 1.8;
  margin-left: ${d.spacing.xl};
  margin-bottom: ${d.spacing.base};
  font-size: ${d.typography.sizes.base};
  
  li {
    margin-bottom: ${d.spacing.sm};
  }

  a {
    color: ${d.colors.red};
    text-decoration: underline;
    transition: color ${d.transitions.normal};

    &:hover {
      color: ${d.colors.darkRed};
    }
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    line-height: 1.6;
    font-size: ${d.typography.sizes.sm};
    margin-left: ${d.spacing.lg};
    margin-bottom: ${d.spacing.md};

    li {
      margin-bottom: ${d.spacing.xs};
    }
  }
`,a1=x.div`
  background: ${d.colors.sectionBg};
  border: 1px solid ${d.colors.borderLight};
  border-radius: 8px;
  padding: ${d.spacing.xl};
  margin: ${d.spacing["2xl"]} 0;

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: ${d.spacing.base};
    margin: ${d.spacing.xl} 0;
  }
`,Ml=x.h3`
  color: ${d.colors.primaryText};
  font-size: ${d.typography.sizes.xl};
  font-weight: ${d.typography.weights.semibold};
  margin-top: ${d.spacing.xl};
  margin-bottom: ${d.spacing.md};
  font-family: ${d.typography.fontFamily};

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: ${d.typography.sizes.lg};
    margin-top: ${d.spacing.base};
    margin-bottom: ${d.spacing.sm};
  }
`,K5=()=>{const i=ja(),o=()=>{i(-1)};return s.jsxs(on,{$maxWidth:"sm",$minHeight:"viewport",$padding:"lg",children:[s.jsx(t1,{onClick:o,children:"← Go Back"}),s.jsx(Eo,{$size:"lg",$align:"center",$style:{marginBottom:"1rem"},children:"Terms of Use"}),s.jsx(n1,{children:"Last updated: August 28, 2025"}),s.jsxs(mt,{children:[s.jsx(at,{$border:!0,children:"1. Acceptance of Terms"}),s.jsx(_e,{children:"By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement."})]}),s.jsxs(mt,{children:[s.jsx(at,{$border:!0,children:"2. Use License"}),s.jsx(_e,{children:"Permission is granted to temporarily download one copy of the materials on Morbid Gene's website for personal, non-commercial transitory viewing only."}),s.jsxs(Gt,{children:[s.jsx("li",{children:"This is the grant of a license, not a transfer of title"}),s.jsx("li",{children:"This license shall automatically terminate if you violate any of these restrictions"}),s.jsx("li",{children:"Morbid Gene may terminate this license at any time"})]})]}),s.jsxs(mt,{children:[s.jsx(at,{$border:!0,children:"3. Product Purchases and Third-Party Terms"}),s.jsx(_e,{children:"All merchandise purchases are processed through our partner Spreadshirt. When making a purchase, you will be redirected to Spreadshirt's secure checkout system."}),s.jsx(_e,{children:"By purchasing products through our store, you also agree to Spreadshirt's terms and conditions:"}),s.jsxs(Gt,{children:[s.jsx("li",{children:s.jsx("a",{href:"https://www.spreadshirt.se/allmaenna-villkoren-C10183",target:"_blank",rel:"noopener noreferrer",children:"Spreadshirt General Terms and Conditions"})}),s.jsx("li",{children:s.jsx("a",{href:"https://www.spreadshirt.se/allm%C3%A4nna-villkor-kunder-C2377",target:"_blank",rel:"noopener noreferrer",children:"Spreadshirt Customer Terms and Conditions"})})]}),s.jsxs(_e,{children:[s.jsx("strong",{children:"Note:"})," These are Spreadshirt's terms and conditions in Swedish. They govern all aspects of product ordering, payment, shipping, returns, and customer service for merchandise purchases."]})]}),s.jsxs(mt,{children:[s.jsx(at,{$border:!0,children:"4. User Accounts and Data Retention"}),s.jsx(_e,{children:"If you create an account on our website, the following terms apply:"}),s.jsxs(Gt,{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Account Security:"})," You are responsible for maintaining the confidentiality of your account and password"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Inactive Account Deletion:"})," Accounts that remain inactive (no login) for 30 months will be automatically deleted from our system"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Data Deletion:"})," When an account is deleted, all associated personal data is permanently removed from our database"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Account Recreation:"})," After deletion, you may create a new account using the same email address if desired"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"No Recovery:"})," Once deleted, inactive account data cannot be recovered"]})]}),s.jsx(_e,{children:"This policy ensures compliance with data protection regulations and helps maintain system security and performance."})]}),s.jsxs(mt,{children:[s.jsx(at,{$border:!0,children:"5. Privacy"}),s.jsx(_e,{children:"Your use of our website is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices."})]}),s.jsxs(a1,{children:[s.jsx(at,{style:{fontSize:"1.2rem",marginBottom:"0.75rem"},children:"Contact Us"}),s.jsx(_e,{style:{marginBottom:"0.5rem"},children:"If you have any questions about these Terms of Use, please contact us at:"}),s.jsxs(_e,{style:{marginBottom:"0"},children:["Email: morbidgenemusic@gmail.com",s.jsx("br",{}),"Website: morbidgeneofficial.com"]})]}),s.jsx(Jt,{})]})},P5=()=>{const i=ja(),o=()=>{i(-1)};return s.jsxs(on,{$maxWidth:"sm",$minHeight:"viewport",$padding:"lg",children:[s.jsx(t1,{onClick:o,children:"← Go Back"}),s.jsx(Eo,{$size:"lg",$align:"center",style:{marginBottom:"1rem"},children:"Privacy Policy"}),s.jsx(n1,{children:"Last updated: August 28, 2025"}),s.jsxs(mt,{children:[s.jsx(at,{$border:!0,children:"1. Introduction"}),s.jsx(_e,{children:'Morbid Gene ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our website and services.'})]}),s.jsxs(mt,{children:[s.jsx(at,{$border:!0,children:"2. Information We Collect"}),s.jsx(Ml,{children:"Information You Provide"}),s.jsxs(Gt,{children:[s.jsx("li",{children:"Contact information (email, name) when you use our contact form"}),s.jsx("li",{children:"Information provided when making purchases through Spreadshirt"}),s.jsx("li",{children:"Communications you send to us"})]}),s.jsx(Ml,{children:"Information Automatically Collected"}),s.jsxs(Gt,{children:[s.jsx("li",{children:"Browser type and version"}),s.jsx("li",{children:"IP address"}),s.jsx("li",{children:"Pages you visit on our site"}),s.jsx("li",{children:"Time and date of your visit"})]})]}),s.jsxs(mt,{children:[s.jsx(at,{$border:!0,children:"3. How We Use Your Information"}),s.jsx(_e,{children:"We use the information we collect to:"}),s.jsxs(Gt,{children:[s.jsx("li",{children:"Process and fulfill merchandise orders through Spreadshirt"}),s.jsx("li",{children:"Respond to your inquiries and support requests"}),s.jsx("li",{children:"Send you updates about your orders"}),s.jsx("li",{children:"Improve our website and services"}),s.jsx("li",{children:"Comply with legal obligations"})]})]}),s.jsxs(mt,{children:[s.jsx(at,{$border:!0,children:"4. Information Sharing"}),s.jsx(_e,{children:"We do not sell, trade, or rent your personal information to third parties. We may share your information with:"}),s.jsxs(Gt,{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Spreadshirt:"})," To process merchandise orders and handle shipping. When you make a purchase, your information is shared with Spreadshirt according to their privacy policy."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Service Providers:"})," Who help us operate our website and business"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Legal Requirements:"})," When required by law or to protect our rights"]})]}),s.jsx(_e,{children:"For merchandise purchases, please also review:"}),s.jsxs(Gt,{children:[s.jsx("li",{children:s.jsx("a",{href:"https://www.spreadshirt.se/allmaenna-villkoren-C10183",target:"_blank",rel:"noopener noreferrer",children:"Spreadshirt General Terms and Conditions (Swedish)"})}),s.jsx("li",{children:s.jsx("a",{href:"https://www.spreadshirt.se/allm%C3%A4nna-villkor-kunder-C2377",target:"_blank",rel:"noopener noreferrer",children:"Spreadshirt Customer Terms and Conditions (Swedish)"})})]})]}),s.jsxs(mt,{children:[s.jsx(at,{$border:!0,children:"5. Cookies and Local Storage"}),s.jsx(_e,{children:"Our website uses cookies and local storage to enhance your browsing experience and provide essential functionality."}),s.jsx(Ml,{children:"Essential Cookies"}),s.jsx(_e,{children:"These cookies are necessary for the website to function properly:"}),s.jsxs(Gt,{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Authentication Cookie:"})," Keeps you logged in securely using httpOnly cookies that cannot be accessed by JavaScript"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Shopping Cart:"})," Stores items in your cart locally on your device"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Cookie Consent:"})," Remembers your cookie preferences"]})]}),s.jsx(Ml,{children:"Data Storage"}),s.jsx(_e,{children:"We use the following storage methods:"}),s.jsxs(Gt,{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"HttpOnly Cookies:"})," For secure authentication (cannot be accessed by scripts)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Local Storage:"})," For shopping cart items and user preferences"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Session Storage:"})," For temporary data during your browsing session"]})]}),s.jsx(_e,{children:"You can control cookies through your browser settings. However, disabling essential cookies will prevent you from logging in or using the shopping cart."})]}),s.jsxs(mt,{children:[s.jsx(at,{$border:!0,children:"6. Data Security"}),s.jsx(_e,{children:"We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."}),s.jsx(_e,{children:"All payment processing is handled by Spreadshirt's secure payment system. We do not store credit card information on our servers."})]}),s.jsxs(mt,{children:[s.jsx(at,{$border:!0,children:"7. Data Retention"}),s.jsx(_e,{children:"We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy."}),s.jsx(Ml,{children:"Account Data Retention"}),s.jsx(_e,{children:"For user accounts created on our website:"}),s.jsxs(Gt,{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Active Accounts:"})," We retain your account data as long as your account remains active"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Inactive Accounts:"})," Accounts that have been inactive (no login) for 30 months will be automatically deleted from our system"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Account Recovery:"})," After deletion, you may create a new account using the same email address if desired"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Data Deletion:"})," When an account is deleted, all associated personal data (name, email, preferences, favorites) is permanently removed from our database"]})]}),s.jsx(_e,{children:"This automated cleanup process helps us comply with data minimization principles and ensures we only retain data that serves a legitimate purpose."})]}),s.jsxs(mt,{children:[s.jsx(at,{$border:!0,children:"8. Your Rights"}),s.jsx(_e,{children:"Depending on your location, you may have certain rights regarding your personal information, including:"}),s.jsxs(Gt,{children:[s.jsx("li",{children:"The right to access your personal information"}),s.jsx("li",{children:"The right to correct inaccurate information"}),s.jsx("li",{children:"The right to request deletion of your information"}),s.jsx("li",{children:"The right to object to processing of your information"})]})]}),s.jsxs(mt,{children:[s.jsx(at,{$border:!0,children:"9. Children's Privacy"}),s.jsx(_e,{children:"Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13."})]}),s.jsxs(mt,{children:[s.jsx(at,{$border:!0,children:"10. Changes to This Policy"}),s.jsx(_e,{children:'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.'})]}),s.jsxs(a1,{children:[s.jsx(at,{style:{fontSize:"1.2rem",marginBottom:"0.75rem"},children:"Contact Us"}),s.jsx(_e,{style:{marginBottom:"0.5rem"},children:"If you have any questions about this Privacy Policy, please contact us at:"}),s.jsxs(_e,{style:{marginBottom:"0"},children:["Email: morbidgenemusic@gmail.com",s.jsx("br",{}),"Website: morbidgeneofficial.com"]})]}),s.jsx(Jt,{})]})},J5=x.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
`,I5=x.div`
  text-align: center;
  margin-bottom: 2rem;
  
  h1 {
    color: ${d.colors.primaryText};
    font-size: 1.5rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
    
    @media (min-width: 480px) {
      font-size: 1.75rem;
      letter-spacing: 1.5px;
    }
    
    @media (min-width: 768px) {
      font-size: 2rem;
      letter-spacing: 1.5px;
    }
  }
  
  p {
    color: ${d.colors.secondaryText};
    font-style: italic;
    font-size: 0.9rem;
    font-weight: 300;
    
    @media (min-width: 480px) {
      font-size: 1rem;
    }
    
    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
  }
  
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`,Zp=x.div`
  background: ${d.colors.sectionBg};
  border: 1px solid ${d.colors.charcoal};
  padding: 1rem;
  margin-bottom: 1rem;
  
  @media (min-width: 480px) {
    padding: 1.5rem;
  }
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
`,F5=x.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  
  @media (min-width: 480px) {
    gap: 1.25rem;
  }
`,hi=x.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`,Vp=x.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;
    
    > div {
      flex: 1;
    }
  }
`,pi=x.label`
  color: ${d.colors.primaryText};
  font-weight: bold;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (min-width: 480px) {
    font-size: 0.9rem;
  }
`,gi=x.div`
  position: relative;
`,yi=x.input`
  padding: 0.75rem;
  padding-right: ${i=>i.$hasIcon?"3rem":"0.75rem"};
  background: ${d.colors.inputBg};
  border: 2px solid #444444;
  border-radius: 4px;
  color: ${d.colors.primaryText};
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${d.colors.mediumGray};
    font-size: 0.875rem;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  &:focus {
    outline: none;
    border-color: ${d.colors.buttonPrimary};
    box-shadow: 0 0 10px rgba(220, 38, 38, 0.3);
  }
  
  @media (min-width: 480px) {
    padding: 0.85rem;
    padding-right: ${i=>i.$hasIcon?"3.2rem":"0.85rem"};
  }
`,zu=x.button`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: ${i=>i.$isShowing?d.colors.buttonPrimary:d.colors.mediumGray};
  font-size: 1.1rem;
  padding: 0.5rem;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
  border-radius: 4px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
  
  &:focus {
    outline: 2px solid ${d.colors.buttonPrimary};
    outline-offset: 2px;
  }
  
  @media (min-width: 480px) {
    right: 0.65rem;
  }
`,W5=x.button`
  background-color: ${d.colors.buttonPrimary};
  color: ${d.colors.primaryText};
  border: none;
  padding: 0.75rem 1.25rem;
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: background-color 0.2s;
  width: auto;
  margin: 0;

  &:hover:not(:disabled) {
    background-color: ${d.colors.buttonPrimaryHover};
  }

  &:disabled {
    background-color: ${d.colors.buttonDisabled};
    cursor: not-allowed;
  }
  
  @media (min-width: 480px) {
    padding: 0.85rem 1.5rem;
    font-size: 0.95rem;
  }
`,e6=x.div`
  color: ${d.colors.primaryText};
  background: ${d.colors.buttonPrimary};
  border: 1px solid #991b1b;
  padding: 0.75rem;
  border-radius: 4px;
  text-align: center;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`,bi=x.span`
  color: ${d.colors.buttonPrimary};
  margin-left: 4px;
  font-weight: bold;
`,xi=x.div`
  color: ${d.colors.buttonPrimary};
  font-size: 0.8rem;
  margin-top: 0.25rem;
  margin-left: 0.25rem;
`,t6=x.div`
  display: flex;
  justify-content: center;
  margin: 0;
  gap: 0;
`,Kp=x.button`
  background-color: ${i=>i.$active?d.colors.buttonPrimary:d.colors.charcoal};
  color: ${i=>i.$active?d.colors.primaryText:d.colors.secondaryText};
  border: 1px solid ${i=>i.$active?d.colors.buttonPrimary:d.colors.darkCharcoal};
  padding: 0.6rem 1.2rem;
  font-size: 0.85rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:first-child {
    border-right: none;
  }
  
  &:last-child {
    border-left: none;
  }

  &:hover {
    background-color: ${i=>i.$active?d.colors.buttonPrimaryHover:"#444444"};
    color: ${d.colors.primaryText};
    border-color: ${i=>i.$active?d.colors.buttonPrimary:d.colors.mediumGray};
  }
`,n6=()=>{const[i,o]=$.useState(!0),[c,u]=$.useState(""),[f,h]=$.useState(""),[y,S]=$.useState(""),[b,g]=$.useState(""),[w,_]=$.useState(!1),[R,M]=$.useState(!1),[X,Y]=$.useState(!1),[K,k]=$.useState(""),[Q,Z]=$.useState({}),{login:q,register:O}=_i(),U=ja(),V=()=>{const ne={};return i?(f.trim()||(ne.email="Email is required"),y.trim()||(ne.password="Password is required")):(c.trim()||(ne.name="Full name is required"),f.trim()||(ne.email="Email is required"),y.trim()||(ne.password="Password is required"),b.trim()||(ne.confirmPassword="Please confirm your password"),y&&y.length<6&&(ne.password="Password must be at least 6 characters long"),y&&b&&y!==b&&(ne.confirmPassword="Passwords do not match")),Z(ne),Object.keys(ne).length===0},te=async ne=>{if(ne.preventDefault(),k(""),Z({}),!!V()){if(Y(!0),i){const Ce=await q(f,y);Ce.success?U("/merch"):k(Ce.error)}else{const Ce=await O(c,f,y);Ce.success?U("/merch"):k(Ce.error)}Y(!1)}},se=()=>{o(!i),k(""),Z({}),u(""),h(""),S(""),g(""),_(!1),M(!1)};return s.jsx(on,{$maxWidth:"lg",$variant:"form",$padding:"md",children:s.jsxs(J5,{children:[s.jsxs(I5,{children:[s.jsx("h1",{children:i?"Login":"Register"}),s.jsx("p",{children:i?"Welcome back to Morbid Gene":"Join the Morbid Gene family"})]}),s.jsx(Zp,{children:s.jsxs(t6,{children:[s.jsx(Kp,{type:"button",$active:i,onClick:()=>!i&&se(),children:"Login"}),s.jsx(Kp,{type:"button",$active:!i,onClick:()=>i&&se(),children:"Register"})]})}),s.jsxs(Zp,{children:[K&&s.jsx(e6,{children:K}),s.jsxs(F5,{onSubmit:te,children:[i?s.jsxs(s.Fragment,{children:[s.jsxs(hi,{children:[s.jsxs(pi,{htmlFor:"login-email",children:["Email Address",s.jsx(bi,{children:"*"})]}),s.jsx(gi,{children:s.jsx(yi,{type:"email",id:"login-email",placeholder:"Enter your email",value:f,onChange:ne=>h(ne.target.value),required:!0})}),Q.email&&s.jsx(xi,{children:Q.email})]}),s.jsxs(hi,{children:[s.jsxs(pi,{htmlFor:"login-password",children:["Password",s.jsx(bi,{children:"*"})]}),s.jsxs(gi,{children:[s.jsx(yi,{type:w?"text":"password",id:"login-password",placeholder:"Enter your password",value:y,onChange:ne=>S(ne.target.value),$hasIcon:!0,required:!0}),s.jsx(zu,{type:"button",onClick:()=>_(!w),"aria-label":w?"Hide password":"Show password",$isShowing:w,children:w?s.jsx(uu,{}):s.jsx(du,{})})]}),Q.password&&s.jsx(xi,{children:Q.password})]})]}):s.jsxs(s.Fragment,{children:[s.jsxs(Vp,{children:[s.jsxs(hi,{children:[s.jsxs(pi,{htmlFor:"register-name",children:["Full Name",s.jsx(bi,{children:"*"})]}),s.jsx(gi,{children:s.jsx(yi,{type:"text",id:"register-name",placeholder:"Enter your full name",value:c,onChange:ne=>u(ne.target.value),required:!0})}),Q.name&&s.jsx(xi,{children:Q.name})]}),s.jsxs(hi,{children:[s.jsxs(pi,{htmlFor:"register-email",children:["Email Address",s.jsx(bi,{children:"*"})]}),s.jsx(gi,{children:s.jsx(yi,{type:"email",id:"register-email",placeholder:"Enter your email",value:f,onChange:ne=>h(ne.target.value),required:!0})}),Q.email&&s.jsx(xi,{children:Q.email})]})]}),s.jsxs(Vp,{children:[s.jsxs(hi,{children:[s.jsxs(pi,{htmlFor:"register-password",children:["Password",s.jsx(bi,{children:"*"})]}),s.jsxs(gi,{children:[s.jsx(yi,{type:w?"text":"password",id:"register-password",placeholder:"Create a password (min 6 characters)",value:y,onChange:ne=>S(ne.target.value),$hasIcon:!0,required:!0}),s.jsx(zu,{type:"button",onClick:()=>_(!w),"aria-label":w?"Hide password":"Show password",$isShowing:w,children:w?s.jsx(uu,{}):s.jsx(du,{})})]}),Q.password&&s.jsx(xi,{children:Q.password})]}),s.jsxs(hi,{children:[s.jsxs(pi,{htmlFor:"confirm-password",children:["Confirm Password",s.jsx(bi,{children:"*"})]}),s.jsxs(gi,{children:[s.jsx(yi,{type:R?"text":"password",id:"confirm-password",placeholder:"Confirm your password",value:b,onChange:ne=>g(ne.target.value),$hasIcon:!0,required:!0}),s.jsx(zu,{type:"button",onClick:()=>M(!R),"aria-label":R?"Hide password":"Show password",$isShowing:R,children:R?s.jsx(uu,{}):s.jsx(du,{})})]}),Q.confirmPassword&&s.jsx(xi,{children:Q.confirmPassword})]})]})]}),s.jsx(W5,{type:"submit",disabled:X,children:X?i?"Logging in...":"Creating account...":i?"Login":"Create Account"})]})]})]})})},a6=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`,i6=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  
  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`,Pp=x(it)`
  text-decoration: none;
`,l6=()=>{const{isAuthenticated:i,favorites:o,user:c,loading:u}=_i();return u?s.jsxs(on,{$maxWidth:"lg",$minHeight:"viewport",children:[s.jsx(Eo,{$size:"lg",$uppercase:!0,$spacing:"wider",children:"My Favorites"}),s.jsx("p",{style:{color:"${theme.colors.mediumGray}"},children:"Loading..."})]}):i?s.jsxs(on,{$maxWidth:"lg",$minHeight:"viewport",children:[o.length>0&&s.jsx(a6,{children:s.jsx("div",{children:s.jsx(Eo,{$size:"lg",$uppercase:!0,$spacing:"wider",children:"My Favorites"})})}),o.length===0?s.jsx(Hu,{icon:"💔",iconSize:"large",title:"No favorites yet",message:"Start browsing our merch and click the heart icon to add products to your favorites!",actions:s.jsx(Pp,{to:"/merch",children:s.jsx(Op,{$variant:"primary",$uppercase:!0,children:"Browse Merch"})})}):s.jsx(i6,{children:o.map(f=>s.jsx(V0,{item:f},f.sellableId))}),s.jsx(Jt,{})]}):s.jsxs(on,{$maxWidth:"lg",$minHeight:"viewport",children:[s.jsx(Hu,{icon:"💔",iconSize:"large",title:"Login Required",message:"You need to be logged in to view your favorite products.",actions:s.jsx(Pp,{to:"/login",children:s.jsx(Op,{$variant:"primary",$uppercase:!0,children:"Login"})})}),s.jsx(Jt,{})]})},r6=x.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (min-width: 480px) {
    padding: 2.5rem;
  }
  
  @media (min-width: 768px) {
    padding: 3rem;
  }
`,o6=x.div`
  text-align: center;
  margin-bottom: 3rem;
  
  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
  }
  
  h1 {
    color: ${d.colors.primaryText};
    font-size: 1.5rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
    
    @media (min-width: 480px) {
      font-size: 1.75rem;
    }
    
    @media (min-width: 768px) {
      font-size: 1.75rem;
    }
  }
  
  p {
    color: ${d.colors.secondaryText};
    font-style: italic;
    font-size: 1rem;
    font-weight: 300;
    
    @media (min-width: 480px) {
      font-size: 1.1rem;
    }
  }
`,Jp=x.div`
  background: ${d.colors.sectionBg};
  border: 1px solid ${d.colors.charcoal};
  padding: 1.5rem;
  margin-bottom: 2rem;
  
  h2 {
    color: ${d.colors.primaryText};
    font-size: 1.3rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0 0 1.5rem 0;
    border-bottom: 1px solid ${d.colors.charcoal};
    padding-bottom: 0.5rem;
  }
  
  @media (min-width: 480px) {
    padding: 2.5rem;
  }
`,s6=x.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,c6=x.div`
  display: grid;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`,Bl=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Nl=x.span`
  color: ${d.colors.mediumGray};
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
`,Ul=x.span`
  color: ${d.colors.primaryText};
  font-size: 1rem;
  word-break: break-all;
  
  &.password {
    font-family: monospace;
    letter-spacing: 2px;
  }
`,$u=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Tu=x.label`
  color: ${d.colors.primaryText};
  font-weight: bold;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (min-width: 480px) {
    font-size: 1rem;
    letter-spacing: 1px;
  }
`,_u=x.input`
  padding: 0.75rem;
  background: ${d.colors.inputBg};
  border: 2px solid #444444;
  color: ${d.colors.primaryText};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${d.colors.buttonPrimary};
    box-shadow: 0 0 10px rgba(220, 38, 38, 0.3);
  }
  
  &::placeholder {
    color: ${d.colors.mediumGray};
    font-size: 0.875rem;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  
  @media (min-width: 480px) {
    padding: 0.85rem;
  }
`,u6=x.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  margin-top: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`,d6=x.button`
  background-color: ${d.colors.buttonPrimary};
  color: ${d.colors.primaryText};
  border: none;
  padding: 0.75rem 1.25rem;
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover:not(:disabled) {
    background-color: ${d.colors.buttonPrimaryHover};
  }
  
  &:disabled {
    background-color: ${d.colors.buttonDisabled};
    cursor: not-allowed;
  }
  
  @media (min-width: 480px) {
    padding: 0.85rem 1.5rem;
    font-size: 0.95rem;
  }
`,f6=x.div`
  border: 1px solid ${d.colors.buttonPrimary};
  padding: 1.5rem;
  background: rgba(220, 38, 38, 0.03);
  
  h2 {
    color: ${d.colors.buttonPrimary};
    border-bottom-color: ${d.colors.buttonPrimary};
  }
  
  p {
    color: ${d.colors.secondaryText};
    font-size: 1rem;
    margin: 0 0 1.5rem 0;
    line-height: 1.5;
  }
  
  @media (min-width: 480px) {
    padding: 2.5rem;
  }
`,m6=x.button`
  background-color: ${d.colors.buttonPrimary};
  color: ${d.colors.primaryText};
  border: none;
  padding: 0.75rem 1.25rem;
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${d.colors.buttonPrimaryHover};
  }
  
  @media (min-width: 480px) {
    padding: 0.85rem 1.5rem;
    font-size: 0.95rem;
  }
`,h6=x.div`
  color: ${d.colors.primaryText};
  background: ${d.colors.buttonPrimary};
  border: 1px solid #991b1b;
  padding: 0.75rem;
  text-align: center;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`,p6=x.div`
  color: ${d.colors.primaryText};
  background: ${d.colors.buttonPrimary};
  border: 1px solid #991b1b;
  padding: 0.75rem;
  text-align: center;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`,Ip=x.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,Fp=x.div`
  background: ${d.colors.sectionBg};
  border: 1px solid ${d.colors.charcoal};
  padding: 1.5rem;
  max-width: 400px;
  text-align: center;
  
  h3 {
    color: ${d.colors.primaryText};
    margin: 0 0 1rem 0;
    font-size: 1.2rem;
  }
  
  p {
    color: ${d.colors.secondaryText};
    margin: 0 0 1.5rem 0;
    font-size: 0.95rem;
  }
`,g6=x.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`,y6=x.button`
  background-color: ${d.colors.buttonPrimary};
  color: ${d.colors.primaryText};
  border: none;
  padding: 0.6rem 1rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${d.colors.buttonPrimaryHover};
  }
`,b6=x.button`
  background-color: ${d.colors.charcoal};
  color: ${d.colors.primaryText};
  border: none;
  padding: 0.6rem 1rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${d.colors.darkCharcoal};
  }
`,x6=()=>{const{user:i,logout:o}=_i(),c=ja(),[u,f]=$.useState(!1),[h,y]=$.useState(""),[S,b]=$.useState(""),[g,w]=$.useState(!1),[_,R]=$.useState(!1),[M,X]=$.useState({currentPassword:"",newPassword:"",confirmPassword:""}),Y=q=>{X({...M,[q.target.name]:q.target.value})},K=async q=>{if(q.preventDefault(),b(""),y(""),M.newPassword!==M.confirmPassword){b("New passwords do not match");return}if(M.newPassword.length<6){b("New password must be at least 6 characters long");return}f(!0);try{const O=await ht("/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({currentPassword:M.currentPassword,newPassword:M.newPassword})}),U=await O.json();O.ok?(y("Password changed successfully"),X({currentPassword:"",newPassword:"",confirmPassword:""})):b(U.message||"Failed to change password")}catch(O){console.error("Change password error:",O),b("Network error")}f(!1)},k=()=>{w(!0)},Q=async()=>{try{const q=await ht("/auth/delete-account",{method:"DELETE"});if(q.ok)R(!0),setTimeout(()=>{o(),c("/")},2e3);else{const O=await q.json();b(O.message||"Failed to delete account")}}catch(q){console.error("Delete account error:",q),b("Network error")}w(!1)},Z=()=>{w(!1)};return s.jsx(on,{$maxWidth:"lg",$minHeight:"viewport",$padding:"md",children:s.jsxs(r6,{children:[s.jsxs(o6,{children:[s.jsx("h1",{children:"Account Settings"}),s.jsx("p",{children:"Manage your account preferences and security"})]}),s.jsxs(Jp,{children:[s.jsx("h2",{children:"Account Information"}),s.jsxs(c6,{children:[s.jsxs(Bl,{children:[s.jsx(Nl,{children:"Name"}),s.jsx(Ul,{children:i?.name||"Not set"})]}),s.jsxs(Bl,{children:[s.jsx(Nl,{children:"Email"}),s.jsx(Ul,{children:i?.email||"Not set"})]}),s.jsxs(Bl,{children:[s.jsx(Nl,{children:"Password"}),s.jsx(Ul,{className:"password",children:"Protected"})]}),s.jsxs(Bl,{children:[s.jsx(Nl,{children:"Account Created"}),s.jsx(Ul,{children:i?.createdAt?new Date(i.createdAt).toLocaleDateString():"Unknown"})]}),s.jsxs(Bl,{children:[s.jsx(Nl,{children:"Last Login"}),s.jsx(Ul,{children:i?.lastLogin?new Date(i.lastLogin).toLocaleString():"Unknown"})]})]})]}),s.jsxs(Jp,{children:[s.jsx("h2",{children:"Change Password"}),S&&s.jsx(h6,{children:S}),h&&s.jsx(p6,{children:h}),s.jsxs(s6,{onSubmit:K,children:[s.jsxs($u,{children:[s.jsx(Tu,{htmlFor:"currentPassword",children:"Current Password"}),s.jsx(_u,{type:"password",id:"currentPassword",name:"currentPassword",value:M.currentPassword,onChange:Y,placeholder:"Enter your current password",required:!0})]}),s.jsxs($u,{children:[s.jsx(Tu,{htmlFor:"newPassword",children:"New Password"}),s.jsx(_u,{type:"password",id:"newPassword",name:"newPassword",value:M.newPassword,onChange:Y,placeholder:"Enter new password (min 6 characters)",required:!0})]}),s.jsxs($u,{children:[s.jsx(Tu,{htmlFor:"confirmPassword",children:"Confirm New Password"}),s.jsx(_u,{type:"password",id:"confirmPassword",name:"confirmPassword",value:M.confirmPassword,onChange:Y,placeholder:"Confirm new password",required:!0})]}),s.jsx(u6,{children:s.jsx(d6,{type:"submit",disabled:u,children:u?"Changing...":"Change Password"})})]})]}),s.jsxs(f6,{children:[s.jsx("h2",{children:"Danger Zone"}),s.jsx("p",{children:"Permanently delete your account and all associated data. This action cannot be undone. All your favorites, account information, and preferences will be lost forever."}),s.jsx(m6,{onClick:k,children:"Delete Account"})]}),g&&s.jsx(Ip,{onClick:Z,children:s.jsxs(Fp,{onClick:q=>q.stopPropagation(),children:[s.jsx("h3",{children:"Delete Account"}),s.jsx("p",{children:"Are you absolutely sure? This will permanently delete your account and all your data. This action cannot be undone."}),s.jsxs(g6,{children:[s.jsx(b6,{onClick:Z,children:"Cancel"}),s.jsx(y6,{onClick:Q,children:"Delete Forever"})]})]})}),_&&s.jsx(Ip,{children:s.jsxs(Fp,{children:[s.jsx("h3",{children:"Account Deleted Successfully"}),s.jsx("p",{children:"Your account and all associated data have been permanently deleted. You will be redirected to the homepage shortly."})]})})]})})},v6=()=>s.jsxs(s.Fragment,{children:[s.jsx(h4,{}),s.jsx("main",{style:{flex:1},children:s.jsxs(Qv,{children:[s.jsx(ft,{path:"/",element:s.jsx(L4,{})}),s.jsx(ft,{path:"/media",element:s.jsx(I4,{})}),s.jsx(ft,{path:"/gigs",element:s.jsx(p3,{})}),s.jsx(ft,{path:"/merch",element:s.jsx(D3,{})}),s.jsx(ft,{path:"/product/:productId",element:s.jsx(J3,{})}),s.jsx(ft,{path:"/cart",element:s.jsx(_5,{})}),s.jsx(ft,{path:"/media/:slug",element:s.jsx(D5,{})}),s.jsx(ft,{path:"/contact",element:s.jsx(V5,{})}),s.jsx(ft,{path:"/terms",element:s.jsx(K5,{})}),s.jsx(ft,{path:"/privacy",element:s.jsx(P5,{})}),s.jsx(ft,{path:"/login",element:s.jsx(n6,{})}),s.jsx(ft,{path:"/register",element:s.jsx(Yv,{to:"/login",replace:!0})}),s.jsx(ft,{path:"/favorites",element:s.jsx(l6,{})}),s.jsx(ft,{path:"/settings",element:s.jsx(x6,{})})]})}),s.jsx(j4,{}),s.jsx(ev,{})]}),S6=()=>s.jsx(Qb,{children:s.jsxs(Xb,{children:[s.jsx(Vx,{}),s.jsx(h2,{children:s.jsx(v6,{})})]})});Bb.createRoot(document.getElementById("root")).render(s.jsx($.StrictMode,{children:s.jsx(S6,{})}));
