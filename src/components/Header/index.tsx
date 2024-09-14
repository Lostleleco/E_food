<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";

import { RootReducer } from "../../store";
import { openCart } from "../../store/reducers/cart";

import * as S from "./styles";

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const abrirCarrinho = () => {
    dispatch(openCart());
  };

  return (
    <S.Container>
      <div className="container">
        <S.TextLink to="/">Restaurantes</S.TextLink>
        <Link to="/">
          <img src={logo} alt="Efood Logo" />
        </Link>
        <p onClick={abrirCarrinho}>{items.length} produto(s) no carrinho</p>
      </div>
    </S.Container>
  );
};

export default Header;
=======
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { HeaderWrapper, PageTitle } from './styles'
import logo from '../../assets/images/logo.png'
import { Logo } from '../../styles'
import { open } from '../../store/reducers/cart'

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  return (
    <HeaderWrapper>
      <div className="container">
        <PageTitle to={'/'}>Restaurantes</PageTitle>
        <Logo src={logo} alt="logo" />
        <h4 onClick={() => dispatch(open())}>
          {items.length} produto(s) no carrinho
        </h4>
      </div>
    </HeaderWrapper>
  )
}

export default Header
>>>>>>> dedc4134ec810872587acf0a8c76f598776266c2
