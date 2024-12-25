<script>
	// @ts-nocheck
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	// import {user} fromStore
	// import type { fromStore } from 'svelte/store';
	import { user } from '../../store/store';
	import { navigate } from 'svelte-routing';
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
				user.set(data);

				// Check if 'data.token' exists
				// if (data.token) {
				// 	localStorage.setItem('authToken', data.token);
				// 	console.log('Token saved to localStorage:', data.token);
				// } else {
				// 	console.error('No token received in response');
				// }

				alert('User added successfully!');
				navigate('/Products');
			} catch (error) {
				alert(error.message);
			}
			// };/
		}
	});
</script>

<div class="my-20 flex min-h-screen flex-col items-center px-60 text-gray-700">
	{console.log('user here in store', $user)}
	<p class="flex font-semibold">Create Your Account</p>
	<form on:submit={handleSubmit} class="flex flex-col">
		<div class="mt-10 flex flex-col">
			<label for="firstName" class="ml-">First Name</label>
			<input
				class="mt-2 w-72 rounded-sm border-2 border-gray-300 py-1 outline-none transition duration-300 ease-in-out hover:border-gray-400 hover:duration-300 focus:border-zard focus:duration-300"
				id="firstName"
				name="firstName"
				on:change={handleChange}
				bind:value={form.firstName}
				placeholder=" Your first name"
			/>
			{#if errors.firstName}
				<small class="text-sm text-red-500">{errors.firstName}</small>
			{/if}
		</div>
		<div class="mt-2 flex flex-col">
			<label for="lastName" class="mt-4">Last Name</label>
			<input
				class="mt-2 w-72 rounded-sm border-2 border-gray-300 py-1 outline-none transition duration-300 ease-in-out hover:border-gray-400 hover:duration-300 focus:border-zard focus:duration-300"
				id="lastName"
				name="lastName"
				on:change={handleChange}
				bind:value={form.lastName}
			/>
			{#if errors.lastName}
				<small class="text-sm text-red-500">{errors.lastName}</small>
			{/if}
		</div>

		<div class="mt-2 flex flex-col">
			<label for="age" class="mt-4">Age</label>
			<input
				class="mt-2 w-72 rounded-sm border-2 border-gray-300 py-1 outline-none transition duration-300 ease-in-out hover:border-gray-400 hover:duration-300 focus:border-zard focus:duration-300"
				id="age"
				name="age"
				type="number"
				on:change={handleChange}
				bind:value={form.age}
			/>
			{#if errors.age}
				<small class="text-sm text-red-500">{errors.age}</small>
			{/if}
		</div>

		<div class="mt-2 flex flex-col">
			<label for="email" class="mt-4">Email</label>
			<input
				class="mt-2 w-72 rounded-sm border-2 border-gray-300 py-1 outline-none transition duration-300 ease-in-out hover:border-gray-400 hover:duration-300 focus:border-zard focus:duration-300"
				id="email"
				name="email"
				type="email"
				on:change={handleChange}
				bind:value={form.email}
			/>
			{#if errors.email}
				<small class="text-sm text-red-500">{errors.email}</small>
			{/if}
		</div>

		<div class="mt-2 flex flex-col">
			<label for="username" class="mt-4">Username</label>
			<input
				class="mt-2 w-72 rounded-sm border-2 border-gray-300 py-1 outline-none transition duration-300 ease-in-out hover:border-gray-400 hover:duration-300 focus:border-zard focus:duration-300"
				id="username"
				name="username"
				on:change={handleChange}
				bind:value={form.username}
			/>
			{#if errors.username}
				<small class="text-sm text-red-500">{errors.username}</small>
			{/if}
		</div>
		<div class="mt-2 flex flex-col">
			<label for="password" class="mt-4">Password</label>
			<input
				class="mt-2 w-72 rounded-sm border-2 border-gray-300 py-1 outline-none transition duration-300 ease-in-out hover:border-gray-400 hover:duration-300 focus:border-zard focus:duration-300"
				id="password"
				name="password"
				type="password"
				on:change={handleChange}
				bind:value={form.password}
			/>
			{#if errors.password}
				<small class="text-sm text-red-500">{errors.password}</small>
			{/if}
		</div>

		<div class="mt-2 flex flex-col">
			<label for="gender" class="mt-4">Gender</label>
			<select
				class="mt-2 w-72 rounded-sm border-2 border-gray-300 py-1 outline-none transition duration-300 ease-in-out hover:border-gray-400 hover:duration-300 focus:border-zard focus:duration-300"
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
				<small class="text-sm text-red-500">{errors.gender}</small>
			{/if}
		</div>

		<button
			type="submit"
			class="mt-10 w-72 rounded-sm bg-zard py-2 text-white transition duration-300 hover:bg-opacity-80 hover:duration-300"
			>Submit</button
		>
	</form>
	<p class="text-sm">You have Account ?<a href="/Login">Login</a></p>
</div>
