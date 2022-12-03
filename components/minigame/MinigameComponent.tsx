import {CaseTemplate, GridMinigame, IMinigame,} from "../../model/Minigames/IMinigame";
import {Box, Button} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {MinigameController} from "../../model/Minigames/MinigameController";
import {minigameInfos} from "../../model/Minigames/MinigameList/Unknown";

// TODO quand le jeu est terminé, se remettre sur le prochain event

export default function MinigameComponent() {
    let logicGrid: GridMinigame = new Map();
    let miniGameId: string;

    let [minigame, setMinigame] = useState<IMinigame>(minigameInfos);
    let [reset, sr] = useState(false);
    useEffect(() => {
        miniGameId = localStorage.getItem("miniGameId") as string;
        setMinigame(miniGameId === "random" ? MinigameController.pickRandomMinigame() : MinigameController.getById(miniGameId));
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
        minigame.init(logicGrid, setUpdateGrid, setLogicGrid);
        setLogicGrid(logicGrid);
        setUpdateGrid(true);
    }, [reset]);

    let [updateGrid, setUpdateGrid] = useState(false);
    let [logicGridToUpdate, setLogicGrid] = useState(logicGrid);
    useEffect(() => {
        if (updateGrid) {
            minigame.update(logicGridToUpdate);
            setUpdateGrid(false);
        }
    }, [updateGrid]);
    return (
        <>
            {minigame && logicGridToUpdate.size ? (
                <Box id="Canvas">
                    <Box id="Grid">{minigame.ViewGrid(logicGridToUpdate)}</Box>
                    <Button
                        onClick={() => minigame.playerInput("test", logicGridToUpdate)}
                    />
                </Box>
            ) : (
                <></>
            )}
        </>
    );
}
