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
        <h3 id="with-react-loading">With React Loading</h3>
        <h3 id="custom">Custom</h3>
        <h3 id="props">Props</h3>
        <h4>on</h4>
        <Content>
          <p>Toggle cover component opne or close.</p>
          <p>type: Boolean</p>
          <p>default: <Highlight>false</Highlight></p>
        </Content>
        <h4>opacity</h4>
        <Content>
          <p>Set opacity when this component active.</p>
          <p>type: Number (css opacity)</p>
          <p>default: <Highlight>0.4</Highlight></p>
        </Content>
        <h4>color</h4>
        <Content>
          <p>Change color for loading icon</p>
          <p>type: String (color)</p>
          <p>default: <Highlight>#1976d2</Highlight></p>
        </Content>
        <h4>type</h4>
        <Content>
          <p>Change loading icon display type </p>
          <p>type: String</p>
          <p>options: blank | balls | bars | bubbles | cubes | cylon | spin | spinningBubbles | spokes</p>
          <p>default: <Highlight>spin</Highlight></p>
        </Content>
        <h4>size</h4>
        <h4>loadingProps</h4>
        <h4>coverAdornment</h4>
      </Content>
    </Container>
  )
}

export default Documents
