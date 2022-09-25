import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Spacer,
  Square,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { LogoImg } from "../../Assets";
import { useEthers, useEtherBalance } from "@usedapp/core";

import "./style.css";
interface HeaderProps {
  isLandingScreen?: boolean;
}
const Header: FC<HeaderProps> = ({ isLandingScreen }) => {

  const { activateBrowserWallet, account } = useEthers();
	const etherBalance = useEtherBalance(account);

	const handleConnectWallet = () => {
		activateBrowserWallet();
	}

  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" bg={"black"} p="2">
      <Box p="2">
        <Flex>
          <Box w="20px" h="5" mr="3">
            <Image objectFit="cover" src={LogoImg} alt="Samuha Logo" />
          </Box>
          <Heading size="md" color={"white"}>
            Samuha
          </Heading>
        </Flex>
      </Box>
      <Spacer />
      {isLandingScreen ? (
        <ButtonGroup gap="2">
          <Button colorScheme="yellow" className="sing-in-btn">
            Sign in with Lens
          </Button>
          <Button>
            <Link to="/ConnectWallet"> Connect Wallet </Link>
          </Button>
        </ButtonGroup>
      ) : (
        <Button colorScheme="yellow" className="sing-in-btn" onClick={handleConnectWallet}>
          Connect Wallet
        </Button>
      )}
    </Flex>
  );
};
Header.defaultProps = {
  isLandingScreen: false,
};
export default Header;
