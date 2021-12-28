const axios = require('axios')

const BASE_URL = 'http://localhost:3000'

const login = async (data) => {
  let result = await axios.post(BASE_URL + '/login', data)
  return result
}

const register = async (data) => {
  let result = await axios.post(BASE_URL + '/register', data)
  return result
}

module.exports = { login, register }