import * as React from 'react';
import Typist from 'react-typist';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = (props: { colors: Object }) => (
  <Wrapper>
    <TitleLine
      colors={props.colors}
      avgTypingDelay={150}
      cursor={{ show: false }}
    >
      <Typist.Delay ms={1000} />
      A. Doucette
    </TitleLine>
    <Links colors={props.colors}>
      <Link to="/about">About</Link>
      <Link to="/software">Software</Link>
      <Link to="/contact">Contact</Link>
    </Links>
  </Wrapper>
);

const Wrapper = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;

  a {
    font-size: 22px;
  }
`;

const TitleLine = styled(Typist)`
  font-family: Fira Mono;
  font-size: 30px;
  padding: 25px;
  border: 1px solid ${props => props.colors.text};
  width: 200px;
  height: 37px;
  text-align: center;
  animation: fadeIn 2s forwards;
  color: ${props => props.colors.red};
  background-color: rgba(0, 0, 0, 0.3);

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Links = styled.div<{ colors; }>`
  padding: 10px;

  a {
    color: ${props => props.colors.text};
    padding: 0 20px;
    animation: delayFadeIn 7s forwards;

    @keyframes delayFadeIn {
      0% {
        opacity: 0;
      }
      33% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;
