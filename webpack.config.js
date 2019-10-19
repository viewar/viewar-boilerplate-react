const configViewAr = require('@viewar/webpack');
const merge = require('webpack-merge');

module.exports = async (...args) => {
  //! configViewAr has to be async
  const config = await configViewAr(...args);
  return merge(config, {
    //* overwrite or extend viewar default config
  });
};
