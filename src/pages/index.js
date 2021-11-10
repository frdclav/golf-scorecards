import * as React from "react"
import Layout from "../components/Layout"
import { Provider, defaultTheme } from '@adobe/react-spectrum'
import "./index.scss"

// markup
const IndexPage = () => (
  <Provider theme={defaultTheme} height={`100%`}>
    <Layout />
  </Provider>
)

export default IndexPage
