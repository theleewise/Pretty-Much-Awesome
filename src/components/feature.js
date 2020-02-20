import React from 'react'
import styled from "styled-components"

const FeatureWrapper = styled.div`
    text-align: center;
`

const Feature = (props) => (
    <FeatureWrapper>{ props.children }</FeatureWrapper>
);

export default Feature;