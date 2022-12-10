import { useEffect, useRef, useState } from "react";
import ChoiceClass from "../components/choiceClass/ChoiceClass";
import Event from "../components/event/Event";
import { ClassController } from "../model/Classes/ClassController";
import { EventController } from "../model/Events/EventController";
import { Leaderboard } from "../model/Leaderboard";

export default function game() {
  EventController.init();
  let [hasBeenUseEffected, setHasBeenUseEffected] = useState(false);
  const defaultClass = ClassController.getById("Unknown");
  const [playerClass, setPlayerClass] = useState(
    ClassController.getById("Unknown")
  );
  const [currentEvent, setCurrentEvent] = useState(
    EventController.getById("Unknown")
  );

  const step = useRef(0);

  useEffect(() => {
    const ldb = new Leaderboard();
    ldb.init().then(() => {
      const user = ldb.getUser(localStorage.getItem("username") as string);
      if (user) {
        setPlayerClass(ClassController.getById(user.classId));
        setCurrentEvent(
          localStorage.getItem("nextEvent")
            ? EventController.getById(
                localStorage.getItem("nextEvent") as string
              )
            : EventController.pickRandomEvent()
        );
        localStorage.removeItem("miniGameId");
        localStorage.removeItem("nextEvent");
      }
      setHasBeenUseEffected(true);
    });
  }, []);

  useEffect(() => {
    if (playerClass && step.current) {
      setCurrentEvent(EventController.pickRandomEvent());
    } else {
      setCurrentEvent(EventController.getByClassRequirement(playerClass.nom));
    }
    setHasBeenUseEffected(true);
  }, [playerClass]);

  return (
    <>
      {hasBeenUseEffected ? (
        playerClass == defaultClass ? (
          <ChoiceClass RootSetPlayerClass={setPlayerClass}></ChoiceClass>
        ) : (
          <Event setEvent={setCurrentEvent} event={currentEvent}></Event>
        )
      ) : (
        <></>
      )}
    </>
  );
}
