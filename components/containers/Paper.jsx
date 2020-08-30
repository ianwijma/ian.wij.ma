import Link from 'next/link'
import slugify from 'slugify'

export default function Paper ({children, header, right}) {
    const id = slugify(header, {
        lower: true,
        remove: /[^\w\ ]/,
    });
    return (
        <div className="a4 mb-5 shadow p-5" id={id}>
            <div className="a4--header">
                <h2>
                    <strong>
                        {header}
                    </strong>
                    <span className="a4--header-right float-right">
                        {right}
                    </span>
                </h2>
            </div>
            { typeof children === 'string' ? <div className="a4--content" dangerouslySetInnerHTML={{__html:children}} /> : children}

            <style jsx>
{`
   .a4 {
    margin: 0 auto;
    max-width: 950px;
   }
   .a4--header { 
    border-bottom: 1px dotted lightgray;
    padding-bottom: 10px;
    margin-bottom: 25px;
   }
`}
            </style>
        </div>
    )
}