import { Box, Center, Flex, Input, VStack } from "@chakra-ui/react";
import Color from "../../Color";

function Newsletter() {
  // Color Palette
  const { lightgray, midgray, darkgray, darkblue1 } = Color;

  return (
    <Center h="100%" w="100%" bg={lightgray} p="20px">
      <VStack w="100%" maxW="580px" spacing="40px">
        <Box
          fontSize={{ base: "30px", md: "35.5px" }}
          fontWeight="700"
          lineHeight="1.1"
        >
          Want platform news and updates? Sign up for the newsletter.
        </Box>
        <Flex
          flexDirection={{ base: "column", sm: "row" }}
          h={{base:'auto', sm:"40px"}}
          w="100%"
          gap="16px"
        >
          <Input
            placeholder="Enter your email"
            h={{base:'40px', sm:"100%"}}
            w={{base:'100%', sm:"340px"}}
            bg="white"
            borderRadius="8px"
            borderColor={midgray}
            fontSize="14px"
            color={darkgray}
            _hover={{ borderColor: midgray }}
            _focus={{ color: "black", boxShadow: "none", outline: "2px" }}
            _focusVisible={{
              color: "black",
              boxShadow: "none",
              outline: "2px",
            }}
          />
          <Center
            h={{base:'40px', sm:"100%"}}
            w={{base:'100%', sm:"100px"}}
            bg={darkblue1}
            borderRadius="8px"
            fontSize="14px"
            fontWeight="500"
            color="white"
            _hover={{ opacity: "75%", cursor: "pointer" }}
            transition="opacity 0.2s ease"
          >
            Subscribe
          </Center>
        </Flex>
      </VStack>
    </Center>
  );
}

export default Newsletter;
