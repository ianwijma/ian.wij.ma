import React from "react";

export default function BlogTags({ blog, tagLimit = 0 }) {
    const { tags = [] } = blog;
    if ( tagLimit !== 0 && tags.length > tagLimit) {
        tags.length = tagLimit;
    }
    return (
        <div className="badge-container">
            Tags:&nbsp;
            {tags.map(({name, slug}) => (
                <span key={slug} className="badge bg-dark">{name}</span>
            ))}

            <style jsx>
                {`
   .badge + .badge {
    margin-left: 5px;
   }
   .badge-container {
     font-size: 18px;
   }
`}
            </style>
        </div>
    )
}
