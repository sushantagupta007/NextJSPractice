import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className="flex flex-col">
      <Link href="/blog">
        <a> Blog </a>
      </Link>{" "}
      <br />
      <Link href="/catch">
        <a> Catch </a>
      </Link>{" "}
      <br />
      <Link href="/doc" replace>
        <a> Doc </a>
      </Link>
    </div>
  );
};

export default index;

<Link href="/blog">Blog</Link>;
