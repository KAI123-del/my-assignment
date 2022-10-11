import React, { useEffect } from "react";
import { useGlobalState } from "../store";

function UserScreen() {
  const { randomData, fetchProduct } = useGlobalState();

  useEffect(() => {
    fetchProduct();
  }, []);

  console.log("data", randomData);

  return <img src={randomData[0]?.image} />;
}

export default UserScreen;
