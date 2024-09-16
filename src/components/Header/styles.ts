import styled from 'styled-components'

import backgroundImage from '../../assets/images/header-vector.svg'
import { Link } from 'react-router-dom'
import { breakpoints } from '../../styles'

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
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const PageTitle = styled(Link)`
  text-decoration: none;
  color: var(--mainColor);
`
