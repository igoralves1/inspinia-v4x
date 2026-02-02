<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import { Col, Container, Row } from '@sveltestrap/sveltestrap';
	import AuthLogo from '$lib/components/AuthLogo.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
</script>

<PageMeta title="400 Error" />

<div class="auth-box overflow-hidden align-items-center d-flex">
	<Container>
		<Row class="justify-content-center">
			<Col sm="12" md="6" xxl="4">
				<div class="auth-brand text-center mb-3">
					<AuthLogo />
				</div>

				<div class="p-2 text-center">
					<div class="error-glitch" data-text="400">400</div>
					<h3 class="fw-bold text-uppercase">Bad Request</h3>
					<p class="text-muted">Something's not right in the request you made.</p>

					<a href="/" class="btn btn-primary mt-3 rounded-pill">Go Home</a>
				</div>

				<p class="text-center text-muted mt-5 mb-0">
					© 2014 - {currentYear} INSPINIA — by <span class="fw-bold">{author}</span>
				</p>
			</Col>
		</Row>
	</Container>
</div>
