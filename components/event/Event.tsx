import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import EventBox from "./EventBox";
import Inventory from "../inventory/Inventory";
import {IEvent} from "../../model/Events/IEvent";
export default function Event(props: { event: IEvent; }) {
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
          <EventBox event={event}></EventBox>
        </SimpleGrid>
      </Box>
      <Inventory></Inventory>
    </>
  );
}