module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.module.rules.push({
          test: /sharp/,
          use: 'null-loader',
        });
      }
  
      return config;
    },
};
