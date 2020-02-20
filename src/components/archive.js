import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Menu from '../components/menu'

const POST_ARCHIVE_QUERY = graphql`
    query BlogPostArchive {
        allMarkdownRemark(limit:5, sort: {
            order: DESC
            fields:[frontmatter___date]
        }) {
            edges {
                node {
                    frontmatter {
                        name: title
                        link: slug
                    }
                }
            }
        }
    }
`

const Archive = () => {
  const { edges } = useStaticQuery(POST_ARCHIVE_QUERY).allMarkdownRemark;
  const items = edges.map(item => { return {name: item.node.frontmatter.name, link: `/posts${item.node.frontmatter.link}`}});
  return (
      <Fragment>
        <h3>Archive</h3>
        <Menu menuLinks={items} />
      </Fragment>
  )
}

export default Archive
