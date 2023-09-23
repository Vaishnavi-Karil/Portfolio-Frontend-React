"use client"
import { Navbar } from '@/components/Navbar'
import StyledComponentsRegistry from './lib/registry'
import './globals.css'; 
import styled from 'styled-components';
import { Footer } from '@/components/Footer';

const Container = styled.div`
margin : 0rem 10rem;
`;
export default function RootLayout({ children }) {
  return (
    <html>
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