import { useRouter } from "next/router";
import React from "react";

const blogId = () => {
  //Next JS treats the square bracket part of the file name as dynamic route.
  //Here [blogId] is dynamic.
  //if I write blog/1 = It will work.
  //Even I write blog/1000 = It will work.

  //*To get the id we will use useRoute hook */
  //useRouter hook returns an object

  //
  const router = useRouter();
  const id = router.query.blogId;
  return (
    <div>
      <h1> Individual Blog Number {id} </h1>
    </div>
  );
};

export default blogId;
