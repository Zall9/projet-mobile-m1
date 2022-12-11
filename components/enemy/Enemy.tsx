import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { LifeBar } from "./LifeBar";

export const Enemy = (props: { name: string; currLife: number }) => {
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

      <Image src={"/ennemies/" + props.name + ".png"} w={"min(20vh,20vw)"} />
    </Box>
  );
};
