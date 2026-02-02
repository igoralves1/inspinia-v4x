<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import { Col, Container, Row } from '@sveltestrap/sveltestrap';
	import AuthLogo from '$lib/components/AuthLogo.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import img404 from '$lib/assets/images/svg/404.svg';
</script>

<PageMeta title="404 Error" />

<div class="auth-box overflow-hidden align-items-center d-flex">
	<Container>
		<Row class="justify-content-center">
			<Col sm="8" md="6" xxl="4">
				<div class="auth-brand text-center mb-3">
					<AuthLogo />
				</div>

				<div class="p-2 text-center">
					<img src={img404} alt="404" class="img-fluid" />
					<h3 class="fw-bold text-uppercase">Page Not Found</h3>
					<p class="text-muted">The page you’re looking for doesn’t exist or has been moved.</p>

					<a href="/" class="btn btn-primary mt-3 rounded-pill"> Go Home</a>
				</div>

				<p class="text-center text-muted mt-5 mb-0">
					© 2014 - {currentYear} INSPINIA — by <span class="fw-bold">{author}</span>
				</p>
			</Col>
		</Row>
	</Container>
</div>
