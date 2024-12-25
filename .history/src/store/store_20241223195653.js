// @ts-nocheck
import { writable } from 'svelte/store';

export const Products = writable([]);
export const singleProducts = writable({});
export const categoryProducts = writable([]);
export const categoryProductsLoading = writable(true);
export const singleProductsLoading = writable(true);
export const ProductsLoading = writable(true);
export const productByCategoryLoading = writable(true);
export const productByCategory = writable([]);
export const searchProduct = writable([]);
export const search = writable('');
export const searchProductLoading = writable(true);

export const fetchCategoryProducts = async () => {
	const response = await fetch('https://dummyjson.com/products/category-list');
	const data = await response.json();
	categoryProducts.set(data);
	categoryProductsLoading.set(false);
};
export const fetchProducts = async () => {
	const response = await fetch('https://dummyjson.com/products');
	const data = await response.json();

	Products.set(data.products);
	ProductsLoading.set(false);
};
export const fetchSingleProducts = async ({ params }) => {
	const { id } = params;
	const response = await fetch(`https://dummyjson.com/products/${id}`);
	const data = await response.json();

	singleProducts.set(data);
	singleProductsLoading.set(false);
};
export const fetchProductByCategory = async ({ category }) => {
	const response = await fetch(`https://dummyjson.com/products/category/${category}`);
	const data = await response.json();

	productByCategory.set(data);
	productByCategoryLoading.set(false);
};
export const fetchSearchProduct = async ({ search }) => {
	const response = await fetch(`https://dummyjson.com/products/search?q=${search}`);
	const data = await response.json();

	searchProduct.set(data);
	searchProductLoading.set(false);
};
export const addCart = async ({ id, quantity }) => {
	const response = await fetch('https://dummyjson.com/carts/add', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			userId: 1, // ID of the user
			products: [
				{ id: 144, quantity: 3 }, // Product 1
				{ id: 98, quantity: 2 } // Product 2
			]
		})
	})
		.then((res) => res.json())
		.then((data) => console.log('Cart added:', data))
		.catch((err) => console.error('Error:', err));
	const data = await response.json();

	searchProduct.set(data);
	searchProductLoading.set(false);
};
