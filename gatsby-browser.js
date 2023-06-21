/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

const React = require("react")
const { Provider } = require("react-redux")
const { LiffProvider } = require('react-liff')
const store = require("./src/stores")
console.log("brouser stores", store)

const liffId = "1661486792-V0xKPX9B"

exports.wrapRootElement = ({ element }) => {
    return (
        <Provider store={store.default}>
            <LiffProvider liffId={liffId}>
                {element}
            </LiffProvider>
        </Provider>
    )
}

const { createRoot } = require("react-dom/client")
const liff = require("@line/liff")
// exports.replaceHydrateFunction = () => {
//     return (element, container) => {

//         const root = ReactDOM.createRoot(container)
//         root.render(element)
//     }
// }


exports.replaceHydrateFunction = () => {
    return (element, container) => {
        liff
            // .init({ liffId: process.env.REACT_APP_LIFF_ID || '' })
            .init({ liffId: '1661486792-V0xKPX9B' })
            .then(() => {
                console.log('success')
                const root = createRoot(container)
                root.render(element)
            })
            .catch((e) => {
                alert(`LIFF error: ${e.message}`)
            })

    }
}


