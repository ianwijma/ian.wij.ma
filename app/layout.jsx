import '../public/global.css'
import '../public/bootstrap.css'
import '../public/custom.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin='true' />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
                rel="stylesheet" />
        </head>
        <body
            className="flex flex-col min-h-screen bg-gradient-to-r from-green-400 to-purple-500 bg-fixed"
            style={{
                backgroundImage: "linear-gradient(45deg, rgba(52, 211, 153, 1) 0%, rgba(128, 90, 213, 1) 100%)",
            }}>
            {children}
            <SpeedInsights />
            <Analytics />
        </body>
        </html>
    )
}