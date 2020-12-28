import React from "react";
import Config from "../../content/Config";
import {listBlogPosts} from "../../utilities/Blog";
import BlogOverview from "../../components/BlogOverview";

export default function Index({ blogPosts }) {
    return ( <BlogOverview blogPosts={blogPosts} /> )
}

export async function getStaticProps () {
    return {
        props: {
            config: Config,
            blogPosts: await listBlogPosts(),
        }
    }
}
