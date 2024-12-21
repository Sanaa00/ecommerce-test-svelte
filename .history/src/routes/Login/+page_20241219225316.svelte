<script>
	// @ts-nocheck

	import { createForm } from 'svelte-forms-lib';
	// import { formData } from '../../Store/store';
	import * as yup from 'yup';

	const { form, errors, state, handleChange, handleSubmit } = createForm({
		initialValues: {
			id: 100,
			username: '',
			password: ''
		},
		validationSchema: yup.object().shape({
			// title: yup.string().oneOf(['Mr', 'Mrs', 'Mx']).required(),
			username: yup.string().required(),
			password: yup.string().required()
		}),
		onSubmit: async (values) => {
			console.log(JSON.stringify(values));
			console.log(values);
			try {
				console.log('Submitting form:', values);
				const response = await fetch('https://dummyjson.com/users/add', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						...values,
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

<div class="min-h-screen px-60">
	<p class=" mt-10 flex text-lg font-bold text-cyan-800">About us</p>
	<form on:submit={handleSubmit} class="flex flex-col">
		<!-- <label for="title" class="mt-4">title</label>

		<select class="w-80" id="title" name="title" on:change={handleChange} bind:value={$form.title}>
			<option>mr</option>
			<option>Mrs</option>
			<option>Mx</option>
			 <option>mr</option> -->
		<!-- </select> -->
		<!-- {#if $errors.title}<small>{$errors.title}</small> -->
		<!-- {/if}  -->

		<label for="username" class="mt-4">username</label>
		<input
			class="w-80"
			id="username"
			name="username"
			on:change={handleChange}
			on:blur={handleChange}
			bind:value={$form.username}
		/>
		{#if $errors.username}
			<small>{$errors.username}</small>
		{/if}

		<label for="password" class="mt-4">password</label>
		<input
			class="w-80"
			name="password"
			id="password"
			on:change={handleChange}
			on:blur={handleChange}
			bind:value={$form.password}
		/>
		{#if $errors.password}
			<small>{$errors.password}</small>
		{/if}

		<button type="submit" class="mt-10 w-80 rounded-sm bg-cyan-800 py-2 text-white">Submit</button>
	</form>
</div>

<!-- <script lang="ts">
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
			placeholder="Enter your username"
		/>
		{#if $errors.username}
			Use $errors for validation messages -->
<!-- <p class="error">{$errors.username}</p>
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
</form> -->
