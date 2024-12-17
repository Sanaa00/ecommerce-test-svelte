import { writable } from 'svelte/store';

export const products = writable([]);

export const fetchProducts = async () => {
	const response = await fetch('');
	const data = await response.json();
	products.set(data);
};
