import {ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon, IconProps,} from "@chakra-ui/icons";
import {Box, ComponentWithAs, Icon, Text} from "@chakra-ui/react";
import React from "react";
import {breakpoints, colors} from "../../theme";
import {IEvent} from "../../model/Events/IEvent";
import {EventController} from "../../model/Events/EventController";
import {Direction, IOutput} from "../../model/Events/IOutput";

function positionFromDirection(direction: Direction) : {[key: string]: string} {
    switch (direction) {
        case Direction.up:
            return {
                top: "12%"
            }
        case Direction.down:
            return {
                bottom: "25%"
            }
        default:
            return {
                [Direction[direction]]: "20%",
                bottom: "50%",
            }
    }
}

export default function EventBox(props: { event: IEvent }) {
  const event = props.event;
  const handler: React.MouseEventHandler = (event) => {};
  const stringToArrow : {[key: string]: ComponentWithAs<"svg", IconProps>} = {
      up: ArrowUpIcon,
      down: ArrowDownIcon,
      left: ArrowLeftIcon,
      right: ArrowRightIcon
  };
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
        {
            event.sorties.map((output: IOutput) => {
              return <Icon
                  color="white"
                  sx={{
                    position: "absolute",
                    ...positionFromDirection(output.direction)
                  }}
                  as={stringToArrow[Direction[output.direction]]}
                />
            })
        }
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
