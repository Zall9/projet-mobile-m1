import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { breakpoints, colors } from "../../theme";

const ChoiceBox = (props) => {
  const classe = props.classe;
  const handleChoice = props.handleChoice;
  return (
    <Box
      sx={{
        borderColor: "black",
        borderWidth: "1px",
        height: "50vh",
        backgroundImage: `url(${classe.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      as="button"
      onClick={(event) => handleChoice(classe, event)}
    >
      <Text color={colors.fonts.white} fontSize={breakpoints.fontSize.h1}>
        {classe.nom}
      </Text>
    </Box>
  );
};

export default ChoiceBox;
