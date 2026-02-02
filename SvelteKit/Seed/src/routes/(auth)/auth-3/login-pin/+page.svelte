<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import { Button, Card, Col, Form, Row } from '@sveltestrap/sveltestrap';
	import AuthLogo from '$lib/components/AuthLogo.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import OtpInput from '$lib/components/OtpInput.svelte';
	import user1 from '$lib/assets/images/users/user-1.jpg';

	let otpValue = '';
</script>

<PageMeta title="Login With PIN" />

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
						<h4 class="fw-bold">Welcome to IN+</h4>
						<p class="text-muted mx-auto mb-5">
							This screen is locked. Enter your PIN to continue.
						</p>

						<div class="text-center mb-4">
							<img
								src={user1}
								class="rounded-circle img-thumbnail avatar-xxl mb-2"
								alt="thumbnail"
							/>
							<h5 class="fs-md">Damian D.</h5>
						</div>

						<Form>
							<!-- svelte-ignore a11y-label-has-associated-control -->
							<label class="form-label d-flex">
								Enter your 6-digit code <span class="text-danger ms-1">*</span>
							</label>
							<div class="mb-3 two-factor">
								<OtpInput bind:value={otpValue} />
							</div>

							<div class="d-grid">
								<Button color="primary" type="submit" class="fw-semibold py-2">Confirm</Button>
							</div>
						</Form>
					</div>

					<p class="text-muted text-center mt-4 mb-0">
						Not you? Return to
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
