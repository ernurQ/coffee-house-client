export {
	getCoffees,
	getOneCoffee,
	getBestCoffeesList,
	getPleasureCoffeesList,
} from './api/coffees-api'
export {
	revalidateTag,
	createCoffee,
	updateCoffee,
	uploadCoffeeThumbnail,
	addCoffeesToCollection,
} from './api/coffees-admin-api'

export { CoffeesList } from './ui/Coffees-list'
export { AdminCoffeesList } from './ui/Admin-coffees-list'
