import React, {memo} from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import img1 from "../assets/img/img1.jpg";    // 4 볼펜
import img2 from "../assets/img/img2.jpg";    // 1 용
import img3 from "../assets/img/img3.jpg";    // 2 키스해링
import img4 from "../assets/img/img4.jpg";    // 3 폴 스미스
import img5 from "../assets/img/img5.jpg";    // 5 레만 만년필

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

`;

function TitleCover() {
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
      <div></div>
    </TitleCoverContainer>
  );
};

export default memo(TitleCover);