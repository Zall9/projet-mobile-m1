import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { constantes } from "../../const";
import { breakpoints } from "../../theme";
import { classes } from "../../model/classList";
import ChoiceBox from "./ChoiceBox";
import DescriptionBox from "./DescriptionBox";
import { useEffect, useRef, useState } from "react";

const choiceClass = () => {
  const [selectedClass, setSelectedClass] = useState();
  const [description, setDescription] = useState(null);

  const handleChoice = (classe, event) => {
    //make sure that setSelected state is updated prev state nextstate

    setDescription(classe.description);
    setSelectedClass(classe);
  };

  return (
    <>
      <SimpleGrid columns={3} spacing="5px" h="100%">
        {classes.map((classe) => (
          <>
            <ChoiceBox classe={classe} handleChoice={handleChoice} />
          </>
        ))}

        <DescriptionBox description={description} />
      </SimpleGrid>
    </>
  );
};

export default choiceClass;
