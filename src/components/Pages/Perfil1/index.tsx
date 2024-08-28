import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from './assets/images/logo.png'
import fundo from './assets/images/fundo.png'
import pizza from './assets/images/image3.png'
import PizzaModal from '../../../slices/PizzaModal' // Importe o modal

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

function Perfil1() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
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
          <button onClick={handleOpenModal}>Adicionar ao carrinho</button>
        </Conteudo>
        <Conteudo>
          <img src={pizza} alt="card" />
          <h2>Pizza Marguerita</h2>
          <p>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </p>
          <button onClick={handleOpenModal}>Adicionar ao carrinho</button>
        </Conteudo>
        {/* Adicione os outros cards aqui */}
        <Conteudo>
          <img src={pizza} alt="card" />
          <h2>Pizza Marguerita</h2>
          <p>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </p>
          <button onClick={handleOpenModal}>Adicionar ao carrinho</button>
        </Conteudo>
        {/* Adicione os outros cards aqui */}
        <Conteudo>
          <img src={pizza} alt="card" />
          <h2>Pizza Marguerita</h2>
          <p>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </p>
          <button onClick={handleOpenModal}>Adicionar ao carrinho</button>
        </Conteudo>
        {/* Adicione os outros cards aqui */}
        <Conteudo>
          <img src={pizza} alt="card" />
          <h2>Pizza Marguerita</h2>
          <p>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </p>
          <button onClick={handleOpenModal}>Adicionar ao carrinho</button>
        </Conteudo>
        {/* Adicione os outros cards aqui */}
        <Conteudo>
          <img src={pizza} alt="card" />
          <h2>Pizza Marguerita</h2>
          <p>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </p>
          <button onClick={handleOpenModal}>Adicionar ao carrinho</button>
        </Conteudo>
      </CardsContainer>

      <Footer />

      <PizzaModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}

export default Perfil1
