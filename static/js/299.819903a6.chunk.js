"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[299],{299:(s,e,n)=>{n.r(e),n.d(e,{default:()=>F});var t=n(938),a=n(420),o=n(791);const r="Users_users__LV877",l="Users_btn_follow__HOXw9",i="Users_users_content__8nYtx",c="Users_user_name__tOUE6",g="Users_user_data__JM29s",u="Users_user_location__TS6m2";var p=n(55),h=n(87);const d="Paginator_pagination__DGwUI",_="Paginator_selected_number__8Ntjo",P="Paginator_pagination_btn__SB6xW",x="Paginator_pagination_btnLeft__l7DkM",j="Paginator_pagination_btnRight__VX4eA";var m=n(184);const f=s=>{let e=Math.ceil(s.totalUsersCount/s.pageSize),n=[];for(let o=1;o<=e;o++)n.push(o);let t=Math.ceil(e/10),[a,r]=(0,o.useState)(Math.ceil(s.currentPage/10)),l=10*(a-1)+1,i=10*a;return(0,m.jsxs)("div",{className:d,children:[a>1?(0,m.jsx)("span",{children:(0,m.jsx)("button",{className:"".concat(P," ").concat(x),onClick:()=>{1!==a&&r(a-1)}})}):null,n.filter((s=>l<=s&&s<=i)).map((e=>(0,m.jsx)("span",{className:s.currentPage===e?_:"",onClick:n=>{s.onPageChanged(e)},children:e}))),a<t?(0,m.jsxs)("span",{children:[(0,m.jsx)("button",{className:"".concat(P," ").concat(j),onClick:()=>{a!==e&&r(a+1)}})," "]}):null]})};const C=s=>(0,m.jsxs)("div",{children:[(0,m.jsx)(f,{currentPage:s.currentPage,totalUsersCount:s.totalUsersCount,pageSize:s.pageSize,onPageChanged:s.onPageChanged}),s.users.map((e=>(0,m.jsxs)("div",{className:r,children:[(0,m.jsxs)("div",{children:[(0,m.jsx)(h.OL,{to:"/profile/"+e.id,children:(0,m.jsx)("img",{src:null!=e.photos.small?e.photos.small:p,alt:"user"})}),(0,m.jsx)("div",{children:e.followed?(0,m.jsx)("button",{disabled:s.followingInProgress.some((s=>s===e.id)),className:l,onClick:()=>{s.unfollow(e.id)},children:"Unfollow"}):(0,m.jsx)("button",{disabled:s.followingInProgress.some((s=>s===e.id)),className:l,onClick:()=>{s.follow(e.id)},children:"Follow"})})]}),(0,m.jsxs)("div",{className:i,children:[(0,m.jsxs)("div",{className:g,children:[(0,m.jsx)("p",{className:c,children:e.name}),(0,m.jsx)("p",{children:e.status})]}),(0,m.jsxs)("div",{className:g,children:[(0,m.jsx)("p",{className:u,children:"u.location.county"}),(0,m.jsx)("p",{className:u,children:"u.location.city"})]})]})]},e.id)))]});var w=n(765),U=(n(958),n(291)),N=n(154);const b=s=>s.usersPage.users,v=s=>s.usersPage.pageSize,S=s=>s.usersPage.totalUsersCount,k=s=>s.usersPage.currentPage,z=s=>s.usersPage.isFetching,I=s=>s.usersPage.followingInProgress;class M extends o.Component{constructor(){super(...arguments),this.onPageChanged=s=>{this.props.pageChanged(s,this.props.pageSize)}}componentDidMount(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}render(){return(0,m.jsxs)(m.Fragment,{children:[this.props.isFetching?(0,m.jsx)(w.Z,{}):null,(0,m.jsx)(C,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,followingInProgress:this.props.followingInProgress,follow:this.props.follow,unfollow:this.props.unfollow})]})}}const F=(0,N.qC)((0,a.$j)((s=>({users:b(s),pageSize:v(s),totalUsersCount:S(s),currentPage:k(s),isFetching:z(s),followingInProgress:I(s)})),{setCurrentPage:t.D4,getUsers:t.Uk,follow:t.ZN,unfollow:t.fv,setUsers:t.HM,toggleIsFetching:t.MO,pageChanged:t.PJ}),U.S)(M)},291:(s,e,n)=>{n.d(e,{S:()=>l});n(791);var t=n(689),a=n(420),o=n(184);let r=s=>({isAuth:s.auth.isAuth});const l=s=>(0,a.$j)(r)((e=>e.isAuth?(0,o.jsx)(s,{...e}):(0,o.jsx)(t.Fg,{to:"/login/"})))},55:(s,e,n)=>{s.exports=n.p+"static/media/user.3356af717b858f4a96d4.png"}}]);
//# sourceMappingURL=299.819903a6.chunk.js.map