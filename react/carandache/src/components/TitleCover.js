import React, { memo, useEffect } from "react";
import styled from "styled-components";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../assets/img/img1.jpg";    // 4 볼펜
import img2 from "../assets/img/img2.jpg";    // 1 용
import img3 from "../assets/img/img3.jpg";    // 2 키스해링
import img4 from "../assets/img/img4.jpg";    // 3 폴 스미스
import img5 from "../assets/img/img5.jpg";    // 5 레만 만년필
import collection1 from "../assets/img/main_finewriting-01.jpg";
import collection2 from "../assets/img/main_writing-01.jpg";
import collection3 from "../assets/img/main_art-01.jpg";
import swissmade from "../assets/img/main_swissmade.jpg";

const TitleCoverContainer = styled.div`
  img {
    width: 100%;
    vertical-align: top;
  }

  .carousel-control-next, .carousel-control-prev {
    display: none;
  }

  .carousel-indicators {
    margin-bottom: 30px;
  
    button {
      margin-left: 0;
      margin-right: 0;
      opacity: 1;
      width: 50px;
      height: 2px;
    }
  }
  .carousel-indicators .active {
    background-color: #da291c;
  }

  .carousel-caption {
    padding-bottom: 27px;
    animation: fadein 2s;

    @keyframes fadein {
      from {
        opacity: 0;
        transform: translate(-13%, 0);
      }
      to {
        opacity: 1;
        transform: translate(0, 0);
      }
    }

    .classification {
      font-size: 27px;
      margin: 10px;
    }

    .title {
      font-size: 31px;
      font-weight: bold;
      margin: 10px;
    }

    .desc {
      font-size: 20px;
      margin-top: 30px;
    }

    .read-more {
      display: inline-block;
      background-color: #fff;
      padding: 10px 38px;
      margin: 30px;
      font-size: 16px;
      font-weight: bold;
    }
  }


  .collection-container {
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;

    .collection-item {
      display: block;
      width: 440px;
      text-align: center;
      margin: 19px;
      transition: all 0.2s ease-in-out;

      .collection1 {
        background-color: #000;
        color: #fff;
        height: 90px;
      }

      .collection2 {
        background-color: #f5f5f5;
        height: 90px;
      }

      .collection3 {
        background-color: #da291c;
        color: #fff;
        height: 90px;
      }

      .item-title {
        font-weight: bold;
        font-size: 21px;
        padding-top: 20px;
      }

      p {
        padding-top: 13px;
      }

      &:hover {
        transform: translateY(-20px);
      }
    }
  }


  .swissmade {
    display: flex;
    align-items: center;
    background-color: #da291c;

    img {
      width: 50%;
    }

    div {
      width: 50%;
      color: #fff;
      margin-left: 110px;

      h1 {
        font-size: 35px;
        font-weight: bold;
        margin-bottom: 30px;
      }

      p {
        font-size: 20px;
        line-height: 1.6;
      }

      a {
        display: inline-block;
        background-color: #fff;
        padding: 10px 38px;
        margin-top: 30px;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
`;

function TitleCover() {
  useEffect(() => {
    // 웹페이지가 열림과 동시에 AOS를 초기화 하기 위해서 호출
    AOS.init();
  }, []);

  return (
    <TitleCoverContainer>
      {/* 메인 커버 슬라이드 */}
      <Carousel>
        <Carousel.Item>
            <a href="#"><img src={img2} alt="first slide" /></a>
            <Carousel.Caption>
                <h3 className="classification">SPECIAL EDITION</h3>
                <h2 className="title">YEAR OF DRAGON</h2>
                <p className="desc">2024 용의 해, 드래곤 에디션 출시</p>
                <a className="read-more" href="#">READ MORE</a>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <a href="#"><img src={img3} alt="second slide" /></a>
            <Carousel.Caption>
                <h3 className="classification">SPECIAL EDITION</h3>
                <h2 className="title">KEITH HARIGN</h2>
                <p className="desc">까렌다쉬와 키스해링의 만남</p>
                <a className="read-more" href="#">READ MORE</a>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <a href="#"><img src={img4} alt="third slide" /></a>
            <Carousel.Caption>
                <h3 className="classification">WRITING</h3>
                <h2 className="title">849 폴스미스 ED.4</h2>
                <p className="desc">폴스미스 에디션 최초 만년필/샤프 출시</p>
                <a className="read-more" href="#">READ MORE</a>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <a href="#"><img src={img1} alt="fourth slide" /></a>
            <Carousel.Caption>
                <h3 className="classification">WRITING</h3>
                <h2 className="title">849 커스터마이징 볼펜</h2>
                <p className="desc">나만의 볼펜 만들기</p>
                <a className="read-more" href="#">READ MORE</a>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <a href="#"><img src={img5} alt="fifth slide" /></a>
            <Carousel.Caption>
                <h3 className="classification">FINE WRITING</h3>
                <h2 className="title">레만 로우엄버</h2>
                <p className="desc">스위스의 자연과 울창한 숲을 표현한 새로운 레만 컬렉션</p>
                <a className="read-more" href="#">READ MORE</a>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      {/* 컬렉션 메뉴 */}
      <div className="collection-container">
        <a href="#" className="collection-item">
          <div className="collection1">
            <h3 className="item-title">FINE WRITING</h3>
            <p>고급 필기구 컬렉션</p>
          </div>
          <img src={collection1} />
        </a>
        <a href="#" className="collection-item">
          <div className="collection2">
            <h3 className="item-title">WRITING</h3>
            <p>오피스 필기구 컬렉션</p>
          </div>
          <img src={collection2} />
        </a>
        <a href="#" className="collection-item">
          <div className="collection3">
            <h3 className="item-title">COLORS</h3>
            <p>화방용품 컬렉션</p>
          </div>
          <img src={collection3} />
        </a>
      </div>


      {/* 스위스 메이드 */}
      <div className="swissmade"
          data-aos="fade-up"
          data-aos-offset="230"
          data-aos-easing="linear"
          data-aos-duration="700">
        <img src={swissmade} />
        <div>
          <h1>SWISSMADE</h1>
          <p>스위스 필기구/화방용품 전문 브랜드 까렌다쉬,<br />장인들과 함께한 100년의 역사를 만나보세요.</p>
          <a className="read-more" href="#">READ MORE</a>
        </div>
      </div>
    </TitleCoverContainer>
  );
};

export default memo(TitleCover);