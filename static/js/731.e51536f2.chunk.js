"use strict";(self.webpackChunkmy_tweets_app=self.webpackChunkmy_tweets_app||[]).push([[731],{4731:function(e,n,r){r.r(n),r.d(n,{default:function(){return D}});var t=r(9439),l=r(2791),a=r(9434),s=r(1087),i=r(8683);function o(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=r(5861),u=r(7757),f=r.n(u),d="Button_btn__1CTch",h=r(184),_=function(e){var n=e.children,r=e.type,t=void 0===r?"submit":r,l=e.onClick,a=e.additionalClassName;return(0,h.jsx)("button",{className:"".concat(d," ").concat(a),onClick:l,type:t,children:n})},m=r(4403),v=r(3429),w="UserItem_userCard__+A49l",g="UserItem_icon__dY6Nv",x="UserItem_thumb__4-+Mo",j="UserItem_avatar__tjaaL",p="UserItem_infoBlock__C80MO",b="UserItem_text__fonGq",C="UserItem_followingBtn__VzFCr",N=function(e){var n,r=e.id,s=(e.user,e.avatar),i=e.tweets,o=e.followers,u=e.isFollowing,d=(0,l.useState)(u),N=(0,t.Z)(d,2),y=N[0],k=N[1],Z=(0,l.useState)(o),T=(0,t.Z)(Z,2),U=T[0],F=T[1],I=(0,a.I0)(),O=function(){var e=(0,c.Z)(f().mark((function e(n,r,t){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{k((function(e){return!e})),F(r?function(e){return e+1}:function(e){return e-1}),I((0,v.z)({id:n,isUserFollowing:r,followers:t}))}catch(l){console.log(l.message)}case 1:case"end":return e.stop()}}),e)})));return function(n,r,t){return e.apply(this,arguments)}}();return(0,h.jsxs)("li",{className:w,children:[(0,h.jsx)(m.Z,{className:g}),(0,h.jsx)("div",{className:x,children:(0,h.jsx)("img",{src:s,alt:"User avatar",className:j})}),(0,h.jsxs)("div",{className:p,children:[(0,h.jsxs)("p",{className:b,children:[i," TWEETS"]}),(0,h.jsxs)("p",{className:b,children:[(n=U,0===n?n:n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))," FOLLOWERS"]}),(0,h.jsx)(_,{onClick:function(){return O(r,!y,o)},additionalClassName:y?C:"",children:y?"following":"follow"})]})]})},y="UsersList_list__xF1eK",k=["id"],Z=function(e){var n=e.users.map((function(e){var n=e.id,r=o(e,k);return(0,h.jsx)(N,(0,i.Z)({id:n},r),n)}));return(0,h.jsx)("ul",{className:y,children:n})},T=Z;Z.defaultProps={users:[]};var U="TextField_label__zuNih",F=["label","handleChange"],I=function(e){var n=e.label,r=e.handleChange,t=o(e,F);return(0,h.jsx)("div",{children:(0,h.jsxs)("label",{className:U,children:[n," ",(0,h.jsx)("input",(0,i.Z)({onChange:r},t))]})})},O=function(e){return e.filter},S=r(5653),P={showAll:{type:"radio",name:"filter",label:"show all",value:"show all"},follow:{type:"radio",name:"filter",label:"follow",value:"follow"},followings:{type:"radio",name:"filter",label:"followings",value:"followings"}},B="Filter_form__HlvEq",E=function(){var e=(0,a.v9)(O),n=(0,a.I0)(),r=function(e){var r=e.currentTarget.value;return n((0,S.T)(r))};return(0,h.jsxs)("form",{className:B,children:[(0,h.jsx)(I,(0,i.Z)((0,i.Z)({},P.showAll),{},{handleChange:r,checked:e.includes("show all")})),(0,h.jsx)(I,(0,i.Z)((0,i.Z)({},P.follow),{},{handleChange:r})),(0,h.jsx)(I,(0,i.Z)((0,i.Z)({},P.followings),{},{handleChange:r}))]})},L=r(643),z=function(){return(0,h.jsx)(L.g4,{height:"90",width:"90",radius:"9",color:"#EBD8FF",ariaLabel:"three-dots-loading",wrapperStyle:{justifyContent:"center"},wrapperClassName:"",visible:!0})},G=function(e){var n=e.users,r=n.items,t=n.following,l=e.filter;return"show all"===l?r:"follow"===l?r.filter((function(e){var n=e.id;return t.every((function(e){return e.id!==n}))})):"followings"===l?t:void 0},q=function(e){return e.users.isLoading},A="TweetsPage_section__d2zrn",M="TweetsPage_container__Tqs0H",W="TweetsPage_btnWrapper__MU4ui",H="TweetsPage_back__0eBjx",V="TweetsPage_adlBtn__GbGx3",D=function(){var e=(0,l.useState)(1),n=(0,t.Z)(e,2),r=n[0],i=n[1],o=(0,l.useState)(!1),c=(0,t.Z)(o,2),u=c[0],f=c[1],d=(0,l.useState)("show all"),m=(0,t.Z)(d,2),w=m[0],g=m[1],x=(0,a.I0)(),j=(0,a.v9)(G),p=(0,a.v9)(q);(0,l.useEffect)((function(){x((0,v.u)(r))}),[x,r]);return(0,h.jsx)("div",{className:A,children:(0,h.jsxs)("div",{className:M,children:[(0,h.jsxs)("div",{className:W,children:[(0,h.jsx)(s.rU,{to:"/",className:H,children:"Go back"}),(0,h.jsx)(_,{onClick:function(){f((function(e){return!e}))},additionalClassName:V,children:"Filter"})," ",u&&(0,h.jsx)(E,{filterValue:w,handleChangeFilter:function(e){var n=e.currentTarget.value;console.log(n),g(n)}})]}),j.length>0&&(0,h.jsx)(T,{users:j}),p&&(0,h.jsx)(z,{}),j.length>0&&!p&&(0,h.jsx)(_,{onClick:function(){i((function(e){return e+1}))},additionalClassName:V,children:"Load more"})]})})}}}]);
//# sourceMappingURL=731.e51536f2.chunk.js.map