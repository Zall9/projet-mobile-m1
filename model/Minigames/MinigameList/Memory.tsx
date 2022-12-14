import {
  CaseTemplate,
  GridMinigame,
  IMinigame,
  SetGridMinigame,
  SetUpdateGrid,
} from "../IMinigame";
import { Center, Grid, GridItem } from "@chakra-ui/react";
import {
  BackIcon,
  Memory1,
  Memory10,
  Memory11,
  Memory12,
  Memory2,
  Memory3,
  Memory4,
  Memory5,
  Memory6,
  Memory7,
  Memory8,
  Memory9,
} from "../../../components/icons/MemoryIcons";
import { ReactElement } from "react";
import { Enemy } from "../../../components/enemy/Enemy";
import { Direction } from "../../Events/IOutput";

export class MemoryCaseTemplate implements CaseTemplate {
  isReturned: boolean;
  isFound: boolean;
  idLink: number = -1;

  constructor() {
    this.isReturned = false;
    this.isFound = false;
  }
}

// liste d'images pour le jeu de memoire
const imageList: ReactElement[] = [
  <></>,
  <Memory1 boxSize={12} />,
  <Memory2 boxSize={12} />,
  <Memory3 boxSize={12} />,
  <Memory4 boxSize={12} />,
  <Memory5 boxSize={12} />,
  <Memory6 boxSize={12} />,
  <Memory7 boxSize={12} />,
  <Memory8 boxSize={12} />,
  <Memory9 boxSize={12} />,
  <Memory10 boxSize={12} />,
  <Memory11 boxSize={12} />,
  <Memory12 boxSize={12} />,
];
const backImage: ReactElement = <BackIcon boxSize={12} />;

/**
 * Il renvoie un tableau de toutes les cellules qui ont été retournées
 * @param {GridMinigame} logicGrid - GridMinigame - La grille qui contient la logique du jeu.
 * @returns Un tableau de MemoryCaseTemplate
 */
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

/**
 * prend un index et le nombre de colonnes de la grille
 * renvoie une chaîne représentant la colonne et la ligne de l'index
 * @param {number} index - l'indice de la cellule dans le tableau
 * @param {number} nbCol - le nombre de colonnes dans la grille
 * @returns La colonne et la ligne de la cellule.
 */
function transformCoord(index: number, nbCol: number) {
  const col = String.fromCharCode("A".charCodeAt(0) + (index % nbCol));
  const row = Math.floor(index / nbCol).toString();
  return col + row;
}

let visuClick = true;

export const minigameInfos: IMinigame = {
  Controls(): ReactElement {
    return <></>;
  },
  refreshInterval: 99999999999999,
  setUpdateGrid: () => null,
  setLogicGrid: () => null,
  nbRow: 6,
  nbCol: 4,
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
        gap={6}
        h={"min(70vh,70vw)"}
        w={"min(80vh,80vw)"}
        templateColumns={`repeat(${this.nbCol},auto)`}
      >
        {parameters.map((v, index) => (
          <Center>
            <GridItem
              colSpan={1}
              rowSpan={1}
              w="auto"
              h="auto"
              onClick={() =>
                this.playerInput(transformCoord(index, this.nbCol), logicGrid)
              }
            >
              {v}
            </GridItem>
          </Center>
        ))}
        <GridItem colSpan={1} />
        <GridItem colSpan={this.nbCol - 2}>
          <Enemy
            currLife={Math.floor(
              ((this.scoreTresh - this.score) / this.scoreTresh) * 100
            )}
            name={"bonefire"}
          ></Enemy>
        </GridItem>
        <GridItem colSpan={1} />
      </Grid>
    );
  },
  score: 0,
  scoreTresh: (6 * 4) / 2,
  player: {
    position: {
      x: 0,
      y: "A",
    },
    direction: Direction.left,
  },
  init(
    logicGrid: GridMinigame,
    setUpdateGrid: SetUpdateGrid,
    setLogicGrid: SetGridMinigame
  ): void {
    const values = Array.from(
      { length: (this.nbRow * this.nbCol) / 2 },
      (_, i) => i + 1
    );
    values.push(
      ...Array.from({ length: (this.nbRow * this.nbCol) / 2 }, (_, i) => i + 1)
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
    let returnedCells = getReturnedCells(logicGrid);
    if (!visuClick) {
      for (const returnedCell of returnedCells) {
        returnedCell.isReturned = false;
      }
      visuClick = true;
    }
    const returnedCell = (logicGrid.get(input[0]) as MemoryCaseTemplate[])[
      parseInt(input[1])
    ];
    returnedCell.isReturned = !returnedCell.isFound;
    returnedCells = getReturnedCells(logicGrid);
    if (returnedCells.length > 1) {
      if (returnedCells[0].idLink === returnedCells[1].idLink) {
        returnedCells[0].isFound = true;
        returnedCells[1].isFound = true;
        this.score += 1;
      }
      visuClick = false;
    }
    this.update(logicGrid);
    this.setUpdateGrid(true);
  },
  evolve(): void {},
};
