import React from 'react'
import Banner from './components/Banner'
import Demo from './components/Demo'
import Nav from './components/Nav'

import styled from './utils/styled'
import media from './utils/media'
import Menu from './components/Menu'

const Container = styled('div')`
  padding: 24px;
  display: flex;
  max-width: ${media.lg}px;
  margin: 0 auto;
  ${true}
`

const App = () => {
  return (
    <div>
      <Nav/>
      <Banner/>
      <Container>
        <Menu/>
        <Demo/>
      </Container>
    </div>
  )
}

export default App
