import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../colors';
import { Page } from '../page';

export const About = (props: { colors: Object }) => (
  <Page>
    <Bio colors={props.colors}>
      <Title colors={props.colors}>About Amanda</Title>
      <div>
        I am a PhD student in linguistics at{' '}
        <a
          className="reverse"
          href="https://www.mcgill.ca/linguistics/"
          target="_blank"
        >
          McGill University
        </a>{' '}
        , and a former software engineer. I'm interested in how humans learn
        phonological patterns, and how these patterns are represented in the
        brain. My name is pronounced [əˈmændə duˈsɛt] and my pronouns are
        they/them.
      </div>
      <Subtitle colors={props.colors}>Publication</Subtitle>
      <div>
        <a
          className="reverse"
          href="https://www.aclweb.org/anthology/W17-0705/"
          target="_blank"
        >
          <b>
            Inherent Biases of Recurrent Neural Networks for Phonological
            Assimilation and Dissimilation
          </b>
          .
        </a>
        <br />
        Amanda Doucette.
        <br />
        <i>
          Proceedings of the 7th Workshop on Cognitive Modeling and
          Computational Linguistics
        </i>
        , 35–40, <b>2017</b>.
      </div>
      <Subtitle colors={props.colors}>Presentations</Subtitle>
      <div>
        <a
          className="reverse"
          href="ADoucette_LabPhon_Presentation_v2.pdf"
          target="_blank"
        >
          <b>
            Identity, similarity, and the OCP: A model of co-occurrence in 107
            languages
          </b>
          .
        </a>
        <br />
        Amanda Doucette, Morgan Sonderegger, Timothy J. O'Donnell, and Heather
        Goad.
        <br />
        <i>LabPhon 18.</i> <b>June 25, 2020</b>.
        <a
          className="reverse"
          href="https://github.com/amnda-d/co-ocurrence-harmony"
          target="_blank"
        >
          {' '}
          [code]
        </a>
      </div>
      <div>
        <a className="reverse" href="2019_ML_and_AI.pdf" target="_blank">
          <b>Introduction to AI and Machine Learning</b>.
        </a>
        <br />
        Amanda Doucette.
        <br />
        <i>Soho House Ludlow Tech Club</i>. New York, NY. <b>May 14, 2019</b>.
        <br />
        <i>Originate</i> (for visiting students from Osaka College of Design and
        IT). Los Angeles, CA. <b>November 15, 2019</b>
      </div>
    </Bio>
  </Page>
);

const Bio = styled.div`
  margin: 40px auto;
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
