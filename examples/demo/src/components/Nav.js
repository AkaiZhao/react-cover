import React from 'react'
import LINKS from '../configs/link'
import styled from '../utils/styled'
// import githubIcon from '../assets/github-icon.svg'

const AppNav = styled('nav')`
  position: sticky;
  top: 0;
  z-index:100000;
  padding: 12px 24px;
  background-color: #282c34;
  color: #eee;
`

const Container = styled('div')`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

const Menu = styled('div')`
  display: flex;
  align-items: center;
`

const Title = styled('h2')`
  font-size: 24px;
  margin: 0;
`

const Icon = styled('a')`
  margin-left: 16px;
  svg {
    width: 24px;
    height: 24px;
    fill:#eee;
    transition: opacity .15s;
  }
  &:hover {
    svg {
      opacity: .75
    }
  }
`

const Item = styled('a')`
  text-decoration: none;
  padding: 8px 16px;
  margin: 0 4px;
  font-size: 16px;
  transition: .2s;
  border-radius: 4px;
  color: rgba(255,255,255,.6);
  &:hover {
    color:  rgba(255,255,255,1);
  }

  _SM {
    display: none;
  }
`

const Nav = () => {
  return (
    <AppNav>
      <Container>
        <Title>React Cover</Title>
        <Menu>
          {LINKS.map((link) => <Item key={link.name} href={link.href}>{link.name}</Item>)}
          <Icon target="_blank" rel="noreferrer" href="https://github.com/AkaiZhao/react-cover" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </Icon>
        </Menu>
      </Container>
    </AppNav>
  )
}

export default Nav
