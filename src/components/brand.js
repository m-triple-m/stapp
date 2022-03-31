import { Typography } from "@mui/material";
import React from "react";

const Brand = ({ dark, children }) => {
  return (
    <Typography
      variant="h3"
      sx={{
        color: "black",
        size: "2em",
        fontFamily: "Caveat",
        textAlign: "center",
        fontWeight: "900",
        margin: "2rem 0",
      }}
    >
      {children}
    </Typography>
  );
};

export default Brand;
