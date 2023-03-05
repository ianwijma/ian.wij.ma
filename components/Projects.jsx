import Link from 'next/link';
export default function Projects({ limit = 6, projects }) {
    if ( limit !== 0 && projects.length > limit) {
        projects.reverse();
        projects.length = limit;
        projects.reverse();
    }
    return (
        <div className="row">
            {projects.map(project => {
                return (
                    <div className="col-md-6 mb-4" key={project.slug}>
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-text">{project.summary}</p>
                                <Link href={`project/${project.slug}`} className="btn btn-dark">
                                    Project
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
