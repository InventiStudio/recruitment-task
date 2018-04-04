const env = process.env.NODE_ENV

const config = {
  development: {
    API_URL: 'localhost:4000',
  },
  production: {
    API_URL: '',
  },
  testing: {
    API_URL: '',
  },
}

export default config[env]
