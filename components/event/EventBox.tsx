import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from "@chakra-ui/icons";
import { Box, IconButton,keyframes, Text } from "@chakra-ui/react";
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

const flicker= keyframes`
  0% {
    opacity: 0.5;
    text-shadow: 2px 2px 10px #2962ff;
  }
  100% {
    opacity: 1;
    text-shadow: 2px 2px 20px #2962ff;
  }
`

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

    const flickerAnimation = `${flicker} 0.5s ease-in-out infinite alternate`;
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
          <section style={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              flexDirection:"column",
              fontSize: "2em",
              background:"transparent",
              color:"#fbfbfbfb",
              textTransform:"uppercase",
              gap:"1em",
          }}>
        <Text
            animation={flickerAnimation}
            style={{
                fontSize: "1em",
                textDecoration: "underline",
                //@ts-ignore
                "@media (max-width: 768px)": {
                    fontSize: "2em",
                },
                fontStyle: "italic",
                textTransform: "uppercase",
                color: "transparent",
                "-webkit-text-stroke": "#fff",
                "-webkit-text-stroke-width":" 1px",
                textShadow:" 2px 2px 10px #2962ff",
                transition: "all 0.5s ease-in-out",
                textAlign: "center",
                letterSpacing:" 0.2em",



            }}
        >
          {event.nom}
        </Text>
          </section>
      </Box>
    </>
  );
}
