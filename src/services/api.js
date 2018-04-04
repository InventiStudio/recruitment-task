import axios from 'axios'
import config from 'src/config'

export function createApi(baseURL = config.API_URL) {
  const instance = axios.create({ baseURL })

  instance.defaults.headers.common['Content-Type'] = 'application/json'
  instance.defaults.headers.post['Content-Type'] = 'application/json'
  instance.defaults.headers.patch['Content-Type'] = 'application/json'
  instance.defaults.headers.put['Content-Type'] = 'application/json'
  instance.defaults.headers.delete['Content-Type'] = 'application/json'

  return {
    async get(path, opts = {}) {
      try {
        return instance.get(path, opts)
      } catch (err) {
        throw err
      }
    },
    async post(path, body = {}) {
      try {
        return instance.post(path, JSON.stringify(body))
      } catch (err) {
        throw err
      }
    },
    async patch(path, body = {}) {
      try {
        return instance.patch(path, JSON.stringify(body))
      } catch (err) {
        throw err
      }
    },
    async delete(path, body = {}) {
      try {
        return instance.delete(path, JSON.stringify(body))
      } catch (err) {
        throw err
      }
    },
    setHeader(header, value) {
      instance.defaults.headers.common[header] = value
    },
  }
}

export default createApi()
