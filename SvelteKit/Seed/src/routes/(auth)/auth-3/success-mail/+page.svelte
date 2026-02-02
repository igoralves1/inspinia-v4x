<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import { Button, Card, Col, Form, Row } from '@sveltestrap/sveltestrap';
	import AuthLogo from '$lib/components/AuthLogo.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import checkmark from '$lib/assets/images/checkmark.png';
</script>

<PageMeta title="Success Mail" />

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
				<div class="card-body min-vh-100 d-flex flex-column justify-content-center">
					<div class="auth-brand mb-0 text-center">
						<AuthLogo />
					</div>

					<div class="mt-auto text-center">
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
								<Button color="primary" type="submit" class="fw-semibold py-2">
									Back to Dashboard
								</Button>
							</div>
						</Form>
					</div>

					<p class="text-muted text-center mt-4 mb-0">
						Return to
						<a href="/auth-3/sign-in" class="text-decoration-underline link-offset-3 fw-semibold">
							Sign in
						</a>
					</p>

					<p class="text-center text-muted mt-auto mb-0">
						© 2014 - {currentYear} INSPINIA — by
						<span class="fw-semibold">{author}</span>
					</p>
				</div>
			</Card>
		</Col>
	</Row>
</div>
