!function(){var t={757:function(t,e,r){t.exports=r(666)},666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(t,e,r){var n=p;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return q()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?d:l,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var p="suspendedStart",l="suspendedYield",h="executing",d="completed",v={};function y(){}function m(){}function g(){}var w={};u(w,a,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(T([])));b&&b!==r&&n.call(b,a)&&(w=b);var L=g.prototype=y.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,p=s.value;return p&&"object"==typeof p&&n.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(p).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:q}}function q(){return{value:e,done:!0}}return m.prototype=g,u(L,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(S.prototype),u(S.prototype,i,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new S(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(L),u(L,c,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";function t(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function e(e){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=e.apply(r,n);function c(e){t(i,o,a,c,u,"next",e)}function u(e){t(i,o,a,c,u,"throw",e)}c(void 0)}))}}var n=r(757),o=r.n(n);function a(t,e){t.innerHTML='\n    <div class="weather-box">\n    <p class="city">'.concat(e.name,'</p>\n    <p class="temp">').concat(Math.round(e.main.temp-273),'&deg</p>\n    <p class="descr">').concat(e.weather[0].description,'</p>\n    <div class="icon"><img src="https://openweathermap.org/img/wn/').concat(e.weather[0].icon,'@2x.png"></div>\n    </div>');var r=document.createElement("div");r.classList.add("map"),t.querySelector(".weather-box").append(r),r.innerHTML='<img src="https://maps.googleapis.com/maps/api/staticmap?center='.concat(e.name,"&zoom=9&size=300x300&&markers=size:mid%7Ccolor:0xFFFF00%7C").concat(e.name,"&key=").concat("AIzaSyCVGDC-uRpiX2HiexHVIBHz5k_obk7c1XQ",'">')}function i(){return c.apply(this,arguments)}function c(){return(c=e(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://ipapi.co/json/",{method:"GET"}).then((function(t){return t.json()}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(t){return s.apply(this,arguments)}function s(){return(s=e(o().mark((function t(e){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e.latitude,"&lon=").concat(e.longitude,"&appid=").concat("b071b1f9cb6a205c491857b865f1bf99"),{method:"GET"}).then((function(t){return t.json()}));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return p.apply(this,arguments)}function p(){return(p=e(o().mark((function t(e){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("b071b1f9cb6a205c491857b865f1bf99"),{method:"GET"}).then((function(t){return t.json()}));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(){return h.apply(this,arguments)}function h(){return(h=e(o().mark((function t(){var e,r,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=document.querySelector(".weather-wrapper"),t.next=3,i();case 3:return r=t.sent,t.next=6,u(r);case 6:n=t.sent,a(e,n);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=e(o().mark((function t(e){var r,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=document.querySelector(".weather-wrapper"),t.next=3,f(e);case 3:return n=t.sent,a(r,n),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(){return localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[]}function m(t,e){e.innerHTML="".concat(t.map((function(t){return"<li>".concat(t,"</li>")})).join(""))}function g(t){t.length>10&&t.splice(0,1),localStorage.setItem("items",JSON.stringify(t))}function w(){document.querySelectorAll("li").forEach((function(t){t.addEventListener("click",e(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(t.textContent);case 2:case"end":return e.stop()}}),e)}))))}))}function x(){var t=document.querySelector("form"),r=document.querySelector("input"),n=document.querySelector("ul");t.addEventListener("submit",function(){var t=e(o().mark((function t(e){var a,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),a=r.value,t.next=4,y();case 4:return i=t.sent,t.next=7,d(a);case 7:i.push(a),g(i),m(i,n),r.value="",w();case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}function b(){return(b=e(o().mark((function t(e){var r,n,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.innerHTML='\n  <div class="container">\n    <div class="weather-wrapper"></div>\n  </div>\n  ',r=document.querySelector(".container"),t.next=4,y();case 4:return n=t.sent,t.next=7,l();case 7:r.innerHTML+='\n  <div class="form-wrapper">\n    <div class="form">\n      <form>\n        <input type="text" placeholder="Введите город" required autofocus>\n        <button>Узнать погоду</button>\n      </form>\n    </div>\n    <div class="list"><ul></ul></div>\n  </div>\n  ',a=document.querySelector("ul"),m(n,a),x(),w();case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(t){b.apply(this,arguments)}(document.querySelector("#app"))}()}();