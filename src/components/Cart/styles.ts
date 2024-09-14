<<<<<<< HEAD
import styled from "styled-components";
import Lixeira from "../../assets/images/lixeira-icone.svg";
import { breakpoints, cores } from "../../Global";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;

  display: none;
  justify-content: flex-end;

  &.cart-is-open {
    display: flex;
  }
`;

export const CartItem = styled.li`
  position: relative;
  display: flex;

  color: ${cores.vermelho};
  background-color: ${cores.bege};

  width: 344px;
  height: 100px;
  padding: 8px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  gap: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 280px;
  }

  img {
    width: 80px;
    height: 80px;

    object-fit: cover;
  }

  h3 {
    margin-bottom: 16px;
    font-weight: 900;
    font-size: 18px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
  }

  button {
    position: absolute;
    right: 16px;
    top: 70px;

    width: 16px;
    height: 16px;

    cursor: pointer;
    border: none;
    background-image: url(${Lixeira});
    background-color: transparent;
  }
`;
=======
import styled from 'styled-components'

import trashcan from '../../assets/images/lixeira.png'

type InputProps = {
  width?: string
  gap?: string
}

>>>>>>> dedc4134ec810872587acf0a8c76f598776266c2
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
<<<<<<< HEAD
  opacity: 0.7;
  width: 100%;
  height: 100%;

  background-color: #000;
`;

export const Aside = styled.aside`
  max-width: 360px;
  padding: 32px 8px;

  width: 100%;
  z-index: 1;

  background-color: ${cores.vermelho};
  
  .message-cart-div{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .message-cart {
    font-size: 16px;
    color: ${cores.bege};
    margin-bottom: 16px;
    font-weight: 700;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 300px;
  }
`;

export const Preco = styled.h3`
  display: flex;
  justify-content: space-between;

  margin-top: 40px;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 700;

  color: ${cores.bege};
`;

export const Button = styled.button`
  width: 100%;

  height: 24px;
  font-size: 14px;
  font-weight: 700;

  background-color: ${cores.bege};
  color: ${cores.vermelho};

  border: none;
  cursor: pointer;
`;
=======
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.8;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: var(--mainColor);
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0;
  z-index: 1;

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }
`

export const CartItem = styled.li`
  background-color: var(--headerColor);
  padding: 8px 8px 12px 8px;
  display: flex;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    margin-right: 8px;
    object-fit: cover;
  }

  h3 {
    color: var(--mainColor);
    font-size: 18px;
    font-weight: 900;
    line-height: 22px;
  }

  span {
    display: block;
    color: var(--mainColor);
    font-size: 14px;
    margin-top: 16px;
  }

  button {
    background-image: url(${trashcan});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const TotalContainer = styled.div`
  color: var(--headerColor);
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const CheckoutContainer = styled.div`
  color: var(--headerColor);

  h3 {
    font-size: 16px;
    font-weight: bold;
    line-height: 18px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-top: 16px;
  }

  .margin-top {
    margin-top: 24px;
  }

  button {
    margin-top: 8px;
  }
`

export const InputGroup = styled.div<InputProps>`
  display: block;
  margin-top: 8px;

  label {
    font-size: 14px;
    font-weight: bold;
    line-height: 16px;
  }

  input {
    display: block;
    margin-top: 8px;
    background-color: var(--headerColor);
    border: 1px solid var(--headerColor);
    width: ${(props) => props.width};
    padding: 7px;
    color: var(--gray);
    font-size: 14px;
    font-weight: bold;
  }
`

export const ShortInputGroup = styled(InputGroup)<InputProps>`
  display: flex;
  column-gap: ${(props) => props.gap};

  ${InputGroup} {
    margin-top: 0;
  }
`

export const EmptyCart = styled.p`
  font-size: 14;
  color: var(--headerColor);
`
>>>>>>> dedc4134ec810872587acf0a8c76f598776266c2
