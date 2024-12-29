<script setup>
import { Message } from 'primevue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

import { ref } from 'vue';

const value = ref(null);
</script>
<template>
	<div class="flex flex-column gap-2">
		<label for="username">Username</label>
		<InputText id="username" type="text" v-model="value" />
		<Message size="small" severity="secondary" variant="simple"
			>Enter your username to reset your password.</Message
		>
	</div>

	<div class="card flex justify-center mt-2">
		<Button label="Verify" icon="pi pi-user" />
	</div>
</template>
