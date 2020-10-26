import Link from 'next/link';
import Config from '../../content/Config';

export default function Header({ suffix = 'papers', right = '' }) {
    const {firstName} = Config;
    const showOnMobile = 'd-xxl-none d-xl-none d-lg-none d-md-none';

    return (
        <header className="mb-5 shadow p-5">
            <h1 className="text-center text-sm-left m-0">
                <Link href="/">
                    <span>{firstName}'s {suffix}</span>
                </Link>
                {right ? <br className={showOnMobile}/> : '' }
                {right ? <br className={showOnMobile}/> : '' }
                {right ? <small className="a4--header-right float-none float-lg-right">
                    {right}
                </small> : ''}
            </h1>
        </header>
    );
}