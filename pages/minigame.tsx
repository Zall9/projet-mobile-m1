import {
  getStaticPropsMinigame,
  MinigameController,
} from "../model/Minigames/MinigameController";
import { Box, Center, Grid, GridItem, Text } from "@chakra-ui/react";
import MinigameComponent from "../components/minigame/MinigameComponent";
import { IMinigame } from "../model/Minigames/IMinigame";
import { IEvent } from "../model/Events/IEvent";

export async function getStaticProps() {
  return {
    props: {
      prepareMinigameLists: await getStaticPropsMinigame(),
    },
  };
}

export default function minigame(
  { prepareMinigameLists }: { prepareMinigameLists: string[] },
  state: { nextEvent: IEvent; minigameId: string }
) {
  MinigameController.init(prepareMinigameLists);
  return (
    <Grid templateColumns="repeat(8,1fr)" gap={6}>
      <GridItem colSpan={1} />
      <GridItem rowSpan={2} colSpan={6}></GridItem>
      <GridItem colSpan={1} />
      <GridItem rowSpan={6} colSpan={1} />
      <GridItem rowSpan={6} colSpan={6}>
        <MinigameComponent />
      </GridItem>
    </Grid>
  );
}
