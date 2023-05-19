import { styled } from 'styled-components'

export const PostCardContainer = styled.a`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  background-color: ${({ theme }) => theme['base-post']};
  border: 1px solid ${({ theme }) => theme['base-post']};
  padding: 2rem;
  border-radius: 10px;

  transition: all 0.2s ease;

  > p {
    color: ${({ theme }) => theme['base-text']};
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme['base-label']};
  }
`

export const PostCardHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  > p {
    width: 280px;
    color: ${({ theme }) => theme['base-title']};
    font-size: 1.25rem;
    font-weight: 700;
  }

  > span {
    color: ${({ theme }) => theme['base-span']};
    font-size: 0.875rem;
  }
`
