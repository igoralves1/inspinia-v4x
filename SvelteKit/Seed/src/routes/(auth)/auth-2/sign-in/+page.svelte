<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import Icon from '@iconify/svelte';
	import AuthLogo from '$lib/components/AuthLogo.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import { Button, Card, Col, Container, Form, Input, Row } from '@sveltestrap/sveltestrap';
</script>

<PageMeta title="Sign In" />

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
										Let’s get you signed in. Enter your email and password to continue.
									</p>
								</div>

								<Form>
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
											<Input type="password" id="userPassword" placeholder="••••••••" required />
										</div>
									</div>

									<div class="d-flex justify-content-between align-items-center mb-3">
										<Input type="checkbox" name="termAndPolicy" label="Keep me signed in" />
										<a
											href="/auth-2/reset-password"
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
									<a
										href="/auth-2/sign-up"
										class="text-decoration-underline link-offset-3 fw-semibold"
									>
										Create an account
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
