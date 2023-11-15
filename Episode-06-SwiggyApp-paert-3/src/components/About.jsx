import React, { useContext } from "react";
import AuthContext from "../utils/context/authContext";

const About = () => {
  const { logInUser } = useContext(AuthContext);
  return (
    <>
      <div>About</div>
      <h1>Login User : <strong>{logInUser}</strong></h1>
    </>
  );
};

export default About;
