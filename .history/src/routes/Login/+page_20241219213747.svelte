<script lang="ts">
	// @ts-nocheck
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';

	// Create the form
	const { values, errors, handleSubmit, isSubmitting } = createForm({
		initialValues: {
			username: '', // Ensure this matches the field names
			password: ''
		},
		validationSchema: yup.object().shape({
			username: yup.string().required('Username is required'),
			password: yup.string().required('Password is required')
		}),
		onSubmit: async (formValues) => {
			try {
				console.log('Form submitted:', formValues);
				const response = await fetch('https://dummyjson.com/auth/login', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						...formValues, // Contains username and password
						expiresInMins: 30
					}),
					credentials: 'include'
				});

				if (!response.ok) throw new Error('Invalid username or password');

				const data = await response.json();
				console.log('Login successful:', data);
				localStorage.setItem('authToken', data.token);
				alert('Login successful!');
			} catch (error) {
				console.error('Login failed:', error);
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
			Access
			username
			via
			$values
			--
		/>
		placeholder="Enter your username" />
		{#if $errors.username}
			<!-- Access error via $errors -->
			<p class="error">{$errors.username}</p>
		{/if}
	</div>

	<div>
		<label for="password">Password:</label>
		<input
			id="password"
			type="password"
			bind:value={$values.password}
			<!--
			Access
			password
			via
			$values
			--
		/>
		placeholder="Enter your password" />
		{#if $errors.password}
			<!-- Access error via $errors -->
			<p class="error">{$errors.password}</p>
		{/if}
	</div>

	<button type="submit" disabled={isSubmitting}>
		{isSubmitting ? 'Logging in...' : 'Login'}
	</button>
</form>
