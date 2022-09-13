module.exports = {
    siteMetadata: {
        title: `institutindonesia`,
        owner: `institutindonesia`,
        description: ` Asah Skillmu, Raih Masa Depanmu Bersama Kami, Segera belajar tentang ENGLISH dan TECHNOLOGY untuk mendapat skill baru.`,
        siteUrl: `https://www.institutindonesia.com`,
        social: {
            twitter: `institutindonesia`,
        },
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `institut indonesia`,
                short_name: `institut indonesia`,
                start_url: `/`,
                background_color: `#EAE8DC`,
                theme_color: `#BE2623`,
                display: `standalone`,
                icon: `src/images/icon.png`,
                cache_busting_mode: 'none',
                crossOrigin: `use-credentials`,
            },
        },
        {
            resolve: `gatsby-source-notion-api`,
            options: {
                token: `secret_YCo6m15yMIuNbWeJBgcCqe2T5ro9bHtv7jEIpGrlS2j`,
                databaseId: `9b9cfec5a6d54941b495952cd2ef73f5`,
                propsToFrontmatter: true,
                lowerTitleLevel: true,
            },
        },
        'gatsby-plugin-remove-serviceworker',
        'gatsby-plugin-next-seo',
        `gatsby-plugin-netlify-redirect`,
        // `gatsby-plugin-preact`,
        {
            resolve: 'gatsby-plugin-brotli',
            options: {
                extensions: ['css', 'html', 'js', 'svg', 'json']
            }
        },
        {
            resolve: `gatsby-plugin-portal`,
            options: {
                key: 'portal',
                id: 'portal',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-image`,
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /\.inline\.svg$/,
                    // include: /svg/,
                    // include: /images/,
                },
            },
        },
        //  'gatsby-plugin-optimize-svgs',
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        'gatsby-plugin-dark-mode',
        // {
        //     resolve: 'gatsby-plugin-mailchimp',
        //     options: {
        //         endpoint: 'https://muhzulzidan.us8.list-manage.com/subscribe/post?u=bd4720ee2c2e158659ad9a349&amp;id=ec322945ba',
        //         timeout: 3500,
        //     },
        // },
        {
            resolve: 'gatsby-plugin-minify-html',
            options: {
                debug: true,
            }
        },
        {
            resolve: `gatsby-plugin-netlify`,
            options: {
                headers: {
                    "/*": [
                        "Cache-Control : no-cache",
                    ],
                }, // option to add more headers. `Link` headers are transformed by the below criteria
                allPageHeaders: [
                    "Cache-Control : no-cache"
                ], // option to add headers for all pages. `Link` headers are transformed by the below criteria
                mergeSecurityHeaders: true, // boolean to turn off the default security headers
                mergeCachingHeaders: true, // boolean to turn off the default caching headers
                transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
                generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
            },
        },
        `gatsby-plugin-react-helmet`,
        // 'gatsby-plugin-remove-console',
        `@wardpeet/gatsby-image-nextgen`,
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                // printRejected: true,
                develop: true,
                ignore: ['/markdown.css', '/sound.css', 'prismjs/', 'docsearch.js/', "/scrollbar.scss", "/react-select.scss", "/search.scss"],
            }
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Lato`,
                    `Inter\:400,700,800,900`
                ],
                display: 'swap'
            }
        }
        // {
        //     resolve: `gatsby-plugin-subfont`,
        //     options: {
        //         fallback: false,
        //         inlineFonts: true,
        //         debug: true,
        //     },
        // },
    ]
}