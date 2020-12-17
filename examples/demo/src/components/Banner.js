import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import Cover from 'react-cover'

import styled from '../utils/styled'
import media from '../utils/media'

const AppBanner = styled('header')`
  background-color: #282c34;
  color: #eee;
  padding: 132px 0;
  text-align: center;
  box-shadow: 0 -2px 4px 4px #282c34; 

  _MD {
    padding: 120px 0;
  }
`

const Logo = styled('div')`
  width: 300px;
  height: 250px;
  display: flex;
  align-items: center;
  margin: auto;
  margin-bottom: 16px;

  _MD {
    width: 60vw;
    height: 60vw;
  }
`

const LogoImg = styled('img')`
  width: 100%;
  height: 100%;
`

const Title = styled('h1')`
  font-size: 36px;
  margin: 0;
  padding-top: 16px;
`

const SubTitle = styled('h1')`
  font-size: 24px;
  margin: 0;
  padding-top: 4px;
`

const Shields = styled('div')`
  padding-top: 24px;

  _MD {
    display: none;
  }
`

const Shield = styled('img')`
  margin: 0 4px;
`

const Banner = () => {
  const [size, setSize] = useState(68)
  useEffect(() => {
    const changeCoverSize = () => {
      setSize(document.body.clientWidth > media.md ? 68 : 72)
    }
    changeCoverSize()
    window.addEventListener('resize', changeCoverSize)
    return () => window.removeEventListener('resize', changeCoverSize)
  })
  return (
    <AppBanner>
      <Logo>
      <Cover on color="#61dafb" size={size}>
        <LogoImg src={logo} alt="logo" />
      </Cover>
      </Logo>
      <Title>REACT COVER</Title>
      <SubTitle>Easy to show loading status.</SubTitle>
      <Shields>
        <Shield src="https://img.shields.io/npm/dw/react-cover" alt="logo" />
        <a target="_blank" rel="noreferrer" href="https://www.npmjs.com/package/react-cover" >
          <Shield alt="NPM" src="https://img.shields.io/npm/v/react-cover"/>
        </a>
        <a target="_blank" rel="noreferrer" href="https://reactjs.org/" >
          <Shield alt="npm peer dependency version" src="https://img.shields.io/npm/dependency-version/react-cover/peer/react"/>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/fakiolinho/react-loading" >
          <Shield alt="npm peer dependency version" src="https://img.shields.io/npm/dependency-version/react-cover/peer/react-loading"/>
        </a>
        <Shield src="https://img.shields.io/bundlephobia/minzip/react-cover" alt="logo" />

      </Shields>
    </AppBanner>
  )
}

export default Banner
