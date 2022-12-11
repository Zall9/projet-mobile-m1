import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from "@chakra-ui/icons";
import { Box, IconButton, keyframes, Text } from "@chakra-ui/react";
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

/* C'est une animation d'image qui fera scintiller le texte. */
const flicker = keyframes`
  0% {
    opacity: 0.5;
    text-shadow: 2px 2px 10px #770737;
  }
  100% {
    opacity: 1;
    text-shadow: 2px 2px 20px #770737;
  }
`;

/**
 * Il prend une énumération Direction et renvoie un objet avec une propriété top, bottom ou left/right
 * @param {Direction} direction - Le sens de la flèche.
 * @returns Un objet avec une clé de haut, bas ou gauche/droite, et une valeur d'une chaîne.
 */
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

/**
 * prend un événement, une fonction setEvent, une sortie et une fonction setGoMinigame, et si la sortie willMinigame est
 * vraie, il définit le goMinigame sur la sortie, sinon il définit l'événement sur le nextEvent dans la sortie
 * @param {IEvent} event - IEvent - L'événement actuel qui est affiché.
 * @param setEvent - Dispatch<SetStateAction<IEvent>>
 * @param {IOutput} output - IOutput - L'objet de sortie de l'événement.
 * @param setGoMinigame - Dispatch<SetStateAction<IOutput>>
 * @returns Une fonction qui prend un événement, une fonction setEvent, une sortie et une fonction setGoMinigame.
 */
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
          height: "90vh",
          width: "75vw !important",
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
        <section
          style={{
            position: "absolute",
            bottom: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            fontSize: "2em",
            background: "transparent",
            color: "#fbfbfbfb",
            textTransform: "uppercase",
            gap: "1em",
          }}
        >
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
              "-webkit-text-stroke-width": " 1px",
              textShadow: " 2px 2px 10px #770737",
              transition: "all 0.5s ease-in-out",
              textAlign: "center",
              letterSpacing: " 0.2em",
            }}
          >
            {event.nom}
          </Text>
        </section>
      </Box>
    </>
  );
}
