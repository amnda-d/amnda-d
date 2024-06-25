import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../colors';
import { Page } from '../page';

export const SCiL = (props: { colors: Object }) => (
  <Page>
    <Links colors={props.colors}>
      <div>Correlation Does Not Imply Compensation: Complexity and Irregularity in the Lexicon</div>
      <Authors colors={props.colors}>Amanda Doucette, Ryan Cotterell, Morgan Sonderegger, and Timothy J. O'Donnell</Authors>
      <div>
        <a
          className="reverse"
          href="https://arxiv.org/abs/2406.05186"
          target="_blank"
        >
          paper (arXiv)
        </a>
      </div>
      <div>
        <a
          className="reverse"
          href="https://osf.io/ax78p/"
          target="_blank"
        >
          code
        </a>
      </div>
      <div>
        <a
          className="reverse"
          href="doucette_scil_2024.html"
          target="_blank"
        >
          slides
        </a>
      </div>
    </Links>
  </Page>
);

const Links = styled.div`
  padding: 30px;
  margin-top: 30vh;
  font-size: 30px;
  background-color: ${props => props.colors.opaque};
  border-radius: 20px;

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

const Authors = styled.div`
  font-size: 20px;
  color: ${props => props.colors.red};
`