export const routes = {
	aboutUs: () => '/about-us',
	forYourPleasure: () => '/for-your-pleasure',
	ourCoffee: () => '/our-coffee',
	coffee: (id: string) => `/our-coffee/${id}`,

	login: () => '/admin/auth/login',
	register: () => '/admin/auth/register',

	createCoffee: () => '/admin/coffees/create',
	createCountry: () => '/admin/countries/create',
	adminCoffees: () => '/admin/coffees',
	adminOneCoffee: (id: string) => `/admin/coffees/${id}`,
	adminBestCoffees: () => '/admin/best-coffees',
	adminPleasureCoffees: () => '/admin/pleasure-coffees',
}
