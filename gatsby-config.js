module.exports = {
  siteMetadata: {
    title: `Digital Fortress`,
    description: `Now test your investigation skills and compete with your friends.`,
    author: `@romitkarmakar`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `screencast quiz`,
        short_name: `screencast`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'quiz.nitdgplug.org',
        protocol: "https",
        hostname: "quiz.nitdgplug.org",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Digital Fortress`,
        short_name: `digitalfortress`,
        description: `Quiz to test your skills and knowledge.`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
        cache_busting_mode: `name`,
        crossOrigin: `anonymous`
      },
    },
    `gatsby-plugin-offline`
  ],
}
