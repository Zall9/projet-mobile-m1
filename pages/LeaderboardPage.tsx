import React, {useEffect, useState} from "react";
import {Center, Grid, GridItem, IconButton, keyframes, Text} from "@chakra-ui/react";
import {Leaderboard, ScoreRow} from "../model/Leaderboard";
import {breakpoints} from "../theme";
import {BackBpIcon} from "../components/icons/backPgIcon.svg";
import {BackIcon} from "../components/icons/MemoryIcons";

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
const lights = keyframes`
  0% {
    color: hsl(230, 40%, 80%);
    text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.2),
    0 0 0.125em hsla(320, 100%, 60%, 0.3),
      -1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
    1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }

  30% {
    color: hsl(230, 80%, 90%);
    text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.5),
    0 0 0.125em hsla(320, 100%, 60%, 0.5),
      -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
    0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }

  40% {
    color: hsl(230, 100%, 95%);
    text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.5),
    0 0 0.125em hsla(320, 100%, 90%, 0.5),
      -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
    0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
  }

  70% {
    color: hsl(230, 80%, 90%);
    text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.5),
    0 0 0.125em hsla(320, 100%, 60%, 0.5),
      0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
    -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }

  100% {
    color: hsl(230, 40%, 80%);
    text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.2),
    0 0 0.125em hsla(320, 100%, 60%, 0.3),
      1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
    -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }

`;

const LeaderboardPage = () => {
    const ldb = new Leaderboard();
    const glitchAnimation = `${glitch} 0.5s infinite linear alternate-reverse`;
    const lightAnimation = `${lights} 3s infinite linear alternate-reverse`;
    const [page, setPage] = useState(1);

    const [datas, setDatas] = useState<ScoreRow[]>();
    useEffect(() => {
        ldb.init().then(() => {
            setDatas(ldb.getLeaderboard(page));
        });
    }, []);

    // @ts-ignore
    return (
        <>
            {/*<IconButton aria-label={"Previous page"} icon={"arrow-left"} onClick={() => setPage(page - 1)}/>*/}
            {/*<IconButton aria-label={"Next page"} icon={"arrow-right"} onClick={() => setPage(page + 1)}/>*/}
            <IconButton icon={<BackBpIcon boxSize={breakpoints.playButtonBoxSize}></BackBpIcon>} aria-label={"Next page"}
                sx={{
                    position: "absolute",
                    bottom:"min(20vh,15vw)",
                    background: "none",
                    "&:hover":{
                        outline: "none",
                        background: "none",
                    },
                    "&:active":{
                        outline: "none",
                        background: "none",
                    },
                    "&:focus":{
                        outline: "none",
                        background: "none",
                    }

                }}
            >

            </IconButton>
        <Grid templateColumns={"repeat(7,1fr)"}>
            <GridItem colSpan={2}/>
            <GridItem colSpan={3}>
                <Center>
                    <Text
                        color={"#fbfbfbfb"}
                        animation={glitchAnimation}
                        fontSize={breakpoints.fontSize.h1}
                    >
                        Leaderboard
                    </Text>
                </Center>
            </GridItem>
            <GridItem colSpan={2}/>

            <GridItem colSpan={2}/>
            <GridItem colSpan={1}>
                <Center>
                    <Text
                        color={"#fbfbfbfb"}
                        animation={lightAnimation}
                        fontSize={breakpoints.fontSize.h2}
                    >
                        Nom
                    </Text>
                </Center>
            </GridItem>

            <GridItem colSpan={1}>
                <Center>
                    <Text
                        color={"#fbfbfbfb"}
                        animation={lightAnimation}
                        fontSize={breakpoints.fontSize.h2}
                    >

                        Score&nbsp;&nbsp;
                    </Text>
                </Center>
            </GridItem>
            <GridItem colSpan={1}>
                <Center>
                    <Text
                        color={"#fbfbfbfb"}
                        animation={lightAnimation}
                        fontSize={breakpoints.fontSize.h2}
                    >

                        Classe
                    </Text>
                </Center>
            </GridItem>
            <GridItem colSpan={2}/>
            {datas?.map((data, index) => {
                return (
                    <>
                        <GridItem colSpan={1}/>
                        <GridItem colSpan={1}>
                            <Center>
                                <Text color={"#fbfbfbfb"} fontSize={breakpoints.fontSize.h2}
                                      animation={lightAnimation}>{index + 1}</Text>
                            </Center>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Center>
                                <Text
                                    animation={lightAnimation}
                                    fontSize={breakpoints.fontSize.h2}
                                    color={"#fbfbfbfb"}
                                >
                                    {data.username}
                                </Text>
                            </Center>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Center>
                                <Text
                                    animation={lightAnimation}
                                    fontSize={breakpoints.fontSize.h2}
                                    color={"#fbfbfbfb"}
                                >
                                    {data.score}
                                </Text>
                            </Center>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Center>
                                <Text
                                    animation={lightAnimation}
                                    fontSize={breakpoints.fontSize.h2}
                                    color={"#fbfbfbfb"}
                                >
                                    {data.classId}
                                </Text>
                            </Center>
                        </GridItem>
                        <GridItem colSpan={2}/>
                    </>
                );
            }) ?? (
                <>
                    <GridItem colSpan={2}/>
                    <GridItem colSpan={3}>
                        <Center>
                            <Text fontSize={breakpoints.fontSize.h2} color={"#fbfbfb"}>
                                Chargement...
                            </Text>
                        </Center>
                        <GridItem colSpan={2}/>
                    </GridItem>
                </>
            )}
        </Grid>
        </>
    );
};
export default LeaderboardPage;
