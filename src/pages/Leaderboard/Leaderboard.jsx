import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  Image,
  VStack,
} from "@chakra-ui/react";
import { TbDiamond } from "react-icons/tb";
import Color from "../../Color";

function Leaderboard() {
  // Color Palette
  const {
    lightgray,
    midgray,
    darkgray,
    lightblue1,
    lightblue2,
    darkblue1,
    darkblue2,
    lightgreen,
    green,
  } = Color;

  // Table Heading
  const heading = [
    { text: "Rank", width: "15%" },
    { text: "User", width: "66%" },
    { text: "Points", width: "19%" },
  ];

  // Table Fill
  const users = [
    { name: "Anh Hoang", level: 32, isPro: true, points: 3130 },
    { name: "Nishan Neupane", level: 32, isPro: false, points: 3120 },
    { name: "Deepak Sankhyan", level: 31, isPro: false, points: 3080 },
    { name: "Sanidhya Kumar Verma", level: 31, isPro: true, points: 3020 },
    { name: "CakeWithPineapple", level: 30, isPro: false, points: 2910 },
    { name: "Dev", level: 29, isPro: false, points: 2880 },
    { name: "Aladdin Sonni", level: 29, isPro: false, points: 2810 },
    { name: "MarcosCardoso", level: 28, isPro: false, points: 2790 },
    { name: "tinotendajoe01", level: 26, isPro: false, points: 2540 },
    { name: "hanzlah101", level: 24, isPro: false, points: 2350 },
  ];

  // Page Interface
  return (
    <VStack h="100%" w="100%" bg={lightgray} spacing="25px" p="25px">
      <Box
        w="100%"
        borderRadius="8px"
        borderWidth="1px"
        borderColor={midgray}
        overflowX="auto"
      >
        <VStack
          h="100%"
          w="100%"
          minW="450px"
          bg="white"
          spacing="1px"
          p="15px"
        >
          <HStack
            h="40px"
            w="100%"
            bg={lightblue1}
            borderRadius="8px"
            spacing={0}
          >
            {heading.map((head, index) => (
              <Box
                key={index}
                w={head.width}
                fontSize="12px"
                fontWeight="600"
                color={darkgray}
                pl="10px"
              >
                {head.text}
              </Box>
            ))}
          </HStack>
          {users.map((leader, index) => (
            <HStack
              key={index}
              h="56px"
              w="100%"
              bg={index % 2 === 0 ? "white" : lightblue1}
              borderRadius="8px"
              spacing={0}
              p="2px 0px 2px 0px"
            >
              <Flex w="15%" fontSize="13px" pl="10px">
                {index + 1}.
              </Flex>
              <HStack h="100%" w="66%" spacing={0}>
                <Center h="100%" aspectRatio="1" position="relative">
                  <Box
                    h="90%"
                    aspectRatio="1"
                    borderRadius="50%"
                    borderWidth="2.5px"
                    borderColor={leader.isPro ? darkblue1 : "transparent"}
                  >
                    <Box
                      h="100%"
                      aspectRatio="1"
                      borderRadius="50%"
                      borderWidth="2.5px"
                      borderColor="transparent"
                      overflow="hidden"
                    >
                      <Image
                        src={
                          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAZlBMVEX///8AAAD6+vrz8/Pa2trd3d2lpaWrq6vr6+vJycmenp55eXlGRkb39/clJSVZWVmMjIxUVFSzs7M2NjZlZWW/v787OzuUlJTl5eUWFhYbGxvPz89LS0ssLCyBgYFgYGAODg5tbW33dDBNAAACIUlEQVRIib2W7XaCMAyGG0BEEBRQmKBu3v9NztI2TUs/8Jyd5RctfUia5k1h7O8tqZNPkbSrBhA2tc+u2Ih1R7Csz+O+67NNCXvWYa50Y9zKALZr/BxAs/NxeQjjtndzVYwDqFzcd5wDuKy5yxYO4GVznlNY29nkrnL6dvMBP6qWrpRL5eSJsaJ0seOXDiolYCvnumW0F877Yein5VGc/ay/ruygPjyLcbLPsMKSLJcuCrXqgCAWTOY6J2W1WvWwMwPgLSoDRJcDzswhEEOFu5j40snLQ6AODIS0Rz0R3GOq15VWpCHJGS6PfJjgcApzjPW4lLeSeatDVRkqi3oU3CE3nUYuaa2LeBvEpVwjWohpFHyopVyWJwQjHfBt2HF5obcfeMSTaw2P8T3+UI96j8ES56bLnDetJ46uMVAf+ZPRNuzsmtT0yXE1oPwBNm9xUaQOfHuRiwN4WGOfaTVAY0UOfQi863WiK+/0BAxenzW9p6UcSKzeq6yjaxo5uQirY4W8586rlrUbze6OH+eDqSDSPJKrJb+DbfhOAOR6IM2aZSuO7Ebs8t1IXjJHNFD7pn6QdyKxFa4y+uvBAg0tlCpYNp+r0ax2CxzNxC2qvNvpdIAn+3Xv+JqwmXKO2loS1B546SResHH91JGaMvZPzmNw/wxWMXD1r6Ls6gRRBJ2Pe0vg5QBl47+Eu2d2VAdqgm30YmFZhbKRYUxQRTvnP9gvtLMTQIVu4K8AAAAASUVORK5CYII="
                        }
                        objectFit="cover"
                      />
                    </Box>
                  </Box>
                  {leader.isPro ? (
                    <Center
                      h="40%"
                      aspectRatio="1"
                      bg={darkblue1}
                      borderRadius="50%"
                      borderWidth="2.5px"
                      borderColor={index % 2 === 0 ? "white" : lightblue1}
                      position="absolute"
                      top="0px"
                      left="0px"
                    >
                      <Icon as={TbDiamond} fontSize="12px" color="white" />
                    </Center>
                  ) : undefined}
                </Center>
                <VStack w="150px" spacing={0} align="baseline" ml="2px">
                  <Box
                    w="100%"
                    fontSize="13.5px"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                  >
                    {leader.name}
                  </Box>
                  <Box fontSize="11.5px" color={darkgray}>
                    Level {leader.level}
                  </Box>
                </VStack>
                {leader.isPro ? (
                  <Center
                    h="24px"
                    bg={lightblue2}
                    borderRadius="12px"
                    fontSize="12px"
                    color={darkblue2}
                    p="0px 8px 0px 8px"
                    ml="15px"
                  >
                    Pro
                  </Center>
                ) : undefined}
              </HStack>
              <Flex w="19%" pl="10px">
                <Center
                  h="24px"
                  bg={lightgreen}
                  borderRadius="12px"
                  fontSize="14px"
                  color={green}
                  p="0px 10px 0px 10px"
                >
                  {leader.points}
                </Center>
              </Flex>
            </HStack>
          ))}
        </VStack>
      </Box>
    </VStack>
  );
}

export default Leaderboard;
