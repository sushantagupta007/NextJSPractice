import { useRouter } from "next/router";
import React from "react";

const ReviewId = () => {
  const router = useRouter();
  const { blogId, reviewId } = router.query;
  return (
    <div>
      <h1> Review Id: {reviewId} </h1>
      <h2> Blog Id {blogId} </h2>
    </div>
  );
};

export default ReviewId;
