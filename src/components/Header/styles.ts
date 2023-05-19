import { styled } from 'styled-components'
import headerBackground from '../../assets/header-background.svg'

export const HeaderContainer = styled.header`
  position: relative;
  z-index: -1;

  background-image: url(${headerBackground});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 18.5rem;

  .logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: -4rem;
  }
`
