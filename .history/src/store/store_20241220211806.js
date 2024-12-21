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

// authStore.js
// import { writable } from 'svelte/store';

// Create a writable store for the token
export const authToken = writable(localStorage.getItem('authToken'));

export const setAuthToken = (token) => {
	authToken.set(token);
	localStorage.setItem('authToken', token);
};

export const clearAuthToken = () => {
	authToken.set(null);
	localStorage.removeItem('authToken');
};

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
	// const { id } = params;
	const response = await fetch(`https://dummyjson.com/products/category/${category}`);
	const data = await response.json();

	productByCategory.set(data);
	productByCategoryLoading.set(false);
};
