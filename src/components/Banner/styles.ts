<<<<<<< HEAD
import styled from "styled-components";
import fundo from "../../assets/images/fundo.png";
import { breakpoints, cores } from "../../Global";

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  height: 384px;
  margin-bottom: 80px;

  background-image: url(${fundo});
  background-size: cover;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
=======
import styled from 'styled-components'

export const BannerSubtitle = styled.h3`
  font-size: 32px;
  line-height: 38px;
  font-weight: 100;
  position: relative;
  color: rgba(255, 255, 255, 0.7);
`

export const BannerTitle = styled.h2`
  font-size: 32px;
  line-height: 38px;
  font-weight: 900;
  position: relative;
  color: #ffffff;
`

export const BannerWrapper = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  height: 280px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
>>>>>>> dedc4134ec810872587acf0a8c76f598776266c2
  }
`;

<<<<<<< HEAD
export const H1 = styled.h1`
  text-align: center;

  font-weight: 900;
  width: 539px;
  height: 84px;
  font-size: 36px;

  color: ${cores.vermelho};

  @media (max-width: ${breakpoints.desktop}) {
    width: 359px;
=======
  ${BannerTitle} {
    margin-top: 180px;
  }

  ${BannerSubtitle} {
    top: 24px;
>>>>>>> dedc4134ec810872587acf0a8c76f598776266c2
  }
`;
