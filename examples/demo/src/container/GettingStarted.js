import React from 'react'
import { Container } from 'components/Layout'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import styled from 'styled-components'

const Code = styled.code`
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
        ,
        {' '}
        to made loading style.
      </p>
      <p>You can alse custom your loading style or any content by yourself.</p>
      <h3>Installation</h3>
      <p>Install in your <Code>package.json</Code> dependencies: </p>
      <SyntaxHighlighter style={darcula}>
        {`npm install react-cover

yarn add react-cover`}
      </SyntaxHighlighter>
    </Container>
  )
}

export default GettingStarted
