import "../styles/globals.css";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { database } from "../model/ServerSideDB/ServerSideDB";

export default function MyApp({ Component, pageProps }: AppProps) {
  if (database.type)
    return (
      <>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </>
    );
  return <></>;
}
