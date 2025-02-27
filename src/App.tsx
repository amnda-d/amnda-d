import * as React from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { colors, getColorScheme, light, dark } from './colors';
import { Title } from './pages/title';
import { Contact } from './pages/contact';
import { Software } from './pages/software';
import { About } from './pages/about';
import { SCiL } from './pages/scil';

const Background = props => (
  <Wrapper colors={props.color === 'light' ? light : dark} className="App">
    <div className="particles" id="particles-js">
      <ColorIcon
        className="color"
        onClick={() => {
          const newColor = props.color === 'light' ? 'dark' : 'light';
          window.localStorage.setItem('colors', newColor);
          props.setColor(newColor);
        }}
      >
        <Icon
          icon={props.color === 'light' ? IconNames.MOON : IconNames.FLASH}
          size={20}
          color={colors().text}
        />
      </ColorIcon>
      {props.children}
    </div>
  </Wrapper>
);

export class App extends React.Component {
  state = { color: getColorScheme(), colors: colors() };
  render() {
    return (
      <Router>
        <Background
          color={this.state.color}
          setColor={color =>
            this.setState({ color, colors: color === 'light' ? light : dark })
          }
        >
          <Routes>
          <Route
            // exact
            path="/"
            // component={() => <Title colors={this.state.colors} />}
            element={<Title colors={this.state.colors} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/about"
            // render={() => <About colors={this.state.colors} />}
            element={<About colors={this.state.colors} />}
          />
          <Route path="/software" element={<Software />} />
          <Route path="/scil" element={<SCiL colors={this.state.colors} />} />
          </Routes>
        </Background>
      </Router>
    );
  }
}

const ColorIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const Wrapper = styled.div<{ colors; }>`
  color: ${props => props.colors.text};
  a {
    text-decoration: none;

    :hover {
      color: ${props => props.colors.red};
    }
  }

  .reverse {
    color: ${props => props.colors.red};
    text-decoration: none;

    :hover {
      color: ${props => props.colors.text};
    }
  }

  .particles {
    font-family: 'Crimson Text', serif;
    color: ${props => props.colors.text};
    background-color: ${props => props.colors.gray};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    width: 100%;
    height: 100%;
    .color {
      z-index: 100;
    }
  }
  canvas {
    position: fixed;
    display: block;
    vertical-align: bottom;
    z-index: 0;
  }
`;
