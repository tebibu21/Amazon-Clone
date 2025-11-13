import React, { useContext, useState } from "react";
import classes from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import {auth} from "../../Utility/firebase"
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import { ClipLoader } from "react-spinners";
import {DataContext} from "../../components/DataProvider/DataProvider"
import { GiSmallFire } from "react-icons/gi";
import { colors } from "@mui/material";

function Auth() {

  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn:false,
    signUp:false
  });
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();

  const authHandler = async (e) => {
    e.preventDefault();
    if(e.target.name == "signin"){
      setLoading({...loading, signIn:true})
      signInWithEmailAndPassword(auth,email,password)
      .then((userInfo)=>{

        dispatch({
          type: Type.SET_USER,
          user: userInfo.user
        })
        setLoading({ ...loading, signIn: false });
        navigate("/");
      })
      .catch((err)=>{
        setError(err.message);
        setLoading({ ...loading, signIn: false });
      })
    }else{
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth,email,password)
      .then((useInfo)=>{

        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({ ...loading, signIUp: false });
        navigate("/");
      })
      .catch((err)=>{
        setError(err.message);
        setLoading({ ...loading, signIUp: false });
      })
    }
  }

  return (
    <section className={classes.login}>
      {/* logo */}
      <Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      {/* form */}
      <div className={classes.login__container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login__signInButton}
          >
            {loading.signIn ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* agreement */}
        <p>
          By signing in you agree to the AMAZN FAKE CLONE conditions of use &
          sale.Please see our privacy Notice, our Cookies Notice and our
          Interest based ads Notice.
        </p>

        {/* create account btn */}
        <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className={classes.login_registerButton}
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={15}></ClipLoader>
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ color: "red", paddingTop: "5px" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;