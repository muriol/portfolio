import React, {memo} from "react";
import styled from "styled-components";

import Footer from "../components/Footer";

const MainContainer = styled.div`

`;

function Main() {
  return (
    <MainContainer>
      <h1>Main</h1>
      <Footer />
    </MainContainer>
  );
};

export default memo(Main);