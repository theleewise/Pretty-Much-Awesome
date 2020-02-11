import React, { Fragment } from "react"
// import styled from 'styled-components'
import Img from 'gatsby-image'
import { HeroVideo } from "react-hero-video"
import  { useSpring, animated } from 'react-spring'


const Banner = (props) => {
    const animationStyles = useSpring({
        from: { height: props.path === '/' ? 200 : 400 },
        to: { height: props.path === '/' ? 400 : 200 }
    })
    const video = <HeroVideo
        videoSrc="https://www.youtube.com/embed/W0LHTWG-UmQ?autoplay=1&loop=1&playlist=W0LHTWG-UmQ"
        // videoSubtitle="Instantly make people think you are a 10x coder with this one secret trick!"
        // videoTitle="Easy Hero Video in React"
        />;
    const image =
        <animated.div style={{ overflow: 'hidden', ...animationStyles }}>
            <Img fluid={props.bg} />
        </animated.div>
    ;
    const whichBanner = props.path === `/` ? video : image;
    return (
        <Fragment>
            { whichBanner }
        </Fragment>
    )
}

export default Banner
