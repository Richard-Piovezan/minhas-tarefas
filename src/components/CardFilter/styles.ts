import styled from 'styled-components'
import { Props } from '.'

type PropsNoSubtitleAndCount = Omit<Props, 'count' | 'subtitle'>

export const Card = styled.div<PropsNoSubtitleAndCount>`
  padding: 8px;
  border: 1px solid
    ${(props) =>
      props.active ? 'var(--color-accent-gold)' : 'var(--color-card-border)'};
  border-radius: 8px;
  background-color: ${(props) =>
    props.active ? 'var(--color-card-border)' : 'var(--color-bg-card)'};
  text-align: center;
  transition: 0.3s;
  cursor: pointer;
  opacity: 0.75;
  ${(props) =>
    props.active
      ? 'text-shadow: 2px 3px 4px rgba(0, 0, 0, 0.6); opacity: 1; border-radius: 3px; font-weight: bold;'
      : 'text-shadow: none;'};

  &:hover {
    border: 1px solid var(--color-accent-gold);
    background-color: var(--color-card-border);
    text-shadow: 2px 3px 4px rgba(0, 0, 0, 0.6);
    border-radius: 6px;
    opacity: 1;
    font-weight: bold;
  }
`

export const Count = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
  color: var(--color-card-title);
`

export const Label = styled.span`
  color: var(--color-card-title);
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 500;
`
