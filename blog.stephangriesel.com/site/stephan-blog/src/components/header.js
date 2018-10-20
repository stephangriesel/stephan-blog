import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
import logo from '../images/logo.png';

const HeaderWrapper = styled.div`
background: #FFFFFF;
margin-bottom: 1.45rem;
h1 {
  img {
    height:100px;
  }
}
`;
const HeaderContainer = styled.div`
margin: 0 auto;
max-width: 960px;
padding: 1.45rem 1.0875rem;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#000000',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="Stephan Logo" />{siteTitle}
        </Link>
      </h1>
    </HeaderContainer>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  </HeaderWrapper>
)

export default Header
