import React from 'react'
import { Container } from 'components/Layout'
import { Font } from 'components/Font'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism'

const Code = `
  const a = '123'
`
const Demo = () => {
  return (
    <Container id="demo">
      <h2>Demo</h2>
      <p>Coming Soon ...</p>
    </Container>
  )
}

export default Demo
