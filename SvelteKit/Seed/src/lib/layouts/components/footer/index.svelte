<script lang="ts">
	import { appName, author, currentYear } from '$lib/helpers/index.js';
	import { Col, Container, Row } from '@sveltestrap/sveltestrap';
</script>

<footer class="footer">
	<Container fluid>
		<Row>
			<Col md="6" class="text-center text-md-start">
				© 2014 - {currentYear}
				{appName} By <span class="fw-semibold">{author}</span>
			</Col>
			<Col md="6">
				<div class="text-md-end d-none d-md-block">
					10GB of <span class="fw-bold">250GB</span> Free.
				</div>
			</Col>
		</Row>
	</Container>
</footer>
