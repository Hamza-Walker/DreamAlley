
const {db} = require('./db').db;

const {products, newProduct} = require ('./schema/index.ts');

async function populateProducts () {

	const newProducts  = [
        { name: 'Product 1', description: 'This is the first product.', price: 100 },
        { name: 'Product 2', description: 'This is the second product.', price: 200 },
        { name: 'Product 3', description: 'This is the third product.', price: 300 },
    ];
	

	for (const product of newProducts) {
		await db.insert(products).values(product);
	}

	console.log('Products populated successfully');

}
populateProducts().catch(console.error);

