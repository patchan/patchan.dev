module.exports = {
  async rewrites() {
    return [
      {
        source: '/projects/:splat*',
        destination: 'https://patchan.github.io/:splat*',
      },
    ]
  },
}