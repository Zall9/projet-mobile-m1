import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Box height="100%">
      <SimpleGrid
        width="75%"
        marginLeft="12.5%"
        columns={1}
        spacing="5px"
        marginTop="20vh"
      >
        <Box
          bg="tomato"
          w="100%"
          h="100px"
          display="flex"
          justifyContent={"center"}
        >
          <Text fontSize="6xl">Ring</Text>
        </Box>
        <Link href="/game">
          <Button>Play</Button>
        </Link>
        <Button>Settings</Button>
      </SimpleGrid>
    </Box>
  );
}
