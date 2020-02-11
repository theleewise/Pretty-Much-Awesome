 /**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Container from "./container"
import Banner from "./banner"
import Header from "./header"
import Archive from "./archive"
import Footer from "./footer"
import 'normalize.css';
import "./layout.css"

const Layout = ({ children, location  }) => {
  
  const MainLayout = styled.main`
    margin: 1rem auto;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 40px;
  `

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: {   
        regex: "/bg/"
      }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Banner bg={ data.file.childImageSharp.fluid } path={ location.pathname }/>
      <Container>
        <MainLayout>
          <div>
            {children}
          </div>
          <Archive />
        </MainLayout>
      </Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
Layout.defaultProps = {
  location: {},
}

export default Layout
