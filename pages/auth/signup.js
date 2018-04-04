import {Component, Fragment} from 'react'

import Layout from 'components/shared/Shell'
import Form from 'components/shared/Common/Form'
import Errors from 'components/shared/Common/Errors'
import EmCasaButton from 'components/shared/Common/Buttons'
import {getCookie, removeCookie} from 'lib/session'
import {signUp, redirectIfAuthenticated} from 'lib/auth'
import _ from 'lodash'

export default class Signup extends Component {
  state = {
    errors: [],
    loading: false,
    data: {}
  }

  static getInitialProps(ctx) {
    if (redirectIfAuthenticated(ctx)) {
      return {}
    } else {
      const success = getCookie('success', ctx.req)

      if (success) {
        removeCookie('success')
      }
      return {
        success
      }
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.setState({errors: [], loading: true})
    const {url} = this.props

    const name = e.target.elements.name.value
    const email = e.target.elements.email.value
    const password = e.target.elements.password.value
    try {
      let data = await signUp(name, email, password, url)
      this.setState({data})
    } catch (e) {
      const errors = _.isArray(e)
        ? e
        : [e.data ? _.flattenDeep(Object.values(e.data.errors)) : e]
      this.setState({errors, loading: false})
    }
  }

  render() {
    const {errors, loading, data} = this.state

    return (
      <Layout>
        <Form onSubmit={this.handleSubmit}>
          {data.name ? (
            <Fragment>
              <p>{`${_.capitalize(
                data.name.split(' ')[0]
              )}, enviamos um e-mail para você confirmar seu cadastro.`}</p>
            </Fragment>
          ) : (
            <Fragment>
              <h1>Cadastre-se</h1>
              <input type="text" placeholder="Nome" name="name" />
              <input type="email" placeholder="Email" name="email" />
              <input type="password" placeholder="Senha" name="password" />
              <EmCasaButton disabled={loading} full type="submit">
                {loading ? 'Aguarde...' : 'Enviar'}
              </EmCasaButton>
              <Errors errors={errors} />
            </Fragment>
          )}
        </Form>
      </Layout>
    )
  }
}
