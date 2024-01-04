import React, { memo } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import logoImg from "../assets/img/top_logo.webp";

SwiperCore.use([Autoplay]);

const HeaderContainer = styled.div`
    background-color: #fff;
    position: sticky;
    top: 0;
    z-index: 100000;
    width: 100%;
    border-bottom: #eee solid 1px;

    /* 스위퍼 관련 css */
    .swiper-slide {
      text-align: center;
      line-height: 40px;
      font-size: 14px;
      
      a {
        display: block;
      }
    }

    /* 메뉴 관련 css */
    .menu-container {
      width: 1450px;
      height: 80px;
      margin: auto;
      display: flex;
      background-color: #fff;
      align-items: center;
      position: relative;

      .main-menu5 {
        display: flex;
        margin-right: auto;
        
        li {

          a {
            font-weight: bold;
            display: block;
            line-height: 80px;
            height: 80px;
            padding: 0 15px 0 15px;
            transition: color 0.3s ease-in-out;
          }

          &:hover {

            a {
              color: #da291c;
              border-bottom: #da291c solid 2px;
            }
          }
        }
      }

      .logo-img {
        width: 173px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      .search-menu4 {
        display: flex;
        margin-left: auto;

        li {
          padding: 15px;

          a {
            font-size: 23px;
            transition: color 0.2s ease-in-out;

            &:hover {
              color: #da291c;
            }
          }
        }

        .search-input {
          border: none;
          outline: none;
          border-bottom: 1px solid #222;
          width: 170px;

          &::placeholder {
            color: #da291c;
            font-weight: bold;
            font-size: 14px;
          }
        }
      }
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
        direction={"vertical"}
        autoplay={{delay: 3000}}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><a href="#">신규 회원가입시 10% 할인쿠폰 지급 ＞</a></SwiperSlide>
        <SwiperSlide><a href="#">카카오톡 채널 추가시, 3000원 할인쿠폰 지급 ＞</a></SwiperSlide>
      </Swiper>
      
      {/* 메인 메뉴 영역 */}
      <div className="menu-container">
        {/* 좌측 메뉴 5개 */}
        <ul className="main-menu5">
          <li><a href="#">BRAND</a></li>
          <li><a href="#">SHOP</a></li>
          <li><a href="#">EVENT</a></li>
          <li><a href="#">INSPIRATION</a></li>
          <li><a href="#">SERVICE</a></li>
        </ul>

        {/* 우측 검색, 아이콘들 */}
        <ul className="search-menu4">
          <li><input type="text" placeholder="SEARCH" className="search-input" /></li>
          <li><a href="#"><i className="fa-solid fa-location-dot"></i></a></li>
          <li><a href="#"><i className="fa-solid fa-user"></i></a></li>
          <li><a href="#"><i className="fa-solid fa-bag-shopping"></i></a></li>
        </ul>

        {/* 가운데 로고 */}
        <a href="#"><img src={logoImg} alt="까렌다쉬 로고 이미지" className="logo-img" /></a>
      </div>
      
    </HeaderContainer>
  );
}

export default memo(Header);
