import React from "react";
import Config from "../content/Config"
import getPageContent from "../utilities/getPageContent";
import Header from "../components/layouts/Header";
import Projects from "../components/Projects";
import {listProjects} from "../utilities/Project";
import {listBlogPosts} from "../utilities/Blog";
import BlogPosts from "../components/BlogPosts";
import {GlassSection} from "../components/containers/GlassSection";
import {GlassHeader} from "../components/containers/GlassHeader";
import {GlassContent} from "../components/containers/GlassContent";

/** @type {import('next').Metadata} */
export const metadata = {
    title: 'Ian Wijma',
    description: 'My online space'
}

export default async function Page() {
    const { intro, skills, work, education, other, projects, blogPosts } = {
        config: Config,
        intro: await getPageContent('home/intro'),
        skills: await getPageContent('home/skills'),
        work: await getPageContent('home/work'),
        other: await getPageContent('home/other'),
        education: await getPageContent('home/education'),
        projects: await listProjects(),
        blogPosts: await listBlogPosts(),
    };


    const right = (
        <div>
            <a href="/ianwijma-resume.pdf" target="_blank" className="link-light">
                Resume
            </a>
            &nbsp;
            |
            &nbsp;
            <a href="/project" className="link-light">
                Projects
            </a>
            &nbsp;
            |
            &nbsp;
            <a href="/blog" className="link-light">
                Blog posts
            </a>
        </div>
    );
    return (
        <div>
            <Header right={right} />
            <div className='flex flex-column gap-5'>

                <GlassSection>
                    <GlassHeader>Hey you!</GlassHeader>
                    <GlassContent>{intro}</GlassContent>
                </GlassSection>
                <GlassSection>
                    <GlassHeader>Skills</GlassHeader>
                    <GlassContent>{skills}</GlassContent>
                </GlassSection>
                <GlassSection>
                    <GlassHeader>Working experience</GlassHeader>
                    <GlassContent>{work}</GlassContent>
                </GlassSection>
                <GlassSection>
                    <GlassHeader>Education</GlassHeader>
                    <GlassContent>{education}</GlassContent>
                </GlassSection>
                <GlassSection>
                    <GlassHeader>Other</GlassHeader>
                    <GlassContent>{other}</GlassContent>
                </GlassSection>
                <GlassSection>
                    <GlassHeader>Projects</GlassHeader>
                    <Projects projects={projects}/>
                </GlassSection>
                <GlassSection>
                    <GlassHeader>Blog posts</GlassHeader>
                    <BlogPosts blogPosts={blogPosts}/>
                </GlassSection>
            </div>
        </div>
    )
}
