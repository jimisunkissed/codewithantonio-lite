import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  LuBookDown,
  LuBookPlus,
  LuPencilRuler,
  LuPencil,
  LuCode,
  LuTrophy,
  LuMail,
  LuMoreVertical,
  LuExternalLink,
} from "react-icons/lu";
import Color from "../../Color";

function SideBar() {
  // Color Palette
  const { midgray, darkgray, lightblue1, lightblue2, darkblue2 } = Color;

  // Navigate
  const navigate = useNavigate();
  const location = useLocation();

  const sect1 = [
    { text: "Courses", path: "/", icon: LuPencilRuler },
    { text: "Digital Downloads", path: "/digitaldownloads", icon: LuBookDown },
    { text: "Problems", path: "/upgrade", icon: LuCode },
    { text: "Leaderboard", path: "/leaderboard", icon: LuTrophy },
    { text: "Newsletter", path: "/newsletter", icon: LuMail },
  ];

  const sect2 = [
    { text: "Create Course", path: "create/course", icon: LuPencil },
    {
      text: "Create Digital Download",
      path: "/create/digitaldownload",
      icon: LuBookPlus,
    },
  ];

  const menu = [
    { text: "Contact", icon: LuMail },
    { text: "Terms of Service", icon: LuExternalLink },
    { text: "Privacy Policy", icon: LuExternalLink },
  ];

  // Page Interface
  return (
    <VStack
      h="100%"
      w="285px"
      bg="white"
      borderRightWidth="1px"
      borderColor="gray.100"
      spacing={0}
      overflow="auto"
      css={{
        "&::-webkit-scrollbar": {
          width: "5px", // Width of the scrollbar
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent", // Color of the track
        },
        "&::-webkit-scrollbar-thumb": {
          background: midgray, // Color of the thumb
          borderRadius: "2.5px", // Radius of the thumb
        },
      }}
    >
      <VStack flexGrow={1} w="100%" bg="white" spacing="6.5px" p="12px">
        <Text w="100%" fontSize="16px" fontWeight="500" pl="12px">
          Products
        </Text>
        {sect1.map((page, index) => (
          <HStack
            key={index}
            h="48px"
            w="100%"
            bg={location.pathname === page.path ? lightblue1 : "white"}
            borderRadius="8px"
            color={location.pathname === page.path ? "black" : darkgray}
            p="12px"
            _hover={{ bg: lightblue1, cursor: "pointer" }}
            onClick={() => navigate(page.path)}
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
        <Text w="100%" fontSize="16px" fontWeight="500" pl="12px">
          Creator
        </Text>
        {sect2.map((page, index) => (
          <HStack
            key={index}
            h="48px"
            w="100%"
            bg={location.pathname === page.path ? lightblue1 : "white"}
            borderRadius="8px"
            color={location.pathname === page.path ? "black" : darkgray}
            p="12px"
            _hover={{ bg: lightblue1, cursor: "pointer" }}
            onClick={() => navigate(page.path)}
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
        {/* Upgrade Card */}
        {/* <VStack
          h="155px"
          w="100%"
          borderRadius="8px"
          borderWidth="1px"
          borderColor={midgray}
          color="black"
          justify="space-between"
          p="18px"
        >
          <Box w="100%" fontSize="15px">
            <b>Upgrade to Pro</b>
          </Box>
          <Box w="100%" fontSize="14px" color={darkgray}>
            Unlock weekly workshops, access to all paid content, and more.
          </Box>
          <Center
            h="35px"
            w="100%"
            borderRadius="8px"
            bg="black"
            fontSize="12px"
            fontWeight="600"
            color="white"
            _hover={{ opacity: "75%", cursor: "pointer" }}
            onClick={() => navigate('/upgrade')}
            transition="opacity 0.2s ease"
          >
            Upgrade
          </Center>
        </VStack> */}
      </VStack>
      <Flex
        h="72px"
        w="100%"
        borderTopWidth="1.5px"
        borderColor={midgray}
        color={darkgray}
        align="center"
        justify="space-between"
        p="16px"
      >
        <Box fontSize="12px">© 2024 ENRA d.o.o.</Box>
        <Menu>
          <MenuButton
            h="100%"
            aspectRatio="1"
            borderRadius="8px"
            _hover={{ bg: lightblue1, cursor: "pointer" }}
            transition="background-color 0.2s ease"
          >
            <Center h="100%" w="100%">
              <Icon as={LuMoreVertical} />
            </Center>
          </MenuButton>
          <MenuList p="3px">
            {menu.map((info, index) => (
              <MenuItem key={index} h="30px" borderRadius="5px" p={0}>
                <HStack
                  h="100%"
                  w="100%"
                  color="black"
                  align="center"
                  p="0px 8px 0px 8px"
                >
                  <Icon as={info.icon} fontSize="18px" pb="1px" />
                  <Box fontSize="14px">{info.text}</Box>
                </HStack>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>
    </VStack>
  );
}

export default SideBar;
