<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import { Button, Card, Col, Container, Form, Row } from '@sveltestrap/sveltestrap';
	import AuthLogo from '$lib/components/AuthLogo.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import OtpInput from '$lib/components/OtpInput.svelte';

	let otpValue = '';
</script>

<PageMeta title="Two Factor" />

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
									<h4 class="fw-bold mt-4">Request sent Successfully ! | IN+</h4>
								</div>

								<div class="text-center mb-4">
									<h5 class="text-muted fs-base mb-3">
										We've emailed you a 6-digit verification code we sent to
									</h5>
									<div class="fw-bold fs-3">******6789</div>
								</div>

								<Form>
									<!-- svelte-ignore a11y-label-has-associated-control -->
									<label class="form-label"
										>Enter your 6-digit code <span class="text-danger">*</span></label
									>
									<div class="two-factor mb-3">
										<OtpInput bind:value={otpValue} />
									</div>

									<div class="d-grid">
										<Button type="submit" color="primary" class="fw-semibold py-2">Confirm</Button>
									</div>
								</Form>

								<p class="mt-4 text-muted text-center mb-4">
									Don’t have a code?
									<a href={null} class="text-decoration-underline link-offset-2 fw-semibold"
										>Resend
									</a>
									or
									<a href={null} class="text-decoration-underline link-offset-2 fw-semibold"
										>Call Us
									</a>
								</p>

								<p class="text-muted text-center mb-0">
									Return to
									<a
										href="/auth-2/sign-in"
										class="text-decoration-underline link-offset-3 fw-semibold"
									>
										Sign in
									</a>
								</p>

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
