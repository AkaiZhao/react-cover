import React from 'react'
import styled from 'utils/styled'

export const Input = styled('input')`
  margin: 0 8px;
`
export const Label = styled('label')`
  display: block;
  margin-left: 8px;
  margin-bottom: 4px;
`

export const Checkbox = ({ label, checked, onChange }) => (
  <div style={{ padding: '4px 0' }}>
    <Input type="checkbox" checked={checked} onChange={onChange} style={{ margin: '0 12px' }} />
    <label>{label}</label>
</div>
)

export const Colorpicker = ({ label, value, onChange }) => (
  <div style={{ padding: '4px 0' }}>
    <Input type="color" value={value} onChange={onChange} style={{ width: 15, height: 20 }} />
    <label>{label}</label>
</div>
)

export const TextInput = styled(Input)`
  padding: 4px 8px;
  width: calc(100% - 24px);
`

export const TextField = ({ label, value, onChange }) => (
  <div style={{ padding: '4px 0' }}>
    <Label>{label}</Label>
    <TextInput type="text" value={value} onChange={onChange} />
  </div>
)
