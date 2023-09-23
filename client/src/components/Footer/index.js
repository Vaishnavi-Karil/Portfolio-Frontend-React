import { route } from '@/app/utils/routes';
import React from 'react'
import { CopyRightContainer, FooterContainer, FooterLink, FooterNavigationContainer } from './FooterStyle';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterNavigationContainer>
      {route.map((pg, index) => {
          const { id, path, component, text } = pg;
          return (
            <FooterLink key={id} href={path}>
              {text}
            </FooterLink>
          );
        })}
      </FooterNavigationContainer>
      <CopyRightContainer> 
      Copyright © 2023 Vaishnavi Karil. All Rights Reserved
      </CopyRightContainer>
        
    </FooterContainer>
  )
}
