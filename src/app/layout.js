"use client";
import { Drawer } from "@/components/Drawer";
import StyledComponentsRegistry from "./lib/registry";
import styled, { ThemeProvider } from "styled-components";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { GlobalStyles } from "./globalStyles";
import { themes } from "./utils/Themes";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const ChildrenDisplay = styled.div`
  /* margin: 0rem 10rem; */
  
  @media only screen and (max-width: 600px) {
    /* margin: 0rem 0rem; */

  }
`;




const MainContainer = styled.div`
width: 80vw;
padding: 0rem 1rem;
`;

const metadata = {
  title: "Portfolio",
  description:
    "Portfolio is regarding Fullstack Developer have experties in Development experience is 3+ Years",
  keywords:
    "fullstack developer, Mern Stack, Next.js Developer, Web Developer, Javascript Developer, React JS Developer",
};

export default function RootLayout({ children }) {
  const [currentTheme, setcurrentTheme] = useState("naviBlueTheme");

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <html>
        <head>
          <title>{metadata.title}</title>
        </head>
        <body>
          <StyledComponentsRegistry theme={currentTheme}>
            <GlobalStyles theme={themes[currentTheme]} />

            <Container>
              
              <Drawer
                  theme={themes}
                  currentTheme={currentTheme}
                  setcurrentTheme={setcurrentTheme}
                />
               
              
              <MainContainer>
                <ChildrenDisplay>{children}</ChildrenDisplay>
                <Footer />
              </MainContainer>
            </Container>
          </StyledComponentsRegistry>
        </body>
      </html>
    </ThemeProvider>
  );
}
