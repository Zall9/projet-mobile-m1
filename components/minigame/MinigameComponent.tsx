import {
  CaseTemplate,
  GridMinigame,
  IMinigame,
} from "../../model/Minigames/IMinigame";
import { Box, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MinigameController } from "../../model/Minigames/MinigameController";
import { minigameInfos } from "../../model/Minigames/MinigameList/Unknown";
import { useRouter } from "next/router";
import { Leaderboard, ScoreRow } from "../../model/Leaderboard";

export default function MinigameComponent() {
  let router = useRouter();
  let logicGrid: GridMinigame = new Map();

  let [minigame, setMinigame] = useState<IMinigame>(minigameInfos);
  let [reset, sr] = useState(false);
  /* Définir le mini-jeu sur celui qui a été sélectionné dans la page de sélection des mini-jeux. */
  useEffect(() => {
    localStorage.setItem("precedentPage", "/minigame");
    const miniGameId = localStorage.getItem("miniGameId");
    setMinigame(
      miniGameId && miniGameId !== "random"
        ? MinigameController.getById(miniGameId)
        : MinigameController.pickRandomMinigame()
    );
    if (minigame === minigameInfos) {
      sr(!reset);
      return;
    }
    let rowTemplate: CaseTemplate[] = [];
    for (let i = 0; i < minigame.nbRow; i++) {
      rowTemplate.push(minigame.caseTemplateCreate());
    }
    for (let i = 0; i < minigame.nbCol; i++) {
      logicGrid.set(
        String.fromCharCode(65 + i),
        JSON.parse(JSON.stringify(rowTemplate))
      );
    }
    minigame.score = 0;
    minigame.init(logicGrid, setUpdateGrid, setLogicGrid);
    setLogicGrid(logicGrid);
    setUpdateGrid(true);
  }, [reset]);

  useEffect(() => {
    sr(false);
  }, []);

  let [updateGrid, setUpdateGrid] = useState(false);
  let [logicGridToUpdate, setLogicGrid] = useState(logicGrid);

  /* Un useEffect qui est appelé chaque fois que l'état updateGrid change. */
  useEffect(() => {
    //@ts-ignore
    const myInterval = setInterval(() => {
      minigame.evolve(logicGridToUpdate);
    }, minigame.refreshInterval);
    if (updateGrid) {
      if (minigame.score >= minigame.scoreTresh) {
        const ldb = new Leaderboard();
        ldb.init().then(() => {
          const user = ldb.getUser(
            localStorage.getItem("username") as string
          ) as ScoreRow;
          user.score += minigame.scoreTresh;
          Leaderboard.updateUser(user as ScoreRow);
          router.push("/game").then(() => null);
        });
      }
      minigame.update(logicGridToUpdate);
      setUpdateGrid(false);
    }
    //@ts-ignore
    return () => clearInterval(myInterval);
  }, [updateGrid]);
  return (
    <>
      {minigame && logicGridToUpdate.size == minigame.nbCol ? (
        <>
          <Center>
            <Box id="Grid">{minigame.ViewGrid(logicGridToUpdate)}</Box>
          </Center>
          {minigame.Controls(logicGridToUpdate)}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
