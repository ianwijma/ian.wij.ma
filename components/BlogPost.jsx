import React from "react";
import BlogTags from "./components/BlogTags";
import Header from "./layouts/Header";
import Paper from "./containers/Paper";
export default function BlogPost({ blog }) {
    const { title, content } = blog
    const right = (
        <BlogTags blog={blog}/>
    );
    return (
        <div>
            <Header suffix="blog post" linkHref={'/blog'}/>
            <Paper header={title} right={right} >
                {content}
            </Paper>
        </div>
    );
}
