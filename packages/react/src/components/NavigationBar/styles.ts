import { styled } from '../../styles'

export const NavBarMenu = styled('nav', {
  padding: '$6',
  backgroundColor: 'pink',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const BrandLogo = styled('div', {
  marginLeft: '$20',
  backgroundColor: '$gray800',
  borderRadius: '50%',
  width: '$20',
  height: '$20',
  cursor: 'pointer',

  svg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit',
  },
})

export const MenuLinks = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  gap: '$4',
  marginRight: '$20',
})
