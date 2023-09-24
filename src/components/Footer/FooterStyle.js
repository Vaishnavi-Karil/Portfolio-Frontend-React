import Link from "next/link";
import styled from "styled-components";


export const FooterContainer = styled.div`
height : 32vh;
display: flex; 
flex-direction : column;
gap : 1.8rem`;

export const FooterNavigationContainer = styled.div`
display: flex;
flex-direction: row;
gap: 1.8rem;
font-size: 1.6rem;
font-family: "Poppins", sans-serif;
align-items: center;
justify-content: center;
height: 17vh;
}`;
export const FooterLink = styled(Link)`
`

export const CopyRightContainer = styled.div`
text-align: center;
color : rgb(85, 85, 85);
font-size: 1.2rem;
 `;

