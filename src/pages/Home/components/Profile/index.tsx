import {
  ArrowSquareOut,
  GithubLogo,
  Buildings,
  Users,
} from '@phosphor-icons/react'
import {
  ProfileContainer,
  ProfileInfoContainer,
  ProfileNameContainer,
  SimpleInfosContainer,
} from './styles'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'

export function Profile() {
  return (
    <ProfileContainer>
      <img
        src="https://github.com/joao-pedro-moreno.png"
        alt="Foto de perfil"
      />

      <ProfileInfoContainer>
        <ProfileNameContainer>
          <p>João Pedro Moreno</p>
          <a
            href="https://github.com/joao-pedro-moreno"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
            <ArrowSquareOut size={12} weight="bold" />
          </a>
        </ProfileNameContainer>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          quibusdam cumque quam modi porro in, ipsa pariatur? Eos, voluptatum
          officiis nulla iusto
        </p>

        <SimpleInfosContainer>
          <InfoWithIcon
            icon={<GithubLogo size={18} weight="fill" />}
            content="joao-pedro-moreno"
          />
          <InfoWithIcon
            icon={<Buildings size={18} weight="fill" />}
            content="Rocketseat"
          />
          <InfoWithIcon
            icon={<Users size={18} weight="fill" />}
            content="32 seguidores"
          />
        </SimpleInfosContainer>
      </ProfileInfoContainer>
    </ProfileContainer>
  )
}
