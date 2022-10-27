import { SimpleGrid } from "@chakra-ui/react";
import ChoiceBox from "./ChoiceBox";
import DescriptionAndSubmitBox from "./DescriptionAndSubmitBox";
import {SetStateAction, useState} from "react";
import { ClassController } from "../../model/Classes/ClassController";
import {IClass} from "../../model/Classes/IClass";

export default function choiceClass(props: any) {
  const RootSetPlayerClass = props.RootSetPlayerClass;
  const [selectedClass, setSelectedClass] = useState(ClassController.getById("Unknown"));
  const [description, setDescription] = useState("");

  function handleChoice(classe: SetStateAction<IClass>) {
    //make sure that setSelected state is updated prev state nextstate
    setDescription((classe as IClass).description);
    setSelectedClass(classe);
  };

  return (
    <>
      <SimpleGrid columns={3} spacing="5px" h="100%">
        {ClassController.getClassesByIds(["Mage", "Thief", "Warrior"])
          .map((classe) => (
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
}