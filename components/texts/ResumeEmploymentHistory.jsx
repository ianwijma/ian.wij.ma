/**
 *
 * @param children
 * @param className
 * @param style CSSProperties
 * @param role
 * @param company
 * @param start
 * @param end
 * @param responsibilities
 * @param technologies
 * @param achievements
 * @returns {JSX.Element}
 * @constructor
 */
export function ResumeEmploymentHistory({
    children, className = '', style = {}, role, company, start, end = 'present', responsibilities = [], technologies = [], achievements = []
}) {
    return <div className={className} style={style}>
        <h6 className='mb-2'>
            <span className='font-weight-bold'>{role}</span> at <span className='font-weight-bold'>{company}</span>
        </h6>
        <div className='mb-2'>
            Employment: {start} - {end}
        </div>
        <div className='mb-2'>
            {children}
        </div>
        <div className='font-weight-bold'>
            Responsibilities:
        </div>
        <ul>
            {responsibilities.map(responsibility => <li>{responsibility}</li>)}
        </ul>
        <div className='font-weight-bold'>
            Technologies:
        </div>
        <ul>
            {technologies.map(technology => <li>{technology}</li>)}
        </ul>
        <div className='font-weight-bold'>
            Achievements:
        </div>
        <ul>
            {achievements.map(achievement => <li>{achievement}</li>)}
        </ul>
    </div>
}
