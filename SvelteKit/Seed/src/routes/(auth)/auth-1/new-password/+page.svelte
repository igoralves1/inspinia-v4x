<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import { Button, Card, Col, Container, Form, Input, Row } from '@sveltestrap/sveltestrap';
	import AuthLogo from '$lib/components/AuthLogo.svelte';
	import OtpInput from '$lib/components/OtpInput.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import PasswordStrengthBar from '$lib/components/PasswordStrengthBar.svelte';

	let otpValue = '';

	let password = '';
</script>

<PageMeta title="New Password" />

<div class="auth-box overflow-hidden d-flex align-items-center">
	<Container>
		<Row class="justify-content-center">
			<Col sm="8" md="6" xxl="4">
				<div class="auth-brand text-center mb-4">
					<AuthLogo />
					<h4 class="fw-bold mt-3">Setup New Password ! | IN+</h4>
					<p class="text-muted w-lg-75 mx-auto">
						We've emailed you a 6-digit verification code. Please enter it below to confirm your
						email address
					</p>
				</div>

				<Card class="p-4 rounded-4">
					<Form>
						<div class="mb-3">
							<label for="userEmail" class="form-label"
								>Email address <span class="text-danger">*</span></label
							>
							<div class="input-group">
								<Input type="email" id="userEmail" placeholder="you@example.com" disabled />
							</div>
						</div>

						<div class="mb-3">
							<!-- svelte-ignore a11y-label-has-associated-control -->
							<label class="form-label"
								>Enter your 6-digit code <span class="text-danger">*</span></label
							>
							<OtpInput bind:value={otpValue} />
						</div>

						<div class="mb-3">
							<label for="userPassword" class="form-label">
								Password <span class="text-danger">*</span>
							</label>
							<Input
								id="userPassword"
								bind:value={password}
								type="password"
								placeholder="••••••••"
								required
							/>
							<PasswordStrengthBar {password} />
						</div>

						<div class="mb-3">
							<label for="userNewPassword" class="form-label"
								>Confirm New Password <span class="text-danger">*</span></label
							>
							<div class="input-group">
								<Input type="password" id="userNewPassword" placeholder="••••••••" required />
							</div>
						</div>

						<div class="mb-3">
							<Input type="checkbox" label="Agree the Terms & Policy" name="agree" />
						</div>

						<Button type="submit" color="primary" class="fw-semibold py-2 w-100">
							Update Password
						</Button>
					</Form>

					<p class="mt-4 text-muted text-center mb-4">
						Don’t have a code?
						<a href={null} class="text-decoration-underline link-offset-2 fw-semibold">Resend</a> or
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
					© 2014 - {currentYear} INSPINIA — by
					<span class="fw-semibold">{author}</span>
				</p>
			</Col>
		</Row>
	</Container>
</div>
