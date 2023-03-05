import { resolve } from 'path'
import { readFileSync } from "fs";
import {unified} from "unified";
import remarkParse from "remark-parse";
import remarkCodeHighlight from "remark-highlight.js";
import remarkHtml from "remark-html";

export default async function getPageContent( fileName ) {
    const path = resolve( 'content', 'pages', `${fileName}.md`);
    const content = readFileSync(path, 'utf-8');
    const htmlContent = await unified()
        .use(remarkParse)
        .use(remarkCodeHighlight) // highlight code block
        .use(remarkHtml)
        .process(content.trim()); // pass content to process

    return `<div>${htmlContent.toString()}</div>`;
}
