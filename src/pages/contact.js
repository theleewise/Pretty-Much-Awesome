import React from 'react'

import Layout from '../components/layout';

const About = (location) => (
    <Layout location={location}>
            <div>
                <h1>Contact Us</h1>
                <p>Do cupidatat officia do voluptate nostrud nisi. Reprehenderit amet aute sint consectetur qui aliqua occaecat culpa duis Lorem. Reprehenderit quis sint nostrud nostrud. Dolor quis tempor eiusmod in minim laborum sint elit enim et commodo nulla cupidatat fugiat.</p>
            </div>
            <form name="contact" method="POST" data-netlify="true" action="/contact/success">
                <label>Name: <input type="text" name="name" placeholder="Name" /></label>
                <label>Email: <input type="email" name="email" placeholder="Email" /></label>
                <label>Message: <textarea name="message">Message</textarea></label>
                <button type="submit">Send</button>
            </form>
    </Layout>
)

export default About