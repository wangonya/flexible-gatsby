module.exports = {
  siteMetadata: {
    title: `Flexible Gatsby`,
    description: `I am a web developer focusing on front-end development. Always hungry to keep learning.`,
    author: `David Freeman`,
    siteUrl: `https://github.com/wangonya/flexible-gatsby`,
    social: {
      twitter: `wang0nya`,
      facebook: ``,
      github: `wangonya`,
      linkedin: `wangonya`,
      email: `kwangonya@gmail.com`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 970,
	      withWebp: true,
	      withAvif: true,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `warn`,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `files`,
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // uncomment this and input the trackingId to enable google analytics
    // {
    // resolve: `gatsby-plugin-google-analytics`,
    // options: {
    // trackingId: `ADD YOUR TRACKING ID HERE`,
    // },
    // },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `flexible-gatsby-starter`,
        short_name: `flexible-gatsby`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./static/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
}
