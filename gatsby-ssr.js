/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */

// const React = require("react")
// const { Provider } = require("react-redux")

// const store = require("./src/stores")
// // console.log("ssr stores", store)

// exports.wrapRootElement = ({ element }) => {
//   console.log("el", element)
//   return (
//     <Provider store={store}>
//       {element}
//     </Provider>
//   )
// }

exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `ja` })
}