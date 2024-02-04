import React from "react";
import {listBlogPosts} from "../../utilities/Blog";
import BlogOverview from "../../components/BlogOverview";

export default async function Page() {
    const blogPosts = await listBlogPosts();

    return ( <BlogOverview blogPosts={blogPosts} /> )
}
