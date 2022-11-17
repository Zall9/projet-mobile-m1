import {CaseTemplate, GridMinigame, IMinigame, SetGridMinigame} from "../../model/Minigames/IMinigame";
import {Box} from "@chakra-ui/react";
import {useEffect, useState} from "react";

export default function MinigameComponent(props: { minigame: IMinigame }) {
    let logicGrid: GridMinigame = new Map();
    let rowTemplate: CaseTemplate[] = [];
    for (let i = 0; i < props.minigame.nbRow; i++) {
        rowTemplate.push(props.minigame.caseTemplateCreate());
    }
    for (let i = 0; i < props.minigame.nbCol; i++) {
        logicGrid.set(String.fromCharCode(65 + i), rowTemplate.slice(0, rowTemplate.length))
    }
    let setLogicGrid: SetGridMinigame;
    [logicGrid, setLogicGrid] = useState(logicGrid);
    useEffect(() => {
            console.log(logicGrid);
            props.minigame.init(logicGrid, setLogicGrid);
            setLogicGrid(logicGrid)
        },
        []);
    useEffect(() => {
        props.minigame.ViewGrid(logicGrid)
    }, [logicGrid]);
    return <Box id="Canvas">
        {props.minigame.ViewGrid(logicGrid)}
    </Box>
}