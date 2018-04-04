const env = process.env.NODE_ENV

const config = {
  development: {
    API_URL: 'http://217.182.66.13:4000/',
  },
  production: {
    API_URL: '',
  },
  testing: {
    API_URL: '',
  },
}

export default config[env]
