import {Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Layout from 'components/shared/Shell'
import {getUser, getCurrentUser} from 'services/user-api'
import {redirectIfNotAuthenticated, getJwt} from 'lib/auth'

export default class User extends Component {
  static propTypes = {
    user: PropTypes.object,
    authenticated: PropTypes.bool,
  }

  static async getInitialProps(ctx) {
    if (redirectIfNotAuthenticated(ctx)) {
      return {}
    }

    const id = ctx.query && ctx.query.id
    const jwt = getJwt(ctx)
    const res = await (id ? getUser(jwt, id) : getCurrentUser(jwt))

    return {
      user: res.data.data,
      authenticated: !!jwt,
      query: !!id,
    }
  }

  render() {
    const {authenticated, url, user, query} = this.props

    if (!user) {
      return null
    }

    return (
      <Layout>
        <h1>{user.name}</h1>
        <p>Email: {user.email}</p>
      </Layout>
    )
  }
}
