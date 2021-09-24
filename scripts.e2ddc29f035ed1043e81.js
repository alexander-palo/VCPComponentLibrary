window.FontAwesomeKitConfig={asyncLoading:{enabled:!0},autoA11y:{enabled:!0},baseUrl:"https://ka-p.fontawesome.com",baseUrlKit:"https://kit.fontawesome.com",detectConflictsUntil:null,iconUploads:{},id:53579311,license:"pro",method:"css",minify:{enabled:!0},token:"dddd8a44b8",uploadsUrl:"https://kit-uploads.fontawesome.com",v4FontFaceShim:{enabled:!0},v4shim:{enabled:!0},version:"5.15.3"},function(e){"function"==typeof define&&define.amd?define("kit-loader",e):e()}(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function r(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach(function(n){t(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){var n=t&&t.addOn||"",r=t&&t.baseFilename||e.license+n,a=t&&t.minify?".min":"",i=t&&t.fileSuffix||e.method,o=t&&t.subdir||e.method;return e.baseUrl+"/releases/"+("latest"===e.version?"latest":"v".concat(e.version))+"/"+o+"/"+r+a+"."+i}function s(e){return e.baseUrlKit+"/"+e.token+"/"+e.id+"/kit-upload.css"}function l(e,t){var n=t||["fa"],r="."+Array.prototype.join.call(n,",."),a=e.querySelectorAll(r);Array.prototype.forEach.call(a,function(t){var n=t.getAttribute("title");t.setAttribute("aria-hidden","true");var r=!t.nextElementSibling||!t.nextElementSibling.classList.contains("sr-only");if(n&&r){var a=e.createElement("span");a.innerHTML=n,a.classList.add("sr-only"),t.parentNode.insertBefore(a,t.nextSibling)}})}var c,u=function(){},d="undefined"!=typeof global&&void 0!==global.process&&"function"==typeof global.process.emit,f="undefined"==typeof setImmediate?setTimeout:setImmediate,g=[];function p(){for(var e=0;e<g.length;e++)g[e][0](g[e][1]);g=[],c=!1}function m(e,t){g.push([e,t]),c||(c=!0,f(p,0))}function h(e){var t=e.owner,n=t._state,r=t._data,a=e[n],i=e.then;if("function"==typeof a){n="fulfilled";try{r=a(r)}catch(e){w(i,e)}}v(i,r)||("fulfilled"===n&&b(i,r),"rejected"===n&&w(i,r))}function v(t,n){var r;try{if(t===n)throw new TypeError("A promises callback cannot return that same promise.");if(n&&("function"==typeof n||"object"===e(n))){var a=n.then;if("function"==typeof a)return a.call(n,function(e){r||(r=!0,n===e?y(t,e):b(t,e))},function(e){r||(r=!0,w(t,e))}),!0}}catch(e){return r||w(t,e),!0}return!1}function b(e,t){e!==t&&v(e,t)||y(e,t)}function y(e,t){"pending"===e._state&&(e._state="settled",e._data=t,m(k,e))}function w(e,t){"pending"===e._state&&(e._state="settled",e._data=t,m(F,e))}function A(e){e._then=e._then.forEach(h)}function k(e){e._state="fulfilled",A(e)}function F(e){e._state="rejected",A(e),!e._handled&&d&&global.process.emit("unhandledRejection",e._data,e)}function x(e){global.process.emit("rejectionHandled",e)}function P(e){if("function"!=typeof e)throw new TypeError("Promise resolver "+e+" is not a function");if(this instanceof P==0)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(e,t){function n(e){w(t,e)}try{e(function(e){b(t,e)},n)}catch(e){n(e)}}(e,this)}P.prototype={constructor:P,_state:"pending",_then:null,_data:void 0,_handled:!1,then:function(e,t){var n={owner:this,then:new this.constructor(u),fulfilled:e,rejected:t};return!t&&!e||this._handled||(this._handled=!0,"rejected"===this._state&&d&&m(x,this)),"fulfilled"===this._state||"rejected"===this._state?m(h,n):this._then.push(n),n.then},catch:function(e){return this.then(null,e)}},P.all=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.all().");return new P(function(t,n){var r=[],a=0;function i(e){return a++,function(n){r[e]=n,--a||t(r)}}for(var o,s=0;s<e.length;s++)(o=e[s])&&"function"==typeof o.then?o.then(i(s),n):r[s]=o;a||t(r)})},P.race=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.race().");return new P(function(t,n){for(var r,a=0;a<e.length;a++)(r=e[a])&&"function"==typeof r.then?r.then(t,n):t(r)})},P.resolve=function(t){return t&&"object"===e(t)&&t.constructor===P?t:new P(function(e){e(t)})},P.reject=function(e){return new P(function(t,n){n(e)})};var C="function"==typeof Promise?Promise:P;function E(e,t){var n=t.fetch,r=t.XMLHttpRequest,a=t.token,i=e;return"URLSearchParams"in window?(i=new URL(e)).searchParams.set("token",a):i=i+"?token="+encodeURIComponent(a),i=i.toString(),new C(function(e,t){if("function"==typeof n)n(i,{mode:"cors",cache:"default"}).then(function(e){if(e.ok)return e.text();throw new Error("")}).then(function(t){e(t)}).catch(t);else if("function"==typeof r){var a=new r;a.addEventListener("loadend",function(){this.responseText?e(this.responseText):t(new Error(""))}),["abort","error","timeout"].map(function(e){a.addEventListener(e,function(){t(new Error(""))})}),a.open("GET",i),a.send()}else t(new Error(""))})}function S(e,t,n){var r=e;return[[/(url\("?)\.\.\/\.\.\/\.\./g,function(e,n){return"".concat(n).concat(t)}],[/(url\("?)\.\.\/webfonts/g,function(e,r){return"".concat(r).concat(t,"/releases/v").concat(n,"/webfonts")}],[/(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g,function(e,n){return"".concat(n).concat(t)}]].forEach(function(e){var t=a(e,2),n=t[0],i=t[1];r=r.replace(n,i)}),r}function O(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},a=t.document||a,i=l.bind(l,a,["fa","fab","fas","far","fal","fad","fak"]),c=Object.keys(e.iconUploads||{}).length>0;e.autoA11y.enabled&&n(i);var u=[{id:"fa-main",addOn:void 0}];e.v4shim.enabled&&u.push({id:"fa-v4-shims",addOn:"-v4-shims"}),e.v4FontFaceShim.enabled&&u.push({id:"fa-v4-font-face",addOn:"-v4-font-face"}),c&&u.push({id:"fa-kit-upload",customCss:!0});var d=u.map(function(n){return new C(function(a,i){E(n.customCss?s(e):o(e,{addOn:n.addOn,minify:e.minify.enabled}),t).then(function(i){a(j(i,r(r({},t),{},{baseUrl:e.baseUrl,version:e.version,id:n.id,contentFilter:function(e,t){return S(e,t.baseUrl,t.version)}})))}).catch(i)})});return C.all(d)}function j(e,t){var n=t.contentFilter||function(e,t){return e},r=document.createElement("style"),a=document.createTextNode(n(e,t));return r.appendChild(a),r.media="all",t.id&&r.setAttribute("id",t.id),t&&t.detectingConflicts&&t.detectionIgnoreAttr&&r.setAttributeNode(document.createAttribute(t.detectionIgnoreAttr)),r}function T(e,t){t.autoA11y=e.autoA11y.enabled,"pro"===e.license&&(t.autoFetchSvg=!0,t.fetchSvgFrom=e.baseUrl+"/releases/"+("latest"===e.version?"latest":"v".concat(e.version))+"/svgs",t.fetchUploadedSvgFrom=e.uploadsUrl);var n=[];return e.v4shim.enabled&&n.push(new C(function(n,a){E(o(e,{addOn:"-v4-shims",minify:e.minify.enabled}),t).then(function(e){n(_(e,r(r({},t),{},{id:"fa-v4-shims"})))}).catch(a)})),n.push(new C(function(n,a){E(o(e,{minify:e.minify.enabled}),t).then(function(e){var a=_(e,r(r({},t),{},{id:"fa-main"}));n(function(e,t){var n=t&&void 0!==t.autoFetchSvg?t.autoFetchSvg:void 0,r=t&&void 0!==t.autoA11y?t.autoA11y:void 0;return void 0!==r&&e.setAttribute("data-auto-a11y",r?"true":"false"),n&&(e.setAttributeNode(document.createAttribute("data-auto-fetch-svg")),e.setAttribute("data-fetch-svg-from",t.fetchSvgFrom),e.setAttribute("data-fetch-uploaded-svg-from",t.fetchUploadedSvgFrom)),e}(a,t))}).catch(a)})),C.all(n)}function _(e,t){var n=document.createElement("SCRIPT"),r=document.createTextNode(e);return n.appendChild(r),n.referrerPolicy="strict-origin",t.id&&n.setAttribute("id",t.id),t&&t.detectingConflicts&&t.detectionIgnoreAttr&&n.setAttributeNode(document.createAttribute(t.detectionIgnoreAttr)),n}function $(e){var t,n=[],r=document,a=(r.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(r.readyState);a||r.addEventListener("DOMContentLoaded",t=function(){for(r.removeEventListener("DOMContentLoaded",t),a=1;t=n.shift();)t()}),a?setTimeout(e,0):n.push(e)}function D(e){"undefined"!=typeof MutationObserver&&new MutationObserver(e).observe(document,{childList:!0,subtree:!0})}try{if(window.FontAwesomeKitConfig){var I=window.FontAwesomeKitConfig,H={detectingConflicts:I.detectConflictsUntil&&new Date<=new Date(I.detectConflictsUntil),detectionIgnoreAttr:"data-fa-detection-ignore",fetch:window.fetch,token:I.token,XMLHttpRequest:window.XMLHttpRequest,document:document},L=document.currentScript,M=L?L.parentElement:document.head;(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"js"===e.method?T(e,t):"css"===e.method?O(e,t,function(e){$(e),D(e)}):void 0})(I,H).then(function(e){e.map(function(e){try{M.insertBefore(e,L?L.nextSibling:null)}catch(t){M.appendChild(e)}}),H.detectingConflicts&&L&&$(function(){L.setAttributeNode(document.createAttribute(H.detectionIgnoreAttr));var e=function(e,t){var n=document.createElement("script");return t&&t.detectionIgnoreAttr&&n.setAttributeNode(document.createAttribute(t.detectionIgnoreAttr)),n.src=o(e,{baseFilename:"conflict-detection",fileSuffix:"js",subdir:"js",minify:e.minify.enabled}),n}(I,H);document.body.appendChild(e)})}).catch(function(e){console.error("".concat("Font Awesome Kit:"," ").concat(e))})}}catch(e){console.error("".concat("Font Awesome Kit:"," ").concat(e))}}),function(e){e(["jquery"],function(e){return function(){function t(t,n){return t||(t=o()),(l=e("#"+t.containerId)).length||n&&(l=function(t){return(l=e("<div/>").attr("id",t.containerId).addClass(t.positionClass)).appendTo(e(t.target)),l}(t)),l}function n(t){for(var n=l.children(),a=n.length-1;a>=0;a--)r(e(n[a]),t)}function r(t,n,r){var a=!(!r||!r.force)&&r.force;return!(!t||!a&&0!==e(":focus",t).length||(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){s(t)}}),0))}function a(e){c&&c(e)}function i(n){function r(e){return null==e&&(e=""),e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function i(t){var n=t&&!1!==p.closeMethod?p.closeMethod:p.hideMethod,r=t&&!1!==p.closeDuration?p.closeDuration:p.hideDuration,i=t&&!1!==p.closeEasing?p.closeEasing:p.hideEasing;if(!e(":focus",v).length||t)return clearTimeout(k.intervalId),v[n]({duration:r,easing:i,complete:function(){s(v),clearTimeout(h),p.onHidden&&"hidden"!==F.state&&p.onHidden(),F.state="hidden",F.endTime=new Date,a(F)}})}function c(){(p.timeOut>0||p.extendedTimeOut>0)&&(h=setTimeout(i,p.extendedTimeOut),k.maxHideTime=parseFloat(p.extendedTimeOut),k.hideEta=(new Date).getTime()+k.maxHideTime)}function f(){clearTimeout(h),k.hideEta=0,v.stop(!0,!0)[p.showMethod]({duration:p.showDuration,easing:p.showEasing})}function g(){var e=(k.hideEta-(new Date).getTime())/k.maxHideTime*100;w.width(e+"%")}var p=o(),m=n.iconClass||p.iconClass;if(void 0!==n.optionsOverride&&(p=e.extend(p,n.optionsOverride),m=n.optionsOverride.iconClass||m),!function(e,t){if(e.preventDuplicates){if(t.message===u)return!0;u=t.message}return!1}(p,n)){d++,l=t(p,!0);var h=null,v=e("<div/>"),b=e("<div/>"),y=e("<div/>"),w=e("<div/>"),A=e(p.closeHtml),k={intervalId:null,hideEta:null,maxHideTime:null},F={toastId:d,state:"visible",startTime:new Date,options:p,map:n};return n.iconClass&&v.addClass(p.toastClass).addClass(m),function(){if(n.title){var e=n.title;p.escapeHtml&&(e=r(n.title)),b.append(e).addClass(p.titleClass),v.append(b)}}(),function(){if(n.message){var e=n.message;p.escapeHtml&&(e=r(n.message)),y.append(e).addClass(p.messageClass),v.append(y)}}(),p.closeButton&&(A.addClass(p.closeClass).attr("role","button"),v.prepend(A)),p.progressBar&&(w.addClass(p.progressClass),v.prepend(w)),p.rtl&&v.addClass("rtl"),p.newestOnTop?l.prepend(v):l.append(v),function(){var e="";switch(n.iconClass){case"toast-success":case"toast-info":e="polite";break;default:e="assertive"}v.attr("aria-live",e)}(),v.hide(),v[p.showMethod]({duration:p.showDuration,easing:p.showEasing,complete:p.onShown}),p.timeOut>0&&(h=setTimeout(i,p.timeOut),k.maxHideTime=parseFloat(p.timeOut),k.hideEta=(new Date).getTime()+k.maxHideTime,p.progressBar&&(k.intervalId=setInterval(g,10))),p.closeOnHover&&v.hover(f,c),!p.onclick&&p.tapToDismiss&&v.click(i),p.closeButton&&A&&A.click(function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&!0!==e.cancelBubble&&(e.cancelBubble=!0),p.onCloseClick&&p.onCloseClick(e),i(!0)}),p.onclick&&v.click(function(e){p.onclick(e),i()}),a(F),p.debug&&console&&console.log(F),v}}function o(){return e.extend({},{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1},g.options)}function s(e){l||(l=t()),e.is(":visible")||(e.remove(),e=null,0===l.children().length&&(l.remove(),u=void 0))}var l,c,u,d=0,f={error:"error",info:"info",success:"success",warning:"warning"},g={clear:function(e,a){var i=o();l||t(i),r(e,i,a)||n(i)},remove:function(n){var r=o();return l||t(r),n&&0===e(":focus",n).length?void s(n):void(l.children().length&&l.remove())},error:function(e,t,n){return i({type:f.error,iconClass:o().iconClasses.error,message:e,optionsOverride:n,title:t})},getContainer:t,info:function(e,t,n){return i({type:f.info,iconClass:o().iconClasses.info,message:e,optionsOverride:n,title:t})},options:{},subscribe:function(e){c=e},success:function(e,t,n){return i({type:f.success,iconClass:o().iconClasses.success,message:e,optionsOverride:n,title:t})},version:"2.1.4",warning:function(e,t,n){return i({type:f.warning,iconClass:o().iconClasses.warning,message:e,optionsOverride:n,title:t})}};return g}()})}("function"==typeof define&&define.amd?define:function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):window.toastr=t(window.jQuery)});var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,r={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof i?new i(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var r,i;switch(n=n||{},a.util.type(t)){case"Object":if(i=a.util.objId(t),n[i])return n[i];for(var o in r={},n[i]=r,t)t.hasOwnProperty(o)&&(r[o]=e(t[o],n));return r;case"Array":return i=a.util.objId(t),n[i]?n[i]:(r=[],n[i]=r,t.forEach(function(t,a){r[a]=e(t,n)}),r);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var r="no-"+t;e;){var a=e.classList;if(a.contains(t))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!n}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var i=(r=r||a.languages)[e],o={};for(var s in i)if(i.hasOwnProperty(s)){if(s==t)for(var l in n)n.hasOwnProperty(l)&&(o[l]=n[l]);n.hasOwnProperty(s)||(o[s]=i[s])}var c=r[e];return r[e]=o,a.languages.DFS(a.languages,function(t,n){n===c&&t!=e&&(this[t]=o)}),o},DFS:function e(t,n,r,i){i=i||{};var o=a.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],r||s);var l=t[s],c=a.util.type(l);"Object"!==c||i[o(l)]?"Array"!==c||i[o(l)]||(i[o(l)]=!0,e(l,n,s,i)):(i[o(l)]=!0,e(l,n,null,i))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,o=0;i=r.elements[o++];)a.highlightElement(i,!0===t,r.callback)},highlightElement:function(n,r,i){var o=a.util.getLanguage(n),s=a.languages[o];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+o;var l=n.parentElement;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+o);var c={element:n,language:o,grammar:s,code:n.textContent};function u(e){c.highlightedCode=e,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),i&&i.call(c.element)}if(a.hooks.run("before-sanity-check",c),(l=c.element.parentElement)&&"pre"===l.nodeName.toLowerCase()&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!c.code)return a.hooks.run("complete",c),void(i&&i.call(c.element));if(a.hooks.run("before-highlight",c),c.grammar)if(r&&e.Worker){var d=new Worker(a.filename);d.onmessage=function(e){u(e.data)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(a.highlight(c.code,c.grammar,c.language));else u(a.util.encode(c.code))},highlight:function(e,t,n){var r={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",r),r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var r in n)t[r]=n[r];delete t.rest}var a=new l;return c(a,a.head,e),s(e,a,t,a.head,0),function(e){var t=[],n=e.head.next;for(;n!==e.tail;)t.push(n.value),n=n.next;return t}(a)},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}},Token:i};function i(e,t,n,r){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length}function o(e,t,n,r){e.lastIndex=t;var a=e.exec(n);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function s(e,t,n,r,l,d){for(var f in n)if(n.hasOwnProperty(f)&&n[f]){var g=n[f];g=Array.isArray(g)?g:[g];for(var p=0;p<g.length;++p){if(d&&d.cause==f+","+p)return;var m=g[p],h=m.inside,v=!!m.lookbehind,b=!!m.greedy,y=m.alias;if(b&&!m.pattern.global){var w=m.pattern.toString().match(/[imsuy]*$/)[0];m.pattern=RegExp(m.pattern.source,w+"g")}for(var A=m.pattern||m,k=r.next,F=l;k!==t.tail&&!(d&&F>=d.reach);F+=k.value.length,k=k.next){var x=k.value;if(t.length>e.length)return;if(!(x instanceof i)){var P,C=1;if(b){if(!(P=o(A,F,e,v)))break;var E=P.index,S=P.index+P[0].length,O=F;for(O+=k.value.length;E>=O;)O+=(k=k.next).value.length;if(F=O-=k.value.length,k.value instanceof i)continue;for(var j=k;j!==t.tail&&(O<S||"string"==typeof j.value);j=j.next)C++,O+=j.value.length;C--,x=e.slice(F,O),P.index-=F}else if(!(P=o(A,0,x,v)))continue;E=P.index;var T=P[0],_=x.slice(0,E),$=x.slice(E+T.length),D=F+x.length;d&&D>d.reach&&(d.reach=D);var I=k.prev;if(_&&(I=c(t,I,_),F+=_.length),u(t,I,C),k=c(t,I,new i(f,h?a.tokenize(T,h):T,y,T)),$&&c(t,k,$),C>1){var H={cause:f+","+p,reach:D};s(e,t,n,k.prev,F,H),d&&H.reach>d.reach&&(d.reach=H.reach)}}}}}}function l(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function c(e,t,n){var r=t.next,a={value:n,prev:t,next:r};return t.next=a,r.prev=a,e.length++,a}function u(e,t,n){for(var r=t.next,a=0;a<n&&r!==e.tail;a++)r=r.next;t.next=r,r.prev=t,e.length-=a}if(e.Prism=a,i.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var r="";return t.forEach(function(t){r+=e(t,n)}),r}var i={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(i.classes,o):i.classes.push(o)),a.hooks.run("wrap",i);var s="";for(var l in i.attributes)s+=" "+l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+s+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",function(t){var n=JSON.parse(t.data),r=n.language,i=n.code,o=n.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),o&&e.close()},!1),a):a;var d=a.util.currentScript();function f(){a.manual||a.highlightAll()}if(d&&(a.filename=d.src,d.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var g=document.readyState;"loading"===g||"interactive"===g&&d&&d.defer?document.addEventListener("DOMContentLoaded",f):window.requestAnimationFrame?window.requestAnimationFrame(f):window.setTimeout(f,16)}return a}(_self);
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};r["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};var a={};a[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:r},Prism.languages.insertBefore("markup","cdata",a)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml,function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}(Prism),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),Prism.languages.js=Prism.languages.javascript,function(){if(void 0!==Prism&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},t="data-src-status",n="loading",r="loaded",a='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',i=/\blang(?:uage)?-([\w-]+)\b/i;Prism.hooks.add("before-highlightall",function(e){e.selector+=", "+a}),Prism.hooks.add("before-sanity-check",function(i){var o=i.element;if(o.matches(a)){i.code="",o.setAttribute(t,n);var l=o.appendChild(document.createElement("CODE"));l.textContent="Loading\u2026";var c=o.getAttribute("data-src"),u=i.language;if("none"===u){var d=(/\.(\w+)$/.exec(c)||[,"none"])[1];u=e[d]||d}s(l,u),s(o,u);var f=Prism.plugins.autoloader;f&&f.loadLanguages(u);var g=new XMLHttpRequest;g.open("GET",c,!0),g.onreadystatechange=function(){var e,n;4==g.readyState&&(g.status<400&&g.responseText?(o.setAttribute(t,r),l.textContent=g.responseText,Prism.highlightElement(l)):(o.setAttribute(t,"failed"),g.status>=400?l.textContent=(e=g.status,n=g.statusText,"\u2716 Error "+e+" while fetching file: "+n):l.textContent="\u2716 Error: File does not exist or is empty"))},g.send(null)}}),Prism.plugins.fileHighlight={highlight:function(e){for(var t,n=(e||document).querySelectorAll(a),r=0;t=n[r++];)Prism.highlightElement(t)}};var o=!1;Prism.fileHighlight=function(){o||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),o=!0),Prism.plugins.fileHighlight.highlight.apply(this,arguments)}}function s(e,t){var n=e.className;n=n.replace(i," ")+" language-"+t,e.className=n.replace(/\s+/g," ").trim()}}();