import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Center,
  HStack,
  Icon,
  Image,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LuSearch, LuBookOpen } from "react-icons/lu";
import Color from "../../Color";

function Browse() {
  // Color Palette
  const {
    lightgray,
    midgray,
    darkgray,
    lightblue2,
    midblue1,
    darkblue1,
    darkblue2,
  } = Color;

  // Navigate
  const navigate = useNavigate();

  // Filter
  const [filter, setFilter] = useState(0);
  const filterList = [
    "All",
    "Next.js",
    "React.js",
    "MySQL",
    "MongoDB",
    "Prisma",
    "Tailwind",
    "Node.js",
    "Supabase",
    "Convex",
    "Next Auth",
    "PostgreSQL",
    "Astro",
  ];

  // Course Card
  const courseCard = () => {
    return (
      <VStack
        w="100%"
        bg="white"
        borderRadius="8px"
        borderWidth="1px"
        borderColor={midgray}
        color="black"
        spacing={0}
        overflow="hidden"
        _hover={{ shadow: "md", cursor: "pointer", color: darkblue2 }}
        onClick={() => navigate("/projects/")}
        transition="box-shadow 0.2s ease, color 0.2s ease"
      >
        <Image
          src={
            "https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F6f5ddbbe-cf91-44d4-bd10-5fdb235889df-tt9026.png&w=1920&q=75"
          }
        />
        <VStack
          w="100%"
          align="baseline"
          spacing="12px"
          p="12px 12px 20px 12px"
        >
          <Text
            h="22px"
            w="100%"
            fontSize="16px"
            fontWeight="semibold"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >
            Duolingo Clone
          </Text>
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
        </VStack>
      </VStack>
    );
  };

  // Page Interface
  return (
    <VStack h="100%" w="100%" bg={lightgray} spacing="25px" p="25px">
      {/* Search Bar */}
      <HStack
        display={{ base: "flex", lg: "none" }}
        h="40px"
        w="100%"
        spacing={0}
      >
        <Input
          h="100%"
          flexGrow={1}
          bg="white"
          placeholder="Search for a course"
          borderRadius="10px 0px 0px 10px"
          borderColor={midgray}
          fontSize="14px"
          color={darkgray}
          _hover={{ borderColor: "gray.200" }}
          _focus={{
            boxShadow: "none",
          }}
          _focusVisible={{
            boxShadow: "none",
          }}
        />
        <Center
          h="100%"
          w="50px"
          bg={darkblue1}
          borderRadius="0px 10px 10px 0px"
          _hover={{ opacity: "75%", cursor: "pointer" }}
          transition="opacity 0.2s ease"
        >
          <Icon as={LuSearch} fontSize="17px" color="white" />
        </Center>
      </HStack>
      {/* Filter */}
      <HStack
        minH="40px"
        w="100%"
        align="baseline"
        overflow="auto"
        css={{
          "&::-webkit-scrollbar": {
            height: "5px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: midgray,
            borderRadius: "2.5px",
          },
        }}
      >
        {filterList.map((text, index) => (
          <Center
            key={index}
            h="30px"
            bg={filter === index ? lightblue2 : "white"}
            borderRadius="8px"
            borderWidth="1px"
            borderColor={filter === index ? midblue1 : midgray}
            fontSize="12px"
            fontWeight="600"
            color={filter === index ? darkblue2 : "black"}
            whiteSpace="nowrap"
            p="0px 12px 0px 12px"
            _hover={{ cursor: "pointer" }}
            onClick={() => setFilter(index)}
            transition="background-color 0.2s ease, borderColor 0.2s ease, color 0.2s ease"
          >
            {text}
          </Center>
        ))}
      </HStack>
      {/* Course Card */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        maxW="100%"
        spacing="25px"
      >
        {courseCard()}
        {courseCard()}
        {courseCard()}
        {courseCard()}
        {courseCard()}
        {courseCard()}
        {courseCard()}
        {courseCard()}
      </SimpleGrid>
    </VStack>
  );
}

export default Browse;
