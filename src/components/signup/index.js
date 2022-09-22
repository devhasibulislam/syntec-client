import React from "react";
import {
  SignupContainer,
  SignupWrapper,
  SignupP,
  SignupInput,
} from "./SignupElements";
import { Button } from "../ButtonElements";

const Signup = () => {
  return (
    <SignupContainer>
      <SignupWrapper className="py-5 px-5">
        <div className="my-auto">
          <h3 className="center-align mb-5">Sign Up to your Account</h3>
          <form>
            <SignupP>Name</SignupP>
            <SignupInput
              name="name"
              type="text"
              placeholder="Enter your name..."
            />
            <SignupP>Email</SignupP>
            <SignupInput
              name="email"
              type="text"
              placeholder="Enter your email..."
            />
            <SignupP>Password</SignupP>
            <SignupInput
              name="password"
              type="password"
              placeholder="Enter your password..."
            />
            <div className="mb-3">
              <label for="formFile" className="form-label">
                <b>Upload your avatar</b>
              </label>
              <input className="form-control" type="file" id="formFile" />
            </div>
            <Button className="mt-5 mb-3">Continue</Button>
          </form>
        </div>
      </SignupWrapper>
    </SignupContainer>
  );
};

export default Signup;
