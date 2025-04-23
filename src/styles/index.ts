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

export default GlobalStyle
