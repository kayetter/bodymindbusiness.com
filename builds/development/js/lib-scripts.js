!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Scrollbar=e():t.Scrollbar=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,u.default)(t)}var i=n(2),u=r(i),a=n(55),c=r(a),l=n(62),f=r(l);Object.defineProperty(e,"__esModule",{value:!0});var s="function"==typeof f.default&&"symbol"==typeof c.default?function(t){return typeof t}:function(t){return t&&"function"==typeof f.default&&t.constructor===f.default&&t!==f.default.prototype?"symbol":typeof t},d=n(78),h=n(89);n(129),n(145),n(158),n(173),n(187),e.default=d.SmoothScrollbar,d.SmoothScrollbar.version="7.3.1",d.SmoothScrollbar.init=function(t,e){if(!t||1!==t.nodeType)throw new TypeError("expect element to be DOM Element, but got "+("undefined"==typeof t?"undefined":s(t)));if(h.sbList.has(t))return h.sbList.get(t);t.setAttribute("data-scrollbar","");var n=[].concat(o(t.childNodes)),r=document.createElement("div");r.innerHTML='\n        <article class="scroll-content"></article>\n        <aside class="scrollbar-track scrollbar-track-x">\n            <div class="scrollbar-thumb scrollbar-thumb-x"></div>\n        </aside>\n        <aside class="scrollbar-track scrollbar-track-y">\n            <div class="scrollbar-thumb scrollbar-thumb-y"></div>\n        </aside>\n        <canvas class="overscroll-glow"></canvas>\n    ';var i=r.querySelector(".scroll-content");return[].concat(o(r.childNodes)).forEach(function(e){return t.appendChild(e)}),n.forEach(function(t){return i.appendChild(t)}),new d.SmoothScrollbar(t,e)},d.SmoothScrollbar.initAll=function(t){return[].concat(o(document.querySelectorAll(h.selectors))).map(function(e){return d.SmoothScrollbar.init(e,t)})},d.SmoothScrollbar.has=function(t){return h.sbList.has(t)},d.SmoothScrollbar.get=function(t){return h.sbList.get(t)},d.SmoothScrollbar.getAll=function(){return[].concat(o(h.sbList.values()))},d.SmoothScrollbar.destroy=function(t,e){return d.SmoothScrollbar.has(t)&&d.SmoothScrollbar.get(t).destroy(e)},d.SmoothScrollbar.destroyAll=function(t){h.sbList.forEach(function(e){e.destroy(t)})},t.exports=e.default},function(t,e,n){t.exports={default:n(3),__esModule:!0}},function(t,e,n){n(4),n(48),t.exports=n(12).Array.from},function(t,e,n){"use strict";var r=n(5)(!0);n(8)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(6),o=n(7);t.exports=function(t){return function(e,n){var i,u,a=String(o(e)),c=r(n),l=a.length;return c<0||c>=l?t?"":void 0:(i=a.charCodeAt(c),i<55296||i>56319||c+1===l||(u=a.charCodeAt(c+1))<56320||u>57343?t?a.charAt(c):i:t?a.slice(c,c+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){"use strict";var r=n(9),o=n(10),i=n(25),u=n(15),a=n(26),c=n(27),l=n(28),f=n(44),s=n(46),d=n(45)("iterator"),h=!([].keys&&"next"in[].keys()),v="@@iterator",_="keys",p="values",y=function(){return this};t.exports=function(t,e,n,b,g,m,x){l(n,e,b);var S,E,M,O=function(t){if(!h&&t in j)return j[t];switch(t){case _:return function(){return new n(this,t)};case p:return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",P=g==p,k=!1,j=t.prototype,T=j[d]||j[v]||g&&j[g],A=T||O(g),R=g?P?O("entries"):A:void 0,L="Array"==e?j.entries||T:T;if(L&&(M=s(L.call(new t)),M!==Object.prototype&&(f(M,w,!0),r||a(M,d)||u(M,d,y))),P&&T&&T.name!==p&&(k=!0,A=function(){return T.call(this)}),r&&!x||!h&&!k&&j[d]||u(j,d,A),c[e]=A,c[w]=y,g)if(S={values:P?A:O(p),keys:m?A:O(_),entries:R},x)for(E in S)E in j||i(j,E,S[E]);else o(o.P+o.F*(h||k),e,S);return S}},function(t,e){t.exports=!0},function(t,e,n){var r=n(11),o=n(12),i=n(13),u=n(15),a="prototype",c=function(t,e,n){var l,f,s,d=t&c.F,h=t&c.G,v=t&c.S,_=t&c.P,p=t&c.B,y=t&c.W,b=h?o:o[e]||(o[e]={}),g=b[a],m=h?r:v?r[e]:(r[e]||{})[a];h&&(n=e);for(l in n)f=!d&&m&&void 0!==m[l],f&&l in b||(s=f?m[l]:n[l],b[l]=h&&"function"!=typeof m[l]?n[l]:p&&f?i(s,r):y&&m[l]==s?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[a]=t[a],e}(s):_&&"function"==typeof s?i(Function.call,s):s,_&&((b.virtual||(b.virtual={}))[l]=s,t&c.R&&g&&!g[l]&&u(g,l,s)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(14);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(16),o=n(24);t.exports=n(20)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(17),o=n(19),i=n(23),u=Object.defineProperty;e.f=n(20)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(18);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(20)&&!n(21)(function(){return 7!=Object.defineProperty(n(22)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=!n(21)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(18),o=n(11).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(18);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){t.exports=n(15)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports={}},function(t,e,n){"use strict";var r=n(29),o=n(24),i=n(44),u={};n(15)(u,n(45)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(17),o=n(30),i=n(42),u=n(39)("IE_PROTO"),a=function(){},c="prototype",l=function(){var t,e=n(22)("iframe"),r=i.length,o="<",u=">";for(e.style.display="none",n(43).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+u+"document.F=Object"+o+"/script"+u),t.close(),l=t.F;r--;)delete l[c][i[r]];return l()};t.exports=Object.create||function(t,e){var n;return null!==t?(a[c]=r(t),n=new a,a[c]=null,n[u]=t):n=l(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(16),o=n(17),i=n(31);t.exports=n(20)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),a=u.length,c=0;a>c;)r.f(t,n=u[c++],e[n]);return t}},function(t,e,n){var r=n(32),o=n(42);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(26),o=n(33),i=n(36)(!1),u=n(39)("IE_PROTO");t.exports=function(t,e){var n,a=o(t),c=0,l=[];for(n in a)n!=u&&r(a,n)&&l.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~i(l,n)||l.push(n));return l}},function(t,e,n){var r=n(34),o=n(7);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(35);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(33),o=n(37),i=n(38);t.exports=function(t){return function(e,n,u){var a,c=r(e),l=o(c.length),f=i(u,l);if(t&&n!=n){for(;l>f;)if(a=c[f++],a!=a)return!0}else for(;l>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(6),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(6),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(40)("keys"),o=n(41);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(11),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){t.exports=n(11).document&&document.documentElement},function(t,e,n){var r=n(16).f,o=n(26),i=n(45)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(40)("wks"),o=n(41),i=n(11).Symbol,u="function"==typeof i,a=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};a.store=r},function(t,e,n){var r=n(26),o=n(47),i=n(39)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(7);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(13),o=n(10),i=n(47),u=n(49),a=n(50),c=n(37),l=n(51),f=n(52);o(o.S+o.F*!n(54)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,s,d=i(t),h="function"==typeof this?this:Array,v=arguments.length,_=v>1?arguments[1]:void 0,p=void 0!==_,y=0,b=f(d);if(p&&(_=r(_,v>2?arguments[2]:void 0,2)),void 0==b||h==Array&&a(b))for(e=c(d.length),n=new h(e);e>y;y++)l(n,y,p?_(d[y],y):d[y]);else for(s=b.call(d),n=new h;!(o=s.next()).done;y++)l(n,y,p?u(s,_,[o.value,y],!0):o.value);return n.length=y,n}})},function(t,e,n){var r=n(17);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(27),o=n(45)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){"use strict";var r=n(16),o=n(24);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},function(t,e,n){var r=n(53),o=n(45)("iterator"),i=n(27);t.exports=n(12).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var r=n(35),o=n(45)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),o))?n:i?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){var r=n(45)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:n=!0}},i[r]=function(){return u},t(i)}catch(t){}return n}},function(t,e,n){t.exports={default:n(56),__esModule:!0}},function(t,e,n){n(4),n(57),t.exports=n(61).f("iterator")},function(t,e,n){n(58);for(var r=n(11),o=n(15),i=n(27),u=n(45)("toStringTag"),a=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],c=0;c<5;c++){var l=a[c],f=r[l],s=f&&f.prototype;s&&!s[u]&&o(s,u,l),i[l]=i.Array}},function(t,e,n){"use strict";var r=n(59),o=n(60),i=n(27),u=n(33);t.exports=n(8)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){e.f=n(45)},function(t,e,n){t.exports={default:n(63),__esModule:!0}},function(t,e,n){n(64),n(75),n(76),n(77),t.exports=n(12).Symbol},function(t,e,n){"use strict";var r=n(11),o=n(26),i=n(20),u=n(10),a=n(25),c=n(65).KEY,l=n(21),f=n(40),s=n(44),d=n(41),h=n(45),v=n(61),_=n(66),p=n(67),y=n(68),b=n(71),g=n(17),m=n(33),x=n(23),S=n(24),E=n(29),M=n(72),O=n(74),w=n(16),P=n(31),k=O.f,j=w.f,T=M.f,A=r.Symbol,R=r.JSON,L=R&&R.stringify,I="prototype",D=h("_hidden"),C=h("toPrimitive"),N={}.propertyIsEnumerable,F=f("symbol-registry"),H=f("symbols"),z=f("op-symbols"),B=Object[I],G="function"==typeof A,W=r.QObject,V=!W||!W[I]||!W[I].findChild,U=i&&l(function(){return 7!=E(j({},"a",{get:function(){return j(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=k(B,e);r&&delete B[e],j(t,e,n),r&&t!==B&&j(B,e,r)}:j,X=function(t){var e=H[t]=E(A[I]);return e._k=t,e},q=G&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},K=function(t,e,n){return t===B&&K(z,e,n),g(t),e=x(e,!0),g(n),o(H,e)?(n.enumerable?(o(t,D)&&t[D][e]&&(t[D][e]=!1),n=E(n,{enumerable:S(0,!1)})):(o(t,D)||j(t,D,S(1,{})),t[D][e]=!0),U(t,e,n)):j(t,e,n)},J=function(t,e){g(t);for(var n,r=y(e=m(e)),o=0,i=r.length;i>o;)K(t,n=r[o++],e[n]);return t},Y=function(t,e){return void 0===e?E(t):J(E(t),e)},Q=function(t){var e=N.call(this,t=x(t,!0));return!(this===B&&o(H,t)&&!o(z,t))&&(!(e||!o(this,t)||!o(H,t)||o(this,D)&&this[D][t])||e)},Z=function(t,e){if(t=m(t),e=x(e,!0),t!==B||!o(H,e)||o(z,e)){var n=k(t,e);return!n||!o(H,e)||o(t,D)&&t[D][e]||(n.enumerable=!0),n}},$=function(t){for(var e,n=T(m(t)),r=[],i=0;n.length>i;)o(H,e=n[i++])||e==D||e==c||r.push(e);return r},tt=function(t){for(var e,n=t===B,r=T(n?z:m(t)),i=[],u=0;r.length>u;)!o(H,e=r[u++])||n&&!o(B,e)||i.push(H[e]);return i};G||(A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===B&&e.call(z,n),o(this,D)&&o(this[D],t)&&(this[D][t]=!1),U(this,t,S(1,n))};return i&&V&&U(B,t,{configurable:!0,set:e}),X(t)},a(A[I],"toString",function(){return this._k}),O.f=Z,w.f=K,n(73).f=M.f=$,n(70).f=Q,n(69).f=tt,i&&!n(9)&&a(B,"propertyIsEnumerable",Q,!0),v.f=function(t){return X(h(t))}),u(u.G+u.W+u.F*!G,{Symbol:A});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)h(et[nt++]);for(var et=P(h.store),nt=0;et.length>nt;)_(et[nt++]);u(u.S+u.F*!G,"Symbol",{for:function(t){return o(F,t+="")?F[t]:F[t]=A(t)},keyFor:function(t){if(q(t))return p(F,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){V=!0},useSimple:function(){V=!1}}),u(u.S+u.F*!G,"Object",{create:Y,defineProperty:K,defineProperties:J,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:tt}),R&&u(u.S+u.F*(!G||l(function(){var t=A();return"[null]"!=L([t])||"{}"!=L({a:t})||"{}"!=L(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!q(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&b(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!q(e))return e}),r[1]=e,L.apply(R,r)}}}),A[I][C]||n(15)(A[I],C,A[I].valueOf),s(A,"Symbol"),s(Math,"Math",!0),s(r.JSON,"JSON",!0)},function(t,e,n){var r=n(41)("meta"),o=n(18),i=n(26),u=n(16).f,a=0,c=Object.isExtensible||function(){return!0},l=!n(21)(function(){return c(Object.preventExtensions({}))}),f=function(t){u(t,r,{value:{i:"O"+ ++a,w:{}}})},s=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!e)return"E";f(t)}return t[r].i},d=function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;f(t)}return t[r].w},h=function(t){return l&&v.NEED&&c(t)&&!i(t,r)&&f(t),t},v=t.exports={KEY:r,NEED:!1,fastKey:s,getWeak:d,onFreeze:h}},function(t,e,n){var r=n(11),o=n(12),i=n(9),u=n(61),a=n(16).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:u.f(t)})}},function(t,e,n){var r=n(31),o=n(33);t.exports=function(t,e){for(var n,i=o(t),u=r(i),a=u.length,c=0;a>c;)if(i[n=u[c++]]===e)return n}},function(t,e,n){var r=n(31),o=n(69),i=n(70);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,a=n(t),c=i.f,l=0;a.length>l;)c.call(t,u=a[l++])&&e.push(u);return e}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(35);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(33),o=n(73).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?a(t):o(r(t))}},function(t,e,n){var r=n(32),o=n(42).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(70),o=n(24),i=n(33),u=n(23),a=n(26),c=n(19),l=Object.getOwnPropertyDescriptor;e.f=n(20)?l:function(t,e){if(t=i(t),e=u(e,!0),c)try{return l(t,e)}catch(t){}if(a(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e){},function(t,e,n){n(66)("asyncIterator")},function(t,e,n){n(66)("observable")},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n(79),u=r(i),a=n(82),c=r(a),l=n(86),f=r(l);Object.defineProperty(e,"__esModule",{value:!0}),e.SmoothScrollbar=void 0;var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,f.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),d=n(89),h=n(112);e.SmoothScrollbar=function(){function t(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,t),e.setAttribute("tabindex","1"),e.scrollTop=e.scrollLeft=0;var i=(0,h.findChild)(e,"scroll-content"),a=(0,h.findChild)(e,"overscroll-glow"),l=(0,h.findChild)(e,"scrollbar-track-x"),f=(0,h.findChild)(e,"scrollbar-track-y");if((0,h.setStyle)(e,{overflow:"hidden",outline:"none"}),(0,h.setStyle)(a,{display:"none","pointer-events":"none"}),this.__readonly("targets",(0,c.default)({container:e,content:i,canvas:{elem:a,context:a.getContext("2d")},xAxis:(0,c.default)({track:l,thumb:(0,h.findChild)(l,"scrollbar-thumb-x")}),yAxis:(0,c.default)({track:f,thumb:(0,h.findChild)(f,"scrollbar-thumb-y")})})).__readonly("offset",{x:0,y:0}).__readonly("thumbOffset",{x:0,y:0}).__readonly("limit",{x:1/0,y:1/0}).__readonly("movement",{x:0,y:0}).__readonly("movementLocked",{x:!1,y:!1}).__readonly("overscrollRendered",{x:0,y:0}).__readonly("overscrollBack",!1).__readonly("thumbSize",{x:0,y:0,realX:0,realY:0}).__readonly("bounding",{top:0,right:0,bottom:0,left:0}).__readonly("children",[]).__readonly("parents",[]).__readonly("size",this.getSize()).__readonly("isNestedScrollbar",!1),(0,u.default)(this,{__hideTrackThrottle:{value:(0,h.debounce)(this.hideTrack.bind(this),1e3,!1)},__updateThrottle:{value:(0,h.debounce)(this.update.bind(this))},__touchRecord:{value:new h.TouchRecord},__listeners:{value:[]},__handlers:{value:[]},__children:{value:[]},__timerID:{value:{}}}),this.__initOptions(r),this.__initScrollbar(),d.sbList.set(e,this),"function"==typeof d.GLOBAL_ENV.MutationObserver){var s=new d.GLOBAL_ENV.MutationObserver(function(){n.update(!0)});s.observe(i,{childList:!0}),Object.defineProperty(this,"__observer",{value:s})}}return s(t,[{key:"MAX_OVERSCROLL",get:function(){var t=this.options,e=this.size;switch(t.overscrollEffect){case"bounce":var n=Math.floor(Math.sqrt(Math.pow(e.container.width,2)+Math.pow(e.container.height,2))),r=this.__isMovementLocked()?2:10;return d.GLOBAL_ENV.TOUCH_SUPPORTED?(0,h.pickInRange)(n/r,100,1e3):(0,h.pickInRange)(n/10,25,50);case"glow":return 150;default:return 0}}},{key:"scrollTop",get:function(){return this.offset.y}},{key:"scrollLeft",get:function(){return this.offset.x}}]),t}()},function(t,e,n){t.exports={default:n(80),__esModule:!0}},function(t,e,n){n(81);var r=n(12).Object;t.exports=function(t,e){return r.defineProperties(t,e)}},function(t,e,n){var r=n(10);r(r.S+r.F*!n(20),"Object",{defineProperties:n(30)})},function(t,e,n){t.exports={default:n(83),__esModule:!0}},function(t,e,n){n(84),t.exports=n(12).Object.freeze},function(t,e,n){var r=n(18),o=n(65).onFreeze;n(85)("freeze",function(t){return function(e){return t&&r(e)?t(o(e)):e}})},function(t,e,n){var r=n(10),o=n(12),i=n(21);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},function(t,e,n){t.exports={default:n(87),__esModule:!0}},function(t,e,n){n(88);var r=n(12).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(10);r(r.S+r.F*!n(20),"Object",{defineProperty:n(16).f})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(86),i=r(o),u=n(90),a=r(u);Object.defineProperty(e,"__esModule",{value:!0});var c=n(93);(0,a.default)(c).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return c[t]}})})},function(t,e,n){t.exports={default:n(91),__esModule:!0}},function(t,e,n){n(92),t.exports=n(12).Object.keys},function(t,e,n){var r=n(47),o=n(31);n(85)("keys",function(){return function(t){return o(r(t))}})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(86),i=r(o),u=n(90),a=r(u);Object.defineProperty(e,"__esModule",{value:!0});var c=n(94);(0,a.default)(c).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return c[t]}})});var l=n(95);(0,a.default)(l).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return l[t]}})});var f=n(111);(0,a.default)(f).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return f[t]}})})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(86),i=r(o),u=n(90),a=r(u);Object.defineProperty(e,"__esModule",{value:!0});var c=function(t){var e={},n={};return(0,a.default)(t).forEach(function(r){(0,i.default)(e,r,{get:function(){if(!n.hasOwnProperty(r)){var e=t[r];n[r]=e()}return n[r]}})}),e},l={MutationObserver:function(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver},TOUCH_SUPPORTED:function(){return"ontouchstart"in document},EASING_MULTIPLIER:function(){return navigator.userAgent.match(/Android/)?.5:.25},WHEEL_EVENT:function(){return"onwheel"in window?"wheel":"mousewheel"}};e.GLOBAL_ENV=c(l)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(96),i=r(o);Object.defineProperty(e,"__esModule",{value:!0});var u=new i.default,a=u.set.bind(u),c=u.delete.bind(u);u.update=function(){u.forEach(function(t){t.__updateTree()})},u.delete=function(){var t=c.apply(void 0,arguments);return u.update(),t},u.set=function(){var t=a.apply(void 0,arguments);return u.update(),t},e.sbList=u},function(t,e,n){t.exports={default:n(97),__esModule:!0}},function(t,e,n){n(75),n(4),n(57),n(98),n(108),t.exports=n(12).Map},function(t,e,n){"use strict";var r=n(99);t.exports=n(104)("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=r.getEntry(this,t);return e&&e.v},set:function(t,e){return r.def(this,0===t?0:t,e)}},r,!0)},function(t,e,n){"use strict";var r=n(16).f,o=n(29),i=n(100),u=n(13),a=n(101),c=n(7),l=n(102),f=n(8),s=n(60),d=n(103),h=n(20),v=n(65).fastKey,_=h?"_s":"size",p=function(t,e){var n,r=v(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,f){var s=t(function(t,r){a(t,s,e,"_i"),t._i=o(null),t._f=void 0,t._l=void 0,t[_]=0,void 0!=r&&l(r,n,t[f],t)});return i(s.prototype,{clear:function(){for(var t=this,e=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete e[n.i];t._f=t._l=void 0,t[_]=0},delete:function(t){var e=this,n=p(e,t);if(n){var r=n.n,o=n.p;delete e._i[n.i],n.r=!0,o&&(o.n=r),r&&(r.p=o),e._f==n&&(e._f=r),e._l==n&&(e._l=o),e[_]--}return!!n},forEach:function(t){a(this,s,"forEach");for(var e,n=u(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(n(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!p(this,t)}}),h&&r(s.prototype,"size",{get:function(){return c(this[_])}}),s},def:function(t,e,n){var r,o,i=p(t,e);return i?i.v=n:(t._l=i={i:o=v(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[_]++,"F"!==o&&(t._i[o]=i)),t},getEntry:p,setStrong:function(t,e,n){f(t,e,function(t,e){this._t=t,this._k=e,this._l=void 0},function(){for(var t=this,e=t._k,n=t._l;n&&n.r;)n=n.p;return t._t&&(t._l=n=n?n.n:t._t._f)?"keys"==e?s(0,n.k):"values"==e?s(0,n.v):s(0,[n.k,n.v]):(t._t=void 0,s(1))},n?"entries":"values",!n,!0),d(e)}}},function(t,e,n){var r=n(15);t.exports=function(t,e,n){for(var o in e)n&&t[o]?t[o]=e[o]:r(t,o,e[o]);return t}},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(13),o=n(49),i=n(50),u=n(17),a=n(37),c=n(52),l={},f={},e=t.exports=function(t,e,n,s,d){var h,v,_,p,y=d?function(){return t}:c(t),b=r(n,s,e?2:1),g=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(i(y)){for(h=a(t.length);h>g;g++)if(p=e?b(u(v=t[g])[0],v[1]):b(t[g]),p===l||p===f)return p}else for(_=y.call(t);!(v=_.next()).done;)if(p=o(_,b,v.value,e),p===l||p===f)return p};e.BREAK=l,e.RETURN=f},function(t,e,n){"use strict";var r=n(11),o=n(12),i=n(16),u=n(20),a=n(45)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:r[t];u&&e&&!e[a]&&i.f(e,a,{configurable:!0,get:function(){return this}})}},function(t,e,n){"use strict";var r=n(11),o=n(10),i=n(65),u=n(21),a=n(15),c=n(100),l=n(102),f=n(101),s=n(18),d=n(44),h=n(16).f,v=n(105)(0),_=n(20);t.exports=function(t,e,n,p,y,b){var g=r[t],m=g,x=y?"set":"add",S=m&&m.prototype,E={};return _&&"function"==typeof m&&(b||S.forEach&&!u(function(){(new m).entries().next()}))?(m=e(function(e,n){f(e,m,t,"_c"),e._c=new g,void 0!=n&&l(n,y,e[x],e)}),v("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t;t in S&&(!b||"clear"!=t)&&a(m.prototype,t,function(n,r){if(f(this,m,t),!e&&b&&!s(n))return"get"==t&&void 0;var o=this._c[t](0===n?0:n,r);return e?this:o})}),"size"in S&&h(m.prototype,"size",{get:function(){return this._c.size}})):(m=p.getConstructor(e,t,y,x),c(m.prototype,n),i.NEED=!0),d(m,t),E[t]=m,o(o.G+o.W+o.F,E),b||p.setStrong(m,t,y),m}},function(t,e,n){var r=n(13),o=n(34),i=n(47),u=n(37),a=n(106);t.exports=function(t,e){var n=1==t,c=2==t,l=3==t,f=4==t,s=6==t,d=5==t||s,h=e||a;return function(e,a,v){for(var _,p,y=i(e),b=o(y),g=r(a,v,3),m=u(b.length),x=0,S=n?h(e,m):c?h(e,0):void 0;m>x;x++)if((d||x in b)&&(_=b[x],p=g(_,x,y),t))if(n)S[x]=p;else if(p)switch(t){case 3:return!0;case 5:return _;case 6:return x;case 2:S.push(_)}else if(f)return!1;return s?-1:l||f?f:S}}},function(t,e,n){var r=n(107);t.exports=function(t,e){return new(r(t))(e)}},function(t,e,n){var r=n(18),o=n(71),i=n(45)("species");t.exports=function(t){var e;return o(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)||(e=void 0),r(e)&&(e=e[i],null===e&&(e=void 0))),void 0===e?Array:e}},function(t,e,n){var r=n(10);r(r.P+r.R,"Map",{toJSON:n(109)("Map")})},function(t,e,n){var r=n(53),o=n(110);t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},function(t,e,n){var r=n(102);t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.selectors="scrollbar, [scrollbar], [data-scrollbar]"},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(86),i=r(o),u=n(90),a=r(u);Object.defineProperty(e,"__esModule",{value:!0});var c=n(113);(0,a.default)(c).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return c[t]}})})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(86),i=r(o),u=n(90),a=r(u);Object.defineProperty(e,"__esModule",{value:!0});var c=n(114);(0,a.default)(c).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return c[t]}})});var l=n(115);(0,a.default)(l).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return l[t]}})});var f=n(116);(0,a.default)(f).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return f[t]}})});var s=n(117);(0,a.default)(s).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return s[t]}})});var d=n(118);(0,a.default)(d).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return d[t]}})});var h=n(119);(0,a.default)(h).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return h[t]}})});var v=n(120);(0,a.default)(v).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return v[t]}})});var _=n(121);(0,a.default)(_).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return _[t]}})});var p=n(122);(0,a.default)(p).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return p[t]}})});var y=n(123);(0,a.default)(y).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return y[t]}})});var b=n(124);(0,a.default)(b).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return b[t]}})})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.buildCurve=function(t,e){var n=[];if(e<=0)return n;for(var r=Math.round(e/1e3*60)-1,o=t?Math.pow(1/Math.abs(t),1/r):0,i=1;i<=r;i++)n.push(t-t*Math.pow(o,i));return n.push(t),n}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=100;e.debounce=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if("function"==typeof t){var o=void 0;return function(){for(var n=arguments.length,i=Array(n),u=0;u<n;u++)i[u]=arguments[u];!o&&r&&setTimeout(function(){return t.apply(void 0,i)}),clearTimeout(o),o=setTimeout(function(){o=void 0,t.apply(void 0,i)},e)}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,u.default)(t)}var i=n(2),u=r(i);Object.defineProperty(e,"__esModule",{value:!0});e.findChild=function(t,e){var n=t.children,r=null;
return n&&[].concat(o(n)).some(function(t){if(t.className.match(e))return r=t,!0}),r}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={STANDARD:1,OTHERS:-3},r=[1,28,500],o=function(t){return r[t]||r[0]};e.getDelta=function(t){if("deltaX"in t){var e=o(t.deltaMode);return{x:t.deltaX/n.STANDARD*e,y:t.deltaY/n.STANDARD*e}}return"wheelDeltaX"in t?{x:t.wheelDeltaX/n.OTHERS,y:t.wheelDeltaY/n.OTHERS}:{x:0,y:t.wheelDelta/n.OTHERS}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.getPointerData=function(t){return t.touches?t.touches[t.touches.length-1]:t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getPosition=void 0;var r=n(118);e.getPosition=function(t){var e=(0,r.getPointerData)(t);return{x:e.clientX,y:e.clientY}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getTouchID=void 0;var r=n(118);e.getTouchID=function(t){var e=(0,r.getPointerData)(t);return e.identifier}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.isOneOf=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.some(function(e){return t===e})}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.pickInRange=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-(1/0),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0;return Math.max(e,Math.min(t,n))}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(90),i=r(o);Object.defineProperty(e,"__esModule",{value:!0});var u=["webkit","moz","ms","o"],a=new RegExp("^-(?!(?:"+u.join("|")+")-)"),c=function(t){var e={};return(0,i.default)(t).forEach(function(n){if(!a.test(n))return void(e[n]=t[n]);var r=t[n];n=n.replace(/^-/,""),e[n]=r,u.forEach(function(t){e["-"+t+"-"+n]=r})}),e};e.setStyle=function(t,e){e=c(e),(0,i.default)(e).forEach(function(n){var r=n.replace(/^-/,"").replace(/-([a-z])/g,function(t,e){return e.toUpperCase()});t.style[r]=e[n]})}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,a.default)(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var u=n(2),a=r(u),c=n(86),l=r(c),f=n(125),s=r(f);Object.defineProperty(e,"__esModule",{value:!0}),e.TouchRecord=void 0;var d=s.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,l.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),v=n(119),_=function(){function t(e){i(this,t),this.updateTime=Date.now(),this.delta={x:0,y:0},this.velocity={x:0,y:0},this.lastPosition=(0,v.getPosition)(e)}return h(t,[{key:"update",value:function(t){var e=this.velocity,n=this.updateTime,r=this.lastPosition,o=Date.now(),i=(0,v.getPosition)(t),u={x:-(i.x-r.x),y:-(i.y-r.y)},a=o-n||16,c=u.x/a*1e3,l=u.y/a*1e3;e.x=.8*c+.2*e.x,e.y=.8*l+.2*e.y,this.delta=u,this.updateTime=o,this.lastPosition=i}}]),t}();e.TouchRecord=function(){function t(){i(this,t),this.touchList={},this.lastTouch=null,this.activeTouchID=void 0}return h(t,[{key:"__add",value:function(t){if(this.__has(t))return null;var e=new _(t);return this.touchList[t.identifier]=e,e}},{key:"__renew",value:function(t){if(!this.__has(t))return null;var e=this.touchList[t.identifier];return e.update(t),e}},{key:"__delete",value:function(t){return delete this.touchList[t.identifier]}},{key:"__has",value:function(t){return this.touchList.hasOwnProperty(t.identifier)}},{key:"__setActiveID",value:function(t){this.activeTouchID=t[t.length-1].identifier,this.lastTouch=this.touchList[this.activeTouchID]}},{key:"__getActiveTracker",value:function(){var t=this.touchList,e=this.activeTouchID;return t[e]}},{key:"isActive",value:function(){return void 0!==this.activeTouchID}},{key:"getDelta",value:function(){var t=this.__getActiveTracker();return t?d({},t.delta):this.__primitiveValue}},{key:"getVelocity",value:function(){var t=this.__getActiveTracker();return t?d({},t.velocity):this.__primitiveValue}},{key:"getLastPosition",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=this.__getActiveTracker()||this.lastTouch,n=e?e.lastPosition:this.__primitiveValue;return t?n.hasOwnProperty(t)?n[t]:0:d({},n)}},{key:"updatedRecently",value:function(){var t=this.__getActiveTracker();return t&&Date.now()-t.updateTime<30}},{key:"track",value:function(t){var e=this,n=t.targetTouches;return[].concat(o(n)).forEach(function(t){e.__add(t)}),this.touchList}},{key:"update",value:function(t){var e=this,n=t.touches,r=t.changedTouches;return[].concat(o(n)).forEach(function(t){e.__renew(t)}),this.__setActiveID(r),this.touchList}},{key:"release",value:function(t){var e=this;return this.activeTouchID=void 0,[].concat(o(t.changedTouches)).forEach(function(t){e.__delete(t)}),this.touchList}},{key:"__primitiveValue",get:function(){return{x:0,y:0}}}]),t}()},function(t,e,n){t.exports={default:n(126),__esModule:!0}},function(t,e,n){n(127),t.exports=n(12).Object.assign},function(t,e,n){var r=n(10);r(r.S+r.F,"Object",{assign:n(128)})},function(t,e,n){"use strict";var r=n(31),o=n(69),i=n(70),u=n(47),a=n(34),c=Object.assign;t.exports=!c||n(21)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=u(t),c=arguments.length,l=1,f=o.f,s=i.f;c>l;)for(var d,h=a(arguments[l++]),v=f?r(h).concat(f(h)):r(h),_=v.length,p=0;_>p;)s.call(h,d=v[p++])&&(n[d]=h[d]);return n}:c},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(86),i=r(o),u=n(90),a=r(u);Object.defineProperty(e,"__esModule",{value:!0});var c=n(130);(0,a.default)(c).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return c[t]}})})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(86),i=r(o),u=n(90),a=r(u);Object.defineProperty(e,"__esModule",{value:!0});var c=n(131);(0,a.default)(c).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return c[t]}})});var l=n(132);(0,a.default)(l).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return l[t]}})});var f=n(133);(0,a.default)(f).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return f[t]}})});var s=n(134);(0,a.default)(s).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return s[t]}})});var d=n(135);(0,a.default)(d).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return d[t]}})});var h=n(136);(0,a.default)(h).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return h[t]}})});var v=n(137);(0,a.default)(v).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return v[t]}})});var _=n(138);(0,a.default)(_).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return _[t]}})});var p=n(139);(0,a.default)(p).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return p[t]}})});var y=n(140);(0,a.default)(y).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return y[t]}})});var b=n(141);(0,a.default)(b).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return b[t]}})});var g=n(142);(0,a.default)(g).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return g[t]}})});var m=n(143);(0,a.default)(m).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return m[t]}})});var x=n(144);(0,a.default)(x).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return x[t]}})})},function(t,e,n){"use strict";var r=n(78);r.SmoothScrollbar.prototype.clearMovement=r.SmoothScrollbar.prototype.stop=function(){this.movement.x=this.movement.y=0,cancelAnimationFrame(this.__timerID.scrollTo)}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,u.default)(t)}var i=n(2),u=r(i),a=n(78),c=n(112),l=n(89);a.SmoothScrollbar.prototype.destroy=function(t){var e=this.__listeners,n=this.__handlers,r=this.__observer,i=this.targets,u=i.container,a=i.content;n.forEach(function(t){var e=t.evt,n=t.elem,r=t.fn;n.removeEventListener(e,r)}),n.length=e.length=0,this.stop(),cancelAnimationFrame(this.__timerID.render),r&&r.disconnect(),l.sbList.delete(u),t||this.scrollTo(0,0,300,function(){if(u.parentNode){(0,c.setStyle)(u,{overflow:""}),u.scrollTop=u.scrollLeft=0;for(var t=[].concat(o(a.childNodes));u.firstChild;)u.removeChild(u.firstChild);t.forEach(function(t){return u.appendChild(t)})}})}},function(t,e,n){"use strict";var r=n(78);r.SmoothScrollbar.prototype.getContentElem=function(){return this.targets.content}},function(t,e,n){"use strict";var r=n(78);r.SmoothScrollbar.prototype.getSize=function(){var t=this.targets.container,e=this.targets.content;return{container:{width:t.clientWidth,height:t.clientHeight},content:{width:e.offsetWidth-e.clientWidth+e.scrollWidth,height:e.offsetHeight-e.clientHeight+e.scrollHeight}}}},function(t,e,n){"use strict";var r=n(78);r.SmoothScrollbar.prototype.infiniteScroll=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;if("function"==typeof t){var n={x:0,y:0},r=!1;this.addListener(function(o){var i=o.offset,u=o.limit;u.y-i.y<=e&&i.y>n.y&&!r&&(r=!0,setTimeout(function(){return t(o)})),u.y-i.y>e&&(r=!1),n=i})}}},function(t,e,n){"use strict";var r=n(78);r.SmoothScrollbar.prototype.isVisible=function(t){var e=this.bounding,n=t.getBoundingClientRect(),r=Math.max(e.top,n.top),o=Math.max(e.left,n.left),i=Math.min(e.right,n.right),u=Math.min(e.bottom,n.bottom);return r<u&&o<i}},function(t,e,n){"use strict";var r=n(78);r.SmoothScrollbar.prototype.addListener=function(t){"function"==typeof t&&this.__listeners.push(t)},r.SmoothScrollbar.prototype.removeListener=function(t){"function"==typeof t&&this.__listeners.some(function(e,n,r){return e===t&&r.splice(n,1)})}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?(0,l.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return!!e.length&&e.some(function(e){return t.match(e)})}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.REGIESTER,e=d[t];return function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];this.__handlers.forEach(function(n){var o=n.elem,u=n.evt,a=n.fn,c=n.hasRegistered;c&&t===s.REGIESTER||!c&&t===s.UNREGIESTER||i(u,r)&&(o[e](u,a),n.hasRegistered=!c)})}}var a,c=n(86),l=r(c),f=n(78),s={REGIESTER:0,UNREGIESTER:1},d=(a={},o(a,s.REGIESTER,"addEventListener"),o(a,s.UNREGIESTER,"removeEventListener"),a);f.SmoothScrollbar.prototype.registerEvents=u(s.REGIESTER),f.SmoothScrollbar.prototype.unregisterEvents=u(s.UNREGIESTER)},function(t,e,n){"use strict";var r=n(78);r.SmoothScrollbar.prototype.scrollIntoView=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.alignToTop,r=void 0===n||n,o=e.onlyScrollIfNeeded,i=void 0!==o&&o,u=e.offsetTop,a=void 0===u?0:u,c=e.offsetLeft,l=void 0===c?0:c,f=e.offsetBottom,s=void 0===f?0:f,d=this.targets,h=this.bounding;if(t&&d.container.contains(t)){var v=t.getBoundingClientRect();i&&this.isVisible(t)||this.__setMovement(v.left-h.left-l,r?v.top-h.top-a:v.bottom-h.bottom-s)}}},function(t,e,n){"use strict";var r=n(112),o=n(78);o.SmoothScrollbar.prototype.scrollTo=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.offset.x,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.offset.y,n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,u=this.options,a=this.offset,c=this.limit,l=this.__timerID;cancelAnimationFrame(l.scrollTo),i="function"==typeof i?i:function(){},u.renderByPixels&&(t=Math.round(t),e=Math.round(e));var f=a.x,s=a.y,d=(0,r.pickInRange)(t,0,c.x)-f,h=(0,r.pickInRange)(e,0,c.y)-s,v=(0,r.buildCurve)(d,o),_=(0,r.buildCurve)(h,o),p=v.length,y=0,b=function t(){n.setPosition(f+v[y],s+_[y]),y++,y===p?requestAnimationFrame(function(){i(n)}):l.scrollTo=requestAnimationFrame(t)};b()}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(90),i=r(o),u=n(78);u.SmoothScrollbar.prototype.setOptions=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,i.default)(e).forEach(function(n){t.options.hasOwnProperty(n)&&void 0!==e[n]&&(t.options[n]=e[n])})}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(125),i=r(o),u=i.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=n(112),c=n(78);c.SmoothScrollbar.prototype.setPosition=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.offset.x,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.offset.y,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.__hideTrackThrottle();var r={},o=this.options,i=this.offset,c=this.limit,l=this.targets,f=this.__listeners;o.renderByPixels&&(t=Math.round(t),e=Math.round(e)),t!==i.x&&this.showTrack("x"),e!==i.y&&this.showTrack("y"),t=(0,a.pickInRange)(t,0,c.x),e=(0,a.pickInRange)(e,0,c.y),t===i.x&&e===i.y||(r.direction={x:t===i.x?"none":t>i.x?"right":"left",y:e===i.y?"none":e>i.y?"down":"up"},this.__readonly("offset",{x:t,y:e}),r.limit=u({},c),r.offset=u({},this.offset),this.__setThumbPosition(),(0,a.setStyle)(l.content,{"-transform":"translate3d("+-t+"px, "+-e+"px, 0)"}),n||f.forEach(function(t){o.syncCallbacks?t(r):requestAnimationFrame(function(){t(r)})}))}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?(0,c.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.SHOW,e=d[t];return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"both",r=this.options,o=this.movement,i=this.targets,u=i.container,a=i.xAxis,c=i.yAxis;o.x||o.y?u.classList.add(s.CONTAINER):u.classList.remove(s.CONTAINER),r.alwaysShowTracks&&t===f.HIDE||(n=n.toLowerCase(),"both"===n&&(a.track.classList[e](s.TRACK),c.track.classList[e](s.TRACK)),"x"===n&&a.track.classList[e](s.TRACK),"y"===n&&c.track.classList[e](s.TRACK))}}var u,a=n(86),c=r(a),l=n(78),f={SHOW:0,HIDE:1},s={TRACK:"show",CONTAINER:"scrolling"},d=(u={},o(u,f.SHOW,"add"),o(u,f.HIDE,"remove"),u);l.SmoothScrollbar.prototype.showTrack=i(f.SHOW),l.SmoothScrollbar.prototype.hideTrack=i(f.HIDE)},function(t,e,n){"use strict";function r(){if("glow"===this.options.overscrollEffect){var t=this.targets,e=this.size,n=t.canvas,r=n.elem,o=n.context,i=window.devicePixelRatio||1,u=e.container.width*i,a=e.container.height*i;u===r.width&&a===r.height||(r.width=u,r.height=a,o.scale(i,i))}}function o(){var t=this.size,e=this.thumbSize,n=this.targets,r=n.xAxis,o=n.yAxis;(0,u.setStyle)(r.track,{display:t.content.width<=t.container.width?"none":"block"}),(0,u.setStyle)(o.track,{display:t.content.height<=t.container.height?"none":"block"}),(0,u.setStyle)(r.thumb,{width:e.x+"px"}),(0,u.setStyle)(o.thumb,{height:e.y+"px"})}function i(){var t=this.options;this.__updateBounding();var e=this.getSize(),n={x:Math.max(e.content.width-e.container.width,0),y:Math.max(e.content.height-e.container.height,0)},i={realX:e.container.width/e.content.width*e.container.width,realY:e.container.height/e.content.height*e.container.height};i.x=Math.max(i.realX,t.thumbMinSize),i.y=Math.max(i.realY,t.thumbMinSize),this.__readonly("size",e).__readonly("limit",n).__readonly("thumbSize",i),o.call(this),r.call(this),this.setPosition(),this.__setThumbPosition()}var u=n(112),a=n(78);a.SmoothScrollbar.prototype.update=function(t){t?requestAnimationFrame(i.bind(this)):i.call(this)}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(86),i=r(o),u=n(90),a=r(u);Object.defineProperty(e,"__esModule",{value:!0});var c=n(146);(0,a.default)(c).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return c[t]}})})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(86),i=r(o),u=n(90),a=r(u);Object.defineProperty(e,"__esModule",{value:!0});var c=n(147);(0,a.default)(c).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return c[t]}})});var l=n(148);(0,a.default)(l).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return l[t]}})});var f=n(149);(0,a.default)(f).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return f[t]}})});var s=n(154);(0,a.default)(s).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return s[t]}})});var d=n(155);(0,a.default)(d).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return d[t]}})});var h=n(156);(0,a.default)(h).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return h[t]}})});var v=n(157);(0,a.default)(v).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return v[t]}})})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,a.default)(t)}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this.limit,i=this.options,u=this.movement;this.__updateThrottle(),i.renderByPixels&&(t=Math.round(t),e=Math.round(e));var a=u.x+t,l=u.y+e;0===r.x&&(a=0),0===r.y&&(l=0);var f=this.__getDeltaLimit(n);u.x=c.pickInRange.apply(void 0,[a].concat(o(f.x))),u.y=c.pickInRange.apply(void 0,[l].concat(o(f.y)))}var u=n(2),a=r(u),c=n(112),l=n(78);Object.defineProperty(l.SmoothScrollbar.prototype,"__addMovement",{value:i,writable:!0,configurable:!0})},function(t,e,n){"use strict";function r(){var t=this,e=this.movement,n=this.movementLocked;a.forEach(function(r){n[r]=e[r]&&t.__willOverscroll(r,e[r])})}function o(){var t=this.movementLocked;a.forEach(function(e){t[e]=!1})}function i(){var t=this.movementLocked;return t.x||t.y}var u=n(78),a=["x","y"];Object.defineProperty(u.SmoothScrollbar.prototype,"__autoLockMovement",{value:r,writable:!0,configurable:!0}),Object.defineProperty(u.SmoothScrollbar.prototype,"__unlockMovement",{value:o,writable:!0,configurable:!0}),Object.defineProperty(u.SmoothScrollbar.prototype,"__isMovementLocked",{value:i,writable:!0,configurable:!0})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(t){var e=this.options,n=this.movement,r=this.overscrollRendered,o=this.MAX_OVERSCROLL,i=n[t]=(0,h.pickInRange)(n[t],-o,o),u=e.overscrollDamping,a=r[t]+(i-r[t])*u;e.renderByPixels&&(a|=0),!this.__isMovementLocked()&&Math.abs(a-r[t])<.1&&(a-=i/Math.abs(i||1)),Math.abs(a)<Math.abs(r[t])&&this.__readonly("overscrollBack",!0),(a*r[t]<0||Math.abs(a)<=1)&&(a=0,this.__readonly("overscrollBack",!1)),r[t]=a}}function i(t){var e=this.__touchRecord,n=this.overscrollRendered;return n.x!==t.x||n.y!==t.y||!(!d.GLOBAL_ENV.TOUCH_SUPPORTED||!e.updatedRecently())}function u(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(e.length&&this.options.overscrollEffect){var n=this.options,r=this.overscrollRendered,u=l({},r);if(e.forEach(function(e){return o.call(t,e)}),i.call(this,u))switch(n.overscrollEffect){case"bounce":return s.overscrollBounce.call(this,r.x,r.y);case"glow":return s.overscrollGlow.call(this,r.x,r.y);default:return}}}var a=n(125),c=r(a),l=c.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},f=n(78),s=n(150),d=n(89),h=n(112);Object.defineProperty(f.SmoothScrollbar.prototype,"__renderOverscroll",{value:u,writable:!0,configurable:!0})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(86),i=r(o),u=n(90),a=r(u);Object.defineProperty(e,"__esModule",{value:!0});var c=n(151);(0,a.default)(c).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return c[t]}})})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(86),i=r(o),u=n(90),a=r(u);Object.defineProperty(e,"__esModule",{value:!0});var c=n(152);(0,a.default)(c).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return c[t]}})});var l=n(153);(0,a.default)(l).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return l[t]}})})},function(t,e,n){"use strict";function r(t,e){var n=this.size,r=this.offset,i=this.targets,u=this.thumbOffset,a=i.xAxis,c=i.yAxis,l=i.content;if((0,o.setStyle)(l,{"-transform":"translate3d("+-(r.x+t)+"px, "+-(r.y+e)+"px, 0)"}),t){var f=n.container.width/(n.container.width+Math.abs(t));(0,o.setStyle)(a.thumb,{"-transform":"translate3d("+u.x+"px, 0, 0) scale3d("+f+", 1, 1)","-transform-origin":t<0?"left":"right"})}if(e){var s=n.container.height/(n.container.height+Math.abs(e));(0,o.setStyle)(c.thumb,{"-transform":"translate3d(0, "+u.y+"px, 0) scale3d(1, "+s+", 1)","-transform-origin":e<0?"top":"bottom"})}}Object.defineProperty(e,"__esModule",{value:!0}),e.overscrollBounce=r;var o=n(112)},function(t,e,n){"use strict";function r(t,e){var n=this.size,r=this.targets,a=this.options,c=r.canvas,l=c.elem,f=c.context;return t||e?((0,u.setStyle)(l,{display:"block"}),f.clearRect(0,0,n.content.width,n.container.height),f.fillStyle=a.overscrollEffectColor,o.call(this,t),void i.call(this,e)):(0,u.setStyle)(l,{display:"none"})}function o(t){var e=this.size,n=this.targets,r=this.__touchRecord,o=this.MAX_OVERSCROLL,i=e.container,l=i.width,f=i.height,s=n.canvas.context;s.save(),t>0&&s.transform(-1,0,0,1,l,0);var d=(0,u.pickInRange)(Math.abs(t)/o,0,a),h=(0,u.pickInRange)(d,0,c)*l,v=Math.abs(t),_=r.getLastPosition("y")||f/2;s.globalAlpha=d,s.beginPath(),s.moveTo(0,-h),s.quadraticCurveTo(v,_,0,f+h),s.fill(),s.closePath(),s.restore()}function i(t){var e=this.size,n=this.targets,r=this.__touchRecord,o=this.MAX_OVERSCROLL,i=e.container,l=i.width,f=i.height,s=n.canvas.context;s.save(),t>0&&s.transform(1,0,0,-1,0,f);var d=(0,u.pickInRange)(Math.abs(t)/o,0,a),h=(0,u.pickInRange)(d,0,c)*l,v=r.getLastPosition("x")||l/2,_=Math.abs(t);s.globalAlpha=d,s.beginPath(),s.moveTo(-h,0),s.quadraticCurveTo(v,_,l+h,0),s.fill(),s.closePath(),s.restore()}Object.defineProperty(e,"__esModule",{value:!0}),e.overscrollGlow=r;var u=n(112),a=.75,c=.25},function(t,e,n){"use strict";function r(t){var e=this.options,n=this.offset,r=this.movement,o=this.__touchRecord,i=e.damping,u=e.renderByPixels,a=e.overscrollDamping,c=n[t],l=r[t],f=i;if(this.__willOverscroll(t,l)?f=a:o.isActive()&&(f=.5),Math.abs(l)<1){var s=c+l;return{movement:0,position:l>0?Math.ceil(s):Math.floor(s)}}var d=l*(1-f);return u&&(d|=0),{movement:d,position:c+l-d}}function o(){var t=this.options,e=this.offset,n=this.limit,i=this.movement,a=this.overscrollRendered,c=this.__timerID;if(i.x||i.y||a.x||a.y){var l=r.call(this,"x"),f=r.call(this,"y"),s=[];if(t.overscrollEffect){var d=(0,u.pickInRange)(l.position,0,n.x),h=(0,u.pickInRange)(f.position,0,n.y);(a.x||d===e.x&&i.x)&&s.push("x"),(a.y||h===e.y&&i.y)&&s.push("y")}this.movementLocked.x||(i.x=l.movement),this.movementLocked.y||(i.y=f.movement),this.setPosition(l.position,f.position),this.__renderOverscroll(s)}c.render=requestAnimationFrame(o.bind(this))}var i=n(78),u=n(112);Object.defineProperty(i.SmoothScrollbar.prototype,"__render",{value:o,writable:!0,configurable:!0})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,a.default)(t)}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this.options,i=this.movement;this.__updateThrottle();var u=this.__getDeltaLimit(n);r.renderByPixels&&(t=Math.round(t),e=Math.round(e)),i.x=c.pickInRange.apply(void 0,[t].concat(o(u.x))),i.y=c.pickInRange.apply(void 0,[e].concat(o(u.y)))}var u=n(2),a=r(u),c=n(112),l=n(78);Object.defineProperty(l.SmoothScrollbar.prototype,"__setMovement",{value:i,writable:!0,configurable:!0})},function(t,e,n){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.options,r=this.offset,o=this.limit;if(!n.continuousScrolling)return!1;var u=(0,i.pickInRange)(t+r.x,0,o.x),a=(0,i.pickInRange)(e+r.y,0,o.y),c=!0;return c&=u===r.x,c&=a===r.y,c&=u===o.x||0===u||a===o.y||0===a}var o=n(78),i=n(112);Object.defineProperty(o.SmoothScrollbar.prototype,"__shouldPropagateMovement",{value:r,writable:!0,configurable:!0})},function(t,e,n){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!t)return!1;var n=this.offset,r=this.limit,o=n[t];return(0,i.pickInRange)(e+o,0,r[t])===o&&(0===o||o===r[t])}var o=n(78),i=n(112);Object.defineProperty(o.SmoothScrollbar.prototype,"__willOverscroll",{value:r,writable:!0,configurable:!0})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(86),i=r(o),u=n(90),a=r(u);Object.defineProperty(e,"__esModule",{value:!0});var c=n(159);(0,a.default)(c).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return c[t]}})})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(86),i=r(o),u=n(90),a=r(u);Object.defineProperty(e,"__esModule",{value:!0});var c=n(160);(0,a.default)(c).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return c[t]}})});var l=n(161);(0,a.default)(l).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return l[t]}})});var f=n(168);(0,a.default)(f).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return f[t]}})});var s=n(169);(0,a.default)(s).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return s[t]}})});var d=n(170);(0,a.default)(d).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return d[t]}})});var h=n(171);(0,a.default)(h).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return h[t]}})});var v=n(172);(0,a.default)(v).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return v[t]}})})},function(t,e,n){"use strict";function r(){var t=this,e=this.targets,n=e.container,r=e.content,o=!1,u=void 0,a=void 0;Object.defineProperty(this,"__isDrag",{get:function(){return o},enumerable:!1});var c=function e(n){var r=n.x,o=n.y;if(r||o){var i=t.options.speed;t.__setMovement(r*i,o*i),u=requestAnimationFrame(function(){e({x:r,y:o})})}};this.__addEvent(n,"dragstart",function(e){t.__eventFromChildScrollbar(e)||(o=!0,a=e.target.clientHeight,(0,i.setStyle)(r,{"pointer-events":"auto"}),cancelAnimationFrame(u),t.__updateBounding())}),this.__addEvent(document,"dragover mousemove touchmove",function(e){if(o&&!t.__eventFromChildScrollbar(e)){cancelAnimationFrame(u),e.preventDefault();var n=t.__getPointerTrend(e,a);c(n)}}),this.__addEvent(document,"dragend mouseup touchend blur",function(){cancelAnimationFrame(u),o=!1})}var o=n(78),i=n(112);Object.defineProperty(o.SmoothScrollbar.prototype,"__dragHandler",{value:r,writable:!0,configurable:!0})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(){var t=this,e=this.targets,n=function(e){var n=t.size,r=t.offset,o=t.limit,i=t.movement;switch(e){case s.SPACE:return[0,200];case s.PAGE_UP:return[0,-n.container.height+40];case s.PAGE_DOWN:return[0,n.container.height-40];case s.END:return[0,Math.abs(i.y)+o.y-r.y];case s.HOME:return[0,-Math.abs(i.y)-r.y];case s.LEFT:return[-40,0];case s.UP:return[0,-40];case s.RIGHT:return[40,0];case s.DOWN:return[0,40];default:return null}},r=e.container;this.__addEvent(r,"keydown",function(e){if(document.activeElement===r){var o=t.options,i=t.parents,u=t.movementLocked,a=n(e.keyCode||e.which);if(a){var c=l(a,2),f=c[0],s=c[1];if(t.__shouldPropagateMovement(f,s))return r.blur(),i.length&&i[0].focus(),t.__updateThrottle();e.preventDefault(),t.__unlockMovement(),f&&t.__willOverscroll("x",f)&&(u.x=!0),s&&t.__willOverscroll("y",s)&&(u.y=!0);var d=o.speed;t.__addMovement(f*d,s*d)}}}),this.__addEvent(r,"keyup",function(){t.__unlockMovement()})}var i=n(162),u=r(i),a=n(165),c=r(a),l=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=(0,c.default)(t);!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if((0,u.default)(Object(e)))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=n(78),s={SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40};Object.defineProperty(f.SmoothScrollbar.prototype,"__keyboardHandler",{value:o,writable:!0,configurable:!0})},function(t,e,n){t.exports={default:n(163),__esModule:!0}},function(t,e,n){n(57),n(4),t.exports=n(164)},function(t,e,n){var r=n(53),o=n(45)("iterator"),i=n(27);t.exports=n(12).isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||i.hasOwnProperty(r(e))}},function(t,e,n){t.exports={default:n(166),__esModule:!0}},function(t,e,n){n(57),n(4),t.exports=n(167)},function(t,e,n){var r=n(17),o=n(52);t.exports=n(12).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},function(t,e,n){"use strict";function r(){var t=this,e=this.targets,n=e.container,r=e.xAxis,o=e.yAxis,u=function(e,n){var r=t.size,o=t.thumbSize;if("x"===e){var i=r.container.width-(o.x-o.realX);return n/i*r.content.width}if("y"===e){var u=r.container.height-(o.y-o.realY);return n/u*r.content.height}return 0},a=function(t){return(0,i.isOneOf)(t,[r.track,r.thumb])?"x":(0,i.isOneOf)(t,[o.track,o.thumb])?"y":void 0},c=void 0,l=void 0,f=void 0,s=void 0,d=void 0;this.__addEvent(n,"click",function(e){if(!l&&(0,i.isOneOf)(e.target,[r.track,o.track])){var n=e.target,c=a(n),f=n.getBoundingClientRect(),s=(0,i.getPosition)(e),d=t.offset,h=t.thumbSize;
if("x"===c){var v=s.x-f.left-h.x/2;t.__setMovement(u(c,v)-d.x,0)}else{var _=s.y-f.top-h.y/2;t.__setMovement(0,u(c,_)-d.y)}}}),this.__addEvent(n,"mousedown",function(e){if((0,i.isOneOf)(e.target,[r.thumb,o.thumb])){c=!0;var n=(0,i.getPosition)(e),u=e.target.getBoundingClientRect();s=a(e.target),f={x:n.x-u.left,y:n.y-u.top},d=t.targets.container.getBoundingClientRect()}}),this.__addEvent(window,"mousemove",function(e){if(c){e.preventDefault(),l=!0;var n=t.offset,r=(0,i.getPosition)(e);if("x"===s){var o=r.x-f.x-d.left;t.setPosition(u(s,o),n.y)}if("y"===s){var a=r.y-f.y-d.top;t.setPosition(n.x,u(s,a))}}}),this.__addEvent(window,"mouseup blur",function(){c=l=!1})}var o=n(78),i=n(112);Object.defineProperty(o.SmoothScrollbar.prototype,"__mouseHandler",{value:r,writable:!0,configurable:!0})},function(t,e,n){"use strict";function r(){this.__addEvent(window,"resize",this.__updateThrottle)}var o=n(78);Object.defineProperty(o.SmoothScrollbar.prototype,"__resizeHandler",{value:r,writable:!0,configurable:!0})},function(t,e,n){"use strict";function r(){var t=this,e=!1,n=void 0,r=this.targets,o=r.container,u=r.content,a=function e(r){var o=r.x,i=r.y;if(o||i){var u=t.options.speed;t.__setMovement(o*u,i*u),n=requestAnimationFrame(function(){e({x:o,y:i})})}},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";(0,i.setStyle)(o,{"-user-select":t})};this.__addEvent(window,"mousemove",function(r){if(e){cancelAnimationFrame(n);var o=t.__getPointerTrend(r);a(o)}}),this.__addEvent(u,"selectstart",function(r){return t.__eventFromChildScrollbar(r)?c("none"):(cancelAnimationFrame(n),t.__updateBounding(),void(e=!0))}),this.__addEvent(window,"mouseup blur",function(){cancelAnimationFrame(n),c(),e=!1}),this.__addEvent(o,"scroll",function(t){t.preventDefault(),o.scrollTop=o.scrollLeft=0})}var o=n(78),i=n(112);Object.defineProperty(o.SmoothScrollbar.prototype,"__selectHandler",{value:r,writable:!0,configurable:!0})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(){var t=this,e=this.targets,n=this.__touchRecord,r=e.container;this.__addEvent(r,"touchstart",function(e){if(!t.__isDrag){var r=t.__timerID,o=t.movement;cancelAnimationFrame(r.scrollTo),t.__willOverscroll("x")||(o.x=0),t.__willOverscroll("y")||(o.y=0),n.track(e),t.__autoLockMovement()}}),this.__addEvent(r,"touchmove",function(e){if(!(t.__isDrag||s&&s!==t)){n.update(e);var r=n.getDelta(),o=r.x,i=r.y;if(t.__shouldPropagateMovement(o,i))return t.__updateThrottle();var u=t.movement,a=t.MAX_OVERSCROLL,c=t.options;if(u.x&&t.__willOverscroll("x",o)){var l=2;"bounce"===c.overscrollEffect&&(l+=Math.abs(10*u.x/a)),Math.abs(u.x)>=a?o=0:o/=l}if(u.y&&t.__willOverscroll("y",i)){var f=2;"bounce"===c.overscrollEffect&&(f+=Math.abs(10*u.y/a)),Math.abs(u.y)>=a?i=0:i/=f}t.__autoLockMovement(),e.preventDefault(),t.__addMovement(o,i,!0),s=t}}),this.__addEvent(r,"touchcancel touchend",function(e){if(!t.__isDrag){var r=t.options.speed,o=n.getVelocity(),i={};(0,u.default)(o).forEach(function(t){var e=(0,l.pickInRange)(o[t]*c.GLOBAL_ENV.EASING_MULTIPLIER,-1e3,1e3);i[t]=Math.abs(e)>f?e*r:0}),t.__addMovement(i.x,i.y,!0),t.__unlockMovement(),n.release(e),s=null}})}var i=n(90),u=r(i),a=n(78),c=n(89),l=n(112),f=100,s=null;Object.defineProperty(a.SmoothScrollbar.prototype,"__touchHandler",{value:o,writable:!0,configurable:!0})},function(t,e,n){"use strict";function r(){var t=this,e=this.targets.container,n=!1,r=(0,i.debounce)(function(){n=!1},30,!1);this.__addEvent(e,u.GLOBAL_ENV.WHEEL_EVENT,function(e){var o=t.options,u=(0,i.getDelta)(e),a=u.x,c=u.y;return a*=o.speed,c*=o.speed,t.__shouldPropagateMovement(a,c)?t.__updateThrottle():(e.preventDefault(),r(),t.overscrollBack&&(n=!0),n&&(t.__willOverscroll("x",a)&&(a=0),t.__willOverscroll("y",c)&&(c=0)),void t.__addMovement(a,c,!0))})}var o=n(78),i=n(112),u=n(89);Object.defineProperty(o.SmoothScrollbar.prototype,"__wheelHandler",{value:r,writable:!0,configurable:!0})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(86),i=r(o),u=n(90),a=r(u);Object.defineProperty(e,"__esModule",{value:!0});var c=n(174);(0,a.default)(c).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return c[t]}})})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(86),i=r(o),u=n(90),a=r(u);Object.defineProperty(e,"__esModule",{value:!0});var c=n(175);(0,a.default)(c).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return c[t]}})});var l=n(176);(0,a.default)(l).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return l[t]}})});var f=n(177);(0,a.default)(f).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return f[t]}})});var s=n(178);(0,a.default)(s).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return s[t]}})});var d=n(179);(0,a.default)(d).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return d[t]}})});var h=n(182);(0,a.default)(h).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return h[t]}})});var v=n(183);(0,a.default)(v).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return v[t]}})});var _=n(184);(0,a.default)(_).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return _[t]}})});var p=n(185);(0,a.default)(p).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return p[t]}})});var y=n(186);(0,a.default)(y).forEach(function(t){"default"!==t&&"__esModule"!==t&&(0,i.default)(e,t,{enumerable:!0,get:function(){return y[t]}})})},function(t,e,n){"use strict";function r(t,e,n){var r=this;if(!t||"function"!=typeof t.addEventListener)throw new TypeError("expect elem to be a DOM element, but got "+t);var o=function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];!t.type.match(/drag/)&&t.defaultPrevented||n.apply(void 0,[t].concat(r))};e.split(/\s+/g).forEach(function(e){r.__handlers.push({evt:e,elem:t,fn:o,hasRegistered:!0}),t.addEventListener(e,o)})}var o=n(78);Object.defineProperty(o.SmoothScrollbar.prototype,"__addEvent",{value:r,writable:!0,configurable:!0})},function(t,e,n){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.target;return this.children.some(function(t){return t.contains(e)})}var o=n(78);Object.defineProperty(o.SmoothScrollbar.prototype,"__eventFromChildScrollbar",{value:r,writable:!0,configurable:!0})},function(t,e,n){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.options,n=this.offset,r=this.limit;return t&&(e.continuousScrolling||e.overscrollEffect)?{x:[-(1/0),1/0],y:[-(1/0),1/0]}:{x:[-n.x,r.x-n.x],y:[-n.y,r.y-n.y]}}var o=n(78);Object.defineProperty(o.SmoothScrollbar.prototype,"__getDeltaLimit",{value:r,writable:!0,configurable:!0})},function(t,e,n){"use strict";function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.bounding,r=n.top,o=n.right,u=n.bottom,a=n.left,c=(0,i.getPosition)(t),l=c.x,f=c.y,s={x:0,y:0};return 0===l&&0===f?s:(l>o-e?s.x=l-o+e:l<a+e&&(s.x=l-a-e),f>u-e?s.y=f-u+e:f<r+e&&(s.y=f-r-e),s)}var o=n(78),i=n(112);Object.defineProperty(o.SmoothScrollbar.prototype,"__getPointerTrend",{value:r,writable:!0,configurable:!0})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,h.default)(t)}function i(t){var e=this,n={speed:1,damping:.1,thumbMinSize:20,syncCallbacks:!1,renderByPixels:!0,alwaysShowTracks:!1,continuousScrolling:"auto",overscrollEffect:!1,overscrollEffectColor:"#87ceeb",overscrollDamping:.2},r={damping:[0,1],speed:[0,1/0],thumbMinSize:[0,1/0],overscrollEffect:[!1,"bounce","glow"],overscrollDamping:[0,1]},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto";if(n.overscrollEffect!==!1)return!1;switch(t){case"auto":return e.isNestedScrollbar;default:return!!t}},u={set ignoreEvents(t){console.warn("`options.ignoreEvents` parameter is deprecated, use `instance#unregisterEvents()` method instead. https://github.com/idiotWu/smooth-scrollbar/wiki/Instance-Methods#instanceunregisterevents-regex--regex-regex--")},set friction(t){console.warn("`options.friction="+t+"` is deprecated, use `options.damping="+t/100+"` instead."),this.damping=t/100},get syncCallbacks(){return n.syncCallbacks},set syncCallbacks(t){n.syncCallbacks=!!t},get renderByPixels(){return n.renderByPixels},set renderByPixels(t){n.renderByPixels=!!t},get alwaysShowTracks(){return n.alwaysShowTracks},set alwaysShowTracks(t){t=!!t,n.alwaysShowTracks=t;var r=e.targets.container;t?(e.showTrack(),r.classList.add("sticky")):(e.hideTrack(),r.classList.remove("sticky"))},get continuousScrolling(){return i(n.continuousScrolling)},set continuousScrolling(t){"auto"===t?n.continuousScrolling=t:n.continuousScrolling=!!t},get overscrollEffect(){return n.overscrollEffect},set overscrollEffect(t){t&&!~r.overscrollEffect.indexOf(t)&&(console.warn("`overscrollEffect` should be one of "+(0,s.default)(r.overscrollEffect)+", but got "+(0,s.default)(t)+". It will be set to `false` now."),t=!1),n.overscrollEffect=t},get overscrollEffectColor(){return n.overscrollEffectColor},set overscrollEffectColor(t){n.overscrollEffectColor=t}};(0,l.default)(n).filter(function(t){return!u.hasOwnProperty(t)}).forEach(function(t){(0,a.default)(u,t,{enumerable:!0,get:function(){return n[t]},set:function(e){if(isNaN(parseFloat(e)))throw new TypeError("expect `options."+t+"` to be a number, but got "+("undefined"==typeof e?"undefined":b(e)));n[t]=g.pickInRange.apply(void 0,[e].concat(o(r[t])))}})}),this.__readonly("options",u),this.setOptions(t)}var u=n(86),a=r(u),c=n(90),l=r(c),f=n(180),s=r(f),d=n(2),h=r(d),v=n(55),_=r(v),p=n(62),y=r(p),b="function"==typeof y.default&&"symbol"==typeof _.default?function(t){return typeof t}:function(t){return t&&"function"==typeof y.default&&t.constructor===y.default&&t!==y.default.prototype?"symbol":typeof t},g=n(112),m=n(78);Object.defineProperty(m.SmoothScrollbar.prototype,"__initOptions",{value:i,writable:!0,configurable:!0})},function(t,e,n){t.exports={default:n(181),__esModule:!0}},function(t,e,n){var r=n(12),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},function(t,e,n){"use strict";function r(){this.update(),this.__keyboardHandler(),this.__resizeHandler(),this.__selectHandler(),this.__mouseHandler(),this.__touchHandler(),this.__wheelHandler(),this.__dragHandler(),this.__render()}var o=n(78);Object.defineProperty(o.SmoothScrollbar.prototype,"__initScrollbar",{value:r,writable:!0,configurable:!0})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return(0,u.default)(this,t,{value:e,enumerable:!0,configurable:!0})}var i=n(86),u=r(i),a=n(78);Object.defineProperty(a.SmoothScrollbar.prototype,"__readonly",{value:o,writable:!0,configurable:!0})},function(t,e,n){"use strict";function r(){var t=this.targets,e=this.size,n=this.offset,r=this.thumbOffset,i=this.thumbSize;r.x=n.x/e.content.width*(e.container.width-(i.x-i.realX)),r.y=n.y/e.content.height*(e.container.height-(i.y-i.realY)),(0,o.setStyle)(t.xAxis.thumb,{"-transform":"translate3d("+r.x+"px, 0, 0)"}),(0,o.setStyle)(t.yAxis.thumb,{"-transform":"translate3d(0, "+r.y+"px, 0)"})}var o=n(112),i=n(78);Object.defineProperty(i.SmoothScrollbar.prototype,"__setThumbPosition",{value:r,writable:!0,configurable:!0})},function(t,e,n){"use strict";function r(){var t=this.targets.container,e=t.getBoundingClientRect(),n=e.top,r=e.right,o=e.bottom,i=e.left,u=window,a=u.innerHeight,c=u.innerWidth;this.__readonly("bounding",{top:Math.max(n,0),right:Math.min(r,c),bottom:Math.min(o,a),left:Math.max(i,0)})}var o=n(78);Object.defineProperty(o.SmoothScrollbar.prototype,"__updateBounding",{value:r,writable:!0,configurable:!0})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,a.default)(t)}function i(){var t=this.targets,e=t.container,n=t.content;this.__readonly("children",[].concat(o(n.querySelectorAll(l.selectors)))),this.__readonly("isNestedScrollbar",!1);for(var r=[],i=e;i=i.parentElement;)l.sbList.has(i)&&(this.__readonly("isNestedScrollbar",!0),r.push(i));this.__readonly("parents",r)}var u=n(2),a=r(u),c=n(78),l=n(89);Object.defineProperty(c.SmoothScrollbar.prototype,"__updateTree",{value:i,writable:!0,configurable:!0})},function(t,e){}])});
/*!
 * jQuery.scrollTo
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * @projectDescription Lightweight, cross-browser and highly customizable animated scrolling with jQuery
 * @author Ariel Flesler
 * @version 2.1.2
 */
;(function(factory) {
	'use strict';
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof module !== 'undefined' && module.exports) {
		// CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// Global
		factory(jQuery);
	}
})(function($) {
	'use strict';

	var $scrollTo = $.scrollTo = function(target, duration, settings) {
		return $(window).scrollTo(target, duration, settings);
	};

	$scrollTo.defaults = {
		axis:'xy',
		duration: 0,
		limit:true
	};

	function isWin(elem) {
		return !elem.nodeName ||
			$.inArray(elem.nodeName.toLowerCase(), ['iframe','#document','html','body']) !== -1;
	}		

	$.fn.scrollTo = function(target, duration, settings) {
		if (typeof duration === 'object') {
			settings = duration;
			duration = 0;
		}
		if (typeof settings === 'function') {
			settings = { onAfter:settings };
		}
		if (target === 'max') {
			target = 9e9;
		}

		settings = $.extend({}, $scrollTo.defaults, settings);
		// Speed is still recognized for backwards compatibility
		duration = duration || settings.duration;
		// Make sure the settings are given right
		var queue = settings.queue && settings.axis.length > 1;
		if (queue) {
			// Let's keep the overall duration
			duration /= 2;
		}
		settings.offset = both(settings.offset);
		settings.over = both(settings.over);

		return this.each(function() {
			// Null target yields nothing, just like jQuery does
			if (target === null) return;

			var win = isWin(this),
				elem = win ? this.contentWindow || window : this,
				$elem = $(elem),
				targ = target, 
				attr = {},
				toff;

			switch (typeof targ) {
				// A number will pass the regex
				case 'number':
				case 'string':
					if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
						targ = both(targ);
						// We are done
						break;
					}
					// Relative/Absolute selector
					targ = win ? $(targ) : $(targ, elem);
					/* falls through */
				case 'object':
					if (targ.length === 0) return;
					// DOMElement / jQuery
					if (targ.is || targ.style) {
						// Get the real position of the target
						toff = (targ = $(targ)).offset();
					}
			}

			var offset = $.isFunction(settings.offset) && settings.offset(elem, targ) || settings.offset;

			$.each(settings.axis.split(''), function(i, axis) {
				var Pos	= axis === 'x' ? 'Left' : 'Top',
					pos = Pos.toLowerCase(),
					key = 'scroll' + Pos,
					prev = $elem[key](),
					max = $scrollTo.max(elem, axis);

				if (toff) {// jQuery / DOMElement
					attr[key] = toff[pos] + (win ? 0 : prev - $elem.offset()[pos]);

					// If it's a dom element, reduce the margin
					if (settings.margin) {
						attr[key] -= parseInt(targ.css('margin'+Pos), 10) || 0;
						attr[key] -= parseInt(targ.css('border'+Pos+'Width'), 10) || 0;
					}

					attr[key] += offset[pos] || 0;

					if (settings.over[pos]) {
						// Scroll to a fraction of its width/height
						attr[key] += targ[axis === 'x'?'width':'height']() * settings.over[pos];
					}
				} else {
					var val = targ[pos];
					// Handle percentage values
					attr[key] = val.slice && val.slice(-1) === '%' ?
						parseFloat(val) / 100 * max
						: val;
				}

				// Number or 'number'
				if (settings.limit && /^\d+$/.test(attr[key])) {
					// Check the limits
					attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
				}

				// Don't waste time animating, if there's no need.
				if (!i && settings.axis.length > 1) {
					if (prev === attr[key]) {
						// No animation needed
						attr = {};
					} else if (queue) {
						// Intermediate animation
						animate(settings.onAfterFirst);
						// Don't animate this axis again in the next iteration.
						attr = {};
					}
				}
			});

			animate(settings.onAfter);

			function animate(callback) {
				var opts = $.extend({}, settings, {
					// The queue setting conflicts with animate()
					// Force it to always be true
					queue: true,
					duration: duration,
					complete: callback && function() {
						callback.call(elem, targ, settings);
					}
				});
				$elem.animate(attr, opts);
			}
		});
	};

	// Max scrolling position, works on quirks mode
	// It only fails (not too badly) on IE, quirks mode.
	$scrollTo.max = function(elem, axis) {
		var Dim = axis === 'x' ? 'Width' : 'Height',
			scroll = 'scroll'+Dim;

		if (!isWin(elem))
			return elem[scroll] - $(elem)[Dim.toLowerCase()]();

		var size = 'client' + Dim,
			doc = elem.ownerDocument || elem.document,
			html = doc.documentElement,
			body = doc.body;

		return Math.max(html[scroll], body[scroll]) - Math.min(html[size], body[size]);
	};

	function both(val) {
		return $.isFunction(val) || $.isPlainObject(val) ? val : { top:val, left:val };
	}

	// Add special hooks so that window scroll properties can be animated
	$.Tween.propHooks.scrollLeft = 
	$.Tween.propHooks.scrollTop = {
		get: function(t) {
			return $(t.elem)[t.prop]();
		},
		set: function(t) {
			var curr = this.get(t);
			// If interrupt is true and user scrolled, stop animating
			if (t.options.interrupt && t._last && t._last !== curr) {
				return $(t.elem).stop();
			}
			var next = Math.round(t.now);
			// Don't waste CPU
			// Browsers don't render floating point scroll
			if (curr !== next) {
				$(t.elem)[t.prop](next);
				t._last = this.get(t);
			}
		}
	};

	// AMD requirement
	return $scrollTo;
});

/*!
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2013 M. Alsup
 * Version: 3.0.3 (11-JUL-2013)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.7.1 or later
 */
;(function($, undefined) {
"use strict";

var ver = '3.0.3';

function debug(s) {
	if ($.fn.cycle.debug)
		log(s);
}		
function log() {
	/*global console */
	if (window.console && console.log)
		console.log('[cycle] ' + Array.prototype.join.call(arguments,' '));
}
$.expr[':'].paused = function(el) {
	return el.cyclePause;
};


// the options arg can be...
//   a number  - indicates an immediate transition should occur to the given slide index
//   a string  - 'pause', 'resume', 'toggle', 'next', 'prev', 'stop', 'destroy' or the name of a transition effect (ie, 'fade', 'zoom', etc)
//   an object - properties to control the slideshow
//
// the arg2 arg can be...
//   the name of an fx (only used in conjunction with a numeric value for 'options')
//   the value true (only used in first arg == 'resume') and indicates
//	 that the resume should occur immediately (not wait for next timeout)

$.fn.cycle = function(options, arg2) {
	var o = { s: this.selector, c: this.context };

	// in 1.3+ we can fix mistakes with the ready state
	if (this.length === 0 && options != 'stop') {
		if (!$.isReady && o.s) {
			log('DOM not ready, queuing slideshow');
			$(function() {
				$(o.s,o.c).cycle(options,arg2);
			});
			return this;
		}
		// is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
		log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
		return this;
	}

	// iterate the matched nodeset
	return this.each(function() {
		var opts = handleArguments(this, options, arg2);
		if (opts === false)
			return;

		opts.updateActivePagerLink = opts.updateActivePagerLink || $.fn.cycle.updateActivePagerLink;
		
		// stop existing slideshow for this container (if there is one)
		if (this.cycleTimeout)
			clearTimeout(this.cycleTimeout);
		this.cycleTimeout = this.cyclePause = 0;
		this.cycleStop = 0; // issue #108

		var $cont = $(this);
		var $slides = opts.slideExpr ? $(opts.slideExpr, this) : $cont.children();
		var els = $slides.get();

		if (els.length < 2) {
			log('terminating; too few slides: ' + els.length);
			return;
		}

		var opts2 = buildOptions($cont, $slides, els, opts, o);
		if (opts2 === false)
			return;

		var startTime = opts2.continuous ? 10 : getTimeout(els[opts2.currSlide], els[opts2.nextSlide], opts2, !opts2.backwards);

		// if it's an auto slideshow, kick it off
		if (startTime) {
			startTime += (opts2.delay || 0);
			if (startTime < 10)
				startTime = 10;
			debug('first timeout: ' + startTime);
			this.cycleTimeout = setTimeout(function(){go(els,opts2,0,!opts.backwards);}, startTime);
		}
	});
};

function triggerPause(cont, byHover, onPager) {
	var opts = $(cont).data('cycle.opts');
	if (!opts)
		return;
	var paused = !!cont.cyclePause;
	if (paused && opts.paused)
		opts.paused(cont, opts, byHover, onPager);
	else if (!paused && opts.resumed)
		opts.resumed(cont, opts, byHover, onPager);
}

// process the args that were passed to the plugin fn
function handleArguments(cont, options, arg2) {
	if (cont.cycleStop === undefined)
		cont.cycleStop = 0;
	if (options === undefined || options === null)
		options = {};
	if (options.constructor == String) {
		switch(options) {
		case 'destroy':
		case 'stop':
			var opts = $(cont).data('cycle.opts');
			if (!opts)
				return false;
			cont.cycleStop++; // callbacks look for change
			if (cont.cycleTimeout)
				clearTimeout(cont.cycleTimeout);
			cont.cycleTimeout = 0;
			if (opts.elements)
				$(opts.elements).stop();
			$(cont).removeData('cycle.opts');
			if (options == 'destroy')
				destroy(cont, opts);
			return false;
		case 'toggle':
			cont.cyclePause = (cont.cyclePause === 1) ? 0 : 1;
			checkInstantResume(cont.cyclePause, arg2, cont);
			triggerPause(cont);
			return false;
		case 'pause':
			cont.cyclePause = 1;
			triggerPause(cont);
			return false;
		case 'resume':
			cont.cyclePause = 0;
			checkInstantResume(false, arg2, cont);
			triggerPause(cont);
			return false;
		case 'prev':
		case 'next':
			opts = $(cont).data('cycle.opts');
			if (!opts) {
				log('options not found, "prev/next" ignored');
				return false;
			}
			if (typeof arg2 == 'string') 
				opts.oneTimeFx = arg2;
			$.fn.cycle[options](opts);
			return false;
		default:
			options = { fx: options };
		}
		return options;
	}
	else if (options.constructor == Number) {
		// go to the requested slide
		var num = options;
		options = $(cont).data('cycle.opts');
		if (!options) {
			log('options not found, can not advance slide');
			return false;
		}
		if (num < 0 || num >= options.elements.length) {
			log('invalid slide index: ' + num);
			return false;
		}
		options.nextSlide = num;
		if (cont.cycleTimeout) {
			clearTimeout(cont.cycleTimeout);
			cont.cycleTimeout = 0;
		}
		if (typeof arg2 == 'string')
			options.oneTimeFx = arg2;
		go(options.elements, options, 1, num >= options.currSlide);
		return false;
	}
	return options;
	
	function checkInstantResume(isPaused, arg2, cont) {
		if (!isPaused && arg2 === true) { // resume now!
			var options = $(cont).data('cycle.opts');
			if (!options) {
				log('options not found, can not resume');
				return false;
			}
			if (cont.cycleTimeout) {
				clearTimeout(cont.cycleTimeout);
				cont.cycleTimeout = 0;
			}
			go(options.elements, options, 1, !options.backwards);
		}
	}
}

function removeFilter(el, opts) {
	if (!$.support.opacity && opts.cleartype && el.style.filter) {
		try { el.style.removeAttribute('filter'); }
		catch(smother) {} // handle old opera versions
	}
}

// unbind event handlers
function destroy(cont, opts) {
	if (opts.next)
		$(opts.next).unbind(opts.prevNextEvent);
	if (opts.prev)
		$(opts.prev).unbind(opts.prevNextEvent);
	
	if (opts.pager || opts.pagerAnchorBuilder)
		$.each(opts.pagerAnchors || [], function() {
			this.unbind().remove();
		});
	opts.pagerAnchors = null;
	$(cont).unbind('mouseenter.cycle mouseleave.cycle');
	if (opts.destroy) // callback
		opts.destroy(opts);
}

// one-time initialization
function buildOptions($cont, $slides, els, options, o) {
	var startingSlideSpecified;
	// support metadata plugin (v1.0 and v2.0)
	var opts = $.extend({}, $.fn.cycle.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
	var meta = $.isFunction($cont.data) ? $cont.data(opts.metaAttr) : null;
	if (meta)
		opts = $.extend(opts, meta);
	if (opts.autostop)
		opts.countdown = opts.autostopCount || els.length;

	var cont = $cont[0];
	$cont.data('cycle.opts', opts);
	opts.$cont = $cont;
	opts.stopCount = cont.cycleStop;
	opts.elements = els;
	opts.before = opts.before ? [opts.before] : [];
	opts.after = opts.after ? [opts.after] : [];

	// push some after callbacks
	if (!$.support.opacity && opts.cleartype)
		opts.after.push(function() { removeFilter(this, opts); });
	if (opts.continuous)
		opts.after.push(function() { go(els,opts,0,!opts.backwards); });

	saveOriginalOpts(opts);

	// clearType corrections
	if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
		clearTypeFix($slides);

	// container requires non-static position so that slides can be position within
	if ($cont.css('position') == 'static')
		$cont.css('position', 'relative');
	if (opts.width)
		$cont.width(opts.width);
	if (opts.height && opts.height != 'auto')
		$cont.height(opts.height);

	if (opts.startingSlide !== undefined) {
		opts.startingSlide = parseInt(opts.startingSlide,10);
		if (opts.startingSlide >= els.length || opts.startSlide < 0)
			opts.startingSlide = 0; // catch bogus input
		else 
			startingSlideSpecified = true;
	}
	else if (opts.backwards)
		opts.startingSlide = els.length - 1;
	else
		opts.startingSlide = 0;

	// if random, mix up the slide array
	if (opts.random) {
		opts.randomMap = [];
		for (var i = 0; i < els.length; i++)
			opts.randomMap.push(i);
		opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
		if (startingSlideSpecified) {
			// try to find the specified starting slide and if found set start slide index in the map accordingly
			for ( var cnt = 0; cnt < els.length; cnt++ ) {
				if ( opts.startingSlide == opts.randomMap[cnt] ) {
					opts.randomIndex = cnt;
				}
			}
		}
		else {
			opts.randomIndex = 1;
			opts.startingSlide = opts.randomMap[1];
		}
	}
	else if (opts.startingSlide >= els.length)
		opts.startingSlide = 0; // catch bogus input
	opts.currSlide = opts.startingSlide || 0;
	var first = opts.startingSlide;

	// set position and zIndex on all the slides
	$slides.css({position: 'absolute', top:0, left:0}).hide().each(function(i) {
		var z;
		if (opts.backwards)
			z = first ? i <= first ? els.length + (i-first) : first-i : els.length-i;
		else
			z = first ? i >= first ? els.length - (i-first) : first-i : els.length-i;
		$(this).css('z-index', z);
	});

	// make sure first slide is visible
	$(els[first]).css('opacity',1).show(); // opacity bit needed to handle restart use case
	removeFilter(els[first], opts);

	// stretch slides
	if (opts.fit) {
		if (!opts.aspect) {
	        if (opts.width)
	            $slides.width(opts.width);
	        if (opts.height && opts.height != 'auto')
	            $slides.height(opts.height);
		} else {
			$slides.each(function(){
				var $slide = $(this);
				var ratio = (opts.aspect === true) ? $slide.width()/$slide.height() : opts.aspect;
				if( opts.width && $slide.width() != opts.width ) {
					$slide.width( opts.width );
					$slide.height( opts.width / ratio );
				}

				if( opts.height && $slide.height() < opts.height ) {
					$slide.height( opts.height );
					$slide.width( opts.height * ratio );
				}
			});
		}
	}

	if (opts.center && ((!opts.fit) || opts.aspect)) {
		$slides.each(function(){
			var $slide = $(this);
			$slide.css({
				"margin-left": opts.width ?
					((opts.width - $slide.width()) / 2) + "px" :
					0,
				"margin-top": opts.height ?
					((opts.height - $slide.height()) / 2) + "px" :
					0
			});
		});
	}

	if (opts.center && !opts.fit && !opts.slideResize) {
		$slides.each(function(){
			var $slide = $(this);
			$slide.css({
				"margin-left": opts.width ? ((opts.width - $slide.width()) / 2) + "px" : 0,
				"margin-top": opts.height ? ((opts.height - $slide.height()) / 2) + "px" : 0
			});
		});
	}
		
	// stretch container
	var reshape = (opts.containerResize || opts.containerResizeHeight) && $cont.innerHeight() < 1;
	if (reshape) { // do this only if container has no size http://tinyurl.com/da2oa9
		var maxw = 0, maxh = 0;
		for(var j=0; j < els.length; j++) {
			var $e = $(els[j]), e = $e[0], w = $e.outerWidth(), h = $e.outerHeight();
			if (!w) w = e.offsetWidth || e.width || $e.attr('width');
			if (!h) h = e.offsetHeight || e.height || $e.attr('height');
			maxw = w > maxw ? w : maxw;
			maxh = h > maxh ? h : maxh;
		}
		if (opts.containerResize && maxw > 0 && maxh > 0)
			$cont.css({width:maxw+'px',height:maxh+'px'});
		if (opts.containerResizeHeight && maxh > 0)
			$cont.css({height:maxh+'px'});
	}

	var pauseFlag = false;  // https://github.com/malsup/cycle/issues/44
	if (opts.pause)
		$cont.bind('mouseenter.cycle', function(){
			pauseFlag = true;
			this.cyclePause++;
			triggerPause(cont, true);
		}).bind('mouseleave.cycle', function(){
				if (pauseFlag)
					this.cyclePause--;
				triggerPause(cont, true);
		});

	if (supportMultiTransitions(opts) === false)
		return false;

	// apparently a lot of people use image slideshows without height/width attributes on the images.
	// Cycle 2.50+ requires the sizing info for every slide; this block tries to deal with that.
	var requeue = false;
	options.requeueAttempts = options.requeueAttempts || 0;
	$slides.each(function() {
		// try to get height/width of each slide
		var $el = $(this);
		this.cycleH = (opts.fit && opts.height) ? opts.height : ($el.height() || this.offsetHeight || this.height || $el.attr('height') || 0);
		this.cycleW = (opts.fit && opts.width) ? opts.width : ($el.width() || this.offsetWidth || this.width || $el.attr('width') || 0);

		if ( $el.is('img') ) {
			var loading = (this.cycleH === 0 && this.cycleW === 0 && !this.complete);
			// don't requeue for images that are still loading but have a valid size
			if (loading) {
				if (o.s && opts.requeueOnImageNotLoaded && ++options.requeueAttempts < 100) { // track retry count so we don't loop forever
					log(options.requeueAttempts,' - img slide not loaded, requeuing slideshow: ', this.src, this.cycleW, this.cycleH);
					setTimeout(function() {$(o.s,o.c).cycle(options);}, opts.requeueTimeout);
					requeue = true;
					return false; // break each loop
				}
				else {
					log('could not determine size of image: '+this.src, this.cycleW, this.cycleH);
				}
			}
		}
		return true;
	});

	if (requeue)
		return false;

	opts.cssBefore = opts.cssBefore || {};
	opts.cssAfter = opts.cssAfter || {};
	opts.cssFirst = opts.cssFirst || {};
	opts.animIn = opts.animIn || {};
	opts.animOut = opts.animOut || {};

	$slides.not(':eq('+first+')').css(opts.cssBefore);
	$($slides[first]).css(opts.cssFirst);

	if (opts.timeout) {
		opts.timeout = parseInt(opts.timeout,10);
		// ensure that timeout and speed settings are sane
		if (opts.speed.constructor == String)
			opts.speed = $.fx.speeds[opts.speed] || parseInt(opts.speed,10);
		if (!opts.sync)
			opts.speed = opts.speed / 2;
		
		var buffer = opts.fx == 'none' ? 0 : opts.fx == 'shuffle' ? 500 : 250;
		while((opts.timeout - opts.speed) < buffer) // sanitize timeout
			opts.timeout += opts.speed;
	}
	if (opts.easing)
		opts.easeIn = opts.easeOut = opts.easing;
	if (!opts.speedIn)
		opts.speedIn = opts.speed;
	if (!opts.speedOut)
		opts.speedOut = opts.speed;

	opts.slideCount = els.length;
	opts.currSlide = opts.lastSlide = first;
	if (opts.random) {
		if (++opts.randomIndex == els.length)
			opts.randomIndex = 0;
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else if (opts.backwards)
		opts.nextSlide = opts.startingSlide === 0 ? (els.length-1) : opts.startingSlide-1;
	else
		opts.nextSlide = opts.startingSlide >= (els.length-1) ? 0 : opts.startingSlide+1;

	// run transition init fn
	if (!opts.multiFx) {
		var init = $.fn.cycle.transitions[opts.fx];
		if ($.isFunction(init))
			init($cont, $slides, opts);
		else if (opts.fx != 'custom' && !opts.multiFx) {
			log('unknown transition: ' + opts.fx,'; slideshow terminating');
			return false;
		}
	}

	// fire artificial events
	var e0 = $slides[first];
	if (!opts.skipInitializationCallbacks) {
		if (opts.before.length)
			opts.before[0].apply(e0, [e0, e0, opts, true]);
		if (opts.after.length)
			opts.after[0].apply(e0, [e0, e0, opts, true]);
	}
	if (opts.next)
		$(opts.next).bind(opts.prevNextEvent,function(){return advance(opts,1);});
	if (opts.prev)
		$(opts.prev).bind(opts.prevNextEvent,function(){return advance(opts,0);});
	if (opts.pager || opts.pagerAnchorBuilder)
		buildPager(els,opts);

	exposeAddSlide(opts, els);

	return opts;
}

// save off original opts so we can restore after clearing state
function saveOriginalOpts(opts) {
	opts.original = { before: [], after: [] };
	opts.original.cssBefore = $.extend({}, opts.cssBefore);
	opts.original.cssAfter  = $.extend({}, opts.cssAfter);
	opts.original.animIn	= $.extend({}, opts.animIn);
	opts.original.animOut   = $.extend({}, opts.animOut);
	$.each(opts.before, function() { opts.original.before.push(this); });
	$.each(opts.after,  function() { opts.original.after.push(this); });
}

function supportMultiTransitions(opts) {
	var i, tx, txs = $.fn.cycle.transitions;
	// look for multiple effects
	if (opts.fx.indexOf(',') > 0) {
		opts.multiFx = true;
		opts.fxs = opts.fx.replace(/\s*/g,'').split(',');
		// discard any bogus effect names
		for (i=0; i < opts.fxs.length; i++) {
			var fx = opts.fxs[i];
			tx = txs[fx];
			if (!tx || !txs.hasOwnProperty(fx) || !$.isFunction(tx)) {
				log('discarding unknown transition: ',fx);
				opts.fxs.splice(i,1);
				i--;
			}
		}
		// if we have an empty list then we threw everything away!
		if (!opts.fxs.length) {
			log('No valid transitions named; slideshow terminating.');
			return false;
		}
	}
	else if (opts.fx == 'all') {  // auto-gen the list of transitions
		opts.multiFx = true;
		opts.fxs = [];
		for (var p in txs) {
			if (txs.hasOwnProperty(p)) {
				tx = txs[p];
				if (txs.hasOwnProperty(p) && $.isFunction(tx))
					opts.fxs.push(p);
			}
		}
	}
	if (opts.multiFx && opts.randomizeEffects) {
		// munge the fxs array to make effect selection random
		var r1 = Math.floor(Math.random() * 20) + 30;
		for (i = 0; i < r1; i++) {
			var r2 = Math.floor(Math.random() * opts.fxs.length);
			opts.fxs.push(opts.fxs.splice(r2,1)[0]);
		}
		debug('randomized fx sequence: ',opts.fxs);
	}
	return true;
}

// provide a mechanism for adding slides after the slideshow has started
function exposeAddSlide(opts, els) {
	opts.addSlide = function(newSlide, prepend) {
		var $s = $(newSlide), s = $s[0];
		if (!opts.autostopCount)
			opts.countdown++;
		els[prepend?'unshift':'push'](s);
		if (opts.els)
			opts.els[prepend?'unshift':'push'](s); // shuffle needs this
		opts.slideCount = els.length;

		// add the slide to the random map and resort
		if (opts.random) {
			opts.randomMap.push(opts.slideCount-1);
			opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
		}

		$s.css('position','absolute');
		$s[prepend?'prependTo':'appendTo'](opts.$cont);

		if (prepend) {
			opts.currSlide++;
			opts.nextSlide++;
		}

		if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
			clearTypeFix($s);

		if (opts.fit && opts.width)
			$s.width(opts.width);
		if (opts.fit && opts.height && opts.height != 'auto')
			$s.height(opts.height);
		s.cycleH = (opts.fit && opts.height) ? opts.height : $s.height();
		s.cycleW = (opts.fit && opts.width) ? opts.width : $s.width();

		$s.css(opts.cssBefore);

		if (opts.pager || opts.pagerAnchorBuilder)
			$.fn.cycle.createPagerAnchor(els.length-1, s, $(opts.pager), els, opts);

		if ($.isFunction(opts.onAddSlide))
			opts.onAddSlide($s);
		else
			$s.hide(); // default behavior
	};
}

// reset internal state; we do this on every pass in order to support multiple effects
$.fn.cycle.resetState = function(opts, fx) {
	fx = fx || opts.fx;
	opts.before = []; opts.after = [];
	opts.cssBefore = $.extend({}, opts.original.cssBefore);
	opts.cssAfter  = $.extend({}, opts.original.cssAfter);
	opts.animIn	= $.extend({}, opts.original.animIn);
	opts.animOut   = $.extend({}, opts.original.animOut);
	opts.fxFn = null;
	$.each(opts.original.before, function() { opts.before.push(this); });
	$.each(opts.original.after,  function() { opts.after.push(this); });

	// re-init
	var init = $.fn.cycle.transitions[fx];
	if ($.isFunction(init))
		init(opts.$cont, $(opts.elements), opts);
};

// this is the main engine fn, it handles the timeouts, callbacks and slide index mgmt
function go(els, opts, manual, fwd) {
	var p = opts.$cont[0], curr = els[opts.currSlide], next = els[opts.nextSlide];

	// opts.busy is true if we're in the middle of an animation
	if (manual && opts.busy && opts.manualTrump) {
		// let manual transitions requests trump active ones
		debug('manualTrump in go(), stopping active transition');
		$(els).stop(true,true);
		opts.busy = 0;
		clearTimeout(p.cycleTimeout);
	}

	// don't begin another timeout-based transition if there is one active
	if (opts.busy) {
		debug('transition active, ignoring new tx request');
		return;
	}


	// stop cycling if we have an outstanding stop request
	if (p.cycleStop != opts.stopCount || p.cycleTimeout === 0 && !manual)
		return;

	// check to see if we should stop cycling based on autostop options
	if (!manual && !p.cyclePause && !opts.bounce &&
		((opts.autostop && (--opts.countdown <= 0)) ||
		(opts.nowrap && !opts.random && opts.nextSlide < opts.currSlide))) {
		if (opts.end)
			opts.end(opts);
		return;
	}

	// if slideshow is paused, only transition on a manual trigger
	var changed = false;
	if ((manual || !p.cyclePause) && (opts.nextSlide != opts.currSlide)) {
		changed = true;
		var fx = opts.fx;
		// keep trying to get the slide size if we don't have it yet
		curr.cycleH = curr.cycleH || $(curr).height();
		curr.cycleW = curr.cycleW || $(curr).width();
		next.cycleH = next.cycleH || $(next).height();
		next.cycleW = next.cycleW || $(next).width();

		// support multiple transition types
		if (opts.multiFx) {
			if (fwd && (opts.lastFx === undefined || ++opts.lastFx >= opts.fxs.length))
				opts.lastFx = 0;
			else if (!fwd && (opts.lastFx === undefined || --opts.lastFx < 0))
				opts.lastFx = opts.fxs.length - 1;
			fx = opts.fxs[opts.lastFx];
		}

		// one-time fx overrides apply to:  $('div').cycle(3,'zoom');
		if (opts.oneTimeFx) {
			fx = opts.oneTimeFx;
			opts.oneTimeFx = null;
		}

		$.fn.cycle.resetState(opts, fx);

		// run the before callbacks
		if (opts.before.length)
			$.each(opts.before, function(i,o) {
				if (p.cycleStop != opts.stopCount) return;
				o.apply(next, [curr, next, opts, fwd]);
			});

		// stage the after callacks
		var after = function() {
			opts.busy = 0;
			$.each(opts.after, function(i,o) {
				if (p.cycleStop != opts.stopCount) return;
				o.apply(next, [curr, next, opts, fwd]);
			});
			if (!p.cycleStop) {
				// queue next transition
				queueNext();
			}
		};

		debug('tx firing('+fx+'); currSlide: ' + opts.currSlide + '; nextSlide: ' + opts.nextSlide);
		
		// get ready to perform the transition
		opts.busy = 1;
		if (opts.fxFn) // fx function provided?
			opts.fxFn(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
		else if ($.isFunction($.fn.cycle[opts.fx])) // fx plugin ?
			$.fn.cycle[opts.fx](curr, next, opts, after, fwd, manual && opts.fastOnEvent);
		else
			$.fn.cycle.custom(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
	}
	else {
		queueNext();
	}

	if (changed || opts.nextSlide == opts.currSlide) {
		// calculate the next slide
		var roll;
		opts.lastSlide = opts.currSlide;
		if (opts.random) {
			opts.currSlide = opts.nextSlide;
			if (++opts.randomIndex == els.length) {
				opts.randomIndex = 0;
				opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
			}
			opts.nextSlide = opts.randomMap[opts.randomIndex];
			if (opts.nextSlide == opts.currSlide)
				opts.nextSlide = (opts.currSlide == opts.slideCount - 1) ? 0 : opts.currSlide + 1;
		}
		else if (opts.backwards) {
			roll = (opts.nextSlide - 1) < 0;
			if (roll && opts.bounce) {
				opts.backwards = !opts.backwards;
				opts.nextSlide = 1;
				opts.currSlide = 0;
			}
			else {
				opts.nextSlide = roll ? (els.length-1) : opts.nextSlide-1;
				opts.currSlide = roll ? 0 : opts.nextSlide+1;
			}
		}
		else { // sequence
			roll = (opts.nextSlide + 1) == els.length;
			if (roll && opts.bounce) {
				opts.backwards = !opts.backwards;
				opts.nextSlide = els.length-2;
				opts.currSlide = els.length-1;
			}
			else {
				opts.nextSlide = roll ? 0 : opts.nextSlide+1;
				opts.currSlide = roll ? els.length-1 : opts.nextSlide-1;
			}
		}
	}
	if (changed && opts.pager)
		opts.updateActivePagerLink(opts.pager, opts.currSlide, opts.activePagerClass);
	
	function queueNext() {
		// stage the next transition
		var ms = 0, timeout = opts.timeout;
		if (opts.timeout && !opts.continuous) {
			ms = getTimeout(els[opts.currSlide], els[opts.nextSlide], opts, fwd);
         if (opts.fx == 'shuffle')
            ms -= opts.speedOut;
      }
		else if (opts.continuous && p.cyclePause) // continuous shows work off an after callback, not this timer logic
			ms = 10;
		if (ms > 0)
			p.cycleTimeout = setTimeout(function(){ go(els, opts, 0, !opts.backwards); }, ms);
	}
}

// invoked after transition
$.fn.cycle.updateActivePagerLink = function(pager, currSlide, clsName) {
   $(pager).each(function() {
       $(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);
   });
};

// calculate timeout value for current transition
function getTimeout(curr, next, opts, fwd) {
	if (opts.timeoutFn) {
		// call user provided calc fn
		var t = opts.timeoutFn.call(curr,curr,next,opts,fwd);
		while (opts.fx != 'none' && (t - opts.speed) < 250) // sanitize timeout
			t += opts.speed;
		debug('calculated timeout: ' + t + '; speed: ' + opts.speed);
		if (t !== false)
			return t;
	}
	return opts.timeout;
}

// expose next/prev function, caller must pass in state
$.fn.cycle.next = function(opts) { advance(opts,1); };
$.fn.cycle.prev = function(opts) { advance(opts,0);};

// advance slide forward or back
function advance(opts, moveForward) {
	var val = moveForward ? 1 : -1;
	var els = opts.elements;
	var p = opts.$cont[0], timeout = p.cycleTimeout;
	if (timeout) {
		clearTimeout(timeout);
		p.cycleTimeout = 0;
	}
	if (opts.random && val < 0) {
		// move back to the previously display slide
		opts.randomIndex--;
		if (--opts.randomIndex == -2)
			opts.randomIndex = els.length-2;
		else if (opts.randomIndex == -1)
			opts.randomIndex = els.length-1;
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else if (opts.random) {
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else {
		opts.nextSlide = opts.currSlide + val;
		if (opts.nextSlide < 0) {
			if (opts.nowrap) return false;
			opts.nextSlide = els.length - 1;
		}
		else if (opts.nextSlide >= els.length) {
			if (opts.nowrap) return false;
			opts.nextSlide = 0;
		}
	}

	var cb = opts.onPrevNextEvent || opts.prevNextClick; // prevNextClick is deprecated
	if ($.isFunction(cb))
		cb(val > 0, opts.nextSlide, els[opts.nextSlide]);
	go(els, opts, 1, moveForward);
	return false;
}

function buildPager(els, opts) {
	var $p = $(opts.pager);
	$.each(els, function(i,o) {
		$.fn.cycle.createPagerAnchor(i,o,$p,els,opts);
	});
	opts.updateActivePagerLink(opts.pager, opts.startingSlide, opts.activePagerClass);
}

$.fn.cycle.createPagerAnchor = function(i, el, $p, els, opts) {
	var a;
	if ($.isFunction(opts.pagerAnchorBuilder)) {
		a = opts.pagerAnchorBuilder(i,el);
		debug('pagerAnchorBuilder('+i+', el) returned: ' + a);
	}
	else
		a = '<a href="#">'+(i+1)+'</a>';
		
	if (!a)
		return;
	var $a = $(a);
	// don't reparent if anchor is in the dom
	if ($a.parents('body').length === 0) {
		var arr = [];
		if ($p.length > 1) {
			$p.each(function() {
				var $clone = $a.clone(true);
				$(this).append($clone);
				arr.push($clone[0]);
			});
			$a = $(arr);
		}
		else {
			$a.appendTo($p);
		}
	}

	opts.pagerAnchors =  opts.pagerAnchors || [];
	opts.pagerAnchors.push($a);
	
	var pagerFn = function(e) {
		e.preventDefault();
		opts.nextSlide = i;
		var p = opts.$cont[0], timeout = p.cycleTimeout;
		if (timeout) {
			clearTimeout(timeout);
			p.cycleTimeout = 0;
		}
		var cb = opts.onPagerEvent || opts.pagerClick; // pagerClick is deprecated
		if ($.isFunction(cb))
			cb(opts.nextSlide, els[opts.nextSlide]);
		go(els,opts,1,opts.currSlide < i); // trigger the trans
//		return false; // <== allow bubble
	};
	
	if ( /mouseenter|mouseover/i.test(opts.pagerEvent) ) {
		$a.hover(pagerFn, function(){/* no-op */} );
	}
	else {
		$a.bind(opts.pagerEvent, pagerFn);
	}
	
	if ( ! /^click/.test(opts.pagerEvent) && !opts.allowPagerClickBubble)
		$a.bind('click.cycle', function(){return false;}); // suppress click
	
	var cont = opts.$cont[0];
	var pauseFlag = false; // https://github.com/malsup/cycle/issues/44
	if (opts.pauseOnPagerHover) {
		$a.hover(
			function() { 
				pauseFlag = true;
				cont.cyclePause++; 
				triggerPause(cont,true,true);
			}, function() { 
				if (pauseFlag)
					cont.cyclePause--; 
				triggerPause(cont,true,true);
			} 
		);
	}
};

// helper fn to calculate the number of slides between the current and the next
$.fn.cycle.hopsFromLast = function(opts, fwd) {
	var hops, l = opts.lastSlide, c = opts.currSlide;
	if (fwd)
		hops = c > l ? c - l : opts.slideCount - l;
	else
		hops = c < l ? l - c : l + opts.slideCount - c;
	return hops;
};

// fix clearType problems in ie6 by setting an explicit bg color
// (otherwise text slides look horrible during a fade transition)
function clearTypeFix($slides) {
	debug('applying clearType background-color hack');
	function hex(s) {
		s = parseInt(s,10).toString(16);
		return s.length < 2 ? '0'+s : s;
	}
	function getBg(e) {
		for ( ; e && e.nodeName.toLowerCase() != 'html'; e = e.parentNode) {
			var v = $.css(e,'background-color');
			if (v && v.indexOf('rgb') >= 0 ) {
				var rgb = v.match(/\d+/g);
				return '#'+ hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
			}
			if (v && v != 'transparent')
				return v;
		}
		return '#ffffff';
	}
	$slides.each(function() { $(this).css('background-color', getBg(this)); });
}

// reset common props before the next transition
$.fn.cycle.commonReset = function(curr,next,opts,w,h,rev) {
	$(opts.elements).not(curr).hide();
	if (typeof opts.cssBefore.opacity == 'undefined')
		opts.cssBefore.opacity = 1;
	opts.cssBefore.display = 'block';
	if (opts.slideResize && w !== false && next.cycleW > 0)
		opts.cssBefore.width = next.cycleW;
	if (opts.slideResize && h !== false && next.cycleH > 0)
		opts.cssBefore.height = next.cycleH;
	opts.cssAfter = opts.cssAfter || {};
	opts.cssAfter.display = 'none';
	$(curr).css('zIndex',opts.slideCount + (rev === true ? 1 : 0));
	$(next).css('zIndex',opts.slideCount + (rev === true ? 0 : 1));
};

// the actual fn for effecting a transition
$.fn.cycle.custom = function(curr, next, opts, cb, fwd, speedOverride) {
	var $l = $(curr), $n = $(next);
	var speedIn = opts.speedIn, speedOut = opts.speedOut, easeIn = opts.easeIn, easeOut = opts.easeOut, animInDelay = opts.animInDelay, animOutDelay = opts.animOutDelay;
	$n.css(opts.cssBefore);
	if (speedOverride) {
		if (typeof speedOverride == 'number')
			speedIn = speedOut = speedOverride;
		else
			speedIn = speedOut = 1;
		easeIn = easeOut = null;
	}
	var fn = function() {
		$n.delay(animInDelay).animate(opts.animIn, speedIn, easeIn, function() {
			cb();
		});
	};
	$l.delay(animOutDelay).animate(opts.animOut, speedOut, easeOut, function() {
		$l.css(opts.cssAfter);
		if (!opts.sync) 
			fn();
	});
	if (opts.sync) fn();
};

// transition definitions - only fade is defined here, transition pack defines the rest
$.fn.cycle.transitions = {
	fade: function($cont, $slides, opts) {
		$slides.not(':eq('+opts.currSlide+')').css('opacity',0);
		opts.before.push(function(curr,next,opts) {
			$.fn.cycle.commonReset(curr,next,opts);
			opts.cssBefore.opacity = 0;
		});
		opts.animIn	   = { opacity: 1 };
		opts.animOut   = { opacity: 0 };
		opts.cssBefore = { top: 0, left: 0 };
	}
};

$.fn.cycle.ver = function() { return ver; };

// override these globally if you like (they are all optional)
$.fn.cycle.defaults = {
    activePagerClass: 'activeSlide', // class name used for the active pager link
    after:            null,     // transition callback (scope set to element that was shown):  function(currSlideElement, nextSlideElement, options, forwardFlag)
    allowPagerClickBubble: false, // allows or prevents click event on pager anchors from bubbling
    animIn:           null,     // properties that define how the slide animates in
    animInDelay:      0,        // allows delay before next slide transitions in	
    animOut:          null,     // properties that define how the slide animates out
    animOutDelay:     0,        // allows delay before current slide transitions out
    aspect:           false,    // preserve aspect ratio during fit resizing, cropping if necessary (must be used with fit option)
    autostop:         0,        // true to end slideshow after X transitions (where X == slide count)
    autostopCount:    0,        // number of transitions (optionally used with autostop to define X)
    backwards:        false,    // true to start slideshow at last slide and move backwards through the stack
    before:           null,     // transition callback (scope set to element to be shown):     function(currSlideElement, nextSlideElement, options, forwardFlag)
    center:           null,     // set to true to have cycle add top/left margin to each slide (use with width and height options)
    cleartype:        !$.support.opacity,  // true if clearType corrections should be applied (for IE)
    cleartypeNoBg:    false,    // set to true to disable extra cleartype fixing (leave false to force background color setting on slides)
    containerResize:  1,        // resize container to fit largest slide
    containerResizeHeight:  0,  // resize containers height to fit the largest slide but leave the width dynamic
    continuous:       0,        // true to start next transition immediately after current one completes
    cssAfter:         null,     // properties that defined the state of the slide after transitioning out
    cssBefore:        null,     // properties that define the initial state of the slide before transitioning in
    delay:            0,        // additional delay (in ms) for first transition (hint: can be negative)
    easeIn:           null,     // easing for "in" transition
    easeOut:          null,     // easing for "out" transition
    easing:           null,     // easing method for both in and out transitions
    end:              null,     // callback invoked when the slideshow terminates (use with autostop or nowrap options): function(options)
    fastOnEvent:      0,        // force fast transitions when triggered manually (via pager or prev/next); value == time in ms
    fit:              0,        // force slides to fit container
    fx:               'fade',   // name of transition effect (or comma separated names, ex: 'fade,scrollUp,shuffle')
    fxFn:             null,     // function used to control the transition: function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag)
    height:           'auto',   // container height (if the 'fit' option is true, the slides will be set to this height as well)
    manualTrump:      true,     // causes manual transition to stop an active transition instead of being ignored
    metaAttr:         'cycle',  // data- attribute that holds the option data for the slideshow
    next:             null,     // element, jQuery object, or jQuery selector string for the element to use as event trigger for next slide
    nowrap:           0,        // true to prevent slideshow from wrapping
    onPagerEvent:     null,     // callback fn for pager events: function(zeroBasedSlideIndex, slideElement)
    onPrevNextEvent:  null,     // callback fn for prev/next events: function(isNext, zeroBasedSlideIndex, slideElement)
    pager:            null,     // element, jQuery object, or jQuery selector string for the element to use as pager container
    pagerAnchorBuilder: null,   // callback fn for building anchor links:  function(index, DOMelement)
    pagerEvent:       'click.cycle', // name of event which drives the pager navigation
    pause:            0,        // true to enable "pause on hover"
    pauseOnPagerHover: 0,       // true to pause when hovering over pager link
    prev:             null,     // element, jQuery object, or jQuery selector string for the element to use as event trigger for previous slide
    prevNextEvent:    'click.cycle',// event which drives the manual transition to the previous or next slide
    random:           0,        // true for random, false for sequence (not applicable to shuffle fx)
    randomizeEffects: 1,        // valid when multiple effects are used; true to make the effect sequence random
    requeueOnImageNotLoaded: true, // requeue the slideshow if any image slides are not yet loaded
    requeueTimeout:   250,      // ms delay for requeue
    rev:              0,        // causes animations to transition in reverse (for effects that support it such as scrollHorz/scrollVert/shuffle)
    shuffle:          null,     // coords for shuffle animation, ex: { top:15, left: 200 }
    skipInitializationCallbacks: false, // set to true to disable the first before/after callback that occurs prior to any transition
    slideExpr:        null,     // expression for selecting slides (if something other than all children is required)
    slideResize:      1,        // force slide width/height to fixed size before every transition
    speed:            1000,     // speed of the transition (any valid fx speed value)
    speedIn:          null,     // speed of the 'in' transition
    speedOut:         null,     // speed of the 'out' transition
    startingSlide:    undefined,// zero-based index of the first slide to be displayed
    sync:             1,        // true if in/out transitions should occur simultaneously
    timeout:          4000,     // milliseconds between slide transitions (0 to disable auto advance)
    timeoutFn:        null,     // callback for determining per-slide timeout value:  function(currSlideElement, nextSlideElement, options, forwardFlag)
    updateActivePagerLink: null,// callback fn invoked to update the active pager link (adds/removes activePagerClass style)
    width:            null      // container width (if the 'fit' option is true, the slides will be set to this width as well)
};

})(jQuery);


/*!
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version:	 2.73
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($) {
"use strict";

//
// These functions define slide initialization and properties for the named
// transitions. To save file size feel free to remove any of these that you
// don't need.
//
$.fn.cycle.transitions.none = function($cont, $slides, opts) {
	opts.fxFn = function(curr,next,opts,after){
		$(next).show();
		$(curr).hide();
		after();
	};
};

// not a cross-fade, fadeout only fades out the top slide
$.fn.cycle.transitions.fadeout = function($cont, $slides, opts) {
	$slides.not(':eq('+opts.currSlide+')').css({ display: 'block', 'opacity': 1 });
	opts.before.push(function(curr,next,opts,w,h,rev) {
		$(curr).css('zIndex',opts.slideCount + (rev !== true ? 1 : 0));
		$(next).css('zIndex',opts.slideCount + (rev !== true ? 0 : 1));
	});
	opts.animIn.opacity = 1;
	opts.animOut.opacity = 0;
	opts.cssBefore.opacity = 1;
	opts.cssBefore.display = 'block';
	opts.cssAfter.zIndex = 0;
};

// scrollUp/Down/Left/Right
$.fn.cycle.transitions.scrollUp = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var h = $cont.height();
	opts.cssBefore.top = h;
	opts.cssBefore.left = 0;
	opts.cssFirst.top = 0;
	opts.animIn.top = 0;
	opts.animOut.top = -h;
};
$.fn.cycle.transitions.scrollDown = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var h = $cont.height();
	opts.cssFirst.top = 0;
	opts.cssBefore.top = -h;
	opts.cssBefore.left = 0;
	opts.animIn.top = 0;
	opts.animOut.top = h;
};
$.fn.cycle.transitions.scrollLeft = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var w = $cont.width();
	opts.cssFirst.left = 0;
	opts.cssBefore.left = w;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.left = 0-w;
};
$.fn.cycle.transitions.scrollRight = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var w = $cont.width();
	opts.cssFirst.left = 0;
	opts.cssBefore.left = -w;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.left = w;
};
$.fn.cycle.transitions.scrollHorz = function($cont, $slides, opts) {
	$cont.css('overflow','hidden').width();
	opts.before.push(function(curr, next, opts, fwd) {
		if (opts.rev)
			fwd = !fwd;
		$.fn.cycle.commonReset(curr,next,opts);
		opts.cssBefore.left = fwd ? (next.cycleW-1) : (1-next.cycleW);
		opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
	});
	opts.cssFirst.left = 0;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.top = 0;
};
$.fn.cycle.transitions.scrollVert = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push(function(curr, next, opts, fwd) {
		if (opts.rev)
			fwd = !fwd;
		$.fn.cycle.commonReset(curr,next,opts);
		opts.cssBefore.top = fwd ? (1-next.cycleH) : (next.cycleH-1);
		opts.animOut.top = fwd ? curr.cycleH : -curr.cycleH;
	});
	opts.cssFirst.top = 0;
	opts.cssBefore.left = 0;
	opts.animIn.top = 0;
	opts.animOut.left = 0;
};

// slideX/slideY
$.fn.cycle.transitions.slideX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$(opts.elements).not(curr).hide();
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.animIn.width = next.cycleW;
	});
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
	opts.animIn.width = 'show';
	opts.animOut.width = 0;
};
$.fn.cycle.transitions.slideY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$(opts.elements).not(curr).hide();
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.animIn.height = next.cycleH;
	});
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.height = 0;
	opts.animIn.height = 'show';
	opts.animOut.height = 0;
};

// shuffle
$.fn.cycle.transitions.shuffle = function($cont, $slides, opts) {
	var i, w = $cont.css('overflow', 'visible').width();
	$slides.css({left: 0, top: 0});
	opts.before.push(function(curr,next,opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
	});
	// only adjust speed once!
	if (!opts.speedAdjusted) {
		opts.speed = opts.speed / 2; // shuffle has 2 transitions
		opts.speedAdjusted = true;
	}
	opts.random = 0;
	opts.shuffle = opts.shuffle || {left:-w, top:15};
	opts.els = [];
	for (i=0; i < $slides.length; i++)
		opts.els.push($slides[i]);

	for (i=0; i < opts.currSlide; i++)
		opts.els.push(opts.els.shift());

	// custom transition fn (hat tip to Benjamin Sterling for this bit of sweetness!)
	opts.fxFn = function(curr, next, opts, cb, fwd) {
		if (opts.rev)
			fwd = !fwd;
		var $el = fwd ? $(curr) : $(next);
		$(next).css(opts.cssBefore);
		var count = opts.slideCount;
		$el.animate(opts.shuffle, opts.speedIn, opts.easeIn, function() {
			var hops = $.fn.cycle.hopsFromLast(opts, fwd);
			for (var k=0; k < hops; k++) {
				if (fwd)
					opts.els.push(opts.els.shift());
				else
					opts.els.unshift(opts.els.pop());
			}
			if (fwd) {
				for (var i=0, len=opts.els.length; i < len; i++)
					$(opts.els[i]).css('z-index', len-i+count);
			}
			else {
				var z = $(curr).css('z-index');
				$el.css('z-index', parseInt(z,10)+1+count);
			}
			$el.animate({left:0, top:0}, opts.speedOut, opts.easeOut, function() {
				$(fwd ? this : curr).hide();
				if (cb) cb();
			});
		});
	};
	$.extend(opts.cssBefore, { display: 'block', opacity: 1, top: 0, left: 0 });
};

// turnUp/Down/Left/Right
$.fn.cycle.transitions.turnUp = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.cssBefore.top = next.cycleH;
		opts.animIn.height = next.cycleH;
		opts.animOut.width = next.cycleW;
	});
	opts.cssFirst.top = 0;
	opts.cssBefore.left = 0;
	opts.cssBefore.height = 0;
	opts.animIn.top = 0;
	opts.animOut.height = 0;
};
$.fn.cycle.transitions.turnDown = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssFirst.top = 0;
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.height = 0;
	opts.animOut.height = 0;
};
$.fn.cycle.transitions.turnLeft = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.cssBefore.left = next.cycleW;
		opts.animIn.width = next.cycleW;
	});
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
	opts.animIn.left = 0;
	opts.animOut.width = 0;
};
$.fn.cycle.transitions.turnRight = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.animIn.width = next.cycleW;
		opts.animOut.left = curr.cycleW;
	});
	$.extend(opts.cssBefore, { top: 0, left: 0, width: 0 });
	opts.animIn.left = 0;
	opts.animOut.width = 0;
};

// zoom
$.fn.cycle.transitions.zoom = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,false,true);
		opts.cssBefore.top = next.cycleH/2;
		opts.cssBefore.left = next.cycleW/2;
		$.extend(opts.animIn, { top: 0, left: 0, width: next.cycleW, height: next.cycleH });
		$.extend(opts.animOut, { width: 0, height: 0, top: curr.cycleH/2, left: curr.cycleW/2 });
	});
	opts.cssFirst.top = 0;
	opts.cssFirst.left = 0;
	opts.cssBefore.width = 0;
	opts.cssBefore.height = 0;
};

// fadeZoom
$.fn.cycle.transitions.fadeZoom = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,false);
		opts.cssBefore.left = next.cycleW/2;
		opts.cssBefore.top = next.cycleH/2;
		$.extend(opts.animIn, { top: 0, left: 0, width: next.cycleW, height: next.cycleH });
	});
	opts.cssBefore.width = 0;
	opts.cssBefore.height = 0;
	opts.animOut.opacity = 0;
};

// blindX
$.fn.cycle.transitions.blindX = function($cont, $slides, opts) {
	var w = $cont.css('overflow','hidden').width();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.width = next.cycleW;
		opts.animOut.left   = curr.cycleW;
	});
	opts.cssBefore.left = w;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.left = w;
};
// blindY
$.fn.cycle.transitions.blindY = function($cont, $slides, opts) {
	var h = $cont.css('overflow','hidden').height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssBefore.top = h;
	opts.cssBefore.left = 0;
	opts.animIn.top = 0;
	opts.animOut.top = h;
};
// blindZ
$.fn.cycle.transitions.blindZ = function($cont, $slides, opts) {
	var h = $cont.css('overflow','hidden').height();
	var w = $cont.width();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssBefore.top = h;
	opts.cssBefore.left = w;
	opts.animIn.top = 0;
	opts.animIn.left = 0;
	opts.animOut.top = h;
	opts.animOut.left = w;
};

// growX - grow horizontally from centered 0 width
$.fn.cycle.transitions.growX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.cssBefore.left = this.cycleW/2;
		opts.animIn.left = 0;
		opts.animIn.width = this.cycleW;
		opts.animOut.left = 0;
	});
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
};
// growY - grow vertically from centered 0 height
$.fn.cycle.transitions.growY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.cssBefore.top = this.cycleH/2;
		opts.animIn.top = 0;
		opts.animIn.height = this.cycleH;
		opts.animOut.top = 0;
	});
	opts.cssBefore.height = 0;
	opts.cssBefore.left = 0;
};

// curtainX - squeeze in both edges horizontally
$.fn.cycle.transitions.curtainX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true,true);
		opts.cssBefore.left = next.cycleW/2;
		opts.animIn.left = 0;
		opts.animIn.width = this.cycleW;
		opts.animOut.left = curr.cycleW/2;
		opts.animOut.width = 0;
	});
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
};
// curtainY - squeeze in both edges vertically
$.fn.cycle.transitions.curtainY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false,true);
		opts.cssBefore.top = next.cycleH/2;
		opts.animIn.top = 0;
		opts.animIn.height = next.cycleH;
		opts.animOut.top = curr.cycleH/2;
		opts.animOut.height = 0;
	});
	opts.cssBefore.height = 0;
	opts.cssBefore.left = 0;
};

// cover - curr slide covered by next slide
$.fn.cycle.transitions.cover = function($cont, $slides, opts) {
	var d = opts.direction || 'left';
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.cssAfter.display = '';
		if (d == 'right')
			opts.cssBefore.left = -w;
		else if (d == 'up')
			opts.cssBefore.top = h;
		else if (d == 'down')
			opts.cssBefore.top = -h;
		else
			opts.cssBefore.left = w;
	});
	opts.animIn.left = 0;
	opts.animIn.top = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.left = 0;
};

// uncover - curr slide moves off next slide
$.fn.cycle.transitions.uncover = function($cont, $slides, opts) {
	var d = opts.direction || 'left';
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
		if (d == 'right')
			opts.animOut.left = w;
		else if (d == 'up')
			opts.animOut.top = -h;
		else if (d == 'down')
			opts.animOut.top = h;
		else
			opts.animOut.left = -w;
	});
	opts.animIn.left = 0;
	opts.animIn.top = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.left = 0;
};

// toss - move top slide and fade away
$.fn.cycle.transitions.toss = function($cont, $slides, opts) {
	var w = $cont.css('overflow','visible').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
		// provide default toss settings if animOut not provided
		if (!opts.animOut.left && !opts.animOut.top)
			$.extend(opts.animOut, { left: w*2, top: -h/2, opacity: 0 });
		else
			opts.animOut.opacity = 0;
	});
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
};

// wipe - clip animation
$.fn.cycle.transitions.wipe = function($cont, $slides, opts) {
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.cssBefore = opts.cssBefore || {};
	var clip;
	if (opts.clip) {
		if (/l2r/.test(opts.clip))
			clip = 'rect(0px 0px '+h+'px 0px)';
		else if (/r2l/.test(opts.clip))
			clip = 'rect(0px '+w+'px '+h+'px '+w+'px)';
		else if (/t2b/.test(opts.clip))
			clip = 'rect(0px '+w+'px 0px 0px)';
		else if (/b2t/.test(opts.clip))
			clip = 'rect('+h+'px '+w+'px '+h+'px 0px)';
		else if (/zoom/.test(opts.clip)) {
			var top = parseInt(h/2,10);
			var left = parseInt(w/2,10);
			clip = 'rect('+top+'px '+left+'px '+top+'px '+left+'px)';
		}
	}

	opts.cssBefore.clip = opts.cssBefore.clip || clip || 'rect(0px 0px 0px 0px)';

	var d = opts.cssBefore.clip.match(/(\d+)/g);
	var t = parseInt(d[0],10), r = parseInt(d[1],10), b = parseInt(d[2],10), l = parseInt(d[3],10);

	opts.before.push(function(curr, next, opts) {
		if (curr == next) return;
		var $curr = $(curr), $next = $(next);
		$.fn.cycle.commonReset(curr,next,opts,true,true,false);
		opts.cssAfter.display = 'block';

		var step = 1, count = parseInt((opts.speedIn / 13),10) - 1;
		(function f() {
			var tt = t ? t - parseInt(step * (t/count),10) : 0;
			var ll = l ? l - parseInt(step * (l/count),10) : 0;
			var bb = b < h ? b + parseInt(step * ((h-b)/count || 1),10) : h;
			var rr = r < w ? r + parseInt(step * ((w-r)/count || 1),10) : w;
			$next.css({ clip: 'rect('+tt+'px '+rr+'px '+bb+'px '+ll+'px)' });
			(step++ <= count) ? setTimeout(f, 13) : $curr.css('display', 'none');
		})();
	});
	$.extend(opts.cssBefore, { display: 'block', opacity: 1, top: 0, left: 0 });
	opts.animIn	   = { left: 0 };
	opts.animOut   = { left: 0 };
};

})(jQuery);

/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false Mustache: true*/

(function defineMustache (global, factory) {
  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
    factory(exports); // CommonJS
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], factory); // AMD
  } else {
    global.Mustache = {};
    factory(global.Mustache); // script, wsh, asp
  }
}(this, function mustacheFactory (mustache) {

  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill (object) {
    return objectToString.call(object) === '[object Array]';
  };

  function isFunction (object) {
    return typeof object === 'function';
  }

  /**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */
  function typeStr (obj) {
    return isArray(obj) ? 'array' : typeof obj;
  }

  function escapeRegExp (string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  }

  /**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */
  function hasProperty (obj, propName) {
    return obj != null && typeof obj === 'object' && (propName in obj);
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var regExpTest = RegExp.prototype.test;
  function testRegExp (re, string) {
    return regExpTest.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace (string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

  function escapeHtml (string) {
    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
  function parseTemplate (template, tags) {
    if (!template)
      return [];

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace () {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags (tagsToCompile) {
      if (typeof tagsToCompile === 'string')
        tagsToCompile = tagsToCompile.split(spaceRe, 2);

      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error('Invalid tags: ' + tagsToCompile);

      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n')
            stripSpace();
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      token = [ type, value, start, scanner.pos ];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens (tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens (tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
        case '#':
        case '^':
          collector.push(token);
          sections.push(token);
          collector = token[4] = [];
          break;
        case '/':
          section = sections.pop();
          section[5] = token[2];
          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
          break;
        default:
          collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner (string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function eos () {
    return this.tail === '';
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function scan (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function scanUntil (re) {
    var index = this.tail.search(re), match;

    switch (index) {
      case -1:
        match = this.tail;
        this.tail = '';
        break;
      case 0:
        match = '';
        break;
      default:
        match = this.tail.substring(0, index);
        this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context (view, parentContext) {
    this.view = view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function push (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function lookup (name) {
    var cache = this.cache;

    var value;
    if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this, names, index, lookupHit = false;

      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;
          names = name.split('.');
          index = 0;

          /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           **/
          while (value != null && index < names.length) {
            if (index === names.length - 1)
              lookupHit = hasProperty(value, names[index]);

            value = value[names[index++]];
          }
        } else {
          value = context.view[name];
          lookupHit = hasProperty(context.view, name);
        }

        if (lookupHit)
          break;

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer () {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function clearCache () {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function parse (template, tags) {
    var cache = this.cache;
    var tokens = cache[template];

    if (tokens == null)
      tokens = cache[template] = parseTemplate(template, tags);

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function render (template, view, partials) {
    var tokens = this.parse(template);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
    var buffer = '';

    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;
      token = tokens[i];
      symbol = token[0];

      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
      else if (symbol === '&') value = this.unescapedValue(token, context);
      else if (symbol === 'name') value = this.escapedValue(token, context);
      else if (symbol === 'text') value = this.rawValue(token);

      if (value !== undefined)
        buffer += value;
    }

    return buffer;
  };

  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
    var self = this;
    var buffer = '';
    var value = context.lookup(token[1]);

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    function subRender (template) {
      return self.render(template, context, partials);
    }

    if (!value) return;

    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
      }
    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== 'string')
        throw new Error('Cannot use higher-order sections without the original template');

      // Extract the portion of the original template that the section contains.
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
    }
    return buffer;
  };

  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
    var value = context.lookup(token[1]);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0))
      return this.renderTokens(token[4], context, partials, originalTemplate);
  };

  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
    if (!partials) return;

    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null)
      return this.renderTokens(this.parse(value), context, partials, value);
  };

  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };

  Writer.prototype.escapedValue = function escapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return mustache.escape(value);
  };

  Writer.prototype.rawValue = function rawValue (token) {
    return token[1];
  };

  mustache.name = 'mustache.js';
  mustache.version = '2.3.0';
  mustache.tags = [ '{{', '}}' ];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function clearCache () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function parse (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function render (template, view, partials) {
    if (typeof template !== 'string') {
      throw new TypeError('Invalid template! Template should be a "string" ' +
                          'but "' + typeStr(template) + '" was given as the first ' +
                          'argument for mustache#render(template, view, partials)');
    }

    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.,
  /*eslint-disable */ // eslint wants camel cased function name
  mustache.to_html = function to_html (template, view, partials, send) {
    /*eslint-enable*/

    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

  return mustache;
}));
