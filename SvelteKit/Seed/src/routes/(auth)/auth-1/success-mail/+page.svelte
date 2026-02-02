<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import { Button, Card, Col, Container, Form, Row } from '@sveltestrap/sveltestrap';
	import AuthLogo from '$lib/components/AuthLogo.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import checkmark from '$lib/assets/images/checkmark.png';
</script>

<PageMeta title="Success Mail" />

<div class="auth-box overflow-hidden align-items-center d-flex">
	<Container>
		<Row class="justify-content-center">
			<Col sm="8" md="6" xxl="4">
				<div class="auth-brand text-center mb-4">
					<AuthLogo />
					<h4 class="fw-bold mt-3">Welcome to IN+</h4>
					<p class="text-muted w-lg-75 mx-auto">
						Awesome! You’ve read the important message like a pro.
					</p>
				</div>

				<Card class="p-4 rounded-4">
					<Form>
						<div class="mb-4">
							<div class="avatar-xxl mx-auto mt-2">
								<div
									class="avatar-title bg-light-subtle border border-light border-dashed rounded-circle"
								>
									<img src={checkmark} alt="success" height="64" />
								</div>
							</div>
						</div>

						<h4 class="fw-bold text-center mb-4">Well Done! Email verified Successfully</h4>

						<div class="d-grid">
							<Button type="submit" color="primary" class="fw-semibold py-2 w-100">
								Back to Dashboard
							</Button>
						</div>
					</Form>
				</Card>

				<p class="text-center text-muted mt-4 mb-0">
					© 2014 - {currentYear} INSPINIA — by <span class="fw-semibold">{author}</span>
				</p>
			</Col>
		</Row>
	</Container>
</div>
