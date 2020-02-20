import React from 'react'
import styled from 'styled-components'

const TitleWrapper = styled.h1`
    color: #fff;
    font-size: 50px;
    line-height: 1.1em;
    text-transform: uppercase;

    span {
        display: inline-block;
        padding: 0.25em;
        position: relative;
        
        &:before {
            background-color: #78c777;
            content: '';
            display: block;
            height: 50%;
            left: 0;
            position: absolute;
            top: 50%;
            width: 100%;
            z-index: -1;
        }
    }
`

export default function PageTitle({children}) {
    return (
        <TitleWrapper><span>{children}</span></TitleWrapper>
    )
}
