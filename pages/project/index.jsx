import React from "react";
import Config from "../../content/Config";
import {listProjects} from "../../utilities/Project";
import ProjectOverview from "../../components/ProjectOverview";

export default function Index({ projects }) {
    return ( <ProjectOverview projects={projects} /> )
}

export async function getStaticProps () {
    return {
        props: {
            config: Config,
            projects: await listProjects(),
        }
    }
}
