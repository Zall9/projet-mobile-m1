import { Box, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import ChoiceClass from "../components/choiceClass/choiceClass.jsx";
import { events } from "../model/eventList.js";
import { pickRandomEvent } from "../model/utils/events.js";
import { classes } from "../model/classList";
import Event from "../components/event/Event";
const game = () => {
  const [playerClass, setPlayerClass] = useState(classes[0]);
  const [currentEvent, setCurrentEvent] = useState(events.unknown);
  const step = useRef(0);

  useEffect(() => {
    if (playerClass && step.current) {
      setCurrentEvent(pickRandomEvent(events));
    } else {
      setCurrentEvent(
        // @ts-ignore
        Object.values(events).filter((elt) => {
          return elt.classe == playerClass.nom;
        })[0] ?? pickRandomEvent(events)
      );
    }
  }, [playerClass]);

  return (
    <>
      {playerClass == classes[0] ? (
        <ChoiceClass RootSetPlayerClass={setPlayerClass}></ChoiceClass>
      ) : (
        <>
          <Event event={currentEvent}></Event>
        </>
      )}
    </>
  );
};

export default game;
