import { AddIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Center,
  CloseButton,
  Divider,
  Flex,
  Grid,
  Image,
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
import { Ellipse_Item } from "../../Assets";
import Header from "../Header/Header";

import "./style.css";
const ConnectWallet: FC = () => {
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
    <Grid>
      <Center mt={25} color="white" w={"100%"}>
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          w={1000}
          p="5"
        >
          <Stack spacing={2}>
            <Flex>
              <Text pt="5" fontSize="lg" color={"black"}>
                Join communities
              </Text>
              <Spacer />
              <CloseButton color={"black"} size="md" />
            </Flex>
            <Text fontSize="sm" color={"black"}>
              Your Holdings
            </Text>
          </Stack>
          <Tabs isFitted variant="unstyled" mt="2">
            <TabList>
              <Tab
                borderRadius={"4"}
                bgColor={"#E9E9E9"}
                color="black"
                _selected={{ color: "white", bg: "black" }}
                p="10px"
              >
                Tokens
              </Tab>
              <Tab
                borderRadius={"4"}
                bgColor={"#E9E9E9"}
                color="black"
                _selected={{ color: "white", bg: "black" }}
                p="10px"
              >
                NFTs
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {[
                  { shortName: "BTC", fullName: "Bitcoin" },
                  { shortName: "ETH", fullName: "Ethereum" },
                  { shortName: "MATIC", fullName: "Polygon" },
                  { shortName: "BTC", fullName: "Bitcoin" },
                  { shortName: "BTC", fullName: "Bitcoin" },
                ].map((item: any, index) => (
                  <Flex
                    minWidth="max-content"
                    alignItems="center"
                    gap="2"
                    p="5px"
                    mt="2"
                    color="black"
                    className="token-items"
                    key={index}
                  >
                    <Box p="2">
                      <Flex alignItems={"center"}>
                        <Avatar size="sm" src={Ellipse_Item} />
                        <Text ml="2" fontWeight="bold">
                          {item.shortName}
                        </Text>
                        <Image ml="2" h="1.5" src={Ellipse_Item} alt="image" />
                        <Text fontSize="sm" ml="3" color={"black"}>
                          {item.fullName}
                        </Text>
                      </Flex>
                    </Box>
                    <Spacer />
                    <Button size={"sm"} bg="black">
                      <AddIcon color="white" />
                    </Button>
                  </Flex>
                ))}
                <Link to="/Home">
                  <Button mt="5" bg={"black"} textAlign={"center"} w="100%">
                    Done
                  </Button>
                </Link>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Center>
    </Grid>
  );
};

export default ConnectWallet;
