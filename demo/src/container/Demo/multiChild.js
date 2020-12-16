import React from 'react'
import FloatContain from 'components/FloatContain'
import Code from 'components/Code'
import CoverBase from './base'
import { Button } from './button'

const DemoMultiChildren = () => {
  const code =
`<Cover on={open} color={color}>
  <Item1/>
  <Item2/>
  <Item3/>
  ...
</Cover>`
  return (
    <FloatContain p="8px 16px" m="16px 0">
      <CoverBase
        title="Use in Multi Children"
        desc="This component will computed children's size, make sure that loading icon fixed in center."
        Main={
          <>
            <img src="https://picsum.photos/300/200" />
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <Button>Button!!</Button>
          </>
        }
      />
      <Code language="jsx">
        {code}
      </Code>
    </FloatContain>
  )
}

export default DemoMultiChildren
