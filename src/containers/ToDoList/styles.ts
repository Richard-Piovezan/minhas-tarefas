import styled from 'styled-components'

export const Main = styled.main`
  padding: 40px;
  height: 97vh;
  overflow-y: scroll;
  scrollbar-color: var(--color-card-border) transparent;
  scrollbar-width: thin;
`

export const Result = styled.p`
  margin-bottom: 40px;
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  color: var(--color-text-subtle);
  padding: 8px 16px;
  border: 1px solid rgba(199, 195, 192, 0.6);
  border-radius: 50px;
  cursor: default;
`
