import styled from 'styled-components'

export const Card = styled.div`
  background-color: var(--color-bg-card);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: var(--color-card-title);
  margin-bottom: 16px;
`

export const Tag = styled.span`
  padding: 4px 8px;
  font-weight: bold;
  font-size: 10px;
  color: var(--color-text-main);
  background-color: #292929;
  text-transform: capitalize;
  border-radius: 8px;
  display: inline-block;

  &:not(:last-child) {
    margin-right: 16px;
  }
`

export const Description = styled.textarea`
  color: var(--color-card-subtitle);
  font-size: 14px;
  line-height: 24px;
  font-family: var(--font-secondary);
  display: block;
  width: 100%;
  resize: none;
  margin: 16px 0;
  background-color: transparent;
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 16px 0 8px;
`

export const Button = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: var(--color-text-main);
  padding: 6px 12px;
  cursor: pointer;
  background-color: #292929;
  border-radius: 8px;

  &:not(:last-child) {
    margin-right: 8px;
  }
`
