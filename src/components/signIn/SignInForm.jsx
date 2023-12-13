import React, { useState } from "react";
import "./signInForm.css";

function SignInForm({ email, password }) {
  const [userEmail, setUserEmail] = useState("");
  const [userpassword, setuserPassword] = useState("");

  const signIn = () => {
    const userEmailValue = userEmail;
    const passwordValue = userpassword;

    // console.log("signing in", userEmailValue, passwordValue);
  };
  const handleEmailChange = (event) => {
    setUserEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setuserPassword(event.target.value);
  };

  return (
    <div className="Card">
      <div className="email">
        <h4>Enter Voter Data</h4>
        <label htmlFor="userEmail">Email:</label>
        <input
          type="text"
          value={userEmail}
          id="user-email"
          onChange={handleEmailChange}
        />
      </div>
      <div className="password">
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          value={userpassword}
          id="user-password"
          onChange={handlePasswordChange}
        />
      </div>
      <button className="button" onClick={signIn}>
        Sign In
      </button>
    </div>
  );
}

export default SignInForm;
