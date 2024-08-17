import React from 'react'
import { Logo, Titulo, Top } from './styles'
import logo from '../../components/container/assets/logo.svg'

const Header = () => (
  <Top>
    <Logo src={logo} alt="Efood" />
    <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
  </Top>
)

export default Header
