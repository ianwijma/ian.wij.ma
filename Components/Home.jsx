import React, { Component } from 'react'

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        const { config, blogPosts } = this.props;
        const { firstName, lastName } = config;

        const postItems = blogPosts.map(post => (
            <li key={post.slug}>
                <a href={`blog/${post.slug}`}>{post.title}</a>
            </li>
        ))

        return (
            <div>
                <h1>{firstName} {lastName}</h1>
                <ul>
                    {postItems}
                </ul>
            </div>
        )
    }
}