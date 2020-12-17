import styled from 'utils/styled'

const FloatContain = styled('div')`
  position: relative;
  padding: ${props => props.p};
  margin: ${props => props.m};
  transition: .2s;
  border-radius: 12px;
  top:0;
  left:0;
  &:hover {
    top:-3px;
    left: -3px;
    box-shadow: 1px 1px 6px 0px #888;
  }
`

export default FloatContain
