import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { firstname, lastname } = useParams();
  return (
    <h1>
      User {firstname} {lastname}{" "}
    </h1>
  );
}

export default User;
