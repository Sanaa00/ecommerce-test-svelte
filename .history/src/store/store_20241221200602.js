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
export const searchproduct = writable([]);
export const searchproductLoading = writable([]);
// export const authToken = writable(localStorage.getItem('authToken'));
// authStore.js
// import { writable } from 'svelte/store';

// Create a writable store for the token
// import { writable } from 'svelte/store';

// Initialize with token from localStorage

// export const setAuthToken = (token) => {
// 	authToken.set(token); // Store token in Svelte store
// 	localStorage.setItem('authToken', token); // Save token to localStorage
// };

// export const clearAuthToken = () => {
// 	authToken.set(null); // Clear token in store
// 	localStorage.removeItem('authToken'); // Remove token from localStorage
// };
// Check if the token is expired
// export const isTokenValid = () => {
// 	const token = localStorage.getItem('authToken');
// 	if (!token) return false;

// 	const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode the JWT token
// 	const expiryTime = decodedToken.exp * 1000; // Convert expiry to milliseconds
// 	return expiryTime > Date.now(); // Check if the token has expired
// };

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
export const fetchSearchProduct = async ({ category }) => {
	// const { id } = params;
	const response = await fetch('https://dummyjson.com/products/search?q=phone');
	const data = await response.json();

	productByCategory.set(data);
	productByCategoryLoading.set(false);
};
