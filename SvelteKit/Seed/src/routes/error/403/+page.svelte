<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import { Col, Row } from '@sveltestrap/sveltestrap';
	import AuthLogo from '$lib/components/AuthLogo.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
</script>

<PageMeta title="403 Error" />

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
			<div class="card auth-box-form border-0 mb-0">
				<div class="card-body min-vh-100 d-flex flex-column justify-content-center">
					<div class="auth-brand text-center">
						<AuthLogo />
					</div>

					<div class="p-2 text-center mt-auto">
						<div class="error-glitch" data-text="403">403</div>
						<h3 class="fw-bold text-uppercase">Forbidden</h3>
						<p class="text-muted">You don't have permission to access this resource.</p>

						<a href="/" class="btn btn-primary mt-3 rounded-pill">Go Home</a>
					</div>

					<p class="text-center text-muted mt-auto mb-0">
						© 2014 - {currentYear} INSPINIA — by
						<span class="fw-bold">{author}</span>
					</p>
				</div>
			</div>
		</Col>
	</Row>
</div>
