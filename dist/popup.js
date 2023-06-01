(()=>{"use strict";var e,t={281:function(e,t,l){var r=this&&this.__createBinding||(Object.create?function(e,t,l,r){void 0===r&&(r=l);var o=Object.getOwnPropertyDescriptor(t,l);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[l]}}),Object.defineProperty(e,r,o)}:function(e,t,l,r){void 0===r&&(r=l),e[r]=t[l]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)"default"!==l&&Object.prototype.hasOwnProperty.call(e,l)&&r(t,e,l);return o(t,e),t},a=this&&this.__awaiter||function(e,t,l,r){return new(l||(l=Promise))((function(o,n){function a(e){try{s(r.next(e))}catch(e){n(e)}}function i(e){try{s(r.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof l?t:new l((function(e){e(t)}))).then(a,i)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const i=n(l(294));l(170);const s=l(593);t.default=function(){const[e,t]=(0,i.useState)(""),[l,r]=(0,i.useState)(""),[o,n]=(0,i.useState)(!0),[c,u]=(0,i.useState)(!1),[d,f]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{(()=>{a(this,void 0,void 0,(function*(){const e=yield(0,s.getURL)(),l=yield(0,s.fetchBlueListData)();if(e)if("chrome://extensions/"===e||e.includes("chrome-extension://")||e===l.blueList.redirectURL)f(!0);else{f(!1),t(e);const l=new URL(e);r(`${l.protocol}//${l.hostname}`)}}))})()}),[]),i.default.createElement("div",null,d?i.default.createElement("div",{className:"flex flex-col bg-offWhite h-[180px] w-[400px] font-opensans"},i.default.createElement("div",{className:"p-6 w-full"},i.default.createElement("h1",{className:"text-lg font-bold text-listBlue"},"/BLUE_LIST/"),i.default.createElement("div",{className:"flex justify-center items-center h-full w-full"},i.default.createElement("h1",{className:"text-md border-2 border-slate-300 rounded-sm p-2"},"Vist sites that you want to put out on the timeout list and ",i.default.createElement("span",{className:"font-bold text-listBlue"},"click the extension icon!")," You can manage your current blue list configs by ",i.default.createElement("span",{className:"font-bold text-listBlue"},"right-clicking the extension icon and selection 'options'"))))):i.default.createElement("div",{className:"flex flex-col bg-offWhite w-[400px] font-opensans"},i.default.createElement("div",{className:"p-6 w-full"},i.default.createElement("h1",{className:"text-lg font-bold text-listBlue"},"/BLUE_LIST/"),i.default.createElement("div",{className:"py-1"},i.default.createElement("h1",{className:"text-md text-black font-bold text-md"},"Add whole url or its domain to your timeout list?")),i.default.createElement("div",{className:"flex gap-1 w-full p-2 items-center border-2 border-b-0 border-slate-300 bg-white rounded-t-sm"},i.default.createElement("input",{className:"overflow-y-scroll w-full text-md p-2",type:"text",readOnly:!0,value:`url: ${e}`}),i.default.createElement("input",{className:"border-2 border-black",type:"radio",name:"url-options",checked:o,onChange:()=>{console.log("clacked"),n((e=>!e))}})),i.default.createElement("div",{className:"flex gap-1 w-full p-2 items-center border-2 border-slate-300 bg-white rounded-b-sm"},i.default.createElement("input",{className:"overflow-y-scroll w-full text-md p-2",type:"text",readOnly:!0,value:`domain: ${l}`}),i.default.createElement("input",{className:"border-2 border-black",type:"radio",name:"url-options",onChange:()=>{console.log("clicked"),n((e=>!e))}})),c?i.default.createElement("div",{className:"h-10 w-10 border-2 border-slate-300 text-[1rem] my-1 p-1 rounded-sm"},i.default.createElement("img",{src:"tick.png",alt:"confirmed"})):i.default.createElement("button",{className:"bg-listBlue text-white my-2 py-1 px-2 text-lg \n                                    rounded-sm hover:brightness-[1.5]",onClick:()=>a(this,void 0,void 0,(function*(){console.log(`full url: ${o}`);const t=o?e:l;chrome.storage.sync.get("blueList",(e=>{e.blueList.urls?chrome.storage.sync.set({blueList:{timeFrom:e.blueList.timeFrom,timeTo:e.blueList.timeTo,weekdays:e.blueList.weekdays,urls:[...e.blueList.urls,t.trim()],redirectURL:e.blueList.redirectURL}}):chrome.storage.sync.set({blueList:{timeFrom:"09:00",timeTo:"17:00",weekdays:e.blueList.weekdays,urls:[t],redirectURL:e.blueList.redirectURL}})})),u(!0);const r=yield chrome.storage.sync.get("blueList");console.log(r),chrome.tabs.reload()}))},"Set"))))}},155:function(e,t,l){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(l(294)),n=r(l(745)),a=r(l(281)),i=document.createElement("div");document.body.appendChild(i),n.default.createRoot(i).render(o.default.createElement(a.default,null))}},l={};function r(e){var o=l[e];if(void 0!==o)return o.exports;var n=l[e]={id:e,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.exports}r.m=t,e=[],r.O=(t,l,o,n)=>{if(!l){var a=1/0;for(u=0;u<e.length;u++){for(var[l,o,n]=e[u],i=!0,s=0;s<l.length;s++)(!1&n||a>=n)&&Object.keys(r.O).every((e=>r.O[e](l[s])))?l.splice(s--,1):(i=!1,n<a&&(a=n));if(i){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[l,o,n]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var l in t)r.o(t,l)&&!r.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var l=t.getElementsByTagName("script");l.length&&(e=l[l.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{r.b=document.baseURI||self.location.href;var e={42:0};r.O.j=t=>0===e[t];var t=(t,l)=>{var o,n,[a,i,s]=l,c=0;if(a.some((t=>0!==e[t]))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(s)var u=s(r)}for(t&&t(l);c<a.length;c++)n=a[c],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(u)},l=self.webpackChunkblue_list=self.webpackChunkblue_list||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})(),r.nc=void 0;var o=r.O(void 0,[246,29],(()=>r(155)));o=r.O(o)})();