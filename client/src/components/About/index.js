import React from 'react'
import {  CardContainer, CardHeadingContainer, Heading1, MoreInformation} from '@/styles/Styles'
import { DescriptionContainer, ImageContainer, ProfileImage } from './AboutStyle'

export const About = () => {
  return (
    <CardContainer id ="about">
      <CardHeadingContainer>
      <MoreInformation>Get To Know More</MoreInformation>
        <Heading1>About Me</Heading1>
      </CardHeadingContainer>
      <AboutContainer>
      <ImageContainer>
        <ProfileImage src={profile_pic} alt={profile_pic} />
      </ImageContainer>
      <DescriptionContainer>
      <h1>Hello</h1>
        </DescriptionContainer>
      </AboutContainer>
    </CardContainer>
  )
}
