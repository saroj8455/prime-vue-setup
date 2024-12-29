<script setup>
import { Button } from 'primevue';
import Card from 'primevue/card';
</script>

<template>
	<Card>
		<template #title>Simple Card</template>
		<template #content>
			<p class="m-0">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
				consequuntur error repudiandae numquam deserunt quisquam repellat libero
				asperiores earum nam nobis, culpa ratione quam perferendis esse,
				cupiditate neque quas!
			</p>
		</template>
	</Card>
	<Card style="width: 25rem; overflow: hidden; margin-top: 0.5rem">
		<template #header>
			<div class="custom-header">
				<img
					alt="user header"
					src="https://primefaces.org/cdn/primevue/images/card-vue.jpg"
				/>
			</div>
		</template>
		<template #title>Advanced Card</template>
		<template #subtitle>Card subtitle</template>
		<template #content>
			<p class="m-0">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
				consequuntur error repudiandae numquam deserunt quisquam repellat libero
				asperiores earum nam nobis, culpa ratione quam perferendis esse,
				cupiditate neque quas!
			</p>
		</template>
		<template #footer>
			<div class="flex gap-4 mt-1">
				<Button label="Cancel" severity="secondary" outlined class="w-full" />
				<Button label="Save" class="w-full" />
			</div>
		</template>
	</Card>
</template>

<style scoped>
.custom-header img {
	width: 100%;
	object-fit: contain;
	aspect-ratio: 16/9;
}
</style>
