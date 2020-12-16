import React from 'react'
import { Container } from 'components/Layout'
import DemoArticle from './article'
import DemoButton from './button'
import DemoImage from './image'
import DemoMultiChildren from './multiChild'
import DemoCustom from './custom'

const Demos = () => {
  return (
    <Container id="demo">
      <h2>Demos</h2>
      <p>Here is some demo for react-cover.</p>
      <DemoArticle/>
      <DemoButton/>
      <DemoImage/>
      <DemoMultiChildren/>
      <DemoCustom/>
    </Container>
  )
}

export default Demos
