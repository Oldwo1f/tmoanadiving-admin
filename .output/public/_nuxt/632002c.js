(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{490:function(e,t,n){var content=n(501);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("1a57c434",content,!0,{sourceMap:!1})},500:function(e,t,n){"use strict";n(490)},501:function(e,t,n){var o=n(52)((function(i){return i[1]}));o.push([e.i,".ImageListContainer[data-v-70621532]{min-height:100px;min-width:100px;display:flex;align-items:center;flex-wrap:wrap}.item[data-v-70621532]{position:relative;max-width:25%}.item img[data-v-70621532]{width:100%}.myflex .item[data-v-70621532]{position:relative;max-width:100%}.myflex .item img[data-v-70621532]{width:100%}.myimageBTn[data-v-70621532]{position:absolute;bottom:10px;right:10px;height:25px;width:25px;display:flex;align-items:center;justify-content:center}.myimageBTn span[data-v-70621532]{font-size:16px;height:16px;width:16px;padding:0}",""]),o.locals={},e.exports=o},502:function(e,t,n){"use strict";n.r(t);var o=n(38),r=n(9),l=n(12),c=(n(73),n(28),{});c.props={storeproperty:{type:String,default:""},storename:{type:String,default:""},name:{type:String,default:""},updateStoreAction:{type:String,default:""},deleteStoreAction:{type:String,default:"yeah"}},c.setup=function(e,t){var n=Object(o.c)(),c=n.$store,m=(n.$axios,c.state),d=e,f="toto",v=Object(r.b)({get:function(){return m[d.storename][d.storeproperty][d.name]},set:function(e){console.log("setVal",e)}});console.log("images",v),console.log("IMAGELIST-----------------------------"),console.log("props.deleteStoreAction:",d.deleteStoreAction);var h=function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("DELETE Image TOTO"),console.log("props.deleteStoreAction==",d.deleteStoreAction),console.log("idToRemove",f),console.log(f),e.next=6,c.dispatch(d.storename+"/"+d.deleteStoreAction,{id:f}).then(function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("AFTER REMOVE");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:e.sent;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{images:v,setToRemoveId:function(e){console.log("SETIDTOREMOVE==>",e),f=e},modalConfirmed:h}};var m=c,d=(n(500),n(56)),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-modal",{attrs:{id:"modalRemove","header-bg-variant":"danger","header-text-variant":"white",centered:"",size:"sm",title:"Êtes vous sûre?","ok-title":"Oui. Je suis sûre","ok-variant":"success","cancel-title":"Annuler","cancel-variant":"danger"},on:{ok:e.modalConfirmed}},[n("p",{staticStyle:{"text-align":"center","margin-bottom":"0px"}},[e._v("Supprimer définitivement "),n("br"),e._v(" l'image ?")])]),e._v(" "),n("div",{staticClass:"ImageListContainer"},e._l(e.images,(function(image){return n("div",{key:image.id,staticClass:"item"},[n("img",{attrs:{src:e.$config.apiURL+"image/"+image.filename,alt:""}}),e._v(" "),n("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modalRemove",modifiers:{modalRemove:!0}}],staticClass:" myimageBTn btn-danger btn-sm",on:{click:function(t){return e.setToRemoveId(image.id)}}},[n("span",{staticClass:"material-icons"},[e._v("\n\t\t\t\tdelete\n\t\t\t")])])],1)})),0)],1)}),[],!1,null,"70621532",null);t.default=component.exports}}]);