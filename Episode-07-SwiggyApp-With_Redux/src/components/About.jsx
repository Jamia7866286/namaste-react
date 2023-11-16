import React, { useContext } from "react";
import AuthContext from "../utils/context/authContext";

const About = () => {
  const { logInUser } = useContext(AuthContext);
  return (
    <>
      <div>About</div>
    </>
  );
};

export default About;
