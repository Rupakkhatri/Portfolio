import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have created multiple project in the web development field. 
      From Back-end To Design.
      Moreover, I also have 
      good knowledge about core language like Java, python.
      
      
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML5 <br />
            CSS | SASS <br/>
            JavaScript <br/>
            React | Redux
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" /> 
        </picture>
        <ListContainer>
          <ListTitle>Server</ListTitle>
          <ListParagraph>
            NodeJS <br />
            Express <br />
            Java 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            mySQL <br />
            MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <picture>
          <DiZend size="3rem" /> 
        </picture>
        <ListContainer>
          <ListTitle>Deployment</ListTitle>
          <ListParagraph>
            AWS ECS | SQS<br />
            Firebase <br />
            Git
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
