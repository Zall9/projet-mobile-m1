import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { breakpoints, colors } from "../../theme";

const EventBox = (props: any) => {
  const event = props.event;
  function handler(event: any) {}
  return (
    <>
      <Box
        w={breakpoints.eventCardSize}
        sx={{
          display: "flex",
          justifyContent: "center",
          borderColor: "black",
          borderWidth: "1px",
          height: "80vh",
          backgroundImage: `url(${event.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={handler}
      >
        <Text
          position="absolute"
          bottom="95"
          color={colors.fonts.white}
          fontSize={breakpoints.fontSize.h1}
        >
          {event.nom}
        </Text>
      </Box>
    </>
  );
};

export default EventBox;
