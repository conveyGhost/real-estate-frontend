import React from 'react'
import NumberFormat from 'react-number-format'

import * as colors from 'constants/colors'
import {mobileMedia} from 'constants/media'

export default class ListingCard extends React.Component {
  render() {
    const {handleOpenPopup} = this.props

    const {
      price,
      rooms,
      bathrooms,
      garage_spots,
      floor,
      area
    } = this.props.listing

    const price_per_square_meter = Math.floor(price / area)

    return (
      <div className="container">
        <span className="price">
          {price && price > 0 ? (
            <NumberFormat
              value={price}
              displayType={'text'}
              thousandSeparator={'.'}
              prefix={'R$'}
              decimalSeparator={','}
            />
          ) : (
            'Preço a definir'
          )}
        </span>

        <div>
          <div>
            <span>Dormitórios</span>
            <span>{rooms}</span>
          </div>
          <div>
            <span>Banheiros</span>
            <span>{bathrooms}</span>
          </div>
          <div>
            <span>N° Vagas</span>
            <span>{garage_spots}</span>
          </div>
          <div>
            <span>Andar</span>
            <span>{floor}</span>
          </div>
          <div>
            <span>Área</span>
            <span>{area}</span>
          </div>
          {price && price > 0 ? (
            <div>
              <span>Preço/m²</span>
              <span>
                <NumberFormat
                  value={price_per_square_meter || 0}
                  displayType={'text'}
                  thousandSeparator={'.'}
                  prefix={'R$'}
                  decimalSeparator={','}
                />
              </span>
            </div>
          ) : (
            ''
          )}

          <button className="green" onClick={handleOpenPopup}>
            Marcar Visita
          </button>
        </div>

        <style jsx>{`
          div.container {
            border: 1px solid ${colors.lightestGray};
            border-radius: 12px;
            box-shadow: 0 6px 16px 0 rgba(38, 38, 38, 0.15);
            float: right;
            padding: 24px;
            width: 260px;

            > div {
              border-top: 1px solid ${colors.lightestGray};
              margin-top: 20px;
              padding-top: 20px;
            }

            > div > div {
              align-items: center;
              display: flex;
              justify-content: space-between;
              padding: 3px 0;
              span {
                &:first-of-type {
                  color: ${colors.mediumDarkGray};
                  font-weight: 600;
                  font-size: 12px;
                  letter-spacing: 1px;
                  text-transform: uppercase;
                }
                &:last-of-type {
                  font-size: 15px;
                  font-weight: 300;
                }
              }
            }
          }

          span.price {
            font-size: 26px;
            font-weight: 300;
          }

          button {
            margin-top: 30px;
            width: 100%;
          }

          @media ${mobileMedia} {
            div.container {
              margin: 0 auto;
            }
          }
        `}</style>
      </div>
    )
  }
}
