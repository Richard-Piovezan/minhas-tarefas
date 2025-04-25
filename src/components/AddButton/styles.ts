import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Circle = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 64px;
  background-color: var(--color-btn-create);
  color: var(--color-text-main);
  position: fixed;
  bottom: 4vh;
  left: 5vw;
  z-index: 3;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 54px 55px,
    rgba(0, 0, 0, 0.3) 0px -12px 30px, rgba(0, 0, 0, 0.3) 0px 4px 6px,
    rgba(0, 0, 0, 0.2) 0px 12px 13px, rgba(0, 0, 0, 0.2) 0px -3px 5px;
  text-decoration: none;
  font-size: 40px;
  font-weight: 400;
  transition: ease 0.3s;
  cursor: pointer;

  &:hover {
    background-color: var(--color-btn-create-hover);
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  }
`
