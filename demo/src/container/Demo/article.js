import React from 'react'
import FloatContain from 'components/FloatContain'
import Code from 'components/Code'
import CoverBase from './base'

const DemoArticle = () => {
  const code =
`<Cover on={open}>
  <span>
    Lorem ...
  </span>
</Cover>`
  return (
  <FloatContain p="8px 16px" m="32px 0">
    <CoverBase
      title="Use in article"
      Main={
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </span>
      }
    />
    <Code language="jsx">
      {code}
    </Code>
  </FloatContain>
  )
}

export default DemoArticle
