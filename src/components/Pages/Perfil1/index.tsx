import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import logo from './assets/images/logo.png'
import fundo from './assets/images/fundo.png'
import pizza from './assets/images/image 3.png'
import {
  CardsContainer,
  Conteudo,
  Dolce,
  Fundo,
  Header,
  Italiana,
  Logo,
  Menu,
  Modal,
  ModalContent,
  Overlay,
  Formulario,
  FormGroup,
  Button
} from './styles'
import Footer from '../../Footer'

function Perfil1() {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFormVisible, setIsFormVisible] = useState(false)

  const handleAddToCart = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setIsFormVisible(false)
  }

  const handleBuyClick = () => {
    setIsFormVisible(true)
  }

  return (
    <div>
      <Header>
        <Menu>Restaurantes</Menu>
        <Link to="/"></Link>
        <Logo src={logo} alt="Efood" onClick={() => navigate('/')} />
        <Menu>0 produto(s) no carrinho</Menu>
      </Header>
      <Fundo backgroundImage={fundo}>
        <Italiana>Italiana</Italiana>
        <Dolce>La Dolce Vita Trattoria</Dolce>
      </Fundo>

      <CardsContainer id="main">
        <Conteudo>
          <img src={pizza} alt="card" />
          <h2>Pizza Marguerita</h2>
          <p>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </p>
          <button onClick={handleAddToCart}>Adicionar ao carrinho</button>
        </Conteudo>
        {/* Outros cards aqui */}
      </CardsContainer>
      <Footer />

      {isModalOpen && (
        <Overlay onClick={handleCloseModal}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <ModalContent>
              {isFormVisible ? (
                <Formulario>
                  <FormGroup>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="address">Endereço:</label>
                    <input type="text" id="address" name="address" />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="phone">Telefone:</label>
                    <input type="text" id="phone" name="phone" />
                  </FormGroup>
                  <Button type="submit">Enviar Pedido</Button>
                </Formulario>
              ) : (
                <>
                  <h2>Produto adicionado ao carrinho!</h2>
                  <Button onClick={handleBuyClick}>Comprar</Button>
                </>
              )}
            </ModalContent>
          </Modal>
        </Overlay>
      )}
    </div>
  )
}

export default Perfil1
