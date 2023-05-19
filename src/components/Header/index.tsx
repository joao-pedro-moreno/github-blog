import { HeaderContainer } from './styles'
import githubBlogLogo from '../../assets/logo.svg'
import leftDetail from '../../assets/left-detail.svg'
import rightDetail from '../../assets/right-detail.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={leftDetail} alt="" />
      <img src={githubBlogLogo} alt="Github Blog" className="logo" />
      <img src={rightDetail} alt="" />
    </HeaderContainer>
  )
}
