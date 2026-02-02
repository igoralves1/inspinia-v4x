<script lang="ts">
	import PricingCard from './PricingCard.svelte';
	import { pricingPlans } from '../data';
	import { Col, Container, Row } from '@sveltestrap/sveltestrap';
</script>

<section class="section-custom" id="plans">
	<Container>
		<Row>
			<Col sm="12" class="text-center">
				<span class="text-muted rounded-3 d-inline-block">💰 Transparent and flexible pricing</span>
				<h2 class="mt-3 fw-bold mb-5">
					Choose the
					<mark class="fst-italic">License</mark>
					That Fits Your Needs
				</h2>
			</Col>
		</Row>

		<Row class="justify-content-center">
			<Col xxl="10">
				<Row>
					{#each pricingPlans as plan, i (i)}
						<Col lg="4" class={plan.isPopular ? 'my-4 my-lg-0' : ''}>
							<PricingCard {plan} />
						</Col>
					{/each}
				</Row>
			</Col>
		</Row>
	</Container>
</section>
