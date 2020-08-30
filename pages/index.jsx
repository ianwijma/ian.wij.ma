import React from "react";
import Head from "next/head";
import Config from "../content/Config"
import Paper from "../components/containers/Paper";
import getPageContent from "../utilities/getPageContent";
import Header from "../components/layouts/Header";
import Projects from "../components/Projects";
import {listProjects} from "../utilities/Project";

export default function Index({ intro, work, education, other, projects }) {
    return <div>
        <Head>
            <title>Ian Wijma</title>
        </Head>
        <Header />
        <Paper header="Hey you!">
            {intro}
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
    </div>
}

export async function getStaticProps () {
    return {
        props: {
            config: Config,
            intro: await getPageContent('home/intro'),
            work: await getPageContent('home/work'),
            other: await getPageContent('home/other'),
            education: await getPageContent('home/education'),
            projects: await listProjects(),
        }
    }
}