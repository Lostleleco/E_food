import React from 'react'
import styled from 'styled-components'
import pizzaImage from './assets/images/image3.png'
import { Cores } from '../../../styles'

const ModalContainer = styled.div`
  position: fixed;
  top: 490px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1024px;
  height: 344px;
  background: ${Cores.botoes1};
  padding: 20px;
  display: flex;
`
const Titulo = styled.h2`
  width: 140px;
  height: 21px;
  font-family: 'Roboto';
  font-weight: 900;
  font-size: 18px;
  line-height: 21.09px;
  color: #ffffff;
`
const Texto = styled.p`
  width: 656px;
  height: 176px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
`
const Obs = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
`
const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  padding: 32px 32px 32px 24px;
`

const ModalContent = styled.div`
  margin-top: 20px;
`

const ButtonGroup = styled.div`
  button {
    width: 218px;
    height: 24px;
    margin-right: 10px;
    background-color: ${Cores.bege};
    border: none;
    cursor: pointer;
    color: ${Cores.botoes1};
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 14px;
    line-height: 16.41px;
    align-items: center;
  }
`

interface ModalProps {
  onClose: () => void
  onConfirm: () => void
  pizza: string | null
}

const Modal: React.FC<ModalProps> = ({ onConfirm, pizza }) => {
  if (!pizza) return null

  return (
    <ModalContainer>
      <ModalImage src={pizzaImage} alt="Pizza" />
      <ModalContent>
        <Titulo>Pizza Marguerita</Titulo>
        <Texto>
          A Textoizza Margherita é uma pizza clássica da culinária italiana,
          reconhecida por sua simplicidade e sabor inigualável. Ela é feita com
          uma base de massa fina e crocante, coberta com molho de tomate fresco,
          queijo mussarela de alta qualidade, manjericão fresco e azeite de
          oliva extra-virgem. A combinação de sabores é perfeita, com o molho de
          tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e
          as folhas de manjericão frescas, que adicionam um toque de sabor
          herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os
          paladares e é uma ótima opção para qualquer ocasião. Serve: de 2 a 3
          pessoas
        </Texto>
        <Obs>Serve: de 2 a 3 pessoas</Obs>

        <ButtonGroup>
          <button onClick={onConfirm}>Adicionar ao carrinho - R$ 60,90</button>
        </ButtonGroup>
      </ModalContent>
    </ModalContainer>
  )
}

export default Modal
