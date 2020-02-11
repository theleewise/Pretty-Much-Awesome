import React from 'react'
import { Link, StaticQuery, graphql } from "gatsby"
import { Card, CardTitle } from "./card"
import { Row, Col } from "./flex"
import Button from "./button"

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
                    }
                }
            }
        }
    }
`

const Listing = () => (
  <Row gutters>
    <StaticQuery
        query={LISTING_QUERY}
        render={({allMarkdownRemark}) => (
            allMarkdownRemark.edges.map(({node}) => (
                <Col>
                    <Card key={node.frontmatter.slug}>
                        <CardTitle>
                            <Link to={`/posts${node.frontmatter.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </CardTitle>
                        <p>{node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                        <Link to={`/posts${node.frontmatter.slug}`} style={Button}>Read More</Link>
                    </Card>
                </Col>
            ))
        )}
    />
  </Row>
)

export default Listing
