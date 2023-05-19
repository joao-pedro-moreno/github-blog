import { styled } from 'styled-components'

export const ProfileContainer = styled.div`
  margin-top: -5.5rem;
  background-color: ${({ theme }) => theme['base-profile']};

  display: flex;
  align-items: center;
  gap: 2rem;

  border-radius: 10px;
  box-shadow: 1px 1px 10px #00000020;

  padding: 2rem 2.5rem;

  > img {
    width: 148px;
    border-radius: 8px;
  }
`

export const ProfileInfoContainer = styled.div`
  flex: 1;

  > p {
    margin-top: 0.5rem;
  }
`

export const ProfileNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > p {
    color: ${({ theme }) => theme['base-title']};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2rem;
  }

  > a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${({ theme }) => theme.blue};
    font-size: 0.75rem;
    font-weight: 700;
  }
`

export const SimpleInfosContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;
`

export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme['base-subtitle']};

  svg {
    color: ${({ theme }) => theme['base-label']};
  }
`
