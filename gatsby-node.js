/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const Dotenv = require('dotenv-webpack');

exports.onCreateWebpackConfig = ({ actions, stage }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          plugins: [
            new Dotenv()
          ],
          rules: [
            {
              test: /mapbox-gl/,
              use: ['null-loader']
            },
          ],
        }
      })
    }
  };
