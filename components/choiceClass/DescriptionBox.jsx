import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { breakpoints, colors } from "../../theme";
const DescriptionBox = (props) => {
  const description = props.description;
  return (
    <Box
      sx={{
        borderColor: "black",
        borderWidth: "1px",
        width: "75vw",
        marginLeft: "12.5vw",
      }}
    >
      <Text color={colors.fonts.black} fontSize={breakpoints.fontSize.h5}>
        {description}
      </Text>
    </Box>
  );
};

export default DescriptionBox;
