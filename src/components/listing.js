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
                    }
                }
            }
        }
    }
`

const Listing = () => (
  <Row>
    <StaticQuery
        query={LISTING_QUERY}
        render={({allMarkdownRemark}) => (
            allMarkdownRemark.edges.map(({node}) => (
                <Col key={node.frontmatter.slug} md={4}>
                    <Card
                        key={node.frontmatter.slug}
                        link={`/posts${node.frontmatter.slug}`}
                        image={{url:`https://placeimg.com/640/480/any`,alt:``}}
                        title={node.frontmatter.title}
                        meta={node.frontmatter.date}
                    >
                        <p>{node.excerpt}</p>
                    </Card>
                </Col>
            ))
        )}
    />
  </Row>
)

export default Listing
