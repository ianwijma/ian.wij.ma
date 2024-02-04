import slugify from 'slugify'

export default function Paper ({children, header, right}) {
    const id = slugify(header, {
        lower: true,
        remove: /[^\w ]/,
    });
    return (
        <div className="a4 mb-5 shadow p-5" id={id}>
            <div className="a4--header">
                <h2 className="m-0 row">
                    <strong className="col-lg-8">
                        {header}
                    </strong>
                    <span className="a4--header-right col-lg-4">
                        {right}
                    </span>
                </h2>
            </div>
            { typeof children === 'string' ? <div className="a4--content" dangerouslySetInnerHTML={{__html:children}} /> : children}
        </div>
    )
}
