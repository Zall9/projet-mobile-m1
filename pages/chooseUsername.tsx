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
  /* vérifie si l'utilisateur a un nom d'utilisateur dans localStorage, et si c'est le cas, il le redirige vers la page
    du jeu. */
  useEffect(() => {
    if (localStorage.getItem("username")) {
      router.push("/game").then(() => null);
    }
  });

  /**
   * La fonction handleChange prend un objet événement comme argument, et l'objet événement a une propriété cible, et la
   * propriété cible a une propriété valeur, et la propriété valeur est une chaîne.
   * @param event - { cible : { valeur : chaîne } }
   */
  function handleChange(event: { target: { value: string } }) {
    localStorage.setItem("username", event.target.value);
  }

  /**
   * OnSubmit est une fonction qui prend un événement comme argument et, lorsqu'elle est appelée, empêche l'action par
   * défaut de l'événement, puis pousse l'utilisateur vers la page du jeu.
   * @param event - { preventDefault : () => void }
   */
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
            style={{ zIndex: "999999", opacity: "0.5" }}
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
