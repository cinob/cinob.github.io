(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-registLogin-registLogin"],{1833:function(t,e,i){"use strict";i.r(e);var a=i("ecd6"),n=i("b649");for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);i("734d");var o=i("2877"),d=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"7ac0c528",null);e["default"]=d.exports},"1a48":function(t,e,i){"use strict";var a=i("6de5"),n=i.n(a);n.a},"38f2":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("1833")),r={components:{breakLine:n.default},data:function(){return{}},methods:{appOAuthLogin:function(t){var e=this,i=t.currentTarget.dataset.logintype;uni.login({provider:i,success:function(t){uni.getUserInfo({provider:i,success:function(t){uni.request({url:e.serverUrl+"/appUnionLogin/"+i+"?"+e.key,method:"POST",data:{face:"https://www.imovietrailer.com/users/faces/190419ATT5YP018H/face-190419ATT5YP018H.png?t=20191210092415",nickname:"洗刷刷",openIdOrUid:"123123123"},success:function(t){uni.setStorageSync("userInfo",t.data.data),uni.switchTab({url:"../me/me"})}})}})}})},wxLogin:function(t){var e=this;uni.login({provider:"weixin",success:function(t){uni.request({url:e.serverUrl+"/stu/mpWXLogin/"+t.code+"?"+e.key,method:"POST",data:{avatarUrl:"https://www.imovietrailer.com/users/faces/190419ATT5YP018H/face-190419ATT5YP018H.png?t=20191210092415",nickName:"洗刷刷",whichMP:1},success:function(t){200===t.data.status&&(uni.setStorageSync("userInfo",t.data.data),uni.switchTab({url:"../me/me"}))}})}})},formSubmit:function(t){t&&uni.request({url:this.serverUrl+"/user/registOrLogin?"+this.key,method:"POST",data:t.detail.value,success:function(t){200===t.data.status?(uni.setStorageSync("userInfo",t.data.data),uni.switchTab({url:"../me/me"})):500===t.data.status&&uni.showToast({title:t.data.msg,duration:2e3,image:"../../static/icos/error.png"})}})}}};e.default=r},"575a":function(t,e,i){"use strict";i.r(e);var a=i("d636"),n=i("b3dd");for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);i("1a48");var o=i("2877"),d=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"d83ef72a",null);e["default"]=d.exports},"59e4":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"breakLine"};e.default=a},"5c24":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".line-wapper[data-v-7ac0c528]{padding:0}.line-wapper .line[data-v-7ac0c528]{height:1px;background-color:#dbdbda}",""])},"6de5":function(t,e,i){var a=i("ea53");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("5920057a",a,!0,{sourceMap:!1,shadowMode:!1})},"734d":function(t,e,i){"use strict";var a=i("8c76"),n=i.n(a);n.a},"8c76":function(t,e,i){var a=i("5c24");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("87146288",a,!0,{sourceMap:!1,shadowMode:!1})},b3dd:function(t,e,i){"use strict";i.r(e);var a=i("38f2"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);e["default"]=n.a},b649:function(t,e,i){"use strict";i.r(e);var a=i("59e4"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);e["default"]=n.a},d636:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"body"},[i("v-uni-form",{on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"face-wapper"},[i("v-uni-image",{staticClass:"face",attrs:{src:"../../static/icos/default-face.png"}})],1),i("v-uni-view",{staticClass:"info-wapper"},[i("v-uni-label",{staticClass:"words-lab"},[t._v("账号")]),i("v-uni-input",{staticClass:"input",attrs:{type:"text",value:"",name:"username",placeholder:"请输入用户名","placeholder-class":"graywords"}})],1),i("v-uni-view",{staticClass:"info-wapper info-margin"},[i("v-uni-label",{staticClass:"words-lab"},[t._v("密码")]),i("v-uni-input",{staticClass:"input",attrs:{type:"text",password:"true",value:"",name:"password",placeholder:"请输入用户名","placeholder-class":"graywords"}})],1),i("v-uni-button",{staticClass:"login-btn",attrs:{type:"primary","form-type":"submit"}},[t._v("注册/登陆")])],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},ea53:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".body .face-wapper[data-v-d83ef72a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin:%?120?% %?0?%}.body .face-wapper .face[data-v-d83ef72a]{width:%?160?%;height:%?160?%}.body .login-btn[data-v-d83ef72a]{margin-top:%?60?%;width:90%}.body .info-margin[data-v-d83ef72a]{margin-top:%?40?%}.body .info-wapper[data-v-d83ef72a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-bottom:solid 1px #dbdbda;padding-bottom:%?20?%;margin:%?30?%}.body .info-wapper .words-lab[data-v-d83ef72a]{color:grey}.body .info-wapper .input[data-v-d83ef72a]{width:%?500?%;margin-left:%?40?%}.body .info-wapper .graywords[data-v-d83ef72a]{color:#eaeaea}.body .third-wapper[data-v-d83ef72a]{width:100%;margin-top:%?60?%}.body .third-wapper .third-line[data-v-d83ef72a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.body .third-wapper .third-line .third-words[data-v-d83ef72a]{color:#a9a9a9;font-size:13px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.body .third-wapper .third-icos-wapper[data-v-d83ef72a]{margin-top:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.body .third-wapper .third-icos-wapper .third-ico[data-v-d83ef72a]{width:%?60?%;height:%?60?%}.body .third-wapper .third-icos-wapper .third-ico-ml[data-v-d83ef72a]{margin-left:%?80?%}.body .third-wapper .third-icos-wapper .third-btn-ico[data-v-d83ef72a]{background-image:url(http://122.152.205.72:88/group1/M00/00/05/CpoxxFxFO-yAOjTaAAATCIZEzRU503.png);width:%?60?%;height:%?60?%;background-color:#fff;background-size:%?60?% %?60?%;background-repeat:no-repeat;border:none;padding:0}.body .third-wapper .third-icos-wapper .third-btn-ico[data-v-d83ef72a]:after{border:none}",""])},ecd6:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"line-wapper"},[i("v-uni-view",{staticClass:"line"})],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})}}]);