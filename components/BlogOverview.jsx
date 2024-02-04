import React from "react";
import Header from "./layouts/Header";
import BlogPosts from "./BlogPosts";
import {GlassSection} from "./containers/GlassSection";
import {GlassHeader} from "./containers/GlassHeader";
export default function BlogOverview({ blogPosts }) {
    return (
        <div>
            <Header suffix="blog"/>
            <GlassSection>
                <GlassHeader>Posts</GlassHeader>
                <BlogPosts blogPosts={blogPosts} limit={0} />
            </GlassSection>
        </div>
    );
}
