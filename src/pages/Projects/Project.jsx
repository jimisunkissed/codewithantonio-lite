import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LuBookOpen, LuPlayCircle } from "react-icons/lu";
import { FaGithub, FaDiscord, FaYoutube } from "react-icons/fa";
import Color from "../../Color";
function Projects() {
  // Color Palette
  const { lightgray, midgray, darkgray, lightblue2, midblue2, darkblue2 } =
    Color;

  // Data
  const material = ["Tailwind", "React.js", "PostgreSQL", "Next.js"];
  const progress = 42;
  const channel = [
    { text: "Source code", icon: FaGithub, color: "#010409" },
    { text: "Discord", icon: FaDiscord, color: "#5865F2" },
    { text: "Youtube", icon: FaYoutube, color: "#FF0000" },
  ];

  return (
    <Flex
      flexDirection={{ base: "column", lg: "row" }}
      w="100%"
      bg={lightgray}
      gap="25px"
      p="25px"
    >
      {/* Left Column */}
      <VStack w={{ base: "100%", lg: "60%" }} spacing="25px">
        <Center
          w="100%"
          aspectRatio="1.777"
          bg={darkblue2}
          borderRadius="8px"
          fontSize="30px"
          fontWeight="800"
          color="white"
          overflow="hidden"
        >
          Video
        </Center>
        <VStack
          w="100%"
          bg="white"
          borderRadius="10px"
          borderWidth="1px"
          borderColor={midgray}
          align="baseline"
          spacing="15px"
          p="25px"
        >
          <HStack
            h="24px"
            w="110px"
            bg={lightblue2}
            borderRadius="8px"
            color={darkblue2}
            align="center"
            justify="center"
          >
            <Icon as={LuBookOpen} fontSize="16px" />
            <Text fontSize="12px" fontWeight="600">
              29 Chapters
            </Text>
          </HStack>
          <Text fontSize={{ base: "18px", md: "24px" }} fontWeight="500">
            Duolingo Clone
          </Text>
          <Text fontSize="14px" color={darkgray} textAlign="justify">
            This course is currently in progress. It is going to be free, but
            while it is in progress, only premium members can already access it.
          </Text>
          <Flex w="100%" gap="8px" flexWrap="wrap">
            {material.map((text, index) => (
              <Center
                key={index}
                borderRadius="5px"
                borderWidth="1px"
                borderColor={midgray}
                fontSize="12px"
                fontWeight="600"
                color="black"
                p="0px 10px 0px 10px"
              >
                {text}
              </Center>
            ))}
          </Flex>
          <Flex h="10px" w="100%" bg={lightblue2} borderRadius="5px">
            <Box h="100%" w={progress / 100} bg={midblue2} borderRadius="5px" />
          </Flex>
          <Text fontSize="13px" fontWeight="600" color={darkblue2}>
            {progress}% Complete
          </Text>
        </VStack>
      </VStack>
      {/* Right Column */}
      <VStack w={{ base: "100%", lg: "40%" }} spacing="25px">
        <VStack
          w="100%"
          borderRadius="10px"
          overflow="hidden"
          spacing="25px"
          p="25px"
          position="relative"
        >
          <Box
            h="100%"
            w="100%"
            minW="1200px"
            bgGradient={`radial(at bottom, ${darkblue2}, black 600px)`}
            position="absolute"
            top={0}
          />
          <Text w='100%' fontSize="22px" color={lightgray} zIndex="1">
            <b>Ready to start building?</b>
          </Text>
          <Text
            fontSize="14px"
            fontWeight="400"
            color={lightgray}
            textAlign="justify"
            zIndex="1"
          >
            Track your progress, watch with subtitles, change quality & speed,
            and more.
          </Text>
          <HStack
            h="35px"
            w="100%"
            bg={lightgray}
            borderRadius="8px"
            justify="center"
            _hover={{ opacity: "75%", cursor: "pointer" }}
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=dP75Khfy4s4",
                "_blank"
              )
            }
            transition="opacity 0.2s ease"
            zIndex="1"
          >
            <Icon as={LuPlayCircle} />
            <Text fontSize="13.5px" fontWeight="600">
              Start watching
            </Text>
          </HStack>
        </VStack>
        <SimpleGrid w="100%" columns={3} spacing="10px">
          {channel.map((link, index) => (
            <VStack
              key={index}
              h="90px"
              w="100%"
              bg="white"
              borderRadius="8px"
              borderWidth="1px"
              borderColor={midgray}
              justify="center"
              spacing="6px"
              p="10px"
              _hover={{ opacity: "75%", cursor: "pointer" }}
              transition="opacity 0.2s ease"
            >
              <Icon as={link.icon} fontSize="32px" color={link.color} />
              <Text
                w="100%"
                fontSize="12px"
                color={darkgray}
                textAlign="center"
                overflow="hidden"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
              >
                {link.text}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </VStack>
    </Flex>
  );
}

export default Projects;
