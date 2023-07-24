import { Link } from "react-router-dom";
import "./Sigin.css";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { signin } from "../../userSlice";
import { useDispatch } from "react-redux";

const Sigin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const sigIn = (e) => {
    //Firesbae login
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // console.log(userCredintial.user);
        if (userCredential) {
          dispatch(signin(userCredential.user));
          navigate("/");
        }
      })
      .catch((error) => {
        // error.code == "auth/invalid-email" && alert(error.code.split("/")[1]);
        setError(error.code);
      });
  };
  const regiter = (e) => {
    //Firesbae register
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        if (userCredential) {
          dispatch(signin(userCredential.user));
          navigate("/");
        } else {
          alert("Don't have an account create one");
        }
      })
      .catch((error) => {
        console.log(error.code);
        // ..
      });
    navigate("/");
  };
  return (
    <div className="signin">
      <Link to="/">
        <img
          className="signin-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="logo"
        />
      </Link>
      {error && (
        <div className="wrongSignIn">
          <WarningAmberIcon />
          <p>We cannot find an account with that email address</p>
        </div>
      )}
      <div className="login-box">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="signin-button" type="submit" onClick={sigIn}>
            continue
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon Clone Conditions of Use and Privacy
          Notice.
        </p>
        <hr />
        <p className="new">New to Amazon ?</p>
        <button className="register" onClick={regiter}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Sigin;
