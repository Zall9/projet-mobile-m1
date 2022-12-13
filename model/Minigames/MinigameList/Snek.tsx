import {
  CaseTemplate,
  Coordinates,
  GridMinigame,
  IMinigame,
  MinigamePlayer,
  SetGridMinigame,
  SetUpdateGrid,
} from "../IMinigame";
import { Direction } from "../../Events/IOutput";
import { Box, Center, Grid, GridItem, IconButton } from "@chakra-ui/react";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  EditIcon,
} from "@chakra-ui/icons";
import { ReactElement } from "react";
import { Cerise } from "../../../components/icons/Cerise";
import {
  PaperEnemyIcon,
  RockEnemyIcon,
} from "../../../components/icons/RPSIcons";

export class SnekCaseTemplate implements CaseTemplate {
  hasFruit: boolean;

  constructor() {
    this.hasFruit = false;
  }
}

const oldPositions: Coordinates[] = [];
const lenPositions = 2;

// TODO : replacer par les icones correspondants
const playerHead = [
  <RockEnemyIcon />,
  <RockEnemyIcon />,
  <RockEnemyIcon />,
  <RockEnemyIcon />,
];

function generateFruitInGrid(logicGrid: GridMinigame) {
  const keys = Array.from(logicGrid.keys());
  const fLane = logicGrid.get("A") as SnekCaseTemplate[];
  if (lenPositions === keys.length * fLane.length) return;
  let pos: Coordinates;
  do {
    pos = {
      x: Math.floor(Math.random() * fLane.length),
      y: keys[Math.floor(Math.random() * keys.length)],
    };
  } while (oldPositions.includes(pos));
  const lane: SnekCaseTemplate[] = logicGrid.get(pos.y) as SnekCaseTemplate[];
  lane[pos.x].hasFruit = true;
}

const dirsCorresp = [2, 4, 12, 6];

function getCurveRot(dirToPrec: Direction, dirToNext: Direction) {
  return dirsCorresp.findIndex((v) => v == dirToPrec * dirToNext);
}

function getDir(cprec: Coordinates, cnext: Coordinates): Direction {
  if (cprec.x - cnext.x == 0)
    return 2 + cnext.y.charCodeAt(0) - cprec.y.charCodeAt(0);
  return 1 + cnext.x - cprec.x;
}

function getPlayerCorpse(pos: number, player: MinigamePlayer) {
  const precedentC = pos == 0 ? player.position : oldPositions[pos - 1];
  const dirToPrec: Direction = getDir(precedentC, oldPositions[pos]);
  if (pos == lenPositions - 1) {
    // Tail icon
    return (
      <ArrowUpIcon
        sx={{ transform: "rotate(" + ((90 * dirToPrec) % 360) + "deg)" }}
      />
    );
  }
  const nextC = oldPositions[pos + 1];
  const dirToNext: Direction = getDir(oldPositions[pos], nextC);
  if (precedentC.x == nextC.x || precedentC.y == nextC.y) {
    // Straight body icon
    return (
      <PaperEnemyIcon
        sx={{ transform: "rotate(" + ((90 * dirToPrec) % 360) + "deg)" }}
      />
    );
  }
  // Curved body icon, default up and right
  return (
    <EditIcon
      sx={{
        transform:
          "rotate(" + ((90 * getCurveRot(dirToPrec, dirToNext)) % 360) + "deg)",
      }}
    />
  );
}

export const minigameInfos: IMinigame = {
  /* Les commandes du minijeu. */
  Controls(logicGrid: GridMinigame): ReactElement {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "3em",
        }}
      >
        <IconButton
          aria-label="left"
          icon={<ArrowLeftIcon />}
          onClick={() => this.playerInput("left", logicGrid)}
        />
        <IconButton
          aria-label="right"
          icon={<ArrowRightIcon />}
          onClick={() => this.playerInput("right", logicGrid)}
        />
        <IconButton
          aria-label="up"
          icon={<ArrowUpIcon />}
          onClick={() => this.playerInput("up", logicGrid)}
        />
        <IconButton
          aria-label="down"
          icon={<ArrowDownIcon />}
          onClick={() => this.playerInput("down", logicGrid)}
        />
      </Box>
    );
  },
  //intervale pour refresh la vue
  refreshInterval: 440,
  setUpdateGrid: () => null,
  setLogicGrid: () => null,
  nbRow: 10,
  nbCol: 9,
  score: 0,
  scoreTresh: 10,
  player: {
    position: {
      x: 0,
      y: "A",
    },
    direction: Direction.right,
  },

  /**
   *  Spécification de viewgrid pour le jeu panier
   *
   *  */
  ViewGrid(logicGrid: GridMinigame) {
    const cols = Array.from(logicGrid.keys());
    const parameters = [];
    for (let i = 0; i < this.nbRow; i++) {
      for (let j = 0; j < this.nbCol; j++) {
        parameters.push(
          this.player.position.x === i && this.player.position.y === cols[j] ? (
            playerHead[this.player.direction]
          ) : oldPositions.includes({ x: i, y: cols[j] }) ? (
            getPlayerCorpse(
              oldPositions.findIndex((v) => v.x === i && v.y === cols[j]),
              this.player
            )
          ) : (logicGrid.get(cols[j]) as SnekCaseTemplate[])[i].hasFruit ? (
            <Cerise boxSize={12} />
          ) : (
            <></>
          )
        );
      }
    }
    return (
      <>
        <Grid
          templateColumns={`repeat(${this.nbCol},auto)`}
          sx={{
            height: "50vh",
            width: "50vw",
            backgroundImage: `url("/static/images/backgrounds/panierFont.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {parameters.map((v) => (
            <Center>
              <GridItem colSpan={1} rowSpan={1} w="42px" h="42px">
                {v}
              </GridItem>
            </Center>
          ))}
        </Grid>
      </>
    );
  },
  /* Initialisation du jeu. */
  init(
    logicGrid: GridMinigame,
    setUpdateGrid: SetUpdateGrid,
    setLogicGrid: SetGridMinigame
  ): void {
    // On place le snek
    this.player.position.x = Math.floor(this.nbRow / 2);
    this.player.position.y = Array.from(logicGrid.keys())[
      Math.floor(this.nbCol / 2)
    ];

    // Ajoute les deux positions du snek au jeu
    oldPositions.push(this.player.position);
    oldPositions.push(this.player.position);

    generateFruitInGrid(logicGrid);
    this.setUpdateGrid = setUpdateGrid;
    this.setLogicGrid = setLogicGrid;
  },
  /* Fonction appelée à chaque tick. */
  update(logicGrid: GridMinigame): void {
    this.setLogicGrid(logicGrid);
    this.setUpdateGrid(true);
  },

  caseTemplateCreate: () => new SnekCaseTemplate(),
  /* Déplacer le joueur vers la gauche ou vers la droite. */
  playerInput(input: string): void {
    // /* Déplacer le joueur vers la gauche ou vers la droite. */
    // let oldPos = this.player.position.y.charCodeAt(0) - "A".charCodeAt(0);
    // if (input === "left" && oldPos > 0) {
    //   oldPos--;
    // } else if (input === "right" && oldPos < 4) {
    //   oldPos++;
    // }
    // this.player.position.y = String.fromCharCode("A".charCodeAt(0) + oldPos);
    // this.setUpdateGrid(true);
  },
  /* La fonction qui est appelée à chaque fois que le jeu est mis à jour. Il est utilisé pour déplacer les fruits vers le
																																					  bas et pour engendrer de nouveaux fruits. */
  evolve(logicGrid: GridMinigame): void {
    // const logicGridCopy = new Map(
    //   JSON.parse(JSON.stringify(Array.from(logicGrid)))
    // ) as GridMinigame;
    // logicGrid.forEach((row, i) => {
    //   row.forEach((cell, j) => {
    //     let realCell = cell as PanierCaseTemplate;
    //     if (realCell.hasFruit) {
    //       if (j === this.nbRow - 1) {
    //         this.score += this.player.position.y === i ? 1 : 0;
    //       } else {
    //         (logicGridCopy.get(i) as PanierCaseTemplate[])[j + 1].hasFruit =
    //           true;
    //       }
    //       (logicGridCopy.get(i) as PanierCaseTemplate[])[j].hasFruit = false;
    //       realCell.hasFruit = false;
    //     }
    //   });
    // });
    // Math.random() < 1 / 3 ? spawnItems(logicGridCopy, this) : null;
    // this.update(logicGridCopy);
  },
};
