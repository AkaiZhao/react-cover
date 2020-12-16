import React from 'react'
import FloatContain from 'components/FloatContain'
import Code from 'components/Code'
import CoverBase from './base'
import styled from 'utils/styled'

const Image = styled('img')`
  width: 250px;
`

const DemoImage = () => {
  const code =
`<Cover on={open} color={color}>
  <img />
</Cover>`
  return (
    <FloatContain p="8px 16px" m="16px 0">
      <CoverBase
        title="Use in Image"
        desc="In image it will waiting until image source onLoad and then compute size."
        Main={<Image src="https://picsum.photos/300/200" />}
      />
      <Code language="jsx">
        {code}
      </Code>
    </FloatContain>
  )
}

export default DemoImage
