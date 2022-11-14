import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,

} from "@chakra-ui/icons";
import { Box, IconButton, Text } from "@chakra-ui/react";
import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
} from "react";
import { breakpoints, colors } from "../../theme";
import { IEvent } from "../../model/Events/IEvent";
import { EventController } from "../../model/Events/EventController";
import { Direction, IOutput } from "../../model/Events/IOutput";

function positionFromDirection(direction: Direction): {
  [key: string]: string;
} {
  switch (direction) {
    case Direction.up:
      return {
        top: "12%",
      };
    case Direction.down:
      return {
        bottom: "25%",
      };
    default:
      return {
        [Direction[direction]]: "20%",
        bottom: "50%",
      };
  }
}

function handler(event: IEvent, setEvent: Dispatch<SetStateAction<IEvent>>, output: IOutput) : void {
    setEvent(EventController.getById(output.nextEvent));
}

export default function EventBox(props: {
  event: IEvent;
  setEvent: Dispatch<SetStateAction<IEvent>>;
}) {
  const event = props.event;
  const stringToArrow: { [key: string]: ReactElement } = {
    up: <ArrowUpIcon />,
    down: <ArrowDownIcon />,
    left: <ArrowLeftIcon />,
    right: <ArrowRightIcon />,
  };
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
          backgroundImage: `url(${EventController.getImage(event)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {event.sorties.map((output: IOutput) => {
          return (
            <IconButton
              aria-label=""
              id={Direction[output.direction]}
              color="white"
              sx={{
                position: "absolute",
                backgroundColor: "rgba(0, 0, 0, 0)",
                ...positionFromDirection(output.direction),
              }}
              icon={stringToArrow[Direction[output.direction]]}
              onClick={() => handler(event, props.setEvent, output)}
            />
          );
        })}
        <Text
          position="absolute"
          bottom="20%"
          color={colors.fonts.white}
          fontSize={breakpoints.fontSize.h1}
        >
          {event.nom}
        </Text>
      </Box>
    </>
  );
}
