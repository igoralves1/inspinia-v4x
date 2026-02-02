<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import { Button, Card, Col, Container, Form, Row } from '@sveltestrap/sveltestrap';
	import AuthLogo from '$lib/components/AuthLogo.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import OtpInput from '$lib/components/OtpInput.svelte';

	let otpValue = '';
</script>

<PageMeta title="Two Factor" />

<div class="auth-box overflow-hidden align-items-center d-flex">
	<Container>
		<Row class="justify-content-center">
			<Col sm="8" md="6" xxl="4">
				<div class="auth-brand text-center mb-4">
					<AuthLogo />
					<h4 class="fw-bold mt-3">Two-Factor Verification ! | IN+</h4>
					<p class="text-muted w-lg-75 mx-auto">
						Let’s get you signed in. Enter your PIN to continue
					</p>
				</div>

				<Card class="p-4 rounded-4">
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
						<OtpInput bind:value={otpValue} />

						<div class="d-grid mt-3">
							<Button type="submit" color="primary" class="fw-semibold py-2 w-100">Confirm</Button>
						</div>
					</Form>

					<p class="mt-4 text-muted text-center mb-4">
						Don’t have a code?
						<a href={null} class="text-decoration-underline link-offset-2 fw-semibold">Resend</a>
						or
						<a href={null} class="text-decoration-underline link-offset-2 fw-semibold">Call Us</a>
					</p>
					<p class="text-muted text-center mb-0">
						Return to
						<a href="/auth-1/sign-in" class="text-decoration-underline link-offset-3 fw-semibold">
							Sign in
						</a>
					</p>
				</Card>

				<p class="text-center text-muted mt-4 mb-0">
					© 2014 - {currentYear} INSPINIA — by <span class="fw-semibold">{author}</span>
				</p>
			</Col>
		</Row>
	</Container>
</div>
