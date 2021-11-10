import * as React from "react"
import Layout from "../components/Layout"
import { Provider, darkTheme } from '@adobe/react-spectrum'
import "./index.scss"

// markup
const IndexPage = () => (
  <Provider theme={darkTheme} height={`100%`}>
    <Layout />
  </Provider>
)

export default IndexPage
