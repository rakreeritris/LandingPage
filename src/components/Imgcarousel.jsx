import React, { useEffect, useState } from "react";
import cake from "../img/cake.jpg";
import coffee from "../img/coffee.jpg";
import crossiont from "../img/crossiont.jpg";
import donuts from "../img/donuts.jpg";
import pastery from "../img/pastery.jpg";
import shakes from "../img/shakes.jpg";
import Image from "mui-image";
import { Box } from "@mui/system";
function Imgcarousel() {
  const items = [cake, coffee, crossiont, donuts, pastery, shakes];
  const [first, setfirst] = useState(0);
  const infiniteScroll = () => {
    if (first === items.length - 1) {
      setfirst(0);
    } else {
      setfirst(first + 1);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      infiniteScroll();
    }, 4500);

    return () => clearInterval(interval);
  });
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Image src={items[first]} width="100%" height="60vh"></Image>
    </Box>
  );
}

export default Imgcarousel;
