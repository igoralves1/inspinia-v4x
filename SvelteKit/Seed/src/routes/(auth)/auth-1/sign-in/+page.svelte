<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import { Button, Card, Col, Container, Form, Input, Row } from '@sveltestrap/sveltestrap';
	import AuthLogo from '$lib/components/AuthLogo.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
</script>

<PageMeta title="Sign In" />

<div class="auth-box overflow-hidden d-flex align-items-center">
	<Container>
		<Row class="justify-content-center">
			<Col sm="8" md="6" xxl="4">
				<div class="auth-brand text-center mb-4">
					<AuthLogo />
					<h4 class="fw-bold mt-3">Welcome to IN+</h4>
					<p class="text-muted w-lg-75 mx-auto">
						Let’s get you signed in. Enter your email and password to continue.
					</p>
				</div>

				<Card class="rounded-4 p-4">
					<Form>
						<div class="mb-3">
							<label for="userEmail" class="form-label">
								Email address <span class="text-danger">*</span>
							</label>
							<Input id="userEmail" type="email" placeholder="you@example.com" required />
						</div>

						<div class="mb-3">
							<label for="userPassword" class="form-label">
								Password <span class="text-danger">*</span>
							</label>
							<Input id="userPassword" type="password" placeholder="••••••••" required />
						</div>

						<div class="d-flex justify-content-between align-items-center mb-3">
							<Input type="checkbox" label="Keep me signed in" name="keepSignedIn" />
							<a
								href="/auth-1/reset-password"
								class="text-decoration-underline link-offset-3 text-muted"
							>
								Forgot Password?
							</a>
						</div>

						<div class="d-grid">
							<Button type="submit" color="primary" class="fw-semibold py-2">Sign In</Button>
						</div>
					</Form>

					<p class="text-muted text-center mt-4 mb-0">
						New here?
						<a href="/auth-1/sign-up" class="text-decoration-underline link-offset-3 fw-semibold">
							Create an account
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
