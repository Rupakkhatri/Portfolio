import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkTitle>Contact Information</LinkTitle>
      <LinkList>
      
        <LinkColumn>
        
          
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:650-440-3849">+1(650-440-3849)</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:rupunkkhatri7@gmail.com">
            rkhatri@mail.sfsu.edu
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Striving for Greatness</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Rupakkhatri">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/rupak-khatri-80457815a/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
      <div className="row">
          <p className="col-sm">
            Copyright &copy; {new Date().getFullYear()} Rupak portfolio | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
    </FooterWrapper>
  );
};

export default Footer;
