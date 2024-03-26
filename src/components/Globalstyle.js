import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const Globalstyle = createGlobalStyle`

    ${reset};

    *{
        box-sizing: border-box;
    }
    body{
        font-family: "Noto Sans KR", sans-serif;
        letter-spacing: -1px;
        background-color: black;
    }
    a{
        text-decoration: none;
        color: #fff;
    }
`;
