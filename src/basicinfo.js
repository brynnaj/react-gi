import React from "react";

const BasicInfo = ({ person }) => (
  <div>
    <h2>{person.name}</h2>
    <p>Number: {person.number}</p>
    <p>Date of Birth: {person.dateOfBirth}</p>
  </div>
);

export default BasicInfo;