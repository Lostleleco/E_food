import React from 'react'
import { Flex, Logo, Plataforma, Top } from './styles'
import logo from '../../components/container/assets/logo.svg'
import group from './assets/images/Group.png'
import group1 from './assets/images/Group1.png'
import Vector from './assets/images/Vector.png'
import { Social } from '../Footer/styles'
const Footer = () => (
  <Top>
    <Logo src={logo} alt="Efood" />
    <Flex>
      <Social src={group} alt="Group Image" />
      <Social src={group1} alt="Group1 Image" />
      <Social src={Vector} alt="Vector Image" />
    </Flex>

    <Plataforma>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </Plataforma>
  </Top>
)

export default Footer
