import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --font-primary: Roboto, sans-serif;
    --font-secondary: 'Roboto Mono', monospace;

    --color-bg-main: #0D1326;
    --color-bg-sidebar: #1A2440;
    --color-text-main: #F2EEEB;
    --color-accent-warm: #BF967E;
    --color-accent-gold: #D9AC84;

    --color-bg-card: #222F4C;
    --color-bg-card-hover:rgb(42, 55, 85);
    --color-card-title: #D9AC84;
    --color-card-subtitle: #AFA9A3;
    --color-card-border: #2C3959;

    --color-text-subtle: #C7C3C0;

    --color-btn-save: #3B7D67;
    --color-btn-save-hover: #4C9C7E;

    --color-btn-cancel: #A14A4A;
    --color-btn-cancel-hover: #BA5C5C;

    --color-btn-edit: #303030;
    --color-btn-edit-hover: #373737;

    --color-tag-completed-bg: #3B7D67;
    --color-tag-important-bg: #BF967E;
    --color-tag-neutral-bg:rgba(115, 145, 201, 0.76);
    --color-tag-all-bg: #1A2440;
    --color-tag-pending-bg: #3A4A68;
    --color-tag-urgent-bg: #A14A4A;

    --color-tag-text: #F2EEEB;

    --color-btn-create: #4FA982;
    --color-btn-create-hover: #65BC95;

  }

  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
  list-style: none;
  font-family: var(--font-primary);
  color: var(--color-text-main);
  }

  body {
    background-color: var(--color-bg-main);
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 40px;
  height: 97vh;
  overflow-y: scroll;
  scrollbar-color: var(--color-card-border) transparent;
  scrollbar-width: thin;
`

export const Title = styled.h2`
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

export const Button = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: var(--color-text-main);
  padding: 6px 12px;
  cursor: pointer;
  background-color: var(--color-btn-edit);
  border-radius: 8px;
  transition: ease 0.3s;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;

  i {
    font-size: 14px;
    margin-right: 8px;
  }

  &:not(:last-child) {
    margin-right: 8px;
  }

  &:hover {
    background-color: var(--color-btn-edit-hover);
    text-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
    box-shadow: rgba(0, 0, 0, 0.9) 0px 3px 8px;
  }
`

export const SaveButton = styled(Button)`
  background-color: var(--color-btn-save);

  &:hover {
    background-color: var(--color-btn-save-hover);
  }
`

export default GlobalStyle
