import { useLoaderData, Link } from '@remix-run/react';
import { db } from '~/utils/db.server';

// Define a type for a single post
type Car = {
    id: string;
    title: string;
    description: string;
    price: string;
    createdAt: Date;
};

// Define a type for the data returned by the loader
type LoaderData = {
    cars: Car[];
};

export const loader = async () => {
    const data = {
        cars: await db.car.findMany(),
    };

    return data;
};


const Posts = () => {
    const { cars } = useLoaderData<LoaderData>(); // Use LoaderData as the generic type
    let total = 0; // Schimbat const in let
    for (let i = 0; i < cars.length; i++) {
        total += parseInt(cars[i].price, 10); // Adunam pretul convertit in integer
    }

    return (
        <>
            <div className="page-header">
                <h1>Expenses</h1>
                <Link to="/cars/new" className="btn">
                    New Expenses
                </Link>
            </div>

            <ul className="posts-list">
                {cars.map((car) => (
                    <li key={car.id}>
                        <Link to={car.id}>
                            <h3 className="text-2xl font-bold">{car.title}</h3>
                            {new Date(car.createdAt).toLocaleString()}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="pt-10">Total: {total} lei</div>
        </>
    );
};

export default Posts;
