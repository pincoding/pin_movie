import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const Globalstyle = createGlobalStyle`

    ${reset};

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        font-family: "Noto Sans KR", sans-serif;
        letter-spacing: -1px;
        background-color: black;
        color: white;
        position: relative;
    }
    a{
        text-decoration: none;
        color: #fff;
    }
    img{
        width: 100%;
        display: block;
    }
`;
