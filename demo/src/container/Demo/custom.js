import React from 'react'
import FloatContain from 'components/FloatContain'
import Code from 'components/Code'
import CoverBase from './base'
import styled from 'utils/styled'
import AlertIcon from 'assets/alert.svg'

const Content = styled('div')`
  font-size: 16px;
  position: relative;
  &:active {
    background: #8c8c8ca4;
  }
`

const CoverContent = styled('div')`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #e2574b;
  font-weight: bold;
  font-size: 24px;
  img {
    width: 50px;
  }
`

const DemoCustom = () => {
  const code =
`<Cover 
  coverAdornment={()=> (
    <div>
      <img/>
      <div>Oops! Something error!</div>
    </div>
  )}
>
  <div>
    Lorem...
  </div>
</Cover>`
  return (
    <FloatContain p="8px 16px" m="16px 0">
      <CoverBase
        title="Custom Cover Content"
        desc="You can custom your content to replace loading"
        opacity={0.1}
        blockSetting={['color', 'size']}
        coverProps={{
          coverAdornment: () => {
            return <CoverContent>
              <img src={AlertIcon}/>
              <span>Oops! Something error!</span>
            </CoverContent>
          }
        }}
        Main={
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Content>
        }
      />
      <Code language="jsx">
        {code}
      </Code>
    </FloatContain>
  )
}

export default DemoCustom
