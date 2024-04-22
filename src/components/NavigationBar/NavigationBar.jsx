import { useNavigate } from "react-router-dom";
import {
  Box,
  Center,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  Spacer,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import {
  LuLogIn,
  LuSearch,
  LuAlignJustify,
  LuCompass,
  LuPencilRuler,
  LuCode,
  LuTrophy,
  LuMail,
  LuX,
} from "react-icons/lu";
import LoginButton from '../LoginButton/LoginButton'
import logo from "../../assets/cwaLogo.jpeg";
import Color from "../../Color";

function NavigationBar() {
  // Color Palette
  const {
    lightgray,
    midgray,
    darkgray,
    lightblue1,
    lightblue2,
    darkblue1,
    darkblue2,
  } = Color;

  // Drawer
  const { isOpen, onOpen, onClose } = useDisclosure();
  const page = [
    { text: "Browse", path: "/", icon: LuCompass },
    { text: "Workshops", path: "/workshops", icon: LuPencilRuler },
    { text: "Problems", path: "/upgrade", icon: LuCode },
    { text: "Leaderboard", path: "/leaderboard", icon: LuTrophy },
    { text: "Newsletter", path: "/newsletter", icon: LuMail },
  ];

  // Navigator
  const navigate = useNavigate();

  // Page Interface
  return (
    <Flex
      h="80px"
      w="100%"
      bg="white"
      borderBottomWidth="1px"
      borderColor="gray.100"
      justify="space-between"
      gap="15px"
      p="20px"
    >
      {/* Drawer */}
      <Center
        display={{ base: "flex", lg: "none" }}
        h="100%"
        aspectRatio="1"
        borderRadius="8px"
        _hover={{ bg: lightblue1 }}
        onClick={onOpen}
        transition="background-color 0.2s ease"
      >
        <Icon as={LuAlignJustify} fontSize="20px" />
      </Center>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter="blur(10px)"/>
        <DrawerContent boxShadow="lg">
          <VStack w="100%" align="baseline" spacing="6.5px" p="10px">
            <HStack h="40px" w="100%" justify="space-between" mb='10px'>
              <HStack
                h="100%"
                w="200px"
                spacing={2}
                _hover={{ opacity: "75%", cursor: "pointer" }}
                onClick={() => {navigate(''); onClose()}}
                transition="opacity 0.2s ease"
              >
                <Box
                  h="100%"
                  aspectRatio="1"
                  borderRadius="50%"
                  overflow="hidden"
                >
                  <Image src={logo} h="100%" aspectRatio="1" />
                </Box>
                <VStack h="100%" flexGrow={1} spacing={0}>
                  <Box
                    h="60%"
                    w="100%"
                    fontSize="16px"
                    fontWeight="600"
                    color={darkblue1}
                  >
                    Code With Antonio
                  </Box>
                  <Box h="40%" w="100%" fontSize="12px" color={darkgray}>
                    Build something great!
                  </Box>
                </VStack>
              </HStack>
              <Center
                h="100%"
                aspectRatio="1"
                borderRadius="8px"
                _hover={{ bg: lightgray }}
                onClick={onClose}
                transition="background-color 0.2s ease"
              >
                <Icon as={LuX} />
              </Center>
            </HStack>
            {page.map((page, index) => (
              <HStack
                key={index}
                h="48px"
                w="100%"
                bg={location.pathname === page.path ? lightblue1 : "white"}
                borderRadius="8px"
                color={location.pathname === page.path ? "black" : darkgray}
                p="12px"
                _hover={{ bg: lightblue1, cursor: "pointer" }}
                onClick={() => {navigate(page.path); onClose()}}
                transition="background-color 0.2s ease, color 0.2s ease"
              >
                <Icon
                  as={page.icon}
                  fontSize="20px"
                  //   transform= {`rotate(${degree}deg)`}
                  //   transition="transform 0.2s ease"
                />
                <Box fontSize="14px">{page.text}</Box>
                <Spacer />
                {page.text === "Workshops" ? (
                  <Center
                    h="20px"
                    w="45px"
                    bg={lightblue2}
                    borderRadius="6px"
                    fontSize="12px"
                    fontWeight="600"
                    color={darkblue2}
                    pt="1px"
                  >
                    New
                  </Center>
                ) : undefined}
              </HStack>
            ))}
          </VStack>
        </DrawerContent>
      </Drawer>
      {/* Left Logo */}
      <HStack
        display={{ base: "none", lg: "flex" }}
        h="100%"
        minW="200px"
        spacing={2}
        _hover={{ opacity: "75%", cursor: "pointer" }}
        onClick={() => navigate("")}
        transition="opacity 0.2s ease"
      >
        <Box h="100%" aspectRatio="1" borderRadius="50%" overflow="hidden">
          <Image src={logo} h="100%" aspectRatio="1" />
        </Box>
        <VStack h="100%" flexGrow={1} spacing={0}>
          <Box
            h="60%"
            w="100%"
            fontSize="16px"
            fontWeight="600"
            color={darkblue1}
          >
            Code With Antonio
          </Box>
          <Box h="40%" w="100%" fontSize="12px" color={darkgray}>
            Build something great!
          </Box>
        </VStack>
      </HStack>
      {/* Search Bar */}
      <HStack
        display={{ base: "none", lg: "flex" }}
        h="100%"
        maxW="650px"
        flexGrow={1}
        spacing={0}
      >
        <Input
          h="100%"
          flexGrow={1}
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
      <LoginButton />
    </Flex>
  );
}

export default NavigationBar;
