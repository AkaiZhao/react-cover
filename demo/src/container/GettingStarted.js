import React from 'react'
import { Container } from 'components/Layout'
import styled from 'styled-components'
import FloatContain from 'components/FloatContain'
import Code from 'components/Code'

const Highlight = styled.code`
  padding: 1px 2px;
  background-color: #ededed;
`

const GettingStarted = () => {
  return (
    <Container id="getting-started">
      <h2>Getting Started</h2>
      <h3>Welcome</h3>
      <p>A simple component for React !</p>
      <p>
        This component is using
        {' '}
        <a target="_blank" rel="noreferrer" href="https://github.com/fakiolinho/react-loading">
          react-loading
        </a>
        {', '}
        to implementation loading style.
      </p>
      <p>You can also custom your cover style by yourself!</p>
      <h3 id="installation">Installation</h3>
      <p>Install in your <Highlight>package.json</Highlight> dependencies: </p>
      <FloatContain>
        <Code>
          {'npm install react-cover\n\nyarn add react-cover'}
        </Code>
      </FloatContain>
      <h3 id="basic-usage">Basic Usage</h3>
      <p>This is the basic way to use <Highlight>react-cover</Highlight>.</p>
      <p>Import <Highlight>react-cover</Highlight> and set prop <Highlight>on</Highlight>.</p>
      <FloatContain>
        <Code language="jsx">
          {`import Cover from 'react-cover'

const Component = () => (
  <Cover on>
    {content}
  </Cover>
)`}
        </Code>
      </FloatContain>
    </Container>
  )
}

export default GettingStarted
