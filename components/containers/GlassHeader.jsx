export function GlassHeader({children, className, right}) {
    return <>
        <h2 className={`text-4xl font-bold text-white row ${className}`}>
            <strong className="col-lg-8">
                {children}
            </strong>
            <span className="a4--header-right col-lg-4">
                {right}
            </span>
        </h2>
        <hr className='text-white'/>
    </>
}