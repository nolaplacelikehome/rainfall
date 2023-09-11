import { LinksFunction } from "@remix-run/node";

import stylesUrl from '~/styles/index.css';


export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: stylesUrl },
];

export default function IndexRoute() {
	return (
		<main>
			<h1>Rainfall</h1>
		</main>
	);
}