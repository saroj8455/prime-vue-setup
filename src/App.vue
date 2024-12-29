<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Welcome from './components/Welcome.vue';
</script>

<template>
	<main>
		<h2 class="text-center">Prime Vue Setup</h2>
		<Welcome />
	</main>
	<RouterView />
</template>
