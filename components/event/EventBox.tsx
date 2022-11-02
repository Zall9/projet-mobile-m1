import {
  ArrowBackIcon,
  ArrowDownIcon,
  ArrowForwardIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from "@chakra-ui/icons";
import { Box, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { breakpoints, colors } from "../../theme";
import { IEvent } from "../../model/Events/IEvent";
import { EventController } from "../../model/Events/EventController";

export default function EventBox(props: { event: IEvent }) {
  const event = props.event;
  const handler: React.MouseEventHandler = (event) => {};
  return (
    <>
      <Box
        w={breakpoints.eventCardSize}
        sx={{
          display: "flex",
          justifyContent: "center",
          borderColor: "black",
          borderWidth: "1px",
          height: "80vh",
          backgroundImage: `url(${EventController.getImage(event)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={handler}
      >
        {event.sorties.map((output: any) => {
          return output == "haut" ? (
            <Icon
              color="white"
              sx={{
                position: "absolute",
                top: "12%",
              }}
              as={ArrowUpIcon}
            />
          ) : output == "bas" ? (
            <Icon
              color="white"
              sx={{
                position: "absolute",
                bottom: "25%",
              }}
              as={ArrowDownIcon}
            />
          ) : output == "droite" ? (
            <Icon
              color="white"
              sx={{
                position: "absolute",
                right: "20%",
                bottom: "50%",
              }}
              as={ArrowForwardIcon}
            />
          ) : output == "gauche" ? (
            <Icon
              color="white"
              // I need the icon to be on the left INSIDE of the box
              sx={{
                position: "absolute",
                left: "20%",
                bottom: "50%",
              }}
              as={ArrowBackIcon}
            />
          ) : null;
        })}
        <Text
          position="absolute"
          bottom="20%"
          color={colors.fonts.white}
          fontSize={breakpoints.fontSize.h1}
        >
          {event.nom}
        </Text>
      </Box>
    </>
  );
}
