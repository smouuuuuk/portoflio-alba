/**
 * @type {import('next').NextConfig}
*/

const { i18n } = require('./next-i18next.config')

const nextConfig = {
  // output: 'export',
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
  images: {
    unoptimized: false,
  },

  i18n,
  reactStrictMode: true,

}

module.exports = nextConfig