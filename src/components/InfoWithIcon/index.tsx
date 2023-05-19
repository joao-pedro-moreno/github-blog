import { ReactNode } from 'react'
import { InfoWithIconContainer } from './styles'

interface InfoWithIconProps {
  icon: ReactNode
  content: string
}

export function InfoWithIcon({ icon, content }: InfoWithIconProps) {
  return (
    <InfoWithIconContainer>
      {icon}
      {content}
    </InfoWithIconContainer>
  )
}
