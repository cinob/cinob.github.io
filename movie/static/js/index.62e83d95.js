(function(e){function n(n){for(var a,i,c=n[0],u=n[1],s=n[2],l=0,d=[];l<c.length;l++)i=c[l],o[i]&&d.push(o[i][0]),o[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);p&&p(n);while(d.length)d.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,i=1;i<t.length;i++){var u=t[i];0!==o[u]&&(a=!1)}a&&(r.splice(n--,1),e=c(c.s=t[0]))}return e}var a={},o={index:0},r=[];function i(e){return c.p+"static/js/"+({"pages-cover-cover":"pages-cover-cover","pages-index-index":"pages-index-index","pages-me-me":"pages-me-me","pages-movie-movie":"pages-movie-movie","pages-search-search":"pages-search-search"}[e]||e)+"."+{"pages-cover-cover":"38c2adc7","pages-index-index":"3ecaedf7","pages-me-me":"2956771c","pages-movie-movie":"657c8a25","pages-search-search":"ea32f607"}[e]+".js"}function c(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise(function(n,a){t=o[e]=[n,a]});n.push(t[2]=a);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e),r=function(n){u.onerror=u.onload=null,clearTimeout(s);var t=o[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,t[1](i)}o[e]=void 0}};var s=setTimeout(function(){r({type:"timeout",target:u})},12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(n)},c.m=e,c.c=a,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)c.d(t,a,function(n){return e[n]}.bind(null,a));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/movie/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var p=s;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("5321")},"0b27":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},o=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return o})},"0f35":function(e,n,t){"use strict";t.r(n);var a=t("e830"),o=t.n(a);for(var r in a)"default"!==r&&function(e){t.d(n,e,function(){return a[e]})}(r);n["default"]=o.a},"2e57":function(e,n,t){"use strict";(function(e){var n=t("288e"),a=n(t("5176")),o=n(t("e143"));e["____01AFD11____"]=!0,delete e["____01AFD11____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"CINOB超英预告",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"},tabBar:{color:"#bfbfbf",selectedColor:"#515151",borderStyle:"black",backgroundColor:"#fff",list:[{pagePath:"pages/index/index",text:"首页",iconPath:"static/tabBarIco/index.png",selectedIconPath:"static/tabBarIco/index_sel.png",redDot:!1,badge:""},{pagePath:"pages/search/search",text:"搜索",iconPath:"static/tabBarIco/search.png",selectedIconPath:"static/tabBarIco/search_sel.png",redDot:!1,badge:""},{pagePath:"pages/me/me",text:"我的",iconPath:"static/tabBarIco/me.png",selectedIconPath:"static/tabBarIco/me_sel.png",redDot:!1,badge:""}]}},e.__uniConfig.router={mode:"hash",base:"/movie/"},e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:3e3},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e3,connectSocket:6e3,uploadFile:6e3,downloadFile:6e3},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},o.default.component("pages-index-index",function(e){var n={component:t.e("pages-index-index").then(function(){return e(t("981c"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-search-search",function(e){var n={component:t.e("pages-search-search").then(function(){return e(t("0d55"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-me-me",function(e){var n={component:t.e("pages-me-me").then(function(){return e(t("9d70"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-movie-movie",function(e){var n={component:t.e("pages-movie-movie").then(function(){return e(t("2c81"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-cover-cover",function(e){var n={component:t.e("pages-cover-cover").then(function(){return e(t("e297"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:(0,a.default)({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{enablePullDownRefresh:!0,titleNView:!1})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:0}},{path:"/pages/search/search",component:{render:function(e){return e("Page",{props:(0,a.default)({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"搜索预告片"})},[e("pages-search-search",{slot:"page"})])}},meta:{id:2,name:"pages-search-search",isNVue:!1,pagePath:"pages/search/search",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:0}},{path:"/pages/me/me",component:{render:function(e){return e("Page",{props:(0,a.default)({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{})},[e("pages-me-me",{slot:"page"})])}},meta:{id:3,name:"pages-me-me",isNVue:!1,pagePath:"pages/me/me",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:0}},{path:"/pages/movie/movie",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{titleNView:{type:"transparent"}})},[e("pages-movie-movie",{slot:"page"})])}},meta:{name:"pages-movie-movie",isNVue:!1,pagePath:"pages/movie/movie",windowTop:0}},{path:"/pages/cover/cover",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{})},[e("pages-cover-cover",{slot:"page"})])}},meta:{name:"pages-cover-cover",isNVue:!1,pagePath:"pages/cover/cover",windowTop:0}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}]}).call(this,t("c8ba"))},"3c62":function(e,n,t){"use strict";var a=t("a7b1"),o=t.n(a);o.a},5321:function(e,n,t){"use strict";var a=t("288e"),o=a(t("cebc"));t("cadf"),t("551c"),t("097d"),t("2e57"),t("06b9"),t("921b");var r=a(t("e143")),i=a(t("f486"));r.default.config.productionTip=!1,r.default.prototype.serverUrl="https://www.imovietrailer.com/superhero",i.default.mpType="app";var c=new r.default((0,o.default)({},i.default));c.$mount()},a128:function(e,n,t){n=e.exports=t("2350")(!1),n.push([e.i,"/*每个页面公共css */.page{width:100%;height:100%;background-color:#f7f7f7}.page-block{background-color:#fff}",""])},a7b1:function(e,n,t){var a=t("a128");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=t("4f06").default;o("140d7f0b",a,!0,{sourceMap:!1,shadowMode:!1})},e830:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={};n.default=a},ea86:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={pages:{"pages/index/index":{enablePullDownRefresh:!0,titleNView:!1},"pages/search/search":{navigationBarTitleText:"搜索预告片"},"pages/me/me":{},"pages/movie/movie":{titleNView:{type:"transparent"}},"pages/cover/cover":{}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"CINOB超英预告",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}};n.default=a},f088:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={appid:"__UNI__01AFD11"};n.default=a},f486:function(e,n,t){"use strict";t.r(n);var a=t("0b27"),o=t("0f35");for(var r in o)"default"!==r&&function(e){t.d(n,e,function(){return o[e]})}(r);t("3c62");var i=t("2877"),c=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);n["default"]=c.exports}});