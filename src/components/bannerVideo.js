import React from "react"
import styled from 'styled-components'

const VideoWrapper = styled.div `
    background-color: #000;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    max-height: 70rem;
    position: relative;
    overflow: hidden;
    text-align: center;
    text-transform: uppercase;
    
    &:before {
        content: '';
        display: block;
        padding-top: 56%;
    }

    video {
        sdisplay: block;
        position: absolute;
        z-index: 0;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        min-width: 100%;
        min-height: 100%;
        width: auto !important;
        height: auto !important;
    }
`

const Content = styled.div `
    left: 0;
    position: absolute;
    top: 33%;
    width: 100%;
`

const PreText = styled.div `
    text-align: center;
    font-size: 50px;
    line-height: 1em;
    margin-bottom: 2em;
`

const BannerTitle = styled.div `
    
    span {
        background-color: #78c777;
        display: inline-block;
        padding: 0.25em;
        line-height: 1em;
    }
    span:first-child {
        font-size: 50px;
        margin-right: -10%;
        position: relative;
        top: -1em;
        vertical-align: top;
    }
    span:last-child {
        font-size: 75px;
    }
`

const BannerVideo = (props) => {
    const titleWords = props.title.split(` `);
    const lastWord = titleWords.pop();
    const otherWords = titleWords.join(` `);

    return (
        <VideoWrapper>
            <video muted loop autoPlay>
                <source src={props.src} type="video/mp4" />
            </video>
            <Content>
                <PreText>{ props.pretext }</PreText>
                <BannerTitle><span>{ otherWords }</span>
                    <span>{ lastWord }</span>
                </BannerTitle>
            </Content>
        </VideoWrapper>
    )
}

export default BannerVideo