import { styled } from 'styled-components'

export const SearchFormContainer = styled.div`
  margin-top: 4.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      color: ${({ theme }) => theme['base-subtitle']};
      font-size: 1.125rem;
      font-weight: 700;
    }

    span {
      color: ${({ theme }) => theme['base-span']};
      font-size: 0.875rem;
    }
  }
`

export const FormContainer = styled.form`
  input {
    width: 100%;
    background-color: ${({ theme }) => theme['base-input']};
    border: 1px solid ${({ theme }) => theme['base-border']};
    padding: 0.75rem 1rem;
    border-radius: 6px;
    color: ${({ theme }) => theme['base-text']};
    font-size: 1rem;

    transition: all 0.2s ease;

    &:focus {
      border: 1px solid ${({ theme }) => theme.blue};
    }

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }
  }
`
