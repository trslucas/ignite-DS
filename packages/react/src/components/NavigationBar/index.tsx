import { BrandLogo, MenuLinks, NavBarMenu } from './styles'

export interface NavigationBarProps {
  size: number
}

export function NavigationBar(size: NavigationBarProps) {
  return (
    <NavBarMenu>
      <BrandLogo />
      <MenuLinks></MenuLinks>
    </NavBarMenu>
  )
}
