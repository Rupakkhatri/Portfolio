import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { college: 'San Francisco State University', text: 'Bachelor in Computer Science', grad:'From: Jan 2019- Dec 2021'},
  { college: 'Skyline College', text: 'Associate Degree in Computer Science', grad:'Aug 2016-May 2019'},
  
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Education</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.college}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
          <BoxText>{card.grad}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
