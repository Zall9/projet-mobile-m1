import { Box, Button, Text } from "@chakra-ui/react";
import React, {SetStateAction} from "react";
import { breakpoints, colors } from "../../theme";
import {IClass} from "../../model/Classes/IClass";

export default function DescriptionAndSubmitBox(props: { description: string; RootSetPlayerClass: (classe: SetStateAction<IClass>) => void; selectedClass: IClass; }) {
  const description = props.description;
  const RootSetPlayerClass = props.RootSetPlayerClass;
  const color = description !== null ? "teal" : "red";
  const selectedClass = props.selectedClass;
  const handleClick = () => {
    RootSetPlayerClass(selectedClass);
  };

  return (
    <Box
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
      <Button colorScheme={color} onClick={handleClick}>
        Valider le choix
      </Button>
    </Box>
  );
}