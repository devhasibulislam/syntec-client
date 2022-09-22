import React, { useState } from "react";
import Footer from "../components/footer";
import Signup from "../components/signup";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

const SignupPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Signup />
      <Footer />
    </>
  );
};

export default SignupPage;
