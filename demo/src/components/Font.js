import React from 'react'
import styled from 'utils/styled'

const fontSize = {
  h1: {
    fontSize: 64,
    fontWeight: 'bold'
  },
  h2: {
    fontSize: 48,
    fontWeight: 'bold'
  },
  h3: {
    fontSize: 42,
    fontWeight: 'bold'
  },
  h4: {
    fontSize: 32
  },
  h5: {
    fontSize: 24
  },
  h6: {
    fontSize: 16
  },
  p: {
    fontSize: 16
  }
}

const getVariantContain = (variant) => {
  console.log(variant.length)
  // console.log(fontSize, variant, variant || 'p', fontSize[variant || 'p'], fontSize.p)
}

export const StyledFont = styled('div')`
  font-size: ${props => {
    getVariantContain(props.variant)
    return fontSize[props.variant || 'p'].fontSize
  }}px;
  font-weight: ${props => fontSize[props.variant || 'p'].fontWeight || 'initial'};
  margin: 0;
  margin-bottom: ${props => fontSize[props.variant || 'p'].fontSize / 3}px;
`

export const Font = ({ component, ...props }) => {
  return <StyledFont as={`${component || props.variant || 'div'}`} {...props} />
}
