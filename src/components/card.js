import styled from "styled-components"

const Card = styled.article `
    box-shadow: 0px 3px 10px rgba(25, 27, 34, 0.05);
    padding: 1.5rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    a {
        color: inherit;
        text-decoration: none;
    }
    p {
        font-size: 0.8rem;
    }
`

const CardTitle = styled.h2 `
    margin: 0;
`

export {
    Card,
    CardTitle
}