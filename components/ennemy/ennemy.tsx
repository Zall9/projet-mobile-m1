import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import LifeBar from "./LifeBar";

const Ennemy = (props: { name: string }) => {
  const name: string = props.name;

  const [health, setHealth] = React.useState(3);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <LifeBar bgcolor={"#6a1b9a"} completed={health * 33.3} />

      <Image src={"/ennemies/" + name + ".png"} w={"min(25vh,25vw)"} />
    </Box>
  );
};

export default Ennemy;
