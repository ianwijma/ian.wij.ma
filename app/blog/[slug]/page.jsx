import React from "react";
import {getBlogPost, listBlogPosts} from "../../../utilities/Blog";
import Header from "../../../components/layouts/Header";
import {GlassSection} from "../../../components/containers/GlassSection";
import {GlassHeader} from "../../../components/containers/GlassHeader";
import {GlassContent} from "../../../components/containers/GlassContent";
import BlogTags from "../../../components/components/BlogTags";

export default async function Index({ params }) {
    const { slug } = params
    const { title, content, tags } = await getBlogPost(slug)
    const right = (
        <BlogTags tags={tags}/>
    );
    return (
        <div>
            <Header suffix="project post" linkHref={'/project'}/>
            <GlassSection header={title} right={right}>
                <GlassHeader right={right}>{title}</GlassHeader>
                <GlassContent>{content}</GlassContent>
            </GlassSection>
        </div>
    );
}

export async function generateStaticParams() {
    const blogPosts = await listBlogPosts();

    return blogPosts.map(({ slug }) => ({ slug }));
}