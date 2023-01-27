import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import menuimg from "../img/menuimg.jpg";
import menuimg2 from "../img/menuimg2.jpg";
import CardMedia from "@mui/material/CardMedia";

function BakeryMenu() {
  return (
    <Box
      sx={{
        position: "static",
        backgroundColor: "#000000",
        height: "475px",
      }}
    >
      <Typography
        variant="h3"
        component="p"
        color="white"
        sx={{
          marginBottom: "25px",
        }}
      >
        OUR MENU
      </Typography>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "column", md: "row" }}
        justifyContent="space-evenly"
        sx={{
          alignItems: "center",
        }}
      >
        <CardMedia
          sx={{
            height: {
              xs: "170px",
              sm: "160px",
              md: "300px",
              xl: "300px",
            },
            width: {
              xs: "80%",
              sm: "80%",
              md: "40%",
              xl: "600px",
            },
            marginBottom: "12px",
          }}
          image={menuimg}
          title="green iguana"
        ></CardMedia>
        <CardMedia
          sx={{
            height: {
              xs: "170px",
              sm: "160px",
              md: "300px",
              xl: "300px",
            },
            width: {
              xs: "80%",
              sm: "80%",
              md: "40%",
              xl: "600px",
            },
            marginBottom: "12px",
          }}
          image={menuimg2}
          title="green iguana"
        ></CardMedia>
      </Box>
    </Box>
  );
}

export default BakeryMenu;
