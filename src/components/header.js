import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import Container from "./container"

const HeaderWrapper = styled.header`
  background-color: #524763;
  margin-bottom: 0;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  color: #fff;
  h1 {
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Container>
      <h1><Link to="/">{siteTitle}</Link></h1>
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
