(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{499:function(t,e,r){(function(t){var n,o,c,l,f=r(171);r(13),r(29),r(19),r(139),r(27),r(69),r(20),r(1),r(39),r(6),r(49),r(3),r(24),r(5),l=function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=9)}([function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e){t.exports=function(t){return"object"==f(t)?null!==t:"function"==typeof t}},function(t,e,r){t.exports=!r(3)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var r=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=r)},function(t,e,r){var n=r(6),o=r(7);t.exports=function(t){return n(o(t))}},function(t,e,r){var n=r(30);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Avatar=void 0;var n=function(t){return t&&t.__esModule?t:{default:t}}(r(10));e.Avatar=n.default,e.default=n.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(12),o=r.n(n),i=r(41),s=r(11)(o.a,i.a,!1,null,null,null);e.default=s.exports},function(t,e){t.exports=function(t,e,r,n,o,i){var u,s=t=t||{},a=f(t.default);"object"!==a&&"function"!==a||(u=t,s=t.default);var c,l="function"==typeof s?s.options:s;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId=o),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):n&&(c=n),c){var d=l.functional,p=d?l.render:l.beforeCreate;d?(l._injectStyles=c,l.render=function(t,e){return c.call(e),p(t,e)}):l.beforeCreate=p?[].concat(p,c):[c]}return{esModule:u,exports:s,options:l}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(r(13)),i=function(t){for(var e=t.split(/[ -]/),r="",n=0;n<e.length;n++)r+=e[n].charAt(0);return r.length>3&&-1!==r.search(/[A-Z]/)&&(r=r.replace(/[a-z]+/g,"")),r.substr(0,3).toUpperCase()};e.default={name:"avatar",props:{username:{type:String},initials:{type:String},backgroundColor:{type:String},color:{type:String},customStyle:{type:Object},inline:{type:Boolean},size:{type:Number,default:50},src:{type:String},rounded:{type:Boolean,default:!0},lighten:{type:Number,default:80},parser:{type:Function,default:i,validator:function(t){return"string"==typeof t("John",i)}}},data:function(){return{backgroundColors:["#F44336","#FF4081","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFC107","#FF9800","#FF5722","#795548","#9E9E9E","#607D8B"],imgError:!1}},mounted:function(){this.isImage||this.$emit("avatar-initials",this.username,this.userInitial)},computed:{background:function(){if(!this.isImage)return this.backgroundColor||this.randomBackgroundColor(this.username.length,this.backgroundColors)},fontColor:function(){if(!this.isImage)return this.color||this.lightenColor(this.background,this.lighten)},isImage:function(){return!this.imgError&&Boolean(this.src)},style:function(){var t={display:this.inline?"inline-flex":"flex",width:this.size+"px",height:this.size+"px",borderRadius:this.rounded?"50%":0,lineHeight:this.size+Math.floor(this.size/20)+"px",fontWeight:"bold",alignItems:"center",justifyContent:"center",textAlign:"center",userSelect:"none"},e={background:"transparent url('"+this.src+"') no-repeat scroll 0% 0% / "+this.size+"px "+this.size+"px content-box border-box"},r={backgroundColor:this.background,font:Math.floor(this.size/2.5)+"px/"+this.size+"px Helvetica, Arial, sans-serif",color:this.fontColor},o=this.isImage?e:r;return(0,n.default)(t,o),t},userInitial:function(){return this.isImage?"":this.initials||this.parser(this.username,i)}},methods:{initial:i,onImgError:function(t){this.imgError=!0},randomBackgroundColor:function(t,e){return e[t%e.length]},lightenColor:function(t,e){var r=!1;"#"===t[0]&&(t=t.slice(1),r=!0);var n=parseInt(t,16),o=(n>>16)+e;o>255?o=255:o<0&&(o=0);var i=(n>>8&255)+e;i>255?i=255:i<0&&(i=0);var u=(255&n)+e;return u>255?u=255:u<0&&(u=0),(r?"#":"")+(u|i<<8|o<<16).toString(16)}}}},function(t,e,r){t.exports={default:r(14),__esModule:!0}},function(t,e,r){r(15),t.exports=r(4).Object.assign},function(t,e,r){var n=r(16);n(n.S+n.F,"Object",{assign:r(26)})},function(t,e,r){var n=r(0),o=r(4),i=r(17),u=r(19),s=function s(t,e,r){var a,c,l,f=t&s.F,p=t&s.G,d=t&s.S,v=t&s.P,m=t&s.B,h=t&s.W,g=p?o:o[e]||(o[e]={}),y=g.prototype,_=p?n:d?n[e]:(n[e]||{}).prototype;for(a in p&&(r=e),r)(c=!f&&_&&void 0!==_[a])&&a in g||(l=c?_[a]:r[a],g[a]=p&&"function"!=typeof _[a]?r[a]:m&&c?i(l,n):h&&_[a]==l?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((g.virtual||(g.virtual={}))[a]=l,t&s.R&&y&&!y[a]&&u(y,a,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e,r){var n=r(18);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){var n=r(20),o=r(25);t.exports=r(2)?function(t,e,r){return n.f(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){var n=r(21),o=r(22),i=r(24),u=Object.defineProperty;e.f=r(2)?Object.defineProperty:function(t,e,r){if(n(t),e=i(e,!0),n(r),o)try{return u(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){var n=r(1);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,r){t.exports=!r(2)&&!r(3)((function(){return 7!=Object.defineProperty(r(23)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,r){var n=r(1),o=r(0).document,i=n(o)&&n(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,r){var n=r(1);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){"use strict";var n=r(27),o=r(38),i=r(39),u=r(40),s=r(6),a=Object.assign;t.exports=!a||r(3)((function(){var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach((function(t){e[t]=t})),7!=a({},t)[r]||Object.keys(a({},e)).join("")!=n}))?function(t,e){for(var r=u(t),a=arguments.length,c=1,l=o.f,f=i.f;a>c;)for(var p,d=s(arguments[c++]),v=l?n(d).concat(l(d)):n(d),m=v.length,h=0;m>h;)f.call(d,p=v[h++])&&(r[p]=d[p]);return r}:a},function(t,e,r){var n=r(28),o=r(37);t.exports=Object.keys||function(t){return n(t,o)}},function(t,e,r){var n=r(29),o=r(5),i=r(31)(!1),u=r(34)("IE_PROTO");t.exports=function(t,e){var r,s=o(t),a=0,c=[];for(r in s)r!=u&&n(s,r)&&c.push(r);for(;e.length>a;)n(s,r=e[a++])&&(~i(c,r)||c.push(r));return c}},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e,r){var n=r(5),o=r(32),i=r(33);t.exports=function(t){return function(e,r,u){var s,a=n(e),c=o(a.length),l=i(u,c);if(t&&r!=r){for(;c>l;)if((s=a[l++])!=s)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===r)return t||l||0;return!t&&-1}}},function(t,e,r){var n=r(8),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e,r){var n=r(8),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=n(t))<0?o(t+e,0):i(t,e)}},function(t,e,r){var n=r(35)("keys"),o=r(36);t.exports=function(t){return n[t]||(n[t]=o(t))}},function(t,e,r){var n=r(0),o=n["__core-js_shared__"]||(n["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+n).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,r){var n=r(7);t.exports=function(t){return Object(n(t))}},function(t,e,r){"use strict";var i={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vue-avatar--wrapper",style:[t.style,t.customStyle],attrs:{"aria-hidden":"true"}},[this.isImage?r("img",{staticStyle:{display:"none"},attrs:{src:this.src},on:{error:t.onImgError}}):t._e(),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:!this.isImage,expression:"!this.isImage"}]},[t._v(t._s(t.userInitial))])])},staticRenderFns:[]};e.a=i}])},"object"==f(e)&&"object"==f(t)?t.exports=l():(o=[],void 0===(c="function"==typeof(n=l)?n.apply(e,o):n)||(t.exports=c))}).call(this,r(220)(t))},563:function(t,e,r){var content=r(601);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("50f04570",content,!0,{sourceMap:!1})},600:function(t,e,r){"use strict";r(563)},601:function(t,e,r){var n=r(52)((function(i){return i[1]}));n.push([t.i,"@-webkit-keyframes shake-data-v-1cf21c01{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}@keyframes shake-data-v-1cf21c01{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}.usernamebox[data-v-1cf21c01]{display:flex;align-items:center}.copyIcon[data-v-1cf21c01]{font-size:14px;margin-left:10px;cursor:pointer}.containerMask[data-v-1cf21c01]{width:100%;height:100%;overflow:hidden}.containerMask .panelContainer[data-v-1cf21c01]{width:200%;display:flex;flex-direction:row;position:relative;left:0!important}.containerMask .panelContainer .absoluteTest[data-v-1cf21c01]{width:500px;height:100px;background:teal;position:absolute;right:0;top:200px}.containerMask .panelContainer .firstPanel[data-v-1cf21c01],.containerMask .panelContainer .secondPanel[data-v-1cf21c01]{width:50%}.containerMask .panelContainer.secondary[data-v-1cf21c01]{width:200%;left:-100%!important}.containerMask .panelContainer.secondary .firstPanel[data-v-1cf21c01]{opacity:.2;width:50%}.containerMask .panelContainer.secondary .secondPanel[data-v-1cf21c01]{width:50%}.table-responsive[data-v-1cf21c01]{border:1px solid #d3d3d3;margin-bottom:1rem!important;border-left:0}.b-table-sticky-header[data-v-1cf21c01],[class*=table-responsive-][data-v-1cf21c01]{margin-bottom:0!important}.table td[data-v-1cf21c01],.table th[data-v-1cf21c01]{border:1px solid #000;background:#005050}.b-table-sticky-header>.table.b-table>thead>tr>th[data-v-1cf21c01]{border:2px solid #000!important;background:#005050}.card-title[data-v-1cf21c01]{display:flex;justify-content:space-between;align-items:center;padding:0 1px}.card-title h4[data-v-1cf21c01]{margin-bottom:0}.card-title .material-icons[data-v-1cf21c01]{font-size:22px}.btn-square[data-v-1cf21c01]{width:35px;height:35px;display:flex;align-items:center;justify-content:center;margin-left:10px}.firstBtn[data-v-1cf21c01]{margin-left:auto}.leftLastBtn[data-v-1cf21c01]{margin-right:auto}.modalForm .formElem[data-v-1cf21c01]{position:relative;margin-bottom:10px;display:block}.modalForm .formElem span.errors[data-v-1cf21c01]{color:red;font-size:10px}.flexfooterModal[data-v-1cf21c01]{display:flex;justify-content:space-between;align-items:center}.flexfooterModal .float-right[data-v-1cf21c01]{margin-left:auto}",""]),n.locals={},t.exports=n},636:function(t,e,r){"use strict";r.r(e);var n=r(9),o=r(38),c=r(12),l=(r(28),r(2),r(1),r(73),r(499)),f=r.n(l),d=void 0,v={setup:function(t,e){var r=Object(o.c)().$store,l=r.state,f=Object(o.d)(),v=Object(o.e)(),m="",h=!1,y=d;console.log("self",y);var _=Object(n.J)();console.log(f),r.dispatch("partenaires/fetchPartenaires",{archive:h});var x=Object(n.J)({name:""}),w=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("submitNewPartenaire:"),_.value.validate().then(function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("success",e),e){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,r.dispatch("partenaires/createPartenaire",x).then((function(t){console.log("then",t),t.err?console.log("err",t.err):(v.push(f.path+"/"+t.id),document.querySelector("#modalAddPartenaire .close").click())}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("archiveItem:",e),console.log("archiveItem:",n),t.next=4,r.dispatch("partenaires/updatePartenaireStatus",{id:e,action:n}).then(function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("AFTER archive");case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:t.sent;case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),k=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("DELETE Partenaire"),console.log("idToRemove",m),t.next=4,r.dispatch("partenaires/removeOnePartenaire",{id:m}).then(function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("AFTER REMOVE");case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:t.sent;case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=Object(n.b)({set:function(t){r.commit("partenaires/setCurrentPage",t)},get:function(){return l.partenaires.currentPage}}),O=Object(n.b)({set:function(t){r.commit("partenaires/setPerPage",t)},get:function(){return l.partenaires.perPage}}),P=Object(n.b)({set:function(t){r.commit("partenaires/setSortBy",t)},get:function(){return l.partenaires.sortBy}}),S=Object(n.b)({set:function(t){r.commit("partenaires/setSortDesc",t)},get:function(){return l.partenaires.sortDesc}}),I=Object(n.b)({get:function(){return l.partenaires.pageOptions}}),filter=Object(n.b)({set:function(t){r.commit("partenaires/setFilter",t)},get:function(){return l.partenaires.filter}}),R=Object(n.b)({set:function(t){r.commit("partenaires/setFilterOn",t)},get:function(){return l.partenaires.filterOn}}),E=Object(n.b)({set:function(t){},get:function(){return l.partenaires.partenaires}}),M=Object(n.b)({set:function(t){r.commit("partenaires/setTotalRows",t)},get:function(){return l.partenaires.totalRows}}),A=(Object(n.b)({set:function(t){r.commit("partenaires/setRows")},get:function(){return l.partenaires.rows}}),Object(n.b)({set:function(t){r.commit("partenaires/setIsBusy")},get:function(){return l.partenaires.isBusy}}));return{route:f,archive:h,validatorNewPartenaire:_,formNewPartenaire:x,toogleArchive:function(){console.log("enterArchive:"),h=!h,r.dispatch("partenaires/fetchPartenaires",{archive:h})},submitNewPartenaire:w,updateStatusItem:C,modalConfirmed:k,setToRemoveId:function(t){m=t},onDblClick:function(t){v.push(f.path+"/"+t.id)},copyId:function(t){navigator.clipboard.writeText(t),r.dispatch("global/alert",{text:"ID du jeu copié",variant:"success",countDown:3},{root:!0})},fields:[{key:"name",label:"Nom",sortable:!0},{key:"status",label:"Statut",sortable:!0,class:"statusCol"},{key:"actions",label:"",sortable:!1,class:"actionsCol"}],currentPage:j,perPage:O,sortBy:P,sortDesc:S,pageOptions:I,filter:filter,filterOn:R,onFiltered:function(t){r.commit("partenaires/setTotalRows",t.length)},items:E,totalRows:M,isBusy:A}}};v.components=Object.assign({Avatar:f.a},v.components);var m=v,h=(r(600),r(56)),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"containerMask"},[r("div",{staticClass:"panelContainer",class:{secondary:"/partenaires"!==t.route.path}},[r("b-modal",{attrs:{id:"modalRemove","header-bg-variant":"danger","header-text-variant":"white",centered:"",size:"sm",title:"Êtes vous sûre?","ok-title":"Oui. Je suis sûre","ok-variant":"success","cancel-title":"Annuler","cancel-variant":"danger"},on:{ok:t.modalConfirmed}},[r("p",{staticStyle:{"text-align":"center","margin-bottom":"0px"}},[t._v("Supprimer définitivement "),r("br"),t._v(" le partenaire ?")])]),t._v(" "),r("b-modal",{ref:"closemodal",attrs:{id:"modalAddPartenaire","header-bg-variant":"primary","header-text-variant":"white",centered:"",size:"md",title:"Ajouter un partenaire","hide-footer":""}},[r("ValidationObserver",{ref:"validatorNewPartenaire",staticClass:"modalForm",attrs:{reset:"resetNewPartenaireForm"}},[r("form",{on:{submit:function(e){return e.preventDefault(),t.submitNewPartenaire.apply(null,arguments)}}},[r("ValidationProvider",{staticClass:"formElem",attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("b-input",{attrs:{type:"text",placeholder:"Nom du partenaire",state:!n.length&&null},model:{value:t.formNewPartenaire.name,callback:function(e){t.$set(t.formNewPartenaire,"name",e)},expression:"formNewPartenaire.name"}}),t._v(" "),r("span",{staticClass:"errors"},[t._v(t._s(n[0]))])]}}])}),t._v(" "),r("div",{staticClass:"flexfooterModal"},[r("Alert"),t._v(" "),r("b-button",{staticClass:"btn-success float-right",attrs:{type:"submit",value:"ajouter"}},[t._v(" ajouter ")])],1)],1)])],1),t._v(" "),r("div",{staticClass:"firstPanel"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"card-title"},[r("h4",[t._v("Liste des partenaires ")]),t._v(" "),r("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modalAddPartenaire",modifiers:{modalAddPartenaire:!0}}],staticClass:"btn-outline btn-primary btn-square leftLastBtn",attrs:{title:"Ajouter un Partenaire"}},[r("span",{staticClass:"material-icons"},[t._v("add")])]),t._v(" "),t.archive?t._e():r("b-btn",{staticClass:"btn-warning btn-square firstBtn",attrs:{title:"Ouvrir les archives"},on:{click:t.toogleArchive}},[r("span",{staticClass:"material-icons"},[t._v("inventory")])]),t._v(" "),t.archive?r("b-btn",{staticClass:"btn-success btn-square",attrs:{title:"Sortir des archives"},on:{click:t.toogleArchive}},[r("span",{staticClass:"material-icons"},[t._v("inventory_2")])]):t._e(),t._v(" "),r("vue-json-to-csv",{attrs:{"json-data":t.items,labels:{name:{title:"Nom"},url:{title:"Url du jeu"},urlReglement:{title:"Url reglement"},description:{title:"Téléphone"},description:{title:"description"},huissiertext:{title:"huissiertext"},dateCloture:{title:"dateCloture"},dateLancement:{title:"dateLancement"},dateTirage:{title:"dateTirage"},valeur:{title:"valeur"},winnerfirstname:{title:"winnerfirstname"},winnerlastname:{title:"winnerlastname"},winnercity:{title:"winnercity"},winnerimageUrl:{title:"winnerimageUrl"},id:{title:"id"},status:{title:"Statut"}},"csv-title":"UserList"}},[r("b-btn",{staticClass:"btn-info btn-square",attrs:{title:"Télécharger au format CSV"}},[r("span",{staticClass:"material-icons"},[t._v("file_download")])])],1)],1),t._v(" "),r("div",{staticClass:"table-responsive mb-0"},[r("b-table",{staticClass:"datatables",attrs:{items:t.items,fields:t.fields,responsive:"sm","per-page":t.perPage,"current-page":t.currentPage,"sort-by":t.sortBy,"sort-desc":t.sortDesc,filter:t.filter,"filter-included-fields":t.filterOn,borderless:!1,striped:!0,bordered:!0,hover:!0,outlined:!0,"no-border-collapse":"","sticky-header":"calc(100vh - 250px)",busy:t.isBusy},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered,"row-dblclicked":t.onDblClick},scopedSlots:t._u([{key:"table-busy",fn:function(){return[r("div",{staticClass:"text-center text-info my-2"},[r("b-spinner",{staticClass:"align-middle"}),t._v(" "),r("strong",[t._v("Chargement...")])],1)]},proxy:!0},{key:"cell(status)",fn:function(data){return["actif"==data.item.status?r("b-badge",{attrs:{variant:"success"}},[t._v("Actif")]):t._e(),t._v(" "),"inactif"==data.item.status?r("b-badge",{attrs:{variant:"danger"}},[t._v("Inactif")]):t._e(),t._v(" "),"archive"==data.item.status?r("b-badge",{attrs:{variant:"warning"}},[t._v("Archive")]):t._e(),t._v(" "),"draft"==data.item.status?r("b-badge",{attrs:{variant:"warning"}},[t._v("Brouillon")]):t._e()]}},{key:"cell(lastname)",fn:function(data){return[r("div",{staticClass:"usernamebox"},[r("avatar",{attrs:{size:30,username:data.item.firstName+" "+data.item.lastName,inline:""}}),t._v(" "),r("span",{staticClass:"ml-2",staticStyle:{"margin-right":"auto"}},[r("b",[t._v(t._s(data.item.name))])]),t._v(" "),r("span",{staticClass:"material-icons copyIcon",attrs:{title:"Copier l'id"},on:{click:function(e){return t.copyId(data.item.id)}}},[t._v("\n\t\t\t\t\t\t\tcontent_copy\n\t\t\t\t\t\t")])],1)]}},{key:"cell(actions)",fn:function(data){return[r("b-dropdown",{staticClass:"dropdownIcon",attrs:{id:"dropdown-1","no-caret":"",variant:"outlined",size:"sm",dropleft:!0,html:"<span class='material-icons'>more_vert</span>"}},["inactif"==data.item.status||"draft"==data.item.status?r("b-dropdown-item",{on:{click:function(e){return t.updateStatusItem(data.item.id,"activer")}}},[t._v("Activer")]):t._e(),t._v(" "),"actif"==data.item.status?r("b-dropdown-item",{on:{click:function(e){return t.updateStatusItem(data.item.id,"desactiver")}}},[t._v("Désactiver")]):t._e(),t._v(" "),r("b-dropdown-item",{attrs:{to:"partenaires/"+data.item.id}},[t._v("Editer")]),t._v(" "),"archive"==data.item.status?r("b-dropdown-item",{on:{click:function(e){return t.updateStatusItem(data.item.id,"desarchiver")}}},[t._v("Désarchiver")]):r("b-dropdown-item",{on:{click:function(e){return t.updateStatusItem(data.item.id,"archiver")}}},[t._v("Archiver")]),t._v(" "),r("b-dropdown-divider"),t._v(" "),r("b-dropdown-item",{directives:[{name:"b-modal",rawName:"v-b-modal.modalRemove",modifiers:{modalRemove:!0}}],on:{click:function(e){return t.setToRemoveId(data.item.id)}}},[r("a",[t._v("Supprimer")])])],1),t._v(" "),r("div",{staticClass:"tableLineMenu"})]}}])})],1),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"dataTables_paginate paging_simple_numbers float-end"},[r("ul",{staticClass:"pagination pagination-rounded mb-0"},[r("b-pagination",{attrs:{"total-rows":t.totalRows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])]),t._v(" "),r("div",{staticClass:"col-sm-12 col-md-6"},[r("div",{staticClass:"dataTables_length",staticStyle:{"text-align":"right"},attrs:{id:"tickets-table_length"}},[r("label",{staticClass:"d-inline-flex align-items-center justify-content-center"},[t._v("\n                    Afficher \n                    "),r("b-form-select",{staticClass:"form-select form-select-sm",attrs:{size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),t._v(" lignes\n                  ")],1)])])])])])])])]),t._v(" "),r("div",{staticClass:"secondPanel"},["/jeux"!==t.route.path?r("NuxtChild"):t._e()],1)],1)])])}),[],!1,null,"1cf21c01",null);e.default=component.exports;installComponents(component,{Alert:r(343).default})}}]);