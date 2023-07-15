import axios from "axios";


const axiosJsonServer = axios.create({
	baseURL: 'http://localhost:3001'
})
export async function GetMenuData() {
	return axiosJsonServer.get('/menu')
		.then(result => result.data)
		.catch(error => {
			console.log(error.message)
			throw error
		});
}

export async function GetCartItems() {
	return await axiosJsonServer.get('/cart-items')
		.then(result => result.data)
}

export async function GetMenuItemById(id) {
	return await axiosJsonServer.get(`/menu/${id}`)
		.then(result => result.data)
}


export async function IncreaseItemQuantity(id) {
	return await axiosJsonServer.put(`/cart-items/${id}/increment`).then(result => console.log(result));
}