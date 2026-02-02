<script lang="ts">
	import { Col, Container, Row } from '@sveltestrap/sveltestrap';
	import BlogCard from './BlogCard.svelte';
	import { blogs } from '../data';
</script>

<section
	class="section-custom bg-light bg-opacity-30 border-top border-bottom border-light"
	id="blog"
>
	<Container>
		<Row>
			<Col sm="12" class="text-center">
				<span class="text-muted rounded-3 d-inline-block">📝 Insights & Resources</span>
				<h2 class="mt-3 fw-bold mb-5">
					Explore Our
					<mark class="fst-italic">Latest</mark>
					Articles and Updates
				</h2>
			</Col>
		</Row>

		<Row class="g-4">
			{#each blogs as blog, idx (idx)}
				<Col lg="4">
					<BlogCard {blog} />
				</Col>
			{/each}
		</Row>
	</Container>
</section>
