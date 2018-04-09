import {post, put} from 'lib/request'

export const authenticate = async (email, password) => {
  try {
    const res = await post('/users/login', {
      user: {
        email,
        password
      }
    })
    return res.data
  } catch (error) {
    throw error.response && error.response.status === 404
      ? 'Ocorreu um erro desconhecido. Por favor, tente novamente.'
      : 'E-mail ou senha inválidos.'
  }
}

export const redefinePassword = async (email) => {
  try {
    const res = await post('/users/reset_password', {
      user: {
        email
      }
    })
    return res.data
  } catch (error) {
    throw error.response && error.response.status === 404
      ? 'Esse e-mail não está cadastrado.'
      : 'Ocorreu um erro desconhecido. Por favor, tente novamente.'
  }
}

export const resetPassword = async (password, reset_token) => {
  try {
    const res = await post('/users/redefine_password', {
      user: {
        reset_token,
        password
      }
    })
    return res.data
  } catch (error) {
    throw error.response && error.response.status === 404
      ? `Esse link não é válido.
      Verifique se você está usando corretamente o link que foi enviado para o seu e-mail.
      Se o erro persistir entre em contato com a gente.`
      : 'Ocorreu um erro desconhecido. Por favor, tente novamente.'
  }
}

export const confirmUser = async (token) => {
  try {
    const res = await put('/users/confirm', {
      user: {
        token
      }
    })
    return res
  } catch (error) {
    throw error.response && error.response.status === 404
      ? 'Esse link expirou.'
      : 'Ocorreu um erro desconhecido. Por favor, tente novamente.'
  }
}
