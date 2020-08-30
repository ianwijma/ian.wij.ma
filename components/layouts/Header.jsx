import Config from '../../content/Config'
export default function Header({  }) {
    const {firstName} = Config
    return (
        <header className="mb-5 shadow p-5">
            <h1>{firstName}'s papers</h1>
        </header>
    );
}