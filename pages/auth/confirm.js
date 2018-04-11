import {Component} from 'react'
import Layout from 'components/shared/Shell'
import Errors from 'components/shared/Common/Errors'
import _ from 'lodash'
import {confirm} from 'lib/auth'
import Container from 'components/shared/Common/Container'
import Router from 'next/router'
import {setCookie} from 'lib/session'

export default class Confirm extends Component {
  state = {
    error: null
  }

  static async getInitialProps(ctx) {
    const {token} = ctx.req.params
    let user = {},
      errors = []

    try {
      user = await confirm(token)
    } catch (e) {
      errors = e
    }

    return {
      user,
      errors
    }
  }

  componentDidMount() {
    const {user} = this.props
    if (user.name) {
      setCookie('jwt', user.token)
      setCookie('currentUserId', user.id)
      setCookie('userRole', user.role)
      Router.replace('/?r=1')
    }
  }

  render() {
    const {error} = this.props

    return (
      <Layout>
        <Container>
          {error ? (
            <Errors errors={[error]} />
          ) : (
            <div>
              <p>Confirmando...</p>
            </div>
          )}
        </Container>
      </Layout>
    )
  }
}
