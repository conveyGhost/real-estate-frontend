import {Component} from 'react'

import {isAuthenticated} from 'lib/auth'
import Layout from 'components/shared/Shell'
import Error from 'components/shared/Shell/Error'
import Link from 'next/link'

export default class ErrorPage extends Component {
  static getInitialProps({err, res, ...ctx}) {
    if (err && err.response) {
      res.statusCode = err.response.status
    }
    return {
      err,
      statusCode: res.statusCode,
      authenticated: isAuthenticated(ctx)
    }
  }

  get title() {
    const {err, statusCode} = this.props

    switch (statusCode) {
      case 404:
        return 'Página não encontrada'
      case 500:
        return 'Internal Server Error'
      default:
        return err ? err.message : ''
    }
  }

  get message() {
    const {statusCode} = this.props

    switch (statusCode) {
      case 404:
        return 'O link que você clicou pode estar quebrado ou a página pode ter sido removida.'
      default:
        return null
    }
  }

  render() {
    const {authenticated, statusCode} = this.props
    return (
      <Layout errorCode={statusCode} authenticated={authenticated}>
        <Error>
          <h1>{this.title}</h1>
          <h2>{statusCode}</h2>
          <p>{this.message}</p>
          <p>
            Visite nossa <Link href="/">página inicial</Link> ou entre em&nbsp;
            <Link href="mailto:contato@emcasa.com">contato</Link> com a gente
          </p>
        </Error>
      </Layout>
    )
  }
}
