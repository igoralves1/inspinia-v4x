<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import { Button, Card, CardBody, Col, Row } from '@sveltestrap/sveltestrap';
	import AuthLogo from '$lib/components/AuthLogo.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import maintenance from '$lib/assets/images/svg/maintenance.svg';
</script>

<PageMeta title="Maintenance" />

<div class="auth-box d-flex align-items-center">
	<div class="container-xxl">
		<Row class="align-items-center justify-content-center">
			<Col xl="6">
				<Card class="mb-0 rounded-4">
					<CardBody>
						<div class="auth-brand text-center mb-0">
							<AuthLogo />
						</div>

						<div class="p-2 text-center">
							<div class="w-md-50 mx-auto">
								<img src={maintenance} alt="Maintenance" class="img-fluid" />
							</div>

							<h3 class="fw-bold text-uppercase">Site Under Maintenance</h3>
							<p class="text-muted">
								We’re currently performing scheduled maintenance.
								<br />Please check back soon.
							</p>

							<Button color="primary" class="mt-3 rounded-pill me-1">Call Now</Button>
							<Button color="info" class="mt-3 rounded-pill">Email Us</Button>
						</div>

						<p class="text-center text-muted mt-5 mb-0">
							© 2014 - {currentYear} INSPINIA — by
							<span class="fw-bold">{author}</span>
						</p>
					</CardBody>
				</Card>
			</Col>
		</Row>
	</div>
</div>
