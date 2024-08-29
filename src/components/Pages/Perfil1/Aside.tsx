import React from 'react'
import styled from 'styled-components'
import pizzaImage from './assets/images/image3.png'
import { Cores } from '../../../styles'

const AsideContainer = styled.aside<{ isVisible: boolean }>`
  position: fixed;
  width: 360px;
  height: 100vh;
  top: 0;
  right: 0;
  background-color: ${Cores.botoes1};
  padding: 20px;
  transform: ${(props) =>
    props.isVisible ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 100;
`

const Card = styled.div`
  width: 344px;
  height: 100px;
  margin-top: 32px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 8px;
`

const CardImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 16px;
`

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
`

const CardTitle = styled.h3`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 16px;
  color: ${Cores.botoes1};
`

const CardPrice = styled.p`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 16px;
  color: ${Cores.botoes1};
`

const TotalPrice = styled.p`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 18px;
  margin-top: 20px;
  color: #ffffff;
`

const ContinueButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: ${Cores.bege};
  border: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 16px;
  color: ${Cores.botoes1};
  text-align: center;
  border-radius: 8px;
`

interface AsideProps {
  isVisible: boolean
  pizza: string | null
}

const Aside: React.FC<AsideProps> = ({ isVisible, pizza }) => {
  if (!pizza) return null

  return (
    <AsideContainer isVisible={isVisible}>
      <Card>
        <CardImage src={pizzaImage} alt="Pizza" />
        <CardInfo>
          <CardTitle>{pizza}</CardTitle>
          <CardPrice>R$ 60,90</CardPrice>
        </CardInfo>
      </Card>

      <TotalPrice>Total: R$ 60,90</TotalPrice>

      <ContinueButton>Continuar com a entrega</ContinueButton>
    </AsideContainer>
  )
}

export default Aside
