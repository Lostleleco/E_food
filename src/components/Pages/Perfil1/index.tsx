import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../slices/cartSlice'
import { RootState } from '../../../store'
import logo from './assets/images/logo.png'
import fundo from './assets/images/fundo.png'
import pizza from './assets/images/image3.png'
import {
  CardsContainer,
  Conteudo,
  Dolce,
  Fundo,
  Header,
  Italiana,
  Logo,
  Menu
} from './styles'
import Footer from '../../Footer'

import Modal from './Modal'

function Perfil1() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPizza, setSelectedPizza] = useState<string | null>(null)
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAddToCart = (pizza: string) => {
    setSelectedPizza(pizza)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedPizza(null)
  }

  const handleConfirmPurchase = () => {
    if (selectedPizza) {
      dispatch(addToCart(selectedPizza))
      handleCloseModal()
    }
  }

  return (
    <div>
      <Header>
        <Menu>Restaurantes</Menu>
        <Link to="/" />
        <Logo src={logo} alt="Efood" onClick={() => navigate('/')} />
        <Menu>{cartItems.length} produto(s) no carrinho</Menu>
      </Header>
      <Fundo backgroundImage={fundo}>
        <Italiana>Italiana</Italiana>
        <Dolce>La Dolce Vita Trattoria</Dolce>
      </Fundo>

      <CardsContainer>
        {[...Array(6)].map((_, index) => (
          <Conteudo key={index}>
            <img src={pizza} alt="card" />
            <h2>Pizza Marguerita</h2>
            <p>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </p>
            <button onClick={() => handleAddToCart('Pizza Marguerita')}>
              Adicionar ao carrinho
            </button>
          </Conteudo>
        ))}
      </CardsContainer>
      <Footer />

      {isModalOpen && (
        <Modal
          onClose={handleCloseModal}
          onConfirm={handleConfirmPurchase}
          pizza={selectedPizza}
        />
      )}
    </div>
  )
}

export default Perfil1
