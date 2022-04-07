import React from "react";

const blogId = () => {
  //Next JS treats the square bracket part of the file name as dynamic route.
  //Here [blogId] is dynamic.
  //if I write blog/1 = It will work.
  //Even I write blog/1000 = It will work.

  return (
    <div>
      <h1> Individual Blog </h1>
    </div>
  );
};

export default blogId;
