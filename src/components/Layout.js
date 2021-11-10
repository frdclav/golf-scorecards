/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
//  import { useStaticQuery, graphql } from "gatsby"
import { Link, Header, Heading, Content, Footer, Flex, View, Well, Divider } from '@adobe/react-spectrum'


//  import Header from "./header"
//  import "./layout.css"
//GOLFBERT API CALL
const getScorecard = () => {
    // scorecard api call here
    // for now return static json
    return {
        "courseid": 4803,
        "holeteeboxes": [
            {
                "holeid": 25489,
                "holenumber": 1,
                "color": "Blue",
                "length": 347,
                "par": 4,
                "handicap": 15,
                "teeboxtype": "Championship"
            },
            {
                "holeid": 25489,
                "holenumber": 1,
                "color": "White",
                "length": 329,
                "par": 4,
                "handicap": 15,
                "teeboxtype": "Men's"
            },
            {
                "holeid": 25506,
                "holenumber": 18,
                "color": "Red",
                "length": 464,
                "par": 5,
                "handicap": 2,
                "teeboxtype": "Women's"
            }
        ],
        "coursename": "Riverbend Golf Complex"
    }
}

const Layout = ({ children }) => {
    //    const data = useStaticQuery(graphql`
    //      query SiteTitleQuery {
    //        site {
    //          siteMetadata {
    //            title
    //          }
    //        }
    //      }
    //    `)

    return (
        // <Provider theme={defaultTheme}>

        <Flex direction="column" alignItems="center" gap="size-100" width="100%" height="100%">

            <View
                padding="size-250"
                gap="size-100"
            >
                <Header>
                    <Heading level={3}>golf-scorecard</Heading>
                </Header>
                <Divider size="S" />
                <p> We are going to be working on a little golfscore card thing here: </p>
                <Content>
                    <main>{children}</main>
                    <Well>
                        <pre>{JSON.stringify(getScorecard(), null, '\t')}</pre>
                    </Well>
                    <Footer
                    // style={{
                    //     marginTop: `2rem`,
                    // }}
                    >
                        © {new Date().getFullYear()}, built by
                        {` `}
                        <Link>
                            <a href="https://frdc.info/">frdc.info</a>
                        </Link>
                        {` `}
                        with
                        {` `}
                        <Link>
                            <a href="https://www.gatsbyjs.com">gatsby</a>
                        </Link>
                        {` `}
                        and
                        {` `}
                        <Link>
                            <a href="https://react-spectrum.adobe.com">react spectrum</a>
                        </Link>
                        {` `}
                        and
                        {` `}
                        <Link>
                            <a href="https://golfbert.com/api">golfbert api</a>
                        </Link>
                    </Footer>
                </Content>


            </View>

        </Flex>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout