const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.put('/cart-orders/:id/increment', (req, res) => {
	const itemId = parseInt(req.params.id, 10);
	const itemToUpdate = router.db.get('cart-orders').find({id: itemId}).value();

	if (itemToUpdate) {
		itemToUpdate.quantity += 1;
		router.db.get('cart-orders').find({id: itemId}).assign(itemToUpdate).write();
		res.json(itemToUpdate);
	} else {
		res.status(404).json({error: 'Item not found'});
	}
});

server.put('/cart-orders/:id/decrement', (req, res) => {
	const itemId = parseInt(req.params.id, 10);
	const itemToUpdate = router.db.get('cart-orders').find({id: itemId}).value();

	if (itemToUpdate) {
		itemToUpdate.quantity -= 1;
		router.db.get('cart-orders').find({id: itemId}).assign(itemToUpdate).write();
		res.json(itemToUpdate)
	} else {
		res.status(404).json({error: 'Item not found'});
	}
});

server.delete('/cart-orders/:id/remove', (req, res) => {
	const orderId = parseInt(req.params.id, 10);
	const orderIndex = router.db.get('cart-orders').findIndex({id: orderId}).value();

	if (orderIndex !== -1) {
		router.db.get('cart-orders').splice(orderIndex, 1).write();
		res.status(200).json({success: true});
	} else {
		res.status(404).json({error: 'Order not found'});
	}
})

server.post('/cart-orders/:id/add', (req, res) => {
	const orderId = parseInt(req.params.id, 10);
	const newOrder = {
		"id": orderId,
		"quantity": 1
	};

	try {
		const orderExists = router.db.get('cart-orders').find({ id: orderId }).value();
		if (orderExists) {
			res.status(200).json({ success: true, message: 'Order already exists' });
		} else {
			router.db.get('cart-orders').push(newOrder).write();
			res.status(200).json({ success: true, message: 'Order added successfully' });
		}
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' });
	}
});

server.use(router);
server.listen(5001, () => {
	console.log('JSON Server is running');
});
