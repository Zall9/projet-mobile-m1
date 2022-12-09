import {
    Box,
    Button,
    Center,
    IconButton,
    SimpleGrid,
    Text,
    keyframes,
} from "@chakra-ui/react";
import Link from "next/link";
import {PlayButton} from "../components/icons/playButton.svg";
import {breakpoints} from "../theme";
import {LeaderBoardButton} from "../components/icons/leaderboardButton.svg";

const glitch = keyframes`
  0% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
      -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
    -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  14% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
      -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
    -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  15% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
    0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
      -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  49% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
    0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
      -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  50% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
    0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  99% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
    0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  100% {
    text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
      -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
      -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
  }

`;

export default function Home() {
    const glitchAnimation = `${glitch} 2s infinite linear alternate-reverse`;
    return (
        <Center>
            <Box height="60vh">
                <SimpleGrid columns={1} spacing="5px" marginTop="20vh">
                    <Link href="/game">
                        <Box
                            sx={{
                                position: "relative",
                            }}
                        >
                            <IconButton
                                sx={{
                                    position: "absolute",
                                    top: "50vh",
                                    left: "50%",
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
                                    top: "50vh",
                                    left: "50%",
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
                                    top: "50vh",
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
                                    top: "50vh",
                                    //media query for screen abote 425px

                                }}
                                fontSize={breakpoints.fontSize.h4}
                            >
                                Highscore
                            </Text>
                        </Box>
                    </Link>
                    <Text
                        animation={glitchAnimation}
                        fontSize={breakpoints.fontSize.h1}
                        sx={{
                            color: "white",
                            fontSize: "100px",
                            position: "relative",
                            margin: "0 auto",
                            "&:after": {
                                content: "attr(data-text)",
                                position: "absolute",
                                left: "2px",
                                textShadow: "-1px 0 red",
                                top: "0",
                                color: "white",
                                background: "black",
                                overflow: "hidden",
                                clip: "rect(0,900px,0,0)",
                                animation: `${glitchAnimation} 0.5s infinite linear alternate-reverse`,
                            },
                        }}
                    >
                        OverTale
                    </Text>
                </SimpleGrid>
            </Box>
        </Center>
    );
}
