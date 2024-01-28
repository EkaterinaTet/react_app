import { applyMiddleware, combineReducers, legacy_createStore } from "redux"; //{ legacy_createStore } вместо createStore
import profileReducer from "./profile-reducer";
import chatReducer from "./chat-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import { thunk as thunkMiddleware } from "redux-thunk";
import appReducer from "./app-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  chatPage: chatReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

// window.store = store;
