<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import checkmark from '$lib/assets/images/checkmark.png';
	import AuthLogo from '$lib/components/AuthLogo.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import { Button, Card, Col, Container, Form, Row } from '@sveltestrap/sveltestrap';
</script>

<PageMeta title="Success Mail" />

<div class="auth-box d-flex align-items-center">
	<Container xxl>
		<Row class="align-items-center justify-content-center">
			<Col xl="10">
				<Card class="rounded-4">
					<Row class="justify-content-between g-0">
						<Col lg="6">
							<div class="card-body">
								<div class="auth-brand text-center mb-4">
									<AuthLogo />
								</div>

								<Form>
									<div class="mb-4">
										<div class="avatar-xxl mx-auto mt-2">
											<div
												class="avatar-title bg-light-subtle border border-light border-dashed rounded-circle"
											>
												<img src={checkmark} alt="checkmark" height="64" />
											</div>
										</div>
									</div>

									<h4 class="fw-bold text-center mb-4">Well Done! Email verified Successfully</h4>

									<div class="d-grid">
										<Button type="submit" color="primary" class="fw-semibold py-2">
											Back to Dashboard
										</Button>
									</div>
								</Form>

								<p class="text-center text-muted mt-4 mb-0">
									© 2014 - {currentYear} INSPINIA — by
									<span class="fw-semibold">{author}</span>
								</p>
							</div>
						</Col>

						<Col lg="6" class="d-none d-lg-block">
							<div class="h-100 position-relative card-side-img rounded-end-4 overflow-hidden">
								<div
									class="p-4 card-img-overlay rounded-4 rounded-start-0 auth-overlay d-flex align-items-end justify-content-center"
								></div>
							</div>
						</Col>
					</Row>
				</Card>
			</Col>
		</Row>
	</Container>
</div>
