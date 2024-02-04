import Link from 'next/link';
import {Glass} from "./containers/Glass";
export default function Projects({ limit = 6, projects }) {
    if ( limit !== 0 && projects.length > limit) {
        projects.reverse();
        projects.length = limit;
        projects.reverse();
    }
    return (
        <div className="grid md:grid-cols-2 gap-3">
            {projects.map(project => {
                return <Glass className="p-3 flex flex-column justify-content-between" key={project.slug}>
                    <h3 className='text-md text-white'>{project.title}</h3>
                    <p className='text-gray-100'>{project.summary}</p>
                    <div className='text-gray-100'>
                        <Link href={`project/${project.slug}`} className="btn btn-dark">
                            Post
                        </Link>
                    </div>
                </Glass>
            })}
        </div>
    )
}
