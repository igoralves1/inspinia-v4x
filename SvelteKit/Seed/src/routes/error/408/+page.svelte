<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import { Card, CardBody, Col, Container, Row } from '@sveltestrap/sveltestrap';
	import AuthLogo from '$lib/components/AuthLogo.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
</script>

<PageMeta title="408 Error" />

<div class="auth-box d-flex align-items-center">
	<Container fluid="xxl">
		<Row class="align-items-center justify-content-center">
			<Col xl="10">
				<Card class="rounded-3 p-0 rounded-4 border-0">
					<CardBody class="p-0">
						<Row class="justify-content-between g-0">
							<Col lg="6">
								<Card class="mb-0 border-0 rounded-4">
									<CardBody>
										<div class="auth-brand text-center mb-3">
											<AuthLogo />
										</div>

										<div class="p-2 text-center">
											<div class="error-wave-container error-text-alt justify-content-center gap-1">
												<span class="error-wave-char">4</span>
												<span class="error-wave-char">0</span>
												<span class="error-wave-char">8</span>
											</div>

											<h3 class="fw-bold text-uppercase">Request Timeout</h3>
											<p class="text-muted">
												Your request took too long, and the server timed out. Please try again
												later.
											</p>

											<a href="/" class="btn btn-primary mt-3 rounded-pill">Back to Safety </a>
										</div>
										<p class="text-center text-muted mt-5 mb-0">
											© 2014 - {currentYear} INSPINIA — by
											<span class="fw-bold">{author}</span>
										</p>
									</CardBody>
								</Card>
							</Col>

							<Col lg="6" class="d-none d-lg-block">
								<div class="h-100 position-relative card-side-img rounded-end-4 overflow-hidden">
									<div
										class="p-4 card-img-overlay rounded-start-0 auth-overlay d-flex align-items-end justify-content-center"
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
