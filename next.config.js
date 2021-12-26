module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/breakingBad',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
}
