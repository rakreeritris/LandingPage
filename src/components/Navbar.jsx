import { AppBar, Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import logo from "../img/logo.png";
import Image from "mui-image";
import Link from "@mui/material/Link";
const Navbar = () => {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "50px",
          backgroundColor: "#000000",
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "row",
            xl: "row",
          },
          paddingTop: "40px",
          paddingBottom: {
            xs: "70px",
            sm: "70px",
            md: "25px",
          },
          paddingRight: "20px",
        }}
      >
        <Typography
          variant="p"
          component="p"
          sx={{
            paddingLeft: "12px",
            display: "flex",
            alignItems: "center",
            flexGrow: "2px",
            paddingTop: {
              xs: "0px",
              sm: "0px",
            },
            fontSize: {
              xs: "1rem",
              sm: "1.5rem",
            },
          }}
        >
          <Avatar src={logo}></Avatar>
          CAKE 'N' BAKE
        </Typography>
        <Typography
          sx={{
            cursor: "pointer",
          }}
        >
          <Link href="/contactUs" color="white" underline="none">
            CONTACT US
          </Link>
        </Typography>
      </AppBar>
    </Box>
  );
};

export default Navbar;
