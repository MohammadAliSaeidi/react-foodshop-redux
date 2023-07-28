import axios from "axios";


const axiosJsonServer = axios.create({
	baseURL: 'http://localhost:5001'
})

export async function GetMenuData() {
	return axiosJsonServer.get('/menu')
		.then(result => result.data)
		.catch(error => {
			console.log(error.message)
			throw error
		});
}

export async function GetCartOrders() {
	return await axiosJsonServer.get('/cart-orders')
		.then(result => result.data)
}

export async function GetMenuProductById(id) {
	return await axiosJsonServer.get(`/menu/${id}`)
		.then(result => result.data)
}


export async function IncreaseOrderQuantity(id) {
	return await axiosJsonServer.put(`/cart-orders/${id}/increment`)
		.then(result => result)
}


export async function DecreaseOrderQuantity(id) {
	return await axiosJsonServer.put(`/cart-orders/${id}/decrement`)
		.then(result => result)
}


export async function RemoveOrderFromCart(id) {
	return await axiosJsonServer.delete(`/cart-orders/${id}/remove`)
		.then(result => result)
}

export async function AddOrderToCart(id) {
	return await axiosJsonServer.post(`cart-orders/${id}/add`).then(result => result)
}