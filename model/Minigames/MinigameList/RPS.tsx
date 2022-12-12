import {
  CaseTemplate,
  GridMinigame,
  IMinigame,
  SetGridMinigame,
  SetUpdateGrid,
} from "../IMinigame";
import { Box, Center, Grid, GridItem, IconButton } from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  PaperEnemyIcon,
  PaperIcon,
  RockEnemyIcon,
  RockIcon,
  ScissorsEnemyIcon,
  ScissorsIcon,
} from "../../../components/icons/RPSIcons";
import { breakpoints } from "../../../theme";
import { Enemy } from "../../../components/enemy/Enemy";

enum RPSEnum {
  Rock,
  Paper,
  Scissors,
  None = -1,
}

const rpsIcon = [
  <RockEnemyIcon boxSize={breakpoints.rpsButtonSize} />,
  <PaperEnemyIcon boxSize={breakpoints.rpsButtonSize} />,
  <ScissorsEnemyIcon boxSize={breakpoints.rpsButtonSize} />,
  <RockIcon boxSize={breakpoints.rpsButtonSize} />,
  <PaperIcon boxSize={breakpoints.rpsButtonSize} />,
  <ScissorsIcon boxSize={breakpoints.rpsButtonSize} />,
];

export class RPSCaseTemplate implements CaseTemplate {
  whatElement: RPSEnum = RPSEnum.None;

  constructor() {}
}

let viewClick = false;

export const minigameInfos: IMinigame = {
  Controls(logicGrid: GridMinigame): ReactElement {
    return (
      <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: { base: "1rem", md: "2rem" },
        }}
      >
        {Object.keys(RPSEnum)
          .filter((k) => typeof RPSEnum[k as any] === "number" && k != "None")
          .map((elem) => (
            <IconButton
              sx={{
                background: "none",
                "&:hover": {
                  background: "none",
                  opacity: "0.5",
                },
                "&:active": {
                  background: "none",
                  opacity: "0.5",
                },
              }}
              aria-label={elem}
              icon={rpsIcon[RPSEnum[elem as keyof typeof RPSEnum] + 3]}
              onClick={() => this.playerInput(elem, logicGrid)}
            />
          ))}
      </Box>
    );
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
        gap={6}
        h={"min(50vh)"}
        w={"min(85vh,85vw)"}
        sx={{
          backgroundImage: `url("/static/images/backgrounds/rps.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        templateColumns={`repeat(${this.nbCol},auto)`}
      >
        <Center>
          <GridItem colSpan={2}>
            {(logicGrid.get("A") as RPSCaseTemplate[])[0].whatElement !==
            RPSEnum.None ? (
              rpsIcon[(logicGrid.get("A") as RPSCaseTemplate[])[0].whatElement]
            ) : (
              <></>
            )}
          </GridItem>
        </Center>
        <Center>
          <GridItem colSpan={2}>
            {(logicGrid.get("B") as RPSCaseTemplate[])[0].whatElement !==
            RPSEnum.None ? (
              rpsIcon[(logicGrid.get("B") as RPSCaseTemplate[])[0].whatElement]
            ) : (
              <></>
            )}
          </GridItem>
          <Enemy
            name={"mageBoss"}
            currLife={((this.scoreTresh - this.score) / this.scoreTresh) * 100}
          />
        </Center>
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
  evolve(): void {},
};
