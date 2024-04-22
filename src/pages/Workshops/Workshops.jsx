import { useNavigate } from "react-router-dom";
import {
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LuPencilRuler } from "react-icons/lu";
import Color from "../../Color";

function Workshops() {
  //   Color Palette
  const { lightgray, midgray, lightblue2, darkblue2 } = Color;

  // Navigate
  const navigate = useNavigate();

  // Workshop Card
  const workshopCard = () => {
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
        transition="box-shadow 0.2s ease, cursor 0.2s ease"
      >
        <Image
          src={
            "https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Ff3bc0ed1-cd9f-4574-9aef-f19d6382b18a-kxu4dg.png&w=1920&q=75"
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
            Workshop: Build & Deploy a blog with Astro
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
            <Icon as={LuPencilRuler} fontSize="16px" />
            <Text fontSize="12px" fontWeight="600">
              Workshop
            </Text>
          </HStack>
        </VStack>
      </VStack>
    );
  };

  // Page Interface
  return (
    <VStack h="100%" w="100%" bg={lightgray} spacing="25px" p="25px">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} w="100%" spacing="25px">
        {workshopCard()}
        {workshopCard()}
        {workshopCard()}
        {workshopCard()}
        {workshopCard()}
      </SimpleGrid>
    </VStack>
  );
}

export default Workshops;
