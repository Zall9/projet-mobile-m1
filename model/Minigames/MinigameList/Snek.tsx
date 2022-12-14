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
} from "@chakra-ui/icons";
import { ReactElement } from "react";
import { Cerise } from "../../../components/icons/Cerise";

import { Leaderboard, ScoreRow } from "../../Leaderboard";
import {
  PaperEnemyIcon,
  RockEnemyIcon,
  ScissorsEnemyIcon,
} from "../../../components/icons/RPSIcons";
import {
  Snake_body_Icon,
  Snake_head_Icon,
  Snake_tail_Icon,
} from "../../../components/icons/snake.icons";
import { breakpoints } from "../../../theme";

export class SnekCaseTemplate implements CaseTemplate {
  hasFruit: boolean;

  constructor() {
    this.hasFruit = false;
  }
}

let oldPositions: Coordinates[];
let lenPositions: number;

const playerHead = (direction: Direction) => (
  <Snake_head_Icon
    boxSize={breakpoints.playButtonBoxSize}
    sx={{ transform: "rotate(" + ((90 * direction) % 360) + "deg)" }}
  />
);

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

function getDir(cprec: Coordinates, cnext: Coordinates): Direction {
  if (cprec.x - cnext.x == 0)
    return 2 + cnext.y.charCodeAt(0) - cprec.y.charCodeAt(0);
  return 1 + cnext.x - cprec.x;
}

function getPlayerCorpse(pos: number, player: MinigamePlayer) {
  const precedentC = pos == 0 ? player.position : oldPositions[pos - 1];
  const dirToPrec: Direction = getDir(precedentC, oldPositions[pos]);
  if (pos == lenPositions - 1) {
    return (
      <Snake_tail_Icon
        boxSize={breakpoints.playButtonBoxSize}
        sx={{ transform: "rotate(" + ((90 * dirToPrec) % 360) + "deg)" }}
      />
    );
  }
  return <Snake_body_Icon boxSize={breakpoints.playButtonBoxSize} />;
}

function isInvalidPosition(position: Coordinates, maxX: number, maxY: number) {
  return (
    position.x < 0 ||
    position.x >= maxX ||
    position.y.charCodeAt(0) < "A".charCodeAt(0) ||
    position.y.charCodeAt(0) - maxY >= "A".charCodeAt(0)
  );
}

function getCaseOfPlayer(logicGrid: GridMinigame, player: MinigamePlayer) {
  return (logicGrid.get(player.position.y) as SnekCaseTemplate[])[
    player.position.x
  ];
}

let ended: boolean;
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
            playerHead(this.player.direction)
          ) : oldPositions.findIndex((v) => v.x === i && v.y === cols[j]) !==
            -1 ? (
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
    ended = false;
    oldPositions = [];
    lenPositions = 2;
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
  playerInput(input: string): void {
    if (ended) {
      return;
    }
    if (
      this.player.direction % 2 ==
      Object.values(Direction).indexOf(input) % 2
    )
      return;
    this.player.direction = Object.values(Direction).indexOf(input);
  },

  evolve(logicGrid: GridMinigame): void {
    if (ended) {
      return;
    }
    const veryLastPos = JSON.parse(
      JSON.stringify(oldPositions[lenPositions - 1])
    );
    for (let i = lenPositions - 1; i > 0; i--) {
      oldPositions[i] = JSON.parse(JSON.stringify(oldPositions[i - 1]));
    }
    oldPositions[0] = JSON.parse(JSON.stringify(this.player.position));
    switch (this.player.direction) {
      case Direction.down:
        this.player.position.x++;
        break;
      case Direction.up:
        this.player.position.x--;
        break;
      case Direction.left:
        this.player.position.y = String.fromCharCode(
          this.player.position.y.charCodeAt(0) - 1
        );
        break;
      case Direction.right:
        this.player.position.y = String.fromCharCode(
          this.player.position.y.charCodeAt(0) + 1
        );
        break;
    }
    if (
      oldPositions.findIndex(
        (v) => v.x === this.player.position.x && v.y === this.player.position.y
      ) !== -1 ||
      isInvalidPosition(this.player.position, this.nbRow, this.nbCol)
    ) {
      ended = true;
      const ldb = new Leaderboard();
      ldb.init().then(() => {
        const user = ldb.getUser(
          localStorage.getItem("username") as string
        ) as ScoreRow;
        user.score -= this.scoreTresh - this.score;
        Leaderboard.updateUser(user as ScoreRow);
        this.score = this.scoreTresh;
        this.setUpdateGrid(true);
      });
      return;
    }
    const currC: SnekCaseTemplate = getCaseOfPlayer(logicGrid, this.player);
    if (currC.hasFruit) {
      this.score++;
      currC.hasFruit = false;
      lenPositions++;
      oldPositions.push(JSON.parse(JSON.stringify(veryLastPos)));
      generateFruitInGrid(logicGrid);
    }
    this.setLogicGrid(logicGrid);
    this.setUpdateGrid(true);
  },
};
