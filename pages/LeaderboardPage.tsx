import React, { useEffect, useState } from "react";
import {Grid, GridItem, Text} from "@chakra-ui/react";
import {Leaderboard, ScoreRow} from "../model/Leaderboard";

const LeaderboardPage = () => {
  const ldb = new Leaderboard();
  console.log('LDB',ldb);
  const [page, setPage] = useState(0);
    const [datas,setDatas] = useState<ScoreRow[]>();
  useEffect(() => {
  setDatas(ldb.getLeaderboard(page));
  }, []);


  // @ts-ignore
    return (
    <Grid templateColumns={"repeat(6,1fr)"}>
        {/*@ts-ignore*/}

        { datas?.map((data) => {
            return (
                <>
                <GridItem colSpan={1}>
                    <Text>{data.username}</Text>
                </GridItem>
                <GridItem colSpan={1}>
                    <Text>{data.score}</Text>
                </GridItem>
                <GridItem colSpan={1}>
                    <Text>{data.classId}</Text>
                </GridItem>
                </>
            );
        }) ?? <Text>Chargement</Text>}
    </Grid>
    );
};


export default LeaderboardPage;
