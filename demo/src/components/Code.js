import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import style from 'react-syntax-highlighter/dist/esm/styles/prism/material-dark'

const Code = ({ language, children }) => (
  <SyntaxHighlighter language={language} style={style} customStyle={{ borderRadius: 12 }}>
    {children}
  </SyntaxHighlighter>
)

export default Code
