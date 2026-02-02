<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import { Card, CardBody, Col, Container, Row } from '@sveltestrap/sveltestrap';
	import AuthLogo from '$lib/components/AuthLogo.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
</script>

<PageMeta title="401 Error" />

<div class="auth-box d-flex align-items-center">
	<Container fluid="xxl">
		<Row class="align-items-center justify-content-center">
			<Col xl="10">
				<Card class="rounded-4 p-0 border-0">
					<CardBody class="p-0">
						<Row class="g-0 justify-content-between">
							<Col lg="6">
								<Card class="mb-0 border-0 rounded-4">
									<CardBody>
										<div class="auth-brand text-center mb-3">
											<AuthLogo />
										</div>

										<div class="p-2 text-center">
											<div class="error-wave-container justify-content-center gap-1">
												<span class="error-wave-char">4</span>
												<span class="error-wave-char">0</span>
												<span class="error-wave-char">1</span>
											</div>

											<h3 class="fw-bold">Unauthorized Access</h3>
											<p class="text-muted">You don't have permission to view this page.</p>

											<a href="/" class="btn btn-primary mt-3 rounded-pill"> Back to Safety </a>
										</div>

										<p class="text-center text-muted mt-5 mb-0">
											© 2014 - {currentYear} INSPINIA — by
											<span class="fw-bold">{author}</span>
										</p>
									</CardBody>
								</Card>
							</Col>

							<Col lg="6" class="d-none d-lg-block">
								<div
									class="h-100 position-relative card-side-img rounded-end-4 rounded-0 overflow-hidden"
								>
									<div
										class="p-4 card-img-overlay rounded-4 rounded-start-0 auth-overlay d-flex align-items-end justify-content-center"
									></div>
								</div>
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Col>
		</Row>
	</Container>
</div>
