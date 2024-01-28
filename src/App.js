import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { lazy, useEffect } from "react";
import { initializeApp } from "./redux/app-reducer";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import withSuspense from "./hoc/withSuspense";
//import ChatContainer from "./components/Chat/ChatContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
//import UsersContainer from "./components/Users/UsersContainer";
const ChatContainer = lazy(() => import("./components/Chat/ChatContainer"));
const ProfileContainer = lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));

const ChatContainerWithSuspense = withSuspense(ChatContainer);
const ProfileContainerWithSuspense = withSuspense(ProfileContainer);
const UsersContainerWithSuspense = withSuspense(UsersContainer);

function App(props) {
  useEffect(() => {
    props.initializeApp();
    // axios
    //   .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    //     withCredentials: true,
    //   })

    // usersAPI.headerAuthMe().then((data) => {
    //   if (data.resultCode == 0) {
    //     let { id, email, login } = data.data;
    //     this.props.setUserData(id, email, login);
    //   }
    // });
  }, []);

  if (!props.initialized) {
    return <Preloader />;
  }
  return (
    <div className="App_wrapper">
      <HeaderContainer />
      <div className="App_content">
        <Navbar />
        <div className="profile_content">
          <Routes>
            <Route
              path="/profile/:userId?"
              element={<ProfileContainerWithSuspense />}
            />
            <Route path="/chat/*" element={<ChatContainerWithSuspense />} />

            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/users" element={<UsersContainerWithSuspense />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
let AppContainer = compose(connect(mapStateToProps, { initializeApp }))(App);

const MainApp = (props) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer
        // dispatch={store.dispatch.bind(store)}
        // state={state}
        // store={store}
        />
      </Provider>
    </HashRouter>
  );
};
export default MainApp;
