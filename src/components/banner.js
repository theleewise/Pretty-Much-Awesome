import React, { Fragment } from "react"
// import styled from 'styled-components'
import Img from 'gatsby-image'
// import { HeroVideo } from "react-hero-video"
import  { useSpring, animated } from 'react-spring'
import BannerVideo from '../components/bannerVideo'


const Banner = (props) => {
    const animationStyles = useSpring({
        from: { height: props.path === '/' ? 200 : 400 },
        to: { height: props.path === '/' ? 400 : 200 }
    })
    const video =
        <BannerVideo pretext={"We Create More Than Websites"} title={"We Create Solutions"} src={"https://www.youtube.com/embed/W0LHTWG-UmQ?autoplay=1&amp;loop=1&amp;playlist=W0LHTWG-UmQ"}></BannerVideo>
    ;
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
