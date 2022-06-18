import styled from 'styled-components'

export interface SpaceDividerProps {
  space?: 5 | 10 | 15 | 20 | 30 | 40
}

const SpaceDivider = styled.div<SpaceDividerProps>`
  margin-bottom: ${({ space = 30 }) => `${space}px`};
  max-width: 1300px;
  margin: auto;
`

export default SpaceDivider
