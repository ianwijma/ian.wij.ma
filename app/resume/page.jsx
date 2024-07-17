import {ResumeHeader} from "../../components/texts/ResumeHeader";
import {ResumeEmploymentHistory} from "../../components/texts/ResumeEmploymentHistory";
import Link from "next/link";
import {ResumeEducationHistory} from "../../components/texts/ResumeEducationHistory";
import {ResumeDetailHeader} from "../../components/texts/ResumeDetailHeader";

export default function Resume() {
    return (
        <div className='resume bg-white' style={{maxWidth: "750px", margin: "0 auto", fontSize: "small"}}>
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
                    <div>Public Speaking</div>
                    <div>Guiding Peers</div>
                    <div>Researching</div>
                    <div>Documenting</div>
                    <div>Perspective Discussions</div>
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
                        With my years of experience designing, developing and guiding peers,
                        I bring customer-oriented features to your company,
                        while enabling my peers to excel in their position.
                        My passion is sharing my findings from exploring new and existing technologies.
                        Which I do multiple times a week.
                    </p>
                    <ResumeHeader>Employment History</ResumeHeader>
                    <ResumeEmploymentHistory
                        style={{marginBottom: 125}}
                        role="Software Engineer"
                        company="Atlassian"
                        start="February 2024"
                        end="Present"
                        responsibilities={[
                            "Investigate, discuss and implement various performance improvements in the Jira Issue View",
                            "Write, review and discuss code around performance and relaibility.",
                            "Representing a team that owns the Jira Issue view, which gets over a billion impressions per month.",
                            "Working on task, project and product oriented tasks, impacting millions of users.",
                        ]}
                        technologies={[
                            "Backend (Node, React (RLL), Java)",
                            "Frontend (JS/TS, React (TS/JS), Relay)",
                            "DevOps (Integration Tests, Bitbucket Pipelines, Bamboo CI)",
                            "TDD & BDD (Jest, Integration Test for react server components)",
                        ]}
                        achievements={[
                            "During my onboarding, a lot of my peers though I was with the company for many years.",
                            "Overly possitive feedback during my first and sequensial assessments.",
                            "Actively picking up harder tasks to ensure projects run smoothly and in a good pace.",
                            "Getting glaring possitive peer feedback.",
                        ]}
                    >
                        As a Software Engineer I found myself excelling at my job. I was put early on a high stakes project that 
                        involved improving the performance for XL enterprice customers at Atlassian. 
                        My day-to-day task is working in large code bases and technologies that are developed in house, which I managed to do 
                        and spread information about.
                        I love working on challanging tasks, which enabled me to receive reconision from my managers and peers of various levels.
                    </ResumeEmploymentHistory>
                    <ResumeEmploymentHistory
                        style={{marginBottom: 500}}
                        role="Technical Lead"
                        company="Maropost"
                        start="March 2023"
                        end="February 2024"
                        responsibilities={[
                            "Design, breakdown and provide guidance around new systems.",
                            "Provide guidance to enable peers to grow within their job.",
                            "Breaking down a legacy systems into microservices.",
                            "Writing, reviewing and documenting new and existing projects and systems.",
                        ]}
                        technologies={[
                            "Backend (PHP, Perl, NodeJS, Ruby, Bash)",
                            "Frontend (JS/TS, React (TS/JS), MicroUI, Custom component library, Redux)",
                            "DevOps (Terraform, AWS, S3, Cloudflare, Ruby, Bash, NodeJS)",
                            "Polyglot (PHP, JS/TS, React (TS/JS), Perl, Ruby, Bash)",
                            "TDD & BDD (PHPUnit, Behat, Testing Library, In house perl unit test framework)",
                        ]}
                        achievements={[
                            "Enable teams to excel with the company.",
                            "Design and develop understandable microservices.",
                            "Presenting and providing technical insight into various technical or non-technical topics.",
                            "Being able to understand business requirement, and help product create new features.",
                            "Helping 3rd parties and partners to integrate with the Australian market (Stripe & ShipEngine)",
                        ]}
                    >
                        As a Tech Lead at Maropost I found myself successfully guiding peers,
                        working out EPICs to a point where teams understood what and why certain changes needed to happen.
                        Additionally I've found myself guiding whole teams from across the business ask for my guidance around
                        topics like feature toggles and the concept behind writing behavioural tests.
                        Besides all of this I also worked myself on spikes and tasks to help the team I worked with to successfully complete sprints.
                    </ResumeEmploymentHistory>
                    <ResumeEmploymentHistory
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
                            "Seeing impacts of mentoring peers.",
                            "Integrating with 3rd party APIs (Amazon, Catch, ShipEngine).",
                            "Being able to contribute to teams outside of development.",
                            "Understanding and innovating on business ideas.",
                        ]}
                    >
                        I started off as a Software Developer at Maropost,
                        but quickly found myself guiding the people who started around the same date is me.
                        This is because I love helping peers out and do so successfully, as I'm able to quickly learn new systems.
                        I found myself often documenting legacy systems and work on improvements around Inventory systems,
                        marketplace integrations and working on microservices.
                    </ResumeEmploymentHistory>
                    <ResumeEmploymentHistory
                        style={{marginBottom: 25}}
                        role="Frontend Developer"
                        company="Australian War Memorial"
                        start="March 2021"
                        end="September 2021"
                        responsibilities={[
                            <>
                                Co-design & being the sole developer on the online exhibitions like{" "}
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
                            "Mastering React to a level I can teach others React.",
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
                            "Frontend (BackboneJS, Marionette, VueJS, ReactJS, React Native, Cordova, Typescript)",
                            "Backend (Symfony, PHP, Laravel, PostgreSQL, MySQL, Bash)",
                            "Tools (Linux, Debian, Mercurial, Bash, Git)",
                            "Devops (Linux Servers, CI/CD, Teams City)",
                        ]}
                        achievements={[
                            "Design and deploy a cash register with full hardware integration.",
                            "Being the primary contact person for universities and schools around ongoing intern projects.",
                            "Communicate with stakeholders and customers.",
                        ]}
                    >
                        StoreKeeper B.V. builds the similar named API first eCommerce SAAS solution StoreKeeper.
                        They provide solutions ranging from Webshops for online to POS systems for in the stores.
                        Because it's team was small I worked on everything,
                        ranging from the Backend, Admin panel, Apps, Integrations, POS systems, CI/DC and DevOps.
                        This enabled me to have a broad understanding of everything in a the software development cycle.
                        From creating the initial wireframe mockups, it's design to the deployment and delivery of new and existing systems.
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
                            // "Estimate features for customer quotes",
                            "Guiding and work with developer interns",
                        ]}
                        technologies={[
                            "Frontend (BackboneJS, Marionette, Cordova, jQuery, ReactJS)",
                            "Backend (Symfony, PHP, NodeJS, Bash, Cron)",
                            "Tools (Linux, Debian, Mercurial, Bash, Git)",
                        ]}
                        achievements={[
                            "Orienting and guiding interns into their professional career.",
                            "Growing from a hobbyist to a professional programmer.",
                        ]}
                    >
                        I started off at UPX Systems B.V. as a software developer,
                        where I worked with the Businesses and Universities on these projects from their first mockups, to it's delivery.
                        These projects were after transformed into SAAS products after it's delivery, which paid for it's continued development cycle.
                        These project include CRM & HR systems, Internal social media platforms, health oriented apps,
                        Product Database for production companies and a eCommerce platform.
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
