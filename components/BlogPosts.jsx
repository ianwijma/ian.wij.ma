import React from "react";
import Link from 'next/link';
import BlogTags from "./components/BlogTags";
export default function BlogPosts({ limit = 6, blogPosts, showTags = true }) {
    if ( limit !== 0 && blogPosts.length > limit) {
        blogPosts.reverse();
        blogPosts.length = limit;
        blogPosts.reverse();
    }
    const tags = (blog) => {
        return (
            <div className="float-right">
                <BlogTags blog={blog} tagLimit={3} />
            </div>
        );
    };

    return (
        <div className="row">
            {blogPosts.map(blogPost => {
                return (
                    <div className="col-md-6 mb-4" key={blogPost.slug}>
                        <div className="card h-100">
                            <div className="card-body d-flex flex-column justify-content-between">
                                <h3 className="card-title">{blogPost.title}</h3>
                                <p className="card-text">{blogPost.summary}</p>
                                <div className="card-controls">
                                    <Link href={`blog/${blogPost.slug}`}>
                                        <a className="btn btn-dark">Post</a>
                                    </Link>
                                    {showTags ? tags(blogPost) : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
