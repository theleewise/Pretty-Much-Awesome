import React from "react"
import Layout from "../components/layout"
import { Row, Col } from "react-flexbox-grid"
import Section from "../components/section"
import Container from "../components/container"
import SEO from "../components/seo"
import Split from '../components/split'
import Listing from '../components/listing'
import Button from "../components/button"
import Feature from "../components/feature"
import Fade from 'react-reveal/Fade';

const features = [
  {
    icon: 'https://img.icons8.com/bubbles/100/000000/image.png',
    title: 'Aute commodo occaecat proident tempor id et cillum',
    body: 'Duis laboris exercitation voluptate dolor minim laboris magna consequat qui reprehenderit nulla sint. Duis tempor ea excepteur dolore commodo eiusmod consequat est reprehenderit elit. Eu id proident est cupidatat culpa amet eu aute in. Voluptate laboris nisi eu quis.',
    link: {url: '/', text: 'Lorem Ipsum'},
  },
  {
    icon: 'https://img.icons8.com/clouds/100/000000/image.png',
    title: 'Nisi ipsum labore proident veniam ut occaecat',
    body: 'Amet occaecat tempor magna ex ullamco ut occaecat velit sit. Sint labore aute eu mollit ea magna. Laboris consectetur do incididunt aliqua minim amet magna cupidatat eu consectetur. Qui consequat consectetur et non anim amet nulla cillum.',
    link: {url: '/', text: 'Lorem Ipsum'},
  },
  {
    icon: 'https://img.icons8.com/bubbles/100/000000/lady-window-image.png',
    title: 'Laborum pariatur ipsum sit est sit',
    body: 'Amet occaecat tempor magna ex ullamco ut occaecat velit sit. Sint labore aute eu mollit ea magna. Laboris consectetur do incididunt aliqua minim amet magna cupidatat eu consectetur. Qui consequat consectetur et non anim amet nulla cillum.',
    link: {url: '/', text: 'Lorem Ipsum'},
  },
]

const IndexPage = ({location}) => (
  <Layout location = {location} >
    <SEO title = "Home" />

    <Section>
      <Row around="xs">
        {features.map(({title,icon,body,link}, i) => (
        <Col sm={6} md={4} lg={3} key={`feature-col-${i}`}>
            <Fade bottom delay={i*300}>
              <Feature>
                <img src={icon} alt="" />
                <h2>{title}</h2>
                <p>{body}</p>
                <p><Button to={link.url}>{link.text}</Button></p>
              </Feature>
            </Fade>
          </Col>
        ))}
      </Row>
    </Section>
    
    <Split image="https://placeimg.com/750/500/any">
      <h2>Ullamco nostrud laboris tempor est.</h2>
      <p>Fugiat est aute aliquip occaecat cupidatat. Consectetur quis et eu minim eiusmod ullamco occaecat aliqua fugiat in nisi. Excepteur ullamco labore ad nulla incididunt id elit officia sit tempor laborum cillum do. Irure aute eu labore quis id quis consequat labore quis ad.</p>
      <p>
        <Button to={'/'} primary>Lorem Ipsum</Button>
        <Button to={'/'}>Lorem Ipsum</Button>
      </p>
    </Split>

    <Split flip secondary image="https://placeimg.com/750/500/any">
      <h2>Qui sunt ut sunt ad dolor qui labore.</h2>
      <p>Ut dolor ut et cupidatat. Excepteur voluptate tempor tempor est. Laboris consectetur adipisicing incididunt commodo minim ipsum tempor.</p>
      <p>
        <Button to={'/'} primary>Lorem Ipsum</Button>
        <Button to={'/'}>Lorem Ipsum</Button>
      </p>
    </Split>

    <Section title={'Latest Posts'}>
      <Listing />
    </Section>

    <Section title={'Hey Hey'} fill center>
      <Container half>
        <p>Est elit quis ullamco enim nostrud deserunt anim culpa. Aute qui commodo exercitation proident voluptate occaecat irure laboris incididunt fugiat elit minim. Cupidatat duis anim duis ut amet Lorem ad veniam do est.</p>
        <p><Button to={'/'} primary size={'lg'}>Hey</Button></p>
      </Container>
    </Section>

  </Layout>
)

export default IndexPage