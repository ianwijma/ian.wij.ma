import {readdirSync, readFileSync} from 'fs';
import matter from 'gray-matter';
import unified from "unified";
import remarkHtml from 'remark-html';
import remarkParse from "remark-parse";
import remarkCodeHighlight from 'remark-highlight.js';
import { clone } from 'lodash';

export function getProjectDir() {
    return `${process.cwd()}/content/project`;
}

export async function getProjectFileNames() {
    const path = getProjectDir();
    return readdirSync(path, 'utf-8');
}

const projects = [];
export async function listProjects() {
    if ( projects.length === 0 ) {
        const fileNames = await getProjectFileNames();
        for (const fileName of fileNames) {
            const path = `${getProjectDir()}/${fileName}`
            const rawContent = readFileSync(path, 'utf-8');
            const {content, data} = matter(rawContent);

            const htmlContent = await unified()
                .use(remarkParse)
                .use(remarkCodeHighlight) // highlight code block
                .use(remarkHtml)
                .process(content.trim()); // pass content to process

            projects.push({
                ...data,
                content: htmlContent.toString(),
            })
        }
    }

    return clone( projects );
}

export async function getProject(slug ) {
    const project = await listProjects();
    const filteredProjects = project.filter(project => project.slug === slug);
    if ( filteredProjects.length > 0 ) {
        return filteredProjects[0];
    }
    return null;
}
