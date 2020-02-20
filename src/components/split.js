import React from 'react'
import PropsTypes from "prop-types"
import styled from 'styled-components'
import Slide from 'react-reveal/Slide';
import Container from './container'

const SplitWrapper = styled.div`
    align-items: stretch;
    background-color: #1c1c1c;
    background: ${props => props.secondary
        ? 'linear-gradient(45deg, #1D3475, #1c1c1c)'
        : ''
    };
    display: flex;
    flex-direction: ${props => props.flip ? 'row-reverse' : 'row'}; 
    
    > * { flex: 1; }
`
    
const SplitImage = styled.div`
    clip-path: polygon(${props => props.flip ? 
        '0 0, 100% 0, 100% 100%, 23% 100%'
        : '0 0, 77% 0, 100% 100%, 0% 100%'
    });

    img {
        height: 100%;
        object-fit: cover;
        width: 100%;
    }
`

const SplitBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    
    p {
        font-size: 2rem;
        line-height: 1.5em;
    }

    > * {
        margin-${props => props.flip ? 'right' : 'left'}: 0;
        padding-${props => props.flip ? 'right' : 'left'}: 60px;
    }
`

const Split = (props) => {
    return (
        <SplitWrapper flip={props.flip} secondary={props.secondary}>
            <SplitImage flip={props.flip}>
                <Slide {...(props.flip ? {left: true} : {right: true})}><img src={props.image} alt="" /></Slide>
            </SplitImage>
            <SplitBody flip={props.flip}>
                <Container gutter half>{props.children}</Container>
            </SplitBody>
        </SplitWrapper>
    )
}

Split.propTypes = {
    image: PropsTypes.string.isRequired,
    flip: PropsTypes.bool,
}

export default Split;