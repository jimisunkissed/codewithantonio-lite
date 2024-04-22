import React from "react";
import {
  Box,
  Center,
  HStack,
  Icon,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { LuLogIn, LuX } from "react-icons/lu";
import Color from "../../Color";

function LoginButton() {
  // Color Palette
  const { lightgray, midgray, darkgray } = Color;

  // Modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Login Method
  const login = [
    { text: "Google", icon: FaGoogle, color: "#4286F5" },
    { text: "Github", icon: FaGithub, color: "#010409" },
  ];

  // Page Interface
  return (
    <>
      <HStack
        h="100%"
        borderRadius="8px"
        borderWidth="1px"
        borderColor={midgray}
        p="15px"
        _hover={{ bg: lightgray, cursor: "pointer" }}
        onClick={onOpen}
        transition="background-color 0.2s ease"
      >
        <Icon as={LuLogIn} />
        <Box fontSize="13.5px" fontWeight="600">
          Login
        </Box>
      </HStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="blur(10px)">
            <Box></Box>
        </ModalOverlay>
        <ModalContent>
          <VStack
            w="100%"
            bg="white"
            borderRadius="10px"
            borderWidth="1px"
            borderColor={midgray}
            boxShadow="md"
            spacing="20px"
            p="35px"
            cursor='default'
            position="relative"
          >
            <Center position="absolute" top="15px" right="15px" onClick={onClose}>
              <Icon
                as={LuX}
                fontSize="18px"
                color={darkgray}
                _hover={{ color: "black", cursor: "pointer" }}
                transition="color 0.2s ease"
              />
            </Center>
            <VStack w="100%" align="baseline" spacing="0px">
              <Text fontSize="18px" fontWeight="500">
                Sign in
              </Text>
              <Text color={darkgray}>to continue to platorm</Text>
            </VStack>
            <VStack w="100%" spacing="8px">
              {login.map((data, index) => (
                <HStack
                  key={index}
                  w="100%"
                  h="40px"
                  borderRadius="8px"
                  borderWidth="1px"
                  borderColor={midgray}
                  spacing="15px"
                  pl="20px"
                  _hover={{ bg: lightgray, cursor: "pointer" }}
                  transition="background-color 0.2s ease"
                >
                  <Icon as={data.icon} fontSize="20px" color={data.color} />
                  <Text fontSize="13.5px" fontWeight="500">
                    Continue with {data.text}
                  </Text>
                </HStack>
              ))}
            </VStack>
            <Box fontSize="12px" color={darkgray}>
              By creating an account, you agree to our{" "}
              <Text
                display="inline"
                color="black"
                _hover={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Terms of Service{" "}
              </Text>
              and{" "}
              <Text
                display="inline"
                color="black"
                _hover={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Privacy Policy
              </Text>
            </Box>
          </VStack>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LoginButton;
