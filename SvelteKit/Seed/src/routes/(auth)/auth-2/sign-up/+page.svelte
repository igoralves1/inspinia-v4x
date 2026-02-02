<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import { Button, Card, Col, Container, Form, Input, Row } from '@sveltestrap/sveltestrap';
	import Icon from '@iconify/svelte';
	import AuthLogo from '$lib/components/AuthLogo.svelte';
	import PasswordStrengthBar from '$lib/components/PasswordStrengthBar.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';

	let password = '';
</script>

<PageMeta title="Sign Up" />

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
									<h4 class="fw-bold mt-4">Register to IN+</h4>
									<p class="text-muted w-lg-75 mx-auto">
										Let’s get you started. Create your account by entering your details below.
									</p>
								</div>

								<Form>
									<div class="mb-3">
										<label for="userName" class="form-label">
											Name <span class="text-danger">*</span>
										</label>
										<div class="input-group">
											<span class="input-group-text bg-light">
												<Icon icon="tabler:user" class="text-muted fs-xl" />
											</span>
											<Input type="text" id="userName" placeholder="Damian D." required />
										</div>
									</div>

									<div class="mb-3">
										<label for="userEmail" class="form-label">
											Email address <span class="text-danger">*</span>
										</label>
										<div class="input-group">
											<span class="input-group-text bg-light">
												<Icon icon="tabler:mail" class="text-muted fs-xl" />
											</span>
											<Input type="email" id="userEmail" placeholder="you@example.com" required />
										</div>
									</div>

									<div class="mb-3">
										<label for="userPassword" class="form-label">
											Password <span class="text-danger">*</span>
										</label>
										<div class="input-group">
											<span class="input-group-text bg-light">
												<Icon icon="tabler:lock-password" class="text-muted fs-xl" />
											</span>
											<Input
												id="userPassword"
												bind:value={password}
												type="password"
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
										<Button type="submit" color="primary" class="fw-semibold py-2">
											Create Account
										</Button>
									</div>
								</Form>

								<p class="text-muted text-center mt-4 mb-0">
									Already have an account?
									<a
										href="/auth-2/sign-in"
										class="text-decoration-underline link-offset-3 fw-semibold"
									>
										Login
									</a>
								</p>

								<p class="text-center text-muted mt-4 mb-0">
									© 2014 - {currentYear} INSPINIA — by
									<span class="fw-semibold">{author}</span>
								</p>
							</div>
						</Col>

						<Col lg="6" class="d-none d-lg-block">
							<div class="h-100 position-relative card-side-img rounded-end-4 overflow-hidden">
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
