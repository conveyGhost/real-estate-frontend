import { get } from 'lib/request'

export const searchText = async (searchString, jwt) => {
  try {
    const response = await get('/search', jwt, searchString)
    return response
  } catch (error) {
    return error.response && error.response.status === 422
      ? error.response
      : 'Unknown error. Please try again.'
  }
}

