import React, { memo } from "react";
import styled from "styled-components";

import kcp from "../assets/img/mark_kcp.jpg";

const FooterContainer = styled.div`
  background-color: #f6f6f6;

  .top-background {
    background-color: #da291c;

    .top-ul-container {
      width: 1790px;
      height: 410px;
      margin: auto;
      display: flex;
      justify-content: space-evenly;

      ul {
        margin: 0;
        padding: 0;
        margin-top: 62px;

        li {
          list-style: none;
          color: #fff;
          margin-top: 16px;

          a {
            color: #fff;
            transition: all 0.2s ease-in;

            &:hover {
              color: #fcc9c5;
            }
          }
        }

        .list-title {
          font-weight: 600;
          font-size: 23px;
          margin-bottom: 52px;

          i {
            margin-right: 10px;
          }
        }

        .fa-facebook-f, .fa-instagram, .fa-youtube {
          font-size: 28px;
          padding: 10px;
        }
      }
    }
  }

  .middle-menu-container {
    width: 760px;
    
    .middle-menu {
      display: flex;
      justify-content: space-between;
      padding: 35px 0 35px 249px;

      li {
        font-size: 18px;
        font-weight: 500;

        a {
          transition: all 0.2s ease-in;

          &:hover {
            color: #da291c;
          }
        }

        .bold {
          font-weight: bold;
        }
      }
    }
  }

  .middle-hr {
    border: 0;
    height: 1px;
    background: #e2e2e2;
    margin: 0;
  }

  .bottom-title-wrap {
    display: flex;
    padding: 40px 0 40px 250px;

    .bottom-title {
      font-size: 24px;
      font-weight: bold;

      &:nth-child(2) {
        margin-left: 280px;
      }
    }
  }

  .group-container {
    height: 270px;
    margin: auto;
    display: flex;

    .group {
      display: flex;
      
      &:nth-child(1) {
        margin-left: 241px;
        position: absolute;

        .kcp-img {
          width: 430px;
          height: 60px;
          margin-top: 40px;
          margin-left: 10px;
          position: absolute;
        }
      }

      &:nth-child(2) {
        margin-left: 716px;
      }

      &:nth-child(3) {
        margin-left: 70px;
      }

      .group-title {
        font-weight: 600;

        li {
          padding: 8px;
        }
      }

      .group-item {
        margin-left: 30px;

        li {
          padding: 8px;
        }
      }
    }
  }

`;

function Footer() {
  return (
    <FooterContainer>
      <div className="top-background">
        <div className="top-ul-container">
          <ul>
            <li className="list-title">SERVICE</li>
            <li><a href="#">각인 서비스</a></li>
            <li><a href="#">선물 포장</a></li>
            <li><a href="#">기업 선물</a></li>
            <li><a href="#">보증 연장 안내</a></li>
          </ul>

          <ul>
            <li className="list-title"><i className="fa-solid fa-truck-fast"></i>DELIVERY</li>
            <li>￦30,000 이상 구매시, 무료 배송</li>
          </ul>

          <ul>
            <li className="list-title"><i className="fa-solid fa-headset"></i>CUSTOMER SERVICE</li>
            <li>9:00a.m - 18:00p.m / OFF TIME 12:00p.m - 13:00p.m</li>
            <li>토/일 및 법정 공휴일 휴무</li>
          </ul>

          <ul>
            <li className="list-title">FOLLOW US</li>
            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a><a href="#"><i className="fa-brands fa-instagram"></i></a><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>

      <div className="middle-menu-container">
        <ul className="middle-menu">
          <li><a href="#">HOME</a></li>
          <li><a href="#">AGREEMENT</a></li>
          <li><a href="#" className="bold">개인정보처리방침</a></li>
          <li><a href="#">GUIDE</a></li>
        </ul>
      </div>

      <hr className="middle-hr" />

      <ul className="bottom-title-wrap">
        <li className="bottom-title">BANK ACCOUNT</li>
        <li className="bottom-title">COMPANY INFO</li>
      </ul>

      <div className="group-container">
        <div className="group">
          <ul className="group-title">
            <li>기업</li>
            <li>예금주</li>
            <a href="#"><img src={kcp} className="kcp-img" alt="kcp 이미지" /></a>
          </ul>
          <ul className="group-item">
            <li>257-084469-01-011</li>
            <li>(주)웨이무역</li>
          </ul>
        </div>

        <div className="group">
          <ul className="group-title">
            <li>COMPANY</li>
            <li>OWNER</li>
            <li>개인정보관리책임자</li>
            <li>통신판매업신고번호</li>
            <li>사업자등록번호</li>
          </ul>
          <ul className="group-item">
            <li>(주)웨이무역</li>
            <li>우주현</li>
            <li>우보미</li>
            <li>제 2017-서울서초-2008 호</li>
            <li>
              214-87-18245 <span>[사업자정보확인]</span>
            </li>
          </ul>
        </div>

        <div className="group">
          <ul className="group-title">
            <li>TEL</li>
            <li>E-MAIL</li>
            <li>ADDRESS</li>
          </ul>
          <ul className="group-item">
            <li>070-4837-2860</li>
            <li>carandache@waytrading.com</li>
            <li>서울특별시 서초구 서운로11길 71 (서초동) (주)웨이무역</li>
          </ul>
        </div>
      </div>
    </FooterContainer>
  );
}

export default memo(Footer);
