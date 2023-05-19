import { styled } from 'styled-components'
import headerBackground from '../../assets/header-background.svg'

export const HeaderContainer = styled.header`
  background-image: url(${headerBackground});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 18.5rem;

  .logo {
    margin-top: -4rem;
  }
`
