<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Button, Col, Container, Form, Input, Row } from '@sveltestrap/sveltestrap';
</script>

<section class="section-custom" id="contact">
	<Container>
		<Row>
			<Col sm="12" class="text-center">
				<span class="text-muted rounded-3 d-inline-block">📞 We're Here to Help</span>
				<h2 class="mt-3 fw-bold mb-5">
					Get in Touch with
					<mark class="fst-italic">Our Team</mark>
				</h2>
			</Col>
		</Row>

		<Row>
			<Col xxl="4">
				<div class="p-4">
					<div class="d-flex gap-3 mb-5">
						<div class="avatar-xl flex-shrink-0">
							<span class="avatar-title bg-secondary-subtle text-secondary rounded-circle fs-22">
								<Icon icon="tabler-phone-call" />
							</span>
						</div>
						<div>
							<span class="text-muted">Contact Numbers</span>
							<h5 class="my-2">+1 (800) 123-4567</h5>
							<h5 class="mb-0">+1 (415) 987-6543</h5>
						</div>
					</div>

					<div class="d-flex gap-3 mb-5">
						<div class="avatar-xl flex-shrink-0">
							<span class="avatar-title bg-secondary-subtle text-secondary rounded-circle fs-22">
								<Icon icon="tabler-mail" />
							</span>
						</div>
						<div>
							<span class="text-muted">Email</span>
							<h5 class="my-2">support@yourcompany.com</h5>
							<h5 class="mb-0">info@yourcompany.com</h5>
						</div>
					</div>

					<div class="d-flex gap-3">
						<div class="avatar-xl flex-shrink-0">
							<span class="avatar-title bg-secondary-subtle text-secondary rounded-circle fs-22">
								<Icon icon="tabler-map-pin" />
							</span>
						</div>
						<div>
							<span class="text-muted">Address</span>
							<h5 class="my-1 lh-lg">
								INSPINIA HQ, 123 Market Street, 5th Floor, Financial District, San Francisco, CA
								94103, United States
							</h5>
						</div>
					</div>
				</div>
			</Col>

			<Col xxl="8">
				<Form class="p-4 border rounded-4 border-dashed">
					<Row class="g-3">
						<Col md="6">
							<label for="name" class="form-label">Full Name</label>
							<Input
								type="text"
								class="py-2"
								id="name"
								autocomplete="name"
								placeholder="Enter your full name"
							/>
						</Col>

						<Col md="6">
							<label for="email" class="form-label">Email Address</label>
							<Input
								type="email"
								class="py-2"
								id="email"
								autocomplete="email"
								placeholder="Enter your email"
							/>
						</Col>

						<Col md="12">
							<label for="subject" class="form-label">Subject</label>
							<Input
								type="text"
								class="py-2"
								id="subject"
								placeholder="What’s the reason for contact?"
							/>
						</Col>

						<Col md="12">
							<label for="message" class="form-label">Message</label>
							<Input
								type="textarea"
								class="py-2"
								id="message"
								rows={5}
								placeholder="Write your message here..."
							/>
						</Col>

						<Col md="12" class="text-end">
							<Button color="primary" type="submit" class="rounded-pill">Send Message</Button>
						</Col>
					</Row>
				</Form>
			</Col>
		</Row>
	</Container>
</section>
