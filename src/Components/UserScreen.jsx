import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useGlobalState } from "../store";
import { useNavigate } from "react-router-dom";

function UserScreen() {
  const { jwtToken, randomData, fetchProduct } = useGlobalState();
  let navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      {jwtToken ? (
        <img src={randomData[0]?.image} />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}>
          {" "}
          <Typography variant="h4">NOT AN ADMIN USER</Typography>
          <Button
            onClick={() => navigate("/")}
            variant="contained"
            sx={{ width: "10vw", mt: 3 }}>
            Go Back
          </Button>
        </div>
      )}
    </>
  );
}

export default UserScreen;
