import {readdir, readFile} from 'fs-extra';
import matter from 'gray-matter';
import unified from "unified";
import remarkHtml from 'remark-html';
import remarkParse from "remark-parse";
import remarkCodeHighlight from 'remark-highlight.js';

export function getBlogDir() {
    return `${process.cwd()}/content/blog`;
}

export async function getBlogFileNames() {
    const path = getBlogDir();
    return await readdir(path, 'utf-8');
}

const blogPosts = [];
export async function listBlogPosts() {
    if ( blogPosts.length === 0 ) {
        const fileNames = await getBlogFileNames();
        for (const fileName of fileNames) {
            const path = `${getBlogDir()}/${fileName}`
            const rawContent = await readFile(path, 'utf-8');
            const {content, data} = matter(rawContent);

            const htmlContent = await unified()
                .use(remarkParse)
                .use(remarkCodeHighlight) // highlight code block
                .use(remarkHtml)
                .process(content.trim()); // pass content to process

            blogPosts.push({
                ...data,
                content: htmlContent.toString(),
            })
        }
    }

    return blogPosts;
}

export async function getBlogPost( slug ) {
    const blogPosts = await listBlogPosts();
    const filteredBlogPosts = blogPosts.filter(post => post.slug === slug);
    if ( filteredBlogPosts.length > 0 ) {
        return filteredBlogPosts[0];
    }
    return null;
}