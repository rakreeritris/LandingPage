import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import EmailIcon from "@mui/icons-material/Email";
const ContactInfo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row",
        },
        justifyContent: "space-evenly",
        position: "static",
        backgroundColor: "white",
        color: "black",
        paddingTop: "55px",
        paddingBottom: "55px",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "33%",
          },
          color: "black",
          outline: "none",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            component="h4"
            fontWeight="bold"
            fontSize="1.5rem"
          >
            About our bakery
          </Typography>
          <Typography
            variant="p"
            component="h4"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            We make fresh cakes ,pastery ,donuts ,we also have products in the
            sugar free range.We have braches in Mumbai,delhi and pune.
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="black">
            Patrick victoria ,CEO
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "33%",
          },
          color: "black",
          outline: "none",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            fontWeight="bold"
            fontSize="1.5rem"
          >
            Keep Connected
          </Typography>
          <Typography
            variant="p"
            component="h4"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <FacebookIcon></FacebookIcon>
            CONNECT ON FACEBOOK
          </Typography>
          <Typography
            variant="p"
            component="h4"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <InstagramIcon></InstagramIcon>
            CONNECT ON INSTAGRAM
          </Typography>
          <Typography
            variant="p"
            component="h4"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <TwitterIcon></TwitterIcon>
            CONNECT ON TWITTER
          </Typography>
          <Typography
            variant="p"
            component="h4"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <LinkedInIcon></LinkedInIcon>
            CONNECT ON LINKEDIN
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "33%",
          },
          color: "black",
          outline: "none",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            fontWeight="bold"
            fontSize="1.5rem"
          >
            Contact Information
          </Typography>
          <Typography
            variant="p"
            component="h4"
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingTop="2px"
          >
            <HomeIcon></HomeIcon>
            BAKE 'N' CAKE ,Infront of Fortis Hostpital,sector 62,Noida
          </Typography>
          <Typography
            variant="p"
            component="h4"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <SmartphoneIcon></SmartphoneIcon>
            1234567890
          </Typography>
          <Typography
            variant="p"
            component="h4"
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontStyle="sans-serif"
          >
            <EmailIcon></EmailIcon>
            abcdg@gmail.com
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContactInfo;
