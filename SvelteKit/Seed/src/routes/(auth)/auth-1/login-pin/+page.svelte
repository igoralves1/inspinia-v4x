<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import { Button, Card, Col, Container, Form, Row } from '@sveltestrap/sveltestrap';
	import AuthLogo from '$lib/components/AuthLogo.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import OtpInput from '$lib/components/OtpInput.svelte';

	import user1 from '$lib/assets/images/users/user-1.jpg';

	let otpValue = '';
</script>

<PageMeta title="Login With PIN" />

<div class="auth-box overflow-hidden align-items-center d-flex">
	<Container>
		<Row class="justify-content-center">
			<Col sm="8" md="6" xxl="4">
				<div class="auth-brand text-center mb-4">
					<AuthLogo />
					<h4 class="fw-bold mt-3">Login with PIN! | IN+</h4>
					<p class="text-muted w-lg-75 mx-auto">
						This screen is locked. Enter your PIN to continue.
					</p>
				</div>

				<Card class="p-4 rounded-4">
					<div class="text-center mb-4">
						<img src={user1} class="rounded-circle img-thumbnail avatar-xxl mb-2" alt="thumbnail" />
						<h5 class="fs-md">Damian D.</h5>
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

					<p class="text-muted text-center mt-4 mb-0">
						Not you? Return to
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
