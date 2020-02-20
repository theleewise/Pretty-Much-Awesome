import React from 'react'
import styled from 'styled-components'
import Container from "./container"

const SectionWrapper = styled.div`
    margin-bottom: 9rem;
    margin-top: 9rem;
`

const SectionTitle = styled.h2`
    text-align: center;
    line-height: 1em;
    margin: 0 0 3rem 0;
`

const Section = (props) => (
    <SectionWrapper>
        <Container gutter>
            <SectionTitle>{props.title}</SectionTitle>
            {props.children}
        </Container>
    </SectionWrapper>
)

export default Section;