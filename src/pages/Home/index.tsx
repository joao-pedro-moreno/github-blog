import { Profile } from './components/Profile'
import { HomeContainer } from './styles'

export function HomePage() {
  return (
    <HomeContainer className="container">
      <Profile />
    </HomeContainer>
  )
}
