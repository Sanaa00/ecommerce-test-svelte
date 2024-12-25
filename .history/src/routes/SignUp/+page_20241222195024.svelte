<script>
	// @ts-nocheck
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';

	const { form, errors, handleChange, handleSubmit } = createForm({
		initialValues: {
			firstName: '',
			lastName: '',
			age: '',
			email: '',
			username: '',
			password: '',
			gender: ''
		},
		validationSchema: yup.object().shape({
			firstName: yup.string().required('First Name is required'),
			lastName: yup.string().required('Last Name is required'),
			age: yup.number().required('Age is required'),
			email: yup.string().email('Invalid email').required('Email is required'),
			username: yup.string().required('Username is required'),
			password: yup.string().required('Password is required'),
			gender: yup.string().required('Gender is required')
		}),
		onSubmit: async (values) => {
			// onSubmit: async (values) => {
			try {
				console.log('Submitting form:', values);
				const response = await fetch('https://dummyjson.com/users/add', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(values) // Sending form data as JSON
				});

				if (!response.ok) throw new Error('Failed to add user');

				const data = await response.json();
				console.log('User added successfully:', data);

				// Check if 'data.token' exists
				// if (data.token) {
				// 	localStorage.setItem('authToken', data.token);
				// 	console.log('Token saved to localStorage:', data.token);
				// } else {
				// 	console.error('No token received in response');
				// }

				alert('User added successfully!');
			} catch (error) {
				alert(error.message);
			}
			// };/
		}
	});
</script>

<div class="flex min-h-screen flex-col content-center items-center justify-center px-60">
	<p class=" flex text-lg font-bold text-cyan-800">Create to Your Account</p>
	<form on:submit={handleSubmit} class="flex flex-col">
		<label for="firstName" class="mt-4">First Name</label>
		<input
			class="w-80"
			id="firstName"
			name="firstName"
			on:change={handleChange}
			bind:value={form.firstName}
		/>
		{#if errors.firstName}
			<small class="text-red-500">{errors.firstName}</small>
		{/if}

		<label for="lastName" class="mt-4">Last Name</label>
		<input
			class="w-80"
			id="lastName"
			name="lastName"
			on:change={handleChange}
			bind:value={form.lastName}
		/>
		{#if errors.lastName}
			<small class="text-red-500">{errors.lastName}</small>
		{/if}

		<label for="age" class="mt-4">Age</label>
		<input
			class="w-80"
			id="age"
			name="age"
			type="number"
			on:change={handleChange}
			bind:value={form.age}
		/>
		{#if errors.age}
			<small class="text-red-500">{errors.age}</small>
		{/if}

		<label for="email" class="mt-4">Email</label>
		<input
			class="w-80"
			id="email"
			name="email"
			type="email"
			on:change={handleChange}
			bind:value={form.email}
		/>
		{#if errors.email}
			<small class="text-red-500">{errors.email}</small>
		{/if}

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

		<label for="gender" class="mt-4">Gender</label>
		<select
			class="w-80"
			id="gender"
			name="gender"
			on:change={handleChange}
			bind:value={form.gender}
		>
			<option value="male">Male</option>
			<option value="female">Female</option>
			<option value="other">Other</option>
		</select>
		{#if errors.gender}
			<small class="text-red-500">{errors.gender}</small>
		{/if}

		<button type="submit" class="mt-10 w-80 rounded-sm bg-cyan-800 py-2 text-white">Submit</button>
	</form>
</div>
