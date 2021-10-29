module.exports = {
    pathPrefix: '/pvg75',
    plugins: [{
            resolve: 'gatsby-theme-photo-albums',
            options: {
                folderIconDir: 'folder-icon',
                photosPerPage: 100,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `PVG75`,
                short_name: `PVG75`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
                icon: `src/images/favicon.png`
            },
        },
    ],
}