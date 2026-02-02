<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import { Button, Card, Col, Form, Input, Row } from '@sveltestrap/sveltestrap';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import AuthLogo from '$lib/components/AuthLogo.svelte';
</script>

<PageMeta title="Reset Password" />

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
						<h4 class="fw-bold">Forgot Password ? | IN++</h4>
						<p class="text-muted auth-sub-text mx-auto">
							Enter your email address and we'll send you a link to reset your password.
						</p>

						<Form class="mt-4">
							<div class="mb-3">
								<div class="input-group">
									<Input
										type="email"
										class="py-2 px-3 bg-light bg-opacity-40 border-light"
										placeholder="Enter email"
										required
									/>
								</div>
							</div>

							<div class="d-flex justify-content-between align-items-center mb-3">
								<Input type="checkbox" name="termAndPolicy" label="Agree the Terms & Policy" />
							</div>

							<div class="d-grid">
								<Button color="primary" type="submit" class="fw-semibold py-2">Send Request</Button>
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
