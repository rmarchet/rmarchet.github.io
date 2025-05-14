'use strict';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var react = {exports: {}};

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1=Symbol.for("react.element"),n$1=Symbol.for("react.portal"),p$2=Symbol.for("react.fragment"),q$1=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v$1=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z$1=Symbol.iterator;function A$1(a){if(null===a||"object"!==typeof a)return null;a=z$1&&a[z$1]||a["@@iterator"];return "function"===typeof a?a:null}
var B$1={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C$1=Object.assign,D$1={};function E$1(a,b,e){this.props=a;this.context=b;this.refs=D$1;this.updater=e||B$1;}E$1.prototype.isReactComponent={};
E$1.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E$1.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E$1.prototype;function G$1(a,b,e){this.props=a;this.context=b;this.refs=D$1;this.updater=e||B$1;}var H$1=G$1.prototype=new F;
H$1.constructor=G$1;C$1(H$1,E$1.prototype);H$1.isPureReactComponent=!0;var I$1=Array.isArray,J=Object.prototype.hasOwnProperty,K$1={current:null},L$1={key:!0,ref:!0,__self:!0,__source:!0};
function M$1(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L$1.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l$1,type:a,key:k,ref:h,props:c,_owner:K$1.current}}
function N$1(a,b){return {$$typeof:l$1,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O$1(a){return "object"===typeof a&&null!==a&&a.$$typeof===l$1}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P$1=/\/+/g;function Q$1(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R$1(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l$1:case n$1:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q$1(h,0):d,I$1(c)?(e="",null!=a&&(e=a.replace(P$1,"$&/")+"/"),R$1(c,b,e,"",function(a){return a})):null!=c&&(O$1(c)&&(c=N$1(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P$1,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I$1(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q$1(k,g);h+=R$1(k,b,e,f,c);}else if(f=A$1(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q$1(k,g++),h+=R$1(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S$1(a,b,e){if(null==a)return a;var d=[],c=0;R$1(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T$1(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
var U$1={current:null},V$1={transition:null},W$1={ReactCurrentDispatcher:U$1,ReactCurrentBatchConfig:V$1,ReactCurrentOwner:K$1};function X$1(){throw Error("act(...) is not supported in production builds of React.");}
react_production_min.Children={map:S$1,forEach:function(a,b,e){S$1(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S$1(a,function(){b++;});return b},toArray:function(a){return S$1(a,function(a){return a})||[]},only:function(a){if(!O$1(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E$1;react_production_min.Fragment=p$2;react_production_min.Profiler=r;react_production_min.PureComponent=G$1;react_production_min.StrictMode=q$1;react_production_min.Suspense=w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W$1;react_production_min.act=X$1;
react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C$1({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K$1.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L$1.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l$1,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M$1;react_production_min.createFactory=function(a){var b=M$1.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
react_production_min.forwardRef=function(a){return {$$typeof:v$1,render:a}};react_production_min.isValidElement=O$1;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T$1}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V$1.transition;V$1.transition={};try{a();}finally{V$1.transition=b;}};react_production_min.unstable_act=X$1;react_production_min.useCallback=function(a,b){return U$1.current.useCallback(a,b)};react_production_min.useContext=function(a){return U$1.current.useContext(a)};
react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U$1.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U$1.current.useEffect(a,b)};react_production_min.useId=function(){return U$1.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U$1.current.useImperativeHandle(a,b,e)};react_production_min.useInsertionEffect=function(a,b){return U$1.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U$1.current.useLayoutEffect(a,b)};
react_production_min.useMemo=function(a,b){return U$1.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U$1.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U$1.current.useRef(a)};react_production_min.useState=function(a){return U$1.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U$1.current.useSyncExternalStore(a,b,e)};react_production_min.useTransition=function(){return U$1.current.useTransition()};react_production_min.version="18.3.1";

{
  react.exports = react_production_min;
}

var reactExports = react.exports;
var React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

var reactDom = {exports: {}};

var reactDom_production_min = {};

var scheduler = {exports: {}};

var scheduler_production_min = {};

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (exports) {
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
	function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()};}else {var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q};}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
	"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t);}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else {var b=h(t);null!==b&&K(H,b.startTime-a);}}
	function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b);}else k(r);v=h(r);}if(null!==v)var w=!0;else {var m=h(t);null!==m&&K(H,m.startTime-b);w=!1;}return w}finally{v=null,y=c,z=!1;}}var N=!1,O=null,L=-1,P=5,Q=-1;
	function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a);}finally{b?S():(N=!1,O=null);}}else N=!1;}var S;if("function"===typeof F)S=function(){F(R);};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null);};}else S=function(){D(R,0);};function I(a){O=a;N||(N=!0,S());}function K(a,b){L=D(function(){a(exports.unstable_now());},b);}
	exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J));};
	exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5;};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y;}var c=y;y=b;try{return a()}finally{y=c;}};exports.unstable_pauseExecution=function(){};
	exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=y;y=a;try{return b()}finally{y=c;}};
	exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
	exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c;}}}; 
} (scheduler_production_min));

{
  scheduler.exports = scheduler_production_min;
}

var schedulerExports = scheduler.exports;

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa=reactExports,ca=schedulerExports;function p$1(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b);}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a]);}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja.call(ma,a))return !0;if(ja.call(la,a))return !1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return !1}function pa(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1);});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1);});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1);});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1);});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1);});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1);});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z[b]=new v(b,1,!1,a,null,!1,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1);});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1);});
z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0);});
function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)));}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");var Ia=Symbol.for("react.offscreen");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return "function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||"";}return "\n"+La+a}var Na=!1;
function Oa(a,b){if(!a||Na)return "";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[]);}catch(l){var d=l;}Reflect.construct(a,[],b);}else {try{b.call();}catch(l){d=l;}a.call(b.prototype);}else {try{throw Error();}catch(l){d=l;}a();}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return ""}}
function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return "Fragment";case wa:return "Portal";case Aa:return "Profiler";case za:return "StrictMode";case Ea:return "Suspense";case Fa:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return (a.displayName||"Context")+".Consumer";case Ba:return (a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return "Cache";case 9:return (b.displayName||"Context")+".Consumer";case 10:return (b._context.displayName||"Context")+".Provider";case 18:return "DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return "Fragment";case 5:return b;case 4:return "Portal";case 3:return "Root";case 6:return "Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return "Offscreen";
case 12:return "Profiler";case 21:return "Scope";case 13:return "Suspense";case 19:return "SuspenseList";case 25:return "TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return ""}}
function Ta(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
null;delete a[b];}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a));}function Wa(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1);}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else {c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p$1(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p$1(92));if(eb(c)){if(1<c.length)throw Error(p$1(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Sa(c)};}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}function kb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else {mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a];});});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p$1(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p$1(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p$1(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p$1(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p$1(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b));}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a;}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a]);}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb();}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p$1(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0;}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb);}catch(a){Lb=!1;}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(m){this.onError(m);}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a;}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments);}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null;}else throw Error(p$1(198));Qb||(Qb=!0,Rb=l);}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p$1(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p$1(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling;}throw Error(p$1(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(p$1(189));}}if(c.alternate!==d)throw Error(p$1(190));}if(3!==c.tag)throw Error(p$1(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling;}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128));}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)));}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return -1;case 134217728:case 268435456:case 536870912:case 1073741824:return -1;default:return -1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b);}else k<=b&&(a.expiredLanes|=h);f&=~h;}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c;}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f;}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e;}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId);}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return !0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return !1}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c);});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}
function Xc(a){if(null!==a.blockedOn)return !1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null;}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift();}return !0}function Zc(a,b,c){Xc(a)&&c.delete(b);}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc);}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)));}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift();}var cd=ua.ReactCurrentBatchConfig,dd=!0;
function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f;}null!==e&&d.stopPropagation();}else hd(a,b,d,null,c);}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null;}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null;}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return !0}function qd(){return !1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd);},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return "movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return "keypress"===a.type?od(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return -1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return !0;default:return !1}}function he(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return "compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var pe=null,qe=null;function re(a){se(a,0);}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput;}xe=ye;}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode);}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null);}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b);}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae();}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
function Ie(a,b){if(He(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return !1}return !0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Je(c);}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=Xa(a.document);}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)));}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top;}}
var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)));}
function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a]);}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf);}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null;}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d));}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b);}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a));});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b));}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd;}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1);}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return;}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode;}}d=d.return;}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td;}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return;}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null;}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x);}t=null;}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0);}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else {na=De;var xa=Ce;}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value);}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e);}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0;}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a);}se(g,b);});}function tf(a,b,c){return {instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return;}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return;}0!==g.length&&a.push({event:b,listeners:g});}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return ("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p$1(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return "textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;});}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--;}else "$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e;}while(c);bd(b);}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a);}return b}a=c;c=a.parentNode;}return null}function Cb(a){a=a[Of]||a[uf];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p$1(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return {current:a}}
function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--);}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b;}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H);}function ag(a,b,c){if(H.current!==Vf)throw Error(p$1(168));G(H,b);G(Wf,c);}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p$1(108,Ra(a)||"Unknown",e));return A({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return !0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p$1(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c);}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a);}function ig(a){fg=!0;hg(a);}
function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1;}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1;}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b;}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a;}else rg=1<<f|c<<e|d,sg=a;}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0));}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null;}var xg=null,yg=null,I=!1,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c);}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,!0):!1;default:return !1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p$1(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a);}}else {if(Dg(a))throw Error(p$1(418));a.flags=a.flags&-4097|2;I=!1;xg=a;}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a;}
function Gg(a){if(a!==xg)return !1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p$1(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling);}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p$1(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--;}else "$"!==c&&"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}yg=
null;}}else yg=xg?Lf(a.stateNode.nextSibling):null;return !0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling);}function Ig(){yg=xg=null;I=!1;}function Jg(a){null===zg?zg=[a]:zg.push(a);}var Kg=ua.ReactCurrentBatchConfig;
function Lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p$1(309));var d=c.stateNode;}if(!d)throw Error(p$1(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a;};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p$1(284));if(!c._owner)throw Error(p$1(290,a));}return a}
function Mg(a,b){a=Object.prototype.toString.call(b);throw Error(p$1(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ng(a){var b=a._init;return b(a._payload)}
function Og(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c);}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Pg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Qg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&Ng(f)===b.type))return d=e(b,c.props),d.ref=Lg(a,b,c),d.return=a,d;d=Rg(c.type,c.key,c.props,null,a.mode,d);d.ref=Lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=Sg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Tg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=Qg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=Rg(b.type,b.key,b.props,null,a.mode,c),
c.ref=Lg(a,null,b),c.return=a,c;case wa:return b=Sg(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Tg(b,a.mode,c,null),b.return=a,b;Mg(a,b);}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);Mg(a,c);}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);Mg(b,d);}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x;}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p$1(150));h=l.call(h);if(null==h)throw Error(p$1(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x;}if(n.done)return c(e,
m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&Ng(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=Lg(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling;}f.type===ya?(d=Tg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Rg(f.type,f.key,f.props,null,a.mode,h),h.ref=Lg(a,d,f),h.return=a,a=h);}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=Sg(f,a.mode,h);d.return=a;a=d;}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);Mg(a,f);}return "string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=Qg(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Ug=Og(!0),Vg=Og(!1),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null;}function ah(a){var b=Wg.current;E(Wg);a._currentValue=b;}function bh(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return;}}
function ch(a,b){Xg=a;Zg=Yg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(dh=!0),a.firstContext=null);}function eh(a){var b=a._currentValue;if(Zg!==a)if(a={context:a,memoizedValue:b,next:null},null===Yg){if(null===Xg)throw Error(p$1(308));Yg=a;Xg.dependencies={lanes:0,firstContext:a};}else Yg=Yg.next=a;return b}var fh=null;function gh(a){null===fh?fh=[a]:fh.push(a);}
function hh(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,gh(b)):(c.next=e.next,e.next=c);b.interleaved=c;return ih(a,d)}function ih(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var jh=!1;function kh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null};}
function lh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function mh(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function nh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return ih(a,c)}e=d.interleaved;null===e?(b.next=b,gh(d)):(b.next=e.next,e.next=b);d.interleaved=b;return ih(a,c)}function oh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
function ph(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b;}
function qh(a,b,c,d){var e=a.updateQueue;jh=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k));}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:jh=!0;}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h));}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null;}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);rh|=g;a.lanes=g;a.memoizedState=q;}}
function sh(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p$1(191,e));e.call(d);}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(a){if(a===th)throw Error(p$1(174));return a}
function yh(a,b){G(wh,b);G(vh,a);G(uh,th);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a);}E(uh);G(uh,b);}function zh(){E(uh);E(vh);E(wh);}function Ah(a){xh(wh.current);var b=xh(uh.current);var c=lb(b,a.type);b!==c&&(G(vh,a),G(uh,c));}function Bh(a){vh.current===a&&(E(uh),E(vh));}var L=Uf(0);
function Ch(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}var Dh=[];
function Eh(){for(var a=0;a<Dh.length;a++)Dh[a]._workInProgressVersionPrimary=null;Dh.length=0;}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=!1,Jh=!1,Kh=0,Lh=0;function P(){throw Error(p$1(321));}function Mh(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return !1;return !0}
function Nh(a,b,c,d,e,f){Hh=f;M=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Fh.current=null===a||null===a.memoizedState?Oh:Ph;a=c(d,e);if(Jh){f=0;do{Jh=!1;Kh=0;if(25<=f)throw Error(p$1(301));f+=1;O=N=null;b.updateQueue=null;Fh.current=Qh;a=c(d,e);}while(Jh)}Fh.current=Rh;b=null!==N&&null!==N.next;Hh=0;O=N=M=null;Ih=!1;if(b)throw Error(p$1(300));return a}function Sh(){var a=0!==Kh;Kh=0;return a}
function Th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===O?M.memoizedState=O=a:O=O.next=a;return O}function Uh(){if(null===N){var a=M.alternate;a=null!==a?a.memoizedState:null;}else a=N.next;var b=null===O?M.memoizedState:O.next;if(null!==b)O=b,N=a;else {if(null===a)throw Error(p$1(310));N=a;a={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null};null===O?M.memoizedState=O=a:O=O.next=a;}return O}
function Vh(a,b){return "function"===typeof b?b(a):b}
function Wh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p$1(311));c.lastRenderedReducer=a;var d=N,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Hh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else {var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;M.lanes|=m;rh|=m;}l=l.next;}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(dh=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d;}a=c.interleaved;if(null!==a){e=a;do f=e.lane,M.lanes|=f,rh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return [b.memoizedState,c.dispatch]}
function Xh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p$1(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(dh=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}function Yh(){}
function Zh(a,b){var c=M,d=Uh(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,dh=!0);d=d.queue;$h(ai.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==O&&O.memoizedState.tag&1){c.flags|=2048;bi(9,ci.bind(null,c,d,e,b),void 0,null);if(null===Q)throw Error(p$1(349));0!==(Hh&30)||di(c,b,e);}return e}function di(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a));}
function ci(a,b,c,d){b.value=c;b.getSnapshot=d;ei(b)&&fi(a);}function ai(a,b,c){return c(function(){ei(b)&&fi(a);})}function ei(a){var b=a.getSnapshot;a=a.value;try{var c=b();return !He(a,c)}catch(d){return !0}}function fi(a){var b=ih(a,1);null!==b&&gi(b,a,1,-1);}
function hi(a){var b=Th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:a};b.queue=a;a=a.dispatch=ii.bind(null,M,a);return [b.memoizedState,a]}
function bi(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ji(){return Uh().memoizedState}function ki(a,b,c,d){var e=Th();M.flags|=a;e.memoizedState=bi(1|b,c,void 0,void 0===d?null:d);}
function li(a,b,c,d){var e=Uh();d=void 0===d?null:d;var f=void 0;if(null!==N){var g=N.memoizedState;f=g.destroy;if(null!==d&&Mh(d,g.deps)){e.memoizedState=bi(b,c,f,d);return}}M.flags|=a;e.memoizedState=bi(1|b,c,f,d);}function mi(a,b){return ki(8390656,8,a,b)}function $h(a,b){return li(2048,8,a,b)}function ni(a,b){return li(4,2,a,b)}function oi(a,b){return li(4,4,a,b)}
function pi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}function qi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return li(4,4,pi.bind(null,b,a),c)}function ri(){}function si(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function ti(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function ui(a,b,c){if(0===(Hh&21))return a.baseState&&(a.baseState=!1,dh=!0),a.memoizedState=c;He(c,b)||(c=yc(),M.lanes|=c,rh|=c,a.baseState=!0);return b}function vi(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Gh.transition;Gh.transition={};try{a(!1),b();}finally{C=c,Gh.transition=d;}}function wi(){return Uh().memoizedState}
function xi(a,b,c){var d=yi(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,c);else if(c=hh(a,b,c,d),null!==c){var e=R();gi(c,a,d,e);Bi(c,b,d);}}
function ii(a,b,c){var d=yi(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,e);else {var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,gh(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=hh(a,b,e,d);null!==c&&(e=R(),gi(c,a,d,e),Bi(c,b,d));}}
function zi(a){var b=a.alternate;return a===M||null!==b&&b===M}function Ai(a,b){Jh=Ih=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}function Bi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:!1},Oh={readContext:eh,useCallback:function(a,b){Th().memoizedState=[a,void 0===b?null:b];return a},useContext:eh,useEffect:mi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ki(4194308,
4,pi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ki(4194308,4,a,b)},useInsertionEffect:function(a,b){return ki(4,2,a,b)},useMemo:function(a,b){var c=Th();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=xi.bind(null,M,a);return [d.memoizedState,a]},useRef:function(a){var b=
Th();a={current:a};return b.memoizedState=a},useState:hi,useDebugValue:ri,useDeferredValue:function(a){return Th().memoizedState=a},useTransition:function(){var a=hi(!1),b=a[0];a=vi.bind(null,a[1]);Th().memoizedState=a;return [b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=M,e=Th();if(I){if(void 0===c)throw Error(p$1(407));c=c();}else {c=b();if(null===Q)throw Error(p$1(349));0!==(Hh&30)||di(d,b,c);}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;mi(ai.bind(null,d,
f,a),[a]);d.flags|=2048;bi(9,ci.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Th(),b=Q.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Kh++;0<c&&(b+="H"+c.toString(32));b+=":";}else c=Lh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},
useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return ui(b,N.memoizedState,a)},useTransition:function(){var a=Wh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return null===
N?b.memoizedState=a:ui(b,N.memoizedState,a)},useTransition:function(){var a=Xh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1};function Ci(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}function Di(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}
var Ei={isMounted:function(a){return (a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e));},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e));},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=R(),d=
yi(a),e=mh(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=nh(a,e,d);null!==b&&(gi(b,a,d,c),oh(b,a,d));}};function Fi(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
function Gi(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=eh(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Ei;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Hi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Ei.enqueueReplaceState(b,b.state,null);}
function Ii(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};kh(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=eh(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Di(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Ei.enqueueReplaceState(e,e.state,null),qh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308);}function Ji(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e,digest:null}}
function Ki(a,b,c){return {value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function Li(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Mi="function"===typeof WeakMap?WeakMap:Map;function Ni(a,b,c){c=mh(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Oi||(Oi=!0,Pi=d);Li(a,b);};return c}
function Qi(a,b,c){c=mh(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Li(a,b);};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Li(a,b);"function"!==typeof d&&(null===Ri?Ri=new Set([this]):Ri.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}
function Si(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Mi;var e=new Set;d.set(b,e);}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ti.bind(null,a,b,c),b.then(a,a));}function Ui(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return;}while(null!==a);return null}
function Vi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=mh(-1,1),b.tag=2,nh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Wi=ua.ReactCurrentOwner,dh=!1;function Xi(a,b,c,d){b.child=null===a?Vg(b,null,c,d):Ug(b,a.child,c,d);}
function Yi(a,b,c,d,e){c=c.render;var f=b.ref;ch(b,e);d=Nh(a,b,c,d,f,e);c=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&c&&vg(b);b.flags|=1;Xi(a,b,d,e);return b.child}
function $i(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!aj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bj(a,b,f,d,e);a=Rg(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return Zi(a,b,e)}b.flags|=1;a=Pg(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function bj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(dh=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(dh=!0);else return b.lanes=a.lanes,Zi(a,b,e)}return cj(a,b,c,d,e)}
function dj(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=c;else {if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(ej,fj),fj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(ej,fj);fj|=d;}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(ej,fj),fj|=d;Xi(a,b,e,c);return b.child}function gj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152;}function cj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);ch(b,e);c=Nh(a,b,c,d,f,e);d=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&d&&vg(b);b.flags|=1;Xi(a,b,c,e);return b.child}
function hj(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b);}else f=!1;ch(b,e);if(null===b.stateNode)ij(a,b),Gi(b,c,d),Ii(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=eh(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&Hi(b,g,d,l);jh=!1;var r=b.memoizedState;g.state=r;qh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||jh?("function"===typeof m&&(Di(b,c,m,d),k=b.memoizedState),(h=jh||Fi(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1);}else {g=b.stateNode;lh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Ci(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=eh(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&Hi(b,g,d,k);jh=!1;r=b.memoizedState;g.state=r;qh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||jh?("function"===typeof y&&(Di(b,c,y,d),n=b.memoizedState),(l=jh||Fi(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1);}return jj(a,b,c,d,f,e)}
function jj(a,b,c,d,e,f){gj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),Zi(a,b,f);d=b.stateNode;Wi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Ug(b,a.child,null,f),b.child=Ug(b,null,h,f)):Xi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function kj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);yh(a,b.containerInfo);}
function lj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Xi(a,b,c,d);return b.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(a){return {baseLanes:a,cachePool:null,transitions:null}}
function oj(a,b,c){var d=b.pendingProps,e=L.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(L,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=pj(g,d,0,null),a=Tg(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=nj(c),b.memoizedState=mj,a):qj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return rj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=Pg(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=Pg(h,f):(f=Tg(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?nj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=mj;return d}f=a.child;a=f.sibling;d=Pg(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function qj(a,b){b=pj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sj(a,b,c,d){null!==d&&Jg(d);Ug(b,a.child,null,c);a=qj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function rj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Ki(Error(p$1(422))),sj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=pj({mode:"visible",children:d.children},e,0,null);f=Tg(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Ug(b,a.child,null,g);b.child.memoizedState=nj(g);b.memoizedState=mj;return f}if(0===(b.mode&1))return sj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p$1(419));d=Ki(f,d,void 0);return sj(a,b,g,d)}h=0!==(g&a.childLanes);if(dh||h){d=Q;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0;}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,ih(a,e),gi(d,a,e,-1));}tj();d=Ki(Error(p$1(421)));return sj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=uj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=qj(b,d.children);b.flags|=4096;return b}function vj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);bh(a.return,b,c);}
function wj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e);}
function xj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Xi(a,b,d.children,c);d=L.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else {if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&vj(a,c,b);else if(19===a.tag)vj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}G(L,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Ch(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);wj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Ch(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}wj(b,!0,c,null,f);break;case "together":wj(b,!1,null,null,void 0);break;default:b.memoizedState=null;}return b.child}
function ij(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);}function Zi(a,b,c){null!==a&&(b.dependencies=a.dependencies);rh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p$1(153));if(null!==b.child){a=b.child;c=Pg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Pg(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}
function yj(a,b,c){switch(b.tag){case 3:kj(b);Ig();break;case 5:Ah(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:yh(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Wg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(L,L.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return oj(a,b,c);G(L,L.current&1);a=Zi(a,b,c);return null!==a?a.sibling:null}G(L,L.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return xj(a,b,c);b.flags|=128;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(L,L.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dj(a,b,c)}return Zi(a,b,c)}var zj,Aj,Bj,Cj;
zj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Aj=function(){};
Bj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;xh(uh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf);}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="");}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g]);}else c||(f||(f=[]),f.push(l,
c)),c=k;else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Cj=function(a,b,c,d){c!==d&&(b.flags|=4);};
function Dj(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Ej(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;zh();E(Wf);E(H);Eh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Fj(zg),zg=null));Aj(a,b);S(b);return null;case 5:Bh(b);var e=xh(wh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Bj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else {if(!d){if(null===b.stateNode)throw Error(p$1(166));S(b);return null}a=xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d);}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d);}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf);}d=e;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;zj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d;}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g));}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf);}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1;}}d&&(b.flags|=4);}null!==b.ref&&(b.flags|=512,b.flags|=2097152);}S(b);return null;case 6:if(a&&null!=b.stateNode)Cj(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(p$1(166));c=xh(wh.current);xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1));}f&&(b.flags|=4);}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d;}S(b);return null;case 13:E(L);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p$1(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p$1(317));f[Of]=b;}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1;}else null!==zg&&(Fj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(L.current&1)?0===T&&(T=3):tj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return zh(),
Aj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return ah(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(L);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dj(f,!1);else {if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Ch(a);if(null!==g){b.flags|=128;Dj(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(L,L.current&1|2);return b.child}a=
a.sibling;}null!==f.tail&&B()>Gj&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304);}else {if(!d)if(a=Ch(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dj(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Gj&&1073741824!==c&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g);}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=L.current,G(L,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Hj(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(fj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p$1(156,b.tag));}
function Ij(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return zh(),E(Wf),E(H),Eh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Bh(b),null;case 13:E(L);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p$1(340));Ig();}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(b.type._context),null;case 22:case 23:return Hj(),
null;case 24:return null;default:return null}}var Jj=!1,U=!1,Kj="function"===typeof WeakSet?WeakSet:Set,V=null;function Lj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null);}catch(d){W(a,b,d);}else c.current=null;}function Mj(a,b,c){try{c();}catch(d){W(a,b,d);}}var Nj=!1;
function Oj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType;}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y;}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode;}q=y;}c=-1===h||-1===k?null:{start:h,end:k};}else c=null;}c=c||{start:0,end:0};}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Ci(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w;}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p$1(163));}}catch(F){W(b,b.return,F);}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return;}n=Nj;Nj=!1;return n}
function Pj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Mj(b,c,f);}e=e.next;}while(e!==d)}}function Qj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d();}c=c.next;}while(c!==b)}}function Rj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c;}"function"===typeof b?b(a):b.current=a;}}
function Sj(a){var b=a.alternate;null!==b&&(a.alternate=null,Sj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null;}function Tj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Uj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Tj(a.return))return null;a=a.return;}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child;}if(!(a.flags&2))return a.stateNode}}
function Vj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Vj(a,b,c),a=a.sibling;null!==a;)Vj(a,b,c),a=a.sibling;}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling;}var X=null,Xj=!1;function Yj(a,b,c){for(c=c.child;null!==c;)Zj(a,b,c),c=c.sibling;}
function Zj(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c);}catch(h){}switch(c.tag){case 5:U||Lj(c,b);case 6:var d=X,e=Xj;X=null;Yj(a,b,c);X=d;Xj=e;null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Xj;X=c.stateNode.containerInfo;Xj=!0;
Yj(a,b,c);X=d;Xj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Mj(c,b,g):0!==(f&4)&&Mj(c,b,g));e=e.next;}while(e!==d)}Yj(a,b,c);break;case 1:if(!U&&(Lj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount();}catch(h){W(c,b,h);}Yj(a,b,c);break;case 21:Yj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
c.memoizedState,Yj(a,b,c),U=d):Yj(a,b,c);break;default:Yj(a,b,c);}}function ak(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Kj);b.forEach(function(b){var d=bk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
function ck(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Xj=!1;break a;case 3:X=h.stateNode.containerInfo;Xj=!0;break a;case 4:X=h.stateNode.containerInfo;Xj=!0;break a}h=h.return;}if(null===X)throw Error(p$1(160));Zj(f,g,e);X=null;Xj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null;}catch(l){W(e,b,l);}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)dk(b,a),b=b.sibling;}
function dk(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ck(b,a);ek(a);if(d&4){try{Pj(3,a,a.return),Qj(3,a);}catch(t){W(a,a.return,t);}try{Pj(5,a,a.return);}catch(t){W(a,a.return,t);}}break;case 1:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);break;case 5:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"");}catch(t){W(a,a.return,t);}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l);}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1));}e[Pf]=f;}catch(t){W(a,a.return,t);}}break;case 6:ck(b,a);ek(a);if(d&4){if(null===a.stateNode)throw Error(p$1(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f;}catch(t){W(a,a.return,t);}}break;case 3:ck(b,a);ek(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo);}catch(t){W(a,a.return,t);}break;case 4:ck(b,a);ek(a);break;case 13:ck(b,a);ek(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(fk=B()));d&4&&ak(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,ck(b,a),U=l):ck(b,a);ek(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Pj(4,r,r.return);break;case 1:Lj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount();}catch(t){W(d,c,t);}}break;case 5:Lj(r,r.return);break;case 22:if(null!==r.memoizedState){gk(q);continue}}null!==y?(y.return=r,V=y):gk(q);}m=m.sibling;}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g));}catch(t){W(a,a.return,t);}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps;}catch(t){W(a,a.return,t);}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return;}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling;}}break;case 19:ck(b,a);ek(a);d&4&&ak(a);break;case 21:break;default:ck(b,
a),ek(a);}}function ek(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Tj(c)){var d=c;break a}c=c.return;}throw Error(p$1(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Uj(a);Wj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Uj(a);Vj(a,h,g);break;default:throw Error(p$1(161));}}catch(k){W(a,a.return,k);}a.flags&=-3;}b&4096&&(a.flags&=-4097);}function hk(a,b,c){V=a;ik(a);}
function ik(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Jj;var l=U;Jj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?jk(e):null!==k?(k.return=g,V=k):jk(e);for(;null!==f;)V=f,ik(f),f=f.sibling;V=e;Jj=h;U=l;}kk(a);}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):kk(a);}}
function kk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Qj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else {var e=b.elementType===b.type?c.memoizedProps:Ci(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate);}var f=b.updateQueue;null!==f&&sh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode;}sh(b,g,c);}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src);}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q);}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p$1(163));}U||b.flags&512&&Rj(b);}catch(r){W(b,b.return,r);}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return;}}function gk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return;}}
function jk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Qj(4,b);}catch(k){W(b,c,k);}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount();}catch(k){W(b,e,k);}}var f=b.return;try{Rj(b);}catch(k){W(b,f,k);}break;case 5:var g=b.return;try{Rj(b);}catch(k){W(b,g,k);}}}catch(k){W(b,b.return,k);}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return;}}
var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=Infinity,uk=null,Oi=!1,Pi=null,Ri=null,vk=!1,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return 0!==(K&6)?B():-1!==Ak?Ak:Ak=B()}
function yi(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Bk&&(Bk=yc()),Bk;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function gi(a,b,c,d){if(50<yk)throw yk=0,zk=null,Error(p$1(185));Ac(a,c,d);if(0===(K&2)||a!==Q)a===Q&&(0===(K&2)&&(qk|=c),4===T&&Ck(a,Z)),Dk(a,d),1===c&&0===K&&0===(b.mode&1)&&(Gj=B()+500,fg&&jg());}
function Dk(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===Q?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Ek.bind(null,a)):hg(Ek.bind(null,a)),Jf(function(){0===(K&6)&&jg();}),c=null;else {switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc;}c=Fk(c,Gk.bind(null,a));}a.callbackPriority=b;a.callbackNode=c;}}
function Gk(a,b){Ak=-1;Bk=0;if(0!==(K&6))throw Error(p$1(327));var c=a.callbackNode;if(Hk()&&a.callbackNode!==c)return null;var d=uc(a,a===Q?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Ik(a,d);else {b=d;var e=K;K|=2;var f=Jk();if(Q!==a||Z!==b)uk=null,Gj=B()+500,Kk(a,b);do try{Lk();break}catch(h){Mk(a,h);}while(1);$g();mk.current=f;K=e;null!==Y?b=0:(Q=null,Z=0,b=T);}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Nk(a,e)));if(1===b)throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;if(6===b)Ck(a,d);
else {e=a.current.alternate;if(0===(d&30)&&!Ok(e)&&(b=Ik(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Nk(a,f))),1===b))throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p$1(345));case 2:Pk(a,tk,uk);break;case 3:Ck(a,d);if((d&130023424)===d&&(b=fk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){R();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),b);break}Pk(a,tk,uk);break;case 4:Ck(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f;}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),d);break}Pk(a,tk,uk);break;case 5:Pk(a,tk,uk);break;default:throw Error(p$1(329));}}}Dk(a,B());return a.callbackNode===c?Gk.bind(null,a):null}
function Nk(a,b){var c=sk;a.current.memoizedState.isDehydrated&&(Kk(a,b).flags|=256);a=Ik(a,b);2!==a&&(b=tk,tk=c,null!==b&&Fj(b));return a}function Fj(a){null===tk?tk=a:tk.push.apply(tk,a);}
function Ok(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return !1}catch(g){return !1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else {if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return !0;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return !0}
function Ck(a,b){b&=~rk;b&=~qk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d;}}function Ek(a){if(0!==(K&6))throw Error(p$1(327));Hk();var b=uc(a,0);if(0===(b&1))return Dk(a,B()),null;var c=Ik(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Nk(a,d));}if(1===c)throw c=pk,Kk(a,0),Ck(a,b),Dk(a,B()),c;if(6===c)throw Error(p$1(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Pk(a,tk,uk);Dk(a,B());return null}
function Qk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Gj=B()+500,fg&&jg());}}function Rk(a){null!==wk&&0===wk.tag&&0===(K&6)&&Hk();var b=K;K|=1;var c=ok.transition,d=C;try{if(ok.transition=null,C=1,a)return a()}finally{C=d,ok.transition=c,K=b,0===(K&6)&&jg();}}function Hj(){fj=ej.current;E(ej);}
function Kk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:zh();E(Wf);E(H);Eh();break;case 5:Bh(d);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(d.type._context);break;case 22:case 23:Hj();}c=c.return;}Q=a;Y=a=Pg(a.current,null);Z=fj=b;T=0;pk=null;rk=qk=rh=0;tk=sk=null;if(null!==fh){for(b=
0;b<fh.length;b++)if(c=fh[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g;}c.pending=d;}fh=null;}return a}
function Mk(a,b){do{var c=Y;try{$g();Fh.current=Rh;if(Ih){for(var d=M.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}Ih=!1;}Hh=0;O=N=M=null;Jh=!1;Kh=0;nk.current=null;if(null===c||null===c.return){T=1;pk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null);}var y=Ui(g);if(null!==y){y.flags&=-257;Vi(y,g,h,f,b);y.mode&1&&Si(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t;}else n.add(k);break a}else {if(0===(b&1)){Si(f,l,b);tj();break a}k=Error(p$1(426));}}else if(I&&h.mode&1){var J=Ui(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Vi(J,g,h,f,b);Jg(Ji(k,h));break a}}f=k=Ji(k,h);4!==T&&(T=2);null===sk?sk=[f]:sk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Ni(f,k,b);ph(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ri||!Ri.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Qi(f,h,b);ph(f,F);break a}}f=f.return;}while(null!==f)}Sk(c);}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Jk(){var a=mk.current;mk.current=Rh;return null===a?Rh:a}
function tj(){if(0===T||3===T||2===T)T=4;null===Q||0===(rh&268435455)&&0===(qk&268435455)||Ck(Q,Z);}function Ik(a,b){var c=K;K|=2;var d=Jk();if(Q!==a||Z!==b)uk=null,Kk(a,b);do try{Tk();break}catch(e){Mk(a,e);}while(1);$g();K=c;mk.current=d;if(null!==Y)throw Error(p$1(261));Q=null;Z=0;return T}function Tk(){for(;null!==Y;)Uk(Y);}function Lk(){for(;null!==Y&&!cc();)Uk(Y);}function Uk(a){var b=Vk(a.alternate,a,fj);a.memoizedProps=a.pendingProps;null===b?Sk(a):Y=b;nk.current=null;}
function Sk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Ej(c,b,fj),null!==c){Y=c;return}}else {c=Ij(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else {T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a;}while(null!==b);0===T&&(T=5);}function Pk(a,b,c){var d=C,e=ok.transition;try{ok.transition=null,C=1,Wk(a,b,c,d);}finally{ok.transition=e,C=d;}return null}
function Wk(a,b,c,d){do Hk();while(null!==wk);if(0!==(K&6))throw Error(p$1(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p$1(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===Q&&(Y=Q=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||vk||(vk=!0,Fk(hc,function(){Hk();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ok.transition;ok.transition=null;
var g=C;C=1;var h=K;K|=4;nk.current=null;Oj(a,c);dk(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;hk(c);dc();K=h;C=g;ok.transition=f;}else a.current=c;vk&&(vk=!1,wk=a,xk=e);f=a.pendingLanes;0===f&&(Ri=null);mc(c.stateNode);Dk(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Oi)throw Oi=!1,a=Pi,Pi=null,a;0!==(xk&1)&&0!==a.tag&&Hk();f=a.pendingLanes;0!==(f&1)?a===zk?yk++:(yk=0,zk=a):yk=0;jg();return null}
function Hk(){if(null!==wk){var a=Dc(xk),b=ok.transition,c=C;try{ok.transition=null;C=16>a?16:a;if(null===wk)var d=!1;else {a=wk;wk=null;xk=0;if(0!==(K&6))throw Error(p$1(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Pj(8,m,f);}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Sj(m);if(m===
l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y;}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J;}while(null!==t)}}V=f;}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Pj(9,f,f.return);}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return;}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Qj(9,h);}}catch(na){W(h,h.return,na);}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return;}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a);}catch(na){}d=!0;}return d}finally{C=c,ok.transition=b;}}return !1}function Xk(a,b,c){b=Ji(c,b);b=Ni(a,b,1);a=nh(a,b,1);b=R();null!==a&&(Ac(a,1,b),Dk(a,b));}
function W(a,b,c){if(3===a.tag)Xk(a,a,c);else for(;null!==b;){if(3===b.tag){Xk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ri||!Ri.has(d))){a=Ji(c,a);a=Qi(b,a,1);b=nh(b,a,1);a=R();null!==b&&(Ac(b,1,a),Dk(b,a));break}}b=b.return;}}
function Ti(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=R();a.pingedLanes|=a.suspendedLanes&c;Q===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-fk?Kk(a,0):rk|=c);Dk(a,b);}function Yk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=R();a=ih(a,b);null!==a&&(Ac(a,b,c),Dk(a,c));}function uj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Yk(a,c);}
function bk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p$1(314));}null!==d&&d.delete(b);Yk(a,c);}var Vk;
Vk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)dh=!0;else {if(0===(a.lanes&c)&&0===(b.flags&128))return dh=!1,yj(a,b,c);dh=0!==(a.flags&131072)?!0:!1;}else dh=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;ij(a,b);a=b.pendingProps;var e=Yf(b,H.current);ch(b,c);e=Nh(null,b,d,a,e,c);var f=Sh();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,kh(b),e.updater=Ei,b.stateNode=e,e._reactInternals=b,Ii(b,d,a,c),b=jj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Xi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{ij(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Zk(d);a=Ci(d,a);switch(e){case 0:b=cj(null,b,d,a,c);break a;case 1:b=hj(null,b,d,a,c);break a;case 11:b=Yi(null,b,d,a,c);break a;case 14:b=$i(null,b,d,Ci(d.type,a),c);break a}throw Error(p$1(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),cj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),hj(a,b,d,e,c);case 3:a:{kj(b);if(null===a)throw Error(p$1(387));d=b.pendingProps;f=b.memoizedState;e=f.element;lh(a,b);qh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ji(Error(p$1(423)),b);b=lj(a,b,d,c,e);break a}else if(d!==e){e=Ji(Error(p$1(424)),b);b=lj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Vg(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else {Ig();if(d===e){b=Zi(a,b,c);break a}Xi(a,b,d,c);}b=b.child;}return b;case 5:return Ah(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
gj(a,b),Xi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return oj(a,b,c);case 4:return yh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Ug(b,null,d,c):Xi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),Yi(a,b,d,e,c);case 7:return Xi(a,b,b.pendingProps,c),b.child;case 8:return Xi(a,b,b.pendingProps.children,c),b.child;case 12:return Xi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G(Wg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=Zi(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=mh(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k;}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);bh(f.return,
c,b);h.lanes|=c;break}k=k.next;}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p$1(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);bh(g,c,b);g=f.sibling;}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return;}f=g;}Xi(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,d=b.pendingProps.children,ch(b,c),e=eh(e),d=d(e),b.flags|=1,Xi(a,b,d,c),
b.child;case 14:return d=b.type,e=Ci(d,b.pendingProps),e=Ci(d.type,e),$i(a,b,d,e,c);case 15:return bj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),ij(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,ch(b,c),Gi(b,d,e),Ii(b,d,e,c),jj(null,b,d,!0,a,c);case 19:return xj(a,b,c);case 22:return dj(a,b,c)}throw Error(p$1(156,b.tag));};function Fk(a,b){return ac(a,b)}
function $k(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null;}function Bg(a,b,c,d){return new $k(a,b,c,d)}function aj(a){a=a.prototype;return !(!a||!a.isReactComponent)}
function Zk(a){if("function"===typeof a)return aj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function Pg(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Rg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)aj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Tg(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return pj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p$1(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Tg(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function pj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function Qg(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function Sg(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function al(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null;}function bl(a,b,c,d,e,f,g,h,k){a=new al(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};kh(f);return a}function cl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function dl(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p$1(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return;}while(null!==b);throw Error(p$1(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function el(a,b,c,d,e,f,g,h,k){a=bl(c,d,!0,a,e,f,g,h,k);a.context=dl(null);c=a.current;d=R();e=yi(c);f=mh(d,e);f.callback=void 0!==b&&null!==b?b:null;nh(c,f,e);a.current.lanes=e;Ac(a,e,d);Dk(a,d);return a}function fl(a,b,c,d){var e=b.current,f=R(),g=yi(e);c=dl(c);null===b.context?b.context=c:b.pendingContext=c;b=mh(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=nh(e,b,g);null!==a&&(gi(a,e,g,f),oh(a,e,g));return g}
function gl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function hl(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function il(a,b){hl(a,b);(a=a.alternate)&&hl(a,b);}function jl(){return null}var kl="function"===typeof reportError?reportError:function(a){console.error(a);};function ll(a){this._internalRoot=a;}
ml.prototype.render=ll.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p$1(409));fl(a,b,null,null);};ml.prototype.unmount=ll.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Rk(function(){fl(null,a,null,null);});b[uf]=null;}};function ml(a){this._internalRoot=a;}
ml.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a);}};function nl(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function ol(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function pl(){}
function ql(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=gl(g);f.call(a);};}var g=el(b,d,a,0,null,!1,!1,"",pl);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Rk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=gl(k);h.call(a);};}var k=bl(a,0,!1,null,null,!1,!1,"",pl);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Rk(function(){fl(b,k,c,d);});return k}
function rl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=gl(g);h.call(a);};}fl(b,g,a,e);}else g=ql(c,b,a,e,d);return gl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Dk(b,B()),0===(K&6)&&(Gj=B()+500,jg()));}break;case 13:Rk(function(){var b=ih(a,1);if(null!==b){var c=R();gi(b,a,1,c);}}),il(a,1);}};
Fc=function(a){if(13===a.tag){var b=ih(a,134217728);if(null!==b){var c=R();gi(b,a,134217728,c);}il(a,134217728);}};Gc=function(a){if(13===a.tag){var b=yi(a),c=ih(a,b);if(null!==c){var d=R();gi(c,a,b,d);}il(a,b);}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c;}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p$1(90));Wa(d);bb(d,e);}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1);}};Gb=Qk;Hb=Rk;
var sl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"};
var ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||
jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl;}catch(a){}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;
reactDom_production_min.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!nl(b))throw Error(p$1(200));return cl(a,b,null,c)};reactDom_production_min.createRoot=function(a,b){if(!nl(a))throw Error(p$1(299));var c=!1,d="",e=kl;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=bl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ll(b)};
reactDom_production_min.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p$1(188));a=Object.keys(a).join(",");throw Error(p$1(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};reactDom_production_min.flushSync=function(a){return Rk(a)};reactDom_production_min.hydrate=function(a,b,c){if(!ol(b))throw Error(p$1(200));return rl(null,a,b,!0,c)};
reactDom_production_min.hydrateRoot=function(a,b,c){if(!nl(a))throw Error(p$1(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=kl;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=el(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new ml(b)};reactDom_production_min.render=function(a,b,c){if(!ol(b))throw Error(p$1(200));return rl(null,a,b,!1,c)};reactDom_production_min.unmountComponentAtNode=function(a){if(!ol(a))throw Error(p$1(40));return a._reactRootContainer?(Rk(function(){rl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null;});}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Qk;
reactDom_production_min.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!ol(c))throw Error(p$1(200));if(null==a||void 0===a._reactInternals)throw Error(p$1(38));return rl(a,b,c,!1,d)};reactDom_production_min.version="18.3.1-next-f1338f8080-20240426";

function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

{
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  reactDom.exports = reactDom_production_min;
}

var reactDomExports = reactDom.exports;

var createRoot;

var m$1 = reactDomExports;
{
  createRoot = m$1.createRoot;
  m$1.hydrateRoot;
}

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = !0, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (arg) {
					classes = appendClass(classes, parseValue(arg));
				}
			}

			return classes;
		}

		function parseValue (arg) {
			if (typeof arg === 'string' || typeof arg === 'number') {
				return arg;
			}

			if (typeof arg !== 'object') {
				return '';
			}

			if (Array.isArray(arg)) {
				return classNames.apply(null, arg);
			}

			if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
				return arg.toString();
			}

			var classes = '';

			for (var key in arg) {
				if (hasOwn.call(arg, key) && arg[key]) {
					classes = appendClass(classes, key);
				}
			}

			return classes;
		}

		function appendClass (value, newClass) {
			if (!newClass) {
				return value;
			}
		
			if (value) {
				return value + ' ' + newClass;
			}
		
			return value + newClass;
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}()); 
} (classnames));

var classnamesExports = classnames.exports;
var cn = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

var scaleDitheredImage = function scaleDitheredImage(ctx, width, height, scale) {
  // Create a temporary canvas at reduced size
  var tempCanvas = document.createElement('canvas');
  tempCanvas.width = Math.floor(width / scale);
  tempCanvas.height = Math.floor(height / scale);
  var tempCtx = tempCanvas.getContext('2d');

  // Draw the original image scaled down
  tempCtx.imageSmoothingEnabled = false;
  tempCtx.drawImage(ctx.canvas, 0, 0, tempCanvas.width, tempCanvas.height);

  // Get the scaled down image data
  var imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
  var data = imageData.data;

  // Return the scaled down context and dimensions
  return {
    tempCtx: tempCtx,
    scaledWidth: tempCanvas.width,
    scaledHeight: tempCanvas.height,
    imageData: imageData,
    data: data
  };
};

var fastBoxBlur = function fastBoxBlur(data, width, height, radius) {
  if (radius < 1) return;
  var copy = new Uint8ClampedArray(data);

  // Horizontal pass
  for (var y = 0; y < height; y++) {
    var sum = [0, 0, 0],
      count = 0;
    for (var x = 0; x < width; x++) {
      var idx = (y * width + x) * 4;
      if (x === 0) {
        // Initialize sum for the first pixel in the row
        sum = [0, 0, 0];
        count = 0;
        for (var k = -radius; k <= radius; k++) {
          var nx = x + k;
          if (nx >= 0 && nx < width) {
            for (var c = 0; c < 3; c++) {
              sum[c] += copy[(y * width + nx) * 4 + c];
            }
            count++;
          }
        }
      } else {
        // Slide window: remove leftmost, add rightmost
        var prev = x - radius - 1;
        var next = x + radius;
        if (prev >= 0) {
          for (var _c = 0; _c < 3; _c++) {
            sum[_c] -= copy[(y * width + prev) * 4 + _c];
          }
          count--;
        }
        if (next < width) {
          for (var _c2 = 0; _c2 < 3; _c2++) {
            sum[_c2] += copy[(y * width + next) * 4 + _c2];
          }
          count++;
        }
      }
      for (var _c3 = 0; _c3 < 3; _c3++) {
        data[idx + _c3] = sum[_c3] / count;
      }
      // Alpha channel remains unchanged
    }
  }

  // Vertical pass
  copy.set(data);
  for (var _x = 0; _x < width; _x++) {
    var _sum = [0, 0, 0],
      _count = 0;
    for (var _y = 0; _y < height; _y++) {
      var _idx = (_y * width + _x) * 4;
      if (_y === 0) {
        _sum = [0, 0, 0];
        _count = 0;
        for (var _k = -radius; _k <= radius; _k++) {
          var ny = _y + _k;
          if (ny >= 0 && ny < height) {
            for (var _c4 = 0; _c4 < 3; _c4++) {
              _sum[_c4] += copy[(ny * width + _x) * 4 + _c4];
            }
            _count++;
          }
        }
      } else {
        var _prev = _y - radius - 1;
        var _next = _y + radius;
        if (_prev >= 0) {
          for (var _c5 = 0; _c5 < 3; _c5++) {
            _sum[_c5] -= copy[(_prev * width + _x) * 4 + _c5];
          }
          _count--;
        }
        if (_next < height) {
          for (var _c6 = 0; _c6 < 3; _c6++) {
            _sum[_c6] += copy[(_next * width + _x) * 4 + _c6];
          }
          _count++;
        }
      }
      for (var _c7 = 0; _c7 < 3; _c7++) {
        data[_idx + _c7] = _sum[_c7] / _count;
      }
      // Alpha channel remains unchanged
    }
  }
};

function toGrayscale(data) {
  for (var i = 0; i < data.length; i += 4) {
    var gray = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = data[i + 1] = data[i + 2] = gray;
  }
}
function applyDetailEnhancement(data, detail) {
  for (var i = 0; i < data.length; i += 4) {
    for (var c = 0; c < 3; c++) {
      // R, G, B
      var diff = data[i + c] - 128;
      var val = 128 + diff * detail;
      data[i + c] = Math.max(0, Math.min(255, val));
    }
    // Alpha channel remains unchanged
  }
}
function applyBrightness(data, settings) {
  var brightness = settings.brightness,
    invert = settings.invert;
  for (var i = 0; i < data.length; i += 4) {
    for (var c = 0; c < 3; c++) {
      // R, G, B
      var val = invert ? data[i + c] - brightness : data[i + c] + brightness;
      data[i + c] = Math.max(0, Math.min(255, val));
    }
    // Alpha channel remains unchanged
  }
}
function applyMidtones(data, settings) {
  var midtones = settings.midtones,
    invert = settings.invert;
  var exponent = invert ? 1 / midtones : midtones;
  for (var i = 0; i < data.length; i += 4) {
    for (var c = 0; c < 3; c++) {
      // R, G, B
      var val = Math.pow(data[i + c] / 255, exponent) * 255;
      data[i + c] = Math.max(0, Math.min(255, val));
    }
    // Alpha channel remains unchanged
  }
}
function invertImage(data) {
  for (var i = 0; i < data.length; i += 4) {
    for (var c = 0; c < 3; c++) {
      // R, G, B
      data[i + c] = 255 - data[i + c];
    }
    // Alpha channel remains unchanged
  }
}

var preprocessImage = function preprocessImage(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;

  // force grayscale
  if (settings.grayscale) {
    toGrayscale(data);
  }
  if (settings.blur > 0) {
    var blurRadius = Math.round(settings.blur / 20);
    fastBoxBlur(data, width, height, blurRadius);
  }
  if (settings.detailEnhancement !== 50) {
    applyDetailEnhancement(data, settings.detailEnhancement / 50);
  }
  if (settings.brightness !== 0) {
    applyBrightness(data, settings);
  }
  if (settings.midtones !== 1) {
    applyMidtones(data, settings);
  }
  if (settings.invert) {
    invertImage(data);
  }
};

var applyFloydSteinberg = function applyFloydSteinberg(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 0 : _settings$noise;
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var idx = (y * width + x) * 4;
      var gray = data[idx];

      // Add noise
      gray += (Math.random() - 0.5) * noise;

      // Apply threshold
      var newColor = gray < 128 ? 0 : 255;
      data[idx] = data[idx + 1] = data[idx + 2] = newColor;

      // Calculate error
      var error = gray - newColor;

      // Distribute error in Floyd-Steinberg pattern
      if (x + 1 < width) {
        data[idx + 4] += error * 7 / 16; // right
      }
      if (y + 1 < height) {
        if (x - 1 >= 0) {
          data[idx + width * 4 - 4] += error * 3 / 16; // bottom left
        }
        data[idx + width * 4] += error * 5 / 16; // bottom
        if (x + 1 < width) {
          data[idx + width * 4 + 4] += error * 1 / 16; // bottom right
        }
      }
    }
  }
};

var DITHER_CATEGORIES = {
  DEFAULT: 'Default',
  ERROR_DIFFUSION: 'Error Diffusion',
  ORDERED_DITHERING: 'Ordered Dithering',
  GLITCH_EFFECTS: 'Glitch Effects',
  ASCII: 'ASCII'
};
var STORAGE_KEY = 'web-dither-image';
var FILE_NAME_PREFIX = 'ditr-image';

var floydSteinberg = {
  apply: applyFloydSteinberg,
  name: 'Floyd-Steinberg',
  description: 'A dithering algorithm that uses a 3x3 grid to distribute error',
  category: DITHER_CATEGORIES.ERROR_DIFFUSION,
  handle: 'floydSteinberg'
};

var applyJarvisJudiceNinke = function applyJarvisJudiceNinke(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 0 : _settings$noise;
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var idx = (y * width + x) * 4;
      var gray = data[idx];

      // Add noise
      gray += (Math.random() - 0.5) * noise;

      // Apply threshold
      var newColor = gray < 128 ? 0 : 255;
      data[idx] = data[idx + 1] = data[idx + 2] = newColor;

      // Calculate error
      var error = gray - newColor;

      // Distribute error
      if (x < width - 1) {
        data[idx + 4] += error * 7 / 48; // right
      }
      if (x < width - 2) {
        data[idx + 8] += error * 5 / 48; // right x2
      }
      if (y < height - 1) {
        if (x > 1) {
          data[idx + width * 4 - 8] += error * 3 / 48; // bottom left x2
        }
        if (x > 0) {
          data[idx + width * 4 - 4] += error * 5 / 48; // bottom left
        }
        data[idx + width * 4] += error * 7 / 48; // bottom
        if (x < width - 1) {
          data[idx + width * 4 + 4] += error * 5 / 48; // bottom right
        }
        if (x < width - 2) {
          data[idx + width * 4 + 8] += error * 3 / 48; // bottom right x2
        }
      }
      if (y < height - 2) {
        if (x > 1) {
          data[idx + width * 8 - 8] += error * 1 / 48; // bottom left x2, y+2
        }
        if (x > 0) {
          data[idx + width * 8 - 4] += error * 3 / 48; // bottom left, y+2
        }
        data[idx + width * 8] += error * 5 / 48; // bottom, y+2
        if (x < width - 1) {
          data[idx + width * 8 + 4] += error * 3 / 48; // bottom right, y+2
        }
        if (x < width - 2) {
          data[idx + width * 8 + 8] += error * 1 / 48; // bottom right x2, y+2
        }
      }
    }
  }
};

var jarvisJudiceNinke = {
  apply: applyJarvisJudiceNinke,
  name: 'Jarvis-Judice-Ninke',
  description: 'A dithering algorithm that uses a 3x3 grid to distribute error',
  category: DITHER_CATEGORIES.ERROR_DIFFUSION,
  handle: 'jarvisJudiceNinke'
};

var applySierraLite = function applySierraLite(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 0 : _settings$noise;
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var idx = (y * width + x) * 4;
      var gray = data[idx];

      // Add noise
      gray += (Math.random() - 0.5) * noise;

      // Apply threshold
      var newColor = gray < 128 ? 0 : 255;
      data[idx] = data[idx + 1] = data[idx + 2] = newColor;

      // Calculate error
      var error = gray - newColor;

      // Distribute error
      if (x < width - 1) {
        data[idx + 4] += error * 2 / 4; // right
      }
      if (y < height - 1) {
        if (x > 0) {
          data[idx + width * 4 - 4] += error * 1 / 4; // bottom left
        }
        data[idx + width * 4] += error * 1 / 4; // bottom
      }
    }
  }
};

var sierraLite = {
  apply: applySierraLite,
  name: 'Sierra Lite',
  description: 'A dithering algorithm that uses a 2x2 grid to distribute error',
  category: DITHER_CATEGORIES.ERROR_DIFFUSION,
  handle: 'sierraLite'
};

var applyTwoRowSierra = function applyTwoRowSierra(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 0 : _settings$noise;
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var idx = (y * width + x) * 4;
      var gray = data[idx];

      // Add noise
      gray += (Math.random() - 0.5) * noise;

      // Apply threshold
      var newColor = gray < 128 ? 0 : 255;
      data[idx] = data[idx + 1] = data[idx + 2] = newColor;

      // Calculate error
      var error = gray - newColor;

      // Distribute error
      if (x < width - 1) {
        data[idx + 4] += error * 4 / 16; // right
      }
      if (x < width - 2) {
        data[idx + 8] += error * 3 / 16; // right x2
      }
      if (y < height - 1) {
        if (x > 1) {
          data[idx + width * 4 - 8] += error * 1 / 16; // bottom left x2
        }
        if (x > 0) {
          data[idx + width * 4 - 4] += error * 2 / 16; // bottom left
        }
        data[idx + width * 4] += error * 3 / 16; // bottom
        if (x < width - 1) {
          data[idx + width * 4 + 4] += error * 2 / 16; // bottom right
        }
        if (x < width - 2) {
          data[idx + width * 4 + 8] += error * 1 / 16; // bottom right x2
        }
      }
    }
  }
};

var twoRowSierra = {
  apply: applyTwoRowSierra,
  name: 'Two Row Sierra',
  description: 'A dithering algorithm that uses a 2x2 grid to distribute error',
  category: DITHER_CATEGORIES.ERROR_DIFFUSION,
  handle: 'twoRowSierra'
};

var applyStevensonArce = function applyStevensonArce(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 0 : _settings$noise;
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var idx = (y * width + x) * 4;
      var gray = data[idx];

      // Add noise
      gray += (Math.random() - 0.5) * noise;

      // Apply threshold
      var newColor = gray < 128 ? 0 : 255;
      data[idx] = data[idx + 1] = data[idx + 2] = newColor;

      // Calculate error
      var error = gray - newColor;

      // Distribute error
      if (x < width - 1) {
        data[idx + 4] += error * 32 / 200; // right
      }
      if (x < width - 2) {
        data[idx + 8] += error * 12 / 200; // right x2
      }
      if (y < height - 1) {
        if (x > 1) {
          data[idx + width * 4 - 8] += error * 5 / 200; // bottom left x2
        }
        if (x > 0) {
          data[idx + width * 4 - 4] += error * 12 / 200; // bottom left
        }
        data[idx + width * 4] += error * 26 / 200; // bottom
        if (x < width - 1) {
          data[idx + width * 4 + 4] += error * 12 / 200; // bottom right
        }
        if (x < width - 2) {
          data[idx + width * 4 + 8] += error * 5 / 200; // bottom right x2
        }
      }
      if (y < height - 2) {
        if (x > 2) {
          data[idx + width * 8 - 12] += error * 5 / 200; // bottom left x3, y+2
        }
        if (x > 1) {
          data[idx + width * 8 - 8] += error * 12 / 200; // bottom left x2, y+2
        }
        if (x > 0) {
          data[idx + width * 8 - 4] += error * 12 / 200; // bottom left, y+2
        }
        data[idx + width * 8] += error * 26 / 200; // bottom, y+2
        if (x < width - 1) {
          data[idx + width * 8 + 4] += error * 12 / 200; // bottom right, y+2
        }
        if (x < width - 2) {
          data[idx + width * 8 + 8] += error * 12 / 200; // bottom right x2, y+2
        }
        if (x < width - 3) {
          data[idx + width * 8 + 12] += error * 5 / 200; // bottom right x3, y+2
        }
      }
    }
  }
};

var stevensonArce = {
  apply: applyStevensonArce,
  name: 'Stevenson-Arce',
  description: 'A dithering algorithm that uses a 3x3 grid to distribute error',
  category: DITHER_CATEGORIES.ERROR_DIFFUSION,
  handle: 'stevensonArce'
};

var applyOstromukhov = function applyOstromukhov(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 0 : _settings$noise;
    settings.scale;
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var idx = (y * width + x) * 4;
      var gray = data[idx];

      // Add noise
      gray += (Math.random() - 0.5) * noise;

      // Apply threshold
      var newColor = gray < 128 ? 0 : 255;
      data[idx] = data[idx + 1] = data[idx + 2] = newColor;

      // Calculate error
      var error = gray - newColor;

      // Distribute error
      if (x < width - 1) {
        data[idx + 4] += error * 7 / 16; // right
      }
      if (y < height - 1) {
        if (x > 0) {
          data[idx + width * 4 - 4] += error * 3 / 16; // bottom left
        }
        data[idx + width * 4] += error * 5 / 16; // bottom
        if (x < width - 1) {
          data[idx + width * 4 + 4] += error * 1 / 16; // bottom right
        }
      }
    }
  }
};

var ostromukhov = {
  apply: applyOstromukhov,
  name: 'Ostromukhov',
  description: 'A dithering algorithm that uses a 2x2 grid to distribute error',
  category: DITHER_CATEGORIES.ERROR_DIFFUSION,
  handle: 'ostromukhov'
};

var applyGaussian = function applyGaussian(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 0 : _settings$noise;

  // Create a copy of the original data
  var originalData = new Uint8ClampedArray(data);
  // Create a buffer for error distribution
  var errorBuffer = new Float32Array(width * height);

  // Create a 3x3 Gaussian kernel
  var kernel = [[1, 2, 1], [2, 4, 2], [1, 2, 1]];
  var kernelSum = 16; // Sum of all kernel values

  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var idx = (y * width + x) * 4;
      var errorIdx = y * width + x;

      // Get original gray value and add accumulated error
      var gray = originalData[idx] + errorBuffer[errorIdx];

      // Add noise
      gray += (Math.random() - 0.5) * noise;

      // Apply threshold and ensure strictly black or white
      var newColor = gray < 128 ? 0 : 255;
      data[idx] = newColor;
      data[idx + 1] = newColor;
      data[idx + 2] = newColor;
      data[idx + 3] = 255; // Ensure full opacity

      // Calculate error
      var error = gray - newColor;

      // Distribute error using Gaussian kernel
      for (var ky = 0; ky < 3; ky++) {
        for (var kx = 0; kx < 3; kx++) {
          var newY = y + (ky - 1);
          var newX = x + (kx - 1);
          if (newY >= 0 && newY < height && newX >= 0 && newX < width) {
            var newErrorIdx = newY * width + newX;
            errorBuffer[newErrorIdx] += error * kernel[ky][kx] / kernelSum;
          }
        }
      }
    }
  }
};

var gaussian = {
  apply: applyGaussian,
  name: 'Gaussian',
  description: 'A dithering algorithm that uses a Gaussian distribution to distribute error',
  category: DITHER_CATEGORIES.ERROR_DIFFUSION,
  handle: 'gaussian'
};

var applyAtkinson = function applyAtkinson(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var noise = settings.noise;
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var idx = (y * width + x) * 4;
      var gray = data[idx];

      // Add noise
      gray += (Math.random() - 0.5) * noise;

      // Apply threshold
      var newColor = gray < 128 ? 0 : 255;
      data[idx] = data[idx + 1] = data[idx + 2] = newColor;

      // Calculate error
      var error = (gray - newColor) / 8;

      // Distribute error in Atkinson pattern
      if (x + 1 < width) {
        data[idx + 4] += error; // right
        if (x + 2 < width) {
          data[idx + 8] += error; // right x2
        }
      }
      if (y + 1 < height) {
        if (x - 1 >= 0) {
          data[idx + width * 4 - 4] += error; // bottom left
        }
        data[idx + width * 4] += error; // bottom
        if (x + 1 < width) {
          data[idx + width * 4 + 4] += error; // bottom right
        }
        if (y + 2 < height) {
          data[idx + width * 8] += error; // bottom x2
        }
      }
    }
  }
};

var atkinson = {
  apply: applyAtkinson,
  name: 'Atkinson',
  handle: 'atkinson',
  description: 'A dithering algorithm that uses a 3x3 grid to distribute error',
  category: DITHER_CATEGORIES.ERROR_DIFFUSION
};

var applyBayer = function applyBayer(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 0 : _settings$noise,
    _settings$scale = settings.scale,
    scale = _settings$scale === void 0 ? 1 : _settings$scale;

  // 4x4 Bayer matrix
  var bayerMatrix = [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]];
  var matrixSize = 4;
  var threshold = 16;
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var idx = (y * width + x) * 4;
      var gray = data[idx];

      // Add noise
      gray += (Math.random() - 0.5) * noise;

      // Apply Bayer dithering with scaling
      var scaledX = Math.floor(x / scale);
      var scaledY = Math.floor(y / scale);
      var thresholdValue = bayerMatrix[scaledY % matrixSize][scaledX % matrixSize] * threshold;
      var newColor = gray < thresholdValue ? 0 : 255;
      data[idx] = data[idx + 1] = data[idx + 2] = newColor;
    }
  }
};

var bayer = {
  apply: applyBayer,
  name: 'Bayer',
  description: 'A dithering algorithm that uses a Bayer matrix to distribute error',
  category: DITHER_CATEGORIES.ERROR_DIFFUSION,
  handle: 'bayer'
};

var applyOrdered = function applyOrdered(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 0 : _settings$noise,
    _settings$scale = settings.scale,
    scale = _settings$scale === void 0 ? 1 : _settings$scale;

  // 8x8 ordered dithering matrix
  var orderedMatrix = [[0, 32, 8, 40, 2, 34, 10, 42], [48, 16, 56, 24, 50, 18, 58, 26], [12, 44, 4, 36, 14, 46, 6, 38], [60, 28, 52, 20, 62, 30, 54, 22], [3, 35, 11, 43, 1, 33, 9, 41], [51, 19, 59, 27, 49, 17, 57, 25], [15, 47, 7, 39, 13, 45, 5, 37], [63, 31, 55, 23, 61, 29, 53, 21]];
  var matrixSize = 8;
  var threshold = 4;
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var idx = (y * width + x) * 4;
      var gray = data[idx];

      // Add noise
      gray += (Math.random() - 0.5) * noise;

      // Apply ordered dithering with scaling
      var scaledX = Math.floor(x / scale);
      var scaledY = Math.floor(y / scale);
      var thresholdValue = orderedMatrix[scaledY % matrixSize][scaledX % matrixSize] * threshold;
      var newColor = gray < thresholdValue ? 0 : 255;
      data[idx] = data[idx + 1] = data[idx + 2] = newColor;
    }
  }
};

var ordered = {
  apply: applyOrdered,
  name: 'Ordered',
  category: DITHER_CATEGORIES.ERROR_DIFFUSION,
  handle: 'ordered',
  description: 'A dithering algorithm that uses a 3x3 grid to distribute error'
};

var applyRandom = function applyRandom(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 0 : _settings$noise;
    settings.scale;
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var idx = (y * width + x) * 4;
      var gray = data[idx];

      // Add noise and random threshold
      var threshold = Math.random() * 255;
      gray += (Math.random() - 0.5) * noise;

      // Apply random dithering
      var newColor = gray < threshold ? 0 : 255;
      data[idx] = data[idx + 1] = data[idx + 2] = newColor;
    }
  }
};

var random = {
  apply: applyRandom,
  name: 'Random',
  description: 'A dithering algorithm that uses a random pattern to distribute error',
  category: DITHER_CATEGORIES.ERROR_DIFFUSION,
  handle: 'random'
};

var applyBurkes = function applyBurkes(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 0 : _settings$noise;
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var idx = (y * width + x) * 4;
      var gray = data[idx];

      // Add noise
      gray += (Math.random() - 0.5) * noise;

      // Apply threshold
      var newColor = gray < 128 ? 0 : 255;
      data[idx] = data[idx + 1] = data[idx + 2] = newColor;

      // Calculate error
      var error = gray - newColor;
      if (x < width - 1) {
        data[idx + 4] += error * 8 / 32; // right
      }
      if (x < width - 2) {
        data[idx + 8] += error * 4 / 32; // right x2
      }
      if (y < height - 1) {
        if (x > 1) {
          data[idx + width * 4 - 8] += error * 2 / 32; // bottom left x2
        }
        if (x > 0) {
          data[idx + width * 4 - 4] += error * 4 / 32; // bottom left
        }
        data[idx + width * 4] += error * 8 / 32; // bottom
        if (x < width - 1) {
          data[idx + width * 4 + 4] += error * 4 / 32; // bottom right
        }
        if (x < width - 2) {
          data[idx + width * 4 + 8] += error * 2 / 32; // bottom right x2
        }
      }
    }
  }
};

var burkes = {
  apply: applyBurkes,
  name: 'Burkes',
  description: 'A dithering algorithm that uses a 3x3 grid to distribute error',
  category: DITHER_CATEGORIES.ERROR_DIFFUSION,
  handle: 'burkes'
};

var applySierra = function applySierra(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 0 : _settings$noise;
    settings.scale;
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var idx = (y * width + x) * 4;
      var gray = data[idx];

      // Add noise
      gray += (Math.random() - 0.5) * noise;

      // Apply threshold
      var newColor = gray < 128 ? 0 : 255;
      data[idx] = data[idx + 1] = data[idx + 2] = newColor;

      // Calculate error
      var error = gray - newColor;
      if (x < width - 1) {
        data[idx + 4] += error * 5 / 32; // right
      }
      if (x < width - 2) {
        data[idx + 8] += error * 3 / 32; // right x2
      }
      if (y < height - 1) {
        if (x > 1) {
          data[idx + width * 4 - 8] += error * 2 / 32; // bottom left x2
        }
        if (x > 0) {
          data[idx + width * 4 - 4] += error * 4 / 32; // bottom left
        }
        data[idx + width * 4] += error * 5 / 32; // bottom
        if (x < width - 1) {
          data[idx + width * 4 + 4] += error * 4 / 32; // bottom right
        }
        if (x < width - 2) {
          data[idx + width * 4 + 8] += error * 2 / 32; // bottom right x2
        }
      }
      if (y < height - 2) {
        if (x > 1) {
          data[idx + width * 8 - 8] += error * 1 / 32; // bottom left x2, y+2
        }
        if (x > 0) {
          data[idx + width * 8 - 4] += error * 2 / 32; // bottom left, y+2
        }
        data[idx + width * 8] += error * 3 / 32; // bottom, y+2
        if (x < width - 1) {
          data[idx + width * 8 + 4] += error * 2 / 32; // bottom right, y+2
        }
        if (x < width - 2) {
          data[idx + width * 8 + 8] += error * 1 / 32; // bottom right x2, y+2
        }
      }
    }
  }
};

var sierra = {
  apply: applySierra,
  name: 'Sierra',
  description: 'A dithering algorithm that uses a 3x3 grid to distribute error',
  category: DITHER_CATEGORIES.ERROR_DIFFUSION,
  handle: 'sierra'
};

var applyHalftone = function applyHalftone(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 0 : _settings$noise;
  var scale = 1;

  // 2x2 halftone pattern
  var halftoneMatrix = [[0, 2], [3, 1]];
  var matrixSize = 2;
  var threshold = 64;
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var idx = (y * width + x) * 4;
      var gray = data[idx];

      // Add noise
      gray += (Math.random() - 0.5) * noise;

      // Apply halftone dithering with scaling
      var scaledX = Math.floor(x / scale);
      var scaledY = Math.floor(y / scale);
      var thresholdValue = halftoneMatrix[scaledY % matrixSize][scaledX % matrixSize] * threshold;
      var newColor = gray < thresholdValue ? 0 : 255;
      data[idx] = data[idx + 1] = data[idx + 2] = newColor;
    }
  }
};

var halftone = {
  apply: applyHalftone,
  name: 'Halftone',
  description: 'A dithering algorithm that uses a 2x2 grid to distribute error',
  category: DITHER_CATEGORIES.ERROR_DIFFUSION,
  handle: 'halftone'
};

var applyStucki = function applyStucki(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 0 : _settings$noise,
    _settings$scale = settings.scale,
    scale = _settings$scale === void 0 ? 1 : _settings$scale;
  for (var y = 0; y < height; y += scale) {
    for (var x = 0; x < width; x += scale) {
      var idx = (y * width + x) * 4;
      var gray = data[idx];

      // Add noise
      gray += (Math.random() - 0.5) * noise;

      // Apply threshold
      var newColor = gray < 128 ? 0 : 255;
      data[idx] = data[idx + 1] = data[idx + 2] = newColor;

      // Calculate error
      var error = gray - newColor;

      // Distribute error using Stucki matrix
      // First row
      if (x < width - scale) {
        data[idx + scale * 4] += error * 8 / 42;
      }
      if (x < width - scale * 2) {
        data[idx + scale * 8] += error * 4 / 42;
      }

      // Second row
      if (y < height - scale) {
        var nextRow = idx + width * scale * 4;
        if (x > 0) {
          data[nextRow - scale * 4] += error * 2 / 42;
        }
        if (x < width - scale) {
          data[nextRow + scale * 4] += error * 4 / 42;
        }
        if (x < width - scale * 2) {
          data[nextRow + scale * 8] += error * 2 / 42;
        }
        data[nextRow] += error * 8 / 42;
        if (x < width - scale) {
          data[nextRow + scale * 4] += error * 4 / 42;
        }
      }

      // Third row
      if (y < height - scale * 2) {
        var nextNextRow = idx + width * scale * 8;
        if (x > 0) {
          data[nextNextRow - scale * 4] += error * 1 / 42;
        }
        if (x < width - scale) {
          data[nextNextRow + scale * 4] += error * 2 / 42;
        }
        if (x < width - scale * 2) {
          data[nextNextRow + scale * 8] += error * 1 / 42;
        }
        data[nextNextRow] += error * 4 / 42;
        if (x < width - scale) {
          data[nextNextRow + scale * 4] += error * 2 / 42;
        }
      }
    }
  }
};

var stucki = {
  apply: applyStucki,
  name: 'Stucki',
  description: 'A dithering algorithm that uses a 3x3 grid to distribute error',
  category: DITHER_CATEGORIES.ERROR_DIFFUSION,
  handle: 'stucki'
};

// 8x8 Bayer matrix for ordered dithering
var BAYER_MATRIX$1 = [[0, 48, 12, 60, 3, 51, 15, 63], [32, 16, 44, 28, 35, 19, 47, 31], [8, 56, 4, 52, 11, 59, 7, 55], [40, 24, 36, 20, 43, 27, 39, 23], [2, 50, 14, 62, 1, 49, 13, 61], [34, 18, 46, 30, 33, 17, 45, 29], [10, 58, 6, 54, 9, 57, 5, 53], [42, 26, 38, 22, 41, 25, 37, 21]];
var applyBayerOrdered = function applyBayerOrdered(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 0 : _settings$noise;

  // Create a copy of the original data to avoid modifying it during processing
  var originalData = new Uint8ClampedArray(data);
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var i = (y * width + x) * 4;

      // Get the grayscale value from the original data
      var gray = originalData[i] * 0.299 + originalData[i + 1] * 0.587 + originalData[i + 2] * 0.114;

      // Get the threshold from the Bayer matrix
      var threshold = BAYER_MATRIX$1[y % 8][x % 8] / 64 * 255;

      // Add noise if specified
      var noiseValue = noise > 0 ? (Math.random() - 0.5) * noise * 255 : 0;

      // Apply threshold with noise
      var newColor = gray + noiseValue < threshold ? 0 : 255;

      // Set the new color
      data[i] = newColor; // R
      data[i + 1] = newColor; // G
      data[i + 2] = newColor; // B
      data[i + 3] = 255; // A
    }
  }
};

var bayerOrdered = {
  apply: applyBayerOrdered,
  name: 'Bayer Ordered',
  description: 'A dithering algorithm that uses a Bayer matrix to distribute error',
  category: DITHER_CATEGORIES.ORDERED_DITHERING,
  handle: 'bayerOrdered'
};

// 2x2 Bayer matrix
var bayer2x2 = [[0, 2], [3, 1]];
var applyBayerMatrix2x2 = function applyBayerMatrix2x2(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 0 : _settings$noise;
  var matrixSize = 2;
  var matrixScale = 4; // 2x2 matrix has values 0-3

  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var idx = (y * width + x) * 4;
      var gray = data[idx]; // Use red channel (assume grayscale input)
      // Add noise
      if (noise > 0) {
        gray += (Math.random() - 0.5) * noise;
      }
      // Get threshold from Bayer matrix
      var threshold = (bayer2x2[y % matrixSize][x % matrixSize] + 0.5) * (255 / matrixScale);
      var value = gray > threshold ? 255 : 0;
      data[idx] = data[idx + 1] = data[idx + 2] = value;
      data[idx + 3] = 255;
    }
  }
};

var bayerMatrix2x2 = {
  apply: applyBayerMatrix2x2,
  name: 'Bayer Matrix 2x2',
  description: 'A dithering algorithm that uses a 2x2 grid to distribute error',
  category: DITHER_CATEGORIES.ORDERED_DITHERING,
  handle: 'bayerMatrix2x2'
};

// 4x4 Bayer matrix
var bayer4x4 = [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]];
var applyBayerMatrix4x4 = function applyBayerMatrix4x4(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 0 : _settings$noise;
  var matrixSize = 4;
  var matrixScale = 16; // 4x4 matrix has values 0-15

  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var idx = (y * width + x) * 4;
      var gray = data[idx]; // Use red channel (assume grayscale input)
      // Add noise
      if (noise > 0) {
        gray += (Math.random() - 0.5) * noise;
      }
      // Get threshold from Bayer matrix
      var threshold = (bayer4x4[y % matrixSize][x % matrixSize] + 0.5) * (255 / matrixScale);
      var value = gray > threshold ? 255 : 0;
      data[idx] = data[idx + 1] = data[idx + 2] = value;
      data[idx + 3] = 255;
    }
  }
};

var bayerMatrix4x4 = {
  apply: applyBayerMatrix4x4,
  name: 'Bayer Matrix 4x4',
  description: 'A dithering algorithm that uses a 4x4 grid to distribute error',
  category: DITHER_CATEGORIES.ORDERED_DITHERING,
  handle: 'bayerMatrix4x4'
};

// 8x8 Bayer matrix with void pattern
var BAYER_VOID_MATRIX = [[0, 48, 12, 60, 3, 51, 15, 63], [32, 16, 44, 28, 35, 19, 47, 31], [8, 56, 4, 52, 11, 59, 7, 55], [40, 24, 36, 20, 43, 27, 39, 23], [2, 50, 14, 62, 1, 49, 13, 61], [34, 18, 46, 30, 33, 17, 45, 29], [10, 58, 6, 54, 9, 57, 5, 53], [42, 26, 38, 22, 41, 25, 37, 21]];

// Void pattern - areas where we'll force white pixels
var VOID_PATTERN = [[0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0]];
var applyBayerVoid = function applyBayerVoid(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 0 : _settings$noise;

  // Create a copy of the original data to avoid modifying it during processing
  var originalData = new Uint8ClampedArray(data);
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var i = (y * width + x) * 4;

      // Get the grayscale value from the original data
      var gray = originalData[i] * 0.299 + originalData[i + 1] * 0.587 + originalData[i + 2] * 0.114;

      // Check if we're in a void area
      if (VOID_PATTERN[y % 8][x % 8] === 1) {
        // Force white in void areas
        data[i] = data[i + 1] = data[i + 2] = 255;
        data[i + 3] = 255;
        continue;
      }

      // Get the threshold from the Bayer matrix
      var threshold = BAYER_VOID_MATRIX[y % 8][x % 8] / 64 * 255;

      // Add noise if specified
      var noiseValue = noise > 0 ? (Math.random() - 0.5) * noise * 255 : 0;

      // Apply threshold with noise
      var newColor = gray + noiseValue < threshold ? 0 : 255;

      // Set the new color
      data[i] = newColor; // R
      data[i + 1] = newColor; // G
      data[i + 2] = newColor; // B
      data[i + 3] = 255; // A
    }
  }
};

var bayerVoid = {
  apply: applyBayerVoid,
  name: 'Bayer Void',
  description: 'A dithering algorithm that uses a Bayer matrix to distribute error',
  category: DITHER_CATEGORIES.ORDERED_DITHERING,
  handle: 'bayerVoid'
};

// 8x8 Bayer matrix for ordered dithering
var BAYER_MATRIX = [[0, 48, 12, 60, 3, 51, 15, 63], [32, 16, 44, 28, 35, 19, 47, 31], [8, 56, 4, 52, 11, 59, 7, 55], [40, 24, 36, 20, 43, 27, 39, 23], [2, 50, 14, 62, 1, 49, 13, 61], [34, 18, 46, 30, 33, 17, 45, 29], [10, 58, 6, 54, 9, 57, 5, 53], [42, 26, 38, 22, 41, 25, 37, 21]];
var applyRandomOrdered = function applyRandomOrdered(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 0 : _settings$noise;

  // Create a copy of the original data to avoid modifying it during processing
  var originalData = new Uint8ClampedArray(data);
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var i = (y * width + x) * 4;
      // Get the grayscale value from the original data
      var gray = originalData[i] * 0.299 + originalData[i + 1] * 0.587 + originalData[i + 2] * 0.114;
      // Get the threshold from the Bayer matrix, add a random offset
      var baseThreshold = BAYER_MATRIX[y % 8][x % 8] / 64 * 255;
      var randomJitter = (Math.random() - 0.5) * 64; // Jitter up to +/-32
      var threshold = Math.max(0, Math.min(255, baseThreshold + randomJitter));
      // Add noise if specified
      var noiseValue = noise > 0 ? (Math.random() - 0.5) * noise * 255 : 0;
      // Apply threshold with noise and jitter
      var newColor = gray + noiseValue < threshold ? 0 : 255;
      // Set the new color
      data[i] = newColor; // R
      data[i + 1] = newColor; // G
      data[i + 2] = newColor; // B
      data[i + 3] = 255; // A
    }
  }
};

var randomOrdered = {
  apply: applyRandomOrdered,
  name: 'Random-Ordered',
  description: 'A dithering algorithm that uses a random order to distribute error',
  category: DITHER_CATEGORIES.ORDERED_DITHERING,
  handle: 'randomOrdered'
};

var applyMosaic = function applyMosaic(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 0 : _settings$noise,
    _settings$blockSize = settings.blockSize,
    blockSize = _settings$blockSize === void 0 ? 8 : _settings$blockSize;
  for (var by = 0; by < height; by += blockSize) {
    for (var bx = 0; bx < width; bx += blockSize) {
      // Compute average brightness for the block
      var sum = 0;
      var count = 0;
      for (var y = by; y < by + blockSize && y < height; y++) {
        for (var x = bx; x < bx + blockSize && x < width; x++) {
          var idx = (y * width + x) * 4;
          sum += data[idx]; // Use red channel (assume grayscale input)
          count++;
        }
      }
      var avg = sum / count;
      // Add noise
      if (noise > 0) {
        avg += (Math.random() - 0.5) * noise;
      }
      var value = avg > 128 ? 255 : 0;
      // Set all pixels in the block to the thresholded value
      for (var _y = by; _y < by + blockSize && _y < height; _y++) {
        for (var _x = bx; _x < bx + blockSize && _x < width; _x++) {
          var _idx = (_y * width + _x) * 4;
          data[_idx] = data[_idx + 1] = data[_idx + 2] = value;
          data[_idx + 3] = 255;
        }
      }
    }
  }
};

var mosaic = {
  apply: applyMosaic,
  name: 'Mosaic',
  description: 'A dithering algorithm that uses a mosaic to distribute error',
  category: DITHER_CATEGORIES.ORDERED_DITHERING,
  handle: 'mosaic'
};

var applyBitTone = function applyBitTone(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 0 : _settings$noise;
  var levels = 4;

  // Clamp levels to at least 2
  levels = Math.max(2, Math.round(levels));
  var step = 255 / (levels - 1);
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var idx = (y * width + x) * 4;
      var gray = data[idx]; // Use red channel (assume grayscale input)
      // Add noise
      if (noise > 0) {
        gray += (Math.random() - 0.5) * noise;
      }
      // Quantize to nearest level
      var quant = Math.round(gray / step) * step;
      // Threshold to black or white based on quantized value
      var value = quant > 128 ? 255 : 0;
      data[idx] = data[idx + 1] = data[idx + 2] = value;
      data[idx + 3] = 255;
    }
  }
};

var bitTone = {
  apply: applyBitTone,
  name: 'Bit Tone',
  description: 'A dithering algorithm that uses a bit tone to distribute error',
  category: DITHER_CATEGORIES.ORDERED_DITHERING,
  handle: 'bitTone'
};

var clamp = function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
};

// Draw a colored line of given width using Bresenham's algorithm
var drawLine$1 = function drawLine(data, width, height, x0, y0, x1, y1, color) {
  var lineWidth = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 1;
  var dx = Math.abs(x1 - x0),
    sx = x0 < x1 ? 1 : -1;
  var dy = -Math.abs(y1 - y0),
    sy = y0 < y1 ? 1 : -1;
  var err = dx + dy,
    e2;
  while (true) {
    for (var w = -Math.floor(lineWidth / 2); w <= Math.floor(lineWidth / 2); w++) {
      var px = x0,
        py = y0 + w;
      if (px >= 0 && px < width && py >= 0 && py < height) {
        var idx = (py * width + px) * 4;
        data[idx] = color[0];
        data[idx + 1] = color[1];
        data[idx + 2] = color[2];
        data[idx + 3] = 255;
      }
    }
    if (x0 === x1 && y0 === y1) break;
    e2 = 2 * err;
    if (e2 >= dy) {
      err += dy;
      x0 += sx;
    }
    if (e2 <= dx) {
      err += dx;
      y0 += sy;
    }
  }
};
var applyVignette = function applyVignette(x, y, width, height, vignetteStrength) {
  var cx = width / 2,
    cy = height / 2;
  var dx = (x - cx) / cx;
  var dy = (y - cy) / cy;
  var dist = Math.sqrt(dx * dx + dy * dy);
  return 1.0 - vignetteStrength * Math.pow(dist, 2.5);
};
var applyBarrelDistortion = function applyBarrelDistortion(x, y, width, height, barrelStrength, glitch) {
  var cx = width / 2,
    cy = height / 2;
  var nx = (x - cx) / cx;
  var ny = (y - cy) / cy;
  var r = Math.sqrt(nx * nx + ny * ny);
  var theta = Math.atan2(ny, nx);
  var rn = r + barrelStrength * Math.pow(r, 3);
  var sx = cx + rn * cx * Math.cos(theta) + glitch;
  var sy = cy + rn * cy * Math.sin(theta);
  return [sx, sy];
};

// --- YIQ conversion ---
var rgb2yiq = function rgb2yiq(r, g, b) {
  // Scale input to 0-1 range
  r = r / 255;
  g = g / 255;
  b = b / 255;
  var y = 0.299 * r + 0.587 * g + 0.114 * b;
  var i = 0.596 * r - 0.274 * g - 0.322 * b;
  var q = 0.211 * r - 0.523 * g + 0.312 * b;

  // Scale output to match Processing's range
  return [y * 256, i * 256, q * 256];
};
var yiq2rgb = function yiq2rgb(y, i, q) {
  // Scale input from Processing's range to 0-1
  y = y / 256;
  i = i / 256;
  q = q / 256;
  var r = y + 0.956 * i + 0.621 * q;
  var g = y - 0.272 * i - 0.647 * q;
  var b = y - 1.106 * i + 1.703 * q;

  // Scale back to 0-255 and clamp
  r = Math.max(0, Math.min(255, r * 255));
  g = Math.max(0, Math.min(255, g * 255));
  b = Math.max(0, Math.min(255, b * 255));
  return [r, g, b];
};

// Helper: RGB to HSB
var rgb2hsb = function rgb2hsb(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h = 0,
    s = 0,
    v = max;
  var d = max - min;
  s = max === 0 ? 0 : d / max;
  if (max === min) h = 0;else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return [h * 255, s * 255, v * 255];
};

// Helper: HSB to RGB
var hsb2rgb = function hsb2rgb(h, s, v) {
  h /= 255;
  s /= 255;
  v /= 255;
  var r = 0,
    g = 0,
    b = 0;
  var i = Math.floor(h * 6);
  var f = h * 6 - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0:
      r = v, g = t, b = p;
      break;
    case 1:
      r = q, g = v, b = p;
      break;
    case 2:
      r = p, g = v, b = t;
      break;
    case 3:
      r = p, g = q, b = v;
      break;
    case 4:
      r = t, g = p, b = v;
      break;
    case 5:
      r = v, g = p, b = q;
      break;
  }
  return [clamp(Math.round(r * 255), 0, 255), clamp(Math.round(g * 255), 0, 255), clamp(Math.round(b * 255), 0, 255)];
};

// Simple 1D box blur for smoothing
var smoothLine = function smoothLine(line, roughness) {
  var radius = Math.max(1, Math.round(roughness));
  var smoothed = new Array(line.length).fill(0);
  for (var i = 0; i < line.length; i++) {
    var sum = 0,
      count = 0;
    for (var k = -radius; k <= radius; k++) {
      var idx = i + k;
      if (idx >= 0 && idx < line.length) {
        sum += line[idx];
        count++;
      }
    }
    smoothed[i] = sum / count;
  }
  return smoothed;
};

// Helper: map value from one range to another
var map = function map(val, a, b, c, d) {
  return c + (val - a) * (d - c) / (b - a);
};

// Helper: get channel value (0=R, 1=G, 2=B, 3=H, 4=S, 5=V)
var getChan = function getChan(no, r, g, b, h, s, v, negative) {
  var t = 0;
  switch (no) {
    case 0:
      t = r;
      break;
    case 1:
      t = g;
      break;
    case 2:
      t = b;
      break;
    case 3:
      t = h;
      break;
    case 4:
      t = s;
      break;
    default:
      t = v;
      break;
  }
  return negative ? map(t, 0, 255, 1, 0) : map(t, 0, 255, 0, 1);
};

// Helper: Simple RGB to HSL and back for hue/saturation manipulation
var rgbToHsl = function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h = 0,
    s = 0,
    l = (max + min) / 2;
  if (max !== min) {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return [h, s, l];
};
var hslToRgb = function hslToRgb(h, s, l) {
  var r, g, b;
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    var hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};

var applyCrt = function applyCrt(image, settings) {
  var _settings$amplitude, _settings$amplitude2, _settings$noise, _settings$phase, _settings$noise2;
  var width = image.width,
    height = image.height,
    data = image.data;

  // Parameters mapped from settings
  var scanlineDensity = Math.max(1, settings.frequency * 12.5); // more frequency = denser scanlines
  var scanlineStrength = 0.35 + 2.25 * (settings.frequency - 1);
  var vignetteStrength = 0.5;
  var barrelStrength = ((_settings$amplitude = settings.amplitude) !== null && _settings$amplitude !== void 0 ? _settings$amplitude : 1) * 0.25; // more amplitude = more curve
  var colorBoost = 1.25 + 0.25 * (((_settings$amplitude2 = settings.amplitude) !== null && _settings$amplitude2 !== void 0 ? _settings$amplitude2 : 1) - 1); // boost with amplitude
  var glitchStrength = ((_settings$noise = settings.noise) !== null && _settings$noise !== void 0 ? _settings$noise : 0) * 0.0005;
  var phase = (_settings$phase = settings.phase) !== null && _settings$phase !== void 0 ? _settings$phase : 0;
  var orig = new Uint8ClampedArray(data);
  var rgbShift = 2 + ((_settings$noise2 = settings.noise) !== null && _settings$noise2 !== void 0 ? _settings$noise2 : 0) * 2;

  // Aperture grille mask (vertical RGB stripes)
  var maskStrength = 0.6; // 0 = no mask, 1 = only one color per stripe

  for (var y = 0; y < height; y++) {
    // Scanline: smooth sine-based
    var scanline = 1.0 - scanlineStrength * (Math.sin(y / scanlineDensity + phase * Math.PI * 2) * 0.5 + 0.5);
    // Glitch: sine-based horizontal offset
    var glitch = glitchStrength > 0 ? Math.round(Math.sin(y * 0.12 + phase * 10) * glitchStrength) : 0;
    for (var x = 0; x < width; x++) {
      // Barrel distortion (as in shader)
      var _applyBarrelDistortio = applyBarrelDistortion(x, y, width, height, barrelStrength, glitch),
        _applyBarrelDistortio2 = _slicedToArray(_applyBarrelDistortio, 2),
        sx = _applyBarrelDistortio2[0],
        sy = _applyBarrelDistortio2[1];
      // Clamp to image bounds
      var srcX = Math.max(0, Math.min(width - 1, Math.round(sx)));
      var srcY = Math.max(0, Math.min(height - 1, Math.round(sy)));

      // RGB shift
      var rSrcX = Math.max(0, Math.min(width - 1, Math.round(sx - rgbShift)));
      var bSrcX = Math.max(0, Math.min(width - 1, Math.round(sx + rgbShift)));
      var rIdx = (srcY * width + rSrcX) * 4;
      var gIdx = (srcY * width + srcX) * 4;
      var bIdx = (srcY * width + bSrcX) * 4;
      var rCol = orig[rIdx];
      var gCol = orig[gIdx + 1];
      var bCol = orig[bIdx + 2];

      // Apply scanline
      rCol *= scanline;
      gCol *= scanline;
      bCol *= scanline;

      // Vignette/edge fade (as in shader)
      var vignette = applyVignette(x, y, width, height, vignetteStrength);
      rCol *= vignette;
      gCol *= vignette;
      bCol *= vignette;

      // Color boost (nonlinear for glow)
      rCol = Math.pow(rCol / 255, 0.9) * 255 * colorBoost;
      gCol = Math.pow(gCol / 255, 0.9) * 255 * colorBoost;
      bCol = Math.pow(bCol / 255, 0.9) * 255 * colorBoost;

      // Apply aperture grille mask
      {
        if (x % 3 === 0) {
          // Red stripe
          gCol *= maskStrength;
          bCol *= maskStrength;
        } else if (x % 3 === 1) {
          // Green stripe
          rCol *= maskStrength;
          bCol *= maskStrength;
        } else {
          // Blue stripe
          rCol *= maskStrength;
          gCol *= maskStrength;
        }
      }

      // Clamp
      var idx = (y * width + x) * 4;
      data[idx] = Math.max(0, Math.min(255, rCol));
      data[idx + 1] = Math.max(0, Math.min(255, gCol));
      data[idx + 2] = Math.max(0, Math.min(255, bCol));
      data[idx + 3] = 255;
    }
  }
};

var crt = {
  apply: applyCrt,
  name: 'CRT',
  description: 'A dithering algorithm that creates a CRT effect',
  category: DITHER_CATEGORIES.GLITCH_EFFECTS,
  handle: 'crt'
};

// Atkinson-VHS: Monochrome Atkinson dithering with VHS scanline effect
var applyAtkinsonVHS = function applyAtkinsonVHS(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 0 : _settings$noise;

  // Atkinson dithering with scanlines (monochrome only)
  var originalData = new Uint8ClampedArray(data);
  var scanlineStrength = 0.25; // 0 = no scanline, 1 = full black

  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var idx = (y * width + x) * 4;
      // Get grayscale value from original data
      var gray = originalData[idx] * 0.299 + originalData[idx + 1] * 0.587 + originalData[idx + 2] * 0.114;
      // Add noise
      gray += (Math.random() - 0.5) * noise;
      // Atkinson threshold
      var newColor = gray < 128 ? 0 : 255;
      // Scanline effect: darken every other row
      var scanline = 1;
      if (y % 2 === 1) scanline = 1 - scanlineStrength;
      var out = newColor * scanline;
      data[idx] = out;
      data[idx + 1] = out;
      data[idx + 2] = out;
      data[idx + 3] = 255;
      // Atkinson error diffusion
      var error = (gray - newColor) / 8;
      if (x + 1 < width) data[idx + 4] += error;
      if (x + 2 < width) data[idx + 8] += error;
      if (y + 1 < height) {
        if (x > 0) data[idx + width * 4 - 4] += error;
        data[idx + width * 4] += error;
        if (x + 1 < width) data[idx + width * 4 + 4] += error;
      }
      if (y + 2 < height) data[idx + width * 8] += error;
    }
  }
};

var atkinsonVHS = {
  apply: applyAtkinsonVHS,
  name: 'Atkinson-VHS',
  description: 'A dithering algorithm that creates a VHS scanline effect',
  category: DITHER_CATEGORIES.GLITCH_EFFECTS,
  handle: 'atkinsonVHS'
};

// --- LowpassFilter class ---
var LowpassFilter = /*#__PURE__*/function () {
  function LowpassFilter() {
    _classCallCheck(this, LowpassFilter);
    _defineProperty(this, "prev", 0);
    _defineProperty(this, "alpha", 0);
  }
  return _createClass(LowpassFilter, [{
    key: "setFilter",
    value: function setFilter(rate, hz) {
      var timeInterval = 1.0 / rate;
      var tau = 1.0 / (hz * 2 * Math.PI);
      this.alpha = timeInterval / (tau + timeInterval);
    }
  }, {
    key: "resetFilter",
    value: function resetFilter() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.prev = val;
    }
  }, {
    key: "lowpass",
    value: function lowpass(sample) {
      this.prev = this.prev + this.alpha * (sample - this.prev);
      return this.prev;
    }
  }, {
    key: "highpass",
    value: function highpass(sample) {
      return sample - this.lowpass(sample);
    }
  }]);
}();

// --- Main composite video simulation ---
var applyCompositeVideo = function applyCompositeVideo(image, settings) {
  var _settings$amplitude, _settings$phase, _settings$noise, _settings$frequency;
  var data = image.data,
    width = image.width,
    height = image.height;
  var amplitude = (_settings$amplitude = settings.amplitude) !== null && _settings$amplitude !== void 0 ? _settings$amplitude : 1;
  var phase = (_settings$phase = settings.phase) !== null && _settings$phase !== void 0 ? _settings$phase : 0;
  var noise = (_settings$noise = settings.noise) !== null && _settings$noise !== void 0 ? _settings$noise : 0;
  var frequency = (_settings$frequency = settings.frequency) !== null && _settings$frequency !== void 0 ? _settings$frequency : 1;
  var subcarrier_amplitude = 40 * amplitude;
  var subcarrier_amplitude_back = 40 * amplitude;
  var video_scanline_phase_shift = phase;
  var video_scanline_phase_shift_offset = phase;
  var composite_preemphasis = 1; // Composite preemphasis: controls the amount of preemphasis applied to the signal
  var composite_preemphasis_cut = 315000000 / 88.0;
  var video_noise = 4000 * noise;
  var video_chroma_noise = 4000 * noise;
  var video_chroma_phase_noise = 15 * amplitude;
  var video_chroma_loss = 0.124; // loss of color information
  var vhs_out_sharpen = 2;
  var video_recombine = 0;
  var fm_omega = 0.62 * frequency;
  var fm_phase = phase; // FM phase: controls the phase of the FM wave
  var fm_lightness = 0.62; // FM lightness: controls how much of the signal is used for FM
  var fm_noise = noise > 0; // FM noise: controls if noise is added to the FM signal
  var fm_noise_start = 0.92 - 0.5 * noise;
  var fm_noise_stop = 1.0 + 0.5 * noise;
  var emulating_vhs = [2400000, 320000, 9]; // VHS_SP
  var fm_modulation_strength = 32 * amplitude; // Use in FM modulation step
  var brightness_compensation = 30; // Use in FM modulation step

  // --- 1. Convert to YIQ ---
  var Y = new Float32Array(width * height);
  var I = new Float32Array(width * height);
  var Q = new Float32Array(width * height);
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var idx = (y * width + x) * 4;
      var _rgb2yiq = rgb2yiq(data[idx], data[idx + 1], data[idx + 2]),
        _rgb2yiq2 = _slicedToArray(_rgb2yiq, 3),
        yy = _rgb2yiq2[0],
        ii = _rgb2yiq2[1],
        qq = _rgb2yiq2[2];
      Y[y * width + x] = yy;
      I[y * width + x] = ii;
      Q[y * width + x] = qq;
    }
  }

  // --- 2. Chroma lowpass (horizontal blur) ---
  function composite_lowpass(I, Q) {
    for (var _y = 0; _y < height; _y++) {
      var prevI = I[_y * width];
      var prevQ = Q[_y * width];
      for (var _x = 1; _x < width; _x++) {
        var _idx = _y * width + _x;
        I[_idx] = (I[_idx] + prevI) / 2;
        Q[_idx] = (Q[_idx] + prevQ) / 2;
        prevI = I[_idx];
        prevQ = Q[_idx];
      }
    }
  }
  composite_lowpass(I, Q);

  // --- 3. QAM: chroma_into_luma ---
  var Umult = [1, 0, -1, 0];
  var Vmult = [0, 1, 0, -1];
  function chroma_into_luma(Y, I, Q) {
    for (var _y2 = 0; _y2 < height; _y2++) {
      var xi = void 0;
      if (video_scanline_phase_shift === 90) xi = video_scanline_phase_shift_offset + (_y2 >> 1) & 3;else if (video_scanline_phase_shift === 180) xi = (_y2 & 2) + video_scanline_phase_shift_offset & 3;else if (video_scanline_phase_shift === 270) xi = video_scanline_phase_shift_offset - (_y2 >> 1) & 3;else xi = video_scanline_phase_shift_offset & 3;
      for (var _x2 = 0; _x2 < width; _x2++) {
        var sxi = _x2 + xi & 3;
        var _idx2 = _y2 * width + _x2;
        var chroma = I[_idx2] * subcarrier_amplitude * Umult[sxi];
        chroma += Q[_idx2] * subcarrier_amplitude * Vmult[sxi];
        Y[_idx2] += chroma / 50;
        I[_idx2] = 0;
        Q[_idx2] = 0;
      }
    }
  }
  chroma_into_luma(Y, I, Q);

  // --- 4. Preemphasis (luma highpass) ---
  {
    var pre = new LowpassFilter();
    pre.setFilter(315000000.0 * 4.0 / 88.0, composite_preemphasis_cut);
    for (var _y3 = 0; _y3 < height; _y3++) {
      pre.resetFilter(16);
      for (var _x3 = 0; _x3 < width; _x3++) {
        var _idx3 = _y3 * width + _x3;
        var s = Y[_idx3];
        s += pre.highpass(s) * composite_preemphasis;
        Y[_idx3] = s;
      }
    }
  }

  // --- 5. Luma noise ---
  if (video_noise !== 0) {
    var noise_amplitude = video_noise / 32; // much lower, tune as needed
    for (var i = 0; i < Y.length; i++) {
      Y[i] = clamp(Y[i] + (Math.random() - 0.5) * noise_amplitude, 0, 255);
    }
  }

  // --- 6. QAM: chroma_from_luma ---
  function chroma_from_luma(Y, I, Q) {
    var chroma = new Float32Array(width);
    for (var _y4 = 0; _y4 < height; _y4++) {
      var sum = 0;
      var delay = [0, 0, 0, 0];
      var off = _y4 * width;
      delay[2] = Y[off];
      sum += delay[2];
      delay[3] = Y[off + 1];
      sum += delay[3];
      var _x4 = void 0;
      for (_x4 = 0; _x4 < width; _x4++) {
        var c = void 0;
        if (_x4 + 2 < width) c = Y[off + _x4 + 2];else c = 0;
        sum -= delay[0];
        for (var j = 0; j < 3; j++) delay[j] = delay[j + 1];
        delay[3] = c;
        sum += delay[3];
        Y[_x4 + off] = sum / 4;
        chroma[_x4] = c - Y[_x4 + off];
      }
      var xi = void 0;
      if (video_scanline_phase_shift === 90) xi = video_scanline_phase_shift_offset + (_y4 >> 1) & 3;else if (video_scanline_phase_shift === 180) xi = (_y4 & 2) + video_scanline_phase_shift_offset & 3;else if (video_scanline_phase_shift === 270) xi = video_scanline_phase_shift_offset - (_y4 >> 1) & 3;else xi = video_scanline_phase_shift_offset & 3;
      for (_x4 = 4 - xi & 3; _x4 + 3 < width; _x4 += 4) {
        chroma[_x4 + 2] = -chroma[_x4 + 2];
        chroma[_x4 + 3] = -chroma[_x4 + 3];
      }
      for (_x4 = 0; _x4 < width; _x4++) {
        chroma[_x4] = chroma[_x4] * 50 / subcarrier_amplitude_back;
      }
      for (_x4 = 0; _x4 + xi + 1 < width; _x4 += 2) {
        I[_x4 + off] = -chroma[_x4 + xi];
        Q[_x4 + off] = -chroma[_x4 + xi + 1];
      }
      for (; _x4 < width; _x4 += 2) {
        I[_x4 + off] = 0;
        Q[_x4 + off] = 0;
      }
      for (_x4 = 0; _x4 + 2 < width; _x4 += 2) {
        I[_x4 + off + 1] = (I[_x4 + off] + I[_x4 + off + 2]) / 2;
        Q[_x4 + off + 1] = (Q[_x4 + off] + Q[_x4 + off + 2]) / 2;
      }
      for (; _x4 < width; _x4++) {
        I[_x4 + off] = 0;
        Q[_x4 + off] = 0;
      }
    }
  }
  chroma_from_luma(Y, I, Q);

  // --- 7. FM/tape errors ---
  {
    var lpf = new LowpassFilter();
    var lpf2 = new LowpassFilter();
    var lpf3 = new LowpassFilter();
    lpf.setFilter(emulating_vhs[0], emulating_vhs[1]);
    lpf2.setFilter(emulating_vhs[0], emulating_vhs[1]);
    lpf3.setFilter(emulating_vhs[0], emulating_vhs[1]);
    for (var _y5 = 0; _y5 < height; _y5++) {
      var sig_int = 0;
      var pre_m = 0;
      lpf.resetFilter();
      lpf2.resetFilter();
      lpf3.resetFilter();
      for (var _x5 = 0; _x5 < width; _x5++) {
        var _idx4 = _y5 * width + _x5;
        // Scale Y value to proper range for FM modulation
        var ncs = (Y[_idx4] - 128) / 128 * fm_phase;
        sig_int += ncs;
        var m = Math.sin(_x5 * fm_omega + sig_int);
        var dem = Math.abs(m - pre_m);
        var ystart = Math.floor(fm_noise_start * height);
        var ystop = Math.floor(fm_noise_stop * height);
        if (_y5 > ystart && _y5 < ystop && fm_noise) {
          if (Math.random() < 0.05) {
            // Lowered noise probability
            var _s = Math.tan((_y5 - ystart) / (ystop - ystart) * Math.PI - Math.PI / 2);
            if (Math.random() < _s * Math.random()) {
              dem = Math.random() * 1 + 0.5; // Lowered noise amplitude
            }
          }
        }
        pre_m = m;
        var fdem = dem;
        fdem = lpf.lowpass(fdem);
        fdem = lpf2.lowpass(fdem);
        fdem = lpf3.lowpass(fdem);
        var modulated = Y[_idx4] + (fdem - 0.5) * fm_modulation_strength;
        Y[_idx4] = clamp(fm_lightness * Y[_idx4] + (1 - fm_lightness) * modulated + brightness_compensation, 0, 255);
      }
    }
  }

  // Clamp Y, I, Q after FM and before chroma noise
  for (var _i = 0; _i < Y.length; _i++) {
    Y[_i] = clamp(Y[_i], 0, 255);
    I[_i] = clamp(I[_i], -128, 128);
    Q[_i] = clamp(Q[_i], -128, 128);
  }

  // --- 8. Chroma noise ---
  if (video_chroma_noise !== 0) {
    var noiseU = 0,
      noiseV = 0;
    var noise_mod = 500; // Lowered chroma noise
    for (var _i2 = 0; _i2 < I.length; _i2++) {
      I[_i2] += noiseU;
      Q[_i2] += noiseV;
      noiseU += Math.floor(Math.random() * noise_mod) - noise_mod / 2;
      noiseU >>= 2;
      noiseV += Math.floor(Math.random() * noise_mod) - noise_mod / 2;
      noiseV >>= 2;
    }
  }

  // Clamp again after chroma noise
  for (var _i3 = 0; _i3 < Y.length; _i3++) {
    Y[_i3] = clamp(Y[_i3], 0, 255);
    I[_i3] = clamp(I[_i3], -128, 128);
    Q[_i3] = clamp(Q[_i3], -128, 128);
  }

  // --- 9. Chroma phase noise (hue noise) ---
  if (video_chroma_phase_noise !== 0) {
    var _noise = 0;
    var _noise_mod = video_chroma_phase_noise * 2 + 1;
    for (var _y6 = 0; _y6 < height; _y6++) {
      _noise += Math.floor(Math.random() * _noise_mod) - video_chroma_phase_noise;
      _noise >>= 1;
      var pi = _noise * Math.PI / 100.0;
      var sinpi = Math.sin(pi);
      var cospi = Math.cos(pi);
      var off = _y6 * width;
      for (var _x6 = 0; _x6 < width; _x6++) {
        var _idx5 = off + _x6;
        var u = I[_idx5];
        var v = Q[_idx5];
        I[_idx5] = u * cospi - v * sinpi;
        Q[_idx5] = u * sinpi + v * cospi;
      }
    }
  }

  // --- 10. VHS luma lowpass and sharpening ---
  if (emulating_vhs) {
    var luma_cut = emulating_vhs[0];
    var chroma_cut = emulating_vhs[1];
    var chroma_delay = emulating_vhs[2];
    // Luma lowpass
    var lp = [new LowpassFilter(), new LowpassFilter(), new LowpassFilter()];
    var _pre = new LowpassFilter();
    for (var f = 0; f < 3; f++) lp[f].setFilter(315000000.0 * 4.0 / 88.0, luma_cut);
    _pre.setFilter(315000000.0 * 4.0 / 88.0, luma_cut / 3);
    for (var _y7 = 0; _y7 < height; _y7++) {
      for (var _f = 0; _f < 3; _f++) lp[_f].resetFilter(16);
      _pre.resetFilter(16);
      var _off = _y7 * width;
      for (var _x7 = 0; _x7 < width; _x7++) {
        var _s2 = Y[_x7 + _off];
        for (var _f2 = 0; _f2 < 3; _f2++) _s2 = lp[_f2].lowpass(_s2);
        _s2 += _pre.highpass(_s2) * 1.6;
        Y[_x7 + _off] = _s2;
      }
    }
    // Chroma lowpass
    var lpU = [new LowpassFilter(), new LowpassFilter(), new LowpassFilter()];
    var lpV = [new LowpassFilter(), new LowpassFilter(), new LowpassFilter()];
    for (var _f3 = 0; _f3 < 3; _f3++) {
      lpU[_f3].setFilter(315000000.0 * 4.0 / 88.0, chroma_cut);
      lpV[_f3].setFilter(315000000.0 * 4.0 / 88.0, chroma_cut);
    }
    for (var _y8 = 0; _y8 < height; _y8++) {
      for (var _f4 = 0; _f4 < 3; _f4++) {
        lpU[_f4].resetFilter(0);
        lpV[_f4].resetFilter(0);
      }
      var _off2 = _y8 * width;
      for (var _x8 = 0; _x8 < width; _x8++) {
        var _s3 = I[_x8 + _off2];
        for (var _f5 = 0; _f5 < 3; _f5++) _s3 = lpU[_f5].lowpass(_s3);
        if (_x8 >= chroma_delay) I[_x8 + _off2 - chroma_delay] = _s3;
        _s3 = Q[_x8 + _off2];
        for (var _f6 = 0; _f6 < 3; _f6++) _s3 = lpV[_f6].lowpass(_s3);
        if (_x8 >= chroma_delay) Q[_x8 + _off2 - chroma_delay] = _s3;
      }
    }
    // Chroma vertical blend
    {
      var delayU = new Float32Array(width);
      var delayV = new Float32Array(width);
      for (var _y9 = 0; _y9 < height; _y9++) {
        var _off3 = _y9 * width;
        for (var _x9 = 0; _x9 < width; _x9++) {
          var cU = I[_x9 + _off3];
          var cV = Q[_x9 + _off3];
          I[_x9 + _off3] = (delayU[_x9] + cU + 1) / 2;
          Q[_x9 + _off3] = (delayV[_x9] + cV + 1) / 2;
          delayU[_x9] = cU;
          delayV[_x9] = cV;
        }
      }
    }
    // VHS sharpen
    {
      for (var _f7 = 0; _f7 < 3; _f7++) lp[_f7].setFilter(315000000.0 * 4.0 / 88.0, luma_cut * 4);
      for (var _y0 = 0; _y0 < height; _y0++) {
        for (var _f8 = 0; _f8 < 3; _f8++) lp[_f8].resetFilter(0);
        var _off4 = _y0 * width;
        for (var _x0 = 0; _x0 < width; _x0++) {
          var _s4 = Y[_x0 + _off4];
          var ts = _s4;
          for (var _f9 = 0; _f9 < 3; _f9++) ts = lp[_f9].lowpass(ts);
          Y[_x0 + _off4] = _s4 + (_s4 - ts) * vhs_out_sharpen * 2.0;
        }
      }
    }
  }

  // --- 11. Chroma loss ---
  {
    for (var _y1 = 0; _y1 < height; _y1++) {
      if (Math.random() < video_chroma_loss) {
        var _off5 = _y1 * width;
        for (var _x1 = 0; _x1 < width; _x1++) {
          I[_x1 + _off5] = 0;
          Q[_x1 + _off5] = 0;
        }
      }
    }
  }

  // --- 12. Device-to-device simulation ---
  for (var _i4 = 0; _i4 < video_recombine; _i4++) {
    chroma_into_luma(Y, I, Q);
    chroma_from_luma(Y, I, Q);
  }
  {
    composite_lowpass(I, Q);
  }

  // --- 14. Convert back to RGB ---
  for (var _y11 = 0; _y11 < height; _y11++) {
    for (var _x11 = 0; _x11 < width; _x11++) {
      var _idx7 = (_y11 * width + _x11) * 4;
      var _yiq2rgb = yiq2rgb(Y[_y11 * width + _x11], I[_y11 * width + _x11], Q[_y11 * width + _x11]),
        _yiq2rgb2 = _slicedToArray(_yiq2rgb, 3),
        r = _yiq2rgb2[0],
        g = _yiq2rgb2[1],
        b = _yiq2rgb2[2];
      data[_idx7] = r;
      data[_idx7 + 1] = g;
      data[_idx7 + 2] = b;
      data[_idx7 + 3] = 255;
    }
  }

  // --- 15. Scanlines overlay ---
  for (var _y12 = 0; _y12 < height; _y12 += 3) {
    for (var _x12 = 0; _x12 < width; _x12++) {
      var _idx8 = (_y12 * width + _x12) * 4;
      data[_idx8] = data[_idx8] * 0.8;
      data[_idx8 + 1] = data[_idx8 + 1] * 0.5;
      data[_idx8 + 2] = data[_idx8 + 2] * 0.1;
    }
    if (_y12 + 1 < height) {
      for (var _x13 = 0; _x13 < width; _x13++) {
        var _idx9 = ((_y12 + 1) * width + _x13) * 4;
        data[_idx9] = data[_idx9] * 0.1;
        data[_idx9 + 1] = data[_idx9 + 1] * 0.8;
        data[_idx9 + 2] = data[_idx9 + 2] * 0.5;
      }
    }
    if (_y12 + 2 < height) {
      for (var _x14 = 0; _x14 < width; _x14++) {
        var _idx0 = ((_y12 + 2) * width + _x14) * 4;
        data[_idx0] = data[_idx0] * 0.5;
        data[_idx0 + 1] = data[_idx0 + 1] * 0.1;
        data[_idx0 + 2] = data[_idx0 + 2] * 0.8;
      }
    }
  }
};

var compositeVideo = {
  apply: applyCompositeVideo,
  name: 'Composite Video',
  description: 'A dithering algorithm that creates a composite video effect',
  category: DITHER_CATEGORIES.GLITCH_EFFECTS,
  handle: 'compositeVideo'
};

var FREQUENCY_MULTIPLIER$2 = 400;
var applyRuttEtra = function applyRuttEtra(image, settings) {
  var _settings$frequency, _settings$amplitude, _settings$phase, _settings$noise;
  var width = image.width,
    height = image.height,
    data = image.data;
  var frequency = (_settings$frequency = settings.frequency) !== null && _settings$frequency !== void 0 ? _settings$frequency : 1;
  var amplitude = (_settings$amplitude = settings.amplitude) !== null && _settings$amplitude !== void 0 ? _settings$amplitude : 1;
  var phase = (_settings$phase = settings.phase) !== null && _settings$phase !== void 0 ? _settings$phase : 0;
  var noise = (_settings$noise = settings.noise) !== null && _settings$noise !== void 0 ? _settings$noise : 0;
  var numLines = Math.max(10, Math.floor(frequency * FREQUENCY_MULTIPLIER$2));
  var lineSpacing = Math.floor(height / numLines);
  var scale = amplitude * 100;
  var phaseOffset = Math.round(phase * lineSpacing);
  var lineWidth = 1;

  // Create a black working buffer
  var out = new Uint8ClampedArray(width * height * 4);
  for (var i = 0; i < out.length; i += 4) {
    out[i] = 0;
    out[i + 1] = 0;
    out[i + 2] = 0;
    out[i + 3] = 255;
  }

  // For each scanline
  var _loop = function _loop() {
    var y = _i * lineSpacing + phaseOffset;
    if (y >= height) return 1; // break
    // 1. Extract brightness and color for this row
    var line = [];
    var colors = [];
    for (var x = 0; x < width; x++) {
      var idx = (y * width + x) * 4;
      var r = data[idx];
      var g = data[idx + 1];
      var b = data[idx + 2];
      var brightness = 0.299 * r + 0.587 * g + 0.114 * b;
      line.push(brightness);
      colors.push([r, g, b]);
    }
    // 2. Normalize brightness (0 = black, 1 = white)
    var minB = Math.min.apply(Math, line);
    var maxB = Math.max.apply(Math, line);
    var norm = line.map(function (v) {
      return (v - minB) / (maxB - minB + 1e-6);
    });
    // 3. Draw the modulated colored line
    var prevX = 0,
      prevY = Math.max(0, Math.min(height - 1, Math.round(y - norm[0] * scale + (Math.random() * 2 - 1) * noise)));
    for (var _x = 1; _x < width; _x++) {
      var noiseVal = (Math.random() * 2 - 1) * noise;
      var plotY = Math.max(0, Math.min(height - 1, Math.round(y - norm[_x] * scale + noiseVal)));
      var color = colors[_x];
      drawLine$1(out, width, height, prevX, prevY, _x, plotY, color, lineWidth);
      prevX = _x;
      prevY = plotY;
    }
  };
  for (var _i = 0; _i < numLines; _i++) {
    if (_loop()) break;
  }

  // Copy the result back to the original data array
  for (var _i2 = 0; _i2 < data.length; _i2++) {
    data[_i2] = out[_i2];
  }
};

var ruttEtra = {
  apply: applyRuttEtra,
  name: 'Rutt-Etra',
  description: 'A filter that creates a Rutt-Etra effect (a glitch effect)',
  category: DITHER_CATEGORIES.GLITCH_EFFECTS,
  handle: 'ruttEtra'
};

var FREQUENCY_MULTIPLIER$1 = 400;

// Draw a white line of given width using Bresenham's algorithm
var drawLine = function drawLine(data, width, height, x0, y0, x1, y1) {
  var lineWidth = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
  var dx = Math.abs(x1 - x0),
    sx = x0 < x1 ? 1 : -1;
  var dy = -Math.abs(y1 - y0),
    sy = y0 < y1 ? 1 : -1;
  var err = dx + dy,
    e2;
  while (true) {
    for (var w = -Math.floor(lineWidth / 2); w <= Math.floor(lineWidth / 2); w++) {
      var px = x0,
        py = y0 + w;
      if (px >= 0 && px < width && py >= 0 && py < height) {
        var idx = (py * width + px) * 4;
        data[idx] = 255;
        data[idx + 1] = 255;
        data[idx + 2] = 255;
        data[idx + 3] = 255;
      }
    }
    if (x0 === x1 && y0 === y1) break;
    e2 = 2 * err;
    if (e2 >= dy) {
      err += dy;
      x0 += sx;
    }
    if (e2 <= dx) {
      err += dx;
      y0 += sy;
    }
  }
};
var applyJoyPlot = function applyJoyPlot(image, settings) {
  var _settings$frequency, _settings$amplitude, _settings$phase;
  var width = image.width,
    height = image.height,
    data = image.data;
  // Parameters (now computed from settings, with sensible defaults)
  var numLines = Math.max(10, Math.floor(((_settings$frequency = settings.frequency) !== null && _settings$frequency !== void 0 ? _settings$frequency : 1) * FREQUENCY_MULTIPLIER$1)); // more frequency = more lines
  var lineSpacing = Math.floor(height / numLines);
  var scale = ((_settings$amplitude = settings.amplitude) !== null && _settings$amplitude !== void 0 ? _settings$amplitude : 1) * 100; // amplitude controls elevation scale
  var roughness = Math.max(0, ((_settings$phase = settings.phase) !== null && _settings$phase !== void 0 ? _settings$phase : 1) * 2); // phase controls smoothing radius
  var lineWidth = 1; // can be parameterized

  // Create a black working buffer
  var out = new Uint8ClampedArray(width * height * 4);
  for (var i = 0; i < out.length; i += 4) {
    out[i] = 0;
    out[i + 1] = 0;
    out[i + 2] = 0;
    out[i + 3] = 255;
  }
  for (var _i = 0; _i < width * height; _i++) {
    var idx = _i * 4;
    data[idx];
    data[idx + 1];
    data[idx + 2];
  }

  // For each line
  var _loop = function _loop() {
    var _settings$phase2, _settings$noise;
    // Add vertical offset based on settings.phase
    var phaseOffset = Math.round(((_settings$phase2 = settings.phase) !== null && _settings$phase2 !== void 0 ? _settings$phase2 : 0) * lineSpacing);
    var y = _i2 * lineSpacing + phaseOffset;
    if (y >= height) return 1; // break

    // 1. Extract brightness for this row
    var line = [];
    for (var x = 0; x < width; x++) {
      // Instead of y, sample at a vertical offset
      var sampleY = Math.round(_i2 / numLines * (height - 1));
      var _idx = (sampleY * width + x) * 4;
      var _r = data[_idx];
      var _g = data[_idx + 1];
      var _b = data[_idx + 2];
      var _brightness = 0.299 * _r + 0.587 * _g + 0.114 * _b;
      line.push(_brightness);
    }

    // 2. Normalize and invert (so higher brightness = higher elevation)
    var localMin = Math.min.apply(Math, line);
    var localMax = Math.max.apply(Math, line);
    var norm = line.map(function (v) {
      return (v - localMin) / (localMax - localMin + 1e-6);
    });

    // 3. Scale elevation and add noise
    var noiseAmount = (_settings$noise = settings.noise) !== null && _settings$noise !== void 0 ? _settings$noise : 0;
    var elevation = norm.map(function (v, x) {
      // Add small random noise to the altitude
      var noise = (Math.random() * 2 - 1) * noiseAmount;
      return v * scale + noise;
    });

    // 4. Smooth the elevation
    var smooth = smoothLine(elevation, roughness);

    // 5. Draw the continuous line (on the out buffer)
    var prevX = 0,
      prevY = Math.max(0, Math.min(height - 1, Math.round(y + smooth[0])));
    for (var _x = 1; _x < width; _x++) {
      var plotY = Math.max(0, Math.min(height - 1, Math.round(y + smooth[_x])));
      // Fill under the line with black (leave the line itself white)
      for (var fillY = plotY + 1; fillY < height; fillY++) {
        var _idx2 = (fillY * width + _x) * 4;
        out[_idx2] = 0;
        out[_idx2 + 1] = 0;
        out[_idx2 + 2] = 0;
        out[_idx2 + 3] = 255;
      }
      drawLine(out, width, height, prevX, prevY, _x, plotY, lineWidth);
      prevX = _x;
      prevY = plotY;
    }
  };
  for (var _i2 = 0; _i2 < numLines; _i2++) {
    if (_loop()) break;
  }

  // Copy the result back to the original data array
  for (var _i3 = 0; _i3 < data.length; _i3++) {
    data[_i3] = out[_i3];
  }
};

var joyPlot = {
  apply: applyJoyPlot,
  name: 'Joy Plot',
  description: 'A filter that creates a Joy Plot effect similar to the one seen on the Joy Division album cover',
  category: DITHER_CATEGORIES.GLITCH_EFFECTS,
  handle: 'joyPlot'
};

var FREQUENCY_MULTIPLIER = 400;
var COMPRESSION_MULTIPLIER = 200;

// LZ77 Tuple
var Tuple = /*#__PURE__*/_createClass(function Tuple(offset, len, chr) {
  _classCallCheck(this, Tuple);
  this.offset = offset;
  this.len = len;
  this.chr = chr;
});

// LZ77 Compressor/Decompressor/Glitcher
var LZ77 = /*#__PURE__*/function () {
  function LZ77(windowWidth, lookAheadWidth) {
    _classCallCheck(this, LZ77);
    _defineProperty(this, "clist", []);
    this.windowWidth = windowWidth;
    this.lookAheadWidth = lookAheadWidth;
  }
  return _createClass(LZ77, [{
    key: "glitch",
    value: function glitch(no, fac) {
      for (var i = 0; i < no; i++) {
        var r = this.clist[Math.floor(Math.random() * this.clist.length)];
        var what = Math.floor(Math.random() * 3);
        switch (what) {
          case 0:
            r.chr = Math.floor(Math.random() * 256);
            break;
          case 1:
            r.offset = Math.floor(Math.random() * (2 * this.windowWidth * fac));
            break;
          default:
            r.len = Math.floor(Math.random() * (2 * this.lookAheadWidth * fac));
        }
      }
    }
  }, {
    key: "doCompress",
    value: function doCompress(buff) {
      this.clist = [];
      var currByte = 1;
      this.clist.push(new Tuple(0, 0, buff[0]));
      while (currByte < buff.length) {
        var bend = Math.max(currByte - this.windowWidth, 0);
        var boff = 0,
          blen = 0;
        if (currByte < buff.length - 1) {
          for (var i = currByte - 1; i >= bend; i--) {
            if (buff[currByte] === buff[i]) {
              var tboff = Math.abs(i - currByte);
              var tblen = 1;
              var laEnd = Math.min(currByte + this.lookAheadWidth, buff.length - 1);
              var mi = currByte + 1;
              while (mi < laEnd && i + mi - currByte < currByte) {
                if (buff[mi] === buff[i + mi - currByte]) {
                  mi++;
                  tblen++;
                } else {
                  break;
                }
              }
              if (tblen > blen) {
                blen = tblen;
                boff = tboff;
              }
            }
          }
        }
        currByte += blen + 1;
        this.clist.push(new Tuple(boff, blen, buff[currByte - 1]));
      }
    }
  }, {
    key: "doDecompress",
    value: function doDecompress(buff) {
      var i = 0;
      var _iterator = _createForOfIteratorHelper(this.clist),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var t = _step.value;
          if (i >= buff.length) break;
          if (t.offset === 0) {
            buff[i++] = t.chr;
          } else {
            var start = i - t.offset;
            var end = start + t.len;
            for (var c = start; c < end; c++) {
              var pos = clamp(c, 0, buff.length - 1);
              buff[clamp(i++, 0, buff.length - 1)] = buff[pos];
              if (i >= buff.length) break;
            }
            if (i >= buff.length) break;
            buff[i++] = t.chr;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);
}();
var applyLZ77 = function applyLZ77(image, settings) {
  var _settings$amplitude, _settings$frequency, _settings$phase;
  var width = image.width,
    height = image.height,
    data = image.data;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 0 : _settings$noise;

  // Randomize color space
  var useHSB = Math.random() < 0.4;
  // Randomize compressor attributes
  var compressor_attributes = [[Math.floor(Math.random() * COMPRESSION_MULTIPLIER + 20), Math.floor(Math.random() * 20 + 5)], [Math.floor(Math.random() * COMPRESSION_MULTIPLIER + 20), Math.floor(Math.random() * 20 + 5)], [Math.floor(Math.random() * COMPRESSION_MULTIPLIER + 20), Math.floor(Math.random() * 20 + 5)]];
  // Use noise to control number and strength of glitches
  var amplitude = (_settings$amplitude = settings.amplitude) !== null && _settings$amplitude !== void 0 ? _settings$amplitude : 1;
  var frequency = ((_settings$frequency = settings.frequency) !== null && _settings$frequency !== void 0 ? _settings$frequency : 1) * FREQUENCY_MULTIPLIER;
  var phase = (_settings$phase = settings.phase) !== null && _settings$phase !== void 0 ? _settings$phase : 0;
  var baseGlitches = Math.floor((noise + 1) * 40 * frequency);
  var glitchFactor = (0.1 + (noise + 1) * 0.09) * amplitude;
  var phaseOffset = Math.floor(phase * 1000); // or use as a seed

  var number_of_glitches = [[baseGlitches, glitchFactor, phaseOffset], [baseGlitches, glitchFactor, phaseOffset], [baseGlitches, glitchFactor, phaseOffset]];
  // Extract channels
  var len = width * height;
  var ch1 = new Uint8Array(len);
  var ch2 = new Uint8Array(len);
  var ch3 = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    var idx = i * 4;
    var r = data[idx],
      g = data[idx + 1],
      b = data[idx + 2];
    if (useHSB) {
      var _rgb2hsb = rgb2hsb(r, g, b),
        _rgb2hsb2 = _slicedToArray(_rgb2hsb, 3),
        h = _rgb2hsb2[0],
        s = _rgb2hsb2[1],
        v = _rgb2hsb2[2];
      ch1[i] = Math.round(h);
      ch2[i] = Math.round(s);
      ch3[i] = Math.round(v);
    } else {
      ch1[i] = r;
      ch2[i] = g;
      ch3[i] = b;
    }
  }
  // Process each channel
  var comp1 = new LZ77(compressor_attributes[0][0], compressor_attributes[0][1]);
  var comp2 = new LZ77(compressor_attributes[1][0], compressor_attributes[1][1]);
  var comp3 = new LZ77(compressor_attributes[2][0], compressor_attributes[2][1]);
  comp1.doCompress(ch1);
  comp1.glitch(number_of_glitches[0][0], number_of_glitches[0][1]);
  comp1.doDecompress(ch1);
  comp2.doCompress(ch2);
  comp2.glitch(number_of_glitches[1][0], number_of_glitches[1][1]);
  comp2.doDecompress(ch2);
  comp3.doCompress(ch3);
  comp3.glitch(number_of_glitches[2][0], number_of_glitches[2][1]);
  comp3.doDecompress(ch3);
  // Write back to data
  for (var _i = 0; _i < len; _i++) {
    var _idx = _i * 4;
    var _r = void 0,
      _g = void 0,
      _b = void 0;
    if (useHSB) {
      var _hsb2rgb = hsb2rgb(ch1[_i], ch2[_i], ch3[_i]);
      var _hsb2rgb2 = _slicedToArray(_hsb2rgb, 3);
      _r = _hsb2rgb2[0];
      _g = _hsb2rgb2[1];
      _b = _hsb2rgb2[2];
    } else {
      _r = ch1[_i];
      _g = ch2[_i];
      _b = ch3[_i];
    }
    data[_idx] = _r;
    data[_idx + 1] = _g;
    data[_idx + 2] = _b;
    data[_idx + 3] = 255;
  }
};

var lz77 = {
  apply: applyLZ77,
  name: 'LZ77',
  description: 'A filter that simulates LZ77 compression',
  category: DITHER_CATEGORIES.GLITCH_EFFECTS,
  handle: 'lz77'
};

// Stucki error diffusion weights (horizontal and vertical only)
var weights = [{
  dx: 1,
  dy: 0,
  factor: 8 / 42
},
// right
{
  dx: 2,
  dy: 0,
  factor: 4 / 42
},
// right 2
{
  dx: -2,
  dy: 1,
  factor: 2 / 42
},
// next line, left 2
{
  dx: -1,
  dy: 1,
  factor: 4 / 42
},
// next line, left 1
{
  dx: 0,
  dy: 1,
  factor: 8 / 42
},
// next line, same x
{
  dx: 1,
  dy: 1,
  factor: 4 / 42
},
// next line, right 1
{
  dx: 2,
  dy: 1,
  factor: 2 / 42
} // next line, right 2
];
var applyStukiDiffusionLines = function applyStukiDiffusionLines(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 0 : _settings$noise;
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var idx = (y * width + x) * 4;
      var gray = data[idx];
      if (noise > 0) {
        gray += (Math.random() - 0.5) * noise;
      }
      var newColor = gray < 128 ? 0 : 255;
      var error = gray - newColor;
      data[idx] = data[idx + 1] = data[idx + 2] = newColor;
      data[idx + 3] = 255;
      // Diffuse error horizontally and to the next line
      for (var _i = 0, _weights = weights; _i < _weights.length; _i++) {
        var w = _weights[_i];
        var nx = x + w.dx;
        var ny = y + w.dy;
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          var nidx = (ny * width + nx) * 4;
          data[nidx] += error * w.factor;
        }
      }
    }
  }
};

var stukiDiffusionLines = {
  apply: applyStukiDiffusionLines,
  name: 'Stuki Diffusion Lines',
  description: 'A filter that creates Diffusion Lines effect (a glitch effect) with Stuki\'s algorithm',
  category: DITHER_CATEGORIES.GLITCH_EFFECTS,
  handle: 'stukiDiffusionLines'
};

var applyFractalify = function applyFractalify(image, settings) {
  var width = image.width,
    height = image.height,
    data = image.data;

  // Randomize parameters as in Processing
  var type = Math.random() < 0.5 ? 0 : 1;
  var variant = Math.random() < 0.5 ? 0 : 1;
  var fact1 = Math.random() * 0.5 + 0.8;
  var fact2 = Math.random() * 0.5 + 0.8;
  var chan1 = Math.floor(Math.random() * 6);
  var chan2 = Math.floor(Math.random() * 6);
  var chan3 = Math.floor(Math.random() * 6);
  var chan4 = Math.floor(Math.random() * 6);
  var chan5 = Math.floor(Math.random() * 6);
  var negative = Math.random() < 0.5;
  // Random channel order for output
  var order = [0, 1, 2];
  for (var i = order.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [order[j], order[i]];
    order[i] = _ref[0];
    order[j] = _ref[1];
  }
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var idx = (y * width + x) * 4;
      var r = data[idx],
        g = data[idx + 1],
        b = data[idx + 2];
      var _rgb2hsb = rgb2hsb(r, g, b),
        _rgb2hsb2 = _slicedToArray(_rgb2hsb, 3),
        h = _rgb2hsb2[0],
        s = _rgb2hsb2[1],
        v = _rgb2hsb2[2];
      var zx = void 0,
        zy = void 0,
        cx = void 0,
        cy = void 0;
      if (type === 0) {
        zx = fact1 * map(Math.sqrt(getChan(chan1, r, g, b, h, s, v, negative) * getChan(chan2, r, g, b, h, s, v, negative)), 0, 1, -1, 1);
        zy = fact1 * map(Math.sqrt(getChan(chan3, r, g, b, h, s, v, negative) * getChan(chan4, r, g, b, h, s, v, negative)), 0, 1, -1, 1);
        cx = map(x, 0, width, -1.4, 1.4);
        cy = map(y, 0, height, 1.4, -1.4);
      } else {
        cx = fact1 * map(Math.sqrt(getChan(chan1, r, g, b, h, s, v, negative) * getChan(chan2, r, g, b, h, s, v, negative)), 0, 1, -1, 1);
        cy = fact1 * map(Math.sqrt(getChan(chan3, r, g, b, h, s, v, negative) * getChan(chan4, r, g, b, h, s, v, negative)), 0, 1, -1, 1);
        zx = map(x, 0, width, -1.4, 1.4);
        zy = map(y, 0, height, -1.4, 1.4);
      }
      if (variant === 0) {
        cx *= fact2 * Math.sin(getChan(chan5, r, g, b, h, s, v, negative) * 2 * Math.PI);
        cy *= fact2 * Math.cos(getChan(chan5, r, g, b, h, s, v, negative) * 2 * Math.PI);
      } else {
        zx *= Math.sin(getChan(chan5, r, g, b, h, s, v, negative) * 2 * Math.PI);
        zy *= Math.cos(getChan(chan5, r, g, b, h, s, v, negative) * 2 * Math.PI);
      }
      var iter = 500;
      var zxn = zx,
        zyn = zy;
      while (zxn * zxn + zyn * zyn < 4.0 && iter-- > 0) {
        var tmp = zxn * zxn - zyn * zyn + cx;
        zyn = 2.0 * zxn * zyn + cy;
        zxn = tmp;
      }
      zxn = map(zxn, 0, 1.4, 0, 255);
      zyn = map(zyn, 0, 1.4, 0, 255);
      // Output color channels based on random order
      var c1 = order[0] === 0 ? zxn % 255 : order[0] === 1 ? zyn % 255 : 51 * (iter % 6);
      var c2 = order[1] === 0 ? zxn % 255 : order[1] === 1 ? zyn % 255 : 51 * (iter % 6);
      var c3 = order[2] === 0 ? zxn % 255 : order[2] === 1 ? zyn % 255 : 51 * (iter % 6);
      data[idx] = clamp(c1, 0, 255);
      data[idx + 1] = clamp(c2, 0, 255);
      data[idx + 2] = clamp(c3, 0, 255);
      data[idx + 3] = 255;
    }
  }
};

var fractalify = {
  apply: applyFractalify,
  name: 'Fractalify',
  description: 'A filter that creates a fractal overlay effect (a glitch) over the image',
  category: DITHER_CATEGORIES.GLITCH_EFFECTS,
  handle: 'fractalify'
};

var applyLinesGlitch = function applyLinesGlitch(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$amplitude = settings.amplitude,
    amplitude = _settings$amplitude === void 0 ? 21 : _settings$amplitude,
    _settings$minSpacing = settings.minSpacing,
    minSpacing = _settings$minSpacing === void 0 ? 4 : _settings$minSpacing,
    _settings$maxSpacing = settings.maxSpacing,
    maxSpacing = _settings$maxSpacing === void 0 ? 16 : _settings$maxSpacing,
    _settings$maxThicknes = settings.maxThickness,
    maxThickness = _settings$maxThicknes === void 0 ? 6 : _settings$maxThicknes;

  // Copy original data for sampling
  var original = new Uint8ClampedArray(data);
  for (var y = 0; y < height; y++) {
    var x = 0;
    while (x < width) {
      var idx = (y * width + x) * 4;
      var gray = original[idx]; // Use red channel (assume grayscale input)
      var offset = Math.round(amplitude * (gray / 255 - 0.5));
      // Variable line spacing based on brightness (white = minSpacing, black = maxSpacing)
      var spacing = minSpacing + (maxSpacing - minSpacing) * (1 - gray / 255);
      var isLine = (x + offset) % Math.round(spacing) === 0;
      if (isLine) {
        // Make lines thicker in bright areas (smaller spacing)
        // The closer spacing is to minSpacing, the thicker the line
        var thickness = Math.max(1, Math.round(maxThickness - (spacing - minSpacing)));
        for (var t = 0; t < thickness && x + t < width; t++) {
          var idx2 = (y * width + (x + t)) * 4;
          data[idx2] = data[idx2 + 1] = data[idx2 + 2] = 255;
          data[idx2 + 3] = 255;
        }
        x += thickness; // Skip the next (thickness-1) pixels
      } else {
        data[idx] = data[idx + 1] = data[idx + 2] = 0;
        data[idx + 3] = 255;
        x++;
      }
    }
  }
};

var linesGlitch = {
  apply: applyLinesGlitch,
  name: 'Lines Glitch',
  description: 'A filter that creates a Lines Glitch effect (a glitch effect)',
  category: DITHER_CATEGORIES.GLITCH_EFFECTS,
  handle: 'linesGlitch'
};

var applyModulatedDiffuseY = function applyModulatedDiffuseY(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$amplitude = settings.amplitude,
    amplitude = _settings$amplitude === void 0 ? 1.0 : _settings$amplitude,
    _settings$frequency = settings.frequency,
    frequency = _settings$frequency === void 0 ? 0.08 : _settings$frequency,
    _settings$phase = settings.phase,
    phase = _settings$phase === void 0 ? 0 : _settings$phase,
    _settings$ditheringSc = settings.ditheringScale,
    ditheringScale = _settings$ditheringSc === void 0 ? 1 : _settings$ditheringSc,
    _settings$blockSize = settings.blockSize,
    blockSize = _settings$blockSize === void 0 ? 1 : _settings$blockSize;

  // Copy original image data for reference
  var original = new Uint8ClampedArray(data);

  // Set all pixels to black
  for (var i = 0; i < data.length; i += 4) {
    data[i] = data[i + 1] = data[i + 2] = 0;
    data[i + 3] = 255;
  }

  // 1. FM modulation/demodulation for all rows, collect all demodulated values
  var allDemodulated = [];
  var demodulatedRows = [];
  for (var y = 0; y < height; y++) {
    var signal = new Float32Array(width);
    for (var x = 0; x < width; x++) {
      signal[x] = original[(y * width + x) * 4] / 255.0;
    }
    var omega = 2 * Math.PI * (frequency / ditheringScale);
    var sigInt = 0;
    var modulated = new Float32Array(width);
    for (var _x = 0; _x < width; _x++) {
      sigInt += signal[_x] * amplitude;
      modulated[_x] = Math.cos(omega * _x + sigInt + phase);
    }
    var demodulated = new Float32Array(width);
    for (var _x2 = 1; _x2 < width; _x2++) {
      demodulated[_x2] = Math.abs(modulated[_x2] - modulated[_x2 - 1]);
      allDemodulated.push(demodulated[_x2]);
    }
    demodulatedRows.push(demodulated);
  }

  // 2. Find global min and max
  var globalMin = Infinity,
    globalMax = -Infinity;
  for (var _i = 0; _i < allDemodulated.length; _i++) {
    if (allDemodulated[_i] < globalMin) globalMin = allDemodulated[_i];
    if (allDemodulated[_i] > globalMax) globalMax = allDemodulated[_i];
  }
  var epsilon = 1e-6;

  // 3. Write back to image using global normalization
  for (var _y = 0; _y < height; _y++) {
    var _demodulated = demodulatedRows[_y];
    for (var _x3 = 0; _x3 < width; _x3++) {
      var v = (_demodulated[_x3] - globalMin) / (globalMax - globalMin + epsilon) * 255;
      var bw = v > 128 ? 255 : 0;
      for (var dx = -Math.floor(blockSize / 2); dx <= Math.floor(blockSize / 2); dx++) {
        var drawX = _x3 + dx;
        if (drawX >= 0 && drawX < width) {
          var _i2 = (_y * width + drawX) * 4;
          data[_i2] = data[_i2 + 1] = data[_i2 + 2] = bw;
          data[_i2 + 3] = 255;
        }
      }
    }
  }
};

var modulatedDiffuseY = {
  apply: applyModulatedDiffuseY,
  name: 'Modulated Diffuse Y',
  description: 'A filter that creates a Modulated Diffuse FM effect over the image on the Y axis',
  category: DITHER_CATEGORIES.GLITCH_EFFECTS,
  handle: 'modulatedDiffuseY'
};

var applyModulatedDiffuseX = function applyModulatedDiffuseX(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$amplitude = settings.amplitude,
    amplitude = _settings$amplitude === void 0 ? 1.0 : _settings$amplitude,
    _settings$frequency = settings.frequency,
    frequency = _settings$frequency === void 0 ? 0.08 : _settings$frequency,
    _settings$phase = settings.phase,
    phase = _settings$phase === void 0 ? 0 : _settings$phase,
    _settings$ditheringSc = settings.ditheringScale,
    ditheringScale = _settings$ditheringSc === void 0 ? 1 : _settings$ditheringSc,
    _settings$blockSize = settings.blockSize,
    blockSize = _settings$blockSize === void 0 ? 1 : _settings$blockSize;

  // Copy original image data for reference
  var original = new Uint8ClampedArray(data);

  // Set all pixels to black
  for (var i = 0; i < data.length; i += 4) {
    data[i] = data[i + 1] = data[i + 2] = 0;
    data[i + 3] = 255;
  }

  // 1. FM modulation/demodulation for all columns, collect all demodulated values
  var allDemodulated = [];
  var demodulatedCols = [];
  for (var x = 0; x < width; x++) {
    var signal = new Float32Array(height);
    for (var y = 0; y < height; y++) {
      signal[y] = original[(y * width + x) * 4] / 255.0;
    }
    var omega = 2 * Math.PI * (frequency / ditheringScale);
    var sigInt = 0;
    var modulated = new Float32Array(height);
    for (var _y = 0; _y < height; _y++) {
      sigInt += signal[_y] * amplitude;
      modulated[_y] = Math.cos(omega * _y + sigInt + phase);
    }
    var demodulated = new Float32Array(height);
    for (var _y2 = 1; _y2 < height; _y2++) {
      demodulated[_y2] = Math.abs(modulated[_y2] - modulated[_y2 - 1]);
      allDemodulated.push(demodulated[_y2]);
    }
    demodulatedCols.push(demodulated);
  }

  // 2. Find global min and max
  var globalMin = Infinity,
    globalMax = -Infinity;
  for (var _i = 0; _i < allDemodulated.length; _i++) {
    if (allDemodulated[_i] < globalMin) globalMin = allDemodulated[_i];
    if (allDemodulated[_i] > globalMax) globalMax = allDemodulated[_i];
  }
  var epsilon = 1e-6;

  // 3. Write back to image using global normalization
  for (var _x = 0; _x < width; _x++) {
    var _demodulated = demodulatedCols[_x];
    for (var _y3 = 0; _y3 < height; _y3++) {
      var v = (_demodulated[_y3] - globalMin) / (globalMax - globalMin + epsilon) * 255;
      var bw = v > 128 ? 255 : 0;
      for (var dy = -Math.floor(blockSize / 2); dy <= Math.floor(blockSize / 2); dy++) {
        var drawY = _y3 + dy;
        if (drawY >= 0 && drawY < height) {
          var _i2 = (drawY * width + _x) * 4;
          data[_i2] = data[_i2 + 1] = data[_i2 + 2] = bw;
          data[_i2 + 3] = 255;
        }
      }
    }
  }
};

var modulatedDiffuseX = {
  apply: applyModulatedDiffuseX,
  name: 'Modulated Diffuse X',
  description: 'A filter that creates a Modulated Diffuse FM effect over the image on the X axis',
  category: DITHER_CATEGORIES.GLITCH_EFFECTS,
  handle: 'modulatedDiffuseX'
};

// Glitch dither: horizontal sine-wave displacement of a dithered image
var applyGlitch = function applyGlitch(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$amplitude = settings.amplitude,
    amplitude = _settings$amplitude === void 0 ? 10 : _settings$amplitude,
    _settings$frequency = settings.frequency,
    frequency = _settings$frequency === void 0 ? 0.05 : _settings$frequency;
  for (var y = 0; y < height; y++) {
    // Calculate horizontal glitch offset for this row
    var dx = Math.round(amplitude * Math.sin(frequency * y));
    var _loop = function _loop() {
      var idx = (y * width + x) * 4;
      var gray = data[idx]; // Only use red channel for error diffusion
      var newColor = gray < 128 ? 0 : 255;
      // Set all channels to monochrome value
      data[idx] = data[idx + 1] = data[idx + 2] = newColor;
      var error = gray - newColor;
      // Distribute error in a glitched Floyd-Steinberg pattern (red channel only)
      var distribute = function distribute(offsetIdx, factor) {
        if (offsetIdx >= 0 && offsetIdx < width * height * 4) {
          data[offsetIdx] = Math.max(0, Math.min(255, data[offsetIdx] + error * factor));
        }
      };
      // Right neighbor (glitched)
      var xr = x + 1 + dx;
      if (xr >= 0 && xr < width) {
        distribute((y * width + xr) * 4, 7 / 16);
      }
      // Bottom neighbors (glitched)
      if (y + 1 < height) {
        // Bottom left
        var xbl = x - 1 + dx;
        if (xbl >= 0 && xbl < width) {
          distribute(((y + 1) * width + xbl) * 4, 3 / 16);
        }
        // Bottom
        var xb = x + dx;
        if (xb >= 0 && xb < width) {
          distribute(((y + 1) * width + xb) * 4, 5 / 16);
        }
        // Bottom right
        var xbr = x + 1 + dx;
        if (xbr >= 0 && xbr < width) {
          distribute(((y + 1) * width + xbr) * 4, 1 / 16);
        }
      }
    };
    for (var x = 0; x < width; x++) {
      _loop();
    }
  }
  // After error diffusion, ensure all channels are strictly 0 or 255
  for (var i = 0; i < data.length; i += 4) {
    var v = data[i] < 128 ? 0 : 255;
    data[i] = data[i + 1] = data[i + 2] = v;
  }
};

var glitch = {
  apply: applyGlitch,
  name: 'Glitch',
  description: 'A filter that creates a dithering with a glitch effect',
  category: DITHER_CATEGORIES.GLITCH_EFFECTS,
  handle: 'glitch'
};

var applyWaveform = function applyWaveform(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 0 : _settings$noise,
    _settings$amplitude = settings.amplitude,
    amplitude = _settings$amplitude === void 0 ? 64 : _settings$amplitude,
    _settings$frequency = settings.frequency,
    frequency = _settings$frequency === void 0 ? 0.08 : _settings$frequency,
    _settings$phase = settings.phase,
    phase = _settings$phase === void 0 ? 0 : _settings$phase;
  // For each row, modulate the threshold using a sine wave
  for (var y = 0; y < height; y++) {
    // Calculate the threshold for this row
    var threshold = 128 + amplitude * Math.sin(frequency * y + phase);
    for (var x = 0; x < width; x++) {
      var idx = (y * width + x) * 4;
      var gray = data[idx]; // Use red channel (assume grayscale input)
      // Add noise
      if (noise > 0) {
        gray += (Math.random() - 0.5) * noise;
      }
      var value = gray > threshold ? 255 : 0;
      data[idx] = data[idx + 1] = data[idx + 2] = value;
      data[idx + 3] = 255;
    }
  }
};

var waveform = {
  apply: applyWaveform,
  name: 'Waveform',
  description: 'A filter that creates a Waveform effect (a glitch effect) over the image',
  category: DITHER_CATEGORIES.GLITCH_EFFECTS,
  handle: 'waveform'
};

// Smooth Diffuse: error diffusion with a soft, normalized 3x3 kernel
var applySmoothDiffuse = function applySmoothDiffuse(image, settings) {
  var data = image.data,
    width = image.width,
    height = image.height;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 0 : _settings$noise;
  // Create a copy of the original data
  var originalData = new Uint8ClampedArray(data);
  // Create a buffer for error distribution
  var errorBuffer = new Float32Array(width * height);

  // Soft 3x3 kernel (Gaussian-like)
  var kernel = [[1, 2, 1], [2, 4, 2], [1, 2, 1]];
  var kernelSum = 16; // Sum of all kernel values

  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var idx = (y * width + x) * 4;
      var errorIdx = y * width + x;
      // Get original gray value and add accumulated error
      var gray = originalData[idx] * 0.299 + originalData[idx + 1] * 0.587 + originalData[idx + 2] * 0.114 + errorBuffer[errorIdx];
      // Add noise
      gray += (Math.random() - 0.5) * noise;
      // Threshold to black or white
      var newColor = gray < 128 ? 0 : 255;
      data[idx] = newColor;
      data[idx + 1] = newColor;
      data[idx + 2] = newColor;
      data[idx + 3] = 255;
      // Calculate error
      var error = gray - newColor;
      // Distribute error using the soft kernel
      for (var ky = 0; ky < 3; ky++) {
        for (var kx = 0; kx < 3; kx++) {
          if (ky === 1 && kx === 1) continue; // skip center
          var newY = y + (ky - 1);
          var newX = x + (kx - 1);
          if (newY >= 0 && newY < height && newX >= 0 && newX < width) {
            var newErrorIdx = newY * width + newX;
            errorBuffer[newErrorIdx] += error * kernel[ky][kx] / kernelSum;
          }
        }
      }
    }
  }
};

var smoothDiffuse = {
  apply: applySmoothDiffuse,
  name: 'Smooth Diffuse',
  description: 'A filter that creates a Smooth Diffuse dithering effect',
  category: DITHER_CATEGORIES.GLITCH_EFFECTS,
  handle: 'smoothDiffuse'
};

var BLOCK_SIZE = 16;
var applyJpegGlitch = function applyJpegGlitch(image, settings) {
  var width = image.width,
    height = image.height,
    data = image.data;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 1 : _settings$noise;

  // Choose a corruption start line (e.g., 30% to 70% of the image)
  var startLine = Math.floor(height * (0.1 + Math.random() * 0.5));
  var blockSize = BLOCK_SIZE;
  var out = new Uint8ClampedArray(data);

  // Global horizontal shift and color tint for the corrupted area
  var globalShift = Math.floor((Math.random() - 0.5) * width * 0.2);
  var globalHueShift = Math.random();
  for (var y = 0; y < height; y++) {
    if (y < startLine) {
      // Copy line as is
      for (var x = 0; x < width; x++) {
        var idx = (y * width + x) * 4;
        out[idx] = data[idx];
        out[idx + 1] = data[idx + 1];
        out[idx + 2] = data[idx + 2];
        out[idx + 3] = data[idx + 3];
      }
    }
  }

  // Helper to corrupt blocks in a region
  function corruptBlocksInRegion(_ref) {
    var yStart = _ref.yStart,
      yEnd = _ref.yEnd,
      blockStart = _ref.blockStart,
      _ref$compensateGlobal = _ref.compensateGlobalShift,
      compensateGlobalShift = _ref$compensateGlobal === void 0 ? false : _ref$compensateGlobal;
    // Each block is either BLOCK_SIZE or full width, probability of BLOCK_SIZE is noise/50
    var probBlockSize = Math.max(0, Math.min(1, noise / 50));
    var lastWasFullWidth = false;
    for (var by = yStart; by < yEnd; by += blockSize) {
      for (var bx = blockStart; bx < width;) {
        // Never allow two full-width blocks in a row
        var useBlockSize = void 0;
        if (lastWasFullWidth) {
          useBlockSize = true;
        } else {
          useBlockSize = Math.random() < probBlockSize;
        }
        var blockWidth = useBlockSize ? blockSize : width - bx;
        lastWasFullWidth = !useBlockSize;
        // Pick corruption params for this block
        var corruptionType = Math.random();
        var shiftX = Math.floor((Math.random() - 0.5) * blockSize * 2) + globalShift;
        var hueShift = (globalHueShift + Math.random() * 0.2) % 1;
        var quant = 32 + Math.floor(Math.random() * 96);
        var channelsOrder = [0, 1, 2];
        if (Math.random() < 0.5) channelsOrder = [2, 0, 1];
        for (var _y = by; _y < by + blockSize && _y < height && _y < yEnd; _y++) {
          for (var _x = bx; _x < bx + blockWidth && _x < width; _x++) {
            var dstX = _x + shiftX;
            if (compensateGlobalShift) dstX -= globalShift;
            dstX = Math.max(0, Math.min(width - 1, dstX));
            var srcIdx = (_y * width + _x) * 4;
            var dstIdx = (_y * width + dstX) * 4;
            var r = data[srcIdx];
            var g = data[srcIdx + 1];
            var b = data[srcIdx + 2];
            var a = data[srcIdx + 3];
            if (corruptionType < 0.4) {
              var _rgbToHsl = rgbToHsl(r, g, b),
                _rgbToHsl2 = _slicedToArray(_rgbToHsl, 3),
                h = _rgbToHsl2[0],
                s = _rgbToHsl2[1],
                l = _rgbToHsl2[2];
              h = (h + hueShift) % 1;
              s = Math.min(1, s + 0.5 * Math.random());
              var _hslToRgb = hslToRgb(h, s, l);
              var _hslToRgb2 = _slicedToArray(_hslToRgb, 3);
              r = _hslToRgb2[0];
              g = _hslToRgb2[1];
              b = _hslToRgb2[2];
              out[dstIdx] = r;
              out[dstIdx + 1] = g;
              out[dstIdx + 2] = b;
              out[dstIdx + 3] = a;
            } else if (corruptionType < 0.8) {
              var channels = [r, g, b];
              channels = [channels[channelsOrder[0]], channels[channelsOrder[1]], channels[channelsOrder[2]]];
              r = Math.round(channels[0] / quant) * quant;
              g = Math.round(channels[1] / quant) * quant;
              b = Math.round(channels[2] / quant) * quant;
              out[dstIdx] = r;
              out[dstIdx + 1] = g;
              out[dstIdx + 2] = b;
              out[dstIdx + 3] = a;
            } else {
              out[dstIdx] = Math.floor(Math.random() * 256);
              out[dstIdx + 1] = Math.floor(Math.random() * 256);
              out[dstIdx + 2] = Math.floor(Math.random() * 256);
              out[dstIdx + 3] = a;
            }
          }
        }
        bx += blockWidth;
      }
    }
  }
  // 1. Extra row above the first corrupted row, with random block offset
  if (startLine - blockSize >= 0) {
    var _y2 = startLine - blockSize;
    var blockStart = Math.floor(Math.random() * width - blockSize);
    corruptBlocksInRegion({
      yStart: _y2,
      yEnd: _y2 + blockSize,
      blockStart: blockStart,
      compensateGlobalShift: false
    });
  }
  // 2. Main corrupted area, always start at x=0
  corruptBlocksInRegion({
    yStart: startLine,
    yEnd: height,
    blockStart: 0,
    compensateGlobalShift: true
  });
  // Copy the result back to the original data array
  for (var i = 0; i < data.length; i++) {
    data[i] = out[i];
  }
};

var jpegGlitch = {
  apply: applyJpegGlitch,
  name: 'JPEG Glitch',
  description: 'A filter that creates a JPEG Glitch effect',
  category: DITHER_CATEGORIES.GLITCH_EFFECTS,
  handle: 'jpegGlitch'
};

var applyColorMosaic = function applyColorMosaic(image, settings) {
  var width = image.width,
    height = image.height,
    data = image.data;
  var _settings$noise = settings.noise,
    noise = _settings$noise === void 0 ? 1 : _settings$noise;
  var blockSize = 8;
  var numBlocks = Math.floor(noise * (width * height) / (blockSize * blockSize) * 0.5);

  // Copy the original image
  var out = new Uint8ClampedArray(data);
  for (var n = 0; n < numBlocks; n++) {
    var bx = Math.floor(Math.random() * (width / blockSize));
    var by = Math.floor(Math.random() * (height / blockSize));
    var shift = Math.floor((Math.random() - 0.5) * blockSize * 2);
    for (var y = 0; y < blockSize; y++) {
      var srcY = by * blockSize + y;
      if (srcY >= height) continue;
      for (var x = 0; x < blockSize; x++) {
        var srcX = bx * blockSize + x;
        var dstX = Math.max(0, Math.min(width - 1, srcX + shift));
        if (srcX >= width) continue;
        var srcIdx = (srcY * width + srcX) * 4;
        var dstIdx = (srcY * width + dstX) * 4;
        out[dstIdx] = data[srcIdx];
        out[dstIdx + 1] = data[srcIdx + 1];
        out[dstIdx + 2] = data[srcIdx + 2];
        out[dstIdx + 3] = data[srcIdx + 3];
      }
    }
  }

  // Copy the result back to the original data array
  for (var i = 0; i < data.length; i++) {
    data[i] = out[i];
  }
};

var colorMosaic = {
  apply: applyColorMosaic,
  name: 'Color Mosaic',
  description: 'A filter that creates a color mosaic effect',
  category: DITHER_CATEGORIES.GLITCH_EFFECTS,
  handle: 'colorMosaic'
};

// Bilinear interpolation helper
var bilinearSample = function bilinearSample(data, width, height, x, y) {
  var x0 = Math.floor(x);
  var x1 = Math.min(x0 + 1, width - 1);
  var y0 = Math.floor(y);
  var y1 = Math.min(y0 + 1, height - 1);
  var dx = x - x0;
  var dy = y - y0;
  function getPixel(ix, iy) {
    var idx = (iy * width + ix) * 4;
    return [data[idx], data[idx + 1], data[idx + 2], data[idx + 3]];
  }
  var c00 = getPixel(x0, y0);
  var c10 = getPixel(x1, y0);
  var c01 = getPixel(x0, y1);
  var c11 = getPixel(x1, y1);
  var c0 = c00.map(function (v, i) {
    return v * (1 - dx) + c10[i] * dx;
  });
  var c1 = c01.map(function (v, i) {
    return v * (1 - dx) + c11[i] * dx;
  });
  return c0.map(function (v, i) {
    return Math.round(v * (1 - dy) + c1[i] * dy);
  });
};

// Simple 1D horizontal box blur for demonstration
function boxBlurX(src, width, height, radius) {
  var dst = new Uint8ClampedArray(src.length);
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var r = 0,
        g = 0,
        b = 0,
        a = 0,
        count = 0;
      for (var dx = -radius; dx <= radius; dx++) {
        var xx = Math.max(0, Math.min(width - 1, x + dx));
        var _idx = (y * width + xx) * 4;
        r += src[_idx];
        g += src[_idx + 1];
        b += src[_idx + 2];
        a += src[_idx + 3];
        count++;
      }
      var idx = (y * width + x) * 4;
      dst[idx] = r / count;
      dst[idx + 1] = g / count;
      dst[idx + 2] = b / count;
      dst[idx + 3] = a / count;
    }
  }
  return dst;
}
function applyReededGlass(image, settings) {
  var _settings$amplitude, _settings$frequency, _settings$phase, _settings$blurRadius, _settings$sharpness;
  var width = image.width,
    height = image.height,
    data = image.data;
  var amplitude = ((_settings$amplitude = settings.amplitude) !== null && _settings$amplitude !== void 0 ? _settings$amplitude : 1) * 30;
  var frequency = ((_settings$frequency = settings.frequency) !== null && _settings$frequency !== void 0 ? _settings$frequency : 1) * 600;
  var phase = (_settings$phase = settings.phase) !== null && _settings$phase !== void 0 ? _settings$phase : 0;
  var blurRadius = (_settings$blurRadius = settings.blurRadius) !== null && _settings$blurRadius !== void 0 ? _settings$blurRadius : 3;
  var sharpness = (_settings$sharpness = settings.sharpness) !== null && _settings$sharpness !== void 0 ? _settings$sharpness : 2.5; // try 2.5 for a sharp lens

  var original = new Uint8ClampedArray(data);
  var blurred = boxBlurX(original, width, height, blurRadius);
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var u = x / width;
      var flutePos = (u * frequency + phase / (2 * Math.PI)) % 1;
      var fluteCenter = flutePos - 0.5;
      // Sharper lens: sin^sharpness
      var lensOffset = amplitude * Math.sign(fluteCenter) * Math.pow(Math.abs(Math.sin(Math.PI * fluteCenter)), sharpness);
      var sampleX = Math.max(0, Math.min(width - 1, x + lensOffset));
      var colorSharp = bilinearSample(original, width, height, sampleX, y);
      var colorBlur = bilinearSample(blurred, width, height, sampleX, y);

      // Sharper blur transition at edge
      var edgeDist = Math.abs(fluteCenter) * 2; // 0 at center, 1 at edge
      var blend = Math.min(1, Math.max(0, (edgeDist - 0.85) / 0.15)); // sharper edge

      var idx = (y * width + x) * 4;
      for (var c = 0; c < 4; c++) {
        data[idx + c] = Math.round(colorSharp[c] * (1 - blend) + colorBlur[c] * blend);
      }
    }
  }
}

var reededGlass = {
  apply: applyReededGlass,
  name: 'Reeded Glass',
  description: 'A filter that creates a Reeded Glass effect on the image',
  category: DITHER_CATEGORIES.GLITCH_EFFECTS,
  handle: 'reededGlass'
};

// Default ASCII characters size
var DEFAULT_ASCII_SIZE = 13;
var applyAlphanumeric = function applyAlphanumeric(image, settings) {
  var _settings$invert;
  var width = image.width,
    height = image.height;
  var verticalBlockSize = DEFAULT_ASCII_SIZE;
  var horizontalBlockSize = DEFAULT_ASCII_SIZE * 0.604;
  var ASCII_CHARS = '@#W$9876543210?!abc;:+=-,._ ';
  var negative = (_settings$invert = settings.invert) !== null && _settings$invert !== void 0 ? _settings$invert : false;
  var gamma = 0.7;
  var canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = negative ? 'black' : 'white';
  ctx.fillRect(0, 0, width, height);
  ctx.font = "bold ".concat(verticalBlockSize, "px monospace");
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'left';
  ctx.fillStyle = negative ? 'white' : 'black';
  var original = new Uint8ClampedArray(image.data);
  for (var y0 = 0; y0 < height; y0 += verticalBlockSize) {
    var rowString = '';
    for (var x0 = 0; x0 < width; x0 += horizontalBlockSize) {
      // Sample center pixel only
      var cx = Math.min(width - 1, Math.floor(x0 + horizontalBlockSize / 2));
      var cy = Math.min(height - 1, Math.floor(y0 + verticalBlockSize / 2));
      var idx = (cy * width + cx) * 4;
      var lum = 0.299 * original[idx] + 0.587 * original[idx + 1] + 0.114 * original[idx + 2];
      var normBrightness = Math.pow(lum / 255, gamma);
      var charIdx = Math.floor(normBrightness * (ASCII_CHARS.length - 1));
      if (negative) {
        charIdx = ASCII_CHARS.length - 1 - charIdx;
      }
      var char = ASCII_CHARS[charIdx];
      rowString += char;
    }
    ctx.fillText(rowString, 0, y0 + verticalBlockSize / 2);
  }
  var asciiImage = ctx.getImageData(0, 0, width, height);
  for (var i = 0; i < image.data.length; i++) {
    image.data[i] = asciiImage.data[i];
  }
};

var alphanumeric = {
  apply: applyAlphanumeric,
  name: 'Alphanumeric',
  handle: 'alphanumeric',
  description: 'A dithering algorithm that uses a 3x3 grid to distribute error',
  category: DITHER_CATEGORIES.ASCII
};

// Error Diffusion

var dither = /*#__PURE__*/Object.freeze({
	__proto__: null,
	alphanumeric: alphanumeric,
	atkinson: atkinson,
	atkinsonVHS: atkinsonVHS,
	bayer: bayer,
	bayerMatrix2x2: bayerMatrix2x2,
	bayerMatrix4x4: bayerMatrix4x4,
	bayerOrdered: bayerOrdered,
	bayerVoid: bayerVoid,
	bitTone: bitTone,
	burkes: burkes,
	colorMosaic: colorMosaic,
	compositeVideo: compositeVideo,
	crt: crt,
	floydSteinberg: floydSteinberg,
	fractalify: fractalify,
	gaussian: gaussian,
	glitch: glitch,
	halftone: halftone,
	jarvisJudiceNinke: jarvisJudiceNinke,
	joyPlot: joyPlot,
	jpegGlitch: jpegGlitch,
	linesGlitch: linesGlitch,
	lz77: lz77,
	modulatedDiffuseX: modulatedDiffuseX,
	modulatedDiffuseY: modulatedDiffuseY,
	mosaic: mosaic,
	ordered: ordered,
	ostromukhov: ostromukhov,
	random: random,
	randomOrdered: randomOrdered,
	reededGlass: reededGlass,
	ruttEtra: ruttEtra,
	sierra: sierra,
	sierraLite: sierraLite,
	smoothDiffuse: smoothDiffuse,
	stevensonArce: stevensonArce,
	stucki: stucki,
	stukiDiffusionLines: stukiDiffusionLines,
	twoRowSierra: twoRowSierra,
	waveform: waveform
});

var dithers$1 = Object.values(dither);
var runDither = function runDither(image, settings) {
  image.data;
    image.width;
    image.height;
  var style = settings.style;
    settings.noise;
  var dither = dithers$1.find(function (d) {
    return d.name === style;
  });
  if (dither) {
    dither.apply(image, settings);
  }
};
var applyDither = function applyDither(ctx, img, settings) {
  var _ctx$canvas = ctx.canvas,
    width = _ctx$canvas.width,
    height = _ctx$canvas.height;

  // Clear the canvas
  ctx.clearRect(0, 0, width, height);

  // Calculate scaled dimensions for pixelation
  var scaledWidth = Math.floor(width / settings.pixelationScale);
  var scaledHeight = Math.floor(height / settings.pixelationScale);

  // Create a temporary canvas for the intermediate step
  var tempCanvas = document.createElement('canvas');
  tempCanvas.width = scaledWidth;
  tempCanvas.height = scaledHeight;
  var tempCtx = tempCanvas.getContext('2d');

  // Draw scaled down on temp canvas
  tempCtx.imageSmoothingEnabled = false;
  tempCtx.drawImage(img, 0, 0, scaledWidth, scaledHeight);

  // Draw from temp canvas to main canvas with crisp pixels
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(tempCanvas, 0, 0, width, height);

  // Get image data
  var imageData = ctx.getImageData(0, 0, width, height);
  var data = imageData.data;
  if (settings.ditheringScale > 1) {
    var scaled = scaleDitheredImage(ctx, width, height, settings.ditheringScale);
    var scaledCtx = scaled.tempCtx,
      ditherWidth = scaled.scaledWidth,
      ditherHeight = scaled.scaledHeight,
      scaledImageData = scaled.imageData,
      scaledData = scaled.data;
    preprocessImage({
      data: scaledData,
      width: ditherWidth,
      height: ditherHeight
    }, settings);
    runDither({
      data: scaledData,
      width: ditherWidth,
      height: ditherHeight
    }, settings);
    scaledCtx.putImageData(scaledImageData, 0, 0);
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(scaledCtx.canvas, 0, 0, width, height);
  } else {
    preprocessImage({
      data: data,
      width: width,
      height: height
    }, settings);
    runDither({
      data: data,
      width: width,
      height: height
    }, settings);
    ctx.putImageData(imageData, 0, 0);
  }

  // Apply glow effect if enabled
  if (settings.glow > 0) {
    ctx.filter = "blur(".concat(settings.glow / 10, "px)");
    ctx.globalCompositeOperation = 'lighter';
    ctx.drawImage(ctx.canvas, 0, 0);
    ctx.filter = 'none';
    ctx.globalCompositeOperation = 'source-over';
  }
};

var styles$3 = {"imageArea":"ImagePreview-module_imageArea__W40O3","uploadArea":"ImagePreview-module_uploadArea__dnP61","uploadText":"ImagePreview-module_uploadText__lXgOh","canvas":"ImagePreview-module_canvas__fwxQR","originalCanvas":"ImagePreview-module_originalCanvas__yhqN9","show":"ImagePreview-module_show__uzA3c","hide":"ImagePreview-module_hide__lFmCx","imageContainer":"ImagePreview-module_imageContainer__k8tbz","imageButtons":"ImagePreview-module_imageButtons__rPH7q","changeImageButton":"ImagePreview-module_changeImageButton__piBg5","exportButton":"ImagePreview-module_exportButton__9LsA3","clearButton":"ImagePreview-module_clearButton__hLLq4","imageWrapper":"ImagePreview-module_imageWrapper__w2dVa","image":"ImagePreview-module_image__V1D7W"};

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

var Actions = function Actions(_ref) {
  var onChangeImage = _ref.onChangeImage,
    onExport = _ref.onExport,
    onClearImage = _ref.onClearImage;
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    className: styles$3.imageButtons,
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("button", {
      onClick: onChangeImage,
      className: styles$3.changeImageButton,
      children: "Load Image"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
      onClick: onExport,
      className: styles$3.exportButton,
      children: "Save"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
      onClick: onClearImage,
      className: styles$3.clearButton,
      children: "Clear Image"
    })]
  });
};

var saveImage = function saveImage(canvasRef) {
  try {
    var _canvasRef$current;
    // Create a temporary link element
    var link = document.createElement('a');
    link.download = "".concat(FILE_NAME_PREFIX, "-").concat(Date.now(), ".png");

    // Convert canvas to data URL and trigger download
    var dataUrl = (_canvasRef$current = canvasRef.current) === null || _canvasRef$current === void 0 ? void 0 : _canvasRef$current.toDataURL('image/png');
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error('Failed to export image:', error);
  }
};

var ImagePreview = function ImagePreview(_ref) {
  var image = _ref.image,
    settings = _ref.settings,
    onImageUpload = _ref.onImageUpload,
    onCanvasRef = _ref.onCanvasRef,
    onBeforeImageChange = _ref.onBeforeImageChange,
    onAfterImageChange = _ref.onAfterImageChange;
  var canvasRef = reactExports.useRef(null);
  var originalCanvasRef = reactExports.useRef(null);
  var fileInputRef = reactExports.useRef(null);
  var _useState = reactExports.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showOriginal = _useState2[0],
    setShowOriginal = _useState2[1];

  // Update loading state when settings change
  reactExports.useEffect(function () {
    onBeforeImageChange();
  }, [settings]);

  // Update canvas ref whenever it changes
  reactExports.useEffect(function () {
    if (canvasRef.current) {
      onCanvasRef(canvasRef.current);
    }
    return function () {
      return onCanvasRef(null);
    };
  }, [onCanvasRef]);

  // Save image to localStorage when it changes
  reactExports.useEffect(function () {
    if (image) {
      try {
        localStorage.setItem(STORAGE_KEY, image);
      } catch (e) {
        console.error(e);
      }
    }
  }, [image]);

  // Load image from localStorage on mount
  reactExports.useEffect(function () {
    var savedImage = localStorage.getItem(STORAGE_KEY);
    if (savedImage && !image) {
      onImageUpload({
        target: {
          value: savedImage
        }
      });
    }
  }, []);
  reactExports.useEffect(function () {
    onBeforeImageChange();
    setTimeout(function () {
      if (image && canvasRef.current) {
        var img = new Image();
        img.onload = function () {
          if (canvasRef.current) {
            var ctx = canvasRef.current.getContext('2d');
            if (!ctx) return;

            // Calculate scaled dimensions based on pixelation scale
            var pixelationScale = settings.pixelationScale;
            var scaledWidth = Math.floor(img.width / pixelationScale);
            var scaledHeight = Math.floor(img.height / pixelationScale);

            // Set canvas size
            canvasRef.current.width = scaledWidth * pixelationScale;
            canvasRef.current.height = scaledHeight * pixelationScale;

            // Apply dithering effect with one of the available styles
            applyDither(ctx, img, settings);
          }
        };
        img.src = image;
      }
      onAfterImageChange();
    }, 50);
  }, [image, settings]);

  // Draw original image to originalCanvasRef
  reactExports.useEffect(function () {
    if (image && originalCanvasRef.current) {
      var img = new Image();
      img.onload = function () {
        if (originalCanvasRef.current) {
          var ctx = originalCanvasRef.current.getContext('2d');
          if (!ctx) return;
          originalCanvasRef.current.width = img.width;
          originalCanvasRef.current.height = img.height;
          ctx.drawImage(img, 0, 0, img.width, img.height);
        }
      };
      img.src = image;
    }
  }, [image]);
  var handleChangeClick = function handleChangeClick() {
    var _fileInputRef$current;
    (_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 || _fileInputRef$current.click();
  };
  var handleExport = function handleExport() {
    if (!canvasRef.current || !image) return;
    saveImage(canvasRef);
  };
  var handleClearImage = function handleClearImage() {
    localStorage.removeItem(STORAGE_KEY);
    onImageUpload({
      target: {
        value: null
      }
    });
  };
  var handleShowOriginal = function handleShowOriginal(e) {
    if (e.button === 0) {
      setShowOriginal(true);
    }
  };
  var handleHideOriginal = function handleHideOriginal() {
    return setShowOriginal(false);
  };
  var handleDrop = function handleDrop(event) {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      onImageUpload({
        target: {
          files: event.dataTransfer.files
        }
      });
    }
  };
  var handleDragOver = function handleDragOver(event) {
    event.preventDefault();
  };
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    className: styles$3.imageArea,
    children: [!image && /*#__PURE__*/jsxRuntimeExports.jsxs("label", {
      className: styles$3.uploadArea,
      onDrop: handleDrop,
      onDragOver: handleDragOver,
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("input", {
        ref: fileInputRef,
        type: "file",
        hidden: true,
        accept: "image/*",
        onChange: onImageUpload
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        className: styles$3.uploadText,
        children: "Drop image here or click to upload"
      })]
    }), image && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      className: styles$3.imageContainer,
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("canvas", {
        ref: canvasRef,
        className: styles$3.canvas,
        onMouseDown: handleShowOriginal,
        onMouseUp: handleHideOriginal,
        onMouseLeave: handleHideOriginal,
        onTouchStart: handleShowOriginal,
        onTouchEnd: handleHideOriginal
      }), /*#__PURE__*/jsxRuntimeExports.jsx("canvas", {
        ref: originalCanvasRef,
        className: cn(styles$3.canvas, styles$3.originalCanvas, showOriginal ? styles$3.show : styles$3.hide),
        tabIndex: -1
      }), /*#__PURE__*/jsxRuntimeExports.jsx(Actions, {
        onChangeImage: handleChangeClick,
        onExport: handleExport,
        onClearImage: handleClearImage
      }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
        ref: fileInputRef,
        type: "file",
        hidden: true,
        accept: "image/*",
        onChange: onImageUpload
      })]
    })]
  });
};

var dithers = Object.values(dither);

// Define the dither styles as a const array
var DITHER_OPTIONS = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, DITHER_CATEGORIES.DEFAULT, ['None']), DITHER_CATEGORIES.ERROR_DIFFUSION, dithers.filter(function (d) {
  return d.category === DITHER_CATEGORIES.ERROR_DIFFUSION;
}).map(function (d) {
  return d.name;
})), DITHER_CATEGORIES.ORDERED_DITHERING, dithers.filter(function (d) {
  return d.category === DITHER_CATEGORIES.ORDERED_DITHERING;
}).map(function (d) {
  return d.name;
})), DITHER_CATEGORIES.GLITCH_EFFECTS, dithers.filter(function (d) {
  return d.category === DITHER_CATEGORIES.GLITCH_EFFECTS;
}).map(function (d) {
  return d.name;
})), DITHER_CATEGORIES.ASCII, dithers.filter(function (d) {
  return d.category === DITHER_CATEGORIES.ASCII;
}).map(function (d) {
  return d.name;
}));

// Flatten all dither options into a single array
var DITHER_STYLES = Object.values(DITHER_OPTIONS).flat();

// Add a list of styles that support dithering scale
var SCALED_STYLES = DITHER_STYLES;
var SETTINGS = {
  style: {
    type: 'select',
    options: DITHER_STYLES,
    defaultValue: DITHER_STYLES[0]
  },
  pixelationScale: {
    type: 'range',
    defaultValue: 1,
    min: 1,
    max: 10,
    step: 1
  },
  ditheringScale: {
    type: 'range',
    defaultValue: 1,
    min: 1,
    max: 10,
    step: 1
  },
  detailEnhancement: {
    type: 'range',
    defaultValue: 50,
    min: 0,
    max: 100,
    step: 1
  },
  brightness: {
    type: 'range',
    defaultValue: 0,
    min: -100,
    max: 100,
    step: 1
  },
  midtones: {
    type: 'range',
    defaultValue: 1,
    min: 0,
    max: 100,
    step: 1
  },
  noise: {
    type: 'range',
    defaultValue: 0,
    min: 0,
    max: 100,
    step: 1
  },
  glow: {
    type: 'range',
    defaultValue: 0,
    min: 0,
    max: 100,
    step: 1
  },
  luminanceThreshold: {
    type: 'range',
    defaultValue: -1,
    min: -1,
    max: 1,
    step: 0.01
  },
  verticalScanlineFrequency: {
    type: 'range',
    defaultValue: -1,
    min: -1,
    max: 1,
    step: 0.01
  },
  invert: {
    type: 'boolean',
    defaultValue: false
  },
  blur: {
    type: 'range',
    defaultValue: 0,
    min: 0,
    max: 100,
    step: 1
  },
  amplitude: {
    type: 'range',
    defaultValue: 0.5,
    min: 0,
    max: 3,
    step: 0.01
  },
  frequency: {
    type: 'range',
    defaultValue: 0.005,
    min: 0,
    max: 0.3,
    step: 0.005
  },
  phase: {
    type: 'range',
    defaultValue: 0,
    min: 0,
    max: 6,
    step: 0.01
  },
  blockSize: {
    type: 'range',
    defaultValue: 1,
    min: 1,
    max: 10,
    step: 1
  },
  grayscale: {
    type: 'boolean',
    defaultValue: false
  }
};
var DEFAULT_SETTINGS = Object.fromEntries(Object.entries(SETTINGS).map(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    key = _ref2[0],
    value = _ref2[1];
  return [key, value.defaultValue];
}));

var styles$2 = {"controls":"Controls-module_controls__-f-Oj","buttonGroup":"Controls-module_buttonGroup__Y41Uw","controlGroup":"Controls-module_controlGroup__lK5x4","styleGroup":"Controls-module_styleGroup__o3Jpu","controlLabel":"Controls-module_controlLabel__q7ryY","checkboxGroup":"Controls-module_checkboxGroup__OH7V4","value":"Controls-module_value__VzQOW","select":"Controls-module_select__O6gYR","slider":"Controls-module_slider__4WHk-","resetButton":"Controls-module_resetButton__6wSmK"};

var ModulatedDiffuseControls = function ModulatedDiffuseControls(_ref) {
  var settings = _ref.settings,
    onSettingChange = _ref.onSettingChange;
  return /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      className: styles$2.controlGroup,
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("label", {
        className: styles$2.controlLabel,
        children: ["Amplitude", /*#__PURE__*/jsxRuntimeExports.jsx("span", {
          className: styles$2.value,
          children: settings.amplitude
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
        type: "range",
        min: "0.1",
        max: "3",
        step: "0.01",
        value: settings.amplitude,
        onChange: function onChange(e) {
          return onSettingChange('amplitude', Number(e.target.value));
        },
        className: styles$2.slider
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      className: styles$2.controlGroup,
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("label", {
        className: styles$2.controlLabel,
        children: ["Frequency", /*#__PURE__*/jsxRuntimeExports.jsx("span", {
          className: styles$2.value,
          children: settings.frequency
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
        type: "range",
        min: "0.005",
        max: "0.3",
        step: "0.005",
        value: settings.frequency,
        onChange: function onChange(e) {
          return onSettingChange('frequency', Number(e.target.value));
        },
        className: styles$2.slider
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      className: styles$2.controlGroup,
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("label", {
        className: styles$2.controlLabel,
        children: ["Phase", /*#__PURE__*/jsxRuntimeExports.jsx("span", {
          className: styles$2.value,
          children: settings.phase
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
        type: "range",
        min: "0",
        max: String(2 * Math.PI),
        step: "0.01",
        value: settings.phase,
        onChange: function onChange(e) {
          return onSettingChange('phase', Number(e.target.value));
        },
        className: styles$2.slider
      })]
    })]
  });
};

var Controls = function Controls(_ref) {
  var settings = _ref.settings,
    onSettingChange = _ref.onSettingChange,
    onReset = _ref.onReset;
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    className: styles$2.controls,
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      className: cn(styles$2.controlGroup, styles$2.styleGroup),
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("label", {
        htmlFor: "style-select",
        className: styles$2.controlLabel,
        children: "Style:"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("select", {
        id: "style-select",
        className: styles$2.select,
        value: settings.style,
        onChange: function onChange(e) {
          return onSettingChange('style', e.target.value);
        },
        children: Object.entries(DITHER_OPTIONS).map(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
            group = _ref3[0],
            styles = _ref3[1];
          return /*#__PURE__*/jsxRuntimeExports.jsx("optgroup", {
            label: group,
            children: styles.map(function (style) {
              return /*#__PURE__*/jsxRuntimeExports.jsx("option", {
                value: style,
                children: style
              }, style);
            })
          }, group);
        })
      })]
    }), SCALED_STYLES.includes(settings.style) && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      className: styles$2.controlGroup,
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("label", {
        className: styles$2.controlLabel,
        children: ["Dithering Scale", /*#__PURE__*/jsxRuntimeExports.jsx("span", {
          className: styles$2.value,
          children: settings.ditheringScale
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
        type: "range",
        min: "1",
        max: "15",
        step: "1",
        value: settings.ditheringScale,
        onChange: function onChange(e) {
          return onSettingChange('ditheringScale', Number(e.target.value));
        },
        className: styles$2.slider
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      className: styles$2.controlGroup,
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("label", {
        className: styles$2.controlLabel,
        children: ["Detail Enhancement", /*#__PURE__*/jsxRuntimeExports.jsx("span", {
          className: styles$2.value,
          children: settings.detailEnhancement
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
        type: "range",
        min: "0",
        max: "100",
        value: settings.detailEnhancement,
        onChange: function onChange(e) {
          return onSettingChange('detailEnhancement', Number(e.target.value));
        },
        className: styles$2.slider
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      className: styles$2.controlGroup,
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("label", {
        className: styles$2.controlLabel,
        children: ["Brightness", /*#__PURE__*/jsxRuntimeExports.jsx("span", {
          className: styles$2.value,
          children: settings.brightness
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
        type: "range",
        min: "-100",
        max: "100",
        value: settings.brightness,
        onChange: function onChange(e) {
          return onSettingChange('brightness', Number(e.target.value));
        },
        className: styles$2.slider
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      className: styles$2.controlGroup,
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("label", {
        className: styles$2.controlLabel,
        children: ["Midtones", /*#__PURE__*/jsxRuntimeExports.jsx("span", {
          className: styles$2.value,
          children: settings.midtones.toFixed(2)
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
        type: "range",
        min: "0.5",
        max: "2",
        step: "0.01",
        value: settings.midtones,
        onChange: function onChange(e) {
          return onSettingChange('midtones', Number(e.target.value));
        },
        className: styles$2.slider
      })]
    }), settings.style !== 'Modulated Diffuse Y' && settings.style !== 'Modulated Diffuse X' && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      className: styles$2.controlGroup,
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("label", {
        className: styles$2.controlLabel,
        children: ["Noise", /*#__PURE__*/jsxRuntimeExports.jsx("span", {
          className: styles$2.value,
          children: settings.noise
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
        type: "range",
        min: "0",
        max: "50",
        value: settings.noise,
        onChange: function onChange(e) {
          return onSettingChange('noise', Number(e.target.value));
        },
        className: styles$2.slider
      })]
    }), settings.style === 'AAAAAA' &&
    /*#__PURE__*/
    // temporarily disabled 
    jsxRuntimeExports.jsxs("div", {
      className: styles$2.controlGroup,
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("label", {
        className: styles$2.controlLabel,
        children: ["Luminance Threshold", /*#__PURE__*/jsxRuntimeExports.jsx("span", {
          className: styles$2.value,
          children: settings.luminanceThreshold
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
        type: "range",
        min: "0",
        max: "255",
        value: settings.luminanceThreshold,
        onChange: function onChange(e) {
          return onSettingChange('luminanceThreshold', Number(e.target.value));
        },
        className: styles$2.slider
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      className: styles$2.controlGroup,
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("label", {
        className: styles$2.controlLabel,
        children: ["Blur", /*#__PURE__*/jsxRuntimeExports.jsx("span", {
          className: styles$2.value,
          children: settings.blur
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
        type: "range",
        min: "0",
        max: "100",
        value: settings.blur,
        onChange: function onChange(e) {
          return onSettingChange('blur', Number(e.target.value));
        },
        className: styles$2.slider
      })]
    }), (settings.style === 'Modulated Diffuse Y' || settings.style === 'Modulated Diffuse X' || settings.style === 'Composite Video' || settings.style === 'Fractalify' || settings.style === 'Joy Plot' || settings.style === 'Rutt-Etra' || settings.style === 'CRT' || settings.style === 'LZ77' || settings.style === 'Reeded Glass') && /*#__PURE__*/jsxRuntimeExports.jsx(ModulatedDiffuseControls, {
      settings: settings,
      onSettingChange: onSettingChange
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      className: cn(styles$2.controlGroup, styles$2.checkboxGroup),
      children: /*#__PURE__*/jsxRuntimeExports.jsxs("label", {
        className: styles$2.controlLabel,
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("input", {
          type: "checkbox",
          checked: settings.invert,
          onChange: function onChange(e) {
            return onSettingChange('invert', e.target.checked);
          },
          className: styles$2.checkbox
        }), "Invert"]
      })
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      className: cn(styles$2.controlGroup, styles$2.checkboxGroup),
      children: /*#__PURE__*/jsxRuntimeExports.jsxs("label", {
        className: styles$2.controlLabel,
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("input", {
          type: "checkbox",
          checked: settings.grayscale,
          onChange: function onChange(e) {
            return onSettingChange('grayscale', e.target.checked);
          },
          className: styles$2.checkbox
        }), "Force grayscale"]
      })
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      className: styles$2.buttonGroup,
      children: /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: onReset,
        className: styles$2.resetButton,
        children: "Reset"
      })
    })]
  });
};

var styles$1 = {"logoContainer":"Footer-module_logoContainer__yp0r-"};

var Footer = function Footer() {
  var logo = '/logo.svg';
  return /*#__PURE__*/jsxRuntimeExports.jsxs("footer", {
    className: styles$1.logoContainer,
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("img", {
      src: logo,
      alt: "D!TR"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
      children: "D!TR - Dithering for the rest of us"
    })]
  });
};

var styles = {"container":"App-module_container__7v2Yg","mainContent":"App-module_mainContent__j694D","loading":"App-module_loading__ujnQZ"};

var App = function App() {
  var _useState = reactExports.useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    image = _useState2[0],
    setImage = _useState2[1];
  var _useState3 = reactExports.useState(DEFAULT_SETTINGS),
    _useState4 = _slicedToArray(_useState3, 2),
    settings = _useState4[0],
    setSettings = _useState4[1];
  var _useState5 = reactExports.useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var canvasRef = reactExports.useRef(null);

  // Load image from localStorage on mount
  React.useEffect(function () {
    var savedImage = localStorage.getItem(STORAGE_KEY);
    if (savedImage) {
      setImage(savedImage);
    }
    setLoading(false);
  }, []);
  var handleImageUpload = function handleImageUpload(event) {
    var _event$target$files;
    var file = (_event$target$files = event.target.files) === null || _event$target$files === void 0 ? void 0 : _event$target$files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = function (e) {
        var _e$target;
        var imageData = (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.result;
        setImage(imageData);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };
  var handleSettingChange = function handleSettingChange(setting, value) {
    setSettings(function (prev) {
      return _objectSpread2(_objectSpread2({}, prev), {}, _defineProperty({}, setting, value));
    });
  };
  var handleReset = function handleReset() {
    setSettings(DEFAULT_SETTINGS);
    setLoading(false);
  };
  var handleCanvasRef = function handleCanvasRef(ref) {
    canvasRef.current = ref;
  };
  var handleBeforeImageChange = function handleBeforeImageChange() {
    setLoading(true);
  };
  var handleAfterImageChange = function handleAfterImageChange() {
    setLoading(false);
  };
  return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
    className: styles.container,
    children: /*#__PURE__*/jsxRuntimeExports.jsxs("main", {
      className: styles.mainContent,
      children: [loading && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        className: styles.loading,
        children: /*#__PURE__*/jsxRuntimeExports.jsx("span", {
          children: "Loading..."
        })
      }), /*#__PURE__*/jsxRuntimeExports.jsx(ImagePreview, {
        image: image,
        settings: settings,
        onImageUpload: handleImageUpload,
        onCanvasRef: handleCanvasRef,
        onBeforeImageChange: handleBeforeImageChange,
        onAfterImageChange: handleAfterImageChange
      }), /*#__PURE__*/jsxRuntimeExports.jsx(Controls, {
        settings: settings,
        onSettingChange: handleSettingChange,
        onReset: handleReset
      }), /*#__PURE__*/jsxRuntimeExports.jsx(Footer, {})]
    })
  });
};

var container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
var root = createRoot(container);
root.render(/*#__PURE__*/jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
  children: /*#__PURE__*/jsxRuntimeExports.jsx(App, {})
}));
//# sourceMappingURL=index.js.map
