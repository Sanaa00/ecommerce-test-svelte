<script>
	// @ts-nocheck
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';

	const { form, errors, handleChange, handleSubmit } = createForm({
		initialValues: {
			username: '',
			password: ''
		},
		validationSchema: yup.object().shape({
			username: yup.string().required('Username is required'),
			password: yup.string().required('Password is required')
		}),
		onSubmit: async (values) => {
			try {
				console.log('Submitting form:', values);
				const response = await fetch('https://dummyjson.com/auth/login', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						...values, // send username and password from form
						expiresInMins: 30 // optional, defaults to 60
					}),
					credentials: 'include' // Include cookies (e.g., accessToken) in the request
				});

				if (!response.ok) throw new Error('Invalid username or password');

				const data = await response.json();
				console.log('Login successful:', data);
				alert('Login successful!');

				// Optionally, save the token or take further action
				localStorage.setItem('authToken', data.token); // Store token
			} catch (error) {
				console.error('Error:', error.message);
				alert(error.message);
			}
		}
	});
</script>

<div class="min-h-screen px-60">
	<p class="mt-10 flex text-lg font-bold text-cyan-800">Add User</p>
	<form on:submit={handleSubmit} class="flex flex-col">
		<label for="username" class="mt-4">Username</label>
		<input
			class="w-80"
			id="username"
			name="username"
			on:change={handleChange}
			bind:value={form.username}
		/>
		{#if errors.username}
			<small class="text-red-500">{errors.username}</small>
		{/if}

		<label for="password" class="mt-4">Password</label>
		<input
			class="w-80"
			id="password"
			name="password"
			type="password"
			on:change={handleChange}
			bind:value={form.password}
		/>
		{#if errors.password}
			<small class="text-red-500">{errors.password}</small>
		{/if}

		<button type="submit" class="mt-10 w-80 rounded-sm bg-cyan-800 py-2 text-white">Submit</button>
	</form>
</div>
