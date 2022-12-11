import { useEffect, useState } from "react";
import ChoiceClass from "../components/choiceClass/ChoiceClass";
import Event from "../components/event/Event";
import { ClassController } from "../model/Classes/ClassController";
import { EventController } from "../model/Events/EventController";
import { Leaderboard } from "../model/Leaderboard";

export default function game() {
  // récupération des classes
  EventController.init();
  let [hasBeenUseEffected, setHasBeenUseEffected] = useState(false);
  const defaultClass = ClassController.getById("Unknown");
  const [playerClass, setPlayerClass] = useState(
    ClassController.getById("Unknown")
  );
  const [currentEvent, setCurrentEvent] = useState(
    EventController.getById("Unknown")
  );

  /* Définir la page précédente sur le jeu, puis obtenir l'utilisateur du classement et définir la classe de joueur sur la
    classe d'utilisateur. */
  useEffect(() => {
    localStorage.setItem("precedentPage", "/game");
    const ldb = new Leaderboard();
    ldb.init().then(() => {
      const user = ldb.getUser(localStorage.getItem("username") as string);
      if (user) {
        setPlayerClass(ClassController.getById(user.classId));
        localStorage.removeItem("miniGameId");
      }
      setHasBeenUseEffected(true);
    });
  }, []);

  /* Un hook useEffect qui est appelé lorsque la playerClass change. */
  useEffect(() => {
    if (playerClass && playerClass.nom !== defaultClass.nom) {
      setCurrentEvent(
        localStorage.getItem("nextEvent")
          ? EventController.getById(localStorage.getItem("nextEvent") as string)
          : hasBeenUseEffected
          ? EventController.getByClassRequirement(playerClass.nom)
          : EventController.pickRandomEvent()
      );
    }
    setHasBeenUseEffected(true);
  }, [playerClass]);

  /* Enregistrement de l'événement en cours dans le localstorage. */
  useEffect(() => {
    if (currentEvent.id !== "Unknown") {
      localStorage.setItem("nextEvent", currentEvent.id);
    }
  }, [currentEvent]);

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
