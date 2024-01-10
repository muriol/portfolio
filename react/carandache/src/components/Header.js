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
      /* width: 100%; */
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

        .shop:hover .depth-wrap {
          display: block;
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

    .depth-wrap {
      display: none;
      position: absolute;
      z-index: 9999;
      background-color: #fff;
      width: 100vw;
      left: calc(-50vw + 50%);
      height: 400px;
      margin-top: 1px;

      .depth-menu {
        display: flex;
        width: 1280px;
        margin: auto;
        margin-top: 30px;
        font-size: 14px;

        .depth-title {
          font-weight: bold;
          padding: 0 20px;

          .depth-item {
            font-weight: 400;
            padding-top: 20px;

            li {
              padding-top: 13px;
            }
          }
        }
      }
    }
`;

function Header() {
  return (
    <HeaderContainer>
      {/* 최상단 부분 */}
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
      >
        <SwiperSlide><a href="#">신규 회원가입시 10% 할인쿠폰 지급 ＞</a></SwiperSlide>
        <SwiperSlide><a href="#">카카오톡 채널 추가시, 3000원 할인쿠폰 지급 ＞</a></SwiperSlide>
      </Swiper>
      
      
      {/* 메인 메뉴 영역 */}
      <div className="menu-container">
        {/* 좌측 메뉴 5개 */}
        <ul className="main-menu5">
          <li><a href="#">BRAND</a></li>
          <li className="shop"><a style={{cursor: "default"}}>SHOP</a>
            {/* 마우스 오버시 나타나는 메뉴 */}
            <div className="depth-wrap">
              <ul className="depth-menu">
                <li className="depth-title">필기모드
                  <ul className="depth-item">
                    <li>만년필</li>
                    <li>수성펜</li>
                    <li>볼펜</li>
                    <li>샤프</li>
                    <li>홀더펜</li>
                    <li>연필</li>
                    <li>잉크&리필</li>
                  </ul>
                </li>
                <li className="depth-title">COLORS
                  <ul className="depth-item">
                    <li>CREATIVE CLASS</li>
                    <li>색연필</li>
                    <li>크레용</li>
                    <li>파스텔</li>
                    <li>과슈</li>
                    <li>아크릴 물감</li>
                    <li>펠트펜</li>
                    <li>흑연</li>
                    <li>악세사리</li>
                  </ul>
                </li>
                <li className="depth-title">WRITING
                  <ul className="depth-item">
                    <li>커스터마이징</li>
                    <li>849 FAMILY</li>
                    <li>888 인피니트</li>
                    <li>픽스펜슬</li>
                    <li>연필</li>
                    <li>REFILL</li>
                  </ul>
                </li>
                <li className="depth-title">FINE WRITING
                  <ul className="depth-item">
                    <li>베리우스</li>
                    <li>레만</li>
                    <li>에크리도</li>
                    <li>REFILL</li>
                    <li>LEATHER</li>
                  </ul>
                </li>
                <li className="depth-title">SPECIAL EDITION
                  <ul className="depth-item">
                    <li>KEITH HARING</li>
                    <li>LEMAN RAW UMBER</li>
                    <li>849 PAUL SMITH</li>
                  </ul>
                </li>
                <li className="depth-title">PRESTIGE EDITION
                  <ul className="depth-item">
                    <li>DRAGON STRAW MARQUETRY 2024</li>
                    <li>CAELOGRAPH</li>
                    <li>EDOUARD JUD DRAGON</li>
                  </ul>
                </li>
                <li className="depth-title">LIMITED EDITION
                  <ul className="depth-item">
                    <li>CHINESE ZODIAC</li>
                    <li>VARIUS TROPHY</li>
                  </ul>
                </li>
                <li className="depth-title">선물추천
                  <ul className="depth-item">
                    <li>BEST ITEM</li>
                    <li>기업선물</li>
                    <li>아티스트선물</li>
                    <li>7만원 이하</li>
                    <li>15만원 이하</li>
                    <li>30만원 이하</li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
          <li><a href="#">EVENT</a></li>
          <li className="inspiration"><a style={{cursor: "default"}}>INSPIRATION</a></li>
          <li className="service"><a style={{cursor: "default"}}>SERVICE</a></li>
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
