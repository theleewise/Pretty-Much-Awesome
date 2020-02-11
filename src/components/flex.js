import styled from 'styled-components'

const Row = styled.div`
    display: flex;
    justify-content: justify;
    ${({ spaceBetween }) => spaceBetween && `
        justify-content: space-between;
    `}
`
const Col = styled.div`
    flex: ${(props) => props.size };
`

export { Row, Col }