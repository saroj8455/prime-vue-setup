<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Welcome from './components/Welcome.vue';
</script>

<template>
	<main>
		<h1 class="text-center">Prime Vue Setup</h1>
		<div class="flex gap-4">
			<i class="pi pi-check"></i>
			<i class="pi pi-times"></i>
			<span class="pi pi-search"></span>
			<span class="pi pi-user"></span>
		</div>
		<Welcome />
	</main>
	<RouterView />
</template>
