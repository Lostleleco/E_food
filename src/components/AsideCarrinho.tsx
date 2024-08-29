import React from 'react'
import styled from 'styled-components'

const AsideContainer = styled.aside`
  width: 360px;
  height: 1624px;
  position: fixed;
  right: 0;
  top: 0;
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  opacity: 1;
  z-index: 1000;
`

const ItemsList = styled.ul`
  list-style-type: none;
  padding: 0;
`

interface AsideCarrinhoProps {
  items: number
}

const AsideCarrinho: React.FC<AsideCarrinhoProps> = ({ items }) => {
  return (
    <AsideContainer>
      <h2>Carrinho</h2>
      <ItemsList>
        <li>Quantidade de itens: {items}</li>
        {/* Aqui você pode adicionar mais detalhes, como lista de produtos, preços, etc. */}
      </ItemsList>
    </AsideContainer>
  )
}

export default AsideCarrinho
