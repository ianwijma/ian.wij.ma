import Link from 'next/link';
import Config from '../../content/Config';

export default function Header({ suffix = 'papers' }) {
    const {firstName} = Config
    return (
        <header className="mb-5 shadow p-5">
            <h1>
                <Link href="/">
                    <span>{firstName}'s {suffix}</span>
                </Link>
            </h1>
        </header>
    );
}