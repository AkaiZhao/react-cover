import React from 'react'
import FloatContain from 'components/FloatContain'
import Code from 'components/Code'
import CoverBase from './base'
import styled from 'utils/styled'

export const Button = styled('button')`
  background-color: #8c8c8c;
  color: #eee;
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 8px 20px;
  font-size: 16px;
  cursor: pointer;
  &:active {
    background: #8c8c8ca4;
  }
`

const DemoButton = () => {
  const code =
`<Cover on={open} color={color}>
  <button>This is a button. Click me.</button>
</Cover>`
  return (
    <FloatContain p="8px 16px" m="16px 0">
      <CoverBase
        title="Use in Button"
        Main={<Button>This is a button. Click me.</Button>}
      />
      <Code language="jsx">
        {code}
      </Code>
    </FloatContain>
  )
}

export default DemoButton
