import { Box, Text } from "@chakra-ui/react";
import React, {SetStateAction} from "react";
import { breakpoints, colors } from "../../theme";
import {IClass} from "../../model/Classes/IClass";
import {ClassController} from "../../model/Classes/ClassController";

export default function ChoiceBox(props: { classe: IClass; handleChoice: (state: SetStateAction<IClass>) => void }) {
    const classe = props.classe;
    const handleChoice = props.handleChoice;
    function manageEventChoice() {
        handleChoice(classe);
    }
    return (
        <Box sx={{
            borderColor: "black",
            borderWidth: "1px",
            height: "50vh",
            backgroundImage: `url(${ClassController.getImage(classe)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }} as='button' onClick={manageEventChoice}>
            <Text color={colors.fonts.white} fontSize={breakpoints.fontSize.h1}>
                {classe.nom}
            </Text>
        </Box>
    );
}