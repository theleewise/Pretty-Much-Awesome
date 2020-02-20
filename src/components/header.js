import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import Container from "./container"
import Menu from "./menu"

const HeaderWrapper = styled.header`
  background-color: #111;
  margin-bottom: 0;
  padding-bottom: 3rem;
  padding-top: 3rem;
  color: #fff;
  
  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    margin-left: 1rem;
  }
`;


const ContainerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const Header = ({ siteTitle, menuLinks }) => (
  <HeaderWrapper>
    <Container style={ContainerStyles}>
      <div><Link to="/">{siteTitle}</Link></div>
      <Menu menuLinks={menuLinks} horz></Menu>
    </Container>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
