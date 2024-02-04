import React from "react";
import {getBlogPost, listBlogPosts} from "../../../utilities/Blog";
import BlogPost from "../../../components/BlogPost";

export default async function Index({ params }) {
    const { slug } = params
    const blog = await getBlogPost(slug)

    return <BlogPost blog={blog}/>;
}

export async function generateStaticParams() {
    const blogPosts = await listBlogPosts();

    return blogPosts.map(({ slug }) => ({ slug }));
}