import React from "react";

const index = () => {
  let name: string;
  let lastName: string | number;
  name = "Sushanta";
  lastName = "Gupta";

  return (
    <div>
      <h1> {`${name} ${lastName}`} </h1>
    </div>
  );
};

export default index;
