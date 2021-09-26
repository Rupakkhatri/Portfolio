import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        The purpose of this portfolio is to showcase the project and accomplishment I have acheived.
        </SectionText>
        {/*<Button onClick={()=> window.location ='/public/images/resume.png'}>Learn More</Button>*/}
        <a hre></a>

      </LeftSection> 
    </Section>
  </>
);

export default Hero;