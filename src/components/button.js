import React from "react"
import { Link } from 'gatsby';
import PropsTypes from "prop-types"
import styled from "styled-components"


const StyledLink = styled(props => <Link {...props} />)`
    background-color: ${props => props.primary ? '#78c777' : 'rgba(255,255,255,0.1)'};
    border-radius: 1em;
    color: ${props => props.primary ? '#073c06' : '#78c777'};
    display: inline-block;
    font-weight: 700;
    line-height: 1em;
    margin: 0 0.5em;
    padding: 0.5em 1em;
    text-decoration: none;

    &:first-child { margin-left: 0; }
    &:last-child { margin-right: 0; }
`;

const Button = (props) => (
    <StyledLink to={props.to} primary={props.primary}>{props.children}</StyledLink>
)

Button.propTypes = {
    to: PropsTypes.string.isRequired,
    primary: PropsTypes.bool
}

export default Button 