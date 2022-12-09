import {
  Box,
  Button,
  Center,
  IconButton,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { PlayButton } from "../components/icons/playButton.svg";
import { breakpoints } from "../theme";
import { LeaderBoardButton } from "../components/icons/leaderboardButton.svg";

export default function Home() {
  return (
    <Center>
      <Box height="60vh">
        <SimpleGrid columns={1} spacing="5px" marginTop="20vh">
          <Box
            bg="tomato"
            w="100%"
            h="100px"
            display="flex"
            justifyContent={"center"}
          >
            <Text fontSize="6xl">overtale</Text>
          </Box>
          <Link href="/game">
            <Box
              sx={{
                position: "relative",
              }}
            >
              <IconButton
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                  background: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
                icon={
                  <PlayButton
                    boxSize={breakpoints.playButtonBoxSize}
                  ></PlayButton>
                }
                aria-label={"Button"}
              ></IconButton>
              <Text
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                  color: "white",
                }}
                fontSize={breakpoints.fontSize.h3}
              >
                Play
              </Text>
            </Box>
          </Link>
          <Link href="/leaderBoard">
            <Box
              sx={{
                position: "relative",
              }}
            >
              <IconButton
                sx={{
                  position: "absolute",
                  right: "65%",
                  zIndex: 1,
                  background: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
                icon={
                  <LeaderBoardButton
                    boxSize={breakpoints.playButtonBoxSize}
                  ></LeaderBoardButton>
                }
                aria-label={"Button"}
              ></IconButton>
              <Text
                sx={{
                  position: "absolute",
                  zIndex: 1,
                  color: "white",
                  right: "77%",
                  //media query for screen abote 425px
                  [`@media (min-width: 425px)`]: {
                    right: "80%",
                  },
                  [`@media (min-width: 1024px)`]: {
                    right: "88%",
                  },
                  [`@media (min-width: 1440px)`]: {
                    right: "100%",
                  },
                  [`@media (min-width: 1441px)`]: {
                    right: "111%",
                  },
                }}
                fontSize={breakpoints.fontSize.h4}
              >
                Highscore
              </Text>
            </Box>
          </Link>
        </SimpleGrid>
      </Box>
    </Center>
  );
}
