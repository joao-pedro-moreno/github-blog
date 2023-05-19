import {
  CaretLeft,
  ArrowSquareOut,
  GithubLogo,
  Calendar,
  ChatCircle,
} from '@phosphor-icons/react'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import {
  PostInfoContainer,
  PostInfoLinks,
  SimpleInfosContainer,
} from './styles'

export function PostInfos() {
  return (
    <PostInfoContainer>
      <PostInfoLinks>
        <a href="">
          <CaretLeft size={12} /> VOLTAR
        </a>

        <a href="">
          VER NO GITHUB <ArrowSquareOut size={12} weight="bold" />
        </a>
      </PostInfoLinks>

      <p>JavaScript data types and data structures</p>

      <SimpleInfosContainer>
        <InfoWithIcon
          icon={<GithubLogo size={18} weight="fill" />}
          content="joao-pedro-moreno"
        />
        <InfoWithIcon
          icon={<Calendar size={18} weight="fill" />}
          content="Há 1 dia"
        />
        <InfoWithIcon
          icon={<ChatCircle size={18} weight="fill" />}
          content="5 comentários"
        />
      </SimpleInfosContainer>
    </PostInfoContainer>
  )
}
