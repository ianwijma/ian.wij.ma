import React from "react";
import Head from "next/head";
import Config from "../content/Config"
import Paper from "../components/containers/Paper";
import getPageContent from "../utilities/getPageContent";
import Header from "../components/layouts/Header";

export default function Index({ config, intro }) {
    return <div>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="./reset.css"/>
            <link rel="stylesheet"
                  href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
                  integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I"
                  crossOrigin="anonymous" />
        </Head>
        <Header />
        <Paper config={config}>
            {intro}
        </Paper>
        <style jsx>
{`
  * {
    font-family: 'Roboto Mono', monospace;
  }
`}
        </style>
    </div>
}

export async function getStaticProps () {
    return {
        props: {
            config: Config,
            intro: await getPageContent('home/intro'),
        }
    }
}