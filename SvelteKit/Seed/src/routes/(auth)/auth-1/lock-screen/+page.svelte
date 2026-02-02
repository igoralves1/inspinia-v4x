<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import { Button, Card, Col, Container, Form, Input, Row } from '@sveltestrap/sveltestrap';
	import AuthLogo from '$lib/components/AuthLogo.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import user1 from '$lib/assets/images/users/user-1.jpg';
</script>

<PageMeta title="Lock Screen" />

<div class="auth-box overflow-hidden align-items-center d-flex">
	<Container>
		<Row class="justify-content-center">
			<Col sm="8" md="6" xxl="4">
				<div class="auth-brand text-center mb-4">
					<AuthLogo />
					<h4 class="fw-bold mt-3">Lock Screen! | IN+</h4>
					<p class="text-muted w-lg-75 mx-auto">
						This screen is locked. Enter your password to continue
					</p>
				</div>

				<Card class="p-4 rounded-4">
					<div class="text-center mb-4">
						<img src={user1} class="rounded-circle img-thumbnail avatar-xxl mb-2" alt="thumbnail" />
						<h5 class="fs-md">Damian D.</h5>
					</div>

					<Form>
						<div class="mb-3">
							<label for="userPassword" class="form-label">
								Password <span class="text-danger">*</span>
							</label>
							<div class="input-group">
								<Input type="password" id="userPassword" placeholder="••••••••" required />
							</div>
						</div>

						<div class="d-grid">
							<Button type="submit" color="primary" class="fw-semibold py-2 w-100">Unlock</Button>
						</div>
					</Form>

					<p class="text-muted text-center mt-4 mb-0">
						Not you? Return to
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
