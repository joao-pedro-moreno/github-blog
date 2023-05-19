import { Posts } from './components/Posts'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { HomeContainer } from './styles'

export function HomePage() {
  return (
    <HomeContainer className="container">
      <Profile />
      <SearchForm />
      <Posts />
    </HomeContainer>
  )
}
