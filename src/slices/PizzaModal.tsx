import React from 'react'
import styled from 'styled-components'
import image3 from '../components/Pages/Perfil1/assets/images/image3.png'

interface PizzaModalProps {
  isOpen: boolean
  onClose: () => void
}

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

const ModalContainer = styled.div`
  position: fixed;
  width: 1024px;
  height: 344px;
  top: 490px;
  left: 171px;
  background: white;
  padding: 20px;

  display: flex;

  gap: 0;
`

const Image = styled.img`
  width: 280px;
  height: 280px;
  border-radius: none;
`

const Content = styled.div`
  padding: 10px 0;
`

const Description = styled.p`
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.5;
`

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff6347; /* Exemplo de cor para o botão */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`

const PizzaModal: React.FC<PizzaModalProps> = ({ isOpen }) => {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContainer>
        <Image src={image3} alt="Pizza Marguerita" />
        <Content>
          <h2>Pizza Margherita</h2>
          <Description>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião.
          </Description>
          <p>Serve: de 2 a 3 pessoas</p>
          <Button>Adicionar ao carrinho - R$ 60,90</Button>
        </Content>
      </ModalContainer>
    </ModalOverlay>
  )
}

export default PizzaModal
