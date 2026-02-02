<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import { Button, Card, Col, Container, Form, Input, Row } from '@sveltestrap/sveltestrap';
	import AuthLogo from '$lib/components/AuthLogo.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
</script>

<PageMeta title="Reset Password" />

<div class="auth-box overflow-hidden d-flex align-items-center">
	<Container>
		<Row class="justify-content-center">
			<Col sm="8" md="6" xxl="4">
				<div class="auth-brand text-center mb-4">
					<AuthLogo />
					<h4 class="fw-bold mt-3">Forgot Password ? | IN+</h4>
					<p class="text-muted w-lg-75 mx-auto">
						Enter your email address and we'll send you a link to reset your password.
					</p>
				</div>

				<Card class="p-4 rounded-4">
					<Form>
						<div class="mb-3">
							<label for="userEmail" class="form-label">
								Email address <span class="text-danger">*</span>
							</label>
							<div class="input-group">
								<Input type="email" id="userEmail" placeholder="you@example.com" required />
							</div>
						</div>

						<div class="mb-3">
							<Input type="checkbox" label="Agree the Terms & Policy" name="agree" />
						</div>

						<div class="d-grid">
							<Button color="primary" type="submit" class="fw-semibold py-2">Send Request</Button>
						</div>
					</Form>

					<p class="text-muted text-center mt-4 mb-0">
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
