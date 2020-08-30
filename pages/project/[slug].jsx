import React from "react";
import Config from "../../content/Config";
import {listProjects, getProject} from "../../utilities/Project";
import Header from "../../components/layouts/Header";
import Paper from "../../components/containers/Paper";

export default function Index({ blog: project }) {
    return (
        <div>
            <Header />
            <Paper header={project.title} >
                {project.content}
            </Paper>
        </div>
    );
}

export async function getStaticProps ( context ) {
    const { slug } = context.params;
    return {
        props: {
            config: Config,
            blog: await getProject( slug ),
        }
    }
}

export async function getStaticPaths () {
    const paths = await listProjects();
    return {
        paths: paths.map(params => { return { params } }),
        fallback: false,
    }
}