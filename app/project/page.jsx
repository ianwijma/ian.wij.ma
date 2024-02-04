import React from "react";
import {listProjects} from "../../utilities/Project";
import ProjectOverview from "../../components/ProjectOverview";

export default async function Page() {
    const projects = await listProjects()

    return ( <ProjectOverview projects={projects} /> )
}
