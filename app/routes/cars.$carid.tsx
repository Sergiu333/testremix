import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';

import { useLoaderData, Link, Form } from '@remix-run/react';

import { db } from '~/utils/db.server';

export const loader: LoaderFunction = async ({ params }) => {
    const car = await db.car.findUnique({
        where: { id: params.carid },
    });

    if (!car) throw new Error('Car not found');

    const data = { car };
    return data;
};

export const action: ActionFunction = async ({ request, params }) => {
    const form = await request.formData();
    if (form.get('_method') === 'delete') {
        const car = await db.car.findUnique({
            where: { id: params.carid },
        });

        if (!car) throw new Error('Car not found');

        await db.car.delete({
            where: { id: params.carid },
        });

        return redirect('/cars');
    }
};

interface Car {
    title: string;
    description: string;
    price: string;
    createdAt: string;
    updatedAt: string;
}

const Carid = () => {
    const { car }: { car: Car } = useLoaderData();
    return (
        <>
            <div className="page-header">
                <h2>{car.title}</h2>
                <Link to="/cars" className="btn">
                    Back
                </Link>
            </div>

            <div className="page-content">
                <p>{car.description}</p>
                <p><strong>Price:</strong> {car.price}</p>
                <p><strong>Created At:</strong> {new Date(car.createdAt).toLocaleDateString()}</p>
                <p><strong>Last Updated:</strong> {new Date(car.updatedAt).toLocaleDateString()}</p>
            </div>

            <div className="page-footer">
                <Form method="POST">
                    <input type="hidden" name="_method" value="delete" />
                    <button className="btn btn-delete">Delete</button>
                </Form>
            </div>
        </>
    );
};

export default Carid;
