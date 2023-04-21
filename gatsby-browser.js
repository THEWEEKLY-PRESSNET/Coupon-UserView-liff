/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

const React = require("react")
const { Provider } = require("react-redux")
const store = require("./src/stores")
// console.log("brouser stores", store)

exports.wrapRootElement = ({ element }) => {
    return (
        <Provider store={store.default}>
            {element}
        </Provider>
    )
}