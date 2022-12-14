import {
  CaseTemplate,
  GridMinigame,
  IMinigame,
  SetGridMinigame,
  SetUpdateGrid,
} from "../IMinigame";
import { Direction } from "../../Events/IOutput";
import { Box, Center, Grid, GridItem, IconButton } from "@chakra-ui/react";
import { Panier } from "../../../components/icons/Panier";
import { Cerise } from "../../../components/icons/Cerise";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { ReactElement } from "react";
import { Enemy } from "../../../components/enemy/Enemy";

const NBROW = 7;

export class PanierCaseTemplate implements CaseTemplate {
  hasFruit: boolean;

  constructor() {
    this.hasFruit = false;
  }
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
        />{" "}
      </Box>
    );
  },
  //intervale pour refresh la vue
  refreshInterval: 150,
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
    direction: Direction.left,
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
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            right: "12.5%",
            width: "70vw",
            img: {
              height: "20vh",
            },
          }}
        >
          <Center>
            <Enemy
              name={"carnivoran"}
              currLife={Math.floor(
                ((this.scoreTresh - this.score) / this.scoreTresh) * 100
              )}
            ></Enemy>
          </Center>
        </Box>
      </>
    );
  },
  /* Initialisation du jeu. */
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
  /* Fonction appelée à chaque tick. */
  update(logicGrid: GridMinigame): void {
    this.setLogicGrid(logicGrid);
    this.setUpdateGrid(true);
  },

  caseTemplateCreate: () => new PanierCaseTemplate(),
  /* Déplacer le joueur vers la gauche ou vers la droite. */
  playerInput(input: string): void {
    /* Déplacer le joueur vers la gauche ou vers la droite. */
    let oldPos = this.player.position.y.charCodeAt(0) - "A".charCodeAt(0);
    if (input === "left" && oldPos > 0) {
      oldPos--;
    } else if (input === "right" && oldPos < 4) {
      oldPos++;
    }
    this.player.position.y = String.fromCharCode("A".charCodeAt(0) + oldPos);
    this.setUpdateGrid(true);
  },
  /* La fonction qui est appelée à chaque fois que le jeu est mis à jour. Il est utilisé pour déplacer les fruits vers le
																				  bas et pour engendrer de nouveaux fruits. */
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

/**
 * mets un fruit dans la colonne correspondante , puis
 * définit la propriété hasFruit de la case sur true
 * @param {GridMinigame} logicGrid - GridMinigame : la grille qui sera utilisée pour afficher le mini-jeu.
 * @param {IMinigame} minigame - IMinijeu
 */
function spawnItems(logicGrid: GridMinigame, minigame: IMinigame) {
  const letterDrawn = String.fromCharCode(
    65 + Math.floor(Math.random() * minigame.nbCol)
  );
  const caseDrawn = (logicGrid.get(letterDrawn) as PanierCaseTemplate[])[0];
  caseDrawn.hasFruit = true;
}
