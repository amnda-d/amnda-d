import * as React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { colors, getColorScheme, light, dark } from './colors';
import { Title } from './pages/title';
import { Contact } from './pages/contact';
import { Sideeye } from './pages/sideeye';
import { About } from './pages/about';

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
          iconSize={Icon.SIZE_LARGE}
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
          <Route
            exact
            path="/"
            component={() => <Title colors={this.state.colors} />}
          />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/sideeye" component={Sideeye} />
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

const Wrapper = styled.div`
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
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    width: 100%;
    height: 100%;
    .color {
      z-index: 100;
    }
    div {
      z-index: 1;
    }
  }
  canvas {
    position: fixed;
    display: block;
    vertical-align: bottom;
    z-index: 0;
  }
`;
