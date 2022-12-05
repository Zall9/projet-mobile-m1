import {
  CaseTemplate,
  GridMinigame,
  IMinigame,
  SetGridMinigame,
  SetUpdateGrid,
} from "../IMinigame";
import { Direction } from "../../Events/IOutput";
import { Grid, GridItem } from "@chakra-ui/react";
import { Panier } from "../../../components/icons/Panier";
import { Cerise } from "../../../components/icons/Cerise";

const NBROW = 7;

export class PanierCaseTemplate implements CaseTemplate {
  hasFruit: boolean;

  constructor() {
    this.hasFruit = false;
  }
}

export const minigameInfos: IMinigame = {
  setUpdateGrid: () => null,
  setLogicGrid: () => null,
  nbRow: NBROW,
  nbCol: 5,
  score: 0,
  scoreTresh: 10,
  player: {
    position: {
      x: NBROW - 1,
      y: "A",
    },
    direction: [Direction.left, Direction.right],
  },
  ViewGrid(logicGrid: GridMinigame) {
    const cols = Array.from(logicGrid.keys());
    const parameters = [];
    for (let i = 0; i < this.nbRow; i++) {
      for (let j = 0; j < this.nbCol; j++) {
        parameters.push(
          i === this.nbRow - 1 && this.player.position.y === cols[j] ? (
            <Panier boxSize={12} />
          ) : (logicGrid.get(cols[j]) as PanierCaseTemplate[])[i].hasFruit ? (
            <Cerise boxSize={12} />
          ) : (
            <></>
          )
        );
      }
    }
    return (
      <Grid
        templateColumns={`repeat(${this.nbCol},auto)`}
        sx={{
          height: "85vh",
          width: "min(80vh,80vh)",
        }}
      >
        {parameters.map((v) => (
          <GridItem
            colSpan={1}
            rowSpan={1}
            backgroundColor="gray.500"
            w="42px"
            h="42px"
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
    for (let i = 0; i < 3; i++) {
      spawnItems(logicGrid, this);
    }
    this.setUpdateGrid = setUpdateGrid;
    this.setLogicGrid = setLogicGrid;
  },
  update(logicGrid: GridMinigame): void {
    this.setLogicGrid(logicGrid);
    this.setUpdateGrid(true);
  },
  caseTemplateCreate: () => new PanierCaseTemplate(),
  playerInput(input: string): void {
    let oldPos = this.player.position.y.charCodeAt(0) - "A".charCodeAt(0);
    if (input === "left" && oldPos > 0) {
      oldPos--;
    } else if (input === "right" && oldPos < 4) {
      oldPos++;
    }
    this.player.position.y = String.fromCharCode("A".charCodeAt(0) + oldPos);
    this.setUpdateGrid(true);
  },
  evolve(logicGrid: GridMinigame): void {
    const logicGridCopy = new Map(
      JSON.parse(JSON.stringify(Array.from(logicGrid)))
    ) as GridMinigame;
    logicGrid.forEach((row, i) => {
      row.forEach((cell, j) => {
        let realCell = cell as PanierCaseTemplate;
        if (realCell.hasFruit) {
          if (j === this.nbRow - 1) {
            this.score += this.player.position.y === i ? 1 : 0;
          } else {
            (logicGridCopy.get(i) as PanierCaseTemplate[])[j + 1].hasFruit =
              true;
          }
          (logicGridCopy.get(i) as PanierCaseTemplate[])[j].hasFruit = false;
          realCell.hasFruit = false;
        }
      });
    });
    Math.random() < 1 / 3 ? spawnItems(logicGridCopy, this) : null;
    this.update(logicGridCopy);
  },
};

function spawnItems(logicGrid: GridMinigame, minigame: IMinigame) {
  const letterDrawn = String.fromCharCode(
    65 + Math.floor(Math.random() * minigame.nbCol)
  );
  const caseDrawn = (logicGrid.get(letterDrawn) as PanierCaseTemplate[])[0];
  caseDrawn.hasFruit = true;
}
