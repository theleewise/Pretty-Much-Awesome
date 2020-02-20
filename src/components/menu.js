import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"

const MenuWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: ${props => props.horz ? 'flex' : 'block'}; 
`
const MenuItem = styled.li`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const Menu = ({ menuLinks, horz }) => (
    <MenuWrapper horz={horz}>
    { menuLinks.map(( { name, link } ) => (
        <MenuItem key={link}>
        <Link
            to={link}
            activeStyle={{color:'#78c777'}}
        >
            {name}
            {horz}
        </Link>
        </MenuItem>
    ))}
    </MenuWrapper>
)

Menu.propTypes = {
  children: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  })
}

export default Menu