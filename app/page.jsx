import React from "react";
import Config from "../content/Config"
import Paper from "../components/containers/Paper";
import getPageContent from "../utilities/getPageContent";
import Header from "../components/layouts/Header";
import Projects from "../components/Projects";
import {listProjects} from "../utilities/Project";
import {listBlogPosts} from "../utilities/Blog";
import BlogPosts from "../components/BlogPosts";

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
            <a href="/ianwijma-resume.pdf" target="_blank" className="link-dark">
                Resume
            </a>
            &nbsp;
            |
            &nbsp;
            <a href="/project" className="link-dark">
                Projects
            </a>
            &nbsp;
            |
            &nbsp;
            <a href="/blog" className="link-dark">
                Blog posts
            </a>
        </div>
    );
    return (
        <div>
            <Header right={right} />
            <Paper header="Hey you!">
                {intro}
            </Paper>
            <Paper header="Skills">
                {skills}
            </Paper>
            <Paper header="Working experience">
                {work}
            </Paper>
            <Paper header="Education">
                {education}
            </Paper>
            <Paper header="Other">
                {other}
            </Paper>
            <Paper header="Projects">
                <Projects projects={projects}/>
            </Paper>
            <Paper header="Blog posts">
                <BlogPosts blogPosts={blogPosts}/>
            </Paper>
        </div>
    )
}
