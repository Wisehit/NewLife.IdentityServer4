(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-398214c4"],{"02f4":function(n,t,e){var r=e("4588"),i=e("be13");n.exports=function(n){return function(t,e){var o,a,s=String(i(t)),c=r(e),l=s.length;return c<0||c>=l?n?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===l||(a=s.charCodeAt(c+1))<56320||a>57343?n?s.charAt(c):o:n?s.slice(c,c+2):a-56320+(o-55296<<10)+65536)}}},"0390":function(n,t,e){"use strict";var r=e("02f4")(!0);n.exports=function(n,t,e){return t+(e?r(n,t).length:1)}},"0bfb":function(n,t,e){"use strict";var r=e("cb7c");n.exports=function(){var n=r(this),t="";return n.global&&(t+="g"),n.ignoreCase&&(t+="i"),n.multiline&&(t+="m"),n.unicode&&(t+="u"),n.sticky&&(t+="y"),t}},"214f":function(n,t,e){"use strict";e("b0c5");var r=e("2aba"),i=e("32e9"),o=e("79e5"),a=e("be13"),s=e("2b4c"),c=e("520a"),l=s("species"),u=!o(function(){var n=/./;return n.exec=function(){var n=[];return n.groups={a:"7"},n},"7"!=="".replace(n,"$<a>")}),d=function(){var n=/(?:)/,t=n.exec;n.exec=function(){return t.apply(this,arguments)};var e="ab".split(n);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();n.exports=function(n,t,e){var p=s(n),g=!o(function(){var t={};return t[p]=function(){return 7},7!=""[n](t)}),f=g?!o(function(){var t=!1,e=/a/;return e.exec=function(){return t=!0,null},"split"===n&&(e.constructor={},e.constructor[l]=function(){return e}),e[p](""),!t}):void 0;if(!g||!f||"replace"===n&&!u||"split"===n&&!d){var h=/./[p],v=e(a,p,""[n],function(n,t,e,r,i){return t.exec===c?g&&!i?{done:!0,value:h.call(t,e,r)}:{done:!0,value:n.call(e,t,r)}:{done:!1}}),m=v[0],w=v[1];r(String.prototype,n,m),i(RegExp.prototype,p,2==t?function(n,t){return w.call(n,this,t)}:function(n){return w.call(n,this)})}}},"520a":function(n,t,e){"use strict";var r=e("0bfb"),i=RegExp.prototype.exec,o=String.prototype.replace,a=i,s="lastIndex",c=function(){var n=/a/,t=/b*/g;return i.call(n,"a"),i.call(t,"a"),0!==n[s]||0!==t[s]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(a=function(n){var t,e,a,u,d=this;return l&&(e=new RegExp("^"+d.source+"$(?!\\s)",r.call(d))),c&&(t=d[s]),a=i.call(d,n),c&&a&&(d[s]=d.global?a.index+a[0].length:t),l&&a&&a.length>1&&o.call(a[0],e,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(a[u]=void 0)}),a}),n.exports=a},"5ad3":function(n,t,e){"use strict";var r=e("caaf"),i=e.n(r);i.a},"5f1b":function(n,t,e){"use strict";var r=e("23c6"),i=RegExp.prototype.exec;n.exports=function(n,t){var e=n.exec;if("function"===typeof e){var o=e.call(n,t);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(n))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(n,t)}},"6b4a":function(n,t,e){},"8ed8":function(n,t,e){"use strict";e.r(t);var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"login-container"},[e("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:n.loginForm,rules:n.loginRules,"auto-complete":"on","label-position":"left"}},[e("div",{staticClass:"title-container"},[e("h3",{staticClass:"title"},[n._v("系统登录")])]),e("el-form-item",{attrs:{prop:"username"}},[e("span",{staticClass:"svg-container"},[e("svg-icon",{attrs:{"icon-class":"user"}})],1),e("el-input",{attrs:{placeholder:"账号",name:"username",type:"text","auto-complete":"on"},model:{value:n.loginForm.username,callback:function(t){n.$set(n.loginForm,"username",t)},expression:"loginForm.username"}})],1),e("el-form-item",{attrs:{prop:"password"}},[e("span",{staticClass:"svg-container"},[e("svg-icon",{attrs:{"icon-class":"password"}})],1),e("el-input",{attrs:{type:n.passwordType,placeholder:"密码",name:"password","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&n._k(t.keyCode,"enter",13,t.key,"Enter")?null:n.handleLogin(t)}},model:{value:n.loginForm.password,callback:function(t){n.$set(n.loginForm,"password",t)},expression:"loginForm.password"}}),e("span",{staticClass:"show-pwd",on:{click:n.showPwd}},[e("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),e("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:n.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),n.handleLogin(t)}}},[n._v("登录")]),e("div",{staticClass:"tips"},[e("span",[n._v("账号 : admin")]),e("span",[n._v("密码 : admin")])]),e("div",{staticClass:"tips"},[e("span",{staticStyle:{"margin-right":"18px"}},[n._v("账号 : editor")]),e("span",[n._v("密码 : editor")])]),e("el-button",{staticClass:"thirdparty-button",attrs:{type:"primary"},on:{click:function(t){n.showDialog=!0}}},[n._v("第三方登录")])],1),e("el-dialog",{attrs:{title:"第三方登录",visible:n.showDialog,"append-to-body":""},on:{"update:visible":function(t){n.showDialog=t}}},[n._v("\n    本地不能模拟，请结合自己业务进行模拟！！！\n    "),e("br"),e("br"),e("br"),e("social-sign")],1)],1)},i=[];e("a481");function o(n){return!0}var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("el-dropdown",{staticClass:"international",attrs:{trigger:"click"},on:{command:n.handleSetLanguage}},[e("div",[e("svg-icon",{attrs:{"class-name":"international-icon","icon-class":"language"}})],1),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{attrs:{disabled:"zh"===n.language,command:"zh"}},[n._v("中文")]),e("el-dropdown-item",{attrs:{disabled:"en"===n.language,command:"en"}},[n._v("English")]),e("el-dropdown-item",{attrs:{disabled:"es"===n.language,command:"es"}},[n._v("Español")])],1)],1)},s=[],c={computed:{language:function(){return this.$store.getters.language}},methods:{handleSetLanguage:function(n){this.$i18n.locale=n,this.$store.dispatch("setLanguage",n),this.$message({message:"Switch Language Success",type:"success"})}}},l=c,u=(e("9ffd"),e("2877")),d=Object(u["a"])(l,a,s,!1,null,"ec924c20",null),p=d.exports,g=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"social-signup-container"},[e("div",{staticClass:"sign-btn",on:{click:function(t){return n.handleClick("wechat")}}},[e("span",{staticClass:"wx-svg-container"},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),n._v(" 微信\n  ")]),e("div",{staticClass:"sign-btn",on:{click:function(t){return n.handleClick("QQ")}}},[e("span",{staticClass:"qq-svg-container"},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),n._v(" QQ\n  ")]),e("div",{staticClass:"sign-btn",on:{click:function(t){return n.handleClick("Github")}}},[e("span",{staticClass:"github-svg-container"},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"github"}})],1),n._v(" Github\n  ")]),e("div",{staticClass:"sign-btn",on:{click:function(t){return n.handleClick("IdentityServer4")}}},[e("span",{staticClass:"github-svg-container"},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"github"}})],1),n._v(" 授权中心\n  ")])])},f=[];function h(n,t,e,r){const i=void 0!==window.screenLeft?window.screenLeft:screen.left,o=void 0!==window.screenTop?window.screenTop:screen.top,a=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,s=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,c=a/2-e/2+i,l=s/2-r/2+o,u=window.open(n,t,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width="+e+", height="+r+", top="+l+", left="+c);window.focus&&u.focus()}e("ce8a");var v={name:"SocialSignin",methods:{handleClick:function(n){var t=encodeURIComponent("/auth-redirect"),e="/Admin/Account/Challenge?provider="+n+"&returnUrl="+t;h(e,n,540,540)}}},m=v,w=(e("5ad3"),Object(u["a"])(m,g,f,!1,null,"56ea9c1e",null)),b=w.exports,y={name:"Login",components:{LangSelect:p,SocialSign:b},data:function(){var n=function(n,t,e){o(t)?e():e(new Error("Please enter the correct user name"))},t=function(n,t,e){t.length<4?e(new Error("The password can not be less than 4 digits")):e()};return{loginForm:{username:"admin",password:"Aa-123456"},loginRules:{username:[{required:!0,trigger:"blur",validator:n}],password:[{required:!0,trigger:"blur",validator:t}]},passwordType:"password",loading:!1,showDialog:!1,redirect:void 0,returnUrl:"/"}},watch:{$route:{handler:function(n){this.redirect=n.query&&n.query.redirect,this.returnUrl=n.query&&n.query.returnUrl},immediate:!0}},created:function(){window.addEventListener("hashchange",this.afterQRScan)},destroyed:function(){window.removeEventListener("hashchange",this.afterQRScan)},methods:{showPwd:function(){"password"===this.passwordType?this.passwordType="":this.passwordType="password"},handleLogin:function(){var n=this;n.$refs.loginForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;n.loading=!0,n.$store.dispatch("LoginByUsername",n.loginForm).then(function(){n.loading=!1,n.returnUrl?window.location.href=window.location.origin+n.returnUrl:n.$router.push({path:n.redirect||"/"})}).catch(function(){n.loading=!1})})},afterQRScan:function(){var n=window.location.hash.slice(1),t=decodeURIComponent(n.replace("token=","")),e=window.location.origin;history.replaceState({},"",e),t?this.$store.dispatch("LoginByThirdparty",t).then(function(){vm.returnUrl?window.location.href=window.location.origin+vm.returnUrl:vm.$router.push({path:vm.redirect||"/"})}):alert("第三方登录失败")}}},x=y,C=(e("ea69"),e("cb54"),Object(u["a"])(x,r,i,!1,null,"7023ed93",null));t["default"]=C.exports},"9ffd":function(n,t,e){"use strict";var r=e("6b4a"),i=e.n(r);i.a},a481:function(n,t,e){"use strict";var r=e("cb7c"),i=e("4bf8"),o=e("9def"),a=e("4588"),s=e("0390"),c=e("5f1b"),l=Math.max,u=Math.min,d=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,g=/\$([$&`']|\d\d?)/g,f=function(n){return void 0===n?n:String(n)};e("214f")("replace",2,function(n,t,e,h){return[function(r,i){var o=n(this),a=void 0==r?void 0:r[t];return void 0!==a?a.call(r,o,i):e.call(String(o),r,i)},function(n,t){var i=h(e,n,this,t);if(i.done)return i.value;var d=r(n),p=String(this),g="function"===typeof t;g||(t=String(t));var m=d.global;if(m){var w=d.unicode;d.lastIndex=0}var b=[];while(1){var y=c(d,p);if(null===y)break;if(b.push(y),!m)break;var x=String(y[0]);""===x&&(d.lastIndex=s(p,o(d.lastIndex),w))}for(var C="",k=0,S=0;S<b.length;S++){y=b[S];for(var E=String(y[0]),$=l(u(a(y.index),p.length),0),_=[],L=1;L<y.length;L++)_.push(f(y[L]));var R=y.groups;if(g){var F=[E].concat(_,$,p);void 0!==R&&F.push(R);var T=String(t.apply(void 0,F))}else T=v(E,p,$,_,R,t);$>=k&&(C+=p.slice(k,$)+T,k=$+E.length)}return C+p.slice(k)}];function v(n,t,r,o,a,s){var c=r+n.length,l=o.length,u=g;return void 0!==a&&(a=i(a),u=p),e.call(s,u,function(e,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return n;case"`":return t.slice(0,r);case"'":return t.slice(c);case"<":s=a[i.slice(1,-1)];break;default:var u=+i;if(0===u)return e;if(u>l){var p=d(u/10);return 0===p?e:p<=l?void 0===o[p-1]?i.charAt(1):o[p-1]+i.charAt(1):e}s=o[u-1]}return void 0===s?"":s})}})},b0c5:function(n,t,e){"use strict";var r=e("520a");e("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},c287:function(n,t,e){},caaf:function(n,t,e){},cb54:function(n,t,e){"use strict";var r=e("c287"),i=e.n(r);i.a},ea69:function(n,t,e){"use strict";var r=e("fff3"),i=e.n(r);i.a},fff3:function(n,t,e){}}]);
//# sourceMappingURL=chunk-398214c4.6c6973f4.js.map