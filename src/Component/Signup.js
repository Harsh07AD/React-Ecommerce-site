import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

export default function Signup() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassowrd, setRegisterPassword] = useState("");

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassowrd
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container form-div">
      <main className="form-signin m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal text-center">Ecommerce-Sign-up</h1>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingName"
              placeholder="Name"
            />
            <label htmlFor="floatingName">Full Name</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
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
                setRegisterPassword(event.target.value);
              }}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button
            onClick={signUp}
            className="w-100 btn btn-lg btn-primary"
            type="submit"
          >
            Signup
          </button>
        </form>
      </main>
    </div>
  );
}
