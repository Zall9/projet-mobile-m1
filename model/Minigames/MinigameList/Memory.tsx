import {CaseTemplate, GridMinigame, IMinigame, SetGridMinigame, SetUpdateGrid,} from "../IMinigame";
import {Grid, GridItem} from "@chakra-ui/react";
import {BackImage} from "../../../components/icons/BackImage";
import {ReactElement} from "react";

export class MemoryCaseTemplate implements CaseTemplate {
    isReturned: boolean;
    isFound: boolean;
    idLink: number = -1;

    constructor() {
        this.isReturned = false;
        this.isFound = false;
    }
}

// Faire une liste de 36 images à faire apparaître dans le jeu de memory
const imageList: ReactElement[] = [
    <BackImage boxSize={12}/>,
];
const backImage: ReactElement = <BackImage boxSize={12}/>;

function getReturnedCells(logicGrid: GridMinigame) {
    const rc: MemoryCaseTemplate[] = [];
    logicGrid.forEach((row) => {
        row.forEach((cell) => {
            const realCell = cell as MemoryCaseTemplate;
            if (realCell.isReturned) rc.push(realCell);
        });
    });
    return rc;
}

function transformCoord(index: number, nbCol: number) {
    const col = String.fromCharCode("A".charCodeAt(0) + (index % nbCol));
    const row = Math.floor(index / nbCol).toString();
    return col + row;
}

export const minigameInfos: IMinigame = {
    hasLeftRightInputs: false,
    setUpdateGrid: () => null,
    setLogicGrid: () => null,
    nbRow: 9,
    nbCol: 8,
    score: 0,
    scoreTresh: (8 * 9) / 2,
    player: {
        position: {
            x: 0,
            y: "A",
        },
        direction: [],
    },
    ViewGrid(logicGrid: GridMinigame) {
        const cols = Array.from(logicGrid.keys());
        const parameters = [];
        for (let i = 0; i < this.nbRow; i++) {
            for (let j = 0; j < this.nbCol; j++) {
                const observedCell = (logicGrid.get(cols[j]) as MemoryCaseTemplate[])[
                    i
                    ];
                parameters.push(
                    observedCell.isFound || observedCell.isReturned
                        ? imageList[observedCell.idLink]
                        : backImage
                );
            }
        }
        return (
            <Grid
                templateColumns={`repeat(${this.nbCol},auto)`}
                sx={{
                    height: "80vh",
                    width: "min(80vh,80vh)",
                }}
            >
                {parameters.map((v, index) => (
                    <GridItem
                        colSpan={1}
                        rowSpan={1}
                        backgroundColor="gray.500"
                        w="42px"
                        h="42px"
                        onClick={() => this.playerInput(transformCoord(index, this.nbCol), logicGrid)}
                    >
                        {v}
                    </GridItem>
                ))}
            </Grid>
        );
    },
    init(
        logicGrid: GridMinigame,
        setUpdateGrid: SetUpdateGrid,
        setLogicGrid: SetGridMinigame
    ): void {
        const values = Array.from(
            {length: (this.nbRow * this.nbCol) / 2},
            (_, i) => i + 1
        );
        values.push(
            ...Array.from({length: (this.nbRow * this.nbCol) / 2}, (_, i) => i + 1)
        );
        for (let i = values.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [values[i], values[j]] = [values[j], values[i]];
        }
        logicGrid.forEach((row, i) => {
            row.forEach((cell, j) => {
                let realCell = cell as MemoryCaseTemplate;
                realCell.idLink =
                    values[i.charCodeAt(0) - "A".charCodeAt(0) + this.nbCol * j];
            });
        });
        this.setUpdateGrid = setUpdateGrid;
        this.setLogicGrid = setLogicGrid;
    },
    update(logicGrid: GridMinigame): void {
        this.setLogicGrid(logicGrid);
        this.setUpdateGrid(true);
    },
    caseTemplateCreate: () => new MemoryCaseTemplate(),
    playerInput(input: string, logicGrid: GridMinigame): void {
        // input de la forme "COLROW"
        const returnedCell = (logicGrid.get(input[0]) as MemoryCaseTemplate[])[
            parseInt(input[1])
            ];
        returnedCell.isReturned = true;
        this.setUpdateGrid(true);
    },
    evolve(logicGrid: GridMinigame): void {
        const returnedCells = getReturnedCells(logicGrid);
        if (returnedCells.length > 1) {
            if (returnedCells[0].idLink === returnedCells[1].idLink) {
                returnedCells[0].isFound = true;
                returnedCells[1].isFound = true;
                this.score += 1;
            }
            for (const returnedCell of returnedCells) {
                returnedCell.isReturned = false;
            }
        }
        this.update(logicGrid);
    }
};
