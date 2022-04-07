import Link from "next/link";
import React from "react";

const index = () => {
  const blogId = 1;
  return (
    <div>
      <h1> Blog Details</h1>
      <Link href={`/blog/${blogId}`}>
        <a> Go {blogId} </a>
      </Link>
    </div>
  );
};

export default index;
