(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0851c57c"],{"0560":function(t,a,e){},2048:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("div",{staticClass:"submenu"},[e("div",{staticClass:"submenu__list"},[e("router-link",{staticClass:"submenu__list__item",attrs:{to:{name:"page/timeline"}}},[t._v("타임라인")]),e("router-link",{staticClass:"submenu__list__item",attrs:{to:{name:"page/awards"}}},[t._v("수상실적")]),e("router-link",{staticClass:"submenu__list__item",attrs:{to:{name:"page/members"}}},[t._v("멤버소개")]),e("router-link",{staticClass:"submenu__list__item",attrs:{to:{name:"page/budgets"}}},[t._v("예산공개")]),e("router-link",{staticClass:"submenu__list__item",attrs:{to:{name:"page/applicant/main"}}},[t._v("채용")])],1),e("transition",{attrs:{name:"toploadingAnimation"}},[t.isTopLoading?e("TopLoadingBar",{staticClass:"submenu__loading"}):t._e()],1)],1),e("div",{ref:"page__content",staticClass:"page__content"},[e("transition",{attrs:{name:"routerfade-animation"}},[t.isLocalLoading?t._e():e("router-view")],1)],1)])},n=[],i=(e("7f7f"),e("2b0e")),o=e("d976"),r=i["a"].extend({name:"Page",components:{TopLoadingBar:o["a"]},data:function(){return{isLocalLoading:!1}},created:function(){var t=this;this.getClub.name&&this.getClub.name.toLowerCase()==this.$route.params.club.toLowerCase()||(this.$store.commit("pushLoading",{name:"GET_CLUB",message:"동아리 불러오는 중"}),this.isLocalLoading=!0,this.$store.dispatch("GET_CLUB",this.$route.params.club).then((function(a){t.$store.commit("clearLoading","GET_CLUB"),t.isLocalLoading=!1,a||t.$router.push("/")})).catch((function(a){t.$store.commit("clearLoading","GET_CLUB"),t.isLocalLoading=!1,t.$router.push("/")})))},watch:{$route:function(){this.$refs.page__content.scrollTop=0}},computed:{isTopLoading:function(){return this.$store.state.pageLoadingStack.length>0},isLoading:function(){return this.$store.state.loadingStack.length>0},getClub:function(){return this.$store.state.club}}}),u=r,c=(e("5ee9"),e("2877")),l=Object(c["a"])(u,s,n,!1,null,null,null);a["default"]=l.exports},"5ee9":function(t,a,e){"use strict";var s=e("0560"),n=e.n(s);n.a}}]);
//# sourceMappingURL=chunk-0851c57c.fd87ade4.js.map