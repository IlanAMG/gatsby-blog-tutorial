module.exports = {
  siteMetadata: {
    title: `Blog`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Ilan Amzallag`,
    imageAuthor: `https://i.goopics.net/oPE2o.jpg`,
    descriptionAuthor: `Développeur Fullstack en formation, passionné, autodidacte, créatif. Premier blog en utilisant gatsby et graphql.`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { 
        name: `blog`,
        path: `${__dirname}/blog/` 
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-less',
      options: {
        modifyVars: require('./src/theme/antd.js'),
        // Needed to load antdesign less files
        javascriptEnabled: true,
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        // Activate less files
        style: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
