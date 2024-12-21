<script lang="ts">
	// @ts-nocheck
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';

	// Create the form
	const { values, errors, handleSubmit, isSubmitting } = createForm({
		initialValues: {
			username: '', // Ensure the keys match the form fields
			password: ''
		},
		validationSchema: yup.object().shape({
			username: yup.string().required('Username is required'),
			password: yup.string().required('Password is required')
		}),
		onSubmit: async (formValues) => {
			try {
				console.log('Submitting form:', formValues);
				const response = await fetch('https://dummyjson.com/auth/login', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						...formValues,
						expiresInMins: 30
					}),
					credentials: 'include'
				});

				if (!response.ok) throw new Error('Invalid username or password');

				const data = await response.json();
				localStorage.setItem('authToken', data.token);
				alert('Login successful!');
			} catch (error) {
				alert(error.message);
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
			bind:value={$values.username}
			<!--
			Correctly
			access
			the
			reactive
			store
			--
		/>
		placeholder="Enter your username" />
		{#if $errors.username}
			<!-- Use $errors for validation messages -->
			<p class="error">{$errors.username}</p>
		{/if}
	</div>

	<div>
		<label for="password">Password:</label>
		<input
			id="password"
			type="password"
			bind:value={$values.password}
			placeholder="Enter your password"
		/>
		{#if $errors.password}
			<p class="error">{$errors.password}</p>
		{/if}
	</div>

	<button type="submit" disabled={isSubmitting}>
		{isSubmitting ? 'Logging in...' : 'Login'}
	</button>
</form>
