import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Event = (props: any) => {
  const [selectedOutput, setSelectedOutput] = useState({});
  function handler(event: any) {}
  const event = props.event;
  return (
    <SimpleGrid columns={4}>
      <Box
        sx={{
          borderColor: "black",
          borderWidth: "1px",
          height: "50vh",
          backgroundImage: `url(${event.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        as="button"
        onClick={handler}
      >
        <Text>{event.nom}</Text>
      </Box>
    </SimpleGrid>
  );
};

export default Event;
