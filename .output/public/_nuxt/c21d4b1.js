(window.webpackJsonp=window.webpackJsonp||[]).push([[3,14],{486:function(t,e,n){var content=n(494);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("64170974",content,!0,{sourceMap:!1})},493:function(t,e,n){"use strict";n(486)},494:function(t,e,n){var r=n(52)((function(i){return i[1]}));r.push([t.i,".searchbar[data-v-18f7585b]{width:300px;border-radius:20px;padding:5px 15px;border:1px solid #ccc;outline:0;height:40px}.searchbar[data-v-18f7585b]:focus{border-color:#bbb}",""]),r.locals={},t.exports=r},498:function(t,e,n){"use strict";n.r(e);var r=n(38),o=n(9),c=n(12),l=(n(73),n(28),{});l.props={options:{type:Array,default:{}},storeproperty:{type:String,default:""},storename:{type:String,default:""},name:{type:String,default:""},updateStoreAction:{type:String,default:""}},l.setup=function(t,e){var n=Object(r.c)().$store,l=n.state,f=t,d=Object(o.b)({get:function(){return l[f.storename][f.storeproperty][f.name]},set:function(t){console.log("setVal",t)}}),v=Object(o.J)(),h=Object(o.J)("outlined-primary");Object(o.Z)((function(){console.log("watchEffect"),v.value=l[f.storename][f.storeproperty][f.name],"actif"==v.value&&(console.log("actif"),h.value="outline-success"),"inactif"==v.value&&(console.log("inactif"),h.value="outline-danger"),"archive"==v.value&&(console.log("archive"),h.value="outline-warning"),"draft"==v.value&&(console.log("draft"),h.value="outline-warning")}));var m=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.dispatch(f.storename+"/"+f.updateStoreAction,{val:e,key:f.name}).then(function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:t.sent;case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{selected:d,variant:h,updateValue:m}};var f=l,d=(n(493),n(56)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-form-radio-group",{attrs:{id:"btn-radios-1",options:t.options,name:"radios-btn-default","button-variant":t.variant,buttons:""},on:{change:t.updateValue},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)}),[],!1,null,"18f7585b",null);e.default=component.exports},499:function(t,e,n){(function(t){var r,o,c,l,f=n(171);n(13),n(29),n(19),n(139),n(27),n(69),n(20),n(1),n(39),n(6),n(49),n(3),n(24),n(5),l=function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=9)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==f(t)?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(3)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(6),o=n(7);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(30);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Avatar=void 0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n(10));e.Avatar=r.default,e.default=r.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(12),o=n.n(r),i=n(41),s=n(11)(o.a,i.a,!1,null,null,null);e.default=s.exports},function(t,e){t.exports=function(t,e,n,r,o,i){var u,s=t=t||{},a=f(t.default);"object"!==a&&"function"!==a||(u=t,s=t.default);var c,l="function"==typeof s?s.options:s;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId=o),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):r&&(c=r),c){var d=l.functional,p=d?l.render:l.beforeCreate;d?(l._injectStyles=c,l.render=function(t,e){return c.call(e),p(t,e)}):l.beforeCreate=p?[].concat(p,c):[c]}return{esModule:u,exports:s,options:l}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(13)),i=function(t){for(var e=t.split(/[ -]/),n="",r=0;r<e.length;r++)n+=e[r].charAt(0);return n.length>3&&-1!==n.search(/[A-Z]/)&&(n=n.replace(/[a-z]+/g,"")),n.substr(0,3).toUpperCase()};e.default={name:"avatar",props:{username:{type:String},initials:{type:String},backgroundColor:{type:String},color:{type:String},customStyle:{type:Object},inline:{type:Boolean},size:{type:Number,default:50},src:{type:String},rounded:{type:Boolean,default:!0},lighten:{type:Number,default:80},parser:{type:Function,default:i,validator:function(t){return"string"==typeof t("John",i)}}},data:function(){return{backgroundColors:["#F44336","#FF4081","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFC107","#FF9800","#FF5722","#795548","#9E9E9E","#607D8B"],imgError:!1}},mounted:function(){this.isImage||this.$emit("avatar-initials",this.username,this.userInitial)},computed:{background:function(){if(!this.isImage)return this.backgroundColor||this.randomBackgroundColor(this.username.length,this.backgroundColors)},fontColor:function(){if(!this.isImage)return this.color||this.lightenColor(this.background,this.lighten)},isImage:function(){return!this.imgError&&Boolean(this.src)},style:function(){var t={display:this.inline?"inline-flex":"flex",width:this.size+"px",height:this.size+"px",borderRadius:this.rounded?"50%":0,lineHeight:this.size+Math.floor(this.size/20)+"px",fontWeight:"bold",alignItems:"center",justifyContent:"center",textAlign:"center",userSelect:"none"},e={background:"transparent url('"+this.src+"') no-repeat scroll 0% 0% / "+this.size+"px "+this.size+"px content-box border-box"},n={backgroundColor:this.background,font:Math.floor(this.size/2.5)+"px/"+this.size+"px Helvetica, Arial, sans-serif",color:this.fontColor},o=this.isImage?e:n;return(0,r.default)(t,o),t},userInitial:function(){return this.isImage?"":this.initials||this.parser(this.username,i)}},methods:{initial:i,onImgError:function(t){this.imgError=!0},randomBackgroundColor:function(t,e){return e[t%e.length]},lightenColor:function(t,e){var n=!1;"#"===t[0]&&(t=t.slice(1),n=!0);var r=parseInt(t,16),o=(r>>16)+e;o>255?o=255:o<0&&(o=0);var i=(r>>8&255)+e;i>255?i=255:i<0&&(i=0);var u=(255&r)+e;return u>255?u=255:u<0&&(u=0),(n?"#":"")+(u|i<<8|o<<16).toString(16)}}}},function(t,e,n){t.exports={default:n(14),__esModule:!0}},function(t,e,n){n(15),t.exports=n(4).Object.assign},function(t,e,n){var r=n(16);r(r.S+r.F,"Object",{assign:n(26)})},function(t,e,n){var r=n(0),o=n(4),i=n(17),u=n(19),s=function s(t,e,n){var a,c,l,f=t&s.F,p=t&s.G,d=t&s.S,v=t&s.P,h=t&s.B,m=t&s.W,g=p?o:o[e]||(o[e]={}),y=g.prototype,x=p?r:d?r[e]:(r[e]||{}).prototype;for(a in p&&(n=e),n)(c=!f&&x&&void 0!==x[a])&&a in g||(l=c?x[a]:n[a],g[a]=p&&"function"!=typeof x[a]?n[a]:h&&c?i(l,r):m&&x[a]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((g.virtual||(g.virtual={}))[a]=l,t&s.R&&y&&!y[a]&&u(y,a,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e,n){var r=n(18);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(20),o=n(25);t.exports=n(2)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(21),o=n(22),i=n(24),u=Object.defineProperty;e.f=n(2)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(1);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(2)&&!n(3)((function(){return 7!=Object.defineProperty(n(23)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(1),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(1);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){"use strict";var r=n(27),o=n(38),i=n(39),u=n(40),s=n(6),a=Object.assign;t.exports=!a||n(3)((function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=a({},t)[n]||Object.keys(a({},e)).join("")!=r}))?function(t,e){for(var n=u(t),a=arguments.length,c=1,l=o.f,f=i.f;a>c;)for(var p,d=s(arguments[c++]),v=l?r(d).concat(l(d)):r(d),h=v.length,m=0;h>m;)f.call(d,p=v[m++])&&(n[p]=d[p]);return n}:a},function(t,e,n){var r=n(28),o=n(37);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(29),o=n(5),i=n(31)(!1),u=n(34)("IE_PROTO");t.exports=function(t,e){var n,s=o(t),a=0,c=[];for(n in s)n!=u&&r(s,n)&&c.push(n);for(;e.length>a;)r(s,n=e[a++])&&(~i(c,n)||c.push(n));return c}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(5),o=n(32),i=n(33);t.exports=function(t){return function(e,n,u){var s,a=r(e),c=o(a.length),l=i(u,c);if(t&&n!=n){for(;c>l;)if((s=a[l++])!=s)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(8),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(8),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(35)("keys"),o=n(36);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(7);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-avatar--wrapper",style:[t.style,t.customStyle],attrs:{"aria-hidden":"true"}},[this.isImage?n("img",{staticStyle:{display:"none"},attrs:{src:this.src},on:{error:t.onImgError}}):t._e(),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!this.isImage,expression:"!this.isImage"}]},[t._v(t._s(t.userInitial))])])},staticRenderFns:[]};e.a=i}])},"object"==f(e)&&"object"==f(t)?t.exports=l():(o=[],void 0===(c="function"==typeof(r=l)?r.apply(e,o):r)||(t.exports=c))}).call(this,n(220)(t))},572:function(t,e,n){var content=n(619);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("2e00c3ef",content,!0,{sourceMap:!1})},618:function(t,e,n){"use strict";n(572)},619:function(t,e,n){var r=n(52)((function(i){return i[1]}));r.push([t.i,".userHead[data-v-65453936]{justify-content:space-between;width:100%}.left[data-v-65453936],.userHead[data-v-65453936]{display:flex;align-items:center}.left[data-v-65453936]{height:40px}.left h3[data-v-65453936]{margin-bottom:0;font-weight:700}.left a[data-v-65453936]{color:grey;margin-right:1rem;margin-bottom:0;display:flex;align-items:center;justify-content:center;text-decoration:none}.left a .material-icons[data-v-65453936]{width:15px;font-size:40px}.left a[data-v-65453936]:hover{color:#333}.left .copyIcon[data-v-65453936]{font-size:14px;margin-left:5px;margin-top:5px;cursor:pointer}.right[data-v-65453936]{display:flex;align-items:center;align-self:flex-end;height:40px}",""]),r.locals={},t.exports=r},632:function(t,e,n){"use strict";n.r(e);var r=n(38),o=n(9),c=n(499),l=n.n(c),f={setup:function(t,e){var n=Object(r.c)().$store,c=n.state,l=Object(o.J)();Object(o.Z)((function(){console.log("watchEffect"),l.value=c.users.currentUser}));return{user:l,copyId:function(){console.log("navigator:",navigator),console.log("navigator.clipboard:",navigator.clipboard),navigator.clipboard.writeText(l.value.id),n.dispatch("global/alert",{text:"ID de l'utilisateur copié",variant:"success",countDown:3},{root:!0})}}}};f.components=Object.assign({Avatar:l.a},f.components);var d=f,v=(n(618),n(56)),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12"},[t.user?n("div",{staticClass:"card"},[n("div",{staticClass:"card-body userHead"},[n("div",{staticClass:"left"},[n("nuxt-link",{attrs:{to:"/users"}},[n("span",{staticClass:"material-icons"},[t._v("\n\t\t\t\t\t\tarrow_back_ios\n\t\t\t\t\t")])]),t._v(" "),n("avatar",{attrs:{username:t.user.firstName+" "+t.user.lastName,inline:""}}),t._v(" "),n("h3",{staticClass:"card-title ml-2"},[t._v(" "+t._s(t.user.firstName)+" "+t._s(t.user.lastName)+" ")]),t._v(" "),n("span",{staticClass:"material-icons copyIcon",attrs:{title:"Copier l'id"},on:{click:t.copyId}},[t._v("\n\t\t\t\t\t\tcontent_copy\n\t\t\t\t\t")])],1),t._v(" "),n("div",{staticClass:"right"},[n("InstantRadio",{attrs:{options:[{text:"Actif",value:"actif"},{text:"Brouillon",value:"draft"},{text:"Inactif",value:"inactif"},{text:"Archive",value:"archive"}],name:"status",storename:"users",storeproperty:"currentUser",updateStoreAction:"updateCurrentUser"}})],1)])]):t._e()])}),[],!1,null,"65453936",null);e.default=component.exports;installComponents(component,{InstantRadio:n(498).default})}}]);