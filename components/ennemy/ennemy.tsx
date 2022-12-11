import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import LifeBar from "./LifeBar";

const Ennemy = (props: { name: string; currLife: number }) => {
  const name: string = props.name;
  const health = props.currLife;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LifeBar bgcolor={"#6a1b9a"} completed={props.currLife} />

      <Image src={"/ennemies/" + name + ".png"} w={"min(20vh,20vw)"} />
    </Box>
  );
};

export default Ennemy;
