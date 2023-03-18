import React from "react";
import { useLocation, useHistory } from "react-router-dom";

function About() {
  const location = useLocation();
  const history = useHistory();
  console.log(history);

  function goBackHandler() {
    history.goBack();
  }

  return (
    <>
      <h1>About</h1>
      <h2>Location = {location.pathname}</h2>
      <h2>Location = {location.state.from}</h2>
      <button onClick={goBackHandler}>Go back</button>
    </>
  );
}

export default About;
