import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { breakpoints, colors } from "../../theme";
import EventBox from "./EventBox";
import Inventory from "../inventory/Inventory";
const Event = (props: any) => {
  const [selectedOutput, setSelectedOutput] = useState({});
  const event = props.event;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "90vh",
          width: "100%",
        }}
      >
        <SimpleGrid
          columns={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* @ts-ignore */}
          <EventBox event={event}></EventBox>
        </SimpleGrid>
      </Box>
      <Inventory></Inventory>
    </>
  );
};

export default Event;
