import { writable } from 'svelte/store';

export const Products = writable([]);
export const categoryProducts = writable([]);
export const categoryProductsLoading = writable(true);
export const ProductsLoading = writable(true);

export const fetchCategoryProducts = async () => {
	const response = await fetch('https://dummyjson.com/products/category-list');
	const data = await response.json();
	categoryProducts.set(data);
	categoryProductsLoading.set(false);
};
export const fetchProducts = async () => {
     const response = await fetch('');
     const data await response.json()
	
     Products.set(data)categoryProductsLoading.set(false);
}