(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login-home-welcome"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,i,a){try{var s=t[i](a),u=s.value}catch(c){return void r(c)}s.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function s(t){n(a,o,i,s,u,"next",t)}function u(t){n(a,o,i,s,u,"throw",t)}s(void 0)}))}}},"1ddd":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h3",[t._v("欢迎您，"+t._s(t.username)+"，"+t._s(t.tip)+" 当前时间："+t._s(t._f("dateFormat")(t.time)))])])},o=[],i={data:function(){return{username:"",time:"",hour:0,calendar:new Date}},created:function(){this.username=window.sessionStorage.getItem("username"),this.getCurrentTime()},methods:{getCurrentTime:function(){var t=this;this.time=new Date,this.hour=this.time.getHours(),setInterval((function(){t.time=new Date,t.hour=t.time.getHours()}),1e3)}},computed:{tip:function(){return this.hour>=3&&this.hour<6?"凌晨了，新的一天开始了！":this.hour>=6&&this.hour<8?"早上好！":this.hour>=8&&this.hour<11?"上午好！":this.hour>=11&&this.hour<13?"中午好！":this.hour>=13&&this.hour<17?"下午好！":this.hour>=17&&this.hour<19?"傍晚好！":this.hour>=19&&this.hour<23?"晚上好！":"深夜了，请注意休息！"}}},a=i,s=r("2877"),u=Object(s["a"])(a,n,o,!1,null,"60559462",null);e["default"]=u.exports},"578a":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login-container"},[r("div",{staticClass:"login-form"},[t._m(0),r("el-form",{ref:"loginFormRef",attrs:{"label-width":"0px",model:t.loginForm,rules:t.loginRules}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{"prefix-icon":"iconfont icon-user"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password","prefix-icon":"iconfont icon-3702mima"},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}})],1),r("el-form-item",{staticClass:"btns"},[r("el-button",{attrs:{type:"info"},on:{click:function(e){return t.resetLoginForm("loginFormRef")}}},[t._v("重置")]),r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.login("loginFormRef")}}},[t._v("登录")])],1)],1)],1)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("img",{attrs:{src:r("cf05"),alt:"logo"}})])}],i=r("1da1"),a=(r("96cf"),{data:function(){return{loginForm:{username:"admin",password:"123456"},loginRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:15,message:"长度在 3 到 15 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:15,message:"长度在 6 到 15 个字符",trigger:"blur"}]}}},methods:{resetLoginForm:function(t){this.$refs[t].resetFields()},login:function(t){var e=this;this.$refs[t].validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",!1);case 2:return t.next=4,e.$http.post("login",e.loginForm);case 4:n=t.sent,o=n.data,200===o.meta.status?(e.$message({type:"success",message:o.meta.msg||"登录成功",center:!0,duration:1e3}),window.sessionStorage.setItem("token",o.data.token),window.sessionStorage.setItem("username",e.loginForm.username),e.$router.push("/home")):e.$message({type:"error",message:o.meta.msg||"登录失败",center:!0,duration:1e3});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}}),s=a,u=(r("e471"),r("2877")),c=Object(u["a"])(s,n,o,!1,null,"483a96dd",null);e["default"]=c.exports},"57da":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticClass:"home-box"},[n("el-header",[n("div",[n("img",{attrs:{src:r("cf05"),alt:"logo"}}),n("span",[t._v("电商后台管理系统")])]),n("el-button",{attrs:{type:"info",plain:"",size:"mini"},on:{click:t.logout}},[t._v("系统退出")])],1),n("el-container",[n("el-aside",{attrs:{width:t.isCollapse?"64px":"200px"}},[n("div",{staticClass:"toggle-button",attrs:{title:t.titleCollapse},on:{click:t.toggleCollapse}},[t._v("|||")]),n("el-menu",{attrs:{"default-active":t.activePath,"background-color":"#545c64","text-color":"#fff","active-text-color":"#409eff","unique-opened":"",collapse:t.isCollapse,"collapse-transition":!1,router:!0}},t._l(t.menuList,(function(e,r){return n("el-submenu",{key:e.id,attrs:{index:r+""}},[n("template",{slot:"title"},[n("i",{staticClass:"iconfont",class:t.iconObj[r]}),n("span",[t._v(t._s(e.authName))])]),t._l(e.children,(function(e){return n("el-menu-item",{key:e.id,attrs:{index:"/"+e.path},on:{click:function(r){return t.saveNavState("/"+e.path)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",[t._v(t._s(e.authName))])])}))],2)})),1)],1),n("el-main",[n("router-view")],1)],1)],1)},o=[],i=r("1da1"),a=(r("96cf"),{data:function(){return{menuList:[],isCollapse:!1,titleCollapse:"单击收起",activePath:"",iconObj:["icon-users","icon-tijikongjian","icon-shangpin","icon-danju","icon-baobiao"]}},created:function(){this.getMenuList(),this.activePath=window.sessionStorage.getItem("activePath")},methods:{logout:function(){window.sessionStorage.clear(),this.$router.push("/login")},getMenuList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("menus");case 2:if(r=e.sent,n=r.data,200===n.meta.status){e.next=6;break}return e.abrupt("return",t.$message({type:"error",message:n.meta.msg||"获取菜单列表失败",center:!0,duration:1e3}));case 6:t.menuList=n.data;case 7:case"end":return e.stop()}}),e)})))()},toggleCollapse:function(){this.isCollapse=!this.isCollapse,this.titleCollapse=this.isCollapse?"单击展开":"单击收起"},saveNavState:function(t){this.activePath=t,window.sessionStorage.setItem("activePath",t)}}}),s=a,u=(r("ca34"),r("2877")),c=Object(u["a"])(s,n,o,!1,null,"13fa25e9",null);e["default"]=c.exports},"8fc8":function(t,e,r){},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(S){u=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=E(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=c;var h="suspendedStart",f="suspendedYield",p="executing",m="completed",g={};function d(){}function v(){}function y(){}var w={};w[i]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b($([])));x&&x!==r&&n.call(x,i)&&(w=x);var _=y.prototype=d.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,s){var u=l(t[o],t,i);if("throw"!==u.type){var c=u.arg,h=c.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(h).then((function(t){c.value=t,a(c)}),(function(t){return r("throw",t,a,s)}))}s(u.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function E(t,e,r){var n=h;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw i;return P()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var s=F(a,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?m:f,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=m,r.method="throw",r.arg=u.arg)}}}function F(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,F(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function $(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return v.prototype=_.constructor=y,y.constructor=v,v.displayName=u(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},L(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(_),u(_,s,"Generator"),_[i]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=$,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:$(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},ca34:function(t,e,r){"use strict";r("8fc8")},cf05:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"},e471:function(t,e,r){"use strict";r("f0de")},f0de:function(t,e,r){}}]);
//# sourceMappingURL=login-home-welcome.a048c437.js.map