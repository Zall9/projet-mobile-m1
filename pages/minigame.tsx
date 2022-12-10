import { MinigameController } from "../model/Minigames/MinigameController";
import { Grid, GridItem } from "@chakra-ui/react";
import MinigameComponent from "../components/minigame/MinigameComponent";

export default function minigame() {
  MinigameController.init();
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
