// import { Link } from '@remix-run/react';

function Index() {
    return (
        <div>
            <h1 className="text-5xl font-bold">Welcome</h1>
            <div>
                description on this page
            </div>
            <a
                href="/cars"
                className="btn"
                rel="noreferrer"
            >
                Car expenses
            </a>
        </div>
    );
}

export default Index;
