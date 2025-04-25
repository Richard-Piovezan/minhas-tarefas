import styled from 'styled-components'

export const Form = styled.form`
  max-width: 548px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;

  textarea {
    resize: none;
    height: 184px;
    margin: 16px 0;
  }
`

export const Options = styled.div`
  margin-bottom: 16px;

  p,
  label {
    color: var(--color-text-subtle);
  }

  p {
    margin-bottom: 6px;
  }

  label:not(:last-child) {
    margin-right: 16px;
  }
`
