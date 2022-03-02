import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

const AuthRoute = props => {
  const { isLoggedIn } = props;
  if (isLoggedIn === "true" && isAuthUser) return <Redirect to="/timeline" />;
  else if (type === "private" && !isAuthUser) return <Redirect to="/" />;

  return <Route {...props} />;
};

const mapStateToProps = ({ isAuthUser }) => ({
  isAuthUser
});

export default connect(mapStateToProps)(AuthRoute);