import {readdirSync, readFileSync} from 'fs';
import matter from 'gray-matter';
import {unified} from "unified";
import remarkHtml from 'remark-html';
import remarkParse from "remark-parse";
import remarkCodeHighlight from 'remark-highlight.js';
import slugify from "slugify";

export function getBlogDir() {
    return `${process.cwd()}/content/blog`;
}

export async function getBlogFileNames() {
    const path = getBlogDir();
    return readdirSync(path, 'utf-8');
}

const blogPosts = [];
export async function listBlogPosts() {
    if ( blogPosts.length === 0 ) {
        const fileNames = await getBlogFileNames();
        for (const fileName of fileNames) {
            const path = `${getBlogDir()}/${fileName}`
            const rawContent = readFileSync(path, 'utf-8');
            const {content, data} = matter(rawContent);

            const htmlContent = await unified()
                .use(remarkParse)
                .use(remarkCodeHighlight) // highlight code block
                .use(remarkHtml)
                .process(content.trim()); // pass content to process

            const { tags, ...blog} = data;
            blogPosts.push({
                ...blog,
                tags: prepareTags(tags),
                content: htmlContent.toString(),
            })
        }
    }

    return blogPosts;
}

export async function getBlogPost( blogSlug ) {
    const blogPosts = await listBlogPosts();
    const filteredBlogPosts = blogPosts.filter(({slug}) => slug === blogSlug);
    if ( filteredBlogPosts.length > 0 ) {
        return filteredBlogPosts[0];
    }
    return null;
}

function prepareTags(tags = []) {
    return tags
        .split(',')
        .map(tag => tag.trim())
        .map(tag => {return {
            name: tag,
            slug: slugify(tag),
        }})
}
