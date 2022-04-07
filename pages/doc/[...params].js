import { useRouter } from "next/router";
import React from "react";

const Doc = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  if (params.length === 1) {
    return <h1> Doc for Food </h1>;
  } else if (params.length === 2) {
    return <h1> Doc for Food and Non </h1>;
  } else if (params.length === 3) {
    return <h1> Doc for Food and Non Veg and Meat </h1>;
  } else if (params.length === 4) {
    return <h1> Doc for Food and Non Veg and Maet and Mutton</h1>;
  }
  {
    return <h1> Doc page</h1>;
  }
};

export default Doc;
