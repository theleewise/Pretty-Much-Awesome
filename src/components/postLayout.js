import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'
import Container from './container'
import PageTitle from './pageTitle'

export default class postLayout extends Component {
    render() {
        const { markdownRemark } = this.props.data;
        const { location } = this.props;
        return (
            <Layout location={location}>
                <Container>
                    <PageTitle>{ markdownRemark.frontmatter.title }</PageTitle>
                    <p>{ markdownRemark.frontmatter.subheading }</p>
                    <p>{ markdownRemark.frontmatter.date }</p>
                    <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
                </Container>
            </Layout>
        )
    }
}

export const query = graphql`
    query PostQuery($slug: String!) {
        markdownRemark(frontmatter: {
            slug: {
               eq: $slug
            }
        }) {
            html
            frontmatter {
                title
                subheading
                date
                slug
            }
        }
    }
`