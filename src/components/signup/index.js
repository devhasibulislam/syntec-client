import React, { useState } from "react";
import {
  SignupContainer,
  SignupWrapper,
  SignupP,
  SignupInput,
} from "./SignupElements";

const Signup = () => {
  const [avatar, setAvatar] = useState("");

  // upload avatar to server
  function handleAvatarUpload(event) {
    const formData = new FormData();
    formData.append("avatar", event.target.files[0]);

    const postUserAvatar = async () => {
      const request = await fetch(`http://localhost:8080/avatar/`, {
        method: "POST",
        body: formData,
      });
      const response = await request.json();
      setAvatar(response.data);
      if (response.success) {
        // return toast.success("avatar uploaded successfully.");
        console.log("Avatar uploaded successfully.");
      }
    };
    postUserAvatar();
  }

  // upload user info to server
  function handleRegistration(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const userInfo = { name, email, password, avatar };
    // console.log(userInfo);

    const postAnUser = async () => {
      const request = await fetch(`http://localhost:8080/user/signup`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const response = await request.json();
      if (response.acknowledgement) console.log(response);
    };
    postAnUser();

    event.target.reset();
  }

  return (
    <SignupContainer>
      <SignupWrapper className="py-5 px-5">
        <div className="my-auto">
          <h3 className="center-align mb-5">Sign Up to your Account</h3>
          <form onSubmit={handleRegistration}>
            <SignupP>Name</SignupP>
            <SignupInput
              type="text"
              name="name"
              placeholder="Enter your name..."
            />
            <SignupP>Email</SignupP>
            <SignupInput
              type="email"
              name="email"
              placeholder="Enter your email..."
            />
            <SignupP>Password</SignupP>
            <SignupInput
              type="password"
              name="password"
              placeholder="Enter your password..."
            />
            <div className="mb-3">
              <label for="formFile" className="form-label">
                <b>Upload your avatar</b>
              </label>
              <input
                className="form-control"
                type="file"
                name="avatar"
                id="formFile"
                accept=".png, .jpg, jpeg"
                onChange={handleAvatarUpload}
              />
            </div>
            <button type="submit" className="my-3 px-5 btn btn-outline-dark">
              Continue
            </button>
          </form>
        </div>
      </SignupWrapper>
    </SignupContainer>
  );
};

export default Signup;
