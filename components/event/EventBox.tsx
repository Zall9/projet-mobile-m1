import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  IconProps,
} from "@chakra-ui/icons";
import { Box, ComponentWithAs, Icon, IconButton, Text } from "@chakra-ui/react";
import React, {
  Dispatch,
  MouseEventHandler,
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

export default function EventBox(props: {
  event: IEvent;
  setEvent: Dispatch<SetStateAction<IEvent>>;
}) {
  const event = props.event;
  const handler: any = (event: MouseEvent, direction: Direction) => {};
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
        {event.sorties.map((output: IOutput, index: number) => {
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
              onClick={handler(event, Direction[output.direction])}
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
