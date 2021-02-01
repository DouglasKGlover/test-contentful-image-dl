// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  plugins: [
    {
      use: "@gridsome/source-contentful",
      options: {
        space: "k6hp6eovbgoq", // required
        accessToken: "qBq8bMv8W8Q5gnjE6x8EmJ5QT9T39GHp4q_Vhz_PIpY", // required
        host: "cdn.contentful.com",
        environment: "master",
        typeName: "Contentful",
      },
    },
  ],
};
