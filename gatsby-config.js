module.exports = {
  pathPrefix: '/photo-albums-demo',
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
