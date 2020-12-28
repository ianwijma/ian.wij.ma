import React from "react";

export default function BlogTags({ blog, tagLimit = 0 }) {
    const { tags = [] } = blog;
    if ( tagLimit !== 0 && tags.length > tagLimit) {
        tags.length = tagLimit;
    }
    return (
        <div>
            {tags.map(({name, slug}) => (
                <span key={slug} className="badge bg-dark fs-6">{name}</span>
            ))}

            <style jsx>
                {`
   .badge + .badge {
    margin-left: 5px;
   }
`}
            </style>
        </div>
    )
}
