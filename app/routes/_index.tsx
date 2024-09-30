// import { Link } from '@remix-run/react';

function Index() {
    return (
        <div>
            <h1>Welcome to Post MEGADENT!</h1>
            <div>
                The "Add Doctors" page allows you to quickly and efficiently register new doctors in MegaDent's
                database. Simply fill in the required details, such as name, specialization, contact information, and
                other relevant data. This feature helps manage medical resources, ensuring easy access to professional
                information and seamless coordination of MegaDent's medical team.
            </div>
            <a
                href="/posts"
                className="btn"
                rel="noreferrer"
            >
                Doctors
            </a>
        </div>
    );
}

export default Index;
