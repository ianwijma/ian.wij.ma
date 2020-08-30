import Link from 'next/link';
import Config from '../../content/Config';

export default function Header({ suffix = 'papers', right = '' }) {
    const {firstName} = Config;
    const showOnMobile = 'd-xxl-none d-xl-none d-lg-none d-md-none d-sm-none';
    return (
        <header className="mb-5 shadow p-5">
            <h1 className="text-center text-sm-left">
                <Link href="/">
                    <span>{firstName}'s {suffix}</span>
                </Link>
                <br className={showOnMobile}/>
                <br className={showOnMobile}/>
                <small className="a4--header-right float-sm-right">
                    {right}
                </small>
            </h1>
        </header>
    );
}