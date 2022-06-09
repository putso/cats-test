import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';
const StyledHeader = styled.div`
display: flex;
gap: 10px;
background: #2196F3;
height: 64px;
color: rgba(255, 255, 255, 0.7);

`;
const HeaderItem = styled.div `

display: flex;
justify-content: center;
align-items: center;
&:hover {
    background: #1E88E5;
    color: white;
}    
`;
const Header = () => {
  return (
      <>
      <StyledHeader>
          <HeaderItem><Link href="/"><a >Все котики</a></Link></HeaderItem>
          <HeaderItem><Link href="/followCats"><a >Любимые котики</a></Link></HeaderItem>
      </StyledHeader>
      </>
  )
}

export default Header