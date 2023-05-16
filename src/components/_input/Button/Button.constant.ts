import { type MouseEventHandler } from 'react'

export interface PropsInterface {
  text: string
  icon?: string
  onClick: MouseEventHandler<HTMLButtonElement>
}
