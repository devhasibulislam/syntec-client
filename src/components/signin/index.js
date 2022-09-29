import React from "react";
import {
  SigninContainer,
  SigninWrapper,
  SigninP,
  SigninInput,
} from "./SigninElements";

const Signin = () => {
  function handleLogin(event) {
    event.preventDefault();

    const userInfo = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    // console.log(userInfo);

    const postAnUser = async () => {
      const request = await fetch(`http://localhost:8080/user/signin`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const response = await request.json();
      if (response.acknowledgement) {
        console.log(response);
        window.location.replace("http://localhost:3000/");
      }
    };
    postAnUser();

    event.target.reset();
  }

  return (
    <SigninContainer>
      <SigninWrapper className="py-5 px-5">
        <div className="my-auto">
          <h3 className="center-align mb-5">Sign In to your Account</h3>
          <form onSubmit={handleLogin}>
            <SigninP>Email</SigninP>
            <SigninInput
              type="text"
              name="email"
              placeholder="Enter your email..."
            />
            <SigninP>Password</SigninP>
            <SigninInput
              type="password"
              name="password"
              placeholder="Enter your password..."
            />
            <button type="submit" className="mt-3 px-5 btn btn-outline-dark">
              Continue
            </button>
          </form>
        </div>
      </SigninWrapper>
    </SigninContainer>
  );
};

export default Signin;
