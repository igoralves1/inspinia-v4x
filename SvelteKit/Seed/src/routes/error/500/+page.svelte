<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import img500 from '$lib/assets/images/svg/500.svg';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import { Card, CardBody, Col, Row } from '@sveltestrap/sveltestrap';
</script>

<PageMeta title="500 Error" />

<div class="auth-box p-0 w-100">
	<Row class="w-100 g-0">
		<Col>
			<div class="h-100 position-relative card-side-img rounded-0 overflow-hidden">
				<div
					class="p-4 card-img-overlay auth-overlay d-flex align-items-end justify-content-center"
				></div>
			</div>
		</Col>

		<Col xl="auto">
			<Card class="auth-box-form border-0 mb-0">
				<CardBody class="min-vh-100 d-flex flex-column justify-content-center">
					<div class="p-2 text-center mt-auto">
						<img src={img500} alt="500" class="img-fluid" />
						<h3 class="fw-bold text-uppercase">Internal Server Error</h3>
						<p class="text-muted">Something went wrong on our end. Please try again later.</p>

						<a href="/" class="btn btn-primary mt-3 rounded-pill">Go Home</a>
					</div>

					<p class="text-center text-muted mt-auto mb-0">
						© 2014 - {currentYear} INSPINIA — by
						<span class="fw-bold">{author}</span>
					</p>
				</CardBody>
			</Card>
		</Col>
	</Row>
</div>
