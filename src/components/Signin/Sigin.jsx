import { Link } from "react-router-dom";
import "./Sigin.css";
import { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
const Sigin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const sigIn = (e) => {
    //Firesbae login
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        auth && navigate("/");
      })
      .catch((error) => alert(error.message));
  };
  const regiter = (e) => {
    //Firesbae register
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        auth && navigate("/");
      })
      .catch((error) => alert(error.message));
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
      <div className="login-box">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
