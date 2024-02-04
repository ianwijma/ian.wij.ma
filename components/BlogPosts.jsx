import React from "react";
import Link from 'next/link';
import BlogTags from "./components/BlogTags";
import {Glass} from "./containers/Glass";

export default function BlogPosts({ limit = 6, blogPosts, showTags = true }) {
    if ( limit !== 0 && blogPosts.length > limit) {
        blogPosts.reverse();
        blogPosts.length = limit;
        blogPosts.reverse();
    }
    const tags = ({ tags }) => {
        return (
            <div className="float-right">
                <BlogTags tags={tags} tagLimit={2} />
            </div>
        );
    };

    return (
        <div className="grid md:grid-cols-2 gap-3">
            {blogPosts.map(blogPost => {
                return <Glass className="p-3 flex flex-column justify-content-between" key={blogPost.slug}>
                    <h3 className='text-md text-white'>{blogPost.title}</h3>
                    <p className='text-gray-100'>{blogPost.summary}</p>
                    <div className='text-gray-100'>
                        <Link href={`blog/${blogPost.slug}`} className="btn btn-dark">
                            Post
                        </Link>
                        {showTags ? tags(blogPost) : ''}
                    </div>
                </Glass>
            })}
        </div>
    )
}
