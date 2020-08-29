import React from "react";
import Config from "../utilities/Config"
import { listBlogPosts } from "../utilities/Blog"
import Home from "../Components/Home";

export default function Index({ config, blogPosts }) {
    return <Home config={config} blogPosts={blogPosts} />
}

export async function getStaticProps () {
    return {
        props: {
            config: Config,
            blogPosts: await listBlogPosts(),
        }
    }
}