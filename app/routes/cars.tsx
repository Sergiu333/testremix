import { Outlet } from '@remix-run/react';

const cars = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default cars;
