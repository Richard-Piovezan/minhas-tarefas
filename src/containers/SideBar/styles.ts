import styled from 'styled-components'

export const ASide = styled.aside`
  background-color: var(--color-bg-sidebar);
  padding: 16px;
  height: 100vh;
  border-right: 2px solid var(--color-text-main);
  box-shadow: 7px 0px 8px 0px rgba(0, 0, 0, 0.38);
`

export const Filters = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin: 16px 0;
`

export const Field = styled.input`
  width: 100%;
  border: 1px solid var(--color-accent-warm);
  border-radius: 8px;
  padding: 8px;
  background-color: transparent;
  font-weight: bold;
  color: var(--color-text-main);
  transition: 0.3s;

  &:hover,
  &:focus {
    border-color: var(--color-accent-gold);
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 2px;
  }
`
