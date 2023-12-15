/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    async redirects(){
      return [
        {
          source: '/perguntas',
          destination: '/faq/',
          permanent: true,
        },
      ]
    }
   
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
   
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
   
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
  }
   
  module.exports = nextConfig