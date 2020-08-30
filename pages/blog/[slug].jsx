import React from "react";
import Config from "../../content/Config";
import {getBlogPost, listBlogPosts} from "../../utilities/Blog";
import Header from "../../components/layouts/Header";
import Paper from "../../components/containers/Paper";

export default function Index({ blog }) {
    return (
        <div>
            <Header suffix="blog"/>
            <Paper header={blog.title} >
                {blog.content}
            </Paper>
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