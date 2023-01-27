import { AppBar, Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import logo from "../img/logo.png";
import Image from "mui-image";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
const NavbarContact = () => {
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
          variant="h4"
          component="p"
          sx={{
            paddingLeft: "12px",
            display: "flex",
            alignItems: "center",
            flexGrow: "2px",
          }}
        >
          <Avatar src={logo}></Avatar>
          CAKE 'N' BAKE
        </Typography>
        <Link href="/" underline="none" color="white">
          <Typography
            variant="p"
            component="h4"
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingTop="2px"
          >
            <HomeIcon></HomeIcon>
            Home
          </Typography>
        </Link>
      </AppBar>
    </Box>
  );
};

export default NavbarContact;
