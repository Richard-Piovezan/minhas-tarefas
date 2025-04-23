import styled from 'styled-components'
import * as enums from '../../utils/enums/Task'

type TagProps = {
  priority?: enums.Priority
  status?: enums.Status
  parameter: 'status' | 'priority'
}

function returnBGColor(props: TagProps): string {
  if (props.parameter === 'status') {
    if (props.status === enums.Status.PENDING)
      return 'var(--color-tag-pending-bg)'
    if (props.status === enums.Status.COMPLETED)
      return 'var(--color-tag-completed-bg)'
  } else {
    if (props.priority === enums.Priority.URGENT)
      return 'var(--color-tag-urgent-bg)'
    if (props.priority === enums.Priority.IMPORTANT)
      return 'var(--color-tag-important-bg)'
    if (props.priority === enums.Priority.NEUTRAL)
      return 'var(--color-tag-neutral-bg)'
  }

  return 'var(--color-btn-edit)'
}

export const Card = styled.div`
  background-color: var(--color-bg-card);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  transition: 0.3s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.8) 0px 3px 8px;
    background-color: var(--color-bg-card-hover);
  }
`

export const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
  color: var(--color-card-title);
  margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-weight: bold;
  font-size: 10px;
  color: var(--color-tag-text);
  background-color: ${(props) => returnBGColor(props)};
  text-transform: capitalize;
  border-radius: 8px;
  display: inline-block;
  border: 0.5px solid rgba(255, 255, 255, 0.1);

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
  background-color: var(--color-btn-edit);
  border-radius: 8px;
  transition: ease 0.3s;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;

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

export const CancelRemoveButton = styled(Button)`
  background-color: var(--color-btn-cancel);

  &:hover {
    background-color: var(--color-btn-cancel-hover);
  }
`
