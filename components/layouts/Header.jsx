import Link from 'next/link';
import Config from '../../content/Config';
import {Glass} from "../containers/Glass";

export default function Header({ suffix = 'papers', right = '', linkHref = '/' }) {
    const {firstName} = Config;
    const showOnMobile = 'd-xxl-none d-xl-none d-lg-none d-md-none';

    return (
        <Glass className='sticky top-0 z-50 text-white'>
            <header className="mb-5 p-4">
                <h1 className="text-center text-sm-left m-0">
                    <Link href={linkHref} className="link-light">
                        <span>{firstName}'s {suffix}</span>
                    </Link>
                    {right ? <br className={showOnMobile}/> : ''}
                    {right ? <br className={showOnMobile}/> : ''}
                    {right ? <small className="a4--header-right float-none float-lg-right">
                        {right}
                    </small> : ''}
                </h1>
            </header>
        </Glass>
    );
}
