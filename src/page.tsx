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
  text-align: center;
`;

const Children = styled.div`
  animation: fadeIn 1s forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
