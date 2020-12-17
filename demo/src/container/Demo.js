import React, { useState } from 'react'
import { Container } from 'components/Layout'
import Cover from 'react-cover'
import styled from 'utils/styled'
import FloatContain from 'components/FloatContain'
import { Colorpicker, Radios, TextField } from 'components/Input'
import Code from 'components/Code'

const DemoContainer = styled('div')`
  display: flex;
`

const Result = styled('div')`
  flex: 1;
  padding: 16px;
  margin-right: 16px;
  display: flex;
  align-items: center;
`

const Setting = styled('div')`
  padding: 16px;
`

const CoverBase = ({ title, desc, Settings = () => {}, Main = () => {} }) => {
  const [open, setOpen] = useState(true)
  const [highlight, setHighlight] = useState(false)
  const [color, setColor] = useState('#1976d2')
  const [size, setSize] = useState(32)
  return (
    <>
      <h4>{title}</h4>
      <p>{desc}</p>
      <DemoContainer>
        <Result>
          <Cover on={open} color={color} size={Number(size) || size}>
            {Main({ highlight })}
          </Cover>
        </Result>
        <Setting>
          <Radios label="open" checked={open} onChange={(e) => setOpen(e.target.checked)} />
          <Radios label="highlight" checked={highlight} onChange={(e) => setHighlight(e.target.checked)} />
          <Colorpicker label={`color (${color})`} value={color} onChange={(e) => setColor(e.target.value)} />
          <TextField label="size" value={size} onChange={e => setSize(e.target.value)} />
          {Settings({})}
        </Setting>
      </DemoContainer>
    </>
  )
}

const articleCode =
`<Cover on={open} color={color}>
  <span>
    Lorem ...
  </span>
</Cover>`

const DemoArticle = () => {
  return (
  <FloatContain p="8px 16px" m="32px 0">
    <CoverBase
      title="Use in article"
      Main={props =>
        <span style={{ backgroundColor: props.highlight ? '#1976d266' : '' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </span>
      }
    />
    <Code language="jsx">
      {articleCode}
    </Code>
  </FloatContain>
  )
}

const Button = styled('button')`
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
  return (
    <FloatContain p="8px 16px" m="16px 0">
      <CoverBase
        title="Use in Button"
        Main={(props) =>
          <Button style={{ backgroundColor: props.highlight ? '#1976d266' : '' }}>This is a button. Click me.</Button>
        }
      />
    </FloatContain>
  )
}

const Demos = () => {
  return (
    <Container id="demo">
      <h2>Demos</h2>
      <p>Here is some demo for react-cover.</p>
      <DemoArticle/>
      <DemoButton/>
    </Container>
  )
}

export default Demos
