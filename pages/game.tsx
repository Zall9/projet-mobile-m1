import { useState } from "react";
import ChoiceClass from "../components/choiceClass/choiceClass.jsx";
const game = () => {
  const [playerClass, setPlayerClass] = useState("");

  return (
    <>
      <ChoiceClass RootSetPlayerClass={setPlayerClass}></ChoiceClass>
    </>
  );
};

export default game;
