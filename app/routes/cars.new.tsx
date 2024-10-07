import type { ActionFunction } from '@remix-run/node';

import { redirect } from '@remix-run/node';
import { Link, Form } from '@remix-run/react';

import { db } from '~/utils/db.server';

export const action: ActionFunction = async ({ request }) => {
    const form = await request.formData();
    const title = form.get('title') ?? '';
    const description = form.get('description') ?? '';
    const price = form.get('price') ?? '';

    const fields = {
        title: String(title),
        description: String(description),
        price: String(price),
    };

    const post = await db.car.create({ data: fields });

    return redirect(`/cars/${post.id}`);
};

const NewPost = () => {
    return (
        <>
            <div className="page-header">
                <h2>New car</h2>
                <Link to="/posts" className="btn">
                    Back
                </Link>
            </div>

            <div className="page-content">
                <Form method="POST">
                    <div className="form-control">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="description">Post description</label>
                        <textarea name="description" id="description" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="price">Post price</label>
                        <textarea name="price" id="price" />
                    </div>
                    <button className="btn btn-block" type="submit">
                        Add Post
                    </button>
                </Form>
            </div>
        </>
    );
};

export default NewPost;
