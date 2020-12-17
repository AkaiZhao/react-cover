import React from 'react'
import { Container } from 'components/Layout'
import styled from 'styled-components'

const Highlight = styled.code`
  padding: 1px 2px;
  background-color: #ededed;
`
const Content = styled.div`
  padding-left: 16px;
`

const Documents = () => {
  return (
    <Container id="documents">
      <h2>Documents</h2>
      <Content>
        <h3 id="props">Props</h3>
        <h4>on</h4>
        <Content>
          <p>Toggle cover component opne or close.</p>
          <p>type: <b>Boolean</b></p>
          <p>default: <Highlight>false</Highlight></p>
        </Content>
        <h4>opacity</h4>
        <Content>
          <p>Set opacity when this component active.</p>
          <p>type: <b>Number (css opacity)</b></p>
          <p>default: <Highlight>0.4</Highlight></p>
        </Content>
        <h4>color</h4>
        <Content>
          <p>Change color for loading icon</p>
          <p>type: <b>String (color)</b></p>
          <p>default: <Highlight>#1976d2</Highlight></p>
        </Content>
        <h4>type</h4>
        <Content>
          <p>Change loading icon display type </p>
          <p>type: <b>String</b></p>
          <p>options: blank | balls | bars | bubbles | cubes | cylon | spin | spinningBubbles | spokes</p>
          <p>default: <Highlight>spin</Highlight></p>
        </Content>
        <h4>size</h4>
        <Content>
          <p>Change loading icon display size </p>
          <p>type: <b>String | Number</b></p>
          <p>example: 32 | &apos;32px&apos; | &apos;100vh&apos;</p>
          <p>default: <Highlight>32</Highlight></p>
        </Content>
        <h4>loadingProps</h4>
        <Content>
          <p>Sent props into react-loading component. <a target="_blank" rel="noreferrer" href="https://github.com/fakiolinho/react-loading">link to react-loading</a></p>
          <p>type: <b>react loading props</b></p>
        </Content>
        <h4>coverAdornment</h4>
        <Content>
            <p>This prop will replace loading component to your custom JSX</p>
            <p>type: <b>JSX function</b></p>
        </Content>
      </Content>
    </Container>
  )
}

export default Documents
