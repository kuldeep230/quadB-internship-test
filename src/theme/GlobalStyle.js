import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    --matteBlack : 23, 23, 23;
    --milkWhite : 237, 237, 237;
    --cherryRed : 218, 0, 55;
    --grey : 68, 68, 68;
}


*,
*::after,
*::before {
    margin:0;
    padding:0;
    box-sizing:border-box;
    text-decoration:none;
    overflow-x: hidden;
}

body{
    background:rgb(var(--matteBlack));
    background-repeat:no-repeat;
}

`;

export default GlobalStyle;
