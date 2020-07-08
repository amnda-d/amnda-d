import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { colors, getColorScheme } from './colors';

export class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <TitleLine>
          <Link to="/">A. Doucette</Link>
        </TitleLine>
        <Links>
          <Link to="/about">About</Link>
          <Link to="/software">Software</Link>
          <Link to="/contact">Contact</Link>
        </Links>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  width: 100%;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);

  a {
    color: white !important;
    text-decoration: none;

    :hover {
      color: ${colors().red} !important;
    }
  }
`;

const TitleLine = styled.div`
  font-size: 30px;
  padding: 10px 25px;
  width: fit-content;

  a {
    color: ${colors().red};

    :hover {
      color: white;
    }
  }
`;

const Links = styled.div`
  padding: 10px;
  text-align: center;
  height: 100%;
  font-family: Fira Mono;

  a {
    padding: 0 20px;
  }
`;
