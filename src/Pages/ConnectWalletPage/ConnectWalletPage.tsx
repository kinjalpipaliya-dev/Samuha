import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Spacer,
  Square,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { LogoImg } from "../../Assets";
import ConnectWallet from "../../Components/ConnectWallet/ConnectWallet";
import Header from "../../Components/Header/Header";

import "./style.css";
const ConnectWalletPage: FC = () => {
  return (
    <Grid>
      <Header isLandingScreen={false} /> 
      <ConnectWallet/>     
    </Grid>
  );
};

export default ConnectWalletPage;
