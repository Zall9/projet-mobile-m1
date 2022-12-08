import {CaseTemplate, GridMinigame, IMinigame, SetGridMinigame, SetUpdateGrid,} from "../IMinigame";
import {Grid, GridItem, IconButton} from "@chakra-ui/react";
import {ReactElement} from "react";
import {PaperIcon, RockIcon, ScissorsIcon} from "../../../components/icons/RPSIcons"

enum RPSEnum {
    Rock,
    Paper,
    Scissors,
    None = -1
}

const rpsIcon = [
    <RockIcon/>, <PaperIcon/>, <ScissorsIcon/>
];

export class RPSCaseTemplate implements CaseTemplate {
    whatElement: RPSEnum = -1;

    constructor() {
    }
}

let viewClick = false;

export const minigameInfos: IMinigame = {
    Controls(logicGrid: GridMinigame): ReactElement {
        return <>
            {
                Object.keys(RPSEnum).filter(k => typeof RPSEnum[k as any] === "number" && k != "None").map((elem) => (
                    <IconButton
                        aria-label={elem}
                        icon={rpsIcon[RPSEnum[elem as keyof typeof RPSEnum]]}
                        onClick={() => this.playerInput(elem, logicGrid)}
                    />))
            }
        </>;
    },
    refreshInterval: 99999999999999,
    setUpdateGrid: () => null,
    setLogicGrid: () => null,
    nbRow: 1,
    nbCol: 2,
    score: 0,
    scoreTresh: 5,
    player: {
        position: {
            x: 0,
            y: "A",
        },
        direction: [],
    },
    ViewGrid(logicGrid: GridMinigame) {
        return (
            <Grid
                templateColumns={`repeat(${this.nbCol},auto)`}
                sx={{
                    height: "80vh",
                    width: "min(80vh,80vh)",
                }}
            >
                <GridItem
                    colSpan={1}
                    rowSpan={1}
                    w="42px"
                    h="42px"
                >
                    {(logicGrid.get("A") as RPSCaseTemplate[])[0].whatElement !== -1 ? rpsIcon[(logicGrid.get("A") as RPSCaseTemplate[])[0].whatElement] : <></>}
                </GridItem>
                <GridItem
                    colSpan={1}
                    rowSpan={1}
                    w="42px"
                    h="42px"
                >
                    {(logicGrid.get("B") as RPSCaseTemplate[])[0].whatElement !== -1 ? rpsIcon[(logicGrid.get("B") as RPSCaseTemplate[])[0].whatElement] : <></>}
                </GridItem>
            </Grid>
        );
    },
    init(
        logicGrid: GridMinigame,
        setUpdateGrid: SetUpdateGrid,
        setLogicGrid: SetGridMinigame
    ): void {
        this.setUpdateGrid = setUpdateGrid;
        this.setLogicGrid = setLogicGrid;
    },
    update(logicGrid: GridMinigame): void {
        this.setLogicGrid(logicGrid);
        this.setUpdateGrid(true);
    },
    caseTemplateCreate: () => new RPSCaseTemplate(),
    playerInput(input: string, logicGrid: GridMinigame): void {
        const player = (logicGrid.get("A") as RPSCaseTemplate[])[0];
        const ia = (logicGrid.get("B") as RPSCaseTemplate[])[0];
        if (viewClick) {
            // Reset
            player.whatElement = RPSEnum.None;
            ia.whatElement = RPSEnum.None;
        } else {
            // Play and play result
            player.whatElement = Object.keys(RPSEnum).findIndex((e) => e == input);
            ia.whatElement = Math.floor(Math.random() * 3);
            if ((player.whatElement - ia.whatElement) % 3 == 1) {
                this.score += 1;
            }
        }
        viewClick = !viewClick;
        this.update(logicGrid);
        this.setUpdateGrid(true);
    },
    evolve(): void {
    }
};
