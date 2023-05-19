import { styled } from 'styled-components'

export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme['base-subtitle']};

  svg {
    color: ${({ theme }) => theme['base-label']};
  }
`
