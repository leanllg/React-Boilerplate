const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // Extend it as you need.

  // For example, add typescript loader:
  config.module.rules.push(
    {
      test: /\.scss$/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 2,
          },
        },
		require.resolve('sass-loader')]
    });
  config.resolve.extensions.push('scss');

  return config;
};