import { useRouter } from "next/router";
import React from "react";

const PageId = () => {
  const router = useRouter();
  const { docId, pageId } = router.query;
  return (
    <div>
      <h1>
        {" "}
        Doc {docId} Page {pageId}{" "}
      </h1>
    </div>
  );
};

export default PageId;
