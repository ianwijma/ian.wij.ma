import React from "react";
import Config from "../../content/Config";
import {getBlogPost, listBlogPosts} from "../../utilities/Blog";
import BlogPost from "../../components/BlogPost";

export default function Index({ blog }) {
    return ( <BlogPost blog={blog}/> )
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
