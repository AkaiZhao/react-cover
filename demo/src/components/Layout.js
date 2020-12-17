import React from 'react'
import styled from 'utils/styled'

const StyledContainer = styled('section')`
  padding: 16px 0;
  margin: 0 32px;
`

export const Container = ({ ...props }) => {
  return <StyledContainer {...props} className="anchor" />
}
