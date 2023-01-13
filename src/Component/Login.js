import React, { useState } from "react";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  const Login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  // const Logout = async()=>{
  //   await signOut(auth)
  // }

  return (
    <div className="container form-div">
      <main className="form-signin m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal text-center">Ecommerce Login</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button
            onClick={Login}
            className="w-100 btn btn-lg btn-primary"
            type="submit"
          >
            Login
          </button>
          {/* <h4>User Login</h4>
          {user?.email} */}
          {/* <button onClick={Logout} className="btn btn-lg btn-primary">Logout</button> */}
        </form>
      </main>
    </div>
  );
}
