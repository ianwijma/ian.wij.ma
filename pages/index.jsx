import React from "react";
import Head from "next/head";
import Config from "../content/Config"
import Paper from "../components/containers/Paper";
import getPageContent from "../utilities/getPageContent";
import Header from "../components/layouts/Header";
import Projects from "../components/Projects";
import {listProjects} from "../utilities/Project";
import {listBlogPosts} from "../utilities/Blog";
import BlogPosts from "../components/BlogPosts";

export default function Index({ intro, skills, work, education, other, projects, blogPosts }) {
    const right = (
        <div>
            <a href="#projects" className="link-dark">
                Projects
            </a>
            &nbsp;
            |
            &nbsp;
            <a href="#blog-posts" className="link-dark">
                Blog posts
            </a>
        </div>
    );
    return <div>
        <Head>
            <title>Ian Wijma</title>
        </Head>
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
}

export async function getStaticProps () {
    return {
        props: {
            config: Config,
            intro: await getPageContent('home/intro'),
            skills: await getPageContent('home/skills'),
            work: await getPageContent('home/work'),
            other: await getPageContent('home/other'),
            education: await getPageContent('home/education'),
            projects: await listProjects(),
            blogPosts: await listBlogPosts(),
        }
    }
}