import {readdirSync, readFileSync} from 'fs';
import matter from 'gray-matter';
import {unified} from "unified";
import remarkHtml from 'remark-html';
import remarkParse from "remark-parse";
import remarkCodeHighlight from 'remark-highlight.js';

export function getProjectDir() {
    return `${process.cwd()}/content/project`;
}

export async function getProjectFileNames() {
    const path = getProjectDir();
    return readdirSync(path, 'utf-8');
}

export async function listProjects() {
    const projects = [];
    const fileNames = await getProjectFileNames();
    for (const fileName of fileNames) {
        const path = `${getProjectDir()}/${fileName}`
        const rawContent = readFileSync(path, 'utf-8');
        const {content, data} = matter(rawContent);

        const htmlContent = await unified()
            .use(remarkParse)
            .use(remarkCodeHighlight)
            .use(remarkHtml)
            .process(content.trim());

        projects.push({
            ...data,
            content: htmlContent.toString(),
        })
    }

    return projects;
}

export async function getProject(slug ) {
    const project = await listProjects();
    const filteredProjects = project.filter(project => project.slug === slug);
    if ( filteredProjects.length > 0 ) {
        return filteredProjects[0];
    }
    return null;
}
