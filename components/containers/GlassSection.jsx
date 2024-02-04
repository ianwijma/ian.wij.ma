import {Glass} from "./Glass";

export function GlassSection({children, className, ...props}) {
    return <Glass className={`w-full my-0 mx-auto max-w-[950px] p-5 ${className}`} {...props}>
        {children}
    </Glass>
}