// import axios from "axios"; //работа с сервером(библиотека)
// import React from "react"; //для классов
// import UsersFunc from "./UsersFunc";

// class UsersAPI extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   // }
//   componentDidMount() {
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
//       )
//       .then((response) => {
//         this.props.setUsers(response.data.items);
//         this.props.setTotalUsersCount(response.data.totalCount);
//       });
//   }
//   onPageChanged = (pageNumber) => {
//     this.props.setCurrentPage(pageNumber);
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
//       )
//       .then((response) => {
//         this.props.setUsers(response.data.items);
//       });
//   };
//   render() {
//     return (
//       <UsersFunc
//         totalUsersCount={this.props.totalUsersCount}
//         pageSize={this.props.pageSize}
//         currentPage={this.props.currentPage}
//         onPageChanged={this.onPageChanged}
//         users={this.props.users}
//         follow={this.props.follow}
//         unfollow={this.props.unfollow}
//       />
//     );
//   }
// }

//функциональная
// const Users = (props) => {
//   let getUsers = () => {
//     if (props.users.length === 0) {
//       axios
//         .get("https://social-network.samuraijs.com/api/1.0/users")
//         .then((response) => {
//           props.setUsers(response.data.items);
//         });
//     }
//   };
//   return (
//     <div>
//       <button onClick={getUsers}>Get Users</button>
//       {props.users.map((u) => {
//         return (
//           <div key={u.id} className={s.users}>
//             <div>
//               <img
//                 src={u.photos.small != null ? u.photos.small : userImg}
//                 alt="user"
//               />
//               <div>
//                 {u.followed ? (
//                   <button
//                     className={s.btn_follow}
//                     onClick={() => {
//                       props.unfollow(u.id);
//                     }}
//                   >
//                     Unfollow
//                   </button>
//                 ) : (
//                   <button
//                     className={s.btn_follow}
//                     onClick={() => {
//                       props.follow(u.id);
//                     }}
//                   >
//                     Follow
//                   </button>
//                 )}
//               </div>
//             </div>
//             <div className={s.users_content}>
//               <div className={s.user_data}>
//                 <p className={s.user_name}>{u.name}</p>
//                 <p>{u.status}</p>
//               </div>
//               <div className={s.user_data}>
//                 <p className={s.user_location}>u.location.county</p>
//                 <p className={s.user_location}>u.location.city</p>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default UsersAPI;
