import Link from "next/link";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 17vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 0rem 10rem;
  
  @media only screen and (max-width : 600px) {
    margin: 0rem 2rem;
  }

`;
export const LogoContainer = styled.div`
/* display : flex; */
 
`

export const Logo = styled(Link)`
font-size : 2rem;`;

export const WebsiteName = styled(Link)``;

export const NavItems = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
gap: 2.5rem;
font-size : 1.4rem; 
font-family: "Poppins", sans-serif;
position: relative;
@media only screen and (max-width : 600px){
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 1rem;
    background: #e0e0e0;
    box-shadow: 22px 22px 45px #bebebe, -22px -22px 45px #ffffff;
    position: absolute;
    flex: 1;
    right: 0rem;
    top: 0rem;
    width: 10rem;
}
`;

export const NavLink = styled(Link)``;


