import React from "react";
import Config from "../../utilities/Config";
import {getBlogPost, listBlogPosts} from "../../utilities/Blog";

export default function Index({ config, blog }) {
    return (
        <div>
            <h1>{blog.title}</h1>
        </div>
    );
}

export async function getStaticProps ( context ) {
    const { slug } = context.params;
    return {
        props: {
            config: Config,
            blog: await getBlogPost( slug ),
        }
    }
}

export async function getStaticPaths () {
    const paths = await listBlogPosts();
    return {
        paths: paths.map(params => { return { params } }),
        fallback: false,
    }
}