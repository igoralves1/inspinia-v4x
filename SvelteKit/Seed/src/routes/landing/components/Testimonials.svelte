<script lang="ts">
	import TestimonialCard from './TestimonialCard.svelte';
	import { testimonials } from '../data';

	import bgPattern from '$lib/assets/images/bg-pattern.png';

	import client1 from '$lib/assets/images/clients/01.svg';
	import client2 from '$lib/assets/images/clients/02.svg';
	import client3 from '$lib/assets/images/clients/03.svg';
	import client4 from '$lib/assets/images/clients/04.svg';
	import client5 from '$lib/assets/images/clients/05.svg';
	import client6 from '$lib/assets/images/clients/06.svg';
	import client7 from '$lib/assets/images/clients/07.svg';
	import { Col, Container, Row } from '@sveltestrap/sveltestrap';

	const clients = [client1, client2, client3, client4, client5, client6, client7];
</script>

<section class="section-custom position-relative overflow-hidden" id="reviews">
	<div class="position-absolute top-0 start-50 translate-middle-x mt-5 opacity-50">
		<img src={bgPattern} alt="Background pattern" />
	</div>

	<Container class="position-relative">
		<Row>
			<Col sm="12" class="text-center">
				<span class="text-muted rounded-3 d-inline-block">💬 What Our Customers Are Saying</span>
				<h2 class="mt-3 fw-bold mb-5">
					Real Feedback from
					<mark class="fst-italic">Satisfied</mark>
					Clients
				</h2>
			</Col>
		</Row>

		<Row class="justify-content-center">
			{#each testimonials as testimonial, idx (idx)}
				<Col lg="4">
					<TestimonialCard {testimonial} />
				</Col>
			{/each}
		</Row>

		<Row class="justify-content-center mt-5">
			<Col xxl="9">
				<div class="d-flex justify-content-center align-items-center flex-wrap gap-5 mt-4">
					{#each clients as client, idx (idx)}
						<div>
							<a href={null} class="d-block">
								<img src={client} alt="logo" height="42" />
							</a>
						</div>
					{/each}
				</div>
			</Col>
		</Row>
	</Container>
</section>
