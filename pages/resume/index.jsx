import {ResumeHeader} from "../../components/texts/ResumeHeader";
import {ResumeEmploymentHistory} from "../../components/texts/ResumeEmploymentHistory";
import Link from "next/link";
import {ResumeEducationHistory} from "../../components/texts/ResumeEducationHistory";
import {ResumeDetailHeader} from "../../components/texts/ResumeDetailHeader";

export default function Resume() {
    return (
        <div style={{maxWidth: "750px", margin: "0 auto", fontSize: "small"}}>
            <style jsx>
                {`
                  * {
                    font-family: "Roboto Mono", monospace;
                  }
                `}
            </style>
            <div className="d-flex justify-content-center align-items-center p-4">
                <div className="border border-dark px-5 py-3">
                    <h1 className="m-0">Ian Wijma</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <ResumeHeader>Details</ResumeHeader>
                    <ResumeDetailHeader>Address</ResumeDetailHeader>
                    <div>Canberra 2913 Australia</div>
                    <ResumeDetailHeader>Email</ResumeDetailHeader>
                    <div>
                        <span className="font-weight-bold">ian</span> at{" "}
                        <span className="font-weight-bold">wij</span> dot{" "}
                        <span className="font-weight-bold">ma</span>
                    </div>
                    <ResumeDetailHeader>Website</ResumeDetailHeader>
                    <div>
                        <Link href="https://ian.wij.ma">Website</Link>
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
                    <div>Twents (Dialect)</div>
                    <ResumeHeader>Links</ResumeHeader>
                    <Link href="https://github.com/ianwijma">
                        <div>Github</div>
                    </Link>
                    <Link href="https://www.linkedin.com/in/ianwijma">
                        <div>Linkedin</div>
                    </Link>
                    <Link href="https://twitter.com/ianwijma">
                        <div>Twitter</div>
                    </Link>
                    <Link href="https://ian.wij.ma">
                        <div>Website</div>
                    </Link>
                    <Link href="https://my.indeed.com/p/ianw-x5l2tpm">
                        <div>Indeed.com</div>
                    </Link>
                </div>
                <div className="col-9">
                    <ResumeHeader>About Me</ResumeHeader>
                    <p>
                        With my years of experience designing, developing and mentoring,
                        I bring customer-oriented features to your company. All while mentoring
                        peers and excel them at their current position and beyond. My passion is learning
                        new technologies all while learning the ins and outs of existing tech.
                    </p>
                    <p>
                        I have hands-on experience with the following technologies: {[
                        'Linux (Debian/Ubuntu/CentOS)',
                        'MacOS',
                        'JavaScript/TypeScript',
                        'NodeJS',
                        'NestJS',
                        'React/React Native',
                        'NextJS',
                        'Redux',
                        'VueJS',
                        'Cordova',
                        'PHP',
                        'Symfony',
                        'PHPUnit',
                        'Behat',
                        'Laravel',
                        'Wordpress',
                        'Bash',
                        'Perl',
                        'Ruby',
                        'Rust',
                        'Docker',
                        'Kubernetes (K8S/K3S)',
                        'Proxmox VE',
                        'PostgreSQL',
                        'MySQL',
                        'Redis',
                        'ElasticSearch',
                        'Terraform',
                        'AWS',
                        'Cloudflare',
                        'Git',
                        'Mercurial',
                    ].join(', ')}.
                    </p>
                    <ResumeHeader>Employment History</ResumeHeader>
                    <ResumeEmploymentHistory
                        style={{marginBottom: 125}}
                        role="Technical Lead"
                        company="Maropost"
                        start="March 2023"
                        end="Present"
                        responsibilities={[
                            "Design, breakdown and provide guidance around new systems.",
                            "Provide guidance to enable peers to excel at their job.",
                            "Break down a legacy system into microservices.",
                            "Writing, reviewing and documenting new and existing code bases.",
                        ]}
                        technologies={[
                            "Backend (PHP, Perl, NodeJS, Ruby, Bash)",
                            "Frontend (JS/TS, React (TS/JS), MicroUI, Custom component library, Redux)",
                            "CI/DC (Ruby, Bash, NodeJS, PHP, Terraform, S3)",
                            "Polyglot (PHP, JS/TS, React (TS/JS), Perl, Ruby, Bash)",
                            "Hosting (Terraform, AWS, S3, Cloudflare)",
                            "TDD & BDD (PHPUnit, Behat, Testing Library, In house perl unit test framework)",
                        ]}
                        achievements={[
                            "Enable a team to excels within the company.",
                            "Design and develop understandable microservices.",
                            "Being able to understand business requirement, and help product create new features.",
                            "Helping 3rd parties and partners to integrate with Australian systems (Stripe & ShipEngine)",
                        ]}
                    >
                        I successfully guided peers to grow in their position and beyond.
                        I worked with the product team on new features, wrote technical documentation with great
                        attention to detail,
                        and broken them down into manageable tasks for any team to pick them up and start working on
                        the.
                    </ResumeEmploymentHistory>
                    <ResumeEmploymentHistory
                        style={{marginBottom: 50}}
                        role="Software Developer"
                        company="Maropost"
                        start="October 2021"
                        end="March 2023"
                        responsibilities={[
                            "Design, develop & maintain microservice APIs & micro UIs.",
                            "Maintain a legacy system written in Perl and PHP.",
                            "Create a foundation to easily create online exhibitions for the public.",
                        ]}
                        technologies={[
                            "PHP (Symfony, Laravel, Scripts)",
                            "JS/TS (ReactJS, in-house component library, MicroUI)",
                            "TDD & BDD (PHPUnit, Behat, In house perl unit test framework)",
                            "Polyglot (PHP, JS/TS, React (TS/JS), Perl, Ruby, Bash)",
                            "Hosting (Terraform, AWS, S3, Cloudflare)",
                        ]}
                        achievements={[
                            "Seeing impacts of mentoring peers",
                            "Integrating with 3rd party APIs (amazon, Catch, ShipEngine)",
                            "Being able to contribute to teams outside of development.",
                            "Understanding and innovating on business ideas.",
                        ]}
                    >
                        I worked on Inventory systems, marketplace integrations and working
                        on microservices were part of my job. where I often find myself also
                        tutoring peers and writing documentation.
                    </ResumeEmploymentHistory>
                    <ResumeEmploymentHistory
                        style={{marginBottom: 25}}
                        role="Frontend Developer"
                        company="Australian War Memorial"
                        start="March 2021"
                        end="September 2021"
                        responsibilities={[
                            <>
                                Co-design & develop online exhibitions{" "}
                                <Link href="https://navy.awm.gov.au">navy.awm.gov.au</Link> &{" "}
                                <Link href="https://awm.gov.au/3dtreasures">
                                    awm.gov.au/3dtreasures
                                </Link>
                            </>,
                            "Design & develop transcription tools for images, video and audio.",
                            "Create a foundation to easily create online exhibitions for the public.",
                        ]}
                        technologies={[
                            "JavaScript (NodeJS, React, NextJS, Framer Motion, KonvaJS)",
                            "CSS (PostCSS, TailwindCSS)",
                            "Github (Git, Contributing to Open Source)",
                            "Hosting (AWS, Amplify, Machine Learning)",
                        ]}
                        achievements={[
                            "Working closely with designers to create exciting exhibitions.",
                            "Using machine learning to aid with the transcription of multimedia.",
                            "Mastering React to a level I can teach people React.",
                        ]}
                    >
                        The Australian War Memorial is Australia's national memorial to the
                        members of its armed forces and supporting organisations who have
                        died or participated in wars involving the Commonwealth of Australia
                        and some conflicts involving personnel from the Australian colonies
                        before Federation.
                    </ResumeEmploymentHistory>
                    <ResumeEmploymentHistory
                        role="Senior Software Developer"
                        company="StoreKeeper Company B.V."
                        start="July 2018"
                        end="December 2020"
                        responsibilities={[
                            "Design and develop new features",
                            "Design and implement DevOps tools (CI/CD)",
                            "Guiding new and junior developers",
                            "Simplify complex UI",
                        ]}
                        technologies={[
                            "JavaScript/ TypeScript (NodeJS, React, React Native, Backbone)",
                            "PHP (Laravel / Symfony / In house framework)",
                            "PostgreSQL / MySQL",
                            "Git / Mercurial",
                            "Linux server management",
                        ]}
                        achievements={[
                            "Design and deploy a cash register with full hardware integration",
                        ]}
                    >
                        StoreKeeper B.V. is an eCommerce company based in the Netherlands.
                        They build SAAS commerce solutions ranging from webshops to POS
                        systems in the store. Because it was a small team, everyone knew and
                        works on the full stack.
                    </ResumeEmploymentHistory>
                    <ResumeEmploymentHistory
                        style={{marginBottom: 200}}
                        role="Software Developer"
                        company="Upx Systems B.V."
                        start="August 2015"
                        end="July 2018"
                        responsibilities={[
                            "Communicate with the customer",
                            "Design, develop and deliver custom solutions",
                            "Work in a team of developers, designers, and marketing",
                            "Estimate features for customer quotes",
                            "Guiding and work with developer interns",
                        ]}
                        technologies={[
                            "JavaScript (NodeJS, Backbone, Cordova)",
                            "PHP (Symfony & In house framework)",
                            "Git / Mercurial",
                            "Linux desktop (Debian with Gnome)",
                        ]}
                        achievements={[
                            "Become a professional programmer from a hobbyist programmer.",
                        ]}
                    >
                        Upx Systems B.V. was a company that developed custom solutions for
                        their customers. Here I worked as a front-end developer. This
                        company changed to what is now StoreKeeper B.V.
                    </ResumeEmploymentHistory>
                    <ResumeEmploymentHistory
                        role="Trainee Software Developer"
                        company="Nubium"
                        start="January 2015"
                        end="July 2015"
                        responsibilities={[
                            "Converting customer sites to be mobile friendly",
                            "Making minor changes to customer sites using HTML5 and CSS3",
                        ]}
                        technologies={[
                            "PHP (In house CMS)",
                            "JS (JQuery, Boostrap)",
                            "Styling (Boostrap, CSS3)",
                            "HTML (HTML5, In house templating engine, Boostrap)",
                            "Hosting (FTP, Linux, Windows Server)"
                        ]}
                        achievements={[
                            "Successfully creating responsive or mobiles sites.",
                            "Getting a Java applet to communicate with a Chrome extension.",
                        ]}
                    >
                        Nubium is a company that does online marketing and web development.
                        They had their own custom CMS, building multiple products on top of it.
                        Around the end of my internship here I also got to play around with some
                        Java applet that was communicating with a Chrome extension.
                    </ResumeEmploymentHistory>
                    <ResumeHeader>Education</ResumeHeader>
                    <ResumeEducationHistory
                        education="Diploma of Software Development"
                        school="ROC van Twente"
                        start="2012"
                        end="2015"
                    >
                        Once I finished my IT support study, I decided to lean on my
                        interest in programming. Due to my prior knowledge of programming in
                        my own time, this study was boring and repetitive for me. After
                        graduating with ease and my internship with Nubium, I decided to
                        learn while working. So I started working full time for Upx Systems
                        B.V.
                    </ResumeEducationHistory>
                    <ResumeEducationHistory
                        education="Diploma of IT support"
                        school="ROC van Twente"
                        start="2010"
                        end="2012"
                    >
                        Here I learned everything about IT support, communicating with
                        non-technical people and working with hardware (servers, desktops
                        and laptops). Because of my interest in computers from a young age,
                        this was an easy study.
                    </ResumeEducationHistory>
                </div>
            </div>
        </div>
    );
}
