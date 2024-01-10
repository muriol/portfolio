import React, {memo} from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import TitleCover from "../components/TitleCover";
import BestItem from "../components/BestItem";

const MainContainer = styled.div`

`;

function Main() {
  return (
    <MainContainer>
      <Header />
      <TitleCover />
      <BestItem />
      <Footer />
    </MainContainer>
  );
};

export default memo(Main);