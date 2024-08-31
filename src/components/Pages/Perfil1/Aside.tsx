import React, { useState } from 'react'
import styled from 'styled-components'
import pizzaImage from './assets/images/image3.png'
import { Cores } from '../../../styles'
import { Titulo } from '../../Header/styles'
import { Texto } from '../Home/styles'
import trashIcon from './assets/images/lixeira-de-reciclagem 1.png'

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
  background-color: ${Cores.bege};
  padding: 10px;
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
  height: 100px;
`

const CardTitle = styled.h2`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 14px;
  color: ${Cores.botoes1};
`

const ProdutoTitle = styled.h1`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 900;
  line-height: 21.09px;
  height: 21px;
  color: ${Cores.botoes1};
  width: 140px;
  height: 8px;
  top: 0px;
`

const CardPrice = styled.p`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 14px;
  color: ${Cores.botoes1};
`

const TotalPrice = styled.p`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
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
`

const TrashIcon = styled.img`
  width: 16px;
  height: 16px;
  padding-top: 50px;
  padding-left: 90px;
  cursor: pointer;
`

interface AsideProps {
  isVisible: boolean
  pizza: string | null
}

const Aside: React.FC<AsideProps> = ({ isVisible, pizza }) => {
  const [step, setStep] = useState(1)

  const renderStep = () => {
    if (step === 1) {
      return (
        <>
          <Card>
            <CardImage src={pizzaImage} alt="Pizza" />
            <CardInfo>
              <ProdutoTitle>Pizza Marguerita</ProdutoTitle>
              <CardTitle>{pizza}</CardTitle>
              <CardPrice>R$ 60,90</CardPrice>
            </CardInfo>
            <TrashIcon src={trashIcon} alt="Excluir item" />
          </Card>
          <TotalPrice>
            <span>Total:</span>
            <span>R$ 60,90</span>
          </TotalPrice>

          <ContinueButton onClick={() => setStep(2)}>
            Continuar com a entrega
          </ContinueButton>
        </>
      )
    } else if (step === 2) {
      return (
        <>
          <Titulo>Entrega</Titulo>

          <ContinueButton onClick={() => setStep(3)}>
            Continuar com pagamento
          </ContinueButton>
          <button onClick={() => setStep(1)}>Voltar para o carrinho</button>
        </>
      )
    } else if (step === 3) {
      return (
        <>
          <Titulo>Pagamento</Titulo>
          {/* Formulário de pagamento */}
          <ContinueButton onClick={() => setStep(4)}>
            Finalizar pagamento
          </ContinueButton>
          <button onClick={() => setStep(2)}>
            Voltar para edição de endereço
          </button>
        </>
      )
    } else if (step === 4) {
      return (
        <>
          <Titulo>Pedido realizado</Titulo>
          <Texto>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </Texto>
          <ContinueButton>Concluir</ContinueButton>
        </>
      )
    }
  }

  return <AsideContainer isVisible={isVisible}>{renderStep()}</AsideContainer>
}
