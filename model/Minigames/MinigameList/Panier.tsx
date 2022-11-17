import {CaseTemplate, GridMinigame, IMinigame, SetGridMinigame} from "../IMinigame";
import {Direction} from "../../Events/IOutput";
import {Grid, GridItem} from "@chakra-ui/react";
import {Panier} from "../../../components/icons/Panier";
import {Cerise} from "../../../components/icons/Cerise";

const NBROW = 7;

export class PanierCaseTemplate implements CaseTemplate {
    hasFruit: boolean;

    constructor() {
        this.hasFruit = false;
    }
}

export const minigameInfos: IMinigame = {
    nbRow: NBROW,
    nbCol: 5,
    score: 0,
    player: {
        position: {
            x: NBROW - 1,
            y: 'A'
        },
        direction: [Direction.left, Direction.right]
    },
    ViewGrid(logicGrid: GridMinigame) {
        const cols = Array.from(logicGrid.keys());
        const parameters = [];
        for (let i = 0; i < this.nbRow; i++) {
            for (let j = 0; j < this.nbCol; j++) {
                parameters.push(i === this.nbRow - 1 && this.player.position.y === cols[j]
                    ? <Panier/>
                    : (logicGrid.get(cols[j]) as PanierCaseTemplate[])[i].hasFruit
                        ? <Cerise/>
                        : <></>)
            }
        }
        return <Grid templateColumns={`repeat(${this.nbCol},auto)`}>
            {
                parameters.map((v) =>
                    <GridItem colSpan={1} rowSpan={1} w="auto" h="auto" backgroundColor="gray.500" sx={{
                        border: "20px solid #969696"
                    }}>
                        {v}
                    </GridItem>
                )
            }
        </Grid>
    },
    init(logicGrid: GridMinigame, setLogicGrid: SetGridMinigame): void {
        for (let i = 0; i < 3; i++) {
            spawnItems(logicGrid, this);
        }
    },
    update(logicGrid: GridMinigame, setLogicGrid: SetGridMinigame): void {
        const logicGridCopy = new Map(logicGrid);
        logicGrid.forEach((row, i) => {
            row.forEach((cell, j) => {
                let realCell = cell as PanierCaseTemplate;
                if (realCell.hasFruit) {
                    if (j === this.nbRow - 1) {
                        this.score += this.player.position.y === i ? 1 : -1;
                    } else {
                        (logicGrid.get(i) as PanierCaseTemplate[])[j + 1].hasFruit = true;
                    }
                    realCell.hasFruit = false;
                }
            })
        })
        Math.random() < 1 / 3 ? spawnItems(logicGrid, this) : null;
        setLogicGrid(logicGridCopy);
    },
    caseTemplateCreate: () => new PanierCaseTemplate(),
};

function spawnItems(logicGrid: GridMinigame, minigame: IMinigame) {
    const letterDrawn = String.fromCharCode(65 + Math.floor(Math.random() * minigame.nbCol));
    const caseDrawn = (logicGrid.get(letterDrawn) as PanierCaseTemplate[])[0];
    console.log(logicGrid)
    caseDrawn.hasFruit = true;
    console.log(logicGrid)
}
