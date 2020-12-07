import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { useStateValue } from "../../Context/StateProvider";
import { actionTypes } from "../../Context/reducer";
import { auth, Google__provider } from "../../firebase";

function Login() {
  const [{}, dispatch] = useStateValue();

  const GsignIn = () => {
    auth
      .signInWithPopup(Google__provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div
        className="login__container"
        onMouseEnter={(e) => {
          document.querySelector(".login__card").style.transition = "none";
          document.querySelector(".login__logo").style.transform =
            "translateZ(150px) rotateZ(-360deg)";
        }}
        onMouseMove={(e) => {
          let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
          let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
          document.querySelector(
            ".login__card"
          ).style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }}
        onMouseLeave={(e) => {
          document.querySelector(
            ".login__card"
          ).style.transform = `rotateY(0deg) rotateX(0deg)`;
          document.querySelector(".login__card").style.transition =
            "all 0.5s ease";
          document.querySelector(".login__logo").style.transform =
            "translateZ(220px) rotateZ(0deg)";
        }}
      >
        <div className="login__card">
          <div className="login__area">
            <div className="login__circle"></div>
            <img
              className="login__logo"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/100px-Twitter_bird_logo_2012.svg.png"
              alt=""
            />
          </div>
          <div className="login__textArea">
            <div className="login__text">
              <h1 className="login__hello">Hello,</h1>
              <div className="login__Ano__Container">
                <h1 className="login__anonymous">Anonymous</h1>
              </div>
              <h1 className="login__please">Lets be friendly,</h1>
              <br />
              <h1 className="login__please">Sign In to use the App</h1>
            </div>
            <div className="signIn__Button">
              <Button
                variant="outlined"
                className="signin__btn"
                color="primary"
                onClick={GsignIn}
              >
                <img
                  className="signIn__logo"
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt=""
                />
                <p className="sign__btnText">Sign In with Google</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
