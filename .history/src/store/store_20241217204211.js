import { writable } from 'svelte/store';

export const categoryProducts = writable([]);
export const categoryProductsLoading = writable(true);

export const fetchCategoryProducts = async () => {
	const response = await fetch('https://dummyjson.com/products/category-list');
	const data = await response.json();
	categoryProducts.set(data);
	categoryProductsLoading.set(false);
};
