import React, { useState } from "react";
import axios from "axios";
import cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Users() {
  let navigate = useNavigate();

  const [state, setState] = useState({
    userName: "",
    password: "",
    error: "",
  });
  const { userName, password, error } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://admin.incheonicrm.in:8080/token/`, {
        email: userName,
        password: password,
      });
      console.log(res);

      cookies.set("token", res.data.access, { expires: 2 });
      navigate("/admin");
    } catch (err) {
      setState({
        ...state,
        error: "your password or email is incorrect",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          username
          <input
            onChange={(e) => {
              setState({ ...state, userName: e.target.value });
            }}
            type={"text"}
            value={userName}
          />
        </div>

        <div>
          password
          <input
            type={"password"}
            onChange={(e) => {
              setState({ ...state, password: e.target.value });
            }}
            value={password}
          />
        </div>
        <p>{error}</p>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Users;
