const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
      disable: process.env.NODE_ENV === 'development',
    },
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        config.node = { fs: 'empty' }

        return config
    }
})