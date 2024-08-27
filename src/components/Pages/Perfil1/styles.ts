import styled from 'styled-components'
import { Cores } from '../../../styles'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${Cores.bege};
  height: 186px;
  top: -23px;
`
export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  display: block;
  margin: 0 auto;
  padding-bottom: 138px;
  padding-top: 63px;
`
export const Menu = styled.h3`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 900;
  size: 18px;
  line-height: 21.09px;
  align-items: center;
  padding: 64px;
  margin-right: 103px;
  color: ${Cores.escrita1};
  margin-left: 83px;
`
export const Fundo = styled.div<{ backgroundImage: string }>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 280px;
  padding-top: 26px;
`
export const Italiana = styled.h2`
  font-family: 'Roboto';
  font-weight: 100;
  font-size: 32px;
  line-height: 37.5px;
  color: ${Cores.CardF};
  margin-left: 170px;
`
export const Dolce = styled.h1`
  font-family: 'Roboto';
  font-weight: 900;
  font-size: 32px;
  line-height: 37.5px;
  color: ${Cores.CardF};
  margin-left: 38px;
  width: 676px;
  height: 33.25px;
  padding: 122px;
  left: 170px;
`

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-left: 17%;
  max-width: 1024px;
  margin-top: 50px;
`

export const Conteudo = styled.section`
  display: flex;
  flex-direction: column;

  width: 320px;
  height: 338px;

  padding: 8px;
  background-color: ${Cores.escrita1};

  img {
    width: 100%;
    height: 167px;
    align-items: center;
    margin-bottom: 16px;
  }
  h2 {
    width: 124px;
    height: 19px;
    text-align: left;
    font-family: 'Roboto';
    font-weight: 900;
    font-size: 16px;
    line-height: 18.75px;
    color: ${Cores.bege};
  }
  P {
    color: ${Cores.bege};
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 400;
  }
  button {
    background-color: ${Cores.bege};
    border: 1px solid ${Cores.CardF};
    color: ${Cores.botoes1};
    padding: 5px;
    font-size: 14px;
    line-height: 16.41px;
    align-items: center;
    cursor: pointer;
  }
`
