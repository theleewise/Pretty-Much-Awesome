import React from 'react'
import styled from 'styled-components'
import Container from "./container"

const SectionWrapper = styled.div`
    ${props => props.fill ? `text-align: center;` : ``}
    ${props => props.fill ? `
        background-color: #243a3e;
        padding-bottom: 9rem;
        padding-top: 9rem;
    ` : `
        margin-bottom: 9rem;
        margin-top: 9rem;
    `}
`

const SectionTitle = styled.h2`
    font-size: 3.3rem;
    font-weight: 300;
    text-align: center;
    line-height: 1em;
    margin: 0 0 6rem 0;
    text-transform: uppercase;
    letter-spacing: 0.25em;
`

const Section = ({fill,center,title,children}) => (
    <SectionWrapper fill={fill} center={center}>
        <Container gutter>
            <SectionTitle>{title}</SectionTitle>
            {children}
        </Container>
    </SectionWrapper>
)

export default Section;