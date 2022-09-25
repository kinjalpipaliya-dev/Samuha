import { Grid } from "@chakra-ui/react";
import React, { FC } from "react";
import Header from "../../Components/Header/Header";
import Home from "../../Components/Home/Home";

const HomePage: FC = () => {
  return (
    <Grid>
      <Header />
      <Home />
    </Grid>
  );
};

export default HomePage;
