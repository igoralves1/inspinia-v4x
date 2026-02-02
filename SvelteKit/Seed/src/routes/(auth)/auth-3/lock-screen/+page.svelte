<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import { Button, Card, Col, Form, Input, Row } from '@sveltestrap/sveltestrap';
	import AuthLogo from '$lib/components/AuthLogo.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import user1 from '$lib/assets/images/users/user-1.jpg';
</script>

<PageMeta title="Lock Screen" />

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
						<h4 class="fw-bold">Lock Screen ! | IN+</h4>
						<p class="text-muted mx-auto mb-5">
							Let’s get you signed in. Enter your PIN to continue
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
							<div class="mb-3">
								<div class="input-group">
									<Input
										type="password"
										class="py-2 px-3 bg-light bg-opacity-40 border-light"
										id="userPassword"
										placeholder="Enter password"
										required
									/>
								</div>
							</div>

							<div class="d-grid">
								<Button color="primary" type="submit" class="fw-semibold py-2">Unlock</Button>
							</div>
						</Form>

						<p class="mt-4 text-muted text-center mb-4">
							Not you? Return to
							<a href="/auth-3/sign-in" class="text-decoration-underline link-offset-3 fw-semibold">
								Sign in
							</a>
						</p>
					</div>

					<p class="text-center text-muted mt-auto mb-0">
						© 2014 - {currentYear} INSPINIA — by
						<span class="fw-semibold">{author}</span>
					</p>
				</div>
			</Card>
		</Col>
	</Row>
</div>
