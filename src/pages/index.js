import * as React from "react"
import Layout from "../components/Layout"
import { SSRProvider, Provider, darkTheme } from '@adobe/react-spectrum'
import "./index.scss"

// markup
const IndexPage = () => (
  <SSRProvider>
    <Provider theme={darkTheme} height={`100%`}>
      <Layout />
    </Provider>
  </SSRProvider>
)

export default IndexPage
