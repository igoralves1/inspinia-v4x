<script lang="ts">
	import Rating from '$lib/components/Rating.svelte';
	import { Card, CardBody } from '@sveltestrap/sveltestrap';
	import type { TestimonialType } from '../types';

	export let testimonial: TestimonialType;
</script>

<Card class="border-light rounded-4 p-3 card-h-100">
	<CardBody class="pb-0 text-center">
		<div class="avatar avatar-xl mx-auto mb-3">
			<img src={testimonial.avatar} alt={testimonial.name} class="img-fluid rounded-circle" />
		</div>
		<Rating rating={testimonial.rating} height="18" width="18" className="gap-1 fs-lg mb-3" />
		<h4 class="mb-2 fs-md">{testimonial.title}</h4>
		<p class="text-muted mb-3 fst-italic fs-sm">"{testimonial.description}"</p>
	</CardBody>
</Card>
