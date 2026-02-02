<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import { Button, Card, Col, Form, Row } from '@sveltestrap/sveltestrap';
	import AuthLogo from '$lib/components/AuthLogo.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import OtpInput from '$lib/components/OtpInput.svelte';

	let otpValue = '';
</script>

<PageMeta title="Two Factor" />

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
						<h4 class="fw-bold">Two-Factor Verification ! | IN+</h4>
						<p class="text-muted mx-auto mb-5">
							Let’s get you signed in. Enter your PIN to continue
						</p>

						<div class="text-center mb-4">
							<h5 class="text-muted fs-base mb-3">
								We've emailed you a 6-digit verification code we sent to
							</h5>
							<div class="fw-bold fs-3">******6789</div>
						</div>

						<Form>
							<!-- svelte-ignore a11y-label-has-associated-control -->
							<label class="form-label d-flex"
								>Enter your 6-digit code <span class="text-danger">*</span></label
							>
							<div class="mb-3 two-factor">
								<OtpInput bind:value={otpValue} />
							</div>

							<div class="d-grid">
								<Button color="primary" type="submit" class="fw-semibold py-2">Confirm</Button>
							</div>
						</Form>

						<p class="mt-4 text-muted text-center mb-4">
							Don’t have a code?
							<a href={null} class="text-decoration-underline link-offset-2 fw-semibold">Resend</a>
							or
							<a href={null} class="text-decoration-underline link-offset-2 fw-semibold">Call Us</a>
						</p>
					</div>

					<p class="text-muted text-center mt-4 mb-0">
						Return to
						<a href="/auth-3/sign-in" class="text-decoration-underline link-offset-3 fw-semibold"
							>Sign in
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
