// @ts-nocheck
import { writable } from 'svelte/store';

export const Products = writable([]);
export const singleProducts = writable({});
export const categoryProducts = writable([]);
export const categoryProductsLoading = writable(true);
export const singleProductsLoading = writable(true);
export const ProductsLoading = writable(true);

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

	singleProducts.set(data.products);
	singleProductsLoading.set(false);
};
