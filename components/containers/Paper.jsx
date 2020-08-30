import Link from 'next/link'

export default function Paper ({children, config}) {
    const { firstName, lastName } = config;
    return (
        <div className="a4 mb-5 shadow p-5">
            <div className="a4--header">
                <Link href="/">
                    <h2>
                        <strong>
                            {firstName} {lastName}
                        </strong>
                    </h2>
                </Link>
            </div>
            <div className="a4--content" dangerouslySetInnerHTML={{__html:children}}></div>

            <style jsx>
{`
   .a4 {
    margin: 0 auto;
    max-width: 800px;
    height: 950px;
    overflow: hidden;
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