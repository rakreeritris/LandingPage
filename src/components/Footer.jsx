import React from "react";
import { Box, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        height: "30px",
      }}
    >
      <Typography
        variant="p"
        component="h4"
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontStyle="sans-serif"
      >
        <CopyrightIcon></CopyrightIcon>
        Established in 2015|All Rights to innovative and new products are
        reserved
      </Typography>
    </Box>
  );
}

export default Footer;
