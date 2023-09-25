import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Heading1 = styled.p`
font-size : 3.8rem;
color: black; 
font-weight : 700;
font-family: "Poppins", sans-serif;
`

export const Heading6 = styled.p`
color : rgb(85, 85, 85); 
font-weight : 600;
font-size: 1.5rem;`

export const Heading3 = styled.p`
color : rgb(85, 85, 85); 
font-weight : 600;
font-size: 2rem;
line-height:3.8rem;
letter-spacing: 0.2rem;
 `

 export const MoreInformation = styled.p`
 color : rgb(85, 85, 85);
 font-size: 1.2rem `;


 export const CardContainer = styled.div`
min-height : 80vh; 
height : auto;
text-align: center; 
display : flex; 
flex-direction : column;
width : 100%;
margin-bottom : 1.5rem;`


export const CardHeadingContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
padding: 2rem 1rem;
`;

export const ButtonTransparentBg = styled(Link)`
background : transparent;
color : rgb(0, 0, 0);
padding: 1rem;
border: 1px solid black;
border-radius : 1.4rem;
font-weight : 600;
&:hover{
    background: rgb(53, 53, 53);
    color : white;
}
`
export const DisplayPdfBlackPage = styled.a`
background : transparent;
color : rgb(0, 0, 0);
padding: 1rem;
border: 1px solid black;
border-radius : 1.4rem;
font-size: 0.8rem;
font-weight : 600;
width : 10rem;
&:hover{
    background: rgb(53, 53, 53);
    color : white;
}
`

export const ButtongGreyBg = styled(Link)`
background: rgb(53, 53, 53);
padding: 1rem;
border: 1px solid transparent;
border-radius : 1.4rem;
font-size: 0.8rem;
font-weight : 600;
color : white;
width : 10rem;

&:hover {
background :  rgb(0, 0, 0);
}`; 

export const Icon = styled(Image)`
width : 1.8rem; 
height: 1.8rem;
`
// /assets/checkmark.png


export const ParaTypography = styled.p`
color : rgb(85, 85, 85);
font-size : 1.1rem;
`;