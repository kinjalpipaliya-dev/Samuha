import {
  AddIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";
import {
  Avatar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Center,
  CloseButton,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { BTC, DAI, Dot, Ellipse_Item, ETH, Polygon } from "../../Assets";
import Header from "../Header/Header";

import "./style.css";
const Home: FC = () => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };
  return (
    <Grid
      h="100vh"
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(5, 1fr)"
    >
      <GridItem colSpan={1} h="100%" bg="white">
      <List border={"1px solid black"} height="100vh">
          <ListItem
            borderBottom={"1px solid black"}
            color="rgba(0, 0, 0, 0.5)"
            fontWeight={700}
          >
            <Flex alignItems={"center"}>
              <Text ml="4" m="3">
                TOKEN COMMUNITY
              </Text>
              <Spacer />
              <Button size={"sm"} bg="black" mr="2">
                <AddIcon color="white" />
              </Button>
            </Flex>
          </ListItem>
          {[
            { shortName: "BTC", fullName: "Bitcoin", src: BTC },
            { shortName: "ETH", fullName: "Ethereum", src: ETH },
            { shortName: "MATIC", fullName: "Polygon", src: Polygon },
            { shortName: "DOGI", fullName: "Bitcoin", src: DAI },
          ].map((item: any, index) => (
            <ListItem borderBottom={"1px solid black"} cursor="pointer">
              <Flex alignItems={"center"} ml="4" m="3">
                <Avatar size="sm" src={item.src} />
                <Text ml="2" fontWeight="bold">
                  {item.shortName}
                </Text>
                <Spacer />
                <ChevronRightIcon color="black" />
              </Flex>
            </ListItem>
          ))}
          <ListItem
            borderBottom={"1px solid black"}
            color="rgba(0, 0, 0, 0.5)"
            fontWeight={700}
          >
            <Text ml="4" m="3">
              NFT PROJECT
            </Text>
          </ListItem>
          {[
            { shortName: "Crypto Punk", fullName: "Bitcoin", src: Dot },
            { shortName: "BoredApe", fullName: "Ethereum", src: Dot },
            { shortName: "Cartoons", fullName: "Polygon", src: Dot },
            { shortName: "Shibi", fullName: "Bitcoin", src: Dot },
          ].map((item: any, index) => (
            <ListItem borderBottom={"1px solid black"} cursor="pointer">
              <Flex alignItems={"center"} ml="4" m="3">
                <Avatar size="sm" src={item.src} />
                <Text ml="2" fontWeight="bold">
                  {item.shortName}
                </Text>
                <Spacer />
                <ChevronRightIcon color="black" />
              </Flex>
            </ListItem>
          ))}
        </List>
      </GridItem>
      <GridItem colSpan={3}>
        <Box w="100%" pl="6" pr="6" pt={10} color="black">
          <Box>
            <Text fontWeight={"700"} fontSize="25">DOGE</Text>
            <Flex gap="2">
              <Button
                w="90px"
                p="5"
                textAlign={"center"}
                bg="black"
                borderRadius={"none"}
              >
                <Flex color={"white"}>
                  <AddIcon />
                  <Text ml="3">Write</Text>
                </Flex>
              </Button>
              <Spacer />
              <ButtonGroup gap="1" color="white">
                <Button
                  w="50px"
                  p="5"
                  textAlign={"center"}
                  bg="black"
                  borderRadius={"none"}
                >
                  <Text>All</Text>
                </Button>
                <Button
                  w="90px"
                  p="5"
                  textAlign={"center"}
                  bg="white"
                  border="1px solid black"
                  borderRadius={"none"}
                >
                  <Text color="black">Popular</Text>
                </Button>
                <Button
                  w="90px"
                  p="5"
                  textAlign={"center"}
                  bg="white"
                  borderRadius={"none"}
                  border="1px solid black"
                >
                  <Text color="black">Trending</Text>
                </Button>
                <Button
                  w="90px"
                  p="5"
                  textAlign={"center"}
                  bg="white"
                  borderRadius={"none"}
                  border="1px solid black"
                >
                  <Text color="black">Favorites</Text>
                </Button>
              </ButtonGroup>
            </Flex>
          </Box>
          <Box mt="5">
            <Box
              borderRadius={"none"}
              border="1px solid black"
              color="black"
              mb="5"
            >
              <Box>
                <Flex p="3" alignItems="center">
                  <Badge colorScheme="green" p="1" h="25px">
                    <Flex textAlign={"center"} alignItems="center">
                      <ChevronUpIcon color={"black"} />
                      <Text ml="1">123</Text>
                    </Flex>
                  </Badge>
                  <Box ml="10">
                    <Flex alignItems={"center"}>
                      <Avatar size="sm" src={Ellipse_Item} />
                      <Text ml="2" fontWeight="bold">
                        0xbb23s..v
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <Box>
                <Flex p="3" alignItems="center">
                  <Badge colorScheme="red" p="1" h="25px">
                    <Flex textAlign={"center"} alignItems="center">
                      <ChevronDownIcon color={"black"} />
                      <Text ml="1">123</Text>
                    </Flex>
                  </Badge>
                  <Box ml="10">
                    <Flex alignItems={"center"}>
                      <Text ml="2" fontWeight="bold">
                        what you guys think about doge coin?
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Box>
            <Box
              borderRadius={"none"}
              border="1px solid black"
              color="black"
              mb="5"
            >
              <Box>
                <Flex p="3" alignItems="center">
                  <Badge colorScheme="green" p="1" h="25px">
                    <Flex textAlign={"center"} alignItems="center">
                      <ChevronUpIcon color={"black"} />
                      <Text ml="1">123</Text>
                    </Flex>
                  </Badge>
                  <Box ml="10">
                    <Flex alignItems={"center"}>
                      <Avatar size="sm" src={Ellipse_Item} />
                      <Text ml="2" fontWeight="bold">
                        0xbb23s..v
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <Box>
                <Flex p="3" alignItems="center">
                  <Badge colorScheme="red" p="1" h="25px">
                    <Flex textAlign={"center"} alignItems="center">
                      <ChevronDownIcon color={"black"} />
                      <Text ml="1">123</Text>
                    </Flex>
                  </Badge>
                  <Box ml="10">
                    <Flex alignItems={"center"}>
                      <Text ml="2" fontWeight="bold">
                        what you guys think about doge coin? what you guys think
                        about doge coin? what you guys think about doge coin?
                        what you guys think about doge coin? what you guys think
                        about doge coin? what you guys think about doge coin?
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box mt="5">
            <Box
              borderRadius={"none"}
              border="1px solid black"
              color="black"
              mb="5"
            >
              <Box>
                <Flex p="3" alignItems="center">
                  <Badge colorScheme="green" p="1" h="25px">
                    <Flex textAlign={"center"} alignItems="center">
                      <ChevronUpIcon color={"black"} />
                      <Text ml="1">123</Text>
                    </Flex>
                  </Badge>
                  <Box ml="10">
                    <Flex alignItems={"center"}>
                      <Avatar size="sm" src={Ellipse_Item} />
                      <Text ml="2" fontWeight="bold">
                        0xbb23s..v
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <Box>
                <Flex p="3" alignItems="center">
                  <Badge colorScheme="red" p="1" h="25px">
                    <Flex textAlign={"center"} alignItems="center">
                      <ChevronDownIcon color={"black"} />
                      <Text ml="1">123</Text>
                    </Flex>
                  </Badge>
                  <Box ml="10">
                    <Flex alignItems={"center"}>
                      <Text ml="2" fontWeight="bold">
                        what you guys think about doge coin?
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Box>          
          </Box>
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <List border={"1px solid black"} height="100vh">
          <ListItem
            borderBottom={"1px solid black"}
            color="rgba(0, 0, 0, 0.5)"
            fontWeight={700}            
          >
            <Flex alignItems={"center"}>
              <Text ml="4" m="3">
                TOKEN COMMUNITY
              </Text>
            </Flex>
          </ListItem>
          {[
            { shortName: "Elon Musk", fullName: "Bitcoin", src: BTC },
            { shortName: "SHIBA INU", fullName: "Ethereum", src: BTC },
            { shortName: "KINU", fullName: "Polygon", src: BTC },
          ].map((item: any, index) => (
            <ListItem borderBottom={"1px solid black"} cursor="pointer">
              <Flex alignItems={"center"} ml="4" m="3">
                <Avatar size="sm" src={item.src} />
                <Text ml="2" fontWeight="bold">
                  {item.shortName}
                </Text>
              </Flex>
            </ListItem>
          ))}
        </List>
      </GridItem>
    </Grid>
  );
};

export default Home;
