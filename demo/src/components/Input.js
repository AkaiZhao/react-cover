import React from 'react'
import styled from 'utils/styled'

export const Input = styled('input')`
  margin: 0 8px;
`

export const Radios = ({ label, checked, onChange }) => (
  <div style={{ padding: '4px 0' }}>
    <Input type="checkbox" checked={checked} onChange={onChange} />
    <label>{label}</label>
</div>
)

export const Colorpicker = ({ label, value, onChange }) => (
  <div style={{ padding: '4px 0' }}>
    <Input type="color" value={value} onChange={onChange} style={{ width: 15, height: 20 }} />
    <label>{label}</label>
</div>
)

export const TextField = ({ label, value, onChange }) => (
  <div style={{ padding: '4px 0' }}>
    <label>{label}</label>
    <Input type="text" value={value} onChange={onChange} />
  </div>
)
