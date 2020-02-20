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
import Banner from "./banner"
import Header from "./header"
import Footer from "./footer"
import 'normalize.css';
import "./layout.css"

const Layout = ({ children, location  }) => {
  
  const MainLayout = styled.main`
    // margin: 6rem auto;
  `

  const SiteWrapper = styled.div`
  `

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
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
    <SiteWrapper>
      <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks } />
      <Banner bg={ data.file.childImageSharp.fluid } path={ location.pathname }/>
      <MainLayout>
          {children}
      </MainLayout>
      <Footer />
    </SiteWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
Layout.defaultProps = {
  location: {},
}

export default Layout
