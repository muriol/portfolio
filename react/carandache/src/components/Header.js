import React, { memo } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { Autoplay } from "swiper/modules";
import "swiper/css";

SwiperCore.use([Autoplay]);

const HeaderContainer = styled.div`
    Swiper {
        height: 100px;
    }
`;

function Header() {
  return (
    <HeaderContainer>
      <Swiper
        style={{
            height: "40px",
            backgroundColor: "#f5f5f5",
        }}
        modules={[Autoplay]}
        slidesPerView={1}
        direction="vertical"
        autoplay={{delay: 3000}}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>신규 회원가입시</SwiperSlide>
        <SwiperSlide>카카오톡 추가시</SwiperSlide>
      </Swiper>
      <h1>header</h1>
    </HeaderContainer>
  );
}

export default memo(Header);
