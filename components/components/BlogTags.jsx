import React from "react";

export default function BlogTags({ tags, tagLimit = 0 }) {
    if ( tagLimit !== 0 && tags.length > tagLimit) {
        tags.length = tagLimit;
    }
    return (
        <div className="badge-container">
            Tags:&nbsp;
            {tags.map(({name, slug}) => (
                <span key={slug} className="badge bg-dark">{name}</span>
            ))}
        </div>
    )
}
