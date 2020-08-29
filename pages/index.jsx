import React from "react";
import Config from "../utilities/Config"
import { listBlogPosts } from "../utilities/Blog"

export default function Index({ config }) {
    const { firstName, lastName } = config;
    return (
        <div>
            <h1>{firstName} {lastName}</h1>
        </div>
    );
}

export async function getStaticProps () {


    return {
        props: {
            config: Config,
            blogPosts: await listBlogPosts(),
        }
    }
}

export async function getStaticPaths () {

}