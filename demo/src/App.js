import React from 'react'

import Banner from 'components/Banner'
import Nav from 'components/Nav'

import Demo from 'container/Demo'
import Installation from 'container/GettingStarted'

import styled from 'utils/styled'
import media from 'utils/media'
import Menu from 'components/Menu'
import Documents from 'container/Document'

const Container = styled('div')`
  padding-top: 36px;
  display: flex;
  max-width: ${media.lg}px;
  margin: 0 ${'auto'};
`
const Main = styled('main')`
  padding-top: 16px;
  width: 75%;
  _MD {
    width: 100%;
  }
`

const App = () => {
  return (
    <div>
      <Nav/>
      <Banner/>
      <Container>
        <Main>
          <Installation/>
          <Demo/>
          <Documents/>
        </Main>
        <Menu/>
      </Container>
    </div>
  )
}

export default App
