import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { RegisterAuthAction } from "../../redux/actions/AuthAction";

function Register(props) {
  const { user, register } = props;
  const [userState, setUserstate] = useState({});
  const history = useNavigate();

  const [errorHandler, setErrorHandler] = useState({
    hasError: false,
    message: "",
  });

  return (
    <div>
      <div className="sign-in-main">
        <div className="container d-flex">
          <div className="sign-in-container py-5 m-auto border">
            <div className="sign-in-header">
              <h4 className="font-weight-bold">Sign Up</h4>
              <p className="sign-in-intro">

                <span className="text-danger font-weight-bold">Sign In</span>
              </p>
              <div className="login-social-media py-3">
                <button className="btn btn-primary btn-block btn-sm">
                  Continue with Google
                </button>
              </div>
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                register(userState, history, setErrorHandler);
              }}
            >
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <label htmlFor="InputEmail">Firstname</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Firstname"
                      onChange={(event) => {
                        const firstname = event.target.value;
                        setUserstate({ ...userState, ...{ firstname } });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <label htmlFor="InputEmail">Surname</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Surname"
                      onChange={(event) => {
                        const surname = event.target.value;
                        setUserstate({ ...userState, ...{ surname } });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="InputEmail">Email address</label>
                <input
                  type="email"
                  placeholder="Email address"
                  className="form-control form-control-sm"
                  onChange={(event) => {
                    const email = event.target.value;
                    setUserstate({ ...userState, ...{ email } });
                  }}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="InputPassword1">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control form-control-sm"
                  onChange={(event) => {
                    const password = event.target.value;
                    setUserstate({ ...userState, ...{ password } });
                  }}
                />
              </div>
              <button type="submit" className="btn btn-danger btn-sm">
                Submit
              </button>
            </form>
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
    register: (userState, history, setErrorHandler) => {
      dispatch(RegisterAuthAction(userState, history, setErrorHandler));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
