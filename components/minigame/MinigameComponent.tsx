import {CaseTemplate, GridMinigame, IMinigame,} from "../../model/Minigames/IMinigame";
import {Box, Button} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {MinigameController} from "../../model/Minigames/MinigameController";

// TODO quand le jeu est terminé, se remettre sur le prochain event

export default function MinigameComponent() {
    let logicGrid: GridMinigame = new Map();
    let miniGameId: string;

    let minigame!: IMinigame;
    useEffect(() => {
        if (typeof window !== "undefined") {
            miniGameId = localStorage.getItem("miniGameId") as string;
            minigame = miniGameId === "random" ? MinigameController.pickRandomMinigame() : MinigameController.getById(miniGameId);
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
            return minigame.init(logicGrid, setUpdateGrid, setLogicGrid);
        }
    }, []);

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
            {minigame ? (
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
