import React from 'react'
import styled from 'utils/styled'

const StyledContainer = styled('section')`
  padding: 16px 0;
  margin: 0 32px;
  _MD {
    margin: 0 12px;
  }
`

export const Container = ({ ...props }) => {
  return <StyledContainer {...props} className="anchor" />
}
