import React from 'react'
import Link from 'next/link'

import {mobileMedia} from 'constants/media'
import {canEdit} from 'permissions/listings-permissions'

import ListingTable from './Table'

class TextContainer extends React.Component {
  render() {
    const {listing, currentUser} = this.props

    return (
      <div className="text-container">
        <div className="description">{listing.description}</div>

        <ListingTable listing={listing} />

        <div className="link-container">
          {canEdit(currentUser, listing) && (
            <Link
              href={`/listings/edit?id=${listing.id}`}
              as={`/imoveis/${listing.id}/editar`}
            >
              <a className="btn gray cancel-listing-nav">Editar</a>
            </Link>
          )}

          <Link
            href={`/listings/show?id=${listing.id}`}
            as={`/imoveis/${listing.id}`}
          >
            <a className="btn">Ver Detalhes</a>
          </Link>
        </div>

        <style jsx>{`
          .text-container {
            float: left;
            margin-left: 20px;
            width: calc(100% - 340px);
          }

          div.description {
            font-size: 14px;
            margin: 20px 10px 0;
          }

          .link-container {
            align-items: center;
            display: flex;
            float: right;
            .btn {
              margin: 14px 14px 14px 0px;
            }
          }

          @media ${mobileMedia} {
            .text-container {
              margin-left: 0;
              width: 100%;
            }

            a.btn {
              margin: 10px 10px 30px;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default TextContainer
