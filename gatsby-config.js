const emoji = require("remark-emoji");

module.exports = {
  pathPrefix: "/evm-llvm-website",
  siteMetadata: {
    title: `EVM-LLVM`,
    description: ``,
    logoUrl: `https://user-images.githubusercontent.com/10556209/72843303-db7a3380-3c5f-11ea-9053-ea4eb8e17f23.png`,
    author: ``,
    menuLinks: [
      {
        name: 'home',
        link: '/',
        ignoreNextPrev: true
      },
      {
        name: 'Introduction',
        link: '/introduction'
      },
      {
        name: 'Build EVM-LLVM',
        link: '/building-evm-llvm'
      },
      {
        name: 'Compiling Smart Contracts',
        link: `/compiling-smart-contracts`
      },
      {
        name: 'Emitting Program Metadata',
        link: `/emitting-program-metadata`
      },
      {
        name: 'Function Layouts',
        link: `/function-layouts`
      },
      {
        name: 'Future Works',
        link: `/future-works`
      },
      {
        name: 'Handling EVM specific operations',
        link: `/handling-evm-specific-ops`
      },
      {
        name: 'Intrinsic Functions',
        link: `/intrinsic-functions`
      },
      {
        name: 'Language Frontend Integration',
        link: `/lang-frontend-integration`
      },
      {
        name: 'Running integrated tests in EVM evniorment',
        link: `/run-integrate-tests-in-evm-env`
      },
      {
        name: 'Stack & Memory management',
        link: `/stack-and-memory-management`
      },
      {
        name: 'The EVM Calling Conventions',
        link: `/the-evm-calling-conventions`
      },
      {
        name: 'Types and type conversions',
        link: `/types-and-type-conversions`
      }
    ],
    footerLinks: [
      {
        name: 'Github',
        link: 'https://github.com/etclabscore/evm_llvm'
      }
    ]
  },
  plugins: [
    "@etclabscore/gatsby-theme-pristine",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `evm-llvm-website`,
        short_name: `evm-llvm-website`,
        start_url: `/`,
        background_color: `transparent`,
        theme_color: `transparent`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    }
  ],
}
