import React from 'react'
import NumberFormat from 'react-number-format'

import {mobileMedia} from 'constants/media'

export default class ListingTable extends React.Component {
  render() {
    const {listing} = this.props
    const price_per_square_meter = Math.floor(listing.price / listing.area)

    return (
      <table cellSpacing="0">
        <tbody>
          <tr>
            <td>Quartos</td>
            <td>{listing.rooms}</td>
            <td>Vagas Garagem</td>
            <td>{listing.garage_spots}</td>
          </tr>
          <tr>
            <td>Banheiros</td>
            <td>{listing.bathrooms}</td>
            <td>Andar</td>
            <td>{listing.floor}</td>
          </tr>
          <tr>
            <td>Área</td>
            <td>{listing.area}</td>
            <td>Preço/m²</td>
            <td>
              <NumberFormat
                value={price_per_square_meter}
                displayType={'text'}
                thousandSeparator={'.'}
                prefix={'R$'}
                decimalSeparator={','}
              />
            </td>
          </tr>
        </tbody>

        <style jsx>{`
          table {
            border-bottom: 1px solid #eee;
            font-size: 13px;
            margin: 20px 0 0;
            width: 100%;
          }

          table tr td {
            border-top: 1px solid #eee;
            padding: 4px 10px;
          }

          table tr td:nth-of-type(2n) {
            font-weight: bold;
            text-align: right;
          }

          table tr td:nth-of-type(2n-1) {
            color: #8c8c8c;
          }

          @media ${mobileMedia} {
            table {
              width: 100vw;
            }
          }
        `}</style>

        <style jsx global>{`
          @media ${mobileMedia} {
            .listings table {
              display: none;
            }
          }
        `}</style>
      </table>
    )
  }
}
