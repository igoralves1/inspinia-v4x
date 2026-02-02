<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import { Button, Card, Col, Form, Input, Row } from '@sveltestrap/sveltestrap';
	import AuthLogo from '$lib/components/AuthLogo.svelte';
	import PasswordStrengthBar from '$lib/components/PasswordStrengthBar.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import OtpInput from '$lib/components/OtpInput.svelte';

	let password = '';
	let otpValue = '';
</script>

<PageMeta title="New Password" />

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
						<h4 class="fw-bold">Setup New Password ! | IN++</h4>
						<p class="text-muted auth-sub-text mx-auto mb-4">
							We've emailed you a 6-digit verification code. Please enter it below to confirm your
							Email Address.
						</p>

						<Form>
							<div class="mb-3">
								<div class="input-group">
									<Input
										type="email"
										class="py-2 px-3 bg-light bg-opacity-40 border-light"
										placeholder="you@example.com"
										disabled
									/>
								</div>
							</div>

							<div class="mb-3">
								<!-- svelte-ignore a11y-label-has-associated-control -->
								<label class="form-label d-flex">
									Enter your 6-digit code <span class="text-danger ms-1">*</span>
								</label>
								<OtpInput bind:value={otpValue} />
							</div>

							<div class="mb-3">
								<div class="input-group">
									<Input
										type="password"
										bind:value={password}
										class="py-2 px-3 bg-light bg-opacity-40 border-light"
										placeholder="Enter Password"
										required
									/>
								</div>
								<PasswordStrengthBar {password} />
							</div>

							<div class="mb-3">
								<div class="input-group">
									<Input
										type="password"
										class="py-2 px-3 bg-light bg-opacity-40 border-light"
										placeholder="Confirm New password"
										required
									/>
								</div>
							</div>

							<div class="mb-3 d-flex">
								<Input type="checkbox" name="termAndPolicy" label="Agree the Terms & Policy" />
							</div>

							<div class="d-grid">
								<Button color="primary" type="submit" class="fw-semibold py-2"
									>Update Password
								</Button>
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
