import React from "react"
import { Link } from "gatsby"
import PropsTypes from "prop-types"
import styled from "styled-components"
import Button from "./button"

const CardWrapper = styled.article `
    background-color: #2a2a2a;
    box-shadow: 0px 3px 10px rgba(0,0,0, 0.25);
    border-radius: 4px;
    margin-bottom: 1rem;
    overflow: hidden;
`

const CardBody = styled.div `
    line-height: 1.5em;
    padding: 3rem;
`

const CardImage = styled.div `
    background-color: #eee;
    font-size: 0;
    line-height: 0;
    min-height: 100px;
`

const CardTitle = styled.h2 `
    margin: 0 0 1em 0;
    line-height: 1em;
    position: relative;

    a {
        color: inherit;
        text-decoration: none;
    } 

    &::after {
        border-bottom: solid 5px #111;
        content: '';
        display: block;
        margin-top: 0.5em;
        max-width: 100px;
        width: 100%:
    }
`

const CardMeta = styled.p`
    color: #999;
    font-size: 0.85em;
    letter-spacing: 0.1em;
    line-height: 1em;
    text-transform: uppercase;
`
const CardActions = styled.div `
    font-size: 1.1em;
    padding: 0 3rem 3rem;
`

const Card = (props) => (
    <CardWrapper>
        { props.image && 
            <CardImage>
                <img src={props.image.url} alt={props.image.alt} />
            </CardImage>
        }
        <CardBody>
            <CardTitle>
                { props.link &&
                    <Link to={props.link}>{props.title}</Link>
                }
            </CardTitle>
            <CardMeta>{props.meta}</CardMeta>
            {props.children}
        </CardBody>
        { props.link &&
            <CardActions>
                <Button to={props.link} primary>{props.linkText}</Button>
            </CardActions>
        }
    </CardWrapper>
)

Card.propTypes = {
    image: PropsTypes.shape({
        url: PropsTypes.string.isRequired,
        alt: PropsTypes.string.isRequired,
    }),
    meta: PropsTypes.string,
    link: PropsTypes.string,
    linkText: PropsTypes.string,
}

Card.defaultProps = {
  linkText: `Read More`,
}

export default Card