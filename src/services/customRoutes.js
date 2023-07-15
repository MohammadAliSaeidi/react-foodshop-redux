const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.put('/cart-items/:id/increment', (req, res) => {
	const itemId = parseInt(req.params.id, 10);
	const itemToUpdate = router.db.get('cart-items').find({id: itemId}).value();
	console.log(itemId)
	console.log(itemToUpdate)

	if (itemToUpdate) {
		itemToUpdate.quantity += 1;
		router.db.get('cart-items').find({id: itemId}).assign(itemToUpdate).write();
		res.json(itemToUpdate);
	} else {
		res.status(404).json({error: 'Item not found'});
	}
});

server.use(router);
server.listen(3001, () => {
	console.log('JSON Server is running');
});
