!function(){var t={757:function(t,e,r){t.exports=r(666)},666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new _(n||[]);return a._invoke=function(t,e,r){var n=p;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return q()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?d:l,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var p="suspendedStart",l="suspendedYield",h="executing",d="completed",v={};function m(){}function y(){}function g(){}var w={};u(w,a,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(T([])));b&&b!==r&&n.call(b,a)&&(w=b);var L=g.prototype=m.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,p=s.value;return p&&"object"==typeof p&&n.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(p).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:q}}function q(){return{value:e,done:!0}}return y.prototype=g,u(L,"constructor",g),u(g,"constructor",y),y.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(S.prototype),u(S.prototype,i,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new S(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(L),u(L,c,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";function t(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function e(e){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=e.apply(r,n);function c(e){t(i,o,a,c,u,"next",e)}function u(e){t(i,o,a,c,u,"throw",e)}c(void 0)}))}}var n=r(757),o=r.n(n);function a(){var t=document.querySelector(".form-wrapper"),e=document.createElement("div");e.classList.add("form"),t.prepend(e),e.innerHTML='\n  <form>\n    <input type="text" placeholder="Введите город" required autofocus>\n    <button>Узнать погоду</button>\n    </form>\n    ';var r=document.createElement("div");r.setAttribute("class","list"),t.append(r);var n=document.createElement("ul");r.append(n)}function i(t,e){if("404"!==e.cod){t.innerHTML='\n    <div class="weather-box">\n    <p class="city">'.concat(e.name,'</p>\n    <p class="temp">').concat(Math.round(e.main.temp-273),'&deg</p>\n    <p class="descr">').concat(e.weather[0].description,'</p>\n    <div class="icon"><img src="https://openweathermap.org/img/wn/').concat(e.weather[0].icon,'@2x.png"></div>\n    </div>');var r=document.createElement("div");r.classList.add("map"),t.querySelector(".weather-box").append(r),r.innerHTML='<img src="https://maps.googleapis.com/maps/api/staticmap?center='.concat(e.name,"&zoom=9&size=300x300&&markers=size:mid%7Ccolor:0xFFFF00%7C").concat(e.name,"&key=").concat("AIzaSyCVGDC-uRpiX2HiexHVIBHz5k_obk7c1XQ",'">')}else alert("Такого города не существует! Попробуйте еще раз")}function c(t){return u.apply(this,arguments)}function u(){return(u=e(o().mark((function t(e){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("b071b1f9cb6a205c491857b865f1bf99"),{method:"GET"}).then((function(t){return t.json()}));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(){return f.apply(this,arguments)}function f(){return(f=e(o().mark((function t(){var e,r,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="b071b1f9cb6a205c491857b865f1bf99",t.next=3,fetch("https://ipapi.co/json/",{method:"GET"}).then((function(t){return t.json()}));case 3:return r=t.sent,t.next=6,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(r.latitude,"&lon=").concat(r.longitude,"&appid=").concat(e),{method:"GET"}).then((function(t){return t.json()}));case 6:return n=t.sent,t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(){return l.apply(this,arguments)}function l(){return(l=e(o().mark((function t(){var e,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=document.querySelector(".weather-wrapper"),t.next=3,s();case 3:r=t.sent,i(e,r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=e(o().mark((function t(e){var r,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=document.querySelector(".weather-wrapper"),t.next=3,c(e);case 3:return n=t.sent,i(r,n),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){var e=document.querySelector("ul"),r=document.createElement("li");r.innerHTML=t,e.append(r)}function m(){var t=document.querySelectorAll("li");t.length>10&&t[0].remove()}function y(){JSON.parse(localStorage.getItem("items")).forEach((function(t){v(t)}))}function g(t){var e=localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[];e.push(t),localStorage.setItem("items",JSON.stringify(e)),e.length>10&&(e.splice(0,1),localStorage.setItem("items",JSON.stringify(e)))}function w(){document.querySelectorAll("li").forEach((function(t){t.addEventListener("click",e(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(t.textContent);case 2:case"end":return e.stop()}}),e)}))))}))}function x(){return b.apply(this,arguments)}function b(){return b=e(o().mark((function t(){var r,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=document.querySelector("form"),n=document.querySelector("input"),r.addEventListener("submit",function(){var t=e(o().mark((function t(e){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),r=n.value,t.next=4,h(r);case 4:"404"!==t.sent.cod&&(g(r),v(r),m()),n.value="",w();case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t)}))),b.apply(this,arguments)}function L(){return(L=e(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.innerHTML='\n  <div class="container">\n    <div class="form-wrapper"></div>\n    <div class="weather-wrapper"></div>\n  </div>\n  ',t.next=3,p();case 3:a(),x(),y(),w();case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(t){L.apply(this,arguments)}(document.querySelector("#app"))}()}();