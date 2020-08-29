import { readdir } from 'fs-extra';

export async function listBlogPosts () {
    const path = `${process.cwd()}/content/blog`;
    const files = await readdir( path, 'utf-8' );
    const mdFiles = files
        .filter(file => file.endsWith( '.md' ));


}