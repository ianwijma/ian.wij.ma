import React from "react";
import Config from "../../content/Config";
import {listProjects, getProject} from "../../utilities/Project";
import Header from "../../components/layouts/Header";
import Paper from "../../components/containers/Paper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Project({ project }) {
    const right = (
        <div>
            <a href={project.url} className="link-dark" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
    );
    return (
        <div>
            <Header suffix="project post" linkHref={'/project'}/>
            <Paper header={project.title} right={right}>
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
            project: await getProject( slug ),
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
