import {useEffect, useRef, useState} from "react";
import ChoiceClass from "../components/choiceClass/ChoiceClass";
import Event from "../components/event/Event";
import {ClassController} from "../model/Classes/ClassController";
import {EventController, getStaticPropsEvent,} from "../model/Events/EventController";

export async function getStaticProps() {
    return {
        props: {
            prepareEventLists: await getStaticPropsEvent(),
        },
    };
}

export default function game({
                                 prepareEventLists,
                             }: {
    prepareEventLists: string[];
}) {
    EventController.init(prepareEventLists);
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
        localStorage.setItem("username", "BANANA");
        if (!localStorage.getItem("score") || localStorage.getItem("score") == "NaN") localStorage.setItem("score", "0");
        if (localStorage.getItem("classId")) {
            setPlayerClass(
                ClassController.getById(localStorage.getItem("classId") as string)
            );
            setCurrentEvent(
                EventController.getById(localStorage.getItem("nextEvent") as string)
            );
            localStorage.removeItem("miniGameId");
            localStorage.removeItem("nextEvent");
        }
        setHasBeenUseEffected(true);
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
