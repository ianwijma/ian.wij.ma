export function GlassContent({children, className, ...props}) {
    return <div className={`md:text-xl text-gray-100 ${className}`} {...props}>
        { typeof children === 'string' ? <div dangerouslySetInnerHTML={{__html:children}} /> : children}
    </div>
}