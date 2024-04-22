import { useState } from "react";
import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LuClock, LuCheck } from "react-icons/lu";
import Color from "../../Color";

function Problems() {
  // Color Palette
  const { lightgray, midgray, darkgray, lightblue1, midblue2, darkblue2 } =
    Color;

  // Plan Selection
  const [plan, setPlan] = useState(0);

  // Features
  const features = [
    "All courses",
    "All source codes",
    "Code problems",
    "Private community",
    "Weekly workshops",
    "Priority support",
    "Early access to content",
  ];

  // FAQ
  const faq = [
    {
      question: `What courses & additional content are included?`,
      answer: `Currently available courses and additional content are listed on the home page. More content will be added in the future. Premium members will have all future content available for free, and before anyone else.`,
    },
    {
      question: `What is the private community?`,
      answer: `Private community is a Discord server where premium members can interact with each other, ask questions, and get help from other members and Antonio. It's a great place to network and learn from others.`,
    },
    {
      question: `What are coding problems?`,
      answer: `Coding problems are small projects to help you practice and improve your coding skills. Similar to LeetCode, but with a focus on real-world problems.`,
    },
    {
      question: `What are workshops?`,
      answer: `Workshops are interactive project-building events or live coding sessions led by Antonio or community experts, they are recorded and exclusively available for premium members to join.`,
    },
  ];

  // Page Interface
  return (
    <VStack h="100%" w="100%">
      <Center w="100%" position="relative">
        <Center
          h="600px"
          w="100%"
          overflow='hidden'
          position="absolute"
          top={0}
          zIndex="-1"
        >
          <Box
            h="100%"
            w='100%'
            minW='1300px'
            bgGradient={`radial(at bottom, ${darkblue2}, black 650px)`}
          />
        </Center>
        <VStack w="100%" p={{ base: "25px", md: "65px" }} spacing="10px">
          <Box fontSize="16px" color={midblue2}>
            <b>Pricing</b>
          </Box>
          <Box
            fontSize={{ base: "35px", md: "50px" }}
            fontWeight="700"
            color="white"
            textAlign="center"
            lineHeight="1"
            mb="15px"
          >
            Unlock all content
          </Box>
          <Box
            maxW="600px"
            fontSize="18px"
            color={lightgray}
            textAlign="center"
          >
            Learn how to build production-grade applications with over 130 hours
            of fullstack content.
          </Box>
          <Flex
            h="40px"
            w="164px"
            bg={lightblue1}
            borderRadius="8px"
            fontSize="13.5px"
            p="4px"
            mt="50px"
            mb="15px"
          >
            <Center
              h="100%"
              w="50%"
              bg={plan === 0 ? "white" : "transparent"}
              borderRadius="8px"
              fontWeight="600"
              color={plan === 0 ? "black" : darkgray}
              _hover={{ cursor: "pointer" }}
              onClick={() => setPlan(0)}
              transition="background-color 0.2s ease, color 0.2s ease"
            >
              Monthly
            </Center>
            <Center
              h="100%"
              w="50%"
              bg={plan === 1 ? "white" : "transparent"}
              borderRadius="8px"
              fontWeight="600"
              color={plan === 1 ? "black" : darkgray}
              _hover={{ cursor: "pointer" }}
              onClick={() => setPlan(1)}
              transition="background-color 0.2s ease, color 0.2s ease"
            >
              Lifetime
            </Center>
          </Flex>
          <VStack
            w="100%"
            maxW="450px"
            bg="white"
            borderRadius="25px"
            boxShadow="xl"
            align="baseline"
            spacing={{ base: "15px", sm: "25px" }}
            p={{ base: "20px", sm: "40px" }}
          >
            <Box w="100%" color={midblue2}>
              <b>{plan == 0 ? "Monthly" : "Lifetime (50% off)"}</b>
            </Box>
            <HStack align="end">
              <Center h="40px" fontSize="50px" fontWeight="700">
                {plan === 0 ? "$29" : "$499"}
              </Center>
              {plan === 0 ? undefined : (
                <Center
                  h="20px"
                  fontSize="25px"
                  fontWeight="700"
                  color={darkgray}
                  textDecoration="line-through"
                >
                  $999
                </Center>
              )}
              <Center
                display={{ base: "none", sm: "flex" }}
                h="13px"
                fontWeight="600"
                color={darkgray}
              >
                {plan === 0 ? "/ month" : "one-time"}
              </Center>
            </HStack>
            <Text color={darkgray} textAlign="justify" m="10px 0px 10px 0px">
              {plan === 0
                ? "Monthly access to all current and future content. Cancel anytime."
                : "Lifetime access to all current and future content. One-time payment."}
            </Text>
            <VStack w="100%" align="baseline" spacing="16px">
              {plan === 0 ? undefined : (
                <HStack>
                  <Icon as={LuClock} fontSize="19px" color={midblue2} />
                  <Text fontSize="14px" color={darkgray} pt="2px">
                    Limited Time Offer
                  </Text>
                </HStack>
              )}
              {features.map((text, index) => (
                <HStack key={index}>
                  <Icon as={LuCheck} fontSize="19px" color={midblue2} />
                  <Text fontSize="14px" color={darkgray} pt="2px">
                    {text}
                  </Text>
                </HStack>
              ))}
              {plan === 0 ? undefined : (
                <HStack>
                  <Icon as={LuCheck} fontSize="19px" color={midblue2} />
                  <Text fontSize="14px" color={darkgray} pt="2px">
                    Lifetime access
                  </Text>
                </HStack>
              )}
            </VStack>
            <Center
              h="40px"
              w="100%"
              bg="black"
              borderRadius="8px"
              fontSize="14px"
              color="white"
              _hover={{ opacity: "75%", cursor: "pointer" }}
              transition="opacity 0.2s ease"
              mt="10px"
            >
              Become a member
            </Center>
          </VStack>
        </VStack>
      </Center>
      {/* FAQ */}
      <VStack
        w="82%"
        align="baseline"
        spacing="30px"
        pb={{ base: "25px", md: "65px" }}
      >
        <Box w="100%" fontSize="23px" fontWeight="600">
          Frequently asked questions
        </Box>
        {faq.map((data, index) => (
          <Flex
            key={index}
            flexDirection={{ base: "column", lg: "row" }}
            w="100%"
            borderTopWidth="1px"
            borderTopColor={midgray}
            align="baseline"
            gap="0px"
            pt={{ base: "20px", lg: "30px" }}
          >
            <Box w={{ base: "100%", lg: "43%" }} fontWeight="600" mb="10px">
              {data.question}
            </Box>
            <Box w={{ base: "100%", lg: "57%" }} color={darkgray}>
              {data.answer}
            </Box>
          </Flex>
        ))}
      </VStack>
    </VStack>
  );
}

export default Problems;
