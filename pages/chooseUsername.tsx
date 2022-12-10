import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Center,
  Box,
  Button,
} from "@chakra-ui/react";

export default function chooseUsername() {
  let router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("username")) {
      router.push("/game").then(() => null);
    }
  });

  function handleChange(event: { target: { value: string } }) {
    localStorage.setItem("username", event.target.value);
  }

  function onSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    router.push("/game").then(() => null);
  }

  return (
    <Center>
      <FormControl id="username">
        <Box
          sx={{
            height: "min(90vh,90vw)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FormLabel color={"#fbfbfbfb"}>Entrez votre nom</FormLabel>
          <input
            style={{zIndex: "999999", opacity: "0.5"}}
            type="text"
            onChange={handleChange}
          />
          <FormHelperText>Enter your username</FormHelperText>
          <Button
            onClick={onSubmit}
            colorScheme="teal"
            variant="outline"
            size="lg"
            mt={4}
          >
            Valider
          </Button>
        </Box>
      </FormControl>
    </Center>
  );
}
