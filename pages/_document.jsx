import Document, {Html, Head, Main, NextScript} from 'next/document'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin='true' />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
                        rel="stylesheet" />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                    <SpeedInsights />
                    <Analytics />
                </body>
            </Html>
        )
    }
}
