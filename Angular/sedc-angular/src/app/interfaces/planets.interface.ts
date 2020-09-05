export interface iPlanetsResponse {
	count?: number,
	next: string,
	previous: string,
	results: Array<iPlanet>
}

export interface iPlanet {
	climate: string,
	created: string,
	diameter: string | number,
	edited: string,
	films: Array<string>,
	gravity: string,
	name: string,
	orbital_period: string | number,
	population: string | number,
	residents: Array<string>,
	rotation_period: string | number,
	surface_water: string | number | boolean,
	terrain: string,
	url: string
}