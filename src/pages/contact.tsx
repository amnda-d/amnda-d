import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../colors';
import { Page } from '../page';

export const Contact = () => (
  <Page>
    <Links>
      <div>Amanda Doucette</div>
      <div>
        <a
          className="reverse"
          href="mailto:hi@amandadoucette.com"
          target="_blank"
        >
          hi@amandadoucette.com
        </a>
      </div>
      <div>
        GitHub:{' '}
        <a
          className="reverse"
          href="https://github.com/amnda-d"
          target="_blank"
        >
          amnda-d
        </a>
      </div>
    </Links>
  </Page>
);

const Links = styled.div`
  padding: 10px;
  margin-top: 30vh;
  font-size: 30px;

  a {
    font-family: Fira Mono;

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
