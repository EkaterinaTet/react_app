import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToPropsForNavigate = (state) => ({ isAuth: state.auth.isAuth });

export const withAuthNavigate = (Component) => {
  const NavigateComponent = (props) => {
    if (!props.isAuth) {
      return <Navigate to={"/login/"} />;
    } else {
      return <Component {...props} />;
    }
  };
  let ConnectedAuthNavigateComponent = connect(mapStateToPropsForNavigate)(
    NavigateComponent
  );

  return ConnectedAuthNavigateComponent;
};
