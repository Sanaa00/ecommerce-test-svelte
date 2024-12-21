<script lang="ts">
	// @ts-nocheck
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';

	// Define initial values and validation schema
	const initialValues = {
		username: '',
		password: ''
	};

	const validationSchema = yup.object({
		username: yup.string().required('Username is required'),
		password: yup.string().required('Password is required')
	});

	// Create the form
	const { values, errors, handleSubmit, isSubmitting } = createForm({
		initialValues,
		validationSchema,
		onSubmit: async (formValues) => {
			try {
				const response = await fetch('https://dummyjson.com/auth/login', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						...formValues,
						expiresInMins: 30 // Optional
					}),
					credentials: 'include'
				});

				if (!response.ok) {
					throw new Error('Invalid username or password');
				}

				const data = await response.json();
				console.log(data); // Handle token or user info here
				localStorage.setItem('authToken', data.token); // Save token
				alert('Login successful!');
				// Redirect or update UI after successful login
			} catch (error) {
				console.error(error);
				alert(error.message); // Show error to the user
			}
		}
	});
</script>

<form on:submit|preventDefault={handleSubmit}>
	<div>
		<label for="username">Username:</label>
		<input
			id="username"
			type="text"
			bind:value={values.username}
			placeholder="Enter your username"
		/>
		{#if errors.username}
			<p class="error">{errors.username}</p>
		{/if}
	</div>

	<div>
		<label for="password">Password:</label>
		<input
			id="password"
			type="password"
			bind:value={values.password}
			placeholder="Enter your password"
		/>
		{#if errors.password}
			<p class="error">{errors.password}</p>
		{/if}
	</div>

	<button type="submit" disabled={isSubmitting}>
		{isSubmitting ? 'Logging in...' : 'Login'}
	</button>
</form>
