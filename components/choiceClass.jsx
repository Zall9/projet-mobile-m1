import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { constantes } from "../const";
import { breakpoints } from "../breakpoints";
import { classes } from "../model/classList";
const choiceClass = () => {
  console.log(classes, "classesSQKJDLQS");
  console.log(breakpoints, "breakpointsSQD");
  return (
    <>
      <SimpleGrid columns={3} spacing="5px" h="100%">
        {classes.map((classe) => (
          <>
            <Box
              sx={{
                borderColor: "black",
                borderWidth: "1px",
                height: "50vh",
              }}
            >
              <Text fontSize={breakpoints.fontSize.h3}>{classe.nom}</Text>
              <Text fontSize={breakpoints.fontSize.h6}>
                {classe.description}
              </Text>
            </Box>
          </>
        ))}
      </SimpleGrid>
    </>
  );
};

export default choiceClass;
