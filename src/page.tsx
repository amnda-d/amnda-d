import * as React from 'react';
import styled from 'styled-components';
import { Header } from './header';

export const Page = props => (
  <Wrapper>
    <Header />
    <Children>{props.children}</Children>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Children = styled.div`
  margin-top: 62px;
  animation: fadeIn 1s forwards;
  z-index: 1;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
