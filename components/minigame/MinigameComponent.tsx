import {CaseTemplate, GridMinigame, IMinigame} from "../../model/Minigames/IMinigame";
import {Box, Button} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {IEvent} from "../../model/Events/IEvent";

// TODO quand le jeu est terminé, se remettre sur le prochain event

export default function MinigameComponent(props: { minigame: IMinigame, nextEvent: IEvent }) {
    let logicGrid: GridMinigame = new Map();
    let rowTemplate: CaseTemplate[] = [];
    for (let i = 0; i < props.minigame.nbRow; i++) {
        rowTemplate.push(props.minigame.caseTemplateCreate());
    }
    for (let i = 0; i < props.minigame.nbCol; i++) {
        logicGrid.set(String.fromCharCode(65 + i), JSON.parse(JSON.stringify(rowTemplate)));
    }
    let [updateGrid, setUpdateGrid] = useState(false);
    let [logicGridToUpdate, setLogicGrid] = useState(logicGrid);
    useEffect(() => {
            props.minigame.init(logicGrid, setUpdateGrid, setLogicGrid);
        },
        []);
    useEffect(() => {
        if (updateGrid) {
            props.minigame.update(logicGridToUpdate)
            setUpdateGrid(false);
        }
    }, [updateGrid]);
    return <Box id="Canvas">
        <Box id="Grid">
            {props.minigame.ViewGrid(logicGridToUpdate)}
        </Box>
        <Button onClick={() => props.minigame.playerInput("test", logicGridToUpdate)}/>
    </Box>
}