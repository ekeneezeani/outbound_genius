import { useState } from "react";
import "./signup.scss";
import axios from "axios";
import { useAppDispatch } from "../../app/hooks";
import { setLoginState } from "../../features/login/login-slice";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({});
  // console.log(data)
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/addUser", data).then((response) => {
      dispatch(setLoginState(response.data))
      navigate("/");
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const value = e.target.value
    setData({ ...data, [id]: value });
  };
  return (
    <div className="signup">
      <div className="container">
        <span className="title"></span>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            id="firstname"
            placeholder="First name"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            id="lastname"
            placeholder="Last name"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit"> Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
