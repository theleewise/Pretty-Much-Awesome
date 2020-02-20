import React from 'react'
import SEO from "../components/seo"
import styled from 'styled-components'
import Layout from '../components/layout';
import Container from "../components/container"
import Archive from "../components/archive"
import PageTitle from '../components/pageTitle'

const metaTitle = "Bloop";
const metaDescription = "Bloop adoop";

const ContentLayout = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 40px;
`

const About = (location) => (
    <Layout location={location}>
        <SEO title={metaTitle} description={metaDescription} />
        <Container>
            <ContentLayout>
                <div>
                    <PageTitle>About Us</PageTitle>
                    <p>Do cupidatat officia do voluptate nostrud nisi. Reprehenderit amet aute sint consectetur qui aliqua occaecat culpa duis Lorem. Reprehenderit quis sint nostrud nostrud. Dolor quis tempor eiusmod in minim laborum sint elit enim et commodo nulla cupidatat fugiat.</p>
                </div>
                <aside>
                    <Archive />
                </aside>
            </ContentLayout>
        </Container>
    </Layout>
)

export default About