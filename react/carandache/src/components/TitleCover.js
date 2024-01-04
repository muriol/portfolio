import React, {memo} from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";

const TitleCoverContainer = styled.div`

`;

function TitleCover() {
  return (
    <TitleCoverContainer>
      <Carousel>
        <Carousel.Item>
            <img src={img1} />
            <Carousel.Caption>
                <h1>h1</h1>
                <p>ppp</p>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </TitleCoverContainer>
  );
};

export default memo(TitleCover);