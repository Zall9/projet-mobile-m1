import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { breakpoints, colors } from "../../theme";
const DescriptionAndSubmitBox = (props) => {
  console.log("description", props.description);
  const description = props.description;
  const handleChoice = props.handleChoice;
  const color = description !== null ? "teal" : "red";
  return (
    <Box
      // add shadow to the box
      sx={{
        borderColor: "black",
        boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
        width: "75vw",
        marginLeft: "12.5vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Text color={colors.fonts.black} fontSize={breakpoints.fontSize.h5}>
        {description}
      </Text>
      <Button colorScheme={color}>Valider le choix</Button>
    </Box>
  );
};

export default DescriptionAndSubmitBox;
