import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* Universal reset */
  * {
    margin : 0px ; 
    padding : 0px; 
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}
a {
    text-decoration: none;
    color : inherit;
}
body{
    font-size: 1.4rem;
    background-color: ${({ theme }) => theme.bg.bgColor};
    color :${({ theme }) => theme.bg.bgTextColor };
}

button {
  width : 3rem; 
  height : 1rem;
}


svg {
    width: 2rem;
    height: 2rem;
}

  /* Additional global styles can be added here */
`;
