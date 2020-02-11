import React from 'react'
import styled from "styled-components"
import Container from './container'
import { Row, Col } from './flex'

export default function Footer() {
    const Footer = styled.footer`
        padding: 1rem 0;
        font-size: 1rem;
        line-height: 1em;
    `
    return (
        <Footer>
            <Container>
                <Row spaceBetween>
                    <Col>&copy; {new Date().getFullYear()},</Col>
                    <Col>Built with <a href="https://www.gatsbyjs.org">Gatsby</a></Col>
                </Row>
            </Container>
        </Footer>
    )
}
