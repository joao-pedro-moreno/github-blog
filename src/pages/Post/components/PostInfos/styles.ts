import { styled } from 'styled-components'

export const PostInfoContainer = styled.div`
  margin-top: -5.5rem;

  background-color: ${({ theme }) => theme['base-profile']};
  padding: 2rem;
  border-radius: 10px;

  > p {
    margin-top: 1.25rem;
    color: ${({ theme }) => theme['base-title']};
    font-size: 1.5rem;
    font-weight: 700;
  }
`

export const PostInfoLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    color: ${({ theme }) => theme.blue};
    font-size: 0.75rem;
    font-weight: 700;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.blue};
    }
  }
`

export const SimpleInfosContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;
`
