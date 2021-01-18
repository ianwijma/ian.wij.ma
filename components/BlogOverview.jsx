import React from "react";
import Header from "./layouts/Header";
import Paper from "./containers/Paper";
import BlogPosts from "./BlogPosts";
export default function BlogOverview({ blogPosts }) {
    return (
        <div>
            <Header suffix="blog"/>
            <Paper header={'Posts'} >
                <BlogPosts blogPosts={blogPosts} limit={0} />
            </Paper>
        </div>
    );
}
