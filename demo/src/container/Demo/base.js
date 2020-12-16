import React, { useState } from 'react'
import Cover from 'react-cover'
import styled from 'utils/styled'
import { Colorpicker, Checkbox, TextField } from 'components/Input'

export const DemoContainer = styled('div')`
  display: flex;
`

export const Result = styled('div')`
  flex: 1;
  padding: 16px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  _MD {
    padding: 16px 0;
  }
`

export const Setting = styled('div')`
  padding: 16px;
  _MD {
    display: none;
  }
`

const CoverBase = ({ title, desc, Settings = () => {}, Main = () => {}, coverProps = {}, blockSetting = [], ...props }) => {
  const [open, setOpen] = useState(true)
  const [color, setColor] = useState(props.color ?? '#1976d2')
  const [size, setSize] = useState(props.size ?? 32)
  const [opacity, setOpacity] = useState(props.opacity ?? 0.4)
  return (
    <>
      <h4>{title}</h4>
      <p>{desc}</p>
      <DemoContainer>
        <Result>
          <Cover on={open} color={color} size={Number(size) || size} opacity={opacity} {...coverProps}>
            {Main}
          </Cover>
        </Result>
        <Setting>
          {!blockSetting.includes('open') && <Checkbox label="open" checked={open} onChange={(e) => setOpen(e.target.checked)} />}
          {!blockSetting.includes('color') && <Colorpicker label={`color (${color})`} value={color} onChange={(e) => setColor(e.target.value)} />}
          {!blockSetting.includes('size') && <TextField label="size" value={size} onChange={e => setSize(e.target.value)} />}
          {!blockSetting.includes('opacity') && <TextField label="opacity" value={opacity} onChange={e => setOpacity(e.target.value)} />}
          {Settings({})}
        </Setting>
      </DemoContainer>
    </>
  )
}

export default CoverBase
