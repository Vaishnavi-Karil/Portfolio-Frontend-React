"use client"
import { Navbar } from '@/components/Navbar'
import StyledComponentsRegistry from './lib/registry'
import './globals.css'; 
import styled from 'styled-components';
import { Footer } from '@/components/Footer';

const Container = styled.div`
margin : 0rem 10rem;
`;

  const metadata =  {
  title : 'Portfolio', 
  description : "Portfolio is regarding Fullstack Developer have experties in Development experience is 3+ Years", 
  keywords : "fullstack developer, Mern Stack, Next.js Developer, Web Developer, Javascript Developer, React JS Developer"
}

export default function RootLayout({ children }) {
  return (
    <html>
       <head>
        <title>{metadata.title}</title> 
      </head>
      <body>
        <StyledComponentsRegistry>
          <Navbar/>
          <Container>
          {children}
          </Container>
          <Footer/>
          </StyledComponentsRegistry>
      </body>
    </html>
  )
}