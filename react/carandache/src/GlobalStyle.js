import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./assets/fonts/fonts.css";

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        font-family: "CarandacheSans", "Noto Sans KR", "Malgun Gothic", "NanumGothic";
        box-sizing: border-box;
    }

    body {
        padding: 0;
        margin: 0;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: #000;
    }
`;

export default GlobalStyles;