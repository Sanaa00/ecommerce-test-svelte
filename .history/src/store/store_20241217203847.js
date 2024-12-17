import { writable } from 'svelte/store';

export const products = writable([]);

export const fetchProducts = async () => {
	const response = await fetch('https://dummyjson.com/products/category-list');
	const data = await response.json();
	products.set(data);
};
