import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

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
      <Text>Health</Text>
      <Text>{health}</Text>
      <Image src={"/ennemies/" + name + ".png"} w={"min(25vh,25vw)"} />
    </Box>
  );
};

export default Ennemy;
