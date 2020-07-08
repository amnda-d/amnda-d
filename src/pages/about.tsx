import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../colors';
import { Page } from '../page';

export const About = (props: { colors: Object }) => (
  <Page>
    <Bio colors={props.colors}>
      <Title colors={props.colors}>About Amanda</Title>
      <div>
        I'm a former software engineer and current PhD student in linguistics at{' '}
        <a
          className="reverse"
          href="https://www.mcgill.ca/linguistics/"
          target="_blank"
        >
          McGill University
        </a>{' '}
        interested in how machine learning - mainly artificial neural networks -
        can be used to model language learning and linguistic representation in
        the human brain. Specifically, I'm interested in how humans learn
        phonological patterns, and how phonological features are represented in
        the brain.
      </div>
      <Subtitle colors={props.colors}>Publication</Subtitle>
      <div>
        <b>2017</b>.{' '}
        <a
          className="reverse"
          href="https://www.aclweb.org/anthology/W17-0705/"
          target="_blank"
        >
          Inherent Biases of Recurrent Neural Networks for Phonological
          Assimilation and Dissimilation.
        </a>{' '}
        Proceedings of the 7th Workshop on Cognitive Modeling and Computational
        Linguistics (CMCL 2017), 35–40.
      </div>
      <Subtitle colors={props.colors}>Presentation</Subtitle>
      <div>
        <b>2019</b>. Introduction to AI and Machine Learning. General audience
        talk on the basics of AI and related ethical issues. Given at Soho House
        Ludlow Tech Club, New York, NY (May 14) and for visiting students from
        Osaka College of Design and IT, Los Angeles, CA (November 15).
      </div>
    </Bio>
  </Page>
);

const Bio = styled.div`
  margin: 0 auto;
  padding: 2rem;
  min-width: 300px;
  max-width: 50%;
  text-align: left;
  background-color: ${props => props.colors.opaque};

  div {
    margin-bottom: 1.2rem;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  color: ${props => props.colors.red};
`;

const Subtitle = styled.div`
  font-size: 1.5rem;
  color: ${props => props.colors.red};
`;
