"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[299],{299:(e,s,a)=>{a.r(s),a.d(s,{default:()=>F});var n=a(938),t=a(420),r=a(791);const l="Users_users__LV877",o="Users_btn_follow__HOXw9",i="Users_users_content__8nYtx",c="Users_user_name__tOUE6",g="Users_user_data__JM29s",u="Users_users_up__4g9-i";var d=a(55),_=a(87);const h="Paginator_pagination__DGwUI",p="Paginator_selected_number__8Ntjo",P="Paginator_pagination_btn__SB6xW",f="Paginator_pagination_btnLeft__l7DkM",j="Paginator_pagination_btnRight__VX4eA";var x=a(184);const m=e=>{let s=Math.ceil(e.totalUsersCount/e.pageSize),a=[];for(let r=1;r<=s;r++)a.push(r);let n=Math.ceil(s/10),[t,l]=(0,r.useState)(Math.ceil(e.currentPage/10)),o=10*(t-1)+1,i=10*t;return(0,x.jsxs)("div",{className:h,children:[t>1?(0,x.jsx)("span",{children:(0,x.jsx)("button",{className:"".concat(P," ").concat(f),onClick:()=>{1!==t&&l(t-1)}})}):null,a.filter((e=>o<=e&&e<=i)).map((s=>(0,x.jsx)("span",{className:e.currentPage===s?p:"",onClick:a=>{e.onPageChanged(s)},children:s},s))),t<n?(0,x.jsxs)("span",{children:[(0,x.jsx)("button",{className:"".concat(P," ").concat(j),onClick:()=>{t!==s&&l(t+1)}})," "]}):null]})};const w=e=>(0,x.jsxs)("div",{children:[(0,x.jsx)(m,{currentPage:e.currentPage,totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,onPageChanged:e.onPageChanged}),e.users.map((s=>(0,x.jsxs)("div",{className:l,children:[(0,x.jsxs)("div",{className:u,children:[(0,x.jsx)(_.OL,{to:"/profile/"+s.id,children:(0,x.jsx)("img",{src:null!=s.photos.small?s.photos.small:d,alt:"user"})}),(0,x.jsx)("div",{children:s.followed?(0,x.jsx)("button",{disabled:e.followingInProgress.some((e=>e===s.id)),className:o,onClick:()=>{e.unfollow(s.id)},children:"Unfollow"}):(0,x.jsx)("button",{disabled:e.followingInProgress.some((e=>e===s.id)),className:o,onClick:()=>{e.follow(s.id)},children:"Follow"})})]}),(0,x.jsx)("div",{className:i,children:(0,x.jsxs)("div",{className:g,children:[(0,x.jsx)("p",{className:c,children:s.name}),(0,x.jsx)("p",{children:s.status})]})})]},s.id)))]});var C=a(765),U=a(291),b=a(154);const v=e=>e.usersPage.users,N=e=>e.usersPage.pageSize,S=e=>e.usersPage.totalUsersCount,k=e=>e.usersPage.currentPage,z=e=>e.usersPage.isFetching,I=e=>e.usersPage.followingInProgress;const F=(0,b.qC)((0,t.$j)((e=>({users:v(e),pageSize:N(e),totalUsersCount:S(e),currentPage:k(e),isFetching:z(e),followingInProgress:I(e)})),{setCurrentPage:n.D4,getUsers:n.Uk,follow:n.ZN,unfollow:n.fv,setUsers:n.HM,toggleIsFetching:n.MO,pageChanged:n.PJ}),U.S)((e=>{(0,r.useEffect)((()=>{e.getUsers(e.currentPage,e.pageSize)}),[]);return(0,x.jsxs)(x.Fragment,{children:[e.isFetching?(0,x.jsx)(C.Z,{}):null,(0,x.jsx)(w,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:s=>{e.pageChanged(s,e.pageSize)},users:e.users,followingInProgress:e.followingInProgress,follow:e.follow,unfollow:e.unfollow})]})}))},291:(e,s,a)=>{a.d(s,{S:()=>o});a(791);var n=a(689),t=a(420),r=a(184);let l=e=>({isAuth:e.auth.isAuth});const o=e=>(0,t.$j)(l)((s=>s.isAuth?(0,r.jsx)(e,{...s}):(0,r.jsx)(n.Fg,{to:"/login/"})))},55:(e,s,a)=>{e.exports=a.p+"static/media/user.3356af717b858f4a96d4.png"}}]);
//# sourceMappingURL=299.a3edaf37.chunk.js.map