// Dependencies
import styled from 'styled-components'

// Styles
export const Button = styled.button`
  height: 40px;
  border-radius: 8px;
  outline: none;
  border: none;
  background-color: ${props => props.theme.colors[props.status]};
  color: #ffffff;
  margin-bottom: 1rem;
  &:hover {
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    opacity: 0.75;
  }
`