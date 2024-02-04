import React from "react";
import {listProjects, getProject} from "../../../utilities/Project";
import Header from "../../../components/layouts/Header";
import Paper from "../../../components/containers/Paper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default async function Project({ params }) {
    const { slug } = params;
    const { url, title, content } = await getProject(slug)
    const right = (
        <div className='float-right'>
            <a href={url} className="link-dark" target="_blank">
                <FontAwesomeIcon icon={faGithub} size='1x' />
            </a>
        </div>
    );
    return (
        <div>
            <Header suffix="project post" linkHref={'/project'}/>
            <Paper header={title} right={right}>
                {content}
            </Paper>
        </div>
    );
}

export async function generateStaticParams() {
    const projects = await listProjects();

    return projects.map(({ slug }) => ({ slug }));
}