import { useEffect, useRef, useState } from "react";
import ChoiceClass from "../components/choiceClass/ChoiceClass";
import Event from "../components/event/Event";
import { ClassController } from "../model/Classes/ClassController";
import {EventController, getStaticPropsEvent} from "../model/Events/EventController";
import {getStaticPropsMinigame, MinigameController} from "../model/Minigames/MinigameController";

export async function getStaticProps() {
  return {
    props: {
      prepareEventLists: await getStaticPropsEvent(),
      prepareMinigameLists: await getStaticPropsMinigame()
    }
  }
}

export default function game({prepareEventLists, prepareMinigameLists}: {prepareEventLists: string[], prepareMinigameLists: string[]}) {
  EventController.init(prepareEventLists);
  MinigameController.init(prepareMinigameLists);
  const defaultClass = ClassController.getById("Unknown");
  const [playerClass, setPlayerClass] = useState(defaultClass);
  const [currentEvent, setCurrentEvent] = useState(EventController.getById('Unknown'));
  const step = useRef(0);

  useEffect(() => {
    if (playerClass && step.current) {
      setCurrentEvent(EventController.pickRandomEvent());
    } else {
      setCurrentEvent(EventController.getByClassRequirement(playerClass.nom));
    }
  }, [playerClass]);

  return (
    <>
      {playerClass == defaultClass ? (
        <ChoiceClass RootSetPlayerClass={setPlayerClass}></ChoiceClass>
      ) : (
        <Event event={currentEvent}></Event>
      )}
    </>
  );
}
