import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { colors, getColorScheme } from './colors';

export class Header extends React.Component {
  state = { menuOpen: false };

  render() {
    return (
      <Wrapper>
        <Icon
          icon={IconNames.MENU}
          size={20}
          color="white"
          onClick={() => this.setState({ menuOpen: !this.state.menuOpen })}
        />
        <TitleLine>
          <Link to="/">A. Doucette</Link>
        </TitleLine>
        <Links>
          <Link to="/about">About</Link>
          <Link to="/software">Software</Link>
          <Link to="/contact">Contact</Link>
          <a href="ad_cv.pdf" target="_blank">
            CV
          </a>
        </Links>
        {this.state.menuOpen && (
          <MobileMenu>
            <MobileLinks>
              <div>
                <Link to="/about">About</Link>
              </div>
              <div>
                <Link to="/software">Software</Link>
              </div>
              <div>
                <Link to="/contact">Contact</Link>
              </div>
              <div>
                <a href="ad_cv.pdf" target="_blank">
                  CV
                </a>
              </div>
            </MobileLinks>
          </MobileMenu>
        )}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  z-index: 2;
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
  span {
    z-index: 5;
    padding-left: 20px;

    @media only screen and (min-width: 651px) {
      display: none;
    }
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  padding-top: 60px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100vw;
  background-color: rgba(0, 0, 0, 1);
  overflow: hidden;

  animation: slideIn 1s ease-out;

  @keyframes slideIn {
    from {
      max-height: 0%;
    }
    to {
      max-height: 100vh;
  }
`;

const TitleLine = styled.div`
  z-index: 5;
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
  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

const MobileLinks = styled.div`
  padding: 10px;
  padding-left: 70px;
  text-align: left;
  height: 100%;
  font-family: Fira Mono;
  a {
    color: white !important;
    text-decoration: none;

    :hover {
      color: ${colors().red} !important;
    }
  }
  div {
    padding: 10px;
  }
`;

const MenuHeader = styled.div`
  flex-direction: column;
`;
