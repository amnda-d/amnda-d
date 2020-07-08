import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../colors';
import { Page } from '../page';

export const Software = () => (
  <Page>
    <Links>
      <div>
        <a
          className="reverse"
          href="https://pypi.org/project/sideeye/"
          target="_blank"
        >
          SideEye
        </a>
      </div>
      <div>
        An open-source Python package for analyzing eye-tracking while reading
        data.
      </div>
    </Links>
  </Page>
);

const Links = styled.div`
  padding: 10px;
  font-size: 20px;

  a {
    font-size: 30px;
    text-decoration: none;
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
