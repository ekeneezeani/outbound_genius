import { useState } from "react";
import "./login.scss";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setLoginState } from "../../features/login/login-slice";

const Login = () => {
  const [error, setError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.login.user);

  const handleLogin = (e: Event) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        dispatch(setLoginState(user?.accessToken));

        navigate("/");
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        navigate("/login");
        setError(true);
      });
  };

  return (
    <>
      <div className="login">
        <form onSubmit={(e) => handleLogin(e)}>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit"> Submit</button>

          {error && <span>Incorrect email or password</span>}
        </form>
      </div>
    </>
  );
};

export default Login;
