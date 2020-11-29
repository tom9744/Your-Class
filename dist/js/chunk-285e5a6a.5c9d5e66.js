(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-285e5a6a"],{"9d26":function(t,e,a){"use strict";var s=a("132d");e["a"]=s["a"]},be7e:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"px-3 px-md-6 px-lg-9",attrs:{"fill-height":"",fluid:""}},[a("v-responsive",{staticClass:"pa-2",attrs:{height:"90vh"}},[a("v-row",[a("v-col",{staticClass:"hidden-md-and-down",attrs:{cols:"2"}},[a("left-navigation",{attrs:{userData:t.userData,menuList:t.filteredMenuList}})],1),a("v-col",{staticClass:"hidden-lg-and-up",attrs:{cols:"12"}},[a("top-navigation",{attrs:{userData:t.userData,menuList:t.filteredMenuList}})],1),a("v-col",[a("v-sheet",{staticClass:"overflow-y-auto mx-auto",attrs:{height:"75vh","min-height":"600px","max-height":"75vh","max-width":"1250px",rounded:"lg",elevation:"6"}},[a("router-view")],1)],1)],1)],1)],1)},i=[],r=(a("4de4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{staticClass:"pa-2",attrs:{rounded:"lg",elevation:"6"}},[a("v-list",[a("v-list-item",[a("v-list-item-avatar",{staticClass:"mx-auto",attrs:{color:t.userData.isStudent?"accent":"error",size:"64"}},[a("v-img",{staticClass:"elevation-6",attrs:{alt:"User Avatar",src:t.userData.avatarPath}})],1)],1),a("v-list-item",[a("v-list-item-content",{staticClass:"text-center"},[a("v-list-item-title",{staticClass:"text-h5 font-weight-bold"},[t._v(" "+t._s(t.userData.name)+" ")]),a("v-list-item-subtitle",[t._v(" "+t._s(t.userData.isStudent?"학생":"선생님")+" ")])],1)],1)],1),a("v-divider"),a("v-list",{attrs:{flat:""}},[a("v-list-item-group",{attrs:{color:"light-blue darken-2"}},t._l(t.menuList,(function(e,s){return a("div",{key:s},[a("v-list-item",{attrs:{to:{name:e.route},exact:"classInfo"==e.route}},[a("v-list-item-icon",[a("v-icon",{attrs:{size:"26"}},[t._v(" "+t._s(e.icon)+" ")])],1),a("v-list-item-title",{staticClass:"subtitle-1"},[t._v(" "+t._s(e.text)+" ")])],1)],1)})),0)],1)],1)}),n=[],o={props:{userData:Object,menuList:Array}},l=o,c=a("2877"),u=a("6544"),v=a.n(u),m=a("ce7e"),d=a("132d"),h=a("adda"),f=a("8860"),p=a("da13"),x=a("8270"),b=a("5d23"),g=a("1baa"),V=a("34c3"),C=a("8dd9"),_=Object(c["a"])(l,r,n,!1,null,null,null),D=_.exports;v()(_,{VDivider:m["a"],VIcon:d["a"],VImg:h["a"],VList:f["a"],VListItem:p["a"],VListItemAvatar:x["a"],VListItemContent:b["a"],VListItemGroup:g["a"],VListItemIcon:V["a"],VListItemSubtitle:b["b"],VListItemTitle:b["c"],VSheet:C["a"]});var I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{attrs:{rounded:"lg",elevation:"6"}},[a("v-row",{staticClass:"px-6",attrs:{align:"center",justify:"space-around"}},[a("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"2"}},[a("v-avatar",{attrs:{color:t.userData.isStudent?"accent":"error",size:"46"}},[a("v-img",{staticClass:"elevation-6",attrs:{alt:"User Avatar",src:t.userData.avatarPath}})],1)],1),t._l(t.menuList,(function(e,s){return a("v-col",{key:s,attrs:{cols:"2"}},[a("v-btn",{attrs:{"active-class":"accent",large:"xs"!=t.$vuetify.breakpoint.name,rounded:"xs"!=t.$vuetify.breakpoint.name,icon:"xs"==t.$vuetify.breakpoint.name,to:{name:e.route},text:"",exact:"classInfo"==e.route}},[a("v-icon",{attrs:{size:"24",left:"xs"!=t.$vuetify.breakpoint.name}},[t._v(" "+t._s(e.icon)+" ")]),a("span",{staticClass:"hidden-xs-only subtitle-1"},[t._v(" "+t._s(e.shorten)+" ")])],1)],1)}))],2)],1)},L=[],w={props:{userData:Object,menuList:Array}},y=w,k=a("8212"),$=a("8336"),S=a("62ad"),j=a("0fd9"),A=Object(c["a"])(y,I,L,!1,null,null,null),O=A.exports;v()(A,{VAvatar:k["a"],VBtn:$["a"],VCol:S["a"],VIcon:d["a"],VImg:h["a"],VRow:j["a"],VSheet:C["a"]});var z={components:{leftNavigation:D,topNavigation:O},beforeCreate:function(){this.$store.dispatch("classes/retrieveClassDetail",this.$route.params.classId)},beforeDestroy:function(){this.$store.commit("classes/clearClassDetail")},computed:{userData:function(){return this.$store.getters["user/userData"]},filteredMenuList:function(){return this.userData.isStudent?this.listItems.filter((function(t){return"과목관리"!==t.text})):this.listItems}},data:function(){return{listItems:[{text:"과목정보",shorten:"정보",icon:"mdi-information-outline",route:"classInfo"},{text:"공지사항",shorten:"공지",icon:"mdi-exclamation-thick",route:"classNotice"},{text:"과제물",shorten:"과제",icon:"mdi-clipboard-text",route:"classAssignment"},{text:"질의응답",shorten:"질문",icon:"mdi-comment-question-outline",route:"classQuestion"},{text:"과목관리",shorten:"관리",icon:"mdi-hammer-wrench",route:"classManage"}]}}},M=z,E=a("a523"),N=a("6b53"),R=Object(c["a"])(M,s,i,!1,null,"d7cfb258",null);e["default"]=R.exports;v()(R,{VCol:S["a"],VContainer:E["a"],VResponsive:N["a"],VRow:j["a"],VSheet:C["a"]})}}]);
//# sourceMappingURL=chunk-285e5a6a.5c9d5e66.js.map