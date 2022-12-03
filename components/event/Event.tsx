import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import EventBox from "./EventBox";
import Inventory from "../inventory/Inventory";
import { IEvent } from "../../model/Events/IEvent";
export default function Event(props: {
  event: IEvent;
  setEvent: Dispatch<SetStateAction<IEvent>>;
}) {
  const event = props.event;
  const setEvent = props.setEvent;
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
          <EventBox event={event} setEvent={setEvent}></EventBox>
        </SimpleGrid>
      </Box>
      <Inventory></Inventory>
    </>
  );
}
