(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6816929a"],{6063:function(t,e,n){"use strict";var i=n("fa6d"),s=n.n(i);s.a},e54e:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"result"},t._l(t.members,(function(e){return n("div",{key:e._id,staticClass:"result__item"},[n("div",[n("p",[t._v(t._s(t.getFilterEmail(e.email)))]),n("h3",[t._v(t._s(e.name))])]),n("div",{staticClass:"result__item__information"},[t._v("합격자")])])})),0)},s=[],r=(n("28a5"),n("2b0e")),a=r["a"].extend({data:function(){return{members:[]}},created:function(){var t=this,e=this.getClub.members.filter((function(t){return t.isPass})).map((function(t){return t.user}));this.$store.commit("pushPageLoading",{name:"GET_CLUB_MEMBERS",message:"동아리 멤버 불러오는 중"}),this.$store.dispatch("GET_CLUB_MEMBERS").then((function(n){console.log(n),t.$store.commit("clearPageLoading","GET_CLUB_MEMBERS"),t.members=n.filter((function(t){return-1!=e.indexOf(t._id)}))})).catch((function(t){}))},methods:{getFilterEmail:function(t){var e=t.split("@");return"".concat(e[0].substr(0,e[0].length-2),"**@ ").concat(e[1])}},computed:{getClub:function(){return this.$store.state.club}}}),c=a,u=(n("6063"),n("2877")),o=Object(u["a"])(c,i,s,!1,null,"8f402b04",null);e["default"]=o.exports},fa6d:function(t,e,n){}}]);
//# sourceMappingURL=chunk-6816929a.b446dd56.js.map