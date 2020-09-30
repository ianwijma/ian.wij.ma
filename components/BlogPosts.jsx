import Link from 'next/link';
export default function BlogPosts({ max = 5, blogPosts }) {
    if ( blogPosts.length > max) {
        blogPosts.reverse();
        blogPosts.length = max;
        blogPosts.reverse();
    }
    return (
        <div className="row">
            {blogPosts.map(blogPost => {
                return (
                    <div className="col-md-6 mb-4" key={blogPost.slug}>
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">{blogPost.title}</h3>
                                <p className="card-text">{blogPost.summary}</p>
                                <Link href={`blog/${blogPost.slug}`}>
                                    <a className="btn btn-dark">Post</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}