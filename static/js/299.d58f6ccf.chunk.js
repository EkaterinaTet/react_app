"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[299],{299:(s,e,t)=>{t.r(e),t.d(e,{default:()=>M});var n=t(938),a=t(420),o=t(791);const r="Users_users__LV877",l="Users_btn_follow__HOXw9",i="Users_users_content__8nYtx",g="Users_user_name__tOUE6",c="Users_user_data__JM29s";var p=t(55),u=t(87);const h="Paginator_pagination__DGwUI",d="Paginator_selected_number__8Ntjo",_="Paginator_pagination_btn__SB6xW",P="Paginator_pagination_btnLeft__l7DkM",x="Paginator_pagination_btnRight__VX4eA";var f=t(184);const j=s=>{let e=Math.ceil(s.totalUsersCount/s.pageSize),t=[];for(let o=1;o<=e;o++)t.push(o);let n=Math.ceil(e/10),[a,r]=(0,o.useState)(Math.ceil(s.currentPage/10)),l=10*(a-1)+1,i=10*a;return(0,f.jsxs)("div",{className:h,children:[a>1?(0,f.jsx)("span",{children:(0,f.jsx)("button",{className:"".concat(_," ").concat(P),onClick:()=>{1!==a&&r(a-1)}})}):null,t.filter((s=>l<=s&&s<=i)).map((e=>(0,f.jsx)("span",{className:s.currentPage===e?d:"",onClick:t=>{s.onPageChanged(e)},children:e},e))),a<n?(0,f.jsxs)("span",{children:[(0,f.jsx)("button",{className:"".concat(_," ").concat(x),onClick:()=>{a!==e&&r(a+1)}})," "]}):null]})};const C=s=>(0,f.jsxs)("div",{children:[(0,f.jsx)(j,{currentPage:s.currentPage,totalUsersCount:s.totalUsersCount,pageSize:s.pageSize,onPageChanged:s.onPageChanged}),s.users.map((e=>(0,f.jsxs)("div",{className:r,children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(u.OL,{to:"/profile/"+e.id,children:(0,f.jsx)("img",{src:null!=e.photos.small?e.photos.small:p,alt:"user"})}),(0,f.jsx)("div",{children:e.followed?(0,f.jsx)("button",{disabled:s.followingInProgress.some((s=>s===e.id)),className:l,onClick:()=>{s.unfollow(e.id)},children:"Unfollow"}):(0,f.jsx)("button",{disabled:s.followingInProgress.some((s=>s===e.id)),className:l,onClick:()=>{s.follow(e.id)},children:"Follow"})})]}),(0,f.jsx)("div",{className:i,children:(0,f.jsxs)("div",{className:c,children:[(0,f.jsx)("p",{className:g,children:e.name}),(0,f.jsx)("p",{children:e.status})]})})]},e.id)))]});var m=t(765),w=t(291),U=t(154);const b=s=>s.usersPage.users,v=s=>s.usersPage.pageSize,S=s=>s.usersPage.totalUsersCount,N=s=>s.usersPage.currentPage,k=s=>s.usersPage.isFetching,z=s=>s.usersPage.followingInProgress;class I extends o.Component{constructor(){super(...arguments),this.onPageChanged=s=>{this.props.pageChanged(s,this.props.pageSize)}}componentDidMount(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}render(){return(0,f.jsxs)(f.Fragment,{children:[this.props.isFetching?(0,f.jsx)(m.Z,{}):null,(0,f.jsx)(C,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,followingInProgress:this.props.followingInProgress,follow:this.props.follow,unfollow:this.props.unfollow})]})}}const M=(0,U.qC)((0,a.$j)((s=>({users:b(s),pageSize:v(s),totalUsersCount:S(s),currentPage:N(s),isFetching:k(s),followingInProgress:z(s)})),{setCurrentPage:n.D4,getUsers:n.Uk,follow:n.ZN,unfollow:n.fv,setUsers:n.HM,toggleIsFetching:n.MO,pageChanged:n.PJ}),w.S)(I)},291:(s,e,t)=>{t.d(e,{S:()=>l});t(791);var n=t(689),a=t(420),o=t(184);let r=s=>({isAuth:s.auth.isAuth});const l=s=>(0,a.$j)(r)((e=>e.isAuth?(0,o.jsx)(s,{...e}):(0,o.jsx)(n.Fg,{to:"/login/"})))},55:(s,e,t)=>{s.exports=t.p+"static/media/user.3356af717b858f4a96d4.png"}}]);
//# sourceMappingURL=299.d58f6ccf.chunk.js.map