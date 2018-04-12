import styled from 'styled-components'
import * as colors from 'constants/colors'
import {mobileMedia} from 'constants/media'

export default styled.div`
  background-color: ${colors.grayf0};
  min-height: 100vh;
  padding: 20px;
  position: relative;

  > p {
    color: ${colors.mediumDarkGray};
    font-size: 16px;

    > a {
      text-decoration: none;
      color: ${colors.red.medium};
    }

    &:last-of-type {
      text-transform: uppercase;
      font-weight: 600;
      font-size: 12px;
      margin-top: 66px;
    }
  }

  > h1 {
    color: ${colors.text};
    font-weight: 300;
  }

  > h2 {
    font-weight: bold;
    font-size: 90px;
    color: ${colors.mediumGray};
    position: absolute;
    right: 0;
    top: 0;
    margin: 20px 40px;
  }

  > *:not(h2) {
    max-width: calc(100% - 200px);
  }

  @media ${mobileMedia} {
    > *:not(h2) {
      max-width: none;
    }

    > h1 {
      margin-top: 240px;
    }
    > h2 {
      font-size: 70px;
      margin: 20px;
    }
  }
`
