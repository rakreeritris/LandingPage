import { Box } from "@mui/system";
import React from "react";
import Image from "mui-image";
import contactpage from "../img/contactpage.jpg";
import map from "../img/map.png";
import { Button, Card, Input, Typography } from "@mui/material";
import Navbarcontact from "./NavbarContact";

const ContactUs = () => {
  return (
    <Box>
      <Navbarcontact></Navbarcontact>
      <Image src={contactpage} width="100%" height="40vh"></Image>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "row",
            sm: "row",
            md: "row",
          },
          width: "100%",
          height: "56vh",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
          }}
        >
          <Typography variant="h6" component="p">
            Have any queries?Contact Us
          </Typography>
          <Input
            type="text"
            placeholder="Enter your name"
            sx={{
              paddingTop: "10px",
              paddingBottom: "10px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          ></Input>
          <Input
            type="email"
            placeholder="Enter your email"
            sx={{
              paddingTop: "10px",
              paddingBottom: "10px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          ></Input>
          <Input
            type="text"
            placeholder="Enter your phone number"
            sx={{
              paddingTop: "10px",
              paddingBottom: "10px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          ></Input>
          <Input
            type="text"
            placeholder="Enter your queries or message"
            sx={{
              paddingTop: "10px",
              paddingBottom: "10px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          ></Input>
          <Button
            sx={{
              paddingTop: "10px",
              paddingBottom: "10px",
              marginTop: "10px",
              marginBottom: "10px",
              margin: "auto",
              width: "20px",
            }}
          >
            SUBMIT
          </Button>
        </Card>
        <Card
          sx={{
            width: "40%",
          }}
        >
          <Image src={map} width="100%" height="56vh"></Image>
        </Card>
      </Box>
    </Box>
  );
};

export default ContactUs;
