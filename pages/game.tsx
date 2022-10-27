import { useEffect, useRef, useState } from "react";
import ChoiceClass from "../components/choiceClass/ChoiceClass";
import { events } from "../model/eventList.js";
import { pickRandomEvent } from "../model/utils/events.js";
import { classes } from "../model/classList";
import Event from "../components/event/Event";
import {ClassController} from "../model/Classes/ClassController";

export default function game() {
  const [playerClass, setPlayerClass] = useState(ClassController.getById("Unknown"));
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
}