import { Box, Flex } from "@chakra-ui/react";
import NavigationBar from "../NavigationBar/NavigationBar";

function NoSideBar({children}) {
  return (
    <Flex flexDirection="column" h="100vh" w="100vw" overflowX="hidden">
      <Box minW="100%" position="sticky" top={0} zIndex='1'>
        <NavigationBar />
      </Box>
      <Box flexGrow={1} w="100%">
        {children}
      </Box>
    </Flex>
  );
}

export default NoSideBar;
