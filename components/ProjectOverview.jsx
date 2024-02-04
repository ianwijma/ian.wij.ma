import React from "react";
import Header from "./layouts/Header";
import Projects from "./Projects";
import {GlassSection} from "./containers/GlassSection";
import {GlassHeader} from "./containers/GlassHeader";
export default function ProjectOverview({ projects }) {
    return (
        <div>
            <Header suffix="projects"/>
            <GlassSection>
                <GlassHeader>Projects</GlassHeader>
                <Projects projects={projects} limit={0} />
            </GlassSection>
        </div>
    );
}
