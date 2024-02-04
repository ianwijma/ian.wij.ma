export function Glass({children, className, ...props}) {
    return <div className={`bg-[rgba(255,255,255,0.2)] backdrop-filter backdrop-blur-lg shadow-md ${className}`} {...props}>
        {children}
    </div>
}