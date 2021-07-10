(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>m});var i=t(645),r=t.n(i),a=t(667),o=t.n(a),s=t(852),c=t(576),u=r()((function(e){return e[1]})),l=o()(s),d=o()(c);u.push([e.id,"*, *::before, *::after {\n    box-sizing: border-box;\n}\n\n@font-face {\n    font-family: 'Fuggles';\n    src: url("+l+") format('woff2');\n}\n\n@font-face {\n    font-family: 'Poiret';\n    src: url("+d+") format('woff2');\n}\n\nhtml {\n    min-height: 100%;\n    background-color: rgb(37, 37, 37);\n    /* background-image: url(\"./background.jpg\"); */\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: cover;\n    background-attachment: fixed;\n}\n\nbody {    \n    margin: 0 !important;\n    padding: 0 !important;\n}\n\n.content {\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n}\n\n.title-header {\n    width: 100%;\n    margin: 0;\n    background-color: black;\n    color: white;\n    font-family: Fuggles;\n    font-size: 180px;\n    text-align: center;\n    min-height: 80px;\n    font-weight: 400;\n\n    cursor:default;\n}\n\n.nav-bar {\n    background-color: rgb(53, 53, 53);\n    width: 100%;\n}\n\n.nav-list {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-evenly;\n    height: 2vh;\n\n    align-items: center;\n}\n\n.nav-list > li {\n    list-style-type: none; /* Remove bullets */\n    padding: 1vh; /* Remove padding */\n    margin: 0; /* Remove margins */\n\n    color: white;\n    font-size: 25px;\n\n    font-family: Poiret;\n\n    font-weight: 400;\n\n    border: 1px solid rgba(255, 255, 255, 0);\n  }\n\n.nav-list > li:hover {\n    transition: 0.8s;\n    border: 1px solid rgb(122, 122, 122);\n    cursor: pointer;\n\n    background-color: rgb(22, 22, 22);\n}\n\n.outerDiv {\n    display: flex;\n    flex-flow: row nowrap;\n    text-align: justify;\n    background-color: rgb(53, 53, 53);\n    width: 60%;\n\n    font-size: 30px;\n    margin: 5%;\n\n    border-radius: 8px;\n}\n\n.outerDiv > p {\n    margin: 5% 10%;\n    color: white;\n    font-family: Poiret;\n}\n\n.menu-underline {\n    text-decoration: underline;\n    text-underline-offset: 8px;\n}\n\n.menu-page-div {\n    flex-flow: column wrap;\n    justify-content: center;\n    align-items: center;\n\n    padding-top: 2%;\n    padding-bottom: 5%;\n}\n\n.menu-type-heading {\n    padding: 0;\n    margin: 0;\n\n    font-family: Poiret;\n    font-size: 50px;\n\n    text-decoration: underline;\n    color: rgb(195, 195, 195);\n}\n\n.holder-div-menu {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-evenly;\n    margin-top: 2%;\n}\n\n.menu-item-card {\n    border: 2px solid rgb(110, 110, 110);\n    border-radius: 15px;\n    flex: 0 0 40%;\n    color: rgb(211, 211, 211);\n    font-family: Poiret;\n\n    margin: 20px;\n}\n\n.menu-item-card > div:first-child {\n    text-align: center;\n    font-size: 45px;\n    border-bottom: 0.5px solid rgb(116, 116, 116);\n}\n\n.menu-item-card > div:nth-child(2) {\n    text-align: center;\n    margin: 1%;\n    font-size: 25px;\n}\n\n.menu-item-card > div:nth-child(3) {\n    text-align: right;\n    font-size: 25px;\n}\n\n@media (max-width: 992px) {\n    .outerDiv {\n        margin: 5% 3%;\n        width: 95%;\n        text-align: center;\n    }\n\n    .outerDiv > p {\n        margin: 3% 5%;\n    }\n}\n\n@media (max-width: 700px) {\n    .title-header {\n        font-size: 140px;\n    }\n}",""]);const m=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);i&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},695:e=>{var n={};e.exports=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var a={},o=[],s=0;s<e.length;s++){var c=e[s],u=i.base?c[0]+i.base:c[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var m=t(d),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==m?(n[m].references++,n[m].updater(p)):n.push({identifier:d,updater:r(p,i),references:1}),o.push(d)}return o}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=i(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var s=t(a[o]);n[s].references--}for(var c=i(e,r),u=0;u<a.length;u++){var l=t(a[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i=t.css,r=t.media,a=t.sourceMap;r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(i,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},852:(e,n,t)=>{e.exports=t.p+"3d1f5bbae867ae95a943.ttf"},576:(e,n,t)=>{e.exports=t.p+"a453ae9bf019e86c566c.ttf"}},n={};function t(i){var r=n[i];if(void 0!==r)return r.exports;var a=n[i]={id:i,exports:{}};return e[i](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),i=t(795),r=t.n(i),a=t(695),o=t.n(a),s=t(216),c=t.n(s),u=t(426),l={styleTagTransform:function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}},setAttributes:function(e){var n=t.nc;n&&e.setAttribute("nonce",n)},insert:function(e){var n=o()("head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}};l.domAPI=r(),l.insertStyleElement=c(),n()(u.Z,l),u.Z&&u.Z.locals&&u.Z.locals;const d=e=>{const n=document.createElement("div");n.classList.add("outerDiv");const t=document.createElement("p");t.textContent="Home Page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis turpis turpis. Maecenas ac condimentum ipsum. Curabitur egestas, ex et dignissim mollis, libero metus interdum risus, quis consequat nunc sapien sodales sem. Praesent maximus, lorem ut ultrices euismod, lorem nisi gravida orci, aliquet posuere justo tellus vel dui. Nulla sodales, lacus quis porta maximus, odio diam sodales odio, id auctor lacus odio at dolor. Donec nec pretium libero. Etiam molestie tempor turpis nec laoreet. Fusce viverra commodo tortor eu ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur at condimentum urna. Nulla efficitur ligula sed quam vehicula, sed vulputate nisl viverra. Aenean in mauris et massa elementum pulvinar quis et nisl. Praesent maximus a elit at cursus. Vivamus nec convallis dolor, id tincidunt massa. Quisque commodo sapien purus, ac accumsan enim viverra sed. Duis imperdiet lectus in augue eleifend pulvinar. In quis rutrum ex. Etiam faucibus finibus urna, sit amet hendrerit ipsum sodales at. In non arcu id arcu blandit semper. In euismod ac nisi quis commodo. Nam lobortis arcu eget egestas consectetur. Donec placerat nisi sapien, non scelerisque risus consectetur sit amet. Sed posuere mi quis ante ornare tincidunt. Nunc interdum tellus eget odio tincidunt molestie. Aliquam vel leo aliquet, dignissim est at, tincidunt enim. Quisque porta nisi diam, a rhoncus nisl commodo sit amet. Curabitur efficitur leo a dictum vestibulum. Ut sollicitudin leo in varius sollicitudin. Vivamus volutpat nulla eu nisi accumsan pharetra. Phasellus et tempor tellus. Donec dictum ornare ligula, non vehicula urna convallis vitae. Mauris tristique sed nulla eget aliquam. Aenean hendrerit, nulla sit amet tempus semper, tortor velit mollis leo, at vestibulum quam est quis velit. Aenean ac tincidunt nisi. In vehicula, est sit amet gravida tempor, nibh eros semper nisi, id interdum nisl metus ut urna. Fusce in.",n.appendChild(t),e.appendChild(n)},m=[{name:"The Classic",description:"Classic Chicken, Special Mayo",price:130},{name:"BBQ Big",description:"Loaded Chicken, BBQ & Special Sauce",price:155},{name:"Beef Burger",description:"Beef Patty, Cheese, Special Sauce",price:130},{name:"Rooster Burger",description:"Loaded Chicken, Cheese, Special Sauce",price:155}],p=document.querySelector(".content");(e=>{const n=document.createElement("header");n.classList.add("title-header"),n.textContent="Fire Fries",e.appendChild(n);const t=document.createElement("nav");t.classList.add("nav-bar");const i=document.createElement("ul");i.classList.add("nav-list");const r=["Home","Menu","Contact"];for(let e of r){let n=document.createElement("li");n.textContent=e,n.classList.add(`menu-${e.toLowerCase()}`),i.appendChild(n)}t.appendChild(i),e.appendChild(t),e.appendChild(document.createElement("div"))})(p),d(p);const f=document.querySelector(".nav-list"),h=(f.addEventListener("click",(e=>{"li"===e.target.tagName.toLowerCase()&&g(e.target.textContent.toLowerCase())})),e=>{let n=f.childNodes;for(let e of n)e.classList.remove("menu-underline");e.classList.add("menu-underline")}),g=e=>{p.removeChild(p.lastChild),"home"===e?(d(p),h(document.querySelector(".menu-home"))):"menu"===e?((e=>{const n=document.createElement("div");n.classList.add("outerDiv","menu-page-div"),document.createElement("section");const t=document.createElement("h2");t.textContent="Burgers",t.classList.add("menu-type-heading"),n.appendChild(t),n.appendChild((()=>{const e=document.createElement("div");e.classList.add("holder-div-menu");for(let n of m){let t=document.createElement("div");t.classList.add("menu-item-card");let i=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div");i.textContent=n.name,r.textContent=n.description,a.textContent=`${n.price}TK`,t.appendChild(i),t.appendChild(r),t.appendChild(a),e.appendChild(t)}return e})()),e.appendChild(n)})(p),h(document.querySelector(".menu-menu"))):"contact"===e?((e=>{const n=document.createElement("div");n.classList.add("outerDiv");const t=document.createElement("p");t.textContent="Contact Page.",n.appendChild(t),e.appendChild(n)})(p),h(document.querySelector(".menu-contact"))):console.log("Error: Wrong item selected?")}})()})();