import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { Row, Col } from "react-flexbox-grid"
import Card from "./card"

const LISTING_QUERY = graphql`
  query BlogPostListing {
        allMarkdownRemark(limit:10, sort: {
            order: DESC
            fields:[frontmatter___date]
        }) {
            edges {
                node {
                    excerpt
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        slug
                        description
                        featuredImage {
                            childImageSharp {
                                fluid(maxHeight: 200, maxWidth: 400, fit: COVER) {
                                    ...GatsbyImageSharpFluid_tracedSVG
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

const Listing = () => (
  <Row center="sm">
    <StaticQuery
        query={LISTING_QUERY}
        render={({allMarkdownRemark}) => (
            allMarkdownRemark.edges.map(({node}) => (
                <Col key={node.frontmatter.slug} md={4}>
                    <Card
                        key={node.frontmatter.slug}
                        link={`/posts${node.frontmatter.slug}`}
                        image={node.frontmatter.featuredImage.childImageSharp.fluid}
                        title={node.frontmatter.title}
                        meta={node.frontmatter.date}
                    >
                        <p>{node.frontmatter.description}</p>
                    </Card>
                </Col>
            ))
        )}
    />
  </Row>
)

export default Listing
