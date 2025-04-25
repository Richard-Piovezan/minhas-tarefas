import styled from 'styled-components'

export const ASide = styled.aside`
  background-color: var(--color-bg-sidebar);
  padding: 40px 16px;
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

export const NewTaskSideBar = styled.div`
  text-align: center;
`
