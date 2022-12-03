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
  useEffect,
  useState,
} from "react";
import { breakpoints, colors } from "../../theme";
import { IEvent } from "../../model/Events/IEvent";
import { EventController } from "../../model/Events/EventController";
import { Direction, IOutput, Unknown } from "../../model/Events/IOutput";
import { useRouter } from "next/router";

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

function handler(
  event: IEvent,
  setEvent: Dispatch<SetStateAction<IEvent>>,
  output: IOutput,
  setGoMinigame: Dispatch<SetStateAction<IOutput>>
): void {
  if (output.willMinigame) {
    setGoMinigame(output);
    return;
  }
  setEvent(EventController.getById(output.nextEvent));
}

export default function EventBox(
  this: any,
  props: {
    event: IEvent;
    setEvent: Dispatch<SetStateAction<IEvent>>;
  }
) {
  const event = props.event;
  let [goWithOutput, setGoWithOutput] = useState(Unknown);
  let router = useRouter();
  useEffect(() => {
    if (goWithOutput == Unknown) {
      return;
    }
    localStorage.setItem("miniGameId", goWithOutput.whichMinigame ?? "random");
    localStorage.setItem("nextEvent", goWithOutput.nextEvent);
    router.push("/minigame").then(() => null);
  }, [goWithOutput]);

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
              onClick={() =>
                handler(event, props.setEvent, output, setGoWithOutput)
              }
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
