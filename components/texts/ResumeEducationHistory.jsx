export function ResumeEducationHistory({
    children, className = '', style = {}, education, school, start, end = 'present'
}) {
    return <div className={className} style={style}>
        <h6 className='mb-2'>
            <span className='font-weight-bold'>{education}</span> from <span className='font-weight-bold'>{school}</span>
        </h6>
        <div className='mb-2'>
            In class: {start} - {end}
        </div>
        <div className='mb-2'>
            {children}
        </div>
    </div>
}
