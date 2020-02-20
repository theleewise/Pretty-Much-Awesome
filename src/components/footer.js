import React from 'react'
import styled from "styled-components"
import Container from './container'
import { Row, Col } from "react-flexbox-grid"
import { SocialIcon } from "react-social-icons";

const Footer = () => {

    const Footer = styled.footer`
        background-color: #111;
        padding: 2rem 0;
        font-size: 1.4rem;
        line-height: 1em;
    `
    
    const sociallinks = [
        { key: 'fb', url: "https://facebook.com/#", },
        { key: 'tw', url: "https://twitter.com/#", },
        { key: 'li', url: "https://linkedin.com/#", },
        { key: 'yt', url: "https://youtube.com/#", },
        { key: 'in', url: "https://instagram.com/#", },
    ]

    return (
      <Footer>
        <Container>
          <Row between="sm" middle="sm">
            <Col>&copy; {new Date().getFullYear()}</Col>
            <Col>
              {sociallinks.map( item => (
                <SocialIcon key={item.key} url={item.url} bgColor="#78c777" target="_blank" style={{ height: '2em', width: '2em' }}/>
              ))}
            </Col>
          </Row>
        </Container>
      </Footer>
    );
}

export default Footer;