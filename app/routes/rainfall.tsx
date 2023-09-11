import { Outlet } from "@remix-run/react";


export default function RainfallRoute() {
	return (
		<div>
			<h1>Rainfall</h1>
			<main>
				<Outlet />
			</main>
		</div>
	);
}