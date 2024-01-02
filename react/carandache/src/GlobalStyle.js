import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        font-family: "Noto Sans KR", "Malgun Gothic", "NanumGothic";
        box-sizing: border-box;
    }

    body {
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: #000;
    }
`;

export default GlobalStyles;