import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "GeistSans, sans-serif",
    heading: "GeistSans, sans-serif",
  },
  styles: {
    global: {
      body: {
        fontFamily: "GeistSans, sans-serif",
      },
    },
  },
});

export default theme;