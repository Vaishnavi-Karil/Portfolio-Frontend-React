"use client";
import { DrawerList } from "@/components/DrawerList";
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
  height: 100vh;
`;

const Drawer = styled.div`
  border: rgb(53, 53, 53) 1px solid;
  box-shadow: 0rem 0rem 100rem 0rem rgb(0 0 0 / 73%);
  background: #211531;
  flex: 1;
  padding: 3rem 0rem;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ChildrenDisplay = styled.div`
  /* margin: 0rem 10rem; */
  height: inherit;
  overflow-y: auto;

  @media only screen and (max-width: 600px) {
    /* margin: 0rem 0rem; */
    height: inherit;
    overflow-y: auto;
  }
`;

const MainContainer = styled.div`
  padding: 0rem 0rem 0rem 1rem;
  height: inherit;
  flex: 5;
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
              <Drawer>
                <DrawerList
                  theme={themes}
                  currentTheme={currentTheme}
                  setcurrentTheme={setcurrentTheme}
                />
                <Footer />
              </Drawer>

              <MainContainer>
                <ChildrenDisplay>{children}</ChildrenDisplay>
              </MainContainer>
            </Container>
          </StyledComponentsRegistry>
        </body>
      </html>
    </ThemeProvider>
  );
}
