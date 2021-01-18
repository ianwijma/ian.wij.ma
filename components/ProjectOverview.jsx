import React from "react";
import Header from "./layouts/Header";
import Paper from "./containers/Paper";
import Projects from "./Projects";
export default function ProjectOverview({ projects }) {
    return (
        <div>
            <Header suffix="projects"/>
            <Paper header={'Posts'} >
                <Projects projects={projects} limit={0} />
            </Paper>
        </div>
    );
}
