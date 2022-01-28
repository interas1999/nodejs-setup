import axios from 'axios'

export const jca = axios.create({
  baseURL: 'http://138.204.221.94:6002/api'
})
