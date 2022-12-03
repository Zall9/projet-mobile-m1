import {CaseTemplate, GridMinigame, IMinigame,} from "../../model/Minigames/IMinigame";
import {Box, IconButton} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {MinigameController} from "../../model/Minigames/MinigameController";
import {minigameInfos} from "../../model/Minigames/MinigameList/Unknown";
import {useRouter} from "next/router";
import {ArrowLeftIcon, ArrowRightIcon} from "@chakra-ui/icons";

export default function MinigameComponent() {
    let router = useRouter();
    let logicGrid: GridMinigame = new Map();
    let miniGameId: string;

    let [minigame, setMinigame] = useState<IMinigame>(minigameInfos);
    let [reset, sr] = useState(false);
    useEffect(() => {
        miniGameId = localStorage.getItem("miniGameId") as string;
        setMinigame(
            miniGameId === "random"
                ? MinigameController.pickRandomMinigame()
                : MinigameController.getById(miniGameId)
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

    let [updateGrid, setUpdateGrid] = useState(false);
    let [logicGridToUpdate, setLogicGrid] = useState(logicGrid);
    //@ts-ignore
    useEffect(() => {
        //@ts-ignore
        const myInterval = setInterval(() => {
            minigame.evolve(logicGridToUpdate);
        }, 150);
        if (updateGrid) {
            if (minigame.score >= minigame.scoreTresh) {
                localStorage.setItem(
                    "score",
                    (
                        parseInt(localStorage.getItem("score") as string) + minigame.score
                    ).toString()
                );
                router.push("/game").then(() => null);
            }
            minigame.update(logicGridToUpdate);
            setUpdateGrid(false);
        }
        //@ts-ignore
        return () => clearInterval(myInterval);
    }, [updateGrid]);
    console.log(minigame.score);
    return (
        <>
            {minigame && logicGridToUpdate.size ? (
                <Box id="Canvas">
                    <Box id="Grid">{minigame.ViewGrid(logicGridToUpdate)}</Box>
                    <IconButton
                        aria-label="left"
                        icon={<ArrowLeftIcon/>}
                        onClick={() => minigame.playerInput("left")}
                    />
                    <IconButton
                        aria-label="right"
                        icon={<ArrowRightIcon/>}
                        onClick={() => minigame.playerInput("right")}
                    />
                </Box>
            ) : (
                <></>
            )}
        </>
    );
}
