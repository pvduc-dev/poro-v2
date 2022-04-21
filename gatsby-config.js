require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Pv Duc 's resume`,
    description: `Hello, i 'm Pv Duc. High level experience in web design and development knowledge, producing quality work.`,
    author: `pvduc`,
    siteUrl: process.env.GATSBY_SITE_URL,
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
      "trackingId": process.env.GA_TRACKING_ID
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "526870138820721",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    // "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": `${__dirname}/src/images/`
      },
      __key: "images"
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    `gatsby-plugin-dark-mode`
  ]
};
