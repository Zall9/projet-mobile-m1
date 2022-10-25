import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { constantes } from "../../const";
import { breakpoints } from "../../theme";
import { classes } from "../../model/classList";
import ChoiceBox from "./ChoiceBox";
import DescriptionAndSubmitBox from "./DescriptionAndSubmitBox";
import { useEffect, useRef, useState } from "react";

const choiceClass = (props) => {
  const playerClasse = props.classe;
  const RootSetPlayerClass = props.RootSetPlayerClass;
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

        <DescriptionAndSubmitBox
          handleChoice={handleChoice}
          description={description}
          selectedClass={selectedClass}
          RootSetPlayerClass={RootSetPlayerClass}
        />
      </SimpleGrid>
    </>
  );
};

export default choiceClass;
