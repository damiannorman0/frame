import { ExerciseArea } from "components/ExerciseArea";
import type { NextPage } from "next";
import styled from "styled-components";
import FrameioLogo from "design-system/icons/frameio-logo.svg";

/**
 * Styled Components
 */
export const Main = styled.main`
  width: 100%;
  height: 100%;
  background-size: 100%;
  padding-top: 24px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text.body};
  font-weight: 500;
  letter-spacing: -0.02em;
  text-align: center;
`;

export const Logo = styled(FrameioLogo)`
  width: 15px;
  height: auto;
`;

const Home: NextPage = () => {
  return (
    <Main>
      <FrameioLogo />
      <Title>Frame.io Exercise</Title>
      <ExerciseArea />
    </Main>
  );
};

export default Home;
