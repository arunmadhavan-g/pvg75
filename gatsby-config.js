module.exports = {
  pathPrefix: '/pvg75',
  plugins: [
    {
      resolve: 'gatsby-theme-photo-albums',
      options: {
        folderIconDir: 'folder-icon',
        photosPerPage: 100,
      },
    },
  ],
}
