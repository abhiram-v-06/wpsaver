"use strict";function ownKeys(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)),r}function _objectSpread(e){var t,n;for(t=1;t<arguments.length;t++)n=null!=arguments[t]?arguments[t]:{},t%2?ownKeys(Object(n),!0).forEach((function(t){_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);t>n;n++)r[n]=e[n];return r}function _iterableToArrayLimit(e,t){var n,r,o,i,a,c;if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){n=[],r=!0,o=!1,i=void 0;try{for(c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}function _arrayWithHoles(e){return Array.isArray(e)?e:void 0}!function(){function e(e){t(["event","leave",{type:e}])}function t(e){var t=_slicedToArray(e,3),r=t[0],i=t[1],a=t[2];switch(r){case"init":u.push(i);break;case"event":!function(e,t){var r,i;"page_view"===e&&n(),-1!==["page_view","leave"].indexOf(e)?o(null,null,_objectSpread({action:e},t)):(r=_objectSpread({},t),i=1,void 0!==r.value&&(i=r.value,delete r.value),o({event_id:e,value:i},r))}(i,a)}}function n(){var e,t,n,o,a=localStorage.getItem(c);if(a)try{if(e=JSON.parse(a),Date.now()-864e5>e.sessionStartTime)return void r(e);Date.now()-18e5<=e.sessionStartTime&&e.session_id?p.session_id=e.session_id:delete e.session_id,e.cookie_id&&(p.cookie_id=e.cookie_id),e.sessionStartTime=Date.now(),t=i(p.url,s),n=e.sessionDepth,t?(f.land_url=p.url,-1!==(o=n.indexOf(p.url))&&n.splice(o,1),n.push(p.url)):n.length&&(f.land_url=n[n.length-1]),localStorage.setItem(c,JSON.stringify(e))}catch(e){r()}else r()}function r(e){var t,n=[];i(p.url,s)&&(n=[p.url],f.land_url=p.url),t={sessionDepth:n,sessionStartTime:Date.now()},e&&e.cookie_id&&(t.cookie_id=e.cookie_id,p.cookie_id=e.cookie_id),localStorage.setItem(c,JSON.stringify(t))}function o(e,t,n){var r,o,i="";e?i=JSON.stringify(_objectSpread(_objectSpread({},e),t)):n&&n.action&&(i=n.action),i&&(r=l[i],o=Date.now(),l[i]=o,d>o-r)||u.forEach((function(r){var o,i,a,c=_objectSpread(_objectSpread(_objectSpread({},f),p),{},{pixel_id:r,ts:Date.now()},e);n&&(c.extra=JSON.stringify(n)),t&&(c.eventExtra=JSON.stringify(t)),c.ts,o=Object.keys(c).map((function(e){return"".concat(e,"=").concat(encodeURIComponent(c[e]))})).join("&"),i="https://api.imotech.video/bigoad/".concat(c.event_id?"trackingevent":"trackingview","?").concat(o),p.session_id&&p.cookie_id?navigator.sendBeacon?navigator.sendBeacon(i):new Image(1,1).src=i:((a=document.createElement("script")).src=i,a.onload=function(){document.body.removeChild(a)},document.body.appendChild(a))}))}function i(e,t){var n,r=new RegExp("(^|&)".concat(t,"=([^&]*)(&|$)"));return e.split("?")[1]?null!=(n=e.split("?")[1].match(r))?n[2]:"":""}var a,c="bge_eng_mt",s="bbg",l=(Date.now(),{}),d=300,u=[],f={version:"1.0",it:Date.now()},p=function(){var e={};if(document&&(e.title=document.title||"",e.referer=document.referrer||"",!e.referer))try{window.opener&&(e.referer=window.opener.location.href)}catch(e){}return window&&window.screen&&(e.resolution="".concat(window.screen.height||0,"*").concat(window.screen.width||0)),navigator&&(e.lang=navigator.language||navigator.userLanguage||""),location&&(e.url=location.href||"",e.host=location.host||""),e}();window.bgeCallback||(window.bgeCallback=function(e){var t,n;try{t=localStorage.getItem(c),n=JSON.parse(t),p.session_id||(p.session_id=e.logid,n.session_id=e.logid),p.cookie_id||(p.cookie_id=e.logid,n.cookie_id=e.logid),localStorage.setItem(c,JSON.stringify(n))}catch(e){}}),window.bgdataLayer&&window.bgdataLayer.forEach((function(e){t(e)})),window.bge&&(a=window.bge,window.bge=function(){t(arguments),a.apply(void 0,arguments)}),window.addEventListener("beforeunload",(function(){e(1)}),!1),window.addEventListener("pagehide",(function(){e(2)}),!1),window.addEventListener("unload",(function(){e(3)}),!1)}();