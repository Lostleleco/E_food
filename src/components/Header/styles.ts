<<<<<<< HEAD
import { Link } from "react-router-dom";
import styled from "styled-components";
import fundo from "../../assets/images/fundo.png";
import { breakpoints, cores } from "../../Global";

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 166px;
  font-size: 18px;
  font-weight: 900;

  background-image: url(${fundo});
  background-size: cover;
  color: ${cores.vermelho};

  @media (max-width: ${breakpoints.desktop}) {
    padding: 24px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${breakpoints.tablet}) {
      flex-direction: column;
      gap: 16px;
    }
  }

  p {
    cursor: pointer;
  }
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  color: ${cores.vermelho};
`;
=======
import styled from 'styled-components'

import backgroundImage from '../../assets/images/header-vector.svg'
import { Link } from 'react-router-dom'

export const HeaderWrapper = styled.header`
  display: flex;
  background-color: var(--headerColor);
  background-image: url(${backgroundImage});
  background-size: cover;
  height: 186px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--mainColor);
    font-size: 18px;
    font-weight: 900;
    line-height: 21px;

    h4 {
      cursor: pointer;
    }
  }
`

export const PageTitle = styled(Link)`
  text-decoration: none;
  color: var(--mainColor);
`
>>>>>>> dedc4134ec810872587acf0a8c76f598776266c2
