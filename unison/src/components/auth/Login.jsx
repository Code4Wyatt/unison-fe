import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { LoginAuthAction } from "../../redux/actions/AuthAction";
import background_video from "../../media/background-video.mp4"
import google_icon from "../../media/google-icon.png"
import "../../style/style.css";

function Login(props) {

  const { login } = props;
  const { user } = props;
  console.log(user)
  const [loginState, setLoginState] = useState({ });
  
  const navigate = useNavigate();

  const [errorHandler, setErrorHandler] = useState({
    hasError: false,
    message: "",
  });

  const loggedIn = useSelector(state => state.isLoggedIn)
  console.log(loggedIn)
  useEffect(() => {
    const goToTimeline = () => navigate("/timeline");
    if (loggedIn === true) {
      goToTimeline()
    }
  }, [navigate]);

  return (
    <div class="login__container">
      <h1 className="login__title">Unison</h1>
      <h3 className="login__subTitle">Share your content, promote yourself and connect with other musicians!</h3>
      <video autoPlay loop muted className="login__video">
        <source src={ background_video } type="video/mp4" />
      </video>
      
      <div className="sign-in-main">
        
        <div className="container d-flex">
          <div className="sign-in-container py-5 m-auto border">
            <div className="sign-in-header">
              <h4 className="font-weight-bold login__text">Login</h4>
              <p className="sign-in-intro">
                <a href="/register" className="links" ><span className="text-danger font-weight-bold">Sign Up </span></a>
                <span className="">
                  and connect with other musicians!{" "}
                </span>
              </p>
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                login(loginState, navigate, setErrorHandler);
                localStorage.setItem('email', event);
              }}
            >
              <div className="form-group">
                <label for="InputEmail">Email Address</label>
                <input
                  type="email"
                  className="form-control form-control-sm inputs"
                  onChange={(event) => {
                    const email = event.target.value;
                    setLoginState({ ...loginState, ...{ email } });
                    
                  }}
                />
                
              </div>
              <div className="form-group">
                <label for="InputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control form-control-sm inputs"
                  onChange={(event) => {
                    const password = event.target.value;
                    setLoginState({ ...loginState, ...{ password } });
                  }}
                />
              </div>
              <button type="submit" className="btn btn-danger btn-sm auth__submit">
                Login
              </button>
              <div className="login-social-media py-3">
                <button className="btn btn-primary btn-block btn-sm">
                  Continue with Google
                </button>
              </div>
            </form>
            {/* <img src={" google_icon "} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (loginState, history, setErrorHandler) => {
      dispatch(LoginAuthAction(loginState, history, setErrorHandler));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
