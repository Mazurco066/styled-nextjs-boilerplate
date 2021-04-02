// Dependencies
const { createSecureHeaders } = require('next-secure-headers')
const withPWA = require('next-pwa')

// Enviroment
const isProd = process.env.NODE_ENV === 'production'

// Exporting nextjs config
module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  // Secure headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders({
           contentSecurityPolicy: {
            directives: {
              baseUri: 'self',
              formAction: 'self',
              frameAncestors: true
            },
          },
          frameGuard: 'deny',
          noopen: 'noopen',
          nosniff: 'nosniff',
          xssProtection: 'sanitize',
          forceHTTPSRedirect: [ true, {
            maxAge: 60 * 60 * 24 * 360,
            includeSubDomains: true
          }],
          referrerPolicy: 'same-origin'
        })
      }
    ]
  }
})

  
