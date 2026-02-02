<script lang="ts">
	import { Card, CardBody, CardFooter, Col, Container, Row } from '@sveltestrap/sveltestrap';
	import Icon from '@iconify/svelte';
	import { services } from '../data';
</script>

<section class="section-custom pb-5" id="services">
	<Container>
		<Row>
			<Col sm="12" class="text-center">
				<span class="text-muted rounded-3 d-inline-block">🚀 Empowering your digital journey</span>
				<h2 class="mt-3 fw-bold mb-5">
					Discover Our
					<mark class="fst-italic">Core Services</mark>
					and Capabilities
				</h2>
			</Col>
		</Row>

		<Row>
			{#each services as service, idx (idx)}
				<Col xl="3" md="6">
					<Card class="border-0 p-2 card-h-100">
						<CardBody class="pb-0">
							<div class="avatar-xl mb-3">
								<span class="avatar-title text-bg-secondary rounded-circle fs-22">
									<Icon icon={service.icon} />
								</span>
							</div>
							<h4 class="mb-2">{service.name}</h4>
							<p class="text-muted mb-3">{service.description}</p>
						</CardBody>
						<CardFooter class="border-0 pt-0">
							<a href={null} class="link-primary fw-semibold d-flex align-items-center gap-1">
								Know more
								<Icon icon="tabler:arrow-right" />
							</a>
						</CardFooter>
					</Card>
				</Col>
			{/each}
		</Row>
	</Container>
</section>
