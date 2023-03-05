import {ResumeHeader} from "../../components/texts/ResumeHeader";
import {ResumeEmploymentHistory} from "../../components/texts/ResumeEmploymentHistory";
import Link from "next/link";
import {ResumeEducationHistory} from "../../components/texts/ResumeEducationHistory";
import {ResumeDetailHeader} from "../../components/texts/ResumeDetailHeader";

export default function Resume() {
    return <div style={{ maxWidth: '750px', margin: '0 auto', fontSize: 'small' }}>
        <style jsx>
            {`
    * {
        font-family: 'Roboto Mono', monospace;
    }
`}
        </style>
        <div className='d-flex justify-content-center align-items-center p-4'>
            <div className='border border-dark px-5 py-3'>
                <h1 className='m-0'>Ian Wijma</h1>
            </div>
        </div>
        <div className='row'>
            <div className='col-3'>
                <ResumeHeader>Details</ResumeHeader>
                <ResumeDetailHeader>Address</ResumeDetailHeader>
                <div>Canberra 2614 Australia</div>
                <ResumeDetailHeader>Email</ResumeDetailHeader>
                <div>
                    <span className='font-weight-bold'>ian</span> at <span className='font-weight-bold'>wij</span> dot <span className='font-weight-bold'>ma</span>
                </div>
                <ResumeDetailHeader>Website</ResumeDetailHeader>
                <div>
                    <Link href='https://ian.wij.ma'>Website</Link>
                </div>
                <ResumeHeader>Soft Skills</ResumeHeader>
                <div>Work From Home</div>
                <div>Technical Teaching</div>
                <div>Product Development</div>
                <div>Public Speaking</div>
                <div>Researching</div>
                <div>Asking Questions</div>
                <ResumeHeader>Languages</ResumeHeader>
                <div>English</div>
                <div>Dutch</div>
                <div>Australian</div>
                <div>Twitch (Dialect)</div>
                <ResumeHeader>Links</ResumeHeader>
                <Link href="https://github.com/ianwijma"><div>Github</div></Link>
                <Link href="https://www.linkedin.com/in/ianwijma"><div>Linkedin</div></Link>
                <Link href="https://twitter.com/ianwijma"><div>Twitter</div></Link>
                <Link href="https://ian.wij.ma"><div>Website</div></Link>
                <Link href="https://my.indeed.com/p/ianw-x5l2tpm"><div>Indeed.com</div></Link>
            </div>
            <div className='col-9'>
                <ResumeHeader>About Me</ResumeHeader>
                <p>
                    With eight years of product and software development experience, I bring
                    customer-oriented features to your product. Using my incredible drive to
                    quickly learn existing and new technologies. Where mastering these
                    technologies is something I love doing!
                </p>
                <p>
                    I have hands-on experience with the following technologies & languages:
                    Linux, JavaScript, NodeJS, PHP, TypeScript, Perl, Ruby, macOS, Docker,
                    NextJS, Laravel, React, React Native, Kubernetes (K8S/K3S), Proxmox VE,
                    NestJS, AWS, VueJS, PostgreSQL, MySQL, Git, Mercurial, Cordova.
                </p>
                <ResumeHeader>Employment History</ResumeHeader>
                <ResumeEmploymentHistory
                    role='Software Developer'
                    company='Maropost'
                    start='October 2021'
                    end='Present'
                    responsibilities={[
                        'Design, develop & maintain microservice APIs & micro UIs.',
                        'Maintain a legacy system written in Perl and PHP.',
                        'Create a foundation to easily create online exhibitions for the public.',
                    ]}
                    technologies={[
                        'PHP (Symfony, Behat, PHPUnit)',
                        'JS/TS (ReactJS, in-house component library, MicroUI)',
                        'Hosting (Terraform, AWS, S3, Cloudflare)',
                        'Polyglot (PHP, Perl, JS/TS, Ruby, Bash, Python)',
                    ]}
                    achievements={[
                        'Saving the Amazon integration for 100s of merchants.',
                        'Seeing impact from tutoring peers & written technical documentation.',
                        'Being able to contribute to teams outside of development.',
                    ]}
                >
                    Maropost Commerce Cloud is the only B2B and multi-channel ecommerce platform that
                    provides an all-in-one solution for ecommerce, inventory management, order
                    management, and shipping labelling. Here I worked on Inventory systems,
                    marketplace integrations and working on microservices are part of my job. where I
                    often find myself also tutoring peers and writing documentation.
                </ResumeEmploymentHistory>
                <ResumeEmploymentHistory
                    style={{ marginTop: 125 }}
                    role='Frontend Developer'
                    company='Australian War Memorial'
                    start='March 2021'
                    end='September 2021'
                    responsibilities={[
                        <>Co-design & develop online exhibitions <Link href='https://navy.awm.gov.au'>navy.awm.gov.au</Link> & <Link href='https://awm.gov.au/3dtreasures'>awm.gov.au/3dtreasures</Link></>,
                        'Design & develop transcription tools for images, video and audio.',
                        'Create a foundation to easily create online exhibitions for the public.',
                    ]}
                    technologies={[
                        'JavaScript (NodeJS, React, NextJS, Framer Motion, KonvaJS)',
                        'CSS (PostCSS, TailwindCSS)',
                        'Github (Git, Contributing to Open Source)',
                        'Hosting (AWS, Amplify, Machine Learning)',
                    ]}
                    achievements={[
                        'Working closely with designers to create exciting exhibitions.',
                        'Using machine learning to aid with the transcription of multimedia.',
                        'Mastering React to a level I can teach people React.',
                    ]}
                >
                    The Australian War Memorial is Australia's national memorial to the members of its
                    armed forces and supporting organisations who have died or participated in wars
                    involving the Commonwealth of Australia and some conflicts involving personnel
                    from the Australian colonies before Federation.
                </ResumeEmploymentHistory>
                <ResumeEmploymentHistory
                    role='Senior Software Developer'
                    company='StoreKeeper Company B.V.'
                    start='July 2018'
                    end='December 2020'
                    responsibilities={[
                        'Design and develop new features',
                        'Design and implement DevOps tools (CI/CD)',
                        'Guiding new and junior developers',
                        'Simplify complex UI',
                    ]}
                    technologies={[
                        'JavaScript/ TypeScript (NodeJS, React, React Native, Backbone)',
                        'PHP (Laravel / Symfony / In house framework)',
                        'PostgreSQL / MySQL',
                        'Git / Mercurial',
                        ' Linux server management',
                    ]}
                    achievements={[
                        'Design and deploy a cash register with full hardware integration',
                    ]}
                >
                    StoreKeeper B.V. is an eCommerce company based in the Netherlands. They
                    build SAAS commerce solutions ranging from webshops to POS systems in the
                    store. Because it was a small team, everyone knew and works on the full
                    stack.
                </ResumeEmploymentHistory>
                <ResumeEmploymentHistory
                    style={{ marginTop: 125 }}
                    role='Software Developer'
                    company='Upx Systems B.V.'
                    start='August 2015'
                    end='July 2018'
                    responsibilities={[
                        'Communicate with the customer',
                        'Design, develop and deliver custom solutions',
                        'Work in a team of developers, designers, and marketing',
                        'Estimate features for customer quotes',
                        'Guiding and work with developer interns',
                    ]}
                    technologies={[
                        'JavaScript (NodeJS, Backbone, Cordova)',
                        'PHP (Symfony & In house framework)',
                        'Git / Mercurial',
                        'Linux desktop (Debian with Gnome)',
                    ]}
                    achievements={[
                        'Become a professional programmer from a hobbyist programmer.',
                    ]}
                >
                    Upx Systems B.V. was a company that developed custom solutions for their
                    customers. Here I worked as a front-end developer. This company changed
                    to what is now StoreKeeper B.V.
                </ResumeEmploymentHistory>
                <ResumeEmploymentHistory
                    role='Trainee Software Developer'
                    company='Nubium'
                    start='January 2015'
                    end='July 2015'
                    responsibilities={[
                        'Make their customer\'s websites mobile friendly',
                        'Apply changes to their customer\'s websites',
                    ]}
                    technologies={[
                        'PHP (In house CMS)',
                        'HTML5 & CSS3',
                        'FTP',
                    ]}
                    achievements={[
                        'Here I learned that I’m a quick learner, and school was slow paced',
                    ]}
                >
                    Nubium is a company that does online marketing and web development. They
                    had their own custom CMS, building multiple products on top.
                </ResumeEmploymentHistory>
                <ResumeHeader>Education</ResumeHeader>
                <ResumeEducationHistory
                    education='Diploma of Software Development'
                    school='ROC van Twente'
                    start='2012'
                    end='2015'
                >
                    Once I finished my IT support study, I decided to lean on my interest in
                    programming. Due to my prior knowledge of programming in my own time,
                    this study was boring and repetitive for me. After graduating with ease
                    and my internship with Nubium, I decided to learn while working. So I
                    started working full time for Upx Systems B.V.
                </ResumeEducationHistory>
                <ResumeEducationHistory
                    style={{ marginTop: 100 }}
                    education='Diploma of IT support'
                    school='ROC van Twente'
                    start='2010'
                    end='2012'
                >
                    Here I learned everything about IT support, communicating with
                    non-technical people and working with hardware (servers, desktops and
                    laptops). Because of my interest in computers from a young age, this was
                    an easy study.
                </ResumeEducationHistory>
            </div>
        </div>
    </div>
}
