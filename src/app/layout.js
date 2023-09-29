"use client";
import { Navbar } from "@/components/Navbar";
import StyledComponentsRegistry from "./lib/registry";
import styled, { ThemeProvider } from "styled-components";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { GlobalStyles } from "./globalStyles";
import { themes } from "./utils/Themes";

const Container = styled.div`
  margin: 0rem 10rem;
  @media only screen and (max-width: 600px) {
    margin: 0rem 0rem;
  }
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
            <Navbar themes = {themes}  currentTheme ={currentTheme} setcurrentTheme={setcurrentTheme} />
            <Container>{children}</Container>
            <Footer />
          </StyledComponentsRegistry>
        </body>
      </html>
    </ThemeProvider>
  );
}
