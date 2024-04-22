import { Box, Flex } from "@chakra-ui/react";
import NavigationBar from "../NavigationBar/NavigationBar";
import SideBar from "../SideBar/SideBar";

function WithSideBar({ children }) {
  return (
    <Flex flexDirection="column" h="100vh" w="100vw" overflowX="hidden">
      <Box minW="100%" position="sticky" top={0} zIndex='1'>
        <NavigationBar />
      </Box>
      <Flex flexGrow={1} w="100%">
        <Box h="calc(100vh - 80px)" position="fixed">
          <SideBar />
        </Box>
        <Box flexGrow={1} w="calc(100% - 285px)" ml="285px">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}

export default WithSideBar;
