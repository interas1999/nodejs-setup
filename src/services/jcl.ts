import axios from 'axios'

export const jcl = axios.create({
  baseURL: 'http://138.204.221.94:6002/api'
})
