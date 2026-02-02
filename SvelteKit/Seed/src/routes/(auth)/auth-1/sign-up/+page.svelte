<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import { Button, Card, Col, Container, Form, Input, Row } from '@sveltestrap/sveltestrap';
	import AuthLogo from '$lib/components/AuthLogo.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import PasswordStrengthBar from '$lib/components/PasswordStrengthBar.svelte';

	let password = '';
</script>

<PageMeta title="Sign Up" />

<div class="auth-box overflow-hidden d-flex align-items-center">
	<Container>
		<Row class="justify-content-center">
			<Col sm="8" md="6" xxl="4">
				<div class="auth-brand text-center mb-4">
					<AuthLogo />
					<h4 class="fw-bold mt-3">Register to IN+</h4>
					<p class="text-muted w-lg-75 mx-auto">
						Let’s get you started. Create your account by entering your details below.
					</p>
				</div>

				<Card class="p-4 rounded-4">
					<Form>
						<div class="mb-3">
							<label for="userName" class="form-label">
								Name <span class="text-danger">*</span>
							</label>
							<div class="input-group">
								<Input type="text" id="userName" placeholder="Damian D." required />
							</div>
						</div>

						<div class="mb-3">
							<label for="userEmail" class="form-label">
								Email address <span class="text-danger">*</span>
							</label>
							<div class="input-group">
								<Input type="email" id="userEmail" placeholder="you@example.com" required />
							</div>
						</div>

						<div class="mb-3">
							<label for="userPassword" class="form-label">
								Password <span class="text-danger">*</span>
							</label>
							<div class="input-group">
								<Input
									type="password"
									bind:value={password}
									id="userPassword"
									placeholder="••••••••"
									required
								/>
							</div>
							<PasswordStrengthBar {password} />
						</div>

						<div class="mb-3">
							<Input type="checkbox" name="termAndPolicy" label="Agree the Terms & Policy" />
						</div>

						<div class="d-grid">
							<Button color="primary" type="submit" class="fw-semibold py-2">Create Account</Button>
						</div>
					</Form>

					<p class="text-muted text-center mt-4 mb-0">
						Already have an account?
						<a href="/auth-1/sign-in" class="text-decoration-underline link-offset-3 fw-semibold">
							Login
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
