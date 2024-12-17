import { fetchSingleProducts } from '../../../store/store';

// This is the load function, it will be called automatically by SvelteKit
export const load = async ({ params }) => {
	const { id } = params; // Get the `id` from the URL, e.g., /products/1

	// Call the function to fetch the product based on the dynamic `id`
	await fetchSingleProducts({ params: { id } });

	return {}; // No extra data needs to be passed to the page component
};
