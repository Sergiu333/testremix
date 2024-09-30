import './styles/global.css'; // Importă CSS-ul direct
import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
	Links,
	Link,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';

export const links: LinksFunction = () => {
	return []; // Nu mai este nevoie de această parte pentru CSS
};

export const meta: MetaFunction = () => {
	return [
		{ title: 'MEGADENT' },
		{
			name: 'description',
			content: 'MEGADENT DOCTORS',
		},
	];
};

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<nav className="container-nav">
					<div className="navbar">
						<Link to="/" className="logo logo-color">
							MEGADENT
						</Link>
						<ul className="nav">
							<li>
								<Link to="/posts">Doctors</Link>
							</li>
						</ul>
					</div>
				</nav>
				<div className="container">
					<Outlet />
				</div>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
