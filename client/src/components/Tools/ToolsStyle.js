import styled from "styled-components";

export const CardDetails = styled.div`
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
`;

export const CardDetailsContainer = styled.div`
  width: 49%;
  border-radius: 3rem;
  border: rgb(53, 53, 53) 0.1rem solid;
  padding: 0rem 1.5rem;
`;

export const ToolCardHeader = styled.p`
  color: rgb(85, 85, 85);
  font-weight: 700;
  font-size: 2rem;
  line-height: 3.8rem;
  letter-spacing: 0.2rem;
  margin: 0.5rem 0rem;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;

export const RenderToolContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  // padding: 0rem 2.5rem;
`;

export const ToolElement = styled.div`
  width: 50%;
  display: flex;
  gap: 1rem;
  padding: 1.2rem;
  text-align: left;
`;
