<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import AuthLogo from '$lib/components/AuthLogo.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import OtpInput from '$lib/components/OtpInput.svelte';
	import user1 from '$lib/assets/images/users/user-1.jpg';
	import { Button, Card, Col, Container, Form, Row } from '@sveltestrap/sveltestrap';

	let otpValue = '';
</script>

<PageMeta title="Login With PIN" />

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
									<h4 class="fw-bold mt-4">Welcome to IN+</h4>
									<p class="text-muted w-lg-75 mx-auto">
										This screen is locked. Enter your PIN to continue.
									</p>
								</div>

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
									<label class="form-label"
										>Enter your 6-digit code <span class="text-danger">*</span></label
									>
									<div class="mb-3 two-factor">
										<OtpInput bind:value={otpValue} />
									</div>

									<div class="d-grid">
										<Button type="submit" color="primary" class="fw-semibold py-2 w-100">
											Confirm
										</Button>
									</div>
								</Form>

								<p class="text-muted text-center mt-4 mb-0">
									Not you? Return to
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
							<div
								class="h-100 position-relative card-side-img rounded-end-4 rounded-0 overflow-hidden"
							>
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
