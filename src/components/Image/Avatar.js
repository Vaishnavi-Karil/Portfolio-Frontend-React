import { Img } from "@/app/data/images";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const AvatarImage = styled(Image)`
  width: 50%;
  height: auto;
  border: 5px solid white;
  border-radius: 52%;
`;

AvatarImage.displayName = "AvatarImage";

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 50%;
`;

AvatarContainer.displayName = "AvatarContainer";
export const Avatar = () => {
  const { profile_pic } = Img;
  return;
  <AvatarContainer>
    <AvatarImage alt={profile_pic} src={profile_pic} sizes="100vw" />;
  </AvatarContainer>;
};
