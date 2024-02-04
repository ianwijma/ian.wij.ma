import React from "react";
import {listProjects, getProject} from "../../../utilities/Project";
import Header from "../../../components/layouts/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {GlassSection} from "../../../components/containers/GlassSection";
import {GlassHeader} from "../../../components/containers/GlassHeader";
import {GlassContent} from "../../../components/containers/GlassContent";

export default async function Project({ params }) {
    const { slug } = params;
    const { url, title, content } = await getProject(slug)
    const right = (
        <div className='float-right'>
            <a href={url} className="link-light" target="_blank">
                <FontAwesomeIcon icon={faGithub} size='1x' />
            </a>
        </div>
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
    const projects = await listProjects();

    return projects.map(({ slug }) => ({ slug }));
}